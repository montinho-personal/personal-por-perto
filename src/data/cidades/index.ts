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
import { cidade as ribeiraoPreto } from './ribeirao-preto-sp';
import { cidade as sorocaba } from './sorocaba-sp';
import { cidade as rioDeJaneiro } from './rio-de-janeiro-rj';
import { cidade as niteroi } from './niteroi-rj';
import { cidade as beloHorizonte } from './belo-horizonte-mg';
import { cidade as uberlandia } from './uberlandia-mg';
import { cidade as vitoria } from './vitoria-es';
import { cidade as brasilia } from './brasilia-df';
import { cidade as goiania } from './goiania-go';
import { cidade as portoAlegre } from './porto-alegre-rs';
import { cidade as florianopolis } from './florianopolis-sc';
import { cidade as balnearioCamboriu } from './balneario-camboriu-sc';
import { cidade as fortaleza } from './fortaleza-ce';
import { cidade as salvador } from './salvador-ba';
import { cidade as recife } from './recife-pe';
import { cidade as aracaju } from './aracaju-se';
import { cidade as joaoPessoa } from './joao-pessoa-pb';
import { cidade as natal } from './natal-rn';
import { cidade as manaus } from './manaus-am';
import { cidade as palmas } from './palmas-to';
// Bloco 2
import { cidade as saoJoseDosCampos } from './sao-jose-dos-campos-sp';
import { cidade as jundiai } from './jundiai-sp';
import { cidade as saoBernardoDoCampo } from './sao-bernardo-do-campo-sp';
import { cidade as santos } from './santos-sp';
import { cidade as saoJoseDoRioPreto } from './sao-jose-do-rio-preto-sp';
import { cidade as vilaVelha } from './vila-velha-es';
import { cidade as serra } from './serra-es';
import { cidade as contagem } from './contagem-mg';
import { cidade as juizDeFora } from './juiz-de-fora-mg';
import { cidade as londrina } from './londrina-pr';
import { cidade as maringa } from './maringa-pr';
import { cidade as joinville } from './joinville-sc';
import { cidade as blumenau } from './blumenau-sc';
import { cidade as caxiasDoSul } from './caxias-do-sul-rs';
import { cidade as campoGrande } from './campo-grande-ms';
import { cidade as cuiaba } from './cuiaba-mt';
import { cidade as belem } from './belem-pa';
import { cidade as teresina } from './teresina-pi';
import { cidade as saoLuis } from './sao-luis-ma';
import { cidade as feiraDeSantana } from './feira-de-santana-ba';

export const cidades: Cidade[] = [
  // Sudeste — SP
  saoPaulo,
  campinas,
  guarulhos,
  santoAndre,
  osasco,
  barueri,
  santanaDeParnaiba,
  alphaville,
  tambore,
  ribeiraoPreto,
  sorocaba,
  saoJoseDosCampos,
  jundiai,
  saoBernardoDoCampo,
  santos,
  saoJoseDoRioPreto,
  // Sudeste — RJ / MG / ES
  rioDeJaneiro,
  niteroi,
  beloHorizonte,
  uberlandia,
  contagem,
  juizDeFora,
  vitoria,
  vilaVelha,
  serra,
  // Sul
  curitiba,
  londrina,
  maringa,
  portoAlegre,
  caxiasDoSul,
  florianopolis,
  balnearioCamboriu,
  joinville,
  blumenau,
  // Centro-Oeste
  brasilia,
  goiania,
  campoGrande,
  cuiaba,
  // Nordeste
  fortaleza,
  salvador,
  feiraDeSantana,
  recife,
  aracaju,
  joaoPessoa,
  natal,
  teresina,
  saoLuis,
  // Norte
  manaus,
  belem,
  palmas,
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
