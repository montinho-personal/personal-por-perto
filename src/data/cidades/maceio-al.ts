import type { Cidade } from '../../lib/types';

export const cidade: Cidade = {
  slug: 'maceio-al',
  nome: 'Maceió',
  uf: 'AL',
  estado: 'Alagoas',
  estadoSlug: 'alagoas',
  regiao: 'Nordeste',
  gentilico: 'maceioense',
  tipo: 'cidade',

  populacao: 957916,
  populacaoAno: 2022,
  idhm: 0.721,
  idhmClasse: 'alto',
  altitudeM: 7,

  resumoEconomico:
    'Capital de Alagoas e um dos principais destinos turísticos do Nordeste, Maceió tem economia puxada por turismo, serviços, comércio e setor público. As praias urbanas de águas cristalinas — como as piscinas naturais de Pajuçara — são o grande ativo da cidade, e a orla urbanizada virou o palco natural da vida ativa dos maceioenses.',

  mercado:
    'A forte cultura de praia e estética do litoral nordestino faz da orla de Maceió uma verdadeira "academia a céu aberto": corrida, caminhada, ciclismo e treino funcional acontecem o dia inteiro à beira-mar. Nas zonas nobres da orla há boa oferta de academias e estúdios, e o personal na areia é parte da paisagem.',

  bairrosNobres: ['Ponta Verde', 'Jatiúca', 'Pajuçara', 'Mangabeiras'],
  bairrosPopulares: ['Benedito Bentes', 'Cidade Universitária', 'Jacintinho', 'Clima Bom'],

  parques: [
    {
      nome: 'Orla de Pajuçara',
      descricao:
        'Calçadão urbanizado com ciclovia, pista de caminhada e corrida e quadras poliesportivas, além da tradicional Feirinha de Artesanato — um dos pontos mais movimentados para treino ao ar livre.',
    },
    {
      nome: 'Orla de Ponta Verde',
      descricao:
        'Uma das melhores orlas urbanas do Nordeste, com calçadão, pista de corrida e caminhada e ciclovia à beira-mar.',
    },
    {
      nome: 'Orla de Jatiúca',
      descricao:
        'Praia nobre com ciclovia e pista de corrida e caminhada, completando o grande corredor esportivo litorâneo da cidade.',
    },
  ],
  ciclovias:
    'Maceió tem uma ciclovia contínua acompanhando a orla urbanizada (Pajuçara, Ponta Verde e Jatiúca), integrando lazer, mobilidade e treino à beira-mar.',

  clima:
    'O clima é tropical quente e úmido, com média em torno de 25 °C e janeiro como mês mais quente (máximas perto de 32 °C).',
  climaTreino:
    'O calor e a umidade altos o ano todo pedem treino ao ar livre nas primeiras horas da manhã ou no fim da tarde, com hidratação reforçada e atenção à insolação na orla.',

  mobilidade:
    'A cidade é conectada por rodovias como a BR-104, a BR-101 e a BR-316, com a orla funcionando como principal eixo de deslocamento. Internamente, predominam carro e ônibus.',

  corridas: [
    {
      nome: 'Maratona de Maceió',
      descricao:
        'O evento mais aguardado do calendário local, com provas de 5 km, 10 km, meia maratona (21 km) e maratona (42 km), realizadas ao longo de um fim de semana.',
    },
    {
      nome: 'Calendário de corridas de rua',
      descricao:
        'Provas regulares de 5 km, 10 km e 21 km acontecem o ano todo, com grupos de corrida ativos na orla.',
    },
  ],
  culturaEsportiva:
    'Maceió tem cultura de corrida de rua ativa e forte adesão às atividades de praia. A orla é o centro da vida fitness e do lazer da cidade, reunindo iniciantes e atletas em qualquer dia da semana.',
  academias:
    'A oferta de academias e estúdios se concentra nos bairros nobres da orla (Ponta Verde, Jatiúca, Pajuçara), complementada pela enorme "academia ao ar livre" que são os calçadões à beira-mar.',

  destaquesFitness: [
    'Orla urbanizada contínua (Pajuçara, Ponta Verde e Jatiúca), ideal para treino ao ar livre.',
    'Cultura de praia e estética favorável a personal trainers e treino funcional na areia.',
    'Calendário consolidado de corridas de rua, de 5 km a 42 km.',
    'Clima quente o ano todo permite treino externo em quase todas as estações.',
  ],

  precos: {
    avulsaMin: 65,
    avulsaMax: 150,
    mensalMin: 320,
    mensalMax: 880,
    onlineMin: 160,
    onlineMax: 410,
  },

  conclusao:
    'Com uma das orlas mais bonitas do Brasil, Maceió é feita para quem gosta de treinar ao ar livre. Um personal trainer ajuda a transformar os calçadões e a areia em um plano consistente — respeitando o calor e levando você do objetivo à constância.',

  vizinhas: ['aracaju-se', 'recife-pe', 'salvador-ba'],

  fontes: [
    { nome: 'IBGE Cidades — Maceió', url: 'https://cidades.ibge.gov.br/brasil/al/maceio/panorama' },
    { nome: 'Prefeitura de Maceió', url: 'https://www.maceio.al.gov.br/' },
    { nome: 'Atlas Brasil — IDHM', url: 'https://www.atlasbrasil.org.br/' },
  ],
  atualizadoEm: '2026-06-29',
};
