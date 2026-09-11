# Indexação — o que o relatório de cobertura de 11/09/2026 mostrou

Análise do export de Cobertura do Search Console, arquivado em
`docs/relatorios/2026-09-11-gsc-coverage/`, cruzado com os drilldowns por URL
de 01/09 (que o export novo não traz).

---

## 1. A manchete: 90,6% do site está indexado

| | 29/06/2026 | 03/09/2026 |
|---|---|---|
| Indexadas | 146 | **1.172** |
| Não indexadas | 520 | 395 |
| Impressões/dia | 83 | ~1.000 |

Com 1.294 páginas publicadas, 1.172 indexadas é 90,6%. Em junho eram 22%.
Antes de qualquer diagnóstico de defeito, é isso que o relatório diz: o site
foi descoberto, rastreado e indexado.

## 2. Três dos cinco "problemas" não são problema

O Search Console lista cinco motivos de não indexação. Dois deles **não pedem
correção nenhuma**, e é importante registrar isso para ninguém "consertar" o
que está funcionando:

**Página alternativa com tag canônica adequada (202).** Esta linha é o
Google dizendo que encontrou a canônica e a respeitou. É o sistema
funcionando, não falhando.

**Página com redirecionamento (27).** URLs antigas que redirecionam para a
versão correta. Também é o sistema funcionando.

Juntas, são 229 das 395 não indexadas — 58% do "problema" é o comportamento
esperado.

**Detectada, mas não indexada (48, era 92).** Fila de rastreio. Caiu pela
metade em dez dias sem que ninguém fizesse nada. Não pede ação.

### A investigação que deu em nada, e vale registrar

64% das URLs em "alternativa com tag canônica" e 100% das em
"redirecionamento" **não têm barra final**. A hipótese óbvia era vazamento:
algum lugar do site publicando URLs sem barra. Foi verificado, um a um:

| onde | resultado |
|---|---|
| links internos `<a href>` | 0 sem barra (`audit:canonical`) |
| sitemap | 0 sem barra |
| `og:url` | com barra |
| JSON-LD (schema) | só fragmentos `#id` e `logo.svg` |
| canonical | auto-referente e com barra em 1.293 páginas |

O site não emite uma única URL sem barra. As 132 da amostra foram rastreadas
em julho e agosto porque o **Google** as conhece de antes da consolidação de
24/08 e volta para conferir. Não há o que corrigir; há o que esperar.

## 3. O problema real: 43 páginas que o Google considera cópia

"Cópia, o Google e o usuário selecionaram uma página canônica diferente" é a
única linha que descreve um defeito nosso. São 43 páginas (eram 46), e na
amostra de 01/09 **45 das 46 eram páginas de cidade**.

Traduzindo: o Google olhou para essas páginas, decidiu que são duplicatas de
outra, e **ignorou a nossa canônica** para escolher a dele.

### A hipótese errada, e o que a medição mostrou

A suposição natural é que as duplicadas seriam as cidades mais pobres de
conteúdo. É o contrário:

| | 44 marcadas como cópia | 941 demais |
|---|---|---|
| mediana de palavras | 3.463 | 3.453 |
| com `capaArte` | 52% | 17% |
| com `academiasProximas` | 63% | 18% |
| com `faqsExtra` | 47% | 11% |

São as cidades em que mais se investiu. A explicação que sobra não é sobre
qualidade: **são as que o Google já rastreou a fundo.** As grandes, as com
capa, as que recebem mais links. O veredito de cópia não atingiu as piores —
atingiu as primeiras da fila. E isso significa que ele tende a se espalhar
conforme o rastreio avança, a menos que a causa seja removida.

### A causa, medida

Quanto do texto de uma página de cidade é idêntico ao das outras? Medido em
amostra de 120 páginas:

| recorte | texto repetido em metade ou mais das cidades |
|---|---|
| página inteira | 41% (mediana) |
| só a prosa, sem mobília do site | **30%** (mediana) |

Dezenove frases aparecem em 95%+ das cidades — 331 palavras de ~1.131 de
prosa. E elas não estão espalhadas: concentram-se justamente nas seções de
decisão, que é onde o leitor (e o classificador) procura o que a página tem
de próprio.

## 4. O que foi corrigido em 11/09

O alvo escolhido foi **title e description**, por três razões que se somam:
são os dois campos que mais pesam na deduplicação do Google, eram os mais
repetitivos do site, e já estavam na fila por outro motivo.

O gabarito anterior, em 985 páginas:

```
title:       Personal Trainer {cidade} ({UF}): guia completo e quanto custa
description: Como escolher um personal trainer {cidade} ({UF}), quanto custa
             ({faixa} a aula), onde treinar e dicas por objetivo. Guia
             editorial independente, atualizado.
```

Uma frase fixa com o nome trocado, 985 vezes — e "guia completo e quanto
custa" é literalmente a fórmula que a regra editorial da pauta proíbe
replicar automaticamente.

`src/lib/metaCidade.ts` substitui isso. A variação **não é de sinônimo, é de
informação**: cada página anuncia um dado que só ela tem — o parque onde a
cidade treina, a academia confirmada, o bairro nobre, a corrida local —,
escolhido entre o que aquela cidade de fato publica. Trocar palavra de lugar
não resolveria nada; trocar o fato anunciado, sim.

A escolha é determinística a partir do slug, então o texto não muda entre
builds. E o comprimento é respeitado por construção: monta-se a versão mais
informativa que cabe e desce-se um degrau quando não cabe — cidade de nome
comprido recebe sufixo curto em vez de título cortado.

### Antes × depois

| | antes | depois |
|---|---|---|
| titles distintos (985 cidades) | 985* | 985 |
| defeitos de comprimento em cidades | **234** | **0** |
| títulos fora de 45–60 caracteres | 153 | 0 |
| descrições fora de 135–160 | 168 | 0 |
| mediana do título | — | 56 caracteres |
| mediana da descrição | — | 151 caracteres |
| formas de título em uso | 1 | 9 |

\* distintos apenas porque o nome da cidade mudava; a frase era a mesma.

Defeitos bloqueantes do `audit:metadados` no site inteiro: **321 → 85**, e
nenhum dos 85 restantes está em página de cidade. Os que sobraram estão em
artigos escritos à mão (36 em musculação, 12 em mounjaro, 11 em guias, 9 em
emagrecimento, 6 em ferramentas, 2 em bairro) e são fila própria.

### Três erros cometidos e corrigidos no caminho

Vale registrar, porque cada um quase passou:

1. **"o treino no Orla da Praia do Toque".** O gabarito punha artigo
   masculino antes de um nome vindo dos dados. Resolvido com aposição entre
   parênteses e travessões, que dispensa tabela de gênero.
2. **Sorteio uniforme entre sufixos.** Parecia mais variado e fazia o
   oposto: ": preços" cabe em quase toda cidade, caía em 252 das 985 e
   deixava 127 títulos abaixo de 45 caracteres. Restringido aos três mais
   longos que cabem.
3. **Piso de descrição em 110 caracteres.** Os degraus curtos entraram na
   disputa e puxaram 398 cidades para a casa dos 120 — dentro do limite,
   gastando menos espaço do que a SERP oferece. Piso subiu para 135, e o
   fallback passou a escolher a mais longa que cabe, não a mais curta.

## 5. O que NÃO foi feito, e por quê

**A data de revisão das 985 cidades não subiu.** É correção de gabarito: o
conteúdo renderizado da página não mudou, só os metadados. O CLAUDE.md manda
não tocar `atualizadoEm` nesses casos, e aqui a regra protege exatamente o
que precisamos: 985 `lastmod` alterados no mesmo dia queimariam a
credibilidade do sinal justamente quando ela importa para a fila de
reescritas. O Google já revisita as páginas de cidade com regularidade — os
rastreamentos de agosto estão no drilldown — e vai encontrar os títulos
novos sem que a gente finja revisão.

**As 19 frases repetidas na prosa continuam lá.** Elas são o outro 30%, e
mexer nelas é reescrever o texto de 985 páginas — tarefa de conteúdo, não de
gabarito, que precisa de análise de ritmo própria e não cabia neste commit.
Fica como a próxima alavanca, e a leitura do próximo relatório de cobertura
dirá se a correção de metadados sozinha já moveu a linha de "cópia".

## 6. O que conferir no próximo relatório de cobertura

1. **"Cópia, o Google escolheu outra canônica" caiu de 43?** É a métrica que
   este trabalho quis mover. Se cair, a diferenciação de metadados bastou.
   Se não cair, a causa está na prosa e a próxima tarefa é a seção 5.
2. **"Rastreada, mas não indexada" parou de subir?** Foi de 48 para 75. Se
   continuar subindo, vale identificar quais páginas com barra final estão
   nela — o export de cobertura simples não diz, é preciso o drilldown.
3. **O total de indexadas passou de 1.172?** Com 1.294 publicadas, o teto
   prático está perto. Chegar a ~1.250 seria o fim desta frente.

### A ressalva honesta

Nada aqui permite dizer que a indexação vai melhorar por causa da correção
de metadados. O Google precisa rastrear as 985 páginas de novo, reavaliar a
duplicação e reclassificar — e isso leva semanas, não dias. O que se pode
afirmar é o que foi medido: as 985 páginas deixaram de repetir a mesma frase
e passaram a anunciar um fato próprio cada uma. Se isso é suficiente para o
classificador, só o próximo relatório diz.
