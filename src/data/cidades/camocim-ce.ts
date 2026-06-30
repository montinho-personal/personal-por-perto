import type { Cidade } from '../../lib/types';

export const cidade: Cidade = {
  slug: 'camocim-ce',
  nome: 'Camocim',
  uf: 'CE',
  estado: 'Ceará',
  estadoSlug: 'ceara',
  regiao: 'Nordeste',
  gentilico: 'camocinense',
  tipo: 'cidade',

  populacao: 62326,
  populacaoAno: 2022,
  idhm: 0.62,
  idhmClasse: 'médio',
  altitudeM: 5,

  resumoEconomico:
    'Município do litoral oeste cearense, Camocim tem a economia ancorada na pesca e na carcinicultura (criação de camarão em viveiros), além da extração de sal marinho, do beneficiamento do pescado e do turismo de praia. A cidade está na foz do rio Coreaú, com extenso litoral de dunas e estuário, e funciona como uma das portas de entrada terrestres para a região de Jericoacoara.',

  mercado:
    'A demanda fitness combina a população urbana local com o fluxo turístico do litoral, especialmente de quem usa a cidade como base para Jericoacoara. O clima quente e ventoso e a orla extensa favorecem treinos ao ar livre e atividades de praia.',

  bairrosNobres: ['Centro', 'Praia', 'Tucuns'],
  bairrosPopulares: ['Boa Vista', 'Aldeota', 'Maceió', 'Vila Nova'],

  parques: [
    {
      nome: 'Orla de Camocim',
      descricao:
        'Frente de mar na foz do rio Coreaú, com calçadão, quiosques e área de caminhada usada por moradores no fim da tarde.',
    },
    {
      nome: 'Praia das Barreiras',
      descricao:
        'Praia próxima ao centro, na foz do rio Coreaú, com falésias e areais largos que servem de cenário para caminhadas e corridas de praia.',
    },
    {
      nome: 'Praia da Tatajuba e Ilha do Amor',
      descricao:
        'Conjunto de dunas, lagoas de água doce e areais entre Camocim e Jericoacoara, destino de esportes ao ar livre como kitesurfe.',
    },
  ],
  ciclovias:
    'A cidade não dispõe de malha cicloviária estruturada divulgada em fonte oficial; o deslocamento por bicicleta acontece sobretudo pelas vias do centro e pela orla.',

  clima:
    'O clima é quente e ventoso, típico do litoral noroeste cearense, com temperaturas elevadas o ano todo e ventos fortes na faixa litorânea, especialmente no segundo semestre.',
  climaTreino:
    'O calor constante pede treinos no início da manhã ou no fim da tarde, com hidratação reforçada; o vento litorâneo ajuda a amenizar a sensação térmica, mas exige atenção na exposição solar e na proteção da pele.',

  mobilidade:
    'O acesso rodoviário se dá pela CE-085 (Estruturante) e por ligações com a BR-403, que conectam o litoral oeste ao restante do Ceará. A cidade tem origem histórica ligada à antiga ferrovia que ligava o porto de Camocim a Sobral, hoje desativada.',

  corridas: [
    {
      nome: 'Meia Maratona de Camocim / Beach Run',
      descricao:
        'Etapa de circuito de corridas de praia, com percursos de 5 km, 12 km e 21 km na faixa litorânea da cidade.',
    },
    {
      nome: 'Eventos do Camocim Run Club',
      descricao:
        'Provas e treinos coletivos promovidos pela comunidade local de corredores, reunindo atletas da cidade e de municípios vizinhos.',
    },
  ],
  culturaEsportiva:
    'A corrida de rua e de praia vem crescendo, impulsionada por clubes locais como o Camocim Run Club e por etapas de circuitos de corrida no litoral, que atraem participantes de cidades próximas.',
  academias:
    'A oferta reúne academias e estúdios voltados ao público urbano, complementada pelo uso intenso da orla e das praias para treinos ao ar livre, caminhadas e esportes de vento.',

  destaquesFitness: [
    'Litoral extenso de dunas e praias na foz do rio Coreaú para treinos ao ar livre.',
    'Cena de corrida de praia em alta, com etapas de circuito e clubes locais.',
    'Posição como porta de entrada terrestre para Jericoacoara, somando fluxo turístico.',
    'Ventos litorâneos que favorecem esportes na praia, como kitesurfe na região de Tatajuba.',
  ],

  precos: {
    avulsaMin: 45,
    avulsaMax: 105,
    mensalMin: 230,
    mensalMax: 640,
    onlineMin: 105,
    onlineMax: 330,
  },

  conclusao:
    'Cidade de pesca, carcinicultura e turismo de praia no litoral oeste cearense, Camocim une dunas, estuário do Coreaú e cena de corrida em crescimento. Um personal trainer ajuda a aproveitar a orla e as praias com método, ajustando horários e hidratação ao calor e aos ventos do litoral noroeste.',

  vizinhas: ['sobral-ce', 'fortaleza-ce'],

  fontes: [
    { nome: 'IBGE Cidades — Camocim', url: 'https://cidades.ibge.gov.br/brasil/ce/camocim/panorama' },
    { nome: 'Prefeitura de Camocim', url: 'https://camocim.ce.gov.br/' },
    { nome: 'Atlas Brasil — IDHM', url: 'https://www.atlasbrasil.org.br/' },
  ],
  atualizadoEm: '2026-06-29',
};
