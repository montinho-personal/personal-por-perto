import type { Cidade } from '../../lib/types';

export const cidade: Cidade = {
  slug: 'itajai-sc',
  nome: 'Itajaí',
  uf: 'SC',
  estado: 'Santa Catarina',
  estadoSlug: 'santa-catarina',
  regiao: 'Sul',
  gentilico: 'itajaiense',
  tipo: 'cidade',

  populacao: 264054,
  populacaoAno: 2022,
  idhm: 0.795,
  idhmClasse: 'alto',

  resumoEconomico:
    'Maior economia de Santa Catarina e "Capital Nacional da Pesca", Itajaí fica na foz do Rio Itajaí-Açu e abriga o maior porto pesqueiro do país e o segundo maior complexo de contêineres do Brasil, atrás apenas de Santos. Vizinha de Balneário Camboriú, concentra pesca, logística portuária e comércio, com IDHM alto e bairros litorâneos valorizados.',

  mercado:
    'O mercado fitness é aquecido e diversificado, com redes nacionais (Smart Fit), estúdios locais, crossfit e funcional, e forte presença em bairros valorizados como a Praia Brava. A cobertura de planos corporativos é boa, e a orla favorece o treino ao ar livre.',

  bairrosNobres: ['Praia Brava', 'Fazenda', 'São João', 'Ressacada'],
  bairrosPopulares: ['Cordeiros', 'São Vicente', 'Cidade Nova', 'São Judas'],

  parques: [
    {
      nome: 'Beira-Rio / Saco da Fazenda',
      descricao:
        'Orla e beira-rio com academia ao ar livre e quadra — um clássico para caminhada, corrida e treino funcional.',
    },
    {
      nome: 'Parque Natural Municipal do Atalaia',
      descricao:
        'Unidade de preservação no bairro Fazenda, com trilhas para caminhada em meio à mata.',
    },
    {
      nome: 'Parque Ecológico e Náutico (Marina)',
      descricao:
        'Novo espaço com pista, ciclovia e academia ao ar livre junto à marina, ampliando a estrutura de treino na orla.',
    },
  ],
  ciclovias:
    'Itajaí tem uma rede de cerca de 107 km de ciclovias, em expansão, com a meta municipal de ultrapassar 220 km.',

  clima:
    'O clima é subtropical úmido, com verões quentes e úmidos e invernos amenos (média em torno de 22 °C).',
  climaTreino:
    'O clima ameno favorece o treino ao ar livre o ano todo; no verão, vale priorizar o início da manhã ou o fim de tarde e reforçar a hidratação.',

  mobilidade:
    'A BR-101 corta a cidade, ligando-a a Joinville, Blumenau, Florianópolis (cerca de 100 km) e Balneário Camboriú (cerca de 20 km); a proximidade do aeroporto facilita o deslocamento regional.',

  corridas: [
    {
      nome: 'Meia Maratona de Itajaí (21K)',
      descricao:
        'Prova de aniversário com percursos de 5 km, 10 km e 21 km, em trajeto urbano e costeiro.',
    },
    {
      nome: 'Circuito Caixa de Corridas (etapa Itajaí)',
      descricao:
        'Provas de 5 km e 10 km que integram a cidade a um circuito nacional.',
    },
  ],
  culturaEsportiva:
    'Itajaí é referência nacional em esportes náuticos e vela — é a única parada latino-americana da The Ocean Race, a regata de volta ao mundo. No futebol, tem tradição com o Marcílio Dias, e a corrida de rua é forte na cidade.',
  academias:
    'A oferta é ampla, com redes nacionais, estúdios e boxes de crossfit, com um polo premium na Praia Brava, complementada pela orla do Saco da Fazenda e pela rede cicloviária.',

  academiasProximas: [
    { nome: 'Smart Fit', detalhe: 'unidade no Centro, na Travessa Edmundo Heusi' },
    { nome: 'Academias e estúdios da Praia Brava e Fazenda', detalhe: 'musculação, cross e funcional no eixo mais valorizado' },
    { nome: 'Estrutura pública da Beira-Rio', detalhe: 'academia ao ar livre e quadra no Saco da Fazenda' },
  ],

  destaquesFitness: [
    'Orla Beira-Rio / Saco da Fazenda: corredor natural para corrida, caminhada e funcional.',
    'Cerca de 107 km de ciclovias em expansão.',
    'Forte oferta de academias e boxes de crossfit, com polo premium na Praia Brava.',
    'Cidade da vela e da corrida (The Ocean Race e Meia Maratona) — público engajado.',
  ],

  precos: {
    avulsaMin: 80,
    avulsaMax: 180,
    mensalMin: 400,
    mensalMax: 1050,
    onlineMin: 180,
    onlineMax: 460,
  },

  conclusao:
    'Maior economia de SC e cidade portuária litorânea, Itajaí une orla, ciclovias e forte cultura esportiva. Um personal trainer ajuda a transformar o Saco da Fazenda e a Praia Brava em um plano consistente, do treino funcional à preparação para a Meia Maratona.',

  faqsExtra: [
    {
      pergunta: 'Onde o personal costuma atender em Itajaí?',
      resposta:
        'O eixo Beira-Rio–Saco da Fazenda é o point do treino ao ar livre, com academia pública e quadra junto à orla. Completam o mapa a Smart Fit do Centro e os estúdios da Praia Brava e da Fazenda — onde se concentram cross e funcional —, o novo Parque Ecológico e Náutico junto à marina e o atendimento em casa e em condomínio, forte na Praia Brava. A Meia Maratona de Itajaí é o alvo clássico de quem treina corrida orientada.',
    },
    {
      pergunta: 'Dá para se preparar para a Meia Maratona de Itajaí com personal?',
      resposta:
        'Dá — e a cidade ajuda: a Beira-Rio oferece percurso plano e contínuo para rodagens, o clima ameno favorece treino o ano todo e o calendário catarinense tem provas menores para testar o ritmo antes dos 21 km. A preparação típica leva 12 a 16 semanas, com fortalecimento em academia duas vezes por semana — é o que segura joelho e quadril quando o volume de corrida sobe. O personal monta a planilha e ajusta conforme a resposta do corpo.',
    },
    {
      pergunta: 'Há acompanhamento em Itajaí para quem sente dores ou tem limitações?',
      resposta:
        'Há. O Montinho Personal, destacado pelo portal, tem cursos voltados ao treinamento de pessoas com dores e limitações musculoesqueléticas, além da vivência prática de mais de 20 anos de musculação. Para Itajaí, o formato é o acompanhamento online: treino adaptado à estrutura disponível (academia, condomínio, casa ou a Beira-Rio), vídeos de execução e ajustes contínuos. O trabalho é progressivo e sem promessa de cura — quadros clínicos pedem também médico ou fisioterapeuta.',
    },
  ],

  vizinhas: ['balneario-camboriu-sc', 'florianopolis-sc', 'joinville-sc'],

  capaArte: {
    src: '/capas-cidade/itajai-sc.webp',
    w: 1200,
    h: 675,
    alt: 'Personal trainer em Itajaí (SC) em arte que reúne o molhe da barra com o farol, a orla verticalizada ao fundo, o porto com navio porta-contêineres e cenas de treino com halteres — Personal por Perto',
    legenda: 'Treino personalizado em Itajaí: foco, disciplina e constância com acompanhamento profissional na cidade do maior porto pesqueiro e de contêineres de Santa Catarina.',
  },
  fontes: [
    { nome: 'IBGE Cidades — Itajaí', url: 'https://cidades.ibge.gov.br/brasil/sc/itajai/panorama' },
    { nome: 'Prefeitura de Itajaí', url: 'https://www.itajai.sc.gov.br/' },
    { nome: 'Atlas Brasil — IDHM', url: 'https://www.atlasbrasil.org.br/' },
  ],
  atualizadoEm: '2026-08-25',
};
