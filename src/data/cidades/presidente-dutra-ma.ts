import type { Cidade } from '../../lib/types';

export const cidade: Cidade = {
  slug: 'presidente-dutra-ma',
  nome: 'Presidente Dutra',
  uf: 'MA',
  estado: 'Maranhão',
  estadoSlug: 'maranhao',
  regiao: 'Nordeste',
  gentilico: 'dutrense',
  tipo: 'cidade',

  populacao: 45155,
  populacaoAno: 2022,

  resumoEconomico:
    'Entroncamento do centro maranhense — onde a BR-135 encontra o eixo que liga Teresina ao sul do estado —, Presidente Dutra vive do comércio e dos serviços que abastecem uma região extensa de municípios menores. A pecuária e a agricultura familiar completam a economia de uma cidade que funciona como parada obrigatória de quem cruza o Maranhão, com feira movimentada e papel de polo de saúde e educação regional.',

  mercado:
    'O mercado de personal trainer em Presidente Dutra é o de polo de entroncamento: academias de musculação no Centro, caminhada nas praças e avenidas no fim de tarde e um público de comerciantes, servidores e profissionais da saúde buscando disposição para jornadas longas. O papel regional traz alunos do entorno — muitos atendidos no formato online, que elimina a estrada do caminho do treino.',

  bairrosNobres: ['Centro', 'São Raimundo', 'Vila Maneco', 'Bela Vista'],
  bairrosPopulares: ['Campo Velho', 'Angelim', 'Vila Nova', 'Mutirão'],

  parques: [
    {
      nome: 'Praças e avenidas do Centro',
      descricao:
        'O circuito da caminhada dutrense: praças centrais e avenidas concentram o movimento do fim de tarde, quando o calor cede.',
    },
    {
      nome: 'Quadras e espaços públicos dos bairros',
      descricao:
        'A estrutura pública sustenta o esporte comunitário, do futebol ao treino funcional ao ar livre.',
    },
    {
      nome: 'Estradas e chapadas do entorno',
      descricao:
        'O cerrado do centro maranhense rende percursos abertos de pedal e corrida nas primeiras horas do dia.',
    },
  ],

  clima:
    'Clima tropical do centro maranhense: quente o ano todo, com estação chuvosa no verão e período seco de sol forte e temperaturas altas.',
  climaTreino:
    'O calor comanda: treino ao ar livre no amanhecer ou no fim de tarde, hidratação reforçada na estação seca e academia coberta no meio do dia.',

  mobilidade:
    'A BR-135 e as rodovias estaduais fazem de Presidente Dutra o entroncamento do centro do estado, ligando Teresina, Barra do Corda e o sul maranhense. O deslocamento urbano é simples; o fluxo regional é intenso.',

  corridas: [
    {
      nome: 'Corridas de rua do calendário local',
      descricao:
        'Provas ligadas ao aniversário da cidade e a eventos festivos movimentam a cena de corrida dutrense ao longo do ano.',
    },
  ],
  culturaEsportiva:
    'O esporte em Presidente Dutra gira em torno do futebol comunitário, da caminhada em massa nas avenidas ao entardecer e de uma cena de musculação em crescimento no Centro — alimentada pelo papel de polo regional que traz gente de toda a redondeza.',
  academias:
    'A oferta se concentra em academias de musculação do Centro, com bom custo-benefício, servindo à cidade e ao público regional de passagem.',
  academiasProximas: [
    { nome: 'Academias do Centro', detalhe: 'musculação e funcional para a cidade e o entorno regional' },
    { nome: 'Praças e avenidas centrais', detalhe: 'o circuito de caminhada do fim de tarde' },
    { nome: 'Quadras públicas dos bairros', detalhe: 'esporte comunitário e treino ao ar livre' },
  ],

  destaquesFitness: [
    'Entroncamento do centro maranhense: estrutura que serve a toda a região.',
    'Caminhada de fim de tarde nas avenidas como hábito coletivo.',
    'Papel de polo regional que fortalece o acompanhamento online.',
    'Calor tropical: janelas de treino no amanhecer e entardecer.',
  ],

  precos: {
    avulsaMin: 45,
    avulsaMax: 95,
    mensalMin: 210,
    mensalMax: 560,
    onlineMin: 110,
    onlineMax: 300,
  },

  conclusao:
    'Presidente Dutra é o ponto de encontro do centro maranhense — e isso vale também para o treino: academias no Centro, avenidas que viram pista ao entardecer e um público regional que busca saúde com praticidade. Com as janelas certas contra o calor e um plano que caiba na rotina do comércio, a constância deixa de ser sorte e vira método.',

  faqsExtra: [
    {
      pergunta: 'Onde o personal costuma atender em Presidente Dutra?',
      resposta:
        'Nas academias de musculação do Centro — que recebem também o público dos municípios vizinhos —, nas praças e avenidas onde a caminhada do fim de tarde é tradição, nas quadras públicas dos bairros e em casa. Para quem mora no entorno regional, o acompanhamento online elimina a estrada: o plano chega pelo celular e os ajustes acontecem sem deslocamento.',
    },
    {
      pergunta: 'Como treinar no calor do centro maranhense?',
      resposta:
        'Com a lógica das janelas: amanhecer e fim de tarde para o treino ao ar livre, meio do dia para a academia coberta. Na estação seca, quando o sol aperta, a hidratação começa antes da sessão; na chuvosa, o plano B indoor já fica combinado para a rotina não abrir buraco. É o ajuste simples que separa quem treina o ano inteiro de quem recomeça a cada estação.',
    },
    {
      pergunta: 'Há acompanhamento em Presidente Dutra para quem sente dores ou tem limitações?',
      resposta:
        'Há. O Montinho Personal, destacado pelo portal, tem cursos voltados ao treinamento de pessoas com dores e limitações musculoesqueléticas, além da vivência prática de mais de 20 anos de musculação. Para Presidente Dutra, o formato é o acompanhamento online: treino adaptado à estrutura disponível (academia, casa ou as praças), vídeos de execução e ajustes contínuos. O trabalho é progressivo e sem promessa de cura — quadros clínicos pedem também médico ou fisioterapeuta.',
    },
  ],

  vizinhas: ['barra-do-corda-ma', 'grajau-ma', 'caxias-ma', 'santa-ines-ma'],

  fontes: [
    { nome: 'IBGE Cidades — Presidente Dutra', url: 'https://cidades.ibge.gov.br/brasil/ma/presidente-dutra/panorama' },
    { nome: 'Prefeitura de Presidente Dutra', url: 'https://presidentedutra.ma.gov.br/' },
  ],
  atualizadoEm: '2026-07-28',
};
