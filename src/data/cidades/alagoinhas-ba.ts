import type { Cidade } from '../../lib/types';

export const cidade: Cidade = {
  slug: 'alagoinhas-ba', nome: 'Alagoinhas', uf: 'BA', estado: 'Bahia', estadoSlug: 'bahia', regiao: 'Nordeste', gentilico: 'alagoinhense', tipo: 'cidade',
  populacao: 151055, populacaoAno: 2022, idhm: 0.683, idhmClasse: 'médio', altitudeM: 132,

  resumoEconomico:
    'Polo regional do nordeste baiano, a cerca de 108 km de Salvador, Alagoinhas tem economia diversificada entre indústria, comércio e serviços. É reconhecida como capital da cerveja na Bahia: o aquífero local atraiu a antiga Schincariol nos anos 1990 e hoje abriga grandes cervejarias (Grupo Petrópolis e Heineken), num setor que dialoga com a presença histórica da Ambev no estado. A cadeia do petróleo, a produção de eucalipto e o serviço público completam a base econômica, e a UNEB (Campus II) reforça o papel da cidade como centro de educação e serviços para a região.',

  mercado:
    'Como polo regional do nordeste baiano, Alagoinhas concentra academias e estúdios que atendem moradores e a demanda das cidades do entorno. A oferta vai de academias de bairro no Centro e nas zonas de classe média ao atendimento domiciliar, modalidade forte no interior, em que o personal trainer leva o treino até a casa ou o condomínio do aluno. Corrida de rua e treino funcional vêm crescendo, apoiados por equipamentos públicos como a pista de atletismo do Carneirão e academias ao ar livre.',

  bairrosNobres: ['Centro', 'Santa Terezinha', 'Alagoinhas Velha', 'Juracy Magalhães'],
  bairrosPopulares: ['Alagoinhas II', 'Boa Sorte', 'Mangalô', 'Kennedy'],

  parques: [
    {
      nome: 'Estádio Antônio Carneiro (Carneirão)',
      descricao:
        'Complexo esportivo municipal cuja pista de atletismo foi aberta ao público, oferecendo espaço estruturado para corrida e caminhada na cidade.',
    },
    {
      nome: 'Academias ao ar livre',
      descricao:
        'A prefeitura mantém academias ao ar livre em praças e centros de convivência, com equipamentos de ginástica gratuitos para a população treinar perto de casa.',
    },
  ],
  ciclovias:
    'A malha cicloviária ainda é incipiente; o uso da bicicleta se concentra em vias urbanas e em provas de ciclismo promovidas no calendário esportivo municipal.',

  clima:
    'O clima é tropical, quente o ano todo, com chuvas mais concentradas no outono e no inverno e umidade trazida pela proximidade do litoral norte baiano.',
  climaTreino:
    'O calor pede treino ao ar livre no início da manhã e no fim da tarde, com hidratação reforçada e atenção à umidade — horários mais frescos rendem mais e reduzem o desgaste.',

  mobilidade:
    'Alagoinhas é um entroncamento do nordeste baiano, cortado pelas BR-101 e BR-110, principais vias de acesso e ligação com Salvador (a cerca de 108 km). A cidade tem tradição ferroviária e o deslocamento interno é feito sobretudo por ônibus e veículos particulares.',

  corridas: [
    {
      nome: 'Alagoinhas Night Run',
      descricao:
        'Corrida de rua noturna que reúne centenas de atletas, com largada em espaços públicos da cidade — uma das provas mais populares do calendário local.',
    },
    {
      nome: 'Corrida do Tonho',
      descricao:
        'Prova tradicional de rua com largada no Centro, voltada para a integração esportiva da família e da comunidade.',
    },
  ],
  culturaEsportiva:
    'Alagoinhas tem forte tradição no futebol e uma cena de corrida de rua em expansão, com provas como a Night Run e a Corrida do Tonho movimentando a cidade. Equipamentos públicos como a pista do Carneirão e as academias ao ar livre ampliam o acesso à atividade física.',
  academias:
    'A oferta de academias e estúdios é compatível com o porte de um polo regional, concentrada no Centro e nos bairros de classe média, e complementada pelo atendimento domiciliar e pelas academias ao ar livre municipais.',

  academiasProximas: [
    { nome: 'Selfit Alagoinhas', detalhe: 'na Av. Doutor João Dantas, em Santa Terezinha' },
  ],
  academiasVerificadasEm: '2026-08-27',

  destaquesFitness: [
    'Polo regional do nordeste baiano, com academias e estúdios que atendem também as cidades do entorno.',
    'Calendário de corridas de rua em crescimento (Alagoinhas Night Run, Corrida do Tonho).',
    'Pista de atletismo do Carneirão e academias ao ar livre gratuitas em praças.',
    'Clima quente que exige planejamento de horário e hidratação no treino ao ar livre.',
  ],

  precos: {
    avulsaMin: 50,
    avulsaMax: 115,
    mensalMin: 260,
    mensalMax: 680,
    onlineMin: 115,
    onlineMax: 350,
  },

  conclusao:
    'Capital da cerveja na Bahia e polo de educação e serviços do nordeste baiano, Alagoinhas combina vida urbana ativa com equipamentos públicos para treinar e uma cena de corrida em ascensão. Um personal trainer ajuda a aproveitar tudo isso com método — seja em academia, ao ar livre ou no atendimento domiciliar — respeitando o clima quente e o seu objetivo.',

  vizinhas: ['salvador-ba', 'feira-de-santana-ba', 'camacari-ba'],

  fontes: [
    { nome: 'IBGE Cidades — Alagoinhas', url: 'https://cidades.ibge.gov.br/brasil/ba/alagoinhas/panorama' },
    { nome: 'Prefeitura de Alagoinhas', url: 'https://www.alagoinhas.ba.gov.br/' },
    { nome: 'Atlas Brasil — IDHM', url: 'https://www.atlasbrasil.org.br/' },
  ],
  atualizadoEm: '2026-08-27',
  capaArte: {
    src: '/capas-cidade/alagoinhas-ba.webp',
    w: 1200,
    h: 900,
    alt:
      'Personal trainer em Alagoinhas (BA) em arte que une treino em dupla e a catedral amarela da cidade entre as palmeiras do interior baiano — Personal por Perto',
    legenda:
      'Treino personalizado em Alagoinhas: um plano feito para o seu corpo e a sua rotina, com acompanhamento profissional na cidade e região.',
  },
};
