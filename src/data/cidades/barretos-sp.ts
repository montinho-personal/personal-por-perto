import type { Cidade } from '../../lib/types';

export const cidade: Cidade = {
  slug: 'barretos-sp',
  nome: 'Barretos',
  uf: 'SP',
  estado: 'São Paulo',
  estadoSlug: 'sao-paulo',
  regiao: 'Sudeste',
  gentilico: 'barretense',
  tipo: 'cidade',

  populacao: 122485,
  populacaoAno: 2022,
  idhm: 0.789,
  idhmClasse: 'alto',
  altitudeM: 530,

  resumoEconomico:
    'No nordeste paulista, Barretos tem economia baseada em agronegócio e pecuária e é sede da Festa do Peão, o maior rodeio da América Latina, realizada no Parque do Peão. É também um grande polo nacional de saúde graças ao Hospital de Amor, que atrai pacientes de todo o país.',

  mercado:
    'Cidade de porte médio com bom poder aquisitivo (IDHM alto) e cultura de qualidade de vida do interior, tem rede consolidada de academias nos bairros residenciais e demanda por treino ao ar livre na Região dos Lagos.',

  bairrosNobres: ['Jardim de Allah', 'Nobre Ville', 'City Barretos', 'Aeroporto'],
  bairrosPopulares: ['Los Angeles', 'Jardim Soares', 'Ibirapuera', 'Cristiano Carvalho'],

  parques: [
    {
      nome: 'Parque do Peão Mussa Calil Neto',
      descricao:
        'Enorme complexo (sede da Festa do Peão), com muita área verde e circuito interno asfaltado usado para corrida.',
    },
    {
      nome: 'Região dos Lagos',
      descricao:
        'Dentro do Parque do Peão, tem três lagos com pista de caminhada e ciclovia, ideal para o treino no fim do dia.',
    },
    {
      nome: 'Parque do Peãozinho',
      descricao:
        'Área de cerca de 35 mil m² com estrutura de lazer familiar e caminhada.',
    },
  ],
  ciclovias:
    'Há ciclovia na Região dos Lagos, no Parque do Peão; a extensão total da malha urbana ainda não é divulgada em fonte oficial.',

  clima:
    'O clima é tropical com estação seca, com verões quentes e chuvosos (frequentemente acima de 30 °C) e invernos secos e amenos.',
  climaTreino:
    'O calor intenso do verão pede treino ao ar livre cedo ou à noite; a baixa umidade do inverno seco favorece o desempenho, mas exige atenção à hidratação.',

  mobilidade:
    'Barretos é servida pelas rodovias Brigadeiro Faria Lima (SP-326) e Assis Chateaubriand (SP-425), conectando ao norte paulista, ao Triângulo Mineiro e à capital.',

  corridas: [
    {
      nome: 'Parque Night Run',
      descricao:
        'Corrida noturna no Parque do Peão, em circuito asfaltado, com provas de 5 km e 10 km.',
    },
    {
      nome: 'Unimed Run Barretos',
      descricao:
        'Prova de rua com distâncias que chegam a 21 km, parte da programação esportiva da cidade.',
    },
  ],
  culturaEsportiva:
    'A cultura é fortemente ligada ao rodeio e aos esportes equestres (Festa do Peão), com uma cena crescente de corrida de rua e atividades na Região dos Lagos do Parque do Peão.',
  academias:
    'A oferta reúne academias nos bairros residenciais, com perfil de qualidade de vida do interior, complementada pelo Parque do Peão e seus lagos.',

  destaquesFitness: [
    'Parque do Peão como grande hub de treino ao ar livre (pista, lagos e áreas verdes).',
    'Cena de corrida de rua ativa (Parque Night Run, Unimed Run).',
    'IDHM alto e perfil de qualidade de vida que sustentam o mercado fitness.',
    'Forte amplitude sazonal (calor no verão, seca no inverno), que pede ajuste de horários.',
  ],

  precos: {
    avulsaMin: 65,
    avulsaMax: 155,
    mensalMin: 340,
    mensalMax: 920,
    onlineMin: 170,
    onlineMax: 430,
  },

  conclusao:
    'Capital do rodeio e polo nacional de saúde, Barretos tem no Parque do Peão um enorme hub de treino ao ar livre. Um personal trainer ajuda a aproveitar a Região dos Lagos com método, ajustando os horários ao calor do verão e à seca do inverno.',

  vizinhas: ['ribeirao-preto-sp', 'sao-jose-do-rio-preto-sp'],

  fontes: [
    { nome: 'IBGE Cidades — Barretos', url: 'https://cidades.ibge.gov.br/brasil/sp/barretos/panorama' },
    { nome: 'Prefeitura de Barretos', url: 'https://www.barretos.sp.gov.br/' },
    { nome: 'Atlas Brasil — IDHM', url: 'https://www.atlasbrasil.org.br/' },
  ],
  atualizadoEm: '2026-06-29',
};
