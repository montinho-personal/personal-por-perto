/**
 * Cruza um export do Search Console com o estado real do repositório.
 *
 * Existe porque a pergunta "que artigo priorizar?" só tem resposta honesta
 * com dado de busca. Sem ele, o que sobra é contagem de links internos —
 * que mede a importância que NÓS damos à página, não a que o Google e as
 * pessoas dão. Na primeira vez que comparamos os dois, 4 das 7 páginas no
 * topo da lista por links internos tinham ZERO impressão.
 *
 * Como exportar:
 *   Search Console -> Desempenho -> Resultados da pesquisa
 *   -> período de 3 meses -> Exportar -> CSV
 *   -> use o arquivo "Páginas.csv" de dentro do .zip
 *
 * Uso: npm run audit:gsc -- caminho/para/Paginas.csv
 *
 * O relatório separa dois problemas que costumam ser confundidos:
 *
 *   CTR baixo em posição boa  -> título, descrição e capa resolvem
 *   posição ruim              -> capa não resolve nada; é conteúdo e link
 *
 * Tratar o segundo caso como se fosse o primeiro é a forma mais comum de
 * gastar esforço de design sem mover clique nenhum.
 */
import { existsSync, readFileSync, readdirSync } from 'node:fs';

const SECOES = ['guias', 'musculacao', 'emagrecimento', 'mounjaro-e-treino', 'humor-fitness'];

interface Linha {
  url: string;
  cliques: number;
  impressoes: number;
  posicao: number;
}

/** CSV do GSC: aspas duplas, vírgula, cabeçalho em português ou inglês. */
function lerCsv(caminho: string): Linha[] {
  const bruto = readFileSync(caminho, 'utf8').replace(/^﻿/, '');
  const linhas = bruto.split(/\r?\n/).filter(Boolean);
  const dados: Linha[] = [];

  for (const l of linhas.slice(1)) {
    // Divide respeitando aspas — a URL pode conter vírgula.
    const campos: string[] = [];
    let atual = '';
    let dentro = false;
    for (const ch of l) {
      if (ch === '"') dentro = !dentro;
      else if (ch === ',' && !dentro) {
        campos.push(atual);
        atual = '';
      } else atual += ch;
    }
    campos.push(atual);
    if (campos.length < 5) continue;

    const num = (s: string) => Number(s.replace(/[%\s]/g, '').replace(',', '.')) || 0;
    let url = campos[0].trim().replace(/^https?:\/\/[^/]+/, '');
    if (!url.startsWith('/')) continue;
    if (!url.endsWith('/')) url += '/';

    dados.push({
      url,
      cliques: num(campos[1]),
      impressoes: num(campos[2]),
      posicao: num(campos[4]),
    });
  }
  return dados;
}

/** O GSC lista a mesma página com e sem barra final: soma as duas. */
function agregar(linhas: Linha[]): Map<string, Linha> {
  const m = new Map<string, Linha>();
  for (const l of linhas) {
    const a = m.get(l.url);
    if (!a) {
      m.set(l.url, { ...l });
      continue;
    }
    const impTotal = a.impressoes + l.impressoes;
    a.posicao = impTotal ? (a.posicao * a.impressoes + l.posicao * l.impressoes) / impTotal : a.posicao;
    a.cliques += l.cliques;
    a.impressoes = impTotal;
  }
  return m;
}

/** Páginas de artigo que ainda não têm capa própria. */
function artigosSemCapa(): Set<string> {
  const fora = new Set<string>();
  for (const secao of SECOES) {
    const dir = `src/pages/${secao}`;
    if (!existsSync(dir)) continue;
    for (const f of readdirSync(dir)) {
      if (!f.endsWith('.astro')) continue;
      const conteudo = readFileSync(`${dir}/${f}`, 'utf8');
      if (!conteudo.includes('capas-conteudo')) {
        fora.add(`/${secao}/${f.replace('.astro', '')}/`);
      }
    }
  }
  return fora;
}

const ctr = (l: Linha) => (l.impressoes ? (l.cliques / l.impressoes) * 100 : 0);
const linha = (l: Linha, extra = '') =>
  `  ${String(Math.round(l.impressoes)).padStart(6)} imp ${String(Math.round(l.cliques)).padStart(4)} cl` +
  `  CTR ${ctr(l).toFixed(2).padStart(5)}%  pos ${l.posicao.toFixed(1).padStart(5)}  ${extra}${l.url}`;

/* ------------------------------------------------------------------ */

const caminho = process.argv[2];
if (!caminho || !existsSync(caminho)) {
  console.error('Uso: npm run audit:gsc -- caminho/para/Paginas.csv');
  console.error('(Search Console -> Desempenho -> Exportar -> CSV -> Páginas.csv)');
  process.exit(1);
}

const agg = agregar(lerCsv(caminho));
const semCapa = artigosSemCapa();
const todas = [...agg.values()];
const totImp = todas.reduce((s, l) => s + l.impressoes, 0);
const totCl = todas.reduce((s, l) => s + l.cliques, 0);

console.log('='.repeat(90));
console.log(`AUDITORIA GSC — ${agg.size} URLs, ${Math.round(totImp)} impressões, ${Math.round(totCl)} cliques`);
console.log(`CTR global: ${((totCl / totImp) * 100).toFixed(2)}%`);
console.log('='.repeat(90));

/* --- Onde estão as impressões: separa problema de CTR de problema de posição --- */
console.log('\nONDE ESTÃO AS IMPRESSÕES\n');
const faixas: [number, number, string][] = [
  [1, 3.99, '1–3 (topo)'],
  [4, 10.99, '4–10 (1ª página)'],
  [11, 20.99, '11–20 (2ª página)'],
  [21, 999, '21+ (fundo)'],
];
for (const [lo, hi, rotulo] of faixas) {
  const sel = todas.filter((l) => l.posicao >= lo && l.posicao <= hi);
  const im = sel.reduce((s, l) => s + l.impressoes, 0);
  const cl = sel.reduce((s, l) => s + l.cliques, 0);
  const pct = totImp ? (im / totImp) * 100 : 0;
  console.log(
    `  ${rotulo.padEnd(20)} ${String(sel.length).padStart(4)} págs  ${String(Math.round(im)).padStart(7)} imp` +
      ` (${pct.toFixed(1).padStart(4)}%)  ${String(Math.round(cl)).padStart(4)} cl  CTR ${(im ? (cl / im) * 100 : 0).toFixed(2)}%`,
  );
}

/* --- Capa só compensa onde já existe impressão E a posição é boa --- */
console.log('\nCANDIDATAS A CAPA — sem capa, com impressão, na 1ª página\n');
const candidatas = todas
  .filter((l) => semCapa.has(l.url) && l.impressoes >= 10 && l.posicao <= 15)
  .sort((a, b) => b.impressoes - a.impressoes);
if (!candidatas.length) console.log('  nenhuma — a fila de capas está zerada para o que tem tráfego');
candidatas.forEach((l) => console.log(linha(l)));

/* --- O contraponto honesto: páginas que JÁ têm capa e mesmo assim não convertem --- */
console.log('\nJÁ TÊM CAPA E O CTR CONTINUA BAIXO (aqui o problema é título ou posição)\n');
todas
  .filter((l) => !semCapa.has(l.url) && l.impressoes >= 150 && ctr(l) < 1.5 && !l.url.startsWith('/personal-trainer'))
  .sort((a, b) => b.impressoes - a.impressoes)
  .slice(0, 12)
  .forEach((l) => console.log(linha(l)));

/* --- Sem impressão: capa não resolve, falta ranquear --- */
const semImpressao = [...semCapa].filter((u) => !agg.has(u) || (agg.get(u)?.impressoes ?? 0) === 0);
console.log(`\nSEM CAPA E SEM IMPRESSÃO: ${semImpressao.length} artigos`);
console.log('  Capa não move nada aqui — o gargalo é ranquear, não ilustrar.');

console.log('\n' + '='.repeat(90));
console.log('Regra de leitura: capa e título movem CTR onde a posição já é boa.');
console.log('Em posição 9 ou pior, o que move clique é subir — não ilustrar.');
