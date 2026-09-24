/**
 * Interface da calculadora de calorias do ping pong.
 *
 * O QUE MUDA EM RELAÇÃO ÀS OUTRAS DEZESSETE
 *
 * Três linhas: a da tabela e duas medidas em treino. As duas medidas são
 * faixa (o estudo mediu mais de um exercício de cada tipo), e a saída
 * mostra as pontas. As notas de cada caso ficam abaixo dos campos: nada
 * acima deles muda de altura quando a linha troca.
 *
 * Nada vai para a URL: peso é dado corporal.
 */
import {
  KCAL_MAX,
  KCAL_MIN,
  MINUTOS_MAX,
  MINUTOS_MIN,
  MODALIDADES,
  NOTA_DESLOCAMENTO,
  NOTA_PARADO,
  PESO_MAX,
  PESO_MIN,
  arredondaKcal,
  deKcal,
  deTempo,
  formataFaixaKcal,
  formataFaixaMet,
  formataFaixaTempo,
  formataKcal,
  formataTempo,
  fraseContexto,
  kcalValida,
  minutosValidos,
  modalidade,
  parseNumero,
  pesoValido,
  type Resultado,
} from '../lib/calorias/pingpong';
import { whatsappUrl } from '../lib/links';
import { focoSemSalto } from './focoSemSalto';
import { reservaAltura } from './reservaAltura';

type Modo = 'tempo' | 'meta';

const $ = <T extends HTMLElement>(sel: string): T | null => document.querySelector<T>(sel);

export function iniciarCalculadoraPingPong(): void {
  if (!$('#pp-app')) return;

  const peso = $<HTMLInputElement>('#pp-peso')!;
  const saida = $<HTMLElement>('#pp-saida')!;
  const erro = $<HTMLElement>('#pp-erro')!;
  const campos: Record<Modo, HTMLInputElement> = {
    tempo: $<HTMLInputElement>('#pp-minutos')!,
    meta: $<HTMLInputElement>('#pp-meta')!,
  };

  let modo: Modo = 'tempo';
  let idModalidade = 'jogo';
  let comecou = false;

  function evento(nome: string, extra: Record<string, string | number> = {}): void {
    const w = window as unknown as { dataLayer?: unknown[] };
    w.dataLayer = w.dataLayer || [];
    w.dataLayer.push({ event: nome, tool: 'calorias-pingpong', ...extra });
  }

  const textoDica = (m: (typeof MODALIDADES)[number]): string =>
    `${formataFaixaMet(m)} METs — ${m.fonte}. ${m.comoReconhecer}`;

  function desenhaModalidade(): void {
    document.querySelectorAll<HTMLButtonElement>('.pp-modalidade').forEach((b) => {
      const ativo = b.dataset.modalidade === idModalidade;
      b.classList.toggle('is-ativo', ativo);
      b.setAttribute('aria-pressed', String(ativo));
    });
    const dica = $<HTMLElement>('#pp-modalidade-dica');
    if (dica) dica.textContent = textoDica(modalidade(idModalidade));
  }

  function trocaModo(novo: Modo): void {
    if (novo === modo) return;
    modo = novo;
    for (const [m, el] of Object.entries(campos)) {
      const bloco = el.closest<HTMLElement>('.pp-campo-modo');
      if (bloco) bloco.hidden = m !== novo;
    }
    document.querySelectorAll<HTMLButtonElement>('.pp-modo').forEach((b) => {
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
        return falha(`Informe os minutos de jogo entre ${MINUTOS_MIN} e ${MINUTOS_MAX}.`, !campos.tempo.value.trim());
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
      set('.pp-numero', formataFaixaTempo(res.minutosMin, res.minutosMax));
      set('.pp-unidade', 'na mesa');
      set('.pp-frase', `Para gastar aproximadamente ${formataKcal(res.kcalMin)} kcal com ${Math.round(pesoKg)} kg em ${m.naFrase}.`);
    } else {
      set('.pp-numero', `≈ ${formataFaixaKcal(res.kcalMin, res.kcalMax)}`);
      set('.pp-unidade', 'kcal');
      set('.pp-frase', fraseContexto(pesoKg, res));
    }
    set('.pp-d-tempo', formataFaixaTempo(res.minutosMin, res.minutosMax));
    // Na meta, o líquido da ponta de tempo maior é o menor — ordena as pontas.
    set('.pp-d-liquido', `≈ ${formataFaixaKcal(Math.min(res.liquidaMin, res.liquidaMax), Math.max(res.liquidaMin, res.liquidaMax))} kcal`);
    set('.pp-d-met', formataFaixaMet(res));
    set('.pp-d-fonte', m.fonte);

    const nota = saida.querySelector<HTMLElement>('.pp-nota-linha');
    if (nota) {
      const texto = m.id === 'deslocamento' ? NOTA_DESLOCAMENTO : m.id === 'parado' ? NOTA_PARADO : '';
      nota.hidden = !texto;
      nota.textContent = texto;
    }
    atualizaWhatsapp(res);
  }

  /** Leva contexto e resultado. Nunca o peso. */
  function atualizaWhatsapp(res: Resultado): void {
    const link = saida.querySelector<HTMLAnchorElement>('.pp-whats');
    if (!link) return;
    const m = modalidade(res.idModalidade);
    const oQue =
      modo === 'meta'
        ? `Para bater ${formataKcal(res.kcalMin)} kcal, a conta deu ${formataFaixaTempo(res.minutosMin, res.minutosMax)} de ${m.naFrase}.`
        : `Minha estimativa deu cerca de ${formataFaixaKcal(res.kcalMin, res.kcalMax)} kcal em ${formataTempo(res.minutosMin)} de ${m.naFrase}.`;
    link.href = whatsappUrl(
      `Oi, Montinho! Vim pela calculadora de calorias do ping pong do Personal por Perto. ${oQue} ` +
        `Queria entender como encaixar o ping pong numa estratégia para o meu objetivo.`,
    );
  }

  /* ---------------------------------------------------------------- */
  document.querySelectorAll<HTMLButtonElement>('.pp-modo').forEach((b) => {
    b.addEventListener('click', () => trocaModo(b.dataset.modo as Modo));
  });
  const abas = Array.from(document.querySelectorAll<HTMLButtonElement>('.pp-modo'));
  abas.forEach((b, i) => {
    b.addEventListener('keydown', (e) => {
      if (e.key !== 'ArrowRight' && e.key !== 'ArrowLeft') return;
      e.preventDefault();
      trocaModo(abas[(i + (e.key === 'ArrowRight' ? 1 : abas.length - 1)) % abas.length].dataset.modo as Modo);
    });
  });
  document.querySelectorAll<HTMLButtonElement>('.pp-modalidade').forEach((b) => {
    b.addEventListener('click', () => {
      idModalidade = b.dataset.modalidade ?? idModalidade;
      desenhaModalidade();
      evento('calculator_style_changed', { modality: idModalidade });
      calcula();
    });
  });
  document.querySelectorAll<HTMLButtonElement>('.pp-preset').forEach((b) => {
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
  const dica = $<HTMLElement>('#pp-modalidade-dica');
  if (dica) reservaAltura(dica, MODALIDADES.map(textoDica));
  desenhaModalidade();
  calcula();
}
