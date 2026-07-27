import type { Cidade } from '../../lib/types';

export const cidade: Cidade = {
  slug: 'uberlandia-mg',
  nome: 'Uberlândia',
  uf: 'MG',
  estado: 'Minas Gerais',
  estadoSlug: 'minas-gerais',
  regiao: 'Sudeste',
  gentilico: 'uberlandense',
  tipo: 'cidade',

  populacao: 713224,
  populacaoAno: 2022,
  idhm: 0.789,
  idhmClasse: 'alto',
  altitudeM: 863,

  resumoEconomico:
    'Maior cidade do Triângulo Mineiro e apelidada de "Capital da Logística", Uberlândia é um polo de agronegócio, indústria e distribuição. Abriga gigantes como a Cargill e o atacadista Martins, com um dos maiores centros de distribuição da América Latina, no entroncamento de importantes rodovias federais. Cidade universitária (UFU), tem renda e poder de compra acima da média do interior mineiro e um público jovem que aquece o mercado fitness.',

  mercado:
    'A cultura de academia em Uberlândia é forte: grandes redes (Smart Fit, Selfit) convivem com centenas de academias de bairro e estúdios de treino funcional e personalizado. O público universitário da UFU, somado a uma renda acima da média do interior, sustenta uma demanda alta e constante por musculação e acompanhamento profissional.',

  bairrosNobres: ['Morada da Colina', 'Jardim Karaíba', 'Tabajaras', 'Santa Mônica'],
  bairrosPopulares: ['Luizote de Freitas', 'Tocantins', 'Shopping Park', 'Jardim Canaã'],

  parques: [
    {
      nome: 'Parque do Sabiá',
      descricao:
        'Com cerca de 1,8 milhão de m² no bairro Tibery, tem pista asfaltada de 5.100 m, trilhas de terra, cerca de 11 academias ao ar livre (uma acessível para PcD), estádio e piscinas. É o principal point de corrida da cidade, com milhares de visitantes por dia.',
    },
    {
      nome: 'Parque Municipal da Gávea',
      descricao:
        'Na zona sul, tem cerca de 182 mil m² com pista de caminhada, estação de ginástica, orquidário e planetário — um espaço completo para treino e lazer.',
    },
    {
      nome: 'Parque Linear do Rio Uberabinha',
      descricao:
        'Com cerca de 100 mil m² no Jaguará, reúne pista de caminhada e ciclismo, equipamentos de ginástica e pista de skate.',
    },
  ],
  ciclovias:
    'Uberlândia tem uma das maiores redes do interior do país: cerca de 141 km somando ciclovias e ciclofaixas, com maior concentração no setor sul.',

  clima:
    'O clima é tropical de altitude, com verão úmido (média perto de 24,7 °C) e inverno seco (média de 18,8 °C). A cidade fica a cerca de 863 m de altitude.',
  climaTreino:
    'O treino ao ar livre é viável o ano todo, mas vale reforçar a hidratação no calor (de outubro a março) e ter atenção ao ar seco e à poeira no inverno, priorizando a manhã ou o fim da tarde.',

  mobilidade:
    'A cidade tem o Sistema Integrado de Transporte (SIT), com corredores prioritários nas avenidas João Naves de Ávila e Segismundo Pereira, e acesso rodoviário privilegiado pelo entroncamento de rodovias federais — base da sua vocação logística.',

  corridas: [
    {
      nome: 'Maratona Nilson Lima de Uberlândia',
      descricao:
        'Evento de dois dias com provas de 5 km, 10 km, 21 km e 42 km, com arena no Estádio do Parque do Sabiá.',
    },
    {
      nome: 'Meia Maratona de Uberlândia',
      descricao:
        'Prova de 5 km, 10 km e 21 km que vem se consolidando no calendário mineiro de corrida de rua.',
    },
  ],
  culturaEsportiva:
    'Uberlândia tem forte tradição de corrida de rua e ciclismo, com comunidades ativas como a "Pedala Uberlândia", e um público fitness aquecido pela universidade. O Parque do Sabiá é o epicentro do treino ao ar livre na cidade.',
  academias:
    'A oferta vai das grandes redes (Smart Fit, Selfit) às muitas academias de bairro e estúdios de funcional e personal, atendendo desde o estudante até o público premium da zona sul.',
  academiasProximas: [
    { nome: 'Smart Fit', detalhe: 'unidades no Centro e na Av. Rondon Pacheco' },
    { nome: 'Selfit', detalhe: 'rede de baixo custo com presença na cidade' },
    { nome: 'Academias de bairro e estúdios', detalhe: 'centenas de opções, do estudante ao público premium da zona sul' },
    { nome: 'Academias ao ar livre do Parque do Sabiá', detalhe: 'cerca de 11 estações gratuitas, uma delas acessível' },
  ],

  destaquesFitness: [
    'Pista de 5,1 km do Parque do Sabiá: o melhor ativo gratuito para corrida e assessorias.',
    'Cerca de 11 academias ao ar livre no Sabiá, além de estações na Gávea e no Uberabinha.',
    'Público universitário (UFU) e renda acima da média sustentam um mercado premium de personal.',
    'Calendário consolidado de corridas, gerando demanda recorrente por preparação de corredores.',
  ],

  precos: {
    avulsaMin: 65,
    avulsaMax: 150,
    mensalMin: 320,
    mensalMax: 880,
    onlineMin: 160,
    onlineMax: 400,
  },

  conclusao:
    'Com o Parque do Sabiá como cartão de visitas e um mercado fitness aquecido pela universidade, Uberlândia é um ótimo lugar para treinar com orientação. Um personal trainer ajuda a aproveitar essa estrutura — da pista de 5 km às academias de bairro — com método, segurança e constância.',

  faqsExtra: [
    {
      pergunta: 'Onde o personal costuma atender em Uberlândia?',
      resposta:
        'O Parque do Sabiá é o epicentro: pista asfaltada de 5,1 km, trilhas de terra e cerca de 11 academias ao ar livre fazem dele o melhor ativo gratuito de treino do Triângulo Mineiro. Nas academias, Smart Fit e Selfit cobrem o dia a dia, e os estúdios premium atendem a zona sul (Morada da Colina, Jardim Karaíba). O atendimento em casa e em condomínio cresce nos bairros de alto padrão, e a Gávea e o Parque Linear do Uberabinha completam as opções públicas.',
    },
    {
      pergunta: 'Dá para treinar bem em Uberlândia com orçamento de estudante?',
      resposta:
        'Dá — e a cidade universitária é generosa nisso. A combinação clássica do estudante da UFU: musculação em rede de baixo custo (as mensalidades da cidade estão entre as mais acessíveis do Sudeste) somada à estrutura gratuita do Sabiá para corrida e funcional. Para quem quer orientação sem o custo do presencial contínuo, o acompanhamento online entrega o plano, a correção por vídeo e a cobrança de constância por uma fração do preço — e uma sessão presencial ocasional ajusta a técnica.',
    },
    {
      pergunta: 'Há acompanhamento em Uberlândia para quem sente dores ou tem limitações?',
      resposta:
        'Há. O Montinho Personal, destacado pelo portal, tem cursos voltados ao treinamento de pessoas com dores e limitações musculoesqueléticas, além da vivência prática de mais de 20 anos de musculação. Para Uberlândia, o formato é o acompanhamento online: treino adaptado à estrutura disponível (academia, condomínio, casa ou parque), vídeos de execução e ajustes contínuos. O trabalho é progressivo e sem promessa de cura — quadros clínicos pedem também médico ou fisioterapeuta.',
    },
  ],

  vizinhas: ['belo-horizonte-mg', 'goiania-go', 'ribeirao-preto-sp'],

  fontes: [
    { nome: 'IBGE Cidades — Uberlândia', url: 'https://cidades.ibge.gov.br/brasil/mg/uberlandia/panorama' },
    { nome: 'Prefeitura de Uberlândia', url: 'https://www.uberlandia.mg.gov.br/' },
    { nome: 'Atlas Brasil — IDHM', url: 'https://www.atlasbrasil.org.br/' },
  ],
  capaArte: {
    src: '/capas-cidade/uberlandia-mg.webp',
    w: 1200,
    h: 675,
    alt:
      'Personal trainer em Uberlândia (MG) em arte que une treino de força e cartões-postais reais da cidade — o Parque do Sabiá e a Praça Tubal Vilela ao fundo — Personal por Perto',
    legenda:
      'Treino personalizado em Uberlândia: um plano feito para o seu corpo e a sua rotina, com acompanhamento profissional na cidade e região.',
  },
  atualizadoEm: '2026-07-25',
};
