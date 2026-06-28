import type { Cidade } from '../../lib/types';

export const cidade: Cidade = {
  slug: 'campinas-sp',
  nome: 'Campinas',
  uf: 'SP',
  estado: 'São Paulo',
  estadoSlug: 'sao-paulo',
  regiao: 'Sudeste',
  gentilico: 'campineiro',

  populacao: 1139047,
  populacaoAno: 2022,
  idhm: 0.805,
  idhmClasse: 'muito alto',
  altitudeM: 685,

  resumoEconomico:
    'Conhecida como o "Vale do Silício brasileiro", Campinas é um polo de tecnologia e pesquisa ancorado na Unicamp, na PUC-Campinas e em centros como o CPQD. À força industrial e ao agronegócio da região soma-se o Aeroporto de Viracopos, um dos principais hubs de cargas do país. O resultado é um público de alta escolaridade e renda, que valoriza acompanhamento profissional e resultados mensuráveis.',

  bairrosNobres: ['Cambuí', 'Taquaral', 'Nova Campinas', 'Gramado', 'Alphaville Campinas'],
  bairrosPopulares: ['Ouro Verde', 'Campo Grande', 'DIC', 'Jardim São Marcos'],

  parques: [
    {
      nome: 'Lagoa do Taquaral (Parque Portugal)',
      descricao:
        'O grande hub esportivo da cidade. Tem pista de cooper de cerca de 2.800 m, ciclovia interna de aproximadamente 5 km e uma volta completa do lago de cerca de 6 km, muito usada por corredores e ciclistas. É o ponto de encontro de quem treina ao ar livre em Campinas.',
    },
    {
      nome: 'Bosque dos Jequitibás',
      descricao:
        'Área verde tradicional no centro, ideal para caminhadas, alongamento e treinos leves em meio à mata, com fácil acesso para quem mora ou trabalha na região central.',
    },
    {
      nome: 'Lago do Café',
      descricao:
        'Outro espaço popular para caminhada e corrida, que ajuda a distribuir a prática esportiva para além da Lagoa do Taquaral.',
    },
  ],
  ciclovias:
    'A ciclovia interna do Parque Portugal tem cerca de 5 km e concentra boa parte do ciclismo de lazer da cidade; a orla da Lagoa do Taquaral é o circuito mais usado para corrida e pedaladas.',

  clima:
    'Campinas tem clima tropical de altitude, com inverno seco e verão chuvoso. A temperatura média anual gira em torno de 22 °C, com verões quentes e invernos amenos. O período mais chuvoso coincide com o verão.',
  climaTreino:
    'O clima de altitude é convidativo para treino outdoor na maior parte do ano. No verão, a recomendação é priorizar os horários da manhã, antes das pancadas de chuva e do calor mais forte do início da tarde.',

  mobilidade:
    'O deslocamento na cidade é predominantemente por carro e por ônibus, com sistema municipal gerido pela EMDEC e terminais integrados. Não há ainda um trem urbano metropolitano em operação plena, o que faz da localização do profissional — perto de casa, do trabalho ou da academia — um fator decisivo na escolha.',

  corridas: [
    {
      nome: 'Corridas de rua na Lagoa do Taquaral',
      descricao:
        'A cidade tem um calendário ativo de corridas de rua, com boa parte das provas realizadas na orla da Lagoa do Taquaral — a ponto de a EMDEC organizar operações de trânsito específicas nesses dias.',
    },
  ],
  culturaEsportiva:
    'Cidade universitária e de tecnologia, Campinas tem um público acostumado a metas e dados — o que se reflete em uma comunidade de corrida e ciclismo organizada em torno da Lagoa do Taquaral. Treinar com acompanhamento e medir evolução faz parte da cultura local.',
  academias:
    'O mercado de academias e estúdios é relevante, com presença de grandes redes e de estúdios de treino funcional e personalizado, especialmente nos bairros de maior renda como Cambuí e Taquaral.',

  destaquesFitness: [
    'Lagoa do Taquaral como grande polo de corrida, ciclismo e caminhada.',
    'Público de alta escolaridade e renda, ligado à Unicamp e ao setor de tecnologia.',
    'Clima de altitude favorável ao treino ao ar livre boa parte do ano.',
    'Bairros como Cambuí e Taquaral com forte oferta de estúdios e treino funcional.',
  ],

  precos: {
    avulsaMin: 70,
    avulsaMax: 160,
    mensalMin: 360,
    mensalMax: 950,
    onlineMin: 180,
    onlineMax: 450,
  },

  vizinhas: ['sao-paulo-sp', 'barueri-sp'],

  fontes: [
    { nome: 'IBGE Cidades — Campinas', url: 'https://cidades.ibge.gov.br/brasil/sp/campinas/panorama' },
    { nome: 'Prefeitura de Campinas', url: 'https://www.campinas.sp.gov.br/' },
    { nome: 'Atlas Brasil — IDHM', url: 'https://www.atlasbrasil.org.br/' },
  ],
  atualizadoEm: '2026-06-28',
};
