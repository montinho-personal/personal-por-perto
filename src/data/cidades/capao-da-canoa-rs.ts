import type { Cidade } from '../../lib/types';

export const cidade: Cidade = {
  slug: 'capao-da-canoa-rs',
  nome: 'Capão da Canoa',
  uf: 'RS',
  estado: 'Rio Grande do Sul',
  estadoSlug: 'rio-grande-do-sul',
  regiao: 'Sul',
  gentilico: 'caponense',
  tipo: 'cidade',

  populacao: 63594,
  populacaoAno: 2022,
  idhm: 0.743,
  idhmClasse: 'alto',
  altitudeM: 5,

  resumoEconomico:
    'Capão da Canoa é o principal balneário do Litoral Norte gaúcho e o município mais populoso dessa faixa de praias, com 63.594 habitantes no Censo 2022 — crescimento de mais de 50% em relação a 2010. A economia gira em torno do turismo de veraneio, do comércio, dos serviços e da construção civil, com forte sazonalidade: a população efetiva multiplica-se na temporada de verão, quando a cidade recebe veranistas de Porto Alegre e da Serra. O IDHM é alto (0,743, Atlas Brasil 2010).',

  mercado:
    'O mercado de personal trainer em Capão da Canoa é marcado por uma sazonalidade intensa. No verão, com a cidade lotada de veranistas, cresce a procura por treino ao ar livre na orla, aulas funcionais na areia e acompanhamento de quem quer manter a rotina nas férias. Fora da temporada, a base de moradores fixos sustenta a demanda em academias e atendimento individual. O profissional que combina atendimento a veranistas no pico de verão e fidelização de moradores no restante do ano encontra um nicho promissor à beira-mar.',

  bairrosNobres: ['Zona Nova', 'Centro', 'Capão Novo', 'Atlântida'],
  bairrosPopulares: ['Navegantes', 'Santa Luzia', 'Sangrador', 'Arroio Teixeira'],

  parques: [
    {
      nome: 'Orla / Beira-mar de Capão da Canoa',
      descricao:
        'Calçadão à beira-mar com iluminação, quiosques e ampla extensão para caminhada, corrida e ciclismo. É o principal palco de atividade física da cidade, com grande circulação no verão e estrutura para treino ao ar livre o ano todo.',
    },
    {
      nome: 'Praia de Capão Novo',
      descricao:
        'Distrito praiano ao norte, com praia mais tranquila e família, muito procurado por veranistas. A faixa de areia e a orla oferecem espaço para treino funcional, corrida e esportes de praia.',
    },
    {
      nome: 'Lagoa dos Quadros',
      descricao:
        'Grande lagoa de água doce que limita o município a oeste, usada para esportes náuticos, stand-up paddle e passeios — alternativa à orla marítima para atividades ao ar livre.',
    },
  ],
  ciclovias:
    'O calçadão da orla é o principal eixo para pedalar e correr à beira-mar, muito utilizado por moradores e veranistas. A circulação de bicicletas é intensa no verão ao longo de toda a faixa litorânea da cidade.',

  clima:
    'O clima é subtropical úmido, com verões quentes e invernos frios e ventosos típicos do litoral gaúcho.',
  climaTreino:
    'O verão é a melhor época para treino ao ar livre na orla, com dias longos e clima quente — início da manhã e fim de tarde escapam do pico de calor e da multidão. No inverno, o frio e os ventos fortes do litoral pedem agasalho ou ambiente coberto, deslocando parte do treino para academias.',

  mobilidade:
    'O acesso principal é pela RS-389, a Estrada do Mar, que liga os balneários do Litoral Norte e conecta a cidade a Porto Alegre, a cerca de 135 km. O deslocamento interno é feito por vias paralelas à orla e por ônibus, com tráfego que aumenta muito na temporada de verão.',

  corridas: [
    {
      nome: 'Summer Night Run (Capão da Canoa)',
      descricao:
        'Corrida noturna realizada no verão na praia de Capão da Canoa, com percursos de 3 km, 5 km e 10 km à beira-mar — uma das provas que marcam a temporada na cidade.',
    },
    {
      nome: 'Corridas e eventos de verão na orla',
      descricao:
        'A temporada concentra provas de rua, atividades esportivas e a abertura do verão com eventos como o Capão Fest, aproveitando o calçadão e a faixa de areia como cenário.',
    },
  ],
  culturaEsportiva:
    'A cultura esportiva é fortemente ligada à praia e à sazonalidade do verão: corrida e caminhada na orla, ciclismo no calçadão, beach tennis, vôlei de praia, futevôlei e esportes náuticos na lagoa. No pico da temporada, a orla vira um grande espaço a céu aberto para atividade física.',
  academias:
    'A cidade conta com academias e estúdios voltados a moradores fixos e veranistas, com oferta que se intensifica na temporada. Para quem prefere o ar livre, a orla é o complemento natural ao treino de musculação e funcional.',

  destaquesFitness: [
    'Maior município do Litoral Norte gaúcho (63.594 hab., Censo 2022) e principal balneário da região.',
    'Orla extensa com calçadão à beira-mar para corrida, caminhada e ciclismo.',
    'Forte sazonalidade de verão, com pico de demanda por treino ao ar livre e atendimento a veranistas.',
    'Praia de Capão Novo e Lagoa dos Quadros ampliam o leque de atividades ao ar livre.',
  ],

  precos: {
    avulsaMin: 65,
    avulsaMax: 160,
    mensalMin: 330,
    mensalMax: 950,
    onlineMin: 150,
    onlineMax: 430,
  },

  conclusao:
    'Em Capão da Canoa, treinar à beira-mar é parte do estilo de vida — e a forte sazonalidade do verão cria oportunidades para quem atende tanto veranistas quanto moradores. Com a orla como academia a céu aberto, a Praia de Capão Novo e a Lagoa dos Quadros, um personal trainer encontra na cidade um ambiente ideal para treino ao ar livre o ano todo.',

  vizinhas: ['xangri-la-rs', 'porto-alegre-rs', 'gravatai-rs', 'canoas-rs'],

  fontes: [
    { nome: 'IBGE Cidades — Capão da Canoa', url: 'https://cidades.ibge.gov.br/brasil/rs/capao-da-canoa/panorama' },
    { nome: 'Prefeitura de Capão da Canoa', url: 'https://www.capaodacanoa.rs.gov.br/' },
    { nome: 'Atlas Brasil — IDHM', url: 'https://www.atlasbrasil.org.br/' },
  ],
  atualizadoEm: '2026-06-29',
};
