import type { Cidade } from '../../lib/types';

export const cidade: Cidade = {
  slug: 'santos-sp',
  nome: 'Santos',
  uf: 'SP',
  estado: 'São Paulo',
  estadoSlug: 'sao-paulo',
  regiao: 'Sudeste',
  gentilico: 'santista',
  tipo: 'cidade',

  populacao: 418608,
  populacaoAno: 2022,
  idhm: 0.84,
  idhmClasse: 'muito alto',
  altitudeM: 2,

  resumoEconomico:
    'Sede do maior porto da América Latina, responsável por mais de um quarto da balança comercial brasileira, Santos tem economia diversificada entre logística portuária, turismo, pesca, comércio e o setor de óleo e gás. Com IDHM muito alto (0,840) e uma das orlas urbanas mais bonitas do país, é uma cidade plana e litorânea feita para a vida ao ar livre.',

  mercado:
    'A forte cultura de praia faz da orla de Santos uma verdadeira "pista de treino" para amadores e profissionais — corrida, ciclismo e treino funcional acontecem o dia inteiro à beira-mar. A oferta de academias é grande na faixa Gonzaga–Boqueirão–Ponta da Praia, complementando o treino ao ar livre.',

  bairrosNobres: ['Gonzaga', 'Ponta da Praia', 'Boqueirão', 'Embaré'],
  bairrosPopulares: ['Caneleira', 'Saboó', 'Castelo', 'Bom Retiro'],

  parques: [
    {
      nome: 'Orla de Santos e Jardins da Orla',
      descricao:
        'Cerca de 7 km contínuos de orla (de José Menino à Ponta da Praia), com o maior jardim de orla do mundo (recorde Guinness), calçadões largos, quadras e academias ao ar livre — o grande corredor de treino da cidade.',
    },
    {
      nome: 'Parque Roberto Mário Santini',
      descricao:
        'Parque construído sobre o mar, na Ponta da Praia, é área de lazer e treino com vista privilegiada para a baía.',
    },
    {
      nome: 'Academias ao ar livre da praia',
      descricao:
        'Equipamentos de ginástica e quadras poliesportivas distribuídos ao longo de todo o calçadão da praia, de acesso livre.',
    },
  ],
  ciclovias:
    'A ciclovia tradicional da orla acompanha os cerca de 7 km da praia — uma das mais usadas da região, com sistema de aluguel de bicicletas.',

  clima:
    'O clima é tropical úmido litorâneo (entre cerca de 20 °C e 28 °C), com verões quentes e chuvosos e invernos amenos.',
  climaTreino:
    'Dá para treinar ao ar livre o ano todo. No verão, com calor e umidade, o início da manhã e o fim da tarde são os melhores horários — e a cidade plana facilita corrida e ciclismo.',

  mobilidade:
    'Cidade plana, ideal para bicicleta e caminhada, Santos é acessada pelo Sistema Anchieta–Imigrantes, que liga à capital e ao ABC, e conta com VLT na Baixada Santista.',

  corridas: [
    {
      nome: 'Track&Field Run Series Santos',
      descricao:
        'Etapas de um dos maiores circuitos de corrida do país, realizadas na orla santista.',
    },
    {
      nome: 'Provas de rua na orla',
      descricao:
        'A orla recebe diversas corridas ao longo do ano, com largadas em pontos icônicos como o Aquário e a Ponta da Praia.',
    },
  ],
  culturaEsportiva:
    'Santos tem uma cultura de praia muito forte — corrida, ciclismo e esportes de areia e aquáticos acontecem o tempo todo na orla — e tradição no futebol, com o Santos FC. A vida ativa é parte da identidade santista.',
  academias:
    'A oferta de academias é grande nos bairros da orla (Gonzaga, Boqueirão, Embaré, Ponta da Praia), e os Jardins da Orla funcionam como uma enorme extensão ao ar livre dessas estruturas.',

  destaquesFitness: [
    'Orla de cerca de 7 km como academia a céu aberto.',
    'Maior jardim de orla do mundo (recorde Guinness) e ciclovia tradicional.',
    'Cidade plana, ideal para corrida e ciclismo.',
    'Calendário ativo de corridas de rua à beira-mar.',
  ],

  precos: {
    avulsaMin: 85,
    avulsaMax: 190,
    mensalMin: 420,
    mensalMax: 1150,
    onlineMin: 190,
    onlineMax: 480,
  },

  conclusao:
    'Com uma das orlas mais icônicas do Brasil e clima de praia o ano todo, Santos é feita para quem gosta de treinar ao ar livre. Um personal trainer ajuda a transformar os 7 km da orla e as academias da cidade em um plano consistente, ajustado ao seu objetivo.',

  vizinhas: ['sao-paulo-sp', 'sao-bernardo-do-campo-sp', 'santo-andre-sp'],

  fontes: [
    { nome: 'IBGE Cidades — Santos', url: 'https://cidades.ibge.gov.br/brasil/sp/santos/panorama' },
    { nome: 'Prefeitura de Santos', url: 'https://www.santos.sp.gov.br/' },
    { nome: 'Atlas Brasil — IDHM', url: 'https://www.atlasbrasil.org.br/' },
  ],
  atualizadoEm: '2026-06-29',
};
