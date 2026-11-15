/**
 * Vitrine de transformações: comparador arrastável + eventos do GA4.
 *
 * Comparador
 * - Arrasto com Pointer Events + setPointerCapture no contêiner. O CSS põe
 *   touch-action: pan-y, então no celular o arrasto vertical continua
 *   rolando a página e só o horizontal move o comparador.
 * - Teclado/leitor de tela: o <input type="range"> 0–100 do componente.
 * - Nada anima sozinho; sem JS, o comparador fica parado em 50%.
 * - "Arraste para comparar" some depois do primeiro uso daquele comparador.
 *
 * Eventos (só saem com o GA carregado, isto é, depois do consentimento):
 * - vitrine_view: uma vez por página, quando a seção entra na tela.
 * - vitrine_comparador: no primeiro uso de cada comparador, com `aluno` e
 *   `como` (mouse | toque | teclado).
 * - vitrine_cta_click e vitrine_resultados_click.
 * Todos levam `pagina`.
 */
type Gtag = (comando: string, evento: string, params?: Record<string, unknown>) => void;

function ev(nome: string, params: Record<string, unknown>): void {
  const g = (window as unknown as { gtag?: Gtag }).gtag;
  if (typeof g === 'function') g('event', nome, params);
}

function iniciarComparador(cmp: HTMLElement, pagina: string): void {
  const range = cmp.querySelector<HTMLInputElement>('.cmp-range');
  if (!range) return;
  const aluno = cmp.dataset.aluno ?? '';
  let usado = false;
  let arrastando: number | null = null;

  const aplicar = (pos: number) => {
    const p = Math.min(100, Math.max(0, pos));
    cmp.style.setProperty('--pos', `${p}%`);
    range.value = String(Math.round(p));
  };

  const marcarUso = (como: 'mouse' | 'toque' | 'teclado') => {
    if (usado) return;
    usado = true;
    cmp.setAttribute('data-usado', '');
    ev('vitrine_comparador', { aluno, como, pagina });
  };

  const posDoPonteiro = (e: PointerEvent) => {
    const r = cmp.getBoundingClientRect();
    return ((e.clientX - r.left) / r.width) * 100;
  };

  cmp.addEventListener('pointerdown', (e) => {
    if (e.button !== 0 && e.pointerType === 'mouse') return;
    arrastando = e.pointerId;
    cmp.setPointerCapture(e.pointerId);
    aplicar(posDoPonteiro(e));
    marcarUso(e.pointerType === 'mouse' ? 'mouse' : 'toque');
  });
  cmp.addEventListener('pointermove', (e) => {
    if (arrastando !== e.pointerId) return;
    aplicar(posDoPonteiro(e));
  });
  const soltar = (e: PointerEvent) => {
    if (arrastando !== e.pointerId) return;
    arrastando = null;
    if (cmp.hasPointerCapture(e.pointerId)) cmp.releasePointerCapture(e.pointerId);
  };
  cmp.addEventListener('pointerup', soltar);
  cmp.addEventListener('pointercancel', soltar);

  // O range não recebe o ponteiro (pointer-events: none), então todo
  // `input` nele vem do teclado ou da tecnologia assistiva.
  range.addEventListener('input', () => {
    aplicar(Number(range.value));
    marcarUso('teclado');
  });
}

export function iniciarVitrine(): void {
  document.querySelectorAll<HTMLElement>('[data-vitrine]').forEach((secao) => {
    if (secao.dataset.vitrinePronta) return;
    secao.dataset.vitrinePronta = '1';
    const pagina = secao.dataset.pagina ?? location.pathname;

    secao.querySelectorAll<HTMLElement>('[data-cmp]').forEach((cmp) => iniciarComparador(cmp, pagina));

    secao.querySelector('[data-vitrine-cta]')?.addEventListener('click', () => {
      ev('vitrine_cta_click', { pagina });
    });
    secao.querySelector('[data-vitrine-todas]')?.addEventListener('click', () => {
      ev('vitrine_resultados_click', { pagina });
    });

    if ('IntersectionObserver' in window) {
      const io = new IntersectionObserver(
        (entradas) => {
          if (entradas.some((e) => e.isIntersecting)) {
            ev('vitrine_view', { pagina });
            io.disconnect();
          }
        },
        // threshold 0: a seção é mais alta que a tela no celular, então uma
        // fração mínima visível nunca seria atingida.
        { threshold: 0, rootMargin: '0px 0px -30% 0px' },
      );
      io.observe(secao);
    }
  });
}
