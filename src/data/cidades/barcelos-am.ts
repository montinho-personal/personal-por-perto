import type { Cidade } from '../../lib/types';

export const cidade: Cidade = {
  slug: 'barcelos-am',
  nome: 'Barcelos',
  uf: 'AM',
  estado: 'Amazonas',
  estadoSlug: 'amazonas',
  regiao: 'Norte',
  gentilico: 'barcelense',
  tipo: 'cidade',

  populacao: 24567,
  populacaoAno: 2022,

  resumoEconomico:
    'Com 24.567 habitantes (Censo 2022) espalhados por 122.476 km² — o maior município do Amazonas em área —, Barcelos foi a primeira capital da então Capitania de São José do Rio Negro. A economia gira em torno da pesca esportiva do tucunaré, do peixe ornamental e do ecoturismo no arquipélago de Mariuá, o maior arquipélago fluvial do mundo, com mais de 1.400 ilhas.',

  mercado:
    'O mercado de personal trainer é pequeno e sazonal: a temporada de pesca esportiva, no segundo semestre, movimenta pousadas, barcos-hotel e guias que precisam de preparo físico para semanas de trabalho embarcado. Fora da temporada, o treino acontece na academia simples do centro, em casa e ao ar livre na orla do rio Negro.',

  bairrosNobres: ['Centro', 'São Sebastião', 'Aparecida', 'Nazaré'],
  bairrosPopulares: ['São Lázaro', 'Ajuricaba', 'Salvação', 'Comunidades ribeirinhas'],

  parques: [
    {
      nome: 'Arquipélago de Mariuá',
      descricao:
        'O maior arquipélago fluvial do mundo, com mais de 1.400 ilhas de águas escuras e praias de areia branca na vazante — cenário da pesca esportiva de tucunaré em regime de pesque e solte.',
    },
    {
      nome: 'Parque Nacional do Jaú',
      descricao:
        'Parte do maior parque nacional de floresta tropical contínua do país está em território barcelense; o acesso se faz de barco, com autorização, pelo rio Jaú.',
    },
    {
      nome: 'Parque Estadual Serra do Aracá',
      descricao:
        'Ao norte do município, guarda tepuis e a cachoeira do El Dorado, uma das mais altas do Brasil — destino de expedições de vários dias.',
    },
    {
      nome: 'Orla do rio Negro',
      descricao:
        'A frente da cidade para o rio é o espaço de caminhada, banho e futebol de areia dos moradores, com as praias fluviais aflorando na estação seca.',
    },
  ],
  ciclovias:
    'Não há malha cicloviária. A bicicleta e a moto dominam as ruas planas da sede, e o barco é a estrada real do município.',

  clima:
    'Equatorial úmido, quente o ano todo, com estação de chuvas cheias no primeiro semestre e vazante que abre praias fluviais no segundo.',
  climaTreino:
    'Calor e umidade constantes pedem treino no início da manhã ou no fim da tarde, com hidratação reforçada. A vazante cria a melhor academia da cidade: as praias do Mariuá, de areia funda, para corrida leve e funcional.',

  mobilidade:
    'Sem acesso rodoviário: chega-se de avião ou de barco a partir de Manaus — a lancha rápida leva um dia; o recreio tradicional, mais. Dentro do município, tudo se move pelo rio.',

  corridas: [
    {
      nome: 'Provas e travessias locais',
      descricao:
        'O calendário é comunitário, com corridas em datas festivas — como o aniversário da cidade e o Festival do Peixe Ornamental — e travessias a nado e de canoa no rio Negro.',
    },
  ],
  culturaEsportiva:
    'O rio é o clube da cidade: canoagem, natação, futebol nas praias da vazante e a lida da pesca, que exige força e resistência reais. A temporada de pesca esportiva traz atletas e visitantes que mantêm rotinas de treino nas pousadas e barcos-hotel.',
  academias:
    'A oferta formal é compacta, concentrada no centro, com estrutura básica de musculação. O atendimento a domicílio e o acompanhamento online completam o quadro — especialmente para guias e trabalhadores do turismo em preparação para a temporada.',

  destaquesFitness: [
    'Arquipélago de Mariuá: mais de 1.400 ilhas e praias fluviais na vazante.',
    'Capital brasileira da pesca esportiva do tucunaré, em pesque e solte.',
    'Parte do Parque Nacional do Jaú e da Serra do Aracá no município.',
    'Maior município do Amazonas: 122 mil km² de água e floresta.',
  ],

  precos: {
    avulsaMin: 45,
    avulsaMax: 100,
    mensalMin: 230,
    mensalMax: 580,
    onlineMin: 120,
    onlineMax: 320,
  },

  conclusao:
    'Barcelos treina no ritmo do rio Negro: canoa, natação, futebol de praia fluvial e a força prática de quem vive da pesca. Um personal trainer daqui prepara guias e moradores para a temporada — costas, pegada e fôlego para semanas embarcadas — e mantém a base o ano todo, entre a cheia e a vazante.',

  vizinhas: ['sao-gabriel-da-cachoeira-am', 'novo-airao-am', 'manaus-am'],

  fontes: [
    { nome: 'IBGE Cidades — Barcelos', url: 'https://www.ibge.gov.br/cidades-e-estados/am/barcelos.html' },
    { nome: 'ICMBio — Parque Nacional do Jaú', url: 'https://www.gov.br/icmbio/pt-br/assuntos/biodiversidade/unidade-de-conservacao/unidades-de-biomas/amazonia/lista-de-ucs/parna-do-jau' },
    { nome: 'Portal Amazônia — Barcelos', url: 'https://portalamazonia.com/amazonia-de-a-a-z/barcelos/' },
  ],
  atualizadoEm: '2026-08-12',
};
