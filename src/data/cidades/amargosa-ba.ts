import type { Cidade } from '../../lib/types';

export const cidade: Cidade = {
  slug: 'amargosa-ba',
  nome: 'Amargosa',
  uf: 'BA',
  estado: 'Bahia',
  estadoSlug: 'bahia',
  regiao: 'Nordeste',
  gentilico: 'amargosense',
  tipo: 'cidade',

  populacao: 36522,
  populacaoAno: 2022,
  idhm: 0.625,
  idhmClasse: 'médio',
  altitudeM: 400,

  resumoEconomico:
    'Polo do Vale do Jiquiriçá, Amargosa cresceu com o café que desceu a serra no século XIX e hoje vive de serviços, comércio regional e administração pública, com a agropecuária completando a base. O São João de Amargosa, um dos mais tradicionais da Bahia, transforma a cidade em destino turístico em junho — e o clima de altitude, mais ameno que o do Recôncavo, é marca registrada o ano inteiro.',

  mercado:
    'Como centro de serviços do vale, a cidade atrai moradores dos municípios vizinhos para comércio, saúde e educação — a Universidade Federal do Recôncavo da Bahia mantém campus na cidade, somando um público jovem à demanda por treino. Academias e personal trainers se concentram no centro, e o clima ameno favorece o treino ao ar livre em boa parte do ano.',

  bairrosNobres: ['Centro', 'Bela Vista', 'Alto do Cruzeiro', 'Morada Real'],
  bairrosPopulares: ['Loteamento Alto da Ventura', 'Campo Verde', 'Sucupira', 'Corta Mão'],

  parques: [
    {
      nome: 'Praça do Bosque e centro histórico',
      descricao:
        'O centro de Amargosa, de casario preservado e praças arborizadas, concentra a caminhada diária dos moradores e a vida social da cidade.',
    },
    {
      nome: 'Serras do entorno',
      descricao:
        'Os morros e serras que cercam a cidade rendem trilhas, caminhadas com desnível e mirantes naturais sobre o Vale do Jiquiriçá.',
    },
    {
      nome: 'Zona rural do vale',
      descricao:
        'As estradas rurais entre cafezais e roças de banana são cenário de pedais e caminhadas longas, com o verde do vale como paisagem.',
    },
  ],
  ciclovias:
    'O pedal acontece nas estradas rurais e nas rotas entre os municípios do vale; a malha cicloviária urbana ainda é limitada e sem extensão oficial divulgada.',

  clima:
    'Clima de transição entre o úmido e o semiárido, amenizado pela altitude: temperaturas que vão de cerca de 15°C no inverno a 26°C nos meses mais quentes.',
  climaTreino:
    'O clima ameno de altitude permite treinar ao ar livre o ano quase todo; nos meses mais quentes, manhãs e fins de tarde seguem sendo as melhores janelas.',

  mobilidade:
    'Amargosa se conecta pela BR-420 e rodovias estaduais a Santo Antônio de Jesus — o grande polo comercial vizinho — e ao Recôncavo, funcionando como porta de entrada do Vale do Jiquiriçá.',

  corridas: [
    {
      nome: 'Provas regionais do Recôncavo e do vale',
      descricao:
        'Corridas de rua circulam pelas cidades da região ao longo do ano, com percursos de 5 km e 10 km e participação crescente de grupos de treino locais.',
    },
  ],
  culturaEsportiva:
    'A cidade é famosa pelo São João, mas a vida ativa vai além de junho: caminhada nas praças e serras, pedal no vale e um movimento crescente de academias e grupos de corrida.',
  academias:
    'A oferta reúne academias de musculação e personal trainers no centro e nos bairros, com o campus da UFRB somando público jovem à demanda local.',

  destaquesFitness: [
    'Clima ameno de altitude, raro na região, favorável ao treino ao ar livre.',
    'Serras e mirantes do Vale do Jiquiriçá como cenário de trilhas.',
    'Campus da UFRB, que soma um público universitário à demanda por treino.',
    'São João tradicional que movimenta a cidade — e a preparação física antes dele.',
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
    'Com clima de serra, casario histórico e o São João mais famoso do Vale do Jiquiriçá, Amargosa une qualidade de vida e tradição. Um personal trainer ajuda a transformar as praças, as serras e a rotina do vale em resultado — com método e constância.',

  vizinhas: ['santo-antonio-de-jesus-ba', 'valenca-ba', 'jequie-ba'],

  fontes: [
    { nome: 'IBGE Cidades — Amargosa', url: 'https://cidades.ibge.gov.br/brasil/ba/amargosa/panorama' },
    { nome: 'Prefeitura de Amargosa', url: 'https://amargosa.ba.gov.br/' },
    { nome: 'Atlas Brasil — IDHM', url: 'https://www.atlasbrasil.org.br/' },
  ],
  atualizadoEm: '2026-08-03',
};
