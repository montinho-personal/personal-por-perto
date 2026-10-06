/**
 * Composição corporal — o motor.
 *
 * Tudo aqui é ESTIMATIVA e INDICADOR, nunca diagnóstico. O motor calcula;
 * a página e a interface decidem o tom. Métodos, fontes e o porquê de cada
 * escolha estão em docs/calculadora-composicao-corporal.md (seção 4).
 *
 * Três métodos de percentual de gordura, nunca misturados nem somados:
 *   - RFM (Woolcott & Bergman, 2018): cintura + altura + sexo. O principal.
 *   - Marinha dos EUA (Hodgdon & Beckett, 1984): equação oficial em
 *     polegadas, com o protocolo de medidas dela.
 *   - Dobras cutâneas (Jackson & Pollock 1978; Jackson, Pollock & Ward
 *     1980), 3 ou 7 dobras, com a densidade convertida por Siri (1961).
 *
 * Unidades: kg, cm, mm (dobras), anos. Nada é arredondado antes da exibição.
 */

export type Sexo = 'm' | 'f';

/* ───────────────────────── Entrada ───────────────────────── */

/** Número em português ou não: "80,5", "80.5". Rejeita letras, vazio e negativo. */
export function parseNumero(bruto: string): number | null {
  const s = bruto.trim().replace(/\s/g, '').replace(/[.,]$/, '');
  if (!s) return null;
  if (!/^\d+([.,]\d+)?$/.test(s)) return null;
  const n = Number(s.replace(',', '.'));
  return Number.isFinite(n) ? n : null;
}

/** Limites plausíveis: fora deles, "confira este valor" (nunca julgamento). */
export const LIMITES = {
  alturaCm: [100, 250],
  pesoKg: [25, 350],
  cinturaCm: [40, 250],
  quadrilCm: [50, 250],
  pescocoCm: [20, 80],
  idade: [2, 110],
  dobraMm: [2, 80],
} as const;

export type Campo = keyof typeof LIMITES;
export const dentro = (campo: Campo, v: number | null): v is number =>
  v !== null && Number.isFinite(v) && v >= LIMITES[campo][0] && v <= LIMITES[campo][1];

/**
 * Altura em metros digitada no campo de cm ("1,75"): converte e avisa.
 * Devolve a altura em cm e se houve conversão, para a interface perguntar
 * "Você quis dizer 175 cm?".
 */
export function normalizaAltura(v: number | null): { cm: number; convertida: boolean } | null {
  if (v === null || !Number.isFinite(v) || v <= 0) return null;
  if (v >= 1 && v < 2.6) return { cm: v * 100, convertida: true };
  return { cm: v, convertida: false };
}

/* ───────────────────────── Percentual de gordura ───────────────────────── */

/** Faixa provável mostrada em torno da estimativa: ±4 pontos (SEE ~3,5 com medidor treinado). */
export const INCERTEZA_PONTOS = 4;

export interface Estimativa {
  /** Percentual estimado, sem arredondar. */
  pct: number;
  min: number;
  max: number;
}

const comFaixa = (pct: number): Estimativa => ({
  pct,
  min: Math.max(2, pct - INCERTEZA_PONTOS),
  max: Math.min(70, pct + INCERTEZA_PONTOS),
});

/**
 * RFM — Relative Fat Mass (Woolcott & Bergman, Sci Rep 2018;8:10980).
 * RFM = 64 − 20 × (altura ÷ cintura) + 12 × sexo (0 homem, 1 mulher).
 * Cintura no protocolo NHANES: logo acima da crista ilíaca.
 */
export function rfm(alturaCm: number, cinturaCm: number, sexo: Sexo): Estimativa {
  const pct = 64 - 20 * (alturaCm / cinturaCm) + (sexo === 'f' ? 12 : 0);
  return comFaixa(pct);
}

export const CM_POR_POLEGADA = 2.54;

/**
 * Método da Marinha dos EUA (Hodgdon & Beckett, 1984), na forma oficial do
 * DoD, em polegadas e log10. A versão "métrica por densidade" que circula
 * não é algebricamente idêntica; esta é a de referência.
 *   homens: 86,010·log(abdômen − pescoço) − 70,041·log(altura) + 36,76
 *   mulheres: 163,205·log(cintura + quadril − pescoço) − 97,684·log(altura) − 78,387
 * Devolve null quando as medidas não fecham (abdômen menor que o pescoço).
 */
export function marinha(
  sexo: Sexo,
  alturaCm: number,
  cinturaCm: number,
  pescocoCm: number,
  quadrilCm?: number,
): Estimativa | null {
  const pol = (cm: number) => cm / CM_POR_POLEGADA;
  const h = pol(alturaCm);
  if (sexo === 'm') {
    const d = pol(cinturaCm) - pol(pescocoCm);
    if (!(d > 0)) return null;
    return comFaixa(86.01 * Math.log10(d) - 70.041 * Math.log10(h) + 36.76);
  }
  if (quadrilCm === undefined) return null;
  const s = pol(cinturaCm) + pol(quadrilCm) - pol(pescocoCm);
  if (!(s > 0)) return null;
  return comFaixa(163.205 * Math.log10(s) - 97.684 * Math.log10(h) - 78.387);
}

export type Dobras = 3 | 7;

/**
 * Densidade corporal por dobras cutâneas (mm), idade em anos.
 *   homens (Jackson & Pollock 1978):
 *     7 dobras: 1,112 − 0,00043499·S + 0,00000055·S² − 0,00028826·idade
 *     3 dobras (peitoral, abdominal, coxa): 1,10938 − 0,0008267·S + 0,0000016·S² − 0,0002574·idade
 *   mulheres (Jackson, Pollock & Ward 1980):
 *     7 dobras: 1,097 − 0,00046971·S + 0,00000056·S² − 0,00012828·idade
 *     3 dobras (tríceps, suprailíaca, coxa): 1,0994921 − 0,0009929·S + 0,0000023·S² − 0,0001392·idade
 */
export function densidadeDobras(sexo: Sexo, n: Dobras, soma: number, idade: number): number {
  if (sexo === 'm') {
    return n === 7
      ? 1.112 - 0.00043499 * soma + 0.00000055 * soma ** 2 - 0.00028826 * idade
      : 1.10938 - 0.0008267 * soma + 0.0000016 * soma ** 2 - 0.0002574 * idade;
  }
  return n === 7
    ? 1.097 - 0.00046971 * soma + 0.00000056 * soma ** 2 - 0.00012828 * idade
    : 1.0994921 - 0.0009929 * soma + 0.0000023 * soma ** 2 - 0.0001392 * idade;
}

/** Siri (1961): %G = 495 ÷ densidade − 450. É a conversão usada por Jackson & Pollock. */
export const siri = (densidade: number): number => 495 / densidade - 450;

export const dobrasEstimativa = (sexo: Sexo, n: Dobras, soma: number, idade: number): Estimativa =>
  comFaixa(siri(densidadeDobras(sexo, n, soma, idade)));

/** Quais dobras cada equação pede, na ordem em que a interface mostra. */
export const DOBRAS_POR_EQUACAO: Record<Sexo, Record<Dobras, DobraId[]>> = {
  m: {
    3: ['peitoral', 'abdominal', 'coxa'],
    7: ['peitoral', 'axilar', 'triceps', 'subescapular', 'abdominal', 'suprailiaca', 'coxa'],
  },
  f: {
    3: ['triceps', 'suprailiaca', 'coxa'],
    7: ['peitoral', 'axilar', 'triceps', 'subescapular', 'abdominal', 'suprailiaca', 'coxa'],
  },
};

export type DobraId = 'peitoral' | 'axilar' | 'triceps' | 'subescapular' | 'abdominal' | 'suprailiaca' | 'coxa';

/** Faixas de idade das amostras de desenvolvimento das equações de dobras. */
export const IDADE_DOBRAS: Record<Sexo, [number, number]> = { m: [18, 61], f: [18, 55] };

/* ───────────────────────── Massas ───────────────────────── */

export const massaGorda = (pesoKg: number, pct: number): number => (pesoKg * pct) / 100;
export const massaLivreDeGordura = (pesoKg: number, pct: number): number => pesoKg - massaGorda(pesoKg, pct);

/** Índice de massa livre de gordura (kg/m²): os quilos de MLG só dizem algo junto com a altura. */
export const ffmi = (mlgKg: number, alturaCm: number): number => mlgKg / (alturaCm / 100) ** 2;

/** Medianas de FFMI aos 18–34 anos (Schutz, Kyle & Pichard, Int J Obes 2002), população suíça. */
export const FFMI_MEDIANA_JOVEM: Record<Sexo, number> = { m: 18.9, f: 15.4 };

/**
 * Boer (1984): massa magra estimada SÓ por peso e altura — estimativa
 * populacional, que não usa as medidas de quem calcula.
 *   homens 0,407·peso + 0,267·altura − 19,2; mulheres 0,252·peso + 0,473·altura − 48,3
 */
export const boer = (sexo: Sexo, pesoKg: number, alturaCm: number): number =>
  sexo === 'm' ? 0.407 * pesoKg + 0.267 * alturaCm - 19.2 : 0.252 * pesoKg + 0.473 * alturaCm - 48.3;

/* ───────────────────────── IMC ───────────────────────── */

export const imc = (pesoKg: number, alturaCm: number): number => pesoKg / (alturaCm / 100) ** 2;
/** O IMC como aparece na tela (uma casa): é ele que se compara com os cortes. */
export const imcExibido = (v: number): number => Math.round(v * 10) / 10;

export interface Faixa {
  /** Identificador estável (analytics e testes). */
  id: string;
  /** Rótulo da fonte, dito como dela. */
  rotulo: string;
  /** Texto da faixa ("25,0 a 29,9"). */
  faixa: string;
}

/** Faixas da OMS para adultos — as mesmas para homens e mulheres. */
export const FAIXAS_IMC_OMS: { ate: number; id: string; rotulo: string; faixa: string }[] = [
  { ate: 18.5, id: 'abaixo', rotulo: 'baixo peso', faixa: 'abaixo de 18,5' },
  { ate: 25, id: 'referencia', rotulo: 'peso adequado', faixa: '18,5 a 24,9' },
  { ate: 30, id: 'sobrepeso', rotulo: 'sobrepeso', faixa: '25,0 a 29,9' },
  { ate: 35, id: 'obesidade1', rotulo: 'obesidade grau I', faixa: '30,0 a 34,9' },
  { ate: 40, id: 'obesidade2', rotulo: 'obesidade grau II', faixa: '35,0 a 39,9' },
  { ate: Infinity, id: 'obesidade3', rotulo: 'obesidade grau III', faixa: '40 ou mais' },
];

/** Idosos (60+): Lipschitz 1994, adotado pelo SISVAN/Ministério da Saúde. */
export const FAIXAS_IMC_IDOSO: { ate: number; id: string; rotulo: string; faixa: string }[] = [
  { ate: 22.0000001, id: 'abaixo', rotulo: 'baixo peso', faixa: '22 ou menos' },
  { ate: 27, id: 'referencia', rotulo: 'peso adequado', faixa: 'acima de 22 e abaixo de 27' },
  { ate: Infinity, id: 'sobrepeso', rotulo: 'sobrepeso', faixa: '27 ou mais' },
];

/**
 * Faixa do IMC conforme a idade. Menor de 18: null — o IMC de crianças e
 * adolescentes se lê por idade e sexo (curvas da OMS), não pela tabela adulta.
 */
export function faixaImc(valor: number, idade: number | null): (Faixa & { fonte: 'oms' | 'idoso' }) | null {
  if (idade !== null && idade < 18) return null;
  // A tabela se lê com uma casa: 24,98 aparece como 25,0 e é classificado como 25,0.
  valor = imcExibido(valor);
  const idoso = idade !== null && idade >= 60;
  const tabela = idoso ? FAIXAS_IMC_IDOSO : FAIXAS_IMC_OMS;
  const f = tabela.find((x) => valor < x.ate)!;
  return { id: f.id, rotulo: f.rotulo, faixa: f.faixa, fonte: idoso ? 'idoso' : 'oms' };
}

/** Faixa de peso em que o IMC fica entre 18,5 e 24,9 para uma altura (a resposta honesta a "peso ideal"). */
export function pesoNaFaixaImc(alturaCm: number, idade: number | null = null): { min: number; max: number } {
  const m2 = (alturaCm / 100) ** 2;
  if (idade !== null && idade >= 60) return { min: 22 * m2, max: 27 * m2 };
  return { min: 18.5 * m2, max: 24.9 * m2 };
}

/* ───────────────────────── Cintura ───────────────────────── */

/** Relação cintura/altura (RCE, RCA), mesma unidade. */
export const rce = (cinturaCm: number, alturaCm: number): number => cinturaCm / alturaCm;

/** A cintura que dá 0,5 para a altura: "mantenha a cintura abaixo da metade da altura". */
export const cinturaMetadeDaAltura = (alturaCm: number): number => alturaCm / 2;

/** NICE NG246: 0,40–0,49 saudável; 0,50–0,59 aumentada; 0,60 ou mais, alta. */
export function faixaRce(valor: number): Faixa {
  valor = Math.round(valor * 100) / 100; // lida com as duas casas que aparecem
  if (valor < 0.4) return { id: 'abaixo04', rotulo: 'abaixo da faixa descrita pela diretriz', faixa: 'abaixo de 0,40' };
  if (valor < 0.5) return { id: 'saudavel', rotulo: 'faixa saudável', faixa: '0,40 a 0,49' };
  if (valor < 0.6) return { id: 'aumentada', rotulo: 'adiposidade central aumentada', faixa: '0,50 a 0,59' };
  return { id: 'alta', rotulo: 'adiposidade central alta', faixa: '0,60 ou mais' };
}

/** Cortes de cintura da OMS (Lean et al. 1995): 94/102 cm homens, 80/88 cm mulheres. */
export const CORTES_CINTURA: Record<Sexo, [number, number]> = { m: [94, 102], f: [80, 88] };

export function faixaCintura(cinturaCm: number, sexo: Sexo): Faixa {
  cinturaCm = Math.round(cinturaCm * 10) / 10; // como aparece na tela
  const [a, b] = CORTES_CINTURA[sexo];
  if (cinturaCm < a) return { id: 'abaixo', rotulo: 'abaixo do primeiro corte', faixa: `abaixo de ${a} cm` };
  if (cinturaCm < b) return { id: 'aumentado', rotulo: 'risco aumentado', faixa: `${a} a ${b - 1} cm` };
  return { id: 'muito', rotulo: 'risco muito aumentado', faixa: `${b} cm ou mais` };
}

/** Relação cintura/quadril. */
export const rcq = (cinturaCm: number, quadrilCm: number): number => cinturaCm / quadrilCm;

/** OMS 2008: a partir de 0,90 (homens) e 0,85 (mulheres), risco metabólico substancialmente aumentado. */
export const CORTE_RCQ: Record<Sexo, number> = { m: 0.9, f: 0.85 };

export function faixaRcq(valor: number, sexo: Sexo): Faixa {
  valor = Math.round(valor * 100) / 100; // como aparece na tela
  const c = CORTE_RCQ[sexo];
  const fmt = c.toLocaleString('pt-BR', { minimumFractionDigits: 2 });
  return valor < c
    ? { id: 'abaixo', rotulo: 'abaixo do corte da OMS', faixa: `abaixo de ${fmt}` }
    : { id: 'acima', rotulo: 'no corte da OMS ou acima', faixa: `${fmt} ou mais` };
}

/* ───────────────────────── Referência de %G ───────────────────────── */

/**
 * Gallagher et al. (AJCN 2000;72:694): percentual de gordura que corresponde,
 * em média, ao IMC de 18,5 a 24,9, por sexo e idade. Varia com a
 * ancestralidade (asiáticos têm %G mais alto para o mesmo IMC).
 */
export const GALLAGHER: { de: number; ate: number; m: [number, number]; f: [number, number] }[] = [
  { de: 20, ate: 39, m: [8, 19], f: [21, 33] },
  { de: 40, ate: 59, m: [11, 22], f: [23, 34] },
  { de: 60, ate: 79, m: [13, 25], f: [24, 36] },
];

export function referenciaGordura(sexo: Sexo, idade: number | null): { min: number; max: number; de: number; ate: number } | null {
  if (idade === null || idade < 18) return null;
  // 18 e 19 anos usam a faixa de 20–39: a mais próxima, dita como tal na interface.
  const linha = GALLAGHER.find((g) => idade <= g.ate) ?? null;
  if (!linha || idade > 79) return null;
  return { min: linha[sexo][0], max: linha[sexo][1], de: linha.de, ate: linha.ate };
}

export function posicaoNaReferencia(pct: number, ref: { min: number; max: number }): 'abaixo' | 'dentro' | 'acima' {
  if (pct < ref.min) return 'abaixo';
  if (pct > ref.max) return 'acima';
  return 'dentro';
}

/* ───────────────────────── Evolução ───────────────────────── */

export interface Avaliacao {
  /** ISO, AAAA-MM-DD. */
  data: string;
  pesoKg?: number;
  alturaCm?: number;
  cinturaCm?: number;
  quadrilCm?: number;
  pescocoCm?: number;
  /** Percentual estimado e o método que o gerou: comparar só entre métodos iguais. */
  pct?: number;
  metodo?: 'rfm' | 'marinha' | 'dobras3' | 'dobras7';
}

/** Cintura: abaixo disso, a diferença cabe no erro típico da fita (1–2 cm). Heurística declarada. */
export const LIMIAR_CINTURA_CM = 2;
/** Percentual estimado: abaixo disso, cabe no erro entre duas medidas no mesmo protocolo. */
export const LIMIAR_PCT = 2;
/** Peso "quase igual": menos de 1 kg de diferença (água e intestino mexem nisso de um dia para outro). */
export const LIMIAR_PESO_KG = 1;

export interface Diferenca {
  antes: number;
  depois: number;
  delta: number;
  /** A mudança passa do erro típico de medida? */
  alemDoErro: boolean;
}

const dif = (a: number | undefined, b: number | undefined, limiar: number): Diferenca | null =>
  a === undefined || b === undefined ? null : { antes: a, depois: b, delta: b - a, alemDoErro: Math.abs(b - a) >= limiar };

export interface Comparacao {
  dias: number;
  peso: Diferenca | null;
  cintura: Diferenca | null;
  quadril: Diferenca | null;
  /** Só quando as duas avaliações usaram o mesmo método. */
  pct: Diferenca | null;
  metodoDiferente: boolean;
  /** Leitura em texto, sem afirmar causa. */
  leitura: string | null;
}

export function diasEntre(a: string, b: string): number {
  const ms = Date.parse(`${b}T12:00:00`) - Date.parse(`${a}T12:00:00`);
  return Math.round(ms / 86_400_000);
}

export function comparar(antes: Avaliacao, depois: Avaliacao): Comparacao {
  const mesmoMetodo = !!antes.metodo && antes.metodo === depois.metodo;
  const c: Comparacao = {
    dias: diasEntre(antes.data, depois.data),
    peso: dif(antes.pesoKg, depois.pesoKg, LIMIAR_PESO_KG),
    cintura: dif(antes.cinturaCm, depois.cinturaCm, LIMIAR_CINTURA_CM),
    quadril: dif(antes.quadrilCm, depois.quadrilCm, LIMIAR_CINTURA_CM),
    pct: mesmoMetodo ? dif(antes.pct, depois.pct, LIMIAR_PCT) : null,
    metodoDiferente: !!antes.metodo && !!depois.metodo && antes.metodo !== depois.metodo,
    leitura: null,
  };
  c.leitura = leitura(c);
  return c;
}

/**
 * A frase da evolução. Nunca afirma recomposição: as medidas não separam
 * gordura de músculo. Só descreve o que mudou e o que é compatível com isso.
 */
export function leitura(c: Comparacao): string | null {
  const p = c.peso;
  const w = c.cintura;
  if (!w) return null;
  const pesoParado = p ? !p.alemDoErro : false;
  if (w.alemDoErro && w.delta < 0 && pesoParado)
    return 'Seu peso quase não mudou, mas a cintura diminuiu além do erro típico da fita. A combinação é compatível com mudança na composição corporal — mas essas medidas, sozinhas, não dizem quanto foi gordura e quanto foi músculo.';
  if (w.alemDoErro && w.delta < 0 && p && p.delta < 0)
    return 'Peso e cintura diminuíram. A cintura costuma acompanhar a gordura da região abdominal, por isso vale seguir medindo as duas.';
  if (w.alemDoErro && w.delta < 0)
    return 'A cintura diminuiu além do erro típico da fita.';
  if (!w.alemDoErro && p && p.alemDoErro && p.delta < 0)
    return 'O peso diminuiu, mas a cintura mudou menos do que o erro típico da fita. Vale medir de novo no mesmo ponto e nas mesmas condições.';
  if (!w.alemDoErro)
    return 'A cintura mudou menos do que o erro típico da fita (1 a 2 cm): por enquanto, é cedo para ler tendência.';
  if (w.delta > 0)
    return 'A cintura aumentou além do erro típico da fita. Uma medida isolada não define tendência: vale conferir na próxima, no mesmo ponto e nas mesmas condições.';
  return null;
}

/* ───────────────────────── Analytics (só categoria) ───────────────────────── */

/** Faixa de %G em blocos de 5 ("15_20"); nunca o valor. */
export function faixaPctAnalytics(pct: number): string {
  if (!Number.isFinite(pct)) return 'invalido';
  const b = Math.floor(pct / 5) * 5;
  if (b < 5) return 'abaixo_5';
  if (b >= 50) return 'acima_50';
  return `${b}_${b + 5}`;
}

/* ───────────────────────── Formatação ───────────────────────── */

const num = (v: number, casas: number) =>
  v.toLocaleString('pt-BR', { minimumFractionDigits: casas, maximumFractionDigits: casas });

/** Percentual: inteiro. Falsa precisão é o defeito clássico dessas calculadoras. */
export const formataPct = (v: number): string => (Number.isFinite(v) ? `${Math.round(v)}%` : '—');
export const formataFaixaPct = (min: number, max: number): string => `${Math.round(min)}% a ${Math.round(max)}%`;
/** Quilos: uma casa. */
export const formataKg = (v: number): string => (Number.isFinite(v) ? `${num(v, 1)} kg` : '—');
/** IMC: uma casa, como a OMS escreve. */
export const formataImc = (v: number): string => (Number.isFinite(v) ? num(v, 1) : '—');
/** Razões: duas casas (0,46). */
export const formataRazao = (v: number): string => (Number.isFinite(v) ? num(v, 2) : '—');
export const formataCm = (v: number): string =>
  Number.isFinite(v) ? `${v.toLocaleString('pt-BR', { maximumFractionDigits: 1 })} cm` : '—';
/** Diferença com sinal: "−4 cm", "+1,2 kg". */
export function formataDelta(v: number, unidade: 'kg' | 'cm' | 'pp'): string {
  if (!Number.isFinite(v)) return '—';
  const casas = unidade === 'cm' ? (Number.isInteger(Math.round(v * 10) / 10) ? 0 : 1) : 1;
  const abs = num(Math.abs(v), casas);
  const sinal = v > 0.0001 ? '+' : v < -0.0001 ? '−' : '';
  if (unidade === 'pp') return `${sinal}${abs} ${abs === '1,0' ? 'ponto' : 'pontos'}`;
  return `${sinal}${abs} ${unidade}`;
}
