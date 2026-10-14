/**
 * Interface da calculadora de passos.
 *
 * Quatro modos, e um bloco opcional comum ("deixar mais preciso") com
 * ritmo, altura, peso e passo medido. O primeiro resultado sai só com os
 * passos: nada de oito campos antes de responder. Os campos são os mesmos
 * entre os modos — trocar de modo não apaga nada.
 *
 * O resultado aparece enquanto a pessoa digita. O fragmento (#m=passos&p=…)
 * guarda só o modo e o número de passos ou km — nunca peso, altura, meta ou
 * histórico — e o Google não rastreia fragmento: nenhum cálculo vira URL.
 *
 * O dataLayer recebe só categorias: modo, faixa de passos (as de
 * Tudor-Locke), faixa de km e se altura/peso/passo foram informados.
 *
 * O histórico do "Quanto falta?" e as preferências (ritmo, altura, passo)
 * ficam no localStorage deste aparelho, e tudo funciona sem ele.
 */
import {
  METAS_COMPARADAS,
  RITMOS,
  RITMO_PADRAO,
  type RitmoId,
  type Dia,
  alturaValida,
  arredondaKcal,
  arredondaPassos,
  comparaSemanas,
  faixaEvento,
  faixaEventoKm,
  faixaKm,
  faixaPassos,
  formataFaixaKcal,
  formataFaixaKm,
  formataFaixaPassos,
  formataKm,
  formataPassos,
  formataPct,
  formataTempo,
  kcalDePassos,
  kmDePassos,
  kmValidos,
  mediaPassos,
  minutosDePassos,
  parseDecimal,
  parsePassos,
  passoDaMedida,
  passoEstimado,
  passoPedeConferencia,
  passoValido,
  passosDeKm,
  passosEmMinutos,
  passosValidos,
  pesoValido,
  quantoFalta,
  ritmo,
  sugereCm,
} from '../lib/caminhada/passos';

type Modo = 'passos' | 'km' | 'meta' | 'medir';
const MODOS: Modo[] = ['passos', 'km', 'meta', 'medir'];
const NOMES_MODO: Record<Modo, string> = {
  passos: 'Passos em km',
  km: 'Km em passos',
  meta: 'Quanto falta para a meta',
  medir: 'Medir meu passo',
};
const DICAS: Record<Modo, string> = {
  passos: 'Digite quantos passos você deu.',
  km: 'Digite a distância em km.',
  meta: 'Digite a meta e quantos passos você já fez hoje.',
  medir: 'Digite a distância conhecida e os passos contados.',
};

const CHAVE_HIST = 'pp-passos-historico';
const CHAVE_PREFS = 'pp-passos-prefs';
const MAX_DIAS = 60;

const $ = <T extends HTMLElement>(sel: string, raiz: ParentNode = document): T | null => raiz.querySelector<T>(sel);
const $$ = <T extends HTMLElement>(sel: string, raiz: ParentNode = document): T[] =>
  Array.from(raiz.querySelectorAll<T>(sel));

const esc = (t: string) => t.replace(/[&<>"]/g, (c) => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;' })[c]!);
const semSeparadorFinal = (v: string) => v.trim().replace(/[.,]$/, '');
const linha = (dt: string, dd: string) => `<div class="ps-linha"><dt>${dt}</dt><dd>${dd}</dd></div>`;

function hojeISO(): string {
  const d = new Date();
  return `${d.getFullYear()}-${String(d.getMonth() + 1).padStart(2, '0')}-${String(d.getDate()).padStart(2, '0')}`;
}
const DIAS_SEMANA = ['dom', 'seg', 'ter', 'qua', 'qui', 'sex', 'sáb'];
function rotuloDia(iso: string): string {
  const [a, m, d] = iso.split('-').map(Number);
  const dt = new Date(a, m - 1, d);
  return `${DIAS_SEMANA[dt.getDay()]}, ${String(d).padStart(2, '0')}/${String(m).padStart(2, '0')}`;
}
const diasAtras = (iso: string, n: number): string => {
  const [a, m, d] = iso.split('-').map(Number);
  const dt = new Date(a, m - 1, d - n);
  return `${dt.getFullYear()}-${String(dt.getMonth() + 1).padStart(2, '0')}-${String(dt.getDate()).padStart(2, '0')}`;
};

function leHistorico(): Dia[] {
  try {
    const bruto = localStorage.getItem(CHAVE_HIST);
    if (!bruto) return [];
    const j = JSON.parse(bruto) as { v?: number; dias?: Dia[] };
    if (j?.v !== 1 || !Array.isArray(j.dias)) return [];
    return j.dias.filter((d) => /^\d{4}-\d{2}-\d{2}$/.test(d.data) && Number.isFinite(d.passos) && d.passos >= 0);
  } catch {
    return [];
  }
}
function gravaHistorico(dias: Dia[]): boolean {
  try {
    const ordenados = [...dias].sort((a, b) => a.data.localeCompare(b.data)).slice(-MAX_DIAS);
    localStorage.setItem(CHAVE_HIST, JSON.stringify({ v: 1, dias: ordenados }));
    return true;
  } catch {
    return false;
  }
}
interface Prefs {
  ritmo?: RitmoId;
  altura?: string;
  passo?: string;
}
function lePrefs(): Prefs {
  try {
    const j = JSON.parse(localStorage.getItem(CHAVE_PREFS) || '{}') as Prefs;
    return j && typeof j === 'object' ? j : {};
  } catch {
    return {};
  }
}
function gravaPrefs(p: Prefs): void {
  try {
    localStorage.setItem(CHAVE_PREFS, JSON.stringify(p));
  } catch {
    /* sem armazenamento, sem preferência lembrada */
  }
}

export function iniciarCalculadoraPassos(): void {
  const raiz = $<HTMLElement>('#ps-app');
  if (!raiz) return;
  const app: HTMLElement = raiz;
  app.classList.add('is-js');

  const saida = $<HTMLElement>('#ps-resultado', app)!;
  const anuncio = $<HTMLElement>('#ps-anuncio', app)!;
  const aviso = $<HTMLElement>('#ps-aviso', app)!;
  const preciso = $<HTMLDetailsElement>('#ps-preciso', app)!;
  const campo = (id: string) => $<HTMLInputElement>(`#${id}`, app)!;
  const f = {
    passos: campo('ps-passos'),
    km: campo('ps-km'),
    meta: campo('ps-meta'),
    feitos: campo('ps-feitos'),
    medM: campo('ps-med-m'),
    medP: campo('ps-med-p'),
    altura: campo('ps-altura'),
    peso: campo('ps-peso'),
    passo: campo('ps-passo'),
  };

  let modo: Modo = 'passos';
  let ritmoId: RitmoId = RITMO_PADRAO;
  let comecou = false;
  let deLink = false;
  let atrasoEvento: number | undefined;
  let atrasoAnuncio: number | undefined;
  const ultimo: Partial<Record<Modo, string>> = {};
  let historico = leHistorico();

  function evento(nome: string, extra: Record<string, string | number | boolean> = {}): void {
    try {
      const w = window as unknown as { dataLayer?: unknown[] };
      w.dataLayer = w.dataLayer || [];
      w.dataLayer.push({ event: nome, tool: 'calculadora-de-passos', ...(deLink ? { source: 'link' } : {}), ...extra });
    } catch {
      /* analytics nunca derruba a ferramenta */
    }
  }
  const comecar = () => {
    deLink = false;
    if (!comecou) {
      comecou = true;
      evento('steps_tool_start');
    }
  };
  const anuncia = (t: string) => {
    window.clearTimeout(atrasoAnuncio);
    atrasoAnuncio = window.setTimeout(() => (anuncio.textContent = t), 700);
  };

  /* ───────── leitura ───────── */

  const num = (c: HTMLInputElement) => parseDecimal(semSeparadorFinal(c.value));
  const cadencia = () => ritmo(ritmoId).cadencia;

  interface PassoAtual {
    cm: number;
    origem: 'informado' | 'altura' | 'padrao';
  }
  function passoAtual(): PassoAtual {
    const p = num(f.passo);
    if (passoValido(p)) return { cm: p, origem: 'informado' };
    const a = num(f.altura);
    if (alturaValida(a)) return { cm: passoEstimado(cadencia(), a), origem: 'altura' };
    return { cm: passoEstimado(cadencia()), origem: 'padrao' };
  }
  const pesoKg = (): number | null => {
    const p = num(f.peso);
    return pesoValido(p) ? p : null;
  };
  const personalizado = () => ritmoId !== RITMO_PADRAO || passoAtual().origem !== 'padrao';
  const flags = () => ({
    has_height: alturaValida(num(f.altura)),
    has_weight: pesoKg() !== null,
    has_stride: passoValido(num(f.passo)),
    pace: ritmoId,
  });

  /* ───────── avisos de digitação, sem bloquear ───────── */

  function avisos(): string[] {
    const out: string[] = [];
    const a = num(f.altura);
    const sa = sugereCm(a, 'altura');
    if (sa) out.push(`Altura em centímetros: você quis dizer ${sa} cm?`);
    else if (f.altura.value.trim() && !alturaValida(a)) out.push('Confira a altura: a calculadora usa centímetros, de 100 a 230.');
    const p = num(f.passo);
    const sp = sugereCm(p, 'passo');
    if (sp) out.push(`Passo em centímetros: você quis dizer ${sp} cm?`);
    else if (f.passo.value.trim() && !passoValido(p)) out.push('Confira o passo: em centímetros, um passo de adulto costuma ficar entre 50 e 90.');
    else if (passoValido(p) && passoPedeConferencia(p)) out.push(`Um passo de ${Math.round(p)} cm é fora do comum. Vale conferir a medida.`);
    const w = num(f.peso);
    if (f.peso.value.trim() && !pesoValido(w)) out.push('Confira o peso: a conta aceita de 30 a 250 kg.');
    return out;
  }

  /* ───────── blocos do resultado ───────── */

  function textoPasso(pa: PassoAtual): string {
    const cm = `${Math.round(pa.cm)} cm`;
    if (pa.origem === 'informado') return `Usamos o passo que você informou (${cm}).`;
    if (pa.origem === 'altura') return `Usamos um passo estimado de ${cm}, pela sua altura e pelo ritmo ${ritmo(ritmoId).nome.toLowerCase()}.`;
    return `Usamos o passo médio de ${cm} do ritmo ${ritmo(ritmoId).nome.toLowerCase()}. Com a sua altura, a conta fica mais sua.`;
  }

  /** As linhas de calorias (dentro do <dl>) e, sem peso, o convite (fora dele). */
  function blocoKcal(passos: number, pa: PassoAtual): { linhas: string; convite: string } {
    const peso = pesoKg();
    if (peso === null) {
      return {
        linhas: '',
        convite: `<p class="ps-convite">Quer estimar as calorias? <button type="button" class="ps-link-btn" data-acao="abrir-preciso" data-foco="ps-peso">Adicione o seu peso</button>.</p>`,
      };
    }
    const k = kcalDePassos(passos, peso, pa.cm, cadencia());
    return { linhas: linha('Gasto estimado', formataFaixaKcal(k.min, k.max)) + linha('Acréscimo ao dia', `~${arredondaKcal(k.liquida)} kcal`), convite: '' };
  }

  function tabelaMetas(pa: PassoAtual): string {
    const linhas = METAS_COMPARADAS.map(
      (p) =>
        `<tr><th scope="row">${formataPassos(p)}</th><td>${formataKm(kmDePassos(p, pa.cm))}</td><td>${formataTempo(minutosDePassos(p, cadencia()))}</td></tr>`,
    ).join('');
    return `<div class="ps-tabela" tabindex="0" role="region" aria-label="Comparação de metas"><table><caption>Comparando metas, com o seu passo</caption><thead><tr><th scope="col">Passos</th><th scope="col">Distância</th><th scope="col">Tempo</th></tr></thead><tbody>${linhas}</tbody></table></div>`;
  }

  function acoes(principal: { href: string; rotulo: string; alvo: string }): string {
    return `<div class="ps-acoes"><a class="ps-btn ps-btn-sec" href="${principal.href}" data-ps-link="${principal.alvo}">${esc(principal.rotulo)}</a></div>`;
  }

  /* ───────── os modos ───────── */

  function rPassos(): { html: string; chave: string | null; nome?: string; extra?: Record<string, string | boolean> } {
    const p = parsePassos(f.passos.value);
    if (!passosValidos(p)) {
      return { html: `<p class="ps-vazio">${f.passos.value.trim() ? 'Digite um número de passos entre 1 e 100.000.' : DICAS.passos}</p>`, chave: null };
    }
    const pa = passoAtual();
    const km = kmDePassos(p, pa.cm);
    const fx = faixaKm(p, pa.cm);
    const min = minutosDePassos(p, cadencia());
    const faixa = pa.origem === 'informado' ? 'com o passo que você mediu' : `entre ${formataFaixaKm(fx.min, fx.max, 'e')}, conforme a sua passada`;
    const kc = blocoKcal(p, pa);
    const html =
      `<p class="ps-rotulo">${formataPassos(p)} passos são aproximadamente</p>` +
      `<p class="ps-numero">${formataKm(km).replace(/ (km|m)$/, ' <span>$1</span>')}</p>` +
      `<p class="ps-faixa">${faixa}</p>` +
      `<dl class="ps-sec">${linha('Tempo caminhando', `~${formataTempo(min)}`)}${linha('Passos por minuto', `~${cadencia()}`)}${kc.linhas}</dl>${kc.convite}` +
      `<p class="ps-significa">Para você, ${formataPassos(p)} passos representam cerca de ${formataKm(km)} e ${formataTempo(min)} de caminhada contínua. ${esc(textoPasso(pa))}</p>` +
      tabelaMetas(pa) +
      (pesoKg() !== null
        ? acoes({ href: '/calorias/caminhada/', rotulo: 'Calcular o gasto com tempo e inclinação', alvo: 'calorias-caminhada' })
        : acoes({ href: '/ferramentas/treino-para-minha-rotina/', rotulo: 'Encaixar treino na semana além das caminhadas', alvo: 'rotina' })) +
      `<p class="ps-nota">É uma estimativa: passo, ritmo e terreno variam, e o contador do celular também erra um pouco.</p>`;
    return {
      html,
      chave: `${p}|${pa.cm.toFixed(1)}|${ritmoId}|${pesoKg() ?? ''}`,
      nome: pesoKg() !== null ? 'steps_calories_calculated' : 'steps_to_km_calculated',
      extra: { steps_bucket: faixaEvento(p), distance_bucket: faixaEventoKm(km) },
    };
  }

  function rKm(): ReturnType<typeof rPassos> {
    const k = num(f.km);
    if (!kmValidos(k)) {
      return { html: `<p class="ps-vazio">${f.km.value.trim() ? 'Digite uma distância entre 0,1 e 100 km.' : DICAS.km}</p>`, chave: null };
    }
    const pa = passoAtual();
    const p = passosDeKm(k, pa.cm);
    const fx = faixaPassos(k, pa.cm);
    const min = minutosDePassos(p, cadencia());
    const faixa = pa.origem === 'informado' ? 'com o passo que você mediu' : `entre ${formataFaixaPassos(fx.min, fx.max, 'e')}, conforme a sua passada`;
    const kc = blocoKcal(p, pa);
    const kTxt = formataKm(k);
    const html =
      `<p class="ps-rotulo">${esc(kTxt)} são aproximadamente</p>` +
      `<p class="ps-numero">${formataPassos(arredondaPassos(p))} <span>passos</span></p>` +
      `<p class="ps-faixa">${faixa}</p>` +
      `<dl class="ps-sec">${linha('Tempo caminhando', `~${formataTempo(min)}`)}${linha('Passos por minuto', `~${cadencia()}`)}${kc.linhas}</dl>${kc.convite}` +
      `<p class="ps-significa">${esc(textoPasso(pa))}</p>` +
      `<p class="ps-convite">Vai correr essa distância ou quer o ritmo por km? A <a href="/ferramentas/calculadora-de-pace/" data-ps-link="pace">calculadora de pace</a> faz essa conta.</p>` +
      `<p class="ps-nota">É uma estimativa: passo, ritmo e terreno variam.</p>`;
    return {
      html,
      chave: `${k}|${pa.cm.toFixed(1)}|${ritmoId}|${pesoKg() ?? ''}`,
      nome: 'km_to_steps_calculated',
      extra: { distance_bucket: faixaEventoKm(k), steps_bucket: faixaEvento(p) },
    };
  }

  function rHistorico(): string {
    if (!historico.length) return '';
    const hoje = hojeISO();
    const ultimos = [...historico].sort((a, b) => b.data.localeCompare(a.data)).slice(0, 7);
    const lista = ultimos.map((d) => `<li><span>${rotuloDia(d.data)}</span><strong>${formataPassos(d.passos)}</strong></li>`).join('');
    const semana = historico.filter((d) => d.data > diasAtras(hoje, 7));
    const anterior = historico.filter((d) => d.data <= diasAtras(hoje, 7) && d.data > diasAtras(hoje, 14));
    const media = mediaPassos(semana);
    const dif = comparaSemanas(anterior, semana);
    let resumo = '';
    if (media !== null && semana.length >= 2) resumo += `<p class="ps-nota">Média dos últimos 7 dias: <strong>${formataPassos(arredondaPassos(media))} passos por dia</strong> (${semana.length} dias salvos).</p>`;
    if (dif !== null && Math.abs(dif) >= 100) {
      const d = formataPassos(arredondaPassos(Math.abs(dif)));
      resumo +=
        dif > 0
          ? `<p class="ps-nota">${d} passos por dia a mais que na semana anterior: você aumentou a sua atividade diária.</p>`
          : `<p class="ps-nota">${d} passos por dia a menos que na semana anterior.</p>`;
    }
    return `<div class="ps-hist"><h3>Seus dias</h3><ol>${lista}</ol>${resumo}<button type="button" class="ps-link-btn" data-acao="apagar-historico">Apagar o histórico deste aparelho</button></div>`;
  }

  function rMeta(): ReturnType<typeof rPassos> {
    const meta = parsePassos(f.meta.value);
    const feitos = parsePassos(f.feitos.value);
    const hist = rHistorico();
    if (!passosValidos(meta)) {
      return { html: `<p class="ps-vazio">Digite a sua meta de passos do dia.</p>${hist}`, chave: null };
    }
    if (feitos === null || !Number.isFinite(feitos) || feitos > 100000) {
      return { html: `<p class="ps-vazio">${f.feitos.value.trim() ? 'Confira os passos de hoje.' : 'Quantos passos você já fez hoje? Copie do relógio ou do celular.'}</p>${hist}`, chave: null };
    }
    const pa = passoAtual();
    const q = quantoFalta(meta, feitos, pa.cm, cadencia());
    const pct = formataPct(q.progresso);
    const barra = `<div class="ps-barra" aria-hidden="true"><div class="ps-barra-cheia" style="width:${Math.round(q.progresso * 100)}%"></div></div>`;
    let corpo: string;
    if (q.concluida) {
      corpo =
        `<p class="ps-rotulo">Hoje você fez ${formataPassos(feitos)} passos</p>` +
        `<p class="ps-numero">${pct}</p>${barra}` +
        `<p class="ps-faixa">Meta de ${formataPassos(meta)} alcançada${q.alem > 0 ? `, com ${formataPassos(q.alem)} além` : ''}.</p>` +
        `<dl class="ps-sec">${linha('Distância de hoje', `~${formataKm(kmDePassos(feitos, pa.cm))}`)}</dl>`;
    } else {
      corpo =
        `<p class="ps-rotulo">Faltam</p>` +
        `<p class="ps-numero">${formataPassos(q.faltam)} <span>passos</span></p>${barra}` +
        `<p class="ps-faixa">${formataPassos(feitos)} de ${formataPassos(meta)} — ${pct} da meta</p>` +
        `<dl class="ps-sec">${linha('Isso é cerca de', formataKm(q.km))}${linha('Caminhando', `~${formataTempo(q.minutos)}`)}${linha('Distância de hoje', `~${formataKm(kmDePassos(feitos, pa.cm))}`)}</dl>` +
        `<p class="ps-significa">Uma volta de ${formataTempo(q.minutos)} fecha a conta — ou duas de ${formataTempo(q.minutos / 2)}.</p>`;
    }
    const salvo = historico.some((d) => d.data === hojeISO() && d.passos === feitos);
    const html =
      corpo +
      `<div class="ps-acoes"><button type="button" class="ps-btn ps-btn-sec" data-acao="salvar-dia"${salvo ? ' disabled' : ''}>${salvo ? 'Dia salvo neste aparelho' : 'Salvar meu dia'}</button></div>` +
      `<p class="ps-nota">O histórico fica só neste aparelho, sem cadastro. Volte amanhã para ver quanto falta.</p>` +
      hist;
    return { html, chave: `${meta}|${feitos}|${pa.cm.toFixed(1)}|${ritmoId}`, nome: 'steps_goal_calculated', extra: { goal_bucket: faixaEvento(meta), steps_bucket: faixaEvento(feitos) } };
  }

  let passoMedido: number | null = null;
  function rMedir(): ReturnType<typeof rPassos> {
    const m = parseDecimal(semSeparadorFinal(f.medM.value.replace(/\.(?=\d{3}\b)/g, '')));
    const p = parsePassos(f.medP.value);
    passoMedido = null;
    if (m === null || p === null || !(m > 0) || !(p > 0)) {
      return { html: `<p class="ps-vazio">${DICAS.medir}</p>`, chave: null };
    }
    const cm = passoDaMedida(m, p);
    if (cm === null || !passoValido(cm)) {
      return { html: `<p class="ps-vazio">Essa conta dá um passo fora do possível. Confira a distância (em metros) e os passos.</p>`, chave: null };
    }
    passoMedido = cm;
    const conferir = passoPedeConferencia(cm) ? `<p class="ps-nota">${Math.round(cm)} cm é fora do comum para um passo de caminhada. Vale repetir a medida.</p>` : '';
    const html =
      `<p class="ps-rotulo">O seu passo é de aproximadamente</p>` +
      `<p class="ps-numero">${Math.round(cm)} <span>cm</span></p>` +
      `<dl class="ps-sec">${linha('10 mil passos', `~${formataKm(kmDePassos(10000, cm))}`)}${linha('1 km', `~${formataPassos(arredondaPassos(passosDeKm(1, cm)))} passos`)}</dl>` +
      conferir +
      `<div class="ps-acoes"><button type="button" class="ps-btn ps-btn-sec" data-acao="usar-passo">Usar este passo nas outras contas</button></div>` +
      `<p class="ps-nota">Repita a medida duas vezes no mesmo ritmo e use a média. Andando mais rápido, o passo aumenta.</p>`;
    return { html, chave: cm.toFixed(1), nome: 'steps_stride_measured' };
  }

  /* ───────── tabelas da página, personalizadas ───────── */

  function atualizaTabelas(): void {
    const pa = passoAtual();
    const nota = $<HTMLElement>('#ps-tabelas-nota');
    const pers = personalizado();
    if (nota) {
      nota.hidden = !pers;
      nota.textContent = pers ? `Tabelas ajustadas para você: passo de ${Math.round(pa.cm)} cm, ritmo ${ritmo(ritmoId).nome.toLowerCase()}.` : '';
    }
    const cm = pa.cm;
    $$<HTMLElement>('td[data-passos]').forEach((td) => (td.textContent = formataKm(kmDePassos(Number(td.dataset.passos), cm))));
    $$<HTMLElement>('td[data-km]').forEach((td) => (td.textContent = formataPassos(arredondaPassos(passosDeKm(Number(td.dataset.km), cm)))));
    $$<HTMLElement>('td[data-min-passos]').forEach((td) => {
      const passos = passosEmMinutos(Number(td.dataset.minPassos), cadencia());
      td.textContent = formataPassos(arredondaPassos(passos));
    });
    $$<HTMLElement>('td[data-min-km]').forEach((td) => {
      const passos = passosEmMinutos(Number(td.dataset.minKm), cadencia());
      td.textContent = formataKm(kmDePassos(passos, cm));
    });
  }

  /* ───────── o cálculo ───────── */

  function calcula(): void {
    const r = modo === 'passos' ? rPassos() : modo === 'km' ? rKm() : modo === 'meta' ? rMeta() : rMedir();
    saida.innerHTML = r.html;
    const av = avisos();
    aviso.hidden = av.length === 0;
    aviso.textContent = av.join(' ');
    atualizaTabelas();
    atualizaFragmento();
    if (r.chave && r.nome && comecou && ultimo[modo] !== r.chave) {
      window.clearTimeout(atrasoEvento);
      const chave = r.chave;
      const nome = r.nome;
      const extra = r.extra ?? {};
      atrasoEvento = window.setTimeout(() => {
        ultimo[modo] = chave;
        evento(nome, { mode: modo, ...flags(), ...extra });
      }, 1200);
    }
    if (r.chave) {
      const n = saida.querySelector('.ps-numero')?.textContent ?? '';
      anuncia(`Resultado: ${n}`);
    }
  }

  function atualizaFragmento(): void {
    // Só depois de a pessoa mexer (ou de chegar por um link): abrir a página não reescreve o endereço.
    if (!comecou && !deLink) return;
    try {
      const p = new URLSearchParams();
      p.set('m', modo);
      if (modo === 'passos') {
        const v = parsePassos(f.passos.value);
        if (passosValidos(v)) p.set('p', String(v));
      } else if (modo === 'km') {
        const v = num(f.km);
        if (kmValidos(v)) p.set('k', String(v));
      }
      const novo = `#${p.toString()}`;
      if (location.hash !== novo) history.replaceState(null, '', novo);
    } catch {
      /* sem history, sem link do cálculo */
    }
  }

  function leFragmento(): void {
    const h = location.hash.replace(/^#/, '');
    if (!h) return;
    const p = new URLSearchParams(h);
    const m = p.get('m') as Modo | null;
    if (m && MODOS.includes(m)) modo = m;
    const pas = parsePassos(p.get('p') ?? '');
    if (passosValidos(pas)) {
      f.passos.value = String(pas);
      if (!m) modo = 'passos';
    }
    const km = parseDecimal(p.get('k') ?? '');
    if (kmValidos(km)) f.km.value = String(km).replace('.', ',');
    const g = parsePassos(p.get('g') ?? '');
    if (passosValidos(g)) f.meta.value = String(g);
    deLink = true;
  }

  /* ───────── modos e ritmo ───────── */

  function trocaModo(novo: Modo, porClique = true): void {
    const mudou = novo !== modo;
    modo = novo;
    $$<HTMLButtonElement>('[data-modo]', app).forEach((b) => {
      const ativo = b.dataset.modo === novo;
      b.classList.toggle('is-ativo', ativo);
      b.setAttribute('aria-pressed', String(ativo));
    });
    $$<HTMLElement>('[data-bloco]', app).forEach((el) => (el.hidden = el.dataset.bloco !== novo));
    calcula();
    if (porClique && mudou) {
      anuncia(`${NOMES_MODO[novo]}. ${DICAS[novo]}`);
      evento('steps_mode_selected', { mode: novo });
    }
  }

  function marcaRitmo(): void {
    $$<HTMLButtonElement>('[data-ritmo]', app).forEach((b) => {
      const ativo = b.dataset.ritmo === ritmoId;
      b.classList.toggle('is-ativo', ativo);
      b.setAttribute('aria-pressed', String(ativo));
    });
    const dica = $<HTMLElement>('#ps-ritmo-dica', app);
    const r = ritmo(ritmoId);
    if (dica) dica.textContent = `${r.comoReconhecer} Cerca de ${r.velocidade.toLocaleString('pt-BR')} km/h e ${r.cadencia} passos por minuto.`;
  }

  const salvaPrefs = () => gravaPrefs({ ritmo: ritmoId, altura: f.altura.value.trim(), passo: f.passo.value.trim() });

  $$<HTMLButtonElement>('[data-modo]', app).forEach((b) =>
    b.addEventListener('click', () => {
      comecar();
      trocaModo(b.dataset.modo as Modo);
    }),
  );
  $$<HTMLButtonElement>('[data-ritmo]', app).forEach((b) =>
    b.addEventListener('click', () => {
      comecar();
      ritmoId = (b.dataset.ritmo as RitmoId) ?? RITMO_PADRAO;
      marcaRitmo();
      salvaPrefs();
      calcula();
    }),
  );
  $$<HTMLButtonElement>('[data-preset]', app).forEach((b) =>
    b.addEventListener('click', () => {
      comecar();
      const alvo = b.dataset.preset as 'passos' | 'km' | 'meta';
      f[alvo].value = b.dataset.valor ?? '';
      calcula();
    }),
  );
  Object.entries(f).forEach(([nome, c]) =>
    c.addEventListener('input', () => {
      comecar();
      if (nome === 'altura' || nome === 'passo') salvaPrefs();
      calcula();
    }),
  );
  preciso.addEventListener('toggle', () => {
    if (preciso.open) evento('steps_personalize_opened');
  });

  /* ───────── ações dentro do resultado ───────── */

  saida.addEventListener('click', (e) => {
    const alvo = (e.target as HTMLElement).closest<HTMLElement>('[data-acao], [data-ps-link]');
    if (!alvo) return;
    if (alvo.dataset.psLink) {
      evento(alvo.dataset.psLink === 'personal' ? 'steps_find_personal_clicked' : 'steps_related_tool_clicked', { target: alvo.dataset.psLink });
      return;
    }
    const acao = alvo.dataset.acao;
    if (acao === 'abrir-preciso') {
      preciso.open = true;
      const id = alvo.dataset.foco;
      if (id) $<HTMLInputElement>(`#${id}`, app)?.focus();
    } else if (acao === 'salvar-dia') {
      const feitos = parsePassos(f.feitos.value);
      const meta = parsePassos(f.meta.value);
      if (feitos === null) return;
      const hoje = hojeISO();
      historico = [...historico.filter((d) => d.data !== hoje), { data: hoje, passos: feitos, ...(meta ? { meta } : {}) }];
      const ok = gravaHistorico(historico);
      if (!ok) {
        aviso.hidden = false;
        aviso.textContent = 'Este navegador não deixou salvar (modo anônimo ou armazenamento bloqueado). A conta continua funcionando.';
        return;
      }
      evento('steps_history_saved', { days_saved: Math.min(historico.length, 30), steps_bucket: faixaEvento(feitos) });
      calcula();
      anuncia('Dia salvo neste aparelho.');
    } else if (acao === 'apagar-historico') {
      historico = [];
      try {
        localStorage.removeItem(CHAVE_HIST);
      } catch {
        /* nada a apagar */
      }
      calcula();
      anuncia('Histórico apagado.');
    } else if (acao === 'usar-passo' && passoMedido !== null) {
      f.passo.value = String(Math.round(passoMedido));
      preciso.open = true;
      salvaPrefs();
      evento('steps_stride_used');
      trocaModo('passos');
      anuncia(`Passo de ${Math.round(passoMedido)} centímetros em uso.`);
    }
  });

  $$<HTMLAnchorElement>('[data-ps-link]').forEach((a) => {
    if (saida.contains(a)) return;
    a.addEventListener('click', () =>
      evento(a.dataset.psLink === 'personal' ? 'steps_find_personal_clicked' : 'steps_related_tool_clicked', { target: a.dataset.psLink! }),
    );
  });

  /* ───────── compartilhar: a ferramenta, nunca os dados ───────── */

  const compartilhar = $<HTMLButtonElement>('#ps-compartilhar', app);
  const rotulo = compartilhar?.textContent ?? '';
  let volta: number | undefined;
  compartilhar?.addEventListener('click', async () => {
    const url = location.origin + location.pathname;
    const texto = 'Usei essa calculadora para descobrir quantos km meus passos representam. Testa também:';
    const nav = navigator as Navigator & { share?: (d: ShareData) => Promise<void> };
    const mostra = (t: string) => {
      compartilhar.textContent = t;
      window.clearTimeout(volta);
      volta = window.setTimeout(() => (compartilhar.textContent = rotulo), 2000);
    };
    if (nav.share) {
      try {
        await nav.share({ title: 'Calculadora de passos', text: texto, url });
        evento('steps_shared', { method: 'nativo' });
        return;
      } catch (e) {
        if ((e as DOMException)?.name === 'AbortError') return;
      }
    }
    try {
      await navigator.clipboard.writeText(url);
      mostra('Link copiado');
      evento('steps_shared', { method: 'copiar' });
    } catch {
      mostra('Não foi possível copiar');
    }
  });
  $<HTMLAnchorElement>('#ps-whats', app)?.addEventListener('click', () => evento('steps_shared', { method: 'whatsapp' }));

  if ('IntersectionObserver' in window) {
    new IntersectionObserver((es) => document.body.classList.toggle('ps-app-visivel', es.some((e) => e.isIntersecting))).observe(app);
  }

  /* ───────── início ───────── */

  const prefs = lePrefs();
  if (prefs.ritmo && RITMOS.some((r) => r.id === prefs.ritmo)) ritmoId = prefs.ritmo;
  if (prefs.altura) f.altura.value = prefs.altura;
  if (prefs.passo) f.passo.value = prefs.passo;
  if (prefs.altura || prefs.passo || (prefs.ritmo && prefs.ritmo !== RITMO_PADRAO)) preciso.open = true;
  leFragmento();
  marcaRitmo();
  trocaModo(modo, false);
  evento('steps_tool_view');
  if (historico.length) evento('steps_return_visit', { days_saved: Math.min(historico.length, 30) });
  window.addEventListener('hashchange', () => {
    leFragmento();
    trocaModo(modo, false);
  });
}
