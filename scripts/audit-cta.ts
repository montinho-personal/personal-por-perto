/**
 * Auditoria de cobertura do motor de CTA.
 *
 * Varre todas as páginas do projeto, classifica cada uma e mostra qual CTA
 * o motor escolheria. Serve para três coisas:
 *   - encontrar página classificada como fallback (regra faltando);
 *   - conferir se algum conteúdo sensível escapou da lista de segurança;
 *   - ver a distribuição de campanhas antes de publicar qualquer mudança.
 *
 * Uso: npm run audit:cta          (resumo)
 *      npm run audit:cta -- --all (lista página a página)
 */
import { readdirSync, statSync, readFileSync } from 'node:fs';
import { join } from 'node:path';
import { getContextualCTA } from '../src/lib/ctaEngine';
import { cidades } from '../src/data/cidades';

const RAIZ = 'src/pages';
const detalhado = process.argv.includes('--all');

interface Pagina {
  path: string;
  arquivo: string;
  temCtaManual: boolean;
}

/** Converte um arquivo .astro em caminho de URL. */
function caminhoDe(arquivo: string): string | null {
  let rel = arquivo.slice(RAIZ.length).replace(/\\/g, '/');
  if (!rel.endsWith('.astro')) return null;
  rel = rel.slice(0, -'.astro'.length);
  if (rel.endsWith('/index')) rel = rel.slice(0, -'/index'.length) || '/';
  if (rel.includes('[')) return null; // rota dinâmica: tratada à parte
  if (rel.endsWith('/404')) return null;
  return rel === '/' ? '/' : `${rel}/`;
}

const paginas: Pagina[] = [];
(function andar(dir: string) {
  for (const f of readdirSync(dir)) {
    const p = join(dir, f);
    if (statSync(p).isDirectory()) andar(p);
    else if (f.endsWith('.astro')) {
      const path = caminhoDe(p);
      if (!path) continue;
      const fonte = readFileSync(p, 'utf8');
      paginas.push({
        path,
        arquivo: p,
        temCtaManual: /<WhatsAppCta/.test(fonte),
      });
    }
  }
})(RAIZ);

// A rota dinâmica das cidades vale por 980 páginas.
for (const c of cidades) {
  paginas.push({ path: `/personal-trainer/${c.slug}/`, arquivo: '[cidade].astro', temCtaManual: false });
}

/* ------------------------------ análise ------------------------------ */

const porCampanha = new Map<string, number>();
const porRegra = new Map<string, number>();
const porTipo = new Map<string, number>();
const semCta: string[] = [];
const fallback: string[] = [];
const comManual: string[] = [];

for (const pg of paginas) {
  if (pg.temCtaManual) comManual.push(pg.path);
  const cidade = cidades.find((c) => `/personal-trainer/${c.slug}/` === pg.path);
  const d = getContextualCTA({
    path: pg.path,
    cidadeNome: cidade?.nome,
    uf: cidade?.uf,
  });

  const tipo = d?.classificacao.tipo ?? 'sem-cta';
  porTipo.set(tipo, (porTipo.get(tipo) ?? 0) + 1);

  if (!d) {
    semCta.push(pg.path);
    porCampanha.set('(nenhum)', (porCampanha.get('(nenhum)') ?? 0) + 1);
    continue;
  }
  porCampanha.set(d.campanha.id, (porCampanha.get(d.campanha.id) ?? 0) + 1);
  porRegra.set(d.regra, (porRegra.get(d.regra) ?? 0) + 1);
  if (d.regra === 'FALLBACK') fallback.push(pg.path);

  if (detalhado) {
    console.log(
      `${pg.path.padEnd(56)} ${d.classificacao.topico.padEnd(22)} ${d.classificacao.funil.padEnd(5)} ${d.campanha.id.padEnd(24)} ${d.regra}`,
    );
  }
}

const ordenado = (m: Map<string, number>) => [...m.entries()].sort((a, b) => b[1] - a[1]);

console.log('\n' + '='.repeat(72));
console.log(`AUDITORIA DE CTA — ${paginas.length} páginas`);
console.log('='.repeat(72));

console.log('\nPor campanha:');
for (const [k, v] of ordenado(porCampanha)) {
  console.log(`  ${String(v).padStart(5)}  ${k}`);
}

console.log('\nPor regra do motor:');
for (const [k, v] of ordenado(porRegra)) {
  console.log(`  ${String(v).padStart(5)}  ${k}`);
}

console.log('\nPor tipo de página:');
for (const [k, v] of ordenado(porTipo)) {
  console.log(`  ${String(v).padStart(5)}  ${k}`);
}

console.log(`\nPáginas sem CTA comercial (esperado: humor, institucional, ferramentas): ${semCta.length}`);
semCta.forEach((p) => console.log(`  · ${p}`));

console.log(`\nPáginas caindo no FALLBACK (candidatas a regra própria): ${fallback.length}`);
fallback.slice(0, 20).forEach((p) => console.log(`  · ${p}`));
if (fallback.length > 20) console.log(`  … +${fallback.length - 20}`);

console.log(`\nPáginas com CTA manual (<WhatsAppCta> no arquivo): ${comManual.length}`);

if (fallback.length > 25) {
  console.log('\n⚠ Muitas páginas no fallback: vale criar regra específica.');
  process.exitCode = 1;
}
