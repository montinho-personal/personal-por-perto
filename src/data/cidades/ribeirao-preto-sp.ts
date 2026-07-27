import type { Cidade } from '../../lib/types';

export const cidade: Cidade = {
  slug: 'ribeirao-preto-sp',
  nome: 'Ribeirão Preto',
  uf: 'SP',
  estado: 'São Paulo',
  estadoSlug: 'sao-paulo',
  regiao: 'Sudeste',
  gentilico: 'ribeirão-pretano',
  tipo: 'cidade',

  populacao: 698642,
  populacaoAno: 2022,
  idhm: 0.8,
  idhmClasse: 'muito alto',
  altitudeM: 546,

  resumoEconomico:
    'Conhecida como a Capital Nacional do Agronegócio, Ribeirão Preto tem uma economia robusta, com forte cadeia sucroalcooleira na região, um grande polo de saúde (com a Faculdade de Medicina e o HC da USP e dezenas de hospitais) e setores de educação e tecnologia. O alto poder aquisitivo, concentrado na Zona Sul, cria um terreno fértil para serviços premium — incluindo o personal training.',

  mercado:
    'A cultura de academia e de vida ao ar livre é forte em Ribeirão Preto. Redes como Smart Fit (Subsetor Sul, Ribeirânia, shoppings) e Bluefit (Jardim Califórnia, Santa Cruz) estão bem distribuídas, e o público de classe média-alta, somado ao clima quente, impulsiona tanto a musculação indoor quanto o treino ao ar livre nos parques.',

  bairrosNobres: ['Jardim Botânico', 'Bosque das Juritis', 'Vila do Golf', "Jardim Olhos d'Água"],
  bairrosPopulares: ['Quintino Facci', 'Jardim Aeroporto', 'Ipiranga', 'Adelino Simioni'],

  parques: [
    {
      nome: 'Parque Maurílio Biagi',
      descricao:
        'Um dos points mais completos da cidade, com pista de corrida e caminhada, ciclovia, academia ao ar livre, quadras e rampa de skate.',
    },
    {
      nome: 'Parque Prefeito Luiz Roberto Jábali (Curupira)',
      descricao:
        'Com cerca de 152 mil m², tem trilhas para caminhada e corrida e um lago, em meio a muita área verde; aberto das 6h às 20h.',
    },
    {
      nome: "Parque Municipal Dr. Luís Carlos Raya",
      descricao:
        'Tem pistas asfaltadas para caminhada e corrida e uma cachoeira artificial de 25 m; aberto das 6h às 21h.',
    },
  ],
  ciclovias:
    'A cidade tem mais de 50 km de ciclovias (com o maior trecho, de mais de 7 km, na Avenida Maurílio Biagi) e um plano cicloviário que prevê forte expansão.',

  clima:
    'O clima é quente, com média anual em torno de 23 °C e verões notoriamente quentes — Ribeirão é conhecida pelo calor.',
  climaTreino:
    'O treino ao ar livre rende mais cedo de manhã (a partir das 6h) ou no fim da tarde; o meio-dia é desaconselhável no verão. Hidratação reforçada é regra na maior parte do ano.',

  mobilidade:
    'O acesso se dá pela Rodovia Anhanguera (SP-330), com proximidade do corredor Bandeirantes/Washington Luís que liga a cidade a Campinas e a São Paulo. A cidade é plana, o que favorece caminhada e ciclismo, e tem corredores de ônibus implantados.',

  corridas: [
    {
      nome: 'Maratona Oficial de Ribeirão Preto',
      descricao:
        'Prova com percursos de 3 km a 42 km (incluindo PcD), com largada na região central, em janeiro.',
    },
    {
      nome: 'Meia Maratona Internacional de Ribeirão Preto',
      descricao:
        'Prova de 21 km e 5 km com revezamentos, em julho, parte de um calendário de corrida de rua muito ativo.',
    },
  ],
  culturaEsportiva:
    'Ribeirão Preto tem tradição no futebol (com o Botafogo-SP e a Arena Eurobike) e é uma cidade muito ativa em corrida de rua, ciclismo e treino em parques. O calor faz parte do desafio — e do charme — de treinar na região.',
  academias:
    'A presença de redes como Smart Fit e Bluefit garante boa cobertura, complementada por estúdios de funcional e personal voltados ao público de alto poder aquisitivo da Zona Sul.',
  academiasProximas: [
    { nome: 'Smart Fit', detalhe: 'unidades no Subsetor Sul, na Ribeirânia e nos shoppings' },
    { nome: 'Bluefit', detalhe: 'unidades no Jardim Califórnia e no Santa Cruz' },
    { nome: 'Estúdios premium da Zona Sul', detalhe: 'funcional e personal para o público de alto padrão' },
    { nome: 'Academias ao ar livre dos parques', detalhe: 'gratuitas, no Maurílio Biagi e no Curupira' },
  ],

  destaquesFitness: [
    'Público de alto poder aquisitivo na Zona Sul — nicho premium para personal e assessorias.',
    'Mais de 50 km de ciclovias e parques bem estruturados (Curupira, Maurílio Biagi, Raya).',
    'Forte presença de redes (Smart Fit, Bluefit) — demanda consolidada em musculação.',
    'Calendário relevante de corridas (Maratona Oficial e Meia Internacional).',
  ],

  precos: {
    avulsaMin: 80,
    avulsaMax: 180,
    mensalMin: 400,
    mensalMax: 1100,
    onlineMin: 180,
    onlineMax: 460,
  },

  conclusao:
    'Capital do agronegócio e polo de saúde, Ribeirão Preto tem um público que valoriza qualidade — e isso se reflete na busca por bons profissionais. Um personal trainer ajuda a aproveitar os parques e as academias da cidade com um plano que respeite o calor característico e acelere seus resultados.',

  faqsExtra: [
    {
      pergunta: 'Onde o personal costuma atender em Ribeirão Preto?',
      resposta:
        'A Zona Sul concentra o mercado premium — estúdios, atendimento em casa e em condomínio no Jardim Botânico, na Vila do Golf e no Bosque das Juritis —, enquanto Smart Fit e Bluefit cobrem a cidade com musculação acessível. Ao ar livre, o Parque Maurílio Biagi (com ciclovia e academia pública) e o Curupira são os points consolidados. O padrão local: treino indoor no verão escaldante e parques nas manhãs do resto do ano.',
    },
    {
      pergunta: 'Ser um polo de saúde muda algo para quem treina em Ribeirão Preto?',
      resposta:
        'Muda, e a favor: com a Faculdade de Medicina da USP, o HC e dezenas de hospitais, Ribeirão tem uma densidade rara de médicos do esporte, fisioterapeutas e nutricionistas — o que facilita montar o time completo em volta do treino. Para quem tem alguma condição de saúde ou histórico de lesão, isso significa liberação médica e acompanhamento integrado a poucos quilômetros de casa, com o personal trabalhando alinhado aos demais profissionais. É o cenário ideal para treinar forte com segurança.',
    },
    {
      pergunta: 'Há acompanhamento em Ribeirão Preto para quem sente dores ou tem limitações?',
      resposta:
        'Há. O Montinho Personal, destacado pelo portal, tem cursos voltados ao treinamento de pessoas com dores e limitações musculoesqueléticas, além da vivência prática de mais de 20 anos de musculação. Para Ribeirão Preto, o formato é o acompanhamento online: treino adaptado à estrutura disponível (academia, condomínio ou casa), vídeos de execução e ajustes contínuos. O trabalho é progressivo e sem promessa de cura — quadros clínicos pedem também médico ou fisioterapeuta.',
    },
  ],

  vizinhas: ['campinas-sp', 'sorocaba-sp', 'sao-paulo-sp'],

  fontes: [
    { nome: 'IBGE Cidades — Ribeirão Preto', url: 'https://cidades.ibge.gov.br/brasil/sp/ribeirao-preto/panorama' },
    { nome: 'Prefeitura de Ribeirão Preto', url: 'https://www.ribeiraopreto.sp.gov.br/' },
    { nome: 'Atlas Brasil — IDHM', url: 'https://www.atlasbrasil.org.br/' },
  ],
  capaArte: {
    src: '/capas-cidade/ribeirao-preto-sp.webp',
    w: 1200,
    h: 675,
    alt:
      'Personal trainer em Ribeirão Preto (SP) em arte que une treino de força e o Parque Curupira, um dos cartões-postais da cidade, com seu lago e área verde ao fundo — Personal por Perto',
    legenda:
      'Treino personalizado em Ribeirão Preto: um plano feito para o seu corpo e a sua rotina, com acompanhamento profissional na cidade e região.',
  },
  atualizadoEm: '2026-07-24',
};
