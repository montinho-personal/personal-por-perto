import type { Cidade } from '../../lib/types';

export const cidade: Cidade = {
  slug: 'osasco-sp',
  nome: 'Osasco',
  uf: 'SP',
  estado: 'São Paulo',
  estadoSlug: 'sao-paulo',
  regiao: 'Sudeste',
  gentilico: 'osasquense',

  populacao: 743432,
  populacaoAno: 2022,
  idhm: 0.776,
  idhmClasse: 'alto',
  altitudeM: 720,

  resumoEconomico:
    'Em apenas cerca de 65 km², Osasco concentra um dos maiores PIBs do país e abriga a sede do Banco Bradesco, na Cidade de Deus — um dos maiores polos financeiros e de serviços do Brasil. A cidade reúne ainda nomes como Mercado Livre, iFood e FedEx, o que cria uma grande população de trabalhadores e um público corporativo natural para treinos antes e depois do expediente.',

  bairrosNobres: ['Jardim das Flores', 'Vila Yara', 'Bela Vista', 'City Bussocaba'],
  bairrosPopulares: ['Rochdale', 'Km 18', 'Presidente Altino', 'Jardim Veloso'],

  parques: [
    {
      nome: 'Parque Chico Mendes',
      descricao:
        'O maior parque da cidade, com cerca de 114 mil m². Tem academia ao ar livre gratuita, pistas de caminhada, quadras e trilhas leves — um espaço completo para treino funcional, mobilidade e alongamento. Abre das 6h às 18h.',
    },
    {
      nome: 'Parque Ecológico Dionísio Álvarez Mateos',
      descricao:
        'Com cerca de 52 mil m² no Jardim das Flores, reúne pista de caminhada e corrida, equipamentos de ginástica ao ar livre e lago. É também sede do Ecomuseu de Osasco.',
    },
    {
      nome: 'Parque dos Eucaliptos',
      descricao:
        'Tem pista de cooper, trilhas e bicicletário, sendo uma boa opção para corrida e pedaladas mais tranquilas.',
    },
  ],
  ciclovias:
    'Aos domingos, das 7h às 12h, a cidade monta uma ciclofaixa de lazer ligando o Parque Chico Mendes ao boulevard em frente à Prefeitura — cerca de 7 km de ida e volta, com empréstimo de bicicletas (informação da Prefeitura de Osasco).',

  clima:
    'Por integrar a Região Metropolitana de São Paulo, Osasco tem o mesmo padrão climático da capital: subtropical de altitude, com média anual entre 19 °C e 20 °C, verão chuvoso e inverno ameno e mais seco. A cidade fica a cerca de 720 m de altitude, às margens do Rio Tietê.',
  climaTreino:
    'As manhãs cedo, especialmente no verão, são as melhores janelas para treino ao ar livre. Como a cidade é compacta, é fácil combinar treino em parque com sessões em academia nos dias de chuva.',

  mobilidade:
    'Osasco é um dos maiores polos de transporte da Grande SP: a Estação Osasco integra as linhas 8-Diamante e 9-Esmeralda (operadas pela ViaMobilidade), e a Estação Presidente Altino também conecta as duas. A forte integração ferroviária com a capital torna viável atender clientes que se deslocam entre São Paulo e Osasco.',

  corridas: [
    {
      nome: 'Desafio dos Trabalhadores',
      descricao:
        'A corrida de rua mais tradicional da cidade, com provas de 4 km e 8 km e largada em frente à Prefeitura, na Avenida Lázaro de Mello Brandão. Reúne corredores de toda a região metropolitana.',
    },
    {
      nome: 'Aulas públicas da SEREL',
      descricao:
        'A Secretaria de Esporte, Recreação e Lazer oferece aulas gratuitas nos parques — de caminhada orientada e ginástica funcional a pilates, yoga e tai chi —, geralmente no início da manhã.',
    },
  ],
  culturaEsportiva:
    'Osasco é referência nacional no vôlei feminino: o clube da cidade, com sede no Ginásio José Liberatti, soma Superligas, títulos sul-americanos e o Mundial de Clubes de 2012. Essa cultura esportiva forte se estende ao dia a dia, com parques movimentados e ciclofaixa de lazer consolidada.',
  academias:
    'A cidade combina academias de shopping e de bairro — com forte presença de redes como a Smart Fit, em várias unidades — às academias ao ar livre municipais e às aulas gratuitas nos parques, o que favorece tanto o treino indoor quanto o outdoor.',

  destaquesFitness: [
    'Cidade compacta (~65 km²) com deslocamentos curtos — ótimo para atendimento em domicílio e condomínios.',
    'Forte oferta pública e gratuita: parques com academia ao ar livre e aulas da SEREL.',
    'Ciclofaixa de lazer dominical com empréstimo de bicicletas.',
    'Excelente conexão ferroviária com São Paulo (linhas 8 e 9).',
  ],

  precos: {
    avulsaMin: 60,
    avulsaMax: 150,
    mensalMin: 320,
    mensalMax: 850,
    onlineMin: 150,
    onlineMax: 400,
  },

  vizinhas: ['barueri-sp', 'sao-paulo-sp', 'guarulhos-sp'],

  fontes: [
    { nome: 'IBGE Cidades — Osasco', url: 'https://cidades.ibge.gov.br/brasil/sp/osasco/panorama' },
    { nome: 'Prefeitura de Osasco', url: 'https://www.osasco.sp.gov.br/' },
    { nome: 'Atlas Brasil — IDHM', url: 'https://www.atlasbrasil.org.br/' },
  ],
  atualizadoEm: '2026-06-28',
};
