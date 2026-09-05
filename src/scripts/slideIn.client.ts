/**
 * Comportamento do slide-in.
 *
 * O motor decidiu o QUE oferecer. Aqui se decide se vale a pena oferecer —
 * e a resposta padrão é não. Cada regra abaixo existe para tirar
 * impressões, não para somar.
 *
 * GATILHO: as duas condições, nunca uma
 *
 *   rolagem >= 55%  E  tempo ativo >= 35s
 *
 * Tempo sozinho não é engajamento: celular esquecido na mesa acumula
 * minutos. Rolagem sozinha também não: dá para varrer 60% de um artigo em
 * três gestos. Por isso o relógio conta apenas TEMPO ATIVO — para quando a
 * aba sai de foco e retoma quando volta.
 *
 * FREQUÊNCIA
 *   1 por sessão. Fechado, some por 24h (em todas as abas).
 *
 * SILÊNCIOS
 *   já usou alguma ferramenta · aviso de cookies · modal · campo em foco ·
 *   teclado · a própria ferramenta de destino já concluída
 *
 * COORDENAÇÃO
 *   Ao abrir, avisa a sticky bar por evento e ela se recolhe. Ao fechar,
 *   a sticky volta depois de 4s. Os dois nunca dividem a tela.
 */
// Só do módulo de dados: importar do motor arrastaria a base de cidades
// inteira para o bundle do navegador. Ver o comentário em stickyBar.client.
import { sortearVarianteSlide, LETRA_SLIDE, type VarianteSlide } from '../data/slideInMensagens';
import { lerMapa } from './mapaTreino';

type Gtag = (comando: string, evento: string, params?: Record<string, unknown>) => void;

function ev(nome: string, params: Record<string, unknown>): void {
  const g = (window as unknown as { gtag?: Gtag }).gtag;
  if (typeof g === 'function') g('event', nome, params);
}

/* ---- Configuração (tudo aqui, nada espalhado) ---- */
const ROLAGEM_MINIMA = 0.55;
const TEMPO_ATIVO_MINIMO_MS = 35_000;
/** Quanto tempo o slide-in some depois de ser fechado. */
const COOLDOWN_MS = 24 * 60 * 60 * 1000;
/** Espera antes de devolver a sticky bar à tela. */
const RESTAURAR_STICKY_MS = 4000;

const CHAVE_SESSAO = 'ppp-slidein-sessao';
const CHAVE_FECHADO = 'ppp-slidein-fechado';
const CHAVE_VARIANTE = 'ppp-slidein-variante';

const lerSessao = (k: string): string | null => {
  try {
    return sessionStorage.getItem(k);
  } catch {
    return null;
  }
};
const gravarSessao = (k: string, v: string): void => {
  try {
    sessionStorage.setItem(k, v);
  } catch {
    /* modo privado */
  }
};
const lerLocal = (k: string): string | null => {
  try {
    return localStorage.getItem(k);
  } catch {
    return null;
  }
};
const gravarLocal = (k: string, v: string): void => {
  try {
    localStorage.setItem(k, v);
  } catch {
    /* modo privado */
  }
};

function varianteDaSessao(): VarianteSlide {
  const salva = lerSessao(CHAVE_VARIANTE);
  if (salva === 'pergunta' || salva === 'problema' || salva === 'resultado') return salva;
  const nova = sortearVarianteSlide();
  gravarSessao(CHAVE_VARIANTE, nova);
  return nova;
}

/**
 * A pessoa já está na jornada?
 *
 * Quem já concluiu alguma ferramenta não precisa de um convite para
 * começar — e quem já concluiu JUSTAMENTE a ferramenta que este slide-in
 * ofereceria receberia uma sugestão que ela já cumpriu. Nos dois casos o
 * bloco não aparece.
 */
function jaAvancou(destino: string): boolean {
  const mapa = lerMapa();
  if (!mapa) return false;
  const feitas = Object.keys(mapa.concluidas);
  if (!feitas.length) return false;
  const slugDestino = destino.replace(/^\/ferramentas\//, '').replace(/\/$/, '');
  // Concluiu a própria ferramenta oferecida, ou já concluiu qualquer outra:
  // em ambos os casos há coisa melhor a fazer do que este convite.
  return feitas.some((f) => f === slugDestino) || feitas.length > 0;
}

export function iniciarSlideIn(): void {
  const el = document.getElementById('ppp-slidein');
  if (!el) return;

  /* ---- Portas fechadas antes de qualquer trabalho ---- */
  if (lerSessao(CHAVE_SESSAO) === '1') return; // já apareceu nesta sessão
  const fechadoEm = Number(lerLocal(CHAVE_FECHADO) || 0);
  if (fechadoEm && Date.now() - fechadoEm < COOLDOWN_MS) return;

  const destino = el.dataset.destino || '';
  if (jaAvancou(destino)) return;

  const variante = varianteDaSessao();
  const titEl = el.querySelector<HTMLElement>('[data-slidein-tit]');
  const titulo = el.dataset[`t${variante[0].toUpperCase()}${variante.slice(1)}`] || '';
  if (!titEl || !titulo) return;
  titEl.textContent = titulo;

  /* ---- Tempo ATIVO: o relógio para quando a aba sai de foco ---- */
  let ativoMs = 0;
  let ultimo = Date.now();
  let visivel = !document.hidden;
  const tick = (): void => {
    const agora = Date.now();
    if (visivel) ativoMs += agora - ultimo;
    ultimo = agora;
  };
  document.addEventListener('visibilitychange', () => {
    tick();
    visivel = !document.hidden;
  });

  const rolagem = (): number => {
    const alcancavel = document.documentElement.scrollHeight - window.innerHeight;
    if (alcancavel <= 0) return 1;
    return Math.min(1, window.scrollY / alcancavel);
  };

  const dados = (): Record<string, unknown> => ({
    variant: variante,
    variant_ab: LETRA_SLIDE[variante],
    campaign: el.dataset.regra || '',
    campaign_block: el.dataset.bloco || '',
    message: titEl.textContent || '',
    offer_destination: destino,
    page_type: el.dataset.pageType || '',
    page_title: el.dataset.tituloArtigo || '',
    cluster: el.dataset.cluster || '',
    subcluster: el.dataset.subcluster || '',
    offer_intent: el.dataset.intencao || '',
    search_intent: el.dataset.intentBusca || '',
    funnel_stage: el.dataset.funil || '',
    scroll_pct: Math.round(rolagem() * 100),
    time_on_page: Math.round(ativoMs / 1000),
    device: window.innerWidth >= 768 ? 'desktop' : 'mobile',
  });

  let aberto = false;
  let encerrado = false;
  let elegivelAvisado = false;

  /** Motivos que impedem a exibição agora, mas podem passar. */
  const bloqueios = new Set<string>();

  const avisarSticky = (aberto: boolean): void => {
    document.dispatchEvent(new CustomEvent('ppp:slidein', { detail: { aberto } }));
  };

  function abrir(): void {
    if (aberto || encerrado || bloqueios.size) return;
    aberto = true;
    gravarSessao(CHAVE_SESSAO, '1');
    // A sticky bar recolhe antes de o slide-in entrar: as duas nunca
    // aparecem juntas na tela.
    avisarSticky(true);
    document.documentElement.setAttribute('data-slidein', 'aberto');
    el.hidden = false;
    // Força um frame antes da classe, senão a transição não roda.
    requestAnimationFrame(() => el.setAttribute('data-aberto', ''));
    ev('slidein_view', dados());
  }

  function fechar(motivo: 'usuario' | 'clique'): void {
    if (!aberto || encerrado) return;
    encerrado = true;
    aberto = false;
    if (motivo === 'usuario') {
      ev('slidein_close', dados());
      gravarLocal(CHAVE_FECHADO, String(Date.now()));
    }
    el.removeAttribute('data-aberto');
    document.documentElement.removeAttribute('data-slidein');
    window.setTimeout(() => {
      el.hidden = true;
    }, 320);
    // A sticky bar volta com folga, para a tela não piscar de um
    // componente para o outro.
    window.setTimeout(() => avisarSticky(false), RESTAURAR_STICKY_MS);
  }

  el.querySelector('[data-slidein-fechar]')?.addEventListener('click', () => fechar('usuario'));
  el.querySelector('[data-slidein-link]')?.addEventListener('click', () => {
    ev('slidein_click', dados());
    fechar('clique');
  });
  // Esc fecha — comportamento esperado de qualquer coisa que se sobrepõe.
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && aberto) fechar('usuario');
  });

  /* ---- Verificação do gatilho ---- */
  function verificar(): void {
    if (aberto || encerrado) return;
    tick();
    const pronto = rolagem() >= ROLAGEM_MINIMA && ativoMs >= TEMPO_ATIVO_MINIMO_MS;
    if (!pronto) return;
    if (!elegivelAvisado) {
      elegivelAvisado = true;
      ev('slidein_eligible', dados());
    }
    abrir();
  }

  const relogio = window.setInterval(() => {
    if (encerrado) {
      window.clearInterval(relogio);
      return;
    }
    verificar();
  }, 1000);
  window.addEventListener('scroll', verificar, { passive: true });

  /* ---- Supressões ---- */
  const bloquear = (chave: string, ativo: boolean): void => {
    if (ativo) bloqueios.add(chave);
    else bloqueios.delete(chave);
    if (ativo && aberto) fechar('clique'); // some sem registrar dispensa
  };

  /*
   * Próximo passo calculado na tela: o slide-in cala. Hoje ele não roda em
   * página de ferramenta — os BLOCOS são só editoriais —, mas nada no código
   * garantia isso quando um bloco novo abrisse. Garante agora.
   */
  document.addEventListener('ppp:resultado', () => bloquear('resultado', true));

  const cookies = document.getElementById('cookie-aviso');
  if (cookies) {
    const ver = (): void => bloquear('cookies', !cookies.hidden);
    ver();
    new MutationObserver(ver).observe(cookies, { attributes: true, attributeFilter: ['hidden'] });
  }

  const lb = document.getElementById('lightbox');
  if (lb) {
    new MutationObserver(() => bloquear('modal', lb.classList.contains('aberto'))).observe(lb, {
      attributes: true,
      attributeFilter: ['class', 'hidden'],
    });
  }

  const ehCampo = (t: EventTarget | null): boolean =>
    t instanceof HTMLElement && /^(INPUT|TEXTAREA|SELECT)$/.test(t.tagName);
  document.addEventListener('focusin', (e) => ehCampo(e.target) && bloquear('campo', true), true);
  document.addEventListener('focusout', (e) => ehCampo(e.target) && bloquear('campo', false), true);
}
