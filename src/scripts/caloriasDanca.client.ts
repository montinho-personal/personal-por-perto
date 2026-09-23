/**
 * Interface da calculadora de calorias da dança.
 *
 * O QUE MUDA EM RELAÇÃO ÀS OUTRAS SEIS
 *
 * NÃO existe seletor de ritmo ou intensidade, e isso é decisão de conteúdo.
 * Em dança quem escolhe a intensidade é a música: ninguém faz uma aula de
 * Zumba "mais devagar". Oferecer um campo de ritmo seria prometer um
 * controle que a pessoa não tem. O único seletor é o TIPO de dança.
 *
 * Cada estilo mostra de onde o número dele vem — Compêndio com código, ou
 * estudo próprio. É a coluna que separa esta tabela das que preenchem a
 * lacuna com valor plausível.
 *
 * Nada vai para a URL: peso é dado corporal.
 */
import {
  DANCANDO_MAX,
  DANCANDO_MIN,
  ESTILOS,
  KCAL_MAX,
  KCAL_MIN,
  MINUTOS_MAX,
  MINUTOS_MIN,
  NOTA_INSTRUCAO,
  PESO_MAX,
  PESO_MIN,
  arredondaKcal,
  dancandoValido,
  deAula,
  deKcal,
  deTempo,
  estilo,
  formataKcal,
  formataTempo,
  fraseContexto,
  kcalValida,
  minutosValidos,
  parseNumero,
  pesoValido,
  type Resultado,
} from '../lib/calorias/danca';
import { whatsappUrl } from '../lib/links';

type Modo = 'dancando' | 'aula' | 'meta';

const $ = <T extends HTMLElement>(sel: string): T | null => document.querySelector<T>(sel);

export function iniciarCalculadoraDanca(): void {
  if (!$('#cd-app')) return;

  const peso = $<HTMLInputElement>('#cd-peso')!;
  const dancando = $<HTMLInputElement>('#cd-dancando')!;
  const dancandoSaida = $<HTMLOutputElement>('#cd-dancando-valor')!;
  const blocoAula = $<HTMLElement>('#cd-bloco-aula')!;
  const saida = $<HTMLElement>('#cd-saida')!;
  const erro = $<HTMLElement>('#cd-erro')!;

  const campos: Record<Modo, HTMLInputElement> = {
    dancando: $<HTMLInputElement>('#cd-minutos')!,
    aula: $<HTMLInputElement>('#cd-minutos-aula')!,
    meta: $<HTMLInputElement>('#cd-meta')!,
  };

  let modo: Modo = 'dancando';
  let idEstilo = 'aerobica';
  let comecou = false;

  function evento(nome: string, extra: Record<string, string | number> = {}): void {
    const w = window as unknown as { dataLayer?: unknown[] };
    w.dataLayer = w.dataLayer || [];
    w.dataLayer.push({ event: nome, tool: 'calorias-danca', ...extra });
  }

  /** A dica do estilo declara o MET e, principalmente, DE ONDE ele vem. */
  function desenhaEstilo(): void {
    const e = estilo(idEstilo);
    document.querySelectorAll<HTMLButtonElement>('.cd-estilo').forEach((b) => {
      const ativo = b.dataset.estilo === idEstilo;
      b.classList.toggle('is-ativo', ativo);
      b.setAttribute('aria-pressed', String(ativo));
    });
    const dica = $<HTMLElement>('#cd-estilo-dica');
    if (dica) {
      const fonte =
        e.origem === 'compendio'
          ? `${e.met.toLocaleString('pt-BR')} METs — Compêndio, código ${e.codigo}.`
          : `${e.met.toLocaleString('pt-BR')} METs — medição própria, não está no Compêndio.`;
      dica.textContent = `${fonte} ${e.comoReconhecer}`;
    }
  }

  function trocaEstilo(novo: string): void {
    idEstilo = novo;
    desenhaEstilo();
    evento('calculator_style_changed', { style: novo });
    calcula();
  }

  function trocaModo(novo: Modo): void {
    if (novo === modo) return;
    modo = novo;
    for (const [m, el] of Object.entries(campos)) {
      const bloco = el.closest<HTMLElement>('.cd-campo-modo');
      if (bloco) bloco.hidden = m !== novo;
    }
    blocoAula.hidden = novo !== 'aula';

    document.querySelectorAll<HTMLButtonElement>('.cd-modo').forEach((b) => {
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

    const v = parseNumero(campos[modo].value);
    let res: Resultado;

    if (modo === 'dancando') {
      if (!minutosValidos(v))
        return falha(`Informe um tempo entre ${MINUTOS_MIN} e ${MINUTOS_MAX} minutos.`, !campos.dancando.value.trim());
      res = deTempo(v, p, idEstilo);
    } else if (modo === 'aula') {
      const d = parseNumero(dancando.value) ?? 0;
      dancandoSaida.textContent = `${Math.round(d)}%`;
      if (!dancandoValido(d)) return falha(`A fração dançando precisa ficar entre ${DANCANDO_MIN}% e ${DANCANDO_MAX}%.`);
      if (!minutosValidos(v))
        return falha(`Informe um tempo entre ${MINUTOS_MIN} e ${MINUTOS_MAX} minutos.`, !campos.aula.value.trim());
      res = deAula(v, p, idEstilo, d);
    } else {
      if (!kcalValida(v))
        return falha(`Informe uma meta entre ${KCAL_MIN} e ${KCAL_MAX} kcal.`, !campos.meta.value.trim());
      res = deKcal(v, p, idEstilo);
    }

    if (!comecou) {
      comecou = true;
      evento('calculator_started');
    }
    desenha(p, res);
    evento('calculator_completed', { mode: modo, style: idEstilo, kcal: arredondaKcal(res.kcal) });
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
      set('.cd-numero', formataTempo(res.minutosDancando));
      set('.cd-unidade', 'dançando');
      set(
        '.cd-frase',
        `Para gastar aproximadamente ${formataKcal(res.kcal)} kcal com ${Math.round(pesoKg)} kg em ` +
          `${estilo(res.idEstilo).nome.toLowerCase()} — de dança efetiva, sem contar o tempo de instrução.`,
      );
    } else {
      set('.cd-numero', `≈ ${formataKcal(res.kcal)}`);
      set('.cd-unidade', 'kcal');
      set('.cd-frase', fraseContexto(pesoKg, res));
    }

    set('.cd-d-dancando', formataTempo(res.minutosDancando));
    set('.cd-d-liquido', `≈ ${formataKcal(res.kcalLiquida)} kcal`);
    set('.cd-d-met', res.met.toLocaleString('pt-BR', { maximumFractionDigits: 1 }));
    set('.cd-d-fonte', estilo(res.idEstilo).origem === 'compendio' ? `Compêndio ${estilo(res.idEstilo).codigo}` : 'Estudo próprio');

    // As linhas da aula só existem no cenário de aula.
    linha('.cd-linha-aula', res.cenario === 'aula');
    linha('.cd-linha-instrucao', res.cenario === 'aula');
    if (res.cenario === 'aula') {
      set('.cd-d-aula', `${formataTempo(res.minutosAula)} (${Math.round(res.dancando)}% dançando)`);
      set('.cd-d-instrucao', `≈ ${formataKcal(res.kcalInstrucao)} kcal, contados como repouso`);
    }

    const nota = saida.querySelector<HTMLElement>('.cd-nota-instrucao');
    if (nota) {
      nota.hidden = res.cenario !== 'aula';
      if (res.cenario === 'aula') nota.textContent = NOTA_INSTRUCAO;
    }

    atualizaWhatsapp(res);
  }

  /** Leva contexto e resultado. Nunca o peso. */
  function atualizaWhatsapp(res: Resultado): void {
    const link = saida.querySelector<HTMLAnchorElement>('.cd-whats');
    if (!link) return;
    const est = estilo(res.idEstilo).nome.toLowerCase();
    const oQue =
      modo === 'meta'
        ? `Para bater ${formataKcal(res.kcal)} kcal, a conta deu ${formataTempo(res.minutosDancando)} de ${est}.`
        : `Minha estimativa deu cerca de ${formataKcal(res.kcal)} kcal em ${formataTempo(res.minutosDancando)} de ${est}.`;
    link.href = whatsappUrl(
      `Oi, Montinho! Vim pela calculadora de calorias da dança do Personal por Perto. ${oQue} ` +
        `Queria entender como encaixar a dança numa estratégia para o meu objetivo.`,
    );
  }

  /* ---------------------------------------------------------------- */
  document.querySelectorAll<HTMLButtonElement>('.cd-modo').forEach((b) => {
    b.addEventListener('click', () => trocaModo(b.dataset.modo as Modo));
  });

  const abas = Array.from(document.querySelectorAll<HTMLButtonElement>('.cd-modo'));
  abas.forEach((b, i) => {
    b.addEventListener('keydown', (e) => {
      if (e.key !== 'ArrowRight' && e.key !== 'ArrowLeft') return;
      e.preventDefault();
      trocaModo(abas[(i + (e.key === 'ArrowRight' ? 1 : abas.length - 1)) % abas.length].dataset.modo as Modo);
    });
  });

  document.querySelectorAll<HTMLButtonElement>('.cd-estilo').forEach((b) => {
    b.addEventListener('click', () => trocaEstilo(b.dataset.estilo ?? idEstilo));
  });

  document.querySelectorAll<HTMLButtonElement>('.cd-preset').forEach((b) => {
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

  [peso, dancando, ...Object.values(campos)].forEach((el) => {
    el.addEventListener('input', calcula);
  });

  evento('calculator_view');
  desenhaEstilo();
  calcula();
}
