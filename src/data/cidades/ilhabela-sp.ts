import type { Cidade } from '../../lib/types';

export const cidade: Cidade = {
  slug: 'ilhabela-sp',
  nome: 'Ilhabela',
  uf: 'SP',
  estado: 'São Paulo',
  estadoSlug: 'sao-paulo',
  regiao: 'Sudeste',
  gentilico: 'ilhabelense',
  tipo: 'cidade',

  populacao: 34934,
  populacaoAno: 2022,
  idhm: 0.756,
  idhmClasse: 'alto',
  altitudeM: 2,

  resumoEconomico:
    'Ilhabela é o único arquipélago-município marítimo do estado de São Paulo, no Litoral Norte, com cerca de 85% do território protegido pelo Parque Estadual de Ilhabela e mais de 40 praias. A economia gira em torno do turismo de alto padrão, da náutica e da hospitalidade, com forte presença de casas de veraneio e segunda residência. Conhecida como a Capital Nacional da Vela, recebe visitantes o ano todo e tem grande sazonalidade no verão e em feriados.',

  mercado:
    'O mercado de personal training é orientado ao alto padrão: condomínios e casas de veraneio na orla norte, hóspedes de pousadas e proprietários de segunda residência buscam atendimento individualizado e ao ar livre. O treino acontece à beira-mar, nas trilhas do parque estadual e em academias de pousadas e condomínios. A demanda cresce na alta temporada com turistas que querem manter a rotina de exercícios.',

  bairrosNobres: ['Perequê', 'Itaquanduba', 'Itaguaçu', 'Praia do Curral'],
  bairrosPopulares: ['Barra Velha', 'Cocaia', 'Água Branca', 'Bexiga'],

  parques: [
    {
      nome: 'Parque Estadual de Ilhabela',
      descricao:
        'Unidade de conservação que cobre cerca de 85% do arquipélago, com Mata Atlântica preservada, cachoeiras e dezenas de trilhas — cenário natural para trail running, caminhada e treino funcional ao ar livre.',
    },
    {
      nome: 'Trilha de Castelhanos',
      descricao:
        'Travessia de cerca de 22 km que cruza a ilha até a Praia de Castelhanos, muito usada por ciclistas de mountain bike e corredores de trilha que buscam volume e ganho de elevação.',
    },
    {
      nome: 'Orla e calçadão do Perequê e da Vila',
      descricao:
        'Faixa de orla e calçadão no centro e no Perequê, ponto plano e acessível para caminhada, corrida leve e treino à beira-mar, com águas calmas e quiosques próximos.',
    },
  ],
  ciclovias:
    'A cidade não tem uma rede extensa de ciclovias urbanas, mas o pedal é forte no cicloturismo e no mountain bike: a estrada de Castelhanos e as trilhas do parque estadual são desafios clássicos, e a orla concentra o ciclismo de lazer mais tranquilo.',

  clima:
    'O clima é tropical úmido litorâneo, quente o ano todo e com chuvas concentradas no verão; por ser uma ilha de relevo montanhoso, os índices de chuva e a umidade são elevados.',
  climaTreino:
    'O treino ao ar livre é viável o ano inteiro, com atenção ao calor e à umidade no verão e bons cuidados com hidratação. As primeiras horas da manhã são as mais agradáveis, e a sombra das trilhas de Mata Atlântica ajuda nos dias mais quentes.',

  mobilidade:
    'O acesso é exclusivamente pela balsa que liga São Sebastião à ilha, o que torna o transporte sensível à fila e à alta temporada. Dentro da ilha, a Vila e a orla norte concentram serviços, enquanto o lado sul e o leste (Castelhanos, Bonete) dependem de 4x4, trilha ou barco.',

  corridas: [
    {
      nome: 'Kailash Trail Run (KTR) Ilhabela',
      descricao:
        'Um dos principais eventos de corrida de montanha do país, com percursos que variam de cerca de 8 km a 60 km por trilhas, subidas exigentes e vistas do Litoral Norte.',
    },
    {
      nome: 'Travessia a nado São Sebastião–Ilhabela',
      descricao:
        'Travessia aquática de cerca de 3,8 km pelo canal entre o continente e a ilha, voltada a nadadores experientes.',
    },
    {
      nome: 'Festival KMF Ilhabela',
      descricao:
        'Festival multiesportivo ao ar livre que reúne corrida de montanha, corrida de rua, beach tennis, SUP e natação em águas abertas.',
    },
  ],
  culturaEsportiva:
    'Ilhabela é a Capital Nacional da Vela e sedia, desde 1973, a Semana Internacional de Vela, considerada o maior encontro de vela oceânica da América Latina. Além da vela, a cultura esportiva é fortemente ligada à natureza: trail running, mountain bike, stand up paddle, natação em águas abertas e mergulho entre naufrágios.',
  academias:
    'A oferta de academias é compatível com o porte do município e se concentra na Vila e na orla norte, complementada pelas estruturas de pousadas e condomínios e pela enorme academia ao ar livre que são as praias e trilhas do parque estadual.',

  destaquesFitness: [
    'Capital Nacional da Vela e dos esportes náuticos, com vela, SUP e natação em águas abertas.',
    'Trilhas do Parque Estadual de Ilhabela ideais para trail running e treino funcional.',
    'Estrada de Castelhanos como desafio de mountain bike e corrida de longa distância.',
    'Público de alto padrão e turistas que buscam atendimento individualizado na temporada.',
  ],

  precos: {
    avulsaMin: 80,
    avulsaMax: 180,
    mensalMin: 400,
    mensalMax: 1000,
    onlineMin: 160,
    onlineMax: 450,
  },

  conclusao:
    'Arquipélago de Mata Atlântica e mar, Ilhabela é feita para treinar ao ar livre, da orla da Vila às trilhas do parque estadual. Um personal trainer ajuda moradores, turistas e proprietários de segunda residência a transformar esse cenário em uma rotina consistente, respeitando o calor litorâneo e a logística da ilha.',

  vizinhas: ['sao-sebastiao-sp', 'caraguatatuba-sp', 'ubatuba-sp'],

  fontes: [
    { nome: 'IBGE Cidades — Ilhabela', url: 'https://cidades.ibge.gov.br/brasil/sp/ilhabela/panorama' },
    { nome: 'Prefeitura de Ilhabela', url: 'https://www.ilhabela.sp.gov.br/' },
    { nome: 'Atlas Brasil — IDHM', url: 'https://www.atlasbrasil.org.br/' },
  ],
  atualizadoEm: '2026-06-29',
};
