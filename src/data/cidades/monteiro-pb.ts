import type { Cidade } from '../../lib/types';

export const cidade: Cidade = {
  slug: 'monteiro-pb',
  nome: 'Monteiro',
  uf: 'PB',
  estado: 'Paraíba',
  estadoSlug: 'paraiba',
  regiao: 'Nordeste',
  gentilico: 'monteirense',
  tipo: 'cidade',

  populacao: 32277,
  populacaoAno: 2022,
  idhm: 0.628,
  idhmClasse: 'médio',
  altitudeM: 599,

  resumoEconomico:
    'Principal cidade do Cariri Ocidental paraibano, no sul do estado, Monteiro é o maior município da Paraíba em área territorial e funciona como polo comercial e de serviços para uma vasta região do semiárido. A economia combina o comércio que atende as cidades vizinhas, a agropecuária típica do sertão (criação de caprinos, ovinos e bovinos, além de cultivos adaptados à seca) e o emprego público e de serviços. A serra do Jabitacá, no município, abriga a nascente do rio Paraíba, um marco geográfico e simbólico da região.',

  mercado:
    'Como cidade média do interior nordestino e referência regional do Cariri, Monteiro tem um mercado fitness em formação, concentrado em academias de musculação e treino funcional no Centro e nos bairros residenciais. A procura por personal trainers tende a vir de quem busca acompanhamento individual para enfrentar o calor do semiárido, organizar a rotina e manter constância ao longo do ano.',

  bairrosNobres: ['Centro'],
  bairrosPopulares: ['Mutirão', 'Vila Santa Maria'],

  parques: [
    {
      nome: 'Açude Poções',
      descricao:
        'Maior reservatório do município, o Açude Poções é um dos principais cartões-postais de Monteiro; o entorno e as estradas de acesso servem de cenário para caminhadas, pedaladas e treinos ao ar livre, sempre condicionados ao nível da água no semiárido.',
    },
    {
      nome: 'Serra do Jabitacá (nascente do rio Paraíba)',
      descricao:
        'Local onde nasce o rio Paraíba, a serra é um ponto de referência natural da região; trilhas e percursos no relevo elevado atraem quem treina ao ar livre em contato com a paisagem do Cariri.',
    },
    {
      nome: 'Parque Estadual da Serra do Umbuzeiro',
      descricao:
        'Unidade de conservação no sul do Cariri, com trilhas e mirantes que revelam a paisagem da Caatinga; opção para caminhada e atividade física em meio à natureza preservada da região.',
    },
  ],
  ciclovias:
    'A estrutura cicloviária é modesta e concentrada em trechos da área urbana; boa parte do pedal e da corrida acontece nas vias da cidade e nas estradas vicinais que ligam Monteiro às comunidades rurais e aos açudes do entorno.',

  clima:
    'O clima é semiárido quente, característico do Cariri paraibano, uma das regiões mais secas do Brasil. As chuvas são escassas e irregulares, concentradas em poucos meses do ano, e as temperaturas se mantêm altas durante o dia, com noites mais amenas favorecidas pela altitude em torno de 600 metros.',
  climaTreino:
    'O calor e a baixa umidade pedem treinar no início da manhã ou no fim da tarde, com hidratação reforçada e atenção à exposição ao sol; nos horários mais quentes, ambientes climatizados são a opção mais segura, e o período de estiagem exige cuidado redobrado com a desidratação.',

  mobilidade:
    'Monteiro é o ponto inicial da BR-412, rodovia que corta o Cariri e o Agreste e liga a cidade a Campina Grande, além de se conectar à BR-110. Essa posição reforça o papel de Monteiro como entroncamento e polo regional. O transporte urbano é feito principalmente por ônibus, mototáxis e vans intermunicipais que atendem as cidades vizinhas.',

  corridas: [
    {
      nome: 'Corridas e caminhadas do São João',
      descricao:
        'Durante o ciclo junino, um dos mais animados do Cariri, a cidade recebe atividades esportivas e caminhadas associadas às festas, aproveitando o clima ameno do período e a grande circulação de visitantes.',
    },
  ],
  culturaEsportiva:
    'A cultura esportiva de Monteiro se apoia no uso das praças e vias do Centro para caminhada e corrida, nas estradas rurais e açudes do entorno para atividades ao ar livre e na forte tradição cultural nordestina, com destaque para o São João, que mobiliza a cidade em junho.',
  academias:
    'A oferta é formada sobretudo por academias locais de musculação e treino funcional, distribuídas pelo Centro e pelos bairros residenciais, com porte compatível com uma cidade média e polo regional do interior nordestino.',

  destaquesFitness: [
    'Maior município da Paraíba em área e principal polo do Cariri Ocidental.',
    'Açude Poções e serra do Jabitacá, nascente do rio Paraíba, como cenários para treino ao ar livre.',
    'Clima semiárido quente e seco, que exige planejamento de horário e hidratação no treino.',
    'Ponto inicial da BR-412, entroncamento que conecta o Cariri a Campina Grande.',
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
    'Polo do Cariri paraibano, marcada pelo clima semiárido e pela paisagem da Caatinga, Monteiro pede um treino bem adaptado ao calor e à estiagem, que aproveite os açudes e as serras do entorno. Um personal trainer ajuda a definir os melhores horários, reforçar a hidratação e manter a constância ao longo do ano no sertão.',

  vizinhas: ['campina-grande-pb', 'patos-pb'],

  fontes: [
    { nome: 'IBGE Cidades — Monteiro', url: 'https://cidades.ibge.gov.br/brasil/pb/monteiro/panorama' },
    { nome: 'Prefeitura de Monteiro', url: 'https://www.monteiro.pb.gov.br/' },
    { nome: 'Atlas Brasil — IDHM', url: 'https://www.atlasbrasil.org.br/' },
  ],
  atualizadoEm: '2026-06-29',
};
