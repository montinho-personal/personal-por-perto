/**
 * O motor da página de calorias da corrida.
 *
 * POR QUE ESTE MOTOR NÃO É O DA CAMINHADA COM OUTRO MET
 *
 * A caminhada responde por TEMPO: o gasto por minuto muda bastante com o
 * ritmo, e quem caminha conta minutos. A corrida responde por DISTÂNCIA, e
 * por um motivo físico, não editorial: o custo de correr fica perto de
 * 1 kcal por quilo por quilômetro e quase não muda com a velocidade.
 *
 * Pela equação da ACSM, para uma mesma pessoa no plano:
 *
 *     a  8 km/h → ~1,13 kcal/kg/km
 *     a 10 km/h → ~1,10 kcal/kg/km
 *     a 14 km/h → ~1,07 kcal/kg/km
 *
 * Correr mais rápido gasta mais POR MINUTO, mas praticamente o mesmo POR
 * QUILÔMETRO — porque você termina antes. É contraintuitivo e é a coisa
 * mais útil que esta página tem a dizer. É também o que dá a regra de bolso
 * que ninguém precisa de calculadora para usar: correr 1 km custa mais ou
 * menos o seu peso em calorias.
 *
 * E é o contrário da caminhada, onde andar rápido custa mais por quilômetro
 * do que passear. Por isso as duas páginas não podem ter o mesmo motor.
 *
 * DE ONDE VÊM OS NÚMEROS
 *
 * Equação de corrida da ACSM, que separa o custo horizontal do vertical:
 *
 *     VO2 = 0,2 × v + 0,9 × v × inclinação + 3,5     (v em m/min)
 *
 * O coeficiente horizontal da corrida (0,2) é o dobro do da caminhada (0,1)
 * — correr custa o dobro de andar na mesma velocidade. O vertical (0,9) é
 * METADE do da caminhada (1,8), porque a fase aérea da corrida aproveita
 * energia elástica na subida que a caminhada não tem.
 *
 * Daí para kcal pela equação de METs: kcal/min = MET × 3,5 × peso ÷ 200.
 *
 * POR QUE O RESULTADO É UMA FAIXA, E NÃO UM NÚMERO
 *
 * Economia de corrida varia entre pessoas mais do que a maioria imagina:
 * os estudos que mediram custo energético em corredores encontram desvios
 * de 6% a 7% em torno da média, e a faixa prática costuma ser citada como
 * 0,90 a 1,20 kcal/kg/km. Técnica, calçado, superfície, vento e fadiga
 * entram aí. Dar um número exato seria fingir uma precisão que a medição
 * não tem — então a página mostra o centro E a faixa, e explica por quê.
 *
 * ONDE A CONTA PARA DE VALER
 *
 * A equação da ACSM é validada para corrida de verdade, acima de 8 km/h.
 * Abaixo disso a maioria das pessoas está caminhando, e caminhada tem outra
 * equação e outra página. A ferramenta avisa em vez de responder errado.
 */

/* ───────────────────────── Fontes ───────────────────────── */

export interface Fonte {
  rotulo: string;
  rotuloCurto: string;
  url: string;
  resumo: string;
}

export const FONTE_ACSM: Fonte = {
  rotulo:
    "American College of Sports Medicine. ACSM's Guidelines for Exercise Testing and Prescription — equação metabólica da corrida",
  rotuloCurto: 'equação de corrida da ACSM',
  url: 'https://www.acsm.org/education-resources/books/guidelines-exercise-testing-prescription',
  resumo:
    'estima o consumo de oxigênio na corrida como 0,2 × velocidade + 0,9 × velocidade × inclinação + 3,5, com a velocidade em metros por minuto. É validada para corrida acima de cerca de 8 km/h.',
};

export const FONTE_COMPENDIO: Fonte = {
  rotulo:
    'Herrmann SD, Willis EA, Ainsworth BE, et al. 2024 Adult Compendium of Physical Activities. Journal of Sport and Health Science, 2024',
  rotuloCurto: 'Compêndio de Atividades Físicas (2024)',
  url: 'https://pacompendium.com/running/',
  resumo:
    'lista a corrida por faixa de velocidade, de cerca de 6 METs num trote leve a mais de 19 METs em ritmo de competição — valores que servem de conferência para a equação da ACSM.',
};

export const FONTE_ECONOMIA: Fonte = {
  rotulo:
    'Margaria R, Cerretelli P, Aghemo P, Sassi G. Energy cost of running. Journal of Applied Physiology, 1963',
  rotuloCurto: 'Margaria et al. (1963)',
  url: 'https://pubmed.ncbi.nlm.nih.gov/13932993/',
  resumo:
    'é o trabalho clássico que estabeleceu que o custo energético da corrida por unidade de distância é praticamente independente da velocidade — a base da regra de que correr 1 km custa aproximadamente 1 kcal por quilo de peso.',
};

export const FONTE_HALL: Fonte = {
  rotulo:
    'Hall KD, Sacks G, Chandramohan D, et al. Quantification of the effect of energy imbalance on bodyweight. The Lancet, 2011',
  rotuloCurto: 'Hall et al. (2011)',
  url: 'https://pubmed.ncbi.nlm.nih.gov/21872751/',
  resumo:
    'demonstra que a regra dos 7.700 kcal por quilo superestima a perda ao longo do tempo: o gasto do corpo cai conforme ele emagrece, e a resposta não é linear.',
};

export const FONTES: Fonte[] = [FONTE_ACSM, FONTE_ECONOMIA, FONTE_COMPENDIO, FONTE_HALL];

export const KCAL_POR_KG_GORDURA = 7700;

/* ───────────────────────── Limites ───────────────────────── */

export const PESO_MIN = 30;
export const PESO_MAX = 250;
export const PESO_PADRAO = 70;

export const KM_MIN = 0.4;
export const KM_MAX = 100;

export const MINUTOS_MIN = 1;
export const MINUTOS_MAX = 600;

export const KCAL_MIN = 20;
export const KCAL_MAX = 5000;

/**
 * Pace em minutos por quilômetro. 3:00/km é ritmo de elite mundial; abaixo
 * disso a conta viraria ficção. 12:00/km equivale a 5 km/h — velocidade em
 * que quase todo mundo está caminhando, e aí a página manda para a outra.
 */
export const PACE_MIN = 3;
export const PACE_MAX = 12;
export const PACE_PADRAO = 6;

/** Abaixo desta velocidade a equação da ACSM para corrida deixa de valer. */
export const VELOCIDADE_CORRIDA_MIN = 8;

export const INCLINACAO_MIN = 0;
export const INCLINACAO_MAX = 15;

/**
 * A amplitude da economia de corrida individual. Os estudos que mediram
 * custo energético em corredores encontram desvios de 6% a 7% em torno da
 * média; 10% cobre a variação prática sem inflar a faixa a ponto de ela
 * deixar de informar.
 */
export const VARIACAO_ECONOMIA = 0.1;

/** Distâncias que corredor reconhece. Não é número redondo qualquer. */
export const DISTANCIAS_TABELA = [1, 3, 5, 10, 21.1, 42.2] as const;
export const PESOS_TABELA = [50, 60, 70, 80, 90, 100, 120] as const;
export const PACES_TABELA = [7, 6.5, 6, 5.5, 5, 4.5] as const;

/* ───────────────────────── Validação ───────────────────────── */

export const pesoValido = (p: number | null): p is number =>
  p !== null && Number.isFinite(p) && p >= PESO_MIN && p <= PESO_MAX;

export const kmValidos = (k: number | null): k is number =>
  k !== null && Number.isFinite(k) && k >= KM_MIN && k <= KM_MAX;

export const minutosValidos = (m: number | null): m is number =>
  m !== null && Number.isFinite(m) && m >= MINUTOS_MIN && m <= MINUTOS_MAX;

export const kcalValida = (k: number | null): k is number =>
  k !== null && Number.isFinite(k) && k >= KCAL_MIN && k <= KCAL_MAX;

export const paceValido = (p: number | null): p is number =>
  p !== null && Number.isFinite(p) && p >= PACE_MIN && p <= PACE_MAX;

export const inclinacaoValida = (i: number | null): i is number =>
  i !== null && Number.isFinite(i) && i >= INCLINACAO_MIN && i <= INCLINACAO_MAX;

/** Aceita vírgula e ponto — brasileiro digita "7,5", e parseFloat devolveria 7. */
export function parseNumero(bruto: string): number | null {
  const limpo = bruto.trim().replace(/\s/g, '').replace(',', '.');
  if (!limpo) return null;
  const n = Number(limpo);
  return Number.isFinite(n) ? n : null;
}

/**
 * Pace como corredor escreve: "5:30", "5.30", "5,5" ou "6".
 *
 * A ambiguidade real está no ponto e na vírgula: "5.30" quase sempre quer
 * dizer 5 min e 30 s, não 5,3 minutos (que seriam 5:18). Como o separador
 * de minutos e segundos no Brasil é o dois-pontos, tratamos ponto e vírgula
 * como decimal de minuto — e é por isso que os atalhos existem, para o caso
 * comum não depender de quem acerta a digitação.
 */
export function parsePace(bruto: string): number | null {
  const s = bruto.trim().replace(/\s/g, '');
  if (!s) return null;
  const mm = s.match(/^(\d{1,2}):([0-5]?\d)$/);
  if (mm) return Number(mm[1]) + Number(mm[2]) / 60;
  return parseNumero(s);
}

/** De volta para "5:30". Segundos arredondados, nunca com decimal escondido. */
export function formataPace(paceMin: number): string {
  if (!Number.isFinite(paceMin) || paceMin <= 0) return '—';
  const total = Math.round(paceMin * 60);
  const m = Math.floor(total / 60);
  const s = total % 60;
  return `${m}:${String(s).padStart(2, '0')}`;
}

export const paceParaVelocidade = (paceMin: number): number => (paceMin > 0 ? 60 / paceMin : 0);
export const velocidadeParaPace = (kmh: number): number => (kmh > 0 ? 60 / kmh : 0);

/* ───────────────────────── O MET ───────────────────────── */

/**
 * MET da corrida pela equação da ACSM.
 *
 * VO2 = 0,2 × v + 0,9 × v × inclinação + 3,5, com v em m/min e a inclinação
 * como fração. Dividido por 3,5 vira MET.
 */
export function metCorrida(velocidadeKmH: number, inclinacaoPct = 0): number {
  const v = (velocidadeKmH * 1000) / 60;
  const vo2 = 0.2 * v + 0.9 * v * (inclinacaoPct / 100) + 3.5;
  return vo2 / 3.5;
}

/** Só a parte da subida, em METs — para a página mostrar o que a ladeira acrescenta. */
export function metDaInclinacao(velocidadeKmH: number, inclinacaoPct: number): number {
  const v = (velocidadeKmH * 1000) / 60;
  return (0.9 * v * (inclinacaoPct / 100)) / 3.5;
}

export const kcalPorMinuto = (met: number, pesoKg: number): number => (met * 3.5 * pesoKg) / 200;

/**
 * O custo por quilômetro, em kcal por kg. É a grandeza que sustenta a tese
 * da página: ela quase não muda com a velocidade.
 */
export function kcalPorKgPorKm(velocidadeKmH: number, inclinacaoPct = 0): number {
  if (velocidadeKmH <= 0) return 0;
  return (kcalPorMinuto(metCorrida(velocidadeKmH, inclinacaoPct), 1) * 60) / velocidadeKmH;
}

/* ───────────────────────── O cálculo ───────────────────────── */

export interface Resultado {
  km: number;
  minutos: number;
  paceMin: number;
  velocidade: number;
  inclinacao: number;
  met: number;
  /** Centro da estimativa, bruto, em kcal. */
  kcal: number;
  /** Piso e teto da faixa de economia de corrida. */
  kcalMin: number;
  kcalMax: number;
  /** O que a corrida ACRESCENTA ao dia: bruto menos o repouso do mesmo tempo. */
  kcalLiquida: number;
  /** A conta saiu da faixa em que a equação da ACSM foi validada. */
  abaixoDaFaixa: boolean;
}

function monta(km: number, minutos: number, pesoKg: number, paceMin: number, inclinacao: number): Resultado {
  const velocidade = paceParaVelocidade(paceMin);
  const met = metCorrida(velocidade, inclinacao);
  const kcal = kcalPorMinuto(met, pesoKg) * minutos;
  return {
    km,
    minutos,
    paceMin,
    velocidade,
    inclinacao,
    met,
    kcal,
    kcalMin: kcal * (1 - VARIACAO_ECONOMIA),
    kcalMax: kcal * (1 + VARIACAO_ECONOMIA),
    kcalLiquida: kcal - kcalPorMinuto(1, pesoKg) * minutos,
    abaixoDaFaixa: velocidade < VELOCIDADE_CORRIDA_MIN,
  };
}

/** Modo 1 — "corri 5 km". O modo principal: é assim que corredor pensa. */
export const deDistancia = (km: number, pesoKg: number, paceMin: number, inclinacao = 0): Resultado =>
  monta(km, km * paceMin, pesoKg, paceMin, inclinacao);

/** Modo 2 — "corri 30 minutos". */
export const deTempo = (minutos: number, pesoKg: number, paceMin: number, inclinacao = 0): Resultado =>
  monta(paceMin > 0 ? minutos / paceMin : 0, minutos, pesoKg, paceMin, inclinacao);

/** Modo 3 — "quero gastar 500 kcal". Devolve a distância e o tempo. */
export function deKcal(alvoKcal: number, pesoKg: number, paceMin: number, inclinacao = 0): Resultado {
  const porMin = kcalPorMinuto(metCorrida(paceParaVelocidade(paceMin), inclinacao), pesoKg);
  const minutos = porMin > 0 ? alvoKcal / porMin : 0;
  const r = monta(paceMin > 0 ? minutos / paceMin : 0, minutos, pesoKg, paceMin, inclinacao);
  return { ...r, kcal: alvoKcal, kcalMin: alvoKcal, kcalMax: alvoKcal };
}

/** Simulação teórica: a distância que somaria a energia de 1 kg de gordura. */
export const simulacaoUmQuilo = (pesoKg: number, paceMin: number): Resultado =>
  deKcal(KCAL_POR_KG_GORDURA, pesoKg, paceMin, 0);

/* ───────────────────────── Formatação ───────────────────────── */

export function arredondaKcal(k: number): number {
  if (!Number.isFinite(k) || k <= 0) return 0;
  if (k >= 1000) return Math.round(k / 10) * 10;
  return Math.round(k);
}

export function formataTempo(min: number): string {
  if (!Number.isFinite(min) || min <= 0) return '—';
  const m = Math.round(min);
  if (m < 60) return `${m} min`;
  const h = Math.floor(m / 60);
  const r = m % 60;
  if (r === 0) return h === 1 ? '1 hora' : `${h} horas`;
  return `${h}h${String(r).padStart(2, '0')}`;
}

export function formataKm(km: number): string {
  if (!Number.isFinite(km) || km <= 0) return '—';
  if (km < 1) return `${Math.round(km * 1000)} m`;
  return `${(Math.round(km * 10) / 10).toLocaleString('pt-BR')} km`;
}

export const formataVelocidade = (v: number): string =>
  `${v.toLocaleString('pt-BR', { maximumFractionDigits: 1 })} km/h`;

/**
 * A faixa como faixa — "320 a 390 kcal". Formato para o número grande do
 * resultado, onde não há preposição antes.
 */
export const formataFaixa = (r: Resultado): string =>
  `${arredondaKcal(r.kcalMin).toLocaleString('pt-BR')} a ${arredondaKcal(r.kcalMax).toLocaleString('pt-BR')} kcal`;

/**
 * A mesma faixa para uso em prosa: "entre 320 e 390 kcal".
 *
 * Existe porque "entre X a Y" é erro de português — o par certo é
 * "entre... e" ou "de... a", e misturar os dois aparece em toda frase que
 * emenda um texto com uma faixa formatada.
 */
export const faixaEmTexto = (r: Resultado): string =>
  `entre ${arredondaKcal(r.kcalMin).toLocaleString('pt-BR')} e ${arredondaKcal(r.kcalMax).toLocaleString('pt-BR')} kcal`;

export function fraseContexto(pesoKg: number, r: Resultado): string {
  const onde = r.inclinacao > 0 ? ` com ${r.inclinacao.toLocaleString('pt-BR')}% de inclinação` : '';
  return (
    `Para uma pessoa de ${Math.round(pesoKg)} kg, correr ${formataKm(r.km)} em ritmo de ` +
    `${formataPace(r.paceMin)} por quilômetro${onde} leva ${formataTempo(r.minutos)} e representa ` +
    `um gasto estimado ${faixaEmTexto(r)}.`
  );
}

/* ───────────────────────── Tabelas ───────────────────────── */

export interface LinhaDistancia {
  km: number;
  nome: string;
  kcal: number;
  minutos: number;
}

/** As distâncias de prova, que é como corredor organiza a cabeça. */
export function tabelaPorDistancia(pesoKg: number, paceMin: number): LinhaDistancia[] {
  const nomes: Record<number, string> = {
    1: '1 km',
    3: '3 km',
    5: '5 km',
    10: '10 km',
    21.1: 'Meia maratona',
    42.2: 'Maratona',
  };
  return DISTANCIAS_TABELA.map((km) => {
    const r = deDistancia(km, pesoKg, paceMin);
    return { km, nome: nomes[km] ?? `${km} km`, kcal: arredondaKcal(r.kcal), minutos: r.minutos };
  });
}

export interface LinhaPeso {
  peso: number;
  kcal: number;
  kcalLiquida: number;
}

export function tabelaPorPeso(km: number, paceMin: number): LinhaPeso[] {
  return PESOS_TABELA.map((peso) => {
    const r = deDistancia(km, peso, paceMin);
    return { peso, kcal: arredondaKcal(r.kcal), kcalLiquida: arredondaKcal(r.kcalLiquida) };
  });
}

export interface LinhaPace {
  paceMin: number;
  velocidade: number;
  met: number;
  kcal: number;
  minutos: number;
  porKm: number;
}

/**
 * A tabela que prova a tese: mesma distância, paces bem diferentes, e o
 * custo por quilômetro quase não se mexe.
 */
export function tabelaPorPace(pesoKg: number, km: number): LinhaPace[] {
  return PACES_TABELA.map((paceMin) => {
    const r = deDistancia(km, pesoKg, paceMin);
    return {
      paceMin,
      velocidade: r.velocidade,
      met: Math.round(r.met * 10) / 10,
      kcal: arredondaKcal(r.kcal),
      minutos: r.minutos,
      porKm: kcalPorKgPorKm(r.velocidade) * pesoKg,
    };
  });
}

/* ───────────────────────── Textos fixos ───────────────────────── */

export const NOTA_FAIXA =
  'O resultado é uma faixa, e não um número, porque economia de corrida varia entre pessoas: técnica, calçado, superfície, vento e fadiga mudam quanto custa cada quilômetro. Dois corredores do mesmo peso, no mesmo ritmo, podem gastar 10% a mais ou a menos que o outro.';

export const NOTA_BRUTO =
  'O número é bruto: inclui o que você gastaria parado nesse tempo. O acréscimo real ao seu dia é um pouco menor, e é esse que conta num déficit.';

export const NOTA_ABAIXO_DA_FAIXA =
  'Nesse ritmo, a maioria das pessoas está caminhando, não correndo — e a equação usada aqui é validada para corrida acima de 8 km/h. A conta da caminhada é outra, e tem página própria.';

export const NOTA_SEM_PERDA_LOCALIZADA =
  'Nenhum exercício escolhe de onde o corpo tira gordura. A corrida aumenta o gasto do dia; onde a gordura sai primeiro é decidido por genética e hormônio, não pelo movimento.';

export const NOTA_SEGURANCA =
  'Correr tem impacto, e volume que cresce rápido demais é a causa mais comum de lesão em quem está começando. Se você sente dor articular, tem alguma condição cardiovascular ou está voltando depois de muito tempo parado, converse antes com o seu médico ou fisioterapeuta.';

export const NOTA_NAO_PRESCRICAO =
  'Esta é uma estimativa educativa de gasto energético. Não é avaliação metabólica, não substitui calorimetria indireta, não prescreve treino e não diagnostica nada.';
