import type { Cidade } from '../../lib/types';

export const cidade: Cidade = {
  slug: 'telemaco-borba-pr',
  nome: 'Telêmaco Borba',
  uf: 'PR',
  estado: 'Paraná',
  estadoSlug: 'parana',
  regiao: 'Sul',
  gentilico: 'telêmaco-borbense',
  tipo: 'cidade',

  populacao: 75042,
  populacaoAno: 2022,
  idhm: 0.734,
  idhmClasse: 'alto',
  altitudeM: 700,

  resumoEconomico:
    'Telêmaco Borba é a "Capital do Papel", nos Campos Gerais do Paraná, e nasceu em torno da Klabin, uma das maiores produtoras de papel e celulose do país, instalada às margens do rio Tibagi. A economia gira em torno do polo florestal e de papel e celulose, com forte cadeia de madeira, reflorestamento e serviços de apoio à indústria.',

  mercado:
    'O mercado fitness atende uma cidade média do interior paranaense, com academias locais e a oferta de personal trainers concentrada no Centro e bairros próximos. A cultura de treino é reforçada pelo uso dos parques municipais e por uma cena de corrida de rua que ganha força em datas comemorativas da cidade.',

  bairrosNobres: ['Centro', 'Jardim Bela Vista', 'Vila Esperança', 'Alto das Oliveiras'],
  bairrosPopulares: ['Nossa Senhora do Perpétuo Socorro', 'São Silvestre', 'Imbaúzinho', 'Socomã'],

  parques: [
    {
      nome: 'Parque da Cidade',
      descricao:
        'Na Avenida Horácio Klabin, no Centro, tem pistas de caminhada e corrida, academia ao ar livre, quadras esportivas e lago, sendo um dos principais pontos de treino e lazer da cidade.',
    },
    {
      nome: 'Parque Municipal do Rio Tibagi',
      descricao:
        'Área verde às margens do rio Tibagi, com trilhas e espaço para caminhada e contato com a natureza, com acesso pela PR-160, a "Rodovia do Papel".',
    },
    {
      nome: 'Parque Ecológico Samuel Klabin',
      descricao:
        'Mantido pela Klabin, reúne o Museu da Fauna e da Flora e trilhas ecológicas com pontes, rios e cachoeiras, muito procurado para caminhadas e ecoturismo.',
    },
  ],
  ciclovias:
    'A cidade tem trechos de ciclovia e ciclofaixa em avenidas centrais, complementando as pistas dos parques para a prática de atividade física ao ar livre.',

  clima:
    'O clima é subtropical de altitude (cerca de 700 m), típico dos Campos Gerais/planalto paranaense, com verões amenos e invernos frios, com mínimas que podem cair abaixo de 5 °C nas ondas de frio.',
  climaTreino:
    'No inverno, o frio das manhãs pede aquecimento mais longo e roupa térmica; no restante do ano, o clima ameno do planalto favorece correr e treinar ao ar livre.',

  mobilidade:
    'O principal acesso rodoviário é a PR-160, a "Rodovia do Papel", que liga a cidade a Imbaú, Curiúva e ao restante dos Campos Gerais, com ligação a Ponta Grossa e, por ela, a Curitiba.',

  corridas: [
    {
      nome: 'Corrida de aniversário de Telêmaco Borba',
      descricao:
        'Prova de rua ligada às comemorações do município, com percursos de caminhada e corrida pelas vias centrais.',
    },
    {
      nome: 'Circuito de corridas de rua municipal',
      descricao:
        'Provas promovidas pela secretaria de esportes e por grupos locais, que movimentam a cena de corrida ao longo do ano.',
    },
  ],
  culturaEsportiva:
    'A cultura esportiva é marcada pelo uso dos parques municipais e por grupos de caminhada e corrida, em uma cidade ligada à indústria de papel e celulose que valoriza a atividade física ao ar livre.',
  academias:
    'A oferta reúne academias locais e estúdios, complementados pelos parques com pistas e academias ao ar livre, com destaque para o Parque da Cidade.',

  destaquesFitness: [
    'Parque da Cidade, no Centro, com pistas de corrida, academia ao ar livre e quadras.',
    'Parque Municipal do Rio Tibagi e Parque Ecológico Samuel Klabin para caminhada e trilhas.',
    'Cena de corrida de rua impulsionada por provas municipais e grupos locais.',
    'Clima ameno do planalto (cerca de 700 m) favorece o aeróbico ao ar livre boa parte do ano.',
  ],

  precos: {
    avulsaMin: 50,
    avulsaMax: 120,
    mensalMin: 260,
    mensalMax: 720,
    onlineMin: 120,
    onlineMax: 360,
  },

  conclusao:
    'Polo de papel e celulose dos Campos Gerais, Telêmaco Borba combina parques municipais às margens do rio Tibagi com uma cena de corrida em crescimento. Um personal trainer ajuda a manter a constância o ano todo, ajustando o treino ao frio do inverno e aproveitando o clima ameno do planalto nas demais estações.',

  vizinhas: ['ponta-grossa-pr', 'guarapuava-pr', 'curitiba-pr'],

  fontes: [
    { nome: 'IBGE Cidades — Telêmaco Borba', url: 'https://cidades.ibge.gov.br/brasil/pr/telemaco-borba/panorama' },
    { nome: 'Prefeitura de Telêmaco Borba', url: 'https://www.telemacoborba.pr.gov.br/' },
    { nome: 'Atlas Brasil — IDHM', url: 'https://www.atlasbrasil.org.br/perfil/municipio/4127106' },
  ],
  atualizadoEm: '2026-06-29',
};
