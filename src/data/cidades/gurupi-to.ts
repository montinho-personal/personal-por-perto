import type { Cidade } from '../../lib/types';

export const cidade: Cidade = {
  slug: 'gurupi-to',
  nome: 'Gurupi',
  uf: 'TO',
  estado: 'Tocantins',
  estadoSlug: 'tocantins',
  regiao: 'Norte',
  gentilico: 'gurupiense',
  tipo: 'cidade',

  populacao: 85125,
  populacaoAno: 2022,
  idhm: 0.759,
  idhmClasse: 'médio',
  altitudeM: 287,

  resumoEconomico:
    'Terceira maior cidade do Tocantins, Gurupi fica no sul do estado e se firmou como o principal polo regional de comércio e serviços de toda a região sul tocantinense. Cortada pela BR-153, a Belém–Brasília, a cidade tem economia puxada pelo agronegócio — soja, grãos e pecuária — e por um parque agroindustrial em expansão, atraído por incentivos fiscais e doações de terra. É também um forte polo universitário, com a Universidade Federal do Tocantins (UFT) e a Universidade de Gurupi (UnirG).',

  mercado:
    'A combinação de agronegócio aquecido com um grande público universitário cria em Gurupi uma demanda consistente por treino e bem-estar. A população jovem ligada à UFT e à UnirG, somada à classe ligada ao agro, sustenta um mercado de academias e personal trainers em uma cidade média que concentra os serviços de todo o sul do Tocantins.',

  bairrosNobres: ['Centro', 'Vila Nova', 'Jardim Sevilha', 'Setor Bela Vista'],
  bairrosPopulares: ['Sol Nascente', 'Cidade Industrial', 'Campo Bello', 'Santa Rita'],

  parques: [
    {
      nome: 'Parque Mutuca',
      descricao:
        'Cartão-postal de Gurupi e um dos espaços mais queridos pelos moradores para descansar ao ar livre e se exercitar, com área verde preservada em torno do córrego Mutuca. Passou por projeto de revitalização e modernização.',
    },
    {
      nome: 'Parque Nascente do Mutuca',
      descricao:
        'Novo parque ligado à recuperação das nascentes do córrego Mutuca, integrando bairros da região e criando mais espaço público para caminhada e lazer ativo.',
    },
  ],
  ciclovias:
    'A cidade tem topografia plana e malha viária larga, com vias estruturantes como a Via Leste-Oeste em implantação, condições favoráveis para deslocamentos a pé e de bicicleta no dia a dia.',

  clima:
    'O clima é tropical com estação seca marcante (Aw de Köppen), típico do Cerrado do sul do Tocantins. A temperatura média anual gira em torno de 27 °C, com calor o ano inteiro: a estação chuvosa vai de outubro a abril e a seca, bem definida, de maio a setembro. É uma cidade muito quente e, na seca, com ar bastante seco.',
  climaTreino:
    'Pelo calor forte e pela baixa umidade na seca, o treino ao ar livre rende mais no começo da manhã ou no fim da tarde, sempre com atenção redobrada à hidratação e à proteção solar — especialmente entre maio e setembro, quando o tempo seco do Cerrado se acentua.',

  mobilidade:
    'Gurupi é cortada pela BR-153, a rodovia Belém–Brasília, principal eixo do agronegócio e da logística do estado, o que reforça seu papel de entroncamento regional. A cidade tem traçado plano, vias largas e transporte por ônibus, além de fácil acesso às rodovias estaduais que ligam o sul do Tocantins.',

  corridas: [
    {
      nome: 'Circuito Sesc de Corridas',
      descricao:
        'Etapa em Gurupi de um dos maiores circuitos de corrida de rua do país, que mobiliza milhares de atletas pelo Brasil.',
    },
    {
      nome: 'Corrida de rua na orla / Beco do Pescador',
      descricao:
        'Provas de corrida de rua realizadas em conjunto com eventos esportivos da cidade, como torneios de caiaque, reunindo a comunidade em torno do esporte ao ar livre.',
    },
  ],
  culturaEsportiva:
    'Como polo regional do sul do Tocantins, Gurupi concentra a vida esportiva de uma área ampla, com forte presença do público jovem universitário. O Parque Mutuca funciona como ponto de encontro para caminhada e exercício, e o calendário local inclui corridas de rua e esportes ao ar livre.',
  academias:
    'A oferta de academias acompanha o porte de polo regional da cidade, atendendo tanto o público universitário da UFT e da UnirG quanto a classe ligada ao agronegócio. Os parques e as vias planas complementam essa estrutura com espaço para treino ao ar livre.',

  destaquesFitness: [
    'Terceira maior cidade do Tocantins e polo regional de serviços do sul do estado.',
    'Forte público universitário (UFT e UnirG) sustentando demanda por treino e bem-estar.',
    'Parque Mutuca e Parque Nascente do Mutuca como principais espaços de exercício ao ar livre.',
    'Cidade plana, cortada pela BR-153, favorável a caminhada e bicicleta no dia a dia.',
  ],

  precos: {
    avulsaMin: 45,
    avulsaMax: 110,
    mensalMin: 240,
    mensalMax: 660,
    onlineMin: 110,
    onlineMax: 340,
  },

  conclusao:
    'Polo do agronegócio e da educação no sul do Tocantins, Gurupi combina público universitário, economia aquecida e bons espaços ao ar livre como o Parque Mutuca. Um personal trainer ajuda a montar um plano sob medida e a treinar com segurança mesmo no calor intenso e no ar seco do Cerrado tocantinense.',

  vizinhas: ['palmas-to', 'araguaina-to'],

  fontes: [
    { nome: 'IBGE Cidades — Gurupi', url: 'https://cidades.ibge.gov.br/brasil/to/gurupi/panorama' },
    { nome: 'Prefeitura de Gurupi', url: 'https://gurupi.to.gov.br/' },
    { nome: 'Atlas Brasil — IDHM', url: 'https://www.atlasbrasil.org.br/' },
  ],
  atualizadoEm: '2026-06-29',
};
