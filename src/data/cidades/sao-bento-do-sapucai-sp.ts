import type { Cidade } from '../../lib/types';

export const cidade: Cidade = {
  slug: 'sao-bento-do-sapucai-sp',
  nome: 'São Bento do Sapucaí',
  uf: 'SP',
  estado: 'São Paulo',
  estadoSlug: 'sao-paulo',
  regiao: 'Sudeste',
  gentilico: 'sambentista',
  tipo: 'cidade',

  populacao: 11674,
  populacaoAno: 2022,
  idhm: 0.720,
  idhmClasse: 'alto',
  pibPerCapita: 30390,
  pibPerCapitaAno: 2023,
  altitudeM: 886,

  resumoEconomico:
    'Estância Climática na Serra da Mantiqueira, na divisa com Minas Gerais, São Bento do Sapucaí é conhecida sobretudo pela Pedra do Baú, complexo rochoso que atrai escaladores, praticantes de trekking e de voo livre de todo o país. A economia combina o turismo de montanha e de aventura — pousadas rurais, restaurantes de cozinha serrana e agências que operam trilhas, rapel e via ferrata — com uma agricultura familiar voltada a morango, hortaliças, banana e produtos orgânicos cultivados nas encostas da serra, além de vinícolas que integram a Rota dos Vinhos da Mantiqueira. O município, com pouco mais de 11 mil habitantes, também vem se firmando como destino de segunda residência para quem busca clima ameno perto da capital.',

  mercado:
    'O mercado de personal trainer em São Bento do Sapucaí é pequeno e concentrado no Centro, mas tem uma característica particular: parte da demanda vem de visitantes e hóspedes de pousadas que buscam preparo físico específico para escalada, trekking e via ferrata na Pedra do Baú, além de condicionamento para os percursos de trail running que a cidade recebe. Entre os moradores fixos, a procura segue o padrão de uma cidade pequena de interior, voltada a treino funcional e musculação nas academias locais.',

  bairrosNobres: ['Centro', 'Vila Baú', 'Quilombo', 'Paiol Grande'],
  bairrosPopulares: ['Cantagalo', 'Monjolinho', 'Barra Funda', 'Serrano'],

  parques: [
    {
      nome: 'Monumento Natural Estadual Pedra do Baú (MoNa)',
      descricao:
        'Unidade de conservação criada em 2010, com 3.154 hectares, que abrange as formações rochosas do Baú (1.950 m), Bauzinho (1.760 m) e Ana Chata. Reúne mais de 200 vias de escalada e a famosa via ferrata de cerca de 600 degraus de ferro até o topo, além de trilhas de trekking de diferentes níveis, com gestão compartilhada entre o município e a Fundação Florestal.',
    },
    {
      nome: 'Cachoeira dos Amores',
      descricao:
        'Uma das cachoeiras mais conhecidas do município, com trilha sinalizada e acessível sem guia, junto de outras quedas d\'água próximas como a Cachoeira do Encontro — pontos usados por moradores e visitantes para caminhada em meio à Mata Atlântica de altitude.',
    },
    {
      nome: 'Vale do Baú e Rota dos Vinhos da Mantiqueira',
      descricao:
        'Região rural de estradas de terra e paisagem de montanha que concentra vinícolas, pousadas e sítios de agricultura orgânica; as subidas e descidas do vale são usadas por ciclistas e caminhantes como extensão natural do treino ao ar livre.',
    },
  ],
  ciclovias:
    'A cidade não tem malha cicloviária urbana relevante; o ciclismo local é feito nas estradas de terra e asfalto do Vale do Baú e da zona rural, com subidas técnicas típicas de região de serra.',

  clima:
    'O clima é subtropical de altitude — o título de Estância Climática reflete temperaturas amenas o ano todo, com verões frescos (máximas em torno de 25 °C, mais chuvosos) e invernos secos com mínimas próximas de 10 °C, podendo cair mais durante madrugadas de geada. O inverno seco é considerado a alta temporada para escalada e observação do céu.',
  climaTreino:
    'O frio das manhãs de inverno pede aquecimento mais longo e roupas em camadas, enquanto a altitude torna o esforço cardiorrespiratório mais exigente para quem não está adaptado; no verão, as chuvas frequentes podem atrapalhar o treino ao ar livre e favorecer atividades em ambientes cobertos.',

  mobilidade:
    'O acesso mais comum é pela Rodovia Presidente Dutra (BR-116) até a região de Taubaté e São José dos Campos, seguindo pela SP-123 (Rodovia Floriano Rodrigues Pinheiro) em direção a Campos do Jordão, ou pela SP-050 (Rodovia Monteiro Lobato), que sobe a serra até o município; a estrada de acesso local SPA-162/050 (João Batista Furquim) passou por obras recentes de pavimentação. Dentro da cidade, o deslocamento é feito majoritariamente por carro, sem estrutura ferroviária ou aeroportuária.',

  corridas: [
    {
      nome: 'Indomit Pedra do Baú',
      descricao:
        'Prova de ultra trail que percorre as trilhas da Pedra do Baú, com distâncias que já incluíram cerca de 53 km e 80 km e forte desnível; considerada uma das etapas de destaque do circuito nacional de trail running.',
    },
    {
      nome: 'Desafio das Serras Ultramaratona',
      descricao:
        'Prova de corrida de montanha disputada em dois dias, com percursos de 40 km e 80 km divididos em etapas, incluindo pernoite em acampamento na região da Pedra do Baú.',
    },
  ],
  culturaEsportiva:
    'São Bento do Sapucaí é referência em esportes de montanha: escalada e via ferrata na Pedra do Baú, trekking até cachoeiras e mirantes, voo livre (parapente e asa delta) em rampas como a da Quinta dos Cogumelos, mountain bike nas estradas rurais e um calendário de provas de trail running que atrai atletas de fora do município.',
  academias:
    'A oferta é pequena, formada por academias locais de musculação e treino funcional no Centro, complementada pela estrutura de agências e guias de esportes de aventura que oferecem preparo físico e acompanhamento para escalada, trekking e via ferrata.',

  destaquesFitness: [
    'Sede do Monumento Natural Estadual Pedra do Baú, com mais de 200 vias de escalada e via ferrata de cerca de 600 degraus até o topo, a 1.950 m de altitude.',
    'Uma das rampas de voo livre (parapente e asa delta) mais procuradas do estado de São Paulo, na Quinta dos Cogumelos.',
    'Sedia provas de trail running reconhecidas nacionalmente, como o Indomit Pedra do Baú e o Desafio das Serras Ultramaratona.',
    'Estância Climática de altitude (886 m), com clima ameno o ano todo e economia apoiada em turismo rural, agricultura orgânica e pousadas.',
  ],

  precos: {
    avulsaMin: 70,
    avulsaMax: 160,
    mensalMin: 300,
    mensalMax: 900,
    onlineMin: 150,
    onlineMax: 400,
  },

  conclusao:
    'Cidade pequena e de altitude, moldada pela Pedra do Baú e pela vocação para esportes de montanha, São Bento do Sapucaí pede um preparo físico específico para quem encara escalada, trekking e via ferrata, além de um treino adaptado ao frio das manhãs e às chuvas de verão. Um personal trainer ajuda a organizar essa preparação, seja para o morador fixo, seja para o visitante que passa uma temporada na cidade em busca de aventura na serra.',

  vizinhas: ['campos-do-jordao-sp', 'pindamonhangaba-sp', 'taubate-sp'],

  fontes: [
    { nome: 'IBGE Cidades — São Bento do Sapucaí', url: 'https://cidades.ibge.gov.br/brasil/sp/sao-bento-do-sapucai/panorama' },
    { nome: 'Prefeitura de São Bento do Sapucaí', url: 'https://saobentodosapucai.sp.gov.br/' },
    { nome: 'Atlas Brasil — IDHM', url: 'https://www.atlasbrasil.org.br/' },
  ],
  atualizadoEm: '2026-07-02',
};
