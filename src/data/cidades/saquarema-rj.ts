import type { Cidade } from '../../lib/types';

export const cidade: Cidade = {
  slug: 'saquarema-rj',
  nome: 'Saquarema',
  uf: 'RJ',
  estado: 'Rio de Janeiro',
  estadoSlug: 'rio-de-janeiro',
  regiao: 'Sudeste',
  gentilico: 'saquaremense',
  tipo: 'cidade',

  populacao: 89559,
  populacaoAno: 2022,
  idhm: 0.709,
  idhmClasse: 'alto',

  resumoEconomico:
    'Na Região dos Lagos / Costa do Sol fluminense, Saquarema é conhecida nacionalmente como a "Capital Nacional do Surfe", graças às ondas da Praia de Itaúna. A economia combina turismo de praia e eventos com forte arrecadação de royalties do petróleo do pré-sal, que colocam a cidade entre os maiores PIBs per capita do país, em pleno ciclo de crescimento e investimento.',

  mercado:
    'Cidade turística e em expansão imobiliária, tem academias e estúdios locais, e o estilo de vida praiano e a cultura de esportes ao ar livre favorecem o treino funcional, o surfe e a corrida.',

  bairrosNobres: ['Itaúna', 'Vilatur', 'Boqueirão', 'Centro'],
  bairrosPopulares: ['Bacaxá', 'Sampaio Correia', 'Jaconé', 'Porto da Roça'],

  parques: [
    {
      nome: 'Orla do Boqueirão',
      descricao:
        'Orla revitalizada com cerca de 800 m de calçadão, ciclovia de 650 m, academia ao ar livre, mesas de jogos e playground.',
    },
    {
      nome: 'Orla da Praia de Itaúna',
      descricao:
        'Calçadão à beira-mar e academia ao ar livre, no point mundial do surfe.',
    },
    {
      nome: 'Avenida Oceânica',
      descricao:
        'Faixa de areia com ciclovia, usada para caminhada e ciclismo com vista para o mar.',
    },
  ],
  ciclovias:
    'Há ciclovia ao longo da Avenida Oceânica e um trecho de 650 m na nova Orla do Boqueirão.',

  clima:
    'O clima é tropical, quente e úmido, com média anual em torno de 23,3 °C e baixa pluviosidade típica da Região dos Lagos.',
  climaTreino:
    'O sol e o calor favorecem o treino ao ar livre o ano todo, exigindo hidratação e cuidado com os horários de pico no verão.',

  mobilidade:
    'O acesso se dá pela RJ-106 (Rodovia Amaral Peixoto), que percorre toda a Costa do Sol, e pela Via Lagos (RJ-124), a cerca de 100 km do Rio.',

  corridas: [
    {
      nome: 'Etapa do Mundial de Surfe (WSL) — Praia de Itaúna',
      descricao:
        'Etapa do circuito mundial realizada anualmente, que atrai centenas de milhares de pessoas à cidade.',
    },
    {
      nome: 'Etapa do Challenger Series da WSL',
      descricao:
        'Circuito de acesso do surfe mundial, também sediado na Praia de Itaúna.',
    },
  ],
  culturaEsportiva:
    'Saquarema tem identidade fortemente ligada ao surfe e aos esportes de praia, com um calendário de dezenas de eventos por ano, e a orla concentra a vida ativa da população.',
  academias:
    'A oferta reúne academias e estúdios, com a orla do Boqueirão e a Praia de Itaúna funcionando como academia a céu aberto para corrida e treino funcional.',

  destaquesFitness: [
    'Capital Nacional do Surfe — base de surfistas e esportes de praia.',
    'Orla do Boqueirão com academia ao ar livre e ciclovia.',
    'Praia de Itaúna como polo de surfe e atividade física.',
    'Calendário robusto de eventos esportivos ao longo do ano.',
  ],

  precos: {
    avulsaMin: 70,
    avulsaMax: 170,
    mensalMin: 350,
    mensalMax: 950,
    onlineMin: 170,
    onlineMax: 440,
  },

  conclusao:
    'Capital Nacional do Surfe na Costa do Sol, Saquarema une praia, royalties e um calendário esportivo intenso. Um personal trainer ajuda a aproveitar a orla do Boqueirão e Itaúna com método, do treino funcional na areia à preparação para o surfe.',

  vizinhas: ['marica-rj', 'cabo-frio-rj'],

  fontes: [
    { nome: 'IBGE Cidades — Saquarema', url: 'https://cidades.ibge.gov.br/brasil/rj/saquarema/panorama' },
    { nome: 'Prefeitura de Saquarema', url: 'https://www.saquarema.rj.gov.br/' },
    { nome: 'Atlas Brasil — IDHM', url: 'https://www.atlasbrasil.org.br/' },
  ],
  atualizadoEm: '2026-06-29',
};
