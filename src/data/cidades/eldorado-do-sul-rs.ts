import type { Cidade } from '../../lib/types';

export const cidade: Cidade = {
  slug: 'eldorado-do-sul-rs',
  nome: 'Eldorado do Sul',
  uf: 'RS',
  estado: 'Rio Grande do Sul',
  estadoSlug: 'rio-grande-do-sul',
  regiao: 'Sul',
  gentilico: 'eldoradense',
  tipo: 'cidade',

  populacao: 39559,
  populacaoAno: 2022,
  idhm: 0.720,
  idhmClasse: 'alto',
  altitudeM: 20,

  resumoEconomico:
    'Município da Região Metropolitana de Porto Alegre, Eldorado do Sul fica na margem direita do Lago Guaíba, praticamente em frente à capital e ligada a ela pela BR-290 (Free Way). A economia mistura o setor de serviços e o comércio da região metropolitana, a indústria e a logística — favorecida pela posição junto à Free Way, corredor de cargas do estado — com uma base agrícola de peso na rizicultura (arroz irrigado) e na pecuária das várzeas do Jacuí. A cidade também sedia a Estação Experimental Agronômica da UFRGS, referência em pesquisa agrícola.',

  mercado:
    'Cidade-dormitório e de perfil metropolitano, Eldorado do Sul tem seu mercado fitness bastante conectado ao de Porto Alegre e Guaíba, com muitos moradores treinando na própria cidade ou na capital. A procura por personal trainers cresce entre quem busca acompanhamento próximo de casa, com atenção à retomada da rotina após o impacto das enchentes de 2024, que atingiram parte significativa da área urbana.',

  bairrosNobres: ['Sans Souci', 'Centro', 'Medianeira', 'Parque Eldorado'],
  bairrosPopulares: ['Cidade Verde', 'Vila da Paz', 'Picada', 'Sol Nascente'],

  parques: [
    {
      nome: 'Orla do Guaíba (margem de Eldorado)',
      descricao:
        'A frente da cidade para o Lago Guaíba, com trechos usados para caminhada e contemplação; a paisagem à beira-lago é um dos cartões-postais do município, em processo de recuperação após as cheias.',
    },
    {
      nome: 'Área de Proteção Ambiental do Delta do Jacuí',
      descricao:
        'Parte do território municipal integra a APA do Delta do Jacuí, mosaico de ilhas, banhados e canais entre o Jacuí e o Guaíba, com trechos de natureza preservada próximos à área urbana.',
    },
    {
      nome: 'Estação Experimental Agronômica da UFRGS',
      descricao:
        'Campus de pesquisa da Faculdade de Agronomia da UFRGS às margens da BR-290 (km 146), com amplas áreas verdes e experimentais que marcam a paisagem rural do município.',
    },
  ],
  ciclovias:
    'A estrutura cicloviária é modesta e concentrada em trechos da área urbana; boa parte do pedal e da corrida acontece nas vias locais e nas estradas de acesso, sempre com atenção ao tráfego intenso da BR-290.',

  clima:
    'O clima é subtropical úmido, com as quatro estações bem marcadas: verões quentes, que podem passar dos 35 °C, e invernos frios e úmidos, com temperaturas próximas de zero em algumas madrugadas. A proximidade do Guaíba e das várzeas deixa o ar úmido, e as chuvas se distribuem ao longo do ano.',
  climaTreino:
    'No verão, treinar cedo ou no fim da tarde ajuda a fugir do calor e da umidade; no inverno, o frio pede aquecimento reforçado e agasalho adequado. A baixa altitude e as áreas alagáveis tornam o planejamento de horário importante em dias de chuva forte.',

  mobilidade:
    'A mobilidade de Eldorado do Sul gira em torno da BR-290 (Free Way), que liga a cidade a Porto Alegre e a Guaíba e concentra o fluxo de moradores que trabalham ou estudam na capital. O transporte é feito por ônibus metropolitanos, e a posição na Free Way reforça o papel logístico do município no escoamento de cargas do estado.',

  corridas: [
    {
      nome: 'Circuito de corridas da Região Metropolitana de Porto Alegre',
      descricao:
        'Eldorado do Sul integra o calendário de corridas de rua da Grande Porto Alegre, com moradores participando de provas na capital e em cidades vizinhas da região metropolitana.',
    },
  ],
  culturaEsportiva:
    'A cultura esportiva é marcada pela ligação com a Grande Porto Alegre: caminhada e corrida nas vias locais, uso da orla do Guaíba para atividade ao ar livre e participação em provas da região metropolitana, num município que também tem forte identidade rural.',
  academias:
    'A oferta é formada principalmente por academias locais de musculação e treino funcional distribuídas pelos bairros centrais e residenciais, complementada pela proximidade com a estrutura fitness de Porto Alegre e Guaíba.',

  destaquesFitness: [
    'Município da Região Metropolitana de Porto Alegre, na margem direita do Lago Guaíba, ligado à capital pela BR-290 (Free Way).',
    'Orla do Guaíba e Área de Proteção Ambiental do Delta do Jacuí como cenário de atividade ao ar livre.',
    'Clima subtropical de quatro estações, que pede ajuste de horário e agasalho entre o verão quente e o inverno frio.',
    'Retomada da rotina de treino após as enchentes de 2024, que atingiram parte significativa da área urbana.',
  ],

  precos: {
    avulsaMin: 55,
    avulsaMax: 125,
    mensalMin: 270,
    mensalMax: 740,
    onlineMin: 130,
    onlineMax: 370,
  },

  conclusao:
    'Cidade metropolitana à beira do Guaíba e ligada a Porto Alegre pela Free Way, Eldorado do Sul combina rotina urbana, base rural e a paisagem do Delta do Jacuí. Um personal trainer ajuda a organizar o treino de acordo com o clima de quatro estações, aproveitar a orla e as vias locais e manter a constância na retomada da rotina após as cheias de 2024.',

  vizinhas: ['guaiba-rs', 'porto-alegre-rs'],

  fontes: [
    { nome: 'IBGE Cidades — Eldorado do Sul', url: 'https://cidades.ibge.gov.br/brasil/rs/eldorado-do-sul/panorama' },
    { nome: 'Prefeitura de Eldorado do Sul', url: 'https://www.eldorado.rs.gov.br/' },
    { nome: 'Atlas Brasil — IDHM', url: 'https://www.atlasbrasil.org.br/' },
  ],
  atualizadoEm: '2026-06-29',
};
