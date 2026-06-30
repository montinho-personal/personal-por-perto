import type { Cidade } from '../../lib/types';

export const cidade: Cidade = {
  slug: 'rio-largo-al',
  nome: 'Rio Largo',
  uf: 'AL',
  estado: 'Alagoas',
  estadoSlug: 'alagoas',
  regiao: 'Nordeste',
  gentilico: 'rio-larguense',
  tipo: 'cidade',

  populacao: 93927,
  populacaoAno: 2022,
  idhm: 0.643,
  idhmClasse: 'médio',
  altitudeM: 38,

  resumoEconomico:
    'Integrante da Região Metropolitana de Maceió, Rio Largo nasceu de um engenho às margens do rio Mundaú e foi a primeira cidade industrial de Alagoas, marcada pelo ciclo sucroalcooleiro e pelo complexo fabril têxtil instalado no fim do século XIX. Hoje a economia combina o legado canavieiro da Zona da Mata, comércio e serviços e a forte presença logística do Aeroporto Internacional Zumbi dos Palmares, que fica em seu território.',

  mercado:
    'Cidade de porte médio e custo de vida abaixo do da capital, Rio Largo tem mercado de personal trainers ligado às academias de bairro, às escolinhas esportivas e ao atendimento domiciliar e em condomínios. A proximidade de Maceió amplia a oferta, com profissionais que circulam entre as duas cidades ao longo da BR-104 e da BR-316.',

  bairrosNobres: ['Centro', 'Gustavo Paiva', 'Lourenço de Albuquerque'],
  bairrosPopulares: ['Mata Rolo', 'Utinga', 'Prefeito Antônio Lins de Souza', 'Tabuleiro do Pinto'],

  parques: [
    {
      nome: 'Orla fluvial do rio Mundaú',
      descricao:
        'As margens do rio que corta a cidade e moveu as antigas fábricas têxteis concentram caminhadas e o lazer ao ar livre dos moradores, num cenário urbano de baixa altitude.',
    },
    {
      nome: 'Complexo fabril têxtil (memória industrial)',
      descricao:
        'O conjunto das antigas fábricas Cachoeira e Progresso, erguidas junto às pequenas cachoeiras do Mundaú, é o marco histórico da cidade e referência de caminhada e passeio no Centro.',
    },
    {
      nome: 'Praças e quadras de bairro',
      descricao:
        'Praças, campos e quadras poliesportivas espalhados pelos bairros sustentam o futebol, a caminhada e o treino funcional no dia a dia da população.',
    },
  ],
  ciclovias:
    'Rio Largo ainda tem infraestrutura cicloviária limitada; o deslocamento de bicicleta acontece sobretudo pelas vias urbanas e nas conexões com bairros vizinhos.',

  clima:
    'O clima é tropical quente e úmido, típico da Zona da Mata alagoana e da Região Metropolitana de Maceió, com temperaturas elevadas o ano todo e chuvas concentradas no outono e no inverno.',
  climaTreino:
    'O calor e a umidade altos pedem treino ao ar livre nas primeiras horas da manhã ou no fim da tarde, com hidratação reforçada; no período chuvoso, o treino indoor ganha espaço.',

  mobilidade:
    'Rio Largo é cortada pela BR-104 e pela BR-316, eixos que a ligam a Maceió e ao interior, e abriga o Aeroporto Internacional Zumbi dos Palmares, principal aeroporto de Alagoas. Internamente, predominam carro, motocicleta e ônibus.',

  corridas: [
    {
      nome: 'Corridas de rua locais',
      descricao:
        'Provas e caminhadas de 5 km e 10 km promovidas por iniciativas municipais e grupos esportivos movimentam o calendário, com forte adesão comunitária.',
    },
    {
      nome: 'Calendário da Região Metropolitana de Maceió',
      descricao:
        'A proximidade da capital dá aos corredores da cidade acesso ao calendário metropolitano, incluindo provas de 5 km, 10 km e 21 km em Maceió.',
    },
  ],
  culturaEsportiva:
    'A cultura esportiva de Rio Largo tem o futebol como base, somado à caminhada e à corrida de rua que crescem entre os moradores. A vida ativa se apoia em praças, quadras de bairro e nas margens do Mundaú.',
  academias:
    'A oferta de academias e estúdios se distribui pelo Centro e pelos bairros mais movimentados, complementada pelo atendimento domiciliar e em condomínios e pela proximidade das opções de Maceió.',

  destaquesFitness: [
    'Cidade da Região Metropolitana de Maceió, com mercado fitness conectado à capital pela BR-104 e BR-316.',
    'Margens do rio Mundaú e memória industrial têxtil como cenário para caminhadas e treino ao ar livre.',
    'Clima quente o ano todo permite treino externo na maior parte das estações.',
    'Custo de vida abaixo do da capital, com personal trainers atuando em academias de bairro, domicílio e condomínios.',
  ],

  precos: {
    avulsaMin: 45,
    avulsaMax: 105,
    mensalMin: 230,
    mensalMax: 660,
    onlineMin: 110,
    onlineMax: 340,
  },

  conclusao:
    'Berço industrial de Alagoas e parte da Região Metropolitana de Maceió, Rio Largo une história, vida de cidade média e proximidade da capital. Um personal trainer ajuda a transformar praças, margens do Mundaú e academias de bairro em um plano consistente, respeitando o calor e levando você do objetivo à constância.',

  vizinhas: ['maceio-al', 'arapiraca-al'],

  fontes: [
    { nome: 'IBGE Cidades — Rio Largo', url: 'https://cidades.ibge.gov.br/brasil/al/rio-largo/panorama' },
    { nome: 'Prefeitura de Rio Largo', url: 'https://www.riolargo.al.gov.br/' },
    { nome: 'Atlas Brasil — IDHM', url: 'https://www.atlasbrasil.org.br/' },
  ],
  atualizadoEm: '2026-06-29',
};
