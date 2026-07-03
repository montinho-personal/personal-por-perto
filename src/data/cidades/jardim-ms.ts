import type { Cidade } from '../../lib/types';

export const cidade: Cidade = {
  slug: 'jardim-ms',
  nome: 'Jardim',
  uf: 'MS',
  estado: 'Mato Grosso do Sul',
  estadoSlug: 'mato-grosso-do-sul',
  regiao: 'Centro-Oeste',
  gentilico: 'jardinense',
  tipo: 'cidade',

  populacao: 23981,
  populacaoAno: 2022,
  idhm: 0.712,
  idhmClasse: 'alto',

  resumoEconomico:
    'No sudoeste de Mato Grosso do Sul, Jardim integra ao lado de Bonito e Bodoquena o Complexo Turístico da Serra da Bodoquena, e abriga atrativos que estão entre os mais procurados de toda a região: a flutuação do rio da Prata, a Lagoa Misteriosa — uma das cavernas alagadas mais profundas do Brasil e principal ponto de mergulho em água doce do país — e o Buraco das Araras, uma dolina gigante com colônia de araras-vermelhas. Fundada em 1946 por trabalhadores da rodovia que ligaria o Brasil ao Paraguai e emancipada de Bela Vista em 1953, a cidade também tem economia apoiada na pecuária de corte e na agricultura, tradicionais no sudoeste do estado.',

  mercado:
    'Cidade de porte pequeno, mas com fluxo constante de turistas atraídos pelo ecoturismo da região de Bonito, Jardim tem um mercado fitness ainda enxuto, concentrado em academias de bairro. A procura por personal trainer tende a vir de moradores que buscam treino regular e de profissionais do turismo, com interesse em preparo físico para caminhada, trilha e atividades na água.',

  bairrosNobres: ['Centro', 'Jardim Dom Bosco', 'Jardim Panorama'],
  bairrosPopulares: ['Cohab Aeroporto', 'Vila Brasil', 'Passo Velho', 'Santa Luzia'],

  parques: [
    {
      nome: 'Balneário Jardim Ecopark',
      descricao:
        'Às margens do rio da Prata, é o balneário de referência da cidade, com estrutura para flutuação, mergulho, slackline e vôlei e futebol de areia — espaço de lazer e atividade física ao ar livre para moradores e visitantes.',
    },
    {
      nome: 'Buraco das Araras',
      descricao:
        'Dolina gigante com cerca de 100 metros de profundidade e 500 metros de circunferência, percorrida por trilha com mirantes de onde se observam dezenas de casais de araras-vermelhas nas paredes de arenito.',
    },
    {
      nome: 'Lagoa Misteriosa',
      descricao:
        'Caverna alagada de profundidade ainda não totalmente mapeada, considerada um dos principais pontos de mergulho em água doce do Brasil; a visitação é sazonal, concentrada entre abril e setembro.',
    },
  ],
  ciclovias:
    'A malha cicloviária da cidade é modesta e não tem extensão divulgada em fonte oficial; o deslocamento de bicicleta e o treino ao ar livre acontecem principalmente nas ruas do núcleo urbano e no acesso aos balneários.',

  clima:
    'O clima é tropical, com verão quente e chuvoso e inverno mais seco e ameno, o mesmo padrão climático da serra da Bodoquena que caracteriza toda a região de Bonito.',
  climaTreino:
    'O calor e a umidade do verão pedem treino no início da manhã ou no fim da tarde, com hidratação reforçada; o inverno seco costuma ser a época mais favorável para caminhada, corrida e trilha ao ar livre.',

  mobilidade:
    'O acesso principal se dá pela MS-178 e pela MS-345, que liga Jardim a Bonito, distante cerca de 70 km; para quem vem de Campo Grande, a MS-345 asfaltada encurtou o trajeto pela rota via Anastácio e MS-419. A cidade é compacta, com deslocamentos urbanos curtos e transporte predominantemente por veículo próprio.',

  corridas: [
    {
      nome: 'Corrida Março Delas',
      descricao:
        'Prova organizada pela Casa da Mulher Jardinense com apoio de secretarias municipais, com largada na Praça Evandro Bazzo e categorias de corrida (5 km) e caminhada (3 km); reuniu cerca de 400 mulheres em sua segunda edição, em março.',
    },
  ],
  culturaEsportiva:
    'A cultura esportiva local é moldada pelo ecoturismo: flutuação em rios de águas cristalinas, trilhas até dolinas e grutas, e mergulho em caverna alagada fazem parte da rotina de visitantes e também de moradores que atuam como guias e condutores. A Corrida Março Delas, na Praça Evandro Bazzo, é o principal evento de corrida de rua do calendário da cidade.',
  academias:
    'A oferta de academias é pequena e concentrada em estabelecimentos de bairro, como a Academia MZ Fitness e a MS Fitness Academia, voltados a musculação e treino funcional para o público local.',

  destaquesFitness: [
    'Parte do Complexo Turístico da Serra da Bodoquena, ao lado de Bonito, com a flutuação do rio da Prata entre os passeios mais procurados da região.',
    'Lagoa Misteriosa, uma das cavernas alagadas mais profundas do Brasil e principal ponto de mergulho em água doce do país.',
    'Buraco das Araras, dolina gigante com trilha de mirantes e colônia de araras-vermelhas.',
    'Corrida Março Delas, na Praça Evandro Bazzo, reunindo centenas de mulheres em corrida e caminhada todo mês de março.',
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
    'Porta de entrada de alguns dos atrativos mais famosos da região de Bonito, Jardim combina rotina de cidade pequena do interior com um calendário intenso de ecoturismo. Um personal trainer ajuda morador e profissional do turismo a manter constância no treino, respeitando o calor do verão e aproveitando o inverno seco para atividades ao ar livre.',

  vizinhas: ['bonito-ms', 'aquidauana-ms', 'campo-grande-ms'],

  fontes: [
    { nome: 'IBGE Cidades — Jardim', url: 'https://cidades.ibge.gov.br/brasil/ms/jardim/panorama' },
    { nome: 'Prefeitura de Jardim', url: 'https://jardim.ms.gov.br/' },
    { nome: 'Atlas Brasil — IDHM', url: 'https://www.atlasbrasil.org.br/' },
  ],
  atualizadoEm: '2026-07-03',
};
