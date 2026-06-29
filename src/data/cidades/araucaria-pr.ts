import type { Cidade } from '../../lib/types';

export const cidade: Cidade = {
  slug: 'araucaria-pr',
  nome: 'Araucária',
  uf: 'PR',
  estado: 'Paraná',
  estadoSlug: 'parana',
  regiao: 'Sul',
  gentilico: 'araucariense',
  tipo: 'cidade',

  populacao: 151666,
  populacaoAno: 2022,
  idhm: 0.740,
  idhmClasse: 'alto',
  altitudeM: 857,

  resumoEconomico:
    'Município da Região Metropolitana de Curitiba, Araucária é sede da Refinaria Presidente Getúlio Vargas (REPAR/Petrobras) e tem um dos maiores parques industriais do estado, com forte eixo petroquímico e industrial. O PIB per capita está entre os mais altos do Paraná, indicando elevada renda agregada.',

  mercado:
    'Cidade industrial de renda elevada e mão de obra formal numerosa, tem rede de academias presente e demanda corporativa e operária por condicionamento físico.',

  bairrosNobres: ['Centro', 'Iguaçu', 'Capela Velha', 'Fazenda Velha'],
  bairrosPopulares: ['Tindiquera', 'Costeira', 'Boqueirão', 'Campina da Barra'],

  parques: [
    {
      nome: 'Parque Cachoeira',
      descricao:
        'Criado em 1982, tem mata nativa, lago e arroio, pistas esportivas, playground e empréstimo gratuito de bicicletas — o principal espaço de lazer e treino da cidade.',
    },
    {
      nome: 'Pistas esportivas do Parque Cachoeira',
      descricao:
        'O parque recebeu novas pistas esportivas e melhorias recentes para corrida e caminhada.',
    },
    {
      nome: 'Praças com academia ao ar livre',
      descricao:
        'Praças municipais com equipamentos de ginástica, ampliando o acesso ao treino nos bairros.',
    },
  ],
  ciclovias:
    'Há empréstimo gratuito de bicicletas no Parque Cachoeira; a extensão da rede cicloviária urbana ainda não é divulgada em fonte oficial.',

  clima:
    'O clima é subtropical úmido de altitude, com invernos frios e geadas, típico do planalto curitibano.',
  climaTreino:
    'O frio favorece o treino indoor boa parte do ano; nas estações mais amenas, o Parque Cachoeira é o principal ponto de corrida.',

  mobilidade:
    'Araucária é atendida pela BR-476 (Rodovia do Xisto) e pelos anéis viários da região metropolitana, ligando à BR-277 e a Curitiba.',

  corridas: [
    {
      nome: 'Corrida do Aniversário de Araucária',
      descricao:
        'Prova noturna de cerca de 6 km, com largada e chegada no Parque Cachoeira.',
    },
    {
      nome: 'Circuito Petrobras de Corrida e Caminhada — Etapa Araucária',
      descricao:
        'Prova patrocinada, ao lado de eventos como a Corrida das Indústrias.',
    },
  ],
  culturaEsportiva:
    'O calendário de corridas de rua é centrado no Parque Cachoeira, com circuitos patrocinados (Petrobras) e provas ligadas às indústrias locais.',
  academias:
    'A oferta reúne academias e estúdios, com público de renda elevada e demanda corporativa, complementada pelo Parque Cachoeira e pela proximidade de Curitiba.',

  destaquesFitness: [
    'Um dos maiores PIBs per capita do Paraná — público com renda elevada.',
    'Parque Cachoeira como polo de corrida e lazer, com bicicletas gratuitas.',
    'Circuitos de corrida patrocinados e corporativos (Petrobras, Indústrias).',
    'Proximidade da região metropolitana de Curitiba, que amplia o mercado.',
  ],

  precos: {
    avulsaMin: 70,
    avulsaMax: 170,
    mensalMin: 360,
    mensalMax: 960,
    onlineMin: 170,
    onlineMax: 440,
  },

  conclusao:
    'Polo petroquímico de alta renda na Grande Curitiba, Araucária tem no Parque Cachoeira seu centro de treino ao ar livre. Um personal trainer ajuda a aproveitá-lo com método, equilibrando outdoor e indoor conforme o frio do planalto.',

  vizinhas: ['curitiba-pr', 'sao-jose-dos-pinhais-pr'],

  fontes: [
    { nome: 'IBGE Cidades — Araucária', url: 'https://cidades.ibge.gov.br/brasil/pr/araucaria/panorama' },
    { nome: 'Prefeitura de Araucária', url: 'https://www.araucaria.pr.gov.br/' },
    { nome: 'Atlas Brasil — IDHM', url: 'https://www.atlasbrasil.org.br/' },
  ],
  atualizadoEm: '2026-06-29',
};
