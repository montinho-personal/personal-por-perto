import type { Cidade } from '../../lib/types';

export const cidade: Cidade = {
  slug: 'governador-valadares-mg',
  nome: 'Governador Valadares',
  uf: 'MG',
  estado: 'Minas Gerais',
  estadoSlug: 'minas-gerais',
  regiao: 'Sudeste',
  gentilico: 'valadarense',
  tipo: 'cidade',

  populacao: 257171,
  populacaoAno: 2022,
  idhm: 0.727,
  idhmClasse: 'alto',
  altitudeM: 170,

  resumoEconomico:
    'Principal polo do leste de Minas, Governador Valadares tem economia dominada por serviços, comércio e administração pública, com forte presença da pecuária e da exportação de pedras preciosas. É a "Capital Mundial do Voo Livre" graças ao Pico da Ibituruna, motor do turismo da cidade.',

  mercado:
    'Cidade-polo regional com cultura ao ar livre marcante — orla do Rio Doce, Ilha dos Araújos e Ibituruna —, Valadares favorece o treino funcional, a corrida e o ciclismo, com uma das maiores taxas de bicicletas por habitante de Minas.',

  bairrosNobres: ['Grã-Duquesa', 'Lourdes', 'Centro', 'Vila Isa'],
  bairrosPopulares: ['Santa Rita', 'São Pedro', 'Turmalina', 'Vila Bretas'],

  parques: [
    {
      nome: 'Orla da Ilha dos Araújos',
      descricao:
        'Calçadão arborizado de cerca de 4,5 km à beira do Rio Doce, intensamente usado para caminhada, corrida e ciclismo.',
    },
    {
      nome: 'Orla da Avenida Minas Gerais (Rio Doce)',
      descricao:
        'Calçadão à beira do rio para caminhada e ciclismo, no eixo central da cidade.',
    },
    {
      nome: 'Pico da Ibituruna',
      descricao:
        'A 1.123 m de altitude, oferece trilhas e subida para caminhada e trail, além de ser o ponto mundial de voo livre da cidade.',
    },
  ],
  ciclovias:
    'A malha cicloviária tem cerca de 15 km (parte sendo convertida em ciclofaixas), com uma das maiores taxas de bicicletas por habitante de Minas.',

  clima:
    'O clima é tropical quente semiúmido, com média anual em torno de 24 °C e chuvas concentradas de outubro a março.',
  climaTreino:
    'O calor pede treinos cedo de manhã ou à tarde; o inverno seco e ameno é a janela ideal para atividades ao ar livre.',

  mobilidade:
    'Valadares fica no cruzamento da BR-116 (Rio–Bahia) com a BR-381, posição estratégica que conecta o leste mineiro ao Espírito Santo e à Bahia.',

  corridas: [
    {
      nome: 'Copa Valadares de Parapente',
      descricao:
        'Abre o calendário nacional do voo livre, reunindo pilotos do Brasil e do exterior no Pico da Ibituruna.',
    },
    {
      nome: 'Campeonato Brasileiro de Parapente',
      descricao:
        'Já sediado na cidade, reforça sua condição de capital nacional do voo livre, ao lado de provas esportivas no aniversário do município.',
    },
  ],
  culturaEsportiva:
    'A identidade esportiva está fortemente ligada ao voo livre (asa-delta e parapente), com tradição internacional desde o 1º Mundial de asa-delta de 1989, somada a uma cultura outdoor robusta na orla e no Ibituruna.',
  academias:
    'A oferta de academias e estúdios é complementada por uma cultura ao ar livre forte, com a Ilha dos Araújos e o Ibituruna como espaços naturais de treino.',

  academiasProximas: [
    { nome: 'Smart Fit GV Shopping', detalhe: 'na Rua 7 de Setembro, no Centro' },
    { nome: 'Smart Fit Esplanadinha', detalhe: 'no bairro Esplanadinha' },
  ],

  destaquesFitness: [
    'Capital do voo livre — esporte de aventura no DNA da cidade.',
    'Ilha dos Araújos: calçadão de 4,5 km, hub de corrida e ciclismo.',
    'Trail e subida do Ibituruna para treino de resistência.',
    'Alta cultura de ciclismo (muitas bicicletas por habitante).',
  ],

  precos: {
    avulsaMin: 65,
    avulsaMax: 150,
    mensalMin: 330,
    mensalMax: 900,
    onlineMin: 160,
    onlineMax: 420,
  },

  conclusao:
    'Capital do voo livre, Governador Valadares une o Rio Doce, a Ilha dos Araújos e o Pico da Ibituruna numa cultura outdoor única. Um personal trainer ajuda a aproveitar o calçadão e o trail do Ibituruna com método, ajustando o treino ao calor do leste mineiro.',

  vizinhas: ['ipatinga-mg', 'teofilo-otoni-mg'],

  faqsExtra: [
    {
      pergunta: 'Existe preparo físico para voo livre em Governador Valadares?',
      resposta:
        'É uma especialidade que só existe em poucos lugares do mundo — e o Ibituruna, considerado um dos melhores sítios de voo livre do Brasil, faz de Valadares um deles. O preparo trabalha core e lombar para as horas de decolagem e comando, pernas para as corridas de decolagem em rampa com equipamento nas costas e mobilidade de ombro. Na temporada de competições, pilotos visitantes contratam pacotes curtos de condicionamento.',
    },
    {
      pergunta: 'Onde treinar ao ar livre em Governador Valadares?',
      resposta:
        'A orla do rio Doce é o corredor clássico de caminhada e corrida, com o Ibituruna de moldura; a subida do pico, para quem busca perna e fôlego, é o teste definitivo da cidade — quase mil metros de ganho até a rampa. Praças revitalizadas e as ilhas do rio completam o circuito. No calor do vale, manhã cedo e fim de tarde são as janelas que funcionam.',
    },
    {
      pergunta: 'Quanto custa personal trainer em Governador Valadares?',
      resposta:
        'Os valores ficam abaixo dos praticados em Belo Horizonte — sessões avulsas mais acessíveis e pacotes mensais que variam com a frequência semanal. O centro e o bairro de Lourdes concentram os valores mais altos; treino em dupla e pacotes trimestrais são as formas mais comuns de reduzir o custo por sessão. A consultoria online atende quem está nos distritos e nas cidades menores da região.',
    },
  ],
  capaArte: {
    src: '/capas-cidade/governador-valadares-mg.webp',
    w: 1200,
    h: 675,
    alt: 'Personal trainer em Governador Valadares (MG) em arte com o Pico da Ibituruna ao fundo, o skyline da cidade e o treino em primeiro plano — Personal por Perto',
    legenda: 'Treino personalizado em Governador Valadares: movimento, força e resultado com acompanhamento profissional no leste mineiro, aos pés da Ibituruna.',
  },
  fontes: [
    { nome: 'IBGE Cidades — Governador Valadares', url: 'https://cidades.ibge.gov.br/brasil/mg/governador-valadares/panorama' },
    { nome: 'Prefeitura de Governador Valadares', url: 'https://www.valadares.mg.gov.br/' },
    { nome: 'Atlas Brasil — IDHM', url: 'https://www.atlasbrasil.org.br/' },
  ],
  atualizadoEm: '2026-08-27',
};
