import type { Cidade } from '../../lib/types';

export const cidade: Cidade = {
  slug: 'teresopolis-rj',
  nome: 'Teresópolis',
  uf: 'RJ',
  estado: 'Rio de Janeiro',
  estadoSlug: 'rio-de-janeiro',
  regiao: 'Sudeste',
  gentilico: 'teresopolitano',
  tipo: 'cidade',

  populacao: 165123,
  populacaoAno: 2022,
  idhm: 0.730,
  idhmClasse: 'alto',
  altitudeM: 871,

  resumoEconomico:
    'Cidade da serra fluminense de clima frio, Teresópolis tem economia movida por turismo de montanha, horticultura de altitude e produção artesanal. Berço do montanhismo brasileiro, sedia o Parque Nacional da Serra dos Órgãos (com o cartão-postal Dedo de Deus) e a Granja Comary, centro de treinamento da Seleção Brasileira, sendo também Capital Nacional do Lúpulo.',

  mercado:
    'O mercado é consolidado para o porte da cidade, com redes locais e personal trainers, e uma forte vocação para esportes de montanha e trail running aproveitando as trilhas da região.',

  bairrosNobres: ['Agriões', 'Alto', 'Iúcas', 'Jardim Europa'],
  bairrosPopulares: ['São Pedro', 'Várzea', 'Pimenteiras', 'Corta Vento'],

  parques: [
    {
      nome: 'Parque Nacional da Serra dos Órgãos (PARNASO)',
      descricao:
        'Tem a maior rede de trilhas do Brasil (mais de 200 km, de todos os níveis), com mirantes, piscinas naturais e a Trilha da Pedra do Sino, ponto mais alto, a 2.275 m.',
    },
    {
      nome: 'Parque Estadual dos Três Picos',
      descricao:
        'Área de montanha do município, com trilhas e trail de altitude.',
    },
    {
      nome: 'Praça Olímpica Luís de Camões',
      descricao:
        'No centro, é ponto de concentração e largada de corridas urbanas, no eixo da Reta.',
    },
  ],
  ciclovias:
    'A extensão da malha cicloviária urbana ainda não é divulgada em fonte oficial.',

  clima:
    'O clima é tropical de altitude, com verões frescos e invernos rigorosos (termômetros abaixo de 10 °C), entre os mais frios do estado.',
  climaTreino:
    'O frio de serra é ideal para trail running e corrida de montanha; exige aquecimento e camadas no inverno, mas favorece treinos longos e de resistência.',

  mobilidade:
    'O acesso se dá pela BR-116 (subida da serra a partir do Rio) e pela RJ-130 (ligação com Nova Friburgo e o interior serrano).',

  corridas: [
    {
      nome: 'Circuito Três Picos Trail Run',
      descricao:
        'Prova de trail próxima à Cachoeira dos Frades, expressão da forte cena de corrida de montanha local.',
    },
    {
      nome: 'Corrida e Caminhada da Reta',
      descricao:
        'Prova urbana de 5 km com concentração na Praça Olímpica Luís de Camões, apoiada pela prefeitura.',
    },
  ],
  culturaEsportiva:
    'Berço do montanhismo brasileiro, Teresópolis tem cena pujante de trail running, escalada e trilhas no PARNASO e nos Três Picos, e é símbolo do futebol nacional por sediar a Granja Comary.',
  academias:
    'A oferta reúne redes locais e estúdios, complementada por uma das maiores redes de trilhas do país, ideal para o treino ao ar livre em montanha.',

  destaquesFitness: [
    'PARNASO: maior rede de trilhas do Brasil (mais de 200 km) — paraíso do trail running.',
    'Clima frio de serra, ideal para treinos de resistência e corrida de montanha.',
    'Granja Comary (CBF) reforça a identidade esportiva e de alta performance.',
    'Rede fitness local consolidada e oferta de personal trainers.',
  ],

  precos: {
    avulsaMin: 70,
    avulsaMax: 170,
    mensalMin: 360,
    mensalMax: 950,
    onlineMin: 170,
    onlineMax: 440,
  },

  conclusao:
    'Capital do montanhismo brasileiro, Teresópolis une clima frio de serra e a maior rede de trilhas do país. Um personal trainer ajuda a aproveitar o PARNASO com método, do trail à corrida de montanha, com a preparação certa para o frio e o desnível.',

  vizinhas: ['petropolis-rj', 'nova-friburgo-rj'],

  fontes: [
    { nome: 'IBGE Cidades — Teresópolis', url: 'https://cidades.ibge.gov.br/brasil/rj/teresopolis/panorama' },
    { nome: 'Prefeitura de Teresópolis', url: 'https://www.teresopolis.rj.gov.br/' },
    { nome: 'Atlas Brasil — IDHM', url: 'https://www.atlasbrasil.org.br/' },
  ],
  atualizadoEm: '2026-06-29',
};
