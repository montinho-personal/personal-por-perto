/**
 * Camada interativa da Central de Ferramentas: busca por intenção,
 * filtros por necessidade e a medição de tudo isso.
 *
 * Regra que governa o arquivo: o HTML já é a biblioteca inteira. Este
 * script só REORDENA e ESCONDE — nunca cria conteúdo que não esteja na
 * página. Os resultados da busca são clones dos próprios cards (mesmo
 * link, mesmo texto), postos na ordem em que a busca os classificou.
 *
 * Eventos (nomes do brief da Central; convivem com os que já existiam):
 *   tools_hub_search      { query, results_count }  — quando a pessoa para de digitar
 *   tools_zero_results    { query }                 — busca sem ferramenta
 *   tools_category_select { category }
 *   tool_card_click       { tool_name, category, position, source_section }
 *   training_map_start                              — abriu o roteador
 *   tool_related_content_click { tool_name: 'hub', article }
 */
import { catalogo } from '../data/ferramentas';
import { buscar, indexar } from '../lib/buscaFerramentas';

type Gtag = (c: string, e: string, p?: Record<string, unknown>) => void;
function ev(nome: string, params?: Record<string, unknown>): void {
  const g = (window as unknown as { gtag?: Gtag }).gtag;
  if (typeof g === 'function') g('event', nome, params || {});
}

const $ = <T extends HTMLElement>(sel: string): T | null => document.querySelector<T>(sel);

/** A consulta como vai para o analytics: curta, minúscula, sem espaço sobrando. */
const paraAnalytics = (q: string): string => q.trim().toLowerCase().replace(/\s+/g, ' ').slice(0, 60);

export function iniciarCentral(): void {
  const raizes = {
    form: $<HTMLFormElement>('#fh-form'),
    input: $<HTMLInputElement>('#fh-busca'),
    status: $<HTMLElement>('#fh-status'),
    resultados: $<HTMLElement>('#fh-resultados'),
    lista: $<HTMLElement>('#fh-resultados-lista'),
    zero: $<HTMLElement>('#fh-zero'),
    zeroLista: $<HTMLElement>('#fh-zero-lista'),
    biblioteca: $<HTMLElement>('#fh-biblioteca'),
  };
  if (Object.values(raizes).some((el) => !el)) return;
  // Depois da guarda, ninguém é nulo — e as closures abaixo precisam saber disso.
  const form = raizes.form!;
  const input = raizes.input!;
  const status = raizes.status!;
  const resultados = raizes.resultados!;
  const lista = raizes.lista!;
  const zero = raizes.zero!;
  const zeroLista = raizes.zeroLista!;
  const biblioteca = raizes.biblioteca!;
  const zeroPortal = $<HTMLAnchorElement>('#fh-zero-portal');

  const indice = indexar(catalogo);
  const cards = Array.from(document.querySelectorAll<HTMLElement>('.fh-card'));
  const cardPor = new Map<string, HTMLElement>();
  // O primeiro card de cada slug é o da seção de origem; os destaques
  // repetem quatro deles, e o clone deve vir da categoria.
  for (const c of cards) if (c.dataset.origem !== 'destaques' && c.dataset.slug) cardPor.set(c.dataset.slug, c);
  for (const c of cards) if (c.dataset.slug && !cardPor.has(c.dataset.slug)) cardPor.set(c.dataset.slug, c);

  const secoes = Array.from(document.querySelectorAll<HTMLElement>('.fh-secao'));
  const chips = Array.from(document.querySelectorAll<HTMLButtonElement>('.fh-chip'));
  const mapa = $<HTMLElement>('#mapa-do-treino');

  /* ---------------------------- Cliques ---------------------------- */
  const instrumentar = (raiz: ParentNode, origem?: string) => {
    raiz.querySelectorAll<HTMLElement>('.fh-card').forEach((card) => {
      const a = card.querySelector<HTMLAnchorElement>('h3 a');
      if (!a || a.dataset.medido) return;
      a.dataset.medido = '1';
      a.addEventListener('click', () =>
        ev('tool_card_click', {
          tool_name: card.dataset.slug,
          category: card.dataset.cat,
          position: Number(card.dataset.pos || 0),
          source_section: origem ?? card.dataset.origem,
        }),
      );
    });
  };
  instrumentar(document);

  /* ----------------------------- Filtro ---------------------------- */
  let filtro = 'todos';

  function aplicarFiltro(cat: string, anunciar = true): void {
    filtro = cat;
    for (const chip of chips) {
      const ativo = chip.dataset.cat === cat;
      chip.classList.toggle('is-ativo', ativo);
      chip.setAttribute('aria-pressed', String(ativo));
    }
    let visiveis = 0;
    for (const s of secoes) {
      const mostra = cat === 'todos' || s.dataset.cat === cat;
      s.hidden = !mostra;
      if (mostra && s.dataset.cat !== 'destaques') visiveis += s.querySelectorAll('.fh-card').length;
    }
    if (mapa) mapa.hidden = cat !== 'todos';
    // Ao filtrar uma categoria, o que estava em "mais" abre: a pessoa pediu para ver só isso.
    document.querySelectorAll<HTMLDetailsElement>('.fh-mais').forEach((d) => {
      if (cat !== 'todos' && d.closest('.fh-secao')?.getAttribute('data-cat') === cat) d.open = true;
    });
    if (anunciar) {
      const nome = chips.find((c) => c.dataset.cat === cat)?.textContent?.replace(/\d+\s*$/, '').trim() ?? cat;
      status.textContent = cat === 'todos' ? 'Mostrando todas as ferramentas.' : `${visiveis} ferramentas em ${nome}.`;
    }
  }

  for (const chip of chips) {
    chip.addEventListener('click', () => {
      const cat = chip.dataset.cat ?? 'todos';
      limparBusca(false);
      aplicarFiltro(cat);
      ev('tools_category_select', { category: cat });
    });
  }

  /* ----------------------------- Busca ----------------------------- */
  let ultimaMedida = '';
  let timer = 0;

  function clonar(slug: string, pos: number, origem: string): HTMLElement | null {
    const base = cardPor.get(slug);
    if (!base) return null;
    const c = base.cloneNode(true) as HTMLElement;
    c.classList.remove('fh-card--destaque');
    c.dataset.pos = String(pos);
    c.dataset.origem = origem;
    const a = c.querySelector<HTMLAnchorElement>('h3 a');
    if (a) delete a.dataset.medido;
    return c;
  }

  function mostrarResultados(q: string): void {
    const achados = buscar(q, indice);
    lista.replaceChildren();
    zeroLista.replaceChildren();

    if (achados.length) {
      achados.forEach((r, i) => {
        const c = clonar(r.ferramenta.slug, i + 1, 'busca');
        if (c) lista.appendChild(c);
      });
      zero.hidden = true;
      status.textContent = `${achados.length} ${achados.length === 1 ? 'ferramenta encontrada' : 'ferramentas encontradas'} para "${q}".`;
    } else {
      // Zero resultados nunca é só "nada": as quatro de "comece por estas" e a busca do portal.
      catalogo
        .filter((f) => f.destaque)
        .forEach((f, i) => {
          const c = clonar(f.slug, i + 1, 'zero');
          if (c) zeroLista.appendChild(c);
        });
      if (zeroPortal) {
        const u = new URL(zeroPortal.getAttribute('href') || '/personal-trainer/', location.origin);
        u.searchParams.set('q', q);
        zeroPortal.href = u.pathname + u.search;
      }
      zero.hidden = false;
      status.textContent = `Nenhuma ferramenta para "${q}". Veja as sugestões.`;
    }

    instrumentar(resultados, achados.length ? 'busca' : 'zero');
    resultados.hidden = false;
    biblioteca.hidden = true;
  }

  function limparBusca(restaurar = true): void {
    input.value = '';
    resultados.hidden = true;
    biblioteca.hidden = false;
    lista.replaceChildren();
    zeroLista.replaceChildren();
    if (restaurar) aplicarFiltro('todos', false);
  }

  /** Mede a consulta quando a pessoa para de digitar — não a cada tecla. */
  function medir(q: string, n: number): void {
    const chave = paraAnalytics(q);
    if (!chave || chave === ultimaMedida) return;
    ultimaMedida = chave;
    ev('tools_hub_search', { query: chave, results_count: n });
    if (n === 0) ev('tools_zero_results', { query: chave, timestamp: new Date().toISOString(), context: 'hub' });
  }

  function aoDigitar(): void {
    const q = input.value.trim();
    window.clearTimeout(timer);
    if (q.length < 2) {
      if (!resultados.hidden) limparBusca();
      return;
    }
    if (filtro !== 'todos') aplicarFiltro('todos', false);
    mostrarResultados(q);
    timer = window.setTimeout(() => medir(q, buscar(q, indice).length), 700);
  }

  input.addEventListener('input', aoDigitar);
  input.addEventListener('search', () => {
    if (!input.value) limparBusca();
  });
  form.addEventListener('submit', (e) => {
    e.preventDefault();
    const q = input.value.trim();
    if (q.length < 2) return;
    window.clearTimeout(timer);
    mostrarResultados(q);
    medir(q, buscar(q, indice).length);
    resultados.scrollIntoView({ block: 'start' });
  });

  document.querySelectorAll<HTMLButtonElement>('.fh-exemplo').forEach((b) => {
    b.addEventListener('click', () => {
      input.value = b.dataset.exemplo ?? '';
      aoDigitar();
      input.focus({ preventScroll: true });
    });
  });
  $<HTMLButtonElement>('#fh-limpar')?.addEventListener('click', () => {
    limparBusca();
    input.focus();
  });

  /* ------------------------ Mapa e conteúdo ------------------------ */
  $<HTMLButtonElement>('#hj-abrir-roteador')?.addEventListener('click', () => ev('training_map_start', { source: 'hub' }));
  document.querySelectorAll<HTMLAnchorElement>('.fh-nao-links a').forEach((a) => {
    a.addEventListener('click', () => ev('tool_related_content_click', { tool_name: 'hub', article: a.dataset.artigo }));
  });

  /* Chegou com ?q= (por exemplo, da busca do menu): já busca. */
  const q0 = new URLSearchParams(location.search).get('q');
  if (q0 && q0.trim().length >= 2) {
    input.value = q0.trim();
    aoDigitar();
  }
}
