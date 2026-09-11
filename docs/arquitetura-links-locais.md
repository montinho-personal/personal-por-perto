# Arquitetura de links locais — Brasil › Estado › Cidade › Bairro

Implementada em 11/09/2026. Este documento é a regra: quem for expandir o
sistema para os 91 bairros restantes segue o que está aqui.

---

## 1. O diagnóstico que motivou a mudança

A hierarquia estava correta no papel e frouxa no HTML. A auditoria
(`npm run audit:links`) mediu o grafo de links internos do `dist/` e achou
isto:

| tipo | páginas | links de entrada (média) | profundidade média |
|---|---|---|---|
| artigo | 164 | 66,6 | 1,91 |
| estado | 27 | 37,5 | 2,00 |
| cidade | 985 | 18,3 | 1,99 |
| **bairro** | **101** | **1,5** | **2,39** |

E a distribuição é pior que a média sugere: **63 das 101 páginas de bairro
recebiam exatamente um link interno em todo o site** — a pílula na página da
cidade-mãe. Nenhuma recebia link de hub estadual, nenhuma linkava o estado de
volta, e o breadcrumb tinha três níveis (Início › Cidade › Bairro) onde a
hierarquia real tem cinco.

O que **não** estava quebrado, e vale registrar para não ser "consertado" por
engano: zero links quebrados, zero páginas órfãs, zero canonical divergente,
zero link interno sem barra final, zero `nofollow` interno, zero UTM interno.
A higiene técnica já era boa; o que faltava era topologia.

## 2. A fonte central

`src/data/bairros.ts` é a única fonte de verdade dos bairros, e ganhou quatro
campos:

- `zona` — a divisão **real** da cidade (Zona Sul, Centro-Sul, Plano Piloto).
  É o único critério automático de "bairro relacionado" que o projeto aceita.
- `descricao` — frase curta e específica para o card na página da cidade.
- `relacionados` — relações declaradas à mão, cada uma com `motivo` escrito.
- `prioridade` — ordena os hubs.

`src/lib/geo.ts` é o resolver. Tudo que navega a hierarquia pergunta a ele:
breadcrumb visual, JSON-LD, cards da cidade, bloco do bairro, hub estadual,
auditoria.

### A regra que não se negocia

**Nada aqui infere proximidade.** Dois bairros só se relacionam se
compartilham `zona` ou se alguém declarou a relação com um motivo por escrito.
Mesmo estado não conta. Mesma cidade, sozinho, também não.

A consequência é visível e é desejada: **Icaraí e Gleba Palhano não têm bloco
de bairros relacionados**, porque são os únicos bairros publicados de Niterói e
de Londrina. O sistema fica em silêncio em vez de inventar vizinhança.

## 3. O que cada nível faz

| nível | aponta para | não aponta para |
|---|---|---|
| Rodapé | hub nacional, 8 cidades populares, categorias | bairro nenhum (0 links) |
| Hub nacional | estados, cidades, índice completo | bairros |
| Estado | cidades do estado + **até 8 bairros**, no máximo 1 por cidade na primeira rodada | todos os bairros de todas as cidades |
| Cidade | **todos** os bairros dela, em card com descrição e zona | bairro de outra cidade |
| Bairro | cidade-mãe, estado, 2–4 bairros relacionados, 2 guias, hub | rede bairro-para-todos |

O rodapé continua com 28 links internos e **nenhum bairro** — verificado no
HTML, não no código.

## 4. Breadcrumb

Cinco níveis, gerados por `crumbsBairro()`:

```
Início › Personal Trainer › Rio de Janeiro › Rio de Janeiro › Tijuca
```

Visual e JSON-LD saem da mesma função, então não podem divergir. As URLs do
`BreadcrumbList` são absolutas, HTTPS, com `www` e com barra final, e todas
apontam para páginas 200 — a auditoria falha se alguma não apontar.

## 5. Âncoras

Escritas em frase, nunca em lista de palavra-chave, e variadas de propósito.
Os guias contextuais de cada bairro têm âncora própria: "os critérios que
separam profissional de vendedor de treino" na Tijuca, "o passo a passo para
escolher um personal trainer" na Savassi, "quantas sessões por semana fazem
sentido" no Brooklin. Nenhuma âncora se repete literalmente entre as dez
páginas do piloto.

O `motivo` de cada bairro relacionado aparece como texto ao lado do link. Isso
não é enfeite: obriga quem acrescenta uma relação a justificá-la por escrito,
na frente do leitor.

## 6. Canibalização

Regra: **cada bairro é dono da própria consulta**. Menção ao vizinho é
permitida; disputar o título dele, não.

O caso corrigido em 11/09 foi Savassi × Lourdes. A página da Savassi citava
"Lourdes" 18 vezes, incluindo no H1, na `description`, num H2 ("Onde o treino
acontece: Savassi ou Lourdes?") e em duas perguntas do FAQ — enquanto
`/personal-trainer-lourdes/` existe e deveria ser dona dessa intenção.

O que mudou: H1, `description`, H2 e FAQs passaram a falar só da Savassi; as
menções que sobraram (6) são atribuições factuais — o Minas Tênis Clube I fica
no Lourdes, a Praça Marília de Dirceu fica no Lourdes — e cada uma **linka**
para a página do Lourdes. A FAQ comparativa foi mantida de propósito e agora
encaminha: "se o seu endereço é do lado de lá, o guia específico é o de
personal trainer no Lourdes — esta página trata da Savassi".

Nenhum redirect foi aplicado. Bairros legítimos com sobreposição textual se
corrigem por texto e por link, não por 308.

## 7. Como expandir para os 91 restantes

O mecanismo já está pronto; falta aplicar. Por página:

1. Preencher `zona` e `descricao` no registro do bairro em `bairros.ts`.
   Sem `zona`, o bloco de relacionados fica vazio — o que é correto, não é bug.
2. Trocar o `const crumbs = [...]` escrito à mão por
   `const crumbs = crumbsBairro('<slug>');`.
3. Inserir `<BairroLocal slug="<slug>" guias={[...]} />` logo depois do
   `</div>` do `guide-layout`, antes da seção de CTA.
4. Subir a data de revisão da página: o bloco é conteúdo visível novo.
5. Rodar `npm run build && npm run audit:links`.

**Ritmo:** por cidade, não por lote alfabético. Bairros da mesma cidade
compartilham zona e se linkam entre si, então fazer a cidade inteira de uma vez
é o que fecha a malha; fazer metade deixa links assimétricos. E cidade a cidade
preserva a leitura de atribuição no Search Console.

Ordem sugerida pela demanda medida: São Paulo (10 bairros), Belo Horizonte (8),
Rio de Janeiro (6), Curitiba (6), Salvador (5), Porto Alegre (6).

## 8. O que a auditoria cobre

`npm run audit:links` (`--piloto`, `--tabela`) roda sobre o `dist/` e falha com
código 1 em: link quebrado, link sem barra final, `nofollow` interno, UTM
interno, canonical ausente ou divergente, breadcrumb com URL inválida ou 404,
bairro que não linka a cidade-mãe, cidade que não linka o bairro, bairro sem
cidade-mãe válida, página órfã e lixo de template (`undefined`, `null`, `NaN`,
`[object Object]`).

Avisa, sem falhar, em: bairro que não linka o estado, bairro que não linka o
hub, `target="_blank"` interno e âncora vazia. Os 91 avisos de
`bairro-nao-linka-estado` que restam são exatamente os bairros fora do piloto —
o contador vai a zero quando a expansão terminar.
