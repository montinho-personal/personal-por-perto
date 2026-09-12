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
