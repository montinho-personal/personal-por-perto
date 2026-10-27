/**
 * O motor da calculadora de tempo do Hyrox.
 *
 * A PERGUNTA
 * "Para fazer o Hyrox em X, em que pace eu preciso correr?" — e o caminho
 * de volta: "correndo a Y por km, em quanto eu termino?". A prova é sempre
 * a mesma (8 corridas de 1 km, cada uma seguida de uma estação, sempre na
 * mesma ordem), então o tempo final é a soma de duas partes:
 *
 *     tempo final = corrida (8 km × pace) + estações e transições
 *
 * A parte das estações é a que ninguém sabe de antemão, e a calculadora não
 * inventa: a pessoa informa a dela (do treino ou de uma prova) ou usa a
 * proporção medida num estudo — Brandt et al. 2025, o primeiro sobre o
 * Hyrox: 11 atletas amadores, simulação da categoria Open individual,
 * 86,5 min no total, dos quais 51,2 min de corrida e 32,8 min de estações
 * (medianas). Os ~2,5 min que sobram na soma do estudo ficam, aqui, dentro
 * das "estações e transições".
 *
 * O ritmo que cai ao longo da prova vem do outro estudo com dados de
 * competição (HYScience, Gutiérrez-Hellín et al. 2026): 24 atletas Pro
 * masculino na etapa de Madri 2025, com velocidade de 16,13 km/h na
 * corrida 1 e 13,58 km/h na corrida 8. As parciais "com queda" reproduzem
 * essa proporção, mantendo o mesmo tempo total de corrida.
 *
 * O que a calculadora NÃO usa, por não termos fonte aberta: tempo médio por
 * categoria (Open feminino, duplas…), recordes e o tempo de cada estação.
 * As estações são divididas em partes iguais, e a página diz isso.
 */

import { formataPace, formataTempo, formataTempoExtenso } from './pace';

export { formataPace, formataTempo, formataTempoExtenso };

/* ───────────────────────── Fontes ───────────────────────── */

export interface Fonte {
  rotulo: string;
  url: string;
  resumo: string;
}

export const FONTE_BRANDT: Fonte = {
  rotulo:
    'Brandt T, Ebel C, Lebahn C, Schmidt A. Acute physiological responses and performance determinants in Hyrox — a new running-focused high intensity functional fitness trend. Frontiers in Physiology, 2025',
  url: 'https://pubmed.ncbi.nlm.nih.gov/40230601/',
  resumo:
    '11 atletas amadores numa simulação da categoria Open individual: 86,5 min no total (mediana), 51,2 min de corrida e 32,8 min de estações; sled push em 128 s e sled pull em 155 s. Terminar mais rápido se associou a mais VO2máx e mais volume de treino de resistência.',
};

export const FONTE_HYSCIENCE: Fonte = {
  rotulo:
    'Gutiérrez-Hellín J, et al. Relative Running Intensity and Pacing During an Official HYROX PRO MEN Competition: The HYScience Study. International Journal of Sports Physiology and Performance, 2026',
  url: 'https://pubmed.ncbi.nlm.nih.gov/42697540/',
  resumo:
    '24 atletas Pro masculino na etapa de Madri 2025, com tempo médio de 69:58: a velocidade caiu de 16,13 km/h na corrida 1 para 13,58 km/h na corrida 8, e foi ainda menor na Roxzone (10,52 km/h).',
};

export const FONTE_HYROX: Fonte = {
  rotulo: 'HYROX — The Fitness Race',
  url: 'https://hyrox.com/the-fitness-race/',
  resumo: 'formato da prova: 8 corridas de 1 km, cada uma seguida de uma estação, sempre na mesma ordem.',
};

export const FONTES: Fonte[] = [FONTE_BRANDT, FONTE_HYSCIENCE, FONTE_HYROX];

/* ───────────────────────── Números dos estudos ───────────────────────── */

export const BRANDT_TOTAL_MIN = 86.5;
export const BRANDT_CORRIDA_MIN = 51.2;
export const BRANDT_ESTACOES_MIN = 32.8;
export const BRANDT_SLED_PUSH_S = 128;
export const BRANDT_SLED_PULL_S = 155;

export const HYSCIENCE_TOTAL_S = 69 * 60 + 58;
export const HYSCIENCE_V1 = 16.13;
export const HYSCIENCE_V8 = 13.58;
export const HYSCIENCE_ROXZONE = 10.52;

/** Parte do tempo final que vai para estações e transições, na mediana do estudo. */
export const PARTE_ESTACOES = 1 - BRANDT_CORRIDA_MIN / BRANDT_TOTAL_MIN;
/** Minutos de estações e transições para cada minuto de corrida, no mesmo estudo. */
export const RAZAO_ESTACOES_CORRIDA = PARTE_ESTACOES / (1 - PARTE_ESTACOES);
/** Velocidade da última corrida em relação à primeira (≈ 0,84). */
export const QUEDA = HYSCIENCE_V8 / HYSCIENCE_V1;

/* ───────────────────────── A prova ───────────────────────── */

export const KM_CORRIDA = 8;

export const ESTACOES = [
  'SkiErg',
  'Sled push',
  'Sled pull',
  'Burpee broad jump',
  'Remo',
  'Farmers carry',
  'Sandbag lunges',
  'Wall balls',
] as const;

/* ───────────────────────── Limites ───────────────────────── */

/** Tempo final, em segundos: de 45 min a 4 h. */
export const META_MIN_S = 45 * 60;
export const META_MAX_S = 4 * 3600;
/** Estações e transições somadas, em segundos: de 8 min a 2 h. */
export const ESTACOES_MIN_S = 8 * 60;
export const ESTACOES_MAX_S = 2 * 3600;
/** Pace de corrida, em segundos por km: de 2:30 a 15:00. */
export const PACE_MIN_S = 150;
export const PACE_MAX_S = 900;

export const metaValida = (s: number | null): s is number =>
  s !== null && Number.isFinite(s) && s >= META_MIN_S && s <= META_MAX_S;
export const estacoesValidas = (s: number | null): s is number =>
  s !== null && Number.isFinite(s) && s >= ESTACOES_MIN_S && s <= ESTACOES_MAX_S;
export const paceValido = (s: number | null): s is number =>
  s !== null && Number.isFinite(s) && s >= PACE_MIN_S && s <= PACE_MAX_S;

/** Estações pela proporção do estudo, arredondadas ao minuto, dado o tempo final. */
export const estacoesPelaMeta = (metaS: number): number => Math.round((metaS * PARTE_ESTACOES) / 60) * 60;
/** Estações pela proporção do estudo, arredondadas ao minuto, dado o pace. */
export const estacoesPeloPace = (paceS: number): number =>
  Math.round((paceS * KM_CORRIDA * RAZAO_ESTACOES_CORRIDA) / 60) * 60;

/* ───────────────────────── O cálculo ───────────────────────── */

export interface Parcial {
  tipo: 'corrida' | 'estacao';
  /** 1 a 8. */
  n: number;
  nome: string;
  /** Duração do trecho, em segundos. */
  duracao: number;
  /** Relógio de prova ao fim do trecho. */
  acumulado: number;
  /** Só nas corridas: pace do trecho, em s/km. */
  pace?: number;
}

export interface Plano {
  ok: true;
  tempoFinal: number;
  corrida: number;
  estacoes: number;
  /** Pace médio das 8 corridas, em s/km. */
  pace: number;
  kmh: number;
  porEstacao: number;
  parteCorrida: number;
  comQueda: boolean;
  parciais: Parcial[];
  /** Pace da 1ª e da 8ª corrida (iguais sem queda). */
  pacePrimeira: number;
  paceUltima: number;
}

export interface Falha {
  ok: false;
  motivo: 'meta' | 'estacoes' | 'pace' | 'nao-fecha' | 'pace-fora';
  mensagem: string;
}

/**
 * Pace de cada uma das 8 corridas. Sem queda, todas iguais. Com queda, a
 * velocidade desce em linha reta da 1ª à 8ª na proporção do estudo, e a
 * escala é ajustada para o tempo total de corrida não mudar.
 */
export function pacesDasCorridas(corridaS: number, comQueda: boolean): number[] {
  const media = corridaS / KM_CORRIDA;
  if (!comQueda) return Array.from({ length: KM_CORRIDA }, () => media);
  const fatores = Array.from({ length: KM_CORRIDA }, (_, i) => 1 - ((1 - QUEDA) * i) / (KM_CORRIDA - 1));
  const somaInversos = fatores.reduce((s, f) => s + 1 / f, 0);
  // pace_i = k / fator_i; Σ pace_i = corrida  →  k = corrida / Σ(1/fator_i)
  const k = corridaS / somaInversos;
  return fatores.map((f) => k / f);
}

function montaPlano(tempoFinal: number, estacoes: number, comQueda: boolean): Plano {
  const corrida = tempoFinal - estacoes;
  const paces = pacesDasCorridas(corrida, comQueda);
  const porEstacao = estacoes / ESTACOES.length;
  const parciais: Parcial[] = [];
  let relogio = 0;
  paces.forEach((p, i) => {
    relogio += p;
    parciais.push({ tipo: 'corrida', n: i + 1, nome: `Corrida ${i + 1}`, duracao: p, acumulado: relogio, pace: p });
    relogio += porEstacao;
    parciais.push({ tipo: 'estacao', n: i + 1, nome: ESTACOES[i], duracao: porEstacao, acumulado: relogio });
  });
  const pace = corrida / KM_CORRIDA;
  return {
    ok: true,
    tempoFinal,
    corrida,
    estacoes,
    pace,
    kmh: 3600 / pace,
    porEstacao,
    parteCorrida: corrida / tempoFinal,
    comQueda,
    parciais,
    pacePrimeira: paces[0],
    paceUltima: paces[KM_CORRIDA - 1],
  };
}

/** Meta de tempo final → pace de corrida que ela pede. */
export function paceParaMeta(metaS: number | null, estacoesS: number | null, comQueda = false): Plano | Falha {
  if (!metaValida(metaS))
    return { ok: false, motivo: 'meta', mensagem: 'Informe uma meta entre 45 minutos e 4 horas.' };
  if (!estacoesValidas(estacoesS))
    return { ok: false, motivo: 'estacoes', mensagem: 'Informe o tempo das estações entre 8 minutos e 2 horas.' };
  const corrida = metaS - estacoesS;
  if (corrida / KM_CORRIDA < PACE_MIN_S)
    return {
      ok: false,
      motivo: 'nao-fecha',
      mensagem: 'Com esse tempo de estações, a meta pediria correr abaixo de 2:30 por km — a conta não fecha. Aumente a meta ou reduza as estações.',
    };
  if (corrida / KM_CORRIDA > PACE_MAX_S)
    return {
      ok: false,
      motivo: 'pace-fora',
      mensagem: 'Com esse tempo de estações, sobraria tempo para correr acima de 15:00 por km. Confira a meta e as estações.',
    };
  return montaPlano(metaS, estacoesS, comQueda);
}

/** Pace de corrida → tempo final previsto. */
export function tempoPeloPace(paceS: number | null, estacoesS: number | null, comQueda = false): Plano | Falha {
  if (!paceValido(paceS))
    return { ok: false, motivo: 'pace', mensagem: 'Informe um pace entre 2:30 e 15:00 por km.' };
  if (!estacoesValidas(estacoesS))
    return { ok: false, motivo: 'estacoes', mensagem: 'Informe o tempo das estações entre 8 minutos e 2 horas.' };
  return montaPlano(paceS * KM_CORRIDA + estacoesS, estacoesS, comQueda);
}

/* ───────────────────────── Leitura ───────────────────────── */

/** Uma frase para o resultado, sem adjetivo de desempenho. */
export function frasePlano(p: Plano): string {
  const pct = Math.round(p.parteCorrida * 100);
  return `Correndo os 8 km a ${formataPace(p.pace)} por km (${formataTempoExtenso(p.corrida)} de corrida) e fazendo as estações e transições em ${formataTempoExtenso(p.estacoes)}, a prova fecha em ${formataTempo(p.tempoFinal)}. A corrida fica com ${pct}% do tempo — no estudo com atletas amadores, ficou com ${Math.round((1 - PARTE_ESTACOES) * 100)}%.`;
}

export const NOTA_ESTIMATIVA =
  'É uma conta de planejamento, não uma previsão: o tempo das estações muda com a categoria, a carga, a técnica e o cansaço, e o pace real costuma cair ao longo da prova.';

/** Faixa de pace para analytics: "6_7" = entre 6 e 7 min/km. Nunca o tempo exato. */
export function faixaMeta(metaS: number): string {
  const min = metaS / 60;
  if (min < 60) return 'abaixo_60';
  if (min >= 150) return 'acima_150';
  const base = Math.floor(min / 15) * 15;
  return `${base}_${base + 15}`;
}
