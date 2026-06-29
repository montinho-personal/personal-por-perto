import type { Cidade } from '../../lib/types';

export const cidade: Cidade = {
  slug: 'itaquaquecetuba-sp',
  nome: 'Itaquaquecetuba',
  uf: 'SP',
  estado: 'São Paulo',
  estadoSlug: 'sao-paulo',
  regiao: 'Sudeste',
  gentilico: 'itaquaquecetubano',
  tipo: 'cidade',

  populacao: 369275,
  populacaoAno: 2022,
  idhm: 0.714,
  idhmClasse: 'alto',
  altitudeM: 790,

  resumoEconomico:
    'Localizada na sub-região do Alto Tietê, na Região Metropolitana de São Paulo, Itaquaquecetuba é um município popular com forte perfil de cidade-dormitório, cuja população trabalha em grande parte na capital e nas cidades vizinhas. A economia local apoia-se no comércio, em serviços e em pequenas e médias indústrias, e o cotidiano gira em torno do deslocamento diário viabilizado pelo trem e pelas rodovias da região.',

  mercado:
    'O mercado de personal trainers é essencialmente popular, sustentado por academias de bairro espalhadas pelo Centro e pelos distritos residenciais. Há demanda crescente por atendimento domiciliar e por treino conectado: muitos moradores treinam perto de casa antes ou depois de pegar a CPTM rumo a São Paulo. O profissional que oferece horários flexíveis e preços acessíveis encontra um público fiel.',

  bairrosNobres: ['Centro', 'Vila Virgínia', 'Vila Monte Belo', 'Jardim Gonçalves'],
  bairrosPopulares: ['Vila Nely', 'Jardim Adriana', 'Vila Zeferina', 'Jardim Caiuby'],

  parques: [
    {
      nome: 'Parque Ecológico Mário do Canto',
      descricao:
        'Principal área de lazer ao ar livre da cidade, com pista de caminhada e corrida, lago, áreas de piquenique e quiosques, muito usada por moradores para atividade física.',
    },
    {
      nome: 'Equipamentos esportivos municipais',
      descricao:
        'A cidade conta com ginásios, quadras e campos distribuídos pelos bairros, que sustentam a prática esportiva comunitária e o treino acessível.',
    },
    {
      nome: 'Praças e áreas de lazer de bairro',
      descricao:
        'Espaços públicos com academias ao ar livre e quadras nos bairros residenciais, ampliando o acesso da população ao treino gratuito.',
    },
  ],
  ciclovias:
    'A cidade possui trechos de estrutura cicloviária em algumas avenidas, mas a extensão total não é consolidada em fonte oficial.',

  clima:
    'O clima é subtropical de altitude do planalto paulista, com verões chuvosos e invernos mais secos e amenos; situada no vale do Tietê, a cidade tem áreas baixas sujeitas a alagamentos em chuvas fortes.',
  climaTreino:
    'O treino ao ar livre rende bem no inverno seco e nas primeiras horas da manhã; no verão, é prudente acompanhar as chuvas de fim de tarde e evitar áreas baixas alagáveis.',

  mobilidade:
    'A mobilidade é marcada pela CPTM Linha 12-Safira, com as estações Itaquaquecetuba, Engenheiro Manoel Feio e Aracaré, que ligam a cidade ao Brás e à capital. O acesso rodoviário se dá pela Rodovia Ayrton Senna e pelo Rodoanel Mário Covas, reforçando a rotina pendular dos moradores.',

  corridas: [
    {
      nome: 'Provas de rua do Alto Tietê',
      descricao:
        'Itaquaquecetuba integra o calendário de corridas de rua da região do Alto Tietê, com provas na própria cidade e nos municípios vizinhos.',
    },
    {
      nome: 'Atividades esportivas municipais',
      descricao:
        'A prefeitura promove ações esportivas e de lazer gratuitas, com uso das pistas do Parque Ecológico Mário do Canto e dos equipamentos de bairro.',
    },
  ],
  culturaEsportiva:
    'A cultura esportiva é comunitária e ligada ao futebol de várzea, às quadras de bairro e ao uso das praças e do Parque Ecológico Mário do Canto. O acesso gratuito aos equipamentos públicos é central para uma população de perfil popular e trabalhadora.',
  academias:
    'A oferta é dominada por academias de bairro de preço acessível, concentradas no Centro e nas avenidas principais, complementadas por estúdios menores e pelo atendimento domiciliar.',

  destaquesFitness: [
    'Parque Ecológico Mário do Canto, com pista de caminhada e corrida.',
    'Perfil de cidade-dormitório, com forte demanda por treino perto de casa e horários flexíveis.',
    'Treino conectado pela CPTM Linha 12-Safira, que estrutura a rotina diária dos moradores.',
    'Rede de academias de bairro e atendimento domiciliar acessível.',
  ],

  precos: {
    avulsaMin: 50,
    avulsaMax: 120,
    mensalMin: 260,
    mensalMax: 700,
    onlineMin: 120,
    onlineMax: 360,
  },

  conclusao:
    'Cidade popular e pendular do Alto Tietê, Itaquaquecetuba tem uma demanda muito ligada à rotina de trabalho e ao deslocamento pela CPTM. Um personal trainer ajuda a encaixar o treino no dia a dia — aproveitando o Parque Ecológico Mário do Canto, as academias de bairro, o atendimento domiciliar ou o formato online.',

  vizinhas: ['mogi-das-cruzes-sp', 'suzano-sp', 'guarulhos-sp', 'sao-paulo-sp'],

  fontes: [
    {
      nome: 'IBGE Cidades — Itaquaquecetuba',
      url: 'https://cidades.ibge.gov.br/brasil/sp/itaquaquecetuba/panorama',
    },
    { nome: 'Prefeitura de Itaquaquecetuba', url: 'https://www.itaquaquecetuba.sp.gov.br/' },
    { nome: 'Atlas Brasil — IDHM', url: 'https://www.atlasbrasil.org.br/perfil/municipio/3523107' },
  ],
  atualizadoEm: '2026-06-29',
};
