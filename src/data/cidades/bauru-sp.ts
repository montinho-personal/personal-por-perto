import type { Cidade } from '../../lib/types';

export const cidade: Cidade = {
  slug: 'bauru-sp',
  nome: 'Bauru',
  uf: 'SP',
  estado: 'São Paulo',
  estadoSlug: 'sao-paulo',
  regiao: 'Sudeste',
  gentilico: 'bauruense',
  tipo: 'cidade',

  populacao: 379146,
  populacaoAno: 2022,
  idhm: 0.801,
  idhmClasse: 'muito alto',
  altitudeM: 526,

  resumoEconomico:
    'Principal centro regional do centro-oeste paulista, Bauru tem economia voltada a comércio e serviços que atendem dezenas de municípios. É forte em saúde — com a Faculdade de Odontologia da USP-Bauru, referência internacional — e em educação (USP e UNESP), além de indústrias tradicionais. O perfil de polo de saúde e universidades cria um público atento ao bem-estar.',

  mercado:
    'O mercado fitness é consolidado, com redes nacionais (Smart Fit em várias unidades, Bluefit) e academias locais, além de cobertura de plataformas de benefícios. A cidade tem mais de 40 academias ao ar livre espalhadas pelos bairros e uma cena de corrida de rua bem aquecida.',

  bairrosNobres: ['Jardim Estoril', 'Jardim Infante Dom Henrique', 'Vila Aviação', 'Jardim Europa'],
  bairrosPopulares: ['Vila Universitária', 'Mary Dota', 'Bela Vista', 'Vila Falcão'],

  parques: [
    {
      nome: 'Parque Vitória Régia',
      descricao:
        'Com cerca de 50 mil m² na Avenida Nações Unidas, tem lago, pistas para caminhada e ciclismo e espaço para slackline — o principal cartão-postal esportivo da cidade.',
    },
    {
      nome: 'Bosque da Comunidade',
      descricao:
        'Tem cerca de 500 m de pista de caminhada e academia ao ar livre, em uma área verde agradável e central.',
    },
    {
      nome: 'Calçadão do Hospital Estadual',
      descricao:
        'Calçadão extenso com ciclovia, muito usado por corredores e ciclistas no dia a dia.',
    },
  ],
  ciclovias:
    'Bauru tem ciclovias em pontos como o calçadão do Hospital Estadual e a Avenida Nações Unidas, integrando lazer e mobilidade ativa.',

  clima:
    'O clima é tropical de altitude, com invernos secos e amenos e verões quentes e chuvosos (média anual em torno de 23 °C).',
  climaTreino:
    'O inverno seco favorece o treino ao ar livre; no verão, vale evitar o meio do dia por causa do calor e das pancadas de chuva.',

  mobilidade:
    'Importante entroncamento rodoviário do interior, Bauru fica a cerca de 330 km da capital pela Rodovia Marechal Rondon (SP-300), que conecta a cidade a dezenas de municípios da região.',

  corridas: [
    {
      nome: 'Circuito de Corridas Bauru Shopping',
      descricao:
        'Série de provas anuais que reuniu mais de 4 mil corredores em edições recentes, incluindo a Meia Maratona Bauru Shopping.',
    },
    {
      nome: 'Meia Maratona "Sujo de Barro"',
      descricao:
        'Provas de 6 km, 10 km e 21 km organizadas em Bauru, parte de uma cena de corrida bem ativa.',
    },
  ],
  culturaEsportiva:
    'Bauru tem cena de corrida de rua aquecida, impulsionada por circuitos de varejo e grupos locais, além de tradição no futebol e de um grande público universitário. As academias ao ar livre espalhadas pela cidade democratizam o acesso ao treino.',
  academias:
    'A oferta reúne redes nacionais (Smart Fit, Bluefit) e academias locais, com planos corporativos e mais de 40 academias ao ar livre, sustentadas por um polo de saúde e universidades.',

  academiasProximas: [
    { nome: 'Smart Fit Getúlio Vargas I', detalhe: 'na Av. Getúlio Vargas, na Vila Aviação' },
    { nome: 'Smart Fit Getúlio Vargas II', detalhe: 'segunda unidade na mesma avenida, no Jardim Aeroporto' },
  ],

  destaquesFitness: [
    'Parque Vitória Régia como principal espaço público para atividade física.',
    'Mais de 40 academias ao ar livre distribuídas pela cidade.',
    'Redes nacionais presentes (Smart Fit, Bluefit) e planos corporativos.',
    'Polo de saúde (USP-Bauru) e universidades sustentando público voltado a bem-estar.',
  ],

  precos: {
    avulsaMin: 70,
    avulsaMax: 160,
    mensalMin: 370,
    mensalMax: 1000,
    onlineMin: 175,
    onlineMax: 440,
  },

  conclusao:
    'Polo regional de saúde e educação, Bauru tem boa estrutura pública e privada para treinar — do Parque Vitória Régia às dezenas de academias ao ar livre. Um personal trainer ajuda a aproveitar tudo isso com método, da musculação à preparação para as corridas locais.',

  vizinhas: ['sorocaba-sp', 'ribeirao-preto-sp', 'sao-jose-do-rio-preto-sp'],

  fontes: [
    { nome: 'IBGE Cidades — Bauru', url: 'https://cidades.ibge.gov.br/brasil/sp/bauru/panorama' },
    { nome: 'Prefeitura de Bauru', url: 'https://www.bauru.sp.gov.br/' },
    { nome: 'Atlas Brasil — IDHM', url: 'https://www.atlasbrasil.org.br/' },
  ],
  atualizadoEm: '2026-08-26',
  capaArte: {
    src: '/capas-cidade/bauru-sp.webp',
    w: 1200,
    h: 849,
    alt:
      'Personal trainer em Bauru (SP) em arte com referências reais da cidade — o skyline do centro, o Calçadão da Batista, a vitória-régia do Jardim Botânico e o mapa do noroeste paulista — Personal por Perto',
    legenda:
      'Treino personalizado em Bauru: um plano feito para o seu corpo e a sua rotina, com acompanhamento profissional na cidade e região.',
  },
};
