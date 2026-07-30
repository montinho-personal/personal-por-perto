import type { Cidade } from '../../lib/types';

export const cidade: Cidade = {
  slug: 'anapolis-go',
  nome: 'Anápolis',
  uf: 'GO',
  estado: 'Goiás',
  estadoSlug: 'goias',
  regiao: 'Centro-Oeste',
  gentilico: 'anapolino',
  tipo: 'cidade',

  populacao: 398869,
  populacaoAno: 2022,
  idhm: 0.737,
  idhmClasse: 'alto',
  altitudeM: 1000,

  resumoEconomico:
    'Terceira maior cidade de Goiás, Anápolis é um importante polo industrial e logístico, sede do DAIA (o primeiro distrito agroindustrial planejado do estado) e do segundo maior polo farmoquímico da América Latina. Sua localização estratégica entre Goiânia e Brasília, no entroncamento das BR-153 e BR-060, com Porto Seco e a Ferrovia Norte-Sul, faz dela um centro logístico de peso.',

  mercado:
    'Cidade de renda industrial estável e classe média em crescimento, Anápolis tem mercado fitness aquecido, com academia ao ar livre moderna no Parque Ipiranga e um circuito municipal de corrida bem estabelecido. A altitude e o ar seco do inverno pedem atenção à hidratação.',

  bairrosNobres: ['Jundiaí', 'Anápolis City', 'Maracananzinho', 'Cidade Jardim'],
  bairrosPopulares: ['Vila Jaiara', 'Vila Fabril', 'Jardim das Américas', 'Bairro de Lourdes'],

  parques: [
    {
      nome: 'Parque Ipiranga',
      descricao:
        'Recebeu uma academia ao ar livre moderna, com aparelhos de musculação em aço inox, área de calistenia e app de treino — uma das mais completas do país.',
    },
    {
      nome: 'Parque Linear da Avenida Brasil Norte',
      descricao:
        'Com 7,5 km lineares, tem pista de caminhada, área de ginástica, ciclovia e quadras de areia.',
    },
    {
      nome: 'Academias ao ar livre dos bairros',
      descricao:
        'A cidade distribui equipamentos de ginástica em praças e parques, ampliando o acesso público ao treino.',
    },
  ],
  ciclovias:
    'Anápolis tem cerca de 18 km de ciclovias, com os maiores trechos na Avenida Brasil (cerca de 4,2 km) e no DAIA (cerca de 5,6 km).',

  clima:
    'O clima é tropical de altitude, com estação seca no inverno e a cidade a cerca de 1.000 m.',
  climaTreino:
    'A altitude e o ar seco do inverno pedem hidratação reforçada; em compensação, o estímulo cardiovascular é favorável e o calor é mais ameno que no restante do estado.',

  mobilidade:
    'A cidade fica no entroncamento das BR-153 e BR-060 (além da BR-414), posicionada entre Goiânia e Brasília, com forte vocação logística ligada ao DAIA e ao Porto Seco.',

  corridas: [
    {
      nome: 'Circuito Anapolino de Corrida de Rua',
      descricao:
        'Com oito etapas anuais de 5 km, sempre em um bairro diferente (incluindo etapa noturna e cross country), é o grande motor da corrida de rua na cidade.',
    },
    {
      nome: 'Provas e treinos no Parque Linear',
      descricao:
        'O corredor da Avenida Brasil Norte concentra treinos e provas, consolidando a corrida urbana local.',
    },
  ],
  culturaEsportiva:
    'A corrida de rua é institucionalizada pela prefeitura, com o Circuito Anapolino e seu calendário de oito etapas por ano, e o ciclismo urbano cresce com o plano de mobilidade e os quase 18 km de ciclovias.',
  academias:
    'A oferta reúne redes e academias locais, sustentadas pela renda industrial e farmacêutica da cidade, e é complementada pela moderna academia ao ar livre do Parque Ipiranga.',

  destaquesFitness: [
    'Renda industrial e farmacêutica, com público de bom poder de compra.',
    'Circuito municipal de corrida com oito etapas por ano.',
    'Academia ao ar livre moderna no Parque Ipiranga (musculação, calistenia e app).',
    'Cerca de 18 km de ciclovias e parque linear de 7,5 km.',
  ],

  precos: {
    avulsaMin: 65,
    avulsaMax: 150,
    mensalMin: 320,
    mensalMax: 880,
    onlineMin: 160,
    onlineMax: 410,
  },

  conclusao:
    'Polo industrial entre Goiânia e Brasília, Anápolis tem boa estrutura pública para treinar — do Parque Ipiranga ao parque linear — e um circuito de corrida ativo. Um personal trainer ajuda a aproveitar tudo isso com método, ajustando a hidratação ao clima de altitude.',

  vizinhas: ['goiania-go', 'aparecida-de-goiania-go', 'brasilia-df'],

  fontes: [
    { nome: 'IBGE Cidades — Anápolis', url: 'https://cidades.ibge.gov.br/brasil/go/anapolis/panorama' },
    { nome: 'Prefeitura de Anápolis', url: 'https://www.anapolis.go.gov.br/' },
    { nome: 'Atlas Brasil — IDHM', url: 'https://www.atlasbrasil.org.br/' },
  ],
  atualizadoEm: '2026-07-30',
  capaArte: {
    src: '/capas-cidade/anapolis-go.webp',
    w: 1200,
    h: 900,
    alt:
      'Personal trainer em Anápolis (GO) em arte que une treino em dupla e referências da cidade — o monumento do parque, os prédios do centro e o letreiro de Anápolis — Personal por Perto',
    legenda:
      'Treino personalizado em Anápolis: um plano feito para o seu corpo e a sua rotina, com acompanhamento profissional na cidade e região.',
  },
};
