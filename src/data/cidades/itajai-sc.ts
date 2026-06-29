import type { Cidade } from '../../lib/types';

export const cidade: Cidade = {
  slug: 'itajai-sc',
  nome: 'Itajaí',
  uf: 'SC',
  estado: 'Santa Catarina',
  estadoSlug: 'santa-catarina',
  regiao: 'Sul',
  gentilico: 'itajaiense',
  tipo: 'cidade',

  populacao: 264054,
  populacaoAno: 2022,
  idhm: 0.795,
  idhmClasse: 'alto',

  resumoEconomico:
    'Maior economia de Santa Catarina e "Capital Nacional da Pesca", Itajaí fica na foz do Rio Itajaí-Açu e abriga o maior porto pesqueiro do país e o segundo maior complexo de contêineres do Brasil, atrás apenas de Santos. Vizinha de Balneário Camboriú, concentra pesca, logística portuária e comércio, com IDHM alto e bairros litorâneos valorizados.',

  mercado:
    'O mercado fitness é aquecido e diversificado, com redes nacionais (Smart Fit), estúdios locais, crossfit e funcional, e forte presença em bairros valorizados como a Praia Brava. A cobertura de planos corporativos é boa, e a orla favorece o treino ao ar livre.',

  bairrosNobres: ['Praia Brava', 'Fazenda', 'São João', 'Ressacada'],
  bairrosPopulares: ['Cordeiros', 'São Vicente', 'Cidade Nova', 'São Judas'],

  parques: [
    {
      nome: 'Beira-Rio / Saco da Fazenda',
      descricao:
        'Orla e beira-rio com academia ao ar livre e quadra — um clássico para caminhada, corrida e treino funcional.',
    },
    {
      nome: 'Parque Natural Municipal do Atalaia',
      descricao:
        'Unidade de preservação no bairro Fazenda, com trilhas para caminhada em meio à mata.',
    },
    {
      nome: 'Parque Ecológico e Náutico (Marina)',
      descricao:
        'Novo espaço com pista, ciclovia e academia ao ar livre junto à marina, ampliando a estrutura de treino na orla.',
    },
  ],
  ciclovias:
    'Itajaí tem uma rede de cerca de 107 km de ciclovias, em expansão, com a meta municipal de ultrapassar 220 km.',

  clima:
    'O clima é subtropical úmido, com verões quentes e úmidos e invernos amenos (média em torno de 22 °C).',
  climaTreino:
    'O clima ameno favorece o treino ao ar livre o ano todo; no verão, vale priorizar o início da manhã ou o fim de tarde e reforçar a hidratação.',

  mobilidade:
    'A BR-101 corta a cidade, ligando-a a Joinville, Blumenau, Florianópolis (cerca de 100 km) e Balneário Camboriú (cerca de 20 km); a proximidade do aeroporto facilita o deslocamento regional.',

  corridas: [
    {
      nome: 'Meia Maratona de Itajaí (21K)',
      descricao:
        'Prova de aniversário com percursos de 5 km, 10 km e 21 km, em trajeto urbano e costeiro.',
    },
    {
      nome: 'Circuito Caixa de Corridas (etapa Itajaí)',
      descricao:
        'Provas de 5 km e 10 km que integram a cidade a um circuito nacional.',
    },
  ],
  culturaEsportiva:
    'Itajaí é referência nacional em esportes náuticos e vela — é a única parada latino-americana da The Ocean Race, a regata de volta ao mundo. No futebol, tem tradição com o Marcílio Dias, e a corrida de rua é forte na cidade.',
  academias:
    'A oferta é ampla, com redes nacionais, estúdios e boxes de crossfit, com um polo premium na Praia Brava, complementada pela orla do Saco da Fazenda e pela rede cicloviária.',

  destaquesFitness: [
    'Orla Beira-Rio / Saco da Fazenda: corredor natural para corrida, caminhada e funcional.',
    'Cerca de 107 km de ciclovias em expansão.',
    'Forte oferta de academias e boxes de crossfit, com polo premium na Praia Brava.',
    'Cidade da vela e da corrida (The Ocean Race e Meia Maratona) — público engajado.',
  ],

  precos: {
    avulsaMin: 80,
    avulsaMax: 180,
    mensalMin: 400,
    mensalMax: 1050,
    onlineMin: 180,
    onlineMax: 460,
  },

  conclusao:
    'Maior economia de SC e cidade portuária litorânea, Itajaí une orla, ciclovias e forte cultura esportiva. Um personal trainer ajuda a transformar o Saco da Fazenda e a Praia Brava em um plano consistente, do treino funcional à preparação para a Meia Maratona.',

  vizinhas: ['balneario-camboriu-sc', 'florianopolis-sc', 'joinville-sc'],

  fontes: [
    { nome: 'IBGE Cidades — Itajaí', url: 'https://cidades.ibge.gov.br/brasil/sc/itajai/panorama' },
    { nome: 'Prefeitura de Itajaí', url: 'https://www.itajai.sc.gov.br/' },
    { nome: 'Atlas Brasil — IDHM', url: 'https://www.atlasbrasil.org.br/' },
  ],
  atualizadoEm: '2026-06-29',
};
