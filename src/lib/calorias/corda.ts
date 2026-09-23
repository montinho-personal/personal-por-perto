/**
 * O motor da página de calorias de pular corda.
 *
 * A SEXTA FÍSICA DO CLUSTER
 *
 *     caminhada → decide o TEMPO
 *     corrida   → decide a DISTÂNCIA
 *     bicicleta → decide a VELOCIDADE
 *     natação   → decide o ESTILO
 *     escada    → decide a ALTURA VERTICAL
 *     corda     → a cadência quase NÃO decide nada
 *
 * Esta é a atividade em que a intuição erra de forma mais limpa. Todo mundo
 * supõe que pular mais rápido gasta mais. Nos valores medidos do Compêndio:
 *
 *     menos de 100 pulos/min →  8,8 METs
 *     100 a 120 pulos/min    → 11,8 METs
 *     120 a 160 pulos/min    → 12,3 METs
 *
 * Subir de 110 para 140 pulos por minuto — quase 30% mais rápido — custa
 * 4% mais. E POR PULO fica mais barato: 11,8/110 contra 12,3/140 dá 18% de
 * economia por pulo. O motivo é simples e ninguém diz: pulo rápido é pulo
 * BAIXO. Quem acelera não está trabalhando mais, está trabalhando menos por
 * repetição e repetindo mais vezes.
 *
 * É o oposto exato da bicicleta, onde dobrar a velocidade triplica o gasto
 * porque cria trabalho novo contra o ar. Aqui acelerar não cria trabalho
 * novo — redistribui o mesmo.
 *
 * A LENDA QUE ESTA PÁGINA DESMONTA
 *
 * "Dez minutos de corda queimam mais que trinta minutos de corrida" circula
 * em veículo grande no Brasil, e algumas das próprias matérias que a
 * repetem trazem, no mesmo texto, o dado que a refuta: corda a 110 pulos
 * por minuto e corrida a 11 km/h têm praticamente o mesmo MET.
 *
 * Se o MET é o mesmo, dez minutos de corda valem dez minutos de corrida —
 * não trinta. Para a lenda ser verdadeira a corda teria de valer perto de
 * 35 METs, acima do que qualquer ser humano sustenta.
 *
 * O que é verdade, e continua impressionante: dez minutos de corda custam o
 * mesmo que dez minutos correndo a 11,3 km/h, que é ritmo de 5min19 por
 * quilômetro. Pouca gente corre assim. A corda não é mágica — ela é
 * intensa, e é exatamente por isso que ninguém aguenta meia hora dela.
 *
 * POR QUE AQUI A FÍSICA NÃO RESOLVE (AO CONTRÁRIO DA ESCADA)
 *
 * Na escada, massa × gravidade × altura explica o gasto quase inteiro. Dá
 * para calcular sem tabela. Na corda, a mesma conta explica pouco mais de
 * um quarto.
 *
 * Erguer 70 kg uns 5 cm, 110 vezes por minuto, a 25% de eficiência, dá
 * cerca de 3,6 kcal/min. A medição direta encontra 13,2 kcal/min líquidas.
 * Sobram três quartos que não estão em levantar o centro de massa: estão no
 * ciclo de alongamento e encurtamento da panturrilha e do pé, na absorção
 * da aterrissagem, na rotação dos braços e na velocidade com que a força
 * precisa ser produzida a cada pulo.
 *
 * Isso não é defeito da conta — é informação. Vale declarar que a física
 * simples serve para uma atividade do cluster e não serve para outra, em
 * vez de aplicar a mesma régua nas duas e fingir que funciona.
 *
 * O QUE DECIDE, ENTÃO
 *
 * Se a cadência quase não muda o custo por minuto, o que decide é quantos
 * minutos de corda realmente aconteceram. E aí entra a realidade que as
 * calculadoras ignoram: corda não se faz em bloco contínuo. Faz-se em
 * séries, com descanso entre elas, porque a intensidade não permite outra
 * coisa. Por isso existe um modo de séries aqui — é o jeito como a
 * atividade acontece de verdade.
 */

/* ───────────────────────── Fontes ───────────────────────── */

export interface Fonte {
  rotulo: string;
  rotuloCurto: string;
  url: string;
  resumo: string;
}

export const FONTE_COMPENDIO: Fonte = {
  rotulo:
    'Herrmann SD, Willis EA, Ainsworth BE, et al. 2024 Adult Compendium of Physical Activities. Journal of Sport and Health Science, 2024',
  rotuloCurto: 'Compêndio de Atividades Físicas (2024)',
  url: 'https://pacompendium.com/sports/',
  resumo:
    'mede pular corda em três faixas de cadência: 8,8 METs abaixo de 100 pulos por minuto, 11,8 entre 100 e 120 e 12,3 entre 120 e 160. É a tabela que mostra que acelerar quase não muda o custo por minuto.',
};

export const FONTE_ACSM: Fonte = {
  rotulo:
    "American College of Sports Medicine. ACSM's Guidelines for Exercise Testing and Prescription, 11ª edição, 2021",
  rotuloCurto: 'ACSM (2021)',
  url: 'https://www.acsm.org/education-resources/books/guidelines-exercise-testing-prescription',
  resumo:
    'fornece a equação da corrida usada aqui para a comparação honesta: é ela que mostra que corda em ritmo moderado custa o mesmo por minuto que correr a pouco mais de 11 km/h.',
};

export const FONTE_SSC: Fonte = {
  rotulo:
    'Komi PV. Stretch-shortening cycle: a powerful model to study normal and fatigued muscle. Journal of Biomechanics, 2000',
  rotuloCurto: 'Komi (2000)',
  url: 'https://pubmed.ncbi.nlm.nih.gov/11074663/',
  resumo:
    'descreve o ciclo de alongamento e encurtamento, o mecanismo de absorver e devolver energia elástica que domina o salto repetido — e a razão de a conta de erguer o centro de massa explicar só parte do gasto da corda.',
};

export const FONTE_HALL: Fonte = {
  rotulo:
    'Hall KD, Sacks G, Chandramohan D, et al. Quantification of the effect of energy imbalance on bodyweight. The Lancet, 2011',
  rotuloCurto: 'Hall et al. (2011)',
  url: 'https://pubmed.ncbi.nlm.nih.gov/21872751/',
  resumo:
    'demonstra que a regra dos 7.700 kcal por quilo superestima a perda ao longo do tempo: o gasto do corpo cai conforme ele emagrece, e a resposta não é linear.',
};

export const FONTES: Fonte[] = [FONTE_COMPENDIO, FONTE_ACSM, FONTE_SSC, FONTE_HALL];

export const KCAL_POR_KG_GORDURA = 7700;

/* ───────────────────────── Limites ───────────────────────── */

export const PESO_MIN = 30;
export const PESO_MAX = 250;
export const PESO_PADRAO = 70;

/**
 * O teto de minutos é BEM mais baixo que nas outras cinco ferramentas, e
 * isso é conteúdo, não limitação técnica. Corda contínua além de uma hora
 * não existe fora de recorde; herdar o teto de 300 minutos da natação daria
 * ao usuário a impressão de que a ferramenta considera isso normal.
 */
export const MINUTOS_MIN = 1;
export const MINUTOS_MAX = 60;
/** O valor com que o campo de tempo nasce. A página o usa; não é enfeite. */
export const MINUTOS_PADRAO = 10;

/**
 * Acima disto a ferramenta avisa em vez de só responder.
 *
 * Quinze minutos de corda SEM PARAR já são mais do que a maioria das
 * pessoas treinadas sustenta. A conta continua certa; o cenário é que
 * raramente existe, e quem informou trinta minutos quase sempre está
 * somando o descanso entre séries. Para esse caso existe o modo de séries.
 */
export const MINUTOS_ALERTA = 15;

export const PULOS_MIN = 20;
export const PULOS_MAX = 20000;

/** Cadência, em pulos por minuto. */
export const CADENCIA_MIN = 50;
export const CADENCIA_MAX = 200;
export const CADENCIA_PADRAO = 110;

/** Séries e duração de cada uma, em segundos. */
export const SERIES_MIN = 1;
export const SERIES_MAX = 40;
export const SERIES_PADRAO = 8;
export const SEGUNDOS_MIN = 5;
export const SEGUNDOS_MAX = 600;
export const SEGUNDOS_PADRAO = 45;

/**
 * A velocidade de corrida que a ferramenta usa para converter o resultado em
 * "equivale a correr tantos minutos".
 *
 * Mora AQUI, e não no script da interface, por um motivo concreto: enquanto
 * ela vivia só no cliente, a prosa da página argumentava com 11,3 km/h (a
 * velocidade de MET igual ao da corda moderada) e a ferramenta convertia para
 * 10 km/h, sem que o texto servido mencionasse esse número em lugar nenhum.
 * A página descrevia errado o próprio instrumento. Número que sai na tela
 * precisa estar onde a página e os testes alcancem.
 *
 * Dez km/h são 6min00 por quilômetro: redondo, reconhecível e igual para
 * todas as faixas, o que permite comparar sessões entre si.
 */
export const VELOCIDADE_CORRIDA_REF = 10;

/** Escada e corda devolvem números pequenos: o piso de meta acompanha. */
export const KCAL_MIN = 5;
export const KCAL_MAX = 2000;

/* ───────────────────────── A tabela do Compêndio ───────────────────────── */

export interface Faixa {
  id: string;
  met: number;
  nome: string;
  /** Cadência típica da faixa, em pulos por minuto. */
  cadencia: number;
  faixa: string;
  comoReconhecer: string;
}

/**
 * Valores do Compêndio, copiados e não ajustados. Os códigos são 15552
 * (lento), 15551 (moderado) e 15550 (rápido).
 */
export const FAIXAS: Faixa[] = [
  {
    id: 'lento',
    met: 8.8,
    nome: 'Lento',
    cadencia: 85,
    faixa: 'abaixo de 100 pulos/min',
    comoReconhecer: 'Pulo com os dois pés e uma batida de marcação entre os pulos. É como quase todo mundo começa.',
  },
  {
    id: 'moderado',
    met: 11.8,
    nome: 'Moderado',
    cadencia: 110,
    faixa: '100 a 120 pulos/min',
    comoReconhecer: 'Um pulo por giro da corda, sem batida de marcação. O ritmo mais comum de quem já pega o jeito.',
  },
  {
    id: 'rapido',
    met: 12.3,
    nome: 'Rápido',
    cadencia: 140,
    faixa: '120 a 160 pulos/min',
    comoReconhecer: 'Pulo baixo e rápido, de quem treina corda. Pouca gente sustenta isso por mais de um ou dois minutos.',
  },
];

export const faixa = (id: string): Faixa => FAIXAS.find((f) => f.id === id) ?? FAIXAS[1];

/** MET de uma faixa. Sem interpolação: as faixas do Compêndio são degraus. */
export const metCorda = (id: string): number => faixa(id).met;

/**
 * A cadência de uma faixa, quando quem chama não informa uma.
 *
 * Herdar uma constante única (110) para todas as faixas fazia a faixa lenta
 * — definida como ABAIXO de 100 pulos por minuto — devolver 110. A faixa é
 * a cadência; as duas não podem se contradizer.
 */
export const cadenciaDaFaixa = (id: string): number => faixa(id).cadencia;

/**
 * Faixas do Compêndio com os limites declarados, para conferir coerência
 * entre a faixa escolhida e a cadência informada.
 */
const LIMITES: Record<string, [number, number]> = {
  lento: [CADENCIA_MIN, 100],
  moderado: [100, 120],
  rapido: [120, 160],
};

/**
 * A cadência informada briga com a faixa escolhida?
 *
 * Pedir o MET da faixa rápida informando 70 pulos por minuto é pedir o
 * esforço de uma pessoa com o ritmo de outra — o mesmo erro que a
 * calculadora de natação avisa quando o ritmo não bate com a faixa.
 */
export function cadenciaIncoerente(idFaixa: string, cadencia: number): boolean {
  const lim = LIMITES[faixa(idFaixa).id];
  if (!lim || !Number.isFinite(cadencia) || cadencia <= 0) return false;
  return cadencia < lim[0] || cadencia > lim[1];
}

/* ───────────────────────── Física, para a comparação honesta ───────────────────────── */

export const G = 9.81;
export const J_POR_KCAL = 4184;

/** Altura típica do centro de massa num pulo baixo e eficiente, em metros. */
export const ALTURA_PULO = 0.05;

/** Eficiência mecânica usada na ilustração. É a faixa aceita para salto. */
export const EFICIENCIA = 0.25;

/**
 * Quanto do gasto medido a conta de erguer o centro de massa explica.
 *
 * Existe para a página poder mostrar que a régua que resolveu a escada NÃO
 * resolve a corda — e quanto exatamente ela deixa de fora.
 */
export function fracaoExplicadaPelaAltura(
  pesoKg = PESO_PADRAO,
  idFaixa = 'moderado',
): { mecanico: number; medido: number; fracao: number } {
  const f = faixa(idFaixa);
  const joulesPorPulo = pesoKg * G * ALTURA_PULO;
  const kcalPorMinMecanico = (joulesPorPulo * f.cadencia) / J_POR_KCAL / EFICIENCIA;
  // O líquido medido: o MET da tabela menos 1 MET de repouso.
  const kcalPorMinMedido = ((f.met - 1) * 3.5 * pesoKg) / 200;
  return {
    mecanico: kcalPorMinMecanico,
    medido: kcalPorMinMedido,
    fracao: kcalPorMinMecanico / kcalPorMinMedido,
  };
}

/* ───────────────────────── Validação ───────────────────────── */

export const pesoValido = (p: number | null): p is number =>
  p !== null && Number.isFinite(p) && p >= PESO_MIN && p <= PESO_MAX;

export const minutosValidos = (m: number | null): m is number =>
  m !== null && Number.isFinite(m) && m >= MINUTOS_MIN && m <= MINUTOS_MAX;

export const pulosValidos = (p: number | null): p is number =>
  p !== null && Number.isFinite(p) && p >= PULOS_MIN && p <= PULOS_MAX;

export const cadenciaValida = (c: number | null): c is number =>
  c !== null && Number.isFinite(c) && c >= CADENCIA_MIN && c <= CADENCIA_MAX;

export const seriesValidas = (s: number | null): s is number =>
  s !== null && Number.isFinite(s) && s >= SERIES_MIN && s <= SERIES_MAX;

export const segundosValidos = (s: number | null): s is number =>
  s !== null && Number.isFinite(s) && s >= SEGUNDOS_MIN && s <= SEGUNDOS_MAX;

export const kcalValida = (k: number | null): k is number =>
  k !== null && Number.isFinite(k) && k >= KCAL_MIN && k <= KCAL_MAX;

export function parseNumero(bruto: string): number | null {
  const limpo = bruto.trim().replace(/\s/g, '').replace(',', '.');
  if (!limpo) return null;
  const n = Number(limpo);
  return Number.isFinite(n) ? n : null;
}

/* ───────────────────────── O cálculo ───────────────────────── */

export const kcalPorMinuto = (met: number, pesoKg: number): number => (met * 3.5 * pesoKg) / 200;

export type Cenario = 'continuo' | 'series';

export interface Resultado {
  cenario: Cenario;
  idFaixa: string;
  met: number;
  cadencia: number;
  /** Minutos de corda acontecendo. É o que multiplica o MET. */
  minutos: number;
  /** Pulos dados. */
  pulos: number;
  /** Séries e segundos por série, quando o cenário é de séries. */
  series: number;
  segundosPorSerie: number;
  kcal: number;
  kcalLiquida: number;
  /** Custo por pulo, que é o número que desmonta a intuição da cadência. */
  porPulo: number;
  /** Corda contínua por tempo longo demais. Ver MINUTOS_ALERTA. */
  tempoImplausivel: boolean;
}

function monta(args: {
  cenario: Cenario;
  idFaixa: string;
  pesoKg: number;
  minutos: number;
  cadencia: number;
  series: number;
  segundosPorSerie: number;
}): Resultado {
  const met = metCorda(args.idFaixa);
  const kcal = kcalPorMinuto(met, args.pesoKg) * args.minutos;
  const pulos = args.minutos * args.cadencia;
  return {
    cenario: args.cenario,
    idFaixa: args.idFaixa,
    met,
    cadencia: args.cadencia,
    minutos: args.minutos,
    pulos,
    series: args.series,
    segundosPorSerie: args.segundosPorSerie,
    kcal,
    kcalLiquida: kcal - kcalPorMinuto(1, args.pesoKg) * args.minutos,
    porPulo: pulos > 0 ? kcal / pulos : 0,
    /*
     * O aviso vale só para corda CONTÍNUA. Quem informou oito séries de 45
     * segundos tem seis minutos de corda distribuídos em vinte de treino —
     * isso é normal e não merece aviso. Quem informou trinta minutos
     * seguidos provavelmente somou o descanso.
     */
    tempoImplausivel: args.cenario === 'continuo' && args.minutos > MINUTOS_ALERTA,
  };
}

/** Modo 1 — "pulei tantos minutos, sem parar". */
export const deTempo = (
  minutos: number,
  pesoKg: number,
  idFaixa = 'moderado',
  cadencia?: number,
): Resultado =>
  monta({
    cenario: 'continuo',
    idFaixa,
    pesoKg,
    minutos,
    cadencia: cadencia ?? cadenciaDaFaixa(idFaixa),
    series: 0,
    segundosPorSerie: 0,
  });

/** Modo 2 — "dei tantos pulos". É a unidade de quem conta ou usa aplicativo. */
export function dePulos(
  pulos: number,
  pesoKg: number,
  idFaixa = 'moderado',
  cadencia?: number,
): Resultado {
  const cad = cadencia ?? cadenciaDaFaixa(idFaixa);
  return monta({
    cenario: 'continuo',
    idFaixa,
    pesoKg,
    minutos: cad > 0 ? pulos / cad : 0,
    cadencia: cad,
    series: 0,
    segundosPorSerie: 0,
  });
}

/**
 * Modo 3 — séries, que é como corda acontece de verdade.
 *
 * O descanso entre séries NÃO entra na conta: nele a pessoa gasta o de
 * repouso, que já estava no dia dela de qualquer forma. Contar o treino
 * inteiro como corda é o erro que infla os números do gênero.
 */
export const deSeries = (
  series: number,
  segundosPorSerie: number,
  pesoKg: number,
  idFaixa = 'moderado',
  cadencia?: number,
): Resultado =>
  monta({
    cenario: 'series',
    idFaixa,
    pesoKg,
    minutos: (series * segundosPorSerie) / 60,
    cadencia: cadencia ?? cadenciaDaFaixa(idFaixa),
    series,
    segundosPorSerie,
  });

/** Modo 4 — meta de calorias. Devolve minutos e pulos. */
export function deKcal(
  alvoKcal: number,
  pesoKg: number,
  idFaixa = 'moderado',
  cadencia?: number,
): Resultado {
  const porMin = kcalPorMinuto(metCorda(idFaixa), pesoKg);
  const minutos = porMin > 0 ? alvoKcal / porMin : 0;
  return { ...deTempo(minutos, pesoKg, idFaixa, cadencia), kcal: alvoKcal };
}

export const simulacaoUmQuilo = (pesoKg: number, idFaixa = 'moderado'): Resultado =>
  deKcal(KCAL_POR_KG_GORDURA, pesoKg, idFaixa);

/* ───────────────────────── Formatação ───────────────────────── */

export function arredondaKcal(k: number): number {
  if (!Number.isFinite(k) || k <= 0) return 0;
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

export const formataPulos = (p: number): string =>
  !Number.isFinite(p) || p <= 0 ? '—' : `${Math.round(p).toLocaleString('pt-BR')} pulos`;

export function fraseContexto(pesoKg: number, r: Resultado): string {
  const f = faixa(r.idFaixa);
  if (r.cenario === 'series') {
    return (
      `Para uma pessoa de ${Math.round(pesoKg)} kg, ${r.series} séries de ${r.segundosPorSerie} ` +
      `segundos em ritmo ${f.nome.toLowerCase()} dão ${formataTempo(r.minutos)} de corda — ` +
      `${formataPulos(r.pulos)} — e um gasto estimado de aproximadamente ` +
      `${formataKcal(r.kcal)} kcal. O descanso entre as séries não entra na conta.`
    );
  }
  return (
    `Para uma pessoa de ${Math.round(pesoKg)} kg, ${formataTempo(r.minutos)} de corda em ritmo ` +
    `${f.nome.toLowerCase()} — ${formataPulos(r.pulos)} — representam um gasto estimado de ` +
    `aproximadamente ${formataKcal(r.kcal)} kcal.`
  );
}

/* ───────────────────────── Tabelas ───────────────────────── */

export const PESOS_TABELA = [50, 60, 70, 80, 90, 100, 120] as const;
export const MINUTOS_TABELA = [1, 3, 5, 10, 15] as const;

export interface LinhaFaixa {
  faixa: Faixa;
  kcal10min: number;
  porPulo: number;
  pulos10min: number;
}

/**
 * A tabela que desmonta a intuição da cadência: dez minutos em cada faixa.
 * O gasto quase não muda; o número de pulos muda muito; e o custo POR PULO
 * cai conforme a cadência sobe.
 */
export const tabelaPorFaixa = (pesoKg: number): LinhaFaixa[] =>
  FAIXAS.map((f) => {
    const r = deTempo(10, pesoKg, f.id);
    return { faixa: f, kcal10min: r.kcal, porPulo: r.porPulo, pulos10min: r.pulos };
  });

export interface LinhaPeso {
  peso: number;
  kcal10min: number;
  kcalLiquida: number;
}

export const tabelaPorPeso = (idFaixa = 'moderado'): LinhaPeso[] =>
  PESOS_TABELA.map((peso) => {
    const r = deTempo(10, peso, idFaixa);
    return { peso, kcal10min: r.kcal, kcalLiquida: r.kcalLiquida };
  });

export interface LinhaTempo {
  minutos: number;
  kcal: number;
  pulos: number;
}

export const tabelaPorTempo = (pesoKg: number, idFaixa = 'moderado'): LinhaTempo[] =>
  MINUTOS_TABELA.map((minutos) => {
    const r = deTempo(minutos, pesoKg, idFaixa);
    return { minutos, kcal: r.kcal, pulos: r.pulos };
  });

/* ───────────────────────── Textos fixos ───────────────────────── */

export const NOTA_LENDA =
  'A frase "dez minutos de corda valem trinta de corrida" é falsa, e por um fator de três. Corda em ritmo moderado e corrida em ritmo forte têm praticamente o mesmo custo por minuto — então dez minutos de corda valem dez minutos de corrida. O que impressiona de verdade é outra coisa: esses dez minutos custam o mesmo que correr em ritmo que pouca gente sustenta.';

export const NOTA_CADENCIA =
  'Acelerar a corda quase não muda o gasto por minuto, e deixa cada pulo mais barato — porque pulo rápido é pulo baixo. Se quiser gastar mais, o caminho não é girar a corda mais rápido: é pular mais tempo, ou pular mais alto.';

export const NOTA_SERIES =
  'Corda não se faz em bloco contínuo, e a conta precisa saber disso. Oito séries de 45 segundos são seis minutos de corda dentro de um treino de vinte — contar os vinte inflaria o resultado em mais de três vezes.';

export const NOTA_TEMPO_IMPLAUSIVEL =
  'Corda contínua por esse tempo é raro mesmo entre quem treina. A conta está certa para o tempo informado, mas se você está somando o descanso entre séries, use o modo de séries: ele conta só os minutos em que a corda girou.';

export const NOTA_FISICA =
  'Erguer o corpo alguns centímetros a cada pulo explica pouco mais de um quarto do gasto medido. O resto está no ciclo elástico da panturrilha e do pé, na absorção da aterrissagem, na rotação dos braços e na velocidade com que a força é produzida. Diferente da escada, aqui a física simples não dá conta — e vale dizer isso em vez de fingir que dá.';

export const NOTA_CADENCIA_INCOERENTE =
  'A cadência informada está fora da faixa que o Compêndio mediu para esse ritmo. As duas coisas andam juntas: a faixa É definida pela cadência. Ou ajuste a cadência, ou escolha o ritmo que corresponde a ela — senão a conta usa o esforço de uma pessoa com a velocidade de outra.';

export const NOTA_BRUTO =
  'O número é bruto: inclui o que você gastaria parado nesse tempo. O acréscimo real ao seu dia é um pouco menor, e é esse que conta num déficit.';

export const NOTA_FONTE_LACUNA =
  'Uma limitação de fonte que vale declarar: os valores de 11,8 e 12,3 METs estão confirmados na edição de 2024 do Compêndio, e são os mesmos da edição de 2011. O de 8,8 METs para a faixa lenta foi verificado pelo código e pela descrição na edição de 2011, e não deu para confirmar de forma independente se a de 2024 o manteve. Ele é o número menos firme desta página, e é também o que menos pesa: quase ninguém usa a calculadora para pulo lento com batida de marcação.';

export const NOTA_ESTIMATIVA =
  'É uma estimativa. Na corda a variação entre pessoas vem principalmente de duas coisas que a tabela não enxerga: a altura do pulo e quantos erros de corda interrompem o ritmo. Quem erra muito gasta menos do que a conta devolve, porque a corda passou menos tempo girando.';

export const NOTA_SEM_PERDA_LOCALIZADA =
  'Nenhum exercício escolhe de onde o corpo tira gordura. A corda aumenta o gasto do dia e é excelente para panturrilha, tornozelo e coordenação; onde a gordura sai primeiro é decidido por genética e hormônio, não pelo movimento.';

export const NOTA_SEGURANCA =
  'Corda é impacto repetido em tornozelo, joelho e panturrilha, e é uma das atividades em que começar devagar importa mais. Para quem está acima do peso, tem dor articular ou vem de lesão, séries curtas com muito descanso são o ponto de partida sensato — e dor que persiste é assunto para médico ou fisioterapeuta, não para aumentar o volume.';

export const NOTA_NAO_PRESCRICAO =
  'Esta é uma estimativa educativa de gasto energético. Não é avaliação metabólica, não substitui calorimetria indireta, não prescreve treino e não diagnostica nada.';
