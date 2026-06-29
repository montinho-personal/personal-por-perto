import type { Cidade } from '../../lib/types';

export const cidade: Cidade = {
  slug: 'santa-luzia-mg',
  nome: 'Santa Luzia',
  uf: 'MG',
  estado: 'Minas Gerais',
  estadoSlug: 'minas-gerais',
  regiao: 'Sudeste',
  gentilico: 'luziense',
  tipo: 'cidade',

  populacao: 219132,
  populacaoAno: 2022,
  idhm: 0.715,
  idhmClasse: 'alto',
  altitudeM: 751,

  resumoEconomico:
    'Município da Região Metropolitana de Belo Horizonte, Santa Luzia tem dupla natureza: um centro histórico colonial tombado, no alto da colina à beira do Rio das Velhas, e o distrito de São Benedito, conurbado a BH, onde se concentra a maior parte da população e do comércio. É apontada como um dos polos industriais da Grande BH, com a MG-020 (Avenida das Indústrias) como eixo logístico. Essa divisão entre a sede histórica e a parte popular molda uma demanda de treino dispersa por bairros.',

  mercado:
    'O mercado fitness acompanha a divisão da cidade: na sede histórica e nos bairros mais antigos predominam academias de bairro e atendimento domiciliar; em São Benedito, mais populoso e ligado a BH, há rede (Smart Fit no Conjunto Cristina) e academias de musculação e funcional pulverizadas pelos bairros. O perfil é de cidade grande dividida, com público trabalhador que valoriza preço acessível e horários flexíveis.',

  bairrosNobres: ['Centro (sede histórica)', 'Bicas', 'São José', 'Frimisa'],
  bairrosPopulares: ['São Benedito', 'Conjunto Cristina', 'Palmital', 'Duquesa', 'Asteca'],

  parques: [
    {
      nome: 'Centro Histórico de Santa Luzia',
      descricao:
        'Conjunto colonial tombado pelo IEPHA/MG, com ruas como Direita, do Serro e Floriano Peixoto — espaço de caminhada com forte apelo histórico no alto da cidade.',
    },
    {
      nome: 'Orla do Rio das Velhas',
      descricao:
        'Margens do rio que deu origem à cidade, usadas para caminhada e atividade ao ar livre em trechos da sede.',
    },
    {
      nome: 'Praças e academias ao ar livre dos bairros',
      descricao:
        'Equipamentos públicos espalhados por São Benedito e bairros populares, com aparelhos de ginástica gratuitos para a população.',
    },
  ],
  ciclovias:
    'A estrutura cicloviária é limitada e concentrada em trechos de avenidas; a maior parte do deslocamento por bike ocorre em vias comuns, sobretudo na parte plana de São Benedito.',

  clima:
    'O clima é tropical de altitude, com média em torno de 21 °C, verão chuvoso e inverno seco.',
  climaTreino:
    'O treino ao ar livre é viável o ano todo, com atenção às chuvas de verão e à baixa umidade do inverno; as manhãs são as melhores janelas, e a sede histórica tem relevo mais íngreme que a parte baixa.',

  mobilidade:
    'Santa Luzia é ligada a Belo Horizonte pela MG-020 (Avenida das Indústrias), principal acesso ao distrito de São Benedito, conurbado à capital. A integração metropolitana é feita por ônibus, sem metrô próprio.',

  corridas: [
    {
      nome: 'Corrida de aniversário de Santa Luzia',
      descricao:
        'Prova ligada às comemorações do município, com participação popular e percurso pela cidade.',
    },
    {
      nome: 'Circuitos de corrida de rua da Grande BH',
      descricao:
        'Provas regionais da Região Metropolitana de Belo Horizonte que atraem corredores luzienses ao calendário mineiro.',
    },
  ],
  culturaEsportiva:
    'A vida esportiva se apoia em praças e academias ao ar livre nos bairros e em uma forte tradição cultural e religiosa — a Semana Santa, com seus tapetes de serragem no Centro Histórico, e a Festa de Santa Luzia em dezembro mobilizam a cidade. A corrida de rua acompanha o crescimento do esporte na Grande BH.',
  academias:
    'A oferta reúne a Smart Fit (Conjunto Cristina, São Benedito) e dezenas de academias de bairro de musculação e funcional, distribuídas entre a sede histórica e a parte popular ligada a BH.',

  destaquesFitness: [
    'Cidade dividida entre sede histórica e São Benedito popular, com demanda dispersa.',
    'Academias de bairro e forte espaço para atendimento domiciliar.',
    'Praças e academias ao ar livre gratuitas nos bairros.',
    'Clima de altitude que permite atividade externa o ano inteiro.',
  ],

  precos: {
    avulsaMin: 50,
    avulsaMax: 115,
    mensalMin: 260,
    mensalMax: 680,
    onlineMin: 115,
    onlineMax: 350,
  },

  conclusao:
    'Cidade histórica e industrial da Grande BH, dividida entre a sede colonial e o populoso São Benedito, Santa Luzia tem uma demanda de treino que se espalha por bairros distintos. Um personal trainer ajuda a levar método e regularidade ao dia a dia, seja na academia de bairro, na praça ou no formato online e domiciliar.',

  vizinhas: ['belo-horizonte-mg', 'contagem-mg', 'ribeirao-das-neves-mg'],

  fontes: [
    {
      nome: 'IBGE Cidades — Santa Luzia',
      url: 'https://cidades.ibge.gov.br/brasil/mg/santa-luzia/panorama',
    },
    { nome: 'Prefeitura de Santa Luzia', url: 'https://www.santaluzia.mg.gov.br/' },
    { nome: 'Atlas Brasil — IDHM', url: 'https://www.atlasbrasil.org.br/' },
  ],
  atualizadoEm: '2026-06-29',
};
