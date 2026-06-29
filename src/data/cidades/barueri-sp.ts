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

  vizinhas: ['alphaville-sp', 'tambore-sp', 'santana-de-parnaiba-sp', 'osasco-sp'],

  fontes: [
    { nome: 'IBGE Cidades — Barueri', url: 'https://cidades.ibge.gov.br/brasil/sp/barueri/panorama' },
    { nome: 'Prefeitura de Barueri', url: 'https://www.barueri.sp.gov.br/' },
  ],
  atualizadoEm: '2026-06-28',
};
