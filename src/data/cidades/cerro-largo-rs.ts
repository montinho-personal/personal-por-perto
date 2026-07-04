import type { Cidade } from '../../lib/types';

export const cidade: Cidade = {
  slug: 'cerro-largo-rs',
  nome: 'Cerro Largo',
  uf: 'RS',
  estado: 'Rio Grande do Sul',
  estadoSlug: 'rio-grande-do-sul',
  regiao: 'Sul',
  gentilico: 'cerro-larguense',
  tipo: 'cidade',

  populacao: 13705,
  populacaoAno: 2022,
  idhm: 0.764,
  idhmClasse: 'alto',
  altitudeM: 211,

  resumoEconomico:
    'No Noroeste gaúcho, próxima da fronteira com a Argentina, Cerro Largo nasceu como colônia de imigrantes alemães vindos sobretudo da região de Montenegro, oficialmente assentada em 4 de outubro de 1902 entre os rios Ijuí e Comandaí, sob a colonizadora Bauerverein e a liderança do padre jesuíta Maximiliano von Lassberg. Distrito de São Luiz Gonzaga até virar vila em 1915, o município ganhou o nome atual em 1944. A economia combina agricultura de soja, trigo e milho, suinocultura e bovinocultura de leite na zona rural com um comércio e setor de serviços fortes, que fazem da cidade referência da sua microrregião. A instalação de um campus da UFFS (Universidade Federal da Fronteira Sul) em 2010 trouxe cursos de graduação e pós-graduação, reforçando o papel de Cerro Largo como polo regional de educação, saúde e comércio para os municípios vizinhos das Missões e da Fronteira Noroeste.',

  mercado:
    'Em uma cidade média que concentra comércio e serviços para os municípios vizinhos, o mercado de personal trainers em Cerro Largo é enxuto, apoiado em academias locais de musculação e treino funcional e em profissionais autônomos. A presença do campus da UFFS atrai um público jovem e universitário, o que também sustenta parte da procura por treino em horários alternativos, como fim de tarde e início da noite.',

  bairrosNobres: ['Centro', 'São Pedro'],
  bairrosPopulares: ['Vila Industrial'],

  parques: [
    {
      nome: 'Praça da Matriz',
      descricao:
        'Cartão-postal da cidade, com cerca de 22,5 mil m² de área ajardinada — ipês, azaleias, ciprestes podados, jacarandás e flores perenes —, além de playground e monumentos; é o principal ponto de encontro e caminhada no Centro.',
    },
    {
      nome: 'Parque Municipal de Exposições Elemar Kuhn',
      descricao:
        'Sede da Expocel e de eventos do município, o parque recebeu um espaço específico para corredores e caminhantes, tornando-se opção de treino ao ar livre fora do horário de feiras e exposições.',
    },
  ],
  ciclovias:
    'A estrutura cicloviária é pontual, típica de um município de porte pequeno; a maior parte da caminhada e da corrida acontece nas ruas do Centro, na Praça da Matriz e no espaço para treino do Parque Municipal de Exposições.',

  clima:
    'O clima é subtropical úmido (Cfa), com verões quentes — a temperatura pode ultrapassar os 30 °C — e invernos frios, com mínimas próximas de 0 °C e geadas ocasionais. As chuvas se distribuem ao longo do ano, sem estação seca definida.',
  climaTreino:
    'Nas manhãs frias de inverno, o ideal é agasalhar-se bem e priorizar ambientes fechados ou horários mais quentes do dia; já no verão, o treino ao ar livre rende mais cedo pela manhã ou no fim da tarde, evitando o calor e o sol forte do meio-dia.',

  mobilidade:
    'O acesso rodoviário a Cerro Largo é feito por rodovias estaduais, como a ERS-165, que liga o município a Cândido Godói e à ERS-307, e a via de acesso VRS-839; a cidade também se conecta a Santa Rosa e Santo Ângelo, polos regionais próximos com ligação à malha rodoviária estadual mais ampla. O transporte urbano é limitado, comum a um município deste porte, e a rodoviária local liga Cerro Largo a outras cidades da região das Missões e da Fronteira Noroeste.',

  corridas: [],
  culturaEsportiva:
    'A vida esportiva da cidade gira em torno do Parque Municipal de Exposições Elemar Kuhn, que reúne desde a Expocel até o espaço reservado para corredores e caminhantes, e da Praça da Matriz, ponto tradicional de caminhada no Centro. A presença do campus da UFFS soma um público universitário à rotina esportiva local, ainda que sem um calendário próprio de provas de rua consolidado.',
  academias:
    'A oferta é formada por academias locais de musculação e treino funcional no Centro, além de profissionais autônomos de personal trainer — em escala compatível com um município de porte pequeno e polo comercial da sua microrregião.',

  destaquesFitness: [
    'Colônia de imigração alemã fundada em 1902 entre os rios Ijuí e Comandaí, hoje polo comercial e de serviços da sua microrregião no Noroeste gaúcho.',
    'Campus da UFFS (Universidade Federal da Fronteira Sul), que atrai população jovem e universitária para a cidade.',
    'Praça da Matriz, com cerca de 22,5 mil m² ajardinados, como principal espaço de caminhada no Centro.',
    'Espaço para corredores e caminhantes criado no Parque Municipal de Exposições Elemar Kuhn.',
  ],

  precos: {
    avulsaMin: 50,
    avulsaMax: 110,
    mensalMin: 220,
    mensalMax: 650,
    onlineMin: 110,
    onlineMax: 320,
  },

  conclusao:
    'Polo comercial de porte pequeno no Noroeste gaúcho, Cerro Largo tem no Centro e no Parque Municipal de Exposições Elemar Kuhn seus principais espaços para caminhada e treino ao ar livre, além de uma oferta enxuta de academias reforçada pelo público universitário da UFFS. Um personal trainer ajuda a organizar a rotina de treino considerando os invernos frios e os verões quentes da região, mantendo a constância ao longo do ano.',

  vizinhas: ['santa-rosa-rs', 'santo-angelo-rs', 'horizontina-rs'],

  fontes: [
    { nome: 'IBGE Cidades — Cerro Largo', url: 'https://cidades.ibge.gov.br/brasil/rs/cerro-largo/panorama' },
    { nome: 'Prefeitura de Cerro Largo', url: 'https://www.cerrolargo.rs.gov.br/' },
    { nome: 'Atlas Brasil — IDHM', url: 'https://www.atlasbrasil.org.br/' },
  ],
  atualizadoEm: '2026-07-03',
};
