import type { Cidade } from '../../lib/types';

export const cidade: Cidade = {
  slug: 'vitoria-da-conquista-ba',
  nome: 'Vitória da Conquista',
  uf: 'BA',
  estado: 'Bahia',
  estadoSlug: 'bahia',
  regiao: 'Nordeste',
  gentilico: 'conquistense',
  tipo: 'cidade',

  populacao: 370879,
  populacaoAno: 2022,
  idhm: 0.678,
  idhmClasse: 'médio',
  altitudeM: 900,

  resumoEconomico:
    'Terceira maior cidade da Bahia, Vitória da Conquista é o polo regional de saúde, educação e comércio do sudoeste baiano, atendendo também o norte de Minas Gerais. A economia é diversificada, com forte peso de serviços, e a posição no entroncamento da BR-116 reforça seu papel de centro regional. O clima de altitude, ameno, é um diferencial para o treino ao ar livre.',

  mercado:
    'Cidade universitária e de classe média em expansão, Vitória da Conquista tem demanda crescente por academias e personal trainers. O clima ameno e o novo parque esportivo da Lagoa das Bateias ampliam as opções de treino ao ar livre.',

  bairrosNobres: ['Candeias', 'Alto Maron', 'Recreio', 'Esplanada do Parque'],
  bairrosPopulares: ['Primavera', 'Brasil', 'Bateias', 'Patagônia'],

  parques: [
    {
      nome: 'Parque Esportivo Lagoa das Bateias',
      descricao:
        'Inaugurado em 2024, tem pista de caminhada, academia ao ar livre, ciclovia, campo society e quadras — o principal espaço público de treino da cidade.',
    },
    {
      nome: 'Estádio Municipal Edvaldo Flores',
      descricao:
        'Estrutura esportiva municipal usada para treinos e eventos, complementando a oferta pública de espaços para atividade física.',
    },
    {
      nome: 'Ciclovia da Lagoa das Bateias',
      descricao:
        'Integrada ao parque esportivo, é uma opção segura para pedal e corrida em meio à área verde.',
    },
  ],
  ciclovias:
    'Há ciclovia integrada ao Parque da Lagoa das Bateias; a extensão total da malha cicloviária urbana ainda não é divulgada em fonte oficial.',

  clima:
    'O clima é tropical de altitude, ameno, com médias que vão de cerca de 17,8 °C em julho a 21,8 °C em março.',
  climaTreino:
    'As temperaturas amenas e a altitude (cerca de 900 m) favorecem o treino ao ar livre e o estímulo cardiorrespiratório — uma vantagem rara no Nordeste.',

  mobilidade:
    'A cidade é cortada pela BR-116 (Rio–Bahia), seu principal eixo, além das BA-262 e BA-263, entroncamento que a consolida como polo logístico e de serviços do sudoeste baiano.',

  corridas: [
    {
      nome: 'Meia Maratona de Conquista',
      descricao:
        'Prova com percursos de 21 km, 10 km e 5 km, com largada no Shopping Conquista Sul.',
    },
    {
      nome: 'Meia Maratona Sustentável',
      descricao:
        'Prova de 5 km, 10 km, 21 km e caminhada que reforça o calendário de corrida de rua da cidade.',
    },
  ],
  culturaEsportiva:
    'Vitória da Conquista tem corrida de rua bem estabelecida, com meias-maratonas e o Circuito Sesc de Corridas, e o clima ameno favorece a atividade ao ar livre o ano todo.',
  academias:
    'A oferta de academias acompanha o crescimento da classe média e o público universitário, complementada pelo novo parque esportivo da Lagoa das Bateias.',

  destaquesFitness: [
    'Clima de altitude ameno, ideal para treino ao ar livre.',
    'Polo universitário e de saúde, com público qualificado.',
    'Calendário ativo de corridas (duas meias-maratonas anuais).',
    'Novo parque esportivo (Lagoa das Bateias) com academia ao ar livre e ciclovia.',
  ],

  precos: {
    avulsaMin: 60,
    avulsaMax: 140,
    mensalMin: 300,
    mensalMax: 820,
    onlineMin: 150,
    onlineMax: 390,
  },

  conclusao:
    'Polo do sudoeste baiano com clima de altitude agradável, Vitória da Conquista é convidativa para treinar ao ar livre. Um personal trainer ajuda a aproveitar o parque da Lagoa das Bateias e a boa temperatura da cidade com um plano sob medida.',

  vizinhas: ['salvador-ba', 'feira-de-santana-ba', 'camacari-ba'],

  fontes: [
    { nome: 'IBGE Cidades — Vitória da Conquista', url: 'https://cidades.ibge.gov.br/brasil/ba/vitoria-da-conquista/panorama' },
    { nome: 'Prefeitura de Vitória da Conquista', url: 'https://www.pmvc.ba.gov.br/' },
    { nome: 'Atlas Brasil — IDHM', url: 'https://www.atlasbrasil.org.br/' },
  ],
  atualizadoEm: '2026-06-29',
};
