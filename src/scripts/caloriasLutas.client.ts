/**
 * Interface da calculadora de calorias do boxe e das lutas.
 *
 * O QUE MUDA EM RELAÇÃO ÀS OUTRAS DEZ
 *
 * O modo principal pergunta rounds, não minutos: é assim que quem treina
 * luta conta o treino. Três campos curtos lado a lado (rounds, minutos por
 * round, minutos de intervalo), porque são três números que a pessoa sabe de
 * cabeça — e o intervalo sai da conta como repouso.
 *
 * As nove atividades ficam sempre visíveis, em três grupos. Os ritmos do
 * saco são atividades próprias, não um seletor que aparece só no saco: um
 * controle que surge e some empurra os campos de baixo, e é exatamente o
 * defeito que a auditoria de foco caça. O aviso de que os ritmos só valem
 * para quem contou os golpes aparece na SAÍDA, abaixo dos campos.
 *
 * Nada vai para a URL: peso é dado corporal.
 */
import {
  ATIVIDADES,
  DESCANSO_MAX,
  DESCANSO_MIN,
  DURACAO_MAX,
  DURACAO_MIN,
  DURACAO_PADRAO,
  KCAL_MAX,
  KCAL_MIN,
  MINUTOS_MAX,
  MINUTOS_MIN,
  NOTA_RITMO_SACO,
  PESO_MAX,
  PESO_MIN,
  ROUNDS_MAX,
  ROUNDS_MIN,
  arredondaKcal,
  atividade,
  deKcal,
  deRounds,
  deTempo,
  descansoValido,
  duracaoValida,
  formataKcal,
  formataMet,
  formataRounds,
  formataTempo,
  fraseContexto,
  kcalValida,
  minutosValidos,
  nomeNaFrase,
  parseNumero,
  pesoValido,
  roundsEquivalentes,
  roundsValidos,
  type Resultado,
} from '../lib/calorias/lutas';
import { whatsappUrl } from '../lib/links';
import { focoSemSalto } from './focoSemSalto';
import { reservaAltura } from './reservaAltura';

type Modo = 'rounds' | 'tempo' | 'meta';

/** Os ritmos contados do saco: só eles mostram o aviso de contagem. */
const RITMOS_CONTADOS = new Set(['saco60', 'saco120', 'saco180']);

const $ = <T extends HTMLElement>(sel: string): T | null => document.querySelector<T>(sel);

export function iniciarCalculadoraLutas(): void {
  if (!$('#cl-app')) return;

  const peso = $<HTMLInputElement>('#cl-peso')!;
  const duracao = $<HTMLInputElement>('#cl-duracao')!;
  const descanso = $<HTMLInputElement>('#cl-descanso')!;
  const saida = $<HTMLElement>('#cl-saida')!;
  const erro = $<HTMLElement>('#cl-erro')!;

  const campos: Record<Modo, HTMLInputElement> = {
    rounds: $<HTMLInputElement>('#cl-rounds')!,
    tempo: $<HTMLInputElement>('#cl-minutos')!,
    meta: $<HTMLInputElement>('#cl-meta')!,
  };

  let modo: Modo = 'rounds';
  let idAtividade = 'saco';
  let comecou = false;

  function evento(nome: string, extra: Record<string, string | number> = {}): void {
    const w = window as unknown as { dataLayer?: unknown[] };
    w.dataLayer = w.dataLayer || [];
    w.dataLayer.push({ event: nome, tool: 'calorias-lutas', ...extra });
  }

  const textoDica = (a: (typeof ATIVIDADES)[number]): string =>
    `${formataMet(a.met)} METs — Compêndio, código ${a.codigo}. ${a.comoReconhecer}`;

  /** A dica da atividade declara o MET e o código de onde ele vem. */
  function desenhaAtividade(): void {
    document.querySelectorAll<HTMLButtonElement>('.cl-atividade').forEach((b) => {
      const ativo = b.dataset.atividade === idAtividade;
      b.classList.toggle('is-ativo', ativo);
      b.setAttribute('aria-pressed', String(ativo));
    });
    const dica = $<HTMLElement>('#cl-atividade-dica');
    if (dica) dica.textContent = textoDica(atividade(idAtividade));
  }

  function trocaModo(novo: Modo): void {
    if (novo === modo) return;
    modo = novo;
    for (const [m, el] of Object.entries(campos)) {
      const bloco = el.closest<HTMLElement>('.cl-campo-modo');
      if (bloco) bloco.hidden = m !== novo;
    }

    document.querySelectorAll<HTMLButtonElement>('.cl-modo').forEach((b) => {
      const ativo = b.dataset.modo === novo;
      b.classList.toggle('is-ativo', ativo);
      b.setAttribute('aria-selected', String(ativo));
      b.tabIndex = ativo ? 0 : -1;
    });
    evento('calculator_mode_changed', { mode: novo });
    focoSemSalto(campos[novo]);
    calcula();
  }

  function calcula(): void {
    const p = parseNumero(peso.value);
    if (!pesoValido(p)) return falha(`Informe um peso entre ${PESO_MIN} e ${PESO_MAX} kg.`, !peso.value.trim());

    const v = parseNumero(campos[modo].value);
    let res: Resultado;

    if (modo === 'rounds') {
      if (!roundsValidos(v))
        return falha(
          `Informe quantos rounds: um número inteiro entre ${ROUNDS_MIN} e ${ROUNDS_MAX}.`,
          !campos.rounds.value.trim(),
        );
      const d = parseNumero(duracao.value);
      if (!duracaoValida(d))
        return falha(`Informe a duração do round entre ${DURACAO_MIN} e ${DURACAO_MAX} minutos.`, !duracao.value.trim());
      const i = parseNumero(descanso.value);
      if (!descansoValido(i))
        return falha(`Informe o intervalo entre ${DESCANSO_MIN} e ${DESCANSO_MAX} minutos.`, !descanso.value.trim());
      res = deRounds(v, d, i, p, idAtividade);
    } else if (modo === 'tempo') {
      if (!minutosValidos(v))
        return falha(`Informe um tempo entre ${MINUTOS_MIN} e ${MINUTOS_MAX} minutos.`, !campos.tempo.value.trim());
      res = deTempo(v, p, idAtividade);
    } else {
      if (!kcalValida(v))
        return falha(`Informe uma meta entre ${KCAL_MIN} e ${KCAL_MAX.toLocaleString('pt-BR')} kcal.`, !campos.meta.value.trim());
      res = deKcal(v, p, idAtividade);
    }

    if (!comecou) {
      comecou = true;
      evento('calculator_started');
    }
    desenha(p, res);
    evento('calculator_completed', { mode: modo, activity: idAtividade, kcal: arredondaKcal(res.kcal) });
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

    if (modo === 'meta') {
      const rounds = roundsEquivalentes(res.minutosAtivos, DURACAO_PADRAO);
      set('.cl-numero', formataTempo(res.minutosAtivos));
      set('.cl-unidade', 'de esforço');
      set(
        '.cl-frase',
        `Para gastar aproximadamente ${formataKcal(res.kcal)} kcal com ${Math.round(pesoKg)} kg em ` +
          `${nomeNaFrase(res.idAtividade)}: cerca de ${formataRounds(rounds, DURACAO_PADRAO)}, ` +
          `sem contar o intervalo.`,
      );
    } else {
      set('.cl-numero', `≈ ${formataKcal(res.kcal)}`);
      set('.cl-unidade', 'kcal');
      set('.cl-frase', fraseContexto(pesoKg, res));
    }

    set('.cl-d-esforco', formataTempo(res.minutosAtivos));
    /*
     * A linha do intervalo fica sempre no lugar, para a caixa não mudar de
     * altura entre os modos; fora dos rounds ela diz que não entrou.
     */
    set(
      '.cl-d-intervalo',
      res.minutosDescanso > 0 ? `${formataTempo(res.minutosDescanso)}, como repouso` : 'fora da conta',
    );
    set('.cl-d-liquido', `≈ ${formataKcal(res.kcalLiquida)} kcal`);
    set('.cl-d-met', formataMet(res.met));
    set('.cl-d-fonte', `Compêndio ${atividade(res.idAtividade).codigo}`);

    const nota = saida.querySelector<HTMLElement>('.cl-nota-ritmo');
    if (nota) {
      const mostrar = RITMOS_CONTADOS.has(res.idAtividade);
      nota.hidden = !mostrar;
      if (mostrar) nota.textContent = NOTA_RITMO_SACO;
    }

    atualizaWhatsapp(res);
  }

  /** Leva contexto e resultado. Nunca o peso. */
  function atualizaWhatsapp(res: Resultado): void {
    const link = saida.querySelector<HTMLAnchorElement>('.cl-whats');
    if (!link) return;
    const at = nomeNaFrase(res.idAtividade);
    let oQue: string;
    if (modo === 'meta') {
      oQue = `Para bater ${formataKcal(res.kcal)} kcal, a conta deu ${formataTempo(res.minutosAtivos)} de esforço em ${at}.`;
    } else if (res.cenario === 'rounds') {
      oQue = `Minha estimativa deu cerca de ${formataKcal(res.kcal)} kcal em ${formataRounds(res.rounds, res.duracao)} de ${at}.`;
    } else {
      oQue = `Minha estimativa deu cerca de ${formataKcal(res.kcal)} kcal em ${formataTempo(res.minutosAtivos)} de ${at}.`;
    }
    link.href = whatsappUrl(
      `Oi, Montinho! Vim pela calculadora de calorias do boxe e das lutas do Personal por Perto. ${oQue} ` +
        `Queria entender como encaixar a luta numa estratégia para o meu objetivo.`,
    );
  }

  /* ---------------------------------------------------------------- */
  document.querySelectorAll<HTMLButtonElement>('.cl-modo').forEach((b) => {
    b.addEventListener('click', () => trocaModo(b.dataset.modo as Modo));
  });

  const abas = Array.from(document.querySelectorAll<HTMLButtonElement>('.cl-modo'));
  abas.forEach((b, i) => {
    b.addEventListener('keydown', (e) => {
      if (e.key !== 'ArrowRight' && e.key !== 'ArrowLeft') return;
      e.preventDefault();
      trocaModo(abas[(i + (e.key === 'ArrowRight' ? 1 : abas.length - 1)) % abas.length].dataset.modo as Modo);
    });
  });

  document.querySelectorAll<HTMLButtonElement>('.cl-atividade').forEach((b) => {
    b.addEventListener('click', () => {
      idAtividade = b.dataset.atividade ?? idAtividade;
      desenhaAtividade();
      evento('calculator_style_changed', { activity: idAtividade });
      calcula();
    });
  });

  document.querySelectorAll<HTMLButtonElement>('.cl-preset').forEach((b) => {
    b.addEventListener('click', () => {
      // Sem data-alvo não é preset: é um botão que só usa a mesma aparência.
      if (!b.dataset.alvo) return;
      const alvo = campos[b.dataset.alvo as Modo];
      if (!alvo) return;
      alvo.value = b.dataset.valor ?? '';
      calcula();
      alvo.focus();
    });
  });

  [peso, duracao, descanso, ...Object.values(campos)].forEach((el) => {
    el.addEventListener('input', calcula);
  });

  evento('calculator_view');
  const dicaAtividade = $<HTMLElement>('#cl-atividade-dica');
  if (dicaAtividade) reservaAltura(dicaAtividade, ATIVIDADES.map(textoDica));
  desenhaAtividade();
  calcula();
}
