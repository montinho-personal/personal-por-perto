import type { Cidade } from '../../lib/types';

export const cidade: Cidade = {
  slug: 'acarau-ce',
  nome: 'Acaraú',
  uf: 'CE',
  estado: 'Ceará',
  estadoSlug: 'ceara',
  regiao: 'Nordeste',
  gentilico: 'acarauense',
  tipo: 'cidade',

  populacao: 65264,
  populacaoAno: 2022,
  idhm: 0.601,
  idhmClasse: 'médio',
  altitudeM: 9,

  resumoEconomico:
    'No litoral oeste cearense, Acaraú vive da relação com o mar e com o estuário do rio Acaraú. A economia combina a pesca artesanal (com destaque para a lagosta), a carcinicultura (criação de camarão em viveiros), a cultura do coco e do caju e, mais recentemente, a geração de energia eólica nos parques instalados ao longo da faixa litorânea. O turismo de praia ganha força pela proximidade com a Rota das Emoções e por trechos de orla como Arpoeiras e Aranaú, procurados por quem busca vento forte para esportes a vela.',

  mercado:
    'Como cidade média do interior litorâneo, Acaraú tem um mercado fitness enxuto, formado sobretudo por academias locais de musculação e treino funcional no Centro e nos bairros residenciais. A procura por personal trainers tende a vir de quem quer treino orientado para o calor constante e para aproveitar a orla e o vento como cenário de atividade ao ar livre.',

  bairrosNobres: ['Centro', 'Senador Pompeu', 'São Francisco', 'Alto'],
  bairrosPopulares: ['Padre Linhares', 'Cohab', 'Edmundo Monte Coelho', 'Carmo'],

  parques: [
    {
      nome: 'Praia de Arpoeiras',
      descricao:
        'Praia conhecida pela grande faixa de areia que se forma na maré baixa, com vento constante que atrai a prática de kitesurf; o areal extenso serve de cenário para caminhada e corrida ao ar livre.',
    },
    {
      nome: 'Praia de Aranaú',
      descricao:
        'Vila de pescadores cercada por dunas e pelo encontro do rio com o mar, com orla usada para caminhada e atividades ao ar livre em meio à paisagem natural do litoral.',
    },
    {
      nome: 'Estuário do rio Acaraú',
      descricao:
        'Área de manguezais e canais que margeia a cidade, ligada à pesca e à carcinicultura; o entorno e a orla fluvial oferecem percursos para quem treina próximo da natureza.',
    },
  ],
  ciclovias:
    'A estrutura cicloviária é modesta e concentrada em trechos da área urbana; boa parte do pedal e da corrida acontece nas vias do Centro, nos acessos às praias e ao longo da orla.',

  clima:
    'O clima é tropical quente e litorâneo, com temperaturas elevadas o ano inteiro e duas estações marcadas: a chuvosa (em geral de fevereiro a maio) e a seca, mais longa, no restante do ano. O vento é uma característica forte da região, soprando com mais intensidade entre julho e janeiro, o que favorece os esportes a vela na orla.',
  climaTreino:
    'O calor constante pede treinar bem cedo ou no fim da tarde, com hidratação reforçada e atenção à exposição solar perto do mar; nos horários de pico, ambientes climatizados são a opção mais segura, e a brisa litorânea ajuda a amenizar o esforço ao ar livre.',

  mobilidade:
    'O principal eixo de ligação é a CE-085, a Rodovia Estruturante, que conecta Acaraú ao restante do litoral oeste e a Fortaleza; o trecho entre Acaraú e Itarema foi duplicado e a cidade ganhou um anel viário que desvia o tráfego pesado do centro urbano. O transporte interno é feito por ônibus, vans e mototáxis, comuns no deslocamento até as praias.',

  corridas: [
    {
      nome: 'Corridas de rua locais',
      descricao:
        'A cidade recebe provas de corrida de rua promovidas por grupos e patrocinadores locais, geralmente com percursos pelo Centro e pela orla, reforçando o hábito de correr ao ar livre.',
    },
    {
      nome: 'Esportes a vela na orla',
      descricao:
        'Mais do que corrida, o litoral de Acaraú é polo de kitesurf e windsurf por causa do vento forte, atraindo praticantes que combinam treino físico com esportes aquáticos.',
    },
  ],
  culturaEsportiva:
    'A cultura esportiva mistura o uso das praias e da orla para caminhada e corrida, a forte presença de esportes a vela impulsionada pelo vento e a vida ligada ao mar e à pesca — tudo moldado pelo calor litorâneo constante.',
  academias:
    'A oferta é formada principalmente por academias locais de musculação e treino funcional, distribuídas pelo Centro e pelos bairros residenciais, com porte compatível com uma cidade média do litoral.',

  academiasProximas: [
    { nome: 'Arena Fitness Acaraú', detalhe: 'na Av. José Monteiro de Melo, no Buriti' },
  ],
  academiasVerificadasEm: '2026-08-27',

  destaquesFitness: [
    'Litoral oeste cearense com praias de areal extenso, como Arpoeiras e Aranaú, para treino ao ar livre.',
    'Vento forte o ano todo, que faz da orla um polo de kitesurf e windsurf.',
    'Calor litorâneo constante, que exige planejar horário, hidratação e proteção solar no treino.',
    'Economia ligada ao mar: pesca artesanal, carcinicultura e energia eólica na faixa costeira.',
  ],

  precos: {
    avulsaMin: 45,
    avulsaMax: 105,
    mensalMin: 230,
    mensalMax: 640,
    onlineMin: 105,
    onlineMax: 330,
  },

  conclusao:
    'Cidade quente, ventosa e voltada para o mar, Acaraú pede um treino adaptado ao clima litorâneo e que aproveite as praias e a orla como espaço de atividade. Um personal trainer ajuda a organizar a rotina respeitando o calor, escolhendo os melhores horários e mantendo a constância ao longo das estações chuvosa e seca.',

  vizinhas: ['sobral-ce', 'camocim-ce'],

  fontes: [
    { nome: 'IBGE Cidades — Acaraú', url: 'https://cidades.ibge.gov.br/brasil/ce/acarau/panorama' },
    { nome: 'Prefeitura de Acaraú', url: 'https://www.acarau.ce.gov.br/' },
    { nome: 'Atlas Brasil — IDHM', url: 'https://www.atlasbrasil.org.br/' },
  ],
  atualizadoEm: '2026-08-27',
  capaArte: {
    src: '/capas-cidade/acarau-ce.webp',
    w: 1200,
    h: 900,
    alt:
      'Personal trainer em Acaraú (CE) em arte que une treino em dupla no calçadão da beira-rio e o casario com a igreja da cidade no litoral cearense — Personal por Perto',
    legenda:
      'Treino personalizado em Acaraú: um plano feito para o seu corpo e a sua rotina, com acompanhamento profissional na cidade e região.',
  },
};
