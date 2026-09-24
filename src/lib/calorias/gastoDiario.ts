/**
 * O motor da calculadora de gasto calórico diário.
 *
 * A PEÇA QUE FALTAVA NO CLUSTER
 *
 * As dezoito calculadoras de atividade respondem "quanto gastei neste
 * treino". Esta responde "quanto eu gasto num dia" — o número que o
 * emagrecimento usa, e que dá às outras um lugar para o resultado delas.
 *
 * DUAS PEÇAS, CADA UMA COM A SUA FONTE
 *
 *   metabolismo  → equação de Mifflin-St Jeor (1990), feita com 498
 *                  adultos de 19 a 78 anos medidos por calorimetria
 *   atividade    → os três estilos de vida da FAO/OMS/UNU (2004), cada
 *                  um uma FAIXA de nível de atividade física
 *
 * O resultado é faixa porque as duas peças são faixa. O estilo de vida da
 * FAO é definido por intervalo (sedentário vai de 1,40 a 1,69), e a
 * equação, a mais precisa entre as comparadas numa revisão sistemática
 * (Frankenfield, 2005), ainda erra mais de 10% em parte das pessoas.
 *
 * O QUE ESTA CONTA NÃO FAZ
 *
 * Não diz quanto comer. Transformar gasto em plano alimentar é trabalho de
 * nutricionista, e a página diz isso.
 */

/* ───────────────────────── Fontes ───────────────────────── */

export interface Fonte {
  rotulo: string;
  rotuloCurto: string;
  url: string;
  resumo: string;
}

export const FONTE_MIFFLIN: Fonte = {
  rotulo:
    'Mifflin MD, St Jeor ST, Hill LA, Scott BJ, Daugherty SA, Koh YO. A new predictive equation for resting energy expenditure in healthy individuals. American Journal of Clinical Nutrition, 51(2):241-247, 1990',
  rotuloCurto: 'Mifflin-St Jeor (1990)',
  url: 'https://pubmed.ncbi.nlm.nih.gov/2305711/',
  resumo:
    'derivou a equação do gasto de repouso a partir de 498 adultos saudáveis, de 19 a 78 anos, com peso normal e com obesidade, medidos por calorimetria indireta: 10 × peso + 6,25 × altura − 5 × idade, somando 5 nos homens e subtraindo 161 nas mulheres.',
};

export const FONTE_FRANKENFIELD: Fonte = {
  rotulo:
    'Frankenfield D, Roth-Yousey L, Compher C. Comparison of predictive equations for resting metabolic rate in healthy nonobese and obese adults: a systematic review. Journal of the American Dietetic Association, 105(5):775-789, 2005',
  rotuloCurto: 'Frankenfield et al. (2005)',
  url: 'https://pubmed.ncbi.nlm.nih.gov/15883556/',
  resumo:
    'comparou as equações mais usadas com o gasto medido e concluiu que a de Mifflin-St Jeor ficou a até 10% do valor medido em mais pessoas, com e sem obesidade, do que Harris-Benedict, Owen e a da OMS — e com a menor faixa de erro. A revisão também registra que ela ainda erra de forma relevante em parte dos indivíduos.',
};

export const FONTE_FAO: Fonte = {
  rotulo:
    'FAO/WHO/UNU. Human energy requirements: report of a joint FAO/WHO/UNU expert consultation. Food and Nutrition Technical Report Series 1, Roma, 2004',
  rotuloCurto: 'FAO/OMS/UNU (2004)',
  url: 'https://www.fao.org/4/y5686e/y5686e07.htm',
  resumo:
    'define três estilos de vida pelo nível de atividade física (gasto do dia ÷ metabolismo basal): sedentário ou leve, de 1,40 a 1,69; ativo ou moderadamente ativo, de 1,70 a 1,99; vigoroso, de 2,00 a 2,40. Uma hora diária de exercício moderado a vigoroso leva uma pessoa de 1,55 para 1,75.',
};

export const FONTE_HALL: Fonte = {
  rotulo:
    'Hall KD, Sacks G, Chandramohan D, et al. Quantification of the effect of energy imbalance on bodyweight. The Lancet, 378(9793):826-837, 2011',
  rotuloCurto: 'Hall et al. (2011)',
  url: 'https://pubmed.ncbi.nlm.nih.gov/21872751/',
  resumo:
    'modela como o gasto do corpo se adapta durante o emagrecimento: ele cai junto com o peso, e a resposta do peso a uma mudança na alimentação é lenta, com meia-vida de cerca de um ano — por isso a conta precisa ser refeita quando o peso muda.',
};

export const FONTES: Fonte[] = [FONTE_MIFFLIN, FONTE_FRANKENFIELD, FONTE_FAO, FONTE_HALL];

/* ───────────────────────── Limites ───────────────────────── */

export const PESO_MIN = 30;
export const PESO_MAX = 250;
export const PESO_PADRAO = 70;

export const ALTURA_MIN = 120;
export const ALTURA_MAX = 230;
export const ALTURA_PADRAO = 170;

export const IDADE_MIN = 18;
export const IDADE_MAX = 90;
export const IDADE_PADRAO = 30;

/** A faixa de idade em que a equação foi feita. Fora dela, a página avisa. */
export const IDADE_ESTUDO_MIN = 19;
export const IDADE_ESTUDO_MAX = 78;

/** Quanto a equação pode errar para um indivíduo, na leitura conservadora. */
export const ERRO_EQUACAO = 0.1;

/* ───────────────────────── O metabolismo ───────────────────────── */

export type Sexo = 'feminino' | 'masculino';

/** Mifflin-St Jeor, a versão separada por sexo publicada no próprio artigo. */
export function metabolismoRepouso(sexo: Sexo, pesoKg: number, alturaCm: number, idade: number): number {
  const base = 10 * pesoKg + 6.25 * alturaCm - 5 * idade;
  return sexo === 'masculino' ? base + 5 : base - 161;
}

/* ───────────────────────── Os estilos de vida ───────────────────────── */

export interface Estilo {
  id: string;
  nome: string;
  nomeCurto: string;
  palMin: number;
  palMax: number;
  comoReconhecer: string;
}

/** Os três estilos da FAO (2004), cada um uma faixa de nível de atividade. */
export const ESTILOS: Estilo[] = [
  {
    id: 'sedentario',
    nome: 'Sedentário ou pouco ativo',
    nomeCurto: 'Sedentário',
    palMin: 1.4,
    palMax: 1.69,
    comoReconhecer: 'Trabalho sentado, deslocamento de carro ou transporte, pouco exercício na semana.',
  },
  {
    id: 'ativo',
    nome: 'Ativo ou moderadamente ativo',
    nomeCurto: 'Ativo',
    palMin: 1.7,
    palMax: 1.99,
    comoReconhecer:
      'Trabalho sentado com cerca de 1 hora de exercício moderado a vigoroso por dia — ou trabalho de pé, com esforço físico, como na construção.',
  },
  {
    id: 'vigoroso',
    nome: 'Vigoroso',
    nomeCurto: 'Vigoroso',
    palMin: 2.0,
    palMax: 2.4,
    comoReconhecer: 'Esforço físico por boa parte do dia: trabalho braçal pesado sem máquina, ou cerca de 2 horas por dia de atividade como natação ou dança, além da rotina.',
  },
];

export const estilo = (id: string): Estilo => ESTILOS.find((e) => e.id === id) ?? ESTILOS[0];

/** O exemplo da FAO: uma hora diária de exercício leva de 1,55 a 1,75. */
export const PAL_SEM_EXERCICIO = 1.55;
export const PAL_COM_UMA_HORA = 1.75;

/* ───────────────────────── Validação ───────────────────────── */

export const pesoValido = (p: number | null): p is number =>
  p !== null && Number.isFinite(p) && p >= PESO_MIN && p <= PESO_MAX;

export const alturaValida = (a: number | null): a is number =>
  a !== null && Number.isFinite(a) && a >= ALTURA_MIN && a <= ALTURA_MAX;

export const idadeValida = (i: number | null): i is number =>
  i !== null && Number.isFinite(i) && i >= IDADE_MIN && i <= IDADE_MAX;

/** A pessoa está fora da faixa de idade em que a equação foi feita? */
export const foraDaFaixaDoEstudo = (idade: number): boolean =>
  idade < IDADE_ESTUDO_MIN || idade > IDADE_ESTUDO_MAX;

export function parseNumero(bruto: string): number | null {
  const limpo = bruto.trim().replace(/\s/g, '').replace(',', '.');
  if (!limpo) return null;
  const n = Number(limpo);
  return Number.isFinite(n) ? n : null;
}

/**
 * Altura como gente escreve: "170", "1,70", "1.70". Abaixo de 3, é metro.
 */
export function parseAltura(bruto: string): number | null {
  const n = parseNumero(bruto);
  if (n === null) return null;
  return n > 0 && n < 3 ? Math.round(n * 100) : n;
}

/* ───────────────────────── O cálculo ───────────────────────── */

export interface Resultado {
  sexo: Sexo;
  pesoKg: number;
  alturaCm: number;
  idade: number;
  idEstilo: string;
  metabolismo: number;
  /** O metabolismo se a equação errar 10% para baixo ou para cima. */
  metabolismoMin: number;
  metabolismoMax: number;
  palMin: number;
  palMax: number;
  gastoMin: number;
  gastoMax: number;
  /** O que 1 hora diária de exercício acrescenta, no exemplo da FAO. */
  umaHoraPorDia: number;
  foraDaFaixa: boolean;
}

export function gastoDiario(sexo: Sexo, pesoKg: number, alturaCm: number, idade: number, idEstilo = 'sedentario'): Resultado {
  const e = estilo(idEstilo);
  const metabolismo = metabolismoRepouso(sexo, pesoKg, alturaCm, idade);
  return {
    sexo,
    pesoKg,
    alturaCm,
    idade,
    idEstilo: e.id,
    metabolismo,
    metabolismoMin: metabolismo * (1 - ERRO_EQUACAO),
    metabolismoMax: metabolismo * (1 + ERRO_EQUACAO),
    palMin: e.palMin,
    palMax: e.palMax,
    gastoMin: metabolismo * e.palMin,
    gastoMax: metabolismo * e.palMax,
    umaHoraPorDia: metabolismo * (PAL_COM_UMA_HORA - PAL_SEM_EXERCICIO),
    foraDaFaixa: foraDaFaixaDoEstudo(idade),
  };
}

/* ───────────────────────── Formatação ───────────────────────── */

/** Gasto diário arredonda na dezena: precisão de unidade seria fingimento. */
export function arredondaKcal(k: number): number {
  if (!Number.isFinite(k) || k <= 0) return 0;
  return Math.round(k / 10) * 10;
}

export const formataKcal = (k: number): string => arredondaKcal(k).toLocaleString('pt-BR');

export const formataFaixaKcal = (min: number, max: number): string =>
  arredondaKcal(min) === arredondaKcal(max) ? formataKcal(min) : `${formataKcal(min)} a ${formataKcal(max)}`;

/** "entre 2.030 e 2.450" — a faixa dentro de uma frase. */
export const formataEntreKcal = (min: number, max: number): string =>
  arredondaKcal(min) === arredondaKcal(max) ? formataKcal(min) : `entre ${formataKcal(min)} e ${formataKcal(max)}`;

export const formataPal = (p: number): string =>
  p.toLocaleString('pt-BR', { minimumFractionDigits: 2, maximumFractionDigits: 2 });

export const formataFaixaPal = (e: { palMin: number; palMax: number }): string =>
  `${formataPal(e.palMin)} a ${formataPal(e.palMax)}`;

export function fraseContexto(r: Resultado): string {
  const e = estilo(r.idEstilo);
  return (
    `Com metabolismo de repouso estimado em ${formataKcal(r.metabolismo)} kcal e estilo de vida ` +
    `${e.nomeCurto.toLowerCase()} (${formataFaixaPal(e)} vezes o metabolismo), o gasto do dia fica ` +
    `${formataEntreKcal(r.gastoMin, r.gastoMax)} kcal.`
  );
}

/* ───────────────────────── Tabelas ───────────────────────── */

export const PESOS_TABELA = [50, 60, 70, 80, 90, 100, 120] as const;

export interface LinhaPeso {
  peso: number;
  mulherMin: number;
  mulherMax: number;
  homemMin: number;
  homemMax: number;
}

/** Gasto do dia por peso, para 30 anos e 170 cm, num estilo de vida dado. */
export const tabelaPorPeso = (idEstilo = 'ativo'): LinhaPeso[] =>
  PESOS_TABELA.map((peso) => {
    const m = gastoDiario('feminino', peso, ALTURA_PADRAO, IDADE_PADRAO, idEstilo);
    const h = gastoDiario('masculino', peso, ALTURA_PADRAO, IDADE_PADRAO, idEstilo);
    return { peso, mulherMin: m.gastoMin, mulherMax: m.gastoMax, homemMin: h.gastoMin, homemMax: h.gastoMax };
  });

/* ───────────────────────── Textos fixos ───────────────────────── */

export const NOTA_FAIXA =
  'O resultado é faixa por dois motivos. O estilo de vida da FAO é um intervalo, não um número: sedentário vai de 1,40 a 1,69 vezes o metabolismo. E a equação do metabolismo, a mais precisa entre as comparadas, ainda erra mais de 10% em parte das pessoas — para você, o número real pode estar acima ou abaixo da faixa.';

export const NOTA_EXERCICIO =
  'O estilo de vida já inclui o exercício. Se você escolheu "ativo" porque treina uma hora por dia, não some a conta do treino por cima: ela já está aqui dentro. As calculadoras de atividade servem para ver quanto um treino específico pesa no dia, não para empilhar.';

export const NOTA_NAO_E_DIETA =
  'Este número é quanto você gasta, não quanto deve comer. Transformar gasto em plano alimentar depende de objetivo, saúde, rotina e preferência — é trabalho de nutricionista.';

export const NOTA_RECALCULAR =
  'Refaça a conta quando o peso mudar. O gasto do corpo cai conforme ele emagrece, e um número calculado com o peso de três meses atrás fica velho.';

export const NOTA_FORA_DA_FAIXA =
  'A equação foi feita com adultos de 19 a 78 anos. Fora dessa faixa ela continua dando um número, mas ninguém conferiu se ele acerta.';

export const NOTA_LIMITES =
  'A equação vê peso, altura, idade e sexo — não vê composição corporal. Duas pessoas com o mesmo peso e quantidades diferentes de músculo recebem o mesmo número. Ela também não vale para gestação, amamentação, crianças e adolescentes, nem para quem tem condição que mexe no metabolismo, como alteração da tireoide: nesses casos, a conta é com médico e nutricionista.';

export const NOTA_NAO_PRESCRICAO =
  'Esta é uma estimativa educativa de gasto energético. Não é avaliação metabólica, não substitui calorimetria indireta, não prescreve dieta nem treino e não diagnostica nada.';
