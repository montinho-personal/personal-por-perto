import type { Cidade } from '../../lib/types';

export const cidade: Cidade = {
  slug: 'girau-do-ponciano-al',
  nome: 'Girau do Ponciano',
  uf: 'AL',
  estado: 'Alagoas',
  estadoSlug: 'alagoas',
  regiao: 'Nordeste',
  gentilico: 'girauense',
  tipo: 'cidade',

  populacao: 36102,
  populacaoAno: 2022,
  idhm: 0.536,
  idhmClasse: 'baixo',
  altitudeM: 300,

  resumoEconomico:
    'Girau do Ponciano fica no agreste/sertão alagoano, na região de Arapiraca, em pleno semiárido de bioma Caatinga. A economia é fortemente baseada na agropecuária, que responde pela maior fatia do valor adicionado do município, com destaque para a cultura do fumo e da mandioca — lavouras adaptadas ao volume reduzido de chuvas — e para a agricultura familiar de assentamentos rurais. A administração pública, o comércio local e os serviços completam a base econômica de um município interiorano do agreste.',

  mercado:
    'Por ser uma cidade pequena do interior alagoano, o mercado fitness de Girau do Ponciano é enxuto, concentrado em academias de musculação e treino funcional no centro e nos bairros residenciais. A procura por personal trainers tende a vir de quem quer treino orientado para o calor do semiárido e de quem aproveita praças, ruas e a proximidade com Arapiraca para manter a rotina de exercícios.',

  bairrosNobres: ['Centro', 'Boa Vista', 'Nossa Senhora da Conceição', 'Santo Antônio'],
  bairrosPopulares: ['Alto do Cruzeiro', 'Pratinhas', 'Nova Paz', 'Desidério'],

  parques: [
    {
      nome: 'Morro da Santa Cruz da Boa Vista',
      descricao:
        'Um dos pontos mais visitados da cidade, o morro oferece vista ampla do município e recebe a tradicional encenação da Paixão de Cristo; o entorno e a subida servem de percurso para quem treina ao ar livre.',
    },
    {
      nome: 'Alto do Cruzeiro',
      descricao:
        'Ponto elevado requalificado, com vista para o pôr do sol e programação cultural; as ruas e ladeiras do entorno são usadas para caminhada e corrida pela vizinhança.',
    },
    {
      nome: 'Praças e largos do Centro',
      descricao:
        'As praças centrais concentram a vida ao ar livre da cidade, servindo de ponto de encontro para caminhadas, alongamento e atividade física no começo da manhã e no fim da tarde.',
    },
  ],
  ciclovias:
    'A estrutura cicloviária é praticamente inexistente; o pedal e a corrida acontecem nas vias urbanas e nas estradas vicinais que ligam o centro aos povoados e assentamentos rurais.',

  clima:
    'O clima é quente e semiárido, típico do agreste/sertão alagoano, com temperaturas altas ao longo do ano (máximas em torno de 38 °C) e chuvas concentradas em poucos meses. O bioma predominante é a Caatinga, e os períodos de estiagem são marcantes, com longas temporadas de tempo seco e ensolarado.',
  climaTreino:
    'O calor e a baixa umidade do semiárido pedem treino bem cedo ou no fim da tarde, com hidratação reforçada; nos horários de sol forte, ambientes cobertos e climatizados são a opção mais segura, e os meses menos quentes favorecem a atividade ao ar livre.',

  mobilidade:
    'A cidade fica a cerca de 26 km de Arapiraca, principal polo regional, com a qual se conecta por rodovia estadual e linhas intermunicipais de ônibus reguladas pela Arsal. O deslocamento interno é feito por vias urbanas e estradas vicinais, e o município tem investido na pavimentação de trechos que ligam o centro a comunidades rurais.',

  corridas: [
    {
      nome: 'Corrida do Trabalhador',
      descricao:
        'Prova de rua promovida pela prefeitura em alusão ao Dia do Trabalhador (1º de Maio), reunindo atletas amadores e profissionais e movimentando a cena esportiva local.',
    },
  ],
  culturaEsportiva:
    'A cultura esportiva combina o uso das praças e ruas do centro para caminhada e corrida, a subida ao Morro da Santa Cruz e ao Alto do Cruzeiro, e eventos como a Corrida do Trabalhador — tudo moldado pelo calor do semiárido alagoano.',
  academias:
    'A oferta é formada por academias locais de musculação e treino funcional, em número compatível com uma cidade pequena do agreste, distribuídas pelo centro e pelos bairros residenciais.',

  destaquesFitness: [
    'Cidade do agreste/sertão alagoano, no semiárido de Caatinga, na região de Arapiraca.',
    'Morro da Santa Cruz da Boa Vista e Alto do Cruzeiro como pontos elevados para treino ao ar livre.',
    'Calor semiárido, que exige planejamento de horário e hidratação no treino.',
    'Corrida do Trabalhador como principal evento esportivo de rua do município.',
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
    'Cidade quente do agreste alagoano, marcada pelo semiárido e pela proximidade com Arapiraca, Girau do Ponciano pede um treino adaptado ao clima e que aproveite as praças e os pontos altos da cidade. Um personal trainer ajuda a organizar a rotina respeitando o calor, escolhendo os melhores horários e mantendo a constância ao longo das estações secas.',

  vizinhas: ['arapiraca-al', 'palmeira-dos-indios-al'],

  fontes: [
    { nome: 'IBGE Cidades — Girau do Ponciano', url: 'https://cidades.ibge.gov.br/brasil/al/girau-do-ponciano/panorama' },
    { nome: 'Prefeitura de Girau do Ponciano', url: 'https://giraudoponciano.al.gov.br/' },
    { nome: 'Atlas Brasil — IDHM', url: 'https://www.atlasbrasil.org.br/' },
  ],
  atualizadoEm: '2026-06-29',
};
