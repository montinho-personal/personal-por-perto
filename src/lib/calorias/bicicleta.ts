/**
 * O motor da página de calorias do pedal.
 *
 * A TERCEIRA FÍSICA DO CLUSTER
 *
 * Caminhada e corrida já mostraram duas relações diferentes entre ritmo e
 * gasto. O pedal traz a terceira, e é a mais dramática das três.
 *
 * Pedalando, a resistência do ar cresce com o QUADRADO da velocidade, e a
 * potência necessária para vencê-la cresce com o CUBO. Acima de uns 15 a
 * 20 km/h no plano, o ar passa a ser a força dominante — e o gasto dispara.
 *
 * Nos valores medidos do Compêndio 2024 isso aparece cru:
 *
 *     ~14 km/h →  4,0 METs
 *     ~21 km/h →  8,0 METs
 *     ~28 km/h → 12,0 METs
 *
 * De 14 para 28 km/h, o gasto por hora TRIPLICA. Na corrida, dobrar a
 * velocidade dobra o gasto por minuto e deixa o custo por quilômetro quase
 * igual; aqui nada disso vale acima de uns 20 km/h. (O "triplica" é do par
 * 14→28: de 12 para 24 dá 2,5×, e de 10 para 20, 1,9× — abaixo de 20 km/h o
 * ar ainda pesa pouco.) O pedal é a atividade em que a velocidade
 * manda mais, e por isso a página é organizada em torno dela.
 *
 * E o custo por quilômetro vai na direção contrária da corrida: sobe de
 * cerca de 0,30 para 0,45 kcal por quilo por quilômetro entre 14 e 28 km/h.
 *
 * DUAS ESCALAS DIFERENTES, PORQUE SÃO DUAS ATIVIDADES DIFERENTES
 *
 * Na RUA o Compêndio mede por velocidade, e faz sentido: a velocidade é
 * uma boa procuração para o esforço, justamente porque o ar cobra caro.
 *
 * Na ERGOMÉTRICA não existe ar para vencer. A velocidade que o painel
 * mostra não diz nada sobre o esforço — dá para marcar 30 km/h com a carga
 * no mínimo. Por isso o Compêndio mede bicicleta estacionária por POTÊNCIA,
 * em watts, e é isso que esta ferramenta pede. Quem não tem watts no painel
 * escolhe o nível de esforço, que é uma aproximação declarada como tal.
 *
 * Usar a velocidade da ergométrica como se fosse velocidade de rua é o erro
 * mais comum das calculadoras genéricas, e ele infla o resultado com
 * facilidade.
 *
 * A SUBIDA
 *
 * Os METs do Compêndio são de pedal no plano. A subida entra por física
 * direta: a potência para erguer o conjunto (ciclista + bicicleta) é
 * massa × g × velocidade vertical. Essa potência mecânica vira gasto
 * metabólico dividindo pela eficiência mecânica bruta do pedal, que a
 * literatura situa perto de 22%.
 *
 * A conferência de que isso é coerente: 100 W na ergométrica são 6,8 METs
 * no Compêndio. Para 70 kg, o gasto líquido disso dá cerca de 496 W
 * metabólicos — eficiência de 20%, dentro da faixa aceita. As duas pontas
 * da ferramenta concordam.
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
  url: 'https://pacompendium.com/bicycling/',
  resumo:
    'mede o pedal na rua por faixa de velocidade — 4,0 METs abaixo de 16 km/h, 6,8 entre 16 e 19, 8,0 entre 19 e 22, 10,0 entre 22 e 26 e 12,0 entre 26 e 31 km/h — e a bicicleta estacionária por potência, em watts.',
};

export const FONTE_COMPENDIO_ERGO: Fonte = {
  rotulo:
    '2024 Adult Compendium of Physical Activities — bicicleta estacionária, por potência',
  rotuloCurto: 'Compêndio 2024 (ergométrica)',
  url: 'https://pacompendium.com/bicycling/',
  resumo:
    'lista a bicicleta estacionária por watts: 5,0 METs a 50 W, 6,8 entre 90 e 100 W, 8,0 entre 101 e 125 W, 10,3 entre 126 e 150 W, 12,5 entre 200 e 229 W e 13,8 entre 230 e 250 W.',
};

export const FONTE_AERODINAMICA: Fonte = {
  rotulo: 'Martin JC, Milliken DL, Cobb JE, McFadden KL, Coggan AR. Validation of a mathematical model for road cycling power. Journal of Applied Biomechanics, 1998',
  rotuloCurto: 'Martin et al. (1998)',
  url: 'https://pubmed.ncbi.nlm.nih.gov/28121252/',
  resumo:
    'valida o modelo matemático da potência no ciclismo de estrada, em que a resistência do ar cresce com o quadrado da velocidade e a potência para vencê-la cresce com o cubo — a razão de o gasto disparar acima de 20 km/h.',
};

export const FONTE_EFICIENCIA: Fonte = {
  rotulo:
    'Ettema G, Lorås HW. Efficiency in cycling: a review. European Journal of Applied Physiology, 2009',
  rotuloCurto: 'Ettema e Lorås (2009)',
  url: 'https://pubmed.ncbi.nlm.nih.gov/19495768/',
  resumo:
    'reúne as medições de eficiência mecânica no ciclismo, que se concentram entre 18% e 25% — é o fator que converte a potência de subir o próprio peso em gasto metabólico.',
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
  FONTE_COMPENDIO,
  FONTE_COMPENDIO_ERGO,
  FONTE_AERODINAMICA,
  FONTE_EFICIENCIA,
  FONTE_HALL,
];

export const KCAL_POR_KG_GORDURA = 7700;

/* ───────────────────────── Limites ───────────────────────── */

export const PESO_MIN = 30;
export const PESO_MAX = 250;
export const PESO_PADRAO = 70;

/** Peso típico de uma bicicleta de passeio com o que se leva nela. Só entra na conta de subida. */
export const PESO_BICICLETA = 12;

export const MINUTOS_MIN = 1;
export const MINUTOS_MAX = 600;

export const KM_MIN = 0.5;
export const KM_MAX = 300;

export const KCAL_MIN = 20;
export const KCAL_MAX = 5000;

/**
 * A faixa em que o Compêndio mede pedal de lazer e treino. Abaixo de 10
 * km/h é passeio de calçada, e acima de 35 km/h só pelotão em revezamento
 * sustenta — extrapolar para lá devolveria ficção.
 */
export const VELOCIDADE_MIN = 10;
export const VELOCIDADE_MAX = 35;
export const VELOCIDADE_PADRAO = 20;

/** Potência na ergométrica, em watts. */
export const WATTS_MIN = 30;
export const WATTS_MAX = 400;
export const WATTS_PADRAO = 100;

export const INCLINACAO_MIN = 0;
export const INCLINACAO_MAX = 15;

/** Eficiência mecânica bruta do pedal. É o que converte watts de subida em gasto. */
export const EFICIENCIA = 0.22;

/**
 * Acima deste MET a ferramenta para de só responder e passa a avisar.
 *
 * A combinação de velocidade e subida é livre — e é justamente por isso que
 * ela produz cenários impossíveis sem reclamar: 35 km/h numa subida de 15%
 * dá mais de 70 METs, cerca de três vezes o que um ciclista profissional
 * sustenta por uma hora. A conta está certa; o cenário é que não existe.
 *
 * Dezesseis METs é o teto do que gente muito bem treinada sustenta por
 * tempo relevante. Acima disso, o que acontece na vida real não é a pessoa
 * gastar aquilo — é a velocidade cair na subida.
 */
export const MET_ALERTA = 16;

/** Gravidade, para a conta de subir o conjunto. */
const G = 9.81;

/* ───────────────────────── Tabelas do Compêndio ───────────────────────── */

export interface FaixaVelocidade {
  /** Velocidade típica da faixa, em km/h — o centro, arredondado. */
  velocidade: number;
  met: number;
  /** A faixa que o Compêndio mediu, para a pessoa se reconhecer. */
  faixa: string;
  comoReconhecer: string;
}

/**
 * Pedal na rua, por velocidade. Os METs são copiados do Compêndio 2024,
 * não ajustados. As faixas originais estão em mph; a conversão para km/h
 * está no rótulo.
 */
export const FAIXAS_RUA: FaixaVelocidade[] = [
  {
    velocidade: 14,
    met: 4.0,
    faixa: 'abaixo de 16 km/h',
    comoReconhecer: 'Passeio. Dá para conversar o tempo todo e ninguém chega suado.',
  },
  {
    velocidade: 17.5,
    met: 6.8,
    faixa: '16 a 19 km/h',
    comoReconhecer: 'Ritmo de quem usa a bike para ir a algum lugar. Esforço leve e constante.',
  },
  {
    velocidade: 21,
    met: 8.0,
    faixa: '19 a 22 km/h',
    comoReconhecer: 'Pedal de treino tranquilo. Dá para falar em frases curtas.',
  },
  {
    velocidade: 24,
    met: 10.0,
    faixa: '22 a 26 km/h',
    comoReconhecer: 'Ritmo forte de quem pedala com regularidade.',
  },
  {
    velocidade: 28,
    met: 12.0,
    faixa: '26 a 31 km/h',
    comoReconhecer: 'Ritmo de grupo rápido. Pouca gente sustenta sozinha por muito tempo.',
  },
];

export interface FaixaPotencia {
  watts: number;
  met: number;
  rotulo: string;
}

/** Bicicleta estacionária, por potência. Valores do Compêndio 2024. */
export const FAIXAS_ERGO: FaixaPotencia[] = [
  { watts: 50, met: 5.0, rotulo: '50 W — aquecimento, carga leve' },
  { watts: 75, met: 6.0, rotulo: '75 W — leve' },
  { watts: 100, met: 6.8, rotulo: '100 W — moderado' },
  { watts: 125, met: 8.0, rotulo: '125 W — moderado forte' },
  { watts: 150, met: 10.3, rotulo: '150 W — forte' },
  { watts: 200, met: 12.5, rotulo: '200 W — muito forte' },
  { watts: 250, met: 13.8, rotulo: '250 W — intenso' },
];

/**
 * Para quem não tem watts no painel. É aproximação, e a página diz isso —
 * cada nível aponta para a potência típica da faixa correspondente.
 */
export const NIVEIS_ESFORCO = [
  { id: 'leve', nome: 'Leve', watts: 60, descricao: 'Conversa fluida, sem suar muito. Aquecimento ou recuperação.' },
  { id: 'moderado', nome: 'Moderado', watts: 100, descricao: 'Respiração acelerada, mas dá para falar frases.' },
  { id: 'forte', nome: 'Forte', watts: 150, descricao: 'Só palavras soltas. É o ritmo de uma aula de spinning média.' },
  { id: 'muito-forte', nome: 'Muito forte', watts: 210, descricao: 'Não dá para falar. Só se sustenta por blocos curtos.' },
] as const;

export type NivelId = (typeof NIVEIS_ESFORCO)[number]['id'];

export const nivel = (id: NivelId) => NIVEIS_ESFORCO.find((n) => n.id === id) ?? NIVEIS_ESFORCO[1];

/* ───────────────────────── Validação ───────────────────────── */

export const pesoValido = (p: number | null): p is number =>
  p !== null && Number.isFinite(p) && p >= PESO_MIN && p <= PESO_MAX;

export const velocidadeValida = (v: number | null): v is number =>
  v !== null && Number.isFinite(v) && v >= VELOCIDADE_MIN && v <= VELOCIDADE_MAX;

export const wattsValidos = (w: number | null): w is number =>
  w !== null && Number.isFinite(w) && w >= WATTS_MIN && w <= WATTS_MAX;

export const minutosValidos = (m: number | null): m is number =>
  m !== null && Number.isFinite(m) && m >= MINUTOS_MIN && m <= MINUTOS_MAX;

export const kmValidos = (k: number | null): k is number =>
  k !== null && Number.isFinite(k) && k >= KM_MIN && k <= KM_MAX;

export const kcalValida = (k: number | null): k is number =>
  k !== null && Number.isFinite(k) && k >= KCAL_MIN && k <= KCAL_MAX;

export const inclinacaoValida = (i: number | null): i is number =>
  i !== null && Number.isFinite(i) && i >= INCLINACAO_MIN && i <= INCLINACAO_MAX;

export function parseNumero(bruto: string): number | null {
  const limpo = bruto.trim().replace(/\s/g, '').replace(',', '.');
  if (!limpo) return null;
  const n = Number(limpo);
  return Number.isFinite(n) ? n : null;
}

/* ───────────────────────── O MET ───────────────────────── */

/** Interpola em linha reta entre pontos medidos, segurando nas pontas. */
function interpola(x: number, pontos: { x: number; y: number }[]): number {
  if (x <= pontos[0].x) return pontos[0].y;
  const ultimo = pontos[pontos.length - 1];
  if (x >= ultimo.x) return ultimo.y;
  for (let i = 0; i < pontos.length - 1; i++) {
    const a = pontos[i];
    const b = pontos[i + 1];
    if (x >= a.x && x <= b.x) return a.y + ((x - a.x) / (b.x - a.x)) * (b.y - a.y);
  }
  return ultimo.y;
}

/** MET do pedal na rua, no plano, para uma velocidade qualquer. */
export const metRua = (velocidadeKmH: number): number =>
  interpola(velocidadeKmH, FAIXAS_RUA.map((f) => ({ x: f.velocidade, y: f.met })));

/** MET da ergométrica para uma potência qualquer. */
export const metErgometrica = (watts: number): number =>
  interpola(watts, FAIXAS_ERGO.map((f) => ({ x: f.watts, y: f.met })));

/** A velocidade bate com um ponto medido, ou a conta interpolou? */
export const velocidadeMedida = (v: number): boolean =>
  FAIXAS_RUA.some((f) => Math.abs(f.velocidade - v) < 0.001);

export const wattsMedidos = (w: number): boolean =>
  FAIXAS_ERGO.some((f) => Math.abs(f.watts - w) < 0.001);

export const kcalPorMinuto = (met: number, pesoKg: number): number => (met * 3.5 * pesoKg) / 200;

/**
 * O acréscimo da subida, em METs.
 *
 * Potência mecânica para erguer o conjunto: massa × g × velocidade vertical.
 * Dividida pela eficiência do pedal, vira potência metabólica; convertida
 * para kcal/min e daí para MET pelo peso do ciclista.
 *
 * O peso da bicicleta entra aqui e SÓ aqui: no plano ele quase não pesa na
 * conta, mas subindo morro é massa que precisa ser erguida.
 */
export function metDaSubida(velocidadeKmH: number, inclinacaoPct: number, pesoKg: number): number {
  if (inclinacaoPct <= 0) return 0;
  const massa = pesoKg + PESO_BICICLETA;
  const vMs = (velocidadeKmH * 1000) / 3600;
  const vVertical = vMs * (inclinacaoPct / 100);
  const wattsMecanicos = massa * G * vVertical;
  const wattsMetabolicos = wattsMecanicos / EFICIENCIA;
  // 1 W = 1 J/s. 1 kcal = 4184 J. Logo kcal/min = W × 60 / 4184.
  const kcalPorMin = (wattsMetabolicos * 60) / 4184;
  // De volta para MET, pelo peso do ciclista (é o divisor da equação de METs).
  return (kcalPorMin * 200) / (3.5 * pesoKg);
}

/** MET total do pedal na rua: plano mais subida. */
export const metPedal = (velocidadeKmH: number, inclinacaoPct: number, pesoKg: number): number =>
  metRua(velocidadeKmH) + metDaSubida(velocidadeKmH, inclinacaoPct, pesoKg);

/** O custo por quilômetro, em kcal por kg. Sobe com a velocidade — o oposto da corrida. */
export const kcalPorKgPorKm = (velocidadeKmH: number, inclinacaoPct = 0, pesoKg = PESO_PADRAO): number =>
  velocidadeKmH > 0
    ? (kcalPorMinuto(metPedal(velocidadeKmH, inclinacaoPct, pesoKg), 1) * 60) / velocidadeKmH
    : 0;

/* ───────────────────────── O cálculo ───────────────────────── */

export type Onde = 'rua' | 'ergometrica';

export interface Resultado {
  onde: Onde;
  minutos: number;
  /** Quilômetros. Na ergométrica não existe distância honesta, e fica zero. */
  km: number;
  velocidade: number;
  watts: number;
  inclinacao: number;
  met: number;
  kcal: number;
  kcalLiquida: number;
  /** A intensidade pedida passa do que um humano sustenta. Ver MET_ALERTA. */
  intensidadeImplausivel: boolean;
}

function montaRua(
  minutos: number,
  pesoKg: number,
  velocidade: number,
  inclinacao: number,
): Resultado {
  const met = metPedal(velocidade, inclinacao, pesoKg);
  const kcal = kcalPorMinuto(met, pesoKg) * minutos;
  return {
    onde: 'rua',
    minutos,
    km: (velocidade * minutos) / 60,
    velocidade,
    watts: 0,
    inclinacao,
    met,
    kcal,
    kcalLiquida: kcal - kcalPorMinuto(1, pesoKg) * minutos,
    intensidadeImplausivel: met > MET_ALERTA,
  };
}

/** Modo 1 — "pedalei tanto tempo na rua". */
export const deTempoRua = (
  minutos: number,
  pesoKg: number,
  velocidade: number,
  inclinacao = 0,
): Resultado => montaRua(minutos, pesoKg, velocidade, inclinacao);

/** Modo 2 — "pedalei tantos quilômetros". O tempo sai da velocidade. */
export const deDistancia = (
  km: number,
  pesoKg: number,
  velocidade: number,
  inclinacao = 0,
): Resultado => montaRua(velocidade > 0 ? (km / velocidade) * 60 : 0, pesoKg, velocidade, inclinacao);

/** Modo 3 — ergométrica: potência e tempo. Sem distância, porque ela não significa nada aqui. */
export function deErgometrica(minutos: number, pesoKg: number, watts: number): Resultado {
  const met = metErgometrica(watts);
  const kcal = kcalPorMinuto(met, pesoKg) * minutos;
  return {
    onde: 'ergometrica',
    minutos,
    km: 0,
    velocidade: 0,
    watts,
    inclinacao: 0,
    met,
    kcal,
    kcalLiquida: kcal - kcalPorMinuto(1, pesoKg) * minutos,
    intensidadeImplausivel: met > MET_ALERTA,
  };
}

/** Modo 4 — meta de calorias na rua. Devolve tempo e distância. */
export function deKcalRua(
  alvoKcal: number,
  pesoKg: number,
  velocidade: number,
  inclinacao = 0,
): Resultado {
  const porMin = kcalPorMinuto(metPedal(velocidade, inclinacao, pesoKg), pesoKg);
  const minutos = porMin > 0 ? alvoKcal / porMin : 0;
  return { ...montaRua(minutos, pesoKg, velocidade, inclinacao), kcal: alvoKcal };
}

export const simulacaoUmQuilo = (pesoKg: number, velocidade: number): Resultado =>
  deKcalRua(KCAL_POR_KG_GORDURA, pesoKg, velocidade, 0);

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

export function fraseContexto(pesoKg: number, r: Resultado): string {
  if (r.onde === 'ergometrica') {
    return (
      `Para uma pessoa de ${Math.round(pesoKg)} kg, ${formataTempo(r.minutos)} de bicicleta ` +
      `ergométrica a ${Math.round(r.watts)} W representam um gasto estimado de aproximadamente ` +
      `${arredondaKcal(r.kcal)} kcal.`
    );
  }
  const onde = r.inclinacao > 0 ? ` com ${r.inclinacao.toLocaleString('pt-BR')}% de subida` : '';
  return (
    `Para uma pessoa de ${Math.round(pesoKg)} kg, pedalar ${formataKm(r.km)} a ` +
    `${formataVelocidade(r.velocidade)}${onde} leva ${formataTempo(r.minutos)} e representa um ` +
    `gasto estimado de aproximadamente ${arredondaKcal(r.kcal)} kcal.`
  );
}

/* ───────────────────────── Tabelas ───────────────────────── */

export const PESOS_TABELA = [50, 60, 70, 80, 90, 100, 120] as const;
/*
 * Tempos e distâncias que a busca pede (prints de 06/10/2026): o
 * autocompletar e as relacionadas trazem 10, 15, 20 e 30 minutos e 1 hora,
 * e 1, 5, 10, 15, 20 e 30 km. 45 minutos, 90 minutos, 2 horas e 50 km
 * ficam — são treino de quem já pedala.
 */
export const TEMPOS_TABELA = [10, 15, 20, 30, 45, 60, 90, 120] as const;
export const DISTANCIAS_TABELA = [1, 5, 10, 15, 20, 30, 50] as const;

/**
 * Os três ritmos das tabelas por tempo e distância. A busca pergunta "1 hora
 * de bicicleta" sem dizer a velocidade, e no pedal a resposta muda mais com
 * ela do que com qualquer outra coisa — por isso a tabela dá as três em vez
 * de escolher uma. São pontos medidos ou interpolados da tabela do Compêndio:
 * passeio (abaixo de 16 km/h), treino tranquilo e grupo rápido.
 */
export const RITMOS_TABELA = [
  { velocidade: 14, nome: 'Passeio' },
  { velocidade: 20, nome: 'Moderado' },
  { velocidade: 28, nome: 'Forte' },
] as const;

/** Tempos da ergométrica que a busca pede: 15, 20, 25 e 30 minutos e 1 hora. */
export const TEMPOS_ERGO_TABELA = [15, 20, 25, 30, 45, 60] as const;

/** Os três esforços da tabela da ergométrica por tempo — quem não tem watts no painel. */
export const NIVEIS_TABELA_ERGO: NivelId[] = ['leve', 'moderado', 'forte'];

export interface LinhaVelocidade {
  faixa: FaixaVelocidade;
  kcal: number;
  km: number;
  porKm: number;
}

/** A tabela que prova a tese: mesma hora, velocidades diferentes, gasto disparando. */
export const tabelaPorVelocidade = (pesoKg: number, minutos: number): LinhaVelocidade[] =>
  FAIXAS_RUA.map((faixa) => {
    const r = deTempoRua(minutos, pesoKg, faixa.velocidade);
    return {
      faixa,
      kcal: arredondaKcal(r.kcal),
      km: r.km,
      porKm: kcalPorKgPorKm(faixa.velocidade, 0, pesoKg) * pesoKg,
    };
  });

export interface LinhaPeso {
  peso: number;
  kcal: number;
  kcalLiquida: number;
}

export const tabelaPorPeso = (minutos: number, velocidade: number): LinhaPeso[] =>
  PESOS_TABELA.map((peso) => {
    const r = deTempoRua(minutos, peso, velocidade);
    return { peso, kcal: arredondaKcal(r.kcal), kcalLiquida: arredondaKcal(r.kcalLiquida) };
  });

export interface LinhaTempo {
  minutos: number;
  kcal: number;
  km: number;
}

export const tabelaPorTempo = (pesoKg: number, velocidade: number): LinhaTempo[] =>
  TEMPOS_TABELA.map((minutos) => {
    const r = deTempoRua(minutos, pesoKg, velocidade);
    return { minutos, kcal: arredondaKcal(r.kcal), km: r.km };
  });

export interface LinhaDistancia {
  km: number;
  kcal: number;
  minutos: number;
}

export const tabelaPorDistancia = (pesoKg: number, velocidade: number): LinhaDistancia[] =>
  DISTANCIAS_TABELA.map((km) => {
    const r = deDistancia(km, pesoKg, velocidade);
    return { km, kcal: arredondaKcal(r.kcal), minutos: r.minutos };
  });

export interface LinhaPorRitmo {
  /** Minutos (tabela por tempo) ou quilômetros (tabela por distância). */
  valor: number;
  /** Uma entrada por ritmo de RITMOS_TABELA, na mesma ordem. */
  kcal: number[];
}

export const tabelaTempoPorRitmo = (pesoKg: number): LinhaPorRitmo[] =>
  TEMPOS_TABELA.map((minutos) => ({
    valor: minutos,
    kcal: RITMOS_TABELA.map((r) => arredondaKcal(deTempoRua(minutos, pesoKg, r.velocidade).kcal)),
  }));

export const tabelaDistanciaPorRitmo = (pesoKg: number): LinhaPorRitmo[] =>
  DISTANCIAS_TABELA.map((km) => ({
    valor: km,
    kcal: RITMOS_TABELA.map((r) => arredondaKcal(deDistancia(km, pesoKg, r.velocidade).kcal)),
  }));

/** Ergométrica por tempo, nos três esforços de NIVEIS_TABELA_ERGO. */
export const tabelaErgoPorTempo = (pesoKg: number): LinhaPorRitmo[] =>
  TEMPOS_ERGO_TABELA.map((minutos) => ({
    valor: minutos,
    kcal: NIVEIS_TABELA_ERGO.map((id) => arredondaKcal(deErgometrica(minutos, pesoKg, nivel(id).watts).kcal)),
  }));

export interface LinhaErgo {
  faixa: FaixaPotencia;
  kcal: number;
}

export const tabelaErgometrica = (pesoKg: number, minutos: number): LinhaErgo[] =>
  FAIXAS_ERGO.map((faixa) => ({
    faixa,
    kcal: arredondaKcal(deErgometrica(minutos, pesoKg, faixa.watts).kcal),
  }));

/* ───────────────────────── Textos fixos ───────────────────────── */

export const NOTA_ESTIMATIVA =
  'É uma estimativa. No pedal a variação é ainda maior que em outras atividades: vento, posição no guidão, tipo de pneu, peso da bike e andar ou não na roda de alguém mudam bastante o esforço para a mesma velocidade no velocímetro.';

export const NOTA_ERGOMETRICA_VELOCIDADE =
  'Na ergométrica, a velocidade do painel não diz nada sobre o gasto: sem ar para vencer, dá para marcar 30 km/h com a carga no mínimo. O que conta é a resistência, e é por isso que esta ferramenta pede watts ou nível de esforço em vez de velocidade.';

export const NOTA_BRUTO =
  'O número é bruto: inclui o que você gastaria parado nesse tempo. O acréscimo real ao seu dia é um pouco menor, e é esse que conta num déficit.';

export const NOTA_INTENSIDADE_IMPLAUSIVEL =
  'Essa combinação de velocidade e subida passa do que praticamente qualquer pessoa sustenta — inclusive profissionais. A conta está certa, mas o cenário não costuma existir: na vida real a velocidade cai bastante na subida, e é por isso que ciclista fala em tempo de escalada, não em velocidade média.';

export const NOTA_VENTO =
  'Vento contra é a variável que mais estraga a estimativa no pedal. Pedalar a 20 km/h com 15 km/h de vento na cara custa quase o mesmo que pedalar a 35 km/h sem vento — e o velocímetro não sabe disso.';

export const NOTA_SEM_PERDA_LOCALIZADA =
  'Nenhum exercício escolhe de onde o corpo tira gordura. O pedal aumenta o gasto do dia; onde a gordura sai primeiro é decidido por genética e hormônio, não pelo movimento.';

export const NOTA_SEGURANCA =
  'O pedal é de baixo impacto, o que o torna uma boa porta de entrada para quem tem dor articular. Ainda assim, altura de selim mal ajustada é causa comum de dor no joelho e na lombar — e dor que persiste é assunto para médico ou fisioterapeuta, não para aumentar a carga.';

export const NOTA_NAO_PRESCRICAO =
  'Esta é uma estimativa educativa de gasto energético. Não é avaliação metabólica, não substitui calorimetria indireta, não prescreve treino e não diagnostica nada.';
