import type { Cidade } from '../../lib/types';

export const cidade: Cidade = {
  slug: 'buzios-rj',
  nome: 'Búzios',
  uf: 'RJ',
  estado: 'Rio de Janeiro',
  estadoSlug: 'rio-de-janeiro',
  regiao: 'Sudeste',
  gentilico: 'buziano',
  tipo: 'cidade',

  populacao: 40006,
  populacaoAno: 2022,
  idhm: 0.728,
  idhmClasse: 'alto',

  resumoEconomico:
    'Oficialmente Armação dos Búzios, na Região dos Lagos, é o destino turístico de luxo mais cosmopolita do estado, com fama internacional desde a passagem de Brigitte Bardot nos anos 1960. A economia é quase inteiramente baseada no turismo de alto padrão — 23 praias, a Rua das Pedras e pousadas de charme —, com forte sazonalidade e alta renda turística o ano todo.',

  mercado:
    'O mercado é consolidado para o porte da cidade, com redes e estúdios na faixa central e em Manguinhos; o público de alta renda e os turistas favorecem o personal trainer e o treino outdoor e náutico.',

  bairrosNobres: ['Geribá', 'João Fernandes', 'Centro', 'Ferradura'],
  bairrosPopulares: ['Rasa', 'Manguinhos', 'Baía Formosa', 'Cem Braças'],

  parques: [
    {
      nome: 'Orla Bardot / Praia da Armação',
      descricao:
        'Calçadão à beira-mar com decks e bancos, ideal para caminhada e corrida e ponto de stand-up paddle e vela.',
    },
    {
      nome: 'Praia de Geribá',
      descricao:
        'A praia mais movimentada, com ondas para surfe, corrida na areia e treino funcional.',
    },
    {
      nome: 'Praia da Ferradura',
      descricao:
        'Águas calmas e cristalinas, ideais para SUP, natação e treino de baixo impacto.',
    },
  ],
  ciclovias:
    'Não há ciclovia urbana estruturada confirmada em fonte oficial.',

  clima:
    'O clima é litorâneo quente, com sol o ano todo e ventos constantes, favoráveis aos esportes náuticos.',
  climaTreino:
    'O calor e a radiação intensos pedem treino cedo de manhã ou no fim de tarde, com hidratação; o vento e as praias favorecem o treino outdoor e o cross-training náutico.',

  mobilidade:
    'O acesso se dá pela RJ-106 (Rodovia Amaral Peixoto) com conexão pela RJ-102 (Estrada dos Búzios); o trânsito congestiona muito no verão.',

  corridas: [
    {
      nome: 'XC Run Búzios',
      descricao:
        'Tradicional corrida de aventura, com percursos de até 42 km por trilhas, estradas de terra, pedras e praias.',
    },
    {
      nome: 'XTERRA Búzios',
      descricao:
        'Prova de triatlo cross/off-road, ao lado de eventos de vela como a Búzios Sailing Week.',
    },
  ],
  culturaEsportiva:
    'Há forte cultura náutica e outdoor — surfe em Geribá, kitesurf na Rasa e Manguinhos, stand-up paddle na Ferradura e vela —, com festivais e provas de aventura consolidados.',
  academias:
    'A oferta reúne redes e estúdios na faixa central e em Manguinhos, com as praias e a Orla Bardot funcionando como academia a céu aberto.',

  destaquesFitness: [
    'Público de alta renda e turistas internacionais — personal training premium.',
    'Cenário ideal para treino outdoor: praias, Orla Bardot e modalidades náuticas.',
    'Forte sazonalidade, com pico no verão e oportunidade de pacotes para turistas.',
    'Polo de esportes de aventura (XC Run, XTERRA), que atrai público de endurance.',
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
    'Destino de luxo da Região dos Lagos, Búzios une praias, esportes náuticos e público internacional. Um personal trainer ajuda a aproveitar a Orla Bardot e Geribá com método, ajustando horários e hidratação ao sol e ao vento do litoral.',

  vizinhas: ['cabo-frio-rj', 'marica-rj'],

  fontes: [
    { nome: 'IBGE Cidades — Armação dos Búzios', url: 'https://cidades.ibge.gov.br/brasil/rj/armacao-dos-buzios/panorama' },
    { nome: 'Prefeitura de Búzios', url: 'https://www.buzios.rj.gov.br/' },
    { nome: 'Atlas Brasil — IDHM', url: 'https://www.atlasbrasil.org.br/' },
  ],
  atualizadoEm: '2026-06-29',
};
