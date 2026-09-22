/**
 * Interface da calculadora de calorias da natação.
 *
 * O QUE MUDA EM RELAÇÃO ÀS OUTRAS TRÊS
 *
 * Aqui o seletor principal não é um número, é o ESTILO. E cada estilo tem
 * as faixas de esforço que o Compêndio realmente publicou para ele — três
 * no crawl, duas no costas e no peito, uma só na borboleta. Mostrar as
 * mesmas três para todos seria inventar medição, então as faixas são
 * recriadas a cada troca de estilo.
 *
 * O campo de ritmo só aparece onde a distância entra na conta. No crawl ele
 * vem preenchido com o ritmo que o Compêndio mediu junto do MET; nos outros
 * estilos ele fica com o que a pessoa informar, porque a fonte não publicou
 * ritmo para eles e a ferramenta não inventa um.
 *
 * O cenário "tempo de piscina" é o que corrige o erro mais comum da
 * categoria: aplicar o MET ao relógio inteiro, borda incluída.
 *
 * Nada vai para a URL: peso é dado corporal.
 */
import {
  CENARIOS_PISCINA,
  DESCANSO_MAX,
  ESTILOS,
  KCAL_MAX,
  KCAL_MIN,
  METROS_MAX,
  METROS_MIN,
  MINUTOS_MAX,
  MINUTOS_MIN,
  NOTA_BORBOLETA,
  NOTA_RITMO_INCOERENTE,
  NOTA_SEM_RITMO_MEDIDO,
  PESO_MAX,
  PESO_MIN,
  RITMO_MAX,
  RITMO_MIN,
  arredondaKcal,
  banda,
  dePiscina,
  deDistancia,
  deKcal,
  deTempo,
  descansoValido,
  estilo,
  formataMetros,
  formataRitmo,
  formataRitmoCurto,
  formataTempo,
  fraseContexto,
  kcalValida,
  metrosValidos,
  minutosValidos,
  parseNumero,
  parseRitmo,
  pesoValido,
  ritmoDaBanda,
  ritmoIncoerente,
  ritmoValido,
  type EstiloId,
  type Resultado,
} from '../lib/calorias/natacao';
import { whatsappUrl } from '../lib/links';

type Modo = 'tempo' | 'distancia' | 'piscina' | 'meta';

const $ = <T extends HTMLElement>(sel: string): T | null => document.querySelector<T>(sel);

export function iniciarCalculadoraNatacao(): void {
  if (!$('#cn-app')) return;

  const peso = $<HTMLInputElement>('#cn-peso')!;
  const ritmo = $<HTMLInputElement>('#cn-ritmo')!;
  const descanso = $<HTMLInputElement>('#cn-descanso')!;
  const descSaida = $<HTMLOutputElement>('#cn-descanso-valor')!;
  const saida = $<HTMLElement>('#cn-saida')!;
  const erro = $<HTMLElement>('#cn-erro')!;
  const blocoRitmo = $<HTMLElement>('#cn-bloco-ritmo')!;
  const blocoDescanso = $<HTMLElement>('#cn-bloco-descanso')!;

  const campos: Record<Modo, HTMLInputElement> = {
    tempo: $<HTMLInputElement>('#cn-minutos')!,
    distancia: $<HTMLInputElement>('#cn-metros')!,
    piscina: $<HTMLInputElement>('#cn-minutos-piscina')!,
    meta: $<HTMLInputElement>('#cn-meta')!,
  };

  let modo: Modo = 'tempo';
  let idEstilo: EstiloId = 'crawl';
  let idBanda = 'medio';
  let comecou = false;

  /** A distância só entra na conta onde a pessoa informa ritmo. */
  const usaRitmo = (m: Modo) => m === 'distancia' || m === 'meta';

  function evento(nome: string, extra: Record<string, string | number> = {}): void {
    const w = window as unknown as { dataLayer?: unknown[] };
    w.dataLayer = w.dataLayer || [];
    w.dataLayer.push({ event: nome, tool: 'calorias-natacao', ...extra });
  }

  /**
   * Cada estilo mostra só as faixas que o Compêndio publicou para ele.
   * As outras ficam escondidas em vez de removidas, para a página continuar
   * legível e indexável sem JavaScript.
   */
  function desenhaBandas(): void {
    const e = estilo(idEstilo);
    const validos = new Set(e.bandas.map((b) => b.id));
    /*
     * Trocando de estilo, cai na faixa MAIS LEVE que existe para ele.
     *
     * A tentação é manter a intensidade equivalente, mas nos estilos de duas
     * faixas a segunda é "treino" — quem clica em "costas" querendo nado de
     * costas recreativo receberia 9,5 METs e um número quase o dobro do que
     * esperava, sem ter pedido nada disso. Numa calculadora de calorias, em
     * que o defeito endêmico da categoria é inflar, o viés do padrão tem que
     * ser para baixo. A faixa é um clique.
     */
    if (!validos.has(idBanda)) idBanda = e.bandas[0].id;

    document.querySelectorAll<HTMLElement>('.cn-banda-item').forEach((el) => {
      el.hidden = el.dataset.estilo !== idEstilo;
    });
    document.querySelectorAll<HTMLButtonElement>('.cn-banda').forEach((b) => {
      const ativo = b.dataset.estilo === idEstilo && b.dataset.banda === idBanda;
      b.classList.toggle('is-ativo', ativo);
      b.setAttribute('aria-pressed', String(ativo));
    });

    const b = banda(idEstilo, idBanda);
    const como = $<HTMLElement>('#cn-como-reconhecer');
    if (como) como.textContent = b.comoReconhecer;

    // O crawl traz o ritmo medido junto do MET. Os outros, não — e a página
    // diz isso em vez de preencher um número que ninguém mediu.
    const medido = ritmoDaBanda(b);
    const aviso = $<HTMLElement>('#cn-ritmo-fonte');
    if (medido !== null) {
      ritmo.value = formataRitmoCurto(medido);
      if (aviso) aviso.textContent = `Ritmo medido pelo Compêndio para esta faixa: ${formataRitmo(medido)} a cada 100 m. Dá para ajustar.`;
    } else if (aviso) {
      aviso.textContent = NOTA_SEM_RITMO_MEDIDO;
    }
  }

  function trocaEstilo(novo: EstiloId): void {
    idEstilo = novo;
    document.querySelectorAll<HTMLButtonElement>('.cn-estilo').forEach((b) => {
      const ativo = b.dataset.estilo === novo;
      b.classList.toggle('is-ativo', ativo);
      b.setAttribute('aria-pressed', String(ativo));
    });
    desenhaBandas();
    evento('calculator_style_changed', { style: novo });
    calcula();
  }

  function trocaModo(novo: Modo): void {
    if (novo === modo) return;
    modo = novo;
    for (const [m, el] of Object.entries(campos)) {
      const bloco = el.closest<HTMLElement>('.cn-campo-modo');
      if (bloco) bloco.hidden = m !== novo;
    }
    blocoRitmo.hidden = !usaRitmo(novo);
    blocoDescanso.hidden = novo !== 'piscina';

    document.querySelectorAll<HTMLButtonElement>('.cn-modo').forEach((b) => {
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

    if (usaRitmo(modo)) {
      const r = parseRitmo(ritmo.value);
      if (!ritmoValido(r))
        return falha(
          `Informe um ritmo entre ${formataRitmo(RITMO_MIN)} e ${formataRitmo(RITMO_MAX)} a cada 100 m — no formato 2:11.`,
          !ritmo.value.trim(),
        );
      if (modo === 'distancia') {
        if (!metrosValidos(v))
          return falha(`Informe uma distância entre ${METROS_MIN} e ${METROS_MAX} metros.`, !campos.distancia.value.trim());
        res = deDistancia(v, p, idEstilo, idBanda, r);
      } else {
        if (!kcalValida(v))
          return falha(`Informe uma meta entre ${KCAL_MIN} e ${KCAL_MAX} kcal.`, !campos.meta.value.trim());
        res = deKcal(v, p, idEstilo, idBanda, r);
      }
    } else if (modo === 'piscina') {
      const d = parseNumero(descanso.value) ?? 0;
      descSaida.textContent = `${Math.round(d)}%`;
      if (!descansoValido(d)) return falha(`O descanso precisa ficar entre 0% e ${DESCANSO_MAX}%.`);
      if (!minutosValidos(v))
        return falha(`Informe um tempo entre ${MINUTOS_MIN} e ${MINUTOS_MAX} minutos.`, !campos.piscina.value.trim());
      res = dePiscina(v, p, idEstilo, idBanda, d);
    } else {
      if (!minutosValidos(v))
        return falha(`Informe um tempo entre ${MINUTOS_MIN} e ${MINUTOS_MAX} minutos.`, !campos.tempo.value.trim());
      res = deTempo(v, p, idEstilo, idBanda);
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
      set('.cn-numero', formataMetros(res.metros));
      set('.cn-unidade', 'nadando');
      set(
        '.cn-frase',
        `Para gastar aproximadamente ${arredondaKcal(res.kcal).toLocaleString('pt-BR')} kcal com ` +
          `${Math.round(pesoKg)} kg de ${estilo(res.idEstilo).nomeCurto.toLowerCase()} — cerca de ` +
          `${formataTempo(res.minutosNado)} de nado.`,
      );
    } else {
      set('.cn-numero', `≈ ${arredondaKcal(res.kcal).toLocaleString('pt-BR')}`);
      set('.cn-unidade', 'kcal');
      set('.cn-frase', fraseContexto(pesoKg, res));
    }

    set('.cn-d-tempo', formataTempo(res.minutosNado));
    set('.cn-d-liquido', `≈ ${arredondaKcal(res.kcalLiquida).toLocaleString('pt-BR')} kcal`);
    set('.cn-d-met', res.met.toLocaleString('pt-BR', { maximumFractionDigits: 1 }));

    // A linha da borda só faz sentido no cenário de piscina.
    linha('.cn-linha-piscina', res.cenario === 'piscina');
    if (res.cenario === 'piscina') {
      set('.cn-d-piscina', `${formataTempo(res.minutosPiscina)} (${Math.round(res.descanso)}% de borda)`);
    }

    // Distância e custo por 100 m só aparecem quando houve ritmo. Sem ritmo
    // medido nem informado, mostrar zero seria inventar número.
    const temDistancia = res.metros > 0 && res.ritmo > 0;
    linha('.cn-linha-metros', temDistancia);
    linha('.cn-linha-por100', temDistancia);
    if (temDistancia) {
      set('.cn-d-metros', formataMetros(res.metros));
      set('.cn-d-por100', `≈ ${res.por100m.toFixed(1).replace('.', ',')} kcal`);
    }

    // Borboleta por tempo longo: a conta está certa, o cenário é que não existe.
    const avisoBorbo = saida.querySelector<HTMLElement>('.cn-nota-borboleta');
    if (avisoBorbo) {
      avisoBorbo.hidden = !res.volumeImplausivel;
      if (res.volumeImplausivel) avisoBorbo.textContent = NOTA_BORBOLETA;
    }

    // Ritmo informado brigando com a faixa escolhida.
    const avisoRitmo = saida.querySelector<HTMLElement>('.cn-nota-ritmo');
    if (avisoRitmo) {
      const briga = usaRitmo(modo) && ritmoIncoerente(res.idEstilo, res.idBanda, res.ritmo);
      avisoRitmo.hidden = !briga;
      if (briga) avisoRitmo.textContent = NOTA_RITMO_INCOERENTE;
    }

    atualizaWhatsapp(res);
  }

  /** Leva contexto e resultado. Nunca o peso. */
  function atualizaWhatsapp(res: Resultado): void {
    const link = saida.querySelector<HTMLAnchorElement>('.cn-whats');
    if (!link) return;
    const est = estilo(res.idEstilo).nomeCurto.toLowerCase();
    const oQue =
      modo === 'meta'
        ? `Para bater ${arredondaKcal(res.kcal).toLocaleString('pt-BR')} kcal, a conta deu ${formataMetros(res.metros)} de ${est}.`
        : `Minha estimativa deu cerca de ${arredondaKcal(res.kcal).toLocaleString('pt-BR')} kcal em ` +
          `${formataTempo(res.minutosNado)} de ${est}.`;
    link.href = whatsappUrl(
      `Oi, Montinho! Vim pela calculadora de calorias da natação do Personal por Perto. ${oQue} ` +
        `Queria entender como encaixar a natação numa estratégia para o meu objetivo.`,
    );
  }

  /** O comparativo ao vivo: o que muda se eu trocar de estilo. */
  function atualizaComparativo(): void {
    const alvo = $<HTMLElement>('#cn-comparativo');
    if (!alvo) return;
    const b = banda(idEstilo, idBanda);
    alvo.textContent =
      `${estilo(idEstilo).nomeCurto} ${b.nome.toLowerCase()} ≈ ` +
      `${b.met.toLocaleString('pt-BR', { maximumFractionDigits: 1 })} METs`;
  }

  /* ---------------------------------------------------------------- */
  document.querySelectorAll<HTMLButtonElement>('.cn-modo').forEach((b) => {
    b.addEventListener('click', () => trocaModo(b.dataset.modo as Modo));
  });

  const abas = Array.from(document.querySelectorAll<HTMLButtonElement>('.cn-modo'));
  abas.forEach((b, i) => {
    b.addEventListener('keydown', (e) => {
      if (e.key !== 'ArrowRight' && e.key !== 'ArrowLeft') return;
      e.preventDefault();
      trocaModo(abas[(i + (e.key === 'ArrowRight' ? 1 : abas.length - 1)) % abas.length].dataset.modo as Modo);
    });
  });

  document.querySelectorAll<HTMLButtonElement>('.cn-estilo').forEach((b) => {
    b.addEventListener('click', () => {
      trocaEstilo(b.dataset.estilo as EstiloId);
      atualizaComparativo();
    });
  });

  document.querySelectorAll<HTMLButtonElement>('.cn-banda').forEach((b) => {
    b.addEventListener('click', () => {
      idBanda = b.dataset.banda ?? idBanda;
      desenhaBandas();
      calcula();
      atualizaComparativo();
    });
  });

  // Os cenários de piscina preenchem o descanso, para quem não tem o número.
  document.querySelectorAll<HTMLButtonElement>('.cn-cenario').forEach((b) => {
    b.addEventListener('click', () => {
      const c = CENARIOS_PISCINA.find((x) => x.id === b.dataset.cenario);
      if (!c) return;
      descanso.value = String(c.descanso);
      document.querySelectorAll<HTMLButtonElement>('.cn-cenario').forEach((o) => {
        o.classList.toggle('is-ativo', o === b);
        o.setAttribute('aria-pressed', String(o === b));
      });
      calcula();
    });
  });

  document.querySelectorAll<HTMLButtonElement>('.cn-preset').forEach((b) => {
    b.addEventListener('click', () => {
      const alvoId = b.dataset.alvo;
      /*
       * Sem data-alvo não é preset: é um dos botões que usam a mesma classe
       * só pela aparência de pílula — estilo, faixa, cenário de piscina.
       * Sem esta guarda eles caem no `?? modo` abaixo e apagam o campo do
       * modo atual a cada clique, que foi exatamente o defeito que a
       * auditoria de navegador pegou.
       */
      if (!alvoId) return;
      const alvo = alvoId === 'ritmo' ? ritmo : campos[alvoId as Modo];
      if (!alvo) return;
      alvo.value = b.dataset.valor ?? '';
      calcula();
      alvo.focus();
    });
  });

  [peso, ritmo, descanso, ...Object.values(campos)].forEach((el) => {
    el.addEventListener('input', () => {
      calcula();
      atualizaComparativo();
    });
  });

  if (descanso) descanso.max = String(DESCANSO_MAX);

  evento('calculator_view');
  desenhaBandas();
  calcula();
  atualizaComparativo();
}
