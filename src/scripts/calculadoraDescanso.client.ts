/**
 * Interface da calculadora de descanso entre séries e do timer.
 *
 * TRÊS TELAS NO MESMO CARTÃO
 *
 * 1. As quatro perguntas (objetivo, exercício, repetições, esforço). O
 *    resultado aparece assim que a quarta é respondida.
 * 2. O timer. Ao abrir, as perguntas somem: na academia, só o tempo, a
 *    série e os botões que importam.
 * 3. O retorno da série ("como foi?"), que ajusta o próximo descanso.
 *
 * O RELÓGIO
 *
 * O tempo restante é sempre `fim − agora`, recalculado a cada 250 ms e no
 * `visibilitychange`. O `setInterval` só redesenha; quem manda é o
 * timestamp. Trocar de aplicativo ou bloquear a tela não atrasa nada, e
 * recarregar a página volta ao timer certo (o estado vive no
 * sessionStorage). A tela fica acesa pelo Wake Lock quando o navegador
 * deixa; sem ele, o tempo continua certo, só a tela pode apagar.
 *
 * O QUE NÃO SAI DO APARELHO
 *
 * Carga e repetições anotadas ficam no sessionStorage; os últimos
 * exercícios, no localStorage, com botão para apagar. O dataLayer recebe só
 * categorias (objetivo, tipo de exercício, faixa de repetições, faixa do
 * resultado), nunca carga nem o tempo exato.
 */
import {
  ATALHOS,
  ESCADA,
  ESFORCOS,
  FAIXAS_REPS,
  FEEDBACKS,
  NOTA_TECNICAS,
  ajustar,
  buscaExercicios,
  calcular,
  comArtigo,
  demandaGenerica,
  esforcoDoRir,
  esforcoDoRpe,
  exercicio,
  explicacao,
  faixaAnalytics,
  faixaDasReps,
  formataTempo,
  formataTempoExtenso,
  type Demanda,
  type Esforco,
  type FaixaReps,
  type Feedback,
  type Objetivo,
  type Resultado,
  type TipoGenerico,
} from '../lib/forca/descanso';
import { focoSemSalto } from './focoSemSalto';

const $ = <T extends HTMLElement>(sel: string, raiz: ParentNode = document): T | null =>
  raiz.querySelector<T>(sel);
const $$ = <T extends HTMLElement>(sel: string, raiz: ParentNode = document): T[] =>
  Array.from(raiz.querySelectorAll<T>(sel));

const CHAVE_SESSAO = 'ppp-descanso-sessao';
const CHAVE_RECENTES = 'ppp-descanso-recentes';
const CHAVE_PREFS = 'ppp-descanso-prefs';

interface Serie {
  n: number;
  descanso?: number;
  feedback?: Feedback;
  reps?: number;
  carga?: number;
}

interface Estado {
  objetivo?: Objetivo;
  exId?: string;
  exNome?: string;
  demanda?: Demanda;
  artigo?: string;
  reps?: FaixaReps;
  esforco?: Esforco;
  /** Degrau atual do timer (pode ter sido ajustado). */
  degrau?: number;
  subidas: number;
  series: Serie[];
  timer?: { fim: number; restante: number; total: number; pausado: boolean };
  tela: 'perguntas' | 'timer' | 'fim' | 'retorno';
}

interface Recente {
  exId?: string;
  exNome: string;
  demanda: Demanda;
  objetivo: Objetivo;
  reps: FaixaReps;
  esforco: Esforco;
  segundos: number;
  em: number;
}

/* ───────── armazenamento que nunca quebra ───────── */

function le<T>(onde: Storage | undefined, chave: string): T | null {
  try {
    const v = onde?.getItem(chave);
    return v ? (JSON.parse(v) as T) : null;
  } catch {
    return null;
  }
}
function grava(onde: Storage | undefined, chave: string, valor: unknown): void {
  try {
    onde?.setItem(chave, JSON.stringify(valor));
  } catch {
    /* sem armazenamento (aba privada, cota): segue sem lembrar */
  }
}
function apaga(onde: Storage | undefined, chave: string): void {
  try {
    onde?.removeItem(chave);
  } catch {
    /* idem */
  }
}
const sessao = (): Storage | undefined => {
  try {
    return window.sessionStorage;
  } catch {
    return undefined;
  }
};
const local = (): Storage | undefined => {
  try {
    return window.localStorage;
  } catch {
    return undefined;
  }
};

export function iniciarCalculadoraDescanso(): void {
  const app = $<HTMLElement>('#ds-app');
  if (!app) return;
  app.classList.add('is-js');

  const telaPerguntas = $<HTMLElement>('#ds-perguntas', app)!;
  const telaTimer = $<HTMLElement>('#ds-timer', app)!;
  const resultado = $<HTMLElement>('#ds-resultado', app)!;
  const progresso = $<HTMLElement>('#ds-progresso', app)!;
  const busca = $<HTMLInputElement>('#ds-busca', app)!;
  const lista = $<HTMLUListElement>('#ds-sugestoes', app)!;
  const generico = $<HTMLElement>('#ds-generico', app)!;
  const repsNum = $<HTMLInputElement>('#ds-reps-num', app)!;
  const avancado = $<HTMLElement>('#ds-avancado', app)!;
  const escalaInput = $<HTMLInputElement>('#ds-escala-valor', app)!;
  const aviso = $<HTMLElement>('#ds-aviso', app)!;
  const anuncio = $<HTMLElement>('#ds-anuncio', app)!;
  const tituloOriginal = document.title;

  const prefs = le<{ som: boolean; vibrar: boolean }>(local(), CHAVE_PREFS) ?? { som: false, vibrar: true };
  let est: Estado = le<Estado>(sessao(), CHAVE_SESSAO) ?? { subidas: 0, series: [], tela: 'perguntas' };
  let comecou = false;
  let gerouResultado = false;
  let tique: number | undefined;
  let ultimoAnuncio = -1;
  let wakeLock: { release: () => Promise<void> } | null = null;
  let audio: AudioContext | null = null;
  let escala: 'rir' | 'rpe' = 'rir';

  const salvar = () => grava(sessao(), CHAVE_SESSAO, est);

  function evento(nome: string, extra: Record<string, string | number> = {}): void {
    try {
      const w = window as unknown as { dataLayer?: unknown[] };
      w.dataLayer = w.dataLayer || [];
      w.dataLayer.push({ event: nome, tool: 'descanso-entre-series', ...extra });
    } catch {
      /* analytics nunca derruba a ferramenta */
    }
  }
  const comecar = () => {
    if (!comecou) {
      comecou = true;
      evento('rest_calculator_start');
    }
  };

  /* ───────── perguntas ───────── */

  function marca(grupo: string, valor: string | undefined): void {
    $$<HTMLButtonElement>(`[data-grupo="${grupo}"] [data-valor]`, app).forEach((b) => {
      const ativo = b.dataset.valor === valor;
      b.classList.toggle('is-ativo', ativo);
      b.setAttribute('aria-pressed', String(ativo));
    });
  }

  function atualizaProgresso(): void {
    const feitas = [est.objetivo, est.demanda, est.reps, est.esforco].filter(Boolean).length;
    progresso.textContent = feitas === 4 ? 'Pronto: veja a faixa abaixo.' : `${feitas} de 4 respondidas`;
  }

  function resultadoAtual(): Resultado | null {
    if (!est.objetivo || !est.demanda || !est.reps || !est.esforco) return null;
    return calcular({ objetivo: est.objetivo, demanda: est.demanda, reps: est.reps, esforco: est.esforco });
  }

  function desenhaResultado(silencioso = false): void {
    atualizaProgresso();
    const r = resultadoAtual();
    if (!r) {
      resultado.hidden = true;
      return;
    }
    est.degrau = r.degrauInicio;
    est.series = [];
    est.subidas = 0;
    salvar();
    $<HTMLElement>('.ds-faixa', resultado)!.textContent = `${formataTempo(r.min)} a ${formataTempo(r.max)}`;
    $<HTMLElement>('.ds-faixa-extenso', resultado)!.textContent = `${formataTempoExtenso(r.min)} a ${formataTempoExtenso(r.max)}`;
    $<HTMLElement>('.ds-contexto', resultado)!.textContent = [
      est.exNome,
      FAIXAS_REPS.find((f) => f.id === est.reps)?.nome + ' repetições',
      ESFORCOS.find((e) => e.id === est.esforco)?.nome.toLowerCase(),
    ]
      .filter(Boolean)
      .join(' · ');
    $<HTMLElement>('.ds-inicio', resultado)!.textContent =
      `Comece em ${formataTempo(r.inicio)} e ajuste pela próxima série: se ela sair parecida com esta, o tempo está bom.`;
    const exAtual = est.exId ? exercicio(est.exId) : undefined;
    $<HTMLElement>('.ds-por-que-texto', resultado)!.textContent = explicacao(r, exAtual ? comArtigo(exAtual) : undefined);
    $<HTMLButtonElement>('#ds-iniciar', resultado)!.textContent = `Iniciar timer de ${formataTempo(r.inicio)}`;
    const notaTec = $<HTMLElement>('.ds-nota-tecnicas', resultado)!;
    notaTec.hidden = est.objetivo !== 'condicionamento';
    notaTec.textContent = NOTA_TECNICAS;
    const artigo = $<HTMLAnchorElement>('.ds-artigo', resultado)!;
    if (est.artigo) {
      artigo.href = est.artigo;
      artigo.textContent = `Como fazer: ${est.exNome?.toLowerCase()}`;
      artigo.parentElement!.hidden = false;
    } else artigo.parentElement!.hidden = true;
    resultado.hidden = false;

    if (!silencioso) evento('rest_result_generated', {
      goal: est.objetivo!,
      exercise_type: est.demanda!,
      rep_range: est.reps!,
      effort_range: est.esforco!,
      result_range: faixaAnalytics(r),
    });
    if (!gerouResultado) {
      gerouResultado = true;
      const reduz = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
      resultado.scrollIntoView({ block: 'nearest', behavior: reduz ? 'auto' : 'smooth' });
    }
  }

  app.addEventListener('click', (ev) => {
    const alvo = (ev.target as HTMLElement).closest<HTMLElement>('[data-valor]');
    if (!alvo || !telaPerguntas.contains(alvo)) return;
    const grupo = alvo.closest<HTMLElement>('[data-grupo]')?.dataset.grupo;
    const valor = alvo.dataset.valor!;
    comecar();
    if (grupo === 'objetivo') {
      est.objetivo = valor as Objetivo;
      evento('rest_goal_selected', { goal: valor });
    } else if (grupo === 'reps') {
      est.reps = valor as FaixaReps;
      repsNum.value = '';
      evento('rest_reps_selected', { rep_range: valor });
    } else if (grupo === 'esforco') {
      est.esforco = valor as Esforco;
      escalaInput.value = '';
      evento('rest_effort_selected', { effort_range: valor });
    } else if (grupo === 'atalho') {
      escolheExercicio(valor);
      return;
    } else if (grupo === 'generico') {
      est.exId = undefined;
      est.exNome = undefined;
      est.artigo = undefined;
      est.demanda = demandaGenerica(valor as TipoGenerico);
      evento('rest_exercise_selected', { exercise_type: est.demanda, exercise: 'fora_da_base' });
    } else return;
    marca(grupo!, valor);
    desenhaResultado();
  });

  /* exercício: busca com lista de sugestões (combobox) */
  let ativo = -1;
  let sugestoes: ReturnType<typeof buscaExercicios> = [];

  function fechaLista(): void {
    lista.hidden = true;
    busca.setAttribute('aria-expanded', 'false');
    busca.removeAttribute('aria-activedescendant');
    ativo = -1;
  }

  function abreLista(): void {
    sugestoes = buscaExercicios(busca.value);
    lista.innerHTML = '';
    if (!busca.value.trim()) return fechaLista();
    if (!sugestoes.length) {
      const li = document.createElement('li');
      li.className = 'ds-sugestao-vazia';
      li.textContent = 'Não achamos. Use "Não encontrei meu exercício" abaixo.';
      lista.append(li);
    }
    sugestoes.forEach((e, i) => {
      const li = document.createElement('li');
      li.id = `ds-sug-${i}`;
      li.setAttribute('role', 'option');
      li.dataset.id = e.id;
      li.textContent = e.nome;
      lista.append(li);
    });
    lista.hidden = false;
    busca.setAttribute('aria-expanded', 'true');
  }

  function marcaAtivo(i: number): void {
    const itens = $$<HTMLLIElement>('[role="option"]', lista);
    if (!itens.length) return;
    ativo = (i + itens.length) % itens.length;
    itens.forEach((li, j) => li.setAttribute('aria-selected', String(j === ativo)));
    busca.setAttribute('aria-activedescendant', itens[ativo].id);
  }

  function escolheExercicio(id: string): void {
    const e = exercicio(id);
    if (!e) return;
    comecar();
    est.exId = e.id;
    est.exNome = e.nome;
    est.demanda = e.demanda;
    est.artigo = e.artigo;
    busca.value = e.nome;
    fechaLista();
    generico.hidden = true;
    marca('atalho', ATALHOS.includes(id) ? id : undefined);
    marca('generico', undefined);
    evento('rest_exercise_selected', { exercise_type: e.demanda, exercise: e.id });
    desenhaResultado();
  }

  busca.addEventListener('input', () => {
    comecar();
    abreLista();
  });
  busca.addEventListener('keydown', (ev) => {
    if (ev.key === 'ArrowDown') {
      ev.preventDefault();
      if (lista.hidden) abreLista();
      marcaAtivo(ativo + 1);
    } else if (ev.key === 'ArrowUp') {
      ev.preventDefault();
      marcaAtivo(ativo - 1);
    } else if (ev.key === 'Enter') {
      ev.preventDefault();
      const id = sugestoes[ativo >= 0 ? ativo : 0]?.id;
      if (id) escolheExercicio(id);
    } else if (ev.key === 'Escape') fechaLista();
  });
  busca.addEventListener('blur', () => window.setTimeout(fechaLista, 150));
  lista.addEventListener('mousedown', (ev) => {
    const li = (ev.target as HTMLElement).closest<HTMLLIElement>('[data-id]');
    if (li) {
      ev.preventDefault();
      escolheExercicio(li.dataset.id!);
    }
  });

  $<HTMLButtonElement>('#ds-nao-encontrei', app)?.addEventListener('click', () => {
    generico.hidden = !generico.hidden;
    if (!generico.hidden) focoSemSalto($<HTMLButtonElement>('[data-valor]', generico)!);
  });

  repsNum.addEventListener('input', () => {
    const n = Number(repsNum.value.replace(',', '.'));
    const f = repsNum.value.trim() ? faixaDasReps(n) : null;
    aviso.hidden = true;
    if (repsNum.value.trim() && !f) {
      aviso.textContent = 'Use um número de 1 a 100 repetições.';
      aviso.hidden = false;
      return;
    }
    if (!f) return;
    comecar();
    est.reps = f;
    marca('reps', f);
    evento('rest_reps_selected', { rep_range: f, manual: 1 });
    desenhaResultado();
  });

  $<HTMLButtonElement>('#ds-abre-avancado', app)?.addEventListener('click', (ev) => {
    const b = ev.currentTarget as HTMLButtonElement;
    avancado.hidden = !avancado.hidden;
    b.setAttribute('aria-expanded', String(!avancado.hidden));
    if (!avancado.hidden) focoSemSalto(escalaInput);
  });
  $$<HTMLButtonElement>('[data-escala]', app).forEach((b) =>
    b.addEventListener('click', () => {
      escala = b.dataset.escala as 'rir' | 'rpe';
      $$<HTMLButtonElement>('[data-escala]', app).forEach((x) => x.setAttribute('aria-pressed', String(x === b)));
      escalaInput.placeholder = escala === 'rir' ? 'Ex.: 2' : 'Ex.: 8';
      escalaInput.dispatchEvent(new Event('input'));
    }),
  );
  escalaInput.addEventListener('input', () => {
    const v = Number(escalaInput.value.replace(',', '.'));
    const e = escalaInput.value.trim() ? (escala === 'rir' ? esforcoDoRir(v) : esforcoDoRpe(v)) : null;
    aviso.hidden = true;
    if (escalaInput.value.trim() && !e) {
      aviso.textContent = escala === 'rir' ? 'RIR vai de 0 (falha) a 10.' : 'RPE vai de 1 a 10 (10 é a falha).';
      aviso.hidden = false;
      return;
    }
    if (!e) return;
    comecar();
    est.esforco = e;
    marca('esforco', e);
    evento('rest_effort_selected', { effort_range: e, escala });
    desenhaResultado();
  });

  /* ───────── timer ───────── */

  const tempoEl = $<HTMLElement>('#ds-tempo', telaTimer)!;
  const barra = $<HTMLElement>('#ds-barra', telaTimer)!;
  const pausar = $<HTMLButtonElement>('#ds-pausar', telaTimer)!;
  const blocoContando = $<HTMLElement>('#ds-contando', telaTimer)!;
  const blocoFim = $<HTMLElement>('#ds-fim', telaTimer)!;
  const blocoRetorno = $<HTMLElement>('#ds-retorno', telaTimer)!;
  const msgAjuste = $<HTMLElement>('#ds-ajuste', telaTimer)!;
  const historico = $<HTMLOListElement>('#ds-historico', telaTimer)!;

  const restante = (): number => {
    const t = est.timer;
    if (!t) return 0;
    return t.pausado ? t.restante : Math.max(0, (t.fim - Date.now()) / 1000);
  };

  async function pedeTelaAcesa(): Promise<void> {
    try {
      const nav = navigator as unknown as { wakeLock?: { request: (t: 'screen') => Promise<{ release: () => Promise<void> }> } };
      if (nav.wakeLock && !wakeLock) wakeLock = await nav.wakeLock.request('screen');
    } catch {
      wakeLock = null;
    }
  }
  function soltaTela(): void {
    wakeLock?.release().catch(() => undefined);
    wakeLock = null;
  }

  function bipe(): void {
    if (!prefs.som) return;
    try {
      audio ??= new AudioContext();
      const o = audio.createOscillator();
      const g = audio.createGain();
      o.frequency.value = 880;
      g.gain.setValueAtTime(0.0001, audio.currentTime);
      g.gain.exponentialRampToValueAtTime(0.25, audio.currentTime + 0.02);
      g.gain.exponentialRampToValueAtTime(0.0001, audio.currentTime + 0.45);
      o.connect(g).connect(audio.destination);
      o.start();
      o.stop(audio.currentTime + 0.5);
    } catch {
      /* sem áudio: fica o aviso visual */
    }
  }

  function anuncia(texto: string): void {
    anuncio.textContent = texto;
  }

  function desenhaTimer(): void {
    const t = est.timer;
    if (!t) return;
    const s = restante();
    const inteiro = Math.ceil(s);
    tempoEl.textContent = formataTempo(inteiro);
    barra.style.transform = `scaleX(${t.total > 0 ? Math.min(1, s / t.total) : 0})`;
    document.title = `${formataTempo(inteiro)} · Descanso`;
    for (const marco of [60, 30, 10]) {
      if (inteiro === marco && ultimoAnuncio !== marco && t.total > marco) {
        ultimoAnuncio = marco;
        anuncia(marco === 60 ? '1 minuto restante' : `${marco} segundos restantes`);
      }
    }
    if (s <= 0 && !t.pausado) terminaDescanso(true);
  }

  function rodar(): void {
    window.clearInterval(tique);
    tique = window.setInterval(desenhaTimer, 250);
    desenhaTimer();
  }

  function mostra(tela: Estado['tela']): void {
    est.tela = tela;
    telaPerguntas.hidden = tela !== 'perguntas';
    telaTimer.hidden = tela === 'perguntas';
    blocoContando.hidden = tela !== 'timer';
    blocoFim.hidden = tela !== 'fim';
    blocoRetorno.hidden = tela !== 'retorno';
    app.classList.toggle('is-treino', tela !== 'perguntas');
    salvar();
  }

  function iniciaDescanso(segundos: number): void {
    const r = resultadoAtual();
    if (!r) return;
    if (!est.series.length) est.series.push({ n: 1 });
    est.series[est.series.length - 1].descanso = segundos;
    est.timer = { fim: Date.now() + segundos * 1000, restante: segundos, total: segundos, pausado: false };
    ultimoAnuncio = -1;
    $<HTMLElement>('#ds-timer-ex', telaTimer)!.textContent = est.exNome ?? 'Seu exercício';
    $<HTMLElement>('#ds-timer-serie', telaTimer)!.textContent = `Descanso depois da série ${est.series.length}`;
    pausar.textContent = 'Pausar';
    mostra('timer');
    desenhaHistorico();
    void pedeTelaAcesa();
    rodar();
    anuncia(`Descanso de ${formataTempoExtenso(segundos)} iniciado`);
    focoSemSalto($<HTMLElement>('#ds-timer-h', telaTimer)!);
    evento('rest_timer_started', { result_range: faixaAnalytics(r), set: est.series.length });
  }

  function terminaDescanso(completo: boolean): void {
    window.clearInterval(tique);
    soltaTela();
    document.title = tituloOriginal;
    if (est.timer) est.timer = { ...est.timer, pausado: true, restante: 0 };
    mostra('fim');
    $<HTMLElement>('#ds-fim-h', telaTimer)!.textContent = completo ? 'O intervalo terminou' : 'Descanso encerrado';
    if (completo) {
      anuncia('O intervalo terminou. Hora da próxima série.');
      bipe();
      if (prefs.vibrar) {
        try {
          navigator.vibrate?.([200, 100, 200]);
        } catch {
          /* sem vibração */
        }
      }
      evento('rest_timer_completed', { set: est.series.length });
    }
    focoSemSalto($<HTMLElement>('#ds-fim-h', telaTimer)!);
  }

  function soma(delta: number): void {
    const t = est.timer;
    if (!t) return;
    const novo = Math.max(1, restante() + delta);
    est.timer = t.pausado
      ? { ...t, restante: novo, total: Math.max(t.total, novo) }
      : { ...t, fim: Date.now() + novo * 1000, total: Math.max(t.total, novo) };
    const serie = est.series[est.series.length - 1];
    if (serie) serie.descanso = Math.max(0, (serie.descanso ?? 0) + delta);
    salvar();
    desenhaTimer();
    anuncia(`${delta > 0 ? 'Mais' : 'Menos'} ${Math.abs(delta)} segundos`);
    evento(delta > 0 ? 'rest_timer_extended' : 'rest_timer_reduced', { seconds: Math.abs(delta) });
  }

  $$<HTMLButtonElement>('[data-soma]', telaTimer).forEach((b) =>
    b.addEventListener('click', () => {
      const delta = Number(b.dataset.soma);
      if (est.tela === 'fim') {
        // "+30 s" depois do fim: reabre o timer com 30 s.
        est.timer = { fim: Date.now() + delta * 1000, restante: delta, total: delta, pausado: false };
        const serie = est.series[est.series.length - 1];
        if (serie) serie.descanso = (serie.descanso ?? 0) + delta;
        ultimoAnuncio = -1;
        mostra('timer');
        void pedeTelaAcesa();
        rodar();
        evento('rest_timer_extended', { seconds: delta, depois_do_fim: 1 });
        return;
      }
      soma(delta);
    }),
  );

  pausar.addEventListener('click', () => {
    const t = est.timer;
    if (!t) return;
    if (t.pausado) {
      est.timer = { ...t, pausado: false, fim: Date.now() + t.restante * 1000 };
      pausar.textContent = 'Pausar';
      void pedeTelaAcesa();
      rodar();
      anuncia('Continuando');
    } else {
      est.timer = { ...t, pausado: true, restante: restante() };
      pausar.textContent = 'Continuar';
      window.clearInterval(tique);
      anuncia('Pausado');
    }
    salvar();
  });

  $<HTMLButtonElement>('#ds-pular', telaTimer)!.addEventListener('click', () => {
    const t = est.timer;
    const serie = est.series[est.series.length - 1];
    if (t && serie) serie.descanso = Math.max(0, Math.round(t.total - restante()));
    terminaDescanso(false);
  });

  $<HTMLButtonElement>('#ds-iniciar', resultado)!.addEventListener('click', () => {
    if (!audio && prefs.som) {
      try {
        audio = new AudioContext();
      } catch {
        audio = null;
      }
    }
    const r = resultadoAtual();
    if (r) iniciaDescanso(ESCADA[est.degrau ?? r.degrauInicio]);
  });

  /* "Fiz a série" → como foi? */
  $<HTMLButtonElement>('#ds-fiz', telaTimer)!.addEventListener('click', () => {
    est.series.push({ n: est.series.length + 1 });
    mostra('retorno');
    $<HTMLElement>('#ds-retorno-h', telaTimer)!.textContent = `Como foi a série ${est.series.length}, comparada à anterior?`;
    msgAjuste.hidden = true;
    $<HTMLElement>('#ds-depois', telaTimer)!.hidden = true;
    $$<HTMLButtonElement>('[data-feedback]', telaTimer).forEach((b) => {
      b.disabled = false;
      b.classList.remove('is-ativo');
      b.setAttribute('aria-pressed', 'false');
    });
    ($<HTMLInputElement>('#ds-anota-reps', telaTimer)!).value = '';
    ($<HTMLInputElement>('#ds-anota-carga', telaTimer)!).value = '';
    focoSemSalto($<HTMLElement>('#ds-retorno-h', telaTimer)!);
  });

  $$<HTMLButtonElement>('[data-feedback]', telaTimer).forEach((b) =>
    b.addEventListener('click', () => {
      const r = resultadoAtual();
      if (!r) return;
      const fb = b.dataset.feedback as Feedback;
      $$<HTMLButtonElement>('[data-feedback]', telaTimer).forEach((x) => {
        x.classList.toggle('is-ativo', x === b);
        x.setAttribute('aria-pressed', String(x === b));
      });
      const atual = est.degrau ?? r.degrauInicio;
      const aj = ajustar(r, atual, fb, est.subidas);
      // Conta as quedas grandes seguidas; manter ou sobrar tempo zera a conta.
      est.subidas = fb === 'perdeu3' || fb === 'reduziu' ? est.subidas + 1 : fb === 'manteve' || fb === 'sobrou' ? 0 : est.subidas;
      est.degrau = aj.degrau;
      const serie = est.series[est.series.length - 1];
      serie.feedback = fb;
      const reps = Number(($<HTMLInputElement>('#ds-anota-reps', telaTimer)!).value);
      const carga = Number(($<HTMLInputElement>('#ds-anota-carga', telaTimer)!).value.replace(',', '.'));
      if (reps > 0 && reps <= 100) serie.reps = reps;
      if (carga > 0 && carga <= 1000) serie.carga = carga;
      msgAjuste.textContent =
        aj.mudou === 0
          ? `${aj.mensagem} Próximo descanso: ${formataTempo(aj.segundos)}.`
          : `${aj.mensagem} Próximo descanso: ${formataTempo(aj.segundos)} (antes, ${formataTempo(ESCADA[atual])}).`;
      msgAjuste.hidden = false;
      const proximo = $<HTMLButtonElement>('#ds-proximo', telaTimer)!;
      proximo.textContent = `Iniciar descanso de ${formataTempo(aj.segundos)}`;
      $<HTMLElement>('#ds-depois', telaTimer)!.hidden = false;
      salvar();
      desenhaHistorico();
      lembra(aj.segundos);
      evento('rest_next_set_feedback', { feedback: fb, set: est.series.length });
      if (aj.mudou !== 0) evento('rest_recommendation_adjusted', { direction: aj.mudou > 0 ? 'up' : 'down' });
    }),
  );

  $<HTMLButtonElement>('#ds-proximo', telaTimer)!.addEventListener('click', () => {
    const r = resultadoAtual();
    if (r) iniciaDescanso(ESCADA[est.degrau ?? r.degrauInicio]);
  });

  function encerraExercicio(): void {
    window.clearInterval(tique);
    soltaTela();
    document.title = tituloOriginal;
    const r = resultadoAtual();
    if (r) lembra(ESCADA[est.degrau ?? r.degrauInicio]);
    est.timer = undefined;
    est.series = [];
    est.subidas = 0;
    mostra('perguntas');
    desenhaRecentes();
    focoSemSalto($<HTMLElement>('#ds-app-h', app)!);
  }
  $$<HTMLButtonElement>('[data-encerrar]', telaTimer).forEach((b) => b.addEventListener('click', encerraExercicio));

  function desenhaHistorico(): void {
    historico.innerHTML = '';
    const nomes: Record<Feedback, string> = {
      manteve: 'manteve',
      perdeu12: 'perdeu 1–2 reps',
      perdeu3: 'perdeu 3+ reps',
      reduziu: 'baixou a carga',
      sobrou: 'pronto antes',
    };
    est.series.forEach((s) => {
      const li = document.createElement('li');
      const partes = [`Série ${s.n}`];
      if (s.reps) partes.push(`${s.reps} reps`);
      if (s.carga) partes.push(`${String(s.carga).replace('.', ',')} kg`);
      if (s.feedback) partes.push(nomes[s.feedback]);
      if (s.descanso !== undefined) partes.push(`descanso ${formataTempo(s.descanso)}`);
      li.textContent = partes.join(' · ');
      historico.append(li);
    });
    historico.parentElement!.hidden = est.series.length === 0;
  }

  /* ───────── preferências ───────── */

  const somBtn = $<HTMLButtonElement>('#ds-som', telaTimer)!;
  const vibBtn = $<HTMLButtonElement>('#ds-vibrar', telaTimer)!;
  const desenhaPrefs = () => {
    somBtn.setAttribute('aria-pressed', String(prefs.som));
    somBtn.textContent = prefs.som ? 'Som: ligado' : 'Som: desligado';
    vibBtn.setAttribute('aria-pressed', String(prefs.vibrar));
    vibBtn.textContent = prefs.vibrar ? 'Vibrar: ligado' : 'Vibrar: desligado';
  };
  if (!('vibrate' in navigator)) vibBtn.hidden = true;
  somBtn.addEventListener('click', () => {
    prefs.som = !prefs.som;
    if (prefs.som && !audio) {
      try {
        audio = new AudioContext();
      } catch {
        audio = null;
      }
    }
    grava(local(), CHAVE_PREFS, prefs);
    desenhaPrefs();
  });
  vibBtn.addEventListener('click', () => {
    prefs.vibrar = !prefs.vibrar;
    grava(local(), CHAVE_PREFS, prefs);
    desenhaPrefs();
  });
  desenhaPrefs();

  /* ───────── recentes: continuar de onde parou ───────── */

  const recentesBox = $<HTMLElement>('#ds-recentes', app)!;
  const recentesLista = $<HTMLUListElement>('#ds-recentes-lista', app)!;

  function lembra(segundos: number): void {
    if (!est.objetivo || !est.demanda || !est.reps || !est.esforco) return;
    const atual = le<Recente[]>(local(), CHAVE_RECENTES) ?? [];
    const nome = est.exNome ?? 'Exercício fora da lista';
    const novo: Recente = {
      exId: est.exId,
      exNome: nome,
      demanda: est.demanda,
      objetivo: est.objetivo,
      reps: est.reps,
      esforco: est.esforco,
      segundos,
      em: Date.now(),
    };
    const outros = atual.filter((r) => r.exNome !== nome);
    grava(local(), CHAVE_RECENTES, [novo, ...outros].slice(0, 6));
  }

  function desenhaRecentes(): void {
    const recentes = le<Recente[]>(local(), CHAVE_RECENTES) ?? [];
    recentesLista.innerHTML = '';
    recentes.forEach((r, i) => {
      const li = document.createElement('li');
      const b = document.createElement('button');
      b.type = 'button';
      b.className = 'ds-recente';
      b.dataset.i = String(i);
      b.textContent = `${r.exNome} — ${formataTempo(r.segundos)}`;
      li.append(b);
      recentesLista.append(li);
    });
    recentesBox.hidden = recentes.length === 0;
  }

  recentesLista.addEventListener('click', (ev) => {
    const b = (ev.target as HTMLElement).closest<HTMLButtonElement>('.ds-recente');
    if (!b) return;
    const r = (le<Recente[]>(local(), CHAVE_RECENTES) ?? [])[Number(b.dataset.i)];
    if (!r) return;
    comecar();
    est = { subidas: 0, series: [], tela: 'perguntas', objetivo: r.objetivo, reps: r.reps, esforco: r.esforco, demanda: r.demanda };
    const e = r.exId ? exercicio(r.exId) : undefined;
    if (e) {
      est.exId = e.id;
      est.exNome = e.nome;
      est.artigo = e.artigo;
      busca.value = e.nome;
    } else busca.value = '';
    sincronizaMarcas();
    desenhaResultado();
    const res = resultadoAtual();
    const degrau = ESCADA.indexOf(r.segundos as (typeof ESCADA)[number]);
    if (res && degrau >= 0) {
      est.degrau = degrau;
      $<HTMLButtonElement>('#ds-iniciar', resultado)!.textContent = `Iniciar timer de ${formataTempo(r.segundos)} (o seu último)`;
      salvar();
    }
    evento('rest_recent_used');
  });

  $<HTMLButtonElement>('#ds-recentes-apagar', app)?.addEventListener('click', () => {
    apaga(local(), CHAVE_RECENTES);
    desenhaRecentes();
    anuncia('Exercícios salvos apagados deste aparelho');
  });

  /* ───────── compartilhar ───────── */

  $<HTMLButtonElement>('#ds-compartilhar', app)?.addEventListener('click', async () => {
    const url = location.origin + location.pathname;
    const texto = 'Calculadora de descanso entre séries com timer. Testa no seu treino:';
    const nav = navigator as Navigator & { share?: (d: ShareData) => Promise<void> };
    try {
      if (nav.share) {
        await nav.share({ title: 'Quanto descansar entre séries', text: texto, url });
        evento('rest_tool_shared', { method: 'nativo' });
        return;
      }
      await navigator.clipboard.writeText(url);
      anuncia('Link copiado');
      const b = $<HTMLButtonElement>('#ds-compartilhar', app)!;
      const antes = b.textContent;
      b.textContent = 'Link copiado';
      window.setTimeout(() => (b.textContent = antes), 2000);
      evento('rest_tool_shared', { method: 'copiar' });
    } catch {
      /* cancelado ou sem permissão: nada a fazer */
    }
  });
  $<HTMLAnchorElement>('#ds-whats', app)?.addEventListener('click', () => evento('rest_tool_shared', { method: 'whatsapp' }));

  $$<HTMLAnchorElement>('[data-rest-link]', document).forEach((a) =>
    a.addEventListener('click', () => {
      const tipo = a.dataset.restLink!;
      evento(tipo === 'personal' ? 'rest_find_personal_clicked' : 'rest_related_tool_clicked', { target: tipo });
    }),
  );

  /* ───────── volta ao estado salvo ───────── */

  function sincronizaMarcas(): void {
    marca('objetivo', est.objetivo);
    marca('reps', est.reps);
    marca('esforco', est.esforco);
    marca('atalho', est.exId && ATALHOS.includes(est.exId) ? est.exId : undefined);
    if (est.exNome) busca.value = est.exNome;
  }

  document.addEventListener('visibilitychange', () => {
    if (document.visibilityState === 'visible' && est.tela === 'timer') {
      void pedeTelaAcesa();
      desenhaTimer();
    }
  });

  sincronizaMarcas();
  desenhaRecentes();
  if (resultadoAtual()) {
    const degrau = est.degrau;
    const series = est.series;
    const subidas = est.subidas;
    desenhaResultado(true);
    // desenhaResultado zera a sessão; aqui ela volta como estava.
    est.degrau = degrau;
    est.series = series;
    est.subidas = subidas;
    gerouResultado = true;
    if (est.tela === 'timer' && est.timer) {
      mostra('timer');
      desenhaHistorico();
      $<HTMLElement>('#ds-timer-ex', telaTimer)!.textContent = est.exNome ?? 'Seu exercício';
      $<HTMLElement>('#ds-timer-serie', telaTimer)!.textContent = `Descanso depois da série ${est.series.length}`;
      pausar.textContent = est.timer.pausado ? 'Continuar' : 'Pausar';
      if (est.timer.pausado) desenhaTimer();
      else rodar();
    } else if (est.tela === 'fim' || est.tela === 'retorno') {
      // No meio do "como foi?", a série nova ainda não tinha retorno: volta ao "fiz a série".
      const ultima = est.series[est.series.length - 1];
      if (est.tela === 'retorno' && ultima && !ultima.feedback) est.series.pop();
      mostra('fim');
      desenhaHistorico();
    }
  }
  atualizaProgresso();
  evento('rest_calculator_view');
}
