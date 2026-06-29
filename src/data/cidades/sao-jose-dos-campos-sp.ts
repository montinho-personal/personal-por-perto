import type { Cidade } from '../../lib/types';

export const cidade: Cidade = {
  slug: 'sao-jose-dos-campos-sp',
  nome: 'São José dos Campos',
  uf: 'SP',
  estado: 'São Paulo',
  estadoSlug: 'sao-paulo',
  regiao: 'Sudeste',
  gentilico: 'joseense',
  tipo: 'cidade',

  populacao: 697054,
  populacaoAno: 2022,
  idhm: 0.807,
  idhmClasse: 'muito alto',
  altitudeM: 600,

  resumoEconomico:
    'No coração do Vale do Paraíba, São José dos Campos abriga o maior complexo aeroespacial e de defesa da América Latina, com a Embraer, o INPE e o ITA, e tem a maior densidade de engenheiros e cientistas por habitante do Brasil. Cidade grande, de alta renda e premiada por qualidade de vida, reúne um público qualificado e exigente — terreno fértil para serviços de saúde e bem-estar.',

  mercado:
    'O mercado fitness é consolidado, com várias unidades de redes nacionais (Smart Fit em Satélite, Aquarius, Center Vale, entre outras) e boa cobertura de plataformas de benefícios. A cultura de corrida de rua e treino ao ar livre é forte, sustentada por grandes parques e por um calendário esportivo municipal intenso.',

  bairrosNobres: ['Jardim Aquarius', 'Urbanova', 'Jardim Esplanada', 'Jardim das Colinas'],
  bairrosPopulares: ['Jardim Satélite', 'Bosque dos Eucaliptos', 'Campo dos Alemães', 'Novo Horizonte'],

  parques: [
    {
      nome: 'Parque da Cidade Roberto Burle Marx',
      descricao:
        'Com cerca de 1 milhão de m² e relevo plano, tem trilhas sinalizadas para caminhada e corrida leve em meio à Mata Atlântica. Entrada gratuita, das 6h às 17h.',
    },
    {
      nome: 'Parque Santos Dumont',
      descricao:
        'Na região central (Vila Adyana), tem pista de caminhada, equipamentos de ginástica, quadra poliesportiva e pista de skate.',
    },
    {
      nome: 'Parque Vicentina Aranha',
      descricao:
        'Com cerca de 84 mil m² e grande parte de área verde, oferece pistas de caminhada em um espaço de valor histórico.',
    },
  ],
  ciclovias:
    'A cidade tem uma das maiores redes do interior paulista — cerca de 300 km entre ciclovias, ciclofaixas e rotas compartilhadas —, incluindo ligação intermunicipal com Jacareí.',

  clima:
    'O clima é subtropical de altitude, com verão quente e chuvoso e inverno seco e ameno; os cerca de 600 m de altitude moderam o calor do Vale.',
  climaTreino:
    'O treino ao ar livre é confortável quase o ano todo. No verão chuvoso, vale priorizar as manhãs e evitar o fim de tarde; o clima ameno favorece a constância.',

  mobilidade:
    'São José dos Campos é cortada pela Rodovia Presidente Dutra (BR-116), eixo São Paulo–Rio, a cerca de 90 km da capital, e também pela Carvalho Pinto. Tem boa malha viária urbana e uma rede cicloviária em expansão.',

  corridas: [
    {
      nome: 'Meia Maratona de São José',
      descricao:
        'Prova tradicional do calendário joseense, com largada no Paço Municipal.',
    },
    {
      nome: 'Circuito Joseense de corridas',
      descricao:
        'Calendário municipal robusto, com mais de duas dezenas de corridas por ano, de 3 km a 42 km, incluindo a maratona da cidade.',
    },
  ],
  culturaEsportiva:
    'São José dos Campos tem forte adesão a atividades ao ar livre nos parques e um calendário municipal de corrida muito ativo. Premiada por qualidade de vida e sustentabilidade urbana, a cidade incentiva a vida ativa como parte do seu projeto.',
  academias:
    'A oferta reúne várias unidades de redes nacionais (Smart Fit) e estúdios de funcional e crossfit, com boa cobertura de plataformas de benefícios, atendendo o público qualificado dos bairros de alta renda.',

  destaquesFitness: [
    'Múltiplas unidades de redes nacionais e ampla cobertura de planos corporativos.',
    'Parques planos e amplos, ideais para corrida e treino funcional ao ar livre.',
    'Cerca de 300 km de rede cicloviária para mobilidade ativa e ciclismo.',
    'Calendário anual intenso de corridas, incluindo meia maratona e maratona.',
  ],

  precos: {
    avulsaMin: 80,
    avulsaMax: 185,
    mensalMin: 400,
    mensalMax: 1100,
    onlineMin: 185,
    onlineMax: 470,
  },

  conclusao:
    'Cidade de alta renda, planejada e premiada por qualidade de vida, São José dos Campos tem estrutura de sobra para quem quer treinar — dos parques ao calendário de corridas. Um personal trainer ajuda a aproveitar tudo isso com método e a manter a constância ao longo do ano.',

  vizinhas: ['sao-paulo-sp', 'guarulhos-sp', 'campinas-sp'],

  fontes: [
    { nome: 'IBGE Cidades — São José dos Campos', url: 'https://cidades.ibge.gov.br/brasil/sp/sao-jose-dos-campos/panorama' },
    { nome: 'Prefeitura de São José dos Campos', url: 'https://www.sjc.sp.gov.br/' },
    { nome: 'Atlas Brasil — IDHM', url: 'https://www.atlasbrasil.org.br/' },
  ],
  atualizadoEm: '2026-06-29',
};
