import type { Cidade } from '../../lib/types';

export const cidade: Cidade = {
  slug: 'charqueadas-rs',
  nome: 'Charqueadas',
  uf: 'RS',
  estado: 'Rio Grande do Sul',
  estadoSlug: 'rio-grande-do-sul',
  regiao: 'Sul',
  gentilico: 'charqueadense',
  tipo: 'cidade',

  populacao: 35012,
  populacaoAno: 2022,
  idhm: 0.747,
  idhmClasse: 'alto',
  altitudeM: 22,

  resumoEconomico:
    'Na Região Metropolitana de Porto Alegre e às margens do rio Jacuí, Charqueadas nasceu das charqueadas que davam nome ao lugar — onde o charque era produzido e escoado pelo rio — e se reinventou a partir dos anos 1950 como polo industrial. A extração de carvão mineral (com a mineradora Copelmi), a geração de energia termelétrica e, sobretudo, a siderurgia da antiga Aços Finos Piratini estruturaram um forte polo metalmecânico. Hoje a indústria responde por metade do valor adicionado do município, com destaque para a produção de laminados longos de aço, seguida por serviços e administração pública.',

  mercado:
    'Como cidade industrial de porte médio na Região Metropolitana de Porto Alegre, Charqueadas tem um mercado fitness ligado à rotina de trabalhadores da indústria e do setor de serviços. A oferta se concentra em academias de musculação e treino funcional nos bairros centrais, e a procura por personal trainers cresce entre quem busca acompanhamento próximo, seja para conciliar o treino com turnos de trabalho, seja para aproveitar a orla do Jacuí ao ar livre.',

  bairrosNobres: ['Sede', 'São Miguel', 'Santo Antônio', 'Vila Aços Finos Piratini'],
  bairrosPopulares: ['Nossa Senhora da Conceição', 'Parque dos Coqueiros', 'Morada do Sol', 'São José'],

  parques: [
    {
      nome: 'Orla do Rio Jacuí',
      descricao:
        'A frente de água que define a cidade: às margens do rio Jacuí, a orla concentra a paisagem ribeirinha e trechos usados para caminhada, corrida e treino ao ar livre, com vista para o rio que deu origem a Charqueadas.',
    },
    {
      nome: 'Praças e áreas verdes da Sede',
      descricao:
        'No núcleo urbano, praças e espaços públicos servem de apoio para caminhada, alongamento e atividades leves no dia a dia de quem mora perto do centro.',
    },
    {
      nome: 'Entorno rural e vias de acesso',
      descricao:
        'Fora da malha urbana, estradas e áreas de campo do entorno oferecem percursos para pedal e corrida de longa distância, aproveitando o relevo plano típico da várzea do Jacuí.',
    },
  ],
  ciclovias:
    'A estrutura cicloviária é modesta e concentrada em trechos da área urbana; boa parte do pedal acontece nas vias locais e no entorno da orla, favorecida pelo terreno plano da região ribeirinha.',

  clima:
    'O clima é subtropical úmido, com as quatro estações bem marcadas: verões quentes e abafados, com bastante umidade vinda do rio, e invernos frios, acompanhados de chuvas frequentes e dias nublados. A amplitude entre as estações é grande, característica do sul do Rio Grande do Sul.',
  climaTreino:
    'No verão, o calor com alta umidade pede treinar cedo ou no fim da tarde, com hidratação reforçada; no inverno, o frio e as chuvas favorecem ambientes cobertos, e é preciso aquecer bem antes de atividades ao ar livre. A primavera e o outono costumam ser os períodos mais agradáveis para treinar na orla e nas praças.',

  mobilidade:
    'Charqueadas se conecta à Região Metropolitana de Porto Alegre pela BR-290 (Free Way), cujo acesso ao município passou por obras de duplicação e viadutos, e pela ERS-401, que liga a cidade a municípios vizinhos como São Jerônimo. O rio Jacuí, historicamente a via de escoamento do charque e depois do carvão, integra a hidrovia da bacia do Jacuí. O transporte urbano é feito por ônibus, com linhas metropolitanas para Porto Alegre.',

  corridas: [
    {
      nome: 'Corridas de rua metropolitanas',
      descricao:
        'A proximidade com Porto Alegre e com cidades da Região Metropolitana dá acesso a um calendário ativo de corridas de rua ao longo do ano, alternativa comum para os corredores da cidade.',
    },
    {
      nome: 'Circuitos esportivos do Sesc/RS',
      descricao:
        'As etapas de corrida promovidas pelo Sesc no Rio Grande do Sul reforçam a agenda regional de provas acessíveis aos moradores do entorno de Charqueadas.',
    },
  ],
  culturaEsportiva:
    'A cultura esportiva combina o uso da orla do Jacuí para caminhada e corrida, a prática de musculação e funcional nas academias dos bairros e a participação em provas de rua da Região Metropolitana de Porto Alegre — um cenário moldado pela rotina industrial e pela paisagem ribeirinha.',
  academias:
    'A oferta é formada por academias locais de musculação e treino funcional, distribuídas pelos bairros centrais e residenciais, com porte compatível com uma cidade industrial de médio porte da Região Metropolitana.',

  destaquesFitness: [
    'Orla do rio Jacuí como espaço de caminhada, corrida e treino ao ar livre.',
    'Clima subtropical com quatro estações, que muda o planejamento do treino ao longo do ano.',
    'Cidade industrial da RM de Porto Alegre, com polo de carvão, energia e siderurgia (aço).',
    'Conexão pela BR-290 e ERS-401 e agenda de corridas da Região Metropolitana.',
  ],

  precos: {
    avulsaMin: 55,
    avulsaMax: 120,
    mensalMin: 260,
    mensalMax: 720,
    onlineMin: 120,
    onlineMax: 360,
  },

  conclusao:
    'Cidade industrial e ribeirinha na Região Metropolitana de Porto Alegre, Charqueadas pede um treino que respeite as quatro estações e aproveite a orla do Jacuí. Um personal trainer ajuda a encaixar a atividade física na rotina de trabalho, a escolher os melhores horários diante do calor do verão e do frio do inverno e a manter a constância ao longo do ano.',

  vizinhas: ['eldorado-do-sul-rs', 'guaiba-rs'],

  fontes: [
    { nome: 'IBGE Cidades — Charqueadas', url: 'https://cidades.ibge.gov.br/brasil/rs/charqueadas/panorama' },
    { nome: 'Prefeitura de Charqueadas', url: 'https://www.charqueadas.rs.gov.br/' },
    { nome: 'Atlas Brasil — IDHM', url: 'https://www.atlasbrasil.org.br/' },
  ],
  atualizadoEm: '2026-06-29',
};
