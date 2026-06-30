import type { Cidade } from '../../lib/types';

export const cidade: Cidade = {
  slug: 'santa-rita-pb',
  nome: 'Santa Rita',
  uf: 'PB',
  estado: 'Paraíba',
  estadoSlug: 'paraiba',
  regiao: 'Nordeste',
  gentilico: 'santarritense',
  tipo: 'cidade',

  populacao: 149910,
  populacaoAno: 2022,
  idhm: 0.627,
  idhmClasse: 'médio',
  altitudeM: 16,

  resumoEconomico:
    'Terceira cidade mais populosa da Paraíba e integrante da Região Metropolitana de João Pessoa, Santa Rita tem economia historicamente ligada ao setor sucroalcooleiro: a cana-de-açúcar e as usinas marcam a paisagem rural desde o tempo dos engenhos. À indústria e ao agronegócio somam-se comércio, serviços e a proximidade com a capital, que puxam a movimentação econômica. O território, um dos maiores do estado, vai da Várzea do Paraíba e dos manguezais do estuário até o litoral de Forte Velho.',

  mercado:
    'A conurbação com João Pessoa e Bayeux aproxima os santarritenses da oferta fitness da capital, mas a própria cidade tem academias de bairro, estúdios de funcional e profissionais que atendem em condomínios e a domicílio. A demanda se concentra no Centro e nos bairros mais estruturados, e o personal training cresce como alternativa ao deslocamento até João Pessoa.',

  bairrosNobres: ['Centro', 'Loteamento Heitel Santiago', 'Várzea Nova', 'Marcos Moura'],
  bairrosPopulares: ['Tibiri II', 'Tibiri Fábrica', 'Popular', 'Liberdade'],

  parques: [
    {
      nome: 'Várzea do Paraíba e orla fluvial',
      descricao:
        'A planície do rio Paraíba e seus manguezais formam um cenário de natureza próximo da área urbana, usado para caminhadas, pedais e contato com o verde da Zona da Mata.',
    },
    {
      nome: 'Praia de Forte Velho',
      descricao:
        'No distrito litorâneo de Forte Velho, a praia preservada e a foz do rio oferecem areia firme e ambiente tranquilo para corrida, caminhada e treino ao ar livre longe da agitação.',
    },
    {
      nome: 'Praças e quadras do Centro',
      descricao:
        'Praças, calçadões e quadras públicas no Centro e em bairros como Marcos Moura concentram caminhada, treino funcional e esporte comunitário no fim de tarde.',
    },
  ],
  ciclovias:
    'A estrutura cicloviária ainda é limitada e concentrada em trechos urbanos; muitos ciclistas usam as vias locais e estradas vicinais da zona rural canavieira para pedalar.',

  clima:
    'O clima é tropical quente e úmido, típico do litoral e da Zona da Mata paraibana, com temperaturas altas o ano inteiro e estação chuvosa concentrada no outono e no inverno.',
  climaTreino:
    'O calor e a umidade pedem treino no início da manhã ou no fim da tarde, com hidratação reforçada; nos meses mais chuvosos, vale combinar treino ao ar livre com alternativas cobertas.',

  mobilidade:
    'Santa Rita é cortada pela BR-230 e forma uma mancha urbana contínua com João Pessoa e Bayeux, o que torna o deslocamento entre as três cidades parte do cotidiano. O Aeroporto Internacional Castro Pinto fica no município, e o transporte interno é feito sobretudo por ônibus, integrando-se à malha metropolitana da capital.',

  corridas: [
    {
      nome: 'Corrida da Cidade de Santa Rita',
      descricao:
        'Prova de rua já em edições consecutivas, com percurso pelas vias urbanas do município e categorias por faixa etária, consolidando-se no calendário esportivo local.',
    },
  ],
  culturaEsportiva:
    'A cultura esportiva mistura futebol de bairro, futebol de areia e caminhada, com adesão crescente à corrida de rua impulsionada por provas locais e pela proximidade com a cena da capital. As praças e quadras públicas são o principal palco da atividade física comunitária.',
  academias:
    'A oferta reúne academias de bairro e estúdios de musculação e funcional, complementados pelos espaços ao ar livre da Várzea do Paraíba e do litoral, e pela proximidade com a estrutura fitness de João Pessoa.',

  destaquesFitness: [
    'Terceira maior cidade da Paraíba, integrada à Região Metropolitana de João Pessoa.',
    'Natureza variada: Várzea do Paraíba, manguezais e a praia de Forte Velho para treino ao ar livre.',
    'Conurbação com João Pessoa e Bayeux pela BR-230 amplia o acesso à cena fitness metropolitana.',
    'Calendário próprio de corrida de rua, com a Corrida da Cidade de Santa Rita.',
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
    'Entre a Várzea do Paraíba, os manguezais e o litoral de Forte Velho, e a poucos minutos de João Pessoa, Santa Rita oferece cenários variados para quem quer treinar. Um personal trainer ajuda a montar um plano que aproveite os espaços ao ar livre da cidade e a estrutura da região metropolitana, respeitando o clima quente e o seu objetivo.',

  vizinhas: ['joao-pessoa-pb', 'cabedelo-pb'],

  fontes: [
    { nome: 'IBGE Cidades — Santa Rita', url: 'https://cidades.ibge.gov.br/brasil/pb/santa-rita/panorama' },
    { nome: 'Prefeitura de Santa Rita', url: 'https://santarita.pb.gov.br/' },
    { nome: 'Atlas Brasil — IDHM', url: 'https://www.atlasbrasil.org.br/' },
  ],
  atualizadoEm: '2026-06-29',
};
