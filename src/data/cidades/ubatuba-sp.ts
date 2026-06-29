import type { Cidade } from '../../lib/types';

export const cidade: Cidade = {
  slug: 'ubatuba-sp',
  nome: 'Ubatuba',
  uf: 'SP',
  estado: 'São Paulo',
  estadoSlug: 'sao-paulo',
  regiao: 'Sudeste',
  gentilico: 'ubatubense',
  tipo: 'cidade',

  populacao: 92981,
  populacaoAno: 2022,
  idhm: 0.751,
  idhmClasse: 'alto',
  altitudeM: 5,

  resumoEconomico:
    'No litoral norte paulista, Ubatuba tem economia fortemente apoiada no turismo, com cerca de 100 praias ao longo de uma costa de mais de 100 km e a maior parte do território protegida pela Mata Atlântica e pelo Parque Estadual da Serra do Mar. Conhecida como capital paulista do surfe, a cidade combina turismo de sol e mar, ecoturismo, pesca e cultura caiçara, e abriga a base do Projeto Tamar, primeira instalada em área de alimentação de tartarugas marinhas no litoral brasileiro.',

  mercado:
    'O mercado de personal trainers é puxado pelo turismo e pelo surfe, com forte sazonalidade de verão: a alta temporada multiplica a demanda por treino ao ar livre nas praias, enquanto na baixa o público são os moradores fixos. Praias como Itaguá, Grande, Tenório e Itamambuca viram academias a céu aberto para treino funcional, corrida na areia e preparo para o surfe, e o profissional atende tanto turistas em estadias curtas quanto residentes ao longo do ano.',

  bairrosNobres: ['Itaguá', 'Praia Grande', 'Tenório', 'Itamambuca'],
  bairrosPopulares: ['Perequê-Açu', 'Centro', 'Maranduba', 'Ipiranguinha'],

  parques: [
    {
      nome: 'Orla e ciclovia de Itaguá',
      descricao:
        'Bairro mais frequentado por turistas, com calçadão e ciclovia à beira-mar, usado para corrida, caminhada e pedaladas com vista para o oceano.',
    },
    {
      nome: 'Praia Grande',
      descricao:
        'Extensa faixa de areia entre o Tenório e as Toninhas, ponto de encontro de surfistas e palco de treinos funcionais e corridas na areia.',
    },
    {
      nome: 'Praia de Itamambuca',
      descricao:
        'Reduto clássico do surfe ubatubense, com ondas de qualidade e estuário de águas calmas; sedia etapas de campeonatos de surfe.',
    },
    {
      nome: 'Parque Estadual da Serra do Mar — Núcleo Picinguaba',
      descricao:
        'Trecho de Mata Atlântica preservada no norte do município, com trilhas e praias quase desertas como Brava da Almada, Fazenda e Camburi, voltadas a trail running e caminhadas.',
    },
  ],
  ciclovias:
    'A orla de Itaguá conta com ciclovia à beira-mar bastante usada por moradores e turistas; a cidade também atrai cicloturismo por estradas e trilhas em meio à Mata Atlântica.',

  clima:
    'O clima é tropical úmido, quente e chuvoso, entre a Serra do Mar e o Atlântico, com alta umidade o ano todo e verões muito chuvosos.',
  climaTreino:
    'Dá para treinar ao ar livre o ano inteiro, mas o calor, a umidade e as pancadas de chuva do verão pedem flexibilidade de horário; o outono e o inverno, mais secos, costumam ser os períodos mais confortáveis para corrida e treino na areia.',

  mobilidade:
    'Ubatuba se estende por mais de 100 km de costa ao longo da BR-101 (Rodovia Rio-Santos), entre a Serra do Mar e o oceano, com acesso rodoviário sinuoso pela serra e bairros espalhados do centro até os extremos sul (Maranduba) e norte (Picinguaba).',

  corridas: [
    {
      nome: 'Desafio 28 Praias',
      descricao:
        'Corrida de aventura técnica com percursos de 7, 14, 21 e 42 km que cruzam praias, trilhas, asfalto e travessias de rio, com chegada na Praia Grande; um dos principais eventos esportivos do litoral norte.',
    },
    {
      nome: 'Provas de corrida e mountain bike',
      descricao:
        'Calendário esportivo municipal que reúne corridas de rua, trail running e competições de mountain bike aproveitando o relevo e as praias da cidade.',
    },
  ],
  culturaEsportiva:
    'Reconhecida como capital paulista do surfe, Ubatuba tem forte cultura ligada ao mar, ao esporte ao ar livre e à aventura, com surfe, stand-up paddle, trilhas no Parque Estadual da Serra do Mar e corridas de praia integradas ao cotidiano.',
  academias:
    'A oferta combina academias e estúdios voltados a moradores fixos com uma demanda sazonal de turistas no verão, além de treinos ao ar livre nas praias e escolas de surfe que funcionam como porta de entrada para o preparo físico.',

  destaquesFitness: [
    'Capital paulista do surfe, com preparo físico voltado ao esporte nas praias.',
    'Treino ao ar livre em praias como Itaguá, Grande, Tenório e Itamambuca.',
    'Trilhas e trail running no Parque Estadual da Serra do Mar (Núcleo Picinguaba).',
    'Ciclovia da orla de Itaguá e cicloturismo na Mata Atlântica.',
    'Sazonalidade de verão, com público de turistas na alta e moradores na baixa temporada.',
  ],

  precos: {
    avulsaMin: 60,
    avulsaMax: 150,
    mensalMin: 320,
    mensalMax: 900,
    onlineMin: 150,
    onlineMax: 420,
  },

  conclusao:
    'Capital paulista do surfe, Ubatuba une praias, trilhas de Mata Atlântica e uma rotina de esporte ao ar livre marcada pela sazonalidade de verão. Um personal trainer ajuda turistas e moradores a treinar com método nas areias de Itaguá, Grande, Tenório e Itamambuca e nas trilhas da Serra do Mar, ajustando a carga ao calor úmido do litoral norte.',

  vizinhas: ['caraguatatuba-sp', 'sao-sebastiao-sp', 'ilhabela-sp'],

  fontes: [
    { nome: 'IBGE Cidades — Ubatuba', url: 'https://cidades.ibge.gov.br/brasil/sp/ubatuba/panorama' },
    { nome: 'Prefeitura Municipal de Ubatuba', url: 'https://www.ubatuba.sp.gov.br/' },
    { nome: 'Atlas Brasil — IDHM', url: 'https://www.atlasbrasil.org.br/perfil/municipio/3555406' },
  ],
  atualizadoEm: '2026-06-29',
};
