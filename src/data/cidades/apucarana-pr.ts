import type { Cidade } from '../../lib/types';

export const cidade: Cidade = {
  slug: 'apucarana-pr',
  nome: 'Apucarana',
  uf: 'PR',
  estado: 'Paraná',
  estadoSlug: 'parana',
  regiao: 'Sul',
  gentilico: 'apucaranense',
  tipo: 'cidade',

  populacao: 130134,
  populacaoAno: 2022,
  idhm: 0.748,
  idhmClasse: 'alto',

  resumoEconomico:
    'No norte do Paraná, Apucarana é oficialmente a "Capital Nacional do Boné" — um dos maiores polos de confecção de bonés do país, com milhares de empresas e cerca de 20 mil empregos no setor. A economia é também forte em confecções têxteis e comércio.',

  mercado:
    'Cidade média industrial com tradição esportiva forte (corridas de rua de massa), o que favorece o treinamento de corrida, as assessorias e as academias.',

  bairrosNobres: ['Centro', 'Jardim Ponta Grossa', 'Vila Nova', 'Jardim Colonial'],
  bairrosPopulares: ['Dom Romeu Alberti', 'João Paulo', 'Afonso Camargo', 'Jardim Ulysses Guimarães'],

  parques: [
    {
      nome: 'Parque Municipal Jaboti (Lago Jaboti)',
      descricao:
        'Cerca de 230 mil m², com pista de caminhada de 3 km iluminada, academia ao ar livre, playground e ciclovia — cartão-postal da cidade.',
    },
    {
      nome: 'Parque da Raposa',
      descricao:
        'Espaço público citado pela prefeitura como local de corridas e atividades.',
    },
    {
      nome: 'Ciclovia do Bonezão',
      descricao:
        'Liga o Monumento ao Boné à área universitária, com quase 3 km usados para pedal e caminhada.',
    },
  ],
  ciclovias:
    'Há ciclovia de quase 3 km (Bonezão–área universitária), além da ciclovia interna do Parque Jaboti.',

  clima:
    'O clima é subtropical do norte do Paraná, mais ameno que o extremo sul, com verões quentes e invernos amenos.',
  climaTreino:
    'O treino ao ar livre é viável quase o ano todo, com atenção ao calor no verão.',

  mobilidade:
    'Apucarana é servida pela BR-376 (Rodovia do Café) e pela PR-444 (eixo Apucarana–Arapongas–Maringá).',

  corridas: [
    {
      nome: 'Prova Pedestre 28 de Janeiro',
      descricao:
        'Corrida de rua tradicional ligada ao aniversário da cidade, que reúne milhares de atletas.',
    },
    {
      nome: 'Circuito municipal de corridas',
      descricao:
        'Provas em vários pontos (Centro, Parque Jaboti e Parque da Raposa), via política municipal de incentivo às corridas.',
    },
  ],
  culturaEsportiva:
    'Apucarana é cidade-referência em corridas de rua, com a Prova 28 de Janeiro como tradição que mobiliza milhares de atletas e movimenta a economia local.',
  academias:
    'A oferta reúne academias e estúdios, com base industrial e operária ampla, e tem no Lago Jaboti o principal polo de treino ao ar livre.',

  destaquesFitness: [
    'Lago Jaboti: pista de 3 km iluminada, academia ao ar livre e ciclovia.',
    'Tradição forte de corrida de rua (Prova 28 de Janeiro, com milhares de atletas).',
    'Ciclovia urbana de quase 3 km (Bonezão).',
    'Identidade "Capital do Boné": base industrial com público amplo.',
  ],

  precos: {
    avulsaMin: 60,
    avulsaMax: 150,
    mensalMin: 320,
    mensalMax: 880,
    onlineMin: 160,
    onlineMax: 420,
  },

  conclusao:
    'Capital do Boné e referência em corrida de rua, Apucarana tem no Lago Jaboti um polo de treino completo. Um personal trainer ajuda a aproveitar a pista iluminada e a forte cultura de corrida da cidade com método.',

  vizinhas: ['londrina-pr', 'maringa-pr'],

  fontes: [
    { nome: 'IBGE Cidades — Apucarana', url: 'https://cidades.ibge.gov.br/brasil/pr/apucarana/panorama' },
    { nome: 'Prefeitura de Apucarana', url: 'https://www.apucarana.pr.gov.br/' },
    { nome: 'Atlas Brasil — IDHM', url: 'https://www.atlasbrasil.org.br/' },
  ],
  atualizadoEm: '2026-07-30',
  capaArte: {
    src: '/capas-cidade/apucarana-pr.webp',
    w: 1200,
    h: 849,
    alt:
      'Personal trainer em Apucarana (PR) em arte que une treino funcional e a silhueta da Catedral Nossa Senhora de Lourdes, marco triangular da cidade — Personal por Perto',
    legenda:
      'Treino personalizado em Apucarana: um plano feito para o seu corpo e a sua rotina, com acompanhamento profissional na cidade e região.',
  },
};
