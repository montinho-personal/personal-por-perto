import type { Cidade } from '../../lib/types';

export const cidade: Cidade = {
  slug: 'januaria-mg',
  nome: 'Januária',
  uf: 'MG',
  estado: 'Minas Gerais',
  estadoSlug: 'minas-gerais',
  regiao: 'Sudeste',
  gentilico: 'januarense',
  tipo: 'cidade',

  populacao: 65150,
  populacaoAno: 2022,
  idhm: 0.658,
  idhmClasse: 'médio',
  altitudeM: 474,

  resumoEconomico:
    'No Norte de Minas, às margens do rio São Francisco, Januária é polo de uma das principais microrregiões do Médio-Alto São Francisco. A economia combina agropecuária — cana-de-açúcar, milho, mandioca e feijão, além de áreas de agricultura irrigada ligadas ao projeto Jaíba — com a pecuária, o comércio e os serviços que atendem a região. A cidade é nacionalmente conhecida pela cachaça artesanal, herança da tradição canavieira do velho Chico, e o turismo cresce em torno do centro histórico tombado e das praias fluviais que se formam na vazante do rio.',

  mercado:
    'Como cidade média do interior mineiro e referência regional, Januária tem um mercado fitness em formação, apoiado em academias locais de musculação e treino funcional. A procura por personal trainers aparece entre quem busca orientação para treinar no calor do norte de Minas e aproveitar a beira do rio e os espaços ao ar livre, especialmente na temporada de praia fluvial.',

  bairrosNobres: ['Centro', 'Aparecida', 'São Vicente', 'Vila Bom Jesus'],
  bairrosPopulares: ['Esplanada', 'São Geraldo', 'Morada do Sol', 'Vila Nova'],

  parques: [
    {
      nome: 'Orla do Rio São Francisco',
      descricao:
        'A beira do velho Chico é o principal espaço de lazer e atividade ao ar livre da cidade, com calçadões e trechos usados para caminhada e corrida, integrando o cotidiano ribeirinho à rotina de treino.',
    },
    {
      nome: 'Praia de Minas',
      descricao:
        'Praia fluvial que se forma na vazante do São Francisco, entre julho e outubro, com faixas de areia, quiosques, arena esportiva e academia ao ar livre — um ponto sazonal para exercício à beira-rio durante a temporada.',
    },
    {
      nome: 'Centro Histórico',
      descricao:
        'Conjunto de casario colonial tombado como patrimônio cultural de Minas Gerais; as ruas planas e o entorno servem de percurso para caminhadas leves em meio à memória da cidade portuária.',
    },
  ],
  ciclovias:
    'A infraestrutura cicloviária é modesta e restrita a poucos trechos da área urbana; boa parte do pedal e da corrida acontece nas vias da cidade e ao longo da orla do rio São Francisco.',

  clima:
    'O clima é quente e semiárido, típico do Norte de Minas, com sol forte na maior parte do ano e temperaturas que com frequência ultrapassam os 35 °C. As chuvas se concentram no verão (de novembro a março) e o restante do ano é marcado por tempo seco, baixa umidade e dias muito quentes.',
  climaTreino:
    'O calor e a baixa umidade pedem treinar bem cedo ou no fim da tarde, com hidratação reforçada e atenção à exposição ao sol; nos picos de calor, os ambientes climatizados são a opção mais segura, e o período mais seco favorece o treino ao ar livre na beira do rio.',

  mobilidade:
    'Januária se conecta à região por rodovias estaduais que ligam a cidade a Montes Claros e ao restante do norte mineiro, com o transporte urbano feito por ônibus e veículos de menor porte. Historicamente, o porto fluvial no São Francisco foi o eixo logístico da cidade, e o rio segue presente na vida e na mobilidade ribeirinha.',

  corridas: [
    {
      nome: 'Corridas de rua na região',
      descricao:
        'A cidade participa do calendário de corridas de rua do norte de Minas, com provas de 5 km e 10 km que circulam pelos municípios da região ao longo do ano, reunindo corredores locais.',
    },
    {
      nome: 'Atividades na temporada de praia',
      descricao:
        'Durante a temporada da Praia de Minas, a arena esportiva e a academia ao ar livre montadas na orla concentram caminhadas, corridas e exercícios à beira do São Francisco.',
    },
  ],
  culturaEsportiva:
    'A cultura esportiva gira em torno do rio São Francisco — caminhada e corrida na orla, banho de rio e o uso intenso da praia fluvial na vazante — combinada às festas tradicionais e à vida ribeirinha que marcam o cotidiano januarense.',
  academias:
    'A oferta é formada sobretudo por academias locais de musculação e treino funcional, distribuídas pelo Centro e pelos bairros residenciais, com porte compatível com uma cidade média e polo regional do interior.',

  destaquesFitness: [
    'Cidade às margens do rio São Francisco, com orla usada para caminhada e corrida.',
    'Praia de Minas: praia fluvial sazonal (jul–out) com arena esportiva e academia ao ar livre.',
    'Clima quente e semiárido do Norte de Minas, que exige planejar horário e hidratação no treino.',
    'Polo regional conhecido pela cachaça artesanal, com economia de agropecuária, comércio e turismo.',
  ],

  precos: {
    avulsaMin: 50,
    avulsaMax: 115,
    mensalMin: 250,
    mensalMax: 700,
    onlineMin: 115,
    onlineMax: 350,
  },

  conclusao:
    'Cidade quente do Norte de Minas e às margens do velho Chico, Januária pede um treino adaptado ao clima semiárido e que aproveite a orla e a praia fluvial na temporada. Um personal trainer ajuda a organizar a rotina respeitando o calor, escolhendo os melhores horários e mantendo a constância ao longo do ano.',

  vizinhas: ['montes-claros-mg', 'pirapora-mg'],

  fontes: [
    { nome: 'IBGE Cidades — Januária', url: 'https://cidades.ibge.gov.br/brasil/mg/januaria/panorama' },
    { nome: 'Prefeitura de Januária', url: 'https://www.januaria.mg.gov.br/' },
    { nome: 'Atlas Brasil — IDHM', url: 'https://www.atlasbrasil.org.br/' },
  ],
  atualizadoEm: '2026-06-29',
};
