/**
 * Deixa as tabelas com rolagem lateral alcançáveis pelo teclado.
 *
 * POR QUE ISTO EXISTE
 *
 * No celular, as tabelas das calculadoras rolam para o lado dentro de
 * `.tabela-rolavel`. Quem usa mouse ou dedo rola; quem navega pelo teclado
 * não tinha como: a caixa não recebia foco, e as colunas da direita ficavam
 * inalcançáveis. A auditoria de acessibilidade (axe, regra
 * scrollable-region-focusable) acusou as três tabelas da página de lutas a
 * 390px, e as mesmas caixas existem em todas as calculadoras.
 *
 * O foco vai só para a caixa que ESTÁ rolando. Um `tabindex` fixo em todas
 * criaria dezenas de paradas de Tab inúteis no computador, onde a tabela
 * cabe inteira. O nome acessível vem da legenda da própria tabela, para o
 * leitor de tela anunciar o que é, e não só "região".
 */
export function tabelasRolaveis(): void {
  const caixas = Array.from(document.querySelectorAll<HTMLElement>('.tabela-rolavel'));
  if (!caixas.length) return;

  for (const caixa of caixas) {
    const legenda = caixa.querySelector('caption')?.textContent?.replace(/\s+/g, ' ').trim();
    caixa.setAttribute('role', 'region');
    caixa.setAttribute('aria-label', legenda ? `Tabela: ${legenda}` : 'Tabela');
  }

  const ajusta = () => {
    for (const caixa of caixas) {
      const rola = caixa.scrollWidth > caixa.clientWidth + 1;
      if (rola) caixa.tabIndex = 0;
      else caixa.removeAttribute('tabindex');
    }
  };

  ajusta();
  // A fonte da web pode chegar depois e mudar a largura das colunas.
  document.fonts?.ready.then(ajusta).catch(() => {});
  let espera: number | undefined;
  window.addEventListener('resize', () => {
    window.clearTimeout(espera);
    espera = window.setTimeout(ajusta, 120);
  });
}
