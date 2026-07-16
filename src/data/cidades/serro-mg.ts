import type { Cidade } from '../../lib/types';

export const cidade: Cidade = {
  slug: 'serro-mg',
  nome: 'Serro',
  uf: 'MG',
  estado: 'Minas Gerais',
  estadoSlug: 'minas-gerais',
  regiao: 'Sudeste',
  gentilico: 'serrano',
  tipo: 'cidade',

  populacao: 21952,
  populacaoAno: 2022,
  idhm: 0.660,
  idhmClasse: 'médio',
  altitudeM: 804,

  resumoEconomico:
    'Erguido no maciço central da Serra do Espinhaço, no Alto Jequitinhonha, Serro foi, em abril de 1938, o primeiro município brasileiro a ter seu conjunto arquitetônico e paisagístico tombado pelo IPHAN — marco que consolidou o turismo histórico e cultural como um dos pilares da economia local, ao lado do funcionalismo público e do comércio de bairro. A cidade também dá nome ao Queijo do Serro, cujo modo artesanal de fabricação foi registrado pelo IPHAN em 2008 como Patrimônio Cultural do Brasil e passou a integrar, em dezembro de 2024, os Modos de Fazer o Queijo Minas Artesanal inscritos pela UNESCO como Patrimônio Cultural Imaterial da Humanidade; a produção reúne cerca de 800 famílias produtoras na região. O território guarda ainda a memória do antigo Distrito Diamantino, ciclo de mineração de diamantes que moldou o traçado colonial da cidade, hoje ponto de passagem da Estrada Real no trecho conhecido como Caminho dos Diamantes, que liga Serro a Diamantina.',

  mercado:
    'Como cidade pequena do interior, o mercado fitness de Serro é modesto, formado por poucas academias de bairro que oferecem musculação, treino funcional e modalidades como crosstraining. A procura por personal trainer tende a vir de moradores que buscam acompanhamento individualizado diante da oferta enxuta de academias, além de visitantes hospedados por temporada que aproveitam o centro histórico e os trechos da Estrada Real para caminhada orientada.',

  bairrosNobres: ['Centro Histórico', 'Rosário', 'Vigário', 'Bela Vista'],
  bairrosPopulares: ['Praia', 'Leiteiro'],

  parques: [
    {
      nome: 'Centro Histórico (conjunto tombado pelo IPHAN)',
      descricao:
        'Primeiro conjunto arquitetônico e urbanístico tombado pelo IPHAN no Brasil (1938), reúne igrejas coloniais como as de Nossa Senhora da Conceição, Nossa Senhora do Carmo e Bom Jesus de Matozinhos, além de ruas e ladeiras de pedra que formam um percurso a céu aberto para caminhada.',
    },
    {
      nome: 'Estrada Real — Caminho dos Diamantes (Serro a Diamantina)',
      descricao:
        'Trecho da Estrada Real que liga Serro a Diamantina passando pelo distrito histórico de Milho Verde, antigo posto de fiscalização do extinto Distrito Diamantino; o percurso, em meio a casario colonial e serra, é usado para caminhada e cicloturismo.',
    },
    {
      nome: 'Distrito de Pedro Lessa e cachoeiras do entorno',
      descricao:
        'No distrito rural de Pedro Lessa, a cerca de 20 km da sede, cachoeiras como a Carioca e a do Moinho de Esteira, cercadas por afloramentos rochosos e campos rupestres, atraem quem busca trilha e contato com a natureza.',
    },
  ],
  ciclovias:
    'A cidade não conta com infraestrutura cicloviária dedicada; o cicloturismo na região aproveita estradas rurais e o trecho da Estrada Real entre Serro e Diamantina, enquanto o piso de pedra do centro histórico é mais adequado à caminhada.',

  clima:
    'A cerca de 804 metros de altitude, no maciço central da Serra do Espinhaço, Serro tem clima tropical de altitude, com verões chuvosos — as chuvas se concentram entre setembro e março — e invernos secos; as temperaturas costumam variar entre 15°C e 29°C ao longo do ano, com noites mais frias no período seco.',
  climaTreino:
    'O clima de altitude é relativamente ameno e favorece o treino ao ar livre em boa parte do ano, mas o piso de pedra do centro histórico pede atenção redobrada em dias de chuva, e as manhãs de inverno exigem aquecimento mais cuidadoso por causa do frio.',

  mobilidade:
    'O acesso a Serro se dá principalmente pela MG-010, que liga a cidade a Belo Horizonte — cerca de 226 km — passando por Lagoa Santa, a Serra do Cipó e Conceição do Mato Dentro, com um trecho de estrada de terra em bom estado entre Conceição do Mato Dentro e Serro. Para o leste, a rodovia MG-259 (MGC-259) conecta o município a Sabinópolis e à região do Alto Jequitinhonha e Vale do Rio Doce. Dentro do centro histórico tombado, as ruas de pedra e o relevo de morros marcam o deslocamento, feito majoritariamente a pé e por transporte municipal simples, compatível com uma cidade pequena do interior.',

  corridas: [],
  culturaEsportiva:
    'A cultura esportiva local está ligada ao trekking e à caminhada pelos trechos da Estrada Real e pelas cachoeiras dos distritos rurais, como Pedro Lessa e Milho Verde, além do uso das ruas do centro histórico para caminhada. A tradicional Festa do Queijo, realizada anualmente, movimenta a cidade e reforça um calendário de eventos que também sustenta o fluxo turístico ativo na região.',
  academias:
    'A oferta de academias é pequena, típica de um município de porte reduzido, com estabelecimentos locais oferecendo musculação, crosstraining e treino funcional no Centro.',

  destaquesFitness: [
    'Primeira cidade brasileira tombada pelo IPHAN (1938), com centro histórico barroco na Serra do Espinhaço.',
    'Queijo do Serro: modo artesanal reconhecido como Patrimônio Cultural do Brasil (IPHAN, 2008) e parte do bem inscrito pela UNESCO como Patrimônio Imaterial da Humanidade em 2024.',
    'Trecho da Estrada Real (Caminho dos Diamantes) entre Serro e Diamantina, passando pelo distrito de Milho Verde, com cachoeiras e trilhas para trekking.',
    'Clima tropical de altitude (cerca de 804 m), ameno, favorável ao treino ao ar livre na maior parte do ano.',
  ],

  precos: {
    avulsaMin: 50,
    avulsaMax: 110,
    mensalMin: 240,
    mensalMax: 640,
    onlineMin: 110,
    onlineMax: 320,
  },

  conclusao:
    'Histórica, cercada pela Serra do Espinhaço e conhecida por seu queijo artesanal, Serro oferece um cenário raro para treinar entre ruas de pedra tombadas, trechos da Estrada Real e cachoeiras dos distritos rurais. Diante de um mercado local de academias enxuto, um personal trainer ajuda moradores e visitantes a manter a constância, adaptando o treino ao relevo de serra, ao clima de altitude e à rotina de uma cidade pequena do interior mineiro.',

  vizinhas: ['diamantina-mg', 'santana-do-riacho-mg', 'curvelo-mg'],

  fontes: [
    { nome: 'IBGE Cidades — Serro', url: 'https://cidades.ibge.gov.br/brasil/mg/serro/panorama' },
    { nome: 'IPHAN — Serro (MG)', url: 'https://portal.iphan.gov.br/pagina/detalhes/376/' },
    { nome: 'Atlas Brasil — IDHM', url: 'https://www.atlasbrasil.org.br/' },
  ],
  atualizadoEm: '2026-07-02',
};
