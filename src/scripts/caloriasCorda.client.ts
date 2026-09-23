/**
 * Interface da calculadora de calorias de pular corda.
 *
 * O QUE MUDA EM RELAÇÃO ÀS OUTRAS CINCO
 *
 * A comparação com a corrida é permanente e ao vivo, porque a página existe
 * em boa parte para desmontar a lenda dos "10 minutos de corda = 30 de
 * corrida". A cada resultado, a ferramenta diz quantos minutos de corrida
 * aquilo vale — calculados pelo motor da corrida deste mesmo site.
 *
 * A cadência vem da FAIXA escolhida, não de uma constante solta: a faixa do
 * Compêndio é definida pela cadência, e deixar as duas se contradizerem
 * devolveria o esforço de uma pessoa com o ritmo de outra. Quem ajusta a
 * cadência para fora da faixa recebe aviso.
 *
 * Nada vai para a URL: peso é dado corporal.
 */
import {
  CADENCIA_MAX,
  CADENCIA_MIN,
  FAIXAS,
  KCAL_MAX,
  KCAL_MIN,
  MINUTOS_MAX,
  MINUTOS_MIN,
  NOTA_CADENCIA_INCOERENTE,
  NOTA_TEMPO_IMPLAUSIVEL,
  PESO_MAX,
  PESO_MIN,
  PULOS_MAX,
  PULOS_MIN,
  SEGUNDOS_MAX,
  SEGUNDOS_MIN,
  SERIES_MAX,
  SERIES_MIN,
  VELOCIDADE_CORRIDA_REF,
  arredondaKcal,
  cadenciaDaFaixa,
  cadenciaIncoerente,
  cadenciaValida,
  dePulos,
  deKcal,
  deSeries,
  deTempo,
  faixa,
  formataKcal,
  formataPulos,
  formataTempo,
  fraseContexto,
  kcalPorMinuto,
  kcalValida,
  minutosValidos,
  parseNumero,
  pesoValido,
  pulosValidos,
  segundosValidos,
  seriesValidas,
  type Resultado,
} from '../lib/calorias/corda';
import { metCorrida } from '../lib/calorias/corrida';
import { whatsappUrl } from '../lib/links';
import { reservaAltura } from './reservaAltura';

type Modo = 'tempo' | 'pulos' | 'series' | 'meta';

const $ = <T extends HTMLElement>(sel: string): T | null => document.querySelector<T>(sel);

export function iniciarCalculadoraCorda(): void {
  if (!$('#cj-app')) return;

  const peso = $<HTMLInputElement>('#cj-peso')!;
  const cadencia = $<HTMLInputElement>('#cj-cadencia')!;
  const series = $<HTMLInputElement>('#cj-series')!;
  const segundos = $<HTMLInputElement>('#cj-segundos')!;
  const blocoSeries = $<HTMLElement>('#cj-bloco-series')!;
  const saida = $<HTMLElement>('#cj-saida')!;
  const erro = $<HTMLElement>('#cj-erro')!;

  const campos: Record<Modo, HTMLInputElement> = {
    tempo: $<HTMLInputElement>('#cj-minutos')!,
    pulos: $<HTMLInputElement>('#cj-pulos')!,
    series: $<HTMLInputElement>('#cj-series')!,
    meta: $<HTMLInputElement>('#cj-meta')!,
  };

  let modo: Modo = 'tempo';
  let idFaixa = 'moderado';
  let comecou = false;

  function evento(nome: string, extra: Record<string, string | number | boolean> = {}): void {
    const w = window as unknown as { dataLayer?: unknown[] };
    w.dataLayer = w.dataLayer || [];
    w.dataLayer.push({ event: nome, tool: 'calorias-corda', ...extra });
  }

  /** A cadência acompanha a faixa, e a dica explica a faixa escolhida. */
  function desenhaFaixa(): void {
    const f = faixa(idFaixa);
    document.querySelectorAll<HTMLButtonElement>('.cj-faixa').forEach((b) => {
      const ativo = b.dataset.faixa === idFaixa;
      b.classList.toggle('is-ativo', ativo);
      b.setAttribute('aria-pressed', String(ativo));
    });
    cadencia.value = String(cadenciaDaFaixa(idFaixa));
    const dica = $<HTMLElement>('#cj-faixa-dica');
    if (dica) dica.textContent = textoDica(f);
  }

  const textoDica = (f: (typeof FAIXAS)[number]): string => `${f.faixa}. ${f.comoReconhecer}`;

  function trocaFaixa(nova: string): void {
    idFaixa = nova;
    desenhaFaixa();
    evento('calculator_band_changed', { band: nova });
    calcula();
  }

  function trocaModo(novo: Modo): void {
    if (novo === modo) return;
    modo = novo;
    for (const [m, el] of Object.entries(campos)) {
      const bloco = el.closest<HTMLElement>('.cj-campo-modo');
      if (bloco) bloco.hidden = m !== novo;
    }
    blocoSeries.hidden = novo !== 'series';

    document.querySelectorAll<HTMLButtonElement>('.cj-modo').forEach((b) => {
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
    if (!pesoValido(p)) return falha(`Informe um peso entre ${PESO_MIN} e ${PESO_MAX} kg.`, !peso.value.trim());

    const cad = parseNumero(cadencia.value);
    if (!cadenciaValida(cad))
      return falha(`A cadência precisa ficar entre ${CADENCIA_MIN} e ${CADENCIA_MAX} pulos por minuto.`);

    const v = parseNumero(campos[modo].value);
    let res: Resultado;

    if (modo === 'tempo') {
      if (!minutosValidos(v))
        return falha(`Informe um tempo entre ${MINUTOS_MIN} e ${MINUTOS_MAX} minutos.`, !campos.tempo.value.trim());
      res = deTempo(v, p, idFaixa, cad);
    } else if (modo === 'pulos') {
      if (!pulosValidos(v))
        return falha(`Informe entre ${PULOS_MIN} e ${PULOS_MAX.toLocaleString('pt-BR')} pulos.`, !campos.pulos.value.trim());
      res = dePulos(v, p, idFaixa, cad);
    } else if (modo === 'series') {
      const seg = parseNumero(segundos.value);
      if (!seriesValidas(v))
        return falha(`Informe entre ${SERIES_MIN} e ${SERIES_MAX} séries.`, !campos.series.value.trim());
      if (!segundosValidos(seg))
        return falha(`Cada série precisa ter entre ${SEGUNDOS_MIN} e ${SEGUNDOS_MAX} segundos.`, !segundos.value.trim());
      res = deSeries(v, seg, p, idFaixa, cad);
    } else {
      if (!kcalValida(v))
        return falha(`Informe uma meta entre ${KCAL_MIN} e ${KCAL_MAX} kcal.`, !campos.meta.value.trim());
      res = deKcal(v, p, idFaixa, cad);
    }

    if (!comecou) {
      comecou = true;
      evento('calculator_started');
    }
    desenha(p, res);
    evento('calculator_completed', { mode: modo, band: idFaixa, kcal: arredondaKcal(res.kcal) });
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
    const linha = (sel: string, mostrar: boolean) => {
      const el = saida.querySelector<HTMLElement>(sel);
      if (el) el.hidden = !mostrar;
    };

    if (modo === 'meta') {
      set('.cj-numero', formataTempo(res.minutos));
      set('.cj-unidade', 'de corda');
      set(
        '.cj-frase',
        `Para gastar aproximadamente ${formataKcal(res.kcal)} kcal com ${Math.round(pesoKg)} kg em ritmo ` +
          `${faixa(res.idFaixa).nome.toLowerCase()} — ${formataPulos(res.pulos)}, sem parar.`,
      );
    } else {
      set('.cj-numero', `≈ ${formataKcal(res.kcal)}`);
      set('.cj-unidade', 'kcal');
      set('.cj-frase', fraseContexto(pesoKg, res));
    }

    set('.cj-d-tempo', formataTempo(res.minutos));
    set('.cj-d-pulos', formataPulos(res.pulos));
    set('.cj-d-liquido', `≈ ${formataKcal(res.kcalLiquida)} kcal`);
    set('.cj-d-met', res.met.toLocaleString('pt-BR', { maximumFractionDigits: 1 }));
    set('.cj-d-porpulo', `${res.porPulo.toFixed(3).replace('.', ',')} kcal`);

    /*
     * A comparação ao vivo com a corrida. É o antídoto da lenda: em vez de
     * afirmar que ela é falsa, a ferramenta mostra a equivalência real a
     * cada resultado, calculada pelo motor da corrida deste site.
     */
    const minCorrida = res.kcal / kcalPorMinuto(metCorrida(VELOCIDADE_CORRIDA_REF), pesoKg);
    set(
      '.cj-d-corrida',
      `${formataTempo(minCorrida)} a ${VELOCIDADE_CORRIDA_REF} km/h`,
    );

    linha('.cj-linha-series', res.cenario === 'series');
    if (res.cenario === 'series') {
      set('.cj-d-series', `${res.series} × ${res.segundosPorSerie} s`);
    }

    const avisoTempo = saida.querySelector<HTMLElement>('.cj-nota-tempo');
    if (avisoTempo) {
      avisoTempo.hidden = !res.tempoImplausivel;
      if (res.tempoImplausivel) avisoTempo.textContent = NOTA_TEMPO_IMPLAUSIVEL;
    }

    const avisoCad = saida.querySelector<HTMLElement>('.cj-nota-cadencia');
    if (avisoCad) {
      const briga = cadenciaIncoerente(res.idFaixa, res.cadencia);
      avisoCad.hidden = !briga;
      if (briga) avisoCad.textContent = NOTA_CADENCIA_INCOERENTE;
    }

    atualizaWhatsapp(res);
  }

  /** Leva contexto e resultado. Nunca o peso. */
  function atualizaWhatsapp(res: Resultado): void {
    const link = saida.querySelector<HTMLAnchorElement>('.cj-whats');
    if (!link) return;
    const oQue =
      modo === 'meta'
        ? `Para bater ${formataKcal(res.kcal)} kcal, a conta deu ${formataTempo(res.minutos)} de corda.`
        : `Minha estimativa deu cerca de ${formataKcal(res.kcal)} kcal em ${formataTempo(res.minutos)} de corda.`;
    link.href = whatsappUrl(
      `Oi, Montinho! Vim pela calculadora de calorias da corda do Personal por Perto. ${oQue} ` +
        `Queria entender como encaixar a corda numa estratégia para o meu objetivo.`,
    );
  }

  /* ---------------------------------------------------------------- */
  document.querySelectorAll<HTMLButtonElement>('.cj-modo').forEach((b) => {
    b.addEventListener('click', () => trocaModo(b.dataset.modo as Modo));
  });

  const abas = Array.from(document.querySelectorAll<HTMLButtonElement>('.cj-modo'));
  abas.forEach((b, i) => {
    b.addEventListener('keydown', (e) => {
      if (e.key !== 'ArrowRight' && e.key !== 'ArrowLeft') return;
      e.preventDefault();
      trocaModo(abas[(i + (e.key === 'ArrowRight' ? 1 : abas.length - 1)) % abas.length].dataset.modo as Modo);
    });
  });

  document.querySelectorAll<HTMLButtonElement>('.cj-faixa').forEach((b) => {
    b.addEventListener('click', () => trocaFaixa(b.dataset.faixa ?? idFaixa));
  });

  document.querySelectorAll<HTMLButtonElement>('.cj-preset').forEach((b) => {
    b.addEventListener('click', () => {
      // Sem data-alvo não é preset: é um botão que só usa a mesma aparência.
      if (!b.dataset.alvo) return;
      const alvo = b.dataset.alvo === 'segundos' ? segundos : campos[b.dataset.alvo as Modo];
      if (!alvo) return;
      alvo.value = b.dataset.valor ?? '';
      calcula();
      alvo.focus();
    });
  });

  [peso, cadencia, series, segundos, ...Object.values(campos)].forEach((el) => {
    el.addEventListener('input', calcula);
  });

  evento('calculator_view');
  const dicaFaixa = $<HTMLElement>('#cj-faixa-dica');
  if (dicaFaixa) reservaAltura(dicaFaixa, FAIXAS.map(textoDica));
  desenhaFaixa();
  calcula();
}
