import type { Cidade } from '../../lib/types';

export const cidade: Cidade = {
  slug: 'paraty-rj',
  nome: 'Paraty',
  uf: 'RJ',
  estado: 'Rio de Janeiro',
  estadoSlug: 'rio-de-janeiro',
  regiao: 'Sudeste',
  gentilico: 'paratiense',
  tipo: 'cidade',

  populacao: 44872,
  populacaoAno: 2022,
  idhm: 0.693,
  idhmClasse: 'médio',
  altitudeM: 5,

  resumoEconomico:
    'Na Costa Verde fluminense, entre a Serra do Mar e o Atlântico, Paraty tem economia movida pelo turismo. O centro histórico colonial, reconhecido pela UNESCO em 2019 como Patrimônio Mundial Misto (cultural e natural) e tombado pelo IPHAN, é um dos conjuntos arquitetônicos mais bem preservados do Brasil e atrai visitantes o ano todo, ao lado de praias, ilhas, cachoeiras e da pesca artesanal caiçara.',

  mercado:
    'O mercado é definido pelo turismo de alto padrão e pela segunda residência, com forte demanda em alta temporada e na FLIP. O personal trainer atende turistas hospedados em pousadas e casas, moradores de maior poder aquisitivo e visitantes recorrentes, com espaço para treino ao ar livre na praia e nas trilhas e para acompanhamento online entre as estadias.',

  bairrosNobres: ['Centro Histórico', 'Pontal', 'Caborê', 'Jabaquara'],
  bairrosPopulares: ['Chácara', 'Patitiba', 'Ilha das Cobras', 'Vila Colonial'],

  parques: [
    {
      nome: 'Centro Histórico de Paraty',
      descricao:
        'Conjunto colonial de ruas de pedra fechado a carros, ideal para caminhada; as marés que invadem as ruas fazem parte do cenário e exigem atenção aos horários.',
    },
    {
      nome: 'Praia do Pontal e orla do Centro',
      descricao:
        'Faixa de areia e calçadão próximos ao centro, usados para corrida, caminhada e treino funcional à beira-mar.',
    },
    {
      nome: 'Trilhas da Serra da Bocaina',
      descricao:
        'Caminhos de mata e cachoeiras no entorno do Parque Nacional da Serra da Bocaina, opção de treino ao ar livre com ganho de altitude e natureza preservada.',
    },
  ],
  ciclovias:
    'A infraestrutura cicloviária é limitada e concentrada em trechos da área urbana; o relevo plano do centro favorece deslocamentos a pé e de bicicleta, mas a extensão oficial de ciclovia não é divulgada.',

  clima:
    'O clima é tropical úmido, quente e bastante chuvoso, entre a Serra do Mar e o oceano, com alta umidade o ano inteiro e chuvas intensas no verão.',
  climaTreino:
    'Dá para treinar ao ar livre o ano todo, mas o calor, a umidade elevada e as chuvas frequentes pedem flexibilidade de horário; os meses mais secos, do outono ao começo do inverno, são os mais confortáveis para praia e trilha.',

  mobilidade:
    'Paraty é cortada pela BR-101 (Rodovia Rio-Santos), principal acesso ao restante do Rio de Janeiro e ao litoral norte de São Paulo, com traçado sinuoso pela Serra do Mar; dentro do centro histórico a circulação é a pé, pelas ruas de pedra.',

  corridas: [
    {
      nome: 'Provas de corrida de rua na Costa Verde',
      descricao:
        'Calendário regional de corridas que aproveita a orla e o entorno histórico, incentivando a atividade física ao ar livre.',
    },
    {
      nome: 'Travessias e trilhas guiadas',
      descricao:
        'Atividades de trail e caminhada na Serra da Bocaina e em direção às cachoeiras, combinando esporte e natureza.',
    },
  ],
  culturaEsportiva:
    'A cultura local mistura vida ao ar livre — praia, trilha, stand-up paddle e passeios de barco pelas ilhas — com forte vocação cultural marcada pela FLIP (Festa Literária Internacional de Paraty), realizada desde 2003.',
  academias:
    'A oferta de academias é compatível com uma cidade de porte pequeno e perfil turístico, complementada por pousadas com estrutura própria e por amplo espaço para treino ao ar livre na praia e nas trilhas.',

  destaquesFitness: [
    'Público de turismo de alto padrão e segunda residência hospedado em pousadas e casas.',
    'Centro histórico colonial e orla do Pontal para caminhada e corrida.',
    'Trilhas e cachoeiras da Serra da Bocaina como diferencial de treino ao ar livre.',
    'Demanda sazonal forte na alta temporada e durante a FLIP.',
  ],

  precos: {
    avulsaMin: 70,
    avulsaMax: 180,
    mensalMin: 350,
    mensalMax: 1000,
    onlineMin: 160,
    onlineMax: 450,
  },

  conclusao:
    'Patrimônio Mundial da UNESCO e palco da FLIP, Paraty une centro histórico, praia e a Serra da Bocaina em um mercado de turismo de alto padrão. Um personal trainer ajuda turistas e moradores a manter a rotina entre praia e trilha com método, ajustando o treino ao calor úmido da Costa Verde e à sazonalidade da cidade.',

  vizinhas: ['angra-dos-reis-rj', 'resende-rj'],

  fontes: [
    { nome: 'IBGE Cidades — Paraty', url: 'https://cidades.ibge.gov.br/brasil/rj/paraty/panorama' },
    { nome: 'Prefeitura de Paraty', url: 'https://www.paraty.rj.gov.br/' },
    { nome: 'Atlas Brasil — IDHM', url: 'https://www.atlasbrasil.org.br/' },
  ],
  atualizadoEm: '2026-06-29',
};
