# Central de Ferramentas — /ferramentas/

Registro do trabalho de 23/09/2026, nas oito etapas pedidas no brief. O que
está aqui é o que foi encontrado, decidido e feito; o que ficou de fora está
dito como tal.

## Etapa 1 — Inventário real

Varredura de `src/pages`, `src/components`, `src/scripts` e `src/lib`. Tudo o
que roda uma conta ou um diagnóstico no navegador, dentro ou fora de
`/ferramentas/`.

### Ferramentas com página própria (24)

| # | Ferramenta | URL | Pergunta que responde | JS | Guarda dado | Recebe / envia | Estava em /ferramentas/ | No menu | Convites em artigos¹ | Links de entrada² | GSC (24/06–12/09)³ |
|---|---|---|---|---|---|---|---|---|---|---|---|
| 1 | Treino para Minha Rotina | `/ferramentas/treino-para-minha-rotina/` | Como dividir o treino nos dias que tenho? | sim | mapa (localStorage) | recebe `#c=cidade`; envia dias, divisão | sim | via hub | 29 | 1.325 | 9 impr., pos. 6,9 |
| 2 | Diagnóstico da Constância | `/ferramentas/diagnostico-da-constancia/` | Por que começo e paro? | sim | mapa | recebe `#c=`; envia gargalo | sim | via hub | 11 | 1.325 | — |
| 3 | Meu treino faz sentido? | `/ferramentas/meu-treino-faz-sentido/` | Meu treino está bem montado? | sim | mapa | envia eixo do problema | sim | via hub | 38 | 1.325 | — |
| 4 | Encontre seu Personal Ideal | `/ferramentas/encontre-seu-personal-ideal/` | Preciso de personal? Que tipo? | sim | mapa | recebe `#c=`; envia formato | sim | via hub | 3 | 1.325 | — |
| 5 | Presencial ou online? | `/ferramentas/presencial-ou-online/` | Qual formato combina comigo? | sim | mapa | recebe `#c=`; envia formato | sim | via hub | 6 | 1.325 | — |
| 6 | Calculadora de Preço | `/ferramentas/calculadora-preco-personal/` | Quanto custa um personal na minha cidade? | sim | mapa | recebe `#c=`; envia faixa | sim | via hub | 5 | 1.325 | 10 impr., pos. 38,6 |
| 7 | Personal Score | `/ferramentas/personal-score/` | Meu personal me acompanha bem? | sim | mapa | envia score | sim | via hub | 0 | 1.325 | — |
| 8–23 | 16 calculadoras de calorias | `/calorias/<atividade>/` | Quantas calorias X gasta? | sim | não | não | **não** | não | 0 (componente) | 1 a 11 | — (< 2 impr.) |
| 24 | Calorias da musculação | `/emagrecimento/quantas-calorias-queima-a-musculacao/` | Quantas calorias a musculação queima? | sim | não | não | **não** | não | 0 | 7 | 57 impr., pos. 10,7 |

¹ `<FerramentaInline>` no corpo de artigos. ² Páginas do build que linkam a
URL (as 7 da jornada estão no rodapé de todas as 1.325 páginas). ³ Aba
Páginas do export de 12/09; o export corta em 1.000 linhas com piso de ~2
impressões, então ausência quer dizer "abaixo do piso", não zero.

### Experiências interativas sem página própria (não entram no hub, e está certo)

- **Roteador de 4 perguntas** (dentro de `/ferramentas/`): quiz de entrada do Mapa. Preservado.
- **Mapa Fitness da Cidade** (`MapaFitness.astro`, nas páginas de cidade com dado suficiente): filtro de locais por atividade + mapa. É parte da página local, não ferramenta avulsa — o hub aponta para "Personal trainer por cidade".
- **Busca do menu** (`busca-index.json`): agora indexa as 24 ferramentas com aliases (antes, uma só, à mão).
- **Comparador presencial × online** dentro do Personal Ideal: subresultado, não ferramenta.

### Canibalização

- `/ferramentas/` × `/calorias/`: intenções diferentes (biblioteca × "quantas calorias X gasta"). Sem conflito; `/calorias/` vira sub-hub declarado.
- Personal Ideal × Presencial ou online: as duas devolvem formato. A jornada já as trata como etapas distintas (decidir se contrata × escolher o formato). Fica registrado como risco a observar no GSC, não como problema a resolver agora.
- `/ferramentas/` × "ferramentas para personal trainer": ver Etapa 6 — a SERP dessa consulta é de software B2B, e o hub **não** deve mirá-la.

## Etapa 2 — Diagnóstico

1. **O hub mostrava 7 das 24 ferramentas.** As 17 calculadoras de calorias não apareciam nele nem no menu; recebiam de 1 a 11 links de entrada contra 1.325 das sete da jornada.
2. **As mesmas 7 apareciam três vezes na página**: em "Onde você está hoje" (7 situações), em "As sete etapas" e em "Todas as ferramentas em detalhe" — com blocos de "o que você leva", "para quem é" e "o que não faz" repetindo o que cada página de ferramenta já explica.
3. **Título, H1 e breadcrumb eram da jornada**, não da biblioteca: "Meu Mapa do Treino: 7 Ferramentas…", H1 em forma de frase de efeito ("Você não precisa de mais uma dica"), sem *information scent* para quem procura calculadora.
4. **Texto editorial desatualizado**: "as duas ferramentas", "nenhuma das duas" — resíduo de quando eram duas.
5. **Quatro registros para a mesma coisa**: `data/ferramentas.ts` (7), `lib/jornada.ts` (7), a lista local de `/calorias/index.astro` (17) e `lib/links.ts`. Publicar uma calculadora exigia tocar quatro arquivos (aconteceu três vezes só em 23/09).
6. **Sem busca e sem filtro**; com 24 itens e crescendo, a página dependia de rolagem.
7. **`atualizadoEm` em 30/08** com cinco ferramentas publicadas em setembro; schema `ItemList` com 7 itens; `CollectionPage` chamada "Meu Mapa do Treino".
8. **A demanda medida está no preço** — o cluster "quanto custa um personal" soma mais de 600 impressões no GSC (posição 13) — e a calculadora de preço recebia só 5 convites em artigos e ficava no fim da lista do hub.
9. **Risco SEO de mexer: baixo.** `/ferramentas/` tinha 15 impressões e 0 cliques no período; não há ranking, backlink conhecido nem snippet a proteger. O conteúdo editorial com valor real (método aberto, por que gratuitas, limites, dados no navegador) foi consolidado, não apagado.

### O que o benchmark ensina (Omni, Calculator.net, Strength Level, NerdWallet)

Os sites não puderam ser abertos daqui (o proxy bloqueia os quatro domínios);
a leitura vem da documentação pública do Omni e do que se conhece dos
outros. Os padrões que se repetem:

- **Busca no topo, antes de qualquer categoria.** Com 3.700 calculadoras, o Omni resolve pela busca; a navegação por categoria é o segundo caminho.
- **Categorias por domínio de necessidade** (saúde, finanças…), nunca por formato. Nenhum deles tem uma seção "quizzes".
- **Card curto e uniforme**: nome, uma linha, e o nome já diz o que a ferramenta calcula. O detalhe mora na página da ferramenta.
- **Sub-hubs por categoria** quando a categoria passa de uma dúzia — e cada sub-hub tem texto próprio, não é lista.
- **"Popular" só com dado**; o resto é "destaque".
- **Escalabilidade vem do catálogo**: cada ferramenta é um registro com nome, slug, categoria, aliases; as páginas de hub são geradas dele.

## Etapa 3 — Taxonomia

Três categorias, por necessidade. Regra fixada no código: categoria só
existe com **duas ou mais ferramentas** e uma necessidade própria — categoria
vazia para SEO não entra (o teste `test:ferramentas` falha se aparecer).

| Categoria | Título na página | Ferramentas | Por que existe |
|---|---|---|---|
| Treino | Organizar e avaliar o treino | Rotina, Constância, Análise do treino (3) | "Como treinar" e "por que não engata" são a mesma dúvida vista de dois lados; separar "organizar" de "avaliar" daria uma categoria com uma ferramenta só. |
| Personal trainer | Escolher, pagar e avaliar um personal | Personal Ideal, Presencial ou online, Calculadora de Preço, Personal Score (4) | É a cadeia de decisão sobre um profissional: se, qual formato, quanto, e se o que já pago está de pé. "Preços" separado seria categoria de uma ferramenta. |
| Calorias | Calorias por atividade | 17 calculadoras | Uma pergunta só ("quantas calorias X gasta"), 17 respostas. Já tem sub-hub (`/calorias/`). |

O que **não** virou categoria, e por quê: "Emagrecimento e composição
corporal" e "Nutrição" não têm nenhuma ferramenta hoje. Entram no dia em que
houver duas. "Desempenho" (1RM, volume) idem.

## Etapa 4 — Arquitetura da informação

Dois conceitos, separados de vez:

- **Central de Ferramentas** = `/ferramentas/`: biblioteca. Para quem tem uma dúvida e quer a ferramenta.
- **Meu Mapa do Treino** = a experiência guiada, dentro da Central como bloco destacado e compacto, com o roteador de 4 perguntas e o mapa salvo no navegador. Para quem não sabe por onde começar. Sem URL nova e sem redirect: a URL atual tem 15 impressões, e mover algo que não ranqueia só cria trabalho.

Ordem da página e o motivo de cada bloco:

1. **Hero**: eyebrow, H1, uma frase, **busca** (o elemento mais importante do topo) com exemplos clicáveis tirados das consultas reais do GSC, e **chips** de categoria com a contagem. Reconhecimento em vez de lembrança: a pessoa reconhece a própria dúvida num exemplo.
2. **Resultados** (só com busca): os cards clonados, na ordem da busca. Zero resultados mostra as cinco de "Comece por estas" e a busca do portal com a consulta já preenchida — e registra `tools_zero_results`.
3. **Comece por estas** (5): seleção editorial, com o critério escrito na página. A calculadora de preço vem primeiro porque é a maior demanda medida.
4. **Meu Mapa do Treino** compacto: título, uma frase, a faixa das 7 etapas, o botão do roteador, o mapa salvo (JS, só quando existe).
5. **Três seções por categoria**: H2 + uma frase + cards. Calorias mostra 6 e guarda 11 num `<details>` (links no HTML, rastreáveis; abre sozinho ao filtrar) + link para o sub-hub.
6. **Não encontrou?**: busca do conteúdo do portal + quatro atalhos.
7. **Como estas ferramentas são feitas**: o editorial antigo, consolidado em cinco parágrafos.
8. CTA editorial (o mesmo `CtaMontinho` de antes).

Grafo: artigo → `<FerramentaInline>` (uma por artigo) → ferramenta → motor de
próximo passo (`lib/proximoPasso.ts`, intacto) → próxima ferramenta ou
artigo. O hub entra como nó de descoberta, não como nó de todos os caminhos.

## Etapa 5 — Wireframe

```
MOBILE (360–412)                        DESKTOP (≥1024)
┌──────────────────────┐                ┌────────────────────────────────────────────┐
│ Início › Ferramentas │                │ Início › Ferramentas                       │
│ FERRAMENTAS DO PORTAL│                │ FERRAMENTAS DO PORTAL · GRÁTIS             │
│ Calculadoras e       │                │ Calculadoras e ferramentas fitness         │
│ ferramentas fitness  │                │ gratuitas                                  │
│ 24 ferramentas para… │                │ 24 ferramentas para organizar o treino…    │
│ O que você quer      │                │ O que você quer descobrir?                 │
│ [ Busque uma dúvida ]│                │ [ Busque uma dúvida ou ferramenta… ][Buscar]│
│ [Buscar]             │                │ Ex.: quanto custa · não consigo · calorias…│
│ Ex.: quanto custa ·… │                │ (Todas 24)(Treino 3)(Personal 4)(Calorias 17)│
│ (Todas)(Treino)(Pers→│  ← rola        ├────────────────────────────────────────────┤
├──────────────────────┤                │ Comece por estas   — critério declarado   │
│ Comece por estas     │                │ [card][card][card]                         │
│ [card]               │                │ [card][card]                               │
│ [card] …             │                ├────────────────────────────────────────────┤
├──────────────────────┤                │ ◎ Não sabe por onde começar?              │
│ ◎ Não sabe por onde  │                │   Faça o Meu Mapa do Treino                │
│   começar?           │                │   ①Entender→②Organizar→…→⑦Evoluir          │
│ ①→②→③→④→⑤→⑥→⑦       │                │   [Descobrir meu próximo passo →]          │
│ [Descobrir meu…    ] │                │   (roteador abre aqui; mapa salvo abaixo)  │
├──────────────────────┤                ├────────────────────────────────────────────┤
│ Organizar e avaliar  │                │ Organizar e avaliar o treino               │
│ [card][card][card]   │                │ [card][card][card]                         │
│ Escolher, pagar…     │                │ Escolher, pagar e avaliar um personal      │
│ [card]×4             │                │ [card][card][card][card]                   │
│ Calorias por ativ.   │                │ Calorias por atividade                     │
│ [card]×6             │                │ [card][card][card] [card][card][card]      │
│ + Mais 11 atividades │                │ + Mais 11 atividades  ·  Ver todas as 17 → │
├──────────────────────┤                ├────────────────────────────────────────────┤
│ Não encontrou?       │                │ Não encontrou o que queria? [busca portal] │
│ Como são feitas      │                │ Como estas ferramentas são feitas          │
│ CTA editorial        │                │ CTA editorial                              │
└──────────────────────┘                └────────────────────────────────────────────┘

CARD (um desenho só):
┌─────────────────────────────┐
│ [ícone da categoria]  Novo  │
│ Calculadora de Preço        │  ← único link; o card inteiro é área de clique
│ Veja a faixa por sessão e   │
│ por mês na sua cidade…      │
│ Resultado na hora · Grátis  │
│ Calcular preço →            │  ← texto, não segundo link
└─────────────────────────────┘
```

## Etapa 6 — SEO

### O que a SERP brasileira mostrou

| consulta | quem ranqueia | leitura |
|---|---|---|
| calculadora fitness | apps de loja, calculadoras de calorias/macros (Calculator.net, sites de nutrição) | intenção de calculadora de corpo/dieta; o hub compete só de lado |
| ferramentas fitness / calculadoras de treino grátis | apps de treino, CalculaFit, Guia Fitness | mistura app × calculadora; há espaço para "calculadoras de treino" |
| calculadoras de treino musculação online | calculadoras de calorias, volume, 1RM | intenção informacional, boa para o hub e para futuras ferramentas de desempenho |
| ferramentas para personal trainer | **software B2B para o profissional** (MFIT, Wiki4Fit) | intenção errada: **não mirar** — o H1 sugerido no brief ("Ferramentas para Treino e Personal Trainer") atrairia esse público |

### Decisão

- **Palavra principal**: "ferramentas fitness grátis" / "calculadoras fitness gratuitas".
- **Secundárias**: "calculadoras de treino", "calculadora de calorias por atividade", "quanto custa personal" (que ranqueia pela ferramenta, não pelo hub).
- **Intenção do hub**: navegacional-informacional ("que ferramentas existem"). Cada ferramenta ranqueia pela própria pergunta.

### Title — cinco opções avaliadas

| opção | chars | veredito |
|---|---|---|
| **Ferramentas Fitness Grátis: Treino, Calorias e Personal** | 55 | escolhida: três necessidades no título, sem "para personal trainer" |
| Calculadoras e Ferramentas Fitness Grátis \| Personal por Perto | 62 | corta no SERP; nenhuma outra página do site sufixa a marca |
| Ferramentas de Treino: Calculadoras e Diagnósticos Grátis | 57 | esconde calorias e personal |
| Calculadoras de Treino, Calorias e Personal Trainer \| Grátis | 60 | "personal trainer" no título puxa a intenção B2B |
| Central de Ferramentas: Calculadoras de Treino e Calorias | 57 | "central" é jargão nosso, não da busca |

- **Description** (153): "24 calculadoras e diagnósticos gratuitos: organize o treino, estime as calorias de cada atividade, escolha um personal e veja quanto custa. Sem cadastro." — o número sai do catálogo.
- **H1**: "Calculadoras e ferramentas fitness gratuitas". **H2**: as categorias, o Mapa, "Não encontrou", "Como são feitas". **H3**: cada ferramenta.
- **Links**: 24 URLs em HTML puro (29 âncoras, contando os destaques); nada atrás de JS. As 11 do `<details>` estão no DOM fechado — rastreáveis.
- **Schema**: `BreadcrumbList`, `CollectionPage` (renomeada) e `ItemList` com as 24 URLs. Sem rating, sem "popular".
- **Breadcrumb**: Início › Ferramentas. Sub-hub: Início › Calorias por atividade (já existia).
- **Menu e rodapé**: "Meu Mapa do Treino" → "Ferramentas"; a URL não mudou.

## Etapa 7 — Implementação

| arquivo | o que mudou |
|---|---|
| `src/data/ferramentas.ts` | ganha `CATEGORIAS`, `catalogo` (24), `porCategoria`, `destaques`, `ehNova`. O registro antigo das 7 continua intacto (rodapé e três testes dependem dele). |
| `src/lib/buscaFerramentas.ts` | busca por intenção, pura: normaliza acento, ignora palavras vazias, pontua nome > alias > pergunta > tag, bônus de frase. |
| `src/components/FerramentaCard.astro` | o card único. |
| `src/pages/ferramentas/index.astro` | a página nova. |
| `src/scripts/hubFerramentas.client.ts` | busca, filtros, zero resultados, eventos. Só reordena e esconde; nunca cria conteúdo. |
| `src/scripts/hubJornada.client.ts` | intacto: roteador e mapa salvo continuam nos mesmos ids. |
| `src/pages/calorias/index.astro` | nome, URL e resumo vêm do catálogo; só o exemplo resolvido fica local. |
| `src/pages/busca-index.json.ts` | indexa as 24 com aliases. |
| `src/data/site.ts`, `src/components/Footer.astro` | rótulo "Ferramentas". |
| `scripts/test-ferramentas.ts` | integridade do catálogo + as personas de busca. |

**Publicar uma calculadora nova agora** = criar a página + uma entrada em
`CALORIAS` no catálogo (+ o exemplo em `/calorias/`, opcional). Hub, busca do
hub, busca do menu, schema e sub-hub acompanham.

**Analytics** (via `gtag`, convivendo com os eventos antigos):
`tools_hub_search {query, results_count}` ao parar de digitar;
`tools_zero_results {query, timestamp, context}`; `tools_category_select
{category}`; `tool_card_click {tool_name, category, position, source_section}`
com `source_section` ∈ destaques | categoria | mais | busca | zero;
`training_map_start`; `tool_related_content_click`. O CTA comercial já é
medido pelo `clique_elemento` universal — não ganhou evento duplicado. O
`tools_zero_results` é a fila de ideias: consulta sem ferramenta = candidata
a ferramenta.

**O que não foi feito, de propósito**: sub-hubs novos (só `/calorias/`
existe, e já existia); URL nova para o Mapa; "ferramentas perto de você"
(pediria localização sem necessidade — a cidade já viaja por `#c=` a partir
das páginas locais, e isso foi preservado).

## Etapa 8 — QA

- 32 suítes de teste ok (`test:ferramentas` nova); `tsc` no baseline (10 erros antigos de sticky/slidein).
- Build 1.325 páginas; `audit:metadados`, `audit:canonical`, `audit:links`, `audit:cta`, `audit:rastreio` sem apontamento novo.
- **Sem JavaScript**: 29 links de card no HTML, 11 dentro do `<details>`, roteador com `<noscript>`.
- **Busca (interface)**: as 5 personas de busca do brief acham a ferramenta certa na primeira posição; zero resultados mostra 5 sugestões e o link para a busca do portal com a consulta; limpar restaura; exemplos clicáveis funcionam.
- **Filtros**: só a categoria escolhida fica visível, o `<details>` abre, o Mapa some, `aria-pressed` acompanha; "Todas" restaura.
- **Roteador**: abre, quatro respostas, resultado aponta para uma ferramenta.
- **Eventos**: `tools_hub_search`, `tools_zero_results` (com a consulta), `tools_category_select`, `training_map_start` disparados.
- **Teclado**: busca → botão → exemplos → chips → um Tab por card (a ação não é segundo link).
- **Larguras**: sem estouro horizontal em 360, 375, 390, 412, 768 e 1280.
- **Console**: 0 erros.
- **axe**: só o contraste do laranja da marca, que é pendência global e já estava aberta.

### As 10 personas

| persona | o que acontece |
|---|---|
| 1 quanto custa na minha cidade | primeiro card de "Comece por estas"; busca "quanto custa" → preço em 1º |
| 2 não sei por onde começar | bloco do Mapa logo abaixo dos destaques; exemplo "por onde começar" na busca → Rotina |
| 3 calorias no boxe | busca → Boxe e lutas em 1º; chip Calorias abre as 17 |
| 4 treino mal montado | busca → Meu treino faz sentido em 1º |
| 5 contratar personal online | busca → Presencial ou online em 1º, Personal Ideal entre os três |
| 6 não mantenho academia | exemplo clicável → Constância em 1º |
| 7 só quero ver todas | chip "Todas 24" é o padrão; sem quiz no caminho |
| 8 veio do Google direto | o motor de próximo passo de cada ferramenta continua o mesmo; o hub entra pelo menu "Ferramentas" |
| 9 mobile, uma mão | chips roláveis, campo de 52px, botões ≥ 44px, sem hover obrigatório |
| 10 leitor de tela | H1/H2/H3 semânticos, `role="search"`, `aria-live` com contagem, `aria-pressed` nos chips, um link por card com o nome |

### Critério final (as 10 perguntas): sim para todas — com uma ressalva

A 5ª ("continua com 100 ferramentas?") é sim pela arquitetura (catálogo +
`mostrarNoHub` + `<details>` + sub-hub), mas com 100 ferramentas a categoria
de calorias precisaria de um segundo nível de agrupamento (esportes coletivos
× cardio × aula), e isso deve nascer da demanda, não agora.

## O que medir a partir daqui

- `tools_zero_results`: cada consulta sem ferramenta é pauta.
- `tool_card_click` por `source_section`: se "busca" vencer "categoria", a busca sobe; se "destaques" não converter, a seleção editorial muda.
- `/ferramentas/` no GSC: hoje 15 impressões. O título novo é a primeira variável.
