import type { Cidade } from '../../lib/types';

export const cidade: Cidade = {
  slug: 'paulo-afonso-ba',
  nome: 'Paulo Afonso',
  uf: 'BA',
  estado: 'Bahia',
  estadoSlug: 'bahia',
  regiao: 'Nordeste',
  gentilico: 'paulo-afonsino',
  tipo: 'cidade',

  populacao: 112870,
  populacaoAno: 2022,
  idhm: 0.674,
  idhmClasse: 'médio',
  altitudeM: 250,

  resumoEconomico:
    'No extremo norte da Bahia, na divisa com Alagoas e Pernambuco, Paulo Afonso nasceu e cresceu em torno do complexo hidrelétrico da Chesf no rio São Francisco. É conhecida como a capital da energia, mas vem se firmando como polo de turismo de aventura, com cânions, trilhas e esportes radicais no Velho Chico. A economia combina o setor elétrico, o comércio e os serviços que atendem a uma microrregião do semiárido.',

  mercado:
    'Como polo de serviços do extremo norte baiano, Paulo Afonso tem público de classe média ligado à Chesf e ao comércio, o que sustenta academias e personal trainers. O calor do semiárido e a vocação para o turismo de aventura no São Francisco favorecem o acompanhamento profissional, seja para treino funcional ao ar livre nas horas mais frescas, seja para preparo voltado a trilhas e esportes no rio.',

  bairrosNobres: ['Centro', 'General Dutra', 'Alves de Souza', 'Tancredo Neves'],
  bairrosPopulares: ['BTN (Bairro Tancredo Neves)', 'Perpétuo Socorro', 'Vila Poty', 'Tabuleiro'],

  parques: [
    {
      nome: 'Cânions do São Francisco',
      descricao:
        'Paredões de pedra esculpidos pelo rio São Francisco logo abaixo das usinas, percorridos em passeios de catamarã e ponto de partida para esportes de aventura como caiaque e trilhas no entorno.',
    },
    {
      nome: 'Complexo Hidrelétrico da Chesf',
      descricao:
        'As usinas Paulo Afonso I, II, III e IV e Apolônio Sales formam um cartão-postal visitável, com mirantes e áreas verdes em torno do rio que servem para caminhada e contemplação.',
    },
    {
      nome: 'Estação Ecológica Raso da Catarina',
      descricao:
        'Unidade de conservação de caatinga preservada na região, com formações de arenito e cânions secos como a Baixa do Chico, destino de trilhas e ecoturismo no sertão.',
    },
  ],
  ciclovias:
    'A cidade tem trechos de ciclofaixas em avenidas centrais, mas a malha cicloviária ainda é limitada e não há extensão total divulgada em fonte oficial.',

  clima:
    'O clima é semiárido, quente e seco, com poucas chuvas ao longo do ano. As temperaturas costumam variar de cerca de 18 °C nas madrugadas a 37 °C nas tardes mais quentes.',
  climaTreino:
    'O calor intenso e a baixa umidade pedem treino ao ar livre no começo da manhã ou no fim da tarde, com hidratação reforçada; nos horários de pico de sol, o ambiente climatizado da academia tende a ser mais seguro.',

  mobilidade:
    'Paulo Afonso é servida pela BR-110 e pela BA-210, eixos que a ligam a Alagoas, Pernambuco e ao restante da Bahia, e conta com aeroporto regional, o que reforça seu papel de centro de serviços do semiárido nordestino.',

  corridas: [
    {
      nome: 'Meia Maratona de Paulo Afonso',
      descricao:
        'Prova de rua que reúne corredores da região com percursos pela cidade, reforçando o calendário esportivo local.',
    },
    {
      nome: 'Desafio dos Sertões',
      descricao:
        'Competição de aventura sediada na cidade, com modalidades como canoagem, natação, trekking, mountain bike e travessia no cânion do São Francisco.',
    },
  ],
  culturaEsportiva:
    'A cultura esportiva de Paulo Afonso é marcada pelo turismo de aventura no rio São Francisco, com canoagem, trilhas e esportes radicais nos cânions, somados a provas de corrida de rua que crescem no calendário regional.',
  academias:
    'A oferta de academias se concentra no Centro e nos bairros de classe média, atendendo o público ligado à Chesf, ao comércio e aos serviços, com ambiente climatizado valorizado diante do calor do semiárido.',

  destaquesFitness: [
    'Turismo de aventura no rio São Francisco, com cânions, trilhas e esportes radicais.',
    'Polo regional de serviços do extremo norte baiano, com público de classe média.',
    'Calendário com corrida de rua e o Desafio dos Sertões, prova de aventura.',
    'Natureza preservada por perto, da Estação Ecológica Raso da Catarina aos mirantes da Chesf.',
  ],

  precos: {
    avulsaMin: 45,
    avulsaMax: 110,
    mensalMin: 240,
    mensalMax: 680,
    onlineMin: 110,
    onlineMax: 340,
  },

  conclusao:
    'Capital da energia e porta de entrada para os cânions do São Francisco, Paulo Afonso combina calor de sertão com uma vocação rara para o esporte de aventura. Um personal trainer ajuda a treinar com segurança nos horários mais frescos e a preparar o corpo para trilhas e atividades no Velho Chico, com um plano sob medida.',

  vizinhas: ['juazeiro-ba', 'petrolina-pe', 'feira-de-santana-ba'],

  fontes: [
    { nome: 'IBGE Cidades — Paulo Afonso', url: 'https://cidades.ibge.gov.br/brasil/ba/paulo-afonso/panorama' },
    { nome: 'Prefeitura de Paulo Afonso', url: 'https://pauloafonso.ba.gov.br/' },
    { nome: 'Atlas Brasil — IDHM', url: 'https://www.atlasbrasil.org.br/' },
  ],
  atualizadoEm: '2026-06-29',
};
