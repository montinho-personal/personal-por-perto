import type { Cidade } from '../../lib/types';

export const cidade: Cidade = {
  slug: 'ico-ce',
  nome: 'Icó',
  uf: 'CE',
  estado: 'Ceará',
  estadoSlug: 'ceara',
  regiao: 'Nordeste',
  gentilico: 'icoense',
  tipo: 'cidade',

  populacao: 62642,
  populacaoAno: 2022,
  idhm: 0.606,
  idhmClasse: 'médio',
  altitudeM: 145,

  resumoEconomico:
    'Cidade histórica do sertão central cearense, às margens do rio Salgado, Icó foi a terceira vila instalada no Ceará e um dos grandes centros comerciais da província no auge do comércio de carne salgada e boiadas, ao lado de Sobral e Aracati. Hoje a economia se apoia na agropecuária (milho, feijão, mandioca, banana, castanha de caju e criação de bovinos, caprinos, ovinos e aves), no comércio e nos serviços que atendem a microrregião do Vale do Salgado, com peso relevante da administração pública. A cidade preserva um dos conjuntos arquitetônicos e urbanísticos mais importantes do estado, tombado pelo Iphan em 1998.',

  mercado:
    'Como cidade média do interior cearense, Icó tem um mercado fitness ainda em formação, concentrado em academias locais de musculação e treino funcional. A procura por personal trainers tende a vir de quem busca acompanhamento mais individualizado para lidar com o calor do semiárido e para aproveitar as praças e o entorno do rio como espaços de treino ao ar livre.',

  bairrosNobres: ['Centro', 'Cidade Nova', 'Novo Centro', 'Senhor do Bonfim'],
  bairrosPopulares: ['Alto do Cruzeiro', 'São Vicente de Paula', 'Manoel Mariano', 'Posto Novo'],

  parques: [
    {
      nome: 'Praça do Teatro da Ribeira dos Icós',
      descricao:
        'Coração do centro histórico, abriga o Teatro da Ribeira dos Icós (1860), o mais antigo do Ceará, cercado por casarões e sobrados tombados. O largo e as ruas históricas do entorno são um percurso natural para caminhada leve em meio ao patrimônio.',
    },
    {
      nome: 'Conjunto arquitetônico histórico (Rua Ilídio Sampaio)',
      descricao:
        'Trecho mais antigo da cidade, com sobrados de fachadas em azulejos portugueses e gradis, tombado pelo Iphan. As calçadas e o casario formam um circuito a pé que mistura exercício e contato com a história de Icó.',
    },
    {
      nome: 'Margens do rio Salgado',
      descricao:
        'O rio que deu origem aos primeiros povoados (o Icó de Cima e o Icó de Baixo) ainda marca a paisagem urbana; seu entorno serve de referência para caminhadas e pedaladas, condicionado ao regime de chuvas do semiárido.',
    },
  ],
  ciclovias:
    'A estrutura cicloviária é modesta e concentrada na área urbana; boa parte do pedal e da corrida acontece nas vias do centro e nos acessos da cidade, exigindo atenção ao tráfego.',

  clima:
    'O clima é tropical quente semiárido, típico do sertão central cearense, com temperaturas altas o ano inteiro e médias térmicas elevadas. A chuva se concentra no primeiro semestre (a quadra chuvosa, entre janeiro e maio), seguida de um longo período seco e quente na segunda metade do ano.',
  climaTreino:
    'O calor constante pede treinar bem cedo ou no fim da tarde, com hidratação reforçada e roupas leves; nos picos de calor e no período seco, ambientes climatizados são a opção mais segura, enquanto as manhãs da quadra chuvosa tendem a ser mais amenas para o treino ao ar livre.',

  mobilidade:
    'Icó é cortada pela BR-116, principal ligação por via terrestre com Fortaleza e com o interior, o que faz da cidade um ponto de passagem e de comércio no Vale do Salgado. O deslocamento interno é feito sobretudo por veículos próprios, motos e transporte rodoviário regional.',

  corridas: [
    {
      nome: 'Corridas de rua no calendário regional',
      descricao:
        'A cidade e a microrregião do Vale do Salgado acompanham o movimento de corridas de rua do interior cearense, com provas pontuais ligadas a datas comemorativas e a grupos de corrida locais.',
    },
    {
      nome: 'Treinos em grupo e caminhadas',
      descricao:
        'Grupos de corrida e caminhada usam as praças do centro histórico e as vias urbanas como percurso, aproveitando os horários mais frescos do dia no semiárido.',
    },
  ],
  culturaEsportiva:
    'A cultura esportiva combina o uso das praças e do centro histórico para caminhada e corrida com a tradição festiva da cidade, marcada por grandes celebrações de forró que mobilizam a população. O calor do sertão molda os horários de quem treina ao ar livre.',
  academias:
    'A oferta é formada principalmente por academias locais de musculação e treino funcional, distribuídas pelo centro e pelos bairros residenciais, com porte compatível com uma cidade média do interior nordestino.',

  destaquesFitness: [
    'Centro histórico tombado pelo Iphan, com praças e casario que viram percurso de caminhada.',
    'Praça do Teatro da Ribeira dos Icós, em torno do teatro mais antigo do Ceará.',
    'Clima quente semiárido, que exige planejamento de horário e hidratação no treino.',
    'Cidade da BR-116 e do Vale do Salgado, com economia de agropecuária, comércio e serviços.',
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
    'Cidade histórica e quente do sertão central cearense, Icó pede um treino adaptado ao clima do semiárido e que aproveite suas praças e o centro tombado como espaço ao ar livre. Um personal trainer ajuda a organizar a rotina respeitando o calor, escolhendo os melhores horários e mantendo a constância ao longo das estações seca e chuvosa.',

  vizinhas: ['iguatu-ce', 'crato-ce'],

  fontes: [
    { nome: 'IBGE Cidades — Icó', url: 'https://cidades.ibge.gov.br/brasil/ce/ico/panorama' },
    { nome: 'Prefeitura de Icó', url: 'https://www.ico.ce.gov.br/' },
    { nome: 'Atlas Brasil — IDHM', url: 'https://www.atlasbrasil.org.br/' },
  ],
  atualizadoEm: '2026-06-29',
};
