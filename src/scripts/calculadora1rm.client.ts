/**
 * Interface da calculadora de 1RM.
 *
 * Dois modos: estimar o 1RM por uma série, ou partir de um 1RM conhecido
 * para a carga de um número de repetições. A tabela de carga por
 * repetições aparece nos dois — no segundo, com a linha pedida destacada.
 *
 * As notas de exercício e de repetições altas ficam abaixo do resultado:
 * nada acima dos campos muda de altura quando elas aparecem.
 *
 * Nada vai para a URL. O WhatsApp leva só o resultado, nunca a carga da
 * série — não é dado sensível, mas não há motivo para levar.
 */
import {
  CARGA_MAX,
  CARGA_MIN,
  NOTA_REPS_ALTAS,
  REPS_CONFIAVEL,
  REPS_MAX,
  REPS_MIN,
  cargaPara,
  cargaValida,
  estimar,
  exercicio,
  formataFaixaKg,
  formataFaixaPct,
  formataKg,
  formataReps,
  fraseEstimativa,
  parseNumero,
  repsValidas,
  tabela,
} from '../lib/forca/umRm';
import { whatsappUrl } from '../lib/links';
import { focoSemSalto } from './focoSemSalto';

type Modo = 'estimar' | 'conhecido';

const $ = <T extends HTMLElement>(sel: string): T | null => document.querySelector<T>(sel);

export function iniciarCalculadora1rm(): void {
  if (!$('#rm-app')) return;

  const carga = $<HTMLInputElement>('#rm-carga')!;
  const reps = $<HTMLInputElement>('#rm-reps')!;
  const um = $<HTMLInputElement>('#rm-um')!;
  const alvo = $<HTMLInputElement>('#rm-alvo')!;
  const saida = $<HTMLElement>('#rm-saida')!;
  const erro = $<HTMLElement>('#rm-erro')!;
  const primeiroCampo: Record<Modo, HTMLInputElement> = { estimar: carga, conhecido: um };

  let modo: Modo = 'estimar';
  let idExercicio = 'supino';
  let rir = 0;
  let comecou = false;

  function evento(nome: string, extra: Record<string, string | number> = {}): void {
    const w = window as unknown as { dataLayer?: unknown[] };
    w.dataLayer = w.dataLayer || [];
    w.dataLayer.push({ event: nome, tool: 'calculadora-1rm', ...extra });
  }

  function marca(seletor: string, atributo: string, valor: string): void {
    document.querySelectorAll<HTMLButtonElement>(seletor).forEach((b) => {
      const ativo = b.dataset[atributo] === valor;
      b.classList.toggle('is-ativo', ativo);
      b.setAttribute('aria-pressed', String(ativo));
    });
  }

  function trocaModo(novo: Modo): void {
    if (novo === modo) return;
    modo = novo;
    document.querySelectorAll<HTMLElement>('.rm-bloco-modo').forEach((b) => {
      b.hidden = b.dataset.bloco !== novo;
    });
    document.querySelectorAll<HTMLButtonElement>('.rm-modo').forEach((b) => {
      const ativo = b.dataset.modo === novo;
      b.classList.toggle('is-ativo', ativo);
      b.setAttribute('aria-selected', String(ativo));
      b.tabIndex = ativo ? 0 : -1;
    });
    evento('calculator_mode_changed', { mode: novo });
    focoSemSalto(primeiroCampo[novo]);
    calcula();
  }

  /** Campo em branco não é erro: é alguém que ainda não digitou. */
  function falha(msg: string, silencioso = false): void {
    saida.hidden = true;
    erro.hidden = silencioso;
    erro.textContent = silencioso ? '' : msg;
  }

  const set = (sel: string, txt: string) => {
    const el = saida.querySelector(sel);
    if (el) el.textContent = txt;
  };

  function desenhaTabela(rm: number, destaque: number | null): void {
    const linhas = tabela(rm);
    saida.querySelectorAll<HTMLTableRowElement>('.rm-tabela-app tbody tr').forEach((tr, i) => {
      const l = linhas[i];
      if (!l) return;
      tr.querySelector('.rm-t-pct')!.textContent = formataFaixaPct(l.pctMin, l.pctMax);
      tr.querySelector('.rm-t-kg')!.textContent = `${formataFaixaKg(l.min, l.max)} kg`;
      tr.classList.toggle('is-alvo', destaque !== null && l.reps === destaque);
    });
    set(
      '.rm-tabela-caption',
      modo === 'estimar'
        ? 'Carga por número de repetições, para o seu 1RM estimado'
        : `Carga por número de repetições até a falha, para 1RM de ${formataKg(rm)} kg`,
    );
  }

  function calcula(): void {
    if (modo === 'estimar') {
      const c = parseNumero(carga.value);
      if (!cargaValida(c)) return falha(`Informe uma carga entre ${CARGA_MIN} e ${CARGA_MAX} kg.`, !carga.value.trim());
      const r = parseNumero(reps.value);
      if (!repsValidas(r))
        return falha(`Informe as repetições como número inteiro, de ${REPS_MIN} a ${REPS_MAX}.`, !reps.value.trim());
      if (r + rir > REPS_MAX)
        return falha(`Repetições feitas mais as da reserva passam de ${REPS_MAX}: use uma série mais pesada para estimar.`);
      const e = estimar(c, r, rir, idExercicio);
      mostra();
      set('.rm-numero', formataFaixaKg(e.min, e.max));
      set('.rm-unidade', 'kg de 1RM estimado');
      set('.rm-frase', fraseEstimativa(e));
      const nota = saida.querySelector<HTMLElement>('.rm-nota-exercicio');
      if (nota) {
        nota.hidden = false;
        nota.textContent = exercicio(idExercicio).nota;
      }
      notaReps(e.alemDoConfiavel);
      desenhaTabela(e.central, null);
      atualizaWhatsapp(`Minha estimativa de 1RM deu ${formataFaixaKg(e.min, e.max)} kg.`);
      evento('calculator_completed', { mode: modo, exercise: idExercicio, reps: e.repsAteFalha });
    } else {
      const m = parseNumero(um.value);
      if (!cargaValida(m)) return falha(`Informe um 1RM entre ${CARGA_MIN} e ${CARGA_MAX} kg.`, !um.value.trim());
      const r = parseNumero(alvo.value);
      if (!repsValidas(r))
        return falha(`Informe as repetições como número inteiro, de ${REPS_MIN} a ${REPS_MAX}.`, !alvo.value.trim());
      if (r + rir > REPS_MAX) return falha(`Repetições mais as da reserva passam de ${REPS_MAX}.`);
      const a = cargaPara(m, r, rir);
      mostra();
      set('.rm-numero', formataFaixaKg(a.min, a.max));
      set('.rm-unidade', `kg para ${formataReps(r)}`);
      set(
        '.rm-frase',
        rir
          ? `Para ${formataReps(r)} deixando ${rir} na reserva — a carga de ${r + rir} até a falha —, as sete fórmulas dão ${formataFaixaPct(a.pctMin, a.pctMax)} do seu 1RM de ${formataKg(m)} kg.`
          : `Para ${formataReps(r)} até a falha, as sete fórmulas dão ${formataFaixaPct(a.pctMin, a.pctMax)} do seu 1RM de ${formataKg(m)} kg — ${formataKg(a.central)} kg no meio.`,
      );
      const nota = saida.querySelector<HTMLElement>('.rm-nota-exercicio');
      if (nota) nota.hidden = true;
      notaReps(r + rir > REPS_CONFIAVEL);
      desenhaTabela(m, rir ? null : r);
      atualizaWhatsapp(`A calculadora sugeriu ${formataFaixaKg(a.min, a.max)} kg para ${formataReps(r)}.`);
      evento('calculator_completed', { mode: modo, reps: r + rir });
    }
    if (!comecou) {
      comecou = true;
      evento('calculator_started');
    }
  }

  function mostra(): void {
    erro.hidden = true;
    saida.hidden = false;
  }

  function notaReps(mostrar: boolean): void {
    const n = saida.querySelector<HTMLElement>('.rm-nota-reps');
    if (!n) return;
    n.hidden = !mostrar;
    n.textContent = NOTA_REPS_ALTAS;
  }

  function atualizaWhatsapp(resultado: string): void {
    const link = saida.querySelector<HTMLAnchorElement>('.rm-whats');
    if (!link) return;
    link.href = whatsappUrl(
      `Oi, Montinho! Vim pela calculadora de 1RM do Personal por Perto. ${resultado} ` +
        `Queria ajuda para usar isso no meu treino.`,
    );
  }

  /* ---------------------------------------------------------------- */
  const abas = Array.from(document.querySelectorAll<HTMLButtonElement>('.rm-modo'));
  abas.forEach((b, i) => {
    b.addEventListener('click', () => trocaModo(b.dataset.modo as Modo));
    b.addEventListener('keydown', (e) => {
      if (e.key !== 'ArrowRight' && e.key !== 'ArrowLeft') return;
      e.preventDefault();
      trocaModo(abas[(i + (e.key === 'ArrowRight' ? 1 : abas.length - 1)) % abas.length].dataset.modo as Modo);
    });
  });
  document.querySelectorAll<HTMLButtonElement>('.rm-exercicio').forEach((b) => {
    b.addEventListener('click', () => {
      idExercicio = b.dataset.exercicio ?? idExercicio;
      marca('.rm-exercicio', 'exercicio', idExercicio);
      evento('calculator_style_changed', { exercise: idExercicio });
      calcula();
    });
  });
  document.querySelectorAll<HTMLButtonElement>('.rm-rir').forEach((b) => {
    b.addEventListener('click', () => {
      rir = Number(b.dataset.rir ?? 0);
      marca('.rm-rir', 'rir', String(rir));
      calcula();
    });
  });
  [carga, reps, um, alvo].forEach((el) => el.addEventListener('input', calcula));

  evento('calculator_view');
  calcula();
}
