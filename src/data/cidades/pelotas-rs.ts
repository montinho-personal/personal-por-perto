import type { Cidade } from '../../lib/types';

export const cidade: Cidade = {
  slug: 'pelotas-rs',
  nome: 'Pelotas',
  uf: 'RS',
  estado: 'Rio Grande do Sul',
  estadoSlug: 'rio-grande-do-sul',
  regiao: 'Sul',
  gentilico: 'pelotense',
  tipo: 'cidade',

  populacao: 325685,
  populacaoAno: 2022,
  idhm: 0.739,
  idhmClasse: 'alto',
  altitudeM: 7,

  resumoEconomico:
    'Terceira maior cidade do Rio Grande do Sul, Pelotas é um grande polo universitário (UFPel e UCPel), com peso de comércio, serviços e agronegócio (arroz, pêssego e leite). Conhecida como "Capital Nacional do Doce" e de forte tradição luso-açoriana, fica às margens da Lagoa dos Patos, com o Balneário do Laranjal como cartão-postal.',

  mercado:
    'Cidade universitária, Pelotas tem boa cultura de musculação, com redes e academias locais como 26Fit, SkyFit e +FIT. O personal training é forte, muito ligado ao curso de Educação Física da UFPel, que forma profissionais e abastece o mercado local.',

  bairrosNobres: ['Areal', 'Três Vendas', 'Laranjal', 'Centro'],
  bairrosPopulares: ['Fragata', 'Simões Lopes', 'Navegantes', 'Sanga Funda'],

  parques: [
    {
      nome: 'Parque Una',
      descricao:
        'Parque central com lago, pista de caminhada e skate de cerca de 890 m, deck, anfiteatro e ponto de bikes compartilhadas — o principal espaço de treino do centro.',
    },
    {
      nome: 'Balneário do Laranjal',
      descricao:
        'Orla na Lagoa dos Patos com calçadão para corrida, academia ao ar livre, ciclofaixa e quadras de areia (vôlei de praia e beach tennis).',
    },
    {
      nome: 'Orla e ciclofaixa do Laranjal',
      descricao:
        'Extensa faixa à beira da lagoa, com academia ao ar livre de manutenção privada e espaço para caminhada e pedal ao pôr do sol.',
    },
  ],
  ciclovias:
    'Pelotas tem ciclofaixas na orla do Laranjal e um sistema de bikes compartilhadas, com dezenas de bicicletas distribuídas em pontos pela cidade — uma cidade plana e amiga da bike.',

  clima:
    'O clima é subtropical úmido, com média anual em torno de 17,5 °C, verões amenos e invernos frios, úmidos e ventosos (julho perto de 12 °C).',
  climaTreino:
    'De outubro a abril, as condições para treino ao ar livre são ótimas; no inverno, o frio e o vento da lagoa exigem agasalho e atenção às manhãs geladas.',

  mobilidade:
    'Cidade plana, favorável a corrida e ciclismo, Pelotas é um entroncamento do sul do RS, servida pelas BR-116 e BR-392, com acesso a Rio Grande, Porto Alegre e à fronteira com Uruguai e Argentina.',

  corridas: [
    {
      nome: 'Maratona de Pelotas (Sesc)',
      descricao:
        'Prova com 42 km, 21 km, 10 km e 5 km, além de distâncias menores, reunindo milhares de atletas.',
    },
    {
      nome: 'Circuito Sesc de Corridas (etapa Pelotas)',
      descricao:
        'Etapa regional de um dos maiores circuitos de rua do país, parte de um calendário ativo.',
    },
  ],
  culturaEsportiva:
    'Pelotas tem forte cultura de corrida e caminhada — o Parque Una e a orla do Laranjal são pontos clássicos —, reforçada pelo perfil universitário e pela Educação Física da UFPel, que profissionaliza a cena fitness local.',
  academias:
    'A oferta reúne redes e academias locais (26Fit, SkyFit, +FIT), com um mercado de personal training qualificado pela universidade e bem complementado pelos espaços ao ar livre da orla.',

  destaquesFitness: [
    'Pista do Parque Una (cerca de 890 m) no centro da cidade.',
    'Orla do Laranjal: calçadão, academia ao ar livre e quadras de areia na beira da lagoa.',
    'Cidade plana e compacta — boa para corredores e ciclistas.',
    'Polo de Educação Física (UFPel) que alimenta um mercado qualificado de personais.',
  ],

  precos: {
    avulsaMin: 70,
    avulsaMax: 160,
    mensalMin: 350,
    mensalMax: 950,
    onlineMin: 170,
    onlineMax: 430,
  },

  conclusao:
    'Cidade universitária e plana às margens da Lagoa dos Patos, Pelotas é convidativa para correr e pedalar. Um personal trainer ajuda a aproveitar o Parque Una e a orla do Laranjal com método — alternando o treino ao ar livre com a academia nos meses frios.',

  vizinhas: ['porto-alegre-rs', 'caxias-do-sul-rs'],

  fontes: [
    { nome: 'IBGE Cidades — Pelotas', url: 'https://cidades.ibge.gov.br/brasil/rs/pelotas/panorama' },
    { nome: 'Prefeitura de Pelotas', url: 'https://www.pelotas.com.br/' },
    { nome: 'Atlas Brasil — IDHM', url: 'https://www.atlasbrasil.org.br/' },
  ],
  atualizadoEm: '2026-06-29',
};
