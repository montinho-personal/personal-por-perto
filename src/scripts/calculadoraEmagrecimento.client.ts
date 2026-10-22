/**
 * Interface da calculadora de emagrecimento (tempo até a meta).
 *
 * As quatro medidas da calculadora de gasto diário, mais o peso da meta,
 * o tamanho do déficit e a constância. O resultado é o prazo, com a conta
 * linear ao lado para mostrar a diferença, o consumo do plano e a curva
 * mês a mês. Campo em branco não é erro — é alguém que ainda não digitou.
 *
 * Nada vai para a URL nem para o WhatsApp: peso, altura, idade e meta são
 * dados corporais. A mensagem leva só o prazo.
 */
import {
  ALTURA_MAX,
  ALTURA_MIN,
  IDADE_MAX,
  IDADE_MIN,
  PESO_MAX,
  PESO_MIN,
  alturaValida,
  idadeValida,
  parseAltura,
  parseNumero,
  pesoValido,
} from '../lib/calorias/gastoDiario';
import {
  DEFICITS,
  ESTILOS,
  META_MIN,
  curvaResumida,
  deficit,
  estilo,
  formataKcal,
  formataKg,
  formataPrazo,
  frasePlano,
  metaValida,
  simula,
  type Plano,
  type Sexo,
} from '../lib/corpo/emagrecimento';
import { whatsappUrl } from '../lib/links';
import { reservaAltura } from './reservaAltura';

const $ = <T extends HTMLElement>(sel: string): T | null => document.querySelector<T>(sel);

export function iniciarCalculadoraEmagrecimento(): void {
  if (!$('#em-app')) return;

  const idade = $<HTMLInputElement>('#em-idade')!;
  const peso = $<HTMLInputElement>('#em-peso')!;
  const altura = $<HTMLInputElement>('#em-altura')!;
  const meta = $<HTMLInputElement>('#em-meta')!;
  const saida = $<HTMLElement>('#em-saida')!;
  const erro = $<HTMLElement>('#em-erro')!;

  let sexo: Sexo = 'feminino';
  let idEstilo = 'sedentario';
  let idDeficit = 'moderado';
  let constancia = 0.9;
  let comecou = false;

  function evento(nome: string, extra: Record<string, string | number> = {}): void {
    const w = window as unknown as { dataLayer?: unknown[] };
    w.dataLayer = w.dataLayer || [];
    w.dataLayer.push({ event: nome, tool: 'calculadora-emagrecimento', ...extra });
  }

  function marca(seletor: string, atributo: string, valor: string): void {
    document.querySelectorAll<HTMLButtonElement>(seletor).forEach((b) => {
      const ativo = b.dataset[atributo] === valor;
      b.classList.toggle('is-ativo', ativo);
      b.setAttribute('aria-pressed', String(ativo));
    });
  }

  function desenhaEscolhas(): void {
    marca('.em-sexo', 'sexo', sexo);
    marca('.em-estilo', 'estilo', idEstilo);
    marca('.em-deficit', 'deficit', idDeficit);
    marca('.em-constancia', 'constancia', String(constancia));
    const dicaEstilo = $<HTMLElement>('#em-estilo-dica');
    if (dicaEstilo) dicaEstilo.textContent = estilo(idEstilo).comoReconhecer;
    const dicaDeficit = $<HTMLElement>('#em-deficit-dica');
    if (dicaDeficit) dicaDeficit.textContent = deficit(idDeficit).leitura;
  }

  /** Campo em branco não é erro: é alguém que ainda não digitou. */
  function falha(msg: string, silencioso = false): void {
    saida.hidden = true;
    erro.hidden = silencioso;
    erro.textContent = silencioso ? '' : msg;
  }

  function calcula(): void {
    const i = parseNumero(idade.value);
    if (!idadeValida(i)) return falha(`Informe uma idade entre ${IDADE_MIN} e ${IDADE_MAX} anos.`, !idade.value.trim());
    const p = parseNumero(peso.value);
    if (!pesoValido(p)) return falha(`Informe um peso entre ${PESO_MIN} e ${PESO_MAX} kg.`, !peso.value.trim());
    const a = parseAltura(altura.value);
    if (!alturaValida(a)) return falha(`Informe a altura em centímetros, entre ${ALTURA_MIN} e ${ALTURA_MAX}.`, !altura.value.trim());
    const m = parseNumero(meta.value);
    if (!metaValida(m, p)) {
      const msg =
        m !== null && m >= p
          ? 'A meta precisa ser menor que o peso atual.'
          : `Informe o peso da meta em kg, a partir de ${META_MIN}.`;
      return falha(msg, !meta.value.trim());
    }
    const plano = simula(sexo, p, a, i, idEstilo, m, idDeficit, constancia);
    if (!comecou) {
      comecou = true;
      evento('calculator_started');
    }
    desenha(plano);
    evento('calculator_completed', {
      sex: sexo,
      style: idEstilo,
      deficit: plano.deficitKcal,
      consistency: Math.round(constancia * 100),
      reaches: plano.chega ? 'yes' : 'no',
      days: plano.dias ?? 0,
    });
  }

  function dataEstimada(dias: number): string {
    const d = new Date();
    d.setDate(d.getDate() + dias);
    return d.toLocaleDateString('pt-BR', { month: 'long', year: 'numeric' });
  }

  function desenha(p: Plano): void {
    erro.hidden = true;
    saida.hidden = false;
    const set = (sel: string, txt: string) => {
      const el = saida.querySelector(sel);
      if (el) el.textContent = txt;
    };
    set('.em-numero', p.chega ? formataPrazo(p.dias as number) : 'Não chega');
    set('.em-unidade', p.chega ? `até ${formataKg(p.pesoMeta)} kg` : `com este plano fixo`);
    set('.em-quando', p.chega ? `Pela conta, por volta de ${dataEstimada(p.dias as number)}.` : '');
    set('.em-frase', frasePlano(p));
    set('.em-d-gasto', `≈ ${formataKcal(p.gastoInicial)} kcal`);
    set('.em-d-consumo', `≈ ${formataKcal(p.consumo)} kcal`);
    set('.em-d-ritmo', `≈ ${formataKg(p.kgSemanaInicio)} kg`);
    set('.em-d-linear', formataPrazo(p.diasLinear));

    const corpo = saida.querySelector<HTMLTableSectionElement>('.em-curva tbody');
    if (corpo) {
      corpo.replaceChildren(
        ...curvaResumida(p.curva).map((c) => {
          const tr = document.createElement('tr');
          const th = document.createElement('th');
          th.scope = 'row';
          th.textContent = Number.isInteger(c.mes) ? `Mês ${c.mes}` : 'Meta';
          const td = document.createElement('td');
          td.textContent = `${formataKg(c.pesoKg)} kg`;
          const td2 = document.createElement('td');
          td2.textContent = `−${formataKg(p.pesoInicial - c.pesoKg)} kg`;
          tr.append(th, td, td2);
          return tr;
        }),
      );
    }

    const abaixo = saida.querySelector<HTMLElement>('.em-nota-abaixo');
    if (abaixo) abaixo.hidden = !p.consumoAbaixoDoMetabolismo;
    const baixo = saida.querySelector<HTMLElement>('.em-nota-baixo');
    if (baixo) baixo.hidden = !p.metaBaixoPeso;
    atualizaWhatsapp(p);
  }

  /** Leva só o prazo. Nunca peso, altura, idade ou meta. */
  function atualizaWhatsapp(p: Plano): void {
    const link = saida.querySelector<HTMLAnchorElement>('.em-whats');
    if (!link) return;
    const texto = p.chega
      ? `A conta deu ${formataPrazo(p.dias as number)} até a minha meta.`
      : 'A conta mostrou que, com um plano fixo, eu paro antes da meta.';
    link.href = whatsappUrl(
      `Oi, Montinho! Vim pela calculadora de emagrecimento do Personal por Perto. ${texto} Queria entender como o treino entra nisso.`,
    );
  }

  /* ---------------------------------------------------------------- */
  document.querySelectorAll<HTMLButtonElement>('.em-sexo').forEach((b) => {
    b.addEventListener('click', () => {
      sexo = (b.dataset.sexo as Sexo) ?? sexo;
      desenhaEscolhas();
      calcula();
    });
  });
  document.querySelectorAll<HTMLButtonElement>('.em-estilo').forEach((b) => {
    b.addEventListener('click', () => {
      idEstilo = b.dataset.estilo ?? idEstilo;
      desenhaEscolhas();
      evento('calculator_style_changed', { style: idEstilo });
      calcula();
    });
  });
  document.querySelectorAll<HTMLButtonElement>('.em-deficit').forEach((b) => {
    b.addEventListener('click', () => {
      idDeficit = b.dataset.deficit ?? idDeficit;
      desenhaEscolhas();
      evento('calculator_deficit_changed', { deficit: deficit(idDeficit).kcal });
      calcula();
    });
  });
  document.querySelectorAll<HTMLButtonElement>('.em-constancia').forEach((b) => {
    b.addEventListener('click', () => {
      const c = Number(b.dataset.constancia);
      if (Number.isFinite(c)) constancia = c;
      desenhaEscolhas();
      evento('calculator_consistency_changed', { consistency: Math.round(constancia * 100) });
      calcula();
    });
  });
  [idade, peso, altura, meta].forEach((el) => el.addEventListener('input', calcula));

  evento('calculator_view');
  const dicaEstilo = $<HTMLElement>('#em-estilo-dica');
  if (dicaEstilo) reservaAltura(dicaEstilo, ESTILOS.map((e) => e.comoReconhecer));
  const dicaDeficit = $<HTMLElement>('#em-deficit-dica');
  if (dicaDeficit) reservaAltura(dicaDeficit, DEFICITS.map((d) => d.leitura));
  desenhaEscolhas();
  calcula();
}
