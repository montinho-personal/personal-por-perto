/**
 * Interface da calculadora de calorias da escada.
 *
 * O QUE MUDA EM RELAÇÃO ÀS OUTRAS QUATRO
 *
 * O número grande é o LÍQUIDO, não o bruto. A inversão é deliberada e está
 * explicada na página: o trabalho de erguer o corpo é exato e não depende
 * do ritmo, enquanto o bruto depende de uma cadência que a ferramenta
 * supõe. O bruto continua na tela, um nível abaixo.
 *
 * O cenário da escada — altura do degrau e degraus por andar — fica
 * recolhido num <details>, porque a maioria das pessoas não sabe e o padrão
 * da NBR 9050 serve bem. Quem sabe, ajusta, e o resumo do <details> mostra
 * o estado ao vivo para ninguém calcular com um padrão que não é o seu.
 *
 * A descida é uma caixa de marcar, não um modo: subir e descer a pé é a
 * mesma subida com 23% a mais, e não merece uma aba.
 *
 * Nada vai para a URL: peso é dado corporal.
 */
import {
  ANDARES_MAX,
  ANDARES_MIN,
  CADENCIA_MAX,
  CADENCIA_MIN,
  DEGRAUS_MAX,
  DEGRAUS_MIN,
  DEGRAUS_POR_ANDAR_MAX,
  DEGRAUS_POR_ANDAR_MIN,
  ESPELHO_MAX,
  ESPELHO_MIN,
  KCAL_MAX,
  KCAL_MIN,
  MINUTOS_MAX,
  MINUTOS_MIN,
  PESO_MAX,
  PESO_MIN,
  RITMOS,
  andaresValidos,
  arredondaKcal,
  cadenciaValida,
  deAndares,
  deDegraus,
  deKcal,
  deTempo,
  degrausPorAndarValidos,
  degrausValidos,
  espelhoValido,
  formataAndares,
  formataDegraus,
  formataKcal,
  formataMetros,
  formataTempo,
  fraseContexto,
  kcalValida,
  minutosValidos,
  parseNumero,
  pesoValido,
  type Resultado,
} from '../lib/calorias/escada';
import { whatsappUrl } from '../lib/links';

type Modo = 'andares' | 'degraus' | 'tempo' | 'meta';

const $ = <T extends HTMLElement>(sel: string): T | null => document.querySelector<T>(sel);

export function iniciarCalculadoraEscada(): void {
  if (!$('#ce-app')) return;

  const peso = $<HTMLInputElement>('#ce-peso')!;
  const espelho = $<HTMLInputElement>('#ce-espelho')!;
  const degrausAndar = $<HTMLInputElement>('#ce-degraus-andar')!;
  const cadencia = $<HTMLInputElement>('#ce-cadencia')!;
  const descida = $<HTMLInputElement>('#ce-descida')!;
  const blocoDescida = $<HTMLElement>('#ce-bloco-descida')!;
  const saida = $<HTMLElement>('#ce-saida')!;
  const erro = $<HTMLElement>('#ce-erro')!;

  const campos: Record<Modo, HTMLInputElement> = {
    andares: $<HTMLInputElement>('#ce-andares')!,
    degraus: $<HTMLInputElement>('#ce-degraus')!,
    tempo: $<HTMLInputElement>('#ce-minutos')!,
    meta: $<HTMLInputElement>('#ce-meta')!,
  };

  let modo: Modo = 'andares';
  let comecou = false;

  /** Na máquina de escada da academia não existe descida. */
  const temDescida = (m: Modo) => m !== 'tempo';

  function evento(nome: string, extra: Record<string, string | number | boolean> = {}): void {
    const w = window as unknown as { dataLayer?: unknown[] };
    w.dataLayer = w.dataLayer || [];
    w.dataLayer.push({ event: nome, tool: 'calorias-escada', ...extra });
  }

  function trocaModo(novo: Modo): void {
    if (novo === modo) return;
    modo = novo;
    for (const [m, el] of Object.entries(campos)) {
      const bloco = el.closest<HTMLElement>('.ce-campo-modo');
      if (bloco) bloco.hidden = m !== novo;
    }
    blocoDescida.hidden = !temDescida(novo);

    document.querySelectorAll<HTMLButtonElement>('.ce-modo').forEach((b) => {
      const ativo = b.dataset.modo === novo;
      b.classList.toggle('is-ativo', ativo);
      b.setAttribute('aria-selected', String(ativo));
      b.tabIndex = ativo ? 0 : -1;
    });
    evento('calculator_mode_changed', { mode: novo });
    campos[novo].focus();
    calcula();
  }

  /** O resumo ao vivo do <details>, para ninguém calcular com um padrão alheio. */
  function atualizaEstado(esp: number, dpa: number, cad: number): void {
    const el = $<HTMLElement>('#ce-estado');
    if (!el) return;
    const r = RITMOS.find((x) => x.cadencia === cad);
    /*
     * Uma casa decimal, não arredondamento: o padrão é 17,5 cm, e
     * Math.round mostrava "18 cm". Este resumo existe justamente para
     * ninguém calcular com um padrão que não é o seu — informar 18 quando
     * a conta usa 17,5 é o contrário do que ele serve para fazer.
     */
    const cm = (esp * 100).toLocaleString('pt-BR', { maximumFractionDigits: 1 });
    el.textContent =
      `${cm} cm · ${Math.round(dpa)} degraus/andar · ` +
      (r ? r.nome.toLowerCase() : `${Math.round(cad)} degraus/min`);
  }

  function calcula(): void {
    const p = parseNumero(peso.value);
    if (!pesoValido(p)) return falha(`Informe um peso entre ${PESO_MIN} e ${PESO_MAX} kg.`, !peso.value.trim());

    // O espelho é digitado em centímetros e vive em metros no motor.
    const espCm = parseNumero(espelho.value);
    const esp = espCm === null ? null : espCm / 100;
    const dpa = parseNumero(degrausAndar.value);
    const cad = parseNumero(cadencia.value);

    if (!espelhoValido(esp))
      return falha(`A altura do degrau precisa ficar entre ${Math.round(ESPELHO_MIN * 100)} e ${Math.round(ESPELHO_MAX * 100)} cm.`);
    if (!degrausPorAndarValidos(dpa))
      return falha(`Os degraus por andar precisam ficar entre ${DEGRAUS_POR_ANDAR_MIN} e ${DEGRAUS_POR_ANDAR_MAX}.`);
    if (!cadenciaValida(cad))
      return falha(`A cadência precisa ficar entre ${CADENCIA_MIN} e ${CADENCIA_MAX} degraus por minuto.`);

    atualizaEstado(esp, dpa, cad);

    const desceu = temDescida(modo) && descida.checked;
    const v = parseNumero(campos[modo].value);
    let res: Resultado;

    if (modo === 'andares') {
      if (!andaresValidos(v))
        return falha(`Informe entre ${ANDARES_MIN} e ${ANDARES_MAX} andares.`, !campos.andares.value.trim());
      res = deAndares(v, p, dpa, esp, cad, desceu);
    } else if (modo === 'degraus') {
      if (!degrausValidos(v))
        return falha(`Informe entre ${DEGRAUS_MIN} e ${DEGRAUS_MAX} degraus.`, !campos.degraus.value.trim());
      res = deDegraus(v, p, dpa, esp, cad, desceu);
    } else if (modo === 'tempo') {
      if (!minutosValidos(v))
        return falha(`Informe um tempo entre ${MINUTOS_MIN} e ${MINUTOS_MAX} minutos.`, !campos.tempo.value.trim());
      res = deTempo(v, p, dpa, esp, cad);
    } else {
      if (!kcalValida(v))
        return falha(`Informe uma meta entre ${KCAL_MIN} e ${KCAL_MAX} kcal.`, !campos.meta.value.trim());
      res = deKcal(v, p, dpa, esp, cad, desceu);
    }

    if (!comecou) {
      comecou = true;
      evento('calculator_started');
    }
    desenha(p, res);
    evento('calculator_completed', { mode: modo, kcal: arredondaKcal(res.kcalLiquida), descida: desceu });
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
      set('.ce-numero', formataAndares(res.andares));
      set('.ce-unidade', 'para bater a meta');
      set(
        '.ce-frase',
        `Para gastar aproximadamente ${formataKcal(res.kcalLiquida)} kcal líquidas com ` +
          `${Math.round(pesoKg)} kg — ${formataDegraus(res.degraus)}, ${formataMetros(res.metros)} de ` +
          `altura, cerca de ${formataTempo(res.minutos)} de subida.`,
      );
    } else {
      set('.ce-numero', `≈ ${formataKcal(res.kcalLiquida)}`);
      set('.ce-unidade', 'kcal líquidas');
      set('.ce-frase', fraseContexto(pesoKg, res));
    }

    set('.ce-d-degraus', formataDegraus(res.degraus));
    set('.ce-d-metros', formataMetros(res.metros));
    set('.ce-d-tempo', formataTempo(res.minutos));
    set('.ce-d-bruto', `≈ ${formataKcal(res.kcalBruta)} kcal`);
    set('.ce-d-met', res.met.toLocaleString('pt-BR', { maximumFractionDigits: 1 }));

    // A parcela da descida só aparece quando ela existiu.
    linha('.ce-linha-descida', res.desceu);
    if (res.desceu) {
      set('.ce-d-descida', `≈ ${formataKcal(res.kcalDescida)} kcal (23% da subida)`);
    }

    // No modo meta o número grande já é a distância vertical, e repetir os
    // andares na lista seria eco.
    linha('.ce-linha-andares', modo !== 'andares' && modo !== 'meta');
    if (modo !== 'andares' && modo !== 'meta') set('.ce-d-andares', formataAndares(res.andares));

    atualizaWhatsapp(res);
  }

  /** Leva contexto e resultado. Nunca o peso. */
  function atualizaWhatsapp(res: Resultado): void {
    const link = saida.querySelector<HTMLAnchorElement>('.ce-whats');
    if (!link) return;
    const oQue =
      modo === 'meta'
        ? `Para bater ${formataKcal(res.kcalLiquida)} kcal, a conta deu ${formataAndares(res.andares)}.`
        : `Minha estimativa deu cerca de ${formataKcal(res.kcalLiquida)} kcal em ${formataAndares(res.andares)}.`;
    link.href = whatsappUrl(
      `Oi, Montinho! Vim pela calculadora de calorias da escada do Personal por Perto. ${oQue} ` +
        `Queria entender como encaixar mais movimento no dia numa estratégia para o meu objetivo.`,
    );
  }

  /* ---------------------------------------------------------------- */
  document.querySelectorAll<HTMLButtonElement>('.ce-modo').forEach((b) => {
    b.addEventListener('click', () => trocaModo(b.dataset.modo as Modo));
  });

  const abas = Array.from(document.querySelectorAll<HTMLButtonElement>('.ce-modo'));
  abas.forEach((b, i) => {
    b.addEventListener('keydown', (e) => {
      if (e.key !== 'ArrowRight' && e.key !== 'ArrowLeft') return;
      e.preventDefault();
      trocaModo(abas[(i + (e.key === 'ArrowRight' ? 1 : abas.length - 1)) % abas.length].dataset.modo as Modo);
    });
  });

  // Os ritmos nomeados preenchem a cadência, para quem não conta degraus.
  document.querySelectorAll<HTMLButtonElement>('.ce-ritmo').forEach((b) => {
    b.addEventListener('click', () => {
      const r = RITMOS.find((x) => x.id === b.dataset.ritmo);
      if (!r) return;
      cadencia.value = String(r.cadencia);
      document.querySelectorAll<HTMLButtonElement>('.ce-ritmo').forEach((o) => {
        o.classList.toggle('is-ativo', o === b);
        o.setAttribute('aria-pressed', String(o === b));
      });
      const dica = $<HTMLElement>('#ce-ritmo-dica');
      if (dica) dica.textContent = r.descricao;
      calcula();
    });
  });

  document.querySelectorAll<HTMLButtonElement>('.ce-preset').forEach((b) => {
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

  [peso, espelho, degrausAndar, cadencia, ...Object.values(campos)].forEach((el) => {
    el.addEventListener('input', calcula);
  });
  descida.addEventListener('change', () => {
    evento('calculator_descent_toggled', { on: descida.checked });
    calcula();
  });

  evento('calculator_view');
  calcula();
}
