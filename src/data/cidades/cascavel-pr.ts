import type { Cidade } from '../../lib/types';

export const cidade: Cidade = {
  slug: 'cascavel-pr',
  nome: 'Cascavel',
  uf: 'PR',
  estado: 'Paraná',
  estadoSlug: 'parana',
  regiao: 'Sul',
  gentilico: 'cascavelense',
  tipo: 'cidade',

  populacao: 348051,
  populacaoAno: 2022,
  idhm: 0.782,
  idhmClasse: 'alto',
  altitudeM: 781,

  resumoEconomico:
    'Principal polo do oeste do Paraná, a "Capital do Oeste", Cascavel tem forte base agroindustrial ancorada na Coopavel e em indústrias de alimentos. É líder estadual em área plantada de soja e um hub logístico que conecta o Brasil ao Paraguai e à Argentina, combinando agronegócio robusto com bom planejamento urbano e renda elevada no interior.',

  mercado:
    'Cidade de porte médio-alto e boa renda, Cascavel tem mercado consolidado de academias e estúdios de musculação, com demanda crescente por personal training nos bairros nobres. O Lago Municipal é o grande ponto de treino ao ar livre.',

  bairrosNobres: ['Country', 'Recanto Tropical', 'Maria Luiza', 'Nova York'],
  bairrosPopulares: ['Santa Cruz', 'Santa Felicidade', 'Cascavel Velho', 'Interlagos'],

  parques: [
    {
      nome: 'Parque Ecológico Paulo Gorski (Lago Municipal)',
      descricao:
        'Tem pista de mais de 6 km ao redor do lago, academia ao ar livre e bebedouros — o principal point de treino ao ar livre da cidade.',
    },
    {
      nome: 'Parque Ambiental Vitória',
      descricao:
        'Com cerca de 18 hectares, tem trilhas pavimentadas (cerca de 2.000 m) e academias ao ar livre.',
    },
    {
      nome: 'Parque Tarquínio Joslin dos Santos',
      descricao:
        'Tem trilhas, academia ao ar livre e dois lagos, ampliando as opções de treino em meio à natureza.',
    },
  ],
  ciclovias:
    'Cascavel tem ciclovias urbanas; a extensão exata da malha municipal ainda não é divulgada em fonte oficial.',

  clima:
    'O clima é subtropical úmido, com média em torno de 19 °C, verões quentes e invernos frios, com geadas.',
  climaTreino:
    'No verão, vale treinar cedo ou no fim de tarde; no inverno, o aquecimento reforçado é importante. O Lago Municipal é agradável para correr na maior parte do ano.',

  mobilidade:
    'Entroncamento rodoviário do oeste paranaense, Cascavel é cortada pela BR-277 (Foz a cerca de 140 km, Curitiba a cerca de 500 km), complementada pelas BR-369 e BR-467.',

  corridas: [
    {
      nome: 'Circuito Sesc de Corridas (etapa Cascavel)',
      descricao:
        'Corrida e caminhada de rua promovidas pelo Sesc Paraná, parte de um circuito estadual.',
    },
    {
      nome: 'Fresh Run Cascavel',
      descricao:
        'Provas de 1 km, 6 km e 12 km, que reforçam a cena de corrida de rua da cidade.',
    },
  ],
  culturaEsportiva:
    'Cascavel tem forte tradição no automobilismo (Autódromo Zilmar Beux) e um calendário ativo de corridas e ciclismo no Lago Municipal, que funciona como o coração esportivo da cidade.',
  academias:
    'A oferta é consolidada, com academias e estúdios de musculação atendendo um público de renda elevada nos bairros nobres, e bem complementada pela rede pública de parques.',

  destaquesFitness: [
    'Lago Municipal: pista de mais de 6 km, principal point de treino ao ar livre.',
    'Renda elevada e bairros nobres que favorecem o personal training premium.',
    'Rede pública de parques com academias ao ar livre.',
    'Calendário regular de corridas e ciclismo, que gera demanda por assessoria.',
  ],

  precos: {
    avulsaMin: 70,
    avulsaMax: 160,
    mensalMin: 350,
    mensalMax: 950,
    onlineMin: 170,
    onlineMax: 430,
  },

  conclusao:
    'Capital do Oeste paranaense, de boa renda e bem planejada, Cascavel tem no Lago Municipal o seu cartão-postal esportivo. Um personal trainer ajuda a aproveitar a pista do lago e as academias da cidade com método, respeitando o frio do inverno.',

  vizinhas: ['foz-do-iguacu-pr', 'curitiba-pr', 'maringa-pr'],

  fontes: [
    { nome: 'IBGE Cidades — Cascavel', url: 'https://cidades.ibge.gov.br/brasil/pr/cascavel/panorama' },
    { nome: 'Prefeitura de Cascavel', url: 'https://www.cascavel.pr.gov.br/' },
    { nome: 'Atlas Brasil — IDHM', url: 'https://www.atlasbrasil.org.br/' },
  ],
  atualizadoEm: '2026-08-12',

  capaArte: {
    src: '/capas-cidade/cascavel-pr.webp',
    w: 1200,
    h: 900,
    alt:
      'Personal trainer em Cascavel (PR) em arte que reúne treino com halteres, a Catedral Nossa Senhora Aparecida, o Centro pela Avenida Brasil e a fonte do Lago Municipal — Personal por Perto',
    legenda:
      'Treino personalizado em Cascavel: um plano feito para o seu corpo e a sua rotina, com acompanhamento profissional na cidade e região.',
  },
};
