# Artigo: Caminhada emagrece? (`caminhada-emagrece`)

Item do bloco Emagrecimento da pauta. Em produção desde 21/10/2026.

## Prints recebidos

Arquivos em `docs/pesquisas/2026-10-21-caminhada-emagrece/prints/`.

### 21/10 — "caminhada emagrece" (5 imagens)

| tela | o que mostrou |
|---|---|
| autocompletar (01) | em quanto tempo · ou não · mais que corrida · mesmo · a barriga · o corpo todo · quantos quilos por semana · rápido |
| visão geral de IA (02) | "Sim, caminhar emagrece" pelo déficit; 30 a 60 min, 3 a 5 vezes por semana; ritmo que deixa levemente ofegante mas capaz de falar; subidas/inclinação; constância. **Não é fonte** — só mostra o que o leitor já leu antes de chegar |
| PAA (03) | Quantos minutos de caminhada por dia para perder peso? · É possível perder 5 kg em 1 semana? · É possível perder barriga com caminhada? · O que acontece com o corpo se caminhar todos os dias? |
| Outras pessoas (04, 05) | na esteira · quantos quilos por semana · quanto tempo para emagrecer 1 kg · a barriga · tabela de caminhada para emagrecer · 30 minutos emagrece; quanto tempo para emagrecer 10 kg · caminhar 5 km por dia emagrece quanto em um mês · 20 benefícios da caminhada · 1 hora de caminhada emagrece · em quanto tempo · caminhar 1 hora por dia emagrece quantos quilos |

Leitura: a busca é de **número** — minutos por dia, quilos por semana/mês,
tempo para 1 kg, 10 kg e 5 km. O artigo precisa de uma conta honesta
(gasto da caminhada ÷ ~7.700 kcal por kg de gordura, com a ressalva de que
o corpo compensa) e de uma tabela por peso e duração. "5 kg em 1 semana"
pede resposta direta de que não é perda de gordura. "Mais que corrida"
pede comparação. A calculadora `/calorias/caminhada/` faz a conta
individual — candidata a ferramenta no corpo.

### 21/10 — "quanto tempo de caminhada para emagrecer" (5 imagens)

| tela | o que mostrou |
|---|---|
| autocompletar (06) | 1 kg · 1 kg por semana · 10 kg · por dia · 1 kg por dia · 5 kg · na esteira |
| visão geral de IA (07) | 30 a 60 min/dia, 4 a 5 vezes por semana ("150 a 300 minutos semanais"); ritmo de 4 a 6 km/h, "respira mais rápido mas ainda consegue conversar"; "primeiros resultados visíveis em 2 a 4 semanas". **Não é fonte.** O 150–300 min bate com a OMS 2020 (a conferir na fonte); "2 a 4 semanas" não tem base a verificar e não entra como promessa |
| PAA (08) | Quanto tempo caminhar para perder 1 kg? · É possível emagrecer só com caminhada? · Quanto tempo de caminhada o corpo começa a queimar gordura? · Quantos quilos eu perco caminhando 30 minutos por dia? |
| Outras pessoas (09, 10) | caminhar 30 min por dia emagrece quantos quilos · 5 km por dia quanto em um mês · 1 kg por semana · 10 kg · tabela · 30 min por dia emagrece; 30 minutos de caminhada são quantos km · caminhar emagrece a barriga · 1 hora por dia quantos quilos · **3 km por dia** · **2 horas por dia** · **melhor horário** para caminhada |

Leitura: confirma o eixo do primeiro bloco e acrescenta três perguntas
próprias: "1 kg por dia" (resposta direta: não é gordura), "quanto tempo
o corpo começa a queimar gordura" (mito dos "20 minutos" — a gordura é
usada desde o início; responder com fonte) e "só com caminhada" (sem
déficit alimentar, a compensação come o resultado). "30 minutos são
quantos km" entra como conversão simples pela velocidade. "Melhor
horário" pede resposta curta: o que vale é o horário que se mantém.

### 21/10 — "caminhada emagrece a barriga" (5 imagens)

| tela | o que mostrou |
|---|---|
| autocompletar (11) | perder barriga · 15 dias · em 7 dias · 30 dias |
| visão geral de IA (12) | "ajuda, mas só acelerada e com déficit"; "não queima gordura localizada"; 30 a 50 min queimam 200 a 500 kcal; "reduz o cortisol". **Não é fonte.** O cortisol não entrou (sem estudo lido que sustente a ligação caminhada → cortisol → barriga) |
| PAA (13) | Quanto tempo devo caminhar para perder a barriga? · Caminhar tira pochete? · Quantos dias a caminhada começa a fazer efeito? · 20 minutos por dia são suficientes? |
| Outras pessoas (14, 15) | caminhada todos os dias engrossa as pernas · caminhar todos os dias emagrece · 1 hora quantos quilos · define o corpo · 3 km · benefícios para o corpo feminino; 21 dias para perder barriga · 1 kg · 30 min quantos quilos · tabela · 20 benefícios · caminhada em casa para perder barriga |

## O recorte

- `/calorias/caminhada/` é dona de "quantas calorias gasta". Este artigo é
  dono de "emagrece? quanto, em quilos e em tempo". A tabela usa o mesmo
  motor (`lib/calorias/caminhada.ts`), pelo gasto **líquido**, e o bloco
  de ferramenta manda para a calculadora.
- `/emagrecimento/como-perder-barriga/` e `/gordura-visceral/` ficam com o
  aprofundamento da barriga; aqui só a resposta e o link.
- `/emagrecimento/quantos-passos-por-dia/` fica com a meta em passos.

## Onde cada intenção entrou

| intenção | onde |
|---|---|
| emagrece mesmo / ou não | H2 1 + FAQ (Murphy 2007, ACSM 2009) |
| quantos minutos por dia / 20 min / 30 min | H2 2 + FAQ (OMS 150–300; ACSM >250) |
| quantos quilos por mês/semana (30 min, 1 h, 3 km, 5 km, 2 h) | H2 3 com tabela por peso + FAQs |
| quanto tempo para 1 kg, 10 kg, 5 kg | H2 4 + FAQ |
| 1 kg por dia, 5 kg em 1 semana | H2 5 + FAQ |
| barriga, pochete, 7/15/21/30 dias | H2 6 + FAQ (Vispute 2011, Verheggen 2016) |
| quando começa a queimar gordura / quantos dias faz efeito | H2 7 + FAQ (Romijn 1993) |
| mais que corrida | H2 8 + FAQ (Williams 2013) |
| na esteira, inclinação, ritmo, 30 min são quantos km, melhor horário | H2 9 + FAQs |
| só com caminhada | H2 3 + FAQ (Thomas 2012) |

**Não entraram:** "engrossa as pernas" e "define o corpo" (sem fonte lida
que responda; ficam para revisão), "caminhada em casa" (vídeo; outra
intenção), "20 benefícios" (lista genérica, fora do recorte de
emagrecimento), cortisol (ver acima), "primeiros resultados em 2 a 4
semanas" (visão geral de IA, sem fonte).

## Fontes (resumos lidos no Europe PMC em 21/10/2026)

- OMS 2020 (PMC7719906): 150–300 min/semana moderados.
- Donnelly et al. 2009, ACSM (PMID 19127177): 150–250 min/semana = perda
  modesta; >250 = clinicamente relevante; 150–250 melhora com restrição
  moderada.
- Murphy et al. 2007 (PMID 17275896): 24 ECRs; caminhada reduz peso, IMC
  e % de gordura em sedentários. O texto completo não abriu; nenhum
  número de efeito foi citado.
- Thomas et al. 2012 (PMC3771367): perda menor que a prevista por dose
  baixa e aumento da ingestão.
- Hall et al. 2011 (PMID 21872751): 7.700 kcal/kg superestima no tempo.
- Verheggen et al. 2016 (PMID 27213481): 117 estudos; sem perda de peso,
  exercício −6,1% de gordura visceral, dieta −1,1%.
- Vispute et al. 2011 (PMID 21804427): 6 semanas de abdominal, sem
  redução de gordura abdominal.
- Romijn et al. 1993 (PMID 8214047): lipólise periférica máxima na menor
  intensidade.
- Williams 2013 (PMC4067491): 15.237 caminhantes e 32.216 corredores, 6,2
  anos; corrida mais associada a perda de peso.
- Compêndio 2024: METs da caminhada (via `lib/calorias/caminhada.ts`).

Observação: Brobakken et al. 2023 (PMC10680576) encontrou pequena redução
localizada de gordura do tronco com exercício abdominal de resistência
aeróbia em 16 homens. Não muda a resposta para a caminhada; registrado
para a revisão de `como-perder-barriga`.
