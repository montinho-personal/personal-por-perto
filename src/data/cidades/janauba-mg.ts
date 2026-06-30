import type { Cidade } from '../../lib/types';

export const cidade: Cidade = {
  slug: 'janauba-mg',
  nome: 'Janaúba',
  uf: 'MG',
  estado: 'Minas Gerais',
  estadoSlug: 'minas-gerais',
  regiao: 'Sudeste',
  gentilico: 'janaubense',
  tipo: 'cidade',

  populacao: 70699,
  populacaoAno: 2022,
  idhm: 0.696,
  idhmClasse: 'médio',
  altitudeM: 692,

  resumoEconomico:
    'Janaúba é um dos polos do norte de Minas, com economia apoiada na fruticultura irrigada — banana, manga, limão e mamão cultivados sob irrigação nos perímetros do vale do Gorutuba e da região da Jaíba. O agronegócio convive com um comércio regional forte e com a presença de instituições de ensino superior, como o campus da UFVJM e polos de ensino a distância, o que dá à cidade papel de centro de serviços para os municípios vizinhos.',

  mercado:
    'Cidade média com comércio ativo e público universitário, Janaúba tem demanda por academias, musculação e treino funcional, somada a uma rotina de caminhada e corrida nas avenidas e na orla do Gorutuba. O perfil de polo regional cria espaço para personal trainers que atendem tanto o centro quanto os bairros em expansão.',

  bairrosNobres: ['Centro', 'Doutor Renato', 'Promissão', 'Bela Vista'],
  bairrosPopulares: ['Caiçara', 'Frei Cassiano', 'Santo Antônio', 'São José'],

  parques: [
    {
      nome: 'Parque Ecológico do Gorutuba',
      descricao:
        'Área verde às margens do rio Gorutuba, usada para caminhada e atividades ao ar livre, próxima à orla da Beira Rio.',
    },
    {
      nome: 'Pista de Cooper da Avenida Ecológica',
      descricao:
        'Trecho tradicional para caminhada e corrida ao longo da Avenida Ecológica, um dos principais pontos de treino da cidade.',
    },
    {
      nome: 'Orla da Beira Rio (Avenida Prefeito Edilson Brandão)',
      descricao:
        'Percurso à beira do rio Gorutuba, com calçadão usado para caminhada, corrida e exercícios ao ar livre.',
    },
  ],
  ciclovias:
    'A cidade tem trechos para circulação de bicicletas ao longo de avenidas como a Ecológica e a orla do Gorutuba; a extensão total não é divulgada em fonte oficial.',

  clima:
    'O clima é semiárido quente, típico do norte de Minas, com temperaturas elevadas na maior parte do ano, chuvas concentradas no verão e baixa umidade no período seco (inverno).',
  climaTreino:
    'O calor e a baixa umidade pedem treino ao ar livre logo cedo ou no fim da tarde, com hidratação reforçada e proteção solar — os horários mais frescos na pista da Avenida Ecológica e na orla do Gorutuba rendem mais.',

  mobilidade:
    'Janaúba é cortada pela BR-122, que liga a cidade a Montes Claros e à divisa com a Bahia, sendo o principal eixo de acesso e de escoamento da produção agrícola regional; a malha urbana se organiza em torno das avenidas centrais e da orla do Gorutuba.',

  corridas: [
    {
      nome: 'Corridas de rua em Janaúba',
      descricao:
        'A cidade recebe provas de corrida de rua ao longo do ano, com largadas e percursos pelas avenidas centrais e pela orla do Gorutuba.',
    },
    {
      nome: 'Caminhadas e eventos esportivos municipais',
      descricao:
        'Caminhadas e ações de incentivo à atividade física são promovidas em datas comemorativas e campanhas de saúde, reunindo praticantes locais.',
    },
  ],
  culturaEsportiva:
    'A rotina ativa de Janaúba gira em torno da pista de Cooper da Avenida Ecológica e da orla do Gorutuba, pontos de encontro de quem caminha e corre. O público universitário e o clima quente favorecem o treino orientado em horários estratégicos.',
  academias:
    'A oferta acompanha o porte de cidade média e o público universitário, com academias de musculação, estúdios e treino funcional, complementada pelos espaços ao ar livre na Avenida Ecológica e na orla do rio Gorutuba.',

  destaquesFitness: [
    'Polo regional do norte de Minas, com comércio forte e público universitário (UFVJM e polos EAD).',
    'Pista de Cooper na Avenida Ecológica e orla do Gorutuba para treino ao ar livre.',
    'Economia do agro irrigado (banana, manga, limão), que sustenta a renda regional.',
    'Clima semiárido quente, que exige hidratação reforçada e horários estratégicos de treino.',
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
    'Polo do norte mineiro movido pela fruticultura irrigada e pelo comércio regional, Janaúba reúne público universitário e espaços ao ar livre como a Avenida Ecológica e a orla do Gorutuba. Um personal trainer ajuda a aproveitar esses percursos com método, ajustando carga, horários e hidratação ao clima semiárido quente da região.',

  vizinhas: ['montes-claros-mg', 'teofilo-otoni-mg'],

  fontes: [
    { nome: 'IBGE Cidades — Janaúba', url: 'https://cidades.ibge.gov.br/brasil/mg/janauba/panorama' },
    { nome: 'Prefeitura de Janaúba', url: 'https://janauba.mg.gov.br/' },
    { nome: 'Atlas Brasil — IDHM', url: 'https://www.atlasbrasil.org.br/' },
  ],
  atualizadoEm: '2026-06-29',
};
