import type { Cidade } from '../../lib/types';

export const cidade: Cidade = {
  slug: 'boa-esperanca-mg',
  nome: 'Boa Esperança',
  uf: 'MG',
  estado: 'Minas Gerais',
  estadoSlug: 'minas-gerais',
  regiao: 'Sudeste',
  gentilico: 'esperancense',
  tipo: 'cidade',

  populacao: 39848,
  populacaoAno: 2022,
  idhm: 0.704,
  idhmClasse: 'alto',
  altitudeM: 783,

  resumoEconomico:
    'No Sul de Minas, às margens do Lago de Furnas, Boa Esperança tem no café o motor da economia desde que a lavoura chegou em larga escala à região em 1873, reforçada pela vinda de famílias de imigrantes italianos em 1880. A CAPEBE, cooperativa fundada em 1963, está entre as maiores cooperativas agropecuárias de Minas Gerais e reúne milhares de associados em café, leite, milho e soja. A cidade também funciona como polo educacional regional, com polo de apoio presencial da UEMG e do CEAD/UFJF, além do comércio concentrado no Centro e no bairro Nova Era.',

  mercado:
    'O mercado fitness de Boa Esperança é típico de cidade média do interior, apoiado em academias e estúdios de personal training instalados no Centro e em bairros próximos. A proximidade do Lago de Furnas e do Parque Estadual Serra da Boa Esperança amplia a procura por treino ao ar livre, tanto entre moradores quanto entre visitantes que frequentam a orla nos fins de semana.',

  bairrosNobres: ['Centro', 'Nova Era', 'Cidade Nova', 'Jardim Alvorada'],
  bairrosPopulares: ['Vila Belém', 'Santa Rita', 'Progresso', 'Sucupira'],

  parques: [
    {
      nome: 'Parque Estadual Serra da Boa Esperança',
      descricao:
        'Unidade de conservação estadual com trilhas, cânions e cachoeiras — a mais conhecida é a Cachoeira Santa Luzia, de sete quedas. O Pico do Alvinho, com rampa de voo livre, e o Pico da Igrejinha oferecem mirantes sobre a cidade e o Lago de Furnas.',
    },
    {
      nome: 'Avenida Beira Lago',
      descricao:
        'Orla urbanizada às margens do Lago dos Encantos (represa de Furnas), com calçadão e jardins usados para caminhada e corrida, além de bares e restaurantes ao longo do percurso.',
    },
    {
      nome: 'Prainha do Seleiro e Praia do Bicano',
      descricao:
        'Praias artificiais de água doce na represa de Furnas, com quadras esportivas e estrutura para esportes aquáticos como caiaque e stand up paddle.',
    },
  ],

  clima:
    'O clima é tropical de altitude, com temperatura média anual próxima de 19 °C e mais de 80% das chuvas concentradas no verão; o inverno é mais seco, com manhãs frias.',
  climaTreino:
    'As temperaturas amenas de altitude favorecem o treino ao ar livre boa parte do ano; nas manhãs mais frias de inverno vale reforçar o aquecimento, e nos períodos chuvosos de verão é preciso flexibilizar horários.',

  mobilidade:
    'O acesso rodoviário principal é pela MG-491, que liga Boa Esperança a Varginha (cerca de 56 km) e integra o lote de rodovias concedido à EPR Vias do Café no Sul de Minas. A cidade conta com terminal rodoviário e transporte urbano por ônibus.',

  corridas: [
    {
      nome: 'Corrida da Superação',
      descricao:
        'Prova de rua com percursos de 5 km e 10 km (feminino e masculino), além de caminhada e prova kids, realizada em novembro.',
    },
    {
      nome: 'Corrida da CAPEBE',
      descricao:
        'Evento de corrida de rua e caminhada promovido em torno da cooperativa cafeeira local, com provas de 5 km e 10 km e categoria kids, realizado em março.',
    },
  ],
  culturaEsportiva:
    'A cultura esportiva local combina os esportes aquáticos praticados no Lago de Furnas (caiaque, stand up paddle e passeios de barco), as trilhas do Parque Estadual da Serra e um calendário de corridas de rua com identidade cafeeira, caso da Corrida da CAPEBE.',
  academias:
    'A oferta de academias e personal trainers é concentrada no Centro e em bairros próximos, com estrutura compatível com uma cidade média do interior mineiro.',

  destaquesFitness: [
    'Avenida Beira Lago, orla do Lago de Furnas com calçadão para caminhada e corrida.',
    'Parque Estadual Serra da Boa Esperança, com trilhas, cachoeiras e mirantes.',
    'Praias artificiais (Prainha do Seleiro e Praia do Bicano) com estrutura para esportes aquáticos.',
    'Economia cafeeira da CAPEBE, que movimenta corridas de rua temáticas na cidade.',
  ],

  precos: {
    avulsaMin: 50,
    avulsaMax: 110,
    mensalMin: 250,
    mensalMax: 650,
    onlineMin: 120,
    onlineMax: 320,
  },

  conclusao:
    'Cercada pelo Lago de Furnas e pela Serra da Boa Esperança, a cidade oferece boa base para treinar ao ar livre, do calçadão da Beira Lago às trilhas do parque estadual. Um personal trainer ajuda a aproveitar esses espaços com segurança e método, mantendo a constância ao longo das estações mais secas e mais chuvosas do ano.',

  vizinhas: ['varginha-mg', 'tres-pontas-mg'],

  fontes: [
    { nome: 'IBGE Cidades — Boa Esperança', url: 'https://cidades.ibge.gov.br/brasil/mg/boa-esperanca/panorama' },
    { nome: 'Atlas Brasil — IDHM', url: 'https://www.atlasbrasil.org.br/' },
    { nome: 'Prefeitura de Boa Esperança — Turismo', url: 'https://turismo.boaesperanca.mg.gov.br/' },
  ],
  atualizadoEm: '2026-06-29',
};
