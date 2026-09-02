import type { Cidade } from '../../lib/types';

export const cidade: Cidade = {
  slug: 'carpina-pe',
  nome: 'Carpina',
  uf: 'PE',
  estado: 'Pernambuco',
  estadoSlug: 'pernambuco',
  regiao: 'Nordeste',
  gentilico: 'carpinense',
  tipo: 'cidade',

  populacao: 79293,
  populacaoAno: 2022,
  idhm: 0.680,
  idhmClasse: 'médio',
  altitudeM: 76,

  resumoEconomico:
    'Carpina é um dos principais polos da Zona da Mata Norte de Pernambuco, a cerca de 48 km do Recife. Sua economia tem raízes históricas na cana-de-açúcar e no setor sucroalcooleiro que marca toda a região, mas a cidade se consolidou também como entroncamento e centro de comércio e serviços que atende municípios vizinhos. O eixo da BR-408, antiga rota da ferrovia, ajudou a transformar Carpina em referência regional de varejo, com forte movimento no centro e nas avenidas comerciais. A localização estratégica, em meio à cultura junina pernambucana e próxima à \"Cidade do Maior São João do Mundo\" da Mata Norte, reforça o turismo e o comércio sazonal na região.',

  mercado:
    'O mercado de personal trainer em Carpina tem o perfil de cidade média do interior pernambucano: academias de bairro, estúdios de treino funcional e profissionais autônomos que atendem em praças, condomínios e residências. O comércio regional aquecido e a vida urbana concentrada no centro sustentam uma demanda crescente por treino acompanhado, e o atendimento online ganha espaço entre quem tem rotina puxada no varejo e nos serviços.',

  bairrosNobres: ['Centro', 'Bairro Novo', 'Nova Carpina', 'Neópolis'],
  bairrosPopulares: ['COHAB', 'IPSEP', 'Chã das Tabocas', 'Cruz'],

  parques: [
    {
      nome: 'Parque de Eventos Jota Cândido',
      descricao:
        'Principal espaço de eventos da cidade, palco de festas, feiras e atividades públicas. A ampla área aberta também é aproveitada para caminhadas e treinos em grupo fora dos períodos de programação.',
    },
    {
      nome: 'Lago dos Carpinas (Centro)',
      descricao:
        'Lago arborizado no coração da cidade, cercado por área de comércio e lazer, que funciona como ponto de encontro e cenário agradável para caminhadas leves no centro urbano.',
    },
    {
      nome: 'Praças e academias ao ar livre',
      descricao:
        'A cidade conta com praças como a Dr. Murilo Silva e equipamentos públicos de ginástica espalhados pelos bairros, usados para treino funcional e atividades comunitárias.',
    },
  ],
  ciclovias:
    'A infraestrutura cicloviária é incipiente e restrita a poucos trechos urbanos; o ciclismo de lazer e de transporte aproveita as vias de menor movimento da cidade e os acessos vicinais, enquanto deslocamentos mais longos seguem pela BR-408.',

  clima:
    'O clima é quente e úmido, típico da Zona da Mata Norte de Pernambuco, com temperaturas elevadas ao longo do ano e chuvas concentradas no outono e inverno (de março a agosto), período mais nublado e fresco.',
  climaTreino:
    'O treino ao ar livre rende mais no começo da manhã ou no fim da tarde, escapando do calor do meio-dia, com hidratação reforçada por conta da umidade. Nos meses chuvosos, espaços cobertos e academias ganham preferência.',

  mobilidade:
    'Carpina fica a cerca de 48 km do Recife e é cortada pela BR-408, principal eixo de ligação com a capital e com as cidades da Mata Norte e do Agreste. A rodovia, duplicada no trecho até a Região Metropolitana, segue o traçado histórico da antiga ferrovia que deu origem à cidade. O transporte para a capital é feito sobretudo por linhas de ônibus intermunicipais; não há serviço ferroviário de passageiros em operação, e a malha sobre trilhos sobreviveu apenas como herança no traçado urbano.',

  corridas: [
    {
      nome: 'Corre Carpina',
      descricao:
        'Corrida de rua com largada no centro da cidade que reúne atletas de Carpina e de municípios vizinhos, misturando iniciantes e experientes em um percurso urbano pelas principais vias.',
    },
    {
      nome: 'Corridas e caminhadas comunitárias',
      descricao:
        'Eventos esportivos promovidos por grupos de corrida, academias e pela prefeitura, com percursos pelo centro e pelos bairros, fortalecendo a prática esportiva na Mata Norte.',
    },
  ],
  culturaEsportiva:
    'A cultura esportiva carpinense mistura a paixão regional pelo futebol com o crescimento da corrida de rua e do treino funcional ao ar livre. Praças, o entorno do lago no centro e os equipamentos públicos de ginástica funcionam como pontos naturais de treino, e provas como o Corre Carpina dão visibilidade ao esporte amador na cidade.',
  academias:
    'A oferta reúne academias de bairro, estúdios de treino funcional e personais autônomos, complementados por praças com aparelhos de ginástica e pelos espaços abertos do centro e do parque de eventos.',

  destaquesFitness: [
    'Parque de Eventos Jota Cândido oferece ampla área aberta para treinos em grupo e caminhadas.',
    'Lago dos Carpinas e praças do centro formam circuito agradável para caminhada leve.',
    'Praças com aparelhos públicos de ginástica ampliam o treino funcional nos bairros.',
    'Corre Carpina movimenta a cena da corrida de rua e atrai atletas de toda a Mata Norte.',
  ],

  precos: {
    avulsaMin: 45,
    avulsaMax: 110,
    mensalMin: 240,
    mensalMax: 680,
    onlineMin: 110,
    onlineMax: 340,
  },

  conclusao:
    'Polo de comércio e serviços da Zona da Mata Norte, Carpina combina a tradição sucroalcooleira da região com uma vida urbana ativa em torno do centro e do lago. Para quem quer treinar com consistência apesar do calor e da umidade, um personal trainer ajuda a montar um plano sob medida, aproveitando praças, parques e os espaços ao ar livre da cidade.',

  vizinhas: ['recife-pe', 'igarassu-pe', 'caruaru-pe'],

  capaArte: {
    src: '/capas-cidade/carpina-pe.webp',
    w: 1200,
    h: 1200,
    alt: 'Personal trainer em Carpina (PE) em arte com a igreja e o coreto da praça central e as ruas de comércio do centro, com o treino em primeiro plano — Personal por Perto',
    legenda: 'Treino personalizado em Carpina: treino perto de você, com acompanhamento profissional na Zona da Mata Norte pernambucana.',
  },
  fontes: [
    { nome: 'IBGE Cidades — Carpina', url: 'https://cidades.ibge.gov.br/brasil/pe/carpina/panorama' },
    { nome: 'Prefeitura de Carpina', url: 'https://www.carpina.pe.gov.br/' },
    { nome: 'Atlas Brasil — IDHM', url: 'https://www.atlasbrasil.org.br/' },
  ],
  atualizadoEm: '2026-09-01',
};
