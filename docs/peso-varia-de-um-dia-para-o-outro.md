# Artigo: Por que o peso varia (`/emagrecimento/peso-varia-de-um-dia-para-o-outro/`)

Item 4 da pauta (parte 1). Pedido do Renato em 17/11/2026 ("pode criar
esses dois"). Pesquisa no SerpApi antes do texto (celular, São Paulo).

Recorte: `plato-de-emagrecimento` = o peso parou por semanas; aqui = o sobe
e desce de horas e dias. As FAQs do platô sobre "2 kg no fim do dia" podem
passar a linkar para cá na próxima revisão dela (mexer agora subiria a data
dela sem revisão).

## Buscas (SerpApi, 17/11/2026)

JSON em `docs/pesquisas/2026-11-17-peso-varia/1.json` e `2.json`:
1. por que o peso varia tanto de um dia para o outro
2. pesar 2 kg a mais no fim do dia (visão de IA não expandida)

**Formato:** quase só Instagram (Reels de nutricionistas) e jornais (Estado
de Minas, O Globo), mais UOL VivaBem, Vitat, InBody, Marcio Atalla no
YouTube. Concorrência fraca: rede social domina → prioridade boa.

**Visão de IA:** abre com a resposta direta ("a balança mede a massa total…
água, ossos, músculos, alimentos em digestão"), dá uma faixa de 0,5 a 1,5
kg, lista hidratação e digestão e termina com "como se pesar". Cita
Instagram, Terra, YouTube, Nutrology Academy, CNN Brasil, Abril. O lead
responde do mesmo jeito; a faixa de quilos ficou fora (nenhuma fonte
confiável achada para o número).

| sinal | onde entrou / por que ficou fora |
|---|---|
| AC "porque o peso varia de um dia para o outro", "…ao longo do dia", "…durante o dia", "peso varia de um dia para outro" | title, H1, lead, dois primeiros H2 |
| PAA "É normal engordar 2 kg de um dia para o outro?"; busca 2 | H2 próprio com a conta dos 7.700 kcal + FAQ + bloco gasto-calorico-diario |
| PAA "Porque cada balança dá um peso diferente?" | H2 próprio + FAQ |
| PAA "Qual o momento ideal do dia para se pesar?" + IA "como se pesar" | H2 "Qual o melhor horário para se pesar" + FAQ |
| PAA "É possível perder 2 kg em 3 dias?" | parágrafo depois da conta + FAQ (glicogênio 1:3, Fernández-Elías 2015) |
| IA hidratação, digestão | H3 "Água e carboidrato" e "Comida no intestino" |
| tema da pauta (fim de semana, ciclo) | H3 com Orsama 2014 e White 2011 |
| PAA "O que trava o emagrecimento?" | link para `plato-de-emagrecimento` no fim (é o tema de lá) |
| IA "0,5 a 1,5 kg ou mais por dia" | ✖ fora: IA não é fonte; sem estudo achado |
| PAA "Quais são os primeiros sinais de emagrecimento no corpo?" | ✖ fora: outro assunto (ver pauta) |
| PAA "Quantos kg é possível engordar em 1 semana?" | ✖ fora como seção; a conta dos 7.700 kcal responde em parte |

Ferramenta no corpo: `gasto-calorico-diario`, depois da conta dos 2 kg.
Sem vídeo: o Short da balança (nEhysMtPPVw) já está em dois artigos.

Ressalva médica: H2 "Quando a variação de peso preocupa" (inchaço, falta
de ar, perda sem tentar).

## Título e descrição

Artigo novo: definidos na criação, a partir das buscas.

## Buscas que ficaram de fora → pauta

- **Vale um artigo:** "Quais são os primeiros sinais de emagrecimento no
  corpo?" (PAA) — o site não tem; dá para responder com medidas (cintura,
  roupa, força) e fonte. Conferir contra `recomposicao-corporal` antes.
- **Cabe em página existente:** "O que trava o emagrecimento?" →
  `plato-de-emagrecimento` (já cobre; na próxima revisão, usar a pergunta
  como FAQ e linkar para cá nas FAQs de "2 kg").
- **Não recomendo:** "Quantos kg é possível engordar em 1 semana?" como
  artigo — a resposta é a mesma conta deste, canibalizaria.
