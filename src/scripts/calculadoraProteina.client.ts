/**
 * Interface da calculadora de proteína.
 *
 * Peso, altura, situação e refeições. A dica do perfil fica logo abaixo dos
 * botões com a altura reservada para o maior texto; as notas longas ficam
 * abaixo do resultado — nada acima dos campos muda de altura ao trocar.
 *
 * Nada vai para a URL nem para o WhatsApp: peso e altura são dados
 * corporais. A mensagem leva só a faixa de gramas.
 */
import {
  ALTURA_MAX,
  ALTURA_MIN,
  PERFIS,
  PESO_MAX,
  PESO_MIN,
  REFEICOES_PADRAO,
  alturaValida,
  formataFaixaGkg,
  formataFaixaGramas,
  formataFaixaRefeicao,
  formataImc,
  fraseContexto,
  parseAltura,
  parseNumero,
  perfil,
  pesoValido,
  proteina,
  type Perfil,
  type Resultado,
} from '../lib/nutricao/proteina';
import { whatsappUrl } from '../lib/links';
import { reservaAltura } from './reservaAltura';

const $ = <T extends HTMLElement>(sel: string): T | null => document.querySelector<T>(sel);

export function iniciarCalculadoraProteina(): void {
  if (!$('#pt-app')) return;

  const peso = $<HTMLInputElement>('#pt-peso')!;
  const altura = $<HTMLInputElement>('#pt-altura')!;
  const saida = $<HTMLElement>('#pt-saida')!;
  const erro = $<HTMLElement>('#pt-erro')!;

  let idPerfil = 'forca';
  let refeicoes: number = REFEICOES_PADRAO;
  let comecou = false;

  function evento(nome: string, extra: Record<string, string | number> = {}): void {
    const w = window as unknown as { dataLayer?: unknown[] };
    w.dataLayer = w.dataLayer || [];
    w.dataLayer.push({ event: nome, tool: 'calculadora-proteina', ...extra });
  }

  const textoDica = (p: Perfil): string => `${p.nome}: ${formataFaixaGkg(p)} g por kg.`;

  function marca(seletor: string, atributo: string, valor: string): void {
    document.querySelectorAll<HTMLButtonElement>(seletor).forEach((b) => {
      const ativo = b.dataset[atributo] === valor;
      b.classList.toggle('is-ativo', ativo);
      b.setAttribute('aria-pressed', String(ativo));
    });
  }

  function desenhaEscolhas(): void {
    marca('.pt-perfil', 'perfil', idPerfil);
    marca('.pt-refeicao', 'refeicoes', String(refeicoes));
    const dica = $<HTMLElement>('#pt-perfil-dica');
    if (dica) dica.textContent = textoDica(perfil(idPerfil));
  }

  /** Campo em branco não é erro: é alguém que ainda não digitou. */
  function falha(msg: string, silencioso = false): void {
    saida.hidden = true;
    erro.hidden = silencioso;
    erro.textContent = silencioso ? '' : msg;
  }

  function calcula(): void {
    const p = parseNumero(peso.value);
    if (!pesoValido(p)) return falha(`Informe um peso entre ${PESO_MIN} e ${PESO_MAX} kg.`, !peso.value.trim());
    const a = parseAltura(altura.value);
    if (!alturaValida(a)) return falha(`Informe a altura em centímetros, entre ${ALTURA_MIN} e ${ALTURA_MAX}.`, !altura.value.trim());
    const r = proteina(p, a, idPerfil, refeicoes);
    if (!comecou) {
      comecou = true;
      evento('calculator_started');
    }
    desenha(r);
    evento('calculator_completed', { profile: idPerfil, meals: refeicoes, adjusted_warning: r.pesoTotalSuperestima ? 1 : 0 });
  }

  function desenha(r: Resultado): void {
    erro.hidden = true;
    saida.hidden = false;
    const set = (sel: string, txt: string) => {
      const el = saida.querySelector(sel);
      if (el) el.textContent = txt;
    };
    set('.pt-numero', formataFaixaGramas(r.gramasMin, r.gramasMax));
    set('.pt-frase', fraseContexto(r));
    set('.pt-d-gkg', `${formataFaixaGkg(r)} g/kg`);
    set('.pt-d-refeicao-rotulo', `Por refeição (${r.refeicoes})`);
    set('.pt-d-refeicao', `${formataFaixaRefeicao(r.porRefeicaoMin, r.porRefeicaoMax)} g`);
    set('.pt-d-imc', formataImc(r.imc));
    set('.pt-nota-perfil', perfil(r.idPerfil).nota);
    const ajustado = saida.querySelector<HTMLElement>('.pt-nota-ajustado');
    if (ajustado) ajustado.hidden = !r.pesoTotalSuperestima;
    atualizaWhatsapp(r);
  }

  /** Leva só a faixa de gramas. Nunca peso nem altura. */
  function atualizaWhatsapp(r: Resultado): void {
    const link = saida.querySelector<HTMLAnchorElement>('.pt-whats');
    if (!link) return;
    link.href = whatsappUrl(
      `Oi, Montinho! Vim pela calculadora de proteína do Personal por Perto. ` +
        `A referência deu ${formataFaixaGramas(r.gramasMin, r.gramasMax)} g por dia. ` +
        `Queria entender como o treino entra nisso para o meu objetivo.`,
    );
  }

  /* ---------------------------------------------------------------- */
  document.querySelectorAll<HTMLButtonElement>('.pt-perfil').forEach((b) => {
    b.addEventListener('click', () => {
      idPerfil = b.dataset.perfil ?? idPerfil;
      desenhaEscolhas();
      evento('calculator_style_changed', { profile: idPerfil });
      calcula();
    });
  });
  document.querySelectorAll<HTMLButtonElement>('.pt-refeicao').forEach((b) => {
    b.addEventListener('click', () => {
      refeicoes = Number(b.dataset.refeicoes ?? REFEICOES_PADRAO);
      desenhaEscolhas();
      calcula();
    });
  });
  [peso, altura].forEach((el) => el.addEventListener('input', calcula));

  evento('calculator_view');
  const dica = $<HTMLElement>('#pt-perfil-dica');
  if (dica) reservaAltura(dica, PERFIS.map(textoDica));
  desenhaEscolhas();
  calcula();
}
