import type { Cidade } from '../../lib/types';

export const cidade: Cidade = {
  slug: 'barueri-sp',
  nome: 'Barueri',
  uf: 'SP',
  estado: 'São Paulo',
  estadoSlug: 'sao-paulo',
  regiao: 'Sudeste',
  gentilico: 'barueriense',

  populacao: 316473,
  populacaoAno: 2022,
  idhm: 0.786,
  idhmClasse: 'alto',
  altitudeM: 680,

  resumoEconomico:
    'Barueri é um dos maiores polos corporativos do país. O distrito de Alphaville/Tamboré concentra sedes de grandes empresas e centros empresariais, e o município tem um dos maiores PIBs per capita do estado (R$ 226.391 em 2023, 9º maior de São Paulo). Essa concentração de executivos cria uma demanda forte e específica: treino corporativo, atendimento em condomínios de alto padrão e horários encaixados antes ou depois do expediente.',

  mercado:
    'O mercado de personal trainer em Barueri tem duas faces. No distrito de Alphaville e Tamboré, a procura é pelo atendimento exclusivo em condomínio ou em casa, com o perfil executivo buscando emagrecimento, condicionamento e alívio de dores posturais da rotina de escritório. Nos bairros como Centro, Jardim Silveira e Engenho Novo, o treino acontece mais em academias de bairro e nos parques públicos — com o Parque Linear aberto 24 horas servindo até quem só tem horário muito cedo ou tarde da noite. Barueri está na área de atendimento presencial do Montinho Personal, o profissional destacado pelo portal, com base em Alphaville.',

  bairrosNobres: ['Alphaville', 'Tamboré', 'Aldeia da Serra'],
  bairrosPopulares: ['Centro', 'Jardim Silveira', 'Engenho Novo', 'Vila Boa Vista', 'Cruz Preta'],

  parques: [
    {
      nome: 'Parque Municipal Dom José',
      descricao:
        'Com cerca de 95 mil m², tem pista de caminhada, quadras e pista de skate, além de aulas de tai chi chuan, yoga e ginástica. Funciona de segunda a sábado das 6h às 21h e aos domingos e feriados das 6h às 20h.',
    },
    {
      nome: 'Parque Linear (margens do Rio Tietê)',
      descricao:
        'No Jardim dos Camargos, reúne pista de caminhada, ciclovia e praças de ginástica, com iluminação em LED, segurança monitorada e Wi-Fi gratuito. Aberto 24 horas, é uma boa opção para quem treina muito cedo ou à noite.',
    },
    {
      nome: 'Parque da Juventude',
      descricao:
        'Mais um dos cinco parques municipais da cidade, com espaços para prática esportiva e lazer ativo.',
    },
  ],
  ciclovias:
    'O Parque Linear às margens do Tietê oferece ciclovia integrada à pista de caminhada e às praças de ginástica; em Alphaville, há uma comunidade ativa de corrida e pedal de rua, ainda que o acesso ao distrito seja predominantemente por carro.',

  clima:
    'O clima é quente e temperado, do tipo tropical de altitude, com média anual em torno de 19,5 °C e precipitação de cerca de 1.385 mm por ano — com pico de chuvas em janeiro (cerca de 235 mm).',
  climaTreino:
    'Por causa do verão chuvoso, o treino ao ar livre rende mais nas manhãs. O Parque Linear aberto 24h é um recurso valioso para a rotina apertada de quem trabalha em Alphaville e Tamboré.',

  mobilidade:
    'A CPTM Linha 8-Diamante (ViaMobilidade) atende a cidade com quatro estações, incluindo a Estação Barueri, que movimenta cerca de 20,9 mil passageiros por dia útil. Importante: Alphaville não tem atendimento direto por trem — o acesso ao distrito é por carro ou ônibus, o que reforça o valor do personal que vai até o cliente.',

  corridas: [
    {
      nome: 'Corrida São Silveira',
      descricao:
        'Prova tradicional da Prefeitura, com percursos de 8 km e 4 km e inscrição gratuita. A 49ª edição, em dezembro de 2025, reuniu mais de 3.500 participantes.',
    },
    {
      nome: 'Summer Run Barueri Alphaville',
      descricao:
        'Corrida de 6 km pelas vias de Alphaville, que reflete a cena de corrida amadora ativa no distrito corporativo.',
    },
  ],
  culturaEsportiva:
    'Barueri tem infraestrutura esportiva de grande porte — a Arena Barueri (mais de 31 mil lugares) e o Ginásio Poliesportivo José Corrêa, que já sediou Mundiais de basquete e handebol feminino e eventos do UFC. No dia a dia, a cultura de corrida e wellness é forte, puxada pelo público de alta renda de Alphaville e Tamboré.',
  academias:
    'A demanda por personal training e wellness corporativo é alta, dada a renda e o perfil executivo de Alphaville e Tamboré. Condomínios de alto padrão frequentemente contam com estrutura própria de treino, o que valoriza o atendimento individual e personalizado.',
  academiasProximas: [
    { nome: 'Smart Fit', detalhe: 'unidades no Centro, na Av. Zélia e no Parque Shopping Barueri' },
    { nome: 'Bluefit', detalhe: 'unidades em Bethaville e no Tamboré' },
    { nome: 'Academias de condomínio', detalhe: 'estrutura própria nos residenciais de Alphaville, Tamboré e Aldeia da Serra' },
    { nome: 'Praças de ginástica do Parque Linear', detalhe: 'gratuitas e abertas 24 horas, às margens do Tietê' },
  ],

  destaquesFitness: [
    'Um dos maiores PIBs per capita do estado e público executivo de alta renda.',
    'Parque Linear com ciclovia e academia ao ar livre aberto 24 horas.',
    'Aulas públicas gratuitas de yoga, tai chi e ginástica no Parque Dom José.',
    'Calendário consolidado de corridas (São Silveira e Summer Run Alphaville).',
  ],

  precos: {
    avulsaMin: 90,
    avulsaMax: 220,
    mensalMin: 450,
    mensalMax: 1300,
    onlineMin: 200,
    onlineMax: 500,
  },

  faqsExtra: [
    {
      pergunta: 'O personal atende tanto em Alphaville quanto nos bairros centrais de Barueri?',
      resposta:
        'Sim. Em Alphaville e Tamboré, o formato mais comum é o atendimento dentro do condomínio ou em casa; nos bairros centrais, o treino costuma acontecer em academias ou nos parques públicos, como o Parque Municipal Dom José e o Parque Linear. Como as distâncias dentro do município são curtas, um mesmo profissional consegue cobrir os dois contextos — é o caso do Montinho Personal, destacado pelo portal, com base na região.',
    },
    {
      pergunta: 'Posso treinar com personal nos parques públicos de Barueri?',
      resposta:
        'Pode — e é uma opção econômica e agradável. O Parque Linear, às margens do Tietê, funciona 24 horas com pista, ciclovia e praças de ginástica, e o Parque Dom José tem pista de caminhada e quadras. São bons cenários para treino funcional, corrida orientada e circuitos com peso do corpo, com o personal levando o material necessário.',
    },
    {
      pergunta: 'Quais objetivos são mais comuns entre quem contrata personal em Barueri?',
      resposta:
        'No público executivo de Alphaville e Tamboré, predominam emagrecimento, condicionamento físico e correção de dores e postura ligadas ao trabalho sentado. Nos demais bairros, a procura se distribui entre saúde geral, ganho de força e qualidade de vida — incluindo quem está começando do zero e quer orientação para não se machucar.',
    },
    {
      pergunta: 'Há atendimento para quem sente dores ou tem limitações físicas?',
      resposta:
        'Há. O Montinho Personal, destacado pelo portal na região, tem cursos voltados ao treinamento de pessoas com dores e limitações musculoesqueléticas, além da experiência prática de quem já conviveu com dores comuns da musculação. O trabalho é individualizado e progressivo, com foco em segurança — e não substitui acompanhamento médico ou fisioterapêutico quando há um quadro clínico.',
    },
  ],

  vizinhas: ['alphaville-sp', 'tambore-sp', 'santana-de-parnaiba-sp', 'osasco-sp'],

  fontes: [
    { nome: 'IBGE Cidades — Barueri', url: 'https://cidades.ibge.gov.br/brasil/sp/barueri/panorama' },
    { nome: 'Prefeitura de Barueri', url: 'https://www.barueri.sp.gov.br/' },
  ],
  capaArte: {
    src: '/capas-cidade/barueri-sp.webp',
    alt:
      'Montinho Personal, personal trainer em Barueri (SP), de braços cruzados com o skyline corporativo da região ao fundo — Personal por Perto',
    legenda:
      'Treino personalizado em Barueri com o Montinho Personal: acompanhamento próximo, exclusivo e feito para o seu objetivo.',
  },
  atualizadoEm: '2026-07-27',
};
