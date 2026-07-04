import type { Cidade } from '../../lib/types';

export const cidade: Cidade = {
  slug: 'cravinhos-sp',
  nome: 'Cravinhos',
  uf: 'SP',
  estado: 'São Paulo',
  estadoSlug: 'sao-paulo',
  regiao: 'Sudeste',
  gentilico: 'cravinhense',
  tipo: 'cidade',

  populacao: 33281,
  populacaoAno: 2022,
  idhm: 0.756,
  idhmClasse: 'alto',
  altitudeM: 788,

  resumoEconomico:
    'Cravinhos fica a cerca de 23 km de Ribeirão Preto, às margens da Rodovia Anhanguera (SP-330), e integra a Região Metropolitana de Ribeirão Preto. A economia é marcada pela agroindústria sucroalcooleira — a cidade é fornecedora de cana-de-açúcar para usinas da região e sedia a matriz do Grupo Pedra Agroindustrial, tradicional grupo do setor fundado ali em 1931, embora as usinas do grupo operem em municípios vizinhos. Some-se a isso indústrias instaladas por causa da localização estratégica na Anhanguera, como fabricantes de móveis, pallets e equipamentos para a agroindústria canavieira, além do comércio impulsionado pela proximidade com a capital regional.',

  mercado:
    'Por estar colada a Ribeirão Preto, Cravinhos tem um mercado fitness de cidade satélite: academias de bairro e estúdios atendem a demanda local, enquanto parte dos moradores também recorre a estruturas maiores da capital regional. A renda ligada à agroindústria e ao comércio sustenta a procura por acompanhamento personalizado, com destaque para o atendimento domiciliar e o treino ao ar livre no parque ecológico da cidade.',

  bairrosNobres: ['Centro', 'Jardim Paulista', 'Jardim Botânico', 'Alto das Acácias'],
  bairrosPopulares: ['Jardim Itapuã', 'COHAB Francisco Castilho', 'Vila Santa Cecília', 'Sumaré'],

  parques: [
    {
      nome: 'Parque Ecológico Municipal Dr. Renato e Armando Pagano',
      descricao:
        'O principal espaço de lazer da cidade, no Jardim das Acácias, reúne quatro lagoas, cachoeira, ciclovia, playground e pista pavimentada usada para caminhada e corrida, além de academia ao ar livre distribuída pelo entorno das lagoas. Entrada gratuita, aberto diariamente das 5h às 22h.',
    },
    {
      nome: 'Praças do Centro',
      descricao:
        'Praças arborizadas na região central servem de ponto de encontro e de apoio para caminhada e alongamento nos horários mais frescos do dia.',
    },
  ],
  ciclovias:
    'A ciclovia mais estruturada da cidade fica dentro do Parque Ecológico Dr. Renato e Armando Pagano; fora dele, a malha cicloviária urbana é limitada, e boa parte do deslocamento de bicicleta acontece nas vias locais.',

  clima:
    'O clima é tropical de altitude, com verão quente e chuvoso e inverno seco e ameno, o padrão típico da região de Ribeirão Preto. A altitude de quase 800 m suaviza um pouco o calor em relação a cidades mais baixas do entorno, mas as tardes de verão ainda podem ser bem quentes.',
  climaTreino:
    'O inverno seco (de abril a agosto) costuma ser o período mais agradável para treinar ao ar livre, enquanto no verão o ideal é buscar o início da manhã ou o fim da tarde no Parque Ecológico, com atenção redobrada à hidratação.',

  mobilidade:
    'Cravinhos está a cerca de 23 km de Ribeirão Preto pela Rodovia Anhanguera (SP-330), principal eixo de acesso e de ligação com a capital regional, onde parte dos moradores trabalha e estuda. O território do município também faz divisa com o trajeto da Rodovia Antônio Machado Sant\'Anna (SP-255), que liga Ribeirão Preto a Araraquara passando pela região de Luís Antônio. O transporte coletivo urbano é feito por ônibus, e o Terminal Rodoviário conecta a cidade a Ribeirão Preto e a outros municípios da região.',

  corridas: [
    {
      nome: 'Sunset Run',
      descricao:
        'Corrida de rua com percursos de 5 km e 10 km em asfalto plano, com largada e chegada no Santa Maria Outlet, às margens da Rodovia Anhanguera, em Cravinhos. O evento é tradicional na região de Ribeirão Preto e costuma ocorrer ao entardecer, dentro do Residencial Fazenda Santa Maria.',
    },
  ],
  culturaEsportiva:
    'A cultura esportiva local gira em torno do Parque Ecológico municipal, usado diariamente para caminhada, corrida e ginástica ao ar livre, e da proximidade com Ribeirão Preto, cujo calendário de corridas de rua e eventos esportivos também atrai moradores de Cravinhos.',
  academias:
    'A oferta é formada por academias de bairro e estúdios de porte médio, típicos de uma cidade satélite de região metropolitana, complementada por personal trainers que atendem em domicílio e em condomínios.',

  destaquesFitness: [
    'Parque Ecológico Dr. Renato e Armando Pagano, com pista de caminhada/corrida, ciclovia e academia ao ar livre gratuita.',
    'Cidade satélite da Região Metropolitana de Ribeirão Preto, a cerca de 23 km pela Rodovia Anhanguera.',
    'Sunset Run, corrida de rua de 5 km e 10 km sediada no Santa Maria Outlet, às margens da Anhanguera.',
    'Economia apoiada na agroindústria sucroalcooleira, sede do Grupo Pedra Agroindustrial, fundado no município em 1931.',
  ],

  precos: {
    avulsaMin: 55,
    avulsaMax: 130,
    mensalMin: 260,
    mensalMax: 720,
    onlineMin: 120,
    onlineMax: 360,
  },

  conclusao:
    'Cidade satélite de Ribeirão Preto com economia ligada à agroindústria canavieira, Cravinhos tem no Parque Ecológico municipal seu principal palco para o treino ao ar livre. Um personal trainer ajuda a aproveitar essa estrutura gratuita com método, ajustando os horários ao clima da região e à rotina de quem também circula entre Cravinhos e a capital regional.',

  vizinhas: ['ribeirao-preto-sp', 'sertaozinho-sp'],

  fontes: [
    { nome: 'IBGE Cidades — Cravinhos', url: 'https://cidades.ibge.gov.br/brasil/sp/cravinhos/panorama' },
    { nome: 'Prefeitura de Cravinhos', url: 'https://www.cravinhos.sp.gov.br/' },
    { nome: 'Atlas Brasil — IDHM', url: 'https://www.atlasbrasil.org.br/' },
  ],
  atualizadoEm: '2026-07-03',
};
