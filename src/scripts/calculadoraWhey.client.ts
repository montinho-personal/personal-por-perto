/**
 * Interface da calculadora de whey.
 *
 * Um formulário, duas contas. O rótulo (gramas da dose e proteína por
 * dose) é comum às duas: a de doses usa peso, altura, situação e o que a
 * pessoa já come; a de custo usa preço e peso do pote. Campo em branco não
 * é erro — é alguém que ainda não digitou — e cada conta falha sozinha,
 * sem derrubar a outra.
 *
 * Nada vai para a URL nem para o WhatsApp: peso e altura são dados
 * corporais. A mensagem leva só as doses.
 */
import {
  ALTURA_MAX,
  ALTURA_MIN,
  PERFIS,
  PESO_MAX,
  PESO_MIN,
  alturaValida,
  formataFaixaGkg,
  formataFaixaGramas,
  parseAltura,
  parseNumero,
  perfil,
  pesoValido,
  type Perfil,
} from '../lib/nutricao/proteina';
import {
  CLASSES,
  DOSE_PO_MAX,
  DOSE_PO_MIN,
  JA_COME_MAX,
  JA_COME_MIN,
  POTE_MAX,
  POTE_MIN,
  PRECO_MAX,
  PRECO_MIN,
  PROTEINA_DOSE_MAX,
  PROTEINA_DOSE_MIN,
  custo,
  diasQueDura,
  doses,
  entre,
  formataDoses,
  formataFalta,
  formataInteiro,
  formataPct,
  formataReais,
  fraseCusto,
  fraseDoses,
  type Custo,
  type Doses,
} from '../lib/nutricao/whey';
import { whatsappUrl } from '../lib/links';
import { reservaAltura } from './reservaAltura';

const $ = <T extends HTMLElement>(sel: string): T | null => document.querySelector<T>(sel);

export function iniciarCalculadoraWhey(): void {
  if (!$('#wy-app')) return;

  const dosePo = $<HTMLInputElement>('#wy-dose-po')!;
  const doseProt = $<HTMLInputElement>('#wy-dose-prot')!;
  const peso = $<HTMLInputElement>('#wy-peso')!;
  const altura = $<HTMLInputElement>('#wy-altura')!;
  const come = $<HTMLInputElement>('#wy-come')!;
  const preco = $<HTMLInputElement>('#wy-preco')!;
  const pote = $<HTMLInputElement>('#wy-pote')!;
  const saidaDoses = $<HTMLElement>('#wy-saida-doses')!;
  const erroDoses = $<HTMLElement>('#wy-erro-doses')!;
  const saidaCusto = $<HTMLElement>('#wy-saida-custo')!;
  const erroCusto = $<HTMLElement>('#wy-erro-custo')!;

  let idPerfil = 'forca';
  let comecou = false;
  let ultimasDoses: Doses | null = null;

  function evento(nome: string, extra: Record<string, string | number> = {}): void {
    const w = window as unknown as { dataLayer?: unknown[] };
    w.dataLayer = w.dataLayer || [];
    w.dataLayer.push({ event: nome, tool: 'calculadora-whey', ...extra });
  }

  const textoDica = (p: Perfil): string => `${p.nome}: ${formataFaixaGkg(p)} g por kg.`;

  function desenhaEscolhas(): void {
    document.querySelectorAll<HTMLButtonElement>('.wy-perfil').forEach((b) => {
      const ativo = b.dataset.perfil === idPerfil;
      b.classList.toggle('is-ativo', ativo);
      b.setAttribute('aria-pressed', String(ativo));
    });
    const dica = $<HTMLElement>('#wy-perfil-dica');
    if (dica) dica.textContent = textoDica(perfil(idPerfil));
  }

  function falha(saida: HTMLElement, erro: HTMLElement, msg: string, silencioso: boolean): void {
    saida.hidden = true;
    erro.hidden = silencioso;
    erro.textContent = silencioso ? '' : msg;
  }

  /** O rótulo vale para as duas contas. Devolve null com a mensagem já mostrada nos dois lugares. */
  function leRotulo(): { po: number; prot: number } | null {
    const po = parseNumero(dosePo.value);
    const prot = parseNumero(doseProt.value);
    const vazio = !dosePo.value.trim() || !doseProt.value.trim();
    let msg = '';
    if (!entre(po, DOSE_PO_MIN, DOSE_PO_MAX)) msg = `Informe o tamanho da dose em gramas de pó, entre ${DOSE_PO_MIN} e ${DOSE_PO_MAX}.`;
    else if (!entre(prot, PROTEINA_DOSE_MIN, PROTEINA_DOSE_MAX)) msg = `Informe a proteína por dose, entre ${PROTEINA_DOSE_MIN} e ${PROTEINA_DOSE_MAX} g.`;
    else if (prot > po) msg = 'A proteína por dose não pode passar do tamanho da dose: confira os dois números no rótulo.';
    if (msg) {
      falha(saidaDoses, erroDoses, msg, vazio);
      falha(saidaCusto, erroCusto, msg, vazio);
      return null;
    }
    return { po: po as number, prot: prot as number };
  }

  function calcula(): void {
    const rotulo = leRotulo();
    if (!rotulo) return;
    calculaDoses(rotulo.prot);
    calculaCusto(rotulo.po, rotulo.prot);
  }

  function calculaDoses(prot: number): void {
    const p = parseNumero(peso.value);
    if (!pesoValido(p)) return falha(saidaDoses, erroDoses, `Informe um peso entre ${PESO_MIN} e ${PESO_MAX} kg.`, !peso.value.trim());
    const a = parseAltura(altura.value);
    if (!alturaValida(a)) return falha(saidaDoses, erroDoses, `Informe a altura em centímetros, entre ${ALTURA_MIN} e ${ALTURA_MAX}.`, !altura.value.trim());
    const c = parseNumero(come.value);
    if (!entre(c, JA_COME_MIN, JA_COME_MAX)) return falha(saidaDoses, erroDoses, `Informe quanto de proteína você já come por dia, entre ${JA_COME_MIN} e ${JA_COME_MAX} g.`, !come.value.trim());
    const d = doses(p, a, idPerfil, c, prot);
    ultimasDoses = d;
    if (!comecou) {
      comecou = true;
      evento('calculator_started');
    }
    desenhaDoses(d);
    evento('calculator_completed', { profile: idPerfil, reading: d.leitura, doses_max: d.dosesMax });
  }

  function calculaCusto(po: number, prot: number): void {
    const pr = parseNumero(preco.value);
    if (!entre(pr, PRECO_MIN, PRECO_MAX)) return falha(saidaCusto, erroCusto, `Informe o preço do pote, entre R$ ${PRECO_MIN} e R$ ${PRECO_MAX}.`, !preco.value.trim());
    const pt = parseNumero(pote.value);
    if (!entre(pt, POTE_MIN, POTE_MAX)) return falha(saidaCusto, erroCusto, `Informe o peso do pote em gramas, entre ${POTE_MIN} e ${POTE_MAX}.`, !pote.value.trim());
    if (po > pt) return falha(saidaCusto, erroCusto, 'A dose não pode ser maior que o pote: confira os gramas.', false);
    desenhaCusto(custo(pr, pt, po, prot));
  }

  const set = (raiz: HTMLElement, sel: string, txt: string) => {
    const el = raiz.querySelector(sel);
    if (el) el.textContent = txt;
  };

  function desenhaDoses(d: Doses): void {
    erroDoses.hidden = true;
    saidaDoses.hidden = false;
    set(saidaDoses, '.wy-numero', formataDoses(d.dosesMin, d.dosesMax));
    set(saidaDoses, '.wy-unidade', d.dosesMax === 1 ? 'dose de whey por dia' : 'doses de whey por dia');
    set(saidaDoses, '.wy-frase', fraseDoses(d));
    set(saidaDoses, '.wy-d-meta', `${formataFaixaGramas(d.meta.gramasMin, d.meta.gramasMax)} g`);
    set(saidaDoses, '.wy-d-come', `${Math.round(d.jaCome)} g`);
    set(saidaDoses, '.wy-d-falta', `${formataFalta(d.faltaMin, d.faltaMax)} g`);
    set(saidaDoses, '.wy-nota-perfil', perfil(d.meta.idPerfil).nota);
    const ajustado = saidaDoses.querySelector<HTMLElement>('.wy-nota-ajustado');
    if (ajustado) ajustado.hidden = !d.meta.pesoTotalSuperestima;
    atualizaWhatsapp(d);
    // A conta de custo mostra quanto o pote dura com estas doses.
    const diasEl = saidaCusto.querySelector<HTMLElement>('.wy-d-dias');
    if (diasEl && !saidaCusto.hidden) desenhaDias(diasEl, d);
  }

  function desenhaDias(el: HTMLElement, d: Doses): void {
    const c = ultimoCusto;
    if (!c) return;
    const n = Math.max(d.dosesMin, 1);
    const dias = diasQueDura(c, n);
    el.textContent = d.dosesMax === 0 ? '— (hoje não falta nada)' : `${dias} dias, a ${n} ${n === 1 ? 'dose' : 'doses'} por dia`;
  }

  let ultimoCusto: Custo | null = null;

  function desenhaCusto(c: Custo): void {
    ultimoCusto = c;
    erroCusto.hidden = true;
    saidaCusto.hidden = false;
    set(saidaCusto, '.wy-numero', formataReais(c.custoPorGrama));
    set(saidaCusto, '.wy-frase', fraseCusto(c));
    set(saidaCusto, '.wy-d-conc', formataPct(c.concentracao));
    set(saidaCusto, '.wy-d-dose', formataReais(c.custoPorDose));
    set(saidaCusto, '.wy-d-doses', formataInteiro(c.dosesPorPote));
    set(saidaCusto, '.wy-classe', CLASSES[c.classe].leitura);
    const diasEl = saidaCusto.querySelector<HTMLElement>('.wy-d-dias');
    if (diasEl && ultimasDoses) desenhaDias(diasEl, ultimasDoses);
    evento('calculator_cost_completed', { concentration: Math.round(c.concentracao), class: c.classe });
  }

  /** Leva só as doses. Nunca peso, altura nem o que a pessoa come. */
  function atualizaWhatsapp(d: Doses): void {
    const link = saidaDoses.querySelector<HTMLAnchorElement>('.wy-whats');
    if (!link) return;
    const texto =
      d.dosesMax === 0
        ? 'A conta mostrou que a comida já fecha a minha proteína.'
        : `A conta deu ${formataDoses(d.dosesMin, d.dosesMax)} ${d.dosesMax === 1 ? 'dose' : 'doses'} de whey por dia para fechar a minha proteína.`;
    link.href = whatsappUrl(
      `Oi, Montinho! Vim pela calculadora de whey do Personal por Perto. ${texto} Queria entender como o treino entra nisso para o meu objetivo.`,
    );
  }

  /* ---------------------------------------------------------------- */
  document.querySelectorAll<HTMLButtonElement>('.wy-perfil').forEach((b) => {
    b.addEventListener('click', () => {
      idPerfil = b.dataset.perfil ?? idPerfil;
      desenhaEscolhas();
      evento('calculator_style_changed', { profile: idPerfil });
      calcula();
    });
  });
  [dosePo, doseProt, peso, altura, come, preco, pote].forEach((el) => el.addEventListener('input', calcula));

  evento('calculator_view');
  const dica = $<HTMLElement>('#wy-perfil-dica');
  if (dica) reservaAltura(dica, PERFIS.map(textoDica));
  desenhaEscolhas();
  calcula();
}
