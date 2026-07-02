import type { Cidade } from '../../lib/types';

export const cidade: Cidade = {
  slug: 'passa-quatro-mg',
  nome: 'Passa Quatro',
  uf: 'MG',
  estado: 'Minas Gerais',
  estadoSlug: 'minas-gerais',
  regiao: 'Sudeste',
  gentilico: 'passa-quatrense',
  tipo: 'cidade',

  populacao: 15515,
  populacaoAno: 2022,
  idhm: 0.715,
  idhmClasse: 'alto',
  altitudeM: 1017,

  resumoEconomico:
    'No extremo sul de Minas Gerais, na Serra da Mantiqueira, Passa Quatro é reconhecida como Estância Hidromineral e integra o Circuito das Águas Mineiro. A cidade nasceu como entreposto da Estrada de Ferro Minas e Rio, inaugurada em 1884 com viagem de D. Pedro II, e hoje mantém esse legado com o passeio de trem histórico "Maria Fumaça" até o Túnel da Mantiqueira. A economia combina a agropecuária de montanha (pecuária leiteira e pequenas propriedades rurais) com o turismo de natureza — hotéis fazenda, pousadas e o montanhismo em torno do Pico dos Marins e da Pedra da Mina, ponto mais alto do estado de São Paulo e um dos mais altos do Brasil.',

  mercado:
    'O mercado de personal trainers em Passa Quatro é pequeno e concentrado no Centro, moldado por dois públicos: moradores de uma cidade de porte médio-pequeno e o fluxo de turistas de hotéis fazenda e pousadas que vêm para caminhada, trekking e trail. Cresce a procura por preparo físico específico para trilhas de montanha, travessias e provas de trail running, além do treino voltado a quem busca qualidade de vida no clima frio de altitude.',

  bairrosNobres: ['Centro', 'Quilombo', 'São Francisco', 'Pinheirinhos'],
  bairrosPopulares: ['Paiolinho', 'Tronqueiras', 'Fazendinha', 'Nova Copacabana'],

  parques: [
    {
      nome: 'Pico dos Marins',
      descricao:
        'Formação rochosa de mais de 2.400 m na divisa entre Minas Gerais e São Paulo, uma das montanhas mais altas do Brasil. A trilha de acesso, com trechos de escalada leve, leva cerca de 6 a 7 horas e costuma ser feita com acampamento e guia — referência de treino de resistência para montanhistas da região.',
    },
    {
      nome: 'Pedra da Mina e Serra Fina',
      descricao:
        'Com 2.798 m, é o ponto mais alto do estado de São Paulo e um dos picos mais elevados do Brasil, na cadeia da Serra Fina que corta o maciço de Passa Quatro. A travessia Marins–Itaguaré, que passa pela Pedra Redonda, é uma das expedições clássicas do montanhismo nacional.',
    },
    {
      nome: 'Trem da Serra e Túnel da Mantiqueira',
      descricao:
        'Passeio na antiga Estrada de Ferro Minas e Rio (1884), com a locomotiva a vapor "Maria Fumaça", até a estação Coronel Fulgêncio e o Túnel da Mantiqueira — trajeto histórico também usado por caminhantes na região da serra.',
    },
  ],
  ciclovias:
    'A cidade não tem malha cicloviária urbana divulgada; o relevo de serra e as estradas rurais de acesso às fazendas e pousadas favorecem o pedal de estrada e o mountain bike entre moradores e visitantes.',

  clima:
    'O clima é tropical de altitude, com quatro estações bem definidas: inverno seco e frio, com geadas frequentes, e verão ameno e chuvoso. A temperatura mínima média fica perto de 12 °C, podendo cair bem mais nas noites de inverno, enquanto as máximas de verão giram em torno de 28 °C.',
  climaTreino:
    'O frio de altitude, sobretudo entre junho e agosto, pede aquecimento mais longo, roupas em camadas e atenção a neblina nas trilhas; por outro lado, as manhãs frescas favorecem corrida e caminhada o ano todo, sem o calor que limita o treino ao ar livre em cidades de baixada.',

  mobilidade:
    'O acesso principal é pela BR-354, que liga o Sul de Minas ao Rio de Janeiro, com conexão pela MG-158 (Rodovia Cardeal Motta), que passa por Pouso Alto, Itanhandu e Passa Quatro até a divisa com São Paulo, de onde a SP-52 leva a Cruzeiro e à Via Dutra. A cidade fica a cerca de 245 km de São Paulo e 249 km do Rio de Janeiro, com ônibus direto a partir dos terminais das duas capitais; o transporte urbano é limitado, e o Centro concentra a maior parte dos deslocamentos a pé.',

  corridas: [
    {
      nome: 'La Misión Brasil',
      descricao:
        'Prova de montanha com distâncias de 7 km a 110 km na Serra Fina, tendo Passa Quatro como principal ponto de apoio de acesso à região, reunindo corredores e caminhantes de trilha de longa distância.',
    },
    {
      nome: 'Ultra Desafio Passa Quatro',
      descricao:
        'Evento de trail running sediado no município, com percursos em estradas rurais e trilhas de montanha da Serra da Mantiqueira.',
    },
  ],
  culturaEsportiva:
    'A cultura esportiva local gira em torno do montanhismo e do trekking, puxada pelo acesso ao Pico dos Marins e à Pedra da Mina, e reforçada por provas de trail running que usam a Serra Fina como cenário. O clima de altitude também estimula a caminhada e a corrida ao ar livre durante boa parte do ano.',
  academias:
    'A oferta de academias é pequena, concentrada no Centro, com estúdios e espaços de musculação e treino funcional de porte compatível com uma cidade pequena, complementados pela estrutura de lazer de hotéis fazenda e pousadas da região.',

  destaquesFitness: [
    'Pico dos Marins e Pedra da Mina (2.798 m, ponto mais alto de São Paulo) como polos de montanhismo e trekking.',
    'Clima de altitude com inverno frio e geadas, que exige preparo específico para treino ao ar livre.',
    'Calendário de trail running na Serra Fina, com provas como La Misión Brasil e Ultra Desafio Passa Quatro.',
    'Estância Hidromineral do Circuito das Águas, com legado ferroviário e turismo rural em hotéis fazenda.',
  ],

  precos: {
    avulsaMin: 55,
    avulsaMax: 125,
    mensalMin: 270,
    mensalMax: 740,
    onlineMin: 130,
    onlineMax: 370,
  },

  conclusao:
    'Cidade pequena de montanha na Serra da Mantiqueira, Passa Quatro tem no clima frio de altitude e no acesso ao Pico dos Marins e à Pedra da Mina seus maiores diferenciais para quem treina ao ar livre. Um personal trainer ajuda a preparar o condicionamento para trilhas e travessias, adaptar o treino às baixas temperaturas do inverno e manter a constância ao longo das estações.',

  vizinhas: ['itanhandu-mg', 'itajuba-mg'],

  fontes: [
    { nome: 'IBGE Cidades — Passa Quatro', url: 'https://cidades.ibge.gov.br/brasil/mg/passa-quatro/panorama' },
    { nome: 'Prefeitura de Passa Quatro', url: 'https://www.passaquatro.mg.gov.br/' },
    { nome: 'Atlas Brasil — IDHM', url: 'https://www.atlasbrasil.org.br/' },
  ],
  atualizadoEm: '2026-06-29',
};
