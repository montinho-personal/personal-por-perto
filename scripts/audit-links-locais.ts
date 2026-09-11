/**
 * Auditoria da arquitetura de links internos — Brasil → Estado → Cidade → Bairro.
 *
 * POR QUE ESTE SCRIPT EXISTE
 *
 * A hierarquia geográfica do portal era correta no papel e frouxa no HTML: a
 * página de bairro linkava a cidade, mas não o estado nem o hub nacional, e o
 * breadcrumb tinha três níveis onde deveria ter cinco. Problemas assim não
 * aparecem lendo o código — aparecem contando arestas no HTML gerado.
 *
 * Por isso a auditoria roda sobre `dist/`, não sobre `src/`: o que o Google vê
 * é o HTML, e é nele que link quebrado, link sem barra final e canonical
 * divergente se manifestam.
 *
 * Uso:
 *   npm run build && npm run audit:links
 *   npm run audit:links -- --piloto      (só as páginas do piloto)
 *   npm run audit:links -- --tabela      (tabela de auditoria por página)
 *
 * Saída com código 1 quando encontra defeito bloqueante (link quebrado, link
 * que depende de redirect, página órfã, canonical divergente), para poder
 * entrar em CI sem virar enfeite.
 */
import { existsSync, readFileSync, readdirSync, statSync } from 'node:fs';
import { join } from 'node:path';
import { bairros, bairrosPorCidade } from '../src/data/bairros';
import { cidades, cidadesPorSlug } from '../src/data/cidades';
import { estados } from '../src/data/estados';

const DIST = 'dist';
const DOMINIO = 'https://www.personalporperto.com.br';

const args = process.argv.slice(2);
const soPiloto = args.includes('--piloto');
const comTabela = args.includes('--tabela');

/** As dez páginas do piloto, por slug de bairro. */
const PILOTO = [
  'personal-trainer-tijuca',
  'personal-trainer-barra-da-tijuca',
  'personal-trainer-savassi',
  'personal-trainer-icarai',
  'personal-trainer-boa-viagem',
  'personal-trainer-leblon',
  'personal-trainer-moema',
  'personal-trainer-brooklin',
  'personal-trainer-asa-sul',
  'personal-trainer-gleba-palhano',
];

// ---------------------------------------------------------------- utilidades

/** Caminha o dist e devolve o caminho de cada index.html, como rota do site. */
function rotas(dir = DIST, base = ''): Map<string, string> {
  const mapa = new Map<string, string>();
  for (const entrada of readdirSync(dir)) {
    const caminho = join(dir, entrada);
    if (statSync(caminho).isDirectory()) {
      for (const [r, f] of rotas(caminho, `${base}/${entrada}`)) mapa.set(r, f);
    } else if (entrada === 'index.html') {
      mapa.set(`${base}/`, caminho);
    }
  }
  return mapa;
}

/** Extrai os <a href> de um HTML, com o atributo inteiro para checagens. */
function ancoras(html: string): { href: string; tag: string; texto: string }[] {
  const out: { href: string; tag: string; texto: string }[] = [];
  const re = /<a\b([^>]*)>([\s\S]*?)<\/a>/gi;
  let m: RegExpExecArray | null;
  while ((m = re.exec(html))) {
    const tag = m[1];
    const href = /href\s*=\s*"([^"]*)"/i.exec(tag)?.[1];
    if (!href) continue;
    out.push({ href, tag, texto: m[2].replace(/<[^>]*>/g, '').trim() });
  }
  return out;
}

/** Só links internos de página (descarta âncora, arquivo, externo, mailto). */
function interno(href: string): boolean {
  if (!href.startsWith('/')) return false;
  if (href.startsWith('//')) return false;
  if (href.startsWith('#')) return false;
  return true;
}

/** Normaliza para comparar com as rotas do dist: tira hash e query. */
function rotaDe(href: string): string {
  return href.split('#')[0].split('?')[0];
}

function primeiroJsonLd(html: string): unknown[] {
  const blocos = [...html.matchAll(/<script type="application\/ld\+json">([\s\S]*?)<\/script>/g)];
  const out: unknown[] = [];
  for (const b of blocos) {
    try {
      const j = JSON.parse(b[1]);
      out.push(...(Array.isArray(j['@graph']) ? j['@graph'] : [j]));
    } catch {
      /* bloco inválido é reportado à parte */
    }
  }
  return out;
}

// ------------------------------------------------------------------ execução

const mapaRotas = rotas();
const todasRotas = new Set(mapaRotas.keys());

interface Pagina {
  rota: string;
  tipo: 'home' | 'hub' | 'estado' | 'cidade' | 'bairro' | 'artigo' | 'outro';
  html: string;
  saida: string[];
  entrada: Set<string>;
  canonical?: string;
  temBreadcrumbVisual: boolean;
  crumbsJsonLd: { nome: string; url: string }[];
}

const paginas = new Map<string, Pagina>();

function tipoDe(rota: string): Pagina['tipo'] {
  if (rota === '/') return 'home';
  if (rota === '/personal-trainer/') return 'hub';
  if (rota.startsWith('/estado/')) return 'estado';
  if (rota.startsWith('/personal-trainer/')) return 'cidade';
  if (/^\/personal-trainer-[a-z0-9-]+\/$/.test(rota)) return 'bairro';
  if (/^\/(musculacao|emagrecimento|guias|mounjaro-e-treino|humor-fitness)\//.test(rota)) return 'artigo';
  return 'outro';
}

for (const [rota, arquivo] of mapaRotas) {
  const html = readFileSync(arquivo, 'utf8');
  const as = ancoras(html);
  const canonical = /<link rel="canonical" href="([^"]+)"/.exec(html)?.[1];
  const bl = primeiroJsonLd(html).find(
    (n) => (n as Record<string, unknown>)?.['@type'] === 'BreadcrumbList',
  ) as { itemListElement?: { name: string; item: string }[] } | undefined;
  paginas.set(rota, {
    rota,
    tipo: tipoDe(rota),
    html,
    saida: as.filter((a) => interno(a.href)).map((a) => a.href),
    entrada: new Set(),
    canonical,
    temBreadcrumbVisual: html.includes('class="breadcrumbs"'),
    crumbsJsonLd: (bl?.itemListElement ?? []).map((i) => ({ nome: i.name, url: i.item })),
  });
}

// Grafo de entrada.
for (const p of paginas.values()) {
  for (const href of p.saida) {
    const destino = rotaDe(href);
    if (paginas.has(destino)) paginas.get(destino)!.entrada.add(p.rota);
  }
}

// Profundidade de clique a partir da home.
const profundidade = new Map<string, number>();
{
  const fila: string[] = ['/'];
  profundidade.set('/', 0);
  while (fila.length) {
    const atual = fila.shift()!;
    const d = profundidade.get(atual)!;
    for (const href of paginas.get(atual)?.saida ?? []) {
      const destino = rotaDe(href);
      if (paginas.has(destino) && !profundidade.has(destino)) {
        profundidade.set(destino, d + 1);
        fila.push(destino);
      }
    }
  }
}

// ------------------------------------------------------------------ defeitos

interface Defeito {
  grave: boolean;
  categoria: string;
  onde: string;
  detalhe: string;
}
const defeitos: Defeito[] = [];
const add = (grave: boolean, categoria: string, onde: string, detalhe: string) =>
  defeitos.push({ grave, categoria, onde, detalhe });

const alvo = (rota: string) =>
  !soPiloto || PILOTO.some((s) => rota === `/${s}/`) || tipoDe(rota) !== 'bairro';

for (const [rota, arquivo] of mapaRotas) {
  if (!alvo(rota)) continue;
  const html = readFileSync(arquivo, 'utf8');
  const p = paginas.get(rota)!;

  for (const a of ancoras(html)) {
    if (!interno(a.href)) continue;
    const destino = rotaDe(a.href);

    // Link quebrado: aponta para rota que não existe no dist.
    if (!todasRotas.has(destino)) {
      add(true, 'link-quebrado', rota, `${a.href} (âncora: "${a.texto.slice(0, 40)}")`);
      continue;
    }
    // Link que depende de redirect: sem barra final.
    if (!destino.endsWith('/')) {
      add(true, 'link-sem-barra', rota, a.href);
    }
    // Query string / UTM em link interno.
    if (/[?]/.test(a.href)) {
      add(/utm_/i.test(a.href), 'link-com-query', rota, a.href);
    }
    // nofollow interno.
    if (/rel\s*=\s*"[^"]*nofollow/i.test(a.tag)) {
      add(true, 'nofollow-interno', rota, a.href);
    }
    // target=_blank interno.
    if (/target\s*=\s*"_blank"/i.test(a.tag)) {
      add(false, 'blank-interno', rota, a.href);
    }
    // Âncora vazia.
    if (!a.texto) {
      add(false, 'ancora-vazia', rota, a.href);
    }
  }

  // Lixo de template renderizado.
  for (const lixo of ['undefined', 'null', 'NaN', '[object Object]']) {
    const re = new RegExp(`>[^<]*\\b${lixo.replace(/[[\]]/g, '\\$&')}\\b[^<]*<`, 'g');
    if (re.test(html.replace(/<script[\s\S]*?<\/script>/g, ''))) {
      add(true, 'lixo-de-template', rota, lixo);
    }
  }

  // Canonical autorreferente.
  const esperado = `${DOMINIO}${rota}`;
  if (!p.canonical) add(true, 'canonical-ausente', rota, '—');
  else if (p.canonical !== esperado)
    add(true, 'canonical-divergente', rota, `${p.canonical} ≠ ${esperado}`);

  // Breadcrumb visual e estruturado.
  if (rota !== '/' && p.tipo !== 'outro') {
    if (!p.temBreadcrumbVisual) add(false, 'sem-breadcrumb-visual', rota, '—');
    if (p.crumbsJsonLd.length === 0) add(false, 'sem-breadcrumb-jsonld', rota, '—');
  }
  for (const c of p.crumbsJsonLd) {
    if (!c.url.startsWith(`${DOMINIO}/`)) {
      add(true, 'breadcrumb-url-invalida', rota, c.url);
    } else {
      const r = c.url.slice(DOMINIO.length);
      if (!r.endsWith('/')) add(true, 'breadcrumb-sem-barra', rota, c.url);
      else if (!todasRotas.has(r)) add(true, 'breadcrumb-404', rota, c.url);
    }
  }
}

// Coerência do grafo geográfico (independe do HTML).
for (const b of bairros) {
  const rota = `/${b.slug}/`;
  if (!todasRotas.has(rota)) {
    add(true, 'bairro-registrado-sem-pagina', rota, b.nome);
    continue;
  }
  const mae = cidadesPorSlug[b.cidade];
  if (!mae) {
    add(true, 'bairro-sem-cidade-mae', rota, `cidade "${b.cidade}" não existe`);
    continue;
  }
  if (!alvo(rota)) continue;
  const p = paginas.get(rota)!;
  const rotaCidade = `/personal-trainer/${mae.slug}/`;
  const rotaEstado = `/estado/${mae.estadoSlug}/`;
  if (!p.saida.some((h) => rotaDe(h) === rotaCidade))
    add(true, 'bairro-nao-linka-cidade', rota, rotaCidade);
  if (!p.saida.some((h) => rotaDe(h) === rotaEstado))
    add(false, 'bairro-nao-linka-estado', rota, rotaEstado);
  if (!p.saida.some((h) => rotaDe(h) === '/personal-trainer/'))
    add(false, 'bairro-nao-linka-hub', rota, '/personal-trainer/');
  // A cidade-mãe precisa linkar o bairro de volta.
  const pc = paginas.get(rotaCidade);
  if (pc && !pc.saida.some((h) => rotaDe(h) === rota))
    add(true, 'cidade-nao-linka-bairro', rotaCidade, rota);
}

// Órfãs: página sem nenhum link interno apontando para ela.
const orfas = [...paginas.values()].filter(
  (p) => p.rota !== '/' && p.entrada.size === 0 && p.tipo !== 'outro',
);
for (const o of orfas) add(true, 'pagina-orfa', o.rota, `tipo ${o.tipo}`);

// ------------------------------------------------------------------- relatório

const linha = '='.repeat(78);
console.log(`\n${linha}\nARQUITETURA DE LINKS LOCAIS — Brasil › Estado › Cidade › Bairro`);
console.log(`${soPiloto ? 'escopo: PILOTO (10 bairros) + hubs' : 'escopo: site inteiro'}\n${linha}\n`);

const porTipo = (t: Pagina['tipo']) => [...paginas.values()].filter((p) => p.tipo === t);
const media = (ns: number[]) => (ns.length ? ns.reduce((a, b) => a + b, 0) / ns.length : 0);

console.log('GRAFO');
console.log(`  ${'tipo'.padEnd(10)} ${'págs'.padStart(5)} ${'entrada méd.'.padStart(13)} ${'saída méd.'.padStart(11)} ${'prof. méd.'.padStart(11)}`);
for (const t of ['home', 'hub', 'estado', 'cidade', 'bairro', 'artigo'] as const) {
  const ps = porTipo(t);
  if (!ps.length) continue;
  const prof = ps.map((p) => profundidade.get(p.rota)).filter((n): n is number => n !== undefined);
  console.log(
    `  ${t.padEnd(10)} ${String(ps.length).padStart(5)} ${media(ps.map((p) => p.entrada.size)).toFixed(1).padStart(13)} ${media(ps.map((p) => p.saida.length)).toFixed(1).padStart(11)} ${media(prof).toFixed(2).padStart(11)}`,
  );
}

const semProfundidade = [...paginas.values()].filter(
  (p) => !profundidade.has(p.rota) && p.tipo !== 'outro',
);
console.log(`\n  inalcançáveis a partir da home: ${semProfundidade.length}`);

if (comTabela) {
  console.log('\nTABELA DE AUDITORIA — bairros');
  console.log(
    `  ${'BAIRRO'.padEnd(26)} ${'CIDADE'.padEnd(20)} ${'UF'.padEnd(3)} ${'ENT'.padStart(4)} ${'SAI'.padStart(4)} ${'PROF'.padStart(5)} ${'BC'.padStart(3)} CANON`,
  );
  for (const b of bairros) {
    const rota = `/${b.slug}/`;
    const p = paginas.get(rota);
    if (!p) continue;
    if (soPiloto && !PILOTO.includes(b.slug)) continue;
    const mae = cidadesPorSlug[b.cidade];
    const ok = p.canonical === `${DOMINIO}${rota}` ? 'ok' : 'DIVERGE';
    console.log(
      `  ${b.nome.padEnd(26).slice(0, 26)} ${(mae?.nome ?? '?').padEnd(20).slice(0, 20)} ${(mae?.uf ?? '?').padEnd(3)} ${String(p.entrada.size).padStart(4)} ${String(p.saida.length).padStart(4)} ${String(profundidade.get(rota) ?? '—').padStart(5)} ${String(p.crumbsJsonLd.length).padStart(3)} ${ok}`,
    );
  }
}

const graves = defeitos.filter((d) => d.grave);
const avisos = defeitos.filter((d) => !d.grave);

function bloco(titulo: string, ds: Defeito[]) {
  if (!ds.length) return;
  console.log(`\n${titulo} (${ds.length})`);
  const porCat = new Map<string, Defeito[]>();
  for (const d of ds) (porCat.get(d.categoria) ?? porCat.set(d.categoria, []).get(d.categoria)!).push(d);
  for (const [cat, lista] of [...porCat].sort((a, b) => b[1].length - a[1].length)) {
    console.log(`  ${cat} — ${lista.length}`);
    for (const d of lista.slice(0, 8)) console.log(`      ${d.onde}  →  ${d.detalhe}`);
    if (lista.length > 8) console.log(`      … e mais ${lista.length - 8}`);
  }
}

bloco('BLOQUEANTES', graves);
bloco('AVISOS', avisos);

console.log(`\n${linha}`);
if (graves.length === 0) {
  console.log(`OK — nenhum defeito bloqueante. ${avisos.length} aviso(s).`);
} else {
  console.log(`FALHOU — ${graves.length} defeito(s) bloqueante(s), ${avisos.length} aviso(s).`);
}
console.log(`${linha}\n`);

// Contexto para o relatório: totais do inventário.
console.log(
  `inventário: ${estados.length} estados · ${cidades.length} cidades · ${bairros.length} bairros · ${Object.keys(bairrosPorCidade).length} cidades com bairro\n`,
);

process.exit(graves.length ? 1 : 0);
