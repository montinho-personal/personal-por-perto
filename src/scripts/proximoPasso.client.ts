/**
 * proximoPasso.client — renderiza a decisão do motor no fim do resultado.
 *
 * Este arquivo NÃO decide nada. Ele registra a etapa no mapa, pergunta ao
 * motor o que fazer, desenha o que voltou e mede. Toda regra mora em
 * `src/lib/proximoPasso.ts`; se aparecer um `if` de negócio aqui, ele está no
 * lugar errado.
 *
 * TRÊS COISAS QUE ESTE ARQUIVO FAZ E O ANTERIOR NÃO FAZIA
 *
 * 1. Renderiza UM bloco. Antes havia dois — o próximo passo da própria
 *    ferramenta e o bloco de jornada —, deduplicados por comparação de URL,
 *    o que pegava a repetição literal e deixava passar duas ofertas
 *    concorrentes apontando para lugares diferentes.
 *
 * 2. Desenha o silêncio. Quando o motor responde que não há próximo passo
 *    útil, a tela não fica órfã: entra o fechamento, sem botão. "Nenhum CTA"
 *    é uma resposta, não a ausência de uma.
 *
 * 3. Mede a impressão sem clique. `next_action_suppressed` e a contagem de
 *    ignorados existem para responder a pergunta que o portal não conseguia
 *    responder: o CTA não converteu, ou nem chegou a aparecer?
 */
import {
  getProximaAcao,
  ehAcao,
  type ContextoSessao,
  type RelatoFerramenta,
} from '../lib/proximoPasso';
import { totalConcluidas, type FerramentaId, type Mapa } from '../lib/jornada';
import { registrar } from './mapaTreino';
import { rotas } from '../lib/links';

type Gtag = (c: string, e: string, p?: Record<string, unknown>) => void;

function ev(nome: string, params?: Record<string, unknown>): void {
  const g = (window as unknown as { gtag?: Gtag }).gtag;
  if (typeof g === 'function') g('event', nome, params || {});
}

function el<K extends keyof HTMLElementTagNameMap>(
  t: K,
  c?: string,
  x?: string,
): HTMLElementTagNameMap[K] {
  const n = document.createElement(t);
  if (c) n.className = c;
  if (x) n.textContent = x;
  return n;
}

/* ------------------------------------------------------------------ *
 * Memória curta da sessão
 * ------------------------------------------------------------------ */

const CHAVE_SESSAO = 'ppp-sessao';

/**
 * `sessionStorage`, não `localStorage`: o que a pessoa ignorou hoje não deve
 * calar a oferta para sempre. Some quando a aba fecha, de propósito.
 *
 * Toda leitura e escrita é tolerante a falha — modo privado e cota estourada
 * devolvem sessão vazia, e o bloco continua funcionando.
 */
function lerSessao(): ContextoSessao {
  try {
    const bruto = sessionStorage.getItem(CHAVE_SESSAO);
    if (!bruto) return {};
    const d = JSON.parse(bruto) as ContextoSessao;
    return d && typeof d === 'object' ? d : {};
  } catch {
    return {};
  }
}

function gravarSessao(s: ContextoSessao): void {
  try {
    sessionStorage.setItem(CHAVE_SESSAO, JSON.stringify(s));
  } catch {
    /* modo privado ou armazenamento desligado */
  }
}

function atualizarSessao(f: (s: ContextoSessao) => void): void {
  const s = lerSessao();
  f(s);
  gravarSessao(s);
}

/* ------------------------------------------------------------------ *
 * Coordenação com as outras superfícies
 * ------------------------------------------------------------------ */

/**
 * Avisa sticky bar e slide-in que existe um próximo passo calculado na tela.
 *
 * A barra oferece a etapa seguinte da jornada sem saber o resultado; o bloco
 * daqui sabe. Entre uma sugestão informada e uma genérica disputando a mesma
 * atenção, a genérica sai.
 */
function silenciarOutrasSuperficies(): void {
  document.dispatchEvent(new CustomEvent('ppp:resultado', { detail: { ativo: true } }));
}

/* ------------------------------------------------------------------ *
 * Render
 * ------------------------------------------------------------------ */

export interface OpcoesProximoPasso {
  /** Destino da ação comercial. Sem isto, consultoria nunca é oferecida. */
  urlConsultoria?: string;
}

/**
 * Registra a etapa, pergunta ao motor e anexa o bloco ao container.
 *
 * Substitui `anexarContinuidade()` nas ferramentas migradas. As não migradas
 * seguem chamando a versão antiga — a camada é aditiva, como sempre foi.
 */
export function anexarProximoPasso(
  container: HTMLElement,
  relato: RelatoFerramenta,
  opcoes: OpcoesProximoPasso = {},
): void {
  const mapa = registrar(relato.ferramenta, relato.perfil ?? {});
  const sessao = lerSessao();

  ev('journey_step_completed', {
    tool: relato.ferramenta,
    steps_completed: totalConcluidas(mapa),
  });

  ev('tool_result_view', {
    tool_id: relato.ferramenta,
    result_type: relato.tipoResultado,
    result_bucket: relato.nivel,
    axis: relato.eixo,
  });

  const decisao = getProximaAcao({
    relato,
    mapa,
    sessao,
    urlConsultoria: opcoes.urlConsultoria ?? rotas.montinho,
  });

  // A ferramenta atual conta como concluída nesta sessão a partir de agora —
  // depois de decidir, para não se auto-suprimir.
  atualizarSessao((s) => {
    const lista = new Set<FerramentaId>(s.concluidasAgora ?? []);
    lista.add(relato.ferramenta);
    s.concluidasAgora = [...lista];
  });

  garantirCss();

  if (!ehAcao(decisao)) {
    ev('next_action_suppressed', decisao.analytics);
    container.appendChild(fechamento(decisao.fechamento, decisao.ressalva, mapa));
    silenciarOutrasSuperficies();
    return;
  }

  ev('next_action_generated', decisao.analytics);

  if (decisao.tipo === 'consultoria') {
    atualizarSessao((s) => {
      s.consultoriaOfertada = true;
    });
  }

  /* A impressão e o clique são medidos mais abaixo; declarados aqui porque os
   * ouvintes de clique fecham sobre eles. */
  let visto = false;
  let clicado = false;

  const raiz = el('section', `pp pp--${decisao.tipo}`);
  raiz.setAttribute('aria-label', 'Próximo passo');
  raiz.dataset.regra = decisao.regra;

  const topo = el('div', 'pp-topo');
  topo.appendChild(el('span', 'pp-check', 'Etapa concluída ✓'));
  const total = totalConcluidas(mapa);
  topo.appendChild(
    el('span', 'pp-contagem', total === 1 ? '1 etapa no seu mapa' : `${total} etapas no seu mapa`),
  );
  raiz.appendChild(topo);

  raiz.appendChild(el('p', 'pp-rotulo', 'Seu próximo passo'));
  raiz.appendChild(el('h3', 'pp-titulo', decisao.titulo));
  if (decisao.texto) raiz.appendChild(el('p', 'pp-texto', decisao.texto));

  const btn = el('a', 'btn btn-primary pp-btn', `${decisao.cta.rotulo} →`);
  btn.href = decisao.cta.url;
  btn.addEventListener('click', () => {
    clicado = true;
    ev('post_tool_cta_click', decisao.analytics);
  });
  raiz.appendChild(btn);

  if (decisao.secundario) {
    const sec = el('a', 'pp-secundario', decisao.secundario.rotulo);
    sec.href = decisao.secundario.url;
    sec.addEventListener('click', () => {
      clicado = true;
      ev('post_tool_secondary_click', {
        ...decisao.analytics,
        destination: decisao.secundario!.url,
      });
    });
    raiz.appendChild(sec);
  }

  // A explicação é do leitor, não do desenvolvedor: por que este passo, e
  // não outro. Um motor que não consegue dizer isso não deveria decidir.
  raiz.appendChild(el('p', 'pp-porque', decisao.porque));

  if (decisao.ressalva) raiz.appendChild(el('p', 'pp-ressalva', decisao.ressalva));

  const mapaLink = el('a', 'pp-mapa-link', 'Ou veja o seu mapa completo');
  mapaLink.href = rotas.ferramentas;
  mapaLink.addEventListener('click', () => ev('personal_map_opened', { from_step: total }));
  raiz.appendChild(mapaLink);

  container.appendChild(raiz);
  silenciarOutrasSuperficies();

  /* ---- Impressão e desistência ---- */
  const io = new IntersectionObserver(
    (entradas) => {
      for (const e of entradas) {
        if (!e.isIntersecting || visto) continue;
        visto = true;
        ev('post_tool_cta_view', decisao.analytics);
        io.disconnect();
      }
    },
    { threshold: 0.5 },
  );
  io.observe(raiz);

  /*
   * Apareceu e não foi clicado: a regra ganha um ponto de cansaço. Duas
   * impressões sem clique e ela some pelo resto da sessão — é o que impede a
   * mesma oferta de perseguir a pessoa em três ferramentas seguidas.
   */
  const contabilizar = (): void => {
    if (!visto || clicado) return;
    visto = false;
    atualizarSessao((s) => {
      s.ignorados = s.ignorados ?? {};
      s.ignorados[decisao.regra] = (s.ignorados[decisao.regra] ?? 0) + 1;
    });
  };
  window.addEventListener('pagehide', contabilizar, { once: true });
}

/** Bloco de fechamento: quando a resposta certa é não oferecer nada. */
function fechamento(texto: string, ressalva: string | undefined, mapa: Mapa): HTMLElement {
  const raiz = el('section', 'pp pp--fim');
  raiz.setAttribute('aria-label', 'Conclusão');

  const topo = el('div', 'pp-topo');
  topo.appendChild(el('span', 'pp-check', 'Etapa concluída ✓'));
  const total = totalConcluidas(mapa);
  topo.appendChild(
    el('span', 'pp-contagem', total === 1 ? '1 etapa no seu mapa' : `${total} etapas no seu mapa`),
  );
  raiz.appendChild(topo);

  raiz.appendChild(el('p', 'pp-texto', texto));
  if (ressalva) raiz.appendChild(el('p', 'pp-ressalva', ressalva));

  const link = el('a', 'pp-mapa-link', 'Ver o meu mapa completo');
  link.href = rotas.ferramentas;
  link.addEventListener('click', () => ev('personal_map_opened', { from_step: total }));
  raiz.appendChild(link);

  return raiz;
}

/* ------------------------------------------------------------------ *
 * Estilos — injetados uma vez, porque o bloco nasce via JS
 * ------------------------------------------------------------------ */

const CSS = `
.pp {
  margin-top: var(--sp-6);
  border: 2px solid var(--brand-600);
  border-radius: var(--radius);
  padding: var(--sp-5);
  background: var(--bg-tint);
}
.pp-topo {
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  gap: var(--sp-3);
  margin-bottom: var(--sp-4);
}
.pp-check {
  background: #1f8a54;
  color: #fff;
  font-size: var(--step--1);
  font-weight: 800;
  border-radius: 999px;
  padding: 0.25rem 0.8rem;
}
.pp-contagem { font-size: var(--step--1); color: var(--muted); font-weight: 600; }
.pp-rotulo {
  font-size: var(--step--1);
  font-weight: 800;
  letter-spacing: 0.06em;
  text-transform: uppercase;
  color: var(--brand-700);
}
.pp-titulo { margin-top: 0.2rem; font-size: var(--step-1); line-height: 1.25; }
.pp-texto { margin-top: var(--sp-3); line-height: 1.65; color: var(--ink-soft); }
.pp-btn { margin-top: var(--sp-4); }
.pp-secundario {
  display: inline-block;
  margin: var(--sp-3) 0 0 var(--sp-4);
  font-weight: 600;
  color: var(--brand-600);
}
.pp-porque {
  margin-top: var(--sp-4);
  font-size: var(--step--1);
  color: var(--muted);
  line-height: 1.6;
}
.pp-ressalva {
  margin-top: var(--sp-3);
  padding: var(--sp-3);
  background: #fff;
  border-left: 4px solid var(--accent);
  border-radius: var(--radius);
  font-size: var(--step--1);
  line-height: 1.6;
  color: var(--ink-soft);
}
.pp-mapa-link {
  display: inline-block;
  margin-top: var(--sp-3);
  font-size: var(--step--1);
  color: var(--brand-600);
  font-weight: 600;
}
/* Sem CTA: sem a moldura que chama atenção. */
.pp--fim {
  border-width: 1px;
  border-color: var(--line);
  background: #fff;
}
.pp--fim .pp-topo { margin-bottom: var(--sp-3); }
@media (max-width: 480px) {
  .pp-secundario { display: block; margin-left: 0; }
}
`;

let cssInjetado = false;

function garantirCss(): void {
  if (cssInjetado) return;
  const s = document.createElement('style');
  s.textContent = CSS;
  document.head.appendChild(s);
  cssInjetado = true;
}
