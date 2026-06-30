import type { Cidade } from '../../lib/types';

export const cidade: Cidade = {
  slug: 'apodi-rn',
  nome: 'Apodi',
  uf: 'RN',
  estado: 'Rio Grande do Norte',
  estadoSlug: 'rio-grande-do-norte',
  regiao: 'Nordeste',
  gentilico: 'apodiense',
  tipo: 'cidade',

  populacao: 36093,
  populacaoAno: 2022,
  idhm: 0.639,
  idhmClasse: 'médio',
  altitudeM: 67,

  resumoEconomico:
    'No Oeste Potiguar, em meio à Chapada do Apodi, a cidade tem a economia ancorada na agropecuária e, sobretudo, na fruticultura irrigada — o melão é a marca da região, ao lado de outras frutas produzidas com a água captada na bacia do rio Apodi-Mossoró. A atividade cerâmica (telhas e tijolos) e a pecuária complementam a base produtiva, enquanto o comércio e os serviços públicos atendem a um município extenso, com sede e distritos rurais como Soledade, Melancias e Córrego.',

  mercado:
    'Como cidade média do interior nordestino, Apodi tem um mercado fitness enxuto, concentrado em academias locais de musculação e treino funcional. A procura por personal trainers costuma vir de quem busca acompanhamento individual para treinar com segurança diante do calor intenso e da forte insolação típicos do semiárido, aproveitando praças e vias da cidade nos horários mais amenos.',

  bairrosNobres: ['Centro', 'Bicentenário', 'Portal da Chapada', 'São José'],
  bairrosPopulares: ['Cohab', 'Malvinas', 'Independência', 'Lagoa Seca'],

  parques: [
    {
      nome: 'Lagoa do Apodi',
      descricao:
        'Cartão-postal da cidade junto ao rio Apodi-Mossoró, a lagoa e seu entorno funcionam como espaço de lazer e ponto de referência para caminhadas e atividade ao ar livre no fim do dia.',
    },
    {
      nome: 'Lajedo de Soledade',
      descricao:
        'Sítio arqueológico de formação calcária com pinturas rupestres, a cerca de 12 km do centro, reconhecido como patrimônio cultural do RN; o cenário de rocha e o relevo da Chapada atraem quem combina visita turística com trilhas e percursos a pé.',
    },
    {
      nome: 'Chapada do Apodi',
      descricao:
        'Principal atrativo natural do município, a chapada oferece estradas e áreas abertas em meio à paisagem do semiárido, usadas por quem treina pedal e corrida fora do perímetro urbano.',
    },
  ],
  ciclovias:
    'A estrutura cicloviária é modesta e pontual; boa parte do pedal e da corrida acontece nas vias da área urbana, em praças e nas estradas que cortam a Chapada do Apodi.',

  clima:
    'O clima é semiárido (tipo BSh na classificação de Köppen), com baixa nebulosidade, chuvas concentradas em poucos meses do ano e temperaturas elevadas. Apodi figura entre as cidades de maior insolação do Brasil, com índices que ultrapassam 3.100 horas de sol por ano, o que torna o calor e a radiação fatores constantes na rotina.',
  climaTreino:
    'A forte insolação e o calor pedem treino bem cedo ou no fim da tarde, com hidratação reforçada e proteção solar; nos picos de calor, ambientes climatizados são a opção mais segura, e o período chuvoso costuma trazer alívio momentâneo na temperatura.',

  mobilidade:
    'A BR-405 é o principal eixo rodoviário do município, ligando Apodi ao restante do Oeste Potiguar e às cidades vizinhas. O transporte urbano é simples, próprio de uma cidade média, e os deslocamentos para a zona rural e os distritos se dão por estradas que cruzam a Chapada e a bacia do rio Apodi-Mossoró.',

  corridas: [
    {
      nome: 'Desafio Running de Emancipação',
      descricao:
        'Prova ligada às comemorações do aniversário de emancipação da cidade, promovida pela administração municipal, que reúne corredores apodienses em diferentes percursos.',
    },
    {
      nome: 'Corridão do GTO de Apodi',
      descricao:
        'Corrida de rua realizada na cidade, voltada à comunidade local e à prática esportiva amadora.',
    },
  ],
  culturaEsportiva:
    'A cultura esportiva combina o uso de praças e vias urbanas para caminhada e corrida com a presença da natureza da Chapada do Apodi, da Lagoa do Apodi e do entorno do rio — tudo condicionado pelo calor e pela forte insolação do semiárido.',
  academias:
    'A oferta é formada sobretudo por academias locais de musculação e treino funcional, distribuídas pelo centro e pelos bairros residenciais, com porte compatível com uma cidade média do interior.',

  destaquesFitness: [
    'Chapada do Apodi e Lajedo de Soledade como cenário natural para trilhas, pedal e corrida ao ar livre.',
    'Lagoa do Apodi e o entorno do rio Apodi-Mossoró como espaços de caminhada e lazer.',
    'Clima semiárido com altíssima insolação, que exige planejamento de horário, hidratação e proteção solar.',
    'Economia de fruticultura irrigada (melão), agropecuária e cerâmica, com a BR-405 conectando a cidade ao Oeste Potiguar.',
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
    'Cidade quente e ensolarada no coração da Chapada do Apodi, Apodi pede um treino adaptado ao semiárido, que respeite os horários de menor calor e aproveite a lagoa, o rio e as paisagens da chapada. Um personal trainer ajuda a organizar a rotina, escolher os melhores horários e manter a constância ao longo do ano.',

  vizinhas: ['mossoro-rn', 'pau-dos-ferros-rn'],

  fontes: [
    { nome: 'IBGE Cidades — Apodi', url: 'https://cidades.ibge.gov.br/brasil/rn/apodi/panorama' },
    { nome: 'Prefeitura de Apodi', url: 'https://apodi.rn.gov.br/' },
    { nome: 'Atlas Brasil — IDHM', url: 'https://www.atlasbrasil.org.br/' },
  ],
  atualizadoEm: '2026-06-29',
};
