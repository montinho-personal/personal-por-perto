import type { Cidade } from '../../lib/types';

export const cidade: Cidade = {
  slug: 'valenca-rj',
  nome: 'Valença',
  uf: 'RJ',
  estado: 'Rio de Janeiro',
  estadoSlug: 'rio-de-janeiro',
  regiao: 'Sudeste',
  gentilico: 'valenciano',
  tipo: 'cidade',

  populacao: 68088,
  populacaoAno: 2022,
  idhm: 0.738,
  idhmClasse: 'alto',
  altitudeM: 560,

  resumoEconomico:
    'Cidade do Vale do Café fluminense, no Médio Paraíba, Valença ganhou notoriedade no século XIX durante o ciclo do café, quando concentrou grandes fazendas produtoras — legado ainda visível na arquitetura colonial preservada e em propriedades históricas como a Fazenda da Taquara. Hoje a economia se apoia nos serviços, na saúde e no ensino superior, com o Centro Universitário de Valença (UNIFAA) como grande âncora, além da agropecuária no vasto território rural e do turismo cultural no distrito de Conservatória.',

  mercado:
    'O mercado é movimentado pelo público universitário do UNIFAA, que atrai milhares de jovens de toda a região do Médio Paraíba, e por uma classe média de serviços, sustentando a demanda por academias e personal trainers na sede.',

  bairrosNobres: ['Centro', 'Benfica', 'Parque Pentagna', 'Bela Vista'],
  bairrosPopulares: ['Água Fria', 'Fátima', 'Aparecida', 'Santa Cruz'],

  parques: [
    {
      nome: 'Jardim de Cima (Centro)',
      descricao:
        'Praça central da cidade, ponto de concentração de eventos esportivos e de provas de corrida que percorrem as principais ruas do Centro.',
    },
    {
      nome: 'Praça Dr. Paulo de Frontin',
      descricao:
        'Largo histórico no coração do Centro, usado como ponto de partida e de encontro para atividades ao ar livre e etapas de corridas.',
    },
    {
      nome: 'Distrito de Conservatória',
      descricao:
        'Conhecido como a Cidade das Serestas, o distrito histórico oferece ruas tranquilas e paisagem serrana do Vale do Café, cenário procurado para caminhadas e cicloturismo.',
    },
  ],
  ciclovias:
    'A extensão da malha cicloviária urbana ainda não é divulgada em fonte oficial.',

  clima:
    'O clima é tropical de altitude, característico do relevo serrano do Vale do Café, com verões amenos e invernos frescos e secos.',
  climaTreino:
    'É favorável treinar ao ar livre durante boa parte do ano; as manhãs frescas, sobretudo no inverno, são ótimas para correr e pedalar.',

  mobilidade:
    'Valença é cortada pela BR-393, que liga a cidade a Barra do Piraí e ao eixo do Médio Paraíba, e articula-se com a BR-267, facilitando o acesso à região serrana e ao interior fluminense.',

  corridas: [
    {
      nome: 'Meia Maratona de Valença',
      descricao:
        'Prova de rua tradicional do calendário municipal, realizada anualmente nas ruas da cidade.',
    },
    {
      nome: 'Valença Challenge Race',
      descricao:
        'Corrida de rua com concentração no Jardim de Cima, no Centro, que reúne centenas de atletas pelas principais ruas da cidade.',
    },
    {
      nome: 'Circuito VTR — Valença Trail Run',
      descricao:
        'Circuito de corridas de trail realizado em Valença e seus distritos, aproveitando o relevo serrano do Vale do Café.',
    },
  ],
  culturaEsportiva:
    'A cidade tem cultura de corrida de rua e de trail bem estabelecida, com calendário de provas urbanas e na natureza, impulsionada pelo público jovem universitário e pelo cenário serrano do Vale do Café.',
  academias:
    'A oferta de academias e estúdios é sustentada pela classe média de serviços e pelo grande contingente universitário, concentrada na sede da cidade.',

  destaquesFitness: [
    'Calendário ativo de corridas de rua, incluindo a Meia Maratona de Valença e a Valença Challenge Race.',
    'Circuito VTR de trail run aproveitando o relevo serrano do Vale do Café e os distritos rurais.',
    'Grande público universitário do UNIFAA sustentando a demanda por treino.',
    'Clima de altitude com manhãs frescas, favorável ao treino outdoor.',
  ],

  precos: {
    avulsaMin: 50,
    avulsaMax: 120,
    mensalMin: 260,
    mensalMax: 720,
    onlineMin: 120,
    onlineMax: 360,
  },

  conclusao:
    'Cidade histórica do Vale do Café e polo universitário do Médio Paraíba, Valença une patrimônio do ciclo do café, clima serrano ameno e uma cena de corrida em crescimento. Um personal trainer ajuda a aproveitar esse cenário com método, da corrida de rua no Centro ao trail nos distritos.',

  vizinhas: ['barra-do-pirai-rj', 'volta-redonda-rj', 'resende-rj'],

  fontes: [
    { nome: 'IBGE Cidades — Valença', url: 'https://cidades.ibge.gov.br/brasil/rj/valenca/panorama' },
    { nome: 'Prefeitura de Valença', url: 'https://valenca.rj.gov.br/' },
    { nome: 'Atlas Brasil — IDHM', url: 'https://www.atlasbrasil.org.br/' },
  ],
  atualizadoEm: '2026-06-29',
};
