import type { Cidade } from '../../lib/types';

export const cidade: Cidade = {
  slug: 'santo-andre-sp',
  nome: 'Santo André',
  uf: 'SP',
  estado: 'São Paulo',
  estadoSlug: 'sao-paulo',
  regiao: 'Sudeste',
  gentilico: 'andreense',

  populacao: 748919,
  populacaoAno: 2022,
  idhm: 0.815,
  idhmClasse: 'muito alto',
  altitudeM: 766,

  resumoEconomico:
    'Coração do Grande ABC, Santo André teve o maior crescimento populacional absoluto da região entre 2010 e 2022. Sua economia é dominada por serviços (cerca de dois terços do PIB municipal) e por uma indústria de transformação tradicional — abriga o Polo Petroquímico de Capuava, o primeiro do Brasil. Berço da indústria automobilística nacional, a cidade reúne público de classe média consolidada e bairros de IDH muito alto.',

  mercado:
    'O mercado de personal trainer em Santo André é um dos mais equilibrados do Grande ABC: renda de classe média consolidada, IDH muito alto e uma rede de 11 parques públicos que funciona como extensão natural do treino. Nos bairros de maior renda — Jardim, Vila Assunção e Campestre —, o atendimento em condomínio e em estúdio divide espaço com as academias de rede; nos demais, o treino de bairro domina. Os parques abertos até as 22h dão ao personal uma vantagem rara na região: montar sessões ao ar livre também à noite, no horário em que boa parte dos andreenses consegue treinar.',

  bairrosNobres: ['Jardim', 'Vila Assunção', 'Campestre'],
  bairrosPopulares: ['Centro', 'Vila Pires', 'Utinga', 'Parque das Nações', 'Jardim Santo André'],

  parques: [
    {
      nome: 'Parque Central (Parque Deputado Cicote)',
      descricao:
        'O maior parque urbano da cidade, na Vila Assunção, com amplo gramado e cerca de 10.500 árvores. Tem pistas de caminhada, ciclovias, quatro quadras poliesportivas, equipamentos de ginástica e bicicletário — um centro completo de prática esportiva ao ar livre.',
    },
    {
      nome: 'Parque Celso Daniel',
      descricao:
        'No bairro Jardim, oferece pistas de corrida e caminhada, áreas multiuso, quadras e vestiários, sendo uma referência para corredores da região.',
    },
    {
      nome: 'Parque Regional da Criança',
      descricao:
        'No Parque Jaçatuba, tem trilha de caminhada, equipamentos de ginástica e quadra de tênis — boa opção para treino leve e atividades em família.',
    },
  ],
  ciclovias:
    'O Parque Central concentra ciclovias integradas às pistas de caminhada e ao bicicletário; ao todo, a cidade soma 11 parques com mais de 13 milhões de m² de área, em geral abertos das 6h às 22h e com entrada gratuita.',

  clima:
    'O clima é subtropical de altitude, semelhante ao da Região Metropolitana de São Paulo, com verões chuvosos e invernos amenos. Bairros nobres como Jardim e Vila Assunção são bastante arborizados, o que torna o treino ao ar livre mais agradável.',
  climaTreino:
    'Com tantos parques de entrada gratuita abertos até as 22h, Santo André é uma cidade convidativa para treinar fora de casa em diferentes horários — uma vantagem para quem só consegue se exercitar no fim do dia.',

  mobilidade:
    'A cidade é servida pela CPTM Linha 10-Turquesa, com estações como Santo André, Prefeito Saladino e Capuava, que integram o município ao centro de São Paulo e ao restante do ABC. A malha rodoviária (Avenida dos Estados e Anchieta) complementa o deslocamento.',

  corridas: [
    {
      nome: 'Night SA',
      descricao:
        'Corrida noturna de 5 km promovida pela Prefeitura na região do Paço Municipal — um formato que conversa bem com quem prefere treinar e competir no fim do dia.',
    },
    {
      nome: 'Meia Maratona de Santo André',
      descricao:
        'Prova tradicional organizada na cidade, que reforça o calendário esportivo do ABC e atrai corredores de toda a região.',
    },
  ],
  culturaEsportiva:
    'Com IDH muito alto (0,815) e uma rede de 11 parques públicos com infraestrutura esportiva gratuita, Santo André tem uma cultura de atividade física acessível e bem distribuída pela cidade. A proximidade da Vila de Paranapiacaba e da Serra do Mar ainda abre espaço para trilhas e atividades outdoor.',
  academias:
    'A oferta de academias e estúdios é robusta para o porte da cidade, concentrada principalmente nos bairros de maior renda (Jardim, Vila Assunção e Centro), e bem complementada pelas academias ao ar livre dos parques municipais.',
  academiasProximas: [
    { nome: 'Smart Fit', detalhe: 'várias unidades — Grand Plaza, Lar ABC Shopping, Campestre, Príncipe de Gales, Parque das Nações e Pirelli' },
    { nome: 'BodyMind', detalhe: 'academia tradicional da cidade, com uma das maiores piscinas do estado' },
    { nome: 'Academias ao ar livre municipais', detalhe: 'gratuitas, nos parques Central, Celso Daniel e Regional da Criança' },
  ],

  destaquesFitness: [
    'IDH muito alto (0,815) e a melhor rede de parques públicos do Grande ABC.',
    '11 parques com mais de 13 milhões de m², em geral abertos até as 22h.',
    'Corrida noturna Night SA, ideal para quem treina no fim do dia.',
    'Acesso a trilhas na Serra do Mar e à Vila de Paranapiacaba.',
  ],

  precos: {
    avulsaMin: 70,
    avulsaMax: 150,
    mensalMin: 340,
    mensalMax: 880,
    onlineMin: 170,
    onlineMax: 420,
  },

  faqsExtra: [
    {
      pergunta: 'Dá para treinar com personal à noite em Santo André?',
      resposta:
        'Dá — e a cidade é uma das melhores do ABC para isso. Os 11 parques municipais em geral ficam abertos até as 22h, com entrada gratuita e pistas iluminadas, e a própria Prefeitura promove a Night SA, corrida noturna de 5 km no Paço. Para quem só consegue treinar depois do expediente, o personal monta a sessão no Parque Central ou no Celso Daniel, ou em academia, sem depender do horário comercial.',
    },
    {
      pergunta: 'Onde o personal costuma atender em Santo André?',
      resposta:
        'Nos bairros de maior renda — Jardim, Vila Assunção e Campestre —, o atendimento em casa e na academia do condomínio é comum, com estúdios completando a oferta. No Centro e nos bairros residenciais, o treino acontece mais em academias de rede e nos parques. Como a cidade é bem servida de áreas públicas com equipamentos, o treino funcional ao ar livre com material portátil é uma alternativa econômica presente em praticamente todos os bairros.',
    },
    {
      pergunta: 'Há acompanhamento em Santo André para quem sente dores ou tem limitações?',
      resposta:
        'Há. O Montinho Personal, destacado pelo portal, tem formação complementar no treinamento de pessoas com dores e limitações musculoesqueléticas — e conhece essas barreiras pela própria vivência na musculação. Para o ABC, o formato mais prático é o acompanhamento online, com treino adaptado e ajustes contínuos; o atendimento presencial pode ser avaliado conforme agenda e local, a partir da base na região de Alphaville. O trabalho é progressivo e sem promessa de cura — quadros clínicos pedem também médico ou fisioterapeuta.',
    },
  ],

  vizinhas: ['sao-paulo-sp', 'guarulhos-sp'],

  fontes: [
    { nome: 'IBGE Cidades — Santo André', url: 'https://cidades.ibge.gov.br/brasil/sp/santo-andre/panorama' },
    { nome: 'Prefeitura de Santo André', url: 'https://www.santoandre.sp.gov.br/' },
  ],
  capaArte: {
    src: '/capas-cidade/santo-andre-sp.webp',
    alt:
      'Personal trainer em Santo André (SP) acompanhando aluna em treino de força ao ar livre, com o skyline do ABC paulista ao fundo — Personal por Perto',
    legenda:
      'Treino personalizado em Santo André: um plano feito para o seu corpo e a sua rotina, com acompanhamento profissional no ABC.',
  },
  atualizadoEm: '2026-07-22',
};
