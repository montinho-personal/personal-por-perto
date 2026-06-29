import type { Cidade } from '../../lib/types';

export const cidade: Cidade = {
  slug: 'salvador-ba',
  nome: 'Salvador',
  uf: 'BA',
  estado: 'Bahia',
  estadoSlug: 'bahia',
  regiao: 'Nordeste',
  gentilico: 'soteropolitano',
  tipo: 'cidade',

  populacao: 2417678,
  populacaoAno: 2022,
  idhm: 0.759,
  idhmClasse: 'alto',
  altitudeM: 8,

  resumoEconomico:
    'Primeira capital do Brasil e maior economia da Bahia, Salvador é forte em turismo, comércio, serviços e saúde, com um polo industrial e petroquímico na região metropolitana. A geografia marcante — entre a Cidade Baixa, ao nível do mar, e a Cidade Alta — e a extensa orla atlântica fazem do treino ao ar livre parte da identidade soteropolitana.',

  mercado:
    'O mercado fitness de Salvador combina a cultura litorânea da orla Barra–Ondina, com corrida, caminhada e esportes de praia, à presença de redes como a Smart Fit. Um diferencial é o investimento público em academias ao ar livre, com o programa Academia Salvador, que democratiza o acesso ao treino orientado.',

  bairrosNobres: ['Barra', 'Pituba', 'Vitória', 'Caminho das Árvores'],
  bairrosPopulares: ['Liberdade', 'Cajazeiras', 'Itapuã', 'São Caetano'],

  parques: [
    {
      nome: 'Orla Barra–Ondina',
      descricao:
        'Calçadão bem conservado à beira-mar, ideal para corrida, caminhada e ciclismo, com vista para o Atlântico — a rota icônica de treino da cidade.',
    },
    {
      nome: 'Parque da Cidade',
      descricao:
        'Área verde e sombreada com cerca de 3,7 km de pista para caminhada, corrida e skate, ciclovia e quadras — ótimo para treinar protegido do sol forte.',
    },
    {
      nome: 'Dique do Tororó',
      descricao:
        'Circuito de cerca de 2,6 km na volta completa, que sedia a Academia Salvador, a primeira academia pública ao ar livre da cidade, com orientação de profissionais de educação física.',
    },
  ],
  ciclovias:
    'Há ciclovia no Parque da Cidade (com pista de cerca de 3,7 km) e malha cicloviária ao longo da orla, integrando lazer e mobilidade ativa.',

  clima:
    'O clima é tropical, quente e úmido, com chuvas mais marcantes no outono e no inverno e cerca de 2.226 horas de sol por ano.',
  climaTreino:
    'A umidade alta aumenta a sensação térmica, então os melhores horários para o treino ao ar livre são o início da manhã e o fim da tarde. Locais arborizados, como o Parque da Cidade, ajudam nos dias mais quentes.',

  mobilidade:
    'Salvador tem metrô (duas linhas) integrado ao BRT Salvador, que opera desde 2022 com ônibus elétricos, e ao sistema de ônibus, com integração tarifária. A Avenida Paralela é um dos principais eixos da cidade.',

  corridas: [
    {
      nome: 'Maratona Salvador',
      descricao:
        'A principal prova de rua da Bahia, com percursos de 5 km, 10 km, 21 km e 42 km pela orla soteropolitana.',
    },
    {
      nome: 'Circuito das Estações',
      descricao:
        'Uma das maiores séries de corrida de rua do país, com etapas em Salvador — parte de um calendário esportivo cada vez mais forte.',
    },
  ],
  culturaEsportiva:
    'Salvador tem forte tradição de futebol e uma cultura de praia e orla muito presente. A corrida de rua cresce com provas de grande porte, e as academias públicas ao ar livre ampliam o acesso ao treino em toda a cidade.',
  academias:
    'A oferta reúne redes como a Smart Fit, academias de bairro e a rede pública de academias ao ar livre (Academia Salvador), além de estúdios de funcional e crossfit nos bairros nobres como Barra e Pituba.',

  destaquesFitness: [
    'Academias públicas ao ar livre (programa Academia Salvador) em expansão.',
    'Orla Barra–Ondina como rota icônica de corrida e caminhada.',
    'Parque da Cidade oferece treino sombreado, ideal no calor úmido.',
    'Calendário forte de corridas (Maratona Salvador, Circuito das Estações).',
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
    'Entre a orla, os parques e as academias públicas, Salvador oferece muitas portas de entrada para treinar — do acesso gratuito ao estúdio premium. Um personal trainer ajuda a escolher o melhor caminho para o seu objetivo e a respeitar o clima quente e úmido da capital baiana.',

  vizinhas: ['aracaju-se', 'recife-pe'],

  fontes: [
    { nome: 'IBGE Cidades — Salvador', url: 'https://cidades.ibge.gov.br/brasil/ba/salvador/panorama' },
    { nome: 'Prefeitura de Salvador', url: 'https://www.salvador.ba.gov.br/' },
    { nome: 'Atlas Brasil — IDHM', url: 'https://www.atlasbrasil.org.br/' },
  ],
  atualizadoEm: '2026-06-29',
};
