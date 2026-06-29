import type { Cidade } from '../../lib/types';

export const cidade: Cidade = {
  slug: 'embu-das-artes-sp',
  nome: 'Embu das Artes',
  uf: 'SP',
  estado: 'São Paulo',
  estadoSlug: 'sao-paulo',
  regiao: 'Sudeste',
  gentilico: 'embuense',
  tipo: 'cidade',

  populacao: 250691,
  populacaoAno: 2022,
  idhm: 0.735,
  idhmClasse: 'alto',
  altitudeM: 775,

  resumoEconomico:
    'Estância turística da zona sudoeste da Região Metropolitana de São Paulo, Embu das Artes é nacionalmente conhecida pelo turismo de arte e artesanato em torno de seu centro histórico colonial. A tradicional Feira de Artes e Artesanato, realizada desde 1969 aos sábados, domingos e feriados, reúne centenas de expositores e atrai grande fluxo de visitantes, sustentando uma economia de comércio, gastronomia, ateliês, galerias e serviços ligados ao turismo cultural.',

  mercado:
    'O mercado fitness é principalmente de bairro, voltado a moradores e famílias, com academias de público amplo e estúdios menores. O perfil turístico e o forte movimento de fim de semana no centro histórico geram demanda complementar de bem-estar e atividade ao ar livre, e bairros residenciais mais tranquilos abrem espaço para o atendimento personalizado a domicílio.',

  bairrosNobres: ['Jardim Santa Emília', 'Jardim Vista Alegre', 'Centro', 'Jardim dos Pinheiros'],
  bairrosPopulares: ['Ressaca', 'Valo Verde', 'Pinheirinho', 'Jardim Independência'],

  parques: [
    {
      nome: 'Parque do Lago Francisco Rizzo',
      descricao:
        'Principal área verde da cidade, com lago, pista de caminhada e corrida, academia ao ar livre e espaços de lazer; é palco recorrente de corridas de rua e eventos esportivos do município.',
    },
    {
      nome: 'Centro Histórico e Largo dos Jesuítas',
      descricao:
        'Conjunto de ruas, largos e o Largo dos Jesuítas, com calçamento e arquitetura colonial; muito caminhável e procurado para caminhadas, sobretudo nos fins de semana de feira.',
    },
  ],
  ciclovias:
    'A malha cicloviária urbana ainda é pouco consolidada; o deslocamento por bicicleta concentra-se em vias locais e no entorno do Parque Francisco Rizzo.',

  clima:
    'O clima é tropical de altitude, ameno (cidade no planalto, a cerca de 775 m), com verões chuvosos e invernos secos e mais frios.',
  climaTreino:
    'O clima é favorável ao treino ao ar livre quase o ano todo, com atenção às manhãs frias de inverno e às pancadas de chuva no fim das tardes de verão.',

  mobilidade:
    'Embu das Artes fica a cerca de 28 a 30 km da capital e é servida pela Rodovia Régis Bittencourt (BR-116) e pelo Rodoanel Mário Covas (SP-021), com ligação rápida à zona oeste e sul de São Paulo. O transporte é majoritariamente por ônibus municipais e intermunicipais.',

  corridas: [
    {
      nome: 'Corrida de Aniversário de Embu das Artes',
      descricao:
        'Prova comemorativa do aniversário do município, com percurso de 5 km, tradicional no calendário esportivo local.',
    },
    {
      nome: 'Corrida Embu Folia',
      descricao:
        'Corrida de rua de 5 km realizada no período de Carnaval, com largada na região do Parque Francisco Rizzo.',
    },
  ],
  culturaEsportiva:
    'Há um calendário ativo de corridas de rua promovidas pela prefeitura e por equipes locais (provas de aniversário, Embu Folia e provas de fim de ano), além do uso intenso do Parque Francisco Rizzo para caminhada e atividade ao ar livre.',
  academias:
    'A oferta é predominantemente de academias de bairro e estúdios de menor porte voltados aos moradores, complementada pelo Parque Francisco Rizzo como principal espaço de treino outdoor da cidade.',

  destaquesFitness: [
    'Parque do Lago Francisco Rizzo com pista de corrida, academia ao ar livre e eventos esportivos — principal polo de treino outdoor.',
    'Centro histórico colonial muito caminhável, com grande fluxo turístico nos fins de semana.',
    'Calendário consolidado de corridas de rua (aniversário da cidade, Embu Folia).',
    'Clima ameno de planalto, favorável à atividade ao ar livre quase o ano inteiro.',
  ],

  precos: {
    avulsaMin: 60,
    avulsaMax: 130,
    mensalMin: 300,
    mensalMax: 750,
    onlineMin: 150,
    onlineMax: 400,
  },

  conclusao:
    'Estância turística conhecida pela arte e pelo artesanato, Embu das Artes combina um centro histórico caminhável com o Parque Francisco Rizzo e um calendário ativo de corridas de rua. Para um personal trainer, a cidade oferece um mercado de bairro estável, demanda por treino ao ar livre e espaço para o atendimento personalizado em bairros residenciais tranquilos, a poucos minutos da capital.',

  vizinhas: ['taboao-da-serra-sp', 'cotia-sp', 'sao-paulo-sp'],

  fontes: [
    { nome: 'IBGE Cidades — Embu das Artes', url: 'https://cidades.ibge.gov.br/brasil/sp/embu-das-artes/panorama' },
    { nome: 'Prefeitura de Embu das Artes', url: 'https://cidadeembudasartes.sp.gov.br/' },
    { nome: 'Atlas Brasil — IDHM', url: 'https://www.atlasbrasil.org.br/' },
  ],
  atualizadoEm: '2026-06-29',
};
