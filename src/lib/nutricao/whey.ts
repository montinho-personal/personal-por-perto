/**
 * O motor da calculadora de whey.
 *
 * POR QUE ESTA CALCULADORA (prints do Google de 01/10/2026)
 *
 * "Calculadora de whey" tem duas perguntas por trás, e o autocompletar
 * mostra as duas:
 *
 *   quanto tomar    "calculadora de whey por peso", "por dia", "para saber
 *                   quanto de whey tomar", "quantos scoops", "quantas gramas
 *                   de whey por kg", "pode tomar 2 scoops", "3x no dia",
 *                   "4 scoops", "tomando mounjaro", "para emagrecer"
 *   vale o preço    "custo beneficio", "whey bom", "gordo" — e o resumo de
 *                   IA do Google aponta a calculadora de uma marca, que faz
 *                   concentração de proteína e custo por grama
 *
 * A primeira conta reaproveita o motor de proteína (./proteina.ts): a meta
 * do dia vem dali, com os mesmos perfis e as mesmas diretrizes. O que esta
 * calculadora acrescenta é o passo que faltava — quanto você JÁ come — e a
 * conversão do que falta em doses do rótulo. A segunda conta é aritmética
 * de rótulo: proteína por dose, gramas da dose, peso do pote e preço.
 *
 * O QUE ELA DIZ QUE AS OUTRAS NÃO DIZEM
 *
 * Não existe "gramas de whey por kg". O que tem número por quilo é a
 * proteína total do dia; whey é a parte dela que a comida não cobriu. Quem
 * já come o suficiente vê zero dose — e a calculadora diz isso em vez de
 * empurrar um pote. Acima de duas doses por dia, ela lê como comida curta,
 * não como falta de pó.
 *
 * O QUE ELA NÃO FAZ
 *
 * - Não calcula calorias do whey: variam por marca; o rótulo diz.
 * - Não compara marcas nem recomenda produto. Dá o custo por grama de
 *   proteína para a pessoa comparar os potes que tem na frente.
 * - Não é plano alimentar: a dieta é com o nutricionista; doença renal,
 *   com o nefrologista (mesma regra da calculadora de proteína).
 */
import {
  FONTE_GLP1,
  FONTE_ISSN,
  FONTE_MORTON,
  FONTE_REFEICAO,
  type Fonte,
  type Resultado,
  arredondaGramas,
  formataFaixaGramas,
  perfil,
  proteina,
} from './proteina';
import { proteinaEm } from './alimentos';

/* ───────────────────────── Fontes ───────────────────────── */

export const FONTE_TACO: Fonte = {
  rotulo:
    'NEPA-UNICAMP. Tabela Brasileira de Composição de Alimentos (TACO), 4ª edição revisada e ampliada. Campinas, 2011',
  url: 'https://www.nepa.unicamp.br/',
  resumo:
    'a tabela oficial brasileira: ovo de galinha inteiro cozido tem 13,3 g de proteína por 100 g — é dela que sai a conta de quanto whey equivale a três ovos.',
};

/** As da meta do dia vêm da calculadora de proteína; a TACO entra pelo ovo. */
export const FONTES: Fonte[] = [FONTE_MORTON, FONTE_ISSN, FONTE_REFEICAO, FONTE_GLP1, FONTE_TACO];

/* ───────────────────────── Limites e padrões ───────────────────────── */

/** Gramas de pó por dose: o scoop mais comum nos rótulos. */
export const DOSE_PO_PADRAO = 30;
export const DOSE_PO_MIN = 10;
export const DOSE_PO_MAX = 100;
/** Gramas de proteína por dose: 80% de 30 g, o concentrado comum. Exemplo, não regra — o rótulo manda. */
export const PROTEINA_DOSE_PADRAO = 24;
export const PROTEINA_DOSE_MIN = 1;
export const PROTEINA_DOSE_MAX = 100;
/** Proteína que a pessoa já come num dia típico. O padrão é um exemplo para a página abrir preenchida. */
export const JA_COME_PADRAO = 90;
export const JA_COME_MIN = 0;
export const JA_COME_MAX = 500;
export const PRECO_PADRAO = 150;
export const PRECO_MIN = 1;
export const PRECO_MAX = 5000;
/** Peso do pote em gramas: 900 g é o tamanho mais vendido. Exemplo. */
export const POTE_PADRAO = 900;
export const POTE_MIN = 100;
export const POTE_MAX = 10000;
/**
 * Acima disto, a leitura muda: não é "precisa de mais whey", é "a comida
 * está curta". Duas doses cobrem até 48 g no exemplo padrão — a lacuna
 * típica de quem já come proteína em duas ou três refeições.
 */
export const DOSES_TETO = 2;

export const entre = (v: number | null, min: number, max: number): v is number =>
  v !== null && Number.isFinite(v) && v >= min && v <= max;

/* ───────────────────────── Quantas doses ───────────────────────── */

/**
 * fecha:  a comida já passa do topo da faixa — zero dose
 * topo:   a comida bate o mínimo; o whey levaria ao topo, se quiser
 * falta:  falta proteína, e até DOSES_TETO doses cobrem o mínimo
 * muitas: nem o mínimo cabe em DOSES_TETO doses — a comida está curta
 */
export type LeituraDoses = 'fecha' | 'topo' | 'falta' | 'muitas';

export interface Doses {
  meta: Resultado;
  jaCome: number;
  proteinaPorDose: number;
  faltaMin: number;
  faltaMax: number;
  dosesMin: number;
  dosesMax: number;
  leitura: LeituraDoses;
  /** O perfil é de Mounjaro/Ozempic: a leitura de "muitas" muda de tom. */
  glp1: boolean;
}

export function doses(
  pesoKg: number,
  alturaCm: number,
  idPerfil: string,
  jaCome: number,
  proteinaPorDose = PROTEINA_DOSE_PADRAO,
): Doses {
  const meta = proteina(pesoKg, alturaCm, idPerfil);
  const faltaMin = Math.max(0, meta.gramasMin - jaCome);
  const faltaMax = Math.max(0, meta.gramasMax - jaCome);
  const dosesMin = Math.ceil(faltaMin / proteinaPorDose);
  const dosesMax = Math.ceil(faltaMax / proteinaPorDose);
  let leitura: LeituraDoses = 'falta';
  if (dosesMax === 0) leitura = 'fecha';
  else if (dosesMin === 0) leitura = 'topo';
  else if (dosesMin > DOSES_TETO) leitura = 'muitas';
  return {
    meta,
    jaCome,
    proteinaPorDose,
    faltaMin,
    faltaMax,
    dosesMin,
    dosesMax,
    leitura,
    glp1: perfil(meta.idPerfil).pesoBase === 'saudavel',
  };
}

/* ───────────────────────── Custo-benefício ───────────────────────── */

export type ClasseConcentracao = 'isolado' | 'concentrado' | 'baixa' | 'muito-baixa';

export interface Custo {
  preco: number;
  poteG: number;
  dosePoG: number;
  proteinaDoseG: number;
  /** Proteína por 100 g de pó, em %. */
  concentracao: number;
  dosesPorPote: number;
  proteinaTotalG: number;
  custoPorDose: number;
  custoPorGrama: number;
  classe: ClasseConcentracao;
}

/**
 * As faixas de concentração seguem o que o artigo de whey do portal já
 * explica: concentrado comum tem 70 a 80% de proteína; isolado, 90% ou
 * mais. Abaixo de 70%, o pó carrega cada vez mais outra coisa.
 */
export const classeConcentracao = (pct: number): ClasseConcentracao =>
  pct >= 85 ? 'isolado' : pct >= 70 ? 'concentrado' : pct >= 60 ? 'baixa' : 'muito-baixa';

export const CLASSES: Record<ClasseConcentracao, { rotulo: string; leitura: string }> = {
  isolado: {
    rotulo: 'faixa de isolado (85% ou mais)',
    leitura: 'Quase tudo no pó é proteína. Costuma custar mais por grama; compensa quando a lactose incomoda ou quando cada caloria conta.',
  },
  concentrado: {
    rotulo: 'concentrado comum (70 a 85%)',
    leitura: 'É a faixa do whey concentrado, a escolha certa para a maioria. Aqui a comparação que importa é o custo por grama de proteína.',
  },
  baixa: {
    rotulo: 'abaixo do concentrado comum (60 a 70%)',
    leitura: 'Entre 30 e 40% do pó não é proteína. Confira na lista de ingredientes o que completa o pote — carboidrato, gordura ou outra proteína mais barata — e compare o custo por grama com outro pote.',
  },
  'muito-baixa': {
    rotulo: 'menos de 60% de proteína',
    leitura: 'Mais de 40% do pó é outra coisa. Isso não é whey no sentido que o rótulo sugere: leia os ingredientes e faça a conta do custo por grama de proteína, que é onde a diferença aparece.',
  },
};

export function custo(preco: number, poteG: number, dosePoG: number, proteinaDoseG: number): Custo {
  const concentracao = (proteinaDoseG / dosePoG) * 100;
  const dosesPorPote = poteG / dosePoG;
  const proteinaTotalG = dosesPorPote * proteinaDoseG;
  return {
    preco,
    poteG,
    dosePoG,
    proteinaDoseG,
    concentracao,
    dosesPorPote,
    proteinaTotalG,
    custoPorDose: preco / dosesPorPote,
    custoPorGrama: preco / proteinaTotalG,
    classe: classeConcentracao(concentracao),
  };
}

/**
 * O exemplo do pote "barato" que custa mais por grama: mesmo pote e mesma
 * dose do padrão, R$ 120 em vez de R$ 150, mas só 15 g de proteína na dose
 * (50%). Teste e página usam este mesmo exemplo para a afirmação "o mais
 * barato custa mais caro" nunca descolar do número.
 */
export const EXEMPLO_POTE_BARATO = { preco: 120, proteinaDose: 15 } as const;

/** Quantos dias o pote dura. Zero dose por dia: dura "para sempre", e a página não mostra. */
export const diasQueDura = (c: Custo, dosesPorDia: number): number =>
  dosesPorDia > 0 ? Math.floor(c.dosesPorPote / dosesPorDia) : 0;

/* ───────────────────────── Equivalências ───────────────────────── */

/** "Quanto de whey equivale a 3 ovos?" — pergunta do Google (01/10). Ovo de 50 g, pela TACO. */
export const OVOS_3_G = proteinaEm('ovo', 150);

/** Proteína por refeição que a sugestão de distribuição usa: 0,4 g/kg (Schoenfeld e Aragon). */
export const porRefeicaoGkg = (pesoKg: number): number => proteina(pesoKg, 170, 'forca', 4).porRefeicaoMin;

/* ───────────────────────── Formatação ───────────────────────── */

export const formataDoses = (min: number, max: number): string => (min === max ? `${min}` : `${min} a ${max}`);

export const formataFalta = (min: number, max: number): string =>
  Math.round(min) === Math.round(max) ? `${Math.round(min)}` : `${Math.round(min)} a ${Math.round(max)}`;

export const formataReais = (v: number): string =>
  `R$ ${v.toLocaleString('pt-BR', { minimumFractionDigits: 2, maximumFractionDigits: 2 })}`;

export const formataPct = (p: number): string => `${Math.round(p)}%`;

export const formataInteiro = (n: number): string => Math.floor(n).toLocaleString('pt-BR');

const plural = (n: number, um: string, varios: string): string => (n === 1 ? um : varios);

export function fraseDoses(d: Doses): string {
  const faixa = formataFaixaGramas(d.meta.gramasMin, d.meta.gramasMax);
  const come = Math.round(d.jaCome);
  const dose = `${d.proteinaPorDose} g`;
  switch (d.leitura) {
    case 'fecha':
      return `Com ${come} g de proteína na comida, você já passa do topo da sua faixa, ${faixa} g por dia. Hoje não falta nada para o pó cobrir: whey é opcional.`;
    case 'topo':
      return `Com ${come} g na comida, você já bate o mínimo da sua faixa (${faixa} g por dia). Para chegar ao topo faltam até ${Math.round(d.faltaMax)} g — ${d.dosesMax} ${plural(d.dosesMax, 'dose', 'doses')} de ${dose} de proteína ${plural(d.dosesMax, 'cobre', 'cobrem')} isso, se você quiser.`;
    case 'falta':
      return `Faltam ${formataFalta(d.faltaMin, d.faltaMax)} g para a sua faixa de ${faixa} g por dia. Em doses com ${dose} de proteína, são ${formataDoses(d.dosesMin, d.dosesMax)} ${plural(d.dosesMax, 'dose', 'doses')} por dia.`;
    case 'muitas':
      return (
        `Faltam ${formataFalta(d.faltaMin, d.faltaMax)} g para a sua faixa de ${faixa} g por dia: seriam ${formataDoses(d.dosesMin, d.dosesMax)} doses de ${dose}. ` +
        (d.glp1
          ? 'Com o apetite reduzido pelo remédio, o shake costuma ser a parte fácil de encaixar — mesmo assim, um número assim é para conversar com o nutricionista, não para resolver só com pó.'
          : `Mais de ${DOSES_TETO} doses por dia é sinal de que a comida está curta, não de que falta pó: vale olhar o prato antes do pote.`)
      );
  }
}

export function fraseCusto(c: Custo): string {
  return `Com ${formataInteiro(c.dosesPorPote)} doses de ${c.dosePoG} g, o pote de ${c.poteG} g rende ${arredondaGramas(c.proteinaTotalG).toLocaleString('pt-BR')} g de proteína: ${formataReais(c.custoPorGrama)} por grama e ${formataReais(c.custoPorDose)} por dose. Concentração de ${formataPct(c.concentracao)} — ${CLASSES[c.classe].rotulo}.`;
}

/* ───────────────────────── Textos fixos ───────────────────────── */

export const NOTA_SEM_DOSE_POR_KG =
  'Não existe dose de whey por quilo. O que tem número por quilo é a proteína total do dia — e whey é só a parte dela que a comida não cobriu. Por isso a conta começa pelo que você já come.';

export const NOTA_ROTULO =
  'Os gramas de proteína por dose e o tamanho da dose saem do rótulo do seu pote, não de uma tabela: variam de marca para marca. Os valores que a página abre são exemplos.';

export const NOTA_CALORIAS =
  'Whey engorda tanto quanto qualquer alimento: pelo total de calorias do dia. As calorias de cada dose estão no rótulo; a calculadora não as inventa.';

export const NOTA_COMIDA =
  'O whey não traz o que a comida traz junto — ferro, fibra, saciedade, a refeição em si. É comida em pó para fechar uma conta, não para substituir o prato.';
