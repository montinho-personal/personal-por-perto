import type { Cidade } from '../../lib/types';

export const cidade: Cidade = {
  slug: 'rio-de-janeiro-rj',
  nome: 'Rio de Janeiro',
  uf: 'RJ',
  estado: 'Rio de Janeiro',
  estadoSlug: 'rio-de-janeiro',
  regiao: 'Sudeste',
  gentilico: 'carioca',
  tipo: 'cidade',

  populacao: 6211223,
  populacaoAno: 2022,
  idhm: 0.799,
  idhmClasse: 'alto',
  altitudeM: 5,

  resumoEconomico:
    'Segunda maior cidade e segunda maior economia do Brasil, o Rio de Janeiro concentra sedes do setor de petróleo e gás (com a Petrobras à frente), serviços, finanças, mídia e o maior polo de turismo do país. Mais do que isso, é uma cidade que vive ao ar livre: a relação dos cariocas com a praia, a corrida e o esporte faz do treino parte da identidade local.',

  mercado:
    'O mercado fitness do Rio é maduro e disputado. A Bodytech mantém operações tradicionais na Zona Sul — Copacabana, Ipanema e Leblon —, enquanto Smart Fit e a premium Bio Ritmo seguem em expansão. Some-se a isso a cultura de corpo e praia, com academias ao ar livre na orla e esportes de areia em alta, e o resultado é uma das maiores demandas por personal trainer do país, do treino de musculação ao preparo para provas de rua.',

  bairrosNobres: ['Leblon', 'Ipanema', 'Lagoa', 'Barra da Tijuca', 'Botafogo'],
  bairrosPopulares: ['Madureira', 'Campo Grande', 'Bangu', 'Realengo'],

  parques: [
    {
      nome: 'Aterro do Flamengo (Parque do Flamengo)',
      descricao:
        'O maior parque urbano do Rio, com pista de corrida de cerca de 7,6 km e marcações a cada 500 m, ciclovia larga e muito verde. Aos domingos e feriados, a pista fecha para carros e vira ponto de encontro de corredores e ciclistas.',
    },
    {
      nome: 'Orla de Copacabana, Ipanema e Leblon',
      descricao:
        'Calçadão e ciclovia contínuos por cerca de 9 km à beira-mar, com academias ao ar livre ao longo do percurso. Aos domingos, a pista da orla também é fechada ao tráfego.',
    },
    {
      nome: 'Lagoa Rodrigo de Freitas',
      descricao:
        'Volta completa de cerca de 7,5 km com pista plana de caminhada e corrida e ciclovia — uma das preferidas para treinos longos com vista para o Cristo Redentor.',
    },
  ],
  ciclovias:
    'O Rio tem uma das maiores malhas cicloviárias do país, com centenas de quilômetros conectando a Zona Sul, a Barra e o Centro, integrada a estações de transporte de alta capacidade.',

  clima:
    'O clima é tropical, quente e úmido, com verões muito quentes. O calor e a umidade pedem atenção redobrada à hidratação.',
  climaTreino:
    'Para o treino ao ar livre, os melhores horários são o início da manhã e o fim da tarde, fugindo do pico de calor. Nos dias mais abafados, a estrutura de academia com climatização faz diferença na constância.',

  mobilidade:
    'A cidade tem a rede de transporte mais diversa do país: metrô (3 linhas), trens da SuperVia, BRT, VLT no Centro, barcas e até teleférico, além das vias expressas Linha Vermelha, Linha Amarela e Avenida Brasil. Apesar disso, as distâncias são grandes e o trânsito intenso — o que valoriza treinar perto de casa, do trabalho ou no formato online.',

  corridas: [
    {
      nome: 'Maratona do Rio',
      descricao:
        'A principal prova da cidade, com percursos de 5 km, 10 km, 21 km e 42 km à beira-mar, reuniu cerca de 60 mil inscritos em 2025 — uma das maiores do Brasil.',
    },
    {
      nome: 'Meia Maratona Internacional do Rio',
      descricao:
        'Prova tradicional de 21 km (com opções de 10 km e 5 km), com largada no Leblon e percurso pela orla, parte de um calendário de corrida de rua intenso o ano todo.',
    },
  ],
  culturaEsportiva:
    'Poucas cidades têm uma cultura de corpo e ar livre tão forte quanto o Rio: corrida na orla e no Aterro, futevôlei e beach tennis na areia, ciclismo e natação. Sede dos Jogos Olímpicos de 2016, a cidade respira esporte — o que sustenta uma enorme procura por acompanhamento profissional.',
  academias:
    'A oferta vai das academias premium da Zona Sul (Bodytech, Bio Ritmo) às unidades de Smart Fit espalhadas por toda a cidade, além de estúdios de treino funcional, crossfit e os tradicionais points de areia para esportes de praia.',
  academiasProximas: [
    { nome: 'Bodytech', detalhe: 'rede premium com várias unidades em Copacabana, Ipanema, Leblon e Barra da Tijuca' },
    { nome: 'Bio Ritmo', detalhe: 'rede premium do grupo Smart Fit, em expansão na Zona Sul' },
    { nome: 'Smart Fit', detalhe: 'dezenas de unidades em todas as zonas da cidade' },
    { nome: 'Academias ao ar livre da orla', detalhe: 'gratuitas, ao longo de Copacabana, Ipanema e Leblon' },
  ],

  destaquesFitness: [
    'Aterro do Flamengo e orlas com pista fechada para carros aos domingos.',
    'Concentração de academias premium na Zona Sul (Bodytech, Bio Ritmo).',
    'Cultura praiana de estética e esportes de areia (futevôlei, beach tennis).',
    'Calendário forte de corridas de rua, com a Maratona e a Meia do Rio.',
  ],

  precos: {
    avulsaMin: 80,
    avulsaMax: 200,
    mensalMin: 400,
    mensalMax: 1200,
    onlineMin: 200,
    onlineMax: 500,
  },

  conclusao:
    'No Rio de Janeiro, treinar com um personal trainer é unir método à cidade que mais convida a se exercitar ao ar livre. Da orla ao Aterro, da musculação na Zona Sul ao acompanhamento online, a escolha certa é a que cabe na sua rotina e no seu objetivo — e opções, aqui, não faltam.',

  faqsExtra: [
    {
      pergunta: 'Onde o personal costuma atender no Rio de Janeiro?',
      resposta:
        'O Rio tem três territórios claros: as academias — da Bodytech e Bio Ritmo na Zona Sul às Smart Fit espalhadas pela cidade —, os espaços ao ar livre consagrados (orla, Aterro do Flamengo, Lagoa Rodrigo de Freitas) e o atendimento em casa ou na academia do condomínio, formato dominante na Barra da Tijuca e no Recreio. Como as distâncias são grandes e o trânsito pesa, a regra prática é escolher um personal que atenda perto de casa ou do trabalho — ou fechar acompanhamento online.',
    },
    {
      pergunta: 'Os esportes de areia substituem a musculação no Rio?',
      resposta:
        'Complementam, mas não substituem. Futevôlei, beach tennis e vôlei de praia são excelentes para condicionamento, agilidade e constância — é treino que não parece treino. O que eles não entregam é a sobrecarga progressiva que constrói massa muscular e protege articulações, especialmente a partir dos 30 anos. A combinação que mais funciona na prática carioca é duas a três sessões de força por semana com o personal, mantendo a areia como cardio e lazer nos outros dias.',
    },
    {
      pergunta: 'Há acompanhamento no Rio de Janeiro para quem sente dores ou tem limitações?',
      resposta:
        'Há. O Montinho Personal, destacado pelo portal, tem cursos voltados ao treinamento de pessoas com dores e limitações musculoesqueléticas, além da vivência de quem já treinou com desconforto em mais de 20 anos de musculação. Para o Rio, o formato é o acompanhamento online: treino adaptado à estrutura disponível (academia, condomínio ou casa), vídeos de execução e ajustes contínuos. O trabalho é progressivo e sem promessa de cura — quadros clínicos pedem também médico ou fisioterapeuta.',
    },
  ],

  vizinhas: ['niteroi-rj', 'vitoria-es', 'belo-horizonte-mg', 'sao-paulo-sp'],

  fontes: [
    { nome: 'IBGE Cidades — Rio de Janeiro', url: 'https://cidades.ibge.gov.br/brasil/rj/rio-de-janeiro/panorama' },
    { nome: 'Maratona do Rio', url: 'https://www.maratonadorio.com.br/' },
    { nome: 'Atlas Brasil — IDHM', url: 'https://www.atlasbrasil.org.br/' },
  ],
  capaArte: {
    src: '/capas-cidade/rio-de-janeiro-rj.webp',
    w: 1200,
    h: 675,
    alt:
      'Personal trainer no Rio de Janeiro (RJ) em arte que une treino de força e cartões-postais reais da cidade — o Cristo Redentor, o Pão de Açúcar, os Arcos da Lapa e o calçadão de Copacabana ao fundo — Personal por Perto',
    legenda:
      'Treino personalizado no Rio de Janeiro: um plano feito para o seu corpo e a sua rotina, com acompanhamento profissional na cidade e região.',
  },
  atualizadoEm: '2026-07-27',
};
