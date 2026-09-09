# Pendências abertas

Decisões que ficaram em aberto de propósito, para não se perderem entre
uma conversa e outra. Cada item diz o que está no ar hoje, o que falta
decidir e o que muda em cada caminho.

---

## Vídeos do canal nas páginas de cidade

**Aberta desde 09/09/2026.**

**O que está no ar.** O commit `2d59b7e` trocou os IDs de YouTube fixos das
5 páginas de cidade com atendimento presencial por uma escolha
determinística a partir do slug (`src/data/videosMontinho.ts`, função
`videoDaPagina`). Antes, quatro dessas cinco páginas exibiam o MESMO
vídeo.

Efeito prático da troca:

| página | antes | agora |
|---|---|---|
| Alphaville | `MrfzaQWFqPs` | `yndKE1GrnUQ` |
| Tamboré | `yndKE1GrnUQ` | `MrfzaQWFqPs` |
| Aldeia da Serra | `yndKE1GrnUQ` | `GPuqJs_DRoY` |
| Barueri | `yndKE1GrnUQ` | `0uzpCxIJkBg` |
| Santana de Parnaíba | `yndKE1GrnUQ` | `nEhysMtPPVw` |

As cinco mudaram — Alphaville e Tamboré trocaram de vídeo entre si, as
outras três receberam peças que nunca tinham aparecido no portal.

**Por que virou pendência.** A mudança foi feita a pedido, mas o Renato
avisou logo depois que o pedido tinha ido para o chat errado. Decisão dele:
**deixar no ar e conversar depois** — nada de mexer em vídeo por iniciativa
própria até essa conversa acontecer.

**O que falta decidir.**

1. Manter ou reverter a variação nas 5 páginas presenciais. Reverter é um
   commit pequeno: apagar `videosMontinho.ts` e devolver os IDs fixos.
2. Se manter: estender vídeo às outras ~977 páginas de cidade, que hoje
   não exibem vídeo nenhum. Com 8 vídeos no catálogo, cada um cairia em
   cerca de 120 páginas.

**O que não fazer sem essa conversa.** Acrescentar vídeo novo ao catálogo,
mudar o critério de sorteio, ou levar vídeo para páginas que hoje não têm.
