import type { Cidade } from '../../lib/types';

export const cidade: Cidade = {
  slug: 'tailandia-pa',
  nome: 'Tailândia',
  uf: 'PA',
  estado: 'Pará',
  estadoSlug: 'para',
  regiao: 'Norte',
  gentilico: 'tailandense',
  tipo: 'cidade',

  populacao: 72493,
  populacaoAno: 2022,
  idhm: 0.588,
  idhmClasse: 'baixo',
  altitudeM: 33,

  resumoEconomico:
    'No nordeste paraense, no sudeste da Região Metropolitana de Belém ampliada, Tailândia se firmou como um dos principais polos de dendê (óleo de palma) do Brasil. O município é cortado pelo rio Acará e pela rodovia PA-150, eixo em torno do qual a cidade nasceu a partir da colonização agrícola dos anos 1970. Além da palma, cultivada em dezenas de milhares de hectares, a economia se apoia historicamente na pecuária e na extração de madeira, atividades que moldaram a ocupação do território e o perfil de uma cidade jovem e em transformação.',

  mercado:
    'O mercado de personal trainers em Tailândia é típico de cidade média do interior paraense: concentrado em academias do Centro e dos bairros mais estruturados, com demanda crescente por acompanhamento individual entre trabalhadores do agronegócio e do comércio. A vida ligada ao trabalho no campo e nas agroindústrias convive com uma rotina urbana que busca cada vez mais espaços para a prática de atividade física.',

  bairrosNobres: ['Centro', 'Agropalma', 'Novo Horizonte', 'Jardim Tropical'],
  bairrosPopulares: ['Elim', 'Castanheira', 'Vitória', 'São Judas Tadeu'],

  parques: [
    {
      nome: 'Orla e margens do rio Acará',
      descricao:
        'O rio Acará atravessa o município de sul a norte e marca a paisagem da região. Suas margens e balneários servem de espaço de lazer e de prática de atividades ao ar livre, especialmente nos fins de semana.',
    },
    {
      nome: 'Praças e academias ao ar livre',
      descricao:
        'Praças do Centro e dos bairros oferecem espaço para caminhada e exercícios; algumas contam com equipamentos de ginástica de uso gratuito, usados sobretudo no início da manhã e no fim da tarde.',
    },
    {
      nome: 'Áreas verdes e estradas vicinais',
      descricao:
        'Entre os dendezais e as áreas rurais, estradas vicinais e ramais são usados informalmente por corredores e ciclistas, em meio à paisagem agrícola que cerca a cidade.',
    },
  ],
  ciclovias:
    'A cidade não possui malha cicloviária estruturada divulgada em fonte oficial; a bicicleta é meio de transporte comum no dia a dia, e as praças e a orla do rio Acará concentram boa parte das caminhadas e pedais.',

  clima:
    'O clima é equatorial úmido, quente o ano inteiro, com elevada umidade e chuvas abundantes, mais intensas no primeiro semestre e período mais seco entre os meses de menor precipitação.',
  climaTreino:
    'O calor e a umidade altos pedem hidratação reforçada e treino no início da manhã ou no fim da tarde; nesses horários, as temperaturas ficam mais amenas e a atividade ao ar livre se torna mais confortável e segura.',

  mobilidade:
    'O acesso rodoviário se dá principalmente pela PA-150, que liga Tailândia a Belém e às demais cidades do nordeste paraense, complementada pela PA-256 na conexão com a região. A malha de ramais e estradas vicinais conecta a sede às áreas rurais e às agroindústrias de dendê espalhadas pelo município.',

  corridas: [
    {
      nome: 'Corridas de rua do calendário local',
      descricao:
        'Provas de rua promovidas no município ao longo do ano, frequentemente associadas a datas comemorativas e a ações de incentivo à atividade física, com percursos pelo Centro e pelas principais avenidas.',
    },
    {
      nome: 'Atividades esportivas do aniversário da cidade',
      descricao:
        'As festividades em torno do aniversário do município costumam reunir ações esportivas e de lazer que movimentam a cidade e estimulam a prática ao ar livre.',
    },
  ],
  culturaEsportiva:
    'A cultura esportiva é fortemente marcada pelo futebol e pelo futsal, populares nos bairros e nas comunidades rurais, enquanto a caminhada predomina nas praças e na orla do rio Acará. Em uma cidade jovem e ligada ao agronegócio, cresce o interesse por academias e por treino orientado como forma de saúde e bem-estar.',
  academias:
    'A oferta de academias se concentra no Centro e nos bairros mais estruturados, complementada por academias ao ar livre em praças e pela orla do rio Acará como espaço gratuito de treino.',

  destaquesFitness: [
    'Margens do rio Acará como espaço de lazer e atividade ao ar livre.',
    'Academias ao ar livre em praças do Centro e dos bairros.',
    'Estradas vicinais e ramais entre os dendezais usados por corredores e ciclistas.',
    'Calendário esportivo ligado ao aniversário da cidade e a datas comemorativas.',
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
    'Polo do dendê no nordeste paraense, Tailândia é uma cidade jovem que cresceu à beira da PA-150, entre dendezais, pastagens e o rio Acará. Um personal trainer ajuda a montar um treino que respeite o calor equatorial úmido e aproveite as praças e a orla, com segurança e constância.',

  vizinhas: ['abaetetuba-pa', 'barcarena-pa', 'belem-pa'],

  fontes: [
    { nome: 'IBGE Cidades — Tailândia', url: 'https://cidades.ibge.gov.br/brasil/pa/tailandia/panorama' },
    { nome: 'Prefeitura de Tailândia', url: 'https://tailandia.pa.gov.br/' },
    { nome: 'Atlas Brasil — IDHM', url: 'https://www.atlasbrasil.org.br/' },
  ],
  atualizadoEm: '2026-06-29',
};
