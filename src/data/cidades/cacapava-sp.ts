import type { Cidade } from '../../lib/types';

export const cidade: Cidade = {
  slug: 'cacapava-sp',
  nome: 'Caçapava',
  uf: 'SP',
  estado: 'São Paulo',
  estadoSlug: 'sao-paulo',
  regiao: 'Sudeste',
  gentilico: 'caçapavense',
  tipo: 'cidade',

  populacao: 96202,
  populacaoAno: 2022,
  idhm: 0.788,
  idhmClasse: 'alto',
  altitudeM: 560,

  resumoEconomico:
    'Situada no coração do Vale do Paraíba, entre São José dos Campos e Taubaté, Caçapava combina forte presença industrial com a posição estratégica às margens da Via Dutra (BR-116), o eixo que liga São Paulo ao Rio de Janeiro. A cidade abriga unidades industriais de peso, com destaque para a fabricação de alimentos e a indústria de vidro, além de um setor de serviços e comércio que se beneficia da proximidade com o polo aeroespacial e econômico do entorno. A logística rodoviária e a integração à Região Metropolitana do Vale do Paraíba e Litoral Norte sustentam a economia local.',

  mercado:
    'Como cidade média inserida em uma região metropolitana dinâmica, Caçapava tem um mercado fitness em crescimento, impulsionado pela proximidade com centros maiores como São José dos Campos. A procura por personal trainers vem de moradores que buscam treino orientado para a rotina entre casa, trabalho e o deslocamento pelo Vale, com interesse tanto em musculação quanto em atividades ao ar livre aproveitando o clima ameno da região.',

  bairrosNobres: ['Centro', 'Vila Resende', 'Vila Santa Isabel', 'Vera Cruz'],
  bairrosPopulares: ['Vila São João', 'Jardim São José', 'Parque Residencial Maria Elmira', 'Vila Menino Jesus'],

  parques: [
    {
      nome: 'Parque Ecológico da Moçota',
      descricao:
        'Principal área verde da cidade, com mais de 60 mil m² e uma grande variedade de árvores nativas. É o espaço mais usado para caminhada, corrida e atividades ao ar livre, e serve de palco para eventos esportivos da cidade.',
    },
    {
      nome: 'Praça da Bandeira',
      descricao:
        'Praça central tradicional, com monumentos, playground e quiosques, ponto de encontro da população e referência para caminhadas leves e lazer no miolo urbano.',
    },
    {
      nome: 'Entorno e área rural do Vale do Paraíba',
      descricao:
        'As estradas e o relevo suave do Vale, com altitude em torno de 560 m, oferecem percursos para pedal, corrida e treino ao ar livre em meio à paisagem rural característica da região.',
    },
  ],
  ciclovias:
    'A estrutura cicloviária é modesta e concentrada em alguns trechos da área urbana; boa parte do pedal e da corrida acontece em vias do entorno, em ruas residenciais mais tranquilas e nas imediações do Parque da Moçota.',

  clima:
    'O clima é ameno e temperado, herança da posição no Vale do Paraíba e da altitude próxima de 560 metros. Verões úmidos e invernos secos formam a regra, com madrugadas frias no auge da estação fria e amplitude térmica perceptível entre o dia e a noite.',
  climaTreino:
    'O clima mais ameno favorece o treino ao ar livre na maior parte do ano; no verão úmido vale priorizar o começo da manhã ou o fim da tarde, e no inverno as madrugadas geladas pedem aquecimento reforçado e atenção à roupa adequada.',

  mobilidade:
    'A cidade é cortada pela Rodovia Presidente Dutra (BR-116), que a coloca a cerca de 25 minutos de São José dos Campos e de Taubaté e a integra ao eixo São Paulo–Rio de Janeiro. O transporte urbano é feito por ônibus, e a posição na Via Dutra sustenta o fluxo logístico e o deslocamento diário de quem trabalha em cidades vizinhas.',

  corridas: [
    {
      nome: 'Corrida e Caminhada de Prevenção ao Câncer de Mama',
      descricao:
        'Prova de cunho social com largada no Parque Ecológico da Moçota, realizada em percursos de corrida e caminhada que reforçam a vocação do parque como espaço para o esporte na cidade.',
    },
    {
      nome: 'Treinão do Cabelo Maluco',
      descricao:
        'Evento de corrida e caminhada sediado no Parque da Moçota, voltado a corredores de diferentes níveis em percursos curtos pela área verde.',
    },
  ],
  culturaEsportiva:
    'A cultura esportiva caçapavense gira em torno do Parque Ecológico da Moçota como ponto de encontro para caminhada e corrida, do uso das praças centrais para lazer e de provas de rua ligadas a causas sociais, tudo favorecido pelo clima ameno do Vale do Paraíba.',
  academias:
    'A oferta é formada por academias locais de musculação e treino funcional distribuídas pelo Centro e pelos bairros residenciais, com porte compatível com uma cidade média do interior paulista inserida em região metropolitana.',

  destaquesFitness: [
    'Parque Ecológico da Moçota, com mais de 60 mil m² de área verde, como principal espaço de caminhada e corrida.',
    'Clima ameno do Vale do Paraíba, favorável ao treino ao ar livre na maior parte do ano.',
    'Posição na Via Dutra (BR-116), a poucos minutos de São José dos Campos e Taubaté.',
    'Forte base industrial e integração à Região Metropolitana do Vale do Paraíba e Litoral Norte.',
  ],

  precos: {
    avulsaMin: 55,
    avulsaMax: 125,
    mensalMin: 270,
    mensalMax: 740,
    onlineMin: 130,
    onlineMax: 370,
  },

  conclusao:
    'Cidade industrial e bem conectada no Vale do Paraíba, Caçapava reúne clima ameno e boas áreas verdes que convidam ao treino ao ar livre. Um personal trainer ajuda a encaixar a atividade física na rotina de quem se desloca pela região, aproveitando o Parque da Moçota e mantendo a constância ao longo das estações.',

  vizinhas: ['sao-jose-dos-campos-sp', 'taubate-sp', 'jacarei-sp'],

  fontes: [
    { nome: 'IBGE Cidades — Caçapava', url: 'https://cidades.ibge.gov.br/brasil/sp/cacapava/panorama' },
    { nome: 'Prefeitura de Caçapava', url: 'https://www.cacapava.sp.gov.br/' },
    { nome: 'Atlas Brasil — IDHM', url: 'https://www.atlasbrasil.org.br/' },
  ],
  atualizadoEm: '2026-06-29',
};
