import type { Cidade } from '../../lib/types';

export const cidade: Cidade = {
  slug: 'tramandai-rs',
  nome: 'Tramandaí',
  uf: 'RS',
  estado: 'Rio Grande do Sul',
  estadoSlug: 'rio-grande-do-sul',
  regiao: 'Sul',
  gentilico: 'tramandaiense',
  tipo: 'cidade',

  populacao: 54387,
  populacaoAno: 2022,
  idhm: 0.719,
  idhmClasse: 'alto',
  altitudeM: 11,

  resumoEconomico:
    'Tramandaí é um dos principais balneários do Litoral Norte gaúcho e o segundo município mais populoso dessa faixa de praias, com 54.387 habitantes no Censo 2022 — crescimento de cerca de 31% em relação a 2010. A economia combina o turismo de veraneio, o comércio e os serviços com a presença do Terminal Almirante Soares Dutra (Tedut), operado pela Transpetro, que recebe petróleo por monoboias em mar aberto e o distribui por dutos à refinaria Refap e ao polo petroquímico. Como em todo o litoral, a população efetiva se multiplica na temporada de verão, quando a cidade recebe veranistas de Porto Alegre, a pouco mais de 110 km. O IDHM é alto (0,719, Atlas Brasil 2010).',

  mercado:
    'O mercado de personal trainer em Tramandaí é marcado pela sazonalidade do litoral. No verão, com a cidade cheia de veranistas, cresce a procura por treino ao ar livre na orla, aulas funcionais na areia e acompanhamento de quem quer manter a rotina nas férias. Fora da temporada, a base de moradores fixos sustenta a demanda em academias e no atendimento individual. O profissional que equilibra o atendimento a veranistas no pico de verão e a fidelização de moradores no restante do ano tende a encontrar um nicho consistente à beira-mar.',

  bairrosNobres: ['Centro', 'Zona Nova', 'Nova Tramandaí', 'Indianópolis'],
  bairrosPopulares: ['Aldeia da Lagoa', 'Recanto da Lagoa', 'Parque dos Presidentes', 'Barra'],

  parques: [
    {
      nome: 'Orla / Beira-mar de Tramandaí',
      descricao:
        'Extensa faixa de praia com calçadão à beira-mar, quiosques e ampla área para caminhada, corrida e ciclismo. É o principal palco de atividade física da cidade, com grande circulação no verão e espaço para treino ao ar livre o ano todo.',
    },
    {
      nome: 'Lagoa de Tramandaí',
      descricao:
        'Conjunto lagunar ligado ao mar pela barra do Rio Tramandaí, usado para pesca, esportes náuticos e passeios. Suas margens e o entorno oferecem alternativa à orla marítima para caminhada e atividades ao ar livre.',
    },
    {
      nome: 'Barra do Rio Tramandaí',
      descricao:
        'Ponto onde a lagoa encontra o mar, cartão-postal da cidade e área de grande movimento de veranistas e pescadores. O entorno da barra concentra parte da circulação de quem caminha e corre à beira-mar.',
    },
  ],
  ciclovias:
    'O calçadão da orla é o principal eixo para pedalar e correr à beira-mar, muito utilizado por moradores e veranistas. A circulação de bicicletas se intensifica no verão ao longo de toda a faixa litorânea da cidade.',

  clima:
    'O clima é subtropical úmido, com verões quentes e invernos frios e ventosos típicos do litoral norte gaúcho.',
  climaTreino:
    'O verão é a melhor época para treino ao ar livre na orla, com dias longos e clima quente — o início da manhã e o fim de tarde escapam do pico de calor e da multidão. No inverno, o frio e os ventos fortes do litoral pedem agasalho ou ambiente coberto, deslocando parte do treino para academias.',

  mobilidade:
    'O acesso principal é pela RS-030, que liga Tramandaí a Osório e à malha de rodovias que segue para Porto Alegre, a pouco mais de 110 km; a Estrada do Mar (RS-389) conecta a cidade aos demais balneários do Litoral Norte. O deslocamento interno é feito por vias paralelas à orla e por ônibus, com tráfego que aumenta bastante na temporada de verão.',

  corridas: [
    {
      nome: 'Tramandaí Night Run',
      descricao:
        'Corrida noturna tradicional da cidade, com edições recorrentes e percursos de 3 km, 5 km e 10 km, além de provas infantis. Acontece à beira-mar e é um dos eventos que marcam o calendário esportivo local.',
    },
    {
      nome: 'Travessia Torres–Tramandaí',
      descricao:
        'Prova de longa distância pela orla do Litoral Norte que liga Torres a Tramandaí, reconhecida nacionalmente como um dos principais desafios de resistência do calendário gaúcho.',
    },
    {
      nome: 'Rústicas e corridas de verão',
      descricao:
        'No verão, a cidade promove rústicas e provas de rua na temporada, aproveitando o calçadão e a faixa de areia como cenário para corredores de todos os níveis.',
    },
  ],
  culturaEsportiva:
    'A cultura esportiva é fortemente ligada à praia e à sazonalidade do verão: corrida e caminhada na orla, ciclismo no calçadão, beach tennis, vôlei de praia, futevôlei e esportes náuticos na lagoa. No pico da temporada, a orla se transforma em um grande espaço a céu aberto para atividade física.',
  academias:
    'A cidade conta com academias e estúdios voltados a moradores fixos e veranistas, com oferta que se intensifica na temporada. Para quem prefere o ar livre, a orla e as margens da lagoa são o complemento natural ao treino de musculação e funcional.',

  destaquesFitness: [
    'Segundo município mais populoso do Litoral Norte gaúcho (54.387 hab., Censo 2022).',
    'Orla extensa com calçadão à beira-mar para corrida, caminhada e ciclismo.',
    'Forte sazonalidade de verão, com pico de demanda por treino ao ar livre e atendimento a veranistas.',
    'Lagoa de Tramandaí e a barra do rio ampliam o leque de atividades ao ar livre.',
  ],

  precos: {
    avulsaMin: 50,
    avulsaMax: 115,
    mensalMin: 260,
    mensalMax: 700,
    onlineMin: 120,
    onlineMax: 360,
  },

  conclusao:
    'Em Tramandaí, treinar à beira-mar faz parte do estilo de vida — e a forte sazonalidade do verão cria oportunidades para quem atende tanto veranistas quanto moradores. Com a orla como academia a céu aberto, a Lagoa de Tramandaí e a barra do rio como cenário, um personal trainer encontra na cidade um ambiente propício para o treino ao ar livre o ano todo.',

  vizinhas: ['capao-da-canoa-rs', 'torres-rs'],

  fontes: [
    { nome: 'IBGE Cidades — Tramandaí', url: 'https://cidades.ibge.gov.br/brasil/rs/tramandai/panorama' },
    { nome: 'Prefeitura de Tramandaí', url: 'https://www.tramandai.rs.gov.br/' },
    { nome: 'Atlas Brasil — IDHM', url: 'https://www.atlasbrasil.org.br/' },
  ],
  atualizadoEm: '2026-06-29',
};
