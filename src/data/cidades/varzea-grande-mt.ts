import type { Cidade } from '../../lib/types';

export const cidade: Cidade = {
  slug: 'varzea-grande-mt',
  nome: 'Várzea Grande',
  uf: 'MT',
  estado: 'Mato Grosso',
  estadoSlug: 'mato-grosso',
  regiao: 'Centro-Oeste',
  gentilico: 'várzea-grandense',
  tipo: 'cidade',

  populacao: 299470,
  populacaoAno: 2022,
  idhm: 0.734,
  idhmClasse: 'alto',

  resumoEconomico:
    'Integrante da Região Metropolitana do Vale do Rio Cuiabá e conurbada à capital, Várzea Grande é um polo industrial e comercial que abriga o Aeroporto Internacional Marechal Rondon, o principal do estado. Tem forte setor de comércio, concessionárias e indústria, concentrado em regiões como a Grande Cristo Rei.',

  mercado:
    'A grande população metropolitana e a classe trabalhadora industrial e comercial formam um mercado de volume, com demanda por academias de bairro e estúdios, em uma renda média compatível com o IDHM alto.',

  bairrosNobres: ['Centro-Sul', 'Cristo Rei', 'Jardim Imperial', 'Costa Verde'],
  bairrosPopulares: ['Manga', 'Ponte Nova', 'Construmat', '23 de Setembro'],

  parques: [
    {
      nome: 'Parque Ambiental Bernardo Berneck',
      descricao:
        'Maior parque urbano (cerca de 280 mil m²), com pista de caminhada de 3,5 km, academia ao ar livre, parquinho e píeres sobre dois lagos, além de aulas gratuitas.',
    },
    {
      nome: 'Parque Ecológico Tanque do Fancho',
      descricao:
        'Na Av. Castelo Branco, tem pista de caminhada, equipamentos de exercício e playground.',
    },
    {
      nome: 'Parque Municipal Flor do Ipê',
      descricao:
        'Cerca de 19 hectares com trilhas suspensas, academia ao ar livre e áreas de descanso.',
    },
  ],
  ciclovias:
    'A extensão da malha cicloviária ainda não é divulgada em fonte oficial.',

  clima:
    'O clima é tropical de savana, quente, com média anual em torno de 26,3 °C e verão chuvoso.',
  climaTreino:
    'O calor intenso exige treinar ao ar livre nos horários mais frescos, com atenção redobrada à hidratação.',

  mobilidade:
    'Várzea Grande é cortada pela BR-364 e pela BR-070, com conexão direta a Cuiabá por pontes sobre o rio Cuiabá.',

  corridas: [
    {
      nome: 'Aulas e atividades nos parques municipais',
      descricao:
        'A prefeitura mantém programação gratuita de atividade física, como as aulas no Parque Bernardo Berneck.',
    },
    {
      nome: 'Provas da região metropolitana de Cuiabá',
      descricao:
        'A conurbação com a capital amplia o acesso a corridas de rua do calendário metropolitano.',
    },
  ],
  culturaEsportiva:
    'A cultura é metropolitana, voltada ao futebol e ao lazer em parques públicos, com a prefeitura mantendo aulas gratuitas de atividade física.',
  academias:
    'A oferta reúne academias de bairro e estúdios, em um mercado de grande volume populacional, complementada por três parques ambientais com academia ao ar livre.',

  academiasProximas: [
    { nome: 'Smart Fit Várzea Grande Shopping', detalhe: 'na Av. Presidente Arthur Bernardes' },
    { nome: 'Bluefit Várzea Grande', detalhe: 'na Av. Filinto Müller' },
  ],

  destaquesFitness: [
    'Parque Bernardo Berneck, com pista de 3,5 km e aulas gratuitas — polo de treino ao ar livre.',
    'Mercado de grande volume populacional (cerca de 300 mil habitantes) na RM de Cuiabá.',
    'Três parques ambientais com academia ao ar livre e estrutura.',
    'Conurbação com Cuiabá, que amplia o público potencial.',
  ],

  precos: {
    avulsaMin: 60,
    avulsaMax: 145,
    mensalMin: 300,
    mensalMax: 840,
    onlineMin: 160,
    onlineMax: 410,
  },

  conclusao:
    'Conurbada a Cuiabá e com o principal aeroporto do estado, Várzea Grande tem boa rede de parques ambientais. Um personal trainer ajuda a aproveitar o Parque Bernardo Berneck com método, ajustando horários e hidratação ao calor do cerrado.',

  vizinhas: ['cuiaba-mt', 'rondonopolis-mt'],

  fontes: [
    { nome: 'IBGE Cidades — Várzea Grande', url: 'https://cidades.ibge.gov.br/brasil/mt/varzea-grande/panorama' },
    { nome: 'Prefeitura de Várzea Grande', url: 'https://www.varzeagrande.mt.gov.br/' },
    { nome: 'Atlas Brasil — IDHM', url: 'https://www.atlasbrasil.org.br/' },
  ],
  atualizadoEm: '2026-08-27',

  capaArte: {
    src: '/capas-cidade/varzea-grande-mt.webp',
    w: 1200,
    h: 900,
    alt:
      'Personal trainer em Várzea Grande (MT) em arte que reúne treino de força, a caixa d’água da Avenida Filinto Müller, a igreja matriz do Centro, o Aeroporto Marechal Rondon e a Passagem da Conceição, no rio Cuiabá — Personal por Perto',
    legenda:
      'Treino personalizado em Várzea Grande: um plano feito para o seu corpo e a sua rotina, com acompanhamento profissional na cidade e região.',
  },
};
