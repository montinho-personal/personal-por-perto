import type { Cidade } from '../../lib/types';

export const cidade: Cidade = {
  slug: 'toritama-pe',
  nome: 'Toritama',
  uf: 'PE',
  estado: 'Pernambuco',
  estadoSlug: 'pernambuco',
  regiao: 'Nordeste',
  gentilico: 'toritamense',
  tipo: 'cidade',

  populacao: 41137,
  populacaoAno: 2022,
  idhm: 0.618,
  idhmClasse: 'médio',
  altitudeM: 349,

  resumoEconomico:
    'Conhecida como a "Capital do Jeans", Toritama é o menor município de Pernambuco em área territorial, mas um dos mais dinâmicos economicamente: concentra mais de 3 mil confecções e cerca de 50 lavanderias industriais de jeans, respondendo por uma fatia relevante da produção nacional de peças em denim. Ao lado de Santa Cruz do Capibaribe e Caruaru, forma o Polo de Confecções do Agreste, cortado pela BR-104 e movido por uma rede densa de facções, pequenas fábricas e comércio atacadista que atrai compradores de todo o país, especialmente durante a Feira do Jeans e o Festival do Jeans de Toritama.',

  mercado:
    'O ritmo intenso da produção têxtil — muitas vezes em turnos alternativos dentro das próprias facções e lavanderias — molda a procura por atividade física na cidade, com espaço para academias de bairro, treino funcional de curta duração e atendimento personalizado que se encaixe em rotinas de trabalho pouco convencionais. O poder aquisitivo gerado pela indústria do jeans sustenta um mercado fitness em expansão, ainda concentrado, mas com potencial de crescimento acompanhando o dinamismo econômico local.',

  bairrosNobres: ['Centro', 'Reserva Portugal', 'Alto da Bela Vista', 'Jardim das Oliveiras'],
  bairrosPopulares: ['Duque de Caxias', 'COHAB', 'El-Shadday', 'Deus é Fiel'],

  parques: [
    {
      nome: 'Parque Biblioteca Maria dos Anjos',
      descricao:
        'Inaugurado em 2024 no centro da cidade, reúne pista de caminhada, área de ginástica ao ar livre, quadras poliesportivas, skate park e biblioteca — a principal referência de lazer e atividade física de Toritama, também sede de eventos esportivos como a Corrida do Jeans.',
    },
    {
      nome: 'Margens do rio Capibaribe',
      descricao:
        'O rio que dá nome ao topônimo da cidade corta o território e tem trechos usados informalmente para caminhada, sujeitos à variação do volume de água ao longo do ano.',
    },
    {
      nome: 'Vias do entorno da Feira do Jeans e do Parque das Feiras',
      descricao:
        'Fora dos horários de maior movimento comercial, as avenidas largas do polo varejista, como a Avenida Dorival José Pereira, também servem de percurso improvisado para caminhada e corrida.',
    },
  ],
  ciclovias:
    'A estrutura cicloviária formal é limitada; o deslocamento de bicicleta acontece principalmente nas vias internas e no acesso entre bairros, convivendo com o intenso tráfego de motos e veículos de carga do polo de confecções.',

  clima:
    'O clima é semiárido, quente e seco, com um dos índices pluviométricos mais baixos do Agreste pernambucano — média histórica em torno de 550 mm de chuva por ano, concentrada no outono e inverno. As temperaturas variam entre cerca de 25 °C e 35 °C no verão e chegam perto dos 20 °C nas noites de inverno.',
  climaTreino:
    'O calor e a baixa umidade recomendam treinar ao ar livre nas primeiras horas da manhã ou no fim da tarde, com hidratação reforçada; no restante do dia, ambientes com sombra ou climatizados são a opção mais segura.',

  mobilidade:
    'Toritama é cortada pela BR-104, principal eixo rodoviário que liga o município a Caruaru e Santa Cruz do Capibaribe e, mais adiante, ao Recife. Obras recentes de duplicação e restauração do trecho entre Toritama, Caruaru e Taquaritinga do Norte melhoraram o fluxo de um corredor que recebe grande volume diário de veículos de carga ligados à indústria do jeans. O deslocamento interno é feito majoritariamente por carro, moto e ônibus, sem sistema de metrô ou VLT.',

  corridas: [
    {
      nome: '1ª Corrida do Jeans',
      descricao:
        'Prova de rua de 5 km organizada pela Associação Comercial e Industrial de Toritama (ACIT), com largada no Parque Biblioteca Maria dos Anjos, integrada à programação oficial do Festival do Jeans de Toritama em 2026.',
    },
  ],
  culturaEsportiva:
    'A cultura esportiva local ainda está em formação fora do universo do trabalho: o Parque Biblioteca Maria dos Anjos, com suas quadras e pista de caminhada, passou a concentrar boa parte do lazer ativo da população, e a Corrida do Jeans, atrelada ao Festival do Jeans, sinaliza o início de um calendário próprio de provas de rua na cidade.',
  academias:
    'A oferta é formada por academias locais de musculação e funcional, de porte compatível com uma cidade pequena, complementada pela estrutura pública de ginástica ao ar livre do Parque Biblioteca Maria dos Anjos; a procura por personal trainers cresce entre empresários e trabalhadores do setor de confecções que buscam treino flexível fora dos horários de produção.',

  destaquesFitness: [
    'Capital do Jeans: mais de 3 mil confecções e cerca de 50 lavanderias industriais movem a economia e a rotina da cidade.',
    'Parque Biblioteca Maria dos Anjos, inaugurado em 2024, como principal espaço público de treino e lazer ativo.',
    'Clima semiárido quente e seco do Agreste, que pede treino ao ar livre no início da manhã ou fim da tarde.',
    'Rotina de trabalho em turnos das facções e lavanderias, que valoriza horários alternativos de treino e sessões objetivas.',
  ],

  precos: {
    avulsaMin: 50,
    avulsaMax: 105,
    mensalMin: 250,
    mensalMax: 650,
    onlineMin: 110,
    onlineMax: 340,
  },

  conclusao:
    'Capital do Jeans e motor econômico do Agreste pernambucano, Toritama tem no Parque Biblioteca Maria dos Anjos seu principal ponto de treino ao ar livre, num cenário marcado pelo calor semiárido e pela rotina intensa da indústria de confecções. Um personal trainer ajuda a encaixar o treino nos horários alternativos do trabalho nas facções e lavanderias, respeitando o clima seco e quente característico da cidade.',

  vizinhas: ['santa-cruz-do-capibaribe-pe', 'caruaru-pe', 'recife-pe'],

  fontes: [
    { nome: 'IBGE Cidades — Toritama', url: 'https://cidades.ibge.gov.br/brasil/pe/toritama/panorama' },
    { nome: 'Prefeitura de Toritama', url: 'https://toritama.pe.gov.br/' },
    { nome: 'Atlas Brasil — IDHM', url: 'https://www.atlasbrasil.org.br/' },
  ],
  atualizadoEm: '2026-07-03',
};
