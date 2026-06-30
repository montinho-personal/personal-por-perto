import type { Cidade } from '../../lib/types';

export const cidade: Cidade = {
  slug: 'santa-cruz-do-rio-pardo-sp',
  nome: 'Santa Cruz do Rio Pardo',
  uf: 'SP',
  estado: 'São Paulo',
  estadoSlug: 'sao-paulo',
  regiao: 'Sudeste',
  gentilico: 'santa-cruzense',
  tipo: 'cidade',

  populacao: 46442,
  populacaoAno: 2022,
  idhm: 0.762,
  idhmClasse: 'alto',
  altitudeM: 460,

  resumoEconomico:
    'No Médio Paranapanema, na região de Ourinhos e às margens do rio Pardo, Santa Cruz do Rio Pardo é uma cidade média do interior paulista com forte vocação agroindustrial. Sediando um polo cerealista, é a maior beneficiadora de arroz do estado de São Paulo, com produção que abastece parte expressiva do consumo paulista. Completam a economia a citricultura (laranja), o calçado feminino e a indústria de alimentos, além de uma administração pública e um comércio que atendem aos municípios vizinhos.',

  mercado:
    'Como cidade média do interior, Santa Cruz do Rio Pardo tem um mercado fitness em escala local, formado por academias de musculação e treino funcional e por profissionais autônomos. A procura por personal trainers cresce entre quem busca acompanhamento individualizado, seja para resultados estéticos e de saúde, seja para preparação para as provas de corrida de rua que se firmaram no calendário da cidade.',

  bairrosNobres: ['Centro', 'Jardim Bela Vista', 'Vila Carvalho', 'Jardim Santa Cruz'],
  bairrosPopulares: ['Vila São Francisco', 'Jardim Itamarati', 'Vila Real', 'Jardim Primavera'],

  parques: [
    {
      nome: 'Parque Ecológico (Praça Octaviano Botelho de Souza)',
      descricao:
        'Área verde de uso público no Centro destinada a atividades esportivas, lazer e contemplação, com espaço aproveitado para caminhada e treino ao ar livre por toda a família.',
    },
    {
      nome: 'Margens do rio Pardo',
      descricao:
        'O rio que dá nome à cidade corta a área urbana e marca a paisagem local; seu entorno e as vias próximas servem de cenário para quem caminha, corre e pedala perto da água.',
    },
    {
      nome: 'Praças centrais (Rui Barbosa e da República)',
      descricao:
        'Os largos e praças arborizadas do centro concentram parte da rotina de caminhada e dos encontros de quem treina ao ar livre na cidade.',
    },
  ],
  ciclovias:
    'A estrutura cicloviária é modesta e concentrada em trechos da área urbana; boa parte do pedal e da corrida acontece nas avenidas, nas praças e nas vias próximas ao rio Pardo.',

  clima:
    'O clima é tropical, com verões longos, quentes e úmidos (de novembro a março, período mais chuvoso) e invernos curtos, mais secos e amenos. As temperaturas variam tipicamente entre cerca de 15 °C nas madrugadas frias do inverno e mais de 30 °C nas tardes de verão.',
  climaTreino:
    'O calor e a umidade do verão pedem treino bem cedo ou no fim da tarde, com hidratação reforçada; o outono e o inverno, mais secos e amenos, costumam ser o período mais agradável para correr e treinar ao ar livre.',

  mobilidade:
    'A cidade é cortada pela SP-225 (Rodovia Engenheiro João Baptista Cabral Rennó), ligação Ipaussu–Bauru que conecta Santa Cruz do Rio Pardo às cidades da região e ao interior paulista. O transporte urbano é feito por ônibus e o deslocamento cotidiano apoia-se bastante em carro e moto, padrão das cidades médias do interior.',

  corridas: [
    {
      nome: 'Fest Run',
      descricao:
        'Evento de corrida de rua local com provas de 5 km e 10 km e caminhada de 3 km, que reuniu centenas de participantes já em sua primeira edição e ajudou a firmar a cultura de corrida na cidade.',
    },
    {
      nome: 'Circuito Record de Corrida de Rua',
      descricao:
        'Etapa de circuito regional de corrida de rua realizada na cidade com apoio da Prefeitura, atraindo corredores de Santa Cruz do Rio Pardo e municípios vizinhos.',
    },
  ],
  culturaEsportiva:
    'A cultura esportiva mistura o calendário de provas de corrida de rua, o uso das praças e do entorno do rio Pardo para caminhada e os Jogos Santa-cruzenses no mês de aniversário da cidade, em uma rotina típica do interior paulista.',
  academias:
    'A oferta é composta principalmente por academias locais de musculação e treino funcional, distribuídas pelo Centro e pelos bairros residenciais, com porte compatível com uma cidade média do interior.',

  destaquesFitness: [
    'Maior beneficiadora de arroz do estado de São Paulo, sede de um polo cerealista no Médio Paranapanema.',
    'Rio Pardo e praças centrais como espaços de caminhada e treino ao ar livre.',
    'Calendário de corridas de rua, como a Fest Run, que movimenta corredores da região.',
    'Clima tropical com verão quente e úmido e inverno seco e ameno, que favorece o treino ao ar livre fora dos meses mais quentes.',
  ],

  precos: {
    avulsaMin: 55,
    avulsaMax: 125,
    mensalMin: 270,
    mensalMax: 740,
    onlineMin: 130,
    onlineMax: 370,
  },

  conclusao:
    'Cidade agroindustrial do interior paulista, às margens do rio Pardo, Santa Cruz do Rio Pardo combina uma rotina tranquila com um calendário esportivo crescente puxado pelas corridas de rua. Um personal trainer ajuda a organizar o treino respeitando o clima, definindo os melhores horários ao longo do ano e mantendo a constância rumo aos objetivos de saúde e desempenho.',

  vizinhas: ['ourinhos-sp', 'assis-sp'],

  fontes: [
    { nome: 'IBGE Cidades — Santa Cruz do Rio Pardo', url: 'https://cidades.ibge.gov.br/brasil/sp/santa-cruz-do-rio-pardo/panorama' },
    { nome: 'Prefeitura de Santa Cruz do Rio Pardo', url: 'https://www.santacruzdoriopardo.sp.gov.br/' },
    { nome: 'Atlas Brasil — IDHM', url: 'https://www.atlasbrasil.org.br/' },
  ],
  atualizadoEm: '2026-06-29',
};
