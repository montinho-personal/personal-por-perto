/**
 * Regência de topônimos em português.
 *
 * A maioria das cidades brasileiras é usada sem artigo ("em São Paulo",
 * "de Curitiba"). Uma minoria tem o artigo definido fundido ao nome e, por
 * isso, contrai a preposição: "no Rio de Janeiro", "do Recife", "no Guarujá".
 *
 * Mapeamos essas exceções por SLUG (não por nome, para não adivinhar) com o
 * gênero/número do artigo. Conservador de propósito: só entram cidades cujo
 * uso com artigo é padrão e inequívoco no Brasil. Casos ambíguos em que "em"
 * é a forma corrente (Rio Branco, Cabo Frio, Serra, Porto Alegre, Natal,
 * Salvador…) ficam de fora — a forma "em" continua correta para eles.
 *
 * Importante: isto NÃO altera slugs/URLs — apenas o texto visível.
 */
export type ArtigoCidade = 'o' | 'a' | 'os' | 'as';

const ARTIGO_POR_SLUG: Record<string, ArtigoCidade> = {
  'rio-de-janeiro-rj': 'o', // no Rio de Janeiro
  'recife-pe': 'o', //         no Recife
  'guaruja-sp': 'o', //        no Guarujá
  'crato-ce': 'o', //          no Crato
  'rio-grande-rs': 'o', //     no Rio Grande
};

const EM: Record<ArtigoCidade, string> = { o: 'no', a: 'na', os: 'nos', as: 'nas' };
const DE: Record<ArtigoCidade, string> = { o: 'do', a: 'da', os: 'dos', as: 'das' };

type CidadeLoc = { slug: string; nome: string };

/** Artigo do topônimo, ou null quando ele é usado sem artigo. */
export function artigoCidade(slug: string): ArtigoCidade | null {
  return ARTIGO_POR_SLUG[slug] ?? null;
}

/** Locução com "em": "em São Paulo" | "no Rio de Janeiro" | "na …". */
export function emCidade({ slug, nome }: CidadeLoc): string {
  const art = ARTIGO_POR_SLUG[slug];
  return art ? `${EM[art]} ${nome}` : `em ${nome}`;
}

/** Como emCidade, mas com inicial maiúscula (início de frase). */
export function emCidadeCap(cidade: CidadeLoc): string {
  const s = emCidade(cidade);
  return s.charAt(0).toUpperCase() + s.slice(1);
}

/** Locução com "de": "de São Paulo" | "do Rio de Janeiro" | "da …". */
export function deCidade({ slug, nome }: CidadeLoc): string {
  const art = ARTIGO_POR_SLUG[slug];
  return art ? `${DE[art]} ${nome}` : `de ${nome}`;
}

/**
 * Regência dos 26 estados e do DF.
 *
 * Ao contrário das cidades, aqui a maioria PEDE artigo — e o portal escrevia
 * "no" em todos, o que produzia "Personal Trainer no São Paulo" e "no Bahia"
 * no H1 e no <title> dos 27 hubs estaduais. A tabela abaixo é fechada: são 27
 * entradas, todas conhecidas, então não há espaço para adivinhação.
 *
 * Sem artigo (uso padrão com "em"): São Paulo, Minas Gerais, Goiás,
 * Pernambuco, Alagoas, Sergipe, Rondônia, Roraima, Santa Catarina, Mato
 * Grosso e Mato Grosso do Sul.
 */
const ARTIGO_POR_ESTADO: Record<string, ArtigoCidade | null> = {
  'sao-paulo': null,
  'minas-gerais': null,
  goias: null,
  pernambuco: null,
  alagoas: null,
  sergipe: null,
  rondonia: null,
  roraima: null,
  'santa-catarina': null,
  'mato-grosso': null,
  'mato-grosso-do-sul': null,
  bahia: 'a',
  paraiba: 'a',
  'rio-de-janeiro': 'o',
  'espirito-santo': 'o',
  parana: 'o',
  'rio-grande-do-sul': 'o',
  'rio-grande-do-norte': 'o',
  'distrito-federal': 'o',
  ceara: 'o',
  amazonas: 'o',
  tocantins: 'o',
  para: 'o',
  piaui: 'o',
  maranhao: 'o',
  acre: 'o',
  amapa: 'o',
};

type EstadoLoc = { slug: string; nome: string };

/** Locução com "em": "em São Paulo" | "no Pará" | "na Bahia". */
export function emEstado({ slug, nome }: EstadoLoc): string {
  const art = ARTIGO_POR_ESTADO[slug];
  return art ? `${EM[art]} ${nome}` : `em ${nome}`;
}

/** Como emEstado, com inicial maiúscula. */
export function emEstadoCap(estado: EstadoLoc): string {
  const s = emEstado(estado);
  return s.charAt(0).toUpperCase() + s.slice(1);
}

/** Locução com "de": "de São Paulo" | "do Pará" | "da Bahia". */
export function deEstado({ slug, nome }: EstadoLoc): string {
  const art = ARTIGO_POR_ESTADO[slug];
  return art ? `${DE[art]} ${nome}` : `de ${nome}`;
}
