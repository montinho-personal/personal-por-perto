import type { Cidade } from '../../lib/types';

export const cidade: Cidade = {
  slug: 'nova-lima-mg',
  nome: 'Nova Lima',
  uf: 'MG',
  estado: 'Minas Gerais',
  estadoSlug: 'minas-gerais',
  regiao: 'Sudeste',
  gentilico: 'nova-limense',
  tipo: 'cidade',

  populacao: 111697,
  populacaoAno: 2022,
  idhm: 0.813,
  idhmClasse: 'muito alto',
  altitudeM: 722,

  resumoEconomico:
    'Integrante da Região Metropolitana de Belo Horizonte, a cerca de 22 km da capital, Nova Lima tem o maior IDHM e a maior renda per capita de Minas. Historicamente cidade de mineração (ouro e ferro), hoje é polo de alto padrão: bairros como Vila da Serra, Vale do Sereno e Vale dos Cristais concentram torres empresariais, sedes corporativas e hospitais de referência.',

  mercado:
    'A população de altíssima renda concentrada em condomínios e bairros de luxo sustenta forte demanda por estúdios premium, personal training e treinamento outdoor/trail.',

  bairrosNobres: ['Vila da Serra', 'Vale do Sereno', 'Vale dos Cristais', 'Alphaville (Lagoa dos Ingleses)'],
  bairrosPopulares: ['Centro', 'Jardim Canadá', 'Ouro Velho Mansões', 'Honório Bicalho'],

  parques: [
    {
      nome: 'Praça-Parque Portugal',
      descricao:
        'Tem pista de caminhada e academia ao ar livre, espaço público de treino no dia a dia.',
    },
    {
      nome: 'Lagoa dos Ingleses',
      descricao:
        'Na região de Alphaville, é área de natureza usada para ciclismo e corrida, sede de etapas de mountain bike.',
    },
    {
      nome: 'Academias ao ar livre municipais',
      descricao:
        'A prefeitura instalou diversas unidades de ginástica ao ar livre pela cidade, ampliando o acesso ao treino.',
    },
  ],
  ciclovias:
    'A requalificação da MG-030 prevê cerca de 2 km de via com ciclovia e parque linear; a rede ainda está em implantação.',

  clima:
    'O clima é tropical de altitude, ameno, com média anual em torno de 21 °C e manhãs frescas.',
  climaTreino:
    'O clima ameno é favorável ao treino ao ar livre o ano todo, com o relevo de serra propício a trail e ciclismo.',

  mobilidade:
    'O acesso principal a Belo Horizonte é pela MG-030 (em ampliação), com proximidade das BR-040 e BR-356.',

  corridas: [
    {
      nome: 'Desafio Brou Nova Lima',
      descricao:
        'Trail run (5, 20 e 50 km) e mountain bike no distrito de Honório Bicalho, aos pés da Serra da Gandarela.',
    },
    {
      nome: 'CIMTB Levorin',
      descricao:
        'Etapa internacional de mountain bike na Lagoa dos Ingleses, pontuável para o ranking mundial.',
    },
  ],
  culturaEsportiva:
    'A cidade tem forte vocação para esportes outdoor de natureza (trail run e mountain bike), graças ao relevo de serra e às áreas verdes preservadas, com público de alta renda ligado a ciclismo e corrida.',
  academias:
    'A oferta é premium — estúdios e personal training —, complementada por condomínios de luxo com clubes e áreas verdes e por uma cena forte de trail e MTB.',

  destaquesFitness: [
    'Maior IDHM e renda de Minas — público premium para personal e estúdios.',
    'Capital regional de trail run e mountain bike (CIMTB, Desafio Brou).',
    'Relevo de serra e clima ameno — treino outdoor o ano todo.',
    'Condomínios de luxo (Alphaville/Lagoa dos Ingleses) com clubes e áreas verdes.',
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
    'Maior renda de Minas e portão da Serra da Gandarela, Nova Lima une público premium e uma cena de trail e MTB de nível internacional. Um personal trainer encontra aqui terreno ideal para treino premium, presencial e online, e para preparação de provas de montanha.',

  vizinhas: ['belo-horizonte-mg', 'contagem-mg'],

  fontes: [
    { nome: 'IBGE Cidades — Nova Lima', url: 'https://cidades.ibge.gov.br/brasil/mg/nova-lima/panorama' },
    { nome: 'Prefeitura de Nova Lima', url: 'https://www.novalima.mg.gov.br/' },
    { nome: 'Atlas Brasil — IDHM', url: 'https://www.atlasbrasil.org.br/' },
  ],
  atualizadoEm: '2026-06-29',
};
