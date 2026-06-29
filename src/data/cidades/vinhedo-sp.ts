import type { Cidade } from '../../lib/types';

export const cidade: Cidade = {
  slug: 'vinhedo-sp',
  nome: 'Vinhedo',
  uf: 'SP',
  estado: 'São Paulo',
  estadoSlug: 'sao-paulo',
  regiao: 'Sudeste',
  gentilico: 'vinhedense',
  tipo: 'cidade',

  populacao: 76663,
  populacaoAno: 2022,
  idhm: 0.817,
  idhmClasse: 'muito alto',
  altitudeM: 720,

  resumoEconomico:
    'Integrante da Região Metropolitana de Campinas, Vinhedo tem uma das maiores rendas per capita do país e excelente qualidade de vida. A economia é forte em indústria e logística e em turismo — abriga parques temáticos às margens da Rodovia dos Bandeirantes —, com condomínios de luxo e saneamento praticamente universal.',

  mercado:
    'O público de alto poder aquisitivo e a cultura de bem-estar consolidada favorecem personal training premium, estúdios boutique e treino ao ar livre nas represas, com forte agenda municipal de corridas de rua.',

  bairrosNobres: ['Capela', 'Nova Vinhedo', 'Bosque', 'São Joaquim'],
  bairrosPopulares: ['Moinho', 'Santa Rosa', 'Altos do Morumbi', 'Pinheirinho'],

  parques: [
    {
      nome: 'Represa João Gasparini',
      descricao:
        'Tem pista de corrida, trilhas e academia ao ar livre, com outras represas próximas oferecendo quadra de areia e trilha de mountain bike.',
    },
    {
      nome: 'Complexo Esportivo dos Altos do Morumbi',
      descricao:
        'Tem pista de caminhada e corrida de cerca de 1,1 km, academia ao ar livre, quadras e ciclofaixa.',
    },
    {
      nome: 'Praças com academia ao ar livre',
      descricao:
        'A cidade tem cerca de duas dezenas de academias ao ar livre distribuídas em praças.',
    },
  ],
  ciclovias:
    'Há cerca de 6 km de ciclofaixas (uma delas partindo da Represa I rumo a Valinhos), integrando a Ciclorota das Frutas regional.',

  clima:
    'O clima é tropical de altitude, ameno (cerca de 720 m).',
  climaTreino:
    'O clima é bom para o treino ao ar livre o ano todo, com atenção às chuvas de verão.',

  mobilidade:
    'Vinhedo é cortada pelas rodovias Anhanguera e Bandeirantes, com acesso rápido a Campinas (cerca de 30 km) e a São Paulo (cerca de 72 km).',

  corridas: [
    {
      nome: 'Corrida da Uva',
      descricao:
        'Prova anual com 5 km, 10 km e caminhada, no distrito industrial.',
    },
    {
      nome: 'Capela Night Run',
      descricao:
        'Corrida noturna de 5 km com caminhada de 3 km, com largada na Capela.',
    },
  ],
  culturaEsportiva:
    'A cidade tem calendário ativo de corridas de rua com apoio da Secretaria de Esportes, além de forte adesão ao ciclismo e ao treino ao ar livre nas represas.',
  academias:
    'A oferta é premium, com estúdios boutique e personal training, complementada pelas represas e por cerca de 23 academias ao ar livre espalhadas pela cidade.',

  destaquesFitness: [
    'Público premium e clima ameno — nicho de personal de alto padrão.',
    'Represas João Gasparini como hub natural de treino outdoor.',
    'Cerca de 23 academias ao ar livre espalhadas pela cidade.',
    'Agenda densa de corridas de rua municipais.',
  ],

  precos: {
    avulsaMin: 90,
    avulsaMax: 220,
    mensalMin: 450,
    mensalMax: 1300,
    onlineMin: 200,
    onlineMax: 520,
  },

  conclusao:
    'Uma das maiores rendas do país na RM de Campinas, Vinhedo tem público premium, represas e ótima agenda de corridas. Um personal trainer encontra aqui forte demanda por treino de alto padrão, presencial e online, num clima ameno o ano todo.',

  vizinhas: ['campinas-sp', 'jundiai-sp'],

  fontes: [
    { nome: 'IBGE Cidades — Vinhedo', url: 'https://cidades.ibge.gov.br/brasil/sp/vinhedo/panorama' },
    { nome: 'Prefeitura de Vinhedo', url: 'https://www.vinhedo.sp.gov.br/' },
    { nome: 'Atlas Brasil — IDHM', url: 'https://www.atlasbrasil.org.br/' },
  ],
  atualizadoEm: '2026-06-29',
};
