import type { Cidade } from '../../lib/types';

export const cidade: Cidade = {
  slug: 'tres-rios-rj',
  nome: 'Três Rios',
  uf: 'RJ',
  estado: 'Rio de Janeiro',
  estadoSlug: 'rio-de-janeiro',
  regiao: 'Sudeste',
  gentilico: 'trirriense',
  tipo: 'cidade',

  populacao: 78346,
  populacaoAno: 2022,
  idhm: 0.725,
  idhmClasse: 'alto',
  altitudeM: 269,

  resumoEconomico:
    'Conhecida como a "Cidade Entroncamento", Três Rios nasceu no encontro dos rios Paraíba do Sul, Piabanha e Paraibuna, no Centro-Sul Fluminense, e cresceu como nó de circulação do estado. O cruzamento entre a antiga Estrada de Ferro D. Pedro II e as estradas de rodagem fez do município um dos maiores entroncamentos rodoferroviários do país, condição que ainda hoje organiza sua economia em torno de indústria, logística, comércio e serviços.',

  mercado:
    'Como cidade média do interior fluminense, Três Rios tem um mercado de treino personalizado em consolidação, ancorado em academias de bairro e no uso das margens dos rios e das praças centrais. O IDHM alto e a posição estratégica de entroncamento, entre Petrópolis, Juiz de Fora e o Vale do Café, sustentam uma demanda crescente por acompanhamento individualizado.',

  bairrosNobres: ['Centro', 'Vila Isabel', 'Cantagalo', 'Cidade Nova'],
  bairrosPopulares: ['Moura Brasil', 'Ponto Azul', 'Triângulo', 'Habitat'],

  parques: [
    {
      nome: 'Encontro dos Três Rios',
      descricao:
        'No bairro Moura Brasil, a confluência dos rios Paraíba do Sul, Piabanha e Paraibuna forma o que é reconhecido como o único delta triplo da América Latina, um marco paisagístico e ponto de passeio e contemplação às margens das águas.',
    },
    {
      nome: 'Horto Municipal',
      descricao:
        'Área verde arborizada usada para caminhada, lazer e eventos esportivos e culturais da cidade, servindo como espaço de atividade ao ar livre no centro de Três Rios.',
    },
    {
      nome: 'Orla e margens dos rios',
      descricao:
        'Os trechos ribeirinhos do Paraíba do Sul e do Paraibuna e as praças centrais funcionam como pontos tradicionais de caminhada e corrida de quem treina ao ar livre.',
    },
  ],
  ciclovias:
    'A malha cicloviária é ainda limitada, típica de cidade média do interior; o ciclismo acontece sobretudo nas vias de menor movimento, nas margens dos rios e nas estradas vicinais que ligam o distrito-sede a Bemposta e aos municípios vizinhos.',

  clima:
    'O clima é tropical de altitude, característico do Centro-Sul Fluminense, com verões quentes e úmidos e invernos amenos e mais secos no vale do Paraíba.',
  climaTreino:
    'As condições para treino ao ar livre são boas na maior parte do ano; no verão, o calor e a umidade pedem priorizar a manhã e o fim de tarde e reforçar a hidratação, enquanto o inverno ameno favorece atividades em qualquer horário.',

  mobilidade:
    'Três Rios é a "Cidade Entroncamento": cortada pelas rodovias federais BR-040 (Washington Luís, eixo Rio–Juiz de Fora–Brasília) e BR-393 (Lúcio Meira, sentido São Paulo e Vitória) e por uma importante ferrovia, o município reúne um dos maiores entroncamentos rodoferroviários do país. Essa posição garante acesso rápido às principais cidades da região e a integração com Petrópolis, Juiz de Fora e o Vale do Café.',

  corridas: [
    {
      nome: 'Corridas de rua de Três Rios',
      descricao:
        'Provas locais que exploram o centro, as margens dos rios e o relevo de subidas e descidas, integrando o calendário esportivo do Centro-Sul Fluminense.',
    },
    {
      nome: 'Etapa do Campeonato Brasileiro de Rafting',
      descricao:
        'Reconhecida como berço do rafting no Brasil, a cidade recebe competições nacionais no rio Paraibuna, com programação esportiva e cultural que reforça sua vocação para esportes de aventura.',
    },
    {
      nome: 'Circuito regional do Centro-Sul Fluminense',
      descricao:
        'Os corredores trirrienses participam de provas em cidades próximas ao longo do ano, aproveitando a posição de entroncamento para circular pela região.',
    },
  ],
  culturaEsportiva:
    'A cultura esportiva trirriense mistura o futebol de tradição, a corrida de rua aproveitando o relevo do vale e, sobretudo, os esportes de aventura nas águas: a cidade é berço do rafting no Brasil, com descidas no Paraibuna até o encontro dos três rios, que atraem praticantes e turistas durante o ano.',
  academias:
    'A oferta de academias é típica de cidade média do interior fluminense, distribuída pelos bairros e bem complementada pelo uso das praças, do Horto Municipal e das margens dos rios para treino ao ar livre.',

  destaquesFitness: [
    'Encontro dos Três Rios, único delta triplo da América Latina, para passeio e contemplação.',
    'Horto Municipal e praças centrais para caminhada, corrida e atividades ao ar livre.',
    'Rafting no rio Paraibuna, com a cidade reconhecida como berço da modalidade no Brasil.',
    'Posição de entroncamento que facilita participar de provas e circuitos da região.',
  ],

  precos: {
    avulsaMin: 50,
    avulsaMax: 110,
    mensalMin: 280,
    mensalMax: 680,
    onlineMin: 130,
    onlineMax: 340,
  },

  conclusao:
    'Cidade Entroncamento nascida no encontro de três rios, Três Rios une o ritmo de um polo logístico do Centro-Sul Fluminense à natureza das águas e do vale do Paraíba. Entre as margens dos rios, o Horto e as praças do centro, há cenário de sobra para treinar ao ar livre, e um personal trainer ajuda a transformar essa rotina em resultados consistentes, ajustando o plano ao dia a dia de quem vive na cidade.',

  vizinhas: ['petropolis-rj', 'barra-do-pirai-rj', 'juiz-de-fora-mg'],

  fontes: [
    { nome: 'IBGE Cidades — Três Rios', url: 'https://cidades.ibge.gov.br/brasil/rj/tres-rios/panorama' },
    { nome: 'Prefeitura de Três Rios', url: 'https://tresrios.rj.gov.br/' },
    { nome: 'Atlas Brasil — IDHM', url: 'https://www.atlasbrasil.org.br/' },
  ],
  atualizadoEm: '2026-06-29',
};
