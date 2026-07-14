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
    'O mercado fitness de Mogi das Cruzes é maduro para o porte da cidade: boxes de crossfit consolidados, academias de rede e tradicionais de musculação e ampla oferta de personal trainers, servindo toda a sub-região do Alto Tietê. Bairros como Vila Oliveira e Novo Mogilar concentram o público de maior renda e os estúdios, enquanto os parques amplos — Centenário, da Cidade e Leon Feffer — dão estrutura gratuita para treino ao ar livre o ano todo, favorecido pelo clima ameno de altitude. Quem faz o pendular para a capital pela Ayrton Senna tende a treinar cedo ou à noite, perto de casa.',

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
  academiasProximas: [
    { nome: 'Smart Fit', detalhe: 'unidades na Vila Mogilar, no Centro Cívico e no Alto Ipiranga' },
    { nome: 'Boxes de crossfit', detalhe: 'cena consolidada, com vários boxes espalhados pela cidade' },
    { nome: 'Academias ao ar livre', detalhe: 'gratuitas, nos parques Centenário da Imigração Japonesa e Leon Feffer' },
  ],

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

  faqsExtra: [
    {
      pergunta: 'Onde dá para treinar com personal em Mogi das Cruzes?',
      resposta:
        'A cidade tem estrutura de sobra: os parques Centenário (215 mil m², com academia ao ar livre), da Cidade (ciclovia circular de 1,2 km) e Leon Feffer rendem treinos funcionais e de corrida gratuitos; as academias de rede cobrem a Vila Mogilar, o Centro Cívico e o Alto Ipiranga; e o atendimento em casa é comum nos bairros de maior renda, como Vila Oliveira e Novo Mogilar. O clima ameno de altitude deixa o treino ao ar livre confortável o ano todo.',
    },
    {
      pergunta: 'Crossfit, musculação ou personal: como escolher em Mogi?',
      resposta:
        'Não são excludentes. O box de crossfit entrega intensidade e turma; a musculação dá a base de força; e o personal individualiza — corrige execução, periodiza e adapta o plano ao seu histórico. Um caminho comum em Mogi é começar com personal para construir técnica e depois migrar (ou combinar) com o box ou a academia, mantendo o acompanhamento nos ciclos mais importantes, como preparação para as provas de rua da cidade.',
    },
    {
      pergunta: 'Quem tem dores ou limitações consegue treinar com acompanhamento em Mogi das Cruzes?',
      resposta:
        'Consegue. O Montinho Personal, destacado pelo portal, tem cursos voltados ao treino de pessoas com dores e limitações musculoesqueléticas e a experiência prática de quem já enfrentou dores comuns da musculação. Para o Alto Tietê, o formato mais prático é o acompanhamento online — treino adaptado, progressivo e com ajustes contínuos —, e o presencial pode ser avaliado conforme agenda e local, a partir da base na região de Alphaville. Sem promessa de cura: quadros clínicos pedem também médico ou fisioterapeuta.',
    },
  ],

  vizinhas: ['guarulhos-sp', 'sao-paulo-sp'],

  fontes: [
    { nome: 'IBGE Cidades — Mogi das Cruzes', url: 'https://cidades.ibge.gov.br/brasil/sp/mogi-das-cruzes/panorama' },
    { nome: 'Prefeitura de Mogi das Cruzes', url: 'https://www.mogidascruzes.sp.gov.br/' },
    { nome: 'Atlas Brasil — IDHM', url: 'https://www.atlasbrasil.org.br/' },
  ],
  atualizadoEm: '2026-07-14',
};
