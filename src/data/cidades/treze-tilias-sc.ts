import type { Cidade } from '../../lib/types';

export const cidade: Cidade = {
  slug: 'treze-tilias-sc',
  nome: 'Treze Tílias',
  uf: 'SC',
  estado: 'Santa Catarina',
  estadoSlug: 'santa-catarina',
  regiao: 'Sul',
  gentilico: 'treze-tiliense',
  tipo: 'cidade',

  populacao: 8787,
  populacaoAno: 2022,
  idhm: 0.795,
  idhmClasse: 'alto',
  altitudeM: 796,

  resumoEconomico:
    'Fundada em 1933 pelo ex-ministro da Agricultura da Áustria Andreas Thaler e por um grupo de imigrantes tiroleses, Treze Tílias é a única colônia de origem austríaca do Brasil, o que lhe rendeu a alcunha de "Tirol brasileiro". A arquitetura alpina — casas de madeira, telhados inclinados e varandas floridas —, a gastronomia e o dialeto tirolês preservado sustentam um turismo cultural forte, com quase um terço das empresas do município ligadas ao setor. Ao lado do turismo, a economia se apoia na agroindústria de laticínios, na fabricação de baterias automotivas e na tradição secular da escultura em madeira, ofício que rendeu à cidade o título de Capital Catarinense dos Escultores e da Escultura em Madeira. O PIB per capita é bem superior à média catarinense, refletindo essa diversificação incomum para uma cidade de pequeno porte.',

  mercado:
    'Por ser um município pequeno, de pouco menos de 9 mil habitantes, o mercado fitness de Treze Tílias é reduzido, formado por academias locais de musculação. A procura por personal trainers tende a vir de moradores que buscam acompanhamento individualizado num mercado com poucas opções, além do público ligado ao turismo e a eventos que movimentam a cidade ao longo do ano.',

  bairrosNobres: ['Centro', 'Portal', 'Pôr do Sol', 'São José'],
  bairrosPopulares: ['Imigrantes', 'Pioneiros', 'Distrito Industrial'],

  parques: [
    {
      nome: 'Parque do Imigrante',
      descricao:
        'Parque municipal com lago cuja ilha reproduz o contorno do mapa da Áustria, Via Crucis esculpida em madeira, academia ao ar livre, pista de caminhada, playground e quadra de areia — o principal espaço público da cidade para atividade física.',
    },
    {
      nome: 'Parque Lindendorf',
      descricao:
        'Parque com jardins, trilha de cerca de 400 metros ao redor de um lago e uma minicidade que reproduz em miniatura as construções tirolesas de Treze Tílias, usado para passeio e caminhada leve.',
    },
    {
      nome: 'Entorno rural e vales coloniais',
      descricao:
        'As estradas que cortam os vales e as propriedades da colonização austríaca ao redor da sede oferecem percursos de relevo acidentado, usados por quem treina caminhada, corrida e pedal em meio à paisagem alpina.',
    },
  ],
  ciclovias:
    'A estrutura cicloviária é modesta e concentrada na área central; a maior parte do pedal e da corrida acontece nas vias urbanas e nas estradas rurais do entorno, compatível com o porte pequeno do município.',

  clima:
    'O clima é subtropical de altitude, com as quatro estações bem marcadas. A cidade fica a cerca de 796 m de altitude no Meio-Oeste catarinense, o que deixa os invernos frios, com geadas frequentes entre junho e agosto; os verões são amenos, e as chuvas se distribuem ao longo do ano.',
  climaTreino:
    'No inverno, o frio e as geadas pedem aquecimento mais longo, roupas em camadas e, se possível, uma opção indoor para manter a rotina; na primavera e no verão, mais amenos, as condições costumam favorecer o treino ao ar livre pelas estradas e parques da cidade.',

  mobilidade:
    'O acesso principal se dá pela SC-465 (Rodovia dos Pioneiros), que liga a cidade a Salto Veloso, e pela SC-355, em direção a Iomerê; quem vem de Joaçaba ou Videira chega pela SC-303 e SC-454, enquanto o fluxo do litoral passa pela BR-470, via Campos Novos, Tangará e Ibicaré. A cidade fica a cerca de 425 km de Florianópolis, e o deslocamento interno é feito majoritariamente por carro, com transporte coletivo por ônibus.',

  corridas: [
    {
      nome: 'Tirolês Trail Run (TTR)',
      descricao:
        'Prova de trail running realizada em Treze Tílias, com percursos de 10 km, 17 km, 20 km, 29 km e 42 km pelo relevo acidentado do entorno colonial, atraindo corredores de fora do município.',
    },
  ],
  culturaEsportiva:
    'A cultura esportiva local gira em torno do Tirolês Trail Run, que aproveita o relevo dos vales coloniais, e do uso do Parque do Imigrante — com sua academia ao ar livre e pista de caminhada — como principal ponto de encontro para atividade física. Festas tradicionais como o Tirolerfest também movimentam a vida comunitária, ainda que sem foco esportivo direto.',
  academias:
    'A oferta é pequena e concentrada na área central, com academias locais de musculação, como a Academia Treze Tílias e a Academia Corpo Ativo, compatível com o porte de um município de menos de 9 mil habitantes.',

  destaquesFitness: [
    'Única colônia de imigração austríaca do Brasil, com IDHM alto (0,795) e PIB per capita bem acima da média catarinense.',
    'Altitude de cerca de 796 m no Meio-Oeste catarinense, com invernos frios e geadas que exigem adaptação no treino.',
    'Parque do Imigrante, com academia ao ar livre, pista de caminhada e lago em formato da Áustria, ao lado do Parque Lindendorf.',
    'Tirolês Trail Run, prova de trail running com percursos de 10 a 42 km pelo relevo dos vales coloniais.',
  ],

  precos: {
    avulsaMin: 50,
    avulsaMax: 105,
    mensalMin: 230,
    mensalMax: 600,
    onlineMin: 110,
    onlineMax: 320,
  },

  conclusao:
    'Pequena e única em sua colonização austríaca, Treze Tílias combina arquitetura alpina, invernos frios e um mercado fitness enxuto. Um personal trainer ajuda a adaptar o treino às estações bem marcadas do Meio-Oeste catarinense e a aproveitar espaços como o Parque do Imigrante e as estradas dos vales coloniais, mantendo a constância mesmo com poucas opções de academia na cidade.',

  vizinhas: ['videira-sc', 'fraiburgo-sc', 'cacador-sc'],

  fontes: [
    { nome: 'IBGE Cidades — Treze Tílias', url: 'https://cidades.ibge.gov.br/brasil/sc/treze-tilias/panorama' },
    { nome: 'Prefeitura de Treze Tílias', url: 'https://www.trezetilias.sc.gov.br/' },
    { nome: 'Atlas Brasil — IDHM', url: 'https://www.atlasbrasil.org.br/' },
  ],
  atualizadoEm: '2026-07-02',
};
