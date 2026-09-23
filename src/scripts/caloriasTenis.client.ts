/**
 * Interface da calculadora de calorias do tênis.
 *
 * O QUE MUDA EM RELAÇÃO ÀS OUTRAS DOZE
 *
 * É a primeira calculadora que devolve faixa por causa da fonte, e não da
 * pessoa: duplas têm duas linhas no Compêndio (4,5 e 6,0) sem diferença que
 * conseguimos conferir. Em duplas, o número principal vira "331 a 441" e a
 * nota explica a faixa na saída, abaixo dos campos — nada acima deles muda
 * de altura.
 *
 * E é a única que pede para NÃO descontar tempo parado: o rótulo do campo
 * diz "com as pausas entre pontos", porque a medição em partida mostra que
 * elas já estão na tabela.
 *
 * Nada vai para a URL: peso é dado corporal.
 */
import {
  KCAL_MAX,
  KCAL_MIN,
  MINUTOS_MAX,
  MINUTOS_MIN,
  MODALIDADES,
  NOTA_DUPLAS,
  PESO_MAX,
  PESO_MIN,
  arredondaKcal,
  deKcal,
  deTempo,
  formataFaixaKcal,
  formataFaixaMet,
  formataFaixaTempo,
  formataKcal,
  fraseContexto,
  kcalValida,
  minutosValidos,
  modalidade,
  parseNumero,
  pesoValido,
  temFaixa,
  type Resultado,
} from '../lib/calorias/tenis';
import { whatsappUrl } from '../lib/links';
import { focoSemSalto } from './focoSemSalto';
import { reservaAltura } from './reservaAltura';

type Modo = 'tempo' | 'meta';

const $ = <T extends HTMLElement>(sel: string): T | null => document.querySelector<T>(sel);

export function iniciarCalculadoraTenis(): void {
  if (!$('#ct-app')) return;

  const peso = $<HTMLInputElement>('#ct-peso')!;
  const saida = $<HTMLElement>('#ct-saida')!;
  const erro = $<HTMLElement>('#ct-erro')!;

  const campos: Record<Modo, HTMLInputElement> = {
    tempo: $<HTMLInputElement>('#ct-minutos')!,
    meta: $<HTMLInputElement>('#ct-meta')!,
  };

  let modo: Modo = 'tempo';
  let idModalidade = 'simples';
  let comecou = false;

  function evento(nome: string, extra: Record<string, string | number> = {}): void {
    const w = window as unknown as { dataLayer?: unknown[] };
    w.dataLayer = w.dataLayer || [];
    w.dataLayer.push({ event: nome, tool: 'calorias-tenis', ...extra });
  }

  const textoDica = (m: (typeof MODALIDADES)[number]): string =>
    `${formataFaixaMet(m)} METs — Compêndio, código ${m.codigos.join(' e ')}. ${m.comoReconhecer}`;

  function desenhaModalidade(): void {
    document.querySelectorAll<HTMLButtonElement>('.ct-modalidade').forEach((b) => {
      const ativo = b.dataset.modalidade === idModalidade;
      b.classList.toggle('is-ativo', ativo);
      b.setAttribute('aria-pressed', String(ativo));
    });
    const dica = $<HTMLElement>('#ct-modalidade-dica');
    if (dica) dica.textContent = textoDica(modalidade(idModalidade));
  }

  function trocaModo(novo: Modo): void {
    if (novo === modo) return;
    modo = novo;
    for (const [m, el] of Object.entries(campos)) {
      const bloco = el.closest<HTMLElement>('.ct-campo-modo');
      if (bloco) bloco.hidden = m !== novo;
    }
    document.querySelectorAll<HTMLButtonElement>('.ct-modo').forEach((b) => {
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
        return falha(`Informe um tempo de quadra entre ${MINUTOS_MIN} e ${MINUTOS_MAX} minutos.`, !campos.tempo.value.trim());
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
    evento('calculator_completed', { mode: modo, modality: idModalidade, kcal: arredondaKcal(res.kcalMax) });
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
      set('.ct-numero', formataFaixaTempo(res.minutosMin, res.minutosMax));
      set('.ct-unidade', 'de quadra');
      set(
        '.ct-frase',
        `Para gastar aproximadamente ${formataKcal(res.kcalMin)} kcal com ${Math.round(pesoKg)} kg em ` +
          `${m.naFrase}, contando as pausas entre pontos.`,
      );
    } else {
      set('.ct-numero', `≈ ${formataFaixaKcal(res.kcalMin, res.kcalMax)}`);
      set('.ct-unidade', 'kcal');
      set('.ct-frase', fraseContexto(pesoKg, res));
    }

    set('.ct-d-tempo', formataFaixaTempo(res.minutosMin, res.minutosMax));
    set('.ct-d-liquido', `≈ ${formataFaixaKcal(Math.min(res.liquidaMin, res.liquidaMax), Math.max(res.liquidaMin, res.liquidaMax))} kcal`);
    set('.ct-d-met', formataFaixaMet(res));
    set('.ct-d-fonte', `Compêndio ${m.codigos.join(' e ')}`);

    const nota = saida.querySelector<HTMLElement>('.ct-nota-duplas');
    if (nota) {
      const mostrar = temFaixa(res.idModalidade);
      nota.hidden = !mostrar;
      if (mostrar) nota.textContent = NOTA_DUPLAS;
    }

    atualizaWhatsapp(res);
  }

  /** Leva contexto e resultado. Nunca o peso. */
  function atualizaWhatsapp(res: Resultado): void {
    const link = saida.querySelector<HTMLAnchorElement>('.ct-whats');
    if (!link) return;
    const m = modalidade(res.idModalidade);
    const oQue =
      modo === 'meta'
        ? `Para bater ${formataKcal(res.kcalMin)} kcal, a conta deu ${formataFaixaTempo(res.minutosMin, res.minutosMax)} de ${m.naFrase}.`
        : `Minha estimativa deu cerca de ${formataFaixaKcal(res.kcalMin, res.kcalMax)} kcal em ${formataFaixaTempo(res.minutosMin, res.minutosMax)} de ${m.naFrase}.`;
    link.href = whatsappUrl(
      `Oi, Montinho! Vim pela calculadora de calorias do tênis do Personal por Perto. ${oQue} ` +
        `Queria entender como encaixar o tênis numa estratégia para o meu objetivo.`,
    );
  }

  /* ---------------------------------------------------------------- */
  document.querySelectorAll<HTMLButtonElement>('.ct-modo').forEach((b) => {
    b.addEventListener('click', () => trocaModo(b.dataset.modo as Modo));
  });
  const abas = Array.from(document.querySelectorAll<HTMLButtonElement>('.ct-modo'));
  abas.forEach((b, i) => {
    b.addEventListener('keydown', (e) => {
      if (e.key !== 'ArrowRight' && e.key !== 'ArrowLeft') return;
      e.preventDefault();
      trocaModo(abas[(i + (e.key === 'ArrowRight' ? 1 : abas.length - 1)) % abas.length].dataset.modo as Modo);
    });
  });

  document.querySelectorAll<HTMLButtonElement>('.ct-modalidade').forEach((b) => {
    b.addEventListener('click', () => {
      idModalidade = b.dataset.modalidade ?? idModalidade;
      desenhaModalidade();
      evento('calculator_style_changed', { modality: idModalidade });
      calcula();
    });
  });

  document.querySelectorAll<HTMLButtonElement>('.ct-preset').forEach((b) => {
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
  const dica = $<HTMLElement>('#ct-modalidade-dica');
  if (dica) reservaAltura(dica, MODALIDADES.map(textoDica));
  desenhaModalidade();
  calcula();
}
