import type { Cidade } from '../../lib/types';

export const cidade: Cidade = {
  slug: 'altamira-pa',
  nome: 'Altamira',
  uf: 'PA',
  estado: 'Pará',
  estadoSlug: 'para',
  regiao: 'Norte',
  gentilico: 'altamirense',
  tipo: 'cidade',

  populacao: 126279,
  populacaoAno: 2022,
  idhm: 0.665,
  idhmClasse: 'médio',
  altitudeM: 109,

  resumoEconomico:
    'No sudoeste do Pará, às margens do rio Xingu, Altamira é o grande polo regional da bacia do Xingu e um dos maiores municípios do Brasil em área territorial — com cerca de 159 mil km², já figurou como o maior município do mundo em extensão. A economia combina comércio e serviços que atendem toda a região, pecuária, agricultura e o forte impacto da Usina Hidrelétrica de Belo Monte, no rio Xingu, cuja construção transformou a cidade e atraiu população e investimentos. A sede urbana, cortada pela Transamazônica (BR-230), reúne hoje mais de 50 bairros e concentra os serviços de saúde, educação e abastecimento de um vasto território amazônico.',

  mercado:
    'O mercado de personal trainers em Altamira é típico de cidade média do interior paraense, porém aquecido pela condição de polo regional: a demanda se concentra em academias do Centro e dos bairros mais estruturados, com procura crescente por acompanhamento individual e por treino ao ar livre. A orla do Xingu e as praças funcionam como espaços naturais de atividade física para boa parte da população.',

  bairrosNobres: ['Centro', 'Esplanada do Xingu', 'Brasília', 'Aparecida'],
  bairrosPopulares: ['Premem', 'Sudam I', 'Jardim Independente I', 'Jardim Independente II'],

  parques: [
    {
      nome: 'Orla de Altamira (rio Xingu)',
      descricao:
        'Beira-rio na sede do município, com calçadão e vista para o rio Xingu. É o principal cartão-postal e o espaço mais usado para caminhada e encontros no fim da tarde, com requalificação em andamento para ampliar a área de lazer.',
    },
    {
      nome: 'Rio Xingu e a "Volta Grande"',
      descricao:
        'A partir de Altamira começa a chamada Volta Grande do Xingu, trecho sinuoso e cheio de corredeiras do rio, onde, ao final, está a Usina Hidrelétrica de Belo Monte. O rio é cenário de banho, pesca e passeios de barco no cotidiano local.',
    },
    {
      nome: 'Praças e academias ao ar livre',
      descricao:
        'Praças do Centro e dos bairros oferecem espaço para caminhada e exercícios; algumas contam com equipamentos de ginástica de uso gratuito, como nas áreas dos bairros Premem e Aparecida.',
    },
  ],
  ciclovias:
    'A cidade não possui malha cicloviária estruturada divulgada em fonte oficial; a bicicleta é meio de transporte comum no dia a dia, e a orla do Xingu concentra boa parte das caminhadas e pedais.',

  clima:
    'O clima é equatorial, quente e chuvoso o ano inteiro, com elevada umidade e chuvas mais intensas no primeiro semestre e estiagem entre junho e novembro.',
  climaTreino:
    'O calor e a umidade altos pedem hidratação reforçada e treino no início da manhã ou no fim da tarde; a brisa da orla do Xingu torna esses horários os mais agradáveis para a atividade ao ar livre.',

  mobilidade:
    'O acesso rodoviário se dá pela Transamazônica (BR-230), que corta o município no sentido leste-oeste e conecta Altamira a Marabá, Itaituba e, mais ao norte, a Santarém e Belém. Altamira é o "marco zero" histórico da Transamazônica. O transporte fluvial pelo rio Xingu também integra a cidade às comunidades ribeirinhas do entorno.',

  corridas: [
    {
      nome: 'Corridas de rua do calendário local',
      descricao:
        'Provas de rua promovidas no município ao longo do ano, frequentemente associadas a datas comemorativas e a ações de incentivo à atividade física, com percursos pelo Centro e pela orla do Xingu.',
    },
    {
      nome: 'Atividades esportivas do aniversário da cidade',
      descricao:
        'As comemorações de aniversário de Altamira e o calendário cultural costumam reunir ações esportivas e de lazer que movimentam a cidade e estimulam a prática ao ar livre.',
    },
  ],
  culturaEsportiva:
    'A cultura esportiva mistura tradição ribeirinha e práticas urbanas: futebol e futsal são populares nos bairros, a caminhada predomina na orla do Xingu e o banho de rio faz parte da vida cotidiana. Como polo regional, a cidade reúne também a maior oferta de academias e de eventos esportivos de toda a bacia do Xingu.',
  academias:
    'A oferta de academias se concentra no Centro e nos bairros mais estruturados, complementada por academias ao ar livre em praças e pela orla como grande espaço gratuito de treino.',

  academiasProximas: [
    { nome: 'Corpus Academia' },
    { nome: 'Flex Academia', detalhe: 'na Rua Coronel José Pórfirio, na orla' },
  ],
  academiasVerificadasEm: '2026-08-27',

  destaquesFitness: [
    'Orla do rio Xingu como principal espaço de caminhada e treino ao ar livre.',
    'Academias ao ar livre em praças do Centro e dos bairros.',
    'Banho de rio e passeios de barco no Xingu como parte da vida cotidiana.',
    'Condição de polo regional do Xingu, com a maior oferta de academias e eventos da região.',
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
    'Cidade do Xingu e marco zero da Transamazônica, Altamira combina a vida ribeirinha amazônica com a dinâmica de um polo regional em expansão. Um personal trainer ajuda a montar um treino que respeite o calor equatorial e aproveite a orla e as praças, com segurança e constância.',

  vizinhas: ['maraba-pa', 'santarem-pa'],

  fontes: [
    { nome: 'IBGE Cidades — Altamira', url: 'https://cidades.ibge.gov.br/brasil/pa/altamira/panorama' },
    { nome: 'Prefeitura de Altamira', url: 'https://altamira.pa.gov.br/' },
    { nome: 'Atlas Brasil — IDHM', url: 'https://www.atlasbrasil.org.br/' },
  ],
  atualizadoEm: '2026-08-27',
  capaArte: {
    src: '/capas-cidade/altamira-pa.webp',
    w: 1200,
    h: 900,
    alt:
      'Personal trainer em Altamira (PA) em arte que une treino em dupla à beira do rio Xingu, com a ponte e as embarcações da orla altamirense — Personal por Perto',
    legenda:
      'Treino personalizado em Altamira: um plano feito para o seu corpo e a sua rotina, com acompanhamento profissional na cidade e região.',
  },
};
