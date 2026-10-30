# Relatórios — arquivo e comparação

Todo relatório de Search Console ou Analytics enviado pelo Renato entra
aqui, com a data no nome da pasta. O motivo é simples: número solto não diz
nada. "460 cliques" só vira informação quando existe um "180 cliques" de
dois meses antes ao lado.

## Como arquivar

Pasta por data e origem: `AAAA-MM-DD-gsc/` ou `AAAA-MM-DD-ga4/`, com os
arquivos originais dentro, sem renomear além de tirar o prefixo do upload.
Depois, registrar os números-chave na tabela deste arquivo — para que uma
comparação futura não dependa de reabrir planilha.

## O que conferir no PRÓXIMO relatório

**Respondidas no relatório de 30/09/2026** (seção "Desempenho — Search
Console, 01/06 a 29/09/2026"): a fatia sem barra encolheu, a posição das
cidades grandes na consulta quase não se moveu e a inversão de CTR persiste.
A lista do que conferir no próximo relatório está no fim daquela seção.

Três medidas que a análise de `docs/cidades-analise.md` deixou em aberto e
que só o relatório seguinte responde:

1. **A fatia de impressões em URL sem barra final.** Na linha de base são
   5.577 de 28.084 (20%), em 111 páginas contadas nas duas formas. O
   `trailingSlash` entrou em 24/08/2026, no fim do período — se a fatia
   encolher, a consolidação está acontecendo e não há nada a fazer; se não
   encolher, existe problema no redirect.
2. **A posição das cidades grandes NA CONSULTA, não na página.** Belo
   Horizonte tem posição 10,4 na aba Páginas e 26,5 na consulta "personal
   trainer belo horizonte". A segunda é a que diagnostica; a primeira engana.
3. **CTR por faixa de cidade.** Na linha de base: 1,24% nas 20 maiores,
   3,58% nas 630 menores. Se a inversão persistir, ela é estrutural e não
   ruído.

## Linha de base — Search Console, 28/06 a 31/08/2026 (65 dias)

Arquivos: `2026-09-01-gsc/`

| métrica | valor |
|---|---|
| Cliques | 460 |
| Impressões | 27.931 |
| CTR médio | 1,65% |
| Consultas distintas | 891 |
| Páginas com impressão | 1.000 (teto do export) |

Último dia do período (31/08), para comparar velocidade e não só volume:

| | cliques | impressões | CTR | posição |
|---|---|---|---|---|
| 29/08 | 7 | 626 | 1,12% | 10,5 |
| 30/08 | 8 | 630 | 1,27% | 10,2 |
| 31/08 | 22 | 1.060 | 2,08% | 8,2 |

Por dispositivo:

| | cliques | impressões | CTR | posição |
|---|---|---|---|---|
| Celular | 376 | 20.744 | 1,81% | 8,73 |
| Computador | 82 | 7.093 | 1,16% | 14,58 |
| Tablet | 2 | 94 | 2,13% | 8,24 |

Páginas de topo:

1. `/mounjaro-e-treino/fraqueza-para-treinar` — 14 cliques, 1.643 impressões
2. `/personal-trainer/salvador-ba/` — 11 cliques, 600 impressões
3. `/personal-trainer/joao-pessoa-pb/` — 9 + 8 cliques (duas versões da URL)
4. `/personal-trainer/uberlandia-mg/` — 9 cliques, 217 impressões

Consulta de topo: `personal trainer` — 2.577 impressões, 10 cliques, posição
10,31. Muita impressão e pouco clique é o padrão de quem aparece na segunda
página: o ganho aqui vem de posição, não de título.

Duas observações que valem para a próxima leitura:

- **João Pessoa aparece duas vezes**, com e sem barra final. É resíduo da
  consolidação de URLs de 24/08 (commit `7149cab`); tende a se resolver
  sozinho conforme o Google reprocessa.
- **Celular é 82% dos cliques.** Qualquer decisão de layout que pese
  desktop contra mobile já tem resposta.

## Desempenho — Search Console, 24/06 a 12/09/2026 (77 dias)

Arquivos: `2026-09-12-gsc-desempenho/`.

### O site está crescendo, e rápido

| janela | dias | cliques/dia | impressões/dia | CTR |
|---|---|---|---|---|
| até 31/08 (base anterior) | 65 | 7,1 | 431 | 1,64% |
| 01/09 a 12/09 | 12 | **11,1** | **942** | 1,18% |

Cliques por dia **+56%**, impressões por dia **+119%**. O CTR caiu de 1,64%
para 1,18%, e a explicação provável é aritmética, não piora: impressões novas
entram por páginas recém-descobertas, que aparecem em posições baixas e quase
não recebem clique. Diluição de CTR por expansão é o padrão esperado de quem
está sendo indexado em volume — o relatório de cobertura de 11/09 mostra
exatamente isso, 146 páginas indexadas em junho contra 1.172 em setembro.

Totais do período: **593 cliques, 39.290 impressões, CTR 1,51%**.

Celular segue dominante: 487 cliques de 593 (82%), posição média 8,58 contra
12,88 no computador.

### As três perguntas que este relatório respondeu

**1. Os 12 artigos reescritos se moveram?** Quatro sim, oito não. E "não" aqui
quer dizer literalmente zero impressão nova em 12 dias.

| artigo | posição | impressões |
|---|---|---|
| `elevacao-frontal-como-fazer` | 20,3 → **16,6** | 16 → 24 |
| `treino-de-posterior-de-coxa` | 39,2 → **37,2** | 17 → 18 |
| `treino-para-iniciantes` | 32,7 → **31,0** | 93 → 100 |
| `rosca-martelo-como-fazer` | 20,4 → **19,2** | 28 → 31 |
| os outros 8 | sem mudança | sem impressão nova |

**Cliques somados dos 12: zero.** Movimentos de +1 a +8 impressões são ruído,
e três dos oito parados foram republicados há um ou dois dias. A leitura
honesta é que ainda não dá para ler: o próximo relatório é que responde.

**2. Os 20 artigos novos estão vivos?** Nenhum dos 20 aparece no export — mas
isso **não significa zero impressão**. A aba Páginas tem exatamente 1.000
linhas (o teto) e o piso é de 2 impressões, então o que se pode afirmar é que
nenhum deles passou de ~2 impressões. Com 1 a 10 dias de publicado, isso é
cedo demais para ser sinal de qualquer coisa.

**3. A fila de reescritas tem sucessor?** Quase não. Com o mesmo critério (10+
impressões e posição pior que 20), sobraram **dois** artigos — e um deles já
estava marcado para tratamento manual.

### A fatia de URL sem barra final CRESCEU

A pendência registrada na leitura anterior era esta, e a resposta é
desconfortável: 111 páginas aparecem nas duas formas de URL, e **30% das
impressões** estão na versão sem barra, contra 20% na base anterior.

A configuração está correta — `vercel.json` com `"trailingSlash": true` e
Astro com `trailingSlash: 'always'` —, e o relatório de cobertura confirma que
o Google encontra a canônica (202 páginas em "alternativa com tag canônica
adequada"). Então não é redirect quebrado: é o Google continuando a exibir a
URL antiga no resultado, três semanas depois da consolidação.

**Ressalva de método:** os dois percentuais vêm de exports com janelas
diferentes, ambos limitados a 1.000 linhas, então não são estritamente
comparáveis. O que é robusto, dentro deste export sozinho: 111 páginas
duplicadas e 30% das impressões na forma antiga. Vale reconferir no próximo,
e só tratar como problema se continuar subindo.

### Bairros: cedo demais

| | base 11/09 | 12/09 |
|---|---|---|
| páginas na exportação | 58 | 59 |
| cliques | 24 | 25 |
| impressões | 702 | 740 |
| CTR | 3,42% | 3,38% |
| posição | 9,45 | 9,38 |

A arquitetura de links e os metadados do piloto entraram em 11/09 — um dia
antes do fim deste período. Não há nada a ler aqui, e a data marcada continua
sendo 02/10.

## Desempenho — Search Console, 28/06 a 27/10/2026 — e o balanço das alterações

Arquivos: `2026-10-27-gsc-desempenho/` (export acumulado do Renato). Os
cortes por página e por consulta, antes × depois de cada alteração, foram
puxados pelo Supermetrics (GSC), em janelas da mesma página, e comparados
**por dia** (as janelas têm tamanhos diferentes). Os dois últimos dias
(25–26/10) ainda podem subir no GSC.

Totais: **1.241 cliques, 115.476 impressões, CTR 1,07%** (eram 1.154 /
105.190 / 1,10% em 22/10). Janela nova, 22 a 26/10: **15,8 cliques/dia,
2.023 impressões/dia**, CTR 0,78%, posição 7,9 — no mesmo patamar da
janela 13–21/10 (17,3 / 2.218): o pico da HYROX passou e o site segurou.

### Balanço das alterações anotadas para medir (dias até 27/10)

| alteração | data | dias | antes → depois (por dia ou posição) | leitura |
|---|---|---|---|---|
| **Quanto custa personal trainer** (tratamento manual + prints) | 14/09 e 05/10 | 43 e 22 | "personal trainer preço" **63,5 → 14,3**; "quanto custa um personal trainer" **40,8 → 10,8**; "… por mês" 46 → **8,1** (170 impr.); página 0,8 → **0,8 cliques/dia**, 15 → **146 impr./dia** | **melhorou muito** — a melhor alteração do período; ainda converte pouco (CTR 0,6%) |
| Fila 1 de reescritas (13 artigos de musculação/emagrecimento) | 03 a 11/09 | 46–54 | as impressões em posição 40–80 **sumiram na semana 35 (fim de agosto), antes das reescritas**; o que ficou subiu para posição 7–10 (elevação frontal 23,5 → 8,4; encolhimento 24,8 → 7,5; tríceps testa 25,7 → 9,1) | **inconclusivo**: a queda de volume não é das reescritas; as que ficaram rankeiam melhor, mas com 1–2 impr./dia |
| Pullover | 13/09 | 44 | 1,5 → 0,1 impr./dia (mesmo padrão: posição 18,9 → 6,5) | inconclusivo |
| 10 páginas da região (Alphaville, Tamboré, Barueri…) por prints | 30/09 | 27 | 7 → **14 impr./dia**; 0,14 → 0,16 cliques/dia | impressão **dobrou**; clique igual; Tamboré/Santana seguem com o problema de indexação (`docs/indexacao-analise.md`) |
| ~50 cidades com prints (capitais e médias) | 30/09 a 08/10 | 19–27 | **4,5 → 4,5 cliques/dia**; 416 → 397 impr./dia | **seguraram**; as cidades **sem** alteração caíram de 6,1 → 3,3 cliques/dia no mesmo período — vantagem relativa clara, sem prova de causa |
| Palhoça (consultoria online) | 30/09 | 27 | zero clique, consulta perdeu volume (já lido em 22/10) | **não funcionou** — encerrado |
| Calculadoras de calorias pelos prints (escada, natação, corda, musculação, corrida, vôlei, caminhada, futebol, bicicleta, dança) | 05 e 06/10 | 21–22 | grupo /calorias/: 8 → 2 cliques/semana; impressões estáveis (~3 mil/semana); posição 7,0 → 7,7. Por página: **corda 20 → 143 impr./dia**, vôlei 6 → 33, bicicleta 6 → 36; escada 61 → 33, natação 38 → 14 | **misto**: corda, vôlei e bicicleta subiram muito; escada, natação, corrida e lutas caíram na semana 42 e voltaram só em parte na 43 — cedo para fechar |
| Lutas (muay thai) | 08/10 | 19 | 22 → 4 impr./dia; 4 → 0 cliques | **piorou** — vigiar; a queda veio com a do grupo na semana 42 |
| Personal trainer a domicílio | 08/10 | 19 | 1,4 → 1,3 impr./dia; posição 6,8 → 6,4 | estável |

**O que não dá para medir aqui:** o bloco de ferramenta nos artigos
(desde 02/09) e os links em palavra (24/09 e 06/10) — o efeito é clique
para a ferramenta, que é GA4 (`artigo:ferramenta-inline`), não Search
Console. As páginas novas de 20 a 27/10 (artigos, Hyrox, bairros, cidades)
não têm "antes".

### O que conferir no próximo relatório

1. **Grupo /calorias/** — se escada, natação, corrida e lutas voltam ao
   patamar de setembro; se não voltarem, rever o título novo de cada uma.
2. **Quanto custa** — se a posição boa vira clique (CTR ainda 0,6%).
3. **Cidades com prints × sem** — se a diferença de 30/09–08/10 se mantém.
4. Os da lista de 22/10 seguem valendo (Salvador e Porto Alegre, bairros,
   `fraqueza-para-treinar`, queda pós-HYROX).

## Desempenho — Search Console, 28/06 a 22/10/2026

Arquivos: `2026-10-22-gsc-desempenho/` (export original e
`paginas-por-cidade.json` regenerado desta aba Páginas — `audit:academias` e
`audit:capas` passam a ordenar as filas por este relatório).

Export **acumulado**, como o de 30/09. Comparação pelo gráfico diário e pela
diferença página a página entre os dois exports (≈ 30/09 a 22/10). O teto de
1.000 linhas da aba Páginas cortou mais cidades desta vez (623 contra 665),
então a diferença por página **subestima** as cidades; o gráfico é a medida
confiável.

Totais: **1.154 cliques, 105.190 impressões, CTR 1,10%** (eram 846 / 61.309 /
1,38% em 30/09).

### Impressões quase dobraram; cliques voltaram a crescer depois de um vale

| janela | dias | cliques/dia | impressões/dia | CTR | posição |
|---|---|---|---|---|---|
| até 31/08 | 65 | 7,1 | 431 | 1,64% | 10,2 |
| 01/09 a 12/09 | 12 | 12,3 | 1.010 | 1,22% | 8,6 |
| 13/09 a 28/09 | 16 | 14,9 | 1.284 | 1,16% | 7,9 |
| 29/09 a 12/10 | 14 | **10,9** | 1.726 | 0,63% | 8,1 |
| 13/10 a 21/10 | 9 | **17,3** | **2.218** | 0,78% | 7,8 |

22/10 ficou de fora (dia parcial: 415 impressões, 0 clique).

Leitura: impressões por dia **+73%** sobre a janela de 13–28/09; cliques por
dia caíram 27% na primeira metade de outubro e voltaram acima do patamar
anterior na segunda (**+16%**). O CTR despencou para 0,6–0,8% porque o
crescimento veio de páginas de baixo CTR, não porque as cidades pioraram:
na diferença entre exports, **31.425 das ~44 mil impressões novas são de
artigos, guias e calculadoras (CTR 0,34%)**. O guia da HYROX São Paulo
(3.119 impressões, 44 cliques) é a página com mais cliques do acumulado — e
é de evento, sazonal.

Celular: 935 de 1.154 cliques (81%), posição 8,0 contra 11,1 no computador —
estável.

### Por tipo de página (≈ 30/09 a 22/10, diferença entre exports)

| tipo | cliques | impressões | CTR |
|---|---|---|---|
| cidade | 180 | 11.811 | 1,52% |
| bairro | 17 | 432 | **3,94%** |
| estado | 3 | 499 | 0,60% |
| artigos, guias, ferramentas | 108 | 31.425 | 0,34% |

Bairro segue com o melhor CTR do site e pouca impressão. Tijuca (165 imp,
6 cl), Barra da Tijuca (152), Cidade Nova/BH (102) e Buritis (49, 3 cl)
lideram o acumulado. As levas de 21 e 22/10 ainda não aparecem.

### As medidas recorrentes

**URL sem barra:** 12,8% do acumulado (13.451 de 104.744), contra 21,5% em
30/09 — segue encolhendo. Exceção a vigiar: `/mounjaro-e-treino/fraqueza-para-treinar`
sem barra ainda soma 3.239 impressões no acumulado, quase o mesmo que a
versão com barra.

**Posição das cidades grandes NA CONSULTA:**

| consulta | 01/09 | 30/09 | 22/10 |
|---|---|---|---|
| personal trainer belo horizonte | 26,5 | 25,1 | 25,1 |
| personal trainer porto alegre | 29,2 | 26,0 | **22,0** |
| personal trainer salvador | 40,3 | 28,8 | **21,4** |
| personal trainer curitiba | 42,4 | 40,2 | 39,3 |
| personal trainer sao paulo | 26,2 | 34,5 | 34,5 |

Salvador e Porto Alegre — as duas cidades que mais receberam bairros —
subiram; as outras, paradas. É correlação, não prova, mas é a primeira vez
que a posição na consulta se move de verdade.

**CTR por faixa de cidade — a inversão continua:** as 20 maiores 1,10%;
21ª à 100ª 1,99%; as outras 503 3,46%.

### Palhoça: a troca de 30/09 não converteu

"consultoria online musculacao palhoca": 276 impressões no acumulado (eram
250), posição 7,3 (era 7,5), **zero clique**. Em três semanas, só 26
impressões novas e nenhum clique depois da troca de título, descrição e FAQ.
A consulta perdeu volume; não vale mais mexer nela.

### O que mudou desde 30/09, em uma linha

O site cresceu em impressão por calculadoras e artigos (corda, escada,
passos, natação, Mounjaro) e por um evento (HYROX); as cidades seguem
trazendo a maioria dos cliques; bairros convertem melhor que tudo, mas ainda
são pequenos; e duas cidades grandes começaram a subir na consulta principal.

### O que conferir no próximo relatório

1. **Salvador e Porto Alegre** — se a subida na consulta se mantém.
2. **Bairros das levas 4 a 7** (21–22/10) — impressão própria e CTR.
3. **`fraqueza-para-treinar` sem barra** — se a versão sem barra some.
4. **HYROX** — a queda depois do evento, para não ler sazonalidade como
   tendência.

## Desempenho — Search Console, 01/06 a 29/09/2026

Arquivos: `2026-09-30-gsc-desempenho/`. Estratégia tirada dele em
`docs/seo-local-estrategia.md`.

`paginas-por-cidade.json` foi gerado da aba Páginas (URLs com e sem barra
somadas) para que `audit:academias` e `audit:capas` ordenem a fila pela
demanda deste relatório, e não mais pela de 01/09.

O export é **acumulado** (o site só tem impressão a partir de 28/06), então
a comparação com o de 12/09 é feita de dois jeitos: pelo gráfico diário, que
separa as janelas, e pela diferença página a página entre os dois exports,
que isola aproximadamente 13/09 a 29/09.

Totais: **846 cliques, 61.309 impressões, CTR 1,38%**.

### Continua crescendo, no mesmo ritmo de antes

| janela | dias | cliques/dia | impressões/dia | CTR | posição |
|---|---|---|---|---|---|
| até 31/08 | 65 | 7,1 | 431 | 1,64% | 10,2 |
| 01/09 a 12/09 | 12 | 12,3 | 1.010 | 1,22% | 8,6 |
| 13/09 a 28/09 | 16 | **14,8** | **1.283** | 1,15% | 7,9 |

29/09 ficou de fora da última linha: é o dia parcial do export (666
impressões, 1 clique). A janela 01–12/09 aparece aqui um pouco maior do que
no relatório de 12/09 (11,1 cliques/dia, 942 impressões/dia) porque o Search
Console consolida os últimos dias depois — o número novo é o que vale.

Leitura: cliques por dia **+20%** e impressões por dia **+27%** sobre a
janela anterior. O CTR segue caindo devagar (1,22% → 1,15%) com a posição
melhorando (8,6 → 7,9) — o mesmo padrão de diluição por páginas novas
descrito no relatório de 12/09, não piora.

Celular: 690 de 846 cliques (82%), posição 8,2 contra 11,8 no computador.

### Por tipo de página

| tipo | cliques | impressões | CTR | posição | só 13/09–29/09 |
|---|---|---|---|---|---|
| cidade | 705 | 37.518 | 1,88% | 8,7 | 186 cl / 10.043 imp (1,85%) |
| bairro | 35 | 1.132 | 3,09% | 8,6 | 10 cl / 410 imp (2,44%) |
| estado | 14 | 1.237 | 1,13% | 10,0 | — |
| artigos, guias, ferramentas | 93 | 21.088 | 0,44% | 10,1 | — |

Cidade continua sendo o motor: 83% dos cliques do site.

### As três perguntas que estavam pendentes — respondidas

**1. URL sem barra final: resolvido.** A fatia caiu de 30,3% para 21,5% no
acumulado, e dentro da janela nova é de só **~5,5%** (1.199 de 21.617
impressões). A consolidação está acontecendo; não há nada a fazer.

**2. Posição das cidades grandes NA CONSULTA:** quase parada, ainda na
página 3.

| consulta | base 01/09 | 30/09 |
|---|---|---|
| personal trainer belo horizonte | 26,5 | 25,1 |
| personal trainer porto alegre | 29,2 | 26,0 |
| personal trainer salvador | 40,3 | 28,8 |
| personal trainer curitiba | 42,4 | 40,2 |
| personal trainer sao paulo | 26,2 | 34,5 |

**3. CTR por faixa de cidade: a inversão persiste — é estrutural.**

| faixa | acumulado | só a janela nova |
|---|---|---|
| as 20 maiores | 1,11% | 0,98% |
| 21ª à 100ª | 2,08% | 2,91% |
| as outras 565 | 3,47% | 3,07% |

### Consultas locais

227 das 1.000 consultas citam cidade ou bairro, somando **1.919
impressões** (3% do site). O resto do tráfego das cidades vem de consultas
que o Search Console anonimiza.

| intenção | consultas | impressões | cliques | posição |
|---|---|---|---|---|
| "personal trainer + cidade" | 166 | 1.141 | 27 | **17,9** |
| preço + cidade | 33 | 409 | 6 | **11,1** |
| consultoria online + cidade | 1 | 250 | 0 | 7,5 |
| academia + cidade | 25 | 110 | 0 | 14,2 |

A página de cidade perde a busca transacional (página 2 a 4) e ganha a de
preço: "quanto custa um personal trainer em florianópolis" 4,9; "em joão
pessoa" 3,9; "em salvador" 6,7; "goiânia valor" 6,0.

A consulta local de maior impressão do site é, de novo, **"consultoria
online musculacao palhoca": 250 impressões, posição 7,5, zero clique** —
a mesma apontada em 07/09 e ainda não tratada até este relatório.

### Bairros: ainda cedo, e o export não mede cobertura

63 páginas de bairro no export, contra 59 em 12/09. **Não usar esse número
como cobertura:** o export de Páginas tem teto de 1.000 linhas e, desta vez,
o teto cortou até cidades (665 no export, contra 703). Para cobertura, só o
relatório de Cobertura serve.

Piloto de 10 bairros × os outros, na janela 13/09–29/09: 128 impressões e 3
cliques contra 282 e 7. Indistinguíveis. A leitura formal continua marcada
para **09/10**.

Os bairros das levas de setembro já aparecem: Cidade Nova (BH) com 52
impressões, Campeche com +29, Menino Deus com 14 e 1 clique, Pampulha com
11 e 1 clique.

### O que conferir no próximo relatório

1. **Palhoça** — título, descrição e pergunta frequente trocados em 30/09 para
   a busca de consultoria online. Medir essa consulta: posição e CTR.
2. **Piloto de bairros** — a leitura de 09/10 (ver
   `docs/metadados-bairros.md`, seção 7).
3. **As buscas de preço + cidade** — se a estratégia de `docs/seo-local-estrategia.md`
   for aplicada, é nelas que o efeito aparece primeiro.

## Drilldown de cobertura — 13/09/2026

Arquivos: `2026-09-13-gsc-coverage-drilldown/`, com os dois motivos que
importavam. Análise em `docs/pauta-editorial.md`.

| motivo | URLs | tendência no período |
|---|---|---|
| Detectada, mas não indexada | 48 | 421 → 48 (drenando) |
| Rastreada, mas não indexada | 75 | 98 → 75 |

**O que respondeu:** dos 20 artigos publicados entre 02/09 e 11/09, catorze
não aparecem em nenhum dos dois motivos (indexados), seis estão em "detectada,
nunca rastreada" e **nenhum** foi recusado pelo Google. Os seis na fila são
exatamente os seis publicados no mesmo dia, em 02/09.

Há também, na mesma data, dois drilldowns de **outra propriedade**
(`2026-09-13-gsc-montinhopersonal/`). Eles não entram nesta série — o LEIA.md
da pasta explica por quê.

## Cobertura de indexação — 11/09/2026

Arquivos: `2026-09-11-gsc-coverage/`. Análise completa em
`docs/indexacao-analise.md`.

Este é um export de **Cobertura**, não de Desempenho: traz indexação, não
cliques. Ele não substitui o export de Páginas que as filas de reescrita e
de pauta estão esperando.

### O número que importa

| | 29/06/2026 | 03/09/2026 |
|---|---|---|
| Páginas indexadas | 146 | **1.172** |
| Páginas não indexadas | 520 | 395 |
| Impressões/dia | 83 | ~1.000 |

Com 1.294 páginas publicadas, **90,6% do site está indexado**. Em 29/06 eram
22%. Esta é a notícia do relatório, e ela é boa.

### Os cinco motivos de não indexação, e o que cada um significa

| motivo | 01/09 | 11/09 | leitura |
|---|---|---|---|
| Página alternativa com tag canônica adequada | 206 | 202 | **não é defeito** |
| Rastreada, mas não indexada | 48 | 75 | 2/3 são URLs sem barra |
| Cópia: Google escolheu outra canônica | 46 | 43 | **o problema real** |
| Página com redirecionamento | 6 | 27 | **não é defeito** |
| Detectada, mas não indexada | 92 | 48 | fila de rastreio, melhorou |

### O que mudou desde 01/09

A comparação honesta: **quase nada se moveu, e isso é informação.** Três das
cinco linhas ficaram praticamente paradas em dez dias. As duas que se
mexeram contam histórias opostas — "detectada mas não indexada" caiu 44
(o Google rastreou o que estava na fila) e "rastreada mas não indexada"
subiu 27 (parte do que ele rastreou, decidiu não indexar). Somadas, é o
mesmo lote de páginas andando um degrau na esteira.

## Analytics — sem linha de base ainda

O rastreio de cliques subiu em 02/09/2026 e as 15 dimensões personalizadas
foram criadas no mesmo dia. **Não há histórico antes disso.** A primeira
comparação possível é a partir de outubro.

Ver `docs/ga4-configuracao.md` para o que está registrado e por quê.

## Pendência com data marcada: 02/10/2026

Comparar os eventos legados com o rastreio universal e decidir se os
legados saem.

Hoje um clique no WhatsApp gera **três** eventos:

| evento | origem | o que traz |
|---|---|---|
| `click` | medição aprimorada do GA4 | `link_id`, `link_url` |
| `clique_whatsapp` | legado do site | nada além do clique |
| `clique_elemento` | rastreio universal | 12 parâmetros, região, papel, destino, contexto |

Os dois primeiros são subconjuntos do terceiro. Passados ~30 dias com os
três rodando, a comparação a fazer é: `clique_elemento` com
`destination_group = whatsapp` bate com a contagem de `clique_whatsapp`?

- **Se bater** — remover `clique_whatsapp`, `clique_instagram` e
  `clique_montinho` de `src/layouts/Base.astro`. O relatório fica limpo e
  nada se perde.
- **Se não bater** — o rastreio universal está deixando clique passar, e o
  legado vira a evidência de onde. Investigar antes de remover.

A decisão é do Renato: remover apaga a continuidade com o histórico dos
eventos antigos.

## Cliques para o Montinho — GA4, 29/06 a 06/10/2026

Arquivo: `2026-10-06-ga4-cliques/auditoria.md` (puxado pelo Supermetrics).

| métrica | valor |
|---|---|
| GA4 ÷ cliques do Google (set) | 36% — o GA4 vê ~4 em 10 visitas |
| WhatsApp — pessoas de fora vistas pelo GA4 | ~19 (23 cliques; 17 internos excluídos) |
| Site do Montinho — pessoas de fora (união dos dois GA4) | ~18 |
| Último clique para o site do Montinho | 28/09 |

## Conferência da estratégia de SEO local — 30/10/2026

Arquivo: `2026-10-30-gsc-seo-local/`. Os dados vêm direto do Search
Console pelo Supermetrics, comparando 01/10–29/10 com 31/08–29/09 (29 × 30
dias).

| grupo | impressões (antes → depois) | cliques | CTR |
|---|---|---|---|
| todas as páginas `/personal-trainer/` | 19.875 → 16.497 | 327 → 240 | 1,65% → 1,45% |
| as ~45 cidades alteradas | 12.235 → 11.198 | 133 → 120 | 1,09% → 1,07% |
| controle (as outras cidades) | 7.640 → 5.299 | 194 → 120 | 2,54% → 2,26% |
| região presencial (12 páginas) | 250 → 380 | 6 → 5 | 2,40% → 1,32% |
| Palhoça | 156 → 77 | 1 → 0 | 0,64% → 0% |
| consultas de preço (site todo) | 966 → 2.086 | 9 → 17 | posição 11,6 → 10,1 |

**O que mudou em relação ao relatório anterior (27/10):** pela primeira vez
há janela limpa, mês contra mês. O site inteiro perdeu impressões de
cidade (−17%). As cidades alteradas perderam bem menos (−8%) que o
controle (−31%) e mantiveram o CTR, enquanto o do controle caiu.
**O sinal mais claro é o das consultas de preço: as impressões mais que
dobraram e a posição melhorou 1,5 ponto.** Detalhes e decisões em
`docs/pendencias.md`.
