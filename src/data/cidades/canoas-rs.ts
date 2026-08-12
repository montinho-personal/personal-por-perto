import type { Cidade } from '../../lib/types';

export const cidade: Cidade = {
  slug: 'canoas-rs',
  nome: 'Canoas',
  uf: 'RS',
  estado: 'Rio Grande do Sul',
  estadoSlug: 'rio-grande-do-sul',
  regiao: 'Sul',
  gentilico: 'canoense',
  tipo: 'cidade',

  populacao: 347657,
  populacaoAno: 2022,
  idhm: 0.75,
  idhmClasse: 'alto',
  altitudeM: 10,

  resumoEconomico:
    'Uma das maiores economias do Rio Grande do Sul, Canoas fica na Região Metropolitana de Porto Alegre, a cerca de 14 km da capital. É um forte polo industrial, ancorado na Refinaria Alberto Pasqualini (REFAP), além de metalurgia e serviços, e o segundo maior polo universitário do estado. O PIB per capita está entre os mais altos do RS.',

  mercado:
    'Cidade populosa e de renda relevante, Canoas sustenta redes comerciais (como a Smart Fit) e programas públicos de musculação nos Centros Municipais de Esporte e Lazer. A boa rede de parques amplia as opções de treino ao ar livre.',

  bairrosNobres: ['Marechal Rondon', 'Centro', 'Igara', 'Nossa Senhora das Graças'],
  bairrosPopulares: ['Mathias Velho', 'Guajuviras', 'Estância Velha', 'Niterói'],

  parques: [
    {
      nome: 'Parque Getúlio Vargas (Capão do Corvo)',
      descricao:
        'Tem pista de atletismo, pista de caminhada e ciclismo, academia ao ar livre, ginásio e sala de fitness, recebendo dezenas de milhares de visitantes por mês.',
    },
    {
      nome: 'Parque Eduardo Gomes (Parcão)',
      descricao:
        'Com mais de 283 mil m², tem pista de caminhada e dois ginásios ao ar livre (um adaptado para pessoas com deficiência).',
    },
    {
      nome: 'Estação Cidadania (Mathias Velho)',
      descricao:
        'Espaço público usado para corridas e atividades esportivas comunitárias, ampliando o acesso ao treino nos bairros.',
    },
  ],
  ciclovias:
    'A cidade tem ciclovias e ciclofaixas urbanas, e os parques contam com pista de ciclismo; a extensão total ainda não é divulgada em fonte oficial.',

  clima:
    'O clima é subtropical úmido, com verões quentes e invernos frios, em que as mínimas podem se aproximar de zero.',
  climaTreino:
    'O frio e a umidade do inverno favorecem academias indoor; nos verões quentes, vale treinar cedo ou ao entardecer, com boa hidratação.',

  mobilidade:
    'Canoas é atendida pela Trensurb (com ligação direta à Estação Mercado, em Porto Alegre, em cerca de 20 minutos) e cortada pela BR-116, eixo logístico-industrial da região — uma das cidades mais bem conectadas do estado.',

  corridas: [
    {
      nome: 'Corrida do Aniversário de Canoas',
      descricao:
        'Prova tradicional realizada em julho, com percursos de 3 km e 5 km.',
    },
    {
      nome: 'Circuito Correndo por Canoas',
      descricao:
        'Circuito municipal com cinco etapas distribuídas pelos bairros, promovido pela secretaria de esportes.',
    },
  ],
  culturaEsportiva:
    'Canoas tem forte fomento público ao esporte de base e à corrida de rua nos bairros, com equipamentos de lazer ativo bem distribuídos pela cidade.',
  academias:
    'A oferta reúne redes comerciais (como a Smart Fit) e o programa público gratuito de musculação, complementados pela boa rede de parques com pista de atletismo e academia ao ar livre.',

  destaquesFitness: [
    'Parque Getúlio Vargas: pista de atletismo e academia ao ar livre de referência.',
    'Parcão (Eduardo Gomes): ampla estrutura ao ar livre, inclusive adaptada para PcD.',
    'Programa público gratuito de musculação.',
    'Circuito de corrida municipal espalhado pelos bairros.',
  ],

  precos: {
    avulsaMin: 70,
    avulsaMax: 160,
    mensalMin: 350,
    mensalMax: 950,
    onlineMin: 170,
    onlineMax: 430,
  },

  conclusao:
    'Polo industrial e universitário da Grande Porto Alegre, Canoas tem ótima rede de parques e forte fomento público ao esporte. Um personal trainer ajuda a aproveitar o Parque Getúlio Vargas e o Parcão com método, alternando o treino ao ar livre com a academia nos meses frios.',

  vizinhas: ['porto-alegre-rs', 'caxias-do-sul-rs', 'santa-maria-rs'],

  fontes: [
    { nome: 'IBGE Cidades — Canoas', url: 'https://cidades.ibge.gov.br/brasil/rs/canoas/panorama' },
    { nome: 'Prefeitura de Canoas', url: 'https://www.canoas.rs.gov.br/' },
    { nome: 'Atlas Brasil — IDHM', url: 'https://www.atlasbrasil.org.br/' },
  ],
  atualizadoEm: '2026-08-12',

  capaArte: {
    src: '/capas-cidade/canoas-rs.webp',
    w: 1200,
    h: 900,
    alt:
      'Personal trainer em Canoas (RS) em arte que reúne musculação, a Praça do Avião, o parque Capão do Corvo e o calçadão do Centro — Personal por Perto',
    legenda:
      'Treino personalizado em Canoas: um plano feito para o seu corpo e a sua rotina, com acompanhamento profissional na cidade e região.',
  },
};
