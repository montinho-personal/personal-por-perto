import type { Cidade } from '../../lib/types';

export const cidade: Cidade = {
  slug: 'franca-sp',
  nome: 'Franca',
  uf: 'SP',
  estado: 'São Paulo',
  estadoSlug: 'sao-paulo',
  regiao: 'Sudeste',
  gentilico: 'francano',
  tipo: 'cidade',

  populacao: 352536,
  populacaoAno: 2022,
  idhm: 0.780,
  idhmClasse: 'alto',
  altitudeM: 1040,

  resumoEconomico:
    'Capital nacional do calçado masculino, Franca produz dezenas de milhões de pares por ano — cerca de um a cada três sapatos masculinos do Brasil. Tem forte tradição também no café e, no nordeste paulista, é referência industrial e em qualidade de vida do interior, em uma das maiores altitudes do estado.',

  mercado:
    'O mercado fitness regional é de porte médio-grande, ancorado na forte cultura esportiva da cidade (potência do basquete) e em um calendário de corridas, com academias, estúdios e personal trainers atendendo o nordeste paulista.',

  bairrosNobres: ['City Petrópolis', 'Centro', 'Jardim Noêmia', 'Jardim França'],
  bairrosPopulares: ['Jardim Aeroporto', 'Parque dos Pinhais', 'Parque dos Trabalhadores', 'Vila Aparecida'],

  parques: [
    {
      nome: 'Parque de Exposições Fernando Costa',
      descricao:
        'Inaugurado em 1953, tem cerca de dez hectares com pistas de caminhada e corrida e duas academias ao ar livre — além de sediar os grandes eventos da cidade, como a Expoagro.',
    },
    {
      nome: 'Complexo Poliesportivo (Pedrocão)',
      descricao:
        'No Residencial Paraíso, abriga o ginásio do Sesi Franca Basquete e espaços abertos para caminhada e esporte — o coração esportivo da cidade.',
    },
    {
      nome: 'Jardim Zoobotânico',
      descricao:
        'No City Petrópolis, tem pista de caminhada pavimentada de cerca de 1,3 km em meio à vegetação nativa.',
    },
    {
      nome: 'Parque dos Trabalhadores',
      descricao:
        'No Parque dos Pinhais, tem trilhas sobre mata nativa com mais de 6 km de extensão e reservatório.',
    },
  ],
  ciclovias:
    'A extensão da malha cicloviária urbana ainda não é divulgada em fonte oficial.',

  clima:
    'O clima é tropical de altitude, com verões chuvosos e invernos secos e amenos, média anual em torno de 21 °C.',
  climaTreino:
    'O inverno seco é ótimo para o treino e a caminhada ao ar livre; a altitude (cerca de 1.040 m) eleva a demanda cardiorrespiratória, útil para o condicionamento.',

  mobilidade:
    'O acesso principal é pela Rodovia Cândido Portinari (SP-334), que liga a Ribeirão Preto e aos polos industriais paulistas; a capital fica a cerca de 400 km.',

  corridas: [
    {
      nome: 'SESI Franca Basquete Night Run',
      descricao:
        'Corrida noturna com provas de 4 km e 8 km e caminhada de 4 km, encerrada com show.',
    },
    {
      nome: 'Corridas do SESI Franca',
      descricao:
        'Calendário esportivo recorrente da unidade local, parte da cena de corrida da cidade.',
    },
  ],
  culturaEsportiva:
    'Franca é potência nacional do basquete — sede do Sesi Franca Basquete, um dos maiores clubes do país e disputante do NBB —, e o esporte é um elemento identitário que movimenta a cultura local.',
  academias:
    'A oferta reúne academias, estúdios e personal trainers, complementada por parques com academia ao ar livre e trilhas longas como a do Parque dos Trabalhadores.',

  academiasProximas: [
    { nome: 'Smart Fit Franca', detalhe: 'na Av. Dr. Ismael Alonso y Alonso, no Jardim Veneza' },
    { nome: 'Smart Fit Franca II', detalhe: 'na Rua São Paulo, na Vila Aparecida' },
    { nome: 'Panobianco Estação', detalhe: 'na Rua Frei Germano, na Estação' },
    { nome: 'Bluefit Franca', detalhe: 'na Av. Alonso y Alonso, no Centro' },
    { nome: 'Bluefit Franca Estação', detalhe: 'na Av. Rio Branco, na Estação' },
  ],

  destaquesFitness: [
    'Capital do basquete brasileiro (Sesi Franca) — cultura esportiva forte.',
    'Altitude de cerca de 1.040 m, atrativa para treino de resistência.',
    'Parques com academia ao ar livre e trilhas longas (mais de 6 km).',
    'Inverno seco e ameno, ideal para corrida e treino outdoor.',
  ],

  precos: {
    avulsaMin: 65,
    avulsaMax: 160,
    mensalMin: 350,
    mensalMax: 940,
    onlineMin: 170,
    onlineMax: 430,
  },

  conclusao:
    'Capital do calçado e potência do basquete, Franca tem altitude favorável e forte cultura esportiva. Um personal trainer ajuda a aproveitar o Jardim Zoobotânico e o Parque dos Trabalhadores com método, tirando partido do clima seco de altitude.',

  vizinhas: ['ribeirao-preto-sp', 'batatais-sp'],

  fontes: [
    { nome: 'IBGE Cidades — Franca', url: 'https://cidades.ibge.gov.br/brasil/sp/franca/panorama' },
    { nome: 'Prefeitura de Franca', url: 'https://www.franca.sp.gov.br/' },
    { nome: 'Atlas Brasil — IDHM', url: 'https://www.atlasbrasil.org.br/' },
  ],
  atualizadoEm: '2026-08-27',


  faqsExtra: [
    {
      pergunta: 'Existe preparo físico para basquete amador em Franca?',
      resposta:
        'É uma demanda natural na capital do basquete: força de pernas e core, salto, mudança de direção e prevenção de tornozelo e joelho. Personals com vivência de quadra montam esse trabalho em paralelo aos treinos técnicos — e a base de musculação vale para qualquer nível, do recreativo ao federado.',
    },
    {
      pergunta: 'A altitude de Franca ajuda no condicionamento?',
      resposta:
        'Os cerca de 1.040 m elevam levemente a demanda cardiorrespiratória do treino — quem chega do litoral sente os primeiros dias. Para o morador, o efeito prático é um condicionamento que rende quando se corre em cidades mais baixas. O inverno seco e ameno completa um cenário raro no interior paulista para treinar ao ar livre.',
    },
    {
      pergunta: 'Onde treinar ao ar livre em Franca?',
      resposta:
        'O circuito clássico: pista de 1,3 km do Jardim Zoobotânico para rodagem leve, trilhas de mais de 6 km do Parque dos Trabalhadores para volume, e as pistas e academias ao ar livre do Parque Fernando Costa. Personals costumam alternar esses espaços com sessões de força em academia.',
    },
  ],

  capaArte: {
    src: '/capas-cidade/franca-sp.webp',
    w: 1200,
    h: 800,
    alt:
      'Personal trainer em Franca (SP) em arte que reúne corrida urbana, a catedral e o horizonte da cidade com seu lago de lazer — Personal por Perto',
    legenda:
      'Treino personalizado em Franca: um plano feito para o seu corpo e a sua rotina, com acompanhamento profissional na cidade e região.',
  },
};
