import type { Cidade } from '../../lib/types';

export const cidade: Cidade = {
  slug: 'niquelandia-go',
  nome: 'Niquelândia',
  uf: 'GO',
  estado: 'Goiás',
  estadoSlug: 'goias',
  regiao: 'Centro-Oeste',
  gentilico: 'niquelandense',
  tipo: 'cidade',

  populacao: 34964,
  populacaoAno: 2022,
  idhm: 0.715,
  idhmClasse: 'alto',
  altitudeM: 580,

  resumoEconomico:
    'No norte goiano, Niquelândia é um dos maiores municípios do estado em área e leva no nome a sua vocação: a mineração de níquel, explorada há décadas e responsável por boa parte da produção nacional. Além do níquel, o subsolo guarda outros minerais, como amianto, ouro e cobalto. A economia se completa com a energia — a cidade fica perto da hidrelétrica de Serra da Mesa, cujo lago artificial está entre os maiores do país — e com uma forte agropecuária, que responde por parcela expressiva do valor adicionado do município.',

  mercado:
    'Cidade média do interior goiano, Niquelândia tem um mercado fitness enxuto, formado por academias locais de musculação e treino funcional. A presença da indústria de mineração e o ritmo de trabalho ligado a turnos sustentam a procura por treino orientado, e cresce o interesse de quem busca acompanhamento individual para conciliar a rotina com a prática de atividade física.',

  bairrosNobres: ['Setor Central', 'Centro', 'Setor Aeroporto'],
  bairrosPopulares: ['Setor Bandeirante', 'Vila Mutirão', 'Setor Sul', 'Setor Norte'],

  parques: [
    {
      nome: 'Lago de Serra da Mesa',
      descricao:
        'Reservatório da hidrelétrica de Serra da Mesa, um dos maiores lagos artificiais do Brasil, com trechos no município. Atrai pesca esportiva, esportes náuticos e caminhadas em suas margens, sendo o principal espaço de lazer e atividade ao ar livre da região.',
    },
    {
      nome: 'Lago Azul',
      descricao:
        'Atração natural a cerca de 42 km da cidade, acessível por trilha curta e íngreme; ponto procurado para passeios e caminhadas em meio ao Cerrado, com cenário de águas claras.',
    },
    {
      nome: 'Cachoeiras e grutas do entorno',
      descricao:
        'O município reúne cachoeiras como as do Muquém, São Bento e Jequitibá, além de grutas como a de São Pedro — destinos de ecoturismo e trilhas que servem de cenário para quem treina ao ar livre.',
    },
  ],
  ciclovias:
    'A infraestrutura cicloviária é modesta e concentrada em poucos trechos da área urbana; grande parte do pedal e da corrida acontece nas vias dos setores centrais e nas estradas de acesso à zona rural e ao lago.',

  clima:
    'O clima é tropical de Cerrado, com duas estações bem marcadas: o verão chuvoso (de outubro a abril) e o inverno seco (de maio a setembro), quando a umidade do ar cai bastante. As temperaturas são elevadas na maior parte do ano, com dias quentes e noites mais amenas no período da seca.',
  climaTreino:
    'O calor e a baixa umidade do período seco pedem hidratação reforçada e atenção ao horário, com preferência para o início da manhã ou o fim da tarde. Na estação chuvosa, a programação ao ar livre precisa contar com a alternativa de ambientes cobertos nos dias de pancadas de chuva.',

  mobilidade:
    'Niquelândia se conecta ao restante de Goiás principalmente pelas rodovias GO-237, GO-080, GO-327 e BR-414, que ligam a cidade a Goianésia, ao eixo de Anápolis e à capital. O transporte urbano é feito por ônibus e veículos individuais, e a extensa malha de estradas municipais atende à zona rural e às áreas de mineração.',

  corridas: [
    {
      nome: 'Corrida da Zero Hora',
      descricao:
        'Prova de corrida de rua realizada na cidade com apoio da prefeitura, sinal da movimentação local em torno da corrida e da atividade física comunitária.',
    },
    {
      nome: 'Circuito Goiano de Pesca Esportiva (etapa no Lago Serra da Mesa)',
      descricao:
        'Etapa do circuito estadual sediada no Lago Serra da Mesa, que reforça a vocação da região para esportes ao ar livre e atividades náuticas.',
    },
  ],
  culturaEsportiva:
    'A cultura esportiva gira em torno do uso do Lago Serra da Mesa para pesca e esportes náuticos, das trilhas até cachoeiras e do Lago Azul, e de provas de corrida de rua organizadas na cidade — tudo marcado pelo ambiente de Cerrado do norte goiano.',
  academias:
    'A oferta é formada principalmente por academias locais de musculação e treino funcional, distribuídas pelos setores centrais e residenciais, com porte compatível com uma cidade média do interior.',

  destaquesFitness: [
    'Capital nacional do níquel, com economia de mineração que define o ritmo da cidade.',
    'Lago de Serra da Mesa, um dos maiores lagos artificiais do país, como espaço de esportes náuticos e atividade ao ar livre.',
    'Clima de Cerrado com seca acentuada, que exige hidratação e planejamento de horário no treino.',
    'Cachoeiras, grutas e o Lago Azul como destinos de trilha e ecoturismo no entorno.',
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
    'Polo de mineração no norte goiano e vizinha do Lago de Serra da Mesa, Niquelândia combina uma rotina de trabalho intensa com um entorno natural rico para a atividade física. Um personal trainer ajuda a organizar o treino respeitando o clima de Cerrado, definindo os melhores horários e mantendo a constância ao longo das estações seca e chuvosa.',

  vizinhas: ['goianesia-go', 'anapolis-go'],

  fontes: [
    { nome: 'IBGE Cidades — Niquelândia', url: 'https://cidades.ibge.gov.br/brasil/go/niquelandia/panorama' },
    { nome: 'Prefeitura de Niquelândia', url: 'https://niquelandia.go.gov.br/' },
    { nome: 'Atlas Brasil — IDHM', url: 'https://www.atlasbrasil.org.br/' },
  ],
  atualizadoEm: '2026-06-29',
};
