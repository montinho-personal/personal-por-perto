import type { Cidade } from '../../lib/types';

export const cidade: Cidade = {
  slug: 'sapezal-mt',
  nome: 'Sapezal',
  uf: 'MT',
  estado: 'Mato Grosso',
  estadoSlug: 'mato-grosso',
  regiao: 'Centro-Oeste',
  gentilico: 'sapezalense',
  tipo: 'cidade',

  populacao: 28944,
  populacaoAno: 2022,
  idhm: 0.732,
  idhmClasse: 'alto',
  pibPerCapita: 221470.66,
  pibPerCapitaAno: 2023,
  altitudeM: 370,

  resumoEconomico:
    'Localizada na Chapada dos Parecis, no oeste de Mato Grosso, Sapezal foi emancipada de Campo Novo do Parecis em 1994, a partir de um projeto de colonização do Grupo André Maggi, que batizou o município em referência ao rio Sapezal. A cidade se firmou como um dos motores do agronegócio brasileiro: é o maior produtor nacional de algodão, com forte presença também de soja e milho, e esteve entre os três municípios de maior valor de produção agrícola do país em 2024, com cerca de R$ 5,9 bilhões. O PIB per capita gira em torno de R$ 221 mil (2023), um dos mais altos de Mato Grosso, reflexo da concentração de grandes propriedades e agroindústrias ligadas às lavouras de commodities.',

  mercado:
    'Apesar da população pequena (cerca de 29 mil habitantes no Censo 2022), Sapezal concentra um dos PIBs per capita mais altos de Mato Grosso, sustentado por produtores rurais, executivos do agronegócio e prestadores de serviço ligados a fazendas e agroindústrias da região. Esse poder aquisitivo elevado abre espaço para academias bem equipadas e personal trainers, ainda que o mercado seja mais restrito em número de profissionais do que em cidades maiores — o público tende a valorizar atendimento individualizado, compatível com rotinas exigentes de safra e colheita.',

  bairrosNobres: ['Centro', 'Cidezal I', 'Jardim Sapezal'],
  bairrosPopulares: ['Cidezal II', 'Cidezal III', 'Papagaio'],

  parques: [
    {
      nome: 'Praça Lucia Borges Maggi',
      descricao:
        'Praça arborizada próxima ao centro da cidade, com bancos e sombra — um dos pontos de encontro e caminhada mais usados por moradores.',
    },
    {
      nome: 'Complexo Esportivo do Jardim Sapezal',
      descricao:
        'Espaço esportivo inaugurado pela prefeitura no bairro Jardim Sapezal, reunindo quadras para prática coletiva.',
    },
    {
      nome: 'Praça e Quadra Poliesportiva do Bairro Papagaio',
      descricao:
        'Praça com quadra poliesportiva entregue mais recentemente, parte da expansão de espaços públicos de lazer e esporte pela cidade.',
    },
  ],
  ciclovias:
    'Sapezal não conta com rede cicloviária estruturada; o deslocamento de bicicleta acontece nas ruas e avenidas da cidade, sem faixas exclusivas.',

  clima:
    'O clima é tropical de Cerrado — o bioma cobre mais de 99% do território municipal, na macrorregião de transição entre o Cerrado e a Amazônia que caracteriza o norte de Mato Grosso. A temperatura média anual fica perto de 26 °C, com máximas próximas de 34 °C nos meses mais quentes. As chuvas se concentram entre novembro e março, com pico em dezembro, enquanto maio a agosto é o período seco, de baixa umidade — a média pluviométrica anual gira em torno de 1.439 mm.',
  climaTreino:
    'Na estação seca (maio a agosto), o calor combinado ao ar seco pede hidratação reforçada mesmo em dias de temperatura mais amena; no período chuvoso (novembro a março), as pancadas de fim de tarde tornam os treinos pela manhã mais previsíveis.',

  mobilidade:
    'Sapezal fica na Chapada dos Parecis, a centenas de quilômetros de Cuiabá (a distância rodoviária varia entre cerca de 400 e 500 km, conforme a rota). A BR-364 corta o perímetro urbano — batizada de Avenida André Antonio Maggi na travessia da cidade — e liga o município a Diamantino, Comodoro e, mais adiante, a Porto Velho (RO). O acesso original ao núcleo urbano se deu pela MT-235 (Estrada Nova Fronteira), aberta durante a colonização promovida pelo Grupo André Maggi na década de 1980 e ainda hoje uma das principais vias de escoamento da produção agrícola.',

  corridas: [],
  culturaEsportiva:
    'O esporte em Sapezal ainda gira mais em torno das escolas e de eventos pontuais — como corridas organizadas por escolas municipais e etapas dos Jogos Escolares de Mato Grosso — do que de um calendário consolidado de provas de rua para adultos. A prefeitura tem investido na reforma de quadras poliesportivas e na entrega de novos complexos esportivos e praças, ampliando aos poucos as opções de treino ao ar livre.',
  academias:
    'A oferta de academias é enxuta, proporcional ao tamanho da cidade, mas inclui espaços de treino e personal training voltados a um público de alto poder aquisitivo ligado ao agronegócio. Complementam a estrutura os parquinhos e academias ao ar livre distribuídos pela prefeitura em praças e bairros residenciais.',

  destaquesFitness: [
    'Maior produtor nacional de algodão e um dos três municípios com maior valor de produção agrícola do Brasil em 2024, ao lado da soja e do milho.',
    'PIB per capita entre os mais altos de Mato Grosso (cerca de R$ 221 mil em 2023), sustentando uma clientela de alto poder aquisitivo para serviços fitness.',
    'Cerrado quase puro (mais de 99% do território) na macrorregião de transição para a Amazônia, com seca marcada de maio a agosto e chuvas concentradas de novembro a março.',
    'Cidade jovem, emancipada em 1994 a partir da colonização do Grupo André Maggi, com infraestrutura esportiva pública (complexos e quadras) ainda em expansão.',
  ],

  precos: {
    avulsaMin: 60,
    avulsaMax: 150,
    mensalMin: 300,
    mensalMax: 850,
    onlineMin: 150,
    onlineMax: 400,
  },

  conclusao:
    'Erguida em meio às lavouras de algodão e soja que fazem de Mato Grosso a maior potência agropecuária do país, Sapezal reúne população pequena e renda elevada. Um personal trainer encontra aqui um público exigente e disposto a investir em treino individualizado, desde que o planejamento respeite o calor do Cerrado e a rotina intensa da safra.',

  vizinhas: ['tangara-da-serra-mt', 'diamantino-mt', 'caceres-mt'],

  fontes: [
    { nome: 'IBGE Cidades — Sapezal', url: 'https://cidades.ibge.gov.br/brasil/mt/sapezal/panorama' },
    { nome: 'Prefeitura de Sapezal', url: 'https://www.sapezal.mt.gov.br/' },
    { nome: 'Atlas Brasil — IDHM', url: 'https://www.atlasbrasil.org.br/' },
  ],
  atualizadoEm: '2026-07-03',
};
