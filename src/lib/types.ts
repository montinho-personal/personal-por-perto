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

/** Academia ou espaço de treino citado nominalmente na página da cidade. */
export interface AcademiaProxima {
  nome: string;
  detalhe?: string;
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

  /**
   * Tipo da localidade: município ("cidade") ou bairro/região planejada
   * ("regiao", ex.: Alphaville, Tamboré). Default tratado como "cidade".
   */
  tipo?: 'cidade' | 'regiao';
  /** Para regiões: slug do(s) município(s) a que pertence (para breadcrumb/links). */
  cidadeMae?: string;
  /** Rótulo curto do contexto (ex.: "Região de Barueri e Santana de Parnaíba"). */
  contexto?: string;

  /** Dados demográficos e socioeconômicos reais (IBGE/Atlas Brasil). Opcionais para regiões. */
  populacao?: number;
  populacaoAno?: number;
  idhm?: number;
  idhmClasse?: string;
  pibPerCapita?: number;
  pibPerCapitaAno?: number;
  altitudeM?: number;

  /** Conteúdo editorial específico da cidade. */
  resumoEconomico: string;
  /** Parágrafo da seção "Mercado de Personal Trainers" (opcional; há fallback). */
  mercado?: string;
  /** Parágrafo de conclusão (opcional; há fallback). */
  conclusao?: string;
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
  /**
   * Academias e espaços de treino com nome verificado publicamente (opcional).
   * Lista editorial exibida na seção "Onde treinar" — preencher apenas com
   * nomes reais confirmados, nunca inventados.
   */
  academiasProximas?: AcademiaProxima[];
  /**
   * Data (YYYY-MM-DD) da última checagem das academias da cidade. Marcar
   * mesmo quando a busca não encontra nada verificável — em município
   * pequeno isso é resultado legítimo, não pendência. Sem esta data, a
   * cidade continua na fila de `npm run audit:academias`.
   */
  academiasVerificadasEm?: string;
  destaquesFitness: string[];

  precos: Precos;

  /** Slugs de cidades vizinhas para interligação (hub-and-spoke horizontal). */
  vizinhas: string[];

  fontes: Fonte[];
  /** Data ISO da última revisão editorial. */
  atualizadoEm: string;

  /** FAQs específicas opcionais; complementam as FAQs padrão. */
  faqsExtra?: FAQ[];

  /**
   * Arte de capa personalizada. Quando presente, substitui a capa gerada
   * padrão no hero, na imagem Open Graph e no sitemap de imagens. Usada em
   * cidades priorizadas que receberam criativo próprio com cartão-postal local.
   */
  /**
   * Foto real do profissional destacado, exibida no corpo do artigo (antes da
   * seção "O mercado de personal trainers"). Nunca substitui a capa, o
   * Open Graph nem o sitemap de imagens. Dimensões reais do WebP em px.
   */
  fotoCorpo?: {
    /** Caminho do WebP (a partir de /public). */
    src: string;
    /** ALT descritivo, em português, do que a foto mostra. */
    alt: string;
    /** Legenda editorial exibida sob a foto. */
    legenda: string;
    w: number;
    h: number;
  };

  capaArte?: {
    /** Caminho do WebP (a partir de /public). */
    src: string;
    /** ALT descritivo e otimizado para SEO. */
    alt: string;
    /** Legenda editorial exibida sob a imagem. */
    legenda: string;
    /**
     * Arte em formato retrato (pôster 2:3) em vez do padrão paisagem (3:2).
     * Ajusta width/height do hero e limita a largura para não dominar a página.
     */
    vertical?: boolean;
    /**
     * Dimensões reais do WebP (px). Quando presentes, o hero usa a proporção
     * exata da arte — banner exibido inteiro, sem corte e sem layout shift.
     */
    w?: number;
    h?: number;
  };
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
