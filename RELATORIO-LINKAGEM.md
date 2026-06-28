# Relatório Final — Auditoria e Estratégia de Linkagem

> Implementação de linkagem interna e externa em todo o portal, com a regra de ouro:
> cada link existe porque **ajuda o leitor a continuar a jornada**. Nenhum link aleatório.

## 1. Links internos adicionados

Linkagem **contextual** (dentro do texto, distribuída — nunca só no fim), com âncoras variadas.

| Página | Novos links internos contextuais |
|---|---|
| Cada página de cidade (×7) | ~10 no corpo do artigo: pilar "como escolher" (×2 âncoras diferentes), pilar "quanto custa", recomendação online (Montinho), cidade vizinha 1, cidade vizinha 2, "como avaliamos", âncoras internas (#avaliar, #objetivos) |
| Guia "Como escolher" | quanto custa, Montinho, cidades, guias locais |
| Guia "Quanto custa" | como escolher (×2), Montinho, cidades, + tabela com 7 cidades |

Somando aos elementos estruturais já existentes (breadcrumbs, cards de cidades
vizinhas, sidebar, rodapé, related), cada página de cidade passou a ter **dezenas de
caminhos de navegação** — todos justificados.

**Novos componentes de navegação:**
- **Sidebar inteligente** (`Sidebar.astro`): widgets de *Guias importantes*, *Cidades
  populares* e *Categorias* — aplicada às páginas de cidade e aos dois guias pilares.
- **Artigos relacionados** (`RelatedArticles.astro`): bloco "Continue a leitura" com
  escolha **semântica** (não aleatória) no fim dos guias.
- **Banco de âncoras** (`links.ts`): variação automática de anchor text por índice,
  evitando keyword stuffing.

## 2. Links externos adicionados (autoridade / EEAT)

Apenas fontes oficiais e reconhecidas, inseridas onde aumentam a credibilidade.
Contagem no site gerado:

| Fonte | Ocorrências | Contexto |
|---|---|---|
| **ACSM** | 8 | avaliação inicial / diretrizes de prescrição |
| **NSCA** | 7 | hipertrofia / treino de força |
| **OMS** (diretrizes de atividade física) | 7 | benefícios para a saúde |
| **Ministério da Saúde** | 7 | orientações oficiais no Brasil |

Todos `target="_blank" rel="noopener"` e **dofollow** (sinal de confiança para fontes
de alta autoridade). As fontes de dados locais (IBGE, prefeituras, Atlas Brasil)
seguem citadas em cada página de cidade.

## 3. Páginas que ganharam mais autoridade (alvos do fluxo)

1. **Pilares comerciais** — "Como escolher" e "Quanto custa" recebem links de **todas**
   as 7 páginas de cidade + um do outro + dos guias relacionados. São os nós mais
   reforçados do grafo.
2. **`/montinho-personal`** (conversão) — recebe links contextuais de todas as cidades
   e dos dois guias, sempre como recomendação editorial justificada.
3. **São Paulo** — hub local mais forte: recebe links de Guarulhos, Osasco, Santo André
   e Barueri (vizinhança nos cards e na prosa).
4. **`/personal-trainer`** (pilar de navegação local) — referenciado dos guias e sidebar.

## 4. Hubs e clusters

- **Hub local:** `/personal-trainer` + hubs estaduais (SP, PR). Cidades interligadas
  por vizinhança geográfica (cards + prosa contextual).
- **Cluster decisão:** "como escolher" ⇄ "quanto custa" (ligação bidirecional forte).
- **Cluster conversão:** Montinho recebe pontes de intenção (emagrecimento/online).
- **Cluster confiança:** "sobre" + "como avaliamos" citados nas seções de avaliação.
- **Jornada por intenção** implementada: objetivo → como escolher → quanto custa →
  acompanhamento online → de volta à cidade (ciclo, sem becos sem saída).

## 5. Problemas encontrados (e resolvidos)

- **Zero links externos de autoridade** antes desta etapa → adicionados ~46 (EEAT).
- **Links eram majoritariamente estruturais** (cards/rodapé), poucos contextuais →
  adicionada linkagem no corpo, com âncoras variadas e distribuídas.
- **Guias sem sidebar nem relacionados** → adicionados (layout em 2 colunas).
- **Risco de âncora repetida** (keyword stuffing) → banco de âncoras com variação.
- **Risco de link quebrado:** auditoria automática confirma **0 links internos quebrados**.

## 6. Melhorias realizadas (resumo)
Linkagem contextual com âncoras variadas · vizinhança de cidades na prosa · pilares
reforçados · jornada por intenção · sidebar inteligente · artigos relacionados
semânticos · links externos de alta autoridade · breadcrumbs mantidos em todas as
páginas · arquitetura semântica clara para IA (GEO).

## 7. Oportunidades futuras
- **Linkagem em mais densidade** conforme novas cidades entram (a vizinhança já é
  automática via `vizinhas` no dado da cidade).
- **Página-pilar "Personal Trainer Online"** para concentrar a intenção de conversão.
- **Hub por região metropolitana** (ex.: Grande SP, ABC) entre o estado e a cidade.
- **Backlinks externos** (fora do escopo on-page): imprensa, parcerias, citações —
  autoridade conferida por terceiros.

## 8. Novos artigos sugeridos (priorizado) — preenchem lacunas do grafo

| Prioridade | Artigo | Por que fortalece o ecossistema |
|---|---|---|
| 1 | **Personal Trainer Online (pilar)** | Concentra a maior intenção de conversão; vira destino de todos os blocos "online" hoje dispersos. |
| 2 | **Guia: Personal para emagrecimento** | Cluster de objetivo nº1; liga cidades → Montinho com tema central da marca. |
| 3 | **Páginas de bairro** (Pinheiros, Moema, Itaim, Alphaville, Santana) | Long-tail local; alimentam o hub São Paulo com links de vizinhança interna. |
| 4 | **Personal trainer x academia: o que vale mais a pena** | Captura dúvida comum; conecta "onde treinar" ↔ "quanto custa". |
| 5 | **Guia: Treino para hipertrofia / feminino / idosos** | Completa o cluster de objetivos; destino natural dos cards "treino por objetivo". |
| 6 | **Como funciona a consultoria online (passo a passo)** | Reduz fricção pré-conversão; reforça o pilar online e o Montinho. |

Cada novo artigo entra já com vizinhança e pilares definidos, mantendo o grafo coeso.

---
_Auditoria concluída e verificada: build sem erros (18 páginas), 0 links internos
quebrados, ~46 links externos de autoridade, linkagem contextual em todas as páginas
de cidade e guias._
