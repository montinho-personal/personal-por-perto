import type { Cidade } from '../../lib/types';

export const cidade: Cidade = {
  slug: 'estancia-velha-rs',
  nome: 'Estância Velha',
  uf: 'RS',
  estado: 'Rio Grande do Sul',
  estadoSlug: 'rio-grande-do-sul',
  regiao: 'Sul',
  gentilico: 'estanciense',
  tipo: 'cidade',

  populacao: 47924,
  populacaoAno: 2022,
  idhm: 0.757,
  idhmClasse: 'alto',
  altitudeM: 28,

  resumoEconomico:
    'No Vale do Rio dos Sinos e integrante da Região Metropolitana de Porto Alegre, Estância Velha tem origem na colonização alemã iniciada em 1824 e uma economia historicamente ligada ao couro e ao calçado. A partir do fim do século XIX, o curtimento de couro e a produção de artefatos consolidaram a vocação coureiro-calçadista, que ainda hoje marca a indústria local ao lado de setores químico, de componentes para calçados, metalúrgico e moveleiro. A proximidade com Novo Hamburgo e São Leopoldo insere a cidade no maior polo calçadista do país.',

  mercado:
    'Por estar na Região Metropolitana de Porto Alegre e no eixo industrial do Vale do Sinos, Estância Velha convive com um mercado fitness em expansão, apoiado por academias de bairro, estúdios de treino funcional e pela cultura de caminhada e corrida ao ar livre. A procura por personal trainers cresce entre trabalhadores da indústria e famílias que buscam rotina orientada, controle de peso e alívio do estresse do trabalho.',

  bairrosNobres: ['Centro', 'Encosta do Sol', 'Lira', 'Jardim Panorâmico'],
  bairrosPopulares: ['Campo Grande', 'Floresta', 'Rincão', 'Sol Nascente'],

  parques: [
    {
      nome: 'Parque Dário Haupenthal',
      descricao:
        'No bairro Lira, é o principal parque da cidade: reúne áreas verdes, lago, churrasqueiras e espaço infantil, sendo bastante usado por famílias para caminhadas e atividades ao ar livre à beira da lagoa.',
    },
    {
      nome: 'Caminhódromo da Avenida Brasil',
      descricao:
        'Pista de cerca de 800 metros entre as duas faixas da Avenida Brasil, muito utilizada pela população para caminhadas no fim da tarde e no início da manhã.',
    },
    {
      nome: 'Praça 1º de Maio',
      descricao:
        'Considerada o principal ponto de encontro da cidade, é referência de convívio no Centro e ponto de partida para quem circula a pé pela área central.',
    },
  ],
  ciclovias:
    'A estrutura cicloviária é modesta e concentrada em trechos da área urbana; boa parte do pedal e da corrida acontece em vias de bairro, no caminhódromo da Avenida Brasil e no entorno dos parques.',

  clima:
    'O clima é subtropical úmido, típico do Vale do Rio dos Sinos, com as quatro estações bem definidas: verões quentes e úmidos e invernos frios, quando as temperaturas podem cair bastante e ocorrem geadas. As chuvas se distribuem ao longo do ano, sem estação seca marcada.',
  climaTreino:
    'O verão quente e úmido pede treino nas horas mais frescas, cedo ou no fim da tarde, com boa hidratação; no inverno, o frio exige aquecimento cuidadoso e agasalho adequado. A ampla variação entre estações favorece alternar treino ao ar livre nos dias amenos e ambientes cobertos nos extremos de calor ou frio.',

  mobilidade:
    'Estância Velha fica a cerca de 45 km de Porto Alegre e a poucos quilômetros de Novo Hamburgo, com deslocamento apoiado pela RS-239, rodovia que liga Novo Hamburgo a Riozinho passando pela cidade, e pela proximidade com a BR-116. O transporte urbano é feito por ônibus, e a integração ao Vale do Sinos sustenta o fluxo diário de trabalhadores da indústria.',

  corridas: [
    {
      nome: 'Corrida e Caminhada de Estância Velha',
      descricao:
        'Prova de rua promovida no município, com percursos de corrida e caminhada para adultos e categorias infantis, tradicionalmente associada às comemorações cívicas da cidade.',
    },
  ],
  culturaEsportiva:
    'A cultura esportiva combina o uso do caminhódromo da Avenida Brasil e dos parques para caminhada e corrida com a forte tradição alemã da cidade, marcada por festas típicas como as danças de kerb. O convívio ao ar livre nas praças e a rotina ligada à indústria compõem o cenário de atividade física local.',
  academias:
    'A oferta é formada por academias de musculação e estúdios de treino funcional distribuídos pelo Centro e pelos bairros residenciais, com porte compatível com uma cidade da Região Metropolitana de Porto Alegre.',

  destaquesFitness: [
    'Caminhódromo da Avenida Brasil, com cerca de 800 metros, como principal espaço de caminhada urbana.',
    'Parque Dário Haupenthal, com lago e áreas verdes, para atividades ao ar livre em família.',
    'Clima subtropical de quatro estações, que pede adaptar o treino ao calor úmido do verão e ao frio do inverno.',
    'Cidade de colonização alemã e forte tradição coureiro-calçadista no Vale do Rio dos Sinos.',
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
    'Cidade industrial e de tradição alemã no Vale do Rio dos Sinos, Estância Velha oferece parques, caminhódromo e um clima de quatro estações que favorecem a atividade física ao longo do ano. Um personal trainer ajuda a organizar a rotina respeitando o calor úmido do verão e o frio do inverno, aproveitando os espaços ao ar livre e mantendo a constância entre as demandas do trabalho e da vida na região metropolitana.',

  vizinhas: ['novo-hamburgo-rs', 'sao-leopoldo-rs'],

  fontes: [
    { nome: 'IBGE Cidades — Estância Velha', url: 'https://cidades.ibge.gov.br/brasil/rs/estancia-velha/panorama' },
    { nome: 'Prefeitura de Estância Velha', url: 'https://estanciavelha.rs.gov.br/' },
    { nome: 'Atlas Brasil — IDHM', url: 'https://www.atlasbrasil.org.br/' },
  ],
  atualizadoEm: '2026-06-29',
};
