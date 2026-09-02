import type { Cidade } from '../../lib/types';

export const cidade: Cidade = {
  slug: 'arapiraca-al',
  nome: 'Arapiraca',
  uf: 'AL',
  estado: 'Alagoas',
  estadoSlug: 'alagoas',
  regiao: 'Nordeste',
  gentilico: 'arapiraquense',
  tipo: 'cidade',

  populacao: 234696,
  populacaoAno: 2022,
  idhm: 0.649,
  idhmClasse: 'médio',
  altitudeM: 264,

  resumoEconomico:
    'Segunda maior cidade de Alagoas e principal centro do Agreste alagoano, Arapiraca foi historicamente um grande polo do fumo e do comércio regional. Hoje a economia é puxada por comércio, serviços e agropecuária, funcionando como polo de compras e de saúde para dezenas de municípios do interior.',

  mercado:
    'Cidade-polo regional, tem rede consolidada de academias e estúdios que atende também moradores das cidades vizinhas, em um mercado em expansão acompanhando o crescimento populacional.',

  bairrosNobres: ['Centro', 'Brasília', 'Alto do Cruzeiro', 'Novo Horizonte'],
  bairrosPopulares: ['Planalto', 'Manoel Teles', 'Canafístula', 'Senador Nilo Coelho'],

  parques: [
    {
      nome: 'Lago da Perucaba',
      descricao:
        'Orla e área de lazer que serve de sede para corridas de rua da cidade.',
    },
    {
      nome: 'Área Verde Dom Constantino Lüers',
      descricao:
        'No Novo Horizonte, é um passeio público com pista de caminhada, ciclovia e praças.',
    },
    {
      nome: 'Ciclovia do Trabalhador',
      descricao:
        'Corredor urbanizado para caminhada e bicicleta.',
    },
  ],
  ciclovias:
    'A cidade tem ciclovias urbanizadas, como a do Trabalhador; a extensão total ainda não é divulgada em fonte oficial.',

  clima:
    'O clima é tropical semiárido/semiúmido do Agreste, com média anual em torno de 25 °C e estação seca longa.',
  climaTreino:
    'O calor moderado a alto e a seca prolongada recomendam treinar no início da manhã ou no fim de tarde, com hidratação reforçada.',

  mobilidade:
    'Arapiraca é cortada pela AL-220, eixo do Agreste que a liga a Maceió e ao sertão, sendo importante entroncamento rodoviário regional.',

  corridas: [
    {
      nome: 'Corrida da Emancipação de Arapiraca',
      descricao:
        'Tradicional prova de aniversário da cidade, realizada no Lago da Perucaba.',
    },
    {
      nome: 'Circuito Sesc de Corridas — Etapa Arapiraca',
      descricao:
        'Etapa local do circuito, com caminhada, 5 km e 10 km.',
    },
  ],
  culturaEsportiva:
    'Há forte tradição de corridas de rua de calendário fixo (Emancipação, Sesc) e cultura de futebol, com o poder público investindo em ciclovias e praças com academia ao ar livre.',
  academias:
    'A oferta reúne academias e estúdios, como maior mercado fitness do Agreste alagoano, complementada pelo Lago da Perucaba e pelas áreas verdes urbanizadas.',

  destaquesFitness: [
    'Maior mercado fitness do Agreste alagoano (efeito polo regional).',
    'Calendário consolidado de corridas de rua (Emancipação como evento-âncora).',
    'Lago da Perucaba como principal ponto de treino outdoor.',
    'Expansão de ciclovias e áreas verdes com equipamentos públicos.',
  ],

  precos: {
    avulsaMin: 50,
    avulsaMax: 125,
    mensalMin: 260,
    mensalMax: 700,
    onlineMin: 140,
    onlineMax: 370,
  },

  conclusao:
    'Capital do Agreste alagoano, Arapiraca é o maior mercado fitness do interior do estado, com o Lago da Perucaba e um calendário de corridas ativo. Um personal trainer ajuda a aproveitar esse cenário com método, ajustando horários e hidratação ao calor do Agreste.',

  vizinhas: ['maceio-al'],

  capaArte: {
    src: '/capas-cidade/arapiraca-al.webp',
    w: 1200,
    h: 1200,
    alt: 'Personal trainer em Arapiraca (AL) em arte com o Monumento ao Fumo, a Catedral Bom Jesus dos Aflitos, a feira livre e a praça da cidade, com o treino em primeiro plano — Personal por Perto',
    legenda: 'Treino personalizado em Arapiraca: foco, disciplina e constância na segunda maior cidade de Alagoas.',
  },
  fontes: [
    { nome: 'IBGE Cidades — Arapiraca', url: 'https://cidades.ibge.gov.br/brasil/al/arapiraca/panorama' },
    { nome: 'Prefeitura de Arapiraca', url: 'https://www.arapiraca.al.gov.br/' },
    { nome: 'Atlas Brasil — IDHM', url: 'https://www.atlasbrasil.org.br/' },
  ],
  atualizadoEm: '2026-09-02',
};
