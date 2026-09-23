/**
 * O motor da página de calorias do tênis.
 *
 * A DÉCIMA TERCEIRA DO CLUSTER — E A PRIMEIRA EM QUE O TEMPO PARADO NÃO SAI
 *
 *     futebol   → quanto tempo você esteve DENTRO do jogo
 *     lutas     → o round
 *     hidro     → a aula de verdade, medida, contra a linha da tabela
 *     tênis     → o tempo parado entre pontos, que JÁ está na tabela
 *
 * No futebol e nas lutas, a página desconta o tempo parado. No tênis, a
 * tentação é a mesma — a bola fica em jogo bem menos da metade do tempo — e
 * seria errado ceder a ela. Seliger e colegas mediram 16 jogadores numa
 * partida de treino de 10 minutos: 27,3 mL de oxigênio por kg por minuto,
 * com a bola em jogo em 41,1% do tempo. Isso é 7,8 METs pela partida
 * INTEIRA, pausas entre pontos incluídas, e o Compêndio dá 8,0 para
 * simples. A tabela já é o tempo de quadra, não o tempo de bola.
 *
 * AS DUPLAS
 *
 * O Compêndio tem duas linhas para tênis em duplas, 4,5 (15685) e 6,0
 * (15680), e não conseguimos conferir o que as diferencia. Escolher uma
 * seria inventar a distinção; a calculadora mostra a faixa.
 *
 * O QUE NÃO ENTRA
 *
 * "Tênis competitivo" (15676) e "bate-bola sem jogo" (15695) aparecem
 * atribuídos ao Compêndio de 2024, mas só conseguimos confirmar em uma
 * fonte cada. Ficam fora, e a página diz. Beach tennis não tem linha que
 * conseguimos conferir.
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
    'mede tênis geral, esforço moderado, em 6,8 METs (código 15675 — era 7,3 em 2011), tênis simples em 8,0 (15690) e tênis em duplas em duas linhas, 6,0 (15680) e 4,5 (15685).',
};

export const FONTE_SELIGER: Fonte = {
  rotulo:
    'Seliger V, Ejem M, Pauer M, et al. Energy metabolism in tennis. Internationale Zeitschrift für angewandte Physiologie, 31:333–340, 1973',
  rotuloCurto: 'Seliger et al. (1973)',
  url: 'https://pubmed.ncbi.nlm.nih.gov/4741650/',
  resumo:
    'mediu 16 jogadores numa partida de treino de 10 minutos, em condições quase naturais: consumo de oxigênio de 27,3 mL por kg por minuto, frequência cardíaca média de 143 batimentos, 62 golpes e 240 metros corridos por jogador, com a bola em jogo em 41,1% do tempo.',
};

export const FONTE_HALL: Fonte = {
  rotulo:
    'Hall KD, Sacks G, Chandramohan D, et al. Quantification of the effect of energy imbalance on bodyweight. The Lancet, 2011',
  rotuloCurto: 'Hall et al. (2011)',
  url: 'https://pubmed.ncbi.nlm.nih.gov/21872751/',
  resumo:
    'demonstra que a regra dos 7.700 kcal por quilo superestima a perda ao longo do tempo: o gasto do corpo cai conforme ele emagrece, e a resposta não é linear.',
};

export const FONTES: Fonte[] = [FONTE_COMPENDIO, FONTE_SELIGER, FONTE_HALL];

export const KCAL_POR_KG_GORDURA = 7700;

/* ───────────────────────── Limites ───────────────────────── */

export const PESO_MIN = 30;
export const PESO_MAX = 250;
export const PESO_PADRAO = 70;

/** Minutos de quadra, com as pausas entre pontos. */
export const MINUTOS_MIN = 10;
export const MINUTOS_MAX = 300;
export const MINUTOS_PADRAO = 60;

export const KCAL_MIN = 20;
export const KCAL_MAX = 3000;

/* ───────────────────────── O estudo ───────────────────────── */

/** Seliger et al.: partida de treino, medida inteira, pausas incluídas. */
export const ESTUDO_PARTIDA = {
  vo2: 27.3,
  minutos: 10,
  participantes: 16,
  fcMedia: 143,
  golpes: 62,
  metrosCorridos: 240,
  /** Porcentagem do tempo com a bola em jogo. */
  pctEmJogo: 41.1,
} as const;

export const ML_O2_POR_MET = 3.5;

/* ───────────────────────── A tabela ───────────────────────── */

export interface Modalidade {
  id: string;
  nome: string;
  nomeCurto: string;
  /** Como entra numa frase: "1 hora de {naFrase}". */
  naFrase: string;
  /** Faixa de METs. Igual nas pontas quando o Compêndio dá um valor só. */
  metMin: number;
  metMax: number;
  codigos: string[];
  comoReconhecer: string;
}

/**
 * Três modalidades, todas do Compêndio 2024.
 *
 * Duplas é faixa porque o Compêndio tem duas linhas para ela e não
 * conseguimos conferir o que separa uma da outra.
 */
export const MODALIDADES: Modalidade[] = [
  {
    id: 'simples',
    nome: 'Tênis simples',
    nomeCurto: 'Simples',
    naFrase: 'tênis simples',
    metMin: 8.0,
    metMax: 8.0,
    codigos: ['15690'],
    comoReconhecer: 'Um contra um, contando pontos.',
  },
  {
    id: 'geral',
    nome: 'Tênis geral, esforço moderado',
    nomeCurto: 'Geral, moderado',
    naFrase: 'tênis em esforço moderado',
    metMin: 6.8,
    metMax: 6.8,
    codigos: ['15675'],
    comoReconhecer: 'Jogo de lazer, sem disputar cada ponto.',
  },
  {
    id: 'duplas',
    nome: 'Tênis em duplas',
    nomeCurto: 'Duplas',
    naFrase: 'tênis em duplas',
    metMin: 4.5,
    metMax: 6.0,
    codigos: ['15685', '15680'],
    comoReconhecer: 'Dois contra dois. O Compêndio tem duas linhas para duplas — por isso, faixa.',
  },
];

export const modalidade = (id: string): Modalidade => MODALIDADES.find((m) => m.id === id) ?? MODALIDADES[0];

export const temFaixa = (id: string): boolean => modalidade(id).metMin !== modalidade(id).metMax;

/** Valores que circulam e esta página não usa, por não conseguirmos conferir. */
export const SEM_CONFERENCIA = ['Tênis competitivo (15676)', 'Bate-bola, sem jogo (15695)', 'Beach tennis'] as const;

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
  /** Minutos de quadra; na meta, a faixa de minutos. */
  minutosMin: number;
  minutosMax: number;
  kcalMin: number;
  kcalMax: number;
  liquidaMin: number;
  liquidaMax: number;
}

/** Modo 1 — tempo de quadra. Com duplas, devolve faixa de gasto. */
export function deTempo(minutos: number, pesoKg: number, idModalidade = 'simples'): Resultado {
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
 * Modo 2 — meta. Com duplas, a faixa se inverte: o MET MAIOR dá o tempo
 * MENOR. O resultado guarda os minutos em ordem crescente.
 */
export function deKcal(alvoKcal: number, pesoKg: number, idModalidade = 'simples'): Resultado {
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

export const simulacaoUmQuilo = (pesoKg: number, idModalidade = 'simples'): Resultado =>
  deKcal(KCAL_POR_KG_GORDURA, pesoKg, idModalidade);

/* ───────────────────────── As conferências ───────────────────────── */

/**
 * A partida medida contra a tabela.
 *
 * O consumo de oxigênio por quilo vira MET direto (÷ 3,5), sem depender do
 * peso de quem foi medido. Ele foi medido na partida inteira, com a bola em
 * jogo menos da metade do tempo — se ainda assim cai perto dos 8,0 do
 * simples, a tabela já inclui as pausas entre pontos.
 */
export const reproduzPartida = (): { metMedido: number; metDaTabela: number; erro: number } => {
  const metMedido = ESTUDO_PARTIDA.vo2 / ML_O2_POR_MET;
  const metDaTabela = modalidade('simples').metMin;
  return { metMedido, metDaTabela, erro: Math.abs(metMedido - metDaTabela) / metDaTabela };
};

/**
 * O erro de descontar a pausa. Se alguém aplicasse os 8,0 só ao tempo de
 * bola em jogo, a conta cairia para menos da metade — e ficaria longe da
 * medição que diz que a partida inteira custa 7,8.
 */
export const seDescontasseAPausa = (pesoKg: number, minutos = 60): { certo: number; errado: number } => ({
  certo: deTempo(minutos, pesoKg, 'simples').kcalMin,
  errado: deTempo((minutos * ESTUDO_PARTIDA.pctEmJogo) / 100, pesoKg, 'simples').kcalMin,
});

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

/** "8,0" ou "4,5 a 6,0". */
export const formataFaixaMet = (r: { metMin: number; metMax: number }): string =>
  r.metMin === r.metMax ? formataMet(r.metMin) : `${formataMet(r.metMin)} a ${formataMet(r.metMax)}`;

/** "≈ 588" ou "≈ 331 a 441". Arredonda cada ponta antes de comparar. */
export const formataFaixaKcal = (min: number, max: number): string =>
  arredondaKcal(min) === arredondaKcal(max) ? formataKcal(min) : `${formataKcal(min)} a ${formataKcal(max)}`;

/** "54 min", "41 a 54 min", "1h08 a 1h31": a unidade não se repete abaixo de uma hora. */
export function formataFaixaTempo(min: number, max: number): string {
  if (Math.round(min) === Math.round(max)) return formataTempo(min);
  if (Math.round(max) < 60) return `${Math.round(min)} a ${Math.round(max)} min`;
  return `${formataTempo(min)} a ${formataTempo(max)}`;
}

/* Frases sem verbo concordando com o tempo: "1 hora ... gastam" já apareceu. */
export function fraseContexto(pesoKg: number, r: Resultado): string {
  const m = modalidade(r.idModalidade);
  const faixa = r.metMin !== r.metMax;
  return (
    `Para uma pessoa de ${Math.round(pesoKg)} kg, o gasto estimado de ${formataTempo(r.minutosMin)} de ` +
    `${m.naFrase} é de aproximadamente ${formataFaixaKcal(r.kcalMin, r.kcalMax)} kcal` +
    (faixa ? ': o Compêndio tem duas linhas para duplas, e a conta mostra as duas.' : ', contando as pausas entre pontos.')
  );
}

/* ───────────────────────── Tabelas ───────────────────────── */

export const PESOS_TABELA = [50, 60, 70, 80, 90, 100, 120] as const;

export interface LinhaPeso {
  peso: number;
  simples: number;
  geral: number;
  duplasMin: number;
  duplasMax: number;
}

/** Uma hora de quadra, por peso, nas três modalidades. */
export const tabelaPorPeso = (): LinhaPeso[] =>
  PESOS_TABELA.map((peso) => {
    const d = deTempo(60, peso, 'duplas');
    return {
      peso,
      simples: deTempo(60, peso, 'simples').kcalMin,
      geral: deTempo(60, peso, 'geral').kcalMin,
      duplasMin: d.kcalMin,
      duplasMax: d.kcalMax,
    };
  });

/* ───────────────────────── Textos fixos ───────────────────────── */

export const NOTA_PAUSA =
  'Conte o tempo de quadra inteiro, com as pausas entre pontos. A tabela já as inclui: a partida medida em quadra teve a bola em jogo em só 41% do tempo e ainda assim custou o equivalente a 7,8 METs — praticamente os 8,0 do Compêndio para simples. Descontar a pausa a tiraria duas vezes — ela já baixou a média da tabela — e faria a conta cair pela metade.';

export const NOTA_DUPLAS =
  'Duplas aparecem como faixa porque o Compêndio tem duas linhas para elas, 4,5 e 6,0 METs, e não conseguimos conferir o que diferencia uma da outra. Escolher uma seria inventar a diferença, então a conta mostra as duas pontas.';

export const NOTA_SEM_CONFERENCIA =
  '"Tênis competitivo" (8,0) e "bate-bola, sem jogo" (5,0) circulam atribuídos ao Compêndio de 2024, mas só conseguimos confirmar em uma fonte cada, e ficaram fora. Beach tennis não tem linha que tenhamos conseguido conferir — o jogo, a quadra e a areia são outros, e usar o valor do tênis seria chute.';

export const NOTA_BRUTO =
  'O número é bruto: inclui o que você gastaria parado no mesmo tempo. O acréscimo real ao seu dia é menor, e a ferramenta mostra os dois.';

export const NOTA_ESTIMATIVA =
  'É uma estimativa. No tênis, a variação entre pessoas é grande por um motivo que a tabela não vê: o nível do jogo. Pontos longos, entre jogadores parecidos, tendem a custar mais do que um jogo em que metade dos saques não volta.';

export const NOTA_SEM_PERDA_LOCALIZADA =
  'Nenhum exercício escolhe de onde o corpo tira gordura. O tênis aumenta o gasto do dia; onde a gordura sai primeiro é decidido por genética e hormônio.';

export const NOTA_SEGURANCA =
  'Tênis é esporte de arrancada, freada e giro, com o braço dominante repetindo o mesmo gesto centenas de vezes. Ombro, cotovelo e tornozelo costumam ser o que mais reclama, principalmente em quem joga só no fim de semana. Quem vai voltar depois de anos parado deve conversar com um médico antes, e dor que persiste é assunto para médico ou fisioterapeuta, não para jogar por cima.';

export const NOTA_NAO_PRESCRICAO =
  'Esta é uma estimativa educativa de gasto energético. Não é avaliação metabólica, não substitui calorimetria indireta, não prescreve treino e não diagnostica nada.';
