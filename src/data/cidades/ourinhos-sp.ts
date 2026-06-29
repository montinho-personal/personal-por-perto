import type { Cidade } from '../../lib/types';

export const cidade: Cidade = {
  slug: 'ourinhos-sp',
  nome: 'Ourinhos',
  uf: 'SP',
  estado: 'São Paulo',
  estadoSlug: 'sao-paulo',
  regiao: 'Sudeste',
  gentilico: 'ourinhense',
  tipo: 'cidade',

  populacao: 103970,
  populacaoAno: 2022,
  idhm: 0.778,
  idhmClasse: 'alto',
  altitudeM: 483,

  resumoEconomico:
    'Polo regional do sudoeste paulista, às margens do rio Paranapanema, na divisa com o Paraná, Ourinhos concentra comércio, serviços e indústria que atendem dezenas de municípios da região e do norte pioneiro paranaense. A cidade nasceu e cresceu como entroncamento ferroviário e mantém forte vocação logística e agroindustrial, com um centro urbano que exerce papel de referência para toda a microrregião.',

  mercado:
    'O mercado fitness acompanha o porte de cidade média do interior, com redes nacionais como a Smart Fit, academias de bairro e estúdios de treinamento personalizado, além de cobertura de plataformas de benefícios. A cena de corrida de rua é ativa, puxada por provas organizadas pela Prefeitura e por grupos locais, o que sustenta a procura por acompanhamento profissional.',

  bairrosNobres: ['Vila Sândano', 'Vila Christoni', 'Vila Margarida', 'Jardim Matilde'],
  bairrosPopulares: ['Vila São Luiz', 'Vila Moraes', 'Jardim Itamaraty', 'Conjunto Habitacional Caiuá'],

  parques: [
    {
      nome: 'Parque Ecológico Bióloga Tânia Mara Netto Silva',
      descricao:
        'Remanescente de Mata Atlântica junto ao complexo da FAPI, com trilhas, área verde e lago — ponto de encontro de quem busca caminhada e atividade ao ar livre.',
    },
    {
      nome: 'Parque Olavo Ferreira de Sá',
      descricao:
        'Área de lazer arborizada próxima à Vila Christoni, usada para caminhadas e exercícios no dia a dia.',
    },
    {
      nome: 'Orla do rio Paranapanema',
      descricao:
        'A faixa às margens do Paranapanema oferece espaços para caminhada e contato com a natureza, em uma das principais paisagens da cidade.',
    },
  ],
  ciclovias:
    'Ourinhos conta com trechos de ciclovia e ciclofaixas em avenidas e áreas de lazer, integrando deslocamento e atividade física no perímetro urbano.',

  clima:
    'O clima é tropical, com inverno seco e ameno e verão quente e chuvoso (médias anuais em torno de 22 a 23 °C).',
  climaTreino:
    'O inverno seco favorece o treino ao ar livre; no verão, vale evitar o meio do dia por causa do calor e das pancadas de chuva à tarde.',

  mobilidade:
    'Histórico entroncamento rodoferroviário do sudoeste paulista, Ourinhos é cortada pela Rodovia Raposo Tavares (SP-270), que liga a cidade à capital e ao interior, e fica na divisa com o Paraná, transpondo o rio Paranapanema rumo ao norte pioneiro paranaense.',

  corridas: [
    {
      nome: 'Corrida Noturna de Ourinhos',
      descricao:
        'Prova de rua de cerca de 6 km organizada pela Prefeitura, com largada e chegada na Praça Melo Peixoto; reuniu mais de mil inscritos e atraiu competidores de mais de um estado em edições recentes.',
    },
    {
      nome: 'Provas e circuitos regionais',
      descricao:
        'A cidade recebe corridas de rua e etapas regionais ao longo do ano, sustentadas por assessorias e grupos de corrida locais.',
    },
  ],
  culturaEsportiva:
    'Ourinhos tem cena de corrida de rua aquecida, com provas municipais como a Corrida Noturna e grupos de treino ativos, além de tradição no futebol e no uso das áreas verdes da cidade. O papel de polo regional concentra estrutura esportiva que atende também os municípios vizinhos.',
  academias:
    'A oferta reúne redes nacionais (como a Smart Fit), academias de bairro e estúdios de treinamento personalizado, com planos corporativos e cobertura de plataformas de benefícios.',

  destaquesFitness: [
    'Parque Ecológico Bióloga Tânia Mara Netto Silva, com trilhas em remanescente de Mata Atlântica.',
    'Corrida Noturna de Ourinhos como principal prova de rua da cidade.',
    'Redes nacionais (Smart Fit) e estúdios locais com planos corporativos.',
    'Orla do rio Paranapanema como cenário para caminhada e atividade ao ar livre.',
  ],

  precos: {
    avulsaMin: 55,
    avulsaMax: 120,
    mensalMin: 270,
    mensalMax: 720,
    onlineMin: 130,
    onlineMax: 360,
  },

  conclusao:
    'Polo regional do sudoeste paulista às margens do Paranapanema, Ourinhos combina estrutura de cidade média com boas opções para treinar, do Parque Ecológico às provas de rua. Um personal trainer ajuda a aproveitar tudo isso com método, da musculação à preparação para a Corrida Noturna e demais provas locais.',

  vizinhas: ['assis-sp', 'marilia-sp', 'bauru-sp'],

  fontes: [
    { nome: 'IBGE Cidades — Ourinhos', url: 'https://cidades.ibge.gov.br/brasil/sp/ourinhos/panorama' },
    { nome: 'Prefeitura de Ourinhos', url: 'https://www.ourinhos.sp.gov.br/' },
    { nome: 'Atlas Brasil — IDHM', url: 'https://www.atlasbrasil.org.br/' },
  ],
  atualizadoEm: '2026-06-29',
};
