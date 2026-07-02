import type { Cidade } from '../../lib/types';

export const cidade: Cidade = {
  slug: 'jijoca-de-jericoacoara-ce',
  nome: 'Jijoca de Jericoacoara',
  uf: 'CE',
  estado: 'Ceará',
  estadoSlug: 'ceara',
  regiao: 'Nordeste',
  gentilico: 'jijoquense',
  tipo: 'cidade',

  populacao: 25555,
  populacaoAno: 2022,
  idhm: 0.652,
  idhmClasse: 'médio',
  altitudeM: 19,

  resumoEconomico:
    'Jijoca de Jericoacoara é o município do litoral oeste cearense que abriga a vila de Jericoacoara, um dos destinos turísticos mais conhecidos do Brasil no exterior. A economia é dominada pelo turismo — hospedagem, alimentação e atividades imobiliárias ligadas à vila, que concentra pousadas, hotéis e restaurantes de padrão internacional — ao lado da pesca artesanal, tradição mantida por cooperativas locais. O PIB per capita municipal supera a média estadual, puxado pelo fluxo constante de visitantes brasileiros e estrangeiros atraídos pelas dunas móveis, lagoas e pela reputação da região como polo mundial de kitesurf e windsurf.',

  mercado:
    'O mercado de personal trainers em Jijoca de Jericoacoara gira em torno da vila de Jericoacoara, onde convivem moradores fixos, temporadas de turistas de alto poder aquisitivo e uma comunidade de esportistas de vento. A procura combina treino de preparação física para kitesurf, windsurf, surfe e caminhada nas dunas com o público de pousadas e casas de temporada que busca aulas avulsas durante a estadia, além de moradores que praticam atividade física ao ar livre aproveitando o cenário natural.',

  bairrosNobres: ['Vila de Jericoacoara (centro turístico)', 'Guriú', 'Lagoa do Paraíso', 'Praia da Malhada'],
  bairrosPopulares: ['Sede de Jijoca', 'Mangue Seco', 'Serrote', 'Barra do Guriú'],

  parques: [
    {
      nome: 'Parque Nacional de Jericoacoara',
      descricao:
        'Unidade de conservação federal que protege as dunas móveis, lagoas e restingas do litoral oeste cearense; suas trilhas de areia são o principal cenário para caminhada, trekking e sandboard na região.',
    },
    {
      nome: 'Duna do Pôr do Sol',
      descricao:
        'Duna mais famosa da vila, ponto de encontro diário para observar o pôr do sol e também usada para exercícios de subida em areia, treino funcional e alongamento ao ar livre.',
    },
    {
      nome: 'Lagoa do Paraíso e Lagoa Azul',
      descricao:
        'Lagoas de água doce entre dunas, cercadas por vento constante; funcionam como point de windsurf, kitesurf e stand up paddle, além de espaço para caminhada nas margens.',
    },
  ],
  ciclovias:
    'A vila de Jericoacoara tem ruas de areia, sem asfalto, o que limita a estrutura cicloviária tradicional; o deslocamento por bicicleta e a corrida acontecem nas próprias ruas arenosas e na orla da praia.',

  clima:
    'O clima é tropical quente, com temperatura média entre 27 °C e 32 °C ao longo do ano, moderada pela brisa marítima constante. A estação chuvosa concentra-se entre janeiro e maio (a "quadra chuvosa" cearense), enquanto o segundo semestre, de agosto a dezembro, é seco e marcado por ventos alísios fortes, que chegam a superar 40 nós em agosto e setembro — o que torna a região um dos destinos mundiais de kitesurf e windsurf.',
  climaTreino:
    'O vento forte e o sol intenso pedem proteção solar, hidratação constante e treino nos horários mais amenos (início da manhã ou fim de tarde); a areia funciona como superfície natural de treino funcional e cardio, mas exige adaptação de calçado e técnica para reduzir o impacto.',

  mobilidade:
    'O acesso principal é pela CE-085 (Rota do Sol Poente), rodovia asfaltada que liga Fortaleza ao município, com viagem de carro de cerca de 3h30 a 4h. O Aeroporto Regional Comandante Ariston Pessoa, em Cruz, fica a cerca de 35 km da vila de Jericoacoara e recebe voos regulares e charters. Dentro da vila, as ruas são de areia, sem pavimentação, e a circulação é feita a pé, de bicicleta ou em veículos 4x4, já que o transporte motorizado convencional tem uso restrito no núcleo turístico.',

  corridas: [
    {
      nome: 'Meia Maratona de Jeri (BRB Jeri)',
      descricao:
        'Evento de corrida de rua realizado na vila de Jericoacoara, com percursos de 7 km, 12 km e 21 km que passam pelo centro da vila e sobem o Serrote, de onde se avista a Pedra Furada.',
    },
    {
      nome: 'Corrida Jijoca de Jericoacoara',
      descricao:
        'Prova de rua tradicional do calendário local, disputada há mais de três décadas no município, reunindo corredores da região e visitantes.',
    },
  ],
  culturaEsportiva:
    'A cultura esportiva da região é moldada pelo vento: Jericoacoara é reconhecida internacionalmente como point de kitesurf e windsurf, com escolas e clubes de vento na vila e nas lagoas próximas. A isso somam-se o surfe, o stand up paddle, o sandboard e as caminhadas e corridas nas dunas do Parque Nacional, que atraem tanto moradores quanto turistas esportistas o ano todo.',
  academias:
    'A oferta de academias é pequena e concentrada na vila de Jericoacoara, com estúdios de musculação e treino funcional voltados a moradores e à alta rotatividade de turistas, geralmente com contratos avulsos ou por período de estadia.',

  destaquesFitness: [
    'Vento forte e constante que faz da região um polo mundial de kitesurf e windsurf.',
    'Dunas do Parque Nacional de Jericoacoara usadas para trekking, sandboard e treino funcional em areia.',
    'Vila com ruas de areia, sem asfalto, o que muda a lógica de corrida e deslocamento ativo.',
    'Fluxo turístico internacional que sustenta uma demanda por aulas avulsas de curta duração.',
  ],

  precos: {
    avulsaMin: 70,
    avulsaMax: 180,
    mensalMin: 300,
    mensalMax: 900,
    onlineMin: 150,
    onlineMax: 400,
  },

  conclusao:
    'Entre dunas móveis, lagoas e o vento que atrai esportistas do mundo todo, Jijoca de Jericoacoara oferece um cenário natural raro para treinar. Um personal trainer ajuda a aproveitar esse ambiente com segurança — adaptando o treino ao calor, ao vento e à areia — seja para moradores fixos ou para quem passa uma temporada na vila.',

  vizinhas: ['acarau-ce', 'itapipoca-ce', 'sobral-ce'],

  fontes: [
    { nome: 'IBGE Cidades — Jijoca de Jericoacoara', url: 'https://cidades.ibge.gov.br/brasil/ce/jijoca-de-jericoacoara/panorama' },
    { nome: 'Atlas Brasil — IDHM', url: 'https://www.atlasbrasil.org.br/' },
    { nome: 'Prefeitura de Jijoca de Jericoacoara', url: 'https://www.jijocadejericoacoara.ce.gov.br/' },
  ],
  atualizadoEm: '2026-07-02',
};
