import type { Cidade } from '../../lib/types';

export const cidade: Cidade = {
  slug: 'catanduva-sp',
  nome: 'Catanduva',
  uf: 'SP',
  estado: 'São Paulo',
  estadoSlug: 'sao-paulo',
  regiao: 'Sudeste',
  gentilico: 'catanduvense',
  tipo: 'cidade',

  populacao: 115791,
  populacaoAno: 2022,
  idhm: 0.785,
  idhmClasse: 'alto',
  altitudeM: 503,

  resumoEconomico:
    'Cidade do noroeste paulista, Catanduva é polo regional de comércio e serviços e referência em saúde — a Fundação Padre Albino atende cerca de 19 municípios e 300 mil pessoas da região. Tem forte base sucroalcooleira, com usinas históricas no entorno.',

  mercado:
    'O mercado é consolidado, de cidade-polo regional, com rede ampla de academias que atende também a população flutuante de municípios vizinhos.',

  bairrosNobres: ['Higienópolis', 'Altos do Higienópolis', 'Cidade Jardim', 'Colina do Sol'],
  bairrosPopulares: ['Jardim Bom Pastor', 'Parque Iracema', 'Parque Glória', 'São Francisco'],

  parques: [
    {
      nome: 'Pista de caminhada do Parque de Eventos',
      descricao:
        'Pista para caminhada e corrida junto ao Parque de Eventos.',
    },
    {
      nome: 'Complexo esportivo Anuar Pachá',
      descricao:
        'No Parque Iracema, é equipamento da Secretaria Municipal de Esportes para várias modalidades.',
    },
    {
      nome: 'Praça Papa João Paulo II',
      descricao:
        'No centro, é arena de eventos esportivos, incluindo corridas de rua.',
    },
  ],
  ciclovias:
    'A extensão da malha cicloviária ainda não é divulgada em fonte oficial.',

  clima:
    'O clima é quente do interior paulista, com verões quentes e chuvosos e inverno seco.',
  climaTreino:
    'No verão, vale priorizar os horários de menor calor (manhã cedo e fim de tarde) e a hidratação; o inverno seco favorece o treino ao ar livre.',

  mobilidade:
    'Catanduva é servida pela Rodovia Washington Luís (SP-310), com conexão à Comandante João Ribeiro de Barros (SP-326).',

  corridas: [
    {
      nome: 'Circuito Sesc de Corridas — Etapa Catanduva',
      descricao:
        'Prova anual com percursos variados, parte do circuito do Sesc.',
    },
    {
      nome: 'Agro Power Run',
      descricao:
        'Corrida de rua de 5 km e 10 km, com arena na Praça Papa João Paulo II.',
    },
  ],
  culturaEsportiva:
    'Cidade do interior com tradição em corrida de rua e forte oferta de academias, com o esporte de base articulado pela Secretaria Municipal de Esportes em ginásios e complexos públicos.',
  academias:
    'A oferta reúne academias e estúdios que atendem o público da microrregião, complementada por complexos esportivos municipais públicos.',

  destaquesFitness: [
    'Polo regional de saúde (Fundação Padre Albino), que reforça a cultura de cuidado e bem-estar.',
    'Calendário recorrente de corridas de rua (Sesc, Agro Power Run).',
    'Rede consolidada de academias atendendo o público da microrregião.',
    'Complexos esportivos municipais disponíveis para treino.',
  ],

  precos: {
    avulsaMin: 60,
    avulsaMax: 150,
    mensalMin: 320,
    mensalMax: 880,
    onlineMin: 160,
    onlineMax: 420,
  },

  conclusao:
    'Polo de saúde e do sucroalcooleiro no noroeste paulista, Catanduva tem mercado fitness consolidado e calendário de corridas ativo. Um personal trainer ajuda a aproveitar os espaços públicos com método, ajustando horários e hidratação ao calor do interior.',

  vizinhas: ['sao-jose-do-rio-preto-sp', 'ribeirao-preto-sp'],

  fontes: [
    { nome: 'IBGE Cidades — Catanduva', url: 'https://cidades.ibge.gov.br/brasil/sp/catanduva/panorama' },
    { nome: 'Prefeitura de Catanduva', url: 'https://www.catanduva.sp.gov.br/' },
    { nome: 'Atlas Brasil — IDHM', url: 'https://www.atlasbrasil.org.br/' },
  ],
  atualizadoEm: '2026-06-29',
};
