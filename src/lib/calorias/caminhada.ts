/**
 * O motor da página de calorias da caminhada.
 *
 * POR QUE ESTA PÁGINA EXISTE, E POR QUE ELA É A PRIMEIRA DO CLUSTER
 *
 * O portal não tinha nenhuma consulta de "caloria" no export de Search
 * Console de 12/09 — zero em mil linhas. Não é um cluster em que estamos
 * mal posicionados: é um cluster em que não existimos. Isso muda o critério
 * de escolha da primeira atividade, porque não há dado interno para ordenar
 * a fila.
 *
 * A caminhada entra primeiro por ser a única atividade em que uma conta
 * ESPECÍFICA é claramente melhor que uma caixa genérica de MET. Tempo,
 * distância, passos, ritmo e inclinação são cinco entradas legítimas, todas
 * com respaldo, e é isso que separa esta página do concorrente nacional
 * direto — um agregador que publica o mesmo template com um único MET por
 * atividade, de yoga a futebol.
 *
 * DE ONDE VÊM OS NÚMEROS
 *
 *     kcal/min = MET × 3,5 × peso(kg) ÷ 200
 *
 * O MET NO PLANO vem do Compêndio de Atividades Físicas (edição 2024), que
 * mede a caminhada por FAIXA de velocidade, não por décimo de km/h. Entre
 * duas faixas medidas a conta interpola — e diz isso em voz alta, porque
 * apresentar valor interpolado como medido é inventar precisão.
 *
 * A INCLINAÇÃO vem do termo vertical da equação de caminhada da ACSM:
 *
 *     VO2 = 0,1 × v + 1,8 × v × inclinação + 3,5      (v em m/min)
 *
 * Só o termo 1,8 × v × inclinação entra aqui, somado ao MET do Compêndio.
 *
 * OS PASSOS viram TEMPO pela cadência, nunca distância pela passada.
 * Passada varia com altura e com ritmo; assumir 75 cm para todo mundo daria
 * um número com cara de exato e miolo de chute. Cadência tem referência:
 * cerca de 100 passos/min é a fronteira do moderado em adultos.
 *
 * O ERRO QUE ESTA PÁGINA EXISTE PARA NÃO COMETER
 *
 * Circula na SERP brasileira que 10 km de caminhada gastam cerca de 735
 * kcal para 70 kg. Isso dá 1,05 kcal por kg por km — que é o custo da
 * CORRIDA, não o da caminhada. Caminhar custa bem menos por quilômetro, e
 * é justamente por isso que correr a mesma distância gasta mais. A conta
 * daqui sai do MET e do tempo, então ela não cai nessa.
 *
 * O QUE O MOTOR NUNCA FAZ
 *
 * Prometer quilo perdido. A conta de 7.700 kcal por quilo de gordura entra
 * como SIMULAÇÃO, com o aviso de que o corpo não responde em linha reta.
 * E o número principal é BRUTO — inclui o que a pessoa gastaria parada.
 * O acréscimo real ao dia é menor, e a página mostra os dois lados.
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
  url: 'https://pacompendium.com/walking/',
  resumo:
    'lista a caminhada em superfície plana e firme por faixa de velocidade: 3,0 METs a cerca de 4 km/h, 3,8 METs em ritmo moderado (4,5 a 5,5 km/h), 4,8 METs em ritmo rápido (5,6 a 6,3 km/h) e 5,5 METs em ritmo muito rápido (6,4 a 7 km/h).',
};

export const FONTE_ACSM: Fonte = {
  rotulo:
    "American College of Sports Medicine. ACSM's Guidelines for Exercise Testing and Prescription — equação metabólica da caminhada",
  rotuloCurto: 'equação de caminhada da ACSM',
  url: 'https://www.acsm.org/education-resources/books/guidelines-exercise-testing-prescription',
  resumo:
    'estima o consumo de oxigênio na caminhada como 0,1 × velocidade + 1,8 × velocidade × inclinação + 3,5, com a velocidade em metros por minuto. É o termo vertical dessa equação que sustenta a conta de inclinação desta página.',
};

export const FONTE_TUDOR_LOCKE: Fonte = {
  rotulo:
    'Tudor-Locke C, Han H, Aguiar EJ, et al. How fast is fast enough? Walking cadence (steps/min) as a practical estimate of intensity in adults. British Journal of Sports Medicine, 2018',
  rotuloCurto: 'Tudor-Locke et al. (2018)',
  url: 'https://pubmed.ncbi.nlm.nih.gov/29858465/',
  resumo:
    'mostra que cerca de 100 passos por minuto correspondem a intensidade moderada em adultos, e cerca de 130 por minuto a intensidade vigorosa — é o que permite converter passos em tempo sem depender do tamanho da passada.',
};

export const FONTE_HALL: Fonte = {
  rotulo:
    'Hall KD, Sacks G, Chandramohan D, et al. Quantification of the effect of energy imbalance on bodyweight. The Lancet, 2011',
  rotuloCurto: 'Hall et al. (2011)',
  url: 'https://pubmed.ncbi.nlm.nih.gov/21872751/',
  resumo:
    'demonstra que a regra dos 7.700 kcal por quilo superestima a perda ao longo do tempo: o gasto do corpo cai conforme ele emagrece, e a resposta não é linear.',
};

export const FONTES: Fonte[] = [FONTE_COMPENDIO, FONTE_ACSM, FONTE_TUDOR_LOCKE, FONTE_HALL];

/** Energia armazenada em 1 kg de gordura corporal. Entra só como simulação. */
export const KCAL_POR_KG_GORDURA = 7700;

/* ───────────────────────── Ritmo ───────────────────────── */

export type RitmoId = 'leve' | 'moderado' | 'rapido' | 'muito-rapido';

export interface Ritmo {
  id: RitmoId;
  nome: string;
  /** Velocidade típica da faixa, em km/h. É o que entra na conta. */
  velocidade: number;
  /** A faixa que o Compêndio mediu, para a pessoa se reconhecer. */
  faixa: string;
  /** MET no plano, copiado do Compêndio 2024 — não ajustado. */
  met: number;
  /** Passos por minuto típicos. É o que converte passos em tempo. */
  cadencia: number;
  /** Como reconhecer sem relógio nem esteira. */
  comoReconhecer: string;
}

/**
 * As quatro faixas do Compêndio 2024 para caminhada em superfície plana e
 * firme. A velocidade típica é o centro da faixa, arredondado para o número
 * que uma esteira mostra. A cadência segue Tudor-Locke.
 */
export const RITMOS: Ritmo[] = [
  {
    id: 'leve',
    nome: 'Leve',
    velocidade: 4,
    faixa: 'cerca de 4 km/h',
    met: 3.0,
    cadencia: 85,
    comoReconhecer: 'Passeio. Dá para conversar sem nenhum esforço.',
  },
  {
    id: 'moderado',
    nome: 'Moderado',
    velocidade: 5,
    faixa: '4,5 a 5,5 km/h',
    met: 3.8,
    cadencia: 100,
    comoReconhecer: 'Passo de quem vai a algum lugar. Dá para falar, mas não cantar. É o ritmo mais comum.',
  },
  {
    id: 'rapido',
    nome: 'Rápido',
    velocidade: 6,
    faixa: '5,6 a 6,3 km/h',
    met: 4.8,
    cadencia: 115,
    comoReconhecer: 'Passo apressado, de quem está atrasado. Só frases curtas.',
  },
  {
    id: 'muito-rapido',
    nome: 'Muito rápido',
    velocidade: 6.5,
    faixa: '6,4 a 7 km/h',
    met: 5.5,
    cadencia: 130,
    comoReconhecer: 'Quase corrida. Palavras soltas — e pouca gente sustenta por muito tempo.',
  },
];

export const RITMO_PADRAO: RitmoId = 'moderado';

export function ritmo(id: RitmoId): Ritmo {
  return RITMOS.find((r) => r.id === id) ?? RITMOS[1];
}

/* ───────────────────────── Limites ───────────────────────── */

export const PESO_MIN = 30;
export const PESO_MAX = 250;
export const PESO_PADRAO = 70;

export const MINUTOS_MIN = 1;
export const MINUTOS_MAX = 600;

export const KM_MIN = 0.1;
export const KM_MAX = 100;

export const PASSOS_MIN = 100;
export const PASSOS_MAX = 100000;

export const KCAL_MIN = 10;
export const KCAL_MAX = 3000;

/**
 * A faixa em que chamar isso de caminhada é honesto. Abaixo de 3 km/h o
 * Compêndio já não mede como caminhada; acima de 7 a maioria das pessoas
 * está correndo, e corrida tem outra equação — vai ser outra página.
 */
export const VELOCIDADE_MIN = 3;
export const VELOCIDADE_MAX = 7;

/** Inclinação em porcentagem, como a esteira mostra. 15% é o teto da maioria. */
export const INCLINACAO_MIN = 0;
export const INCLINACAO_MAX = 15;

/** Acima disso a página para de só responder e passa a ponderar. */
export const MINUTOS_ALERTA = 120;

/* ───────────────────────── Validação ───────────────────────── */

export const pesoValido = (p: number | null): p is number =>
  p !== null && Number.isFinite(p) && p >= PESO_MIN && p <= PESO_MAX;

export const minutosValidos = (m: number | null): m is number =>
  m !== null && Number.isFinite(m) && m >= MINUTOS_MIN && m <= MINUTOS_MAX;

export const kmValidos = (k: number | null): k is number =>
  k !== null && Number.isFinite(k) && k >= KM_MIN && k <= KM_MAX;

export const passosValidos = (p: number | null): p is number =>
  p !== null && Number.isFinite(p) && p >= PASSOS_MIN && p <= PASSOS_MAX;

export const kcalValida = (k: number | null): k is number =>
  k !== null && Number.isFinite(k) && k >= KCAL_MIN && k <= KCAL_MAX;

export const inclinacaoValida = (i: number | null): i is number =>
  i !== null && Number.isFinite(i) && i >= INCLINACAO_MIN && i <= INCLINACAO_MAX;

/**
 * Aceita vírgula e ponto como separador decimal. Brasileiro digita "72,5",
 * e `parseFloat` devolveria 72 — errado e silencioso, que é o pior tipo.
 */
export function parseNumero(bruto: string): number | null {
  const limpo = bruto.trim().replace(/\s/g, '').replace(',', '.');
  if (!limpo) return null;
  const n = Number(limpo);
  return Number.isFinite(n) ? n : null;
}

/* ───────────────────────── O MET ───────────────────────── */

/**
 * MET no plano para uma velocidade qualquer.
 *
 * Nos pontos que o Compêndio mediu devolve o valor do Compêndio. Entre dois
 * pontos interpola em linha reta. Fora das pontas segura no valor da ponta,
 * porque esticar a reta até 9 km/h devolveria um número de caminhada para o
 * que já é corrida.
 */
export function metNoPlano(velocidadeKmH: number): number {
  const p = RITMOS.map((r) => ({ v: r.velocidade, met: r.met }));
  if (velocidadeKmH <= p[0].v) return p[0].met;
  const ultimo = p[p.length - 1];
  if (velocidadeKmH >= ultimo.v) return ultimo.met;
  for (let i = 0; i < p.length - 1; i++) {
    const a = p[i];
    const b = p[i + 1];
    if (velocidadeKmH >= a.v && velocidadeKmH <= b.v) {
      return a.met + ((velocidadeKmH - a.v) / (b.v - a.v)) * (b.met - a.met);
    }
  }
  return ultimo.met;
}

/** A velocidade bate com um ponto medido, ou a conta interpolou? A metodologia precisa dizer. */
export const velocidadeMedida = (v: number): boolean =>
  RITMOS.some((r) => Math.abs(r.velocidade - v) < 0.001);

/**
 * O acréscimo da inclinação, em METs. Termo vertical da ACSM
 * (1,8 × v[m/min] × fração), convertido de mL/kg/min para MET pela divisão
 * por 3,5. Zero de inclinação soma exatamente zero.
 */
export function metDaInclinacao(velocidadeKmH: number, inclinacaoPct: number): number {
  const vMetrosPorMin = (velocidadeKmH * 1000) / 60;
  return (1.8 * vMetrosPorMin * (inclinacaoPct / 100)) / 3.5;
}

/** O MET total da caminhada: plano mais subida. */
export const metCaminhada = (velocidadeKmH: number, inclinacaoPct: number): number =>
  metNoPlano(velocidadeKmH) + metDaInclinacao(velocidadeKmH, inclinacaoPct);

/** A equação de METs, isolada para o teste conferir o passo aritmético. */
export const kcalPorMinuto = (met: number, pesoKg: number): number => (met * 3.5 * pesoKg) / 200;

/* ───────────────────────── O cálculo ───────────────────────── */

export interface Resultado {
  /** Minutos de caminhada, sem arredondar — quem formata é a página. */
  minutos: number;
  /** Gasto BRUTO estimado, em kcal, sem arredondar. */
  kcal: number;
  /** O que a caminhada ACRESCENTA ao dia: bruto menos o repouso do mesmo tempo. */
  kcalLiquida: number;
  km: number;
  passos: number;
  met: number;
  velocidade: number;
  inclinacao: number;
}

function monta(
  minutos: number,
  pesoKg: number,
  velocidade: number,
  inclinacao: number,
  cadencia: number,
): Resultado {
  const met = metCaminhada(velocidade, inclinacao);
  const kcal = kcalPorMinuto(met, pesoKg) * minutos;
  return {
    minutos,
    kcal,
    // 1 MET é o repouso. O que sobra é o acréscimo real ao dia.
    kcalLiquida: kcal - kcalPorMinuto(1, pesoKg) * minutos,
    km: (velocidade * minutos) / 60,
    passos: minutos * cadencia,
    met,
    velocidade,
    inclinacao,
  };
}

/** Modo 1 — "caminhei tanto tempo". */
export const deTempo = (
  minutos: number,
  pesoKg: number,
  velocidade: number,
  inclinacao: number,
  cadencia: number,
): Resultado => monta(minutos, pesoKg, velocidade, inclinacao, cadencia);

/** Modo 2 — "andei tantos quilômetros". O tempo sai da velocidade. */
export const deDistancia = (
  km: number,
  pesoKg: number,
  velocidade: number,
  inclinacao: number,
  cadencia: number,
): Resultado => monta(velocidade > 0 ? (km / velocidade) * 60 : 0, pesoKg, velocidade, inclinacao, cadencia);

/** Modo 3 — "dei tantos passos". O tempo sai da cadência, nunca da passada. */
export function dePassos(
  passos: number,
  pesoKg: number,
  velocidade: number,
  inclinacao: number,
  cadencia: number,
): Resultado {
  const r = monta(cadencia > 0 ? passos / cadencia : 0, pesoKg, velocidade, inclinacao, cadencia);
  return { ...r, passos };
}

/** Modo 4 — "quero gastar tantas calorias". A conta ao contrário. */
export function deKcal(
  alvoKcal: number,
  pesoKg: number,
  velocidade: number,
  inclinacao: number,
  cadencia: number,
): Resultado {
  const porMin = kcalPorMinuto(metCaminhada(velocidade, inclinacao), pesoKg);
  const minutos = porMin > 0 ? alvoKcal / porMin : 0;
  return { ...monta(minutos, pesoKg, velocidade, inclinacao, cadencia), kcal: alvoKcal };
}

/** Simulação teórica: o tempo que somaria a energia de 1 kg de gordura. */
export const simulacaoUmQuilo = (
  pesoKg: number,
  velocidade: number,
  inclinacao: number,
  cadencia: number,
): Resultado => deKcal(KCAL_POR_KG_GORDURA, pesoKg, velocidade, inclinacao, cadencia);

/**
 * O custo por quilômetro, em kcal por kg de peso.
 *
 * Existe para a página poder mostrar, em número, por que "10 km de
 * caminhada = 735 kcal para 70 kg" está errado: isso daria 1,05 kcal/kg/km,
 * o custo da corrida. Caminhando no plano o valor fica bem abaixo disso.
 */
export const kcalPorKgPorKm = (velocidadeKmH: number, inclinacaoPct: number): number =>
  velocidadeKmH > 0 ? (kcalPorMinuto(metCaminhada(velocidadeKmH, inclinacaoPct), 1) * 60) / velocidadeKmH : 0;

/* ───────────────────────── Formatação ───────────────────────── */

/**
 * Arredonda o gasto ao grão que a estimativa sustenta.
 *
 * Nenhuma casa decimal, nunca: "287,4382 kcal" finge uma precisão que a
 * conta não tem. Acima de mil, a dezena — porque o dígito das unidades num
 * número de quatro casas é ruído puro. Abaixo disso o inteiro fica, e a
 * página assume a responsabilidade de escrever "aproximadamente" ao lado.
 */
export function arredondaKcal(k: number): number {
  if (!Number.isFinite(k) || k <= 0) return 0;
  if (k >= 1000) return Math.round(k / 10) * 10;
  return Math.round(k);
}

export function arredondaPassos(p: number): number {
  if (p >= 10000) return Math.round(p / 500) * 500;
  if (p >= 1000) return Math.round(p / 100) * 100;
  return Math.round(p / 10) * 10;
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
 * A frase de contexto em português corrido. Existe porque é assim que a
 * pergunta é feita e é assim que um mecanismo de resposta consegue citar —
 * "312 kcal" sozinho não se sustenta fora da página.
 */
export function fraseContexto(pesoKg: number, r: Resultado): string {
  const onde = r.inclinacao > 0 ? ` com ${r.inclinacao.toLocaleString('pt-BR')}% de inclinação` : '';
  return (
    `Para uma pessoa de ${Math.round(pesoKg)} kg, ${formataTempo(r.minutos)} de caminhada a ` +
    `${formataVelocidade(r.velocidade)}${onde} representam um gasto estimado de aproximadamente ` +
    `${arredondaKcal(r.kcal)} kcal — cerca de ${formataKm(r.km)} e ` +
    `${arredondaPassos(r.passos).toLocaleString('pt-BR')} passos.`
  );
}

/* ───────────────────────── Tabelas ───────────────────────── */

/**
 * As tabelas resolvidas em HTML. O Google não digita peso: sem elas a
 * página seria um formulário vazio para o robô e para quem chegou sem
 * vontade de preencher nada.
 */
export const PESOS_TABELA = [50, 60, 70, 80, 90, 100, 120] as const;
/* 40 minutos e 2 horas entraram pelos prints de 05/10/2026; 45 fica, porque o
   Search Console já trazia "caminhada de 45 minutos". */
export const TEMPOS_TABELA = [10, 20, 30, 40, 45, 60, 90, 120] as const;
export const INCLINACOES_TABELA = [0, 3, 6, 9, 12, 15] as const;
/* 4 e 8 km entraram pelo autocompletar de 05/10/2026. */
export const DISTANCIAS_TABELA = [1, 2, 3, 4, 5, 8, 10] as const;

export interface LinhaPeso {
  peso: number;
  kcal: number;
  kcalLiquida: number;
}

export const tabelaPorPeso = (minutos: number, velocidade: number, inclinacao: number): LinhaPeso[] =>
  PESOS_TABELA.map((peso) => {
    const r = deTempo(minutos, peso, velocidade, inclinacao, 100);
    return { peso, kcal: arredondaKcal(r.kcal), kcalLiquida: arredondaKcal(r.kcalLiquida) };
  });

export interface LinhaTempo {
  minutos: number;
  kcal: number;
  km: number;
}

export const tabelaPorTempo = (pesoKg: number, velocidade: number, inclinacao: number): LinhaTempo[] =>
  TEMPOS_TABELA.map((minutos) => {
    const r = deTempo(minutos, pesoKg, velocidade, inclinacao, 100);
    return { minutos, kcal: arredondaKcal(r.kcal), km: r.km };
  });

export interface LinhaRitmo {
  ritmo: Ritmo;
  kcal: number;
  km: number;
}

export const tabelaPorRitmo = (pesoKg: number, minutos: number): LinhaRitmo[] =>
  RITMOS.map((rt) => {
    const r = deTempo(minutos, pesoKg, rt.velocidade, 0, rt.cadencia);
    return { ritmo: rt, kcal: arredondaKcal(r.kcal), km: r.km };
  });

export interface LinhaInclinacao {
  inclinacao: number;
  met: number;
  kcal: number;
}

export const tabelaPorInclinacao = (pesoKg: number, minutos: number, velocidade: number): LinhaInclinacao[] =>
  INCLINACOES_TABELA.map((inclinacao) => {
    const r = deTempo(minutos, pesoKg, velocidade, inclinacao, 100);
    return { inclinacao, met: Math.round(r.met * 10) / 10, kcal: arredondaKcal(r.kcal) };
  });

export interface LinhaDistancia {
  km: number;
  kcal: number;
  minutos: number;
}

export const tabelaPorDistancia = (pesoKg: number, velocidade: number): LinhaDistancia[] =>
  DISTANCIAS_TABELA.map((km) => {
    const r = deDistancia(km, pesoKg, velocidade, 0, 100);
    return { km, kcal: arredondaKcal(r.kcal), minutos: r.minutos };
  });

/* ───────────────────────── Textos fixos ───────────────────────── */

export const NOTA_ESTIMATIVA =
  'É uma estimativa, não uma medição. Duas pessoas do mesmo peso gastam quantidades diferentes de energia na mesma caminhada — muda com condicionamento, terreno, vento, altura e até com o quanto os braços balançam.';

export const NOTA_BRUTO =
  'O número principal é bruto: inclui o que você gastaria parado nesse mesmo tempo. O que a caminhada acrescenta ao seu dia é um pouco menor, e é esse o número que conta num déficit.';

export const NOTA_INTERPOLADO =
  'O Compêndio mediu faixas de velocidade, não cada décimo de km/h. Nesta velocidade a conta interpolou entre duas faixas medidas — o valor é coerente, mas não é um dado medido.';

export const NOTA_SEM_PERDA_LOCALIZADA =
  'Nenhum exercício escolhe de onde o corpo tira gordura. A caminhada aumenta o gasto do dia; onde a gordura sai primeiro é decidido por genética e hormônio, não pelo movimento.';

export const NOTA_SEGURANCA =
  'Se você sente dor no joelho, no quadril ou na lombar ao caminhar, tem alguma condição cardiovascular ou está voltando depois de muito tempo parado, comece com menos tempo e sem inclinação — e converse antes com o seu médico ou fisioterapeuta.';

export const NOTA_NAO_PRESCRICAO =
  'Esta é uma estimativa educativa de gasto energético. Não é avaliação metabólica, não substitui calorimetria indireta, não prescreve treino e não diagnostica nada.';
