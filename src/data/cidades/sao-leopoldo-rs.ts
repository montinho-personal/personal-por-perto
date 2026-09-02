import type { Cidade } from '../../lib/types';

export const cidade: Cidade = {
  slug: 'sao-leopoldo-rs',
  nome: 'São Leopoldo',
  uf: 'RS',
  estado: 'Rio Grande do Sul',
  estadoSlug: 'rio-grande-do-sul',
  regiao: 'Sul',
  gentilico: 'leopoldense',
  tipo: 'cidade',

  populacao: 217401,
  populacaoAno: 2022,
  idhm: 0.739,
  idhmClasse: 'alto',
  altitudeM: 15,

  resumoEconomico:
    'Integrante da Região Metropolitana de Porto Alegre, no Vale do Sinos, São Leopoldo é o berço da colonização alemã no RS (a partir de 1824). É forte polo universitário (Unisinos) e tecnológico, com o parque Tecnosinos reunindo dezenas de empresas de TI e automação, além de manter base industrial tradicional de couro e metalmecânica.',

  mercado:
    'Cidade universitária e de classe média consolidada, com público jovem (Unisinos) e demanda por academias, estúdios e treino ao ar livre — perfil favorável a personal trainers atendendo estudantes e profissionais de tecnologia.',

  bairrosNobres: ['Morro do Espelho', 'Padre Réus', 'Rio Branco', 'Jardim América'],
  bairrosPopulares: ['Feitoria', 'Santos Dumont', 'Campina', 'Rio dos Sinos'],

  parques: [
    {
      nome: 'Largo Rui Porto',
      descricao:
        'No centro, tem pista de caminhada, academia ao ar livre, duas quadras poliesportivas, pista de skate e iluminação noturna.',
    },
    {
      nome: 'Parque Natural Municipal Imperatriz Leopoldina',
      descricao:
        'Mais de 600 hectares com trilhas ecológicas de baixa dificuldade; a Av. Imperatriz é usada para corrida e caminhada.',
    },
    {
      nome: 'Orla do Rio dos Sinos',
      descricao:
        'Área de lazer à beira-rio, próxima ao Museu do Rio.',
    },
  ],
  ciclovias:
    'A Av. Imperatriz tem ciclovia com mais de 3 km de extensão.',

  clima:
    'O clima é subtropical, com inverno frio e verão quente e úmido.',
  climaTreino:
    'O treino ao ar livre exige adaptação ao inverno rigoroso e atenção à umidade; nos meses frios há alta procura por ambientes indoor.',

  mobilidade:
    'São Leopoldo é cortada pela BR-116, principal eixo da região metropolitana, ligando a Porto Alegre e ao Vale do Sinos.',

  corridas: [
    {
      nome: 'Circuito Sesc de Corridas — Etapa São Leopoldo',
      descricao:
        'Prova com percursos de 3 km, 5 km e 10 km e caminhada, com largada no Ginásio Municipal.',
    },
    {
      nome: 'Circuito Leopoldense de Corridas de Rua',
      descricao:
        'Circuito local de corrida de rua na cidade.',
    },
  ],
  culturaEsportiva:
    'Há forte tradição de corrida de rua no Vale do Sinos, com calendário ativo, e cultura esportiva ligada ao porte universitário da cidade.',
  academias:
    'A oferta reúne academias e estúdios, com grande público universitário (Unisinos), complementada pelo Largo Rui Porto e pelas trilhas do Parque Imperatriz Leopoldina.',

  destaquesFitness: [
    'Público universitário (Unisinos), que amplia a demanda por treino e estúdios.',
    'Largo Rui Porto como polo de treino funcional e ao ar livre no centro.',
    'Trilhas do Parque Imperatriz Leopoldina para corrida e trail leve.',
    'Calendário de corridas de rua consolidado (Sesc e circuito local).',
  ],

  precos: {
    avulsaMin: 70,
    avulsaMax: 165,
    mensalMin: 350,
    mensalMax: 940,
    onlineMin: 170,
    onlineMax: 440,
  },

  conclusao:
    'Berço da imigração alemã e polo universitário do Vale do Sinos, São Leopoldo une a Unisinos, o Tecnosinos e boa estrutura de parques. Um personal trainer encontra aqui um público jovem e qualificado, equilibrando o outdoor com o indoor do inverno gaúcho.',

  vizinhas: ['novo-hamburgo-rs', 'canoas-rs', 'porto-alegre-rs'],

  capaArte: {
    src: '/capas-cidade/sao-leopoldo-rs.webp',
    w: 1200,
    h: 1200,
    alt: 'Personal trainer em São Leopoldo (RS) em arte com o casario histórico e o skyline da cidade, com o treino em primeiro plano — Personal por Perto',
    legenda: 'Treino personalizado em São Leopoldo: foco, disciplina e constância no berço da colonização alemã no Rio Grande do Sul.',
  },
  fontes: [
    { nome: 'IBGE Cidades — São Leopoldo', url: 'https://cidades.ibge.gov.br/brasil/rs/sao-leopoldo/panorama' },
    { nome: 'Prefeitura de São Leopoldo', url: 'https://www.saoleopoldo.rs.gov.br/' },
    { nome: 'Atlas Brasil — IDHM', url: 'https://www.atlasbrasil.org.br/' },
  ],
  atualizadoEm: '2026-09-01',
};
