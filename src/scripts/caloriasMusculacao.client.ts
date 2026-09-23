/**
 * Interface da calculadora de calorias da musculação — a que mora dentro
 * do artigo /emagrecimento/quantas-calorias-queima-a-musculacao/.
 *
 * O QUE MUDA EM RELAÇÃO ÀS OUTRAS NOVE
 *
 * Os três modos são as três contas que o artigo já fazia em texto: a
 * sessão, a semana e o músculo ganho em repouso. O terceiro não depende de
 * peso nem de tipo de treino — é o gasto de repouso do tecido —, então o
 * bloco de peso e tipo some nesse modo, em vez de ficar na tela sem efeito.
 *
 * Não existe campo de descanso entre séries, e isso é decisão de conteúdo:
 * a medição de Farinatti e Castinheiras Neto mostra que o descanso não
 * muda o custo do mesmo trabalho. Um campo de descanso sugeriria o
 * contrário.
 *
 * Também não existe bloco de CTA aqui: o artigo já tem os dele. Uma terceira
 * chamada no meio do texto seria pressão, não ajuda.
 *
 * Nada vai para a URL: peso é dado corporal.
 */
import {
  EPOC_MAX,
  EPOC_MIN,
  MINUTOS_MAX,
  MINUTOS_MIN,
  MUSCULO_MAX,
  MUSCULO_MIN,
  NOTA_DESCANSO,
  NOTA_EPOC,
  NOTA_MUSCULO,
  PESO_MAX,
  PESO_MIN,
  SESSOES_MAX,
  SESSOES_MIN,
  arredondaKcal,
  deMusculo,
  deSemana,
  deSessao,
  formataKcal,
  formataMet,
  formataTempo,
  fraseMusculo,
  fraseSemana,
  fraseSessao,
  minutosValidos,
  musculoValido,
  parseNumero,
  pesoValido,
  sessoesValidas,
  tipo,
} from '../lib/calorias/musculacao';

type Modo = 'sessao' | 'semana' | 'musculo';

const $ = <T extends HTMLElement>(sel: string): T | null => document.querySelector<T>(sel);

export function iniciarCalculadoraMusculacao(): void {
  if (!$('#cm-app')) return;

  const peso = $<HTMLInputElement>('#cm-peso')!;
  const minutos = $<HTMLInputElement>('#cm-minutos')!;
  const sessoes = $<HTMLInputElement>('#cm-sessoes')!;
  const musculo = $<HTMLInputElement>('#cm-musculo')!;
  const blocoTreino = $<HTMLElement>('#cm-bloco-treino')!;
  const blocoMinutos = $<HTMLElement>('#cm-bloco-minutos')!;
  const blocoSessoes = $<HTMLElement>('#cm-bloco-sessoes')!;
  const blocoMusculo = $<HTMLElement>('#cm-bloco-musculo')!;
  const saida = $<HTMLElement>('#cm-saida')!;
  const erro = $<HTMLElement>('#cm-erro')!;

  /** O campo que recebe o foco ao entrar em cada modo. */
  const principal: Record<Modo, HTMLInputElement> = { sessao: minutos, semana: sessoes, musculo };

  let modo: Modo = 'sessao';
  let idTipo = 'variado';
  let comecou = false;

  function evento(nome: string, extra: Record<string, string | number> = {}): void {
    const w = window as unknown as { dataLayer?: unknown[] };
    w.dataLayer = w.dataLayer || [];
    w.dataLayer.push({ event: nome, tool: 'calorias-musculacao', ...extra });
  }

  function desenhaTipo(): void {
    const t = tipo(idTipo);
    document.querySelectorAll<HTMLButtonElement>('.cm-tipo').forEach((b) => {
      const ativo = b.dataset.tipo === idTipo;
      b.classList.toggle('is-ativo', ativo);
      b.setAttribute('aria-pressed', String(ativo));
    });
    const dica = $<HTMLElement>('#cm-tipo-dica');
    if (dica) dica.textContent = `${formataMet(t.met)} METs — Compêndio, código ${t.codigo}. ${t.comoReconhecer}`;
  }

  function trocaModo(novo: Modo): void {
    if (novo === modo) return;
    modo = novo;
    blocoTreino.hidden = novo === 'musculo';
    blocoMinutos.hidden = novo === 'musculo';
    blocoSessoes.hidden = novo !== 'semana';
    blocoMusculo.hidden = novo !== 'musculo';

    document.querySelectorAll<HTMLButtonElement>('.cm-modo').forEach((b) => {
      const ativo = b.dataset.modo === novo;
      b.classList.toggle('is-ativo', ativo);
      b.setAttribute('aria-selected', String(ativo));
      b.tabIndex = ativo ? 0 : -1;
    });
    evento('calculator_mode_changed', { mode: novo });
    principal[novo].focus();
    calcula();
  }

  /** Campo em branco não é erro: é alguém que ainda não digitou. */
  function falha(msg: string, silencioso = false): void {
    saida.hidden = true;
    erro.hidden = silencioso;
    erro.textContent = silencioso ? '' : msg;
  }

  const set = (sel: string, txt: string) => {
    const el = saida.querySelector(sel);
    if (el) el.textContent = txt;
  };

  /** As quatro linhas do detalhe mudam de sentido conforme o modo. */
  function linhas(pares: [string, string][]): void {
    saida.querySelectorAll<HTMLElement>('.cm-detalhes > div').forEach((div, i) => {
      const par = pares[i];
      div.hidden = !par;
      if (!par) return;
      div.querySelector('dt')!.textContent = par[0];
      div.querySelector('dd')!.textContent = par[1];
    });
  }

  function calcula(): void {
    if (modo === 'musculo') {
      const kg = parseNumero(musculo.value);
      if (!musculoValido(kg)) {
        const f = (v: number) => v.toLocaleString('pt-BR');
        return falha(`Informe entre ${f(MUSCULO_MIN)} e ${f(MUSCULO_MAX)} kg de músculo.`, !musculo.value.trim());
      }
      const m = deMusculo(kg);
      mostra();
      set('.cm-numero', `≈ ${formataKcal(m.kcalDia)}`);
      set('.cm-unidade', 'kcal por dia');
      set('.cm-frase', fraseMusculo(m));
      linhas([
        ['Por ano', `≈ ${formataKcal(m.kcalAno)} kcal`],
        ['O mesmo peso em gordura', `≈ ${formataKcal(m.kcalDiaSeFosseGordura)} kcal por dia`],
        ['De onde vem o número', 'Elia; Wang et al. (2010)'],
      ]);
      nota(NOTA_MUSCULO);
      return concluido(m.kcalDia);
    }

    const p = parseNumero(peso.value);
    if (!pesoValido(p)) return falha(`Informe um peso entre ${PESO_MIN} e ${PESO_MAX} kg.`, !peso.value.trim());
    const min = parseNumero(minutos.value);
    if (!minutosValidos(min))
      return falha(`Informe um tempo de treino entre ${MINUTOS_MIN} e ${MINUTOS_MAX} minutos.`, !minutos.value.trim());

    const t = tipo(idTipo);
    if (modo === 'sessao') {
      const s = deSessao(min, p, idTipo);
      mostra();
      set('.cm-numero', `≈ ${formataKcal(s.kcal)}`);
      set('.cm-unidade', 'kcal');
      set('.cm-frase', fraseSessao(p, s));
      linhas([
        ['Acréscimo real ao dia', `≈ ${formataKcal(s.kcalLiquida)} kcal`],
        ['Depois do treino (EPOC)', `+${EPOC_MIN} a ${EPOC_MAX} kcal`],
        ['Intensidade', `${formataMet(s.met)} METs`],
        ['De onde vem o número', `Compêndio ${t.codigo}`],
      ]);
      nota(NOTA_EPOC);
      return concluido(s.kcal);
    }

    const n = parseNumero(sessoes.value);
    if (!sessoesValidas(n))
      return falha(`Informe de ${SESSOES_MIN} a ${SESSOES_MAX} sessões por semana, em número inteiro.`, !sessoes.value.trim());
    const w = deSemana(n, min, p, idTipo);
    mostra();
    set('.cm-numero', `≈ ${formataKcal(w.kcalSemana)}`);
    set('.cm-unidade', 'kcal por semana');
    set('.cm-frase', fraseSemana(p, w));
    linhas([
      ['Por sessão', `≈ ${formataKcal(w.kcal)} kcal`],
      ['Por mês', `≈ ${formataKcal(w.kcalMes)} kcal`],
      ['Intensidade', `${formataMet(w.met)} METs`],
      ['De onde vem o número', `Compêndio ${t.codigo}`],
    ]);
    nota(NOTA_DESCANSO);
    return concluido(w.kcalSemana);
  }

  function mostra(): void {
    erro.hidden = true;
    saida.hidden = false;
  }

  function nota(txt: string): void {
    set('.cm-nota-modo', txt);
  }

  function concluido(kcal: number): void {
    if (!comecou) {
      comecou = true;
      evento('calculator_started');
    }
    evento('calculator_completed', { mode: modo, type: idTipo, kcal: arredondaKcal(kcal) });
  }

  /* ---------------------------------------------------------------- */
  document.querySelectorAll<HTMLButtonElement>('.cm-modo').forEach((b) => {
    b.addEventListener('click', () => trocaModo(b.dataset.modo as Modo));
  });

  const abas = Array.from(document.querySelectorAll<HTMLButtonElement>('.cm-modo'));
  abas.forEach((b, i) => {
    b.addEventListener('keydown', (e) => {
      if (e.key !== 'ArrowRight' && e.key !== 'ArrowLeft') return;
      e.preventDefault();
      trocaModo(abas[(i + (e.key === 'ArrowRight' ? 1 : abas.length - 1)) % abas.length].dataset.modo as Modo);
    });
  });

  document.querySelectorAll<HTMLButtonElement>('.cm-tipo').forEach((b) => {
    b.addEventListener('click', () => {
      idTipo = b.dataset.tipo ?? idTipo;
      desenhaTipo();
      evento('calculator_style_changed', { type: idTipo });
      calcula();
    });
  });

  const alvos: Record<string, HTMLInputElement> = { minutos, sessoes, musculo };
  document.querySelectorAll<HTMLButtonElement>('.cm-preset').forEach((b) => {
    b.addEventListener('click', () => {
      // Sem data-alvo não é preset: é um botão que só usa a mesma aparência.
      if (!b.dataset.alvo) return;
      const alvo = alvos[b.dataset.alvo];
      if (!alvo) return;
      alvo.value = b.dataset.valor ?? '';
      calcula();
      alvo.focus();
    });
  });

  [peso, minutos, sessoes, musculo].forEach((el) => el.addEventListener('input', calcula));

  evento('calculator_view');
  desenhaTipo();
  calcula();
}
