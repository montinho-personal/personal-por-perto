/**
 * Calculadora de pace — o motor.
 *
 * "Você me diz o que sabe; a calculadora calcula o que falta." Distância,
 * tempo, pace e velocidade são quatro faces de duas grandezas: sabendo duas,
 * as outras saem por divisão. O motor faz só isso, sem modelo fisiológico.
 *
 * UNIDADES: tudo em segundos e quilômetros por dentro. Nada é arredondado
 * antes da exibição — e o arredondamento da exibição é feito sobre o total
 * de segundos, para 359,6 s virar "6:00", nunca "5:60".
 *
 * O QUE NÃO ENTRA: previsão de tempo em outra distância (Riegel e afins).
 * A projeção "se mantiver este pace" é aritmética e é chamada assim; a
 * previsão é outro modelo, com outras limitações. Ver docs/calculadora-pace.md.
 */

export const KM_POR_MILHA = 1.609344;

export interface DistanciaPronta {
  id: string;
  km: number;
  nome: string;
  /** Nome curto para o botão. */
  curto: string;
}

export const DISTANCIAS: DistanciaPronta[] = [
  { id: '1k', km: 1, nome: '1 km', curto: '1 km' },
  { id: '3k', km: 3, nome: '3 km', curto: '3 km' },
  { id: '5k', km: 5, nome: '5 km', curto: '5 km' },
  { id: '10k', km: 10, nome: '10 km', curto: '10 km' },
  { id: '15k', km: 15, nome: '15 km', curto: '15 km' },
  { id: '21k', km: 21.0975, nome: 'Meia maratona (21,1 km)', curto: 'Meia' },
  { id: '42k', km: 42.195, nome: 'Maratona (42,195 km)', curto: 'Maratona' },
];

export const distanciaPronta = (id: string): DistanciaPronta | undefined => DISTANCIAS.find((d) => d.id === id);

/** Metas comuns: atalho na ferramenta e tabela na página. Não são recomendação. */
export const METAS: { distancia: string; segundos: number; rotulo: string }[] = [
  { distancia: '5k', segundos: 20 * 60, rotulo: '5 km em 20 min' },
  { distancia: '5k', segundos: 25 * 60, rotulo: '5 km em 25 min' },
  { distancia: '5k', segundos: 30 * 60, rotulo: '5 km em 30 min' },
  { distancia: '5k', segundos: 35 * 60, rotulo: '5 km em 35 min' },
  { distancia: '10k', segundos: 40 * 60, rotulo: '10 km em 40 min' },
  { distancia: '10k', segundos: 45 * 60, rotulo: '10 km em 45 min' },
  { distancia: '10k', segundos: 50 * 60, rotulo: '10 km em 50 min' },
  { distancia: '10k', segundos: 60 * 60, rotulo: '10 km em 1 hora' },
  { distancia: '21k', segundos: 90 * 60, rotulo: 'Meia em 1h30' },
  { distancia: '21k', segundos: 105 * 60, rotulo: 'Meia em 1h45' },
  { distancia: '21k', segundos: 120 * 60, rotulo: 'Meia em 2h' },
  { distancia: '21k', segundos: 135 * 60, rotulo: 'Meia em 2h15' },
  { distancia: '42k', segundos: 180 * 60, rotulo: 'Maratona em 3h' },
  { distancia: '42k', segundos: 240 * 60, rotulo: 'Maratona em 4h' },
  { distancia: '42k', segundos: 300 * 60, rotulo: 'Maratona em 5h' },
];

/* ───────────────────────── Limites ───────────────────────── */

export const DIST_MAX_KM = 1000;
export const TEMPO_MAX_S = 99 * 3600 + 59 * 60 + 59;
/** De 1:00/km (60 km/h) a 60:00/km (1 km/h): fora disso, é erro de digitação. */
export const PACE_MIN_S = 60;
export const PACE_MAX_S = 3600;
export const VEL_MIN = 1;
export const VEL_MAX = 60;

/** Abaixo disso, mais rápido que o recorde mundial de 5 km: vale conferir. */
export const PACE_ALERTA_RAPIDO = 150;
/** Acima disso (2 km/h), mais lento que uma caminhada devagar: vale conferir. */
export const PACE_ALERTA_LENTO = 1800;

/* ───────────────────────── Entrada ───────────────────────── */

/**
 * Número em português ou não: "10,5", "10.5", "10". Rejeita letras, vazio e
 * negativo. Com `milhar`, o ponto seguido de grupos de três dígitos é
 * separador de milhar: "1.500" metros são mil e quinhentos, não 1,5 — e é
 * assim que a própria página escreve. Sem `milhar` (km, km/h), "21.097" segue
 * sendo 21,097: ninguém digita 21 mil quilômetros.
 */
export function parseNumero(bruto: string, milhar = false): number | null {
  let s = bruto.trim().replace(/\s/g, '');
  if (!s) return null;
  if (milhar && /^\d{1,3}(\.\d{3})+(,\d+)?$/.test(s)) s = s.replace(/\./g, '');
  if (!/^\d+([.,]\d+)?$/.test(s)) return null;
  const n = Number(s.replace(',', '.'));
  return Number.isFinite(n) ? n : null;
}

/** Um campo de inteiro (horas, minutos, segundos): vazio conta como zero. */
export function parseInteiro(bruto: string, max: number): number | null {
  const s = bruto.trim();
  if (!s) return 0;
  if (!/^\d{1,3}$/.test(s)) return null;
  const n = Number(s);
  return n <= max ? n : null;
}

/** Horas, minutos e segundos → segundos. Minutos e segundos até 59, salvo se for o único campo. */
export function tempoDosCampos(h: string, m: string, s: string): number | null {
  const hh = parseInteiro(h, 99);
  const ss = parseInteiro(s, 59);
  // "90 min" com horas e segundos vazios ou zerados vale: só os minutos foram digitados.
  const so = hh === 0 && ss === 0;
  const mm = parseInteiro(m, so ? 999 : 59);
  if (hh === null || mm === null || ss === null) return null;
  const total = hh * 3600 + mm * 60 + ss;
  return total > 0 && total <= TEMPO_MAX_S ? total : null;
}

/** Minutos e segundos de pace → segundos por unidade. */
export function paceDosCampos(m: string, s: string): number | null {
  const mm = parseInteiro(m, 60);
  const ss = parseInteiro(s, 59);
  if (mm === null || ss === null) return null;
  const total = mm * 60 + ss;
  return total > 0 ? total : null;
}

/** Distância numa unidade → km. */
export function paraKm(valor: number, unidade: 'km' | 'm' | 'mi'): number {
  if (unidade === 'm') return valor / 1000;
  if (unidade === 'mi') return valor * KM_POR_MILHA;
  return valor;
}

export const distanciaValida = (km: number | null): km is number =>
  km !== null && Number.isFinite(km) && km > 0 && km <= DIST_MAX_KM;
export const paceValido = (s: number | null): s is number =>
  s !== null && Number.isFinite(s) && s >= PACE_MIN_S && s <= PACE_MAX_S;
export const velocidadeValida = (v: number | null): v is number =>
  v !== null && Number.isFinite(v) && v >= VEL_MIN && v <= VEL_MAX;

/* ───────────────────────── As contas ───────────────────────── */

/** Segundos por km. */
export const paceDe = (km: number, segundos: number): number => segundos / km;
export const tempoDe = (km: number, paceSKm: number): number => km * paceSKm;
export const distanciaDe = (segundos: number, paceSKm: number): number => segundos / paceSKm;
export const velocidadeDe = (paceSKm: number): number => 3600 / paceSKm;
export const paceDaVelocidade = (kmh: number): number => 3600 / kmh;
export const pacePorMilha = (paceSKm: number): number => paceSKm * KM_POR_MILHA;

/**
 * Pace para fechar ABAIXO de uma meta ("sub 3", "sub 2"), em segundos
 * inteiros por km. Não é o pace arredondado: na maratona em 3 horas o pace
 * exato é 4:15,95, que aparece como 4:16 — e 4:16 cravado termina em 3:00:02.
 *
 * E vale a regra das provas de rua: o tempo oficial é arredondado para o
 * segundo de cima (2:52:59,97 é registrado como 2:53:00). Por isso a conta
 * pede o tempo total até a meta menos um segundo: o maior pace inteiro P com
 * P × km ≤ meta − 1.
 */
export const paceParaFicarAbaixo = (km: number, segundos: number): number => Math.floor((segundos - 1) / km + 1e-9);

/** Alerta de digitação: não bloqueia, só pede para conferir. */
export function alerta(paceSKm: number, km?: number): string | null {
  // Em tiro curto (400 m em 58 s), passar de 2:30/km é normal: o recorde de 5 km só vale de 3 km para cima.
  if (paceSKm < PACE_ALERTA_RAPIDO && (km === undefined || km >= 3))
    return `Esse ritmo é mais rápido que o recorde mundial de 5 km. Confira a distância e o tempo informados.`;
  if (paceSKm > PACE_ALERTA_LENTO)
    return 'Esse ritmo é mais lento que 2 km/h, abaixo de uma caminhada devagar. Confira a distância e o tempo informados.';
  return null;
}

/* ───────────────────────── Parciais ───────────────────────── */

export interface Parcial {
  /** Distância acumulada, em km. */
  km: number;
  rotulo: string;
  /** Tempo deste trecho. */
  trecho: number;
  acumulado: number;
}

const rotuloKm = (km: number): string => `${formataKm(km)} km`;
/** O último trecho leva até três casas: 5,001 km não pode aparecer como "5 km" repetido. */
const rotuloFinal = (km: number): string =>
  Math.abs(km - 42.195) < 1e-9 || Math.abs(km - 21.0975) < 1e-9
    ? rotuloKm(km)
    : `${km.toLocaleString('pt-BR', { maximumFractionDigits: 3 })} km`;

/** Parcial por quilômetro, com o último trecho fracionário quando houver. */
export function parciaisPorKm(km: number, paceSKm: number): Parcial[] {
  const out: Parcial[] = [];
  const inteiros = Math.floor(km + 1e-9);
  for (let i = 1; i <= inteiros; i++) out.push({ km: i, rotulo: rotuloKm(i), trecho: paceSKm, acumulado: i * paceSKm });
  const resto = km - inteiros;
  // Menos de meio metro de sobra (5,0004 km) não vira linha "5 km · 0:00".
  if (resto >= 0.0005) out.push({ km, rotulo: rotuloFinal(km), trecho: resto * paceSKm, acumulado: km * paceSKm });
  return out;
}

/** Até quantos km a tabela mostra todos os quilômetros por padrão. */
export const LIMITE_POR_KM = 25;

/** Pontos-chave para prova longa: 1, 5, 10, 15, 20, meia, 25… e a chegada. */
export function parciaisChave(km: number, paceSKm: number): Parcial[] {
  if (km <= LIMITE_POR_KM) return parciaisPorKm(km, paceSKm);
  const marcos = new Set<number>([1]);
  for (let k = 5; k < km - 1e-9; k += 5) marcos.add(k);
  if (km > 21.0975) marcos.add(21.0975);
  // Ultramaratona: a passagem da maratona é o ponto que todo mundo quer ver.
  if (km > 42.195 + 1e-9) marcos.add(42.195);
  marcos.add(km);
  const lista = [...marcos].sort((a, b) => a - b);
  let anterior = 0;
  return lista.map((k) => {
    const p: Parcial = {
      km: k,
      rotulo: k === 21.0975 ? 'Meia (21,1 km)' : k === 42.195 && k !== km ? 'Maratona (42,195 km)' : k === km ? rotuloFinal(k) : rotuloKm(k),
      trecho: (k - anterior) * paceSKm,
      acumulado: k * paceSKm,
    };
    anterior = k;
    return p;
  });
}

/** Tempo para os trechos de pista e de tiro. */
export const TRECHOS_PISTA = [200, 400, 800, 1000] as const;
export const pista = (paceSKm: number): { metros: number; segundos: number }[] =>
  TRECHOS_PISTA.map((m) => ({ metros: m, segundos: (paceSKm * m) / 1000 }));

/** "Se eu mantiver este pace": aritmética, não previsão. */
export const DISTANCIAS_PROJECAO = [1, 5, 10, 21.0975, 42.195] as const;
export const projecao = (paceSKm: number): { km: number; segundos: number }[] =>
  DISTANCIAS_PROJECAO.map((km) => ({ km, segundos: km * paceSKm }));

/* ───────────────────────── Comparar ───────────────────────── */

export interface Comparacao {
  a: number;
  b: number;
  /** Positivo = B é mais rápido. */
  diferencaPorKm: number;
  /** Diferença em relação ao pace A, em fração (0,083 = 8,3%). */
  fracao: number;
  porDistancia: { km: number; segundos: number }[];
}

export function comparar(paceA: number, paceB: number): Comparacao {
  const d = paceA - paceB;
  return {
    a: paceA,
    b: paceB,
    diferencaPorKm: d,
    fracao: d / paceA,
    porDistancia: DISTANCIAS_PROJECAO.filter((k) => k >= 5).map((km) => ({ km, segundos: d * km })),
  };
}

/** Atalhos de "quanto ganho se baixar X s/km". */
export const REDUCOES = [5, 10, 15, 30] as const;

/* ───────────────────────── Esteira ───────────────────────── */

/** Pace → velocidade da esteira, de 3:00 a 9:00, de 15 em 15 s (a busca pede "pace 3 em km/h"). */
export function tabelaEsteira(): { pace: number; kmh: number }[] {
  const out: { pace: number; kmh: number }[] = [];
  for (let p = 180; p <= 540; p += 15) out.push({ pace: p, kmh: velocidadeDe(p) });
  return out;
}

/** Velocidade da esteira → pace, de 5 a 20 km/h, de meio em meio. */
export function tabelaVelocidades(): { kmh: number; pace: number }[] {
  const out: { kmh: number; pace: number }[] = [];
  for (let v = 5; v <= 20 + 1e-9; v += 0.5) out.push({ kmh: v, pace: paceDaVelocidade(v) });
  return out;
}

/**
 * Tempo de prova → pace e velocidade, de `passo` em `passo` minutos. A busca
 * pergunta "5 km em 23 minutos, qual o pace?" para cada minuto de 15 a 40, e
 * "10 km em 1 hora e 10" para os de 10 km: uma tabela responde todas, sem uma
 * página por tempo.
 */
export function tabelaTempos(km: number, deMin: number, ateMin: number, passo = 1): { segundos: number; pace: number; kmh: number }[] {
  const out: { segundos: number; pace: number; kmh: number }[] = [];
  for (let m = deMin; m <= ateMin; m += passo) {
    const pace = paceDe(km, m * 60);
    out.push({ segundos: m * 60, pace, kmh: velocidadeDe(pace) });
  }
  return out;
}

/** Tabela de pace: tempo para 5, 10, meia e maratona, de 3:30 a 8:00, de 15 em 15 s. */
export function tabelaPace(): { pace: number; tempos: number[] }[] {
  const out: { pace: number; tempos: number[] }[] = [];
  for (let p = 210; p <= 480; p += 15) out.push({ pace: p, tempos: [5, 10, 21.0975, 42.195].map((k) => k * p) });
  return out;
}

/* ───────────────────────── Formatação ───────────────────────── */

/** Segundos por km → "5:30". Arredonda o total, nunca "5:60". */
export function formataPace(seg: number): string {
  if (!Number.isFinite(seg) || seg <= 0) return '—';
  const t = Math.round(seg);
  return `${Math.floor(t / 60)}:${String(t % 60).padStart(2, '0')}`;
}

/** Segundos → "27:30" ou "1:45:00". Com `semZero`, "0:45" vira "45 s" (trechos de pista). */
export function formataTempo(seg: number): string {
  if (!Number.isFinite(seg) || seg < 0) return '—';
  const t = Math.round(seg);
  const h = Math.floor(t / 3600);
  const m = Math.floor((t % 3600) / 60);
  const s = t % 60;
  if (h > 0) return `${h}:${String(m).padStart(2, '0')}:${String(s).padStart(2, '0')}`;
  return `${m}:${String(s).padStart(2, '0')}`;
}

/** Diferença com sinal, para o comparador: "2:30", "−0:10". */
export const formataDiferenca = (seg: number): string => `${seg < 0 ? '−' : ''}${formataTempo(Math.abs(seg))}`;

/** Por extenso, para frases e leitor de tela: "27 min 30 s", "1 h 45 min", "4 h". */
export function formataTempoExtenso(seg: number): string {
  if (!Number.isFinite(seg) || seg < 0) return '—';
  const t = Math.round(seg);
  const h = Math.floor(t / 3600);
  const m = Math.floor((t % 3600) / 60);
  const s = t % 60;
  const partes: string[] = [];
  if (h) partes.push(`${h} h`);
  if (m) partes.push(`${m} min`);
  if (s || !partes.length) partes.push(`${s} s`);
  return partes.join(' ');
}

/** Velocidade com até duas casas: 12 → "12"; 10,909 → "10,91". */
export const formataVelocidade = (kmh: number, casas = 2): string =>
  Number.isFinite(kmh) ? kmh.toLocaleString('pt-BR', { maximumFractionDigits: casas }) : '—';

/** Painel de esteira: uma casa. */
export const formataEsteira = (kmh: number): string =>
  !Number.isFinite(kmh) ? '—' : kmh.toLocaleString('pt-BR', { minimumFractionDigits: 1, maximumFractionDigits: 1 });

/** Distância: "5", "21,1", "8,4", "42,195" (maratona fica com as três casas). */
export function formataKm(km: number): string {
  if (Math.abs(km - 42.195) < 1e-9) return '42,195';
  if (Math.abs(km - 21.0975) < 1e-9) return '21,1';
  return km.toLocaleString('pt-BR', { maximumFractionDigits: 2 });
}

/* ───────────────────────── Analytics ───────────────────────── */

export function categoriaDistancia(km: number): string {
  const perto = (x: number) => Math.abs(km - x) < 0.05;
  if (perto(1)) return '1k';
  if (perto(3)) return '3k';
  if (perto(5)) return '5k';
  if (perto(10)) return '10k';
  if (perto(15)) return '15k';
  if (perto(21.0975)) return '21k';
  if (perto(42.195)) return '42k';
  return 'outra';
}

/** "5_6" = entre 5 e 6 min/km. Nunca o pace exato. */
export function faixaPace(paceSKm: number): string {
  if (!Number.isFinite(paceSKm) || paceSKm <= 0) return 'invalido';
  const m = Math.floor(paceSKm / 60);
  if (m < 3) return 'abaixo_3';
  if (m >= 12) return 'acima_12';
  return `${m}_${m + 1}`;
}
