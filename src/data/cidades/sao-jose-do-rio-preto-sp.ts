import type { Cidade } from '../../lib/types';

export const cidade: Cidade = {
  slug: 'sao-jose-do-rio-preto-sp',
  nome: 'São José do Rio Preto',
  uf: 'SP',
  estado: 'São Paulo',
  estadoSlug: 'sao-paulo',
  regiao: 'Sudeste',
  gentilico: 'rio-pretense',
  tipo: 'cidade',

  populacao: 480439,
  populacaoAno: 2022,
  idhm: 0.797,
  idhmClasse: 'alto',
  altitudeM: 489,

  resumoEconomico:
    'Capital regional do noroeste paulista, São José do Rio Preto tem economia diversificada em agronegócio, indústria, comércio e serviços, e é um forte polo de saúde — com a FAMERP e o Hospital de Base, um dos maiores hospitais-escola do país. Reconhecida pela qualidade de vida e por ser uma das cidades mais arborizadas do estado, atrai um público de bom poder aquisitivo.',

  mercado:
    'Cidade próspera e de bom poder aquisitivo, Rio Preto tem cultura esportiva crescente e um calendário ativo de corridas de rua. O público de classe média alta dos bairros da zona sul sustenta uma demanda consistente por academias e personal trainers, e o ecossistema de saúde favorece o foco em bem-estar.',

  bairrosNobres: ['Higienópolis', 'Nova Redentora', 'Jardim Vivendas', 'Redentora'],
  bairrosPopulares: ['Solo Sagrado', 'Jardim Yolanda', 'Vila Toninho', 'São Deocleciano'],

  parques: [
    {
      nome: 'Represa Municipal',
      descricao:
        'Área verde central com lago artificial, ideal para caminhada, corrida e lazer — o principal cartão-postal e ponto de treino ao ar livre da cidade.',
    },
    {
      nome: 'Parque Ecológico Danilo Santos de Miranda',
      descricao:
        'No Jardim Yolanda, oferece áreas de lazer ao ar livre e espaços verdes para atividades em meio à natureza.',
    },
    {
      nome: 'Arena Esportiva Edson Favaron',
      descricao:
        'Palco de etapas de corrida (5 km e 10 km) e de eventos esportivos, reforçando a estrutura para provas de rua na cidade.',
    },
  ],
  ciclovias:
    'A cidade tem ciclofaixas e ciclovias em avenidas e no entorno da Represa Municipal, integrando lazer e mobilidade — uma cidade plana e arborizada, favorável à bike.',

  clima:
    'O clima é quente o ano todo, com verões muito quentes e inverno seco — Rio Preto é conhecida pelo calor.',
  climaTreino:
    'O calor exige atenção forte à hidratação e a escolha dos horários: o treino ao ar livre rende mais cedo de manhã ou no fim da tarde, evitando o meio-dia no verão.',

  mobilidade:
    'A cidade é cortada pela BR-153 (Transbrasiliana) e pela SP-310 (Washington Luís), importantes eixos do interior, e tem aeroporto regional. O deslocamento é predominantemente por carro e ônibus.',

  corridas: [
    {
      nome: 'Seguralta Marathon',
      descricao:
        'Prova que reúne milhares de atletas e coloca Rio Preto no circuito nacional de corrida de rua.',
    },
    {
      nome: 'Circuito LIVE! RUN XP (etapa Rio Preto)',
      descricao:
        'Provas de 5 km e 10 km na Arena Favaron, parte de um calendário esportivo movimentado no interior.',
    },
  ],
  culturaEsportiva:
    'Rio Preto tem forte agenda de corrida de rua, com várias etapas de circuitos nacionais, e é reconhecida pela qualidade de vida e pela arborização (quase todas as vias têm árvores). O polo de saúde reforça uma cultura de cuidado com o corpo.',
  academias:
    'A Smart Fit tem três unidades na cidade — no Centro, na Avenida JK e no Shopping Cidade Norte — e a Selfit uma, no Centro; os espaços ao ar livre da Represa Municipal complementam a oferta.',

  academiasProximas: [
    { nome: 'Smart Fit Centro', detalhe: 'na Rua Coronel Spinola de Castro, no Centro' },
    { nome: 'Smart Fit Avenida JK', detalhe: 'na Avenida Juscelino Kubitschek, no Jardim Maracanã' },
    { nome: 'Smart Fit Shopping Cidade Norte', detalhe: 'no shopping, na Avenida Alfredo Antonio de Oliveira, no Jardim Planalto' },
    { nome: 'Selfit Glicério', detalhe: 'na Rua General Glicério, no Centro' },
  ],
  academiasVerificadasEm: '2026-10-27',

  destaquesFitness: [
    'Polo de saúde (FAMERP e Hospital de Base) com ecossistema favorável ao bem-estar.',
    'Calendário robusto de corridas (Seguralta Marathon, LIVE! RUN XP).',
    'Represa Municipal como espaço central de treino ao ar livre.',
    'Alta renda no eixo sul (Higienópolis, Nova Redentora, Jardim Vivendas).',
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
    'Polo de saúde e qualidade de vida no noroeste paulista, Rio Preto tem um público que valoriza o bem-estar — e um calendário de corridas que cresce a cada ano. Um personal trainer ajuda a aproveitar a Represa e as academias da cidade com um plano que respeite o calor característico e acelere seus resultados.',

  vizinhas: ['ribeirao-preto-sp', 'campinas-sp', 'sorocaba-sp'],

  fontes: [
    { nome: 'IBGE Cidades — São José do Rio Preto', url: 'https://cidades.ibge.gov.br/brasil/sp/sao-jose-do-rio-preto/panorama' },
    { nome: 'Prefeitura de São José do Rio Preto', url: 'https://www.riopreto.sp.gov.br/' },
    { nome: 'Atlas Brasil — IDHM', url: 'https://www.atlasbrasil.org.br/' },
  ],
  // Foco em preço no título e na descrição: leva de 30/10/2026 (conferência de SEO local).
  metaFoco: 'preco',
  atualizadoEm: '2026-10-29',
  capaArte: {
    src: '/capas-cidade/sao-jose-do-rio-preto-sp.webp',
    w: 1200,
    h: 675,
    alt:
      'Personal trainer em São José do Rio Preto (SP) em arte que une treino de força e um cartão-postal real da cidade — a represa municipal com sua área verde e o skyline de prédios refletido na água — Personal por Perto',
    legenda:
      'Treino personalizado em São José do Rio Preto: um plano feito para o seu corpo e a sua rotina, com acompanhamento profissional na cidade e região.',
  },
};
