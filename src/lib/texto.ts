/**
 * Divide um texto corrido em parágrafos curtos (2–3 frases, ~70 palavras),
 * para facilitar a leitura. Não altera uma palavra do conteúdo — apenas
 * reagrupa as frases em blocos menores na renderização.
 */
export function paragrafos(texto: string, cap = 70): string[] {
  const limpo = (texto ?? '').trim();
  if (!limpo) return [];

  const brutas = limpo.split(/(?<=[.!?]) (?=[A-ZÀ-ÖØ-Þ«"])/g);

  // refunde frases que terminam em inicial abreviada ("J.")
  const frases: string[] = [];
  for (const f of brutas) {
    const ant = frases[frases.length - 1];
    if (ant && /\b[A-Z]\.$/.test(ant.trim())) {
      frases[frases.length - 1] = `${ant} ${f}`;
    } else {
      frases.push(f);
    }
  }

  const w = (s: string) => s.split(/\s+/).filter(Boolean).length;
  const grupos: string[][] = [];
  let atual: string[] = [];
  for (const f of frases) {
    const cand = [...atual, f];
    if (atual.length && (w(cand.join(' ')) > cap || cand.length > 3)) {
      grupos.push(atual);
      atual = [f];
    } else {
      atual = cand;
    }
  }
  if (atual.length) grupos.push(atual);

  // órfão final muito curto volta para o parágrafo anterior, se couber
  if (grupos.length >= 2) {
    const ultimo = grupos[grupos.length - 1].join(' ');
    const penultimo = grupos[grupos.length - 2].join(' ');
    if (w(ultimo) < 6 && w(`${penultimo} ${ultimo}`) <= 80) {
      const fundido = [...grupos[grupos.length - 2], ...grupos[grupos.length - 1]];
      grupos.splice(grupos.length - 2, 2, fundido);
    }
  }

  return grupos.map((g) => g.join(' '));
}
