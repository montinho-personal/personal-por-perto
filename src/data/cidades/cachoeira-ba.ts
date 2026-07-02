import type { Cidade } from '../../lib/types';

export const cidade: Cidade = {
  slug: 'cachoeira-ba',
  nome: 'Cachoeira',
  uf: 'BA',
  estado: 'Bahia',
  estadoSlug: 'bahia',
  regiao: 'Nordeste',
  gentilico: 'cachoeirano',
  tipo: 'cidade',

  populacao: 29250,
  populacaoAno: 2022,
  idhm: 0.650,
  idhmClasse: 'médio',
  altitudeM: 5,

  resumoEconomico:
    'Às margens do rio Paraguaçu, no coração do Recôncavo Baiano, Cachoeira é Cidade Monumento Nacional, com o conjunto arquitetônico do centro histórico tombado pelo Iphan desde 1971. A economia gira em torno do turismo histórico e cultural, da fabricação artesanal de charutos — tradição que remonta à Fábrica Dannemann, fundada em 1873 — e da agricultura do fumo, que ainda hoje move a cadeia produtiva do tabaco na região. A cidade também é um dos principais centros da cultura afro-religiosa baiana, com destaque para a Irmandade da Boa Morte.',

  mercado:
    'O mercado de personal trainers em Cachoeira é pequeno e concentrado no centro urbano, refletindo o porte de uma cidade histórica do interior. A procura tende a vir de moradores que buscam acompanhamento fora das poucas academias locais e de quem quer aproveitar as ladeiras e o entorno do rio Paraguaçu para caminhada e treino ao ar livre, respeitando o calor e o piso irregular de paralelepípedos do centro tombado.',

  bairrosNobres: ['Centro Histórico', 'Caquende', 'Capoeiruçu'],
  bairrosPopulares: ['Tororó', 'Pitanga', 'Viradouro', 'Morumbi'],

  parques: [
    {
      nome: 'Praça da Aclamação',
      descricao:
        'Principal espaço público do centro histórico, cercada por casarões coloniais e pelo Conjunto do Carmo; funciona como ponto de encontro e caminhada entre moradores e visitantes.',
    },
    {
      nome: 'Cais da Manga e Cais do Alambique',
      descricao:
        'Antigos cais construídos à beira do rio Paraguaçu durante o auge econômico da cidade, hoje parte da orla histórica usada para caminhada com vista para a Ponte Dom Pedro II.',
    },
    {
      nome: 'Entorno do Convento do Carmo',
      descricao:
        'Área elevada do centro histórico, com ladeiras de pedra que servem de percurso natural para quem treina caminhada ou corrida leve ao ar livre na cidade.',
    },
  ],
  ciclovias:
    'Cachoeira não dispõe de estrutura cicloviária relevante; o deslocamento a pé e de bicicleta acontece de forma informal pelas ruas e ladeiras do centro histórico e pelos trechos planos próximos ao rio Paraguaçu.',

  clima:
    'O clima é tropical (Aw), com temperatura média anual em torno de 24 °C e cerca de 890 mm de chuva por ano. As chuvas se concentram no outono (pico em maio) e o período mais seco ocorre por volta de outubro, num padrão tropical com estações bem definidas.',
  climaTreino:
    'O calor e a umidade pedem treinos nas primeiras horas da manhã ou no fim da tarde, com boa hidratação. As ladeiras e o piso de paralelepípedos do centro histórico exigem calçado adequado e atenção redobrada em treinos ao ar livre.',

  mobilidade:
    'O acesso rodoviário a Cachoeira se dá pela BR-420, que liga a cidade à BR-324 no eixo Salvador–Feira de Santana, passando por Santo Amaro; a viagem desde Salvador (cerca de 120 km) dura em torno de 2h15 de ônibus. A histórica Ponte Dom Pedro II, inaugurada em 1885 sobre o rio Paraguaçu, é a única ligação viária entre Cachoeira e a vizinha São Félix, na outra margem do rio.',

  corridas: [],
  culturaEsportiva:
    'A atividade física na cidade se apoia mais no uso cotidiano das ladeiras e praças do centro histórico do que em uma cultura de corridas de rua organizadas, que não têm tradição consolidada em Cachoeira. O rio Paraguaçu e a orla histórica funcionam como espaço informal de caminhada para moradores.',
  academias:
    'A oferta de academias é pequena, concentrada no Centro, com estúdios e academias de porte local voltados a musculação e treino funcional, compatíveis com uma cidade histórica de porte médio do Recôncavo.',

  destaquesFitness: [
    'Centro histórico tombado pelo Iphan desde 1971, com ladeiras de pedra que moldam a caminhada na cidade.',
    'Tradição do charuto artesanal, herdada da Fábrica Dannemann e da cultura fumageira do Recôncavo Baiano.',
    'Um dos principais centros da cultura afro-religiosa baiana, sede da Irmandade da Boa Morte.',
    'Orla do rio Paraguaçu e a Ponte Dom Pedro II, ligando Cachoeira à vizinha São Félix.',
  ],

  precos: {
    avulsaMin: 40,
    avulsaMax: 90,
    mensalMin: 200,
    mensalMax: 550,
    onlineMin: 100,
    onlineMax: 300,
  },

  conclusao:
    'Cidade histórica e de porte pequeno, Cachoeira oferece poucas estruturas formais de treino, o que faz do acompanhamento individualizado uma forma prática de organizar a rotina de atividade física. Um personal trainer ajuda a adaptar os treinos ao calor do Recôncavo e ao relevo de ladeiras do centro tombado, aproveitando a orla do rio Paraguaçu como espaço complementar ao ar livre.',

  vizinhas: ['cruz-das-almas-ba', 'santo-antonio-de-jesus-ba', 'feira-de-santana-ba'],

  fontes: [
    { nome: 'IBGE Cidades — Cachoeira', url: 'https://cidades.ibge.gov.br/brasil/ba/cachoeira/panorama' },
    { nome: 'Atlas Brasil — IDHM Cachoeira', url: 'https://www.atlasbrasil.org.br/perfil/municipio/290490' },
    {
      nome: 'Iphan — Conjunto Urbano Tombado de Cachoeira (BA)',
      url: 'https://www.gov.br/iphan/pt-br/patrimonio-cultural/patrimonio-material/bens-tombados/conjuntos-urbanos-tombados-cidades-historicas/nordeste/cachoeira-ba',
    },
  ],
  atualizadoEm: '2026-07-02',
};
