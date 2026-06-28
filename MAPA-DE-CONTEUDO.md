# Mapa de Conteúdo e Plano de Linkagem — Personal por Perto

> Etapa obrigatória antes da implementação. Mapeia categorias, clusters, hubs,
> pilares e satélites, e define o grafo de links interno/externo. Regra de ouro de
> cada link: **"isto ajuda o leitor a continuar a jornada?"** Se não, o link não existe.

## 1. Arquitetura de conteúdo

### Categorias e tipos de página
| Tipo | Papel | Páginas | Intenção de busca |
|---|---|---|---|
| **Home** | Porta de entrada / hub raiz | `/` | Navegacional / descoberta |
| **Hub de cidades** | Diretório (pilar de navegação local) | `/personal-trainer` | Navegacional |
| **Hub estadual** | Cluster regional | `/estado/sao-paulo`, `/estado/parana` | Local amplo |
| **Página de cidade** (satélite/money) | Conversão local | `/personal-trainer/{cidade}-{uf}` (7) | **Transacional local**: "personal trainer + cidade" |
| **Guia pilar** | Autoridade temática | `/guias/como-escolher-personal-trainer`, `/guias/quanto-custa-personal-trainer` | Informacional/comercial |
| **Índice de guias** | Hub de guias | `/guias` | Navegacional |
| **Conversão** | Recomendação editorial | `/montinho-personal` | Comercial |
| **EEAT/Institucional** | Confiança | `/sobre`, `/como-avaliamos` | Confiança/transparência |

### Clusters semânticos
- **Cluster Local (cidades)** — pilar: `/personal-trainer`. Satélites: 7 páginas de
  cidade + 2 hubs estaduais. Conecta-se por vizinhança geográfica.
- **Cluster Decisão (comercial)** — pilar: `como escolher`. Satélite forte: `quanto custa`.
  Responde "como escolher → quanto custa → quem contratar".
- **Cluster Conversão** — `/montinho-personal` (destino editorial, foco emagrecimento online).
- **Cluster Confiança (EEAT)** — `sobre` + `como avaliamos` (metodologia/transparência).

## 2. Hubs e fluxo de autoridade

```
                         HOME
                          │
        ┌─────────────────┼──────────────────┐
   /personal-trainer   /guias            /montinho-personal
   (pilar local)    (pilar decisão)       (conversão)
        │                │
   hubs estaduais    como escolher ⇄ quanto custa
        │                │  ▲           ▲
   páginas de cidade ────┘  └─── links contextuais ──┘
        │  (vizinhança)
        └── São Paulo = hub local mais forte (recebe links dos vizinhos)
```

- **Página de maior autoridade-alvo:** `São Paulo` (capital, recebe links de
  Guarulhos, Osasco, Santo André, Barueri via vizinhança e prosa).
- **Pilares reforçados:** `como escolher` e `quanto custa` recebem links contextuais
  de todas as páginas de cidade (seções "como escolher" e "quanto custa").

## 3. Plano de linkagem interna (por intenção)

### Jornada comercial (intenção → próximo passo)
`personal para emagrecimento` → `como escolher` → `quanto custa` → `acompanhamento online (Montinho)`
→ de volta para `cidade` (treino local) — ciclo de navegação real, não beco sem saída.

### Regras aplicadas
- **Links contextuais** dentro do texto, distribuídos (nunca só no fim).
- **Âncoras variadas** (ver §5) — sem keyword stuffing.
- **Vizinhança de cidades** na prosa, além dos cards de "cidades próximas".
- **Pilares** citados nas seções correspondentes de cada cidade.
- **Breadcrumbs** em todas as páginas (já implementado, schema `BreadcrumbList`).
- **Artigos relacionados** semânticos no fim de cada guia.
- **Sidebar** com widgets úteis (guias, cidades populares, categorias) — sem exagero.

## 4. Plano de linkagem externa (autoridade / EEAT)

Apenas fontes oficiais e reconhecidas, inseridas onde aumentam credibilidade:

| Contexto | Fonte externa |
|---|---|
| Benefícios de atividade física | **OMS** (diretrizes) + **Ministério da Saúde** |
| Prescrição/diretrizes de exercício | **ACSM** (American College of Sports Medicine) |
| Treinamento de força / hipertrofia | **NSCA** |
| Saúde do exercício / avaliação | **Sociedade Brasileira de Medicina do Exercício e do Esporte** |
| Dados locais das cidades | IBGE, prefeituras (já citados em cada cidade) |

Links externos: `target="_blank" rel="noopener"`, dofollow para fontes de alta
autoridade (gov/edu/entidades) — são sinais de confiança, não devem ser nofollow.

## 5. Banco de âncoras (variação natural)

Para uma mesma cidade/serviço, alternar entre:
- `personal trainer em {Cidade}`
- `treinador particular em {Cidade}`
- `profissional de educação física em {Cidade}`
- `acompanhamento de treino em {Cidade}`
- `treino personalizado em {Cidade}`

Para serviços/intenções:
- `como escolher um personal trainer` · `guia para contratar com segurança`
- `quanto custa um personal trainer` · `faixas de preço` · `quanto investir`
- `acompanhamento online` · `consultoria personalizada` · `especialista em emagrecimento`

## 6. Lacunas identificadas (oportunidades de novos conteúdos)
Ver relatório final (`RELATORIO-LINKAGEM.md`) para a lista priorizada. Resumo:
páginas de bairro (Pinheiros, Moema, Alphaville…), guias por objetivo
(emagrecimento, hipertrofia, treino feminino, idosos), "personal online" como pilar,
e "personal trainer x academia" — todos preenchem nós faltantes do grafo semântico.
