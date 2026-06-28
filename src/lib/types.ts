/**
 * Tipos centrais do portal Personal por Perto.
 * A arquitetura é orientada a dados: cada cidade é um objeto tipado,
 * o que permite escalar para milhares de páginas sem duplicar layout.
 */

export interface Parque {
  nome: string;
  descricao: string;
}

export interface Corrida {
  nome: string;
  descricao: string;
}

export interface Fonte {
  nome: string;
  url: string;
}

export interface FAQ {
  pergunta: string;
  resposta: string;
}

/** Faixas de preço de mercado (estimativas, em R$). */
export interface Precos {
  /** Aula avulsa presencial. */
  avulsaMin: number;
  avulsaMax: number;
  /** Pacote mensal presencial (2 a 3x por semana). */
  mensalMin: number;
  mensalMax: number;
  /** Acompanhamento online mensal. */
  onlineMin: number;
  onlineMax: number;
}

export interface Cidade {
  /** Slug único no padrão cidade-uf, ex.: "sao-paulo-sp". */
  slug: string;
  nome: string;
  uf: string;
  estado: string;
  estadoSlug: string;
  regiao: string;
  gentilico?: string;

  /** Dados demográficos e socioeconômicos reais (IBGE/Atlas Brasil). */
  populacao: number;
  populacaoAno: number;
  idhm?: number;
  idhmClasse?: string;
  pibPerCapita?: number;
  pibPerCapitaAno?: number;
  altitudeM?: number;

  /** Conteúdo editorial específico da cidade. */
  resumoEconomico: string;
  bairrosNobres: string[];
  bairrosPopulares: string[];
  parques: Parque[];
  ciclovias?: string;
  clima: string;
  /** Implicação prática do clima para o treino na cidade. */
  climaTreino: string;
  mobilidade: string;
  corridas: Corrida[];
  culturaEsportiva: string;
  academias?: string;
  destaquesFitness: string[];

  precos: Precos;

  /** Slugs de cidades vizinhas para interligação (hub-and-spoke horizontal). */
  vizinhas: string[];

  fontes: Fonte[];
  /** Data ISO da última revisão editorial. */
  atualizadoEm: string;

  /** FAQs específicas opcionais; complementam as FAQs padrão. */
  faqsExtra?: FAQ[];
}

export interface Estado {
  slug: string;
  nome: string;
  uf: string;
  regiao: string;
  capital: string;
  descricao: string;
  atualizadoEm: string;
}

export interface Crumb {
  nome: string;
  url: string;
}
