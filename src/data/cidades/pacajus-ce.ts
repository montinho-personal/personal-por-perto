import type { Cidade } from '../../lib/types';

export const cidade: Cidade = {
  slug: 'pacajus-ce',
  nome: 'Pacajus',
  uf: 'CE',
  estado: 'Ceará',
  estadoSlug: 'ceara',
  regiao: 'Nordeste',
  gentilico: 'pacajuense',
  tipo: 'cidade',

  populacao: 70983,
  populacaoAno: 2022,
  idhm: 0.659,
  idhmClasse: 'médio',
  altitudeM: 60,

  resumoEconomico:
    'Pacajus fica na Região Metropolitana de Fortaleza, cortada pela BR-116, a cerca de 50 km da capital. Junto com a vizinha Horizonte forma um dos polos industriais mais dinâmicos do Ceará, com destaque para tecelagem de fios de algodão e fabricação de papelão ondulado. A economia se apoia em serviços e comércio varejista, na indústria de transformação e na administração pública, favorecida pela posição logística às margens da rodovia que liga o Ceará ao restante do Nordeste.',

  mercado:
    'Como cidade em crescimento na Região Metropolitana de Fortaleza, Pacajus tem um mercado fitness em expansão, apoiado em academias de bairro e no fluxo de trabalhadores do polo industrial. A procura por personal trainers tende a crescer entre quem busca treino orientado para lidar com o calor constante e para conciliar a atividade física com a rotina de trabalho na indústria e no comércio.',

  bairrosNobres: ['Centro', 'Aldeia Parque', 'Alto da Boa Vista', 'Cruz das Almas'],
  bairrosPopulares: ['Croatá', 'Coaçu', 'Tucum', 'Lagoa Seca'],

  parques: [
    {
      nome: 'Lagoa de Itaipaba',
      descricao:
        'Uma das lagoas do município, o entorno serve de referência para caminhada e treino ao ar livre em meio à paisagem de espelho d’água típica da região.',
    },
    {
      nome: 'Açude do Povo',
      descricao:
        'Reservatório urbano que integra o cotidiano da cidade; as vias do entorno são usadas para caminhada e corrida por moradores dos bairros próximos.',
    },
    {
      nome: 'Praças e vias do Centro',
      descricao:
        'As praças e ruas da área central concentram parte da atividade física da cidade, sobretudo no início da manhã e no fim da tarde, quando o calor dá trégua.',
    },
  ],
  ciclovias:
    'A estrutura cicloviária ainda é limitada e concentrada em trechos da área urbana; boa parte do pedal e da corrida acontece nas vias internas dos bairros e em contornos que evitam o tráfego pesado da BR-116.',

  clima:
    'O clima é tropical quente, com influência semiárida amenizada pela proximidade do litoral. As temperaturas se mantêm altas o ano todo, tipicamente entre 23 °C e 33 °C, e as chuvas se concentram no primeiro semestre, sobretudo de fevereiro a maio, deixando o segundo semestre mais seco e ensolarado.',
  climaTreino:
    'O calor constante e a forte incidência solar pedem treinos no início da manhã ou no fim da tarde, com hidratação reforçada e proteção contra o sol; nos horários de pico de calor, ambientes climatizados são a opção mais segura para manter a constância.',

  mobilidade:
    'A cidade é cortada pela BR-116, principal eixo rodoviário que a conecta a Fortaleza e ao interior do Ceará, o que sustenta a vocação logística e industrial do município. O deslocamento urbano é feito por ônibus, vans e transporte por aplicativo, com boa parte da população se movimentando entre Pacajus, Horizonte e a capital.',

  corridas: [
    {
      nome: 'Corrida do Trabalhador (Pacajus Terra de Campeões)',
      descricao:
        'Evento esportivo tradicional realizado em torno do 1º de maio, Dia do Trabalhador, que reúne a comunidade em provas de rua na cidade.',
    },
    {
      nome: 'Calendário de corridas da Região Metropolitana',
      descricao:
        'A proximidade com Fortaleza dá acesso a um calendário movimentado de corridas de rua na Região Metropolitana, opção para quem busca provas fora do município.',
    },
  ],
  culturaEsportiva:
    'A cultura esportiva combina o uso de praças, lagoas e açudes para caminhada e corrida, o futebol de bairro e a participação em provas de rua da Região Metropolitana de Fortaleza — tudo condicionado ao calor característico da cidade.',
  academias:
    'A oferta é formada principalmente por academias de musculação e treino funcional distribuídas pelos bairros centrais e residenciais, com porte compatível com uma cidade em crescimento no entorno de Fortaleza.',

  destaquesFitness: [
    'Cidade da Região Metropolitana de Fortaleza, a cerca de 50 km da capital pela BR-116.',
    'Polo industrial integrado a Horizonte, com forte presença de tecelagem e transformação.',
    'Lagoas e açudes que servem de espaço para caminhada e corrida ao ar livre.',
    'Calor constante o ano todo, que exige planejamento de horário e hidratação no treino.',
  ],

  precos: {
    avulsaMin: 45,
    avulsaMax: 110,
    mensalMin: 240,
    mensalMax: 660,
    onlineMin: 110,
    onlineMax: 340,
  },

  conclusao:
    'Cidade quente e em expansão no eixo da BR-116, Pacajus pede um treino adaptado ao calor e que aproveite as praças, lagoas e açudes como espaços ao ar livre. Um personal trainer ajuda a organizar a rotina respeitando o clima, definindo os melhores horários e mantendo a constância em meio à rotina de trabalho na indústria e no comércio.',

  vizinhas: ['fortaleza-ce', 'horizonte-ce'],

  fontes: [
    { nome: 'IBGE Cidades — Pacajus', url: 'https://cidades.ibge.gov.br/brasil/ce/pacajus/panorama' },
    { nome: 'Prefeitura de Pacajus', url: 'https://www.pacajus.ce.gov.br/' },
    { nome: 'Atlas Brasil — IDHM', url: 'https://www.atlasbrasil.org.br/' },
  ],
  atualizadoEm: '2026-06-29',
};
