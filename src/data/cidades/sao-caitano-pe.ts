import type { Cidade } from '../../lib/types';

export const cidade: Cidade = {
  slug: 'sao-caitano-pe',
  nome: 'São Caitano',
  uf: 'PE',
  estado: 'Pernambuco',
  estadoSlug: 'pernambuco',
  regiao: 'Nordeste',
  gentilico: 'são-caitanense',
  tipo: 'cidade',

  populacao: 37126,
  populacaoAno: 2022,
  idhm: 0.591,
  idhmClasse: 'baixo',
  altitudeM: 552,

  resumoEconomico:
    'No Agreste Central de Pernambuco, entre Caruaru e Belo Jardim, São Caitano (também grafada São Caetano) integra o Polo de Confecções do Agreste Pernambucano, que tem em Caruaru, Toritama e Santa Cruz do Capibaribe suas referências. A cidade vem reforçando essa vocação têxtil com o Portal das Feiras 232, novo centro comercial e logístico voltado à moda e à produção de confecções, com foco especial em moda infantil. Além das confecções, a economia se apoia no comércio, na feira livre semanal e na agropecuária — mandioca e a criação de bovinos, caprinos, ovinos e suínos —, atividades típicas do Agreste semiárido.',

  mercado:
    'O mercado fitness de São Caitano é pequeno e concentrado na sede do município, refletindo o porte de uma cidade de médio-pequeno porte do interior. A procura por personal trainer tende a vir de comerciantes e confeccionistas ligados ao polo têxtil, que buscam treino de curta duração compatível com rotinas de produção e feira, além de moradores interessados em caminhada e trilha na região da Pedra do Cachorro.',

  bairrosNobres: ['Centro'],
  bairrosPopulares: ['Tapiraim', 'Maniçoba', 'Santa Luzia'],

  parques: [
    {
      nome: 'RPPN Pedra do Cachorro',
      descricao:
        'Reserva Particular do Patrimônio Natural com afloramento rochoso de 475 metros de altura em meio à caatinga, reconhecida pela CPRH em 2002; a subida, de trilha longa e exigente, é o principal destino de trekking e esporte de aventura da região.',
    },
    {
      nome: 'Centro histórico de São Caitano',
      descricao:
        'Área central com casarios de fachada eclética do fim do século XIX e início do XX, incluindo a Igreja de São Caetano de Thiene e o Museu Histórico; suas ruas e praças concentram parte da caminhada urbana do dia a dia.',
    },
    {
      nome: 'Cruzeiro de Padre Cícero e Frei Damião',
      descricao:
        'Monumento erguido em 1984 a cerca de 5 km da sede do município, em ponto elevado que também funciona como referência para caminhadas mais longas nos arredores da cidade.',
    },
  ],
  ciclovias:
    'São Caitano não tem malha cicloviária estruturada; a atividade ao ar livre se concentra nas ruas do centro histórico e nas trilhas da zona rural, como o acesso à Pedra do Cachorro.',

  clima:
    'O clima é tropical semiárido, mas a altitude média de 552 metros suaviza a aridez em relação a trechos mais baixos do Agreste e do Sertão pernambucano. O inverno traz mais dias nublados e chuvosos, embora o volume de chuva costume ser modesto, e o calor predomina na maior parte do ano.',
  climaTreino:
    'A combinação de calor semiárido com altitude moderada favorece o treino ao ar livre nos horários de manhã cedo e final de tarde, com hidratação reforçada; em dias mais secos e quentes, ambientes cobertos ou climatizados são a opção mais segura para treinos de maior intensidade.',

  mobilidade:
    'São Caitano fica no ponto final do trecho duplicado da BR-232 vindo de Recife (cerca de 157 km), no entroncamento com a BR-423, que segue rumo a Lajedo e vem sendo duplicada em obra federal autorizada em 2023. A rodovia é o principal eixo de acesso e de escoamento da produção têxtil local; o transporte dentro da cidade é feito majoritariamente a pé, de carro ou moto, dado o porte compacto da sede municipal.',

  corridas: [
    {
      nome: 'Corrida São Caetano',
      descricao:
        'Prova de rua promovida pela Prefeitura Municipal de São Caetano, listada no calendário do Pernambuco Running, com largada na sede do município.',
    },
  ],
  culturaEsportiva:
    'A cultura esportiva local é modesta e gira em torno de caminhadas no centro histórico, da corrida de rua promovida pela prefeitura e do interesse crescente por trekking na Pedra do Cachorro, atrativo que já move visitantes de fora do município em busca de esporte de aventura.',
  academias:
    'A oferta de estrutura para treino é pequena, formada por academias locais de musculação e funcional na sede do município, compatível com o porte de uma cidade média do interior do Agreste.',

  destaquesFitness: [
    'Integrante do Polo de Confecções do Agreste Pernambucano, com o novo Portal das Feiras 232 reforçando a vocação têxtil da cidade.',
    'RPPN Pedra do Cachorro, afloramento rochoso de 475 m que é o principal destino de trekking e esporte de aventura da região.',
    'Clima tropical semiárido suavizado pela altitude de 552 m, que pede treino nos horários mais frescos do dia.',
    'Ponto final do trecho duplicado da BR-232 e entroncamento com a BR-423, eixo logístico que estrutura a mobilidade da cidade.',
  ],

  precos: {
    avulsaMin: 40,
    avulsaMax: 95,
    mensalMin: 200,
    mensalMax: 580,
    onlineMin: 100,
    onlineMax: 310,
  },

  conclusao:
    'Cidade pequena do Agreste Central pernambucano, São Caitano combina rotina ligada ao polo de confecções com um cenário natural de destaque na Pedra do Cachorro. Um personal trainer ajuda a encaixar o treino na rotina de quem trabalha com moda e comércio, aproveitando os horários mais amenos do clima semiárido e as opções de caminhada e trilha da região.',

  vizinhas: ['caruaru-pe', 'belo-jardim-pe', 'santa-cruz-do-capibaribe-pe'],

  fontes: [
    { nome: 'IBGE Cidades — São Caitano', url: 'https://cidades.ibge.gov.br/brasil/pe/sao-caitano/panorama' },
    { nome: 'Prefeitura Municipal de São Caetano', url: 'https://saocaetano.pe.gov.br/' },
    { nome: 'Atlas Brasil — IDHM', url: 'https://www.atlasbrasil.org.br/' },
  ],
  atualizadoEm: '2026-07-03',
};
