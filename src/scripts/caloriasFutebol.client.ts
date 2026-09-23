/**
 * Interface da calculadora de calorias do futebol.
 *
 * O QUE MUDA EM RELAÇÃO ÀS OUTRAS OITO
 *
 * O modo principal não pergunta quanto tempo você jogou — pergunta quanto
 * tempo você ficou no local, em que formato e com quanta gente. É que na
 * pelada ninguém sabe quanto jogou: sabe quanto tempo a quadra ficou
 * alugada. O tempo em campo sai de uma conta de dividir (vagas ÷ presentes),
 * e a ferramenta faz essa conta em vez de pedir um palpite.
 *
 * O formato NÃO muda a intensidade — só as vagas. Por isso ele mora dentro
 * do bloco da pelada, e não ao lado do nível: trocar de society para quadra
 * mexe em quanto tempo cada um espera, não em quanto se gasta por minuto.
 *
 * Os atalhos de lotação ("3 times", como se diz na pelada) não têm valor
 * fixo: dependem do formato. Eles não usam `data-alvo`, então o tratador
 * genérico dos atalhos os ignora — é o mesmo cuidado que corrigiu o defeito
 * dos botões que apagavam o campo em quatro ferramentas.
 *
 * Nada vai para a URL: peso é dado corporal.
 */
import {
  NIVEIS,
  KCAL_MAX,
  KCAL_MIN,
  LOCAL_MAX,
  LOCAL_MIN,
  MINUTOS_MAX,
  MINUTOS_MIN,
  NOTA_MEDIA_EXATA,
  PESO_MAX,
  PESO_MIN,
  PRESENTES_MAX,
  PRESENTES_MIN,
  arredondaKcal,
  deKcal,
  dePelada,
  deTempo,
  formataKcal,
  formataMet,
  formataPct,
  formataTempo,
  formato,
  fraseContexto,
  kcalValida,
  localValido,
  minutosValidos,
  nivel,
  parseNumero,
  pesoValido,
  presentesValidos,
  type Resultado,
} from '../lib/calorias/futebol';
import { whatsappUrl } from '../lib/links';
import { focoSemSalto } from './focoSemSalto';
import { reservaAltura } from './reservaAltura';

type Modo = 'pelada' | 'campo' | 'meta';

const $ = <T extends HTMLElement>(sel: string): T | null => document.querySelector<T>(sel);

export function iniciarCalculadoraFutebol(): void {
  if (!$('#cf-app')) return;

  const peso = $<HTMLInputElement>('#cf-peso')!;
  const presentes = $<HTMLInputElement>('#cf-presentes')!;
  const blocoPelada = $<HTMLElement>('#cf-bloco-pelada')!;
  const saida = $<HTMLElement>('#cf-saida')!;
  const erro = $<HTMLElement>('#cf-erro')!;

  const campos: Record<Modo, HTMLInputElement> = {
    pelada: $<HTMLInputElement>('#cf-local')!,
    campo: $<HTMLInputElement>('#cf-minutos')!,
    meta: $<HTMLInputElement>('#cf-meta')!,
  };

  let modo: Modo = 'pelada';
  let idNivel = 'casual';
  let idFormato = 'society';
  let comecou = false;

  function evento(nome: string, extra: Record<string, string | number> = {}): void {
    const w = window as unknown as { dataLayer?: unknown[] };
    w.dataLayer = w.dataLayer || [];
    w.dataLayer.push({ event: nome, tool: 'calorias-futebol', ...extra });
  }

  /** A dica do nível declara o MET e o código de onde ele vem. */
  function desenhaNivel(): void {
    const nv = nivel(idNivel);
    document.querySelectorAll<HTMLButtonElement>('.cf-nivel').forEach((b) => {
      const ativo = b.dataset.nivel === idNivel;
      b.classList.toggle('is-ativo', ativo);
      b.setAttribute('aria-pressed', String(ativo));
    });
    const dica = $<HTMLElement>('#cf-nivel-dica');
    if (dica) dica.textContent = textoDica(nv);
  }

  const textoDica = (nv: (typeof NIVEIS)[number]): string =>
    `${formataMet(nv.met)} METs — Compêndio, código ${nv.codigo}. ${nv.comoReconhecer}`;

  function desenhaFormato(): void {
    document.querySelectorAll<HTMLButtonElement>('.cf-formato').forEach((b) => {
      const ativo = b.dataset.formato === idFormato;
      b.classList.toggle('is-ativo', ativo);
      b.setAttribute('aria-pressed', String(ativo));
    });
  }

  function trocaModo(novo: Modo): void {
    if (novo === modo) return;
    modo = novo;
    for (const [m, el] of Object.entries(campos)) {
      const bloco = el.closest<HTMLElement>('.cf-campo-modo');
      if (bloco) bloco.hidden = m !== novo;
    }
    blocoPelada.hidden = novo !== 'pelada';

    document.querySelectorAll<HTMLButtonElement>('.cf-modo').forEach((b) => {
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

    if (modo === 'pelada') {
      if (!localValido(v))
        return falha(`Informe o tempo na quadra entre ${LOCAL_MIN} e ${LOCAL_MAX} minutos.`, !campos.pelada.value.trim());
      const n = parseNumero(presentes.value);
      if (!presentesValidos(n))
        return falha(
          `Informe quantas pessoas estavam para jogar: um número inteiro entre ${PRESENTES_MIN} e ${PRESENTES_MAX}.`,
          !presentes.value.trim(),
        );
      res = dePelada(v, p, idFormato, n, idNivel);
    } else if (modo === 'campo') {
      if (!minutosValidos(v))
        return falha(`Informe um tempo em campo entre ${MINUTOS_MIN} e ${MINUTOS_MAX} minutos.`, !campos.campo.value.trim());
      res = deTempo(v, p, idNivel);
    } else {
      if (!kcalValida(v))
        return falha(`Informe uma meta entre ${KCAL_MIN} e ${KCAL_MAX} kcal.`, !campos.meta.value.trim());
      res = deKcal(v, p, idNivel);
    }

    if (!comecou) {
      comecou = true;
      evento('calculator_started');
    }
    desenha(p, res);
    evento('calculator_completed', { mode: modo, level: idNivel, format: idFormato, kcal: arredondaKcal(res.kcal) });
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
      set('.cf-numero', formataTempo(res.minutosEmCampo));
      set('.cf-unidade', 'em campo');
      set(
        '.cf-frase',
        `Para gastar aproximadamente ${formataKcal(res.kcal)} kcal com ${Math.round(pesoKg)} kg em ` +
          `${nivel(res.idNivel).nome.toLowerCase()} — em campo, sem contar o tempo no time de fora.`,
      );
    } else {
      set('.cf-numero', `≈ ${formataKcal(res.kcal)}`);
      set('.cf-unidade', 'kcal');
      set('.cf-frase', fraseContexto(pesoKg, res));
    }

    const naPelada = res.cenario === 'pelada';
    set(
      '.cf-d-campo',
      naPelada && res.fracao < 1
        ? `${formataTempo(res.minutosEmCampo)} de ${formataTempo(res.minutosLocal)} (${formataPct(res.fracao)})`
        : formataTempo(res.minutosEmCampo),
    );
    set('.cf-d-liquido', `≈ ${formataKcal(res.kcalLiquida)} kcal`);
    set('.cf-d-met', formataMet(res.met));
    set('.cf-d-fonte', `Compêndio ${nivel(res.idNivel).codigo}`);

    // A linha do time de fora só existe quando há time de fora.
    const temFora = naPelada && res.minutosFora > 0;
    linha('.cf-linha-fora', temFora);
    if (temFora) set('.cf-d-fora', `${formataTempo(res.minutosFora)}, fora da conta`);

    const nota = saida.querySelector<HTMLElement>('.cf-nota-media');
    if (nota) {
      nota.hidden = !temFora;
      if (temFora) nota.textContent = NOTA_MEDIA_EXATA;
    }

    atualizaWhatsapp(res);
  }

  /** Leva contexto e resultado. Nunca o peso. */
  function atualizaWhatsapp(res: Resultado): void {
    const link = saida.querySelector<HTMLAnchorElement>('.cf-whats');
    if (!link) return;
    const nv = nivel(res.idNivel).nome.toLowerCase();
    let oQue: string;
    if (modo === 'meta') {
      oQue = `Para bater ${formataKcal(res.kcal)} kcal, a conta deu ${formataTempo(res.minutosEmCampo)} em campo de ${nv}.`;
    } else if (res.cenario === 'pelada') {
      oQue =
        `Minha estimativa deu cerca de ${formataKcal(res.kcal)} kcal numa pelada de ${formataTempo(res.minutosLocal)} ` +
        `${formato(res.idFormato).emFormato}, com ${formataTempo(res.minutosEmCampo)} em campo.`;
    } else {
      oQue = `Minha estimativa deu cerca de ${formataKcal(res.kcal)} kcal em ${formataTempo(res.minutosEmCampo)} de ${nv}.`;
    }
    link.href = whatsappUrl(
      `Oi, Montinho! Vim pela calculadora de calorias do futebol do Personal por Perto. ${oQue} ` +
        `Queria entender como encaixar o futebol numa estratégia para o meu objetivo.`,
    );
  }

  /* ---------------------------------------------------------------- */
  document.querySelectorAll<HTMLButtonElement>('.cf-modo').forEach((b) => {
    b.addEventListener('click', () => trocaModo(b.dataset.modo as Modo));
  });

  const abas = Array.from(document.querySelectorAll<HTMLButtonElement>('.cf-modo'));
  abas.forEach((b, i) => {
    b.addEventListener('keydown', (e) => {
      if (e.key !== 'ArrowRight' && e.key !== 'ArrowLeft') return;
      e.preventDefault();
      trocaModo(abas[(i + (e.key === 'ArrowRight' ? 1 : abas.length - 1)) % abas.length].dataset.modo as Modo);
    });
  });

  document.querySelectorAll<HTMLButtonElement>('.cf-nivel').forEach((b) => {
    b.addEventListener('click', () => {
      idNivel = b.dataset.nivel ?? idNivel;
      desenhaNivel();
      evento('calculator_style_changed', { level: idNivel });
      calcula();
    });
  });

  document.querySelectorAll<HTMLButtonElement>('.cf-formato').forEach((b) => {
    b.addEventListener('click', () => {
      idFormato = b.dataset.formato ?? idFormato;
      desenhaFormato();
      evento('calculator_format_changed', { format: idFormato });
      calcula();
    });
  });

  // Lotação em times: o valor depende do formato escolhido.
  document.querySelectorAll<HTMLButtonElement>('.cf-times').forEach((b) => {
    b.addEventListener('click', () => {
      const times = Number(b.dataset.times ?? 2);
      presentes.value = String(formato(idFormato).porTime * times);
      calcula();
      presentes.focus();
    });
  });

  document.querySelectorAll<HTMLButtonElement>('.cf-preset').forEach((b) => {
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

  [peso, presentes, ...Object.values(campos)].forEach((el) => {
    el.addEventListener('input', calcula);
  });

  evento('calculator_view');
  const dicaNivel = $<HTMLElement>('#cf-nivel-dica');
  if (dicaNivel) reservaAltura(dicaNivel, NIVEIS.map(textoDica));
  desenhaNivel();
  desenhaFormato();
  calcula();
}
