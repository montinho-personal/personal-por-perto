import type { Cidade } from '../../lib/types';

export const cidade: Cidade = {
  slug: 'lavras-mg',
  nome: 'Lavras',
  uf: 'MG',
  estado: 'Minas Gerais',
  estadoSlug: 'minas-gerais',
  regiao: 'Sudeste',
  gentilico: 'lavrense',
  tipo: 'cidade',

  populacao: 104761,
  populacaoAno: 2022,
  idhm: 0.782,
  idhmClasse: 'alto',
  altitudeM: 919,

  resumoEconomico:
    'No sul de Minas, Lavras é forte polo universitário com a UFLA, referência nacional em ciências agrárias, além de polo regional de saúde. A economia combina educação, serviços de saúde e a cafeicultura e o agronegócio da região.',

  mercado:
    'A grande população universitária e o perfil de qualidade de vida sustentam ampla rede de academias e estúdios, com academias locais consolidadas e cobertura de planos corporativos.',

  bairrosNobres: ['Jardim Glória', 'Centenário', 'Centro', 'Nova Lavras'],
  bairrosPopulares: ['Jardim Floresta', 'Vila Esperança', 'Bela Vista', 'Serra Verde'],

  parques: [
    {
      nome: 'Campus da UFLA',
      descricao:
        'As avenidas Norte e Sul são liberadas para esporte em fins de semana e feriados, virando referência para caminhada, corrida e ciclismo.',
    },
    {
      nome: 'Parque Ecológico Quedas do Rio Bonito',
      descricao:
        'Cerca de 235 hectares de Mata Atlântica aberto ao público, com trilhas e caminhada.',
    },
    {
      nome: 'Praças centrais',
      descricao:
        'Praças com uso esportivo no dia a dia dos moradores.',
    },
  ],
  ciclovias:
    'O campus da UFLA funciona como espaço de ciclismo nos fins de semana; uma ciclovia formal ainda não é divulgada em fonte oficial.',

  clima:
    'O clima é de sul de Minas, ameno, com relevo acidentado e altitudes entre 850 e 950 m — os percursos de corrida tendem a ter subidas constantes.',
  climaTreino:
    'O treino em altitude e terreno ondulado favorece o condicionamento de força e resistência, num clima agradável boa parte do ano.',

  mobilidade:
    'O acesso se dá pela BR-265 e pela MG-335.',

  corridas: [
    {
      nome: 'Circuito Lavrense de Corridas de Rua',
      descricao:
        'Calendário oficial municipal de provas ao longo do ano.',
    },
    {
      nome: 'Corrida Gammon UFLA',
      descricao:
        'Corrida de rua organizada pela universidade, citada como a mais tradicional da cidade.',
    },
  ],
  culturaEsportiva:
    'Cidade universitária, Lavras tem forte cultura de corrida e ciclismo, com o campus da UFLA como polo agregador e um circuito municipal de calendário ativo.',
  academias:
    'A oferta reúne academias e estúdios, com grande público universitário (UFLA), complementada pelo campus e pelo Parque Ecológico Quedas do Rio Bonito.',

  destaquesFitness: [
    'Maior IDHM dos polos universitários do sul de Minas (0,782).',
    'Campus da UFLA como "parque urbano" para corrida e ciclismo nos fins de semana.',
    'Circuito Lavrense e Corrida Gammon UFLA — calendário robusto.',
    'Altitude (cerca de 920 m) e relevo ondulado, bons para treino de resistência.',
  ],

  precos: {
    avulsaMin: 65,
    avulsaMax: 155,
    mensalMin: 340,
    mensalMax: 920,
    onlineMin: 170,
    onlineMax: 430,
  },

  conclusao:
    'Cidade universitária do sul de Minas, Lavras une a UFLA, clima de altitude e relevo desafiador. Um personal trainer ajuda a aproveitar o campus e as trilhas com método, num cenário ideal para treino de resistência o ano todo.',

  vizinhas: ['varginha-mg', 'pocos-de-caldas-mg'],

  fontes: [
    { nome: 'IBGE Cidades — Lavras', url: 'https://cidades.ibge.gov.br/brasil/mg/lavras/panorama' },
    { nome: 'Prefeitura de Lavras', url: 'https://www.lavras.mg.gov.br/' },
    { nome: 'Atlas Brasil — IDHM', url: 'https://www.atlasbrasil.org.br/' },
  ],
  atualizadoEm: '2026-06-29',
};
