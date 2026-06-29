import type { Cidade } from '../../lib/types';

export const cidade: Cidade = {
  slug: 'campos-dos-goytacazes-rj',
  nome: 'Campos dos Goytacazes',
  uf: 'RJ',
  estado: 'Rio de Janeiro',
  estadoSlug: 'rio-de-janeiro',
  regiao: 'Sudeste',
  gentilico: 'campista',
  tipo: 'cidade',

  populacao: 483540,
  populacaoAno: 2022,
  idhm: 0.716,
  idhmClasse: 'alto',

  resumoEconomico:
    'Maior cidade do Norte Fluminense, Campos dos Goytacazes tem economia historicamente baseada no setor sucroalcooleiro (cana-de-açúcar e usinas) e, nas últimas décadas, fortemente impulsionada pelos royalties do petróleo da Bacia de Campos. Reúne comércio e serviços robustos, além de ser polo universitário e de saúde da região, às margens do rio Paraíba do Sul.',

  mercado:
    'A grande população e o polo universitário e de serviços sustentam uma ampla rede de academias e personal trainers, concentrados em bairros centrais valorizados como a Pelinca. A demanda regional atrai praticantes de toda a microrregião.',

  bairrosNobres: ['Parque Pelinca', 'Parque Tamandaré', 'Centro', 'Parque Califórnia'],
  bairrosPopulares: ['Parque Guarus', 'Jardim Carioca', 'Penha', 'Custodópolis'],

  parques: [
    {
      nome: 'Parque da Avenida Pelinca',
      descricao:
        'Praça-parque urbana no bairro nobre da Pelinca, ponto de caminhada, lazer e encontro de quem treina ao ar livre.',
    },
    {
      nome: 'Margens do rio Paraíba do Sul',
      descricao:
        'Área urbana à beira do maior rio da região, usada para caminhada e corrida no centro da cidade.',
    },
    {
      nome: 'Lagoa de Cima',
      descricao:
        'Área natural a sudoeste da cidade, procurada para corrida, trilha e ciclismo em meio à paisagem do baixo Paraíba.',
    },
  ],
  ciclovias:
    'Há iniciativas de mobilidade por bicicleta, como o projeto Bora de Bike; a extensão oficial de ciclovias ainda não é divulgada em fonte oficial.',

  clima:
    'O clima é tropical quente, em planície interiorana, com verões muito quentes e elevada amplitude térmica em algumas épocas.',
  climaTreino:
    'O calor intenso exige treino ao ar livre em horários amenos (cedo de manhã ou à noite) e atenção redobrada à hidratação.',

  mobilidade:
    'Campos é cortada pela BR-101 (eixo norte-sul) e pela BR-356, funcionando como importante entroncamento rodoviário do Norte Fluminense, com ligação ao Espírito Santo e à Bacia de Campos.',

  corridas: [
    {
      nome: 'Goitacá Run',
      descricao:
        'Corrida de rua local com percursos de 3 km, 5 km e 10 km, parte de um calendário esportivo ativo na cidade.',
    },
    {
      nome: 'Corrida Cores das Ruas',
      descricao:
        'Prova de rua que integra o calendário campista, ao lado de eventos como a Trilogia Urbana.',
    },
  ],
  culturaEsportiva:
    'Campos combina forte tradição futebolística regional com um calendário crescente de corridas de rua e de cicloturismo apoiado pela prefeitura.',
  academias:
    'A oferta acompanha o porte da cidade, com academias e estúdios premium concentrados na Pelinca, complementados pelas áreas verdes e pelas margens do Paraíba do Sul.',

  destaquesFitness: [
    'Maior mercado consumidor do Norte Fluminense (mais de 480 mil habitantes).',
    'Polo universitário que amplia o público jovem e fitness.',
    'Pelinca como hub de academias e estúdios premium.',
    'Lagoa de Cima para treino ao ar livre e trail.',
  ],

  precos: {
    avulsaMin: 65,
    avulsaMax: 160,
    mensalMin: 340,
    mensalMax: 920,
    onlineMin: 170,
    onlineMax: 430,
  },

  conclusao:
    'Maior cidade do Norte Fluminense, Campos dos Goytacazes tem mercado fitness amplo e calendário ativo de corrida. Um personal trainer ajuda a montar uma rotina que respeite o calor da planície e a aproveitar a Pelinca e a Lagoa de Cima com método.',

  vizinhas: ['macae-rj', 'cabo-frio-rj', 'vitoria-es'],

  fontes: [
    { nome: 'IBGE Cidades — Campos dos Goytacazes', url: 'https://cidades.ibge.gov.br/brasil/rj/campos-dos-goytacazes/panorama' },
    { nome: 'Prefeitura de Campos', url: 'https://www.campos.rj.gov.br/' },
    { nome: 'Atlas Brasil — IDHM', url: 'https://www.atlasbrasil.org.br/' },
  ],
  atualizadoEm: '2026-06-29',
};
