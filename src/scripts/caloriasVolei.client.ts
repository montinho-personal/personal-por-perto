/**
 * Interface da calculadora de calorias do vôlei.
 *
 * O QUE MUDA EM RELAÇÃO ÀS OUTRAS TREZE
 *
 * O seletor é o chão antes de ser o nível: três linhas de quadra e uma de
 * areia. Quando a areia é escolhida, a saída ganha uma nota dizendo que o
 * Compêndio tem uma linha só para ela, sem separar lazer de competição —
 * a nota fica abaixo dos campos, então nada acima deles muda de altura.
 *
 * Nada vai para a URL: peso é dado corporal.
 */
import {
  KCAL_MAX,
  KCAL_MIN,
  MINUTOS_MAX,
  MINUTOS_MIN,
  MODALIDADES,
  NOTA_AREIA,
  PESO_MAX,
  PESO_MIN,
  arredondaKcal,
  deKcal,
  deTempo,
  formataKcal,
  formataMet,
  formataTempo,
  fraseContexto,
  kcalValida,
  minutosValidos,
  modalidade,
  parseNumero,
  pesoValido,
  type Resultado,
} from '../lib/calorias/volei';
import { whatsappUrl } from '../lib/links';
import { focoSemSalto } from './focoSemSalto';
import { reservaAltura } from './reservaAltura';

type Modo = 'tempo' | 'meta';

const $ = <T extends HTMLElement>(sel: string): T | null => document.querySelector<T>(sel);

export function iniciarCalculadoraVolei(): void {
  if (!$('#cv-app')) return;

  const peso = $<HTMLInputElement>('#cv-peso')!;
  const saida = $<HTMLElement>('#cv-saida')!;
  const erro = $<HTMLElement>('#cv-erro')!;
  const campos: Record<Modo, HTMLInputElement> = {
    tempo: $<HTMLInputElement>('#cv-minutos')!,
    meta: $<HTMLInputElement>('#cv-meta')!,
  };

  let modo: Modo = 'tempo';
  let idModalidade = 'geral';
  let comecou = false;

  function evento(nome: string, extra: Record<string, string | number> = {}): void {
    const w = window as unknown as { dataLayer?: unknown[] };
    w.dataLayer = w.dataLayer || [];
    w.dataLayer.push({ event: nome, tool: 'calorias-volei', ...extra });
  }

  const textoDica = (m: (typeof MODALIDADES)[number]): string =>
    `${formataMet(m.met)} METs — Compêndio, código ${m.codigo}. ${m.comoReconhecer}`;

  function desenhaModalidade(): void {
    document.querySelectorAll<HTMLButtonElement>('.cv-modalidade').forEach((b) => {
      const ativo = b.dataset.modalidade === idModalidade;
      b.classList.toggle('is-ativo', ativo);
      b.setAttribute('aria-pressed', String(ativo));
    });
    const dica = $<HTMLElement>('#cv-modalidade-dica');
    if (dica) dica.textContent = textoDica(modalidade(idModalidade));
  }

  function trocaModo(novo: Modo): void {
    if (novo === modo) return;
    modo = novo;
    for (const [m, el] of Object.entries(campos)) {
      const bloco = el.closest<HTMLElement>('.cv-campo-modo');
      if (bloco) bloco.hidden = m !== novo;
    }
    document.querySelectorAll<HTMLButtonElement>('.cv-modo').forEach((b) => {
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
    if (modo === 'tempo') {
      if (!minutosValidos(v))
        return falha(`Informe um tempo de jogo entre ${MINUTOS_MIN} e ${MINUTOS_MAX} minutos.`, !campos.tempo.value.trim());
      res = deTempo(v, p, idModalidade);
    } else {
      if (!kcalValida(v))
        return falha(`Informe uma meta entre ${KCAL_MIN} e ${KCAL_MAX.toLocaleString('pt-BR')} kcal.`, !campos.meta.value.trim());
      res = deKcal(v, p, idModalidade);
    }
    if (!comecou) {
      comecou = true;
      evento('calculator_started');
    }
    desenha(p, res);
    evento('calculator_completed', { mode: modo, modality: idModalidade, kcal: arredondaKcal(res.kcal) });
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
    const m = modalidade(res.idModalidade);
    if (modo === 'meta') {
      set('.cv-numero', formataTempo(res.minutos));
      set('.cv-unidade', 'de jogo');
      set('.cv-frase', `Para gastar aproximadamente ${formataKcal(res.kcal)} kcal com ${Math.round(pesoKg)} kg em ${m.naFrase}.`);
    } else {
      set('.cv-numero', `≈ ${formataKcal(res.kcal)}`);
      set('.cv-unidade', 'kcal');
      set('.cv-frase', fraseContexto(pesoKg, res));
    }
    set('.cv-d-tempo', formataTempo(res.minutos));
    set('.cv-d-liquido', `≈ ${formataKcal(res.kcalLiquida)} kcal`);
    set('.cv-d-met', formataMet(res.met));
    set('.cv-d-fonte', `Compêndio ${m.codigo}`);

    const nota = saida.querySelector<HTMLElement>('.cv-nota-areia');
    if (nota) {
      const mostrar = m.chao === 'areia';
      nota.hidden = !mostrar;
      if (mostrar) nota.textContent = NOTA_AREIA;
    }
    atualizaWhatsapp(res);
  }

  /** Leva contexto e resultado. Nunca o peso. */
  function atualizaWhatsapp(res: Resultado): void {
    const link = saida.querySelector<HTMLAnchorElement>('.cv-whats');
    if (!link) return;
    const m = modalidade(res.idModalidade);
    const oQue =
      modo === 'meta'
        ? `Para bater ${formataKcal(res.kcal)} kcal, a conta deu ${formataTempo(res.minutos)} de ${m.naFrase}.`
        : `Minha estimativa deu cerca de ${formataKcal(res.kcal)} kcal em ${formataTempo(res.minutos)} de ${m.naFrase}.`;
    link.href = whatsappUrl(
      `Oi, Montinho! Vim pela calculadora de calorias do vôlei do Personal por Perto. ${oQue} ` +
        `Queria entender como encaixar o vôlei numa estratégia para o meu objetivo.`,
    );
  }

  /* ---------------------------------------------------------------- */
  document.querySelectorAll<HTMLButtonElement>('.cv-modo').forEach((b) => {
    b.addEventListener('click', () => trocaModo(b.dataset.modo as Modo));
  });
  const abas = Array.from(document.querySelectorAll<HTMLButtonElement>('.cv-modo'));
  abas.forEach((b, i) => {
    b.addEventListener('keydown', (e) => {
      if (e.key !== 'ArrowRight' && e.key !== 'ArrowLeft') return;
      e.preventDefault();
      trocaModo(abas[(i + (e.key === 'ArrowRight' ? 1 : abas.length - 1)) % abas.length].dataset.modo as Modo);
    });
  });
  document.querySelectorAll<HTMLButtonElement>('.cv-modalidade').forEach((b) => {
    b.addEventListener('click', () => {
      idModalidade = b.dataset.modalidade ?? idModalidade;
      desenhaModalidade();
      evento('calculator_style_changed', { modality: idModalidade });
      calcula();
    });
  });
  document.querySelectorAll<HTMLButtonElement>('.cv-preset').forEach((b) => {
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
  [peso, ...Object.values(campos)].forEach((el) => el.addEventListener('input', calcula));

  evento('calculator_view');
  const dica = $<HTMLElement>('#cv-modalidade-dica');
  if (dica) reservaAltura(dica, MODALIDADES.map(textoDica));
  desenhaModalidade();
  calcula();
}
