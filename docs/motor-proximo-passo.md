# Motor universal de próximo passo — auditoria antes de programar

Fase 1 do briefing "Motor Universal de CTA Pós-Ferramenta". Este documento é
a auditoria exigida antes de escrever qualquer linha de código, mais a
arquitetura proposta a partir do que a auditoria encontrou.

Auditoria feita em 05/09/2026 sobre o código em produção.

---

## 1. O achado que muda o briefing

**O motor central já existe.** Não é preciso criá-lo — é preciso terminá-lo.

`src/lib/jornada.ts` tem `proximoPasso(mapa)`: função pura, determinística,
sem DOM, que lê a memória acumulada da pessoa e devolve `{ferramenta, etapa,
porque, rotulo}` ou `null`. `src/scripts/jornada.client.ts` a renderiza no fim
de toda ferramenta via `anexarContinuidade()`, e as sete ferramentas já a
chamam. A memória (`src/scripts/mapaTreino.ts`) já é versionada, expira em 120
dias, guarda só dado não identificável e degrada em silêncio sem
`localStorage`.

Boa parte do que o briefing pede está de pé:

| o briefing pede | estado |
|---|---|
| motor central, fora das ferramentas | ✅ `proximoPasso()` |
| função pura, sem DOM, testável | ✅ |
| `null` é resposta legítima ("nenhum CTA") | ✅ regra explícita, já implementada |
| memória de jornada leve, sem PII | ✅ `ppp-mapa`, versionado e com validade |
| deduplicação (não repetir a ferramenta atual) | ⚠️ parcial |
| explicabilidade (`reason`) | ✅ campo `porque`, em linguagem de gente |
| escada de conversão, sem pular etapas | ✅ ETAPAS 1–7 com ordem declarada |
| coordenação entre superfícies | ✅ sticky e slide-in já se consultam |

Escrever um motor novo do zero seria construir o segundo mapa do mesmo
território — o erro que `stickyBar.ts` já documenta ter recusado.

## 2. O que de fato está quebrado

### 2.1 O motor central não enxerga o resultado

Esta é a falha estrutural, e é exatamente a que o briefing nomeia como
inegociável: *"o resultado deve mudar o CTA"*.

`proximoPasso(mapa)` recebe só o mapa: quais ferramentas foram concluídas e
um perfil raso (`diasReais`, `objetivo`, `gargalo`, `formato`, `score`,
`cidade`). Ele **não sabe qual foi o resultado da ferramenta que a pessoa
acabou de terminar**. Duas pessoas que terminam a auditoria — uma com
veredito `coerente`, outra com `variasQuestoes` — recebem do motor central
exatamente o mesmo próximo passo.

Quem hoje reage ao resultado é cada ferramenta, por dentro. As sete engines
carregam a própria regra de próximo passo:

| ferramenta | campo | forma |
|---|---|---|
| constância | `proximoPasso` | `{texto, rotulo, url, ferramenta}` |
| rotina | `proximoPasso` | `string` |
| auditoria | `proximoPasso` | `{texto, rotulo, url}` |
| personal ideal | `proximoPasso` | `string` |
| formato | `proximoPasso` + `outrosPassos[]` | `{texto, rotulo, url, destino}` |
| preço | — | não tem |
| score | `proximoPasso` | `{texto, rotulo, url, ferramenta}` |

Sete regras, cinco formatos diferentes, zero coordenação entre elas. É
literalmente o "nunca coloque as regras dentro de cada ferramenta" do
briefing, invertido.

### 2.2 Há dois próximos passos em cada resultado

O bloco da jornada não substitui o passo próprio da ferramenta — o comentário
de `jornada.client.ts` assume isso e argumenta que "respondem a perguntas
diferentes". A defesa contra a duplicata é uma comparação de string
(`urlJaOferecida`): se as duas URLs coincidem, o bloco encolhe.

Funciona contra a duplicata literal e não contra a concorrência real. Quando
a auditoria manda para `rotina` e a jornada manda para `personalIdeal`, a
pessoa recebe dois botões primários disputando a mesma atenção, e nada no
sistema decidiu qual dos dois é o melhor passo — só a ordem em que foram
anexados.

### 2.3 A decisão comercial está duplicada cinco vezes

`montinho` aparece em cinco engines, com cinco assinaturas:

```
rotina         montinho: { nivel: 'alta'|'media', motivo, ressalva? }
personalIdeal  montinho: { nivel: 'alta'|'media'|'baixa', rotulo, presencial, motivo, ressalva? }
formato        montinho: { combina: boolean, tipo: 'online'|'presencial'|'nenhum', motivo }
auditoria      montinho: { motivo }
constância     montinho?: { motivo }
score          montinho?: { motivo }
```

Cada uma decide sozinha se o Montinho entra e com que força. Mudar o critério
comercial hoje significa editar seis arquivos e torcer para não esquecer um.

### 2.4 Intenção e necessidade estão confundidas num campo só

O briefing separa **intenção comercial** de **necessidade de ajuda**, e a
separação existe por um motivo forte: necessidade alta com intenção baixa é
justamente quem *não* deve levar empurrão de consultoria.

Hoje isso é um campo só (`montinho.nivel`), e ele mede compatibilidade
comercial. Quem termina o Personal Score com 34/100 tem necessidade altíssima
e intenção não medida — e o sistema não tem como saber a diferença.

### 2.5 Vocabulário de eventos fragmentado

Cada ferramenta emite o próprio prefixo: `consistency_diagnosis_*`,
`routine_tool_*`, `training_audit_*`, `personal_match_*`,
`coaching_format_*`, `price_calculator_*`, `personal_score_*`. São sete
famílias de eventos para o mesmo funil, o que impede a pergunta central —
"depois de qualquer ferramenta, quantos seguem para o passo sugerido?" — de
ser respondida sem sete consultas somadas à mão no GA4.

A camada de jornada já tem o vocabulário certo (`journey_step_completed`,
`next_step_clicked`, `personal_map_opened`); falta o do CTA pós-resultado.

### 2.6 Nada suprime as outras superfícies na tela de resultado

`Base.astro` monta `StickyBar` e `SlideIn` em todas as páginas.
`stickyBar.ts` trata página de ferramenta à parte (oferece a etapa seguinte,
nunca a mesma), o que é correto para quem chega — e errado para quem
**terminou**: a barra passa a competir com o próximo passo calculado a partir
do resultado, que é uma decisão mais informada. `slideIn.ts` só atua nos
blocos editoriais ativos, então não colide hoje, mas nada no código garante
isso quando um bloco novo abrir.

## 3. As sete ferramentas, como estão

| id | URL | etapa | entrada | o que o resultado carrega | tipos de resultado |
|---|---|---|---|---|---|
| `constancia` | `/ferramentas/diagnostico-da-constancia/` | 1 entender | 11 respostas de rotina e histórico | gargalo principal + 2 secundários, semana sugerida, plano B, "uma coisa" | `gargalo` \| `sem-gargalo`, por pilar |
| `rotina` | `/ferramentas/treino-para-minha-rotina/` | 2 organizar | 8 respostas (objetivo, dias, tempo, local, equipamento) | divisão, semana ideal, mínima, alternativa | divisão recomendada (ABC, full body, upper/lower…) |
| `auditoria` | `/ferramentas/meu-treino-faz-sentido/` | 3 avaliar | semana declarada + 8 respostas | veredito, frequência por grupo, até 3 insights, o que não dá para concluir | `coerente` \| `coerenteComRevisar` \| `variasQuestoes` + `problemaPrincipal` (8 valores) |
| `personalIdeal` | `/ferramentas/encontre-seu-personal-ideal/` | 4 decidir | 9 respostas | modelo, dimensões 0–100, comparador, plano, checklist, red flags | `presencial` \| `online` \| `hibrido` × confiança |
| `formato` | `/ferramentas/presencial-ou-online/` | 5 escolher | 11 respostas | formato, alternativa, gargalo, conflito, comparador | `presencial` \| `online` \| `hibrido` \| `ambos` + `gargalo` (5) |
| `preco` | `/ferramentas/calculadora-preco-personal/` | 6 investir | cidade + formato + frequência | faixa mensal e por sessão, memória do cálculo, ressalvas | nível do dado: cidade \| estadual \| nacional |
| `score` | `/ferramentas/personal-score/` | 7 evoluir | 12 respostas sobre o serviço atual | score 0–100, 9 pilares, até 3 pontos de atenção, perguntas para levar | 4 níveis gerais + `primary_issue` |

Todas já expõem um bloco `analytics` de chaves não sensíveis, todas já
entregam `conteudo[]` (artigos relacionados) e `whatsapp` + `share`.

## 4. O impedimento a resolver antes da Fase 2

O briefing pede o piloto em **"Treino para Minha Rotina, Meu Treino Faz
Sentido e Calculadora de Volume"**.

**A Calculadora de Volume não existe.** O portal tem sete ferramentas, e ela
não é uma delas. O mesmo vale para as citadas na fase de expansão —
Calculadora de Proteína, Déficit Calórico, Macros e Cardápio: nenhuma existe.

Das três pedidas, duas são reais: `rotina` e `auditoria`.

**Decisão adotada, para não travar a entrega:** o terceiro piloto passa a ser
o **Diagnóstico da Constância**. É o melhor substituto disponível, e não por
eliminação — é a ferramenta cujo resultado mais varia (gargalo por pilar, ou
nenhum gargalo), então é a que melhor testa a exigência central de que o
resultado mude o CTA. Rotina, auditoria e constância cobrem as três etapas de
entrada da jornada, que é onde está o volume.

Se a intenção era mesmo construir a Calculadora de Volume primeiro, ela entra
como tarefa separada — construir ferramenta nova dentro do piloto do motor
misturaria duas mecânicas novas no mesmo lote, contra a regra de ritmo do
CLAUDE.md.

## 5. Arquitetura proposta

Um motor, um contrato, sete relatores.

```
src/lib/proximoPasso.ts          motor central (puro, sem DOM, sem cidades)
src/data/proximoPassoMensagens.ts   templates aprovados + variáveis
src/lib/jornada.ts               registro de ferramentas (já existe, ganha campos)
src/scripts/proximoPasso.client.ts  render + eventos (importa só de data/)
scripts/test-proximo-passo.ts    matriz de casos
```

### 5.1 Contrato de resultado

Cada ferramenta para de decidir e passa a **relatar**. Um tipo só, enxuto:

```ts
export interface RelatoFerramenta {
  ferramenta: FerramentaId;
  /** Classe do resultado, no vocabulário da própria ferramenta. */
  tipoResultado: string;
  /** 0–100 quando existe; ausente quando a ferramenta não pontua. */
  pontuacao?: number;
  /** O eixo do problema encontrado, normalizado entre ferramentas. */
  eixo?: EixoProblema;
  /** Sinais binários que mudam a decisão (ex.: 'jaTemPersonal'). */
  flags?: Flag[];
  /** O que alimenta o mapa. Sem PII, como já é hoje. */
  perfil: PerfilMapa;
}
```

`EixoProblema` é a camada de normalização que o briefing pede — o vocabulário
comum que hoje não existe. Derivado dos valores reais das sete engines:
`aderencia`, `estrutura`, `progressao`, `supervisao`, `agenda`, `orcamento`,
`nenhum`.

### 5.2 O que o motor devolve

```ts
export interface Acao {
  tipo: 'ferramenta' | 'conteudo' | 'consultoria' | 'whatsapp' | 'nenhuma';
  titulo: string;
  texto: string;
  cta: { rotulo: string; url: string };
  secundario?: { rotulo: string; url: string };
  /** Por que esta ação, em linguagem de gente. Renderizado. */
  porque: string;
  /** Identificador da regra que decidiu. Só debug e analytics. */
  regra: string;
  prioridade: number;
}
```

`getProximaAcao(relato, mapa, contexto): Acao | null` — `null` continua sendo
resposta legítima, e passa a ser a única resposta em um caso novo e
importante: **resultado bom, necessidade baixa**. Quem termina o Personal
Score com 88/100 não precisa de próximo passo; precisa de parabéns e de sair
da página.

### 5.3 Os dois escores, separados

- `necessidade` (0–100): o quanto a pessoa está travada agora. Sai do
  resultado — veredito, gargalo, score, pilares em atenção.
- `intencaoComercial` (0–100): o quanto ela sinalizou querer contratar. Sai
  do comportamento — etapas percorridas, ferramentas de decisão concluídas,
  formato escolhido, preço consultado.

A regra que justifica a separação, e que hoje o sistema não consegue aplicar:
**necessidade alta com intenção baixa não recebe oferta de consultoria** —
recebe a ferramenta ou o conteúdo que destrava. Empurrar venda para quem
acabou de descobrir um problema é exatamente o que o briefing chama de
inventar problema para vender.

### 5.4 Supressão

Uma regra, no motor, não espalhada:

- nunca recomendar a ferramenta atual;
- nunca recomendar a ferramenta concluída na mesma sessão;
- nunca repetir uma ação cujo CTA foi ignorado duas vezes;
- nunca oferecer WhatsApp depois de um clique em WhatsApp;
- consultoria no máximo uma vez por sessão;
- na tela de resultado, sticky e slide-in se calam (evento `ppp:resultado`,
  no mesmo padrão do `ppp:slidein` já existente).

### 5.5 Migração, sem quebrar o que funciona

O motor nasce **aditivo**, como a jornada nasceu: `anexarContinuidade()`
passa a chamar `getProximaAcao()` quando a ferramenta já reporta pelo
contrato novo, e mantém o comportamento atual quando não reporta. Assim as
quatro ferramentas fora do piloto continuam idênticas enquanto as três
migram, e nenhuma página perde conteúdo em nenhum momento.

O `proximoPasso` interno de cada engine só é removido depois que a mesma
decisão for reproduzida no motor central e verificada caso a caso.

## 6. Eventos

Vocabulário único, substituindo as sete famílias no que diz respeito ao CTA
pós-resultado (os eventos de passo e de progresso de cada ferramenta ficam
como estão):

| evento | quando | parâmetros |
|---|---|---|
| `tool_result_view` | resultado renderizado | `tool_id, result_type, result_bucket, axis` |
| `next_action_generated` | motor decidiu | `tool_id, action_type, rule, priority, need_bucket, intent_bucket` |
| `post_tool_cta_view` | CTA visível (IntersectionObserver) | idem acima |
| `post_tool_cta_click` | clique no primário | idem + `destination` |
| `post_tool_secondary_click` | clique no secundário | idem + `destination` |
| `next_action_suppressed` | motor devolveu `null` | `tool_id, reason` |

O último não está no briefing e é o mais informativo dos seis: sem ele, não
há como distinguir "o CTA não converteu" de "o CTA nem apareceu".

Dimensões GA4 novas necessárias: `tool_id`, `result_type`, `action_type`,
`rule`, `need_bucket`, `intent_bucket`. As quatro primeiras podem reaproveitar
`element_id`/`destination` já criadas; as duas de bucket precisam ser criadas
no painel.

## 7. Ritmo

Análise exigida pelo CLAUDE.md antes de tarefa em lote.

Mecânica nova, tocando a superfície de conversão de sete ferramentas: **lote
pequeno primeiro**. O raio do erro aqui não é de SEO — é de UX e de receita,
e um defeito de padrão solto nas sete ferramentas de uma vez levaria semanas
para ser lido no GA4.

Nenhuma das quatro razões de ritmo pede espera longa, porém: não se criam
páginas novas (sem risco de política), não se mexe em conteúdo renderizado de
artigo (`atualizadoEm` não sobe em nenhuma etapa deste trabalho), e não há
verificação externa envolvida. O que pede divisão é **atribuição**: mudar o
CTA das sete ferramentas no mesmo dia torna impossível saber qual mudança
moveu o número.

Plano: piloto em três ferramentas → duas semanas de dado → as outras quatro.

## 8. Como adicionar uma ferramenta nova depois

1. Registrar em `FERRAMENTAS` (`src/lib/jornada.ts`) com `etapa`.
2. Fazer a engine devolver `RelatoFerramenta` — e nada além disso sobre
   próximo passo.
3. Declarar as recomendações incompatíveis no registro.
4. Chamar `anexarContinuidade()` no fim do resultado.

Nenhuma regra de CTA é escrita na ferramenta. Se ela precisar de uma regra
própria, a regra está no lugar errado.

---

## 9. Fase 1 entregue — o que existe em código

`src/lib/proximoPasso.ts` · `src/data/proximoPassoMensagens.ts` ·
`scripts/test-proximo-passo.ts` (`npm run test:proximo`, 30 asserções).

Nenhuma ferramenta foi tocada. O motor está de pé e testado, e ainda não é
chamado por ninguém — é assim que a Fase 2 pode ligar três ferramentas sem
que as outras quatro corram risco.

### O mapa de eixo → ferramenta

| eixo | 1ª | 2ª | por quê |
|---|---|---|---|
| `aderencia` | constância | rotina | uma diagnostica o gargalo, a outra remonta a semana para ele |
| `agenda` | rotina | constância | a 2ª **não** é o formato de propósito: "a semana não cabe" tem resposta de organização antes de ter resposta de contratação |
| `estrutura` | auditoria | — | opção única, e isso é resposta, não lacuna: nenhuma outra ferramenta audita estrutura por outro ângulo. Esgotada, cai para o artigo do resultado |
| `progressao` | auditoria | personal ideal | |
| `supervisao` | personal ideal | formato | |
| `orcamento` | preço | formato | |

### Os limites que governam a consultoria

`necessidade ≥ 45` **e** `intenção ≥ 60`, as duas. Um teste trava o caso que
motivou a separação: quem tira 28/100 no Personal Score marca necessidade 95
e intenção 0 — necessidade máxima, e o motor não oferece consultoria.

### Onde o motor se cala

`resultadoBom` (nível bom e necessidade < 30) · `jornadaCompleta` ·
`semAcaoUtil`. Os três entregam um texto de fechamento: silêncio não é tela
que acaba no vazio.

### Invariantes travados em teste

Resultado muda o destino · nunca oferece a ferramenta atual, uma já
concluída no mapa ou uma feita nesta sessão · regra some depois de 2
impressões sem clique · consultoria uma vez por sessão · limitação de saúde
bloqueia consultoria e força a ressalva de médico ou fisioterapeuta ·
sequência de ferramentas termina (7 passos, sem repetição) · nenhum modelo
renderiza `{{template}}` cru nem texto vazio · payload de analytics sem
cidade e sem pontuação bruta.

### O que falta para a Fase 2

Fazer `rotina`, `auditoria` e `constancia` devolverem `RelatoFerramenta`,
escrever `src/scripts/proximoPasso.client.ts` (render + os seis eventos) e
suprimir sticky e slide-in na tela de resultado. As outras quatro
ferramentas seguem no comportamento atual até o piloto dar dado.
