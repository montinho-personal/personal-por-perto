/**
 * Camada de jornada compartilhada pelas ferramentas.
 *
 * Cada ferramenta chama `concluirEtapa()` quando entrega o resultado. Esta
 * função faz três coisas: grava o que foi descoberto no mapa local, dispara
 * o evento de analytics da etapa e devolve o bloco de continuidade — a
 * ponte narrativa que liga o que a pessoa acabou de descobrir ao passo
 * seguinte.
 *
 * O bloco NÃO substitui o próximo passo próprio de cada ferramenta. As duas
 * coisas respondem a perguntas diferentes: o passo da ferramenta resolve o
 * achado específico daquele resultado ("seu treino não cabe na semana →
 * remonte a semana"); este resolve a jornada ("você já organizou a semana,
 * falta avaliar o treino"). Quando os dois apontam para o mesmo lugar, o
 * bloco encolhe para a confirmação de progresso, sem repetir o botão.
 */
import {
  proximoPasso,
  totalConcluidas,
  type FerramentaId,
  type Mapa,
  type PerfilMapa,
} from '../lib/jornada';
import { registrar } from './mapaTreino';

type Gtag = (c: string, e: string, p?: Record<string, unknown>) => void;
export function evJornada(nome: string, params?: Record<string, unknown>): void {
  const g = (window as unknown as { gtag?: Gtag }).gtag;
  if (typeof g === 'function') g('event', nome, params || {});
}

function el<K extends keyof HTMLElementTagNameMap>(t: K, c?: string, x?: string): HTMLElementTagNameMap[K] {
  const n = document.createElement(t);
  if (c) n.className = c;
  if (x) n.textContent = x;
  return n;
}

/**
 * Registra a etapa e devolve o bloco de continuidade — ou `null` quando não
 * há próximo passo útil, ou quando ele repetiria o botão que a própria
 * ferramenta já mostrou.
 *
 * @param urlJaOferecida URL do próximo passo próprio da ferramenta, para
 *                       evitar oferecer duas vezes o mesmo destino.
 */
export function concluirEtapa(
  id: FerramentaId,
  perfil: PerfilMapa,
  urlJaOferecida?: string,
): HTMLElement | null {
  const mapa = registrar(id, perfil);

  evJornada('journey_step_completed', {
    tool: id,
    steps_completed: totalConcluidas(mapa),
  });

  return blocoContinuidade(mapa, urlJaOferecida);
}

function blocoContinuidade(mapa: Mapa, urlJaOferecida?: string): HTMLElement | null {
  const passo = proximoPasso(mapa);
  const total = totalConcluidas(mapa);

  /*
   * Quando o próximo passo da jornada coincide com o que a própria
   * ferramenta já ofereceu, o botão seria duplicado — mas calar o bloco
   * inteiro custaria o feedback de progresso, que é o que dá sentido à
   * jornada. A saída é a versão reduzida: confirmação, contagem e o mapa.
   */
  const duplicado = Boolean(passo && urlJaOferecida && passo.ferramenta.url === urlJaOferecida);

  if (!passo || duplicado) {
    const curto = el('section', 'jc jc--curto');
    curto.setAttribute('aria-label', 'Progresso na jornada');
    const t = el('div', 'jc-topo');
    t.appendChild(el('span', 'jc-check', 'Etapa concluída ✓'));
    t.appendChild(
      el('span', 'jc-contagem', total === 1 ? '1 etapa no seu mapa' : `${total} etapas no seu mapa`),
    );
    curto.appendChild(t);
    curto.appendChild(
      el(
        'p',
        'jc-porque',
        passo
          ? 'O próximo passo sugerido é o mesmo botão logo acima — ele já resolve o que apareceu aqui.'
          : 'Você percorreu todas as etapas do mapa. Daqui em diante, o que rende é executar e revisar de tempos em tempos.',
      ),
    );
    const link = el('a', 'jc-mapa-link', 'Ver o meu mapa completo');
    link.href = '/ferramentas/';
    link.addEventListener('click', () => evJornada('personal_map_opened', { from_step: total }));
    curto.appendChild(link);
    return curto;
  }

  const raiz = el('section', 'jc');
  raiz.setAttribute('aria-label', 'Continuidade da jornada');

  const topo = el('div', 'jc-topo');
  topo.appendChild(el('span', 'jc-check', 'Etapa concluída ✓'));
  topo.appendChild(
    el('span', 'jc-contagem', total === 1 ? '1 etapa no seu mapa' : `${total} etapas no seu mapa`),
  );
  raiz.appendChild(topo);

  raiz.appendChild(el('p', 'jc-rotulo', 'Seu próximo passo'));
  raiz.appendChild(el('h3', 'jc-titulo', passo.ferramenta.nome));
  raiz.appendChild(el('p', 'jc-porque', passo.porque));

  const btn = el('a', 'btn btn-primary jc-btn', `${passo.rotulo} →`);
  btn.href = passo.ferramenta.url;
  btn.addEventListener('click', () =>
    evJornada('next_step_clicked', {
      from_step: total,
      next_tool: passo.ferramenta.id,
      next_stage: passo.etapa.id,
    }),
  );
  raiz.appendChild(btn);

  const mapaLink = el('a', 'jc-mapa-link', 'Ou veja o seu mapa completo');
  mapaLink.href = '/ferramentas/';
  mapaLink.addEventListener('click', () => evJornada('personal_map_opened', { from_step: total }));
  raiz.appendChild(mapaLink);

  return raiz;
}

/** Estilos do bloco. Injetados uma vez, porque o bloco nasce via JS. */
export const CSS_JORNADA = `
.jc {
  margin-top: var(--sp-6);
  border: 2px solid var(--brand-600);
  border-radius: var(--radius);
  padding: var(--sp-5);
  background: var(--bg-tint);
}
.jc-topo {
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  gap: var(--sp-3);
  margin-bottom: var(--sp-4);
}
.jc-check {
  background: #1f8a54;
  color: #fff;
  font-size: var(--step--1);
  font-weight: 800;
  border-radius: 999px;
  padding: 0.25rem 0.8rem;
}
.jc-contagem { font-size: var(--step--1); color: var(--muted); font-weight: 600; }
.jc-rotulo {
  font-size: var(--step--1);
  font-weight: 800;
  letter-spacing: 0.06em;
  text-transform: uppercase;
  color: var(--brand-700);
}
.jc-titulo { margin-top: 0.2rem; font-size: var(--step-1); line-height: 1.25; }
.jc-porque { margin-top: var(--sp-3); line-height: 1.65; color: var(--ink-soft); }
.jc-btn { margin-top: var(--sp-4); }
.jc-mapa-link {
  display: inline-block;
  margin-top: var(--sp-3);
  font-size: var(--step--1);
  color: var(--brand-600);
  font-weight: 600;
}
/* Versão reduzida: sem CTA, então sem a moldura que chama atenção. */
.jc--curto {
  border-width: 1px;
  border-color: var(--line);
  background: #fff;
}
.jc--curto .jc-topo { margin-bottom: var(--sp-3); }
`;

let cssInjetado = false;

/** Garante o CSS do bloco, sem duplicar quando a pessoa refaz o quiz. */
export function garantirCssJornada(): void {
  if (cssInjetado) return;
  const s = document.createElement('style');
  s.textContent = CSS_JORNADA;
  document.head.appendChild(s);
  cssInjetado = true;
}

/**
 * Atalho usado pelas ferramentas: registra, garante o CSS e anexa o bloco
 * ao container do resultado, se houver próximo passo.
 */
export function anexarContinuidade(
  container: HTMLElement,
  id: FerramentaId,
  perfil: PerfilMapa,
  urlJaOferecida?: string,
): void {
  const bloco = concluirEtapa(id, perfil, urlJaOferecida);
  if (!bloco) return;
  garantirCssJornada();
  container.appendChild(bloco);
}
