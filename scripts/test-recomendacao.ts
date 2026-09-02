/**
 * Testes do bloco editorial "Personal por Perto recomenda".
 *
 * A garantia principal é de ausência, não de presença: o bloco só pode
 * existir onde há razão lógica para alguém considerar acompanhamento
 * profissional depois de ler aquela página. Em conteúdo informativo puro,
 * a resposta certa é nada.
 *
 * Uso: npm run test:recomendacao
 */
import { existsSync, readdirSync, readFileSync } from 'node:fs';
import { getRecomendacao } from '../src/lib/recomendacao';
import { VARIANTES_REC, LIMITE_PONTE } from '../src/data/recomendacaoContextos';
import { classificarPagina } from '../src/lib/ctaTaxonomia';
import { artigos } from '../src/data/artigos';
import { cidades } from '../src/data/cidades';
import { bairros } from '../src/data/bairros';
import { estados } from '../src/data/estados';
import { emCidade } from '../src/lib/gramatica';

let falhas = 0;
const ok = (cond: boolean, msg: string): void => {
  if (!cond) {
    falhas++;
    console.error(`  FALHOU: ${msg}`);
  }
};

const rotas: { url: string; local?: string }[] = [
  ...cidades.map((c) => ({ url: `/personal-trainer/${c.slug}/`, local: emCidade(c) })),
  ...bairros.map((b) => ({ url: `/${b.slug}/`, local: b.locucao })),
  ...estados.map((e) => ({ url: `/estado/${e.slug}/` })),
  ...artigos.map((a) => ({ url: a.url })),
  { url: '/privacidade/' },
  { url: '/sobre/' },
  { url: '/montinho-personal/' },
  { url: '/ferramentas/meu-treino-faz-sentido/' },
];

console.log('='.repeat(78));
console.log(`RECOMENDAÇÃO EDITORIAL — ${rotas.length} rotas`);
console.log('='.repeat(78));

/* ---------------------------------------------------------------- *
 * 1. Onde o bloco não pode existir
 * ---------------------------------------------------------------- */
console.log('\n1. Silêncio obrigatório');
const proibidas = [
  '/musculacao/agachamento-como-fazer/',
  '/musculacao/crossover-como-fazer/',
  '/emagrecimento/agua-e-emagrecimento/',
  '/musculacao/creatina-o-que-e-como-tomar/',
  '/musculacao/treinar-com-dor-lombar/',
  '/humor-fitness/memes-de-academia/',
  '/privacidade/',
  '/sobre/',
  '/montinho-personal/',
  '/ferramentas/meu-treino-faz-sentido/',
];
for (const r of proibidas) {
  ok(getRecomendacao({ path: r }) === null, `${r} não pode ter bloco editorial`);
}
console.log(`   ${proibidas.length} páginas conferidas: execução, nutrição, dor, humor, institucional e ferramenta`);

/* ---------------------------------------------------------------- *
 * 2. Onde ele deve existir
 * ---------------------------------------------------------------- */
console.log('\n2. Presença onde há intenção');
for (const [r, l] of [
  ['/personal-trainer/recife-pe/', 'no Recife'],
  ['/personal-trainer-batel/', 'no Batel'],
  ['/guias/quanto-custa-personal-trainer/', undefined],
  ['/guias/como-escolher-personal-trainer/', undefined],
] as const) {
  ok(getRecomendacao({ path: r, localidade: l }) !== null, `${r} devia ter bloco editorial`);
}
console.log('   cidade, bairro, preço e escolha: presentes');

/* ---------------------------------------------------------------- *
 * 3. Cobertura e distribuição
 * ---------------------------------------------------------------- */
console.log('\n3. Distribuição');
const com = rotas.filter((r) => getRecomendacao({ path: r.url, localidade: r.local }));
const porContexto = new Map<string, number>();
for (const r of com) {
  const c = getRecomendacao({ path: r.url, localidade: r.local })!.contexto;
  porContexto.set(c, (porContexto.get(c) ?? 0) + 1);
}
console.log(`   ${com.length} de ${rotas.length} rotas recebem o bloco`);
for (const [k, n] of [...porContexto].sort((a, b) => b[1] - a[1])) {
  console.log(`   ${String(n).padStart(5)}  ${k}`);
}
// Nenhuma página de intenção baixa pode receber recomendação comercial.
const tofu = com.filter((r) => classificarPagina(r.url).funil === 'tofu');
ok(tofu.length === 0, `${tofu.length} páginas de intenção baixa com bloco (ex.: ${tofu[0]?.url})`);

/* ---------------------------------------------------------------- *
 * 4. Copy: limites e vocabulário
 * ---------------------------------------------------------------- */
console.log('\n4. Copy das pontes');
let maior = 0;
let exemplo = '';
const PROIBIDO: [RegExp, string][] = [
  [/melhor personal/i, 'superlativo inverificável'],
  [/imperd[íi]vel/i, 'linguagem de anúncio'],
  [/garantid/i, 'promessa de resultado'],
  [/[úu]ltimas vagas/i, 'escassez artificial'],
  [/contrate agora/i, 'venda agressiva'],
  [/resultados incr[íi]veis/i, 'promessa vaga'],
  [/\bcura\b|\bcurar\b/i, 'promessa clínica'],
  [/\bcref\b|\bconfef\b/i, 'regra editorial do projeto'],
  [/\d+\s*(alunos|clientes)/i, 'prova numérica não verificável'],
  [/\d+\s*estrelas|\bnota \d/i, 'avaliação inventada'],
];
for (const r of com) {
  const rec = getRecomendacao({ path: r.url, localidade: r.local })!;
  for (const v of VARIANTES_REC) {
    const t = rec.pontes[v];
    ok(Boolean(t?.trim()), `${r.url}: ponte ${v} vazia`);
    if (t.length > maior) {
      maior = t.length;
      exemplo = `${t} (${r.url})`;
    }
    ok(t.length <= LIMITE_PONTE, `${r.url} [${v}]: ponte com ${t.length} caracteres`);
    for (const [re, porque] of PROIBIDO) {
      ok(!re.test(t), `${r.url} [${v}]: ${porque} — "${t.match(re)?.[0]}"`);
    }
  }
}
console.log(`   maior ponte: ${maior}/${LIMITE_PONTE} caracteres`);
console.log(`   ${exemplo}`);
console.log(`   ${PROIBIDO.length} padrões de vocabulário verificados`);

/* ---------------------------------------------------------------- *
 * 5. Páginas locais nomeiam o lugar, com regência correta
 * ---------------------------------------------------------------- */
console.log('\n5. Contexto local');
const recife = getRecomendacao({ path: '/personal-trainer/recife-pe/', localidade: 'no Recife' })!;
ok(
  Object.values(recife.pontes).some((p) => p.includes('no Recife')),
  'a ponte de Recife devia nomear a cidade com a regência certa',
);
const rio = getRecomendacao({
  path: '/personal-trainer/rio-de-janeiro-rj/',
  localidade: 'no Rio de Janeiro',
})!;
ok(
  Object.values(rio.pontes).some((p) => p.includes('no Rio de Janeiro')),
  'regência errada no Rio de Janeiro',
);
// Sem locução, a ponte não pode ficar quebrada.
const semLocal = getRecomendacao({ path: '/estado/pernambuco/' })!;
ok(
  Object.values(semLocal.pontes).every((p) => !p.includes('undefined') && p.length > 20),
  'ponte quebrada quando não há locução de lugar',
);
console.log('   regência e ausência de locução: corretas');

/* ---------------------------------------------------------------- *
 * 6. Um bloco por página no HTML gerado
 * ---------------------------------------------------------------- */
if (existsSync('dist')) {
  console.log('\n6. Um bloco por página (HTML gerado)');
  let paginas = 0;
  let comBloco = 0;
  const duplicadas: string[] = [];
  const andar = (dir: string, prefixo: string): void => {
    for (const e of readdirSync(dir, { withFileTypes: true })) {
      if (e.isDirectory()) andar(`${dir}/${e.name}`, `${prefixo}${e.name}/`);
      else if (e.name === 'index.html') {
        paginas++;
        const n = (readFileSync(`${dir}/${e.name}`, 'utf8').match(/data-rec=/g) ?? []).length;
        if (n) comBloco++;
        if (n > 1) duplicadas.push(prefixo);
      }
    }
  };
  andar('dist', '/');
  ok(duplicadas.length === 0, `${duplicadas.length} páginas com mais de um bloco (ex.: ${duplicadas[0]})`);
  console.log(`   ${comBloco} de ${paginas} páginas têm o bloco · nenhuma com dois`);
}

console.log('\n' + '='.repeat(78));
if (falhas) {
  console.error(`${falhas} FALHA(S)`);
  process.exit(1);
}
console.log('Tudo certo.');
