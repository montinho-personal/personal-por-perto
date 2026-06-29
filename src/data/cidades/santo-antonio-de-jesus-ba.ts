import type { Cidade } from '../../lib/types';

export const cidade: Cidade = {
  slug: 'santo-antonio-de-jesus-ba',
  nome: 'Santo Antônio de Jesus',
  uf: 'BA',
  estado: 'Bahia',
  estadoSlug: 'bahia',
  regiao: 'Nordeste',
  gentilico: 'santo-antoniense',
  tipo: 'cidade',

  populacao: 103055,
  populacaoAno: 2022,
  idhm: 0.700,
  idhmClasse: 'alto',
  altitudeM: 220,

  resumoEconomico:
    'Conhecida como a capital do Recôncavo, Santo Antônio de Jesus é um dos principais polos comerciais e de serviços do interior baiano, com forte vocação para o varejo e o atacado que atrai consumidores de dezenas de municípios da região. A economia se apoia no comércio, nos serviços, na saúde e na educação, com destaque para o campus de Ciências da Saúde da UFRB.',

  mercado:
    'Por concentrar comércio, saúde e educação para todo o Recôncavo, a cidade reúne uma oferta de academias e estúdios acima do esperado para o seu porte, em geral nos bairros centrais e de classe média. Há cultura crescente de corrida de rua e treino funcional, e a presença universitária (UFRB) ajuda a movimentar a demanda por personal trainers.',

  bairrosNobres: ['Centro', 'Andaiá', 'Jardim Bom Pastor', 'Cajueiro'],
  bairrosPopulares: ['São Benedito', 'Irmã Dulce', 'Sapucaia', 'Maria Preta'],

  parques: [
    {
      nome: 'Praça Padre Mateus (Centro)',
      descricao:
        'Largo central tradicional da cidade, ponto de encontro e de partida de eventos esportivos, usado para caminhada e como referência da vida urbana no Centro.',
    },
    {
      nome: 'Academias da saúde e praças de bairro',
      descricao:
        'A cidade conta com academias ao ar livre instaladas em praças e espaços públicos de bairros, com equipamentos de ginástica gratuitos para a comunidade.',
    },
    {
      nome: 'Entorno do campus da UFRB (Cajueiro)',
      descricao:
        'A área do Centro de Ciências da Saúde, no Cajueiro, e suas avenidas próximas reúnem estudantes e moradores que usam o entorno para caminhada e corrida.',
    },
  ],
  ciclovias:
    'A malha cicloviária ainda é limitada e concentrada em vias do Centro; o ciclismo de lazer costuma acontecer em avenidas mais largas e em saídas pelas rodovias da região nos fins de semana.',

  clima:
    'O clima é tropical quente do Recôncavo Baiano, com temperaturas elevadas o ano todo e chuvas mais frequentes no outono e no inverno (de abril a julho).',
  climaTreino:
    'Pelo calor e pela umidade, o treino ao ar livre rende mais no começo da manhã e no fim da tarde, com hidratação reforçada e atenção ao sol forte nas horas centrais do dia.',

  mobilidade:
    'Santo Antônio de Jesus é um importante entroncamento do Recôncavo, cortada pela BR-101 (que liga a cidade ao litoral sul e ao norte do estado) e por rodovias estaduais que a conectam a Salvador e a Feira de Santana; o deslocamento urbano é feito sobretudo por ônibus, carro e moto.',

  corridas: [
    {
      nome: 'Corrida de Santo Antônio',
      descricao:
        'Prova de rua ligada às festividades do padroeiro da cidade, com percursos para diferentes níveis de corredores.',
    },
    {
      nome: 'Corridas de rua locais',
      descricao:
        'A cidade tem visto surgir novas corridas de rua organizadas por mídias e grupos locais, com largadas no Centro e percursos de 3, 5 e 10 km.',
    },
  ],
  culturaEsportiva:
    'A cultura esportiva mistura a forte tradição do futebol e das festas populares com uma cena de corrida de rua e treino funcional em expansão, impulsionada pela presença universitária e pelo papel da cidade como polo regional do Recôncavo.',
  academias:
    'A oferta de academias e estúdios é boa para uma cidade média do interior baiano e atende também moradores da região, concentrada no Centro e nos bairros de classe média, complementada pelas academias da saúde gratuitas em praças.',

  destaquesFitness: [
    'Capital do Recôncavo e polo comercial e de serviços que concentra academias para toda a região.',
    'Presença da UFRB com campus de Ciências da Saúde, que aquece a demanda por treino e personal.',
    'Cena de corrida de rua em crescimento, com provas largando no Centro.',
    'Clima quente do Recôncavo que pede planejamento de horário e hidratação no treino ao ar livre.',
  ],

  precos: {
    avulsaMin: 45,
    avulsaMax: 110,
    mensalMin: 250,
    mensalMax: 700,
    onlineMin: 115,
    onlineMax: 350,
  },

  conclusao:
    'Como capital do Recôncavo e polo regional de comércio, saúde e educação, Santo Antônio de Jesus tem estrutura crescente para quem quer treinar — de academias e estúdios às academias da saúde nas praças. Um personal trainer ajuda a montar uma rotina segura e eficiente, respeitando o clima quente da região e o seu objetivo.',

  vizinhas: ['feira-de-santana-ba', 'salvador-ba', 'itabuna-ba'],

  fontes: [
    { nome: 'IBGE Cidades — Santo Antônio de Jesus', url: 'https://cidades.ibge.gov.br/brasil/ba/santo-antonio-de-jesus/panorama' },
    { nome: 'Prefeitura de Santo Antônio de Jesus', url: 'https://www.saj.ba.gov.br/' },
    { nome: 'Atlas Brasil — IDHM', url: 'https://www.atlasbrasil.org.br/perfil/municipio/292870' },
  ],
  atualizadoEm: '2026-06-29',
};
