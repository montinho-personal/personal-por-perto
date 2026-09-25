/**
 * As regras do FerramentaInline, conferidas em todos os artigos.
 *
 * O CLAUDE.md fixa três coisas que até 24/09/2026 dependiam de alguém
 * lembrar: um bloco só por artigo, nunca a mesma ferramenta que o CTA
 * automático do fim, e nenhum convite no humor. Com as calculadoras
 * entrando no bloco, o número de ferramentas possíveis foi de 7 para 26 —
 * e a chance de erro subiu junto. Aqui a regra vira teste.
 *
 * Uso: npm run test:ferramentas-inline
 */
import { existsSync, readFileSync, readdirSync } from 'node:fs';
import { getContextualCTA } from '../src/lib/ctaEngine';
import { FERRAMENTAS, type FerramentaId } from '../src/lib/jornada';
import { ferramentaDoCatalogo } from '../src/data/ferramentas';

const SECOES = ['musculacao', 'emagrecimento', 'guias', 'mounjaro-e-treino', 'humor-fitness'];

let falhas = 0;
let comBloco = 0;
let comCalculadora = 0;
let total = 0;
const falha = (msg: string) => {
  falhas++;
  console.log(`  ✗ ${msg}`);
};

const destinoDe = (id: string): string | undefined =>
  FERRAMENTAS[id as FerramentaId]?.url ?? ferramentaDoCatalogo(id)?.url;

for (const s of SECOES) {
  const dir = `src/pages/${s}`;
  if (!existsSync(dir)) continue;
  for (const f of readdirSync(dir)) {
    if (!f.endsWith('.astro') || f === 'index.astro') continue;
    total++;
    const url = `/${s}/${f.replace(/\.astro$/, '')}/`;
    const src = readFileSync(`${dir}/${f}`, 'utf8');
    const ids = [...src.matchAll(/<FerramentaInline\s+id="([a-zA-Z0-9-]+)"/g)].map((m) => m[1]);
    const usos = (src.match(/<FerramentaInline\b/g) ?? []).length;

    if (s === 'humor-fitness') {
      total--;
      if (usos) falha(`${url}: humor não leva convite no corpo`);
      continue;
    }
    if (!usos) continue;
    comBloco++;
    if (usos > 1) falha(`${url}: ${usos} blocos — a regra é um só`);
    if (ids.length !== usos) falha(`${url}: bloco sem id literal (o teste precisa ler o id no fonte)`);
    for (const id of ids) {
      const destino = destinoDe(id);
      if (!destino) {
        falha(`${url}: ferramenta desconhecida "${id}"`);
        continue;
      }
      if (!FERRAMENTAS[id as FerramentaId]) comCalculadora++;
      if (destino === url) falha(`${url}: o bloco convida para a própria página`);
      const cta = getContextualCTA({ path: url });
      const fim = (cta?.campanha as { destino?: string } | undefined)?.destino;
      if (fim && fim === destino) falha(`${url}: bloco "${id}" repete o destino do CTA do fim (${fim})`);
    }
  }
}

console.log(`\n${comBloco} de ${total} artigos com bloco · ${comCalculadora} oferecem calculadora`);
console.log(falhas ? `✗ ${falhas} falha(s)\n` : '✓ tudo certo\n');
process.exit(falhas ? 1 : 0);
