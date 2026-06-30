import type { Cidade } from '../../lib/types';

export const cidade: Cidade = {
  slug: 'timbauba-pe',
  nome: 'Timbaúba',
  uf: 'PE',
  estado: 'Pernambuco',
  estadoSlug: 'pernambuco',
  regiao: 'Nordeste',
  gentilico: 'timbaubense',
  tipo: 'cidade',

  populacao: 46147,
  populacaoAno: 2022,
  idhm: 0.618,
  idhmClasse: 'médio',
  altitudeM: 67,

  resumoEconomico:
    'Timbaúba fica na Zona da Mata Norte de Pernambuco, na divisa com a Paraíba, e funciona como um polo de comércio e serviços para os municípios menores do entorno. A economia tem raízes na lavoura canavieira que historicamente moldou a região da Mata, acompanhada da banana, de outras culturas e da pecuária de pequeno porte. O comércio do Centro, voltado a toda a microrregião, é o motor mais visível do dia a dia da cidade.',

  mercado:
    'Como cidade média do interior nordestino, Timbaúba tem um mercado fitness enxuto, formado sobretudo por academias de musculação e por profissionais que atendem em estúdios menores, condomínios e a domicílio. A procura por personal trainer cresce entre quem busca acompanhamento individual para emagrecimento, condicionamento e qualidade de vida, ajustado ao calor da Zona da Mata e à rotina de uma cidade de porte médio.',

  bairrosNobres: ['Centro', 'Maria Auxiliadora', 'Bela Vista', 'São José'],
  bairrosPopulares: ['Sapucaia', 'Ozanan', 'Bairro Novo', 'Cohab'],

  parques: [
    {
      nome: 'Centro e entorno da Igreja Matriz',
      descricao:
        'O Centro, em torno da Igreja Matriz de Nossa Senhora do Rosário, concentra o comércio e a vida pública da cidade; suas ruas e praças são o trecho mais usado para caminhada no início da manhã e no fim da tarde.',
    },
    {
      nome: 'Margens do rio Capibaribe-Mirim',
      descricao:
        'O Capibaribe-Mirim atravessa a área urbana a caminho de Goiana; as vias e o entorno do rio servem de percurso para caminhada e corrida, respeitando os períodos de cheia no inverno chuvoso.',
    },
    {
      nome: 'Praças e logradouros da cidade',
      descricao:
        'As praças distribuídas pelos bairros centrais funcionam como pontos de encontro e de atividade física ao ar livre, especialmente nos horários mais frescos do dia.',
    },
  ],
  ciclovias:
    'A infraestrutura cicloviária é modesta e concentrada em poucos trechos da área urbana; boa parte do pedal e da corrida acontece nas vias da cidade e nas estradas vicinais que ligam Timbaúba aos municípios vizinhos.',

  clima:
    'O clima é tropical quente e úmido, típico da Zona da Mata pernambucana, com temperaturas elevadas o ano inteiro e baixa amplitude térmica. A estação chuvosa concentra-se no outono e no inverno (de março a agosto, aproximadamente), enquanto a primavera e o início do verão tendem a ser mais secos e ensolarados.',
  climaTreino:
    'O calor e a umidade pedem treinar bem cedo ou no fim da tarde, com hidratação reforçada e atenção à exposição ao sol; no período chuvoso, ambientes cobertos garantem a constância, enquanto os meses mais secos favorecem o treino ao ar livre.',

  mobilidade:
    'Timbaúba é cortada pela BR-408 e se conecta à BR-101 por meio das rodovias estaduais que passam por Goiana, a principal porta de saída em direção a Recife e a João Pessoa. O transporte interurbano é feito por ônibus e vans que ligam a cidade a Goiana, Carpina e demais municípios da Mata Norte, reforçando seu papel de centro regional na divisa com a Paraíba.',

  corridas: [
    {
      nome: 'Corrida de rua em Timbaúba',
      descricao:
        'A cidade já recebeu provas de corrida de rua com percursos de 5 km e 10 km pelas ruas da área urbana, no formato comum aos circuitos do interior pernambucano.',
    },
    {
      nome: 'Provas regionais da Mata Norte',
      descricao:
        'Corredores de Timbaúba costumam participar de provas em municípios próximos da Zona da Mata e do litoral, o que mantém viva a cena de corrida de rua na região.',
    },
  ],
  culturaEsportiva:
    'A cultura esportiva mistura o futebol amador dos bairros, a caminhada e a corrida nas ruas do Centro e a participação em provas regionais da Mata Norte, tudo moldado pelo clima quente e úmido da região canavieira.',
  academias:
    'A oferta é formada principalmente por academias locais de musculação e treino funcional, distribuídas pelo Centro e pelos bairros residenciais, com porte compatível com uma cidade média do interior.',

  destaquesFitness: [
    'Polo de comércio e serviços da Zona da Mata Norte, na divisa de Pernambuco com a Paraíba.',
    'Centro e entorno da Igreja Matriz como espaço de caminhada no começo da manhã e fim da tarde.',
    'Clima tropical quente e úmido, que exige planejamento de horário e hidratação no treino.',
    'Cidade cortada pela BR-408 e ligada à BR-101 por Goiana, com economia de raiz canavieira e comércio regional.',
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
    'Cidade quente e úmida da Zona da Mata Norte, Timbaúba pede um treino adaptado ao clima e que aproveite as ruas do Centro e o entorno do rio. Um personal trainer ajuda a organizar a rotina respeitando o calor, definindo os melhores horários e mantendo a constância ao longo das estações seca e chuvosa.',

  vizinhas: ['goiana-pe', 'carpina-pe'],

  fontes: [
    { nome: 'IBGE Cidades — Timbaúba', url: 'https://cidades.ibge.gov.br/brasil/pe/timbauba/panorama' },
    { nome: 'Prefeitura de Timbaúba', url: 'https://timbauba.pe.gov.br/' },
    { nome: 'Atlas Brasil — IDHM', url: 'https://www.atlasbrasil.org.br/' },
  ],
  atualizadoEm: '2026-06-29',
};
