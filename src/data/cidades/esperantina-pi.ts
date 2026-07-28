import type { Cidade } from '../../lib/types';

export const cidade: Cidade = {
  slug: 'esperantina-pi',
  nome: 'Esperantina',
  uf: 'PI',
  estado: 'Piauí',
  estadoSlug: 'piaui',
  regiao: 'Nordeste',
  gentilico: 'esperantinense',
  tipo: 'cidade',

  populacao: 40970,
  populacaoAno: 2022,

  resumoEconomico:
    'Polo do norte piauiense no vale do rio Longá, Esperantina vive da agricultura familiar, do comércio regional e da produção de cajuína e derivados do caju — tradições do território dos Cocais. A vizinhança da Cachoeira do Urubu, um dos cartões-postais naturais do Piauí, coloca o município na rota do turismo regional.',

  mercado:
    'O mercado de personal trainer em Esperantina é o de polo regional do norte do estado: academias de musculação no Centro, caminhada nas praças e avenidas ao entardecer e um público de comerciantes, servidores e estudantes buscando saúde e disposição. O calor do vale do Longá comanda os horários, e o papel regional traz alunos dos municípios menores do entorno.',

  bairrosNobres: ['Centro', 'Vista Alegre', 'Santa Luzia', 'Aparecida'],
  bairrosPopulares: ['Bairro dos Mulatos', 'Alto Bonito', 'Vila Maria', 'São José'],

  parques: [
    {
      nome: 'Região da Cachoeira do Urubu',
      descricao:
        'O cartão-postal natural da região, no rio Longá — cenário de lazer ativo e caminhadas, especialmente na época da piracema e das cheias.',
    },
    {
      nome: 'Praças e avenidas do Centro',
      descricao:
        'O circuito da caminhada esperantinense concentra o movimento do fim de tarde, quando o calor cede.',
    },
    {
      nome: 'Margens do rio Longá',
      descricao:
        'O vale do Longá rende percursos de caminhada e pedal nos arredores da cidade.',
    },
  ],

  clima:
    'Clima tropical do norte piauiense: quente o ano todo, com chuvas concentradas no primeiro semestre e período seco de sol forte.',
  climaTreino:
    'Treino ao ar livre no amanhecer ou no fim de tarde, com hidratação reforçada — o vale do Longá esquenta de verdade no meio do dia, quando a academia coberta assume.',

  mobilidade:
    'A PI-110 e o eixo rodoviário do norte do estado ligam Esperantina a Parnaíba, Piripiri e Teresina. Como polo dos Cocais piauienses, a cidade recebe diariamente o público da região.',

  corridas: [
    {
      nome: 'Corridas de rua do calendário local',
      descricao:
        'Provas ligadas ao aniversário da cidade e a festas regionais movimentam a cena de corrida do norte piauiense.',
    },
  ],
  culturaEsportiva:
    'O esporte esperantinense combina o futebol de bairro, a caminhada em massa nas avenidas ao entardecer e uma cena de musculação em crescimento no Centro, com a Cachoeira do Urubu puxando o lazer ativo regional.',
  academias:
    'A oferta se concentra em academias de musculação do Centro, com bom custo-benefício, servindo à cidade e ao entorno regional.',
  academiasProximas: [
    { nome: 'Academias do Centro', detalhe: 'musculação e funcional para a cidade e a região' },
    { nome: 'Praças e avenidas centrais', detalhe: 'o circuito de caminhada do fim de tarde' },
    { nome: 'Região da Cachoeira do Urubu', detalhe: 'lazer ativo e caminhadas no cartão-postal do rio Longá' },
  ],

  destaquesFitness: [
    'Polo do norte piauiense no vale do rio Longá.',
    'Cachoeira do Urubu como cartão-postal natural da região.',
    'Caminhada de fim de tarde nas avenidas como hábito coletivo.',
    'Papel regional que fortalece o acompanhamento online.',
  ],

  precos: {
    avulsaMin: 45,
    avulsaMax: 95,
    mensalMin: 200,
    mensalMax: 540,
    onlineMin: 110,
    onlineMax: 300,
  },

  conclusao:
    'Esperantina tem a receita do polo regional que funciona: academias no Centro, avenidas que viram pista ao entardecer e a natureza do Longá como bônus de fim de semana. Contra o calor, vale a estratégia das janelas — e com um plano ajustado à rotina, a constância vira hábito, não esforço.',

  faqsExtra: [
    {
      pergunta: 'Onde o personal costuma atender em Esperantina?',
      resposta:
        'Nas academias de musculação do Centro — que atendem também o público dos municípios vizinhos —, nas praças e avenidas da caminhada de fim de tarde e em casa. Para quem mora no entorno regional dos Cocais, o acompanhamento online elimina a estrada: plano no celular e ajustes contínuos sem deslocamento.',
    },
    {
      pergunta: 'Como treinar no calor do vale do Longá?',
      resposta:
        'Com as janelas a favor: amanhecer e fim de tarde para o treino ao ar livre, meio do dia para a academia coberta. A hidratação começa antes da sessão, e na estação seca o cuidado dobra. Nos fins de semana, a região da Cachoeira do Urubu rende caminhada e lazer ativo com sombra e água por perto — recompensa local de quem mantém a rotina em dia.',
    },
    {
      pergunta: 'Há acompanhamento em Esperantina para quem sente dores ou tem limitações?',
      resposta:
        'Há. O Montinho Personal, destacado pelo portal, tem cursos voltados ao treinamento de pessoas com dores e limitações musculoesqueléticas, além da vivência prática de mais de 20 anos de musculação. Para Esperantina, o formato é o acompanhamento online: treino adaptado à estrutura disponível (academia, casa ou as praças), vídeos de execução e ajustes contínuos. O trabalho é progressivo e sem promessa de cura — quadros clínicos pedem também médico ou fisioterapeuta.',
    },
  ],

  vizinhas: ['piripiri-pi', 'parnaiba-pi', 'teresina-pi'],

  fontes: [
    { nome: 'IBGE Cidades — Esperantina', url: 'https://cidades.ibge.gov.br/brasil/pi/esperantina/panorama' },
    { nome: 'Prefeitura de Esperantina', url: 'https://esperantina.pi.gov.br/' },
  ],
  atualizadoEm: '2026-07-28',
};
