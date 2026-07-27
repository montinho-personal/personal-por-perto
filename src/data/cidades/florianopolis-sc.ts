import type { Cidade } from '../../lib/types';

export const cidade: Cidade = {
  slug: 'florianopolis-sc',
  nome: 'Florianópolis',
  uf: 'SC',
  estado: 'Santa Catarina',
  estadoSlug: 'santa-catarina',
  regiao: 'Sul',
  gentilico: 'florianopolitano',
  tipo: 'cidade',

  populacao: 537211,
  populacaoAno: 2022,
  idhm: 0.847,
  idhmClasse: 'muito alto',
  altitudeM: 3,

  resumoEconomico:
    'Capital de Santa Catarina, Florianópolis tem o maior IDHM entre as capitais brasileiras (0,847). A economia é forte em serviços e administração pública e tem na tecnologia seu grande motor — o setor de TI responde por cerca de um quarto do PIB, rendendo à cidade o apelido de "Ilha do Silício". O turismo de praia, sazonal e intenso no verão, completa o cenário de uma das cidades com melhor qualidade de vida do país.',

  mercado:
    'Florianópolis tem uma cultura intensa de musculação, estética e vida saudável. A cidade sedia o Ironberg Floripa, no Itacorubi, referência nacional, além de Smart Fit e de estúdios e clubes premium. A forte cultura de surf — em praias como Joaquina, Mole e Campeche — reforça a procura por treino funcional e preparo físico, fazendo da capital uma das praças fitness mais fortes do Sul.',

  bairrosNobres: ['Jurerê Internacional', 'Lagoa da Conceição', 'Coqueiros', 'Agronômica'],
  bairrosPopulares: ['Capoeiras', 'Monte Cristo', 'Estreito', 'Coloninha'],

  parques: [
    {
      nome: 'Avenida Beira-Mar Norte',
      descricao:
        'Cerca de 10 km de orla com calçadão plano e asfaltado, ciclovia ao lado e academias ao ar livre gratuitas — o principal point de corrida e caminhada da cidade.',
    },
    {
      nome: 'Lagoa da Conceição',
      descricao:
        'Cartão-postal da Ilha, oferece circuitos de corrida e caminhada e prática de remo e stand-up paddle, em um ambiente cercado de natureza.',
    },
    {
      nome: 'Praias Joaquina, Mole e Campeche',
      descricao:
        'Palco de corrida na areia, surf e treino funcional ao ar livre — a expressão da cultura esportiva praiana de Floripa.',
    },
  ],
  ciclovias:
    'A rede cicloviária supera 250 km, conectando a Beira-Mar Norte, o Centro e o Sul da Ilha — uma das mais extensas entre as capitais.',

  clima:
    'O clima é subtropical úmido, com quatro estações bem definidas e verão quente.',
  climaTreino:
    'Dá para treinar ao ar livre o ano todo: no verão, vale escolher horários de menor radiação; no inverno, mais frio e úmido, a constância pede roupa adequada e flexibilidade entre o outdoor e a academia.',

  mobilidade:
    'A Ilha é ligada ao continente por três pontes — Pedro Ivo Campos e Colombo Salles (tráfego) e a histórica Hercílio Luz, restaurada. A BR-101 conecta a cidade a Curitiba e Porto Alegre. O trânsito de verão é intenso, o que valoriza treinar perto de casa.',

  corridas: [
    {
      nome: 'Revezamento Volta à Ilha',
      descricao:
        'A maior corrida de revezamento por distância da América Latina: cerca de 140 km contornando a Ilha, disputada desde 1996.',
    },
    {
      nome: 'Maratona Internacional de Floripa',
      descricao:
        'Prova de 42,195 km à beira-mar (com opções de 21 km e trail), em sua maior parte plana, realizada em agosto desde 2017.',
    },
  ],
  culturaEsportiva:
    'O surf faz parte da identidade de Florianópolis, com a Joaquina como palco histórico de campeonatos, e a corrida de rua é fortíssima, da Volta à Ilha à Maratona de Floripa. Some-se a musculação de alto rendimento (Ironberg) e tem-se uma das culturas fitness mais completas do país.',
  academias:
    'Além do Ironberg Floripa, referência nacional, a cidade tem unidades de Smart Fit e diversos estúdios e clubes premium, com forte oferta de funcional e treino voltado a surfistas e corredores.',
  academiasProximas: [
    { nome: 'Ironberg Floripa', detalhe: 'no Itacorubi, referência nacional em musculação' },
    { nome: 'Smart Fit', detalhe: 'unidades no Centro, no Estreito e em outros pontos da Ilha' },
    { nome: 'Estúdios e clubes premium', detalhe: 'em Jurerê Internacional e na Lagoa da Conceição' },
    { nome: 'Academias ao ar livre da Beira-Mar Norte', detalhe: 'gratuitas, ao longo do calçadão' },
  ],

  destaquesFitness: [
    'Maior IDHM entre as capitais do Brasil (0,847), com altíssima qualidade de vida.',
    'Beira-Mar Norte: corredor de cerca de 10 km com academias ao ar livre gratuitas.',
    'Sede do Ironberg Floripa, referência nacional em musculação e alto rendimento.',
    'Cultura de surf e praia que sustenta forte demanda por treino funcional.',
  ],

  precos: {
    avulsaMin: 90,
    avulsaMax: 210,
    mensalMin: 450,
    mensalMax: 1250,
    onlineMin: 200,
    onlineMax: 500,
  },

  conclusao:
    'Em Florianópolis, treinar é quase uma extensão do estilo de vida: praia, corrida, surf e musculação de alto nível convivem na mesma cidade. Um personal trainer ajuda a organizar tudo isso em torno do seu objetivo, aproveitando a Beira-Mar, a Lagoa e a forte cena fitness da capital.',

  faqsExtra: [
    {
      pergunta: 'Onde o personal costuma atender em Florianópolis?',
      resposta:
        'A geografia da Ilha define o mapa: a Beira-Mar Norte e a Lagoa da Conceição para treinos ao ar livre, as academias — do Ironberg no Itacorubi às redes e estúdios do Centro — e o atendimento em casa ou no condomínio, muito comum em Jurerê Internacional e nos residenciais do Norte da Ilha. Como o trânsito de verão trava a cidade, a regra local é treinar perto de onde se mora — ou garantir o acompanhamento online nos meses de alta temporada.',
    },
    {
      pergunta: 'O personal ajuda a melhorar o desempenho no surf?',
      resposta:
        'Ajuda — e em Floripa esse é um dos pedidos mais comuns. O surf exige potência de remada (costas e ombros), estabilidade de tronco, mobilidade de quadril e fôlego para as séries; tudo isso se constrói fora da água, com treino de força e condicionamento específicos. O personal monta o programa em ciclos, respeitando as janelas de ondulação, para que o corpo esteja pronto quando a Joaquina ou a Mole estiverem funcionando — e não destruído pelo treino do dia anterior.',
    },
    {
      pergunta: 'Há acompanhamento em Florianópolis para quem sente dores ou tem limitações?',
      resposta:
        'Há. O Montinho Personal, destacado pelo portal, tem cursos voltados ao treinamento de pessoas com dores e limitações musculoesqueléticas, além da vivência prática de mais de 20 anos de musculação. Para Florianópolis, o formato é o acompanhamento online: treino adaptado à estrutura disponível (academia, condomínio, casa ou praia), vídeos de execução e ajustes contínuos. O trabalho é progressivo e sem promessa de cura — quadros clínicos pedem também médico ou fisioterapeuta.',
    },
  ],

  vizinhas: ['balneario-camboriu-sc', 'porto-alegre-rs', 'curitiba-pr'],

  fontes: [
    { nome: 'IBGE Cidades — Florianópolis', url: 'https://cidades.ibge.gov.br/brasil/sc/florianopolis/panorama' },
    { nome: 'Prefeitura de Florianópolis', url: 'https://www.pmf.sc.gov.br/' },
    { nome: 'Atlas Brasil — IDHM', url: 'https://www.atlasbrasil.org.br/' },
  ],
  capaArte: {
    src: '/capas-cidade/florianopolis-sc.webp',
    w: 1200,
    h: 800,
    alt:
      'Personal trainer em Florianópolis (SC) orientando aluna em treino de força ao ar livre, com a Ponte Hercílio Luz iluminada ao pôr do sol ao fundo — Personal por Perto',
    legenda:
      'Treino personalizado em Florianópolis: um plano feito para o seu corpo e a sua rotina, com acompanhamento profissional na cidade e região.',
  },
  atualizadoEm: '2026-07-22',
};
