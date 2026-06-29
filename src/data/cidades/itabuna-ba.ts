import type { Cidade } from '../../lib/types';

export const cidade: Cidade = {
  slug: 'itabuna-ba',
  nome: 'Itabuna',
  uf: 'BA',
  estado: 'Bahia',
  estadoSlug: 'bahia',
  regiao: 'Nordeste',
  gentilico: 'itabunense',
  tipo: 'cidade',

  populacao: 186708,
  populacaoAno: 2022,
  idhm: 0.712,
  idhmClasse: 'alto',
  altitudeM: 53,

  resumoEconomico:
    'Principal centro comercial, de serviços e de saúde do sul da Bahia, no coração da região cacaueira, Itabuna forma com Ilhéus o eixo da "capital do cacau". Cresceu no auge do cacau e hoje é polo regional de comércio, indústria e hospitais, às margens do Rio Cachoeira.',

  mercado:
    'O mercado é consolidado e diversificado para uma cidade média, com redes e estúdios de treinamento funcional concentrados em Góes Calmon, São Caetano e Jardim Vitória; o perfil de polo regional atrai público de cidades vizinhas.',

  bairrosNobres: ['Góes Calmon', 'Jardim Vitória', 'Castália', 'São Caetano'],
  bairrosPopulares: ['Mangabinha', 'Ferradas', 'Nova Ferradas', 'Califórnia'],

  parques: [
    {
      nome: 'Orla da Beira-Rio (Rio Cachoeira)',
      descricao:
        'Orla revitalizada em ambas as margens, com academias ao ar livre, quadras de streetball, playgrounds e ciclovia.',
    },
    {
      nome: 'Arena Beira-Rio',
      descricao:
        'Espaço esportivo na orla, que já sediou competições de futevôlei.',
    },
    {
      nome: 'Praça Berilo Guimarães',
      descricao:
        'No bairro Mangabinha, é o ponto final do eixo da orla revitalizada, para caminhada e lazer.',
    },
  ],
  ciclovias:
    'O Projeto Orla da Beira-Rio prevê nova ciclovia ao longo de cerca de 6 km de orla, da nova ponte sobre o Rio Cachoeira até a Praça Berilo Guimarães.',

  clima:
    'O clima é tropical quente e úmido, típico da região cacaueira e da Mata Atlântica, com chuvas que podem elevar muito o nível do Rio Cachoeira.',
  climaTreino:
    'O calor e a umidade elevados favorecem o treino cedo de manhã ou no fim de tarde, com atenção a alagamentos da orla em períodos chuvosos.',

  mobilidade:
    'Itabuna é um importante entroncamento da BR-101 com a BR-415, que liga Vitória da Conquista à Costa do Cacau e a Ilhéus.',

  corridas: [
    {
      nome: 'Track & Field Experience Running — Itabuna',
      descricao:
        'Prova de rua com centenas de atletas, com largada no Shopping Jequitibá.',
    },
    {
      nome: 'Corrida Rota 30 Anos',
      descricao:
        'Prova beneficente com renda revertida a entidades, ao lado de eventos como a corrida do SEST SENAT.',
    },
  ],
  culturaEsportiva:
    'Cidade-polo, Itabuna tem calendário ativo de corridas de rua (de shoppings, empresas e instituições) e esportes na orla revitalizada, como o futevôlei na Arena Beira-Rio.',
  academias:
    'A oferta reúne redes e estúdios no eixo Góes Calmon/Aziz Maron, complementada pela orla da Beira-Rio com academias ao ar livre.',

  destaquesFitness: [
    'Orla da Beira-Rio revitalizada com academias ao ar livre e ciclovia (cerca de 6 km).',
    'Calendário regular de corridas de rua.',
    'Eixo nobre Góes Calmon / Aziz Maron com estúdios e redes.',
    'Arena Beira-Rio para esportes à beira do Rio Cachoeira.',
  ],

  precos: {
    avulsaMin: 60,
    avulsaMax: 145,
    mensalMin: 300,
    mensalMax: 820,
    onlineMin: 160,
    onlineMax: 410,
  },

  conclusao:
    'Capital do cacau e polo de saúde do sul baiano, Itabuna tem orla revitalizada e calendário de corridas ativo. Um personal trainer ajuda a aproveitar a Beira-Rio do Rio Cachoeira com método, ajustando horários e hidratação ao calor úmido da região.',

  vizinhas: ['vitoria-da-conquista-ba', 'salvador-ba'],

  fontes: [
    { nome: 'IBGE Cidades — Itabuna', url: 'https://cidades.ibge.gov.br/brasil/ba/itabuna/panorama' },
    { nome: 'Prefeitura de Itabuna', url: 'https://www.itabuna.ba.gov.br/' },
    { nome: 'Atlas Brasil — IDHM', url: 'https://www.atlasbrasil.org.br/' },
  ],
  atualizadoEm: '2026-06-29',
};
