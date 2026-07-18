import type { Cidade } from '../../lib/types';

export const cidade: Cidade = {
  slug: 'suzano-sp',
  nome: 'Suzano',
  uf: 'SP',
  estado: 'São Paulo',
  estadoSlug: 'sao-paulo',
  regiao: 'Sudeste',
  gentilico: 'suzanense',
  tipo: 'cidade',

  populacao: 307429,
  populacaoAno: 2022,
  idhm: 0.765,
  idhmClasse: 'alto',
  altitudeM: 749,

  resumoEconomico:
    'No Alto Tietê, leste da Região Metropolitana de São Paulo, Suzano combina um forte parque industrial — com destaque histórico para a Suzano (papel e celulose) e para indústrias dos setores químico e de embalagens — com um expressivo polo agrícola e de hortifrúti integrado ao Cinturão Verde da metrópole, herança da imigração japonesa que marcou a colonização rural da cidade. O município tem um dos maiores PIBs do Alto Tietê e perfil socioeconômico popular e de classe média.',

  mercado:
    'Cidade grande de perfil popular e médio, Suzano tem o mercado fitness ancorado em duas rotinas distintas: a de quem trabalha na própria cidade — no parque industrial e no comércio — e a de quem cruza diariamente para a zona leste da capital pela Linha 11-Coral. As academias acompanham essa divisão: unidades de rede de baixo custo no Centro e no Suzano Shopping, a poucos passos das estações, e academias de bairro nos distritos residenciais. O Parque Max Feffer, colado nas estações Suzano e Calmon Viana, é o ponto de treino ao ar livre mais prático da região. Para o personal, os nichos mais fortes são as sessões cedo e à noite perto do eixo do trem, o atendimento domiciliar nos bairros e o acompanhamento online para quem alterna turnos na indústria.',

  bairrosNobres: ['Centro', 'Jardim Imperador', 'Vila Costa', 'Parque Maria Helena'],
  bairrosPopulares: ['Cidade Boa Vista', 'Jardim Dona Benta', 'Palmeiras', 'Miguel Badra'],

  parques: [
    {
      nome: 'Parque Municipal Max Feffer',
      descricao:
        'Principal parque urbano da cidade, no Jardim Imperador, com áreas verdes, lago, pistas para caminhada e corrida e espaços de lazer; fica a poucos minutos a pé das estações Suzano e Calmon Viana da CPTM.',
    },
    {
      nome: 'Equipamentos esportivos municipais',
      descricao:
        'Rede de ginásios, quadras e centros esportivos distribuída pelos bairros, que sustenta a prática comunitária e o acesso público ao treino.',
    },
  ],
  ciclovias:
    'A cidade tem trechos de estrutura cicloviária na área urbana; a extensão total não é consolidada em fonte oficial.',

  clima:
    'O clima é subtropical de altitude do planalto paulista, com verões chuvosos e invernos mais secos e amenos; situada no vale do Alto Tietê, a cidade tem áreas baixas sujeitas a alagamentos em chuvas fortes.',
  climaTreino:
    'O treino ao ar livre rende bem no inverno seco e nas manhãs amenas; no verão, vale planejar os horários por causa das chuvas concentradas no fim da tarde.',

  mobilidade:
    'Suzano é servida pela estação Suzano da CPTM Linha 11-Coral, que conecta a cidade à zona leste de São Paulo e a Mogi das Cruzes, além de ligações rodoviárias pela Rodovia Índio Tibiriçá (SP-031) e acesso à Rodovia Ayrton Senna, eixos que estruturam o deslocamento na região.',

  corridas: [
    {
      nome: 'Provas de rua do Alto Tietê',
      descricao:
        'Suzano participa do calendário regional de corridas de rua do Alto Tietê, com provas na cidade e nos municípios vizinhos.',
    },
    {
      nome: 'Calendário esportivo municipal',
      descricao:
        'A Secretaria de Esportes promove atividades, campeonatos e eventos esportivos comunitários ao longo do ano.',
    },
  ],
  culturaEsportiva:
    'A cultura esportiva é comunitária e fortemente ligada à tradição da colônia japonesa, presente em clubes que mantêm eventos como a Festa da Cerejeira e o Undokai; o futebol de várzea e os equipamentos públicos de bairro também democratizam o acesso à atividade física.',
  academias:
    'A oferta é dominada por academias de bairro que atendem a população trabalhadora dos distritos, complementadas por unidades de rede de baixo custo no Centro e no Suzano Shopping, pela rede municipal de esportes e por estúdios e personal trainers que fazem atendimento domiciliar.',
  academiasProximas: [
    { nome: 'Smart Fit', detalhe: 'unidades no Suzano Shopping e no Docelar Supermercado' },
    { nome: 'Bluefit Suzano Centro', detalhe: 'na Rua José Correia Gonçalves, Vila São Jorge' },
    { nome: 'Skyfit Suzano', detalhe: 'unidade da rede de baixo custo na cidade' },
  ],

  destaquesFitness: [
    'Parque Max Feffer como principal polo de caminhada e corrida ao ar livre.',
    'Conexão por trem (CPTM Linha 11-Coral) que amplia o raio de atendimento do personal.',
    'Perfil popular e médio, com demanda por academias de bairro e atendimento domiciliar.',
    'Forte tradição esportiva da colônia japonesa (Festa da Cerejeira, Undokai).',
  ],

  precos: {
    avulsaMin: 55,
    avulsaMax: 130,
    mensalMin: 280,
    mensalMax: 750,
    onlineMin: 120,
    onlineMax: 380,
  },

  conclusao:
    'Cidade grande e popular do Alto Tietê, Suzano tem uma demanda muito ligada à rotina de trabalho e à mobilidade por trem. Um personal trainer ajuda a encaixar o treino no dia a dia — seja nas academias de bairro, no atendimento domiciliar ou no formato online — aproveitando espaços como o Parque Max Feffer.',

  faqsExtra: [
    {
      pergunta: 'Onde o personal costuma atender em Suzano?',
      resposta:
        'Os três cenários mais comuns são: as academias — unidades de rede no Centro e no Suzano Shopping, coladas nas estações, e academias de bairro nos distritos —, o atendimento em casa, forte nos bairros residenciais, e o Parque Max Feffer, que fica a poucos minutos a pé das estações Suzano e Calmon Viana e tem pista para caminhada e corrida. Essa proximidade entre trem, parque e academias permite emendar o treino na ida ou na volta do trabalho sem deslocamento extra.',
    },
    {
      pergunta: 'Quem trabalha em turnos na indústria de Suzano consegue treinar com personal?',
      resposta:
        'Consegue — e é um dos públicos que mais precisa de acompanhamento individual. Aulas coletivas de horário fixo raramente sobrevivem à alternância de escalas do parque industrial; com o personal, a sessão migra de horário junto com o turno e o plano prevê versões curtas para as semanas mais pesadas. Nos períodos em que o presencial não encaixa, o acompanhamento online mantém treino, ajustes e cobrança em dia.',
    },
    {
      pergunta: 'Há acompanhamento em Suzano para quem sente dores ou tem limitações?',
      resposta:
        'Há. O Montinho Personal, destacado pelo portal, tem cursos voltados ao treinamento de pessoas com dores e limitações musculoesqueléticas e a vivência prática de quem já enfrentou as dores comuns da musculação. Para o Alto Tietê, o formato mais prático é o acompanhamento online, com treino adaptado e ajustes contínuos; o presencial pode ser avaliado conforme agenda e local, a partir da base na região de Alphaville. O trabalho é progressivo e sem promessa de cura — quadros clínicos pedem também médico ou fisioterapeuta.',
    },
  ],

  vizinhas: ['mogi-das-cruzes-sp', 'sao-paulo-sp', 'guarulhos-sp'],

  fontes: [
    { nome: 'IBGE Cidades — Suzano', url: 'https://cidades.ibge.gov.br/brasil/sp/suzano/panorama' },
    { nome: 'Prefeitura de Suzano', url: 'https://suzano.sp.gov.br/' },
    { nome: 'Atlas Brasil — IDHM', url: 'https://www.atlasbrasil.org.br/' },
  ],
  atualizadoEm: '2026-07-18',
};
