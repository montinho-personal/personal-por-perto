import type { Cidade } from '../../lib/types';

export const cidade: Cidade = {
  slug: 'eunapolis-ba',
  nome: 'Eunápolis',
  uf: 'BA',
  estado: 'Bahia',
  estadoSlug: 'bahia',
  regiao: 'Nordeste',
  gentilico: 'eunapolitano',
  tipo: 'cidade',

  populacao: 113710,
  populacaoAno: 2022,
  idhm: 0.677,
  idhmClasse: 'médio',
  altitudeM: 189,

  resumoEconomico:
    'Localizada no extremo sul da Bahia, na Costa do Descobrimento, Eunápolis cresceu como entroncamento rodoviário e hoje funciona como portal de acesso à região turística de Porto Seguro. A economia tem peso forte da silvicultura de eucalipto e da indústria de celulose — a cidade integra a área de atuação da Veracel, uma das maiores fábricas de celulose do mundo —, além de comércio e serviços que atendem os municípios vizinhos.',

  mercado:
    'Como polo de comércio e serviços do extremo sul baiano, Eunápolis concentra a demanda por academias e personal trainers de uma região turística movimentada. O público de classe média ligado à indústria de celulose e ao setor de serviços sustenta a procura por acompanhamento físico personalizado.',

  bairrosNobres: ['Centro', 'Dinah Borges', 'Juca Rosa', 'Pequi'],
  bairrosPopulares: ['Urbis I', 'Urbis II', 'Moisés Reis', 'Sapucaeira'],

  parques: [
    {
      nome: 'Praças e espaços públicos do Centro',
      descricao:
        'As praças centrais de Eunápolis concentram a atividade física informal da cidade, usadas para caminhada, alongamento e encontros de grupos de treino ao ar livre.',
    },
    {
      nome: 'Áreas verdes do entorno urbano',
      descricao:
        'No extremo sul baiano, com forte presença de plantios de eucalipto e remanescentes de Mata Atlântica, há trechos arborizados no entorno da cidade procurados para caminhada e corrida.',
    },
  ],
  ciclovias:
    'A malha cicloviária de Eunápolis ainda é limitada; a cidade vem investindo em sinalização viária, mas a extensão oficial de ciclovias não é divulgada em fonte pública consolidada.',

  clima:
    'O clima é tropical quente e úmido, típico da Costa do Descobrimento, com temperatura média anual em torno de 23,5 °C e chuvas distribuídas ao longo do ano (cerca de 990 mm anuais).',
  climaTreino:
    'O calor e a umidade pedem treinos nos horários mais frescos — início da manhã e fim da tarde —, além de boa hidratação. Ambientes climatizados ganham importância nas horas mais quentes do dia.',

  mobilidade:
    'Eunápolis é cortada pela BR-101, principal eixo rodoviário do litoral, e funciona como entroncamento: dali parte a BR-367 em direção a Porto Seguro, Santa Cruz Cabrália e Belmonte, o que consolida a cidade como portal de acesso à Costa do Descobrimento.',

  corridas: [
    {
      nome: 'Corridas de rua locais',
      descricao:
        'A cidade recebe provas de corrida de rua organizadas por iniciativas locais e de toda a região do extremo sul baiano, com percursos pelas vias urbanas.',
    },
    {
      nome: 'Eventos esportivos regionais',
      descricao:
        'Como polo regional, Eunápolis também serve de base para corredores que participam de eventos no eixo turístico de Porto Seguro e municípios vizinhos.',
    },
  ],
  culturaEsportiva:
    'A prática esportiva em Eunápolis se apoia em caminhada e corrida de rua, com grupos que se reúnem nas praças e vias centrais, e na proximidade com o litoral turístico do extremo sul baiano.',
  academias:
    'A oferta de academias acompanha o porte de cidade média e o público ligado ao comércio, aos serviços e à indústria de celulose, com unidades concentradas no Centro e nos bairros em valorização.',

  destaquesFitness: [
    'Portal da Costa do Descobrimento, com acesso fácil ao litoral de Porto Seguro.',
    'Polo de celulose e eucalipto, com público de classe média ligado à indústria e aos serviços.',
    'Clima tropical quente e úmido que favorece treinos ao ar livre nos horários mais frescos.',
    'Entroncamento da BR-101 com a BR-367, posição estratégica no extremo sul baiano.',
  ],

  precos: {
    avulsaMin: 45,
    avulsaMax: 110,
    mensalMin: 250,
    mensalMax: 700,
    onlineMin: 115,
    onlineMax: 350,
  },

  conclusao:
    'Portal da Costa do Descobrimento e polo de celulose do extremo sul baiano, Eunápolis combina rotina de cidade média com proximidade do litoral. Um personal trainer ajuda a montar um plano que respeite o clima quente e úmido, aproveitando os horários mais frescos e os espaços públicos da cidade.',

  vizinhas: ['porto-seguro-ba', 'teixeira-de-freitas-ba', 'itabuna-ba'],

  fontes: [
    { nome: 'IBGE Cidades — Eunápolis', url: 'https://cidades.ibge.gov.br/brasil/ba/eunapolis/panorama' },
    { nome: 'Prefeitura de Eunápolis', url: 'https://www.eunapolis.ba.gov.br/' },
    { nome: 'Atlas Brasil — IDHM', url: 'https://www.atlasbrasil.org.br/' },
  ],
  atualizadoEm: '2026-06-29',
};
