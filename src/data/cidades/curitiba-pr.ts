import type { Cidade } from '../../lib/types';

export const cidade: Cidade = {
  slug: 'curitiba-pr',
  nome: 'Curitiba',
  uf: 'PR',
  estado: 'Paraná',
  estadoSlug: 'parana',
  regiao: 'Sul',
  gentilico: 'curitibano',

  populacao: 1773718,
  populacaoAno: 2022,
  idhm: 0.823,
  idhmClasse: 'muito alto',
  pibPerCapita: 67691,
  pibPerCapitaAno: 2023,
  altitudeM: 934,

  resumoEconomico:
    'Capital do Paraná e maior cidade do Sul do Brasil, Curitiba tem economia diversificada, com forte setor de serviços, polo industrial (a Cidade Industrial de Curitiba abriga montadoras como Volvo, Renault/Nissan e Audi) e setores de tecnologia e finanças. É uma cidade de alto IDH (0,823) e referência mundial em planejamento urbano — características que se traduzem em um público atento à qualidade de vida e à prática regular de exercícios.',

  bairrosNobres: ['Batel', 'Água Verde', 'Bigorrilho', 'Cabral', 'Ecoville', 'Champagnat'],
  bairrosPopulares: ['Cajuru', 'Boqueirão', 'Portão', 'Santa Felicidade', 'Sítio Cercado'],

  parques: [
    {
      nome: 'Parque Barigui',
      descricao:
        'O maior parque da cidade, com cerca de 1,4 milhão de m². Tem pista de corrida de 5,4 km e pista de caminhada de 3,3 km, ambas em terreno plano, além de pista de ciclismo e equipamentos de ginástica. É o principal ponto de treino ao ar livre de Curitiba.',
    },
    {
      nome: 'Parque Tingui',
      descricao:
        'Com cerca de 380 mil m² no bairro São João, tem ciclovias e pistas de corrida às margens do Rio Barigui — uma ótima alternativa para corridas mais longas com paisagem agradável.',
    },
    {
      nome: 'Parque Tanguá',
      descricao:
        'Na região norte, com cerca de 235 mil m², reúne ciclovia, pista de corrida, dois lagos e um túnel artificial. O desnível do terreno o torna interessante para treinos com mais intensidade.',
    },
  ],
  ciclovias:
    'Curitiba tem mais de 200 km de ciclovias distribuídas pela cidade, em linha com sua tradição de planejamento urbano e mobilidade ativa — uma infraestrutura que estimula o deslocamento a pé e de bicicleta como parte da rotina.',

  clima:
    'Curitiba é a capital mais fria do Brasil. O clima é subtropical úmido, fortemente influenciado pela altitude média de cerca de 934 m. A temperatura média anual fica em torno de 18 °C, com mínimas perto de 9 °C no inverno e máximas de cerca de 27 °C no verão. Geadas ocorrem todos os anos, principalmente entre junho e agosto.',
  climaTreino:
    'O frio é o fator local mais distintivo para o treino ao ar livre: no inverno, o aquecimento precisa ser mais longo e as largadas de corrida costumam começar perto de 14 °C, subindo rápido. Um bom personal ajusta o aquecimento e o vestuário ao clima curitibano — algo que faz diferença real na prevenção de lesões.',

  mobilidade:
    'Referência mundial em planejamento urbano, Curitiba é a casa do BRT (a Rede Integrada de Transporte, implantada desde 1974), com Ligeirões e Ligeirinhos. A Linha Verde recebeu o padrão Gold BRT do ITDP em 2013. Os eixos estruturais facilitam o deslocamento norte-sul, o que ajuda a chegar a academias e parques.',

  corridas: [
    {
      nome: 'Maratona de Curitiba',
      descricao:
        'Uma das maratonas mais tradicionais do país, com provas de 5 km, 10 km, 21 km e 42 km e limite em torno de 16 mil atletas. É o grande evento de corrida da capital paranaense.',
    },
    {
      nome: 'Circuito das Estações e Meia Maratona Internacional',
      descricao:
        'O calendário curitibano é intenso, com etapas do Circuito das Estações e a Meia Maratona Internacional de Curitiba concentrando boa parte das provas entre fevereiro e maio.',
    },
  ],
  culturaEsportiva:
    'Curitiba tem uma cultura forte de uso dos parques para cooper e ciclismo, sustentada por alto IDH e muita área verde. A combinação de parques amplos, mais de 200 km de ciclovias e um calendário de corridas movimentado faz da capital um ambiente em que treinar ao ar livre é parte natural do estilo de vida — desde que se respeite o frio.',
  academias:
    'A capital tem um mercado de academias e estúdios bem desenvolvido, com forte presença nos bairros de maior renda como Batel, Água Verde e Ecoville, e oferta crescente de treino funcional e estúdios de personal.',

  destaquesFitness: [
    'Parque Barigui: pista de corrida plana de 5,4 km, a principal da cidade.',
    'Mais de 200 km de ciclovias e tradição de mobilidade ativa.',
    'Clima frio que exige ajuste de aquecimento e vestuário — onde um bom personal faz diferença.',
    'Alto IDH (0,823) e calendário de corridas intenso, com a Maratona de Curitiba.',
  ],

  precos: {
    avulsaMin: 70,
    avulsaMax: 160,
    mensalMin: 350,
    mensalMax: 950,
    onlineMin: 180,
    onlineMax: 450,
  },

  vizinhas: [],

  fontes: [
    { nome: 'IBGE Cidades — Curitiba', url: 'https://cidades.ibge.gov.br/brasil/pr/curitiba/panorama' },
    { nome: 'Prefeitura de Curitiba', url: 'https://www.curitiba.pr.gov.br/' },
    { nome: 'Viaje Paraná', url: 'https://www.viajeparana.com/' },
  ],
  atualizadoEm: '2026-06-28',
};
