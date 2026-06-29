import type { Cidade } from '../../lib/types';

export const cidade: Cidade = {
  slug: 'bacabal-ma',
  nome: 'Bacabal',
  uf: 'MA',
  estado: 'Maranhão',
  estadoSlug: 'maranhao',
  regiao: 'Nordeste',
  gentilico: 'bacabalense',
  tipo: 'cidade',

  populacao: 103711,
  populacaoAno: 2022,
  idhm: 0.651,
  idhmClasse: 'médio',
  altitudeM: 21,

  resumoEconomico:
    'Bacabal fica no Centro Maranhense, às margens do Rio Mearim, e é o principal polo do Médio Mearim, a cerca de 240 km de São Luís. A economia gira em torno do comércio e dos serviços, que abastecem uma extensa região de municípios menores, somados à administração pública e à agropecuária — com criação de gado, produção de arroz, milho e mandioca. O extrativismo do babaçu tem peso histórico e social, com a coleta e o quebramento do coco marcando a vida no campo e movimentando a cadeia do óleo e da amêndoa.',

  mercado:
    'O mercado de personal trainers em Bacabal acompanha o perfil de polo regional do Médio Mearim: mais movimentado que o das cidades vizinhas menores, porém ainda popular e sensível a preço. A oferta se concentra em academias de bairro, estúdios menores e atendimento domiciliar. O calor o ano inteiro pesa na rotina e valoriza o profissional que organiza horários, ajusta a carga de treino e reforça a hidratação, aproveitando as primeiras horas da manhã e o fim da tarde.',

  bairrosNobres: ['Centro', 'Vila Mariana', 'Bacabal Novo', 'Olho d\'Água'],
  bairrosPopulares: ['Trezidela', 'Caximba', 'Pindorama', 'Universitário'],

  parques: [
    {
      nome: 'Orla do Rio Mearim',
      descricao:
        'O Rio Mearim corta Bacabal e suas margens funcionam como ponto de encontro da cidade. As vias e áreas de beira-rio servem para caminhada e corrida nos horários mais frescos do dia, com a paisagem do rio como pano de fundo.',
    },
    {
      nome: 'Praças do Centro',
      descricao:
        'As praças centrais concentram caminhada, alongamento e treinos funcionais ao ar livre no comecinho da manhã e no fim da tarde, servindo de apoio para personal trainers e grupos de treino.',
    },
  ],
  ciclovias:
    'A infraestrutura cicloviária é limitada; a bicicleta é meio de transporte comum no dia a dia, e o ciclismo se apoia sobretudo em vias compartilhadas dentro da cidade e nas estradas vicinais da região.',

  clima:
    'O clima é tropical quente do Centro Maranhense, com estação chuvosa e estiagem bem marcadas. O calor é intenso na maior parte do ano, com temperaturas que costumam passar dos 35 °C nos meses mais secos e umidade alta no período das chuvas, quando o Mearim sobe.',
  climaTreino:
    'O calor forte concentra o treino ao ar livre no início da manhã e no fim da tarde, com hidratação reforçada e atenção à desidratação; nas horas centrais do dia, ambientes cobertos e ventilados são a opção mais segura.',

  mobilidade:
    'O acesso principal se dá pela BR-316, que cruza o Maranhão e liga Bacabal a São Luís, Caxias e Teresina, reforçando seu papel de entroncamento do Médio Mearim. A malha rodoviária estadual conecta a cidade aos municípios menores do entorno. O deslocamento interno é feito sobretudo por ônibus, mototáxi e bicicleta.',

  corridas: [
    {
      nome: 'Corridas de rua locais',
      descricao:
        'A cidade tem provas e ações de corrida de rua promovidas pelo poder público e por grupos esportivos, em geral em datas comemorativas e com largadas cedo por causa do calor.',
    },
    {
      nome: 'Calendário regional',
      descricao:
        'Por ser polo do Médio Mearim e bem conectada pela BR-316, Bacabal recebe corredores das cidades vizinhas, e muitos bacabalenses complementam a agenda em provas de rua realizadas em São Luís e em outros municípios maranhenses.',
    },
  ],
  culturaEsportiva:
    'A cultura de movimento em Bacabal combina o futebol e as caminhadas em praças e na beira do Mearim com a tradição cultural do interior maranhense, marcada pelo bumba meu boi e pelas festas de padroeiro. Essa vivência de corpo e ritmo convive com o interesse crescente por academias e treino orientado, próprio de uma cidade que cresce como referência regional.',
  academias:
    'A oferta é formada principalmente por academias de bairro e estúdios menores, complementada pelo atendimento domiciliar, atendendo uma demanda em crescimento num polo regional de perfil popular.',

  destaquesFitness: [
    'Principal polo do Médio Mearim, às margens do Rio Mearim, no Centro Maranhense.',
    'Orla do Mearim e praças do Centro como principais espaços de treino ao ar livre.',
    'Mercado de academias de bairro e atendimento domiciliar, com clientela sensível a preço.',
    'Calor intenso o ano todo exige periodização de horários e foco em hidratação.',
  ],

  precos: {
    avulsaMin: 40,
    avulsaMax: 100,
    mensalMin: 220,
    mensalMax: 620,
    onlineMin: 100,
    onlineMax: 320,
  },

  conclusao:
    'Polo de comércio e serviços do Médio Mearim, às margens do Rio Mearim, Bacabal tem um mercado fitness de perfil popular, apoiado em academias de bairro, atendimento domiciliar e nos espaços abertos da cidade. Num clima quente o ano inteiro, um personal trainer faz diferença para organizar horários, ajustar a carga e a hidratação e ajudar o morador a manter uma rotina de treino segura e constante.',

  vizinhas: ['sao-luis-ma', 'codo-ma', 'caxias-ma'],

  fontes: [
    { nome: 'IBGE Cidades — Bacabal', url: 'https://cidades.ibge.gov.br/brasil/ma/bacabal/panorama' },
    { nome: 'Prefeitura de Bacabal', url: 'https://www.bacabal.ma.gov.br/' },
    { nome: 'Atlas Brasil — IDHM', url: 'https://www.atlasbrasil.org.br/perfil/municipio/210120' },
  ],
  atualizadoEm: '2026-06-29',
};
