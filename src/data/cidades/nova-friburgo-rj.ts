import type { Cidade } from '../../lib/types';

export const cidade: Cidade = {
  slug: 'nova-friburgo-rj',
  nome: 'Nova Friburgo',
  uf: 'RJ',
  estado: 'Rio de Janeiro',
  estadoSlug: 'rio-de-janeiro',
  regiao: 'Sudeste',
  gentilico: 'friburguense',
  tipo: 'cidade',

  populacao: 189939,
  populacaoAno: 2022,
  idhm: 0.745,
  idhmClasse: 'alto',
  altitudeM: 846,

  resumoEconomico:
    'Na serra fluminense de clima frio, Nova Friburgo é oficialmente a Capital Nacional da Moda Íntima, com um polo de lingerie que reúne milhares de empresas e responde por boa parte da produção nacional. O turismo de montanha (trilhas, trekking, rafting e gastronomia, com herança da colonização suíça) também é relevante para a economia.',

  mercado:
    'A cidade tem cultura de atividade ao ar livre na natureza (trilhas e corrida de montanha) e um calendário ativo de corridas; o clima frio favorece treinos de resistência e os ambientes indoor de musculação.',

  bairrosNobres: ['Cônego', 'Cascatinha', 'Braunes', 'Mury'],
  bairrosPopulares: ['Olaria', 'Conselheiro Paulino', 'Alto de Olaria', 'Duas Pedras'],

  parques: [
    {
      nome: 'Parque São Clemente',
      descricao:
        'Tem pistas de cooper, lagoas e jardins, um dos principais espaços de caminhada e corrida da cidade.',
    },
    {
      nome: 'Nova Friburgo Country Club',
      descricao:
        'Aberto ao público, é ótimo para caminhada e corrida em meio à natureza, com quadras e ampla área verde.',
    },
    {
      nome: 'Parque Municipal Juarez Frotté',
      descricao:
        'Natureza preservada com cachoeira, mirante e trilhas para caminhada.',
    },
  ],
  ciclovias:
    'A infraestrutura cicloviária urbana ainda não é divulgada em fonte oficial; a cidade tem perfil mais voltado a trilhas e corrida de montanha.',

  clima:
    'O clima é frio de serra, com média anual em torno de 19 °C e invernos rigorosos (mínimas que se aproximam de 1 a 5 °C, com geadas), entre os mais frios do estado.',
  climaTreino:
    'O frio exige aquecimento mais longo e agasalho na corrida ao ar livre, valorizando o treino indoor no inverno; os verões amenos são excelentes para atividades externas.',

  mobilidade:
    'O acesso principal é pela RJ-116 (cerca de 140 km da capital), com ligações também pela BR-492, RJ-150 e RJ-142.',

  corridas: [
    {
      nome: 'Friburgo Meia Maratona',
      descricao:
        'Largada na Praça Lafaiete Bravo, com percursos de 6 km e 21,1 km.',
    },
    {
      nome: 'Route Run',
      descricao:
        'Prova mista (asfalto e terra) de 5 km na Casa Suíça, com perfil de corrida na serra.',
    },
  ],
  culturaEsportiva:
    'Nova Friburgo tem forte tradição de ecoturismo e esportes de montanha (trilhas, trekking e rafting), com calendário de corridas de rua recheado ao longo do ano, em asfalto e trail.',
  academias:
    'A oferta de academias e estúdios é complementada por parques como o São Clemente e pelo Country Club, com o clima de serra incentivando tanto o indoor quanto o trail.',

  destaquesFitness: [
    'Parque São Clemente com pistas de cooper.',
    'Country Club aberto ao público para corrida e caminhada na natureza.',
    'Calendário robusto de corridas (Friburgo Meia Maratona, Route Run).',
    'Perfil de montanha ideal para trail running e treino em clima frio.',
  ],

  precos: {
    avulsaMin: 70,
    avulsaMax: 165,
    mensalMin: 350,
    mensalMax: 940,
    onlineMin: 170,
    onlineMax: 430,
  },

  conclusao:
    'Capital da moda íntima e refúgio de serra, Nova Friburgo une clima frio, trilhas e uma cena de corrida ativa. Um personal trainer ajuda a equilibrar o treino indoor do inverno com o trail dos verões amenos, mantendo a constância o ano todo.',

  vizinhas: ['petropolis-rj', 'rio-de-janeiro-rj'],

  fontes: [
    { nome: 'IBGE Cidades — Nova Friburgo', url: 'https://cidades.ibge.gov.br/brasil/rj/nova-friburgo/panorama' },
    { nome: 'Prefeitura de Nova Friburgo', url: 'https://pmnf.rj.gov.br/' },
    { nome: 'Atlas Brasil — IDHM', url: 'https://www.atlasbrasil.org.br/' },
  ],
  atualizadoEm: '2026-06-29',
};
