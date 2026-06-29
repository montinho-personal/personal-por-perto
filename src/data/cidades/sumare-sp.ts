import type { Cidade } from '../../lib/types';

export const cidade: Cidade = {
  slug: 'sumare-sp',
  nome: 'Sumaré',
  uf: 'SP',
  estado: 'São Paulo',
  estadoSlug: 'sao-paulo',
  regiao: 'Sudeste',
  gentilico: 'sumareense',
  tipo: 'cidade',

  populacao: 279545,
  populacaoAno: 2022,
  idhm: 0.762,
  idhmClasse: 'alto',
  altitudeM: 616,

  resumoEconomico:
    'Integrante da Região Metropolitana de Campinas, Sumaré é forte polo industrial e logístico, cortado pelas rodovias Anhanguera e Bandeirantes e pela ferrovia. Faz parte do polo têxtil paulista, e o distrito de Nova Veneza concentra indústria pesada, com a proximidade de Paulínia atraindo logística.',

  mercado:
    'Cidade populosa e de perfil industrial, tem demanda concentrada em academias de bairro e estúdios, com público que busca relação custo-benefício, num mercado mais acessível que o de Campinas.',

  bairrosNobres: ['Jardim das Estâncias', 'Residencial Gramado', 'Jardim Bom Retiro', 'Parque Itália'],
  bairrosPopulares: ['Maria Antônia', 'Matão', 'Área Cura', 'Jardim Bandeirantes'],

  parques: [
    {
      nome: 'Horto Florestal',
      descricao:
        'Em torno da represa de abastecimento, tem trilhas de caminhada e área arborizada.',
    },
    {
      nome: 'Parque da Floresta (Represa Marcelo Pedroni)',
      descricao:
        'Área arborizada muito frequentada nos fins de semana, ao lado de um centro de lazer.',
    },
    {
      nome: 'Centro Esportivo municipal',
      descricao:
        'Espaço público com quadras e áreas para atividade física, usado em corridas e caminhadas.',
    },
  ],
  ciclovias:
    'A extensão da malha cicloviária ainda não é divulgada em fonte oficial.',

  clima:
    'O clima é tropical de altitude, com verões quentes e chuvosos e invernos secos e amenos.',
  climaTreino:
    'No verão, os treinos ao ar livre rendem mais de manhã cedo e no fim de tarde; a janela seca e amena do inverno é ótima para correr.',

  mobilidade:
    'Sumaré é servida pelas rodovias Anhanguera (SP-330) e Bandeirantes (SP-348) e pela ferrovia, com forte conexão a Campinas e ao polo têxtil.',

  corridas: [
    {
      nome: 'Circuito de Corrida e Caminhada — Etapa Sumaré',
      descricao:
        'Etapa de circuito regional realizada no centro esportivo municipal.',
    },
    {
      nome: 'Corrida Rústica Fast Runners',
      descricao:
        'Prova rústica com percursos de 7,5 km (corrida) e 4 km (caminhada).',
    },
  ],
  culturaEsportiva:
    'Há forte tradição de corrida de rua e caminhada na região de Campinas, com circuitos regionais passando por Sumaré, além de futebol amador e centros esportivos municipais ativos.',
  academias:
    'A oferta reúne academias de bairro e estúdios em expansão, complementada por espaços verdes públicos como o Horto e o Parque da Floresta.',

  destaquesFitness: [
    'Mercado de academias acessível e em expansão, junto ao crescimento populacional.',
    'Espaços verdes públicos (Horto, Parque da Floresta) para treino funcional e outdoor.',
    'Calendário regional de corridas com etapas locais.',
    'Proximidade de Campinas, que amplia a oferta de cursos e formação.',
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
    'Polo industrial da RM de Campinas, Sumaré tem mercado fitness acessível e bons espaços verdes. Um personal trainer ajuda a aproveitar o Horto e o Parque da Floresta com método, com a estrutura de Campinas logo ao lado.',

  vizinhas: ['campinas-sp', 'americana-sp'],

  fontes: [
    { nome: 'IBGE Cidades — Sumaré', url: 'https://cidades.ibge.gov.br/brasil/sp/sumare/panorama' },
    { nome: 'Prefeitura de Sumaré', url: 'https://www.sumare.sp.gov.br/' },
    { nome: 'Atlas Brasil — IDHM', url: 'https://www.atlasbrasil.org.br/' },
  ],
  atualizadoEm: '2026-06-29',
};
