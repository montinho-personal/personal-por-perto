import type { Cidade } from '../../lib/types';

export const cidade: Cidade = {
  slug: 'camacari-ba',
  nome: 'Camaçari',
  uf: 'BA',
  estado: 'Bahia',
  estadoSlug: 'bahia',
  regiao: 'Nordeste',
  gentilico: 'camaçariense',
  tipo: 'cidade',

  populacao: 300372,
  populacaoAno: 2022,
  idhm: 0.694,
  idhmClasse: 'médio',

  resumoEconomico:
    'Principal polo industrial do Nordeste e parte da Região Metropolitana de Salvador, Camaçari abriga o Polo Industrial de Camaçari — o primeiro complexo petroquímico planejado do país —, com mais de 90 empresas dos setores petroquímico, automotivo e de energia. Responde por cerca de um quinto do PIB baiano e combina renda industrial com um litoral de condomínios de alto padrão, como Guarajuba e Busca Vida.',

  mercado:
    'O mercado fitness está em expansão, impulsionado pela renda industrial e por um litoral de alto padrão com forte cultura de praia e estética. Condomínios litorâneos costumam ter academia própria, o que valoriza o atendimento personalizado, e a orla de Guarajuba funciona como espaço público de treino.',

  bairrosNobres: ['Guarajuba', 'Busca Vida', 'Jauá', 'Barra do Jacuípe'],
  bairrosPopulares: ['Centro', 'Gleba A', 'Phoc', 'Vila de Abrantes'],

  parques: [
    {
      nome: 'Orla de Guarajuba',
      descricao:
        'Orla urbanizada no km 43 da Estrada do Coco, com calçadão e ciclovia ao longo de toda a faixa de praia — o principal espaço de treino ao ar livre da região litorânea.',
    },
    {
      nome: 'Parque das Dunas de Abrantes',
      descricao:
        'Um dos maiores ecossistemas preservados da região, com dunas que chegam a cerca de 48 m e trilhas para caminhada em meio à natureza.',
    },
    {
      nome: 'Orlas de Jauá e Busca Vida',
      descricao:
        'Praias de águas calmas e faixas de areia ideais para corrida e caminhada, com a brisa marítima ajudando no conforto térmico.',
    },
  ],
  ciclovias:
    'A infraestrutura cicloviária se concentra no litoral, com ciclovia ao longo de toda a orla de Guarajuba e da Estrada do Coco (BA-099).',

  clima:
    'O clima é tropical quente e úmido do litoral baiano, com calor o ano todo e chuvas concentradas no outono e inverno.',
  climaTreino:
    'A brisa marítima favorece o treino na orla, mas o calor e a umidade pedem horários mais frescos (manhã e fim de tarde) e boa hidratação.',

  mobilidade:
    'O acesso a Salvador (a cerca de 50 km) é feito pela BR-324 e pela BA-099 (Estrada do Coco/Linha Verde), que estrutura todo o litoral. O transporte público municipal atende a sede e as localidades litorâneas, com forte fluxo pendular ligado ao polo industrial.',

  corridas: [
    {
      nome: 'Corrida 2 de Julho',
      descricao:
        'Reúne mais de 2 mil atletas em Camaçari, associada à data cívica baiana — uma das maiores provas locais.',
    },
    {
      nome: 'Circuito baiano de corridas de rua',
      descricao:
        'Camaçari integra o calendário de corridas de rua do estado, com provas que aproveitam a orla e a Estrada do Coco.',
    },
  ],
  culturaEsportiva:
    'A cena de corrida de rua cresce e está integrada ao circuito baiano, com forte componente de esporte e lazer no litoral — praia, areia e ciclismo na Estrada do Coco. A proximidade de Salvador também influencia a vida esportiva da cidade.',
  academias:
    'A oferta de academias acompanha a renda industrial e o litoral de alto padrão; muitos condomínios têm estrutura própria de treino, e a procura por personal trainers é puxada pelo público de maior poder aquisitivo de Guarajuba e Busca Vida.',

  academiasProximas: [
    { nome: 'Smart Fit Camaçari', detalhe: 'no Boulevard Shopping, na BA-535' },
  ],

  destaquesFitness: [
    'Litoral de alto padrão (Guarajuba, Busca Vida) com público para atendimento personalizado.',
    'Orla de Guarajuba com calçadão e ciclovia para treino ao ar livre.',
    'Renda industrial do Polo de Camaçari sustentando a demanda fitness.',
    'Parque das Dunas de Abrantes para trilhas e treino em ambiente natural.',
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
    'Entre o maior polo industrial do Nordeste e um litoral de alto padrão, Camaçari tem um perfil único — e uma demanda crescente por treino personalizado. Um personal trainer ajuda a aproveitar a orla de Guarajuba e a estrutura dos condomínios com método, respeitando o clima quente do litoral baiano.',

  vizinhas: ['salvador-ba', 'feira-de-santana-ba', 'aracaju-se'],

  fontes: [
    { nome: 'IBGE Cidades — Camaçari', url: 'https://cidades.ibge.gov.br/brasil/ba/camacari/panorama' },
    { nome: 'Prefeitura de Camaçari', url: 'https://www.camacari.ba.gov.br/' },
    { nome: 'Atlas Brasil — IDHM', url: 'https://www.atlasbrasil.org.br/' },
  ],
  atualizadoEm: '2026-08-27',

  capaArte: {
    src: '/capas-cidade/camacari-ba.webp',
    w: 1200,
    h: 900,
    alt:
      'Personal trainer em Camaçari (BA) em arte que reúne levantamento terra e agachamento, a igreja do Centro e as praias de Barra do Jacuípe e Arembepe — Personal por Perto',
    legenda:
      'Treino personalizado em Camaçari: um plano feito para o seu corpo e a sua rotina, com acompanhamento profissional na cidade e região.',
  },
};
