/**
 * O motor da calculadora de emagrecimento (tempo até a meta).
 *
 * A PERGUNTA
 * "Em quanto tempo eu chego ao meu peso?" — a busca "calculadora de
 * emagrecimento" (prints de 22/10/2026) pede tempo, déficit e calorias
 * por dia. A conta que quase toda calculadora faz é a linear: quilos ×
 * 7.700 kcal ÷ déficit. Ela promete demais, porque ignora que o gasto do
 * dia cai junto com o peso (Hall et al., 2011).
 *
 * O QUE ESTA CONTA FAZ
 *   1. gasto inicial = metabolismo de repouso (Mifflin-St Jeor) × o meio da
 *      faixa de atividade do estilo de vida (FAO/OMS/UNU) — o mesmo motor
 *      da calculadora de gasto calórico diário;
 *   2. consumo do plano = gasto inicial − déficit escolhido, FIXO;
 *   3. dia a dia, o gasto é recalculado com o peso novo; o déficit real é
 *      o gasto do dia menos o consumo, vezes a constância (nos dias fora do
 *      plano, a conta assume manutenção);
 *   4. cada 7.700 kcal de déficit acumulado tiram 1 kg.
 *
 * Por causa do passo 3, o ritmo desacelera ao longo do caminho — e, com um
 * déficit fixo, o peso tende a estabilizar num ponto de equilíbrio. Se a
 * meta fica abaixo desse ponto, a conta diz isso em vez de inventar prazo.
 *
 * O QUE ELA NÃO FAZ
 * Não modela as outras adaptações do corpo (a queda de gasto além do que o
 * peso explica, a mudança de composição), então ainda é otimista. Não é
 * plano alimentar: a dieta é com o nutricionista.
 */
import { estilo, metabolismoRepouso, type Sexo } from '../calorias/gastoDiario';

export { ESTILOS, estilo, metabolismoRepouso, type Sexo } from '../calorias/gastoDiario';

/* ───────────────────────── Constantes ───────────────────────── */

/** Energia de 1 kg de peso perdido, a regra clássica. A página diz que é aproximação. */
export const KCAL_POR_KG = 7700;

/** Teto da simulação: três anos. Além disso, a conta não tem nada útil a dizer. */
export const DIAS_MAX = 3 * 365;

export const META_MIN = 35;

/** IMC abaixo de 18,5 é baixo peso pela classificação da OMS. */
export const IMC_BAIXO_PESO = 18.5;

export interface Deficit {
  id: string;
  nome: string;
  kcal: number;
  leitura: string;
}

export const DEFICITS: Deficit[] = [
  {
    id: 'leve',
    nome: 'Déficit leve',
    kcal: 300,
    leitura: 'Corte pequeno, fácil de sustentar. O prazo é mais longo.',
  },
  {
    id: 'moderado',
    nome: 'Moderado',
    kcal: 500,
    leitura: 'O corte mais usado como referência: cerca de meio quilo por semana no começo.',
  },
  {
    id: 'firme',
    nome: 'Firme',
    kcal: 750,
    leitura: 'Corte maior, mais rápido e mais difícil de manter. Pede atenção a fome, sono e treino.',
  },
];

export const DEFICIT_PADRAO = 'moderado';
export const deficit = (id: string): Deficit => DEFICITS.find((d) => d.id === id) ?? DEFICITS[1];

/** Em quantos dias da semana o plano acontece de verdade. */
export const CONSTANCIAS = [0.6, 0.75, 0.9, 1] as const;
export const CONSTANCIA_PADRAO = 0.9;

/* ───────────────────────── Validação ───────────────────────── */

export const metaValida = (meta: number | null, pesoAtual: number): meta is number =>
  meta !== null && Number.isFinite(meta) && meta >= META_MIN && meta < pesoAtual;

export const imc = (pesoKg: number, alturaCm: number): number => pesoKg / (alturaCm / 100) ** 2;

/** O peso que dá IMC 18,5 na altura — abaixo dele, a meta é baixo peso. */
export const pesoImcMinimo = (alturaCm: number): number => IMC_BAIXO_PESO * (alturaCm / 100) ** 2;

/* ───────────────────────── O cálculo ───────────────────────── */

export interface PontoCurva {
  mes: number;
  pesoKg: number;
}

export interface Plano {
  pesoInicial: number;
  pesoMeta: number;
  pal: number;
  metabolismoInicial: number;
  gastoInicial: number;
  /** O que o plano manda comer por dia: o gasto inicial menos o déficit. */
  consumo: number;
  deficitKcal: number;
  constancia: number;
  /** Dias até a meta com o gasto caindo junto com o peso; null se não chega. */
  dias: number | null;
  /** A conta linear (quilos × 7.700 ÷ déficit), para comparar. */
  diasLinear: number;
  /** Ritmo da primeira semana. */
  kgSemanaInicio: number;
  /** O peso em que, com este consumo fixo, o déficit acaba. */
  pesoEquilibrio: number;
  chega: boolean;
  /** Peso ao fim da simulação (a meta, ou onde parou). */
  pesoFinal: number;
  /** Peso no fim de cada mês (30 dias). */
  curva: PontoCurva[];
  consumoAbaixoDoMetabolismo: boolean;
  metaBaixoPeso: boolean;
}

export function simula(
  sexo: Sexo,
  pesoKg: number,
  alturaCm: number,
  idade: number,
  idEstilo: string,
  pesoMeta: number,
  idDeficit: string = DEFICIT_PADRAO,
  constancia: number = CONSTANCIA_PADRAO,
): Plano {
  const e = estilo(idEstilo);
  const pal = (e.palMin + e.palMax) / 2;
  const d = deficit(idDeficit);
  const metabolismoInicial = metabolismoRepouso(sexo, pesoKg, alturaCm, idade);
  const gastoInicial = metabolismoInicial * pal;
  const consumo = gastoInicial - d.kcal;

  // Gasto(w) = (10w + resto) × pal; equilíbrio quando gasto(w) = consumo.
  const pesoEquilibrio = pesoKg - d.kcal / (10 * pal);

  const curva: PontoCurva[] = [{ mes: 0, pesoKg }];
  let w = pesoKg;
  let dias = 0;
  // Margem: perto do equilíbrio a curva é assintótica e nunca encosta.
  const chegaPossivel = pesoMeta > pesoEquilibrio + 0.25;
  while (w > pesoMeta && dias < DIAS_MAX) {
    const gasto = metabolismoRepouso(sexo, w, alturaCm, idade) * pal;
    const def = (gasto - consumo) * constancia;
    if (def <= 0) break;
    w -= def / KCAL_POR_KG;
    dias++;
    if (dias % 30 === 0) curva.push({ mes: dias / 30, pesoKg: w });
  }
  const chega = chegaPossivel && w <= pesoMeta;
  if (chega && dias % 30 !== 0) curva.push({ mes: dias / 30, pesoKg: pesoMeta });

  return {
    pesoInicial: pesoKg,
    pesoMeta,
    pal,
    metabolismoInicial,
    gastoInicial,
    consumo,
    deficitKcal: d.kcal,
    constancia,
    dias: chega ? dias : null,
    diasLinear: ((pesoKg - pesoMeta) * KCAL_POR_KG) / (d.kcal * constancia),
    kgSemanaInicio: (d.kcal * constancia * 7) / KCAL_POR_KG,
    pesoEquilibrio,
    chega,
    pesoFinal: chega ? pesoMeta : w,
    curva,
    consumoAbaixoDoMetabolismo: consumo < metabolismoInicial,
    metaBaixoPeso: pesoMeta < pesoImcMinimo(alturaCm),
  };
}

/**
 * A curva para mostrar: mês a mês no primeiro ano; depois, de três em três
 * meses — uma tabela de 36 linhas ninguém lê. O último ponto fica sempre.
 */
export function curvaResumida(curva: PontoCurva[]): PontoCurva[] {
  const pontos = curva.slice(1);
  return pontos.filter((c, i) => c.mes <= 12 || c.mes % 3 === 0 || i === pontos.length - 1);
}

/* ───────────────────────── Formatação ───────────────────────── */

export const arredondaKcal = (k: number): number => (Number.isFinite(k) && k > 0 ? Math.round(k / 10) * 10 : 0);
export const formataKcal = (k: number): string => arredondaKcal(k).toLocaleString('pt-BR');
export const formataKg = (k: number): string =>
  k.toLocaleString('pt-BR', { minimumFractionDigits: 1, maximumFractionDigits: 1 });
export const formataPct = (p: number): string => `${Math.round(p * 100)}%`;

/** Prazo em português de gente: semanas até 3 meses, depois meses, depois anos. */
export function formataPrazo(dias: number): string {
  if (!Number.isFinite(dias) || dias <= 0) return '—';
  const semanas = Math.round(dias / 7);
  if (dias < 91) return semanas <= 1 ? 'cerca de 1 semana' : `cerca de ${semanas} semanas`;
  const meses = Math.round(dias / 30.4);
  if (meses < 24) return `cerca de ${meses} meses`;
  const anos = Math.round((dias / 365) * 2) / 2;
  return `cerca de ${anos.toLocaleString('pt-BR')} anos`;
}

export function frasePlano(p: Plano): string {
  const kg = formataKg(p.pesoInicial - p.pesoMeta);
  if (!p.chega) {
    return (
      `Com um consumo fixo de cerca de ${formataKcal(p.consumo)} kcal por dia, o gasto cai junto com o peso e o ` +
      `déficit acaba perto de ${formataKg(p.pesoEquilibrio)} kg — antes da meta. Para seguir, o plano precisa ser ` +
      `refeito no caminho: é o que acontece no acompanhamento.`
    );
  }
  return (
    `Para perder ${kg} kg com déficit de ${p.deficitKcal} kcal por dia e o plano cumprido em ${formataPct(p.constancia)} ` +
    `dos dias, a conta dá ${formataPrazo(p.dias as number)} — contra ${formataPrazo(p.diasLinear)} na conta simples, ` +
    `que ignora a queda do gasto.`
  );
}

/* ───────────────────────── Textos fixos ───────────────────────── */

export const NOTA_ESTIMATIVA =
  'É uma estimativa. O metabolismo vem de uma equação que erra mais de 10% em parte das pessoas, e a conta não modela todas as adaptações do corpo — na vida real, o prazo costuma ser maior.';

export const NOTA_ABAIXO_METABOLISMO =
  'Com esse déficit, o consumo do plano fica abaixo do seu metabolismo de repouso estimado. Corte desse tamanho pede acompanhamento de nutricionista e, se você tem alguma condição de saúde, do médico.';

export const NOTA_BAIXO_PESO =
  'A meta fica abaixo de IMC 18,5 para a sua altura — baixo peso pela classificação da OMS. Converse com um médico antes de buscar esse número.';

export const NOTA_NAO_PRESCRICAO =
  'Esta conta é educativa. Não é plano alimentar nem prescrição: a dieta é com o nutricionista, e o treino com quem acompanha você.';
