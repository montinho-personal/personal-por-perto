import type { Cidade } from '../../lib/types';

export const cidade: Cidade = {
  slug: 'porto-velho-ro',
  nome: 'Porto Velho',
  uf: 'RO',
  estado: 'Rondônia',
  estadoSlug: 'rondonia',
  regiao: 'Norte',
  gentilico: 'porto-velhense',
  tipo: 'cidade',

  populacao: 460434,
  populacaoAno: 2022,
  idhm: 0.736,
  idhmClasse: 'alto',
  altitudeM: 90,

  resumoEconomico:
    'Capital de Rondônia e maior cidade do estado, Porto Velho é um polo de transporte, comércio e energia às margens do Rio Madeira. Ganhou peso econômico com as hidrelétricas de Santo Antônio e Jirau e tem forte presença do agronegócio regional, com um histórico ligado à ferrovia Madeira-Mamoré e à mineração.',

  mercado:
    'O mercado de musculação é aquecido nos shoppings e nas zonas sul e leste em expansão, com várias unidades da Smart Fit (Porto Velho Shopping, Av. Rio Madeira, Av. Jatuarana) e academias locais. O calor favorece também o treino ao ar livre nos parques e na orla, nos horários mais amenos.',

  bairrosNobres: ['São João Bosco', 'Olaria', 'Embratel', 'Rio Madeira'],
  bairrosPopulares: ['Caiari', 'Areal', 'Cidade Nova', 'Cuniã'],

  parques: [
    {
      nome: 'Parque da Cidade',
      descricao:
        'Com cerca de 54 mil m², tem pista de corrida e caminhada, ciclovia e área de lazer; aberto das 5h às 22h — o principal espaço público de treino da capital.',
    },
    {
      nome: 'Orla do Rio Madeira (Espaço Alternativo)',
      descricao:
        'Orla fluvial às margens do Rio Madeira, usada para caminhada, corrida e lazer com vista para o rio.',
    },
    {
      nome: 'Complexo da Madeira-Mamoré',
      descricao:
        'Área histórica à beira-rio, ponto de largada de corridas e espaço para caminhadas em meio ao patrimônio ferroviário da cidade.',
    },
  ],
  ciclovias:
    'Há ciclovia no Parque da Cidade e em avenidas da cidade, integrando lazer e mobilidade ativa.',

  clima:
    'O clima é tropical superúmido, quente e úmido o ano todo (médias entre 25 °C e 26 °C), com uma curta estação seca entre junho e agosto.',
  climaTreino:
    'O treino ao ar livre rende mais no início da manhã ou no fim da tarde; o calor e a umidade altos exigem hidratação reforçada durante todo o ano.',

  mobilidade:
    'O acesso rodoviário é pela BR-364 (eixo Cuiabá–Acre) e pela BR-319 (rumo a Manaus), com aeroporto Governador Jorge Teixeira. O transporte interno é por ônibus municipal.',

  corridas: [
    {
      nome: 'Corrida Cidade de Porto Velho',
      descricao:
        'Prova oficial da prefeitura nas comemorações de aniversário da cidade, com percursos de 5 km e 10 km e largada no Complexo da Madeira-Mamoré.',
    },
    {
      nome: 'LIVE! RUN XP Porto Velho',
      descricao:
        'Etapa de um circuito nacional, com provas de 5 km, 10 km e 21 km em percurso fechado.',
    },
  ],
  culturaEsportiva:
    'Porto Velho tem um calendário de corridas de rua consolidado, com provas institucionais e etapas de circuitos nacionais. A orla do Madeira e o Parque da Cidade são os principais palcos do esporte ao ar livre.',
  academias:
    'A oferta reúne várias unidades da Smart Fit e academias locais, concentradas nos shoppings e nas zonas de maior renda, complementadas pela estrutura do Parque da Cidade.',
  academiasProximas: [
    { nome: 'Smart Fit', detalhe: 'unidades no Porto Velho Shopping, na Av. Rio Madeira e na Av. Jatuarana' },
    { nome: 'Academias locais', detalhe: 'concentradas nas zonas sul e leste em expansão' },
    { nome: 'Estrutura do Parque da Cidade', detalhe: 'pista, ciclovia e área de lazer, das 5h às 22h' },
  ],

  destaquesFitness: [
    'Parque da Cidade como hub de corrida e ciclismo urbano.',
    'Orla do Rio Madeira para caminhada com vista.',
    'Smart Fit com múltiplas unidades, além de academias locais.',
    'Calendário ativo de corridas de rua (prefeitura e circuitos nacionais).',
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
    'Capital amazônica em crescimento, Porto Velho tem boa estrutura de academias e espaços ao ar livre à beira do Rio Madeira. Um personal trainer ajuda a montar uma rotina que respeite o calor e a umidade e a aproveitar ao máximo o Parque da Cidade e a orla.',

  faqsExtra: [
    {
      pergunta: 'Onde o personal costuma atender em Porto Velho?',
      resposta:
        'Os pontos principais são o Parque da Cidade — aberto das 5h às 22h, com pista e ciclovia —, o Espaço Alternativo na orla do Madeira, as unidades da Smart Fit (Porto Velho Shopping, Rio Madeira e Jatuarana) e as academias locais das zonas sul e leste. O atendimento em casa e em condomínio cresce nos bairros de maior renda, como São João Bosco e Rio Madeira, onde os novos residenciais costumam ter espaço de treino próprio.',
    },
    {
      pergunta: 'O que muda no treino entre a estação chuvosa e a seca de Porto Velho?',
      resposta:
        'Quase tudo — menos o plano. Na longa estação chuvosa, os treinos ao ar livre dependem das janelas entre pancadas, e a academia climatizada vira a base da semana. Na curta seca (junho a agosto), a cidade inteira migra para a orla e o Parque da Cidade, e é a melhor época para acumular volume de corrida e bike. Quem treina com acompanhamento troca o cenário sem trocar o estímulo: o plano prevê as duas versões desde o início.',
    },
    {
      pergunta: 'Há acompanhamento em Porto Velho para quem sente dores ou tem limitações?',
      resposta:
        'Há. O Montinho Personal, destacado pelo portal, tem cursos voltados ao treinamento de pessoas com dores e limitações musculoesqueléticas, além da vivência prática de mais de 20 anos de musculação. Para Porto Velho, o formato é o acompanhamento online: treino adaptado à estrutura disponível (academia, condomínio ou casa), vídeos de execução e ajustes contínuos. O trabalho é progressivo e sem promessa de cura — quadros clínicos pedem também médico ou fisioterapeuta.',
    },
  ],

  vizinhas: ['rio-branco-ac', 'manaus-am'],

  fontes: [
    { nome: 'IBGE Cidades — Porto Velho', url: 'https://cidades.ibge.gov.br/brasil/ro/porto-velho/panorama' },
    { nome: 'Prefeitura de Porto Velho', url: 'https://www.portovelho.ro.gov.br/' },
    { nome: 'Atlas Brasil — IDHM', url: 'https://www.atlasbrasil.org.br/' },
  ],
  atualizadoEm: '2026-07-19',
};
