import type { Cidade } from '../../lib/types';

export const cidade: Cidade = {
  slug: 'maua-sp',
  nome: 'Mauá',
  uf: 'SP',
  estado: 'São Paulo',
  estadoSlug: 'sao-paulo',
  regiao: 'Sudeste',
  gentilico: 'mauaense',
  tipo: 'cidade',

  populacao: 418261,
  populacaoAno: 2022,
  idhm: 0.766,
  idhmClasse: 'alto',
  altitudeM: 760,

  resumoEconomico:
    'Cidade industrial do ABC paulista, Mauá foi historicamente a "Capital da Porcelana" e hoje sedia o Polo Petroquímico de Capuava e a Refinaria de Capuava (RECAP), com forte presença de óleo e gás, petroquímica e metalmecânica. O perfil operário e a localização entre a capital e o Porto de Santos moldam o dia a dia da cidade e de seu público.',

  mercado:
    'O mercado de personal trainer em Mauá é moldado pela rotina industrial: com o Polo Petroquímico de Capuava e a RECAP operando em turnos, boa parte dos potenciais alunos precisa treinar em horários fora do padrão — cedo da manhã, no meio da tarde ou à noite. A oferta acompanha o perfil popular da cidade: academias de rede de baixo custo no Centro e nas avenidas principais, academias de bairro consolidadas em regiões como Jardim Zaíra e Vila Bocaina, e uma rede municipal ampla (CMECs, ginásios e campos) que serve de base gratuita para treino funcional. O personal que domina a lógica dos turnos e monta agenda flexível — presencial em academia, em casa ou nos espaços públicos — encontra uma demanda constante e fiel, com o acompanhamento online completando a semana de quem alterna escalas.',

  bairrosNobres: ['Vila Bocaina', 'Vila Noêmia', 'Jardim Zaíra', 'Centro'],
  bairrosPopulares: ['Jardim Sônia Maria', 'Jardim Guapituba', 'Vila Assis Brasil', 'Zaíra'],

  parques: [
    {
      nome: 'Área de lazer do Jardim Guapituba',
      descricao:
        'Espaço revitalizado para lazer e esporte, com áreas para caminhada e atividades ao ar livre.',
    },
    {
      nome: 'Centros Municipais de Esporte e Cultura (CMECs)',
      descricao:
        'Rede de unidades com quadras e atividades esportivas distribuídas pela cidade, ampliando o acesso público ao treino.',
    },
    {
      nome: 'Ginásios e campos municipais',
      descricao:
        'Estrutura municipal com ginásios poliesportivos e campos distritais que sustentam o esporte comunitário.',
    },
  ],
  ciclovias:
    'A cidade tem trechos de estrutura cicloviária integrados à malha do ABC; a extensão total não é consolidada em fonte oficial.',

  clima:
    'O clima é subtropical de altitude do planalto paulista, com chuvas concentradas no verão; o relevo é acidentado, com vales sujeitos a alagamentos em chuvas fortes.',
  climaTreino:
    'O treino ao ar livre rende bem no inverno seco; no verão, atenção às chuvas. O relevo acidentado oferece bons percursos de subida para quem treina corrida.',

  mobilidade:
    'Mauá é integrada à Grande São Paulo e ao ABC, com ligação ferroviária pela CPTM (Linha 10) a Santo André e à capital, além de proximidade do Sistema Anchieta–Imigrantes.',

  corridas: [
    {
      nome: 'Calendário esportivo municipal',
      descricao:
        'A prefeitura oferta milhares de vagas gratuitas para a prática esportiva, com provas e atividades promovidas pela Secretaria de Esportes e Lazer.',
    },
    {
      nome: 'Provas de rua regionais do ABC',
      descricao:
        'Mauá participa do movimentado calendário de corridas do ABC paulista, com provas em cidades vizinhas e na própria cidade.',
    },
  ],
  culturaEsportiva:
    'Mauá tem cultura esportiva comunitária forte, ligada ao futebol de várzea, aos campos distritais e a uma ampla rede pública de equipamentos (CMECs, ginásios e estádio), que democratiza o acesso à atividade física.',
  academias:
    'A oferta é dominada por academias de bairro que atendem a população metalúrgica e trabalhadora, complementadas por unidades de rede de baixo custo, pela rede municipal de esportes e pelos espaços públicos de treino.',
  academiasProximas: [
    { nome: 'Smart Fit', detalhe: 'unidades no Centro (Av. Gov. Mário Covas Jr.) e na Av. Barão de Mauá' },
    { nome: 'Do Is Fit', detalhe: 'rede local com unidade no Jardim Zaíra' },
    { nome: 'CMECs e academias ao ar livre municipais', detalhe: 'gratuitos, distribuídos pelos bairros' },
  ],

  destaquesFitness: [
    'Rede municipal robusta de esportes (CMECs, ginásios e estádio).',
    'Vagas esportivas gratuitas ofertadas pela prefeitura.',
    'Perfil de cidade industrial, com demanda por academias de bairro e horários flexíveis.',
    'Relevo acidentado, que oferece percursos de subida para treino de corrida.',
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
    'Cidade industrial do ABC, Mauá tem uma demanda muito ligada à rotina de trabalho e uma forte rede pública de esporte. Um personal trainer ajuda a encaixar o treino no dia a dia — aproveitando os equipamentos municipais, as academias de bairro ou o formato online.',

  faqsExtra: [
    {
      pergunta: 'Quem trabalha em turnos na indústria consegue manter treino com personal em Mauá?',
      resposta:
        'Consegue — e esse é justamente o público que mais se beneficia do acompanhamento individual na cidade. Quem alterna escalas no Polo de Capuava ou na RECAP raramente se adapta ao horário fixo de aulas coletivas; com o personal, a sessão muda de horário junto com o turno, e o plano prevê versões curtas para as semanas mais pesadas. Nas trocas de escala, o treino do dia pode virar uma sessão em casa ou nos equipamentos públicos, sem quebrar a sequência.',
    },
    {
      pergunta: 'Onde o personal costuma atender em Mauá?',
      resposta:
        'Os pontos mais comuns são as academias — de unidades de rede no Centro e na Av. Barão de Mauá a academias de bairro em regiões como Jardim Zaíra —, o atendimento em casa e os espaços públicos: os CMECs e as áreas de lazer dos bairros permitem treino funcional gratuito com material portátil. O relevo acidentado da cidade ainda rende treinos de subida para quem corre, aproveitando as próprias ladeiras do bairro.',
    },
    {
      pergunta: 'Há acompanhamento em Mauá para quem sente dores ou tem limitações?',
      resposta:
        'Há. O Montinho Personal, destacado pelo portal, tem formação complementar no treinamento de pessoas com dores e limitações musculoesqueléticas — e conhece essas barreiras pela própria vivência na musculação. Para o ABC, o formato mais prático é o acompanhamento online, com treino adaptado à estrutura disponível e ajustes contínuos; o atendimento presencial pode ser avaliado conforme agenda e local, a partir da base na região de Alphaville. O trabalho é progressivo e sem promessa de cura — quadros clínicos pedem também médico ou fisioterapeuta.',
    },
  ],

  vizinhas: ['santo-andre-sp', 'sao-bernardo-do-campo-sp', 'sao-paulo-sp'],

  fontes: [
    { nome: 'IBGE Cidades — Mauá', url: 'https://cidades.ibge.gov.br/brasil/sp/maua/panorama' },
    { nome: 'Prefeitura de Mauá', url: 'https://www.maua.sp.gov.br/' },
    { nome: 'Atlas Brasil — IDHM', url: 'https://www.atlasbrasil.org.br/' },
  ],
  atualizadoEm: '2026-07-30',
  capaArte: {
    src: '/capas-cidade/maua-sp.webp',
    w: 1200,
    h: 849,
    alt:
      'Personal trainer em Mauá (SP) em arte com referências reais da cidade — a estação Mauá da CPTM, o Paço Municipal, o Parque da Gruta Santa Luzia e o mapa do ABC paulista — Personal por Perto',
    legenda:
      'Treino personalizado em Mauá: um plano feito para o seu corpo e a sua rotina, com acompanhamento profissional na cidade e região.',
  },
};
