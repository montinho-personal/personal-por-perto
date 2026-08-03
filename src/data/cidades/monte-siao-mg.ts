import type { Cidade } from '../../lib/types';

export const cidade: Cidade = {
  slug: 'monte-siao-mg',
  nome: 'Monte Sião',
  uf: 'MG',
  estado: 'Minas Gerais',
  estadoSlug: 'minas-gerais',
  regiao: 'Sudeste',
  gentilico: 'monte-sionense',
  tipo: 'cidade',

  populacao: 24089,
  populacaoAno: 2022,
  idhm: 0.724,
  idhmClasse: 'alto',
  altitudeM: 850,

  resumoEconomico:
    'Conhecida como a Capital Nacional da Moda Tricô, Monte Sião vive da malha: são cerca de 1.200 pequenas indústrias e 1.500 lojas do setor, que respondem pela maior parte da arrecadação municipal. Na divisa com São Paulo e integrada ao circuito turístico das malhas do Sul de Minas, a cidade recebe ônibus de compristas o ano inteiro — com pico no inverno, quando o Festival de Inverno e a Fenat movimentam a temporada.',

  mercado:
    'O comércio de malhas cria uma rotina de trabalho intensa — lojistas, costureiras e empresários com jornadas longas — e a demanda por treino se concentra nas pontas do dia. O clima ameno de altitude, típico da região das águas do Sul de Minas, favorece caminhada e corrida ao ar livre em boa parte do ano.',

  bairrosNobres: ['Centro', 'Jardim Alvorada', 'Vila Nova', 'Morada do Sol'],
  bairrosPopulares: ['Santa Cruz', 'São Benedito', 'Jardim Serrano', 'Vila Rica'],

  parques: [
    {
      nome: 'Praça da Matriz e centro comercial',
      descricao:
        'O coração da cidade concentra as lojas de tricô, a vida social e as caminhadas do dia a dia — o centro compacto se percorre inteiro a pé.',
    },
    {
      nome: 'Estradas rurais e morros do entorno',
      descricao:
        'A zona rural de Monte Sião, com morros, cafezais e estradas de terra, é o cenário natural de caminhadas, trilhas e pedais — com o desnível do Sul de Minas como resistência gratuita.',
    },
    {
      nome: 'Circuito das cidades das águas',
      descricao:
        'A poucos quilômetros de balneários e estâncias vizinhas, a cidade se beneficia do turismo de bem-estar da região, que valoriza a vida ativa e o lazer ao ar livre.',
    },
  ],
  ciclovias:
    'O pedal acontece principalmente nas estradas rurais e nas rotas entre as cidades do circuito das malhas e das águas; a malha cicloviária urbana é limitada e sem extensão oficial divulgada.',

  clima:
    'Clima tropical de altitude, com verão chuvoso e inverno seco e frio — a temporada alta do comércio de malhas coincide com os meses mais gelados.',
  climaTreino:
    'O inverno seco favorece o treino ao ar livre no meio do dia; no verão, manhãs e fins de tarde são as janelas, com atenção às chuvas de tarde típicas da região.',

  mobilidade:
    'Na divisa entre Minas e São Paulo, Monte Sião fica a cerca de 160 km da capital paulista e se conecta pelas rodovias regionais a Socorro, Jacutinga e ao circuito das águas — o fluxo de turistas de compras é constante o ano todo.',

  corridas: [
    {
      nome: 'Provas do circuito Sul de Minas',
      descricao:
        'Corridas de rua e trilhas circulam pelas cidades das malhas e das águas ao longo do ano, com percursos de 5 km e 10 km e forte adesão regional.',
    },
  ],
  culturaEsportiva:
    'A cidade combina a cultura do trabalho têxtil com o estilo de vida ativo do Sul de Minas: caminhada nas estradas rurais, trilhas e eventos de inverno movimentam o calendário local.',
  academias:
    'A oferta reúne academias de musculação e personal trainers no centro e nos bairros, atendendo o público local — com agenda moldada pela rotina intensa do comércio de malhas.',

  destaquesFitness: [
    'Capital Nacional da Moda Tricô, com rotina de trabalho que valoriza o treino eficiente.',
    'Clima de altitude do Sul de Minas, propício ao treino ao ar livre.',
    'Morros e estradas rurais como cenário natural de caminhadas e pedais.',
    'Turismo de compras e de bem-estar que movimenta a cidade o ano inteiro.',
  ],

  precos: {
    avulsaMin: 50,
    avulsaMax: 120,
    mensalMin: 260,
    mensalMax: 720,
    onlineMin: 120,
    onlineMax: 360,
  },

  conclusao:
    'Entre malhas, morros e o clima ameno do Sul de Minas, Monte Sião tem tudo para transformar rotina intensa em vida ativa. Um personal trainer ajuda a encaixar o treino na agenda do comércio e a aproveitar o cenário de altitude da cidade.',

  vizinhas: ['socorro-sp', 'pocos-de-caldas-mg', 'alfenas-mg'],

  fontes: [
    { nome: 'IBGE Cidades — Monte Sião', url: 'https://cidades.ibge.gov.br/brasil/mg/monte-siao/panorama' },
    { nome: 'Prefeitura de Monte Sião', url: 'https://www.montesiao.mg.gov.br/' },
    { nome: 'Atlas Brasil — IDHM', url: 'https://www.atlasbrasil.org.br/' },
  ],
  atualizadoEm: '2026-08-03',
};
