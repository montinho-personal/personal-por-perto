import type { Cidade } from '../../lib/types';

export const cidade: Cidade = {
  slug: 'itu-sp',
  nome: 'Itu',
  uf: 'SP',
  estado: 'São Paulo',
  estadoSlug: 'sao-paulo',
  regiao: 'Sudeste',
  gentilico: 'ituano',
  tipo: 'cidade',

  populacao: 168240,
  populacaoAno: 2022,
  idhm: 0.773,
  idhmClasse: 'alto',
  altitudeM: 583,

  resumoEconomico:
    'Estância turística entre as regiões de Sorocaba e Campinas, Itu tem economia diversificada em indústria (com nomes como Coca-Cola FEMSA e Ambev), comércio e turismo histórico. Fundada em 1610 e conhecida como a "Cidade dos Exageros", recebe centenas de milhares de visitantes por ano e tem condomínios de alto padrão.',

  mercado:
    'Cidade grande e turística, com condomínios fechados de alto padrão, tem demanda por personal a domicílio e em condomínio, além de academias locais ativas que organizam eventos próprios de corrida.',

  bairrosNobres: ['Parque do Varvito', 'Terras de São José', 'Jardim Plaza Athénée', 'Portal de Itu'],
  bairrosPopulares: ['Vila Nova', 'Brasil', 'Cidade Nova', 'Itu Novo Centro'],

  parques: [
    {
      nome: 'Parque da Cidade',
      descricao:
        'Tem pista de caminhada, ciclovia e academia ao ar livre, usado para corrida, caminhada e ciclismo.',
    },
    {
      nome: 'Parque Linear',
      descricao:
        'Tem ciclovia iluminada, ligando o Jardim das Rosas à Avenida da Saudade.',
    },
    {
      nome: 'Parque Geológico do Varvito',
      descricao:
        'Área verde turística e de caminhada, com formações geológicas únicas.',
    },
  ],
  ciclovias:
    'Houve revitalização recente, com cerca de 3,2 km substituídos por concreto pigmentado; há ainda ciclovia ligando Itu a Salto e a do Parque Linear.',

  clima:
    'O clima é tropical, quente no verão, em altitude de cerca de 583 m.',
  climaTreino:
    'Os treinos externos no verão rendem mais no início da manhã e no fim de tarde, por causa do calor.',

  mobilidade:
    'Itu é servida pelas rodovias Castello Branco e Convenções, com a proximidade do Porto de Santos favorecendo a logística industrial.',

  corridas: [
    {
      nome: 'Projeto Tietê (corrida e ciclismo)',
      descricao:
        'Evento no Dia do Rio Tietê, com provas de 5 km, 10 km, 21 km e 26 km.',
    },
    {
      nome: 'Apollo Niver Run',
      descricao:
        'Corrida organizada por academia local, ao lado da Caminhada & Corrida Outubro Rosa.',
    },
  ],
  culturaEsportiva:
    'O calendário concentra corridas de rua e ciclismo entre setembro e outubro, com apoio da Secretaria de Esportes e forte valorização do cicloturismo.',
  academias:
    'A oferta reúne academias locais e estúdios, com forte presença de condomínios de alto padrão que abrem nicho para personal em condomínio, e ciclovias revitalizadas.',

  destaquesFitness: [
    'Mercado grande (maior das cidades premium da região em população).',
    'Forte presença de condomínios de alto padrão — nicho de personal em condomínio.',
    'Cicloturismo e ciclovias revitalizadas.',
    'Academias locais organizando eventos próprios de corrida.',
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
    'Estância turística entre Sorocaba e Campinas, Itu une turismo histórico, condomínios de alto padrão e cicloturismo. Um personal trainer encontra aqui forte demanda por atendimento em condomínio, com ciclovias e parques para o treino ao ar livre.',

  vizinhas: ['sorocaba-sp', 'campinas-sp'],

  capaArte: {
    src: '/capas-cidade/itu-sp.webp',
    w: 1200,
    h: 1200,
    alt: 'Personal trainer em Itu (SP) em arte com a igreja matriz, o orelhão gigante e a Praça Padre Miguel, com o treino em primeiro plano — Personal por Perto',
    legenda: 'Treino personalizado em Itu: foco, disciplina e constância na cidade dos exageros, no interior paulista.',
  },
  fontes: [
    { nome: 'IBGE Cidades — Itu', url: 'https://cidades.ibge.gov.br/brasil/sp/itu/panorama' },
    { nome: 'Prefeitura de Itu', url: 'https://www.itu.sp.gov.br/' },
    { nome: 'Atlas Brasil — IDHM', url: 'https://www.atlasbrasil.org.br/' },
  ],
  atualizadoEm: '2026-09-01',
};
