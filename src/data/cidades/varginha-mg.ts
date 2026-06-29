import type { Cidade } from '../../lib/types';

export const cidade: Cidade = {
  slug: 'varginha-mg',
  nome: 'Varginha',
  uf: 'MG',
  estado: 'Minas Gerais',
  estadoSlug: 'minas-gerais',
  regiao: 'Sudeste',
  gentilico: 'varginhense',
  tipo: 'cidade',

  populacao: 136467,
  populacaoAno: 2022,
  idhm: 0.778,
  idhmClasse: 'alto',
  altitudeM: 980,

  resumoEconomico:
    'No sul de Minas, Varginha é a "Capital do Café" e uma das maiores praças de comercialização e exportação do grão no Brasil. O Porto Seco Sul de Minas (EADI) é o motor logístico, movimentando exportações rumo a Santos e aos aeroportos paulistas, somado a uma indústria diversificada (torrefação, autopeças, metalurgia e eletrônicos).',

  mercado:
    'Cidade média com economia aquecida pela logística e pela indústria, Varginha tem demanda fitness sustentada por uma classe trabalhadora qualificada e por programas públicos de saúde. O clima de altitude favorece o treino ao ar livre.',

  bairrosNobres: ['Vila Pinto', 'Santa Luíza', 'Jardim Áurea', 'Bom Pastor'],
  bairrosPopulares: ['Rezende', 'Parque Novo Horizonte', 'Sion', 'Industrial'],

  parques: [
    {
      nome: 'Parque Novo Horizonte',
      descricao:
        'Cerca de 27 mil m² de mata nativa, com trilha e pista de caminhada ao redor do lago e ciclovia anexa.',
    },
    {
      nome: 'Parque Centenário',
      descricao:
        'Parque municipal mantido pela prefeitura, com área verde para caminhada e lazer.',
    },
    {
      nome: 'Parque dos Dinossauros',
      descricao:
        'Parque municipal de lazer da cidade, usado para passeios e atividade ao ar livre em família.',
    },
  ],
  ciclovias:
    'Há a ciclovia do Parque Novo Horizonte; a extensão total da rede ainda não é divulgada em fonte oficial.',

  clima:
    'O clima é tropical de altitude (na Serra da Mantiqueira, cerca de 980 m), mais ameno, com manhãs frias no inverno.',
  climaTreino:
    'As temperaturas agradáveis favorecem o treino ao ar livre quase o ano todo; no inverno, vale agasalho nas manhãs mais frias.',

  mobilidade:
    'O principal eixo é a Rodovia Fernão Dias (BR-381), que liga direto a São Paulo e Belo Horizonte; a cidade é atendida também pela BR-491.',

  corridas: [
    {
      nome: 'Speed Race World Coffee',
      descricao:
        'Corrida de rua temática do café, com percurso de 9 km, parte do calendário esportivo da cidade.',
    },
    {
      nome: 'ET Run Varginha',
      descricao:
        'Corrida temática que brinca com o famoso "Caso ET de Varginha", realizada no meio do ano.',
    },
  ],
  culturaEsportiva:
    'A identidade local (café e a fama do "ET") aparece nos eventos esportivos, com calendário ativo de corridas e iniciativas públicas de saúde como o "Varginha Mais Saudável".',
  academias:
    'A oferta de academias e estúdios é sustentada pela economia logística e industrial, complementada pelo Parque Novo Horizonte e por sua ciclovia.',

  destaquesFitness: [
    'Parque Novo Horizonte com pista de caminhada e ciclovia integrada.',
    'Clima ameno de altitude, favorável ao treino externo quase o ano todo.',
    'Eventos de corrida com identidade local (café e ET) que atraem público.',
    'Economia logística e industrial pujante, com base de clientes de renda estável.',
  ],

  precos: {
    avulsaMin: 65,
    avulsaMax: 155,
    mensalMin: 340,
    mensalMax: 920,
    onlineMin: 160,
    onlineMax: 420,
  },

  conclusao:
    'Capital do Café no sul de Minas, Varginha une clima de altitude, bons parques e calendário de corridas com cara local. Um personal trainer ajuda a aproveitar o Parque Novo Horizonte com método, mantendo a constância o ano todo.',

  vizinhas: ['pocos-de-caldas-mg', 'belo-horizonte-mg'],

  fontes: [
    { nome: 'IBGE Cidades — Varginha', url: 'https://cidades.ibge.gov.br/brasil/mg/varginha/panorama' },
    { nome: 'Prefeitura de Varginha', url: 'https://www.varginha.mg.gov.br/' },
    { nome: 'Atlas Brasil — IDHM', url: 'https://www.atlasbrasil.org.br/' },
  ],
  atualizadoEm: '2026-06-29',
};
