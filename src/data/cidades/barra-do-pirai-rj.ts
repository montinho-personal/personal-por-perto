import type { Cidade } from '../../lib/types';

export const cidade: Cidade = {
  slug: 'barra-do-pirai-rj',
  nome: 'Barra do Piraí',
  uf: 'RJ',
  estado: 'Rio de Janeiro',
  estadoSlug: 'rio-de-janeiro',
  regiao: 'Sudeste',
  gentilico: 'barrense',
  tipo: 'cidade',

  populacao: 92883,
  populacaoAno: 2022,
  idhm: 0.733,
  idhmClasse: 'alto',
  altitudeM: 360,

  resumoEconomico:
    'Situada na confluência dos rios Piraí e Paraíba do Sul, no Médio Paraíba e na região do Vale do Café, Barra do Piraí nasceu e cresceu como entreposto ferroviário: foi um dos maiores entroncamentos de ferrovias da América Latina, ponto de redistribuição do café que descia das fazendas rumo ao porto do Rio de Janeiro. Hoje a economia combina comércio, serviços, indústria e logística, com a herança ferroviária ainda marcando a paisagem e a identidade da cidade.',

  mercado:
    'Como cidade média do Sul Fluminense, Barra do Piraí tem um mercado de treino personalizado em consolidação, ancorado em academias de bairro e no uso intenso das áreas verdes e das margens dos rios. O IDHM alto e a proximidade com o polo de Volta Redonda sustentam uma demanda crescente por acompanhamento individualizado.',

  bairrosNobres: ['Centro', 'Califórnia', 'Vila Helena', 'Boa Vista'],
  bairrosPopulares: ['Matadouro', 'Caixa D’Água', 'Santo Antônio', 'Roselândia'],

  parques: [
    {
      nome: 'Santuário de Vida Silvestre da Serra da Concórdia',
      descricao:
        'Área de Mata Atlântica preservada com programação de educação ambiental e trilhas, um dos principais espaços de ecoturismo e atividade ao ar livre da região.',
    },
    {
      nome: 'Orla do Rio Paraíba do Sul',
      descricao:
        'As margens do Paraíba do Sul e do Rio Piraí oferecem trechos arborizados usados para caminhada e corrida no centro da cidade.',
    },
    {
      nome: 'Praças e calçadões do Centro',
      descricao:
        'O entorno histórico da estação ferroviária e as praças centrais funcionam como pontos tradicionais de caminhada e encontro de quem treina ao ar livre.',
    },
  ],
  ciclovias:
    'A cidade tem topografia acidentada e malha cicloviária ainda limitada; o ciclismo acontece sobretudo nas vias de menor movimento e nas estradas vicinais do Vale do Café, muito procuradas por pedalada de longa distância.',

  clima:
    'O clima é tropical de altitude, quente no verão e ameno e seco no inverno típico do vale do Paraíba.',
  climaTreino:
    'As condições para treino ao ar livre são boas na maior parte do ano; no verão, vale priorizar a manhã e o fim de tarde e reforçar a hidratação, e o relevo acidentado favorece treinos de subida.',

  mobilidade:
    'Barra do Piraí carrega a marca de ter sido um dos maiores entroncamentos ferroviários da América Latina, e os trilhos ainda cortam o centro da cidade. O acesso rodoviário se dá por rodovias estaduais que conectam o município ao eixo da Via Dutra (BR-116) e ao restante do Médio Paraíba e do Vale do Café.',

  corridas: [
    {
      nome: 'Corridas de rua de Barra do Piraí',
      descricao:
        'Provas locais que exploram o relevo acidentado e as margens dos rios, integrando o calendário esportivo da cidade e do Médio Paraíba.',
    },
    {
      nome: 'Circuito regional do Médio Paraíba',
      descricao:
        'Os corredores barrenses participam de provas em cidades próximas como Volta Redonda, Barra Mansa e Resende ao longo do ano.',
    },
  ],
  culturaEsportiva:
    'A cultura esportiva local mistura o futebol de tradição, a corrida de rua aproveitando o relevo de subidas e descidas, e o ecoturismo na Serra da Concórdia e no Vale do Café, com pedais e caminhadas em meio à Mata Atlântica.',
  academias:
    'A oferta de academias é típica de cidade média do interior fluminense, distribuída pelos bairros e bem complementada pelo uso das praças, das margens dos rios e das estradas do Vale do Café para treino ao ar livre.',

  destaquesFitness: [
    'Santuário de Vida Silvestre da Serra da Concórdia para trilhas e ecoturismo.',
    'Margens do Paraíba do Sul e do Rio Piraí para caminhada e corrida.',
    'Relevo acidentado que favorece treinos de subida e corrida de rua.',
    'Estradas do Vale do Café procuradas por ciclistas de longa distância.',
  ],

  precos: {
    avulsaMin: 50,
    avulsaMax: 110,
    mensalMin: 280,
    mensalMax: 680,
    onlineMin: 130,
    onlineMax: 340,
  },

  conclusao:
    'Pérola do Vale do Café e antigo coração ferroviário do Sudeste, Barra do Piraí oferece um cenário rico para quem quer treinar ao ar livre, entre as margens dos rios, as praças do centro e as serras de Mata Atlântica. Um personal trainer ajuda a transformar esse relevo desafiador em aliado, ajustando o treino à rotina e mirando resultados consistentes.',

  vizinhas: ['volta-redonda-rj', 'barra-mansa-rj', 'resende-rj'],

  fontes: [
    { nome: 'IBGE Cidades — Barra do Piraí', url: 'https://cidades.ibge.gov.br/brasil/rj/barra-do-pirai/panorama' },
    { nome: 'Prefeitura de Barra do Piraí', url: 'https://portalbarradopirai.com.br/' },
    { nome: 'Atlas Brasil — IDHM', url: 'https://www.atlasbrasil.org.br/' },
  ],
  atualizadoEm: '2026-06-29',
};
