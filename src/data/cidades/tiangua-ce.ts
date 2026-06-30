import type { Cidade } from '../../lib/types';

export const cidade: Cidade = {
  slug: 'tiangua-ce',
  nome: 'Tianguá',
  uf: 'CE',
  estado: 'Ceará',
  estadoSlug: 'ceara',
  regiao: 'Nordeste',
  gentilico: 'tianguaense',
  tipo: 'cidade',

  populacao: 81506,
  populacaoAno: 2022,
  idhm: 0.657,
  idhmClasse: 'médio',
  altitudeM: 775,

  resumoEconomico:
    'Conhecida como "Portão da Ibiapaba" e tida como a capital da Serra da Ibiapaba, no noroeste cearense, Tianguá é o principal polo comercial, turístico e de serviços do planalto. A economia combina agricultura de serra (fruticultura e horticultura favorecidas pelo clima ameno de altitude), comércio e um turismo de natureza em expansão, com cachoeiras, mirantes e trilhas atraindo visitantes durante todo o ano.',

  mercado:
    'A demanda fitness é puxada pela classe média urbana e pelo fluxo turístico ligado ao ecoturismo de serra, com público que valoriza atividades ao ar livre como caminhada, trilha e corrida em meio à natureza do planalto.',

  bairrosNobres: ['Centro', 'Planalto', 'Olaria', 'Alto da Boa Vista'],
  bairrosPopulares: ['São Cristóvão', 'Tronco', 'Bela Vista', 'Pe. Inácio'],

  parques: [
    {
      nome: 'Sítio do Bosco Park',
      descricao:
        'Parque ecológico com trilhas, mirantes e contato com a flora da serra, também palco de eventos de esporte e aventura na Ibiapaba.',
    },
    {
      nome: 'Reserva Natureza Divina',
      descricao:
        'Reserva natural com trilhas, nascentes e paredões rochosos, voltada ao ecoturismo e às caminhadas em meio à Mata Atlântica de altitude.',
    },
    {
      nome: 'Paredões de Janeiro',
      descricao:
        'Conjunto de formações rochosas e mirantes da serra, com vistas amplas do planalto e percursos para caminhada na natureza.',
    },
  ],
  ciclovias:
    'A cidade não possui malha cicloviária estruturada divulgada em fonte oficial; o pedal e a corrida acontecem sobretudo em vias urbanas e em estradas de serra.',

  clima:
    'Por estar a cerca de 775 m de altitude na Serra da Ibiapaba, Tianguá tem clima mais ameno e úmido que o sertão cearense, com média anual em torno de 22 a 24 °C e vegetação serrana exuberante.',
  climaTreino:
    'O clima ameno de altitude favorece treinos ao ar livre na maior parte do ano; a umidade e as chuvas concentradas no primeiro semestre pedem atenção a trilhas escorregadias e à escolha de horários.',

  mobilidade:
    'Tianguá é cortada pela BR-222, principal eixo rodoviário do noroeste cearense, que liga Fortaleza ao interior e segue até a divisa com o Piauí, garantindo intenso fluxo de pessoas e cargas pela cidade.',

  corridas: [
    {
      nome: 'Trilhas da Serra da Ibiapaba',
      descricao:
        'Rede de trilhas ecológicas em Tianguá — como as da Cachoeira da Mangabeira, da Espia e do Pinga — usadas para caminhada e corrida de montanha em meio a cachoeiras e formações rochosas.',
    },
    {
      nome: 'Campeonato Cearense de Voo Livre',
      descricao:
        'Etapa do campeonato de parapente e asa-delta sediada no Sítio do Bosco Park, reunindo atletas de várias regiões e associando esporte de aventura à preservação da serra.',
    },
  ],
  culturaEsportiva:
    'A cultura esportiva local é fortemente ligada à natureza da serra, com trilhas, ecoturismo e esportes de aventura como o voo livre, além do uso crescente dos espaços ao ar livre para caminhada e corrida.',
  academias:
    'A oferta reúne academias e estúdios no Centro e nos bairros, complementada por um ambiente natural privilegiado de trilhas e mirantes que amplia as opções de treino ao ar livre.',

  destaquesFitness: [
    'Clima ameno de altitude da Serra da Ibiapaba favorecendo treinos ao ar livre o ano todo.',
    'Trilhas, cachoeiras e mirantes para caminhada e corrida de montanha.',
    'Cena de esportes de aventura, com voo livre no Sítio do Bosco Park.',
    'Posição de "Portão da Ibiapaba", polo de turismo de natureza do noroeste cearense.',
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
    'Capital da Serra da Ibiapaba e portão de entrada do planalto, Tianguá une clima ameno de altitude, trilhas e cachoeiras a um turismo de natureza em alta. Um personal trainer ajuda a transformar esse cenário serrano em treino com método, ajustando intensidade, percursos e progressão ao relevo e à umidade da serra.',

  vizinhas: ['sobral-ce', 'crateus-ce'],

  fontes: [
    { nome: 'IBGE Cidades — Tianguá', url: 'https://cidades.ibge.gov.br/brasil/ce/tiangua/panorama' },
    { nome: 'Prefeitura de Tianguá', url: 'https://tiangua.ce.gov.br/' },
    { nome: 'Atlas Brasil — IDHM', url: 'https://www.atlasbrasil.org.br/' },
  ],
  atualizadoEm: '2026-06-29',
};
