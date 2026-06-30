import type { Cidade } from '../../lib/types';

export const cidade: Cidade = {
  slug: 'juina-mt',
  nome: 'Juína',
  uf: 'MT',
  estado: 'Mato Grosso',
  estadoSlug: 'mato-grosso',
  regiao: 'Centro-Oeste',
  gentilico: 'juinense',
  tipo: 'cidade',

  populacao: 45869,
  populacaoAno: 2022,
  idhm: 0.716,
  idhmClasse: 'alto',
  altitudeM: 442,

  resumoEconomico:
    'Juína é o principal polo do extremo noroeste de Mato Grosso, na transição entre o cerrado e a floresta amazônica. A economia se apoia na agropecuária — pecuária de corte, soja, milho e extração de madeira — e carrega uma forte marca histórica na mineração de diamantes, que atraiu garimpeiros para a região a partir dos anos 1980 e ainda hoje está ligada à atividade nos rios do entorno. Esse conjunto sustenta um setor de serviços que concentra comércio, saúde e educação para toda a sub-região.',

  mercado:
    'O mercado fitness reflete o porte de uma cidade média e regional do noroeste mato-grossense, com academias concentradas no Centro e nos bairros mais estruturados e procura crescente por treino ao ar livre. A presença de grupos de corrida e de uma associação local de atletismo, somada ao entorno amazônico de rios, trilhas e cachoeiras, abre espaço para o trabalho de personal trainers que combinam acompanhamento em academia e ao ar livre.',

  bairrosNobres: ['Centro', 'Módulo 1', 'Módulo 5', 'Jardim das Acácias'],
  bairrosPopulares: ['Módulo 7', 'Módulo 8', 'Bairro Esperança', 'Bairro Floresta'],

  parques: [
    {
      nome: 'Rio Juína e orla urbana',
      descricao:
        'O rio que dá nome à cidade, batizado pelos povos indígenas, corta a região e serve de cenário para caminhadas, pesca e lazer ativo nas áreas ribeirinhas.',
    },
    {
      nome: 'Cachoeiras do entorno amazônico',
      descricao:
        'Na zona rural e nos arredores, quedas dágua em meio à floresta de transição amazônica são usadas para banho, trilhas e atividades de ecoturismo.',
    },
    {
      nome: 'Praças e academias ao ar livre',
      descricao:
        'A cidade distribui equipamentos de ginástica em praças e espaços públicos, ampliando o acesso ao treino gratuito nos módulos residenciais.',
    },
  ],
  ciclovias:
    'A cidade conta com trechos para circulação de bicicletas em vias urbanas; a extensão total ainda não é divulgada em fonte oficial consolidada.',

  clima:
    'O clima é equatorial/tropical úmido, típico da transição para a Amazônia no noroeste de Mato Grosso, com estação chuvosa intensa de outubro a abril e período mais seco no inverno. A umidade elevada e o calor predominam durante boa parte do ano, com a altitude em torno de 440 metros amenizando pouco as temperaturas.',
  climaTreino:
    'O calor e a alta umidade tornam recomendável treinar ao ar livre cedo de manhã ou no fim da tarde, com hidratação reforçada e atenção à intensidade nos dias mais abafados, sobretudo no período chuvoso.',

  mobilidade:
    'O acesso rodoviário se dá principalmente pelas rodovias estaduais MT-170 e MT-419, que conectam Juína a Juara, Aripuanã e ao restante do noroeste mato-grossense, integrando a cidade ao corredor logístico da sub-região, distante dos grandes centros do estado.',

  corridas: [
    {
      nome: 'Desafio 4 Morros — MTB & Night Run',
      descricao:
        'Evento esportivo regional que reúne mountain bike e corrida noturna, consolidando Juína como referência em provas no noroeste do estado.',
    },
    {
      nome: 'Corridas de rua e circuitos locais',
      descricao:
        'A cidade recebe provas de rua e eventos esportivos ao longo do ano, impulsionados pela associação local de atletismo e por grupos de corrida.',
    },
  ],
  culturaEsportiva:
    'A cultura esportiva de Juína vem se fortalecendo com grupos de corrida, uma associação local de atletismo e eventos que unem corrida e mountain bike, aproveitando a paisagem de transição amazônica, os rios e as trilhas da região para o treino funcional e ao ar livre.',
  academias:
    'A oferta de academias se concentra no Centro e nos módulos residenciais mais estruturados, complementada pelas academias ao ar livre das praças e pelos espaços naturais usados para corrida e treino funcional.',

  destaquesFitness: [
    'Entorno amazônico de rios, cachoeiras e trilhas como cenário para corrida e treino ao ar livre.',
    'Eventos regionais como o Desafio 4 Morros, unindo corrida noturna e mountain bike.',
    'Praças com academias ao ar livre ampliando o acesso ao treino gratuito nos módulos.',
    'Mercado fitness sustentado pelo papel de Juína como polo de serviços do noroeste mato-grossense.',
  ],

  precos: {
    avulsaMin: 50,
    avulsaMax: 110,
    mensalMin: 260,
    mensalMax: 680,
    onlineMin: 120,
    onlineMax: 340,
  },

  conclusao:
    'Polo do extremo noroeste de Mato Grosso, na transição para a Amazônia, Juína alia uma economia de agropecuária e mineração histórica de diamantes a um entorno natural de rios, cachoeiras e florestas, com terras indígenas dos Cinta Larga e de outros povos nas proximidades. Um personal trainer ajuda a montar uma rotina que respeite o calor e a umidade equatorial e a aproveitar com método as praças, os eventos de corrida e a paisagem da região.',

  vizinhas: ['tangara-da-serra-mt', 'caceres-mt'],

  fontes: [
    { nome: 'IBGE Cidades — Juína', url: 'https://cidades.ibge.gov.br/brasil/mt/juina/panorama' },
    { nome: 'Prefeitura de Juína', url: 'https://www.juina.mt.gov.br/' },
    { nome: 'Atlas Brasil — IDHM', url: 'https://www.atlasbrasil.org.br/' },
  ],
  atualizadoEm: '2026-06-29',
};
