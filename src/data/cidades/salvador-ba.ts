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
    'O mercado fitness de Salvador tem três camadas bem definidas. No topo, a Rede Alpha Fitness — rede premium baiana com unidades na Pituba, no Shopping Barra, na Paralela e em outros pontos — disputa o público de maior renda com a Bodytech do Caminho das Árvores; no meio, a Smart Fit e as academias de bairro cobrem a cidade; e na base, o programa público Academia Salvador leva treino orientado gratuito a praças e ao Dique do Tororó. Somam-se a cultura litorânea da orla Barra–Ondina, os esportes de praia e um calendário de corrida em crescimento, e o resultado é uma demanda por personal trainer que vai do atendimento em condomínios na Pituba e no Horto ao treino funcional na areia.',

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
  academiasProximas: [
    { nome: 'Rede Alpha Fitness', detalhe: 'rede premium baiana — Pituba, Shopping Barra, Paralela e outras unidades' },
    { nome: 'Bodytech', detalhe: 'na Av. Tancredo Neves, Caminho das Árvores' },
    { nome: 'Smart Fit', detalhe: 'unidades na Pituba e em vários bairros da cidade' },
    { nome: 'Academia Salvador', detalhe: 'rede pública gratuita, com polo no Dique do Tororó' },
  ],

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

  faqsExtra: [
    {
      pergunta: 'Onde o personal costuma atender em Salvador?',
      resposta:
        'Os territórios principais são: as academias — da Rede Alpha Fitness e Bodytech no eixo Pituba–Caminho das Árvores às unidades de rede e de bairro pela cidade —, a orla Barra–Ondina para treinos de corrida e funcional à beira-mar, o atendimento em casa e em condomínios (forte na Pituba, no Horto Florestal e no Caminho das Árvores) e os espaços públicos, como o Dique do Tororó e o Parque da Cidade, que oferecem estrutura gratuita e sombra — item valioso no clima soteropolitano.',
    },
    {
      pergunta: 'Como manter o treino no calor úmido de Salvador?',
      resposta:
        'A umidade alta eleva a sensação térmica o ano quase todo, então a estratégia é de horário e de local: sessões ao ar livre no início da manhã ou no fim da tarde, locais sombreados como o Parque da Cidade nos dias mais pesados e academia climatizada no meio do dia. Hidratação começa antes do treino e a intensidade é ajustada nos dias de mormaço — quem treina com acompanhamento não perde o ritmo, só muda o cenário.',
    },
    {
      pergunta: 'Há acompanhamento em Salvador para quem sente dores ou tem limitações?',
      resposta:
        'Há. O Montinho Personal, destacado pelo portal, tem cursos voltados ao treinamento de pessoas com dores e limitações musculoesqueléticas, além da vivência prática de mais de 20 anos de musculação. Para Salvador, o formato é o acompanhamento online: treino adaptado à estrutura disponível (academia, condomínio, casa ou orla), vídeos de execução e ajustes contínuos. O trabalho é progressivo e sem promessa de cura — quadros clínicos pedem também médico ou fisioterapeuta.',
    },
  ],

  vizinhas: ['aracaju-se', 'recife-pe'],

  fontes: [
    { nome: 'IBGE Cidades — Salvador', url: 'https://cidades.ibge.gov.br/brasil/ba/salvador/panorama' },
    { nome: 'Prefeitura de Salvador', url: 'https://www.salvador.ba.gov.br/' },
    { nome: 'Atlas Brasil — IDHM', url: 'https://www.atlasbrasil.org.br/' },
  ],
  atualizadoEm: '2026-07-18',
};
