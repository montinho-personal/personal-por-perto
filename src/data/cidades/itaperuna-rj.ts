import type { Cidade } from '../../lib/types';

export const cidade: Cidade = {
  slug: 'itaperuna-rj',
  nome: 'Itaperuna',
  uf: 'RJ',
  estado: 'Rio de Janeiro',
  estadoSlug: 'rio-de-janeiro',
  regiao: 'Sudeste',
  gentilico: 'itaperunense',
  tipo: 'cidade',

  populacao: 101041,
  populacaoAno: 2022,
  idhm: 0.730,
  idhmClasse: 'alto',
  altitudeM: 108,

  resumoEconomico:
    'Principal cidade do Noroeste Fluminense, Itaperuna se firmou como polo regional de comércio, saúde e educação, atraindo moradores de dezenas de municípios vizinhos do interior do Rio, de Minas Gerais e do Espírito Santo. A economia combina forte setor de comércio e serviços, tradicional pecuária leiteira e agronegócio, e um expressivo polo de saúde ancorado no Hospital São José do Avaí, referência em alta complexidade. A cidade fica às margens do rio Muriaé.',

  mercado:
    'Como polo regional do Noroeste Fluminense, Itaperuna concentra uma rede de academias e estúdios maior do que sugere seu porte, somada ao atendimento domiciliar. A função de centro de saúde, comércio e ensino superior amplia o público que circula e treina na cidade, incluindo estudantes e profissionais de toda a microrregião.',

  bairrosNobres: ['Cidade Nova', 'Centro', 'Aeroporto', 'Presidente Costa e Silva'],
  bairrosPopulares: ['Niterói', 'Vinhosa', 'São Mateus', 'Horto Florestal'],

  parques: [
    {
      nome: 'Margens do rio Muriaé',
      descricao:
        'Faixa urbana à beira do rio que corta a cidade, usada para caminhada e corrida no eixo central de Itaperuna.',
    },
    {
      nome: 'Praça Nilo Peçanha',
      descricao:
        'Praça central em frente à Matriz São José do Avaí, ponto de encontro e largada de eventos esportivos de rua.',
    },
  ],
  ciclovias:
    'A cidade tem topografia de relevo suave de planalto interiorano; a extensão oficial de ciclovias não é divulgada em fonte pública consolidada.',

  clima:
    'O clima é tropical quente, típico do interior do Noroeste Fluminense, com verões muito quentes e período seco no inverno.',
  climaTreino:
    'O calor da região pede treino ao ar livre nos horários mais amenos, no início da manhã ou no fim da tarde, com atenção constante à hidratação.',

  mobilidade:
    'Itaperuna é cortada pela BR-356, eixo que liga o Noroeste Fluminense ao Norte do estado e a Minas Gerais, consolidando a cidade como entroncamento e polo de serviços regional. Conta ainda com o Aeroporto Ernani do Amaral Peixoto.',

  corridas: [
    {
      nome: 'Levin Run',
      descricao:
        'Corrida de rua local com percurso de 5 km e largada na Praça Nilo Peçanha, em frente à Matriz São José do Avaí.',
    },
    {
      nome: 'Corrida Fire Run',
      descricao:
        'Prova de rua realizada no bairro Cidade Nova, parte do calendário esportivo da cidade.',
    },
  ],
  culturaEsportiva:
    'Itaperuna combina tradição futebolística do interior com um calendário ativo de corridas de rua que reúne praticantes de toda a microrregião do Noroeste Fluminense.',
  academias:
    'A oferta de academias e estúdios é robusta para o porte da cidade, concentrada no Centro e na Cidade Nova, complementada pelo atendimento domiciliar e pelas margens do rio Muriaé para treino ao ar livre.',

  destaquesFitness: [
    'Polo regional do Noroeste Fluminense, com público de toda a microrregião.',
    'Centro universitário e de saúde que amplia o público jovem e fitness.',
    'Calendário de corridas de rua com largadas no Centro.',
    'Margens do rio Muriaé para caminhada e corrida.',
  ],

  precos: {
    avulsaMin: 55,
    avulsaMax: 120,
    mensalMin: 270,
    mensalMax: 720,
    onlineMin: 120,
    onlineMax: 360,
  },

  conclusao:
    'Polo regional do Noroeste Fluminense, Itaperuna reúne mercado fitness sólido para seu porte e calendário ativo de corrida. Um personal trainer ajuda a montar uma rotina que respeite o calor da região e a aproveitar as margens do rio Muriaé e as academias do Centro com método.',

  vizinhas: ['campos-dos-goytacazes-rj', 'macae-rj'],

  fontes: [
    { nome: 'IBGE Cidades — Itaperuna', url: 'https://cidades.ibge.gov.br/brasil/rj/itaperuna/panorama' },
    { nome: 'Prefeitura de Itaperuna', url: 'https://www.itaperuna.rj.gov.br/' },
    { nome: 'Atlas Brasil — IDHM', url: 'https://www.atlasbrasil.org.br/' },
  ],
  atualizadoEm: '2026-06-29',
};
