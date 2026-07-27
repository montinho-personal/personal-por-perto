import type { Cidade } from '../../lib/types';

export const cidade: Cidade = {
  slug: 'sorocaba-sp',
  nome: 'Sorocaba',
  uf: 'SP',
  estado: 'São Paulo',
  estadoSlug: 'sao-paulo',
  regiao: 'Sudeste',
  gentilico: 'sorocabano',
  tipo: 'cidade',

  populacao: 723682,
  populacaoAno: 2022,
  idhm: 0.798,
  idhmClasse: 'alto',
  altitudeM: 601,

  resumoEconomico:
    'Altamente industrializada, Sorocaba é apelidada de "Manchester Paulista" e tem um dos maiores PIBs do interior de São Paulo, com forte presença de metalurgia, autopeças, setor químico, máquinas e eletrônicos. Reconhecida nacional e internacionalmente por suas políticas de mobilidade ativa, é uma verdadeira cidade-parque, com ampla malha de ciclovias e parques que convidam ao treino ao ar livre.',

  mercado:
    'O mercado fitness é consolidado, com a Smart Fit presente em vários bairros (Campolim, Avenida Ipanema, Jardim Vergueiro, shoppings) e uma cultura de atividade física elevada. A cidade é referência em mobilidade ativa — ciclismo, corrida e caminhada nos parques fazem parte do cotidiano —, o que sustenta uma boa demanda por personal trainers.',

  bairrosNobres: ['Campolim', 'Jardim Europa', 'Parque Campolim', 'Jardim Vergueiro'],
  bairrosPopulares: ['Vila Nova Sorocaba', 'Parque São Bento', 'Jardim Santa Cecília', 'Vitória Régia'],

  parques: [
    {
      nome: 'Parque Campolim',
      descricao:
        'Com espelho d\'água e três pistas de caminhada (1.500 m, 1.900 m e 2.600 m), além de ilha de alongamento e equipamentos — ideal para variar a distância do treino.',
    },
    {
      nome: 'Parque das Águas',
      descricao:
        'Com cerca de 162 mil m², tem pista de caminhada, ciclovia, pista de skate e quadra de areia, e é aberto 24 horas — o principal palco das corridas de rua da cidade.',
    },
    {
      nome: 'Parque da ETA-Éden',
      descricao:
        'Tem academia ao ar livre, pista de caminhada e deque sobre o manancial, em ambiente arborizado.',
    },
  ],
  ciclovias:
    'Sorocaba tem cerca de 128 km de ciclovias, uma das maiores redes do Brasil, fisicamente separadas do trânsito, além de um sistema de bicicletas compartilhadas.',

  clima:
    'O clima é subtropical, com média em torno de 20,5 °C, verões quentes e chuvosos e invernos amenos e secos.',
  climaTreino:
    'O treino ao ar livre é viável o ano todo. No verão, vale priorizar manhã e fim de tarde por causa do calor e das chuvas; no inverno, atenção às frentes frias, mas a janela para treinar é ótima.',

  mobilidade:
    'A cerca de 100 km da capital, Sorocaba é ligada a São Paulo pelas rodovias Castello Branco (SP-280) e Raposo Tavares (SP-270). É reconhecida pela ONU por suas políticas de mobilidade verde, com forte incentivo ao uso da bicicleta.',

  corridas: [
    {
      nome: 'São Vicente Meia Maratona de Sorocaba',
      descricao:
        'Prova com percursos de 5 km, 10 km e 21 km e largada no Parque das Águas, que estreou em 2025 no calendário da cidade.',
    },
    {
      nome: 'Sorocaba Speed Run',
      descricao:
        'Circuito de corridas com etapas ao longo do ano (3 km, 7 km e 10 km, além de caminhada), com foco também em iniciantes.',
    },
  ],
  culturaEsportiva:
    'Sorocaba tem forte tradição esportiva e é uma das cidades mais ciclísticas do Brasil. Corrida de rua e ciclismo são muito populares, sustentados pela ampla malha de ciclovias e pela rede de parques, com um calendário recorrente de provas.',
  academias:
    'A presença da Smart Fit em vários bairros, somada a academias locais e estúdios de funcional, dá boa cobertura à cidade, que tem nos parques uma extensão natural para o treino ao ar livre.',
  academiasProximas: [
    { nome: 'Smart Fit', detalhe: 'unidades no Campolim, na Av. Ipanema, no Jardim Vergueiro e em shoppings' },
    { nome: 'Academias locais e estúdios de funcional', detalhe: 'boa cobertura pelos bairros' },
    { nome: 'Estrutura dos parques', detalhe: 'gratuita — Campolim, Parque das Águas (24h) e ETA-Éden' },
  ],

  destaquesFitness: [
    'Uma das maiores redes de ciclovias do Brasil (cerca de 128 km) e bike sharing público.',
    'Cidade-parque: Campolim (três pistas), Parque das Águas (24h) e ETA-Éden.',
    'Calendário forte de corridas (Meia Maratona São Vicente e Speed Run).',
    'Mercado de academias maduro (Smart Fit) e renda que sustenta o personal training.',
  ],

  precos: {
    avulsaMin: 75,
    avulsaMax: 170,
    mensalMin: 380,
    mensalMax: 1000,
    onlineMin: 170,
    onlineMax: 440,
  },

  conclusao:
    'Cidade-parque e referência em mobilidade ativa, Sorocaba é feita para quem gosta de se movimentar. Um personal trainer ajuda a transformar as ciclovias e os parques da cidade em um plano de treino consistente — da corrida no Parque das Águas à musculação com método.',

  faqsExtra: [
    {
      pergunta: 'Onde o personal costuma atender em Sorocaba?',
      resposta:
        'A cidade-parque oferece um circuito completo: o Parque Campolim, com três pistas de distâncias diferentes (1,5 km, 1,9 km e 2,6 km), o Parque das Águas — aberto 24 horas, palco das corridas da cidade — e o ETA-Éden, arborizado. Nas academias, a Smart Fit cobre do Campolim ao Vergueiro, e o atendimento em casa é comum no Campolim e no Jardim Europa. Os cerca de 128 km de ciclovias separadas do trânsito ainda fazem da bike uma opção real de treino.',
    },
    {
      pergunta: 'O que o Parque das Águas aberto 24 horas muda na rotina de treino?',
      resposta:
        'Muda o principal obstáculo de quem trabalha em turnos na indústria sorocabana: o horário. Com o parque aberto e iluminado a qualquer hora, quem sai da fábrica às 22h ou entra às 6h consegue manter treino ao ar livre constante — algo raro no interior. O personal aproveita essa flexibilidade para montar agendas fora do padrão comercial, e as três pistas do Campolim complementam com opções de distância para os treinos diurnos de corrida e caminhada.',
    },
    {
      pergunta: 'Há acompanhamento em Sorocaba para quem sente dores ou tem limitações?',
      resposta:
        'Há. O Montinho Personal, destacado pelo portal, tem cursos voltados ao treinamento de pessoas com dores e limitações musculoesqueléticas, além da vivência prática de mais de 20 anos de musculação. Para Sorocaba, o formato é o acompanhamento online: treino adaptado à estrutura disponível (academia, condomínio, casa ou parque), vídeos de execução e ajustes contínuos. O trabalho é progressivo e sem promessa de cura — quadros clínicos pedem também médico ou fisioterapeuta.',
    },
  ],

  vizinhas: ['campinas-sp', 'sao-paulo-sp', 'ribeirao-preto-sp'],

  fontes: [
    { nome: 'IBGE Cidades — Sorocaba', url: 'https://cidades.ibge.gov.br/brasil/sp/sorocaba/panorama' },
    { nome: 'Prefeitura de Sorocaba', url: 'https://www.sorocaba.sp.gov.br/' },
    { nome: 'Atlas Brasil — IDHM', url: 'https://www.atlasbrasil.org.br/' },
  ],
  capaArte: {
    src: '/capas-cidade/sorocaba-sp.webp',
    w: 1200,
    h: 675,
    alt:
      'Personal trainer em Sorocaba (SP) em arte que une treino de força e a cidade ao fundo, com um parque arborizado à beira de um lago — Personal por Perto',
    legenda:
      'Treino personalizado em Sorocaba: um plano feito para o seu corpo e a sua rotina, com acompanhamento profissional na cidade e região.',
  },
  atualizadoEm: '2026-07-27',
};
