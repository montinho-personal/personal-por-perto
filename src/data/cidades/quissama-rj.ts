import type { Cidade } from '../../lib/types';

export const cidade: Cidade = {
  slug: 'quissama-rj',
  nome: 'Quissamã',
  uf: 'RJ',
  estado: 'Rio de Janeiro',
  estadoSlug: 'rio-de-janeiro',
  regiao: 'Sudeste',
  gentilico: 'quissamaense',
  tipo: 'cidade',

  populacao: 22393,
  populacaoAno: 2022,
  idhm: 0.704,
  idhmClasse: 'alto',
  pibPerCapita: 253188.23,
  pibPerCapitaAno: 2023,
  altitudeM: 20,

  resumoEconomico:
    'Quissamã é uma das cidades produtoras de petróleo da Bacia de Campos e tem um dos PIBs per capita mais altos do Rio de Janeiro, sustentado pelos royalties do óleo extraído no litoral norte fluminense: a indústria (extração de petróleo) responde pela maior fatia do PIB municipal, à frente de serviços, administração pública e agropecuária. Antes do petróleo, a cidade foi um dos grandes polos açucareiros do Império, sede do Engenho Central de Quissamã — o primeiro engenho central do Brasil, inaugurado em 1877 e que operou até 2003. A prefeitura vem tentando diversificar a economia, hoje concentrada no setor público e nos royalties, com programas de apoio a pequenos empreendedores e à agropecuária.',

  mercado:
    'O mercado fitness de Quissamã é o de uma cidade pequena, mas com um diferencial: os royalties do petróleo financiam investimento público relevante em esporte e lazer, com secretaria própria, ginásio poliesportivo e programas municipais de atividade física em praias, lagoas e praças. A procura por personal trainers vem sobretudo de servidores públicos e famílias ligadas à cadeia do petróleo e do comércio local, em uma oferta de academias ainda concentrada no Centro.',

  bairrosNobres: ['Centro', 'Conde de Araruama', 'Santa Catarina', 'Boa Vista'],
  bairrosPopulares: ['Caxias', 'Piteiras', 'Canto da Saudade', 'Matias'],

  parques: [
    {
      nome: 'Parque Nacional da Restinga de Jurubatiba',
      descricao:
        'Unidade de conservação federal que ocupa a planície costeira de Quissamã, Carapebus e Macaé, com 44 km de praias e 18 lagoas costeiras — cenário de trilhas e da Jurubatiba Eco Trail Run, prova de corrida e caminhada realizada dentro do parque.',
    },
    {
      nome: 'Praia de João Francisco e Barra do Furado',
      descricao:
        'Faixa de praia usada pelos programas municipais de esporte e lazer de verão, com atividades físicas, torneios e vilas esportivas montadas junto à orla.',
    },
    {
      nome: 'Lagoa da Garça e Praça de Santa Catarina',
      descricao:
        'Espaços públicos incluídos no roteiro do programa "Verão Viver Quissamã", que leva aulas de ginástica, atividades aquáticas e corridas na natureza a diferentes pontos do município.',
    },
  ],
  ciclovias:
    'Não há registro de uma malha cicloviária extensa e consolidada na cidade; o deslocamento a pé e de bicicleta se concentra nas vias do Centro e nos trechos de orla usados nos programas municipais de lazer.',

  clima:
    'O clima é tropical, quente e úmido, típico do litoral norte fluminense, com temperaturas elevadas ao longo do ano e chuvas mais concentradas no verão.',
  climaTreino:
    'O calor e a umidade favorecem o treino ao ar livre nas primeiras horas da manhã ou no fim da tarde, especialmente nas praias e nos espaços do programa municipal de verão; nos horários de sol mais forte, ambientes cobertos ou climatizados são mais indicados.',

  mobilidade:
    'Quissamã é cortada pela BR-101, eixo rodoviário que liga Niterói a Campos dos Goytacazes ao longo do litoral norte fluminense, com entroncamento da RJ-196 dando acesso à sede do município; a distância rodoviária até Macaé é de cerca de 54 km. O transporte urbano é feito por ônibus, e boa parte dos deslocamentos internos ocorre por vias locais dentro do único distrito da cidade.',

  corridas: [
    {
      nome: 'Jurubatiba Eco Trail Run',
      descricao:
        'Prova de trilha realizada dentro do Parque Nacional da Restinga de Jurubatiba, com percursos de corrida de 7 km e 12 km e caminhada de 7 km, com apoio da Secretaria Municipal de Esporte e Juventude de Quissamã.',
    },
    {
      nome: 'Corrida da Consciência Negra de Quissamã',
      descricao:
        'Corrida de rua de cerca de 6,3 km realizada anualmente em novembro, em alusão ao Dia da Consciência Negra, já com várias edições na cidade.',
    },
  ],
  culturaEsportiva:
    'O investimento público via royalties do petróleo sustenta uma agenda esportiva municipal ativa, com o programa "Verão Viver Quissamã" levando ginástica, esportes aquáticos e corridas na natureza a praias, lagoas e praças, além de torneios como os "Torneios de Verão" na Arena Esportiva da Praia de João Francisco. A proximidade do Parque Nacional da Restinga de Jurubatiba também atrai praticantes de trilha e corrida de natureza.',
  academias:
    'A oferta de academias é pequena e concentrada no Centro, complementada pela estrutura pública esportiva do município (ginásio poliesportivo e espaços de lazer usados nos programas municipais), em um mercado ainda em formação para personal trainers.',

  destaquesFitness: [
    'Um dos maiores PIBs per capita do Rio de Janeiro, sustentado pelos royalties do petróleo da Bacia de Campos.',
    'Litoral compartilhado com o Parque Nacional da Restinga de Jurubatiba, com 18 lagoas e trilhas, sede da Jurubatiba Eco Trail Run.',
    'Programa municipal "Verão Viver Quissamã" leva esporte e lazer a praias, à Lagoa da Garça e a praças da cidade.',
    'Passado de capital açucareira, com o primeiro engenho central do Brasil em funcionamento entre 1877 e 2003.',
  ],

  precos: {
    avulsaMin: 60,
    avulsaMax: 130,
    mensalMin: 280,
    mensalMax: 750,
    onlineMin: 130,
    onlineMax: 380,
  },

  conclusao:
    'Cidade pequena e de alta renda per capita graças aos royalties do petróleo, Quissamã tem no investimento público em esporte e no litoral junto ao Parque Nacional da Restinga de Jurubatiba seus principais ativos para o treino ao ar livre. Um personal trainer ajuda a estruturar a rotina de treino aproveitando as praias, as lagoas e os programas municipais de atividade física, com atenção ao calor e à umidade do litoral norte fluminense.',

  vizinhas: ['macae-rj', 'campos-dos-goytacazes-rj', 'rio-das-ostras-rj'],

  fontes: [
    { nome: 'IBGE Cidades — Quissamã', url: 'https://cidades.ibge.gov.br/brasil/rj/quissama/panorama' },
    { nome: 'Prefeitura de Quissamã', url: 'https://quissama.rj.gov.br/' },
    { nome: 'Atlas Brasil — IDHM', url: 'https://www.atlasbrasil.org.br/' },
  ],
  atualizadoEm: '2026-07-02',
};
