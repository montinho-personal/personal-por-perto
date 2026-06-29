import type { Cidade } from '../../lib/types';

export const cidade: Cidade = {
  slug: 'santa-cruz-do-capibaribe-pe',
  nome: 'Santa Cruz do Capibaribe',
  uf: 'PE',
  estado: 'Pernambuco',
  estadoSlug: 'pernambuco',
  regiao: 'Nordeste',
  gentilico: 'santacruzense',
  tipo: 'cidade',

  populacao: 98254,
  populacaoAno: 2022,
  idhm: 0.648,
  idhmClasse: 'médio',
  altitudeM: 438,

  resumoEconomico:
    'Conhecida como a "Capital da Sulanca", Santa Cruz do Capibaribe é um dos pilares do Polo de Confecções do Agreste pernambucano, ao lado de Toritama e Caruaru. Sua economia é movida pela indústria e pelo comércio de confecções, com destaque para o Moda Center Santa Cruz, apresentado como o maior centro atacadista de moda do Brasil, que reúne milhares de boxes e lojas e recebe compradores de todo o país. É uma cidade média, empreendedora e de forte cultura do trabalho informal, ligada ao Recife pela BR-104.',

  mercado:
    'O perfil empreendedor e a renda gerada pela confecção sustentam um mercado fitness em expansão, combinando academias locais e de bairro com forte atuação de personal trainers em atendimento domiciliar e em condomínios. A rotina intensa de quem trabalha no Moda Center e nas facções valoriza horários flexíveis e treinos objetivos, tanto presenciais quanto online.',

  bairrosNobres: ['Centro', 'São Cristóvão', 'Boa Vista', 'Santa Luzia'],
  bairrosPopulares: ['Nossa Senhora das Graças', 'Vila Mariana', 'Cohab', 'João Pessoa'],

  parques: [
    {
      nome: 'Orla do Açude / margens do rio Capibaribe',
      descricao:
        'Áreas de caminhada e lazer junto aos cursos d’água que cortam a cidade, usadas para atividade física ao ar livre nos horários mais frescos.',
    },
    {
      nome: 'Praças e academias da saúde',
      descricao:
        'Praças do Centro e dos bairros com equipamentos de ginástica ao ar livre de acesso livre, pontos comuns de treino funcional e caminhada.',
    },
    {
      nome: 'Entorno do Moda Center Santa Cruz',
      descricao:
        'As amplas vias e estacionamentos do complexo atacadista também servem de circuito improvisado para caminhada e corrida fora dos picos de movimento.',
    },
  ],
  ciclovias:
    'A cidade tem malha cicloviária limitada, e o pedal acontece sobretudo nas avenidas mais largas e nas saídas em direção à zona rural; o mountain bike tem presença local, com provas no calendário.',

  clima:
    'O clima é semiárido quente e seco, típico do Agreste, com temperaturas elevadas durante o dia, baixa umidade na maior parte do ano e chuvas concentradas entre março e julho.',
  climaTreino:
    'O calor e o sol forte pedem treino ao ar livre no início da manhã ou no fim da tarde, com boa hidratação e atenção à baixa umidade; o período do meio-dia é o menos indicado para esforço externo.',

  mobilidade:
    'O principal eixo de acesso é a BR-104, que liga a cidade ao Recife (cerca de 180 km) e às vizinhas do polo, Toritama e Caruaru. O transporte é rodoviário, sem metrô (o Metrô do Recife atende apenas a região metropolitana da capital), e os deslocamentos internos são feitos por carro, moto e ônibus.',

  corridas: [
    {
      nome: 'Moda Cup Running / MTB da Moda',
      descricao:
        'Competições de corrida de rua e mountain bike realizadas no Moda Center Santa Cruz, que reúnem atletas da região e de outros estados.',
    },
    {
      nome: 'Corrida Run GCM SCC',
      descricao:
        'Prova de rua promovida na cidade pela Guarda Civil Municipal, com edições anuais e percurso pelas vias urbanas.',
    },
    {
      nome: 'Santa Cruz em Movimento',
      descricao:
        'Evento de corrida de rua local que reforça o calendário esportivo amador do município.',
    },
  ],
  culturaEsportiva:
    'A corrida de rua e o mountain bike vêm ganhando força em Santa Cruz do Capibaribe, com provas ancoradas no Moda Center e em iniciativas municipais; o futebol amador e as academias de bairro completam uma cultura esportiva movida por grupos de treino e pelo perfil ativo da população.',
  academias:
    'A oferta concentra academias locais e de bairro com musculação e funcional, complementadas pela estrutura pública das academias da saúde em praças e pela atuação expressiva de personal trainers em domicílio.',

  destaquesFitness: [
    'Moda Center Santa Cruz como palco de provas de corrida e mountain bike.',
    'Cidade média e empreendedora do Polo de Confecções do Agreste, com rotina que valoriza treinos flexíveis.',
    'Clima semiárido quente e seco — treino externo melhor no início da manhã e fim de tarde.',
    'Mercado dividido entre academias de bairro e forte atendimento domiciliar.',
  ],

  precos: {
    avulsaMin: 50,
    avulsaMax: 110,
    mensalMin: 260,
    mensalMax: 680,
    onlineMin: 115,
    onlineMax: 350,
  },

  conclusao:
    'Capital da Sulanca e peça-chave do Polo de Confecções do Agreste, Santa Cruz do Capibaribe combina uma economia empreendedora com um cenário fitness em crescimento, do Moda Center às academias de bairro. Um personal trainer ajuda a encaixar o treino na rotina intensa da cidade, respeitando o calor e a baixa umidade do clima semiárido.',

  vizinhas: ['caruaru-pe', 'recife-pe', 'garanhuns-pe'],

  fontes: [
    { nome: 'IBGE Cidades — Santa Cruz do Capibaribe', url: 'https://cidades.ibge.gov.br/brasil/pe/santa-cruz-do-capibaribe/panorama' },
    { nome: 'Moda Center Santa Cruz', url: 'https://omodacenter.com.br/' },
    { nome: 'Atlas Brasil — IDHM', url: 'https://www.atlasbrasil.org.br/' },
  ],
  atualizadoEm: '2026-06-29',
};
