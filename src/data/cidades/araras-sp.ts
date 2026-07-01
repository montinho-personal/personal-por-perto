import type { Cidade } from '../../lib/types';

export const cidade: Cidade = {
  slug: 'araras-sp',
  nome: 'Araras',
  uf: 'SP',
  estado: 'São Paulo',
  estadoSlug: 'sao-paulo',
  regiao: 'Sudeste',
  gentilico: 'ararense',
  tipo: 'cidade',

  populacao: 130866,
  populacaoAno: 2022,
  idhm: 0.781,
  idhmClasse: 'alto',
  altitudeM: 646,

  resumoEconomico:
    'No interior paulista, entre Limeira e Rio Claro, Araras nasceu na economia do café e se firmou como polo sucroalcooleiro: a Usina São João, com mais de seis décadas de atividade, e a Usina Santa Lúcia ancoram a produção de açúcar e etanol da região. A cidade também abriga a primeira fábrica da Nestlé no Brasil, instalada em 1921 e hoje uma das maiores unidades da multinacional no país. Com o tempo, a economia se diversificou com indústrias de alimentos, metalurgia, móveis, cerâmica e química, somadas a um comércio movimentado e ao setor de serviços.',

  mercado:
    'Cidade média e industrial, Araras tem um mercado fitness em crescimento, apoiado no bom padrão de qualidade de vida e no perfil de trabalhadores das usinas, da Nestlé e do comércio. A procura por personal trainers aparece entre quem quer treino orientado para conciliar a rotina de turnos e aproveitar o Parque Ecológico e as áreas verdes da cidade para atividade ao ar livre.',

  bairrosNobres: ['Centro', 'Jardim Belvedere', 'Vila Michelin', 'Jardim Universo'],
  bairrosPopulares: ['Jardim Alvorada', 'Jardim Sobradinho', 'Vila Nossa Senhora do Carmo', 'Jardim Cândida'],

  parques: [
    {
      nome: 'Parque Ecológico e Cultural Gilberto Rüegger Ometto',
      descricao:
        'Principal área de lazer e atividade física da cidade, com lagos, playgrounds, academia ao ar livre e um boulevard gastronômico. Após a revitalização, passou a oferecer cinco percursos sinalizados, de 750 metros a 4,5 km, para caminhada, corrida e pedal.',
    },
    {
      nome: 'Cidade das Árvores',
      descricao:
        'Araras é conhecida como Cidade das Árvores e realizou a primeira Festa da Árvore do Brasil em 1902; a forte arborização das ruas e praças cria sombra e ambiente agradável para caminhada e corrida no dia a dia.',
    },
    {
      nome: 'Praças e áreas verdes centrais',
      descricao:
        'O conjunto de praças e canteiros arborizados da área central complementa as opções de exercício ao ar livre próximas de casa, em uma cidade que trata 100% do esgoto e valoriza a tradição verde.',
    },
  ],
  ciclovias:
    'A cidade conta com trechos de ciclovia e ciclofaixa em avenidas e no entorno do Parque Ecológico, onde estão os percursos mais usados para pedalar; boa parte da corrida e do pedal também acontece nas vias arborizadas dos bairros residenciais.',

  clima:
    'O clima é tropical de altitude, com verões quentes e chuvosos e invernos mais amenos e secos. A temperatura média anual fica em torno de 21 °C, com dias quentes no verão e madrugadas frescas no inverno, típicas do interior paulista em cerca de 640 metros de altitude.',
  climaTreino:
    'Nos meses quentes e úmidos do verão, o ideal é treinar cedo ou no fim da tarde, com boa hidratação; o outono e o inverno, mais secos e amenos, tendem a ser os períodos mais confortáveis para atividade ao ar livre no Parque Ecológico e nas ruas arborizadas.',

  mobilidade:
    'Araras fica às margens da Rodovia Anhanguera (SP-330), que a liga a Campinas e à capital paulista, e se conecta à região por vias como a SP-191, no sentido de Rio Claro. A Rodovia Washington Luís (SP-310) corta a vizinha Rio Claro e reforça o eixo logístico do interior. O transporte urbano é feito por ônibus operados pela TCA, com terminal rodoviário que atende linhas para São Paulo e para municípios vizinhos como Limeira, Rio Claro e Piracicaba.',

  corridas: [
    {
      nome: 'Corrida de Rua AAA',
      descricao:
        'Prova de rua tradicional de Araras, com edições anuais e largada noturna em algumas ocasiões, reunindo corredores da cidade e da região.',
    },
    {
      nome: 'Salus Run',
      descricao:
        'Corrida com percursos de 5 km e 10 km, além de caminhada, com largada no boulevard do Parque Ecológico.',
    },
  ],
  culturaEsportiva:
    'A cultura esportiva ararense se apoia no Parque Ecológico como polo de caminhada, corrida e pedal, na tradição verde da Cidade das Árvores e em provas de rua que movimentam corredores locais ao longo do ano.',
  academias:
    'A oferta reúne academias de musculação e treino funcional distribuídas pelo Centro e pelos bairros residenciais, com porte compatível com uma cidade média e industrial do interior paulista.',

  destaquesFitness: [
    'Parque Ecológico Gilberto Rüegger Ometto, com cinco percursos sinalizados e boulevard para caminhada, corrida e pedal.',
    'Cidade das Árvores: forte arborização e tradição verde desde a primeira Festa da Árvore do Brasil, em 1902.',
    'Clima tropical de altitude, com inverno seco e ameno favorável ao treino ao ar livre.',
    'Polo sucroalcooleiro e industrial, com Usina São João e a primeira fábrica da Nestlé no Brasil.',
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
    'Cidade arborizada, industrial e com boa qualidade de vida, Araras oferece estrutura para treinar tanto ao ar livre, no Parque Ecológico, quanto em academias dos bairros. Um personal trainer ajuda a organizar a rotina em torno dos turnos de trabalho, aproveitar os percursos do parque e manter a constância ao longo das estações no interior paulista.',

  vizinhas: ['limeira-sp', 'leme-sp', 'rio-claro-sp'],

  fontes: [
    { nome: 'IBGE Cidades — Araras', url: 'https://cidades.ibge.gov.br/brasil/sp/araras/panorama' },
    { nome: 'Prefeitura de Araras', url: 'https://araras.sp.gov.br/' },
    { nome: 'Atlas Brasil — IDHM', url: 'https://www.atlasbrasil.org.br/' },
  ],
  atualizadoEm: '2026-06-29',
};
