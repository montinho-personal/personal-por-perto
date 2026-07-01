import type { Cidade } from '../../lib/types';

export const cidade: Cidade = {
  slug: 'santos-dumont-mg',
  nome: 'Santos Dumont',
  uf: 'MG',
  estado: 'Minas Gerais',
  estadoSlug: 'minas-gerais',
  regiao: 'Sudeste',
  gentilico: 'sandumonense',
  tipo: 'cidade',

  populacao: 42406,
  populacaoAno: 2022,
  idhm: 0.741,
  idhmClasse: 'alto',
  altitudeM: 863,

  resumoEconomico:
    'Na Zona da Mata mineira, Santos Dumont é a terra natal de Alberto Santos Dumont, o pai da aviação, nascido no sítio Cabangu em 1873. A cidade cresceu ao redor da ferrovia: ainda como distrito de João Gomes e depois como Palmyra, teve seu desenvolvimento impulsionado pelo ramal da Estrada de Ferro D. Pedro II, cuja estação foi inaugurada em 1877. Hoje a economia combina comércio e serviços que atendem a região, alguma atividade industrial e pecuária no meio rural, além do turismo ligado ao Museu de Cabangu, à Estrada Real (Caminho Novo) e à memória do aviador.',

  mercado:
    'Como cidade de médio porte do interior de Minas, Santos Dumont tem um mercado fitness concentrado em academias de bairro e treino funcional, mais enxuto que o de polos vizinhos como Juiz de Fora e Barbacena. A procura por personal trainers tende a vir de quem busca acompanhamento individualizado, treino ao ar livre aproveitando o clima ameno de altitude e orientação para caminhada e corrida nas ruas e praças do centro.',

  bairrosNobres: ['Centro', 'Boa Vista', 'Nossa Senhora Aparecida', 'Campo Alegre'],
  bairrosPopulares: ['Ponte Preta', 'Santa Terezinha', 'Graminha', 'Vila Esperança'],

  parques: [
    {
      nome: 'Museu de Cabangu (Fazenda Cabangu)',
      descricao:
        'Casa natal de Alberto Santos Dumont, a cerca de 16 km do centro, no vale da Mantiqueira. O sítio histórico e suas trilhas de acesso em meio à mata servem de cenário para caminhadas e atividade ao ar livre, unindo natureza e memória do pai da aviação.',
    },
    {
      nome: 'Praça Cesário Alvim',
      descricao:
        'Principal praça do centro, ponto de encontro da cidade e largada de eventos de corrida de rua; seu entorno e as ruas centrais planas concentram boa parte da caminhada e do treino urbano.',
    },
    {
      nome: 'Estrada Real (Caminho Novo) e Serra da Mantiqueira',
      descricao:
        'Trechos preservados do calçamento histórico da Estrada Real e as encostas da Serra da Mantiqueira oferecem percursos de trilha e subidas para quem treina resistência em ambiente de altitude e natureza.',
    },
  ],
  ciclovias:
    'A estrutura cicloviária é modesta e restrita a poucos trechos urbanos; grande parte do pedal e da corrida acontece nas vias da cidade e nas estradas rurais que sobem em direção à serra, exigindo atenção ao relevo acidentado.',

  clima:
    'O clima é tropical de altitude (Cwb na classificação de Köppen), típico dos planaltos e serras do Sudeste, com temperatura média anual em torno de 20 °C. O ano se divide entre um período mais quente e chuvoso, de outubro a abril, e um período mais fresco e seco, de maio a setembro, quando as manhãs de inverno podem ser bastante frias por conta da altitude e da proximidade da Mantiqueira.',
  climaTreino:
    'O clima ameno de altitude é favorável ao treino ao ar livre na maior parte do ano, com manhãs e fins de tarde agradáveis. No inverno, o frio das manhãs pede aquecimento reforçado e roupas em camadas; no verão chuvoso, vale planejar horários e ter uma alternativa coberta para os dias de chuva.',

  mobilidade:
    'A cidade é cortada pela BR-040, no eixo entre Barbacena e Juiz de Fora, sua principal ligação rodoviária. A BR-499 parte da BR-040 no perímetro urbano em direção ao distrito onde fica o Museu de Cabangu, com forte apelo turístico. O transporte urbano é feito por ônibus, e a ferrovia — hoje operada pela MRS Logística para cargas — mantém viva a herança que deu origem ao município.',

  corridas: [
    {
      nome: 'Corrida Santos Dumont',
      descricao:
        'Prova de corrida de rua realizada na cidade, com largada na região central (Praça Cesário Alvim) e percurso pelas avenidas e ruas do centro, reunindo corredores locais e da região.',
    },
    {
      nome: 'Circuito de MTB de Santos Dumont',
      descricao:
        'Evento de mountain bike que explora as estradas rurais e o relevo de serra do município, aproveitando as subidas e trilhas da Mantiqueira.',
    },
  ],
  culturaEsportiva:
    'A cultura esportiva mistura a corrida de rua no centro, o ciclismo e o mountain bike pelas estradas de serra e o turismo histórico e de natureza ligado ao Museu de Cabangu e à Estrada Real, tudo favorecido pelo clima ameno de altitude.',
  academias:
    'A oferta é formada principalmente por academias locais de musculação e treino funcional, distribuídas pelo centro e pelos bairros residenciais, com porte compatível com uma cidade de médio porte do interior mineiro.',

  destaquesFitness: [
    'Terra natal de Alberto Santos Dumont, o pai da aviação, com o Museu de Cabangu como marco histórico e de natureza.',
    'Clima tropical de altitude, ameno na maior parte do ano e favorável ao treino ao ar livre.',
    'Relevo de serra e trechos da Estrada Real que rendem trilhas, subidas e percursos de resistência.',
    'Corrida de rua no centro (Praça Cesário Alvim) e mountain bike pelas estradas rurais da Mantiqueira.',
  ],

  precos: {
    avulsaMin: 50,
    avulsaMax: 120,
    mensalMin: 260,
    mensalMax: 720,
    onlineMin: 120,
    onlineMax: 360,
  },

  conclusao:
    'Cidade de clima ameno de altitude, cercada pela Serra da Mantiqueira e marcada pela história do pai da aviação, Santos Dumont oferece um cenário convidativo para treinar ao ar livre em quase todo o ano. Um personal trainer ajuda a organizar a rotina aproveitando as praças do centro, as subidas de serra e o clima favorável, ajustando os horários ao frio do inverno e às chuvas do verão para manter a constância.',

  vizinhas: ['barbacena-mg', 'juiz-de-fora-mg'],

  fontes: [
    { nome: 'IBGE Cidades — Santos Dumont', url: 'https://cidades.ibge.gov.br/brasil/mg/santos-dumont/panorama' },
    { nome: 'Prefeitura de Santos Dumont', url: 'https://www.santosdumont.mg.gov.br/' },
    { nome: 'Atlas Brasil — IDHM', url: 'https://www.atlasbrasil.org.br/' },
  ],
  atualizadoEm: '2026-06-29',
};
