/**
 * O motor da calculadora de 1RM.
 *
 * O QUE ELA RESPONDE
 *
 * 1RM é a maior carga que você levanta uma vez, com técnica. Testar isso
 * de verdade pede aquecimento longo, alguém do lado e experiência — e é
 * exatamente o que quem está começando não deve fazer sozinho. As fórmulas
 * existem para estimar o 1RM a partir de uma série que você já faz: a carga
 * e quantas repetições saíram até não sair mais nenhuma com boa técnica.
 *
 * Com o 1RM estimado, o caminho inverso: que carga usar para 5, 8, 10 ou
 * 12 repetições — a pergunta que o treino faz toda semana.
 *
 * SETE FÓRMULAS, E O RESULTADO É FAIXA
 *
 * Não existe "a" fórmula. As sete mais usadas — Epley, Brzycki, Lander,
 * Lombardi, Mayhew, O'Conner e Wathan — foram comparadas contra o teste
 * real por LeSuer e colegas (1997): todas acompanham o 1RM de perto (r >
 * 0,95), mas cada uma erra para um lado, e nenhuma acerta o levantamento
 * terra, que todas subestimam. Por isso a calculadora mostra a faixa das
 * sete e o valor do meio, e não escolhe uma.
 *
 * ONDE ELA ERRA MAIS
 *
 * - Muitas repetições. A previsão é melhor com séries curtas: Reynolds e
 *   colegas (2006) acharam a maior precisão a partir de 5RM, piorando com
 *   10 e com 20. Acima de 10 repetições a página avisa.
 * - Leg press. Uma meta-análise com 269 estudos (Nuzzo e colegas, 2024)
 *   achou mais repetições no leg press do que no supino na mesma
 *   porcentagem do 1RM. Como as fórmulas foram feitas com supino e
 *   agachamento, no leg press elas tendem a superestimar.
 * - Levantamento terra: o contrário, subestimam (LeSuer, 1997).
 *
 * Sexo, idade e nível de treino, na mesma meta-análise, mexeram pouco na
 * relação entre repetições e porcentagem — a calculadora não pede nenhum
 * dos três.
 */

/* ───────────────────────── Fontes ───────────────────────── */

export interface Fonte {
  rotulo: string;
  url: string;
  resumo: string;
}

export const FONTE_LESUER: Fonte = {
  rotulo:
    'LeSuer DA, McCormick JH, Mayhew JL, Wasserstein RL, Arnold MD. The accuracy of prediction equations for estimating 1-RM performance in the bench press, squat, and deadlift. Journal of Strength and Conditioning Research, 11(4):211-213, 1997',
  url: 'https://journals.lww.com/nsca-jscr/abstract/1997/11000/the_accuracy_of_prediction_equations_for.1.aspx',
  resumo:
    'comparou as sete fórmulas com o 1RM medido em 67 universitários sem experiência de treino. Todas acompanharam o valor real de perto (r > 0,95), mas a diferença média para o valor medido foi significativa em quase todas — só duas acertaram na média no supino e uma no agachamento — e todas subestimaram o levantamento terra.',
};

export const FONTE_BRZYCKI: Fonte = {
  rotulo:
    'Brzycki M. Strength testing — predicting a one-rep max from reps-to-fatigue. Journal of Physical Education, Recreation & Dance, 64(1):88-90, 1993',
  url: 'https://www.tandfonline.com/doi/abs/10.1080/07303084.1993.10606684',
  resumo: 'publicou a fórmula 1RM = carga × 36 ÷ (37 − repetições).',
};

export const FONTE_MAYHEW: Fonte = {
  rotulo:
    'Mayhew JL, Ball TE, Arnold MD, Bowen JC. Relative muscular endurance performance as a predictor of bench press strength in college men and women. Journal of Applied Sport Science Research, 1992',
  url: 'https://journals.lww.com/nsca-jscr/abstract/1992/11000/relative_muscular_endurance_performance_as_a.2.aspx',
  resumo:
    'mediu o supino de 435 universitários depois de 14 semanas de treino e derivou % do 1RM = 52,2 + 41,9 × e^(−0,055 × repetições). O erro-padrão da estimativa ficou perto de 5 kg, também no grupo de validação.',
};

export const FONTE_REYNOLDS: Fonte = {
  rotulo:
    'Reynolds JM, Gordon TJ, Robergs RA. Prediction of one repetition maximum strength from multiple repetition maximum testing and anthropometry. Journal of Strength and Conditioning Research, 20(3):584-592, 2006',
  url: 'https://pubmed.ncbi.nlm.nih.gov/16937972/',
  resumo:
    'comparou previsões a partir de 5, 10 e 20 repetições até a falha, no supino e no leg press: a de 5 repetições foi a mais precisa, e a precisão piorou quanto mais repetições a série tinha.',
};

export const FONTE_NUZZO: Fonte = {
  rotulo:
    'Nuzzo JL, Pinto MD, Nosaka K, Steele J. Maximal number of repetitions at percentages of the one repetition maximum: a meta-regression and moderator analysis of sex, age, training status, and exercise. Sports Medicine, 54:303-321, 2024',
  url: 'https://link.springer.com/article/10.1007/s40279-023-01937-7',
  resumo:
    'reuniu 952 testes de repetições até a falha, de 7.289 pessoas em 269 estudos. O leg press permitiu mais repetições que o supino na mesma porcentagem do 1RM; sexo, idade e nível de treino mexeram pouco na relação.',
};

export const FONTE_SCHOENFELD: Fonte = {
  rotulo:
    'Schoenfeld BJ, Grgic J, Ogborn D, Krieger JW. Strength and hypertrophy adaptations between low- vs. high-load resistance training: a systematic review and meta-analysis. Journal of Strength and Conditioning Research, 31(12):3508-3523, 2017',
  url: 'https://pubmed.ncbi.nlm.nih.gov/28834797/',
  resumo:
    'comparou cargas leves (até 60% do 1RM) e pesadas (acima de 60%), com as séries levadas à falha: a força máxima cresceu mais com carga pesada, e a hipertrofia foi parecida nas duas.',
};

export const FONTE_ZOURDOS: Fonte = {
  rotulo:
    'Zourdos MC, Klemp A, et al. Novel resistance training–specific rating of perceived exertion scale measuring repetitions in reserve. Journal of Strength and Conditioning Research, 30(1):267-275, 2016',
  url: 'https://pubmed.ncbi.nlm.nih.gov/26049792/',
  resumo:
    'propôs a escala de esforço por repetições na reserva (RIR): quantas repetições ainda sairiam antes da falha. Zero na reserva é a falha.',
};

/*
 * Epley fica fora da lista de referências com link: a tabela original é de
 * manual de treino, sem cópia pública conferível. A página a nomeia no texto.
 */
export const FONTES: Fonte[] = [
  FONTE_LESUER,
  FONTE_BRZYCKI,
  FONTE_MAYHEW,
  FONTE_REYNOLDS,
  FONTE_NUZZO,
  FONTE_SCHOENFELD,
  FONTE_ZOURDOS,
];

/* ───────────────────────── As sete fórmulas ───────────────────────── */

export interface Formula {
  id: string;
  nome: string;
  /** Como a fórmula aparece escrita na página. */
  escrita: string;
  /** Fator 1RM ÷ carga para uma série de r repetições até a falha. */
  fator: (r: number) => number;
}

export const FORMULAS: Formula[] = [
  { id: 'epley', nome: 'Epley', escrita: 'carga × (1 + reps ÷ 30)', fator: (r) => 1 + r / 30 },
  { id: 'brzycki', nome: 'Brzycki', escrita: 'carga × 36 ÷ (37 − reps)', fator: (r) => 36 / (37 - r) },
  { id: 'lander', nome: 'Lander', escrita: '100 × carga ÷ (101,3 − 2,67123 × reps)', fator: (r) => 100 / (101.3 - 2.67123 * r) },
  { id: 'lombardi', nome: 'Lombardi', escrita: 'carga × reps^0,10', fator: (r) => Math.pow(r, 0.1) },
  {
    id: 'mayhew',
    nome: 'Mayhew',
    escrita: '100 × carga ÷ (52,2 + 41,9 × e^(−0,055 × reps))',
    fator: (r) => 100 / (52.2 + 41.9 * Math.exp(-0.055 * r)),
  },
  { id: 'oconner', nome: "O'Conner", escrita: 'carga × (1 + 0,025 × reps)', fator: (r) => 1 + 0.025 * r },
  {
    id: 'wathan',
    nome: 'Wathan',
    escrita: '100 × carga ÷ (48,8 + 53,8 × e^(−0,075 × reps))',
    fator: (r) => 100 / (48.8 + 53.8 * Math.exp(-0.075 * r)),
  },
];

/* ───────────────────────── Exercícios ───────────────────────── */

export interface Exercicio {
  id: string;
  nome: string;
  /** Para onde a estimativa tende a errar neste exercício, quando se sabe. */
  tendencia: 'neutra' | 'subestima' | 'superestima';
  nota: string;
}

export const EXERCICIOS: Exercicio[] = [
  {
    id: 'supino',
    nome: 'Supino e empurrar',
    tendencia: 'neutra',
    nota: 'O supino é o exercício em que as fórmulas foram mais testadas. A faixa das sete costuma conter o seu 1RM.',
  },
  {
    id: 'agachamento',
    nome: 'Agachamento',
    tendencia: 'neutra',
    nota: 'No agachamento as fórmulas acompanham o 1RM de perto, mas quase todas erraram na média no estudo que as comparou — por isso a faixa importa mais que o número do meio.',
  },
  {
    id: 'terra',
    nome: 'Levantamento terra',
    tendencia: 'subestima',
    nota: 'No levantamento terra, as sete fórmulas subestimaram o 1RM real no estudo que as comparou. O seu máximo provavelmente está acima da faixa.',
  },
  {
    id: 'legpress',
    nome: 'Leg press',
    tendencia: 'superestima',
    nota: 'No leg press se faz mais repetições na mesma porcentagem do máximo do que no supino. As fórmulas foram feitas com supino e agachamento, então aqui tendem a superestimar: o seu 1RM provavelmente está abaixo da faixa.',
  },
  {
    id: 'outro',
    nome: 'Outro exercício',
    tendencia: 'neutra',
    nota: 'Para os demais exercícios, a meta-análise mais ampla sobre o tema não achou diferença grande entre eles. Em exercício isolado, como rosca e elevação lateral, use a estimativa só para escolher a carga das séries, não como meta de força.',
  },
];

export const exercicio = (id: string): Exercicio => EXERCICIOS.find((e) => e.id === id) ?? EXERCICIOS[EXERCICIOS.length - 1];

/* ───────────────────────── Limites ───────────────────────── */

export const CARGA_MIN = 1;
export const CARGA_MAX = 500;
export const REPS_MIN = 1;
export const REPS_MAX = 15;
/** Acima disto a precisão cai (Reynolds, 2006; Brzycki pensou a dele até 10). */
export const REPS_CONFIAVEL = 10;
export const RIR_MAX = 4;

export const CARGA_PADRAO = 60;
export const REPS_PADRAO = 8;

export const cargaValida = (c: number | null): c is number =>
  c !== null && Number.isFinite(c) && c >= CARGA_MIN && c <= CARGA_MAX;
export const repsValidas = (r: number | null): r is number =>
  r !== null && Number.isInteger(r) && r >= REPS_MIN && r <= REPS_MAX;
export const rirValido = (r: number | null): r is number =>
  r !== null && Number.isInteger(r) && r >= 0 && r <= RIR_MAX;

export function parseNumero(bruto: string): number | null {
  const limpo = bruto.trim().replace(/\s/g, '').replace(',', '.');
  if (!limpo) return null;
  const n = Number(limpo);
  return Number.isFinite(n) ? n : null;
}

/* ───────────────────────── Estatística simples ───────────────────────── */

function mediana(v: number[]): number {
  const s = [...v].sort((a, b) => a - b);
  const m = Math.floor(s.length / 2);
  return s.length % 2 ? s[m] : (s[m - 1] + s[m]) / 2;
}

/* ───────────────────────── Estimar o 1RM ───────────────────────── */

export interface Estimativa {
  carga: number;
  reps: number;
  /** Repetições na reserva declaradas; somam às feitas. */
  rir: number;
  /** Repetições até a falha que entram na conta: feitas + reserva. */
  repsAteFalha: number;
  porFormula: Array<{ id: string; nome: string; rm: number }>;
  min: number;
  max: number;
  /** O valor do meio das sete. */
  central: number;
  /** A série já foi de uma repetição: não há o que estimar. */
  exato: boolean;
  alemDoConfiavel: boolean;
  idExercicio: string;
}

/**
 * 1RM a partir de uma série. Com uma repetição até a falha, o 1RM é a
 * própria carga — as fórmulas dariam até 9% a mais, o que é ruído.
 */
export function estimar(carga: number, reps: number, rir = 0, idExercicio = 'outro'): Estimativa {
  const repsAteFalha = reps + rir;
  const exato = repsAteFalha === 1;
  const porFormula = FORMULAS.map((f) => ({ id: f.id, nome: f.nome, rm: exato ? carga : carga * f.fator(repsAteFalha) }));
  const valores = porFormula.map((p) => p.rm);
  return {
    carga,
    reps,
    rir,
    repsAteFalha,
    porFormula,
    min: Math.min(...valores),
    max: Math.max(...valores),
    central: mediana(valores),
    exato,
    alemDoConfiavel: repsAteFalha > REPS_CONFIAVEL,
    idExercicio: exercicio(idExercicio).id,
  };
}

/* ───────────────────────── O caminho inverso ───────────────────────── */

export interface CargaAlvo {
  reps: number;
  rir: number;
  /** Faixa de carga pelas sete fórmulas. */
  min: number;
  max: number;
  central: number;
  /** A mesma faixa em porcentagem do 1RM. */
  pctMin: number;
  pctMax: number;
  pctCentral: number;
}

/**
 * Carga para fazer `reps` repetições deixando `rir` na reserva. Pela
 * definição da escala, isso é a carga da série de reps + rir até a falha.
 */
export function cargaPara(rm: number, reps: number, rir = 0): CargaAlvo {
  const r = reps + rir;
  const pcts = FORMULAS.map((f) => (r === 1 ? 1 : 1 / f.fator(r)));
  const pctMin = Math.min(...pcts);
  const pctMax = Math.max(...pcts);
  const pctCentral = mediana(pcts);
  return {
    reps,
    rir,
    min: rm * pctMin,
    max: rm * pctMax,
    central: rm * pctCentral,
    pctMin,
    pctMax,
    pctCentral,
  };
}

export const REPS_TABELA = [1, 2, 3, 4, 5, 6, 8, 10, 12, 15] as const;

/** A tabela de porcentagem do 1RM: carga para cada número de repetições. */
export const tabela = (rm: number, rir = 0): CargaAlvo[] => REPS_TABELA.map((r) => cargaPara(rm, r, rir));

/* ───────────────────────── Formatação ───────────────────────── */

/**
 * Carga arredondada ao que existe na academia: meio quilo abaixo de 20 kg
 * (halteres e anilhas pequenas), quilo inteiro acima.
 */
export function arredondaCarga(kg: number): number {
  if (!Number.isFinite(kg) || kg <= 0) return 0;
  return kg < 20 ? Math.round(kg * 2) / 2 : Math.round(kg);
}

export const formataKg = (kg: number): string =>
  arredondaCarga(kg).toLocaleString('pt-BR', { maximumFractionDigits: 1 });

export const formataFaixaKg = (min: number, max: number): string =>
  arredondaCarga(min) === arredondaCarga(max) ? formataKg(min) : `${formataKg(min)} a ${formataKg(max)}`;

export const formataPct = (p: number): string => `${Math.round(p * 100)}%`;

export const formataFaixaPct = (min: number, max: number): string =>
  Math.round(min * 100) === Math.round(max * 100) ? formataPct(min) : `${Math.round(min * 100)} a ${formataPct(max)}`;

export const formataReps = (r: number): string => (r === 1 ? '1 repetição' : `${r} repetições`);

export function fraseEstimativa(e: Estimativa): string {
  if (e.exato) return `Uma repetição até a falha já é o seu 1RM: ${formataKg(e.carga)} kg.`;
  const serie = e.rir
    ? `${formataKg(e.carga)} kg por ${formataReps(e.reps)}, com ${e.rir} na reserva (${e.repsAteFalha} até a falha)`
    : `${formataKg(e.carga)} kg por ${formataReps(e.reps)} até a falha`;
  return `Com ${serie}, as sete fórmulas colocam o seu 1RM entre ${formataKg(e.min)} e ${formataKg(e.max)} kg — ${formataKg(e.central)} kg no meio.`;
}

/* ───────────────────────── Textos fixos ───────────────────────── */

export const NOTA_FALHA =
  '"Até a falha" aqui é a falha técnica: a última repetição que saiu com a mesma execução das primeiras. A repetição roubada, com o quadril subindo ou a lombar entrando, não conta — ela infla o número e é onde a lesão mora.';

export const NOTA_RESERVA =
  'Repetições na reserva são as que ainda sairiam se você continuasse. Estimar isso é uma habilidade que melhora com o tempo de treino; na dúvida, informe só o que você fez e deixe a reserva em zero — a estimativa fica mais conservadora.';

export const NOTA_REPS_ALTAS =
  'Acima de 10 repetições, a estimativa perde precisão: cansaço, fôlego e técnica passam a pesar tanto quanto a força. Para estimar o 1RM, prefira uma série de 3 a 8 repetições.';

export const NOTA_HIPERTROFIA =
  'Para ganhar massa muscular, a carga exata importa menos do que parece: numa meta-análise, cargas leves e pesadas deram hipertrofia parecida quando as séries iam perto da falha. Para força máxima, carga pesada ganhou. A tabela serve para escolher uma carga que te leve perto da falha no número de repetições que o seu treino pede.';

export const NOTA_TESTE =
  'Testar o 1RM de verdade pede aquecimento progressivo, alguém para ajudar na barra e técnica consolidada. Para quem está começando, estimar pela série é o caminho mais seguro — e dá um número bom o bastante para montar o treino.';

export const NOTA_DOR =
  'Dor articular, dor na lombar ou dor que continua depois do treino não é sinal de esforço bom. Pare a série e procure um médico ou fisioterapeuta antes de subir carga.';

export const NOTA_NAO_PRESCRICAO =
  'Esta é uma estimativa educativa. Não substitui avaliação presencial, não prescreve treino e não diz se você está pronto para uma carga — isso depende de técnica, histórico e contexto que uma conta não vê.';
