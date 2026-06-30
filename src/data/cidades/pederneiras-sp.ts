import type { Cidade } from '../../lib/types';

export const cidade: Cidade = {
  slug: 'pederneiras-sp',
  nome: 'Pederneiras',
  uf: 'SP',
  estado: 'São Paulo',
  estadoSlug: 'sao-paulo',
  regiao: 'Sudeste',
  gentilico: 'pederneirense',
  tipo: 'cidade',

  populacao: 44827,
  populacaoAno: 2022,
  idhm: 0.739,
  idhmClasse: 'alto',
  altitudeM: 475,

  resumoEconomico:
    'No centro-oeste paulista, na região de Bauru e às margens do rio Tietê, Pederneiras tem economia ligada ao agronegócio e à indústria. A cana-de-açúcar predomina no campo, ao lado de citros, milho e pecuária, e o parque industrial reúne empresas dos ramos metalmecânico, químico e de beneficiamento de produtos agrícolas. A cidade abriga um porto intermodal na Hidrovia Tietê-Paraná, ponto estratégico para o transbordo de grãos entre os modais hidroviário, ferroviário e rodoviário.',

  mercado:
    'Como cidade média do interior paulista, Pederneiras tem um mercado fitness em desenvolvimento, sustentado por academias de bairro e estúdios de treino. A procura por personal trainers cresce entre quem busca acompanhamento mais próximo e aproveita o clima e os espaços públicos da cidade para treinar ao ar livre, especialmente nas áreas verdes e na orla do Tietê.',

  bairrosNobres: ['Centro', 'Jardim Recreio Lago dos Paturís', 'Jardim Alvorada', 'Jardim América'],
  bairrosPopulares: ['Jardim Bandeirantes', 'Jardim Brasil', 'Jardim Bela Vista', 'Vila Industrial'],

  parques: [
    {
      nome: 'Parque Ecológico Vale do Sol',
      descricao:
        'Criado no início dos anos 1990, é o principal espaço de lazer e prática esportiva da cidade, com bosque arborizado, lagoa, quiosques e gramados — usado para caminhada, corrida e atividades ao ar livre, e palco de eventos de atletismo.',
    },
    {
      nome: 'Prainha Municipal (orla do Tietê)',
      descricao:
        'Área de lazer à beira do rio Tietê, com píer, deques e mirantes, que oferece um cenário de contemplação e um trecho usado por moradores para caminhada e descanso ativo.',
    },
    {
      nome: 'Jardim Recreio Lago dos Paturís',
      descricao:
        'Loteamento na margem do Tietê com ampla área urbanizada e chácaras de lazer, que reúne ruas e espaços abertos aproveitados para caminhada e pedal nos fins de semana.',
    },
  ],
  ciclovias:
    'A malha cicloviária é modesta e concentrada em trechos da área urbana; boa parte do pedal e da corrida acontece nas vias de bairros residenciais e nas áreas de lazer próximas ao rio.',

  clima:
    'O clima é tropical de altitude, com verão quente e chuvoso (de novembro a março) e inverno mais seco e ameno. As temperaturas costumam ser elevadas no auge do verão, enquanto o período seco do meio do ano traz manhãs e noites mais frescas, típicas do interior paulista.',
  climaTreino:
    'Nos meses mais quentes e úmidos vale priorizar o início da manhã ou o fim da tarde, com hidratação reforçada; o inverno seco favorece o treino ao ar livre, exigindo atenção apenas ao tempo seco e às variações de temperatura ao longo do dia.',

  mobilidade:
    'Em posição central no estado, Pederneiras é servida pela SP-225 (Rodovia João Ribeiro de Barros) e pela SP-261, com acesso à Rodovia Marechal Rondon (SP-300), eixos que conectam a cidade a Bauru e Jaú. O transporte urbano é feito por ônibus, e o destaque logístico é o porto intermodal na Hidrovia Tietê-Paraná, que integra os modais hidroviário, ferroviário e rodoviário no escoamento de grãos.',

  corridas: [
    {
      nome: 'Festival de Atletismo do Parque Vale do Sol',
      descricao:
        'Evento de atletismo realizado no Parque Ecológico Vale do Sol, com provas em estilo cross country pelos gramados do parque, divididas por categorias de idade e distâncias variadas.',
    },
  ],
  culturaEsportiva:
    'A cultura esportiva pederneirense aproveita as áreas verdes e a orla do rio Tietê para caminhada e corrida, com o Parque Vale do Sol como ponto de encontro de quem treina ao ar livre e de eventos de atletismo da cidade.',
  academias:
    'A oferta é formada principalmente por academias de musculação e estúdios de treino funcional espalhados pelos bairros centrais e residenciais, com porte compatível com uma cidade média do interior paulista.',

  destaquesFitness: [
    'Parque Ecológico Vale do Sol como principal espaço de corrida, caminhada e eventos de atletismo.',
    'Orla do rio Tietê (Prainha Municipal) para atividade ao ar livre e contemplação.',
    'Clima tropical de altitude, com inverno seco favorável ao treino ao ar livre.',
    'Cidade do agronegócio e da indústria, com porto intermodal na Hidrovia Tietê-Paraná.',
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
    'Cidade média do centro-oeste paulista, à beira do Tietê, Pederneiras combina áreas verdes, orla fluvial e um clima que favorece o treino ao ar livre boa parte do ano. Um personal trainer ajuda a aproveitar esses espaços com um plano consistente, ajustando horários ao calor do verão e mantendo a regularidade ao longo das estações.',

  vizinhas: ['bauru-sp', 'jau-sp'],

  fontes: [
    { nome: 'IBGE Cidades — Pederneiras', url: 'https://cidades.ibge.gov.br/brasil/sp/pederneiras/panorama' },
    { nome: 'Prefeitura de Pederneiras', url: 'https://www.pederneiras.sp.gov.br/' },
    { nome: 'Atlas Brasil — IDHM', url: 'https://www.atlasbrasil.org.br/' },
  ],
  atualizadoEm: '2026-06-29',
};
