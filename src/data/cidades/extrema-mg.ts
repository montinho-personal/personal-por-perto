import type { Cidade } from '../../lib/types';

export const cidade: Cidade = {
  slug: 'extrema-mg',
  nome: 'Extrema',
  uf: 'MG',
  estado: 'Minas Gerais',
  estadoSlug: 'minas-gerais',
  regiao: 'Sudeste',
  gentilico: 'extremense',
  tipo: 'cidade',

  populacao: 53482,
  populacaoAno: 2022,
  idhm: 0.732,
  idhmClasse: 'alto',
  pibPerCapita: 377790.63,
  pibPerCapitaAno: 2023,
  altitudeM: 935,

  resumoEconomico:
    'Encravada na Serra da Mantiqueira, na divisa entre Minas Gerais e São Paulo, Extrema é onde a rodovia Fernão Dias (BR-381) entra no território mineiro, a cerca de 100 km da capital paulista. Nas últimas duas décadas a cidade deixou de ser apenas um município de pecuária leiteira para se tornar um dos maiores polos logísticos e industriais do país, com dezenas de centros de distribuição de grandes empresas nacionais e multinacionais instalados às margens da rodovia. Esse boom levou Extrema ao 1º lugar em PIB per capita entre os municípios de Minas Gerais e ao 10º lugar no ranking nacional em 2023, segundo dados do IBGE, superando cidades tradicionalmente ligadas à mineração.',

  mercado:
    'O forte poder aquisitivo local, puxado pelos salários da logística, da indústria e por moradores que trabalham em empresas da região metropolitana de São Paulo mas residem em condomínios e chácaras de Extrema, sustenta um mercado fitness mais aquecido do que o de cidades mineiras de porte semelhante. Há academias de rede e estúdios locais espalhados pelo Centro e pelos bairros residenciais, e a procura por personal trainer tende a vir tanto de quem busca treino de alta performance quanto de quem quer aproveitar o clima ameno da serra para treinar ao ar livre.',

  bairrosNobres: ['Centro', 'Bela Vista', 'Alpes da Cachoeira', 'Cachoeira'],
  bairrosPopulares: ['Rodeio', 'Barreiro', 'Vila Esperança', 'Tenentes'],

  parques: [
    {
      nome: 'Parque Municipal Cachoeira do Salto',
      descricao:
        'A cerca de 7 km do Centro, às margens do rio Jaguari, reúne uma queda d\'água de aproximadamente 5 metros, trilha curta e de baixa dificuldade (cerca de 300 m ida e volta) com passarelas de madeira, playground e aparelhos de ginástica ao ar livre. Entrada e estacionamento gratuitos, aberto diariamente.',
    },
    {
      nome: 'Parque Municipal Cachoeira do Jaguari',
      descricao:
        'Outro parque municipal às margens do rio Jaguari, com estrutura voltada à contemplação da natureza e ao lazer ao ar livre, somando-se à rede de áreas verdes que Extrema vem desenvolvendo como parte do turismo ecológico da cidade.',
    },
    {
      nome: 'Complexo esportivo do Jardim Bela Vista',
      descricao:
        'No bairro Jardim Bela Vista, a prefeitura construiu um novo parque municipal com campo de futebol society em padrão FIFA e irrigação automatizada (Estádio Roberto Pereira Rodrigues, o "Betinho"), ampliando a oferta de espaços para prática esportiva fora do Centro.',
    },
  ],
  ciclovias:
    'A infraestrutura cicloviária formal ainda é limitada; o relevo acidentado da Serra da Mantiqueira faz com que boa parte do treino ao ar livre — corrida e pedal — aconteça nas vias rurais e estradas de acesso às chácaras e cachoeiras, mais do que em ciclofaixas urbanas.',

  clima:
    'Por ficar a 935 m de altitude na Serra da Mantiqueira, Extrema tem clima mais ameno que boa parte de Minas Gerais. Os verões são chuvosos, com pancadas frequentes à tarde, enquanto os invernos são secos, com dias ensolarados e noites frias, geada ocasional e temperaturas que podem se aproximar de 0 °C nas madrugadas mais rigorosas.',
  climaTreino:
    'O clima serrano favorece o treino ao ar livre na maior parte do ano, sem o calor extremo de outras regiões mineiras, mas as manhãs de inverno exigem aquecimento mais cuidadoso por causa do frio e da geada; nas tardes chuvosas de verão, ambientes cobertos costumam ser a alternativa mais prática.',

  mobilidade:
    'A cidade é a porta de entrada da rodovia Fernão Dias (BR-381) em Minas Gerais, um dos corredores rodoviários mais movimentados do país, totalmente duplicado e que liga as regiões metropolitanas de São Paulo e Belo Horizonte — o que também explica a concentração de centros de distribuição no município. O transporte coletivo urbano e rural é operado pela prefeitura, com cerca de doze linhas (cinco urbanas e sete rurais) funcionando das 5h30 às 23h; por causa da dispersão de condomínios e chácaras pela zona rural, o uso de carro ou van ainda predomina nos deslocamentos do dia a dia.',

  corridas: [
    {
      nome: 'Extrema Run',
      descricao:
        'Corrida de rua realizada anualmente em setembro, com largada no Parque de Eventos de Extrema e percursos de 5 km e 10 km, além de uma opção de caminhada de 5 km — um dos eventos de rua mais tradicionais da cidade.',
    },
    {
      nome: 'Corridas de Montanha - Extrema',
      descricao:
        'Prova de trail running disputada em terreno serrano no entorno da cidade, aproveitando o relevo acidentado da Serra da Mantiqueira para oferecer percursos mais técnicos a corredores de montanha.',
    },
  ],
  culturaEsportiva:
    'A cultura esportiva de Extrema é moldada pela Serra da Mantiqueira: trilhas, cachoeiras e estradas rurais puxam corredores e ciclistas para fora dos ambientes fechados, enquanto o poder aquisitivo elevado da população sustenta academias, estúdios e a organização de provas de corrida de rua e de montanha ao longo do ano.',
  academias:
    'A oferta inclui academias de rede, como Evoque e Sport Academia, além de estúdios e academias locais — casos de Academia R4, FIT Strong House 24h, CTPróFit e Studio LF Fitness —, refletindo um mercado fitness proporcionalmente mais robusto do que o de outras cidades mineiras de tamanho parecido.',

  destaquesFitness: [
    'Maior PIB per capita de Minas Gerais e 10º maior do Brasil em 2023, puxado pelo polo logístico da rodovia Fernão Dias.',
    'Localização na Serra da Mantiqueira, a 935 m de altitude, com clima ameno favorável ao treino ao ar livre na maior parte do ano.',
    'Parques municipais das cachoeiras do Salto e do Jaguari, com trilhas leves e aparelhos de ginástica ao ar livre.',
    'Extrema Run, corrida de rua anual com percursos de 5 km e 10 km que mobiliza a cidade em setembro.',
  ],

  precos: {
    avulsaMin: 90,
    avulsaMax: 200,
    mensalMin: 400,
    mensalMax: 1000,
    onlineMin: 200,
    onlineMax: 500,
  },

  conclusao:
    'Cidade de renda alta e clima serrano na divisa entre Minas Gerais e São Paulo, Extrema oferece cachoeiras, trilhas e boa infraestrutura para quem quer treinar ao ar livre, além de um mercado fitness mais aquecido do que o de cidades mineiras de porte parecido. Um personal trainer ajuda a aproveitar esse cenário, equilibrando os dias de treino ao ar livre nos parques municipais com a estrutura das academias locais.',

  vizinhas: ['cambui-mg', 'braganca-paulista-sp', 'atibaia-sp'],

  fontes: [
    { nome: 'IBGE Cidades — Extrema', url: 'https://cidades.ibge.gov.br/brasil/mg/extrema/panorama' },
    { nome: 'Atlas Brasil — IDHM', url: 'https://www.atlasbrasil.org.br/' },
    { nome: 'Prefeitura de Extrema', url: 'https://www.extrema.mg.gov.br/' },
  ],
  atualizadoEm: '2026-07-02',
};
