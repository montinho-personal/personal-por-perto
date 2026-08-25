import type { Cidade } from '../../lib/types';

export const cidade: Cidade = {
  slug: 'taboao-da-serra-sp',
  nome: 'Taboão da Serra',
  uf: 'SP',
  estado: 'São Paulo',
  estadoSlug: 'sao-paulo',
  regiao: 'Sudeste',
  gentilico: 'taboanense',
  tipo: 'cidade',

  populacao: 273542,
  populacaoAno: 2022,
  idhm: 0.769,
  idhmClasse: 'alto',
  altitudeM: 747,

  resumoEconomico:
    'Integrante da Região Metropolitana de São Paulo, no vetor sudoeste e totalmente conurbada à capital, Taboão da Serra tem a maior densidade demográfica do Brasil. A economia é dominada por serviços e comércio, com indústria nos setores farmacêutico, de alimentos e tecnologia, e o Shopping Taboão como motor comercial regional.',

  mercado:
    'O mercado de personal trainer em Taboão da Serra é movido pela escala: é a cidade mais densa do Brasil, totalmente conurbada à capital, com um volume enorme de potenciais alunos por quilômetro quadrado. A rotina pendular pela Régis Bittencourt concentra a procura nas primeiras horas da manhã e no fim do dia, com treinos objetivos de 45 a 60 minutos. A oferta acompanha: muitas academias de bairro e de rede, estúdios menores e parques com academia ao ar livre — o que permite ao personal montar o atendimento em domicílio, na academia do cliente ou ao ar livre, com deslocamentos curtos entre um aluno e outro. O relevo de morros ainda rende treinos de subida que aproveitam a própria geografia da cidade.',

  bairrosNobres: ['Parque Pinheiros', 'Jardim Salete', 'Arraial Paulista', 'Jardim Record'],
  bairrosPopulares: ['Jardim Saira', 'Vila Mafalda', 'Jardim Scandia', 'Ponte Alta'],

  parques: [
    {
      nome: 'Parque das Hortênsias Armando Andrade',
      descricao:
        'Tem pistas de caminhada e corrida e playground, sendo sede de corridas de rua.',
    },
    {
      nome: 'Parque Francisco Rizzo',
      descricao:
        'Tem academia, pistas de cooper e equipamentos de ginástica ao ar livre.',
    },
    {
      nome: 'Parque Linear Ponte Alta',
      descricao:
        'Tem quadra, ciclovia, pista de caminhada, equipamentos de ginástica e bosque.',
    },
  ],
  ciclovias:
    'Há ciclovia no Parque Linear Ponte Alta; a extensão da malha cicloviária urbana ainda não é divulgada em fonte oficial.',

  clima:
    'O clima é tropical de altitude da Grande São Paulo, com inverno mais seco e ameno e verão quente e chuvoso.',
  climaTreino:
    'O treino ao ar livre é viável o ano todo, e a topografia acidentada (morros) favorece treinos de subida.',

  mobilidade:
    'Taboão da Serra é cortada pela Rodovia Régis Bittencourt (BR-116), com proximidade do Rodoanel, da Raposo Tavares e da Marginal Pinheiros, em forte integração viária com a capital.',

  corridas: [
    {
      nome: 'Taboão da Serra Run',
      descricao:
        'Com mais de mil participantes, tem provas de 10 km, 5 km e caminhada, com largada no Parque das Hortênsias.',
    },
    {
      nome: 'Corrida da Folia de Taboão da Serra',
      descricao:
        'Corrida de rua tradicional do calendário local, ao lado de provas temáticas.',
    },
  ],
  culturaEsportiva:
    'O município se afirma como referência em corrida de rua, com eventos que percorrem pontos icônicos da cidade e forte adesão de assessorias e grupos de corrida, apesar da densidade urbana extrema.',
  academias:
    'A oferta é de altíssimo volume, com muitas academias de bairro e estúdios, complementada por parques com academia ao ar livre e pistas de cooper.',
  academiasProximas: [
    { nome: 'Smart Fit', detalhe: 'unidades no Shopping Taboão, no Largo do Taboão e no Taboão Outlet' },
    { nome: 'Bluefit Taboão da Serra', detalhe: 'unidade da rede de baixo custo na cidade' },
    {
      nome: 'Academias ao ar livre municipais',
      detalhe: 'gratuitas, nos parques das Hortênsias, Francisco Rizzo e Linear Ponte Alta',
    },
  ],

  destaquesFitness: [
    'Mercado de altíssimo volume, pela maior densidade demográfica do país.',
    'Cena consolidada de corrida de rua (Taboão da Serra Run e provas temáticas).',
    'Parques com academia ao ar livre e pistas de cooper (Hortênsias e Rizzo).',
    'Relevo de morros e proximidade da capital, que ampliam opções de treino e clientela.',
  ],

  precos: {
    avulsaMin: 70,
    avulsaMax: 170,
    mensalMin: 350,
    mensalMax: 950,
    onlineMin: 170,
    onlineMax: 440,
  },

  conclusao:
    'Cidade de maior densidade do Brasil e colada à capital, Taboão da Serra tem mercado de escala e cena de corrida forte. Um personal trainer encontra aqui uma base imensa de alunos por km², com parques e relevo de morros para variar o treino.',

  faqsExtra: [
    {
      pergunta: 'Onde dá para treinar com personal em Taboão da Serra?',
      resposta:
        'A cidade oferece três frentes: as academias — incluindo unidades de rede como as do Shopping Taboão e do Largo do Taboão —, o atendimento em casa (a densidade altíssima torna os deslocamentos do profissional muito curtos) e os parques públicos: Hortênsias, Francisco Rizzo e Linear Ponte Alta têm pista de cooper e equipamentos de ginástica gratuitos. O relevo de morros ainda permite treinos de subida sem sair do bairro.',
    },
    {
      pergunta: 'Como o personal encaixa o treino na rotina de quem trabalha na capital?',
      resposta:
        'A maioria treina antes de pegar a Régis Bittencourt rumo a São Paulo ou no fim do dia, na volta. Sessões de 45 a 60 minutos, cedo ou à noite, são o formato mais pedido — e o personal costuma deixar um plano B para fazer em casa nos dias em que o trânsito desmonta o horário. O acompanhamento online completa a semana de quem tem agenda imprevisível.',
    },
    {
      pergunta: 'Há acompanhamento em Taboão da Serra para quem sente dores ou tem limitações?',
      resposta:
        'Há. O Montinho Personal, destacado pelo portal, tem cursos voltados ao treinamento de pessoas com dores e limitações musculoesqueléticas, além da vivência prática de quem já treinou com desconforto. Da base na região de Alphaville, na Grande São Paulo, o atendimento presencial em Taboão da Serra pode ser combinado conforme agenda e local — e o online cobre qualquer rotina. O trabalho é gradual e seguro, sem promessa de cura, e não substitui médico ou fisioterapeuta em quadros clínicos.',
    },
  ],

  vizinhas: ['sao-paulo-sp', 'osasco-sp'],

  capaArte: {
    src: '/capas-cidade/taboao-da-serra-sp.webp',
    w: 1200,
    h: 900,
    alt: 'Personal trainer em Taboão da Serra (SP) em arte que reúne a Praça Nicola Vivilechio, o Parque das Hortênsias e o Santuário Santa Terezinha — Personal por Perto',
    legenda: 'Treino personalizado em Taboão da Serra: um plano feito para o seu corpo e a sua rotina, do Centro ao Parque Pinheiros, com acompanhamento profissional.',
  },
  fontes: [
    { nome: 'IBGE Cidades — Taboão da Serra', url: 'https://cidades.ibge.gov.br/brasil/sp/taboao-da-serra/panorama' },
    { nome: 'Prefeitura de Taboão da Serra', url: 'https://www.ts.sp.gov.br/' },
    { nome: 'Atlas Brasil — IDHM', url: 'https://www.atlasbrasil.org.br/' },
  ],
  fotoCorpo: {
    src: '/montinho/taboao-da-serra-sp-foto.webp',
    alt: 'Montinho Personal sem camisa, de bermuda estampada, em selfie de corpo inteiro no espelho da academia — personal trainer destacado pelo portal para quem treina em Taboão da Serra',
    legenda:
      'Físico construído com mais de 20 anos de musculação: o Montinho Personal, destacado pelo portal, é referência para quem treina em Taboão da Serra.',
    w: 901,
    h: 1600,
  },
  atualizadoEm: '2026-08-25',
};
