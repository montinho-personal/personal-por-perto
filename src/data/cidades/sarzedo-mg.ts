import type { Cidade } from '../../lib/types';

export const cidade: Cidade = {
  slug: 'sarzedo-mg',
  nome: 'Sarzedo',
  uf: 'MG',
  estado: 'Minas Gerais',
  estadoSlug: 'minas-gerais',
  regiao: 'Sudeste',
  gentilico: 'sarzedense',
  tipo: 'cidade',

  populacao: 36844,
  populacaoAno: 2022,
  idhm: 0.734,
  idhmClasse: 'alto',
  altitudeM: 796,

  resumoEconomico:
    'Sarzedo fica no vetor sudoeste da Região Metropolitana de Belo Horizonte, a cerca de 30 km da capital, e nasceu do povoamento ligado à mineração de ferro e à antiga estação ferroviária do início do século XX. Emancipada de Betim em 1995, é um dos municípios mais novos da RMBH e cresceu rápido nas últimas décadas, com forte caráter residencial. A economia combina mineração, indústria e serviços — com um parque industrial que reúne dezenas de empresas — e ainda guarda uma tradição na produção de hortaliças. A proximidade com Betim, Ibirité e a capital sustenta o fluxo pendular de trabalho e o comércio local.',

  mercado:
    'Por ser um município metropolitano em expansão e de perfil residencial, Sarzedo tem um mercado fitness formado sobretudo por academias de bairro e estúdios de treino que atendem quem mora na cidade mas trabalha em Betim, Ibirité ou Belo Horizonte. A procura por personal trainers cresce entre moradores que querem otimizar o tempo livre após o deslocamento diário e manter uma rotina de treino perto de casa.',

  bairrosNobres: ['Centro', 'Masterville', 'Sarzedo Central Parque', 'Jardim Vera Cruz'],
  bairrosPopulares: ['Santa Rosa', 'Brasília', 'São Joaquim', 'Imaculada Conceição'],

  parques: [
    {
      nome: 'Entorno da Serra do Rola-Moça',
      descricao:
        'Sarzedo está no vetor sudoeste da RMBH, próximo ao maciço da Serra do Rola-Moça — uma das maiores áreas de preservação em região urbana do país, com trilhas, mirantes e campos de altitude na transição entre Cerrado e Mata Atlântica, procurados por quem gosta de caminhada, trilha e mountain bike.',
    },
    {
      nome: 'Vales do ribeirão Sarzedo',
      descricao:
        'O ribeirão Sarzedo marca a divisa natural com Betim ao norte e desenha o relevo do município; as vias e o entorno dos vales servem de referência para caminhada e corrida na área urbana.',
    },
    {
      nome: 'Praças e áreas de lazer urbanas',
      descricao:
        'Praças e espaços públicos distribuídos pelos bairros centrais concentram a atividade física do dia a dia — caminhada, treino funcional ao ar livre e uso de equipamentos de ginástica.',
    },
  ],
  ciclovias:
    'A malha cicloviária é limitada e concentrada em trechos da área urbana; grande parte do pedal e da corrida acontece nas vias dos bairros e em estradas de acesso ao entorno de serra, o que pede atenção com o trânsito metropolitano.',

  clima:
    'O clima é tropical de altitude, típico da Região Metropolitana de Belo Horizonte, com a sede a cerca de 796 m. O ano se divide entre um verão quente e chuvoso (de outubro a março) e um inverno mais seco e ameno (de abril a setembro), quando as manhãs ficam mais frias e o ar, mais seco.',
  climaTreino:
    'A altitude ameniza o calor e torna o treino ao ar livre agradável boa parte do ano; no verão chuvoso, convém ajustar horários para escapar das pancadas de fim de tarde, e no inverno seco vale reforçar a hidratação e o aquecimento nas manhãs mais frias.',

  mobilidade:
    'Sarzedo se conecta à capital e aos municípios vizinhos por rodovias da RMBH, com acesso à BR-381 (Rodovia Fernão Dias) e à MG-040, e é atendida pelo transporte metropolitano por ônibus que liga a cidade a Betim, Ibirité e Belo Horizonte. O deslocamento pendular diário para trabalho e estudo marca a rotina de boa parte da população.',

  corridas: [
    {
      nome: 'Corridas de rua do calendário metropolitano',
      descricao:
        'A proximidade com Betim, Ibirité, Contagem e Belo Horizonte coloca os corredores de Sarzedo perto de um calendário movimentado de provas de rua na região metropolitana ao longo do ano.',
    },
    {
      nome: 'Percursos no entorno da Serra do Rola-Moça',
      descricao:
        'As trilhas e estradas do maciço da Serra do Rola-Moça, no vetor sudoeste da RMBH, atraem praticantes de corrida de trilha e mountain bike que buscam desafio em terreno de altitude.',
    },
  ],
  culturaEsportiva:
    'A cultura esportiva de Sarzedo combina o uso das áreas de serra do entorno para trilha e pedal com a forte ligação metropolitana, que aproxima os moradores das provas de rua e da estrutura esportiva de Belo Horizonte, Betim e do restante da RMBH.',
  academias:
    'A oferta é formada sobretudo por academias de musculação e treino funcional espalhadas pelos bairros, de porte compatível com um município metropolitano em crescimento, atendendo quem prefere treinar perto de casa em vez de na capital.',

  destaquesFitness: [
    'Município do vetor sudoeste da Região Metropolitana de Belo Horizonte, com rotina de deslocamento pendular.',
    'Proximidade com o maciço da Serra do Rola-Moça, com trilhas e campos de altitude para atividade ao ar livre.',
    'Clima tropical de altitude, que favorece o treino ao ar livre boa parte do ano.',
    'Cidade nova, emancipada de Betim em 1995, com origem na mineração de ferro e na antiga estação ferroviária.',
  ],

  precos: {
    avulsaMin: 55,
    avulsaMax: 115,
    mensalMin: 260,
    mensalMax: 700,
    onlineMin: 120,
    onlineMax: 350,
  },

  conclusao:
    'Cidade nova e metropolitana, ligada ao dia a dia de Betim, Ibirité e Belo Horizonte, Sarzedo pede uma rotina de treino que caiba entre o trabalho na região e a vida no bairro. Um personal trainer ajuda a aproveitar o clima de altitude e o entorno de serra, definir os melhores horários e manter a constância mesmo com o deslocamento diário.',

  vizinhas: ['betim-mg', 'ibirite-mg'],

  fontes: [
    { nome: 'IBGE Cidades — Sarzedo', url: 'https://cidades.ibge.gov.br/brasil/mg/sarzedo/panorama' },
    { nome: 'Prefeitura de Sarzedo', url: 'https://sarzedo.mg.gov.br/' },
    { nome: 'Atlas Brasil — IDHM', url: 'https://www.atlasbrasil.org.br/' },
  ],
  atualizadoEm: '2026-06-29',
};
