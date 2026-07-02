import type { Cidade } from '../../lib/types';

export const cidade: Cidade = {
  slug: 'candelaria-rs',
  nome: 'Candelária',
  uf: 'RS',
  estado: 'Rio Grande do Sul',
  estadoSlug: 'rio-grande-do-sul',
  regiao: 'Sul',
  gentilico: 'candelariense',
  tipo: 'cidade',

  populacao: 28906,
  populacaoAno: 2022,
  idhm: 0.670,
  idhmClasse: 'médio',
  altitudeM: 57,

  resumoEconomico:
    'Candelária fica no Vale do Rio Pardo, cerca de 180 km a oeste de Porto Alegre, e nasceu da colonização alemã iniciada em 1862, com o povoado batizado inicialmente de "Germânia" — herança visível até hoje na arquitetura, nos sobrenomes e no dialeto Hunsrückisch falado no interior. A economia combina a produção de fumo, um dos principais cultivos do município e da região, com soja, milho e pecuária, além de uma indústria calçadista em expansão, puxada por fábricas como a Beira Rio, e um comércio de porte médio concentrado no Centro.',

  mercado:
    'Por ser uma cidade pequena do interior gaúcho, o mercado fitness de Candelária é enxuto, formado por academias locais de musculação e alguns espaços de treino funcional. A procura por personal trainer tende a vir de quem busca acompanhamento individualizado difícil de encontrar em academias de estrutura mais simples, e de quem quer treinar ao ar livre na Prainha ou no Parque de Eventos aproveitando o clima ameno da maior parte do ano.',

  bairrosNobres: ['Centro', 'Nova Germânia'],
  bairrosPopulares: ['Rincão Comprido', 'Marilene', 'Princesa'],

  parques: [
    {
      nome: 'Parque de Eventos Itamar Vezentini',
      descricao:
        'Com cerca de 14 hectares, sedia a Expocande e reúne pavilhões, pista de rodeio, academia ao ar livre e áreas gramadas usadas para caminhada e treino ao ar livre pela comunidade.',
    },
    {
      nome: 'Praia Carlos Larger (Prainha)',
      descricao:
        'Balneário às margens do rio Pardo, a cerca de 2 km do Centro, é o principal ponto de lazer da cidade no verão, com espaço para caminhada e atividades ao ar livre à beira-rio.',
    },
    {
      nome: 'Praça Alberto Blanchardt da Silveira',
      descricao:
        'Praça central que serve de ponto de encontro e largada de eventos esportivos e cívicos da cidade, com playground e áreas de convivência.',
    },
  ],
  ciclovias:
    'A estrutura cicloviária formal é limitada; o pedal e a caminhada acontecem principalmente nas ruas do Centro, no entorno do Parque de Eventos e nas estradas vicinais que ligam a sede aos distritos rurais.',

  clima:
    'O clima é subtropical úmido (Cfa, na classificação de Köppen), com verões longos, quentes e úmidos e invernos curtos e mais frios, podendo registrar geadas. A precipitação é bem distribuída ao longo do ano, sem estação seca definida.',
  climaTreino:
    'O calor e a umidade do verão pedem treinos nos horários mais amenos, de manhã cedo ou ao final da tarde, com atenção à hidratação; já o inverno, mais frio para os padrões locais, favorece o treino ao ar livre durante o dia, desde que respeitado o aquecimento antes do esforço.',

  mobilidade:
    'Candelária é cortada pela rodovia RSC-287 (BR-287), eixo que liga a Região Metropolitana de Porto Alegre ao centro do estado e que vem passando por obras de duplicação e novas interseções de acesso à cidade. A rodovia RS-410 também passa pelo município. O transporte coletivo urbano é limitado, e a ligação com cidades vizinhas como Santa Cruz do Sul (a cerca de 40 km) e com a Capital (a cerca de 180 km) se dá por ônibus intermunicipal, com saída pela rodoviária local.',

  corridas: [],
  culturaEsportiva:
    'A cultura esportiva de Candelária gira em torno do futebol amador, da Caminhada Cívica realizada nas comemorações de emancipação do município em julho — que já reuniu milhares de participantes pelas ruas do Centro — e do Circuito de Mountain Bike Pedala Candelária, prova regional de ciclismo. A Prainha, no rio Pardo, e o Parque de Eventos Itamar Vezentini completam as opções de atividade ao ar livre da cidade.',
  academias:
    'A oferta é formada principalmente por academias locais de musculação e treino funcional, concentradas no Centro e nos bairros próximos, com porte compatível com uma cidade pequena do interior gaúcho.',

  destaquesFitness: [
    'Cidade de colonização alemã no Vale do Rio Pardo, com forte identidade cultural germânica.',
    'Prainha às margens do rio Pardo e Parque de Eventos Itamar Vezentini como principais espaços de treino ao ar livre.',
    'Clima subtropical (Cfa), com verões quentes e úmidos e invernos mais frios, exigindo ajuste sazonal do treino.',
    'Economia apoiada em fumo, agropecuária e indústria calçadista, com acesso pela rodovia RSC-287 (BR-287).',
  ],

  precos: {
    avulsaMin: 50,
    avulsaMax: 115,
    mensalMin: 250,
    mensalMax: 700,
    onlineMin: 115,
    onlineMax: 350,
  },

  conclusao:
    'Pequena e marcada pela herança alemã, Candelária oferece um ritmo de treino que pode aproveitar a Prainha, o Parque de Eventos e o clima subtropical fora dos picos de calor do verão. Um personal trainer ajuda a montar uma rotina consistente em uma cidade onde a oferta de academias é enxuta, adaptando os treinos às estações e aos espaços disponíveis ao ar livre.',

  vizinhas: ['santa-cruz-do-sul-rs', 'venancio-aires-rs'],

  fontes: [
    { nome: 'IBGE Cidades — Candelária', url: 'https://cidades.ibge.gov.br/brasil/rs/candelaria/panorama' },
    { nome: 'Atlas Brasil — IDHM', url: 'https://www.atlasbrasil.org.br/' },
    { nome: 'Prefeitura Municipal de Candelária', url: 'https://www.candelaria.rs.gov.br/' },
  ],
  atualizadoEm: '2026-06-29',
};
