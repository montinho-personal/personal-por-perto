import type { Cidade } from '../../lib/types';

export const cidade: Cidade = {
  slug: 'brasileia-ac',
  nome: 'Brasiléia',
  uf: 'AC',
  estado: 'Acre',
  estadoSlug: 'acre',
  regiao: 'Norte',
  gentilico: 'brasileiense',
  tipo: 'cidade',

  populacao: 26000,
  populacaoAno: 2022,
  idhm: 0.614,
  idhmClasse: 'médio',
  altitudeM: 207,

  resumoEconomico:
    'Situada no alto Acre, à margem esquerda do rio Acre e em frente à cidade boliviana de Cobija, Brasiléia forma com a vizinha Epitaciolândia e com Cobija um conjunto de cidades de fronteira fortemente integradas. A economia combina o comércio movimentado pela proximidade com a Bolívia, o extrativismo da castanha-do-brasil, a borracha, a agropecuária (com destaque para a pecuária de corte) e a agricultura familiar. A posição na divisa, ligada ao corredor de exportação rumo ao Pacífico, dá à cidade um papel logístico relevante no escoamento de produtos do estado.',

  mercado:
    'Como cidade pequena do interior do Norte e de fronteira, Brasiléia tem um mercado fitness enxuto, baseado em academias locais de musculação e treino funcional. A procura por personal trainers cresce entre quem busca orientação para treinar com segurança no calor e na umidade característicos da Amazônia, aproveitando a orla do rio e os espaços públicos da cidade.',

  bairrosNobres: ['Centro', 'Eldorado', 'Ferreira Silva', 'Samaúma'],
  bairrosPopulares: ['Alberto Castro', 'Leonardo Barbosa', 'José Rui Lino', 'Novo Horizonte'],

  parques: [
    {
      nome: 'Orla do Rio Acre',
      descricao:
        'A faixa urbana junto ao rio Acre, que marca a fronteira com a Bolívia e separa Brasiléia de Cobija, é o principal espaço aberto para caminhada e treino ao ar livre — sujeito, porém, às cheias do rio na estação chuvosa.',
    },
    {
      nome: 'Praças e calçadões do Centro',
      descricao:
        'As praças e ruas centrais concentram a vida urbana e servem de ponto de encontro para quem caminha e se exercita no início da manhã e no fim do dia, fugindo do calor do meio-dia.',
    },
    {
      nome: 'Entorno da floresta amazônica',
      descricao:
        'Inserida 100% no bioma amazônico, a região oferece estradas vicinais e áreas de mata no entorno do município como cenário para atividades ao ar livre em meio à natureza.',
    },
  ],
  ciclovias:
    'A infraestrutura cicloviária é modesta e restrita a poucos trechos da área urbana; grande parte do pedal e da corrida acontece nas vias da cidade e ao longo da orla do rio Acre.',

  clima:
    'O clima é equatorial, quente e úmido o ano todo, com temperaturas médias em torno de 25 °C a 27 °C, baixa amplitude térmica e chuvas abundantes (próximas de 2.000 mm anuais). O ano se divide entre uma estação chuvosa, mais longa, e uma estação seca; nesta última, o Acre é atingido pela friagem, fenômeno em que a entrada de ar frio derruba bruscamente a temperatura por alguns dias.',
  climaTreino:
    'O calor e a umidade elevados pedem treino nas horas mais frescas, cedo ou no fim da tarde, com hidratação reforçada; nos picos de calor, ambientes climatizados são a opção mais segura, e os dias de friagem oferecem janelas mais amenas para atividade ao ar livre.',

  mobilidade:
    'Brasiléia é cortada pela BR-317, a Estrada do Pacífico, que liga Rio Branco à fronteira com a Bolívia e ao Peru e integra a cidade ao corredor de exportação rumo aos portos do Pacífico. A ligação com Cobija é feita por ponte internacional sobre o rio Acre, e o deslocamento urbano se dá majoritariamente por veículos próprios, motos e transporte por aplicativo, comum nas cidades pequenas da região.',

  corridas: [
    {
      nome: 'Provas de rua na tríplice fronteira',
      descricao:
        'A região de fronteira entre Brasiléia, Epitaciolândia e Cobija sedia corridas e caminhadas de rua organizadas por equipes esportivas do alto Acre, que aproveitam as vias urbanas e a integração entre as cidades.',
    },
    {
      nome: 'Calendário de corridas do Acre',
      descricao:
        'Corredores da cidade costumam participar de provas do calendário acreano, incluindo eventos na vizinha Epitaciolândia e em Rio Branco, num circuito que tem ganhado adesão de atletas amadores no estado.',
    },
  ],
  culturaEsportiva:
    'A cultura esportiva local mistura o uso da orla do rio Acre e das praças para caminhada e corrida, o futebol e a participação em provas de rua do circuito do alto Acre, tudo condicionado ao calor e às chuvas típicas da Amazônia.',
  academias:
    'A oferta é formada principalmente por academias locais de musculação e treino funcional, distribuídas pelo Centro e pelos bairros residenciais, com porte compatível com uma cidade pequena do interior do Norte.',

  destaquesFitness: [
    'Cidade de fronteira na margem do rio Acre, em frente a Cobija, na Bolívia.',
    'Orla do rio Acre e praças do Centro como espaços de caminhada e corrida ao ar livre.',
    'Clima equatorial quente e úmido, que exige planejar horário e hidratação no treino.',
    'Cortada pela BR-317, a Estrada do Pacífico, com economia de comércio de fronteira, castanha e agropecuária.',
  ],

  precos: {
    avulsaMin: 45,
    avulsaMax: 105,
    mensalMin: 230,
    mensalMax: 640,
    onlineMin: 105,
    onlineMax: 330,
  },

  conclusao:
    'Pequena, quente e fincada na fronteira com a Bolívia, Brasiléia pede um treino adaptado ao clima equatorial e que aproveite a orla do rio e os espaços públicos da cidade. Um personal trainer ajuda a organizar a rotina respeitando o calor e a umidade, escolhendo os melhores horários e mantendo a constância ao longo das estações chuvosa e seca.',

  vizinhas: ['rio-branco-ac', 'cruzeiro-do-sul-ac'],

  fontes: [
    { nome: 'IBGE Cidades — Brasiléia', url: 'https://cidades.ibge.gov.br/brasil/ac/brasileia/panorama' },
    { nome: 'Prefeitura de Brasiléia', url: 'https://www.brasileia.ac.gov.br/' },
    { nome: 'Atlas Brasil — IDHM', url: 'https://www.atlasbrasil.org.br/' },
  ],
  atualizadoEm: '2026-06-29',
};
