import type { Cidade } from '../../lib/types';

export const cidade: Cidade = {
  slug: 'ibirite-mg',
  nome: 'Ibirité',
  uf: 'MG',
  estado: 'Minas Gerais',
  estadoSlug: 'minas-gerais',
  regiao: 'Sudeste',
  gentilico: 'ibiriteense',
  tipo: 'cidade',

  populacao: 170537,
  populacaoAno: 2022,
  idhm: 0.704,
  idhmClasse: 'alto',
  altitudeM: 882,

  resumoEconomico:
    'Ibirité integra a Região Metropolitana de Belo Horizonte e tem forte caráter de cidade-dormitório: boa parte dos moradores trabalha nos municípios vizinhos, sobretudo Belo Horizonte, Contagem e Betim. O território abriga a maior parte da Refinaria Gabriel Passos (REGAP), da Petrobras, distribuída também por Betim e Sarzedo — em torno da qual surgiram bairros como Petrolina, Petrovale e Ouro Negro. O comércio e os serviços locais atendem a uma população numerosa e altamente urbanizada, enquanto a atividade industrial e a mineração completam a base econômica do município.',

  mercado:
    'Por ser um município metropolitano populoso e muito urbanizado, Ibirité tem um mercado fitness formado principalmente por academias de bairro e estúdios de treino que atendem quem mora na cidade mas trabalha na capital. A procura por personal trainers cresce entre pessoas que buscam otimizar o pouco tempo livre após o deslocamento diário e organizar uma rotina de treino perto de casa.',

  bairrosNobres: ['Centro', 'Marilândia', 'Jardim Riacho das Pedras', 'Petrovale'],
  bairrosPopulares: ['Durval de Barros', 'Petrolina', 'Ouro Negro', 'Vila Ideal'],

  parques: [
    {
      nome: 'Parque Estadual da Serra do Rola-Moça',
      descricao:
        'Uma das maiores áreas de preservação em região urbana do país, com trechos em Ibirité, Belo Horizonte, Nova Lima e Brumadinho. Reúne trilhas, mirantes e campos de altitude na transição entre Cerrado e Mata Atlântica — cenário procurado por quem gosta de caminhada, trilha e mountain bike.',
    },
    {
      nome: 'Lagoa (Represa) de Ibirité',
      descricao:
        'Formada em 1968 pelo represamento do ribeirão Sarzedo como fonte de água para a Refinaria Gabriel Passos, é um marco geográfico da cidade; o entorno serve de referência para caminhadas, ainda que a área conviva com demandas de saneamento e revitalização.',
    },
    {
      nome: 'Serra Três Irmãos (Serra da Jangada)',
      descricao:
        'Relevo acidentado ao sul do município, com elevações que passam de 1.400 m e fazem divisa com Brumadinho; oferece percursos de subida e paisagem para quem treina ao ar livre em terreno inclinado.',
    },
  ],
  ciclovias:
    'A malha cicloviária é limitada e concentrada em trechos da área urbana; grande parte do pedal e da corrida acontece nas vias dos bairros e em estradas de acesso às áreas de serra, o que pede atenção com o trânsito metropolitano.',

  clima:
    'O clima é tropical de altitude, típico da Região Metropolitana de Belo Horizonte, com a sede a cerca de 882 m. O ano se divide entre um verão quente e chuvoso (de outubro a março) e um inverno mais seco e ameno (de abril a setembro), quando as manhãs ficam mais frias e o ar, mais seco.',
  climaTreino:
    'A altitude ameniza o calor e torna o treino ao ar livre agradável boa parte do ano; no verão chuvoso, convém ajustar horários para escapar das pancadas de fim de tarde, e no inverno seco vale reforçar a hidratação e o aquecimento nas manhãs mais frias.',

  mobilidade:
    'Ibirité se conecta à capital e aos municípios vizinhos por rodovias da RMBH, com acesso próximo à BR-040, e é atendida pelo transporte metropolitano por ônibus que liga a cidade a Belo Horizonte, Contagem e Betim. O deslocamento pendular diário para trabalho e estudo marca a rotina de boa parte da população.',

  corridas: [
    {
      nome: 'Corridas de rua do calendário metropolitano',
      descricao:
        'A proximidade com Belo Horizonte, Contagem e Betim coloca os corredores de Ibirité perto de um calendário movimentado de provas de rua na região metropolitana ao longo do ano.',
    },
    {
      nome: 'Percursos na Serra do Rola-Moça',
      descricao:
        'As trilhas e estradas do parque estadual e da serra atraem praticantes de corrida de trilha e mountain bike que buscam desafio em terreno de altitude.',
    },
  ],
  culturaEsportiva:
    'A cultura esportiva de Ibirité combina o uso das áreas de serra e do parque estadual para trilha e pedal com a forte ligação metropolitana, que aproxima os moradores das provas de rua e da estrutura esportiva de Belo Horizonte e do entorno.',
  academias:
    'A oferta é formada sobretudo por academias de musculação e treino funcional espalhadas pelos bairros, de porte compatível com uma cidade metropolitana populosa, atendendo quem prefere treinar perto de casa em vez de na capital.',

  destaquesFitness: [
    'Parte do Parque Estadual da Serra do Rola-Moça, com trilhas e campos de altitude para atividade ao ar livre.',
    'Clima tropical de altitude, que favorece o treino ao ar livre boa parte do ano.',
    'Cidade da Região Metropolitana de Belo Horizonte, com rotina de deslocamento pendular para a capital.',
    'Território que abriga a maior parte da Refinaria Gabriel Passos (REGAP), da Petrobras.',
  ],

  precos: {
    avulsaMin: 55,
    avulsaMax: 120,
    mensalMin: 260,
    mensalMax: 720,
    onlineMin: 120,
    onlineMax: 360,
  },

  conclusao:
    'Cidade metropolitana e populosa, cercada pela serra e ligada ao dia a dia de Belo Horizonte, Ibirité pede uma rotina de treino que caiba entre o trabalho na capital e a vida no bairro. Um personal trainer ajuda a aproveitar o clima de altitude, definir os melhores horários e manter a constância mesmo com o deslocamento diário.',

  vizinhas: ['betim-mg', 'contagem-mg', 'belo-horizonte-mg'],

  fontes: [
    { nome: 'IBGE Cidades — Ibirité', url: 'https://cidades.ibge.gov.br/brasil/mg/ibirite/panorama' },
    { nome: 'Prefeitura de Ibirité', url: 'https://www.ibirite.mg.gov.br/' },
    { nome: 'Atlas Brasil — IDHM', url: 'https://www.atlasbrasil.org.br/' },
  ],
  atualizadoEm: '2026-06-29',
};
