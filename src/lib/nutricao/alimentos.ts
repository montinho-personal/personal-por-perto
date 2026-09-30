/**
 * Proteína nos alimentos — os números do artigo
 * /musculacao/quanto-de-proteina-tem-cada-alimento/.
 *
 * FONTE: TACO, Tabela Brasileira de Composição de Alimentos, 4ª edição
 * (NEPA-UNICAMP, 2011) — a tabela oficial brasileira. Cada valor foi
 * conferido em 30/09/2026 pelo nome exato do item na TACO; o PDF original
 * está bloqueado pela rede do ambiente de trabalho, então a conferência
 * foi na reprodução online da tabela, item a item, e cada número bate com
 * o que a literatura brasileira cita da TACO.
 *
 * O que ficou de fora, de propósito: leite líquido (não deu para confirmar
 * o item da TACO) e whey (varia por marca; o rótulo manda).
 *
 * PORÇÕES: o peso da porção é um EXEMPLO declarado ("um filé de 120 g"),
 * não uma medida caseira oficial. O artigo diz isso e manda pesar.
 */

export interface Alimento {
  id: string;
  nome: string;
  /** Nome do item na TACO, para quem quiser conferir. */
  itemTaco: string;
  grupo: 'carnes' | 'ovos-laticinios' | 'vegetais';
  /** Gramas de proteína por 100 g do alimento como descrito (pronto, cru etc.). */
  g100: number;
  /** Porção de exemplo. */
  porcao: { rotulo: string; gramas: number };
}

export const ALIMENTOS: Alimento[] = [
  { id: 'patinho', nome: 'Patinho grelhado', itemTaco: 'Carne, bovina, patinho, sem gordura, grelhado', grupo: 'carnes', g100: 35.9, porcao: { rotulo: 'bife de 100 g', gramas: 100 } },
  { id: 'frango', nome: 'Peito de frango grelhado', itemTaco: 'Frango, peito, sem pele, grelhado', grupo: 'carnes', g100: 32.0, porcao: { rotulo: 'filé de 120 g', gramas: 120 } },
  { id: 'carne-moida', nome: 'Carne moída (acém) cozida', itemTaco: 'Carne, bovina, acém, moído, cozido', grupo: 'carnes', g100: 26.7, porcao: { rotulo: '100 g', gramas: 100 } },
  { id: 'atum', nome: 'Atum em conserva (óleo)', itemTaco: 'Atum, conserva em óleo', grupo: 'carnes', g100: 26.2, porcao: { rotulo: '120 g drenados', gramas: 120 } },
  { id: 'sardinha', nome: 'Sardinha em conserva (óleo)', itemTaco: 'Sardinha, conserva em óleo', grupo: 'carnes', g100: 15.9, porcao: { rotulo: '100 g', gramas: 100 } },
  { id: 'ovo', nome: 'Ovo cozido', itemTaco: 'Ovo, de galinha, inteiro, cozido/10minutos', grupo: 'ovos-laticinios', g100: 13.3, porcao: { rotulo: '1 ovo de 50 g', gramas: 50 } },
  { id: 'mozarela', nome: 'Queijo mozarela', itemTaco: 'Queijo, mozarela', grupo: 'ovos-laticinios', g100: 22.6, porcao: { rotulo: '2 fatias de 15 g', gramas: 30 } },
  { id: 'minas', nome: 'Queijo minas frescal', itemTaco: 'Queijo, minas, frescal', grupo: 'ovos-laticinios', g100: 17.4, porcao: { rotulo: 'fatia de 30 g', gramas: 30 } },
  { id: 'iogurte', nome: 'Iogurte natural', itemTaco: 'Iogurte, natural', grupo: 'ovos-laticinios', g100: 4.1, porcao: { rotulo: 'pote de 170 g', gramas: 170 } },
  { id: 'aveia', nome: 'Aveia em flocos', itemTaco: 'Aveia, flocos, crua', grupo: 'vegetais', g100: 13.9, porcao: { rotulo: '30 g', gramas: 30 } },
  { id: 'pao', nome: 'Pão francês', itemTaco: 'Pão, trigo, francês', grupo: 'vegetais', g100: 8.0, porcao: { rotulo: '1 pão de 50 g', gramas: 50 } },
  { id: 'lentilha', nome: 'Lentilha cozida', itemTaco: 'Lentilha, cozida', grupo: 'vegetais', g100: 6.3, porcao: { rotulo: '100 g', gramas: 100 } },
  { id: 'feijao', nome: 'Feijão carioca cozido', itemTaco: 'Feijão, carioca, cozido', grupo: 'vegetais', g100: 4.8, porcao: { rotulo: '100 g', gramas: 100 } },
  { id: 'arroz', nome: 'Arroz branco cozido', itemTaco: 'Arroz, tipo 1, cozido', grupo: 'vegetais', g100: 2.5, porcao: { rotulo: '150 g', gramas: 150 } },
];

/** Patinho sem gordura CRU, na TACO: o contraste que explica "pesou cru ou pronto?". */
export const PATINHO_CRU_G100 = 21.7;

export const alimento = (id: string): Alimento => {
  const a = ALIMENTOS.find((x) => x.id === id);
  if (!a) throw new Error(`Alimento desconhecido: ${id}`);
  return a;
};

/** Gramas de proteína em `gramas` do alimento. */
export const proteinaEm = (id: string, gramas: number): number => (alimento(id).g100 * gramas) / 100;

/** Proteína da porção de exemplo. */
export const proteinaPorcao = (a: Alimento): number => (a.g100 * a.porcao.gramas) / 100;

/** "32,0" — uma casa, como a TACO. */
export const formataG100 = (g: number): string => g.toLocaleString('pt-BR', { minimumFractionDigits: 1, maximumFractionDigits: 1 });

/** Porção arredondada ao inteiro: precisão de décimo seria fingimento. */
export const formataPorcao = (g: number): string => `${Math.round(g)}`;

/* ── Um dia com 100 g ou mais, montado só com a tabela ── */
export const DIA_EXEMPLO: { refeicao: string; itens: { id: string; gramas: number; rotulo: string }[] }[] = [
  { refeicao: 'Café da manhã', itens: [{ id: 'ovo', gramas: 100, rotulo: '2 ovos' }, { id: 'pao', gramas: 50, rotulo: '1 pão francês' }] },
  { refeicao: 'Almoço', itens: [{ id: 'frango', gramas: 120, rotulo: 'filé de frango de 120 g' }, { id: 'feijao', gramas: 100, rotulo: '100 g de feijão' }, { id: 'arroz', gramas: 150, rotulo: '150 g de arroz' }] },
  { refeicao: 'Lanche', itens: [{ id: 'iogurte', gramas: 170, rotulo: '1 pote de iogurte natural' }, { id: 'aveia', gramas: 30, rotulo: '30 g de aveia' }] },
  { refeicao: 'Jantar', itens: [{ id: 'patinho', gramas: 100, rotulo: 'bife de patinho de 100 g' }] },
];

export const totalRefeicao = (itens: { id: string; gramas: number }[]): number =>
  itens.reduce((s, i) => s + proteinaEm(i.id, i.gramas), 0);

export const totalDia = (): number => DIA_EXEMPLO.reduce((s, r) => s + totalRefeicao(r.itens), 0);
