import type { Cidade } from '../../lib/types';

export const cidade: Cidade = {
  slug: 'itapetinga-ba',
  nome: 'Itapetinga',
  uf: 'BA',
  estado: 'Bahia',
  estadoSlug: 'bahia',
  regiao: 'Nordeste',
  gentilico: 'itapetinguense',
  tipo: 'cidade',

  populacao: 65897,
  populacaoAno: 2022,
  idhm: 0.667,
  idhmClasse: 'médio',
  altitudeM: 268,

  resumoEconomico:
    'Itapetinga é um polo do sudoeste baiano conhecido como "terra firme e gado forte", com economia historicamente assentada na pecuária leiteira e de corte e em um parque industrial voltado a frigoríficos, laticínios e à indústria de calçados. O comércio e os serviços ganham peso a cada ano, e a presença de um campus da UESB reforça o papel da cidade como centro regional de educação e referência para os municípios vizinhos.',

  mercado:
    'Cidade média do interior baiano com população universitária e classe média ligada ao agronegócio e à indústria, Itapetinga tem demanda constante por academias e atendimento de personal trainer. O calor do semiárido faz do horário e da orientação profissional um diferencial para quem treina ao ar livre.',

  bairrosNobres: ['Centro', 'Bela Vista', 'Jardim Itapetinga', 'Igreja de Pedra'],
  bairrosPopulares: ['Cazumbá', 'Vila Operária', 'Pradoso', 'Cacim'],

  parques: [
    {
      nome: 'Parque Poliesportivo da Lagoa',
      descricao:
        'Principal espaço público de lazer e esporte da cidade, com área para caminhada e palco das grandes festas populares, como o São João, além de uso cotidiano para atividade física.',
    },
    {
      nome: 'Estádio Municipal',
      descricao:
        'Estrutura esportiva municipal usada para futebol, treinos e eventos, complementando a oferta de espaços públicos para a prática de atividade física.',
    },
    {
      nome: 'Praça do Vale do Leite (Praça dos Bois)',
      descricao:
        'Espaço público tradicional no Centro, ponto de encontro e referência urbana que também serve a caminhadas e ao convívio ao ar livre.',
    },
  ],
  ciclovias:
    'Itapetinga não possui malha cicloviária estruturada divulgada em fonte oficial; o pedal urbano se concentra nas vias do Centro e nos arredores da Lagoa.',

  clima:
    'O clima é semiárido quente, típico do sudoeste baiano, com temperaturas que variam ao longo do ano de cerca de 17 °C nas mínimas a 32 °C nas máximas, e chuvas concentradas em poucos meses.',
  climaTreino:
    'Pelo calor do semiárido e pela radiação solar intensa, o treino ao ar livre rende mais no começo da manhã e no fim da tarde; hidratação e proteção solar são essenciais nas horas mais quentes.',

  mobilidade:
    'A cidade é cortada pela BR-415, principal eixo rodoviário que liga Itapetinga a Itabuna e ao litoral cacaueiro e que margeia o campus Juvino Oliveira da UESB, consolidando o município como entroncamento de serviços do sudoeste baiano.',

  corridas: [
    {
      nome: 'Lagoa Night Run',
      descricao:
        'Corrida noturna de 10 km realizada na região da Lagoa, aproveitando as temperaturas mais amenas da noite para fugir do calor do dia.',
    },
    {
      nome: 'Street Run Itapetinga',
      descricao:
        'Corrida de rua local que movimenta o calendário esportivo da cidade e reúne corredores de diferentes níveis.',
    },
  ],
  culturaEsportiva:
    'Itapetinga tem uma cena de corrida de rua em crescimento, com provas como a Lagoa Night Run, e forte tradição de futebol amador; o calor faz com que muitos optem por treinar de manhã cedo, à noite ou em academia.',
  academias:
    'A oferta de academias acompanha o público universitário da UESB e a classe média ligada ao agronegócio e à indústria, com opções de musculação e treino funcional no Centro e nos bairros maiores.',

  destaquesFitness: [
    'Polo de pecuária leiteira e de calçados, com público de classe média e universitário (UESB).',
    'Parque Poliesportivo da Lagoa como principal espaço público de lazer e treino.',
    'Calendário de corrida de rua em expansão, incluindo a Lagoa Night Run noturna.',
    'BR-415 conecta a cidade a Itabuna e ao sul da Bahia, reforçando seu papel regional.',
  ],

  precos: {
    avulsaMin: 45,
    avulsaMax: 110,
    mensalMin: 240,
    mensalMax: 680,
    onlineMin: 110,
    onlineMax: 340,
  },

  conclusao:
    'Centro do Vale do Leite no sudoeste baiano, Itapetinga combina vida universitária, indústria e calor de semiárido. Um personal trainer ajuda a montar um plano que respeite os horários certos para treinar — manhã e noite — e a aproveitar bem espaços como o Parque Poliesportivo da Lagoa.',

  vizinhas: ['vitoria-da-conquista-ba', 'itabuna-ba'],

  fontes: [
    { nome: 'IBGE Cidades — Itapetinga', url: 'https://cidades.ibge.gov.br/brasil/ba/itapetinga/panorama' },
    { nome: 'Prefeitura de Itapetinga', url: 'https://itapetinga.ba.gov.br/' },
    { nome: 'Atlas Brasil — IDHM', url: 'https://www.atlasbrasil.org.br/' },
  ],
  atualizadoEm: '2026-06-29',
};
