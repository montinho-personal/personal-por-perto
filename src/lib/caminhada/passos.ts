/**
 * O motor da calculadora de passos.
 *
 * O QUE ESTA CONTA FAZ
 *
 * Traduz passos em distância, tempo e contexto — e o caminho inverso. A
 * pessoa diz quantos passos deu (ou quer dar), e a ferramenta responde
 * quantos quilômetros isso é, quanto tempo leva e quanto falta para a meta.
 *
 * O QUE ESTA PÁGINA CHAMA DE "PASSO"
 *
 * Um passo é o contato de um pé até o contato seguinte do OUTRO pé — é o
 * que celular e relógio contam. A passada (stride) é o ciclo completo, dois
 * passos. Toda conta daqui usa o passo; a palavra "passada" só aparece para
 * explicar a diferença, porque metade das calculadoras da SERP mistura as
 * duas e erra a distância pela metade ou pelo dobro.
 *
 * AS TRÊS CONTAS, SEM MISTÉRIO
 *
 *     distância (km) = passos × comprimento do passo (cm) ÷ 100.000
 *     passos         = distância (km) × 100.000 ÷ comprimento do passo (cm)
 *     tempo (min)    = passos ÷ cadência (passos por minuto)
 *
 * Nada é arredondado antes do fim. Quem arredonda é a exibição, e ela
 * arredonda ao grão que a estimativa sustenta: "~7,3 km", nunca "7,318 km".
 *
 * DE ONDE VEM O COMPRIMENTO DO PASSO
 *
 * Da tabela de esteira do estudo CADENCE-Adults, nas três faixas etárias
 * (21–40, 41–60 e 61–85 anos; 254 adultos, altura média 169,5 cm): para cada
 * velocidade, a cadência média medida. Passo = velocidade ÷ cadência. A
 * mesma pessoa encurta o passo devagar e alonga rápido — de ~55 cm a
 * 3,2 km/h até ~83 cm a 6,4 km/h —, e por isso o passo aqui depende do
 * RITMO, não só da altura. A regra 0,413/0,415 × altura que circula nas
 * calculadoras não tem estudo de origem rastreável; ela coincide com o que
 * esta tabela dá a ~4,8 km/h, e só ali.
 *
 * A altura entra escalando o passo da amostra (passo × altura ÷ 169,5).
 * Isso é suposição de proporcionalidade, declarada como tal. A faixa de
 * incerteza (±10%) vem da dispersão da cadência à mesma velocidade no
 * estudo (desvio-padrão ~5–6%; ±10% cobre cerca de 95% dos participantes).
 * O jeito preciso continua sendo medir: distância conhecida ÷ passos.
 */

import { metNoPlano, kcalPorMinuto } from '../calorias/caminhada';

/* ───────────────────────── Fontes ───────────────────────── */

export interface Fonte {
  rotulo: string;
  rotuloCurto: string;
  url: string;
}

export const FONTE_CADENCE: Fonte = {
  rotulo:
    'Tudor-Locke C, Aguiar EJ, Han H, et al. Walking cadence (steps/min) and intensity in 21–40 year olds: CADENCE-adults. IJBNPA, 2019 — e as continuações em 41–60 (2020) e 61–85 anos (2021)',
  rotuloCurto: 'estudo CADENCE-Adults (2019–2021)',
  url: 'https://pmc.ncbi.nlm.nih.gov/articles/PMC6337834/',
};

/* ───────────────────────── Constantes de método ───────────────────────── */

/**
 * Cadência média medida por velocidade de esteira, ponderada pelo número de
 * participantes das três faixas etárias do CADENCE-Adults (Tabela 2 de cada
 * artigo). Abaixo de 2 mph a marcha em esteira deixa de ser caminhada
 * normal; acima de 4 mph a amostra rareia (muitos já corriam).
 */
export const TABELA_CADENCE: ReadonlyArray<{ kmh: number; cadencia: number }> = [
  { kmh: 2.0 * 1.609344, cadencia: 97.0 },
  { kmh: 2.5 * 1.609344, cadencia: 105.9 },
  { kmh: 3.0 * 1.609344, cadencia: 113.8 },
  { kmh: 3.5 * 1.609344, cadencia: 120.9 },
  { kmh: 4.0 * 1.609344, cadencia: 129.0 },
];

/** Altura média ponderada das três amostras (170,7 · 171,0 · 167,3 cm). */
export const ALTURA_REFERENCIA_CM = 169.5;

/** ±10%: ~2 desvios-padrão da cadência à mesma velocidade no estudo. */
export const INCERTEZA_PASSO = 0.1;

/** Passo da amostra (cm) numa linha da tabela. */
const passoDaLinha = (l: { kmh: number; cadencia: number }) => (l.kmh * 100000) / 60 / l.cadencia;

/**
 * O passo médio da amostra para uma cadência qualquer, interpolado entre as
 * linhas medidas e travado nas pontas (esticar a reta inventaria dado).
 */
export function passoDaAmostra(cadencia: number): number {
  const t = TABELA_CADENCE;
  if (cadencia <= t[0].cadencia) return passoDaLinha(t[0]);
  const ult = t[t.length - 1];
  if (cadencia >= ult.cadencia) return passoDaLinha(ult);
  for (let i = 0; i < t.length - 1; i++) {
    const a = t[i];
    const b = t[i + 1];
    if (cadencia >= a.cadencia && cadencia <= b.cadencia) {
      const f = (cadencia - a.cadencia) / (b.cadencia - a.cadencia);
      return passoDaLinha(a) + f * (passoDaLinha(b) - passoDaLinha(a));
    }
  }
  return passoDaLinha(ult);
}

/**
 * Os ritmos são OS MESMOS da calculadora de caminhada (velocidade do
 * Compêndio, cadência medida no CADENCE-Adults): "moderado" tem de querer
 * dizer a mesma coisa nas duas páginas, ou elas se contradizem.
 */
export { RITMOS, RITMO_PADRAO, ritmo } from '../calorias/caminhada';
export type { RitmoId, Ritmo } from '../calorias/caminhada';

/* ───────────────────────── Limites ───────────────────────── */

export const PASSOS_MAX = 100000;
export const ALTURA_MIN_CM = 100;
export const ALTURA_MAX_CM = 230;
/** O motor aceita qualquer passo entre estes limites… */
export const PASSO_MIN_CM = 20;
export const PASSO_MAX_CM = 150;
/** …mas fora desta faixa pede para conferir, sem bloquear. */
export const PASSO_PLAUSIVEL_MIN_CM = 40;
export const PASSO_PLAUSIVEL_MAX_CM = 100;
export const CADENCIA_MIN = 40;
export const CADENCIA_MAX = 180;
export const KM_MAX = 100;
export const PESO_MIN = 30;
export const PESO_MAX = 250;

/* ───────────────────────── Leitura de entrada ───────────────────────── */

/**
 * Lê número decimal brasileiro: "1,75" e "1.75" valem 1,75. Para contagens
 * de passos use `parsePassos`, que entende o ponto como milhar.
 */
export function parseDecimal(bruto: string): number | null {
  const limpo = bruto.trim().replace(/\s/g, '').replace(',', '.');
  if (!limpo || !/^\d*\.?\d+$|^\d+\.$/.test(limpo)) return null;
  const n = Number(limpo);
  return Number.isFinite(n) ? n : null;
}

/**
 * Lê uma contagem de passos como brasileiro digita: "10000", "10.000",
 * "10 000", "10 mil", "8,4 mil", "10k". Ponto é milhar (ninguém dá 10,5
 * passos), vírgula só vale antes de "mil"/"k". Devolve inteiro ou null.
 */
export function parsePassos(bruto: string): number | null {
  let s = bruto.trim().toLowerCase().replace(/passos?/g, '').trim();
  if (!s) return null;
  const mil = /^(\d+(?:[.,]\d+)?)\s*(mil|k)$/.exec(s);
  if (mil) {
    const n = Number(mil[1].replace(',', '.'));
    return Number.isFinite(n) ? Math.round(n * 1000) : null;
  }
  s = s.replace(/[\s.]/g, '');
  if (!/^\d+$/.test(s)) return null;
  const n = Number(s);
  return Number.isFinite(n) ? n : null;
}

export const passosValidos = (p: number | null): p is number =>
  p !== null && Number.isInteger(p) && p >= 1 && p <= PASSOS_MAX;

export const alturaValida = (a: number | null): a is number =>
  a !== null && Number.isFinite(a) && a >= ALTURA_MIN_CM && a <= ALTURA_MAX_CM;

export const passoValido = (c: number | null): c is number =>
  c !== null && Number.isFinite(c) && c >= PASSO_MIN_CM && c <= PASSO_MAX_CM;

export const cadenciaValida = (c: number | null): c is number =>
  c !== null && Number.isFinite(c) && c >= CADENCIA_MIN && c <= CADENCIA_MAX;

export const kmValidos = (k: number | null): k is number =>
  k !== null && Number.isFinite(k) && k > 0 && k <= KM_MAX;

export const pesoValido = (p: number | null): p is number =>
  p !== null && Number.isFinite(p) && p >= PESO_MIN && p <= PESO_MAX;

/**
 * "Você quis dizer…?" para o erro de unidade mais comum: altura ou passo
 * digitados em metros num campo de centímetros ("1,75" → 175 cm; "0,72" →
 * 72 cm). Devolve a sugestão em cm, ou null quando não há o que sugerir.
 */
export function sugereCm(valor: number | null, campo: 'altura' | 'passo'): number | null {
  if (valor === null || !Number.isFinite(valor) || valor <= 0) return null;
  if (campo === 'altura' && valor >= 1 && valor <= 2.3) return Math.round(valor * 100);
  if (campo === 'passo' && valor >= 0.2 && valor <= 1.5) return Math.round(valor * 100);
  return null;
}

/** Passo fora do comum pede conferência — em tom neutro, sem bloquear. */
export const passoPedeConferencia = (cm: number): boolean =>
  cm < PASSO_PLAUSIVEL_MIN_CM || cm > PASSO_PLAUSIVEL_MAX_CM;

/* ───────────────────────── O comprimento do passo ───────────────────────── */

export type OrigemPasso = 'medido' | 'informado' | 'altura' | 'padrao';

export interface Passo {
  cm: number;
  origem: OrigemPasso;
}

/**
 * O passo de quem mediu: distância conhecida ÷ passos contados. É o método
 * mais preciso que existe fora de laboratório, e é o que a página ensina.
 */
export function passoDaMedida(metros: number, passosContados: number): number | null {
  if (!(metros > 0) || !(passosContados > 0)) return null;
  return (metros * 100) / passosContados;
}

/**
 * O passo estimado: o da amostra nesta cadência, escalado pela altura
 * quando a pessoa informa (proporcionalidade declarada no cabeçalho).
 */
export const passoEstimado = (cadencia: number, alturaCm?: number | null): number =>
  passoDaAmostra(cadencia) * (alturaCm ? alturaCm / ALTURA_REFERENCIA_CM : 1);

/** Razão passo/altura implícita, para a página mostrar a conta aberta. */
export const razaoPassoAltura = (cadencia: number): number => passoDaAmostra(cadencia) / ALTURA_REFERENCIA_CM;

/* ───────────────────────── As contas ───────────────────────── */

export const kmDePassos = (passos: number, passoCm: number): number =>
  passoCm > 0 ? (passos * passoCm) / 100000 : 0;

export const passosDeKm = (km: number, passoCm: number): number =>
  passoCm > 0 ? (km * 100000) / passoCm : 0;

export const minutosDePassos = (passos: number, cadencia: number): number =>
  cadencia > 0 ? passos / cadencia : 0;

export const passosEmMinutos = (minutos: number, cadencia: number): number => minutos * cadencia;

/** Velocidade implícita de quem anda com este passo nesta cadência. */
export const velocidadeKmH = (passoCm: number, cadencia: number): number => (passoCm * cadencia * 60) / 100000;

/* ───────────────────────── Meta e "quanto falta" ───────────────────────── */

export interface Meta {
  meta: number;
  feitos: number;
  /** 0 a 1, travado em 1 quando a meta foi passada. */
  progresso: number;
  faltam: number;
  /** Passos além da meta (0 se não passou). */
  alem: number;
  concluida: boolean;
}

export function meta(metaPassos: number, feitos: number): Meta {
  const m = Math.max(0, metaPassos);
  const f = Math.max(0, feitos);
  return {
    meta: m,
    feitos: f,
    progresso: m > 0 ? Math.min(1, f / m) : 0,
    faltam: Math.max(0, m - f),
    alem: Math.max(0, f - m),
    concluida: m > 0 && f >= m,
  };
}

export interface QuantoFalta extends Meta {
  km: number;
  minutos: number;
}

export function quantoFalta(metaPassos: number, feitos: number, passoCm: number, cadencia: number): QuantoFalta {
  const m = meta(metaPassos, feitos);
  return { ...m, km: kmDePassos(m.faltam, passoCm), minutos: minutosDePassos(m.faltam, cadencia) };
}

/* ───────────────────────── Calorias ───────────────────────── */

export interface Kcal {
  /** Gasto bruto central, sem arredondar. */
  kcal: number;
  /** Faixa honesta: passo e ritmo reais variam. */
  min: number;
  max: number;
  /** Acréscimo ao dia: bruto menos o repouso do mesmo tempo. */
  liquida: number;
  minutos: number;
  velocidade: number;
  met: number;
}

/**
 * Calorias pelos passos, NUNCA por "x kcal por passo". Os passos viram
 * tempo pela cadência e velocidade pelo passo × cadência; o MET da
 * velocidade sai do Compêndio 2024 (o mesmo motor da calculadora de
 * caminhada, para as duas páginas nunca discordarem por método).
 *
 * `incerteza` é a variação relativa do passo usada para a faixa (0,1 =
 * ±10%, ver INCERTEZA_PASSO).
 */
export function kcalDePassos(
  passos: number,
  pesoKg: number,
  passoCm: number,
  cadencia: number,
  incerteza = INCERTEZA_PASSO,
): Kcal {
  const minutos = minutosDePassos(passos, cadencia);
  const conta = (cm: number) => {
    const v = velocidadeKmH(cm, cadencia);
    const met = metNoPlano(v);
    return { v, met, kcal: kcalPorMinuto(met, pesoKg) * minutos };
  };
  const c = conta(passoCm);
  const baixo = conta(passoCm * (1 - incerteza));
  const alto = conta(passoCm * (1 + incerteza));
  return {
    kcal: c.kcal,
    min: Math.min(baixo.kcal, alto.kcal),
    max: Math.max(baixo.kcal, alto.kcal),
    liquida: c.kcal - kcalPorMinuto(1, pesoKg) * minutos,
    minutos,
    velocidade: c.v,
    met: c.met,
  };
}

/* ───────────────────────── Histórico (fase 2) ───────────────────────── */

export interface Dia {
  /** AAAA-MM-DD, no fuso de quem usa. */
  data: string;
  passos: number;
  meta?: number;
}

export function mediaPassos(dias: Dia[]): number | null {
  const validos = dias.filter((d) => Number.isFinite(d.passos) && d.passos >= 0);
  if (!validos.length) return null;
  return validos.reduce((s, d) => s + d.passos, 0) / validos.length;
}

/**
 * Diferença de média entre duas semanas. Exige ao menos `minDias` dias em
 * cada uma — comparar um dia com sete seria afirmar tendência sem dado.
 */
export function comparaSemanas(anterior: Dia[], atual: Dia[], minDias = 3): number | null {
  if (anterior.length < minDias || atual.length < minDias) return null;
  const a = mediaPassos(anterior);
  const b = mediaPassos(atual);
  return a === null || b === null ? null : b - a;
}

/* ───────────────────────── Formatação ───────────────────────── */

const nf = (n: number, casas = 0) =>
  n.toLocaleString('pt-BR', { minimumFractionDigits: 0, maximumFractionDigits: casas });

/** Distância ao grão da estimativa: metros de 10 em 10 abaixo de 1 km, uma casa acima. */
export function formataKm(km: number): string {
  if (!Number.isFinite(km) || km <= 0) return '0 m';
  if (km < 1) {
    const m = Math.round((km * 1000) / 10) * 10;
    return m >= 1000 ? '1 km' : `${Math.max(10, m)} m`;
  }
  return `${nf(Math.round(km * 10) / 10, 1)} km`;
}

/**
 * Passos estimados arredondados. Contagem medida (o que a pessoa digitou)
 * nunca passa por aqui — só o que a conta estimou.
 */
export function arredondaPassos(p: number): number {
  if (!Number.isFinite(p) || p <= 0) return 0;
  if (p >= 10000) return Math.round(p / 100) * 100;
  if (p >= 1000) return Math.round(p / 50) * 50;
  return Math.round(p / 10) * 10;
}

export const formataPassos = (p: number): string => nf(Math.round(p));

export function formataTempo(min: number): string {
  if (!Number.isFinite(min) || min <= 0) return '0 min';
  const m = Math.round(min);
  if (m < 1) return 'menos de 1 min';
  if (m < 60) return `${m} min`;
  const h = Math.floor(m / 60);
  const r = m % 60;
  return r === 0 ? `${h} h` : `${h}h${String(r).padStart(2, '0')}`;
}

/** Calorias: inteiro abaixo de mil, dezena acima — e faixa de 10 em 10. */
export function arredondaKcal(k: number): number {
  if (!Number.isFinite(k) || k <= 0) return 0;
  return k >= 1000 ? Math.round(k / 10) * 10 : Math.round(k);
}

export function formataFaixaKcal(min: number, max: number): string {
  const a = Math.floor(min / 10) * 10;
  const b = Math.ceil(max / 10) * 10;
  return a === b ? `~${nf(a)} kcal` : `~${nf(a)}–${nf(b)} kcal`;
}

export const formataPct = (fracao: number): string => `${Math.floor(Math.max(0, Math.min(1, fracao)) * 100)}%`;

/* ───────────────────────── Tabelas ───────────────────────── */

/* As contagens e distâncias que aparecem nas buscas (prints e exportações de 14/10/2026). */
export const PASSOS_TABELA = [1000, 2000, 3000, 4000, 5000, 6000, 7000, 8000, 9000, 10000, 12000, 13000, 15000, 20000, 30000] as const;
export const KM_TABELA = [1, 2, 3, 5, 6, 8, 10] as const;
/* "30 minutos de caminhada equivalem a quantos passos?", 15, 20, 40, 1 hora, 2 horas. */
export const MINUTOS_TABELA = [10, 15, 20, 30, 40, 60, 120] as const;
export const ALTURAS_TABELA = [150, 160, 170, 180, 190] as const;
export const PESOS_TABELA = [50, 60, 70, 80, 90, 100, 120] as const;
export const CADENCIAS_TABELA = [80, 100, 120] as const;
export const METAS_COMPARADAS = [5000, 7000, 8000, 10000, 12000] as const;

export const tabelaPassosKm = (passoCm: number) =>
  PASSOS_TABELA.map((passos) => ({ passos, km: kmDePassos(passos, passoCm) }));

export const tabelaKmPassos = (passoCm: number) =>
  KM_TABELA.map((km) => ({ km, passos: arredondaPassos(passosDeKm(km, passoCm)) }));

export const tabelaMinutos = (passoCm: number, cadencia: number) =>
  MINUTOS_TABELA.map((minutos) => {
    const passos = passosEmMinutos(minutos, cadencia);
    return { minutos, passos: arredondaPassos(passos), km: kmDePassos(passos, passoCm) };
  });

export const tabelaAlturas = (cadencia: number) =>
  ALTURAS_TABELA.map((altura) => {
    const cm = passoEstimado(cadencia, altura);
    return { altura, passoCm: cm, passosPorKm: arredondaPassos(passosDeKm(1, cm)), km10mil: kmDePassos(10000, cm) };
  });

export const tabelaPesos = (passos: number, passoCm: number, cadencia: number) =>
  PESOS_TABELA.map((peso) => ({ peso, ...kcalDePassos(passos, peso, passoCm, cadencia) }));

/** Faixa de distância para o mesmo número de passos, pela incerteza do passo. */
export const faixaKm = (passos: number, passoCm: number, incerteza = INCERTEZA_PASSO) => ({
  min: kmDePassos(passos, passoCm * (1 - incerteza)),
  max: kmDePassos(passos, passoCm * (1 + incerteza)),
});

/** Faixa de passos para a mesma distância. */
export const faixaPassos = (km: number, passoCm: number, incerteza = INCERTEZA_PASSO) => ({
  min: arredondaPassos(passosDeKm(km, passoCm * (1 + incerteza))),
  max: arredondaPassos(passosDeKm(km, passoCm * (1 - incerteza))),
});

/**
 * Faixa de km num formato só: "6,5 a 7,9 km". Depois de "entre", passe
 * `'e'`: "entre 6,5 e 7,9 km".
 */
export function formataFaixaKm(min: number, max: number, sep: 'a' | 'e' = 'a'): string {
  const a = formataKm(min);
  const b = formataKm(max);
  if (a === b) return a;
  const ma = a.endsWith(' km') && b.endsWith(' km');
  return ma ? `${a.replace(' km', '')} ${sep} ${b}` : `${a} ${sep} ${b}`;
}

/** Faixa de passos: "1.250 a 1.550 passos" (ou "entre 1.250 e 1.550 passos", com `'e'`). */
export const formataFaixaPassos = (min: number, max: number, sep: 'a' | 'e' = 'a'): string =>
  min === max ? `${formataPassos(min)} passos` : `${formataPassos(min)} ${sep} ${formataPassos(max)} passos`;

/** Faixas de passos/dia usadas nos eventos — as de Tudor-Locke & Bassett. Nunca o número exato. */
export function faixaEvento(passos: number): string {
  if (passos < 5000) return '<5k';
  if (passos < 7500) return '5-7.5k';
  if (passos < 10000) return '7.5-10k';
  if (passos < 12500) return '10-12.5k';
  return '>=12.5k';
}

export function faixaEventoKm(km: number): string {
  if (km < 2) return '<2';
  if (km < 5) return '2-5';
  if (km < 10) return '5-10';
  return '>=10';
}

/** Energia de 1 kg de gordura — entra só como simulação, com o aviso de Hall (2011). */
export const KCAL_POR_KG_GORDURA = 7700;

export const tabelaTempo = (passos: number) =>
  CADENCIAS_TABELA.map((cadencia) => ({ cadencia, minutos: minutosDePassos(passos, cadencia) }));

export const tabelaMetas = (passoCm: number, cadencia: number) =>
  METAS_COMPARADAS.map((passos) => ({
    passos,
    km: kmDePassos(passos, passoCm),
    minutos: minutosDePassos(passos, cadencia),
  }));

/** "Quantos passos tem 1 km?" não tem um número: tem uma faixa por passo. */
export const faixaPassosPorKm = (passoMinCm: number, passoMaxCm: number) => ({
  min: arredondaPassos(passosDeKm(1, passoMaxCm)),
  max: arredondaPassos(passosDeKm(1, passoMinCm)),
});
