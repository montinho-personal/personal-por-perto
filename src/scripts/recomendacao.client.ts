/**
 * Medição do bloco editorial de recomendação.
 *
 * Dois eventos: visualização (só quando o bloco entra de fato na tela) e
 * clique. Nada de PII — contexto, variante, posição, tipo de página.
 *
 * A visualização exige metade do bloco à vista, e não um pixel: contar
 * impressão de quem passou raspando infla o denominador e faz uma
 * recomendação parecer pior do que é. E o CTR sozinho não decide nada aqui
 * — o que interessa é o caminho até o lead, que os eventos seguintes
 * registram.
 *
 * O "metade" é calculado contra o MENOR entre a altura do bloco e a da
 * tela. Com `threshold: 0.5` puro o evento nunca disparava no celular:
 * este bloco tem cerca de 1.750px e a tela, 844px — metade do bloco não
 * cabe na viewport, então o limiar era inatingível por construção.
 */
type Gtag = (comando: string, evento: string, params?: Record<string, unknown>) => void;

function ev(nome: string, params: Record<string, unknown>): void {
  const g = (window as unknown as { gtag?: Gtag }).gtag;
  if (typeof g === 'function') g('event', nome, params);
}

function dados(el: HTMLElement): Record<string, unknown> {
  return {
    recommendation_context: el.dataset.rec || '',
    recommendation_variant: el.dataset.recVariant || '',
    recommendation_variant_ab: el.dataset.recVariantAb || '',
    recommendation_position: el.dataset.recPosition || '',
    recommendation_destination: el.dataset.recDestination || '',
    page_type: el.dataset.recPageType || '',
    cluster: el.dataset.recCluster || '',
    intent: el.dataset.recIntent || '',
    page_title: document.title,
    device: window.innerWidth >= 768 ? 'desktop' : 'mobile',
  };
}

let iniciado = false;

export function iniciarMedicaoRecomendacao(): void {
  // O componente pode aparecer mais de uma vez na página; a medição é uma.
  if (iniciado) return;
  iniciado = true;

  const blocos = Array.from(document.querySelectorAll<HTMLElement>('[data-rec]'));
  if (!blocos.length) return;

  if ('IntersectionObserver' in window) {
    const obs = new IntersectionObserver(
      (entradas) => {
        for (const e of entradas) {
          if (!e.isIntersecting) continue;
          const el = e.target as HTMLElement;
          const alvo = Math.min(el.offsetHeight, window.innerHeight) * 0.5;
          if (e.intersectionRect.height < alvo) continue;
          obs.unobserve(el);
          ev('recommendation_view', dados(el));
        }
      },
      // Vários limiares: um bloco mais alto que a tela precisa ser avaliado
      // enquanto rola, não só quando cruza uma fração fixa da própria altura.
      { threshold: [0, 0.1, 0.25, 0.5, 0.75, 1] },
    );
    blocos.forEach((b) => obs.observe(b));
  }

  document.addEventListener(
    'click',
    (e) => {
      const alvo = e.target as HTMLElement | null;
      const link = alvo?.closest?.<HTMLAnchorElement>('[data-rec-link]');
      if (!link) return;
      const bloco = link.closest<HTMLElement>('[data-rec]');
      if (!bloco) return;
      ev('recommendation_click', {
        ...dados(bloco),
        link_role: link.dataset.recLink || 'primario',
        destination: link.getAttribute('href') || '',
      });
    },
    true,
  );
}
