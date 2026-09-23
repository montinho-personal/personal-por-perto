/**
 * Interface da calculadora de calorias da caminhada.
 *
 * O cálculo é local e instantâneo: toda a aritmética vem de
 * `lib/calorias/caminhada.ts`, a mesma que os testes conferem. O script só
 * coleta a entrada, chama a conta e desenha o resultado.
 *
 * QUATRO MODOS, PORQUE A PESSOA SABE COISAS DIFERENTES
 *
 * Quem voltou da rua sabe o tempo. Quem usou o relógio sabe a distância ou
 * os passos. Quem está planejando sabe a meta de calorias e quer saber
 * quanto tempo leva. Pedir sempre a mesma entrada obrigaria três desses
 * quatro a fazer uma conversão de cabeça antes de usar a ferramenta.
 *
 * O campo visível muda com o modo — só um por vez. Peso, ritmo e inclinação
 * ficam sempre, porque valem para os quatro.
 *
 * NADA VAI PARA A URL
 *
 * Peso corporal é dado sensível e URL é coisa que se compartilha sem ler.
 * O estado da calculadora também não pode virar página indexável
 * concorrendo com a canônica.
 */
import {
  RITMOS,
  INCLINACAO_MAX,
  KCAL_MAX,
  KCAL_MIN,
  KM_MAX,
  KM_MIN,
  MINUTOS_ALERTA,
  MINUTOS_MAX,
  MINUTOS_MIN,
  NOTA_INTERPOLADO,
  PASSOS_MAX,
  PASSOS_MIN,
  PESO_MAX,
  PESO_MIN,
  arredondaKcal,
  arredondaPassos,
  dePassos,
  deDistancia,
  deKcal,
  deTempo,
  formataKm,
  formataTempo,
  formataVelocidade,
  fraseContexto,
  inclinacaoValida,
  kcalValida,
  kmValidos,
  minutosValidos,
  parseNumero,
  passosValidos,
  pesoValido,
  ritmo,
  velocidadeMedida,
  type Resultado,
  type RitmoId,
} from '../lib/calorias/caminhada';
import { whatsappUrl } from '../lib/links';
import { focoSemSalto } from './focoSemSalto';
import { reservaAltura } from './reservaAltura';

type Modo = 'tempo' | 'distancia' | 'passos' | 'meta';

const $ = <T extends HTMLElement>(sel: string): T | null => document.querySelector<T>(sel);

export function iniciarCalculadoraCaminhada(): void {
  const app = $<HTMLElement>('#cc-app');
  if (!app) return;

  const peso = $<HTMLInputElement>('#cc-peso')!;
  const inclinacao = $<HTMLInputElement>('#cc-inclinacao')!;
  const inclinacaoSaida = $<HTMLOutputElement>('#cc-inclinacao-valor')!;
  const saida = $<HTMLElement>('#cc-saida')!;
  const erro = $<HTMLElement>('#cc-erro')!;

  const campos: Record<Modo, HTMLInputElement> = {
    tempo: $<HTMLInputElement>('#cc-minutos')!,
    distancia: $<HTMLInputElement>('#cc-km')!,
    passos: $<HTMLInputElement>('#cc-passos')!,
    meta: $<HTMLInputElement>('#cc-meta')!,
  };

  let modo: Modo = 'tempo';
  /** Dispara `calculator_started` uma vez só — a primeira interação real. */
  let comecou = false;

  const ritmoEscolhido = (): RitmoId =>
    (document.querySelector<HTMLInputElement>('input[name="cc-ritmo"]:checked')?.value as RitmoId) ?? 'moderado';

  /* ---------------------------------------------------------------- *
   * Medição — nomes alinhados ao rastreador universal do site
   * ---------------------------------------------------------------- */
  function evento(nome: string, extra: Record<string, string | number> = {}): void {
    const w = window as unknown as { dataLayer?: unknown[] };
    w.dataLayer = w.dataLayer || [];
    w.dataLayer.push({ event: nome, tool: 'calorias-caminhada', ...extra });
  }

  /* ---------------------------------------------------------------- *
   * Troca de modo
   * ---------------------------------------------------------------- */
  function trocaModo(novo: Modo): void {
    if (novo === modo) return;
    modo = novo;
    for (const [m, el] of Object.entries(campos)) {
      const bloco = el.closest<HTMLElement>('.cc-campo-modo');
      if (bloco) bloco.hidden = m !== novo;
    }
    document.querySelectorAll<HTMLButtonElement>('.cc-modo').forEach((b) => {
      const ativo = b.dataset.modo === novo;
      b.classList.toggle('is-ativo', ativo);
      b.setAttribute('aria-selected', String(ativo));
      b.tabIndex = ativo ? 0 : -1;
    });
    evento('calculator_mode_changed', { mode: novo });
    focoSemSalto(campos[novo]);
    calcula();
  }

  /* ---------------------------------------------------------------- *
   * O cálculo
   * ---------------------------------------------------------------- */
  function calcula(): void {
    const p = parseNumero(peso.value);
    const r = ritmo(ritmoEscolhido());
    const incl = parseNumero(inclinacao.value) ?? 0;

    inclinacaoSaida.textContent = `${incl.toLocaleString('pt-BR')}%`;

    // O resumo do bloco recolhido mostra o estado atual, para ninguém
    // precisar abri-lo só para conferir o que está selecionado.
    const estado = $<HTMLElement>('#cc-estado');
    if (estado) {
      estado.textContent = `${r.nome.toLowerCase()}, ${
        incl > 0 ? `${incl.toLocaleString('pt-BR')}% de inclinação` : 'no plano'
      }`;
    }

    if (!pesoValido(p)) return falha(`Informe um peso entre ${PESO_MIN} e ${PESO_MAX} kg.`, !peso.value.trim());
    if (!inclinacaoValida(incl)) return falha('A inclinação precisa ficar entre 0% e 15%.');

    const v = parseNumero(campos[modo].value);
    let res: Resultado;

    if (modo === 'tempo') {
      if (!minutosValidos(v))
        return falha(`Informe um tempo entre ${MINUTOS_MIN} e ${MINUTOS_MAX} minutos.`, !campos.tempo.value.trim());
      res = deTempo(v, p, r.velocidade, incl, r.cadencia);
    } else if (modo === 'distancia') {
      if (!kmValidos(v))
        return falha(`Informe uma distância entre ${KM_MIN} e ${KM_MAX} km.`, !campos.distancia.value.trim());
      res = deDistancia(v, p, r.velocidade, incl, r.cadencia);
    } else if (modo === 'passos') {
      if (!passosValidos(v))
        return falha(
          `Informe entre ${PASSOS_MIN.toLocaleString('pt-BR')} e ${PASSOS_MAX.toLocaleString('pt-BR')} passos.`,
          !campos.passos.value.trim(),
        );
      res = dePassos(v, p, r.velocidade, incl, r.cadencia);
    } else {
      if (!kcalValida(v))
        return falha(`Informe uma meta entre ${KCAL_MIN} e ${KCAL_MAX.toLocaleString('pt-BR')} kcal.`, !campos.meta.value.trim());
      res = deKcal(v, p, r.velocidade, incl, r.cadencia);
    }

    if (!comecou) {
      comecou = true;
      evento('calculator_started');
    }
    desenha(p, res, incl);
    evento('calculator_completed', { mode: modo, kcal: arredondaKcal(res.kcal) });
  }

  /**
   * Campo em branco não é erro — é alguém que ainda não digitou. Mostrar
   * "informe um peso válido" para quem acabou de apagar o campo é ríspido
   * sem motivo.
   */
  function falha(msg: string, silencioso = false): void {
    saida.hidden = true;
    erro.hidden = silencioso;
    erro.textContent = silencioso ? '' : msg;
  }

  /* ---------------------------------------------------------------- *
   * O resultado
   * ---------------------------------------------------------------- */
  function desenha(pesoKg: number, res: Resultado, incl: number): void {
    erro.hidden = true;
    saida.hidden = false;

    const kcal = arredondaKcal(res.kcal);
    const liq = arredondaKcal(res.kcalLiquida);

    const set = (sel: string, txt: string) => {
      const el = saida.querySelector(sel);
      if (el) el.textContent = txt;
    };

    // O número grande muda de significado no modo meta: lá o que a pessoa
    // quer saber é o TEMPO, não a caloria que ela mesma digitou.
    if (modo === 'meta') {
      set('.cc-numero', formataTempo(res.minutos));
      set('.cc-unidade', 'de caminhada');
      set(
        '.cc-frase',
        `Para gastar aproximadamente ${kcal} kcal com ${Math.round(pesoKg)} kg a ` +
          `${formataVelocidade(res.velocidade)}${incl > 0 ? ` e ${incl}% de inclinação` : ''} — ` +
          `cerca de ${formataKm(res.km)}.`,
      );
    } else {
      set('.cc-numero', `≈ ${kcal.toLocaleString('pt-BR')}`);
      set('.cc-unidade', 'kcal');
      set('.cc-frase', fraseContexto(pesoKg, res));
    }

    set('.cc-d-tempo', formataTempo(res.minutos));
    set('.cc-d-km', formataKm(res.km));
    set('.cc-d-passos', arredondaPassos(res.passos).toLocaleString('pt-BR'));
    set('.cc-d-liquido', `≈ ${liq.toLocaleString('pt-BR')} kcal`);
    set('.cc-d-met', res.met.toLocaleString('pt-BR', { maximumFractionDigits: 1 }));

    // A honestidade que nenhum concorrente da SERP oferece: dizer quando a
    // conta interpolou em vez de usar um valor medido pelo Compêndio.
    const nota = saida.querySelector<HTMLElement>('.cc-nota-interpolado');
    if (nota) nota.hidden = velocidadeMedida(res.velocidade);
    if (nota && !nota.hidden) nota.textContent = NOTA_INTERPOLADO;

    const alerta = saida.querySelector<HTMLElement>('.cc-alerta-volume');
    if (alerta) alerta.hidden = res.minutos <= MINUTOS_ALERTA;

    atualizaWhatsapp(kcal, res);
  }

  /**
   * A mensagem do WhatsApp carrega o contexto da ferramenta e o resultado
   * arredondado — nunca o peso, que é dado corporal e não precisa viajar.
   */
  function atualizaWhatsapp(kcal: number, res: Resultado): void {
    const link = saida.querySelector<HTMLAnchorElement>('.cc-whats');
    if (!link) return;
    const oQue =
      modo === 'meta'
        ? `Para bater ${kcal} kcal, a conta deu ${formataTempo(res.minutos)} de caminhada.`
        : `Minha estimativa deu cerca de ${kcal} kcal em ${formataTempo(res.minutos)} de caminhada.`;
    link.href = whatsappUrl(
      `Oi, Montinho! Vim pela calculadora de calorias da caminhada do Personal por Perto. ${oQue} ` +
        `Queria entender como encaixar isso numa estratégia para o meu objetivo.`,
    );
  }

  /* ---------------------------------------------------------------- *
   * Ligações
   * ---------------------------------------------------------------- */
  document.querySelectorAll<HTMLButtonElement>('.cc-modo').forEach((b) => {
    b.addEventListener('click', () => trocaModo(b.dataset.modo as Modo));
  });

  // Setas navegam entre os modos, como manda o padrão de tablist.
  const abas = Array.from(document.querySelectorAll<HTMLButtonElement>('.cc-modo'));
  abas.forEach((b, i) => {
    b.addEventListener('keydown', (e) => {
      if (e.key !== 'ArrowRight' && e.key !== 'ArrowLeft') return;
      e.preventDefault();
      const prox = abas[(i + (e.key === 'ArrowRight' ? 1 : abas.length - 1)) % abas.length];
      trocaModo(prox.dataset.modo as Modo);
    });
  });

  [peso, inclinacao, ...Object.values(campos)].forEach((el) => {
    el.addEventListener('input', calcula);
  });
  /**
   * Escreve a descrição do ritmo escolhido no slot abaixo da lista.
   *
   * Antes ela vivia dentro de cada opção, escondida por CSS nas não
   * escolhidas — e trocar de ritmo remontava a lista inteira, movendo as
   * outras opções em até 68px no celular, debaixo do dedo de quem estava
   * tocando. Com o slot embaixo, a lista tem altura fixa.
   */
  function atualizaNotaRitmo(): void {
    const nota = $<HTMLElement>('#cc-ritmo-nota');
    if (nota) nota.textContent = ritmo(ritmoEscolhido()).comoReconhecer;
  }

  document.querySelectorAll<HTMLInputElement>('input[name="cc-ritmo"]').forEach((el) => {
    el.addEventListener('change', () => {
      atualizaNotaRitmo();
      calcula();
    });
  });

  // Atalhos de tempo/distância/passos: preenchem e já calculam.
  document.querySelectorAll<HTMLButtonElement>('.cc-preset').forEach((b) => {
    b.addEventListener('click', () => {
      // Sem data-alvo não é preset. Hoje todos têm; a guarda evita que um
      // botão futuro com a mesma classe apague o campo do modo atual.
      if (!b.dataset.alvo) return;
      const alvo = campos[b.dataset.alvo as Modo];
      if (!alvo) return;
      alvo.value = b.dataset.valor ?? '';
      calcula();
      alvo.focus();
    });
  });

  const limite = document.querySelector<HTMLInputElement>('#cc-inclinacao');
  if (limite) limite.max = String(INCLINACAO_MAX);

  evento('calculator_view');
  const notaRitmo = $<HTMLElement>('#cc-ritmo-nota');
  if (notaRitmo) reservaAltura(notaRitmo, RITMOS.map((r) => r.comoReconhecer));
  atualizaNotaRitmo();
  calcula();
}
