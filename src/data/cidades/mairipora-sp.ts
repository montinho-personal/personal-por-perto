import type { Cidade } from '../../lib/types';

export const cidade: Cidade = {
  slug: 'mairipora-sp',
  nome: 'Mairiporã',
  uf: 'SP',
  estado: 'São Paulo',
  estadoSlug: 'sao-paulo',
  regiao: 'Sudeste',
  gentilico: 'mairiporanense',
  tipo: 'cidade',

  populacao: 93853,
  populacaoAno: 2022,
  idhm: 0.788,
  idhmClasse: 'alto',
  altitudeM: 790,

  resumoEconomico:
    'Na Região Metropolitana de São Paulo, encravada na Serra da Cantareira e cortada por mananciais, Mairiporã tem economia ligada ao turismo de natureza, gastronomia, sítios e chácaras e ao mercado imobiliário de condomínios na serra. Boa parte do território é área de proteção de mananciais do Sistema Cantareira, o que preserva a vocação verde e de bem-estar do município.',

  mercado:
    'O perfil de qualidade de vida e segunda residência atrai público que valoriza treino ao ar livre, trilhas e atividade na natureza. Há demanda por personal a domicílio e em condomínios da serra, além de acompanhamento voltado a saúde, longevidade e preparo para trilhas e corridas de montanha.',

  bairrosNobres: ['Parque Petrópolis', 'Caraguatá', 'Jardim Carolina', 'Terra Preta'],
  bairrosPopulares: ['Centro', 'Dona Catarina', 'Cantareira', 'Jardim Cinco Lagos'],

  parques: [
    {
      nome: 'Represa Paulo de Paiva Castro',
      descricao:
        'Reservatório do Sistema Cantareira no vale do Rio Juqueri, com entorno usado para caminhada, ciclismo e contemplação — cartão-postal do município.',
    },
    {
      nome: 'Serra da Cantareira / Parque Estadual da Cantareira',
      descricao:
        'Maciço de Mata Atlântica que envolve a cidade, com trilhas e o Pico do Olho d’Água, ponto mais alto do município, referência para trekking e treino de montanha.',
    },
    {
      nome: 'Áreas de mananciais e trilhas da região',
      descricao:
        'Trilhas, cachoeiras e mirantes em meio à mata preservada dão ao morador várias opções de atividade física em contato com a natureza.',
    },
  ],
  ciclovias:
    'A extensão da malha cicloviária urbana não é divulgada em fonte oficial; o uso da bicicleta concentra-se em estradas rurais e no entorno da represa.',

  clima:
    'O clima é de serra, ameno e úmido, com temperaturas agradáveis o ano todo, verões chuvosos e noites e manhãs frias no inverno, influenciado pela altitude e pela Mata Atlântica.',
  climaTreino:
    'As condições favorecem o treino ao ar livre, a corrida e a trilha na maior parte do ano, com atenção às chuvas de verão e ao frio nas primeiras horas do dia no inverno.',

  mobilidade:
    'O acesso principal é pela Rodovia Fernão Dias (BR-381), eixo São Paulo–Belo Horizonte, que liga Mairiporã à capital e a Atibaia. A cidade integra a Região Metropolitana de São Paulo, com forte ligação rodoviária a Guarulhos e à zona norte paulistana.',

  corridas: [
    {
      nome: 'Circuito Cantareira de Montanha',
      descricao:
        'Série de provas de trail running na Serra da Cantareira, com etapas como o Desafio Pico do Olho d’Água, em Mairiporã.',
    },
    {
      nome: 'LF Rustic Run',
      descricao:
        'Prova rústica de corrida em meio rural, realizada em sítio da região da Cantareira, em Mairiporã.',
    },
  ],
  culturaEsportiva:
    'A cidade é orientada à vida ao ar livre, com cultura de trail running, trekking e ciclismo aproveitando a Serra da Cantareira e o entorno da represa, alinhada ao posicionamento de turismo de natureza e bem-estar.',
  academias:
    'A oferta reúne academias e estúdios no Centro e nos bairros mais adensados, com nicho voltado aos condomínios da serra, complementada pelas trilhas e pelas áreas verdes para treino outdoor.',

  destaquesFitness: [
    'Serra da Cantareira e Pico do Olho d’Água — trail running e condicionamento de montanha.',
    'Entorno da Represa Paiva Castro para caminhada, corrida e ciclismo.',
    'Condomínios na serra com público que demanda personal a domicílio e funcional.',
    'Clima de serra ameno favorece o treino ao ar livre na maior parte do ano.',
  ],

  precos: {
    avulsaMin: 60,
    avulsaMax: 130,
    mensalMin: 300,
    mensalMax: 800,
    onlineMin: 140,
    onlineMax: 400,
  },

  conclusao:
    'Refúgio de serra na Região Metropolitana de São Paulo, Mairiporã une Mata Atlântica, mananciais do Sistema Cantareira e trilhas de montanha. Um personal trainer ajuda a aproveitar a Serra da Cantareira e o entorno da represa com método, num cenário de clima ameno ideal para treino ao ar livre.',

  vizinhas: ['sao-paulo-sp', 'guarulhos-sp', 'atibaia-sp'],

  fontes: [
    { nome: 'IBGE Cidades — Mairiporã', url: 'https://cidades.ibge.gov.br/brasil/sp/mairipora/panorama' },
    { nome: 'Prefeitura de Mairiporã', url: 'https://www.mairipora.sp.gov.br/' },
    { nome: 'Atlas Brasil — IDHM', url: 'https://www.atlasbrasil.org.br/perfil/municipio/3528502' },
  ],
  atualizadoEm: '2026-06-29',
};
