import type { Cidade } from '../../lib/types';

export const cidade: Cidade = {
  slug: 'sao-caetano-do-sul-sp',
  nome: 'São Caetano do Sul',
  uf: 'SP',
  estado: 'São Paulo',
  estadoSlug: 'sao-paulo',
  regiao: 'Sudeste',
  gentilico: 'são-caetanense',
  tipo: 'cidade',

  populacao: 165655,
  populacaoAno: 2022,
  idhm: 0.862,
  idhmClasse: 'muito alto',
  altitudeM: 740,

  resumoEconomico:
    'Município do ABC paulista, na Região Metropolitana de São Paulo, São Caetano do Sul tem o maior IDHM e a maior renda per capita do Brasil. A economia é forte em serviços, comércio e indústria (tradição metalúrgica e automotiva), hoje com perfil corporativo crescente, em uma das maiores densidades demográficas do país.',

  mercado:
    'O público de alta renda e densamente urbano sustenta forte demanda por academias de alto padrão, estúdios boutique e personal trainers — um perfil premium concentrado em poucos quilômetros quadrados, com espaço para atendimento a domicílio e em condomínio.',

  bairrosNobres: ['Cerâmica', 'Santa Paula', 'Barcelona', 'Centro'],
  bairrosPopulares: ['Fundação', 'Boa Vista', 'Mauá', 'Prosperidade'],

  parques: [
    {
      nome: 'Espaço Verde Chico Mendes',
      descricao:
        'Cerca de 140 mil m² com pistas de cooper coberta e descoberta, sete quadras poliesportivas e playground — permite treino independente de chuva.',
    },
    {
      nome: 'Bosque do Povo',
      descricao:
        'Cerca de 27 mil m² com pista de cooper de 650 m, quadras poliesportivas, academia ao ar livre e barras de alongamento.',
    },
    {
      nome: 'Praças e pistas de cooper urbanas',
      descricao:
        'A cidade compacta tem praças e vias arborizadas usadas para caminhada e corrida, com o programa público de esporte atendendo milhares de pessoas.',
    },
  ],
  ciclovias:
    'Há trechos de ciclovia integrados à malha do ABC; a extensão específica de São Caetano ainda não é divulgada em fonte oficial.',

  clima:
    'O clima é subtropical úmido, temperado pela altitude, sem extremos severos.',
  climaTreino:
    'O treino ao ar livre é viável o ano todo, com atenção ao calor e à umidade no verão e às chuvas de fim de tarde.',

  mobilidade:
    'São Caetano é servida pela Rodovia Anchieta e por uma malha urbana densa e bem conectada a São Paulo e às demais cidades do ABC.',

  corridas: [
    {
      nome: 'Prova de Reis de São Caetano do Sul',
      descricao:
        'Tradicional prova de 10 km do ABC, já em dezenas de edições, com largada na Av. Presidente Kennedy.',
    },
    {
      nome: 'Evoque Run São Caetano',
      descricao:
        'Provas de 5 km e 10 km, com largada na Av. Presidente Kennedy.',
    },
  ],
  culturaEsportiva:
    'A cidade tem tradição esportiva forte (referência no basquete e no futsal do ABC) e calendário consolidado de corridas de rua, com alta adesão à atividade física pela renda e pela infraestrutura.',
  academias:
    'A oferta é premium — academias de alto padrão e estúdios boutique —, complementada por parques com pistas de cooper cobertas que permitem treinar em qualquer clima.',

  destaquesFitness: [
    'Maior IDHM e renda per capita do Brasil — público premium para personal.',
    'Densidade urbana extrema, que favorece o atendimento a domicílio e em condomínio.',
    'Pistas de cooper cobertas (Chico Mendes) para treino independente de chuva.',
    'Prova de Reis como evento-âncora para captação e periodização de corredores.',
  ],

  precos: {
    avulsaMin: 90,
    avulsaMax: 220,
    mensalMin: 450,
    mensalMax: 1300,
    onlineMin: 200,
    onlineMax: 520,
  },

  conclusao:
    'Maior IDHM do Brasil e coração do ABC, São Caetano do Sul tem público premium e ótima infraestrutura esportiva. Um personal trainer ajuda a aproveitar o Espaço Verde Chico Mendes e o Bosque do Povo com método, com forte espaço para atendimento personalizado e online.',

  vizinhas: ['santo-andre-sp', 'sao-paulo-sp'],

  fontes: [
    { nome: 'IBGE Cidades — São Caetano do Sul', url: 'https://cidades.ibge.gov.br/brasil/sp/sao-caetano-do-sul/panorama' },
    { nome: 'Prefeitura de São Caetano do Sul', url: 'https://www.saocaetanodosul.sp.gov.br/' },
    { nome: 'Atlas Brasil — IDHM', url: 'https://www.atlasbrasil.org.br/' },
  ],
  atualizadoEm: '2026-06-29',
};
