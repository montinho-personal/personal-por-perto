/**
 * Testes do slide-in contextual.
 *
 * A garantia mais importante aqui não é que o slide-in apareça: é que ele
 * NÃO apareça fora do bloco piloto, e que nunca repita a oferta que a
 * página já faz em outro componente. Uma impressão a mais no lugar errado
 * custa mais caro que uma a menos.
 *
 * Uso: npm run test:slidein
 */
import { existsSync, readdirSync } from 'node:fs';
import { getSlideIn } from '../src/lib/slideIn';
import { getSticky } from '../src/lib/stickyBar';
import { getContextualCTA } from '../src/lib/ctaEngine';
import {
  VARIANTES_SLIDE,
  LIMITE_TITULO,
  LIMITE_DESCRICAO,
  BLOCOS,
} from '../src/data/slideInMensagens';
import { artigos } from '../src/data/artigos';
import { cidades } from '../src/data/cidades';
import { bairros } from '../src/data/bairros';
import { ferramentas } from '../src/data/ferramentas';

let falhas = 0;
const ok = (cond: boolean, msg: string): void => {
  if (!cond) {
    falhas++;
    console.error(`  FALHOU: ${msg}`);
  }
};

function paginasNoDist(): Set<string> | null {
  if (!existsSync('dist')) return null;
  const achadas = new Set<string>();
  const andar = (dir: string, prefixo: string): void => {
    for (const e of readdirSync(dir, { withFileTypes: true })) {
      if (e.isDirectory()) andar(`${dir}/${e.name}`, `${prefixo}${e.name}/`);
      else if (e.name === 'index.html') achadas.add(prefixo);
    }
  };
  andar('dist', '/');
  return achadas;
}

const todasRotas = [
  '/',
  ...artigos.map((a) => a.url),
  ...cidades.map((c) => `/personal-trainer/${c.slug}/`),
  ...bairros.map((b) => `/${b.slug}/`),
  ...ferramentas.filter((f) => f.disponivel).map((f) => `/ferramentas/${f.slug}/`),
  '/ferramentas/',
  '/privacidade/',
  '/sobre/',
  '/humor-fitness/memes-de-academia/',
];
const dist = paginasNoDist();

console.log('='.repeat(78));
console.log(`SLIDE-IN — ${todasRotas.length} rotas · ${BLOCOS.filter((b) => b.ativo).length} bloco(s) ativo(s)`);
console.log('='.repeat(78));

/* ---------------------------------------------------------------- *
 * 1. Escopo: o bloco é a única porta de entrada
 * ---------------------------------------------------------------- */
console.log('\n1. Escopo do bloco');
const comSlide = todasRotas.filter((r) => getSlideIn({ path: r }));
console.log(`   ${comSlide.length} de ${todasRotas.length} rotas recebem slide-in`);

for (const r of comSlide) {
  ok(r.startsWith('/musculacao/'), `${r}: fora do bloco piloto e mesmo assim tem slide-in`);
}
for (const r of ['/privacidade/', '/sobre/', '/humor-fitness/memes-de-academia/', '/ferramentas/']) {
  ok(getSlideIn({ path: r }) === null, `${r} nunca devia receber slide-in`);
}
for (const c of cidades.slice(0, 50)) {
  ok(
    getSlideIn({ path: `/personal-trainer/${c.slug}/` }) === null,
    `cidade ${c.slug}: bloco de cidade não foi aberto ainda`,
  );
}
for (const f of ferramentas.filter((x) => x.disponivel)) {
  ok(
    getSlideIn({ path: `/ferramentas/${f.slug}/` }) === null,
    `ferramenta ${f.slug}: slide-in não interrompe quem já está numa ferramenta`,
  );
}
console.log('   fora do bloco: silêncio em cidade, bairro, ferramenta, humor e institucional');

/* ---------------------------------------------------------------- *
 * 2. A regra central: nunca repetir a oferta da página
 * ---------------------------------------------------------------- */
console.log('\n2. Não repetir o que a página já oferece');
let checados = 0;
for (const r of comSlide) {
  const s = getSlideIn({ path: r })!;
  const sticky = getSticky({ path: r });
  ok(s.destino !== sticky?.destino, `${r}: slide-in repete o destino da sticky bar (${s.destino})`);
  for (const pos of ['inicio', 'meio', 'fim'] as const) {
    const c = getContextualCTA({ path: r, posicao: pos });
    ok(
      s.destino !== c?.campanha.destino,
      `${r}: slide-in repete o CTA de ${pos} (${s.destino})`,
    );
  }
  ok(s.destino !== r, `${r}: slide-in aponta para a própria página`);
  if (dist) ok(dist.has(s.destino), `${r}: destino inexistente no build (${s.destino})`);
  checados++;
}
console.log(`   ${checados} páginas conferidas contra sticky bar e os 3 CTAs do corpo`);

/* ---------------------------------------------------------------- *
 * 3. Copy
 * ---------------------------------------------------------------- */
console.log('\n3. Copy');
let maiorTit = 0;
let maiorDesc = 0;
for (const r of comSlide) {
  const s = getSlideIn({ path: r })!;
  for (const v of VARIANTES_SLIDE) {
    const t = s.titulos[v];
    ok(Boolean(t?.trim()), `${r}: título da variante ${v} vazio`);
    maiorTit = Math.max(maiorTit, t.length);
    ok(t.length <= LIMITE_TITULO, `${r} [${v}]: título com ${t.length} caracteres — "${t}"`);
  }
  maiorDesc = Math.max(maiorDesc, s.descricao.length);
  ok(
    s.descricao.length <= LIMITE_DESCRICAO,
    `${r}: descrição com ${s.descricao.length} caracteres`,
  );
  // Uma frase, não duas.
  ok(
    (s.descricao.match(/\./g) ?? []).length <= 1,
    `${r}: descrição com mais de uma frase — "${s.descricao}"`,
  );
  const palavras = s.botao.trim().split(/\s+/).length;
  ok(palavras >= 2 && palavras <= 4, `${r}: botão com ${palavras} palavras — "${s.botao}"`);
}
console.log(`   maior título: ${maiorTit}/${LIMITE_TITULO} · maior descrição: ${maiorDesc}/${LIMITE_DESCRICAO}`);

/* ---------------------------------------------------------------- *
 * 4. Vocabulário
 * ---------------------------------------------------------------- */
console.log('\n4. Vocabulário proibido');
const PROIBIDO: [RegExp, string][] = [
  [/n[ãa]o perca/i, 'urgência artificial'],
  [/[úu]ltima (chance|oportunidade)/i, 'urgência artificial'],
  [/oferta especial/i, 'linguagem de anúncio'],
  [/clique aqui/i, 'CTA genérico'],
  [/transforme seu corpo/i, 'promessa de resultado'],
  [/garantid/i, 'promessa de resultado'],
  [/\bcura\b|\bcurar\b/i, 'promessa clínica'],
  [/\bcref\b|\bconfef\b/i, 'regra editorial do projeto'],
  [/fazendo tudo errado/i, 'culpabilização do leitor'],
  [/\d+\s*(kg|quilos)/i, 'promessa numérica'],
];
for (const r of comSlide) {
  const s = getSlideIn({ path: r })!;
  const texto = `${Object.values(s.titulos).join(' ')} ${s.descricao} ${s.botao} ${s.rotulo}`;
  for (const [re, porque] of PROIBIDO) {
    ok(!re.test(texto), `${r}: ${porque} — "${texto.match(re)?.[0]}"`);
  }
}
console.log(`   ${PROIBIDO.length} padrões verificados em ${comSlide.length} páginas`);

/* ---------------------------------------------------------------- *
 * 5. Distribuição
 * ---------------------------------------------------------------- */
console.log('\n5. Distribuição');
const porRegra = new Map<string, number>();
for (const r of comSlide) {
  const s = getSlideIn({ path: r })!;
  porRegra.set(s.regra, (porRegra.get(s.regra) ?? 0) + 1);
}
for (const [k, n] of [...porRegra].sort((a, b) => b[1] - a[1])) {
  console.log(`   ${String(n).padStart(4)}  ${k}`);
}

console.log('\n' + '='.repeat(78));
if (falhas) {
  console.error(`${falhas} FALHA(S)`);
  process.exit(1);
}
console.log('Tudo certo.');
