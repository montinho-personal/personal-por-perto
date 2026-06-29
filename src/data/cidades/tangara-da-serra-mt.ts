import type { Cidade } from '../../lib/types';

export const cidade: Cidade = {
  slug: 'tangara-da-serra-mt',
  nome: 'Tangará da Serra',
  uf: 'MT',
  estado: 'Mato Grosso',
  estadoSlug: 'mato-grosso',
  regiao: 'Centro-Oeste',
  gentilico: 'tangaraense',
  tipo: 'cidade',

  populacao: 106434,
  populacaoAno: 2022,
  idhm: 0.729,
  idhmClasse: 'alto',
  altitudeM: 396,

  resumoEconomico:
    'Tangará da Serra é um dos principais polos agroindustriais do médio-norte mato-grossense, com economia ancorada no cultivo de cana-de-açúcar, soja, milho e algodão e na pecuária de corte. A presença de usinas sucroalcooleiras e de grandes projetos de pecuária intensiva na região consolidou a cidade entre os municípios mais ricos do agronegócio brasileiro. Esse vigor econômico alimenta o setor de serviços e, com ele, a demanda por academias e acompanhamento físico.',

  mercado:
    'O mercado fitness acompanha o crescimento de uma cidade média e próspera do interior de Mato Grosso, com academias concentradas nas áreas centrais e bairros mais valorizados e procura crescente por treino ao ar livre. O calendário de corridas rústicas e a proximidade com cachoeiras e trilhas reforçam o espaço para o trabalho de personal trainers.',

  bairrosNobres: ['Jardim Tarumã', 'Jardim Europa', 'Centro', 'Jardim das Oliveiras'],
  bairrosPopulares: ['Vila Alta', 'Jardim Mirassol', 'Jardim Santa Maria', 'Jardim Paraíso'],

  parques: [
    {
      nome: 'Salto Sucuri',
      descricao:
        'Cachoeira de águas cristalinas na região rural de Tangará da Serra, polo de ecoturismo usado para banho, flutuação e trilhas na natureza.',
    },
    {
      nome: 'Cachoeira Salto das Nuvens',
      descricao:
        'Queda dágua no Rio Sepotuba, com praia de água doce a cerca de 25 km do centro, ponto tradicional de lazer ativo e de corridas rústicas.',
    },
    {
      nome: 'Praças e academias ao ar livre',
      descricao:
        'A cidade distribui equipamentos de ginástica em praças e espaços públicos, ampliando o acesso ao treino gratuito nos bairros.',
    },
  ],
  ciclovias:
    'A cidade conta com trechos de ciclovia em vias urbanas; a extensão total ainda não é divulgada em fonte oficial consolidada.',

  clima:
    'O clima é tropical quente, típico do planalto e da chapada do médio-norte mato-grossense, com estação chuvosa concentrada de outubro a abril e período seco no inverno. A altitude em torno de 400 metros ameniza um pouco o calor à noite.',
  climaTreino:
    'As temperaturas elevadas e a forte radiação solar tornam recomendável treinar ao ar livre cedo de manhã ou no fim da tarde, com hidratação reforçada, sobretudo na estação seca.',

  mobilidade:
    'O acesso rodoviário se dá principalmente pelas rodovias estaduais MT-358 e MT-343, que conectam Tangará da Serra a Cuiabá e ao restante do médio-norte do estado, integrando a cidade ao corredor logístico do agronegócio mato-grossense.',

  corridas: [
    {
      nome: 'Corrida Rústica Cachoeira Salto das Nuvens',
      descricao:
        'Prova rústica realizada na região da cachoeira, unindo corrida e contato com a natureza em terreno de chapada.',
    },
    {
      nome: 'Corridas de rua e circuitos locais',
      descricao:
        'A cidade recebe provas de rua e eventos esportivos ao longo do ano, sinal de uma cultura ativa de corrida no interior do estado.',
    },
  ],
  culturaEsportiva:
    'A cultura esportiva de Tangará da Serra combina provas de rua e corridas rústicas com o aproveitamento das cachoeiras, trilhas e da paisagem de chapada da região, o que amplia as possibilidades de treino funcional e ao ar livre.',
  academias:
    'A oferta de academias se concentra no Centro e nos bairros mais valorizados, complementada pelas academias ao ar livre das praças e pelos espaços naturais usados para corrida e treino funcional.',

  destaquesFitness: [
    'Salto Sucuri e Salto das Nuvens como cenários para corrida, trilha e treino ao ar livre.',
    'Calendário de corridas rústicas e provas de rua na região.',
    'Praças com academias ao ar livre ampliando o acesso ao treino gratuito.',
    'Mercado fitness sustentado pela prosperidade do polo agroindustrial.',
  ],

  precos: {
    avulsaMin: 55,
    avulsaMax: 120,
    mensalMin: 290,
    mensalMax: 720,
    onlineMin: 140,
    onlineMax: 360,
  },

  conclusao:
    'Polo agroindustrial do médio-norte de Mato Grosso, Tangará da Serra alia uma economia pujante a um entorno natural rico em cachoeiras e trilhas. Um personal trainer ajuda a montar uma rotina que respeite o calor da chapada e a aproveitar com método os espaços públicos, as corridas rústicas e a paisagem da região.',

  vizinhas: ['cuiaba-mt', 'varzea-grande-mt', 'sinop-mt'],

  fontes: [
    { nome: 'IBGE Cidades — Tangará da Serra', url: 'https://cidades.ibge.gov.br/brasil/mt/tangara-da-serra/panorama' },
    { nome: 'Prefeitura de Tangará da Serra', url: 'https://tangaradaserra.mt.gov.br/' },
    { nome: 'Atlas Brasil — IDHM', url: 'https://www.atlasbrasil.org.br/' },
  ],
  atualizadoEm: '2026-06-29',
};
