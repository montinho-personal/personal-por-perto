import type { Cidade } from '../../lib/types';

export const cidade: Cidade = {
  slug: 'atibaia-sp',
  nome: 'Atibaia',
  uf: 'SP',
  estado: 'São Paulo',
  estadoSlug: 'sao-paulo',
  regiao: 'Sudeste',
  gentilico: 'atibaiense',
  tipo: 'cidade',

  populacao: 158647,
  populacaoAno: 2022,
  idhm: 0.765,
  idhmClasse: 'alto',
  altitudeM: 800,

  resumoEconomico:
    'Entre São Paulo e Campinas, na serra, Atibaia tem clima ameno o ano todo e economia forte em turismo de bem-estar e ecoturismo, gastronomia, flores e morango (responsável por boa parte da produção nacional). A expansão imobiliária e a alta procura por moradia de alto padrão em condomínios fechados completam o perfil.',

  mercado:
    'O perfil de bem-estar e qualidade de vida atrai público de alta renda (residentes e de segunda residência), com demanda por treino ao ar livre, trilhas e personal voltado a saúde e longevidade.',

  bairrosNobres: ['Jardim do Lago', 'Jardim Alvinópolis', 'Jardim Paulista', 'Vila Giglio'],
  bairrosPopulares: ['Caetetuba', 'Alvinópolis', 'Jardim Cerejeiras', 'Itapetinga'],

  parques: [
    {
      nome: 'Lago do Major',
      descricao:
        'Principal lago da cidade, com pista para caminhada e corrida, quadras de areia, teleférico e pedalinho.',
    },
    {
      nome: 'Lago do Jardim dos Pinheiros',
      descricao:
        'Tem trilhas para caminhada e observação de aves, em contato com a natureza.',
    },
    {
      nome: 'Trilha da Pedra Grande',
      descricao:
        'Na Serra do Itapetinga (até 1.418 m), é uma trilha desafiadora com a melhor vista da cidade — referência para trekking e treino outdoor.',
    },
  ],
  ciclovias:
    'A extensão da malha cicloviária urbana ainda não é divulgada em fonte oficial.',

  clima:
    'O clima é de altitude, ameno e seco, com temperaturas agradáveis o ano todo e noites e manhãs frias no inverno.',
  climaTreino:
    'As condições são ideais para o treino ao ar livre, a corrida e a trilha praticamente o ano inteiro.',

  mobilidade:
    'O acesso principal é pela Rodovia Fernão Dias (BR-381), eixo São Paulo–Belo Horizonte, ligando Atibaia à capital e a Campinas.',

  corridas: [
    {
      nome: 'Corrida Solidária Eu Amo Atibaia',
      descricao:
        'Prova de rua de caráter solidário, já em várias edições.',
    },
    {
      nome: 'Circuito de corridas de Atibaia',
      descricao:
        'Provas de 5 km e 10 km no calendário esportivo local.',
    },
  ],
  culturaEsportiva:
    'A cidade é orientada à vida ao ar livre, com forte cultura de trekking (Pedra Grande), corrida e esportes de natureza, alinhada ao seu posicionamento de bem-estar.',
  academias:
    'A oferta reúne academias e estúdios, com nicho premium nos condomínios fechados, complementada pelos lagos urbanos e pela trilha da Pedra Grande.',

  destaquesFitness: [
    'Clima de altitude ameno — treino outdoor o ano todo.',
    'Trilhas e Pedra Grande para trail running e condicionamento.',
    'Público de alto padrão em condomínios fechados — personal a domicílio e em condomínio.',
    'Posicionamento de bem-estar e saúde, com demanda por longevidade e funcional.',
  ],

  precos: {
    avulsaMin: 80,
    avulsaMax: 190,
    mensalMin: 400,
    mensalMax: 1100,
    onlineMin: 190,
    onlineMax: 470,
  },

  conclusao:
    'Refúgio de serra entre SP e Campinas, Atibaia une clima ameno, trilhas e público de alto padrão. Um personal trainer ajuda a aproveitar o Lago do Major e a Pedra Grande com método, num cenário ideal para treino ao ar livre o ano todo.',

  vizinhas: ['braganca-paulista-sp', 'campinas-sp'],

  fontes: [
    { nome: 'IBGE Cidades — Atibaia', url: 'https://cidades.ibge.gov.br/brasil/sp/atibaia/panorama' },
    { nome: 'Prefeitura de Atibaia', url: 'https://www.atibaia.sp.gov.br/' },
    { nome: 'Atlas Brasil — IDHM', url: 'https://www.atlasbrasil.org.br/' },
  ],
  atualizadoEm: '2026-07-30',
  capaArte: {
    src: '/capas-cidade/atibaia-sp.webp',
    w: 1200,
    h: 900,
    alt:
      'Personal trainer em Atibaia (SP) em arte que une treino em dupla e a Pedra Grande, o marco de granito que domina o horizonte atibaiense — Personal por Perto',
    legenda:
      'Treino personalizado em Atibaia: um plano feito para o seu corpo e a sua rotina, com acompanhamento profissional na cidade e região.',
  },
};
