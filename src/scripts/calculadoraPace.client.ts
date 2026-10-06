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
  let ultimoCalculo = '';
  let atrasoEvento: number | undefined;
  let atrasoAnuncio: number | undefined;

  function evento(nome: string, extra: Record<string, string | number> = {}): void {
    try {
      const w = window as unknown as { dataLayer?: unknown[] };
      w.dataLayer = w.dataLayer || [];
      w.dataLayer.push({ event: nome, tool: 'calculadora-de-pace', ...extra });
    } catch {
      /* analytics nunca derruba a ferramenta */
    }
  }
  const comecar = () => {
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
    const v = parseNumero(f.distOutra.value);
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

  /* ───────── modos ───────── */

  function trocaModo(novo: Modo, foco = true): void {
    modo = novo;
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
    if (foco) {
      const primeiro = $<HTMLElement>('[data-bloco]:not([hidden]) button, [data-bloco]:not([hidden]) input', app);
      primeiro?.focus({ preventScroll: true });
      primeiro?.scrollIntoView({ block: 'nearest' });
    }
    if (foco) evento('pace_mode_selected', { mode: novo });
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
      marcaDist();
      if (distId === null) f.distOutra.focus();
      calcula();
    }),
  );

  /* ───────── metas comuns ───────── */

  $$<HTMLButtonElement>('[data-meta]', app).forEach((b) =>
    b.addEventListener('click', () => {
      comecar();
      const meta = METAS[Number(b.dataset.meta)];
      if (!meta) return;
      distId = meta.distancia;
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
    if (origem === 'pace') {
      const p = pace(f.cpm, f.cps);
      f.kmh.value = p ? formataVelocidade(velocidadeDe(p)) : '';
    } else {
      const v = parseNumero(f.kmh.value);
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
      const t = Math.max(60, Math.round(a - Number(b.dataset.reduz)));
      f.bm.value = String(Math.floor(t / 60));
      f.bs.value = String(t % 60).padStart(2, '0');
      calcula();
    }),
  );

  /* ───────── resultado ───────── */

  const linha = (rotulo: string, valor: string) => `<div class="pc-linha"><dt>${rotulo}</dt><dd>${valor}</dd></div>`;

  function blocoParciais(km: number, p: number): string {
    const longa = km > LIMITE_POR_KM;
    const lista = longa && !verTodos ? parciaisChave(km, p) : parciaisPorKm(km, p);
    const linhas = lista
      .map((x) => `<tr><th scope="row">${x.rotulo}</th><td>${formataTempo(x.trecho)}</td><td>${formataTempo(x.acumulado)}</td></tr>`)
      .join('');
    const botao = longa
      ? `<button type="button" class="pc-link-btn" data-todos>${verTodos ? 'Ver só os pontos-chave' : 'Ver todos os quilômetros'}</button>`
      : '';
    return `<details class="pc-det" data-det="parciais"${verTodos ? ' open' : ''}><summary>Ver parciais</summary>
      <div class="pc-tabela"><table><caption>Parciais em ritmo constante</caption>
      <thead><tr><th scope="col">Distância</th><th scope="col">Trecho</th><th scope="col">Acumulado</th></tr></thead>
      <tbody>${linhas}</tbody></table></div>${botao}</details>`;
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
      <details class="pc-det" data-det="pista"><summary>Na pista: 200, 400 e 800 m</summary><ul class="pc-mini-lista">${pt}</ul></details>
      <details class="pc-det" data-det="projecao"><summary>Se mantiver este pace</summary><ul class="pc-mini-lista">${pr}</ul>
      <p class="pc-nota">É aritmética, não previsão: manter este ritmo por 5 km não significa sustentá-lo numa meia ou numa maratona.</p></details>`;
  }

  function mostra(html: string, frase: string, chave: string, nome: string, extra: Record<string, string>): void {
    saida.innerHTML = html;
    saida.hidden = false;
    anuncia(frase);
    if (chave !== ultimoCalculo) {
      if (!ultimoCalculo) document.dispatchEvent(new CustomEvent('ppp:resultado'));
      ultimoCalculo = chave;
      window.clearTimeout(atrasoEvento);
      atrasoEvento = window.setTimeout(() => evento(nome, { mode: modo, ...extra }), 900);
    }
    escreveFragmento();
  }

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
    ultimoCalculo = '';
  }

  function calcula(): void {
    aviso.hidden = true;
    const unidadeMi = !distId && f.unidade.value === 'mi';
    const km = distanciaKm();
    const t = tempoS();

    if (modo === 'pace' || modo === 'meta') {
      if (!distId && algumPreenchido(f.distOutra) && km === null) return erro('Confira a distância: um número maior que zero, com vírgula ou ponto.');
      if (algumPreenchido(f.h, f.m, f.s) && t === null) return erro('Confira o tempo: minutos e segundos vão até 59.');
      if (km === null || t === null) return vazio();
      const p = paceDe(km, t);
      const al = alerta(p);
      const meta = modo === 'meta';
      const html = `
        <p class="pc-rotulo">${meta ? `Para ${formataKm(km)} km em ${formataTempo(t)}, você precisa manter` : 'Seu pace'}</p>
        <p class="pc-numero">${formataPace(p)} <span>/km</span></p>
        <dl class="pc-sec">${linha('Velocidade média', `${formataVelocidade(velocidadeDe(p))} km/h`)}${linha('Distância', `${formataKm(km)} km`)}${linha('Tempo', formataTempo(t))}</dl>
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
      if (algumPreenchido(f.pm, f.ps) && p === null) return erro('Confira o pace: de 1:00 a 60:00 por km, segundos até 59.');
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
      if (algumPreenchido(f.h, f.m, f.s) && t === null) return erro('Confira o tempo: minutos e segundos vão até 59.');
      if (algumPreenchido(f.pm, f.ps) && p === null) return erro('Confira o pace: de 1:00 a 60:00 por km, segundos até 59.');
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
      const p = pace(f.cpm, f.cps);
      const v = parseNumero(f.kmh.value);
      if (algumPreenchido(f.kmh) && !velocidadeValida(v)) return erro('Confira a velocidade: de 1 a 60 km/h.');
      if (algumPreenchido(f.cpm, f.cps) && p === null) return erro('Confira o pace: de 1:00 a 60:00 por km, segundos até 59.');
      if (p === null) return vazio();
      const html = `
        <p class="pc-rotulo">${formataPace(p)}/km equivale a</p>
        <p class="pc-numero">${formataVelocidade(velocidadeDe(p))} <span>km/h</span></p>
        <dl class="pc-sec">${linha('No painel da esteira', `${formataEsteira(velocidadeDe(p))} km/h`)}${linha('Por milha', `${formataPace(pacePorMilha(p))}/mi`)}</dl>
        ${blocoExtras(p, false)}${acoes(p)}`;
      return mostra(html, `${formataPace(p)} por quilômetro é ${formataVelocidade(velocidadeDe(p))} quilômetros por hora.`, `vel|${p}`, 'pace_speed_converted', {
        pace_bucket: faixaPace(p),
      });
    }

    // comparar
    const a = pace(f.am, f.as);
    const b = pace(f.bm, f.bs);
    if ((algumPreenchido(f.am, f.as) && a === null) || (algumPreenchido(f.bm, f.bs) && b === null))
      return erro('Confira os paces: de 1:00 a 60:00 por km, segundos até 59.');
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
      <div class="pc-tabela"><table><caption>O que essa diferença vira em cada distância</caption>
      <thead><tr><th scope="col">Distância</th><th scope="col">Hoje</th><th scope="col">Meta</th><th scope="col">Diferença</th></tr></thead>
      <tbody>${linhas}</tbody></table></div>`;
    return mostra(
      html,
      `Diferença de ${Math.abs(Math.round(c.diferencaPorKm))} segundos por quilômetro; em 10 quilômetros, ${formataTempoExtenso(Math.abs(c.porDistancia[1].segundos))}.`,
      `cmp|${a}|${b}`,
      'pace_comparison_used',
      { pace_bucket: faixaPace(a) },
    );
  }

  function erro(msg: string): void {
    aviso.textContent = msg;
    aviso.hidden = false;
    vazio();
  }

  function acoes(p: number): string {
    return `<div class="pc-acoes">
      <button type="button" class="pc-btn pc-btn-sec" data-acao="outra">Calcular outra coisa</button>
      <button type="button" class="pc-btn pc-btn-sec" data-acao="comparar" data-pace="${Math.round(p)}">Comparar com uma meta</button>
    </div>`;
  }

  saida.addEventListener('click', (ev) => {
    const alvo = ev.target as HTMLElement;
    if (alvo.closest('[data-todos]')) {
      verTodos = !verTodos;
      calcula();
      $<HTMLButtonElement>('[data-todos]', saida)?.focus();
      return;
    }
    const acao = alvo.closest<HTMLButtonElement>('[data-acao]');
    if (!acao) return;
    if (acao.dataset.acao === 'outra') {
      $<HTMLElement>('#pc-modos', app)!.scrollIntoView({ block: 'start' });
      $<HTMLButtonElement>(`[data-modo="${modo}"]`, app)!.focus({ preventScroll: true });
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
      if (d.open && d.dataset.det === 'parciais') evento('pace_splits_viewed', { mode: modo });
    },
    true,
  );

  /* ───────── campos: calcula ao digitar ───────── */

  Object.values(f).forEach((c) =>
    c.addEventListener('input', () => {
      comecar();
      calcula();
    }),
  );

  /* ───────── fragmento: o cálculo compartilhável ───────── */

  function escreveFragmento(): void {
    const p = new URLSearchParams();
    p.set('m', modo);
    const km = distanciaKm();
    if (km !== null && BLOCOS[modo].includes('dist')) p.set('d', distId ?? String(Math.round(km * 10000) / 10000));
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
      history.replaceState(null, '', `${location.pathname}#${p.toString()}`);
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
      if (distanciaPronta(d)) distId = d;
      else if (distanciaValida(Number(d))) {
        distId = null;
        f.distOutra.value = String(Number(d)).replace('.', ',');
        f.unidade.value = 'km';
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
  }

  /* ───────── compartilhar ───────── */

  const compartilhar = $<HTMLButtonElement>('#pc-compartilhar', app);
  const rotulo = compartilhar?.textContent ?? '';
  let volta: number | undefined;
  compartilhar?.addEventListener('click', async () => {
    const url = location.origin + location.pathname;
    const texto = 'Estou usando essa calculadora de pace para organizar minhas metas de corrida. Testa aí:';
    const nav = navigator as Navigator & { share?: (d: ShareData) => Promise<void> };
    try {
      if (nav.share) {
        await nav.share({ title: 'Calculadora de pace', text: texto, url });
        evento('pace_shared', { method: 'nativo' });
        return;
      }
      await navigator.clipboard.writeText(url);
      compartilhar.textContent = 'Link copiado';
      window.clearTimeout(volta);
      volta = window.setTimeout(() => (compartilhar.textContent = rotulo), 2000);
      evento('pace_shared', { method: 'copiar' });
    } catch {
      /* cancelado */
    }
  });
  $<HTMLButtonElement>('#pc-copiar-calculo', app)?.addEventListener('click', async () => {
    const b = $<HTMLButtonElement>('#pc-copiar-calculo', app)!;
    try {
      await navigator.clipboard.writeText(location.href);
      const antes = b.textContent;
      b.textContent = 'Link deste cálculo copiado';
      window.setTimeout(() => (b.textContent = antes), 2000);
      evento('pace_shared', { method: 'calculo' });
    } catch {
      /* sem clipboard */
    }
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

  /* ───────── início ───────── */

  leFragmento();
  marcaDist();
  trocaModo(modo, false);
  evento('pace_tool_view');
}
