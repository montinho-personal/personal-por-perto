import type { Cidade } from '../../lib/types';

export const cidade: Cidade = {
  slug: 'lauro-de-freitas-ba',
  nome: 'Lauro de Freitas',
  uf: 'BA',
  estado: 'Bahia',
  estadoSlug: 'bahia',
  regiao: 'Nordeste',
  gentilico: 'lauro-freitense',
  tipo: 'cidade',

  populacao: 203331,
  populacaoAno: 2022,
  idhm: 0.754,
  idhmClasse: 'alto',

  resumoEconomico:
    'Integrante da Região Metropolitana de Salvador (a cerca de 15 km da capital), no litoral norte, Lauro de Freitas tem economia de alta renda fortemente baseada em comércio e serviços, com política de atração de empresas e expansão imobiliária de alto padrão.',

  mercado:
    'Há forte presença de academias e estúdios premium, puxada pela orla e pelos condomínios de classe média e alta de Vilas do Atlântico e Buraquinho, com público de renda e cultura de praia e treino ao ar livre.',

  bairrosNobres: ['Vilas do Atlântico', 'Buraquinho', 'Vila Praiana', 'Recreio Ipitanga'],
  bairrosPopulares: ['Itinga', 'Portão', 'Caji', 'Areia Branca'],

  parques: [
    {
      nome: 'Orla de Vilas do Atlântico',
      descricao:
        'Cerca de 6 km de calçadão com ciclovia, faixa de grama e quiosques, muito usado para corrida e caminhada.',
    },
    {
      nome: 'Praia de Ipitanga (Recreio Ipitanga)',
      descricao:
        'Faixa de areia contínua com mar aberto e áreas para esportes na areia.',
    },
    {
      nome: 'Praia de Buraquinho',
      descricao:
        'Trecho litorâneo tranquilo, próximo ao centro, usado para caminhadas.',
    },
  ],
  ciclovias:
    'Há infraestrutura cicloviária na orla, na Av. Dr. Gerino de Souza Filho e ao longo da Estrada do Coco; a extensão total ainda não é divulgada em fonte oficial.',

  clima:
    'O clima é tropical quente e úmido litorâneo, com calor o ano todo.',
  climaTreino:
    'Vale priorizar treinos cedo de manhã ou no fim de tarde, com hidratação reforçada por causa da umidade alta.',

  mobilidade:
    'O eixo principal é a BA-099 (Estrada do Coco), que liga a Salvador e ao litoral norte, com o Aeroporto de Salvador na divisa.',

  corridas: [
    {
      nome: 'Corrida Ecológica de Lauro de Freitas',
      descricao:
        'Prova oficial da prefeitura, com percursos de 5 km e 10 km.',
    },
    {
      nome: 'Corrida da Igualdade',
      descricao:
        'Prova com percursos de 1,5 km e 5 km e apelo social, com largada no ginásio de esportes.',
    },
  ],
  culturaEsportiva:
    'A cultura de praia é muito presente (corrida na orla, esportes na areia e ciclismo), com calendário ativo de corridas de rua dentro do circuito da Região Metropolitana de Salvador.',
  academias:
    'A oferta reúne academias e estúdios premium, com público de alta renda, complementada pela orla de Vilas do Atlântico e por uma forte cultura ciclística.',

  destaquesFitness: [
    'Orla de cerca de 6 km com ciclovia, uma academia ao ar livre natural.',
    'Público de alta renda que sustenta academias e estúdios premium.',
    'Forte cultura ciclística.',
    'Calendário recorrente de corridas de rua municipais.',
  ],

  precos: {
    avulsaMin: 70,
    avulsaMax: 170,
    mensalMin: 360,
    mensalMax: 960,
    onlineMin: 170,
    onlineMax: 440,
  },

  conclusao:
    'Cidade litorânea de alta renda na RM de Salvador, Lauro de Freitas tem uma orla extensa que vira academia a céu aberto. Um personal trainer ajuda a aproveitar Vilas do Atlântico e Ipitanga com método, ajustando horários e hidratação ao calor úmido.',

  vizinhas: ['salvador-ba', 'camacari-ba'],

  fontes: [
    { nome: 'IBGE Cidades — Lauro de Freitas', url: 'https://cidades.ibge.gov.br/brasil/ba/lauro-de-freitas/panorama' },
    { nome: 'Prefeitura de Lauro de Freitas', url: 'https://www.laurodefreitas.ba.gov.br/' },
    { nome: 'Atlas Brasil — IDHM', url: 'https://www.atlasbrasil.org.br/' },
  ],
  atualizadoEm: '2026-06-29',
};
