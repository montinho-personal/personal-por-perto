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
  const posicao = (cidadesPresencial as readonly string[]).indexOf(chave);
  const indice = posicao >= 0 ? posicao : hash(chave);
  return VIDEOS_MONTINHO[indice % VIDEOS_MONTINHO.length];
}
