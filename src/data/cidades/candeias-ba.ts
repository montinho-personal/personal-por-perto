import type { Cidade } from '../../lib/types';

export const cidade: Cidade = {
  slug: 'candeias-ba',
  nome: 'Candeias',
  uf: 'BA',
  estado: 'Bahia',
  estadoSlug: 'bahia',
  regiao: 'Nordeste',
  gentilico: 'candeense',
  tipo: 'cidade',

  populacao: 72382,
  populacaoAno: 2022,
  idhm: 0.691,
  idhmClasse: 'médio',
  altitudeM: 30,

  resumoEconomico:
    'Na Região Metropolitana de Salvador e no Recôncavo Baiano, a cerca de 46 km da capital, Candeias entrou para a história como berço da primeira produção comercial de petróleo do Brasil: em 1941 jorrou o poço Candeias 1 (C-1), marco do início da indústria petrolífera nacional. Hoje a economia é fortemente industrial, apoiada no braço norte do Centro Industrial de Aratu (CIA), no Porto de Aratu-Candeias e na proximidade com a Refinaria de Mataripe (antiga RLAM), com atividades em química, fertilizantes, plásticos, metalurgia e alimentos. É um dos maiores PIBs da Bahia.',

  mercado:
    'Por ser uma cidade industrial da Região Metropolitana de Salvador, Candeias tem um mercado fitness voltado sobretudo à população trabalhadora do polo de Aratu e dos bairros residenciais. A oferta se concentra em academias de bairro e treino funcional, e a procura por personal trainer tende a crescer entre quem busca acompanhamento próximo para conciliar a rotina de trabalho na indústria com o cuidado com a saúde.',

  bairrosNobres: ['Centro', 'Ouro Negro', 'Nova Brasília', 'Santo Antônio'],
  bairrosPopulares: ['Malembá', 'Sarandi', 'Nova Candeias', 'Pitanga', 'Urbis'],

  parques: [
    {
      nome: 'Praça da Prefeitura (Paço Municipal)',
      descricao:
        'Área central em torno do Paço Municipal, no bairro Ouro Negro, usada como ponto de encontro e de caminhada leve no coração da cidade.',
    },
    {
      nome: 'Orla e manguezais do Recôncavo',
      descricao:
        'Candeias se abre para a Baía de Todos-os-Santos e para os manguezais do Recôncavo, cenário de pesca e lazer à beira-d\'água que também serve de espaço para caminhada em trechos ribeirinhos.',
    },
    {
      nome: 'Vias do entorno urbano',
      descricao:
        'Na falta de grandes parques estruturados, boa parte da atividade ao ar livre acontece em praças de bairro e nas vias residenciais, aproveitadas para caminhada e corrida no começo e no fim do dia.',
    },
  ],
  ciclovias:
    'A infraestrutura cicloviária é modesta e pontual; o pedal e a corrida de rua acontecem principalmente nas vias urbanas dos bairros e nas ligações internas da cidade, exigindo atenção ao tráfego pesado ligado ao polo industrial.',

  clima:
    'O clima é tropical litorâneo, quente e úmido durante todo o ano, típico do Recôncavo e da orla da Baía de Todos-os-Santos. As temperaturas são altas e estáveis, com um período mais chuvoso concentrado entre outono e inverno (por volta de abril a julho) e umidade elevada na maior parte do ano.',
  climaTreino:
    'Calor e umidade altos pedem treinar de manhã cedo ou no fim da tarde, com hidratação reforçada e roupas leves; nos horários de sol forte e nos dias mais abafados, ambientes climatizados são a opção mais confortável e segura.',

  mobilidade:
    'Candeias se conecta à BR-324 — eixo federal que liga Salvador ao interior da Bahia — pela BA-522, e ao restante da Região Metropolitana por rodovias estaduais como a BA-523, passando por São Sebastião do Passé e Madre de Deus. O transporte urbano é feito por ônibus, e a logística de cargas gira em torno do Porto de Aratu-Candeias e do Centro Industrial de Aratu.',

  corridas: [
    {
      nome: 'Candeias Run',
      descricao:
        'Corrida de rua promovida no município, com percursos de 4 km e 8 km pelas ruas da cidade, que reúne centenas de corredores de Candeias e da região.',
    },
  ],
  culturaEsportiva:
    'A cultura esportiva combina a corrida de rua, que ganhou espaço com o Candeias Run, o futebol de bairro e a tradição do São João candeense, uma das festas juninas mais movimentadas da Região Metropolitana de Salvador, tudo em ritmo marcado pelo calor litorâneo.',
  academias:
    'A oferta é formada sobretudo por academias de bairro de musculação e treino funcional, distribuídas pelo Centro e pelos bairros residenciais, com porte compatível com uma cidade industrial de médio porte da Região Metropolitana.',

  destaquesFitness: [
    'Berço do primeiro poço comercial de petróleo do Brasil (Candeias 1, 1941), na Região Metropolitana de Salvador.',
    'Cidade industrial ligada ao Centro Industrial de Aratu e ao Porto de Aratu-Candeias, com rotina de trabalho intensa.',
    'Clima tropical litorâneo quente e úmido, que exige planejamento de horário e hidratação no treino.',
    'Corrida de rua em crescimento, com o Candeias Run reunindo corredores da cidade e do Recôncavo.',
  ],

  precos: {
    avulsaMin: 45,
    avulsaMax: 110,
    mensalMin: 240,
    mensalMax: 660,
    onlineMin: 110,
    onlineMax: 340,
  },

  conclusao:
    'Cidade industrial, quente e com forte identidade no Recôncavo, Candeias pede um treino que se encaixe na rotina de trabalho e respeite o calor litorâneo. Um personal trainer ajuda a organizar os melhores horários, ajustar a intensidade ao clima e manter a constância ao longo do ano, aproveitando as praças e as vias da cidade.',

  vizinhas: ['camacari-ba', 'simoes-filho-ba'],

  fontes: [
    { nome: 'IBGE Cidades — Candeias', url: 'https://cidades.ibge.gov.br/brasil/ba/candeias/panorama' },
    { nome: 'Prefeitura de Candeias', url: 'https://prefeitura.candeias.ba.gov.br/' },
    { nome: 'Atlas Brasil — IDHM', url: 'https://www.atlasbrasil.org.br/' },
  ],
  atualizadoEm: '2026-06-29',
};
