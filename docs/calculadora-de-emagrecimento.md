# Ferramenta: Calculadora de emagrecimento (`/ferramentas/calculadora-de-emagrecimento/`)

Publicada em 22/10/2026. Pedido do Renato depois do vídeo do simulador do
app (`2NkNKAhku9A`): uma versão do simulador no site.

## O recorte

- `/calorias/gasto-calorico-diario/` é dona de "quanto eu gasto por dia".
  Esta é dona de "em quanto tempo eu chego à meta". O motor desta importa o
  da outra (Mifflin-St Jeor × meio da faixa FAO do estilo de vida).
- `/emagrecimento/quanto-tempo-para-perder-10kg/` explica a conta e o que os
  estudos mostram; o bloco de ferramenta dele passou a apontar para cá.

## Prints (22/10, Renato) — "calculadora de emagrecimento"

Arquivos em `docs/pesquisas/2026-10-22-perder-10-kg/prints/` (10 a 13).

| tela | o que mostrou | onde entrou |
|---|---|---|
| autocompletar | gratuito · basal · **tempo de emagrecimento** · de calorias · para dieta | título ("Quanto Tempo Até a Sua Meta"); FAQs "é gratuita?" e "usa o metabolismo basal?"; "para dieta" não virou dieta — FAQ do déficit ideal manda para o nutricionista |
| visão geral de IA | TMB por Mifflin-St Jeor × fator de atividade, déficit. **Não é fonte** — o método foi conferido nas fontes da calculadora de gasto diário | — |
| PAA | como fazer o cálculo para perder peso · 5 kg em 1 mês · 7 kg em 2 meses · 500 calorias por dia | H2 "Como fazer o cálculo"; H2 "5 kg em 1 mês, 7 kg em 2 meses"; quatro FAQs com números do motor |
| outras pessoas | calculadora de calorias · déficit calórico calcular grátis · tabela de calorias por peso · calculadora de déficit calórico | aliases no catálogo; tabela de prazo por quilos × déficit |

## O motor (`src/lib/corpo/emagrecimento.ts`)

- Consumo do plano = gasto inicial − déficit (300, 500 ou 750 kcal), fixo.
- Dia a dia: gasto refeito com o peso do dia; déficit = (gasto − consumo) ×
  constância (60, 75, 90 ou 100% dos dias; fora do plano = manutenção);
  7.700 kcal por kg.
- Peso de equilíbrio = peso − déficit ÷ (10 × nível de atividade). Meta
  abaixo dele → "não chega", sem prazo inventado.
- Teto de três anos. Alertas: consumo abaixo do metabolismo de repouso;
  meta abaixo de IMC 18,5.
- `npm run test:emagrecimento` confere tudo isso, inclusive que o prazo
  simulado é sempre maior que o linear.

O "otimista" está dito na página: a conta não modela as adaptações além do
peso (Hall 2011).

## Fontes

Mifflin 1990, Frankenfield 2005, FAO/OMS/UNU 2004 e Hall 2011 (as mesmas da
calculadora de gasto diário), mais Kreitzman et al. 1992 (PMID 1615908,
conferido no Europe PMC em 22/10/2026): glicogênio com 3–4 partes de água.

## Privacidade e medição

Nada vai para a URL nem para o WhatsApp além do prazo. Eventos no dataLayer
com `tool: 'calculadora-emagrecimento'`: calculator_view, calculator_started,
calculator_completed (sexo, estilo, déficit, constância, chega, dias),
calculator_style_changed, calculator_deficit_changed,
calculator_consistency_changed. CTAs com `data-track="emagrecimento:cta-*"`.

## Regras editoriais conferidas

- Não monta dieta; consumo do resultado não é plano alimentar.
- Corte abaixo do metabolismo → nutricionista e médico.
- Gestação, amamentação, menores de 18, medicamento para emagrecer → médico.
- Dor, lesão ou condição de saúde → médico ou fisioterapeuta.
