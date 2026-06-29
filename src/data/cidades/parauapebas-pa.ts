import type { Cidade } from '../../lib/types';

export const cidade: Cidade = {
  slug: 'parauapebas-pa',
  nome: 'Parauapebas',
  uf: 'PA',
  estado: 'Pará',
  estadoSlug: 'para',
  regiao: 'Norte',
  gentilico: 'parauapebense',
  tipo: 'cidade',

  populacao: 267836,
  populacaoAno: 2022,
  idhm: 0.715,
  idhmClasse: 'alto',
  altitudeM: 18,

  resumoEconomico:
    'No sudeste do Pará, Parauapebas é sede da maior mineração de ferro do mundo — o Complexo de Carajás, da Vale. A economia é movida pela mineração, com uma das maiores rendas per capita do Norte e um crescimento populacional acelerado que já a fez ultrapassar Marabá.',

  mercado:
    'O alto poder aquisitivo ligado à mineração e a população jovem sustentam um mercado fitness aquecido, com um boom recente de corridas de rua consolidando a cidade como referência esportiva no Norte.',

  bairrosNobres: ['Cidade Nova', 'Rio Verde', 'Beira Rio', 'Parque dos Carajás'],
  bairrosPopulares: ['Primavera', 'União', 'Liberdade I', 'Novo Horizonte'],

  parques: [
    {
      nome: 'Complexo Turístico de Parauapebas',
      descricao:
        'Cerca de 150 mil m² com praças, pista de caminhada e ciclovia de 2 km, bosque, academia ao ar livre e área de zumba.',
    },
    {
      nome: 'Avenida Parque (Beira Rio)',
      descricao:
        'Via revitalizada, um dos locais mais usados por corredores e ciclistas da cidade.',
    },
    {
      nome: 'Parque dos Ipês',
      descricao:
        'Consagrado entre os principais espaços de esporte e lazer do município.',
    },
  ],
  ciclovias:
    'Há ciclovia de cerca de 2 km no Complexo Turístico, além da Avenida Parque muito usada por ciclistas; a extensão total ainda não é divulgada em fonte oficial.',

  clima:
    'O clima é tropical amazônico, quente o ano todo, com estação chuvosa e estação mais seca bem definidas.',
  climaTreino:
    'O calor e a alta umidade pedem treinos cedo de manhã ou à noite, com hidratação reforçada.',

  mobilidade:
    'O acesso se dá pela PA-275, principal eixo rodoviário ligando à área de Carajás e à BR-155 (região de Marabá), com aeroporto local.',

  corridas: [
    {
      nome: 'Corrida da Cidade de Parauapebas',
      descricao:
        'Prova de rua da associação local de corredores (ACOPER), no calendário festivo da cidade.',
    },
    {
      nome: 'Corrida da Mulher "Elas Inspiram"',
      descricao:
        'Prova de 5 km, ao lado de eventos como a Corrida Maio Amarelo e etapas de circuitos locais.',
    },
  ],
  culturaEsportiva:
    'A cidade vive um boom das corridas de rua, com calendário que a consolida como referência esportiva no Norte, em provas de 5 km a 15 km e forte participação popular.',
  academias:
    'A oferta de academias e estúdios é sustentada pela renda elevada da mineração, complementada pelo Complexo Turístico e pela Avenida Parque.',

  destaquesFitness: [
    'Complexo Turístico de 150 mil m² com ciclovia, pista e academia ao ar livre.',
    'Renda per capita elevada (mineração) sustentando o mercado fitness.',
    'Boom de corridas de rua — referência esportiva do Norte.',
    'Avenida Parque (Beira Rio) como ponto de treino de corredores e ciclistas.',
  ],

  precos: {
    avulsaMin: 65,
    avulsaMax: 155,
    mensalMin: 330,
    mensalMax: 900,
    onlineMin: 160,
    onlineMax: 420,
  },

  conclusao:
    'Capital do minério de Carajás, Parauapebas une renda alta e um boom de corridas de rua. Um personal trainer ajuda a aproveitar o Complexo Turístico e a Avenida Parque com método, ajustando horários e hidratação ao calor amazônico.',

  vizinhas: ['belem-pa', 'ananindeua-pa'],

  fontes: [
    { nome: 'IBGE Cidades — Parauapebas', url: 'https://cidades.ibge.gov.br/brasil/pa/parauapebas/panorama' },
    { nome: 'Prefeitura de Parauapebas', url: 'https://www.parauapebas.pa.gov.br/' },
    { nome: 'Atlas Brasil — IDHM', url: 'https://www.atlasbrasil.org.br/' },
  ],
  atualizadoEm: '2026-06-29',
};
