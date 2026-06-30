import type { Cidade } from '../../lib/types';

export const cidade: Cidade = {
  slug: 'viana-es',
  nome: 'Viana',
  uf: 'ES',
  estado: 'Espírito Santo',
  estadoSlug: 'espirito-santo',
  regiao: 'Sudeste',
  gentilico: 'vianense',
  tipo: 'cidade',

  populacao: 73423,
  populacaoAno: 2022,
  idhm: 0.686,
  idhmClasse: 'médio',

  altitudeM: 50,

  resumoEconomico:
    'Integrante da Região Metropolitana da Grande Vitória, Viana se consolidou como a principal capital logística do Espírito Santo. No entroncamento das BR-262 e BR-101, a cidade concentra condomínios logísticos, distribuidoras e indústrias atraídos pela posição estratégica e pelos incentivos fiscais, figurando entre os municípios de maior crescimento econômico do estado nos últimos anos.',

  mercado:
    'Cidade de perfil trabalhador e em expansão, Viana tem demanda forte por academias de bairro e por treino acessível. O crescimento populacional ao longo dos eixos rodoviários e os novos espaços de lazer públicos ampliam o público para personal trainers que atuam ao ar livre e em condomínios.',

  bairrosNobres: ['Viana Sede', 'Universal', 'Vila Bethânia', 'Nova Bethânia'],
  bairrosPopulares: ['Marcílio de Noronha', 'Areinha', 'Primavera', 'Industrial'],

  parques: [
    {
      nome: 'Praça central de Marcílio de Noronha',
      descricao:
        'Bairro mais populoso da cidade, recebeu revitalização de praça e do Centro Multiuso, com área de convivência usada para caminhada e atividades comunitárias.',
    },
    {
      nome: 'Centro Histórico de Viana (Sede)',
      descricao:
        'Núcleo colonial com igrejas e casario antigo, oferece percursos de caminhada leve em ruas de baixo fluxo e arborizadas.',
    },
    {
      nome: 'Praças e áreas de lazer dos bairros',
      descricao:
        'A prefeitura vem implantando e revitalizando praças com áreas de convivência em bairros como Marcílio de Noronha II, ampliando os pontos para treino ao ar livre.',
    },
  ],
  ciclovias:
    'A cidade conta com trechos cicláveis previstos no Plano Diretor de Mobilidade Urbana; a extensão total da rede ainda não é divulgada em fonte oficial consolidada.',

  clima:
    'O clima é tropical quente e úmido, típico da Grande Vitória, com calor o ano todo e maior umidade no verão.',
  climaTreino:
    'O treino ao ar livre rende mais cedo de manhã ou no fim da tarde, com hidratação reforçada — as praças arborizadas da Sede e dos bairros ajudam a fugir do sol do meio do dia.',

  mobilidade:
    'Viana fica no entroncamento das BR-262 e BR-101, eixos que escoam boa parte da produção do Espírito Santo e conectam a cidade a Cariacica, Vitória e ao Porto de Vitória. A proximidade com a capital é feita principalmente pela BR-262 e por linhas de ônibus metropolitanas.',

  corridas: [
    {
      nome: 'Corrida de Aniversário de Viana',
      descricao:
        'Prova de rua que integra o calendário de comemorações do município, com percursos de caminhada e corrida pelas vias da cidade.',
    },
    {
      nome: 'Corridas e caminhadas comunitárias',
      descricao:
        'Eventos de rua promovidos pela prefeitura e por grupos locais, voltados à saúde e à integração dos bairros.',
    },
  ],
  culturaEsportiva:
    'Viana tem tradição no futebol amador e nas atividades comunitárias dos bairros, com uso crescente das praças revitalizadas para caminhada, corrida e treino funcional ao ar livre.',
  academias:
    'A oferta é dominada por academias de bairro voltadas à população trabalhadora, complementadas pelas praças e áreas de lazer públicas distribuídas pelos bairros.',

  destaquesFitness: [
    'Polo logístico em expansão, com público crescente ao longo dos eixos rodoviários.',
    'Praças revitalizadas nos bairros como pontos de treino ao ar livre.',
    'Público de classe média e popular com demanda por treino acessível.',
    'Clima quente que favorece o treino matinal o ano todo.',
  ],

  precos: {
    avulsaMin: 55,
    avulsaMax: 110,
    mensalMin: 280,
    mensalMax: 680,
    onlineMin: 130,
    onlineMax: 350,
  },

  conclusao:
    'Capital logística da Grande Vitória, Viana cresce em ritmo acelerado e vem ganhando praças e espaços públicos para treinar nos bairros. Um personal trainer ajuda a aproveitar essa estrutura com método, encaixando o treino na rotina e respeitando o calor.',

  vizinhas: ['cariacica-es', 'vila-velha-es', 'vitoria-es'],

  fontes: [
    { nome: 'IBGE Cidades — Viana', url: 'https://cidades.ibge.gov.br/brasil/es/viana/panorama' },
    { nome: 'Prefeitura de Viana', url: 'https://viana.es.gov.br/' },
    { nome: 'Atlas Brasil — IDHM', url: 'https://www.atlasbrasil.org.br/' },
  ],
  atualizadoEm: '2026-06-29',
};
