import type { Cidade } from '../../lib/types';

export const cidade: Cidade = {
  slug: 'barra-do-corda-ma',
  nome: 'Barra do Corda',
  uf: 'MA',
  estado: 'Maranhão',
  estadoSlug: 'maranhao',
  regiao: 'Nordeste',
  gentilico: 'barra-cordense',
  tipo: 'cidade',

  populacao: 84532,
  populacaoAno: 2022,
  idhm: 0.606,
  idhmClasse: 'médio',
  altitudeM: 81,

  resumoEconomico:
    'Barra do Corda fica no centro geográfico do Maranhão, no encontro dos rios Corda e Mearim, a cerca de 450 km de São Luís. A economia se apoia no comércio e nos serviços, que abastecem uma ampla região do centro-sul maranhense, somados à administração pública e à agropecuária — com criação de gado e plantio de arroz, milho, feijão e mandioca. O extrativismo do babaçu mantém peso histórico e social no campo, e a forte presença de terras indígenas dos povos Guajajara e Canela marca a identidade e a dinâmica do município.',

  mercado:
    'O mercado de personal trainers em Barra do Corda tem o perfil de cidade média do interior maranhense: um polo de comércio regional, mais movimentado que os municípios menores do entorno, mas ainda popular e sensível a preço. A oferta se concentra em academias de bairro, estúdios menores e atendimento domiciliar. O calor o ano inteiro e a estação seca prolongada valorizam o profissional que organiza horários, ajusta a carga de treino e reforça a hidratação, aproveitando as primeiras horas da manhã e o fim da tarde.',

  bairrosNobres: ['Centro', 'Altamira', 'Sítio dos Ingleses', 'São Sebastião'],
  bairrosPopulares: ['Trezidela', 'Canadá', 'Aeroporto', 'Vila Nova'],

  parques: [
    {
      nome: 'Encontro dos rios Corda e Mearim',
      descricao:
        'No centro da cidade fica o ponto onde o Rio Corda, de águas claras e frias, encontra o Rio Mearim, mais volumoso e de águas esverdeadas. As margens e o balneário da região funcionam como espaço de lazer e ponto de encontro, servindo de cenário para caminhada e corrida nos horários mais frescos do dia.',
    },
    {
      nome: 'Praças e orla do Centro',
      descricao:
        'As praças centrais e a beira dos rios concentram caminhada, alongamento e treinos funcionais ao ar livre no começo da manhã e no fim da tarde, servindo de apoio para personal trainers e grupos de treino.',
    },
  ],
  ciclovias:
    'A infraestrutura cicloviária é limitada; a bicicleta é meio de transporte comum no dia a dia, e o ciclismo se apoia sobretudo em vias compartilhadas dentro da cidade e nas estradas vicinais da região.',

  clima:
    'O clima é tropical do centro-sul maranhense, com estação chuvosa e estiagem bem marcadas. O calor é intenso na maior parte do ano, com temperaturas que costumam passar dos 35 °C nos meses mais secos do segundo semestre, quando o nível dos rios baixa, e umidade alta no período das chuvas, concentrado no primeiro semestre.',
  climaTreino:
    'O calor forte e a longa estação seca concentram o treino ao ar livre no início da manhã e no fim da tarde, com hidratação reforçada e atenção à desidratação; nas horas centrais do dia, ambientes cobertos e ventilados são a opção mais segura.',

  mobilidade:
    'O acesso principal se dá pela BR-226, que liga Barra do Corda tanto no sentido de São Luís e Teresina quanto em direção a Imperatriz, reforçando seu papel de entroncamento no centro do Maranhão. A malha rodoviária estadual conecta a cidade aos municípios menores e às terras indígenas do entorno. O deslocamento interno é feito sobretudo por ônibus, mototáxi e bicicleta.',

  corridas: [
    {
      nome: 'Corridas de rua locais',
      descricao:
        'A cidade tem provas e ações de corrida de rua promovidas pelo poder público e por grupos esportivos, em geral em datas comemorativas e com largadas bem cedo por causa do calor.',
    },
    {
      nome: 'Calendário regional',
      descricao:
        'Por ser polo do centro maranhense e bem conectada pela BR-226, Barra do Corda recebe corredores das cidades vizinhas, e muitos moradores complementam a agenda em provas de rua realizadas em outros municípios do estado.',
    },
  ],
  culturaEsportiva:
    'A cultura de movimento em Barra do Corda combina o futebol e as caminhadas em praças e na beira dos rios com a forte tradição cultural do município, marcada pela Festa do Divino Espírito Santo e pela presença viva dos povos indígenas Guajajara e Canela. Essa vivência de corpo, ritmo e festa convive com o interesse crescente por academias e treino orientado, próprio de uma cidade que cresce como referência regional.',
  academias:
    'A oferta é formada principalmente por academias de bairro e estúdios menores, complementada pelo atendimento domiciliar, atendendo uma demanda em crescimento num polo de comércio regional de perfil popular.',

  destaquesFitness: [
    'Cidade no centro geográfico do Maranhão, no encontro dos rios Corda e Mearim.',
    'Margens dos rios e praças do Centro como principais espaços de treino ao ar livre.',
    'Mercado de academias de bairro e atendimento domiciliar, com clientela sensível a preço.',
    'Calor intenso e estação seca prolongada exigem periodização de horários e foco em hidratação.',
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
    'Polo de comércio e serviços no centro geográfico do Maranhão, no encontro dos rios Corda e Mearim, Barra do Corda tem um mercado fitness de perfil popular, apoiado em academias de bairro, atendimento domiciliar e nos espaços abertos da cidade. Num clima quente o ano inteiro, com estação seca marcada, um personal trainer faz diferença para organizar horários, ajustar a carga e a hidratação e ajudar o morador a manter uma rotina de treino segura e constante.',

  vizinhas: ['bacabal-ma', 'imperatriz-ma'],

  fontes: [
    { nome: 'IBGE Cidades — Barra do Corda', url: 'https://cidades.ibge.gov.br/brasil/ma/barra-do-corda/panorama' },
    { nome: 'Prefeitura de Barra do Corda', url: 'https://www.barradocorda.ma.gov.br/' },
    { nome: 'Atlas Brasil — IDHM', url: 'https://www.atlasbrasil.org.br/perfil/municipio/210160' },
  ],
  atualizadoEm: '2026-06-29',
};
