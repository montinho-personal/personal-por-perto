/**
 * O motor da página de calorias da escada.
 *
 * A QUINTA FÍSICA DO CLUSTER — E A ÚNICA CALCULÁVEL SEM TABELA
 *
 * As quatro primeiras dependem de medição empírica: o Compêndio mediu
 * gente andando, correndo, pedalando e nadando, e as páginas copiam esses
 * METs. Subir escada é diferente. O gasto é dominado por um trabalho
 * mecânico que a física resolve sozinha:
 *
 *     trabalho = massa × gravidade × altura vertical
 *
 * Não há arrasto, não há técnica que mude muito, não há economia de
 * movimento variando 55% entre pessoas. Há um corpo sendo erguido uma
 * altura. Por isso esta é a única página do cluster em que o número não sai
 * de uma tabela — sai de uma conta.
 *
 * A variável que decide, portanto, não é tempo, distância, velocidade nem
 * estilo. É ALTURA VERTICAL. Dez andares custam o mesmo subidos devagar ou
 * depressa; o que a pressa muda é a potência, não o trabalho.
 *
 * AS DUAS PONTAS CONCORDAM
 *
 * A conta usa a constante da ACSM para trabalho vertical: 1,8 mL de
 * oxigênio por quilo por metro subido, líquidos. A 5 kcal por litro de O2,
 * isso dá 0,009 kcal por quilo por metro vertical.
 *
 * A conferência: erguer 70 kg em 1 metro são 686,7 J, ou 0,164 kcal de
 * trabalho mecânico. A constante da ACSM cobra 0,630 kcal para isso. A
 * eficiência implícita é de 26,1% — dentro da faixa de 23% a 27% que a
 * literatura mede para subida de escada. Física e fisiologia batem.
 *
 * Segunda conferência, contra o Compêndio: nas cadências reais de subida
 * (de 45 a 85 degraus por minuto, degrau de 17,5 cm), esta conta devolve de
 * 5,0 a 8,7 METs. O Compêndio publica 4,5 METs para subida lenta e 9,3 para
 * rápida. A faixa derivada cai dentro da faixa medida, sem ter sido
 * calibrada para isso.
 *
 * É a mesma constante que o motor da caminhada usa no termo de inclinação,
 * então as duas páginas do cluster contam subida do mesmo jeito.
 *
 * A DESCIDA, QUE NINGUÉM CONTA
 *
 * Descer também custa — o músculo trabalha freando o corpo — mas custa
 * pouco: a medição direta dá 23% do custo da subida. Quem sobe dez andares
 * e desce de elevador gastou uma coisa; quem sobe e desce a pé gastou 23% a
 * mais. Nenhuma calculadora do gênero oferece essa distinção, e ela é a
 * diferença entre duas rotinas reais.
 *
 * POR QUE O NÚMERO GRANDE AQUI É O LÍQUIDO
 *
 * Nas outras quatro páginas o destaque é o gasto BRUTO, que inclui o que a
 * pessoa gastaria parada. Aqui a ordem se inverte de propósito.
 *
 * O trabalho vertical é exato e não depende de quanto tempo se levou. O
 * bruto, sim: subir dez andares em três minutos ou em oito minutos muda o
 * bruto e não muda o trabalho. Destacar o bruto seria destacar o número
 * contaminado por uma suposição de ritmo, justamente na página que existe
 * para mostrar que dá para calcular sem supor nada. O bruto continua na
 * tela, um nível abaixo, e a página explica a inversão.
 *
 * O NÚMERO SEM PESO QUE CIRCULA POR AÍ
 *
 * "Subir um degrau queima 0,17 caloria" é a frase mais repetida do assunto
 * em português, e ela não significa nada sem dizer de quem é o corpo. Pela
 * conta, um degrau de 17,5 cm custa 0,08 kcal para 50 kg e 0,16 kcal para
 * 100 kg. O peso não é um detalhe da conta: ele É metade da conta.
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
    "American College of Sports Medicine. ACSM's Guidelines for Exercise Testing and Prescription, 11ª edição, 2021",
  rotuloCurto: 'ACSM (2021)',
  url: 'https://www.acsm.org/education-resources/books/guidelines-exercise-testing-prescription',
  resumo:
    'fixa o custo do trabalho vertical em 1,8 mL de oxigênio por quilo por metro subido, líquidos. É a constante que sustenta toda esta página — e a mesma que a nossa calculadora de caminhada usa no termo de inclinação.',
};

export const FONTE_DESCIDA: Fonte = {
  rotulo:
    'Teh KC, Aziz AR. Heart rate, oxygen uptake, and energy cost of ascending and descending the stairs. Medicine & Science in Sports & Exercise, 2002',
  rotuloCurto: 'Teh e Aziz (2002)',
  url: 'https://pubmed.ncbi.nlm.nih.gov/12048330/',
  resumo:
    'mede subida e descida da mesma escada e encontra a descida custando cerca de 23% do que custa a subida — o trabalho excêntrico de frear o corpo é real, mas barato.',
};

export const FONTE_COMPENDIO: Fonte = {
  rotulo:
    'Herrmann SD, Willis EA, Ainsworth BE, et al. 2024 Adult Compendium of Physical Activities. Journal of Sport and Health Science, 2024',
  rotuloCurto: 'Compêndio de Atividades Físicas (2024)',
  url: 'https://pacompendium.com/',
  resumo:
    'publica 4,5 METs para subir escada em ritmo lento e 9,3 para ritmo rápido. Entra aqui como conferência, não como base: a faixa que esta conta deriva da física cai dentro dela sem ter sido ajustada para isso.',
};

export const FONTE_NBR: Fonte = {
  rotulo: 'ABNT NBR 9050 — Acessibilidade a edificações, mobiliário, espaços e equipamentos urbanos',
  rotuloCurto: 'ABNT NBR 9050',
  url: 'https://www.abntcatalogo.com.br/pnm.aspx?Q=SzBtdTVBYUhMTlR6ZjRMdEFKa05sYTBhVnhpTGRtZVp4ZFZCZWlNQ2lJQT0=',
  resumo:
    'estabelece que o espelho do degrau fique entre 16 e 18 cm. É por isso que a altura padrão desta calculadora é 17,5 cm, e por isso o campo aceita ajuste — escada de prédio antigo foge da norma.',
};

export const FONTE_HALL: Fonte = {
  rotulo:
    'Hall KD, Sacks G, Chandramohan D, et al. Quantification of the effect of energy imbalance on bodyweight. The Lancet, 2011',
  rotuloCurto: 'Hall et al. (2011)',
  url: 'https://pubmed.ncbi.nlm.nih.gov/21872751/',
  resumo:
    'demonstra que a regra dos 7.700 kcal por quilo superestima a perda ao longo do tempo: o gasto do corpo cai conforme ele emagrece, e a resposta não é linear.',
};

export const FONTES: Fonte[] = [
  FONTE_ACSM,
  FONTE_DESCIDA,
  FONTE_COMPENDIO,
  FONTE_NBR,
  FONTE_HALL,
];

export const KCAL_POR_KG_GORDURA = 7700;

/* ───────────────────────── Constantes físicas ───────────────────────── */

/** Gravidade, para a conta de trabalho mecânico. */
export const G = 9.81;

/** Joules por quilocaloria. */
export const J_POR_KCAL = 4184;

/** Custo líquido do trabalho vertical, em mL de O2 por kg por metro. ACSM. */
export const O2_POR_KG_POR_METRO = 1.8;

/** Equivalente calórico do oxigênio. Varia com o substrato; 5 é o valor de trabalho. */
export const KCAL_POR_LITRO_O2 = 5;

/**
 * O número que resolve a página inteira: kcal líquidas por quilo de corpo
 * por metro subido. Sai de 1,8 mL/kg/m × 5 kcal/L ÷ 1000 = 0,009.
 */
export const KCAL_POR_KG_POR_METRO = (O2_POR_KG_POR_METRO / 1000) * KCAL_POR_LITRO_O2;

/** Quanto a descida custa em relação à subida. Medido, não estimado. */
export const FATOR_DESCIDA = 0.23;

/* ───────────────────────── Limites ───────────────────────── */

export const PESO_MIN = 30;
export const PESO_MAX = 250;
export const PESO_PADRAO = 70;

/** Altura do espelho, em metros. A NBR 9050 pede entre 0,16 e 0,18. */
export const ESPELHO_MIN = 0.12;
export const ESPELHO_MAX = 0.25;
export const ESPELHO_PADRAO = 0.175;

/** Degraus por andar. 2,80 m de piso a piso com degrau de 17,5 cm dão 16. */
export const DEGRAUS_POR_ANDAR_MIN = 6;
export const DEGRAUS_POR_ANDAR_MAX = 40;
export const DEGRAUS_POR_ANDAR_PADRAO = 16;

export const ANDARES_MIN = 1;
export const ANDARES_MAX = 200;
export const ANDARES_PADRAO = 10;

export const DEGRAUS_MIN = 5;
export const DEGRAUS_MAX = 5000;

/** Cadência de subida, em degraus por minuto. */
export const CADENCIA_MIN = 20;
export const CADENCIA_MAX = 150;
export const CADENCIA_PADRAO = 65;

export const MINUTOS_MIN = 1;
export const MINUTOS_MAX = 180;

/**
 * A meta mínima é bem menor que nas outras páginas do cluster.
 *
 * Escada devolve números pequenos: dez andares para 70 kg dão menos de 20
 * kcal. Herdar o piso de 20 kcal das outras ferramentas barraria metas
 * perfeitamente razoáveis nesta.
 */
export const KCAL_MIN = 5;
export const KCAL_MAX = 3000;

/**
 * Cadências nomeadas, para quem não contou degraus por minuto.
 *
 * São ritmos descritos, não medições: servem para converter andares em
 * tempo e daí em METs. O trabalho vertical — que é o número grande da
 * página — não depende de nenhuma delas.
 */
export const RITMOS = [
  { id: 'lento', nome: 'Devagar', cadencia: 45, descricao: 'Subindo sem pressa, conversando. É como a maioria sobe um lance de escada.' },
  { id: 'moderado', nome: 'Normal', cadencia: 65, descricao: 'O ritmo de quem está com pressa moderada. Respiração acelera nos primeiros andares.' },
  { id: 'forte', nome: 'Rápido', cadencia: 85, descricao: 'Subindo de verdade, como treino. Poucas pessoas sustentam isso por muitos andares.' },
] as const;

export type RitmoId = (typeof RITMOS)[number]['id'];

export const ritmo = (id: RitmoId) => RITMOS.find((r) => r.id === id) ?? RITMOS[1];

/* ───────────────────────── Validação ───────────────────────── */

export const pesoValido = (p: number | null): p is number =>
  p !== null && Number.isFinite(p) && p >= PESO_MIN && p <= PESO_MAX;

export const andaresValidos = (a: number | null): a is number =>
  a !== null && Number.isFinite(a) && a >= ANDARES_MIN && a <= ANDARES_MAX;

export const degrausValidos = (d: number | null): d is number =>
  d !== null && Number.isFinite(d) && d >= DEGRAUS_MIN && d <= DEGRAUS_MAX;

export const espelhoValido = (e: number | null): e is number =>
  e !== null && Number.isFinite(e) && e >= ESPELHO_MIN && e <= ESPELHO_MAX;

export const degrausPorAndarValidos = (d: number | null): d is number =>
  d !== null && Number.isFinite(d) && d >= DEGRAUS_POR_ANDAR_MIN && d <= DEGRAUS_POR_ANDAR_MAX;

export const cadenciaValida = (c: number | null): c is number =>
  c !== null && Number.isFinite(c) && c >= CADENCIA_MIN && c <= CADENCIA_MAX;

export const minutosValidos = (m: number | null): m is number =>
  m !== null && Number.isFinite(m) && m >= MINUTOS_MIN && m <= MINUTOS_MAX;

export const kcalValida = (k: number | null): k is number =>
  k !== null && Number.isFinite(k) && k >= KCAL_MIN && k <= KCAL_MAX;

export function parseNumero(bruto: string): number | null {
  const limpo = bruto.trim().replace(/\s/g, '').replace(',', '.');
  if (!limpo) return null;
  const n = Number(limpo);
  return Number.isFinite(n) ? n : null;
}

/* ───────────────────────── As contas ───────────────────────── */

/** Trabalho mecânico puro de erguer um corpo, em kcal. Sem fisiologia nenhuma. */
export const trabalhoMecanico = (pesoKg: number, metrosVerticais: number): number =>
  (pesoKg * G * metrosVerticais) / J_POR_KCAL;

/** O gasto LÍQUIDO de subir, pela constante da ACSM. */
export const kcalDeSubir = (pesoKg: number, metrosVerticais: number): number =>
  metrosVerticais * KCAL_POR_KG_POR_METRO * pesoKg;

/** O gasto líquido de descer a pé a mesma altura. */
export const kcalDeDescer = (pesoKg: number, metrosVerticais: number): number =>
  kcalDeSubir(pesoKg, metrosVerticais) * FATOR_DESCIDA;

/**
 * A eficiência mecânica que a constante da ACSM implica.
 *
 * Não é um parâmetro: é o resultado de dividir o trabalho pela energia
 * cobrada. Serve de conferência — se caísse fora de 20% a 30%, a constante
 * ou a conta estariam erradas.
 */
export const eficienciaImplicita = (): number =>
  trabalhoMecanico(1, 1) / kcalDeSubir(1, 1);

export const kcalPorMinuto = (met: number, pesoKg: number): number => (met * 3.5 * pesoKg) / 200;

/**
 * O MET de subir a uma dada velocidade vertical.
 *
 * VO2 = 1,8 × (metros verticais por minuto) + 3,5 de repouso. Dividido por
 * 3,5, vira MET. É a mesma forma do termo de inclinação da caminhada.
 */
export const metDaSubida = (metrosVerticaisPorMin: number): number =>
  (O2_POR_KG_POR_METRO * metrosVerticaisPorMin + 3.5) / 3.5;

/** Metros verticais por minuto a partir de cadência e altura do degrau. */
export const velocidadeVertical = (cadencia: number, espelho: number): number => cadencia * espelho;

/* ───────────────────────── O resultado ───────────────────────── */

export interface Resultado {
  /** Degraus subidos. */
  degraus: number;
  /** Andares equivalentes, pelo número de degraus por andar informado. */
  andares: number;
  /** Altura vertical vencida, em metros. É a variável que decide tudo. */
  metros: number;
  espelho: number;
  cadencia: number;
  /** Minutos de subida. Derivado da cadência, não medido. */
  minutos: number;
  met: number;
  /** O número grande da página: gasto líquido da subida. */
  kcalSubida: number;
  /** Gasto líquido da descida a pé, zero quando não houve. */
  kcalDescida: number;
  /** Subida mais descida, líquidas. */
  kcalLiquida: number;
  /** Bruto: o líquido da subida mais o repouso do tempo gasto nela. */
  kcalBruta: number;
  desceu: boolean;
  /** Trabalho mecânico puro, para a página poder mostrar a conferência. */
  trabalho: number;
}

function monta(
  pesoKg: number,
  degraus: number,
  espelho: number,
  degrausPorAndar: number,
  cadencia: number,
  desceu: boolean,
): Resultado {
  const metros = degraus * espelho;
  const vVertical = velocidadeVertical(cadencia, espelho);
  const minutos = cadencia > 0 ? degraus / cadencia : 0;
  const met = metDaSubida(vVertical);
  const subida = kcalDeSubir(pesoKg, metros);
  const descida = desceu ? kcalDeDescer(pesoKg, metros) : 0;
  return {
    degraus,
    andares: degrausPorAndar > 0 ? degraus / degrausPorAndar : 0,
    metros,
    espelho,
    cadencia,
    minutos,
    met,
    kcalSubida: subida,
    kcalDescida: descida,
    kcalLiquida: subida + descida,
    // O bruto acrescenta o repouso do tempo de subida. Só a subida entra:
    // o tempo de descida não é contado porque a descida não tem cadência
    // informada, e inventar uma seria pior que omitir.
    kcalBruta: subida + kcalPorMinuto(1, pesoKg) * minutos,
    desceu,
    trabalho: trabalhoMecanico(pesoKg, metros),
  };
}

/** Modo 1 — "subi tantos andares". O jeito como as pessoas contam. */
export const deAndares = (
  andares: number,
  pesoKg: number,
  degrausPorAndar = DEGRAUS_POR_ANDAR_PADRAO,
  espelho = ESPELHO_PADRAO,
  cadencia = CADENCIA_PADRAO,
  desceu = false,
): Resultado => monta(pesoKg, andares * degrausPorAndar, espelho, degrausPorAndar, cadencia, desceu);

/** Modo 2 — "subi tantos degraus", para quem contou ou tem o dado do relógio. */
export const deDegraus = (
  degraus: number,
  pesoKg: number,
  degrausPorAndar = DEGRAUS_POR_ANDAR_PADRAO,
  espelho = ESPELHO_PADRAO,
  cadencia = CADENCIA_PADRAO,
  desceu = false,
): Resultado => monta(pesoKg, degraus, espelho, degrausPorAndar, cadencia, desceu);

/** Modo 3 — tempo contínuo, que é o caso da máquina de escada da academia. */
export const deTempo = (
  minutos: number,
  pesoKg: number,
  degrausPorAndar = DEGRAUS_POR_ANDAR_PADRAO,
  espelho = ESPELHO_PADRAO,
  cadencia = CADENCIA_PADRAO,
): Resultado => monta(pesoKg, minutos * cadencia, espelho, degrausPorAndar, cadencia, false);

/** Modo 4 — meta de calorias. Devolve andares e degraus. */
export function deKcal(
  alvoKcal: number,
  pesoKg: number,
  degrausPorAndar = DEGRAUS_POR_ANDAR_PADRAO,
  espelho = ESPELHO_PADRAO,
  cadencia = CADENCIA_PADRAO,
  desceu = false,
): Resultado {
  // A meta é sobre o líquido total, que é o número que a página destaca.
  const porDegrau = kcalDeSubir(pesoKg, espelho) * (desceu ? 1 + FATOR_DESCIDA : 1);
  const degraus = porDegrau > 0 ? alvoKcal / porDegrau : 0;
  return { ...monta(pesoKg, degraus, espelho, degrausPorAndar, cadencia, desceu), kcalLiquida: alvoKcal };
}

export const simulacaoUmQuilo = (
  pesoKg: number,
  degrausPorAndar = DEGRAUS_POR_ANDAR_PADRAO,
  espelho = ESPELHO_PADRAO,
): Resultado => deKcal(KCAL_POR_KG_GORDURA, pesoKg, degrausPorAndar, espelho);

/* ───────────────────────── Formatação ───────────────────────── */

export function arredondaKcal(k: number): number {
  if (!Number.isFinite(k) || k <= 0) return 0;
  // Abaixo de 10 kcal, uma casa decimal — senão "subi 2 andares" devolveria
  // um zero redondo e a ferramenta pareceria quebrada.
  if (k < 10) return Math.round(k * 10) / 10;
  if (k >= 1000) return Math.round(k / 10) * 10;
  return Math.round(k);
}

export const formataKcal = (k: number): string =>
  arredondaKcal(k).toLocaleString('pt-BR', { maximumFractionDigits: 1 });

export function formataTempo(min: number): string {
  if (!Number.isFinite(min) || min <= 0) return '—';
  if (min < 1) return `${Math.round(min * 60)} s`;
  const m = Math.round(min);
  if (m < 60) return `${m} min`;
  const h = Math.floor(m / 60);
  const r = m % 60;
  if (r === 0) return h === 1 ? '1 hora' : `${h} horas`;
  return `${h}h${String(r).padStart(2, '0')}`;
}

export function formataAndares(a: number): string {
  if (!Number.isFinite(a) || a <= 0) return '—';
  const v = Math.round(a * 10) / 10;
  return `${v.toLocaleString('pt-BR')} ${v === 1 ? 'andar' : 'andares'}`;
}

export function formataMetros(m: number): string {
  if (!Number.isFinite(m) || m <= 0) return '—';
  if (m >= 1000) return `${(Math.round(m / 100) / 10).toLocaleString('pt-BR')} km`;
  return `${Math.round(m)} m`;
}

export const formataDegraus = (d: number): string =>
  !Number.isFinite(d) || d <= 0 ? '—' : `${Math.round(d).toLocaleString('pt-BR')} degraus`;

export function fraseContexto(pesoKg: number, r: Resultado): string {
  const ida = r.desceu ? 'subir e descer' : 'subir';
  return (
    `Para uma pessoa de ${Math.round(pesoKg)} kg, ${ida} ${formataAndares(r.andares)} ` +
    `(${formataDegraus(r.degraus)}, ${formataMetros(r.metros)} de altura) representa um gasto ` +
    `líquido estimado de aproximadamente ${formataKcal(r.kcalLiquida)} kcal.`
  );
}

/* ───────────────────────── Tabelas ───────────────────────── */

export const PESOS_TABELA = [50, 60, 70, 80, 90, 100, 120] as const;
export const ANDARES_TABELA = [1, 3, 5, 10, 20, 50] as const;

export interface LinhaPeso {
  peso: number;
  porDegrau: number;
  porAndar: number;
  dezAndares: number;
}

/**
 * A tabela que desmonta o "0,17 kcal por degrau" que circula sem peso.
 * O peso não é um detalhe da conta: ele é metade dela.
 */
export const tabelaPorPeso = (
  espelho = ESPELHO_PADRAO,
  degrausPorAndar = DEGRAUS_POR_ANDAR_PADRAO,
): LinhaPeso[] =>
  PESOS_TABELA.map((peso) => ({
    peso,
    porDegrau: kcalDeSubir(peso, espelho),
    porAndar: kcalDeSubir(peso, espelho * degrausPorAndar),
    dezAndares: kcalDeSubir(peso, espelho * degrausPorAndar * 10),
  }));

export interface LinhaAndares {
  andares: number;
  degraus: number;
  metros: number;
  soSubindo: number;
  comDescida: number;
  minutos: number;
}

export const tabelaPorAndares = (
  pesoKg: number,
  degrausPorAndar = DEGRAUS_POR_ANDAR_PADRAO,
  espelho = ESPELHO_PADRAO,
  cadencia = CADENCIA_PADRAO,
): LinhaAndares[] =>
  ANDARES_TABELA.map((andares) => {
    const r = deAndares(andares, pesoKg, degrausPorAndar, espelho, cadencia, true);
    return {
      andares,
      degraus: r.degraus,
      metros: r.metros,
      soSubindo: r.kcalSubida,
      comDescida: r.kcalLiquida,
      minutos: r.minutos,
    };
  });

export interface LinhaRitmo {
  ritmo: (typeof RITMOS)[number];
  met: number;
  minutosDezAndares: number;
  kcalPorMinuto: number;
}

/**
 * A tabela que mostra o que a pressa muda e o que não muda: o MET e o
 * tempo mudam bastante; o trabalho vertical de dez andares é o mesmo nos
 * três ritmos, e é por isso que ele não aparece aqui.
 */
export const tabelaPorRitmo = (
  pesoKg: number,
  degrausPorAndar = DEGRAUS_POR_ANDAR_PADRAO,
  espelho = ESPELHO_PADRAO,
): LinhaRitmo[] =>
  RITMOS.map((r) => {
    const res = deAndares(10, pesoKg, degrausPorAndar, espelho, r.cadencia);
    return {
      ritmo: r,
      met: res.met,
      minutosDezAndares: res.minutos,
      kcalPorMinuto: res.kcalSubida / res.minutos,
    };
  });

/** Projeção de rotina: tantos andares por dia, ao longo de um ano. */
export interface Rotina {
  andaresPorDia: number;
  porDia: number;
  porMes: number;
  porAno: number;
  quilosNoAno: number;
}

export const projecaoRotina = (
  andaresPorDia: number,
  pesoKg: number,
  degrausPorAndar = DEGRAUS_POR_ANDAR_PADRAO,
  espelho = ESPELHO_PADRAO,
  diasPorSemana = 5,
): Rotina => {
  const porDia = deAndares(andaresPorDia, pesoKg, degrausPorAndar, espelho).kcalSubida;
  const porAno = porDia * diasPorSemana * 52;
  return {
    andaresPorDia,
    porDia,
    porMes: (porAno / 12),
    porAno,
    quilosNoAno: porAno / KCAL_POR_KG_GORDURA,
  };
};

/* ───────────────────────── Textos fixos ───────────────────────── */

export const NOTA_LIQUIDO_PRIMEIRO =
  'Nas outras calculadoras deste site o número grande é o bruto. Aqui é o líquido, de propósito: o trabalho de erguer o seu corpo é exato e não depende de quanto tempo você levou, enquanto o bruto muda conforme o ritmo que a gente supõe. Numa página que existe para mostrar que dá para calcular sem supor, o número exato tem que vir primeiro.';

export const NOTA_ESTIMATIVA =
  'É uma estimativa, mas a mais firme do cluster: aqui não há arrasto do ar, nem economia de movimento variando muito entre pessoas. O que sobra de incerteza está na altura real do seu degrau e em quanto você se apoia no corrimão.';

export const NOTA_CORRIMAO =
  'Apoiar-se no corrimão reduz o gasto de verdade — parte do peso deixa de ser erguida pelas pernas. Quem sobe pendurado no corrimão gasta menos do que esta conta devolve, e quem precisa do corrimão para subir com segurança deve continuar usando: a conta é que se ajusta, não o contrário.';

export const NOTA_DESCIDA =
  'Descer custa cerca de 23% do que custa subir: o músculo trabalha freando o corpo, mas a favor da gravidade. É pouco em caloria e muito em desgaste — a descida é a parte que mais castiga joelho, e é ela, não a subida, que costuma doer no dia seguinte.';

export const NOTA_ELEVADOR =
  'Trocar o elevador pela escada é um hábito excelente e uma alavanca fraca de emagrecimento. As duas coisas são verdade ao mesmo tempo, e a página mostra os números das duas.';

export const NOTA_ESPELHO =
  'A NBR 9050 pede degraus entre 16 e 18 cm, e a conta parte de 17,5 cm. Prédio antigo, escada de serviço e sobrado costumam fugir disso — se você souber a altura do seu degrau, vale ajustar: ela entra multiplicando o resultado inteiro.';

export const NOTA_BRUTO =
  'O bruto inclui o que você gastaria parado no mesmo tempo, e por isso depende do ritmo suposto. O líquido não depende: é o trabalho de erguer o seu corpo àquela altura, e seria o mesmo se você tivesse levado o dobro do tempo.';

export const NOTA_SEM_PERDA_LOCALIZADA =
  'Nenhum exercício escolhe de onde o corpo tira gordura. Subir escada aumenta o gasto do dia e fortalece a perna; onde a gordura sai primeiro é decidido por genética e hormônio, não pelo movimento.';

export const NOTA_SEGURANCA =
  'Escada é impacto e é carga no joelho, principalmente na descida. Para quem está acima do peso, tem dor patelofemoral ou se recupera de lesão, começar pela subida e descer de elevador é uma escolha sensata — e dor que persiste é assunto para médico ou fisioterapeuta, não para subir mais andares.';

export const NOTA_NAO_PRESCRICAO =
  'Esta é uma estimativa educativa de gasto energético. Não é avaliação metabólica, não substitui calorimetria indireta, não prescreve treino e não diagnostica nada.';
