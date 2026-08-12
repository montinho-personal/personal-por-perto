import type { Cidade } from '../../lib/types';

export const cidade: Cidade = {
  slug: 'santarem-pa',
  nome: 'Santarém',
  uf: 'PA',
  estado: 'Pará',
  estadoSlug: 'para',
  regiao: 'Norte',
  gentilico: 'santareno',
  tipo: 'cidade',

  populacao: 331942,
  populacaoAno: 2022,
  idhm: 0.691,
  idhmClasse: 'médio',

  resumoEconomico:
    'Terceira maior cidade do Pará, no oeste do estado, Santarém fica no encontro dos rios Tapajós e Amazonas — cujas águas não se misturam. É polo de turismo, com praias fluviais como a de Alter do Chão, e um importante hub logístico de grãos: o Porto de Santarém escoa soja e milho que chegam pela BR-163 desde o Centro-Oeste.',

  mercado:
    'A infraestrutura esportiva está em expansão, com academias ao ar livre instaladas em vários bairros e uma cena de corrida crescente. O mercado fitness se consolida atendendo tanto a população local quanto o fluxo turístico.',

  bairrosNobres: ['Centro', 'Santa Clara', 'Caranazal', 'Fátima'],
  bairrosPopulares: ['Aeroporto Velho', 'Santarenzinho', 'Maracanã', 'Diamantino'],

  parques: [
    {
      nome: 'Orla de Santarém',
      descricao:
        'Orla fluvial movimentada no fim de tarde, junto ao Terminal Fluvial Turístico, com calçadão para caminhada e vista do rio.',
    },
    {
      nome: 'Mirante da Fortaleza do Tapajós',
      descricao:
        'Mirante de madeira sobre o Tapajós, com área de caminhada e contemplação do Encontro das Águas — cenário único para treino leve.',
    },
    {
      nome: 'Praça das Flores',
      descricao:
        'No Aeroporto Velho, tem academia ao ar livre com equipamentos de ginástica gratuitos.',
    },
  ],
  ciclovias:
    'A extensão da malha cicloviária ainda não é divulgada em fonte oficial; a orla fluvial é o principal espaço para caminhada e pedal.',

  clima:
    'O clima é equatorial, quente e úmido, com estações seca e chuvosa bem marcadas.',
  climaTreino:
    'O calor e a umidade elevados pedem hidratação intensa e treino em horários amenos; a orla, ventilada, favorece a atividade no fim de tarde.',

  mobilidade:
    'O acesso é fortemente fluvial (porto e terminal hidroviário) e aéreo, além da BR-163, que conecta a cidade ao Centro-Oeste — Santarém é uma peça-chave da logística amazônica de grãos.',

  corridas: [
    {
      nome: 'Corrida e Passeio Ciclístico Arena Energia',
      descricao:
        'Reuniu mais de mil participantes, com estrutura de hidratação, massagem e apoio — um dos grandes eventos esportivos da cidade.',
    },
    {
      nome: 'Santarém Trail',
      descricao:
        'Prova de trail running na região, aproveitando a paisagem natural e as trilhas do entorno.',
    },
  ],
  culturaEsportiva:
    'Santarém tem forte vocação esportiva — quando se anuncia uma corrida, as ruas se enchem —, com corrida de rua, ciclismo e trail favorecidos pela paisagem fluvial e por Alter do Chão.',
  academias:
    'A oferta de academias se consolida, complementada por academias ao ar livre em praças de bairro (como a Praça das Flores) e pela orla fluvial como grande espaço de treino.',

  destaquesFitness: [
    'Orla fluvial como principal espaço de caminhada e treino.',
    'Academias ao ar livre instaladas em praças de bairro.',
    'Eventos de corrida e ciclismo de grande adesão (Arena Energia).',
    'Cenário natural (Tapajós e Alter do Chão) para atividades ao ar livre e trail.',
  ],

  precos: {
    avulsaMin: 60,
    avulsaMax: 140,
    mensalMin: 300,
    mensalMax: 820,
    onlineMin: 150,
    onlineMax: 390,
  },

  conclusao:
    'Cidade do encontro dos rios e porta de Alter do Chão, Santarém tem cenários naturais únicos para treinar — da orla fluvial às trilhas. Um personal trainer ajuda a montar uma rotina que respeite o calor amazônico e aproveite essa paisagem com segurança.',

  vizinhas: ['belem-pa', 'manaus-am', 'ananindeua-pa'],

  fontes: [
    { nome: 'IBGE Cidades — Santarém', url: 'https://cidades.ibge.gov.br/brasil/pa/santarem/panorama' },
    { nome: 'Prefeitura de Santarém', url: 'https://www.santarem.pa.gov.br/' },
    { nome: 'Atlas Brasil — IDHM', url: 'https://www.atlasbrasil.org.br/' },
  ],
  atualizadoEm: '2026-08-12',

  capaArte: {
    src: '/capas-cidade/santarem-pa.webp',
    w: 1200,
    h: 900,
    alt:
      'Personal trainer em Santarém (PA) em arte que reúne treino funcional, a catedral do Centro, o mirante da cidade, a orla do Tapajós e a praia de Alter do Chão — Personal por Perto',
    legenda:
      'Treino personalizado em Santarém: um plano feito para o seu corpo e a sua rotina, com acompanhamento profissional na cidade e região.',
  },
};
