#!/usr/bin/env node
/**
 * Auditoria de canonicalização do Personal por Perto.
 *
 * Modo offline (padrão): varre o dist/ e confere, página a página:
 *   - canonical presente, absoluto, https + www, com barra final;
 *   - canonical == URL correspondente do sitemap;
 *   - og:url == canonical;
 *   - URLs de página no JSON-LD (mainEntityOfPage, item de breadcrumb)
 *     com barra final e no domínio oficial;
 *   - links internos <a href="/..."> sem barra final (exceto arquivos);
 *   - sitemap sem duplicatas, sem variantes e só com páginas existentes no dist.
 *
 * Modo live (--live [amostra]): faz GET real na URL oficial e na variante
 *   sem barra e confere 200 / redirect permanente com 1 salto.
 *   (Requer rede liberada para o domínio de produção.)
 *
 * Uso:
 *   node scripts/audit-canonical.mjs            # auditoria offline completa
 *   node scripts/audit-canonical.mjs --live 30  # + testes HTTP em 30 amostras
 */
import { readFileSync, readdirSync, existsSync, statSync } from 'node:fs';
import { join } from 'node:path';

const SITE = 'https://www.personalporperto.com.br';
const DIST = 'dist';

const paginas = [];
(function walk(dir) {
  for (const f of readdirSync(dir)) {
    const p = join(dir, f);
    if (statSync(p).isDirectory()) walk(p);
    else if (f === 'index.html') paginas.push(p);
  }
})(DIST);

// URL oficial (com barra) correspondente a um dist/**/index.html
const urlDe = (p) => {
  const rel = p.slice(DIST.length, -'index.html'.length).replace(/\\/g, '/');
  return `${SITE}${rel}`;
};

const sitemapUrls = new Set();
for (const f of readdirSync(DIST).filter((f) => /^sitemap.*\.xml$/.test(f))) {
  const xml = readFileSync(join(DIST, f), 'utf8');
  for (const m of xml.matchAll(/<loc>([^<]+)<\/loc>/g)) {
    if (!m[1].endsWith('.xml')) sitemapUrls.add(m[1]);
  }
}

const falhas = [];
const fail = (pagina, tipo, detalhe) => falhas.push({ pagina, tipo, detalhe });

const EXT = /\.[a-z0-9]{2,12}$/i;
let totalLinksSemBarra = 0;

for (const p of paginas) {
  const html = readFileSync(p, 'utf8');
  const oficial = urlDe(p);
  const rel = oficial.slice(SITE.length);
  if (rel.startsWith('/404')) continue;

  const can = html.match(/<link rel="canonical" href="([^"]+)"/)?.[1];
  if (!can) fail(rel, 'canonical-ausente', '');
  else {
    if (can !== oficial) fail(rel, 'canonical-divergente', can);
    if (!can.endsWith('/')) fail(rel, 'canonical-sem-barra', can);
    if (!can.startsWith(SITE)) fail(rel, 'canonical-dominio', can);
    if (/[#?]/.test(can)) fail(rel, 'canonical-com-parametros', can);
  }

  const og = html.match(/property="og:url" content="([^"]+)"/)?.[1];
  if (og && og !== can) fail(rel, 'og-url-divergente', og);

  if (!sitemapUrls.has(oficial)) fail(rel, 'fora-do-sitemap', '');

  // JSON-LD: URLs de página do próprio domínio devem ter barra final.
  for (const m of html.matchAll(/"(?:@id|item|url)":"(https:\/\/www\.personalporperto\.com\.br[^"]*)"/g)) {
    const u = m[1].split('#')[0];
    if (!u || u === SITE || EXT.test(u) || u.includes('?')) continue;
    if (!u.endsWith('/')) fail(rel, 'jsonld-sem-barra', m[1]);
  }

  // Links internos sem barra final (ignora arquivos, âncoras e queries).
  for (const m of html.matchAll(/href="(\/[^"#?]*)"/g)) {
    const u = m[1];
    if (u === '/' || u.endsWith('/') || EXT.test(u)) continue;
    totalLinksSemBarra++;
    fail(rel, 'link-interno-sem-barra', u);
  }
}

// Sitemap: variantes, duplicatas e páginas inexistentes.
const vistos = new Set();
for (const u of sitemapUrls) {
  if (!u.endsWith('/')) fail('(sitemap)', 'sitemap-sem-barra', u);
  if (!u.startsWith(SITE)) fail('(sitemap)', 'sitemap-dominio', u);
  const norm = u.replace(/\/$/, '');
  if (vistos.has(norm)) fail('(sitemap)', 'sitemap-duplicata', u);
  vistos.add(norm);
  const local = join(DIST, u.slice(SITE.length), 'index.html');
  if (!existsSync(local)) fail('(sitemap)', 'sitemap-404', u);
}

// ---- Relatório offline ----
console.log(`Páginas no dist: ${paginas.length}`);
console.log(`URLs no sitemap: ${sitemapUrls.size}`);
console.log(`Links internos sem barra: ${totalLinksSemBarra}`);
if (!falhas.length) console.log('OFFLINE: OK — nenhum problema encontrado.');
else {
  const porTipo = {};
  for (const f of falhas) (porTipo[f.tipo] ??= []).push(f);
  for (const [tipo, fs] of Object.entries(porTipo)) {
    console.log(`\nFALHA ${tipo}: ${fs.length}`);
    for (const f of fs.slice(0, 10)) console.log(`  ${f.pagina}  ${f.detalhe}`);
    if (fs.length > 10) console.log(`  ... +${fs.length - 10}`);
  }
  process.exitCode = 1;
}

// ---- Modo live ----
const liveIdx = process.argv.indexOf('--live');
if (liveIdx !== -1) {
  const n = parseInt(process.argv[liveIdx + 1] || '30', 10);
  const amostra = [...sitemapUrls].filter((u) => u !== `${SITE}/`)
    .sort(() => 0.5 - Math.random()).slice(0, n);
  console.log(`\nLIVE: testando ${amostra.length} URLs (GET real)...`);
  let ok = 0;
  for (const oficial of amostra) {
    const variante = oficial.replace(/\/$/, '');
    try {
      const r1 = await fetch(oficial, { redirect: 'manual' });
      const r2 = await fetch(variante, { redirect: 'manual' });
      const loc = r2.headers.get('location');
      const bom =
        r1.status === 200 &&
        (r2.status === 301 || r2.status === 308) &&
        (loc === oficial || loc === new URL(oficial).pathname);
      if (bom) ok++;
      else console.log(`  FALHA ${variante}: oficial=${r1.status} variante=${r2.status} location=${loc}`);
    } catch (e) {
      console.log(`  ERRO ${variante}: ${e.message}`);
    }
  }
  console.log(`LIVE: ${ok}/${amostra.length} corretos.`);
  if (ok !== amostra.length) process.exitCode = 1;
}
