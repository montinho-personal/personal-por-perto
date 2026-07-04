import type { Cidade } from '../../lib/types';

export const cidade: Cidade = {
  slug: 'sao-gotardo-mg',
  nome: 'São Gotardo',
  uf: 'MG',
  estado: 'Minas Gerais',
  estadoSlug: 'minas-gerais',
  regiao: 'Sudeste',
  gentilico: 'são-gotardense',
  tipo: 'cidade',

  populacao: 40910,
  populacaoAno: 2022,
  idhm: 0.736,
  idhmClasse: 'alto',
  pibPerCapita: 38019,
  pibPerCapitaAno: 2023,
  altitudeM: 1100,

  resumoEconomico:
    'São Gotardo fica no Alto Paranaíba mineiro, a 1.100 metros de altitude — uma das sedes municipais mais altas da região —, e é um dos polos mais importantes do agronegócio de precisão do Cerrado brasileiro. Ao lado de Tiros, Matutina, Ibiá, Rio Paranaíba e Campos Altos, o município integra a região que recebeu do INPI a Indicação Geográfica para cenoura, alho, batata e abacate: são cerca de 400 produtores rurais responsáveis pela maior produção de alho do Brasil (por volta de 45 mil toneladas por ano em 3 mil hectares) e por dezenas de milhares de toneladas de batata e cenoura cultivadas sob pivô central, tecnologia que a imigração japonesa iniciada em 1910 ajudou a disseminar na região. A cidade também está na rota do café do Cerrado Mineiro e abriga, no distrito de Cerrado Verde, a mina de potássio da Verde AgriTech — a primeira mina de potássio aberta no Brasil em quarenta anos, que processa siltito glauconítico com tecnologia desenvolvida em parceria com a Universidade de Cambridge. O PIB municipal soma cerca de R$ 1,2 bilhão, com os serviços respondendo por 58,7% do valor adicionado, a administração pública por 16,6%, a agropecuária por 12,6% e a indústria por 12,1%; o PIB per capita foi de R$ 38.019 em 2023.',

  mercado:
    'O mercado de personal trainers em São Gotardo é impulsionado pela renda do agronegócio de hortaliças, pela presença de uma instituição de ensino superior — o Centro de Ensino Superior de São Gotardo (CESG) — e pelo quadro de funcionários ligado à mineração de potássio, público que costuma buscar treino orientado para compensar rotinas de trabalho físico ou administrativo intenso.',

  bairrosNobres: ['Centro', 'Campestre', 'Jardim das Flores'],
  bairrosPopulares: ['Tancredo Neves', 'Portal das Palmeiras', 'Jardim Novo Mundo', 'São Geraldo'],

  parques: [
    {
      nome: 'Lago Balneário de São Gotardo',
      descricao:
        'Represa formada em 1996 no bairro Jardim das Flores, com paisagem natural preservada e projetos de peixamento em parceria com a Codevasf; a orla é o principal espaço da cidade para caminhada, ciclismo e piquenique ao ar livre.',
    },
    {
      nome: 'Parque de Exposições de São Gotardo',
      descricao:
        'Sedia a Corrida da Cenoura e a FENACEN (Festa Nacional da Cenoura), além de ter recebido a etapa microrregional dos Jogos Escolares de Minas Gerais (JEMG) em 2025 — um dos principais equipamentos públicos ligados ao esporte na cidade.',
    },
    {
      nome: 'Clube Campestre de São Gotardo',
      descricao:
        'Sede recreativa tradicional da cidade, na avenida Tabelião João Lopes, no bairro Campestre, com piscinas e quadras usadas para esporte e lazer estruturado pelos sócios.',
    },
  ],
  ciclovias:
    'Não há malha cicloviária estruturada pela cidade; o ciclismo recreativo se concentra na orla do Lago Balneário e nas estradas rurais que cortam as lavouras irrigadas por pivô central.',

  clima:
    'O clima é subtropical de altitude (Cwb), com inverno seco e verão chuvoso — mais de 80% das chuvas se concentram no verão, e a temperatura média oscila entre 19 °C e 26 °C. Como a sede municipal está a 1.100 metros de altitude, os invernos são frios e secos, com geadas frequentes nos vales e nas regiões mais altas do entorno.',
  climaTreino:
    'A altitude de 1.100 metros deixa as manhãs de inverno bastante frias, exigindo agasalho e aquecimento mais cauteloso antes do treino ao ar livre; no verão, a concentração das chuvas no fim da tarde favorece treinar pela manhã, e a baixa umidade do período seco pede atenção redobrada à hidratação.',

  mobilidade:
    'O acesso a São Gotardo se dá pela MG-235, que liga o município à BR-354 — a "Rodovia do Milho" —, principal corredor rodoviário do Alto Paranaíba em direção a Ibiá, Uberaba e ao sul de Minas. O tráfego de cargas da produção agrícola e da mineração de potássio é intenso, e parte do transporte do minério ainda passa pela área urbana da cidade, um desafio de mobilidade reconhecido pela associação de municípios da região (AMAPAR).',

  corridas: [
    {
      nome: 'Corrida da Cenoura',
      descricao:
        'Prova de rua tradicional da cidade, com percurso de 6 km e largada e chegada no Parque de Exposições, realizada durante a semana da FENACEN e reunindo atletas de várias regiões do país — a 9ª edição ocorreu em 2023.',
    },
    {
      nome: 'Corrida da Mulher',
      descricao: 'Evento recorrente voltado ao público feminino, parte do calendário de corridas de rua da cidade.',
    },
  ],
  culturaEsportiva:
    'A cultura esportiva local combina a tradição agrícola — inclusive a disciplina herdada da imigração japonesa que ajudou a modernizar a horticultura da região — com o uso do Lago Balneário para caminhada e ciclismo e do Clube Campestre para esporte estruturado. A cidade também tem papel de destaque no esporte escolar da região, tendo sediado a etapa microrregional do JEMG em 2025.',
  academias:
    'A oferta de academias e estúdios de treino funcional está concentrada no Centro e no bairro Campestre, atendendo a uma população impulsionada pela renda do agronegócio, da indústria de potássio e da vida universitária ligada ao CESG.',

  destaquesFitness: [
    'Indicação Geográfica do INPI para cenoura, alho, batata e abacate — a região é a maior produtora de alho do Brasil.',
    'Mina de potássio da Verde AgriTech, com tecnologia desenvolvida em parceria com a Universidade de Cambridge.',
    'Altitude de 1.100 metros, entre as maiores sedes municipais do Alto Paranaíba, com invernos frios e secos.',
    'Corrida da Cenoura, disputada durante a FENACEN, com largada no Parque de Exposições.',
  ],

  precos: {
    avulsaMin: 55,
    avulsaMax: 120,
    mensalMin: 270,
    mensalMax: 710,
    onlineMin: 125,
    onlineMax: 350,
  },

  conclusao:
    'Polo nacional de hortaliças sob Indicação Geográfica e sede de uma das poucas minas de potássio do Brasil, São Gotardo une agronegócio de alta tecnologia a um clima de altitude que pede estratégia para o treino ao ar livre. Um personal trainer ajuda a ajustar aquecimento e hidratação entre o inverno seco e frio e o verão chuvoso, aproveitando espaços como o Lago Balneário e o Clube Campestre.',

  vizinhas: ['patos-de-minas-mg', 'rio-paranaiba-mg', 'campos-altos-mg'],

  fontes: [
    { nome: 'IBGE Cidades — São Gotardo', url: 'https://cidades.ibge.gov.br/brasil/mg/sao-gotardo/panorama' },
    { nome: 'Prefeitura Municipal de São Gotardo', url: 'https://www.saogotardo.mg.gov.br/' },
    { nome: 'Atlas Brasil — IDHM', url: 'https://www.atlasbrasil.org.br/' },
    {
      nome: 'ANAPA — Indicação Geográfica da região de São Gotardo',
      url: 'https://anapa.com.br/produtores-de-sao-gotardo-conquistam-indicacao-geografica/',
    },
    {
      nome: 'Verde AgriTech — história do projeto de potássio em São Gotardo',
      url: 'https://blog.verde.ag/pt/verde/nossa-historia-encontrando-a-solucao-para-superar-a-tempestade/',
    },
  ],
  atualizadoEm: '2026-07-04',
};
