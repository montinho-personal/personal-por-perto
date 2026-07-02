import type { Cidade } from '../../lib/types';

export const cidade: Cidade = {
  slug: 'balneario-rincao-sc',
  nome: 'Balneário Rincão',
  uf: 'SC',
  estado: 'Santa Catarina',
  estadoSlug: 'santa-catarina',
  regiao: 'Sul',
  gentilico: 'balneo-rinconense',
  tipo: 'cidade',

  populacao: 15981,
  populacaoAno: 2022,
  pibPerCapita: 26294,
  pibPerCapitaAno: 2023,

  resumoEconomico:
    'Balneário Rincão é um dos municípios mais novos de Santa Catarina: emancipado de Içara, teve sua criação aprovada em referendo em 2003, mas só foi instalado em 1º de janeiro de 2013, após a primeira eleição municipal. A economia gira em torno do turismo de veraneio, com uma orla contínua de cerca de 13 km de praia sem acidentes geográficos, e da pesca, incluindo a tradicional captura da tainha no inverno em uma plataforma de pesca na parte norte da praia. O setor de serviços responde pela maior fatia do PIB local, seguido da administração pública, e o mercado imobiliário tem crescido com a expansão de bairros residenciais e o aumento expressivo da população nas últimas décadas.',

  mercado:
    'Por ser um município pequeno e ainda jovem, o mercado fitness de Balneário Rincão é enxuto fora da temporada, concentrado em academias locais de musculação e treino funcional. A procura cresce bastante no verão, quando a população multiplica com o turismo de veraneio, aquecendo a busca por personal trainers, aulas de grupo na orla e eventos como corridas de rua e desafios fitness organizados na cidade.',

  bairrosNobres: ['Centro', 'Zona Sul', 'Lagoa dos Freitas'],
  bairrosPopulares: ['Pedreiras', 'Urussanga Velha'],

  parques: [
    {
      nome: 'Orla da Praia do Rincão',
      descricao:
        'Faixa de areia contínua de cerca de 13 km, sem acidentes geográficos, com pequenas dunas e vegetação de restinga — o principal espaço da cidade para caminhada, corrida e treino funcional ao ar livre, com ciclovia em parte do trecho.',
    },
    {
      nome: 'Lagoas do Rincão',
      descricao:
        'O município reúne sete lagoas (Esteves, Faxinal, Freitas, Jacaré, Mãe Luzia, Rincão e Urussanga Velha), procuradas no verão para lazer e camping, e que também servem de cenário para caminhadas fora da faixa de areia.',
    },
    {
      nome: 'Plataforma de pesca do Rincão',
      descricao:
        'Estrutura em formato de T com quase 500 metros de extensão na porção norte da praia, um dos principais pontos de pesca do litoral catarinense e ponto de caminhada sobre o mar, especialmente na safra de inverno da tainha.',
    },
  ],
  ciclovias:
    'Há ciclovia ao longo de parte da orla da praia, usada tanto por ciclistas quanto por corredores; a extensão total da malha cicloviária não é divulgada em fonte oficial consolidada.',

  clima:
    'O clima é subtropical úmido, com forte influência marítima, típico do litoral sul catarinense: verões quentes e invernos frios, com ventos costeiros constantes. A temperatura da água do mar varia de cerca de 16-17 °C no inverno a 24 °C no verão, com a praia própria para banho durante praticamente o ano todo.',
  climaTreino:
    'O inverno costuma ser ameno para treinar ao ar livre na orla; no verão, o calor e o forte movimento turístico pedem treino nas primeiras horas da manhã ou no fim da tarde, com hidratação reforçada e atenção ao vento característico da praia aberta.',

  mobilidade:
    'O acesso principal se dá pela BR-101, com ligação até o centro por um trecho de cerca de 10 km da rodovia estadual SC-445. Balneário Rincão fica a aproximadamente 25 a 28 km de Criciúma (cerca de 20 a 40 minutos de carro, a depender do trânsito) e faz divisa com Içara, Araranguá e Jaguaruna. O transporte interno é predominantemente feito por veículo próprio, com fluxo mais intenso na alta temporada de verão.',

  corridas: [
    {
      nome: 'Desafio Entre Barras',
      descricao:
        'Um dos eventos mais tradicionais do calendário esportivo do sul catarinense, com percurso de 30 km entre o Bar do Torneiro e o Bar Rio Araranguá, além de uma opção de 5 km voltada a quem está começando a correr.',
    },
    {
      nome: 'Sunset Run Surf Scream',
      descricao:
        'Corrida de rua realizada na cidade com apoio da prefeitura, com percursos de 4 km e 8 km ao entardecer.',
    },
    {
      nome: 'Corrida Pela Vida',
      descricao:
        'Evento esportivo e social com opções de caminhada de 3 km e corrida de 5 km, aberto a participantes de diferentes níveis de condicionamento.',
    },
  ],
  culturaEsportiva:
    'A cultura esportiva local é marcada pelo surfe — a praia recebe o Ascas Surf é Saúde, campeonato tradicional do sul catarinense com raízes que remontam à década de 1980 — além da pesca esportiva da tainha e de um calendário de corridas de rua e eventos fitness de verão, como a Batalha Fitness, que usa a orla e a estrutura turística da cidade.',
  academias:
    'A oferta é formada por academias locais de musculação e treino funcional, como a Body Fit, concentradas nas áreas mais estruturadas do município; a procura acompanha o crescimento imobiliário e turístico da cidade, com reforço sazonal no verão.',

  destaquesFitness: [
    'Orla contínua de cerca de 13 km de praia, um dos maiores trechos de areia sem interrupção do litoral catarinense.',
    'Tradição de surfe consolidada pelo campeonato Ascas Surf é Saúde, um dos mais antigos do sul de SC.',
    'Calendário de corridas de rua na orla, como o Desafio Entre Barras e o Sunset Run Surf Scream.',
    'Município jovem (emancipado em 2013), com forte crescimento imobiliário e turístico impulsionando a procura por academias e personal trainers, sobretudo no verão.',
  ],

  precos: {
    avulsaMin: 55,
    avulsaMax: 120,
    mensalMin: 260,
    mensalMax: 700,
    onlineMin: 120,
    onlineMax: 350,
  },

  conclusao:
    'Cidade jovem e litorânea, Balneário Rincão tem na orla de 13 km de praia seu maior ativo para o treino ao ar livre, além de uma cultura esportiva ligada ao surfe e às corridas de rua de verão. Um personal trainer ajuda a aproveitar esses espaços com segurança e a manter a constância entre a baixa temporada, mais tranquila, e o pico de movimento turístico do verão.',

  vizinhas: ['icara-sc', 'ararangua-sc', 'criciuma-sc'],

  fontes: [
    { nome: 'IBGE Cidades — Balneário Rincão', url: 'https://cidades.ibge.gov.br/brasil/sc/balneario-rincao/panorama' },
    { nome: 'Prefeitura de Balneário Rincão', url: 'https://www.balneariorincao.sc.gov.br/' },
    { nome: 'Atlas Brasil — IDHM', url: 'https://www.atlasbrasil.org.br/' },
  ],
  atualizadoEm: '2026-07-02',
};
