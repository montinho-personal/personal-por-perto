import type { Cidade } from '../../lib/types';

export const cidade: Cidade = {
  slug: 'ouro-preto-mg',
  nome: 'Ouro Preto',
  uf: 'MG',
  estado: 'Minas Gerais',
  estadoSlug: 'minas-gerais',
  regiao: 'Sudeste',
  gentilico: 'ouro-pretano',
  tipo: 'cidade',

  populacao: 74821,
  populacaoAno: 2022,
  idhm: 0.741,
  idhmClasse: 'alto',
  altitudeM: 1179,

  resumoEconomico:
    'Antiga capital de Minas e Patrimônio Mundial da UNESCO, Ouro Preto combina turismo histórico-cultural em torno do centro barroco, mineração (com forte presença de extração e beneficiamento mineral na região) e educação superior, ancorada na UFOP (Universidade Federal de Ouro Preto). O grande público universitário e o fluxo turístico dão dinamismo a uma cidade de relevo montanhoso e vocação cultural.',

  mercado:
    'O mercado é de cidade histórica e universitária, com público jovem da UFOP e demanda por academias de bairro e atendimento domiciliar. O relevo íngreme, de ladeiras de pedra e ruas em forte aclive, é ao mesmo tempo um desafio e um atrativo para treino funcional e de força, e valoriza o trabalho orientado de personal trainer para progressão segura.',

  bairrosNobres: ['Centro', 'Bauxita', 'Vila Aparecida', 'Pilar'],
  bairrosPopulares: ['Saramenha', 'Padre Faria', 'Antônio Dias', 'São Cristóvão'],

  parques: [
    {
      nome: 'Centro Histórico (conjunto barroco / UNESCO)',
      descricao:
        'O casario colonial, as igrejas de Aleijadinho e as ladeiras de pedra formam um percurso a céu aberto muito usado para caminhada e treino, com ganho de altimetria natural pelas ruas em aclive.',
    },
    {
      nome: 'Parque Estadual do Itacolomi',
      descricao:
        'Área de proteção entre Ouro Preto e Mariana, com trilhas até o Pico do Itacolomi, opção de caminhada e trekking em meio à mata e ao relevo da Serra do Espinhaço.',
    },
    {
      nome: 'Campus Morro do Cruzeiro (UFOP)',
      descricao:
        'O campus da universidade é usado por estudantes e moradores para corrida, caminhada e atividade física ao ar livre, com bastante área verde.',
    },
  ],
  ciclovias:
    'O relevo acentuado e o piso histórico de pedra limitam a infraestrutura cicloviária; o pedal na cidade é mais voltado a praticantes experientes, enquanto caminhada e corrida aproveitam as ladeiras e trilhas do entorno.',

  clima:
    'O clima é tropical de altitude (cerca de 1.179 m), com temperaturas amenas, invernos secos e frios e verões com chuvas frequentes.',
  climaTreino:
    'As temperaturas amenas favorecem o treino ao ar livre na maior parte do ano; vale atenção ao frio nas manhãs de inverno, às chuvas de verão e ao piso escorregadio das ruas de pedra após a chuva.',

  mobilidade:
    'Ouro Preto é servida pela BR-356, que liga a cidade a Belo Horizonte e Mariana, e por rodovias estaduais da região mineradora. A topografia íngreme marca o deslocamento urbano, com ruas estreitas e em forte aclive no centro histórico.',

  corridas: [
    {
      nome: 'Circuito / corridas de montanha da região',
      descricao:
        'O relevo da Serra do Espinhaço e os trechos de trilha no entorno favorecem provas de corrida de montanha e trail run, com forte ganho de altimetria.',
    },
    {
      nome: 'Corridas de rua no centro histórico',
      descricao:
        'Provas de rua aproveitam o cenário do casario barroco e as ladeiras, tornando o percurso desafiador pelos aclives e descidas de pedra.',
    },
  ],
  culturaEsportiva:
    'A cultura esportiva é marcada pelo desafio do relevo: ladeiras e trilhas atraem praticantes de corrida de montanha, trekking e treino de força, enquanto a UFOP mantém um grande público jovem e ativo, com repúblicas e vida estudantil intensa.',
  academias:
    'A oferta reúne academias de bairro e estúdios, complementados por forte demanda de atendimento domiciliar e ao ar livre, adaptado às ladeiras. O público da UFOP sustenta a procura por musculação e treino funcional.',

  destaquesFitness: [
    'Relevo de ladeiras e trilhas, ideal para treino de força e corrida de montanha.',
    'Centro histórico barroco (UNESCO) como percurso a céu aberto para caminhada.',
    'Parque Estadual do Itacolomi e trilhas da Serra do Espinhaço para trekking.',
    'Público jovem e ativo da UFOP no Morro do Cruzeiro.',
  ],

  precos: {
    avulsaMin: 55,
    avulsaMax: 125,
    mensalMin: 270,
    mensalMax: 740,
    onlineMin: 130,
    onlineMax: 370,
  },

  conclusao:
    'Cidade histórica, universitária e de relevo desafiador, Ouro Preto oferece um cenário único para treinar entre ladeiras de pedra, igrejas barrocas e trilhas de montanha. Um personal trainer ajuda a transformar o relevo íngreme em aliado, com progressão segura para moradores, estudantes da UFOP e quem treina em casa ou ao ar livre.',

  vizinhas: ['belo-horizonte-mg', 'conselheiro-lafaiete-mg', 'itabira-mg'],

  fontes: [
    { nome: 'IBGE Cidades — Ouro Preto', url: 'https://cidades.ibge.gov.br/brasil/mg/ouro-preto/panorama' },
    { nome: 'Prefeitura de Ouro Preto', url: 'https://www.ouropreto.mg.gov.br/' },
    { nome: 'Atlas Brasil — IDHM', url: 'https://www.atlasbrasil.org.br/' },
  ],
  atualizadoEm: '2026-06-29',
};
