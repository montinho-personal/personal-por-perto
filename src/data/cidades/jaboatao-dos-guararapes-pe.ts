import type { Cidade } from '../../lib/types';

export const cidade: Cidade = {
  slug: 'jaboatao-dos-guararapes-pe',
  nome: 'Jaboatão dos Guararapes',
  uf: 'PE',
  estado: 'Pernambuco',
  estadoSlug: 'pernambuco',
  regiao: 'Nordeste',
  gentilico: 'jaboatonense',
  tipo: 'cidade',

  populacao: 643759,
  populacaoAno: 2022,
  idhm: 0.717,
  idhmClasse: 'alto',
  altitudeM: 5,

  resumoEconomico:
    'Segunda maior cidade de Pernambuco e parte central da Região Metropolitana do Recife, Jaboatão dos Guararapes combina vocação industrial (com distritos como o de Curado) e comercial com um litoral turístico — as praias de Piedade, Candeias e Barra de Jangada. É um município metropolitano denso, com forte cultura de treino na orla.',

  mercado:
    'O mercado fitness é consolidado, com múltiplas unidades da Smart Fit (Piedade, Shopping Guararapes), Starfit e Skyfit, concentradas nos bairros nobres e na orla. A cultura de treino à beira-mar é forte: corrida, ciclismo e calistenia acontecem o dia todo no calçadão.',

  bairrosNobres: ['Piedade', 'Candeias', 'Barra de Jangada', 'Jardim Piedade'],
  bairrosPopulares: ['Curado', 'Cavaleiro', 'Santo Aleixo', 'Cascata'],

  parques: [
    {
      nome: 'Orla e Praia de Piedade',
      descricao:
        'Cerca de 4,5 km de praia com calçadão e ciclovia, ponto principal para corrida, caminhada e treino funcional na areia — a "academia a céu aberto" da cidade.',
    },
    {
      nome: 'Parque Histórico Nacional dos Guararapes',
      descricao:
        'Área histórica com trilhas e relevo que favorece treino de subida e trail, em meio à Mata Atlântica.',
    },
    {
      nome: 'Orla de Candeias e Barra de Jangada',
      descricao:
        'Calçadão contínuo à beira-mar, ideal para corrida e atividades ao ar livre, ligando os principais bairros litorâneos.',
    },
  ],
  ciclovias:
    'A orla tem ciclovia de cerca de 8 km ligando Piedade, Candeias e Barra de Jangada — um corredor contínuo para pedal e corrida à beira-mar.',

  clima:
    'O clima é tropical litorâneo, quente e úmido o ano todo, com chuvas concentradas entre maio e agosto.',
  climaTreino:
    'O treino ao ar livre é viável o ano inteiro, com cuidado redobrado com calor e umidade — priorize o início da manhã ou o fim de tarde, com hidratação e proteção solar.',

  mobilidade:
    'A cidade é integrada à Região Metropolitana do Recife pelo Metrô do Recife (Linha Centro, com estações em Jaboatão), pela BR-101 e pela Avenida Ayrton Senna, com conexão rápida ao Recife e ao aeroporto.',

  corridas: [
    {
      nome: 'Circuito Jaboatão de Corridas',
      descricao:
        'Etapas de 5 km com cerca de 3 mil corredores cada e largada na Casa da Cultura — um dos circuitos municipais mais movimentados da região.',
    },
    {
      nome: 'Circuito Vibra We',
      descricao:
        'Corrida e trail que reforça a cena esportiva da cidade, aproveitando orla e áreas de relevo.',
    },
  ],
  culturaEsportiva:
    'Jaboatão tem forte tradição de corrida e ciclismo na orla, com circuitos municipais ativos. As praias urbanas funcionam como grande academia a céu aberto, reunindo iniciantes e atletas.',
  academias:
    'A oferta reúne redes consolidadas (Smart Fit, Starfit, Skyfit) nos bairros nobres e na orla, complementadas pela enorme estrutura ao ar livre dos calçadões litorâneos.',

  destaquesFitness: [
    'Corredor ao ar livre contínuo: cerca de 8 km de ciclovia e 4,5 km de praia em Piedade.',
    'Redes consolidadas (Smart Fit, Starfit, Skyfit) nos bairros nobres.',
    'Circuito Jaboatão de Corridas com milhares de inscritos por etapa.',
    'Clima tropical que permite treino ao ar livre o ano todo.',
  ],

  precos: {
    avulsaMin: 65,
    avulsaMax: 150,
    mensalMin: 330,
    mensalMax: 900,
    onlineMin: 165,
    onlineMax: 420,
  },

  conclusao:
    'Segunda maior cidade de Pernambuco e parte da Grande Recife, Jaboatão dos Guararapes tem na orla o seu maior ativo esportivo. Um personal trainer ajuda a transformar a praia de Piedade e a ciclovia em um plano consistente, respeitando o clima quente do litoral.',

  vizinhas: ['recife-pe', 'joao-pessoa-pb'],

  fontes: [
    { nome: 'IBGE Cidades — Jaboatão dos Guararapes', url: 'https://cidades.ibge.gov.br/brasil/pe/jaboatao-dos-guararapes/panorama' },
    { nome: 'Prefeitura de Jaboatão dos Guararapes', url: 'https://www.jaboatao.pe.gov.br/' },
    { nome: 'Atlas Brasil — IDHM', url: 'https://www.atlasbrasil.org.br/' },
  ],
  atualizadoEm: '2026-07-29',
  capaArte: {
    src: '/capas-cidade/jaboatao-dos-guararapes-pe.webp',
    w: 1200,
    h: 675,
    alt:
      'Personal trainer em Jaboatão dos Guararapes (PE) em arte que une treino de força e a orla real do município — a praia com coqueiros e a curva de prédios à beira-mar — Personal por Perto',
    legenda:
      'Treino personalizado em Jaboatão dos Guararapes: um plano feito para o seu corpo e a sua rotina, com acompanhamento profissional na cidade e região.',
  },
};
