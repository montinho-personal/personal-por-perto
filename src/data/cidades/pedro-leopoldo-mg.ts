import type { Cidade } from '../../lib/types';

export const cidade: Cidade = {
  slug: 'pedro-leopoldo-mg',
  nome: 'Pedro Leopoldo',
  uf: 'MG',
  estado: 'Minas Gerais',
  estadoSlug: 'minas-gerais',
  regiao: 'Sudeste',
  gentilico: 'pedro-leopoldense',
  tipo: 'cidade',

  populacao: 62580,
  populacaoAno: 2022,
  idhm: 0.757,
  idhmClasse: 'alto',
  altitudeM: 700,

  resumoEconomico:
    'Na Região Metropolitana de Belo Horizonte, Pedro Leopoldo cresceu ligada à indústria do cimento — foi ali que, nos anos 1950, se instalou a Companhia de Cimento Portland Cauê, cuja pedra fundamental teve a presença de Juscelino Kubitschek, então governador de Minas. Com o encerramento da histórica fábrica de cimento, a economia local hoje se apoia em comércio e serviços, indústria diversificada, extração de calcário da região cárstica e agropecuária, além da proximidade com o Aeroporto Internacional de Confins, que dinamiza a logística do entorno metropolitano.',

  mercado:
    'Como cidade metropolitana de porte médio próxima a Belo Horizonte, Pedro Leopoldo tem um mercado fitness em consolidação, com academias de bairro e estúdios de treino funcional atendendo tanto quem mora na cidade quanto quem faz o movimento pendular com a capital. A busca por personal trainers cresce entre moradores que preferem treino individualizado perto de casa e aproveitam praças, o clima ameno da altitude e o entorno natural do carste para atividades ao ar livre.',

  bairrosNobres: ['Centro', 'Vera Cruz de Minas', 'Fidalgo', 'Dr. Lund'],
  bairrosPopulares: ['Cachoeira Grande', 'São Geraldo', 'Santo Antônio', 'Vera Cruz'],

  parques: [
    {
      nome: 'Praça da Estação',
      descricao:
        'Um dos principais pontos de encontro da cidade, ligada à história ferroviária de Pedro Leopoldo; serve de concentração e largada para corridas de rua e é usada para caminhada e treino ao ar livre no centro.',
    },
    {
      nome: 'Parque Estadual do Sumidouro',
      descricao:
        'Unidade de conservação na região do carste, entre Pedro Leopoldo e Lagoa Santa, com trilhas, lagoas e formações calcárias — espaço para caminhadas e atividades em meio à natureza, associado à Lapa Vermelha, sítio da paleontologia brasileira.',
    },
    {
      nome: 'Entorno da APA Carste de Lagoa Santa',
      descricao:
        'Parte do território municipal integra a Área de Proteção Ambiental Carste de Lagoa Santa, com grutas, dolinas e paisagem calcária; estradas e trilhas da região oferecem percursos para quem treina ao ar livre respeitando a fragilidade ambiental.',
    },
  ],
  ciclovias:
    'A malha cicloviária é limitada e concentrada em trechos da área urbana; boa parte do pedal e da corrida acontece nas vias do centro, em bairros residenciais e nas estradas de acesso aos distritos e à região do carste.',

  clima:
    'O clima é tropical de altitude, característico da região metropolitana de Belo Horizonte, com verão quente e chuvoso (de outubro a março) e inverno seco e mais ameno (de abril a setembro). A altitude em torno de 700 metros ajuda a suavizar as temperaturas, com noites e manhãs mais frescas no período seco.',
  climaTreino:
    'O clima de altitude favorece o treino ao ar livre na maior parte do ano; no verão, o ideal é treinar cedo ou no fim da tarde e reforçar a hidratação por causa do calor e da chuva no fim do dia. No inverno seco, as manhãs frescas pedem aquecimento adequado, e a baixa umidade recomenda atenção redobrada à hidratação.',

  mobilidade:
    'Pedro Leopoldo integra a Região Metropolitana de Belo Horizonte e se conecta à capital e às cidades vizinhas por rodovias estaduais, com fluxo intenso de deslocamento pendular. A cidade fica próxima ao Aeroporto Internacional de Belo Horizonte (Confins) e mantém forte ligação com sua história ferroviária, marcada pela antiga estação de trem no centro. O transporte urbano é feito por ônibus, integrado ao sistema metropolitano.',

  corridas: [
    {
      nome: 'Cia PM Run',
      descricao:
        'Uma das maiores corridas de rua da cidade, organizada em parceria com a Polícia Militar, com provas de 5 km e 10 km e caminhada, largando da região da Praça da Estação.',
    },
    {
      nome: 'Circuito Leopoldense de Corridas de Rua',
      descricao:
        'Circuito local de corridas de rua que movimenta a comunidade esportiva de Pedro Leopoldo ao longo do ano, com percursos pelas vias urbanas.',
    },
    {
      nome: 'Circuito das Cidades — Etapa Pedro Leopoldo',
      descricao:
        'Etapa municipal de um circuito regional de corridas, com provas de rua e caminhada abertas a atletas amadores e famílias.',
    },
  ],
  culturaEsportiva:
    'A cultura esportiva local combina corridas de rua tradicionais, o uso de praças e do centro histórico para caminhada e treino, e o aproveitamento do entorno natural do carste e do Parque do Sumidouro para atividades ao ar livre — em uma cidade que também é conhecida por ser terra natal de Chico Xavier e pela ligação histórica com JK.',
  academias:
    'A oferta é formada por academias de bairro, estúdios de musculação e espaços de treino funcional distribuídos pelo centro e pelos bairros residenciais, em porte compatível com uma cidade metropolitana de médio porte.',

  destaquesFitness: [
    'Cidade da Região Metropolitana de Belo Horizonte, com clima de altitude ameno favorável ao treino ao ar livre.',
    'Região cárstica de Lagoa Santa, com grutas, o Parque do Sumidouro e paisagem calcária no entorno.',
    'Corridas de rua tradicionais, como a Cia PM Run, com concentração na histórica Praça da Estação.',
    'Terra natal de Chico Xavier e ligada à história do cimento e a JK, próxima ao Aeroporto de Confins.',
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
    'Cidade metropolitana de clima ameno e entorno natural marcante, Pedro Leopoldo reúne praças, corridas de rua e a paisagem do carste como cenário para quem quer se movimentar. Um personal trainer ajuda a montar uma rotina que aproveite o clima de altitude, defina os melhores horários entre o verão chuvoso e o inverno seco e mantenha a constância perto de casa.',

  vizinhas: ['lagoa-santa-mg', 'santa-luzia-mg', 'contagem-mg'],

  fontes: [
    { nome: 'IBGE Cidades — Pedro Leopoldo', url: 'https://cidades.ibge.gov.br/brasil/mg/pedro-leopoldo/panorama' },
    { nome: 'Prefeitura de Pedro Leopoldo', url: 'https://pedroleopoldo.mg.gov.br/' },
    { nome: 'Atlas Brasil — IDHM', url: 'https://www.atlasbrasil.org.br/' },
  ],
  atualizadoEm: '2026-06-29',
};
