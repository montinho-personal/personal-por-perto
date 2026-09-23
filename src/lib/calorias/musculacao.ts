/**
 * O motor da calculadora de calorias da musculação.
 *
 * A DÉCIMA DO CLUSTER — E A ÚNICA QUE MORA DENTRO DE UM ARTIGO
 *
 * As outras nove têm página própria em /calorias/. Esta vive em
 * /emagrecimento/quantas-calorias-queima-a-musculacao/, o artigo que já
 * respondia a pergunta e que o Search Console já mostrava subindo. Uma URL
 * nova em /calorias/musculacao/ disputaria a mesma busca com ele; a
 * calculadora dentro do artigo soma, em vez de dividir.
 *
 * O QUE DECIDE AQUI
 *
 * Não é o relógio da academia. Farinatti e Castinheiras Neto, num estudo
 * brasileiro, mediram
 * 5 séries de 10 no leg press e no crucifixo, com 1 e com 3 minutos de
 * descanso:
 *
 *     leg press   ≈ 89 a 91 kcal     crucifixo  ≈ 50 a 54 kcal
 *
 * O tamanho do músculo decidiu o gasto; o descanso não. Descansar 3 minutos
 * em vez de 1 fez a sessão durar muito mais e custar praticamente o mesmo.
 * Descansar menos não torna cada série mais cara — só faz caber mais série
 * na mesma hora.
 *
 * Por isso o seletor desta calculadora é o TIPO de treino (o Compêndio
 * separa o treino variado de 8 a 15 repetições, os básicos pesados e o
 * treino vigoroso), e não um campo de descanso: um campo de descanso
 * sugeriria que pausa curta gasta mais por série, e a medição diz que não.
 *
 * AS TRÊS PERGUNTAS DO ARTIGO, NA MESMA FERRAMENTA
 *
 * O artigo faz três contas — a sessão, o EPOC, o músculo em repouso — e a
 * calculadora faz as três. A terceira é a que a página inteira defende:
 * cada quilo de músculo gasta cerca de 13 kcal por dia em repouso (Elia,
 * valores confirmados por Wang et al.). Pouco no dia, relevante no ano.
 *
 * E O RELÓGIO
 *
 * Collins e colegas mostraram que, na musculação, a relação entre frequência
 * cardíaca e consumo de oxigênio tem cerca de metade da inclinação da do
 * exercício aeróbico: para a mesma frequência, o gasto é bem menor. Um
 * relógio que aplica a equação aeróbica à musculação infla o número — e,
 * diferente do hot yoga, aqui o mecanismo foi medido na própria atividade.
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
  url: 'https://pacompendium.com/conditioning-exercise/',
  resumo:
    'mede musculação com vários exercícios de 8 a 15 repetições em 3,5 METs (código 02054), agachamento e terra em 5,0 (02052) e treino vigoroso de fisiculturismo ou powerlifting em 6,0 (02050).',
};

export const FONTE_FARINATTI: Fonte = {
  rotulo:
    'Farinatti PTV, Castinheiras Neto AG. The effect of between-set rest intervals on the oxygen uptake during and after resistance exercise sessions performed with large- and small-muscle mass. Journal of Strength and Conditioning Research, 25(11):3181–3190, 2011',
  rotuloCurto: 'Farinatti e Castinheiras Neto (2011)',
  url: 'https://pubmed.ncbi.nlm.nih.gov/21993043/',
  resumo:
    'mediu 10 homens em 5 séries de 10 no leg press e no crucifixo, com 1 e 3 minutos de descanso: cerca de 89 a 91 kcal no leg press e 50 a 54 kcal no crucifixo. O gasto foi decidido pela massa muscular envolvida, não pelo descanso.',
};

export const FONTE_REVISAO_EPOC: Fonte = {
  rotulo:
    'Farinatti P, Castinheiras Neto AG. Influence of resistance training variables on excess postexercise oxygen consumption: a systematic review. ISRN Physiology, 2013',
  rotuloCurto: 'Farinatti e Castinheiras Neto (2013)',
  url: 'https://onlinelibrary.wiley.com/doi/10.1155/2013/825026',
  resumo:
    'revisão de 16 estudos (155 participantes) sobre o gasto de recuperação depois da musculação. Nas comparações que ela reúne, o EPOC fica entre cerca de 22 e 58 kcal, maior com mais intensidade — real, e pequeno.',
};

export const FONTE_ELIA: Fonte = {
  rotulo:
    'Wang Z, Ying Z, Bosy-Westphal A, et al. Specific metabolic rates of major organs and tissues across adulthood: evaluation by mechanistic model of resting energy expenditure. American Journal of Clinical Nutrition, 92(6):1369–1377, 2010',
  rotuloCurto: 'Wang et al. (2010)',
  url: 'https://pubmed.ncbi.nlm.nih.gov/20962155/',
  resumo:
    'confirma, ao longo da vida adulta, os valores de Elia para o gasto de repouso de cada tecido: 13 kcal por quilo por dia no músculo esquelético e 4,5 no tecido adiposo.',
};

export const FONTE_COLLINS: Fonte = {
  rotulo:
    'Collins MA, Cureton KJ, Hill DW, Ray CA. Relationship of heart rate to oxygen uptake during weight lifting exercise. Medicine & Science in Sports & Exercise, 23(5):636–640, 1991',
  rotuloCurto: 'Collins et al. (1991)',
  url: 'https://pubmed.ncbi.nlm.nih.gov/2072844/',
  resumo:
    'mediu 15 homens levantando peso a 40–70% da carga máxima: a relação entre frequência cardíaca e consumo de oxigênio teve cerca de metade da inclinação da do exercício aeróbico. Para a mesma frequência, o gasto real é menor.',
};

export const FONTE_HALL: Fonte = {
  rotulo:
    'Hall KD, Sacks G, Chandramohan D, et al. Quantification of the effect of energy imbalance on bodyweight. The Lancet, 2011',
  rotuloCurto: 'Hall et al. (2011)',
  url: 'https://pubmed.ncbi.nlm.nih.gov/21872751/',
  resumo:
    'demonstra que a regra dos 7.700 kcal por quilo superestima a perda ao longo do tempo: o gasto do corpo cai conforme ele emagrece, e a resposta não é linear.',
};

export const FONTES: Fonte[] = [FONTE_COMPENDIO, FONTE_FARINATTI, FONTE_REVISAO_EPOC, FONTE_ELIA, FONTE_COLLINS, FONTE_HALL];

/* ───────────────────────── Limites ───────────────────────── */

export const PESO_MIN = 30;
export const PESO_MAX = 250;
export const PESO_PADRAO = 70;

export const MINUTOS_MIN = 10;
export const MINUTOS_MAX = 180;
export const MINUTOS_PADRAO = 60;

export const SESSOES_MIN = 1;
export const SESSOES_MAX = 7;
export const SESSOES_PADRAO = 3;

/** Quilos de músculo ganho. Acima de 20 kg já não é pergunta de academia. */
export const MUSCULO_MIN = 0.5;
export const MUSCULO_MAX = 20;
export const MUSCULO_PADRAO = 3;

/* ───────────────────────── Os estudos ───────────────────────── */

/** Farinatti e Castinheiras Neto: 5 × 10 a 15RM, descanso de 1 e de 3 min. */
export const ESTUDO_MASSA = {
  participantes: 10,
  series: 5,
  repeticoes: 10,
  legPress1min: 88.7,
  legPress3min: 91.1,
  crucifixo1min: 50.3,
  crucifixo3min: 54.1,
} as const;

/** A faixa de EPOC nos estudos comparados pela revisão de 2013. */
export const EPOC_MIN = 22;
export const EPOC_MAX = 58;

/** Gasto de repouso por quilo de tecido, por dia (Elia; Wang et al.). */
export const KCAL_DIA_POR_KG_MUSCULO = 13;
export const KCAL_DIA_POR_KG_GORDURA = 4.5;

/**
 * Collins et al.: inclinação da reta %VO2máx × %FCmáx na musculação —
 * cerca de metade da do exercício aeróbico, nas palavras dos autores. A
 * página cita a razão como eles a descrevem; não aplicamos uma equação
 * aeróbica nossa para "calcular" a diferença.
 */
export const INCLINACAO_MUSCULACAO = 0.582;

export const KCAL_POR_KG_GORDURA = 7700;

/* ───────────────────────── Os tipos de treino ───────────────────────── */

export interface Tipo {
  id: string;
  nome: string;
  nomeCurto: string;
  met: number;
  codigo: string;
  comoReconhecer: string;
}

/**
 * Três linhas do Compêndio 2024, copiadas e não ajustadas.
 *
 * Não há linha para "circuito": o valor que circula para ele não foi
 * conferido em duas fontes, e o estudo de Farinatti mostra que encurtar o
 * descanso não muda o custo de cada série — o circuito gasta mais por hora
 * porque cabe mais trabalho, não porque cada série fique mais cara.
 */
export const TIPOS: Tipo[] = [
  {
    id: 'variado',
    nome: 'Treino variado de academia',
    nomeCurto: 'Variado',
    met: 3.5,
    codigo: '02054',
    comoReconhecer: 'Vários exercícios, de 8 a 15 repetições, com carga variada. O treino típico.',
  },
  {
    id: 'basicos',
    nome: 'Básicos pesados',
    nomeCurto: 'Básicos pesados',
    met: 5.0,
    codigo: '02052',
    comoReconhecer: 'Agachamento, terra e outros exercícios que movem muito músculo, lentos ou explosivos.',
  },
  {
    id: 'vigoroso',
    nome: 'Treino vigoroso',
    nomeCurto: 'Vigoroso',
    met: 6.0,
    codigo: '02050',
    comoReconhecer: 'Fisiculturismo ou powerlifting em esforço vigoroso, do começo ao fim.',
  },
];

export const tipo = (id: string): Tipo => TIPOS.find((t) => t.id === id) ?? TIPOS[0];

export const metMusculacao = (id: string): number => tipo(id).met;

/* ───────────────────────── Validação ───────────────────────── */

export const pesoValido = (p: number | null): p is number =>
  p !== null && Number.isFinite(p) && p >= PESO_MIN && p <= PESO_MAX;

export const minutosValidos = (m: number | null): m is number =>
  m !== null && Number.isFinite(m) && m >= MINUTOS_MIN && m <= MINUTOS_MAX;

/** Sessão é número inteiro: "3,5 treinos por semana" é erro de digitação. */
export const sessoesValidas = (s: number | null): s is number =>
  s !== null && Number.isInteger(s) && s >= SESSOES_MIN && s <= SESSOES_MAX;

export const musculoValido = (k: number | null): k is number =>
  k !== null && Number.isFinite(k) && k >= MUSCULO_MIN && k <= MUSCULO_MAX;

export function parseNumero(bruto: string): number | null {
  const limpo = bruto.trim().replace(/\s/g, '').replace(',', '.');
  if (!limpo) return null;
  const n = Number(limpo);
  return Number.isFinite(n) ? n : null;
}

/* ───────────────────────── O cálculo ───────────────────────── */

export const kcalPorMinuto = (met: number, pesoKg: number): number => (met * 3.5 * pesoKg) / 200;

export interface Sessao {
  idTipo: string;
  met: number;
  minutos: number;
  kcal: number;
  kcalLiquida: number;
}

/** Modo 1 — uma sessão: minutos e tipo de treino. */
export function deSessao(minutos: number, pesoKg: number, idTipo = 'variado'): Sessao {
  const met = metMusculacao(idTipo);
  const kcal = kcalPorMinuto(met, pesoKg) * minutos;
  return { idTipo, met, minutos, kcal, kcalLiquida: kcal - kcalPorMinuto(1, pesoKg) * minutos };
}

export interface Semana extends Sessao {
  sessoes: number;
  kcalSemana: number;
  kcalSemanaLiquida: number;
  /** Quatro semanas e um terço: o mês médio. */
  kcalMes: number;
}

/** Modo 2 — a semana de treino. */
export function deSemana(sessoes: number, minutos: number, pesoKg: number, idTipo = 'variado'): Semana {
  const s = deSessao(minutos, pesoKg, idTipo);
  return {
    ...s,
    sessoes,
    kcalSemana: s.kcal * sessoes,
    kcalSemanaLiquida: s.kcalLiquida * sessoes,
    kcalMes: s.kcal * sessoes * (52 / 12),
  };
}

export interface Musculo {
  kg: number;
  kcalDia: number;
  kcalAno: number;
  /** O mesmo peso em gordura, para a comparação que a página faz. */
  kcalDiaSeFosseGordura: number;
}

/** Modo 3 — o músculo ganho, em repouso. Não depende do peso nem do treino. */
export function deMusculo(kg: number): Musculo {
  const kcalDia = kg * KCAL_DIA_POR_KG_MUSCULO;
  return { kg, kcalDia, kcalAno: kcalDia * 365, kcalDiaSeFosseGordura: kg * KCAL_DIA_POR_KG_GORDURA };
}

/* ───────────────────────── As conferências ───────────────────────── */

/**
 * O que o estudo de massa muscular diz, em números que a página usa.
 *
 * A razão entre exercício grande e pequeno é o argumento de "escolha de
 * exercício pesa mais que descanso"; a diferença entre 1 e 3 minutos é o
 * argumento de "descanso não muda o custo do mesmo trabalho".
 */
export function leituraDoEstudo(): {
  razaoMassa: number;
  diferencaDescansoLegPress: number;
  diferencaDescansoCrucifixo: number;
} {
  const lp = (ESTUDO_MASSA.legPress1min + ESTUDO_MASSA.legPress3min) / 2;
  const cf = (ESTUDO_MASSA.crucifixo1min + ESTUDO_MASSA.crucifixo3min) / 2;
  return {
    razaoMassa: lp / cf,
    diferencaDescansoLegPress: Math.abs(ESTUDO_MASSA.legPress3min - ESTUDO_MASSA.legPress1min) / lp,
    diferencaDescansoCrucifixo: Math.abs(ESTUDO_MASSA.crucifixo3min - ESTUDO_MASSA.crucifixo1min) / cf,
  };
}

/* ───────────────────────── Formatação ───────────────────────── */

export function arredondaKcal(k: number): number {
  if (!Number.isFinite(k) || k <= 0) return 0;
  if (k >= 1000) return Math.round(k / 10) * 10;
  return Math.round(k);
}

export const formataKcal = (k: number): string => arredondaKcal(k).toLocaleString('pt-BR');

export const formataMet = (m: number): string =>
  m.toLocaleString('pt-BR', { minimumFractionDigits: 1, maximumFractionDigits: 1 });

export function formataTempo(min: number): string {
  if (!Number.isFinite(min) || min <= 0) return '—';
  const m = Math.round(min);
  if (m < 60) return `${m} min`;
  const h = Math.floor(m / 60);
  const r = m % 60;
  if (r === 0) return h === 1 ? '1 hora' : `${h} horas`;
  return `${h}h${String(r).padStart(2, '0')}`;
}

const plural = (n: number, um: string, varios: string) => (n === 1 ? um : varios);

export function fraseSessao(pesoKg: number, s: Sessao): string {
  return (
    `Para uma pessoa de ${Math.round(pesoKg)} kg, o gasto estimado de ${formataTempo(s.minutos)} de ` +
    `${tipo(s.idTipo).nome.toLowerCase()} é de aproximadamente ${formataKcal(s.kcal)} kcal.`
  );
}

export function fraseSemana(pesoKg: number, s: Semana): string {
  return (
    `Para ${Math.round(pesoKg)} kg, ${s.sessoes} ${plural(s.sessoes, 'sessão', 'sessões')} de ` +
    `${formataTempo(s.minutos)} de ${tipo(s.idTipo).nome.toLowerCase()} por semana ` +
    `${plural(s.sessoes, 'dá', 'dão')} aproximadamente ` +
    `${formataKcal(s.kcalSemana)} kcal por semana — cerca de ${formataKcal(s.kcalMes)} por mês.`
  );
}

export function fraseMusculo(m: Musculo): string {
  const kg = m.kg.toLocaleString('pt-BR', { maximumFractionDigits: 1 });
  return (
    `${kg} kg de músculo a mais gastam cerca de ${formataKcal(m.kcalDia)} kcal por dia em repouso — ` +
    `${formataKcal(m.kcalAno)} kcal por ano, sem treino nenhum a mais.`
  );
}

/* ───────────────────────── Textos fixos ───────────────────────── */

export const NOTA_DESCANSO =
  'Descansar menos não torna cada série mais cara. No estudo brasileiro de Farinatti e Castinheiras Neto, 5 séries de leg press custaram praticamente o mesmo com 1 ou com 3 minutos de pausa. O que muda com o descanso é quanta série cabe na hora — por isso a calculadora pergunta o tipo de treino, e não o intervalo.';

export const NOTA_EPOC =
  'O gasto depois do treino (EPOC) não está no número acima. Nos estudos reunidos por Farinatti e Castinheiras Neto, ele fica entre cerca de 20 e 60 kcal — mais alto em treino intenso, perto do piso em treino leve.';

export const NOTA_MUSCULO =
  'Não depende do seu peso nem do tipo de treino: é o gasto de repouso do tecido. O mesmo peso em gordura gastaria cerca de um terço disso.';

export const NOTA_ESTIMATIVA =
  'É uma estimativa. Na musculação a variação é grande por um motivo que a tabela não vê: a escolha dos exercícios. Uma sessão de agachamento e remada gasta bem mais que uma de rosca e elevação lateral no mesmo tempo.';

export const NOTA_NAO_PRESCRICAO =
  'Esta é uma estimativa educativa de gasto energético. Não é avaliação metabólica, não substitui calorimetria indireta, não prescreve treino e não diagnostica nada.';
