import type { Cidade } from '../../lib/types';

export const cidade: Cidade = {
  slug: 'sao-lourenco-mg',
  nome: 'São Lourenço',
  uf: 'MG',
  estado: 'Minas Gerais',
  estadoSlug: 'minas-gerais',
  regiao: 'Sudeste',
  gentilico: 'são-lourenciano',
  tipo: 'cidade',

  populacao: 44798,
  populacaoAno: 2022,
  idhm: 0.759,
  idhmClasse: 'alto',
  altitudeM: 875,

  resumoEconomico:
    'No Sul de Minas, aos pés da Serra da Mantiqueira e às margens do Rio Verde, São Lourenço é uma das estâncias hidrominerais mais conhecidas do Brasil e peça central do Circuito das Águas de Minas Gerais. A economia gira em torno do turismo de saúde e bem-estar e da exploração e do envase de águas minerais, atividades que sustentam a rede de hotéis, pousadas, restaurantes e comércio. O fluxo de visitantes em busca das fontes, do clima ameno e do descanso é o principal motor da cidade.',

  mercado:
    'Por ser uma cidade de porte médio com forte vocação turística e de bem-estar, São Lourenço reúne um público que valoriza atividade física, saúde e qualidade de vida — perfil que favorece a procura por personal trainers. A demanda vem tanto de moradores quanto de visitantes em estadias mais longas, e tende a se concentrar em treino ao ar livre, caminhada e corrida, aproveitando o clima de altitude e os espaços verdes da cidade.',

  bairrosNobres: ['Centro', 'Carioca', 'Vila Nova', 'Federal'],
  bairrosPopulares: ['Vila Carneiro', 'Cohab', 'João de Deus (Barreiro)', 'Lagoa Seca'],

  parques: [
    {
      nome: 'Parque das Águas',
      descricao:
        'O maior parque do Circuito das Águas e cartão-postal da cidade, com nove fontes de água mineral, lago, jardins e amplas alamedas arborizadas. Os circuitos internos — entre eles um voltado à saúde, com pista de caminhada, espaço para corrida e equipamentos — fazem do parque o principal palco de atividade física ao ar livre em São Lourenço.',
    },
    {
      nome: 'Lago do Parque das Águas',
      descricao:
        'O grande lago dentro do parque, cercado por trilhas e calçadões, é um dos trechos mais procurados para caminhada e corrida tranquila, com vista para a Serra da Mantiqueira.',
    },
    {
      nome: 'Orla do Rio Verde e Serra da Mantiqueira',
      descricao:
        'O Rio Verde corta a cidade e o entorno da Mantiqueira oferece estradas e percursos com ladeiras e subidas, opções de treino ao ar livre para quem busca relevo e contato com a natureza de altitude.',
    },
  ],
  ciclovias:
    'A estrutura cicloviária é modesta e se concentra na área central e no entorno do Parque das Águas; boa parte do pedal e da corrida acontece nas vias urbanas, nas alamedas do parque e nas estradas que sobem em direção à serra.',

  clima:
    'O clima é tropical de altitude, ameno e relativamente seco, marcado pela posição na Serra da Mantiqueira, a cerca de 875 metros de altitude. Os verões são amenos e chuvosos e os invernos são secos e frios, com noites e madrugadas de baixa temperatura — característica das estâncias de montanha do Sul de Minas.',
  climaTreino:
    'O clima ameno favorece o treino ao ar livre durante boa parte do ano, com manhãs e fins de tarde agradáveis para caminhada e corrida. No inverno, vale o aquecimento reforçado por causa do frio matinal; a altitude também pede atenção à adaptação de quem chega de regiões mais baixas.',

  mobilidade:
    'O acesso rodoviário se dá pela MG-383 e pela BR-267, que conecta a região à Rodovia Fernão Dias (BR-381), principal eixo entre Belo Horizonte e São Paulo. A cidade tem tradição ferroviária ligada à história das estâncias do Circuito das Águas, e o transporte interno é feito por ônibus, em uma malha urbana compacta que facilita os deslocamentos a pé.',

  corridas: [
    {
      nome: '1000 KM Brasil (ultramaratona)',
      descricao:
        'Prova de ultramaratona de longa duração sediada em São Lourenço, com modalidades de diferentes distâncias, que aproveita o clima ameno e o cenário do Sul de Minas para desafiar corredores de resistência.',
    },
    {
      nome: 'Corridas de rua e comunidade de corredores local',
      descricao:
        'A cidade tem uma comunidade ativa de corredores e provas de rua promovidas ao longo do ano, muitas com largada e percurso ligados ao Parque das Águas e à área central.',
    },
  ],
  culturaEsportiva:
    'A cultura esportiva é fortemente associada ao bem-estar e ao ar livre: caminhada e corrida no Parque das Águas, uso das alamedas arborizadas e dos circuitos de saúde, além de provas que exploram o clima de altitude e a paisagem da Mantiqueira.',
  academias:
    'A oferta é formada por academias locais de musculação e treino funcional distribuídas pelo Centro e pelos bairros residenciais, em porte compatível com uma cidade média e turística do interior de Minas.',

  destaquesFitness: [
    'Estância hidromineral do Circuito das Águas, com forte vocação para saúde e bem-estar.',
    'Parque das Águas como principal espaço de caminhada e corrida ao ar livre, com circuito voltado à saúde.',
    'Clima ameno de altitude na Serra da Mantiqueira, favorável ao treino ao ar livre boa parte do ano.',
    'Economia movida pelo turismo e pelo envase de águas minerais, com público que valoriza qualidade de vida.',
  ],

  precos: {
    avulsaMin: 55,
    avulsaMax: 125,
    mensalMin: 270,
    mensalMax: 740,
    onlineMin: 120,
    onlineMax: 360,
  },

  conclusao:
    'Cidade de águas, clima ameno e ritmo voltado ao bem-estar, São Lourenço oferece um cenário privilegiado para quem quer treinar ao ar livre, especialmente no Parque das Águas e no entorno da Mantiqueira. Um personal trainer ajuda a estruturar a rotina aproveitando os melhores horários e espaços da cidade, respeitando o frio do inverno e a adaptação à altitude, com foco em constância e qualidade de vida.',

  vizinhas: ['tres-coracoes-mg', 'pouso-alegre-mg'],

  fontes: [
    { nome: 'IBGE Cidades — São Lourenço', url: 'https://cidades.ibge.gov.br/brasil/mg/sao-lourenco/panorama' },
    { nome: 'Prefeitura de São Lourenço', url: 'https://www.saolourenco.mg.gov.br/' },
    { nome: 'Atlas Brasil — IDHM', url: 'https://www.atlasbrasil.org.br/' },
  ],
  atualizadoEm: '2026-06-29',
};
