/**
 * O motor da página de calorias do Hyrox.
 *
 * A DÉCIMA SEXTA DO CLUSTER — E A PRIMEIRA QUE SOMA PARTES DE UMA PROVA
 *
 *     crossfit  → o WOD, que é uma fração da aula
 *     hyrox     → uma prova padronizada, conta por partes
 *
 * Não encontramos estudo que tenha medido o gasto de uma prova inteira de
 * Hyrox, e a página não depende disso: a prova é sempre a mesma — 8
 * corridas de 1 km, cada uma seguida de uma estação, sempre na mesma
 * ordem —, então a conta sai por partes, cada uma com fonte conhecida.
 *
 *     corrida   → equação de corrida da ACSM, pelo pace (a mesma função da
 *                 página de corrida, importada — não copiada)
 *     estações  → Compêndio de Atividades Físicas, edição de 2011
 *
 * O tempo das estações é o que sobra: tempo final − 8 × pace. Ele inclui a
 * Roxzone, a área de transição, e é dividido em partes iguais entre as 8
 * estações. As duas simplificações são declaradas na página, e o motor
 * calcula quanto o total poderia mudar se a divisão não fosse igual.
 *
 * Se 8 × pace deixa menos de 8 minutos para as estações, a conta não sai:
 * o tempo final e o pace não fecham, e a página diz isso em vez de
 * devolver um número.
 */

import { FONTE_ACSM, metCorrida, paceParaVelocidade, VELOCIDADE_CORRIDA_MIN } from './corrida';

/* ───────────────────────── Fontes ───────────────────────── */

export interface Fonte {
  rotulo: string;
  rotuloCurto: string;
  url: string;
  resumo: string;
}

export const FONTE_COMPENDIO_2011: Fonte = {
  rotulo:
    'Ainsworth BE, Haskell WL, Herrmann SD, et al. 2011 Compendium of Physical Activities: a second update of codes and MET values. Medicine & Science in Sports & Exercise, 43(8):1575-1581, 2011',
  rotuloCurto: 'Compêndio de Atividades Físicas (2011)',
  url: 'https://pubmed.ncbi.nlm.nih.gov/21681120/',
  resumo:
    'mede o aparelho de esqui, geral, em 6,8 METs (código 02080); o remo ergométrico a 100 watts, esforço moderado, em 8,5 (02073); e o treino em circuito com algum movimento aeróbico e pouco descanso, intensidade vigorosa, em 8,0 (02040).',
};

export { FONTE_ACSM };

export const FONTES: Fonte[] = [FONTE_ACSM, FONTE_COMPENDIO_2011];

/* ───────────────────────── Limites ───────────────────────── */

export const PESO_MIN = 30;
export const PESO_MAX = 250;
export const PESO_PADRAO = 70;

/** Tempo final da prova, em minutos. */
export const TEMPO_MIN = 45;
export const TEMPO_MAX = 240;
export const TEMPO_PADRAO = 90;

/** Pace médio das corridas, em minutos por km. */
export const PACE_MIN = 3;
export const PACE_MAX = 10;
export const PACE_PADRAO = 6;

/** Abaixo disto, sobra tempo de menos para 8 estações: a conta não sai. */
export const ESTACOES_MIN_TOTAL = 8;

/* ───────────────────────── A prova ───────────────────────── */

export const KM_CORRIDA = 8;

export interface LinhaCompendio {
  met: number;
  codigo: string;
  descricao: string;
}

export const ESQUI: LinhaCompendio = { met: 6.8, codigo: '02080', descricao: 'aparelho de esqui, geral' };
export const REMO: LinhaCompendio = {
  met: 8.5,
  codigo: '02073',
  descricao: 'remo ergométrico, 100 watts, esforço moderado',
};
export const CIRCUITO: LinhaCompendio = {
  met: 8.0,
  codigo: '02040',
  descricao: 'treino em circuito, com algum movimento aeróbico e pouco descanso, intensidade vigorosa',
};

export interface Estacao {
  id: string;
  nome: string;
  /** "1.000 m", "100 repetições". */
  volume: string;
  linha: LinhaCompendio;
}

/** As 8 estações, na ordem da prova. */
export const ESTACOES: Estacao[] = [
  { id: 'skierg', nome: 'SkiErg', volume: '1.000 m', linha: ESQUI },
  { id: 'sled-push', nome: 'Sled push', volume: '50 m', linha: CIRCUITO },
  { id: 'sled-pull', nome: 'Sled pull', volume: '50 m', linha: CIRCUITO },
  { id: 'burpee', nome: 'Burpee broad jump', volume: '80 m', linha: CIRCUITO },
  { id: 'remo', nome: 'Remo', volume: '1.000 m', linha: REMO },
  { id: 'farmers', nome: 'Farmers carry', volume: '200 m', linha: CIRCUITO },
  { id: 'lunges', nome: 'Sandbag lunges', volume: '100 m', linha: CIRCUITO },
  { id: 'wall-balls', nome: 'Wall balls', volume: '100 repetições', linha: CIRCUITO },
];

/** O que circula e esta página não usa, por não conseguirmos conferir. */
export const SEM_CONFERENCIA = [
  'Medição de uma prova inteira de Hyrox',
  'Tempo real de cada estação',
  'Diferença de carga entre categorias',
] as const;

/* ───────────────────────── Validação ───────────────────────── */

export const pesoValido = (p: number | null): p is number =>
  p !== null && Number.isFinite(p) && p >= PESO_MIN && p <= PESO_MAX;

export const tempoValido = (m: number | null): m is number =>
  m !== null && Number.isFinite(m) && m >= TEMPO_MIN && m <= TEMPO_MAX;

export const paceValido = (p: number | null): p is number =>
  p !== null && Number.isFinite(p) && p >= PACE_MIN && p <= PACE_MAX;

export function parseNumero(bruto: string): number | null {
  const limpo = bruto.trim().replace(/\s/g, '').replace(',', '.');
  if (!limpo) return null;
  const n = Number(limpo);
  return Number.isFinite(n) ? n : null;
}

/**
 * Tempo final como gente escreve: "1h30", "1h30min", "1h", "1:30",
 * "1:30:00", "90", "90min", "58:40".
 *
 * Com um dois-pontos só, a ambiguidade é hora:minuto contra
 * minuto:segundo. Nenhuma prova de Hyrox termina em menos de 45 minutos,
 * então "1:30" só pode ser 1h30, e "58:40" só pode ser 58 min 40 s: até 4
 * na frente é hora; acima disso, minuto.
 */
export function parseTempoFinal(bruto: string): number | null {
  const s = bruto.trim().toLowerCase().replace(/\s/g, '');
  if (!s) return null;
  const hm = s.match(/^(\d{1,2})h(?:(\d{1,2})(?:min|m)?)?$/);
  if (hm) return Number(hm[1]) * 60 + (hm[2] ? Number(hm[2]) : 0);
  const hms = s.match(/^(\d{1,2}):([0-5]\d):([0-5]\d)$/);
  if (hms) return Number(hms[1]) * 60 + Number(hms[2]) + Number(hms[3]) / 60;
  const dois = s.match(/^(\d{1,3}):([0-5]\d)$/);
  if (dois) {
    const a = Number(dois[1]);
    const b = Number(dois[2]);
    return a <= 4 ? a * 60 + b : a + b / 60;
  }
  const min = s.match(/^(\d+(?:[.,]\d+)?)(?:min|m)?$/);
  if (min) return parseNumero(min[1]);
  return null;
}

/** Pace como corredor escreve: "6:00", "5:30", "6". Mesma regra da página de corrida. */
export function parsePace(bruto: string): number | null {
  const s = bruto.trim().replace(/\s/g, '').replace(/['’]/, ':').replace(/["”]$/, '');
  if (!s) return null;
  const mm = s.match(/^(\d{1,2}):([0-5]?\d)$/);
  if (mm) return Number(mm[1]) + Number(mm[2]) / 60;
  return parseNumero(s);
}

/* ───────────────────────── O cálculo ───────────────────────── */

export const kcalPorMinuto = (met: number, pesoKg: number): number => (met * 3.5 * pesoKg) / 200;

export interface ParteEstacao {
  estacao: Estacao;
  kcal: number;
}

export interface Resultado {
  ok: true;
  pesoKg: number;
  tempoFinal: number;
  pace: number;
  velocidadeKmH: number;
  metCorrida: number;
  minutosCorrida: number;
  kcalCorrida: number;
  /** Tempo final menos a corrida — inclui a Roxzone. */
  minutosEstacoes: number;
  minutosPorEstacao: number;
  estacoes: ParteEstacao[];
  kcalEstacoes: number;
  kcal: number;
  /** Descontado o que a pessoa gastaria parada no tempo final (1 MET). */
  kcalLiquida: number;
  pctTempoCorrida: number;
  pctKcalCorrida: number;
  /** Corrida abaixo de 8 km/h: fora da faixa em que a equação é validada. */
  paceLento: boolean;
}

export interface Incoerente {
  ok: false;
  minutosCorrida: number;
  minutosEstacoes: number;
}

export function minutosDeCorrida(paceMin: number): number {
  return KM_CORRIDA * paceMin;
}

export function deProva(tempoFinal: number, paceMin: number, pesoKg: number): Resultado | Incoerente {
  const minutosCorrida = minutosDeCorrida(paceMin);
  const minutosEstacoes = tempoFinal - minutosCorrida;
  if (minutosEstacoes < ESTACOES_MIN_TOTAL) return { ok: false, minutosCorrida, minutosEstacoes };

  const velocidadeKmH = paceParaVelocidade(paceMin);
  const met = metCorrida(velocidadeKmH);
  const kcalCorrida = kcalPorMinuto(met, pesoKg) * minutosCorrida;

  const minutosPorEstacao = minutosEstacoes / ESTACOES.length;
  const estacoes = ESTACOES.map((estacao) => ({
    estacao,
    kcal: kcalPorMinuto(estacao.linha.met, pesoKg) * minutosPorEstacao,
  }));
  const kcalEstacoes = estacoes.reduce((s, e) => s + e.kcal, 0);
  const kcal = kcalCorrida + kcalEstacoes;

  return {
    ok: true,
    pesoKg,
    tempoFinal,
    pace: paceMin,
    velocidadeKmH,
    metCorrida: met,
    minutosCorrida,
    kcalCorrida,
    minutosEstacoes,
    minutosPorEstacao,
    estacoes,
    kcalEstacoes,
    kcal,
    kcalLiquida: kcal - kcalPorMinuto(1, pesoKg) * tempoFinal,
    pctTempoCorrida: (minutosCorrida / tempoFinal) * 100,
    pctKcalCorrida: (kcalCorrida / kcal) * 100,
    paceLento: velocidadeKmH < VELOCIDADE_CORRIDA_MIN,
  };
}

/**
 * Quanto a divisão em partes iguais pode pesar. As estações vão de 6,8 a
 * 8,5 METs; no extremo impossível de todo o tempo cair na mais leve — ou
 * na mais pesada —, o gasto das estações iria de `min` a `max`. A conta de
 * verdade fica entre os dois, e a página mostra o tamanho do intervalo.
 */
export function faixaDaDivisao(r: Resultado): { min: number; max: number } {
  const mets = ESTACOES.map((e) => e.linha.met);
  return {
    min: kcalPorMinuto(Math.min(...mets), r.pesoKg) * r.minutosEstacoes,
    max: kcalPorMinuto(Math.max(...mets), r.pesoKg) * r.minutosEstacoes,
  };
}

/** Média dos METs das 8 estações, o que a divisão igual equivale a usar. */
export const metMedioEstacoes = (): number => ESTACOES.reduce((s, e) => s + e.linha.met, 0) / ESTACOES.length;

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

/** "5 min 15 s" — o tempo de cada estação costuma não ser redondo. */
export function formataMinSeg(min: number): string {
  if (!Number.isFinite(min) || min <= 0) return '—';
  const total = Math.round(min * 60);
  const m = Math.floor(total / 60);
  const s = total % 60;
  if (m === 0) return `${s} s`;
  return s === 0 ? `${m} min` : `${m} min ${s} s`;
}

export function formataPace(paceMin: number): string {
  if (!Number.isFinite(paceMin) || paceMin <= 0) return '—';
  const total = Math.round(paceMin * 60);
  return `${Math.floor(total / 60)}:${String(total % 60).padStart(2, '0')}`;
}

export const formataMet = (m: number): string =>
  m.toLocaleString('pt-BR', { minimumFractionDigits: 1, maximumFractionDigits: 1 });

export const formataPct = (p: number): string => `${Math.round(p)}%`;

/* Frases sem verbo concordando com o tempo. */
export function fraseContexto(r: Resultado): string {
  return (
    `Para uma pessoa de ${Math.round(r.pesoKg)} kg, prova em ${formataTempo(r.tempoFinal)} com pace de ` +
    `${formataPace(r.pace)} por km: aproximadamente ${formataKcal(r.kcal)} kcal — ${formataKcal(r.kcalCorrida)} ` +
    `na corrida e ${formataKcal(r.kcalEstacoes)} nas estações.`
  );
}

export function fraseIncoerente(i: Incoerente): string {
  const sobra = i.minutosEstacoes > 0 ? `sobram ${formataMinSeg(i.minutosEstacoes)}` : 'não sobra tempo nenhum';
  return (
    `Com esse pace, os 8 km de corrida levam ${formataTempo(i.minutosCorrida)} e ${sobra} para as 8 estações — ` +
    `menos de ${ESTACOES_MIN_TOTAL} minutos. O tempo final ou o pace estão incoerentes; confira os dois.`
  );
}

/* ───────────────────────── Tabelas ───────────────────────── */

export const PESOS_TABELA = [50, 60, 70, 80, 90, 100, 120] as const;

/** Três provas de referência: rápida, intermediária e mais longa. */
export const CENARIOS = [
  { tempo: 70, pace: 5 },
  { tempo: 90, pace: 6 },
  { tempo: 115, pace: 7 },
] as const;

const exige = (r: Resultado | Incoerente): Resultado => {
  if (!r.ok) throw new Error('cenário de tabela incoerente');
  return r;
};

export const tabelaCenarios = (pesoKg: number): Resultado[] =>
  CENARIOS.map((c) => exige(deProva(c.tempo, c.pace, pesoKg)));

export interface LinhaPeso {
  peso: number;
  corrida: number;
  estacoes: number;
  total: number;
}

/** Prova de 1h30 com pace de 6:00, por peso. */
export const tabelaPorPeso = (): LinhaPeso[] =>
  PESOS_TABELA.map((peso) => {
    const r = exige(deProva(TEMPO_PADRAO, PACE_PADRAO, peso));
    return { peso, corrida: r.kcalCorrida, estacoes: r.kcalEstacoes, total: r.kcal };
  });

/* ───────────────────────── Textos fixos ───────────────────────── */

export const NOTA_SEM_MEDICAO =
  'Não encontramos estudo que tenha medido o gasto de uma prova inteira de Hyrox. A conta não depende disso: a prova é padronizada, então ela sai por partes, cada uma com fonte conhecida — a corrida pela equação da ACSM, as estações pelo Compêndio de Atividades Físicas.';

export const NOTA_ESTIMATIVA =
  'É uma estimativa. A prova é sempre a mesma, mas o tempo real de cada estação varia com a categoria, a carga e a técnica — e a conta divide o tempo das estações em partes iguais. O total é mais firme que o número de cada estação, porque as intensidades das estações ficam próximas entre si.';

export const NOTA_ROXZONE =
  'O tempo das estações é o que sobra do tempo final depois da corrida, e por isso inclui a Roxzone, a área de transição. Ela entra na intensidade da estação, embora parte dela seja caminhada — o que pode puxar a conta um pouco para cima.';

export const NOTA_CIRCUITO =
  'O Compêndio não mede trenó, burpee, carregamento, avanço nem wall ball em separado. A descrição mais próxima é a de treino em circuito vigoroso, com pouco descanso — 8,0 METs —, e é ela que entra para essas seis estações.';

export const NOTA_PACE_LENTO =
  'Nesse pace, a corrida fica abaixo de 8 km/h, e a equação de corrida da ACSM é validada acima disso. A conta segue a mesma equação, mas fica menos precisa — principalmente se parte dos trechos for caminhada.';

export const NOTA_BRUTO =
  'O número é bruto: inclui o que você gastaria parado no mesmo tempo. O acréscimo real ao seu dia é menor, e a ferramenta mostra os dois.';

export const NOTA_SEM_PERDA_LOCALIZADA =
  'Nenhum exercício escolhe de onde o corpo tira gordura. O treino para o Hyrox aumenta o gasto do dia; onde a gordura sai primeiro é decidido por genética e hormônio.';

export const NOTA_SEGURANCA =
  'O Hyrox soma 8 km de corrida a estações de força feitas com o coração já alto. A lombar no trenó e no wall ball, o joelho nos avanços e a técnica que se desfaz com a fadiga costumam ser o que mais pede atenção. Quem vai fazer a primeira prova depois de anos parado deve conversar com um médico antes, e dor que persiste é assunto para médico ou fisioterapeuta, não para treinar por cima.';

export const NOTA_NAO_PRESCRICAO =
  'Esta é uma estimativa educativa de gasto energético. Não é avaliação metabólica, não substitui calorimetria indireta, não prescreve treino e não diagnostica nada.';
