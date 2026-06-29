import type { Cidade } from '../../lib/types';

export const cidade: Cidade = {
  slug: 'gravata-pe',
  nome: 'Gravatá',
  uf: 'PE',
  estado: 'Pernambuco',
  estadoSlug: 'pernambuco',
  regiao: 'Nordeste',
  gentilico: 'gravataense',
  tipo: 'cidade',

  populacao: 86516,
  populacaoAno: 2022,
  idhm: 0.634,
  idhmClasse: 'médio',
  altitudeM: 447,

  resumoEconomico:
    'No agreste de Pernambuco, Gravatá é conhecida como a "Suíça Pernambucana" pelo clima ameno de serra. Tem forte turismo de serra e gastronômico (queijos, bode assado e doces), floricultura e um setor imobiliário robusto, com um dos m² mais caros do interior do estado, a cerca de 84 km do Recife.',

  mercado:
    'A cena de corrida e de academias é aquecida (com clubes e estúdios que promovem provas e treinões) e há um grupo de corredores consolidado, favorecidos pelo clima de serra.',

  bairrosNobres: ['Novo Gravatá', 'Mauricéia', 'Carenes', 'Centro'],
  bairrosPopulares: ['Cruzeiro', 'COHAB II', 'Santana', 'São José'],

  parques: [
    {
      nome: 'Parque da Cidade',
      descricao:
        'Palco de corridas e eventos esportivos municipais, principal hub esportivo da cidade.',
    },
    {
      nome: 'Estação do Artesão',
      descricao:
        'No centro, é ponto de largada de corridas de rua e de eventos.',
    },
    {
      nome: 'Arena 232',
      descricao:
        'Espaço para competições de futevôlei e esportes de areia.',
    },
  ],
  ciclovias:
    'A extensão de ciclovias ainda não é divulgada em fonte oficial.',

  clima:
    'O clima é semiárido amenizado pela altitude da Serra das Russas, com média em torno de 22 °C e mínimas próximas de 15 °C — um "frio" de serra raro no agreste.',
  climaTreino:
    'O clima ameno favorece o treino ao ar livre ao longo do dia, um diferencial em relação ao calor do litoral pernambucano.',

  mobilidade:
    'Gravatá é servida pela BR-232, eixo Recife–interior, principal via de acesso e de fluxo turístico.',

  corridas: [
    {
      nome: 'Corrida Eu Amo Gravatá',
      descricao:
        'Primeira corrida noturna da cidade, com mais de 1.500 participantes, em provas de 5 km e 10 km.',
    },
    {
      nome: 'Sette Run',
      descricao:
        'Corrida organizada por clube local, com concentração no Parque da Cidade.',
    },
  ],
  culturaEsportiva:
    'Há corridas de rua frequentes apoiadas pela prefeitura e por academias, com grupo de corredores consolidado; o clima de serra estimula a atividade ao ar livre.',
  academias:
    'A oferta reúne clubes, academias e estúdios que promovem provas e treinões, complementada pelo Parque da Cidade e pela cultura de bem-estar ligada ao turismo de serra.',

  destaquesFitness: [
    'Clima ameno de serra — vantagem rara para o treino outdoor no agreste.',
    'Calendário ativo de corridas (noturna, inclusiva, Sette Run).',
    'Parque da Cidade como hub esportivo.',
    'Turismo de bem-estar e gastronomia, ligado ao perfil de qualidade de vida.',
  ],

  precos: {
    avulsaMin: 55,
    avulsaMax: 135,
    mensalMin: 280,
    mensalMax: 760,
    onlineMin: 150,
    onlineMax: 390,
  },

  conclusao:
    'A Suíça Pernambucana, Gravatá tem clima ameno de serra, turismo de bem-estar e uma cena de corrida ativa. Um personal trainer ajuda a aproveitar o Parque da Cidade e o clima favorável com método, num dos melhores cenários do agreste para treino ao ar livre.',

  vizinhas: ['caruaru-pe', 'recife-pe'],

  fontes: [
    { nome: 'IBGE Cidades — Gravatá', url: 'https://cidades.ibge.gov.br/brasil/pe/gravata/panorama' },
    { nome: 'Prefeitura de Gravatá', url: 'https://www.gravata.pe.gov.br/' },
    { nome: 'Atlas Brasil — IDHM', url: 'https://www.atlasbrasil.org.br/' },
  ],
  atualizadoEm: '2026-06-29',
};
