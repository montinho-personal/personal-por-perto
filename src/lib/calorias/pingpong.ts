/**
 * O motor da página de calorias do ping pong (tênis de mesa).
 *
 * A DÉCIMA OITAVA DO CLUSTER — E A PRIMEIRA EM QUE O QUE PESA SÃO AS PERNAS
 *
 *     tênis     → a pausa entre pontos, que já está na tabela
 *     basquete  → o jogo medido custa mais que a linha de jogo da tabela
 *     ping pong → parado na mesa, a tabela acerta; com deslocamento, o
 *                 gasto passa do dobro
 *
 * O Compêndio de 2024 tem uma linha só para tênis de mesa: 4,0 METs
 * (código 15660). Sagayama e colegas mediram 7 jogadores universitários
 * japoneses em cinco tipos de treino: os três parados na mesa ficaram
 * entre 4,5 e 5,2 METs — perto da tabela —, e os dois com deslocamento
 * (o "footwork"), entre 9,5 e 11,5. A escolha que mais pesa na conta não
 * é a força da raquetada: é quanto você anda de um lado para o outro.
 *
 * O QUE NÃO ENTRA
 *
 * Um estudo com juniores da seleção alemã publica, para o mesmo jogo,
 * 25,6 mL de oxigênio por kg por minuto (que dariam 7,3 METs) e 4,8 METs.
 * Os dois números não fecham entre si, e não conseguimos conferir qual
 * está certo — fica fora.
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
  resumo: 'mede o tênis de mesa (ping pong) em 4,0 METs, código 15660 — a única linha da atividade.',
};

export const FONTE_SAGAYAMA: Fonte = {
  rotulo:
    'Sagayama H, Hamaguchi G, Toguchi M, Ichikawa M, Yamada Y, Ebine N, Higaki Y, Tanaka H. Energy Requirement Assessment in Japanese Table Tennis Players Using the Doubly Labeled Water Method. International Journal of Sport Nutrition and Exercise Metabolism, 27(5):421-428, 2017',
  rotuloCurto: 'Sagayama et al. (2017)',
  url: 'https://pubmed.ncbi.nlm.nih.gov/28530485/',
  resumo:
    'mediu o gasto de cinco tipos de treino em 7 jogadores universitários de competição: os três sem deslocamento ficaram entre 4,5 e 5,2 METs, e os dois com deslocamento, entre 9,5 e 11,5. No mesmo estudo, o gasto diário de 10 jogadores, medido com água duplamente marcada, foi de 3.695 kcal, com 3 horas de treino por dia em média.',
};

export const FONTE_HALL: Fonte = {
  rotulo:
    'Hall KD, Sacks G, Chandramohan D, et al. Quantification of the effect of energy imbalance on bodyweight. The Lancet, 2011',
  rotuloCurto: 'Hall et al. (2011)',
  url: 'https://pubmed.ncbi.nlm.nih.gov/21872751/',
  resumo:
    'demonstra que a regra dos 7.700 kcal por quilo superestima a perda ao longo do tempo: o gasto do corpo cai conforme ele emagrece, e a resposta não é linear.',
};

export const FONTES: Fonte[] = [FONTE_COMPENDIO, FONTE_SAGAYAMA, FONTE_HALL];

export const KCAL_POR_KG_GORDURA = 7700;

/* ───────────────────────── Limites ───────────────────────── */

export const PESO_MIN = 30;
export const PESO_MAX = 250;
export const PESO_PADRAO = 70;

export const MINUTOS_MIN = 5;
export const MINUTOS_MAX = 300;
export const MINUTOS_PADRAO = 60;

export const KCAL_MIN = 20;
export const KCAL_MAX = 3000;

/* ───────────────────────── O estudo ───────────────────────── */

export const ESTUDO_TREINO = {
  participantes: 7,
  semDeslocamento: { min: 4.5, max: 5.2, treinos: 3 },
  comDeslocamento: { min: 9.5, max: 11.5, treinos: 2 },
} as const;

/* ───────────────────────── A tabela ───────────────────────── */

export interface Modalidade {
  id: string;
  nome: string;
  nomeCurto: string;
  /** Como entra numa frase: "1 hora de {naFrase}". */
  naFrase: string;
  /** Faixa de METs. Igual nas pontas quando a fonte dá um valor só. */
  metMin: number;
  metMax: number;
  /** "Compêndio 15660" ou "Sagayama et al. (2017)". */
  fonte: string;
  comoReconhecer: string;
}

/** Três linhas, em ordem de gasto. Uma do Compêndio, duas medidas. */
export const MODALIDADES: Modalidade[] = [
  {
    id: 'jogo',
    nome: 'Jogo de ping pong',
    nomeCurto: 'Jogo',
    naFrase: 'ping pong',
    metMin: 4.0,
    metMax: 4.0,
    fonte: 'Compêndio 15660',
    comoReconhecer: 'Partida de lazer ou bate-bola, sem correr atrás da bola. A única linha do Compêndio.',
  },
  {
    id: 'parado',
    nome: 'Treino parado na mesa',
    nomeCurto: 'Treino parado',
    naFrase: 'treino de ping pong parado na mesa',
    metMin: ESTUDO_TREINO.semDeslocamento.min,
    metMax: ESTUDO_TREINO.semDeslocamento.max,
    fonte: 'Sagayama et al. (2017)',
    comoReconhecer: 'Exercício de golpe sem sair do lugar. Medido em jogadores de competição: três treinos, três valores — por isso, faixa.',
  },
  {
    id: 'deslocamento',
    nome: 'Treino com deslocamento',
    nomeCurto: 'Com deslocamento',
    naFrase: 'treino de ping pong com deslocamento',
    metMin: ESTUDO_TREINO.comDeslocamento.min,
    metMax: ESTUDO_TREINO.comDeslocamento.max,
    fonte: 'Sagayama et al. (2017)',
    comoReconhecer: 'Exercício em que você se desloca de um lado a outro da mesa a cada bola. Medido em jogadores de competição.',
  },
];

export const modalidade = (id: string): Modalidade => MODALIDADES.find((m) => m.id === id) ?? MODALIDADES[0];

export const temFaixa = (id: string): boolean => modalidade(id).metMin !== modalidade(id).metMax;

/** Valores que circulam e esta página não usa, por não conseguirmos conferir. */
export const SEM_CONFERENCIA = [
  'Medição em jogo de juniores (os números publicados não fecham entre si)',
  'Jogo oficial de competição',
  'Tênis de mesa adaptado',
] as const;

/* ───────────────────────── Validação ───────────────────────── */

export const pesoValido = (p: number | null): p is number =>
  p !== null && Number.isFinite(p) && p >= PESO_MIN && p <= PESO_MAX;

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

/* ───────────────────────── O cálculo ───────────────────────── */

export const kcalPorMinuto = (met: number, pesoKg: number): number => (met * 3.5 * pesoKg) / 200;

export interface Resultado {
  idModalidade: string;
  metMin: number;
  metMax: number;
  /** Minutos na mesa; na meta, a faixa de minutos. */
  minutosMin: number;
  minutosMax: number;
  kcalMin: number;
  kcalMax: number;
  liquidaMin: number;
  liquidaMax: number;
}

/** Modo 1 — minutos na mesa. Com faixa de METs, devolve faixa de gasto. */
export function deTempo(minutos: number, pesoKg: number, idModalidade = 'jogo'): Resultado {
  const m = modalidade(idModalidade);
  const rep = kcalPorMinuto(1, pesoKg) * minutos;
  return {
    idModalidade: m.id,
    metMin: m.metMin,
    metMax: m.metMax,
    minutosMin: minutos,
    minutosMax: minutos,
    kcalMin: kcalPorMinuto(m.metMin, pesoKg) * minutos,
    kcalMax: kcalPorMinuto(m.metMax, pesoKg) * minutos,
    liquidaMin: kcalPorMinuto(m.metMin, pesoKg) * minutos - rep,
    liquidaMax: kcalPorMinuto(m.metMax, pesoKg) * minutos - rep,
  };
}

/**
 * Modo 2 — meta. Com faixa, ela se inverte: o MET MAIOR dá o tempo MENOR.
 * O resultado guarda os minutos em ordem crescente.
 */
export function deKcal(alvoKcal: number, pesoKg: number, idModalidade = 'jogo'): Resultado {
  const m = modalidade(idModalidade);
  const minutosMin = alvoKcal / kcalPorMinuto(m.metMax, pesoKg);
  const minutosMax = alvoKcal / kcalPorMinuto(m.metMin, pesoKg);
  return {
    idModalidade: m.id,
    metMin: m.metMin,
    metMax: m.metMax,
    minutosMin,
    minutosMax,
    kcalMin: alvoKcal,
    kcalMax: alvoKcal,
    liquidaMin: alvoKcal - kcalPorMinuto(1, pesoKg) * minutosMin,
    liquidaMax: alvoKcal - kcalPorMinuto(1, pesoKg) * minutosMax,
  };
}

export const simulacaoUmQuilo = (pesoKg: number, idModalidade = 'jogo'): Resultado =>
  deKcal(KCAL_POR_KG_GORDURA, pesoKg, idModalidade);

/* ───────────────────────── A conferência ───────────────────────── */

/**
 * A tabela contra os treinos medidos. Parado na mesa, a medição fica logo
 * acima dos 4,0 da tabela; com deslocamento, passa do dobro.
 */
export const tabelaContraMedicao = (): {
  metTabela: number;
  paradoMin: number;
  paradoMax: number;
  deslocamentoMin: number;
  deslocamentoMax: number;
  vezesMin: number;
  vezesMax: number;
} => {
  const metTabela = modalidade('jogo').metMin;
  const p = ESTUDO_TREINO.semDeslocamento;
  const d = ESTUDO_TREINO.comDeslocamento;
  return {
    metTabela,
    paradoMin: p.min,
    paradoMax: p.max,
    deslocamentoMin: d.min,
    deslocamentoMax: d.max,
    vezesMin: d.min / metTabela,
    vezesMax: d.max / metTabela,
  };
};

/* ───────────────────────── Formatação ───────────────────────── */

export function arredondaKcal(k: number): number {
  if (!Number.isFinite(k) || k <= 0) return 0;
  if (k >= 1000) return Math.round(k / 10) * 10;
  return Math.round(k);
}

export const formataKcal = (k: number): string => arredondaKcal(k).toLocaleString('pt-BR');

export function formataTempo(min: number): string {
  if (!Number.isFinite(min) || min <= 0) return '—';
  const m = Math.round(min);
  if (m < 60) return `${m} min`;
  const h = Math.floor(m / 60);
  const r = m % 60;
  if (r === 0) return h === 1 ? '1 hora' : `${h} horas`;
  return `${h}h${String(r).padStart(2, '0')}`;
}

export const formataMet = (m: number): string =>
  m.toLocaleString('pt-BR', { minimumFractionDigits: 1, maximumFractionDigits: 1 });

/** "4,0" ou "9,5 a 11,5". */
export const formataFaixaMet = (r: { metMin: number; metMax: number }): string =>
  formataMet(r.metMin) === formataMet(r.metMax) ? formataMet(r.metMin) : `${formataMet(r.metMin)} a ${formataMet(r.metMax)}`;

/** "≈ 294" ou "≈ 331 a 368". Arredonda cada ponta antes de comparar. */
export const formataFaixaKcal = (min: number, max: number): string =>
  arredondaKcal(min) === arredondaKcal(max) ? formataKcal(min) : `${formataKcal(min)} a ${formataKcal(max)}`;

/** "54 min", "41 a 54 min", "1h08 a 1h31": a unidade não se repete abaixo de uma hora. */
export function formataFaixaTempo(min: number, max: number): string {
  if (Math.round(min) === Math.round(max)) return formataTempo(min);
  if (Math.round(max) < 60) return `${Math.round(min)} a ${Math.round(max)} min`;
  return `${formataTempo(min)} a ${formataTempo(max)}`;
}

/* Frases sem verbo concordando com o tempo. */
export function fraseContexto(pesoKg: number, r: Resultado): string {
  const m = modalidade(r.idModalidade);
  const final = r.metMin !== r.metMax ? ': o estudo mediu mais de um treino desse tipo, e a conta mostra as pontas.' : '.';
  return (
    `Para uma pessoa de ${Math.round(pesoKg)} kg, o gasto estimado de ${formataTempo(r.minutosMin)} de ` +
    `${m.naFrase} é de aproximadamente ${formataFaixaKcal(r.kcalMin, r.kcalMax)} kcal${final}`
  );
}

/* ───────────────────────── Tabelas ───────────────────────── */

export const PESOS_TABELA = [50, 60, 70, 80, 90, 100, 120] as const;

export interface LinhaPeso {
  peso: number;
  jogo: number;
  deslocamentoMin: number;
  deslocamentoMax: number;
}

/** Uma hora na mesa, por peso. */
export const tabelaPorPeso = (): LinhaPeso[] =>
  PESOS_TABELA.map((peso) => {
    const d = deTempo(60, peso, 'deslocamento');
    return { peso, jogo: deTempo(60, peso, 'jogo').kcalMin, deslocamentoMin: d.kcalMin, deslocamentoMax: d.kcalMax };
  });

/* ───────────────────────── Textos fixos ───────────────────────── */

export const NOTA_DESLOCAMENTO =
  'Esta é a linha medida com deslocamento: o jogador sai do lugar a cada bola, de um lado a outro da mesa. É o treino de quem compete. Num jogo de lazer, em que a bola vem para perto e ninguém corre atrás dela, a linha da tabela é a referência mais próxima.';

export const NOTA_PARADO =
  'Treino parado aparece como faixa porque o estudo mediu três exercícios diferentes sem deslocamento, e cada um deu um valor — de 4,5 a 5,2 METs. A conta mostra as duas pontas em vez de escolher uma.';

export const NOTA_SEM_CONFERENCIA =
  'Um estudo com juniores de seleção publica, para o mesmo jogo, um consumo de oxigênio que daria cerca de 7,3 METs e um gasto de 4,8 METs. Os dois números não fecham entre si, e não conseguimos conferir qual está certo — ficou fora. Também não conferimos medição de jogo oficial de competição nem de tênis de mesa adaptado.';

export const NOTA_BRUTO =
  'O número é bruto: inclui o que você gastaria parado no mesmo tempo. O acréscimo real ao seu dia é menor, e a ferramenta mostra os dois.';

export const NOTA_ESTIMATIVA =
  'É uma estimativa. No ping pong, a variação entre pessoas é grande por um motivo que a tabela não vê: o nível do jogo. Bola rápida e bem colocada obriga o outro a se deslocar, e é o deslocamento, não o golpe, que puxa o gasto para cima.';

export const NOTA_SEM_PERDA_LOCALIZADA =
  'Nenhum exercício escolhe de onde o corpo tira gordura. O ping pong aumenta o gasto do dia; onde a gordura sai primeiro é decidido por genética e hormônio.';

export const NOTA_SEGURANCA =
  'Ping pong tem baixo impacto, mas repete o mesmo gesto de braço centenas de vezes e pede giro rápido de tronco. Ombro, punho e lombar costumam ser o que mais reclama. Quem vai voltar depois de anos parado deve conversar com um médico antes, e dor que persiste é assunto para médico ou fisioterapeuta, não para jogar por cima.';

export const NOTA_NAO_PRESCRICAO =
  'Esta é uma estimativa educativa de gasto energético. Não é avaliação metabólica, não substitui calorimetria indireta, não prescreve treino e não diagnostica nada.';
