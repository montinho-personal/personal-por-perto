import type { Cidade } from '../../lib/types';

export const cidade: Cidade = {
  slug: 'buique-pe',
  nome: 'Buíque',
  uf: 'PE',
  estado: 'Pernambuco',
  estadoSlug: 'pernambuco',
  regiao: 'Nordeste',
  gentilico: 'buiquense',
  tipo: 'cidade',

  populacao: 52097,
  populacaoAno: 2022,
  idhm: 0.527,
  idhmClasse: 'baixo',
  pibPerCapita: 12420,
  pibPerCapitaAno: 2023,
  altitudeM: 800,

  resumoEconomico:
    'Com 52.097 habitantes contados pelo Censo 2022 e densidade de cerca de 39 hab/km², Buíque vive de agricultura e pecuária no agreste pernambucano — e olha para o turismo como vetor de crescimento. O motivo tem nome: a cidade é o principal portão de entrada do Parque Nacional do Catimbau, criado em dezembro de 2002, com 62.297 hectares divididos entre Buíque, Ibimirim e Tupanatinga.',

  mercado:
    'O mercado de personal trainer é enxuto e de relação direta: poucos profissionais, clientela conhecida e agenda dividida entre a academia do centro, o atendimento em casa e o treino ao ar livre. A demanda cresce junto com o turismo — condutores e guias do Catimbau precisam de resistência para percursos longos sob sol forte.',

  bairrosNobres: ['Centro', 'Alto do Cruzeiro', 'Nossa Senhora do Carmo', 'Bela Vista'],
  bairrosPopulares: ['Cohab', 'São José', 'Vila Nova', 'Catimbau'],

  parques: [
    {
      nome: 'Parque Nacional do Catimbau',
      descricao:
        'Segundo maior sítio arqueológico do Brasil, com mais de 2.000 grutas e 28 áreas registradas com pinturas rupestres pré-históricas, além de cânions e formações rochosas esculpidas pelo vento.',
    },
    {
      nome: 'Vale do Catimbau',
      descricao:
        'O conjunto de vales e paredões que dá nome ao parque reúne trilhas de dificuldade variada, com percursos que passam por sítios rupestres, mirantes e formações de arenito.',
    },
    {
      nome: 'Serras do entorno',
      descricao:
        'O relevo do planalto da Borborema garante subidas constantes nas estradas rurais — circuito informal de caminhada, corrida e pedal para quem mora na cidade.',
    },
  ],
  ciclovias:
    'Não há malha cicloviária urbana; a bicicleta é transporte cotidiano na área central, e as estradas de acesso ao parque servem ao cicloturismo e ao mountain bike.',

  clima:
    'Semiárido de altitude, mais ameno que o sertão baixo por conta dos cerca de 800 metros — dias quentes e secos, noites frescas e chuvas concentradas em poucos meses do ano.',
  climaTreino:
    'A altitude ajuda: as noites frescas e as manhãs amenas abrem uma janela confortável para o treino ao ar livre. O sol do meio-dia, porém, é severo, e a baixa umidade exige hidratação levada a sério nas trilhas.',

  mobilidade:
    'A cidade é compacta e o acesso regional se faz pela PE-270 e pelas rodovias que ligam ao eixo de Arcoverde e Pesqueira. As entradas do parque ficam a poucas dezenas de quilômetros do centro, por estradas de terra.',

  corridas: [
    {
      nome: 'Provas e travessias do Vale do Catimbau',
      descricao:
        'O calendário regional inclui travessias e corridas de montanha que aproveitam os vales e as trilhas do parque, com percursos de terreno técnico e desnível.',
    },
  ],
  culturaEsportiva:
    'O futebol amador domina o fim de semana, e o turismo de aventura trouxe caminhada, trilha e escalada para a rotina de uma parcela crescente da população. A musculação avançou junto com a chegada de academias ao centro.',
  academias:
    'A oferta formal é pequena e concentrada na área central, com espaços compactos de musculação — o que abre espaço para o atendimento personalizado e para o treino em casa.',

  destaquesFitness: [
    'Parque Nacional do Catimbau, com 62.297 hectares e trilhas de dificuldade variada.',
    'Mais de 2.000 grutas e 28 sítios com pinturas rupestres para percorrer a pé.',
    'Altitude de cerca de 800 m, que ameniza o calor nas pontas do dia.',
    'Estradas rurais com subida constante para corrida e pedal.',
  ],

  precos: {
    avulsaMin: 35,
    avulsaMax: 90,
    mensalMin: 200,
    mensalMax: 540,
    onlineMin: 100,
    onlineMax: 300,
  },

  conclusao:
    'Buíque tem um parque nacional no quintal e um clima de altitude que perdoa o treino ao ar livre. Um personal trainer daqui usa as duas coisas — e monta na academia a força que sustenta as horas de trilha no Catimbau.',

  vizinhas: ['arcoverde-pe', 'pesqueira-pe', 'garanhuns-pe'],

  fontes: [
    { nome: 'IBGE Cidades — Buíque', url: 'https://cidades.ibge.gov.br/brasil/pe/buique/panorama' },
    { nome: 'Prefeitura de Buíque — Parque Nacional do Catimbau', url: 'https://buique.pe.gov.br/parque-nacional-do-catimbau/' },
    { nome: 'ICMBio — Parque Nacional do Catimbau', url: 'https://www.gov.br/icmbio/' },
  ],
  atualizadoEm: '2026-08-05',
};
