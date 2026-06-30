import type { Cidade } from '../../lib/types';

export const cidade: Cidade = {
  slug: 'itatiaia-rj',
  nome: 'Itatiaia',
  uf: 'RJ',
  estado: 'Rio de Janeiro',
  estadoSlug: 'rio-de-janeiro',
  regiao: 'Sudeste',
  gentilico: 'itatiaiense',
  tipo: 'cidade',

  populacao: 30908,
  populacaoAno: 2022,
  idhm: 0.737,
  idhmClasse: 'alto',
  altitudeM: 442,

  resumoEconomico:
    'No extremo sul fluminense, no vale do Médio Paraíba e aos pés da Serra da Mantiqueira, Itatiaia tem o ecoturismo e o montanhismo como vocação central — abriga o Parque Nacional de Itatiaia, o mais antigo do Brasil (criado em 1937), e o Pico das Agulhas Negras, ponto mais alto do estado. A economia combina turismo de natureza (com a colônia finlandesa de Penedo e as vilas de Maromba e Maringá) e a influência do forte polo industrial e automotivo do entorno, com montadoras instaladas na vizinha Resende.',

  mercado:
    'O mercado é movido por um público de bem-estar e aventura, que vem para trilhas, cachoeiras e montanhismo, somado a moradores de classe média e a profissionais ligados à indústria automotiva da região. Esse perfil sustenta a demanda por personal trainers voltados a preparo para trilha, condicionamento de montanha e treino funcional.',

  bairrosNobres: ['Penedo', 'Vila Pinheiro', 'Jardim Itatiaia', 'Centro'],
  bairrosPopulares: ['Campo Alegre', 'Maromba', 'Maringá', 'Engenheiro Passos'],

  parques: [
    {
      nome: 'Parque Nacional de Itatiaia',
      descricao:
        'O parque nacional mais antigo do Brasil (criado em 1937), com trilhas demarcadas, cachoeiras, lagos e mata atlântica preservada na parte baixa e campos de altitude na parte alta — base para caminhada, trail running e montanhismo.',
    },
    {
      nome: 'Pico das Agulhas Negras',
      descricao:
        'O ponto mais alto do Rio de Janeiro, a cerca de 2.791 m, na parte alta do parque, é destino clássico do montanhismo brasileiro e referência para treino de altitude e resistência.',
    },
    {
      nome: 'Maromba e Maringá',
      descricao:
        'Vilas na região serrana da Mantiqueira, em altitude elevada, com cachoeiras, rios, trilhas e estradas rurais usadas para caminhada, corrida em trilha e pedal.',
    },
  ],
  ciclovias:
    'O relevo de serra e o perfil de aventura favorecem o mountain bike e o cicloturismo em estrada; a malha cicloviária urbana ainda não é divulgada em fonte oficial.',

  clima:
    'O clima é tropical de altitude no núcleo urbano, ameno e úmido, ficando frio na serra: as áreas de altitude do parque e as vilas de Maromba e Maringá registram temperaturas baixas, com forte sensação de frio no inverno.',
  climaTreino:
    'No vale dá para treinar ao ar livre o ano todo, com manhãs e noites frescas ideais para correr. Na serra e nas trilhas de altitude, o frio exige agasalho, aquecimento mais longo e atenção à neblina e à variação rápida de temperatura.',

  mobilidade:
    'Itatiaia é cortada pela Via Dutra (BR-116), eixo Rio–São Paulo, principal via de acesso ao município e ao Parque Nacional; o trânsito de turismo se intensifica nos fins de semana e feriados, sobretudo rumo a Penedo e à serra.',

  corridas: [
    {
      nome: 'WTR Agulhas Negras (World Trail Races)',
      descricao:
        'Etapa de corrida em trilha e mountain bike realizada entre Itatiaia e Resende, na Serra da Mantiqueira, passando pela base do Pico das Agulhas Negras e por travessias clássicas como a Ruy Braga.',
    },
    {
      nome: 'Travessia Ruy Braga',
      descricao:
        'Travessia tradicional do montanhismo brasileiro no Parque Nacional de Itatiaia, referência para trail e treino de longa duração em montanha.',
    },
  ],
  culturaEsportiva:
    'A cidade tem cultura forte de esportes de montanha e aventura — montanhismo, trail running, mountain bike e caminhada nas trilhas do parque e da Mantiqueira —, com a região reconhecida por suas grandes altitudes e travessias clássicas.',
  academias:
    'A oferta de academias e estúdios atende moradores e o público de turismo de natureza, sendo complementada pelas trilhas do Parque Nacional e pela serra como espaços naturais de treino.',

  destaquesFitness: [
    'Parque Nacional de Itatiaia, o mais antigo do Brasil, com trilhas e cachoeiras para treino ao ar livre.',
    'Pico das Agulhas Negras (cerca de 2.791 m) para montanhismo e treino de altitude.',
    'Calendário de trail e montanha (WTR Agulhas Negras, travessia Ruy Braga).',
    'Clima ameno no vale e frio na serra, favorável a corrida, trilha e resistência.',
  ],

  precos: {
    avulsaMin: 60,
    avulsaMax: 130,
    mensalMin: 300,
    mensalMax: 780,
    onlineMin: 150,
    onlineMax: 400,
  },

  conclusao:
    'Berço do parque nacional mais antigo do país e guardiã do ponto mais alto do Rio de Janeiro, Itatiaia é um cenário natural para trilha, montanhismo e treino de resistência. Um personal trainer ajuda a preparar o corpo para a altitude e o relevo, com periodização adequada, do treino no vale às travessias da Mantiqueira.',

  vizinhas: ['resende-rj', 'barra-mansa-rj'],

  fontes: [
    { nome: 'IBGE Cidades — Itatiaia', url: 'https://cidades.ibge.gov.br/brasil/rj/itatiaia/panorama' },
    { nome: 'Prefeitura de Itatiaia', url: 'https://itatiaia.rj.gov.br/' },
    { nome: 'Atlas Brasil — IDHM', url: 'https://www.atlasbrasil.org.br/' },
  ],
  atualizadoEm: '2026-06-29',
};
