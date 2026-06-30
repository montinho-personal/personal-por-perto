import type { Cidade } from '../../lib/types';

export const cidade: Cidade = {
  slug: 'congonhas-mg',
  nome: 'Congonhas',
  uf: 'MG',
  estado: 'Minas Gerais',
  estadoSlug: 'minas-gerais',
  regiao: 'Sudeste',
  gentilico: 'congonhense',
  tipo: 'cidade',

  populacao: 52890,
  populacaoAno: 2022,
  idhm: 0.753,
  idhmClasse: 'alto',
  altitudeM: 874,

  resumoEconomico:
    'Congonhas é um dos principais polos de mineração de ferro do Quadrilátero Ferrífero, com economia ancorada na extração e no beneficiamento mineral — destaque para a Mina Casa de Pedra, operada pela CSN. Ao lado da mineração, o turismo religioso e histórico tem peso relevante: o Santuário do Bom Jesus de Matosinhos, com os doze Profetas esculpidos por Aleijadinho em pedra-sabão, é Patrimônio Mundial da UNESCO desde 1985. Localizada no entroncamento entre o Quadrilátero Ferrífero e o Campo das Vertentes, a cidade combina forte arrecadação industrial com vocação cultural.',

  mercado:
    'O mercado é típico de cidade média mineira de base industrial, com renda sustentada pela mineração e por uma classe trabalhadora ligada à CSN e a empresas do setor. A demanda por personal trainers se concentra em academias de bairro, estúdios e atendimento domiciliar, com público que valoriza acompanhamento individual para condicionamento, emagrecimento e saúde. O relevo de morros e o clima ameno favorecem o treino ao ar livre, ampliando o espaço para o trabalho orientado.',

  bairrosNobres: ['Centro', 'Residencial', 'Plataforma', 'Praça'],
  bairrosPopulares: ['Santa Quitéria', 'Marília', 'Pides', 'Frei Inocêncio'],

  parques: [
    {
      nome: 'Santuário do Bom Jesus de Matosinhos (UNESCO)',
      descricao:
        'Conjunto barroco com a igreja, os seis passos da Paixão e o adro dos doze Profetas de Aleijadinho. O largo, as escadarias e o entorno arborizado são muito usados para caminhada, com ganho de altimetria pelas rampas e degraus.',
    },
    {
      nome: 'Parque da Cachoeira',
      descricao:
        'Área verde de lazer da cidade, com espaço para caminhada, atividade física ao ar livre e encontro de famílias, opção popular para treino leve e recreação.',
    },
    {
      nome: 'Morros e mirantes do entorno',
      descricao:
        'O relevo acidentado do Quadrilátero Ferrífero cria subidas e mirantes próximos à área urbana, aproveitados para caminhada, corrida em aclive e treino de pernas a céu aberto.',
    },
  ],
  ciclovias:
    'A malha cicloviária é limitada e o relevo de morros torna o pedal mais exigente; o uso da bicicleta é mais comum entre praticantes condicionados, enquanto caminhada e corrida aproveitam ruas em aclive e as áreas do entorno do Santuário.',

  clima:
    'O clima é tropical de altitude (cerca de 874 m), na transição entre o Quadrilátero Ferrífero e o Campo das Vertentes, com temperaturas amenas, invernos secos e mais frios e verões com chuvas frequentes.',
  climaTreino:
    'As temperaturas amenas favorecem o treino ao ar livre na maior parte do ano; convém atenção ao frio das manhãs de inverno, às chuvas de verão e ao piso escorregadio em ladeiras e escadarias após a chuva.',

  mobilidade:
    'Congonhas é cortada pela BR-040, principal eixo que liga a cidade a Belo Horizonte (a cerca de 90 km) e ao sentido Rio de Janeiro, integrando-a também à região de Conselheiro Lafaiete e Ouro Branco. O relevo de morros marca os deslocamentos urbanos, com ruas em aclive em vários bairros.',

  corridas: [
    {
      nome: 'Corridas de rua de Congonhas',
      descricao:
        'Provas de rua promovidas na cidade aproveitam o cenário histórico e o relevo, com percursos que incluem trechos de subida pelas ruas próximas ao centro e ao Santuário.',
    },
    {
      nome: 'Trilhas e corrida em aclive no entorno',
      descricao:
        'O relevo do Quadrilátero Ferrífero oferece subidas e trilhas no entorno da cidade, aproveitadas por praticantes de corrida em montanha e caminhada de maior intensidade.',
    },
  ],
  culturaEsportiva:
    'A cultura esportiva mistura o cotidiano de cidade industrial mineira com o relevo de morros, que estimula caminhada, corrida em aclive e treino funcional. A Romaria e a Festa do Jubileu do Bom Jesus de Matosinhos movimentam a cidade e reforçam o fluxo de visitantes, enquanto academias de bairro sustentam a prática regular dos moradores.',
  academias:
    'A oferta reúne academias de bairro e estúdios, complementados por atendimento domiciliar e treino ao ar livre adaptado às ladeiras. O público ligado à mineração e ao comércio local sustenta a procura por musculação, treino funcional e acompanhamento individual.',

  destaquesFitness: [
    'Santuário do Bom Jesus de Matosinhos (UNESCO) e seu entorno para caminhada com ganho de altimetria.',
    'Relevo de morros do Quadrilátero Ferrífero, ideal para corrida em aclive e treino de pernas.',
    'Clima tropical de altitude com temperaturas amenas para treino ao ar livre o ano todo.',
    'Parque da Cachoeira e áreas verdes para atividade física e recreação.',
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
    'Cidade de mineração e patrimônio mundial, Congonhas oferece um cenário singular para treinar entre morros do Quadrilátero Ferrífero, ladeiras e o conjunto barroco do Bom Jesus de Matosinhos. Um personal trainer ajuda a transformar o relevo em aliado, com progressão segura para moradores que treinam em academias, em casa ou ao ar livre.',

  vizinhas: ['ouro-preto-mg', 'conselheiro-lafaiete-mg', 'belo-horizonte-mg'],

  fontes: [
    { nome: 'IBGE Cidades — Congonhas', url: 'https://cidades.ibge.gov.br/brasil/mg/congonhas/panorama' },
    { nome: 'Prefeitura de Congonhas', url: 'https://www.congonhas.mg.gov.br/' },
    { nome: 'Atlas Brasil — IDHM', url: 'https://www.atlasbrasil.org.br/' },
  ],
  atualizadoEm: '2026-06-29',
};
