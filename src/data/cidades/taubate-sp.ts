import type { Cidade } from '../../lib/types';

export const cidade: Cidade = {
  slug: 'taubate-sp',
  nome: 'Taubaté',
  uf: 'SP',
  estado: 'São Paulo',
  estadoSlug: 'sao-paulo',
  regiao: 'Sudeste',
  gentilico: 'taubateano',
  tipo: 'cidade',

  populacao: 310739,
  populacaoAno: 2022,
  idhm: 0.800,
  idhmClasse: 'muito alto',

  resumoEconomico:
    'Maior cidade da Região Metropolitana do Vale do Paraíba, entre as serras do Mar e da Mantiqueira, Taubaté é um forte polo industrial, com destaque para os setores automotivo e metalmecânico instalados ao longo da Via Dutra. A cidade reforça sua identidade cultural como "Terra de Monteiro Lobato", criador do Sítio do Picapau Amarelo.',

  mercado:
    'O mercado fitness é consolidado, com grandes redes, academias tradicionais, boxes de crossfit e centros de treinamento funcional, além de boa cobertura por planos corporativos e oferta ativa de personal trainers.',

  bairrosNobres: ['Jardim das Nações', 'Independência', 'Esplanada Independência', 'Morada dos Nobres'],
  bairrosPopulares: ['CECAP', 'Estiva', 'Jardim Gurilândia', 'Parque São Cristóvão'],

  parques: [
    {
      nome: 'Parque Municipal do Vale do Itaim',
      descricao:
        'Maior parque da cidade (cerca de 1,7 milhão de m²), com pista e trilhas para caminhada e ginásio de esportes radicais.',
    },
    {
      nome: 'Parque Municipal Jardim das Nações',
      descricao:
        'Com cerca de 46 mil m²: pista de caminhada, pista de skate, quadras poliesportivas, campo de futebol, lago e playground, aberto das 6h às 20h.',
    },
    {
      nome: 'Sítio do Picapau Amarelo',
      descricao:
        'Área verde com o casarão do Museu Monteiro Lobato, boa para caminhada leve e atividade ao ar livre em meio à natureza.',
    },
  ],
  ciclovias:
    'A cidade tem cerca de 90 km de ciclovias, e o Plano de Mobilidade Urbana prevê ampliar a malha para aproximadamente 180 km.',

  clima:
    'O clima é de transição tropical e de altitude, com verão quente, úmido e chuvoso e inverno curto, seco e ameno (temperaturas no ano variando de cerca de 12 °C a 31 °C).',
  climaTreino:
    'No verão úmido, vale priorizar o treino ao ar livre no início da manhã ou no fim de tarde; o inverno seco abre janelas confortáveis para correr.',

  mobilidade:
    'Taubaté é cortada pela Rodovia Presidente Dutra (BR-116), principal eixo São Paulo–Rio, com novas faixas marginais previstas para melhorar o tráfego local.',

  corridas: [
    {
      nome: 'Corrida da Cidade',
      descricao:
        'Prova urbana criada em 2025, com percurso em torno de 5,4 km, já com nova edição confirmada para 2026.',
    },
    {
      nome: 'Track&Field Run Experience — Etapa Taubaté',
      descricao:
        'Corrida de rua com provas de 4 km e 8 km, ao lado de eventos como a Corrida UNITAU 7K.',
    },
  ],
  culturaEsportiva:
    'Taubaté tem cultura esportiva reconhecida — já foi premiada como "Cidade Esportiva" e ficou entre as melhores do estado em corridas de rua, com calendário ativo de provas pedestres.',
  academias:
    'A oferta reúne redes, academias tradicionais, boxes de crossfit e centros de treinamento funcional, complementada por parques públicos gratuitos com pistas de caminhada e corrida.',

  academiasProximas: [
    { nome: 'Smart Fit Taubaté', detalhe: 'na Av. Itália, no Jardim das Nações' },
    { nome: 'Smart Fit Extra Taubaté', detalhe: 'na Av. Juscelino Kubitschek, no Jardim Eulália' },
    { nome: 'Smart Fit Tauste Taubaté', detalhe: 'na Rua Domingos Rodrigues do Prado, na Vila Edmundo' },
  ],

  destaquesFitness: [
    'Parques públicos gratuitos com pistas de caminhada e corrida (Itaim, Jardim das Nações).',
    'Malha cicloviária extensa (cerca de 90 km, em expansão).',
    'Cena de corrida de rua forte, com calendário regular e reconhecimento estadual.',
    'Mercado de academias diversificado, de redes a boxes de crossfit.',
  ],

  precos: {
    avulsaMin: 75,
    avulsaMax: 180,
    mensalMin: 380,
    mensalMax: 1000,
    onlineMin: 180,
    onlineMax: 450,
  },

  conclusao:
    'Polo industrial do Vale do Paraíba, Taubaté une bons parques, malha cicloviária extensa e forte cena de corrida. Um personal trainer ajuda a aproveitar o Parque do Itaim e o Jardim das Nações com método, conciliando o clima de transição com treino consistente.',

  vizinhas: ['sao-jose-dos-campos-sp', 'sao-paulo-sp'],

  fontes: [
    { nome: 'IBGE Cidades — Taubaté', url: 'https://cidades.ibge.gov.br/brasil/sp/taubate/panorama' },
    { nome: 'Prefeitura de Taubaté', url: 'https://www.taubate.sp.gov.br/' },
    { nome: 'Atlas Brasil — IDHM', url: 'https://www.atlasbrasil.org.br/' },
  ],
  atualizadoEm: '2026-08-27',

  capaArte: {
    src: '/capas-cidade/taubate-sp.webp',
    w: 1200,
    h: 900,
    alt:
      'Personal trainer em Taubaté (SP) em arte que reúne levantamento terra, o Cristo Redentor da Praça Santa Terezinha, a igreja do Centro e o Museu da Imigração Italiana de Quiririm — Personal por Perto',
    legenda:
      'Treino personalizado em Taubaté: um plano feito para o seu corpo e a sua rotina, com acompanhamento profissional na cidade e região.',
  },
};
