/**
 * Interface da calculadora de calorias da hidroginástica.
 *
 * O QUE MUDA EM RELAÇÃO ÀS OUTRAS ONZE
 *
 * A opção padrão não é uma linha do Compêndio: é a aula medida em estudo. É
 * a única que descreve uma sessão inteira, e é a tese da página. Quando a
 * pessoa escolhe a linha geral da tabela, a saída mostra ao lado quanto a
 * aula medida daria — a diferença entre as duas é a informação que nenhuma
 * outra calculadora dá.
 *
 * O modo "semana" existe porque hidroginástica é hábito, não aula avulsa: a
 * saída troca a segunda linha de detalhe de "no mês" conforme o modo, e o
 * número principal passa a ser o da semana.
 *
 * As abas ficam logo acima dos campos que trocam, como nas lutas: com o
 * seletor de tipo entre abas e campo, trocar de modo no topo fazia a página
 * rolar no celular.
 *
 * Nada vai para a URL: peso é dado corporal.
 */
import {
  AULAS_MAX,
  AULAS_MIN,
  KCAL_MAX,
  KCAL_MIN,
  MINUTOS_MAX,
  MINUTOS_MIN,
  PESO_MAX,
  PESO_MIN,
  TIPOS,
  arredondaKcal,
  aulasValidas,
  deAula,
  deKcal,
  deSemana,
  formataAulas,
  formataEmAulas,
  formataKcal,
  formataMet,
  formataTempo,
  fraseContexto,
  kcalValida,
  minutosValidos,
  parseNumero,
  pesoValido,
  tipo,
  type Resultado,
} from '../lib/calorias/hidroginastica';
import { whatsappUrl } from '../lib/links';
import { focoSemSalto } from './focoSemSalto';
import { reservaAltura } from './reservaAltura';

type Modo = 'aula' | 'semana' | 'meta';

const $ = <T extends HTMLElement>(sel: string): T | null => document.querySelector<T>(sel);

export function iniciarCalculadoraHidroginastica(): void {
  if (!$('#ch-app')) return;

  const peso = $<HTMLInputElement>('#ch-peso')!;
  const minutosSemana = $<HTMLInputElement>('#ch-minutos-semana')!;
  const saida = $<HTMLElement>('#ch-saida')!;
  const erro = $<HTMLElement>('#ch-erro')!;

  const campos: Record<Modo, HTMLInputElement> = {
    aula: $<HTMLInputElement>('#ch-minutos')!,
    semana: $<HTMLInputElement>('#ch-aulas')!,
    meta: $<HTMLInputElement>('#ch-meta')!,
  };

  let modo: Modo = 'aula';
  let idTipo = 'medida';
  let comecou = false;

  function evento(nome: string, extra: Record<string, string | number> = {}): void {
    const w = window as unknown as { dataLayer?: unknown[] };
    w.dataLayer = w.dataLayer || [];
    w.dataLayer.push({ event: nome, tool: 'calorias-hidroginastica', ...extra });
  }

  /** A dica declara o MET e de onde ele vem: código do Compêndio ou estudo. */
  const textoDica = (t: (typeof TIPOS)[number]): string =>
    `${formataMet(t.met)} METs — ${t.origem === 'compendio' ? `Compêndio, código ${t.codigo}` : t.codigo}. ${t.comoReconhecer}`;

  function desenhaTipo(): void {
    document.querySelectorAll<HTMLButtonElement>('.ch-tipo').forEach((b) => {
      const ativo = b.dataset.tipo === idTipo;
      b.classList.toggle('is-ativo', ativo);
      b.setAttribute('aria-pressed', String(ativo));
    });
    const dica = $<HTMLElement>('#ch-tipo-dica');
    if (dica) dica.textContent = textoDica(tipo(idTipo));
  }

  function trocaModo(novo: Modo): void {
    if (novo === modo) return;
    modo = novo;
    for (const [m, el] of Object.entries(campos)) {
      const bloco = el.closest<HTMLElement>('.ch-campo-modo');
      if (bloco) bloco.hidden = m !== novo;
    }

    document.querySelectorAll<HTMLButtonElement>('.ch-modo').forEach((b) => {
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

    if (modo === 'aula') {
      if (!minutosValidos(v))
        return falha(`Informe a duração da aula entre ${MINUTOS_MIN} e ${MINUTOS_MAX} minutos.`, !campos.aula.value.trim());
      res = deAula(v, p, idTipo);
    } else if (modo === 'semana') {
      if (!aulasValidas(v))
        return falha(
          `Informe quantas aulas por semana: um número inteiro entre ${AULAS_MIN} e ${AULAS_MAX}.`,
          !campos.semana.value.trim(),
        );
      const m = parseNumero(minutosSemana.value);
      if (!minutosValidos(m))
        return falha(`Informe a duração da aula entre ${MINUTOS_MIN} e ${MINUTOS_MAX} minutos.`, !minutosSemana.value.trim());
      res = deSemana(v, m, p, idTipo);
    } else {
      if (!kcalValida(v))
        return falha(`Informe uma meta entre ${KCAL_MIN} e ${KCAL_MAX.toLocaleString('pt-BR')} kcal.`, !campos.meta.value.trim());
      res = deKcal(v, p, idTipo);
    }

    if (!comecou) {
      comecou = true;
      evento('calculator_started');
    }
    desenha(p, res);
    evento('calculator_completed', { mode: modo, type: idTipo, kcal: arredondaKcal(res.kcal) });
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
      set('.ch-numero', formataTempo(res.minutos));
      set('.ch-unidade', 'de aula');
      set(
        '.ch-frase',
        `Para gastar aproximadamente ${formataKcal(res.kcal)} kcal com ${Math.round(pesoKg)} kg em ` +
          `${tipo(res.idTipo).naFrase}: o equivalente a ${formataEmAulas(res.minutos)}.`,
      );
    } else {
      set('.ch-numero', `≈ ${formataKcal(res.kcal)}`);
      set('.ch-unidade', modo === 'semana' ? 'kcal por semana' : 'kcal');
      set('.ch-frase', fraseContexto(pesoKg, res));
    }

    /*
     * As duas primeiras linhas mudam de sentido com o modo, mas ficam no
     * lugar: a caixa não muda de altura entre os modos.
     */
    set('.ch-dt-tempo', modo === 'semana' ? 'Por aula' : 'Tempo de aula');
    set('.ch-d-tempo', modo === 'semana' ? `${formataTempo(res.minutos)}, ≈ ${formataKcal(res.kcalAula)} kcal` : formataTempo(res.minutos));
    // Fora da semana, a segunda linha mostra a OUTRA referência: com a aula
    // medida escolhida, a tabela geral; com uma linha da tabela, a aula medida.
    const outra = res.idTipo === 'medida' ? 'geral' : 'medida';
    set('.ch-dt-extra', modo === 'semana' ? 'No mês' : outra === 'geral' ? 'Pela tabela geral' : 'Na aula medida');
    set(
      '.ch-d-extra',
      modo === 'semana'
        ? `≈ ${formataKcal(res.kcalMes)} kcal`
        : `≈ ${formataKcal(deAula(res.minutos, pesoKg, outra).kcal)} kcal`,
    );
    set('.ch-d-liquido', `≈ ${formataKcal(res.kcalLiquida)} kcal`);
    set('.ch-d-met', formataMet(res.met));
    set('.ch-d-fonte', tipo(res.idTipo).origem === 'compendio' ? `Compêndio ${tipo(res.idTipo).codigo}` : tipo(res.idTipo).codigo);

    /*
     * Com a linha geral da tabela escolhida, a nota diz quanto a aula medida
     * daria. É a comparação que justifica a página.
     */
    const nota = saida.querySelector<HTMLElement>('.ch-nota-tabela');
    if (nota) {
      const mostrar = res.idTipo === 'geral' && modo !== 'meta';
      nota.hidden = !mostrar;
      if (mostrar) {
        const medida = modo === 'semana' ? deSemana(res.aulas, res.minutos, pesoKg, 'medida') : deAula(res.minutos, pesoKg, 'medida');
        nota.textContent =
          `A linha geral descreve o exercício, não a aula inteira. Pela aula medida em estudo, ` +
          `o mesmo tempo daria cerca de ${formataKcal(medida.kcal)} kcal.`;
      }
    }

    atualizaWhatsapp(res);
  }

  /** Leva contexto e resultado. Nunca o peso. */
  function atualizaWhatsapp(res: Resultado): void {
    const link = saida.querySelector<HTMLAnchorElement>('.ch-whats');
    if (!link) return;
    let oQue: string;
    if (modo === 'meta') {
      oQue = `Para bater ${formataKcal(res.kcal)} kcal, a conta deu ${formataTempo(res.minutos)} de hidroginástica.`;
    } else if (modo === 'semana') {
      oQue = `Faço ${formataAulas(res.aulas)} de hidroginástica por semana, e a estimativa deu cerca de ${formataKcal(res.kcalMes)} kcal no mês.`;
    } else {
      oQue = `Minha estimativa deu cerca de ${formataKcal(res.kcal)} kcal numa aula de hidroginástica de ${formataTempo(res.minutos)}.`;
    }
    link.href = whatsappUrl(
      `Oi, Montinho! Vim pela calculadora de calorias da hidroginástica do Personal por Perto. ${oQue} ` +
        `Queria entender como encaixar a hidroginástica numa estratégia para o meu objetivo.`,
    );
  }

  /* ---------------------------------------------------------------- */
  document.querySelectorAll<HTMLButtonElement>('.ch-modo').forEach((b) => {
    b.addEventListener('click', () => trocaModo(b.dataset.modo as Modo));
  });

  const abas = Array.from(document.querySelectorAll<HTMLButtonElement>('.ch-modo'));
  abas.forEach((b, i) => {
    b.addEventListener('keydown', (e) => {
      if (e.key !== 'ArrowRight' && e.key !== 'ArrowLeft') return;
      e.preventDefault();
      trocaModo(abas[(i + (e.key === 'ArrowRight' ? 1 : abas.length - 1)) % abas.length].dataset.modo as Modo);
    });
  });

  document.querySelectorAll<HTMLButtonElement>('.ch-tipo').forEach((b) => {
    b.addEventListener('click', () => {
      idTipo = b.dataset.tipo ?? idTipo;
      desenhaTipo();
      evento('calculator_style_changed', { type: idTipo });
      calcula();
    });
  });

  document.querySelectorAll<HTMLButtonElement>('.ch-preset').forEach((b) => {
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

  [peso, minutosSemana, ...Object.values(campos)].forEach((el) => {
    el.addEventListener('input', calcula);
  });

  evento('calculator_view');
  const dica = $<HTMLElement>('#ch-tipo-dica');
  if (dica) reservaAltura(dica, TIPOS.map(textoDica));
  desenhaTipo();
  calcula();
}
