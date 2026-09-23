/**
 * Interface da calculadora de calorias do basquete.
 *
 * O QUE MUDA EM RELAÇÃO ÀS OUTRAS DEZESSEIS
 *
 * Quatro linhas: três da tabela e uma medida em jogo. Duas delas são faixa
 * (arremessos, porque a fonte tem dois valores; competitivo, porque a
 * medição separa mulheres e homens), e a saída mostra as duas pontas. As
 * notas de cada caso ficam abaixo dos campos: nada acima deles muda de
 * altura quando a linha troca.
 *
 * Nada vai para a URL: peso é dado corporal.
 */
import {
  KCAL_MAX,
  KCAL_MIN,
  MINUTOS_MAX,
  MINUTOS_MIN,
  MODALIDADES,
  NOTA_ARREMESSOS,
  NOTA_COMPETITIVO,
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
} from '../lib/calorias/basquete';
import { whatsappUrl } from '../lib/links';
import { focoSemSalto } from './focoSemSalto';
import { reservaAltura } from './reservaAltura';

type Modo = 'tempo' | 'meta';

const $ = <T extends HTMLElement>(sel: string): T | null => document.querySelector<T>(sel);

export function iniciarCalculadoraBasquete(): void {
  if (!$('#bq-app')) return;

  const peso = $<HTMLInputElement>('#bq-peso')!;
  const saida = $<HTMLElement>('#bq-saida')!;
  const erro = $<HTMLElement>('#bq-erro')!;
  const campos: Record<Modo, HTMLInputElement> = {
    tempo: $<HTMLInputElement>('#bq-minutos')!,
    meta: $<HTMLInputElement>('#bq-meta')!,
  };

  let modo: Modo = 'tempo';
  let idModalidade = 'jogo';
  let comecou = false;

  function evento(nome: string, extra: Record<string, string | number> = {}): void {
    const w = window as unknown as { dataLayer?: unknown[] };
    w.dataLayer = w.dataLayer || [];
    w.dataLayer.push({ event: nome, tool: 'calorias-basquete', ...extra });
  }

  const textoDica = (m: (typeof MODALIDADES)[number]): string =>
    `${formataFaixaMet(m)} METs — ${m.fonte}. ${m.comoReconhecer}`;

  function desenhaModalidade(): void {
    document.querySelectorAll<HTMLButtonElement>('.bq-modalidade').forEach((b) => {
      const ativo = b.dataset.modalidade === idModalidade;
      b.classList.toggle('is-ativo', ativo);
      b.setAttribute('aria-pressed', String(ativo));
    });
    const dica = $<HTMLElement>('#bq-modalidade-dica');
    if (dica) dica.textContent = textoDica(modalidade(idModalidade));
  }

  function trocaModo(novo: Modo): void {
    if (novo === modo) return;
    modo = novo;
    for (const [m, el] of Object.entries(campos)) {
      const bloco = el.closest<HTMLElement>('.bq-campo-modo');
      if (bloco) bloco.hidden = m !== novo;
    }
    document.querySelectorAll<HTMLButtonElement>('.bq-modo').forEach((b) => {
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
        return falha(`Informe os minutos em quadra entre ${MINUTOS_MIN} e ${MINUTOS_MAX}.`, !campos.tempo.value.trim());
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
      set('.bq-numero', formataFaixaTempo(res.minutosMin, res.minutosMax));
      set('.bq-unidade', 'em quadra');
      set('.bq-frase', `Para gastar aproximadamente ${formataKcal(res.kcalMin)} kcal com ${Math.round(pesoKg)} kg em ${m.naFrase}.`);
    } else {
      set('.bq-numero', `≈ ${formataFaixaKcal(res.kcalMin, res.kcalMax)}`);
      set('.bq-unidade', 'kcal');
      set('.bq-frase', fraseContexto(pesoKg, res));
    }
    set('.bq-d-tempo', formataFaixaTempo(res.minutosMin, res.minutosMax));
    // Na meta, o líquido da ponta de tempo maior é o menor — ordena as pontas.
    set('.bq-d-liquido', `≈ ${formataFaixaKcal(Math.min(res.liquidaMin, res.liquidaMax), Math.max(res.liquidaMin, res.liquidaMax))} kcal`);
    set('.bq-d-met', formataFaixaMet(res));
    set('.bq-d-fonte', m.fonte);

    const nota = saida.querySelector<HTMLElement>('.bq-nota-linha');
    if (nota) {
      const texto = m.id === 'competitivo' ? NOTA_COMPETITIVO : m.id === 'arremessos' ? NOTA_ARREMESSOS : '';
      nota.hidden = !texto;
      nota.textContent = texto;
    }
    atualizaWhatsapp(res);
  }

  /** Leva contexto e resultado. Nunca o peso. */
  function atualizaWhatsapp(res: Resultado): void {
    const link = saida.querySelector<HTMLAnchorElement>('.bq-whats');
    if (!link) return;
    const m = modalidade(res.idModalidade);
    const oQue =
      modo === 'meta'
        ? `Para bater ${formataKcal(res.kcalMin)} kcal, a conta deu ${formataFaixaTempo(res.minutosMin, res.minutosMax)} de ${m.naFrase}.`
        : `Minha estimativa deu cerca de ${formataFaixaKcal(res.kcalMin, res.kcalMax)} kcal em ${formataTempo(res.minutosMin)} de ${m.naFrase}.`;
    link.href = whatsappUrl(
      `Oi, Montinho! Vim pela calculadora de calorias do basquete do Personal por Perto. ${oQue} ` +
        `Queria entender como encaixar o basquete numa estratégia para o meu objetivo.`,
    );
  }

  /* ---------------------------------------------------------------- */
  document.querySelectorAll<HTMLButtonElement>('.bq-modo').forEach((b) => {
    b.addEventListener('click', () => trocaModo(b.dataset.modo as Modo));
  });
  const abas = Array.from(document.querySelectorAll<HTMLButtonElement>('.bq-modo'));
  abas.forEach((b, i) => {
    b.addEventListener('keydown', (e) => {
      if (e.key !== 'ArrowRight' && e.key !== 'ArrowLeft') return;
      e.preventDefault();
      trocaModo(abas[(i + (e.key === 'ArrowRight' ? 1 : abas.length - 1)) % abas.length].dataset.modo as Modo);
    });
  });
  document.querySelectorAll<HTMLButtonElement>('.bq-modalidade').forEach((b) => {
    b.addEventListener('click', () => {
      idModalidade = b.dataset.modalidade ?? idModalidade;
      desenhaModalidade();
      evento('calculator_style_changed', { modality: idModalidade });
      calcula();
    });
  });
  document.querySelectorAll<HTMLButtonElement>('.bq-preset').forEach((b) => {
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
  const dica = $<HTMLElement>('#bq-modalidade-dica');
  if (dica) reservaAltura(dica, MODALIDADES.map(textoDica));
  desenhaModalidade();
  calcula();
}
