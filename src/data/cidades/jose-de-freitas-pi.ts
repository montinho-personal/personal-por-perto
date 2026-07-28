import type { Cidade } from '../../lib/types';

export const cidade: Cidade = {
  slug: 'jose-de-freitas-pi',
  nome: 'José de Freitas',
  uf: 'PI',
  estado: 'Piauí',
  estadoSlug: 'piaui',
  regiao: 'Nordeste',
  gentilico: 'josefreitense',
  tipo: 'cidade',

  populacao: 42559,
  populacaoAno: 2022,

  resumoEconomico:
    'Na Grande Teresina, a cerca de 50 km da capital, José de Freitas é o décimo município mais populoso do Piauí e um refúgio verde tradicional dos teresinenses: açudes, chácaras e clima de interior a uma hora da cidade grande. A economia combina agricultura familiar, comércio local e o vaivém metropolitano de quem trabalha ou estuda em Teresina.',

  mercado:
    'O mercado de personal trainer em José de Freitas é o da órbita de Teresina somado ao perfil de chácaras: treino perto de casa para quem faz o vaivém diário da capital e atendimento em domicílio nas propriedades de lazer. As academias do Centro seguram a rotina, a caminhada nas praças é hábito de fim de tarde e o calor piauiense dita as janelas do treino ao ar livre.',

  bairrosNobres: ['Centro', 'Bela Vista', 'Chapadinha', 'Alto Alegre'],
  bairrosPopulares: ['Cacimba Velha', 'Baixa Grande', 'Vila Operária', 'Malva'],

  parques: [
    {
      nome: 'Açudes e barragens do município',
      descricao:
        'Os espelhos-d-água da região — tradição de lazer da Grande Teresina — rendem caminhada e treino ao ar livre nos entornos, nos horários frescos.',
    },
    {
      nome: 'Praças do Centro',
      descricao:
        'As praças centrais concentram a caminhada do fim de tarde e a estrutura pública de exercício.',
    },
    {
      nome: 'Chácaras e estradas rurais',
      descricao:
        'O cinturão verde josefreitense oferece percursos tranquilos de pedal e corrida entre propriedades.',
    },
  ],

  clima:
    'Clima tropical quente da Grande Teresina: temperaturas altas o ano todo, com estação chuvosa no verão e período seco de sol intenso.',
  climaTreino:
    'A regra da região vale aqui: treino ao ar livre no amanhecer ou à noite, hidratação reforçada e o meio do dia reservado à academia coberta.',

  mobilidade:
    'A PI-113 liga José de Freitas a Teresina em cerca de uma hora — o eixo diário de boa parte da população. O deslocamento urbano é simples, com a cidade compacta favorecendo o treino perto de casa.',

  corridas: [
    {
      nome: 'Corridas de rua do calendário local e da Grande Teresina',
      descricao:
        'Provas locais se somam ao calendário movimentado da capital, ampliando as opções de quem corre na região.',
    },
  ],
  culturaEsportiva:
    'O esporte josefreitense combina o futebol comunitário, a caminhada nas praças ao entardecer e o lazer ativo dos açudes e chácaras — a vocação de refúgio verde da Grande Teresina que também vale para o treino.',
  academias:
    'A oferta se concentra em academias de musculação do Centro, com bom custo-benefício, atendendo quem treina antes ou depois do expediente na capital.',
  academiasProximas: [
    { nome: 'Academias do Centro', detalhe: 'musculação e funcional com horários de quem trabalha em Teresina' },
    { nome: 'Praças centrais', detalhe: 'o circuito de caminhada do fim de tarde' },
    { nome: 'Entorno dos açudes', detalhe: 'caminhada e treino ao ar livre nos horários frescos' },
  ],

  destaquesFitness: [
    'Refúgio verde da Grande Teresina: chácaras e açudes como cenário de treino.',
    'Décimo município mais populoso do Piauí, a 50 km da capital.',
    'Perfil de chácara que fortalece o atendimento em domicílio.',
    'Calor piauiense: janelas de treino no amanhecer e à noite.',
  ],

  precos: {
    avulsaMin: 45,
    avulsaMax: 95,
    mensalMin: 210,
    mensalMax: 550,
    onlineMin: 110,
    onlineMax: 300,
  },

  conclusao:
    'José de Freitas oferece o equilíbrio raro da Grande Teresina: vida de interior com a capital ao alcance. Para treinar, isso significa academia perto de casa, açudes e estradas verdes nos horários frescos e a flexibilidade do online para quem vive o vaivém — com a constância dependendo só de um plano que respeite o calor.',

  faqsExtra: [
    {
      pergunta: 'Onde o personal costuma atender em José de Freitas?',
      resposta:
        'Nas academias de musculação do Centro, nas praças da caminhada de fim de tarde, no entorno dos açudes — o cenário verde tradicional do município — e em casa ou na chácara, formato forte no perfil local. Para quem passa o dia em Teresina, o acompanhamento online resolve: o plano vai no celular e o treino acontece onde a rotina permitir.',
    },
    {
      pergunta: 'Como aproveitar os açudes e o cinturão verde para treinar?',
      resposta:
        'Os entornos dos açudes e as estradas rurais entre chácaras rendem caminhada, corrida leve e pedal com sombra e tranquilidade que a capital não oferece — desde que nos horários certos: amanhecer e fim de tarde, com hidratação reforçada. O personal transforma esse cenário em treino estruturado, combinando os percursos verdes com força na academia durante a semana.',
    },
    {
      pergunta: 'Há acompanhamento em José de Freitas para quem sente dores ou tem limitações?',
      resposta:
        'Há. O Montinho Personal, destacado pelo portal, tem cursos voltados ao treinamento de pessoas com dores e limitações musculoesqueléticas, além da vivência prática de mais de 20 anos de musculação. Para José de Freitas, o formato é o acompanhamento online: treino adaptado à estrutura disponível (academia, casa ou chácara), vídeos de execução e ajustes contínuos. O trabalho é progressivo e sem promessa de cura — quadros clínicos pedem também médico ou fisioterapeuta.',
    },
  ],

  vizinhas: ['teresina-pi', 'altos-pi', 'campo-maior-pi'],

  fontes: [
    { nome: 'IBGE Cidades — José de Freitas', url: 'https://cidades.ibge.gov.br/brasil/pi/jose-de-freitas/panorama' },
    { nome: 'Prefeitura de José de Freitas', url: 'https://josedefreitas.pi.gov.br/' },
  ],
  atualizadoEm: '2026-07-28',
};
