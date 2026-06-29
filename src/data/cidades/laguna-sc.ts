import type { Cidade } from '../../lib/types';

export const cidade: Cidade = {
  slug: 'laguna-sc',
  nome: 'Laguna',
  uf: 'SC',
  estado: 'Santa Catarina',
  estadoSlug: 'santa-catarina',
  regiao: 'Sul',
  gentilico: 'lagunense',
  tipo: 'cidade',

  populacao: 42785,
  populacaoAno: 2022,
  idhm: 0.752,
  idhmClasse: 'alto',
  altitudeM: 4,

  resumoEconomico:
    'No litoral sul de Santa Catarina, Laguna é uma das cidades mais antigas do estado e palco de capítulos marcantes da história brasileira, como a República Juliana e a trajetória de Anita Garibaldi. A economia se apoia no turismo, com cerca de 45 km de praias, e na pesca artesanal — incluindo a célebre pesca cooperativa com botos, prática rara no mundo. O centro histórico tombado e o conjunto de praias e do Farol de Santa Marta sustentam um fluxo sazonal forte no verão.',

  mercado:
    'O mercado de treino acompanha a sazonalidade do litoral: a procura por academias, estúdios e personal trainers cresce no verão e no entorno da orla do Mar Grosso, onde se concentram comércio e moradia. A orla e os calçadões servem de espaço gratuito para corrida e treino funcional ao ar livre.',

  bairrosNobres: ['Mar Grosso', 'Centro', 'Magalhães', 'Progresso'],
  bairrosPopulares: ['Cabeçudas', 'Portinho', 'Ponta da Barra', 'Esperança'],

  parques: [
    {
      nome: 'Orla da Praia do Mar Grosso',
      descricao:
        'Principal praia urbana de Laguna, com cerca de 3 km de extensão e calçadão à beira-mar — o espaço mais usado para caminhada, corrida e treino ao ar livre na cidade.',
    },
    {
      nome: 'Molhes da Barra',
      descricao:
        'Onde acontece a pesca cooperativa com botos, é também um ponto de caminhada e de contato com a paisagem da Barra, entre o canal e o mar.',
    },
    {
      nome: 'Farol de Santa Marta',
      descricao:
        'No extremo sul do município, reúne um dos maiores faróis das Américas, costões e praias de mar aberto procuradas por surfistas e por quem treina em ambiente natural.',
    },
  ],
  ciclovias:
    'Há trechos de calçadão e vias na orla do Mar Grosso usados por ciclistas e corredores; a malha cicloviária estruturada ainda é limitada e a extensão total não é divulgada em fonte oficial.',

  clima:
    'O clima é subtropical úmido, típico do litoral sul catarinense, com verões quentes em torno de 26 °C a 28 °C e invernos frios, com mínimas perto de 12 °C a 13 °C, influenciado pela maritimidade e por ventos fortes.',
  climaTreino:
    'O inverno é confortável para treino ao ar livre na orla; no verão, vale priorizar a manhã ou o fim de tarde e reforçar a hidratação. A presença frequente de vento na faixa litorânea exige atenção em treinos de corrida e ciclismo.',

  mobilidade:
    'A BR-101 corta o município e é o principal eixo de acesso, ligando Laguna a Tubarão, ao norte, e a Criciúma e ao extremo sul do estado. A travessia e os deslocamentos internos combinam vias urbanas no entorno do Mar Grosso e estradas de acesso às praias e ao Farol de Santa Marta.',

  corridas: [
    {
      nome: 'Corrida de São Silvelho',
      descricao:
        'Tradicional prova de fim de ano da cidade, com largada e chegada na região do Magalhães, no centro histórico, em formato de circuito de voltas.',
    },
    {
      nome: '10 Milhas de Anita',
      descricao:
        'Prova de rua que percorre pontos emblemáticos de Laguna, passando pelo centro histórico ligado à memória de Anita Garibaldi.',
    },
  ],
  culturaEsportiva:
    'A relação de Laguna com o mar molda a cultura esportiva local: surfe nas praias de mar aberto do Farol de Santa Marta e de Cardoso, pesca artesanal e uma orla que funciona como academia a céu aberto. O calendário de verão concentra eventos esportivos e corridas que aproveitam o cenário histórico e litorâneo.',
  academias:
    'A oferta reúne academias, estúdios e profissionais de personal training concentrados sobretudo na região do Mar Grosso e no centro, com procura que se intensifica na temporada de verão.',

  destaquesFitness: [
    'Orla do Mar Grosso com cerca de 3 km de calçadão para corrida e treino ao ar livre.',
    'Cenário histórico e natural único (centro tombado, Farol de Santa Marta, Molhes da Barra).',
    'Praias de mar aberto procuradas por surfistas e por treino em ambiente natural.',
    'Inverno ameno favorece a atividade ao ar livre; o verão exige ajuste de horário e hidratação.',
  ],

  precos: {
    avulsaMin: 55,
    avulsaMax: 120,
    mensalMin: 270,
    mensalMax: 720,
    onlineMin: 130,
    onlineMax: 360,
  },

  conclusao:
    'Cidade histórica e litorânea do sul de SC, Laguna une praias, pesca tradicional e um centro tombado a um forte apelo de verão. Um personal trainer ajuda a aproveitar a orla do Mar Grosso e as praias do Farol de Santa Marta com segurança — da caminhada à beira-mar à preparação para as corridas de rua da cidade.',

  vizinhas: ['tubarao-sc', 'criciuma-sc'],

  fontes: [
    { nome: 'IBGE Cidades — Laguna', url: 'https://cidades.ibge.gov.br/brasil/sc/laguna/panorama' },
    { nome: 'Prefeitura de Laguna', url: 'https://laguna.sc.gov.br/' },
    { nome: 'Atlas Brasil — IDHM', url: 'https://www.atlasbrasil.org.br/' },
  ],
  atualizadoEm: '2026-06-29',
};
