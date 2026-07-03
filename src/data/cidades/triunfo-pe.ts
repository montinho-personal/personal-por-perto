import type { Cidade } from '../../lib/types';

export const cidade: Cidade = {
  slug: 'triunfo-pe',
  nome: 'Triunfo',
  uf: 'PE',
  estado: 'Pernambuco',
  estadoSlug: 'pernambuco',
  regiao: 'Nordeste',
  gentilico: 'triunfense',
  tipo: 'cidade',

  populacao: 14705,
  populacaoAno: 2022,
  idhm: 0.670,
  idhmClasse: 'médio',
  altitudeM: 1004,

  resumoEconomico:
    'Encravada no alto do Sertão do Pajeú, no divisor com a Paraíba, Triunfo é a cidade mais alta de Pernambuco, com a sede a 1.004 metros de altitude e o Pico do Papagaio, ponto culminante do estado, a 1.260 metros. Apelidada de "Suíça pernambucana" e "Oásis do Sertão" por seu clima ameno em meio ao semiárido, a cidade tem economia apoiada em turismo de altitude e cultural (arquitetura colonial preservada, Museu do Cangaço e a tradição da Careta de Triunfo), agricultura de clima mais frio — com destaque para um café artesanal cultivado há mais de 150 anos, já premiado com o Selo Nacional da Agricultura Familiar e em processo de Indicação Geográfica — além da produção rural de rapadura, cachaça, mel e queijos.',

  mercado:
    'Por ser um município pequeno e de vocação turística, o mercado fitness de Triunfo é bastante restrito, concentrado em poucas academias e espaços de treino funcional na sede e no complexo de lazer do SESC. A procura por personal trainer tende a se apoiar no interesse por caminhada e trekking nas trilhas de altitude e por treino ao ar livre, favorecido pelo clima mais ameno que o do sertão ao redor.',

  bairrosNobres: ['Centro', 'Alto da Boa Vista'],
  bairrosPopulares: ['Canaã', 'Iraguaçu'],

  parques: [
    {
      nome: 'Pico do Papagaio',
      descricao:
        'Ponto culminante de Pernambuco, a 1.260 metros de altitude e cerca de 9 km do centro de Triunfo, é destino de trilha e trekking em meio à mata de altitude, com vista para o Sertão do Pajeú.',
    },
    {
      nome: 'Alto da Boa Vista',
      descricao:
        'Mirante com o Cristo Redentor local, na parte mais elevada da cidade, usado como ponto de caminhada e observação panorâmica sobre o casario colonial de Triunfo.',
    },
    {
      nome: 'Centro de Lazer do SESC Triunfo',
      descricao:
        'Maior unidade de lazer do SESC no estado, com acesso por teleférico a partir do centro; reúne piscina e áreas esportivas que complementam a oferta de atividade física da cidade.',
    },
  ],
  ciclovias:
    'Triunfo não tem malha cicloviária estruturada; o relevo serrano e as ruas de paralelepípedo do centro histórico tornam a caminhada e o trekking nas trilhas do entorno as opções mais naturais de atividade ao ar livre.',

  clima:
    'O clima é tropical de altitude (Cwb, segundo Köppen), o que torna Triunfo uma das cidades mais frias de Pernambuco: as temperaturas no inverno costumam ficar por volta de 12 °C a 16 °C, com mínima histórica de 6,8 °C registrada em 1975 — um contraste marcante com o calor do semiárido ao redor.',
  climaTreino:
    'O clima ameno de altitude favorece o treino ao ar livre em boa parte do dia, algo raro no sertão pernambucano; nas manhãs e noites mais frias de inverno, porém, é recomendável aquecimento adequado antes de caminhadas e trilhas.',

  mobilidade:
    'O acesso à cidade, a cerca de 400 km de Recife, é feito pela BR-232 até Serra Talhada, seguindo pela PE-365, ou pela BR-232 até Sítio dos Nunes e depois pela PE-337 e PE-426 via Flores; há ainda a PE-320 (Estrada do Brocotó) como rota alternativa de subida à serra. Não há transporte sobre trilhos, e os deslocamentos dentro da cidade são feitos a pé, de carro ou moto, dado o porte pequeno do núcleo urbano.',

  corridas: [],
  culturaEsportiva:
    'A cultura esportiva de Triunfo gira em torno do trekking e das caminhadas em trilhas de altitude, como a subida ao Pico do Papagaio, e de eventos que combinam esporte e cultura, caso do Triunfest, festividade anual da cidade que já incluiu programação de caminhada ecológica ao lado de atrações culturais e musicais.',
  academias:
    'A oferta de estrutura para treino é pequena, restrita a academias locais de musculação e funcional na sede do município, complementada pelo Centro de Lazer do SESC, que reúne piscina e espaços esportivos como opção adicional na cidade.',

  destaquesFitness: [
    'Cidade mais alta de Pernambuco, com a sede a 1.004 m e o Pico do Papagaio, ponto culminante do estado, a 1.260 m de altitude.',
    'Clima tropical de altitude que faz de Triunfo uma das cidades mais frias do estado, com mínima histórica de 6,8 °C.',
    'Trekking e caminhadas em trilhas de altitude como principal vocação para atividade física ao ar livre.',
    'Centro de Lazer do SESC Triunfo, maior unidade do estado, com piscina e espaços esportivos de apoio ao treino.',
  ],

  precos: {
    avulsaMin: 40,
    avulsaMax: 90,
    mensalMin: 200,
    mensalMax: 550,
    onlineMin: 100,
    onlineMax: 300,
  },

  conclusao:
    'Cidade mais alta e mais fria de Pernambuco, Triunfo oferece um cenário raro no sertão: clima ameno favorável ao treino ao ar livre e trilhas de altitude como o Pico do Papagaio. Um personal trainer ajuda a aproveitar esse potencial com segurança, estruturando caminhadas, trekking e treino funcional adaptados ao relevo serrano e ao pequeno porte do mercado local.',

  vizinhas: ['serra-talhada-pe', 'arcoverde-pe', 'salgueiro-pe'],

  fontes: [
    { nome: 'IBGE Cidades — Triunfo', url: 'https://cidades.ibge.gov.br/brasil/pe/triunfo/panorama' },
    { nome: 'Prefeitura de Triunfo', url: 'https://triunfo.pe.gov.br/' },
    { nome: 'Atlas Brasil — IDHM', url: 'https://www.atlasbrasil.org.br/' },
  ],
  atualizadoEm: '2026-07-03',
};
