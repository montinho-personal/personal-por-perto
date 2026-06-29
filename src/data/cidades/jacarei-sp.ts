import type { Cidade } from '../../lib/types';

export const cidade: Cidade = {
  slug: 'jacarei-sp',
  nome: 'Jacareí',
  uf: 'SP',
  estado: 'São Paulo',
  estadoSlug: 'sao-paulo',
  regiao: 'Sudeste',
  gentilico: 'jacareiense',
  tipo: 'cidade',

  populacao: 240275,
  populacaoAno: 2022,
  idhm: 0.777,
  idhmClasse: 'alto',
  altitudeM: 580,

  resumoEconomico:
    'Cidade do Vale do Paraíba, Jacareí tem forte parque industrial ao longo da Via Dutra (química, vidro, metalurgia e papel/celulose). Vizinha imediata de São José dos Campos, integra um dos eixos industriais mais dinâmicos do estado.',

  mercado:
    'O mercado fitness está em crescimento, impulsionado pela classe média ligada às indústrias do Vale do Paraíba; a recente retomada do calendário de corridas de rua pela prefeitura tende a aquecer a demanda por treino e assessorias.',

  bairrosNobres: ['Villa Branca', 'Jardim Califórnia', 'Jardim Santa Maria', 'Cidade Jardim'],
  bairrosPopulares: ['Jardim Paraíba', 'Cidade Salvador', 'Jardim do Vale', 'Parque Meia Lua'],

  parques: [
    {
      nome: 'Parque dos Eucaliptos',
      descricao:
        'Cerca de 28 mil m² com academia ao ar livre, pista de caminhada, pista de skate, lago e palco, aberto das 6h às 20h.',
    },
    {
      nome: 'Parque da Cidade',
      descricao:
        'Tem pista de caminhada, ciclovia, academia ao ar livre e áreas de descanso paisagísticas.',
    },
    {
      nome: 'Academias ao Ar Livre',
      descricao:
        'Programa municipal com equipamentos de ginástica distribuídos em diversos pontos, incluindo os parques da Cidade e dos Eucaliptos.',
    },
  ],
  ciclovias:
    'A cidade implanta uma malha cicloviária de cerca de 22 km abrangendo vários bairros, além da ciclovia já existente no Parque da Cidade.',

  clima:
    'O clima é subtropical, com média anual em torno de 21,3 °C, sendo julho o mês mais frio e fevereiro o mais quente.',
  climaTreino:
    'O clima ameno favorece o treino ao ar livre quase o ano todo; o verão úmido pede hidratação reforçada nos horários de pico.',

  mobilidade:
    'Jacareí é cortada pela Rodovia Presidente Dutra (BR-116), eixo Rio–São Paulo, com acesso direto a São José dos Campos e à capital.',

  corridas: [
    {
      nome: 'Corrida e Caminhada da Saúde',
      descricao:
        'Realizada em torno do Parque da Cidade, parte do calendário esportivo municipal.',
    },
    {
      nome: 'Circuito do Bem-Estar: Corrida Noturna',
      descricao:
        'Corrida noturna que marca a retomada do calendário oficial de corridas, com várias distâncias e provas kids.',
    },
  ],
  culturaEsportiva:
    'O esporte municipal vive uma fase de reativação: a prefeitura retomou o calendário completo de corridas de rua após anos de hiato, com forte estrutura de parques públicos e academias ao ar livre.',
  academias:
    'A oferta de academias está em crescimento, complementada por parques públicos com academia ao ar livre e pela proximidade do polo de São José dos Campos.',

  destaquesFitness: [
    'Retomada do calendário oficial de corridas de rua, com distâncias de 3 a 10 km e provas kids.',
    'Malha cicloviária em expansão (cerca de 22 km projetados).',
    'Parques públicos com academia ao ar livre e pistas (Eucaliptos e Parque da Cidade).',
    'Proximidade do polo São José dos Campos, com público qualificado.',
  ],

  precos: {
    avulsaMin: 70,
    avulsaMax: 170,
    mensalMin: 360,
    mensalMax: 960,
    onlineMin: 180,
    onlineMax: 450,
  },

  conclusao:
    'Cidade industrial do Vale do Paraíba, Jacareí retomou sua cena de corrida e tem boa estrutura de parques. Um personal trainer ajuda a aproveitar o Parque dos Eucaliptos e o Parque da Cidade com método, num clima ameno boa parte do ano.',

  vizinhas: ['sao-jose-dos-campos-sp', 'taubate-sp'],

  fontes: [
    { nome: 'IBGE Cidades — Jacareí', url: 'https://cidades.ibge.gov.br/brasil/sp/jacarei/panorama' },
    { nome: 'Prefeitura de Jacareí', url: 'https://www.jacarei.sp.gov.br/' },
    { nome: 'Atlas Brasil — IDHM', url: 'https://www.atlasbrasil.org.br/' },
  ],
  atualizadoEm: '2026-06-29',
};
