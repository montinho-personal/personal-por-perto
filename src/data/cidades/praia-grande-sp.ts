import type { Cidade } from '../../lib/types';

export const cidade: Cidade = {
  slug: 'praia-grande-sp',
  nome: 'Praia Grande',
  uf: 'SP',
  estado: 'São Paulo',
  estadoSlug: 'sao-paulo',
  regiao: 'Sudeste',
  gentilico: 'praia-grandense',
  tipo: 'cidade',

  populacao: 349935,
  populacaoAno: 2022,
  idhm: 0.754,
  idhmClasse: 'alto',
  altitudeM: 4,

  resumoEconomico:
    'Cidade litorânea com a maior orla contínua de praia da Baixada Santista (cerca de 22,5 km), Praia Grande foi a que mais cresceu na região e, em 2022, passou a ter mais moradores permanentes do que casas de veraneio. A economia se baseia em turismo, serviços e construção civil, e a orla é o centro absoluto da vida ativa da cidade.',

  mercado:
    'A cultura de orla é forte — corrida, caminhada e ciclismo no calçadão o ano todo —, com a Smart Fit em várias unidades, a Bluefit, boxes de crossfit e academias locais. A combinação de praia extensa e boa oferta de academias faz da cidade um ótimo cenário para personal trainers.',

  bairrosNobres: ['Canto do Forte', 'Boqueirão', 'Guilhermina', 'Aviação'],
  bairrosPopulares: ['Vila Sônia', 'Quietude', 'Vila Tupi', 'Melvi'],

  parques: [
    {
      nome: 'Orla e calçadão (Av. Beira-Mar)',
      descricao:
        'Cerca de 22,5 km contínuos de calçadão arborizado por coqueiros, com academias ao ar livre, escolas de surfe e quiosques — uma das maiores academias a céu aberto do litoral brasileiro.',
    },
    {
      nome: 'Polo Esportivo Leopoldo Vanderlinde',
      descricao:
        'Tem pista de atletismo de padrão internacional, academia ao ar livre, áreas de esportes e playground — estrutura rara em cidade litorânea.',
    },
    {
      nome: 'Ciclovia à beira-mar',
      descricao:
        'A maior ciclovia à beira-mar do Brasil acompanha toda a orla, ideal para pedal e treino de longa distância.',
    },
  ],
  ciclovias:
    'Praia Grande tem a maior ciclovia à beira-mar do Brasil — cerca de 22,5 km ininterruptos acompanhando o calçadão — e soma em torno de 100 km de ciclovias no total.',

  clima:
    'O clima é tropical litorâneo, quente e úmido, com a orla extensa favorecendo o treino ao ar livre o ano todo.',
  climaTreino:
    'Com 22,5 km de calçadão e ciclovia, dá para treinar fora em qualquer estação; no verão, atenção ao sol forte e à hidratação, priorizando manhã e fim de tarde.',

  mobilidade:
    'O acesso é pelo Sistema Anchieta–Imigrantes e pela malha da Baixada, com integração regional pelo VLT (São Vicente–Santos) e uma ampla rede cicloviária local que torna a bike uma opção real de deslocamento.',

  corridas: [
    {
      nome: 'Maratona Internacional de Praia Grande',
      descricao:
        'Prova pela orla, com percursos que aproveitam o calçadão à beira-mar — um dos grandes eventos do calendário local.',
    },
    {
      nome: 'Music Night Run',
      descricao:
        'Corrida noturna na Avenida Presidente Castelo Branco (orla), entre outras provas que movimentam a cidade.',
    },
  ],
  culturaEsportiva:
    'Praia Grande se consolidou como anfitriã de corridas de rua, com forte cultura de ciclismo, corrida, caminhada e surfe na orla. A vida esportiva gira em torno dos 22,5 km de praia.',
  academias:
    'A oferta reúne a Smart Fit (várias unidades), a Bluefit, boxes de crossfit e academias locais, com a orla e suas academias ao ar livre funcionando como uma enorme extensão de treino.',

  destaquesFitness: [
    'Maior ciclovia à beira-mar do país (cerca de 22,5 km).',
    'Academias ao ar livre distribuídas ao longo de toda a orla.',
    'Pista de atletismo de padrão internacional (Polo Vanderlinde).',
    'Calendário robusto de corridas de rua na orla.',
  ],

  precos: {
    avulsaMin: 75,
    avulsaMax: 170,
    mensalMin: 380,
    mensalMax: 1000,
    onlineMin: 175,
    onlineMax: 440,
  },

  conclusao:
    'Com a maior orla contínua da Baixada e a maior ciclovia à beira-mar do Brasil, Praia Grande é um paraíso para quem treina ao ar livre. Um personal trainer ajuda a transformar esses 22,5 km de calçadão em um plano consistente, do iniciante ao maratonista.',

  vizinhas: ['santos-sp', 'guaruja-sp', 'sao-bernardo-do-campo-sp'],

  fontes: [
    { nome: 'IBGE Cidades — Praia Grande', url: 'https://cidades.ibge.gov.br/brasil/sp/praia-grande/panorama' },
    { nome: 'Prefeitura de Praia Grande', url: 'https://www.praiagrande.sp.gov.br/' },
    { nome: 'Atlas Brasil — IDHM', url: 'https://www.atlasbrasil.org.br/' },
  ],
  atualizadoEm: '2026-07-30',
  capaArte: {
    src: '/capas-cidade/praia-grande-sp.webp',
    w: 1200,
    h: 849,
    alt:
      'Personal trainer em Praia Grande (SP) em arte que une treino em dupla no calçadão da orla e a fileira de prédios à beira-mar da cidade — Personal por Perto',
    legenda:
      'Treino personalizado em Praia Grande: um plano feito para o seu corpo e a sua rotina, com acompanhamento profissional na cidade e região.',
  },
};
