/**
 * Foca um campo rolando só o mínimo necessário para ele aparecer.
 *
 * POR QUE ISTO EXISTE
 *
 * Ao trocar de modo, as calculadoras levam o foco para o campo do modo novo.
 * O `focus()` puro deixa o navegador decidir a rolagem, e o Chrome centraliza
 * o campo quando ele está fora da tela: no celular de 320px a página saltava
 * quase meia tela (1052 → 563 px na corda) e a pessoa perdia as abas que
 * tinha acabado de tocar. Com `block: 'nearest'`, um campo já visível não
 * move nada, e um campo escondido sobe só até a borda.
 */
export function focoSemSalto(el: HTMLElement): void {
  el.focus({ preventScroll: true });
  el.scrollIntoView({ block: 'nearest', inline: 'nearest' });
}
