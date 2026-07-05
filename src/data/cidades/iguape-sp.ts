import type { Cidade } from '../../lib/types';

export const cidade: Cidade = {
  slug: 'iguape-sp',
  nome: 'Iguape',
  uf: 'SP',
  estado: 'São Paulo',
  estadoSlug: 'sao-paulo',
  regiao: 'Sudeste',
  gentilico: 'iguapense',
  tipo: 'cidade',

  populacao: 29115,
  populacaoAno: 2022,
  idhm: 0.726,
  idhmClasse: 'alto',
  pibPerCapita: 55000,

  resumoEconomico:
    'Iguape é uma das cidades mais antigas do Brasil, fundada em 1538 no litoral sul de São Paulo, no Vale do Ribeira — e o maior município paulista em extensão territorial. O centro histórico, com casario colonial preservado, é tombado como patrimônio nacional pelo IPHAN desde 2009. A economia gira em torno do turismo religioso e de praia, da pesca artesanal e de serviços públicos: a Festa do Senhor Bom Jesus de Iguape reúne cerca de 200 mil romeiros e turistas todos os anos, e o carnaval da cidade é um dos mais concorridos do litoral paulista. A proximidade com as praias de Ilha Comprida, ligada por balsa, reforça o fluxo turístico na alta temporada de verão.',

  mercado:
    'O mercado de personal trainer em Iguape tem forte sazonalidade: a demanda cresce na alta temporada de verão, quando a cidade recebe turistas e veranistas de Ilha Comprida e do litoral sul, e se mantém mais estável fora de época com moradores locais buscando emagrecimento, condicionamento físico e preparo para as caminhadas e trilhas da região. A Orla do Valo Grande, com sua ciclovia, é referência para treino ao ar livre o ano todo.',

  bairrosNobres: ['Centro Histórico'],
  bairrosPopulares: ['Rocio'],

  parques: [
    {
      nome: 'Orla do Valo Grande',
      descricao:
        'Faixa de lazer à beira do canal do Valo Grande, do bairro do Rocio até o antigo porto da balsa, com ciclovia em toda a extensão — o principal espaço da cidade para caminhada, corrida e pedal.',
    },
    {
      nome: 'Circuito Lagamar SP de Cicloturismo',
      descricao:
        'Roteiro cicloturístico de cerca de 180 km que liga Iguape a Ilha Comprida, Pariquera-Açu, Jacupiranga e Cananeia, com passaporte e carimbos para quem completa o percurso — atrai ciclistas de fora da cidade durante o ano todo.',
    },
  ],
  ciclovias:
    'A cidade tem ciclovia ao longo de toda a Orla do Valo Grande e integra o Circuito Lagamar SP de Cicloturismo, que conecta Iguape às cidades vizinhas do Vale do Ribeira e do litoral sul — uma estrutura cicloviária relevante para o porte do município.',

  clima:
    'O clima é tropical úmido de litoral, com verões quentes (24°C a 28°C, com chuvas mais frequentes) e invernos amenos (17°C a 21°C, mais secos) — típico da faixa costeira do Vale do Ribeira e do litoral sul paulista.',
  climaTreino:
    'No verão, o calor e a umidade mais altos pedem treino nos horários mais frescos do dia e reforço de hidratação, especialmente em quem aproveita a orla para caminhada ou corrida. No inverno, o clima ameno favorece o treino ao ar livre durante praticamente todo o dia.',

  mobilidade:
    'O acesso a Iguape se dá pela SP-222 e pela SP-193, que conectam a cidade à Registro e ao eixo do Vale do Ribeira. A travessia de balsa liga o centro histórico às praias de Ilha Comprida, reforçando o fluxo entre as duas cidades na alta temporada.',

  corridas: [],
  culturaEsportiva:
    'A vida esportiva de Iguape está ligada ao calendário de eventos da cidade — a Festa do Senhor Bom Jesus de Iguape e o carnaval movimentam a cidade fisicamente durante dias seguidos —, além do cicloturismo, puxado pelo Circuito Lagamar SP, e da pesca artesanal, atividade tradicional entre os moradores do centro histórico e do Rocio.',
  academias:
    'A oferta de academias e estúdios acompanha o porte médio da cidade, concentrada no centro histórico, com reforço sazonal de procura por parte de turistas e veranistas durante o verão.',

  destaquesFitness: [
    'Iguape é a cidade mais antiga do litoral sul de São Paulo, fundada em 1538, com centro histórico tombado pelo IPHAN.',
    'A Orla do Valo Grande tem ciclovia em toda a extensão, sendo o principal ponto de treino ao ar livre da cidade.',
    'O Circuito Lagamar SP de Cicloturismo liga Iguape a Ilha Comprida, Cananeia e outras cidades do Vale do Ribeira em um percurso de 180 km.',
    'A Festa do Senhor Bom Jesus de Iguape reúne cerca de 200 mil romeiros e turistas por ano, com forte impacto na demanda sazonal por atividade física.',
  ],

  precos: {
    avulsaMin: 60,
    avulsaMax: 140,
    mensalMin: 300,
    mensalMax: 800,
    onlineMin: 140,
    onlineMax: 380,
  },

  conclusao:
    'Entre o casario colonial tombado e as praias de Ilha Comprida a uma travessia de balsa, Iguape combina turismo histórico e de litoral com uma estrutura cicloviária acima da média para seu porte. Um personal trainer ajuda a aproveitar a Orla do Valo Grande e o Circuito Lagamar SP com constância, adaptando o treino à sazonalidade turística e ao clima úmido do litoral sul paulista.',

  vizinhas: ['ilha-comprida-sp', 'cananeia-sp', 'registro-sp'],

  fontes: [
    { nome: 'IBGE Cidades — Iguape', url: 'https://cidades.ibge.gov.br/brasil/sp/iguape' },
    { nome: 'Turismo Paulista — Iguape', url: 'https://www.turismopaulista.tur.br/iguape' },
    { nome: 'Score Cidades — Iguape/SP', url: 'https://scorecidades.com.br/cidade/sp-iguape/' },
  ],
  atualizadoEm: '2026-07-05',
};
