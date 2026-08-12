import type { Cidade } from '../../lib/types';

export const cidade: Cidade = {
  slug: 'juazeiro-do-norte-ce',
  nome: 'Juazeiro do Norte',
  uf: 'CE',
  estado: 'Ceará',
  estadoSlug: 'ceara',
  regiao: 'Nordeste',
  gentilico: 'juazeirense',
  tipo: 'cidade',

  populacao: 286120,
  populacaoAno: 2022,
  idhm: 0.694,
  idhmClasse: 'médio',
  altitudeM: 377,

  resumoEconomico:
    'Maior cidade do sul do Ceará e da Região do Cariri (na tríade Juazeiro–Crato–Barbalha), Juazeiro do Norte é polo de comércio, serviços, calçados e confecções e, sobretudo, do turismo religioso ligado a Padre Cícero, que atrai cerca de 2,5 milhões de romeiros por ano.',

  mercado:
    'Centro econômico do Cariri, a cidade concentra a maior oferta de academias e estúdios da região, com público regional amplo. A Colina do Horto é um diferencial natural para treino de subida e trekking.',

  bairrosNobres: ['Lagoa Seca', 'Triângulo', 'Franciscanos', 'São Miguel'],
  bairrosPopulares: ['Frei Damião', 'João Cabral', 'Pirajá', 'Romeirão'],

  parques: [
    {
      nome: 'Colina do Horto / APA do Horto do Padre Cícero',
      descricao:
        'Trilhas e subida (os Caminhos do Horto) até a estátua de Padre Cícero, com teleférico desde 2022 — ótimo para trekking e treino de subida.',
    },
    {
      nome: 'Parque de Eventos Padre Cícero',
      descricao:
        'Grande espaço público usado para eventos e caminhadas.',
    },
    {
      nome: 'Praças e calçadões centrais',
      descricao:
        'Áreas públicas e praças de romeiros, usadas para caminhada e treino ao ar livre no dia a dia.',
    },
  ],
  ciclovias:
    'A existência e a extensão de uma malha cicloviária estruturada ainda não são divulgadas em fonte oficial.',

  clima:
    'O clima é quente e seco na maior parte do ano (Cariri), com chuvas no primeiro semestre e médias anuais elevadas.',
  climaTreino:
    'O treino ao ar livre é preferível cedo de manhã ou ao entardecer, com hidratação reforçada por causa do calor.',

  mobilidade:
    'Juazeiro do Norte fica no cruzamento das BR-116, BR-122 e CE-292, e conta com o Aeroporto Regional do Cariri, o principal do interior cearense.',

  corridas: [
    {
      nome: 'Meia Maratona Padre Cícero',
      descricao:
        'Reúne mais de 2.500 atletas, com percursos de 5 km, 10 km e 21 km, integrando Juazeiro e Crato.',
    },
    {
      nome: 'Circuito Cronos Cariri',
      descricao:
        'Provas locais regulares de corrida e ciclismo organizadas para a região do Cariri.',
    },
  ],
  culturaEsportiva:
    'A cena de corrida de rua é aquecida no Cariri, com calendário próprio; a cidade tem forte identidade futebolística (Icasa) e ciclismo regional, além do fluxo de romeiros que caminham até o Horto.',
  academias:
    'Como polo regional do Cariri, concentra a maior oferta de academias e eventos esportivos da região, complementada pela Colina do Horto e pelas praças centrais.',

  destaquesFitness: [
    'Colina do Horto como desafio natural de subida e trekking.',
    'Polo regional do Cariri que concentra academias e eventos.',
    'Calendário de corridas robusto (Cronos Cariri, Meia Maratona Padre Cícero).',
    'Turismo religioso que movimenta caminhadas e romarias a pé.',
  ],

  precos: {
    avulsaMin: 55,
    avulsaMax: 135,
    mensalMin: 280,
    mensalMax: 760,
    onlineMin: 150,
    onlineMax: 390,
  },

  conclusao:
    'Coração do Cariri e da fé nordestina, Juazeiro do Norte une a subida do Horto a uma cena de corrida ativa. Um personal trainer ajuda a aproveitar os Caminhos do Horto e as provas locais com método, ajustando horários e hidratação ao calor do sertão.',

  vizinhas: ['fortaleza-ce', 'petrolina-pe'],

  fontes: [
    { nome: 'IBGE Cidades — Juazeiro do Norte', url: 'https://cidades.ibge.gov.br/brasil/ce/juazeiro-do-norte/panorama' },
    { nome: 'Prefeitura de Juazeiro do Norte', url: 'https://juazeirodonorte.ce.gov.br/' },
    { nome: 'Atlas Brasil — IDHM', url: 'https://www.atlasbrasil.org.br/' },
  ],
  atualizadoEm: '2026-08-12',

  capaArte: {
    src: '/capas-cidade/juazeiro-do-norte-ce.webp',
    w: 1200,
    h: 900,
    alt:
      'Personal trainer em Juazeiro do Norte (CE) em arte que reúne agachamento e levantamento terra, a estátua do Padre Cícero na Colina do Horto, o Aeroporto Orlando Bezerra de Menezes e os bairros Centro, Salesianos, Lagoa Seca e Pirajá — Personal por Perto',
    legenda:
      'Treino personalizado em Juazeiro do Norte: um plano feito para o seu corpo e a sua rotina, com acompanhamento profissional na cidade e região.',
  },
};
