import type { Cidade } from '../../lib/types';

export const cidade: Cidade = {
  slug: 'itaporanga-d-ajuda-se',
  nome: "Itaporanga d'Ajuda",
  uf: 'SE',
  estado: 'Sergipe',
  estadoSlug: 'sergipe',
  regiao: 'Nordeste',
  gentilico: 'itaporanguense',
  tipo: 'cidade',

  populacao: 34411,
  populacaoAno: 2022,
  idhm: 0.561,
  idhmClasse: 'baixo',
  altitudeM: 30,

  resumoEconomico:
    "Na área de influência direta de Aracaju, a cerca de 30 km da capital, Itaporanga d'Ajuda combina agropecuária, comércio local e um litoral que virou vetor de crescimento: a praia da Caueira, no encontro do rio Vaza-Barris com o mar, atrai veranistas e novos condomínios ao litoral sul sergipano.",

  mercado:
    'O mercado de treino se divide entre a sede — com academias de bairro e profissionais locais — e o litoral, onde o verão multiplica a demanda por treino ao ar livre. A proximidade de Aracaju amplia as opções: muitos moradores combinam serviços da capital com a rotina da cidade.',

  bairrosNobres: ['Centro', 'Alto da Boa Vista', 'Caueira', 'Povoado Água Boa'],
  bairrosPopulares: ['Conjunto Nova Itaporanga', 'Sapé', 'Rita Cacete', 'Caibros'],

  parques: [
    {
      nome: 'Praia da Caueira',
      descricao:
        'No litoral sul do município, a Caueira é uma das praias mais procuradas da região: faixa larga de areia no encontro do Vaza-Barris com o oceano, cenário de caminhadas, corrida na areia e esportes de praia.',
    },
    {
      nome: 'Praças da sede',
      descricao:
        'As praças do centro concentram a caminhada diária e a vida social da cidade, no ritmo do interior sergipano.',
    },
    {
      nome: 'Margens do Vaza-Barris',
      descricao:
        'O estuário do rio, entre manguezais e coqueirais, rende trilhas, remo e o contato com a natureza que marca o litoral sul de Sergipe.',
    },
  ],
  ciclovias:
    'O pedal acontece na rodovia dos Náufragos em direção ao litoral e nas estradas rurais; a malha cicloviária urbana é limitada e sem extensão oficial divulgada.',

  clima:
    'Clima tropical litorâneo: quente o ano todo, com chuvas concentradas no outono-inverno e brisa constante na faixa costeira.',
  climaTreino:
    'Treina-se nas pontas do dia: amanhecer e fim de tarde, na sede ou na praia; no meio do dia, a sombra dos coqueirais e os espaços cobertos são o refúgio.',

  mobilidade:
    "Pela rodovia dos Náufragos e pela BR-101, Itaporanga d'Ajuda se conecta em cerca de meia hora a Aracaju — a capital funciona como extensão natural de serviços, estudo e trabalho.",

  corridas: [
    {
      nome: 'Provas da Grande Aracaju',
      descricao:
        'O calendário de corridas da capital, a meia hora de casa, oferece provas de 5 km e 10 km o ano inteiro — e os treinos na areia da Caueira são a preparação perfeita.',
    },
  ],
  culturaEsportiva:
    'A vida ativa se divide entre o futebol de bairro na sede e a cultura de praia do litoral, com o verão da Caueira como ápice esportivo do ano.',
  academias:
    'A oferta reúne academias de musculação e personal trainers na sede, com o litoral somando treinos ao ar livre — e a estrutura de Aracaju a meia hora de distância.',

  academiasProximas: [
    { nome: 'Academia Transforms' },
    { nome: 'Cria Fitness', detalhe: 'na Caueira' },
    { nome: 'X-ploud Academia', detalhe: 'na Rua Hermílio Carvalho' },
  ],
  academiasVerificadasEm: '2026-08-27',

  destaquesFitness: [
    'Praia da Caueira: areia larga e mar aberto para treinos ao ar livre.',
    'Estuário do Vaza-Barris, entre manguezais e coqueirais.',
    'Aracaju a cerca de 30 km, com provas de rua e serviços da capital.',
    'Crescimento do litoral sul, que expande o mercado local de bem-estar.',
  ],

  precos: {
    avulsaMin: 45,
    avulsaMax: 110,
    mensalMin: 240,
    mensalMax: 660,
    onlineMin: 110,
    onlineMax: 340,
  },

  conclusao:
    "Entre a sede interiorana e a praia da Caueira, Itaporanga d'Ajuda vive a expansão do litoral sul sergipano com Aracaju logo ali. Um personal trainer ajuda a transformar areia, estuário e rotina de cidade pequena em treino com método — o ano inteiro, não só no verão.",

  vizinhas: ['aracaju-se', 'estancia-se'],

  capaArte: {
    src: '/capas-cidade/itaporanga-d-ajuda-se.webp',
    w: 1200,
    h: 675,
    alt: 'Personal trainer em Itaporanga d\'Ajuda (SE) em arte que reúne a Praia da Caueira, o letreiro da cidade e a igreja histórica — Personal por Perto',
    legenda: 'Treino personalizado em Itaporanga d\'Ajuda: um plano feito para o seu corpo e a sua rotina, do centro à Caueira.',
  },
  fontes: [
    { nome: "IBGE Cidades — Itaporanga d'Ajuda", url: 'https://cidades.ibge.gov.br/brasil/se/itaporanga-dajuda/panorama' },
    { nome: "Prefeitura de Itaporanga d'Ajuda", url: 'https://itaporanga.se.gov.br/' },
    { nome: 'Atlas Brasil — IDHM', url: 'https://www.atlasbrasil.org.br/' },
  ],
  atualizadoEm: '2026-08-27',
};
