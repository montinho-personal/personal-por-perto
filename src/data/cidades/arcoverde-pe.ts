import type { Cidade } from '../../lib/types';

export const cidade: Cidade = {
  slug: 'arcoverde-pe',
  nome: 'Arcoverde',
  uf: 'PE',
  estado: 'Pernambuco',
  estadoSlug: 'pernambuco',
  regiao: 'Nordeste',
  gentilico: 'arcoverdense',
  tipo: 'cidade',

  populacao: 77586,
  populacaoAno: 2022,
  idhm: 0.667,
  idhmClasse: 'médio',
  altitudeM: 663,

  resumoEconomico:
    'Conhecida como a "Porta do Sertão", Arcoverde fica na divisa entre o Agreste e o Sertão pernambucano, no Planalto da Borborema. É um polo de comércio e serviços que atende a uma ampla região do semiárido, com forte vocação cultural — a cidade é referência nacional do Samba de Coco e da cultura popular. A altitude torna o clima semiárido um pouco mais ameno que o do sertão baixo, favorecendo o treino ao ar livre nas horas mais frescas.',

  mercado:
    'O mercado de personal trainers é movido pela renda do comércio regional e pela função de Arcoverde como entreposto entre o Agreste e o Sertão. A oferta combina academias de bairro, estúdios de funcional e treinamento de força, com musculação e treino funcional entre as modalidades mais procuradas. O atendimento online complementa a cena para quem prefere acompanhamento à distância.',

  bairrosNobres: ['Centro', 'São Cristóvão', 'Cidade Jardim', 'Boa Vista'],
  bairrosPopulares: ['COHAB I', 'COHAB II', 'São Geraldo', 'Santa Luzia', 'São Miguel'],

  parques: [
    {
      nome: 'Praça Virgínia Guerra (País das Culturas Populares)',
      descricao:
        'Praça central que abriga o País das Culturas Populares, ponto de encontro e de caminhada no coração da cidade, palco de festivais e da cena de cultura popular arcoverdense.',
    },
    {
      nome: 'Centro de Gastronomia e Artesanato (CGA)',
      descricao:
        'Espaço público com praça de alimentação e palco para apresentações, usado como ponto de convívio e lazer, com fácil deslocamento a pé pelo entorno.',
    },
    {
      nome: 'Praças e largos do Centro',
      descricao:
        'A malha de praças e largos da área central oferece percursos curtos para caminhada urbana, com sombra e movimento ao longo do dia.',
    },
  ],
  ciclovias:
    'A cidade tem trechos viários usados por ciclistas no deslocamento diário, mas não dispõe de uma rede contínua de ciclovias estruturadas; o pedal de lazer costuma seguir por vias do entorno e estradas vicinais nas horas mais frescas.',

  clima:
    'O clima é semiárido de altitude (cerca de 663 m no Planalto da Borborema), mais ameno que o do sertão baixo, com média de chuvas em torno de 720 mm ao ano e estação seca prolongada. As temperaturas ficam tipicamente entre cerca de 18 °C e 32 °C, com ar seco.',
  climaTreino:
    'A altitude suaviza o calor em relação ao sertão profundo, mas o sol é forte e a umidade baixa no meio do dia. As melhores janelas para treino ao ar livre são o começo da manhã e o fim da tarde, sempre com hidratação reforçada.',

  mobilidade:
    'Arcoverde é um nó rodoviário do interior pernambucano: a BR-232 (principal eixo do estado) liga a cidade ao Recife, a cerca de 250 km, e segue rumo ao Sertão, enquanto a BR-110 dá acesso ao sentido norte-sul da região. Não há transporte sobre trilhos — o Metrô do Recife atende apenas à região metropolitana da capital.',

  corridas: [
    {
      nome: 'Pharmapele Run — etapa Arcoverde',
      descricao:
        'Etapa do circuito Pharmapele Run realizada em Arcoverde, com percursos de 5 km e 10 km e largada noturna associada à abertura dos festejos juninos.',
    },
    {
      nome: 'Provas e treinos de rua no Centro',
      descricao:
        'Corridas e treinos coletivos pelas vias e praças da área central, ponto natural de encontro de corredores na cidade.',
    },
  ],
  culturaEsportiva:
    'A cena esportiva acompanha o crescimento da corrida de rua no interior do Nordeste, apoiada na vida ao ar livre permitida pelo clima de altitude e na tradição de festas e encontros que reúnem a comunidade nas praças.',
  academias:
    'A oferta reúne academias de bairro, estúdios de treino funcional e espaços de musculação, com treino de força e funcional em alta entre os arcoverdenses.',

  academiasProximas: [
    { nome: 'F3 Fitness', detalhe: 'na Rua Joel de Holanda Cavalcante, na Boa Vista' },
    { nome: "Academia D'Fitnness", detalhe: 'na Av. José Bonifácio, em São Cristóvão' },
  ],
  academiasVerificadasEm: '2026-08-27',

  destaquesFitness: [
    'Clima semiárido de altitude (cerca de 663 m), mais ameno que o do sertão baixo.',
    'Polo regional de comércio e serviços como "Porta do Sertão".',
    'Centro compacto, com praças e largos que favorecem a caminhada urbana.',
    'Corrida de rua em crescimento, com etapa do Pharmapele Run na cidade.',
  ],

  precos: {
    avulsaMin: 45,
    avulsaMax: 110,
    mensalMin: 240,
    mensalMax: 680,
    onlineMin: 110,
    onlineMax: 340,
  },

  conclusao:
    'Porta do Sertão e berço da cultura popular pernambucana, Arcoverde combina um centro compacto, clima de altitude mais ameno e uma cena de corrida de rua em expansão. Um personal trainer ajuda a aproveitar esse cenário com método, respeitando o sol forte e a baixa umidade do semiárido.',

  vizinhas: ['caruaru-pe', 'serra-talhada-pe', 'belo-jardim-pe'],

  fontes: [
    { nome: 'IBGE Cidades — Arcoverde', url: 'https://cidades.ibge.gov.br/brasil/pe/arcoverde/panorama' },
    { nome: 'Prefeitura de Arcoverde', url: 'https://www.arcoverde.pe.gov.br/' },
    { nome: 'Atlas Brasil — IDHM', url: 'https://www.atlasbrasil.org.br/' },
  ],
  atualizadoEm: '2026-08-27',
  capaArte: {
    src: '/capas-cidade/arcoverde-pe.webp',
    w: 1200,
    h: 849,
    alt:
      'Personal trainer em Arcoverde (PE) em arte de treino de força com a igreja histórica do sertão pernambucano ao fundo — Personal por Perto',
    legenda:
      'Treino personalizado em Arcoverde: um plano feito para o seu corpo e a sua rotina, com acompanhamento profissional na cidade e região.',
  },
};
