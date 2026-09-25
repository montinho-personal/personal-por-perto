/**
 * O motor da calculadora de proteína.
 *
 * POR QUE ESTA CALCULADORA
 *
 * Vinte e oito artigos do portal falam de proteína — oito deles no cluster
 * de Mounjaro, o de mais tráfego do site — e nenhum diz quanto. Todos
 * repetem "proteína adequada" para preservar músculo e param ali.
 *
 * UMA FAIXA POR SITUAÇÃO, CADA UMA COM A SUA DIRETRIZ
 *
 *   sem treino regular      0,8 g/kg      RDA (Institute of Medicine, 2005):
 *                                          o mínimo para não perder nitrogênio,
 *                                          não o ideal para quem treina
 *   treino de força         1,6 a 2,2     Morton et al. (2018): o ganho de
 *                                          massa magra estabiliza em média em
 *                                          1,62, com o intervalo indo a 2,20
 *   emagrecer               1,2 a 2,0     posicionamento conjunto de 2016
 *                                          (ACSM, AND, DC) para quem treina
 *   65 anos ou mais         1,0 a 1,2     PROT-AGE (2013); 1,2 ou mais para
 *                                          quem treina
 *
 * MOUNJARO E OZEMPIC: SEM PERFIL, DE PROPÓSITO
 *
 * O cluster de Mounjaro do portal diz, com todas as letras, que a
 * quantidade de proteína de quem usa o remédio é definida por médico e
 * nutricionista, e não indica gramas. A calculadora segue a mesma linha:
 * explica o que as diretrizes priorizam e manda a conta para eles. Trocar
 * isso é decisão editorial, não técnica.
 *
 * O QUE ELA NÃO FAZ
 *
 * - Não calcula peso ajustado. As diretrizes de emagrecimento aplicam a
 *   conta sobre um peso entre o de referência para a altura e o atual, e a
 *   fórmula exata não está no texto que conseguimos conferir. Com IMC de 30
 *   ou mais, a página avisa que o número pelo peso total é um teto.
 * - Não vale para doença renal: ali a orientação é o oposto, restringir,
 *   e a conta é com o nefrologista.
 * - Não monta dieta. Plano alimentar é trabalho de nutricionista.
 */

/* ───────────────────────── Fontes ───────────────────────── */

export interface Fonte {
  rotulo: string;
  url: string;
  resumo: string;
}

export const FONTE_RDA: Fonte = {
  rotulo:
    'Institute of Medicine. Dietary Reference Intakes for Energy, Carbohydrate, Fiber, Fat, Fatty Acids, Cholesterol, Protein, and Amino Acids. Washington, DC: The National Academies Press, 2005',
  url: 'https://www.nationalacademies.org/projects/HMD-FNB-18-P-119/publication/10490',
  resumo:
    'fixou a recomendação diária de proteína para adultos em 0,8 g por kg — derivada como o mínimo para evitar perda de nitrogênio do corpo, não como o ideal para quem treina.',
};

export const FONTE_MORTON: Fonte = {
  rotulo:
    'Morton RW, Murphy KT, McKellar SR, et al. A systematic review, meta-analysis and meta-regression of the effect of protein supplementation on resistance training-induced gains in muscle mass and strength in healthy adults. British Journal of Sports Medicine, 52(6):376-384, 2018',
  url: 'https://pubmed.ncbi.nlm.nih.gov/28698222/',
  resumo:
    'reuniu 49 estudos com 1.863 participantes em treino de força. O ganho de massa magra parou de crescer, em média, a partir de 1,62 g/kg por dia — com intervalo de confiança de 1,03 a 2,20.',
};

export const FONTE_ISSN: Fonte = {
  rotulo:
    'Jäger R, Kerksick CM, Campbell BI, et al. International Society of Sports Nutrition Position Stand: protein and exercise. Journal of the International Society of Sports Nutrition, 14:20, 2017',
  url: 'https://pubmed.ncbi.nlm.nih.gov/28642676/',
  resumo:
    'considera 1,4 a 2,0 g/kg por dia suficiente para a maioria de quem se exercita, e cita 2,3 a 3,1 g/kg para pessoas magras e treinadas em déficit calórico, quando o objetivo é reter massa magra.',
};

export const FONTE_ACSM: Fonte = {
  rotulo:
    'Thomas DT, Erdman KA, Burke LM. Position of the Academy of Nutrition and Dietetics, Dietitians of Canada, and the American College of Sports Medicine: Nutrition and Athletic Performance. Journal of the Academy of Nutrition and Dietetics, 116:501-528, 2016',
  url: 'https://pubmed.ncbi.nlm.nih.gov/26920240/',
  resumo: 'recomenda 1,2 a 2,0 g/kg por dia para adultos que treinam, distribuídos em porções moderadas ao longo do dia.',
};

export const FONTE_GLP1: Fonte = {
  rotulo:
    'Mozaffarian D, Agarwal M, Aggarwal M, et al. Nutritional priorities to support GLP-1 therapy for obesity: a joint Advisory from the American College of Lifestyle Medicine, the American Society for Nutrition, the Obesity Medicine Association, and The Obesity Society. 2025',
  url: 'https://pubmed.ncbi.nlm.nih.gov/40445127/',
  resumo:
    'põe proteína adequada e treino de força entre as prioridades para preservar massa magra durante o tratamento com remédios da classe GLP-1, e calcula a meta de proteína sobre um peso ajustado — não sobre o peso total —, caso a caso, com a equipe de saúde.',
};

export const FONTE_PROTAGE: Fonte = {
  rotulo:
    'Bauer J, et al. Evidence-based recommendations for optimal dietary protein intake in older people: a position paper from the PROT-AGE Study Group. Journal of the American Medical Directors Association, 14(8):542-559, 2013',
  url: 'https://pubmed.ncbi.nlm.nih.gov/23867520/',
  resumo:
    'recomenda ao menos 1,0 a 1,2 g/kg por dia para quem tem mais de 65 anos; 1,2 ou mais para quem se exercita; 1,2 a 1,5 para a maioria dos que têm doença aguda ou crônica. Exceção: doença renal grave fora da diálise, que pode exigir limitar.',
};

export const FONTE_REFEICAO: Fonte = {
  rotulo:
    'Schoenfeld BJ, Aragon AA. How much protein can the body use in a single meal for muscle-building? Implications for daily protein distribution. Journal of the International Society of Sports Nutrition, 2018',
  url: 'https://pubmed.ncbi.nlm.nih.gov/29497353/',
  resumo:
    'para quem busca ganhar músculo, sugere cerca de 0,4 g/kg por refeição em pelo menos quatro refeições, chegando a 1,6 g/kg no dia; no teto de 2,2 g/kg, isso dá até 0,55 g/kg por refeição.',
};

export const FONTE_RIM: Fonte = {
  rotulo:
    'KDOQI Clinical Practice Guideline for Nutrition in CKD: 2020 Update. American Journal of Kidney Diseases, 2020',
  url: 'https://pubmed.ncbi.nlm.nih.gov/32829751/',
  resumo:
    'para doença renal crônica nos estágios 3 a 5, fora da diálise, a diretriz vai no sentido oposto: restringir proteína, com acompanhamento. Por isso esta calculadora não se aplica a quem tem doença renal.',
};

export const FONTES: Fonte[] = [
  FONTE_RDA,
  FONTE_MORTON,
  FONTE_ISSN,
  FONTE_ACSM,
  FONTE_GLP1,
  FONTE_PROTAGE,
  FONTE_REFEICAO,
  FONTE_RIM,
];

/* ───────────────────────── Perfis ───────────────────────── */

export interface Perfil {
  id: string;
  nome: string;
  nomeCurto: string;
  /** g por kg por dia. Igual nas duas pontas quando a diretriz dá um número só. */
  gkgMin: number;
  gkgMax: number;
  fonte: string;
  nota: string;
}

export const PERFIS: Perfil[] = [
  {
    id: 'saude',
    nome: 'Saúde, sem treino regular',
    nomeCurto: 'Sem treino',
    gkgMin: 0.8,
    gkgMax: 0.8,
    fonte: 'RDA, Institute of Medicine (2005)',
    nota: 'É o mínimo para um adulto saudável não perder proteína do corpo — não o ideal para quem treina. Se você começar a treinar força, mude o perfil.',
  },
  {
    id: 'forca',
    nome: 'Treino de força para ganhar músculo',
    nomeCurto: 'Ganhar músculo',
    gkgMin: 1.6,
    gkgMax: 2.2,
    fonte: 'Morton et al. (2018)',
    nota: 'Na média dos estudos, o ganho de massa magra parou de crescer perto de 1,6 g/kg; a ponta de cima, 2,2, cobre quem responde acima da média. Mais do que isso não mostrou ganho extra de músculo nessa meta-análise.',
  },
  {
    id: 'emagrecer',
    nome: 'Emagrecer preservando músculo',
    nomeCurto: 'Emagrecer',
    gkgMin: 1.2,
    gkgMax: 2.0,
    fonte: 'ACSM, AND e DC (2016)',
    nota: 'No déficit, proteína e treino de força são o que protege o músculo. Pessoas magras e já treinadas, em corte, podem precisar de mais — a diretriz de nutrição esportiva cita até 3,1 g/kg nesse caso específico. Quem usa Mounjaro, Ozempic ou remédio parecido define a meta com o médico e o nutricionista.',
  },
  {
    id: 'idoso',
    nome: '65 anos ou mais',
    nomeCurto: '65+',
    gkgMin: 1.0,
    gkgMax: 1.2,
    fonte: 'PROT-AGE (2013)',
    nota: 'Depois dos 65, o corpo precisa de mais proteína que o adulto jovem para manter o músculo. Quem treina deve ficar em 1,2 ou mais; quem tem doença aguda ou crônica costuma precisar de 1,2 a 1,5 — com orientação.',
  },
];

export const perfil = (id: string): Perfil => PERFIS.find((p) => p.id === id) ?? PERFIS[0];

/* ───────────────────────── Limites ───────────────────────── */

export const PESO_MIN = 35;
export const PESO_MAX = 250;
export const PESO_PADRAO = 70;
export const ALTURA_MIN = 130;
export const ALTURA_MAX = 220;
export const ALTURA_PADRAO = 170;
export const REFEICOES = [3, 4, 5] as const;
export const REFEICOES_PADRAO = 4;
/** A partir daqui, a conta por quilo de peso total superestima. */
export const IMC_PESO_AJUSTADO = 30;

export const pesoValido = (p: number | null): p is number =>
  p !== null && Number.isFinite(p) && p >= PESO_MIN && p <= PESO_MAX;
export const alturaValida = (a: number | null): a is number =>
  a !== null && Number.isFinite(a) && a >= ALTURA_MIN && a <= ALTURA_MAX;

export function parseNumero(bruto: string): number | null {
  const limpo = bruto.trim().replace(/\s/g, '').replace(',', '.');
  if (!limpo) return null;
  const n = Number(limpo);
  return Number.isFinite(n) ? n : null;
}

/** "170", "1,70" ou "1.70": abaixo de 3, é metro. */
export function parseAltura(bruto: string): number | null {
  const n = parseNumero(bruto);
  if (n === null) return null;
  return n > 0 && n < 3 ? Math.round(n * 100) : n;
}

export const imc = (pesoKg: number, alturaCm: number): number => pesoKg / (alturaCm / 100) ** 2;

/* ───────────────────────── O cálculo ───────────────────────── */

export interface Resultado {
  pesoKg: number;
  alturaCm: number;
  idPerfil: string;
  gkgMin: number;
  gkgMax: number;
  gramasMin: number;
  gramasMax: number;
  refeicoes: number;
  porRefeicaoMin: number;
  porRefeicaoMax: number;
  imc: number;
  /** IMC de 30 ou mais: o número pelo peso total é teto, não alvo. */
  pesoTotalSuperestima: boolean;
}

export function proteina(pesoKg: number, alturaCm: number, idPerfil = 'forca', refeicoes = REFEICOES_PADRAO): Resultado {
  const p = perfil(idPerfil);
  const i = imc(pesoKg, alturaCm);
  const gramasMin = pesoKg * p.gkgMin;
  const gramasMax = pesoKg * p.gkgMax;
  return {
    pesoKg,
    alturaCm,
    idPerfil: p.id,
    gkgMin: p.gkgMin,
    gkgMax: p.gkgMax,
    gramasMin,
    gramasMax,
    refeicoes,
    porRefeicaoMin: gramasMin / refeicoes,
    porRefeicaoMax: gramasMax / refeicoes,
    imc: i,
    pesoTotalSuperestima: i >= IMC_PESO_AJUSTADO,
  };
}

/* ───────────────────────── Formatação ───────────────────────── */

/** Gramas por dia arredondados de 5 em 5: precisão de grama seria fingimento. */
export function arredondaGramas(g: number): number {
  if (!Number.isFinite(g) || g <= 0) return 0;
  return Math.round(g / 5) * 5;
}

export const formataGramas = (g: number): string => arredondaGramas(g).toLocaleString('pt-BR');

export const formataFaixaGramas = (min: number, max: number): string =>
  arredondaGramas(min) === arredondaGramas(max) ? formataGramas(min) : `${formataGramas(min)} a ${formataGramas(max)}`;

/** Por refeição, de grama em grama — os números são pequenos. */
export const formataFaixaRefeicao = (min: number, max: number): string =>
  Math.round(min) === Math.round(max) ? `${Math.round(min)}` : `${Math.round(min)} a ${Math.round(max)}`;

export const formataGkg = (v: number): string => v.toLocaleString('pt-BR', { minimumFractionDigits: 1, maximumFractionDigits: 1 });

export const formataFaixaGkg = (p: { gkgMin: number; gkgMax: number }): string =>
  p.gkgMin === p.gkgMax ? formataGkg(p.gkgMin) : `${formataGkg(p.gkgMin)} a ${formataGkg(p.gkgMax)}`;

export const formataImc = (i: number): string => i.toLocaleString('pt-BR', { maximumFractionDigits: 1 });

export function fraseContexto(r: Resultado): string {
  const p = perfil(r.idPerfil);
  const g = formataFaixaGramas(r.gramasMin, r.gramasMax);
  return `Com ${Math.round(r.pesoKg)} kg, no perfil "${p.nomeCurto}", a referência é ${g} g de proteína por dia — ${formataFaixaGkg(r)} g por kg. Fonte: ${p.fonte}.`;
}

/* ───────────────────────── Tabela ───────────────────────── */

export const PESOS_TABELA = [50, 60, 70, 80, 90, 100] as const;

export const tabelaPorPeso = () =>
  PESOS_TABELA.map((peso) => ({
    peso,
    faixas: PERFIS.map((p) => ({ id: p.id, min: peso * p.gkgMin, max: peso * p.gkgMax })),
  }));

/* ───────────────────────── Textos fixos ───────────────────────── */

export const NOTA_PESO_AJUSTADO =
  'Com IMC de 30 ou mais, a conta por quilo de peso total superestima: as diretrizes de emagrecimento aplicam a faixa sobre um peso ajustado, entre o peso de referência para a sua altura e o atual. Leia o número acima como um teto, não como alvo — o valor certo para você sai da conversa com o nutricionista.';

export const NOTA_RIM =
  'Quem tem doença renal não deve usar esta conta: nesse caso a orientação costuma ser o oposto, limitar proteína, e quem define é o nefrologista. Diabetes, gestação e outras condições também pedem orientação individual.';

export const NOTA_TOTAL =
  'A meta é de proteína do dia inteiro, somando todas as fontes — carne, ovo, leite, feijão, e também o suplemento, se você usa. Whey não é obrigatório: é comida em pó, útil quando a rotina não fecha a conta.';

export const NOTA_NAO_E_DIETA =
  'Este número é uma referência de pesquisa, não um plano alimentar. Quanto comer, de quê e em que horário depende do seu objetivo, da sua saúde e da sua rotina — é trabalho de nutricionista.';

export const NOTA_TREINO =
  'Proteína sem treino de força não constrói músculo; ela sustenta o que o treino estimula. As duas coisas andam juntas — e, no emagrecimento, são as duas que protegem a massa magra.';

export const NOTA_NAO_PRESCRICAO =
  'Esta é uma estimativa educativa baseada em diretrizes publicadas. Não é avaliação nutricional, não prescreve dieta nem suplemento e não substitui médico ou nutricionista.';
