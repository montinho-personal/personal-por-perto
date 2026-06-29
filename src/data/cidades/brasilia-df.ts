import type { Cidade } from '../../lib/types';

export const cidade: Cidade = {
  slug: 'brasilia-df',
  nome: 'Brasília',
  uf: 'DF',
  estado: 'Distrito Federal',
  estadoSlug: 'distrito-federal',
  regiao: 'Centro-Oeste',
  gentilico: 'brasiliense',
  tipo: 'cidade',

  populacao: 2817381,
  populacaoAno: 2022,
  idhm: 0.824,
  idhmClasse: 'muito alto',
  altitudeM: 1172,

  resumoEconomico:
    'Capital do país e patrimônio mundial pela arquitetura modernista, Brasília tem economia dominada por serviços e administração pública — que respondem por cerca de 95% da atividade do Distrito Federal — e um dos maiores PIBs municipais do Brasil. A grande presença de servidores públicos federais sustenta a maior renda per capita entre as unidades da federação e um público de alto poder aquisitivo, atento à qualidade de vida.',

  mercado:
    'O mercado fitness de Brasília é robusto e de alto padrão. As grandes redes (Smart Fit, Bodytech, Bio Ritmo) convivem com estúdios boutique no Plano Piloto, no Lago Sul e em Águas Claras. Some-se a isso uma cultura forte de corrida de rua e treino ao ar livre, favorecida pelo clima seco e pelos grandes parques, e o resultado é uma demanda elevada por personal trainers e assessorias esportivas.',

  bairrosNobres: ['Lago Sul', 'Lago Norte', 'Asa Sul', 'Sudoeste', 'Park Way'],
  bairrosPopulares: ['Ceilândia', 'Samambaia', 'Planaltina', 'Santa Maria'],

  parques: [
    {
      nome: 'Parque da Cidade Dona Sarah Kubitschek',
      descricao:
        'O maior parque urbano da América do Sul (cerca de 420 hectares), com circuitos de caminhada e corrida de 4 km, 6 km e 10 km, ciclovia exclusiva de quase 10 km, bebedouros e áreas sombreadas. É o grande hub de treino gratuito da cidade.',
    },
    {
      nome: 'Eixão aos domingos e feriados',
      descricao:
        'Nos domingos e feriados, o Eixão é fechado para carros e se transforma em um corredor de lazer de quilômetros para corrida, caminhada e ciclismo — uma "academia a céu aberto".',
    },
    {
      nome: 'Orla do Lago Paranoá (Pontão e calçadões)',
      descricao:
        'Reúne academia ao ar livre, pistas de caminhada e prática de esportes aquáticos como remo e stand-up paddle, nos calçadões do Lago Sul e do Lago Norte.',
    },
  ],
  ciclovias:
    'O Distrito Federal tem uma das maiores malhas cicloviárias do país — centenas de quilômetros, com o Plano Piloto concentrando cerca de 140 km — e programas de incentivo ao uso da bicicleta no dia a dia.',

  clima:
    'O clima é tropical de altitude, com estação seca marcante de maio a setembro, quando a umidade do ar cai a níveis muito baixos. A cidade fica a cerca de 1.172 m de altitude, em relevo plano de cerrado.',
  climaTreino:
    'O clima ameno favorece o treino ao ar livre o ano todo, mas, no auge da seca, a hidratação precisa ser reforçada e vale priorizar o início da manhã ou o fim da tarde, com atenção às vias respiratórias.',

  mobilidade:
    'Brasília tem Metrô-DF (cerca de 42 km e 27 estações, em formato "Y") e o BRT Expresso DF, além de grandes eixos viários como o Eixão e o Eixo Monumental. É uma cidade planejada e boa para o deslocamento de carro, mas com distâncias longas entre as regiões administrativas — o que valoriza treinar perto de casa ou no formato online.',

  corridas: [
    {
      nome: 'Maratona Brasília',
      descricao:
        'Prova tradicional com percursos de 5 km, 10 km, 21 km e 42 km pelo Plano Piloto, aproveitando as longas avenidas planas da capital.',
    },
    {
      nome: 'Circuito das Estações e provas de rua',
      descricao:
        'A agenda do corredor brasiliense é intensa, com etapas de circuitos nacionais e provas populares de 5 km, 10 km e 21 km ao longo do ano.',
    },
  ],
  culturaEsportiva:
    'Brasília tem uma cultura forte de corrida de rua e ciclismo, impulsionada pelos grandes parques, pelos eixos fechados aos domingos e pelo clima seco. O público de alta renda sustenta uma ampla rede de assessorias esportivas e personal trainers, do iniciante ao corredor avançado.',
  academias:
    'A oferta é completa: grandes redes (Smart Fit, Bodytech, Bio Ritmo) e estúdios boutique de alto custo concentrados no Plano Piloto, no Lago Sul e em Águas Claras, com forte presença também de crossfit, funcional e pilates.',

  destaquesFitness: [
    'Parque da Cidade: o maior parque urbano da América do Sul, com circuitos medidos.',
    'Eixão fechado aos domingos vira uma "academia a céu aberto" de quilômetros.',
    'Público de altíssimo poder aquisitivo (Lago Sul, Sudoeste) para personal e estúdios premium.',
    'Clima seco e relevo plano: condições ideais para corrida e ciclismo o ano todo.',
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
    'Brasília reúne tudo o que um bom treino pede: clima favorável, parques de sobra e um público que leva a saúde a sério. Com um personal trainer alinhado ao seu objetivo, fica fácil aproveitar a infraestrutura da capital — do Parque da Cidade ao Eixão de domingo — e manter a constância ao longo do ano.',

  vizinhas: ['goiania-go', 'palmas-to', 'belo-horizonte-mg'],

  fontes: [
    { nome: 'IBGE Cidades — Brasília/DF', url: 'https://cidades.ibge.gov.br/brasil/df/brasilia/panorama' },
    { nome: 'Agência Brasília', url: 'https://www.agenciabrasilia.df.gov.br/' },
    { nome: 'Atlas Brasil — IDHM', url: 'https://www.atlasbrasil.org.br/' },
  ],
  atualizadoEm: '2026-06-29',
};
