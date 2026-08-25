import type { Cidade } from '../../lib/types';

export const cidade: Cidade = {
  slug: 'cotia-sp',
  nome: 'Cotia',
  uf: 'SP',
  estado: 'São Paulo',
  estadoSlug: 'sao-paulo',
  regiao: 'Sudeste',
  gentilico: 'cotiano',
  tipo: 'cidade',

  populacao: 274413,
  populacaoAno: 2022,
  idhm: 0.780,
  idhmClasse: 'alto',
  altitudeM: 853,

  resumoEconomico:
    'Integrante da Região Metropolitana de São Paulo, na zona oeste, Cotia tem economia industrial e logística robusta — foi eleita uma das melhores cidades para fazer negócios na indústria. A região da Granja Viana concentra boa parte da indústria e multinacionais, convivendo com um polo de alto padrão de varejo de luxo, shoppings e condomínios fechados.',

  mercado:
    'O mercado de personal trainer em Cotia tem duas velocidades. A Granja Viana puxa o segmento premium: condomínios fechados com academia própria, estúdios boutique e um público que valoriza atendimento exclusivo em casa ou no residencial, com forte cultura de corrida e bem-estar. No restante da cidade — do Centro a Caucaia do Alto —, predominam academias de bairro e um público mais amplo, que busca custo-benefício e proximidade. Para o profissional, isso significa dois posicionamentos possíveis na mesma cidade; para o cliente, significa que há oferta em praticamente todas as faixas de preço, do treino no condomínio ao acompanhamento online.',

  bairrosNobres: ['Granja Viana', 'Jardim da Glória', 'Parque Bahia', 'San Diego'],
  bairrosPopulares: ['Caucaia do Alto', 'Jardim Japão', 'Atalaia', 'Jardim Nomura'],

  parques: [
    {
      nome: 'Parque Teresa Maia',
      descricao:
        'Na Granja Viana, com cerca de 23 mil m²: academia ao ar livre, trilha, playground, lago e nascente, iluminado e com horário estendido.',
    },
    {
      nome: 'Parque Cemucam',
      descricao:
        'Grande área verde para caminhada e atividade ao ar livre.',
    },
    {
      nome: 'Praças e vias da Granja Viana',
      descricao:
        'O bairro de alto padrão tem ruas arborizadas e praças usadas para corrida e caminhada.',
    },
  ],
  ciclovias:
    'Está em implantação a ciclovia da Raposo Tavares (projeto Nova Raposo), com previsão de dezenas de quilômetros ao longo da rodovia; a malha urbana consolidada ainda não é divulgada.',

  clima:
    'O clima é tropical de altitude, ameno (planalto da zona oeste paulistana), com bastante área verde.',
  climaTreino:
    'O clima é confortável para o treino ao ar livre o ano todo, com atenção às manhãs frias de inverno e às chuvas de fim de tarde no verão.',

  mobilidade:
    'Cotia é servida pelas rodovias Raposo Tavares (SP-270) e Castello Branco (SP-280), a cerca de 30 a 40 minutos da capital.',

  corridas: [
    {
      nome: 'Track&Field Experience Running — Granja Viana',
      descricao:
        'Corrida de rua com percursos de 5 km e 10 km, com largada na Granja Viana.',
    },
    {
      nome: 'CEDIT Run (Movimente-se Cotia)',
      descricao:
        'Corrida de rua gratuita, com largada no CEDIT.',
    },
  ],
  culturaEsportiva:
    'A Granja Viana tem cultura ativa de corrida de rua e bem-estar (feiras, caminhadas e eventos), e o público de alto padrão valoriza wellness e treino ao ar livre.',
  academias:
    'A oferta combina um nicho premium na Granja Viana (estúdios e condomínios de alto padrão) com academias de bairro no restante da cidade, e parques como o Teresa Maia para o outdoor.',
  academiasProximas: [
    { nome: 'Smart Fit', detalhe: 'unidades na Granja Viana (km 21 e km 25 da Raposo) e na Vila Monte Serrat' },
    { nome: 'Bluefit Granja Viana', detalhe: 'duas unidades no bairro, na Av. São Camilo e na Estrada da Aldeia' },
    { nome: 'Estúdios boutique da Granja Viana', detalhe: 'treino personalizado e pequenos grupos no polo premium' },
    { nome: 'Academia ao ar livre do Parque Teresa Maia', detalhe: 'gratuita, na Granja Viana' },
  ],

  destaquesFitness: [
    'Granja Viana como nicho premium para personal trainers (estúdios e condomínios de alto padrão).',
    'Parque Teresa Maia com academia ao ar livre e trilha — ponto forte de treino outdoor.',
    'Calendário de corridas de rua consolidado (Track&Field, CEDIT Run).',
    'Clima ameno de planalto, favorável à atividade outdoor o ano todo.',
  ],

  precos: {
    avulsaMin: 80,
    avulsaMax: 190,
    mensalMin: 400,
    mensalMax: 1100,
    onlineMin: 190,
    onlineMax: 470,
  },

  conclusao:
    'Polo industrial e de alto padrão na Grande SP, Cotia tem na Granja Viana um mercado premium e o Parque Teresa Maia. Um personal trainer encontra aqui forte demanda por treino personalizado e wellness, num clima ameno de planalto.',

  faqsExtra: [
    {
      pergunta: 'O personal atende dentro dos condomínios da Granja Viana?',
      resposta:
        'Sim — na Granja Viana, o formato mais procurado é justamente o atendimento no condomínio: na academia do residencial, na área de lazer ou dentro de casa, com a privacidade e a flexibilidade de agenda que o público do bairro espera. Ruas arborizadas e espaços como o Parque Teresa Maia também permitem levar parte do treino para fora, quando o clima ajuda.',
    },
    {
      pergunta: 'O que muda entre treinar com personal na Granja Viana e no restante de Cotia?',
      resposta:
        'Muda o cenário e a faixa de preço, não a qualidade possível do trabalho. Na Granja Viana, predominam atendimento em condomínio, estúdios boutique e valores mais altos; no Centro e em bairros como Caucaia do Alto, o treino acontece mais em academias de bairro, com preços acessíveis. Os objetivos também variam: emagrecimento e wellness aparecem forte no público premium, enquanto saúde geral e ganho de força dominam nos bairros.',
    },
    {
      pergunta: 'Quem tem dores ou limitações consegue treinar com acompanhamento em Cotia?',
      resposta:
        'Consegue. O Montinho Personal, destacado pelo portal, tem cursos voltados ao treino de pessoas com dores e limitações musculoesqueléticas e a experiência de quem já enfrentou dores comuns da musculação. Com base na região de Alphaville, o atendimento presencial em Cotia — em especial na Granja Viana, pelo eixo Castello Branco/Raposo — pode ser combinado conforme agenda e local, além do online. O trabalho é gradual e seguro, sem promessa de cura, e não substitui médico ou fisioterapeuta em quadros clínicos.',
    },
  ],

  vizinhas: ['sao-paulo-sp', 'osasco-sp'],

  capaArte: {
    src: '/capas-cidade/cotia-sp.webp',
    w: 1200,
    h: 900,
    alt: 'Personal trainer em Cotia (SP) em arte que reúne o Templo Zu Lai, o verde da Granja Viana e o Pátio Cotia — Personal por Perto',
    legenda: 'Treino personalizado em Cotia: um plano feito para o seu corpo e a sua rotina, do Centro à Granja Viana, com acompanhamento profissional.',
  },
  fontes: [
    { nome: 'IBGE Cidades — Cotia', url: 'https://cidades.ibge.gov.br/brasil/sp/cotia/panorama' },
    { nome: 'Prefeitura de Cotia', url: 'https://www.cotia.sp.gov.br/' },
    { nome: 'Atlas Brasil — IDHM', url: 'https://www.atlasbrasil.org.br/' },
  ],
  fotoCorpo: {
    src: '/montinho/cotia-sp-foto.webp',
    alt: 'Montinho Personal de costas em pose de duplo bíceps diante do espelho da academia, mostrando as costas e os ombros definidos — personal trainer destacado pelo portal para quem treina em Cotia',
    legenda:
      'Mais de 20 anos de musculação nas costas — literalmente: o Montinho Personal, profissional destacado pelo portal para quem treina em Cotia e na Granja Viana.',
    w: 739,
    h: 1600,
  },
  atualizadoEm: '2026-08-25',
};
