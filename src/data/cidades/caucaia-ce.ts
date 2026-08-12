import type { Cidade } from '../../lib/types';

export const cidade: Cidade = {
  slug: 'caucaia-ce',
  nome: 'Caucaia',
  uf: 'CE',
  estado: 'Ceará',
  estadoSlug: 'ceara',
  regiao: 'Nordeste',
  gentilico: 'caucaiense',
  tipo: 'cidade',

  populacao: 355679,
  populacaoAno: 2022,
  idhm: 0.682,
  idhmClasse: 'médio',
  altitudeM: 29,

  resumoEconomico:
    'Segunda maior cidade do Ceará e integrante da Região Metropolitana de Fortaleza, Caucaia tem a segunda maior economia do estado, puxada pela indústria ligada ao Complexo Industrial e Portuário do Pecém (siderurgia, ZPE e energia), além de forte comércio e serviços. O turismo é destaque na Praia do Cumbuco, meca internacional do kitesurf.',

  mercado:
    'O mercado tem duas caras bem distintas. Nos bairros populosos do eixo da Jurema, o personal trabalha em academias de bairro e no atendimento a domicílio, com preços de cidade metropolitana. No litoral — Cumbuco, Tabuba e Icaraí —, a demanda vem do veraneio, dos condomínios de praia e de um público internacional de kitesurfistas que passa temporadas na cidade e procura preparo físico específico para o esporte.',

  bairrosNobres: ['Cumbuco', 'Tabuba', 'Icaraí', 'Iparana'],
  bairrosPopulares: ['Jurema', 'Parque Albano', 'Nova Metrópole', 'Parque Potira'],

  parques: [
    {
      nome: 'Praia do Cumbuco',
      descricao:
        'Cerca de 4 km de orla com dunas e coqueiros, a 27 km de Fortaleza; meca do kitesurf e do windsurf e pista natural para corrida e treino funcional na areia.',
    },
    {
      nome: 'Lagoa do Cauípe',
      descricao:
        'Lagoa de água doce e rasa com vento médio de 20 nós, considerada um dos melhores spots do mundo para o kitesurf freestyle — recebe etapas nacionais e internacionais.',
    },
    {
      nome: 'Lagoa do Banana',
      descricao:
        'Lagoa entre as dunas do Cumbuco, com barracas e esportes aquáticos; alternativa de águas calmas para lazer ativo e stand up paddle.',
    },
    {
      nome: 'Praias de Icaraí e Tabuba',
      descricao:
        'Orlas urbanas de fácil acesso, usadas para caminhada, corrida e esportes de praia pelos moradores da região litorânea.',
    },
  ],
  ciclovias:
    'A extensão e o traçado da malha cicloviária ainda não são divulgados em fonte oficial.',

  clima:
    'O clima é tropical quente e semiárido ameno, com ventos fortes e constantes no litoral do Cumbuco.',
  climaTreino:
    'O calor intenso e o sol forte pedem treino cedo de manhã ou no fim de tarde, com hidratação; o vento litorâneo favorece os esportes ao ar livre.',

  mobilidade:
    'Caucaia é servida pela BR-222 e pela CE-085 (Rodovia Estruturante), eixos de ligação com Fortaleza e o litoral oeste rumo ao Pecém.',

  corridas: [
    {
      nome: 'Bota Pra Correr — etapa Cumbuco',
      descricao:
        'Festival nacional de corrida que colocou Caucaia no mapa da corrida de rua, com percursos entre dunas, lagoas e o vento constante do litoral.',
    },
    {
      nome: 'Provas do calendário de turismo esportivo',
      descricao:
        'A prefeitura vem atraindo eventos de corrida e esportes de praia para o Cumbuco, que recebe atletas de todo o país na temporada de vento.',
    },
  ],
  culturaEsportiva:
    'Os esportes de vento são a identidade da cidade: o Cumbuco e a Lagoa do Cauípe já receberam o Campeonato Brasileiro de Kitesurf e a final do Mundial de Freestyle, e na temporada de vento — do meio para o fim do ano — o litoral vira colônia internacional de atletas. Futebol de bairro, beach tennis e a corrida de rua em crescimento completam o quadro.',
  academias:
    'A oferta reúne academias de bairro na região da Jurema e no Centro, estúdios e serviços voltados ao turismo no eixo litorâneo, além das praias e lagoas funcionando como academia a céu aberto — muitos personals atendem direto na areia, com material próprio.',

  destaquesFitness: [
    'Cumbuco como hub internacional de kitesurf e windsurf.',
    'Lagoa do Cauípe: vento médio de 20 nós e um dos melhores spots de freestyle do mundo.',
    'Orla extensa (Cumbuco, Icaraí e Tabuba) para corrida e funcional na areia.',
    'Bota Pra Correr e calendário crescente de turismo esportivo.',
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
    'Segunda maior cidade do Ceará, Caucaia une a indústria do Pecém, os bairros densos da Jurema e um litoral que é referência mundial do kitesurf. Um personal trainer daqui transita entre esses mundos: musculação de base para quem vive a rotina metropolitana e preparo físico específico — core, pernas e fôlego — para quem encara o vento do Cumbuco e da Lagoa do Cauípe.',

  vizinhas: ['fortaleza-ce', 'maracanau-ce', 'maranguape-ce'],

  fontes: [
    { nome: 'IBGE Cidades — Caucaia', url: 'https://cidades.ibge.gov.br/brasil/ce/caucaia/panorama' },
    { nome: 'Prefeitura de Caucaia', url: 'https://www.caucaia.ce.gov.br/' },
    { nome: 'Atlas Brasil — IDHM', url: 'https://www.atlasbrasil.org.br/' },
  ],
  atualizadoEm: '2026-08-12',


  faqsExtra: [
    {
      pergunta: 'Existe personal trainer para kitesurf em Caucaia?',
      resposta:
        'Sim — é uma demanda típica do Cumbuco e da Lagoa do Cauípe. O preparo físico para o kite trabalha core, pernas, pegada e fôlego, além de mobilidade para as quedas e manobras. Na temporada de vento, do meio para o fim do ano, muitos atletas visitantes contratam pacotes curtos de algumas semanas.',
    },
    {
      pergunta: 'Onde treinar ao ar livre em Caucaia?',
      resposta:
        'O litoral é a academia a céu aberto da cidade: corrida e funcional na areia do Cumbuco, Icaraí e Tabuba, e águas calmas na Lagoa do Banana. O calor pede início de manhã ou fim de tarde — e o vento constante, comum à tarde, muda o esforço da corrida na orla.',
    },
    {
      pergunta: 'O personal atende nos bairros da Jurema e do Centro?',
      resposta:
        'Sim. Fora do eixo turístico, o atendimento acontece nas academias de bairro e a domicílio, com preços de região metropolitana — em geral abaixo dos praticados no litoral na alta temporada. O treino em dupla é comum para dividir o custo.',
    },
  ],

  capaArte: {
    src: '/capas-cidade/caucaia-ce.webp',
    w: 1200,
    h: 849,
    alt:
      'Personal trainer em Caucaia (CE) em arte que reúne treino com kettlebell e halteres, os kites da Praia do Cumbuco, a Lagoa do Cauípe, a Lagoa do Banana e a Igreja Matriz Nossa Senhora dos Prazeres — Personal por Perto',
    legenda:
      'Treino personalizado em Caucaia: um plano feito para o seu corpo e a sua rotina, com acompanhamento profissional na cidade e região.',
  },
};
