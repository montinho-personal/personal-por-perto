import type { Cidade } from '../../lib/types';

export const cidade: Cidade = {
  slug: 'garanhuns-pe',
  nome: 'Garanhuns',
  uf: 'PE',
  estado: 'Pernambuco',
  estadoSlug: 'pernambuco',
  regiao: 'Nordeste',
  gentilico: 'garanhuense',
  tipo: 'cidade',

  populacao: 142506,
  populacaoAno: 2022,
  idhm: 0.664,
  idhmClasse: 'médio',
  altitudeM: 842,

  resumoEconomico:
    'No agreste de Pernambuco, a cerca de 230 km de Recife, Garanhuns é conhecida como a "Suíça Pernambucana" pelo clima frio de altitude. É polo regional de saúde e educação (com a UPE e a UFAPE), tem forte comércio e uma bacia leiteira relevante, com turismo impulsionado pelo Festival de Inverno (FIG).',

  mercado:
    'Cidade-polo de serviços e universitária, com público estudantil e de classe média que sustenta academias; o clima ameno favorece a atividade ao ar livre o ano todo.',

  bairrosNobres: ['Santo Antônio', 'Heliópolis', 'Boa Vista', 'Aloísio Pinto'],
  bairrosPopulares: ['Magano', 'São José', 'Dom Hélder Câmara', 'José Maria Dourado'],

  parques: [
    {
      nome: 'Parque Euclides Dourado (Parque dos Eucaliptos)',
      descricao:
        'Tem pista de cooper e corrida, pista de skate, quadras, academia ao ar livre, playground e biblioteca.',
    },
    {
      nome: 'Parque Ruber van der Linden (Pau Pombo)',
      descricao:
        'No centro, é reserva ambiental com fonte de água mineral e áreas de caminhada.',
    },
    {
      nome: 'Relevo das colinas',
      descricao:
        'A topografia de morros da cidade é usada para treino de subida e corrida.',
    },
  ],
  ciclovias:
    'A extensão da rede cicloviária urbana ainda não é divulgada em fonte oficial.',

  clima:
    'O clima é tropical de altitude, ameno, com média anual em torno de 21 °C, podendo cair perto de 9 °C no inverno.',
  climaTreino:
    'O frio de altitude favorece os treinos ao ar livre o dia todo; as manhãs frias e úmidas pedem aquecimento prolongado.',

  mobilidade:
    'Garanhuns é servida pela BR-423 e pela BR-424, eixos de acesso regional que ligam a Recife e ao agreste e sertão.',

  corridas: [
    {
      nome: 'Duo Night Run',
      descricao:
        'Realizada no Parque Euclides Dourado, com provas de 5 km e 10 km.',
    },
    {
      nome: 'Corrida da Fogueira',
      descricao:
        'Prova tradicional de 15 km, com largada em São João e chegada em Garanhuns, de percurso desafiador.',
    },
  ],
  culturaEsportiva:
    'O calendário de corridas se concentra no meio do ano; o clima frio e os parques tornam a corrida e a caminhada hábitos fortes, e o turismo de inverno (FIG) também movimenta o esporte ao ar livre.',
  academias:
    'A oferta reúne academias e estúdios, com público estudantil e de classe média, complementada pelo Parque Euclides Dourado e pelo Pau Pombo.',

  destaquesFitness: [
    'Parque Euclides Dourado: pista de cooper, academia e quadras — principal hub de treino.',
    'Parque Pau Pombo para caminhada em meio à reserva ambiental.',
    'Clima frio de altitude — diferencial para treino ao ar livre o dia inteiro.',
    'Calendário ativo de corridas (Duo Night Run, Corrida da Fogueira).',
  ],

  precos: {
    avulsaMin: 55,
    avulsaMax: 135,
    mensalMin: 280,
    mensalMax: 760,
    onlineMin: 150,
    onlineMax: 390,
  },

  conclusao:
    'A Suíça Pernambucana, Garanhuns tem clima frio de altitude raro no Nordeste, ótimos parques e polo universitário. Um personal trainer ajuda a aproveitar o Parque Euclides Dourado e as colinas com método, num clima favorável ao treino ao ar livre o ano todo.',

  vizinhas: ['caruaru-pe', 'recife-pe'],

  fontes: [
    { nome: 'IBGE Cidades — Garanhuns', url: 'https://cidades.ibge.gov.br/brasil/pe/garanhuns/panorama' },
    { nome: 'Prefeitura de Garanhuns', url: 'https://www.garanhuns.pe.gov.br/' },
    { nome: 'Atlas Brasil — IDHM', url: 'https://www.atlasbrasil.org.br/' },
  ],
  atualizadoEm: '2026-06-29',
};
