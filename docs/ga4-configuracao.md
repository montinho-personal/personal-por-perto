# GA4 — o que precisa ser configurado na interface

O site já **envia** tudo o que está aqui. O GA4, porém, só **mostra** um
parâmetro depois que ele é registrado como dimensão personalizada: até lá o
dado é coletado, guardado e invisível nos relatórios — e não há
retroatividade. Um parâmetro registrado hoje só aparece a partir de hoje.

Por isso esta lista existe: é a única parte do rastreio que não dá para
resolver no código.

---

## 1. Dimensões personalizadas (Administrar → Definições personalizadas)

Escopo **Evento** em todas. Limite da conta: 50 — a lista usa 18.

### Contexto da página (as mais importantes: cruzam com TODOS os eventos)

| Nome de exibição | Parâmetro | O que é |
|---|---|---|
| Tipo de página | `page_type` | cidade, bairro, estado, artigo, ferramenta, hub, institucional |
| Cluster | `cluster` | musculação, emagrecimento, preço, local… |
| Subcluster | `subcluster` | a regra específica que classificou a página |
| Etapa do funil | `funnel_stage` | descoberta, consideração, decisão |
| Intenção de busca | `search_intent` | local, preço, formato, escolha, execução… |
| Título da página | `page_title` | título do artigo |
| Cidade | `city` | slug da cidade, quando a página tem uma |
| Dispositivo | `device` | mobile / desktop |
| Rolagem (%) | `scroll_pct` | quanto da página tinha sido rolado no momento |

### Clique em qualquer botão (evento `clique_elemento`)

| Nome de exibição | Parâmetro | O que é |
|---|---|---|
| Elemento | `element_id` | `regiao:papel` ou o nome declarado em `data-track` |
| Região | `region` | header, rodapé, sticky, slide-in, hero, artigo, sidebar… |
| Papel do link | `link_role` | cta-primario, cta-secundario, pilula, nav, card, link-texto |
| Grupo de destino | `destination_group` | whatsapp, montinho, ferramenta, cidade, conteúdo… |
| Destino | `destination` | a URL/âncora exata |
| Texto do elemento | `element_text` | rótulo visível, cortado em 60 caracteres |

### Campanhas de conversão (CTA, sticky, slide-in, bloco editorial)

| Nome de exibição | Parâmetro | O que é |
|---|---|---|
| Intenção da oferta | `offer_intent` | o que aquele componente está oferecendo |
| Variante (A/B/C) | `cta_variant` | letra da variante em teste |
| Posição do CTA | `cta_position` | início, meio, fim, pós-artigo |

> Os parâmetros próprios de cada superfície (`sticky_rule`, `slidein_block`,
> `recommendation_context`, `cta_campaign`…) só valem a pena registrar
> quando você for otimizar aquela superfície especificamente. Comece pelas
> 18 acima; elas respondem "qual botão converte", que é a pergunta atual.

---

## 2. Eventos personalizados — nada a fazer

`clique_elemento`, `sticky_click`, `slidein_click`, `recommendation_click`,
`contextual_cta_click` e os eventos das ferramentas chegam sozinhos: o GA4
aceita qualquer nome de evento enviado por `gtag('event', …)`. Eles aparecem
em **Relatórios → Engajamento → Eventos** algumas horas depois do primeiro
disparo. Não é preciso criar nada.

## 3. Conversões (Administrar → Eventos-chave)

Marcar como evento-chave, quando aparecerem na lista:

- `clique_elemento` **não** — é volume demais, contamina a taxa de conversão.
- `sticky_click`, `slidein_click`, `recommendation_click`,
  `contextual_cta_click` — sim: são intenção declarada.
- O clique em WhatsApp já é distinguível por `destination_group = whatsapp`
  dentro de `clique_elemento`; se quiser isso como conversão, crie um evento
  personalizado no GA4 a partir dessa condição em vez de marcar o evento
  inteiro.

## 4. Consentimento (LGPD)

O `gtag` só existe depois que o visitante aceita os cookies. Isso é
intencional e não deve ser "corrigido": antes do aceite, nenhum evento é
enviado. Ao conferir em tempo real, aceite o banner primeiro — senão o
DebugView fica vazio e parece que o rastreio quebrou.

---

## Regra de manutenção

O vocabulário acima é único para as cinco superfícies: o mesmo conceito usa
o mesmo nome em todo lugar, para que uma dimensão sirva a todos os
relatórios. Ao criar um evento novo, reutilize os nomes desta tabela em vez
de inventar um sinônimo (`device_type`, `content_category`, `scroll_depth` e
`article_title` já foram eliminados exatamente por isso).
