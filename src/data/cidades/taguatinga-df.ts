import type { Cidade } from '../../lib/types';

export const cidade: Cidade = {
  slug: 'taguatinga-df',
  nome: 'Taguatinga',
  uf: 'DF',
  estado: 'Distrito Federal',
  estadoSlug: 'distrito-federal',
  regiao: 'Centro-Oeste',
  gentilico: 'taguatinguense',
  tipo: 'regiao',
  cidadeMae: 'brasilia-df',
  contexto: 'Distrito Federal',

  resumoEconomico:
    'Taguatinga é uma das regiões administrativas mais populosas e consolidadas do Distrito Federal e o maior polo comercial do DF fora do Plano Piloto. De perfil predominantemente classe média, é considerada uma cidade dinâmica e independente em relação à oferta de serviços, comércio, mercado de trabalho, cultura e entretenimento, com o comércio respondendo pela maior parcela dos postos de trabalho da região. Essa autonomia urbana e a forte vida de rua sustentam uma demanda constante por serviços de saúde, bem-estar e treino físico.',

  mercado:
    'O mercado fitness em Taguatinga é amplo e capilarizado, alimentado por uma grande população de classe média distribuída por dezenas de quadras residenciais. Isso favorece três frentes complementares: academias de bairro espalhadas pelas quadras e ao longo dos eixos comerciais, atendimento domiciliar entre quadras próximas e treino ao ar livre nos parques. O público valoriza preço justo aliado a acompanhamento de qualidade, e a densidade comercial garante fluxo de pessoas e visibilidade para o profissional que atende na região.',

  bairrosNobres: ['Taguatinga Sul (Centro)', 'Setor Central', 'Setor C Sul'],
  bairrosPopulares: ['Taguatinga Norte', 'Setor M Norte', 'Vila Dimas'],

  parques: [
    {
      nome: 'Parque Ecológico Saburo Onoyama',
      descricao:
        'Principal área verde de Taguatinga, localizado em Taguatinga Sul, com cerca de 93 hectares. Tem trilhas naturais com pontes de madeira sempre à sombra de árvores grandes — que refrescam e umidificam o ar mesmo na estação seca —, parques infantis, quadras de areia, quadras esportivas e áreas de piquenique. É o grande ponto de treino e lazer ao ar livre dos moradores, aberto diariamente.',
    },
    {
      nome: 'Avenida Comercial',
      descricao:
        'Eixo histórico e movimentado do comércio de Taguatinga (nas porções Norte e Sul), com largas calçadas, comércio intenso e grande fluxo de pessoas. Concentra academias, estúdios e o vai e vem que dá à região seu caráter de polo comercial do DF.',
    },
  ],
  ciclovias:
    'Taguatinga é conectada à malha cicloviária do Distrito Federal, uma das maiores do país, com ciclovias e ciclofaixas ao longo dos principais eixos que ligam a região às áreas vizinhas e às estações do metrô.',

  clima:
    'O clima é típico do cerrado: tropical de altitude, com verão quente e chuvoso e inverno seco de maio a setembro, quando a umidade do ar cai a níveis muito baixos no Distrito Federal.',
  climaTreino:
    'O clima ameno permite treinar ao ar livre praticamente o ano todo, mas no auge da seca a baixíssima umidade exige cuidado redobrado: reforço de hidratação, atenção às vias respiratórias e preferência pelo início da manhã ou pelo fim da tarde, evitando o sol forte do meio do dia. As trilhas sombreadas do Parque Saburo Onoyama ajudam a amenizar o ar seco.',

  mobilidade:
    'Taguatinga é servida pelo Metrô-DF, com as estações Praça do Relógio e Centro Metropolitano (Linha Verde) e Taguatinga Sul (Linha Laranja), o que facilita o deslocamento de moradores e profissionais por toda a região e em direção às cidades vizinhas. A malha de avenidas e o comércio concentrado tornam as distâncias curtas dentro das quadras, o que valoriza tanto o atendimento domiciliar quanto o treino nos parques próximos de casa.',

  corridas: [
    {
      nome: 'Treinos no Parque Saburo Onoyama e nos eixos de Taguatinga',
      descricao:
        'As trilhas e áreas do Parque Saburo Onoyama, somadas às longas avenidas planas e à proximidade com Águas Claras, fazem da região ponto de encontro de grupos de corrida e caminhada, que aproveitam o circuito sombreado do parque e os eixos da cidade para treinos coletivos e preparação para provas do calendário do DF.',
    },
  ],
  culturaEsportiva:
    'Taguatinga tem cultura esportiva forte e cotidiana: moradores que usam o Parque Saburo Onoyama para caminhada, corrida e atividades em família, somados à densa oferta de academias de bairro e ao movimento das avenidas comerciais. O perfil de classe média, com presença de profissionais com ensino superior, se traduz em busca por acompanhamento profissional e constância nos treinos.',
  academias:
    'A oferta é numerosa e distribuída: academias de bairro nas quadras residenciais e redes e estúdios concentrados ao longo da Avenida Comercial e dos setores centrais, o que amplia o espaço de atuação do personal trainer em toda a região.',

  destaquesFitness: [
    'Maior polo comercial do DF fora do Plano Piloto: grande fluxo de pessoas e visibilidade para o profissional.',
    'Parque Ecológico Saburo Onoyama: cerca de 93 hectares com trilhas sombreadas para treino e corrida gratuitos.',
    'Metrô-DF com três estações (Praça do Relógio, Centro Metropolitano e Taguatinga Sul) facilita o deslocamento.',
    'População grande de classe média distribuída em muitas quadras, ideal para academias de bairro e atendimento domiciliar.',
    'Clima de cerrado: inverno seco e baixa umidade exigem reforço de hidratação no treino ao ar livre.',
  ],

  precos: {
    avulsaMin: 60,
    avulsaMax: 140,
    mensalMin: 300,
    mensalMax: 820,
    onlineMin: 140,
    onlineMax: 400,
  },

  conclusao:
    'Taguatinga reúne uma grande população de classe média, vida de rua intensa e infraestrutura de sobra para treinar: academias de bairro em quase todas as quadras, o Parque Saburo Onoyama com suas trilhas sombreadas e metrô para encurtar distâncias. Com um personal trainer alinhado ao seu objetivo, fica fácil manter a constância — na academia perto de casa, em domicílio ou no parque — mesmo no auge da seca do cerrado.',

  vizinhas: ['brasilia-df', 'ceilandia-df', 'aguas-claras-df'],

  fontes: [
    {
      nome: 'Administração Regional de Taguatinga — Governo do DF',
      url: 'https://www.taguatinga.df.gov.br/',
    },
    {
      nome: 'Companhia do Metropolitano do Distrito Federal (Metrô-DF)',
      url: 'https://metro.df.gov.br/',
    },
    {
      nome: 'Codeplan — PDAD Taguatinga',
      url: 'https://www.codeplan.df.gov.br/wp-content/uploads/2022/05/Taguatinga.pdf',
    },
  ],
  atualizadoEm: '2026-06-29',
};
