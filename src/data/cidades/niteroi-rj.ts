import type { Cidade } from '../../lib/types';

export const cidade: Cidade = {
  slug: 'niteroi-rj',
  nome: 'Niterói',
  uf: 'RJ',
  estado: 'Rio de Janeiro',
  estadoSlug: 'rio-de-janeiro',
  regiao: 'Sudeste',
  gentilico: 'niteroiense',
  tipo: 'cidade',

  populacao: 481749,
  populacaoAno: 2022,
  idhm: 0.837,
  idhmClasse: 'muito alto',
  altitudeM: 5,

  resumoEconomico:
    'Na margem leste da Baía de Guanabara, Niterói tem o maior IDHM do estado do Rio de Janeiro (0,837) e um dos mais altos do Brasil. A economia combina serviços, administração pública, royalties e a indústria de petróleo e gás, além da tradicional indústria naval e da presença da UFF. O resultado é uma cidade de alta renda e qualidade de vida, com público exigente em saúde e bem-estar.',

  mercado:
    'O mercado fitness de Niterói é forte e diversificado, com boa oferta de academias (Smart Fit, Best Fitness e redes locais em Icaraí e na Região Oceânica). A cidade soma a isso uma cultura intensa de praia e esportes aquáticos — do mar calmo da baía às ondas de Itacoatiara e Itaipu —, o que aquece a procura por treino funcional, preparo para corrida e acompanhamento personalizado.',

  bairrosNobres: ['Icaraí', 'Camboinhas', 'São Francisco', 'Charitas'],
  bairrosPopulares: ['Fonseca', 'Santa Rosa', 'Engenho do Mato', 'Jurujuba'],

  parques: [
    {
      nome: 'Caminho Niemeyer',
      descricao:
        'Orla com conjunto arquitetônico assinado por Oscar Niemeyer, usada como circuito de corrida e caminhada com vista para a Baía de Guanabara e para o Rio — um dos cartões-postais ativos da cidade.',
    },
    {
      nome: 'Campo de São Bento (Icaraí)',
      descricao:
        'Principal jardim público da cidade, com cerca de 36 mil m² em estilo de jardim inglês, bem arborizado e muito procurado para caminhada e treinos leves.',
    },
    {
      nome: 'Orla de Itacoatiara e Região Oceânica',
      descricao:
        'Conta com ciclofaixa e faixa exclusiva para corrida e caminhada, além de academias ao ar livre em parques como o Horto do Fonseca — base da cultura de surf e esportes de mar de Niterói.',
    },
  ],
  ciclovias:
    'Niterói tem cerca de 86 km de ciclovias (2025), com expansão de mais de 450% em pouco mais de uma década. A ciclovia da Avenida Marquês do Paraná é apontada como a mais movimentada do Brasil, e a cidade oferece o sistema gratuito de bicicletas compartilhadas NitBike.',

  clima:
    'O clima é tropical litorâneo, quente e úmido, semelhante ao do Rio de Janeiro.',
  climaTreino:
    'Como no Rio, os horários mais frescos (início da manhã e fim da tarde) rendem mais no treino ao ar livre, e a hidratação é essencial. A forte cultura de bike torna o deslocamento ativo uma parte natural da rotina.',

  mobilidade:
    'O transporte aquaviário é um diferencial: barcas e o catamarã de Charitas ligam Niterói à capital pela Baía de Guanabara. No modal rodoviário, a Ponte Rio–Niterói (BR-101) é o principal eixo. A cidade não tem metrô próprio, o que reforça a conveniência de treinar perto de casa ou no formato online.',

  corridas: [
    {
      nome: 'Desafio da Ponte (Rio–Niterói)',
      descricao:
        'Prova que inclui a travessia ligada à Ponte Rio–Niterói, retomada em 2025 após mais de uma década — uma das corridas mais simbólicas da região.',
    },
    {
      nome: 'Niterói Bike Fest',
      descricao:
        'Evento de mobilidade urbana, cicloturismo, esporte e lazer que reflete a vocação ciclística da cidade.',
    },
  ],
  culturaEsportiva:
    'Niterói é uma das cidades mais ciclísticas do Brasil, com recordes de uso de ciclovia e bike sharing, e tem forte cultura praiana — surf e esportes de mar na Região Oceânica, caminhada e corrida nas orlas e parques. O alto IDHM se traduz em boa infraestrutura para quem quer treinar.',
  academias:
    'A oferta reúne redes como Smart Fit e Best Fitness e academias locais concentradas em Icaraí e na Região Oceânica, além de estúdios de treino funcional e crossfit que atendem o público de alta renda da cidade.',
  academiasProximas: [
    { nome: 'Smart Fit', detalhe: 'unidades em Icaraí (Trade Center) e em outros bairros' },
    { nome: 'Best Fitness e academias locais', detalhe: 'boa oferta em Icaraí e na Região Oceânica' },
    { nome: 'Estúdios de funcional e crossfit', detalhe: 'atendem o público de alta renda da cidade' },
    { nome: 'Academias ao ar livre', detalhe: 'gratuitas, no Horto do Fonseca e nas orlas' },
  ],

  destaquesFitness: [
    'Maior IDHM do estado do Rio (0,837), com infraestrutura de parques e academias.',
    'Ciclovia mais movimentada do Brasil e bike sharing gratuito (NitBike).',
    'Caminho Niemeyer como circuito de corrida com vista para a Baía de Guanabara.',
    'Região Oceânica para surf e esportes de mar, com faixa exclusiva de corrida em Itacoatiara.',
  ],

  precos: {
    avulsaMin: 80,
    avulsaMax: 190,
    mensalMin: 400,
    mensalMax: 1150,
    onlineMin: 190,
    onlineMax: 480,
  },

  conclusao:
    'Com altíssima qualidade de vida, orlas estruturadas e uma cultura de bike e praia que poucos lugares têm, Niterói é um ambiente convidativo para treinar. Um personal trainer ajuda a transformar essa estrutura toda em resultado — seja na musculação, na corrida ou nos esportes de mar.',

  faqsExtra: [
    {
      pergunta: 'Onde o personal costuma atender em Niterói?',
      resposta:
        'Icaraí concentra as academias e estúdios — com o Campo de São Bento como point de treinos leves —, o Caminho Niemeyer serve de circuito de corrida com vista para a Baía, e a Região Oceânica soma a faixa exclusiva de corrida de Itacoatiara e a cultura de esportes de mar. O atendimento em casa e em condomínio é forte em Icaraí, em Camboinhas e no Charitas. Com a ciclovia mais movimentada do Brasil e o NitBike gratuito, a bike também entra como treino e deslocamento.',
    },
    {
      pergunta: 'Moro em Niterói e trabalho no Rio: onde encaixo o treino?',
      resposta:
        'A regra dos pendulares da ponte e das barcas é ancorar o treino do lado de casa: sessão cedo em Icaraí ou na Região Oceânica antes da travessia, ou no fim do dia na volta — nunca depender de janelas no meio do expediente carioca. Sessões de 45 a 60 minutos perto de casa, duas a três vezes na semana, com um plano B domiciliar para os dias em que a travessia atrasa, mantêm a constância. O acompanhamento online completa as semanas mais imprevisíveis.',
    },
    {
      pergunta: 'Há acompanhamento em Niterói para quem sente dores ou tem limitações?',
      resposta:
        'Há. O Montinho Personal, destacado pelo portal, tem cursos voltados ao treinamento de pessoas com dores e limitações musculoesqueléticas, além da vivência prática de mais de 20 anos de musculação. Para Niterói, o formato é o acompanhamento online: treino adaptado à estrutura disponível (academia, condomínio, casa ou orla), vídeos de execução e ajustes contínuos. O trabalho é progressivo e sem promessa de cura — quadros clínicos pedem também médico ou fisioterapeuta.',
    },
  ],

  vizinhas: ['rio-de-janeiro-rj', 'vitoria-es', 'belo-horizonte-mg'],

  fontes: [
    { nome: 'IBGE Cidades — Niterói', url: 'https://cidades.ibge.gov.br/brasil/rj/niteroi/panorama' },
    { nome: 'Prefeitura de Niterói', url: 'https://www.niteroi.rj.gov.br/' },
    { nome: 'Atlas Brasil — IDHM', url: 'https://www.atlasbrasil.org.br/' },
  ],
  capaArte: {
    src: '/capas-cidade/niteroi-rj.webp',
    w: 1200,
    h: 675,
    alt:
      'Personal trainer em Niterói (RJ) em arte que une treino de força e cartões-postais reais da cidade — o Museu de Arte Contemporânea (MAC) de Niterói e a orla da Baía de Guanabara ao fundo — Personal por Perto',
    legenda:
      'Treino personalizado em Niterói: um plano feito para o seu corpo e a sua rotina, com acompanhamento profissional na cidade e região.',
  },
  atualizadoEm: '2026-07-23',
};
