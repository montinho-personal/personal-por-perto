/**
 * Interface da calculadora de calorias da corrida.
 *
 * O QUE MUDA EM RELAÇÃO À DA CAMINHADA
 *
 * O modo padrão é DISTÂNCIA, não tempo. Corredor volta da rua sabendo que
 * fez 5 km, não que ficou 31 minutos na rua — e o relógio dele mostra a
 * distância primeiro. Inverter isso obrigaria a maioria a converter de
 * cabeça antes de usar a ferramenta.
 *
 * O pace é campo fixo, não escondido num bloco de ajuste: ele é a segunda
 * informação que todo corredor tem, e sem ele não existe conta. Fica ao
 * lado da distância, com a velocidade equivalente aparecendo em tempo real
 * para quem pensa em km/h na esteira.
 *
 * E o resultado é uma FAIXA. Economia de corrida varia entre pessoas, e
 * mostrar um número exato seria fingir uma precisão que a medição não tem.
 *
 * Nada vai para a URL: peso é dado corporal, e o estado da ferramenta não
 * pode virar página indexável concorrendo com a canônica.
 */
import {
  INCLINACAO_MAX,
  KCAL_MAX,
  KCAL_MIN,
  KM_MAX,
  KM_MIN,
  MINUTOS_MAX,
  MINUTOS_MIN,
  NOTA_ABAIXO_DA_FAIXA,
  PACE_MAX,
  PACE_MIN,
  PESO_MAX,
  PESO_MIN,
  arredondaKcal,
  deDistancia,
  deKcal,
  deTempo,
  faixaEmTexto,
  formataFaixa,
  formataKm,
  formataPace,
  formataTempo,
  formataVelocidade,
  fraseContexto,
  inclinacaoValida,
  kcalValida,
  kmValidos,
  minutosValidos,
  paceValido,
  parseNumero,
  parsePace,
  pesoValido,
  type Resultado,
} from '../lib/calorias/corrida';
import { whatsappUrl } from '../lib/links';

type Modo = 'distancia' | 'tempo' | 'meta';

const $ = <T extends HTMLElement>(sel: string): T | null => document.querySelector<T>(sel);

export function iniciarCalculadoraCorrida(): void {
  if (!$('#cr-app')) return;

  const peso = $<HTMLInputElement>('#cr-peso')!;
  const pace = $<HTMLInputElement>('#cr-pace')!;
  const paceKmh = $<HTMLElement>('#cr-pace-kmh')!;
  const inclinacao = $<HTMLInputElement>('#cr-inclinacao')!;
  const inclSaida = $<HTMLOutputElement>('#cr-inclinacao-valor')!;
  const saida = $<HTMLElement>('#cr-saida')!;
  const erro = $<HTMLElement>('#cr-erro')!;

  const campos: Record<Modo, HTMLInputElement> = {
    distancia: $<HTMLInputElement>('#cr-km')!,
    tempo: $<HTMLInputElement>('#cr-minutos')!,
    meta: $<HTMLInputElement>('#cr-meta')!,
  };

  let modo: Modo = 'distancia';
  let comecou = false;

  function evento(nome: string, extra: Record<string, string | number> = {}): void {
    const w = window as unknown as { dataLayer?: unknown[] };
    w.dataLayer = w.dataLayer || [];
    w.dataLayer.push({ event: nome, tool: 'calorias-corrida', ...extra });
  }

  function trocaModo(novo: Modo): void {
    if (novo === modo) return;
    modo = novo;
    for (const [m, el] of Object.entries(campos)) {
      const bloco = el.closest<HTMLElement>('.cr-campo-modo');
      if (bloco) bloco.hidden = m !== novo;
    }
    document.querySelectorAll<HTMLButtonElement>('.cr-modo').forEach((b) => {
      const ativo = b.dataset.modo === novo;
      b.classList.toggle('is-ativo', ativo);
      b.setAttribute('aria-selected', String(ativo));
      b.tabIndex = ativo ? 0 : -1;
    });
    evento('calculator_mode_changed', { mode: novo });
    campos[novo].focus();
    calcula();
  }

  function calcula(): void {
    const p = parseNumero(peso.value);
    const pc = parsePace(pace.value);
    const incl = parseNumero(inclinacao.value) ?? 0;

    inclSaida.textContent = `${incl.toLocaleString('pt-BR')}%`;
    paceKmh.textContent = paceValido(pc) ? `= ${formataVelocidade(60 / pc)}` : '';

    const estado = $<HTMLElement>('#cr-estado');
    if (estado) estado.textContent = incl > 0 ? `${incl.toLocaleString('pt-BR')}% de inclinação` : 'no plano';

    if (!pesoValido(p)) return falha(`Informe um peso entre ${PESO_MIN} e ${PESO_MAX} kg.`, !peso.value.trim());
    if (!paceValido(pc))
      return falha(
        `Informe um ritmo entre ${formataPace(PACE_MIN)} e ${formataPace(PACE_MAX)} por quilômetro.`,
        !pace.value.trim(),
      );
    if (!inclinacaoValida(incl)) return falha('A inclinação precisa ficar entre 0% e 15%.');

    const v = parseNumero(campos[modo].value);
    let res: Resultado;

    if (modo === 'distancia') {
      if (!kmValidos(v))
        return falha(`Informe uma distância entre ${KM_MIN} e ${KM_MAX} km.`, !campos.distancia.value.trim());
      res = deDistancia(v, p, pc, incl);
    } else if (modo === 'tempo') {
      if (!minutosValidos(v))
        return falha(`Informe um tempo entre ${MINUTOS_MIN} e ${MINUTOS_MAX} minutos.`, !campos.tempo.value.trim());
      res = deTempo(v, p, pc, incl);
    } else {
      if (!kcalValida(v))
        return falha(`Informe uma meta entre ${KCAL_MIN} e ${KCAL_MAX} kcal.`, !campos.meta.value.trim());
      res = deKcal(v, p, pc, incl);
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

    // No modo meta o que a pessoa quer saber é a DISTÂNCIA, não a caloria
    // que ela mesma digitou.
    if (modo === 'meta') {
      set('.cr-numero', formataKm(res.km));
      set('.cr-unidade', 'correndo');
      set(
        '.cr-frase',
        `Para gastar aproximadamente ${arredondaKcal(res.kcal)} kcal com ${Math.round(pesoKg)} kg ` +
          `em ritmo de ${formataPace(res.paceMin)} por quilômetro — cerca de ${formataTempo(res.minutos)}.`,
      );
    } else {
      set('.cr-numero', formataFaixa(res).replace(' kcal', ''));
      set('.cr-unidade', 'kcal');
      set('.cr-frase', fraseContexto(pesoKg, res));
    }

    set('.cr-d-km', formataKm(res.km));
    set('.cr-d-tempo', formataTempo(res.minutos));
    set('.cr-d-pace', `${formataPace(res.paceMin)} /km`);
    set('.cr-d-liquido', `≈ ${arredondaKcal(res.kcalLiquida).toLocaleString('pt-BR')} kcal`);
    set('.cr-d-porkm', `≈ ${Math.round(res.kcal / Math.max(res.km, 0.001))} kcal`);
    set('.cr-d-met', res.met.toLocaleString('pt-BR', { maximumFractionDigits: 1 }));

    // O aviso que impede a ferramenta de responder fora da faixa em que a
    // equação foi validada — e que manda a pessoa para a página certa.
    const fora = saida.querySelector<HTMLElement>('.cr-nota-faixa');
    if (fora) {
      fora.hidden = !res.abaixoDaFaixa;
      const txt = fora.querySelector('.cr-nota-faixa-txt');
      if (txt) txt.textContent = NOTA_ABAIXO_DA_FAIXA;
    }

    atualizaWhatsapp(res);
  }

  /** Leva o contexto e o resultado. Nunca o peso. */
  function atualizaWhatsapp(res: Resultado): void {
    const link = saida.querySelector<HTMLAnchorElement>('.cr-whats');
    if (!link) return;
    const oQue =
      modo === 'meta'
        ? `Para bater ${arredondaKcal(res.kcal)} kcal, a conta deu ${formataKm(res.km)} de corrida.`
        : `Minha estimativa deu ${faixaEmTexto(res)} em ${formataKm(res.km)}.`;
    link.href = whatsappUrl(
      `Oi, Montinho! Vim pela calculadora de calorias da corrida do Personal por Perto. ${oQue} ` +
        `Queria entender como encaixar a corrida numa estratégia para o meu objetivo.`,
    );
  }

  /* ---------------------------------------------------------------- */
  document.querySelectorAll<HTMLButtonElement>('.cr-modo').forEach((b) => {
    b.addEventListener('click', () => trocaModo(b.dataset.modo as Modo));
  });

  const abas = Array.from(document.querySelectorAll<HTMLButtonElement>('.cr-modo'));
  abas.forEach((b, i) => {
    b.addEventListener('keydown', (e) => {
      if (e.key !== 'ArrowRight' && e.key !== 'ArrowLeft') return;
      e.preventDefault();
      trocaModo(abas[(i + (e.key === 'ArrowRight' ? 1 : abas.length - 1)) % abas.length].dataset.modo as Modo);
    });
  });

  [peso, pace, inclinacao, ...Object.values(campos)].forEach((el) => {
    el.addEventListener('input', calcula);
  });

  document.querySelectorAll<HTMLButtonElement>('.cr-preset').forEach((b) => {
    b.addEventListener('click', () => {
      const alvo = b.dataset.alvo === 'pace' ? pace : campos[(b.dataset.alvo as Modo) ?? modo];
      if (!alvo) return;
      alvo.value = b.dataset.valor ?? '';
      calcula();
      alvo.focus();
    });
  });

  if (inclinacao) inclinacao.max = String(INCLINACAO_MAX);

  evento('calculator_view');
  calcula();
}
