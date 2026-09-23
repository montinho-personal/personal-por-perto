/**
 * O motor da página de calorias do crossfit.
 *
 * A DÉCIMA QUINTA DO CLUSTER — E A PRIMEIRA EM QUE O OXIGÊNIO NÃO VÊ TUDO
 *
 *     hidro     → a aula de verdade, medida, contra a linha da tabela
 *     tênis     → o tempo parado entre pontos, que JÁ está na tabela
 *     vôlei     → onde você joga: ginásio ou areia
 *     crossfit  → o WOD, que é uma fração da aula — e às vezes nem o
 *                 oxigênio consegue medir
 *
 * O Compêndio não tem linha de crossfit. A referência desta página é
 * medida: Kliszczewicz e colegas acompanharam 9 praticantes (7 homens e 2
 * mulheres) no WOD "Cindy" — 20 minutos de barra, flexão e agachamento,
 * no máximo de rodadas — e mediram 33,3 mL de oxigênio por kg por minuto:
 * 9,5 METs, 13 kcal por minuto, 260,6 kcal no WOD.
 *
 * A AULA NÃO É O WOD
 *
 * Uma aula tem aquecimento, técnica e o WOD. Só o WOD roda na intensidade
 * medida. O resto entra como repouso — subestima de propósito, como a
 * instrução na página de dança, porque não conferimos medição dessa parte.
 *
 * O LIMITE DO OXIGÊNIO
 *
 * Rios e colegas mediram o WOD "Isabel" — 30 arrancos, cerca de 2 minutos
 * — em 14 homens muito treinados: a via oxidativa, a que o oxigênio
 * enxerga, respondeu por só 40% da energia. O resto veio de vias sem
 * oxigênio. Qualquer conta baseada em oxigênio ou frequência cardíaca —
 * esta, a do relógio, a do aplicativo — subestima um WOD curto e brutal.
 * A página diz isso, e a calculadora avisa quando o WOD é curto.
 *
 * O QUE NÃO ENTRA
 *
 * A linha de circuito vigoroso do Compêndio (02040) aparece como 7,5 e
 * como 8,0 nas fontes que conseguimos consultar. Sem resolver o conflito,
 * ela fica fora.
 */

/* ───────────────────────── Fontes ───────────────────────── */

export interface Fonte {
  rotulo: string;
  rotuloCurto: string;
  url: string;
  resumo: string;
}

export const FONTE_CINDY: Fonte = {
  rotulo:
    'Kliszczewicz B, Snarr RL, Esco MR. Metabolic and cardiovascular response to the CrossFit workout "Cindy": a pilot study. Journal of Sport and Human Performance, 2(2), 2014',
  rotuloCurto: 'Kliszczewicz et al. (2014)',
  url: 'https://jhp-ojs-tamucc.tdl.org/jhp/article/view/jshp.0038.2014',
  resumo:
    'mediu 9 praticantes (7 homens e 2 mulheres, 27,2 anos em média, com pelo menos 3 meses de crossfit) no WOD "Cindy" — máximo de rodadas de 5 barras, 10 flexões e 15 agachamentos em 20 minutos: consumo de oxigênio de 33,3 mL por kg por minuto (63,8% do máximo), 9,5 METs, 13 kcal por minuto e 260,6 kcal no WOD, com frequência cardíaca média de 170,8.',
};

export const FONTE_ISABEL: Fonte = {
  rotulo:
    'Rios M, Becker KM, Cardoso F, Pyne DB, Reis VM, Moreira-Gonçalves D, Fernandes RJ. Assessment of cardiorespiratory and metabolic contributions in an extreme intensity CrossFit® benchmark workout. Sensors, 24(2):513, 2024',
  rotuloCurto: 'Rios et al. (2024)',
  url: 'https://doi.org/10.3390/s24020513',
  resumo:
    'mediu 14 homens muito treinados (87,9 kg em média) no WOD "Isabel", de 117 segundos em média: gasto total de 245 kJ, dos quais 40% pela via oxidativa, 45% pela glicolítica e 15% pela dos fosfagênios.',
};

export const FONTE_HALL: Fonte = {
  rotulo:
    'Hall KD, Sacks G, Chandramohan D, et al. Quantification of the effect of energy imbalance on bodyweight. The Lancet, 2011',
  rotuloCurto: 'Hall et al. (2011)',
  url: 'https://pubmed.ncbi.nlm.nih.gov/21872751/',
  resumo:
    'demonstra que a regra dos 7.700 kcal por quilo superestima a perda ao longo do tempo: o gasto do corpo cai conforme ele emagrece, e a resposta não é linear.',
};

export const FONTES: Fonte[] = [FONTE_CINDY, FONTE_ISABEL, FONTE_HALL];

export const KCAL_POR_KG_GORDURA = 7700;

/* ───────────────────────── Limites ───────────────────────── */

export const PESO_MIN = 30;
export const PESO_MAX = 250;
export const PESO_PADRAO = 70;

/** Minutos de WOD. */
export const WOD_MIN = 1;
export const WOD_MAX = 90;
export const WOD_PADRAO = 20;

/** Minutos da aula inteira. */
export const AULA_MIN = 10;
export const AULA_MAX = 180;
export const AULA_PADRAO = 60;

/** Abaixo disto, o WOD é curto o bastante para o aviso do oxigênio. */
export const WOD_CURTO = 5;

export const KCAL_MIN = 20;
export const KCAL_MAX = 3000;

/* ───────────────────────── Os estudos ───────────────────────── */

export const ESTUDO_CINDY = {
  vo2: 33.3,
  met: 9.5,
  kcalPorMinuto: 13,
  kcalTotal: 260.6,
  minutos: 20,
  participantes: 9,
  homens: 7,
  mulheres: 2,
  idadeMedia: 27.2,
  pctVo2max: 63.8,
  fcMedia: 170.8,
} as const;

export const ESTUDO_ISABEL = {
  kJ: 245,
  segundos: 117,
  participantes: 14,
  pesoMedio: 87.9,
  pctOxidativa: 40,
  pctGlicolitica: 45,
  pctFosfagenios: 15,
} as const;

export const ML_O2_POR_MET = 3.5;
export const KCAL_POR_KJ = 1 / 4.184;

/** O MET que a calculadora usa: o do Cindy, medido. */
export const MET_WOD = ESTUDO_CINDY.met;

/** O que circula e esta página não usa, por não conseguirmos conferir. */
export const SEM_CONFERENCIA = [
  'Linha de crossfit no Compêndio (não existe)',
  'Circuito vigoroso do Compêndio (7,5 ou 8,0?)',
  'Medição de uma aula inteira de crossfit',
] as const;

/* ───────────────────────── Validação ───────────────────────── */

export const pesoValido = (p: number | null): p is number =>
  p !== null && Number.isFinite(p) && p >= PESO_MIN && p <= PESO_MAX;

export const wodValido = (m: number | null): m is number =>
  m !== null && Number.isFinite(m) && m >= WOD_MIN && m <= WOD_MAX;

export const aulaValida = (m: number | null): m is number =>
  m !== null && Number.isFinite(m) && m >= AULA_MIN && m <= AULA_MAX;

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

export type Cenario = 'aula' | 'wod';

export interface Resultado {
  cenario: Cenario;
  minutosWod: number;
  /** Minutos da aula inteira; igual ao WOD fora do cenário de aula. */
  minutosAula: number;
  /** Minutos de aula fora do WOD, contados como repouso. */
  minutosFora: number;
  kcal: number;
  kcalWod: number;
  kcalFora: number;
  kcalLiquida: number;
  /** O WOD é curto o bastante para o oxigênio não ver boa parte do gasto. */
  wodCurto: boolean;
}

function monta(cenario: Cenario, minutosWod: number, minutosAula: number, pesoKg: number): Resultado {
  const minutosFora = Math.max(minutosAula - minutosWod, 0);
  const kcalWod = kcalPorMinuto(MET_WOD, pesoKg) * minutosWod;
  // Aquecimento e técnica entram como repouso: subestima de propósito,
  // porque não conferimos medição dessa parte da aula.
  const kcalFora = kcalPorMinuto(1, pesoKg) * minutosFora;
  const kcal = kcalWod + kcalFora;
  return {
    cenario,
    minutosWod,
    minutosAula: Math.max(minutosAula, minutosWod),
    minutosFora,
    kcal,
    kcalWod,
    kcalFora,
    kcalLiquida: kcal - kcalPorMinuto(1, pesoKg) * Math.max(minutosAula, minutosWod),
    wodCurto: minutosWod < WOD_CURTO,
  };
}

/** Modo 1 — a aula inteira, com os minutos de WOD dentro dela. */
export const deAula = (minutosAula: number, minutosWod: number, pesoKg: number): Resultado =>
  monta('aula', Math.min(minutosWod, minutosAula), minutosAula, pesoKg);

/** Modo 2 — só o WOD. */
export const deWod = (minutosWod: number, pesoKg: number): Resultado => monta('wod', minutosWod, minutosWod, pesoKg);

/** Modo 3 — meta de calorias. Devolve minutos de WOD na intensidade medida. */
export function deKcal(alvoKcal: number, pesoKg: number): Resultado {
  const minutos = alvoKcal / kcalPorMinuto(MET_WOD, pesoKg);
  return { ...deWod(minutos, pesoKg), kcal: alvoKcal };
}

export const simulacaoUmQuilo = (pesoKg: number): Resultado => deKcal(KCAL_POR_KG_GORDURA, pesoKg);

/* ───────────────────────── As conferências ───────────────────────── */

/**
 * O Cindy por dentro. O estudo publica o oxigênio, o MET, as kcal por
 * minuto e o total; os quatro têm que conversar. O MET sai do oxigênio
 * (÷ 3,5), o total sai das kcal por minuto (× 20), e o peso que o próprio
 * estudo implica sai da equação de METs.
 */
export const reproduzCindy = (): { metDoOxigenio: number; totalDoPorMinuto: number; pesoImplicito: number } => {
  const e = ESTUDO_CINDY;
  return {
    metDoOxigenio: e.vo2 / ML_O2_POR_MET,
    totalDoPorMinuto: e.kcalPorMinuto * e.minutos,
    pesoImplicito: (e.kcalPorMinuto * 200) / (e.met * 3.5),
  };
};

/**
 * O Isabel contra esta calculadora. O gasto total medido, por minuto,
 * contra o que o MET do Cindy — o da calculadora — daria para o mesmo
 * peso. (A fração oxidativa, 40%, é outra medida do mesmo estudo.)
 */
export const isabelContraOxigenio = (): { kcalTotal: number; kcalPorMinutoMedido: number; kcalPorMinutoPelaConta: number; razao: number } => {
  const e = ESTUDO_ISABEL;
  const kcalTotal = e.kJ * KCAL_POR_KJ;
  const minutos = e.segundos / 60;
  const kcalPorMinutoMedido = kcalTotal / minutos;
  const kcalPorMinutoPelaConta = kcalPorMinuto(MET_WOD, e.pesoMedio);
  return { kcalTotal, kcalPorMinutoMedido, kcalPorMinutoPelaConta, razao: kcalPorMinutoMedido / kcalPorMinutoPelaConta };
};

/** Minutos de WOD, na intensidade do Cindy, que uma promessa de kcal exige. */
export const minutosDeWodPara = (kcal: number, pesoKg: number): number => kcal / kcalPorMinuto(MET_WOD, pesoKg);

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

/* Frases sem verbo concordando com o tempo. */
export function fraseContexto(pesoKg: number, r: Resultado): string {
  if (r.cenario === 'aula' && r.minutosFora > 0) {
    return (
      `Para ${Math.round(pesoKg)} kg, uma aula de ${formataTempo(r.minutosAula)} com ` +
      `${formataTempo(r.minutosWod)} de WOD: aproximadamente ${formataKcal(r.kcal)} kcal. ` +
      `O WOD responde por ${formataKcal(r.kcalWod)} delas; o resto da aula entra como repouso.`
    );
  }
  return (
    `Para uma pessoa de ${Math.round(pesoKg)} kg, o gasto estimado de ${formataTempo(r.minutosWod)} de WOD ` +
    `na intensidade medida no Cindy é de aproximadamente ${formataKcal(r.kcal)} kcal.`
  );
}

/* ───────────────────────── Tabelas ───────────────────────── */

export const PESOS_TABELA = [50, 60, 70, 80, 90, 100, 120] as const;

export interface LinhaWod {
  minutos: number;
  kcal: number;
}

/** WODs de 10, 15, 20 e 30 minutos, para um peso. */
export const tabelaWods = (pesoKg: number): LinhaWod[] =>
  [10, 15, 20, 30].map((minutos) => ({ minutos, kcal: deWod(minutos, pesoKg).kcal }));

export interface LinhaPeso {
  peso: number;
  wod20: number;
  aula60: number;
}

/** WOD de 20 minutos e aula de 60 com esse WOD, por peso. */
export const tabelaPorPeso = (): LinhaPeso[] =>
  PESOS_TABELA.map((peso) => ({ peso, wod20: deWod(20, peso).kcal, aula60: deAula(60, 20, peso).kcal }));

/* ───────────────────────── Textos fixos ───────────────────────── */

export const NOTA_AULA =
  'Só o WOD roda na intensidade medida. Aquecimento e técnica entram como repouso — uma escolha conservadora: você está se movendo e gasta mais que parado. Mas não conseguimos conferir medição dessa parte da aula, e contar por cima seria pior que contar por baixo.';

export const NOTA_WOD_CURTO =
  'WOD curto e explosivo: a conta subestima. Num WOD de cerca de 2 minutos medido em estudo, só 40% da energia veio da via que o oxigênio enxerga — o resto veio de vias sem oxigênio. Esta conta, a do relógio e a do aplicativo usam o oxigênio ou a frequência cardíaca, e nenhuma delas vê essa parte.';

export const NOTA_REFERENCIA =
  'A intensidade é a do Cindy, um WOD de 20 minutos medido em 9 praticantes: 9,5 METs. É uma referência de WOD longo e contínuo, com o peso do próprio corpo. Não conferimos medição de WODs com carga pesada ou pausas longas, então a conta não sabe dizer se eles ficam acima ou abaixo dela.';

export const NOTA_BRUTO =
  'O número é bruto: inclui o que você gastaria parado no mesmo tempo. O acréscimo real ao seu dia é menor, e a ferramenta mostra os dois.';

export const NOTA_ESTIMATIVA =
  'É uma estimativa. No crossfit a variação é maior que em quase qualquer outra atividade do nosso conjunto, porque o treino muda todo dia: movimento, carga, duração e pausa. A conta usa um WOD medido como régua; o seu WOD de hoje pode estar acima ou abaixo dela.';

export const NOTA_SEM_PERDA_LOCALIZADA =
  'Nenhum exercício escolhe de onde o corpo tira gordura. O crossfit aumenta o gasto do dia; onde a gordura sai primeiro é decidido por genética e hormônio.';

export const NOTA_SEGURANCA =
  'Crossfit mistura movimento olímpico, ginástica e condicionamento em alta intensidade, muitas vezes com cronômetro correndo. Técnica que se desfaz com a fadiga é o que pede mais atenção, principalmente em quem está começando. Quem vai começar depois de anos parado deve conversar com um médico antes, e dor que persiste é assunto para médico ou fisioterapeuta, não para treinar por cima.';

export const NOTA_NAO_PRESCRICAO =
  'Esta é uma estimativa educativa de gasto energético. Não é avaliação metabólica, não substitui calorimetria indireta, não prescreve treino e não diagnostica nada.';
