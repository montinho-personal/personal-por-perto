import type { Cidade } from '../../lib/types';

export const cidade: Cidade = {
  slug: 'tres-coroas-rs',
  nome: 'Três Coroas',
  uf: 'RS',
  estado: 'Rio Grande do Sul',
  estadoSlug: 'rio-grande-do-sul',
  regiao: 'Sul',
  gentilico: 'três-coroense',
  tipo: 'cidade',

  populacao: 24425,
  populacaoAno: 2022,
  idhm: 0.71,
  idhmClasse: 'alto',
  altitudeM: 45,

  resumoEconomico:
    'No vale do rio Paranhana, na encosta da serra gaúcha, Três Coroas equilibra três vocações: o polo calçadista — são cerca de 65 empresas produzindo mais de 8 milhões de pares por ano —, o turismo de aventura das corredeiras do Paranhana e o Khadro Ling, maior templo budista tibetano da América Latina, que projeta a cidade no mapa espiritual do país.',

  mercado:
    'A renda industrial estável e o fluxo turístico criam um mercado de bem-estar acima do porte da cidade: academias e personal trainers atendem operários, empresários e o público do turismo ativo — e o rafting no Paranhana faz do condicionamento físico um assunto local.',

  bairrosNobres: ['Centro', 'Vila Nova', 'Águas Brancas', 'Sander'],
  bairrosPopulares: ['Linha 28', 'Vila Petry', 'Bela Vista', 'Moinho'],

  parques: [
    {
      nome: 'Rio Paranhana e suas corredeiras',
      descricao:
        'O rio que corta a cidade é referência nacional de rafting, com percursos de 5 km e 8 km entre corredeiras de água clara — e as margens rendem trilhas e treinos ao ar livre.',
    },
    {
      nome: 'Templo Budista Khadro Ling',
      descricao:
        'No alto de um morro, o maior templo budista tibetano da América Latina, fundado em 1995, atrai visitantes do país inteiro — e a subida até ele virou caminhada clássica de fim de semana.',
    },
    {
      nome: 'Praças centrais e encostas da serra',
      descricao:
        'O centro compacto e as encostas do vale oferecem o circuito diário de caminhada, com o desnível da serra como resistência natural.',
    },
  ],
  ciclovias:
    'O pedal é forte nas estradas do vale do Paranhana e nas rotas da Rota Romântica em direção a Gramado; a malha cicloviária urbana ainda é limitada.',

  clima:
    'Clima subtropical úmido de vale de serra: verões quentes, invernos frios e chuvas distribuídas o ano todo — com o rio como termômetro da cidade.',
  climaTreino:
    'No verão, treina-se nas pontas do dia ou na água; no inverno, o meio do dia é a melhor janela, com a academia coberta segurando a constância.',

  mobilidade:
    'Pela ERS-115, Três Coroas fica a cerca de 20 minutos de Gramado e conecta o vale do Paranhana à serra turística — o fluxo de visitantes passa pela cidade o ano inteiro.',

  corridas: [
    {
      nome: 'Provas do vale do Paranhana e da serra',
      descricao:
        'O calendário regional de corridas circula entre as cidades do vale e da serra gaúcha, com percursos de 5 km e 10 km e trilhas de montanha.',
    },
  ],
  culturaEsportiva:
    'Poucas cidades do porte reúnem tanta cultura de movimento: o rafting e o caiaque no Paranhana, as caminhadas ao templo, o vôlei e o futsal das sociedades — herança alemã que se mantém viva.',
  academias:
    'A oferta reúne academias de musculação e personal trainers no centro e nos bairros, com o turismo ativo somando demanda por preparação física e condicionamento.',

  destaquesFitness: [
    'Rafting no rio Paranhana, referência nacional do esporte.',
    'Subida ao templo Khadro Ling como caminhada com recompensa no topo.',
    'Polo calçadista com renda estável que sustenta o mercado de treino.',
    'Rota Romântica e serra gaúcha a minutos, com trilhas e pedais.',
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
    'Entre as corredeiras do Paranhana, o templo no alto do morro e a indústria que calça o país, Três Coroas vive em movimento. Um personal trainer transforma essa energia em treino estruturado — do condicionamento para o rafting à constância da semana comum.',

  vizinhas: ['gramado-rs', 'dois-irmaos-rs', 'novo-hamburgo-rs'],

  fontes: [
    { nome: 'IBGE Cidades — Três Coroas', url: 'https://cidades.ibge.gov.br/brasil/rs/tres-coroas/panorama' },
    { nome: 'Prefeitura de Três Coroas', url: 'https://www.trescoroas.rs.gov.br/' },
    { nome: 'Visite Três Coroas', url: 'https://www.visitetrescoroas.com.br/' },
  ],
  atualizadoEm: '2026-08-04',
};
