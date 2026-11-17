# Artigo: Cansaço depois do treino (`/musculacao/cansaco-depois-do-treino/`)

Item 5 da pauta (parte 1). Pedido do Renato em 17/11/2026 ("pode criar 1 e
2"). Pesquisa no SerpApi antes do texto (celular, São Paulo).

Recorte: `dor-muscular-pos-treino` = a dor dos dias seguintes (linkada);
aqui = cansaço e fadiga. O site não tinha página de overtraining: entrou
como seção. Saúde: sinais de alarme mandam para o médico.

## Buscas (SerpApi, 17/11/2026)

JSON em `docs/pesquisas/2026-11-17-cansaco-depois-do-treino/1.json` e `2.json`:
1. cansaço depois do treino
2. é normal ficar cansado depois do treino

**Formato:** Terra, UOL VivaBem, GZH, O Povo, Estado de Minas, YoPro,
Ocean Drop, Einstein (overtraining), Alice, médico (Vinícius Andrade),
Reddit, Facebook e fórum Bastter. Concorrência média-fraca.

**Visão de IA:** busca 2 abre com "sim, é normal… de 1 a 2 horas" e lista
causas (alimentação, desidratação, sono, overtraining) e quando procurar
ajuda (dor no peito, falta de ar, tontura, dor > 72 h). Busca 1 define
fadiga e cita microlesões, nutrientes, overtraining e "recovery". Cita
Clínica Pace, Bodytech, Bluefit, Terra, Ocean Drop, Einstein, Vinícius
Andrade, GZH, Abril, Reddit. O lead responde do mesmo jeito, sem a duração
"1 a 2 horas" (sem fonte).

| sinal | onde entrou / por que ficou fora |
|---|---|
| AC "é normal", "muito cansaço", "excessivo", "extremo", "sentir muito cansaço", "depois da academia/musculação"; PAA (busca 2) | title, H1, lead, H2 "Quando é normal" e "Causas do cansaço excessivo" + FAQ |
| IA causas (alimentação, desidratação, sono, overtraining) | 5 causas: Meeusen 2013 (déficit de energia, carboidrato, proteína, ferro), ACSM 2007 (>2% do peso em água), Nedeltcheva 2010 |
| AC "cansaço e sono depois do treino"; outras "sono excessivo após treino", "sono pós treino hipertrofia"; PAA "É bom dormir após o treino?"; outras "dormir depois do treino engorda", "é bom dormir depois do treino" | H2 "Sono depois do treino: é bom dormir? Engorda?" + 2 FAQs |
| PAA "O que é bom para repor energia depois do treino?" | H2 "Como diminuir" + FAQ (ISSN 2017) |
| outras "como diminuir o cansaço pós treino" | H2 "Como diminuir" + FAQ + bloco rotina |
| outras "overtraining sintomas", "overtraining o que fazer", "sintomas de excesso de exercício", "cansaço excessivo após atividade física" | H2 "Overtraining" (Meeusen 2013: 3 estágios, diagnóstico por exclusão) + FAQ |
| outras "overtraining sintomas febre" | FAQ "Overtraining dá febre?" → febre é sinal de doença, médico |
| IA "quando procurar ajuda" | H2 "Quando procurar o médico" |
| IA "dura de 1 a 2 horas", "24 a 48 h por músculo", "7 a 8 h de sono", "crioterapia, liberação miofascial" | ✖ fora: IA não é fonte; sem estudo conferido |
| AC "cansaço nas pernas depois do treino" | ✖ fora como seção; ver pauta |
| PAA "Quais são os sinais de que a academia está fazendo efeito?", "sinais de que o treino foi bom" | ✖ fora: outro assunto (já anotado na pauta para `dor-muscular-pos-treino`) |
| PAA "Quantas vezes é o ideal fazer academia por semana?" | ✖ fora: `frequencia-de-treino` cobre (linkado) |
| PAA "Cardio em jejum queima mais gordura?" | ✖ fora: `aerobico-em-jejum` cobre |
| PAA "É possível treinar com dor muscular para hipertrofia?" | ✖ fora: `dor-muscular-pos-treino` cobre ("Posso treinar com dor?") |
| outras "sono durante o treino de musculação", "bocejar durante o treino é normal" | ✖ fora: sem fonte |

Ferramenta no corpo: `rotina`, na causa "Treino acima da recuperação"
("montar a semana com descanso"). Sem vídeo (nenhum Short livre do tema).

## Buscas que ficaram de fora → pauta

- **Vale um artigo:** nenhuma nova ("cardio em jejum queima mais gordura?"
  já tem página: `aerobico-em-jejum`).
- **Cabe em página existente:** "cansaço nas pernas depois do treino" →
  FAQ em `treino-de-pernas`, na próxima revisão dela.
- **Não recomendo:** "bocejar durante o treino", "sono durante o treino"
  (sem fonte).
