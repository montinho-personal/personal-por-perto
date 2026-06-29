/**
 * Agregador de cidades. Cada cidade é um módulo próprio (escala para milhares
 * de arquivos sem inchar um único arquivo gigante). Para adicionar uma cidade,
 * basta criar o arquivo e importá-lo aqui.
 */
import type { Cidade } from '../../lib/types';

import { cidade as saoPaulo } from './sao-paulo-sp';
import { cidade as campinas } from './campinas-sp';
import { cidade as osasco } from './osasco-sp';
import { cidade as barueri } from './barueri-sp';
import { cidade as guarulhos } from './guarulhos-sp';
import { cidade as santoAndre } from './santo-andre-sp';
import { cidade as curitiba } from './curitiba-pr';
import { cidade as santanaDeParnaiba } from './santana-de-parnaiba-sp';
import { cidade as alphaville } from './alphaville-sp';
import { cidade as tambore } from './tambore-sp';

export const cidades: Cidade[] = [
  saoPaulo,
  campinas,
  guarulhos,
  santoAndre,
  osasco,
  barueri,
  santanaDeParnaiba,
  alphaville,
  tambore,
  curitiba,
];

/** Mapa slug -> cidade para lookups O(1). */
export const cidadesPorSlug: Record<string, Cidade> = Object.fromEntries(
  cidades.map((c) => [c.slug, c]),
);

export function getCidade(slug: string): Cidade | undefined {
  return cidadesPorSlug[slug];
}

export function cidadesPorEstado(estadoSlug: string): Cidade[] {
  return cidades
    .filter((c) => c.estadoSlug === estadoSlug)
    .sort((a, b) => (b.populacao ?? 0) - (a.populacao ?? 0));
}

/** Resolve a lista de cidades vizinhas (objetos), ignorando slugs inexistentes. */
export function vizinhasDe(cidade: Cidade): Cidade[] {
  return cidade.vizinhas
    .map((slug) => cidadesPorSlug[slug])
    .filter((c): c is Cidade => Boolean(c));
}

/**
 * Cidades relacionadas para interligação. Usa vizinhas declaradas e, se faltar,
 * completa com cidades do mesmo estado e depois de outros estados — garante que
 * nenhuma página fique órfã de links internos.
 */
export function relacionadas(cidade: Cidade, limite = 4): Cidade[] {
  const resultado: Cidade[] = vizinhasDe(cidade);
  const jaIncluso = new Set([cidade.slug, ...resultado.map((c) => c.slug)]);

  if (resultado.length < limite) {
    const mesmoEstado = cidades
      .filter((c) => c.estadoSlug === cidade.estadoSlug && !jaIncluso.has(c.slug))
      .sort((a, b) => (b.populacao ?? 0) - (a.populacao ?? 0));
    for (const c of mesmoEstado) {
      if (resultado.length >= limite) break;
      resultado.push(c);
      jaIncluso.add(c.slug);
    }
  }

  if (resultado.length < limite) {
    const outras = cidades
      .filter((c) => !jaIncluso.has(c.slug))
      .sort((a, b) => (b.populacao ?? 0) - (a.populacao ?? 0));
    for (const c of outras) {
      if (resultado.length >= limite) break;
      resultado.push(c);
    }
  }

  return resultado.slice(0, limite);
}
