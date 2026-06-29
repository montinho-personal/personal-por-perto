import type { Cidade } from '../../lib/types';

export const cidade: Cidade = {
  slug: 'gramado-rs',
  nome: 'Gramado',
  uf: 'RS',
  estado: 'Rio Grande do Sul',
  estadoSlug: 'rio-grande-do-sul',
  regiao: 'Sul',
  gentilico: 'gramadense',
  tipo: 'cidade',

  populacao: 40134,
  populacaoAno: 2022,
  idhm: 0.764,
  idhmClasse: 'alto',
  altitudeM: 830,

  resumoEconomico:
    'Cidade da Serra Gaúcha e principal polo de turismo de eventos do Brasil, Gramado tem o turismo respondendo por boa parte da economia, sustentado por centenas de hotéis, fábricas de chocolate e um calendário de eventos o ano inteiro (Natal Luz e Festival de Cinema). Recebe milhões de turistas por ano e tem alta renda ligada ao turismo, com clima frio de inspiração europeia.',

  mercado:
    'O mercado é aquecido pela alta renda e pelo perfil turístico-hoteleiro (resorts e SPAs com personal e wellness), com demanda por treino indoor e atendimento sazonal reforçada pelo inverno rigoroso.',

  bairrosNobres: ['Planalto', 'Bavária', 'Centro', 'Carniel'],
  bairrosPopulares: ['Floresta', 'Minuano', 'Avenida Central', 'Piratini'],

  parques: [
    {
      nome: 'Parque do Lago Joaquina Rita Bier',
      descricao:
        'Lago artificial com pista de corrida e caminhada de uso diário, em processo de revitalização que incluirá academia ao ar livre.',
    },
    {
      nome: 'Lago Negro',
      descricao:
        'Área verde com trilha e entorno arborizado para caminhada.',
    },
    {
      nome: 'Praças e vias do Centro',
      descricao:
        'Ruas arborizadas e praças usadas para caminhada e corrida na cidade compacta.',
    },
  ],
  ciclovias:
    'A extensão da rede cicloviária ainda não é divulgada em fonte oficial.',

  clima:
    'O clima é subtropical de altitude, com invernos frios e secos (mínimas abaixo de zero e geadas frequentes) e verão ameno.',
  climaTreino:
    'O inverno rigoroso da serra reforça a demanda por treino indoor; o treino ao ar livre concentra-se nas manhãs e tardes amenas.',

  mobilidade:
    'O acesso principal é pela RS-115, com ligação também pela RS-235.',

  corridas: [
    {
      nome: 'Meia Maratona Laghetto',
      descricao:
        'Percurso de 21 km integrando Gramado e Canela, com provas de 7 km, caminhada e kids.',
    },
    {
      nome: 'Maratona de Gramado',
      descricao:
        'Com percursos de 5 km, 10 km, 21 km e 42 km, unindo esporte e hospitalidade na serra.',
    },
  ],
  culturaEsportiva:
    'Há forte vocação para turismo esportivo, com provas de corrida que unem esporte, gastronomia e hospitalidade, além de corridas de montanha na Serra Gaúcha.',
  academias:
    'A oferta reúne academias e estúdios, com hotelaria de luxo favorecendo personal training e wellness, e o Lago Joaquina Rita Bier como principal espaço público de corrida.',

  destaquesFitness: [
    'Treino indoor como prioridade no inverno rigoroso de serra.',
    'Lago Joaquina Rita Bier como principal espaço público de corrida e caminhada.',
    'Turismo esportivo consolidado (Meia Maratona Laghetto, Maratona de Gramado).',
    'Público de alta renda e hotelaria de luxo, que favorecem personal e wellness.',
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
    'Capital do turismo de serra no Brasil, Gramado une alta renda, hotelaria de luxo e corridas que celebram a serra. Um personal trainer encontra aqui forte demanda por wellness e treino premium, equilibrando indoor no inverno com o outdoor das estações amenas.',

  vizinhas: ['caxias-do-sul-rs', 'bento-goncalves-rs'],

  fontes: [
    { nome: 'IBGE Cidades — Gramado', url: 'https://cidades.ibge.gov.br/brasil/rs/gramado/panorama' },
    { nome: 'Prefeitura de Gramado', url: 'https://www.gramado.rs.gov.br/' },
    { nome: 'Atlas Brasil — IDHM', url: 'https://www.atlasbrasil.org.br/' },
  ],
  atualizadoEm: '2026-06-29',
};
