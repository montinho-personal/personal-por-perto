import type { Cidade } from '../../lib/types';

export const cidade: Cidade = {
  slug: 'sao-francisco-de-paula-rs',
  nome: 'São Francisco de Paula',
  uf: 'RS',
  estado: 'Rio Grande do Sul',
  estadoSlug: 'rio-grande-do-sul',
  regiao: 'Sul',
  gentilico: 'serrano',
  tipo: 'cidade',

  populacao: 21893,
  populacaoAno: 2022,
  idhm: 0.685,
  idhmClasse: 'médio',
  altitudeM: 907,

  resumoEconomico:
    'No topo dos Campos de Cima da Serra, São Francisco de Paula é conhecida como "São Chico" e figura entre as cidades mais frias do Brasil, com neve registrada quase todos os anos, sobretudo em julho e agosto. A economia combina pecuária de corte em campos nativos, silvicultura de pinus e manejo de araucária, agricultura e, cada vez mais, o turismo rural e de natureza — a cidade integra roteiros como a Rota Romântica, o Circuito Cascatas e Montanhas e os Caminhos da Neve, além de abrigar parte do Parque Estadual do Tainhas e a Floresta Nacional de São Francisco de Paula.',

  mercado:
    'O mercado fitness é pequeno e concentrado no Centro, com academias locais de musculação e treino funcional atendendo moradores de uma cidade de perfil rural e serrano. A procura por personal trainer tende a crescer entre quem busca treino adaptado ao frio intenso do inverno e entre proprietários de pousadas e sítios de turismo rural que buscam manter rotina de atividade física fora da alta temporada.',

  bairrosNobres: ['Centro', 'São Bernardo', 'Hampel', 'Colinas de São Francisco'],
  bairrosPopulares: ['Eletra', 'Barragem do Salto', 'Campo do Meio', 'Alpes de São Francisco'],

  parques: [
    {
      nome: 'Lago São Bernardo',
      descricao:
        'Cartão-postal da cidade, o lago artificial tem cerca de 2 km de perímetro cercado por araucárias, com pista de caminhada e corrida, academia ao ar livre e espaço para ciclismo — o principal ponto de atividade física ao ar livre de São Francisco de Paula.',
    },
    {
      nome: 'Floresta Nacional de São Francisco de Paula (Flona)',
      descricao:
        'Unidade de conservação administrada pelo ICMBio, com trilhas sinalizadas como a do Mirante e a das Araucárias Centenárias, que levam a povoamentos de araucária, cachoeiras e mata nativa — visitação mediante agendamento prévio.',
    },
    {
      nome: 'Parque Estadual do Tainhas',
      descricao:
        'Unidade de conservação que protege campos nativos e mata do vale do rio Tainhas, com cerca de um quinto de sua área dentro do território do município, nos Campos de Cima da Serra.',
    },
  ],
  ciclovias:
    'Não há rede cicloviária urbana relevante; o ciclismo e o mountain bike acontecem nas estradas de chão e trilhas rurais dos Campos de Cima da Serra, terreno que também sedia provas de ultraendurance de bike.',

  clima:
    'O clima é subtropical de altitude (temperado oceânico, Cfb), com verões amenos e invernos rigorosos — São Francisco de Paula é uma das cidades mais frias do Brasil e registra neve quase todos os anos, principalmente entre julho e agosto. A mínima histórica oficial (INMET) foi de −6,5 °C em julho de 1953, e o município é também o mais chuvoso do Rio Grande do Sul, com mais de 2.000 mm de chuva por ano.',
  climaTreino:
    'O frio intenso e as geadas frequentes do inverno pedem aquecimento prolongado, roupas em camadas e cautela com pisos gelados nos treinos ao ar livre; em dias de neve ou chuva forte, ambientes fechados e aquecidos são a opção mais segura, enquanto a primavera e o verão amenos favorecem o treino outdoor no Lago São Bernardo e nas trilhas da Flona.',

  mobilidade:
    'O acesso principal a partir de Porto Alegre é pela BR-290 e pela RS-020, via Taquara e Cachoeirinha, num percurso de cerca de 115 km. A RS-235 liga a cidade a Canela e Gramado, cruzando os Campos de Cima da Serra. O transporte urbano é limitado, com deslocamentos concentrados em veículo próprio; a cidade conta com rodoviária para linhas regionais.',

  corridas: [
    {
      nome: 'São Chico Adventure Festival (SCAFTRAILRUN)',
      descricao:
        'Festival multiesportivo realizado em São Francisco de Paula, com provas de trail running em distâncias de 8 km, 14 km, 21 km e ultra de cerca de 51 km, além de mountain bike, remo no Lago São Bernardo e cavalgada.',
    },
    {
      nome: 'Threerace Bike Ultramarathon',
      descricao:
        'Ultramaratona de mountain bike disputada em etapas por estradas e trilhas do interior do município, somando mais de 180 km e milhares de metros de elevação acumulada pelos Campos de Cima da Serra.',
    },
  ],
  culturaEsportiva:
    'A cultura esportiva local gira em torno do ar livre e do relevo serrano: caminhada e corrida no Lago São Bernardo, trilhas na Flona e no Parque Estadual do Tainhas, e provas de resistência (trail running e ultramaratona de bike) que usam os Campos de Cima da Serra como cenário, tudo condicionado ao clima frio característico da região.',
  academias:
    'A oferta é enxuta e concentrada no Centro, com academias locais de musculação, funcional e modalidades como pilates e yoga, dimensionadas para uma cidade pequena de perfil rural e turístico.',

  destaquesFitness: [
    'Uma das cidades mais frias do Brasil, com neve registrada quase todo ano e mínima histórica de −6,5 °C — treino precisa respeitar o frio extremo de altitude.',
    'Lago São Bernardo, com pista de cerca de 2 km e academia ao ar livre, é o principal espaço público de caminhada, corrida e ciclismo.',
    'Flona de São Francisco de Paula e Parque Estadual do Tainhas oferecem trilhas entre araucárias centenárias para caminhada e trekking.',
    'Palco de provas de resistência como o São Chico Adventure Festival (trail running) e o Threerace Bike Ultramarathon, nos Campos de Cima da Serra.',
  ],

  precos: {
    avulsaMin: 55,
    avulsaMax: 125,
    mensalMin: 270,
    mensalMax: 740,
    onlineMin: 130,
    onlineMax: 370,
  },

  conclusao:
    'Cidade serrana de clima extremo e economia rural, São Francisco de Paula oferece no Lago São Bernardo e nas trilhas da Flona um cenário natural raro para treinar ao ar livre, desde que o frio intenso do inverno seja respeitado. Um personal trainer ajuda a adaptar horários e vestuário às estações, aproveitar os espaços públicos da cidade e manter a constância mesmo nos dias mais gelados do ano.',

  vizinhas: ['canela-rs', 'gramado-rs'],

  fontes: [
    { nome: 'IBGE Cidades — São Francisco de Paula', url: 'https://cidades.ibge.gov.br/brasil/rs/sao-francisco-de-paula/panorama' },
    { nome: 'Atlas Brasil — IDHM São Francisco de Paula', url: 'https://www.atlasbrasil.org.br/perfil/municipio/431820' },
    { nome: 'Prefeitura de São Francisco de Paula', url: 'https://www.saofranciscodepaula.rs.gov.br/' },
  ],
  atualizadoEm: '2026-06-29',
};
