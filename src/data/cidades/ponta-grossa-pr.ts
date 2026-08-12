import type { Cidade } from '../../lib/types';

export const cidade: Cidade = {
  slug: 'ponta-grossa-pr',
  nome: 'Ponta Grossa',
  uf: 'PR',
  estado: 'Paraná',
  estadoSlug: 'parana',
  regiao: 'Sul',
  gentilico: 'ponta-grossense',
  tipo: 'cidade',

  populacao: 358371,
  populacaoAno: 2022,
  idhm: 0.763,
  idhmClasse: 'alto',
  altitudeM: 975,

  resumoEconomico:
    'Ponta Grossa tem o maior parque industrial do interior do Paraná e é um dos principais polos logísticos do Sul, na encruzilhada de rodovias e ferrovias dos Campos Gerais. Abriga multinacionais e é forte em alimentos, bebidas, cerâmica e papel. É a maior economia da região, com tradição operária e ferroviária marcante.',

  mercado:
    'O mercado fitness conta com a Smart Fit e academias locais, e a cultura de treino é reforçada por uma cena ativa de corrida de rua e pelo uso intenso dos parques públicos. A altitude e o clima ameno favorecem o aeróbico ao ar livre boa parte do ano.',

  bairrosNobres: ['Vila Estrela', 'Jardim Carvalho', 'Oficinas', 'Centro'],
  bairrosPopulares: ['Uvaranas', 'Nova Rússia', 'Olarias', 'Cará-Cará'],

  parques: [
    {
      nome: 'Parque Ambiental Governador Manoel Ribas',
      descricao:
        'Tem pista de caminhada e corrida de cerca de 2,1 km, academia ao ar livre, pista de skate e quadras de vôlei de areia e futsal.',
    },
    {
      nome: 'Lago das Olarias',
      descricao:
        'Com pista de cerca de 1,6 km, ciclovia, academia ao ar livre e food trucks, é um ponto de encontro popular para treino e lazer.',
    },
    {
      nome: 'Parque Linear de Ponta Grossa',
      descricao:
        'No bairro Oficinas, tem pista oval de ciclismo de 300 m, trilhas de caminhada e equipamentos de ginástica ao ar livre.',
    },
  ],
  ciclovias:
    'A cidade tem trechos de ciclovia e ciclofaixa, com destaque para o Lago das Olarias e o Parque Linear, integrando lazer e mobilidade ativa.',

  clima:
    'O clima é subtropical de altitude (cerca de 975 m), com verões amenos e invernos frios, com ondas de frio e mínimas que podem cair abaixo de 5 °C.',
  climaTreino:
    'No inverno, o frio pede aquecimento mais longo e roupa térmica, sobretudo nas manhãs; no restante do ano, a altitude e o clima ameno são ótimos para correr ao ar livre.',

  mobilidade:
    'Entroncamento rodoviário do Paraná, Ponta Grossa é cortada pelas BR-376, BR-373 e PR-151, com ligação fácil a Curitiba (cerca de 115 km) e ao Porto de Paranaguá.',

  corridas: [
    {
      nome: 'Corrida Cidade de Ponta Grossa',
      descricao:
        'Prova oficial da prefeitura nas comemorações de aniversário do município, com percursos de 6 km e 10 km no centro.',
    },
    {
      nome: 'Maratona de Ponta Grossa',
      descricao:
        'Com múltiplas distâncias (de 2,5 km a 42 km), é o maior evento de corrida da cidade.',
    },
  ],
  culturaEsportiva:
    'Ponta Grossa tem identidade esportiva forte, ligada ao Operário Ferroviário e à herança ferroviária, e uma cena de corrida de rua ativa o ano todo, sustentada pela boa rede de parques.',
  academias:
    'A oferta reúne a Smart Fit e academias locais, complementadas pelos parques com pistas e academias ao ar livre (Manoel Ribas, Olarias e Parque Linear).',

  destaquesFitness: [
    'Rede de parques com pistas e academias ao ar livre (Manoel Ribas, Olarias, Parque Linear).',
    'Calendário robusto de corridas de rua (Corrida Cidade e Maratona de PG).',
    'Smart Fit e academias locais.',
    'Altitude (cerca de 975 m) e clima ameno favorecem o aeróbico ao ar livre boa parte do ano.',
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
    'Polo industrial e ferroviário dos Campos Gerais, Ponta Grossa tem boa estrutura de parques e uma cena de corrida ativa. Um personal trainer ajuda a manter a constância o ano todo, ajustando o treino ao frio do inverno e aproveitando o clima ameno nas demais estações.',

  vizinhas: ['curitiba-pr', 'londrina-pr', 'maringa-pr'],

  fontes: [
    { nome: 'IBGE Cidades — Ponta Grossa', url: 'https://cidades.ibge.gov.br/brasil/pr/ponta-grossa/panorama' },
    { nome: 'Prefeitura de Ponta Grossa', url: 'https://www.pontagrossa.pr.gov.br/' },
    { nome: 'Atlas Brasil — IDHM', url: 'https://www.atlasbrasil.org.br/' },
  ],
  atualizadoEm: '2026-08-12',

  capaArte: {
    src: '/capas-cidade/ponta-grossa-pr.webp',
    w: 1200,
    h: 849,
    alt:
      'Personal trainer em Ponta Grossa (PR) em arte que reúne treino com halteres, os arenitos do Parque Estadual de Vila Velha, o Lago de Olarias e a Estação Saudade — Personal por Perto',
    legenda:
      'Treino personalizado em Ponta Grossa: um plano feito para o seu corpo e a sua rotina, com acompanhamento profissional na cidade e região.',
  },
};
