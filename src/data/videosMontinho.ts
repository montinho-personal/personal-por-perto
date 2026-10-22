/**
 * Catálogo dos vídeos do próprio Montinho, e o sorteio estável por página.
 *
 * POR QUE ISTO EXISTE
 *
 * As cinco páginas de cidade com atendimento presencial traziam vídeo do
 * Montinho — e quatro delas traziam o MESMO vídeo, com o quinto repetindo o
 * segundo. Quem chega em Alphaville e depois em Tamboré via a mesma peça duas
 * vezes, e o canal inteiro ficava representado por um item só.
 *
 * DUAS DECISÕES DE PROJETO
 *
 * 1. O sorteio é DETERMINÍSTICO, derivado do slug. A mesma cidade mostra
 *    sempre o mesmo vídeo — o que preserva cache, build reprodutível e a
 *    possibilidade de conferir a página duas vezes e ver a mesma coisa. O que
 *    varia é entre cidades, que é onde a repetição incomodava.
 *
 * 2. O catálogo é uma lista simples, e crescer é só acrescentar uma linha.
 *    Nenhuma página precisa ser editada quando um vídeo novo entra: as cinco
 *    cidades se redistribuem sozinhas pelo catálogo maior.
 */

import { cidadesPresencial } from './atendimentoPresencial';

export interface VideoMontinho {
  /** ID do YouTube (o trecho depois de watch?v= ou de /shorts/). */
  id: string;
  /** Assunto, para quem for escolher um vídeo à mão em outro contexto. */
  tema: string;
  /** Shorts (9:16) — todo o material recente do canal é vertical. */
  short: boolean;
}

/**
 * Os vídeos do canal já usados no portal. Os três primeiros são os antigos,
 * sem título registrado aqui porque a legenda de cada página é escrita para o
 * contexto dela; os demais entraram em setembro de 2026 com tema declarado.
 */
export const VIDEOS_MONTINHO: VideoMontinho[] = [
  { id: 'yndKE1GrnUQ', tema: 'apresentação do trabalho', short: true },
  { id: 'MrfzaQWFqPs', tema: 'apresentação do trabalho', short: true },
  { id: 'GPuqJs_DRoY', tema: 'apresentação do trabalho', short: true },
  { id: '0uzpCxIJkBg', tema: 'na caneta e sem treinar: o custo em massa magra', short: true },
  { id: 'nEhysMtPPVw', tema: 'a balança que sobe depois do feriado não é gordura', short: true },
  { id: 'yqPAYRVTe0E', tema: 'não existe o treino perfeito', short: true },
  { id: 'nrT-Fan_Nbg', tema: 'como evitar o efeito sanfona', short: true },
  { id: 'DiH1OzIR6Yk', tema: 'proteger o objetivo: constância acima de motivação', short: true },
  // 22/10/2026: publicado nesse dia; usado nas páginas de consultoria online.
  { id: 'DPAQDPVffCg', tema: 'o app do Montinho: o treino na palma da mão', short: true },
  // 22/10/2026: TMB e TDEE no app; na calculadora de gasto diário, em como acelerar o metabolismo e em emagrecer depois dos 40.
  { id: 'iGStCDRk0Zg', tema: 'quantas calorias você gasta por dia: TMB e TDEE', short: true },
];

/**
 * Hash pequeno e estável de string. Não precisa ser criptográfico — precisa
 * ser o mesmo em toda máquina e em todo build, que é o que `Math.random()`
 * não seria.
 */
function hash(texto: string): number {
  let h = 0;
  for (let i = 0; i < texto.length; i += 1) {
    h = (h * 31 + texto.charCodeAt(i)) | 0;
  }
  return Math.abs(h);
}

/**
 * Escolhe o vídeo de uma página a partir de uma chave estável.
 *
 * Duas estratégias, e a ordem entre elas importa:
 *
 * 1. Se o slug está na lista de cobertura presencial — que é justamente onde
 *    os vídeos aparecem hoje —, o índice vem da POSIÇÃO nessa lista. Com 11
 *    cidades e 8 vídeos, isso garante que páginas vizinhas nunca caiam no
 *    mesmo vídeo, o que um hash não garante: na primeira tentativa, Tamboré e
 *    Alphaville colidiram.
 * 2. Fora dela, cai no hash do slug — estável, e bom o bastante quando não há
 *    vizinhança a preservar.
 */
export function videoDaPagina(chave: string): VideoMontinho {
  if (VIDEO_FIXO_POR_PAGINA[chave]) return VIDEO_FIXO_POR_PAGINA[chave];
  const posicao = (cidadesPresencial as readonly string[]).indexOf(chave);
  const indice = posicao >= 0 ? posicao : hash(chave);
  return VIDEOS_MONTINHO[indice % VIDEOS_MONTINHO.length];
}

/**
 * Shorts do canal colocados À MÃO em artigos, no parágrafo que respondem.
 * Ficam FORA do rodízio das páginas de cidade: entrar em VIDEOS_MONTINHO
 * mudaria o vídeo das 11 cidades de uma vez. Registro para não repetir o
 * mesmo vídeo em dois artigos.
 */
export const VIDEOS_MONTINHO_EM_ARTIGOS: Array<VideoMontinho & { artigo: string }> = [
  { id: 'Mck7dwGz0as', tema: 'o aparelho está ocupado? como substituir o exercício', short: true, artigo: '/musculacao/academia-lotada-como-treinar/' },
  { id: 'ul6Xi60zPeY', tema: 'usa Mounjaro? menos é mais, nada de treino gigante', short: true, artigo: '/mounjaro-e-treino/treino-para-quem-usa-mounjaro/' },
  { id: '9X968Kqa2-Y', tema: 'a balança mente? mesmo peso, outro corpo', short: true, artigo: '/emagrecimento/como-emagrecer-fazendo-musculacao/' },
  { id: 'RvapDDClRXY', tema: 'qual o melhor exercício para ganhar músculo?', short: true, artigo: '/musculacao/maquina-ou-peso-livre/' },
  { id: 'xb1sP6z01-s', tema: 'não sentiu o músculo? calma', short: true, artigo: '/musculacao/dor-muscular-pos-treino/' },
  { id: 'izMrrSoJGBw', tema: 'raiva e sangue no olho: disciplina', short: true, artigo: '/guias/como-nao-desistir-do-treino/' },
  { id: '7rN1Xwhp09g', tema: 'só um pedacinho: quanto as beliscadas atrapalham', short: true, artigo: '/emagrecimento/comer-fora-e-dieta/' },
];

/**
 * 15/10/2026, a pedido do Montinho (opção 2): onde um Short dele responde
 * ao assunto, ele SUBSTITUI o vídeo de referência de outro canal.
 *   recomposicao-corporal → 9X968Kqa2-Y · plato-de-emagrecimento → nEhysMtPPVw
 *   como-evitar-perda-de-massa-muscular → ul6Xi60zPeY · ozempic-e-treino → 0uzpCxIJkBg
 *   treino-abc-como-montar → yqPAYRVTe0E · hipertrofia-como-funciona → RvapDDClRXY
 *   vale-a-pena-contratar-personal-trainer → yndKE1GrnUQ · como-perder-barriga → Dg8Sbv6_V8w
 *   alcool-e-emagrecimento → 7rN1Xwhp09g
 * Os outros 87 artigos seguem com o vídeo de referência até haver Short do tema.
 */

/**
 * Vídeos que NÃO entram: G9WBAB3KUPM ("Existe mesmo o melhor exercício para
 * hipertrofia?") é a mesma gravação de RvapDDClRXY — usar os dois seria
 * repetir o vídeo no portal.
 */

/**
 * Vídeo escolhido pelo Montinho para uma página específica, por cima do
 * rodízio. Alphaville (15/10/2026); Aldeia da Serra, Barueri e Santana de
 * Parnaíba (16/10/2026): "Meu maior conselho para quem quer
 * emagrecer", a pedido do próprio Montinho.
 */
export const VIDEO_FIXO_POR_PAGINA: Record<string, VideoMontinho> = {
  'alphaville-sp': { id: 'Dg8Sbv6_V8w', tema: 'meu maior conselho para quem quer emagrecer', short: true },
  // 16/10/2026, também a pedido do Montinho:
  'aldeia-da-serra-sp': { id: 'Dg8Sbv6_V8w', tema: 'meu maior conselho para quem quer emagrecer', short: true },
  'barueri-sp': { id: 'Dg8Sbv6_V8w', tema: 'meu maior conselho para quem quer emagrecer', short: true },
  'santana-de-parnaiba-sp': { id: 'Dg8Sbv6_V8w', tema: 'meu maior conselho para quem quer emagrecer', short: true },
  'jandira-sp': { id: 'Dg8Sbv6_V8w', tema: 'meu maior conselho para quem quer emagrecer', short: true },
  'itapevi-sp': { id: 'Dg8Sbv6_V8w', tema: 'meu maior conselho para quem quer emagrecer', short: true },
  'carapicuiba-sp': { id: 'Dg8Sbv6_V8w', tema: 'meu maior conselho para quem quer emagrecer', short: true },
  'osasco-sp': { id: 'Dg8Sbv6_V8w', tema: 'meu maior conselho para quem quer emagrecer', short: true },
  'cotia-sp': { id: 'Dg8Sbv6_V8w', tema: 'meu maior conselho para quem quer emagrecer', short: true },
  'granja-viana-sp': { id: 'Dg8Sbv6_V8w', tema: 'meu maior conselho para quem quer emagrecer', short: true },
};

/**
 * O Short do app (DPAQDPVffCg) na parte do online das páginas de cidade.
 * Entra em levas, pela regra de lote do projeto: cada leva sobe a data das
 * suas cidades (mudança visível), e o ritmo deixa ler o efeito depois.
 *   22/10/2026 — região presencial (pedido do Renato): Barueri, Alphaville,
 *     Santana de Parnaíba, Aldeia da Serra.
 *   22/10/2026 — leva 1: as 10 cidades com mais impressões em 28 dias no GSC.
 */
export const VIDEO_APP_ID = 'DPAQDPVffCg';
export const CIDADES_COM_VIDEO_APP = new Set<string>([
  // região presencial
  'barueri-sp', 'alphaville-sp', 'santana-de-parnaiba-sp', 'aldeia-da-serra-sp',
  'tambore-sp', // 22/10/2026, pedido do Renato
  // leva 1 — 22/10/2026
  'joao-pessoa-pb', 'salvador-ba', 'brasilia-df', 'porto-alegre-rs', 'teresina-pi',
  'sao-paulo-sp', 'goiania-go', 'rio-de-janeiro-rj', 'florianopolis-sc', 'uberlandia-mg',
]);
