import type { Cidade } from '../../lib/types';

export const cidade: Cidade = {
  slug: 'xangri-la-rs',
  nome: 'Xangri-lá',
  uf: 'RS',
  estado: 'Rio Grande do Sul',
  estadoSlug: 'rio-grande-do-sul',
  regiao: 'Sul',
  gentilico: 'xangri-laense',
  tipo: 'cidade',

  populacao: 16463,
  populacaoAno: 2022,
  idhm: 0.735,
  idhmClasse: 'alto',
  altitudeM: 8,

  resumoEconomico:
    'Xangri-lá é um dos destinos mais valorizados do Litoral Norte gaúcho, conhecida como a "capital dos condomínios" do Rio Grande do Sul. Com cerca de 16,5 mil habitantes fixos (Censo 2022) e IDHM alto (0,735), a cidade tem economia fortemente ligada ao turismo de veraneio, à construção civil e à prestação de serviços. O balneário Atlântida concentra residências e condomínios de altíssimo padrão — apelidado de "Jurerê do Sul" — e atrai uma população flutuante de veranistas, em boa parte vinda de Porto Alegre, que multiplica a demanda nos meses de verão.',

  mercado:
    'O mercado de personal training em Xangri-lá é marcado pela sazonalidade e pelo altíssimo padrão no verão. Entre dezembro e março, a chegada dos veranistas de segunda residência — especialmente em Atlântida e na Rainha do Mar — aquece muito a procura por atendimento personalizado em casas e condomínios fechados, além de treinos na praia. O público é exigente e disposto a investir, o que sustenta diárias e pacotes acima da média do interior gaúcho. Fora da temporada, o ritmo desacelera e o profissional costuma equilibrar a agenda com cidades vizinhas do litoral.',

  bairrosNobres: ['Atlântida', 'Rainha do Mar', 'Noiva do Mar', 'Marina'],
  bairrosPopulares: ['Centro', 'Remanso', 'Maristela', 'Arpoador'],

  parques: [
    {
      nome: 'Orla e praia de Atlântida',
      descricao:
        'Faixa de areia extensa e plana, cercada por condomínios de alto padrão, é o principal ponto de treino ao ar livre no verão — corrida na praia, treino funcional na areia e esportes de praia.',
    },
    {
      nome: 'Praia da Rainha do Mar',
      descricao:
        'Trecho mais tranquilo e familiar da orla, junto a residências de alto padrão, com ambiente propício a caminhada, corrida e treinos individuais à beira-mar.',
    },
    {
      nome: 'Beira-mar dos balneários (Remanso e Centro)',
      descricao:
        'Avenidas e calçadões beira-mar que ligam os balneários, muito usados por caminhantes, corredores e ciclistas, sobretudo no início da manhã e no fim da tarde.',
    },
  ],
  ciclovias:
    'A orla e as avenidas beira-mar dos balneários concentram o uso de bicicleta no verão, com trechos planos que ligam Atlântida, Rainha do Mar e demais balneários; a Estrada do Mar (RS-389) é referência para pedaladas de estrada no Litoral Norte.',

  clima:
    'O clima é subtropical úmido, com verões quentes e invernos amenos e ventosos típicos do litoral.',
  climaTreino:
    'Dá para treinar ao ar livre o ano todo, mas a cidade vive seu auge no verão. Nos dias de pico de calor, o início da manhã e o fim da tarde na orla são os melhores horários; no inverno, o vento litorâneo pede atenção, e parte do treino migra para casas, condomínios e academias.',

  mobilidade:
    'O acesso principal é pela RS-389, a Estrada do Mar, que conecta os balneários do Litoral Norte e liga a região à BR-290 (Freeway) rumo a Porto Alegre, a pouco mais de 130 km. Dentro da cidade, o deslocamento é predominantemente por carro, com distâncias curtas entre os balneários.',

  corridas: [
    {
      nome: 'Corridas de verão no Litoral Norte',
      descricao:
        'A temporada concentra provas de rua e na areia pelos balneários da região, aproveitando a orla plana e o grande público de veranistas entre dezembro e março.',
    },
    {
      nome: 'Circuitos beira-mar',
      descricao:
        'Percursos de caminhada e corrida ao longo da orla de Atlântida e dos demais balneários, cenário recorrente de eventos esportivos sazonais no litoral gaúcho.',
    },
  ],
  culturaEsportiva:
    'A cultura esportiva de Xangri-lá gira em torno da praia e do verão: corrida na areia, beach tennis, vôlei de praia, stand-up paddle e surfe são parte da rotina dos veranistas. Os beach clubs e a vida ao ar livre nos condomínios reforçam o culto à boa forma entre o público de alto padrão que frequenta a cidade na temporada.',
  academias:
    'A oferta de academias e estúdios cresce no verão para atender a população flutuante, com estruturas dentro e no entorno dos condomínios de Atlântida e da Rainha do Mar, além de beach clubs que oferecem espaços para treino. Boa parte do atendimento de alto padrão, porém, acontece de forma personalizada em casas e na própria praia.',

  destaquesFitness: [
    'Atlântida, o "Jurerê do Sul", concentra público de altíssimo poder aquisitivo no verão.',
    'Orla plana e extensa, ideal para corrida e treino funcional na areia.',
    'Forte demanda sazonal por atendimento em casas e condomínios fechados.',
    'Beach clubs e esportes de praia (beach tennis, vôlei, SUP) movimentam a temporada.',
  ],

  precos: {
    avulsaMin: 80,
    avulsaMax: 200,
    mensalMin: 400,
    mensalMax: 1200,
    onlineMin: 180,
    onlineMax: 500,
  },

  conclusao:
    'Xangri-lá oferece um dos cenários mais sofisticados do litoral gaúcho para quem busca treinar no verão. Entre as casas e condomínios de Atlântida e da Rainha do Mar e o treino ao ar livre na orla, um personal trainer especializado faz a diferença para aproveitar a temporada com saúde e resultado — seja para o veranista de segunda residência, seja para o morador que treina o ano todo.',

  vizinhas: ['capao-da-canoa-rs', 'porto-alegre-rs', 'gravatai-rs'],

  fontes: [
    { nome: 'IBGE Cidades — Xangri-lá', url: 'https://cidades.ibge.gov.br/brasil/rs/xangri-la/panorama' },
    { nome: 'Prefeitura Municipal de Xangri-lá', url: 'https://xangrila.rs.gov.br/' },
    { nome: 'Atlas Brasil — IDHM', url: 'https://www.atlasbrasil.org.br/' },
  ],
  atualizadoEm: '2026-06-29',
};
