import type { Cidade } from '../../lib/types';

export const cidade: Cidade = {
  slug: 'contagem-mg',
  nome: 'Contagem',
  uf: 'MG',
  estado: 'Minas Gerais',
  estadoSlug: 'minas-gerais',
  regiao: 'Sudeste',
  gentilico: 'contagense',
  tipo: 'cidade',

  populacao: 621865,
  populacaoAno: 2022,
  idhm: 0.756,
  idhmClasse: 'alto',
  altitudeM: 880,

  resumoEconomico:
    'Terceiro município mais populoso de Minas Gerais e parte da Região Metropolitana de Belo Horizonte, Contagem é um dos principais polos industriais e logísticos do estado, com a histórica Cidade Industrial e forte presença de indústria, atacado e centros de distribuição. A vizinhança da capital e a tradição operária moldam o perfil da cidade e de seu público.',

  mercado:
    'A oferta de academias é boa, com redes como a Smart Fit (na região do Eldorado) e redes locais. Um destaque é o programa público "Contagem Ativa", que reúne milhares de alunos em cerca de 70 núcleos com funcional, caminhada, dança e pilates — sinal de uma cultura ativa de exercício comunitário que convive com a musculação tradicional.',

  bairrosNobres: ['Eldorado', 'Cidade Jardim', 'Braúnas', 'Jardim Riacho das Pedras'],
  bairrosPopulares: ['Bairro Industrial', 'Jardim Industrial', 'Nacional', 'Bandeirantes'],

  parques: [
    {
      nome: 'Parque Ecológico Prefeito Américo Renê Giannetti',
      descricao:
        'Grande área verde no bairro Braúnas, com espaços para caminhada e lazer em meio à natureza.',
    },
    {
      nome: 'Parque Municipal Gentil Diniz',
      descricao:
        'Com cerca de 24 mil m², oferece áreas de lazer e estrutura para atividades físicas em região central.',
    },
    {
      nome: 'Pista de caminhada da Avenida Firmo de Matos',
      descricao:
        'Pista reformada no canteiro central, ao lado de uma nova ciclovia — opção prática de treino no dia a dia.',
    },
  ],
  ciclovias:
    'Contagem implantou uma ciclovia de cerca de 7 km na Avenida Firmo de Matos, descrita como a maior já planejada na cidade.',

  clima:
    'O clima é tropical de altitude, com verões chuvosos e invernos secos e amenos, semelhante ao da vizinha Belo Horizonte.',
  climaTreino:
    'O inverno (de maio a setembro) e as manhãs são as melhores janelas para o treino ao ar livre; no verão, vale a hidratação reforçada e horários mais frescos.',

  mobilidade:
    'Contagem é bem conectada à capital pela Linha 1 do metrô (estação Eldorado) e por rodovias federais (BR-040, BR-381/Anel Rodoviário e BR-262), o que reforça seu papel logístico e facilita o deslocamento dentro da Grande BH.',

  corridas: [
    {
      nome: 'Maratoninha de Contagem',
      descricao:
        'Prova da prefeitura com percursos de 5 km e 10 km e caminhada de 2 km, com atividades culturais no entorno.',
    },
    {
      nome: 'Provas do programa "Contagem Ativa"',
      descricao:
        'Circuito municipal que vem resgatando as corridas de rua na cidade, com foco em bem-estar e inclusão.',
    },
  ],
  culturaEsportiva:
    'Cidade operária, Contagem tem tradição de esporte comunitário e boa participação popular em corridas de rua. Os programas públicos de atividade física descentralizados por bairro fortalecem a adesão e democratizam o acesso ao treino.',
  academias:
    'A oferta reúne redes como a Smart Fit (concentradas no polo comercial do Eldorado) e academias locais, complementadas pelos núcleos do programa "Contagem Ativa" e pelas áreas de treino dos parques.',

  destaquesFitness: [
    'Redes como a Smart Fit concentradas no Eldorado, principal polo comercial.',
    'Programa público "Contagem Ativa" com cerca de 70 núcleos e milhares de alunos.',
    'Ciclovia de cerca de 7 km na Avenida Firmo de Matos.',
    'Parques (Giannetti, Gentil Diniz) com áreas para caminhada e treino.',
  ],

  precos: {
    avulsaMin: 65,
    avulsaMax: 150,
    mensalMin: 320,
    mensalMax: 880,
    onlineMin: 160,
    onlineMax: 410,
  },

  conclusao:
    'Polo industrial da Grande BH com forte tradição de esporte comunitário, Contagem oferece do treino gratuito nos parques às academias do Eldorado. Um personal trainer ajuda a montar uma rotina que se encaixe no seu dia e potencialize seus resultados, seja no formato presencial, seja online.',

  vizinhas: ['belo-horizonte-mg', 'juiz-de-fora-mg', 'uberlandia-mg'],

  fontes: [
    { nome: 'IBGE Cidades — Contagem', url: 'https://cidades.ibge.gov.br/brasil/mg/contagem/panorama' },
    { nome: 'Prefeitura de Contagem', url: 'https://portal.contagem.mg.gov.br/' },
    { nome: 'Atlas Brasil — IDHM', url: 'https://www.atlasbrasil.org.br/' },
  ],
  atualizadoEm: '2026-07-29',
  capaArte: {
    src: '/capas-cidade/contagem-mg.webp',
    w: 1200,
    h: 675,
    alt:
      'Personal trainer em Contagem (MG) em arte que une treino de força e a paisagem real da cidade — vista aérea com as vias expressas, o casario e o horizonte de prédios da Grande BH ao fundo — Personal por Perto',
    legenda:
      'Treino personalizado em Contagem: um plano feito para o seu corpo e a sua rotina, com acompanhamento profissional na cidade e região.',
  },
};
