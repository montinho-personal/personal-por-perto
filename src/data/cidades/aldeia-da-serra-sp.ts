import type { Cidade } from '../../lib/types';

export const cidade: Cidade = {
  slug: 'aldeia-da-serra-sp',
  nome: 'Aldeia da Serra',
  uf: 'SP',
  estado: 'São Paulo',
  estadoSlug: 'sao-paulo',
  regiao: 'Sudeste',
  tipo: 'regiao',
  cidadeMae: 'barueri-sp',
  contexto: 'Região de Barueri e Santana de Parnaíba',

  resumoEconomico:
    'A Aldeia da Serra é uma região residencial planejada de alto padrão da Grande São Paulo, dividida entre os municípios de Barueri e Santana de Parnaíba e vizinha de Alphaville e do Tamboré. Idealizada nos anos 1980 pelo engenheiro Yojiro Takaoka com a proposta de unir vida urbana e natureza, ocupa uma gleba de cerca de 4,5 milhões de m² em terreno elevado, com altitude em torno de 1.000 m. O conjunto reúne seis condomínios residenciais fechados — entre eles Morada dos Pássaros, Morada dos Lagos, Morada das Flores e Morada dos Pinheiros — e centros comerciais que dão à região infraestrutura própria de supermercados, escolas, restaurantes e serviços. Ruas arborizadas, lagos e nascentes preservadas marcam a paisagem, o que faz da Aldeia um endereço de moradia tranquila a poucos minutos do polo corporativo de Alphaville.',

  mercado:
    'O perfil de demanda por personal trainer na Aldeia da Serra é o típico de região de altíssimo padrão: famílias de alta renda morando em condomínios fechados com segurança 24h, que valorizam privacidade, agenda flexível e atendimento exclusivo. Por isso, o serviço mais procurado é o personal que vai até o cliente — treina na academia do próprio condomínio, na área de lazer ou dentro de casa. As ruas arborizadas, os lagos internos e o clima ameno também favorecem o treino ao ar livre, e a proximidade com Alphaville e Tamboré amplia o acesso a estúdios boutique, clubes e academias para quem prefere se deslocar.',

  bairrosNobres: [
    'Morada dos Pássaros',
    'Morada dos Lagos',
    'Morada das Flores',
    'Morada dos Pinheiros',
  ],
  bairrosPopulares: ['Vila Nilva', 'Centro de Barueri', 'Centro de Santana de Parnaíba'],

  parques: [
    {
      nome: 'Áreas verdes e lagos da Aldeia',
      descricao:
        'A região foi planejada com forte preservação ambiental: ruas arborizadas, áreas verdes, nascentes e lagos internos integram o dia a dia dos moradores e servem de cenário para caminhadas, corrida leve e treino funcional ao ar livre dentro dos condomínios.',
    },
    {
      nome: 'Kartódromo Internacional Aldeia da Serra',
      descricao:
        'Localizado na Estrada Dr. Yojiro Takaoka, é um dos equipamentos de lazer e esporte de motor mais conhecidos da região, com circuito oficial iluminado e estrutura para corridas amadoras, eventos corporativos e treinamento — um ponto de referência esportivo da Aldeia.',
    },
  ],
  ciclovias:
    'A Prefeitura de Barueri projeta uma ciclovia de cerca de 6 km ligando a Aldeia da Serra a Alphaville, oferecendo um trajeto mais seguro para ciclistas entre as duas regiões. A bicicleta e a corrida fazem parte do estilo de vida local, apoiadas pelas ruas arborizadas e pelo relevo de serra.',

  clima:
    'Por estar em terreno elevado, com altitude em torno de 1.000 m, a Aldeia da Serra tem clima de serra, mais ameno e fresco que o centro de São Paulo. As manhãs de inverno costumam ter neblina e temperaturas baixas, enquanto os verões são mais agradáveis; as chuvas se concentram nos meses quentes.',
  climaTreino:
    'O clima fresco de serra favorece o treino ao ar livre boa parte do ano, especialmente nas manhãs e no fim da tarde, dentro das áreas verdes e ruas arborizadas dos condomínios. Nos dias mais frios ou chuvosos de inverno, a academia do próprio condomínio garante a continuidade da rotina sem deslocamento.',

  mobilidade:
    'O acesso é feito principalmente por carro, pela Rodovia Castello Branco (na altura do km 32) e pela Estrada Dr. Yojiro Takaoka, principal via de ligação interna da região — alargada e remodelada pela Prefeitura de Barueri para dar mais segurança a motoristas, ciclistas e pedestres. A Aldeia da Serra não tem estação de trem própria: a mais próxima é a estação Barueri, da CPTM (Linha 8-Diamante). Essa lógica de deslocamento por carro reforça o valor do personal que atende em domicílio e nos condomínios.',

  corridas: [
    {
      nome: 'Corrida e caminhada nas ruas dos condomínios',
      descricao:
        'As ruas arborizadas, com pouco tráfego e relevo de serra, são o principal ambiente de corrida e caminhada dos moradores, que aproveitam o clima fresco e a segurança interna dos condomínios para treinar.',
    },
    {
      nome: 'Eventos esportivos da região de Alphaville',
      descricao:
        'A proximidade com Alphaville e Barueri dá acesso às provas de rua e à cena ativa de corrida e ciclismo da região, que tem no Parque Ecológico de Barueri e nas vias de Alphaville seus principais palcos.',
    },
  ],
  culturaEsportiva:
    'A Aldeia da Serra tem uma cultura de bem-estar sustentada por alto poder aquisitivo, contato constante com a natureza e condomínios com academia e quadras. Caminhar e correr nas ruas arborizadas, pedalar e treinar com acompanhamento profissional fazem parte da rotina de boa parte dos moradores, que somam ainda a oferta esportiva e os clubes da vizinha Alphaville.',
  academias:
    'A região conta com academias e estúdios em seus centros comerciais e nos próprios condomínios, e tem na proximidade com Alphaville e Tamboré acesso a redes maiores, estúdios boutique e clubes. Ainda assim, grande parte da demanda é atendida dentro dos condomínios, por personais que treinam o aluno em casa ou na academia do residencial.',
  academiasProximas: [
    { nome: 'Scelta Academia', detalhe: 'na Av. dos Pássaros, uma das mais completas da Aldeia' },
    { nome: 'The One Aldeia da Serra', detalhe: 'na Av. da Barra, no trecho parnaibano da região' },
    { nome: 'Area Fitness', detalhe: 'academia local na Av. dos Patos' },
    { nome: 'Studio Fight Aldeia', detalhe: 'artes marciais para crianças e adultos' },
  ],

  destaquesFitness: [
    'Demanda de alto padrão por personal em condomínio e atendimento domiciliar.',
    'Ruas arborizadas, áreas verdes e lagos que favorecem o treino ao ar livre.',
    'Clima fresco de serra agradável para corrida e caminhada boa parte do ano.',
    'Proximidade com Alphaville e Tamboré para clubes, estúdios e provas de rua.',
  ],

  precos: {
    avulsaMin: 100,
    avulsaMax: 250,
    mensalMin: 500,
    mensalMax: 1500,
    onlineMin: 220,
    onlineMax: 550,
  },

  conclusao:
    'Na Aldeia da Serra, contratar um personal trainer é, na maioria das vezes, levar o treino para dentro de casa ou do condomínio — com a privacidade, a flexibilidade e a exigência de qualidade que o público da região espera. Entre ruas arborizadas, lagos e clima fresco de serra, e com a estrutura esportiva de Alphaville e Tamboré ao lado, o ambiente joga a favor de quem decide treinar com método e acompanhamento.',

  faqsExtra: [
    {
      pergunta: 'O personal atende dentro dos residenciais da Aldeia da Serra?',
      resposta:
        'Sim — nas Moradas da Aldeia (dos Pássaros, dos Lagos, das Flores e dos Pinheiros), o formato mais procurado é o atendimento na academia do próprio condomínio, na área de lazer ou em casa. A região está na área de cobertura presencial do Montinho Personal, o profissional destacado pelo portal, que tem base na vizinha Alphaville e chega à Aldeia pela Estrada Dr. Yojiro Takaoka em poucos minutos.',
    },
    {
      pergunta: 'Dá para treinar ao ar livre com personal dentro da Aldeia da Serra?',
      resposta:
        'Dá, e o cenário ajuda: as ruas arborizadas, os lagos e o clima fresco de serra tornam a caminhada, a corrida leve e o treino funcional ao ar livre opções agradáveis boa parte do ano. Nos dias frios ou chuvosos, a academia do condomínio garante a continuidade — o personal adapta o plano ao espaço disponível.',
    },
    {
      pergunta: 'Quem tem dores ou limitações consegue treinar com acompanhamento na Aldeia?',
      resposta:
        'Consegue. O Montinho Personal, destacado pelo portal na região, tem cursos voltados ao treino de pessoas com dores e limitações musculoesqueléticas e a vivência prática de quem já enfrentou dores comuns da musculação. O trabalho combina avaliação, progressão gradual e execução segura — sem promessas de cura, e sempre em conjunto com médico ou fisioterapeuta quando existe um quadro clínico em tratamento.',
    },
  ],

  vizinhas: ['alphaville-sp', 'barueri-sp', 'santana-de-parnaiba-sp', 'tambore-sp'],

  fontes: [
    { nome: 'Prefeitura de Barueri', url: 'https://www.barueri.sp.gov.br/' },
    {
      nome: 'Prefeitura de Santana de Parnaíba',
      url: 'https://www.santanadeparnaiba.sp.gov.br/',
    },
    {
      nome: 'IBGE Cidades — Barueri',
      url: 'https://cidades.ibge.gov.br/brasil/sp/barueri/panorama',
    },
  ],
  atualizadoEm: '2026-07-11',
};
