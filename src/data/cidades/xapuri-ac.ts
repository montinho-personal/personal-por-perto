import type { Cidade } from '../../lib/types';

export const cidade: Cidade = {
  slug: 'xapuri-ac',
  nome: 'Xapuri',
  uf: 'AC',
  estado: 'Acre',
  estadoSlug: 'acre',
  regiao: 'Norte',
  gentilico: 'xapuriense',
  tipo: 'cidade',

  populacao: 18243,
  populacaoAno: 2022,
  idhm: 0.599,
  idhmClasse: 'baixo',
  altitudeM: 150,

  resumoEconomico:
    'No sudeste do Acre, na confluência dos rios Acre e Xapuri, o município é conhecido mundialmente como o palco da luta dos seringueiros liderada por Chico Mendes, assassinado ali em dezembro de 1988. A economia segue apoiada no extrativismo — Xapuri figura entre os maiores produtores de castanha-do-brasil e de látex do Acre — além da agropecuária e do comércio local. Ao lado da cidade está a Reserva Extrativista Chico Mendes, a maior reserva extrativista do Brasil, que sustenta o modo de vida de milhares de famílias seringueiras e dá ao município relevância histórica e ambiental que atrai turismo de memória.',

  mercado:
    'Como cidade pequena do interior amazônico, Xapuri tem um mercado fitness bastante enxuto, formado por poucas academias locais de musculação e treino funcional. A procura por personal trainers é pontual e cresce entre quem busca acompanhamento próximo para treinar com segurança no calor e na umidade da região, muitas vezes combinando o treino com o uso da praça central e da beira-rio.',

  bairrosNobres: ['Centro', 'Cerâmica', 'São José'],
  bairrosPopulares: ['Sibéria', 'Laranjal', 'Hermínio de Melo', 'Constantino Melo Sarkis'],

  parques: [
    {
      nome: 'Praça São Sebastião',
      descricao:
        'Arborizada e situada às margens do rio Acre, em frente à foz do rio Xapuri, é o principal espaço público da cidade, usado para caminhada, encontros e para observar o encontro dos dois rios.',
    },
    {
      nome: 'Praia do Rio Acre',
      descricao:
        'No verão amazônico, quando o nível do rio Acre baixa, surgem praias fluviais de areia que se tornam o principal ponto de lazer da população e de banhistas, funcionando também como espaço informal de caminhada e atividade ao ar livre.',
    },
    {
      nome: 'Reserva Extrativista Chico Mendes',
      descricao:
        'A maior reserva extrativista do país fica no entorno do município e é referência mundial da luta ambiental liderada por Chico Mendes; suas estradas vicinais e ramais de seringueiros marcam a paisagem rural de Xapuri, embora seu uso principal siga sendo o extrativismo, e não o esporte.',
    },
  ],
  ciclovias:
    'Não há infraestrutura cicloviária estruturada; o deslocamento de bicicleta e a caminhada acontecem nas ruas do Centro e nos trechos que vêm sendo pavimentados na área urbana.',

  clima:
    'O clima é equatorial, quente e úmido o ano todo, com temperaturas médias entre 24 °C e 27 °C e chuvas abundantes, próximas de 2.100 mm anuais. Há uma estação seca mais definida entre junho e agosto, período em que também pode ocorrer a friagem, queda brusca e passageira de temperatura provocada por massas de ar frio vindas do Sul.',
  climaTreino:
    'O calor constante e a umidade elevada pedem treino nas horas mais frescas, de manhã cedo ou no fim da tarde, com hidratação reforçada; a estação seca, de junho a agosto, costuma oferecer as condições mais estáveis para atividade ao ar livre.',

  mobilidade:
    'Xapuri fica a cerca de 12 km da BR-317, a Estrada do Pacífico, que liga a cidade a Rio Branco (cerca de 187 km a leste) e à fronteira com a Bolívia em Brasiléia (cerca de 74 km a oeste). Dentro do município, ramais e estradas vicinais dão acesso aos seringais e colônias da zona rural e da Reserva Extrativista Chico Mendes, enquanto o deslocamento urbano é feito principalmente a pé, de moto e de carro, com ruas que vêm recebendo pavimentação nos últimos anos.',

  corridas: [],
  culturaEsportiva:
    'A vida esportiva e de lazer gira em torno do futebol amador, da Praça São Sebastião e, no verão amazônico, das praias que se formam no rio Acre quando o nível da água baixa — ponto de encontro para banho, caminhada e convivência da população local.',
  academias:
    'A oferta é pequena, restrita a poucas academias locais de musculação e treino funcional no Centro, compatível com o porte de um município de cerca de 18 mil habitantes.',

  destaquesFitness: [
    'Cidade da luta dos seringueiros liderada por Chico Mendes, assassinado em Xapuri em 1988.',
    'Vizinha da Reserva Extrativista Chico Mendes, a maior reserva extrativista do Brasil.',
    'Praça São Sebastião e as praias fluviais do rio Acre como espaços de lazer e caminhada no verão amazônico.',
    'Clima equatorial quente e úmido, que exige cuidado com horário e hidratação no treino.',
  ],

  precos: {
    avulsaMin: 40,
    avulsaMax: 95,
    mensalMin: 200,
    mensalMax: 580,
    onlineMin: 100,
    onlineMax: 300,
  },

  conclusao:
    'Pequena, histórica e cercada pela floresta, Xapuri pede um treino ajustado ao calor equatorial e que aproveite a Praça São Sebastião e a beira-rio como espaços de caminhada. Um personal trainer ajuda a organizar a rotina de treino respeitando o clima local, escolhendo os melhores horários e mantendo a constância em uma cidade onde a oferta de academias ainda é reduzida.',

  vizinhas: ['rio-branco-ac', 'brasileia-ac'],

  fontes: [
    { nome: 'IBGE Cidades — Xapuri', url: 'https://cidades.ibge.gov.br/brasil/ac/xapuri/panorama' },
    { nome: 'Prefeitura de Xapuri', url: 'https://www.xapuri.ac.gov.br/' },
    { nome: 'Atlas Brasil — IDHM', url: 'https://www.atlasbrasil.org.br/' },
  ],
  atualizadoEm: '2026-07-02',
};
