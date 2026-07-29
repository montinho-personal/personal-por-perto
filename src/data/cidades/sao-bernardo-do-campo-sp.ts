import type { Cidade } from '../../lib/types';

export const cidade: Cidade = {
  slug: 'sao-bernardo-do-campo-sp',
  nome: 'São Bernardo do Campo',
  uf: 'SP',
  estado: 'São Paulo',
  estadoSlug: 'sao-paulo',
  regiao: 'Sudeste',
  gentilico: 'são-bernardense',
  tipo: 'cidade',

  populacao: 810729,
  populacaoAno: 2022,
  idhm: 0.805,
  idhmClasse: 'muito alto',
  altitudeM: 764,

  resumoEconomico:
    'Coração do ABC paulista, São Bernardo do Campo é o maior polo automotivo da América Latina, sede histórica de montadoras como Volkswagen, Ford, Scania e Mercedes-Benz. Tem um dos maiores PIBs do estado e também é forte em móveis e produtos químicos. A tradição operária e o alto contingente de trabalhadores moldam uma demanda particular por treino — encaixado nos turnos e na rotina.',

  mercado:
    'Cidade densa e de boa renda industrial, São Bernardo tem forte presença de academias em bairros como Centro, Rudge Ramos e Jardim do Mar. A Meia Maratona local mobiliza academias e assessorias esportivas, e a cidade conta com 12 pistas oficiais de corrida e caminhada em parques e praças, ampliando o acesso ao treino.',

  bairrosNobres: ['Nova Petrópolis', 'Jardim do Mar', 'Rudge Ramos', 'Baeta Neves'],
  bairrosPopulares: ['Alvarenga', 'Montanhão', 'Ferrazópolis', 'Demarchi'],

  parques: [
    {
      nome: 'Parque Chácara Silvestre',
      descricao:
        'Com mais de 86 mil m² em Nova Petrópolis, tem pista de caminhada, circuito de trilha de cerca de 900 m, ciclovia interna e academia ao ar livre; aberto das 6h às 20h.',
    },
    {
      nome: 'Parque Natural Municipal Estoril',
      descricao:
        'Na Estrada Velha de Santos, oferece trilhas e muita área verde — a primeira unidade de conservação do município, boa para caminhada em meio à natureza.',
    },
    {
      nome: 'Parque das Bicicletas (Giacinto Tognato)',
      descricao:
        'Espaço central voltado a ciclismo e lazer; a cidade soma 12 pistas oficiais para corrida e caminhada em parques e praças.',
    },
  ],
  ciclovias:
    'São Bernardo tem cerca de 12 km de ciclovias e ciclofaixas, além de corredores e pistas dedicadas em parques, com destaque para o Parque das Bicicletas.',

  clima:
    'O clima é subtropical úmido, com inverno mais frio e chuvas concentradas no verão.',
  climaTreino:
    'O treino ao ar livre é confortável boa parte do ano; no verão, vale atenção à umidade e às chuvas. Como a cidade é industrial e movimentada, treinar perto de casa ou em parques próximos economiza tempo no trânsito.',

  mobilidade:
    'A cidade é cortada pelas rodovias Anchieta e Imigrantes (eixo para o Porto de Santos e para a capital) e pelo Rodoanel, e opera o corredor de ônibus Anchieta–Imigrantes. O trânsito nas rodovias é um fator relevante no dia a dia.',

  corridas: [
    {
      nome: 'Meia Maratona Cidade de São Bernardo do Campo',
      descricao:
        'Prova tradicional, com percursos de 21 km, 10 km e 5 km, integrada às comemorações de aniversário da cidade.',
    },
    {
      nome: 'Circuitos de corrida de rua',
      descricao:
        'Calendário recorrente de provas de rua promovidas por assessorias e circuitos, com boa adesão local.',
    },
  ],
  culturaEsportiva:
    'A tradição esportiva de São Bernardo está ligada à indústria e ao operariado, com forte adesão à corrida de rua e uso intenso dos parques municipais para caminhada e treino. A Meia Maratona é o grande evento que engaja a comunidade fitness.',
  academias:
    'A oferta de academias é ampla e bem distribuída pelos bairros, complementada pelas 12 pistas públicas e pelas academias ao ar livre dos parques, atendendo desde o público operário até os bairros de maior renda.',
  academiasProximas: [
    { nome: 'Smart Fit', detalhe: 'várias unidades — Plaza Shopping, Shopping Metrópole, Rua João Pessoa, Vianas e Av. Taboão' },
    { nome: 'Bluefit', detalhe: 'unidades no Centro (Rua Marechal Deodoro) e no Demarchi' },
    { nome: 'Academia ao ar livre do Parque Chácara Silvestre', detalhe: 'gratuita, com pista de caminhada e trilha de ~900 m' },
  ],

  destaquesFitness: [
    'Maior polo automotivo da América Latina, com grande público corporativo e operário.',
    '12 pistas públicas oficiais de corrida e caminhada.',
    'Meia Maratona consolidada que engaja academias e assessorias.',
    'Parques estruturados (Chácara Silvestre, Estoril) com academia ao ar livre.',
  ],

  precos: {
    avulsaMin: 80,
    avulsaMax: 180,
    mensalMin: 400,
    mensalMax: 1100,
    onlineMin: 180,
    onlineMax: 460,
  },

  conclusao:
    'No coração do ABC, São Bernardo une tradição operária e boa estrutura esportiva. Um personal trainer ajuda a encaixar o treino na rotina industrial e a aproveitar as pistas e parques da cidade com método — da musculação à preparação para a Meia Maratona.',

  faqsExtra: [
    {
      pergunta: 'Como o personal encaixa o treino na rotina industrial de São Bernardo?',
      resposta:
        'A cidade vive de turnos — montadoras, autopeças e logística —, e o treino precisa acompanhar. É comum montar sessões no contraturno: manhã para quem entra à tarde, fim de tarde para quem sai cedo, e ajustes a cada virada de escala. Sessões objetivas de 45 a 60 minutos, perto de casa ou nos parques, funcionam melhor do que qualquer plano que dependa de atravessar a Anchieta no horário de pico.',
    },
    {
      pergunta: 'Dá para treinar para a Meia Maratona de São Bernardo com personal?',
      resposta:
        'Dá — e é uma das metas mais comuns da cidade. As 12 pistas públicas oficiais de corrida e caminhada permitem treinos de rodagem e intervalados sem custo, e o personal entra na periodização: distribuir volume, ritmo e força ao longo das semanas para chegar inteiro aos 21 km (ou começar pelos 5 km e 10 km da mesma prova). O trabalho de força em academia é o complemento que mais previne lesão em corredor iniciante.',
    },
    {
      pergunta: 'Há acompanhamento em São Bernardo para quem sente dores ou tem limitações?',
      resposta:
        'Há. O Montinho Personal, destacado pelo portal, tem cursos voltados ao treinamento de pessoas com dores e limitações musculoesqueléticas — queixa comum em quem faz trabalho físico na indústria — e a vivência de quem já treinou com desconforto. Para o ABC, o formato mais prático é o acompanhamento online, com treino adaptado e progressivo; o presencial pode ser avaliado conforme agenda e local, a partir da base na região de Alphaville. Sem promessa de cura: quadros clínicos pedem também médico ou fisioterapeuta.',
    },
  ],

  vizinhas: ['santo-andre-sp', 'sao-paulo-sp', 'santos-sp'],

  fontes: [
    { nome: 'IBGE Cidades — São Bernardo do Campo', url: 'https://cidades.ibge.gov.br/brasil/sp/sao-bernardo-do-campo/panorama' },
    { nome: 'Prefeitura de São Bernardo do Campo', url: 'https://www.saobernardo.sp.gov.br/' },
    { nome: 'Atlas Brasil — IDHM', url: 'https://www.atlasbrasil.org.br/' },
  ],
  atualizadoEm: '2026-07-29',
  capaArte: {
    src: '/capas-cidade/sao-bernardo-do-campo-sp.webp',
    w: 1200,
    h: 675,
    alt:
      'Personal trainer em São Bernardo do Campo (SP) em arte que une treino de força e a paisagem urbana real do ABC — vias expressas movimentadas, ponte estaiada e o horizonte de prédios da região — Personal por Perto',
    legenda:
      'Treino personalizado em São Bernardo do Campo: um plano feito para o seu corpo e a sua rotina, com acompanhamento profissional na cidade e região.',
  },
};
