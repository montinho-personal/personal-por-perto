import type { Cidade } from '../../lib/types';

export const cidade: Cidade = {
  slug: 'marechal-deodoro-al',
  nome: 'Marechal Deodoro',
  uf: 'AL',
  estado: 'Alagoas',
  estadoSlug: 'alagoas',
  regiao: 'Nordeste',
  gentilico: 'marechalense',
  tipo: 'cidade',

  populacao: 60370,
  populacaoAno: 2022,
  idhm: 0.642,
  idhmClasse: 'médio',
  altitudeM: 11,

  resumoEconomico:
    'Primeira capital de Alagoas e berço de Deodoro da Fonseca, Marechal Deodoro reúne história, turismo e indústria na Região Metropolitana de Maceió. A cidade combina um centro histórico colonial tombado pelo IPHAN, um litoral procurado o ano todo — com destaque para a Praia do Francês — e o polo cloroquímico alagoano, um dos principais centros de produção de cloro-soda e PVC do país.',

  mercado:
    'A vocação turística e a proximidade com a capital sustentam a vida ativa local: a orla da Praia do Francês concentra caminhada, corrida e treino funcional na areia, enquanto o centro histórico e os bairros residenciais oferecem espaço para atendimento personalizado. A oferta de personal trainers cresce acompanhando a expansão urbana da cidade em direção a Maceió.',

  bairrosNobres: ['Praia do Francês', 'Centro Histórico', 'Massagueira', 'Barra Nova'],
  bairrosPopulares: ['Carro Quebrado', 'Taperaguá', 'Poeira', 'Saco da Pedra'],

  parques: [
    {
      nome: 'Orla da Praia do Francês',
      descricao:
        'Principal cartão-postal da cidade, com faixa de areia branca, piscinas naturais formadas por recifes e calçadão à beira-mar — palco natural de caminhada, corrida e treino funcional ao ar livre.',
    },
    {
      nome: 'Orla da Lagoa Manguaba (Massagueira)',
      descricao:
        'Beira-lagoa tranquila e arborizada, conhecida pelos restaurantes de frutos do mar, com espaço para caminhada e atividades leves ao ar livre em ambiente de águas calmas.',
    },
    {
      nome: 'Centro Histórico colonial',
      descricao:
        'Conjunto tombado pelo IPHAN, com casario, igrejas barrocas e ruas de pedra que servem de cenário para caminhadas e corridas curtas em meio ao patrimônio da primeira capital alagoana.',
    },
  ],
  ciclovias:
    'A cidade tem trechos de ciclofaixa e vias compartilhadas na orla da Praia do Francês e na ligação com Massagueira e a Lagoa Manguaba, usados tanto para lazer quanto para pedaladas de treino à beira-mar.',

  clima:
    'O clima é tropical quente e úmido, típico do litoral alagoano e da Região Metropolitana de Maceió, com médias em torno de 25 °C e temperaturas máximas próximas de 32 °C no verão.',
  climaTreino:
    'O calor e a umidade altos o ano todo favorecem o treino ao ar livre no início da manhã e no fim da tarde, com hidratação reforçada e atenção à insolação na areia e nos calçadões da orla.',

  mobilidade:
    'Marechal Deodoro fica a poucos quilômetros de Maceió e é conectada pela AL-101 Sul, a Rota Ecológica, que liga a capital às praias do litoral sul. A proximidade com Maceió integra a cidade ao deslocamento metropolitano; internamente predominam carro, ônibus e van.',

  corridas: [
    {
      nome: 'Corridas de rua na Praia do Francês',
      descricao:
        'A orla da Praia do Francês recebe provas e desafios de corrida e caminhada ao longo do ano, aproveitando o cenário litorâneo e o calçadão à beira-mar.',
    },
    {
      nome: 'Eventos esportivos do litoral sul',
      descricao:
        'A cidade integra o calendário de provas do litoral metropolitano de Maceió, com etapas e travessias que passam pelas praias e pela Lagoa Manguaba.',
    },
  ],
  culturaEsportiva:
    'A cultura esportiva gira em torno do litoral: a Praia do Francês é o ponto de encontro de quem corre, caminha e treina ao ar livre, e a vida ao mar e à lagoa reforça a procura por esportes aquáticos e atividades de praia.',
  academias:
    'A oferta de academias e estúdios se concentra no eixo da Praia do Francês, em Massagueira e no centro, complementada pela ampla "academia ao ar livre" que são a orla e os calçadões à beira-mar e à beira-lagoa.',

  destaquesFitness: [
    'Praia do Francês como polo de treino ao ar livre, com areia e calçadão à beira-mar.',
    'Proximidade com Maceió, ampliando o acesso a academias, eventos e profissionais da RM.',
    'Lagoa Manguaba e litoral sul favoráveis a esportes aquáticos e atividades de praia.',
    'Clima quente o ano todo permite treino externo em praticamente todas as estações.',
  ],

  precos: {
    avulsaMin: 45,
    avulsaMax: 110,
    mensalMin: 240,
    mensalMax: 680,
    onlineMin: 110,
    onlineMax: 350,
  },

  conclusao:
    'Entre o centro histórico colonial e as praias do litoral sul alagoano, Marechal Deodoro é feita para quem gosta de treinar ao ar livre. Um personal trainer ajuda a transformar a orla da Praia do Francês e a beira da Lagoa Manguaba em um plano consistente — respeitando o clima quente e levando você do objetivo à constância.',

  vizinhas: ['maceio-al', 'rio-largo-al'],

  fontes: [
    {
      nome: 'IBGE Cidades — Marechal Deodoro',
      url: 'https://cidades.ibge.gov.br/brasil/al/marechal-deodoro/panorama',
    },
    { nome: 'Prefeitura de Marechal Deodoro', url: 'https://www.marechaldeodoro.al.gov.br/' },
    { nome: 'Atlas Brasil — IDHM', url: 'https://www.atlasbrasil.org.br/' },
  ],
  atualizadoEm: '2026-06-29',
};
