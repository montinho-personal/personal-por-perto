import type { Cidade } from '../../lib/types';

export const cidade: Cidade = {
  slug: 'montes-claros-mg',
  nome: 'Montes Claros',
  uf: 'MG',
  estado: 'Minas Gerais',
  estadoSlug: 'minas-gerais',
  regiao: 'Sudeste',
  gentilico: 'montes-clarense',
  tipo: 'cidade',

  populacao: 414240,
  populacaoAno: 2022,
  idhm: 0.77,
  idhmClasse: 'alto',
  altitudeM: 638,

  resumoEconomico:
    'Principal polo econômico e de serviços do norte de Minas, Montes Claros exerce influência regional sobre o norte mineiro e o sul da Bahia. É referência em saúde (com ampla rede hospitalar), educação e cultura, e tem um parque industrial relevante (com nomes como Coteminas e Novo Nordisk). O setor de serviços é o motor da economia local.',

  mercado:
    'Centro urbano populoso com classe média consolidada, Montes Claros tem demanda crescente por academias, musculação, treino funcional e personal trainers, reforçada por uma cultura ativa de corrida de rua e por uma boa rede de parques municipais.',

  bairrosNobres: ['Ibituruna', 'Jardim São Luiz', 'Todos os Santos', 'Melo'],
  bairrosPopulares: ['Major Prates', 'Maracanã', 'Santos Reis', 'Delfino Magalhães'],

  parques: [
    {
      nome: 'Parque Municipal Milton Prates',
      descricao:
        'Tem pista asfaltada ao redor da Lagoa dos Patos, academia ao ar livre, quadras e campo de futsal; aberto das 6h às 21h.',
    },
    {
      nome: 'Parque Sagarana',
      descricao:
        'Tem ecopista iluminada de cerca de 1.300 m (caminhada até as 22h) e academia ao ar livre nas proximidades.',
    },
    {
      nome: 'Parque Guimarães Rosa',
      descricao:
        'Ampla área verde de cerca de 46 hectares para caminhada e atividades ao ar livre.',
    },
  ],
  ciclovias:
    'A cidade tem ciclovias e ciclofaixas; a extensão total ainda não é divulgada em fonte oficial.',

  clima:
    'O clima é tropical, com características semiáridas, quente (média em torno de 24 °C), com pico de calor entre setembro e outubro.',
  climaTreino:
    'O calor pede treino ao ar livre cedo de manhã ou no fim de tarde e à noite, com atenção redobrada à hidratação — a ecopista iluminada do Sagarana ajuda nos horários mais frescos.',

  mobilidade:
    'Montes Claros é servida pelas BR-135 e BR-251 (Belo Horizonte e Brasília) e pela BR-365 (Pirapora e Uberlândia), com aeroporto que opera voos para São Paulo e Belo Horizonte.',

  corridas: [
    {
      nome: 'Meia Maratona José Nardel',
      descricao:
        'Prova tradicional, com percursos de 7 km e 21 km, em comemoração ao aniversário da cidade.',
    },
    {
      nome: 'Circuito Sesc de Corridas (etapa Montes Claros)',
      descricao:
        'Etapa do circuito do Sesc/Fecomércio-MG, parte de um calendário robusto de corridas.',
    },
  ],
  culturaEsportiva:
    'Montes Claros tem forte cultura de corrida de rua, com calendário intenso (mais de dez provas em um semestre) e uso intenso dos parques municipais — um ambiente favorável a treinadores e grupos de corrida.',
  academias:
    'A oferta acompanha o porte da cidade e a classe média consolidada, com academias, crossfit e estúdios, complementada pela rede de parques municipais (Milton Prates, Sagarana e Guimarães Rosa).',

  academiasProximas: [
    { nome: 'Smart Fit Montes Claros', detalhe: 'na Av. Donato Quintino, junto ao Montes Claros Shopping' },
    { nome: 'Sport Fitness', detalhe: 'na Av. Deputado Plínio Ribeiro: musculação, lutas e aulas' },
    { nome: 'Full Fit Academia', detalhe: 'academia local na Rua Pedra Azul, no Antônio Pimenta' },
  ],

  destaquesFitness: [
    'População grande (mais de 400 mil) e classe média ativa — base sólida de clientes.',
    'Rede de parques municipais com pistas e academias ao ar livre.',
    'Calendário intenso de corridas de rua.',
    'Clima quente e semiárido, que exige orientação de hidratação e horários estratégicos.',
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
    'Polo do norte de Minas, Montes Claros tem boa rede de parques e uma cena de corrida intensa. Um personal trainer ajuda a aproveitar o Parque Milton Prates e a ecopista do Sagarana com método, ajustando horários e hidratação ao clima quente da região.',

  vizinhas: ['belo-horizonte-mg', 'uberlandia-mg', 'contagem-mg'],

  fontes: [
    { nome: 'IBGE Cidades — Montes Claros', url: 'https://cidades.ibge.gov.br/brasil/mg/montes-claros/panorama' },
    { nome: 'Prefeitura de Montes Claros', url: 'https://www.montesclaros.mg.gov.br/' },
    { nome: 'Atlas Brasil — IDHM', url: 'https://www.atlasbrasil.org.br/' },
  ],
  atualizadoEm: '2026-08-26',
  capaArte: {
    src: '/capas-cidade/montes-claros-mg.webp',
    w: 1200,
    h: 849,
    alt:
      'Personal trainer em Montes Claros (MG) em arte que une treino em dupla e o skyline do Coração do Norte de Minas, com o obelisco entre os prédios do centro — Personal por Perto',
    legenda:
      'Treino personalizado em Montes Claros: um plano feito para o seu corpo e a sua rotina, com acompanhamento profissional na cidade e região.',
  },
};
