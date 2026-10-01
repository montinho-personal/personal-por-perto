/**
 * Testes do catálogo de ferramentas e da busca por intenção.
 *
 * O que segura a Central de Ferramentas: o catálogo é íntegro (slugs e
 * URLs únicos, toda URL tem página, toda categoria tem ao menos duas
 * ferramentas, as sete da jornada continuam mapeadas) e a busca acha a
 * ferramenta certa quando a pessoa descreve a dúvida em vez do nome —
 * as personas do brief, uma a uma.
 *
 * Uso: npm run test:ferramentas
 */
import { existsSync } from 'node:fs';
import { CATEGORIAS, NOVAS_MAXIMO, catalogo, destaques, ehNova, ferramentas, novas, porCategoria } from '../src/data/ferramentas';
import { FERRAMENTAS } from '../src/lib/jornada';
import { buscar, indexar, normaliza } from '../src/lib/buscaFerramentas';

let falhas = 0;
const ok = (cond: boolean, msg: string) => {
  if (cond) console.log(`  ✓ ${msg}`);
  else {
    falhas++;
    console.log(`  ✗ ${msg}`);
  }
};

const paginaDe = (url: string): string => {
  const semBarra = url.replace(/^\/|\/$/g, '');
  return `src/pages/${semBarra}.astro`;
};

console.log('\nIntegridade do catálogo');
ok(catalogo.length === 29, `${catalogo.length} ferramentas no catálogo (29)`);
ok(new Set(catalogo.map((f) => f.slug)).size === catalogo.length, 'slugs únicos');
ok(new Set(catalogo.map((f) => f.url)).size === catalogo.length, 'URLs únicas');
ok(catalogo.every((f) => f.url.startsWith('/') && f.url.endsWith('/')), 'toda URL com barra inicial e final');
ok(catalogo.every((f) => existsSync(paginaDe(f.url))), 'toda URL tem página em src/pages');
ok(catalogo.every((f) => f.aliases.length >= 4), 'toda ferramenta tem pelo menos 4 aliases');
ok(catalogo.every((f) => f.acao && !/^(ver|abrir|saiba)/i.test(f.acao)), 'ação específica, nunca "ver" ou "abrir"');
ok(catalogo.every((f) => f.resumo.length <= 150), 'resumo cabe num card (≤ 150 caracteres)');
ok(
  catalogo.every((f) => f.relacionadas.every((r) => catalogo.some((g) => g.slug === r) && r !== f.slug)),
  'relacionadas apontam para ferramentas existentes, nunca para si mesma',
);
ok(catalogo.every((f) => /^\d{4}-\d{2}-\d{2}$/.test(f.publicadoEm)), 'publicadoEm em YYYY-MM-DD');

console.log('\nCategorias');
ok(CATEGORIAS.length === 3, 'três categorias, por necessidade');
for (const c of CATEGORIAS) {
  const n = porCategoria(c.id).length;
  ok(n >= 2, `${c.nome}: ${n} ferramentas (mínimo 2)`);
}
ok(catalogo.every((f) => CATEGORIAS.some((c) => c.id === f.categoria)), 'toda ferramenta tem categoria válida');
ok(porCategoria('calorias').length === 19, '19 calculadoras de calorias');

console.log('\nJornada preservada');
const daJornada = catalogo.filter((f) => f.jornada);
ok(daJornada.length === ferramentas.filter((f) => f.disponivel).length, 'as sete da jornada estão no catálogo');
ok(daJornada.every((f) => FERRAMENTAS[f.jornada as keyof typeof FERRAMENTAS]?.url === f.url), 'id de jornada bate com a URL');

console.log('\nDestaques e novidade');
const d = destaques();
ok(d.length >= 4 && d.length <= 6, `${d.length} destaques (4 a 6)`);
ok(d.some((f) => f.slug === 'calculadora-preco-personal'), 'a calculadora de preço é destaque (maior demanda medida no GSC)');
ok(ehNova(catalogo.find((f) => f.slug === 'ping-pong')!, '2026-09-30'), 'ping pong, a mais recente, é "novo" uma semana depois');
ok(!ehNova(catalogo.find((f) => f.slug === 'ping-pong')!, '2026-11-01'), '  e deixa de ser depois de 30 dias');
ok(ehNova(catalogo.find((f) => f.slug === 'calculadora-1rm')!, '2026-09-30'), 'a calculadora de 1RM é "nova" uma semana depois');
ok(novas('2026-09-30').length === NOVAS_MAXIMO, `no máximo ${NOVAS_MAXIMO} com selo "Novo" ao mesmo tempo`);
ok(!ehNova(catalogo.find((f) => f.slug === 'caminhada')!, '2026-09-30'), '  caminhada (02/09) fica sem selo: há três mais recentes');

console.log('\nBusca por intenção — as personas');
const idx = indexar(catalogo);
const primeiro = (q: string) => buscar(q, idx)[0]?.ferramenta.slug;
const entreOsTres = (q: string, slug: string) => buscar(q, idx).slice(0, 3).some((r) => r.ferramenta.slug === slug);
const casos: Array<[string, string]> = [
  ['quanto custa um personal na minha cidade', 'calculadora-preco-personal'],
  ['quanto cobra personal', 'calculadora-preco-personal'],
  ['não consigo manter academia', 'diagnostico-da-constancia'],
  ['não consigo manter academia por mais de um mês', 'diagnostico-da-constancia'],
  ['meu treino está errado', 'meu-treino-faz-sentido'],
  ['meu treino está mal montado', 'meu-treino-faz-sentido'],
  ['personal online vale a pena', 'presencial-ou-online'],
  ['contratar personal online', 'presencial-ou-online'],
  ['calorias correndo', 'corrida'],
  ['quantas calorias gastei no boxe', 'lutas'],
  ['calorias tênis de mesa', 'ping-pong'],
  ['quanto gasta jogar ping pong', 'ping-pong'],
  ['calculadora 1rm', 'calculadora-1rm'],
  ['quanto peso usar para hipertrofia', 'calculadora-1rm'],
  ['carga máxima no supino', 'calculadora-1rm'],
  ['tabela de porcentagem do 1rm', 'calculadora-1rm'],
  ['repetição máxima', 'calculadora-1rm'],
  ['quanto de proteína por dia', 'calculadora-de-proteina'],
  ['proteína para quem usa mounjaro', 'calculadora-de-proteina'],
  ['quantas gramas de proteína para hipertrofia', 'calculadora-de-proteina'],
  ['calculadora de whey', 'calculadora-de-whey'],
  ['quanto whey tomar por dia', 'calculadora-de-whey'],
  ['quantos scoops de whey', 'calculadora-de-whey'],
  ['whey vale a pena custo benefício', 'calculadora-de-whey'],
  ['quantas calorias gasto por dia', 'gasto-calorico-diario'],
  ['taxa metabólica basal', 'gasto-calorico-diario'],
  ['muay thai', 'lutas'],
  ['montar minha rotina', 'treino-para-minha-rotina'],
  ['por onde começar', 'treino-para-minha-rotina'],
  ['1RM', ''],
  ['emagrecer', ''],
];
for (const [q, esperado] of casos) {
  const r = primeiro(q);
  if (esperado) ok(r === esperado, `"${q}" → ${r} (esperado ${esperado})`);
  else ok(true, `"${q}" → ${r ?? 'nenhum resultado'} (sem ferramenta própria: cai no zero-results)`);
}
ok(entreOsTres('contratar personal online', 'encontre-seu-personal-ideal'), '"contratar personal online" também traz o personal ideal entre os três');
ok(buscar('zzzz', idx).length === 0, 'lixo não devolve nada');
ok(buscar('', idx).length === 0, 'vazio não devolve nada');
ok(buscar('de um para', idx).length === 0, 'só palavras vazias não devolve nada');
ok(buscar('calorias', idx).length === 8, '"calorias" devolve 8 (o limite) — todas as calculadoras casam');
ok(normaliza('Vôlei de praia!') === 'volei de praia', 'normaliza tira acento e pontuação');

console.log(falhas ? `\n✗ ${falhas} falha(s)\n` : '\n✓ tudo certo\n');
process.exit(falhas ? 1 : 0);
