import type { Cidade } from '../../lib/types';

export const cidade: Cidade = {
  slug: 'castro-pr',
  nome: 'Castro',
  uf: 'PR',
  estado: 'Paraná',
  estadoSlug: 'parana',
  regiao: 'Sul',
  gentilico: 'castrense',
  tipo: 'cidade',

  populacao: 73075,
  populacaoAno: 2022,
  idhm: 0.703,
  idhmClasse: 'alto',
  altitudeM: 999,

  resumoEconomico:
    'Reconhecida por lei federal como Capital Nacional do Leite, Castro tem na agropecuária e na agroindústria sua principal vocação econômica, com destaque para a produção leiteira nos Campos Gerais do Paraná. A cooperativa Castrolanda, fundada por imigrantes holandeses chegados a partir de 1951, é referência nacional em leite, grãos e carnes e ancora boa parte da economia local.',

  mercado:
    'O mercado fitness é típico de cidade média do interior paranaense, com academias de bairro, estúdios e personal trainers atendendo no Centro e nos bairros residenciais. O clima frio no inverno e os parques urbanos reforçam a busca por treino orientado e por atividades ao ar livre nas estações mais amenas.',

  bairrosNobres: ['Centro', 'Vila Rio Branco', 'Jardim Esplanada', 'Bairro Alto'],
  bairrosPopulares: ['Jardim Cará-Cará', 'Vila Lago Azul', 'Borba Gato', 'Colônia Santa Cruz'],

  parques: [
    {
      nome: 'Parque Lacustre',
      descricao:
        'Área central em torno de um lago, com pista de caminhada e corrida, ciclovia e estrutura de lazer, um dos pontos mais usados para treino ao ar livre na cidade.',
    },
    {
      nome: 'Colônia Castrolanda',
      descricao:
        'Núcleo da imigração holandesa, com o moinho De Immigrant, o Memorial da Imigração e amplas áreas abertas; espaço usado para caminhadas e eventos esportivos em meio à paisagem rural.',
    },
    {
      nome: 'Fazenda Capão Alto',
      descricao:
        'Conjunto histórico ligado ao Caminho das Tropas e ao ciclo do tropeirismo, tombado pelo Estado, com casarão colonial e área para visitação e caminhadas.',
    },
  ],
  ciclovias:
    'A cidade tem trechos de ciclovia, com destaque para o entorno do Parque Lacustre, integrando lazer e deslocamento ativo no Centro.',

  clima:
    'O clima é subtropical úmido (Cfb) dos Campos Gerais, em altitude de cerca de 999 m, com verões amenos e invernos frios, sujeitos a geadas e a mínimas baixas nas madrugadas.',
  climaTreino:
    'No inverno, o frio e as geadas pedem aquecimento mais longo e roupa térmica, sobretudo nas manhãs; no restante do ano, o clima ameno de altitude favorece a corrida e o treino ao ar livre.',

  mobilidade:
    'Castro é cortada pela PR-151, que liga a cidade a Ponta Grossa e ao restante dos Campos Gerais, principal eixo de acesso e deslocamento regional do município.',

  corridas: [
    {
      nome: 'Corrida e caminhada na Castrolanda',
      descricao:
        'Eventos de corrida e caminhada realizados em meio à paisagem rural da colônia holandesa, com percursos para adultos e provas infantis para incentivar a prática esportiva em família.',
    },
    {
      nome: 'Provas de rua de Castro',
      descricao:
        'Corridas de rua e rústicas promovidas no calendário esportivo local, com largadas e percursos pelas ruas do Centro e bairros próximos.',
    },
  ],
  culturaEsportiva:
    'A cultura esportiva combina a herança do tropeirismo e a influência holandesa de Castrolanda com uma cena de corrida e caminhada que aproveita os parques, a colônia e o clima ameno de altitude.',
  academias:
    'A oferta reúne academias de bairro, estúdios e personal trainers, complementados pelos parques e áreas abertas como o Parque Lacustre e a Colônia Castrolanda para treino ao ar livre.',

  destaquesFitness: [
    'Parque Lacustre com pista de caminhada e corrida, ciclovia e estrutura de lazer.',
    'Colônia Castrolanda e Fazenda Capão Alto como áreas abertas para caminhadas e eventos.',
    'Eventos de corrida e caminhada no calendário esportivo local.',
    'Clima ameno de altitude (cerca de 999 m) favorece o aeróbico ao ar livre fora do inverno.',
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
    'Capital Nacional do Leite e marcada pela herança dos tropeiros e da colônia holandesa de Castrolanda, Castro reúne parques urbanos, áreas rurais e clima ameno de altitude. Um personal trainer ajuda a manter a constância o ano todo, ajustando o treino ao frio e às geadas do inverno e aproveitando as estações mais amenas ao ar livre.',

  vizinhas: ['ponta-grossa-pr', 'telemaco-borba-pr'],

  fontes: [
    { nome: 'IBGE Cidades — Castro', url: 'https://cidades.ibge.gov.br/brasil/pr/castro/panorama' },
    { nome: 'Prefeitura de Castro', url: 'https://castro.atende.net/' },
    { nome: 'Atlas Brasil — IDHM', url: 'https://www.atlasbrasil.org.br/' },
  ],
  atualizadoEm: '2026-06-29',
};
