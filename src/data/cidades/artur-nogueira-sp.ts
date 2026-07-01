import type { Cidade } from '../../lib/types';

export const cidade: Cidade = {
  slug: 'artur-nogueira-sp',
  nome: 'Artur Nogueira',
  uf: 'SP',
  estado: 'São Paulo',
  estadoSlug: 'sao-paulo',
  regiao: 'Sudeste',
  gentilico: 'nogueirense',
  tipo: 'cidade',

  populacao: 51456,
  populacaoAno: 2022,
  idhm: 0.749,
  idhmClasse: 'alto',
  altitudeM: 595,

  resumoEconomico:
    'Na Região Metropolitana de Campinas, Artur Nogueira tem raízes na colonização por imigrantes italianos, alemães e espanhóis que se dedicaram ao café, ao arroz e ao algodão. Hoje a economia é liderada pelo setor de serviços e pelo comércio, seguidos pela indústria e por uma agropecuária ainda relevante, com culturas como milho, cana-de-açúcar, café e a produção rural do entorno. A proximidade com Limeira, Cosmópolis, Holambra e o polo de Campinas conecta a cidade a um dos mercados mais dinâmicos do interior paulista.',

  mercado:
    'Cidade de porte médio inserida na Região Metropolitana de Campinas, Artur Nogueira tem um mercado fitness em crescimento, apoiado nas academias de bairro e na cultura de atividade ao ar livre em torno das lagoas e praças. A procura por personal trainers tende a se fortalecer entre moradores que buscam acompanhamento individual e entre quem treina para as corridas de rua que já fazem parte do calendário local.',

  bairrosNobres: ['Centro', 'Jardim Planalto', 'Parque das Flores', 'Parque Residencial Itamaraty'],
  bairrosPopulares: ['Jardim Sacilotto', 'Vila São Vicente', 'Jardim Boa Vista', 'Lagoa Bonita'],

  parques: [
    {
      nome: 'Lagoa dos Pássaros',
      descricao:
        'Um dos principais cartões-postais da cidade, no centro, reúne área arborizada, pista para caminhada e corrida, aparelhos de exercício e quadras esportivas. À noite é bastante usada por quem pratica caminhada e patinação, e sedia eventos como corridas de rua e festivais.',
    },
    {
      nome: 'Balneário Municipal',
      descricao:
        'Espaço de lazer junto à Lagoa dos Pássaros, com estrutura de recreação e áreas de convivência que complementam o uso esportivo do entorno da lagoa.',
    },
    {
      nome: 'Praças e lagoas urbanas',
      descricao:
        'Conhecida por suas praças arborizadas e por lagoas na malha urbana, a cidade oferece pontos espalhados pelos bairros que servem de apoio a caminhadas ao fim da tarde e a treinos ao ar livre.',
    },
  ],
  ciclovias:
    'A infraestrutura cicloviária é modesta e concentrada em trechos da área urbana; boa parte do pedal e da corrida acontece nas vias dos bairros residenciais e no entorno das lagoas e praças da cidade.',

  clima:
    'O clima é tropical de altitude, com verões quentes e chuvosos (de outubro a março) e invernos mais secos e amenos. A altitude em torno de 595 metros suaviza as temperaturas em relação a áreas mais baixas do interior, com noites frescas no período de inverno.',
  climaTreino:
    'O treino ao ar livre é favorecido pelo clima ameno na maior parte do ano; no verão, o ideal é buscar o começo da manhã ou o fim da tarde para evitar o pico de calor e a chuva, mantendo boa hidratação. O inverno seco tende a ser confortável para atividades externas.',

  mobilidade:
    'A cidade se conecta à região por rodovias como a SP-107 (Rodovia Pref. Aziz Lian), que dá acesso à SP-340, e pela proximidade com a SP-332 (Rodovia Zeferino Vaz), articulando Artur Nogueira a Limeira, Cosmópolis, Mogi Mirim e ao polo de Campinas. O transporte urbano é feito por ônibus, e a maior parte dos deslocamentos internos é de curta distância.',

  corridas: [
    {
      nome: 'Corrida Buona Gente',
      descricao:
        'Prova de rua promovida pelo supermercado de mesmo nome, realizada na cidade e já consolidada no calendário local como destino de corredores da região.',
    },
    {
      nome: 'For You Run',
      descricao:
        'Corrida de rua com percursos de 5 km e 10 km que utiliza a Lagoa dos Pássaros como ponto de largada e referência.',
    },
  ],
  culturaEsportiva:
    'A cultura esportiva gira em torno das lagoas e praças, com destaque para a Lagoa dos Pássaros como espaço de caminhada, corrida e patinação, além de eventos como campeonatos de pesca e corridas de rua que reúnem a comunidade ao ar livre.',
  academias:
    'A oferta é formada principalmente por academias de musculação e treino funcional distribuídas pelo centro e pelos bairros residenciais, com porte compatível com uma cidade média da Região Metropolitana de Campinas.',

  destaquesFitness: [
    'Lagoa dos Pássaros: pista de caminhada e corrida, aparelhos de exercício e quadras no centro da cidade.',
    'Cidade das praças e lagoas urbanas, com pontos ao ar livre espalhados pelos bairros.',
    'Clima tropical de altitude, ameno na maior parte do ano e favorável ao treino externo.',
    'Localização na Região Metropolitana de Campinas, com fácil acesso a Limeira, Mogi Mirim e ao polo campineiro.',
  ],

  precos: {
    avulsaMin: 55,
    avulsaMax: 125,
    mensalMin: 270,
    mensalMax: 740,
    onlineMin: 130,
    onlineMax: 370,
  },

  conclusao:
    'Com clima ameno, praças arborizadas e a Lagoa dos Pássaros como ponto de encontro esportivo, Artur Nogueira reúne boas condições para quem quer treinar ao ar livre na Região Metropolitana de Campinas. Um personal trainer ajuda a estruturar a rotina, aproveitar os espaços da cidade e manter a constância ao longo das estações.',

  vizinhas: ['limeira-sp', 'mogi-mirim-sp'],

  fontes: [
    { nome: 'IBGE Cidades — Artur Nogueira', url: 'https://cidades.ibge.gov.br/brasil/sp/artur-nogueira/panorama' },
    { nome: 'Prefeitura de Artur Nogueira', url: 'https://arturnogueira.sp.gov.br/' },
    { nome: 'Atlas Brasil — IDHM', url: 'https://www.atlasbrasil.org.br/' },
  ],
  atualizadoEm: '2026-06-29',
};
