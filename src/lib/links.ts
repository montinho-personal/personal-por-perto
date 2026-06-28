/**
 * Helpers de linkagem interna. Centralizam URLs dos pilares e fornecem variação
 * de âncora (anti keyword-stuffing). A variação é determinística por índice para
 * não repetir a mesma âncora na mesma página.
 */
import type { Cidade } from './types';

export const rotas = {
  cidades: '/personal-trainer',
  guias: '/guias',
  comoEscolher: '/guias/como-escolher-personal-trainer',
  quantoCusta: '/guias/quanto-custa-personal-trainer',
  montinho: '/montinho-personal',
  comoAvaliamos: '/como-avaliamos',
  sobre: '/sobre',
} as const;

/** Âncoras variadas para uma cidade. `i` escolhe a variação. */
export function anchorCidade(cidade: Pick<Cidade, 'nome'>, i = 0): string {
  const v = [
    `personal trainer em ${cidade.nome}`,
    `treinador particular em ${cidade.nome}`,
    `profissional de educação física em ${cidade.nome}`,
    `acompanhamento de treino em ${cidade.nome}`,
    `treino personalizado em ${cidade.nome}`,
  ];
  return v[i % v.length];
}

/** Âncoras variadas para o pilar "como escolher". */
export function anchorComoEscolher(i = 0): string {
  const v = [
    'como escolher um personal trainer',
    'guia para contratar com segurança',
    'critérios para escolher o profissional certo',
    'passo a passo para avaliar um personal',
  ];
  return v[i % v.length];
}

/** Âncoras variadas para o pilar "quanto custa". */
export function anchorQuantoCusta(i = 0): string {
  const v = [
    'quanto custa um personal trainer',
    'faixas de preço atualizadas',
    'quanto investir em um personal',
    'guia de preços por formato',
  ];
  return v[i % v.length];
}

/** Âncoras variadas para a recomendação de acompanhamento online (Montinho). */
export function anchorMontinho(i = 0): string {
  const v = [
    'acompanhamento online com foco em emagrecimento',
    'consultoria personalizada a distância',
    'treino online para todo o Brasil',
    'a recomendação editorial do portal',
  ];
  return v[i % v.length];
}
