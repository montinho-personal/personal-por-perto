import type { Cidade } from '../../lib/types';

export const cidade: Cidade = {
  slug: 'itapema-sc',
  nome: 'Itapema',
  uf: 'SC',
  estado: 'Santa Catarina',
  estadoSlug: 'santa-catarina',
  regiao: 'Sul',
  gentilico: 'itapemense',
  tipo: 'cidade',

  populacao: 75940,
  populacaoAno: 2022,
  idhm: 0.796,
  idhmClasse: 'alto',

  resumoEconomico:
    'Cidade do litoral norte de Santa Catarina, entre Balneário Camboriú e Florianópolis, Itapema tem cerca de 14 km de praias e economia movida pelo turismo de praia. É líder nacional em valorização imobiliária, com um forte mercado de torres e empreendimentos de luxo, sobretudo na Meia Praia.',

  mercado:
    'O público de alto padrão, os turistas e os novos moradores de torres de luxo elevam a demanda por academias premium, estúdios e personal training, com forte apelo a treino na orla.',

  bairrosNobres: ['Meia Praia', 'Centro', 'Praia Grande', 'Ilhota'],
  bairrosPopulares: ['Morretes', 'Jardim Praia Mar', 'Casa Branca', 'Tabuleiro'],

  parques: [
    {
      nome: 'Calçadão de Meia Praia',
      descricao:
        'Orla estruturada com pista de caminhada, ciclovia, academia ao ar livre e rampas de acesso — o principal espaço de treino da cidade.',
    },
    {
      nome: 'Parque linear da orla',
      descricao:
        'Parque à beira-mar com ciclovia, mobiliário urbano e iluminação ao longo de Meia Praia.',
    },
    {
      nome: 'Avenida Beira-Mar',
      descricao:
        'Eixo de caminhada e corrida ao longo da praia.',
    },
  ],
  ciclovias:
    'Há ciclovia ao longo do calçadão de Meia Praia, com percurso completo da orla em torno de 10 km (trecho central mais usado, cerca de 3 km).',

  clima:
    'O clima é subtropical litorâneo, quente e úmido no verão e ameno no inverno.',
  climaTreino:
    'O clima de praia favorece o treino ao ar livre o ano todo; no verão, vale treinar cedo, antes do sol forte do meio-dia.',

  mobilidade:
    'Itapema é cortada pela BR-101 (em duplicação), principal eixo do litoral catarinense, ligando a Florianópolis, Itajaí e Balneário Camboriú.',

  corridas: [
    {
      nome: 'Circuito Angeloni de Corridas — Etapa Itapema',
      descricao:
        'Etapa de corrida de rua com largada na região de Meia Praia.',
    },
    {
      nome: 'Pink Run Itapema',
      descricao:
        'Corrida de rua realizada na cidade, parte do calendário esportivo local.',
    },
  ],
  culturaEsportiva:
    'A cultura esportiva é fortemente ligada ao litoral e à orla (corrida, ciclismo, beach sports e natação no mar calmo de Meia Praia), reforçada por eventos de corrida e pelo público turístico e de alto padrão.',
  academias:
    'A oferta reúne academias e estúdios premium, com público de luxo e turistas, e tem no calçadão de Meia Praia a melhor estrutura pública de treino.',

  destaquesFitness: [
    'Orla e calçadão de Meia Praia: melhor estrutura pública de treino (pista, academia ao ar livre e ciclovia).',
    'Público de luxo e turistas, que elevam a demanda por personal e estúdios premium.',
    'Beach sports e treino na areia e no mar calmo como diferencial litorâneo.',
    'Eventos de corrida (Circuito Angeloni, Pink Run) no calendário.',
  ],

  precos: {
    avulsaMin: 85,
    avulsaMax: 200,
    mensalMin: 420,
    mensalMax: 1200,
    onlineMin: 190,
    onlineMax: 480,
  },

  conclusao:
    'Líder nacional em valorização imobiliária e destino de praia entre Balneário Camboriú e Floripa, Itapema tem público de alto padrão e a orla de Meia Praia como academia a céu aberto. Um personal trainer encontra aqui forte demanda premium, do treino na areia ao atendimento em torres de luxo.',

  vizinhas: ['balneario-camboriu-sc', 'itajai-sc'],

  fontes: [
    { nome: 'IBGE Cidades — Itapema', url: 'https://cidades.ibge.gov.br/brasil/sc/itapema/panorama' },
    { nome: 'Prefeitura de Itapema', url: 'https://www.itapema.sc.gov.br/' },
    { nome: 'Atlas Brasil — IDHM', url: 'https://www.atlasbrasil.org.br/' },
  ],
  atualizadoEm: '2026-06-29',
};
