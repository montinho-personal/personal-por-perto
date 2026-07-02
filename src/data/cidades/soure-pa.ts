import type { Cidade } from '../../lib/types';

export const cidade: Cidade = {
  slug: 'soure-pa',
  nome: 'Soure',
  uf: 'PA',
  estado: 'Pará',
  estadoSlug: 'para',
  regiao: 'Norte',
  gentilico: 'sourense',
  tipo: 'cidade',

  populacao: 24204,
  populacaoAno: 2022,
  idhm: 0.615,
  idhmClasse: 'médio',

  resumoEconomico:
    'Conhecida como a Capital do Marajó, Soure fica na Ilha de Marajó, cercada por rios e pela costa atlântica, e só é acessível por travessia de barco ou balsa a partir de Belém. A economia gira em torno do turismo (praias fluviais e de água doce, cavalgadas e passeios em fazendas de búfalos), da pecuária bubalina — o Pará concentra a maior parte do rebanho de búfalos do Brasil, com o Marajó como principal polo produtor —, da pesca artesanal e do artesanato de cerâmica marajoara, herança da cultura pré-colombiana que floresceu na ilha.',

  mercado:
    'O mercado fitness de Soure é pequeno e concentrado na área urbana, refletindo o porte de uma cidade de ilha com acesso restrito ao continente. A procura por personal trainers tende a se associar ao turismo — visitantes que buscam manter a rotina de treino durante a estadia — e a moradores que aproveitam as praias e a orla como espaço natural de atividade física.',

  bairrosNobres: ['Centro', 'Céu'],
  bairrosPopulares: ['Pacoval', 'Espírito Santo', 'Chaveiro'],

  parques: [
    {
      nome: 'Praia do Pesqueiro',
      descricao:
        'A praia mais estruturada e visitada de Soure, com restaurantes à beira-mar e faixa de areia extensa — ponto de referência para caminhada, corrida e treino ao ar livre com os pés na areia.',
    },
    {
      nome: 'Praia da Barra Velha',
      descricao:
        'A cerca de 3 km do centro urbano, tem vegetação de manguezal e paisagem preservada, servindo como opção mais tranquila para atividades ao ar livre fora do polo turístico principal.',
    },
    {
      nome: 'Orla e centro histórico de Soure',
      descricao:
        'O traçado urbano relativamente plano e arborizado do centro, com ruas largas herdadas do antigo posto de charqueadas, favorece caminhadas e pedaladas curtas dentro da cidade.',
    },
  ],
  ciclovias:
    'Não há infraestrutura cicloviária urbana consolidada; a bicicleta é, no entanto, meio de transporte comum entre moradores, aproveitando as ruas largas e o relevo plano da cidade.',

  clima:
    'O clima é tropical úmido (equatorial, tipo Am de Köppen), com temperatura média em torno de 27°C ao longo do ano. Há duas estações bem marcadas: o período mais chuvoso, de dezembro a maio — quando parte da ilha alaga —, e o período mais seco, de junho a novembro, com chuvas mais espaçadas e calor persistente.',
  climaTreino:
    'O calor e a umidade constantes pedem treinos nos horários mais amenos, de manhã cedo ou final de tarde, com hidratação reforçada; na estação chuvosa, o alagamento de áreas da ilha pode limitar o treino ao ar livre e reforça a importância de alternativas cobertas.',

  mobilidade:
    'Soure fica na Ilha de Marajó e não tem ligação rodoviária com o continente: o acesso a partir de Belém é feito por barco ou balsa, com travessia de cerca de 3 horas até o Porto de Camará, em Salvaterra, seguida de um trecho terrestre e uma travessia curta de balsa até a cidade. Dentro do município, o transporte é feito majoritariamente por mototáxi, bicicleta e veículos adaptados às estradas de terra da ilha.',

  corridas: [],
  culturaEsportiva:
    'A cultura esportiva e de lazer de Soure é marcada pelas praias fluviais e de água doce, usadas para caminhada e banho, pelas cavalgadas com cavalos marajoaras — tradição que ganhou eventos como o Festival do Cavalo Marajoara — e pelo uso cotidiano da bicicleta nas ruas da cidade.',
  academias:
    'A oferta de academias é reduzida, típica de uma cidade pequena e isolada geograficamente, concentrada na área central e voltada principalmente à musculação e ao condicionamento físico básico.',

  destaquesFitness: [
    'Capital do Marajó: acesso só por barco ou balsa, com travessia de cerca de 3 horas a partir de Belém.',
    'Praias fluviais e de água doce, como Pesqueiro e Barra Velha, como espaço natural para caminhada e treino ao ar livre.',
    'Clima equatorial quente e úmido, com estação chuvosa que alaga parte da ilha entre dezembro e maio.',
    'Cultura das cavalgadas com cavalos marajoaras e da pecuária bubalina, marca registrada da identidade local.',
  ],

  precos: {
    avulsaMin: 50,
    avulsaMax: 100,
    mensalMin: 200,
    mensalMax: 600,
    onlineMin: 100,
    onlineMax: 300,
  },

  conclusao:
    'Isolada no meio do rio e do mar, com praias de água doce e uma rotina marcada pelo calor e pelas travessias de barco, Soure pede um treino que respeite o clima da ilha e aproveite a orla como espaço natural de atividade. Um personal trainer ajuda a manter a constância mesmo diante da logística particular de quem vive — ou visita — o Marajó.',

  vizinhas: ['belem-pa', 'breves-pa', 'salinopolis-pa'],

  fontes: [
    { nome: 'IBGE Cidades — Soure', url: 'https://cidades.ibge.gov.br/brasil/pa/soure/panorama' },
    { nome: 'Prefeitura Municipal de Soure', url: 'https://soure.pa.gov.br/' },
    { nome: 'Atlas Brasil — IDHM', url: 'https://www.atlasbrasil.org.br/' },
  ],
  atualizadoEm: '2026-07-02',
};
