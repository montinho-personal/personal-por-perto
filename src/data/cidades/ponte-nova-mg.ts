import type { Cidade } from '../../lib/types';

export const cidade: Cidade = {
  slug: 'ponte-nova-mg',
  nome: 'Ponte Nova',
  uf: 'MG',
  estado: 'Minas Gerais',
  estadoSlug: 'minas-gerais',
  regiao: 'Sudeste',
  gentilico: 'ponte-novense',
  tipo: 'cidade',

  populacao: 57776,
  populacaoAno: 2022,
  idhm: 0.717,
  idhmClasse: 'alto',
  altitudeM: 420,

  resumoEconomico:
    'Ponte Nova é um polo regional da Zona da Mata mineira, cortada pelo rio Piranga, formador da bacia do rio Doce, a cerca de 180 km de Belo Horizonte. A economia se apoia no comércio e nos serviços que atendem a microrregião, com destaque para a rede de saúde e de ensino que recebe moradores de cidades vizinhas, além de forte presença da agropecuária e da cafeicultura típicas da região. A cidade carrega tradição agroindustrial — abrigou um dos primeiros engenhos de cana do estado no fim do século XIX — e hoje concentra parte importante da vida econômica do entorno.',

  mercado:
    'Como cidade média que funciona como referência de serviços para a região, Ponte Nova tem um mercado fitness em crescimento, sustentado por academias locais e pela procura de quem busca acompanhamento mais próximo. O personal trainer ganha espaço entre moradores que querem treino individualizado, seja para complementar a musculação, seja para aproveitar praças e o entorno do rio em atividades ao ar livre.',

  bairrosNobres: ['Centro', 'Triângulo', 'Palmeiras', 'Bom Viver'],
  bairrosPopulares: ['Fátima', 'Vila Alvarenga', 'Raza', 'Paraíso'],

  parques: [
    {
      nome: 'Praça Getúlio Vargas',
      descricao:
        'Principal praça do centro de Ponte Nova e cartão-postal da cidade, é ponto de encontro e referência urbana — usada para caminhadas, alongamento e atividade leve em meio à vida cotidiana do município.',
    },
    {
      nome: 'Orla e entorno do rio Piranga',
      descricao:
        'O rio Piranga, de águas avermelhadas que dão nome ao curso d’água (“piranga” significa vermelho em tupi), atravessa a área urbana; suas margens e vias próximas servem de percurso para caminhada e corrida ao ar livre.',
    },
    {
      nome: 'Reservatório da Usina Risoleta Neves (Candonga)',
      descricao:
        'Na região, o reservatório da hidrelétrica Risoleta Neves, no rio Doce próximo à divisa municipal, e os trechos do Piranga abrem espaço para atividades náuticas e lazer ao ar livre em meio à paisagem da Zona da Mata.',
    },
  ],
  ciclovias:
    'A infraestrutura cicloviária é modesta, concentrada em trechos da área urbana; boa parte do pedal e da corrida acontece nas vias da cidade e nos acessos ao entorno do rio.',

  clima:
    'O clima é tropical de altitude, característico da Zona da Mata mineira, com verão quente e chuvoso (de outubro a março) e inverno mais seco e ameno. A altitude em torno de 420 metros e a presença do rio Piranga ajudam a moderar as temperaturas ao longo do ano.',
  climaTreino:
    'O verão chuvoso pede atenção aos horários e a alternativas cobertas nos dias de pancadas de chuva, enquanto o inverno seco e mais fresco favorece o treino ao ar livre. De maneira geral, manhãs e fins de tarde são os períodos mais confortáveis para atividade externa.',

  mobilidade:
    'Ponte Nova é um entroncamento regional da Zona da Mata: a BR-120 liga a cidade a Belo Horizonte e ao interior, e rodovias estaduais conectam o município a Viçosa, Caratinga e demais cidades do entorno. O transporte urbano é feito por ônibus, e a posição de polo concentra fluxo de quem vem da região para comércio, saúde e estudo.',

  corridas: [
    {
      nome: 'Corridas de rua na Zona da Mata',
      descricao:
        'Provas de corrida de rua acontecem em Ponte Nova e em cidades próximas ao longo do ano, em geral ligadas a calendários esportivos municipais e a eventos comemorativos, reunindo corredores da região.',
    },
  ],
  culturaEsportiva:
    'A cultura esportiva ponte-novense mistura o futebol e as práticas de academia com o uso de praças e das margens do rio Piranga para caminhada e corrida, em uma rotina típica de cidade média do interior mineiro.',
  academias:
    'A oferta é formada principalmente por academias locais de musculação e treino funcional, distribuídas pelo centro e pelos bairros residenciais, com porte compatível com uma cidade média que serve de polo para a região.',

  destaquesFitness: [
    'Polo regional da Zona da Mata mineira, referência em comércio, saúde e ensino para o entorno.',
    'Rio Piranga, formador da bacia do rio Doce, atravessando a cidade e abrindo espaço para atividade ao ar livre.',
    'Praça Getúlio Vargas como ponto central de convívio e caminhada no coração da cidade.',
    'Clima tropical de altitude, com inverno seco e ameno favorável ao treino externo.',
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
    'Cidade média e acolhedora da Zona da Mata, Ponte Nova combina a vida de polo regional com praças e o rio Piranga como cenário para se exercitar. Um personal trainer ajuda a organizar a rotina, definir os melhores horários ao longo das estações e manter a constância, seja na academia ou ao ar livre.',

  vizinhas: ['vicosa-mg', 'caratinga-mg'],

  fontes: [
    { nome: 'IBGE Cidades — Ponte Nova', url: 'https://cidades.ibge.gov.br/brasil/mg/ponte-nova/panorama' },
    { nome: 'Prefeitura de Ponte Nova', url: 'https://www.pontenova.mg.gov.br/' },
    { nome: 'Atlas Brasil — IDHM', url: 'https://www.atlasbrasil.org.br/' },
  ],
  atualizadoEm: '2026-06-29',
};
