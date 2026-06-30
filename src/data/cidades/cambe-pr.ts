import type { Cidade } from '../../lib/types';

export const cidade: Cidade = {
  slug: 'cambe-pr',
  nome: 'Cambé',
  uf: 'PR',
  estado: 'Paraná',
  estadoSlug: 'parana',
  regiao: 'Sul',
  gentilico: 'cambeense',
  tipo: 'cidade',

  populacao: 107208,
  populacaoAno: 2022,
  idhm: 0.734,
  idhmClasse: 'alto',
  altitudeM: 650,

  resumoEconomico:
    'Integrante da Região Metropolitana de Londrina, Cambé nasceu da colonização promovida pela Companhia de Terras Norte do Paraná, de origem inglesa, que fundou o núcleo de Nova Dantzig em 1932, depois rebatizado Cambé. A economia combina agroindústria — com forte presença de alimentos e bebidas —, indústria, comércio e serviços, apoiada na proximidade com Londrina e nas rodovias que cortam a região.',

  mercado:
    'Conurbada com Londrina, Cambé tem perfil de cidade média em crescimento, com público que treina tanto no município quanto no polo vizinho. A oferta reúne academias de musculação, estúdios de funcional e cobertura de plataformas de benefícios, complementada por parques urbanos que funcionam como pontos de treino ao ar livre.',

  bairrosNobres: ['Jardim Europa', 'Jardim Primavera', 'Jardim Silvino', 'Centro'],
  bairrosPopulares: ['Parque Industrial', 'São Cristóvão', 'Jardim Ana Eliza', 'Recanto Lago Azul'],

  parques: [
    {
      nome: 'Parque Zezão (Parque Verdade)',
      descricao:
        'Principal área verde no coração de Cambé, em um fundo de vale densamente ocupado. Reúne pista de caminhada, trilhas, anfiteatro e amplas áreas de lazer, sendo o ponto de encontro de quem caminha e corre na cidade.',
    },
    {
      nome: 'Parque João Paulo II',
      descricao:
        'Parque com cerca de 60 mil m², lago, mais de três quilômetros de pista de caminhada, iluminação em LED e paisagismo — espaço amplo para treinos de caminhada e corrida em circuito.',
    },
    {
      nome: 'Parque Histórico Danziger Hof',
      descricao:
        'Espaço dedicado à memória da colônia Nova Dantzig, com áreas arborizadas e ambiente tranquilo, que somam opções de caminhada leve e lazer ao calendário esportivo local.',
    },
  ],
  ciclovias:
    'A cidade conta com ciclovias e ciclofaixas em vias e no entorno dos parques, integrando mobilidade ativa e lazer em um traçado plano, favorável ao pedal e à corrida.',

  clima:
    'O clima é subtropical, típico do norte do Paraná, com estações bem definidas: verões quentes e chuvosos (podendo passar de 30 °C) e invernos amenos, com geadas ocasionais.',
  climaTreino:
    'O treino ao ar livre é confortável na maior parte do ano. No verão, vale priorizar as manhãs e evitar o fim de tarde (calor e pancadas de chuva); no inverno, as manhãs ensolaradas são as mais agradáveis.',

  mobilidade:
    'Cambé fica a cerca de 20 km de Londrina, em conurbação com a capital regional. O acesso se dá pela BR-369 e pela PR-445 (Rodovia do Café), que conectam a cidade a Londrina, Arapongas e ao restante da Região Metropolitana, com transporte coletivo municipal e integração com o polo vizinho.',

  corridas: [
    {
      nome: 'AZ Run — Edição Portal Cambé',
      descricao:
        'Corrida de rua com percursos de 5 km e 10 km pelas vias da cidade, realizada no mês de aniversário de Cambé — uma das provas que movimentam corredores e assessorias locais.',
    },
  ],
  culturaEsportiva:
    'Cambé tem cultura de caminhada e corrida apoiada em seus parques urbanos, com destaque para o Parque Zezão e o Parque João Paulo II, além de provas de rua locais. A proximidade com Londrina amplia o acesso a um calendário de corridas e a estruturas esportivas da Região Metropolitana.',
  academias:
    'A oferta reúne academias de musculação, estúdios de treino funcional e personal trainers, com cobertura de plataformas de benefícios. A vizinhança com Londrina amplia as opções para quem treina entre as duas cidades.',

  destaquesFitness: [
    'Parque Zezão como principal ponto de caminhada e corrida no centro da cidade.',
    'Parque João Paulo II com lago e mais de 3 km de pista para treino em circuito.',
    'Conurbação com Londrina, ampliando o acesso a academias e a corridas da Região Metropolitana.',
    'Relevo plano e clima subtropical, favoráveis ao treino ao ar livre quase o ano todo.',
  ],

  precos: {
    avulsaMin: 50,
    avulsaMax: 115,
    mensalMin: 250,
    mensalMax: 700,
    onlineMin: 115,
    onlineMax: 350,
  },

  conclusao:
    'Cidade em crescimento na Região Metropolitana de Londrina, Cambé combina parques urbanos, relevo plano e proximidade com a capital regional para quem quer treinar com regularidade. Um personal trainer ajuda a transformar essa estrutura — dos parques às academias — em um plano consistente, ajustado ao seu objetivo e à sua rotina.',

  vizinhas: ['londrina-pr', 'rolandia-pr', 'ibipora-pr'],

  fontes: [
    { nome: 'IBGE Cidades — Cambé', url: 'https://cidades.ibge.gov.br/brasil/pr/cambe/panorama' },
    { nome: 'Prefeitura de Cambé', url: 'https://www.cambe.pr.gov.br/' },
    { nome: 'Atlas Brasil — IDHM', url: 'https://www.atlasbrasil.org.br/' },
  ],
  atualizadoEm: '2026-06-29',
};
