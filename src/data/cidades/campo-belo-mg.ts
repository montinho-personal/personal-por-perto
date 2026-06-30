import type { Cidade } from '../../lib/types';

export const cidade: Cidade = {
  slug: 'campo-belo-mg',
  nome: 'Campo Belo',
  uf: 'MG',
  estado: 'Minas Gerais',
  estadoSlug: 'minas-gerais',
  regiao: 'Sudeste',
  gentilico: 'campo-belense',
  tipo: 'cidade',

  populacao: 52277,
  populacaoAno: 2022,
  idhm: 0.711,
  idhmClasse: 'alto',
  altitudeM: 841,

  resumoEconomico:
    'No entroncamento entre o Centro-Oeste e o Sul de Minas, Campo Belo é cidade-polo de sua região imediata e reconhecida como importante centro de atração agropecuária. A economia combina comércio e serviços fortes — que abastecem os municípios vizinhos —, indústria de transformação com tradição em confecção e calçados, e um agronegócio robusto, com destaque para a pecuária leiteira, a pecuária de corte e a produção de café. A passagem da ferrovia marcou a formação da cidade e seu antigo conjunto ferroviário é patrimônio local.',

  mercado:
    'Por ser uma cidade média que funciona como referência de comércio e serviços para o entorno, Campo Belo reúne um mercado fitness em crescimento, formado por academias de musculação e treino funcional e por profissionais autônomos. A procura por personal trainers tende a vir de quem busca acompanhamento individual, retomada de atividade física e treino voltado à saúde no dia a dia.',

  bairrosNobres: ['Centro', 'Niterói', 'Loanda', 'Santa Cruz'],
  bairrosPopulares: ['São Benedito', 'Cruzeiro', 'Nossa Senhora Aparecida', 'Belém'],

  parques: [
    {
      nome: 'Praça Cônego Ulisses',
      descricao:
        'Uma das praças mais amplas e arborizadas da região, no coração da cidade, com jardins, bancos e sombra; abriga a Velha Matriz e é o ponto mais usado para caminhada leve e encontros ao ar livre no Centro.',
    },
    {
      nome: 'Praça da Estação',
      descricao:
        'Espaço ligado ao antigo conjunto ferroviário, onde funciona o museu e arquivo público no prédio histórico da estação; o entorno serve de passagem e área de convívio para quem caminha pelo Centro.',
    },
    {
      nome: 'Praça dos Expedicionários',
      descricao:
        'Outra das praças centrais da cidade, integra o conjunto de áreas verdes urbanas usadas para caminhada e lazer em ritmo tranquilo.',
    },
  ],
  ciclovias:
    'A estrutura cicloviária é modesta e concentrada em trechos da área urbana; boa parte do pedal e da corrida acontece nas vias da cidade e em estradas vicinais do entorno rural.',

  clima:
    'O clima é tropical de altitude (Cwa de Köppen), com verão úmido e quente e inverno seco e mais frio, e temperatura média anual em torno de 23 °C. A altitude próxima dos 840 metros ajuda a amenizar o calor, e as noites de inverno costumam ser frias e secas.',
  climaTreino:
    'O verão chuvoso pede atenção às pancadas de chuva no fim da tarde e à hidratação nos dias mais quentes; o inverno seco favorece o treino ao ar livre, com manhãs frias que pedem aquecimento mais cuidadoso antes de correr ou pedalar.',

  mobilidade:
    'Campo Belo é um entroncamento rodoviário do Centro-Oeste/Sul de Minas, cortado pelas BRs 354 e 369 e ligado à Rodovia Fernão Dias (BR-381) por acessos em municípios vizinhos. O transporte urbano é feito por ônibus, e a Ferrovia Centro-Atlântica mantém seus trilhos pela cidade, hoje dedicados ao transporte de cargas.',

  corridas: [
    {
      nome: 'Corrida Alterosa',
      descricao:
        'Prova de corrida de rua realizada em Campo Belo, com percursos de 10 km e meia maratona, que reúne corredores da cidade e da região.',
    },
  ],
  culturaEsportiva:
    'A cultura esportiva se apoia no uso das praças centrais para caminhada e lazer, nas academias de bairro e em provas de corrida de rua que movimentam a comunidade local, num ambiente de cidade média do interior mineiro.',
  academias:
    'A oferta é formada principalmente por academias locais de musculação e treino funcional, distribuídas pelo Centro e pelos bairros residenciais, com porte compatível com uma cidade-polo de comércio e serviços do interior de Minas.',

  destaquesFitness: [
    'Cidade-polo de comércio e serviços do Centro-Oeste/Sul de Minas, com mercado fitness em crescimento.',
    'Praças centrais arborizadas, como a Praça Cônego Ulisses, usadas para caminhada e lazer ao ar livre.',
    'Clima tropical de altitude, com inverno seco favorável ao treino ao ar livre e verão úmido.',
    'Economia ligada à pecuária leiteira, ao agronegócio e à indústria de confecção e calçados.',
  ],

  precos: {
    avulsaMin: 50,
    avulsaMax: 120,
    mensalMin: 260,
    mensalMax: 720,
    onlineMin: 120,
    onlineMax: 360,
  },

  conclusao:
    'Cidade-polo de altitude no encontro do Centro-Oeste com o Sul de Minas, Campo Belo combina praças arborizadas, clima ameno e uma rotina de comércio e serviços que favorece a prática de atividade física. Um personal trainer ajuda a organizar o treino conforme os objetivos, aproveitar o inverno seco para a atividade ao ar livre e manter a constância ao longo do ano.',

  vizinhas: ['lavras-mg', 'formiga-mg'],

  fontes: [
    { nome: 'IBGE Cidades — Campo Belo', url: 'https://cidades.ibge.gov.br/brasil/mg/campo-belo/panorama' },
    { nome: 'Prefeitura de Campo Belo', url: 'https://www.campobelo.mg.gov.br/' },
    { nome: 'Atlas Brasil — IDHM', url: 'https://www.atlasbrasil.org.br/' },
  ],
  atualizadoEm: '2026-06-29',
};
