import type { Cidade } from '../../lib/types';

export const cidade: Cidade = {
  slug: 'mogi-das-cruzes-sp',
  nome: 'Mogi das Cruzes',
  uf: 'SP',
  estado: 'São Paulo',
  estadoSlug: 'sao-paulo',
  regiao: 'Sudeste',
  gentilico: 'mogiano',
  tipo: 'cidade',

  populacao: 451505,
  populacaoAno: 2022,
  idhm: 0.783,
  idhmClasse: 'alto',
  altitudeM: 780,

  resumoEconomico:
    'Maior cidade do Alto Tietê e integrante da Região Metropolitana de São Paulo (a cerca de 40 km a leste da capital), Mogi das Cruzes combina um forte cinturão verde agrícola (hortifrúti, orquídeas e caqui) com um parque industrial relevante. Polariza economicamente toda a sub-região do Alto Tietê.',

  mercado:
    'O mercado fitness é maduro e diversificado, com boxes de crossfit, academias tradicionais de musculação e ampla oferta de personal trainers. O clima ameno de altitude favorece o treino ao ar livre nos parques.',

  bairrosNobres: ['Vila Oliveira', 'Novo Mogilar', 'Alto Ipiranga', 'Jardim Armênia'],
  bairrosPopulares: ['Brás Cubas', 'Jundiapeba', 'Cezar de Souza', 'Parque Monte Líbano'],

  parques: [
    {
      nome: 'Parque Centenário da Imigração Japonesa',
      descricao:
        'Cerca de 215 mil m² em Cezar de Souza, com pista de caminhada, academia ao ar livre, quadras, campo, pista de skate e trilhas.',
    },
    {
      nome: 'Parque da Cidade',
      descricao:
        'Cerca de 85 mil m², com pista de caminhada e ciclovia circular pavimentada de aproximadamente 1,2 km e áreas esportivas.',
    },
    {
      nome: 'Parque Leon Feffer',
      descricao:
        'Cerca de 26 hectares em Brás Cubas, com pista de caminhada, campo, beach soccer, quadras, pista de skate e lago.',
    },
  ],
  ciclovias:
    'Há ciclovia circular no Parque da Cidade (cerca de 1,2 km) e malha cicloviária na região do Novo Mogilar; a extensão total ainda não é divulgada em fonte oficial.',

  clima:
    'O clima é subtropical, com média anual em torno de 20 °C, sendo julho o mês mais frio e fevereiro o mais quente.',
  climaTreino:
    'O clima ameno e a altitude favorecem o treino ao ar livre o ano todo; as manhãs frias de inverno pedem aquecimento mais longo.',

  mobilidade:
    'A Rodovia Ayrton Senna (SP-70) corta o município, com entroncamento da Mogi-Dutra (SP-88), conectando direto a Guarulhos, Suzano e à capital.',

  corridas: [
    {
      nome: 'Braz Cubas Running',
      descricao:
        'Promovida pelo Centro Universitário Braz Cubas, com provas de 5 km, 10 km e caminhada.',
    },
    {
      nome: 'Corrida Pé no Chão',
      descricao:
        'Prova de rua com percursos de 5 km e 10 km, parte do calendário esportivo da cidade.',
    },
  ],
  culturaEsportiva:
    'Mogi tem calendário ativo de corridas de rua e tradição em esportes de aventura (já sediou corrida de aventura nacional), com unidade do SESI e programação esportiva regular.',
  academias:
    'A oferta reúne boxes de crossfit, academias tradicionais e estúdios, complementada por parques amplos e bem equipados com academia ao ar livre.',

  destaquesFitness: [
    'Parques amplos e bem equipados com academia ao ar livre (Centenário, Leon Feffer).',
    'Calendário recorrente de corridas de rua.',
    'Cena de crossfit consolidada com vários boxes.',
    'Clima de altitude ameno, ótimo para treino outdoor o ano todo.',
  ],

  precos: {
    avulsaMin: 70,
    avulsaMax: 175,
    mensalMin: 370,
    mensalMax: 980,
    onlineMin: 180,
    onlineMax: 450,
  },

  conclusao:
    'Maior cidade do Alto Tietê, Mogi das Cruzes une clima ameno, parques completos e cena de corrida e crossfit ativa. Um personal trainer ajuda a aproveitar o Parque Centenário e o Leon Feffer com método, o ano todo.',

  vizinhas: ['guarulhos-sp', 'sao-paulo-sp'],

  fontes: [
    { nome: 'IBGE Cidades — Mogi das Cruzes', url: 'https://cidades.ibge.gov.br/brasil/sp/mogi-das-cruzes/panorama' },
    { nome: 'Prefeitura de Mogi das Cruzes', url: 'https://www.mogidascruzes.sp.gov.br/' },
    { nome: 'Atlas Brasil — IDHM', url: 'https://www.atlasbrasil.org.br/' },
  ],
  atualizadoEm: '2026-06-29',
};
