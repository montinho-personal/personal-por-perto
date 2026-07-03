import type { Cidade } from '../../lib/types';

export const cidade: Cidade = {
  slug: 'getulio-vargas-rs',
  nome: 'Getúlio Vargas',
  uf: 'RS',
  estado: 'Rio Grande do Sul',
  estadoSlug: 'rio-grande-do-sul',
  regiao: 'Sul',
  gentilico: 'getuliense',
  tipo: 'cidade',

  populacao: 16602,
  populacaoAno: 2022,
  idhm: 0.746,
  idhmClasse: 'alto',
  altitudeM: 637,

  resumoEconomico:
    'No Alto Uruguai gaúcho, na microrregião de Erechim, Getúlio Vargas nasceu de uma colônia ligada à antiga Erechim, aberta em 1908 e povoada sobretudo por imigrantes italianos, além de alemães e poloneses. Emancipada em 18 de dezembro de 1934 e batizada em homenagem ao então presidente da República, a cidade tem economia apoiada na agroindústria: a Cotrigo (Cooperativa Tritícola de Getúlio Vargas), fundada em 1957, comercializa soja, milho e trigo produzidos na região, enquanto unidades ligadas à Cooperativa Central Aurora Alimentos e à fabricação de máquinas e equipamentos para a indústria de alimentos e bebidas geram boa parte dos empregos industriais do município.',

  mercado:
    'Em uma cidade pequena e de perfil agroindustrial, o mercado de personal trainers em Getúlio Vargas é enxuto e concentrado no Centro, com academias locais e alguns estúdios de treino funcional. A rotina de turnos das agroindústrias e frigoríficos da região favorece o atendimento em horários alternativos e o treino domiciliar, além da procura por musculação como opção de treino indoor nos meses mais frios.',

  bairrosNobres: ['Centro', 'Champagnat', 'São Pelegrino', 'São José'],
  bairrosPopulares: ['Navegantes', 'Monte Claro', 'XV de Novembro', 'São Cristóvão'],

  parques: [
    {
      nome: 'Parque Municipal das Águas',
      descricao:
        'Área de lazer do município, com kiosques, espaço para churrasco e estrutura para crianças — ponto de encontro de famílias e opção de caminhada ao ar livre fora do Centro.',
    },
    {
      nome: 'Praças e calçadas do Centro',
      descricao:
        'O entorno da área central, onde ficam o comércio e os prédios públicos, concentra as calçadas mais usadas para caminhada no dia a dia da cidade.',
    },
    {
      nome: 'Estradas rurais da zona colonial',
      descricao:
        'Nas linhas coloniais do interior do município, entre lavouras de grãos e propriedades da colonização italiana, as estradas vicinais servem de percurso para quem caminha, corre ou pedala fora da área urbana.',
    },
  ],
  ciclovias:
    'A estrutura cicloviária é modesta, típica de um município pequeno; o deslocamento de bicicleta acontece principalmente pelas ruas do Centro e pelas estradas rurais que ligam a cidade às linhas coloniais.',

  clima:
    'O clima é subtropical, com as quatro estações bem definidas. A altitude de cerca de 637 metros, comum ao planalto do Alto Uruguai, deixa os invernos frios, com geadas frequentes entre junho e agosto, enquanto os verões são quentes.',
  climaTreino:
    'Nas manhãs de inverno, o frio e a geada pedem agasalho e cuidado com o piso escorregadio, o que reforça a procura por musculação e treino indoor; já na primavera e no outono, o clima ameno favorece caminhadas e corridas ao ar livre nas estradas e praças da cidade.',

  mobilidade:
    'Getúlio Vargas é cortada pela BR-153, importante eixo norte-sul, e pela ERS-135, que liga a região a Passo Fundo e a Erechim. O transporte urbano é feito por ônibus, e o porte compacto da cidade favorece deslocamentos curtos a pé ou de bicicleta; o escoamento da produção de grãos e alimentos da agroindústria local depende do transporte rodoviário de cargas.',

  corridas: [
    {
      nome: 'Rústica de Getúlio Vargas',
      descricao:
        'Prova de rua organizada pela Prefeitura com apoio de entidades locais, com percurso de 5 km para adultos e provas infantis de curta distância — o maior evento de corrida do calendário municipal.',
    },
    {
      nome: 'Inspira Eco Run Getúlio Vargas',
      descricao:
        'Evento de corrida e caminhada em trilha, com largada na estrutura do Sesi local, que combina percursos de diferentes distâncias em meio à paisagem rural do município.',
    },
  ],
  culturaEsportiva:
    'A cultura local combina a herança da colonização italiana com a tradição gaúcha do CTG Getúlio Vargas, que promove rodeios e danças tradicionalistas. No campo do esporte e da atividade física, a Rústica de Getúlio Vargas e o Inspira Eco Run mobilizam moradores das linhas coloniais e da área urbana, e a estrutura do Sesi local dá suporte a eventos esportivos.',
  academias:
    'A oferta é formada por academias locais de musculação e treino funcional concentradas no Centro, além de um número menor de estúdios de personal trainer, em escala compatível com um município de porte pequeno.',

  destaquesFitness: [
    'Colonização italiana, alemã e polonesa desde 1908, com forte identidade rural e agroindustrial.',
    'Polo agroindustrial de grãos (Cotrigo) e de alimentos (ligado à Aurora Alimentos), que molda os horários de trabalho e a demanda por treino.',
    'Parque Municipal das Águas e estradas rurais da zona colonial como opções de caminhada, corrida e pedal ao ar livre.',
    'Rústica de Getúlio Vargas e Inspira Eco Run, as principais corridas que mobilizam a comunidade local.',
  ],

  precos: {
    avulsaMin: 45,
    avulsaMax: 110,
    mensalMin: 220,
    mensalMax: 650,
    onlineMin: 110,
    onlineMax: 320,
  },

  conclusao:
    'Cidade pequena do Alto Uruguai gaúcho, de colonização italiana e economia agroindustrial, Getúlio Vargas oferece um mercado fitness enxuto, mas com opções reais de treino no Centro, no Parque Municipal das Águas e nas estradas da zona colonial. Um personal trainer ajuda a organizar a rotina considerando os turnos de trabalho da agroindústria e os invernos frios da região, mantendo a constância ao longo do ano.',

  vizinhas: ['erechim-rs', 'passo-fundo-rs'],

  fontes: [
    { nome: 'IBGE Cidades — Getúlio Vargas', url: 'https://cidades.ibge.gov.br/brasil/rs/getulio-vargas/panorama' },
    { nome: 'Prefeitura de Getúlio Vargas', url: 'https://www.pmgv.rs.gov.br/' },
    { nome: 'Atlas Brasil — IDHM', url: 'https://www.atlasbrasil.org.br/' },
  ],
  atualizadoEm: '2026-07-03',
};
