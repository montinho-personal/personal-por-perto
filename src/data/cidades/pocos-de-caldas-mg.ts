import type { Cidade } from '../../lib/types';

export const cidade: Cidade = {
  slug: 'pocos-de-caldas-mg',
  nome: 'Poços de Caldas',
  uf: 'MG',
  estado: 'Minas Gerais',
  estadoSlug: 'minas-gerais',
  regiao: 'Sudeste',
  gentilico: 'pocense',
  tipo: 'cidade',

  populacao: 163742,
  populacaoAno: 2022,
  idhm: 0.779,
  idhmClasse: 'alto',
  altitudeM: 1186,

  resumoEconomico:
    'No sul de Minas, Poços de Caldas é a principal estância hidromineral da região, com forte turismo de saúde e bem-estar ligado às águas termais. Tem economia diversificada — mineração de bauxita e indústria de alumínio (Alcoa), química, malhas e serviços — e renda relativamente alta. Construída sobre a cratera de um vulcão extinto, suas paisagens montanhosas reforçam o apelo de turismo de natureza.',

  mercado:
    'O mercado fitness é maduro, com redes, estúdios de musculação e treinamento funcional. O clima ameno de altitude favorece atividades ao ar livre o ano todo, e o perfil de bem-estar e renda alta torna o público receptivo a personal training.',

  bairrosNobres: ['Jardim dos Estados', 'Jardim Country Club', 'Vila Cidade Jardim', 'Jardim Quisisana'],
  bairrosPopulares: ['Vila Cruz', 'Jardim Ipê', 'Santa Augusta', 'Conjunto Pádua Sales'],

  parques: [
    {
      nome: 'Parque José Affonso Junqueira',
      descricao:
        'Parque central com pista de caminhada e corrida, quadras, campo, pista de skate e de bicicross e lago artificial, aberto 24h.',
    },
    {
      nome: 'Parque Municipal Antônio Molinari',
      descricao:
        'Tem ciclovia, pista de caminhada e academia ao ar livre, em meio à área verde.',
    },
    {
      nome: 'Cachoeira Véu das Noivas',
      descricao:
        'Atrativo natural com trilhas e mata, popular para caminhadas e trekking nas encostas da cidade.',
    },
  ],
  ciclovias:
    'Há ciclovia no Parque Antônio Molinari e trilhas sinalizadas pela cidade; a extensão total ainda não é divulgada em fonte oficial.',

  clima:
    'O clima é tropical de altitude (cerca de 1.186 m), com verões amenos e invernos frios.',
  climaTreino:
    'O clima ameno favorece o treino ao ar livre ao longo de todo o ano, com atenção ao frio nas manhãs de inverno.',

  mobilidade:
    'O acesso se dá pelas rodovias do sul de Minas e da divisa com São Paulo (SP-340/SP-344 e ramais); a cidade não fica diretamente sobre a Fernão Dias.',

  corridas: [
    {
      nome: 'Meia Maratona das Águas',
      descricao:
        'Prova tradicional entre Poços e Pocinhos, já em mais de uma dezena de edições, com percursos para todos os níveis.',
    },
    {
      nome: 'Ultra do Vulcão',
      descricao:
        'Ultramaratona e trail que exploram o relevo da cratera vulcânica da região.',
    },
  ],
  culturaEsportiva:
    'A cidade tem calendário municipal robusto, com cerca de duas dezenas de corridas ao longo do ano, além de forte cultura de trail, hiking e ciclismo de montanha favorecida pelo relevo.',
  academias:
    'A oferta reúne redes e estúdios de musculação e funcional, com o turismo de bem-estar e a alta renda sustentando a demanda, complementada pelos parques e trilhas.',

  destaquesFitness: [
    'Clima de altitude ameno: janela de treino ao ar livre o ano inteiro.',
    'Parque José Affonso Junqueira como hub central de corrida e caminhada (aberto 24h).',
    'Calendário com cerca de 24 corridas por ano, incluindo ultra e trail.',
    'Apelo de turismo de bem-estar e alta renda, com público receptivo a personal training.',
  ],

  precos: {
    avulsaMin: 70,
    avulsaMax: 170,
    mensalMin: 360,
    mensalMax: 950,
    onlineMin: 170,
    onlineMax: 440,
  },

  conclusao:
    'Estância hidromineral de altitude no sul de Minas, Poços de Caldas une clima ameno, parques e uma agenda intensa de corridas e trail. Um personal trainer ajuda a aproveitar o Parque José Affonso Junqueira e as trilhas da cratera com método, o ano todo.',

  vizinhas: ['varginha-mg', 'belo-horizonte-mg'],

  fontes: [
    { nome: 'IBGE Cidades — Poços de Caldas', url: 'https://cidades.ibge.gov.br/brasil/mg/pocos-de-caldas/panorama' },
    { nome: 'Prefeitura de Poços de Caldas', url: 'https://www.pocosdecaldas.mg.gov.br/' },
    { nome: 'Atlas Brasil — IDHM', url: 'https://www.atlasbrasil.org.br/' },
  ],
  atualizadoEm: '2026-06-29',
};
