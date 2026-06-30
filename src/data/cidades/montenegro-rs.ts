import type { Cidade } from '../../lib/types';

export const cidade: Cidade = {
  slug: 'montenegro-rs',
  nome: 'Montenegro',
  uf: 'RS',
  estado: 'Rio Grande do Sul',
  estadoSlug: 'rio-grande-do-sul',
  regiao: 'Sul',
  gentilico: 'montenegrino',
  tipo: 'cidade',

  populacao: 64322,
  populacaoAno: 2022,
  idhm: 0.755,
  idhmClasse: 'alto',
  altitudeM: 31,

  resumoEconomico:
    'Maior município do Vale do Caí, às margens do rio Caí, Montenegro combina uma base industrial forte (a indústria responde por mais da metade do valor adicionado do município, com destaque para abate de aves, máquinas e equipamentos agrícolas e o setor químico) com a tradicional citricultura, sobretudo a produção de tangerina. Integra a Região Metropolitana de Porto Alegre e tem na BR-386 seu principal eixo logístico.',

  mercado:
    'Cidade média de renda relevante e bom nível de desenvolvimento, Montenegro reúne academias de bairro, redes regionais e estúdios de treinamento, além de equipamentos públicos de lazer ativo. A nova orla do rio Caí e o Parque Centenário ampliam as opções de treino ao ar livre, criando demanda por acompanhamento personalizado.',

  bairrosNobres: ['Centro', 'Centenário', 'Timbaúva', 'Panorama'],
  bairrosPopulares: ['Fião', 'Cascata', 'São Manoel', 'Santa Rita'],

  parques: [
    {
      nome: 'Parque Centenário Municipal Erni Carlos Heller',
      descricao:
        'Principal área verde da cidade, com pista de caminhada e corrida, academia ao ar livre, ginásio, lago e ampla área gramada para atividades físicas.',
    },
    {
      nome: 'Orla do Rio Caí',
      descricao:
        'Calçadão à beira do rio Caí com trecho de cerca de 2,5 km, usado para caminhada, corrida e ciclismo, integrando o centro à paisagem fluvial.',
    },
    {
      nome: 'Cais do Porto',
      descricao:
        'Espaço de lazer junto ao rio Caí, ponto tradicional de encontro e de circulação a pé na cidade.',
    },
  ],
  ciclovias:
    'Há ciclofaixas urbanas e o calçadão da orla do rio Caí, usado também por ciclistas; a extensão total da malha cicloviária ainda não é divulgada em fonte oficial.',

  clima:
    'O clima é subtropical úmido, típico do vale do Caí, com verões quentes e invernos frios e úmidos, em que as mínimas podem se aproximar de zero.',
  climaTreino:
    'O frio e a umidade do inverno favorecem o treino indoor; no verão quente do vale, vale priorizar o início da manhã ou o fim da tarde, com boa hidratação.',

  mobilidade:
    'Montenegro é cortada pela BR-386 (Rodovia da Produção), principal acesso rodoviário e eixo industrial da região, ligando a cidade a Porto Alegre, a cerca de 60 km, e ao interior do estado. O trânsito urbano é típico de cidade média, o que facilita o deslocamento entre bairros para o treino.',

  corridas: [
    {
      nome: 'Tanac Day Run',
      descricao:
        'Corrida de rua promovida na cidade, com percursos de 3 km e 7,8 km, reunindo corredores da região do Vale do Caí.',
    },
    {
      nome: 'Provas do calendário regional do Vale do Caí',
      descricao:
        'Montenegro recebe etapas e corridas de rua ao longo do ano, parte do movimento crescente do running na região metropolitana.',
    },
  ],
  culturaEsportiva:
    'Conhecida como "Cidade das Artes" pela atuação da Fundarte (Fundação Municipal de Artes), Montenegro alia forte vida cultural a uma cena esportiva apoiada em parques, na orla do rio Caí e em academias de bairro, com a corrida de rua em expansão.',
  academias:
    'A oferta reúne academias de bairro, redes regionais e estúdios de treinamento personalizado, complementados pela academia ao ar livre do Parque Centenário e pelos espaços de treino na orla do rio Caí.',

  destaquesFitness: [
    'Parque Centenário: pista de corrida e academia ao ar livre de referência na cidade.',
    'Orla do rio Caí: calçadão para caminhada, corrida e ciclismo à beira do rio.',
    'Cais do Porto: espaço de lazer ativo junto ao rio.',
    'Calendário regional de corridas de rua no Vale do Caí.',
  ],

  precos: {
    avulsaMin: 50,
    avulsaMax: 115,
    mensalMin: 250,
    mensalMax: 700,
    onlineMin: 115,
    onlineMax: 350,
  },

  conclusao:
    'Polo industrial e cultural do Vale do Caí, Montenegro tem na orla do rio Caí e no Parque Centenário ótimos cenários para o treino ao ar livre. Um personal trainer ajuda a aproveitar esses espaços com método, alternando o treino externo com a academia nos meses frios e úmidos do inverno gaúcho.',

  vizinhas: ['novo-hamburgo-rs', 'sao-leopoldo-rs', 'canoas-rs'],

  fontes: [
    { nome: 'IBGE Cidades — Montenegro', url: 'https://cidades.ibge.gov.br/brasil/rs/montenegro/panorama' },
    { nome: 'Prefeitura de Montenegro', url: 'https://www.montenegro.rs.gov.br/' },
    { nome: 'Atlas Brasil — IDHM', url: 'https://www.atlasbrasil.org.br/' },
  ],
  atualizadoEm: '2026-06-29',
};
