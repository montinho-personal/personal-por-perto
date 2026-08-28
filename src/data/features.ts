/**
 * Feature flags das ferramentas do portal.
 *
 * O motor de CTA só oferece uma ferramenta quando a flag está ligada. Isso
 * garante a regra mais importante da lista: nenhum leitor cai em link
 * quebrado por causa de uma ferramenta que ainda não foi publicada. Quando
 * a ferramenta entrar no ar, basta ligar a flag — o motor passa a usá-la
 * sozinho, sem tocar em página nenhuma.
 */
export const features = {
  /** /ferramentas/encontre-seu-personal-ideal/ — publicada. */
  personalMatch: true,
  /** /ferramentas/treino-para-minha-rotina/ — publicada. */
  rotinaTreino: true,
  /** /ferramentas/calculadora-preco-personal/ — publicada. */
  calculadoraPreco: true,
  /** /ferramentas/meu-treino-faz-sentido/ — publicada. */
  auditoriaTreino: true,
  /** /ferramentas/diagnostico-da-constancia/ — publicada. */
  diagnosticoConstancia: true,
  /** "Personal Score" (avaliação de profissional) — ainda não existe. */
  personalScore: false,
} as const;

export type Feature = keyof typeof features;
