import type { Cidade } from '../../lib/types';

export const cidade: Cidade = {
  slug: 'pinheiro-ma',
  nome: 'Pinheiro',
  uf: 'MA',
  estado: 'Maranhão',
  estadoSlug: 'maranhao',
  regiao: 'Nordeste',
  gentilico: 'pinheirense',
  tipo: 'cidade',

  populacao: 84621,
  populacaoAno: 2022,
  idhm: 0.637,
  idhmClasse: 'médio',
  altitudeM: 15,

  resumoEconomico:
    'Maior cidade da Baixada Maranhense, no oeste do estado, Pinheiro é um polo regional de comércio e serviços que atende a uma rede de municípios vizinhos. A economia se apoia na agropecuária — com destaque para a criação de búfalos nos campos alagáveis, atividade tradicional da região — na pesca, que tem no rio Pericumã e nos lagos uma fonte importante de subsistência, e no comércio que abastece toda a microrregião. A cidade concentra também unidades de ensino e de saúde que servem de referência para a Baixada.',

  mercado:
    'Como polo de uma região de cidades menores, Pinheiro reúne a maior parte da estrutura fitness da Baixada Maranhense, em geral concentrada em academias de musculação e treino funcional no entorno do Centro. A procura por personal trainers tende a vir de quem busca acompanhamento mais próximo para treinar com o calor úmido típico da região e para manter constância fora dos grandes centros.',

  bairrosNobres: ['Centro', 'Matriz', 'São Sebastião', 'Aeroporto'],
  bairrosPopulares: ['Campinho', 'Mutirão', 'São Benedito', 'São Raimundo'],

  parques: [
    {
      nome: 'Lagos e campos alagáveis da Baixada',
      descricao:
        'Durante a estação chuvosa, os campos ao redor da cidade se enchem e os lagos se unem formando os chamados "mares de Pinheiro"; nos meses secos, esses campos viram espaço aberto usado por moradores para caminhada e atividade ao ar livre.',
    },
    {
      nome: 'Orla e margens do rio Pericumã',
      descricao:
        'O rio que corta a região é referência da paisagem e da vida local; suas margens e os trechos urbanos próximos servem de percurso para caminhada e corrida, condicionados ao ciclo de cheia e seca.',
    },
    {
      nome: 'APA da Baixada Maranhense',
      descricao:
        'Pinheiro está dentro da maior área de proteção ambiental do estado, um vasto complexo de campos alagáveis reconhecido como sítio Ramsar de importância internacional, que oferece cenário natural para atividades ao ar livre.',
    },
  ],
  ciclovias:
    'A estrutura cicloviária é modesta, e boa parte do pedal e da corrida acontece nas vias da área urbana, no Centro e nos bairros residenciais, além das estradas vicinais que cortam os campos da Baixada.',

  clima:
    'O clima é equatorial, quente e úmido, com duas estações bem marcadas: a chuvosa, chamada localmente de inverno, que vai de janeiro a junho e alaga os campos da Baixada, e a seca, chamada de verão, de julho a dezembro. As temperaturas se mantêm altas ao longo de todo o ano, com forte umidade no período das chuvas.',
  climaTreino:
    'O calor e a umidade elevada pedem treinar bem cedo ou no fim da tarde, com hidratação reforçada; na estação chuvosa, as fortes chuvas e o alagamento dos campos favorecem ambientes cobertos, enquanto o período seco é mais propício ao treino ao ar livre.',

  mobilidade:
    'Pinheiro é o principal acesso à Baixada Maranhense pela MA-014, rodovia que liga a cidade a Vitória do Mearim e, de lá, à conexão rodoviária com São Luís; a estrada é alvo recorrente de obras de recuperação por ser a espinha dorsal logística da região. O deslocamento interno é feito sobretudo por ônibus, mototáxi e veículos próprios, e a cidade dispõe de um pequeno aeroporto regional.',

  corridas: [
    {
      nome: 'Circuito SESC de Corridas',
      descricao:
        'Etapa do circuito de corridas de rua promovido pelo SESC realizada em Pinheiro, com provas de rua que reúnem corredores da cidade e da região da Baixada.',
    },
  ],
  culturaEsportiva:
    'A cultura esportiva pinheirense mistura o futebol e as caminhadas pelas vias urbanas com o uso dos campos e margens de rio nos meses secos, além de provas de corrida de rua que aproximam a população da prática esportiva no maior polo da Baixada Maranhense.',
  academias:
    'A oferta é formada principalmente por academias locais de musculação e treino funcional, distribuídas pelo Centro e pelos bairros residenciais, com porte compatível com uma cidade média que serve de referência para toda a microrregião.',

  destaquesFitness: [
    'Maior cidade da Baixada Maranhense e polo de comércio e serviços da microrregião.',
    'Campos alagáveis, lagos e rio Pericumã que moldam a paisagem e o calendário de atividades ao ar livre.',
    'Clima equatorial quente e úmido, com estação chuvosa que pede planejamento de horário e ambientes cobertos.',
    'Economia ligada à agropecuária (criação de búfalos), à pesca e ao comércio regional, dentro da APA da Baixada Maranhense.',
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
    'Polo de uma região de lagos e campos alagáveis, Pinheiro pede um treino adaptado ao calor úmido e ao ciclo de cheia e seca da Baixada. Um personal trainer ajuda a organizar a rotina escolhendo os melhores horários, alternando entre ambientes cobertos e atividade ao ar livre e mantendo a constância ao longo das duas estações.',

  vizinhas: ['sao-luis-ma', 'santa-ines-ma'],

  fontes: [
    { nome: 'IBGE Cidades — Pinheiro', url: 'https://cidades.ibge.gov.br/brasil/ma/pinheiro/panorama' },
    { nome: 'Prefeitura de Pinheiro', url: 'https://www.pinheiro.ma.gov.br/' },
    { nome: 'Atlas Brasil — IDHM', url: 'https://www.atlasbrasil.org.br/' },
  ],
  atualizadoEm: '2026-06-29',
};
