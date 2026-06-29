import type { Cidade } from '../../lib/types';

export const cidade: Cidade = {
  slug: 'itajuba-mg',
  nome: 'Itajubá',
  uf: 'MG',
  estado: 'Minas Gerais',
  estadoSlug: 'minas-gerais',
  regiao: 'Sudeste',
  gentilico: 'itajubense',
  tipo: 'cidade',

  populacao: 93073,
  populacaoAno: 2022,
  idhm: 0.787,
  idhmClasse: 'alto',
  altitudeM: 900,

  resumoEconomico:
    'Cidade do sul de Minas, Itajubá é reconhecido polo universitário e tecnológico em torno da UNIFEI (Universidade Federal de Itajubá), fundada em 1913 — uma das primeiras escolas de engenharia do país. Abriga um parque científico e tecnológico e indústria eletroeletrônica, que atraíram empresas de tecnologia e mão de obra especializada.',

  mercado:
    'O mercado é impulsionado por uma grande população universitária jovem (UNIFEI) e pelo bom poder aquisitivo ligado ao setor tecnológico, favorecendo academias e estúdios.',

  bairrosNobres: ['Morro Chic', 'Boa Vista', 'Vila Isabel', 'Centro'],
  bairrosPopulares: ['Pinheirinho', 'BPS', 'Varginha', 'Estiva'],

  parques: [
    {
      nome: 'Parque da Cidade',
      descricao:
        'Tem pista de caminhada e corrida de cerca de 1,5 km, academia ao ar livre, quadras, skatepark e trilhas, de acesso gratuito.',
    },
    {
      nome: 'Praças arborizadas do Centro',
      descricao:
        'A cidade é conhecida pelas numerosas praças arborizadas, que favorecem caminhada e bem-estar.',
    },
    {
      nome: 'Trilhas e morros do entorno',
      descricao:
        'O relevo de serra oferece trilhas e subidas para treino outdoor e trail.',
    },
  ],
  ciclovias:
    'A extensão de ciclovias ainda não é divulgada em fonte oficial.',

  clima:
    'O clima é tropical de altitude do sul de Minas, ameno o ano todo, cercado por montanhas, com noites frias no inverno.',
  climaTreino:
    'A altitude moderada (cerca de 900 m) e o clima ameno favorecem treinos de resistência ao ar livre quase o ano todo; o inverno frio pede aquecimento prolongado.',

  mobilidade:
    'Itajubá é servida pela BR-459 (ligação a Pouso Alegre e à divisa com São Paulo) e fica próxima ao eixo da BR-381 (Fernão Dias).',

  corridas: [
    {
      nome: 'Corrida de São José',
      descricao:
        'Prova tradicional desde 1993, parte da programação de aniversário da cidade, com centenas de atletas.',
    },
    {
      nome: 'Circuito de Corrida e Caminhada — Etapa Itajubá',
      descricao:
        'Realizado no Parque da Cidade, via lei de incentivo ao esporte.',
    },
  ],
  culturaEsportiva:
    'Há tradição em corrida de rua ligada às datas cívicas (a Corrida de São José existe desde 1993) e forte uso do Parque da Cidade, com a população universitária reforçando a cultura de atividade física.',
  academias:
    'A oferta reúne academias e estúdios, com grande público universitário (UNIFEI), complementada pelo Parque da Cidade e pelas trilhas da serra.',

  destaquesFitness: [
    'Grande público jovem universitário (UNIFEI) — perfil ideal para academias e estúdios.',
    'Parque da Cidade gratuito, com pista de cerca de 1,5 km, academia ao ar livre e quadras.',
    'Clima ameno de altitude (cerca de 900 m), favorável ao treino outdoor o ano todo.',
    'Corrida de São José: evento esportivo tradicional desde 1993.',
  ],

  precos: {
    avulsaMin: 65,
    avulsaMax: 155,
    mensalMin: 340,
    mensalMax: 920,
    onlineMin: 170,
    onlineMax: 430,
  },

  conclusao:
    'Polo tecnológico e universitário do sul de Minas, Itajubá une a UNIFEI, clima ameno de altitude e o Parque da Cidade. Um personal trainer encontra aqui um público jovem e qualificado, ideal para treino presencial e online, num cenário propício ao outdoor.',

  vizinhas: ['pouso-alegre-mg', 'varginha-mg'],

  fontes: [
    { nome: 'IBGE Cidades — Itajubá', url: 'https://cidades.ibge.gov.br/brasil/mg/itajuba/panorama' },
    { nome: 'Prefeitura de Itajubá', url: 'https://www.itajuba.mg.gov.br/' },
    { nome: 'Atlas Brasil — IDHM', url: 'https://www.atlasbrasil.org.br/' },
  ],
  atualizadoEm: '2026-06-29',
};
