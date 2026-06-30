import type { Cidade } from '../../lib/types';

export const cidade: Cidade = {
  slug: 'brumado-ba',
  nome: 'Brumado',
  uf: 'BA',
  estado: 'Bahia',
  estadoSlug: 'bahia',
  regiao: 'Nordeste',
  gentilico: 'brumadense',
  tipo: 'cidade',

  populacao: 70512,
  populacaoAno: 2022,
  idhm: 0.656,
  idhmClasse: 'médio',
  altitudeM: 454,

  resumoEconomico:
    'Brumado é o maior produtor de magnesita do Brasil, atividade extraída da Serra das Éguas, que abriga uma das maiores minas de magnesita a céu aberto do mundo e também jazidas de talco, o que rendeu à cidade o apelido de capital do talco. A mineração é a principal fonte de riqueza e emprego do município, ao lado de um comércio forte e diversificado. Além da extração mineral, Brumado se firmou como polo regional de comércio e de saúde no sudoeste baiano, atendendo dezenas de municípios do entorno.',

  mercado:
    'Com economia movida pela mineração e por um comércio que atende toda a região, Brumado reúne classe trabalhadora estável e classe média em expansão, o que sustenta demanda crescente por academias e personal trainers. O papel de polo regional de saúde e serviços amplia o público interessado em acompanhamento físico orientado.',

  bairrosNobres: ['Centro', 'Jardim Brasil', 'Vila Presidente Vargas', 'Urbis I'],
  bairrosPopulares: ['Feliciano Pereira Santos', 'São Félix', 'Olhos d’Água', 'Dr. Juracy Magalhães'],

  parques: [
    {
      nome: 'Serra das Éguas',
      descricao:
        'Maciço que cerca a cidade e marca a paisagem brumadense, conhecido pelas minas de magnesita e talco. Seu entorno serve de referência para quem busca trilhas e atividade ao ar livre próximas à área urbana.',
    },
    {
      nome: 'Praças e calçadões do Centro',
      descricao:
        'A área central concentra praças e avenidas usadas para caminhada e corrida no fim de tarde, sendo o principal ponto de quem treina na rua.',
    },
    {
      nome: 'Estádio e espaços esportivos municipais',
      descricao:
        'A estrutura esportiva municipal complementa a oferta de espaços para treino, prática de modalidades e eventos da cidade.',
    },
  ],
  ciclovias:
    'A cidade tem trechos de vias adaptadas para o pedal no perímetro urbano; a extensão total da malha cicloviária não é divulgada em fonte oficial.',

  clima:
    'O clima é semiárido quente, típico do sudoeste baiano, com calor o ano inteiro, estação seca prolongada e chuvas concentradas no verão.',
  climaTreino:
    'Pelo calor constante, o treino ao ar livre rende mais no início da manhã e no fim da tarde; hidratação e proteção solar são essenciais, o que reforça o valor de um plano orientado por personal trainer.',

  mobilidade:
    'Brumado fica no entroncamento da BR-030 com a BA-262, posição que a transforma em ponto de passagem e escoamento da produção mineral e do comércio regional. A BR-030 a conecta ao restante do sudoeste baiano, sustentando seu papel de polo de serviços e saúde para os municípios vizinhos.',

  corridas: [
    {
      nome: 'Corrida de Rua Aniversário de Brumado',
      descricao:
        'Prova realizada em comemoração à emancipação política do município, com percursos de 10 km, 5 km e caminhada de 3 km pelas principais ruas do centro da cidade.',
    },
    {
      nome: 'Circuito regional do sudoeste baiano',
      descricao:
        'Brumado integra o calendário de corridas de rua do sudoeste da Bahia, que movimenta corredores de municípios vizinhos ao longo do ano.',
    },
  ],
  culturaEsportiva:
    'A corrida de rua ganhou espaço em Brumado, com provas que reúnem participantes nos percursos de 5 km e 10 km pelo centro. O futebol e as modalidades de quadra também têm público fiel, sustentando a cultura esportiva da cidade.',
  academias:
    'A oferta de academias acompanha a economia movida pela mineração e pelo comércio regional, além do crescimento da classe média ligada aos serviços e à saúde.',

  destaquesFitness: [
    'Maior produtor de magnesita do Brasil, com economia movida pela mineração.',
    'Polo regional de comércio e saúde do sudoeste baiano.',
    'Corridas de rua que reúnem participantes da cidade e da região.',
    'Clima semiárido quente que favorece treino ao ar livre nos horários frescos.',
  ],

  precos: {
    avulsaMin: 45,
    avulsaMax: 110,
    mensalMin: 240,
    mensalMax: 680,
    onlineMin: 110,
    onlineMax: 340,
  },

  conclusao:
    'Capital da magnesita e polo de comércio e saúde do sudoeste baiano, Brumado combina economia estável com clima semiárido quente que pede treino bem planejado nos horários mais frescos. Um personal trainer ajuda a montar uma rotina segura e eficiente, ajustada ao calor e ao ritmo de quem vive na cidade.',

  vizinhas: ['vitoria-da-conquista-ba', 'guanambi-ba'],

  fontes: [
    { nome: 'IBGE Cidades — Brumado', url: 'https://cidades.ibge.gov.br/brasil/ba/brumado/panorama' },
    { nome: 'Prefeitura de Brumado', url: 'https://www.brumado.ba.gov.br/' },
    { nome: 'Atlas Brasil — IDHM', url: 'https://www.atlasbrasil.org.br/' },
  ],
  atualizadoEm: '2026-06-29',
};
