import type { Cidade } from '../../lib/types';

export const cidade: Cidade = {
  slug: 'pomerode-sc',
  nome: 'Pomerode',
  uf: 'SC',
  estado: 'Santa Catarina',
  estadoSlug: 'santa-catarina',
  regiao: 'Sul',
  gentilico: 'pomerodense',
  tipo: 'cidade',

  populacao: 34289,
  populacaoAno: 2022,
  idhm: 0.78,
  idhmClasse: 'alto',
  altitudeM: 78,

  resumoEconomico:
    'No Vale do Itajaí, vizinha de Blumenau, Pomerode é conhecida como "a cidade mais alemã do Brasil", com forte herança germânica preservada na arquitetura enxaimel, na língua e nos costumes. A economia combina indústria (metalúrgica, têxtil e alimentos), agricultura familiar e um turismo cultural pujante, ancorado na Festa Pomerana, na Rota do Enxaimel e no Zoo Pomerode. É uma cidade de alto IDHM e elevada qualidade de vida.',

  mercado:
    'O mercado de academias acompanha o porte de cidade média catarinense, com estúdios e academias locais e a presença de redes na região. A musculação convive com uma cultura esportiva incomum para o tamanho da cidade, marcada pela tradição em ginástica e pelo gosto por corrida e ciclismo, favorecido pelas estradas rurais e roteiros turísticos.',

  bairrosNobres: ['Centro', 'Testo Central', 'Wunderwald'],
  bairrosPopulares: ['Testo Alto', 'Ribeirão Herdt', 'Pomerode Fundos', 'Wunderwald'],

  parques: [
    {
      nome: 'Rota do Enxaimel',
      descricao:
        'Roteiro rural de cerca de 16 km com a maior concentração de construções em estilo enxaimel das Américas, muito usado para caminhadas e passeios de bicicleta entre paisagens e propriedades históricas.',
    },
    {
      nome: 'Zoo Pomerode',
      descricao:
        'O primeiro zoológico do Sul do Brasil, com amplas áreas arborizadas e percursos a pé que rendem boas caminhadas em meio à natureza.',
    },
    {
      nome: 'Praças e áreas verdes do Centro',
      descricao:
        'O Centro e o entorno do Pavilhão de Eventos oferecem calçadões e espaços ao ar livre usados para caminhada e atividades leves no dia a dia.',
    },
  ],
  ciclovias:
    'A cidade tem trechos de ciclovia no perímetro urbano, mas o grande atrativo para pedalar são as estradas rurais e roteiros como a Rota do Enxaimel, a Rota do Imigrante e a Rota Raízes Germânicas, percorridas a pé ou de bicicleta o ano todo.',

  clima:
    'O clima é subtropical úmido, típico do Vale do Itajaí, com chuvas bem distribuídas, verões quentes e invernos amenos. Por ficar em região de vale, há histórico de cheias do Rio do Testo em períodos muito chuvosos.',
  climaTreino:
    'O treino ao ar livre é confortável na maior parte do ano, com manhãs e fins de tarde mais agradáveis no verão. Em períodos de chuva intensa, vale acompanhar os alertas da Defesa Civil, já que áreas baixas podem ser afetadas — ter um plano B em academia ajuda na constância.',

  mobilidade:
    'A cidade é cortada pela SC-110, principal eixo que a liga a Blumenau (a poucos quilômetros) e a Jaraguá do Sul, articulando o deslocamento na região. As distâncias internas são curtas, o que facilita ir e voltar de treinos a pé ou de bicicleta.',

  corridas: [
    {
      nome: 'Maratona Internacional de Pomerode',
      descricao:
        'Principal prova da cidade, com percursos de 6 km, 21 km e 42 km em meio à paisagem germânica do Vale do Rio do Testo — reúne corredores de várias regiões e une esporte e turismo.',
    },
    {
      nome: 'Calendário de corridas e trilhas',
      descricao:
        'Ao longo do ano, Pomerode recebe corridas de rua, trail runs e caminhadas que aproveitam as rotas rurais, o clima favorável e a cultura local para atrair novos eventos a cada temporada.',
    },
  ],
  culturaEsportiva:
    'Para uma cidade do seu porte, Pomerode tem cultura esportiva expressiva: forte tradição em ginástica, vida de clubes e sociedades de herança germânica e um gosto crescente por corrida e ciclismo, impulsionado pelas rotas rurais e pelo calendário de provas. A Liga Pomerodense de Desportos movimenta competições locais durante o ano.',
  academias:
    'A oferta reúne academias e estúdios locais, complementados pelas rotas rurais, praças e pelo Zoo Pomerode, que ampliam as opções de treino ao ar livre e caminhada.',

  destaquesFitness: [
    'Tradição esportiva acima da média para o porte, com destaque histórico em ginástica.',
    'Rotas rurais (Rota do Enxaimel e outras) ideais para corrida e ciclismo.',
    'Maratona Internacional de Pomerode e calendário de corridas e trilhas.',
    'Clima subtropical do Vale do Itajaí, favorável ao treino ao ar livre boa parte do ano.',
  ],

  precos: {
    avulsaMin: 55,
    avulsaMax: 120,
    mensalMin: 270,
    mensalMax: 740,
    onlineMin: 130,
    onlineMax: 370,
  },

  conclusao:
    'Com alto IDHM, qualidade de vida elevada e uma cultura esportiva forte para o seu porte, Pomerode é um bom lugar para treinar — das rotas rurais e roteiros enxaimel às academias locais. Um personal trainer ajuda a aproveitar esse cenário com método, levando em conta o clima do Vale do Itajaí e a rotina de quem mora na cidade mais alemã do Brasil.',

  vizinhas: ['blumenau-sc', 'gaspar-sc', 'jaragua-do-sul-sc'],

  fontes: [
    { nome: 'IBGE Cidades — Pomerode', url: 'https://cidades.ibge.gov.br/brasil/sc/pomerode/panorama' },
    { nome: 'Prefeitura de Pomerode', url: 'https://www.pomerode.sc.gov.br/' },
    { nome: 'Atlas Brasil — IDHM', url: 'https://www.atlasbrasil.org.br/' },
  ],
  atualizadoEm: '2026-06-29',
};
