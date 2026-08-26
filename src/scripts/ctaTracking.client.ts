/**
 * Medição do funil de CTA contextual.
 *
 * Três eventos: visualização (quando o bloco entra na tela de verdade),
 * clique e dispensa. Nada de PII — só a campanha, a variante, o tipo de
 * página, a categoria, o estágio de funil e o slug da cidade.
 *
 * Convive com o rastreamento que já existe no portal: o listener global do
 * Base.astro continua disparando `clique_whatsapp` para qualquer link do
 * WhatsApp. Aqui só acrescentamos a camada de campanha
 * (`contextual_cta_*`), que responde uma pergunta diferente — qual CTA
 * gerou o clique. Um é conversão, o outro é atribuição; não são duplicata.
 */
type Gtag = (comando: string, evento: string, params?: Record<string, unknown>) => void;

function ev(nome: string, params: Record<string, unknown>): void {
  const g = (window as unknown as { gtag?: Gtag }).gtag;
  if (typeof g === 'function') g('event', nome, params);
}

/** Lê os data-attributes que o componente já renderizou no servidor. */
function dados(el: HTMLElement): Record<string, unknown> {
  return {
    cta_campaign: el.dataset.cta || '',
    cta_variant: el.dataset.ctaVariant || '',
    page_type: el.dataset.ctaPageType || '',
    content_category: el.dataset.ctaCategory || '',
    funnel_stage: el.dataset.ctaFunnel || '',
    city: el.dataset.ctaCity || '',
  };
}

let iniciado = false;

export function iniciarMedicaoCta(): void {
  // O componente pode aparecer mais de uma vez na página; a medição é uma só.
  if (iniciado) return;
  iniciado = true;

  const blocos = Array.from(document.querySelectorAll<HTMLElement>('[data-cta]'));
  if (!blocos.length) return;

  // Visualização: só conta quando metade do bloco fica visível, para não
  // inflar o denominador do funil com CTA que ninguém chegou a ver.
  if ('IntersectionObserver' in window) {
    const obs = new IntersectionObserver(
      (entradas) => {
        for (const e of entradas) {
          if (!e.isIntersecting) continue;
          const el = e.target as HTMLElement;
          obs.unobserve(el);
          ev('contextual_cta_view', dados(el));
        }
      },
      { threshold: 0.5 },
    );
    blocos.forEach((b) => obs.observe(b));
  }

  // Clique: delegação única, cobre primário e secundário.
  document.addEventListener(
    'click',
    (e) => {
      const alvo = e.target as HTMLElement | null;
      if (!alvo?.closest) return;
      const link = alvo.closest<HTMLAnchorElement>('[data-cta-link]');
      if (!link) return;
      const bloco = link.closest<HTMLElement>('[data-cta]');
      if (!bloco) return;
      ev('contextual_cta_click', {
        ...dados(bloco),
        destination: link.getAttribute('href') || '',
        link_role: link.dataset.ctaLink || 'primary',
      });
    },
    true,
  );
}
