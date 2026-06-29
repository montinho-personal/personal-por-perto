import type { Cidade } from '../../lib/types';

export const cidade: Cidade = {
  slug: 'duque-de-caxias-rj',
  nome: 'Duque de Caxias',
  uf: 'RJ',
  estado: 'Rio de Janeiro',
  estadoSlug: 'rio-de-janeiro',
  regiao: 'Sudeste',
  gentilico: 'duque-caxiense',
  tipo: 'cidade',

  populacao: 808161,
  populacaoAno: 2022,
  idhm: 0.711,
  idhmClasse: 'alto',
  altitudeM: 19,

  resumoEconomico:
    'Duque de Caxias tem o segundo maior PIB do estado do Rio de Janeiro, impulsionado pela Refinaria de Duque de Caxias (REDUC), a mais complexa do sistema Petrobras. É um polo industrial e logístico estratégico da Baixada Fluminense, com grande contingente de trabalhadores e relevo que vai da planície urbana às áreas serranas de Xerém.',

  mercado:
    'O mercado fitness atende a uma população trabalhadora numerosa; um destaque é a Vila Olímpica municipal, que conta com academia de musculação reformada e equipada, além de pista de atletismo. A cidade tem forte tradição de corrida de rua e grupos de corrida ativos.',

  bairrosNobres: ['Jardim 25 de Agosto', 'Centro', 'Parque Duque', 'Bar dos Cavaleiros'],
  bairrosPopulares: ['Saracuruna', 'Imbariê', 'Jardim Imbariê', 'Parque Equitativa'],

  parques: [
    {
      nome: 'Parque Natural Municipal da Taquara',
      descricao:
        'Cerca de 20 hectares de Mata Atlântica com trilhas, rios e cachoeiras — a Trilha da Cachoeira Véu de Noiva tem cerca de 3,5 km —, ideal para caminhada e trail.',
    },
    {
      nome: 'Vila Olímpica de Duque de Caxias',
      descricao:
        'No Jardim 25 de Agosto, é a maior da Baixada: tem pista de atletismo, campo de grama sintética, academia de musculação e quadras.',
    },
    {
      nome: 'Parque Equitativa',
      descricao:
        'Equipamento esportivo com ginástica, circuito e lutas, ponto de partida de etapas de corrida de rua na cidade.',
    },
  ],
  ciclovias:
    'A cidade vem ampliando a estrutura cicloviária; a extensão consolidada ainda não é divulgada em fonte oficial.',

  clima:
    'O clima é tropical quente e úmido, característico da Baixada Fluminense; a região serrana de Xerém é mais amena.',
  climaTreino:
    'O treino ao ar livre rende mais nos horários mais frescos, com hidratação reforçada; as trilhas da Taquara e a região de Xerém oferecem ambientes mais agradáveis nos dias quentes.',

  mobilidade:
    'Duque de Caxias é servida pelo trem da SuperVia (Ramal Saracuruna, que dá origem aos ramais de Vila Inhomirim e Guapimirim) e pelas rodovias Dutra (BR-116) e Washington Luís (BR-040).',

  corridas: [
    {
      nome: 'Corrida Duque de Caxias',
      descricao:
        'Prova tradicional da cidade, com muitas edições realizadas, parte de um calendário de corrida consolidado.',
    },
    {
      nome: 'Etapa do Circuito do Rio',
      descricao:
        'Prova de 5 km com largada no Parque Equitativa, integrando a cidade a um circuito regional.',
    },
  ],
  culturaEsportiva:
    'Duque de Caxias tem forte tradição de corridas de rua e grupos de corrida, além da maior Vila Olímpica da Baixada. O esporte público é um eixo importante da vida da cidade.',
  academias:
    'A oferta reúne academias de bairro voltadas à grande população trabalhadora e a estrutura da Vila Olímpica, complementadas pelas trilhas da Taquara para o treino ao ar livre.',

  destaquesFitness: [
    'Parque Natural da Taquara: trilhas e cachoeiras para treino na natureza.',
    'Vila Olímpica (maior da Baixada): pista de atletismo, musculação e quadras.',
    'Parque Equitativa com ginástica, circuito e provas de corrida.',
    'Calendário consolidado de corridas de rua (Corrida Duque de Caxias, Circuito do Rio).',
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
    'Segundo maior PIB do estado e polo industrial da Baixada, Duque de Caxias tem boa estrutura pública de esporte, da Vila Olímpica às trilhas da Taquara. Um personal trainer ajuda a encaixar o treino na rotina de trabalho e a aproveitar esses espaços com método e segurança.',

  vizinhas: ['rio-de-janeiro-rj', 'nova-iguacu-rj', 'sao-goncalo-rj'],

  fontes: [
    { nome: 'IBGE Cidades — Duque de Caxias', url: 'https://cidades.ibge.gov.br/brasil/rj/duque-de-caxias/panorama' },
    { nome: 'Prefeitura de Duque de Caxias', url: 'https://duquedecaxias.rj.gov.br/' },
    { nome: 'Atlas Brasil — IDHM', url: 'https://www.atlasbrasil.org.br/' },
  ],
  atualizadoEm: '2026-06-29',
};
