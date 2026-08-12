import type { Cidade } from '../../lib/types';

export const cidade: Cidade = {
  slug: 'foz-do-iguacu-pr',
  nome: 'Foz do Iguaçu',
  uf: 'PR',
  estado: 'Paraná',
  estadoSlug: 'parana',
  regiao: 'Sul',
  gentilico: 'iguaçuense',
  tipo: 'cidade',

  populacao: 285415,
  populacaoAno: 2022,
  idhm: 0.751,
  idhmClasse: 'alto',
  altitudeM: 164,

  resumoEconomico:
    'Foz do Iguaçu tem uma das economias mais diversificadas do interior do Paraná, com um dos maiores PIBs per capita da região: turismo (Cataratas, Parque das Aves, Marco das Três Fronteiras), energia (Itaipu Binacional) e comércio transfronteiriço. Na tríplice fronteira entre Brasil, Paraguai e Argentina, recebe milhões de visitantes por ano.',

  mercado:
    'O mercado fitness está em expansão, impulsionado pelo turismo e pelo clima ameno, com dezenas de academias — incluindo redes nacionais (Smart Fit, Bluefit) — e estúdios de personal. Os investimentos da Itaipu em pistas, ciclovias e academias ao ar livre ampliam o treino outdoor.',

  bairrosNobres: ['Vila A', 'Vila Yolanda', 'Vila Itajubá', 'Centro'],
  bairrosPopulares: ['Vila Maracanã', 'Jardim Lancaster', 'Porto Meira', 'Três Lagoas'],

  parques: [
    {
      nome: 'Gramadão da Vila A',
      descricao:
        'Espaço revitalizado pela Itaipu, com academia ao ar livre, playground e pista de skate.',
    },
    {
      nome: 'Avenida JK (pista Dr. Acir do Prado)',
      descricao:
        'Tem pista de caminhada, ciclovia e academias ao ar livre — um dos principais corredores de treino da cidade.',
    },
    {
      nome: 'Ciclovia das Cataratas',
      descricao:
        'Cerca de 11,4 km pela Mata Atlântica, com vista para as quedas — um cenário único para pedal e corrida.',
    },
  ],
  ciclovias:
    'A malha está em expansão, com a ciclovia da Avenida JK e a turística Ciclovia das Cataratas (cerca de 11,4 km dentro do Parque Nacional).',

  clima:
    'O clima é subtropical úmido, com verões quentes e úmidos (acima de 36 °C) e invernos amenos.',
  climaTreino:
    'No verão, vale treinar cedo ou no fim de tarde, com hidratação; o inverno ameno permite treino ao ar livre o ano todo, em cenários naturais privilegiados.',

  mobilidade:
    'O acesso é pela BR-277 (ligação ao restante do Paraná e ao Porto de Paranaguá) e pela BR-469 / Avenida das Cataratas (acesso ao Parque Nacional), além da Ponte da Amizade, rumo ao Paraguai.',

  corridas: [
    {
      nome: 'Meia Maratona das Cataratas',
      descricao:
        'Percursos de 10,5 km e 21 km dentro do Parque Nacional, com até 6 mil corredores — uma das provas mais cênicas do país.',
    },
    {
      nome: 'Fresh Run Foz do Iguaçu',
      descricao:
        'Provas de 5 km, 10 km e 21 km, com largada na Avenida JK, parte de um calendário ativo.',
    },
  ],
  culturaEsportiva:
    'Foz tem forte cultura de corrida de rua e de atividades ao ar livre, impulsionada pelos cenários naturais e pelos investimentos da Itaipu em pistas, ciclovias e academias ao ar livre.',
  academias:
    'A oferta reúne redes nacionais (Smart Fit, Bluefit) e estúdios de personal, em um mercado em expansão sustentado pelo turismo e pela boa renda local.',

  destaquesFitness: [
    'Cenários únicos para treino ao ar livre: Parque Nacional, lago de Itaipu e orlas.',
    'Investimento público e da Itaipu em academias, pistas e ciclovias.',
    'Calendário consolidado de corridas (Meia Maratona das Cataratas, Fresh Run).',
    'Academias em expansão, com redes nacionais e estúdios de personal.',
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
    'Cidade das Cataratas e da tríplice fronteira, Foz do Iguaçu tem cenários incomparáveis para treinar ao ar livre. Um personal trainer ajuda a aproveitar a Ciclovia das Cataratas e a Avenida JK com método, transformando a paisagem em rotina de treino.',

  vizinhas: ['cascavel-pr', 'curitiba-pr', 'maringa-pr'],

  fontes: [
    { nome: 'IBGE Cidades — Foz do Iguaçu', url: 'https://cidades.ibge.gov.br/brasil/pr/foz-do-iguacu/panorama' },
    { nome: 'Prefeitura de Foz do Iguaçu', url: 'https://www.fozdoiguacu.pr.gov.br/' },
    { nome: 'Atlas Brasil — IDHM', url: 'https://www.atlasbrasil.org.br/' },
  ],
  atualizadoEm: '2026-08-12',

  capaArte: {
    src: '/capas-cidade/foz-do-iguacu-pr.webp',
    w: 1200,
    h: 900,
    alt:
      'Personal trainer em Foz do Iguaçu (PR) em arte que reúne treino de força, o Marco das Três Fronteiras em Porto Meira, a Avenida Brasil no Centro, a usina de Itaipu e as Cataratas do Iguaçu — Personal por Perto',
    legenda:
      'Treino personalizado em Foz do Iguaçu: um plano feito para o seu corpo e a sua rotina, com acompanhamento profissional na cidade e região.',
  },
};
