import type { Cidade } from '../../lib/types';

export const cidade: Cidade = {
  slug: 'urussanga-sc',
  nome: 'Urussanga',
  uf: 'SC',
  estado: 'Santa Catarina',
  estadoSlug: 'santa-catarina',
  regiao: 'Sul',
  gentilico: 'urussanguense',
  tipo: 'cidade',

  populacao: 20919,
  populacaoAno: 2022,
  idhm: 0.772,
  idhmClasse: 'alto',
  altitudeM: 49,

  resumoEconomico:
    'Colonizada por imigrantes italianos a partir de 26 de maio de 1878 — vindos principalmente da Lombardia, do Friuli-Venezia Giulia e do Trentino-Alto Ádige —, Urussanga é conhecida como a Capital Catarinense da Uva e do Vinho Goethe, com vinícolas como Vigna Mazon, Vinhos Trevisol, Vitivinícola Urussanga, Vinhos Mazzuco e Vinhos de Pelegrin sustentando a vitivinicultura da região. A economia, historicamente ligada à mineração de carvão mineral, hoje é diversificada: reúne cerâmica, indústria moveleira, plásticos, metalmecânica e equipamentos agropecuários, além da agropecuária familiar voltada à avicultura e à suinocultura. O casario histórico do Centro, erguido por descendentes de italianos entre o fim do século XIX e o início do XX, e o calendário de festas de tradição italiana reforçam a vocação turística do município.',

  mercado:
    'Como cidade pequena do interior catarinense, o mercado fitness de Urussanga é enxuto e concentrado em poucas academias locais, voltadas a musculação, treino funcional e modalidades como pilates. A procura por personal trainer tende a vir de moradores que buscam acompanhamento individualizado nessas estruturas menores, de praticantes de ciclismo — tradição forte na cidade — que treinam nas estradas rurais entre os vinhedos, e de quem participa da Corrida do Vinho e de outras provas do calendário local.',

  bairrosNobres: ['Centro', 'Nova Itália', 'São Pedro', 'De Villa'],
  bairrosPopulares: ['Esplanada', 'Rio Maior', 'Das Damas', 'Rossetti'],

  parques: [
    {
      nome: 'Parque Municipal Ado Cassetari Vieira',
      descricao:
        'Criado em 1986, reúne cerca de 8 hectares de área verde com vegetação nativa e exótica; é o principal espaço público para caminhada e contato com a natureza da cidade e sedia anualmente a Festa do Vinho.',
    },
    {
      nome: 'Praça Anita Garibaldi',
      descricao:
        'Praça central arborizada, cercada pelo casario histórico do núcleo urbano erguido por descendentes de imigrantes italianos, com coreto e monumento em homenagem aos colonizadores — ponto de encontro e de caminhadas leves no Centro.',
    },
    {
      nome: 'Centro Poliesportivo de Urussanga',
      descricao:
        'Complexo esportivo com pista de caminhada pavimentada, academia ao ar livre, playground e infraestrutura para o campo de futebol, entregue com investimento federal e municipal para ampliar o lazer e a atividade física na cidade.',
    },
  ],
  ciclovias:
    'A malha cicloviária urbana é modesta, mas Urussanga tem uma cultura de ciclismo de estrada consolidada: o Clube Urussanga Ciclismo, fundado em 2015 e ranqueado entre os melhores clubes de randonneur (Audax) do país, organiza provas de longa distância e o Circuito Explorações de cicloturismo e mountain bike pelas estradas rurais e pela serra do entorno.',

  clima:
    'O clima é subtropical úmido (Cfa), sem estação seca definida e com verão quente; a cidade já registrou extremos históricos de 42,2 °C e -4,6 °C, com temperatura média anual em torno de 19,2 °C. O inverno é frio e úmido, com geadas ocasionais, enquanto o verão é quente e chuvoso.',
  climaTreino:
    'O calor do verão pede treinos no início da manhã ou no fim da tarde, com reforço de hidratação, enquanto as manhãs de inverno com geada exigem aquecimento mais longo antes de treinar ao ar livre; o relevo acidentado do município acrescenta desnível a quem treina nas estradas rurais.',

  mobilidade:
    'O acesso principal é pela SC-108, que liga Urussanga a Cocal do Sul e a Criciúma, a cerca de 15 km, além de Orleans, São Ludgero e Braço do Norte, dando acesso à BR-101 na região de Tubarão; a capital Florianópolis fica a 185 km. O transporte urbano e intermunicipal é feito por ônibus, e o relevo com trechos de forte declive — cerca de 70% do território tem inclinação acima de 20% — molda o traçado das vias rurais usadas por ciclistas e corredores.',

  corridas: [
    {
      nome: 'Corrida do Vinho',
      descricao:
        'Prova de rua realizada em Urussanga com percursos de 5 km e 13 km, com largada na Praça Anita Garibaldi; já chegou à 4ª edição, reunindo corredores da cidade e da região.',
    },
  ],
  culturaEsportiva:
    'A cultura esportiva local combina a tradição italiana das festas e da vitivinicultura com uma cena de ciclismo de estrada reconhecida nacionalmente, mantida pelo Clube Urussanga Ciclismo e suas provas Audax de longa distância, além da Corrida do Vinho, que leva a comunidade às ruas do Centro histórico.',
  academias:
    'A oferta reúne academias locais de musculação, treino funcional e pilates, concentradas no Centro e em bairros como De Villa, com porte compatível com uma cidade pequena do interior catarinense.',

  destaquesFitness: [
    'Capital Catarinense da Uva e do Vinho Goethe, com identidade forjada pela colonização italiana desde 1878.',
    'Clube Urussanga Ciclismo, um dos mais bem ranqueados do país em provas Audax (randonneur) de longa distância.',
    'Corrida do Vinho, prova de rua com percursos de 5 km e 13 km saindo da Praça Anita Garibaldi.',
    'Relevo acidentado, com cerca de 70% do território em declive acentuado, que soma desnível ao treino ao ar livre.',
  ],

  precos: {
    avulsaMin: 50,
    avulsaMax: 115,
    mensalMin: 250,
    mensalMax: 700,
    onlineMin: 115,
    onlineMax: 350,
  },

  conclusao:
    'Cidade de colonização italiana e relevo acidentado no Sul catarinense, Urussanga combina o charme do Centro histórico e dos vinhedos com uma tradição consolidada de ciclismo de estrada. Um personal trainer ajuda a aproveitar esse cenário com segurança, ajustando o treino ao calor do verão, ao frio das manhãs de inverno e aos desníveis das estradas rurais, mantendo a constância ao longo do ano.',

  vizinhas: ['criciuma-sc', 'icara-sc', 'tubarao-sc'],

  fontes: [
    { nome: 'IBGE Cidades — Urussanga', url: 'https://cidades.ibge.gov.br/brasil/sc/urussanga/panorama' },
    { nome: 'Prefeitura de Urussanga', url: 'https://www.urussanga.sc.gov.br/' },
    { nome: 'Atlas Brasil — IDHM', url: 'https://www.atlasbrasil.org.br/' },
  ],
  atualizadoEm: '2026-07-02',
};
