/**
 * Rastreio universal de cliques.
 *
 * O portal tinha 1.874 elementos clicáveis e media 92 deles — só WhatsApp,
 * Instagram e os links para o Montinho. Tudo o mais (links de cidade,
 * cartões de ferramenta, navegação, rodapé, links no meio do texto) saía
 * do radar, o que torna impossível responder a pergunta que interessa:
 * QUAL botão converte.
 *
 * DECISÃO CENTRAL: UM evento, não 1.874.
 *
 * A tentação é dar nome próprio a cada botão. Isso estoura o limite de
 * eventos do GA4, espalha a análise por centenas de relatórios e ainda
 * exige tocar em 238 arquivos toda vez que um botão nasce. Aqui existe um
 * evento só — `clique_elemento` — e a identificação vem em parâmetros de
 * baixa cardinalidade, que é o que o GA agrupa bem.
 *
 * ZERO MARCAÇÃO NO HTML
 *
 * Região, papel e destino são DEDUZIDOS da estrutura do documento no
 * momento do clique: quem está dentro de <footer> é rodapé, quem tem
 * .btn-primary é CTA primário, quem aponta para /ferramentas/ é ferramenta.
 * Nenhum arquivo de página precisou de atributo novo — e um botão criado
 * amanhã já nasce medido.
 *
 * Onde a dedução erraria, `data-track="id"` manda mais alto — e vale para o
 * elemento OU para qualquer contêiner acima dele. Marcar uma tabela nomeia
 * os seus 986 links de uma vez, o que evita que uma tabela de conteúdo
 * afogue os CTAs no mesmo balde do relatório.
 *
 * O QUE FICA DE FORA
 *
 * O interior das sete ferramentas. Cada uma já emite os próprios eventos
 * (start, step, progress, complete, share…), com semântica que um
 * rastreador genérico não teria. Contar cada opção de quiz aqui seria
 * ruído por cima de dado bom.
 *
 * RELAÇÃO COM OS EVENTOS QUE JÁ EXISTIAM
 *
 * `contextual_cta_click`, `sticky_click`, `slidein_click` e
 * `recommendation_click` continuam. Eles respondem "qual CAMPANHA gerou o
 * clique"; este responde "qual BOTÃO foi clicado". São perguntas
 * diferentes, e o parâmetro `componente` permite cruzar as duas sem join.
 */
type Gtag = (comando: string, evento: string, params?: Record<string, unknown>) => void;

function ev(nome: string, params: Record<string, unknown>): void {
  const g = (window as unknown as { gtag?: Gtag }).gtag;
  if (typeof g === 'function') g('event', nome, params);
}

/** Contêineres das ferramentas: têm instrumentação própria. */
const APPS_FERRAMENTA = '#at-app, #cp-app, #dc-app, #pm-app, #po-app, #ps-app, #rt-app';

/** Em que parte da página o elemento vive. */
function regiaoDe(el: HTMLElement): string {
  if (el.closest('#ppp-sticky')) return 'sticky';
  if (el.closest('#ppp-slidein')) return 'slidein';
  if (el.closest('.wpp-float')) return 'flutuante';
  if (el.closest('#cookie-aviso')) return 'cookies';
  if (el.closest('header')) return 'header';
  if (el.closest('footer')) return 'rodape';
  if (el.closest('.sidebar')) return 'sidebar';
  if (el.closest('.hero')) return 'hero';
  if (el.closest('[data-rec]')) return 'recomendacao';
  if (el.closest('[data-cta]')) return 'cta-contextual';
  if (el.closest('article')) return 'artigo';
  return 'pagina';
}

/** Que papel o elemento cumpre — é o que separa CTA de link de texto. */
function papelDe(el: HTMLElement): string {
  const cls = el.className && typeof el.className === 'string' ? el.className : '';
  if (el.hasAttribute('data-sticky-fechar') || el.hasAttribute('data-slidein-fechar')) return 'fechar';
  if (/\bbtn-primary\b/.test(cls)) return 'cta-primario';
  if (/\bbtn-outline\b|\bbtn-ghost\b|\bbtn-brand\b/.test(cls)) return 'cta-secundario';
  if (/\bbtn\b/.test(cls)) return 'cta';
  if (/\bpill\b/.test(cls)) return 'pilula';
  if (el.closest('nav')) return 'nav';
  if (el.closest('.card, .city-card, [class*="-card"]')) return 'card';
  if (el.tagName === 'BUTTON') return 'botao';
  if (el.closest('p, li')) return 'link-texto';
  return 'link';
}

/** Para onde leva — agrupado, porque é o que o relatório consegue ler. */
function destinoDe(href: string): { grupo: string; destino: string } {
  if (!href) return { grupo: 'sem-destino', destino: '' };
  if (/wa\.me|api\.whatsapp/.test(href)) return { grupo: 'whatsapp', destino: 'whatsapp' };
  if (/instagram\.com/.test(href)) return { grupo: 'instagram', destino: 'instagram' };
  if (/montinhopersonal\.com\.br/.test(href)) return { grupo: 'montinho', destino: 'montinho' };
  if (href.startsWith('mailto:')) return { grupo: 'email', destino: 'email' };
  if (href.startsWith('#')) return { grupo: 'ancora', destino: href.slice(0, 40) };
  if (/^https?:\/\//.test(href)) {
    try {
      return { grupo: 'externo', destino: new URL(href).hostname };
    } catch {
      return { grupo: 'externo', destino: 'desconhecido' };
    }
  }
  const p = href.split('#')[0].split('?')[0];
  if (p.startsWith('/ferramentas/')) return { grupo: 'ferramenta', destino: p };
  if (p.startsWith('/personal-trainer/')) return { grupo: 'cidade', destino: p };
  if (/^\/personal-trainer-/.test(p)) return { grupo: 'bairro', destino: p };
  if (p.startsWith('/estado/')) return { grupo: 'estado', destino: p };
  if (p.startsWith('/montinho-personal')) return { grupo: 'montinho-pagina', destino: p };
  if (/^\/(guias|musculacao|emagrecimento|mounjaro-e-treino|humor-fitness)\//.test(p)) {
    return { grupo: 'conteudo', destino: p };
  }
  if (/^\/(guias|musculacao|emagrecimento|mounjaro-e-treino|humor-fitness|ferramentas|personal-trainer)\/?$/.test(p)) {
    return { grupo: 'hub', destino: p };
  }
  return { grupo: 'interno', destino: p };
}

/** Rótulo curto e estável: sem quebra de linha, sem excesso. */
function textoDe(el: HTMLElement): string {
  const t = (el.getAttribute('aria-label') || el.textContent || '')
    .replace(/\s+/g, ' ')
    .trim();
  return t.slice(0, 60);
}

function rolagem(): number {
  const alcancavel = document.documentElement.scrollHeight - window.innerHeight;
  if (alcancavel <= 0) return 100;
  return Math.round(Math.min(1, window.scrollY / alcancavel) * 100);
}

let iniciado = false;

export function iniciarRastreio(): void {
  if (iniciado) return;
  iniciado = true;

  // Contexto da página, renderizado no servidor uma vez por página.
  const b = document.body;
  const contexto = {
    page_type: b.dataset.pageType || '',
    cluster: b.dataset.cluster || '',
    intent: b.dataset.intent || '',
  };

  document.addEventListener(
    'click',
    (e) => {
      const alvo = e.target as HTMLElement | null;
      if (!alvo?.closest) return;
      const el = alvo.closest<HTMLElement>('a[href], button');
      if (!el) return;

      // O interior das ferramentas tem medição própria e mais rica.
      if (el.closest(APPS_FERRAMENTA)) return;

      const href = el.getAttribute('href') || '';
      const { grupo, destino } = destinoDe(href);
      const regiao = regiaoDe(el);
      const papel = papelDe(el);
      // Nome declarado no próprio elemento ou herdado do contêiner mais
      // próximo que se identificou.
      const declarado = el.closest<HTMLElement>('[data-track]')?.dataset.track;

      ev('clique_elemento', {
        // Identificador estável e de baixa cardinalidade: é por ele que se
        // agrupa no relatório.
        elemento_id: declarado || `${regiao}:${papel}`,
        regiao,
        papel,
        destino_grupo: grupo,
        destino,
        texto: textoDe(el),
        ...contexto,
        posicao_pct: rolagem(),
        device: window.innerWidth >= 768 ? 'desktop' : 'mobile',
      });
    },
    true,
  );
}
