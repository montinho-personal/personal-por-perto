import type { Cidade } from '../../lib/types';

export const cidade: Cidade = {
  slug: 'sao-roque-de-minas-mg',
  nome: 'São Roque de Minas',
  uf: 'MG',
  estado: 'Minas Gerais',
  estadoSlug: 'minas-gerais',
  regiao: 'Sudeste',
  gentilico: 'são-roquense',
  tipo: 'cidade',

  populacao: 7129,
  populacaoAno: 2022,
  altitudeM: 819,

  resumoEconomico:
    'Com 7.129 habitantes contados pelo Censo 2022 e densidade de apenas 3,4 hab/km², São Roque de Minas vive de duas coisas que o resto do país conhece bem: o queijo Canastra, cuja produção artesanal abastece principalmente a Grande São Paulo, e o turismo do Parque Nacional da Serra da Canastra, criado em 1972 para proteger as nascentes do rio São Francisco. A entrada principal do parque fica a cerca de 8 km da cidade.',

  mercado:
    'O mercado de personal trainer é pequeno e prático: poucos profissionais atendendo moradores, produtores rurais e o pessoal que trabalha com turismo — guias e condutores que passam o dia em trilha e precisam de perna e fôlego. A academia do centro divide espaço com o atendimento a domicílio e com o treino ao ar livre, que aqui é quase inevitável.',

  bairrosNobres: ['Centro', 'Alto da Boa Vista', 'Vila Nova', 'Chácaras'],
  bairrosPopulares: ['São Vicente', 'Bela Vista', 'Cohab', 'Zona Rural'],

  parques: [
    {
      nome: 'Parque Nacional da Serra da Canastra',
      descricao:
        'Criado em 1972 para proteger as nascentes do São Francisco, o parque se estende por São Roque de Minas, Delfinópolis e Sacramento, com altitudes de 800 a 1.400 m e ponto máximo de 1.496 m na Serra Brava.',
    },
    {
      nome: 'Cachoeira Casca d’Anta',
      descricao:
        'A primeira cachoeira do rio São Francisco, com 186 metros de queda. O acesso pela parte baixa é uma caminhada tranquila; pela parte alta, a descida e a volta cobram preparo real.',
    },
    {
      nome: 'Nascente do Rio São Francisco',
      descricao:
        'O ponto histórico onde nasce o Velho Chico, dentro do parque, alcançado por estrada de terra e uma caminhada curta pelos campos de altitude.',
    },
    {
      nome: 'Vale do Córrego da Lavra',
      descricao:
        'Afluente cristalino do São Francisco, com as cachoeiras da Lavra e Lavrinha — circuito de caminhada mais curto e muito usado por quem mora na cidade.',
    },
  ],
  ciclovias:
    'Não há malha cicloviária urbana. As estradas de terra que levam ao parque e às queijarias formam o circuito de cicloturismo e mountain bike da região, com desnível constante.',

  clima:
    'Tropical de altitude, com verão chuvoso e inverno seco. Os 819 metros da sede e os campos de altitude do parque garantem noites frescas o ano todo e manhãs frias no inverno.',
  climaTreino:
    'A altitude é aliada: as manhãs amenas abrem uma janela confortável para o treino ao ar livre quase o ano inteiro. O inverno seco é a alta temporada das trilhas; no verão, as chuvas de fim de tarde pedem antecipar a sessão.',

  mobilidade:
    'A cidade é compacta e caminhável no miolo. O acesso regional se dá por estradas que ligam a Piumhi e Passos, e os atrativos do parque ficam a distâncias de 8 a 50 km da sede, por estradas de terra bem sinalizadas.',

  corridas: [
    {
      nome: 'Provas de montanha da Serra da Canastra',
      descricao:
        'O calendário regional reúne corridas e travessias que exploram os campos de altitude e as estradas de terra do parque, com desnível severo e terreno técnico.',
    },
  ],
  culturaEsportiva:
    'Caminhar e subir serra fazem parte da rotina de quem vive do turismo e do campo. O futebol amador ocupa o fim de semana, e a cavalgada e o mountain bike completam um calendário muito ligado ao território.',
  academias:
    'A oferta formal é compacta e concentrada no centro, com espaços pequenos de musculação — o que abre espaço para o atendimento individual e para o treino em casa.',

  destaquesFitness: [
    'Cachoeira Casca d’Anta, primeira do São Francisco, com 186 m de queda.',
    'Campos de altitude entre 800 e 1.400 m, com máximo de 1.496 m na Serra Brava.',
    'Entrada principal do parque nacional a cerca de 8 km do centro.',
    'Estradas de terra com desnível constante para corrida e pedal.',
  ],

  precos: {
    avulsaMin: 45,
    avulsaMax: 110,
    mensalMin: 240,
    mensalMax: 600,
    onlineMin: 120,
    onlineMax: 330,
  },

  conclusao:
    'São Roque de Minas tem um parque nacional na porta e a nascente do São Francisco no quintal. Um personal trainer daqui prepara perna e fôlego para a serra — e usa a academia como base de força para que a trilha do fim de semana não cobre a conta na segunda-feira.',

  vizinhas: ['delfinopolis-mg', 'capitolio-mg', 'passos-mg'],

  fontes: [
    { nome: 'IBGE Cidades — São Roque de Minas', url: 'https://cidades.ibge.gov.br/brasil/mg/sao-roque-de-minas/panorama' },
    { nome: 'ICMBio — Parque Nacional da Serra da Canastra', url: 'https://www.gov.br/icmbio/' },
    { nome: 'Prefeitura de São Roque de Minas', url: 'https://www.saoroquedeminas.mg.gov.br/' },
  ],
  atualizadoEm: '2026-08-05',
};
