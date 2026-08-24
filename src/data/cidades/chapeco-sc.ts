import type { Cidade } from '../../lib/types';

export const cidade: Cidade = {
  slug: 'chapeco-sc',
  nome: 'Chapecó',
  uf: 'SC',
  estado: 'Santa Catarina',
  estadoSlug: 'santa-catarina',
  regiao: 'Sul',
  gentilico: 'chapecoense',
  tipo: 'cidade',

  populacao: 254785,
  populacaoAno: 2022,
  idhm: 0.79,
  idhmClasse: 'alto',
  altitudeM: 674,

  resumoEconomico:
    'Principal polo do oeste catarinense, Chapecó é referência nacional em agroindústria de proteína animal (aves e suínos), sede da Cooperativa Central Aurora e com unidade da BRF — um dos maiores parques agroindustriais de proteína do mundo. É também centro regional de saúde, educação e serviços, com IDHM alto e crescimento populacional acelerado.',

  mercado:
    'O mercado fitness é ativo e em expansão, com redes nacionais (Smart Fit, Pratique, Tecfit) e operações locais, além de forte presença de personal training e estúdios boutique (crossfit, pilates, beach tennis). O inverno rigoroso eleva a demanda por academias indoor.',

  bairrosNobres: ['Jardim Itália', 'Presidente Médici', 'Palmital', 'Desbravador'],
  bairrosPopulares: ['Efapi', 'Parque das Palmeiras', 'São Cristóvão', 'Santa Maria'],

  parques: [
    {
      nome: 'Ecoparque',
      descricao:
        'Área verde com lago, três pistas de caminhada e academia ao ar livre — um dos principais espaços de treino da cidade.',
    },
    {
      nome: 'Parque das Palmeiras',
      descricao:
        'Tem pista de caminhada, playground e áreas de lazer, atendendo a região oeste da cidade.',
    },
    {
      nome: 'CEU da Efapi',
      descricao:
        'Centro com quadra poliesportiva, pista de caminhada, academia ao ar livre e pista de skate, ampliando o acesso público ao esporte.',
    },
  ],
  ciclovias:
    'A malha cicloviária está em ampliação, com trechos recentes como o da Avenida Leopoldo Sander; a extensão total ainda não é divulgada em fonte oficial.',

  clima:
    'O clima é subtropical úmido — Chapecó é uma das cidades mais frias de SC, com verões de 25 °C a 35 °C e invernos de 5 °C a 15 °C, com geadas.',
  climaTreino:
    'No verão, vale priorizar horários frescos e hidratação; no inverno, o aquecimento prolongado e uma alternativa indoor ajudam a manter a constância.',

  mobilidade:
    'A BR-282 é o eixo principal, conectando Chapecó a Florianópolis (cerca de 557 km) e ao restante do estado. O deslocamento interno é predominantemente por carro e ônibus.',

  corridas: [
    {
      nome: 'Meia Maratona de Chapecó',
      descricao:
        'Com provas de 21 km, 15 km, 10 km e 5 km, além de caminhada, integra as comemorações de aniversário do município.',
    },
    {
      nome: 'Circuito de Corridas da Advocacia Catarinense (etapa Chapecó)',
      descricao:
        'Etapa regional de um circuito estadual, parte de um calendário de corrida ativo.',
    },
  ],
  culturaEsportiva:
    'A Chapecoense, com a Arena Condá, é símbolo nacional de resiliência e mobiliza fortemente a cidade. Essa paixão esportiva se estende a uma cena ativa de corrida e treino, sustentada pela boa infraestrutura pública.',
  academias:
    'O mercado é maduro, com grandes redes e estúdios boutique, complementado pela boa infraestrutura pública ao ar livre (Ecoparque, CEU e Parque das Palmeiras).',

  destaquesFitness: [
    'Cerca de 255 mil habitantes e IDHM alto — base sólida para serviços de bem-estar.',
    'Mercado maduro: grandes redes e estúdios boutique.',
    'Boa infraestrutura pública ao ar livre (Ecoparque, CEU, Parque das Palmeiras).',
    'Invernos rigorosos elevam a demanda por academias indoor e periodização sazonal.',
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
    'Polo do oeste catarinense com IDHM alto e mercado fitness maduro, Chapecó tem boa estrutura para treinar o ano todo. Um personal trainer ajuda a periodizar o treino conforme as estações — do verão quente ao inverno rigoroso — e a aproveitar parques como o Ecoparque.',

  vizinhas: ['xanxere-sc', 'concordia-sc', 'erechim-rs'],

  faqsExtra: [
    {
      pergunta: 'Onde treinar ao ar livre em Chapecó?',
      resposta:
        'O Ecoparque é o coração verde da cidade — pistas, trilhas e o palco de treinos abertos e corridas do calendário, do Circuito Unimed às provas beneficentes. As avenidas largas do centro planejado completam o circuito urbano, e o trail run cresce forte na região, com provas que vão de 5 km a ultras de 45 km nos morros do oeste.',
    },
    {
      pergunta: 'Personal trainer atende quem trabalha em turnos nos frigoríficos de Chapecó?',
      resposta:
        'Sim — a capital do oeste vive de agroindústria, e as escalas dos frigoríficos e das indústrias moldam a agenda dos profissionais locais: treinos no meio da manhã, início da tarde e contraturno são rotina. Muitos montam o plano quinzenal junto com a escala do aluno, e o formato online cobre as semanas viradas.',
    },
    {
      pergunta: 'Como é treinar no inverno de Chapecó?',
      resposta:
        'O oeste catarinense tem inverno de verdade: madrugadas perto de zero, geada e tardes que não passam dos 15 °C. O treino ao ar livre migra para o fim da manhã e o início da tarde, o aquecimento alonga e as academias cobertas lotam — reservar horário com o personal nos meses frios é sabedoria local. No verão, o jogo inverte: calor forte e treino cedo.',
    },
  ],
  fontes: [
    { nome: 'IBGE Cidades — Chapecó', url: 'https://cidades.ibge.gov.br/brasil/sc/chapeco/panorama' },
    { nome: 'Prefeitura de Chapecó', url: 'https://www.chapeco.sc.gov.br/' },
    { nome: 'Atlas Brasil — IDHM', url: 'https://www.atlasbrasil.org.br/' },
  ],
  atualizadoEm: '2026-08-24',
};
