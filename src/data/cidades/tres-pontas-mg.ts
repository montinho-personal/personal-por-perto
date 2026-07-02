import type { Cidade } from '../../lib/types';

export const cidade: Cidade = {
  slug: 'tres-pontas-mg',
  nome: 'Três Pontas',
  uf: 'MG',
  estado: 'Minas Gerais',
  estadoSlug: 'minas-gerais',
  regiao: 'Sudeste',
  gentilico: 'trespontano',
  tipo: 'cidade',

  populacao: 55255,
  populacaoAno: 2022,
  idhm: 0.731,
  idhmClasse: 'alto',
  altitudeM: 905,

  resumoEconomico:
    'Conhecida como a "Capital Mundial do Café", Três Pontas é o maior município produtor de café do Brasil, com dezenas de milhões de pés cultivados em milhares de hectares no entorno da cidade, boa parte comercializada pela cooperativa de cafeicultores da região. A economia soma um parque industrial diversificado (torrefação, beneficiamento de café, máquinas agrícolas, fertilizantes, metalurgia, móveis e gráficas) a um comércio e setor de serviços aquecidos, que respondem pela maior fatia do PIB local. A cidade também é lembrada como "Terra da Música", berço de Milton Nascimento e Wagner Tiso.',

  mercado:
    'Cidade média do Sul de Minas com boa parte da renda ligada à cafeicultura, ao parque industrial e ao comércio, Três Pontas tem um mercado fitness ainda concentrado em academias de bairro e estúdios de porte pequeno a médio. A procura por personal trainer cresce entre produtores rurais, empresários e famílias de classe média que buscam atendimento individualizado, muitas vezes conciliando a rotina do agronegócio com horários de treino no início ou no fim do dia.',

  bairrosNobres: ['Centro', 'Cidade Jardim', 'Santa Edwirges', 'Santana'],
  bairrosPopulares: ['Industrial', 'Nova Três Pontas', 'Catumbi', 'Botafogo'],

  parques: [
    {
      nome: 'Parque Municipal Vale do Sol',
      descricao:
        'Tombado pelo patrimônio cultural do município, reúne lago cercado por pista de caminhada, espaço para atividade física, playground, mesas para piquenique e mini-zoológico, com entrada gratuita. É o principal ponto de caminhada e corrida ao ar livre da cidade e sede da Corrida Vale do Sol.',
    },
    {
      nome: 'Praça Cônego Victor (Praça da Matriz)',
      descricao:
        'Praça histórica do Centro, ao lado da Igreja Matriz Nossa Senhora da Ajuda, marco do surgimento do povoado que deu origem à cidade; o entorno de casario colonial é usado para caminhadas curtas.',
    },
    {
      nome: 'Ginásio Poliesportivo do Trespontano Olímpico Clube (TOC)',
      descricao:
        'Estrutura esportiva do clube local, com ginásio poliesportivo usado para modalidades coletivas e eventos, complementando a oferta de espaços para atividade física da cidade.',
    },
  ],
  ciclovias:
    'Não há rede cicloviária estruturada com informações públicas divulgadas; caminhada e corrida se concentram no Parque Vale do Sol e nas vias do entorno do Centro.',

  clima:
    'O clima é tropical de altitude, com a cidade a cerca de 905 m e pontos da Serra de Três Pontas passando de 1.200 m. Há duas estações bem marcadas: verão chuvoso e inverno seco, com manhãs frias entre maio e agosto.',
  climaTreino:
    'A altitude deixa as temperaturas mais amenas que em cidades baixas do estado, favorecendo o treino ao ar livre durante boa parte do ano; nas manhãs mais frias de inverno vale agasalho, e no verão chuvoso o melhor horário costuma ser mais cedo, antes das chuvas da tarde.',

  mobilidade:
    'A rodovia estadual MG-167 é o principal eixo, cruzando a cidade e ligando-a a Varginha e Três Corações; ela dá acesso à BR-491 (em Varginha) e à BR-265 (em Santana da Vargem), rotas que conectam à Rodovia Fernão Dias (BR-381), além de entroncar com a BR-267 em Cambuquira. O transporte urbano é feito por ônibus, e as rodovias da região também escoam boa parte da produção cafeeira do município.',

  corridas: [
    {
      nome: 'Corrida Vale do Sol',
      descricao:
        'Prova de rua de 5 km com largada no Parque Vale do Sol, além da tradicional Corrida Kids; já teve diversas edições e reúne participantes de Três Pontas e cidades vizinhas.',
    },
    {
      nome: 'Corrida Vem Correr Três Pontas',
      descricao:
        'Evento com percursos de 5 km e 10 km, parte do calendário de corridas de rua que vem se consolidando na cidade nos últimos anos.',
    },
  ],
  culturaEsportiva:
    'O calendário de corridas de rua é o principal ponto de encontro dos praticantes de atividade física ao ar livre na cidade, com provas realizadas no Parque Vale do Sol e eventos comunitários que unem esporte, fé e lazer.',
  academias:
    'A oferta é formada por academias de bairro e estúdios de treino, de porte compatível com uma cidade média do interior, concentrados sobretudo no Centro e em bairros residenciais próximos.',

  destaquesFitness: [
    'Capital Mundial do Café: maior produtor de café do Brasil, economia que sustenta o comércio e os serviços locais.',
    'Parque Municipal Vale do Sol, com lago, pista de caminhada e sede da Corrida Vale do Sol.',
    'Clima de altitude (cerca de 905 m), mais ameno e favorável ao treino ao ar livre na maior parte do ano.',
    'Terra da Música, berço de Milton Nascimento e Wagner Tiso, com forte identidade cultural local.',
  ],

  precos: {
    avulsaMin: 55,
    avulsaMax: 115,
    mensalMin: 270,
    mensalMax: 700,
    onlineMin: 130,
    onlineMax: 350,
  },

  conclusao:
    'Capital Mundial do Café no Sul de Minas, Três Pontas combina clima de altitude, o Parque Vale do Sol e um calendário crescente de corridas de rua. Um personal trainer ajuda a aproveitar esses espaços com método, adaptando os horários às estações do ano e à rotina de quem vive entre a lavoura, a indústria e o comércio da cidade.',

  vizinhas: ['varginha-mg', 'tres-coracoes-mg'],

  fontes: [
    { nome: 'IBGE Cidades — Três Pontas', url: 'https://cidades.ibge.gov.br/brasil/mg/tres-pontas/panorama' },
    { nome: 'Atlas Brasil — IDHM', url: 'https://www.atlasbrasil.org.br/perfil/municipio/316940' },
    { nome: 'Câmara Municipal de Três Pontas — Dados do Município', url: 'https://www.camaratrespontas.mg.gov.br/a-camara/dados-do-municipio-de-tres-pontas' },
  ],
  atualizadoEm: '2026-06-29',
};
