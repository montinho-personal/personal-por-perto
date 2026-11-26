#!/usr/bin/env node
/**
 * Teste de navegador — regra do CLAUDE.md ("Verificação no navegador",
 * pedido do Renato em 25/11/2026): toda ação no site passa por um navegador
 * de verdade antes de ser dada como pronta.
 *
 * Abre cada página no Chromium em DUAS telas (desktop 1280×800 e celular
 * 390×844, toque e user agent de celular) e verifica:
 *   1. a página responde 200 e tem <h1>;
 *   2. nenhum erro de JavaScript (pageerror) nem erro no console;
 *   3. nenhum recurso do próprio site quebrado (CSS, JS, imagem, fonte);
 *   4. no celular, nada passa da largura da tela (sem rolagem lateral);
 *   5. imagens do próprio site carregadas (naturalWidth > 0);
 *   6. todo link interno da página aponta para uma página que existe;
 *   7. botões: clica em cada botão visível (menos os de busca e de envio
 *      de formulário externo) e confere que nenhum erro aparece;
 *   8. calculadoras: em cada campo de texto/número com valor, troca o
 *      valor, dispara input/change e confere que a página reage sem erro.
 *
 * Uso:
 *   npm run test:navegador                 → páginas alteradas no último commit + amostra fixa
 *   npm run test:navegador -- /guias/x/ /calorias/   → só essas
 *   npm run test:navegador -- --base https://www.personalporperto.com.br  (no ar, depois do deploy)
 *   npm run test:navegador -- --desde <commit>   → alteradas desde esse commit
 *   npm run test:navegador -- --prints <pasta>   → salva print do celular de cada página
 *
 * Sem --base, serve a pasta dist/ (rode `npm run build` antes).
 * Terceiros (YouTube, Google, Analytics) são bloqueados: o teste mede o
 * site, não a rede deles. Sai com código 1 se houver qualquer falha.
 */
import { createRequire } from 'node:module';
import http from 'node:http';
import fs from 'node:fs';
import path from 'node:path';
import { execSync } from 'node:child_process';

/* O Playwright do ambiente é global (fora do node_modules); require o acha, import não. */
let chromium, devices;
try {
  ({ chromium, devices } = createRequire(import.meta.url)('playwright'));
} catch {
  console.error('Playwright não encontrado. No ambiente do Claude ele já vem instalado; fora dele: npm i -D playwright && npx playwright install chromium');
  process.exit(1);
}

const ROOT = process.cwd();
const DIST = path.join(ROOT, 'dist');
const args = process.argv.slice(2);
const opt = (k) => {
  const i = args.indexOf(k);
  if (i < 0) return undefined;
  const v = args[i + 1];
  args.splice(i, 2);
  return v;
};
const base = opt('--base');
const desde = opt('--desde') ?? 'HEAD~1';
const prints = opt('--prints');
const AMOSTRA = ['/', '/calorias/corrida/', '/personal-trainer/sao-paulo-sp/', '/guias/'];

/* Página alterada → URL. Arquivos de dados de cidade viram a página da cidade. */
function paginasAlteradas() {
  let arquivos = [];
  try {
    arquivos = execSync(`git diff --name-only ${desde} HEAD`, { encoding: 'utf8' }).split('\n').filter(Boolean);
  } catch {
    return [];
  }
  const urls = new Set();
  for (const f of arquivos) {
    let m = f.match(/^src\/pages\/(.+)\.astro$/);
    if (m && !m[1].includes('[')) {
      const p = m[1].replace(/(^|\/)index$/, '');
      urls.add('/' + (p ? p + '/' : ''));
      continue;
    }
    m = f.match(/^src\/data\/cidades\/([a-z0-9-]+)\.ts$/);
    if (m) urls.add(`/personal-trainer/${m[1]}/`);
  }
  return [...urls];
}

let paginas = args.filter((a) => a.startsWith('/'));
if (paginas.length === 0) {
  const alteradas = paginasAlteradas();
  // Em lote grande (levas de 50 cidades), testa uma amostra das alteradas.
  const amostraAlteradas = alteradas.length > 8 ? alteradas.filter((_, i) => i % Math.ceil(alteradas.length / 8) === 0) : alteradas;
  paginas = [...new Set([...amostraAlteradas, ...AMOSTRA])];
}

/* Servidor estático do dist/, para testar antes do push. */
function servirDist() {
  const tipos = { '.html': 'text/html; charset=utf-8', '.css': 'text/css', '.js': 'text/javascript', '.json': 'application/json', '.svg': 'image/svg+xml', '.webp': 'image/webp', '.png': 'image/png', '.jpg': 'image/jpeg', '.jpeg': 'image/jpeg', '.ico': 'image/x-icon', '.woff2': 'font/woff2', '.woff': 'font/woff', '.xml': 'application/xml', '.pdf': 'application/pdf', '.txt': 'text/plain' };
  const srv = http.createServer((req, res) => {
    let u = decodeURIComponent(new URL(req.url, 'http://x').pathname);
    let f = path.join(DIST, u);
    if (!f.startsWith(DIST)) { res.writeHead(403); return res.end(); }
    if (fs.existsSync(f) && fs.statSync(f).isDirectory()) f = path.join(f, 'index.html');
    if (!fs.existsSync(f)) { res.writeHead(404, { 'content-type': 'text/html' }); return res.end('404'); }
    res.writeHead(200, { 'content-type': tipos[path.extname(f)] ?? 'application/octet-stream' });
    fs.createReadStream(f).pipe(res);
  });
  return new Promise((ok) => srv.listen(0, '127.0.0.1', () => ok(srv)));
}

function existeNoDist(href) {
  const u = href.split('#')[0].split('?')[0];
  if (!u) return true;
  const f = path.join(DIST, decodeURIComponent(u));
  return fs.existsSync(f) && (fs.statSync(f).isFile() || fs.existsSync(path.join(f, 'index.html')));
}

const TELAS = {
  desktop: { viewport: { width: 1280, height: 800 } },
  celular: { ...devices['iPhone 13'], deviceScaleFactor: 1 },
};

async function testar(browser, origem, url, tela) {
  const falhas = [];
  const ctx = await browser.newContext(TELAS[tela]);
  const page = await ctx.newPage();
  const host = new URL(origem).host;
  await page.route('**/*', (route) => {
    const h = new URL(route.request().url()).host;
    return h === host ? route.continue() : route.abort();
  });
  page.on('pageerror', (e) => falhas.push(`erro de JavaScript: ${e.message.split('\n')[0]}`));
  page.on('console', (m) => {
    if (m.type() !== 'error') return;
    const t = m.text();
    if (/ERR_FAILED|ERR_BLOCKED|net::|Failed to load resource/.test(t)) return; // terceiros bloqueados de propósito
    falhas.push(`erro no console: ${t.slice(0, 160)}`);
  });
  page.on('response', (r) => {
    const u = new URL(r.url());
    if (u.host === host && r.status() >= 400) falhas.push(`recurso quebrado (${r.status()}): ${u.pathname}`);
  });

  const resp = await page.goto(origem + url, { waitUntil: 'load', timeout: 60000 }).catch((e) => {
    falhas.push(`não abriu: ${e.message.split('\n')[0]}`);
    return null;
  });
  if (!resp) { await ctx.close(); return falhas; }
  if (resp.status() !== 200) falhas.push(`status ${resp.status()}`);
  await page.waitForTimeout(150);

  if ((await page.locator('h1').count()) === 0) falhas.push('página sem <h1>');

  if (tela === 'celular') {
    const larg = await page.evaluate(() => ({ doc: document.documentElement.scrollWidth, tela: window.innerWidth }));
    if (larg.doc > larg.tela + 1) {
      const culpado = await page.evaluate(() => {
        const w = window.innerWidth;
        for (const el of document.querySelectorAll('body *')) {
          const r = el.getBoundingClientRect();
          if (r.right > w + 1 && r.width > 0 && getComputedStyle(el).position !== 'fixed') {
            return `${el.tagName.toLowerCase()}${el.id ? '#' + el.id : ''}${el.className && typeof el.className === 'string' ? '.' + el.className.split(' ')[0] : ''}`;
          }
        }
        return '?';
      });
      falhas.push(`rolagem lateral no celular: página com ${larg.doc}px numa tela de ${larg.tela}px (primeiro elemento que passa: ${culpado})`);
    }
    if (prints) {
      fs.mkdirSync(prints, { recursive: true });
      await page.screenshot({ path: path.join(prints, (url.replace(/\//g, '_') || 'home') + '.png'), fullPage: false });
    }
  }

  // Imagens do próprio site que não carregaram (só as já carregadas; lazy fora da tela não conta).
  const quebradas = await page.evaluate((h) => [...document.images]
    .filter((i) => i.getAttribute('src') && i.complete && i.naturalWidth === 0 && new URL(i.currentSrc || i.src, location.href).host === h)
    .map((i) => new URL(i.currentSrc || i.src).pathname), host);
  for (const q of quebradas) falhas.push(`imagem quebrada: ${q}`);

  // Links internos (só no desktop, para não repetir).
  if (tela === 'desktop' && !base) {
    const hrefs = await page.evaluate(() => [...document.querySelectorAll('a[href^="/"]')].map((a) => a.getAttribute('href')));
    for (const h of new Set(hrefs)) if (!existeNoDist(h)) falhas.push(`link interno para página que não existe: ${h}`);
  }

  // Calculadoras: troca cada campo preenchido e dispara os eventos.
  const campos = page.locator('main input[type="text"], main input[type="number"], main input:not([type]), article input[type="text"], article input[type="number"]');
  const nCampos = Math.min(await campos.count(), 12);
  for (let i = 0; i < nCampos; i++) {
    const c = campos.nth(i);
    if (!(await c.isVisible().catch(() => false))) continue;
    const v = await c.inputValue().catch(() => '');
    if (!v) continue;
    const novo = /^\d+([.,]\d+)?$/.test(v) ? String(Math.max(1, Math.round(parseFloat(v.replace(',', '.')) * 1.2))) : v;
    await c.fill(novo).catch(() => {});
    await c.dispatchEvent('change').catch(() => {});
  }

  // Botões visíveis (abas, seletores, calcular, abrir menu, FAQ).
  // Botões do conteúdo (calculadoras, abas, FAQ) e o do menu no celular.
  const botoes = page.locator('main button:visible, article button:visible, main summary:visible, article summary:visible, header button[aria-controls]:visible');
  const nBotoes = Math.min(await botoes.count(), 15);
  for (let i = 0; i < nBotoes; i++) {
    const b = botoes.nth(i);
    const tipo = (await b.getAttribute('type').catch(() => null)) ?? '';
    const rotulo = ((await b.getAttribute('aria-label').catch(() => '')) ?? '') + ((await b.innerText().catch(() => '')) ?? '');
    if (tipo === 'submit' && /buscar/i.test(rotulo)) continue; // busca leva para outra página
    await b.click({ timeout: 300, noWaitAfter: true }).catch(() => {});
    await page.waitForTimeout(40);
    if (page.url().split('#')[0] !== (origem + url).split('#')[0]) {
      await page.goto(origem + url, { waitUntil: 'load' }).catch(() => {});
    }
  }
  await page.waitForTimeout(200);
  await ctx.close();
  return falhas;
}

const srv = base ? null : await servirDist();
const origem = base ? base.replace(/\/$/, '') : `http://127.0.0.1:${srv.address().port}`;
if (!base && !fs.existsSync(DIST)) {
  console.error('dist/ não existe: rode `npm run build` antes.');
  process.exit(1);
}
const browser = await chromium.launch();
let total = 0;
console.log(`Teste de navegador — ${paginas.length} página(s), desktop e celular, em ${base ?? 'dist/ local'}\n`);
for (const url of paginas) {
  for (const tela of ['desktop', 'celular']) {
    const f = await testar(browser, origem, url, tela);
    total += f.length;
    console.log(`${f.length ? '✗' : '✓'} ${tela.padEnd(7)} ${url}`);
    for (const x of f) console.log(`    · ${x}`);
  }
}
await browser.close();
if (srv) srv.close();
console.log(total ? `\nFALHOU — ${total} problema(s).` : '\n✓ tudo certo');
process.exit(total ? 1 : 0);
