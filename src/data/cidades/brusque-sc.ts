import type { Cidade } from '../../lib/types';

export const cidade: Cidade = {
  slug: 'brusque-sc',
  nome: 'Brusque',
  uf: 'SC',
  estado: 'Santa Catarina',
  estadoSlug: 'santa-catarina',
  regiao: 'Sul',
  gentilico: 'brusquense',
  tipo: 'cidade',

  populacao: 141385,
  populacaoAno: 2022,
  idhm: 0.795,
  idhmClasse: 'alto',

  resumoEconomico:
    'No Vale do Itajaí-Mirim, de colonização alemã e italiana, Brusque é um dos maiores polos têxteis e de confecção do país (a "Cidade dos Tecidos"). Tem forte turismo de compras (pronta-entrega de moda) e economia sólida, com PIB per capita acima da média e indústria metalmecânica complementar, figurando entre as cidades de alta qualidade de vida de SC.',

  mercado:
    'A alta renda e a qualidade de vida sustentam demanda por academias e serviços de bem-estar, com público de classe média e alta favorável a personal training e estúdios premium.',

  bairrosNobres: ['Jardim Maluche', 'Dom Joaquim', 'Centro', 'Santa Rita'],
  bairrosPopulares: ['Guarani', 'Águas Claras', 'Volta Grande', 'Limeira'],

  parques: [
    {
      nome: 'Parque Municipal Leopoldo Moritz',
      descricao:
        'O "Parque da Caixa d\'Água", no centro, é área verde com lago, ponte suspensa e quiosques — principal espaço de lazer ao ar livre.',
    },
    {
      nome: 'Praça Sesquicentenário',
      descricao:
        'Praça pública de convivência e lazer no centro.',
    },
    {
      nome: 'Praças com academia ao ar livre',
      descricao:
        'Equipamentos públicos de ginástica distribuídos em praças da cidade.',
    },
  ],
  ciclovias:
    'A extensão da malha cicloviária ainda não é divulgada em fonte oficial.',

  clima:
    'O clima é subtropical úmido do Vale do Itajaí, com inverno ameno a frio e verão quente e úmido.',
  climaTreino:
    'As condições são geralmente boas para o treino ao ar livre o ano todo, com cautela no calor e na umidade do verão.',

  mobilidade:
    'O acesso principal é pela Rodovia Antônio Heil (SC-486), duplicada, conectando à BR-101 e ao litoral (Itajaí e Balneário Camboriú).',

  corridas: [
    {
      nome: 'Corrida Fenarreco 5K',
      descricao:
        'Prova de 5 km integrada à programação da Fenarreco, com largada na Arena Multiuso.',
    },
    {
      nome: 'Calendário de corridas de rua',
      descricao:
        'Provas locais ligadas a eventos comunitários e à Fundação Municipal de Esportes.',
    },
  ],
  culturaEsportiva:
    'Cidade de tradição germânica e italiana e forte vida comunitária, Brusque tem no futebol o Brusque FC como referência regional, e a Fenarreco mobiliza eventos esportivos como a corrida de rua.',
  academias:
    'A oferta inclui academias e estúdios premium, com público de alta renda, complementada pelo Parque Leopoldo Moritz e pelas praças com academia ao ar livre.',

  destaquesFitness: [
    'Público de alta renda, favorável a estúdios e personal premium.',
    'Parque Leopoldo Moritz como espaço central de lazer e ar livre.',
    'Corrida Fenarreco 5K como evento-âncora de corrida de rua.',
    'Boa infraestrutura urbana e índices de qualidade de vida e segurança.',
  ],

  precos: {
    avulsaMin: 75,
    avulsaMax: 180,
    mensalMin: 380,
    mensalMax: 1000,
    onlineMin: 180,
    onlineMax: 450,
  },

  conclusao:
    'Cidade dos Tecidos de alta renda no Vale do Itajaí, Brusque une qualidade de vida e o Parque Leopoldo Moritz. Um personal trainer encontra aqui forte demanda por treino premium, num clima favorável ao outdoor boa parte do ano.',

  vizinhas: ['blumenau-sc', 'itajai-sc'],

  fontes: [
    { nome: 'IBGE Cidades — Brusque', url: 'https://cidades.ibge.gov.br/brasil/sc/brusque/panorama' },
    { nome: 'Prefeitura de Brusque', url: 'https://www.brusque.sc.gov.br/' },
    { nome: 'Atlas Brasil — IDHM', url: 'https://www.atlasbrasil.org.br/' },
  ],
  atualizadoEm: '2026-06-29',
};
