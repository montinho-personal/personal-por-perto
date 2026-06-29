import type { Cidade } from '../../lib/types';

export const cidade: Cidade = {
  slug: 'gravatai-rs',
  nome: 'Gravataí',
  uf: 'RS',
  estado: 'Rio Grande do Sul',
  estadoSlug: 'rio-grande-do-sul',
  regiao: 'Sul',
  gentilico: 'gravataiense',
  tipo: 'cidade',

  populacao: 265074,
  populacaoAno: 2022,
  idhm: 0.736,
  idhmClasse: 'alto',

  resumoEconomico:
    'Integrante da Região Metropolitana de Porto Alegre, Gravataí é um polo industrial cuja peça-chave é o complexo automotivo da General Motors, que produz mais de mil veículos por dia e gera milhares de empregos diretos e indiretos. A fábrica elevou a cidade ao grupo das maiores economias do estado, com comércio também forte.',

  mercado:
    'A grande população metropolitana e a base industrial assalariada favorecem academias de bairro e assessorias; eventos corporativos, como a corrida da GM, reforçam a cultura de atividade física.',

  bairrosNobres: ['São Vicente', 'Prado', 'Parque dos Anjos', 'Várzea Grande'],
  bairrosPopulares: ['Santa Fé', 'Morungava', 'Barnabé', 'Vila Branca'],

  parques: [
    {
      nome: 'Praça Xangai',
      descricao:
        'No bairro Santa Fé, tem quadra poliesportiva, pista de caminhada, academia ao ar livre e playground.',
    },
    {
      nome: 'Orla do Rio Gravataí (Beira-Rio)',
      descricao:
        'Área revitalizada com playground, academia ao ar livre e áreas de estar.',
    },
    {
      nome: 'Eco Bike Park Vento Negro',
      descricao:
        'Maior trilha de bike em meio à natureza do RS, com cerca de 5,3 km.',
    },
  ],
  ciclovias:
    'A cidade expande ciclovias urbanas, com destaque para o Eco Bike Park Vento Negro (cerca de 5,3 km) e circuitos de cicloturismo.',

  clima:
    'O clima é subtropical úmido, com quatro estações marcadas e invernos frios.',
  climaTreino:
    'A sazonalidade é clara: o treino ao ar livre é forte na primavera e no verão, com maior procura por ambientes cobertos no inverno gaúcho.',

  mobilidade:
    'Gravataí é cortada pela BR-290 (Free Way, ligação Porto Alegre–Litoral, onde fica o complexo da GM) e pela RS-030 (eixo metropolitano rumo ao litoral norte).',

  corridas: [
    {
      nome: 'Chevrolet Run (GM)',
      descricao:
        'Corrida promovida pela General Motors na região do complexo industrial, com 3 km, 5 km e 10 km.',
    },
    {
      nome: 'Corridas e caminhadas metropolitanas',
      descricao:
        'A cidade recebe provas do calendário da região metropolitana de Porto Alegre.',
    },
  ],
  culturaEsportiva:
    'Cidade industrial metropolitana, Gravataí tem forte vínculo empresa-comunidade no esporte (a corrida da GM) e uma cultura crescente de pedal e cicloturismo.',
  academias:
    'A oferta reúne academias de bairro e assessorias, com mercado amplo na região metropolitana, complementada por praças, pela orla do Rio Gravataí e pelo bike park.',

  destaquesFitness: [
    'Praça Xangai e orla do Rio Gravataí: academias ao ar livre e pistas de caminhada de bairro.',
    'Eco Bike Park Vento Negro: a maior trilha de bike do RS para ciclismo e MTB.',
    'Corrida da GM (Chevrolet Run), que consolida a cultura de corrida de massa.',
    'Mercado amplo (cerca de 265 mil habitantes) na RM de Porto Alegre.',
  ],

  precos: {
    avulsaMin: 65,
    avulsaMax: 155,
    mensalMin: 340,
    mensalMax: 900,
    onlineMin: 170,
    onlineMax: 430,
  },

  conclusao:
    'Polo automotivo da Grande Porto Alegre, Gravataí tem mercado amplo e cultura de corrida e pedal em alta. Um personal trainer ajuda a aproveitar as praças, a orla do rio e o bike park com método, ajustando a rotina à sazonalidade do clima gaúcho.',

  vizinhas: ['porto-alegre-rs', 'canoas-rs'],

  fontes: [
    { nome: 'IBGE Cidades — Gravataí', url: 'https://cidades.ibge.gov.br/brasil/rs/gravatai/panorama' },
    { nome: 'Prefeitura de Gravataí', url: 'https://www.gravatai.rs.gov.br/' },
    { nome: 'Atlas Brasil — IDHM', url: 'https://www.atlasbrasil.org.br/' },
  ],
  atualizadoEm: '2026-06-29',
};
