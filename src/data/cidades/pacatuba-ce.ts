import type { Cidade } from '../../lib/types';

export const cidade: Cidade = {
  slug: 'pacatuba-ce',
  nome: 'Pacatuba',
  uf: 'CE',
  estado: 'Ceará',
  estadoSlug: 'ceara',
  regiao: 'Nordeste',
  gentilico: 'pacatubano',
  tipo: 'cidade',

  populacao: 81524,
  populacaoAno: 2022,
  idhm: 0.675,
  idhmClasse: 'médio',
  altitudeM: 60,

  resumoEconomico:
    'Um dos municípios fundadores da Região Metropolitana de Fortaleza, Pacatuba reúne a vida metropolitana conurbada à capital e o patrimônio natural da Serra da Aratanha, extensão do Maciço de Baturité. A economia combina serviços, comércio e indústria, com forte ligação ao polo de Maracanaú, além de turismo e ecoturismo de serra.',

  mercado:
    'O mercado fitness é puxado pela densidade urbana da área conurbada e pela proximidade com Maracanaú e Fortaleza, com academias e estúdios concentrados na sede e no eixo do distrito de Senador Carlos Jereissati, e procura crescente por treino ao ar livre nas trilhas da serra.',

  bairrosNobres: ['Centro', 'Monguba', 'Senador Carlos Jereissati', 'Pavuna'],
  bairrosPopulares: ['Croatá', 'Itaitinga (entorno)', 'Boaçu', 'Jereissati'],

  parques: [
    {
      nome: 'Serra da Aratanha',
      descricao:
        'Maciço verde que cerca a cidade, com trilhas, cachoeiras e mirantes; cenário de caminhadas e treino em terreno acidentado.',
    },
    {
      nome: 'Trilha do Boaçu',
      descricao:
        'A trilha mais conhecida da Serra da Aratanha, que sobe a partir da praça da Matriz passando pela Bica das Andréas até o Lago do Boaçu e a Pedra do Perigo.',
    },
    {
      nome: 'Praça da Matriz e área central',
      descricao:
        'Ponto de partida das caminhadas para a serra e espaço público usado para atividade física no centro histórico.',
    },
  ],
  ciclovias:
    'A cidade não tem rede cicloviária estruturada divulgada em fonte oficial; o pedal acontece sobretudo em vias urbanas e nos acessos à serra.',

  clima:
    'O clima é tropical quente, típico da Região Metropolitana de Fortaleza, com calor o ano todo e chuvas concentradas no primeiro semestre; nas áreas mais altas da Serra da Aratanha o ambiente é mais ameno e úmido.',
  climaTreino:
    'O calor pede manhã cedo e fim de tarde para o treino na área urbana, com hidratação reforçada; a serra oferece sombra e temperatura mais amena para caminhadas e trilhas.',

  mobilidade:
    'Pacatuba é servida pela BR-116 e pelo corredor da CE-060, em conurbação com Maracanaú e ligação direta a Fortaleza, integrando o eixo metropolitano da Grande Fortaleza.',

  corridas: [
    {
      nome: 'Corridas de rua municipais',
      descricao:
        'Provas promovidas pela prefeitura e por grupos locais, com largadas na área central da cidade.',
    },
    {
      nome: 'Trilhas e travessias na Serra da Aratanha',
      descricao:
        'Percursos de trekking e desafios em terreno de serra, como a subida ao Boaçu, que atraem praticantes de corrida em trilha.',
    },
  ],
  culturaEsportiva:
    'A cultura esportiva une as corridas de rua do calendário metropolitano ao ecoturismo da Serra da Aratanha, com trilhas, rapel e voo livre que aproximam a população da atividade física na natureza.',
  academias:
    'A oferta reúne academias e estúdios na sede e no distrito de Senador Carlos Jereissati, complementada pelo treino ao ar livre nas praças e nas trilhas da serra.',

  destaquesFitness: [
    'Serra da Aratanha como cenário de trilhas e treino em terreno acidentado.',
    'Trilha do Boaçu, percurso clássico de subida até a Pedra do Perigo.',
    'Conurbação metropolitana com Maracanaú e Fortaleza, que amplia o acesso a serviços fitness.',
    'Calor forte na área urbana e clima mais ameno na serra, que orientam horário e local de treino.',
  ],

  precos: {
    avulsaMin: 50,
    avulsaMax: 120,
    mensalMin: 260,
    mensalMax: 700,
    onlineMin: 130,
    onlineMax: 360,
  },

  conclusao:
    'Entre a vida metropolitana conurbada e a Serra da Aratanha, Pacatuba oferece desde o treino urbano até as trilhas de serra. Um personal trainer ajuda a aproveitar esses contrastes com método, ajustando horário, intensidade e hidratação ao calor da cidade e ao terreno acidentado da serra.',

  vizinhas: ['fortaleza-ce', 'maracanau-ce', 'maranguape-ce'],

  fontes: [
    { nome: 'IBGE Cidades — Pacatuba', url: 'https://cidades.ibge.gov.br/brasil/ce/pacatuba/panorama' },
    { nome: 'Prefeitura de Pacatuba', url: 'https://www.pacatuba.ce.gov.br/' },
    { nome: 'Atlas Brasil — IDHM', url: 'https://www.atlasbrasil.org.br/' },
  ],
  atualizadoEm: '2026-06-29',
};
