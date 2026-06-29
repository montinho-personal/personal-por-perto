import type { Cidade } from '../../lib/types';

export const cidade: Cidade = {
  slug: 'santa-cruz-do-sul-rs', nome: 'Santa Cruz do Sul', uf: 'RS', estado: 'Rio Grande do Sul', estadoSlug: 'rio-grande-do-sul', regiao: 'Sul', gentilico: 'santa-cruzense', tipo: 'cidade',
  populacao: 133230, populacaoAno: 2022, idhm: 0.773, idhmClasse: 'alto', altitudeM: 180,

  resumoEconomico:
    'Principal cidade do Vale do Rio Pardo, no centro do Rio Grande do Sul, Santa Cruz do Sul é reconhecida como capital nacional do tabaco: a região concentra os maiores produtores de fumo do Brasil e a cidade abriga grandes indústrias beneficiadoras, que são a principal fonte de receita, emprego e renda. Marcada pela colonização alemã, a cidade também tem forte presença do comércio, dos serviços e da educação, com a UNISC (Universidade de Santa Cruz do Sul) como referência regional.',

  mercado:
    'Como polo regional do Vale do Rio Pardo, Santa Cruz do Sul concentra a oferta fitness de uma área que extrapola seus limites municipais, atraindo moradores das cidades vizinhas. O mercado combina academias e estúdios no eixo central e nos bairros mais estruturados com forte demanda por atendimento domiciliar, modelo valorizado pela população de maior renda ligada à indústria e aos serviços. A presença da UNISC adiciona um público jovem e ativo.',

  bairrosNobres: ['Centro', 'Higienópolis', 'Universitário', 'Country'],
  bairrosPopulares: ['Santo Inácio', 'Bom Jesus', 'Renascença', 'Margarida'],

  parques: [
    {
      nome: 'Parque da Oktoberfest',
      descricao:
        'Área de cerca de 14 hectares na região central, palco anual da Oktoberfest de Santa Cruz do Sul. Fora do período de festa, é um amplo espaço aberto usado para caminhada, corrida e lazer ao ar livre.',
    },
    {
      nome: 'Parque da Gruta',
      descricao:
        'Área verde tradicional da cidade, com trilhas, mata nativa e estrutura de lazer, procurada para caminhadas e atividades ao ar livre.',
    },
  ],
  ciclovias:
    'A cidade conta com trechos de ciclovias e ciclofaixas no perímetro urbano; a extensão total da malha cicloviária não é divulgada em fonte oficial consolidada.',

  clima:
    'O clima é subtropical, com verões quentes e invernos frios típicos do interior gaúcho.',
  climaTreino:
    'O frio do inverno favorece o treino indoor, enquanto primavera e outono oferecem ótimas condições ao ar livre no Parque da Oktoberfest e no Parque da Gruta. Um personal trainer ajuda a manter a constância nas estações de temperatura mais extrema.',

  mobilidade:
    'Santa Cruz do Sul é cortada pela RSC-287, principal acesso à cidade — marcado pelas estátuas de Fritz e Frida, símbolos da cultura alemã — e que liga a região a Porto Alegre, a cerca de 155 km. O deslocamento urbano é feito por ônibus municipais e veículos próprios; não há sistema de trens urbanos.',

  corridas: [
    {
      nome: 'Circuito de corridas de rua do Vale do Rio Pardo',
      descricao:
        'A cidade e a região mantêm um calendário de corridas de rua ao longo do ano, com provas que reúnem corredores de Santa Cruz do Sul e dos municípios vizinhos.',
    },
    {
      nome: 'Oktoberfest de Santa Cruz do Sul',
      descricao:
        'Realizada anualmente desde 1984 no Parque da Oktoberfest, é a maior festa alemã do estado e patrimônio cultural do RS; movimenta a cidade e costuma agregar atividades esportivas e recreativas ao seu entorno.',
    },
  ],
  culturaEsportiva:
    'A cultura esportiva santa-cruzense se apoia em uma tradição de eventos ao ar livre e em uma agenda regional de corridas de rua, reforçada pelo perfil universitário da cidade e pelo grande público que circula em torno do Parque da Oktoberfest.',
  academias:
    'A oferta reúne academias e estúdios no Centro e nos bairros mais estruturados, além de profissionais que atendem em domicílio. O Parque da Oktoberfest e o Parque da Gruta funcionam como grandes espaços públicos para treino ao ar livre.',

  destaquesFitness: [
    'Parque da Oktoberfest: 14 hectares na região central para caminhada e corrida.',
    'Parque da Gruta: trilhas e mata nativa para atividades ao ar livre.',
    'Público jovem e ativo ligado à UNISC.',
    'Polo regional do Vale do Rio Pardo, com oferta que atende cidades vizinhas.',
  ],

  precos: {
    avulsaMin: 55,
    avulsaMax: 130,
    mensalMin: 280,
    mensalMax: 780,
    onlineMin: 130,
    onlineMax: 380,
  },

  conclusao:
    'Capital nacional do tabaco e principal cidade do Vale do Rio Pardo, Santa Cruz do Sul une a herança da colonização alemã a um mercado fitness consolidado, entre academias no centro e atendimento domiciliar. Com o Parque da Oktoberfest e o Parque da Gruta como cenários ao ar livre, um personal trainer ajuda a manter a constância o ano todo, ajustando o treino ao frio do inverno gaúcho.',

  vizinhas: ['porto-alegre-rs', 'santa-maria-rs'],

  fontes: [
    { nome: 'IBGE Cidades — Santa Cruz do Sul', url: 'https://cidades.ibge.gov.br/brasil/rs/santa-cruz-do-sul/panorama' },
    { nome: 'Prefeitura de Santa Cruz do Sul', url: 'https://www.santacruz.rs.gov.br/' },
    { nome: 'Atlas Brasil — IDHM', url: 'https://www.atlasbrasil.org.br/' },
  ],
  atualizadoEm: '2026-06-29',
};
