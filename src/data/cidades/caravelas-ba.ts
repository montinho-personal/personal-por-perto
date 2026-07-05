import type { Cidade } from '../../lib/types';

export const cidade: Cidade = {
  slug: 'caravelas-ba',
  nome: 'Caravelas',
  uf: 'BA',
  estado: 'Bahia',
  estadoSlug: 'bahia',
  regiao: 'Nordeste',
  gentilico: 'caravelense',
  tipo: 'cidade',

  populacao: 20580,
  populacaoAno: 2022,
  idhm: 0.616,
  idhmClasse: 'médio',
  altitudeM: 10,

  resumoEconomico:
    'No litoral do extremo sul da Bahia, na foz do rio que lhe dá nome, Caravelas é a porta de entrada para o Parque Nacional Marinho de Abrolhos, arquipélago a cerca de 70 km da costa. O PIB municipal, de aproximadamente R$ 358 milhões, tem na agropecuária (40,3% do valor adicionado) — que aqui inclui a pesca e a carcinicultura — sua maior fatia, seguida pela administração pública (29,5%) e pelos serviços (25,2%), estes últimos cada vez mais puxados pelo turismo. Cerca de três mil pescadores artesanais de Caravelas e da vizinha Nova Viçosa vivem da captura de camarão-sete-barbas e peixes de mangue no maior banco de camarão da Bahia, atividade que convive com os manguezais preservados pela Reserva Extrativista de Cassurubá, criada em 2009 entre as duas cidades.',

  mercado:
    'O mercado fitness de Caravelas é pequeno e fortemente sazonal, moldado pela temporada de observação de baleias-jubarte (de julho a novembro) e pela alta do turismo de mergulho em Abrolhos (de dezembro a abril). A procura por personal trainer tende a se concentrar no Centro histórico e na Praia do Grauçá, tanto entre moradores quanto entre visitantes de temporada mais longa.',

  bairrosNobres: ['Centro', 'Grauçá'],
  bairrosPopulares: ['Barra de Caravelas', 'Ponta da Areia'],

  parques: [
    {
      nome: 'Praia do Grauçá',
      descricao:
        'A praia mais urbanizada e frequentada de Caravelas, no distrito da Barra, com ampla faixa de areia sombreada por árvores, quiosques e pousadas; é o principal espaço de caminhada e de esportes como vôlei e futebol na areia, além de sediar o Réveillon e o CarnaBarra.',
    },
    {
      nome: 'Cais de Caravelas',
      descricao:
        'Ponto de saída diária dos barcos que levam turistas e mergulhadores até o Parque Nacional Marinho de Abrolhos, cerca de três horas de viagem; o entorno do cais concentra o movimento do turismo náutico da cidade.',
    },
    {
      nome: 'Reserva Extrativista de Cassurubá',
      descricao:
        'Unidade de conservação criada em 2009 entre Caravelas e Nova Viçosa, formada por um dos maiores complexos de manguezais do Hemisfério Sul, com passeios de barco pelos canais até a Coroa da Barra.',
    },
  ],
  ciclovias:
    'Não há malha cicloviária estruturada na cidade; o deslocamento de bicicleta acontece nas ruas do Centro histórico e no acesso à Praia do Grauçá, no distrito da Barra.',

  clima:
    'O clima é tropical úmido, quente o ano todo por causa da baixa altitude e da proximidade com o mar, com chuvas relativamente bem distribuídas e volume elevado de precipitação típico do litoral do extremo sul baiano.',
  climaTreino:
    'O calor e a umidade do litoral pedem treinos nas primeiras horas da manhã ou no fim da tarde, com boa hidratação; a maré e os horários dos passeios de barco para Abrolhos também influenciam a rotina de quem combina treino com turismo náutico na cidade.',

  mobilidade:
    'O acesso rodoviário mais comum é pela BR-101 até o entroncamento de Posto da Mata, de onde partem cerca de 80 km pela BR-418 até Caravelas; outra rota liga Teixeira de Freitas a Alcobaça pela BA-290 e segue pela BA-001 até a cidade. Caravelas fica a cerca de 18 km em linha reta de Nova Viçosa, separadas pelos manguezais da Reserva de Cassurubá, e o deslocamento interno é feito a pé, de bicicleta ou por transporte local.',

  corridas: [],
  culturaEsportiva:
    'A vida esportiva de Caravelas gira em torno do mar: passeios de barco para observação de baleias-jubarte entre julho e novembro, mergulho em Abrolhos entre dezembro e abril, além de vôlei e futebol de areia na Praia do Grauçá. A pesca artesanal, tradição de gerações de famílias caravelenses, também estrutura boa parte da rotina física da população.',
  academias:
    'A oferta de academias e estúdios é pequena, concentrada no Centro histórico e na Barra, perto do Grauçá, atendendo tanto moradores quanto o público turístico atraído por Abrolhos e pela observação de baleias.',

  destaquesFitness: [
    'Porta de entrada para o Parque Nacional Marinho de Abrolhos, com passeios diários de barco para mergulho e observação de vida marinha.',
    'Temporada de baleias-jubarte de julho a novembro, com embarcações autorizadas pelo ICMBio partindo do cais da cidade.',
    'Reserva Extrativista de Cassurubá, com um dos maiores complexos de manguezais do Hemisfério Sul entre Caravelas e Nova Viçosa.',
    'Praia do Grauçá, mais urbanizada do município, como principal espaço de caminhada e esportes de areia.',
  ],

  precos: {
    avulsaMin: 50,
    avulsaMax: 120,
    mensalMin: 230,
    mensalMax: 620,
    onlineMin: 120,
    onlineMax: 330,
  },

  conclusao:
    'Entre o mar aberto rumo a Abrolhos e os manguezais de Cassurubá, Caravelas tem no turismo náutico e na Praia do Grauçá o cenário natural para o treino ao ar livre. Um personal trainer ajuda a organizar essa rotina com método, respeitando o calor do litoral e a sazonalidade do turismo de baleias e mergulho que movimenta a cidade.',

  vizinhas: ['teixeira-de-freitas-ba', 'prado-ba'],

  fontes: [
    { nome: 'IBGE Cidades — Caravelas', url: 'https://cidades.ibge.gov.br/brasil/ba/caravelas/panorama' },
    { nome: 'Atlas Brasil — IDHM', url: 'https://www.atlasbrasil.org.br/' },
    { nome: 'ICMBio — Reserva Extrativista de Cassurubá', url: 'https://www.gov.br/icmbio/pt-br' },
  ],
  atualizadoEm: '2026-07-05',
};
