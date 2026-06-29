import type { Cidade } from '../../lib/types';

export const cidade: Cidade = {
  slug: 'botucatu-sp',
  nome: 'Botucatu',
  uf: 'SP',
  estado: 'São Paulo',
  estadoSlug: 'sao-paulo',
  regiao: 'Sudeste',
  gentilico: 'botucatuense',
  tipo: 'cidade',

  populacao: 145155,
  populacaoAno: 2022,
  idhm: 0.800,
  idhmClasse: 'muito alto',
  altitudeM: 800,

  resumoEconomico:
    'Polo do centro-oeste paulista, conhecida como "Cidade dos Bons Ares" pelo clima ameno e pela altitude, Botucatu é um importante centro de saúde e educação — sede de um dos campi mais renomados da Unesp, com Faculdade de Medicina e Hospital das Clínicas. A economia é complementada por agroindústria e tecnologia.',

  mercado:
    'A grande população universitária e de profissionais de saúde gera um público qualificado e consciente de bem-estar, com demanda por treino, corrida e atividades ao ar livre.',

  bairrosNobres: ['Jardim Paraíso', 'Vila Antártica', 'Centro', 'Vila Maria'],
  bairrosPopulares: ['Vila dos Lavradores', 'CECAP', 'Jardim Aeroporto', 'Jardim Bom Pastor'],

  parques: [
    {
      nome: 'Parque Municipal do Jardim Paraíso',
      descricao:
        'Tem trilhas ecológicas, espaços para caminhada, lago, deck e quiosques.',
    },
    {
      nome: 'Parque Linear do Rio Lavapés',
      descricao:
        'Inaugurado em 2024, tem academia ao ar livre, pista de caminhada e corrida, ciclovia, pista de skate e quadras.',
    },
    {
      nome: 'Praças do Jardim Paraíso',
      descricao:
        'Mais de dez praças com playgrounds, academia ao ar livre e quadra de areia.',
    },
  ],
  ciclovias:
    'Há ciclovia integrada ao Parque Linear do Rio Lavapés; a extensão total da malha ainda não é divulgada em fonte oficial.',

  clima:
    'O clima é tropical de altitude, fresco e seco (os "bons ares", até cerca de 920 m no relevo da cuesta).',
  climaTreino:
    'É um dos melhores cenários da região para o treino ao ar livre, com verões mais amenos; o inverno seco e frio pede aquecimento.',

  mobilidade:
    'Botucatu é servida pelas rodovias Marechal Rondon e Castello Branco, no eixo rumo a Bauru e ao centro-oeste paulista.',

  corridas: [
    {
      nome: 'Circuito de Corrida de Rua "Pra Frente e Pra Todos"',
      descricao:
        'Calendário oficial municipal de provas de rua.',
    },
    {
      nome: 'Duathlon do Câmpus da Unesp',
      descricao:
        'Evento esportivo universitário, ao lado de provas como a Corrida Vencendo o Diabetes.',
    },
  ],
  culturaEsportiva:
    'Há forte vínculo com a Unesp (eventos esportivos universitários e duathlon) e um calendário municipal de corridas em consolidação, com comunidade de corredores ativa.',
  academias:
    'A oferta reúne academias e estúdios, com público universitário e da área de saúde, complementada pelo novo Parque Linear e pelos parques municipais.',

  destaquesFitness: [
    'Clima de altitude (bons ares), ideal para o treino outdoor o ano todo.',
    'Público universitário e da área de saúde (Unesp), altamente receptivo.',
    'Parque Linear novo (2024) com infraestrutura completa de treino.',
    'Circuito municipal de corrida estruturado.',
  ],

  precos: {
    avulsaMin: 70,
    avulsaMax: 170,
    mensalMin: 360,
    mensalMax: 960,
    onlineMin: 180,
    onlineMax: 450,
  },

  conclusao:
    'Cidade dos Bons Ares e polo de saúde e educação, Botucatu une clima de altitude favorável e um público consciente de bem-estar. Um personal trainer ajuda a aproveitar o Parque Linear do Lavapés com método, num dos melhores climas do interior para treino ao ar livre.',

  vizinhas: ['bauru-sp', 'sorocaba-sp'],

  fontes: [
    { nome: 'IBGE Cidades — Botucatu', url: 'https://cidades.ibge.gov.br/brasil/sp/botucatu/panorama' },
    { nome: 'Prefeitura de Botucatu', url: 'https://www.botucatu.sp.gov.br/' },
    { nome: 'Atlas Brasil — IDHM', url: 'https://www.atlasbrasil.org.br/' },
  ],
  atualizadoEm: '2026-06-29',
};
