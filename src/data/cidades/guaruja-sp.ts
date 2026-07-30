import type { Cidade } from '../../lib/types';

export const cidade: Cidade = {
  slug: 'guaruja-sp',
  nome: 'Guarujá',
  uf: 'SP',
  estado: 'São Paulo',
  estadoSlug: 'sao-paulo',
  regiao: 'Sudeste',
  gentilico: 'guarujaense',
  tipo: 'cidade',

  populacao: 287634,
  populacaoAno: 2022,
  idhm: 0.789,
  idhmClasse: 'alto',
  altitudeM: 4,

  resumoEconomico:
    'Conhecida como a "Pérola do Atlântico", Guarujá é uma cidade-ilha litorânea com 27 praias e forte vocação turística e balneária. Abriga, na margem esquerda do Porto de Santos, parte do maior complexo portuário da América Latina, grande gerador de empregos. Turismo de verão e atividade portuária são os pilares da economia.',

  mercado:
    'A forte cultura de praia impulsiona o personal training ao ar livre: caminhada, corrida e treino funcional acontecem nos calçadões de Pitangueiras e da Enseada o ano todo. Há redes de academia na cidade, e o público sazonal de turistas amplia a demanda no verão.',

  bairrosNobres: ['Jardim Acapulco', 'Parque Enseada', 'Península', 'Iporanga'],
  bairrosPopulares: ['Vicente de Carvalho', 'Santa Rosa', 'Jardim Boa Esperança', 'Morrinhos'],

  parques: [
    {
      nome: 'Calçadão da Praia da Enseada',
      descricao:
        'Cerca de 5,6 km de praia com calçadão arborizado, ciclovia e amplo espaço para caminhada e corrida — o maior corredor de treino ao ar livre da cidade.',
    },
    {
      nome: 'Calçadão de Pitangueiras',
      descricao:
        'Cerca de 2 km de orla central, com barras para exercícios, ciclovia e bancos, ponto clássico de caminhada e corrida.',
    },
    {
      nome: 'Praia de Pernambuco',
      descricao:
        'Orla nobre junto ao Jardim Acapulco, com faixa de areia e área de caminhada mais tranquila.',
    },
  ],
  ciclovias:
    'A ciclovia margeia o calçadão das praias da Enseada e de Pitangueiras, integrando o pedal à orla — uma das estruturas mais usadas da Baixada Santista.',

  clima:
    'O clima é tropical litorâneo, quente e úmido o ano todo.',
  climaTreino:
    'O treino ao ar livre é viável em quase todas as estações, com cuidado redobrado com calor e umidade no verão e boa hidratação — as primeiras horas da manhã são as mais agradáveis.',

  mobilidade:
    'O acesso à região é pela balsa Santos–Guarujá e por rodovias, e a cidade integra o sistema da Baixada Santista; há projetos de melhoria de acesso, como o túnel imerso Santos–Guarujá, para reduzir o gargalo de mobilidade.',

  corridas: [
    {
      nome: 'Meia Maratona Heróis do 21',
      descricao:
        'Prova com largada na Praia da Enseada, uma das mais tradicionais da cidade.',
    },
    {
      nome: 'Circuito Mares (Guarujá)',
      descricao:
        'Etapas que combinam natação, corrida e aquathlon, aproveitando o cenário litorâneo.',
    },
  ],
  culturaEsportiva:
    'Guarujá tem cultura praiana forte — surfe, beach tennis, vôlei de praia, corrida e caminhada no calçadão —, com esportes aquáticos consolidados na Enseada. A vida ativa acontece, sobretudo, à beira-mar.',
  academias:
    'A oferta de academias acompanha o perfil litorâneo da cidade, complementada pela enorme estrutura ao ar livre dos calçadões da Enseada e de Pitangueiras.',

  destaquesFitness: [
    'Calçadões da Enseada e de Pitangueiras como academia ao ar livre natural.',
    'Surfe e esportes de praia (Enseada com cerca de 6 km).',
    'Clima litorâneo que permite treino externo o ano inteiro.',
    'Público sazonal de turistas que amplia a demanda no verão.',
  ],

  precos: {
    avulsaMin: 80,
    avulsaMax: 180,
    mensalMin: 400,
    mensalMax: 1050,
    onlineMin: 180,
    onlineMax: 460,
  },

  conclusao:
    'Cidade-ilha de praias famosas, Guarujá é feita para treinar ao ar livre. Um personal trainer ajuda a transformar os calçadões da Enseada e de Pitangueiras em um plano consistente — aproveitando o cenário e respeitando o calor litorâneo.',

  vizinhas: ['santos-sp', 'sao-vicente-sp', 'praia-grande-sp'],

  fontes: [
    { nome: 'IBGE Cidades — Guarujá', url: 'https://cidades.ibge.gov.br/brasil/sp/guaruja/panorama' },
    { nome: 'Prefeitura de Guarujá', url: 'https://www.guaruja.sp.gov.br/' },
    { nome: 'Atlas Brasil — IDHM', url: 'https://www.atlasbrasil.org.br/' },
  ],
  atualizadoEm: '2026-07-30',
  capaArte: {
    src: '/capas-cidade/guaruja-sp.webp',
    w: 1200,
    h: 849,
    alt:
      'Personal trainer no Guarujá (SP) em arte que une treino em dupla no calçadão de pedras portuguesas e a orla real da cidade, com a curva de prédios à beira-mar e os coqueiros do litoral paulista — Personal por Perto',
    legenda:
      'Treino personalizado no Guarujá: um plano feito para o seu corpo e a sua rotina, com acompanhamento profissional na cidade e região.',
  },
};
