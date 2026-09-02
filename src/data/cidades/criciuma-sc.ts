import type { Cidade } from '../../lib/types';

export const cidade: Cidade = {
  slug: 'criciuma-sc',
  nome: 'Criciúma',
  uf: 'SC',
  estado: 'Santa Catarina',
  estadoSlug: 'santa-catarina',
  regiao: 'Sul',
  gentilico: 'criciumense',
  tipo: 'cidade',

  populacao: 214493,
  populacaoAno: 2022,
  idhm: 0.788,
  idhmClasse: 'alto',
  altitudeM: 46,

  resumoEconomico:
    'No extremo sul de Santa Catarina, Criciúma cresceu como "Capital do Carvão" e se reinventou como polo de revestimentos cerâmicos (que competem com Itália e Espanha), descartáveis plásticos, confecções e metalmecânica. Com PIB acima de R$ 10 bilhões e bom padrão de renda, tem forte cultura esportiva.',

  mercado:
    'O bom padrão de renda e a forte cultura esportiva sustentam academias, assessorias de corrida e estúdios. Os espaços públicos equipados, como o Parque Centenário, complementam a oferta privada.',

  bairrosNobres: ['Pio Corrêa', 'Próspera', 'Comerciário', 'Michel'],
  bairrosPopulares: ['São José', 'Pinheirinho', 'Progresso', 'Boa Vista'],

  parques: [
    {
      nome: 'Parque Centenário',
      descricao:
        'Tem pista de caminhada, ciclovia interna, academia ao ar livre e quadras — o principal espaço público de treino da cidade.',
    },
    {
      nome: 'Praça do Congresso',
      descricao:
        'No centro, revitalizada, tem academia de rua, pista de caminhada e lago.',
    },
    {
      nome: 'Parque das Nações Cincinato Naspolini',
      descricao:
        'Grande área de lazer, ponto de largada de corridas e de atividades ao ar livre.',
    },
  ],
  ciclovias:
    'Há ciclovia interna no Parque Centenário e trechos urbanos; a extensão total ainda não é divulgada em fonte oficial.',

  clima:
    'O clima é subtropical úmido, com verões quentes (cerca de 26 °C a 27 °C) e invernos frios (perto de 10 °C).',
  climaTreino:
    'O inverno é confortável para treino ao ar livre; no verão, vale priorizar a manhã ou o fim de tarde e reforçar a hidratação.',

  mobilidade:
    'A BR-101 passa a leste da cidade, e o acesso principal é pela SC-443, ligando Criciúma ao litoral e ao eixo norte-sul do estado.',

  corridas: [
    {
      nome: 'Maratona e Meia Maratona de Criciúma',
      descricao:
        'Com provas de 42 km, 21 km, 10 km, 5 km e kids, é o grande evento de corrida da cidade.',
    },
    {
      nome: 'Ultra 24 Horas de Criciúma',
      descricao:
        'Desafio de 24 horas (individual, duplas ou equipes) realizado no Parque das Nações.',
    },
  ],
  culturaEsportiva:
    'O Criciúma EC (o "Tigre"), campeão da Copa do Brasil de 1991, é uma paixão local. Essa cultura esportiva se reflete em um calendário ativo de corridas — incluindo maratona e ultra de 24 horas — e no uso intenso dos parques.',
  academias:
    'A oferta reúne academias, estúdios e assessorias de corrida (como a Criciúma Runners), sustentadas pelo bom padrão de renda e bem complementadas pelos espaços públicos equipados.',

  destaquesFitness: [
    'Cidade de IDHM alto, com público que valoriza saúde.',
    'Espaços públicos equipados (Parque Centenário e Praça do Congresso).',
    'Calendário ativo de corridas (maratona e ultra de 24 horas).',
    'Inverno ameno favorece o treino ao ar livre; o verão exige ajuste de horário.',
  ],

  precos: {
    avulsaMin: 70,
    avulsaMax: 160,
    mensalMin: 350,
    mensalMax: 950,
    onlineMin: 170,
    onlineMax: 430,
  },

  conclusao:
    'Cidade de alto padrão e forte cultura esportiva no sul de SC, Criciúma tem bons espaços públicos e um calendário de corridas robusto. Um personal trainer ajuda a aproveitar o Parque Centenário e a preparar provas — da primeira corrida ao ultra de 24 horas.',

  vizinhas: ['florianopolis-sc', 'itajai-sc', 'chapeco-sc'],

  capaArte: {
    src: '/capas-cidade/criciuma-sc.webp',
    w: 1200,
    h: 1200,
    alt: 'Personal trainer em Criciúma (SC) em arte com a catedral e o centro da cidade, com o treino em primeiro plano — Personal por Perto',
    legenda: 'Treino personalizado em Criciúma: força, disciplina e resultado no sul catarinense.',
  },
  fontes: [
    { nome: 'IBGE Cidades — Criciúma', url: 'https://cidades.ibge.gov.br/brasil/sc/criciuma/panorama' },
    { nome: 'Prefeitura de Criciúma', url: 'https://www.criciuma.sc.gov.br/' },
    { nome: 'Atlas Brasil — IDHM', url: 'https://www.atlasbrasil.org.br/' },
  ],
  atualizadoEm: '2026-09-01',
};
