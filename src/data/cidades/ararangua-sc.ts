import type { Cidade } from '../../lib/types';

export const cidade: Cidade = {
  slug: 'ararangua-sc',
  nome: 'Araranguá',
  uf: 'SC',
  estado: 'Santa Catarina',
  estadoSlug: 'santa-catarina',
  regiao: 'Sul',
  gentilico: 'araranguaense',
  tipo: 'cidade',

  populacao: 71922,
  populacaoAno: 2022,
  idhm: 0.76,
  idhmClasse: 'alto',
  altitudeM: 13,

  resumoEconomico:
    'No extremo sul de Santa Catarina, às margens do rio Araranguá e perto do litoral, Araranguá é polo regional de comércio, serviços, saúde e educação para um conjunto amplo de municípios vizinhos. Conhecida como "Cidade das Avenidas", reúne comércio forte, agropecuária (arroz e fumo na região) e turismo de praia, e ganhou novo impulso com a chegada do campus da UFSC.',

  mercado:
    'A condição de polo regional concentra demanda por academias, estúdios e assessorias de corrida que atendem moradores e quem vem das cidades vizinhas. O público universitário do campus da UFSC e o turismo de verão no Morro dos Conventos ajudam a movimentar o mercado fitness ao longo do ano.',

  bairrosNobres: ['Centro', 'Jardim das Avenidas', 'Urussanguinha', 'Cidade Alta'],
  bairrosPopulares: ['Mato Alto', 'Coloninha', 'Aeroporto', 'Alto Feliz'],

  parques: [
    {
      nome: 'Orla do rio Araranguá',
      descricao:
        'Beira-rio com áreas de caminhada e lazer no perímetro urbano, ponto natural para treino ao ar livre e atividades em grupo.',
    },
    {
      nome: 'Morro dos Conventos',
      descricao:
        'Balneário a cerca de 10 km do centro, com praia, dunas, falésias e a foz do rio Araranguá — cenário para corrida na areia, trilhas e treino funcional.',
    },
    {
      nome: 'Praças e academias ao ar livre do Centro',
      descricao:
        'A "Cidade das Avenidas" tem largas vias arborizadas e praças com equipamentos de ginástica que servem ao treino urbano diário.',
    },
  ],
  ciclovias:
    'As avenidas largas que dão fama à cidade favorecem o deslocamento a pé e de bicicleta; a extensão exata de ciclovias não é divulgada em fonte oficial consolidada.',

  clima:
    'O clima é subtropical úmido, de característica litorânea no sul catarinense, com verões quentes e úmidos (em torno de 26 °C a 28 °C), invernos frios (mínimas próximas de 10 °C) e influência marcante dos ventos do mar.',
  climaTreino:
    'O inverno costuma ser agradável para treino ao ar livre; no verão, o calor e a umidade pedem prioridade para a manhã ou o fim de tarde, hidratação reforçada e atenção ao vento na orla e na praia.',

  mobilidade:
    'A BR-101 corta a região e liga Araranguá ao eixo norte-sul do litoral catarinense, conectando-a a Criciúma, ao restante de SC e ao Rio Grande do Sul; o acesso ao Morro dos Conventos é feito por via local a partir do centro.',

  corridas: [
    {
      nome: 'Trail Run Morro dos Conventos',
      descricao:
        'Corrida de trilha com largada e chegada na região do farol do Morro dos Conventos, em percurso que mistura dunas, beira-mar, vegetação e estradas.',
    },
    {
      nome: 'Corrida Rústica Hildo de Souza Santana',
      descricao:
        'Prova de rua promovida pela Secretaria de Esportes, com percursos curtos (3 km e 6 km) realizada no Balneário Morro dos Conventos.',
    },
  ],
  culturaEsportiva:
    'A vida esportiva gira em torno da orla do rio Araranguá e, sobretudo, do Morro dos Conventos, que vira palco de trail runs, corridas rústicas e provas de MTB. O público universitário da UFSC e o turismo de verão reforçam a cultura de atividade física ao ar livre.',
  academias:
    'A oferta reúne academias, estúdios e assessorias de corrida concentrados no Centro e nos bairros mais estruturados, sustentados pelo papel de polo regional e bem complementados pelos espaços ao ar livre da orla e da praia.',

  destaquesFitness: [
    'Polo regional do extremo sul de SC, com demanda que vem também das cidades vizinhas.',
    'Morro dos Conventos oferece praia, dunas e trilhas para corrida e treino funcional.',
    'Calendário de provas ao ar livre, como trail run e corrida rústica.',
    'Inverno ameno favorece o treino externo; o verão litorâneo exige ajuste de horário e hidratação.',
  ],

  precos: {
    avulsaMin: 55,
    avulsaMax: 120,
    mensalMin: 270,
    mensalMax: 720,
    onlineMin: 130,
    onlineMax: 360,
  },

  conclusao:
    'Polo regional do extremo sul catarinense, com a orla do rio Araranguá, a praia do Morro dos Conventos e o campus da UFSC, Araranguá oferece um ambiente favorável ao treino ao ar livre o ano todo. Um personal trainer ajuda a aproveitar a praia e as avenidas da cidade e a preparar provas — da primeira corrida ao trail run nas dunas.',

  vizinhas: ['criciuma-sc', 'tubarao-sc'],

  fontes: [
    { nome: 'IBGE Cidades — Araranguá', url: 'https://cidades.ibge.gov.br/brasil/sc/ararangua/panorama' },
    { nome: 'Prefeitura de Araranguá', url: 'https://ararangua.sc.gov.br/' },
    { nome: 'Atlas Brasil — IDHM', url: 'https://www.atlasbrasil.org.br/' },
  ],
  atualizadoEm: '2026-06-29',
};
