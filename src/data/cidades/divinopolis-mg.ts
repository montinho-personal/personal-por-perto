import type { Cidade } from '../../lib/types';

export const cidade: Cidade = {
  slug: 'divinopolis-mg',
  nome: 'Divinópolis',
  uf: 'MG',
  estado: 'Minas Gerais',
  estadoSlug: 'minas-gerais',
  regiao: 'Sudeste',
  gentilico: 'divinopolitano',
  tipo: 'cidade',

  populacao: 231091,
  populacaoAno: 2022,
  idhm: 0.764,
  idhmClasse: 'alto',
  altitudeM: 712,

  resumoEconomico:
    'Principal cidade do centro-oeste mineiro e a maior da região, Divinópolis tem economia diversificada: é polo do aço e da metalurgia (ferro-gusa e aço) e o maior polo confeccionista de Minas — a "Capital da Moda", com milhares de confecções e empresas do setor.',

  mercado:
    'Cidade média com infraestrutura completa e renda industrial, Divinópolis tem demanda fitness consolidada; a prefeitura mantém ampla rede de academias ao ar livre em praças, sinal de uma cultura popular de atividade física bem estabelecida.',

  bairrosNobres: ['Bom Pastor', 'Sidil', 'Belvedere', 'Esplanada'],
  bairrosPopulares: ['Porto Velho', 'São José', 'Planalto', 'Interlagos'],

  parques: [
    {
      nome: 'Parque da Ilha',
      descricao:
        'Tem academia ao ar livre e área de uso familiar para atividade física, um dos principais espaços públicos da cidade.',
    },
    {
      nome: 'Praça da Pedra (Nossa Senhora das Graças)',
      descricao:
        'Conta com academia ao ar livre instalada, ponto de caminhada e treino no dia a dia dos moradores.',
    },
    {
      nome: 'Praça Esportiva Wilson Vicente do Couto',
      descricao:
        'Espaço esportivo no Jardinópolis; a cidade também interdita a Rua Pitangui para a prática de corrida e caminhada.',
    },
  ],
  ciclovias:
    'A extensão da malha cicloviária ainda não é divulgada em fonte oficial; a cidade investe mais em academias ao ar livre e ruas de lazer.',

  clima:
    'O clima é tropical de altitude, com verões quentes e invernos mais secos.',
  climaTreino:
    'O inverno seco e ameno é ótimo para o treino ao ar livre; o verão pede atenção ao horário e à hidratação.',

  mobilidade:
    'Divinópolis é acessada pelas rodovias BR-494 e BR-262, conectando-se a Belo Horizonte (cerca de 1h30) e ao restante de Minas.',

  corridas: [
    {
      nome: 'Corrida de Pentecostes',
      descricao:
        'Uma das mais tradicionais corridas de rua do centro-oeste mineiro, reunindo mais de 1.500 atletas.',
    },
    {
      nome: 'Corrida Rústica da Polícia Militar',
      descricao:
        'Prova rústica tradicional no calendário esportivo municipal, ao lado das corridas das Indústrias e dos Bairros.',
    },
  ],
  culturaEsportiva:
    'Divinópolis tem calendário ativo de corridas de rua (Pentecostes, das Indústrias, dos Bairros) organizado pelo poder público, além de forte adesão popular às academias ao ar livre em praças.',
  academias:
    'A oferta reúne academias e estúdios com a renda industrial da cidade, e se destaca pela extensa rede municipal de academias ao ar livre instaladas em praças e parques.',

  destaquesFitness: [
    'Rede municipal extensa de academias ao ar livre em praças.',
    'Corrida de Pentecostes como evento-âncora regional.',
    'Calendário variado de corridas (PM, indústrias, bairros).',
    'Clima de altitude favorável ao treino ao ar livre no inverno.',
  ],

  precos: {
    avulsaMin: 65,
    avulsaMax: 150,
    mensalMin: 330,
    mensalMax: 900,
    onlineMin: 160,
    onlineMax: 420,
  },

  conclusao:
    'Capital da Moda e polo do aço no centro-oeste mineiro, Divinópolis tem ampla rede de academias ao ar livre e calendário de corridas ativo. Um personal trainer ajuda a aproveitar o Parque da Ilha e as praças com método, ajustando os horários ao clima de altitude.',

  vizinhas: ['belo-horizonte-mg', 'contagem-mg'],

  capaArte: {
    src: '/capas-cidade/divinopolis-mg.webp',
    vertical: true,
    w: 1000,
    h: 1250,
    alt: 'Personal trainer em Divinópolis (MG) em arte com a catedral, as palmeiras da praça central e o skyline da cidade, com o treino em primeiro plano — Personal por Perto',
    legenda: 'Treino personalizado em Divinópolis: foco, disciplina e resultados no centro-oeste mineiro.',
  },
  fontes: [
    { nome: 'IBGE Cidades — Divinópolis', url: 'https://cidades.ibge.gov.br/brasil/mg/divinopolis/panorama' },
    { nome: 'Prefeitura de Divinópolis', url: 'https://www.divinopolis.mg.gov.br/' },
    { nome: 'Atlas Brasil — IDHM', url: 'https://www.atlasbrasil.org.br/' },
  ],
  atualizadoEm: '2026-09-02',
};
