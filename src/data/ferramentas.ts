/**
 * Registro central das ferramentas interativas do portal.
 *
 * O hub /ferramentas/ é montado a partir daqui: para publicar uma ferramenta
 * nova, basta acrescentar a entrada (e a página). Itens com `disponivel: false`
 * aparecem no hub como "em breve", sem link — nunca como link quebrado.
 */
export interface Ferramenta {
  slug: string;
  nome: string;
  chamada: string;
  descricao: string;
  /** Selo curto exibido no card (ex.: "1 minuto"). */
  selo?: string;
  disponivel: boolean;
}

export const ferramentas: Ferramenta[] = [
  {
    slug: 'encontre-seu-personal-ideal',
    nome: 'Encontre seu Personal Ideal',
    chamada: 'Que tipo de acompanhamento combina com a sua rotina?',
    descricao:
      'Oito perguntas rápidas cruzam objetivo, experiência, disponibilidade e o seu maior obstáculo para indicar o formato de acompanhamento que faz mais sentido — presencial, online ou híbrido — e o que procurar no profissional.',
    selo: 'Cerca de 1 minuto',
    disponivel: true,
  },
  {
    slug: 'calculadora-preco-personal',
    nome: 'Calculadora de Preço do Personal',
    chamada: 'Quanto pode custar um acompanhamento na sua cidade?',
    descricao:
      'Escolha a cidade, o formato e a frequência de treino para ver a faixa de referência por sessão e por mês — com a conta aberta e a procedência do dado declarada.',
    selo: 'Resultado na hora',
    disponivel: true,
  },
];

/** URL canônica (com barra final) de uma ferramenta. */
export const urlFerramenta = (slug: string) => `/ferramentas/${slug}/`;
