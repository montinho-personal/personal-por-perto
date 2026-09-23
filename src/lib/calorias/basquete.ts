/**
 * O motor da página de calorias do basquete.
 *
 * A DÉCIMA SÉTIMA DO CLUSTER — E A PRIMEIRA EM QUE A MEDIÇÃO PASSA A TABELA
 *
 *     tênis     → a partida medida confirma a tabela, pausa incluída
 *     vôlei     → não conferimos medição; a página usa só a tabela
 *     basquete  → o jogo medido custa MAIS que a linha de jogo da tabela
 *
 * Narazaki e colegas mediram o oxigênio de 12 jogadores (homens e
 * mulheres, 20 anos em média) num jogo-treino de 20 minutos, com árbitro e
 * técnico, conduzido como jogo de verdade: 33,4 mL/kg/min nas mulheres e
 * 36,9 nos homens — 9,5 e 10,5 METs. A linha de jogo do Compêndio é 8,0.
 * A página usa a tabela para quem joga e a medição para quem compete, e
 * diz qual é qual.
 *
 * O QUE ENTRA COMO FAIXA E O QUE FICA FORA
 *
 * "Arremessos" aparece como 4,5 e como 5,0 nas fontes que conseguimos
 * consultar: vira faixa. "Basquete, geral" e "sem jogo, geral" aparecem
 * com três valores diferentes entre 6,0 e 7,5, sem conseguirmos dizer qual
 * linha é qual na edição de 2024: ficam fora.
 */

/* ───────────────────────── Fontes ───────────────────────── */

export interface Fonte {
  rotulo: string;
  rotuloCurto: string;
  url: string;
  resumo: string;
}

export const FONTE_COMPENDIO: Fonte = {
  rotulo:
    'Herrmann SD, Willis EA, Ainsworth BE, et al. 2024 Adult Compendium of Physical Activities. Journal of Sport and Health Science, 2024',
  rotuloCurto: 'Compêndio de Atividades Físicas (2024)',
  url: 'https://pacompendium.com/sports/',
  resumo:
    'mede o jogo de basquete em 8,0 METs (código 15040) e o treino com exercícios de fundamento em 9,3 (15072). Arremessar, sem jogo (15070), aparece como 4,5 e como 5,0 nas fontes que conseguimos consultar.',
};

export const FONTE_NARAZAKI: Fonte = {
  rotulo:
    'Narazaki K, Berg K, Stergiou N, Chen B. Physiological demands of competitive basketball. Scandinavian Journal of Medicine & Science in Sports, 19(3):425-432, 2009',
  rotuloCurto: 'Narazaki et al. (2009)',
  url: 'https://pubmed.ncbi.nlm.nih.gov/18397196/',
  resumo:
    'mediu o consumo de oxigênio de 12 jogadores (20,4 anos em média) num jogo-treino de 20 minutos, com árbitro e técnico: 33,4 mL/kg/min nas mulheres e 36,9 nos homens. Eles passaram 34,1% do tempo de jogo correndo e saltando, 56,8% andando e 9,0% parados.',
};

export const FONTE_HALL: Fonte = {
  rotulo:
    'Hall KD, Sacks G, Chandramohan D, et al. Quantification of the effect of energy imbalance on bodyweight. The Lancet, 2011',
  rotuloCurto: 'Hall et al. (2011)',
  url: 'https://pubmed.ncbi.nlm.nih.gov/21872751/',
  resumo:
    'demonstra que a regra dos 7.700 kcal por quilo superestima a perda ao longo do tempo: o gasto do corpo cai conforme ele emagrece, e a resposta não é linear.',
};

export const FONTES: Fonte[] = [FONTE_COMPENDIO, FONTE_NARAZAKI, FONTE_HALL];

export const KCAL_POR_KG_GORDURA = 7700;

/* ───────────────────────── Limites ───────────────────────── */

export const PESO_MIN = 30;
export const PESO_MAX = 250;
export const PESO_PADRAO = 70;

export const MINUTOS_MIN = 5;
export const MINUTOS_MAX = 300;
export const MINUTOS_PADRAO = 60;

export const KCAL_MIN = 20;
export const KCAL_MAX = 3000;

/* ───────────────────────── O estudo ───────────────────────── */

export const ESTUDO_JOGO = {
  vo2Mulheres: 33.4,
  vo2Homens: 36.9,
  minutos: 20,
  participantes: 12,
  idadeMedia: 20.4,
  pctCorrendo: 34.1,
  pctAndando: 56.8,
  pctParado: 9.0,
} as const;

export const ML_O2_POR_MET = 3.5;

/* ───────────────────────── A tabela ───────────────────────── */

export interface Modalidade {
  id: string;
  nome: string;
  nomeCurto: string;
  /** Como entra numa frase: "1 hora de {naFrase}". */
  naFrase: string;
  /** Faixa de METs. Igual nas pontas quando a fonte dá um valor só. */
  metMin: number;
  metMax: number;
  /** "Compêndio 15040" ou "Narazaki et al. (2009)". */
  fonte: string;
  comoReconhecer: string;
}

/**
 * Quatro linhas, em ordem de gasto. Três do Compêndio 2024; a do jogo
 * competitivo é medição, e as pontas são a média das mulheres e a dos
 * homens do mesmo estudo.
 */
export const MODALIDADES: Modalidade[] = [
  {
    id: 'arremessos',
    nome: 'Arremessos, sem jogo',
    nomeCurto: 'Arremessos',
    naFrase: 'arremessos sem jogo',
    metMin: 4.5,
    metMax: 5.0,
    fonte: 'Compêndio 15070',
    comoReconhecer: 'Treinar arremesso ou bater bola na cesta, sem partida. Aparece como 4,5 e como 5,0 nas fontes — por isso, faixa.',
  },
  {
    id: 'jogo',
    nome: 'Jogo de basquete',
    nomeCurto: 'Jogo',
    naFrase: 'jogo de basquete',
    metMin: 8.0,
    metMax: 8.0,
    fonte: 'Compêndio 15040',
    comoReconhecer: 'Partida de verdade, com placar. A linha de jogo do Compêndio.',
  },
  {
    id: 'treino',
    nome: 'Treino com exercícios de fundamento',
    nomeCurto: 'Treino',
    naFrase: 'treino de basquete com exercícios de fundamento',
    metMin: 9.3,
    metMax: 9.3,
    fonte: 'Compêndio 15072',
    comoReconhecer: 'Exercícios de passe, drible e deslocamento em sequência. Na tabela, custa mais que o jogo.',
  },
  {
    id: 'competitivo',
    nome: 'Jogo competitivo, medido',
    nomeCurto: 'Competitivo',
    naFrase: 'jogo competitivo de basquete',
    metMin: ESTUDO_JOGO.vo2Mulheres / ML_O2_POR_MET,
    metMax: ESTUDO_JOGO.vo2Homens / ML_O2_POR_MET,
    fonte: 'Narazaki et al. (2009)',
    comoReconhecer: 'Jogo valendo, medido em quadra. A ponta de baixo é a média das mulheres; a de cima, a dos homens.',
  },
];

export const modalidade = (id: string): Modalidade => MODALIDADES.find((m) => m.id === id) ?? MODALIDADES[1];

export const temFaixa = (id: string): boolean => modalidade(id).metMin !== modalidade(id).metMax;

/** Valores que circulam e esta página não usa, por não conseguirmos conferir. */
export const SEM_CONFERENCIA = [
  'Basquete geral ou sem jogo (6,0, 6,5 ou 7,5?)',
  'Basquete 3x3',
  'Medição de jogo recreativo',
  'Basquete em cadeira de rodas',
] as const;

/* ───────────────────────── Validação ───────────────────────── */

export const pesoValido = (p: number | null): p is number =>
  p !== null && Number.isFinite(p) && p >= PESO_MIN && p <= PESO_MAX;

export const minutosValidos = (m: number | null): m is number =>
  m !== null && Number.isFinite(m) && m >= MINUTOS_MIN && m <= MINUTOS_MAX;

export const kcalValida = (k: number | null): k is number =>
  k !== null && Number.isFinite(k) && k >= KCAL_MIN && k <= KCAL_MAX;

export function parseNumero(bruto: string): number | null {
  const limpo = bruto.trim().replace(/\s/g, '').replace(',', '.');
  if (!limpo) return null;
  const n = Number(limpo);
  return Number.isFinite(n) ? n : null;
}

/* ───────────────────────── O cálculo ───────────────────────── */

export const kcalPorMinuto = (met: number, pesoKg: number): number => (met * 3.5 * pesoKg) / 200;

export interface Resultado {
  idModalidade: string;
  metMin: number;
  metMax: number;
  /** Minutos em quadra; na meta, a faixa de minutos. */
  minutosMin: number;
  minutosMax: number;
  kcalMin: number;
  kcalMax: number;
  liquidaMin: number;
  liquidaMax: number;
}

/** Modo 1 — minutos em quadra. Com faixa de METs, devolve faixa de gasto. */
export function deTempo(minutos: number, pesoKg: number, idModalidade = 'jogo'): Resultado {
  const m = modalidade(idModalidade);
  const rep = kcalPorMinuto(1, pesoKg) * minutos;
  return {
    idModalidade: m.id,
    metMin: m.metMin,
    metMax: m.metMax,
    minutosMin: minutos,
    minutosMax: minutos,
    kcalMin: kcalPorMinuto(m.metMin, pesoKg) * minutos,
    kcalMax: kcalPorMinuto(m.metMax, pesoKg) * minutos,
    liquidaMin: kcalPorMinuto(m.metMin, pesoKg) * minutos - rep,
    liquidaMax: kcalPorMinuto(m.metMax, pesoKg) * minutos - rep,
  };
}

/**
 * Modo 2 — meta. Com faixa, ela se inverte: o MET MAIOR dá o tempo MENOR.
 * O resultado guarda os minutos em ordem crescente.
 */
export function deKcal(alvoKcal: number, pesoKg: number, idModalidade = 'jogo'): Resultado {
  const m = modalidade(idModalidade);
  const minutosMin = alvoKcal / kcalPorMinuto(m.metMax, pesoKg);
  const minutosMax = alvoKcal / kcalPorMinuto(m.metMin, pesoKg);
  return {
    idModalidade: m.id,
    metMin: m.metMin,
    metMax: m.metMax,
    minutosMin,
    minutosMax,
    kcalMin: alvoKcal,
    kcalMax: alvoKcal,
    liquidaMin: alvoKcal - kcalPorMinuto(1, pesoKg) * minutosMin,
    liquidaMax: alvoKcal - kcalPorMinuto(1, pesoKg) * minutosMax,
  };
}

export const simulacaoUmQuilo = (pesoKg: number, idModalidade = 'jogo'): Resultado =>
  deKcal(KCAL_POR_KG_GORDURA, pesoKg, idModalidade);

/* ───────────────────────── A conferência ───────────────────────── */

/**
 * O jogo medido contra a linha de jogo da tabela. O oxigênio por quilo
 * vira MET direto (÷ 3,5), sem depender do peso de quem foi medido.
 */
export const jogoMedidoContraTabela = (): {
  metMulheres: number;
  metHomens: number;
  metTabela: number;
  acimaMin: number;
  acimaMax: number;
} => {
  const metMulheres = ESTUDO_JOGO.vo2Mulheres / ML_O2_POR_MET;
  const metHomens = ESTUDO_JOGO.vo2Homens / ML_O2_POR_MET;
  const metTabela = modalidade('jogo').metMin;
  return {
    metMulheres,
    metHomens,
    metTabela,
    acimaMin: (metMulheres / metTabela - 1) * 100,
    acimaMax: (metHomens / metTabela - 1) * 100,
  };
};

/* ───────────────────────── Formatação ───────────────────────── */

export function arredondaKcal(k: number): number {
  if (!Number.isFinite(k) || k <= 0) return 0;
  if (k >= 1000) return Math.round(k / 10) * 10;
  return Math.round(k);
}

export const formataKcal = (k: number): string => arredondaKcal(k).toLocaleString('pt-BR');

export function formataTempo(min: number): string {
  if (!Number.isFinite(min) || min <= 0) return '—';
  const m = Math.round(min);
  if (m < 60) return `${m} min`;
  const h = Math.floor(m / 60);
  const r = m % 60;
  if (r === 0) return h === 1 ? '1 hora' : `${h} horas`;
  return `${h}h${String(r).padStart(2, '0')}`;
}

export const formataMet = (m: number): string =>
  m.toLocaleString('pt-BR', { minimumFractionDigits: 1, maximumFractionDigits: 1 });

/** "8,0" ou "9,5 a 10,5". */
export const formataFaixaMet = (r: { metMin: number; metMax: number }): string =>
  formataMet(r.metMin) === formataMet(r.metMax) ? formataMet(r.metMin) : `${formataMet(r.metMin)} a ${formataMet(r.metMax)}`;

/** "≈ 588" ou "≈ 701 a 775". Arredonda cada ponta antes de comparar. */
export const formataFaixaKcal = (min: number, max: number): string =>
  arredondaKcal(min) === arredondaKcal(max) ? formataKcal(min) : `${formataKcal(min)} a ${formataKcal(max)}`;

/** "54 min", "41 a 54 min", "1h08 a 1h31": a unidade não se repete abaixo de uma hora. */
export function formataFaixaTempo(min: number, max: number): string {
  if (Math.round(min) === Math.round(max)) return formataTempo(min);
  if (Math.round(max) < 60) return `${Math.round(min)} a ${Math.round(max)} min`;
  return `${formataTempo(min)} a ${formataTempo(max)}`;
}

/* Frases sem verbo concordando com o tempo. */
export function fraseContexto(pesoKg: number, r: Resultado): string {
  const m = modalidade(r.idModalidade);
  const final =
    m.id === 'competitivo'
      ? ': a faixa vai da média das mulheres à dos homens medidos em jogo.'
      : m.id === 'arremessos'
        ? ': a linha aparece com dois valores nas fontes, e a conta mostra os dois.'
        : '.';
  return (
    `Para uma pessoa de ${Math.round(pesoKg)} kg, o gasto estimado de ${formataTempo(r.minutosMin)} de ` +
    `${m.naFrase} é de aproximadamente ${formataFaixaKcal(r.kcalMin, r.kcalMax)} kcal${final}`
  );
}

/* ───────────────────────── Tabelas ───────────────────────── */

export const PESOS_TABELA = [50, 60, 70, 80, 90, 100, 120] as const;

export interface LinhaPeso {
  peso: number;
  jogo: number;
  treino: number;
  competitivoMin: number;
  competitivoMax: number;
}

/** Uma hora em quadra, por peso. */
export const tabelaPorPeso = (): LinhaPeso[] =>
  PESOS_TABELA.map((peso) => {
    const c = deTempo(60, peso, 'competitivo');
    return {
      peso,
      jogo: deTempo(60, peso, 'jogo').kcalMin,
      treino: deTempo(60, peso, 'treino').kcalMin,
      competitivoMin: c.kcalMin,
      competitivoMax: c.kcalMax,
    };
  });

/* ───────────────────────── Textos fixos ───────────────────────── */

export const NOTA_QUADRA =
  'Conte os minutos em quadra, não os do banco. Tempo sentado esperando a vez não é jogo, e contá-lo como jogo inflaria a conta.';

export const NOTA_COMPETITIVO =
  'Esta é a linha medida: 12 jogadores de 20 anos em média, num jogo-treino de 20 minutos com árbitro. A ponta de baixo é a média das mulheres, a de cima, a dos homens. Serve para jogo valendo, entre jogadores treinados; para um jogo de lazer, a linha de jogo da tabela é a referência mais próxima.';

export const NOTA_ARREMESSOS =
  'Arremessos aparecem como faixa porque a linha tem dois valores nas fontes que conseguimos consultar, 4,5 e 5,0 METs. Escolher um seria fingir uma certeza que não temos, então a conta mostra as duas pontas.';

export const NOTA_SEM_CONFERENCIA =
  '"Basquete, geral" e "basquete sem jogo" circulam com três valores diferentes, entre 6,0 e 7,5 METs, e não conseguimos confirmar qual pertence a qual linha na edição de 2024 — ficaram fora. Não conferimos medição de basquete 3x3 nem de jogo recreativo. E o basquete em cadeira de rodas tem compêndio próprio, que esta página não usa.';

export const NOTA_BRUTO =
  'O número é bruto: inclui o que você gastaria parado no mesmo tempo. O acréscimo real ao seu dia é menor, e a ferramenta mostra os dois.';

export const NOTA_ESTIMATIVA =
  'É uma estimativa. No basquete, a variação entre pessoas é grande por um motivo que a tabela não vê: quanto você corre. No jogo medido, os jogadores passaram mais da metade do tempo andando — e quem corre bem mais que isso tende a gastar mais que a conta.';

export const NOTA_SEM_PERDA_LOCALIZADA =
  'Nenhum exercício escolhe de onde o corpo tira gordura. O basquete aumenta o gasto do dia; onde a gordura sai primeiro é decidido por genética e hormônio.';

export const NOTA_SEGURANCA =
  'Basquete é esporte de salto, aterrissagem e mudança brusca de direção. Tornozelo e joelho costumam ser o que mais reclama, principalmente em quem joga só no fim de semana. Quem vai voltar depois de anos parado deve conversar com um médico antes, e dor que persiste é assunto para médico ou fisioterapeuta, não para jogar por cima.';

export const NOTA_NAO_PRESCRICAO =
  'Esta é uma estimativa educativa de gasto energético. Não é avaliação metabólica, não substitui calorimetria indireta, não prescreve treino e não diagnostica nada.';
