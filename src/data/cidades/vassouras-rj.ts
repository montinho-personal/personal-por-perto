import type { Cidade } from '../../lib/types';

export const cidade: Cidade = {
  slug: 'vassouras-rj',
  nome: 'Vassouras',
  uf: 'RJ',
  estado: 'Rio de Janeiro',
  estadoSlug: 'rio-de-janeiro',
  regiao: 'Sudeste',
  gentilico: 'vassourense',
  tipo: 'cidade',

  populacao: 33976,
  populacaoAno: 2022,
  idhm: 0.714,
  idhmClasse: 'alto',
  altitudeM: 418,

  resumoEconomico:
    'Conhecida como a "Cidade dos Barões", Vassouras foi um dos principais centros do Vale do Café fluminense e chegou a integrar a maior região produtora de café do mundo no Segundo Reinado. Hoje a economia se apoia no turismo histórico — com o conjunto urbano tombado pelo IPHAN, casarões neoclássicos e as fazendas centenárias do ciclo do café —, no comércio e em serviços, com forte presença da Universidade de Vassouras, que movimenta a vida acadêmica e de saúde da cidade.',

  mercado:
    'Cidade média do interior fluminense com perfil universitário e turístico, Vassouras tem uma demanda por personal trainers ligada ao público acadêmico, a famílias da sede e a quem busca bem-estar aproveitando o clima ameno de altitude. Estúdios de treino funcional, academias de bairro e atendimento ao ar livre nas praças e fazendas convivem em um mercado de porte intimista.',

  bairrosNobres: ['Centro', 'Santa Amália', 'Residência', 'Barão de Vassouras'],
  bairrosPopulares: ['Represa', 'Pedreira', 'Madruga', 'Morro da Vaca'],

  parques: [
    {
      nome: 'Praça Barão de Campo Belo',
      descricao:
        'Coração do centro histórico tombado, com a igreja matriz, casarões e amplo gramado arborizado — ponto de encontro para caminhada, alongamento e largada de eventos esportivos.',
    },
    {
      nome: 'Centro Histórico de Vassouras',
      descricao:
        'Conjunto urbano tombado pelo IPHAN em 1958, com ruas planas, calçadas largas e casarões do ciclo do café, usados para caminhada e corrida de rua em ambiente preservado.',
    },
    {
      nome: 'Fazendas do Vale do Café',
      descricao:
        'Propriedades centenárias como Santa Eufrásia, Cachoeira Grande e São Luís da Boa Sorte, no entorno rural, com estradas e trilhas em meio à Mata Atlântica para caminhada e pedal.',
    },
  ],
  ciclovias:
    'A cidade não conta com uma rede estruturada de ciclovias urbanas; o pedal acontece sobretudo nas estradas rurais e trilhas que ligam as fazendas históricas, palco de provas de mountain bike como o Bike Tour Vassouras.',

  clima:
    'O clima é tropical de altitude, típico do Médio Paraíba e da serra fluminense, com verões chuvosos, invernos secos e temperatura média anual em torno de 20 °C, a 418 metros de altitude.',
  climaTreino:
    'A altitude e o ar mais ameno favorecem corrida, caminhada e trilhas boa parte do ano. No verão chuvoso vale priorizar treinos no início da manhã ou fim de tarde, e no inverno seco a hidratação e o aquecimento merecem atenção extra.',

  mobilidade:
    'O acesso principal é pela BR-393 (Rodovia Lúcio Meira), que corta a região do Médio Paraíba e liga a Barra do Piraí e Volta Redonda, complementada pela RJ-127, que conecta a sede aos distritos e às fazendas históricas em direção a Valença e Paty do Alferes.',

  corridas: [
    {
      nome: 'Circuito Intercidades de Corridas — Etapa Vassouras',
      descricao:
        'Etapa vassourense do circuito regional de corrida de rua, com percursos pelo centro histórico e adjacências.',
    },
    {
      nome: 'Bike Tour Vassouras',
      descricao:
        'Maratona de mountain bike (XCM) com cerca de 42 km de trilhas pela Mata Atlântica e estruturas históricas do ciclo do café, com largada na Praça Barão de Campo Belo.',
    },
  ],
  culturaEsportiva:
    'A cena esportiva combina corrida de rua e provas de mountain bike que exploram as trilhas das fazendas e o cenário histórico, com forte influência do público universitário da Universidade de Vassouras e do calendário cultural do Vale do Café.',
  academias:
    'A oferta reúne academias de bairro, estúdios de treino funcional e atendimento ao ar livre nas praças e nas estradas rurais, atendendo estudantes, moradores da sede e visitantes em busca de bem-estar.',

  destaquesFitness: [
    'Clima tropical de altitude (média em torno de 20 °C) que favorece corrida, caminhada e trilhas.',
    'Centro histórico tombado pelo IPHAN, com ruas planas ideais para caminhada e corrida de rua.',
    'Trilhas das fazendas do Vale do Café, palco do Bike Tour Vassouras de mountain bike.',
    'Público universitário da Universidade de Vassouras, que sustenta a demanda por treino e bem-estar.',
  ],

  precos: {
    avulsaMin: 50,
    avulsaMax: 115,
    mensalMin: 250,
    mensalMax: 700,
    onlineMin: 115,
    onlineMax: 350,
  },

  conclusao:
    'Histórica e serrana, Vassouras une o cenário preservado do Vale do Café a um clima de altitude convidativo ao treino ao ar livre. Um personal trainer ajuda a aproveitar esse ambiente com segurança e progressão, das caminhadas pelo centro tombado às trilhas das fazendas centenárias.',

  vizinhas: ['barra-do-pirai-rj', 'valenca-rj'],

  fontes: [
    { nome: 'IBGE Cidades — Vassouras', url: 'https://cidades.ibge.gov.br/brasil/rj/vassouras/panorama' },
    { nome: 'Prefeitura de Vassouras', url: 'https://www.vassouras.rj.gov.br/' },
    { nome: 'Atlas Brasil — IDHM', url: 'https://www.atlasbrasil.org.br/' },
  ],
  atualizadoEm: '2026-06-29',
};
