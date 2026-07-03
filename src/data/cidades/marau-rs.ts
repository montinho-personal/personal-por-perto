import type { Cidade } from '../../lib/types';

export const cidade: Cidade = {
  slug: 'marau-rs',
  nome: 'Marau',
  uf: 'RS',
  estado: 'Rio Grande do Sul',
  estadoSlug: 'rio-grande-do-sul',
  regiao: 'Sul',
  gentilico: 'marauense',
  tipo: 'cidade',

  populacao: 45124,
  populacaoAno: 2022,
  idhm: 0.774,
  idhmClasse: 'alto',
  altitudeM: 571,

  resumoEconomico:
    'No Planalto Médio do norte gaúcho, Marau é um dos polos avícolas mais importantes do Brasil: a cidade sedia um grande complexo de abate e industrialização de aves da BRF (sucessora da Perdigão, que instalou a unidade a partir da compra do Grupo Borella em 1985), somado a incubatório, produção de embutidos e curtume. A economia é diversificada por indústria de couro, equipamentos para avicultura e suinocultura, metalmecânica e construção civil, além de liderar a região de Passo Fundo em número de estabelecimentos agropecuários. Segundo a prefeitura e reportagens recentes, a população cresceu cerca de 24% desde 2010, o PIB mais do que dobrou no período e o município teve o maior saldo de geração de empregos do Rio Grande do Sul em 2020, mantendo saldos positivos consistentes nos anos seguintes.',

  mercado:
    'O mercado de personal trainers em Marau acompanha o dinamismo econômico da cidade: uma classe trabalhadora industrial e agroindustrial em expansão, com poder de compra crescente, sustenta academias de musculação, estúdios de treino funcional e pilates, além de profissionais que atendem em domicílio. A procura tende a ser puxada por quem busca constância diante de rotinas de turno na indústria e por quem participa do calendário local de corridas de rua.',

  bairrosNobres: ['Centro', 'Girardi', 'Jardim do Sol', 'Vila Rigo'],
  bairrosPopulares: ['São Cristóvão', 'Santa Rita', 'Vila Fátima', 'Progresso'],

  parques: [
    {
      nome: 'Parque Municipal Lauro Ricieri Bortolon',
      descricao:
        'Principal espaço público da cidade, reúne pista de atletismo, o estádio Carlos Renato Beber, pista de motocross, skate park e área de eventos onde acontecem a Expomarau e o Rodeio Crioulo Internacional. A pista de atletismo é o ponto de largada do Circuito Municipal de Corrida de Rua.',
    },
    {
      nome: 'Praças do Centro',
      descricao:
        'Praças arborizadas na área central concentram o movimento diário de caminhada e encontro ao ar livre, servindo de apoio a quem treina fora de academia no núcleo urbano.',
    },
    {
      nome: 'Estradas do interior rural',
      descricao:
        'Marau lidera a região de Passo Fundo em número de estabelecimentos agropecuários; as estradas vicinais que cortam a zona rural do município são usadas por ciclistas e corredores para treinos mais longos fora do perímetro urbano.',
    },
  ],
  ciclovias:
    'A estrutura cicloviária ainda é pontual, concentrada em trechos de avenidas do centro; parte do pedal mais longo acontece nas estradas vicinais da zona rural, que cortam a paisagem de lavouras e granjas do município.',

  clima:
    'O clima é subtropical (Cfa), com verão longo, quente e úmido, e inverno curto e ameno, mas sujeito a friagens e geadas típicas do Planalto Médio gaúcho. A temperatura costuma variar entre 9 °C e 29 °C ao longo do ano, raramente caindo abaixo de 3 °C ou passando de 32 °C, e a altitude em torno de 570 metros reforça noites mais frescas mesmo no verão.',
  climaTreino:
    'Nos meses quentes, de novembro a março, o treino ao ar livre rende melhor no início da manhã ou no fim da tarde, com atenção à hidratação. No inverno, as manhãs frias e as geadas pedem aquecimento mais cuidadoso e, em dias mais rigorosos, favorecem a migração do treino para academias e estúdios fechados.',

  mobilidade:
    'Marau é cortada pela RS-324, rodovia que liga Nova Prata, na Serra Gaúcha, a Passo Fundo, Casca e Iraí, na divisa com Santa Catarina. Passo Fundo, principal polo regional e entroncamento das BR-285 e BR-386, fica a cerca de 33 km de distância, ligação usada tanto para o escoamento da produção industrial e agropecuária quanto para o deslocamento diário de moradores.',

  corridas: [
    {
      nome: 'Circuito Municipal de Corrida de Rua de Marau',
      descricao:
        'Promovido pela Associação Marauense de Corredores (AMC, fundada em 2007), reúne etapas ao longo do ano com largada na pista de atletismo do Parque Municipal Lauro Ricieri Bortolon; já chegou à 6ª edição e é o principal evento de corrida de rua da cidade.',
    },
  ],
  culturaEsportiva:
    'A cultura esportiva de Marau combina o crescimento da corrida de rua, puxado pela Associação Marauense de Corredores, com o rodeio crioulo e o futebol amador, tradicionais no calendário do Parque Municipal Lauro Ricieri Bortolon. A cidade também é reconhecida por indicadores de limpeza urbana e organização do espaço público, o que favorece o uso das ruas e praças para caminhada e corrida no dia a dia.',
  academias:
    'A oferta de academias e estúdios acompanha o porte industrial da cidade, com musculação, treino funcional e pilates concentrados no Centro e em bairros como Girardi e São Cristóvão, complementados por personal trainers que atendem em domicílio e em espaços parceiros.',

  destaquesFitness: [
    'Um dos maiores polos avícolas do Brasil, com unidade de abate e industrialização da BRF (ex-Perdigão) e forte agroindústria familiar.',
    'Parque Municipal Lauro Ricieri Bortolon, com pista de atletismo e largada do Circuito Municipal de Corrida de Rua.',
    'Cidade em franco crescimento populacional e econômico, liderando a geração de empregos no Rio Grande do Sul em anos recentes.',
    'Clima subtropical de estações bem definidas, com verões longos e invernos curtos marcados por friagens e geadas.',
  ],

  precos: {
    avulsaMin: 50,
    avulsaMax: 110,
    mensalMin: 250,
    mensalMax: 680,
    onlineMin: 110,
    onlineMax: 340,
  },

  conclusao:
    'Polo avícola e industrial em plena expansão no Planalto Médio gaúcho, Marau une uma rotina de trabalho intensa a um clima de estações marcadas, que exige planejamento para treinar bem tanto no calor do verão quanto no frio das geadas de inverno. Um personal trainer ajuda a manter a constância, aproveitando o Parque Lauro Ricieri Bortolon e as praças do Centro nos dias bons e ajustando o treino para ambientes fechados quando o tempo não colabora.',

  vizinhas: ['passo-fundo-rs', 'carazinho-rs'],

  fontes: [
    { nome: 'IBGE Cidades — Marau', url: 'https://cidades.ibge.gov.br/brasil/rs/marau/panorama' },
    { nome: 'Prefeitura de Marau', url: 'https://www.pmmarau.com.br/' },
    { nome: 'Atlas Brasil — IDHM', url: 'https://www.atlasbrasil.org.br/' },
  ],
  atualizadoEm: '2026-07-03',
};
