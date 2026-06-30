import type { Cidade } from '../../lib/types';

export const cidade: Cidade = {
  slug: 'paraiba-do-sul-rj',
  nome: 'Paraíba do Sul',
  uf: 'RJ',
  estado: 'Rio de Janeiro',
  estadoSlug: 'rio-de-janeiro',
  regiao: 'Sudeste',
  gentilico: 'sul-paraibano',
  tipo: 'cidade',

  populacao: 42063,
  populacaoAno: 2022,
  idhm: 0.702,
  idhmClasse: 'alto',
  altitudeM: 275,

  resumoEconomico:
    'Banhada pelo rio que lhe dá nome, no Centro-Sul Fluminense, Paraíba do Sul é uma cidade histórica do Vale do Café, região que no século XIX chegou a concentrar boa parte da produção cafeeira do país. Sua estação ferroviária, inaugurada em 1867 com a presença de D. Pedro II, integrou o município ao eixo Rio–Minas pela então Estrada de Ferro D. Pedro II, e o passado do café e dos trens ainda organiza a paisagem urbana. Hoje a economia se apoia em comércio, serviços, indústria e atividades ligadas ao turismo histórico e às águas termais de Salutaris.',

  mercado:
    'Como cidade média do interior fluminense, Paraíba do Sul tem um mercado de treino personalizado em consolidação, sustentado por academias de bairro e pelo uso das margens do rio, das praças do centro histórico e dos caminhos do Vale do Café. O IDHM alto e a tradição de cidade-balneário, com as termas de Salutaris, ajudam a manter uma demanda crescente por acompanhamento individualizado e por hábitos saudáveis.',

  bairrosNobres: ['Centro', 'Liberdade', 'Palhas', 'Ponte das Garças'],
  bairrosPopulares: ['Ponte Preta', 'Jatobá', 'Werneck', 'Inconfidência'],

  parques: [
    {
      nome: 'Margens do rio Paraíba do Sul',
      descricao:
        'O rio que dá nome à cidade corta o centro urbano e suas margens funcionam como cenário tradicional de caminhada, corrida e contemplação, articuladas às pontes históricas que cruzam o leito.',
    },
    {
      nome: 'Ponte da Parahyba (ponte pênsil de ferro)',
      descricao:
        'Inaugurada em 1857 por iniciativa do Visconde de Mauá, a antiga ponte metálica sobre o rio Paraíba do Sul é um dos cartões-postais da cidade e ponto de passeio às margens das águas, com grande valor histórico.',
    },
    {
      nome: 'Praças e centro histórico',
      descricao:
        'O conjunto de praças, igrejas e casario do centro, herança do auge do café e da era ferroviária, oferece espaço arborizado para caminhada e atividade leve ao ar livre no coração da cidade.',
    },
  ],
  ciclovias:
    'A malha cicloviária é ainda limitada, típica de cidade média do interior; o ciclismo acontece sobretudo nas vias de menor movimento, nas margens do rio Paraíba do Sul e nas estradas vicinais que ligam o distrito-sede a Werneck, Inconfidência e Salutaris.',

  clima:
    'O clima é tropical, característico do Centro-Sul Fluminense e do Vale do Café, com verões quentes e úmidos e invernos amenos e mais secos no vale do Paraíba.',
  climaTreino:
    'As condições para treino ao ar livre são boas na maior parte do ano; no verão, o calor e a umidade pedem priorizar a manhã e o fim de tarde e reforçar a hidratação, enquanto o inverno ameno favorece atividades em praticamente qualquer horário.',

  mobilidade:
    'Paraíba do Sul é servida pelas rodovias federais BR-040 (Washington Luís, eixo Rio–Juiz de Fora–Brasília) e pela proximidade da BR-393 (Lúcio Meira), que conectam o município ao Vale do Café, a Três Rios e ao restante do Médio Paraíba. A herança da antiga Estrada de Ferro D. Pedro II e a posição no eixo Rio–Minas reforçam o papel de cidade de passagem e de fácil acesso às vizinhas.',

  corridas: [
    {
      nome: 'Corridas de rua de Paraíba do Sul',
      descricao:
        'Provas locais que exploram o centro histórico, as margens do rio Paraíba do Sul e o relevo de subidas e descidas, integrando o calendário esportivo do Centro-Sul Fluminense.',
    },
    {
      nome: 'Circuito do Vale do Café',
      descricao:
        'Corredores sul-paraibanos participam de provas em cidades históricas vizinhas, aproveitando os caminhos e fazendas da rota do café como cenário para o esporte.',
    },
    {
      nome: 'Provas regionais do Centro-Sul Fluminense',
      descricao:
        'Ao longo do ano, os atletas da cidade circulam por competições em municípios próximos como Três Rios e Vassouras, fortalecendo a cena de corrida de rua da região.',
    },
  ],
  culturaEsportiva:
    'A cultura esportiva sul-paraibana combina o futebol de tradição, a corrida de rua aproveitando o relevo do vale e as caminhadas pelas margens do rio e pelo centro histórico. A vocação de cidade-balneário, ligada às águas de Salutaris, reforça a busca por bem-estar e atividade física entre moradores e visitantes.',
  academias:
    'A oferta de academias é típica de cidade média do interior fluminense, distribuída pelos bairros e bem complementada pelo uso das praças, do centro histórico e das margens do rio Paraíba do Sul para treino ao ar livre.',

  destaquesFitness: [
    'Margens do rio Paraíba do Sul e pontes históricas para caminhada, corrida e contemplação.',
    'Ponte da Parahyba, ponte pênsil de ferro de 1857, como cartão-postal e ponto de passeio ribeirinho.',
    'Centro histórico e praças do Vale do Café, com espaço arborizado para atividade ao ar livre.',
    'Acesso fácil pela BR-040 para participar de provas e circuitos do Centro-Sul Fluminense.',
  ],

  precos: {
    avulsaMin: 50,
    avulsaMax: 110,
    mensalMin: 270,
    mensalMax: 660,
    onlineMin: 125,
    onlineMax: 330,
  },

  conclusao:
    'Cidade histórica do Vale do Café banhada pelo rio Paraíba do Sul, o município une a herança do café e dos trens à tranquilidade do interior fluminense. Entre as margens do rio, as pontes antigas e as praças do centro, há cenário de sobra para treinar ao ar livre, e um personal trainer ajuda a transformar essa rotina em resultados consistentes, ajustando o plano ao dia a dia de quem vive na cidade.',

  vizinhas: ['tres-rios-rj', 'vassouras-rj'],

  fontes: [
    { nome: 'IBGE Cidades — Paraíba do Sul', url: 'https://cidades.ibge.gov.br/brasil/rj/paraiba-do-sul/panorama' },
    { nome: 'Prefeitura de Paraíba do Sul', url: 'https://www.paraibadosul.rj.gov.br/' },
    { nome: 'Atlas Brasil — IDHM', url: 'https://www.atlasbrasil.org.br/' },
  ],
  atualizadoEm: '2026-06-29',
};
