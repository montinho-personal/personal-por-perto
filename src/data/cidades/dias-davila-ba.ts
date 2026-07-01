import type { Cidade } from '../../lib/types';

export const cidade: Cidade = {
  slug: 'dias-davila-ba',
  nome: "Dias d'Ávila",
  uf: 'BA',
  estado: 'Bahia',
  estadoSlug: 'bahia',
  regiao: 'Nordeste',
  gentilico: 'diasdavilense',
  tipo: 'cidade',

  populacao: 71485,
  populacaoAno: 2022,
  idhm: 0.678,
  idhmClasse: 'médio',
  altitudeM: 40,

  resumoEconomico:
    "Na Região Metropolitana de Salvador, Dias d'Ávila é conhecida como a Cidade das Águas por abrigar a maior produção de água mineral da Bahia, tradição que remonta às fontes do rio Imbassaí e ao período em que o distrito era procurado como estância hidromineral. Parte do território da cidade integra o Polo Industrial de Camaçari, o maior complexo industrial do estado, com indústrias química, petroquímica, automotiva e de bebidas — setor que concentra grande parte da arrecadação do município. A economia se completa com o engarrafamento de água mineral, o comércio local e a proximidade com Salvador.",

  mercado:
    "Ligada ao eixo industrial de Camaçari e à Região Metropolitana de Salvador, Dias d'Ávila tem um mercado fitness em formação, apoiado no fluxo de trabalhadores do polo e no crescimento residencial. A procura por personal trainers tende a vir de quem busca treino orientado para conciliar com jornadas industriais e de comércio, além de quem quer aproveitar o clima litorâneo quente para atividade ao ar livre.",

  bairrosNobres: ['Centro', 'Jardim Futurama', 'Santa Helena', 'Alto da Bela Vista'],
  bairrosPopulares: ['Emboacica', 'Biriberia', 'Nova Dias d\'Ávila', 'Lírio da Manhã'],

  parques: [
    {
      nome: 'Praça do Imbassay',
      descricao:
        'Espaço central de convivência da cidade, ponto de largada de eventos esportivos locais e usado para caminhada, encontros de grupos de corrida e atividade ao ar livre no fim do dia.',
    },
    {
      nome: 'Entorno do rio Imbassaí e das fontes de água mineral',
      descricao:
        'A região das fontes que deram fama à Cidade das Águas guarda áreas verdes e de mata associadas ao rio Imbassaí, que compõem o cenário de caminhadas e passeios na cidade.',
    },
    {
      nome: 'Balneário Sol Nascente (Nova Dias d\'Ávila)',
      descricao:
        'Área de lazer e balneário que serve de ponto de largada para provas de corrida da cidade, com percursos usados por corredores da região.',
    },
  ],
  ciclovias:
    'A malha cicloviária é limitada e concentrada em trechos da área urbana; boa parte do pedal e da corrida acontece nas vias dos bairros e nas conexões viárias que cortam o município.',

  clima:
    'O clima é tropical litorâneo, quente e úmido ao longo do ano, típico da faixa costeira da Região Metropolitana de Salvador. As temperaturas são altas com pouca variação entre as estações, e o período mais chuvoso se concentra do outono ao início do inverno (por volta de abril a julho), com forte influência da umidade vinda do oceano.',
  climaTreino:
    'O calor e a umidade elevados pedem treino no começo da manhã ou no fim da tarde, com hidratação reforçada e roupas leves; nos horários de sol forte, ambientes climatizados são a opção mais confortável, e a brisa litorânea ajuda nos treinos ao ar livre no fim do dia.',

  mobilidade:
    "Dias d'Ávila é cortada pela BA-093, a rodovia que estrutura o corredor industrial e liga a cidade a Camaçari, Simões Filho e Candeias, e se conecta ao restante da Região Metropolitana e a Salvador pela BR-324. O transporte é feito principalmente por ônibus metropolitanos e municipais, com forte movimento pendular de trabalhadores em direção ao Polo Industrial de Camaçari.",

  corridas: [
    {
      nome: "D'Ávila Night Run",
      descricao:
        "Corrida noturna promovida pela prefeitura, com largada e chegada na Praça do Imbassay e percursos de caminhada e corrida, integrada às comemorações de aniversário do município.",
    },
    {
      nome: 'Circuito Esportivo da Independência',
      descricao:
        'Programação esportiva organizada pela prefeitura em torno das comemorações da Independência, reunindo atividades e provas para a comunidade.',
    },
  ],
  culturaEsportiva:
    'A cultura esportiva mistura os eventos de corrida promovidos pela prefeitura, o uso da Praça do Imbassay e dos balneários como espaço de atividade, e a identidade da Cidade das Águas, com o rio Imbassaí e as fontes como pano de fundo — tudo sob o calor litorâneo característico da região.',
  academias:
    'A oferta é formada por academias locais de musculação e treino funcional, distribuídas pelos bairros centrais e residenciais, com porte compatível com uma cidade da Região Metropolitana ligada ao polo industrial.',

  destaquesFitness: [
    'Cidade das Águas: maior produção de água mineral da Bahia, ligada às fontes do rio Imbassaí.',
    'Integração ao Polo Industrial de Camaçari, o maior complexo industrial do estado, com forte movimento de trabalhadores.',
    'Clima litorâneo quente e úmido, que exige planejamento de horário e hidratação no treino.',
    'Eventos de corrida promovidos pela prefeitura, como a D\'Ávila Night Run, com largada na Praça do Imbassay.',
  ],

  precos: {
    avulsaMin: 45,
    avulsaMax: 110,
    mensalMin: 240,
    mensalMax: 660,
    onlineMin: 110,
    onlineMax: 340,
  },

  conclusao:
    "Cidade litorânea, industrial e marcada pela tradição das águas minerais, Dias d'Ávila pede um treino adaptado ao calor úmido e à rotina de quem vive perto do Polo Industrial de Camaçari. Um personal trainer ajuda a organizar os horários, aproveitar os espaços ao ar livre da cidade e manter a constância ao longo do ano.",

  vizinhas: ['camacari-ba', 'simoes-filho-ba', 'lauro-de-freitas-ba'],

  fontes: [
    { nome: "IBGE Cidades — Dias d'Ávila", url: 'https://cidades.ibge.gov.br/brasil/ba/dias-davila/panorama' },
    { nome: "Prefeitura de Dias d'Ávila", url: 'https://diasdavila.ba.gov.br/' },
    { nome: 'Atlas Brasil — IDHM', url: 'https://www.atlasbrasil.org.br/' },
  ],
  atualizadoEm: '2026-06-29',
};
