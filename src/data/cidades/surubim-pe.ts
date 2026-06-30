import type { Cidade } from '../../lib/types';

export const cidade: Cidade = {
  slug: 'surubim-pe',
  nome: 'Surubim',
  uf: 'PE',
  estado: 'Pernambuco',
  estadoSlug: 'pernambuco',
  regiao: 'Nordeste',
  gentilico: 'surubinense',
  tipo: 'cidade',

  populacao: 64120,
  populacaoAno: 2022,
  idhm: 0.635,
  idhmClasse: 'médio',
  altitudeM: 409,

  resumoEconomico:
    'Surubim é um dos polos do Agreste Setentrional pernambucano, a cerca de 120 km de Recife. A economia gira em torno do comércio e dos serviços que atendem os municípios vizinhos, somados a uma forte vocação agropecuária: a região é reconhecida pela produção de leite, ovos, gado e banana, com peso relevante na pauta agrícola do estado. As feiras e o comércio regional movimentam o centro e atraem moradores de toda a microrregião.',

  mercado:
    'Por ser uma cidade média do interior nordestino, o mercado fitness de Surubim é enxuto e concentrado em academias locais de musculação e treino funcional. A procura por personal trainers cresce entre quem busca acompanhamento individualizado para lidar com o calor do agreste e com a rotina de quem treina cedo ou no fim do dia, aproveitando praças e o entorno arborizado.',

  bairrosNobres: ['Centro', 'Boa Vista', 'Santo Antônio', 'Heliópolis'],
  bairrosPopulares: ['São Sebastião', 'COHAB', 'Alto da Conceição', 'Nossa Senhora das Graças'],

  parques: [
    {
      nome: 'Parque Ecológico José Irineu Cabral',
      descricao:
        'Área de preservação e educação ambiental dedicada à flora nativa da Caatinga, com viveiro de mudas de variedades do semiárido. O espaço serve de área de lazer e contato com a natureza para a comunidade surubinense.',
    },
    {
      nome: 'Praças do Centro',
      descricao:
        'O conjunto de praças da área central, no entorno da igreja matriz, concentra a vida pública da cidade e funciona como ponto de encontro para caminhada leve e atividades ao ar livre no começo da manhã e no fim da tarde.',
    },
    {
      nome: 'Açudes e entorno rural',
      descricao:
        'Os açudes e as estradas vicinais que cercam a zona urbana oferecem percursos para caminhada, corrida e pedal em meio à paisagem do agreste, condicionados ao período de estiagem e às chuvas.',
    },
  ],
  ciclovias:
    'A estrutura cicloviária é modesta e restrita a poucos trechos da área urbana; boa parte do pedal e da corrida acontece nas vias do centro e nas estradas vicinais que ligam a cidade às comunidades rurais.',

  clima:
    'O clima é tropical semiárido, típico do agreste pernambucano: quente durante o dia, com amplitude térmica que torna as manhãs e noites mais amenas graças à altitude superior a 400 metros. As chuvas se concentram no outono e no inverno (de março a julho), e o restante do ano é marcado por tempo seco e estiagens periódicas.',
  climaTreino:
    'O calor diurno pede treino bem cedo ou no fim da tarde, com hidratação reforçada, enquanto as manhãs mais frescas favorecem a atividade ao ar livre. No período seco, a baixa umidade exige atenção redobrada à hidratação; ambientes climatizados são a alternativa nos horários de pico de calor.',

  mobilidade:
    'A BR-104 é o principal eixo rodoviário de Surubim, ligando a cidade a Caruaru, a Limoeiro e ao restante do agreste, além de conectar a região a Recife. O transporte urbano é feito por ônibus e vans intermunicipais, e o fluxo de comércio regional reforça o papel da cidade como entroncamento da microrregião.',

  corridas: [
    {
      nome: 'Corrida de Emancipação de Surubim',
      descricao:
        'Prova de rua realizada em torno das comemorações de aniversário do município, com largada na área central e percursos pelas vias urbanas.',
    },
    {
      nome: 'Corrida do Padroeiro',
      descricao:
        'Corrida de rua associada às festividades religiosas do padroeiro da cidade, que reúne corredores locais e da região do agreste.',
    },
  ],
  culturaEsportiva:
    'A cultura esportiva surubinense combina as praças do centro como espaço de caminhada e convívio, provas de corrida ligadas a datas cívicas e religiosas, e o uso das estradas vicinais para pedal e corrida no campo — tudo moldado pelo ritmo do agreste e por suas estações seca e chuvosa.',
  academias:
    'A oferta é formada principalmente por academias locais de musculação e treino funcional, distribuídas pelo centro e pelos bairros residenciais, com porte compatível com uma cidade média do interior nordestino.',

  destaquesFitness: [
    'Polo do Agreste Setentrional, com economia de comércio regional e forte agropecuária (leite, ovos e banana).',
    'Altitude acima de 400 metros, que ameniza as manhãs e noites apesar do calor do agreste.',
    'Parque Ecológico José Irineu Cabral e praças do centro como espaços de atividade ao ar livre.',
    'BR-104 como eixo que conecta a cidade a Caruaru, Limoeiro e Recife.',
  ],

  precos: {
    avulsaMin: 45,
    avulsaMax: 105,
    mensalMin: 230,
    mensalMax: 640,
    onlineMin: 105,
    onlineMax: 330,
  },

  conclusao:
    'Cidade quente e movimentada do agreste pernambucano, Surubim pede um treino adaptado ao clima semiárido e que aproveite as manhãs frescas, as praças e o entorno rural. Um personal trainer ajuda a organizar a rotina respeitando o calor, definindo os melhores horários e mantendo a constância ao longo das estações seca e chuvosa.',

  vizinhas: ['caruaru-pe', 'santa-cruz-do-capibaribe-pe'],

  fontes: [
    { nome: 'IBGE Cidades — Surubim', url: 'https://cidades.ibge.gov.br/brasil/pe/surubim/panorama' },
    { nome: 'Prefeitura de Surubim', url: 'https://surubim.pe.gov.br/' },
    { nome: 'Atlas Brasil — IDHM', url: 'https://www.atlasbrasil.org.br/' },
  ],
  atualizadoEm: '2026-06-29',
};
