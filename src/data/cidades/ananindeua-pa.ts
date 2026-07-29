import type { Cidade } from '../../lib/types';

export const cidade: Cidade = {
  slug: 'ananindeua-pa',
  nome: 'Ananindeua',
  uf: 'PA',
  estado: 'Pará',
  estadoSlug: 'para',
  regiao: 'Norte',
  gentilico: 'ananindeuense',
  tipo: 'cidade',

  populacao: 478778,
  populacaoAno: 2022,
  idhm: 0.718,
  idhmClasse: 'alto',

  resumoEconomico:
    'Segunda maior cidade do Pará e segunda maior economia do estado, Ananindeua é conurbada com Belém na Região Metropolitana, a cerca de 19 km da capital. A economia é dominada por serviços e administração pública. Originalmente uma cidade-dormitório, hoje tem dinâmica própria de comércio e serviços, com grande contingente de classe média.',

  mercado:
    'Cidade densa e populosa, Ananindeua tem forte presença de academias, concentradas em bairros como Cidade Nova e Coqueiro, sustentadas pela grande população de classe média. Novos espaços públicos, como a Orla do Maguari, ampliam o treino ao ar livre.',

  bairrosNobres: ['Cidade Nova', 'Coqueiro', 'Centro', 'Maguari'],
  bairrosPopulares: ['Icuí-Guajará', 'Águas Lindas', 'Jaderlândia', 'Curuçambá'],

  parques: [
    {
      nome: 'Parque do 8',
      descricao:
        'Em Cidade Nova, é um novo cartão-postal da cidade, com calçadão e espaço de lazer — palco da Corrida Oficial de Ananindeua.',
    },
    {
      nome: 'Orla de Ananindeua (Maguari)',
      descricao:
        'Em frente ao Rio Maguari, tem deck acessível e iluminado, área de calistenia, passeio e bicicletário — com previsão de expansão por vários quilômetros.',
    },
    {
      nome: 'Parque Cultural Vila Maguary',
      descricao:
        'Parque arborizado com ciclovia, calçada suspensa e estrutura de lazer, bom para caminhada e atividades ao ar livre.',
    },
  ],
  ciclovias:
    'Há ciclovia no Parque Cultural Vila Maguary e na nova orla; a extensão total da malha urbana ainda não é divulgada em fonte oficial.',

  clima:
    'O clima é equatorial, quente e úmido, com chuvas frequentes e temperaturas altas o ano todo.',
  climaTreino:
    'O calor e a umidade pedem treino ao ar livre no início da manhã ou no fim da tarde, com hidratação reforçada — a área de calistenia da orla é uma boa opção nesses horários.',

  mobilidade:
    'Ananindeua é cortada pela BR-316 e pela Alça Viária, eixos que a integram a Belém e ao interior, com forte dependência do transporte rodoviário metropolitano.',

  corridas: [
    {
      nome: 'Corrida Oficial de Ananindeua',
      descricao:
        'Provas de 5 km e 10 km no Parque do 8, com mais de 500 participantes, promovida pela Secretaria Municipal de Esporte.',
    },
    {
      nome: 'Corrida do Noel',
      descricao:
        'Evento de fim de ano que reúne atletas de todo o estado, parte do calendário esportivo metropolitano.',
    },
  ],
  culturaEsportiva:
    'Ananindeua tem forte adesão a corridas de rua municipais, com viés de inclusão social, e está integrada ao circuito esportivo metropolitano de Belém. Os novos espaços públicos vêm ampliando a prática ao ar livre.',
  academias:
    'A oferta de academias é grande para o porte da cidade, concentrada em Cidade Nova e Coqueiro, complementada pela orla com calistenia e pelos parques municipais.',

  destaquesFitness: [
    'Área de calistenia ao ar livre na nova Orla do Maguari.',
    'Parque do 8 como hub de lazer e ponto de partida de corridas.',
    'Alta densidade de academias em Cidade Nova e Coqueiro.',
    'Eventos municipais recorrentes de 5 km e 10 km.',
  ],

  precos: {
    avulsaMin: 65,
    avulsaMax: 150,
    mensalMin: 320,
    mensalMax: 880,
    onlineMin: 160,
    onlineMax: 410,
  },

  conclusao:
    'Segunda maior cidade do Pará e parte da Grande Belém, Ananindeua tem mercado de academias robusto e novos espaços públicos para treinar. Um personal trainer ajuda a aproveitar a orla, os parques e as academias com método, respeitando o calor equatorial.',

  vizinhas: ['belem-pa', 'santarem-pa'],

  fontes: [
    { nome: 'IBGE Cidades — Ananindeua', url: 'https://cidades.ibge.gov.br/brasil/pa/ananindeua/panorama' },
    { nome: 'Prefeitura de Ananindeua', url: 'https://www.ananindeua.pa.gov.br/' },
    { nome: 'Atlas Brasil — IDHM', url: 'https://www.atlasbrasil.org.br/' },
  ],
  atualizadoEm: '2026-07-29',
  capaArte: {
    src: '/capas-cidade/ananindeua-pa.webp',
    w: 1200,
    h: 675,
    alt:
      'Personal trainer em Ananindeua (PA) em arte com referências da cidade — a placa "Orgulho de ser daqui", o viaduto movimentado da BR-316 e as palmeiras paraenses — Personal por Perto',
    legenda:
      'Treino personalizado em Ananindeua: um plano feito para o seu corpo e a sua rotina, com acompanhamento profissional na cidade e região.',
  },
};
