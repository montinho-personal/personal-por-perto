# Reescritas — artigos com demanda presos além da página 2

Fila fechada em 03/09/2026, a partir do export de Páginas do Search Console
arquivado em `docs/relatorios/2026-09-01-gsc/`.

**Critério de entrada:** 10 impressões ou mais no período E posição média
pior que 20. São artigos que o Google já indexou e mostra, mas em um lugar
onde quase ninguém clica — demanda represada, não demanda inexistente.

**Produção: 2 por dia**, pela rotina diária. Marcar `✅` com a data e a
posição de partida quando republicar.

## Por que esta fila vale mais que criar artigo novo

Estes 13 artigos somam **407 impressões e 0 cliques**. Zero. Eles já
disputam a busca e perdem — subir da posição 40 para a 15 vale mais que um
artigo novo que começa do nada. E não custa artigo novo nenhum: o texto já
existe, o assunto já foi pesquisado, a página já é conhecida do Google.

## A fila

| # | artigo | impr. | pos. | status |
|---|---|---|---|---|
| 1 | `/musculacao/treino-para-iniciantes/` | 93 | 32,7 | ✅ 2026-09-03 · partiu de 32,7 |
| 2 | `/musculacao/triceps-testa-como-fazer/` | 67 | 25,7 | ✅ 2026-09-03 · partiu de 25,7 |
| 3 | `/emagrecimento/gordura-visceral/` | 57 | 66,8 | |
| 4 | `/emagrecimento/jejum-intermitente-funciona/` | 54 | 52,7 | |
| 5 | `/musculacao/levantamento-terra-como-fazer/` | 39 | 40,3 | |
| 6 | `/musculacao/rosca-martelo-como-fazer/` | 28 | 20,4 | |
| 7 | `/musculacao/encolhimento-como-fazer/` | 24 | 24,8 | |
| 8 | `/musculacao/hipertrofia-como-funciona/` | 24 | 77,3 | |
| 9 | `/musculacao/treino-de-posterior-de-coxa/` | 17 | 39,2 | |
| 10 | `/guias/avaliacao-fisica/` | 16 | 78,2 | |
| 11 | `/musculacao/elevacao-frontal-como-fazer/` | 16 | 20,3 | |
| 12 | `/emagrecimento/deficit-calorico-como-funciona/` | 12 | 75,2 | |
| 13 | `/emagrecimento/como-perder-barriga/` | 10 | 53,3 | |

## O que "reescrever" significa aqui

**Não** é trocar palavras nem inflar o texto. É diagnosticar por que o
artigo está atrás e corrigir a causa. As causas costumam ser quatro, e a
correção é diferente para cada uma:

| causa provável | sinal | correção |
|---|---|---|
| Título não corresponde à busca | posição razoável, CTR zero | reescrever `title` e `description` |
| Texto fino perto do que ranqueia | posição 40+ | aprofundar as seções que a concorrência cobre e este não |
| Intenção errada | o artigo responde outra pergunta | reposicionar a abertura e os H2 |
| Página órfã | poucos links internos apontando | linkar dos artigos irmãos com tráfego |

A posição 77 do `hipertrofia-como-funciona` e a 78 do `avaliacao-fisica`
provavelmente não são problema de título — nessa faixa, o Google está
dizendo que o conteúdo não compete. Já a 20,3 do `elevacao-frontal` é quase
primeira página: ali, título e trecho de destaque decidem.

## Regra que vale para toda reescrita

- Preservar o `FerramentaInline` se já existir, e adicionar se não existir.
- Preservar as FAQs boas; reescrever as rasas.
- **Nunca** trocar o slug. URL que muda perde o histórico que a reescrita
  existe para aproveitar.
- Registrar no commit a posição de partida, para que a próxima leitura de
  relatório consiga medir se funcionou.

## Fora desta fila

`/guias/quanto-custa-personal-trainer/` — 635 impressões. Aparece com
posição 16,9 no snapshot agregado, mas o export bruto mostrava 26,7 para a
versão sem barra final. É o maior ativo do portal e merece reescrita
manual, com atenção, não em lote.
