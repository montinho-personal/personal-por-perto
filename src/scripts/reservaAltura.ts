/**
 * Reserva, para uma dica que troca de texto, a altura do MAIOR texto
 * possível — medida na largura real da tela.
 *
 * POR QUE ISTO EXISTE
 *
 * As calculadoras trocam a descrição de um estilo, nível ou tipo quando a
 * pessoa escolhe outra opção. Se a descrição nova tem uma linha a mais, tudo
 * o que está abaixo desce — e o dedo que ia no campo seguinte acerta outra
 * coisa. É o defeito "o campo pulou" relatado pelo Renato.
 *
 * A primeira correção foi um `min-height` em `em` por página, medido à mão
 * em 390px e 1280px. Funcionou onde foi medido e falhou onde não foi: a
 * 360px a dança e a musculação ainda empurravam os campos, e a 320px a
 * Zumba precisava de seis linhas num espaço de cinco. Altura reservada à mão
 * é uma aposta em cada largura; medida na hora, não é.
 *
 * O `min-height` do CSS continua como primeira pintura (evita salto no
 * carregamento na largura comum); este utilitário corrige para a largura
 * real e refaz a conta quando a tela gira ou muda de tamanho.
 */
export function reservaAltura(el: HTMLElement, textos: string[]): void {
  if (!textos.length) return;

  const medir = () => {
    const atual = el.textContent ?? '';
    const minAntes = el.style.minHeight;
    el.style.minHeight = '0';
    let maior = 0;
    for (const t of textos) {
      el.textContent = t;
      maior = Math.max(maior, el.getBoundingClientRect().height);
    }
    el.textContent = atual;
    el.style.minHeight = maior > 0 ? `${Math.ceil(maior)}px` : minAntes;
  };

  medir();
  // A fonte da web pode chegar depois e mudar a quebra de linha.
  document.fonts?.ready.then(medir).catch(() => {});
  let espera: number | undefined;
  window.addEventListener('resize', () => {
    window.clearTimeout(espera);
    espera = window.setTimeout(medir, 120);
  });
}
