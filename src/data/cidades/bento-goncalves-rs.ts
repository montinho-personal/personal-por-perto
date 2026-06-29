import type { Cidade } from '../../lib/types';

export const cidade: Cidade = {
  slug: 'bento-goncalves-rs',
  nome: 'Bento Gonçalves',
  uf: 'RS',
  estado: 'Rio Grande do Sul',
  estadoSlug: 'rio-grande-do-sul',
  regiao: 'Sul',
  gentilico: 'bento-gonçalvense',
  tipo: 'cidade',

  populacao: 123151,
  populacaoAno: 2022,
  idhm: 0.778,
  idhmClasse: 'alto',
  altitudeM: 690,

  resumoEconomico:
    'Coração da Serra Gaúcha e Capital Brasileira do Vinho, Bento Gonçalves é pioneira em vinhos e espumantes e no enoturismo (Vale dos Vinhedos, a primeira Indicação de Procedência do país). É também forte polo moveleiro e de turismo, com alta renda e colonização italiana.',

  mercado:
    'Cidade próspera, de alta renda e forte fluxo turístico, tem rede de academias estabelecida e expansão de academias ao ar livre e praças esportivas nos bairros, descentralizando o acesso.',

  bairrosNobres: ['São Bento', 'Cidade Alta', 'Centro', 'Santa Helena'],
  bairrosPopulares: ['Botafogo', 'São Roque', 'Borgo', 'Humaitá'],

  parques: [
    {
      nome: 'Pista de atletismo do bairro Planalto',
      descricao:
        'Pista de 4 raias na Av. Presidente Costa e Silva, voltada a caminhada, corrida e treino.',
    },
    {
      nome: 'Parque São Bento',
      descricao:
        'Área de lazer com bastante verde e estrutura para atividades ao ar livre.',
    },
    {
      nome: 'Parque Histórico General Bento Gonçalves',
      descricao:
        'Grande área verde com estruturas esportivas e de aventura, como tirolesa e rapel.',
    },
  ],
  ciclovias:
    'A topografia acidentada da serra limita a malha cicloviária; a existência de ciclovias estruturadas ainda não é divulgada em fonte oficial.',

  clima:
    'O clima é subtropical de altitude, com invernos rigorosos e geadas frequentes na serra.',
  climaTreino:
    'O frio intenso favorece o treino indoor boa parte do ano; nas estações mais amenas, os parques e o enoturismo abrem ótimas opções ao ar livre.',

  mobilidade:
    'Bento Gonçalves é acessada pela RS-470, principal corredor da Serra (em obras de duplicação), conectando à BR-116 e a Caxias do Sul.',

  corridas: [
    {
      nome: 'Maratona do Vinho',
      descricao:
        'Maratona, meia e 7 km na época da vindima, unindo esporte e enoturismo.',
    },
    {
      nome: 'Wine Run Vale dos Vinhedos',
      descricao:
        'Corrida temática pelos vinhedos e roteiros históricos da região.',
    },
  ],
  culturaEsportiva:
    'Os eventos de corrida são fortemente vinculados ao enoturismo (vindima e vinhedos), com ampliação recente de pistas e academias ao ar livre.',
  academias:
    'A oferta reúne academias e estúdios, com público de alta renda e turistas, complementada pela nova pista de atletismo e pelos parques.',

  destaquesFitness: [
    'Capital do Vinho e turismo intenso — público flutuante de alto poder aquisitivo.',
    'Corridas temáticas de enoturismo (Maratona do Vinho, Wine Run).',
    'Nova pista de atletismo pública (bairro Planalto).',
    'Frio serrano que impulsiona a demanda por treino indoor e personal.',
  ],

  precos: {
    avulsaMin: 75,
    avulsaMax: 180,
    mensalMin: 380,
    mensalMax: 1000,
    onlineMin: 180,
    onlineMax: 460,
  },

  conclusao:
    'Capital do Vinho na Serra Gaúcha, Bento Gonçalves une alta renda, enoturismo e corridas temáticas únicas. Um personal trainer ajuda a manter a constância no frio serrano, combinando treino indoor com as provas pelos vinhedos.',

  vizinhas: ['caxias-do-sul-rs', 'porto-alegre-rs'],

  fontes: [
    { nome: 'IBGE Cidades — Bento Gonçalves', url: 'https://cidades.ibge.gov.br/brasil/rs/bento-goncalves/panorama' },
    { nome: 'Prefeitura de Bento Gonçalves', url: 'https://www.bentogoncalves.rs.gov.br/' },
    { nome: 'Atlas Brasil — IDHM', url: 'https://www.atlasbrasil.org.br/' },
  ],
  atualizadoEm: '2026-06-29',
};
