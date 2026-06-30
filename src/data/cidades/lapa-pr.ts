import type { Cidade } from '../../lib/types';

export const cidade: Cidade = {
  slug: 'lapa-pr',
  nome: 'Lapa',
  uf: 'PR',
  estado: 'Paraná',
  estadoSlug: 'parana',
  regiao: 'Sul',
  gentilico: 'lapeano',
  tipo: 'cidade',

  populacao: 45003,
  populacaoAno: 2022,
  idhm: 0.706,
  idhmClasse: 'alto',
  altitudeM: 908,

  resumoEconomico:
    'Uma das cidades mais antigas do Paraná, a Lapa nasceu no caminho do tropeirismo, nos Campos Gerais, e hoje integra a Região Metropolitana de Curitiba, a cerca de 65 km da capital. A economia é fortemente agropecuária, com soja, milho, feijão, batata e fruticultura (pêssego, ameixa e nectarina), além de um tradicional núcleo leiteiro e de avicultura que abastece a indústria de alimentos. O turismo histórico e religioso complementa a renda local, ancorado no centro histórico tombado e no Parque Estadual do Monge.',

  mercado:
    'Por ser uma cidade média do interior paranaense, a oferta de personal trainers se concentra em academias e em atendimento ao ar livre, com bom uso do Parque do Monge e das ruas planas do centro histórico. A cena de corrida de rua e o cicloturismo dão suporte a uma cultura de treino constante, e o clima ameno dos Campos Gerais favorece o aeróbico na maior parte do ano.',

  bairrosNobres: ['Centro', 'Centro Histórico', 'Vila Nova', 'Bom Jesus'],
  bairrosPopulares: ['São Cristóvão', 'Lar Paraná', 'Cará-Cará', 'Vila Esperança'],

  parques: [
    {
      nome: 'Parque Estadual do Monge',
      descricao:
        'A cerca de 3 km do centro, é o principal cartão-postal natural da Lapa. A Trilha da Pedra Partida tem cerca de 450 m e leva por volta de 1 hora ida e volta, com corrimãos e escadas, passando pela Gruta do Monge sobre a escarpa devoniana.',
    },
    {
      nome: 'Centro Histórico tombado',
      descricao:
        'Conjunto urbano linear herdado da rota dos tropeiros, com ruas planas e calçadas largas, ideal para caminhadas e treinos leves em meio ao casario histórico.',
    },
    {
      nome: 'Praças e largos do centro',
      descricao:
        'O entorno do centro histórico oferece praças arborizadas e percursos curtos para alongamento, caminhada e treino funcional ao ar livre.',
    },
  ],
  ciclovias:
    'A Lapa é referência regional em cicloturismo: os circuitos Caminhos da Lapa têm rotas de cerca de 38 a 90 km que passam pela escarpa devoniana, fazendas e plantações, ligando o interior ao centro histórico.',

  clima:
    'O clima é subtropical de altitude (cerca de 908 m), típico dos Campos Gerais e da Região Metropolitana de Curitiba, com verões amenos e invernos frios, sujeitos a ondas de frio e geadas, com mínimas que podem cair abaixo de 5 °C.',
  climaTreino:
    'No inverno, as manhãs frias pedem aquecimento mais longo e roupa térmica; no restante do ano, o clima ameno e a altitude tornam o treino ao ar livre confortável, sobretudo nas trilhas do Monge e nas ruas planas do centro.',

  mobilidade:
    'O acesso principal é pela BR-476 (Rodovia do Xisto), que liga a Lapa a Curitiba por Araucária e funciona como uma das rotas do Mercosul rumo ao Sudoeste do Paraná, Santa Catarina e Rio Grande do Sul. A malha urbana compacta e plana do centro facilita os deslocamentos a pé.',

  corridas: [
    {
      nome: 'Corrida de Aniversário da Lapa',
      descricao:
        'Prova rústica realizada nas comemorações do aniversário do município, com percursos pelas ruas históricas do centro.',
    },
    {
      nome: 'Circuito Popular de Corrida de Rua — Etapa Lapa',
      descricao:
        'Etapa local de circuito popular de corrida de rua, que reúne corredores da cidade e da região.',
    },
  ],
  culturaEsportiva:
    'A identidade da Lapa mistura memória histórica — do tropeirismo ao Cerco da Lapa, episódio da Revolução Federalista de 1894 em que a cidade resistiu por 26 dias — com uma vida esportiva ao ar livre, sustentada pelo cicloturismo dos Caminhos da Lapa, pelas trilhas do Monge e por grupos locais de corrida de rua.',
  academias:
    'A oferta reúne academias de bairro e estúdios, complementados pelo atendimento ao ar livre no Parque do Monge e nas ruas planas do centro histórico.',

  destaquesFitness: [
    'Parque Estadual do Monge, com trilhas e escarpa devoniana a poucos minutos do centro.',
    'Centro histórico tombado, com ruas planas ideais para caminhada e treino leve.',
    'Cicloturismo de referência regional pelos circuitos Caminhos da Lapa.',
    'Clima ameno dos Campos Gerais favorece o aeróbico ao ar livre boa parte do ano.',
  ],

  precos: {
    avulsaMin: 50,
    avulsaMax: 115,
    mensalMin: 250,
    mensalMax: 700,
    onlineMin: 115,
    onlineMax: 350,
  },

  conclusao:
    'Cidade histórica dos Campos Gerais e parte da Região Metropolitana de Curitiba, a Lapa une patrimônio tombado, turismo religioso no Parque do Monge e uma boa vida ao ar livre. Um personal trainer ajuda a manter a constância o ano todo, ajustando o treino ao frio do inverno e aproveitando trilhas, cicloturismo e o centro histórico nas demais estações.',

  vizinhas: ['curitiba-pr', 'ponta-grossa-pr'],

  fontes: [
    { nome: 'IBGE Cidades — Lapa', url: 'https://cidades.ibge.gov.br/brasil/pr/lapa/panorama' },
    { nome: 'Prefeitura da Lapa', url: 'https://www.lapa.pr.gov.br/' },
    { nome: 'Atlas Brasil — IDHM', url: 'https://www.atlasbrasil.org.br/' },
  ],
  atualizadoEm: '2026-06-29',
};
