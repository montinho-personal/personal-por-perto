import type { Cidade } from '../../lib/types';

export const cidade: Cidade = {
  slug: 'cubatao-sp',
  nome: 'Cubatão',
  uf: 'SP',
  estado: 'São Paulo',
  estadoSlug: 'sao-paulo',
  regiao: 'Sudeste',
  gentilico: 'cubatense',
  tipo: 'cidade',

  populacao: 112476,
  populacaoAno: 2022,
  idhm: 0.737,
  idhmClasse: 'alto',
  altitudeM: 3,

  resumoEconomico:
    'Encravada entre a Serra do Mar e a planície da Baixada Santista, Cubatão é o principal polo industrial do litoral paulista, com forte concentração de indústrias petroquímicas, siderúrgicas e de fertilizantes. A cidade combina esse parque industrial com uma das maiores extensões de Mata Atlântica preservada do estado, no Parque Estadual da Serra do Mar.',

  mercado:
    'A presença de grandes plantas industriais e de um contingente de trabalhadores movimenta a demanda por academias e treino funcional, sobretudo na área central e nos bairros mais adensados. Para quem busca atividade ao ar livre, a serra e as áreas verdes do entorno oferecem trilhas e terrenos com desnível, alternativa às pistas planas das cidades vizinhas da Baixada.',

  bairrosNobres: ['Vila Nova', 'Jardim Casqueiro', 'Vila Light', 'Centro'],
  bairrosPopulares: ['Vila Natal', 'Bolsão 8', 'Vila Esperança', 'Ilha Caraguatá'],

  parques: [
    {
      nome: 'Parque Estadual da Serra do Mar',
      descricao:
        'Maior área de proteção integral de Mata Atlântica do litoral brasileiro, com núcleos administrativos em Cubatão. Reúne trilhas, cachoeiras e roteiros históricos como o Caminho do Mar, ideais para caminhada e treino em terreno com desnível.',
    },
    {
      nome: 'Vale do Quilombo',
      descricao:
        'Área de Mata Atlântica preservada nas encostas da serra, com rios, cachoeiras e trilhas em meio à floresta — um dos cartões-postais naturais de Cubatão e ponto procurado para caminhadas e contato com a natureza.',
    },
    {
      nome: 'Áreas verdes e Mata Atlântica do entorno',
      descricao:
        'A cidade é cercada por encostas de Mata Atlântica e mangues da Baixada Santista, que formam um cenário de serra para atividades ao ar livre e trilhas próximas à área urbana.',
    },
  ],
  ciclovias:
    'A cidade conta com trechos de ciclovia e ciclofaixa em vias urbanas da planície, mais utilizados para deslocamento; o relevo plano da área central facilita o uso da bicicleta no dia a dia.',

  clima:
    'O clima é litorâneo úmido, quente e um dos mais chuvosos do país: a barreira da Serra do Mar faz a umidade do oceano se concentrar sobre a cidade, gerando chuvas intensas e elevada umidade durante boa parte do ano.',
  climaTreino:
    'Por ser muito úmido e chuvoso, o treino ao ar livre pede atenção ao horário e à previsão — o início da manhã costuma ser mais estável. Em dias de chuva forte, comum na região, o treino indoor em academia ganha importância.',

  mobilidade:
    'Cubatão é um nó logístico da Baixada Santista: por ela passam a Via Anchieta e a Rodovia dos Imigrantes (Sistema Anchieta–Imigrantes), que ligam o litoral à capital e ao ABC, além de rodovias que conectam Santos e São Vicente. O intenso fluxo industrial e de caminhões marca o trânsito local.',

  corridas: [
    {
      nome: 'Corridas de rua de Cubatão',
      descricao:
        'A cidade promove provas de rua ao longo do ano, com percursos pela área urbana da planície, reunindo corredores locais e da Baixada Santista.',
    },
    {
      nome: 'Eventos esportivos na Serra do Mar',
      descricao:
        'A região da serra recebe atividades de corrida e trilha em meio à Mata Atlântica, aproveitando o relevo e as áreas naturais do entorno.',
    },
  ],
  culturaEsportiva:
    'A cultura esportiva de Cubatão mistura o treino urbano dos trabalhadores do polo industrial com a vocação para atividades na natureza, favorecida pela proximidade da Serra do Mar e da Mata Atlântica. Caminhadas, trilhas e corrida de rua estão entre as práticas mais comuns.',
  academias:
    'A oferta de academias se concentra na área central e nos bairros mais adensados, como o Centro, a Vila Nova e o Jardim Casqueiro, atendendo tanto moradores quanto o público que trabalha no polo industrial.',

  destaquesFitness: [
    'Cercada pelo Parque Estadual da Serra do Mar, com trilhas e desnível.',
    'Vale do Quilombo e Mata Atlântica preservada para atividades na natureza.',
    'Relevo plano na área urbana, bom para corrida e bicicleta no dia a dia.',
    'Polo industrial da Baixada Santista, com demanda por academias e treino funcional.',
  ],

  precos: {
    avulsaMin: 55,
    avulsaMax: 125,
    mensalMin: 270,
    mensalMax: 760,
    onlineMin: 130,
    onlineMax: 380,
  },

  conclusao:
    'Entre o polo industrial da planície e a Mata Atlântica da Serra do Mar, Cubatão oferece cenários bem diferentes para quem quer se exercitar — das pistas planas da área urbana às trilhas da serra. Um personal trainer ajuda a montar um plano que aproveite essas opções e lide com o clima úmido e chuvoso da cidade, ajustado ao seu objetivo.',

  vizinhas: ['santos-sp', 'sao-vicente-sp', 'praia-grande-sp'],

  fontes: [
    { nome: 'IBGE Cidades — Cubatão', url: 'https://cidades.ibge.gov.br/brasil/sp/cubatao/panorama' },
    { nome: 'Prefeitura de Cubatão', url: 'https://www.cubatao.sp.gov.br/' },
    { nome: 'Atlas Brasil — IDHM', url: 'https://www.atlasbrasil.org.br/' },
  ],
  atualizadoEm: '2026-06-29',
};
