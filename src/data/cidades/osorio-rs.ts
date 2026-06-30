import type { Cidade } from '../../lib/types';

export const cidade: Cidade = {
  slug: 'osorio-rs',
  nome: 'Osório',
  uf: 'RS',
  estado: 'Rio Grande do Sul',
  estadoSlug: 'rio-grande-do-sul',
  regiao: 'Sul',
  gentilico: 'osoriense',
  tipo: 'cidade',

  populacao: 47396,
  populacaoAno: 2022,
  idhm: 0.751,
  idhmClasse: 'alto',
  altitudeM: 17,

  resumoEconomico:
    'Porta de entrada do Litoral Norte gaúcho, Osório fica no entroncamento das principais rodovias que ligam a Região Metropolitana de Porto Alegre às praias e cerca-se de lagoas e do Morro da Borússia. A cidade ganhou projeção com o Complexo Eólico de Osório, um dos pioneiros da geração de energia eólica no país, que ajudou a multiplicar a arrecadação e a atrair indústria, comércio e serviços. A economia combina essa base energética com agropecuária, comércio regional, serviços e a presença de instituições de ensino superior que ampliaram o peso da cidade no litoral.',

  mercado:
    'Como polo de serviços do Litoral Norte e cidade com população universitária, Osório tem um mercado fitness mais ativo do que o porte sugere, sustentado por moradores fixos ao longo do ano e pelo movimento sazonal de quem circula pela região. A procura por personal trainers cresce entre quem quer aproveitar as lagoas e a orla para treinar ao ar livre e entre quem busca acompanhamento individual fora do fluxo das academias.',

  bairrosNobres: ['Centro', 'Albatroz', 'Sulbrasileiro', 'Glória'],
  bairrosPopulares: ['Caravágio', 'Laranjeiras', 'Porto Lacustre', 'Sustentável'],

  parques: [
    {
      nome: 'Complexo da Lagoa do Marcelino',
      descricao:
        'Principal espaço de lazer da cidade, fruto da revitalização da antiga lagoa que servia de porto lacustre. Reúne praça, calçadões, academia ao ar livre, skate park e chimarródromo à beira dágua, com vista para o Morro da Borússia — um dos pontos mais usados para caminhada, corrida e pedal.',
    },
    {
      nome: 'Morro da Borússia',
      descricao:
        'Elevação de pouco mais de 400 metros nos arredores da cidade, com mirante, cascatas e estradas sinuosas. O acesso e as trilhas próximas atraem quem busca treino em subida, cicloturismo e atividade em meio à área verde do litoral.',
    },
    {
      nome: 'Orla das lagoas e balneários',
      descricao:
        'Além da Lagoa do Marcelino, o município se estende por lagoas e balneários de mar aberto no Litoral Norte, com orlas e ciclovias que servem de cenário para caminhada, corrida e pedal, sobretudo na temporada de verão.',
    },
  ],
  ciclovias:
    'A cidade conta com ciclovias no entorno da Lagoa do Marcelino e em trechos urbanos, e o pedal se estende pela orla dos balneários e por estradas rurais rumo ao Morro da Borússia, opções comuns entre ciclistas e corredores da região.',

  clima:
    'O clima é subtropical úmido, com influência litorânea: verões quentes e úmidos, invernos frios e chuvas bem distribuídas ao longo do ano. A proximidade do mar e das lagoas deixa o ar mais úmido, e o vento constante — o mesmo que sustenta o parque eólico — é uma marca da paisagem local.',
  climaTreino:
    'O vento frequente e a umidade pedem atenção à sensação térmica: no verão, o calor úmido favorece treinar cedo ou no fim da tarde com boa hidratação; no inverno, o frio e a umidade exigem aquecimento mais cuidadoso. Dias de vento forte tornam a corrida e o pedal mais exigentes ao ar livre.',

  mobilidade:
    'Osório é um nó rodoviário do Litoral Norte: fica às margens da BR-290 (Free Way), principal ligação com Porto Alegre, no entroncamento com a BR-101 (sentido norte e sul) e próxima da RS-389 (Estrada do Mar) e da RS-030, rota para Tramandaí. O transporte urbano é feito por ônibus, e a posição estratégica concentra fluxo de passagem entre a capital e as praias.',

  corridas: [
    {
      nome: 'Maratona de Osório',
      descricao:
        'Prova de corrida de rua realizada na cidade, com percursos em diferentes distâncias, que reforça a tradição esportiva do Litoral Norte e aproveita o cenário das lagoas e da orla.',
    },
  ],
  culturaEsportiva:
    'A cultura esportiva osoriense gira em torno da Lagoa do Marcelino e das orlas, usadas para caminhada, corrida e pedal, e ganha reforço da população universitária e do movimento de verão. O Morro da Borússia e as estradas rurais atraem quem busca treino em subida e cicloturismo.',
  academias:
    'A oferta é formada por academias locais de musculação e treino funcional distribuídas pelo Centro e bairros residenciais, com porte compatível com um polo de serviços de cidade média do litoral gaúcho.',

  destaquesFitness: [
    'Lagoa do Marcelino como principal espaço de caminhada, corrida e pedal, com academia ao ar livre.',
    'Morro da Borússia e estradas rurais, palco de treino em subida e cicloturismo.',
    'Vento constante e clima litorâneo, que exigem atenção à sensação térmica no treino ao ar livre.',
    'Polo de serviços do Litoral Norte, pioneiro em energia eólica e com população universitária.',
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
    'Entre lagoas, orlas e o Morro da Borússia, Osório oferece um cenário privilegiado para treinar ao ar livre, com o vento litorâneo como companhia constante. Um personal trainer ajuda a aproveitar esses espaços com segurança, ajustando horários ao clima úmido e ventoso e mantendo a constância dentro e fora da temporada de verão.',

  vizinhas: ['capao-da-canoa-rs', 'tramandai-rs'],

  fontes: [
    { nome: 'IBGE Cidades — Osório', url: 'https://cidades.ibge.gov.br/brasil/rs/osorio/panorama' },
    { nome: 'Prefeitura de Osório', url: 'https://www.osorio.rs.gov.br/' },
    { nome: 'Atlas Brasil — IDHM', url: 'https://www.atlasbrasil.org.br/' },
  ],
  atualizadoEm: '2026-06-29',
};
