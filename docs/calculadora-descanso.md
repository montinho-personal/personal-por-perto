# Calculadora de descanso entre séries + timer — auditoria, crítica e plano

Briefing de 05/10/2026 ("Quanto eu descanso?"). Este documento registra o que
a auditoria encontrou, o que mudou em relação ao briefing e por quê, e como o
motor decide. É a referência para mexer na ferramenta depois.

## 1. Auditoria

**O site.** Astro estático, sem framework no cliente: cada ferramenta é HTML
indexável + um script pequeno que importa um motor puro em `src/lib/`. O
padrão já está provado em 30 calculadoras (1RM, proteína, whey, as 19 de
calorias). Analytics por `dataLayer.push({ event, tool, ... })`. Catálogo em
`src/data/ferramentas.ts`, que alimenta o hub, a busca por intenção e o
"próximo passo".

**Conteúdo existente.** Já existe `/musculacao/descanso-entre-series/`
(artigo de 25/08, cinco FAQs, 15 arquivos linkam para ele, incluindo
`treinar-ate-a-falha`, `treino-de-bracos`, `treino-para-iniciantes` e o hub
de musculação). No Search Console de 30/09 ele não aparece: nenhuma consulta
de "descanso", "intervalo" ou "timer" passou do piso do export. Ou seja: a
URL existe, é bem linkada por dentro e ainda não tem tração de busca.

**Canibalização — decisão: UMA URL, a que já existe.** A consulta principal
("quanto tempo descansar entre séries") é a mesma do artigo. Uma URL nova em
`/ferramentas/` disputaria com ele, e a SERP é híbrida — matérias e
calculadoras no mesmo bloco, a mesma situação que levou a calculadora de
calorias da musculação a morar dentro do artigo (precedente registrado em
`src/data/ferramentas.ts`). Como o artigo ainda não tem tração, reescrever o
título e pôr a ferramenta no topo não arrisca nada que esteja funcionando,
e mantém os 15 links internos e a URL no sitemap. O catálogo de ferramentas
aponta para ela.

**Benchmark.**
- Calculadoras na web (hacecuentas, fitnessvolt): perguntam objetivo e %1RM
  e devolvem a tabela do ACSM de 2009. Nenhuma pergunta o exercício nem a
  proximidade da falha.
- Apps (Hevy, Fitbod, Restrr, Calmset): timer excelente, pouca ou nenhuma
  explicação, presets por objetivo ("hipertrofia 60–90 s"). Fitbod ajusta
  pela dificuldade do exercício, sem dizer como.
- SERP em português: matérias (Catraca Livre, TNH1, Olhar Digital) com a
  regra antiga dos 30–90 s, e o artigo do Paulo Gentil.
- **Lacuna:** ninguém junta conta explicada + timer + ajuste pela série
  seguinte, em português, sem instalar nada. É o diferencial.

## 2. O que a ciência sustenta (e o que não)

| fonte | o que diz | como entra no motor |
|---|---|---|
| Singer et al., 2024, *Front. Sports Act. Living* (meta-análise bayesiana, 9 estudos) | pequeno benefício de descansar **mais de 60 s** para hipertrofia; acima de **~90 s** não detectou diferença apreciável | piso de 60 s na hipertrofia; faixas largas, sem prometer que mais descanso = mais músculo |
| Schoenfeld et al., 2016, *JSCR* 30(7) | homens treinados, 8–12 RM até a falha: 3 min > 1 min em força (supino e agachamento) e espessura da coxa | compostos levados perto da falha ganham faixa maior |
| Longo et al., 2022, *JSCR* 36(6) | descanso curto com mais séries para igualar o volume deu a mesma hipertrofia do descanso longo | a tese da página: **descanso serve para proteger o desempenho**, e é por ele que se ajusta |
| Senna et al., 2016, *JSCR* 30(3) | a 3 RM, crucifixo manteve as repetições com 2 min; supino precisou de 3 min | composto e isolador recebem faixas diferentes |
| de Salles et al., 2009, *Sports Med* | com 50–90% de 1RM, 3–5 min mantiveram mais repetições e deram mais força | força em composto pesado: 3–5 min |
| Grgic et al., 2017, *Eur J Sport Sci* | possível vantagem de descansos longos em treinados; poucos estudos | reforça a cautela: faixa, não número |
| ensaio de 2024 sobre descanso autosselecionado (PMC11503322) | autosseleção funciona, com muita variação entre pessoas | o ajuste pela série seguinte |

O que **não** está no motor, de propósito:
- **Nível de experiência.** O briefing pede como "pequeno fator". Não achamos
  evidência que separe a necessidade de descanso por tempo de treino — o que
  muda é a carga absoluta, e ela já aparece no esforço da série. Uma pergunta
  a menos.
- **%1RM.** Repetições + proximidade da falha já definem a intensidade
  relativa (é exatamente o que a tabela de RIR faz). Pedir %1RM seria pedir a
  mesma coisa duas vezes. A integração com a 1RM vira link nos dois sentidos.
- **Recomendações do ACSM 2026 em minutos.** O position stand saiu em abril
  de 2026 (*MSSE*), mas os números de descanso que circulam vêm de blogs que
  divergem entre si. Sem acesso ao texto primário, a página não atribui
  minutos a ele.

## 3. Crítica ao briefing — o que mudou

1. **Quatro perguntas, não sete.** Objetivo, exercício, repetições, esforço.
   Nível e %1RM saíram (acima). Técnica (superset, drop, rest-pause) não é
   pergunta: é uma seção de conteúdo e uma nota quando a pessoa escolhe
   "condicionamento" — no MVP a ferramenta é para série convencional, e diz
   isso.
2. **O motor não é soma de oito modificadores.** Oito modificadores
   aditivos dão cara de precisão que a literatura não tem. É uma escada de
   intervalos práticos (30, 45, 60, 90, 120, 150, 180, 240, 300 s) e quatro
   ajustes inteiros nela — cada um com motivo escrito e testado.
3. **O ajuste adaptativo sabe que queda de repetição é normal.** Perto da
   falha, perder 1–2 repetições na série seguinte acontece até com 3 minutos
   (fadiga acumulada). O motor só pede mais descanso quando a queda passa
   disso, ou quando a série não estava perto da falha. E nunca diz que a
   queda foi "por causa" do descanso.
4. **Wake Lock em vez de PWA.** O problema real na academia é a tela apagar
   no meio do descanso. A Screen Wake Lock API resolve isso sem instalar
   nada (quando o navegador permite; sem ela, o tempo continua certo porque
   é calculado por timestamp). PWA fica fora até haver uso recorrente medido.
5. **Sem páginas por exercício.** As perguntas de supino, agachamento e
   bíceps entram no FAQ, calculadas pelo motor. Página própria só se o
   Search Console mostrar demanda separada.
6. **Sem CTA de WhatsApp no meio do treino.** Durante o timer, só o timer.
   O convite comercial fica no fim da página, depois do conteúdo.

## 4. O motor (`src/lib/forca/descanso.ts`)

Escada: `0:30 · 0:45 · 1:00 · 1:30 · 2:00 · 2:30 · 3:00 · 4:00 · 5:00`.

Degrau de partida pela **demanda do exercício**:
- alta (agachamento, terra, leg press, hack): 2:30
- média (supino, remadas, puxada, desenvolvimento, stiff, hip thrust…): 2:00
- localizada (rosca, tríceps, elevação lateral, extensora, flexora…): 1:00

Ajustes, em degraus:
- repetições: 1–5 sobe 1; 6–12 fica; 13–20 desce 1; mais de 20 desce 2
- esforço: longe da falha desce 2; moderado desce 1; perto fica; falha sobe 1
- objetivo: força sobe 1; resistência e condicionamento descem 2; hipertrofia fica

Largura da faixa: dois degraus em composto, um em localizado. Pisos e
tetos: hipertrofia nunca abaixo de 1:00 (Singer, 2024); teto de 5:00.
O ponto de partida do timer é o degrau do meio.

Ajuste pela série seguinte: manteve → mantém; "descansei demais" → desce um
degrau (sem passar do piso); perdeu 1–2 → mantém se a série foi perto da
falha, sobe um degrau se não foi; perdeu 3+ → sobe dois; reduziu a carga →
sobe dois e avisa que a comparação muda. Duas subidas seguidas com queda →
avisa que pode ser fadiga acumulada, não só descanso.

## 5. Timer

- Tempo por **timestamp** (`fim = agora + restante`), recalculado a cada
  250 ms e no `visibilitychange`: trocar de app ou bloquear a tela não
  atrasa o relógio.
- Estado em `sessionStorage`: recarregar a página no meio do descanso volta
  ao timer certo.
- Wake Lock quando disponível; vibração no fim; som só se a pessoa ligar
  (o áudio nasce do toque no botão, nunca sozinho).
- Leitor de tela: o número grande não é anunciado; uma região `aria-live`
  avisa 1 minuto, 30 segundos, 10 segundos e o fim.
- O título da aba mostra o tempo restante.

## 6. Dados e privacidade

Nada sai do aparelho além de eventos categóricos no `dataLayer`
(objetivo, tipo de exercício, faixa de repetições, faixa de esforço, faixa do
resultado). Carga e repetições anotadas ficam no `sessionStorage`; os
últimos descansos por exercício, no `localStorage`, apagáveis por um botão.

Eventos: `rest_calculator_view`, `rest_calculator_start`,
`rest_goal_selected`, `rest_exercise_selected`, `rest_reps_selected`,
`rest_effort_selected`, `rest_result_generated`, `rest_timer_started`,
`rest_timer_completed`, `rest_timer_extended`, `rest_timer_reduced`,
`rest_next_set_feedback`, `rest_recommendation_adjusted`,
`rest_tool_shared`, `rest_related_tool_clicked`, `rest_find_personal_clicked`.

## 7. Fases

- **Fase 1 (entregue):** quatro perguntas, faixa com explicação, timer.
- **Fase 2 (entregue):** registro da série, ajuste pela série seguinte,
  histórico da sessão.
- **Fase 3 (parcial):** "continuar de onde parou" com os últimos exercícios
  e descansos. Favoritos completos, PWA e páginas por exercício ficam para
  quando houver dado de uso.

## 8. Como medir em 30 dias

Funil no GA4: view → start → result → timer_started → timer_completed →
next_set_feedback → segundo timer. A métrica que diz se virou produto é o
**retorno em outro dia** (mesmo navegador com exercício salvo). Linha de
base no Search Console: a URL não aparecia no export de 30/09.
