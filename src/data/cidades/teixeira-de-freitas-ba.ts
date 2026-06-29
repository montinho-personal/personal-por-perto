import type { Cidade } from '../../lib/types';

export const cidade: Cidade = {
  slug: 'teixeira-de-freitas-ba',
  nome: 'Teixeira de Freitas',
  uf: 'BA',
  estado: 'Bahia',
  estadoSlug: 'bahia',
  regiao: 'Nordeste',
  gentilico: 'teixeirense',
  tipo: 'cidade',

  populacao: 145223,
  populacaoAno: 2022,
  idhm: 0.690,
  idhmClasse: 'médio',
  altitudeM: 107,

  resumoEconomico:
    'Principal polo regional do extremo sul da Bahia, Teixeira de Freitas tem economia diversificada liderada por serviços e comércio (saúde, educação e varejo). A silvicultura de eucalipto para papel e celulose, a pecuária e a extração de madeira completam o quadro, e a presença de universidades (com a UFSB e cursos como Medicina) atrai estudantes da BA, do ES e de MG.',

  mercado:
    'Cidade-polo com rede de academias atuante e mercado em expansão, acompanhando o crescimento populacional e o perfil de cidade universitária.',

  bairrosNobres: ['Bela Vista', 'Jardim Caraípe', 'Kaikan', 'Colina Verde'],
  bairrosPopulares: ['São Lourenço', 'Vila Caraípe', 'Bonadiman', 'Universitário'],

  parques: [
    {
      nome: 'Avenida das Galáxias',
      descricao:
        'O canteiro central recebeu ciclovia, pista de caminhada e paisagismo, no bairro Bonadiman.',
    },
    {
      nome: 'Avenida Presidente Getúlio Vargas',
      descricao:
        'Via central que serve de percurso para corridas de rua da cidade.',
    },
    {
      nome: 'Praças com academia ao ar livre',
      descricao:
        'Equipamentos públicos de ginástica distribuídos em praças dos bairros.',
    },
  ],
  ciclovias:
    'Há ciclovia em implantação e ampliação pela prefeitura (como na Av. das Galáxias); a extensão total ainda não é divulgada em fonte oficial.',

  clima:
    'O clima é tropical quente e úmido do extremo sul baiano, com calor predominante.',
  climaTreino:
    'O calor recomenda priorizar os treinos no início da manhã ou no fim de tarde, com atenção à hidratação.',

  mobilidade:
    'Teixeira de Freitas é cortada pela BR-101, eixo logístico que a define como entroncamento do extremo sul, com conexões para Eunápolis, Porto Seguro e Mucuri.',

  corridas: [
    {
      nome: 'Corrida Azul',
      descricao:
        'Prova anual ligada ao Novembro Azul, de conscientização sobre a saúde do homem.',
    },
    {
      nome: 'Corrida de Rua Sport Center',
      descricao:
        'Prova organizada por academia local, com largada no bairro Bela Vista.',
    },
  ],
  culturaEsportiva:
    'As corridas de rua promovidas por academias e campanhas de saúde mostram uma cena ativa, e a cidade jovem e universitária favorece o engajamento fitness.',
  academias:
    'A oferta reúne academias que chegam a organizar suas próprias corridas, com mercado em expansão puxado pelo perfil universitário e pelo crescimento populacional.',

  destaquesFitness: [
    'Academias que organizam suas próprias corridas (Sport Center).',
    'Calendário de corridas temáticas de saúde (Azul e Rosa).',
    'Perfil universitário (UFSB, com Medicina), que puxa a demanda por bem-estar.',
    'Clima quente, que exige treino em horários amenos.',
  ],

  precos: {
    avulsaMin: 55,
    avulsaMax: 135,
    mensalMin: 280,
    mensalMax: 760,
    onlineMin: 150,
    onlineMax: 390,
  },

  conclusao:
    'Polo do extremo sul baiano, Teixeira de Freitas tem cidade universitária em crescimento e cena de corrida ativa. Um personal trainer ajuda a aproveitar as avenidas e praças com método, ajustando horários e hidratação ao calor da região.',

  vizinhas: ['porto-seguro-ba', 'vitoria-da-conquista-ba'],

  fontes: [
    { nome: 'IBGE Cidades — Teixeira de Freitas', url: 'https://cidades.ibge.gov.br/brasil/ba/teixeira-de-freitas/panorama' },
    { nome: 'Prefeitura de Teixeira de Freitas', url: 'https://www.teixeiradefreitas.ba.gov.br/' },
    { nome: 'Atlas Brasil — IDHM', url: 'https://www.atlasbrasil.org.br/' },
  ],
  atualizadoEm: '2026-06-29',
};
