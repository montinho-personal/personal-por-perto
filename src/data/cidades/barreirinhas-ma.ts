import type { Cidade } from '../../lib/types';

export const cidade: Cidade = {
  slug: 'barreirinhas-ma',
  nome: 'Barreirinhas',
  uf: 'MA',
  estado: 'Maranhão',
  estadoSlug: 'maranhao',
  regiao: 'Nordeste',
  gentilico: 'barreirinhense',
  tipo: 'cidade',

  populacao: 65589,
  populacaoAno: 2022,
  idhm: 0.570,
  idhmClasse: 'baixo',

  resumoEconomico:
    'Às margens do rio Preguiças, Barreirinhas é a principal porta de entrada do Parque Nacional dos Lençóis Maranhenses, o mosaico de dunas brancas e lagoas de água doce que é um dos maiores atrativos turísticos do Nordeste. O turismo domina a economia local, sustentando pousadas, restaurantes e uma extensa rede de agências que organizam passeios de lancha, quadriciclo e bugre. Completam a base econômica a pesca no rio Preguiças, o extrativismo e o artesanato do buriti e uma agricultura de subsistência voltada a mandioca, milho, feijão, banana e melancia.',

  mercado:
    'O mercado fitness de Barreirinhas é pequeno e recente, típico de uma cidade média cuja vida econômica gira em torno do fluxo turístico. A oferta se concentra em poucas academias de musculação e treino funcional no centro, e a procura por personal trainer inclui tanto moradores quanto visitantes hospedados em pousadas que buscam manter a rotina de treino ou se preparar fisicamente para trekking nas dunas e passeios mais longos pela região dos Lençóis.',

  bairrosNobres: ['Centro', 'Boa Vista'],
  bairrosPopulares: ['Cruzeiro', 'Aeroporto', 'Canequinho', 'Cebola'],

  parques: [
    {
      nome: 'Parque Nacional dos Lençóis Maranhenses',
      descricao:
        'Unidade de conservação federal com dunas de areia branca e lagoas de água doce que se formam no período chuvoso; é o principal cenário para trekking, caminhada na areia e banho nas lagoas, sempre por meio de passeios guiados.',
    },
    {
      nome: 'Avenida Beira Rio',
      descricao:
        'Via à margem do rio Preguiças, no centro da cidade, ponto de encontro de moradores e turistas ao entardecer e um dos trechos mais usados para caminhada urbana.',
    },
    {
      nome: 'Pequenos Lençóis (Vassouras e Caburé)',
      descricao:
        'Área de dunas e lagoas menores, acessada por lancha ou quadriciclo a partir de Barreirinhas, também usada para caminhada na areia e sandboard.',
    },
  ],
  ciclovias:
    'A cidade não dispõe de infraestrutura cicloviária estruturada; o pedal e a caminhada acontecem principalmente pela Avenida Beira Rio e pelas vias do centro.',

  clima:
    'O clima é tropical, quente o ano todo, com temperaturas médias por volta de 27 °C e variação entre cerca de 25 °C e 32 °C. O ano se divide em duas estações bem marcadas: o período chuvoso, de janeiro a junho, quando as lagoas dos Lençóis se enchem, e a estiagem, de julho a dezembro, quando o sol predomina e a paisagem de dunas e lagoas fica mais exposta.',
  climaTreino:
    'O calor constante recomenda treinar bem cedo ou ao entardecer, com hidratação reforçada; para atividades como trekking nas dunas, o horário mais fresco também reduz o desgaste do esforço sobre a areia.',

  mobilidade:
    'O acesso terrestre a partir de São Luís é feito pela MA-402 (Translitorânea), rodovia de cerca de 250 a 260 km percorrida em aproximadamente quatro horas, com trechos que apresentam problemas de conservação. A cidade conta com aeroporto local que recebe voos regionais e fretados ligados ao turismo. Dentro da região, o deslocamento para vilarejos como Mandacaru, Vassouras, Caburé e Atins é feito por lanchas que cruzam o rio Preguiças, além de passeios de quadriciclo e bugre pelas dunas.',

  corridas: [],
  culturaEsportiva:
    'A cultura esportiva local é moldada pelo turismo de natureza: trekking e caminhada nas dunas dos Lençóis Maranhenses, passeios de quadriciclo e bugre, sandboard e atividades aquáticas como natação e banho nas lagoas e no rio Preguiças. Entre moradores, o futebol de várzea também tem presença relevante, e a Avenida Beira Rio funciona como espaço informal de caminhada.',
  academias:
    'A oferta de academias é pequena, formada por estúdios de musculação e treino funcional concentrados no centro da cidade, dimensionados para atender à população local e, em menor escala, turistas hospedados nas pousadas.',

  destaquesFitness: [
    'Porta de entrada do Parque Nacional dos Lençóis Maranhenses, com trekking nas dunas e banho nas lagoas de água doce.',
    'Rio Preguiças como eixo de deslocamento e de atividades aquáticas, com lanchas até Mandacaru, Vassouras, Caburé e Atins.',
    'Passeios de quadriciclo e bugre pelas dunas, que pedem preparo físico específico de quem visita a região.',
    'Economia dominada pelo turismo, com oferta de academias ainda pequena e concentrada no centro.',
  ],

  precos: {
    avulsaMin: 50,
    avulsaMax: 120,
    mensalMin: 240,
    mensalMax: 650,
    onlineMin: 110,
    onlineMax: 340,
  },

  conclusao:
    'Cidade turística às margens do rio Preguiças e porta de entrada dos Lençóis Maranhenses, Barreirinhas combina calor constante com um cenário natural que convida ao movimento — das dunas às lagoas. Um personal trainer ajuda a organizar os horários de treino em torno do clima quente, a preparar o condicionamento físico para trekking e passeios na região e a manter a constância em uma cidade onde a oferta de academias ainda é enxuta.',

  vizinhas: ['sao-luis-ma', 'chapadinha-ma'],

  fontes: [
    { nome: 'IBGE Cidades — Barreirinhas', url: 'https://cidades.ibge.gov.br/brasil/ma/barreirinhas/panorama' },
    { nome: 'Prefeitura de Barreirinhas', url: 'https://www.barreirinhas.ma.gov.br/' },
    { nome: 'Atlas Brasil — IDHM', url: 'https://www.atlasbrasil.org.br/' },
  ],
  atualizadoEm: '2026-07-02',
};
