import type { Cidade } from '../../lib/types';

export const cidade: Cidade = {
  slug: 'abaetetuba-pa',
  nome: 'Abaetetuba',
  uf: 'PA',
  estado: 'Pará',
  estadoSlug: 'para',
  regiao: 'Norte',
  gentilico: 'abaetetubense',
  tipo: 'cidade',

  populacao: 158188,
  populacaoAno: 2022,
  idhm: 0.628,
  idhmClasse: 'médio',
  altitudeM: 10,

  resumoEconomico:
    'No nordeste paraense, na região do Baixo Tocantins, Abaetetuba se estende às margens do rio Maratauíra, próximo ao encontro do rio Tocantins com o rio Pará. É a maior cidade da microrregião de Cametá e tem na economia ribeirinha o seu eixo: o extrativismo do açaí e do miriti, a pesca e o comércio movimentam o município. Conhecida como a "capital mundial do miriti", a cidade transforma a palmeira (buriti) em famosos brinquedos artesanais — patrimônio cultural do Pará — comercializados especialmente no Círio de Nazaré, em Belém.',

  mercado:
    'O mercado de personal trainers em Abaetetuba é típico de cidade média do interior amazônico: concentrado em academias do Centro e dos bairros mais estruturados, com demanda crescente por acompanhamento individual e por treino ao ar livre. A orla e as praças funcionam como espaços naturais de atividade física para boa parte da população.',

  bairrosNobres: ['Centro', 'Algodoal', 'Aviação', 'Santa Clara'],
  bairrosPopulares: ['Mutirão', 'São Lourenço', 'São Sebastião', 'Francilândia'],

  parques: [
    {
      nome: 'Orla de Abaetetuba (rio Maratauíra)',
      descricao:
        'Beira-rio na sede do município, com calçadão e vista para o rio Maratauíra e as ilhas. É o principal cartão-postal e o espaço mais usado para caminhada no fim de tarde.',
    },
    {
      nome: 'Região das ilhas e comunidades ribeirinhas',
      descricao:
        'Conjunto de dezenas de ilhas banhadas pelo rio Pará, em frente à orla, onde vivem as comunidades ribeirinhas entre açaizais e buritizais. Cenário de remo, canoagem e travessias de barco no cotidiano local.',
    },
    {
      nome: 'Praças e academias ao ar livre',
      descricao:
        'Praças do Centro e dos bairros oferecem espaço para caminhada e exercícios; algumas contam com equipamentos de ginástica de uso gratuito.',
    },
  ],
  ciclovias:
    'A cidade não possui malha cicloviária estruturada divulgada em fonte oficial; a bicicleta é meio de transporte comum no dia a dia, e a orla concentra a maior parte das caminhadas e pedais.',

  clima:
    'O clima é equatorial, quente e chuvoso o ano inteiro, com elevada umidade e chuvas frequentes, mais intensas no primeiro semestre.',
  climaTreino:
    'O calor e a umidade altos pedem hidratação reforçada e treino no início da manhã ou no fim da tarde; a brisa da orla do Maratauíra torna esses horários os mais agradáveis para a atividade ao ar livre.',

  mobilidade:
    'O acesso rodoviário se dá pela PA-151, que liga Abaetetuba a Belém e às demais cidades da região. O transporte fluvial é parte essencial do cotidiano: barcos e embarcações conectam a sede às dezenas de ilhas e comunidades ribeirinhas do município.',

  corridas: [
    {
      nome: 'Corridas de rua do calendário local',
      descricao:
        'Provas de rua promovidas no município ao longo do ano, frequentemente associadas a datas comemorativas e a ações de incentivo à atividade física, com percursos pelo Centro e pela orla.',
    },
    {
      nome: 'Atividades esportivas do Miriti Fest e do Círio',
      descricao:
        'O calendário cultural — com o Miriti Fest e a festividade do Círio — costuma reunir ações esportivas e de lazer que movimentam a cidade e estimulam a prática ao ar livre.',
    },
  ],
  culturaEsportiva:
    'A cultura esportiva mistura tradição ribeirinha e práticas urbanas: futebol e futsal são populares nos bairros, a caminhada predomina na orla e atividades aquáticas como remo e canoagem fazem parte da vida nas ilhas. O calendário cultural forte, ligado ao miriti e ao Círio, também aproxima a população do esporte e do lazer ao ar livre.',
  academias:
    'A oferta de academias se concentra no Centro e nos bairros mais estruturados, complementada por academias ao ar livre em praças e pela orla como grande espaço gratuito de treino.',

  destaquesFitness: [
    'Orla do rio Maratauíra como principal espaço de caminhada e treino ao ar livre.',
    'Academias ao ar livre em praças do Centro e dos bairros.',
    'Tradição de atividades aquáticas (remo e canoagem) ligada à vida ribeirinha das ilhas.',
    'Calendário cultural forte (Miriti Fest e Círio) que movimenta esporte e lazer.',
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
    'Cidade do miriti e das ilhas, Abaetetuba combina a vida ribeirinha à beira do Maratauíra com uma rotina urbana em expansão. Um personal trainer ajuda a montar um treino que respeite o calor equatorial e aproveite a orla e as praças, com segurança e constância.',

  vizinhas: ['belem-pa', 'ananindeua-pa', 'castanhal-pa'],

  fontes: [
    { nome: 'IBGE Cidades — Abaetetuba', url: 'https://cidades.ibge.gov.br/brasil/pa/abaetetuba/panorama' },
    { nome: 'Prefeitura de Abaetetuba', url: 'https://abaetetuba.pa.gov.br/' },
    { nome: 'Atlas Brasil — IDHM', url: 'https://www.atlasbrasil.org.br/' },
  ],
  atualizadoEm: '2026-06-29',
};
