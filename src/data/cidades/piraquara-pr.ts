import type { Cidade } from '../../lib/types';

export const cidade: Cidade = {
  slug: 'piraquara-pr',
  nome: 'Piraquara',
  uf: 'PR',
  estado: 'Paraná',
  estadoSlug: 'parana',
  regiao: 'Sul',
  gentilico: 'piraquarense',
  tipo: 'cidade',

  populacao: 118730,
  populacaoAno: 2022,
  idhm: 0.700,
  idhmClasse: 'alto',
  altitudeM: 900,

  resumoEconomico:
    'Na Região Metropolitana de Curitiba (RMC), Piraquara é conhecida como a "cidade das águas": cerca de 93% do território está em áreas de mananciais, com mais de mil nascentes catalogadas, e os reservatórios do Iraí e de Piraquara abastecem grande parte da metrópole. Por estar em região de proteção ambiental, a economia é fortemente condicionada à preservação dos recursos hídricos, combinando produção de água, agricultura em pequenas propriedades, serviços, comércio e o turismo ligado à Serra do Mar e ao Parque Estadual Pico do Marumbi. Boa parte da população trabalha em Curitiba e municípios vizinhos, em uma dinâmica típica de cidade-dormitório da RMC.',

  mercado:
    'Como cidade metropolitana de Curitiba com população acima de 100 mil habitantes, Piraquara tem um mercado fitness em formação, apoiado em academias de bairro e estúdios de treino, com parte dos moradores também buscando serviços na capital. A procura por personal trainers cresce entre quem quer treinar perto de casa, conciliando a rotina de deslocamento, e entre praticantes de corrida e trilha atraídos pela proximidade da Serra do Mar.',

  bairrosNobres: ['Centro', 'Vila Macedo', 'Planta Araçatuba', 'Roça Nova'],
  bairrosPopulares: ['Guarituba', 'Vila Ipanema', 'Vila Juliana', 'Planta Guarituba'],

  parques: [
    {
      nome: 'Parque Estadual Pico do Marumbi',
      descricao:
        'Unidade de conservação compartilhada com Morretes e Quatro Barras, abriga um dos pontos mais altos da Serra do Mar paranaense e trilhas de montanha que atraem montanhistas e quem treina em terreno técnico e de subida.',
    },
    {
      nome: 'Entorno dos mananciais (represa do Iraí e Piraquara)',
      descricao:
        'As áreas de proteção dos reservatórios que abastecem a RMC formam um cinturão verde com estradas e caminhos rurais usados para caminhada, pedal e corrida, sempre respeitando as restrições ambientais de preservação das águas.',
    },
    {
      nome: 'Serra do Mar e Estrada da Graciosa',
      descricao:
        'A faixa serrana a leste do município concede acesso a trilhas, túneis e antigos caminhos históricos da Mata Atlântica, ambiente procurado por trail runners e por quem busca atividade ao ar livre em meio à natureza.',
    },
  ],
  ciclovias:
    'A estrutura cicloviária urbana ainda é limitada e concentrada em trechos próximos ao Centro e às vias principais; grande parte do pedal e da corrida acontece em vias de bairro e nas estradas rurais do entorno dos mananciais.',

  clima:
    'O clima é subtropical úmido (Cfb), sem estação seca definida e com verões amenos, típico do planalto curitibano. As temperaturas variam bastante ao longo do dia e o inverno é frio: entre junho e julho as máximas costumam ficar em torno de 18 °C e as mínimas podem chegar perto de 5 °C, com possibilidade de geada. A umidade é alta o ano todo, influenciada pela proximidade da Serra do Mar.',
  climaTreino:
    'O frio do inverno pede aquecimento mais longo e roupa em camadas, especialmente para treinos cedo ou à noite; a umidade elevada e as mudanças rápidas de tempo recomendam atenção à previsão para quem treina ao ar livre. Nos meses mais frios, ambientes fechados ganham espaço, enquanto a primavera e o verão amenos são ótimos para corrida e trilha.',

  mobilidade:
    'Piraquara integra a Rede Integrada de Transporte da RMC e tem ligação ferroviária histórica: a cidade fica no ramal que sobe a Serra do Mar, percurso do tradicional trem turístico que liga Curitiba ao litoral. O acesso rodoviário se dá por vias metropolitanas que conectam a Curitiba e a São José dos Pinhais, e a BR-277 e a Estrada da Graciosa ligam a região ao litoral paranaense.',

  corridas: [
    {
      nome: 'Provas de trail na Serra do Mar',
      descricao:
        'A região serrana entre Piraquara e o litoral recebe provas de corrida em trilha que aproveitam caminhos históricos, túneis antigos e o ambiente de Mata Atlântica, com percursos de diferentes distâncias.',
    },
    {
      nome: 'Corridas de rua na RMC',
      descricao:
        'Moradores participam de provas de rua realizadas em Piraquara e em municípios vizinhos da Região Metropolitana de Curitiba, parte do calendário esportivo regional.',
    },
  ],
  culturaEsportiva:
    'A cultura esportiva combina o uso das áreas verdes e estradas rurais dos mananciais para caminhada e pedal com a forte vocação para montanhismo e trail running na Serra do Mar, herança também da colonização e da vida ao ar livre típica do interior metropolitano.',
  academias:
    'A oferta é formada principalmente por academias de bairro e estúdios de musculação e treino funcional, distribuídos entre o Centro e as áreas residenciais; parte dos moradores também utiliza serviços em Curitiba, dada a integração metropolitana.',

  destaquesFitness: [
    'Cidade das águas: cerca de 93% do território em áreas de mananciais que abastecem a Região Metropolitana de Curitiba.',
    'Proximidade da Serra do Mar e do Parque Estadual Pico do Marumbi, polo de trilhas e trail running.',
    'Clima subtropical frio, com inverno de geadas que muda o planejamento dos treinos ao ar livre.',
    'Município metropolitano de Curitiba com ligação ferroviária histórica rumo ao litoral.',
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
    'Cercada por mananciais e pela Serra do Mar, com inverno frio e forte vocação para trilha, Piraquara pede um treino que aproveite a natureza do entorno e respeite o clima do planalto. Um personal trainer ajuda a montar uma rotina constante, ajustando horários e intensidade ao frio e à umidade, e a explorar com segurança a corrida e as trilhas da região metropolitana.',

  vizinhas: ['curitiba-pr', 'sao-jose-dos-pinhais-pr'],

  fontes: [
    { nome: 'IBGE Cidades — Piraquara', url: 'https://cidades.ibge.gov.br/brasil/pr/piraquara/panorama' },
    { nome: 'Prefeitura de Piraquara', url: 'https://www.piraquara.pr.gov.br/' },
    { nome: 'Atlas Brasil — IDHM', url: 'https://www.atlasbrasil.org.br/' },
  ],
  atualizadoEm: '2026-06-29',
};
