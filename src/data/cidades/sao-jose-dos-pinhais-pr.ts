import type { Cidade } from '../../lib/types';

export const cidade: Cidade = {
  slug: 'sao-jose-dos-pinhais-pr',
  nome: 'São José dos Pinhais',
  uf: 'PR',
  estado: 'Paraná',
  estadoSlug: 'parana',
  regiao: 'Sul',
  gentilico: 'são-joseense',
  tipo: 'cidade',

  populacao: 329222,
  populacaoAno: 2022,
  idhm: 0.758,
  idhmClasse: 'alto',
  altitudeM: 900,

  resumoEconomico:
    'Integrante da Região Metropolitana de Curitiba, a poucos minutos do centro da capital, São José dos Pinhais é um dos principais polos automotivos do país, com montadoras como Volkswagen, Audi, Nissan e Renault. Abriga o Aeroporto Internacional Afonso Pena, o principal do Paraná.',

  mercado:
    'Cidade populosa e de renda média alta na região metropolitana, tem rede consolidada de academias e estúdios e forte cultura de corrida de rua organizada pela prefeitura, com o Ginásio Ney Braga como hub de eventos.',

  bairrosNobres: ['Centro', 'Cidade Jardim', 'Aristocrata', 'São Pedro'],
  bairrosPopulares: ['Afonso Pena', 'Boneca do Iguaçu', 'Guatupê', 'Uberaba'],

  parques: [
    {
      nome: 'Parque Linear do Rio Itaqui',
      descricao:
        'Com cerca de 19 km de extensão, tem ciclovia, pista de caminhada, academia ao ar livre e playground.',
    },
    {
      nome: 'Parque da Fonte',
      descricao:
        'Cerca de 3 hectares de araucárias, com pistas de caminhada, academia ao ar livre e parque infantil.',
    },
    {
      nome: 'Parque Memorial do Rio Iguaçu',
      descricao:
        'Em Uberaba, tem ciclovia de cerca de 3 km, pista de caminhada e campo de futebol, conectado por ciclovia ao Parque São José.',
    },
  ],
  ciclovias:
    'Há ciclovias margeando o Rio Iguaçu (ligando o Parque São José ao Memorial), além do Parque Linear do Rio Itaqui (cerca de 19 km) e do Bosque da Usina.',

  clima:
    'O clima é subtropical úmido mesotérmico, com verões frescos e geadas frequentes no inverno (temperaturas que ficam abaixo de 18 °C).',
  climaTreino:
    'O frio é relevante: o treino ao ar livre exige aquecimento prolongado no inverno, e os ambientes indoor são valorizados nos meses mais frios.',

  mobilidade:
    'São José dos Pinhais é cortada pela BR-376 e pela BR-277, com acesso direto ao Aeroporto Afonso Pena e conexão rápida com Curitiba.',

  corridas: [
    {
      nome: 'Circuito Corrida de Rua de São José dos Pinhais',
      descricao:
        'Com etapas ao longo do ano (5 km e 10 km) e largada no Ginásio Ney Braga.',
    },
    {
      nome: 'Meia Maratona de São José dos Pinhais',
      descricao:
        'Prova com percursos de 21,095 km e 5 km, parte do calendário municipal.',
    },
  ],
  culturaEsportiva:
    'A cidade tem calendário municipal de corridas robusto e recorrente, com forte presença de assessorias esportivas e uso intenso dos parques lineares para caminhada e ciclismo.',
  academias:
    'A oferta reúne academias e estúdios, com a proximidade de Curitiba ampliando público e eventos, e o clima frio favorecendo o treino indoor de força.',

  destaquesFitness: [
    'Ginásio Ney Braga como epicentro de provas de rua.',
    'Rede ampla de parques lineares com academia ao ar livre.',
    'Proximidade com Curitiba, que amplia público e oferta de eventos.',
    'Clima frio que favorece estúdios indoor e treino de força.',
  ],

  precos: {
    avulsaMin: 70,
    avulsaMax: 170,
    mensalMin: 360,
    mensalMax: 960,
    onlineMin: 170,
    onlineMax: 440,
  },

  conclusao:
    'Polo automotivo da Grande Curitiba, São José dos Pinhais tem ampla rede de parques lineares e calendário de corridas forte. Um personal trainer ajuda a aproveitar o Parque do Rio Itaqui com método, equilibrando outdoor e indoor conforme o frio do inverno.',

  vizinhas: ['curitiba-pr'],

  fontes: [
    { nome: 'IBGE Cidades — São José dos Pinhais', url: 'https://cidades.ibge.gov.br/brasil/pr/sao-jose-dos-pinhais/panorama' },
    { nome: 'Prefeitura de São José dos Pinhais', url: 'https://www.sjp.pr.gov.br/' },
    { nome: 'Atlas Brasil — IDHM', url: 'https://www.atlasbrasil.org.br/' },
  ],
  atualizadoEm: '2026-08-12',

  capaArte: {
    src: '/capas-cidade/sao-jose-dos-pinhais-pr.webp',
    w: 1200,
    h: 900,
    alt:
      'Personal trainer em São José dos Pinhais (PR) em arte que reúne treino com corda naval, a Catedral São José, o Aeroporto Internacional Afonso Pena e o portal do Caminho do Vinho — Personal por Perto',
    legenda:
      'Treino personalizado em São José dos Pinhais: um plano feito para o seu corpo e a sua rotina, com acompanhamento profissional na cidade e região.',
  },
};
