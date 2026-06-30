import type { Cidade } from '../../lib/types';

export const cidade: Cidade = {
  slug: 'horizonte-ce',
  nome: 'Horizonte',
  uf: 'CE',
  estado: 'Ceará',
  estadoSlug: 'ceara',
  regiao: 'Nordeste',
  gentilico: 'horizontino',
  tipo: 'cidade',

  populacao: 74755,
  populacaoAno: 2022,
  idhm: 0.658,
  idhmClasse: 'médio',
  altitudeM: 50,

  resumoEconomico:
    'Integrante da Região Metropolitana de Fortaleza, a cerca de 40 km da capital pela BR-116, Horizonte é um dos principais polos industriais do Ceará. A economia é puxada pelo setor calçadista — com a grande fábrica do grupo Grendene/Vulcabras — somado a indústrias têxteis, de granito e do ramo automotivo, que geram milhares de empregos e sustentam um forte crescimento populacional.',

  mercado:
    'O mercado fitness acompanha o crescimento da cidade, com academias e estúdios concentrados no Centro e no eixo da BR-116, e demanda puxada pela população operária do parque industrial e pelos novos loteamentos residenciais.',

  bairrosNobres: ['Centro', 'Planalto Horizonte', 'Gameleira', 'Cajueiro'],
  bairrosPopulares: ['Catu', 'Jenipapeiro', 'Lagoinha', 'Mal Cozinhado'],

  parques: [
    {
      nome: 'Margens do rio Pacoti',
      descricao:
        'Principal curso d’água do município, cujas margens e travessias servem de referência para caminhadas e pedaladas no entorno rural e urbano.',
    },
    {
      nome: 'Açude Gameleira',
      descricao:
        'Reservatório próximo à área urbana, cujo entorno é usado para caminhada e atividade ao ar livre.',
    },
    {
      nome: 'Praças e avenidas urbanas',
      descricao:
        'Praças do Centro e vias requalificadas concentram a atividade física pública nas primeiras e últimas horas do dia.',
    },
  ],
  ciclovias:
    'A cidade não tem rede cicloviária extensa divulgada em fonte oficial; o ciclismo de estrada se apoia nas vias do entorno e nas conexões com a BR-116.',

  clima:
    'O clima é tropical quente e semiúmido, típico da Região Metropolitana de Fortaleza, quente o ano todo, com chuvas concentradas no primeiro semestre.',
  climaTreino:
    'O calor intenso favorece os horários de menor radiação, no início da manhã e no fim de tarde, com atenção à hidratação.',

  mobilidade:
    'Horizonte é cortada pela BR-116, principal eixo rodoviário que liga a cidade a Fortaleza e ao interior, espinha dorsal do deslocamento local e do escoamento do distrito industrial.',

  corridas: [
    {
      nome: 'Corrida de rua de Horizonte',
      descricao:
        'Prova promovida no calendário esportivo do município, com largada na área central.',
    },
    {
      nome: 'Provas do circuito metropolitano',
      descricao:
        'Corredores da cidade complementam a agenda com etapas e eventos realizados em Fortaleza e nas cidades vizinhas da região metropolitana.',
    },
  ],
  culturaEsportiva:
    'A cultura esportiva se apoia em iniciativas da prefeitura e na proximidade com Fortaleza, que amplia o acesso a corridas de rua e eventos da Grande Fortaleza para os atletas locais.',
  academias:
    'A oferta reúne academias e estúdios concentrados no Centro e ao longo da BR-116, complementada pelas praças, pelas avenidas urbanas e pelo entorno do açude Gameleira.',

  destaquesFitness: [
    'Polo industrial em forte crescimento, com demanda fitness puxada pela população operária e pelos novos loteamentos.',
    'Margens do rio Pacoti e açude Gameleira como espaços naturais para caminhada e treino ao ar livre.',
    'Proximidade com Fortaleza pela BR-116, que amplia o acesso a corridas e eventos da região metropolitana.',
    'Calor forte o ano todo, que pede atenção a horário e hidratação.',
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
    'Polo calçadista em pleno crescimento na Grande Fortaleza, Horizonte tem nas margens do rio Pacoti, no açude Gameleira e nas praças urbanas seus espaços de treino. Um personal trainer ajuda a aproveitá-los com método, ajustando horários e hidratação ao calor do ano todo.',

  vizinhas: ['fortaleza-ce', 'eusebio-ce', 'maracanau-ce'],

  fontes: [
    { nome: 'IBGE Cidades — Horizonte', url: 'https://cidades.ibge.gov.br/brasil/ce/horizonte/panorama' },
    { nome: 'Prefeitura de Horizonte', url: 'https://www.horizonte.ce.gov.br/' },
    { nome: 'Atlas Brasil — IDHM', url: 'https://www.atlasbrasil.org.br/' },
  ],
  atualizadoEm: '2026-06-29',
};
