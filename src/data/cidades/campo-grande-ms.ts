import type { Cidade } from '../../lib/types';

export const cidade: Cidade = {
  slug: 'campo-grande-ms',
  nome: 'Campo Grande',
  uf: 'MS',
  estado: 'Mato Grosso do Sul',
  estadoSlug: 'mato-grosso-do-sul',
  regiao: 'Centro-Oeste',
  gentilico: 'campo-grandense',
  tipo: 'cidade',

  populacao: 962883,
  populacaoAno: 2022,
  idhm: 0.784,
  idhmClasse: 'alto',
  altitudeM: 430,

  resumoEconomico:
    'Capital de Mato Grosso do Sul, Campo Grande é um forte polo do agronegócio (ligado à pecuária de corte) e do setor de serviços, além de importante centro universitário. Conhecida como "Cidade Morena", é planejada, muito arborizada e tem boa qualidade de vida, o que atrai migração de outros estados e sustenta uma população jovem e ativa.',

  mercado:
    'O mercado fitness está em expansão, com redes nacionais (Smart Fit, Allp Fit) e marcas premium de musculação — a Ironberg, referência nacional, abriu centro de treinamento na cidade —, além de academias locais consolidadas. A cultura de musculação e de treino premium é forte, impulsionada pelo público universitário.',

  bairrosNobres: ['Cidade Jardim', 'Jardim dos Estados', 'Chácara Cachoeira', 'Carandá Bosque'],
  bairrosPopulares: ['Vila Bandeirante', 'Aero Rancho', 'Coophavila', 'Vila Vilas Boas'],

  parques: [
    {
      nome: 'Parque das Nações Indígenas',
      descricao:
        'Um dos maiores parques urbanos do Brasil, com pistas de caminhada e corrida, lagos e amplas áreas abertas — palco da tradicional prova Volta das Nações.',
    },
    {
      nome: 'Parque Ecológico do Sóter',
      descricao:
        'Com cerca de 22 hectares, tem pista de cooper, ciclismo, quadras poliesportivas e pista de skate e patinação.',
    },
    {
      nome: 'Horto Florestal',
      descricao:
        'Bosque municipal urbano com trilhas e pista de caminhada em meio ao Cerrado, opção arborizada para treino mais tranquilo.',
    },
  ],
  ciclovias:
    'Campo Grande tem cerca de 90 km de estrutura cicloviária — uma das melhores marcas por habitante entre as capitais —, com destaque nas avenidas Afonso Pena e Gury Marques e nos parques lineares.',

  clima:
    'O clima é tropical quente, com médias que chegam a cerca de 31 °C e um inverno (de maio a setembro) muito seco; a altitude de cerca de 430 m ameniza um pouco o calor.',
  climaTreino:
    'O treino ao ar livre rende mais bem cedo (antes das 7h) ou após as 18h30, com hidratação reforçada no período seco, quando a umidade do ar cai bastante.',

  mobilidade:
    'Cidade radial e planejada, com avenidas largas, Campo Grande não tem metrô ou VLT — o transporte é feito por ônibus. Fica no cruzamento das BR-163 e BR-262, importante entroncamento logístico do Centro-Oeste.',

  corridas: [
    {
      nome: 'Volta das Nações',
      descricao:
        'Prova tradicional disputada no Parque das Nações Indígenas, símbolo da cena de corrida de rua da cidade.',
    },
    {
      nome: 'Meia Maratona de Campo Grande',
      descricao:
        'A prova de maior distância da capital, parte de um calendário que inclui também circuitos de corrida nos bairros.',
    },
  ],
  culturaEsportiva:
    'Campo Grande tem cultura ativa de corrida e ciclismo, favorecida pelas ciclovias e pelos grandes parques, e uma cena de musculação e treino funcional em alta, puxada por um público jovem e universitário.',
  academias:
    'A oferta reúne redes nacionais (Smart Fit, Allp Fit), a chegada de marcas premium como a Ironberg e academias locais consolidadas, com boa cobertura de plataformas de benefícios.',
  academiasProximas: [
    { nome: 'Ironberg', detalhe: 'centro de treinamento premium da marca na cidade' },
    { nome: 'Smart Fit e Allp Fit', detalhe: 'redes nacionais com várias unidades' },
    { nome: 'Academias locais consolidadas', detalhe: 'boa cobertura nos bairros e via plataformas de benefícios' },
    { nome: 'Equipamentos dos parques', detalhe: 'gratuitos, no Parque das Nações Indígenas e no Sóter' },
  ],

  destaquesFitness: [
    'Rede premium de musculação (Ironberg) escolheu a cidade pela demanda crescente.',
    'Forte malha cicloviária (cerca de 90 km), uma das melhores entre as capitais.',
    'Grandes parques urbanos com academia ao ar livre e pista de cooper.',
    'Altitude de cerca de 430 m, que ameniza o calor frente ao restante do estado.',
  ],

  precos: {
    avulsaMin: 70,
    avulsaMax: 160,
    mensalMin: 350,
    mensalMax: 950,
    onlineMin: 170,
    onlineMax: 430,
  },

  conclusao:
    'Cidade jovem, arborizada e com cultura de musculação em ascensão, Campo Grande oferece boa estrutura para quem quer treinar — dos parques às academias premium. Um personal trainer ajuda a aproveitar tudo isso com método, respeitando o calor e a baixa umidade do inverno.',

  faqsExtra: [
    {
      pergunta: 'Onde o personal costuma atender em Campo Grande?',
      resposta:
        'A cidade dá três frentes fortes: os grandes parques — o das Nações Indígenas, um dos maiores parques urbanos do país, e o Sóter, com pista de cooper e quadras —, as academias, do custo-benefício das redes ao treino premium do centro de treinamento da Ironberg, e o atendimento em casa nos bairros arborizados como Cidade Jardim e Carandá Bosque. Os cerca de 90 km de ciclovias ainda sustentam treinos de bike orientados pela Afonso Pena.',
    },
    {
      pergunta: 'Como treinar na seca do inverno de Campo Grande?',
      resposta:
        'De maio a setembro, a umidade na Cidade Morena despenca — e o ajuste é parecido com o de Brasília: sessões ao ar livre no início da manhã, quando o ar ainda está mais úmido, hidratação começando antes do treino e academia climatizada nos dias em que a umidade cai a níveis críticos. A vantagem local é a arborização: os parques e o Horto Florestal seguram um microclima mais ameno que as avenidas abertas. O personal alterna os cenários conforme o dia.',
    },
    {
      pergunta: 'Há acompanhamento em Campo Grande para quem sente dores ou tem limitações?',
      resposta:
        'Há. O Montinho Personal, destacado pelo portal, tem cursos voltados ao treinamento de pessoas com dores e limitações musculoesqueléticas, além da vivência prática de mais de 20 anos de musculação. Para Campo Grande, o formato é o acompanhamento online: treino adaptado à estrutura disponível (academia, condomínio ou casa), vídeos de execução e ajustes contínuos. O trabalho é progressivo e sem promessa de cura — quadros clínicos pedem também médico ou fisioterapeuta.',
    },
  ],

  vizinhas: ['cuiaba-mt', 'goiania-go', 'brasilia-df'],

  fontes: [
    { nome: 'IBGE Cidades — Campo Grande', url: 'https://cidades.ibge.gov.br/brasil/ms/campo-grande/panorama' },
    { nome: 'Prefeitura de Campo Grande', url: 'https://www.campogrande.ms.gov.br/' },
    { nome: 'Atlas Brasil — IDHM', url: 'https://www.atlasbrasil.org.br/' },
  ],
  capaArte: {
    src: '/capas-cidade/campo-grande-ms.webp',
    w: 1200,
    h: 675,
    alt:
      'Personal trainer em Campo Grande (MS) em arte que une treino de força e cartões-postais reais da cidade — o Parque das Nações Indígenas e o Lago do Amor ao fundo — Personal por Perto',
    legenda:
      'Treino personalizado em Campo Grande: um plano feito para o seu corpo e a sua rotina, com acompanhamento profissional na cidade e região.',
  },
  atualizadoEm: '2026-07-27',
};
