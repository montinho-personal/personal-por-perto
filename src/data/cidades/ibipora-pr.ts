import type { Cidade } from '../../lib/types';

export const cidade: Cidade = {
  slug: 'ibipora-pr',
  nome: 'Ibiporã',
  uf: 'PR',
  estado: 'Paraná',
  estadoSlug: 'parana',
  regiao: 'Sul',
  gentilico: 'ibiporaense',
  tipo: 'cidade',

  populacao: 51603,
  populacaoAno: 2022,
  idhm: 0.726,
  idhmClasse: 'alto',
  altitudeM: 497,

  resumoEconomico:
    'Integrante da Região Metropolitana de Londrina, no Norte do Paraná, Ibiporã tem nome de origem tupi ("terra bonita") e raízes na cultura do café que marcou a região. Hoje a economia se apoia na agroindústria do grão — com cooperativas como Cocamar e Integrada presentes no município — além de comércio e serviços, em uma cidade fortemente conectada ao polo londrinense.',

  mercado:
    'Cidade compacta e de forte vínculo diário com Londrina, Ibiporã reúne academias de musculação e estúdios de treino funcional no centro e nos bairros, com cobertura de plataformas de benefícios. O Lago Dom Pedro Zilli e o Parque Estadual de Ibiporã ampliam as opções de treino ao ar livre, e a proximidade da capital regional dá acesso a uma rede ainda maior de profissionais.',

  bairrosNobres: ['Jardim Pérola', 'Jardim Beltrão', 'Centro', 'Jardim Bandeirantes'],
  bairrosPopulares: ['Jardim Brasília', 'Jardim Pedro Antonio Micheleto', 'Conjunto Habitacional', 'Vila Romana'],

  parques: [
    {
      nome: 'Lago Dom Pedro Zilli',
      descricao:
        'Área de lazer inaugurada no Jardim Beltrão, com pista de caminhada e corrida, ciclovia, academia ao ar livre, quadra de areia e quadra poliesportiva no entorno do lago — o ponto mais procurado para o treino externo na cidade.',
    },
    {
      nome: 'Parque Estadual de Ibiporã',
      descricao:
        'Unidade de conservação com cerca de 72 hectares de Floresta Estacional Semidecidual e trilhas sinalizadas (a principal com 2,6 km), aberta de quarta a segunda, das 8h às 17h — boa opção para caminhada e contato com a natureza.',
    },
  ],
  ciclovias:
    'A cidade conta com ciclovia no entorno do Lago Dom Pedro Zilli, integrando caminhada, corrida e pedal em um mesmo espaço de lazer.',

  clima:
    'O clima é subtropical, típico do Norte do Paraná, com verões quentes e chuvosos e invernos amenos, com geadas ocasionais e estações bem definidas.',
  climaTreino:
    'O treino ao ar livre é confortável na maior parte do ano. No verão, vale priorizar as primeiras horas da manhã para fugir do calor e das pancadas de chuva do fim de tarde; no inverno, as manhãs ensolaradas são as mais agradáveis.',

  mobilidade:
    'Ibiporã é cortada pela BR-369, principal ligação com Londrina — cujos centros distam cerca de 13 a 15 km — em um trajeto curto e muito utilizado no deslocamento diário entre as duas cidades da Região Metropolitana de Londrina. O transporte coletivo conecta os terminais de Ibiporã e de Londrina.',

  corridas: [
    {
      nome: 'Prova Pedestre Cidade de Ibiporã',
      descricao:
        'Corrida de rua organizada pelo município, com percurso de 5 km e largada no Lago Dom Pedro Zilli, reunindo categorias geral, municipal, por faixa etária e PCD.',
    },
  ],
  culturaEsportiva:
    'A cultura esportiva local gira em torno da musculação, do treino funcional e da corrida de rua, com a Prova Pedestre Cidade de Ibiporã como evento de destaque. A proximidade com Londrina amplia o calendário disponível aos corredores ibiporaenses.',
  academias:
    'A oferta reúne academias de musculação e estúdios de treino funcional no centro e nos bairros, com cobertura de plataformas de benefícios e a alternativa, a poucos quilômetros, da rede mais ampla de Londrina.',

  destaquesFitness: [
    'Lago Dom Pedro Zilli com pista de caminhada e corrida, ciclovia e academia ao ar livre.',
    'Parque Estadual de Ibiporã, com trilhas sinalizadas para caminhada em meio à mata.',
    'Prova Pedestre Cidade de Ibiporã movimentando a corrida de rua local.',
    'Integração com Londrina pela BR-369, ampliando o acesso a academias e assessorias.',
  ],

  precos: {
    avulsaMin: 50,
    avulsaMax: 115,
    mensalMin: 250,
    mensalMax: 700,
    onlineMin: 115,
    onlineMax: 350,
  },

  conclusao:
    'Cidade tranquila e bem conectada a Londrina, Ibiporã combina estrutura de lazer ao ar livre — do Lago Dom Pedro Zilli ao Parque Estadual — com a praticidade de uma rotina metropolitana. Um personal trainer ajuda a transformar essa estrutura em um plano de treino consistente, ajustado ao seu objetivo e à sua agenda.',

  vizinhas: ['londrina-pr', 'rolandia-pr', 'cornelio-procopio-pr'],

  fontes: [
    { nome: 'IBGE Cidades — Ibiporã', url: 'https://cidades.ibge.gov.br/brasil/pr/ibipora/panorama' },
    { nome: 'Prefeitura de Ibiporã', url: 'https://www.ibipora.pr.gov.br/' },
    { nome: 'Atlas Brasil — IDHM', url: 'https://www.atlasbrasil.org.br/' },
  ],
  atualizadoEm: '2026-06-29',
};
