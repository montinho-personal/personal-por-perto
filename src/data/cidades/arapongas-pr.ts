import type { Cidade } from '../../lib/types';

export const cidade: Cidade = {
  slug: 'arapongas-pr',
  nome: 'Arapongas',
  uf: 'PR',
  estado: 'Paraná',
  estadoSlug: 'parana',
  regiao: 'Sul',
  gentilico: 'araponguense',
  tipo: 'cidade',

  populacao: 119138,
  populacaoAno: 2022,
  idhm: 0.748,
  idhmClasse: 'alto',
  altitudeM: 729,

  resumoEconomico:
    'No norte do Paraná, Arapongas é conhecida como a "Cidade dos Pássaros" — praticamente todas as ruas levam nomes de aves — e como um dos maiores polos moveleiros do país. O setor de móveis reúne mais de uma centena de indústrias e responde por boa parte dos empregos do município, ao lado do agronegócio. A vocação industrial se mostra em feiras como a Movelpar, uma das principais do setor moveleiro nacional, realizada no Expoara.',

  mercado:
    'Cidade média e industrial, Arapongas tem um mercado fitness movido por uma população operária e de classe média que busca academias de bairro e treino domiciliar. Convivem unidades de redes e academias locais com estúdios de funcional e musculação, e há espaço crescente para o personal trainer que atende em casa, em condomínios ou ao ar livre nos parques municipais.',

  bairrosNobres: ['Centro', 'Jardim Bandeirantes', 'Jardim Pinheiros', 'Vila Industrial'],
  bairrosPopulares: ['Jardim Tropical', 'Conjunto Flamingos', 'Jardim Petrópolis', 'Jardim Universitário'],

  parques: [
    {
      nome: 'Parque dos Pássaros',
      descricao:
        'Complexo ambiental de cerca de 45 mil m² inaugurado em 2000, com três lagos, espécies de aves aquáticas, pista de skate e aproximadamente 1.800 m de trilhas para caminhada — o principal ponto de treino ao ar livre da cidade.',
    },
    {
      nome: 'Praça Júlio Junqueira',
      descricao:
        'Praça central que abriga o monumento à araponga, símbolo da cidade, com espaço arborizado no coração de Arapongas para caminhada e atividade leve.',
    },
  ],
  ciclovias:
    'A cidade tem ciclovias e ciclofaixas em avenidas e no entorno de parques, integrando o deslocamento ao lazer ativo em um traçado urbano plano e arborizado, com ruas batizadas com nomes de pássaros.',

  clima:
    'O clima é subtropical, com verões quentes e chuvosos e invernos amenos com geadas ocasionais. O Trópico de Capricórnio cruza o território do município junto à BR-369.',
  climaTreino:
    'O treino ao ar livre é confortável na maior parte do ano. No verão, vale priorizar as manhãs ou o início da noite para fugir do calor e das chuvas de fim de tarde; no inverno, as manhãs ensolaradas são as mais agradáveis.',

  mobilidade:
    'Arapongas é cortada pela BR-369, eixo que liga a cidade a Apucarana, Londrina e ao restante do norte paranaense, com fácil acesso ao polo industrial e ao Expoara. A malha urbana é plana e bem sinalizada, com placas que trazem o nome e a imagem das aves que batizam cada rua.',

  corridas: [
    {
      nome: 'Corrida de Rua Cidade dos Pássaros',
      descricao:
        'Prova organizada pela Prefeitura com percursos de 4 km e 8 km e opção de caminhada de 3 km; a 3ª edição reuniu cerca de 1.500 atletas de Arapongas e de várias cidades do Paraná.',
    },
  ],
  culturaEsportiva:
    'A cultura esportiva local cresce em torno da corrida de rua, com provas que mobilizam assessorias e atletas da região, e do treino comunitário nos parques. A Corrida Cidade dos Pássaros virou o principal evento pedestre do calendário municipal.',
  academias:
    'A oferta reúne academias de bairro e unidades de redes, além de estúdios de musculação e treino funcional. O perfil industrial e de classe média sustenta uma demanda constante por planos acessíveis e por atendimento domiciliar.',

  destaquesFitness: [
    'Parque dos Pássaros como principal espaço de caminhada e corrida ao ar livre.',
    'Corrida Cidade dos Pássaros movimentando a cena de corrida de rua local.',
    'Traçado urbano plano e arborizado, com ruas de nomes de aves, favorável ao treino externo.',
    'Cidade industrial moveleira, com forte espaço para academias de bairro e personal domiciliar.',
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
    'Cidade industrial, plana e marcada pela identidade das aves, Arapongas combina parques municipais, corridas de rua em ascensão e uma rede de academias de bairro. Um personal trainer ajuda a transformar essa estrutura em um plano de treino consistente, ajustado ao seu objetivo e à sua rotina.',

  vizinhas: ['apucarana-pr', 'londrina-pr', 'maringa-pr'],

  fontes: [
    { nome: 'IBGE Cidades — Arapongas', url: 'https://cidades.ibge.gov.br/brasil/pr/arapongas/panorama' },
    { nome: 'Prefeitura de Arapongas', url: 'https://www.arapongas.pr.gov.br/' },
    { nome: 'Atlas Brasil — IDHM', url: 'https://www.atlasbrasil.org.br/' },
  ],
  atualizadoEm: '2026-06-29',
};
