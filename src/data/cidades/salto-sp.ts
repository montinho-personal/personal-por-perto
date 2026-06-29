import type { Cidade } from '../../lib/types';

export const cidade: Cidade = {
  slug: 'salto-sp',
  nome: 'Salto',
  uf: 'SP',
  estado: 'São Paulo',
  estadoSlug: 'sao-paulo',
  regiao: 'Sudeste',
  gentilico: 'saltense',
  tipo: 'cidade',

  populacao: 134319,
  populacaoAno: 2022,
  idhm: 0.78,
  idhmClasse: 'alto',
  altitudeM: 538,

  resumoEconomico:
    'Estância turística da Região Metropolitana de Sorocaba, entre Itu e Indaiatuba, Salto reúne indústria, comércio e turismo. Conhecida como a "Cidade dos Saltos" pelas quedas do Rio Tietê que deram origem ao município, é também sede de atrativos geológicos ligados ao Projeto Geoparque Corumbataí.',

  mercado:
    'Cidade média de cerca de 134 mil habitantes, tem mercado movido por academias e estúdios locais, além de forte demanda por atendimento domiciliar e treino ao ar livre nos parques às margens do Tietê e na orla do rio.',

  bairrosNobres: ['Jardim dos Pinheiros', 'Vila Padre Bento', 'Jardim Planalto', 'Residencial Salto da Divisa'],
  bairrosPopulares: ['São José', 'Cidade Nova', 'Jardim Nair Maria', 'Vila Teixeira'],

  parques: [
    {
      nome: 'Parque das Lavras',
      descricao:
        'Às margens do Rio Tietê, com cerca de 140 mil m², reúne trilhas, área verde e o conjunto histórico-arquitetônico de 1906 (segunda usina hidrelétrica construída no Tietê), usado para caminhada e educação ambiental.',
    },
    {
      nome: 'Parque da Rocha Moutonnée',
      descricao:
        'Atrativo geológico com formação de granito rosa esculpida por geleiras há centenas de milhões de anos, integrado ao Projeto Geoparque Corumbataí; tem área ampla para caminhada e visitação.',
    },
    {
      nome: 'Parque do Lago',
      descricao:
        'Ao lado do Rio Tietê, com cerca de 214 mil m², tem pista de caminhada, ciclovia, quadra e playground, ponto de corrida e treino ao ar livre.',
    },
  ],
  ciclovias:
    'Há ciclovia e pista no Parque do Lago e percurso ligando Salto a Itu, além da orla do Rio Tietê usada para caminhada e pedal.',

  clima:
    'O clima é tropical de altitude, quente no verão e ameno no inverno, em torno de 538 m de altitude.',
  climaTreino:
    'No verão, os treinos ao ar livre rendem mais no início da manhã e no fim de tarde, evitando o calor do meio do dia.',

  mobilidade:
    'Salto fica na Região Metropolitana de Sorocaba, entre Itu e Indaiatuba, com acesso pelas rodovias da região e proximidade do eixo Castello Branco.',

  corridas: [
    {
      nome: 'Corrida Nipo Brasileira de Salto',
      descricao:
        'Prova de rua de 5 km realizada na região central, na Praça Archimedes Lammoglia.',
    },
    {
      nome: 'Corrida da Conscientização do Autismo — etapa Salto',
      descricao:
        'Corrida de 5 km de cunho social, com largada nos bairros São Pedro e São Paulo.',
    },
  ],
  culturaEsportiva:
    'A cidade tem calendário de corridas de rua de 5 km e percursos de caminhada e ciclismo ao longo da orla do Tietê e dos parques municipais, com a identidade turística da "Cidade dos Saltos".',
  academias:
    'A oferta combina academias e estúdios locais com atendimento domiciliar, aproveitando parques e orla do rio para o treino ao ar livre.',

  destaquesFitness: [
    'Parques às margens do Rio Tietê (Lavras, do Lago) com pista e ciclovia para treino ao ar livre.',
    'Atrativo geológico da Rocha Moutonnée, no Projeto Geoparque Corumbataí.',
    'Orla do Tietê e ciclovia ligando Salto a Itu, voltadas a caminhada e pedal.',
    'Mercado de cidade média: academias, estúdios e personal a domicílio.',
  ],

  precos: {
    avulsaMin: 55,
    avulsaMax: 130,
    mensalMin: 280,
    mensalMax: 780,
    onlineMin: 130,
    onlineMax: 380,
  },

  conclusao:
    'Estância turística da Região Metropolitana de Sorocaba, a "Cidade dos Saltos" une o Rio Tietê, parques às suas margens e o patrimônio geológico do Geoparque Corumbataí. Um personal trainer encontra aqui mercado de cidade média, com academias, atendimento domiciliar e ótimos espaços para treino ao ar livre.',

  vizinhas: ['itu-sp', 'indaiatuba-sp', 'sorocaba-sp', 'campinas-sp'],

  fontes: [
    { nome: 'IBGE Cidades — Salto', url: 'https://cidades.ibge.gov.br/brasil/sp/salto/panorama' },
    { nome: 'Prefeitura da Estância Turística de Salto', url: 'https://salto.sp.gov.br/turismo/atrativos-turisticos/' },
    { nome: 'Atlas Brasil — IDHM', url: 'https://www.atlasbrasil.org.br/' },
  ],
  atualizadoEm: '2026-06-29',
};
