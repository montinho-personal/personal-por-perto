import type { Cidade } from '../../lib/types';

export const cidade: Cidade = {
  slug: 'sao-miguel-das-missoes-rs',
  nome: 'São Miguel das Missões',
  uf: 'RS',
  estado: 'Rio Grande do Sul',
  estadoSlug: 'rio-grande-do-sul',
  regiao: 'Sul',
  gentilico: 'miguelino',
  tipo: 'cidade',

  populacao: 7056,
  populacaoAno: 2022,
  idhm: 0.670,
  idhmClasse: 'médio',
  altitudeM: 269,

  resumoEconomico:
    'São Miguel das Missões é conhecida sobretudo pelo Sítio Arqueológico de São Miguel Arcanjo, ruínas da antiga redução jesuítico-guarani que integrou os Sete Povos das Missões e que a UNESCO declarou Patrimônio Cultural da Humanidade em 1983. O turismo histórico movimenta a cidade, com destaque para o Espetáculo Som e Luz — apresentado ao anoitecer diante das ruínas desde 1978 — e para o Museu das Missões, projetado por Lúcio Costa. Apesar da vocação turística, a base da economia é agropecuária: a agricultura responde pela maior fatia do valor adicionado do PIB municipal, puxada pelo cultivo de soja e cereais, ao lado da administração pública como grande empregadora de uma cidade pequena e predominantemente rural.',

  mercado:
    'Com pouco mais de 7 mil habitantes, São Miguel das Missões não sustenta uma rede própria de academias: a oferta se resume a poucos espaços locais de musculação e treino funcional, como o Centro de Treinamento Fitness São Miguel, no Centro. Quem busca estrutura maior costuma se deslocar até Santo Ângelo, a cerca de 59 km. Nesse contexto, o personal trainer com atendimento domiciliar ou em pequenos espaços particulares é a alternativa mais prática para treinar com regularidade, especialmente para famílias ligadas à lavoura de soja e cereais e para quem trabalha com o fluxo de visitantes das ruínas.',

  bairrosNobres: ['Centro'],
  bairrosPopulares: ['Campestre', 'Coimbra', 'Mato Grande', 'Rincão dos Moraes'],

  parques: [
    {
      nome: 'Sítio Arqueológico de São Miguel Arcanjo',
      descricao:
        'Ruínas da igreja da antiga redução jesuítico-guarani de São Miguel Arcanjo, Patrimônio Mundial da UNESCO desde 1983 e principal cartão-postal da cidade. O sítio funciona de terça a domingo e o entorno gramado é usado por moradores para caminhada, sobretudo no fim da tarde, quando as ruínas são iluminadas para o Espetáculo Som e Luz.',
    },
    {
      nome: 'Museu das Missões',
      descricao:
        'Projetado pelo arquiteto Lúcio Costa e inaugurado em 1940 em frente às ruínas, reúne acervo de arte sacra missioneira. A praça e os gramados ao redor do museu formam, junto ao sítio arqueológico, o principal espaço público de convívio da cidade.',
    },
    {
      nome: 'Estradas rurais da Rota das Missões',
      descricao:
        'O município é predominantemente rural, cortado por estradas de chão e trechos asfaltados entre lavouras de soja e cereais; são o cenário usual para caminhada, corrida leve e pedal fora do pequeno núcleo urbano central.',
    },
  ],
  ciclovias:
    'Não há malha cicloviária urbana estruturada; o pedal e a corrida acontecem nas ruas do Centro e nas estradas rurais que ligam a sede aos distritos e às lavouras ao redor.',

  clima:
    'O clima é subtropical, típico do noroeste gaúcho, com verões quentes e mínimas que podem passar de 35 °C nos dias mais extremos, e invernos frios, com geadas frequentes e mínimas que se aproximam de 0 °C.',
  climaTreino:
    'O calor do verão pede treino ao ar livre nas primeiras horas da manhã ou ao entardecer, com hidratação reforçada, enquanto as manhãs geladas do inverno exigem aquecimento mais longo e agasalho para caminhar, correr ou pedalar pelas estradas rurais.',

  mobilidade:
    'O acesso à cidade se dá pela BR-285 e pela RS-536, que se encontram na sede municipal; Santo Ângelo fica a cerca de 59 km e Porto Alegre, a cerca de 470 km. Não há transporte coletivo urbano estruturado nem malha ferroviária ativa, e o deslocamento — inclusive de visitantes que chegam para conhecer as ruínas — depende essencialmente de veículo próprio ou ônibus de turismo.',

  corridas: [],
  culturaEsportiva:
    'A cultura esportiva de São Miguel das Missões é marcada pela caminhada no entorno das ruínas e do Museu das Missões e pelo uso das estradas rurais para corrida leve e ciclismo. O município também já sediou o Misiones Endurance Race, prova de ultraendurance de gravel (bicicleta) pelas estradas de terra da região; corrida de rua organizada não tem registro na cidade.',
  academias:
    'A oferta é pequena, própria de um município com pouco mais de 7 mil habitantes: espaços locais de musculação e treino funcional concentrados no Centro, como o Centro de Treinamento Fitness São Miguel, sem grandes redes de academia.',

  destaquesFitness: [
    'Sítio Arqueológico de São Miguel Arcanjo, Patrimônio Mundial da UNESCO desde 1983, parte dos Sete Povos das Missões Jesuíticas.',
    'Espetáculo Som e Luz, apresentado ao anoitecer diante das ruínas desde 1978, um dos pioneiros do gênero no Brasil.',
    'Economia predominantemente agropecuária, com a soja e os cereais moldando o ritmo rural do treino.',
    'Cidade pequena e sem rede própria de academias, o que torna o personal trainer com atendimento domiciliar uma alternativa prática.',
  ],

  precos: {
    avulsaMin: 55,
    avulsaMax: 120,
    mensalMin: 260,
    mensalMax: 700,
    onlineMin: 120,
    onlineMax: 350,
  },

  conclusao:
    'Pequena e marcada pelo Patrimônio Mundial das ruínas de São Miguel Arcanjo, a cidade tem no entorno do sítio arqueológico e nas estradas rurais da região seus principais espaços de caminhada, corrida leve e pedal. Sem uma rede própria de academias, um personal trainer com atendimento domiciliar ajuda moradores a manter a constância do treino diante do calor do verão e do frio das manhãs de inverno do noroeste gaúcho.',

  vizinhas: ['santo-angelo-rs', 'ijui-rs'],

  fontes: [
    { nome: 'IBGE Cidades — São Miguel das Missões', url: 'https://cidades.ibge.gov.br/brasil/rs/sao-miguel-das-missoes/panorama' },
    { nome: 'IPHAN — Parque Histórico Nacional das Missões', url: 'https://portal.iphan.gov.br/pagina/detalhes/766/' },
    { nome: 'Atlas Brasil — IDHM', url: 'https://www.atlasbrasil.org.br/' },
  ],
  atualizadoEm: '2026-07-03',
};
