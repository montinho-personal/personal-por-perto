/**
 * O motor da página de calorias do vôlei.
 *
 * A DÉCIMA QUARTA DO CLUSTER — E A PRIMEIRA EM QUE O CHÃO DECIDE
 *
 *     tênis     → o tempo parado entre pontos, que JÁ está na tabela
 *     vôlei     → onde você joga: ginásio ou areia
 *
 * O vôlei tem quatro linhas no Compêndio de 2024 e elas vão de 3,0 a 8,0
 * METs — quase o triplo entre a mais baixa e a mais alta. Vôlei
 * recreativo de ginásio, sem competição, está em 3,0: o mesmo valor da
 * caminhada leve na nossa calculadora de caminhada. Vôlei de praia, na
 * areia, está em 8,0. A escolha que mais pesa não é a força do saque: é o
 * chão.
 *
 * O QUE NÃO TEM
 *
 * Diferente das outras páginas, esta não tem conferência contra medição
 * em jogo. Um estudo mediu oxigênio em treinos de vôlei (Scribbans et al.,
 * 2015), mas não conseguimos conferir os valores. A página usa só a tabela
 * e diz isso.
 */

import { ritmo } from './caminhada';

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
    'mede vôlei não competitivo, time de 6 a 9, em 3,0 METs (código 15720), vôlei geral em 4,0 (15710), vôlei competitivo em ginásio em 6,0 (15711) e vôlei de praia, na areia, em 8,0 (15725).',
};

export const FONTE_HALL: Fonte = {
  rotulo:
    'Hall KD, Sacks G, Chandramohan D, et al. Quantification of the effect of energy imbalance on bodyweight. The Lancet, 2011',
  rotuloCurto: 'Hall et al. (2011)',
  url: 'https://pubmed.ncbi.nlm.nih.gov/21872751/',
  resumo:
    'demonstra que a regra dos 7.700 kcal por quilo superestima a perda ao longo do tempo: o gasto do corpo cai conforme ele emagrece, e a resposta não é linear.',
};

export const FONTES: Fonte[] = [FONTE_COMPENDIO, FONTE_HALL];

export const KCAL_POR_KG_GORDURA = 7700;

/* ───────────────────────── Limites ───────────────────────── */

export const PESO_MIN = 30;
export const PESO_MAX = 250;
export const PESO_PADRAO = 70;

export const MINUTOS_MIN = 10;
export const MINUTOS_MAX = 300;
export const MINUTOS_PADRAO = 60;

export const KCAL_MIN = 20;
export const KCAL_MAX = 3000;

/* ───────────────────────── A tabela ───────────────────────── */

export type Chao = 'quadra' | 'areia';

export interface Modalidade {
  id: string;
  chao: Chao;
  nome: string;
  nomeCurto: string;
  /** Como entra numa frase: "1 hora de {naFrase}". */
  naFrase: string;
  met: number;
  codigo: string;
  comoReconhecer: string;
}

/** Quatro linhas, todas do Compêndio 2024, em ordem de gasto. */
export const MODALIDADES: Modalidade[] = [
  {
    id: 'recreativo',
    chao: 'quadra',
    nome: 'Vôlei de quadra, não competitivo',
    nomeCurto: 'Quadra, lazer',
    naFrase: 'vôlei de quadra sem competição',
    met: 3.0,
    codigo: '15720',
    comoReconhecer: 'Time de 6 a 9 pessoas, jogo sem disputa. O mesmo valor da caminhada leve.',
  },
  {
    id: 'geral',
    chao: 'quadra',
    nome: 'Vôlei, geral',
    nomeCurto: 'Quadra, geral',
    naFrase: 'vôlei',
    met: 4.0,
    codigo: '15710',
    comoReconhecer: 'A linha geral do Compêndio, sem detalhe de nível.',
  },
  {
    id: 'competitivo',
    chao: 'quadra',
    nome: 'Vôlei competitivo, em ginásio',
    nomeCurto: 'Quadra, competitivo',
    naFrase: 'vôlei competitivo',
    met: 6.0,
    codigo: '15711',
    comoReconhecer: 'Jogo valendo, em ginásio.',
  },
  {
    id: 'praia',
    chao: 'areia',
    nome: 'Vôlei de praia, na areia',
    nomeCurto: 'Praia, na areia',
    naFrase: 'vôlei de praia',
    met: 8.0,
    codigo: '15725',
    comoReconhecer: 'Na areia. A linha mais alta do vôlei no Compêndio.',
  },
];

export const modalidade = (id: string): Modalidade => MODALIDADES.find((m) => m.id === id) ?? MODALIDADES[0];

export const metVolei = (id: string): number => modalidade(id).met;

/** O MET da caminhada leve, lido do motor da caminhada — não escrito à mão. */
export const metCaminhadaLeve = (): number => ritmo('leve').met;

/** Quantas vezes a praia custa o vôlei de quadra sem competição. */
export const praiaSobreRecreativo = (): number => metVolei('praia') / metVolei('recreativo');

/** O que circula e esta página não usa, por não conseguirmos conferir. */
export const SEM_CONFERENCIA = ['Medição de gasto em jogo de vôlei', 'Futevôlei', 'Vôlei de praia recreativo, separado do competitivo'] as const;

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
  met: number;
  minutos: number;
  kcal: number;
  kcalLiquida: number;
}

export function deTempo(minutos: number, pesoKg: number, idModalidade = 'geral'): Resultado {
  const met = metVolei(idModalidade);
  const kcal = kcalPorMinuto(met, pesoKg) * minutos;
  return {
    idModalidade: modalidade(idModalidade).id,
    met,
    minutos,
    kcal,
    kcalLiquida: kcal - kcalPorMinuto(1, pesoKg) * minutos,
  };
}

export function deKcal(alvoKcal: number, pesoKg: number, idModalidade = 'geral'): Resultado {
  const porMin = kcalPorMinuto(metVolei(idModalidade), pesoKg);
  const minutos = porMin > 0 ? alvoKcal / porMin : 0;
  return { ...deTempo(minutos, pesoKg, idModalidade), kcal: alvoKcal };
}

export const simulacaoUmQuilo = (pesoKg: number, idModalidade = 'geral'): Resultado =>
  deKcal(KCAL_POR_KG_GORDURA, pesoKg, idModalidade);

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

/* Frases sem verbo concordando com o tempo. */
export function fraseContexto(pesoKg: number, r: Resultado): string {
  return (
    `Para uma pessoa de ${Math.round(pesoKg)} kg, o gasto estimado de ${formataTempo(r.minutos)} de ` +
    `${modalidade(r.idModalidade).naFrase} é de aproximadamente ${formataKcal(r.kcal)} kcal.`
  );
}

/* ───────────────────────── Tabelas ───────────────────────── */

export const PESOS_TABELA = [50, 60, 70, 80, 90, 100, 120] as const;

export interface LinhaPeso {
  peso: number;
  recreativo: number;
  competitivo: number;
  praia: number;
}

export const tabelaPorPeso = (): LinhaPeso[] =>
  PESOS_TABELA.map((peso) => ({
    peso,
    recreativo: deTempo(60, peso, 'recreativo').kcal,
    competitivo: deTempo(60, peso, 'competitivo').kcal,
    praia: deTempo(60, peso, 'praia').kcal,
  }));

/* ───────────────────────── Textos fixos ───────────────────────── */

export const NOTA_SEM_MEDICAO =
  'Esta página usa só a tabela. Diferente das nossas outras calculadoras, não conseguimos conferir uma medição de gasto em jogo de vôlei que servisse de prova. Existe estudo que mediu oxigênio em treino de vôlei, mas não conseguimos conferir os números dele — e não citamos o que não conferimos.';

export const NOTA_AREIA =
  'Na tabela, vôlei de praia custa quase o triplo do vôlei de quadra sem competição. O Compêndio não separa, para a areia, o jogo de lazer do jogo valendo: há uma linha só, 8,0, e é ela que a calculadora usa. Não temos número conferido para um jogo de areia mais leve.';

export const NOTA_BRUTO =
  'O número é bruto: inclui o que você gastaria parado no mesmo tempo. O acréscimo real ao seu dia é menor, e a ferramenta mostra os dois.';

export const NOTA_ESTIMATIVA =
  'É uma estimativa. No vôlei, a variação é grande por um motivo que a tabela não vê: a posição e o rodízio. Quem ataca e bloqueia costuma saltar bem mais do que quem fica no fundo, e num jogo de lazer há quem quase não toque na bola.';

export const NOTA_SEM_PERDA_LOCALIZADA =
  'Nenhum exercício escolhe de onde o corpo tira gordura. O vôlei aumenta o gasto do dia; onde a gordura sai primeiro é decidido por genética e hormônio.';

export const NOTA_SEGURANCA =
  'Vôlei é esporte de salto e aterrissagem, com o ombro trabalhando acima da cabeça. Tornozelo, joelho e ombro costumam ser o que mais reclama, principalmente em quem joga só no fim de semana. Quem vai voltar depois de anos parado deve conversar com um médico antes, e dor que persiste é assunto para médico ou fisioterapeuta, não para jogar por cima.';

export const NOTA_NAO_PRESCRICAO =
  'Esta é uma estimativa educativa de gasto energético. Não é avaliação metabólica, não substitui calorimetria indireta, não prescreve treino e não diagnostica nada.';
