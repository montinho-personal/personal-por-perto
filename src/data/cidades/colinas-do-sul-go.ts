import type { Cidade } from '../../lib/types';

export const cidade: Cidade = {
  slug: 'colinas-do-sul-go',
  nome: 'Colinas do Sul',
  uf: 'GO',
  estado: 'Goiás',
  estadoSlug: 'goias',
  regiao: 'Centro-Oeste',
  gentilico: 'colinense',
  tipo: 'cidade',

  populacao: 4030,
  populacaoAno: 2022,

  resumoEconomico:
    'Com 4.030 habitantes (Censo 2022) e densidade de apenas 2,4 hab/km², Colinas do Sul é a porta silenciosa da Chapada dos Veadeiros — e o único município da chapada banhado pelo lago da Serra da Mesa, o quinto maior do Brasil. A economia combina agropecuária, mineração histórica e um ecoturismo que cresce entre cachoeiras, trilhas e o encontro dos rios São Miguel e Tocantinzinho.',

  mercado:
    'O mercado de personal trainer é mínimo e ligado ao turismo: condutores de trilha, trabalhadores de pousada e temporadistas que buscam preparo para a chapada. O treino formal acontece em estrutura simples no centro; o informal, nas trilhas, serras e na beira do lago.',

  bairrosNobres: ['Centro', 'Setor Sul', 'Beira Lago', 'Vila Borges'],
  bairrosPopulares: ['Setor Norte', 'Capela', 'São José', 'Zona Rural'],

  parques: [
    {
      nome: 'Chapada dos Veadeiros — vertente oeste',
      descricao:
        'O município integra a região da chapada, Patrimônio Mundial da UNESCO, com trilhas, mirantes e cachoeiras menos visitadas que as do eixo Alto Paraíso–São Jorge — caminhada de desnível real em cerrado preservado.',
    },
    {
      nome: 'Lago da Serra da Mesa',
      descricao:
        'O quinto maior lago do Brasil banha o município — águas para natação, caiaque, SUP e pesca esportiva, com enseadas calmas e praias de barranco.',
    },
    {
      nome: 'Encontro dos rios São Miguel e Tocantinzinho',
      descricao:
        'Um dos cenários mais bonitos da região, alcançado por estradas de terra e trilhas — destino clássico de caminhada e banho de rio.',
    },
  ],
  ciclovias:
    'Não há malha cicloviária. As estradas de terra entre o centro, o lago e as cachoeiras servem ao cicloturismo e ao mountain bike.',

  clima:
    'Tropical de savana, com inverno seco de céu limpo e verão chuvoso; as noites são amenas pela altitude do entorno da chapada.',
  climaTreino:
    'A estação seca é a temporada de ouro: manhãs frescas para trilha e corrida, tardes para o lago. Na chuva, as trilhas pedem cautela e o treino migra para o início do dia — e a hidratação é regra o ano inteiro no cerrado.',

  mobilidade:
    'O acesso se faz por rodovias estaduais a partir de Niquelândia ou de Alto Paraíso de Goiás, com trechos de terra nos atrativos. Brasília fica a cerca de 300 km.',

  corridas: [
    {
      nome: 'Provas de trail run da Chapada dos Veadeiros',
      descricao:
        'O calendário regional de corrida em trilha usa o desnível e o cerrado da chapada como cenário, com etapas que atraem corredores de Brasília e Goiânia.',
    },
  ],
  culturaEsportiva:
    'Caminhada de trilha, banho de cachoeira e a lida rural formam a base ativa local. O lago adiciona natação e caiaque, e a vizinhança da chapada traz o trail run e o cicloturismo de temporada.',
  academias:
    'A oferta formal é mínima e concentrada no centro. O personal local trabalha entre o atendimento a domicílio, o treino ao ar livre e o acompanhamento online — o formato que sustenta quem passa temporadas na região.',

  academiasVerificadasEm: '2026-08-27',

  destaquesFitness: [
    'Única cidade da Chapada dos Veadeiros banhada pelo lago da Serra da Mesa.',
    'Trilhas e cachoeiras da vertente oeste da chapada, longe das multidões.',
    'Encontro dos rios São Miguel e Tocantinzinho como destino de caminhada.',
    'Estação seca de céu limpo: meses ideais para trilha e corrida.',
  ],

  precos: {
    avulsaMin: 45,
    avulsaMax: 100,
    mensalMin: 230,
    mensalMax: 580,
    onlineMin: 120,
    onlineMax: 320,
  },

  conclusao:
    'Colinas do Sul é a Chapada dos Veadeiros sem fila: trilha, cachoeira e um lago gigante para chamar de seu. Um personal trainer daqui constrói pernas e fôlego para o desnível do cerrado — e usa o lago como piscina natural de recuperação.',

  vizinhas: ['alto-paraiso-de-goias-go', 'cavalcante-go'],

  capaArte: {
    src: '/capas-cidade/colinas-do-sul-go.webp',
    w: 1200,
    h: 800,
    alt: 'Personal trainer em Colinas do Sul (GO) em arte que reúne a Cachoeira Pedra Rolada, a praça central e a igreja da cidade — Personal por Perto',
    legenda: 'Treino personalizado em Colinas do Sul: um plano feito para o seu corpo e a sua rotina, entre o lago da Serra da Mesa e a Chapada.',
  },
  fontes: [
    { nome: 'IBGE Cidades — Colinas do Sul', url: 'https://cidades.ibge.gov.br/brasil/go/colinas-do-sul/panorama' },
    { nome: 'Visit Veadeiros — Colinas do Sul', url: 'https://visitveadeiros.com.br/colinas-do-sul/' },
    { nome: 'ICMBio — Parque Nacional da Chapada dos Veadeiros', url: 'https://www.gov.br/icmbio/pt-br/assuntos/biodiversidade/unidade-de-conservacao/unidades-de-biomas/cerrado/lista-de-ucs/parna-da-chapada-dos-veadeiros' },
  ],
  atualizadoEm: '2026-08-27',
};
