import type { Cidade } from '../../lib/types';

export const cidade: Cidade = {
  slug: 'coronel-fabriciano-mg',
  nome: 'Coronel Fabriciano',
  uf: 'MG',
  estado: 'Minas Gerais',
  estadoSlug: 'minas-gerais',
  regiao: 'Sudeste',
  gentilico: 'fabricianense',
  tipo: 'cidade',

  populacao: 104736,
  populacaoAno: 2022,
  idhm: 0.755,
  idhmClasse: 'alto',
  altitudeM: 250,

  resumoEconomico:
    'No coração do Vale do Aço, no leste de Minas, Coronel Fabriciano é conurbada a Ipatinga e Timóteo, formando a Região Metropolitana do Vale do Aço. A economia é voltada a comércio e serviços, fortemente influenciada pela siderurgia regional (com a Usiminas e a Aperam a poucos quilômetros).',

  mercado:
    'O mercado é aquecido pela densidade urbana da conurbação do Vale do Aço (mais de meio milhão de habitantes somando as cidades vizinhas), com público de trabalhadores da indústria e dos serviços e demanda concentrada em academias de bairro.',

  bairrosNobres: ['Centro', 'Giovannini', 'Amaro Lanari', 'Bom Jesus'],
  bairrosPopulares: ['Caladinho', 'Morada do Vale', 'Santa Cruz', 'Melo Viana'],

  parques: [
    {
      nome: 'Praça Louis Ensch',
      descricao:
        'Praça arborizada central, espaço aberto para caminhada e atividade leve.',
    },
    {
      nome: 'Praça do Caladinho de Cima',
      descricao:
        'Tem academia ao ar livre, playground e área multiuso.',
    },
    {
      nome: 'Praça do bairro Frederico Ozanan',
      descricao:
        'Tem academia ao ar livre instalada pela prefeitura.',
    },
  ],
  ciclovias:
    'A malha cicloviária é limitada pelo relevo acidentado; há trechos na Avenida Tancredo Neves (até a divisa com Ipatinga) e em outra via.',

  clima:
    'O clima é tropical quente, com média anual em torno de 21,6 °C e vegetação de Mata Atlântica.',
  climaTreino:
    'O calor e a umidade altos no verão recomendam treino ao ar livre nos períodos mais frescos, com hidratação reforçada.',

  mobilidade:
    'Coronel Fabriciano é servida pela BR-381 (ligação a Belo Horizonte e Governador Valadares), com forte integração viária com Ipatinga e Timóteo.',

  corridas: [
    {
      nome: 'Corrida Viva Fabri',
      descricao:
        'Corrida de aniversário da cidade, com percurso que liga a Praça da Estação ao Santuário Nossa Senhora da Piedade.',
    },
    {
      nome: 'Corrida TudoBom',
      descricao:
        'Prova de 5 km com largada na Praça da Estação, no centro.',
    },
  ],
  culturaEsportiva:
    'A cidade tem calendário esportivo municipal amplo, com corridas de rua e eventos comunitários organizados pela prefeitura, e cultura de esporte de massa ligada às datas cívicas.',
  academias:
    'A oferta reúne academias de bairro, com público amplo da conurbação do Vale do Aço, complementada por praças com academia ao ar livre em expansão.',

  destaquesFitness: [
    'Público amplo via conurbação do Vale do Aço (mercado regional integrado).',
    'Praças com academia ao ar livre em expansão pela prefeitura.',
    'Calendário de corridas de rua consolidado (Viva Fabri, TudoBom).',
    'Relevo acidentado que favorece treinos de subida e desnível.',
  ],

  precos: {
    avulsaMin: 60,
    avulsaMax: 145,
    mensalMin: 300,
    mensalMax: 820,
    onlineMin: 160,
    onlineMax: 410,
  },

  conclusao:
    'No coração do Vale do Aço e colada a Ipatinga, Coronel Fabriciano tem mercado regional integrado e calendário de corridas ativo. Um personal trainer ajuda a aproveitar as praças e o relevo de subidas com método, ajustando horários e hidratação ao calor do vale.',

  vizinhas: ['ipatinga-mg', 'governador-valadares-mg'],

  fontes: [
    { nome: 'IBGE Cidades — Coronel Fabriciano', url: 'https://cidades.ibge.gov.br/brasil/mg/coronel-fabriciano/panorama' },
    { nome: 'Prefeitura de Coronel Fabriciano', url: 'https://www.fabriciano.mg.gov.br/' },
    { nome: 'Atlas Brasil — IDHM', url: 'https://www.atlasbrasil.org.br/' },
  ],
  atualizadoEm: '2026-06-29',
};
