import type { Cidade } from '../../lib/types';

export const cidade: Cidade = {
  slug: 'itabira-mg',
  nome: 'Itabira',
  uf: 'MG',
  estado: 'Minas Gerais',
  estadoSlug: 'minas-gerais',
  regiao: 'Sudeste',
  gentilico: 'itabirano',
  tipo: 'cidade',

  populacao: 113343,
  populacaoAno: 2022,
  idhm: 0.756,
  idhmClasse: 'alto',
  altitudeM: 779,

  resumoEconomico:
    'Na região central de Minas, Itabira é um dos maiores polos de mineração de ferro do país — berço da Vale —, atividade que estrutura a economia local. Terra natal de Carlos Drummond de Andrade, é conhecida como a "cidade da poesia", com peso cultural e turismo literário.',

  mercado:
    'Cidade de porte médio com renda relativamente alta puxada pela mineração, sustenta rede consolidada de academias e estúdios, com presença em plataformas corporativas.',

  bairrosNobres: ['Penha', 'Praia', 'Centro', 'Pará'],
  bairrosPopulares: ['Areão', 'Campestre', 'Gabiroba', 'Santa Rita'],

  parques: [
    {
      nome: 'Parque Natural Municipal do Intelecto',
      descricao:
        'Cerca de 21 hectares de Mata Atlântica no centro, com trilhas para caminhada.',
    },
    {
      nome: 'Pico do Amor',
      descricao:
        'Mirante com trilha conectada ao Intelecto, usado para caminhada e treino de subida.',
    },
    {
      nome: 'Praça do Areão',
      descricao:
        'Praça central tombada, ponto de encontro e de uso público para caminhada.',
    },
  ],
  ciclovias:
    'A extensão da malha cicloviária ainda não é divulgada em fonte oficial.',

  clima:
    'O clima é tropical de altitude, ameno, com invernos secos e amenos.',
  climaTreino:
    'A altitude (cerca de 780 m) e o clima ameno favorecem o treino de resistência e a atividade externa boa parte do ano.',

  mobilidade:
    'O acesso principal é pela BR-381 (Belo Horizonte–Vale do Aço), eixo logístico da mineração.',

  corridas: [
    {
      nome: 'Corrida da Lua (Corrida Noturna de Itabira)',
      descricao:
        'Promovida pela prefeitura, com caminhada de 3,5 km e corrida de 5 km.',
    },
    {
      nome: 'Corrida Rara de Itabira',
      descricao:
        'Prova de rua anual, parte do calendário esportivo local.',
    },
  ],
  culturaEsportiva:
    'A cidade tem associação de corredores de rua ativa e calendário municipal de provas, com portais locais agregando os eventos esportivos.',
  academias:
    'A oferta reúne academias e estúdios, com renda da mineração acima da média regional, complementada por trilhas urbanas como as do Intelecto e do Pico do Amor.',

  destaquesFitness: [
    'Renda da mineração, que sustenta um mercado fitness acima da média regional.',
    'Clima de altitude ameno, bom para outdoor o ano todo.',
    'Cena de corrida de rua organizada (provas noturnas e diurnas).',
    'Trilhas urbanas (Intelecto, Pico do Amor) que integram treino e natureza.',
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
    'Berço da Vale e cidade da poesia, Itabira une renda da mineração, clima de altitude e trilhas urbanas. Um personal trainer ajuda a aproveitar o Parque do Intelecto e o Pico do Amor com método, num clima favorável ao treino o ano todo.',

  vizinhas: ['belo-horizonte-mg', 'governador-valadares-mg', 'ipatinga-mg'],

  fontes: [
    { nome: 'IBGE Cidades — Itabira', url: 'https://cidades.ibge.gov.br/brasil/mg/itabira/panorama' },
    { nome: 'Prefeitura de Itabira', url: 'https://www.itabira.mg.gov.br/' },
    { nome: 'Atlas Brasil — IDHM', url: 'https://www.atlasbrasil.org.br/' },
  ],
  atualizadoEm: '2026-06-29',
};
