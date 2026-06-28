/**
 * Utilidades de slug e formatação.
 * Slugs sempre sem acentos/cedilha — navegadores e crawlers tratam mal
 * caracteres como ç, ã, é em URLs.
 */

export function slugify(input: string): string {
  return input
    .normalize('NFD')
    .replace(/[̀-ͯ]/g, '') // remove acentos
    .replace(/ç/gi, 'c')
    .toLowerCase()
    .trim()
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/^-+|-+$/g, '');
}

/** Formata número grande no padrão brasileiro: 12.345.678 */
export function formatNumber(n: number): string {
  return n.toLocaleString('pt-BR');
}

/** Formata valor em reais sem centavos: R$ 1.234 */
export function formatBRL(n: number): string {
  return n.toLocaleString('pt-BR', {
    style: 'currency',
    currency: 'BRL',
    minimumFractionDigits: 0,
    maximumFractionDigits: 0,
  });
}

/** Faixa de preço legível: "R$ 80 a R$ 150" */
export function faixaBRL(min: number, max: number): string {
  return `${formatBRL(min)} a ${formatBRL(max)}`;
}

/** Data ISO -> "28 de junho de 2026" */
export function formatDateLong(iso: string): string {
  const d = new Date(iso + 'T12:00:00');
  return d.toLocaleDateString('pt-BR', {
    day: 'numeric',
    month: 'long',
    year: 'numeric',
  });
}

/** Data ISO -> "junho de 2026" */
export function formatMonthYear(iso: string): string {
  const d = new Date(iso + 'T12:00:00');
  return d.toLocaleDateString('pt-BR', { month: 'long', year: 'numeric' });
}
