/**
 * O motor da página de calorias da hidroginástica.
 *
 * A DÉCIMA SEGUNDA DO CLUSTER — E A PRIMEIRA EM QUE A TABELA PERDE PARA A AULA
 *
 *     caminhada → o tempo (e a inclinação)
 *     corrida   → a distância
 *     bicicleta → a velocidade
 *     natação   → o estilo
 *     escada    → a altura
 *     corda     → quase nada; a cadência menos ainda
 *     dança     → a música
 *     yoga      → o instrumento de medida mente
 *     futebol   → quanto tempo você esteve DENTRO do jogo
 *     lutas     → o round
 *     hidro     → a aula de verdade, medida, contra a linha da tabela
 *
 * O Compêndio dá 5,5 METs para hidroginástica geral. Quando Nikolai e
 * colegas mediram uma aula de verdade — 50 minutos, 14 adultos de 57 anos em
 * média, calorimetria portátil —, deu 4,26. A aula real ficou 23% abaixo da
 * tabela. É a informação que falta em toda calculadora que usa 5,5 para uma
 * aula inteira, e é a razão de esta página existir.
 *
 * A CONFERÊNCIA
 *
 * O estudo publica o MET, a duração, o peso médio (89,9 kg) e o gasto
 * líquido da sessão (249,1 kcal). Com a equação de METs, os três primeiros
 * reproduzem o quarto: (4,26 − 1) × 3,5 × 89,9 ÷ 200 × 50 = 256 kcal, a 3%
 * do publicado. Se não fechasse, a leitura do estudo estaria errada.
 *
 * O QUE NÃO ENTRA
 *
 * Desde 2024 o Compêndio tem uma versão para quem tem 60 anos ou mais, com
 * repouso de 2,7 mL/kg/min em vez de 3,5. Não conseguimos conferir o valor de
 * hidroginástica nessa versão, então ele não entra — e a página diz isso,
 * porque a hidroginástica é, antes de tudo, uma atividade desse público.
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
  url: 'https://pacompendium.com/water-activities/',
  resumo:
    'mede hidroginástica geral em 5,5 METs (código 18355, o mesmo valor de 2011), hidroginástica com exercícios de resistência em 3,8 (18356) e hidroginástica de alta intensidade em 7,5 (18358).',
};

export const FONTE_NIKOLAI: Fonte = {
  rotulo:
    'Nikolai AL, Novotny BA, Bohnen CL, Schleis KM, Dalleck LC. Cardiovascular and metabolic responses to water aerobics exercise in middle-age and older adults. Journal of Physical Activity and Health, 6(3):333–338, 2009',
  rotuloCurto: 'Nikolai et al. (2009)',
  url: 'https://pubmed.ncbi.nlm.nih.gov/19564662/',
  resumo:
    'mediu 14 homens e mulheres de 57,4 anos e 89,9 kg em média numa sessão de hidroginástica de 50 minutos, com sistema portátil de calorimetria: 4,26 METs, 42,2% da reserva de consumo de oxigênio e gasto líquido de 249,1 kcal por sessão.',
};

export const FONTE_OLDER: Fonte = {
  rotulo:
    'Willis EA, Herrmann SD, Hastert M, et al. Older Adult Compendium of Physical Activities: energy costs of human activities in adults aged 60 and older. Journal of Sport and Health Science, 13(1):13–17, 2024',
  rotuloCurto: 'Compêndio para 60+ (2024)',
  url: 'https://pacompendium.com/older-adult-compendium/',
  resumo:
    'define o MET de quem tem 60 anos ou mais com repouso de 2,7 mL de oxigênio por kg por minuto, e não 3,5, porque o gasto em repouso cai com a idade. Não conseguimos conferir nele um valor para hidroginástica.',
};

export const FONTE_HALL: Fonte = {
  rotulo:
    'Hall KD, Sacks G, Chandramohan D, et al. Quantification of the effect of energy imbalance on bodyweight. The Lancet, 2011',
  rotuloCurto: 'Hall et al. (2011)',
  url: 'https://pubmed.ncbi.nlm.nih.gov/21872751/',
  resumo:
    'demonstra que a regra dos 7.700 kcal por quilo superestima a perda ao longo do tempo: o gasto do corpo cai conforme ele emagrece, e a resposta não é linear.',
};

export const FONTES: Fonte[] = [FONTE_COMPENDIO, FONTE_NIKOLAI, FONTE_OLDER, FONTE_HALL];

export const KCAL_POR_KG_GORDURA = 7700;

/* ───────────────────────── Limites ───────────────────────── */

export const PESO_MIN = 30;
export const PESO_MAX = 250;
export const PESO_PADRAO = 70;

export const MINUTOS_MIN = 10;
export const MINUTOS_MAX = 180;
export const MINUTOS_PADRAO = 50;

export const AULAS_MIN = 1;
export const AULAS_MAX = 7;
export const AULAS_PADRAO = 2;

export const KCAL_MIN = 20;
export const KCAL_MAX = 3000;

/** Semanas por mês, para a conta do mês: 52 ÷ 12. */
export const SEMANAS_POR_MES = 52 / 12;

/* ───────────────────────── O estudo ───────────────────────── */

/** Nikolai et al.: uma aula de verdade, medida do começo ao fim. */
export const ESTUDO_AULA = {
  met: 4.26,
  minutos: 50,
  pesoMedio: 89.9,
  idadeMedia: 57.4,
  participantes: 14,
  kcalLiquida: 249.1,
  pctReserva: 42.2,
  vo2max: 31.0,
} as const;

/* ───────────────────────── A tabela ───────────────────────── */

export type Origem = 'compendio' | 'estudo';

export interface Tipo {
  id: string;
  nome: string;
  /** Nome curto, para os botões. */
  nomeCurto: string;
  /** Como o tipo entra numa frase: "50 min de {naFrase}". */
  naFrase: string;
  met: number;
  origem: Origem;
  /** Código do Compêndio, ou a referência do estudo. */
  codigo: string;
  comoReconhecer: string;
}

/**
 * Três linhas do Compêndio e a aula medida.
 *
 * A aula medida não é "mais uma intensidade": é o que uma sessão inteira de
 * 50 minutos deu quando alguém mediu do começo ao fim. As linhas do
 * Compêndio descrevem o exercício; a medição descreve uma aula.
 */
export const TIPOS: Tipo[] = [
  {
    id: 'medida',
    nome: 'Aula comum, medida em estudo',
    nomeCurto: 'Aula comum',
    naFrase: 'aula comum (pela medição em estudo)',
    met: ESTUDO_AULA.met,
    origem: 'estudo',
    codigo: 'Nikolai et al. 2009',
    comoReconhecer: 'Uma sessão real de 50 minutos, medida do começo ao fim com calorimetria.',
  },
  {
    id: 'geral',
    nome: 'Hidroginástica geral',
    nomeCurto: 'Geral',
    naFrase: 'hidroginástica geral (pela tabela)',
    met: 5.5,
    origem: 'compendio',
    codigo: '18355',
    comoReconhecer: 'O valor que as calculadoras usam para qualquer aula. Descreve o exercício, não a aula.',
  },
  {
    id: 'resistencia',
    nome: 'Hidroginástica com exercícios de resistência',
    nomeCurto: 'Com resistência',
    naFrase: 'hidroginástica com exercícios de resistência',
    met: 3.8,
    origem: 'compendio',
    codigo: '18356',
    comoReconhecer: 'Aula focada em força, com halteres de espuma, luvas ou caneleiras.',
  },
  {
    id: 'alta',
    nome: 'Hidroginástica de alta intensidade',
    nomeCurto: 'Alta intensidade',
    naFrase: 'hidroginástica de alta intensidade',
    met: 7.5,
    origem: 'compendio',
    codigo: '18358',
    comoReconhecer: 'Ritmo forte do começo ao fim.',
  },
];

export const tipo = (id: string): Tipo => TIPOS.find((t) => t.id === id) ?? TIPOS[0];

export const metHidro = (id: string): number => tipo(id).met;

/**
 * O que circula e esta página não usa, por não conseguirmos conferir.
 * "Não conferimos" é diferente de "não existe".
 */
export const SEM_CONFERENCIA = [
  'Hidroginástica no Compêndio para 60+',
  'Caminhada na água',
  'Corrida em piscina funda',
] as const;

/* ───────────────────────── Validação ───────────────────────── */

export const pesoValido = (p: number | null): p is number =>
  p !== null && Number.isFinite(p) && p >= PESO_MIN && p <= PESO_MAX;

export const minutosValidos = (m: number | null): m is number =>
  m !== null && Number.isFinite(m) && m >= MINUTOS_MIN && m <= MINUTOS_MAX;

/** Aula é número inteiro. "2,5 aulas por semana" é erro de digitação. */
export const aulasValidas = (a: number | null): a is number =>
  a !== null && Number.isInteger(a) && a >= AULAS_MIN && a <= AULAS_MAX;

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

export type Cenario = 'aula' | 'semana';

export interface Resultado {
  cenario: Cenario;
  idTipo: string;
  met: number;
  /** Minutos de uma aula. */
  minutos: number;
  /** Aulas por semana. 1 fora do cenário de semana. */
  aulas: number;
  /** Gasto de UMA aula. */
  kcalAula: number;
  /** Gasto do cenário: uma aula, ou a semana inteira. */
  kcal: number;
  kcalLiquida: number;
  /** Gasto de um mês no ritmo da semana. Só no cenário de semana. */
  kcalMes: number;
}

function monta(args: { cenario: Cenario; idTipo: string; pesoKg: number; minutos: number; aulas: number }): Resultado {
  const met = metHidro(args.idTipo);
  const kcalAula = kcalPorMinuto(met, args.pesoKg) * args.minutos;
  const kcal = kcalAula * args.aulas;
  return {
    cenario: args.cenario,
    idTipo: args.idTipo,
    met,
    minutos: args.minutos,
    aulas: args.aulas,
    kcalAula,
    kcal,
    kcalLiquida: kcal - kcalPorMinuto(1, args.pesoKg) * args.minutos * args.aulas,
    kcalMes: kcal * SEMANAS_POR_MES,
  };
}

/** Modo 1 — uma aula. */
export const deAula = (minutos: number, pesoKg: number, idTipo = 'medida'): Resultado =>
  monta({ cenario: 'aula', idTipo, pesoKg, minutos, aulas: 1 });

/** Modo 2 — a semana: aulas por semana × duração. Devolve também o mês. */
export const deSemana = (aulas: number, minutos: number, pesoKg: number, idTipo = 'medida'): Resultado =>
  monta({ cenario: 'semana', idTipo, pesoKg, minutos, aulas });

/** Modo 3 — meta de calorias. Devolve minutos de aula. */
export function deKcal(alvoKcal: number, pesoKg: number, idTipo = 'medida'): Resultado {
  const porMin = kcalPorMinuto(metHidro(idTipo), pesoKg);
  const minutos = porMin > 0 ? alvoKcal / porMin : 0;
  return { ...deAula(minutos, pesoKg, idTipo), kcal: alvoKcal, kcalAula: alvoKcal };
}

/** Quantas aulas de uma duração cabem em tantos minutos. */
export const aulasEquivalentes = (minutos: number, duracao = MINUTOS_PADRAO): number =>
  duracao > 0 ? Math.ceil(minutos / duracao - 1e-9) : 0;

export const simulacaoUmQuilo = (pesoKg: number, idTipo = 'medida'): Resultado =>
  deKcal(KCAL_POR_KG_GORDURA, pesoKg, idTipo);

/* ───────────────────────── As conferências ───────────────────────── */

/**
 * O estudo reproduzido pela nossa conta.
 *
 * MET, duração e peso médio publicados, pela equação de METs, têm que dar o
 * gasto líquido publicado. Se não dessem, ou a equação ou a leitura do
 * estudo estariam erradas — e o 4,26 não poderia virar opção da calculadora.
 */
export const reproduzAula = (): { kcalCalculada: number; kcalDoArtigo: number; erro: number } => {
  const e = ESTUDO_AULA;
  const kcalCalculada = (e.met - 1) * kcalPorMinuto(1, e.pesoMedio) * e.minutos;
  return { kcalCalculada, kcalDoArtigo: e.kcalLiquida, erro: Math.abs(kcalCalculada - e.kcalLiquida) / e.kcalLiquida };
};

/** Quanto a linha geral do Compêndio fica acima da aula medida. */
export const tabelaAcimaDaAula = (): number => metHidro('geral') / metHidro('medida') - 1;

/** Quanto a aula medida fica abaixo da linha geral. */
export const aulaAbaixoDaTabela = (): number => 1 - metHidro('medida') / metHidro('geral');

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

/** MET com uma casa, como o Compêndio publica; a aula medida mantém duas. */
export const formataMet = (m: number): string =>
  m.toLocaleString('pt-BR', {
    minimumFractionDigits: Number.isInteger(m * 10) ? 1 : 2,
    maximumFractionDigits: 2,
  });

export const formataPct = (f: number): string => `${Math.round(f * 100)}%`;

/**
 * Tantos minutos, em aulas de uma duração, com uma casa: "1,1 aula",
 * "2,4 aulas". Arredondar para cima dizia "2 aulas" para 57 minutos e "1
 * aula" para 3 — e a conta da meta existe justamente para não enganar.
 * Abaixo de 2, singular: "1,9 aula".
 */
export function formataEmAulas(minutos: number, duracao = MINUTOS_PADRAO): string {
  const x = duracao > 0 ? minutos / duracao : 0;
  const txt = x.toLocaleString('pt-BR', { minimumFractionDigits: 1, maximumFractionDigits: 1 });
  return `${txt} ${x < 2 ? 'aula' : 'aulas'} de ${duracao} minutos`;
}

/** "1 aula", "3 aulas". */
export const formataAulas = (n: number): string => `${n} ${n === 1 ? 'aula' : 'aulas'}`;

/*
 * Frases sem verbo concordando com o tempo ou com as aulas: "1 aula ...
 * gastam" é o erro de concordância que já apareceu no yoga e nas lutas.
 */
export function fraseContexto(pesoKg: number, r: Resultado): string {
  const t = tipo(r.idTipo).naFrase;
  if (r.cenario === 'semana') {
    return (
      `Para ${Math.round(pesoKg)} kg, ${formataAulas(r.aulas)} de ${formataTempo(r.minutos)} por ` +
      `semana, ${r.aulas === 1 ? 'estimada' : 'estimadas'} como ${t}: aproximadamente ${formataKcal(r.kcal)} kcal na semana e ` +
      `${formataKcal(r.kcalMes)} kcal no mês.`
    );
  }
  return (
    `Para uma pessoa de ${Math.round(pesoKg)} kg, o gasto estimado de ` +
    `${formataTempo(r.minutos)} de ${t} é de aproximadamente ${formataKcal(r.kcal)} kcal.`
  );
}

/* ───────────────────────── Tabelas ───────────────────────── */

export const PESOS_TABELA = [50, 60, 70, 80, 90, 100, 120] as const;

export interface LinhaPeso {
  peso: number;
  medida: number;
  geral: number;
}

/** Uma aula de 50 minutos, por peso: a aula medida contra a linha geral. */
export const tabelaPorPeso = (): LinhaPeso[] =>
  PESOS_TABELA.map((peso) => ({
    peso,
    medida: deAula(MINUTOS_PADRAO, peso, 'medida').kcal,
    geral: deAula(MINUTOS_PADRAO, peso, 'geral').kcal,
  }));

export interface LinhaTipo {
  tipo: Tipo;
  aula: number;
  hora: number;
}

export const tabelaTipos = (pesoKg: number): LinhaTipo[] =>
  TIPOS.map((t) => ({ tipo: t, aula: deAula(MINUTOS_PADRAO, pesoKg, t.id).kcal, hora: deAula(60, pesoKg, t.id).kcal }));

/* ───────────────────────── Textos fixos ───────────────────────── */

export const NOTA_AULA_MEDIDA =
  'A opção "aula comum" não é uma intensidade a mais: é o que uma sessão de 50 minutos deu quando alguém mediu do começo ao fim. As outras três são linhas do Compêndio e descrevem o exercício em si. Para estimar uma aula inteira, a medição é a âncora mais próxima da realidade que conseguimos conferir — com a ressalva de que é uma aula, de um grupo de 14 pessoas.';

export const NOTA_60_MAIS =
  'Desde 2024, o Compêndio tem uma versão para quem tem 60 anos ou mais, com uma base de repouso menor: 2,7 mL de oxigênio por kg por minuto, e não 3,5. Não conseguimos conferir o valor da hidroginástica nessa versão, então a calculadora usa a tabela adulta. A aula medida, feita com gente de 57 anos em média, é a referência mais próxima desse público que conseguimos conferir.';

export const NOTA_BRUTO =
  'O número é bruto: inclui o que você gastaria parado no mesmo tempo. O acréscimo real ao seu dia é menor, e a ferramenta mostra os dois.';

export const NOTA_ESTIMATIVA =
  'É uma estimativa. Na água a variação entre pessoas é grande por um motivo que a tabela não vê: a amplitude. O mesmo exercício, no mesmo ritmo da música, custa bem mais para quem abre o braço inteiro e empurra a água do que para quem só acompanha o movimento.';

export const NOTA_SEM_PERDA_LOCALIZADA =
  'Nenhum exercício escolhe de onde o corpo tira gordura. A hidroginástica aumenta o gasto do dia; onde a gordura sai primeiro é decidido por genética e hormônio.';

export const NOTA_SEGURANCA =
  'A água tira o impacto das articulações, e é por isso que a hidroginástica acolhe tanta gente que não faria outro exercício. Mas ela não substitui avaliação: quem tem problema cardíaco, pressão alta sem controle ou está voltando depois de muito tempo parado deve conversar com um médico antes. E dor que persiste é assunto para médico ou fisioterapeuta, não para aumentar a frequência.';

export const NOTA_NAO_PRESCRICAO =
  'Esta é uma estimativa educativa de gasto energético. Não é avaliação metabólica, não substitui calorimetria indireta, não prescreve treino e não diagnostica nada.';
