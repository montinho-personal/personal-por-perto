import type { Cidade } from '../../lib/types';

export const cidade: Cidade = {
  slug: 'mariana-mg',
  nome: 'Mariana',
  uf: 'MG',
  estado: 'Minas Gerais',
  estadoSlug: 'minas-gerais',
  regiao: 'Sudeste',
  gentilico: 'marianense',
  tipo: 'cidade',

  populacao: 61387,
  populacaoAno: 2022,
  idhm: 0.742,
  idhmClasse: 'alto',
  altitudeM: 697,

  resumoEconomico:
    'Primeira vila, cidade, diocese e capital de Minas Gerais, Mariana nasceu no ciclo do ouro e hoje tem a economia ancorada na mineração de ferro, parte do Quadrilátero Ferrífero, e no turismo histórico-cultural em torno de seu centro barroco tombado. A atividade mineradora pesa fortemente no PIB municipal, enquanto o casario colonial e o roteiro da Estrada Real sustentam o fluxo de visitantes ao longo do ano.',

  mercado:
    'O mercado é o de uma cidade histórica e mineradora de porte médio, com público formado por moradores, trabalhadores ligados à mineração e turistas. A proximidade com Ouro Preto e a forte identidade cultural sustentam a procura por academias de bairro e atendimento personalizado. O relevo de ladeiras e o entorno de serras valorizam o trabalho orientado de personal trainer para progressão segura em treino de força e corrida.',

  bairrosNobres: ['Centro', 'São Pedro', 'Vila do Carmo', 'Rosário'],
  bairrosPopulares: ['Barro Preto', 'Cabanas', 'Galego', 'Santana'],

  parques: [
    {
      nome: 'Centro Histórico (conjunto barroco tombado pelo IPHAN)',
      descricao:
        'Tombado pelo IPHAN em 1938, o conjunto colonial de igrejas, praças e ruas de pedra forma um percurso a céu aberto muito usado para caminhada, com ganho de altimetria natural pelas ruas em aclive.',
    },
    {
      nome: 'Mina da Passagem',
      descricao:
        'A cerca de 5 km do centro, no distrito de Passagem de Mariana, é uma das poucas minas de ouro abertas à visitação, com galerias subterrâneas que remontam ao ciclo do ouro e cenário para caminhadas e passeios no entorno.',
    },
    {
      nome: 'Parque Estadual do Itacolomi',
      descricao:
        'Área de proteção entre Mariana e Ouro Preto, na Serra do Espinhaço, com trilhas em meio à mata e ao relevo de serra, opção para caminhada e trekking.',
    },
  ],
  ciclovias:
    'O relevo acentuado e o piso histórico de pedra do centro limitam a infraestrutura cicloviária; o pedal na cidade é mais voltado a praticantes experientes, enquanto caminhada e corrida aproveitam as ladeiras e as trilhas do entorno serrano.',

  clima:
    'O clima é tropical de altitude (sede a cerca de 697 m, na vertente sul da Serra do Espinhaço, no Quadrilátero Ferrífero), com temperaturas amenas, invernos secos e frescos e verões com chuvas frequentes.',
  climaTreino:
    'As temperaturas amenas favorecem o treino ao ar livre na maior parte do ano; vale atenção ao frio das manhãs de inverno, às chuvas de verão e ao piso escorregadio das ruas de pedra após a chuva.',

  mobilidade:
    'Mariana é servida pela BR-356, que liga a cidade a Ouro Preto e a Belo Horizonte, e por rodovias da região mineradora. A topografia de ladeiras marca o deslocamento urbano, com ruas estreitas e em aclive no centro histórico; a proximidade com Ouro Preto integra os dois municípios no mesmo eixo turístico e econômico.',

  corridas: [
    {
      nome: 'Corrida da Cidade de Mariana (Night Run)',
      descricao:
        'Prova de rua tradicional do município, realizada em formato noturno, que aproveita o cenário do casario histórico e as ruas em aclive do centro.',
    },
    {
      nome: 'Circuito da Inconfidência (etapa de Mariana)',
      descricao:
        'Circuito mineiro que une corrida de rua, turismo e história, com etapa em Mariana e percursos de caminhada de 3 km e provas de 5 km e 10 km.',
    },
    {
      nome: 'Maratona Estrada Real (etapa de Mariana)',
      descricao:
        'Provas associadas ao roteiro da Estrada Real que passam pela região, com percursos que exploram trilhas e o relevo de serra do entorno.',
    },
  ],
  culturaEsportiva:
    'A cultura esportiva é marcada pelo desafio do relevo e pela identidade histórica: ladeiras de pedra e trilhas das serras atraem praticantes de corrida de rua, trail run e caminhada, enquanto eventos ligados à Estrada Real e ao Circuito da Inconfidência movimentam o calendário local.',
  academias:
    'A oferta reúne academias de bairro e estúdios, complementados por demanda de atendimento domiciliar e ao ar livre, adaptado às ladeiras. O público local sustenta a procura por musculação, treino funcional e preparação para provas de rua.',

  destaquesFitness: [
    'Centro histórico barroco tombado pelo IPHAN como percurso a céu aberto para caminhada.',
    'Relevo de ladeiras e serras do Quadrilátero Ferrífero, ideal para treino de força e corrida.',
    'Trilhas do Parque Estadual do Itacolomi e do entorno serrano para trekking.',
    'Calendário de corridas de rua, como a Corrida da Cidade e etapas da Estrada Real.',
  ],

  precos: {
    avulsaMin: 55,
    avulsaMax: 120,
    mensalMin: 270,
    mensalMax: 720,
    onlineMin: 130,
    onlineMax: 360,
  },

  conclusao:
    'Primeira capital de Minas, cidade histórica e de mineração de ferro, Mariana oferece um cenário único para treinar entre ladeiras de pedra, igrejas barrocas e trilhas de serra. Um personal trainer ajuda a transformar o relevo em aliado, com progressão segura para moradores, trabalhadores da mineração e quem treina em casa ou ao ar livre, a poucos minutos de Ouro Preto.',

  vizinhas: ['ouro-preto-mg', 'belo-horizonte-mg'],

  fontes: [
    { nome: 'IBGE Cidades — Mariana', url: 'https://cidades.ibge.gov.br/brasil/mg/mariana/panorama' },
    { nome: 'Prefeitura de Mariana', url: 'https://www.mariana.mg.gov.br/' },
    { nome: 'Atlas Brasil — IDHM', url: 'https://www.atlasbrasil.org.br/' },
  ],
  atualizadoEm: '2026-06-29',
};
