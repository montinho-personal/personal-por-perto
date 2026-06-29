import type { Cidade } from '../../lib/types';

export const cidade: Cidade = {
  slug: 'feira-de-santana-ba',
  nome: 'Feira de Santana',
  uf: 'BA',
  estado: 'Bahia',
  estadoSlug: 'bahia',
  regiao: 'Nordeste',
  gentilico: 'feirense',
  tipo: 'cidade',

  populacao: 616279,
  populacaoAno: 2022,
  idhm: 0.712,
  idhmClasse: 'alto',
  altitudeM: 234,

  resumoEconomico:
    'Segunda cidade mais populosa da Bahia, Feira de Santana é o maior entroncamento rodoviário do Norte/Nordeste, o que sustenta um forte setor de comércio, serviços e logística. Tem parque industrial relevante (o Centro Industrial do Subaé) e é um polo regional de saúde, educação e atacado para todo o interior baiano.',

  mercado:
    'A cidade tem boa densidade de academias — redes presentes na Bahia e estúdios de bairro nos centros de classe média (Santa Mônica, Kalilândia, Centro) — e uma cultura crescente de corrida de rua, treino funcional e academias ao ar livre em praças e parques. Como polo regional, atende também a demanda de cidades vizinhas.',

  bairrosNobres: ['Santa Mônica', 'SIM', 'Muchila', 'Capuchinhos'],
  bairrosPopulares: ['Cidade Nova', 'Tomba', 'Sobradinho', 'George Américo'],

  parques: [
    {
      nome: 'Parque da Lagoa (Erivaldo Cerqueira)',
      descricao:
        'Com cerca de 24 mil m², tem pista de cooper, ciclovia, academia da saúde gratuita e áreas de ginástica, com vigilância da Guarda Municipal — espaço seguro e completo para treino.',
    },
    {
      nome: 'Parque da Lagoa Grande (Anel de Lagoas)',
      descricao:
        'Às margens da Avenida Eduardo Fróes da Motta, tem pista de caminhada e ciclovia de cerca de 2,3 km no entorno, com academias ao ar livre.',
    },
    {
      nome: 'Parque da Cidade',
      descricao:
        'Área verde tradicional com pista de caminhada e corrida e estrutura de lazer — espaço consagrado para a atividade física na cidade.',
    },
  ],
  ciclovias:
    'Há ciclovias e ciclofaixas em vias e parques, com destaque para o trecho de cerca de 2,3 km no Anel de Lagoas, integrando lazer e mobilidade.',

  clima:
    'O clima é de transição entre o semiárido e o tropical, quente o ano todo, com chuvas concentradas em alguns meses.',
  climaTreino:
    'O treino ao ar livre rende mais no início da manhã e no fim da tarde, com hidratação reforçada — os parques arborizados ajudam nos dias mais quentes.',

  mobilidade:
    'Como maior entroncamento rodoviário do Norte/Nordeste, Feira de Santana fica no cruzamento da BR-116, BR-101 e BR-324 (esta ligando a Salvador, a cerca de 110 km), com transporte por ônibus e Anel de Contorno.',

  corridas: [
    {
      nome: 'Meia Maratona de Feira de Santana',
      descricao:
        'Prova tradicional da cidade, com edições anuais que reúnem corredores de toda a região.',
    },
    {
      nome: 'Feira Night Run',
      descricao:
        'Corrida de rua noturna popular, parte de um calendário esportivo em crescimento.',
    },
  ],
  culturaEsportiva:
    'Feira de Santana tem forte tradição no futebol (com o Estádio Joia da Princesa) e uma cena ativa de corrida de rua e ciclismo, com uso intenso dos parques e das academias ao ar livre — um polo esportivo para o interior baiano.',
  academias:
    'A oferta de academias e estúdios é ampla para o porte da cidade e atende também a região, concentrada nos bairros de classe média, e bem complementada pelas academias da saúde gratuitas dos parques.',

  destaquesFitness: [
    'Polo regional com ampla oferta de academias e estúdios para o interior da Bahia.',
    'Parques com academias da saúde gratuitas (Parque da Lagoa, Anel de Lagoas).',
    'Calendário consolidado de corridas de rua (Meia Maratona, Night Run).',
    'Clima quente que exige planejamento de horário e hidratação no treino ao ar livre.',
  ],

  precos: {
    avulsaMin: 60,
    avulsaMax: 140,
    mensalMin: 300,
    mensalMax: 820,
    onlineMin: 150,
    onlineMax: 390,
  },

  conclusao:
    'Maior entroncamento do Nordeste e polo regional de serviços, Feira de Santana tem boa estrutura pública e privada para treinar — dos parques com academia da saúde às redes de academia. Um personal trainer ajuda a aproveitar tudo isso com método, respeitando o clima quente e o seu objetivo.',

  vizinhas: ['salvador-ba', 'aracaju-se'],

  fontes: [
    { nome: 'IBGE Cidades — Feira de Santana', url: 'https://cidades.ibge.gov.br/brasil/ba/feira-de-santana/panorama' },
    { nome: 'Prefeitura de Feira de Santana', url: 'https://www.feiradesantana.ba.gov.br/' },
    { nome: 'Atlas Brasil — IDHM', url: 'https://www.atlasbrasil.org.br/' },
  ],
  atualizadoEm: '2026-06-29',
};
