# Hyrox — mapa de oportunidades (AnswerThePublic, 23/10/2026)

O Renato mandou 6 exportações do AnswerThePublic: "hyrox" (Google e Bing),
"hyrox em", "hyrox alphaville", as árvores de PAA de "hyrox" e "hyrox em" e
os prompts de ChatGPT e Gemini. Arquivos em
`docs/pesquisas/2026-10-23-hyrox/answerthepublic/`.

**O que esses dados são e o que não são.** Volume e lista de buscas reais:
servem para escolher o que criar e em que ordem. Não substituem os prints do
Google de cada peça (CLAUDE.md): título, H1, seções e FAQs de cada artigo
novo esperam os prints da busca principal. Os volumes são estimativas da
ferramenta, mensais, Brasil.

## O tamanho

2.605 buscas únicas no Google, cerca de 36 mil por mês somadas. Por tema
(Google e Bing, sem repetição):

| tema | termos | volume/mês | o que puxa |
|---|---|---|---|
| cidades e eventos | 232 | ~8.100 | hyrox sp, curitiba, brasília (590 cada), rj, porto alegre (480), bh (390), salvador, campinas (320) |
| tênis, roupa, mochila | 278 | ~5.800 | tênis hyrox puma (590), tênis hyrox (480), tênis para hyrox (390), feminino (260), melhor tênis (260) |
| treino | 251 | ~4.000 | treino de hyrox, hyrox workout(s) (480), training club (320), wod (260), em casa, iniciante |
| CrossFit × Hyrox | 137 | ~2.300 | hyrox crossfit (880), o que é hyrox no crossfit (390), hyrox vs crossfit (320) |
| onde treinar | 76 | ~1.900 | hyrox perto de mim (590), aulas de hyrox (320), hyrox academia (260), onde treinar (210) |
| o que é | 99 | ~1.400 | o que é o hyrox, o que hyrox (260), hyrox esporte (170), significado (90) |
| estações | 56 | ~1.300 | sled pull (320), sled push, skierg (260), sled (210), wall ball |
| pesos e categorias | 62 | ~250* | categorias, pesos, doubles, open × pro, relay |
| PFT | 6 | ~740 | pft hyrox (480), hyrox pft (260) |
| resultados e tempos | 32 | ~630 | hyrox results (390), ranking, recorde |
| relógio | 51 | ~410 | amazfit hyrox (170), garmin, "como colocar hyrox no garmin" |
| inscrição e preço | 32 | ~200 | são paulo inscrição, rio de janeiro inscrição, valor |
| emagrecer | 8 | ~30 | hyrox emagrece; PAA "ajuda a emagrecer?", "define o corpo?", "é cardio?" |

\* sem contar "academia elite core hyrox são paulo" (880), nome de academia.

Bloco "prova": prova hyrox (590), hyrox prova (480), provas hyrox (320),
prova oficial (260+170), exercícios (210+140) — ~2.500 a mais que sustentam
a página-pilar.

PAA ("hyrox" e "hyrox em"): o que faz no Hyrox · vantagens · diferença com
CrossFit · Hyrox define o corpo · ajuda a emagrecer · é cardio · como é um
treino · quais exercícios · qual academia tem · como treinar em casa ·
quantas vezes por semana · treino para iniciantes · **quem faz Hyrox precisa
fazer musculação?** · quais equipamentos.

Prompts de IA (ChatGPT e Gemini): tênis, equipamento, roupa, nutrição,
suplementos, recuperação, aquecimento, ritmo entre estações, prevenção de
lesão, preparação mental, custo de participar, **como contratar um personal
com experiência em Hyrox**, coaching online.

## O que o site já tem e o que já chega

- `/guias/hyrox-sao-paulo-2026/`: 50 consultas no GSC em 28 dias, todas do
  evento (local, horário, ingresso, "próximo hyrox são paulo"), posição 5–10,
  1 clique.
- `/calorias/hyrox/` e as 11 páginas locais (`docs/hyrox-local.md`): ainda
  sem dado.
- Não existe página que responda "o que é Hyrox", "Hyrox × CrossFit", treino,
  estações ou pesos.

## Proposta, em ordem

Critério: volume × encaixe com o portal (treino com fonte, ferramentas,
personal) × o que dá para afirmar com fonte.

### Artigos

1. **Hyrox × CrossFit** — ~2.300/mês, PAA nas duas árvores, termo mais
   buscado do conjunto (880). Responde também "Hyrox emagrece / define o
   corpo / é cardio", ligando a `/calorias/hyrox/` e `/calorias/crossfit/`.
2. **O que é Hyrox (pilar)** — o que é, como funciona a prova, as 8
   estações, categorias (Open, Pro, duplas, revezamento, adaptadas), Roxzone,
   regras e penalidades, como se inscrever. Vira o hub de todas as páginas de
   Hyrox. Pesos por categoria e regras **só pelo rulebook oficial**.
3. **Treino de Hyrox** — como é o treino, quantas vezes por semana,
   iniciante, em casa, na academia, "precisa fazer musculação?". Sem planilha
   pronta (treino é prescrição individual); com a lógica de montar a semana
   e a ferramenta no corpo.
4. **As estações do Hyrox** (sled push e pull, SkiErg, wall ball…) — técnica
   e erros comuns; pode nascer como seção do pilar e virar página se a busca
   se mostrar.
5. **PFT Hyrox** — 740/mês, mas antes conferir na fonte oficial o que é
   exatamente; sem isso, não entra.
6. **Tênis para Hyrox** — o maior bloco comercial (~5.800). Só faz sentido
   como "o que a prova exige do tênis", sem ranking de modelos que ninguém
   testou. Depende de decisão do Renato (ver perguntas).

### Ferramentas

- **Calculadora de tempo de prova** (meta de tempo ↔ pace de corrida e tempo
  por estação, com Roxzone): mesma família da calculadora de pace e da de
  calorias do Hyrox; não depende de dado externo porque a pessoa informa os
  próprios ritmos.
- **Tabela de pesos por categoria** (filtro Open/Pro, masculino/feminino,
  duplas): responde "pesos", "wall ball weight", "open ou pro". Depende do
  rulebook oficial.

### Atualizações

- `/guias/hyrox-sao-paulo-2026/`: "próximo hyrox são paulo" já aparece no
  GSC. Agregador fala em 8–9/05/2027 — só entra com a página oficial.
- `/calorias/hyrox/`: FAQ "Hyrox emagrece?" quando o artigo Hyrox × CrossFit
  existir, para não duplicar.
- 11 páginas locais: PAA "quantas vezes por semana" e "precisa de
  musculação" vão para o artigo de treino, com link — não para as 11.

### O que fica de fora (por enquanto)

- **Novas páginas de cidade fora da região presencial** (Curitiba, Brasília,
  Rio…): volume alto, mas é busca de evento ou academia que o portal não
  confirma. Esperar o resultado das 11 locais no GSC antes de replicar.
- Nutrição, suplementos, recuperação: sem fonte específica de Hyrox; entram
  como seção curta do artigo de treino, com nutricionista.
- Relógio (Garmin/Amazfit): exige manual oficial de cada marca; baixo
  volume.

## Andamento

- 23/10: leva 1 publicada — `/guias/o-que-e-hyrox/` (com a tabela oficial de
  pesos, que estava na página da prova) e `/guias/hyrox-vs-crossfit/`.

- 24/10: leva 2 começou — `/guias/treino-hyrox/`. Falta a calculadora de
  tempo de prova (prints de "tempo hyrox").

- 26/10: leva 3 começou — `/guias/tenis-para-hyrox/`, publicado antes dos
  prints a pedido do Renato (`docs/tenis-para-hyrox.md`).

## AnswerThePublic de "tempo hyrox" (27/10/2026)

Três exportações do Renato em `docs/pesquisas/2026-10-27-tempo-hyrox/answerthepublic/`
(Google e Bing, PAA, prompts de ChatGPT e Gemini).

**O que veio.** 159 sugestões no Google, mas cerca de dois terços são em
italiano ("tempo" = tempo, em italiano: *tempo medio hyrox coppia*, *miglior
tempo hyrox rimini*) e um bloco é "tempo run" (treino em inglês) ou nome de
tênis (*Cloud X Tempo*, *Hyperion Tempo*, *Kiprun Kipstorm Tempo*). Volume
quase nulo: só cinco termos com 10/mês, um deles em português — **melhor
tempo hyrox**. O Bing só trouxe italiano.

**O que é intenção real em português**, por grupo:

| grupo | termos | onde responde |
|---|---|---|
| quanto dura | quanto tempo dura hyrox · hyrox quanto tempo · hyrox tempo de prova · tempo prova hyrox · tempo médio (de um) hyrox · tempo médio prova | pilar `/guias/o-que-e-hyrox/` (já tem "quanto tempo dura") |
| referência de tempo | melhor tempo hyrox (10) · melhor tempo hyrox brasil · tempo recorde · tempo mínimo / máximo · tempo elite | só com resultado oficial — sem fonte aberta aqui |
| por categoria | tempo hyrox dupla · misto · pro · open · tempo hyrox são paulo | idem |
| por estação | tempo médio wall ball · burpees · skierg · remo | a calculadora (tempo por estação) |
| tempo limite | tempo máximo hyrox | regra do rulebook — PDF bloqueado aqui |

PAA: quase nada sobre tempo de prova — vem "o que é um treino de Hyrox",
"For Time" do CrossFit, "45 minutos de treino são suficientes?" e **"qual o
melhor relógio para Hyrox?" / "o que é HYROX no Amazfit?"**. Prompts de IA:
equipamento e relógio para medir tempo, plano de treino para melhorar o
tempo, tênis, ritmo por estação, tempo médio, treinador online.

**Leitura.** A busca por "tempo" de Hyrox no Brasil é pequena e se divide
entre "quanto dura" (o pilar já responde) e "qual é um bom tempo" (que pede
resultado oficial com fonte). A calculadora continua fazendo sentido como
ferramenta — "qual pace e qual tempo por estação a minha meta pede" —, mas
não como resposta a demanda medida: entra pelo encaixe com a família (pace,
calorias do Hyrox), não pelo volume. Relógio reaparece (PAA e IA) — segue
fora por exigir manual de cada marca.

### Prints de "tempo hyrox" (27/10/2026, 06h51, Renato)

Arquivos em `docs/pesquisas/2026-10-27-tempo-hyrox/prints/` (01 a 04).

| tela | o que mostrou | leitura |
|---|---|---|
| autocompletar (01) | são paulo · ayala 30th · gym · training club · dupla · pro · open | tempo por **categoria** (dupla, Pro, Open) e por **etapa** (São Paulo) — a calculadora precisa de seletor de categoria |
| visão geral de IA (02) | "tempo médio" 1h30–2h para recreativos, <1h15 treinados, elite ~57 min (H) e 1h03 (M), recorde de duplas 53:56 — citando getfitcraft e hyroxbrazil. **Não é fonte** | nenhum desses números entra sem resultado oficial; mostra que a pergunta é "qual é um tempo bom" |
| resultados e PAA (03) | **um concorrente já tem "Calculadora de Tempo do Hyrox: Pace, Estações e Roxzone"** (publicada há 4 dias); PAA: quanto tempo é o Hyrox? · qual o melhor tempo do Hyrox? · **o pace 7 é ruim?** · qual o recorde de tempo do Hyrox? | o Google já serve a intenção com uma calculadora — confirma o formato. "Pace 7 é ruim?" liga direto à calculadora de pace e a esta |
| outras pessoas (04) | hyrox brasil · o que é hyrox na academia · hyrox vs crossfit · prova completa · como funciona · prova oficial | quase tudo já respondido pelo pilar e pelo comparativo |

**Decisão a tomar com o Renato:** a calculadora entra (formato confirmado
pelo resultado do concorrente), com meta de tempo → pace por km e tempo
por estação, seletor de categoria (Open, Pro, dupla) e FAQs de "quanto
tempo dura", "pace 7 é ruim?" e "qual é um bom tempo" — esta última só com
resultado oficial ou estudo (Brandt 2025, Gutiérrez-Hellín 2026).

## Ritmo

Cria páginas novas → dividir. Leva 1: Hyrox × CrossFit e o pilar "O que é
Hyrox" (os dois se linkam e sustentam todo o resto). Leva 2: treino + a
calculadora de tempo. Leva 3: estações/pesos, conforme o rulebook.

## Decisões do Renato (23/10/2026)

- **O Montinho prepara alunos para o Hyrox** (confirmado na conversa). As 11
  páginas locais, o pilar e o comparativo ganharam a seção/FAQ "personal para
  o Hyrox" com chamada direta (`data-track="hyrox:cta-whatsapp"`), presencial
  na região e online. Nada além disso é afirmado: sem promessa de tempo ou
  resultado.
- **Tênis:** só o artigo "o que a prova exige do tênis", sem ranking de
  modelos (nenhum foi testado). Antes de título e FAQs, prints de **"tênis
  para hyrox"** (autocompletar, PAA, outras pessoas, visão geral de IA).
