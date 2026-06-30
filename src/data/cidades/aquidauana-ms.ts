import type { Cidade } from '../../lib/types';

export const cidade: Cidade = {
  slug: 'aquidauana-ms',
  nome: 'Aquidauana',
  uf: 'MS',
  estado: 'Mato Grosso do Sul',
  estadoSlug: 'mato-grosso-do-sul',
  regiao: 'Centro-Oeste',
  gentilico: 'aquidauanense',
  tipo: 'cidade',

  populacao: 46803,
  populacaoAno: 2022,
  idhm: 0.69,
  idhmClasse: 'médio',
  altitudeM: 147,

  resumoEconomico:
    'Conhecida como o "Portal do Pantanal" sul-mato-grossense, Aquidauana é uma cidade média do oeste de Mato Grosso do Sul, a cerca de 139 km de Campo Grande. A economia se apoia na pecuária de corte, no comércio regional, no funcionalismo público e no turismo ligado ao Pantanal e às serras vizinhas. A presença das universidades públicas — campi da UFMS e da UEMS — sustenta um público jovem e uma vida acadêmica relevante para a cidade.',

  mercado:
    'O mercado fitness é típico de cidade média do interior sul-mato-grossense: academias locais de musculação e treino funcional, estúdios de personal e o atendimento individualizado como diferencial. O personal trainer encontra demanda em um público que combina universitários, servidores e moradores ligados ao ambiente rural e ao turismo de aventura.',

  bairrosNobres: ['Centro', 'Alto', 'Nova Aquidauana', 'Cidade Nova'],
  bairrosPopulares: ['Guanandy', 'Santa Terezinha', 'Bairro Serraria', 'Vila Pinheiro'],

  parques: [
    {
      nome: 'Orla do Rio Aquidauana',
      descricao:
        'Margem do rio que dá nome à cidade, com balneários, áreas de banho e píeres — espaço tradicional de lazer e ponto de partida para a famosa Festa do Peixe.',
    },
    {
      nome: 'Serra de Maracaju e Morraria de Piraputanga',
      descricao:
        'Formação de relevo que cerca a cidade, com trilhas, cachoeiras, mirantes e cavernas com inscrições rupestres, muito procurada por quem treina trilha e turismo de aventura.',
    },
    {
      nome: 'Pantanal de Aquidauana',
      descricao:
        'A cidade é uma das portas de entrada do Pantanal sul-mato-grossense, com fazendas, rios e planícies que oferecem caminhadas, cavalgadas e passeios em meio à natureza.',
    },
  ],
  ciclovias:
    'A estrutura cicloviária é pontual, concentrada em trechos da área central e da orla do rio; o ciclismo de estrada e o cicloturismo encontram espaço nas vias de menor movimento e nos caminhos rurais rumo às serras e ao Pantanal.',

  clima:
    'O clima é tropical quente, característico do Pantanal sul-mato-grossense, com verões muito quentes e úmidos e inverno seco; as temperaturas máximas com frequência ultrapassam os 35 °C, e a baixa altitude (cerca de 147 m) reforça a sensação de calor.',
  climaTreino:
    'O treino ao ar livre rende mais bem cedo ou no fim da tarde, com hidratação reforçada — no calor intenso do meio do dia e no período seco, a atividade exige cautela e proteção solar.',

  mobilidade:
    'Aquidauana é cortada pela BR-262, principal eixo rodoviário que liga Campo Grande a Corumbá e à Bolívia, e forma conurbação com a vizinha Anastácio, do outro lado do rio Aquidauana. A cidade tem forte ligação histórica com a ferrovia Noroeste do Brasil (o Trem do Pantanal), que impulsionou seu crescimento.',

  corridas: [
    {
      nome: 'Corridas de rua de Aquidauana',
      descricao:
        'A cidade recebe provas de corrida de rua promovidas pelo poder público e por grupos locais, com percursos pela área central e pela orla do rio.',
    },
    {
      nome: 'Desafios de trilha na Serra de Maracaju',
      descricao:
        'O relevo das serras e morrarias ao redor favorece eventos e treinos de trilha e corrida em terreno acidentado, aproveitando o cenário natural da região.',
    },
  ],
  culturaEsportiva:
    'A cultura esportiva mistura a tradição pantaneira — cavalgadas, esportes ligados à lida no campo e provas de laço — com o crescimento de corrida de rua, musculação e treino funcional, impulsionado pelo público universitário dos campi da UFMS e da UEMS.',
  academias:
    'A oferta é formada por academias locais de musculação e estúdios de treino funcional e personal, com foco no atendimento próximo e individualizado típico de cidade do interior.',

  destaquesFitness: [
    'Portal do Pantanal sul-mato-grossense, com Pantanal, rios e serras para atividades ao ar livre.',
    'Serra de Maracaju e Morraria de Piraputanga, com trilhas, cachoeiras e mirantes para treino na natureza.',
    'Orla do rio Aquidauana e balneários como espaço tradicional de lazer e atividade física.',
    'Público jovem ligado aos campi da UFMS e da UEMS, que sustenta a demanda por treino.',
  ],

  precos: {
    avulsaMin: 50,
    avulsaMax: 115,
    mensalMin: 250,
    mensalMax: 700,
    onlineMin: 115,
    onlineMax: 350,
  },

  conclusao:
    'Portal do Pantanal, cercada por serras e banhada pelo rio Aquidauana, a cidade oferece um cenário natural privilegiado para treinar ao ar livre. Um personal trainer ajuda a estruturar a rotina com método, respeitando o calor pantaneiro e aproveitando trilhas, orla e academias locais.',

  vizinhas: ['campo-grande-ms', 'corumba-ms'],

  fontes: [
    { nome: 'IBGE Cidades — Aquidauana', url: 'https://cidades.ibge.gov.br/brasil/ms/aquidauana/panorama' },
    { nome: 'Prefeitura de Aquidauana', url: 'https://aquidauana.ms.gov.br/' },
    { nome: 'Atlas Brasil — IDHM', url: 'https://www.atlasbrasil.org.br/' },
  ],
  atualizadoEm: '2026-06-29',
};
