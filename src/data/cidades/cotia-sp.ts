import type { Cidade } from '../../lib/types';

export const cidade: Cidade = {
  slug: 'cotia-sp',
  nome: 'Cotia',
  uf: 'SP',
  estado: 'São Paulo',
  estadoSlug: 'sao-paulo',
  regiao: 'Sudeste',
  gentilico: 'cotiano',
  tipo: 'cidade',

  populacao: 274413,
  populacaoAno: 2022,
  idhm: 0.780,
  idhmClasse: 'alto',
  altitudeM: 853,

  resumoEconomico:
    'Integrante da Região Metropolitana de São Paulo, na zona oeste, Cotia tem economia industrial e logística robusta — foi eleita uma das melhores cidades para fazer negócios na indústria. A região da Granja Viana concentra boa parte da indústria e multinacionais, convivendo com um polo de alto padrão de varejo de luxo, shoppings e condomínios fechados.',

  mercado:
    'A Granja Viana puxa um mercado premium (estúdios boutique, personal trainer e condomínios com academia), enquanto o restante de Cotia tem academias de bairro de público mais amplo.',

  bairrosNobres: ['Granja Viana', 'Jardim da Glória', 'Parque Bahia', 'San Diego'],
  bairrosPopulares: ['Caucaia do Alto', 'Jardim Japão', 'Atalaia', 'Jardim Nomura'],

  parques: [
    {
      nome: 'Parque Teresa Maia',
      descricao:
        'Na Granja Viana, com cerca de 23 mil m²: academia ao ar livre, trilha, playground, lago e nascente, iluminado e com horário estendido.',
    },
    {
      nome: 'Parque Cemucam',
      descricao:
        'Grande área verde para caminhada e atividade ao ar livre.',
    },
    {
      nome: 'Praças e vias da Granja Viana',
      descricao:
        'O bairro de alto padrão tem ruas arborizadas e praças usadas para corrida e caminhada.',
    },
  ],
  ciclovias:
    'Está em implantação a ciclovia da Raposo Tavares (projeto Nova Raposo), com previsão de dezenas de quilômetros ao longo da rodovia; a malha urbana consolidada ainda não é divulgada.',

  clima:
    'O clima é tropical de altitude, ameno (planalto da zona oeste paulistana), com bastante área verde.',
  climaTreino:
    'O clima é confortável para o treino ao ar livre o ano todo, com atenção às manhãs frias de inverno e às chuvas de fim de tarde no verão.',

  mobilidade:
    'Cotia é servida pelas rodovias Raposo Tavares (SP-270) e Castello Branco (SP-280), a cerca de 30 a 40 minutos da capital.',

  corridas: [
    {
      nome: 'Track&Field Experience Running — Granja Viana',
      descricao:
        'Corrida de rua com percursos de 5 km e 10 km, com largada na Granja Viana.',
    },
    {
      nome: 'CEDIT Run (Movimente-se Cotia)',
      descricao:
        'Corrida de rua gratuita, com largada no CEDIT.',
    },
  ],
  culturaEsportiva:
    'A Granja Viana tem cultura ativa de corrida de rua e bem-estar (feiras, caminhadas e eventos), e o público de alto padrão valoriza wellness e treino ao ar livre.',
  academias:
    'A oferta combina um nicho premium na Granja Viana (estúdios e condomínios de alto padrão) com academias de bairro no restante da cidade, e parques como o Teresa Maia para o outdoor.',

  destaquesFitness: [
    'Granja Viana como nicho premium para personal trainers (estúdios e condomínios de alto padrão).',
    'Parque Teresa Maia com academia ao ar livre e trilha — ponto forte de treino outdoor.',
    'Calendário de corridas de rua consolidado (Track&Field, CEDIT Run).',
    'Clima ameno de planalto, favorável à atividade outdoor o ano todo.',
  ],

  precos: {
    avulsaMin: 80,
    avulsaMax: 190,
    mensalMin: 400,
    mensalMax: 1100,
    onlineMin: 190,
    onlineMax: 470,
  },

  conclusao:
    'Polo industrial e de alto padrão na Grande SP, Cotia tem na Granja Viana um mercado premium e o Parque Teresa Maia. Um personal trainer encontra aqui forte demanda por treino personalizado e wellness, num clima ameno de planalto.',

  vizinhas: ['sao-paulo-sp', 'osasco-sp'],

  fontes: [
    { nome: 'IBGE Cidades — Cotia', url: 'https://cidades.ibge.gov.br/brasil/sp/cotia/panorama' },
    { nome: 'Prefeitura de Cotia', url: 'https://www.cotia.sp.gov.br/' },
    { nome: 'Atlas Brasil — IDHM', url: 'https://www.atlasbrasil.org.br/' },
  ],
  atualizadoEm: '2026-06-29',
};
