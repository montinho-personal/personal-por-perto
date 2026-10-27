/**
 * Interface da calculadora de tempo do Hyrox.
 *
 * Dois modos — "tenho uma meta" (meta → pace) e "sei o meu pace" (pace →
 * tempo final) — com o mesmo campo de estações. Estações em branco não é
 * erro: a conta usa a proporção do estudo com atletas amadores e diz isso no
 * resultado. O resultado aparece enquanto a pessoa digita.
 *
 * O dataLayer recebe só categorias (modo, faixa da meta), nunca o tempo nem
 * o pace exatos.
 */
import { paceDosCampos, parseInteiro } from '../lib/corrida/pace';
import {
  estacoesPelaMeta,
  estacoesPeloPace,
  faixaMeta,
  formataPace,
  formataTempo,
  formataTempoExtenso,
  frasePlano,
  paceParaMeta,
  tempoPeloPace,
  type Plano,
} from '../lib/corrida/tempoHyrox';
import { whatsappUrl } from '../lib/links';

const $ = <T extends HTMLElement>(sel: string): T | null => document.querySelector<T>(sel);

type Modo = 'meta' | 'pace';

export function iniciarCalculadoraTempoHyrox(): void {
  if (!$('#th-app')) return;

  const metaH = $<HTMLInputElement>('#th-meta-h')!;
  const metaM = $<HTMLInputElement>('#th-meta-m')!;
  const paceM = $<HTMLInputElement>('#th-pace-m')!;
  const paceS = $<HTMLInputElement>('#th-pace-s')!;
  const estacoes = $<HTMLInputElement>('#th-estacoes')!;
  const queda = $<HTMLInputElement>('#th-queda')!;
  const saida = $<HTMLElement>('#th-saida')!;
  const erro = $<HTMLElement>('#th-erro')!;

  let modo: Modo = 'meta';
  let comecou = false;

  function evento(nome: string, extra: Record<string, string | number> = {}): void {
    const w = window as unknown as { dataLayer?: unknown[] };
    w.dataLayer = w.dataLayer || [];
    w.dataLayer.push({ event: nome, tool: 'calculadora-tempo-hyrox', ...extra });
  }

  function desenhaModo(): void {
    document.querySelectorAll<HTMLButtonElement>('.th-modo').forEach((b) => {
      const ativo = b.dataset.modo === modo;
      b.classList.toggle('is-ativo', ativo);
      b.setAttribute('aria-pressed', String(ativo));
    });
    document.querySelectorAll<HTMLElement>('[data-so]').forEach((el) => {
      el.hidden = el.dataset.so !== modo;
    });
  }

  function falha(msg: string, silencioso = false): void {
    saida.hidden = true;
    erro.hidden = silencioso;
    erro.textContent = silencioso ? '' : msg;
  }

  /** Minutos das estações; em branco = proporção do estudo (null). */
  function lerEstacoes(): number | null | 'invalido' {
    const s = estacoes.value.trim();
    if (!s) return null;
    const n = parseInteiro(s, 999);
    return n === null ? 'invalido' : n * 60;
  }

  function calcula(): void {
    const est = lerEstacoes();
    if (est === 'invalido') return falha('Informe as estações em minutos inteiros, como 35.');
    let r;
    const pelaProporcao = est === null;
    if (modo === 'meta') {
      if (!metaH.value.trim() && !metaM.value.trim()) return falha('', true);
      const h = parseInteiro(metaH.value, 9);
      const m = parseInteiro(metaM.value, h === 0 ? 999 : 59);
      if (h === null || m === null) return falha('Informe a meta em horas e minutos, como 1 h 30 min.');
      const metaS = h * 3600 + m * 60;
      r = paceParaMeta(metaS, est ?? estacoesPelaMeta(metaS), queda.checked);
    } else {
      if (!paceM.value.trim() && !paceS.value.trim()) return falha('', true);
      const p = paceDosCampos(paceM.value, paceS.value);
      if (p === null) return falha('Informe o pace em minutos e segundos por km, como 6:30.');
      r = tempoPeloPace(p, est ?? estacoesPeloPace(p), queda.checked);
    }
    if (!r.ok) return falha(r.mensagem);
    if (!comecou) {
      comecou = true;
      evento('calculator_started', { mode: modo });
    }
    desenha(r, pelaProporcao);
    evento('calculator_completed', { mode: modo, range: faixaMeta(r.tempoFinal), fade: r.comQueda ? 'yes' : 'no', stations: pelaProporcao ? 'study' : 'own' });
  }

  function desenha(p: Plano, pelaProporcao: boolean): void {
    erro.hidden = true;
    saida.hidden = false;
    const set = (sel: string, txt: string) => {
      const el = saida.querySelector(sel);
      if (el) el.textContent = txt;
    };
    if (modo === 'meta') {
      set('.th-numero', formataPace(p.pace));
      set('.th-unidade', 'por km, em média');
    } else {
      set('.th-numero', formataTempo(p.tempoFinal));
      set('.th-unidade', 'de tempo final');
    }
    set('.th-frase', frasePlano(p));
    set(
      '.th-origem',
      pelaProporcao
        ? `Estações e transições: ${formataTempoExtenso(p.estacoes)}, pela proporção do estudo com atletas amadores. Se você já sabe o seu tempo nas estações, digite no campo acima.`
        : '',
    );
    set('.th-d-corrida', formataTempo(p.corrida));
    set('.th-d-estacoes', formataTempo(p.estacoes));
    set('.th-d-por', formataTempo(p.porEstacao));
    set('.th-d-kmh', `${p.kmh.toLocaleString('pt-BR', { maximumFractionDigits: 1 })} km/h`);
    set(
      '.th-queda-nota',
      p.comQueda
        ? `Com a queda de ritmo, a 1ª corrida sai a ${formataPace(p.pacePrimeira)} por km e a 8ª a ${formataPace(p.paceUltima)}.`
        : '',
    );

    const corpo = saida.querySelector<HTMLTableSectionElement>('.th-parciais tbody');
    if (corpo) {
      corpo.replaceChildren(
        ...p.parciais.map((x) => {
          const tr = document.createElement('tr');
          if (x.tipo === 'estacao') tr.className = 'th-estacao';
          const th = document.createElement('th');
          th.scope = 'row';
          th.textContent = x.nome;
          const td1 = document.createElement('td');
          td1.textContent = formataTempo(x.duracao);
          const td2 = document.createElement('td');
          td2.textContent = x.pace ? formataPace(x.pace) : '—';
          const td3 = document.createElement('td');
          td3.textContent = formataTempo(x.acumulado);
          tr.append(th, td1, td2, td3);
          return tr;
        }),
      );
    }

    const link = saida.querySelector<HTMLAnchorElement>('.th-whats');
    if (link) {
      link.href = whatsappUrl(
        `Oi, Montinho! Vim pela calculadora de tempo do Hyrox do Personal por Perto. Quero fazer a prova em ${formataTempo(p.tempoFinal)} e queria saber sobre a preparação.`,
      );
    }
  }

  document.querySelectorAll<HTMLButtonElement>('.th-modo').forEach((b) => {
    b.addEventListener('click', () => {
      modo = (b.dataset.modo as Modo) ?? modo;
      desenhaModo();
      evento('calculator_mode_changed', { mode: modo });
      calcula();
    });
  });
  [metaH, metaM, paceM, paceS, estacoes].forEach((el) => el.addEventListener('input', calcula));
  queda.addEventListener('change', calcula);

  evento('calculator_view');
  desenhaModo();
  calcula();
}
