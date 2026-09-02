import type { Cidade } from '../../lib/types';

export const cidade: Cidade = {
  slug: 'porto-nacional-to',
  nome: 'Porto Nacional',
  uf: 'TO',
  estado: 'Tocantins',
  estadoSlug: 'tocantins',
  regiao: 'Norte',
  gentilico: 'porto-nacionalense',
  tipo: 'cidade',

  populacao: 64418,
  populacaoAno: 2022,
  idhm: 0.74,
  idhmClasse: 'alto',
  altitudeM: 212,

  resumoEconomico:
    'Uma das cidades mais antigas do Tocantins, Porto Nacional fica no centro do estado, às margens do rio Tocantins represado pela usina Luís Eduardo Magalhães, que formou o grande lago de Palmas. A cidade combina o centro histórico tombado, a vida universitária da UFT e do IFTO e a proximidade com a capital, a cerca de 60 km. A economia se apoia em serviços, comércio, administração pública, educação e turismo voltado às praias de água doce.',

  mercado:
    'Cidade média e universitária, Porto Nacional reúne um público jovem ligado à UFT e ao IFTO e um forte fluxo de visitantes na temporada de praias, entre junho e julho. Essa combinação sustenta uma demanda crescente por personal trainers, treino ao ar livre na orla do lago e acompanhamento para corrida de rua, em um mercado ainda em formação, mas com bom potencial.',

  bairrosNobres: ['Centro Histórico', 'Jardim dos Pássaros', 'Setor Aeroporto', 'São Francisco'],
  bairrosPopulares: ['Aimorés', 'Jardim Querido', 'Jardim Municipal', 'Nova Capital'],

  parques: [
    {
      nome: 'Avenida Beira Lago',
      descricao:
        'Orla urbana às margens do lago, no entorno do centro histórico tombado, com calçadão e área de caminhada com vista para a água — o principal cartão-postal da cidade e ponto de treino ao ar livre.',
    },
    {
      nome: 'Praia de Porto Real',
      descricao:
        'Praia de água doce na orla do lago, com faixa de areia e estrutura de quiosques que ganha vida na temporada de verão, ideal para corridas e treinos funcionais na areia fora do pico de sol.',
    },
    {
      nome: 'Praia de Luzimangues',
      descricao:
        'Outro polo de lazer à beira do lago, do lado próximo a Palmas, com amplas faixas de areia e movimento intenso na temporada — espaço aberto para caminhada e atividades ao ar livre.',
    },
  ],
  ciclovias:
    'A estrutura cicloviária ainda é incipiente e concentrada em trechos urbanos. O uso da bicicleta acontece sobretudo nas vias do plano urbano e nos acessos à orla, exigindo atenção redobrada no compartilhamento com o trânsito.',

  clima:
    'O clima é tropical de Cerrado, quente o ano inteiro, com seca marcante de maio a setembro e estação chuvosa de outubro a abril. As temperaturas são altas, frequentemente passando dos 35 °C nos meses mais secos, com baixa umidade no período da estiagem.',
  climaTreino:
    'Pelo calor forte e pela seca acentuada, o treino ao ar livre rende muito mais no início da manhã e no fim da tarde, com ênfase total em hidratação e proteção solar — sobretudo entre agosto e setembro, quando o ar fica mais seco.',

  mobilidade:
    'Porto Nacional é cortada pela BR-010 e fica a cerca de 60 km de Palmas, a capital, com ligação rodoviária direta e acesso ao aeroporto da região metropolitana. O transporte interno é feito por ônibus e veículos próprios, em uma malha urbana de cidade média.',

  corridas: [
    {
      nome: 'Corrida de Rua do IFTO',
      descricao:
        'Prova de corrida de rua promovida em celebração ao aniversário do campus Porto Nacional do Instituto Federal do Tocantins, com percurso em torno de 5 km pelas ruas da cidade.',
    },
    {
      nome: 'Corrida Amigos de Aço',
      descricao:
        'Corrida de rua tradicional realizada na cidade, reunindo atletas locais e da região em percursos pelas vias urbanas de Porto Nacional.',
    },
  ],
  culturaEsportiva:
    'A cultura esportiva se apoia na orla do lago e nas praias de água doce, que viram polos de lazer e atividade física na temporada, e no público universitário da UFT e do IFTO, que ajuda a movimentar a corrida de rua e o treino ao ar livre na cidade.',
  academias:
    'A oferta de academias acompanha o porte de uma cidade média universitária, concentrada nos bairros centrais e de maior movimento. O grande diferencial é a estrutura natural ao ar livre, com a orla, as praias e o centro histórico como cenário para o treino.',

  destaquesFitness: [
    'Orla da Avenida Beira Lago e centro histórico tombado como cenário para caminhada e treino ao ar livre.',
    'Praias de água doce de Porto Real e Luzimangues, polos de lazer e atividade física na temporada de verão.',
    'Público universitário da UFT e do IFTO, que impulsiona corrida de rua e treino na cidade.',
    'Proximidade com Palmas (cerca de 60 km), ampliando o acesso a eventos e à rede esportiva regional.',
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
    'Histórica e à beira do lago, Porto Nacional une patrimônio, vida universitária e praias de água doce em uma cidade quente de Cerrado. Um personal trainer ajuda a aproveitar a orla, as praias e o centro histórico com um plano sob medida — e a treinar com segurança no calor e na seca marcante do centro do Tocantins.',

  vizinhas: ['palmas-to', 'paraiso-do-tocantins-to', 'gurupi-to'],

  capaArte: {
    src: '/capas-cidade/porto-nacional-to.webp',
    w: 1200,
    h: 675,
    alt: 'Personal trainer em Porto Nacional (TO) em arte com o centro histórico, a Catedral Nossa Senhora das Mercês e o rio Tocantins, com o treino em primeiro plano — Personal por Perto',
    legenda: 'Treino personalizado em Porto Nacional: onde o Tocantins encontra a história, a força e o movimento.',
  },
  fontes: [
    { nome: 'IBGE Cidades — Porto Nacional', url: 'https://cidades.ibge.gov.br/brasil/to/porto-nacional/panorama' },
    { nome: 'Prefeitura de Porto Nacional', url: 'https://portonacional.to.gov.br/' },
    { nome: 'Atlas Brasil — IDHM', url: 'https://www.atlasbrasil.org.br/' },
  ],
  atualizadoEm: '2026-09-02',
};
