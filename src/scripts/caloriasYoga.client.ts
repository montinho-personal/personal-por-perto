/**
 * Interface da calculadora de calorias de yoga e pilates.
 *
 * O QUE MUDA EM RELAÇÃO ÀS OUTRAS SETE
 *
 * Existe um terceiro modo que nenhuma outra ferramenta do cluster tem: "meu
 * relógio disse X". Nas outras sete o erro que a página combate está na
 * tabela ou na física; aqui ele está no aparelho de quem pergunta. A pessoa
 * chega com um número do relógio, e o que serve não é calcular de novo — é
 * confrontar.
 *
 * Por isso a saída ganha duas linhas que só existem nesse modo (o que o
 * aparelho marcou e o tamanho da diferença) e um aviso que aparece só na
 * prática em sala aquecida, porque é sobre o calor que existe medição
 * direta nas mesmas pessoas. O aviso diz o que foi medido (o gasto não sobe)
 * separado do que é explicação de pesquisador (a frequência cardíaca). Fora
 * do calor a comparação continua, sem afirmar causa nenhuma.
 *
 * NÃO existe seletor de intensidade, e isso é decisão de conteúdo: a
 * intensidade em yoga é o próprio estilo, e a escada inteira do Compêndio
 * vai de 2,3 a 4,0 METs. Oferecer um controle de "mais forte" prometeria uma
 * amplitude que a atividade não tem.
 *
 * Nada vai para a URL: peso é dado corporal.
 */
import {
  ESTILOS,
  KCAL_MAX,
  KCAL_MIN,
  MINUTOS_MAX,
  MINUTOS_MIN,
  NOTA_RELOGIO_CALOR,
  PESO_MAX,
  PESO_MIN,
  RELOGIO_MAX,
  RELOGIO_MIN,
  arredondaKcal,
  deKcal,
  deRelogio,
  deTempo,
  estilo,
  formataKcal,
  formataTempo,
  fraseContexto,
  kcalValida,
  minutosValidos,
  parseNumero,
  pesoValido,
  relogioValido,
  textoDiferenca,
  type Resultado,
} from '../lib/calorias/yoga';
import { whatsappUrl } from '../lib/links';

type Modo = 'tempo' | 'relogio' | 'meta';

const $ = <T extends HTMLElement>(sel: string): T | null => document.querySelector<T>(sel);

export function iniciarCalculadoraYoga(): void {
  if (!$('#cy-app')) return;

  const peso = $<HTMLInputElement>('#cy-peso')!;
  const relogio = $<HTMLInputElement>('#cy-relogio')!;
  const blocoRelogio = $<HTMLElement>('#cy-bloco-relogio')!;
  const saida = $<HTMLElement>('#cy-saida')!;
  const erro = $<HTMLElement>('#cy-erro')!;

  const campos: Record<Modo, HTMLInputElement> = {
    tempo: $<HTMLInputElement>('#cy-minutos')!,
    relogio: $<HTMLInputElement>('#cy-minutos-relogio')!,
    meta: $<HTMLInputElement>('#cy-meta')!,
  };

  let modo: Modo = 'tempo';
  let idEstilo = 'hatha';
  let comecou = false;

  function evento(nome: string, extra: Record<string, string | number> = {}): void {
    const w = window as unknown as { dataLayer?: unknown[] };
    w.dataLayer = w.dataLayer || [];
    w.dataLayer.push({ event: nome, tool: 'calorias-yoga', ...extra });
  }

  /** A dica do estilo declara o MET e, principalmente, DE ONDE ele vem. */
  function desenhaEstilo(): void {
    const e = estilo(idEstilo);
    document.querySelectorAll<HTMLButtonElement>('.cy-estilo').forEach((b) => {
      const ativo = b.dataset.estilo === idEstilo;
      b.classList.toggle('is-ativo', ativo);
      b.setAttribute('aria-pressed', String(ativo));
    });
    const dica = $<HTMLElement>('#cy-estilo-dica');
    if (dica) {
      dica.textContent =
        `${e.met.toLocaleString('pt-BR')} METs — Compêndio, código ${e.codigo}. ${e.comoReconhecer}`;
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
      const bloco = el.closest<HTMLElement>('.cy-campo-modo');
      if (bloco) bloco.hidden = m !== novo;
    }
    blocoRelogio.hidden = novo !== 'relogio';

    document.querySelectorAll<HTMLButtonElement>('.cy-modo').forEach((b) => {
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

    if (modo === 'tempo') {
      if (!minutosValidos(v))
        return falha(`Informe um tempo entre ${MINUTOS_MIN} e ${MINUTOS_MAX} minutos.`, !campos.tempo.value.trim());
      res = deTempo(v, p, idEstilo);
    } else if (modo === 'relogio') {
      const rel = parseNumero(relogio.value);
      if (!relogioValido(rel))
        return falha(`Informe o número do aparelho, entre ${RELOGIO_MIN} e ${RELOGIO_MAX} kcal.`, !relogio.value.trim());
      if (!minutosValidos(v))
        return falha(`Informe um tempo entre ${MINUTOS_MIN} e ${MINUTOS_MAX} minutos.`, !campos.relogio.value.trim());
      res = deRelogio(rel, v, p, idEstilo);
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
      set('.cy-numero', formataTempo(res.minutos));
      set('.cy-unidade', 'de prática');
      set(
        '.cy-frase',
        `Para gastar aproximadamente ${formataKcal(res.kcal)} kcal com ${Math.round(pesoKg)} kg em ` +
          `${estilo(res.idEstilo).nome.toLowerCase()}. Se o número parecer alto, é porque é: a ` +
          `intensidade aqui é baixa, e o tempo tem que compensar.`,
      );
    } else {
      set('.cy-numero', `≈ ${formataKcal(res.kcal)}`);
      set('.cy-unidade', 'kcal');
      set('.cy-frase', fraseContexto(pesoKg, res));
    }

    set('.cy-d-tempo', formataTempo(res.minutos));
    set('.cy-d-liquido', `≈ ${formataKcal(res.kcalLiquida)} kcal`);
    set('.cy-d-met', res.met.toLocaleString('pt-BR', { maximumFractionDigits: 1 }));
    set('.cy-d-fonte', `Compêndio ${estilo(res.idEstilo).codigo}`);

    /*
     * As linhas da comparação só existem no cenário de relógio. Elas são o
     * motivo de esta ferramenta existir com um modo próprio: a pessoa chega
     * com um número do aparelho e precisa saber o tamanho da diferença.
     */
    linha('.cy-linha-relogio', res.cenario === 'relogio');
    linha('.cy-linha-diferenca', res.cenario === 'relogio');
    if (res.cenario === 'relogio') {
      set('.cy-d-relogio', `${formataKcal(res.kcalRelogio)} kcal`);
      // A regra da comparação mora no motor: era escrita aqui e na frase, e
      // as duas divergiam quando o aparelho marcava menos que a estimativa.
      set('.cy-d-diferenca', textoDiferenca(res));
    }

    /*
     * O aviso sobre o calor aparece só quando a prática é no calor, porque
     * só ali existe medição direta comparando as duas condições.
     */
    const nota = saida.querySelector<HTMLElement>('.cy-nota-relogio');
    if (nota) {
      const mostrar = res.cenario === 'relogio' && res.noCalor;
      nota.hidden = !mostrar;
      if (mostrar) nota.textContent = NOTA_RELOGIO_CALOR;
    }

    atualizaWhatsapp(res);
  }

  /** Leva contexto e resultado. Nunca o peso. */
  function atualizaWhatsapp(res: Resultado): void {
    const link = saida.querySelector<HTMLAnchorElement>('.cy-whats');
    if (!link) return;
    const est = estilo(res.idEstilo).nome.toLowerCase();
    const oQue =
      modo === 'relogio'
        ? `Meu relógio marcou ${formataKcal(res.kcalRelogio)} kcal numa aula de ${est}, e a estimativa por medição deu ${formataKcal(res.kcal)} kcal.`
        : `Minha estimativa deu cerca de ${formataKcal(res.kcal)} kcal em ${formataTempo(res.minutos)} de ${est}.`;
    link.href = whatsappUrl(
      `Oi, Montinho! Vim pela calculadora de calorias de yoga e pilates do Personal por Perto. ${oQue} ` +
        `Queria entender como encaixar essa prática numa estratégia para o meu objetivo.`,
    );
  }

  /* ---------------------------------------------------------------- */
  document.querySelectorAll<HTMLButtonElement>('.cy-modo').forEach((b) => {
    b.addEventListener('click', () => trocaModo(b.dataset.modo as Modo));
  });

  const abas = Array.from(document.querySelectorAll<HTMLButtonElement>('.cy-modo'));
  abas.forEach((b, i) => {
    b.addEventListener('keydown', (e) => {
      if (e.key !== 'ArrowRight' && e.key !== 'ArrowLeft') return;
      e.preventDefault();
      trocaModo(abas[(i + (e.key === 'ArrowRight' ? 1 : abas.length - 1)) % abas.length].dataset.modo as Modo);
    });
  });

  document.querySelectorAll<HTMLButtonElement>('.cy-estilo').forEach((b) => {
    b.addEventListener('click', () => trocaEstilo(b.dataset.estilo ?? idEstilo));
  });

  document.querySelectorAll<HTMLButtonElement>('.cy-preset').forEach((b) => {
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

  [peso, relogio, ...Object.values(campos)].forEach((el) => {
    el.addEventListener('input', calcula);
  });

  evento('calculator_view');
  desenhaEstilo();
  calcula();
}
