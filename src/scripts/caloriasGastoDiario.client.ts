/**
 * Interface da calculadora de gasto calórico diário.
 *
 * O QUE MUDA EM RELAÇÃO ÀS OUTRAS DEZOITO
 *
 * Não há tempo nem meta: o dia é a unidade. Os campos são as quatro
 * medidas da equação e o estilo de vida. A nota de idade fora da faixa do
 * estudo fica abaixo do resultado: nada acima dos campos muda de altura
 * quando ela aparece.
 *
 * Nada vai para a URL nem para o WhatsApp: peso, altura e idade são dados
 * corporais. A mensagem leva só a faixa do resultado.
 */
import {
  ALTURA_MAX,
  ALTURA_MIN,
  ESTILOS,
  IDADE_MAX,
  IDADE_MIN,
  PESO_MAX,
  PESO_MIN,
  alturaValida,
  arredondaKcal,
  estilo,
  formataFaixaKcal,
  formataFaixaPal,
  formataKcal,
  fraseContexto,
  gastoDiario,
  idadeValida,
  parseAltura,
  parseNumero,
  pesoValido,
  type Estilo,
  type Resultado,
  type Sexo,
} from '../lib/calorias/gastoDiario';
import { whatsappUrl } from '../lib/links';
import { reservaAltura } from './reservaAltura';

const $ = <T extends HTMLElement>(sel: string): T | null => document.querySelector<T>(sel);

export function iniciarCalculadoraGastoDiario(): void {
  if (!$('#gd-app')) return;

  const idade = $<HTMLInputElement>('#gd-idade')!;
  const peso = $<HTMLInputElement>('#gd-peso')!;
  const altura = $<HTMLInputElement>('#gd-altura')!;
  const saida = $<HTMLElement>('#gd-saida')!;
  const erro = $<HTMLElement>('#gd-erro')!;

  let sexo: Sexo = 'feminino';
  let idEstilo = 'sedentario';
  let comecou = false;

  function evento(nome: string, extra: Record<string, string | number> = {}): void {
    const w = window as unknown as { dataLayer?: unknown[] };
    w.dataLayer = w.dataLayer || [];
    w.dataLayer.push({ event: nome, tool: 'calorias-gasto-diario', ...extra });
  }

  const textoDica = (e: Estilo): string => `${e.comoReconhecer} Nível de atividade: ${formataFaixaPal(e)}.`;

  function marca(seletor: string, atributo: string, valor: string): void {
    document.querySelectorAll<HTMLButtonElement>(seletor).forEach((b) => {
      const ativo = b.dataset[atributo] === valor;
      b.classList.toggle('is-ativo', ativo);
      b.setAttribute('aria-pressed', String(ativo));
    });
  }

  function desenhaEscolhas(): void {
    marca('.gd-sexo', 'sexo', sexo);
    marca('.gd-estilo', 'estilo', idEstilo);
    const dica = $<HTMLElement>('#gd-estilo-dica');
    if (dica) dica.textContent = textoDica(estilo(idEstilo));
  }

  function calcula(): void {
    const i = parseNumero(idade.value);
    if (!idadeValida(i)) return falha(`Informe uma idade entre ${IDADE_MIN} e ${IDADE_MAX} anos.`, !idade.value.trim());
    const p = parseNumero(peso.value);
    if (!pesoValido(p)) return falha(`Informe um peso entre ${PESO_MIN} e ${PESO_MAX} kg.`, !peso.value.trim());
    const a = parseAltura(altura.value);
    if (!alturaValida(a)) return falha(`Informe a altura em centímetros, entre ${ALTURA_MIN} e ${ALTURA_MAX}.`, !altura.value.trim());
    const res = gastoDiario(sexo, p, a, i, idEstilo);
    if (!comecou) {
      comecou = true;
      evento('calculator_started');
    }
    desenha(res);
    evento('calculator_completed', { sex: sexo, style: idEstilo, kcal: arredondaKcal(res.gastoMax) });
  }

  /** Campo em branco não é erro: é alguém que ainda não digitou. */
  function falha(msg: string, silencioso = false): void {
    saida.hidden = true;
    erro.hidden = silencioso;
    erro.textContent = silencioso ? '' : msg;
  }

  function desenha(res: Resultado): void {
    erro.hidden = true;
    saida.hidden = false;
    const set = (sel: string, txt: string) => {
      const el = saida.querySelector(sel);
      if (el) el.textContent = txt;
    };
    set('.gd-numero', formataFaixaKcal(res.gastoMin, res.gastoMax));
    set('.gd-frase', fraseContexto(res));
    set('.gd-d-metabolismo', `≈ ${formataKcal(res.metabolismo)} kcal`);
    set('.gd-d-erro', `${formataFaixaKcal(res.metabolismoMin, res.metabolismoMax)} kcal`);
    set('.gd-d-pal', formataFaixaPal(res));
    set('.gd-d-hora', `+ ≈ ${formataKcal(res.umaHoraPorDia)} kcal`);
    const fora = saida.querySelector<HTMLElement>('.gd-nota-fora');
    if (fora) fora.hidden = !res.foraDaFaixa;
    atualizaWhatsapp(res);
  }

  /** Leva a faixa do resultado. Nunca peso, altura ou idade. */
  function atualizaWhatsapp(res: Resultado): void {
    const link = saida.querySelector<HTMLAnchorElement>('.gd-whats');
    if (!link) return;
    link.href = whatsappUrl(
      `Oi, Montinho! Vim pela calculadora de gasto calórico diário do Personal por Perto. ` +
        `Minha estimativa deu ${formataFaixaKcal(res.gastoMin, res.gastoMax)} kcal por dia. ` +
        `Queria entender como o treino entra nisso para o meu objetivo.`,
    );
  }

  /* ---------------------------------------------------------------- */
  document.querySelectorAll<HTMLButtonElement>('.gd-sexo').forEach((b) => {
    b.addEventListener('click', () => {
      sexo = (b.dataset.sexo as Sexo) ?? sexo;
      desenhaEscolhas();
      calcula();
    });
  });
  document.querySelectorAll<HTMLButtonElement>('.gd-estilo').forEach((b) => {
    b.addEventListener('click', () => {
      idEstilo = b.dataset.estilo ?? idEstilo;
      desenhaEscolhas();
      evento('calculator_style_changed', { style: idEstilo });
      calcula();
    });
  });
  [idade, peso, altura].forEach((el) => el.addEventListener('input', calcula));

  evento('calculator_view');
  const dica = $<HTMLElement>('#gd-estilo-dica');
  if (dica) reservaAltura(dica, ESTILOS.map(textoDica));
  desenhaEscolhas();
  calcula();
}
