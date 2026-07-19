import type { Cidade } from '../../lib/types';

export const cidade: Cidade = {
  slug: 'aracaju-se',
  nome: 'Aracaju',
  uf: 'SE',
  estado: 'Sergipe',
  estadoSlug: 'sergipe',
  regiao: 'Nordeste',
  gentilico: 'aracajuano',
  tipo: 'cidade',

  populacao: 602757,
  populacaoAno: 2022,
  idhm: 0.77,
  idhmClasse: 'alto',
  altitudeM: 4,

  resumoEconomico:
    'Capital de Sergipe e cidade litorânea plana, Aracaju tem economia ligada a turismo, administração pública, comércio e serviços. Está entre as capitais com menor custo de vida do Brasil, o que se reflete em boa qualidade de vida e em uma demanda crescente por imóveis e serviços de alto padrão. A orla planejada é um dos seus maiores cartões-postais e o coração da vida ativa da cidade.',

  mercado:
    'O mercado fitness de Aracaju é puxado pela forte cultura de praia e estética: a orla concentra corrida, calistenia e treino funcional, e há boa penetração de redes como a Smart Fit (Jardins, Siqueira Campos, Santa Maria, Shopping Praia Sul). O clima quente o ano todo e a orla bem estruturada favorecem o trabalho de personal trainers ao ar livre.',

  bairrosNobres: ['Jardins', '13 de Julho', 'Aruana', 'Atalaia'],
  bairrosPopulares: ['Jabotiana', 'Luzia', 'Siqueira Campos', 'Santos Dumont'],

  parques: [
    {
      nome: 'Orla de Atalaia',
      descricao:
        'Cerca de 6 km à beira-mar com calçadão, academias ao ar livre, pista de skate e quadras, aberta 24 horas — o principal espaço público de treino da cidade.',
    },
    {
      nome: 'Orla Sul (Aruana)',
      descricao:
        'Trecho mais novo da orla, com pistas de caminhada e corrida, ciclovia e equipamentos coletivos de ginástica.',
    },
    {
      nome: 'Calçadão da 13 de Julho (Praia Formosa)',
      descricao:
        'Passeio à beira do Rio Sergipe, muito usado para caminhada e corrida, também aberto 24 horas.',
    },
  ],
  ciclovias:
    'Aracaju tem cerca de 88 km de ciclovias, uma das maiores malhas do Nordeste, integrando a orla e os principais corredores da cidade.',

  clima:
    'O clima é tropical litorâneo, quente e úmido, com média em torno de 26 °C a 27 °C o ano todo.',
  climaTreino:
    'Com calor e umidade altos durante todo o ano, o treino ao ar livre rende mais cedo de manhã ou no fim da tarde, sempre com hidratação reforçada. A orla aberta 24 horas dá flexibilidade de horários.',

  mobilidade:
    'O acesso se dá pelas rodovias BR-101, BR-235 e pela Linha Verde, que liga a capital às praias do litoral sul; o Aeroporto Santa Maria fica a cerca de 12 km do centro. O transporte público é feito por ônibus.',

  corridas: [
    {
      nome: 'Corrida Cidade de Aracaju',
      descricao:
        'Uma das maiores corridas de rua do Norte/Nordeste, com um percurso principal de 24 km de São Cristóvão a Aracaju, além de provas de 10 km e 5 km, em março.',
    },
    {
      nome: 'Maratona de Aracaju',
      descricao:
        'Prova de 5 km, 10 km, 21 km e 42 km com arena na Orla de Atalaia, reunindo milhares de corredores.',
    },
  ],
  culturaEsportiva:
    'Aracaju tem forte cultura de corrida de rua e de atividades ao ar livre na orla. O clima e a estética de praia sustentam a prática de caminhada, ciclismo, calistenia e treino funcional ao longo de todo o ano.',
  academias:
    'Além das unidades da Smart Fit espalhadas pela cidade, há academias de bairro e estúdios de funcional, com a orla funcionando como uma grande extensão ao ar livre dessas estruturas.',
  academiasProximas: [
    { nome: 'Smart Fit', detalhe: 'unidades nos Jardins, em Siqueira Campos, em Santa Maria e no Shopping Praia Sul' },
    { nome: 'Estúdios de funcional e academias de bairro', detalhe: 'concentrados nos Jardins e na 13 de Julho' },
    { nome: 'Academias ao ar livre da Orla de Atalaia', detalhe: 'gratuitas e abertas 24 horas' },
  ],

  destaquesFitness: [
    'Cerca de 6 km de orla com academias ao ar livre e equipamentos gratuitos, abertos 24h.',
    'Cerca de 88 km de ciclovias, uma das maiores malhas do Nordeste.',
    'Calendário forte de corridas (Corrida Cidade de Aracaju e Maratona).',
    'Redes consolidadas e cultura de praia que aquecem a demanda por personal trainer.',
  ],

  precos: {
    avulsaMin: 60,
    avulsaMax: 140,
    mensalMin: 300,
    mensalMax: 820,
    onlineMin: 150,
    onlineMax: 390,
  },

  conclusao:
    'Com uma das orlas mais bem estruturadas do Nordeste e custo de vida acessível, Aracaju é uma cidade convidativa para treinar ao ar livre. Um personal trainer ajuda a transformar a orla de Atalaia e as ciclovias em um plano de treino consistente, ajustado ao clima quente e ao seu objetivo.',

  faqsExtra: [
    {
      pergunta: 'Onde o personal costuma atender em Aracaju?',
      resposta:
        'A orla comanda: os 6 km de Atalaia — com academias ao ar livre, quadras e calçadão abertos 24 horas — e o trecho novo da Aruana concentram corrida, calistenia e funcional; o calçadão da 13 de Julho, à beira do rio, é o preferido para caminhada. Nas academias, a Smart Fit cobre bem a cidade, e os estúdios se concentram nos Jardins. O atendimento em casa e em condomínio é forte nos Jardins, na 13 de Julho e na Atalaia.',
    },
    {
      pergunta: 'A orla 24 horas muda a rotina de treino em Aracaju?',
      resposta:
        'Muda — é uma das poucas capitais onde o horário do treino ao ar livre é escolha sua, não do sol. Com a estrutura da Atalaia aberta e iluminada a noite toda, quem trabalha em turnos, chega tarde ou prefere treinar às 5h encontra o mesmo calçadão e os mesmos equipamentos gratuitos. Na prática, o personal usa essa flexibilidade para encaixar sessões nos horários mais frescos e distribuir a semana sem depender de vaga em academia lotada no pico.',
    },
    {
      pergunta: 'Há acompanhamento em Aracaju para quem sente dores ou tem limitações?',
      resposta:
        'Há. O Montinho Personal, destacado pelo portal, tem cursos voltados ao treinamento de pessoas com dores e limitações musculoesqueléticas, além da vivência prática de mais de 20 anos de musculação. Para Aracaju, o formato é o acompanhamento online: treino adaptado à estrutura disponível (academia, condomínio, casa ou orla), vídeos de execução e ajustes contínuos. O trabalho é progressivo e sem promessa de cura — quadros clínicos pedem também médico ou fisioterapeuta.',
    },
  ],

  vizinhas: ['salvador-ba', 'recife-pe'],

  fontes: [
    { nome: 'IBGE Cidades — Aracaju', url: 'https://cidades.ibge.gov.br/brasil/se/aracaju/panorama' },
    { nome: 'Prefeitura de Aracaju', url: 'https://www.aracaju.se.gov.br/' },
    { nome: 'Atlas Brasil — IDHM', url: 'https://www.atlasbrasil.org.br/' },
  ],
  atualizadoEm: '2026-07-19',
};
