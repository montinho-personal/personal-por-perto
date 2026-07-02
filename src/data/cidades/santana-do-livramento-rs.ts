import type { Cidade } from '../../lib/types';

export const cidade: Cidade = {
  slug: 'santana-do-livramento-rs',
  nome: 'Santana do Livramento',
  uf: 'RS',
  estado: 'Rio Grande do Sul',
  estadoSlug: 'rio-grande-do-sul',
  regiao: 'Sul',
  gentilico: 'santanense',
  tipo: 'cidade',

  populacao: 84421,
  populacaoAno: 2022,
  idhm: 0.727,
  idhmClasse: 'alto',
  altitudeM: 208,

  resumoEconomico:
    'Na Campanha Gaúcha, no extremo sul do Rio Grande do Sul, Santana do Livramento forma com a uruguaia Rivera uma fronteira seca: as duas cidades são separadas apenas por avenidas e pela Praça Internacional, a única praça binacional do mundo, marco da chamada "Fronteira da Paz". A economia combina o comércio de fronteira — com o crescimento dos free shops do lado brasileiro e o fluxo constante de compras do lado uruguaio —, uma pecuária de peso nacional (o município tem um dos maiores rebanhos ovinos e bovinos do país) e a vitivinicultura da Campanha Gaúcha, região que abriga vinícolas como Almadén e Cordilheira de Sant\'Ana e integra a rota turística Ferradura dos Vinhedos.',

  mercado:
    'O convívio diário com Rivera dá um caráter binacional ao mercado local de saúde e atividade física, com academias e profissionais atendendo público dos dois lados da fronteira. A demanda por personal trainer é puxada tanto pela rotina urbana do comércio e dos serviços quanto pela lida campeira das estâncias de pecuária no entorno rural, um dos maiores do Rio Grande do Sul em extensão territorial.',

  bairrosNobres: ['Centro', 'Umbu', 'Armour', 'São Gabriel'],
  bairrosPopulares: ['Vila Rui Ramos', 'Vila Progresso', 'Prado', 'Cohab Tabatinga'],

  parques: [
    {
      nome: 'Parque Internacional (Praça Internacional)',
      descricao:
        'Inaugurada em 1943, é a única praça binacional do mundo, dividindo espaço entre Santana do Livramento e Rivera. Com áreas ajardinadas, rampas e escadarias, é ponto de caminhada e encontro que simboliza a "Fronteira da Paz".',
    },
    {
      nome: 'Parque Ibirapuitã',
      descricao:
        'A cerca de dez quilômetros da cidade pela BR-293, faz parte da Área de Proteção Ambiental do Ibirapuitã, no bioma Pampa, com paisagens de campo nativo usadas para passeios e contato com a natureza.',
    },
    {
      nome: 'Praça General Osório',
      descricao:
        'Praça histórica e arborizada no centro da cidade, com espaço para caminhada leve entre o comércio e os prédios do casario livramentense.',
    },
  ],
  ciclovias:
    'A malha cicloviária estruturada é limitada; parte do deslocamento de bicicleta e das corridas acontece nas avenidas do centro e nas vias que levam à Praça Internacional e aos bairros residenciais.',

  clima:
    'O clima é subtropical, típico do Pampa e da Campanha Gaúcha, com grande amplitude térmica: verões quentes, que podem chegar perto dos 40 °C, e invernos rigorosos, com geadas frequentes e temperaturas próximas de 0 °C em junho e julho. A cidade está no paralelo 31, latitude que favorece a vitivinicultura da região.',
  climaTreino:
    'De outubro a abril, o treino ao ar livre costuma ter boas condições, com atenção redobrada à hidratação nos dias mais quentes e secos. No inverno, o frio intenso e as geadas pedem aquecimento cuidadoso, roupas em camadas e, nos dias mais rigorosos, a opção por treinar em ambientes fechados.',

  mobilidade:
    'Santana do Livramento é cortada pelas rodovias BR-158 e BR-293, que se conectam à Ruta 5 uruguaia formando um corredor rodoviário internacional. A rodoviária fica no bairro Prado, e o transporte urbano é feito por ônibus. A fronteira seca com Rivera permite atravessar a pé ou de carro pela Praça Internacional, sem posto de controle formal no dia a dia, o que torna comum a circulação entre as duas cidades.',

  corridas: [
    {
      nome: 'Circuito Sesc de Corridas (etapa Santana do Livramento)',
      descricao:
        'Etapa do tradicional circuito de corridas de rua do Sesc-RS, com provas de 3 km, 5 km e 10 km, além de percursos participativos, reunindo corredores da fronteira.',
    },
    {
      nome: 'Corrida da Unimed',
      descricao:
        'Prova de rua organizada na cidade, com percurso pelas ruas centrais e adesão de corredores locais e de municípios vizinhos da Campanha.',
    },
  ],
  culturaEsportiva:
    'A cultura esportiva local é marcada pela convivência binacional com Rivera, pela tradição campeira ligada à pecuária de ovinos e bovinos, e por uma história centenária no golfe: o Clube Campestre de Livramento, fundado em 1917 no bairro Armour, é um dos mais antigos clubes de golfe do Brasil. As corridas de rua do Sesc e da Unimed complementam esse cenário, ao lado da musculação e do treino funcional nas academias da cidade.',
  academias:
    'A oferta de academias e estúdios se concentra no centro e nos bairros residenciais, com porte compatível com uma cidade média de fronteira, complementada por personal trainers que atendem em domicílio e em espaços ao ar livre.',

  destaquesFitness: [
    'Fronteira da Paz com Rivera (Uruguai): a Praça Internacional é a única praça binacional do mundo.',
    'Clube Campestre de Livramento, um dos clubes de golfe mais antigos do Brasil, fundado em 1917 no bairro Armour.',
    'Um dos maiores rebanhos ovinos e bovinos do país, com a lida campeira moldando a cultura esportiva local.',
    'Grande amplitude térmica do Pampa — verões quentes e invernos com geadas — que também sustenta a vitivinicultura da Campanha Gaúcha.',
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
    'Cidade de fronteira seca com o Uruguai, moldada pela pecuária, pela vitivinicultura da Campanha e pelo convívio diário com Rivera, Santana do Livramento tem no clima de amplitude térmica do Pampa um desafio constante para quem treina. Um personal trainer ajuda a manter a constância, aproveitando os meses mais amenos ao ar livre e ajustando o treino para os extremos de calor e frio da Campanha Gaúcha.',

  vizinhas: ['bage-rs', 'dom-pedrito-rs'],

  fontes: [
    { nome: 'IBGE Cidades — Sant\'Ana do Livramento', url: 'https://cidades.ibge.gov.br/brasil/rs/santana-do-livramento/panorama' },
    { nome: 'Prefeitura de Santana do Livramento', url: 'https://www.santanadolivramento.rs.gov.br/' },
    { nome: 'Atlas Brasil — IDHM', url: 'https://www.atlasbrasil.org.br/' },
  ],
  atualizadoEm: '2026-06-29',
};
