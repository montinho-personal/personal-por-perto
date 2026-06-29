import type { Cidade } from '../../lib/types';

export const cidade: Cidade = {
  slug: 'maua-sp',
  nome: 'Mauá',
  uf: 'SP',
  estado: 'São Paulo',
  estadoSlug: 'sao-paulo',
  regiao: 'Sudeste',
  gentilico: 'mauaense',
  tipo: 'cidade',

  populacao: 418261,
  populacaoAno: 2022,
  idhm: 0.766,
  idhmClasse: 'alto',
  altitudeM: 760,

  resumoEconomico:
    'Cidade industrial do ABC paulista, Mauá foi historicamente a "Capital da Porcelana" e hoje sedia o Polo Petroquímico de Capuava e a Refinaria de Capuava (RECAP), com forte presença de óleo e gás, petroquímica e metalmecânica. O perfil operário e a localização entre a capital e o Porto de Santos moldam o dia a dia da cidade e de seu público.',

  mercado:
    'O mercado fitness é voltado às academias de bairro que atendem a população trabalhadora, com uma rede municipal de esportes ampla. A demanda por musculação e treino funcional acessível é forte, e o personal que se adapta aos turnos de trabalho tem espaço garantido.',

  bairrosNobres: ['Vila Bocaina', 'Vila Noêmia', 'Jardim Zaíra', 'Centro'],
  bairrosPopulares: ['Jardim Sônia Maria', 'Jardim Guapituba', 'Vila Assis Brasil', 'Zaíra'],

  parques: [
    {
      nome: 'Área de lazer do Jardim Guapituba',
      descricao:
        'Espaço revitalizado para lazer e esporte, com áreas para caminhada e atividades ao ar livre.',
    },
    {
      nome: 'Centros Municipais de Esporte e Cultura (CMECs)',
      descricao:
        'Rede de unidades com quadras e atividades esportivas distribuídas pela cidade, ampliando o acesso público ao treino.',
    },
    {
      nome: 'Ginásios e campos municipais',
      descricao:
        'Estrutura municipal com ginásios poliesportivos e campos distritais que sustentam o esporte comunitário.',
    },
  ],
  ciclovias:
    'A cidade tem trechos de estrutura cicloviária integrados à malha do ABC; a extensão total não é consolidada em fonte oficial.',

  clima:
    'O clima é subtropical de altitude do planalto paulista, com chuvas concentradas no verão; o relevo é acidentado, com vales sujeitos a alagamentos em chuvas fortes.',
  climaTreino:
    'O treino ao ar livre rende bem no inverno seco; no verão, atenção às chuvas. O relevo acidentado oferece bons percursos de subida para quem treina corrida.',

  mobilidade:
    'Mauá é integrada à Grande São Paulo e ao ABC, com ligação ferroviária pela CPTM (Linha 10) a Santo André e à capital, além de proximidade do Sistema Anchieta–Imigrantes.',

  corridas: [
    {
      nome: 'Calendário esportivo municipal',
      descricao:
        'A prefeitura oferta milhares de vagas gratuitas para a prática esportiva, com provas e atividades promovidas pela Secretaria de Esportes e Lazer.',
    },
    {
      nome: 'Provas de rua regionais do ABC',
      descricao:
        'Mauá participa do movimentado calendário de corridas do ABC paulista, com provas em cidades vizinhas e na própria cidade.',
    },
  ],
  culturaEsportiva:
    'Mauá tem cultura esportiva comunitária forte, ligada ao futebol de várzea, aos campos distritais e a uma ampla rede pública de equipamentos (CMECs, ginásios e estádio), que democratiza o acesso à atividade física.',
  academias:
    'A oferta é dominada por academias de bairro que atendem a população metalúrgica e trabalhadora, complementadas pela rede municipal de esportes e pelos espaços públicos de treino.',

  destaquesFitness: [
    'Rede municipal robusta de esportes (CMECs, ginásios e estádio).',
    'Vagas esportivas gratuitas ofertadas pela prefeitura.',
    'Perfil de cidade industrial, com demanda por academias de bairro e horários flexíveis.',
    'Relevo acidentado, que oferece percursos de subida para treino de corrida.',
  ],

  precos: {
    avulsaMin: 70,
    avulsaMax: 160,
    mensalMin: 350,
    mensalMax: 950,
    onlineMin: 170,
    onlineMax: 430,
  },

  conclusao:
    'Cidade industrial do ABC, Mauá tem uma demanda muito ligada à rotina de trabalho e uma forte rede pública de esporte. Um personal trainer ajuda a encaixar o treino no dia a dia — aproveitando os equipamentos municipais, as academias de bairro ou o formato online.',

  vizinhas: ['santo-andre-sp', 'sao-bernardo-do-campo-sp', 'sao-paulo-sp'],

  fontes: [
    { nome: 'IBGE Cidades — Mauá', url: 'https://cidades.ibge.gov.br/brasil/sp/maua/panorama' },
    { nome: 'Prefeitura de Mauá', url: 'https://www.maua.sp.gov.br/' },
    { nome: 'Atlas Brasil — IDHM', url: 'https://www.atlasbrasil.org.br/' },
  ],
  atualizadoEm: '2026-06-29',
};
