import type { Cidade } from '../../lib/types';

export const cidade: Cidade = {
  slug: 'taquara-rs',
  nome: 'Taquara',
  uf: 'RS',
  estado: 'Rio Grande do Sul',
  estadoSlug: 'rio-grande-do-sul',
  regiao: 'Sul',
  gentilico: 'taquarense',
  tipo: 'cidade',

  populacao: 53242,
  populacaoAno: 2022,
  idhm: 0.727,
  idhmClasse: 'alto',
  altitudeM: 21,

  resumoEconomico:
    'Taquara é o principal município do Vale do Paranhana, na encosta inferior da serra gaúcha, a cerca de 70 km de Porto Alegre e ponto de ligação entre a Serra, o Litoral, a Região Metropolitana e o Vale do Sinos. A economia combina comércio e serviços, indústria — com forte presença da cadeia do couro e calçados e de seus componentes, herança da vocação do Vale do Paranhana e do Vale do Sinos — e a agropecuária do interior do município. A cidade também é um polo educacional regional, sede das Faculdades Integradas de Taquara (FACCAT), cujo centro de eventos sedia feiras ligadas ao setor calçadista e a outras atividades da região.',

  mercado:
    'O mercado fitness de Taquara tem o perfil de uma cidade média do interior gaúcho: academias de musculação e treino funcional distribuídas pelo Centro e pelos bairros residenciais, com público formado por moradores da própria cidade e dos municípios vizinhos do Vale do Paranhana. A procura por personal trainers cresce entre quem busca acompanhamento individual para musculação, emagrecimento e preparação para caminhadas e corridas, aproveitando os espaços ao ar livre e o clima de quatro estações bem marcadas.',

  bairrosNobres: ['Centro', 'Empresa', 'Petrópolis', 'Medianeira'],
  bairrosPopulares: ['Recreio', 'Santa Rosa', 'Mundo Novo', 'Eldorado'],

  parques: [
    {
      nome: 'Parque do Trabalhador (Parcão)',
      descricao:
        'Principal área verde urbana de Taquara, com lago, arborização, academia ao ar livre, playground e espaços para esporte. É o ponto mais usado pela população para caminhada, corrida leve e atividade física ao ar livre.',
    },
    {
      nome: 'Orla do Rio dos Sinos e do Rio Paranhana',
      descricao:
        'O território de Taquara é cortado pelos rios da Bacia do Sinos, e é nas proximidades da cidade que o Rio Paranhana encontra o Rio dos Sinos. As margens e vias próximas servem de cenário para caminhadas e pedaladas em meio à paisagem do vale.',
    },
    {
      nome: 'Encosta da serra e Vale do Paranhana',
      descricao:
        'Situada na encosta inferior da serra, Taquara é porta de entrada do Vale do Paranhana, com estradas e trilhas no entorno rural e acesso a cachoeiras da região — opções para quem gosta de treinar e caminhar em meio à natureza.',
    },
  ],
  ciclovias:
    'A estrutura cicloviária é modesta e concentrada em trechos da área urbana; boa parte do pedal e da corrida acontece nas vias da cidade e nas estradas do entorno, com atenção ao tráfego nas rodovias que cortam o município.',

  clima:
    'O clima é subtropical, com as quatro estações bem definidas e inverno rigoroso, típico da encosta da serra gaúcha. O verão é quente e úmido, e o inverno traz frio acentuado, com manhãs geladas e amplitude térmica marcante ao longo do ano.',
  climaTreino:
    'O treino ao ar livre é favorecido na primavera e no outono, de temperaturas amenas. No verão, o calor e a umidade pedem hidratação e horários mais frescos, no começo da manhã ou no fim da tarde; no inverno, o frio exige aquecimento mais cuidadoso, e ambientes fechados ganham espaço nos dias mais gelados e chuvosos.',

  mobilidade:
    'Taquara é um nó de ligação rodoviária do Vale do Paranhana: a RS-020 conecta a cidade à Região Metropolitana e ao Litoral, enquanto a RS-115 liga a serra e os municípios vizinhos como Três Coroas, Igrejinha e Parobé. O transporte urbano é feito por ônibus, e a posição estratégica entre serra, vale e metrópole sustenta o fluxo de pessoas e cargas da região.',

  corridas: [
    {
      nome: 'Circuito Sesc de Corridas (RS)',
      descricao:
        'Circuito de corridas de rua promovido pelo Sesc/RS, com etapas em diversas cidades do estado e percursos para diferentes níveis, que estimula a prática da corrida no interior gaúcho.',
    },
    {
      nome: 'Caminhadas e provas regionais do Vale do Paranhana',
      descricao:
        'A região do Vale do Paranhana costuma sediar caminhadas e provas de corrida de rua organizadas por entidades locais, aproveitando o calendário esportivo dos municípios da bacia do Sinos.',
    },
  ],
  culturaEsportiva:
    'A cultura esportiva taquarense mistura o uso do Parque do Trabalhador para caminhada e atividade física, a paisagem dos rios e da encosta da serra para corrida e pedal, e a tradição comunitária dos municípios do Vale do Paranhana, com eventos esportivos que mobilizam a população ao longo do ano.',
  academias:
    'A oferta é formada por academias locais de musculação e treino funcional, além de redes presentes na cidade, distribuídas pelo Centro e pelos bairros residenciais, com porte compatível com uma cidade média e polo regional do Vale do Paranhana.',

  destaquesFitness: [
    'Parque do Trabalhador (Parcão) como principal espaço urbano de caminhada e atividade ao ar livre.',
    'Encosta da serra e Vale do Paranhana, com rios, estradas e trilhas para treino em meio à natureza.',
    'Clima subtropical de quatro estações, com verão quente e inverno rigoroso a planejar no treino.',
    'Polo regional de comércio, da cadeia do couro e calçados e de educação, sede da FACCAT.',
  ],

  precos: {
    avulsaMin: 55,
    avulsaMax: 120,
    mensalMin: 260,
    mensalMax: 720,
    onlineMin: 120,
    onlineMax: 360,
  },

  conclusao:
    'Na encosta da serra e às portas do Vale do Paranhana, Taquara pede um treino que respeite as quatro estações e aproveite o Parque do Trabalhador e a paisagem dos rios. Um personal trainer ajuda a montar uma rotina constante, ajustando intensidade e horários ao frio do inverno e ao calor do verão, com acompanhamento individual para musculação, emagrecimento ou preparação para caminhadas e corridas.',

  vizinhas: ['novo-hamburgo-rs', 'gravatai-rs'],

  fontes: [
    { nome: 'IBGE Cidades — Taquara', url: 'https://cidades.ibge.gov.br/brasil/rs/taquara/panorama' },
    { nome: 'Prefeitura de Taquara', url: 'https://www.taquara.rs.gov.br/' },
    { nome: 'Atlas Brasil — IDHM', url: 'https://www.atlasbrasil.org.br/' },
  ],
  atualizadoEm: '2026-06-29',
};
