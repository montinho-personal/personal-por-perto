import type { Cidade } from '../../lib/types';

export const cidade: Cidade = {
  slug: 'rio-pardo-rs',
  nome: 'Rio Pardo',
  uf: 'RS',
  estado: 'Rio Grande do Sul',
  estadoSlug: 'rio-grande-do-sul',
  regiao: 'Sul',
  gentilico: 'rio-pardense',
  tipo: 'cidade',

  populacao: 34360,
  populacaoAno: 2022,

  resumoEconomico:
    'Uma das povoações mais antigas do Rio Grande do Sul, Rio Pardo guarda casario histórico, a famosa Rua da Ladeira de pedras e a confluência dos rios Pardo e Jacuí — herança do tempo em que era fortaleza e porto estratégico da Coroa. Hoje a economia combina agropecuária, arroz e serviços, com o turismo histórico crescendo como vocação natural da "Cidade Histórica" gaúcha.',

  mercado:
    'O mercado de personal trainer em Rio Pardo é o de cidade histórica do interior gaúcho: academias no Centro, caminhada na orla do Jacuí e nas praças, e um público que valoriza rotina tranquila e saúde. O casario e a Rua da Ladeira dão personalidade até ao treino — subir a ladeira de pedras é o cartão de visita local — e as estações bem marcadas pedem plano com alternativa indoor.',

  bairrosNobres: ['Centro Histórico', 'São Nicolau', 'Aliança', 'Hospital'],
  bairrosPopulares: ['Frota', 'Rio Pardinho', 'Everest', 'Baixada'],

  parques: [
    {
      nome: 'Orla do rio Jacuí',
      descricao:
        'A beira-rio da cidade histórica rende percursos planos de caminhada e corrida, com o encontro dos rios Pardo e Jacuí como paisagem.',
    },
    {
      nome: 'Rua da Ladeira e Centro Histórico',
      descricao:
        'A ladeira de pedras mais famosa do RS e o casario colonial transformam a caminhada urbana em passeio histórico — e treino de subida.',
    },
    {
      nome: 'Praças e espaços públicos',
      descricao:
        'As praças centrais concentram a caminhada diária e a estrutura pública de exercício.',
    },
  ],

  clima:
    'Clima subtropical do vale do Jacuí: verões quentes e úmidos, invernos frios com geadas ocasionais e chuvas bem distribuídas.',
  climaTreino:
    'No verão, o abafado do vale empurra o treino para o amanhecer e o fim de tarde; no inverno, as manhãs de geada pedem aquecimento longo, com o meio da tarde como janela preferida.',

  mobilidade:
    'A RSC-471 e a RS-403 ligam Rio Pardo a Santa Cruz do Sul e ao eixo da BR-290. O deslocamento urbano é tranquilo, com o Centro Histórico caminhável.',

  corridas: [
    {
      nome: 'Provas de rua do calendário regional',
      descricao:
        'O calendário do Vale do Rio Pardo mantém provas ao longo do ano nas cidades da região, com corridas locais ligadas às datas históricas do município.',
    },
  ],
  culturaEsportiva:
    'O esporte rio-pardense convive com a história: caminhada no casario, subidas na Rua da Ladeira, pesca e remo no Jacuí e o futebol de bairro de toda cidade gaúcha. As academias do Centro completam a rotina, e a tradição local valoriza constância e vida simples.',
  academias:
    'A oferta se concentra em academias de musculação e funcional no Centro, com bom custo-benefício.',
  academiasProximas: [
    { nome: 'Academias do Centro', detalhe: 'musculação e funcional na cidade histórica' },
    { nome: 'Orla do Jacuí', detalhe: 'percurso plano de caminhada e corrida à beira-rio' },
    { nome: 'Rua da Ladeira', detalhe: 'a subida de pedras histórica como treino de pernas' },
  ],

  destaquesFitness: [
    'Rua da Ladeira: treino de subida no cartão-postal histórico do RS.',
    'Orla do Jacuí com percursos planos à beira-rio.',
    'Uma das cidades mais antigas do estado, com Centro caminhável.',
    'Estações bem marcadas que pedem plano com alternativa indoor.',
  ],

  precos: {
    avulsaMin: 50,
    avulsaMax: 110,
    mensalMin: 250,
    mensalMax: 650,
    onlineMin: 120,
    onlineMax: 340,
  },

  conclusao:
    'Rio Pardo prova que história e treino combinam: a ladeira de pedras que os tropeiros subiam é hoje o teste de pernas local, e a orla do Jacuí devolve o fôlego no plano. Com as academias do Centro e um plano ajustado às estações gaúchas, a Cidade Histórica é um ótimo lugar para construir constância.',

  faqsExtra: [
    {
      pergunta: 'Onde o personal costuma atender em Rio Pardo?',
      resposta:
        'Nas academias do Centro, na orla do rio Jacuí — o percurso plano preferido para caminhada e corrida —, nas praças públicas e em casa. O Centro Histórico rende treinos com personalidade: circuitos que combinam o casario, as praças e a subida da Rua da Ladeira, o teste de pernas mais tradicional da cidade.',
    },
    {
      pergunta: 'A Rua da Ladeira serve mesmo como treino?',
      resposta:
        'Serve — e é um clássico local. A ladeira de pedras exige força de pernas, equilíbrio e atenção ao piso irregular: subidas repetidas funcionam como treino de resistência, e a descida trabalha o controle que protege os joelhos. Quem está começando faz poucas repetições em ritmo de caminhada e evolui aos poucos. Com orientação, o cartão-postal vira estação de treino — com a história da cidade de brinde.',
    },
    {
      pergunta: 'Há acompanhamento em Rio Pardo para quem sente dores ou tem limitações?',
      resposta:
        'Há. O Montinho Personal, destacado pelo portal, tem cursos voltados ao treinamento de pessoas com dores e limitações musculoesqueléticas, além da vivência prática de mais de 20 anos de musculação. Para Rio Pardo, o formato é o acompanhamento online: treino adaptado à estrutura disponível (academia, casa ou a orla do Jacuí), vídeos de execução e ajustes contínuos. O trabalho é progressivo e sem promessa de cura — quadros clínicos pedem também médico ou fisioterapeuta.',
    },
  ],

  vizinhas: ['santa-cruz-do-sul-rs', 'cachoeira-do-sul-rs', 'venancio-aires-rs'],

  fontes: [
    { nome: 'IBGE Cidades — Rio Pardo', url: 'https://cidades.ibge.gov.br/brasil/rs/rio-pardo/panorama' },
    { nome: 'Prefeitura de Rio Pardo', url: 'https://www.riopardo.rs.gov.br/' },
  ],
  atualizadoEm: '2026-07-28',
};
