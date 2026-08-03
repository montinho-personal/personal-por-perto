import type { Cidade } from '../../lib/types';

export const cidade: Cidade = {
  slug: 'encantado-rs',
  nome: 'Encantado',
  uf: 'RS',
  estado: 'Rio Grande do Sul',
  estadoSlug: 'rio-grande-do-sul',
  regiao: 'Sul',
  gentilico: 'encantadense',
  tipo: 'cidade',

  populacao: 22962,
  populacaoAno: 2022,
  idhm: 0.767,
  idhmClasse: 'alto',
  altitudeM: 44,

  resumoEconomico:
    'Polo do Vale do Taquari de colonização italiana, Encantado tem economia forte para o seu porte: serviços e indústria respondem pela maior parte da riqueza, puxados pela cooperativa Dália Alimentos — a maior empresa da cidade —, e o PIB per capita supera os R$ 60 mil. Desde 2022, o Cristo Protetor, maior estátua de Cristo do mundo com seus 43,5 metros, projetou a cidade no mapa do turismo religioso brasileiro.',

  mercado:
    'A cidade cresceu quase 12% em população na última década — na contramão da região — e o mercado de bem-estar acompanha: academias e personal trainers atendem um público de renda industrial estável, e o morro do Cristo virou cenário de caminhada e pedal com desnível de verdade.',

  bairrosNobres: ['Centro', 'Jardim da Fonte', 'Santo Antão', 'Planalto'],
  bairrosPopulares: ['Navegantes', 'Lambari', 'Barra do Jacaré', 'Moura'],

  parques: [
    {
      nome: 'Complexo do Cristo Protetor',
      descricao:
        'No alto do morro das Antenas, o santuário do maior Cristo do mundo (43,5 m) atrai visitantes de todo o país — e a subida ao complexo virou percurso clássico de caminhada, corrida em subida e ciclismo dos moradores.',
    },
    {
      nome: 'Orla do rio Taquari',
      descricao:
        'As margens do Taquari oferecem trechos planos para caminhada e pedal, com o vale como paisagem — contraponto de baixa altitude às subidas do morro do Cristo.',
    },
    {
      nome: 'Praças centrais',
      descricao:
        'As praças do centro, herança do traçado da imigração italiana, concentram caminhada, alongamento e a vida comunitária da cidade.',
    },
  ],
  ciclovias:
    'O ciclismo de estrada é forte no Vale do Taquari, com rotas entre os municípios vizinhos e a subida ao Cristo Protetor como desafio local; a malha cicloviária urbana ainda é limitada.',

  clima:
    'Clima subtropical úmido, com verões quentes, invernos frios com formação de neblina no vale e chuvas bem distribuídas o ano todo.',
  climaTreino:
    'No verão, treina-se cedo ou no fim de tarde; no inverno, o meio do dia é a janela mais confortável — e a academia coberta é o plano B dos dias de chuva e frio.',

  mobilidade:
    'Encantado se conecta pela ERS-129 aos demais municípios do Vale do Taquari, com Lajeado e Estrela a cerca de meia hora — na prática, um mercado regional integrado de serviços e treino.',

  corridas: [
    {
      nome: 'Provas do Vale do Taquari',
      descricao:
        'O calendário regional de corridas de rua circula pelos municípios do vale, com percursos de 5 km e 10 km — e a subida ao Cristo Protetor entra em desafios e treinos de montanha.',
    },
  ],
  culturaEsportiva:
    'A herança italiana se traduz em vida comunitária ativa, e o esporte cresceu junto com o turismo religioso: caminhada e pedal até o Cristo, corrida de rua no vale e academias movimentadas no centro.',
  academias:
    'A oferta reúne academias de musculação e studios no centro e nos bairros, com personal trainers atendendo também em condomínios e ao ar livre — do plano da orla do Taquari à subida do morro do Cristo.',

  destaquesFitness: [
    'Subida ao Cristo Protetor como treino de montanha com recompensa no topo.',
    'Economia industrial estável que sustenta a demanda por treino orientado.',
    'Rotas de ciclismo pelo Vale do Taquari.',
    'Crescimento populacional acima da média regional, com mercado em expansão.',
  ],

  precos: {
    avulsaMin: 55,
    avulsaMax: 130,
    mensalMin: 280,
    mensalMax: 760,
    onlineMin: 130,
    onlineMax: 380,
  },

  conclusao:
    'Com o maior Cristo do mundo no alto do morro e uma economia forte no vale, Encantado une turismo religioso, herança italiana e um mercado de treino em crescimento. Um personal trainer transforma o desnível da cidade em condicionamento — e a rotina do vale em constância.',

  vizinhas: ['lajeado-rs', 'estrela-rs', 'bento-goncalves-rs'],

  fontes: [
    { nome: 'IBGE Cidades — Encantado', url: 'https://cidades.ibge.gov.br/brasil/rs/encantado/panorama' },
    { nome: 'Prefeitura de Encantado', url: 'https://encantado.rs.gov.br/' },
    { nome: 'Cristo Protetor de Encantado', url: 'https://cristoencantado.com.br/' },
  ],
  atualizadoEm: '2026-08-03',
};
