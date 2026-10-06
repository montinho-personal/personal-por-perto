# Calculadora de pace — auditoria, crítica e plano

Briefing de 05/10/2026 ("Qual é meu pace?"). Registro do que a auditoria
achou, do que mudou em relação ao briefing e de como o motor calcula.

## 1. Auditoria

- **Conteúdo existente sobre pace:** nenhum. "Pace" aparece de passagem na
  calculadora de calorias da corrida (`/calorias/corrida/`, que usa o pace
  como entrada para estimar gasto), no método 12-3-30 e em dois guias
  (primeira corrida de rua, personal para corredores). Nenhuma página
  responde "qual é meu pace" nem "qual velocidade na esteira".
- **Search Console (30/09):** nenhuma consulta com "pace", "ritmo",
  "km/h" ou "esteira" passou do piso do export.
- **Canibalização:** a calorias da corrida responde *quanto gasta*; esta,
  *em que ritmo* e *em quanto tempo*. Intenções diferentes → URL própria,
  `/ferramentas/calculadora-de-pace/`, no padrão de 1RM, proteína e whey. As
  duas se linkam nos dois sentidos.
- **Benchmark (SERP brasileira, 06/10):** Omni (calculadora genérica, um
  formulário), Runna (pace por distância e tempo), Prommer (zonas de treino
  pelo VDOT), hacecuentas (espanhol) e matérias (Centauro). O que ninguém
  junta numa página só: os modos inversos, as parciais, o tempo de pista
  (400 m), a tabela de esteira e a comparação de dois ritmos.

## 2. Crítica ao briefing — o que mudou

1. **"Meu pace" e "pace para uma meta" são a mesma conta** (distância +
   tempo → pace). Ficam dois cards, porque a pessoa pensa diferente nos
   dois casos, mas um motor só. O card de meta ganha os atalhos de metas
   comuns e a linguagem de "você precisa manter".
2. **"Pace → velocidade" e "velocidade → pace" viram um conversor só**, com
   os dois campos ligados: digitar em um preenche o outro. Dois cards para
   a mesma conversão confundiriam.
3. **"Comparar ritmos" e "quanto ganho baixando 10 s/km" viram um modo só,
   "Comparar"**: o pace de hoje e o da meta, com atalhos de −5, −10, −15 e
   −30 s/km, e a diferença em 5 km, 10 km, meia e maratona. "Quero baixar
   meu tempo" é o modo meta com o tempo novo — um terceiro par de campos
   (dois tempos na mesma distância) seria a mesma resposta com mais
   formulário. É a Fase 2 do briefing, mas custa pouco.
4. **Previsão entre distâncias (Riegel) fica de fora.** O expoente 1,06 é
   ajuste médio, otimista para iniciante e conservador para elite. A página
   mostra a *projeção matemática* ("se mantiver este pace") com o aviso de
   que ela não é previsão, e explica por que não prevemos.
5. **Milhas:** só como unidade da distância personalizada (1 mi =
   1,609344 km), com o pace por milha como linha secundária quando ela é
   usada. Nada de toggle global poluindo a versão brasileira.
6. **Link compartilhável do cálculo por fragmento (`#…`)**, nunca por query:
   o Google não rastreia fragmento, então não nascem URLs indexáveis por
   combinação. O canonical fica limpo.
7. **Nenhuma página programática agora** (`/pace-5km-25-minutos` e afins).
   As metas comuns entram como atalhos e numa tabela da página; páginas
   próprias só se o Search Console mostrar demanda separada.

## 3. O motor (`src/lib/corrida/pace.ts`)

Tudo em **segundos** e **quilômetros**. Nada é arredondado antes do fim.

- pace (s/km) = tempo ÷ distância
- tempo = distância × pace
- distância = tempo ÷ pace
- velocidade (km/h) = 3600 ÷ pace; pace = 3600 ÷ velocidade
- milha = 1,609344 km

Arredondamento só na exibição: pace e tempo ao segundo inteiro (o
arredondamento é feito no total de segundos, então 359,6 s vira "6:00",
nunca "5:60"); velocidade com até duas casas ("10,91"; "12", não "12,00");
na tabela de esteira, uma casa, que é o que o painel mostra.

Parciais: por quilômetro até 25 linhas; acima disso, pontos-chave (1, 5,
10, 15, 20, meia, 25, 30, 35, 40, final), com "ver todos os quilômetros".
O último trecho fracionário aparece com a distância real (ex.: "21,1 km").

Alertas, sem bloquear: pace abaixo de 2:30/km (mais rápido que recorde
mundial de 5 km) ou acima de 30:00/km (2 km/h) pede para conferir os
valores.

## 4. Analytics

`pace_tool_view`, `pace_tool_start`, `pace_mode_selected`,
`pace_calculated`, `pace_goal_calculated`, `pace_time_calculated`,
`pace_distance_calculated`, `pace_speed_converted`,
`pace_splits_viewed`, `pace_treadmill_viewed`, `pace_comparison_used`,
`pace_shared`, `pace_related_tool_clicked`, `pace_find_personal_clicked`.

Parâmetros só em categoria: `mode`, `distance_category` (1k, 3k, 5k, 10k,
15k, 21k, 42k, outra), `pace_bucket` ("5_6" = entre 5 e 6 min/km). Nada de
tempo exato. Cálculo aberto por um link compartilhado leva `source=link`
até a primeira interação, para não inflar a contagem de cálculos.

## 5. Fases

- **Fase 1 (entregue):** pace, tempo, distância, conversor, meta, parciais,
  pista (200/400/800 m), esteira, projeção, comparar ritmos, compartilhar.
- **Fase 2:** últimos cálculos no aparelho; "minhas metas".
- **Fase 3:** previsão entre distâncias como módulo separado, com o método
  declarado.

## 6. Integração e QA (06/10)

- **Catálogo:** entrada `calculadora-de-pace` (categoria treino). O alias
  "pace" saiu da calorias da corrida, que agora lista a de pace como
  relacionada; quem busca "pace" na central cai aqui.
- **Link de volta:** dica sob o campo de ritmo em `/calorias/corrida/`
  ("Não sabe o seu ritmo?"). É convite de ferramenta, não revisão de
  conteúdo: `atualizadoEm` não sobe, pela mesma regra do FerramentaInline.
- **FerramentaInline:** nenhum bloco novo. Os artigos de corrida
  (primeira corrida de rua, 12-3-30, esteira ou bicicleta) já têm o seu,
  e a regra é um por artigo. O de musculação para corredores fala de pace
  só de passagem; fica na fila do mapa, para a rotina diária decidir.
- **Imagem OG:** a padrão do site, como as outras calculadoras.
- **Navegador (Playwright):** 5 km em 27:30 → 5:30 e 10,91 km/h; 10 km em
  50 min → 5:00 e 12 km/h; meia em 2h e maratona em 4h → 5:41; 22
  parciais na meia; 11 pontos-chave e 43 linhas na maratona; 8,4 km em
  47:13 → 5:37; conversor nos dois sentidos; comparar 6:00 → 5:50 = 1:40
  em 10 km; aviso de segundos > 59; alerta de pace irreal; fragmento
  restaurado e fragmento inválido sem erro; nenhuma largura de 320 a
  1280 px com rolagem lateral; eventos só com categorias.
- **axe:** sem violação na calculadora. Os avisos de contraste restantes
  são de componentes do site inteiro (cards de relacionados, botão do
  cookie) e aparecem igual na 1RM.

## 7. Prints do Google (06/10, mesmo dia da publicação)

O Renato mandou ~20 prints de autocompletar, "Outras pessoas pesquisaram",
"As pessoas também perguntam" e visão geral de IA. Os grupos que
apareceram e onde cada um entrou:

| Grupo de busca | Onde entrou |
|---|---|
| pace ↔ km/h (tabela, "pace 6 30 em km h", "14 km h pace", "pace 3 em km h", 9/10/12/15 km/h) | título passou a "Calculadora de Pace e Km/h…"; tabelas da esteira ampliadas para 3:00–9:00 e 5–20 km/h; FAQ de conversão com "minutos decimais" e os valores mais buscados |
| esteira ("quanto é o pace na esteira", "1 km na esteira", "esteira x rua", "velocidade 10", "pace 7") | três FAQs (pace na esteira, 1 km, esteira × rua) e H3 "Pace na esteira x rua"; "vale para qualquer marca" (Movement, Matrix…) |
| 5 km em X minutos (15 a 37) e "pace ideal 5K", "é bom 22/37 min", "possível 14 min" | tabela de 5 km minuto a minuto (15–40) e três FAQs |
| 10 km (1 hora, 1h10, 1h30, 40 min; "pace de 10 é bom") | tabela de 10 km (40 min–1h30) e FAQ de 1 hora fundida com "é bom" |
| meia maratona (1h30, 1h45, 1h50, 2h, sub 2; "possível 21 km em 2h", "4:30 é bom") | tabelas de meia (1h20–3h) e maratona (3h–6h) e duas FAQs; "4:30/7/10 é bom" numa só |
| maratona (sub 4, sub 3:30, sub 3, 3h30, 2 horas, "pace 5:30", "pace de um maratonista") | FAQs de sub 4/3:30/3 e de elite/42 km em 2 horas; parágrafo sobre o arredondamento; linha "para fechar abaixo" no modo meta (prints da noite de 06/10) |
| natação, bike, Strava, tempo run | linha "por 100 m (natação)" quando a distância é em metros; seção "Pace na natação e na bike"; FAQs de Strava e tempo run |

Decisões:

- **"Sub" usa outro pace** (`paceParaFicarAbaixo`): a maratona em 3 horas dá
  4:15,97/km, que aparece como 4:16 — e 4:16 cravado termina em 3:00:02.
  Sub 3:30 tem o mesmo problema (4:59 estoura; o certo é 4:58). Os resumos
  de IA e os concorrentes mostram o pace arredondado; a calculadora mostra
  os dois no modo meta.
- **Provas específicas** (Londres, Boston, São Silvestre) e "recorde" não
  ganharam seção: são intenções de notícia, não de cálculo.
- **Nenhuma página por tempo** ("pace 5 km 23 min"): uma tabela gerada pelo
  motor (`tabelaTempos`) responde todos os minutos. A política de
  conteúdo em escala é o risco; a tabela é a resposta útil.
- **"Bom ou ruim"** sem tabela de nível (iniciante/intermediário/avançado,
  como a visão geral de IA mostra): não há fonte boa para essas faixas.
  A resposta é o pace de cada caso em números e "bom para fases
  diferentes".
- **Recordes** só como "abaixo de 13 minutos" (5 km de rua), afirmação que
  continua verdadeira se o recorde cair.
- **FAQ em 20**: fundidas em vez de somadas (10 km + "é bom"; 4:30, 7 e 10
  numa só; relógio pulando foi para a do Strava; milha saiu, o texto e a
  ferramenta já cobrem).

## 8. Auditoria de 06/10 (quatro especialistas, em paralelo)

Matemática, código do client, UX/mobile/acessibilidade e SEO/conteúdo.
Nenhum agente editou arquivo; cada achado foi conferido antes de corrigir.

**O que estava errado e foi corrigido:**

- **Fato desatualizado** (achado por dois especialistas, conferido em
  várias fontes): a página dizia que só Kipchoge tinha corrido abaixo de 2
  horas. Em 26/04/2026, na Maratona de Londres, Sabastian Sawe fez 1:59:30
  em prova oficial — recorde mundial. FAQ reescrita.
- **"Sub" estourava na meia**: o texto dava o pace arredondado (1h30 = 4:16,
  que fecha em 1:30:01). Agora os textos usam `paceParaFicarAbaixo`, que
  também passou a seguir a regra de rua (tempo oficial arredondado para o
  segundo de cima): sub 2:53 na maratona é 4:05, não 4:06. Conferido por
  força bruta em 2.786 metas. "4:15,97" era 4:15,95 — agora calculado.
- **"1.500 metros" lido como 1,5 m**: `parseNumero` aceita milhar quando a
  unidade é metros. "21.097" km segue decimal.
- **Client**: `<details>` fechavam a cada tecla (e a página pulava ~900 px);
  link do cálculo ficava apontando para um cálculo que já tinha saído da
  tela; "ver todos os km" persistia entre distâncias e gerava eventos
  falsos; evento saía com o modo errado; mesmo cálculo contado duas vezes;
  rótulo do "copiar" preso; milhas e metros não voltavam pelo link; 11 km/h
  virava 11,01; avisos piscando no meio da digitação ("10,", "7" a caminho
  de "75", alerta de recorde com "2" antes de "27"); compartilhar falhava
  calado. Teste de regressão no navegador para cada um.
- **Acessibilidade**: tabelas do resultado não eram alcançáveis pelo
  teclado a 320 px (WCAG 2.1.1) — agora `role=region tabindex=0`; o foco ia
  para um campo ao trocar de modo (abria o teclado do celular e escondia o
  cartão escolhido) — agora fica no botão e o modo é anunciado; campos com
  erro ganham `aria-invalid`; "+"/"−" dos `<summary>` não são lidos.
- **Mobile**: o app começava em 822 px a 360 px de largura (1,9 tela);
  hero enxuto, agora em 448 px. As 15 metas viram faixa rolável. Tabelas
  lado a lado empilham abaixo de 560 px. Tabela de pace com a 1ª coluna
  fixa e passos de 15 s. O WhatsApp flutuante some enquanto a calculadora
  está na tela. Placeholders numéricos saíram (pareciam valores digitados).
  Botão "Limpar".
- **Conteúdo**: dor sem ressalva na FAQ de "bom pace" (regra do projeto) e
  "melhorar sem lesão" (promessa) corrigidos; "nenhum número escrito à mão"
  era falso (recordes e estudo são digitados) e foi reescrito; afirmações
  sem fonte ("para muita gente", "meta clássica") viraram o que os prints
  mostram ("das que mais aparecem nas buscas"); pace 10:00 deixou de ser
  "fronteira com o trote" (a transição natural fica perto de 7 km/h).
- **Estrutura**: km/h subiu para logo depois de "Como calcular"; 5 km e 10
  km ganharam H3 próprios; a tabela de metas saiu (as 15 linhas já estavam
  nas tabelas por distância e carregavam o erro do "sub"); a seção de
  natação e bike saiu (as FAQs cobrem). FAQs de 20 para 17, sem
  duplicar o corpo.
- **Link de entrada**: dica em `/calorias/hyrox/` sob o campo de pace
  (convite de ferramenta, `atualizadoEm` não sobe).

**Ficou de fora, com motivo:**

- Contraste de `.related-link`, `#w-*` e `#cookie-aceitar` (3,89:1 e
  3,11:1): componentes do site inteiro, aparecem igual na 1RM. Correção
  global separada.
- `datePublished` e ligação "Revisado por" ↔ `Person` no schema: padrão de
  `articleSchema` no site todo; infraestrutura, de uma vez, sem tocar datas.
- Links de texto para cá em `/guias/primeira-corrida-de-rua/` e
  `/guias/personal-trainer-para-corredores/`: a exceção do CLAUDE.md para
  link em palavra existente cobre calculadoras de calorias; para a de pace,
  pela regra atual, subiria `atualizadoEm`. Decisão do Renato.
- Recolher linhas das tabelas longas: esconderia justamente as linhas que a
  busca procura ("5 km em 30 min" fica no fim da tabela de 5 km).

## 9. Como medir

Search Console: a URL é nova. Comparar em 30 dias as consultas com "pace",
"ritmo" e "esteira". GA4: proporção de cálculos por modo (qual intenção
realmente chega) e uso das parciais e da esteira.
