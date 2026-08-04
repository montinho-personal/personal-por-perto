import type { Cidade } from '../../lib/types';

export const cidade: Cidade = {
  slug: 'chapada-dos-guimaraes-mt',
  nome: 'Chapada dos Guimarães',
  uf: 'MT',
  estado: 'Mato Grosso',
  estadoSlug: 'mato-grosso',
  regiao: 'Centro-Oeste',
  gentilico: 'chapadense',
  tipo: 'cidade',

  populacao: 18990,
  populacaoAno: 2022,
  idhm: 0.688,
  idhmClasse: 'médio',
  altitudeM: 793,

  resumoEconomico:
    'A 793 metros de altitude e a cerca de uma hora de Cuiabá, Chapada dos Guimarães vive do turismo de natureza: o Parque Nacional criado em 1989 guarda a cachoeira Véu de Noiva e dezenas de trilhas entre paredões de arenito, e o município abriga o marco do Centro Geodésico da América do Sul. Pousadas, agências e gastronomia completam a economia, com a agropecuária no entorno.',

  mercado:
    'O clima mais fresco que o da capital faz da cidade o refúgio de treino dos cuiabanos — e o turismo ativo cria demanda por preparo físico o ano todo. O mercado local é compacto, com personal trainers atuando de forma próxima, e a natureza como academia principal.',

  bairrosNobres: ['Centro', 'Bom Clima', 'Jardim Vale Verde', 'Santa Cruz'],
  bairrosPopulares: ['São Sebastião', 'Cohab Cristo Rei', 'Florais da Chapada', 'Aldeia Velha'],

  parques: [
    {
      nome: 'Parque Nacional da Chapada dos Guimarães',
      descricao:
        'Criado em 1989, o parque protege os paredões, os campos de cerrado e a cachoeira Véu de Noiva — trilhas para todos os níveis, do passeio de mirante ao circuito das cachoeiras.',
    },
    {
      nome: 'Centro Geodésico da América do Sul',
      descricao:
        'O marco do centro do continente, com vista aberta do vale, é parada clássica de pedais e caminhadas da cidade.',
    },
    {
      nome: 'Mirantes e trilhas do entorno',
      descricao:
        'A borda da chapada rende mirantes, escaladas e travessias — o pôr do sol no paredão é o encerramento oficial do dia chapadense.',
    },
  ],
  ciclovias:
    'O pedal é forte na estrada-parque entre Cuiabá e a Chapada e nas estradas de terra do platô; não há malha cicloviária urbana relevante.',

  clima:
    'Clima tropical de altitude: mais fresco e ventilado que a baixada cuiabana, com seca marcada no inverno e chuvas de verão.',
  climaTreino:
    'A altitude suaviza o calor de Mato Grosso — dá para treinar ao ar livre em janelas mais generosas que as de Cuiabá, com a seca do inverno como alta temporada do trekking.',

  mobilidade:
    'Pela MT-251, a cidade fica a cerca de uma hora de Cuiabá — muitos moradores da capital sobem a serra no fim de semana, e muitos chapadenses trabalham no eixo entre as duas cidades.',

  corridas: [
    {
      nome: 'Trail runs da Chapada',
      descricao:
        'A região recebe provas de corrida de montanha e travessias que aproveitam os paredões e as trilhas do parque nacional.',
    },
  ],
  culturaEsportiva:
    'O esporte local é a natureza: trekking, escalada, pedal de montanha e corrida de trilha fazem parte da rotina de moradores e guias — e o centro histórico fecha o dia no ritmo de cidade de serra.',
  academias:
    'A oferta é compacta — academias locais e personal trainers próximos —, complementada pela estrutura natural do parque e das trilhas.',

  destaquesFitness: [
    'Parque Nacional com a cachoeira Véu de Noiva e trilhas para todos os níveis.',
    'Altitude de 793 m, refúgio de treino contra o calor da baixada.',
    'Centro Geodésico da América do Sul como marco de pedais e caminhadas.',
    'Trail running e escalada com os paredões de arenito de cenário.',
  ],

  precos: {
    avulsaMin: 50,
    avulsaMax: 120,
    mensalMin: 260,
    mensalMax: 720,
    onlineMin: 120,
    onlineMax: 360,
  },

  conclusao:
    'Refúgio de altitude a uma hora de Cuiabá, Chapada dos Guimarães transforma treino em paisagem: trilhas, paredões e o Véu de Noiva no quintal. Um personal trainer prepara o corpo para a serra — e faz da natureza o plano de treino mais bonito de Mato Grosso.',

  vizinhas: ['cuiaba-mt'],

  fontes: [
    { nome: 'IBGE Cidades — Chapada dos Guimarães', url: 'https://cidades.ibge.gov.br/brasil/mt/chapada-dos-guimaraes/panorama' },
    { nome: 'Prefeitura de Chapada dos Guimarães', url: 'https://www.chapadadosguimaraes.mt.gov.br/' },
    { nome: 'ICMBio — Parque Nacional', url: 'https://www.icmbio.gov.br/parnaguimaraes/' },
  ],
  atualizadoEm: '2026-08-04',
};
