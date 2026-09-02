import type { Cidade } from '../../lib/types';

export const cidade: Cidade = {
  slug: 'tres-lagoas-ms',
  nome: 'Três Lagoas',
  uf: 'MS',
  estado: 'Mato Grosso do Sul',
  estadoSlug: 'mato-grosso-do-sul',
  regiao: 'Centro-Oeste',
  gentilico: 'três-lagoense',
  tipo: 'cidade',

  populacao: 132152,
  populacaoAno: 2022,
  idhm: 0.744,
  idhmClasse: 'alto',
  altitudeM: 319,

  resumoEconomico:
    'No leste de Mato Grosso do Sul, na divisa com São Paulo, Três Lagoas é conhecida como a "Capital Nacional da Celulose" após o boom de fábricas de papel e celulose (Suzano, Eldorado e novas plantas). Tem forte crescimento industrial recente, o segundo maior PIB do estado e um PIB per capita elevado, atraindo trabalhadores e universitários de todo o país.',

  mercado:
    'O influxo de mão de obra industrial jovem e de alta renda, somado à população universitária, deixa a demanda por academias e personal trainers aquecida.',

  bairrosNobres: ['Centro', 'Ipês', 'Vila Verde', 'Santos Dumont'],
  bairrosPopulares: ['Santo André', 'Vila Piloto', 'Jardim Alvorada', 'Interlagos'],

  parques: [
    {
      nome: 'Lagoa Maior',
      descricao:
        'Principal cartão-postal, com pista de caminhada de mais de 2,5 km (nova pista entregue em 2025), academia ao ar livre e parquinho — uma das áreas mais usadas para atividade física.',
    },
    {
      nome: 'Parque dos Ipês',
      descricao:
        'Tem pista de cooper e playground, que floresce no inverno.',
    },
    {
      nome: 'Balneário Municipal',
      descricao:
        'Área de lagoas usada para treinos e etapas de corrida.',
    },
  ],
  ciclovias:
    'A Lagoa Maior conta com infraestrutura para ciclistas; a extensão total da malha cicloviária urbana ainda não é divulgada em fonte oficial.',

  clima:
    'O clima é tropical, quente, com verão chuvoso e temperaturas elevadas.',
  climaTreino:
    'O calor forte recomenda treinar no início da manhã ou à noite, com foco na hidratação.',

  mobilidade:
    'Três Lagoas é cortada pela BR-262 (eixo leste–oeste, com ligação a São Paulo pela ponte sobre o rio Paraná) e pela BR-158, sendo importante entroncamento ferroviário e rodoviário.',

  corridas: [
    {
      nome: 'Circuito de Corrida de Rua "Cidade das Águas"',
      descricao:
        'Três etapas gratuitas (5 km de corrida e 3 km de caminhada) passando por rios e lagoas, com final na Lagoa Maior.',
    },
    {
      nome: 'Treinões na Lagoa Maior e no Balneário',
      descricao:
        'Eventos de corrida que usam as lagoas como palco esportivo.',
    },
  ],
  culturaEsportiva:
    'Cidade em forte expansão, com público jovem industrial e universitário, Três Lagoas promove circuitos de corrida e usa suas lagoas como palco esportivo.',
  academias:
    'A oferta de academias e estúdios acompanha o boom da celulose e o público universitário, com a Lagoa Maior como epicentro do treino ao ar livre.',

  destaquesFitness: [
    'Lagoa Maior: pista de mais de 2,5 km e academia ao ar livre — epicentro do treino outdoor.',
    'Boom da celulose, que traz público jovem de alta renda.',
    'Circuito "Cidade das Águas" como evento de corrida consolidado.',
    'Segundo maior PIB de MS e PIB per capita elevado, que sustentam mercado premium.',
  ],

  precos: {
    avulsaMin: 65,
    avulsaMax: 155,
    mensalMin: 330,
    mensalMax: 900,
    onlineMin: 170,
    onlineMax: 430,
  },

  conclusao:
    'Capital da Celulose no leste de MS, Três Lagoas une crescimento industrial, público jovem e a Lagoa Maior. Um personal trainer ajuda a aproveitar a orla com método, ajustando horários e hidratação ao calor da região.',

  vizinhas: ['campo-grande-ms', 'dourados-ms'],

  capaArte: {
    src: '/capas-cidade/tres-lagoas-ms.webp',
    w: 1200,
    h: 1200,
    alt: 'Personal trainer em Três Lagoas (MS) em arte com a orla da lagoa, os coqueiros e o mirante da cidade, com o treino em primeiro plano — Personal por Perto',
    legenda: 'Treino personalizado em Três Lagoas: foco, disciplina e resultados no leste de Mato Grosso do Sul.',
  },
  fontes: [
    { nome: 'IBGE Cidades — Três Lagoas', url: 'https://cidades.ibge.gov.br/brasil/ms/tres-lagoas/panorama' },
    { nome: 'Prefeitura de Três Lagoas', url: 'https://www.treslagoas.ms.gov.br/' },
    { nome: 'Atlas Brasil — IDHM', url: 'https://www.atlasbrasil.org.br/' },
  ],
  atualizadoEm: '2026-09-01',
};
