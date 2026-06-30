import type { Cidade } from '../../lib/types';

export const cidade: Cidade = {
  slug: 'caxambu-mg',
  nome: 'Caxambu',
  uf: 'MG',
  estado: 'Minas Gerais',
  estadoSlug: 'minas-gerais',
  regiao: 'Sudeste',
  gentilico: 'caxambuense',
  tipo: 'cidade',

  populacao: 21056,
  populacaoAno: 2022,
  idhm: 0.743,
  idhmClasse: 'alto',
  altitudeM: 895,

  resumoEconomico:
    'Caxambu fica no Sul de Minas, no planalto da Serra da Mantiqueira, e é a principal estância hidromineral do Circuito das Águas. Sua economia gira em torno das águas minerais e do turismo: o município abriga um dos maiores complexos hidrominerais do mundo, com fontes de águas gasosas e medicinais que sustentam o envasamento de água mineral, o termalismo e o turismo de saúde. Hotéis, pousadas, gastronomia e serviços ligados ao visitante completam o perfil econômico de uma cidade pequena com forte vocação turística e histórica.',

  mercado:
    'Por ser uma cidade pequena e turística, o mercado fitness de Caxambu é enxuto e atende tanto moradores quanto o fluxo sazonal de visitantes que buscam manter a rotina de treino durante a estadia. A procura por personal trainers tende a se concentrar em quem quer acompanhamento individualizado, treino voltado ao bem-estar e ao aproveitamento do clima ameno de altitude para atividades ao ar livre.',

  bairrosNobres: ['Centro', 'Santa Tereza', 'Observatório', 'Santa Cruz'],
  bairrosPopulares: ['Caxambu Velho', 'Nossa Senhora Aparecida', 'Açude', 'Pousada das Pedras'],

  parques: [
    {
      nome: 'Parque das Águas Dr. Lisandro Carneiro Guimarães',
      descricao:
        'Cartão-postal da cidade, no Centro, com cerca de 210 mil m², reúne fontes de águas minerais, lago com pedalinhos, balneário, coreto e amplas áreas verdes — espaço tradicional para caminhada e atividade leve em meio às alamedas arborizadas.',
    },
    {
      nome: 'Morro de Caxambu',
      descricao:
        'Elevação que culmina por volta de 1.090 metros de altitude, acessível por bondinho a partir do Parque das Águas; o entorno e as ladeiras de acesso servem de percurso para quem treina ao ar livre com vista para a cidade e a Mantiqueira.',
    },
    {
      nome: 'Entorno da Serra da Mantiqueira',
      descricao:
        'A cidade é cercada por morros, cachoeiras e estradas de serra do Circuito das Águas, que oferecem trilhas e percursos de subida em clima de montanha para caminhada, corrida e pedal.',
    },
  ],
  ciclovias:
    'A estrutura cicloviária é modesta, própria de uma cidade pequena; boa parte do pedal e da corrida acontece nas vias urbanas, no entorno do Parque das Águas e nas estradas de serra da região.',

  clima:
    'O clima é tropical de altitude (subtropical ameno e úmido), marcado pelo relevo da Serra da Mantiqueira. Há duas estações bem definidas: verão quente e úmido e inverno frio e seco, com temperaturas médias em torno de 22 °C nos meses mais quentes e cerca de 15 °C nos mais frios, podendo cair bastante nas madrugadas de inverno.',
  climaTreino:
    'O clima ameno de altitude é favorável ao treino ao ar livre na maior parte do ano, com manhãs e fins de tarde agradáveis. No inverno, as temperaturas baixas pedem aquecimento mais cuidadoso e roupas adequadas; no verão chuvoso, vale ter um plano alternativo para os dias de chuva.',

  mobilidade:
    'Caxambu está estrategicamente situada entre São Paulo, Rio de Janeiro e Belo Horizonte, com acesso pelas rodovias que cruzam o Sul de Minas, entre elas a BR-354. O deslocamento interno é feito principalmente por carro e por ônibus, e a topografia de serra marca as ligações com as demais cidades do Circuito das Águas.',

  corridas: [
    {
      nome: 'Corrida Toca Raul Caxambu',
      descricao:
        'Prova de corrida de rua realizada na cidade, que movimenta corredores locais e da região do Circuito das Águas.',
    },
    {
      nome: 'Circuito FS Run — etapa Caxambu',
      descricao:
        'Etapa de circuito de corrida de rua sediada em Caxambu, aproveitando o clima de altitude e os percursos urbanos da estância.',
    },
  ],
  culturaEsportiva:
    'A cultura esportiva se apoia no uso do Parque das Águas e do entorno da Mantiqueira para caminhada e corrida, no termalismo e no turismo de saúde, e em provas de rua que exploram o clima ameno de altitude da estância hidromineral.',
  academias:
    'A oferta é formada principalmente por academias locais de musculação e treino funcional, em porte compatível com uma cidade pequena e turística, distribuídas pelo Centro e bairros próximos.',

  destaquesFitness: [
    'Estância hidromineral do Circuito das Águas, com um dos maiores complexos hidrominerais do mundo.',
    'Parque das Águas e suas alamedas como espaço tradicional de caminhada e atividade ao ar livre.',
    'Clima ameno de altitude na Serra da Mantiqueira, favorável ao treino na maior parte do ano.',
    'Economia movida a águas minerais e turismo de saúde, com fluxo sazonal de visitantes.',
  ],

  precos: {
    avulsaMin: 55,
    avulsaMax: 125,
    mensalMin: 270,
    mensalMax: 740,
    onlineMin: 120,
    onlineMax: 360,
  },

  conclusao:
    'Pequena, turística e cercada pela Serra da Mantiqueira, Caxambu oferece um clima ameno de altitude que convida ao treino ao ar livre, do Parque das Águas às estradas de serra do Circuito das Águas. Um personal trainer ajuda a organizar a rotina aproveitando esse cenário, ajustando o treino às estações e mantendo a constância ao longo do ano.',

  vizinhas: ['sao-lourenco-mg', 'tres-coracoes-mg'],

  fontes: [
    { nome: 'IBGE Cidades — Caxambu', url: 'https://cidades.ibge.gov.br/brasil/mg/caxambu/panorama' },
    { nome: 'Prefeitura de Caxambu', url: 'https://www.caxambu.mg.gov.br/' },
    { nome: 'Atlas Brasil — IDHM', url: 'https://www.atlasbrasil.org.br/' },
  ],
  atualizadoEm: '2026-06-29',
};
