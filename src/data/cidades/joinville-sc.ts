import type { Cidade } from '../../lib/types';

export const cidade: Cidade = {
  slug: 'joinville-sc',
  nome: 'Joinville',
  uf: 'SC',
  estado: 'Santa Catarina',
  estadoSlug: 'santa-catarina',
  regiao: 'Sul',
  gentilico: 'joinvilense',
  tipo: 'cidade',

  populacao: 616317,
  populacaoAno: 2022,
  idhm: 0.809,
  idhmClasse: 'muito alto',
  altitudeM: 5,

  resumoEconomico:
    'Maior cidade de Santa Catarina e a maior economia do estado, Joinville é o maior polo industrial catarinense — metalmecânico, plástico, têxtil e tecnologia —, o que lhe rendeu o apelido de "Manchester Catarinense". Com IDHM muito alto e relevo plano de planície costeira, é também conhecida como a "Cidade das Bicicletas" e a "Cidade da Dança".',

  mercado:
    'O mercado fitness é aquecido pela maior economia do estado, com forte presença de redes nacionais (Smart Fit em vários bairros, Bluefit, Pratique) e academias locais. A cultura de musculação é consolidada, e o relevo plano somado à enorme malha cicloviária favorece corrida e ciclismo de longa distância.',

  bairrosNobres: ['América', 'Atiradores', 'Saguaçu', 'Anita Garibaldi'],
  bairrosPopulares: ['Aventureiro', 'Paranaguamirim', 'Comasa', 'Itinga'],

  parques: [
    {
      nome: 'Parque Morro da Boa Vista (Zoobotânico)',
      descricao:
        'Tem pista de caminhada, academia ao ar livre e trilhas na mata, com mirante — um dos principais espaços de treino ao ar livre da cidade.',
    },
    {
      nome: 'Complexo Expoville',
      descricao:
        'Ampla área verde com pistas de caminhada e lago, muito usada para corrida e atividades ao ar livre.',
    },
    {
      nome: 'Praças com academias ao ar livre',
      descricao:
        'Joinville distribui academias ao ar livre por diversas praças urbanas, ampliando o acesso gratuito ao treino em vários bairros.',
    },
  ],
  ciclovias:
    'Joinville tem a maior rede cicloviária por habitante do país (cerca de 200 km ou mais, conforme a fonte) e é conhecida como a "Cidade das Bicicletas", com cerca de 12% dos deslocamentos diários feitos de bike.',

  clima:
    'O clima é subtropical úmido, com média em torno de 21 °C e chuvas abundantes (perto de 2.000 mm por ano).',
  climaTreino:
    'A umidade alta e as chuvas frequentes favorecem o treino matinal e a existência de um plano B em ambiente fechado. O relevo plano, por outro lado, é um convite à corrida e ao ciclismo.',

  mobilidade:
    'O transporte é feito por ônibus, e a cidade é cortada pelas BR-101 (duplicada) e BR-280, com acesso rápido ao Porto de São Francisco do Sul. O relevo plano facilita os deslocamentos a pé e de bicicleta.',

  corridas: [
    {
      nome: 'Meia Maratona de Joinville',
      descricao:
        'Prova tradicional do calendário municipal, com percursos de 5 km e 21 km.',
    },
    {
      nome: 'Meia Maratona do Quiriri',
      descricao:
        'Prova de 21 km em Pirabeiraba, integrada à Festa do Aipim — um evento de forte identidade local.',
    },
  ],
  culturaEsportiva:
    'Joinville é uma cidade ativa, com tradição em ciclismo urbano e um calendário consistente de corridas. É também a "capital da dança", sede do maior festival de dança do mundo — uma cultura corporal que se estende ao cuidado com o físico.',
  academias:
    'A oferta reúne forte presença de redes nacionais (Smart Fit, Bluefit, Pratique) e academias locais, complementadas pela estrutura gratuita dos parques e praças.',

  destaquesFitness: [
    'Maior rede cicloviária por habitante do Brasil — ótima para bike e corrida.',
    'Relevo plano (nível do mar), ideal para corrida e ciclismo de longa distância.',
    'IDHM muito alto e maior economia de SC sustentam um mercado fitness aquecido.',
    'Parque Morro da Boa Vista e Expoville com estrutura gratuita de treino.',
  ],

  precos: {
    avulsaMin: 80,
    avulsaMax: 180,
    mensalMin: 400,
    mensalMax: 1050,
    onlineMin: 180,
    onlineMax: 460,
  },

  conclusao:
    'Maior economia de SC e "Cidade das Bicicletas", Joinville é feita para quem gosta de se movimentar. Um personal trainer ajuda a transformar a enorme malha cicloviária, os parques e as academias da cidade em um plano de treino consistente, do iniciante ao avançado.',

  vizinhas: ['blumenau-sc', 'florianopolis-sc', 'curitiba-pr'],

  fontes: [
    { nome: 'IBGE Cidades — Joinville', url: 'https://cidades.ibge.gov.br/brasil/sc/joinville/panorama' },
    { nome: 'Prefeitura de Joinville', url: 'https://www.joinville.sc.gov.br/' },
    { nome: 'Atlas Brasil — IDHM', url: 'https://www.atlasbrasil.org.br/' },
  ],
  atualizadoEm: '2026-06-29',
};
