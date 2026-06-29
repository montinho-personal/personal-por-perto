import type { Cidade } from '../../lib/types';

export const cidade: Cidade = {
  slug: 'lages-sc',
  nome: 'Lages',
  uf: 'SC',
  estado: 'Santa Catarina',
  estadoSlug: 'santa-catarina',
  regiao: 'Sul',
  gentilico: 'lageano',
  tipo: 'cidade',

  populacao: 164981,
  populacaoAno: 2022,
  idhm: 0.770,
  idhmClasse: 'alto',
  altitudeM: 920,

  resumoEconomico:
    'Maior cidade da Serra Catarinense (e maior município de SC em extensão), Lages tem economia apoiada na pecuária de corte, na indústria madeireira e de papel/celulose e no turismo rural — é a Capital Nacional do Turismo Rural, tendo criado os primeiros hotéis-fazenda do Brasil. O frio é intenso, com geadas e neve ocasional.',

  mercado:
    'Como cidade-polo regional que atende toda a Serra Catarinense, tem mercado fitness amplo; o inverno rigoroso favorece academias indoor e estúdios de musculação.',

  bairrosNobres: ['Centro', 'Coral', 'Guarujá', 'Universitário'],
  bairrosPopulares: ['Habitação', 'Guadalupe', 'Santa Mônica', 'São Cristóvão'],

  parques: [
    {
      nome: 'Parque Jonas Ramos (Tanque)',
      descricao:
        'No centro, tem pista de caminhada ao redor do lago, academia ao ar livre gratuita, playground e área de piquenique.',
    },
    {
      nome: 'Calçadão da Praça João Costa',
      descricao:
        'Espaço para caminhadas e ponto de largada e chegada das corridas locais.',
    },
    {
      nome: 'Praça Vidal Ramos Sênior',
      descricao:
        'Espaço público revitalizado, ponto de encontro e de circulação.',
    },
  ],
  ciclovias:
    'Bairros como Coral e Guarujá têm ciclovias; a extensão total ainda não é divulgada em fonte oficial.',

  clima:
    'O clima é subtropical de altitude, com quatro estações definidas, média anual em torno de 15 °C, invernos com geadas frequentes e neve ocasional.',
  climaTreino:
    'O inverno serrano reforça a demanda por treino indoor; as manhãs de geada limitam a atividade ao ar livre.',

  mobilidade:
    'Lages é servida pela BR-282 (acesso a Florianópolis) e pela BR-116 (acesso a Curitiba), importante entroncamento da serra.',

  corridas: [
    {
      nome: 'Meia Maratona ANIMI Serra Catarinense',
      descricao:
        'Com largada e chegada no Calçadão da Praça João Costa, e percursos de 21 km, 10 km, 5 km e kids.',
    },
    {
      nome: 'Provas regionais da Serra Catarinense',
      descricao:
        'A cidade-polo concentra eventos de corrida da região serrana.',
    },
  ],
  culturaEsportiva:
    'As corridas de rua têm forte apelo comunitário e de saúde pública, e a cidade-polo da Serra Catarinense concentra eventos regionais.',
  academias:
    'A oferta reúne academias indoor e estúdios de musculação, com base de clientes regional ampla, complementada pelo Parque Jonas Ramos.',

  destaquesFitness: [
    'Treino indoor essencial no inverno serrano (geada, sincelo e neve ocasional).',
    'Parque Jonas Ramos (Tanque) como principal espaço público — academia ao ar livre gratuita e pista.',
    'Maior cidade da Serra Catarinense: base de clientes regional ampla.',
    'Calçadão da Praça João Costa como palco da corrida de rua local.',
  ],

  precos: {
    avulsaMin: 70,
    avulsaMax: 165,
    mensalMin: 350,
    mensalMax: 940,
    onlineMin: 170,
    onlineMax: 440,
  },

  conclusao:
    'Capital da Serra Catarinense, Lages une turismo rural, frio intenso e o Parque Jonas Ramos. Um personal trainer ajuda a manter a constância no inverno rigoroso, combinando o treino indoor com as janelas de outdoor nas estações amenas.',

  vizinhas: ['florianopolis-sc', 'criciuma-sc'],

  fontes: [
    { nome: 'IBGE Cidades — Lages', url: 'https://cidades.ibge.gov.br/brasil/sc/lages/panorama' },
    { nome: 'Prefeitura de Lages', url: 'https://www.lages.sc.gov.br/' },
    { nome: 'Atlas Brasil — IDHM', url: 'https://www.atlasbrasil.org.br/' },
  ],
  atualizadoEm: '2026-06-29',
};
