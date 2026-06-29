import type { Cidade } from '../../lib/types';

export const cidade: Cidade = {
  slug: 'patos-de-minas-mg',
  nome: 'Patos de Minas',
  uf: 'MG',
  estado: 'Minas Gerais',
  estadoSlug: 'minas-gerais',
  regiao: 'Sudeste',
  gentilico: 'patense',
  tipo: 'cidade',

  populacao: 159235,
  populacaoAno: 2022,
  idhm: 0.765,
  idhmClasse: 'alto',
  altitudeM: 832,

  resumoEconomico:
    'Maior cidade da região do Alto Paranaíba, a "Princesa do Alto Paranaíba" é grande polo do agronegócio — referência nacional em milho, soja e café, além de suinocultura e produção de sementes. Tem forte comércio regional que atende dezenas de municípios e um dos maiores PIBs de Minas.',

  mercado:
    'O mercado é robusto para uma cidade de porte médio, sustentado pela renda do agronegócio e pela função de polo comercial regional, com público urbano e do entorno rural.',

  bairrosNobres: ['Alto dos Caiçaras', 'Centro', 'Jardim Califórnia', 'Campos Elíseos'],
  bairrosPopulares: ['Cerrado', 'Caramuru', 'Sebastião Amorim', 'Jardim Esperança'],

  parques: [
    {
      nome: 'Lagoa Grande',
      descricao:
        'Orla com pista de caminhada de cerca de 1.089 m, academia ao ar livre e parquinho — o principal ponto para cooper, caminhada e ciclismo.',
    },
    {
      nome: 'Parque Municipal do Mocambo',
      descricao:
        'Horto florestal de cerca de 18 hectares, com academia ao ar livre, parquinho e área natural para atividade física.',
    },
    {
      nome: 'Parque Municipal Milton Prates',
      descricao:
        'Área pública de lazer da cidade, usada para caminhada e atividade ao ar livre.',
    },
  ],
  ciclovias:
    'Há ciclismo recreativo na orla da Lagoa Grande; a extensão formal da ciclovia ainda não é divulgada em fonte oficial.',

  clima:
    'O clima é tropical de altitude do cerrado, com verão quente e chuvoso e inverno seco e ameno.',
  climaTreino:
    'O ar muito seco no inverno pede cuidado com as vias respiratórias e hidratação; o verão chuvoso favorece o treino indoor à tarde.',

  mobilidade:
    'Patos de Minas é entroncamento das BR-365 e BR-354, que conectam o município ao Triângulo Mineiro, ao norte de Minas e ao restante do estado.',

  corridas: [
    {
      nome: 'Corrida da Polícia Militar',
      descricao:
        'Prova de 5 km e 10 km, com largada na orla da Lagoa Grande.',
    },
    {
      nome: 'Domingo no Parque',
      descricao:
        'Evento recorrente de lazer e atividade ao ar livre nos parques da cidade.',
    },
  ],
  culturaEsportiva:
    'Há forte uso dos espaços públicos (Lagoa Grande e Mocambo) para caminhada e cooper, com corridas de rua institucionais e eventos de lazer no calendário.',
  academias:
    'A oferta reúne academias e estúdios, com a renda do agronegócio sustentando o mercado, complementada por dois grandes parques urbanos com academia ao ar livre.',

  destaquesFitness: [
    'Lagoa Grande como epicentro do treino ao ar livre (pista, academia e ciclismo).',
    'Renda do agronegócio, que sustenta um mercado fitness acima da média para o porte.',
    'Dois grandes parques urbanos com academia ao ar livre (Lagoa Grande e Mocambo).',
    'Clima de altitude do cerrado, que condiciona o calendário de treino.',
  ],

  precos: {
    avulsaMin: 65,
    avulsaMax: 155,
    mensalMin: 340,
    mensalMax: 920,
    onlineMin: 170,
    onlineMax: 430,
  },

  conclusao:
    'Princesa do Alto Paranaíba e polo do agro, Patos de Minas tem na Lagoa Grande e no Mocambo seus centros de treino ao ar livre. Um personal trainer ajuda a aproveitá-los com método, ajustando hidratação e horários ao clima seco do cerrado.',

  vizinhas: ['uberlandia-mg', 'uberaba-mg'],

  fontes: [
    { nome: 'IBGE Cidades — Patos de Minas', url: 'https://cidades.ibge.gov.br/brasil/mg/patos-de-minas/panorama' },
    { nome: 'Prefeitura de Patos de Minas', url: 'https://www.patosdeminas.mg.gov.br/' },
    { nome: 'Atlas Brasil — IDHM', url: 'https://www.atlasbrasil.org.br/' },
  ],
  atualizadoEm: '2026-06-29',
};
