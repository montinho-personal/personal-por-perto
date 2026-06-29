import type { Cidade } from '../../lib/types';

export const cidade: Cidade = {
  slug: 'quixada-ce',
  nome: 'Quixadá',
  uf: 'CE',
  estado: 'Ceará',
  estadoSlug: 'ceara',
  regiao: 'Nordeste',
  gentilico: 'quixadaense',
  tipo: 'cidade',

  populacao: 84168,
  populacaoAno: 2022,
  idhm: 0.659,
  idhmClasse: 'médio',
  altitudeM: 190,

  resumoEconomico:
    'Principal polo do Sertão Central cearense, Quixadá é conhecida como a "Terra dos Monólitos" por suas formações rochosas que despontam na paisagem, como a Pedra da Galinha Choca. A economia combina comércio e serviços regionais, pecuária, agricultura e um turismo de aventura em ascensão ligado à escalada e ao ecoturismo. A presença de campi da UECE (Universidade Estadual do Ceará) e da UFC (Universidade Federal do Ceará) reforça o papel da cidade como referência educacional e de serviços para os municípios vizinhos.',

  mercado:
    'O mercado fitness é o de uma cidade média do interior, sustentado pelo comércio regional, pelo funcionalismo e pelo público universitário da UECE e da UFC. A oferta de academias se concentra no centro e nos bairros de maior renda, e o calor do semiárido empurra o treino ao ar livre para o início da manhã e o fim da tarde.',

  bairrosNobres: ['Centro', 'Campo Velho', 'Alto do Cruzeiro', 'Planalto Universitário'],
  bairrosPopulares: ['Combate', 'Renascer', 'Maravilha', 'Triângulo'],

  parques: [
    {
      nome: 'Monólitos / Pedra da Galinha Choca',
      descricao:
        'Cartão-postal de Quixadá, o conjunto de monólitos é um dos principais polos de escalada e trekking do Nordeste, com mais de 200 vias e trilhas que levam à "galinha" e a seus arredores.',
    },
    {
      nome: 'Açude do Cedro',
      descricao:
        'Reservatório centenário construído no fim do século XIX, com paredão histórico e entorno usado para caminhadas, ciclismo e contemplação da paisagem.',
    },
    {
      nome: 'Serra do Estevão',
      descricao:
        'Ponto mais alto do município, a cerca de 750 m, com clima mais ameno, mirantes e trilhas procuradas para caminhada e ecoturismo na zona rural.',
    },
  ],
  ciclovias:
    'A cidade tem poucos quilômetros de ciclovia dedicada; o ciclismo de lazer aproveita sobretudo o entorno do Açude do Cedro e as estradas de acesso aos monólitos.',

  clima:
    'O clima é semiárido quente, típico do Sertão Central cearense, com temperaturas médias elevadas durante todo o ano e chuvas concentradas no primeiro semestre, especialmente de fevereiro a abril.',
  climaTreino:
    'O calor intenso recomenda treinar ao ar livre no início da manhã ou no fim da tarde, com atenção à hidratação e à proteção solar; a Serra do Estevão oferece temperaturas mais amenas para quem busca o ambiente externo.',

  mobilidade:
    'O acesso se dá principalmente pela BR-122 e pela BR-116, eixos que conectam Quixadá a Fortaleza (cerca de 160 km) e ao restante do Sertão Central. O trânsito interno é leve e as distâncias dentro da cidade são curtas.',

  corridas: [
    {
      nome: 'Travessia e provas nos Monólitos',
      descricao:
        'O entorno das formações rochosas e do Açude do Cedro recebe trilhas, travessias e provas ligadas ao turismo de aventura, com forte presença da escalada e do trekking.',
    },
    {
      nome: 'Corridas de rua municipais',
      descricao:
        'A cidade conta com provas de rua promovidas em datas comemorativas, com percursos curtos pelo centro e pelas principais avenidas.',
    },
  ],
  culturaEsportiva:
    'Quixadá tem uma identidade esportiva ligada ao turismo de aventura — a escalada e o trekking nos monólitos atraem praticantes de todo o país —, somada a uma cena local de caminhada, ciclismo no entorno do Açude do Cedro e corridas de rua em ascensão.',
  academias:
    'A oferta de academias se concentra no centro e nos bairros de maior renda, atendendo ao comércio regional e ao público universitário, e é complementada pelos espaços ao ar livre dos monólitos, do Açude do Cedro e da Serra do Estevão.',

  destaquesFitness: [
    'Polo nordestino de escalada e trekking nos monólitos, com mais de 200 vias.',
    'Açude do Cedro como rota de caminhada e ciclismo de lazer.',
    'Serra do Estevão, ponto mais alto e mais ameno, para ecoturismo e treino ao ar livre.',
    'Demanda sustentada pelo público universitário da UECE e da UFC.',
  ],

  precos: {
    avulsaMin: 45,
    avulsaMax: 110,
    mensalMin: 240,
    mensalMax: 680,
    onlineMin: 110,
    onlineMax: 340,
  },

  conclusao:
    'Polo do Sertão Central e capital cearense dos monólitos, Quixadá une turismo de aventura, vida universitária e o calor do semiárido. Um personal trainer ajuda a montar uma rotina segura e adaptada ao clima, aproveitando os espaços ao ar livre da cidade — dos monólitos ao Açude do Cedro — em horários adequados.',

  vizinhas: ['fortaleza-ce', 'maracanau-ce', 'iguatu-ce'],

  fontes: [
    { nome: 'IBGE Cidades — Quixadá', url: 'https://cidades.ibge.gov.br/brasil/ce/quixada/panorama' },
    { nome: 'Prefeitura de Quixadá', url: 'https://www.quixada.ce.gov.br/' },
    { nome: 'Atlas Brasil — IDHM', url: 'https://www.atlasbrasil.org.br/' },
  ],
  atualizadoEm: '2026-06-29',
};
