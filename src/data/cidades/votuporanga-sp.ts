import type { Cidade } from '../../lib/types';

export const cidade: Cidade = {
  slug: 'votuporanga-sp',
  nome: 'Votuporanga',
  uf: 'SP',
  estado: 'São Paulo',
  estadoSlug: 'sao-paulo',
  regiao: 'Sudeste',
  gentilico: 'votuporanguense',
  tipo: 'cidade',

  populacao: 96634,
  populacaoAno: 2022,
  idhm: 0.790,
  idhmClasse: 'alto',
  altitudeM: 525,

  resumoEconomico:
    'Conhecida como a "Cidade Boa", Votuporanga é um centro de referência no noroeste paulista e abriga um dos maiores polos moveleiros do estado de São Paulo fora da capital. A economia combina a forte indústria do mobiliário e da metalurgia com um comércio e um setor de serviços robustos, que atendem a uma ampla região do entorno e sustentam uma classe média de bom poder aquisitivo.',

  mercado:
    'O perfil industrial e comercial de Votuporanga gera um público de classe média que valoriza qualidade de vida e bem-estar. A cidade tem uma agenda esportiva ativa, com corridas de rua tradicionais e bons espaços públicos para treino, o que sustenta uma demanda consistente por academias, estúdios e personal trainers, especialmente nos bairros de maior renda.',

  bairrosNobres: ['Vila América', 'Patrimônio Novo', 'Jardim Alvorada', 'Vila Marin'],
  bairrosPopulares: ['Pozzobon', 'Estação', 'Parque Residencial Colinas', 'Jardim Santa Felícia'],

  parques: [
    {
      nome: 'Cidade Pacífica',
      descricao:
        'Complexo de lazer com lago, pista de caminhada e áreas verdes, um dos cartões-postais da cidade e ponto tradicional para treino ao ar livre, corrida e atividades em família.',
    },
    {
      nome: 'Represa Municipal',
      descricao:
        'Reservatório histórico inaugurado em 1970, com entorno arborizado utilizado para caminhadas e lazer, além de abastecer parte do consumo de água da cidade.',
    },
    {
      nome: 'Parque da Cultura',
      descricao:
        'Complexo cultural e de lazer na Avenida Ângelo Bimbato, com biblioteca, cinema e amplas áreas abertas — palco de eventos e de provas de corrida de rua como a RUN AVOA.',
    },
  ],
  ciclovias:
    'Votuporanga é uma cidade de relevo suave e tem ciclofaixas e trechos de ciclovia em avenidas e no entorno de seus espaços de lazer, integrando deslocamento e atividade física ao ar livre.',

  clima:
    'O clima é tropical, quente e seco no inverno, típico do noroeste paulista. Os verões são muito quentes e úmidos, e a cidade é conhecida pelas altas temperaturas durante boa parte do ano.',
  climaTreino:
    'O calor intenso pede atenção redobrada à hidratação e à escolha de horários: o treino ao ar livre rende mais no início da manhã ou no fim da tarde, evitando o sol forte do meio-dia, sobretudo no verão.',

  mobilidade:
    'A cidade é servida pela Rodovia Euclides da Cunha (SP-320), principal eixo de ligação do noroeste paulista, e os deslocamentos internos se dão predominantemente por carro, moto e ônibus, com distâncias curtas favorecidas pelo porte médio do município.',

  corridas: [
    {
      nome: 'RUN AVOA',
      descricao:
        'Corrida de rua tradicional realizada no Parque da Cultura, que reúne atletas locais e da região em um dos principais eventos do calendário esportivo da cidade.',
    },
    {
      nome: 'Volta Ciclística Internacional do Estado de São Paulo (passagem por Votuporanga)',
      descricao:
        'Etapa de ciclismo de alto rendimento que utiliza a Rodovia Euclides da Cunha, reforçando a vocação da cidade para eventos esportivos.',
    },
  ],
  culturaEsportiva:
    'Votuporanga tem cultura esportiva consolidada, com corridas de rua tradicionais, eventos de ciclismo e bons espaços públicos para atividade física, como a Cidade Pacífica e o Parque da Cultura. O ritmo de cidade média do interior favorece uma rotina mais ativa ao ar livre.',
  academias:
    'A oferta de academias e estúdios é boa para o porte do município, concentrada nas avenidas centrais e nos bairros de maior renda, e bem complementada pelos espaços ao ar livre da Cidade Pacífica e do Parque da Cultura.',

  destaquesFitness: [
    'Um dos maiores polos moveleiros do estado, com classe média de bom poder aquisitivo.',
    'Cidade Pacífica e Parque da Cultura como espaços centrais de treino ao ar livre.',
    'Calendário ativo de corridas de rua (RUN AVOA) e ciclismo.',
    'Cidade de porte médio e relevo suave, favorável a caminhadas e bike.',
  ],

  precos: {
    avulsaMin: 55,
    avulsaMax: 120,
    mensalMin: 270,
    mensalMax: 720,
    onlineMin: 130,
    onlineMax: 360,
  },

  conclusao:
    'Polo moveleiro e centro regional do noroeste paulista, Votuporanga combina boa qualidade de vida, espaços de lazer ao ar livre e uma agenda esportiva ativa. Um personal trainer ajuda a aproveitar a Cidade Pacífica e o Parque da Cultura com um plano que respeite o calor característico da região e acelere os resultados.',

  vizinhas: ['sao-jose-do-rio-preto-sp', 'aracatuba-sp', 'barretos-sp'],

  fontes: [
    { nome: 'IBGE Cidades — Votuporanga', url: 'https://cidades.ibge.gov.br/brasil/sp/votuporanga/panorama' },
    { nome: 'Prefeitura de Votuporanga', url: 'https://www.votuporanga.sp.gov.br/' },
    { nome: 'Atlas Brasil — IDHM', url: 'https://www.atlasbrasil.org.br/' },
  ],
  atualizadoEm: '2026-06-29',
};
