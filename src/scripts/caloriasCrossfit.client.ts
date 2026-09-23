/**
 * Interface da calculadora de calorias do crossfit.
 *
 * O QUE MUDA EM RELAÇÃO ÀS OUTRAS CATORZE
 *
 * Não há seletor de modalidade: a régua é uma só, o WOD medido (Cindy).
 * O modo principal pede a aula e o WOD em dois campos lado a lado, porque
 * a pessoa sabe os dois números e só um deles roda na intensidade medida.
 *
 * Quando o WOD tem menos de 5 minutos, a saída ganha um aviso: a conta por
 * oxigênio — esta e a do relógio — vê só parte do gasto de um WOD curto e
 * explosivo. O aviso fica abaixo dos campos; nada acima deles se move.
 *
 * Nada vai para a URL: peso é dado corporal.
 */
import {
  AULA_MAX,
  AULA_MIN,
  KCAL_MAX,
  KCAL_MIN,
  NOTA_WOD_CURTO,
  PESO_MAX,
  PESO_MIN,
  WOD_MAX,
  WOD_MIN,
  arredondaKcal,
  aulaValida,
  deAula,
  deKcal,
  deWod,
  formataKcal,
  formataTempo,
  fraseContexto,
  kcalValida,
  parseNumero,
  pesoValido,
  wodValido,
  type Resultado,
} from '../lib/calorias/crossfit';
import { whatsappUrl } from '../lib/links';
import { focoSemSalto } from './focoSemSalto';

type Modo = 'aula' | 'wod' | 'meta';

const $ = <T extends HTMLElement>(sel: string): T | null => document.querySelector<T>(sel);

export function iniciarCalculadoraCrossfit(): void {
  if (!$('#cx-app')) return;

  const peso = $<HTMLInputElement>('#cx-peso')!;
  const wodNaAula = $<HTMLInputElement>('#cx-wod-aula')!;
  const saida = $<HTMLElement>('#cx-saida')!;
  const erro = $<HTMLElement>('#cx-erro')!;
  const campos: Record<Modo, HTMLInputElement> = {
    aula: $<HTMLInputElement>('#cx-aula')!,
    wod: $<HTMLInputElement>('#cx-wod')!,
    meta: $<HTMLInputElement>('#cx-meta')!,
  };

  let modo: Modo = 'aula';
  let comecou = false;

  function evento(nome: string, extra: Record<string, string | number> = {}): void {
    const w = window as unknown as { dataLayer?: unknown[] };
    w.dataLayer = w.dataLayer || [];
    w.dataLayer.push({ event: nome, tool: 'calorias-crossfit', ...extra });
  }

  function trocaModo(novo: Modo): void {
    if (novo === modo) return;
    modo = novo;
    for (const [m, el] of Object.entries(campos)) {
      const bloco = el.closest<HTMLElement>('.cx-campo-modo');
      if (bloco) bloco.hidden = m !== novo;
    }
    document.querySelectorAll<HTMLButtonElement>('.cx-modo').forEach((b) => {
      const ativo = b.dataset.modo === novo;
      b.classList.toggle('is-ativo', ativo);
      b.setAttribute('aria-selected', String(ativo));
      b.tabIndex = ativo ? 0 : -1;
    });
    evento('calculator_mode_changed', { mode: novo });
    focoSemSalto(campos[novo]);
    calcula();
  }

  function calcula(): void {
    const p = parseNumero(peso.value);
    if (!pesoValido(p)) return falha(`Informe um peso entre ${PESO_MIN} e ${PESO_MAX} kg.`, !peso.value.trim());
    const v = parseNumero(campos[modo].value);
    let res: Resultado;
    if (modo === 'aula') {
      if (!aulaValida(v))
        return falha(`Informe a duração da aula entre ${AULA_MIN} e ${AULA_MAX} minutos.`, !campos.aula.value.trim());
      const w = parseNumero(wodNaAula.value);
      if (!wodValido(w))
        return falha(`Informe os minutos de WOD entre ${WOD_MIN} e ${WOD_MAX}.`, !wodNaAula.value.trim());
      if (w > v) return falha('O WOD não pode ser mais longo que a aula.');
      res = deAula(v, w, p);
    } else if (modo === 'wod') {
      if (!wodValido(v))
        return falha(`Informe os minutos de WOD entre ${WOD_MIN} e ${WOD_MAX}.`, !campos.wod.value.trim());
      res = deWod(v, p);
    } else {
      if (!kcalValida(v))
        return falha(`Informe uma meta entre ${KCAL_MIN} e ${KCAL_MAX.toLocaleString('pt-BR')} kcal.`, !campos.meta.value.trim());
      res = deKcal(v, p);
    }
    if (!comecou) {
      comecou = true;
      evento('calculator_started');
    }
    desenha(p, res);
    evento('calculator_completed', { mode: modo, kcal: arredondaKcal(res.kcal) });
  }

  /** Campo em branco não é erro: é alguém que ainda não digitou. */
  function falha(msg: string, silencioso = false): void {
    saida.hidden = true;
    erro.hidden = silencioso;
    erro.textContent = silencioso ? '' : msg;
  }

  function desenha(pesoKg: number, res: Resultado): void {
    erro.hidden = true;
    saida.hidden = false;
    const set = (sel: string, txt: string) => {
      const el = saida.querySelector(sel);
      if (el) el.textContent = txt;
    };
    if (modo === 'meta') {
      set('.cx-numero', formataTempo(res.minutosWod));
      set('.cx-unidade', 'de WOD');
      set('.cx-frase', `Para gastar aproximadamente ${formataKcal(res.kcal)} kcal com ${Math.round(pesoKg)} kg, em WOD na intensidade medida no Cindy — sem contar aquecimento e técnica.`);
    } else {
      set('.cx-numero', `≈ ${formataKcal(res.kcal)}`);
      set('.cx-unidade', 'kcal');
      set('.cx-frase', fraseContexto(pesoKg, res));
    }
    set('.cx-d-wod', `${formataTempo(res.minutosWod)}, ≈ ${formataKcal(res.kcalWod)} kcal`);
    set('.cx-d-fora', res.minutosFora > 0 ? `${formataTempo(res.minutosFora)}, como repouso` : 'fora da conta');
    set('.cx-d-liquido', `≈ ${formataKcal(res.kcalLiquida)} kcal`);

    const nota = saida.querySelector<HTMLElement>('.cx-nota-curto');
    if (nota) {
      // Na meta, os minutos são resultado da conta, não um WOD que alguém fez:
      // o aviso de WOD curto não se aplica.
      const mostrar = res.wodCurto && modo !== 'meta';
      nota.hidden = !mostrar;
      if (mostrar) nota.textContent = NOTA_WOD_CURTO;
    }
    atualizaWhatsapp(res);
  }

  /** Leva contexto e resultado. Nunca o peso. */
  function atualizaWhatsapp(res: Resultado): void {
    const link = saida.querySelector<HTMLAnchorElement>('.cx-whats');
    if (!link) return;
    const oQue =
      modo === 'meta'
        ? `Para bater ${formataKcal(res.kcal)} kcal, a conta deu ${formataTempo(res.minutosWod)} de WOD.`
        : modo === 'aula'
          ? `Minha estimativa deu cerca de ${formataKcal(res.kcal)} kcal numa aula de ${formataTempo(res.minutosAula)} com ${formataTempo(res.minutosWod)} de WOD.`
          : `Minha estimativa deu cerca de ${formataKcal(res.kcal)} kcal num WOD de ${formataTempo(res.minutosWod)}.`;
    link.href = whatsappUrl(
      `Oi, Montinho! Vim pela calculadora de calorias do crossfit do Personal por Perto. ${oQue} ` +
        `Queria entender como encaixar o crossfit numa estratégia para o meu objetivo.`,
    );
  }

  /* ---------------------------------------------------------------- */
  document.querySelectorAll<HTMLButtonElement>('.cx-modo').forEach((b) => {
    b.addEventListener('click', () => trocaModo(b.dataset.modo as Modo));
  });
  const abas = Array.from(document.querySelectorAll<HTMLButtonElement>('.cx-modo'));
  abas.forEach((b, i) => {
    b.addEventListener('keydown', (e) => {
      if (e.key !== 'ArrowRight' && e.key !== 'ArrowLeft') return;
      e.preventDefault();
      trocaModo(abas[(i + (e.key === 'ArrowRight' ? 1 : abas.length - 1)) % abas.length].dataset.modo as Modo);
    });
  });
  document.querySelectorAll<HTMLButtonElement>('.cx-preset').forEach((b) => {
    b.addEventListener('click', () => {
      // Sem data-alvo não é preset: é um botão que só usa a mesma aparência.
      if (!b.dataset.alvo) return;
      const alvo = campos[b.dataset.alvo as Modo];
      if (!alvo) return;
      alvo.value = b.dataset.valor ?? '';
      calcula();
      alvo.focus();
    });
  });
  [peso, wodNaAula, ...Object.values(campos)].forEach((el) => el.addEventListener('input', calcula));

  evento('calculator_view');
  calcula();
}
