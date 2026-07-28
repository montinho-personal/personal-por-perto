import type { Cidade } from '../../lib/types';

export const cidade: Cidade = {
  slug: 'ouricuri-pe',
  nome: 'Ouricuri',
  uf: 'PE',
  estado: 'Pernambuco',
  estadoSlug: 'pernambuco',
  regiao: 'Nordeste',
  gentilico: 'ouricuriense',
  tipo: 'cidade',

  populacao: 65245,
  populacaoAno: 2022,
  altitudeM: 451,

  resumoEconomico:
    'Polo comercial do sertão do Araripe, no extremo oeste pernambucano, Ouricuri vive do comércio que abastece a região, da caprinovinocultura — tradição do semiárido — e da agricultura de sequeiro, com a vizinhança do polo gesseiro do Araripe movimentando a economia regional. A altitude de cerca de 450 metros suaviza as noites, e a cidade funciona como centro de serviços para um vasto entorno de municípios menores.',

  mercado:
    'O mercado de personal trainer em Ouricuri é o típico de polo sertanejo: academias de musculação concentradas no Centro, caminhada nas praças e avenidas no fim de tarde e um público de comerciantes e servidores buscando saúde e disposição. O calor do semiárido define os horários — amanhecer e noite são as janelas —, e o papel de centro regional traz alunos dos municípios vizinhos, presencialmente ou no formato online.',

  bairrosNobres: ['Centro', 'Cohab', 'Aloísio Souto', 'Jardim Belo Horizonte'],
  bairrosPopulares: ['Alto do Cruzeiro', 'São Sebastião', 'Frei Damião', 'Vila Eduardo'],

  parques: [
    {
      nome: 'Praças e avenidas do Centro',
      descricao:
        'O circuito clássico da caminhada ouricuriense: as praças centrais e as avenidas concentram o movimento do fim de tarde, quando o sol cede.',
    },
    {
      nome: 'Estradas do sertão do Araripe',
      descricao:
        'Os acessos abertos do semiárido rendem percursos de pedal e corrida nas primeiras horas do dia, com o horizonte da caatinga como cenário.',
    },
    {
      nome: 'Áreas de lazer e quadras públicas',
      descricao:
        'Quadras e espaços públicos dos bairros sustentam o esporte comunitário e os treinos funcionais ao ar livre.',
    },
  ],

  clima:
    'Clima semiárido do sertão do Araripe: quente e seco a maior parte do ano, com chuvas curtas e irregulares no verão; a altitude de cerca de 450 m ameniza as noites.',
  climaTreino:
    'O sol forte empurra o treino ao ar livre para o amanhecer e o início da noite — quando a altitude deixa a temperatura mais amiga. Hidratação reforçada é regra o ano todo; no meio do dia, academia coberta.',

  mobilidade:
    'A BR-122 e a PE-630 conectam Ouricuri a Araripina, Salgueiro e ao eixo Petrolina–Recife. Como polo regional, a cidade recebe diariamente moradores do entorno; o deslocamento urbano é rápido e simples.',

  corridas: [
    {
      nome: 'Corridas de rua do calendário local',
      descricao:
        'Provas ligadas ao aniversário da cidade e a datas festivas movimentam a cena de corrida do sertão do Araripe.',
    },
  ],
  culturaEsportiva:
    'O esporte em Ouricuri combina o futebol amador, paixão do sertão, com a caminhada em massa nas avenidas ao entardecer e uma cena de musculação em crescimento no Centro. O papel de polo regional faz da cidade a referência de estrutura esportiva para os municípios vizinhos.',
  academias:
    'A oferta se concentra em academias de musculação e funcional no Centro, com bom custo-benefício, servindo também ao público da região.',
  academiasProximas: [
    { nome: 'Academias do Centro', detalhe: 'musculação e funcional para a cidade e o entorno regional' },
    { nome: 'Praças e avenidas centrais', detalhe: 'o circuito de caminhada do fim de tarde' },
    { nome: 'Quadras públicas dos bairros', detalhe: 'esporte comunitário e treino funcional ao ar livre' },
  ],

  destaquesFitness: [
    'Polo do sertão do Araripe: estrutura que serve a toda a região.',
    'Altitude de ~450 m que ameniza as noites do semiárido.',
    'Caminhada de fim de tarde nas avenidas como hábito coletivo.',
    'Demanda regional que fortalece o acompanhamento online.',
  ],

  precos: {
    avulsaMin: 45,
    avulsaMax: 100,
    mensalMin: 220,
    mensalMax: 580,
    onlineMin: 110,
    onlineMax: 320,
  },

  conclusao:
    'Ouricuri tem o essencial do polo sertanejo: academias no Centro, avenidas que viram pista ao entardecer e um público regional que busca saúde com praticidade. O calor é o adversário conhecido — e perde para quem treina nas janelas certas, com plano ajustado à rotina. É esse desenho que o acompanhamento profissional entrega, presencial ou online.',

  faqsExtra: [
    {
      pergunta: 'Onde o personal costuma atender em Ouricuri?',
      resposta:
        'Nas academias de musculação do Centro — que servem também ao público dos municípios vizinhos —, nas praças e avenidas onde a caminhada do fim de tarde é tradição, nas quadras públicas dos bairros e em casa. Para quem mora no entorno regional, o acompanhamento online resolve a distância: o plano vai pelo celular e os ajustes acontecem sem depender de deslocamento.',
    },
    {
      pergunta: 'Como treinar no calor do sertão do Araripe?',
      resposta:
        'Com as janelas a favor: amanhecer e início da noite — quando a altitude de 450 metros derruba alguns graus — são os horários de ouro do treino ao ar livre em Ouricuri. A hidratação começa antes da sessão, porque o ar seco do semiárido engana, e o meio do dia fica para a musculação em ambiente coberto. Essa lógica simples é o que separa quem treina o ano inteiro de quem para no primeiro verão.',
    },
    {
      pergunta: 'Há acompanhamento em Ouricuri para quem sente dores ou tem limitações?',
      resposta:
        'Há. O Montinho Personal, destacado pelo portal, tem cursos voltados ao treinamento de pessoas com dores e limitações musculoesqueléticas, além da vivência prática de mais de 20 anos de musculação. Para Ouricuri, o formato é o acompanhamento online: treino adaptado à estrutura disponível (academia, casa ou as praças), vídeos de execução e ajustes contínuos. O trabalho é progressivo e sem promessa de cura — quadros clínicos pedem também médico ou fisioterapeuta.',
    },
  ],

  vizinhas: ['salgueiro-pe', 'serra-talhada-pe', 'petrolina-pe', 'picos-pi'],

  fontes: [
    { nome: 'IBGE Cidades — Ouricuri', url: 'https://cidades.ibge.gov.br/brasil/pe/ouricuri/panorama' },
    { nome: 'Prefeitura de Ouricuri', url: 'https://www.ouricuri.pe.gov.br/' },
  ],
  atualizadoEm: '2026-07-28',
};
