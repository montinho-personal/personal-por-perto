import type { Cidade } from '../../lib/types';

export const cidade: Cidade = {
  slug: 'belo-jardim-pe',
  nome: 'Belo Jardim',
  uf: 'PE',
  estado: 'Pernambuco',
  estadoSlug: 'pernambuco',
  regiao: 'Nordeste',
  gentilico: 'belo-jardinense',
  tipo: 'cidade',

  populacao: 79507,
  populacaoAno: 2022,
  idhm: 0.629,
  idhmClasse: 'médio',
  altitudeM: 608,

  resumoEconomico:
    'Belo Jardim é um dos principais polos industriais do Agreste pernambucano, sede da Acumuladores Moura (Baterias Moura), uma das maiores fabricantes de baterias automotivas do país. Além da indústria, a economia se apoia no agronegócio (avicultura e fruticultura) e no comércio que atende a microrregião. Situada no Planalto da Borborema, a cerca de 608 metros de altitude e 180 km do Recife, a cidade tem um semiárido ameno, com noites mais frescas que o litoral.',

  mercado:
    'O mercado fitness é sustentado pela renda do polo industrial e pela classe trabalhadora ligada à Moura e ao agronegócio. A oferta concentra academias locais de musculação e treino funcional na área central, complementadas por estúdios menores e treino ao ar livre nas praças e na orla do açude. O acompanhamento online ganha espaço por atender quem trabalha em turnos na indústria.',

  bairrosNobres: ['Centro', 'São Pedro', 'Edson Mororó Moura', 'Nossa Senhora do Carmo'],
  bairrosPopulares: ['Alto da Conceição', 'São Sebastião', 'Cohab', 'Vila Mocó'],

  parques: [
    {
      nome: 'Açude do Bituri',
      descricao:
        'Importante reservatório que abastece a região, com entorno usado para caminhada e contemplação, em um cenário de serra do Agreste.',
    },
    {
      nome: 'Praça do Cassiano',
      descricao:
        'Praça central de referência na cidade, ponto de encontro e largada de eventos esportivos como a corrida de rua local.',
    },
    {
      nome: 'Serra do Agreste (entorno da Borborema)',
      descricao:
        'Relevo de planalto que cerca a cidade, com estradas vicinais e trechos usados por ciclistas e corredores que buscam aclives e ar mais fresco.',
    },
  ],
  ciclovias:
    'A cidade não conta com uma malha cicloviária estruturada extensa; o pedal acontece sobretudo em vias urbanas de menor fluxo e em estradas vicinais do entorno serrano, comuns no ciclismo de estrada da região.',

  clima:
    'O clima é semiárido de altitude (Planalto da Borborema), ameno para os padrões do sertão, com média anual em torno de 23 °C, chuvas concentradas de março a julho e ar mais seco no segundo semestre.',
  climaTreino:
    'A altitude torna as noites e o início da manhã mais frescos, boas janelas para correr e pedalar. No meio do dia, o sol forte e a baixa umidade do período seco pedem hidratação reforçada e proteção solar.',

  mobilidade:
    'O acesso principal é pela BR-232, que liga Belo Jardim ao Recife (cerca de 180 km) e a Caruaru, e segue rumo ao Sertão. Não há transporte sobre trilhos (o Metrô do Recife atende apenas a região metropolitana da capital); os deslocamentos internos são feitos por vias urbanas e transporte rodoviário.',

  corridas: [
    {
      nome: 'Corrida LBJ',
      descricao:
        'Prova de rua tradicional da cidade, com largada na Praça do Cassiano e percurso pelo centro, reunindo corredores do Agreste pernambucano.',
    },
    {
      nome: 'Treinos e provas no entorno do açude',
      descricao:
        'Grupos de corrida e ciclismo aproveitam as estradas do entorno serrano e as margens do reservatório para treinos coletivos.',
    },
  ],
  culturaEsportiva:
    'A cultura esportiva combina a corrida de rua, com a Corrida LBJ como evento de referência, e o ciclismo de estrada favorecido pelo relevo de serra. O clima ameno de altitude estimula a prática ao ar livre na cidade.',
  academias:
    'A oferta reúne academias locais de musculação e treino funcional na área central, além de estúdios menores de funcional e treinamento personalizado, complementados pela estrutura de praças para treino ao ar livre.',

  destaquesFitness: [
    'Sede da Baterias Moura e polo industrial do Agreste, com mercado fitness ligado à renda da indústria.',
    'Clima semiárido ameno de altitude (cerca de 608 m), com noites frescas favoráveis ao treino ao ar livre.',
    'Corrida LBJ como evento-âncora da corrida de rua local, com largada na Praça do Cassiano.',
    'Entorno serrano e açude do Bituri como cenários para corrida, ciclismo e caminhada.',
  ],

  precos: {
    avulsaMin: 45,
    avulsaMax: 110,
    mensalMin: 240,
    mensalMax: 680,
    onlineMin: 110,
    onlineMax: 340,
  },

  conclusao:
    'Polo industrial do Agreste e sede da Baterias Moura, Belo Jardim combina um clima ameno de altitude, o entorno serrano e o açude do Bituri para o treino ao ar livre, além de academias locais consolidadas. Um personal trainer ajuda a aproveitar esse cenário com método, respeitando o sol forte e a baixa umidade do período seco.',

  vizinhas: ['caruaru-pe', 'santa-cruz-do-capibaribe-pe', 'serra-talhada-pe'],

  fontes: [
    { nome: 'IBGE Cidades — Belo Jardim', url: 'https://cidades.ibge.gov.br/brasil/pe/belo-jardim/panorama' },
    { nome: 'Prefeitura de Belo Jardim', url: 'https://belojardim.pe.gov.br/' },
    { nome: 'Atlas Brasil — IDHM', url: 'https://www.atlasbrasil.org.br/' },
  ],
  atualizadoEm: '2026-06-29',
};
