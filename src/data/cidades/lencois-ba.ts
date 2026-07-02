import type { Cidade } from '../../lib/types';

export const cidade: Cidade = {
  slug: 'lencois-ba',
  nome: 'Lençóis',
  uf: 'BA',
  estado: 'Bahia',
  estadoSlug: 'bahia',
  regiao: 'Nordeste',
  gentilico: 'lençoense',
  tipo: 'cidade',

  populacao: 10774,
  populacaoAno: 2022,
  idhm: 0.623,
  idhmClasse: 'médio',
  altitudeM: 394,

  resumoEconomico:
    'Lençóis é a principal porta de entrada da Chapada Diamantina e viveu, entre meados e o fim do século XIX, o auge do garimpo de diamantes, quando chegou a ser a terceira cidade mais importante da Bahia e exportava pedras para obras como o Canal do Panamá. Com o esgotamento das jazidas e a concorrência das minas africanas, a economia entrou em declínio até ser reerguida pelo turismo a partir da segunda metade do século XX. Hoje a cidade vive majoritariamente do turismo de aventura e do ecoturismo, recebendo cerca de 120 mil visitantes por ano atraídos pelas trilhas, cachoeiras e pelo casario colonial tombado pelo IPHAN em 1973.',

  mercado:
    'O mercado fitness de Lençóis é pequeno e concentrado nas academias e estúdios locais, refletindo o porte de uma cidade turística do interior. Boa parte da demanda por preparo físico está ligada à performance para atividades de aventura — trekking de vários dias, rapel e travessias na Chapada — o que abre espaço para o personal trainer atuar em condicionamento específico e prevenção de lesões, além do acompanhamento voltado a moradores e a temporadas de visitantes.',

  bairrosNobres: ['Centro Histórico', 'Água de Frei', 'Vila Nova'],
  bairrosPopulares: ['São José', 'Cachoeirinha', 'Loanda'],

  parques: [
    {
      nome: 'Parque Nacional da Chapada Diamantina',
      descricao:
        'Lençóis é a principal porta de entrada da unidade de conservação, referência nacional em trekking, cachoeiras, cânions e formações rochosas, com trilhas de diferentes níveis de exigência que estruturam boa parte da vida ao ar livre da região.',
    },
    {
      nome: 'Parque Municipal da Muritiba',
      descricao:
        'A poucos minutos a pé do centro histórico, reúne cachoeiras, poços e trechos de mata ao longo do rio Lençóis (rio Serrano), sendo um dos points mais acessíveis para caminhada e banho em meio à natureza.',
    },
    {
      nome: 'Cachoeira da Primavera e Ribeirão do Meio',
      descricao:
        'Cachoeiras próximas ao centro urbano, com toboágua natural e poços, bastante usadas tanto por turistas quanto por moradores como opção de lazer ativo e recuperação após trilhas.',
    },
  ],
  ciclovias:
    'A cidade não conta com rede cicloviária estruturada; o relevo montanhoso e as ruas de paralelepípedo do centro histórico tornam trilhas e caminhos de terra a opção predominante para pedal e corrida, mais do que vias pavimentadas.',

  clima:
    'Por ficar em altitude moderada (cerca de 394 m) dentro da Chapada Diamantina, Lençóis tem clima mais ameno que o litoral baiano, com temperatura média em torno de 22 °C e amplitude térmica maior entre dia e noite. As chuvas se concentram entre novembro e março, enquanto o período de estiagem, em especial em torno de julho, costuma ser o mais procurado para trilhas e turismo de aventura.',
  climaTreino:
    'O clima ameno favorece o treino ao ar livre em praticamente qualquer horário do dia, algo raro no restante do estado; ainda assim, o sol forte em trilhas expostas e as noites mais frias pedem atenção à hidratação e ao aquecimento antes de atividades técnicas como trekking e rapel.',

  mobilidade:
    'O acesso rodoviário principal se dá pela BR-242, que liga Lençóis a Feira de Santana e Salvador (cerca de 420 km, por volta de 5 horas de viagem); a cidade também é servida pelo Aeroporto Coronel Horácio de Matos, situado na própria BR-242, a cerca de 20 km do centro. A malha viária urbana é enxuta, com ruas de paralelepípedo no centro histórico e deslocamentos internos feitos majoritariamente a pé ou de carro/van para os atrativos da Chapada.',

  corridas: [
    {
      nome: 'Ultra Trail Chapada Diamantina',
      descricao:
        'Considerada a primeira ultramaratona de montanha da Bahia, é realizada em Lençóis com percursos de 20 km, 40 km e 70 km em trilhas da Chapada Diamantina, geralmente em setembro.',
    },
    {
      nome: 'Desafio EcoTrail Chapada Diamantina',
      descricao:
        'Corrida de aventura de longa distância (com edições em torno de 120 km) que parte de Lençóis e percorre vales e serras da Chapada, atraindo atletas de trail running de várias regiões do país.',
    },
  ],
  culturaEsportiva:
    'A cultura esportiva local gira em torno do turismo de aventura: trekking de um ou vários dias pelo Parque Nacional da Chapada Diamantina, rapel em cânions e paredões, canyoning e travessias entre cachoeiras são atividades cotidianas para guias, moradores e visitantes, e alimentam também provas de trail running e corrida de aventura sediadas na cidade.',
  academias:
    'A oferta de academias é pequena e concentrada no centro da cidade, voltada principalmente a musculação e treino funcional; parte da preparação física de moradores e guias de turismo acontece de forma informal, aproveitando trilhas e escadarias naturais da região.',

  destaquesFitness: [
    'Porta de entrada do Parque Nacional da Chapada Diamantina, com trekking, rapel e canyoning como atividades cotidianas.',
    'Altitude de cerca de 394 m garante clima mais ameno que o litoral baiano, favorável ao treino ao ar livre.',
    'Cidade histórica do ciclo do diamante, com centro tombado pelo IPHAN e economia hoje voltada ao turismo de aventura.',
    'Sede da Ultra Trail Chapada Diamantina e do Desafio EcoTrail, provas de trail running que atraem atletas de fora da região.',
  ],

  precos: {
    avulsaMin: 60,
    avulsaMax: 130,
    mensalMin: 280,
    mensalMax: 750,
    onlineMin: 120,
    onlineMax: 380,
  },

  conclusao:
    'Cercada pelas trilhas e cachoeiras da Chapada Diamantina, Lençóis reúne condições naturais raras para o treino ao ar livre, mas exige preparo físico específico para quem encara trekking, rapel e travessias mais longas. Um personal trainer pode ajudar a condicionar o corpo para essas exigências, prevenir lesões em terrenos técnicos e manter a constância do treino entre a rotina da cidade e o fluxo intenso de turistas.',

  vizinhas: ['jacobina-ba', 'senhor-do-bonfim-ba', 'barreiras-ba'],

  fontes: [
    { nome: 'IBGE Cidades — Lençóis', url: 'https://cidades.ibge.gov.br/brasil/ba/lencois/panorama' },
    { nome: 'Atlas Brasil — IDHM', url: 'https://www.atlasbrasil.org.br/' },
    { nome: 'IPHAN — Lençóis (BA)', url: 'http://portal.iphan.gov.br/pagina/detalhes/115/' },
  ],
  atualizadoEm: '2026-07-02',
};
