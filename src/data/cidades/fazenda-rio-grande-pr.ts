import type { Cidade } from '../../lib/types';

export const cidade: Cidade = {
  slug: 'fazenda-rio-grande-pr',
  nome: 'Fazenda Rio Grande',
  uf: 'PR',
  estado: 'Paraná',
  estadoSlug: 'parana',
  regiao: 'Sul',
  gentilico: 'fazendense',
  tipo: 'cidade',

  populacao: 148873,
  populacaoAno: 2022,
  idhm: 0.720,
  idhmClasse: 'alto',
  altitudeM: 898,

  resumoEconomico:
    'Município da Região Metropolitana de Curitiba, Fazenda Rio Grande registrou o maior crescimento proporcional de população do Paraná entre os Censos de 2010 e 2022, saltando de cerca de 81 mil para quase 149 mil habitantes. É uma cidade essencialmente dormitório, conurbada com Curitiba ao longo da BR-116 e do Contorno Sul, com economia local apoiada em comércio, serviços e em uma população que se desloca diariamente para trabalhar na capital.',

  mercado:
    'Cidade grande e dormitório da Grande Curitiba, com forte componente residencial e renda média-popular. O mercado fitness se concentra em academias de bairro e no atendimento domiciliar, atendendo moradores que treinam perto de casa por causa do deslocamento pendular para a capital.',

  bairrosNobres: ['Eucaliptos', 'Iguaçu', 'Pioneiros', 'Nações'],
  bairrosPopulares: ['Gralha Azul', 'Santa Terezinha', 'Estados', 'Veneza'],

  parques: [
    {
      nome: 'Parque Verde',
      descricao:
        'Principal área de lazer da cidade, com cerca de 150 mil m² de bosque, lago e pista de atletismo, ao lado do Centro Multieventos. Concentra caminhada, corrida e atividades ao ar livre da população.',
    },
    {
      nome: 'Centro Multieventos',
      descricao:
        'Inaugurado em 2018 junto ao Parque Verde, é o principal espaço para eventos esportivos e culturais do município.',
    },
    {
      nome: 'Praças e canchas municipais',
      descricao:
        'Rede de praças e canchas espalhadas pelos bairros, com equipamentos de ginástica e quadras, ampliando o acesso ao treino fora do centro.',
    },
  ],
  ciclovias:
    'A cidade vem recebendo obras viárias e de mobilidade ligadas à reestruturação da BR-116; a extensão da malha cicloviária urbana ainda não é divulgada em fonte oficial.',

  clima:
    'O clima é subtropical úmido de altitude, com invernos frios e geadas, típico do planalto curitibano (cerca de 900 m de altitude).',
  climaTreino:
    'O frio do planalto favorece o treino indoor e domiciliar em boa parte do ano; nas estações mais amenas, o Parque Verde é o principal ponto de corrida e caminhada.',

  mobilidade:
    'Fazenda Rio Grande é cortada pela BR-116 e ligada a Curitiba pelo Contorno Sul, em conurbação direta com a capital. As obras recentes de viadutos e trincheiras na BR-116 buscam reduzir o congestionamento no eixo que estrutura a cidade.',

  corridas: [
    {
      nome: 'Corrida Parque Verde',
      descricao:
        'Prova de rua realizada no entorno do Parque Verde, principal evento de corrida do calendário local.',
    },
    {
      nome: 'Eventos esportivos no Centro Multieventos',
      descricao:
        'O complexo do Parque Verde e Centro Multieventos sedia provas, caminhadas e atividades esportivas organizadas pelo município.',
    },
  ],
  culturaEsportiva:
    'A vida esportiva ao ar livre gira em torno do Parque Verde e do Centro Multieventos, que concentram corridas, caminhadas e eventos da comunidade em uma cidade de crescimento acelerado.',
  academias:
    'A oferta é formada principalmente por academias de bairro e estúdios menores, complementada por atendimento domiciliar e pela proximidade de Curitiba, que amplia as opções para quem se desloca à capital.',

  destaquesFitness: [
    'Maior crescimento proporcional de população do Paraná entre 2010 e 2022.',
    'Cidade dormitório conurbada com Curitiba via BR-116 e Contorno Sul.',
    'Parque Verde (150 mil m², lago e pista de atletismo) como polo de corrida e lazer.',
    'Mercado de academias de bairro e forte espaço para o atendimento domiciliar.',
  ],

  precos: {
    avulsaMin: 50,
    avulsaMax: 115,
    mensalMin: 260,
    mensalMax: 680,
    onlineMin: 115,
    onlineMax: 350,
  },

  conclusao:
    'Cidade dormitório de crescimento acelerado na Grande Curitiba, Fazenda Rio Grande tem no Parque Verde seu centro de treino ao ar livre e um mercado fitness apoiado em academias de bairro. Para quem encara o deslocamento diário à capital, um personal trainer ajuda a manter constância treinando perto de casa, equilibrando outdoor e indoor conforme o frio do planalto.',

  vizinhas: ['curitiba-pr', 'sao-jose-dos-pinhais-pr', 'araucaria-pr'],

  fontes: [
    { nome: 'IBGE Cidades — Fazenda Rio Grande', url: 'https://cidades.ibge.gov.br/brasil/pr/fazenda-rio-grande/panorama' },
    { nome: 'Prefeitura de Fazenda Rio Grande', url: 'https://www.fazendariogrande.pr.gov.br/' },
    { nome: 'Atlas Brasil — IDHM', url: 'https://www.atlasbrasil.org.br/' },
  ],
  atualizadoEm: '2026-06-29',
};
