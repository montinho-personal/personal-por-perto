import type { Cidade } from '../../lib/types';

export const cidade: Cidade = {
  slug: 'canela-rs',
  nome: 'Canela',
  uf: 'RS',
  estado: 'Rio Grande do Sul',
  estadoSlug: 'rio-grande-do-sul',
  regiao: 'Sul',
  gentilico: 'canelense',
  tipo: 'cidade',

  populacao: 48946,
  populacaoAno: 2022,
  idhm: 0.748,
  idhmClasse: 'alto',
  altitudeM: 837,

  resumoEconomico:
    'Vizinha de Gramado, Canela é um dos maiores destinos turísticos do Sul do país, no coração da Serra Gaúcha e da Região das Hortênsias. A economia é fortemente ancorada no turismo e na hotelaria — a cidade concentra uma ampla rede de hotéis, pousadas e atrativos como o Parque do Caracol, a Catedral de Pedra e o Parque da Ferradura. Complementam a base econômica as malharias, a produção de chocolates e produtos coloniais, o polo moveleiro e o comércio voltado ao visitante, que sustentam o fluxo constante de turistas ao longo do ano.',

  mercado:
    'O mercado fitness de Canela é influenciado pelo perfil turístico e pelo clima frio de altitude: parte da demanda vem de moradores que treinam o ano inteiro e parte de visitantes e residentes de segunda moradia. Há procura por personal trainers que orientem treino em ambiente frio, aproveitem os parques e trilhas da serra e ajudem quem trabalha em jornadas intensas na hotelaria e no comércio a manter constância.',

  bairrosNobres: ['Centro', 'Vila Suzana', 'Alpes Verdes', 'Palace Hotel'],
  bairrosPopulares: ['Leodoro de Azevedo', 'São Luiz', 'Canelinha', 'Distrito Industrial'],

  parques: [
    {
      nome: 'Parque Estadual do Caracol',
      descricao:
        'Unidade de conservação com mata atlântica preservada e a Cascata do Caracol, de cerca de 131 metros de queda; trilhas, escadaria e mirantes tornam o parque um espaço clássico para caminhada e atividade ao ar livre na serra.',
    },
    {
      nome: 'Parque da Ferradura',
      descricao:
        'Área natural com mirantes debruçados sobre o cânion do rio Caí e trilhas em meio à mata; o desnível e os percursos fazem dele um ponto procurado por quem gosta de caminhada e treino em terreno de montanha.',
    },
    {
      nome: 'Praça João Corrêa e Catedral de Pedra',
      descricao:
        'No coração da cidade, o entorno da Catedral de Pedra (Igreja Matriz de Nossa Senhora de Lourdes) e a praça central formam o espaço urbano mais usado para caminhadas leves e para o vaivém diário de moradores e turistas.',
    },
  ],
  ciclovias:
    'A estrutura cicloviária urbana é limitada, mas a serra é bastante explorada por ciclismo e mountain bike nas estradas rurais e nos trechos que ligam Canela ao Caracol, à Ferradura e a São Francisco de Paula, com relevo desafiador e paisagem de montanha.',

  clima:
    'Canela tem clima subtropical de altitude (a cerca de 837 metros), com invernos rigorosos e verões amenos — a média anual gira em torno de 16 °C. No inverno, as temperaturas podem cair abaixo de zero, com geadas frequentes e, ocasionalmente, registros de neve, o que reforça a atmosfera de montanha que atrai turistas em busca do frio.',
  climaTreino:
    'O frio de altitude pede aquecimento mais longo e roupas em camadas, sobretudo nos treinos ao ar livre de manhã cedo e à noite, quando as temperaturas despencam. No verão ameno, as trilhas e parques ficam especialmente convidativos; no inverno, ambientes cobertos e aquecidos ajudam a manter a rotina nos dias mais gelados.',

  mobilidade:
    'Canela se conecta a Gramado e a São Francisco de Paula pela rodovia RS-235, uma das principais ligações da Região das Hortênsias, e a Caxias do Sul pelo eixo serrano. O transporte urbano é feito por ônibus e o trânsito ganha reforço sazonal nos períodos de alta temporada turística, quando o fluxo de visitantes cresce de forma expressiva.',

  corridas: [
    {
      nome: 'X-Run Canela',
      descricao:
        'Prova de trail running na região de Canela, com percursos longos que atravessam montanhas, vales, trilhas, estradas de terra e trechos de mata — um dos eventos que consolidam a serra como destino de corrida de montanha.',
    },
    {
      nome: 'Circuito Trail Estações',
      descricao:
        'Circuito de corridas de montanha com etapa realizada em Canela, explorando o relevo e as paisagens da Serra Gaúcha ao longo das estações do ano.',
    },
  ],
  culturaEsportiva:
    'A cultura esportiva de Canela é marcada pela relação com a montanha: trilhas, corrida de trail, ciclismo e caminhadas em parques como o Caracol e a Ferradura convivem com o turismo de natureza e de aventura que caracteriza a Serra Gaúcha.',
  academias:
    'A oferta reúne academias de musculação e treino funcional distribuídas pelos bairros centrais e residenciais, além de estúdios menores, com porte compatível com uma cidade de perfil turístico da serra.',

  destaquesFitness: [
    'Um dos maiores destinos turísticos do Sul, ao lado de Gramado, no coração da Serra Gaúcha.',
    'Parque do Caracol, Catedral de Pedra e Parque da Ferradura como cenários para caminhada e treino ao ar livre.',
    'Clima frio de altitude, com invernos rigorosos que exigem adaptar horário e vestuário no treino.',
    'Serra propícia a trail running e ciclismo de montanha, com provas como a X-Run Canela.',
  ],

  precos: {
    avulsaMin: 60,
    avulsaMax: 140,
    mensalMin: 300,
    mensalMax: 820,
    onlineMin: 140,
    onlineMax: 400,
  },

  conclusao:
    'Cidade serrana, fria e turística, Canela oferece um cenário privilegiado para treinar ao ar livre entre parques, trilhas e montanhas — desde que o frio de altitude seja levado a sério. Um personal trainer ajuda a adaptar a rotina às estações, aproveitar as trilhas da serra com segurança e manter a constância mesmo nos invernos mais rigorosos.',

  vizinhas: ['gramado-rs', 'caxias-do-sul-rs'],

  fontes: [
    { nome: 'IBGE Cidades — Canela', url: 'https://cidades.ibge.gov.br/brasil/rs/canela/panorama' },
    { nome: 'Atlas Brasil — IDHM Canela', url: 'https://www.atlasbrasil.org.br/perfil/municipio/430440' },
    { nome: 'Prefeitura de Canela', url: 'https://canela.rs.gov.br/' },
  ],
  atualizadoEm: '2026-06-29',
};
