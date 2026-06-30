import type { Cidade } from '../../lib/types';

export const cidade: Cidade = {
  slug: 'bonito-ms',
  nome: 'Bonito',
  uf: 'MS',
  estado: 'Mato Grosso do Sul',
  estadoSlug: 'mato-grosso-do-sul',
  regiao: 'Centro-Oeste',
  gentilico: 'bonitense',
  tipo: 'cidade',

  populacao: 23659,
  populacaoAno: 2022,
  idhm: 0.767,
  idhmClasse: 'alto',
  altitudeM: 315,

  resumoEconomico:
    'Encravada na serra da Bodoquena, no sudoeste de Mato Grosso do Sul, Bonito é reconhecida como a capital brasileira do ecoturismo e um destino mundial de natureza. A economia gira em torno do turismo de experiência — flutuação em rios de águas cristalinas, grutas, cachoeiras e trilhas —, complementado por hospedagem, gastronomia e pecuária no entorno rural.',

  mercado:
    'Cidade pequena, mas com fluxo turístico intenso o ano inteiro, Bonito tem um mercado fitness ligado ao estilo de vida ao ar livre e à qualidade de vida. A demanda local soma moradores que buscam treino constante e profissionais do turismo, com procura por funcional e corrida; o atendimento personalizado tende a ser mais artesanal e próximo do cliente do que em grandes centros.',

  bairrosNobres: ['Centro', 'Jardim Boa Vista', 'Vila Machado'],
  bairrosPopulares: ['Vila Donária', 'Cohab', 'Vila São Sebastião', 'Jardim Eldorado'],

  parques: [
    {
      nome: 'Balneário Municipal',
      descricao:
        'Às margens do rio Formoso, é o principal espaço público de lazer da cidade, com área verde, prainha de água doce e estrutura para atividade física à beira d’água.',
    },
    {
      nome: 'Gruta do Lago Azul',
      descricao:
        'Monumento natural e cartão-postal de Bonito, com trilha de acesso em degraus que desce até a caverna do lago de água azul-translúcida — um ícone do ecoturismo regional.',
    },
    {
      nome: 'Trilhas do rio Sucuri e da serra da Bodoquena',
      descricao:
        'Percursos em meio à mata e a nascentes de águas cristalinas, base da flutuação e das caminhadas guiadas que dão a Bonito fama internacional de natureza preservada.',
    },
  ],
  ciclovias:
    'A cidade tem pequena escala e ruas tranquilas; a extensão da malha cicloviária não é divulgada em fonte oficial, mas o pedal de lazer rumo aos balneários e atrativos é comum.',

  clima:
    'O clima é tropical, típico do sudoeste de Mato Grosso do Sul, com verões quentes e chuvosos e invernos secos e amenos; a altitude da serra da Bodoquena suaviza um pouco as temperaturas.',
  climaTreino:
    'O calor e a umidade do verão pedem treino no início da manhã ou no fim da tarde, com hidratação reforçada; o inverno seco é a melhor época para correr e fazer trilha ao ar livre.',

  mobilidade:
    'O acesso se dá principalmente pela MS-382 e pela MS-178 (que liga Bonito a Bodoquena); a cidade é compacta, com deslocamentos curtos no núcleo urbano e estradas vicinais rumo aos atrativos rurais.',

  corridas: [
    {
      nome: 'Bonito 21K',
      descricao:
        'Uma das provas de corrida de rua mais tradicionais do Centro-Oeste, com percurso por vias arborizadas e paisagens da serra da Bodoquena, integrando esporte e ecoturismo.',
    },
    {
      nome: 'Trail Run Serra da Bodoquena',
      descricao:
        'Corrida de trilha em meio à mata, cachoeiras e relevo da serra, que atrai corredores de aventura de todo o país para a região de Bonito e Bodoquena.',
    },
  ],
  culturaEsportiva:
    'A cultura esportiva de Bonito é indissociável da natureza: trilha, corrida de aventura, flutuação e atividades ao ar livre fazem parte da rotina de moradores e visitantes, reforçadas por um calendário de turismo esportivo em crescimento.',
  academias:
    'A oferta reúne academias de bairro e estúdios de funcional voltados ao público local e a profissionais do turismo, complementada pelo treino ao ar livre nos balneários e trilhas.',

  destaquesFitness: [
    'Capital brasileira do ecoturismo, com trilhas e natureza preservada para treino ao ar livre.',
    'Balneário Municipal às margens do rio Formoso como espaço de lazer e atividade física.',
    'Calendário de turismo esportivo com a Bonito 21K e o Trail Run Serra da Bodoquena.',
    'Inverno seco e ameno da serra da Bodoquena, ideal para correr e fazer trilha.',
  ],

  precos: {
    avulsaMin: 50,
    avulsaMax: 120,
    mensalMin: 260,
    mensalMax: 720,
    onlineMin: 120,
    onlineMax: 360,
  },

  conclusao:
    'Destino mundial de ecoturismo na serra da Bodoquena, Bonito une águas cristalinas, trilhas e um estilo de vida ao ar livre. Um personal trainer ajuda morador e visitante a aproveitar balneários e trilhas com método, ajustando intensidade e horários ao calor do verão e ao inverno seco.',

  vizinhas: ['aquidauana-ms', 'campo-grande-ms', 'dourados-ms'],

  fontes: [
    { nome: 'IBGE Cidades — Bonito', url: 'https://cidades.ibge.gov.br/brasil/ms/bonito/panorama' },
    { nome: 'Prefeitura de Bonito', url: 'https://www.bonito.ms.gov.br/' },
    { nome: 'Atlas Brasil — IDHM', url: 'https://www.atlasbrasil.org.br/' },
  ],
  atualizadoEm: '2026-06-29',
};
