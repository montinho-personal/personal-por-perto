import type { Cidade } from '../../lib/types';

export const cidade: Cidade = {
  slug: 'propria-se',
  nome: 'Propriá',
  uf: 'SE',
  estado: 'Sergipe',
  estadoSlug: 'sergipe',
  regiao: 'Nordeste',
  gentilico: 'propriaense',
  tipo: 'cidade',

  populacao: 26618,
  populacaoAno: 2022,
  idhm: 0.661,
  idhmClasse: 'médio',
  altitudeM: 16,

  resumoEconomico:
    'Principal cidade do baixo São Francisco sergipano, Propriá fica às margens do rio São Francisco, na divisa com Alagoas. Já foi um dos maiores polos comerciais e industriais do estado, e ainda hoje funciona como centro de comércio regional para os municípios ribeirinhos, com forte tradição de feira. A economia combina o comércio varejista e atacadista, a pesca no rio São Francisco, a agropecuária e o artesanato típico da região, atividades historicamente ligadas à importância do rio para irrigação, abastecimento e transporte.',

  mercado:
    'Por ser uma cidade de médio porte do interior nordestino, o mercado fitness de Propriá é enxuto e concentrado em academias locais de musculação e treino funcional. A procura por personal trainers cresce entre quem busca acompanhamento individual para treinar com segurança no calor e aproveitar a orla do rio São Francisco como espaço de atividade ao ar livre.',

  bairrosNobres: ['Centro', 'São José', 'Frei Fabiano', 'Bom Pastor'],
  bairrosPopulares: ['Santo Antônio', 'Pilon', 'Maria Caetana', 'Cohab'],

  parques: [
    {
      nome: 'Orla Ribeirinha (orla do rio São Francisco)',
      descricao:
        'Cartão-postal e ponto de encontro dos propriaenses, com calçadão, bares, restaurantes, parque infantil e vista para o rio São Francisco — o trecho mais usado para caminhada, corrida e treino ao ar livre à beira-rio.',
    },
    {
      nome: 'Praça do Cristo',
      descricao:
        'Espaço público tradicional da cidade, com área aberta arborizada usada para caminhada, alongamento e encontros, em ponto de fácil acesso no centro.',
    },
    {
      nome: 'Margens do rio São Francisco',
      descricao:
        'Além da orla urbanizada, as margens do Velho Chico oferecem percursos planos e cenário para quem treina ao ar livre, com a ponte rodoferroviária que liga Propriá à alagoana Porto Real do Colégio como marco da paisagem.',
    },
  ],
  ciclovias:
    'A estrutura cicloviária é modesta e concentrada em trechos da área urbana e da orla; boa parte do pedal e da corrida acontece nas vias centrais e ao longo do rio São Francisco.',

  clima:
    'O clima é tropical quente, típico do baixo São Francisco sergipano, com temperaturas elevadas ao longo de quase todo o ano e máximas que costumam passar dos 30 °C. A estação chuvosa concentra-se no outono e no inverno (de abril a julho, aproximadamente), enquanto a primavera e o verão são mais secos e quentes.',
  climaTreino:
    'O calor exige treinar bem cedo ou no fim da tarde, com hidratação reforçada; nos horários de sol forte, ambientes climatizados são a opção mais segura, e a brisa do rio torna a orla um local mais agradável para a atividade ao ar livre.',

  mobilidade:
    'Propriá é cortada pela BR-101, eixo rodoviário que liga a cidade a Aracaju e ao restante do Nordeste e que passa por obras de duplicação no trecho sergipano. A ponte rodoferroviária sobre o rio São Francisco conecta a cidade à alagoana Porto Real do Colégio, reforçando o papel de Propriá como ponto de passagem na divisa entre Sergipe e Alagoas. O transporte urbano é feito por ônibus e vans intermunicipais.',

  corridas: [
    {
      nome: 'Corridas de rua na orla',
      descricao:
        'A orla ribeirinha e as vias centrais servem de palco para provas de corrida de rua e caminhadas promovidas em datas comemorativas e por grupos locais, aproveitando o cenário do rio São Francisco.',
    },
    {
      nome: 'Calendário de corridas de Sergipe',
      descricao:
        'Corredores da cidade também participam de etapas do calendário estadual de corrida de rua, com provas concentradas em Aracaju e na região, complementando o treino na orla local.',
    },
  ],
  culturaEsportiva:
    'A cultura esportiva mistura o uso da orla do rio São Francisco para caminhada e corrida, a tradição da pesca no Velho Chico e os festejos ribeirinhos da cidade, tudo moldado pelo calor característico do baixo São Francisco.',
  academias:
    'A oferta é formada principalmente por academias locais de musculação e treino funcional, distribuídas pelo centro e pelos bairros residenciais, com porte compatível com uma cidade média do interior nordestino.',

  destaquesFitness: [
    'Orla Ribeirinha do rio São Francisco como principal espaço de caminhada e corrida ao ar livre.',
    'Clima quente o ano todo, que exige planejamento de horário e hidratação no treino.',
    'Cidade na divisa com Alagoas, ligada por ponte rodoferroviária a Porto Real do Colégio.',
    'Centro de comércio regional do baixo São Francisco, com tradição de feira, pesca e artesanato.',
  ],

  precos: {
    avulsaMin: 45,
    avulsaMax: 105,
    mensalMin: 230,
    mensalMax: 640,
    onlineMin: 105,
    onlineMax: 330,
  },

  conclusao:
    'Cidade ribeirinha e quente do baixo São Francisco, Propriá pede um treino adaptado ao clima e que aproveite a orla do Velho Chico como espaço ao ar livre. Um personal trainer ajuda a organizar a rotina respeitando o calor, escolhendo os melhores horários e mantendo a constância ao longo do ano.',

  vizinhas: ['aracaju-se', 'estancia-se'],

  fontes: [
    { nome: 'IBGE Cidades — Propriá', url: 'https://cidades.ibge.gov.br/brasil/se/propria/panorama' },
    { nome: 'Prefeitura de Propriá', url: 'https://www.propria.se.gov.br/' },
    { nome: 'Atlas Brasil — IDHM', url: 'https://www.atlasbrasil.org.br/' },
  ],
  atualizadoEm: '2026-06-29',
};
