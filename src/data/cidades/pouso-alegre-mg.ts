import type { Cidade } from '../../lib/types';

export const cidade: Cidade = {
  slug: 'pouso-alegre-mg',
  nome: 'Pouso Alegre',
  uf: 'MG',
  estado: 'Minas Gerais',
  estadoSlug: 'minas-gerais',
  regiao: 'Sudeste',
  gentilico: 'pouso-alegrense',
  tipo: 'cidade',

  populacao: 152212,
  populacaoAno: 2022,
  idhm: 0.774,
  idhmClasse: 'alto',
  altitudeM: 832,

  resumoEconomico:
    'Principal polo industrial e logístico do sul de Minas, às margens da Fernão Dias, no eixo São Paulo–Belo Horizonte, Pouso Alegre tem forte parque farmacêutico (Cimed, União Química, Cristália) e alimentício (Unilever, General Mills), além de robusto setor atacadista. É também polo regional de saúde e universitário.',

  mercado:
    'Cidade universitária e de classe média em expansão, tem demanda crescente por academias e treinamento; o clima ameno de altitude favorece o treino ao ar livre o ano todo.',

  bairrosNobres: ['Fátima', 'Altaville', 'João Paulo', 'Pousada dos Campos'],
  bairrosPopulares: ['São Geraldo', 'Cidade Jardim', 'São João', 'Centro'],

  parques: [
    {
      nome: 'Parque Francisco de Assis Vilela (Lago do Fórum)',
      descricao:
        'Tem academia ao ar livre, calçadas e pista no entorno e playground, aberto todos os dias.',
    },
    {
      nome: 'Parque Natural Municipal (Horto Florestal)',
      descricao:
        'Cerca de 30 mil m² com pista de caminhada e corrida de 900 m, academia ao ar livre, quadra de areia e lago.',
    },
    {
      nome: 'Parque Municipal Antônio Molinari',
      descricao:
        'Tem ciclovia, pista de caminhada e academia ao ar livre.',
    },
  ],
  ciclovias:
    'Há ciclovia no Parque Municipal Antônio Molinari; a extensão total da malha urbana ainda não é divulgada em fonte oficial.',

  clima:
    'O clima é tropical de altitude (cerca de 832 m), com temperaturas amenas grande parte do ano e invernos secos e frescos.',
  climaTreino:
    'O clima ameno favorece o treino ao ar livre e a corrida em qualquer estação, com baixo risco de estresse térmico.',

  mobilidade:
    'Pouso Alegre é cortada pela BR-381 (Rodovia Fernão Dias), a cerca de 280 km de São Paulo e 380 km de Belo Horizonte, e atendida também pela BR-459.',

  corridas: [
    {
      nome: 'Movimenta Sest Senat — Pouso Alegre',
      descricao:
        'Corrida de rua de 5 km e 10 km, com caminhada e prova kids.',
    },
    {
      nome: 'Corrida Rock Run Pouso Alegre',
      descricao:
        'Prova de rua da cidade, ao lado de eventos como a Corrida Arteris.',
    },
  ],
  culturaEsportiva:
    'A cidade tem perfil universitário e boa qualidade de vida, que estimulam a corrida de rua e as atividades ao ar livre nos parques, com calendário recorrente de provas.',
  academias:
    'A oferta reúne academias e estúdios, com público universitário e de classe média em crescimento, complementada por uma boa rede de parques com academia ao ar livre.',

  destaquesFitness: [
    'Clima ameno de altitude — treino outdoor o ano todo.',
    'Rede de parques com academia ao ar livre e pista de corrida (Lago do Fórum, Horto, Molinari).',
    'Público universitário e classe média em crescimento — mercado aquecido.',
    'Calendário de corridas de rua consolidado.',
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
    'Polo industrial e universitário do sul de Minas, Pouso Alegre une clima ameno de altitude e boa rede de parques. Um personal trainer ajuda a aproveitar o Lago do Fórum e o Horto com método, mantendo a constância o ano todo.',

  vizinhas: ['pocos-de-caldas-mg', 'varginha-mg'],

  fontes: [
    { nome: 'IBGE Cidades — Pouso Alegre', url: 'https://cidades.ibge.gov.br/brasil/mg/pouso-alegre/panorama' },
    { nome: 'Prefeitura de Pouso Alegre', url: 'https://www.pousoalegre.mg.gov.br/' },
    { nome: 'Atlas Brasil — IDHM', url: 'https://www.atlasbrasil.org.br/' },
  ],
  atualizadoEm: '2026-06-29',
};
