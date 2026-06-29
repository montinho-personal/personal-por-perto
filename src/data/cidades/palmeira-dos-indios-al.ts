import type { Cidade } from '../../lib/types';

export const cidade: Cidade = {
  slug: 'palmeira-dos-indios-al',
  nome: 'Palmeira dos Índios',
  uf: 'AL',
  estado: 'Alagoas',
  estadoSlug: 'alagoas',
  regiao: 'Nordeste',
  gentilico: 'palmeirense',
  tipo: 'cidade',

  populacao: 71574,
  populacaoAno: 2022,
  idhm: 0.638,
  idhmClasse: 'médio',
  altitudeM: 342,

  resumoEconomico:
    'Uma das maiores cidades de Alagoas e importante polo do Agreste alagoano, Palmeira dos Índios tem na economia o comércio regional, os serviços e a agropecuária. A cidade funciona como centro de compras, saúde e educação para municípios vizinhos do agreste e do sertão, e guarda forte identidade cultural ligada aos povos Xukuru-Kariri e ao escritor Graciliano Ramos, que foi prefeito do município entre 1928 e 1930.',

  mercado:
    'Como polo regional do agreste, a cidade reúne academias e estúdios que atendem também moradores das cidades do entorno, num mercado de personal trainers em consolidação acompanhando o porte de cidade média do interior.',

  bairrosNobres: ['Centro', 'Boa Vista', 'Alto do Cruzeiro', 'Vila Maria'],
  bairrosPopulares: ['Eucalipto', 'Cohab', 'São Cristóvão', 'Xucurus'],

  parques: [
    {
      nome: 'Cristo do Goití',
      descricao:
        'Monumento no alto da Serra do Goití, a mais de 500 m de altitude, com mirante e vista panorâmica da cidade; o acesso e o entorno serrano são usados para caminhadas e treinos com subida.',
    },
    {
      nome: 'Serra da Boa Vista',
      descricao:
        'Conjunto serrano que emoldura a cidade, ponto de referência para trilhas e atividades ao ar livre.',
    },
    {
      nome: 'Lago da cidade',
      descricao:
        'Área de lazer com vista para a serra, usada para caminhada e corrida ao ar livre.',
    },
  ],
  ciclovias:
    'A cidade tem trechos de vias para caminhada e bicicleta no entorno do centro e das áreas de lazer; a extensão total não é divulgada em fonte oficial.',

  clima:
    'O clima é tropical semiúmido do Agreste alagoano, ameno por causa da altitude (cerca de 342 m), com verões quentes, invernos relativamente frescos e período chuvoso concentrado entre maio e agosto.',
  climaTreino:
    'A altitude torna o clima mais ameno que o do litoral, mas o sol forte da estação seca recomenda treinar no início da manhã ou no fim de tarde, com hidratação adequada.',

  mobilidade:
    'Palmeira dos Índios é cortada pela BR-316, principal eixo rodoviário que liga a cidade a Maceió (a cerca de 136 km) e ao sertão, funcionando como entroncamento regional do agreste.',

  corridas: [
    {
      nome: 'Corrida do aniversário da cidade',
      descricao:
        'Prova de rua associada às comemorações de emancipação do município, com percursos de caminhada e corrida.',
    },
    {
      nome: 'Circuitos e provas regionais do agreste',
      descricao:
        'Etapas e corridas de rua que passam pela cidade dentro do calendário esportivo do interior alagoano.',
    },
  ],
  culturaEsportiva:
    'A cidade combina tradição de futebol, corridas de rua ligadas ao calendário cívico e o uso das serras (Goití e Boa Vista) para caminhadas e treinos ao ar livre, com forte presença da cultura indígena Xukuru-Kariri no entorno.',
  academias:
    'A oferta reúne academias e estúdios no centro e nos bairros, complementada pelas áreas de lazer e pelo relevo serrano, que favorece treinos com subida.',

  destaquesFitness: [
    'Clima ameno de altitude, mais fresco que o do litoral alagoano.',
    'Cristo do Goití e serras como cenário para caminhadas e treinos com subida.',
    'Polo regional do agreste, com mercado fitness de cidade média.',
    'Terra de Graciliano Ramos, com identidade cultural e turística própria.',
  ],

  precos: {
    avulsaMin: 45,
    avulsaMax: 105,
    mensalMin: 230,
    mensalMax: 640,
    onlineMin: 105,
    onlineMax: 330,
  },

  conclusao:
    'Polo do Agreste alagoano e terra de Graciliano Ramos, Palmeira dos Índios alia clima ameno de altitude, serras para treino ao ar livre e um mercado fitness de cidade média. Um personal trainer ajuda a aproveitar esse cenário com método, ajustando horários e cargas ao sol da estação seca e ao relevo serrano.',

  vizinhas: ['arapiraca-al', 'maceio-al'],

  fontes: [
    { nome: 'IBGE Cidades — Palmeira dos Índios', url: 'https://cidades.ibge.gov.br/brasil/al/palmeira-dos-indios/panorama' },
    { nome: 'Prefeitura de Palmeira dos Índios', url: 'https://palmeiradosindios.al.gov.br/a-cidade/' },
    { nome: 'Atlas Brasil — IDHM', url: 'https://www.atlasbrasil.org.br/' },
  ],
  atualizadoEm: '2026-06-29',
};
