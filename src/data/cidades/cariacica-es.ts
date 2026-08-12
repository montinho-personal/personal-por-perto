import type { Cidade } from '../../lib/types';

export const cidade: Cidade = {
  slug: 'cariacica-es',
  nome: 'Cariacica',
  uf: 'ES',
  estado: 'Espírito Santo',
  estadoSlug: 'espirito-santo',
  regiao: 'Sudeste',
  gentilico: 'cariaciquense',
  tipo: 'cidade',

  populacao: 353510,
  populacaoAno: 2022,
  idhm: 0.718,
  idhmClasse: 'alto',

  resumoEconomico:
    'Parte da Região Metropolitana da Grande Vitória, Cariacica é um importante polo de logística, transporte e comércio atacadista, favorecido pela malha rodoviária e ferroviária e pela proximidade do Porto de Vitória. A cidade vem revitalizando seus espaços públicos — orla e complexos esportivos —, o que amplia as opções de treino ao ar livre.',

  mercado:
    'Cidade populosa e de perfil trabalhador, Cariacica tem forte demanda por academias de bairro e treino acessível. A expansão dos espaços públicos de exercício amplia o público para personal trainers que atuam ao ar livre.',

  bairrosNobres: ['Alto Lage', 'Alto Dona Augusta', 'Campo Grande', 'Santa Bárbara'],
  bairrosPopulares: ['Nova Rosa da Penha', 'Morada de Santa Fé', 'Nova Brasília', 'Itacibá'],

  parques: [
    {
      nome: 'Nova Orla de Cariacica (Porto de Santana)',
      descricao:
        'Inaugurada no fim de 2023, tem 1,95 km de calçadão com passarela suspensa sobre o mangue, ciclovia, academia popular, pista de skate e vista para a baía — virou o principal point de treino ao ar livre da cidade.',
    },
    {
      nome: 'Parque Natural Municipal Monte Mochuara',
      descricao:
        'Com 436 hectares de Mata Atlântica em Roças Velhas, oferece trilhas de subida com trechos de mata densa e encostas rochosas — treino natural de perna e fôlego com vista da Grande Vitória.',
    },
    {
      nome: 'Complexo Hugo Viola',
      descricao:
        'Com cerca de 785 m² de academia ao ar livre, tem ainda pista de caminhada, ciclovia, quadra coberta e campo.',
    },
    {
      nome: 'Estação Cidadania Esporte (Nova Brasília)',
      descricao:
        'Tem pista de atletismo, ginásio e academia ao ar livre, ampliando o acesso público ao treino.',
    },
  ],
  ciclovias:
    'Há ciclovia na orla (Avenida Vale do Rio Doce) e no Complexo Hugo Viola; a extensão total da rede ainda não é divulgada em fonte oficial.',

  clima:
    'O clima é tropical quente e úmido, com calor o ano todo.',
  climaTreino:
    'O treino ao ar livre rende mais cedo de manhã ou no fim da tarde, com hidratação reforçada — a orla revitalizada é uma boa opção nesses horários.',

  mobilidade:
    'Cariacica é cortada pela BR-262 e fica próxima da BR-101, com a ES-447 ligando Campo Grande a Vila Velha. A conexão direta com Vitória é feita por pontes e terminais (Campo Grande é um grande terminal de ônibus).',

  corridas: [
    {
      nome: 'Corrida Rústica de Cariacica',
      descricao:
        'Prova de 5 km organizada pela prefeitura no aniversário da cidade, com percurso pela Nova Orla — parte fixa do calendário esportivo municipal.',
    },
    {
      nome: 'Corrida da Família',
      descricao:
        'Evento comunitário de rua voltado à saúde e à integração, com boa adesão local.',
    },
  ],
  culturaEsportiva:
    'Cariacica tem tradição no futebol amador e abriga o Estádio Kleber Andrade, o principal palco do futebol capixaba. Os espaços públicos revitalizados — a Nova Orla à frente — vêm mudando o hábito da cidade: caminhada, corrida e treino funcional ao ar livre crescem ano a ano.',
  academias:
    'A oferta é dominada por academias de bairro voltadas à população trabalhadora, complementadas pela Nova Orla e pelos complexos esportivos públicos gratuitos.',

  destaquesFitness: [
    'Orla revitalizada com academia ao ar livre, um hub natural para o personal.',
    'Complexos esportivos públicos gratuitos em vários bairros.',
    'Público amplo de classe média e popular, com demanda por treino acessível.',
    'Clima quente que favorece o treino ao ar livre matinal o ano todo.',
  ],

  precos: {
    avulsaMin: 65,
    avulsaMax: 150,
    mensalMin: 330,
    mensalMax: 900,
    onlineMin: 165,
    onlineMax: 420,
  },

  conclusao:
    'Polo logístico da Grande Vitória, Cariacica vem ganhando espaços públicos de qualidade para treinar — da Nova Orla aos complexos esportivos. Um personal trainer ajuda a aproveitar essa estrutura com método, encaixando o treino na rotina e respeitando o calor.',

  vizinhas: ['vitoria-es', 'vila-velha-es', 'serra-es'],

  fontes: [
    { nome: 'IBGE Cidades — Cariacica', url: 'https://cidades.ibge.gov.br/brasil/es/cariacica/panorama' },
    { nome: 'Prefeitura de Cariacica', url: 'https://www.cariacica.es.gov.br/' },
    { nome: 'Atlas Brasil — IDHM', url: 'https://www.atlasbrasil.org.br/' },
  ],
  atualizadoEm: '2026-08-12',


  faqsExtra: [
    {
      pergunta: 'Onde treinar de graça em Cariacica?',
      resposta:
        'A cidade tem uma das melhores redes públicas da Grande Vitória: a Nova Orla de Porto de Santana (1,95 km com academia popular e ciclovia), o Complexo Hugo Viola e a Estação Cidadania em Nova Brasília, com pista de atletismo. Muitos personals atendem nesses espaços com material próprio, o que barateia o acompanhamento.',
    },
    {
      pergunta: 'A trilha do Monte Mochuara serve como treino?',
      resposta:
        'Serve — e dos bons. A subida pelo parque natural, com 436 hectares de Mata Atlântica, é treino de perna e fôlego com desnível real. Para quem está começando, vale preparar a base com algumas semanas de caminhada e fortalecimento antes de encarar; dores em joelho ou tornozelo pedem avaliação de médico ou fisioterapeuta antes.',
    },
    {
      pergunta: 'O personal atende na Nova Orla?',
      resposta:
        'Sim — a orla virou o ponto de encontro do treino ao ar livre da cidade, e o formato de sessão com material portátil funciona bem no calçadão e na academia popular. Cedo de manhã e no fim da tarde são os horários de pico, pelos mesmos motivos de clima que valem para todo o litoral capixaba.',
    },
  ],

  capaArte: {
    src: '/capas-cidade/cariacica-es.webp',
    w: 1200,
    h: 849,
    alt:
      'Personal trainer em Cariacica (ES) em arte que reúne treino de corda naval, o Estádio Kleber Andrade, o Mercado Municipal e a orla de Porto de Santana — Personal por Perto',
    legenda:
      'Treino personalizado em Cariacica: um plano feito para o seu corpo e a sua rotina, com acompanhamento profissional na cidade e região.',
  },
};
