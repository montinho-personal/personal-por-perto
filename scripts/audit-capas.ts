/**
 * Fila de capas: quais páginas ainda não têm arte própria.
 *
 * `capaArte` substitui a capa gerada automaticamente por uma arte feita à
 * mão. Como só 173 das 982 cidades têm, a pergunta "qual é a próxima?"
 * aparece toda semana — e responder de cabeça leva a repetir cidade já
 * feita ou a escolher uma que não vale o esforço.
 *
 * ORDEM PADRÃO: demanda real, medida pelo Search Console.
 *
 * A ordem cronológica parece a mais óbvia e é a pior das três: 562 das 808
 * cidades sem capa compartilham a data da criação em lote, então "mais
 * antiga" vira um empate de 562 e o desempate acaba sendo a ordem do
 * arquivo. Por população é melhor, mas assume que porte prevê busca — e não
 * prevê: Taguatinga/DF traz mais impressão que Divinópolis/MG, que tem o
 * dobro do tamanho.
 *
 * Por isso o padrão cruza com o export de Páginas do Search Console
 * arquivado em `docs/relatorios/`. Capa em página que já recebe impressão
 * tem retorno imediato; capa em página que ninguém vê é trabalho no vazio.
 *
 * Uso:
 *   npm run audit:capas             # 20 com mais impressão e sem capa
 *   npm run audit:capas -- 40       # outra quantidade
 *   npm run audit:capas -- 20 pop   # ordena por população
 *   npm run audit:capas -- 20 data  # ordena por data de revisão
 */
import { existsSync, readFileSync, readdirSync } from 'node:fs';
import { cidades } from '../src/data/cidades';

const args = process.argv.slice(2);
const limite = Number(args[0]) || 20;
const modo = args[1] === 'pop' ? 'pop' : args[1] === 'data' ? 'data' : 'gsc';

/** Último snapshot de Páginas do Search Console arquivado. */
function lerGsc(): Record<string, { cliques: number; impressoes: number }> {
  const raiz = 'docs/relatorios';
  if (!existsSync(raiz)) return {};
  const pastas = readdirSync(raiz)
    .filter((d) => existsSync(`${raiz}/${d}/paginas-por-cidade.json`))
    .sort()
    .reverse();
  if (!pastas.length) return {};
  return JSON.parse(readFileSync(`${raiz}/${pastas[0]}/paginas-por-cidade.json`, 'utf8'));
}

const gsc = modo === 'gsc' ? lerGsc() : {};
const temGsc = Object.keys(gsc).length > 0;

const semCapa = cidades.filter((c) => !c.capaArte);
const comCapa = cidades.length - semCapa.length;

const impr = (slug: string): number => gsc[slug]?.impressoes ?? 0;
const cliq = (slug: string): number => gsc[slug]?.cliques ?? 0;

semCapa.sort((a, b) => {
  if (modo === 'pop') return (b.populacao ?? 0) - (a.populacao ?? 0);
  if (modo === 'data') return (a.atualizadoEm ?? '').localeCompare(b.atualizadoEm ?? '');
  return impr(b.slug) - impr(a.slug) || (b.populacao ?? 0) - (a.populacao ?? 0);
});

const fmt = (n?: number): string => (n ? n.toLocaleString('pt-BR') : '—');
const rotulo =
  modo === 'pop'
    ? 'população'
    : modo === 'data'
      ? 'data de revisão (mais antiga primeiro)'
      : temGsc
        ? 'impressões no Search Console'
        : 'impressões (SEM DADOS — arquive um relatório primeiro)';

console.log('='.repeat(78));
console.log(`FILA DE CAPAS — ${comCapa} de ${cidades.length} cidades têm arte própria`);
console.log(`${semCapa.length} sem capa · ordenado por ${rotulo}`);
console.log('='.repeat(78));
console.log();
console.log('  #  IMPR  CLI   POPULAÇÃO  UF  REVISÃO      CIDADE');
console.log('  ' + '-'.repeat(74));

semCapa.slice(0, limite).forEach((c, i) => {
  console.log(
    `  ${String(i + 1).padStart(2)}  ${String(impr(c.slug)).padStart(4)}  ${String(cliq(c.slug)).padStart(3)}  ` +
      `${fmt(c.populacao).padStart(10)}  ${c.uf}  ${(c.atualizadoEm ?? '—').padEnd(11)} ${c.nome}  (${c.slug})` +
      (c.academiasProximas?.length ? ` · ${c.academiasProximas.length} academias` : ''),
  );
});

/*
 * Academias andam junto com a capa (regra do CLAUDE.md): a página só vai ao
 * ar redonda quando tem as duas. Avisar aqui evita descobrir isso depois de
 * gerar a arte.
 */
const semAcademia = semCapa
  .slice(0, limite)
  .filter((c) => !c.academiasProximas?.length).length;
if (semAcademia) {
  console.log();
  console.log(`  ${semAcademia} das ${Math.min(limite, semCapa.length)} também não têm academiasProximas —`);
  console.log('  a capa nova obriga a preencher no mesmo commit. Ver `npm run audit:academias`.');
}
console.log();
