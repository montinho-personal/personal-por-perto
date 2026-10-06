/**
 * Interface da calculadora de pace.
 *
 * "O que você quer descobrir?" escolhe o modo; cada modo mostra só os
 * campos de que precisa. Os campos são os MESMOS entre os modos — por isso
 * trocar de modo não apaga nada: quem calculou o pace de 5 km em 30 min e
 * passa para "meta" já encontra os 5 km preenchidos.
 *
 * O resultado aparece enquanto a pessoa digita, sem botão de calcular. O
 * link do cálculo vai no fragmento (#m=pace&d=5&t=1800), que o Google não
 * rastreia: nenhum cálculo vira URL indexável.
 *
 * O dataLayer recebe só categorias (modo, distância 5k/10k/…, faixa de
 * pace "5_6"), nunca o tempo nem o pace exatos.
 */
import {
  METAS,
  alerta,
  categoriaDistancia,
  comparar,
  distanciaDe,
  distanciaPronta,
  distanciaValida,
  faixaPace,
  formataDiferenca,
  formataEsteira,
  formataKm,
  formataPace,
  formataTempo,
  formataTempoExtenso,
  formataVelocidade,
  paceDaVelocidade,
  paceDe,
  paceParaFicarAbaixo,
  paceDosCampos,
  paceValido,
  pacePorMilha,
  parciaisChave,
  parciaisPorKm,
  paraKm,
  parseNumero,
  pista,
  projecao,
  tempoDe,
  tempoDosCampos,
  velocidadeDe,
  velocidadeValida,
  LIMITE_POR_KM,
} from '../lib/corrida/pace';

type Modo = 'pace' | 'meta' | 'tempo' | 'distancia' | 'velocidade' | 'comparar';
type Unidade = 'km' | 'm' | 'mi';

const NOMES_MODO: Record<Modo, string> = {
  pace: 'Meu pace',
  meta: 'Pace para uma meta',
  tempo: 'Meu tempo',
  distancia: 'Minha distância',
  velocidade: 'Pace e km/h',
  comparar: 'Comparar ritmos',
};
const MODOS: Modo[] = ['pace', 'meta', 'tempo', 'distancia', 'velocidade', 'comparar'];
/** Que blocos de campo cada modo usa. */
const BLOCOS: Record<Modo, string[]> = {
  pace: ['dist', 'tempo'],
  meta: ['metas', 'dist', 'tempo'],
  tempo: ['dist', 'pace'],
  distancia: ['tempo', 'pace'],
  velocidade: ['conversor'],
  comparar: ['comparar'],
};

/** "10," ainda está sendo digitado: lê como "10" em vez de acusar erro. */
const semSeparadorFinal = (v: string) => v.trim().replace(/[.,]$/, '');

const $ = <T extends HTMLElement>(sel: string, raiz: ParentNode = document): T | null => raiz.querySelector<T>(sel);
const $$ = <T extends HTMLElement>(sel: string, raiz: ParentNode = document): T[] =>
  Array.from(raiz.querySelectorAll<T>(sel));

export function iniciarCalculadoraPace(): void {
  const raiz = $<HTMLElement>('#pc-app');
  if (!raiz) return;
  const app: HTMLElement = raiz;
  app.classList.add('is-js');

  const saida = $<HTMLElement>('#pc-resultado', app)!;
  const anuncio = $<HTMLElement>('#pc-anuncio', app)!;
  const aviso = $<HTMLElement>('#pc-aviso', app)!;
  const campo = (id: string) => $<HTMLInputElement>(`#${id}`, app)!;
  const f = {
    distOutra: campo('pc-dist-outra'),
    unidade: $<HTMLSelectElement>('#pc-unidade', app)!,
    h: campo('pc-h'),
    m: campo('pc-m'),
    s: campo('pc-s'),
    pm: campo('pc-pm'),
    ps: campo('pc-ps'),
    cpm: campo('pc-cpm'),
    cps: campo('pc-cps'),
    kmh: campo('pc-kmh'),
    am: campo('pc-am'),
    as: campo('pc-as'),
    bm: campo('pc-bm'),
    bs: campo('pc-bs'),
  };

  let modo: Modo = 'pace';
  let distId: string | null = '5k';
  let comecou = false;
  let verTodos = false;
  /** O último cálculo contado, por modo: voltar a um modo não conta o mesmo cálculo de novo. */
  const ultimoPorModo: Partial<Record<Modo, string>> = {};
  let temResultado = false;
  let avisouResultado = false;
  /** Os <details> que a pessoa abriu: o resultado é redesenhado a cada tecla e eles têm de continuar abertos. */
  const abertos = new Set<string>();
  /** Cálculo restaurado de um link, até a primeira interação: os eventos levam source=link. */
  let deLink = false;
  /** No conversor, de que lado a pessoa digitou por último: a velocidade digitada não é recalculada. */
  let origemConversor: 'pace' | 'kmh' = 'pace';
  let atrasoEvento: number | undefined;
  let atrasoAnuncio: number | undefined;
  let atrasoAlerta: number | undefined;
  let atrasoAviso: number | undefined;

  function evento(nome: string, extra: Record<string, string | number> = {}): void {
    try {
      const w = window as unknown as { dataLayer?: unknown[] };
      w.dataLayer = w.dataLayer || [];
      w.dataLayer.push({ event: nome, tool: 'calculadora-de-pace', ...(deLink ? { source: 'link' } : {}), ...extra });
    } catch {
      /* analytics nunca derruba a ferramenta */
    }
  }
  const comecar = () => {
    deLink = false;
    if (!comecou) {
      comecou = true;
      evento('pace_tool_start');
    }
  };
  const anuncia = (t: string) => {
    window.clearTimeout(atrasoAnuncio);
    atrasoAnuncio = window.setTimeout(() => (anuncio.textContent = t), 600);
  };

  /* ───────── leitura dos campos ───────── */

  function distanciaKm(): number | null {
    if (distId) return distanciaPronta(distId)?.km ?? null;
    const v = parseNumero(semSeparadorFinal(f.distOutra.value), f.unidade.value === 'm');
    if (v === null) return null;
    const km = paraKm(v, f.unidade.value as Unidade);
    return distanciaValida(km) ? km : null;
  }
  const tempoS = (): number | null => tempoDosCampos(f.h.value, f.m.value, f.s.value);
  const pace = (m: HTMLInputElement, s: HTMLInputElement): number | null => {
    const p = paceDosCampos(m.value, s.value);
    return paceValido(p) ? p : null;
  };
  const algumPreenchido = (...cs: HTMLInputElement[]) => cs.some((c) => c.value.trim() !== '');
  /** Pace digitado de verdade: "0" e "00" sozinhos (o que sobra ao apagar o conversor) contam como vazio. */
  const paceDigitado = (m: HTMLInputElement, s: HTMLInputElement) =>
    [m, s].some((c) => /[1-9]/.test(c.value) || /[^\d\s]/.test(c.value));

  /* ───────── modos ───────── */

  function trocaModo(novo: Modo, porClique = true): void {
    const mudou = novo !== modo;
    modo = novo;
    if (mudou) verTodos = false;
    $$<HTMLButtonElement>('[data-modo]', app).forEach((b) => {
      const ativo = b.dataset.modo === novo;
      b.classList.toggle('is-ativo', ativo);
      b.setAttribute('aria-pressed', String(ativo));
    });
    $$<HTMLElement>('[data-bloco]', app).forEach((el) => (el.hidden = !BLOCOS[novo].includes(el.dataset.bloco!)));
    $<HTMLElement>('#pc-tempo-rotulo', app)!.textContent =
      novo === 'meta' ? 'Em quanto tempo você quer fazer?' : novo === 'distancia' ? 'Quanto tempo você correu?' : 'Quanto tempo levou?';
    $<HTMLElement>('#pc-dist-rotulo', app)!.textContent = novo === 'meta' ? 'Qual a distância da meta?' : 'Qual a distância?';
    $<HTMLElement>('#pc-pace-rotulo', app)!.textContent = novo === 'tempo' ? 'Em que pace?' : 'Qual o seu pace?';
    calcula();
    if (porClique && mudou) {
      // O foco fica no botão do modo e a página não rola: mandar o foco para um campo
      // abriria o teclado do celular por cima dos cartões. O Tab segue daqui.
      anuncia(`${NOMES_MODO[novo]}. ${DICAS[novo]}`);
      evento('pace_mode_selected', { mode: novo });
    }
  }

  $$<HTMLButtonElement>('[data-modo]', app).forEach((b) =>
    b.addEventListener('click', () => {
      comecar();
      trocaModo(b.dataset.modo as Modo);
    }),
  );

  /* ───────── distância ───────── */

  function marcaDist(): void {
    $$<HTMLButtonElement>('[data-dist]', app).forEach((b) => {
      const ativo = b.dataset.dist === (distId ?? 'outra');
      b.classList.toggle('is-ativo', ativo);
      b.setAttribute('aria-pressed', String(ativo));
    });
    $<HTMLElement>('#pc-dist-outra-box', app)!.hidden = distId !== null;
  }
  $$<HTMLButtonElement>('[data-dist]', app).forEach((b) =>
    b.addEventListener('click', () => {
      comecar();
      distId = b.dataset.dist === 'outra' ? null : b.dataset.dist!;
      verTodos = false;
      marcaMeta(null);
      marcaDist();
      if (distId === null) f.distOutra.focus();
      calcula();
    }),
  );

  /* ───────── metas comuns ───────── */

  /** A meta tocada fica marcada até a pessoa mexer na distância ou no tempo. */
  function marcaMeta(id: string | null): void {
    $$<HTMLButtonElement>('[data-meta]', app).forEach((b) => {
      const ativo = b.dataset.meta === id;
      b.classList.toggle('is-ativo', ativo);
      b.setAttribute('aria-pressed', String(ativo));
    });
  }

  $$<HTMLButtonElement>('[data-meta]', app).forEach((b) =>
    b.addEventListener('click', () => {
      comecar();
      const meta = METAS[Number(b.dataset.meta)];
      if (!meta) return;
      marcaMeta(b.dataset.meta!);
      distId = meta.distancia;
      verTodos = false;
      marcaDist();
      const h = Math.floor(meta.segundos / 3600);
      const m = Math.floor((meta.segundos % 3600) / 60);
      f.h.value = h ? String(h) : '';
      f.m.value = String(m);
      f.s.value = '';
      calcula();
      saida.scrollIntoView({ block: 'nearest', behavior: window.matchMedia('(prefers-reduced-motion: reduce)').matches ? 'auto' : 'smooth' });
    }),
  );

  /* ───────── conversor: os dois campos ligados ───────── */

  let convertendo = false;
  const liga = (origem: 'pace' | 'kmh') => {
    if (convertendo) return;
    convertendo = true;
    origemConversor = origem;
    if (origem === 'pace') {
      const p = pace(f.cpm, f.cps);
      f.kmh.value = p ? formataVelocidade(velocidadeDe(p)) : '';
    } else {
      const v = parseNumero(semSeparadorFinal(f.kmh.value));
      if (velocidadeValida(v)) {
        const t = Math.round(paceDaVelocidade(v));
        f.cpm.value = String(Math.floor(t / 60));
        f.cps.value = String(t % 60).padStart(2, '0');
      } else if (!f.kmh.value.trim()) {
        f.cpm.value = '';
        f.cps.value = '';
      }
    }
    convertendo = false;
  };
  [f.cpm, f.cps].forEach((c) => c.addEventListener('input', () => liga('pace')));
  f.kmh.addEventListener('input', () => liga('kmh'));

  /* ───────── comparar: atalhos de redução ───────── */

  $$<HTMLButtonElement>('[data-reduz]', app).forEach((b) =>
    b.addEventListener('click', () => {
      comecar();
      const a = pace(f.am, f.as);
      if (!a) {
        aviso.textContent = 'Preencha primeiro o seu pace de hoje.';
        aviso.hidden = false;
        f.am.focus();
        return;
      }
      const desejado = Math.round(a - Number(b.dataset.reduz));
      const t = Math.max(60, desejado);
      f.bm.value = String(Math.floor(t / 60));
      f.bs.value = String(t % 60).padStart(2, '0');
      calcula();
      if (desejado < 60) {
        aviso.textContent = 'A calculadora vai até 1:00 por km; a meta parou aí.';
        aviso.hidden = false;
      }
    }),
  );

  /* ───────── resultado ───────── */

  const aberto = (nome: string) => (abertos.has(nome) ? ' open' : '');
  /** Caixa de rolagem lateral alcançável pelo teclado (WCAG 2.1.1). */
  const tabelaRolavel = (nome: string, html: string) =>
    `<div class="pc-tabela" role="region" tabindex="0" aria-label="Tabela: ${nome}">${html}</div>`;
  const linha = (rotulo: string, valor: string) => `<div class="pc-linha"><dt>${rotulo}</dt><dd>${valor}</dd></div>`;

  function blocoParciais(km: number, p: number): string {
    const longa = km > LIMITE_POR_KM;
    const chave = longa && !verTodos;
    const lista = chave ? parciaisChave(km, p) : parciaisPorKm(km, p);
    // Em ritmo constante, o trecho de cada km é o próprio pace: a coluna só informa nos pontos-chave.
    const linhas = lista
      .map((x) => `<tr><th scope="row">${x.rotulo}</th>${chave ? `<td>${formataTempo(x.trecho)}</td>` : ''}<td>${formataTempo(x.acumulado)}</td></tr>`)
      .join('');
    const botao = longa
      ? `<button type="button" class="pc-link-btn" data-todos>${verTodos ? 'Ver só os pontos-chave' : 'Ver todos os quilômetros'}</button>`
      : '';
    return `<details class="pc-det" data-det="parciais"${aberto('parciais')}><summary>Ver parciais</summary>
      ${tabelaRolavel('Parciais', `<table><caption>Parciais em ritmo constante, a ${formataPace(p)}/km</caption>
      <thead><tr><th scope="col">Distância</th>${chave ? '<th scope="col">Trecho</th>' : ''}<th scope="col">Passagem</th></tr></thead>
      <tbody>${linhas}</tbody></table>`)}${botao}</details>`;
  }

  function blocoExtras(p: number, unidadeMi: boolean): string {
    const pt = pista(p)
      .map((x) => `<li><span>${x.metros === 1000 ? '1 km' : `${x.metros} m`}</span><strong>${formataTempo(x.segundos)}</strong></li>`)
      .join('');
    const pr = projecao(p)
      .map((x) => `<li><span>${formataKm(x.km)} km</span><strong>${formataTempo(x.segundos)}</strong></li>`)
      .join('');
    return `<div class="pc-extras">
      <div class="pc-extra"><p class="pc-extra-h">Na esteira</p><p class="pc-esteira"><strong>${formataEsteira(velocidadeDe(p))}</strong> km/h</p></div>
      ${unidadeMi ? `<div class="pc-extra"><p class="pc-extra-h">Por milha</p><p class="pc-esteira"><strong>${formataPace(pacePorMilha(p))}</strong> /mi</p></div>` : ''}
      </div>
      <details class="pc-det" data-det="pista"${aberto('pista')}><summary>Na pista: de 200 m a 1 km</summary><ul class="pc-mini-lista">${pt}</ul></details>
      <details class="pc-det" data-det="projecao"${aberto('projecao')}><summary>Se mantiver este pace</summary><ul class="pc-mini-lista">${pr}</ul>
      <p class="pc-nota">É aritmética, não previsão: manter este ritmo por 5 km não significa sustentá-lo numa meia ou numa maratona.</p></details>`;
  }

  /** Onde estava o foco dentro do resultado, para devolvê-lo depois de redesenhar. */
  function chaveDoFoco(): string | null {
    const el = document.activeElement as HTMLElement | null;
    if (!el || !saida.contains(el)) return null;
    if (el.matches('summary')) return `summary:${el.closest<HTMLElement>('[data-det]')?.dataset.det}`;
    if (el.matches('[data-todos]')) return 'todos';
    if (el.matches('[data-acao]')) return `acao:${el.dataset.acao}`;
    return null;
  }
  function devolveFoco(chave: string | null): void {
    if (!chave) return;
    const [tipo, nome] = chave.split(':');
    const alvo =
      tipo === 'summary'
        ? $<HTMLElement>(`[data-det="${nome}"] > summary`, saida)
        : tipo === 'todos'
          ? $<HTMLElement>('[data-todos]', saida)
          : $<HTMLElement>(`[data-acao="${nome}"]`, saida);
    alvo?.focus({ preventScroll: true });
  }

  function mostra(html: string, frase: string, chave: string, nome: string, extra: Record<string, string>): void {
    const foco = chaveDoFoco();
    saida.innerHTML = html;
    saida.hidden = false;
    devolveFoco(foco);
    // "2" antes de "27" daria 5 km em 2 minutos: o alerta espera a digitação parar.
    const al = $<HTMLElement>('.pc-alerta', saida);
    if (al) {
      al.hidden = true;
      window.clearTimeout(atrasoAlerta);
      atrasoAlerta = window.setTimeout(() => (al.hidden = false), 800);
    }
    temResultado = true;
    anuncia(frase);
    if (!avisouResultado) {
      avisouResultado = true;
      document.dispatchEvent(new CustomEvent('ppp:resultado'));
    }
    window.clearTimeout(atrasoEvento);
    if (chave !== ultimoPorModo[modo]) {
      const m = modo;
      atrasoEvento = window.setTimeout(() => {
        ultimoPorModo[m] = chave;
        evento(nome, { mode: m, ...extra });
      }, 900);
    }
    escreveFragmento();
    atualizaCopiar();
  }

  const MSG_TEMPO = 'Confira o tempo: segundos vão até 59, e minutos também quando há horas (90 min sozinhos valem).';
  const MSG_PACE = 'Confira o pace: de 1:00 a 60:00 por km, segundos até 59.';
  const DICAS: Record<Modo, string> = {
    pace: 'Escolha a distância e preencha o tempo: o pace aparece aqui.',
    meta: 'Toque numa meta comum ou escolha a distância e o tempo que você quer fazer.',
    tempo: 'Escolha a distância e preencha o pace: o tempo final aparece aqui.',
    distancia: 'Preencha quanto tempo correu e em que pace: a distância aparece aqui.',
    velocidade: 'Digite o pace ou a velocidade da esteira: um campo preenche o outro.',
    comparar: 'Preencha o pace de hoje e o da meta, ou toque em −10 s para ver o que muda.',
  };

  function vazio(): void {
    saida.hidden = false;
    saida.innerHTML = `<p class="pc-vazio">${DICAS[modo]}</p>`;
    temResultado = false;
    window.clearTimeout(atrasoEvento);
    window.clearTimeout(atrasoAnuncio);
    anuncio.textContent = '';
    // O link não pode continuar apontando para um cálculo que saiu da tela.
    if (location.hash) escreveFragmento();
    atualizaCopiar();
  }

  function calcula(): void {
    aviso.hidden = true;
    window.clearTimeout(atrasoAviso);
    window.clearTimeout(atrasoAlerta);
    Object.values(f).forEach((c) => {
      c.removeAttribute('aria-invalid');
      c.removeAttribute('aria-describedby');
    });
    const unidadeMi = !distId && f.unidade.value === 'mi';
    // Na natação o ritmo é por 100 m: aparece quando a distância vem em metros.
    const emMetros = !distId && f.unidade.value === 'm';
    const km = distanciaKm();
    const t = tempoS();

    if (modo === 'pace' || modo === 'meta') {
      if (!distId && algumPreenchido(f.distOutra) && km === null) return erro('Confira a distância: um número maior que zero, com vírgula ou ponto.', f.distOutra);
      if (algumPreenchido(f.h, f.m, f.s) && t === null) return erro(MSG_TEMPO, f.h, f.m, f.s);
      if (km === null || t === null) return vazio();
      const p = paceDe(km, t);
      // Em metros (natação), "mais lento que 2 km/h" não é erro de digitação: só o alerta de rápido vale.
      const al = emMetros && p > 600 ? null : alerta(p, km);
      const meta = modo === 'meta';
      const html = `
        <p class="pc-rotulo">${meta ? `Para ${formataKm(km)} km em ${formataTempo(t)}, você precisa manter` : 'Seu pace'}</p>
        <p class="pc-numero">${formataPace(p)} <span>/km</span></p>
        <dl class="pc-sec">${meta ? linha(`Para fechar abaixo de ${formataTempo(t)}`, `${formataPace(paceParaFicarAbaixo(km, t))}/km ou mais rápido`) : ''}${emMetros ? linha('Por 100 m (natação)', `${formataPace(p / 10)}/100 m`) : ''}${linha('Velocidade média', `${formataVelocidade(velocidadeDe(p))} km/h`)}</dl>
        ${al ? `<p class="pc-alerta">${al}</p>` : ''}
        ${blocoParciais(km, p)}${blocoExtras(p, unidadeMi)}${acoes(p)}`;
      return mostra(
        html,
        `${meta ? 'Pace necessário' : 'Seu pace'}: ${formataPace(p)} por quilômetro, ${formataVelocidade(velocidadeDe(p))} quilômetros por hora.`,
        `${modo}|${km}|${t}`,
        meta ? 'pace_goal_calculated' : 'pace_calculated',
        { distance_category: categoriaDistancia(km), pace_bucket: faixaPace(p) },
      );
    }

    if (modo === 'tempo') {
      const p = pace(f.pm, f.ps);
      if (!distId && algumPreenchido(f.distOutra) && km === null) return erro('Confira a distância: um número maior que zero, com vírgula ou ponto.', f.distOutra);
      if (paceDigitado(f.pm, f.ps) && p === null) return erro(MSG_PACE, f.pm, f.ps);
      if (km === null || p === null) return vazio();
      const tt = tempoDe(km, p);
      const html = `
        <p class="pc-rotulo">Tempo para ${formataKm(km)} km a ${formataPace(p)}/km</p>
        <p class="pc-numero">${formataTempo(tt)}</p>
        <dl class="pc-sec">${linha('Velocidade média', `${formataVelocidade(velocidadeDe(p))} km/h`)}${linha('Por extenso', formataTempoExtenso(tt))}</dl>
        ${blocoParciais(km, p)}${blocoExtras(p, unidadeMi)}${acoes(p)}`;
      return mostra(html, `Tempo: ${formataTempoExtenso(tt)}.`, `tempo|${km}|${p}`, 'pace_time_calculated', {
        distance_category: categoriaDistancia(km),
        pace_bucket: faixaPace(p),
      });
    }

    if (modo === 'distancia') {
      const p = pace(f.pm, f.ps);
      if (algumPreenchido(f.h, f.m, f.s) && t === null) return erro(MSG_TEMPO, f.h, f.m, f.s);
      if (paceDigitado(f.pm, f.ps) && p === null) return erro(MSG_PACE, f.pm, f.ps);
      if (t === null || p === null) return vazio();
      const d = distanciaDe(t, p);
      const html = `
        <p class="pc-rotulo">Em ${formataTempo(t)} a ${formataPace(p)}/km, você percorre</p>
        <p class="pc-numero">${d.toLocaleString('pt-BR', { maximumFractionDigits: 2 })} <span>km</span></p>
        <dl class="pc-sec">${linha('Velocidade média', `${formataVelocidade(velocidadeDe(p))} km/h`)}${linha('Em metros', `${Math.round(d * 1000).toLocaleString('pt-BR')} m`)}</dl>
        ${blocoExtras(p, false)}${acoes(p)}`;
      return mostra(html, `Distância: ${d.toLocaleString('pt-BR', { maximumFractionDigits: 2 })} quilômetros.`, `dist|${t}|${p}`, 'pace_distance_calculated', {
        pace_bucket: faixaPace(p),
      });
    }

    if (modo === 'velocidade') {
      const v = parseNumero(semSeparadorFinal(f.kmh.value));
      if (algumPreenchido(f.kmh) && !velocidadeValida(v)) return erro('Confira a velocidade: de 1 a 60 km/h.', f.kmh);
      if (paceDigitado(f.cpm, f.cps) && pace(f.cpm, f.cps) === null) return erro(MSG_PACE, f.cpm, f.cps);
      // Se a pessoa digitou a velocidade, ela é a verdade: 11 km/h não pode virar 11,01
      // por ter passado pelo pace arredondado ao segundo.
      const p = origemConversor === 'kmh' && velocidadeValida(v) ? paceDaVelocidade(v) : pace(f.cpm, f.cps);
      if (p === null) return vazio();
      const kmh = velocidadeDe(p);
      const html = `
        <p class="pc-rotulo">${formataPace(p)}/km equivale a</p>
        <p class="pc-numero">${formataVelocidade(kmh)} <span>km/h</span></p>
        <dl class="pc-sec">${linha('Por milha', `${formataPace(pacePorMilha(p))}/mi`)}</dl>
        ${blocoExtras(p, false)}${acoes(p)}`;
      return mostra(html, `${formataPace(p)} por quilômetro é ${formataVelocidade(kmh)} quilômetros por hora.`, `vel|${Math.round(p * 100)}`, 'pace_speed_converted', {
        pace_bucket: faixaPace(p),
      });
    }

    // comparar
    const a = pace(f.am, f.as);
    const b = pace(f.bm, f.bs);
    if ((paceDigitado(f.am, f.as) && a === null) || (paceDigitado(f.bm, f.bs) && b === null))
      return erro('Confira os paces: de 1:00 a 60:00 por km, segundos até 59.', f.am, f.as, f.bm, f.bs);
    if (a === null || b === null) return vazio();
    const c = comparar(a, b);
    const mais = c.diferencaPorKm >= 0;
    const linhas = c.porDistancia
      .map((x) => `<tr><th scope="row">${formataKm(x.km)} km</th><td>${formataTempo(x.km * a)}</td><td>${formataTempo(x.km * b)}</td><td>${formataDiferenca(x.segundos)}</td></tr>`)
      .join('');
    const html = `
      <div class="pc-compara" aria-hidden="true"><span>Hoje <strong>${formataPace(a)}</strong></span><span class="pc-seta">→</span><span>Meta <strong>${formataPace(b)}</strong></span></div>
      <p class="pc-rotulo">${mais ? 'Precisa reduzir' : 'A meta é mais lenta em'}</p>
      <p class="pc-numero">${Math.abs(Math.round(c.diferencaPorKm))} <span>s por km</span></p>
      <dl class="pc-sec">${linha('Em proporção', `${(Math.abs(c.fracao) * 100).toLocaleString('pt-BR', { maximumFractionDigits: 1 })}% do tempo por km`)}${linha('Velocidade', `${formataVelocidade(velocidadeDe(a))} → ${formataVelocidade(velocidadeDe(b))} km/h`)}</dl>
      ${tabelaRolavel('Diferença por distância', `<table><caption>O que essa diferença vira em cada distância</caption>
      <thead><tr><th scope="col">Distância</th><th scope="col">Hoje</th><th scope="col">Meta</th><th scope="col">Diferença</th></tr></thead>
      <tbody>${linhas}</tbody></table>`)}`;
    return mostra(
      html,
      `Diferença de ${Math.abs(Math.round(c.diferencaPorKm))} segundos por quilômetro; em 10 quilômetros, ${formataTempoExtenso(Math.abs(c.porDistancia[1].segundos))}.`,
      `cmp|${a}|${b}`,
      'pace_comparison_used',
      { pace_bucket: faixaPace(a) },
    );
  }

  /** O aviso espera a digitação parar: "7" a caminho de "75" não é erro ainda. */
  function erro(msg: string, ...campos: HTMLElement[]): void {
    vazio();
    campos.forEach((c) => {
      c.setAttribute('aria-invalid', 'true');
      c.setAttribute('aria-describedby', 'pc-aviso');
    });
    atrasoAviso = window.setTimeout(() => {
      aviso.textContent = msg;
      aviso.hidden = false;
    }, 700);
  }

  function acoes(p: number): string {
    return `<div class="pc-acoes">
      <button type="button" class="pc-btn pc-btn-sec" data-acao="outra">Calcular outra coisa</button>
      <button type="button" class="pc-btn pc-btn-sec" data-acao="comparar" data-pace="${Math.round(p)}">Comparar com uma meta</button>
      <button type="button" class="pc-link-btn" data-acao="limpar">Limpar</button>
    </div>`;
  }

  saida.addEventListener('click', (ev) => {
    const alvo = ev.target as HTMLElement;
    if (alvo.closest('[data-todos]')) {
      verTodos = !verTodos;
      abertos.add('parciais');
      calcula();
      return;
    }
    const acao = alvo.closest<HTMLButtonElement>('[data-acao]');
    if (!acao) return;
    if (acao.dataset.acao === 'outra') {
      $<HTMLElement>('#pc-modos', app)!.scrollIntoView({ block: 'start' });
      $<HTMLButtonElement>(`[data-modo="${modo}"]`, app)!.focus({ preventScroll: true });
    } else if (acao.dataset.acao === 'limpar') {
      Object.values(f).forEach((c) => {
        if (c instanceof HTMLInputElement) c.value = '';
      });
      f.unidade.value = 'km';
      distId = '5k';
      verTodos = false;
      abertos.clear();
      marcaDist();
      marcaMeta(null);
      calcula();
      try {
        history.replaceState(null, '', `${location.pathname}${location.search}`);
      } catch {
        /* sem history */
      }
      $<HTMLButtonElement>(`[data-modo="${modo}"]`, app)!.focus();
    } else if (acao.dataset.acao === 'comparar') {
      const p = Number(acao.dataset.pace);
      f.am.value = String(Math.floor(p / 60));
      f.as.value = String(p % 60).padStart(2, '0');
      trocaModo('comparar');
      f.bm.focus();
    }
  });

  saida.addEventListener(
    'toggle',
    (ev) => {
      const d = ev.target as HTMLDetailsElement;
      const nome = d.dataset.det;
      if (!nome) return;
      if (!d.open) {
        abertos.delete(nome);
        return;
      }
      // Um <details> redesenhado já aberto também dispara "toggle": esse não conta.
      if (abertos.has(nome)) return;
      abertos.add(nome);
      if (nome === 'parciais') evento('pace_splits_viewed', { mode: modo });
    },
    true,
  );

  /* ───────── campos: calcula ao digitar ───────── */

  Object.values(f).forEach((c) =>
    c.addEventListener('input', () => {
      comecar();
      if (c === f.distOutra || c === f.unidade) verTodos = false;
      if (c === f.h || c === f.m || c === f.s || c === f.distOutra) marcaMeta(null);
      calcula();
    }),
  );

  /* ───────── fragmento: o cálculo compartilhável ───────── */

  function escreveFragmento(): void {
    const p = new URLSearchParams();
    p.set('m', modo);
    const km = distanciaKm();
    if (km !== null && BLOCOS[modo].includes('dist')) {
      if (distId) p.set('d', distId);
      else {
        // O valor como foi digitado, com a unidade: 10 milhas voltam como 10 milhas.
        p.set('d', String(parseNumero(semSeparadorFinal(f.distOutra.value), f.unidade.value === 'm')));
        if (f.unidade.value !== 'km') p.set('u', f.unidade.value);
      }
    }
    const t = tempoS();
    if (t !== null && BLOCOS[modo].includes('tempo')) p.set('t', String(t));
    const pp = pace(f.pm, f.ps);
    if (pp !== null && BLOCOS[modo].includes('pace')) p.set('p', String(pp));
    const cp = pace(f.cpm, f.cps);
    if (cp !== null && modo === 'velocidade') p.set('p', String(cp));
    const a = pace(f.am, f.as);
    const b = pace(f.bm, f.bs);
    if (modo === 'comparar' && a !== null && b !== null) {
      p.set('a', String(a));
      p.set('b', String(b));
    }
    try {
      history.replaceState(null, '', `${location.pathname}${location.search}#${p.toString()}`);
    } catch {
      /* sem history: segue sem link */
    }
  }

  function leFragmento(): void {
    const h = location.hash.slice(1);
    if (!h) return;
    const p = new URLSearchParams(h);
    const m = p.get('m') as Modo | null;
    const pacePara = (seg: string | null, mm: HTMLInputElement, ss: HTMLInputElement) => {
      const n = Number(seg);
      if (!Number.isInteger(n) || !paceValido(n)) return;
      mm.value = String(Math.floor(n / 60));
      ss.value = String(n % 60).padStart(2, '0');
    };
    const d = p.get('d');
    if (d) {
      const u = (['km', 'm', 'mi'] as const).find((x) => x === p.get('u')) ?? 'km';
      if (distanciaPronta(d)) distId = d;
      else if (Number.isFinite(Number(d)) && distanciaValida(paraKm(Number(d), u))) {
        distId = null;
        f.distOutra.value = String(Number(d)).replace('.', ',');
        f.unidade.value = u;
      }
    }
    const t = Number(p.get('t'));
    if (Number.isInteger(t) && t > 0) {
      const hh = Math.floor(t / 3600);
      f.h.value = hh ? String(hh) : '';
      f.m.value = String(Math.floor((t % 3600) / 60));
      f.s.value = String(t % 60);
    }
    if (m === 'velocidade') {
      pacePara(p.get('p'), f.cpm, f.cps);
      liga('pace');
    } else pacePara(p.get('p'), f.pm, f.ps);
    pacePara(p.get('a'), f.am, f.as);
    pacePara(p.get('b'), f.bm, f.bs);
    if (m && MODOS.includes(m)) modo = m;
    deLink = true;
  }

  /* ───────── compartilhar ───────── */

  async function copia(texto: string): Promise<boolean> {
    try {
      await navigator.clipboard.writeText(texto);
      return true;
    } catch {
      return false;
    }
  }

  const compartilhar = $<HTMLButtonElement>('#pc-compartilhar', app);
  const rotulo = compartilhar?.textContent ?? '';
  let volta: number | undefined;
  compartilhar?.addEventListener('click', async () => {
    const url = location.origin + location.pathname;
    const texto = 'Estou usando essa calculadora de pace para organizar minhas metas de corrida. Testa aí:';
    const nav = navigator as Navigator & { share?: (d: ShareData) => Promise<void> };
    const mostraRotulo = (t: string) => {
      compartilhar.textContent = t;
      window.clearTimeout(volta);
      volta = window.setTimeout(() => (compartilhar.textContent = rotulo), 2000);
    };
    if (nav.share) {
      try {
        await nav.share({ title: 'Calculadora de pace', text: texto, url });
        evento('pace_shared', { method: 'nativo' });
        return;
      } catch (e) {
        // Cancelar a folha de compartilhar não é erro; recusa do navegador cai para a cópia.
        if ((e as DOMException)?.name === 'AbortError') return;
      }
    }
    if (await copia(url)) {
      mostraRotulo('Link copiado');
      evento('pace_shared', { method: 'copiar' });
    } else mostraRotulo('Não foi possível copiar');
  });

  const copiar = $<HTMLButtonElement>('#pc-copiar-calculo', app);
  const rotuloCopiar = copiar?.textContent ?? '';
  let voltaCopiar: number | undefined;
  function atualizaCopiar(): void {
    if (copiar) copiar.hidden = !temResultado;
  }
  copiar?.addEventListener('click', async () => {
    const ok = await copia(location.href);
    copiar.textContent = ok ? 'Link deste cálculo copiado' : 'Não foi possível copiar';
    window.clearTimeout(voltaCopiar);
    voltaCopiar = window.setTimeout(() => (copiar.textContent = rotuloCopiar), 2000);
    if (ok) evento('pace_shared', { method: 'calculo' });
  });
  $<HTMLAnchorElement>('#pc-whats', app)?.addEventListener('click', () => evento('pace_shared', { method: 'whatsapp' }));

  $$<HTMLAnchorElement>('[data-pace-link]').forEach((a) =>
    a.addEventListener('click', () =>
      evento(a.dataset.paceLink === 'personal' ? 'pace_find_personal_clicked' : 'pace_related_tool_clicked', { target: a.dataset.paceLink! }),
    ),
  );

  const esteira = $<HTMLElement>('#tabela-esteira');
  if (esteira && 'IntersectionObserver' in window) {
    const io = new IntersectionObserver((es) => {
      if (es.some((e) => e.isIntersecting)) {
        evento('pace_treadmill_viewed');
        io.disconnect();
      }
    });
    io.observe(esteira);
  }

  /* ───────── o app na tela ───────── */

  // O botão flutuante do WhatsApp cobre os números alinhados à direita no celular.
  if ('IntersectionObserver' in window) {
    new IntersectionObserver((es) => document.body.classList.toggle('pc-app-visivel', es.some((e) => e.isIntersecting))).observe(app);
  }

  /* ───────── início ───────── */

  leFragmento();
  marcaDist();
  trocaModo(modo, false);
  evento('pace_tool_view');
  // Outro link colado na mesma aba: o replaceState da própria página não dispara este evento.
  window.addEventListener('hashchange', () => {
    leFragmento();
    marcaDist();
    trocaModo(modo, false);
  });
}
