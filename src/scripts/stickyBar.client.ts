/**
 * Comportamento da sticky bar.
 *
 * O motor decidiu O QUE dizer; aqui se decide QUANDO — e, principalmente,
 * quando ficar calado. Todas as regras abaixo existem para o mesmo fim:
 * a barra tem que parecer continuação do conteúdo, não anúncio.
 *
 * GATILHO
 *   25% de rolagem OU 18s na página, o que vier primeiro. Nunca à chegada:
 *   barra que aparece antes de a pessoa ler qualquer coisa é interrupção.
 *
 * SILÊNCIOS
 *   - fechada  -> não volta na sessão inteira
 *   - aviso de cookies aberto -> recolhe. Os dois são fixos no rodapé e o
 *     aviso vence a disputa por dois motivos: é decisão legal, e enquanto
 *     ele estiver aberto o consentimento não foi dado — ou seja, nem os
 *     eventos da própria barra seriam registrados.
 *   - rodapé visível -> recolhe (ali ela cobriria os links do rodapé)
 *   - teclado aberto -> recolhe (em mobile o teclado empurra o layout)
 *   - modal aberto   -> recolhe (o lightbox é diálogo; não se compete com ele)
 *
 * DESKTOP
 *   Desligada por padrão. Ver MOSTRAR_DESKTOP.
 *
 * TESTE A/B
 *   A variante é sorteada uma vez e presa à sessão. Trocar de variante
 *   entre páginas transformaria o teste em ruído — e trocar dentro da mesma
 *   página seria pior ainda para quem está lendo.
 */
/*
 * Importar do módulo de DADOS, nunca do motor.
 *
 * O motor resolve a locução da cidade e por isso importa a base inteira —
 * 982 arquivos. Um único `import` do motor aqui arrastava tudo isso para o
 * bundle do navegador: 5,19 MB de JavaScript em toda página do portal.
 */
import { sortearVariante, LETRA_VARIANTE, type VarianteSticky } from '../data/stickyMensagens';
import { lerMapa } from './mapaTreino';
import { FERRAMENTAS, ETAPAS, type FerramentaId } from '../lib/jornada';

type Gtag = (comando: string, evento: string, params?: Record<string, unknown>) => void;

function ev(nome: string, params: Record<string, unknown>): void {
  const g = (window as unknown as { gtag?: Gtag }).gtag;
  if (typeof g === 'function') g('event', nome, params);
}

const CHAVE_FECHADA = 'ppp-sticky-fechada';
const CHAVE_VARIANTE = 'ppp-sticky-variante';

/**
 * A barra vale a pena no desktop?
 *
 * A recomendação é não. No desktop a página já oferece o próximo passo em
 * três lugares — a sidebar, o bloco de CTA no fim do artigo e o botão de
 * WhatsApp com texto. Uma quarta chamada, fixa no rodapé, é justamente o
 * que faz um site parecer existir para vender. No mobile nada disso está
 * visível ao mesmo tempo, e aí a barra resolve um problema real.
 *
 * Para ligar no desktop, troque para `true`: o CSS e a medição já lidam
 * com as duas larguras.
 */
const MOSTRAR_DESKTOP = false;
const LARGURA_MOBILE = 768;

const ROLAGEM_MINIMA = 0.25;
const TEMPO_MINIMO_MS = 18_000;

const leu = (k: string): string | null => {
  try {
    return sessionStorage.getItem(k);
  } catch {
    return null;
  }
};
const grava = (k: string, v: string): void => {
  try {
    sessionStorage.setItem(k, v);
  } catch {
    /* modo privado: a barra só perde a memória entre páginas */
  }
};

/** Sorteia a variante na primeira página e mantém pela sessão. */
function varianteDaSessao(): VarianteSticky {
  const salva = leu(CHAVE_VARIANTE);
  if (salva === 'pergunta' || salva === 'beneficio' || salva === 'problema') return salva;
  const nova = sortearVariante();
  grava(CHAVE_VARIANTE, nova);
  return nova;
}

/**
 * Em página de ferramenta, pula as etapas que a pessoa já concluiu.
 *
 * O servidor não sabe o que foi feito — o mapa mora no navegador. Este
 * ajuste roda UMA vez, antes da barra aparecer, e nunca depois: o texto
 * não muda embaixo de quem está lendo.
 */
function refinarPelaJornada(bar: HTMLElement): void {
  const regra = bar.dataset.regra || '';
  if (!regra.startsWith('jornada:')) return;

  const mapa = lerMapa();
  if (!mapa) return;

  const sugerida = regra.slice('jornada:'.length) as FerramentaId;
  const feitas = new Set(Object.keys(mapa.concluidas));
  if (!feitas.has(sugerida)) return; // a sugestão do servidor continua válida

  // Primeira etapa da ordem oficial que ainda não foi concluída.
  const pendente = ETAPAS.map((e) => Object.values(FERRAMENTAS).find((f) => f.etapa === e.id)).find(
    (f) => f && !feitas.has(f.id),
  );

  const link = bar.querySelector<HTMLAnchorElement>('[data-sticky-link]');
  if (!pendente || !link) {
    // Jornada completa: não há próximo passo honesto a oferecer.
    bar.dataset.suprimir = 'completa';
    return;
  }
  link.href = pendente.url;
  bar.dataset.regra = `jornada:${pendente.id}`;
  bar.dataset.destino = pendente.url;
  const msg = bar.querySelector<HTMLElement>('[data-sticky-msg]');
  if (msg && bar.dataset.varianteAtiva === 'beneficio') {
    msg.textContent = `Próxima etapa: ${pendente.curto.toLowerCase()}`;
  }
}

export function iniciarStickyBar(): void {
  const bar = document.getElementById('ppp-sticky');
  if (!bar) return;

  if (leu(CHAVE_FECHADA) === '1') return;
  if (!MOSTRAR_DESKTOP && window.innerWidth >= LARGURA_MOBILE) return;

  const variante = varianteDaSessao();
  const msgEl = bar.querySelector<HTMLElement>('[data-sticky-msg]');
  const texto = bar.dataset[`msg${variante[0].toUpperCase()}${variante.slice(1)}`] || '';
  if (!msgEl || !texto) return;
  msgEl.textContent = texto;
  bar.dataset.varianteAtiva = variante;

  refinarPelaJornada(bar);
  if (bar.dataset.suprimir) return;

  const dados = (): Record<string, unknown> => ({
    variant: variante,
    // Mesma variante, duas leituras: a semântica explica o teste, a letra
    // cabe na tabela do GA sem truncar.
    variant_ab: LETRA_VARIANTE[variante],
    campaign: bar.dataset.regra || '',
    message: msgEl.textContent || '',
    offer_destination: bar.dataset.destino || '',
    page_type: bar.dataset.pageType || '',
    cluster: bar.dataset.cluster || '',
    funnel_stage: bar.dataset.funil || '',
    offer_intent: bar.dataset.intencao || '',
    search_intent: bar.dataset.intentBusca || '',
    city: bar.dataset.cidade || '',
    device: window.innerWidth >= LARGURA_MOBILE ? 'desktop' : 'mobile',
    scroll_pct: Math.round(rolagem() * 100),
  });

  let aberta = false;
  let vista = false;
  let encerrada = false;

  function rolagem(): number {
    const alcancavel = document.documentElement.scrollHeight - window.innerHeight;
    if (alcancavel <= 0) return 1;
    return Math.min(1, window.scrollY / alcancavel);
  }

  /** Motivos temporários de recolhimento — a barra volta quando passam. */
  const bloqueios = new Set<string>();

  function aplicar(): void {
    if (encerrada) return;
    const mostrar = aberta && bloqueios.size === 0;
    /*
     * `hidden` acompanha o que está de fato visível.
     *
     * Não basta deslizar a barra para fora da tela: sem `hidden` ela
     * continua na árvore de acessibilidade, e quem navega por leitor de
     * tela encontra um botão que ninguém mais vê — inclusive enquanto o
     * aviso de cookies ainda está aberto. Ao recolher, o atributo só volta
     * depois da animação, senão o elemento some antes de deslizar.
     */
    if (mostrar) {
      bar.hidden = false;
    } else {
      window.setTimeout(() => {
        if (!(aberta && bloqueios.size === 0)) bar.hidden = true;
      }, 300);
    }
    bar.toggleAttribute('data-aberta', mostrar);
    // A altura real vai para o CSS: o botão de WhatsApp sobe sozinho.
    document.documentElement.style.setProperty(
      '--sticky-h',
      mostrar ? `${bar.offsetHeight}px` : '0px',
    );
  }

  function abrir(): void {
    if (aberta || encerrada) return;
    aberta = true;
    aplicar();
    if (!vista) {
      vista = true;
      ev('sticky_view', dados());
    }
  }

  function fechar(): void {
    encerrada = true;
    aberta = false;
    ev('sticky_close', dados());
    bar.toggleAttribute('data-aberta', false);
    document.documentElement.style.setProperty('--sticky-h', '0px');
    grava(CHAVE_FECHADA, '1');
    window.setTimeout(() => {
      bar.hidden = true;
    }, 300);
  }

  bar.querySelector('[data-sticky-fechar]')?.addEventListener('click', fechar);

  bar.querySelector('[data-sticky-link]')?.addEventListener('click', () => {
    ev('sticky_click', dados());
  });

  /* ---- Gatilhos ---- */
  const porTempo = window.setTimeout(abrir, TEMPO_MINIMO_MS);
  const aoRolar = (): void => {
    if (rolagem() >= ROLAGEM_MINIMA) {
      window.clearTimeout(porTempo);
      abrir();
    }
  };
  window.addEventListener('scroll', aoRolar, { passive: true });

  /*
   * ---- Recolhe enquanto o slide-in estiver na tela ----
   *
   * Os dois moram no rodapé e disputariam a mesma atenção. Quem chega
   * depois vence: o slide-in aparece só quando houve leitura de verdade, e
   * é uma sugestão mais específica que a da barra. A barra volta com folga
   * depois que ele sai — o próprio slide-in decide quando avisar.
   */
  document.addEventListener('ppp:slidein', (e) => {
    const aberto = Boolean((e as CustomEvent<{ aberto?: boolean }>).detail?.aberto);
    if (aberto) bloqueios.add('slidein');
    else bloqueios.delete('slidein');
    aplicar();
  });

  /* ---- Recolhe enquanto o aviso de cookies estiver aberto ---- */
  const cookies = document.getElementById('cookie-aviso');
  if (cookies) {
    const verCookies = (): void => {
      if (cookies.hidden) bloqueios.delete('cookies');
      else bloqueios.add('cookies');
      aplicar();
    };
    verCookies();
    if ('MutationObserver' in window) {
      new MutationObserver(verCookies).observe(cookies, {
        attributes: true,
        attributeFilter: ['hidden'],
      });
    }
  }

  /* ---- Recolhe quando o rodapé aparece: ali ela cobriria os links ---- */
  const rodape = document.querySelector('footer');
  if (rodape && 'IntersectionObserver' in window) {
    new IntersectionObserver(
      (entradas) => {
        for (const e of entradas) {
          if (e.isIntersecting) bloqueios.add('rodape');
          else bloqueios.delete('rodape');
        }
        aplicar();
      },
      { threshold: 0 },
    ).observe(rodape);
  }

  /* ---- Recolhe com teclado aberto ou campo em foco ---- */
  const ehCampo = (el: EventTarget | null): boolean =>
    el instanceof HTMLElement && /^(INPUT|TEXTAREA|SELECT)$/.test(el.tagName);
  document.addEventListener(
    'focusin',
    (e) => {
      if (ehCampo(e.target)) {
        bloqueios.add('campo');
        aplicar();
      }
    },
    true,
  );
  document.addEventListener(
    'focusout',
    (e) => {
      if (ehCampo(e.target)) {
        bloqueios.delete('campo');
        aplicar();
      }
    },
    true,
  );

  /* ---- Recolhe com modal aberto (o lightbox de imagem) ---- */
  const lb = document.getElementById('lightbox');
  if (lb && 'MutationObserver' in window) {
    new MutationObserver(() => {
      if (lb.classList.contains('aberto')) bloqueios.add('modal');
      else bloqueios.delete('modal');
      aplicar();
    }).observe(lb, { attributes: true, attributeFilter: ['class', 'hidden'] });
  }
}
