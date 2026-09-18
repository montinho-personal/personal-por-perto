import type { Cidade } from '../../lib/types';

export const cidade: Cidade = {
  slug: 'campos-altos-mg',
  nome: 'Campos Altos',
  uf: 'MG',
  estado: 'Minas Gerais',
  estadoSlug: 'minas-gerais',
  regiao: 'Sudeste',
  tipo: 'cidade',

  populacao: 12979,
  populacaoAno: 2022,
  idhm: 0.702,
  idhmClasse: 'médio',
  pibPerCapita: 40439,
  pibPerCapitaAno: 2023,
  altitudeM: 1050,

  resumoEconomico:
    'No oeste de Minas, entre a Serra da Canastra, a Serra da Saudade e a Serra do Salitre, Campos Altos é uma cidade pequena com uma especialidade grande: café. Em cerca de 9,1 mil hectares, o município concentra algo em torno de 15 milhões de pés e produz aproximadamente 150 mil sacas de 60 kg por ano. O relevo montanhoso, a altitude média perto de 1.100 metros na região e o regime de chuvas favorável reduzem a necessidade de irrigação — condição que ajuda a explicar o perfil sensorial do café local, descrito com notas de chocolate, melado, caramelo e frutas vermelhas. Em 2024 a Associação dos Cafeicultores de Campos Altos, com apoio do Sebrae Minas, encaminhou o reconhecimento da região como marca território, movimento que dá identidade de origem à produção. O PIB per capita fica em torno de R$ 40,4 mil.',

  mercado:
    'O mercado fitness é pequeno e de perfil interiorano, formado por academias locais e por profissionais que atendem em domicílio e nas propriedades rurais. A demanda vem principalmente de produtores, trabalhadores da lavoura e famílias ligadas à cafeicultura, com sazonalidade marcada: a colheita concentra jornada e desgaste físico em poucos meses do ano, e é justamente aí que o treino organizado costuma ser abandonado. Para quem não encontra na cidade a especialidade que procura, o acompanhamento online cobre bem a distância.',

  bairrosNobres: [],
  bairrosPopulares: [],

  parques: [
    {
      nome: 'Praças do Centro',
      descricao:
        'As praças e ruas planas da área central concentram a caminhada urbana da cidade, especialmente no fim da tarde, quando a temperatura de altitude cai.',
    },
    {
      nome: 'Estradas entre os cafezais',
      descricao:
        'As vias vicinais que cortam as lavouras de café em relevo montanhoso oferecem percursos longos de caminhada, corrida e pedal, com ganho de altimetria e pouco tráfego.',
    },
    {
      nome: 'Entorno das serras',
      descricao:
        'A posição entre a Serra da Canastra, a Serra da Saudade e a Serra do Salitre coloca trilhas e estradas de montanha a curta distância, boas para caminhada de fim de semana.',
    },
  ],
  ciclovias:
    'A cidade não tem malha cicloviária estruturada; o pedal urbano acontece nas ruas do Centro, e o pedal de estrada aproveita as vicinais entre as fazendas de café — com relevo que cobra bem mais da perna do que a média das cidades do Alto Paranaíba.',

  clima:
    'A 1.050 metros de altitude, Campos Altos tem clima tropical de altitude, com chuva concentrada no verão e inverno seco e ameno, com manhãs frias. É o mesmo padrão que sustenta a cafeicultura de qualidade da região.',
  climaTreino:
    'A altitude deixa o treino ao ar livre confortável na maior parte do ano. O inverno pede aquecimento mais longo nas primeiras horas da manhã, e o verão chuvoso é o período em que a constância mais sofre: vale ter um plano coberto para os dias de temporal, em vez de perder a semana inteira.',

  mobilidade:
    'O acesso se dá pela BR-262, rodovia que liga Belo Horizonte a Araxá, Uberaba e ao Centro-Oeste do país. A capital fica a cerca de 270 km. O deslocamento interno é curto e rodoviário, como é comum em município desse porte.',

  corridas: [
    {
      nome: 'Provas e caminhadas do calendário municipal',
      descricao:
        'A cidade recebe corridas e caminhadas ligadas a datas comemorativas e a campanhas de saúde, com percursos pelas vias centrais.',
    },
    {
      nome: 'Circuito regional do oeste mineiro',
      descricao:
        'A proximidade de Ibiá, São Gotardo, Araxá e Bambuí dá acesso a um calendário regional de corrida de rua sem exigir viagem longa.',
    },
  ],
  culturaEsportiva:
    'A vida esportiva acompanha o padrão das cidades cafeeiras do oeste mineiro: futebol nos campos e quadras da cidade, caminhada nas praças centrais e uso das estradas rurais por quem corre ou pedala. O relevo de serra dá à cidade uma vocação natural para treino de subida que poucos municípios do porte dela têm.',
  academias:
    'A oferta reúne academias locais de musculação e profissionais que atendem em domicílio e em propriedades rurais, complementadas pelos espaços públicos do Centro e pelas estradas do entorno.',

  destaquesFitness: [
    'Relevo montanhoso e altitude que favorecem treino de subida, corrida e pedal de estrada.',
    'Clima de altitude confortável para treino ao ar livre na maior parte do ano.',
    'Cidade cafeeira com identidade de origem reconhecida, e sazonalidade de colheita que afeta a rotina de treino.',
    'Proximidade de Ibiá, São Gotardo, Araxá e Bambuí amplia o calendário de provas.',
  ],

  precos: {
    avulsaMin: 45,
    avulsaMax: 100,
    mensalMin: 220,
    mensalMax: 580,
    onlineMin: 100,
    onlineMax: 300,
  },

  conclusao:
    'Cidade pequena e cafeeira do oeste mineiro, encaixada entre três serras, Campos Altos tem mercado fitness enxuto e um trunfo que quase nenhum município do porte dela tem: relevo e altitude que transformam qualquer estrada vicinal em treino de subida. Um personal trainer ajuda a estruturar a rotina em torno da sazonalidade da colheita e a aproveitar o terreno em vez de sofrer com ele.',

  vizinhas: ['ibia-mg', 'sao-gotardo-mg', 'araxa-mg'],

  fontes: [
    { nome: 'IBGE Cidades — Campos Altos', url: 'https://cidades.ibge.gov.br/brasil/mg/campos-altos/panorama' },
    { nome: 'Sebrae Minas — marca território do café de Campos Altos', url: 'https://mg.agenciasebrae.com.br/economia-e-politica/campos-altos-e-a-proxima-regiao-produtora-de-cafe-em-minas-gerais-a-lancar-marca-territorio/' },
    { nome: 'Atlas Brasil — IDHM', url: 'https://www.atlasbrasil.org.br/' },
  ],
  atualizadoEm: '2026-09-19',
};
