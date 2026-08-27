import type { Cidade } from '../../lib/types';

export const cidade: Cidade = {
  slug: 'alfenas-mg',
  nome: 'Alfenas',
  uf: 'MG',
  estado: 'Minas Gerais',
  estadoSlug: 'minas-gerais',
  regiao: 'Sudeste',
  gentilico: 'alfenense',
  tipo: 'cidade',

  populacao: 78970,
  populacaoAno: 2022,
  idhm: 0.761,
  idhmClasse: 'alto',
  altitudeM: 768,

  resumoEconomico:
    'Cidade-polo do Sul de Minas às margens do Lago de Furnas (o "Mar de Minas"), Alfenas une uma forte tradição cafeeira a um expressivo polo universitário, com a Universidade Federal de Alfenas (Unifal-MG) e a Universidade José do Rosário Vellano (Unifenas). A economia combina café, ensino superior e serviços de saúde, atraindo milhares de estudantes e dando à cidade um perfil jovem e ativo.',

  mercado:
    'A presença de duas universidades e de muitos estudantes sustenta uma demanda constante por treino e bem-estar, com academias, estúdios e personal trainers atuando perto dos campi e dos bairros residenciais. O clima ameno de altitude e a proximidade do Lago de Furnas favorecem o treino ao ar livre boa parte do ano.',

  bairrosNobres: ['Centro', 'Jardim Aeroporto', 'Residencial Aeroporto', 'Jardim São Carlos'],
  bairrosPopulares: ['Vila Teixeira', 'Jardim Boa Esperança', 'Santa Clara', 'Pinheirinho'],

  parques: [
    {
      nome: 'Orla do Lago de Furnas',
      descricao:
        'A poucos quilômetros do centro, a orla do maior lago de Minas Gerais oferece áreas de lazer, ciclismo e caminhada em meio à natureza, além de esportes náuticos nas águas calmas.',
    },
    {
      nome: 'Parque Municipal Ecológico',
      descricao:
        'Área verde com trilhas, espaços para piquenique e atividades ao ar livre, usada para caminhada e contato com a natureza dentro da cidade.',
    },
    {
      nome: 'Praça Getúlio Vargas',
      descricao:
        'Praça central que funciona como ponto de encontro e largada de corridas e caminhadas de rua na cidade.',
    },
  ],
  ciclovias:
    'A cidade tem trechos cicláveis urbanos e a orla do Lago de Furnas é muito procurada para pedaladas; a extensão oficial total de ciclovias ainda não é divulgada em fonte oficial.',

  clima:
    'O clima é tropical de altitude (subtropical de altitude), com estações bem definidas: verão quente e chuvoso e inverno seco e ameno, típico do Sul de Minas.',
  climaTreino:
    'O inverno seco e a altitude favorecem o treino ao ar livre, sobretudo de manhã; no verão, vale evitar o fim de tarde por causa das chuvas e reforçar a hidratação.',

  mobilidade:
    'Alfenas é cortada pela BR-491, que liga a cidade a Varginha, Areado e outros municípios do Sul de Minas, em posição estratégica entre Varginha, Poços de Caldas e Passos.',

  corridas: [
    {
      nome: 'Circuito Unifal-MG de Corrida',
      descricao:
        'Prova de rua organizada pela universidade, com percursos de 5 km e 10 km e largada na Unidade Santa Clara, reunindo atletas, estudantes e a comunidade.',
    },
    {
      nome: 'Corrida e Caminhada Unicardio',
      descricao:
        'Evento de corrida e caminhada com percursos kids, 5 km e 10 km, voltado à saúde e ao incentivo à atividade física.',
    },
  ],
  culturaEsportiva:
    'A cidade tem um calendário esportivo movimentado pelas universidades e por eventos de rua, com boa adesão à corrida e ao ciclismo, especialmente na orla do Lago de Furnas.',
  academias:
    'A oferta reúne academias, estúdios e personal trainers distribuídos perto dos campi e dos bairros residenciais, complementada pela estrutura ao ar livre da orla e dos parques.',

  academiasProximas: [
    { nome: 'Alpha Sports', detalhe: 'na Rua José Constâncio da Silveira, no Centro' },
    { nome: 'Body Health Alfenas', detalhe: 'na Av. José Paulino da Costa, no Centro' },
    { nome: 'Contorno do Corpo', detalhe: 'na Av. Jovino Fernandes Salles, no Novo Horizonte' },
  ],
  academiasVerificadasEm: '2026-08-27',

  destaquesFitness: [
    'Orla do Lago de Furnas como cenário para corrida, caminhada e ciclismo.',
    'Polo universitário (Unifal-MG e Unifenas) que sustenta uma demanda jovem por treino.',
    'Provas de rua ligadas às universidades e a eventos de saúde.',
    'Clima de altitude do Sul de Minas, com inverno seco favorável ao treino ao ar livre.',
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
    'Polo cafeeiro e universitário às margens do Lago de Furnas, Alfenas tem clima de altitude favorável e boas opções de treino ao ar livre. Um personal trainer ajuda a aproveitar a orla e os parques e a se preparar para as provas de rua da cidade com método.',

  vizinhas: ['varginha-mg', 'pocos-de-caldas-mg', 'passos-mg'],

  fontes: [
    { nome: 'IBGE Cidades — Alfenas', url: 'https://cidades.ibge.gov.br/brasil/mg/alfenas/panorama' },
    { nome: 'Prefeitura de Alfenas', url: 'https://www.alfenas.mg.gov.br/' },
    { nome: 'Atlas Brasil — IDHM', url: 'https://www.atlasbrasil.org.br/' },
  ],
  atualizadoEm: '2026-08-27',
  capaArte: {
    src: '/capas-cidade/alfenas-mg.webp',
    w: 1200,
    h: 849,
    alt:
      'Personal trainer em Alfenas (MG) em arte de treino funcional com a torre da igreja matriz e o portal de entrada da cidade do sul de Minas — Personal por Perto',
    legenda:
      'Treino personalizado em Alfenas: um plano feito para o seu corpo e a sua rotina, com acompanhamento profissional na cidade e região.',
  },
};
