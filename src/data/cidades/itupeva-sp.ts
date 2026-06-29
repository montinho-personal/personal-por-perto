import type { Cidade } from '../../lib/types';

export const cidade: Cidade = {
  slug: 'itupeva-sp',
  nome: 'Itupeva',
  uf: 'SP',
  estado: 'São Paulo',
  estadoSlug: 'sao-paulo',
  regiao: 'Sudeste',
  gentilico: 'itupevense',
  tipo: 'cidade',

  populacao: 70616,
  populacaoAno: 2022,
  idhm: 0.759,
  idhmClasse: 'alto',
  altitudeM: 675,

  resumoEconomico:
    'Na Região Metropolitana de Jundiaí, Itupeva é uma das cidades que mais crescem no interior paulista — sua população avançou mais de 57% entre os Censos de 2010 e 2022. Tem forte vocação turística e de lazer, ancorada no complexo às margens da Rodovia dos Bandeirantes que reúne o Outlet Premium São Paulo, o parque temático Hopi Hari e o parque aquático Wet\'n Wild. Mantém também tradição rural, com produção de uva Niágara, morango e pêssego e adegas familiares, integrando o Circuito das Frutas.',

  mercado:
    'Cidade em expansão acelerada, com dezenas de condomínios fechados de alto padrão (como Quinta da Baroneza, Fazenda da Grama e Fazenda SerrAzul) e moradores de renda elevada, Itupeva forma um mercado promissor para personal trainers. A demanda se divide entre as academias do centro e dos novos bairros e, sobretudo, o atendimento domiciliar dentro dos condomínios — onde casas com espaço, áreas verdes e estrutura própria favorecem o treino personalizado.',

  bairrosNobres: ['Quinta da Baroneza', 'Fazenda da Grama', 'Fazenda SerrAzul', 'Parque dos Resedás'],
  bairrosPopulares: ['Rio Abaixo', 'Vila Aparecida', 'Jardim Brasil', 'Horizonte Azul'],

  parques: [
    {
      nome: 'Parque da Cidade',
      descricao:
        'Principal área pública de lazer de Itupeva, com pista para caminhada e corrida e espaço ao ar livre; sedia eventos tradicionais como a Expo Uva, uma das maiores festas do município.',
    },
    {
      nome: 'Zona rural e Circuito das Frutas',
      descricao:
        'Estradas de campo entre vinhedos, pomares e adegas familiares formam roteiros de cicloturismo e caminhada em meio à natureza, com relevo de morros e clima ameno.',
    },
  ],
  ciclovias:
    'O grande diferencial é o cicloturismo: Itupeva mantém roteiros oficiais de bike pela zona rural (parte do Circuito das Frutas), com percursos por estradas de terra entre propriedades produtoras de uva e morango.',

  clima:
    'O clima é tropical de altitude (cerca de 675 m), típico da região serrana de Jundiaí, com verões quentes e chuvosos e invernos mais amenos e secos.',
  climaTreino:
    'As manhãs e o fim de tarde são os melhores momentos para treino ao ar livre, com temperaturas agradáveis na maior parte do ano. No verão, vale atenção às pancadas de chuva no fim do dia.',

  mobilidade:
    'Itupeva tem localização privilegiada às margens da Rodovia dos Bandeirantes (SP-348), com acesso rápido a Jundiaí, Campinas e à capital. Essa conexão sustenta tanto o polo logístico quanto o fluxo turístico que chega ao Outlet Premium e aos parques.',

  corridas: [
    {
      nome: 'Provas no Parque da Cidade',
      descricao:
        'O Parque da Cidade concentra a prática de caminhada e corrida da população e serve de palco para eventos esportivos e festas do calendário municipal.',
    },
    {
      nome: 'Cicloturismo do Circuito das Frutas',
      descricao:
        'Roteiros de bike pela zona rural reúnem ciclistas em percursos cênicos entre vinhedos e pomares, reforçando a cultura de esporte ao ar livre.',
    },
  ],
  culturaEsportiva:
    'A cultura ativa de Itupeva é marcada pela vida ao ar livre: cicloturismo pela zona rural, caminhada no Parque da Cidade e, dentro dos condomínios de alto padrão, estruturas de lazer, golfe e centros equestres. O perfil de cidade-jardim e o clima ameno incentivam o treino fora de quatro paredes.',
  academias:
    'A oferta cresce junto com a cidade, somando academias de musculação e estúdios de treino funcional no centro e nos novos bairros, complementada por uma forte demanda por atendimento domiciliar nos condomínios fechados.',

  destaquesFitness: [
    'Dezenas de condomínios de alto padrão (Quinta da Baroneza, Fazenda da Grama, SerrAzul) com espaço para treino domiciliar.',
    'Cicloturismo pela zona rural integrado ao Circuito das Frutas.',
    'Parque da Cidade para caminhada, corrida e eventos.',
    'Cidade em crescimento acelerado, com público de alta renda e clima ameno o ano todo.',
  ],

  precos: {
    avulsaMin: 70,
    avulsaMax: 160,
    mensalMin: 350,
    mensalMax: 950,
    onlineMin: 160,
    onlineMax: 450,
  },

  conclusao:
    'Em plena expansão, com condomínios de alto padrão, clima ameno e natureza à mão, Itupeva é um terreno fértil para a vida ativa. Um personal trainer ajuda a aproveitar o Parque da Cidade, os roteiros rurais de bike e a estrutura dos condomínios com um plano sob medida — unindo qualidade de vida e resultado.',

  vizinhas: ['jundiai-sp', 'indaiatuba-sp', 'louveira-sp', 'vinhedo-sp'],

  fontes: [
    { nome: 'IBGE Cidades — Itupeva', url: 'https://cidades.ibge.gov.br/brasil/sp/itupeva/panorama' },
    { nome: 'Prefeitura de Itupeva', url: 'https://www.itupeva.sp.gov.br/' },
    { nome: 'Atlas Brasil — IDHM', url: 'https://www.atlasbrasil.org.br/' },
  ],
  atualizadoEm: '2026-06-29',
};
