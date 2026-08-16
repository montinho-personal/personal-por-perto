import type { Cidade } from '../../lib/types';

export const cidade: Cidade = {
  slug: 'volta-redonda-rj',
  nome: 'Volta Redonda',
  uf: 'RJ',
  estado: 'Rio de Janeiro',
  estadoSlug: 'rio-de-janeiro',
  regiao: 'Sudeste',
  gentilico: 'volta-redondense',
  tipo: 'cidade',

  populacao: 261563,
  populacaoAno: 2022,
  idhm: 0.771,
  idhmClasse: 'alto',
  altitudeM: 360,

  resumoEconomico:
    'Conhecida como a "Cidade do Aço", Volta Redonda sedia a Companhia Siderúrgica Nacional (CSN), uma das maiores produtoras de aço do Brasil. É o polo industrial e econômico do Sul Fluminense (Médio Paraíba), com economia ligada à siderurgia, à metalurgia, ao comércio e à UFF. A orla revitalizada do Rio Paraíba do Sul deu novo fôlego à vida ao ar livre na cidade.',

  mercado:
    'Cidade de renda relativamente alta e perfil industrial, Volta Redonda tem boa base de academias e uma cultura de corrida e ciclismo em crescimento, impulsionada pela orla do Rio Paraíba. O IDHM alto sustenta uma demanda consistente por treino personalizado.',

  bairrosNobres: ['Jardim Amália', 'Aterrado', 'Vila Santa Cecília', 'Jardim Normândia'],
  bairrosPopulares: ['Volta Grande', 'Santo Agostinho', 'Açude', 'Roma'],

  parques: [
    {
      nome: 'Avenida Beira-Rio',
      descricao:
        'Cerca de 7 km de jardins às margens do Rio Paraíba do Sul, com ciclovia, academia ao ar livre, quadras poliesportivas e campos sintéticos — o grande corredor de treino da cidade.',
    },
    {
      nome: 'Ilha São João',
      descricao:
        'Parque e área de lazer tradicional, com pista e áreas verdes para caminhada e corrida.',
    },
    {
      nome: 'Aterrado',
      descricao:
        'Região central arborizada, com calçadões usados para caminhada e corrida no dia a dia.',
    },
  ],
  ciclovias:
    'A cidade tem uma boa ciclovia à beira-rio ao longo da Avenida Beira-Rio, integrada aos cerca de 7 km de orla revitalizada do Rio Paraíba do Sul.',

  clima:
    'O clima é tropical de altitude, quente no verão e ameno e seco no inverno do vale do Paraíba.',
  climaTreino:
    'As condições para treino ao ar livre são favoráveis na maior parte do ano; no verão, vale priorizar a manhã e o fim de tarde e reforçar a hidratação.',

  mobilidade:
    'Volta Redonda é servida pela Via Dutra (BR-116), principal eixo Rio–São Paulo, o que garante forte conectividade regional; novas pontes sobre o Paraíba do Sul vêm ampliando a mobilidade urbana.',

  corridas: [
    {
      nome: 'Circuito Rio Antigo — Etapa Volta Redonda',
      descricao:
        'Etapa do circuito estadual com percursos de 5 km de corrida e 3 km de caminhada, com largada no Aterrado, em frente ao Estádio Raulino de Oliveira.',
    },
    {
      nome: 'Meia Maratona do Aço',
      descricao:
        'Prova com percursos de 5 km, 10 km e 21 km, uma das principais do calendário do Sul Fluminense.',
    },
    {
      nome: 'Circuito de corridas de rua local',
      descricao:
        'Calendário de provas ao longo do ano, com forte uso da orla do Rio Paraíba.',
    },
  ],
  culturaEsportiva:
    'Volta Redonda tem forte tradição no futebol (Volta Redonda FC) e uma cultura crescente de corrida e ciclismo na orla do Paraíba, sendo sede de eventos esportivos regionais.',
  academias:
    'A oferta de academias é boa, sustentada pelo IDHM alto e pela renda industrial, e bem complementada pela estrutura ao ar livre da Avenida Beira-Rio e da Ilha São João.',

  destaquesFitness: [
    'Orla Beira-Rio com cerca de 7 km, ciclovia e academia ao ar livre.',
    'Ilha São João como espaço clássico de treino.',
    'Meia Maratona do Aço movimentando a comunidade de corredores.',
    'IDHM alto e renda industrial que sustentam o mercado de academias.',
  ],

  precos: {
    avulsaMin: 70,
    avulsaMax: 160,
    mensalMin: 350,
    mensalMax: 950,
    onlineMin: 170,
    onlineMax: 430,
  },

  conclusao:
    'Polo industrial do Sul Fluminense, Volta Redonda transformou a orla do Paraíba em um excelente espaço de treino. Um personal trainer ajuda a aproveitar a Beira-Rio e a Ilha São João com método, encaixando o treino na rotina e mirando resultados consistentes.',

  vizinhas: ['barra-mansa-rj', 'resende-rj'],

  faqsExtra: [
    {
      pergunta: 'Onde treinar ao ar livre em Volta Redonda?',
      resposta:
        'A Ilha São João é o coração esportivo da cidade — pista, quadras, academia ao ar livre e eventos o ano todo —, seguida da orla do Paraíba do Sul na Avenida Beira-Rio e do calçadão do Aterrado, onde acontecem as largadas das provas de rua. É uma das cidades do interior fluminense com melhor estrutura pública de treino.',
    },
    {
      pergunta: 'Personal trainer atende quem trabalha em turnos na CSN?',
      resposta:
        'Sim — a Cidade do Aço vive de escala, e os profissionais locais estão acostumados a montar agendas por turno: treino no meio da manhã para quem sai da madrugada, fim de tarde para o turno da manhã, planos quinzenais que giram com a escala. O formato online cobre as semanas viradas.',
    },
    {
      pergunta: 'Quanto custa personal trainer em Volta Redonda?',
      resposta:
        'Os valores ficam em geral 20% a 35% abaixo dos praticados na capital: sessões avulsas mais acessíveis nos bairros e pacotes mensais que variam com a frequência semanal. Vila Santa Cecília e Aterrado concentram os valores mais altos; o treino em dupla e os pacotes trimestrais são as formas mais comuns de reduzir o custo por sessão.',
    },
  ],
  fontes: [
    { nome: 'IBGE Cidades — Volta Redonda', url: 'https://cidades.ibge.gov.br/brasil/rj/volta-redonda/panorama' },
    { nome: 'Prefeitura de Volta Redonda', url: 'https://www.voltaredonda.rj.gov.br/' },
    { nome: 'Atlas Brasil — IDHM', url: 'https://www.atlasbrasil.org.br/' },
  ],
  atualizadoEm: '2026-08-16',
};
