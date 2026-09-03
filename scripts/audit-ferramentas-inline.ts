/**
 * Fila do FerramentaInline: quais artigos ainda não convidam a uma
 * ferramenta no corpo do texto — e em que ordem atacá-los.
 *
 * Em 02/09/2026, 140 dos 142 artigos não linkavam nenhuma das sete
 * ferramentas no texto. A regra do CLAUDE.md fecha a porta para artigos
 * novos; o passivo é tratado em lotes, e este script diz qual é o próximo.
 *
 * Ordem: impressões no Search Console. Bloco em página que já recebe
 * tráfego tem retorno imediato; em página que ninguém vê, é só custo — e
 * custo com data de revisão, que o Google ignora quando muda em massa.
 *
 * Uso:
 *   npm run audit:ferramentas          # próximos 12 por impressão
 *   npm run audit:ferramentas -- 30    # outra quantidade
 */
import { existsSync, readFileSync, readdirSync } from 'node:fs';

const limite = Number(process.argv[2]) || 12;
// humor-fitness fica fora: por regra do CLAUDE.md, humor não leva convite no corpo.
// Deixá-lo na fila só empurraria duas páginas para o topo, para sempre.
const SECOES = ['musculacao', 'emagrecimento', 'guias', 'mounjaro-e-treino'];

/** Último snapshot de Páginas por artigo arquivado em docs/relatorios. */
function lerGsc(): Record<string, { cliques: number; impressoes: number; posicao: number }> {
  const raiz = 'docs/relatorios';
  if (!existsSync(raiz)) return {};
  const pastas = readdirSync(raiz)
    .filter((d) => existsSync(`${raiz}/${d}/paginas-por-artigo.json`))
    .sort()
    .reverse();
  return pastas.length ? JSON.parse(readFileSync(`${raiz}/${pastas[0]}/paginas-por-artigo.json`, 'utf8')) : {};
}

const gsc = lerGsc();

interface Item {
  url: string;
  arquivo: string;
  tem: boolean;
  impressoes: number;
  cliques: number;
  posicao: number;
}

const itens: Item[] = [];
for (const s of SECOES) {
  const dir = `src/pages/${s}`;
  if (!existsSync(dir)) continue;
  for (const f of readdirSync(dir)) {
    if (!f.endsWith('.astro') || f === 'index.astro') continue;
    const url = `/${s}/${f.replace(/\.astro$/, '')}/`;
    const src = readFileSync(`${dir}/${f}`, 'utf8');
    const g = gsc[url];
    itens.push({
      url,
      arquivo: `${dir}/${f}`,
      tem: src.includes('<FerramentaInline'),
      impressoes: g?.impressoes ?? 0,
      cliques: g?.cliques ?? 0,
      posicao: g?.posicao ?? 0,
    });
  }
}

const com = itens.filter((i) => i.tem).length;
const sem = itens.filter((i) => !i.tem).sort((a, b) => b.impressoes - a.impressoes || a.url.localeCompare(b.url));

console.log('='.repeat(78));
console.log(`FERRAMENTA INLINE — ${com} de ${itens.length} artigos têm o bloco · ${sem.length} sem`);
console.log('='.repeat(78));
console.log();
console.log('  #  IMPR  CLI   POS   ARTIGO');
console.log('  ' + '-'.repeat(74));
sem.slice(0, limite).forEach((i, n) => {
  console.log(
    `  ${String(n + 1).padStart(2)}  ${String(i.impressoes).padStart(4)}  ${String(i.cliques).padStart(3)}  ` +
      `${(i.posicao ? i.posicao.toFixed(1) : '—').padStart(5)}  ${i.url}`,
  );
});

const semDados = sem.filter((i) => !i.impressoes).length;
console.log();
console.log(`  ${sem.length - semDados} dos ${sem.length} sem bloco têm impressão registrada; ${semDados} não aparecem no Search Console.`);
console.log('  Lote sugerido: 10 a 15 por vez — cada edição atualiza a data de revisão, e o Google');
console.log('  ignora lastmod quando tudo muda no mesmo dia.');
console.log();
