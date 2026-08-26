import type { Cidade } from '../../lib/types';

export const cidade: Cidade = {
  slug: 'alphaville-sp',
  nome: 'Alphaville',
  uf: 'SP',
  estado: 'São Paulo',
  estadoSlug: 'sao-paulo',
  regiao: 'Sudeste',
  tipo: 'regiao',
  cidadeMae: 'barueri-sp',
  contexto: 'Região de Barueri e Santana de Parnaíba',

  resumoEconomico:
    'Alphaville é o mais conhecido bairro planejado de alto padrão do Brasil, dividido entre os municípios de Barueri e Santana de Parnaíba. Nasceu de uma gleba adquirida em 1973 pela incorporadora Albuquerque Takaoka, sobre terras da antiga Fazenda Tamboré, com a proposta inicial de um polo de empresas não poluentes — e completou 50 anos em 2023. Hoje, o Alphaville Industrial reúne milhares de empresas, e a região concentra sedes e operações de grandes companhias (a HP foi a pioneira, na Alameda Rio Negro). Eixos como a Alameda Rio Negro e a Avenida Copacabana formam o coração corporativo e comercial, com edifícios modernos e certificações ambientais.',

  mercado:
    'Poucos lugares no Brasil têm uma demanda por personal trainer tão característica quanto Alphaville. O público — executivos e famílias de alta renda morando em condomínios fechados com segurança 24h — valoriza privacidade, agenda flexível e atendimento exclusivo. Por isso, o serviço mais procurado é o personal que vai até o cliente: treina na academia do condomínio, na área de lazer ou dentro de casa. Estúdios boutique, clubes como o Alphaville Tênis Clube e redes como a Academia 24 Horas Premium completam a oferta, enquanto o polo empresarial abre espaço para programas de wellness corporativo.',

  bairrosNobres: [
    'Alphaville Residencial (condomínios numerados)',
    'Gênesis 1 e 2',
    'Aldeia da Serra',
    'Tamboré',
  ],
  bairrosPopulares: ['Aldeia da Serra', 'Tamboré', 'Centro de Barueri'],

  parques: [
    {
      nome: 'Parque Ecológico de Barueri',
      descricao:
        'O grande espaço verde de Alphaville, com um lago de cerca de 370 mil m² e pista asfaltada para corrida, caminhada e ciclismo, além de campos de futebol, quadras poliesportivas, trilhas e arena. É o ponto de encontro de quem treina ao ar livre na região.',
    },
    {
      nome: 'Ciclovia Via Parque',
      descricao:
        'Trecho viário fechado para lazer aos fins de semana e feriados (das 7h às 13h), ao longo da Avenida Dib Sauaia Neto, muito usado por corredores e ciclistas — a região registra cerca de 8 mil ciclistas por mês.',
    },
    {
      nome: 'Projeto Eco Golfe (Parque Ecológico)',
      descricao:
        'Campo de treinamento (driving range) de golfe inaugurado em 2023 dentro do Parque Ecológico, com atividades gratuitas nos fins de semana — uma opção de esporte ao ar livre pouco comum na grade pública.',
    },
  ],
  ciclovias:
    'Além da Via Parque, está prevista para 2026 uma nova ciclovia de cerca de 6 km ligando a Aldeia da Serra a Alphaville, passando pelo Parque Ecológico. Grupos de ciclismo e corrida são ativos na região, que tem na bike e na corrida parte do seu estilo de vida.',

  clima:
    'O clima é tropical de altitude, ameno: máximas costumam ficar entre 24 °C e 28 °C, com mínimas de inverno em torno de 17 °C e chuvas concentradas no verão.',
  climaTreino:
    'O clima agradável boa parte do ano favorece o treino ao ar livre no Parque Ecológico e na Via Parque. Como o trânsito nas avenidas principais é intenso nos horários de pico, treinar dentro do próprio condomínio costuma ser a opção que mais economiza tempo.',

  mobilidade:
    'O acesso é feito principalmente por carro, pela Rodovia Castello Branco, com eixos internos como as avenidas Yojiro Takaoka e Marcos Penteado de Ulhôa Rodrigues. Alphaville não tem estação de trem própria — a mais próxima é a estação Barueri, da CPTM (Linha 8-Diamante). Essa lógica de deslocamento por carro reforça o valor do personal que atende em domicílio e nos condomínios.',

  corridas: [
    {
      nome: 'Summer Run Barueri Alphaville',
      descricao:
        'Corrida de 6 km pelas vias de Alphaville (com opção de caminhada), com entrega de kits no Shopping Tamboré. Reflete a cena de corrida amadora ativa na região.',
    },
    {
      nome: 'Cultura de corrida e ciclismo no Parque Ecológico',
      descricao:
        'A pista do Parque Ecológico e a Ciclovia Via Parque concentram corredores e ciclistas durante a semana e, principalmente, nos fins de semana.',
    },
  ],
  culturaEsportiva:
    'Alphaville tem uma cultura forte de esporte e bem-estar, sustentada por alto poder aquisitivo, clubes com estrutura de tênis e golfe, condomínios com academia e quadras, e uma comunidade ativa de corrida e ciclismo. Treinar com acompanhamento profissional faz parte da rotina de boa parte dos moradores.',
  academias:
    'A oferta inclui academias como a 24 Horas Premium e a Gaviões, a Bodytech no Iguatemi Alphaville, unidades de Smart Fit e CrossFit, além de muitos estúdios boutique e do Alphaville Tênis Clube. Ainda assim, grande parte da demanda é atendida dentro dos próprios condomínios, por personais que treinam o aluno em casa.',
  academiasProximas: [
    { nome: 'Ironberg Alphaville', detalhe: 'centro de treinamento de grande porte na Estrada Aldeinha, no Alphaville Empresarial, com foco em musculação de alta performance' },
    { nome: 'NitroGym Tamboré', detalhe: 'unidade de cerca de 3 mil m² no Shopping Tamboré, com musculação, avaliação física e sauna' },
    { nome: 'Arena 18', detalhe: 'na Rua Mário Quintana: esportes de areia (beach tennis, vôlei e futevôlei) somados a musculação e treino funcional' },
    { nome: 'Bodytech Iguatemi Alphaville', detalhe: 'cerca de 1.000 m² no piso lazer do shopping Iguatemi, na Al. Rio Negro' },
    { nome: 'Academia 24h Premium', detalhe: 'na Alameda Grajaú, no Alphaville Centro, com funcionamento 24 horas e grade ampla de aulas' },
    { nome: 'Academia Gaviões Alphaville', detalhe: 'unidade da rede paulista no Alphaville Industrial, com funcionamento 24 horas' },
    { nome: 'Smart Fit', detalhe: 'rede de baixo custo com unidades em Alphaville e no entorno' },
    { nome: 'Alphaville Tênis Clube', detalhe: 'clube tradicional com estrutura esportiva completa' },
    { nome: 'Estúdios boutique e boxes de CrossFit', detalhe: 'espalhados pelo centro comercial e arredores' },
  ],

  destaquesFitness: [
    'Demanda de alto padrão por personal em condomínio e atendimento domiciliar.',
    'Parque Ecológico com lago e pista asfaltada para corrida, caminhada e ciclismo.',
    'Clubes com tênis e golfe e estúdios boutique de treino personalizado.',
    'Polo empresarial que abre espaço para programas de wellness corporativo.',
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
    'Em Alphaville, contratar um personal trainer é, na maioria das vezes, levar o treino para dentro de casa ou do condomínio — com a privacidade, a flexibilidade e a exigência de qualidade que o público da região espera. Com parques bem estruturados, clubes completos e uma comunidade ativa de corrida e ciclismo, o ambiente joga a favor de quem decide treinar com método e acompanhamento. Alphaville é também a base presencial do Montinho Personal, o profissional destacado pelo portal, que atende a região em domicílio e em condomínios além do formato online.',

  faqsExtra: [
    {
      pergunta: 'O personal trainer atende dentro dos condomínios de Alphaville?',
      resposta:
        'Sim — em Alphaville esse é o formato mais comum. O atendimento acontece na academia do próprio residencial, na área de lazer ou dentro de casa, nos condomínios da região, como os Alphaville Residencial (do 1 ao 12), Gênesis 1 e 2 e Melville. O Montinho Personal, destacado pelo portal, tem base na região e atende presencialmente nesses formatos, além do acompanhamento online.',
    },
    {
      pergunta: 'Em quais academias de Alphaville dá para treinar com acompanhamento de personal?',
      resposta:
        'Além das academias dos próprios condomínios, a região tem unidades como a 24 Horas Premium, a Gaviões, a Bodytech do Iguatemi Alphaville, Smart Fit, boxes de CrossFit e diversos estúdios boutique. Cada academia tem a própria política para personal externo, então vale confirmar as condições de acesso antes de fechar — ou optar pelo treino na estrutura do condomínio, que elimina essa etapa.',
    },
    {
      pergunta: 'Existe personal em Alphaville para quem tem dores ou limitações?',
      resposta:
        'Sim. O Montinho Personal, destacado pelo portal na região, tem cursos voltados ao treinamento de pessoas com dores e limitações musculoesqueléticas e já vivenciou dores comuns da musculação na própria trajetória — o que ajuda a compreender as dificuldades de quem treina com desconforto. O treino é individualizado e progressivo, com foco em segurança; casos clínicos devem sempre ser acompanhados também por médico ou fisioterapeuta, e treino não substitui tratamento.',
    },
    {
      pergunta: 'Qual é a área de atendimento presencial a partir de Alphaville?',
      resposta:
        'A base em Alphaville coloca os núcleos vizinhos — Tamboré, Aldeia da Serra, o centro de Barueri e Santana de Parnaíba — a poucos minutos de carro em condições normais de trânsito, o que permite atendimento presencial em toda a região. Para quem mora fora desse raio, o acompanhamento online cobre qualquer cidade do Brasil.',
    },
  ],

  vizinhas: ['barueri-sp', 'tambore-sp', 'santana-de-parnaiba-sp', 'osasco-sp'],

  fontes: [
    { nome: 'Prefeitura de Barueri', url: 'https://www.barueri.sp.gov.br/' },
    { nome: 'Prefeitura de Santana de Parnaíba', url: 'https://www.santanadeparnaiba.sp.gov.br/' },
    { nome: 'IBGE Cidades — Barueri', url: 'https://cidades.ibge.gov.br/brasil/sp/barueri/panorama' },
  ],
  capaArte: {
    src: '/capas-cidade/alphaville-sp.webp',
    w: 1200,
    h: 675,
    alt:
      'Montinho Personal, personal trainer com base em Alphaville (SP), de braços cruzados com os edifícios corporativos da região ao fundo — Personal por Perto',
    legenda:
      'Treino personalizado em Alphaville com o Montinho Personal: acompanhamento próximo, exclusivo e feito para o seu objetivo.',
  },
  atualizadoEm: '2026-08-26',
};
