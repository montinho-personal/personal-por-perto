/**
 * Interface da calculadora de calorias do pedal.
 *
 * O QUE MUDA EM RELAÇÃO ÀS OUTRAS DUAS
 *
 * A ferramenta tem DOIS CENÁRIOS, não só modos de entrada: rua e
 * ergométrica. Não é firula de interface — são escalas de medida
 * diferentes. Na rua o Compêndio mede por velocidade; na ergométrica, por
 * potência em watts, porque sem ar para vencer a velocidade do painel não
 * significa nada.
 *
 * Por isso os campos de velocidade e inclinação somem quando a pessoa
 * escolhe ergométrica, e os de watts aparecem. Mostrar os dois ao mesmo
 * tempo convidaria ao erro que esta página existe para evitar.
 *
 * Nada vai para a URL: peso é dado corporal.
 */
import {
  INCLINACAO_MAX,
  KCAL_MAX,
  KCAL_MIN,
  KM_MAX,
  KM_MIN,
  MINUTOS_MAX,
  MINUTOS_MIN,
  NIVEIS_ESFORCO,
  NOTA_ERGOMETRICA_VELOCIDADE,
  NOTA_INTENSIDADE_IMPLAUSIVEL,
  PESO_MAX,
  PESO_MIN,
  VELOCIDADE_MAX,
  VELOCIDADE_MIN,
  WATTS_MAX,
  WATTS_MIN,
  arredondaKcal,
  deDistancia,
  deErgometrica,
  deKcalRua,
  deTempoRua,
  formataKm,
  formataTempo,
  formataVelocidade,
  fraseContexto,
  inclinacaoValida,
  kcalValida,
  kmValidos,
  kcalPorKgPorKm,
  metRua,
  minutosValidos,
  parseNumero,
  pesoValido,
  velocidadeValida,
  wattsValidos,
  type Resultado,
} from '../lib/calorias/bicicleta';
import { whatsappUrl } from '../lib/links';
import { focoSemSalto } from './focoSemSalto';

type Modo = 'tempo' | 'distancia' | 'ergometrica' | 'meta';

const $ = <T extends HTMLElement>(sel: string): T | null => document.querySelector<T>(sel);

export function iniciarCalculadoraBicicleta(): void {
  if (!$('#cb-app')) return;

  const peso = $<HTMLInputElement>('#cb-peso')!;
  const velocidade = $<HTMLInputElement>('#cb-velocidade')!;
  const watts = $<HTMLInputElement>('#cb-watts')!;
  const inclinacao = $<HTMLInputElement>('#cb-inclinacao')!;
  const inclSaida = $<HTMLOutputElement>('#cb-inclinacao-valor')!;
  const saida = $<HTMLElement>('#cb-saida')!;
  const erro = $<HTMLElement>('#cb-erro')!;
  const blocoRua = $<HTMLElement>('#cb-bloco-rua')!;
  const blocoErgo = $<HTMLElement>('#cb-bloco-ergo')!;

  const campos: Record<Modo, HTMLInputElement> = {
    tempo: $<HTMLInputElement>('#cb-minutos')!,
    distancia: $<HTMLInputElement>('#cb-km')!,
    ergometrica: $<HTMLInputElement>('#cb-minutos-ergo')!,
    meta: $<HTMLInputElement>('#cb-meta')!,
  };

  let modo: Modo = 'tempo';
  let comecou = false;

  const naRua = (m: Modo) => m !== 'ergometrica';

  function evento(nome: string, extra: Record<string, string | number> = {}): void {
    const w = window as unknown as { dataLayer?: unknown[] };
    w.dataLayer = w.dataLayer || [];
    w.dataLayer.push({ event: nome, tool: 'calorias-bicicleta', ...extra });
  }

  function trocaModo(novo: Modo): void {
    if (novo === modo) return;
    modo = novo;
    for (const [m, el] of Object.entries(campos)) {
      const bloco = el.closest<HTMLElement>('.cb-campo-modo');
      if (bloco) bloco.hidden = m !== novo;
    }
    // Os dois cenários não convivem: a escala de medida é outra.
    blocoRua.hidden = !naRua(novo);
    blocoErgo.hidden = naRua(novo);

    document.querySelectorAll<HTMLButtonElement>('.cb-modo').forEach((b) => {
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

    if (modo === 'ergometrica') {
      const w = parseNumero(watts.value);
      if (!wattsValidos(w))
        return falha(`Informe uma potência entre ${WATTS_MIN} e ${WATTS_MAX} watts.`, !watts.value.trim());
      if (!minutosValidos(v))
        return falha(`Informe um tempo entre ${MINUTOS_MIN} e ${MINUTOS_MAX} minutos.`, !campos.ergometrica.value.trim());
      res = deErgometrica(v, p, w);
    } else {
      const vel = parseNumero(velocidade.value);
      const incl = parseNumero(inclinacao.value) ?? 0;
      inclSaida.textContent = `${incl.toLocaleString('pt-BR')}%`;
      const estado = $<HTMLElement>('#cb-estado');
      if (estado) estado.textContent = incl > 0 ? `${incl.toLocaleString('pt-BR')}% de subida` : 'no plano';

      if (!velocidadeValida(vel))
        return falha(
          `Informe uma velocidade média entre ${VELOCIDADE_MIN} e ${VELOCIDADE_MAX} km/h.`,
          !velocidade.value.trim(),
        );
      if (!inclinacaoValida(incl)) return falha('A inclinação precisa ficar entre 0% e 15%.');

      if (modo === 'tempo') {
        if (!minutosValidos(v))
          return falha(`Informe um tempo entre ${MINUTOS_MIN} e ${MINUTOS_MAX} minutos.`, !campos.tempo.value.trim());
        res = deTempoRua(v, p, vel, incl);
      } else if (modo === 'distancia') {
        if (!kmValidos(v))
          return falha(`Informe uma distância entre ${KM_MIN} e ${KM_MAX} km.`, !campos.distancia.value.trim());
        res = deDistancia(v, p, vel, incl);
      } else {
        if (!kcalValida(v))
          return falha(`Informe uma meta entre ${KCAL_MIN} e ${KCAL_MAX.toLocaleString('pt-BR')} kcal.`, !campos.meta.value.trim());
        res = deKcalRua(v, p, vel, incl);
      }
    }

    if (!comecou) {
      comecou = true;
      evento('calculator_started');
    }
    desenha(p, res);
    evento('calculator_completed', { mode: modo, kcal: arredondaKcal(res.kcal) });
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
      set('.cb-numero', formataKm(res.km));
      set('.cb-unidade', 'pedalando');
      set(
        '.cb-frase',
        `Para gastar aproximadamente ${arredondaKcal(res.kcal)} kcal com ${Math.round(pesoKg)} kg a ` +
          `${formataVelocidade(res.velocidade)} — cerca de ${formataTempo(res.minutos)}.`,
      );
    } else {
      set('.cb-numero', `≈ ${arredondaKcal(res.kcal).toLocaleString('pt-BR')}`);
      set('.cb-unidade', 'kcal');
      set('.cb-frase', fraseContexto(pesoKg, res));
    }

    set('.cb-d-tempo', formataTempo(res.minutos));
    set('.cb-d-liquido', `≈ ${arredondaKcal(res.kcalLiquida).toLocaleString('pt-BR')} kcal`);
    set('.cb-d-met', res.met.toLocaleString('pt-BR', { maximumFractionDigits: 1 }));

    // Distância e custo por km só existem na rua. Na ergométrica seriam
    // números inventados, então as linhas somem em vez de mostrar zero.
    const naRuaAgora = res.onde === 'rua';
    linha('.cb-linha-km', naRuaAgora);
    linha('.cb-linha-porkm', naRuaAgora);
    linha('.cb-linha-watts', !naRuaAgora);
    if (naRuaAgora) {
      set('.cb-d-km', formataKm(res.km));
      set('.cb-d-porkm', `≈ ${Math.round(res.kcal / Math.max(res.km, 0.001))} kcal`);
    } else {
      set('.cb-d-watts', `${Math.round(res.watts)} W`);
    }

    // O aviso que impede a ferramenta de devolver um cenário impossível de
    // cara séria: 35 km/h numa subida de 15% dá mais de 70 METs.
    const alerta = saida.querySelector<HTMLElement>('.cb-nota-intensidade');
    if (alerta) {
      alerta.hidden = !res.intensidadeImplausivel;
      if (res.intensidadeImplausivel) alerta.textContent = NOTA_INTENSIDADE_IMPLAUSIVEL;
    }

    const nota = saida.querySelector<HTMLElement>('.cb-nota-ergo');
    if (nota) {
      nota.hidden = naRuaAgora;
      if (!naRuaAgora) nota.textContent = NOTA_ERGOMETRICA_VELOCIDADE;
    }

    atualizaWhatsapp(res);
  }

  /** Leva contexto e resultado. Nunca o peso. */
  function atualizaWhatsapp(res: Resultado): void {
    const link = saida.querySelector<HTMLAnchorElement>('.cb-whats');
    if (!link) return;
    const oQue =
      modo === 'meta'
        ? `Para bater ${arredondaKcal(res.kcal)} kcal, a conta deu ${formataKm(res.km)} de pedal.`
        : res.onde === 'ergometrica'
          ? `Minha estimativa deu cerca de ${arredondaKcal(res.kcal)} kcal em ${formataTempo(res.minutos)} de ergométrica.`
          : `Minha estimativa deu cerca de ${arredondaKcal(res.kcal)} kcal em ${formataKm(res.km)} de pedal.`;
    link.href = whatsappUrl(
      `Oi, Montinho! Vim pela calculadora de calorias do pedal do Personal por Perto. ${oQue} ` +
        `Queria entender como encaixar o pedal numa estratégia para o meu objetivo.`,
    );
  }

  /** O comparativo ao vivo: o que muda se eu pedalar mais rápido. */
  function atualizaComparativo(): void {
    const alvo = $<HTMLElement>('#cb-comparativo');
    if (!alvo) return;
    const vel = parseNumero(velocidade.value);
    if (!velocidadeValida(vel)) return;
    const met = metRua(vel);
    alvo.textContent = `${formataVelocidade(vel)} ≈ ${met.toLocaleString('pt-BR', { maximumFractionDigits: 1 })} METs`;
  }

  /* ---------------------------------------------------------------- */
  document.querySelectorAll<HTMLButtonElement>('.cb-modo').forEach((b) => {
    b.addEventListener('click', () => trocaModo(b.dataset.modo as Modo));
  });

  const abas = Array.from(document.querySelectorAll<HTMLButtonElement>('.cb-modo'));
  abas.forEach((b, i) => {
    b.addEventListener('keydown', (e) => {
      if (e.key !== 'ArrowRight' && e.key !== 'ArrowLeft') return;
      e.preventDefault();
      trocaModo(abas[(i + (e.key === 'ArrowRight' ? 1 : abas.length - 1)) % abas.length].dataset.modo as Modo);
    });
  });

  [peso, velocidade, watts, inclinacao, ...Object.values(campos)].forEach((el) => {
    el.addEventListener('input', () => {
      calcula();
      atualizaComparativo();
    });
  });

  // Os níveis de esforço preenchem os watts, para quem não tem o número.
  document.querySelectorAll<HTMLButtonElement>('.cb-nivel').forEach((b) => {
    b.addEventListener('click', () => {
      const n = NIVEIS_ESFORCO.find((x) => x.id === b.dataset.nivel);
      if (!n) return;
      watts.value = String(n.watts);
      document.querySelectorAll<HTMLButtonElement>('.cb-nivel').forEach((o) => {
        o.classList.toggle('is-ativo', o === b);
        o.setAttribute('aria-pressed', String(o === b));
      });
      calcula();
    });
  });

  document.querySelectorAll<HTMLButtonElement>('.cb-preset').forEach((b) => {
    b.addEventListener('click', () => {
      const alvoId = b.dataset.alvo;
      /*
       * Sem data-alvo não é preset: são os botões de NÍVEL DE ESFORÇO, que
       * usam a mesma classe só pela aparência de pílula e têm handler
       * próprio. Sem esta guarda eles caíam no `?? modo` e apagavam o campo
       * do modo atual a cada clique — o resultado sumia logo depois de o
       * nível tê-lo calculado.
       */
      if (!alvoId) return;
      const alvo = alvoId === 'velocidade' ? velocidade : alvoId === 'watts' ? watts : campos[alvoId as Modo];
      if (!alvo) return;
      alvo.value = b.dataset.valor ?? '';
      calcula();
      atualizaComparativo();
      alvo.focus();
    });
  });

  if (inclinacao) inclinacao.max = String(INCLINACAO_MAX);

  evento('calculator_view');
  calcula();
  atualizaComparativo();
}
