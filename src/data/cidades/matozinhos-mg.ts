import type { Cidade } from '../../lib/types';

export const cidade: Cidade = {
  slug: 'matozinhos-mg',
  nome: 'Matozinhos',
  uf: 'MG',
  estado: 'Minas Gerais',
  estadoSlug: 'minas-gerais',
  regiao: 'Sudeste',
  gentilico: 'matozinhense',
  tipo: 'cidade',

  populacao: 37618,
  populacaoAno: 2022,
  idhm: 0.731,
  idhmClasse: 'alto',
  altitudeM: 783,

  resumoEconomico:
    'Matozinhos fica no vetor norte da Região Metropolitana de Belo Horizonte, dentro da região cárstica de Lagoa Santa, um relevo de calcário com grutas, dolinas e sítios arqueológicos e paleontológicos. Essa mesma geologia sustenta a principal vocação econômica da cidade: a mineração de calcário e a indústria de cimento, com plantas de grandes grupos do setor instaladas no município e no seu distrito de Mocambeiro. A proximidade com Belo Horizonte, Pedro Leopoldo e Sete Lagoas integra Matozinhos ao mercado de trabalho e à logística metropolitana.',

  mercado:
    'Como cidade de porte pequeno inserida na RM de Belo Horizonte, Matozinhos tem um mercado fitness enxuto, formado por academias de bairro e estúdios locais, mas influenciado pela proximidade com centros maiores como Pedro Leopoldo, Sete Lagoas e a própria capital. A procura por personal trainers costuma vir de quem prefere atendimento perto de casa, sem deslocamento até a Grande BH, e de moradores que treinam ao ar livre aproveitando o clima ameno de altitude.',

  bairrosNobres: ['Centro', 'Bom Jesus', 'São Geraldo', 'Cidade Nova'],
  bairrosPopulares: ['São Pedro', 'Belvedere', 'Nova Matozinhos', 'Santa Terezinha'],

  parques: [
    {
      nome: 'Circuito das Grutas e carste de Lagoa Santa',
      descricao:
        'Matozinhos integra a região cárstica de Lagoa Santa, com grutas, morros calcários e trilhas no entorno — um cenário natural usado para caminhadas e atividades ao ar livre em meio a formações rochosas e vegetação preservada.',
    },
    {
      nome: 'Conjunto Arqueológico e Paisagístico dos Poções',
      descricao:
        'Área protegida no município que reúne sítios espeleológicos, paleontológicos e arqueológicos, incluindo o Morro Redondo, ponto culminante do carste de Lagoa Santa; o entorno oferece percursos para quem gosta de treinar em contato com a natureza.',
    },
    {
      nome: 'Ginásio Poliesportivo e praças centrais',
      descricao:
        'As praças do Centro, como a do Bom Jesus e a do Rosário, e o Ginásio Poliesportivo concentram parte da atividade física urbana da cidade, servindo de ponto de encontro para caminhada e treino.',
    },
  ],
  ciclovias:
    'A malha cicloviária é modesta, típica de cidade pequena; boa parte do pedal e da corrida acontece nas vias urbanas e nas estradas vicinais que cortam a região cárstica, exigindo atenção ao tráfego que se mistura ao fluxo de caminhões da mineração.',

  clima:
    'O clima é tropical de altitude (Cwa na classificação de Köppen), com verões quentes e chuvosos e invernos amenos e secos. A altitude em torno de 780 metros ajuda a manter temperaturas mais agradáveis que as de regiões baixas, com noites frescas no inverno e amplitude térmica marcada ao longo do dia.',
  climaTreino:
    'O período seco do inverno (maio a setembro) tende a ser o mais confortável para treinar ao ar livre, com dias ensolarados e menos calor. No verão, o ideal é priorizar o começo da manhã ou o fim da tarde para fugir do calor e das pancadas de chuva, mantendo a hidratação em dia.',

  mobilidade:
    'Matozinhos se conecta a Belo Horizonte pela MG-424, que liga a capital a Pedro Leopoldo, Matozinhos e Vespasiano, com a BR-040 nas proximidades como eixo regional de longa distância. A distância até BH é de cerca de 50 km, e o transporte metropolitano por ônibus (linhas operadas por empresas da região) faz a ligação diária com a capital e cidades vizinhas.',

  corridas: [
    {
      nome: 'Corrida de Aniversário de Matozinhos',
      descricao:
        'Prova de rua promovida pela prefeitura no calendário de aniversário da cidade, com percurso de cerca de 5 km partindo do Mercado Municipal e passando pelas principais vias do Centro, aberta a participantes de várias idades.',
    },
  ],
  culturaEsportiva:
    'A cultura esportiva local combina o futebol e as atividades comunitárias em praças e no ginásio poliesportivo com a corrida de rua incentivada pela prefeitura e o uso da paisagem cárstica para caminhadas e trilhas. A vida esportiva também é influenciada pela proximidade com a Grande BH.',
  academias:
    'A oferta é formada sobretudo por academias de musculação e treino funcional de bairro e estúdios locais, distribuídos pelo Centro e pelos bairros residenciais, com porte compatível com uma cidade pequena da região metropolitana.',

  destaquesFitness: [
    'Região cárstica de Lagoa Santa, com grutas, morros calcários e sítios arqueológicos que servem de cenário para trilhas e treino ao ar livre.',
    'Clima tropical de altitude, com inverno seco e ameno favorável às atividades ao ar livre.',
    'Cidade do vetor norte da RM de Belo Horizonte, a cerca de 50 km da capital pela MG-424.',
    'Economia ligada à mineração de calcário e à indústria de cimento, marca da paisagem e do dia a dia local.',
  ],

  precos: {
    avulsaMin: 50,
    avulsaMax: 115,
    mensalMin: 250,
    mensalMax: 700,
    onlineMin: 115,
    onlineMax: 350,
  },

  conclusao:
    'Cidade pequena da Grande BH, cercada pela paisagem única do carste de Lagoa Santa e com clima de altitude, Matozinhos oferece boas condições para treinar ao ar livre em quem sabe aproveitar as estações. Um personal trainer ajuda a montar uma rotina próxima de casa, ajustada ao clima e aos espaços disponíveis, mantendo a constância sem depender do deslocamento até a capital.',

  vizinhas: ['lagoa-santa-mg', 'sete-lagoas-mg'],

  fontes: [
    { nome: 'IBGE Cidades — Matozinhos', url: 'https://cidades.ibge.gov.br/brasil/mg/matozinhos/panorama' },
    { nome: 'Prefeitura de Matozinhos', url: 'https://www.matozinhos.mg.gov.br/' },
    { nome: 'Atlas Brasil — IDHM', url: 'https://www.atlasbrasil.org.br/' },
  ],
  atualizadoEm: '2026-06-29',
};
