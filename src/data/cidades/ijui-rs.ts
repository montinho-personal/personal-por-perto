import type { Cidade } from '../../lib/types';

export const cidade: Cidade = {
  slug: 'ijui-rs', nome: 'Ijuí', uf: 'RS', estado: 'Rio Grande do Sul', estadoSlug: 'rio-grande-do-sul', regiao: 'Sul', gentilico: 'ijuiense', tipo: 'cidade',
  populacao: 84726, populacaoAno: 2022, idhm: 0.781, idhmClasse: 'alto', altitudeM: 328,

  resumoEconomico:
    'Localizada no Noroeste gaúcho, Ijuí é conhecida como a "Terra das Culturas Diversificadas", referência à colonização por imigrantes de muitas origens — alemães, italianos, poloneses, suecos, letões, holandeses, entre outros — que deu à cidade um perfil étnico singular. A economia se apoia fortemente no agronegócio e na agroindústria, com destaque para a Cotrijuí, uma das maiores cooperativas do Rio Grande do Sul, além de comércio, serviços e um polo educacional consolidado em torno da Unijuí (Universidade Regional do Noroeste do Estado do Rio Grande do Sul).',

  mercado:
    'Como principal polo de serviços e educação do Noroeste gaúcho, Ijuí concentra uma oferta fitness que atende moradores da cidade e de municípios vizinhos da região. O mercado reúne academias e estúdios no Centro e nos bairros mais estruturados, somados à demanda por atendimento domiciliar entre o público de maior renda ligado ao agronegócio e aos serviços. A forte presença da Unijuí adiciona um público jovem e ativo à demanda local.',

  bairrosNobres: ['Centro', 'São Geraldo', 'Storch', 'Modelo'],
  bairrosPopulares: ['Lulu Ilgenfritz', 'Oswaldo Aranha', 'Lambari', 'Getúlio Vargas'],

  parques: [
    {
      nome: 'Parque da Fonte',
      descricao:
        'Amplo espaço verde de lazer em Ijuí, com áreas para camping, churrasqueiras, campos e estrutura ao ar livre, procurado para caminhada e atividades em meio à natureza.',
    },
    {
      nome: 'Parque da Pedreira',
      descricao:
        'Um dos espaços de lazer mais recentes da cidade, inaugurado em dezembro de 2021, com área aberta usada para caminhada, lazer e atividades ao ar livre.',
    },
  ],
  ciclovias:
    'A cidade conta com trechos de ciclovias e ciclofaixas no perímetro urbano; a extensão total da malha cicloviária não é divulgada em fonte oficial consolidada.',

  clima:
    'O clima é subtropical, típico do Noroeste gaúcho, com verões quentes e invernos frios, marcados por geadas e temperaturas baixas nos meses mais rigorosos.',
  climaTreino:
    'O frio intenso do inverno favorece o treino indoor, enquanto primavera e outono oferecem ótimas condições ao ar livre no Parque da Fonte e no Parque da Pedreira. Um personal trainer ajuda a manter a constância nas estações de temperatura mais extrema.',

  mobilidade:
    'Ijuí situa-se no Noroeste do Rio Grande do Sul, a cerca de 390 a 410 km de Porto Alegre, cortada pela BR-285, que funciona como principal eixo rodoviário da cidade e ponto de apoio de serviços para quem viaja pela região. O deslocamento urbano é feito por ônibus municipais e veículos próprios; não há sistema de trens urbanos.',

  corridas: [
    {
      nome: 'Corrida Paúl da Rosa Mello',
      descricao:
        'Prova mais tradicional do calendário de Ijuí, encerra o ano de corridas na cidade com percurso de 13,2 km entre a Fonte da Ilha e a Praça da República; disputada em formato individual e em revezamento, é organizada pela Prefeitura, pela SMCET e pelo Clube de Corredores de Ijuí, já com mais de vinte edições.',
    },
    {
      nome: 'Corrida/Circuito das Estações',
      descricao:
        'Circuito de corridas de rua com etapas ao longo do ano, com largada no Parque da Pedreira e percurso de 5 km, reunindo corredores locais em cada mudança de estação.',
    },
  ],
  culturaEsportiva:
    'A cultura esportiva ijuiense se apoia em um calendário de corridas de rua consolidado, com destaque para a tradicional Corrida Paúl da Rosa Mello e o Circuito das Estações, além de uma tradição de eventos ao ar livre reforçada pelo perfil universitário da cidade em torno da Unijuí.',
  academias:
    'A oferta reúne academias e estúdios no Centro e nos bairros mais estruturados, além de profissionais que atendem em domicílio. O Parque da Fonte e o Parque da Pedreira funcionam como espaços públicos para treino ao ar livre.',

  destaquesFitness: [
    'Parque da Fonte: amplo espaço verde para caminhada e atividades ao ar livre.',
    'Parque da Pedreira: espaço de lazer recente, inaugurado em 2021.',
    'Público jovem e ativo ligado à Unijuí.',
    'Polo regional do Noroeste gaúcho, com oferta que atende cidades vizinhas.',
  ],

  precos: {
    avulsaMin: 50,
    avulsaMax: 120,
    mensalMin: 270,
    mensalMax: 720,
    onlineMin: 120,
    onlineMax: 360,
  },

  conclusao:
    'Conhecida como a Terra das Culturas Diversificadas, Ijuí une a herança de seus muitos povos imigrantes a uma economia forte no agronegócio e na agroindústria, com a Cotrijuí e a Unijuí como referências regionais. Com o Parque da Fonte e o Parque da Pedreira como cenários ao ar livre, um personal trainer ajuda a manter a constância o ano todo, ajustando o treino ao frio rigoroso do inverno gaúcho.',

  vizinhas: ['santo-angelo-rs', 'cruz-alta-rs', 'santa-rosa-rs'],

  fontes: [
    { nome: 'IBGE Cidades — Ijuí', url: 'https://cidades.ibge.gov.br/brasil/rs/ijui/panorama' },
    { nome: 'Prefeitura de Ijuí', url: 'https://www.ijui.rs.gov.br/' },
    { nome: 'Atlas Brasil — IDHM', url: 'https://www.atlasbrasil.org.br/' },
  ],
  atualizadoEm: '2026-07-03',
};
