import type { Cidade } from '../../lib/types';

export const cidade: Cidade = {
  slug: 'santa-maria-rs',
  nome: 'Santa Maria',
  uf: 'RS',
  estado: 'Rio Grande do Sul',
  estadoSlug: 'rio-grande-do-sul',
  regiao: 'Sul',
  gentilico: 'santa-mariense',
  tipo: 'cidade',

  populacao: 271735,
  populacaoAno: 2022,
  idhm: 0.784,
  idhmClasse: 'alto',
  altitudeM: 153,

  resumoEconomico:
    'Conhecida como "Cidade Universitária", Santa Maria é sede da UFSM e fica no centro geográfico do Rio Grande do Sul. A economia se baseia em comércio, serviços, educação e em uma forte presença militar, sendo polo de uma relevante região agrícola do centro do estado. A grande população estudantil dá energia ao mercado fitness.',

  mercado:
    'A grande população universitária (a UFSM tem cerca de 28 mil alunos) impulsiona academias e estúdios, com oferta consolidada e cobertura de plataformas de benefícios. A prefeitura disponibiliza academias públicas gratuitas, ampliando o acesso ao treino.',

  bairrosNobres: ['Centro', 'Nossa Senhora das Dores', 'Nossa Senhora Medianeira', 'Camobi'],
  bairrosPopulares: ['Patronato', 'Juscelino Kubitschek', 'Urlândia', 'Itararé'],

  parques: [
    {
      nome: 'Parque Itaimbé',
      descricao:
        'Área verde linear de cerca de 1.500 m, aberta 24 horas, com quadras esportivas, playground e pista de caminhada — o principal espaço de treino do centro.',
    },
    {
      nome: 'Campus da UFSM (Camobi)',
      descricao:
        'Extensas áreas verdes com pistas de caminhada e ciclismo, muito usadas por estudantes e moradores.',
    },
    {
      nome: 'Parque do Santuário',
      descricao:
        'Junto à Basílica de Nossa Senhora Medianeira, é uma ampla área verde para caminhada e lazer ao ar livre.',
    },
  ],
  ciclovias:
    'O campus da UFSM tem pistas de ciclismo; a extensão da rede cicloviária urbana ainda não é divulgada em fonte oficial.',

  clima:
    'O clima é subtropical, com invernos frios típicos do Rio Grande do Sul.',
  climaTreino:
    'O frio do inverno favorece o treino indoor; primavera e outono oferecem ótimas condições ao ar livre. O Parque Itaimbé, aberto 24h, ajuda a manter a constância.',

  mobilidade:
    'Importante entroncamento rodoviário no centro do estado, Santa Maria é cruzada pelas BR-158 e BR-287, com aeroporto na região de Camobi. Não há sistema de trens urbanos.',

  corridas: [
    {
      nome: 'Maratona Internacional de Santa Maria',
      descricao:
        'A principal prova da cidade, com edição anual que reúne corredores de toda a região.',
    },
    {
      nome: 'Santa Maria Night Run',
      descricao:
        'Corrida noturna de 5 km até o portão da UFSM, promovida em parceria com o Sesc e a prefeitura.',
    },
  ],
  culturaEsportiva:
    'Santa Maria tem um calendário robusto de corridas de rua (mais de uma dezena de provas por ano) e uma cultura esportiva amplificada pelo perfil universitário e militar da cidade.',
  academias:
    'A oferta reúne academias e estúdios voltados ao grande público estudantil, além das academias públicas gratuitas da prefeitura, com o Parque Itaimbé e o campus da UFSM como grandes espaços ao ar livre.',

  academiasProximas: [
    { nome: 'Smart Fit Santa Maria', detalhe: 'no Shopping Praça Nova, na Urlândia' },
  ],

  destaquesFitness: [
    'Parque Itaimbé: pista de caminhada central aberta 24 horas.',
    'Campus da UFSM: pistas de caminhada e ciclismo e grande público fitness estudantil.',
    'Academias públicas gratuitas oferecidas pela prefeitura.',
    'Calendário anual forte de corridas (Maratona Internacional e Night Run).',
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
    'Cidade universitária no coração do RS, Santa Maria tem um público jovem e ativo e boa estrutura pública para treinar — do Parque Itaimbé ao campus da UFSM. Um personal trainer ajuda a manter a constância o ano todo, ajustando o treino ao frio do inverno gaúcho.',

  vizinhas: ['porto-alegre-rs', 'caxias-do-sul-rs', 'pelotas-rs'],

  capaArte: {
    src: '/capas-cidade/santa-maria-rs.webp',
    w: 1200,
    h: 900,
    alt: 'Personal trainer em Santa Maria (RS) em arte que reúne a Vila Belga, a Gare da estação ferroviária, a catedral do Centro e o campus da UFSM em Camobi — Personal por Perto',
    legenda: 'Treino personalizado em Santa Maria: um plano feito para o seu corpo e a sua rotina, do Centro a Camobi, com acompanhamento profissional na cidade e região.',
  },
  fontes: [
    { nome: 'IBGE Cidades — Santa Maria', url: 'https://cidades.ibge.gov.br/brasil/rs/santa-maria/panorama' },
    { nome: 'Prefeitura de Santa Maria', url: 'https://www.santamaria.rs.gov.br/' },
    { nome: 'Atlas Brasil — IDHM', url: 'https://www.atlasbrasil.org.br/' },
  ],
  atualizadoEm: '2026-08-27',
};
