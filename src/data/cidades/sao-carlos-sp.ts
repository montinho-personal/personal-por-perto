import type { Cidade } from '../../lib/types';

export const cidade: Cidade = {
  slug: 'sao-carlos-sp',
  nome: 'São Carlos',
  uf: 'SP',
  estado: 'São Paulo',
  estadoSlug: 'sao-paulo',
  regiao: 'Sudeste',
  gentilico: 'são-carlense',
  tipo: 'cidade',

  populacao: 254857,
  populacaoAno: 2022,
  idhm: 0.805,
  idhmClasse: 'muito alto',
  altitudeM: 856,

  resumoEconomico:
    'Conhecida como a "Capital da Tecnologia", São Carlos sedia dois campi da USP (incluindo a Escola de Engenharia) e a UFSCar, além de duas unidades da Embrapa. Tem forte indústria de base tecnológica — mais de 200 empresas do setor e multinacionais como Volkswagen, Electrolux e Faber-Castell — e o parque tecnológico ParqTec, somando uma das maiores proporções de doutores por habitante do Brasil.',

  mercado:
    'O ambiente universitário da USP e da UFSCar sustenta um público jovem numeroso e uma cultura de atividade física forte, com academias (incluindo grandes redes), estúdios e personal trainers. O perfil de alta escolaridade e renda reforça a procura por treino orientado.',

  bairrosNobres: ['Jardim Botânico', 'Parque Faber', 'Jardim Santa Paula', 'Vila Nery'],
  bairrosPopulares: ['Cidade Aracy', 'Jardim Gonzaga', 'Antenor Garcia', 'Zavaglia'],

  parques: [
    {
      nome: 'Parque do Bicão',
      descricao:
        'Centro de esportes e lazer com mais de 50 mil m²: pista de caminhada e corrida arborizada, academia ao ar livre, três quadras poliesportivas, bicicletário e lago.',
    },
    {
      nome: 'Parque do Kartódromo',
      descricao:
        'Trilha arborizada de cerca de 2 km, pistas de caminhada e corrida, ciclovia, academia ao ar livre (com aparelhos adaptados) e parque infantil.',
    },
    {
      nome: 'Pista da Saúde da UFSCar',
      descricao:
        'Pista arborizada de cerca de 1.600 m, gratuita e aberta ao público dentro do campus, que também conta com pista de atletismo.',
    },
  ],
  ciclovias:
    'A cidade tem cerca de 24 km de ciclovias (dos Estudantes, das Artes e do Comércio), com planos de ampliação; os números variam entre fontes.',

  clima:
    'O clima é tropical de altitude, com inverno seco, mais ameno e fresco que o restante do interior, e média anual em torno de 19,6 °C.',
  climaTreino:
    'As condições são agradáveis para corrida e ciclismo a maior parte do ano, com manhãs e invernos frios e verão sem calor extremo — um cenário muito favorável ao treino ao ar livre.',

  mobilidade:
    'São Carlos é servida pela Rodovia Washington Luís (SP-310), de pista dupla, que liga São Paulo a Rio Claro, Araraquara e São José do Rio Preto; a capital fica a cerca de 234 km.',

  corridas: [
    {
      nome: 'Corrida UNICEP',
      descricao:
        'Prova tradicional do centro universitário UNICEP, com percursos de 5 km, 7,5 km e 15 km.',
    },
    {
      nome: 'Corrida Unimed São Carlos',
      descricao:
        'Realizada no Parque Ecoesportivo Damha, com percursos de 5 km e 10 km.',
    },
  ],
  culturaEsportiva:
    'A tradição esportiva liga-se à ferrovia e aos imigrantes: o São Carlos Clube (1944) é a principal referência social e esportiva, e o São Carlos FC, a "Águia da Central", manda jogos no Estádio Luisão.',
  academias:
    'A oferta reúne grandes redes, estúdios e espaços públicos gratuitos de qualidade (Bicão, Kartódromo e a pista da UFSCar), com público universitário acostumado à atividade física.',

  academiasProximas: [
    { nome: 'Smart Fit São Carlos', detalhe: 'na Av. Francisco Pereira Lopes, no Jardim Bandeirantes' },
    { nome: 'Bluefit São Carlos', detalhe: 'na Av. Comendador Alfredo Mafei, no Jardim São Carlos' },
  ],

  destaquesFitness: [
    'Clima ameno de altitude que favorece o treino ao ar livre o ano todo.',
    'Grande público universitário (USP/UFSCar) com cultura de atividade física.',
    'Espaços públicos gratuitos de qualidade (Bicão, Kartódromo, pista da UFSCar).',
    'Perfil de alta renda e escolaridade (IDHM muito alto).',
  ],

  precos: {
    avulsaMin: 75,
    avulsaMax: 180,
    mensalMin: 380,
    mensalMax: 1000,
    onlineMin: 180,
    onlineMax: 450,
  },

  conclusao:
    'Capital da Tecnologia e cidade universitária, São Carlos tem clima de altitude favorável e ótimos espaços públicos. Um personal trainer ajuda a aproveitar o Parque do Bicão e a pista da UFSCar com método, num ambiente de alta escolaridade e cultura esportiva consolidada.',

  vizinhas: ['araraquara-sp', 'rio-claro-sp'],

  faqsExtra: [
    {
      pergunta: 'Como é treinar numa cidade universitária como São Carlos?',
      resposta:
        'O esporte universitário dá o tom: com USP e UFSCar, a cidade tem atléticas ativas o ano inteiro e a TUSCA — a maior competição universitária multiesportiva do Brasil — como ápice do calendário. Para o personal trainer, isso significa demanda sazonal típica: atletas de atlética buscando preparação específica no semestre e estudantes montando rotina de treino entre aulas e provas.',
    },
    {
      pergunta: 'Onde treinar ao ar livre em São Carlos?',
      resposta:
        'O Parque do Kartódromo e o do Bicão são os pontos clássicos de caminhada e corrida, com o Circuito Cidades Paulistas passando pela cidade no calendário de provas. O clima ameno de altitude — São Carlos fica a mais de 800 metros — é aliado raro no interior paulista: dá para treinar ao ar livre em quase qualquer horário fora do verão.',
    },
    {
      pergunta: 'Quanto custa personal trainer em São Carlos?',
      resposta:
        'O mercado tem duas faixas bem definidas: pacotes acessíveis voltados ao público universitário — treino em dupla e horários de baixa procura — e atendimento premium nos bairros residenciais e condomínios, com valores próximos aos de Araraquara. A consultoria online é forte, puxada pela população jovem e familiarizada com tecnologia.',
    },
  ],
  capaArte: {
    src: '/capas-cidade/sao-carlos-sp.webp',
    w: 1200,
    h: 675,
    alt: 'Personal trainer em São Carlos (SP) em arte com a torre-mirante da cidade, o skyline ao fundo e o treino em primeiro plano — Personal por Perto',
    legenda: 'Treino personalizado em São Carlos: disciplina, constância e evolução com acompanhamento profissional na cidade universitária do interior paulista.',
  },
  fontes: [
    { nome: 'IBGE Cidades — São Carlos', url: 'https://cidades.ibge.gov.br/brasil/sp/sao-carlos/panorama' },
    { nome: 'Prefeitura de São Carlos', url: 'https://www.saocarlos.sp.gov.br/' },
    { nome: 'Atlas Brasil — IDHM', url: 'https://www.atlasbrasil.org.br/' },
  ],
  atualizadoEm: '2026-08-27',
};
