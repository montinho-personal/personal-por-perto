import type { Cidade } from '../../lib/types';

export const cidade: Cidade = {
  slug: 'teresina-pi',
  nome: 'Teresina',
  uf: 'PI',
  estado: 'Piauí',
  estadoSlug: 'piaui',
  regiao: 'Nordeste',
  gentilico: 'teresinense',
  tipo: 'cidade',

  populacao: 866300,
  populacaoAno: 2022,
  idhm: 0.751,
  idhmClasse: 'alto',
  altitudeM: 72,

  resumoEconomico:
    'Capital do Piauí e a única capital nordestina sem litoral, Teresina é o maior polo de saúde do Meio-Norte, referência em serviços médicos de alta complexidade que atraem pacientes de vários estados. A economia é forte em serviços, comércio, educação superior e administração pública, e a cidade — entre os rios Poti e Parnaíba — é conhecida como "Cidade Verde".',

  mercado:
    'O mercado fitness é consolidado, com redes nacionais (Smart Fit em vários pontos, Selfit) e academias locais. A cultura de treino ao ar livre é forte nos parques e orlas fluviais, sempre nos horários mais frescos por causa do calor intenso, e o polo de saúde favorece o nicho de personal e reabilitação.',

  bairrosNobres: ['Jóquei', 'Fátima', 'Horto', 'São Cristóvão'],
  bairrosPopulares: ['Itararé', 'Dirceu Arcoverde', 'Promorar', 'Cidade Industrial'],

  parques: [
    {
      nome: 'Parque Potycabana',
      descricao:
        'Às margens do Rio Poti, tem pista de caminhada de 1,5 km, duas pistas asfaltadas de 1,5 km para ciclismo, pista de skate e oito quadras poliesportivas — o grande complexo esportivo da cidade.',
    },
    {
      nome: 'Parque da Cidadania',
      descricao:
        'O maior parque urbano de Teresina (cerca de 8 hectares), na Avenida Frei Serafim, com pistas de caminhada, ciclovia, quadras, anfiteatro e lago.',
    },
    {
      nome: 'Orla do Rio Poti e Parque Lagoas do Norte',
      descricao:
        'Áreas revitalizadas à beira do rio, usadas para caminhada e lazer ativo.',
    },
  ],
  ciclovias:
    'A rede cicloviária está em ampliação, com ciclovias nos parques e trechos em obras, incluindo segmentos sobre o Rio Poti.',

  clima:
    'O clima é tropical de savana, quente o ano todo (entre cerca de 25 °C e 35 °C) — Teresina é uma das capitais mais quentes do Brasil.',
  climaTreino:
    'Pelo calor intenso, o treino ao ar livre concentra-se no início da manhã e no fim da tarde, com hidratação reforçada e atenção redobrada à desidratação.',

  mobilidade:
    'O acesso é pelas BR-316 e BR-343, com melhorias viárias recentes no centro, e pelo Aeroporto Senador Petrônio Portella. O transporte urbano é feito por ônibus.',

  corridas: [
    {
      nome: 'Meia Maratona de Teresina',
      descricao:
        'Prova tradicional de 21 km pela capital, parte de um calendário de corrida de rua ativo.',
    },
    {
      nome: 'Corrida Meio Norte',
      descricao:
        'Realizada em torno do Dia do Piauí (19 de outubro), com percursos de rua e meia maratona de 21 km.',
    },
  ],
  culturaEsportiva:
    'Teresina tem um calendário ativo de corridas de rua e uso intenso dos parques e orlas para caminhada, corrida e ciclismo. A "Cidade Verde" estimula a atividade ao ar livre, mesmo diante do calor característico.',
  academias:
    'A oferta reúne redes nacionais (Smart Fit, Selfit) e academias locais, complementadas pela estrutura dos parques Potycabana e da Cidadania — e impulsionada pelo grande ecossistema de saúde da cidade.',
  academiasProximas: [
    { nome: 'Smart Fit', detalhe: 'várias unidades pela cidade' },
    { nome: 'Selfit', detalhe: 'rede de baixo custo com presença na capital' },
    { nome: 'Academias locais', detalhe: 'boa cobertura no Jóquei, em Fátima e no Centro' },
    { nome: 'Estrutura dos parques', detalhe: 'gratuita, no Potycabana e no Parque da Cidadania' },
  ],

  destaquesFitness: [
    'Polo de saúde do Meio-Norte, que favorece o nicho de personal e reabilitação.',
    'Redes consolidadas (Smart Fit, Selfit) e academias locais.',
    'Parque Potycabana e Parque da Cidadania como hubs de treino ao ar livre.',
    'Calor extremo exige periodização de horários e foco em hidratação.',
  ],

  precos: {
    avulsaMin: 65,
    avulsaMax: 150,
    mensalMin: 320,
    mensalMax: 880,
    onlineMin: 160,
    onlineMax: 410,
  },

  conclusao:
    'Polo de saúde e "Cidade Verde", Teresina tem boa estrutura de parques e academias para quem quer treinar — desde que se respeite o calor. Um personal trainer ajuda a montar uma rotina segura, com horários e hidratação ajustados, e a aproveitar ao máximo o Potycabana e os demais espaços da cidade.',

  faqsExtra: [
    {
      pergunta: 'Onde o personal costuma atender em Teresina?',
      resposta:
        'Os pontos fortes são o Parque Potycabana — o complexo esportivo às margens do Poti, com pistas, quadras e academia ao ar livre —, o Parque da Cidadania na Frei Serafim, as academias de rede e locais do Jóquei e de Fátima e o atendimento em casa, valorizado nos meses mais quentes. Um diferencial da cidade: como maior polo de saúde do Meio-Norte, Teresina tem um ecossistema médico que facilita o trabalho conjunto entre personal, médico e fisioterapeuta.',
    },
    {
      pergunta: 'Como treinar no calor de Teresina, uma das capitais mais quentes do país?',
      resposta:
        'Com estratégia de deserto: as janelas reais de treino ao ar livre são das 5h30 às 7h30 e depois das 17h30 — fora delas, academia climatizada sem culpa. A hidratação começa antes da sessão e continua depois; nos meses do "B-R-O bró" (setembro a dezembro, os mais quentes), vale reduzir a intensidade dos treinos externos e transferir o esforço pesado para ambiente fechado. O personal ajusta o plano ao termômetro — constância em Teresina é questão de logística térmica.',
    },
    {
      pergunta: 'Há acompanhamento em Teresina para quem sente dores ou tem limitações?',
      resposta:
        'Há. O Montinho Personal, destacado pelo portal, tem cursos voltados ao treinamento de pessoas com dores e limitações musculoesqueléticas, além da vivência prática de mais de 20 anos de musculação. Para Teresina, o formato é o acompanhamento online: treino adaptado à estrutura disponível (academia, condomínio ou casa), vídeos de execução e ajustes contínuos. O trabalho é progressivo e sem promessa de cura — quadros clínicos pedem também médico ou fisioterapeuta.',
    },
  ],

  vizinhas: ['sao-luis-ma', 'fortaleza-ce'],

  fontes: [
    { nome: 'IBGE Cidades — Teresina', url: 'https://cidades.ibge.gov.br/brasil/pi/teresina/panorama' },
    { nome: 'Prefeitura de Teresina', url: 'https://www.teresina.pi.gov.br/' },
    { nome: 'Atlas Brasil — IDHM', url: 'https://www.atlasbrasil.org.br/' },
  ],
  atualizadoEm: '2026-07-19',
};
