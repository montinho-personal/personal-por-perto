import type { Cidade } from '../../lib/types';

export const cidade: Cidade = {
  slug: 'araruama-rj',
  nome: 'Araruama',
  uf: 'RJ',
  estado: 'Rio de Janeiro',
  estadoSlug: 'rio-de-janeiro',
  regiao: 'Sudeste',
  gentilico: 'araruamense',
  tipo: 'cidade',

  populacao: 129671,
  populacaoAno: 2022,
  idhm: 0.718,
  idhmClasse: 'alto',
  altitudeM: 15,

  resumoEconomico:
    'Na Região dos Lagos, Araruama abriga a Lagoa de Araruama, a maior lagoa hipersalina do mundo. Historicamente a produção de sal foi a base econômica; hoje a economia gira em torno do turismo (praias da lagoa), da pesca artesanal, da agricultura e dos royalties do petróleo.',

  mercado:
    'Município de porte médio, tem demanda urbana espalhada pelos distritos; a nova Orla Oscar Niemeyer impulsiona o treino ao ar livre e a procura por acompanhamento de corrida e caminhada.',

  bairrosNobres: ['Pontinha', 'Parque Hotel', 'Iguabinha', 'Centro'],
  bairrosPopulares: ['Praia Seca', 'Pernambuca', 'Novo Horizonte', 'Bananeiras'],

  parques: [
    {
      nome: 'Orla Oscar Niemeyer',
      descricao:
        'Uma das maiores orlas urbanizadas do estado: cerca de 10,8 km de calçadão com ciclovia, integrando nove praias da lagoa — ideal para corrida, caminhada, ciclismo e vôlei de praia.',
    },
    {
      nome: 'Praia do Barbudo',
      descricao:
        'Praia da lagoa, ponto de largada da Corrida de São Sebastião, com areia e orla para treino.',
    },
    {
      nome: 'Praias da Lagoa (Pontinha, Salinas, Coqueiral)',
      descricao:
        'Águas calmas e rasas da lagoa hipersalina, boas para canoagem, natação e treino de baixo impacto.',
    },
  ],
  ciclovias:
    'A Orla Oscar Niemeyer tem ciclovia ao longo dos cerca de 10,8 km de calçadão à beira da lagoa.',

  clima:
    'O clima é quente, com forte insolação e baixa pluviosidade típica da Região dos Lagos, com verão quente e inverno ameno.',
  climaTreino:
    'O muito sol e o calor pedem horários frescos e hidratação; a orla plana e extensa é excelente para volume de corrida e ciclismo.',

  mobilidade:
    'Os principais acessos são a Via Lagos (RJ-124) e a RJ-106 (Rodovia Amaral Peixoto), a cerca de 108 km do Rio.',

  corridas: [
    {
      nome: 'Corrida de São Sebastião',
      descricao:
        'Tradicional corrida de rua na Orla Oscar Niemeyer, às margens da Lagoa de Araruama.',
    },
    {
      nome: 'Corrida Cavalo Marinho',
      descricao:
        'Prova de rua que integra o calendário esportivo da cidade.',
    },
  ],
  culturaEsportiva:
    'A cultura é voltada à lagoa e à nova orla — corrida, caminhada, ciclismo, vôlei de praia e canoagem nas águas calmas —, com a Orla Oscar Niemeyer como novo cartão-postal e palco de eventos.',
  academias:
    'A oferta de academias é espalhada pelos distritos, com a Orla Oscar Niemeyer e as praias da lagoa funcionando como academia a céu aberto.',

  destaquesFitness: [
    'Orla Oscar Niemeyer (cerca de 10,8 km, com ciclovia) — infraestrutura de primeira para treino outdoor.',
    'Águas calmas e rasas da lagoa, favoráveis a natação, canoagem e treino de baixo impacto.',
    'Município populoso e ainda menos saturado que destinos vizinhos.',
    'Calendário de corridas de rua (São Sebastião), que cria público recorrente.',
  ],

  precos: {
    avulsaMin: 65,
    avulsaMax: 155,
    mensalMin: 330,
    mensalMax: 900,
    onlineMin: 160,
    onlineMax: 420,
  },

  conclusao:
    'Às margens da maior lagoa hipersalina do mundo, Araruama tem na Orla Oscar Niemeyer uma das melhores estruturas de treino ao ar livre da Região dos Lagos. Um personal trainer ajuda a aproveitá-la com método, ajustando horários e hidratação ao sol forte da região.',

  vizinhas: ['cabo-frio-rj', 'saquarema-rj', 'marica-rj'],

  capaArte: {
    src: '/capas-cidade/araruama-rj.webp',
    w: 1200,
    h: 1200,
    alt: 'Personal trainer em Araruama (RJ) em arte com a Lagoa de Araruama, a Praia da Pontinha, os barcos à vela e o letreiro da cidade, com o treino em primeiro plano — Personal por Perto',
    legenda: 'Treino personalizado em Araruama: foco, disciplina e constância às margens da maior lagoa hipersalina do mundo.',
  },
  fontes: [
    { nome: 'IBGE Cidades — Araruama', url: 'https://cidades.ibge.gov.br/brasil/rj/araruama/panorama' },
    { nome: 'Prefeitura de Araruama', url: 'https://www.araruama.rj.gov.br/' },
    { nome: 'Atlas Brasil — IDHM', url: 'https://www.atlasbrasil.org.br/' },
  ],
  atualizadoEm: '2026-09-01',
};
