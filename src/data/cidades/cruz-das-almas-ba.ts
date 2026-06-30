import type { Cidade } from '../../lib/types';

export const cidade: Cidade = {
  slug: 'cruz-das-almas-ba',
  nome: 'Cruz das Almas',
  uf: 'BA',
  estado: 'Bahia',
  estadoSlug: 'bahia',
  regiao: 'Nordeste',
  gentilico: 'cruzalmense',
  tipo: 'cidade',

  populacao: 60346,
  populacaoAno: 2022,
  idhm: 0.699,
  idhmClasse: 'médio',
  altitudeM: 207,

  resumoEconomico:
    'No coração do Recôncavo Baiano, a cerca de 150 km de Salvador, Cruz das Almas combina vocação agropecuária e força acadêmica. A economia tradicional se apoia na fumicultura e na produção de cachaça e de frutas, enquanto a cidade firmou-se como polo de ensino e pesquisa por sediar a Universidade Federal do Recôncavo da Bahia (UFRB) e a Embrapa Mandioca e Fruticultura. O comércio e os serviços completam a base econômica e atendem também os municípios vizinhos.',

  mercado:
    'A presença da UFRB e da Embrapa cria um público de estudantes, professores e pesquisadores que aquece a demanda por academias, estúdios e personal trainers, em geral no Centro e nos bairros de classe média. Para uma cidade de porte médio do interior baiano, a oferta de treino orientado é razoável e tem crescido junto com a cena de corrida de rua e de treino funcional.',

  bairrosNobres: ['Centro', 'Ana Lúcia', 'Bela Vista', 'Jardim Planalto'],
  bairrosPopulares: ['Coplan', 'Inocoop', 'Areal', 'Bonsucesso'],

  parques: [
    {
      nome: 'Praça Senador Themístocles',
      descricao:
        'Praça central tradicional da cidade, ponto de encontro e de largada de eventos esportivos, muito usada para caminhada e como referência da vida urbana no Centro.',
    },
    {
      nome: 'Praça da Juventude',
      descricao:
        'Espaço público com estrutura voltada a esporte e lazer, frequentado por jovens e famílias para atividades físicas ao ar livre.',
    },
    {
      nome: 'Academias da saúde e praças de bairro',
      descricao:
        'A cidade conta com academias ao ar livre e praças com equipamentos de ginástica gratuitos espalhados pelos bairros, abertos à comunidade para treino e caminhada.',
    },
  ],
  ciclovias:
    'A malha cicloviária ainda é limitada e concentrada em vias centrais; o ciclismo de lazer costuma acontecer em avenidas mais largas e em saídas pelas estradas da região nos fins de semana, e a cidade tem eventos próprios de ciclismo, como o Desafio 29 de Julho.',

  clima:
    'O clima é tropical quente do Recôncavo Baiano, com temperaturas elevadas o ano todo e chuvas mais concentradas no outono e no inverno (de abril a julho); por estar em uma das porções mais altas do Recôncavo, as noites costumam ser um pouco mais amenas.',
  climaTreino:
    'Pelo calor e pela umidade, o treino ao ar livre rende mais no começo da manhã e no fim da tarde, com hidratação reforçada e atenção ao sol forte nas horas centrais do dia.',

  mobilidade:
    'Cruz das Almas é cortada pela BA-001 e ligada à malha rodoviária do Recôncavo, com a BR-101 acessível a partir das rodovias estaduais que conectam a cidade a Santo Antônio de Jesus, Feira de Santana e Salvador; o deslocamento urbano é feito sobretudo por carro, moto e ônibus.',

  corridas: [
    {
      nome: 'Cruz Night Run',
      descricao:
        'Corrida noturna de rua que se tornou a prova mais tradicional da cidade, com percursos para diferentes níveis de corredores e largada na área central.',
    },
    {
      nome: 'Corrida e Desafio 29 de Julho',
      descricao:
        'Evento esportivo ligado às festividades de aniversário da cidade, reunindo corrida de rua e desafio de ciclismo com largada e chegada na Praça Senador Themístocles.',
    },
  ],
  culturaEsportiva:
    'Conhecida como a Capital Baiana do Forró por causa do seu enorme São João, que multiplica a população da cidade, Cruz das Almas tem forte tradição de festas populares que convive com uma cena esportiva ativa. A corrida de rua ganhou impulso a ponto de o município aprovar uma política municipal de incentivo ao esporte, e o treino funcional e o ciclismo também movimentam moradores ao longo do ano.',
  academias:
    'A oferta de academias e estúdios é adequada para uma cidade média do interior baiano e atende também moradores da região, concentrada no Centro e nos bairros de classe média, complementada pelas academias da saúde gratuitas nas praças.',

  destaquesFitness: [
    'Sede da UFRB e da Embrapa Mandioca e Fruticultura, com público acadêmico que aquece a demanda por treino e personal.',
    'Capital Baiana do Forró, com um dos maiores São João do Brasil e forte cultura de festas e movimento.',
    'Cena de corrida de rua em crescimento, com a Cruz Night Run e uma política municipal de incentivo ao esporte.',
    'Clima quente do Recôncavo que pede planejamento de horário e hidratação no treino ao ar livre.',
  ],

  precos: {
    avulsaMin: 45,
    avulsaMax: 110,
    mensalMin: 240,
    mensalMax: 680,
    onlineMin: 110,
    onlineMax: 340,
  },

  conclusao:
    'Polo de ensino e pesquisa no Recôncavo e referência cultural como Capital Baiana do Forró, Cruz das Almas reúne estrutura crescente para quem quer treinar — de academias e estúdios às praças com academias da saúde. Um personal trainer ajuda a montar uma rotina segura e eficiente, respeitando o clima quente da região e o seu objetivo.',

  vizinhas: ['feira-de-santana-ba', 'santo-antonio-de-jesus-ba'],

  fontes: [
    { nome: 'IBGE Cidades — Cruz das Almas', url: 'https://cidades.ibge.gov.br/brasil/ba/cruz-das-almas/panorama' },
    { nome: 'Prefeitura de Cruz das Almas', url: 'https://www.cruzdasalmas.ba.gov.br/' },
    { nome: 'Atlas Brasil — IDHM', url: 'https://www.atlasbrasil.org.br/perfil/municipio/2909802' },
  ],
  atualizadoEm: '2026-06-29',
};
