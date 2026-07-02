import type { Cidade } from '../../lib/types';

export const cidade: Cidade = {
  slug: 'campos-do-jordao-sp',
  nome: 'Campos do Jordão',
  uf: 'SP',
  estado: 'São Paulo',
  estadoSlug: 'sao-paulo',
  regiao: 'Sudeste',
  gentilico: 'jordanense',
  tipo: 'cidade',

  populacao: 46974,
  populacaoAno: 2022,
  idhm: 0.749,
  idhmClasse: 'alto',
  altitudeM: 1628,

  resumoEconomico:
    'Encravada na Serra da Mantiqueira, Campos do Jordão é o município de maior altitude do Brasil, apelidado de "Suíça Brasileira" por sua arquitetura de inspiração alpina. A cidade nasceu como estância climática no início do século XX, quando médicos sanitaristas passaram a indicar seu ar puro e seu clima frio para o tratamento da tuberculose, atraindo sanatórios, pensões e visitantes. Hoje a economia gira quase inteiramente em torno do turismo de montanha: hotelaria, gastronomia (fondue, chocolate, cervejas artesanais), comércio de decoração e artesanato, e o Festival de Inverno, um dos maiores festivais de música clássica do país, promovido pela Fundação Osesp desde 1954. A cidade também concentra grande volume de casas de segunda residência de moradores de alta renda da capital paulista e do Rio de Janeiro, o que sustenta um mercado imobiliário valorizado mesmo fora da alta temporada.',

  mercado:
    'O mercado de personal trainer em Campos do Jordão é moldado pelo perfil socioeconômico elevado da cidade: proprietários de casas de temporada, hóspedes de hotéis e pousadas de padrão superior e moradores fixos de bairros nobres buscam atendimento individualizado, muitas vezes dentro de condomínios, chalés ou na estrutura de hospedagem. Cresce também a procura por treino específico para trilha, corrida de montanha e ciclismo, dado o calendário de provas que a cidade recebe, e por programas que respeitem o frio e a altitude no planejamento dos treinos ao ar livre.',

  bairrosNobres: ['Alto da Boa Vista', 'Vila Capivari', 'Alto do Capivari', 'Vila Inglesa'],
  bairrosPopulares: ['Vila Abernéssia', 'Vila Jaguaribe', 'Descansópolis', 'Horto Florestal'],

  parques: [
    {
      nome: 'Parque Estadual de Campos do Jordão',
      descricao:
        'Um dos maiores parques estaduais paulistas, com extensas áreas de mata de araucárias e Mata Atlântica de altitude, trilhas sinalizadas, mirantes e o Horto Florestal — cenário natural para caminhada, trekking e treino funcional ao ar livre.',
    },
    {
      nome: 'Morro do Elefante',
      descricao:
        'Mirante a cerca de 1.800 m de altitude, acessível por trilha a partir da Vila Capivari ou por teleférico, com vista panorâmica da cidade; ponto clássico de caminhada e treino de subida para quem mora ou visita a região.',
    },
    {
      nome: 'Palácio Boa Vista e Museu Felícia Leirner',
      descricao:
        'Complexo cultural e paisagístico no Alto da Boa Vista, sede do Festival de Inverno, com amplas áreas verdes e jardins de esculturas que também funcionam como espaço de caminhada ao ar livre.',
    },
  ],
  ciclovias:
    'A cidade não tem uma malha extensa de ciclovias urbanas; o ciclismo local é puxado pelas subidas e descidas técnicas das estradas de montanha e pelas trilhas do Parque Estadual, atraindo grupos de ciclismo de estrada e mountain bike, além de eventos amadores que usam os percursos da Serra da Mantiqueira.',

  clima:
    'O clima é subtropical de altitude, o mais frio entre as cidades paulistas: os invernos são rigorosos para os padrões brasileiros, com geadas frequentes e temperaturas que podem se aproximar de 0 °C durante a madrugada, enquanto os verões são amenos, com máximas raramente muito altas.',
  climaTreino:
    'O frio intenso, especialmente no inverno e nas primeiras horas da manhã, exige aquecimento adequado, roupas em camadas e atenção a quedas bruscas de temperatura; a altitude elevada também torna o esforço cardiorrespiratório mais exigente para quem não está adaptado, o que reforça o valor de um acompanhamento profissional na progressão do treino.',

  mobilidade:
    'O acesso rodoviário se dá principalmente pela Rodovia Presidente Dutra até a região de Taubaté e Pindamonhangaba, de onde parte a Rodovia SP-123, que sobe a serra até a cidade. Dentro do município, o transporte é feito por carro, táxi e ônibus locais, com a Vila Capivari e a Vila Abernéssia concentrando boa parte dos deslocamentos a pé. A Estrada de Ferro Campos do Jordão opera um trem turístico histórico entre a cidade e o bairro de Emílio Ribas, e o Aeroporto Estadual Marechal Picanço recebe voos de aviação regional e executiva.',

  corridas: [
    {
      nome: 'WTR Campos do Jordão',
      descricao:
        'Etapa do circuito World Trail Races realizada em Campos do Jordão, com provas de trail run em diferentes distâncias (short, mid, long e ultra) pelas trilhas de montanha da região.',
    },
    {
      nome: 'KTR Campos do Jordão',
      descricao:
        'Etapa do circuito Kailash Trail Run sediada na cidade, com percursos técnicos de corrida de montanha em meio à Mata Atlântica de altitude da Serra da Mantiqueira.',
    },
    {
      nome: 'Mountain Do Campos do Jordão',
      descricao:
        'Prova de trail running com percursos de 5 km, 10 km e 20 km, que destaca o bioma de Mata Atlântica e a maior altitude habitada do país como parte do desafio aos corredores.',
    },
  ],
  culturaEsportiva:
    'A cultura esportiva de Campos do Jordão é fortemente ligada à montanha: trilhas no Parque Estadual, corrida de montanha com provas reconhecidas nacionalmente, ciclismo de estrada e mountain bike nas subidas da Serra da Mantiqueira, além de caminhadas e trekking praticados por moradores e pelo grande fluxo de turistas de fim de semana e alta temporada.',
  academias:
    'A oferta de academias e estúdios é compatível com o alto poder aquisitivo da cidade, com estruturas voltadas tanto ao morador fixo quanto ao público de segunda residência, complementadas por academias de hotéis e pousadas de padrão superior e por personal trainers que atendem em domicílio ou em chalés durante a temporada.',

  destaquesFitness: [
    'Maior altitude entre as cidades brasileiras (1.628 m), o que torna o treino ao ar livre mais frio e o esforço cardiorrespiratório mais exigente.',
    'Calendário de corrida de montanha com etapas de circuitos reconhecidos, como WTR, KTR e Mountain Do, pelas trilhas da Serra da Mantiqueira.',
    'Ciclismo de estrada e mountain bike em subidas técnicas, além de trekking no Parque Estadual de Campos do Jordão.',
    'Perfil socioeconômico elevado, com forte presença de segunda residência e demanda por personal trainer individualizado e atendimento domiciliar.',
  ],

  precos: {
    avulsaMin: 100,
    avulsaMax: 250,
    mensalMin: 500,
    mensalMax: 1400,
    onlineMin: 200,
    onlineMax: 500,
  },

  conclusao:
    'Cidade de montanha, fria e de alto padrão, Campos do Jordão reúne trilhas, provas de corrida de montanha e um público com forte poder aquisitivo. Um personal trainer ajuda a adaptar o treino ao frio e à altitude, aproveitando o Parque Estadual e o Morro do Elefante, e a manter a constância entre a rotina do morador fixo e o calendário intenso de temporada e eventos da cidade.',

  vizinhas: ['pindamonhangaba-sp', 'taubate-sp', 'sao-jose-dos-campos-sp'],

  fontes: [
    { nome: 'IBGE Cidades — Campos do Jordão', url: 'https://cidades.ibge.gov.br/brasil/sp/campos-do-jordao/panorama' },
    { nome: 'Prefeitura de Campos do Jordão', url: 'https://camposdojordao.sp.gov.br/' },
    { nome: 'Atlas Brasil — IDHM', url: 'https://www.atlasbrasil.org.br/' },
  ],
  atualizadoEm: '2026-07-02',
};
