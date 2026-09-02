import type { Cidade } from '../../lib/types';

export const cidade: Cidade = {
  slug: 'garopaba-sc',
  nome: 'Garopaba',
  uf: 'SC',
  estado: 'Santa Catarina',
  estadoSlug: 'santa-catarina',
  regiao: 'Sul',
  gentilico: 'garopabense',
  tipo: 'cidade',

  populacao: 29959,
  populacaoAno: 2022,
  idhm: 0.753,
  idhmClasse: 'alto',
  altitudeM: 21,

  resumoEconomico:
    'Antiga vila de pescadores no litoral sul catarinense, Garopaba se transformou em um dos destinos de praia mais valorizados de Santa Catarina. A economia gira em torno do turismo, da pesca artesanal e dos serviços, com forte sazonalidade: a população (29.959 habitantes no Censo 2022) chega a multiplicar várias vezes no verão. O surfe e o turismo de natureza — incluindo a observação de baleias-francas — atraem um público de alto poder aquisitivo, especialmente nas praias da Ferrugem e do Silveira e na vizinha Praia do Rosa (Imbituba). Com IDHM alto (0,753), a cidade combina raiz caiçara e um mercado de segunda residência sofisticado.',

  mercado:
    'O mercado de personal trainers em Garopaba é fortemente moldado pela sazonalidade e pelo perfil litorâneo de alto padrão. No verão, a chegada de veranistas e proprietários de casas de praia eleva a demanda por treino ao ar livre, na areia e na orla, além do atendimento em condomínios e pousadas. Fora da temporada, a base é a comunidade local e os praticantes de surfe, que buscam preparo físico específico — força, mobilidade e condicionamento para o mar. Atender veranistas com pacotes curtos e flexíveis e acompanhamento online na baixa temporada é um diferencial natural na cidade.',

  bairrosNobres: ['Praia da Ferrugem', 'Praia do Silveira', 'Ambrósio', 'Centro (orla da Praia de Garopaba)'],
  bairrosPopulares: ['Campo Duna', 'Garopaba de Fora', 'Macacu', 'Encantada'],

  parques: [
    {
      nome: 'Praia do Silveira',
      descricao:
        'Reduto histórico do surfe brasileiro e área de proteção ambiental, com point de fundo de pedra muito procurado por surfistas. Cenário ideal para treino funcional na areia e preparo físico voltado ao mar.',
    },
    {
      nome: 'Praia da Ferrugem',
      descricao:
        'Uma das praias mais badaladas do litoral sul de SC, lotada no verão e ponto de encontro de turistas e surfistas, com costões e trilhas no entorno para caminhada e corrida.',
    },
    {
      nome: 'Trilha da Vigia ao Silveira',
      descricao:
        'Percurso costeiro de cerca de 2 a 2,5 km saindo da Praia da Vigia, por trechos de mata e mirantes com vista aberta para o mar — ótimo para caminhada e trail running.',
    },
    {
      nome: 'Rota da Baleia Franca',
      descricao:
        'Entre junho e novembro, as baleias-francas se aproximam da costa de Garopaba, Imbituba e Laguna para reprodução, com pico de avistamentos em setembro — atrativo de natureza que dá ritmo ao calendário de inverno.',
    },
  ],
  ciclovias:
    'A estrutura cicloviária é limitada e concentrada em trechos da área urbana e da orla; pedalar pelas estradas vicinais entre as praias é prática comum, sobretudo fora do pico do verão.',

  clima:
    'O clima é subtropical úmido, com verões quentes e influência marcante dos ventos do mar; o inverno é ameno e mais seco.',
  climaTreino:
    'Dá para treinar ao ar livre o ano todo. No verão, calor, umidade e praias cheias tornam o início da manhã e o fim da tarde os melhores horários. No inverno ameno, a orla fica tranquila e é ideal para corrida e treino na areia.',

  mobilidade:
    'O acesso principal é pela BR-101, com entrada pela SC-434 — rodovia que liga Garopaba à região de Imbituba e à Praia do Rosa. Dentro do município, o deslocamento é majoritariamente por carro, e o trânsito fica intenso na alta temporada.',

  corridas: [
    {
      nome: 'Garopaba Run Adventure (Circuito Cortuba)',
      descricao:
        'Etapa do tradicional Circuito Cortuba realizada em Garopaba, com percursos por orla e trechos de natureza, reunindo corredores da região no calendário de inverno.',
    },
    {
      nome: 'Circuito Ocean — Etapa Garopaba',
      descricao:
        'Festival multiesportivo na Praia Central com provas de corrida, caminhada, natação e aquathlon, aproveitando o cenário de praia da cidade.',
    },
  ],
  culturaEsportiva:
    'Garopaba é um dos berços do surfe no Brasil, com a Praia do Silveira como referência histórica. A cultura esportiva mistura surfe, treino na areia, trilhas pelos costões e provas de praia, num ambiente que valoriza a atividade física ao ar livre e o contato com o mar.',
  academias:
    'A oferta de academias e estúdios atende a comunidade local e cresce na temporada, com forte presença de treino funcional, beach training e preparo voltado ao surfe; muitos profissionais trabalham ao ar livre, na praia e em condomínios.',

  destaquesFitness: [
    'Berço do surfe brasileiro: Praia do Silveira é point histórico e gera demanda por preparo físico para o mar.',
    'Sazonalidade de verão multiplica o público — veranistas de alto padrão buscam treino na praia.',
    'Rota da Baleia Franca (junho a novembro) e trilhas pelos costões valorizam o treino ao ar livre.',
    'Provas de praia como o Circuito Ocean e o Garopaba Run Adventure movimentam o calendário esportivo.',
  ],

  precos: {
    avulsaMin: 60,
    avulsaMax: 150,
    mensalMin: 320,
    mensalMax: 880,
    onlineMin: 150,
    onlineMax: 420,
  },

  conclusao:
    'Em Garopaba, treinar é quase sinônimo de estar ao ar livre — na areia do Silveira, nas trilhas dos costões ou na orla durante a temporada. Para veranistas e moradores, um personal trainer que entenda a sazonalidade da cidade e o preparo voltado ao surfe e ao mar faz toda a diferença para treinar com segurança e aproveitar o melhor do litoral sul catarinense.',

  vizinhas: ['florianopolis-sc', 'palhoca-sc', 'tubarao-sc'],

  capaArte: {
    src: '/capas-cidade/garopaba-sc.webp',
    w: 1200,
    h: 1200,
    alt: 'Personal trainer em Garopaba (SC) em arte com a enseada, os barcos de pesca e um surfista na praia, com o treino em primeiro plano — Personal por Perto',
    legenda: 'Treino personalizado em Garopaba: seu melhor investimento é você, com acompanhamento profissional no litoral sul de Santa Catarina.',
  },
  fontes: [
    { nome: 'IBGE Cidades — Garopaba', url: 'https://cidades.ibge.gov.br/brasil/sc/garopaba/panorama' },
    { nome: 'Prefeitura de Garopaba', url: 'https://www.garopaba.sc.gov.br/' },
    { nome: 'Atlas Brasil — IDHM', url: 'https://www.atlasbrasil.org.br/' },
  ],
  atualizadoEm: '2026-09-01',
};
