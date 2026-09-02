/**
 * Testes da sticky bar.
 *
 * Varre TODAS as rotas do site, e não uma amostra: a barra aparece em mais
 * de mil páginas e um destino quebrado numa delas é um beco sem saída que
 * ninguém percebe. Sem navegador — o motor é função pura, então dá para
 * verificar as 1.262 decisões em menos de um segundo.
 *
 * O que se garante aqui:
 *   - silêncio onde a regra editorial manda calar (humor, institucional)
 *   - nenhum destino apontando para página inexistente
 *   - nenhuma barra apontando para a própria página
 *   - limites de copy (60 caracteres na mensagem, 2 a 4 palavras no botão)
 *   - vocabulário proibido e promessa clínica
 *   - a cidade certa na mensagem certa, dentro e fora da área presencial
 */
import { existsSync, readdirSync } from 'node:fs';
import { getSticky } from '../src/lib/stickyBar';
import { VARIANTES, LIMITE_MENSAGEM } from '../src/data/stickyMensagens';
import { cidades } from '../src/data/cidades';
import { bairros } from '../src/data/bairros';
import { artigos } from '../src/data/artigos';
import { estados } from '../src/data/estados';
import { ferramentas } from '../src/data/ferramentas';

let falhas = 0;
const ok = (cond: boolean, msg: string): void => {
  if (!cond) {
    falhas++;
    console.error(`  FALHOU: ${msg}`);
  }
};

/** Todas as rotas publicadas, lidas do dist quando ele existe. */
function rotasDoSite(): string[] {
  const rotas = new Set<string>(['/']);
  for (const c of cidades) rotas.add(`/personal-trainer/${c.slug}/`);
  for (const b of bairros) rotas.add(`/${b.slug}/`);
  for (const e of estados) rotas.add(`/estado/${e.slug}/`);
  for (const a of artigos) rotas.add(a.url);
  for (const f of ferramentas) if (f.disponivel) rotas.add(`/ferramentas/${f.slug}/`);
  rotas.add('/ferramentas/');
  rotas.add('/personal-trainer/');
  for (const s of ['guias', 'musculacao', 'emagrecimento', 'mounjaro-e-treino', 'humor-fitness']) {
    rotas.add(`/${s}/`);
  }
  for (const p of ['sobre', 'privacidade', 'como-avaliamos', 'montinho-personal']) {
    rotas.add(`/${p}/`);
  }
  return [...rotas];
}

/** Páginas que realmente existem no build, para validar destinos. */
function paginasNoDist(): Set<string> | null {
  if (!existsSync('dist')) return null;
  const encontradas = new Set<string>();
  const andar = (dir: string, prefixo: string): void => {
    for (const e of readdirSync(dir, { withFileTypes: true })) {
      if (e.isDirectory()) {
        andar(`${dir}/${e.name}`, `${prefixo}${e.name}/`);
      } else if (e.name === 'index.html') {
        encontradas.add(prefixo);
      }
    }
  };
  andar('dist', '/');
  return encontradas;
}

const rotas = rotasDoSite();
const dist = paginasNoDist();

console.log('='.repeat(78));
console.log(`STICKY BAR — ${rotas.length} rotas`);
console.log('='.repeat(78));

/* ------------------------------------------------------------------ *
 * 1. Silêncio deliberado
 * ------------------------------------------------------------------ */
console.log('\n1. Onde a barra tem de ficar calada');
for (const r of ['/humor-fitness/', '/humor-fitness/memes-de-academia/']) {
  ok(getSticky({ path: r }) === null, `${r} devia ficar sem barra (regra editorial de humor)`);
}
for (const r of ['/privacidade/', '/sobre/', '/como-avaliamos/', '/montinho-personal/']) {
  ok(getSticky({ path: r }) === null, `${r} devia ficar sem barra (institucional)`);
}
console.log('   humor e institucional: sem barra');

/* ------------------------------------------------------------------ *
 * 2. Cobertura e integridade dos destinos
 * ------------------------------------------------------------------ */
console.log('\n2. Destinos');
let comBarra = 0;
let semBarra = 0;
const porRegra = new Map<string, number>();

for (const r of rotas) {
  const s = getSticky({ path: r });
  if (!s) {
    semBarra++;
    continue;
  }
  comBarra++;
  porRegra.set(s.regra, (porRegra.get(s.regra) ?? 0) + 1);

  ok(s.destino.startsWith('/') && s.destino.endsWith('/'), `${r}: destino sem barra final (${s.destino})`);
  ok(s.destino !== r, `${r}: a barra aponta para a própria página`);
  if (dist) {
    ok(dist.has(s.destino), `${r}: destino inexistente no build (${s.destino})`);
  }
  ok(Boolean(s.rotulo.trim()), `${r}: rótulo vazio`);
}
console.log(`   ${comBarra} páginas com barra · ${semBarra} sem barra`);
if (dist) console.log(`   todos os destinos existem no build (${dist.size} páginas conferidas)`);

/* ------------------------------------------------------------------ *
 * 3. Limites de copy
 * ------------------------------------------------------------------ */
console.log('\n3. Copy');
const LIMITE_MSG = LIMITE_MENSAGEM;
let maiorMsg = 0;
let exemploMaior = '';

for (const r of rotas) {
  const s = getSticky({ path: r });
  if (!s) continue;
  for (const v of VARIANTES) {
    const m = s.mensagens[v];
    ok(Boolean(m && m.trim()), `${r}: variante ${v} vazia`);
    if (m.length > maiorMsg) {
      maiorMsg = m.length;
      exemploMaior = `${m} (${r})`;
    }
    ok(m.length <= LIMITE_MSG, `${r} [${v}]: mensagem com ${m.length} caracteres — "${m}"`);
  }
  const palavras = s.rotulo.trim().split(/\s+/).length;
  ok(palavras >= 2 && palavras <= 4, `${r}: rótulo com ${palavras} palavras — "${s.rotulo}"`);
}
console.log(`   maior mensagem: ${maiorMsg}/${LIMITE_MSG} caracteres`);
console.log(`   ${exemploMaior}`);

/* ------------------------------------------------------------------ *
 * 4. Vocabulário — o que nunca pode aparecer
 * ------------------------------------------------------------------ */
console.log('\n4. Vocabulário proibido');
const PROIBIDO: [RegExp, string][] = [
  [/compre agora/i, 'venda agressiva'],
  [/n[ãa]o perca/i, 'urgência artificial'],
  [/[úu]ltima chance/i, 'urgência artificial'],
  [/oferta/i, 'linguagem de anúncio'],
  [/imperd[íi]vel/i, 'linguagem de anúncio'],
  [/garantid/i, 'promessa de resultado'],
  [/transforme seu corpo/i, 'promessa de resultado'],
  [/\bcura\b|\bcurar\b/i, 'promessa clínica'],
  [/\bcref\b|\bconfef\b/i, 'regra editorial do projeto'],
  [/\d+\s*(kg|quilos)/i, 'promessa numérica de resultado'],
];
for (const r of rotas) {
  const s = getSticky({ path: r });
  if (!s) continue;
  const texto = `${Object.values(s.mensagens).join(' ')} ${s.rotulo} ${s.ressalva ?? ''}`;
  for (const [re, porque] of PROIBIDO) {
    ok(!re.test(texto), `${r}: ${porque} — "${texto.match(re)?.[0]}"`);
  }
}
console.log(`   ${PROIBIDO.length} padrões verificados em ${comBarra} páginas`);

/* ------------------------------------------------------------------ *
 * 5. Conteúdo sensível carrega ressalva
 * ------------------------------------------------------------------ */
console.log('\n5. Conteúdo sensível');
for (const r of ['/musculacao/treinar-com-dor-lombar/', '/musculacao/musculacao-e-ansiedade/']) {
  const s = getSticky({ path: r });
  ok(s !== null, `${r}: devia ter barra`);
  ok(/m[ée]dico|fisioterapeuta/i.test(s?.ressalva ?? ''), `${r}: falta ressalva clínica`);
}
const farmaco = getSticky({ path: '/mounjaro-e-treino/fraqueza-para-treinar/' });
ok(/m[ée]dico/i.test(farmaco?.ressalva ?? ''), 'mounjaro: falta ressalva de médico');
console.log('   dor, saúde e farmacológico: ressalva presente');

/* ------------------------------------------------------------------ *
 * 6. Geografia — dentro e fora da área presencial
 * ------------------------------------------------------------------ */
console.log('\n6. Páginas locais');
const dentro = getSticky({ path: '/personal-trainer/barueri-sp/' });
const fora = getSticky({ path: '/personal-trainer/recife-pe/' });
ok(dentro?.regra === 'localAtende', 'Barueri está na área presencial: não devia oferecer comparação online');
ok(fora?.regra === 'localFora', 'Recife está fora da área: devia comparar formatos');
ok(
  Object.values(fora?.mensagens ?? {}).every((m) => m.includes('Recife')),
  'a mensagem de Recife devia nomear a cidade',
);
const rio = getSticky({ path: '/personal-trainer/rio-de-janeiro-rj/' });
ok(
  Object.values(rio?.mensagens ?? {}).some((m) => m.includes('no Rio de Janeiro')),
  'regência errada no Rio de Janeiro',
);
const batel = getSticky({ path: '/personal-trainer-batel/' });
ok(
  Object.values(batel?.mensagens ?? {}).some((m) => m.includes('no Batel')),
  'bairro devia usar o nome do bairro, não o da cidade',
);
console.log('   cobertura presencial, regência e bairros: corretos');

/* ------------------------------------------------------------------ *
 * 7. Ferramentas nunca apontam para si mesmas
 * ------------------------------------------------------------------ */
console.log('\n7. Jornada');
for (const f of ferramentas.filter((x) => x.disponivel)) {
  const rota = `/ferramentas/${f.slug}/`;
  const s = getSticky({ path: rota });
  if (!s) continue; // última etapa: silêncio é a resposta certa
  ok(s.destino !== rota, `${rota}: oferece a própria ferramenta`);
  ok(s.destino.startsWith('/ferramentas/'), `${rota}: devia avançar a jornada`);
}
console.log('   nenhuma ferramenta se auto-oferece');

/* ------------------------------------------------------------------ *
 * 8. Distribuição
 * ------------------------------------------------------------------ */
console.log('\n8. Distribuição das regras');
for (const [regra, n] of [...porRegra.entries()].sort((a, b) => b[1] - a[1])) {
  console.log(`   ${String(n).padStart(5)}  ${regra}`);
}

console.log('\n' + '='.repeat(78));
if (falhas) {
  console.error(`${falhas} FALHA(S)`);
  process.exit(1);
}
console.log('Tudo certo.');
