import type { Cidade } from '../../lib/types';

export const cidade: Cidade = {
  slug: 'igrejinha-rs',
  nome: 'Igrejinha',
  uf: 'RS',
  estado: 'Rio Grande do Sul',
  estadoSlug: 'rio-grande-do-sul',
  regiao: 'Sul',
  gentilico: 'igrejinhense',
  tipo: 'cidade',

  populacao: 32808,
  populacaoAno: 2022,
  idhm: 0.721,
  idhmClasse: 'alto',
  altitudeM: 18,

  resumoEconomico:
    'No Vale do Paranhana, integrada à Região Metropolitana de Porto Alegre, Igrejinha foi colonizada por imigrantes alemães no século XIX e mantém forte herança germânica. A economia é puxada pela indústria calçadista e de componentes — polo tradicional que responde por boa parte do valor adicionado do município, com nomes como Beira Rio, Usaflex e Bibi —, complementada pelo setor cervejeiro e pelo turismo. A cidade é sede da Oktoberfest de Igrejinha, uma das maiores festas populares do estado, que reforça a vocação para eventos e a economia ligada à cultura alemã.',

  mercado:
    'Como cidade de porte médio no Vale do Paranhana e próxima de polos maiores como Novo Hamburgo e Taquara, Igrejinha tem um mercado fitness enxuto, apoiado em academias locais de musculação e treino funcional. A procura por personal trainers cresce entre trabalhadores da indústria calçadista que buscam qualidade de vida e entre quem quer aproveitar as margens do rio Paranhana e os espaços verdes para treinar ao ar livre.',

  bairrosNobres: ['Centro', 'Vila Nova', 'Bom Pastor', 'Moinho'],
  bairrosPopulares: ['Figueira', 'Viaduto', '15 de Novembro', 'Industrial'],

  parques: [
    {
      nome: 'Parque de Eventos Almiro Grings',
      descricao:
        'Sede da Oktoberfest de Igrejinha, o parque abriga a Vila Germânica, com arquitetura enxaimel e deck de madeira à beira do rio Paranhana em meio à mata nativa — um espaço amplo usado para caminhada e lazer fora do período da festa.',
    },
    {
      nome: 'Orla do rio Paranhana',
      descricao:
        'O rio que corta a cidade dá nome ao vale e serve de referência para atividades ao ar livre; trechos de suas margens e passarelas são aproveitados por quem caminha e corre pela área urbana.',
    },
    {
      nome: 'Área rural e Serra Grande',
      descricao:
        'A leste e a oeste o relevo se torna acidentado, chegando ao ponto mais alto do município no Morro dos Alpes, na Serra Grande; estradas e trilhas rurais oferecem percursos com desnível para quem busca treino em subida.',
    },
  ],
  ciclovias:
    'A estrutura cicloviária é modesta e concentrada na área central e em trechos junto ao rio; boa parte do pedal e da corrida acontece nas vias urbanas planas do vale e em estradas do interior.',

  clima:
    'O clima é subtropical úmido, na transição entre os tipos Cfa e Cfb de Köppen, com verões quentes e invernos frios. As chuvas são bem distribuídas ao longo do ano e o inverno pode registrar temperaturas próximas de zero, geada e nevoeiro, com neve ocasional nas partes altas do município.',
  climaTreino:
    'Os verões quentes pedem treino cedo pela manhã ou no fim da tarde, com hidratação reforçada; no inverno frio e úmido, é preciso aquecer bem e usar agasalho, já que a geada e o nevoeiro típicos do vale limitam o treino ao ar livre em algumas manhãs.',

  mobilidade:
    'A principal via de acesso é a ERS-115, que liga Taquara a Gramado passando por Igrejinha e concentra o fluxo entre o Vale do Paranhana e a Serra. Melhorias recentes incluíram rotatórias e o acesso ao Distrito Industrial pela rodovia. O transporte urbano é feito por ônibus, e a proximidade com Taquara e Novo Hamburgo integra a cidade à Região Metropolitana de Porto Alegre.',

  corridas: [
    {
      nome: 'Corrida de Revezamento Oktoberfest',
      descricao:
        'Prova de rua realizada em Igrejinha ligada à Oktoberfest, com percursos de 2,5 km e 5 km e categorias solo, dupla e quarteto, largando na área central da cidade.',
    },
    {
      nome: 'Meia Maratona de Igrejinha',
      descricao:
        'Evento de corrida de rua com distâncias variadas que reforça o calendário esportivo local e atrai corredores do Vale do Paranhana e da região metropolitana.',
    },
  ],
  culturaEsportiva:
    'A cultura esportiva mistura a tradição germânica das festas e o gosto por eventos ao ar livre com o uso das margens do rio Paranhana e do Parque de Eventos para caminhada e corrida. As provas ligadas à Oktoberfest e a proximidade com a Serra ampliam as opções para quem gosta de treinar em percursos variados.',
  academias:
    'A oferta é formada principalmente por academias locais de musculação e treino funcional, distribuídas pelo Centro e pelos bairros residenciais, com porte compatível com uma cidade média do Vale do Paranhana.',

  destaquesFitness: [
    'Sede da Oktoberfest de Igrejinha, uma das maiores festas populares do Rio Grande do Sul.',
    'Rio Paranhana e Parque de Eventos Almiro Grings como espaços para caminhada e corrida ao ar livre.',
    'Clima subtropical com verões quentes e invernos frios, com geada e nevoeiro no vale.',
    'Polo calçadista tradicional no Vale do Paranhana, integrado à Região Metropolitana de Porto Alegre.',
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
    'Cidade de herança alemã no Vale do Paranhana, Igrejinha combina a rotina da indústria calçadista com espaços à beira do rio Paranhana e a energia da Oktoberfest. Um personal trainer ajuda a organizar o treino respeitando os verões quentes e os invernos frios do vale, definindo os melhores horários e mantendo a constância ao longo do ano.',

  vizinhas: ['taquara-rs', 'novo-hamburgo-rs'],

  fontes: [
    { nome: 'IBGE Cidades — Igrejinha', url: 'https://cidades.ibge.gov.br/brasil/rs/igrejinha/panorama' },
    { nome: 'Prefeitura de Igrejinha', url: 'https://www.igrejinha.rs.gov.br/' },
    { nome: 'Atlas Brasil — IDHM', url: 'https://www.atlasbrasil.org.br/' },
  ],
  atualizadoEm: '2026-06-29',
};
