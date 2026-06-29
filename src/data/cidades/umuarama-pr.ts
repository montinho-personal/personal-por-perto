import type { Cidade } from '../../lib/types';

export const cidade: Cidade = {
  slug: 'umuarama-pr',
  nome: 'Umuarama',
  uf: 'PR',
  estado: 'Paraná',
  estadoSlug: 'parana',
  regiao: 'Sul',
  gentilico: 'umuaramense',
  tipo: 'cidade',

  populacao: 117095,
  populacaoAno: 2022,
  idhm: 0.761,
  idhmClasse: 'alto',
  altitudeM: 430,

  resumoEconomico:
    'Principal cidade do Noroeste do Paraná, Umuarama tem economia ancorada no agronegócio — pecuária de corte e leite, cana-de-açúcar, grãos e indústria de processamento — e em um forte setor de comércio, serviços, saúde e educação que atende toda a região. É polo universitário, sede da Universidade Paranaense (Unipar) e com campus regional da Universidade Estadual de Maringá (UEM), e referência em saúde no interior, com hospitais de grande porte como o Hospital Uopeccan.',

  mercado:
    'O mercado fitness é típico de cidade média do interior paranaense, com boa oferta de academias de musculação, estúdios de funcional e crossfit e personal trainers atuando em academias, estúdios e atendimento domiciliar. O perfil jovem e universitário e a presença de um centro regional de saúde sustentam a demanda por treino orientado.',

  bairrosNobres: ['Zona I', 'Parque Bandeirantes', 'Zona II', 'Jardim Aratimbó'],
  bairrosPopulares: ['Zona VII', 'Jardim Cruzeiro', 'Parque Vitória Régia', 'Jardim São Cristóvão'],

  parques: [
    {
      nome: 'Bosque Uirapuru',
      descricao:
        'Inaugurado em 1986, é um dos principais espaços verdes da cidade, com cerca de 58 mil m², trilha e pista de caminhada pavimentada, academia ao ar livre, quiosques, playground e cancha de bocha — referência para treino e caminhada no dia a dia.',
    },
    {
      nome: 'Parque Municipal dos Xetá (Bosque do Índio)',
      descricao:
        'Reserva verde na região central, voltada ao lazer e à educação ambiental, com áreas arborizadas que oferecem sombra e ambiente agradável para atividade física ao ar livre.',
    },
    {
      nome: 'APA do Rio Piava e reservas urbanas',
      descricao:
        'Umuarama está entre as áreas urbanas mais arborizadas do Paraná, com bosques no centro, a Área de Proteção Ambiental do Rio Piava e unidades de conservação que ampliam os espaços para caminhada e corrida.',
    },
  ],
  ciclovias:
    'A cidade conta com ciclovias e ciclofaixas em avenidas e no entorno de áreas verdes, em uma malha plana que favorece o deslocamento por bicicleta e o uso recreativo para pedal e treino.',

  clima:
    'O clima é subtropical com forte influência tropical, mais quente e seco que o sul do estado: situada sobre o arenito Caiuá do Noroeste do Paraná, Umuarama tem verões quentes, com temperaturas que ultrapassam os 35 °C, e invernos amenos e secos.',
  climaTreino:
    'O calor é o principal ponto de atenção para o treino ao ar livre. No verão, vale priorizar as primeiras horas da manhã ou o fim de tarde e reforçar a hidratação; o inverno seco e ameno é a época mais confortável para correr e pedalar.',

  mobilidade:
    'Umuarama é o principal entroncamento do Noroeste do Paraná, cortada por rodovias como a PR-323 e a PR-482, com terreno plano e malha urbana de avenidas largas. Conta com aeroporto regional e funciona como hub de serviços, saúde e educação para dezenas de municípios da região.',

  corridas: [
    {
      nome: 'Circuito de Corridas Sanepar — Etapa Umuarama',
      descricao:
        'Etapa do circuito estadual da Sanepar, com percursos de 5 km e 10 km, caminhada e categoria kids, que reúne centenas de corredores e movimenta a cena de corrida de rua na cidade.',
    },
    {
      nome: 'Corridas e provas de rua locais',
      descricao:
        'A cidade recebe ao longo do ano provas e corridas promovidas por entidades, comércio e instituições de ensino, com largadas em pontos como shoppings e avenidas centrais.',
    },
  ],
  culturaEsportiva:
    'A cultura esportiva é marcada pela corrida de rua, em crescimento com o circuito estadual, e pelo uso dos bosques e áreas verdes para caminhada e treino. O perfil universitário da cidade ajuda a manter ativa a procura por musculação e atividades funcionais.',
  academias:
    'A oferta reúne academias de musculação, estúdios de funcional e crossfit e profissionais autônomos, atendendo um público jovem, universitário e de famílias da região.',

  destaquesFitness: [
    'Bosque Uirapuru, com pista pavimentada e academia ao ar livre, é a principal referência outdoor da cidade.',
    'Etapa do Circuito de Corridas Sanepar aquece a cena de corrida de rua local.',
    'Uma das áreas urbanas mais arborizadas do Paraná, com bosques e a APA do Rio Piava para treino ao ar livre.',
    'Terreno plano e malha de avenidas largas, favoráveis a corrida e pedal.',
  ],

  precos: {
    avulsaMin: 50,
    avulsaMax: 120,
    mensalMin: 260,
    mensalMax: 720,
    onlineMin: 120,
    onlineMax: 360,
  },

  conclusao:
    'Polo universitário e de saúde do Noroeste do Paraná, Umuarama combina terreno plano, áreas verdes bem cuidadas e uma cena de corrida em ascensão — um bom cenário para treinar com constância. Um personal trainer ajuda a aproveitar essa estrutura com método, ajustando o treino ao calor da região e aos objetivos de cada pessoa, da musculação à preparação para as provas de rua.',

  vizinhas: ['maringa-pr', 'cascavel-pr', 'londrina-pr'],

  fontes: [
    { nome: 'IBGE Cidades — Umuarama', url: 'https://cidades.ibge.gov.br/brasil/pr/umuarama/panorama' },
    { nome: 'Prefeitura de Umuarama', url: 'https://www.umuarama.pr.gov.br/' },
    { nome: 'Atlas Brasil — IDHM', url: 'https://www.atlasbrasil.org.br/perfil/municipio/4128104' },
  ],
  atualizadoEm: '2026-06-29',
};
