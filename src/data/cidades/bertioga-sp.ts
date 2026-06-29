import type { Cidade } from '../../lib/types';

export const cidade: Cidade = {
  slug: 'bertioga-sp', nome: 'Bertioga', uf: 'SP', estado: 'São Paulo', estadoSlug: 'sao-paulo', regiao: 'Sudeste', gentilico: 'bertioguense', tipo: 'cidade',
  populacao: 64188, populacaoAno: 2022, idhm: 0.730, idhmClasse: 'alto', altitudeM: 7,

  resumoEconomico:
    'No litoral norte da Baixada Santista, Bertioga é um município litorâneo de forte vocação turística e balneária, com cerca de 30 km de praias e uma grande presença de segunda residência de paulistanos. A economia gira em torno do turismo, serviços, construção civil e da movimentação sazonal de veranistas — com pico no verão e nos feriados prolongados. O destaque urbano é a Riviera de São Lourenço, bairro 100% planejado e um dos endereços de praia mais valorizados do Brasil, que concentra renda alta, condomínios fechados e infraestrutura de cidade.',

  mercado:
    'O mercado de personal trainer em Bertioga é puxado pelo alto padrão da Riviera de São Lourenço, onde o atendimento domiciliar e ao ar livre dentro de condomínios fechados e na orla é comum entre moradores e veranistas de alta renda. Some-se a isso a forte presença de segunda residência de paulistanos, que sustenta demanda nos fins de semana e na temporada. O profissional encontra terreno fértil entre os 6 km de ciclovias e os calçadões largos da Riviera, nas praias e nas estruturas de clubes e academias dos condomínios — com público sazonal que amplia a procura no verão.',

  bairrosNobres: ['Riviera de São Lourenço', 'Morada da Praia', 'Costa do Sol', 'Guaratuba'],
  bairrosPopulares: ['Maitinga', 'Indaiá', 'Vista Linda', 'Jardim Rio da Praia'],

  parques: [
    {
      nome: 'Orla da Riviera de São Lourenço',
      descricao:
        'Praia de São Lourenço com cerca de 5,5 km de extensão, calçadas largas (acima de 2 m) e ciclovia ao longo das avenidas — o principal corredor de treino ao ar livre, caminhada e corrida do bairro planejado.',
    },
    {
      nome: 'Praia da Enseada e Maitinga',
      descricao:
        'Faixa de areia extensa junto ao centro, com a Praia de Maitinga em sua ponta — área usada para caminhada, corrida e treino funcional na areia.',
    },
    {
      nome: 'Forte São João',
      descricao:
        'Fortificação histórica de 1547, símbolo da cidade, com entorno e mirante que rendem um cenário diferente para caminhadas leves e passeios ativos.',
    },
  ],
  ciclovias:
    'A Riviera de São Lourenço tem mais de 6 km de ciclovias ao longo de suas avenidas, somadas a 36 km de calçadas largas — uma das melhores infraestruturas para pedal e caminhada do litoral paulista, planejada para incentivar o deslocamento a pé e de bicicleta.',
  clima:
    'O clima é tropical litorâneo, quente e úmido o ano todo, com verões chuvosos e abafados.',
  climaTreino:
    'O treino ao ar livre é viável durante quase todo o ano, com atenção redobrada ao calor e à umidade no verão e boa hidratação — as primeiras horas da manhã e o fim de tarde são as faixas mais agradáveis na orla.',
  mobilidade:
    'O acesso principal é pela Rodovia Dr. Manoel Hyppolito Rego (SP-055) e, vindo da capital, pelo sistema Anchieta-Imigrantes e pela Rodovia Mogi-Bertioga (SP-098). A cidade tem traçado predominantemente linear acompanhando a orla, e a Riviera, por ser planejada, oferece deslocamento interno fácil a pé e de bicicleta.',

  corridas: [
    {
      nome: 'Circuito de Corridas da Riviera',
      descricao:
        'Tradicional circuito com várias etapas ao longo do ano dentro da Riviera de São Lourenço, com provas de corrida e caminhada e categorias para crianças.',
    },
    {
      nome: 'Santander Track&Field Run Series — Riviera de São Lourenço',
      descricao:
        'Etapa do maior circuito de corrida de rua da América Latina, com largada na Riviera, percursos de corrida (cerca de 6 km) e caminhada e baterias kids.',
    },
  ],
  culturaEsportiva:
    'Bertioga tem cultura praiana forte: surfe, stand up paddle, beach tennis, vôlei de praia, ciclismo, caminhada e corrida na orla. Na Riviera de São Lourenço, a vida ativa é favorecida pela estrutura planejada — ciclovias, calçadas largas, clube de golfe, marina e escolas de esportes —, e o calendário de corridas movimenta o bairro o ano inteiro.',
  academias:
    'A oferta de academias acompanha o perfil litorâneo e de alto padrão, com forte presença de estruturas dentro dos condomínios fechados da Riviera, complementadas pela enorme academia ao ar livre que são as praias, ciclovias e calçadões do município.',

  destaquesFitness: [
    'Riviera de São Lourenço: bairro planejado com 6 km de ciclovias e calçadas largas.',
    'Cerca de 5,5 km de orla na Praia de São Lourenço para corrida e caminhada.',
    'Calendário de corridas (Circuito da Riviera e Track&Field Run Series).',
    'Público de alta renda e segunda residência que amplia a demanda no verão.',
  ],

  precos: {
    avulsaMin: 90,
    avulsaMax: 200,
    mensalMin: 450,
    mensalMax: 1200,
    onlineMin: 200,
    onlineMax: 500,
  },

  conclusao:
    'Entre praias extensas e o padrão planejado da Riviera de São Lourenço, Bertioga é feita para treinar ao ar livre. Um personal trainer ajuda morador e veranista a transformar a orla, as ciclovias e a estrutura dos condomínios em um plano consistente — aproveitando o cenário litorâneo e respeitando o calor da temporada.',

  vizinhas: ['guaruja-sp', 'santos-sp', 'sao-sebastiao-sp', 'mogi-das-cruzes-sp'],

  fontes: [
    { nome: 'IBGE Cidades — Bertioga', url: 'https://cidades.ibge.gov.br/brasil/sp/bertioga/panorama' },
    { nome: 'Prefeitura de Bertioga', url: 'https://www.bertioga.sp.gov.br/' },
    { nome: 'Atlas Brasil — IDHM', url: 'https://www.atlasbrasil.org.br/' },
  ],
  atualizadoEm: '2026-06-29',
};
