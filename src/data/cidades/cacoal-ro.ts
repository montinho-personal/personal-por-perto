import type { Cidade } from '../../lib/types';

export const cidade: Cidade = {
  slug: 'cacoal-ro',
  nome: 'Cacoal',
  uf: 'RO',
  estado: 'Rondônia',
  estadoSlug: 'rondonia',
  regiao: 'Norte',
  gentilico: 'cacoalense',
  tipo: 'cidade',

  populacao: 86887,
  populacaoAno: 2022,
  idhm: 0.718,
  idhmClasse: 'alto',
  altitudeM: 179,

  resumoEconomico:
    'Polo regional do centro-sul de Rondônia, Cacoal é conhecida como "Capital do Café" e abriga um dos maiores polos cafeeiros da Amazônia, somado a forte pecuária e ao agronegócio. A cidade é também a segunda maior referência de saúde do estado, com o Hospital Regional de Cacoal atendendo a região da Zona da Mata rondoniense e o entorno cafeeiro.',

  mercado:
    'A economia diversificada do café, da pecuária e dos serviços de saúde sustenta um setor de academias e estúdios em crescimento; a presença de instituições de ensino e o calendário de corridas de rua ampliam a procura por acompanhamento de personal trainers.',

  bairrosNobres: ['Centro', 'Jardim Clodoaldo', 'Village do Sol', 'Jardim Saúde'],
  bairrosPopulares: ['Floresta', 'Jardim Eldorado', 'Princesa Isabel', 'Novo Horizonte'],

  parques: [
    {
      nome: 'Parque Sabiá',
      descricao:
        'Complexo esportivo e de lazer com mais de 23 mil m² revitalizados, com pista de caminhada iluminada no entorno da lagoa, quadras poliesportiva e de vôlei de areia, academia ao ar livre e playground.',
    },
    {
      nome: 'Pista de caminhada do Jardim Eldorado',
      descricao:
        'Estrutura para caminhada e atividade física ao ar livre implantada no bairro, opção de treino fora do centro.',
    },
  ],
  ciclovias:
    'A cidade vem recebendo praças, parques e pistas de caminhada por programas estaduais de revitalização; uma malha cicloviária consolidada ainda não é divulgada em fonte oficial.',

  clima:
    'O clima é equatorial/tropical úmido amazônico, quente o ano todo, com estação chuvosa marcada (verão) e período mais seco no inverno, típico do centro-sul de Rondônia.',
  climaTreino:
    'O calor e a alta umidade dificultam a dissipação do suor, o que pede treino nas primeiras horas da manhã ou no fim da tarde, em locais sombreados e ventilados, com hidratação reforçada.',

  mobilidade:
    'Cacoal é cortada pela BR-364, o principal eixo rodoviário de Rondônia (Porto Velho–Cuiabá), o que reforça seu papel de entroncamento logístico e de polo de serviços para os municípios da região.',

  corridas: [
    {
      nome: 'Corrida Cafecau',
      descricao:
        'Prova turística que une esporte, cultura e natureza na "Capital do Café", com percursos de corrida e opção de caminhada.',
    },
    {
      nome: 'OAB Run Cacoal',
      descricao:
        'Corrida de rua promovida pela OAB local, com percursos de 5 km e 10 km abertos à comunidade.',
    },
    {
      nome: 'Corrida Rural do IFRO Campus Cacoal',
      descricao:
        'Prova organizada pelo campus do IFRO, com categorias de 5 km e 10 km em ambiente rural.',
    },
  ],
  culturaEsportiva:
    'A cena de corrida de rua é ativa, com provas ligadas ao café, à OAB e às instituições de ensino, e a cultura local mistura o orgulho cafeeiro ao perfil de cidade-polo de saúde e serviços.',
  academias:
    'A oferta de academias e estúdios cresce com a economia diversificada da cidade, complementada por espaços públicos como o Parque Sabiá e as pistas de caminhada de bairro.',

  destaquesFitness: [
    'Parque Sabiá, complexo esportivo com pista de caminhada iluminada para corrida e treino.',
    'Calendário de corridas de rua ativo (Cafecau, OAB Run, Corrida Rural do IFRO).',
    'Identidade de "Capital do Café", que dá tema a eventos esportivos da cidade.',
    'Economia diversificada (café, pecuária e saúde) que sustenta o setor fitness.',
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
    'Capital do Café e polo de saúde do centro-sul de Rondônia, Cacoal alia economia diversificada a uma cena de corrida de rua em crescimento. Um personal trainer ajuda a aproveitar o Parque Sabiá e as pistas de caminhada com método, ajustando o treino ao calor e à umidade amazônicos.',

  vizinhas: ['ji-parana-ro', 'vilhena-ro', 'porto-velho-ro'],

  fontes: [
    { nome: 'IBGE Cidades — Cacoal', url: 'https://cidades.ibge.gov.br/brasil/ro/cacoal/panorama' },
    { nome: 'Prefeitura de Cacoal', url: 'https://cacoal.ro.gov.br/' },
    { nome: 'Atlas Brasil — IDHM', url: 'https://www.atlasbrasil.org.br/' },
  ],
  atualizadoEm: '2026-06-29',
};
