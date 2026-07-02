import type { Cidade } from '../../lib/types';

export const cidade: Cidade = {
  slug: 'governador-celso-ramos-sc',
  nome: 'Governador Celso Ramos',
  uf: 'SC',
  estado: 'Santa Catarina',
  estadoSlug: 'santa-catarina',
  regiao: 'Sul',
  gentilico: 'gancheiro',
  tipo: 'cidade',

  populacao: 16915,
  populacaoAno: 2022,
  idhm: 0.747,
  idhmClasse: 'alto',
  pibPerCapita: 39118.97,
  pibPerCapitaAno: 2023,
  altitudeM: 3,

  resumoEconomico:
    'Município litorâneo da Grande Florianópolis, Governador Celso Ramos nasceu como a antiga vila de pescadores dos Ganchos e ainda vive fortemente ligado ao mar. A pesca artesanal e industrial — com destaque para a temporada da tainha no inverno, reconhecida como patrimônio cultural imaterial do município — responde por parcela relevante da economia local, ao lado da maricultura (cultivo de ostras e mexilhões), atividade em que Santa Catarina concentra cerca de 95% da produção nacional. O turismo de veraneio, impulsionado pela proximidade com Florianópolis, vem ganhando peso nas últimas décadas, com praias como Palmas e as comunidades pesqueiras dos Ganchos entre os principais atrativos.',

  mercado:
    'O mercado fitness de Governador Celso Ramos é pequeno e de forte sazonalidade: a população residente é modesta, mas cresce bastante no verão com a chegada de veranistas atraídos pela proximidade de Florianópolis. A procura por personal trainers tende a se concentrar na alta temporada, entre quem tem casa de praia na cidade, e ao longo do ano entre moradores ligados à pesca e à maricultura que buscam treino funcional e de recuperação física.',

  bairrosNobres: ['Palmas', 'Armação da Piedade', 'Costeira da Armação', 'Canto dos Ganchos'],
  bairrosPopulares: ['Ganchos de Fora', 'Areias de Baixo', 'Areias de Cima', 'Jordão'],

  parques: [
    {
      nome: 'Praia de Palmas',
      descricao:
        'Com cerca de 3 km de extensão, é a maior praia do município e a que tem melhor infraestrutura, reunindo banhistas e surfistas — o principal trecho de orla para caminhada, corrida e treino ao ar livre na cidade.',
    },
    {
      nome: 'Ganchos de Fora',
      descricao:
        'Uma das comunidades pesqueiras mais tradicionais do estado, com barcos coloridos e praias pequenas de águas claras; trilhas que partem dali levam a praias desertas como a Praia das Conchas e a Praia de Fora, entre subidas e descidas na mata.',
    },
    {
      nome: 'Armação da Piedade e Fazenda da Armação',
      descricao:
        'Região de longa tradição na cultura de ostras e mexilhões, com fazendas marinhas de maricultura visíveis ao longo da costa e enseadas mais abrigadas, usadas para caminhada e atividades leves à beira-mar.',
    },
  ],
  ciclovias:
    'A estrutura cicloviária é pontual e concentrada em trechos da orla de Palmas; a maior parte do pedal e da corrida acontece pela Rodovia Municipal Francisco Wollinger e pelas vias que ligam o Centro aos bairros de praia.',

  clima:
    'O clima é subtropical úmido, com verões quentes (a partir de 30 °C) e invernos amenos que podem esfriar bastante em dias de frente fria, com mínimas próximas ou abaixo de 10 °C. Os ventos do quadrante sul são frequentes e podem soprar com intensidade, especialmente na virada de estações.',
  climaTreino:
    'No verão, a recomendação é treinar cedo ou no fim da tarde, com hidratação reforçada por causa do calor e da umidade; no inverno, dias mais frios e ventosos pedem aquecimento adequado, mas o clima ameno da maior parte do ano favorece o treino ao ar livre na orla.',

  mobilidade:
    'O acesso ao município se dá pela BR-101 e, na sequência, pela Rodovia Municipal Francisco Wollinger, via de cerca de 18 km que liga a BR-101 aos principais bairros e praias — Calheiros, Ganchos de Fora e Palmas. A cidade fica a aproximadamente 50 km de Florianópolis, capital do estado, e o deslocamento interno é feito majoritariamente por carro e por ônibus, com trânsito mais intenso na alta temporada de verão.',

  corridas: [
    {
      nome: 'Meia Maratona GCR Run',
      descricao:
        'Prova de rua realizada em Governador Celso Ramos, com percursos de 5 km, 7 km, 10 km e 21 km, já em sua terceira edição — principal evento de corrida do calendário esportivo do município.',
    },
  ],
  culturaEsportiva:
    'A cultura esportiva local é moldada pelo mar: a pesca da tainha e a maricultura de ostras e mexilhões fazem parte do dia a dia, enquanto o verão traz corrida e caminhada na orla de Palmas, esportes náuticos e o futebol amador, que tem no Campeonato Amador de Futebol de Governador Celso Ramos (Camfag) uma tradição de décadas. A prefeitura também tem buscado atrair uma etapa de triathlon para o calendário de verão.',
  academias:
    'A oferta de academias é pequena e concentrada no Centro e em bairros como Palmas e Areias de Baixo, voltada principalmente à musculação e ao treino funcional, com porte compatível com um município litorâneo de porte pequeno e forte sazonalidade.',

  destaquesFitness: [
    'Praia de Palmas, com cerca de 3 km, como principal espaço de caminhada, corrida e treino ao ar livre.',
    'Tradição da pesca da tainha (patrimônio cultural imaterial) e da maricultura de ostras e mexilhões, atividades físicas do cotidiano ligadas ao mar.',
    'Comunidades pesqueiras dos Ganchos e trilhas até praias desertas, como a Praia das Conchas, para caminhada em meio à natureza.',
    'Proximidade de cerca de 50 km de Florianópolis, com mercado fitness sazonal puxado pelo turismo de veraneio no verão.',
  ],

  precos: {
    avulsaMin: 55,
    avulsaMax: 130,
    mensalMin: 260,
    mensalMax: 750,
    onlineMin: 120,
    onlineMax: 380,
  },

  conclusao:
    'Cidade pequena e de forte identidade pesqueira, Governador Celso Ramos oferece na orla de Palmas e nas comunidades dos Ganchos um cenário natural para treinar ao ar livre, com clima ameno na maior parte do ano. Um personal trainer ajuda a organizar a rotina de treino considerando a sazonalidade do verão, o calor e os ventos característicos da região, mantendo a constância entre moradores e veranistas.',

  vizinhas: ['florianopolis-sc', 'tijucas-sc', 'porto-belo-sc'],

  fontes: [
    { nome: 'IBGE Cidades — Governador Celso Ramos', url: 'https://cidades.ibge.gov.br/brasil/sc/governador-celso-ramos/panorama' },
    { nome: 'Prefeitura de Governador Celso Ramos', url: 'https://governadorcelsoramos.sc.gov.br/' },
    { nome: 'Atlas Brasil — IDHM', url: 'https://www.atlasbrasil.org.br/' },
  ],
  atualizadoEm: '2026-07-02',
};
