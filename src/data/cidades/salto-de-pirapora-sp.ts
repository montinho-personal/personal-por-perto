import type { Cidade } from '../../lib/types';

export const cidade: Cidade = {
  slug: 'salto-de-pirapora-sp',
  nome: 'Salto de Pirapora',
  uf: 'SP',
  estado: 'São Paulo',
  estadoSlug: 'sao-paulo',
  regiao: 'Sudeste',
  gentilico: 'salto-piraporense',
  tipo: 'cidade',

  populacao: 43748,
  populacaoAno: 2022,
  idhm: 0.729,
  idhmClasse: 'alto',
  altitudeM: 630,

  resumoEconomico:
    'Integrante da Região Metropolitana de Sorocaba, Salto de Pirapora tem origem ligada à mineração e à indústria. O nome vem do salto (cachoeira) sobre o rio Pirapora, afluente da bacia do rio Sorocaba — em tupi, "pirapora" remete ao "salto do peixe", em referência à piracema. Emancipada de Sorocaba em 1954, a cidade cresceu com a extração mineral, sobretudo de calcário e granito, e hoje mantém uma economia de base industrial, com destaque para a produção de cimento e para a fabricação de rações e alimentos para animais, complementada por comércio e serviços puxados pela proximidade com Sorocaba.',

  mercado:
    'O mercado fitness é o de uma cidade de porte médio-pequeno fortemente conectada a Sorocaba, o maior polo de serviços da região metropolitana. Parte dos moradores treina também do lado de Sorocaba, o que amplia as referências de academias e estúdios. Na própria cidade, a oferta se concentra em academias de bairro e treino funcional, e o atendimento domiciliar e em condomínios é um caminho natural para o personal trainer atender quem prefere treinar perto de casa.',

  bairrosNobres: ['Centro', 'Jardim São Lucas', 'Jardim Alvorada', 'Vila Antônio Domingos'],
  bairrosPopulares: ['Jardim Agenor Leme dos Santos', 'Jardim Amélia', 'Campo Largo', 'Jardim Alexandre'],

  parques: [
    {
      nome: 'Salto sobre o rio Pirapora',
      descricao:
        'A cachoeira que dá nome à cidade, sobre o rio Pirapora (bacia do rio Sorocaba), é o marco natural do município e ponto de referência para quem busca caminhada e atividade ao ar livre em contato com a natureza.',
    },
    {
      nome: 'Praças e áreas públicas do Centro',
      descricao:
        'O entorno da Prefeitura e as praças centrais concentram o vaivém de caminhada e corrida no dia a dia, servindo de largada para eventos esportivos municipais.',
    },
    {
      nome: 'Entorno rural e a bacia do rio Sorocaba',
      descricao:
        'Estradas vicinais, o relevo de morros e os cursos d’água da região oferecem percursos para pedal, corrida de rua e trilhas leves fora do núcleo urbano.',
    },
  ],
  ciclovias:
    'A estrutura cicloviária é modesta e concentrada em trechos da área urbana; boa parte do pedal acontece em vias do município e nas estradas vicinais, além do fluxo de ciclistas que se beneficiam da proximidade com Sorocaba, referência regional em mobilidade por bicicleta.',

  clima:
    'O clima é subtropical de altitude, com médias amenas favorecidas pelos cerca de 630 m de altitude: verões quentes e chuvosos e invernos mais secos, com manhãs frias e mínimas que costumam ficar na casa dos 14 °C nos meses de junho e julho.',
  climaTreino:
    'O treino ao ar livre é viável o ano todo. No verão, vale priorizar o começo da manhã e o fim da tarde por causa do calor e das pancadas de chuva; no inverno, as manhãs frias pedem aquecimento reforçado, mas a janela para treinar é ampla e agradável.',

  mobilidade:
    'O principal acesso rodoviário é a Rodovia João Leme dos Santos (SP-264), que liga Salto de Pirapora a Sorocaba, a cerca de 25 a 26 km, e a outras cidades do sudoeste paulista, como Votorantim e Piedade. A capital fica a pouco mais de 100 km pela malha que serve a região metropolitana de Sorocaba. O transporte urbano é feito por ônibus, com linhas intermunicipais conectando a cidade ao polo sorocabano.',

  corridas: [
    {
      nome: 'Corrida do Trabalhador',
      descricao:
        'Prova de rua promovida pela Prefeitura no Dia do Trabalhador (1º de maio), com percurso de 5 km e largada e chegada em frente à Prefeitura, reunindo centenas de inscritos de toda a região.',
    },
    {
      nome: 'Festa do Peão de Salto de Pirapora',
      descricao:
        'Tradicional evento do calendário da cidade que já recebeu etapa do circuito de montaria em touros da PBR, movimentando o público esportivo local.',
    },
  ],
  culturaEsportiva:
    'A cultura esportiva combina o uso das praças e das vias centrais para caminhada e corrida, o pedal pelas estradas vicinais e a forte influência de Sorocaba, vizinha referência em mobilidade ativa e provas de rua. Eventos como a Corrida do Trabalhador reforçam o hábito de correr no município.',
  academias:
    'A oferta é formada principalmente por academias de bairro e espaços de treino funcional, complementados pela ampla rede da conurbação sorocabana, a poucos minutos de carro. As praças e o entorno natural funcionam como extensão para o treino ao ar livre.',

  destaquesFitness: [
    'Cidade da Região Metropolitana de Sorocaba, com oferta fitness integrada ao polo sorocabano, a cerca de 25 km.',
    'O salto (cachoeira) sobre o rio Pirapora, na bacia do rio Sorocaba, é o marco natural e ponto de atividade ao ar livre.',
    'Corrida do Trabalhador, prova de 5 km com largada em frente à Prefeitura no Dia do Trabalhador.',
    'Tradição de mineração (calcário e granito) e indústria (cimento e rações) sustenta o comércio e o atendimento domiciliar.',
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
    'Cidade da Região Metropolitana de Sorocaba, com clima ameno de altitude e o salto sobre o rio Pirapora como cartão-postal, Salto de Pirapora oferece um cenário versátil para treinar. Um personal trainer ajuda a aproveitar tanto as academias da região quanto as praças e o entorno natural, transformando caminhada, corrida e treino em casa em um plano consistente ao longo do ano.',

  vizinhas: ['sorocaba-sp', 'votorantim-sp'],

  fontes: [
    { nome: 'IBGE Cidades — Salto de Pirapora', url: 'https://cidades.ibge.gov.br/brasil/sp/salto-de-pirapora/panorama' },
    { nome: 'Prefeitura de Salto de Pirapora', url: 'https://www.saltodepirapora.sp.gov.br/' },
    { nome: 'Atlas Brasil — IDHM', url: 'https://www.atlasbrasil.org.br/' },
  ],
  atualizadoEm: '2026-06-29',
};
