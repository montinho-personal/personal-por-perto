import type { Cidade } from '../../lib/types';

export const cidade: Cidade = {
  slug: 'resende-rj',
  nome: 'Resende',
  uf: 'RJ',
  estado: 'Rio de Janeiro',
  estadoSlug: 'rio-de-janeiro',
  regiao: 'Sudeste',
  gentilico: 'resendense',
  tipo: 'cidade',

  populacao: 129612,
  populacaoAno: 2022,
  idhm: 0.768,
  idhmClasse: 'alto',
  altitudeM: 439,

  resumoEconomico:
    'Cidade do sul fluminense, entre a Serra da Mantiqueira e o Rio Paraíba do Sul, Resende é um dos maiores polos industriais e automotivos do estado — sede da Volkswagen Caminhões e Ônibus, além de outras montadoras e indústrias químicas. Sedia a AMAN (Academia Militar das Agulhas Negras), com forte presença militar, e é porta de entrada de Penedo, Visconde de Mauá e do Parque Nacional do Itatiaia.',

  mercado:
    'O mercado é aquecido por uma classe média consolidada e por um grande contingente militar (AMAN) com cultura de condicionamento físico, sustentando a demanda por academias e personal trainers.',

  bairrosNobres: ['Comercial', 'Jardim Jalisco', 'Campos Elíseos', 'Morada do Castelo'],
  bairrosPopulares: ['Jardim Alegria', 'Baixada da Olaria', 'Morada do Contorno', 'Vila Julieta'],

  parques: [
    {
      nome: 'Parque das Águas',
      descricao:
        'Cerca de 50 mil m² às margens do Rio Paraíba do Sul, com pista de caminhada de aproximadamente 1 km, academia ao ar livre, área de slackline, rampa de skate, quadra de areia e lago.',
    },
    {
      nome: 'Parque Urbano Rio Branco',
      descricao:
        'Espaço público frequentado para atividades ao ar livre no centro da cidade.',
    },
    {
      nome: 'Parque Nacional do Itatiaia',
      descricao:
        'Na divisa do município, oferece trilhas e montanhismo de altitude (até o Pico das Agulhas Negras, a 2.791 m), base para trail e treino de montanha.',
    },
  ],
  ciclovias:
    'A extensão da malha cicloviária urbana ainda não é divulgada em fonte oficial.',

  clima:
    'O clima é tropical de altitude, com média anual em torno de 21 °C, ameno e raramente com calor extremo.',
  climaTreino:
    'É favorável treinar ao ar livre o ano todo; as manhãs e noites frescas de inverno são ótimas para correr.',

  mobilidade:
    'Resende é cortada pela Via Dutra (BR-116), eixo Rio–São Paulo, e atendida pela BR-393, em posição estratégica entre as duas rodovias.',

  corridas: [
    {
      nome: 'Circuito Agulhas Negras de Corrida Rústica',
      descricao:
        'Etapas realizadas em Resende, incluindo o Parque das Águas.',
    },
    {
      nome: 'Corrida Noturna de Resende',
      descricao:
        'Prova urbana do calendário municipal, ao lado de eventos como o Resende Speed Bike e corridas de montanha.',
    },
  ],
  culturaEsportiva:
    'A cidade tem forte cultura de esportes ao ar livre e de aventura (mountain bike, corrida de montanha e trilhas no Itatiaia e na Mantiqueira), com a influência militar da AMAN no condicionamento físico.',
  academias:
    'A oferta de academias e estúdios é sustentada pela classe média e pelo público militar, complementada pelo Parque das Águas e pela proximidade do Itatiaia.',

  destaquesFitness: [
    'Parque das Águas como hub público de treino à beira do Paraíba do Sul.',
    'Proximidade do Parque Nacional do Itatiaia e da Mantiqueira para trail e altitude.',
    'Grande público militar (AMAN) com cultura de performance física.',
    'Clima ameno de altitude, favorável ao treino outdoor o ano inteiro.',
  ],

  precos: {
    avulsaMin: 70,
    avulsaMax: 165,
    mensalMin: 350,
    mensalMax: 940,
    onlineMin: 170,
    onlineMax: 430,
  },

  conclusao:
    'Polo automotivo e militar do sul fluminense, Resende une clima ameno, o Parque das Águas e a serra do Itatiaia. Um personal trainer ajuda a aproveitar esse cenário com método, do treino urbano ao trail de montanha.',

  vizinhas: ['volta-redonda-rj', 'angra-dos-reis-rj'],

  capaArte: {
    src: '/capas-cidade/resende-rj.webp',
    w: 1200,
    h: 675,
    alt: 'Personal trainer em Resende (RJ) em arte com o Pico das Agulhas Negras, o rio Paraíba do Sul e a paisagem de Visconde de Mauá, com o treino em primeiro plano — Personal por Perto',
    legenda: 'Treino personalizado em Resende: foco, disciplina e resultados no sul fluminense, aos pés da Serra da Mantiqueira.',
  },
  fontes: [
    { nome: 'IBGE Cidades — Resende', url: 'https://cidades.ibge.gov.br/brasil/rj/resende/panorama' },
    { nome: 'Prefeitura de Resende', url: 'https://www.resende.rj.gov.br/' },
    { nome: 'Atlas Brasil — IDHM', url: 'https://www.atlasbrasil.org.br/' },
  ],
  atualizadoEm: '2026-09-02',
};
