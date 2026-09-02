import type { Cidade } from '../../lib/types';

export const cidade: Cidade = {
  slug: 'xanxere-sc',
  nome: 'Xanxerê',
  uf: 'SC',
  estado: 'Santa Catarina',
  estadoSlug: 'santa-catarina',
  regiao: 'Sul',
  gentilico: 'xanxerense',
  tipo: 'cidade',

  populacao: 51607,
  populacaoAno: 2022,
  idhm: 0.775,
  idhmClasse: 'alto',
  altitudeM: 800,

  resumoEconomico:
    'Polo regional do oeste catarinense, Xanxerê tem economia ancorada no agronegócio e na agroindústria — produção de milho (a cidade é conhecida como "Capital do Milho"), soja, trigo e feijão, somada à criação de aves e suínos. Comércio, serviços e saúde reforçam seu papel de referência para os municípios da microrregião. A Terra Indígena Xapecó, do povo Kaingang, fica a cerca de 30 km da cidade.',

  mercado:
    'O mercado fitness acompanha o porte de cidade média e o papel de polo regional, com academias de bairro, estúdios de pilates e funcional e atuação de personal trainers. O inverno frio do oeste catarinense aumenta a procura por treino indoor em boa parte do ano.',

  bairrosNobres: ['Centro', 'Veneza', 'Jardim Tarumã', 'Bela Vista'],
  bairrosPopulares: ['Aparecida', 'São Pedro', 'Bortolon', 'Monte Castelo'],

  parques: [
    {
      nome: 'Praça Tiradentes',
      descricao:
        'Praça central da cidade, ponto de encontro e largada de eventos esportivos, como etapas de corrida de rua.',
    },
    {
      nome: 'Bairro dos Esportes',
      descricao:
        'Região com concentração de estruturas esportivas do município, voltada à prática de atividades físicas e ao esporte amador.',
    },
    {
      nome: 'Estádio Municipal Josué Annoni',
      descricao:
        'Espaço usado para treinos coletivos, incluindo encontros da Associação dos Corredores de Rua de Xanxerê (ACORXAN).',
    },
  ],
  ciclovias:
    'A cidade conta com trechos de ciclovia integrados às principais vias urbanas; a extensão total não é divulgada em fonte oficial consolidada.',

  clima:
    'O clima é subtropical úmido, típico do oeste catarinense, com verões quentes e invernos frios — quedas de temperatura para a casa de 0 °C a 10 °C e ocorrência de geadas são comuns na estação fria.',
  climaTreino:
    'No verão, vale priorizar horários frescos e boa hidratação; no inverno, o aquecimento prolongado e uma alternativa indoor ajudam a manter a constância diante do frio e das geadas.',

  mobilidade:
    'A BR-282, recentemente duplicada em parte do trecho, é o principal eixo de acesso, conectando Xanxerê ao litoral e ao restante do oeste de SC, além da ligação com Chapecó. O deslocamento interno é feito majoritariamente por carro e ônibus.',

  corridas: [
    {
      nome: 'Corrida Xanxerê Cidade do Coração',
      descricao:
        'Prova de 5 km organizada pela Associação dos Corredores de Rua de Xanxerê (ACORXAN), com largada na região central da cidade.',
    },
    {
      nome: 'Circuito de Corridas Unimed Santa Catarina (etapa Xanxerê)',
      descricao:
        'Etapa local do maior circuito de corrida do estado, com provas de 5 km e 10 km e largada na área central.',
    },
  ],
  culturaEsportiva:
    'A cena de corrida de rua é organizada e ativa, com a ACORXAN promovendo treinos e provas, além de etapas de circuitos estaduais. O esporte amador encontra apoio nas estruturas públicas e no engajamento das associações locais.',
  academias:
    'O parque de academias atende à demanda de cidade média, com unidades de bairro e estúdios de pilates e funcional, complementado pela atuação de personal trainers e pela infraestrutura esportiva pública.',

  destaquesFitness: [
    'Cerca de 52 mil habitantes e IDHM alto — base sólida para serviços de bem-estar.',
    'Polo regional do oeste catarinense, com agroindústria forte (milho, aves e suínos).',
    'Cena de corrida de rua organizada, com a ACORXAN e etapas de circuitos estaduais.',
    'Invernos frios, com geadas, elevam a demanda por treino indoor e periodização sazonal.',
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
    'Polo do oeste catarinense com IDHM alto e cena esportiva organizada, Xanxerê reúne boas condições para treinar o ano todo. Um personal trainer ajuda a periodizar o treino conforme as estações — do verão quente ao inverno frio com geadas — e a aproveitar a estrutura local de corrida de rua.',

  vizinhas: ['chapeco-sc', 'concordia-sc'],

  capaArte: {
    src: '/capas-cidade/xanxere-sc.webp',
    w: 1200,
    h: 1200,
    alt: 'Personal trainer em Xanxerê (SC) em arte com a igreja matriz e a praça central da cidade, com o treino em primeiro plano — Personal por Perto',
    legenda: 'Treino personalizado em Xanxerê: foco, disciplina e constância no oeste catarinense.',
  },
  fontes: [
    { nome: 'IBGE Cidades — Xanxerê', url: 'https://cidades.ibge.gov.br/brasil/sc/xanxere/panorama' },
    { nome: 'Prefeitura de Xanxerê', url: 'https://xanxere.sc.gov.br/' },
    { nome: 'Atlas Brasil — IDHM', url: 'https://www.atlasbrasil.org.br/' },
  ],
  atualizadoEm: '2026-09-01',
};
