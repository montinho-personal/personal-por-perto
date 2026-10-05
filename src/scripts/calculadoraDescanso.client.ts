/**
 * Interface da calculadora de descanso entre séries e do timer.
 *
 * DUAS TELAS NO MESMO CARTÃO
 *
 * 1. As quatro perguntas (objetivo, exercício, repetições, esforço). O
 *    resultado aparece assim que a quarta é respondida.
 * 2. O treino: o timer e, a partir da segunda série, o "como foi?" logo
 *    abaixo dele. "Fiz a série" já começa o descanso — o tempo gasto
 *    respondendo não fica fora da conta (auditoria de 05/10/2026). A
 *    resposta ajusta o descanso que está correndo, pela diferença.
 *
 * O RELÓGIO
 *
 * O tempo restante é sempre `fim − agora`, recalculado a cada 250 ms, no
 * `visibilitychange` e por um `setTimeout` exato no fim. O `setInterval` só
 * redesenha; quem manda é o timestamp. Trocar de aplicativo ou recarregar a
 * página não atrasa nada (o estado vive no sessionStorage, validado ao
 * ler). A tela fica acesa pelo Wake Lock quando o navegador deixa, e o
 * pedido é refeito sempre que a aba volta — o navegador solta o lock
 * sozinho quando ela some.
 *
 * O descanso de cada série é o tempo que passou de verdade (com +30, −15,
 * pausa e "pular"), não o planejado.
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
  DEGRAU_MAX,
  ESCADA,
  ESFORCOS,
  FAIXAS_REPS,
  NOTA_TECNICAS,
  OBJETIVOS,
  TIPOS_GENERICOS,
  ajustar,
  buscaExercicios,
  calcular,
  comArtigo,
  degrauMaisProximo,
  demandaGenerica,
  esforcoDoRir,
  esforcoDoRpe,
  exercicio,
  explicacao,
  faixaAnalytics,
  faixaAnalyticsSeg,
  faixaDasReps,
  formataFaixaFrase,
  formataTempo,
  formataTempoExtenso,
  limitesAjuste,
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

const VERSAO = 1;
const CHAVE_SESSAO = 'ppp-descanso-sessao';
const CHAVE_RECENTES = 'ppp-descanso-recentes';
const CHAVE_PREFS = 'ppp-descanso-prefs';
/** Um toque duplo não pode escolher nada na tela que acabou de aparecer. */
const TOQUE_FANTASMA_MS = 450;

interface Serie {
  n: number;
  /** Segundos de descanso DEPOIS desta série, medidos de verdade. */
  descanso?: number;
  feedback?: Feedback;
  reps?: number;
  carga?: number;
}

interface Timer {
  fim: number;
  restante: number;
  total: number;
  pausado: boolean;
  /** Quando este trecho começou a contar, e quanto ficou pausado. */
  inicio: number;
  pausaTotal: number;
  pausadoEm?: number;
  /** Segundos já contados antes deste trecho (o "+30" depois do fim). */
  acumulado: number;
  /** O descanso planejado agora — o "como foi?" mexe nele pela diferença. */
  planejado: number;
}

interface Retorno {
  /** Estado antes da resposta: trocar de resposta recalcula daqui, não acumula. */
  base: { degrau: number; quedas: number };
  feedback?: Feedback;
  mensagem?: string;
}

interface Estado {
  v: number;
  objetivo?: Objetivo;
  exId?: string;
  exNome?: string;
  demanda?: Demanda;
  artigo?: string;
  tipoGenerico?: TipoGenerico;
  reps?: FaixaReps;
  esforco?: Esforco;
  degrau?: number;
  quedas: number;
  series: Serie[];
  timer?: Timer;
  retorno?: Retorno;
  tela: 'perguntas' | 'timer' | 'fim';
}

interface Recente {
  exId?: string;
  exNome: string;
  demanda: Demanda;
  objetivo: Objetivo;
  reps: FaixaReps;
  esforco: Esforco;
  segundos: number;
}

/* ───────── armazenamento que nunca quebra ───────── */

function le(onde: Storage | undefined, chave: string): unknown {
  try {
    const v = onde?.getItem(chave);
    return v ? JSON.parse(v) : null;
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

const DEMANDAS: Demanda[] = ['alta', 'media', 'localizada'];
const ehObjetivo = (x: unknown): x is Objetivo => OBJETIVOS.some((o) => o.id === x);
const ehDemanda = (x: unknown): x is Demanda => DEMANDAS.includes(x as Demanda);
const ehReps = (x: unknown): x is FaixaReps => FAIXAS_REPS.some((f) => f.id === x);
const ehEsforco = (x: unknown): x is Esforco => ESFORCOS.some((e) => e.id === x);
const ehDegrau = (x: unknown): x is number => Number.isInteger(x) && (x as number) >= 0 && (x as number) <= DEGRAU_MAX;
const ehNum = (x: unknown): x is number => typeof x === 'number' && Number.isFinite(x);

/** O que vem do sessionStorage é dado de outra versão até prova em contrário. */
function validaEstado(x: unknown): Estado | null {
  if (!x || typeof x !== 'object') return null;
  const e = x as Partial<Estado>;
  if (e.v !== VERSAO || !Array.isArray(e.series)) return null;
  if (e.objetivo !== undefined && !ehObjetivo(e.objetivo)) return null;
  if (e.demanda !== undefined && !ehDemanda(e.demanda)) return null;
  if (e.reps !== undefined && !ehReps(e.reps)) return null;
  if (e.esforco !== undefined && !ehEsforco(e.esforco)) return null;
  if (e.exId !== undefined && !exercicio(e.exId)) return null;
  if (e.tipoGenerico !== undefined && !TIPOS_GENERICOS.some((t) => t.id === e.tipoGenerico)) delete e.tipoGenerico;
  if (e.degrau !== undefined && !ehDegrau(e.degrau)) delete e.degrau;
  if (!ehNum(e.quedas)) e.quedas = 0;
  e.series = e.series.filter((s) => s && ehNum(s.n));
  const t = e.timer;
  if (t && !(ehNum(t.fim) && ehNum(t.restante) && ehNum(t.total) && ehNum(t.inicio) && ehNum(t.pausaTotal) && ehNum(t.acumulado) && ehNum(t.planejado))) delete e.timer;
  if (e.retorno && !(e.retorno.base && ehDegrau(e.retorno.base.degrau))) delete e.retorno;
  if (e.tela !== 'timer' && e.tela !== 'fim') e.tela = 'perguntas';
  if (e.tela !== 'perguntas' && (!e.timer || !e.series.length)) e.tela = 'perguntas';
  return e as Estado;
}

function validaRecentes(x: unknown): Recente[] {
  if (!Array.isArray(x)) return [];
  return x.filter(
    (r): r is Recente =>
      !!r &&
      typeof r.exNome === 'string' &&
      ehDemanda(r.demanda) &&
      ehObjetivo(r.objetivo) &&
      ehReps(r.reps) &&
      ehEsforco(r.esforco) &&
      ESCADA.includes(r.segundos) &&
      (r.exId === undefined || !!exercicio(r.exId)),
  );
}

const novoEstado = (): Estado => ({ v: VERSAO, quedas: 0, series: [], tela: 'perguntas' });

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
  const buscaStatus = $<HTMLElement>('#ds-busca-status', app)!;
  const generico = $<HTMLElement>('#ds-generico', app)!;
  const repsNum = $<HTMLInputElement>('#ds-reps-num', app)!;
  const avancado = $<HTMLElement>('#ds-avancado', app)!;
  const escalaInput = $<HTMLInputElement>('#ds-escala-valor', app)!;
  const aviso = $<HTMLElement>('#ds-aviso', app)!;
  const anuncio = $<HTMLElement>('#ds-anuncio', app)!;
  const iniciar = $<HTMLButtonElement>('#ds-iniciar', resultado)!;
  const tituloOriginal = document.title;

  const prefsLidas = le(local(), CHAVE_PREFS) as { som?: unknown; vibrar?: unknown } | null;
  const temVibracao = 'vibrate' in navigator;
  // Sem vibração (iPhone), o fim do descanso só se nota pelo som: liga por padrão.
  const prefs = {
    som: typeof prefsLidas?.som === 'boolean' ? prefsLidas.som : !temVibracao,
    vibrar: typeof prefsLidas?.vibrar === 'boolean' ? prefsLidas.vibrar : true,
  };
  let est: Estado = validaEstado(le(sessao(), CHAVE_SESSAO)) ?? novoEstado();
  let comecou = false;
  let gerouResultado = false;
  let tique: number | undefined;
  let alarme: number | undefined;
  let anunciados = new Set<number>();
  let wakeLock: { release: () => Promise<void>; released?: boolean; addEventListener?: (t: string, f: () => void) => void } | null = null;
  let pedidoTela = 0;
  let audio: AudioContext | null = null;
  let escala: 'rir' | 'rpe' = 'rir';
  let trocouEm = 0;
  let tituloFim = false;
  const atrasos: Record<string, number> = {};

  const salvar = () => grava(sessao(), CHAVE_SESSAO, est);
  const cedo = () => performance.now() - trocouEm < TOQUE_FANTASMA_MS;

  function evento(nome: string, extra: Record<string, string | number> = {}): void {
    try {
      const w = window as unknown as { dataLayer?: unknown[] };
      w.dataLayer = w.dataLayer || [];
      w.dataLayer.push({ event: nome, tool: 'descanso-entre-series', ...extra });
    } catch {
      /* analytics nunca derruba a ferramenta */
    }
  }
  /** Para campos digitados: um evento quando a pessoa para de digitar, não um por tecla. */
  function eventoAtrasado(chave: string, nome: string, extra: Record<string, string | number>): void {
    window.clearTimeout(atrasos[chave]);
    atrasos[chave] = window.setTimeout(() => evento(nome, extra), 700);
  }
  const comecar = () => {
    if (!comecou) {
      comecou = true;
      evento('rest_calculator_start');
    }
  };
  const anuncia = (texto: string) => {
    anuncio.textContent = '';
    window.setTimeout(() => (anuncio.textContent = texto), 30);
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

  /** O botão diz sempre o tempo que o timer vai usar. */
  function rotuloIniciar(): void {
    const r = resultadoAtual();
    if (!r) return;
    const d = est.degrau ?? r.degrauInicio;
    const ultimo = d !== r.degrauInicio ? ' (o seu último)' : '';
    iniciar.textContent = `Terminei a 1ª série — iniciar descanso de ${formataTempo(ESCADA[d])}${ultimo}`;
  }

  /** Respostas mudaram: a sessão de treino daquele exercício recomeça. */
  function zeraTreino(): void {
    const r = resultadoAtual();
    est.degrau = r?.degrauInicio;
    est.series = [];
    est.quedas = 0;
    est.retorno = undefined;
    est.timer = undefined;
  }

  function desenhaResultado(silencioso = false): void {
    atualizaProgresso();
    const r = resultadoAtual();
    if (!r) {
      resultado.hidden = true;
      salvar();
      return;
    }
    $<HTMLElement>('.ds-faixa', resultado)!.textContent = `${formataTempo(r.min)} a ${formataTempo(r.max)}`;
    $<HTMLElement>('.ds-faixa-extenso', resultado)!.textContent = formataFaixaFrase(r.min, r.max);
    $<HTMLElement>('.ds-contexto', resultado)!.textContent = [
      est.exNome,
      FAIXAS_REPS.find((f) => f.id === est.reps)?.nome + ' repetições',
      ESFORCOS.find((e) => e.id === est.esforco)?.nome.toLowerCase(),
    ]
      .filter(Boolean)
      .join(' · ');
    $<HTMLElement>('.ds-inicio', resultado)!.textContent =
      `Comece com ${formataTempo(r.inicio)}. Se a próxima série render como a anterior, o tempo está bom.`;
    const exAtual = est.exId ? exercicio(est.exId) : undefined;
    $<HTMLElement>('.ds-por-que-texto', resultado)!.textContent = explicacao(r, exAtual ? comArtigo(exAtual) : undefined);
    rotuloIniciar();
    const notaTec = $<HTMLElement>('.ds-nota-tecnicas', resultado)!;
    notaTec.hidden = est.objetivo !== 'condicionamento';
    notaTec.textContent = NOTA_TECNICAS;
    const artigo = $<HTMLAnchorElement>('.ds-artigo', resultado)!;
    if (est.artigo && exAtual) {
      artigo.href = est.artigo;
      artigo.textContent = `Como fazer: ${exAtual.nome.toLowerCase()}`;
      artigo.parentElement!.hidden = false;
    } else {
      artigo.removeAttribute('href');
      artigo.parentElement!.hidden = true;
    }
    resultado.hidden = false;
    salvar();
    if (silencioso) return;

    anuncia(`Descanso sugerido: ${formataFaixaFrase(r.min, r.max)}. Comece com ${formataTempoExtenso(r.inicio)}.`);
    evento('rest_result_generated', {
      goal: est.objetivo!,
      exercise_type: est.demanda!,
      rep_range: est.reps!,
      effort_range: est.esforco!,
      result_range: faixaAnalytics(r),
    });
    // Há um próximo passo na tela: a barra fixa e o slide-in do site se calam.
    document.dispatchEvent(new CustomEvent('ppp:resultado'));
    if (!gerouResultado) {
      gerouResultado = true;
      const reduz = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
      resultado.scrollIntoView({ block: 'nearest', behavior: reduz ? 'auto' : 'smooth' });
    }
  }

  function respondeu(): void {
    zeraTreino();
    desenhaResultado();
  }

  app.addEventListener('click', (ev) => {
    const alvo = (ev.target as HTMLElement).closest<HTMLElement>('[data-valor]');
    if (!alvo || !telaPerguntas.contains(alvo)) return;
    const grupo = alvo.closest<HTMLElement>('[data-grupo]')?.dataset.grupo;
    const valor = alvo.dataset.valor!;
    comecar();
    if (grupo === 'atalho') {
      escolheExercicio(valor);
      return;
    }
    if (grupo === 'objetivo') {
      if (est.objetivo === valor) return;
      est.objetivo = valor as Objetivo;
      evento('rest_goal_selected', { goal: valor });
    } else if (grupo === 'reps') {
      repsNum.value = '';
      if (est.reps === valor) return marca('reps', valor);
      est.reps = valor as FaixaReps;
      evento('rest_reps_selected', { rep_range: valor });
    } else if (grupo === 'esforco') {
      escalaInput.value = '';
      if (est.esforco === valor) return marca('esforco', valor);
      est.esforco = valor as Esforco;
      evento('rest_effort_selected', { effort_range: valor });
    } else if (grupo === 'generico') {
      if (!est.exId && est.tipoGenerico === valor) return;
      est.exId = undefined;
      est.exNome = undefined;
      est.artigo = undefined;
      est.tipoGenerico = valor as TipoGenerico;
      est.demanda = demandaGenerica(valor as TipoGenerico);
      busca.value = '';
      marca('atalho', undefined);
      evento('rest_exercise_selected', { exercise_type: est.demanda, exercise: 'fora_da_base' });
    } else return;
    marca(grupo!, valor);
    respondeu();
  });

  /* exercício: busca com lista de sugestões (combobox) */
  let ativo = -1;
  let sugestoes: ReturnType<typeof buscaExercicios> = [];

  function fechaLista(): void {
    lista.hidden = true;
    lista.innerHTML = '';
    busca.setAttribute('aria-expanded', 'false');
    busca.removeAttribute('aria-activedescendant');
    ativo = -1;
  }

  function abreLista(): void {
    ativo = -1;
    busca.removeAttribute('aria-activedescendant');
    sugestoes = buscaExercicios(busca.value);
    lista.innerHTML = '';
    if (!busca.value.trim()) {
      buscaStatus.textContent = '';
      return fechaLista();
    }
    if (!sugestoes.length) {
      buscaStatus.textContent = 'Nenhum exercício encontrado. Use "Não encontrei meu exercício", logo abaixo.';
      return fechaLista();
    }
    buscaStatus.textContent = `${sugestoes.length} ${sugestoes.length === 1 ? 'exercício encontrado' : 'exercícios encontrados'}`;
    sugestoes.forEach((e, i) => {
      const li = document.createElement('li');
      li.id = `ds-sug-${i}`;
      li.setAttribute('role', 'option');
      li.setAttribute('aria-selected', 'false');
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
    busca.value = e.nome;
    fechaLista();
    buscaStatus.textContent = '';
    generico.hidden = true;
    marca('atalho', ATALHOS.includes(id) ? id : undefined);
    marca('generico', undefined);
    if (est.exId === e.id) return;
    est.exId = e.id;
    est.exNome = e.nome;
    est.demanda = e.demanda;
    est.artigo = e.artigo;
    est.tipoGenerico = undefined;
    evento('rest_exercise_selected', { exercise_type: e.demanda, exercise: e.id });
    respondeu();
  }

  busca.addEventListener('input', () => {
    comecar();
    // Editar o texto desfaz a escolha anterior: o que está escrito é o que vale.
    if (est.exId && busca.value.trim() !== est.exNome) {
      est.exId = undefined;
      est.exNome = undefined;
      est.artigo = undefined;
      est.demanda = undefined;
      marca('atalho', undefined);
      respondeu();
    }
    abreLista();
  });
  busca.addEventListener('keydown', (ev) => {
    if (ev.key === 'ArrowDown') {
      ev.preventDefault();
      if (lista.hidden) abreLista();
      marcaAtivo(ativo + 1);
    } else if (ev.key === 'ArrowUp') {
      ev.preventDefault();
      if (lista.hidden) abreLista();
      marcaAtivo(ativo - 1);
    } else if (ev.key === 'Enter') {
      ev.preventDefault();
      if (lista.hidden) return;
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

  $<HTMLButtonElement>('#ds-nao-encontrei', app)?.addEventListener('click', (ev) => {
    generico.hidden = !generico.hidden;
    (ev.currentTarget as HTMLButtonElement).setAttribute('aria-expanded', String(!generico.hidden));
    if (!generico.hidden) focoSemSalto($<HTMLButtonElement>('[data-valor]', generico)!);
  });

  /** Campo digitado inválido: a resposta antiga sai, para o resultado não mentir. */
  function invalida(campo: 'reps' | 'esforco', msg: string): void {
    aviso.textContent = msg;
    aviso.hidden = false;
    if (est[campo] !== undefined) {
      est[campo] = undefined;
      marca(campo, undefined);
      respondeu();
    }
  }

  repsNum.addEventListener('input', () => {
    const txt = repsNum.value.trim();
    aviso.hidden = true;
    if (!txt) return;
    const f = /^\d{1,3}$/.test(txt) ? faixaDasReps(Number(txt)) : null;
    if (!f) return invalida('reps', 'Use um número inteiro de 1 a 100 repetições.');
    comecar();
    marca('reps', f);
    if (est.reps === f) return;
    est.reps = f;
    eventoAtrasado('reps', 'rest_reps_selected', { rep_range: f, manual: 1 });
    respondeu();
  });

  $<HTMLButtonElement>('#ds-abre-avancado', app)?.addEventListener('click', (ev) => {
    const b = ev.currentTarget as HTMLButtonElement;
    avancado.hidden = !avancado.hidden;
    b.setAttribute('aria-expanded', String(!avancado.hidden));
    if (!avancado.hidden) focoSemSalto(escalaInput);
  });
  $$<HTMLButtonElement>('[data-escala]', app).forEach((b) =>
    b.addEventListener('click', () => {
      if (escala === b.dataset.escala) return;
      escala = b.dataset.escala as 'rir' | 'rpe';
      $$<HTMLButtonElement>('[data-escala]', app).forEach((x) => x.setAttribute('aria-pressed', String(x === b)));
      // Trocar de escala não reinterpreta o número: RIR 2 não vira RPE 2.
      escalaInput.value = '';
      escalaInput.placeholder = escala === 'rir' ? 'Ex.: 2' : 'Ex.: 8';
      aviso.hidden = true;
    }),
  );
  escalaInput.addEventListener('input', () => {
    const txt = escalaInput.value.trim();
    aviso.hidden = true;
    if (!txt) return;
    const v = /^\d{1,2}([.,]5)?$/.test(txt) ? Number(txt.replace(',', '.')) : NaN;
    const e = escala === 'rir' ? esforcoDoRir(v) : esforcoDoRpe(v);
    if (!e) return invalida('esforco', escala === 'rir' ? 'RIR vai de 0 (falha) a 10.' : 'RPE vai de 1 a 10 (10 é a falha).');
    comecar();
    marca('esforco', e);
    if (est.esforco === e) return;
    est.esforco = e;
    eventoAtrasado('esforco', 'rest_effort_selected', { effort_range: e, escala });
    respondeu();
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
  const anotaReps = $<HTMLInputElement>('#ds-anota-reps', telaTimer)!;
  const anotaCarga = $<HTMLInputElement>('#ds-anota-carga', telaTimer)!;

  const restante = (): number => {
    const t = est.timer;
    if (!t) return 0;
    return t.pausado ? t.restante : Math.max(0, (t.fim - Date.now()) / 1000);
  };
  /** Segundos que passaram de verdade neste descanso (com pausas descontadas). */
  const decorrido = (): number => {
    const t = est.timer;
    if (!t) return 0;
    const agora = Date.now();
    const pausaAtual = t.pausado && t.pausadoEm ? agora - t.pausadoEm : 0;
    return t.acumulado + Math.max(0, (agora - t.inicio - t.pausaTotal - pausaAtual) / 1000);
  };
  const serieAtual = (): Serie | undefined => est.series[est.series.length - 1];

  async function pedeTelaAcesa(): Promise<void> {
    const meu = ++pedidoTela;
    try {
      const nav = navigator as unknown as { wakeLock?: { request: (t: 'screen') => Promise<NonNullable<typeof wakeLock>> } };
      if (!nav.wakeLock || (wakeLock && !wakeLock.released)) return;
      const s = await nav.wakeLock.request('screen');
      // Pedido velho (o descanso já acabou, ou outro pedido passou na frente): solta.
      if (meu !== pedidoTela || est.tela !== 'timer') {
        s.release().catch(() => undefined);
        return;
      }
      s.addEventListener?.('release', () => {
        if (wakeLock === s) wakeLock = null;
      });
      wakeLock = s;
    } catch {
      wakeLock = null;
    }
  }
  function soltaTela(): void {
    pedidoTela++;
    wakeLock?.release().catch(() => undefined);
    wakeLock = null;
  }

  function preparaAudio(): void {
    if (!prefs.som) return;
    try {
      audio ??= new AudioContext();
      if (audio.state !== 'running') void audio.resume();
    } catch {
      audio = null;
    }
  }
  function bipe(): void {
    if (!prefs.som) return;
    try {
      audio ??= new AudioContext();
      if (audio.state !== 'running') void audio.resume();
      const o = audio.createOscillator();
      const g = audio.createGain();
      o.frequency.value = 880;
      g.gain.setValueAtTime(0.0001, audio.currentTime);
      g.gain.exponentialRampToValueAtTime(0.3, audio.currentTime + 0.02);
      g.gain.exponentialRampToValueAtTime(0.0001, audio.currentTime + 0.5);
      o.connect(g).connect(audio.destination);
      o.start();
      o.stop(audio.currentTime + 0.55);
    } catch {
      /* sem áudio: fica o aviso visual */
    }
  }

  function desenhaTimer(): void {
    const t = est.timer;
    if (!t || est.tela !== 'timer') return;
    const s = restante();
    const inteiro = Math.ceil(s);
    tempoEl.textContent = formataTempo(inteiro);
    barra.style.transform = `scaleX(${t.total > 0 ? Math.min(1, s / t.total) : 0})`;
    document.title = `${formataTempo(inteiro)} · Descanso`;
    for (const marco of [60, 30, 10]) {
      if (inteiro === marco && !anunciados.has(marco) && t.total > marco) {
        anunciados.add(marco);
        anuncia(marco === 60 ? '1 minuto restante' : `${marco} segundos restantes`);
      }
    }
    if (s <= 0 && !t.pausado) terminaDescanso(true);
  }

  function rodar(): void {
    window.clearInterval(tique);
    window.clearTimeout(alarme);
    tique = window.setInterval(desenhaTimer, 250);
    // Reforço: o setInterval é estrangulado com a aba em segundo plano.
    if (est.timer && !est.timer.pausado) alarme = window.setTimeout(desenhaTimer, Math.max(0, est.timer.fim - Date.now()) + 20);
    desenhaTimer();
  }
  function para(): void {
    window.clearInterval(tique);
    window.clearTimeout(alarme);
  }

  function restauraTitulo(): void {
    tituloFim = false;
    document.title = tituloOriginal;
  }

  function mostra(tela: Estado['tela']): void {
    est.tela = tela;
    trocouEm = performance.now();
    telaPerguntas.hidden = tela !== 'perguntas';
    telaTimer.hidden = tela === 'perguntas';
    blocoContando.hidden = tela !== 'timer';
    blocoFim.hidden = tela !== 'fim';
    app.classList.toggle('is-treino', tela !== 'perguntas');
    app.classList.toggle('is-fim', tela === 'fim');
    desenhaRetorno();
    salvar();
  }

  function vaiParaTimer(): void {
    const reduz = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    app.scrollIntoView({ block: 'start', behavior: reduz ? 'auto' : 'smooth' });
    $<HTMLElement>('#ds-timer-h', telaTimer)!.focus({ preventScroll: true });
  }

  function cabecalhoTimer(): void {
    $<HTMLElement>('#ds-timer-ex', telaTimer)!.textContent = est.exNome ?? 'Seu exercício';
    $<HTMLElement>('#ds-timer-serie', telaTimer)!.textContent = `Descanso depois da série ${est.series.length}`;
    $<HTMLElement>('#ds-fim-proxima', telaTimer)!.textContent = `Hora da série ${est.series.length + 1}`;
    $<HTMLButtonElement>('#ds-fiz', telaTimer)!.textContent = `Fiz a série ${est.series.length + 1} — iniciar descanso`;
  }

  function iniciaDescanso(segundos: number): void {
    const r = resultadoAtual();
    if (!r) return;
    const agora = Date.now();
    est.timer = {
      fim: agora + segundos * 1000,
      restante: segundos,
      total: segundos,
      pausado: false,
      inicio: agora,
      pausaTotal: 0,
      acumulado: 0,
      planejado: segundos,
    };
    anunciados = new Set();
    restauraTitulo();
    pausar.textContent = 'Pausar';
    cabecalhoTimer();
    mostra('timer');
    desenhaHistorico();
    void pedeTelaAcesa();
    rodar();
    anuncia(`Descanso de ${formataTempoExtenso(segundos)} iniciado`);
    evento('rest_timer_started', { result_range: faixaAnalyticsSeg(segundos), set: est.series.length });
  }

  function terminaDescanso(completo: boolean): void {
    para();
    soltaTela();
    const serie = serieAtual();
    if (serie && est.timer) serie.descanso = Math.round(decorrido());
    if (est.timer) est.timer = { ...est.timer, pausado: true, restante: 0, acumulado: serie?.descanso ?? 0 };
    mostra('fim');
    desenhaHistorico();
    $<HTMLElement>('#ds-fim-h', telaTimer)!.textContent = completo ? 'Fim do descanso' : 'Descanso pulado';
    if (completo) {
      tituloFim = true;
      document.title = 'Hora da série! · Descanso';
      anuncia(`Fim do descanso. Hora da série ${est.series.length + 1}.`);
      bipe();
      if (prefs.vibrar) {
        try {
          navigator.vibrate?.([300, 120, 300]);
        } catch {
          /* sem vibração */
        }
      }
      evento('rest_timer_completed', { set: est.series.length });
    } else {
      restauraTitulo();
      evento('rest_timer_skipped', { set: est.series.length });
    }
    $<HTMLElement>('#ds-fim-h', telaTimer)!.focus({ preventScroll: true });
  }

  function soma(delta: number): void {
    const t = est.timer;
    if (!t) return;
    const antes = restante();
    const novo = Math.max(1, antes + delta);
    const efetivo = novo - antes;
    est.timer = t.pausado
      ? { ...t, restante: novo, total: Math.max(t.total, novo) }
      : { ...t, fim: Date.now() + novo * 1000, total: Math.max(t.total, novo) };
    // Volta a anunciar os marcos que ficaram para trás.
    for (const m of [...anunciados]) if (novo > m) anunciados.delete(m);
    salvar();
    anuncia(`${efetivo > 0 ? 'Mais' : 'Menos'} ${Math.abs(Math.round(efetivo))} segundos`);
    if (!t.pausado) rodar();
    else desenhaTimer();
    evento(delta > 0 ? 'rest_timer_extended' : 'rest_timer_reduced', { seconds: Math.abs(delta) });
  }

  $$<HTMLButtonElement>('[data-soma]', telaTimer).forEach((b) =>
    b.addEventListener('click', () => {
      if (cedo()) return;
      const delta = Number(b.dataset.soma);
      if (est.tela === 'fim') {
        // "+30 s" depois do fim: o mesmo descanso continua por mais 30 s.
        const serie = serieAtual();
        const agora = Date.now();
        est.timer = {
          fim: agora + delta * 1000,
          restante: delta,
          total: delta,
          pausado: false,
          inicio: agora,
          pausaTotal: 0,
          acumulado: serie?.descanso ?? 0,
          planejado: est.timer?.planejado ?? delta,
        };
        anunciados = new Set();
        restauraTitulo();
        pausar.textContent = 'Pausar';
        mostra('timer');
        desenhaHistorico();
        void pedeTelaAcesa();
        rodar();
        anuncia('Mais 30 segundos de descanso');
        $<HTMLElement>('#ds-timer-h', telaTimer)!.focus({ preventScroll: true });
        evento('rest_timer_extended', { seconds: delta, depois_do_fim: 1 });
        return;
      }
      soma(delta);
    }),
  );

  pausar.addEventListener('click', () => {
    if (cedo()) return;
    const t = est.timer;
    if (!t) return;
    if (t.pausado) {
      const agora = Date.now();
      est.timer = {
        ...t,
        pausado: false,
        fim: agora + t.restante * 1000,
        pausaTotal: t.pausaTotal + (t.pausadoEm ? agora - t.pausadoEm : 0),
        pausadoEm: undefined,
      };
      pausar.textContent = 'Pausar';
      void pedeTelaAcesa();
      rodar();
      anuncia('Continuando');
    } else {
      est.timer = { ...t, pausado: true, restante: restante(), pausadoEm: Date.now() };
      pausar.textContent = 'Continuar';
      para();
      anuncia('Pausado');
    }
    salvar();
  });

  $<HTMLButtonElement>('#ds-pular', telaTimer)!.addEventListener('click', () => {
    if (cedo()) return;
    terminaDescanso(false);
  });

  iniciar.addEventListener('click', () => {
    const r = resultadoAtual();
    if (!r) return;
    preparaAudio();
    est.series = [{ n: 1 }];
    est.retorno = undefined;
    iniciaDescanso(ESCADA[est.degrau ?? r.degrauInicio]);
    vaiParaTimer();
  });

  /* "Fiz a série": o descanso começa na hora; o "como foi?" aparece embaixo. */
  $<HTMLButtonElement>('#ds-fiz', telaTimer)!.addEventListener('click', () => {
    if (cedo()) return;
    const r = resultadoAtual();
    if (!r) return;
    preparaAudio();
    est.series.push({ n: est.series.length + 1 });
    est.retorno = { base: { degrau: est.degrau ?? r.degrauInicio, quedas: est.quedas } };
    anotaReps.value = '';
    anotaCarga.value = '';
    iniciaDescanso(ESCADA[est.degrau ?? r.degrauInicio]);
    vaiParaTimer();
  });

  function desenhaRetorno(): void {
    const ret = est.retorno;
    blocoRetorno.hidden = !ret || est.tela === 'perguntas';
    if (!ret) return;
    $<HTMLElement>('#ds-retorno-h', telaTimer)!.textContent = `Como foi a série ${est.series.length}, comparada à anterior?`;
    $$<HTMLButtonElement>('[data-feedback]', telaTimer).forEach((b) => {
      const sel = b.dataset.feedback === ret.feedback;
      b.classList.toggle('is-ativo', sel);
      b.setAttribute('aria-pressed', String(sel));
    });
    msgAjuste.hidden = !ret.mensagem;
    msgAjuste.textContent = ret.mensagem ?? '';
  }

  $$<HTMLButtonElement>('[data-feedback]', telaTimer).forEach((b) =>
    b.addEventListener('click', () => {
      if (cedo()) return;
      const r = resultadoAtual();
      const ret = est.retorno;
      const serie = serieAtual();
      if (!r || !ret || !serie) return;
      const fb = b.dataset.feedback as Feedback;
      if (ret.feedback === fb) return;
      const primeira = ret.feedback === undefined;

      // O descanso que veio ANTES desta série é o que ela avalia — com os
      // +30 e −15 que a pessoa usou, não o planejado.
      const anterior = est.series[est.series.length - 2]?.descanso;
      const lim = limitesAjuste(r);
      const partida =
        anterior !== undefined
          ? Math.max(lim.min, Math.min(lim.max, degrauMaisProximo(anterior)))
          : ret.base.degrau;
      const aj = ajustar(r, partida, fb, ret.base.quedas);
      est.degrau = aj.degrau;
      est.quedas =
        fb === 'perdeu3' || fb === 'reduziu' ? ret.base.quedas + 1 : fb === 'manteve' || fb === 'sobrou' ? 0 : ret.base.quedas;
      serie.feedback = fb;

      // O descanso que está correndo passa a ser o novo, pela diferença.
      const t = est.timer;
      if (t && est.tela === 'timer') {
        const dif = aj.segundos - t.planejado;
        est.timer = t.pausado
          ? { ...t, restante: Math.max(1, t.restante + dif), total: Math.max(1, t.total + dif), planejado: aj.segundos }
          : { ...t, fim: t.fim + dif * 1000, total: Math.max(1, t.total + dif), planejado: aj.segundos };
        if (dif !== 0) for (const m of [...anunciados]) if (restante() > m) anunciados.delete(m);
      }
      const desc = est.tela === 'timer' ? 'Este descanso' : 'Próximo descanso';
      ret.feedback = fb;
      ret.mensagem =
        aj.mudou === 0
          ? `${aj.mensagem} ${desc}: ${formataTempo(aj.segundos)}.`
          : `${aj.mensagem} ${desc}: ${formataTempo(aj.segundos)} (antes, ${formataTempo(ESCADA[partida])}).`;
      desenhaRetorno();
      salvar();
      desenhaHistorico();
      if (est.tela === 'timer' && est.timer && !est.timer.pausado) rodar();
      lembra(aj.segundos);
      anuncia(ret.mensagem);
      msgAjuste.scrollIntoView({ block: 'nearest' });
      if (primeira) evento('rest_next_set_feedback', { feedback: fb, set: est.series.length });
      if (aj.mudou !== 0) evento('rest_recommendation_adjusted', { direction: aj.mudou > 0 ? 'up' : 'down' });
    }),
  );

  /* Repetições e carga: gravadas ao digitar, em qualquer ordem. */
  const numeroBr = (txt: string, inteiro: boolean): number | undefined => {
    const t = txt.trim();
    if (!t) return undefined;
    const ok = inteiro ? /^\d{1,3}$/.test(t) : /^\d{1,4}([.,]\d{1,2})?$/.test(t);
    return ok ? Number(t.replace(',', '.')) : NaN;
  };
  function anota(): void {
    const serie = serieAtual();
    if (!serie) return;
    const reps = numeroBr(anotaReps.value, true);
    const carga = numeroBr(anotaCarga.value, false);
    serie.reps = reps !== undefined && reps >= 1 && reps <= 100 ? reps : undefined;
    serie.carga = carga !== undefined && carga > 0 && carga <= 1000 ? carga : undefined;
    const ruim = (reps !== undefined && serie.reps === undefined) || (carga !== undefined && serie.carga === undefined);
    $<HTMLElement>('#ds-anota-aviso', telaTimer)!.hidden = !ruim;
    salvar();
    desenhaHistorico();
  }
  anotaReps.addEventListener('input', anota);
  anotaCarga.addEventListener('input', anota);

  function encerraExercicio(): void {
    para();
    soltaTela();
    restauraTitulo();
    const r = resultadoAtual();
    if (r) lembra(ESCADA[est.degrau ?? r.degrauInicio]);
    est.timer = undefined;
    est.series = [];
    est.quedas = 0;
    est.retorno = undefined;
    mostra('perguntas');
    rotuloIniciar();
    desenhaRecentes();
    focoSemSalto($<HTMLElement>('#ds-app-h', app)!);
  }
  $$<HTMLButtonElement>('[data-encerrar]', telaTimer).forEach((b) =>
    b.addEventListener('click', () => {
      if (cedo()) return;
      encerraExercicio();
    }),
  );

  function desenhaHistorico(): void {
    historico.innerHTML = '';
    const nomes: Record<Feedback, string> = {
      manteve: 'manteve',
      perdeu12: 'perdeu 1–2 reps',
      perdeu3: 'perdeu 3+ reps',
      reduziu: 'baixou a carga',
      sobrou: 'sobrou descanso',
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

  // Qualquer toque no cartão depois do fim tira o "Hora da série!" do título da aba.
  app.addEventListener('pointerdown', () => {
    if (tituloFim) restauraTitulo();
  });

  /* ───────── preferências ───────── */

  const somBtn = $<HTMLButtonElement>('#ds-som', telaTimer)!;
  const vibBtn = $<HTMLButtonElement>('#ds-vibrar', telaTimer)!;
  const desenhaPrefs = () => {
    somBtn.setAttribute('aria-pressed', String(prefs.som));
    vibBtn.setAttribute('aria-pressed', String(prefs.vibrar));
  };
  // Vibrar só onde existe vibração de verdade: celular com tela de toque.
  if (!temVibracao || !window.matchMedia('(pointer: coarse)').matches) vibBtn.hidden = true;
  somBtn.addEventListener('click', () => {
    prefs.som = !prefs.som;
    preparaAudio();
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
  const recentes = (): Recente[] => validaRecentes(le(local(), CHAVE_RECENTES));

  function lembra(segundos: number): void {
    if (!est.objetivo || !est.demanda || !est.reps || !est.esforco) return;
    const nome = est.exNome ?? 'Exercício fora da lista';
    const novo: Recente = {
      exId: est.exId,
      exNome: nome,
      demanda: est.demanda,
      objetivo: est.objetivo,
      reps: est.reps,
      esforco: est.esforco,
      segundos,
    };
    grava(local(), CHAVE_RECENTES, [novo, ...recentes().filter((r) => r.exNome !== nome)].slice(0, 6));
  }

  function desenhaRecentes(): void {
    const lista = recentes();
    recentesLista.innerHTML = '';
    lista.forEach((r, i) => {
      const li = document.createElement('li');
      const b = document.createElement('button');
      b.type = 'button';
      b.className = 'ds-recente';
      b.dataset.i = String(i);
      b.textContent = `${r.exNome} — ${formataTempo(r.segundos)}`;
      li.append(b);
      recentesLista.append(li);
    });
    recentesBox.hidden = lista.length === 0;
  }

  recentesLista.addEventListener('click', (ev) => {
    const b = (ev.target as HTMLElement).closest<HTMLButtonElement>('.ds-recente');
    if (!b) return;
    const r = recentes()[Number(b.dataset.i)];
    if (!r) return;
    comecar();
    if (est.tela !== 'perguntas') encerraExercicio();
    est = { ...novoEstado(), objetivo: r.objetivo, reps: r.reps, esforco: r.esforco, demanda: r.demanda };
    const e = r.exId ? exercicio(r.exId) : undefined;
    if (e) {
      est.exId = e.id;
      est.exNome = e.nome;
      est.artigo = e.artigo;
    }
    busca.value = e?.nome ?? '';
    repsNum.value = '';
    escalaInput.value = '';
    sincronizaMarcas();
    zeraTreino();
    desenhaResultado();
    const res = resultadoAtual();
    const degrau = ESCADA.indexOf(r.segundos as (typeof ESCADA)[number]);
    if (res && degrau >= 0) {
      // Só vale o tempo salvo se ele ainda cabe nos limites da conta atual.
      const lim = limitesAjuste(res);
      if (degrau >= lim.min && degrau <= lim.max) est.degrau = degrau;
      rotuloIniciar();
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

  const compartilhar = $<HTMLButtonElement>('#ds-compartilhar', app);
  const rotuloCompartilhar = compartilhar?.textContent ?? '';
  let voltaRotulo: number | undefined;
  compartilhar?.addEventListener('click', async () => {
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
      compartilhar.textContent = 'Link copiado';
      window.clearTimeout(voltaRotulo);
      voltaRotulo = window.setTimeout(() => (compartilhar.textContent = rotuloCompartilhar), 2000);
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
    marca('generico', est.exId ? undefined : est.tipoGenerico);
    if (!est.exId && est.tipoGenerico) generico.hidden = false;
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
    gerouResultado = true;
    desenhaResultado(true);
    if (est.tela === 'timer' && est.timer) {
      cabecalhoTimer();
      mostra('timer');
      desenhaHistorico();
      pausar.textContent = est.timer.pausado ? 'Continuar' : 'Pausar';
      // Marcos que já passaram não são anunciados de novo.
      for (const m of [60, 30, 10]) if (restante() < m) anunciados.add(m);
      if (est.timer.pausado) {
        desenhaTimer();
      } else {
        void pedeTelaAcesa();
        rodar();
      }
      vaiParaTimer();
    } else if (est.tela === 'fim' && est.timer) {
      cabecalhoTimer();
      mostra('fim');
      desenhaHistorico();
      $<HTMLElement>('#ds-fim-h', telaTimer)!.textContent = 'Fim do descanso';
      vaiParaTimer();
    } else if (est.tela !== 'perguntas') {
      mostra('perguntas');
    }
  } else if (est.tela !== 'perguntas') {
    mostra('perguntas');
  }
  atualizaProgresso();
  evento('rest_calculator_view');
}
