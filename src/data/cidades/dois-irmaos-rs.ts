import type { Cidade } from '../../lib/types';

export const cidade: Cidade = {
  slug: 'dois-irmaos-rs',
  nome: 'Dois Irmãos',
  uf: 'RS',
  estado: 'Rio Grande do Sul',
  estadoSlug: 'rio-grande-do-sul',
  regiao: 'Sul',
  gentilico: 'dois-irmanense',
  tipo: 'cidade',

  populacao: 30709,
  populacaoAno: 2022,
  idhm: 0.743,
  idhmClasse: 'alto',
  altitudeM: 195,

  resumoEconomico:
    'Cidade de colonização alemã na encosta da serra gaúcha, Dois Irmãos é um polo calçadista consolidado e o berço do café colonial no Rio Grande do Sul — a tradição gastronômica que nasceu por aqui nos anos 1940 virou marca da cidade. Integrante da Rota Romântica, combina indústria forte, turismo de fim de semana e uma das populações que mais crescem na região.',

  mercado:
    'A renda industrial estável e o perfil germânico de vida comunitária sustentam um mercado de treino ativo: academias e personal trainers atendem operários, empresários e famílias, e o Parque Municipal Romeo Benício Wolf, com suas cascatas, aproxima o treino da natureza a um quilômetro do centro.',

  bairrosNobres: ['Centro', 'Vila Nova', 'São João', 'Belvedere'],
  bairrosPopulares: ['Travessão', 'Século XX', 'São Miguel', 'Industrial'],

  parques: [
    {
      nome: 'Parque Municipal Romeo Benício Wolf',
      descricao:
        'A cerca de um quilômetro do centro, o parque reúne área verde, açudes, ciclovia e duas cascatas — o cenário natural de caminhadas, trilhas leves e treinos ao ar livre da cidade.',
    },
    {
      nome: 'Praça do Imigrante e centro histórico',
      descricao:
        'O coração da cidade, com a arquitetura da imigração alemã e a Ponte de Pedra de 1855, concentra caminhada, alongamento e a vida comunitária.',
    },
    {
      nome: 'Encostas da Rota Romântica',
      descricao:
        'Os morros e estradas da serra no entorno rendem pedais e caminhadas com desnível — treino de subida com paisagem de vale.',
    },
  ],
  ciclovias:
    'O Parque Romeo Benício Wolf tem ciclovia própria, e o pedal de estrada é forte na Rota Romântica, com rotas para Ivoti, Morro Reuter e a serra; a malha urbana cicloviária ainda é limitada.',

  clima:
    'Clima subtropical úmido de encosta de serra: verões quentes, invernos frios com mínimas baixas e chuvas bem distribuídas o ano inteiro.',
  climaTreino:
    'No verão, treina-se nas pontas do dia; no inverno, o meio do dia é a janela mais confortável — e a academia coberta segura a constância nas semanas de frio e chuva.',

  mobilidade:
    'Pela BR-116, Dois Irmãos se conecta em poucos minutos a Ivoti, Campo Bom e Novo Hamburgo — o mercado do Vale do Sinos funciona de forma integrada, inclusive no treino personalizado.',

  corridas: [
    {
      nome: 'Provas da Rota Romântica e do Vale do Sinos',
      descricao:
        'O calendário regional de corridas circula pelas cidades da serra e do vale, com percursos de 5 km e 10 km e forte participação comunitária.',
    },
  ],
  culturaEsportiva:
    'A herança alemã se traduz em vida associativa forte — sociedades, ginásios e festas comunitárias — e o esporte acompanha: corrida, pedal na serra e academias movimentadas o ano todo.',
  academias:
    'A oferta reúne academias de musculação e personal trainers no centro e nos bairros industriais, complementada pela estrutura do Parque Romeo Benício Wolf e pelas rotas de serra da região.',

  destaquesFitness: [
    'Parque Municipal Romeo Benício Wolf, com cascatas e ciclovia a 1 km do centro.',
    'Berço do café colonial gaúcho — e a caminhada de compensação virou tradição local.',
    'Polo calçadista com renda estável, que sustenta a demanda por treino.',
    'Rota Romântica como cenário de pedais e treinos de subida.',
  ],

  precos: {
    avulsaMin: 55,
    avulsaMax: 130,
    mensalMin: 280,
    mensalMax: 760,
    onlineMin: 130,
    onlineMax: 380,
  },

  conclusao:
    'Entre o café colonial, as cascatas do parque municipal e a indústria calçadista, Dois Irmãos une tradição alemã e vida ativa na encosta da serra. Um personal trainer ajuda a equilibrar a mesa farta da cidade com método, constância e os cenários naturais da Rota Romântica.',

  vizinhas: ['ivoti-rs', 'campo-bom-rs', 'novo-hamburgo-rs'],

  fontes: [
    { nome: 'IBGE Cidades — Dois Irmãos', url: 'https://cidades.ibge.gov.br/brasil/rs/dois-irmaos/panorama' },
    { nome: 'Prefeitura de Dois Irmãos', url: 'https://doisirmaos.atende.net/' },
    { nome: 'Rota Romântica', url: 'https://rotaromantica.com.br/' },
  ],
  atualizadoEm: '2026-08-04',
};
