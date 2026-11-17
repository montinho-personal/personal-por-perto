# Artigo: Sinais de que está emagrecendo (`/emagrecimento/sinais-de-que-esta-emagrecendo/`)

Item 6 da pauta (parte 1). Pedido do Renato em 17/11/2026 ("pode criar 1 e
2"). Pesquisa no SerpApi antes do texto (celular, São Paulo).

Recorte: `recomposicao-corporal` = gordura × músculo com a balança parada
(linkado); `peso-varia-de-um-dia-para-o-outro` = a oscilação (linkado).
Aqui = como ler o progresso.

**Fontes oficiais bloqueadas no ambiente:** cdc.gov (ritmo de perda de peso
"normal") e msdmanuals.com (perda de peso involuntária) recusadas pelo
proxy. Não contornei: o texto não dá "perda normal por mês"; faz a conta
dos 7.700 kcal e manda perda sem tentar para o médico, sem listar doenças.

## Buscas (SerpApi, 17/11/2026)

JSON em `docs/pesquisas/2026-11-17-sinais-de-emagrecimento/1.json` e `2.json`:
1. sinais de que está emagrecendo
2. primeiros sinais de emagrecimento (orgânicos fracos e fora do tema;
   valeram o autocompletar e o PAA)

**Formato:** Saúde Américas, Boa Forma, Rede D'Or (perda involuntária),
Engenharia do Corpo, Instagram, YouTube, Manual MSD, Cia Athletica. Na
busca 2, resultados soltos (SciELO, Tua Saúde, seguro, app). Concorrência
fraca.

**Visão de IA:** abre com "olhe além da balança", lista roupa folgada,
medidas, disposição e condicionamento, e "como acompanhar" (fita a cada 15
a 30 dias, fotos, bioimpedância). Cita Facebook, Engenharia do Corpo,
Instagram, Rede Américas, YouTube, Espaço Volpi, Cia Athletica. O lead
responde no mesmo formato, com o consenso da cintura (Ross 2020).

| sinal | onde entrou / por que ficou fora |
|---|---|
| AC "sinais de que estou/estamos emagrecendo", "primeiros sinais de emagrecimento no corpo", "primeiros sinais que estou emagrecendo"; outras "primeiros sinais de emagrecimento no corpo" | title, H1, lead e H2 "Os primeiros sinais" (5 itens) + FAQ |
| IA roupa, medidas, fotos, avaliação | itens 1 a 3 (Ross 2020) + bloco percentual-de-gordura + link bioimpedância |
| outras "como saber se estou perdendo gordura", "como saber se estou emagrecendo sem me pesar", "pela barriga" | H2 "Como saber se é gordura, e não água" + FAQ |
| PAA "Qual a primeira parte do corpo que começa a emagrecer?"; outras "o que emagrece primeiro no corpo da mulher", "no processo… o que emagrece primeiro" | H2 "O que emagrece primeiro" (Vissers 2013, Wewege 2022) + FAQ |
| PAA "É normal perder 2 kg em uma semana?", "Qual a primeira fase do emagrecimento?" | H2 próprio (Fernández-Elías 2015 + conta) + FAQ |
| PAA "É normal perder 4 kg em um mês?", "Qual a perda de peso normal por mês?" | FAQ com a conta; sem "faixa normal" (fonte oficial bloqueada) |
| PAA "Quanto tempo o corpo leva para perder 1 kg?" | H2 "Quanto tempo leva" + FAQ |
| PAA "Qual o tipo de doença que faz a pessoa perder peso rápido?"; outras "estou emagrecendo muito rápido o que pode ser / o que fazer", "emagrecimento repentino" | H2 "procure o médico" + FAQ, sem lista de doenças |
| IA "mais disposição e energia" | ✖ fora: sem fonte |
| outras "como saber se estou emagrecendo pelas fezes" | ✖ fora: sem fonte, fora do tema |
| outras busca 2: "emagrecer rápido em 1/3/7/30 dias", "quero emagrecer urgente 10 kg", "remédio", "o rosto" | ✖ fora: promessa rápida, remédio ou gordura localizada |
| outras "como emagrecer a barriga", "em casa", "exercícios para emagrecer" | ✖ fora: páginas existentes (`como-perder-barriga`, `emagrecer-sem-academia`) |

Ferramenta no corpo: `percentual-de-gordura`, depois da cintura ("com a
fita na mão"). Sem vídeo (o Short da balança já está em dois artigos).

## Buscas que ficaram de fora → pauta

- **Vale um artigo:** nenhuma nova.
- **Cabe em página existente:** "como funciona o processo de
  emagrecimento" (outras) → `deficit-calorico-como-funciona` já cobre; usar
  como FAQ na próxima revisão dela.
- **Não recomendo:** "pelas fezes" (sem fonte), "emagrecer em 3/7 dias",
  "urgente 10 kg", "remédio" (promessa rápida ou remédio).
