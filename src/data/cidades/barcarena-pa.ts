import type { Cidade } from '../../lib/types';

export const cidade: Cidade = {
  slug: 'barcarena-pa',
  nome: 'Barcarena',
  uf: 'PA',
  estado: 'Pará',
  estadoSlug: 'para',
  regiao: 'Norte',
  gentilico: 'barcarenense',
  tipo: 'cidade',

  populacao: 126650,
  populacaoAno: 2022,
  idhm: 0.662,
  idhmClasse: 'médio',
  altitudeM: 16,

  resumoEconomico:
    'Na Região Metropolitana de Belém, na margem direita do rio Pará e voltada para a baía do Marajó, Barcarena é um dos principais polos industriais e portuários da Amazônia. Sua economia gira em torno do complexo portuário-industrial de Vila do Conde, que abriga o beneficiamento de alumínio (Albras e a refinaria de alumina Hydro Alunorte) e a movimentação de granéis, com destaque para a exportação de grãos pelo Porto de Vila do Conde. Esse parque industrial transformou o município nas últimas décadas, atraindo trabalhadores e empresas, ao mesmo tempo em que convivem com ele a vida ribeirinha das ilhas e as praias de rio que marcam a identidade local.',

  mercado:
    'O mercado de personal trainers em Barcarena reflete a combinação entre o polo industrial e a vida ribeirinha: há demanda ligada aos trabalhadores e famílias do complexo de Vila do Conde, concentrada em Vila dos Cabanos e na sede, e procura crescente por treino ao ar livre nas praias de rio e nos espaços públicos. A oferta se distribui entre academias dos núcleos urbanos mais estruturados e o acompanhamento individual, presencial ou online.',

  bairrosNobres: ['Vila dos Cabanos', 'Centro (sede de Barcarena)', 'Laranjal', 'Pioneiro'],
  bairrosPopulares: ['Murucupi', 'Industrial', 'Cabanagem', 'Vila do Conde'],

  parques: [
    {
      nome: 'Praia do Caripi',
      descricao:
        'Principal cartão-postal de Barcarena, é uma praia de rio formada pelas águas da baía do Marajó, com faixa de areia extensa e águas calmas. Reúne famílias e visitantes e funciona como grande espaço de caminhada e lazer ao ar livre, sobretudo no período de veraneio.',
    },
    {
      nome: 'Praias de Itupanema, Conde e Sirituba',
      descricao:
        'Conjunto de praias de rio do município, banhadas pelo rio Pará e pela baía do Marajó, muito frequentadas no verão. Os trechos de areia e as orlas servem de palco para caminhadas, corridas leves e atividades aquáticas.',
    },
    {
      nome: 'Região das ilhas (Trambioca, das Onças e comunidades ribeirinhas)',
      descricao:
        'Ilhas banhadas pelo rio Pará e pela baía do Marajó, onde vivem comunidades ribeirinhas entre açaizais e igarapés. Cenário cotidiano de remo, canoagem e travessias de barco, integrando a natureza amazônica à rotina do município.',
    },
  ],
  ciclovias:
    'O município não possui malha cicloviária estruturada divulgada em fonte oficial. A bicicleta é meio de transporte comum nos núcleos urbanos, e as orlas das praias de rio concentram boa parte das caminhadas e pedais de lazer.',

  clima:
    'O clima é equatorial, quente e úmido o ano inteiro, com temperaturas elevadas, alta umidade e chuvas frequentes, mais intensas no primeiro semestre.',
  climaTreino:
    'O calor e a umidade altos pedem hidratação reforçada e treino no início da manhã ou no fim da tarde. A brisa vinda do rio Pará e da baía do Marajó torna as orlas das praias os pontos mais agradáveis para a atividade ao ar livre nesses horários.',

  mobilidade:
    'O acesso rodoviário se dá pela PA-151 e pela PA-481, que ligam a sede e Vila dos Cabanos ao complexo portuário-industrial de Vila do Conde e, pela Alça Viária, à malha que conecta o município a Belém. O complexo portuário-industrial de Vila do Conde — com o Porto de Vila do Conde e as plantas da Hydro Alunorte e da Albras — é o grande eixo de deslocamento de trabalhadores. O transporte fluvial complementa o cotidiano, conectando a sede às ilhas e comunidades ribeirinhas.',

  corridas: [
    {
      nome: 'Corridas de rua do calendário local',
      descricao:
        'Provas de rua promovidas no município ao longo do ano, com percursos pela sede, por Vila dos Cabanos e pelas orlas, frequentemente associadas a datas comemorativas e a ações de incentivo à atividade física.',
    },
    {
      nome: 'Atividades esportivas dos festivais e do veraneio',
      descricao:
        'O calendário cultural e o período de veraneio nas praias de rio costumam reunir ações esportivas e de lazer — caminhadas, corridas leves e atividades aquáticas — que movimentam a população ao ar livre.',
    },
  ],
  culturaEsportiva:
    'A cultura esportiva de Barcarena mistura a vida ribeirinha das ilhas com a rotina urbana ligada ao polo industrial. O futebol e o futsal são populares nos bairros, a caminhada predomina nas orlas das praias de rio e atividades aquáticas como remo e canoagem fazem parte do dia a dia nas ilhas. O veraneio, com forte presença nas praias de Caripi e Itupanema, é um dos momentos de maior prática ao ar livre.',
  academias:
    'A oferta de academias se concentra em Vila dos Cabanos e na sede do município, núcleos mais estruturados ligados ao complexo industrial, complementada por academias ao ar livre em praças e pelas orlas das praias como grandes espaços gratuitos de treino.',

  destaquesFitness: [
    'Praias de rio (Caripi, Itupanema, Conde) como principais espaços de caminhada e treino ao ar livre.',
    'Núcleo urbano de Vila dos Cabanos, estruturado em torno do complexo industrial, com oferta de academias.',
    'Tradição de atividades aquáticas (remo e canoagem) ligada à vida ribeirinha das ilhas.',
    'Veraneio e calendário de festivais que movimentam esporte e lazer ao ar livre.',
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
    'Polo industrial e portuário da Amazônia, com praias de rio na baía do Marajó e forte presença ribeirinha, Barcarena combina a rotina urbana de Vila dos Cabanos e da sede com a natureza das ilhas. Um personal trainer ajuda a montar um treino que respeite o calor equatorial e aproveite as orlas e os espaços públicos, com segurança e constância.',

  vizinhas: ['belem-pa', 'ananindeua-pa', 'abaetetuba-pa'],

  fontes: [
    { nome: 'IBGE Cidades — Barcarena', url: 'https://cidades.ibge.gov.br/brasil/pa/barcarena/panorama' },
    { nome: 'Prefeitura de Barcarena', url: 'https://www.barcarena.pa.gov.br/' },
    { nome: 'Atlas Brasil — IDHM', url: 'https://www.atlasbrasil.org.br/' },
  ],
  atualizadoEm: '2026-06-29',
};
