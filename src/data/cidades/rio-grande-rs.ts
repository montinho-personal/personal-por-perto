import type { Cidade } from '../../lib/types';

export const cidade: Cidade = {
  slug: 'rio-grande-rs',
  nome: 'Rio Grande',
  uf: 'RS',
  estado: 'Rio Grande do Sul',
  estadoSlug: 'rio-grande-do-sul',
  regiao: 'Sul',
  gentilico: 'rio-grandino',
  tipo: 'cidade',

  populacao: 191900,
  populacaoAno: 2022,
  idhm: 0.744,
  idhmClasse: 'alto',

  resumoEconomico:
    'No sul do RS, Rio Grande sedia o Porto do Rio Grande, o principal porto do estado. É importante polo naval e offshore (estaleiros, refinaria e parque industrial) e polo universitário em torno da FURG. A cidade mais antiga do estado tem economia portuária, industrial e de pesca.',

  mercado:
    'O mercado é robusto, com redes locais e dezenas de academias de musculação, crossfit e pilates pela cidade e no Cassino, com cobertura de planos corporativos.',

  bairrosNobres: ['Cassino', 'Cidade Nova', 'Centro', 'Parque Marinha'],
  bairrosPopulares: ['Cohab I', 'Cohab II', 'Getúlio Vargas', 'Castelo Branco'],

  parques: [
    {
      nome: 'Praia do Cassino',
      descricao:
        'A praia contínua mais extensa do mundo, com amplas faixas de areia para corrida e treino funcional.',
    },
    {
      nome: 'Avenida Beira Mar (Cassino)',
      descricao:
        'Tem pista de caminhada, ciclovia, quiosques e passarela de acesso à praia.',
    },
    {
      nome: 'Orla do estuário da Lagoa dos Patos',
      descricao:
        'Área de caminhada à beira d\'água, no centro da cidade.',
    },
  ],
  ciclovias:
    'A Avenida Beira Mar do Cassino conta com ciclovia; a extensão total da malha urbana ainda não é divulgada em fonte oficial.',

  clima:
    'O clima é subtropical litorâneo, com forte influência marinha e ventos constantes, típicos do estuário, e invernos frios e úmidos.',
  climaTreino:
    'O vento e a umidade salina afetam a corrida na orla — vale planejar o percurso a favor e contra o vento, com proteção e hidratação.',

  mobilidade:
    'O acesso principal é pela BR-392, eixo de escoamento agrícola e de acesso ao porto.',

  corridas: [
    {
      nome: 'Corrida da Cidade do Rio Grande',
      descricao:
        'Prova comemorativa do aniversário do município.',
    },
    {
      nome: 'Corrida Rústica Dia da Marinha',
      descricao:
        'Prova de rua alusiva ao Dia da Marinha, ao lado de corridas da FURG e da associação local de corredores.',
    },
  ],
  culturaEsportiva:
    'Há cultura de corrida de rua organizada (com associação local de corredores e calendário próprio) e forte presença universitária da FURG, que move eventos esportivos.',
  academias:
    'A oferta de academias é ampla (musculação, crossfit e pilates), impulsionada pela FURG e pelo polo naval, com a Praia do Cassino como cenário ímpar de treino.',

  destaquesFitness: [
    'Praia do Cassino (a maior praia do mundo) como cenário ímpar de corrida e treino na areia.',
    'Avenida Beira Mar com pista de caminhada e ciclovia.',
    'Mercado de academias amplo, impulsionado pela FURG e pelo polo naval.',
    'Vento litorâneo como variável-chave no planejamento dos treinos ao ar livre.',
  ],

  precos: {
    avulsaMin: 70,
    avulsaMax: 165,
    mensalMin: 350,
    mensalMax: 940,
    onlineMin: 170,
    onlineMax: 440,
  },

  conclusao:
    'Cidade mais antiga do RS e principal porto do estado, Rio Grande tem na Praia do Cassino um cenário único para treino na areia. Um personal trainer ajuda a aproveitá-la com método, planejando o percurso conforme o vento constante do litoral.',

  vizinhas: ['pelotas-rs', 'porto-alegre-rs'],

  capaArte: {
    src: '/capas-cidade/rio-grande-rs.webp',
    w: 1200,
    h: 1200,
    alt: 'Personal trainer em Rio Grande (RS) em arte com os Molhes da Barra, o Mercado Público, a Catedral de São Pedro e a Praça Tamandaré, com o treino em primeiro plano — Personal por Perto',
    legenda: 'Treino personalizado em Rio Grande: força e constância na cidade mais antiga do Rio Grande do Sul.',
  },
  fontes: [
    { nome: 'IBGE Cidades — Rio Grande', url: 'https://cidades.ibge.gov.br/brasil/rs/rio-grande/panorama' },
    { nome: 'Prefeitura de Rio Grande', url: 'https://www.riogrande.rs.gov.br/' },
    { nome: 'Atlas Brasil — IDHM', url: 'https://www.atlasbrasil.org.br/' },
  ],
  atualizadoEm: '2026-09-01',
};
