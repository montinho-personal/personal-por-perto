import type { Cidade } from '../../lib/types';

export const cidade: Cidade = {
  slug: 'presidente-prudente-sp',
  nome: 'Presidente Prudente',
  uf: 'SP',
  estado: 'São Paulo',
  estadoSlug: 'sao-paulo',
  regiao: 'Sudeste',
  gentilico: 'prudentino',
  tipo: 'cidade',

  populacao: 225668,
  populacaoAno: 2022,
  idhm: 0.806,
  idhmClasse: 'muito alto',
  altitudeM: 475,

  resumoEconomico:
    'Principal polo de serviços e centro regional do oeste paulista (Pontal do Paranapanema), a cerca de 560 km da capital, Presidente Prudente tem economia ancorada em agronegócio, pecuária, comércio e saúde. É um forte hub universitário regional, com a Unesp e a Universidade do Oeste Paulista (Unoeste), entre outras instituições.',

  mercado:
    'A cidade tem oferta robusta de academias — incluindo redes, boxes de cross training e academias de musculação tradicionais — e o Centro Olímpico Antônio Macca como equipamento público de referência. O perfil universitário e de IDHM muito alto sustenta a demanda por personal trainers.',

  bairrosNobres: ['Jardim Bongiovani', 'Jardim Paulista', 'Alto da Boa Vista', 'Damha'],
  bairrosPopulares: ['Ana Jacinta', 'Jardim Humberto Salvador', 'Jardim Cambuci', 'Vila Marcondes'],

  parques: [
    {
      nome: 'Parque do Povo',
      descricao:
        'Grande parque urbano linear (cerca de 47 ha) com pistas de cooper e caminhada arborizadas, academia ao ar livre, ciclovia, quadras poliesportivas e piscinas públicas — o principal ponto de treino da cidade.',
    },
    {
      nome: 'Balneário da Amizade',
      descricao:
        'Parque municipal às margens de um grande lago, com pista de caminhada e corrida, ciclismo, barras para ginástica ao ar livre, vôlei de praia e beach tênis, de entrada gratuita.',
    },
    {
      nome: 'Cidade da Criança',
      descricao:
        'Espaço de lazer municipal próximo ao Balneário, voltado a atividades recreativas e caminhada em família.',
    },
  ],
  ciclovias:
    'Há ciclovia dentro do Parque do Povo e pista de ciclismo no Balneário da Amizade; a extensão total da malha urbana ainda não é divulgada em fonte oficial.',

  clima:
    'O clima é tropical com estação seca de inverno, com verão quente e chuvoso (máximas próximas de 40 °C) e inverno ameno e seco.',
  climaTreino:
    'No verão, o calor intenso recomenda treino ao ar livre no início da manhã ou no fim de tarde; o inverno seco abre janelas mais confortáveis para correr.',

  mobilidade:
    'O acesso principal é pela Rodovia Raposo Tavares (SP-270), eixo histórico que liga a capital ao oeste paulista e conecta a cidade a outros centros do interior.',

  corridas: [
    {
      nome: 'Circuito Sesc-SP de Corridas — Etapa Presidente Prudente',
      descricao:
        'Provas de 5 km e 10 km com largada no Parque do Povo.',
    },
    {
      nome: 'Prudente em Movimento',
      descricao:
        'Corrida com modalidades de 3 km (PCD), 5 km e caminhada, com festa pós-prova no Parque do Povo.',
    },
  ],
  culturaEsportiva:
    'Presidente Prudente vem se consolidando como referência regional em corridas de rua, tendo inclusive regulamentado a atividade por decreto municipal; o Parque do Povo funciona como o principal ponto de encontro de corredores e praticantes de atividade ao ar livre.',
  academias:
    'A oferta é ampla e diversificada (musculação, cross training e redes nacionais), num polo universitário regional, complementada pelo Parque do Povo e pelo Balneário da Amizade.',

  destaquesFitness: [
    'Parque do Povo como maior ativo para treino ao ar livre (pista, academia ao ar livre, ciclovia).',
    'Balneário da Amizade: opção gratuita à beira de lago, com pista e equipamentos de ginástica.',
    'Cena de corrida de rua aquecida, com calendário recorrente (Sesc, Prudente em Movimento, Meia Maratona).',
    'Mercado de academias amplo num polo universitário regional.',
  ],

  precos: {
    avulsaMin: 70,
    avulsaMax: 175,
    mensalMin: 360,
    mensalMax: 960,
    onlineMin: 170,
    onlineMax: 440,
  },

  conclusao:
    'Polo do oeste paulista, Presidente Prudente une qualidade de vida, grande parque urbano e cena de corrida forte. Um personal trainer ajuda a aproveitar o Parque do Povo e o Balneário da Amizade com método, ajustando os horários ao calor do verão.',

  vizinhas: ['marilia-sp', 'bauru-sp'],

  fontes: [
    { nome: 'IBGE Cidades — Presidente Prudente', url: 'https://cidades.ibge.gov.br/brasil/sp/presidente-prudente/panorama' },
    { nome: 'Prefeitura de Presidente Prudente', url: 'https://www.presidenteprudente.sp.gov.br/' },
    { nome: 'Atlas Brasil — IDHM', url: 'https://www.atlasbrasil.org.br/' },
  ],
  atualizadoEm: '2026-06-29',
};
