import type { Estado } from '../lib/types';

/**
 * Estados (hubs regionais). Arquitetura preparada para os 26 estados + DF.
 * Por ora, populados os estados com cidades publicadas.
 */
export const estados: Estado[] = [
  {
    slug: 'sao-paulo',
    nome: 'São Paulo',
    uf: 'SP',
    regiao: 'Sudeste',
    capital: 'São Paulo',
    descricao:
      'O estado mais populoso e economicamente forte do Brasil concentra o mercado de personal training mais maduro do país, das grandes redes de academia da capital aos polos corporativos de Alphaville e ao Vale do Silício brasileiro, em Campinas.',
    atualizadoEm: '2026-06-28',
  },
  {
    slug: 'parana',
    nome: 'Paraná',
    uf: 'PR',
    regiao: 'Sul',
    capital: 'Curitiba',
    descricao:
      'Referência nacional em planejamento urbano e qualidade de vida, o Paraná tem na capital, Curitiba, uma das culturas de parques e corrida de rua mais consolidadas do Sul do Brasil — com o clima mais frio entre as capitais brasileiras como fator distintivo do treino ao ar livre.',
    atualizadoEm: '2026-06-28',
  },
];
