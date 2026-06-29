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

  vizinhas: ['salvador-ba', 'recife-pe'],

  fontes: [
    { nome: 'IBGE Cidades — Aracaju', url: 'https://cidades.ibge.gov.br/brasil/se/aracaju/panorama' },
    { nome: 'Prefeitura de Aracaju', url: 'https://www.aracaju.se.gov.br/' },
    { nome: 'Atlas Brasil — IDHM', url: 'https://www.atlasbrasil.org.br/' },
  ],
  atualizadoEm: '2026-06-29',
};
