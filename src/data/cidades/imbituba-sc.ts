import type { Cidade } from '../../lib/types';

export const cidade: Cidade = {
  slug: 'imbituba-sc',
  nome: 'Imbituba',
  uf: 'SC',
  estado: 'Santa Catarina',
  estadoSlug: 'santa-catarina',
  regiao: 'Sul',
  gentilico: 'imbitubense',
  tipo: 'cidade',

  populacao: 52579,
  populacaoAno: 2022,
  idhm: 0.765,
  idhmClasse: 'alto',
  altitudeM: 7,

  resumoEconomico:
    'No litoral sul catarinense, Imbituba combina vocação portuária e turística. O Porto de Imbituba, um dos mais importantes de Santa Catarina, ancora a economia ligada à logística, à indústria e aos serviços, enquanto o turismo de natureza ganhou projeção nacional: a cidade é reconhecida como Capital Nacional da Baleia Franca, título ligado à temporada de baleias-francas que se aproximam da costa no inverno. Com 52.579 habitantes no Censo 2022 e IDHM alto (0,765), a cidade vive forte sazonalidade, com população flutuante elevada no verão, especialmente nas praias do Rosa e da Vila. O surfe é parte central da identidade local — Imbituba sediou por anos etapas do circuito mundial.',

  mercado:
    'O mercado de personal trainers em Imbituba é moldado pela sazonalidade litorânea e pelo perfil de quem busca a cidade. No verão, a chegada de veranistas e o público de alto padrão da Praia do Rosa elevam a demanda por treino ao ar livre, na areia e em condomínios e pousadas. Fora da temporada, a base é a comunidade local — incluindo trabalhadores ligados ao porto e à indústria — e os praticantes de surfe, que procuram preparo físico específico para o mar. Atender com pacotes curtos e flexíveis na alta temporada e acompanhamento online na baixa é um diferencial natural para o profissional na cidade.',

  bairrosNobres: ['Praia do Rosa', 'Praia da Vila (Centro)', 'Itapirubá', 'Ibiraquera'],
  bairrosPopulares: ['Vila Nova', 'Mirim', 'Henrique Lage', 'Nova Brasília'],

  parques: [
    {
      nome: 'Praia do Rosa',
      descricao:
        'Uma das praias mais famosas do Brasil, point de surfe, windsurfe e vela, com cerca de 2 km de extensão cercados por morros verdes. É também ponto privilegiado para observação das baleias-francas e cenário ideal para treino funcional na areia e preparo voltado ao mar.',
    },
    {
      nome: 'Praia da Vila',
      descricao:
        'No coração da cidade, mistura áreas boas para banho com ondas procuradas por surfistas, emoldurada por costão e pelas ilhas de Santana de Dentro e de Fora. A orla é o palco natural de caminhada, corrida e treino na areia para os moradores.',
    },
    {
      nome: 'Praia da Ribanceira e Ibiraquera',
      descricao:
        'Trecho de surfe com campo de dunas à frente, na porção sul da região de Ibiraquera. Entre julho e novembro, é um dos pontos preferidos das baleias-francas e oferece terreno variado para trail running e treino ao ar livre.',
    },
    {
      nome: 'Rota da Baleia Franca',
      descricao:
        'De julho a novembro, com pico entre o fim de agosto e setembro, as baleias-francas se aproximam da costa de Imbituba, Garopaba e Laguna para reprodução — atrativo de natureza que dá ritmo ao calendário esportivo e turístico de inverno.',
    },
  ],
  ciclovias:
    'A estrutura cicloviária é limitada e concentrada em trechos da área urbana e da orla; pedalar pelas estradas vicinais entre as praias e em direção a Ibiraquera é prática comum, sobretudo fora do pico do verão.',

  clima:
    'O clima é subtropical úmido, típico do litoral sul catarinense, com verões quentes e influência marcante dos ventos do mar; o inverno é ameno e mais seco.',
  climaTreino:
    'Dá para treinar ao ar livre o ano todo. No verão, calor, umidade e praias cheias tornam o início da manhã e o fim da tarde os melhores horários. No inverno ameno, a orla fica tranquila e é ideal para corrida e treino na areia, ainda mais durante a temporada das baleias.',

  mobilidade:
    'O acesso principal é pela BR-101, que corta a região e conecta Imbituba a Laguna, Tubarão e Garopaba. Dentro do município, o deslocamento é majoritariamente por carro, e o trânsito fica intenso na alta temporada, especialmente nos acessos à Praia do Rosa.',

  corridas: [
    {
      nome: 'Desafio Rota da Baleia',
      descricao:
        'Ultramaratona de trail run pelo litoral sul de SC, com percursos de 80, 42, 21 e 8 km (solo ou revezamento) entre Laguna, Imbituba e Garopaba, passando por mais de 20 praias, costões e dunas, com avistamento de baleias-francas em setembro.',
    },
    {
      nome: 'Corridas e provas de praia em Imbituba',
      descricao:
        'Ao longo do ano, a cidade recebe provas de corrida e caminhada na orla e eventos esportivos ligados ao mar, aproveitando o cenário das praias da Vila e do Rosa para reunir corredores da região.',
    },
  ],
  culturaEsportiva:
    'Imbituba tem o surfe como marca registrada — a cidade chegou a sediar etapas do circuito mundial por vários anos, e a Praia do Rosa é referência internacional. A cultura esportiva mistura surfe, treino na areia, trilhas pelos costões e provas de trail running, num ambiente que valoriza a atividade física ao ar livre e o contato com o mar.',
  academias:
    'A oferta de academias e estúdios atende a comunidade local e cresce na temporada, com forte presença de treino funcional, beach training e preparo voltado ao surfe; muitos profissionais trabalham ao ar livre, na praia e em condomínios.',

  destaquesFitness: [
    'Capital Nacional da Baleia Franca: temporada de julho a novembro valoriza o treino ao ar livre na orla.',
    'Praia do Rosa, point de surfe de projeção nacional, gera demanda por preparo físico voltado ao mar.',
    'Sazonalidade de verão multiplica o público — veranistas de alto padrão buscam treino na praia.',
    'Desafio Rota da Baleia e provas de praia movimentam o calendário esportivo da região.',
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
    'Em Imbituba, treinar é quase sinônimo de estar ao ar livre — na areia da Praia da Vila, nos costões da Ribanceira ou na orla da Praia do Rosa durante a temporada das baleias. Para veranistas e moradores, um personal trainer que entenda a sazonalidade da cidade e o preparo voltado ao surfe e ao mar faz toda a diferença para treinar com segurança e aproveitar o melhor do litoral sul catarinense.',

  vizinhas: ['laguna-sc', 'tubarao-sc', 'garopaba-sc'],

  fontes: [
    { nome: 'IBGE Cidades — Imbituba', url: 'https://cidades.ibge.gov.br/brasil/sc/imbituba/panorama' },
    { nome: 'Prefeitura de Imbituba', url: 'https://www.imbituba.sc.gov.br/' },
    { nome: 'Atlas Brasil — IDHM', url: 'https://www.atlasbrasil.org.br/' },
  ],
  atualizadoEm: '2026-06-29',
};
