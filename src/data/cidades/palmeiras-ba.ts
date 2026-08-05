import type { Cidade } from '../../lib/types';

export const cidade: Cidade = {
  slug: 'palmeiras-ba',
  nome: 'Palmeiras',
  uf: 'BA',
  estado: 'Bahia',
  estadoSlug: 'bahia',
  regiao: 'Nordeste',
  gentilico: 'palmeirense',
  tipo: 'cidade',

  populacao: 10339,
  populacaoAno: 2022,
  idhm: 0.643,
  idhmClasse: 'médio',
  altitudeM: 550,

  resumoEconomico:
    'No coração da Chapada Diamantina, Palmeiras foi uma das cidades mais importantes das Lavras Diamantinas no auge da mineração — hoje vive do turismo de natureza, que fez a população crescer mais de 24% no Censo 2022. O distrito do Vale do Capão, com sua comunidade alternativa, e a Cachoeira da Fumaça, uma das maiores quedas d’água do Brasil, são os motores dessa nova economia.',

  mercado:
    'Aqui o condicionamento físico é ferramenta de trabalho: guias, condutores e pousadeiros vivem de trilhas que exigem horas de caminhada com carga. O mercado formal de academias é pequeno, mas o Vale do Capão concentra uma cultura de corpo e movimento rara — yoga, dança, escalada e treino funcional convivem no mesmo vale.',

  bairrosNobres: ['Centro', 'Vale do Capão', 'Caeté-Açu', 'Bela Vista'],
  bairrosPopulares: ['Riachinho', 'Serrano', 'Bomba', 'Lagoa Grande'],

  parques: [
    {
      nome: 'Cachoeira da Fumaça',
      descricao:
        'Com cerca de 340 metros de queda livre, é uma das maiores cachoeiras do Brasil — a trilha até o mirante, saindo do Vale do Capão, tem subida forte e recompensa histórica no topo.',
    },
    {
      nome: 'Vale do Capão',
      descricao:
        'O distrito de Caeté-Açu é a base das grandes travessias da Chapada e reúne uma comunidade dedicada ao movimento: trilhas, escalada, yoga e dança fazem parte da rotina local.',
    },
    {
      nome: 'Parque Nacional da Chapada Diamantina',
      descricao:
        'O município integra o parque nacional, com o Vale do Pati — considerado uma das travessias mais bonitas do país — partindo da região.',
    },
  ],
  ciclovias:
    'O cicloturismo e o mountain bike percorrem as estradas de terra entre os vales e as vilas; não há malha cicloviária urbana.',

  clima:
    'Clima tropical de altitude: dias quentes e noites frescas, com chuvas de verão que enchem as cachoeiras e um inverno seco de céu limpo.',
  climaTreino:
    'A altitude e a sombra dos vales permitem treinar ao ar livre o ano todo; o inverno seco é a alta temporada das travessias, e as trilhas pedem atenção ao tempo da serra.',

  mobilidade:
    'Palmeiras fica a cerca de 50 km de Lençóis, o principal portão de entrada da Chapada, e o acesso ao Vale do Capão é feito por estrada de serra — o isolamento relativo preservou a paisagem e o modo de vida.',

  corridas: [
    {
      nome: 'Travessias e ultramaratonas da Chapada',
      descricao:
        'A região recebe travessias e provas de corrida de montanha que cruzam os vales e gerais da Chapada Diamantina, com percursos de longa distância e desnível severo.',
    },
  ],
  culturaEsportiva:
    'Poucos lugares do Brasil respiram tanto movimento: caminhar é rotina, e o Vale do Capão soma yoga, escalada, dança e treino funcional a uma comunidade que faz do corpo parte do cotidiano.',
  academias:
    'A oferta formal é compacta — espaços de treino e profissionais que atendem de forma próxima —, complementada por estúdios de yoga, escalada e pela maior academia a céu aberto do Nordeste.',

  destaquesFitness: [
    'Cachoeira da Fumaça, com cerca de 340 m de queda, e sua trilha de subida forte.',
    'Vale do Capão como base das travessias e polo de cultura corporal.',
    'Vale do Pati, uma das travessias mais bonitas do Brasil.',
    'Altitude e clima de serra que permitem treinar ao ar livre o ano todo.',
  ],

  precos: {
    avulsaMin: 40,
    avulsaMax: 100,
    mensalMin: 220,
    mensalMax: 600,
    onlineMin: 100,
    onlineMax: 320,
  },

  conclusao:
    'Entre a Cachoeira da Fumaça e o Vale do Capão, Palmeiras é a Chapada Diamantina no seu estado mais puro. Um personal trainer prepara pernas e fôlego para as travessias — e transforma a vida de montanha em condicionamento que dura o ano inteiro.',

  vizinhas: ['lencois-ba', 'mucuge-ba', 'ibicoara-ba'],

  fontes: [
    { nome: 'IBGE Cidades — Palmeiras', url: 'https://cidades.ibge.gov.br/brasil/ba/palmeiras/panorama' },
    { nome: 'Prefeitura de Palmeiras', url: 'https://www.palmeiras.ba.gov.br/' },
    { nome: 'ICMBio — Parque Nacional da Chapada Diamantina', url: 'https://www.gov.br/icmbio/' },
  ],
  atualizadoEm: '2026-08-05',
};
