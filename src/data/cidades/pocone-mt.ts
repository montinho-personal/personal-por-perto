import type { Cidade } from '../../lib/types';

export const cidade: Cidade = {
  slug: 'pocone-mt',
  nome: 'Poconé',
  uf: 'MT',
  estado: 'Mato Grosso',
  estadoSlug: 'mato-grosso',
  regiao: 'Centro-Oeste',
  gentilico: 'poconeano',
  tipo: 'cidade',

  populacao: 31217,
  populacaoAno: 2022,
  idhm: 0.652,
  idhmClasse: 'médio',
  altitudeM: 142,

  resumoEconomico:
    'Poconé é conhecida como a porta de entrada do Pantanal mato-grossense, a cerca de 100 km de Cuiabá, de onde parte a Rodovia-Parque Transpantaneira (MT-060), referência mundial em ecoturismo e observação de fauna. Fundada em 1777 durante o ciclo do ouro, a cidade viveu do garimpo antes de consolidar uma economia baseada na pecuária de corte, na agricultura e, mais recentemente, no turismo ecológico e de pesca esportiva ligado ao Pantanal. O comércio local e a rede de pousadas e fazendas-hotel ao longo da Transpantaneira sustentam boa parte da atividade econômica do município.',

  mercado:
    'Por se tratar de uma cidade pequena, com pouco mais de 31 mil habitantes, o mercado fitness de Poconé é modesto, concentrado em poucos estúdios e academias no Centro. A procura por personal trainer costuma vir de quem busca preparo físico para a vida ativa ligada ao Pantanal — cavalgadas, caminhadas e passeios pela Transpantaneira — e de quem quer uma alternativa orientada ao calor extremo típico da região.',

  bairrosNobres: ['Centro'],
  bairrosPopulares: ['Cohab Santa Teresinha', 'Chumbo', 'Cangas'],

  parques: [
    {
      nome: 'Rodovia-Parque Transpantaneira (MT-060)',
      descricao:
        'Com mais de 150 km entre Poconé e Porto Jofre e dezenas de pontes de madeira, a estrada é referência mundial em ecoturismo: permite observar onças-pintadas, jacarés, tuiuiús e centenas de espécies de aves em seu habitat natural, atraindo visitantes do Brasil e do exterior.',
    },
    {
      nome: 'RPPN e Parque Sesc Baía das Pedras',
      descricao:
        'A cerca de 40 km do centro de Poconé, a reserva do Sesc no Pantanal reúne trilhas e observação de fauna; o parque já sediou etapa do Circuito Sesc de Corridas, aproximando o Pantanal do calendário esportivo da região.',
    },
    {
      nome: 'Praça da Matriz e Centro Histórico',
      descricao:
        'No coração da cidade, a praça reúne a Igreja Matriz de Nossa Senhora do Rosário, construção colonial do século XVIII, a Prefeitura e o Museu Histórico, formando um pequeno circuito de caminhada no centro urbano.',
    },
  ],
  ciclovias:
    'A estrutura cicloviária formal é praticamente inexistente; o deslocamento a pé e de bicicleta acontece nas ruas do Centro, e o treino ao ar livre mais expressivo se dá na própria Transpantaneira e no entorno rural do município.',

  clima:
    'O clima é tropical, com verão chuvoso e quente — a cheia do Pantanal, de novembro a março — e inverno seco — a vazante, de abril a outubro —, quando o nível da água baixa e facilita a observação de fauna ao longo da Transpantaneira. As temperaturas máximas costumam ultrapassar os 35 °C nos meses mais quentes.',
  climaTreino:
    'O calor intenso recomenda treinar bem cedo ou ao final da tarde, com hidratação reforçada; na cheia, alagamentos podem limitar o acesso a trechos rurais e à própria Transpantaneira, enquanto a seca favorece caminhadas e cavalgadas ao ar livre.',

  mobilidade:
    'Poconé fica a cerca de 100 km de Cuiabá pela rodovia MT-060, eixo que segue como Rodovia-Parque Transpantaneira rumo a Porto Jofre. O transporte urbano é feito por ônibus e mototáxi, e o acesso às fazendas e pousadas do Pantanal depende de estradas dentro da própria Transpantaneira, sujeitas às cheias sazonais.',

  corridas: [
    {
      nome: 'Corrida do Pantanal',
      descricao:
        'Prova de rua de 7 km realizada em Poconé, com recorde de inscrições — as 1.000 vagas se esgotaram em cerca de 45 minutos —, consolidando a cidade como referência esportiva na região do Pantanal.',
    },
    {
      nome: 'Circuito Sesc de Corridas — Etapa Pantanal',
      descricao:
        'Etapa do circuito estadual realizada no Parque Sesc Baía das Pedras, em Poconé, com percurso de 5 km para adultos e provas de 200 m e 500 m para crianças e jovens.',
    },
  ],
  culturaEsportiva:
    'A cultura esportiva de Poconé gira em torno do Pantanal: cavalgadas, observação de fauna, pesca esportiva e passeios pela Transpantaneira dividem espaço com corridas de rua que usam o cenário natural como atrativo, como a Corrida do Pantanal e a etapa do Circuito Sesc.',
  academias:
    'A oferta de academias é pequena, concentrada no Centro, com estúdios de treinamento personalizado e academias de porte compatível com uma cidade de pequeno porte do interior mato-grossense.',

  destaquesFitness: [
    'Porta de entrada da Rodovia-Parque Transpantaneira (MT-060), referência mundial em observação de fauna do Pantanal.',
    'Cidade histórica fundada no ciclo do ouro do século XVIII, hoje com economia baseada em pecuária e ecoturismo.',
    'Proximidade da RPPN Sesc Pantanal, que já sediou etapa do Circuito Sesc de Corridas.',
    'Clima tropical quente, com cheia e seca bem definidas, que exige planejamento de horários para o treino ao ar livre.',
  ],

  precos: {
    avulsaMin: 45,
    avulsaMax: 100,
    mensalMin: 220,
    mensalMax: 600,
    onlineMin: 100,
    onlineMax: 300,
  },

  conclusao:
    'Porta de entrada do Pantanal pela Transpantaneira, Poconé une a história do ciclo do ouro, a pecuária e um ecoturismo pujante em torno da fauna pantaneira. Um personal trainer ajuda a organizar o treino considerando o calor intenso e os ciclos de cheia e seca, aproveitando o Centro histórico e os poucos, porém dedicados, espaços de atividade física da cidade.',

  vizinhas: ['cuiaba-mt', 'varzea-grande-mt'],

  fontes: [
    { nome: 'IBGE Cidades — Poconé', url: 'https://cidades.ibge.gov.br/brasil/mt/pocone/panorama' },
    { nome: 'Prefeitura de Poconé', url: 'https://www.pocone.mt.gov.br/' },
    { nome: 'Atlas Brasil — IDHM', url: 'https://www.atlasbrasil.org.br/' },
  ],
  atualizadoEm: '2026-07-02',
};
