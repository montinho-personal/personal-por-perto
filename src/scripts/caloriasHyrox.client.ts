/**
 * Interface da calculadora de calorias do Hyrox.
 *
 * O QUE MUDA EM RELAÇÃO ÀS OUTRAS QUINZE
 *
 * Não há abas: a prova é uma só, e a pessoa sabe os três números — peso,
 * tempo final e pace médio das corridas. Os exemplos preenchem tempo e
 * pace juntos, porque um sem o outro não fecha.
 *
 * Tempo e pace que não fecham (menos de 8 minutos para as 8 estações) não
 * viram número: viram a explicação do porquê.
 *
 * Nada vai para a URL: peso é dado corporal.
 */
import {
  NOTA_PACE_LENTO,
  PACE_MAX,
  PACE_MIN,
  PESO_MAX,
  PESO_MIN,
  TEMPO_MAX,
  TEMPO_MIN,
  arredondaKcal,
  deProva,
  formataKcal,
  formataMinSeg,
  formataPace,
  formataPct,
  formataTempo,
  fraseContexto,
  fraseIncoerente,
  paceValido,
  parseNumero,
  parsePace,
  parseTempoFinal,
  pesoValido,
  tempoValido,
  type Resultado,
} from '../lib/calorias/hyrox';
import { whatsappUrl } from '../lib/links';

const $ = <T extends HTMLElement>(sel: string): T | null => document.querySelector<T>(sel);

export function iniciarCalculadoraHyrox(): void {
  if (!$('#hx-app')) return;

  const peso = $<HTMLInputElement>('#hx-peso')!;
  const tempo = $<HTMLInputElement>('#hx-tempo')!;
  const pace = $<HTMLInputElement>('#hx-pace')!;
  const saida = $<HTMLElement>('#hx-saida')!;
  const erro = $<HTMLElement>('#hx-erro')!;

  let comecou = false;

  function evento(nome: string, extra: Record<string, string | number> = {}): void {
    const w = window as unknown as { dataLayer?: unknown[] };
    w.dataLayer = w.dataLayer || [];
    w.dataLayer.push({ event: nome, tool: 'calorias-hyrox', ...extra });
  }

  function calcula(): void {
    const p = parseNumero(peso.value);
    if (!pesoValido(p)) return falha(`Informe um peso entre ${PESO_MIN} e ${PESO_MAX} kg.`, !peso.value.trim());
    const t = parseTempoFinal(tempo.value);
    if (!tempoValido(t))
      return falha(
        `Informe o tempo final entre ${formataTempo(TEMPO_MIN)} e ${formataTempo(TEMPO_MAX)} — por exemplo, 1h30.`,
        !tempo.value.trim(),
      );
    const k = parsePace(pace.value);
    if (!paceValido(k))
      return falha(
        `Informe o pace médio das corridas entre ${formataPace(PACE_MIN)} e ${formataPace(PACE_MAX)} por km — por exemplo, 6:00.`,
        !pace.value.trim(),
      );
    const res = deProva(t, k, p);
    if (!res.ok) {
      evento('calculator_incoherent');
      return falha(fraseIncoerente(res));
    }
    if (!comecou) {
      comecou = true;
      evento('calculator_started');
    }
    desenha(res);
    evento('calculator_completed', { kcal: arredondaKcal(res.kcal) });
  }

  /** Campo em branco não é erro: é alguém que ainda não digitou. */
  function falha(msg: string, silencioso = false): void {
    saida.hidden = true;
    erro.hidden = silencioso;
    erro.textContent = silencioso ? '' : msg;
  }

  function desenha(res: Resultado): void {
    erro.hidden = true;
    saida.hidden = false;
    const set = (sel: string, txt: string) => {
      const el = saida.querySelector(sel);
      if (el) el.textContent = txt;
    };
    set('.hx-numero', `≈ ${formataKcal(res.kcal)}`);
    set('.hx-frase', fraseContexto(res));
    set('.hx-d-corrida', `${formataTempo(res.minutosCorrida)}, ≈ ${formataKcal(res.kcalCorrida)} kcal`);
    set('.hx-d-estacoes', `${formataTempo(res.minutosEstacoes)}, ≈ ${formataKcal(res.kcalEstacoes)} kcal`);
    set('.hx-d-peso', `${formataPct(res.pctKcalCorrida)} do gasto, ${formataPct(res.pctTempoCorrida)} do tempo`);
    set('.hx-d-liquido', `≈ ${formataKcal(res.kcalLiquida)} kcal`);
    set('.hx-por-estacao-h', `Cada estação: ${formataMinSeg(res.minutosPorEstacao)}, com a Roxzone`);

    res.estacoes.forEach((e) => {
      const li = saida.querySelector(`[data-estacao="${e.estacao.id}"] .hx-e-kcal`);
      if (li) li.textContent = `≈ ${formataKcal(e.kcal)} kcal`;
    });

    const nota = saida.querySelector<HTMLElement>('.hx-nota-pace');
    if (nota) {
      nota.hidden = !res.paceLento;
      nota.textContent = res.paceLento ? NOTA_PACE_LENTO : '';
    }
    atualizaWhatsapp(res);
  }

  /** Leva contexto e resultado. Nunca o peso. */
  function atualizaWhatsapp(res: Resultado): void {
    const link = saida.querySelector<HTMLAnchorElement>('.hx-whats');
    if (!link) return;
    link.href = whatsappUrl(
      `Oi, Montinho! Vim pela calculadora de calorias do Hyrox do Personal por Perto. ` +
        `Minha estimativa deu cerca de ${formataKcal(res.kcal)} kcal numa prova de ${formataTempo(res.tempoFinal)}, ` +
        `com pace de ${formataPace(res.pace)} nas corridas. Queria ajuda para montar a preparação para a prova.`,
    );
  }

  /* ---------------------------------------------------------------- */
  document.querySelectorAll<HTMLButtonElement>('.hx-exemplo').forEach((b) => {
    b.addEventListener('click', () => {
      tempo.value = b.dataset.tempo ?? '';
      pace.value = b.dataset.pace ?? '';
      calcula();
    });
  });
  [peso, tempo, pace].forEach((el) => el.addEventListener('input', calcula));

  evento('calculator_view');
  calcula();
}
