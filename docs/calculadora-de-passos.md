# Calculadora de passos — auditoria, crítica e plano

Briefing de 14/10/2026 ("Calculadora de passos completa"). Registro do que a
auditoria achou, do que mudou em relação ao briefing, do que já está
verificado e do que ainda espera fonte ou print.

**Estado em 14/10/2026 (noite): página no ar** em
`/ferramentas/calculadora-de-passos/`, montada depois dos prints (seção 11).

**Estado anterior, 14/10/2026 (fim do dia):** motor e testes prontos
(`src/lib/caminhada/passos.ts`, `npm run test:passos`), com o modelo do passo
fechado em fonte primária lida no texto completo (CADENCE-Adults, seção 5).
A página NÃO foi criada: título, H1, seções, tabelas do texto e FAQs esperam
os prints do Google (regra do CLAUDE.md). O defeito da calculadora de
caminhada foi confirmado e corrigido (seção 3, item 3).

## 1. Auditoria do portal

- **Conteúdo existente sobre passos:**
  - `/emagrecimento/quantos-passos-por-dia/` — artigo, responde "quantos
    passos por dia para emagrecer", origem dos 10 mil, calorias de 10 mil
    passos (faixa 300–500 kcal) e passos × musculação.
  - `/calorias/caminhada/` — calculadora com modo "Sei os passos": passos →
    tempo pela cadência → kcal pelo MET. Recusa de propósito converter passos
    em distância.
  - Menções de passagem em ~35 páginas (NEAT, platô, quem trabalha sentado).
- **Search Console (últimos 90 dias até 14/10):** 13 consultas com "passo",
  todas caindo no artigo, todas com 1–2 impressões, nenhum clique. Intenção
  100% "por dia / emagrecer / meta". **Nenhuma consulta de conversão** ("em
  km", "1 km", "calculadora") — é cluster onde o site não existe.
- **Canibalização — divisão proposta:**

  | página | intenção central | não responde |
  |---|---|---|
  | calculadora de passos (nova) | converter passos ↔ km, tempo, "quanto falta" | quanto devo andar para emagrecer (só resume e linka) |
  | artigo quantos passos por dia | quantos passos por dia, emagrecer, origem dos 10 mil | conversão (linka a calculadora) |
  | calorias da caminhada | quanto gasta caminhando (tempo, distância, ritmo, inclinação) | passos → km |
  | calculadora de pace | ritmo e velocidade | passos |

  O modo "Sei os passos" da caminhada fica, porque lá a pergunta é gasto; a
  calculadora de passos dá a estimativa rápida e manda para a caminhada
  quando a pessoa quer detalhar (CTA do briefing, item 12).

## 2. Benchmark (SERP, 14/10)

- **Omni (pt/es/it), Hacé Cuentas, Miniwebtool, Prommer, inchcalculator,
  calculate.co.nz:** todas estimam o passo pela altura com 0,413 (mulher) /
  0,415 (homem) ou 0,414 único, e multiplicam pelos passos. Nenhuma cita o
  estudo de origem.
- **Calorias:** contraditórias entre si — 0,04 kcal por passo fixo, 0,53 e
  até 1,036 kcal/kg/km (este é custo de CORRIDA, o mesmo erro que a
  calculadora de caminhada já desmonta).
- **Matéria (Gazeta SP):** "10 mil passos ≈ 7,5 a 8,5 km", com passo de
  75–85 cm — longo para a média brasileira.
- **Ninguém junta:** meta + "quanto falta" + tabelas personalizadas + passo
  medido + calorias coerentes com um método publicado. É o diferencial.

## 3. Crítica ao briefing — o que muda

1. **A altura sozinha é a variável errada para estimar o passo.** Os dados
   de esteira do CADENCE-Adults (pendente de leitura) indicam razão
   passo/altura de ~0,33 a 3,2 km/h até ~0,49 a 6,4 km/h. A velocidade muda
   o passo mais do que a altura. Proposta: o passo estimado depende da
   altura **e** do ritmo escolhido — e a faixa de incerteza aparece no
   resultado. "Sexo usado pela fórmula" sai: a diferença 0,413 × 0,415 é
   precisão falsa (0,5%), e o campo custaria um passo de formulário por nada.
2. **"Passos → calorias" não é um modo separado da distância.** Gasto por
   km na caminhada é quase constante nas velocidades comuns (Ralston 1958,
   pendente de leitura: ~0,78 kcal/kg/km bruto, mínimo perto de 4,4 km/h),
   então quem manda nas calorias é a DISTÂNCIA (passo) e o peso — não o
   número de passos. O motor converte passos em tempo (cadência) e
   velocidade (passo × cadência) e tira o MET do Compêndio 2024, o mesmo da
   calculadora de caminhada. Resultado em faixa ("~280–330 kcal").
3. **Defeito confirmado e corrigido na calculadora de caminhada.** Ela
   usava 100 passos/min no ritmo moderado de 5 km/h — 100 é o *limiar* de
   intensidade moderada, não a cadência de quem anda a 5 km/h. Na tabela de
   esteira do CADENCE-Adults, 5 km/h corresponde a ~115 passos/min (e 100
   passos/min a ~3,5 km/h). Efeito no ar: "10 mil passos" saía como 1h40 e
   ~465 kcal para 70 kg; o correto pelo mesmo método é ~1h27 e ~405 kcal. As
   cadências dos quatro ritmos passaram de 85/100/115/130 para 106/115/125/130
   (medidas, interpoladas entre linhas de 0,5 mph), a fonte entrou na
   metodologia e `atualizadoEm` da página subiu para 14/10 (correção de
   número visível). O gasto por TEMPO não muda — só o que parte de passos.
4. **Seis cards na primeira tela é demais.** "Passos → km", "km → passos",
   "passos → calorias" e "quanto tempo" são a mesma entrada (um número de
   passos ou de km) com saídas diferentes. Proposta: **um campo só** que
   aceita passos ou km (toggle "passos | km"), resultado único com distância
   + tempo + (kcal se tiver peso). Modos de verdade ficam três: **Converter**,
   **Quanto falta** (meta + feitos hoje) e **Medir meu passo**. "Quantos
   passos por dia?" vira seção educativa, não modo — não há conta a fazer.
   "Meu dia" = "Quanto falta" com o resultado completo.
5. **Histórico e média semanal sobem da Fase 2 para a 1, enxutos.** A
   métrica de retenção do briefing ("voltar para ver quanto falta") só existe
   se o dia anterior estiver lá. Custo baixo: `localStorage`, sem login, com
   try/catch, padrão já usado na composição corporal. Comparação entre
   semanas só com ≥3 dias em cada (o motor recusa tendência de um dia).
6. **Pedômetro do navegador: não.** A Generic Sensor API não conta passos e
   iOS/Safari não expõe acelerômetro contínuo em segundo plano. Fase 1 é
   digitar o número do relógio/celular — e a página diz isso.
7. **Páginas programáticas: nenhuma agora** (mesma decisão do pace). As
   intenções numéricas (5 mil, 8 mil, 10 mil passos em km; 1 km, 5 km em
   passos) entram como atalhos e tabelas; página própria só com demanda
   separada no Search Console. Pré-preenchimento por fragmento (`#p=10000`),
   nunca por query, para não nascer URL indexável por combinação.
8. **Faixas educativas:** só as de Tudor-Locke & Bassett (2004/2008), que os
   próprios autores chamam de classificação, não prescrição — e com o aviso
   deles de que 10 mil pode não ser sustentável para idosos e doentes
   crônicos. Nenhuma cor punitiva; meta incompleta é cor neutra.

## 4. Evidência sobre passos por dia (verificada nos resumos do PubMed)

Leitura dos **resumos** (não do texto completo) em 14/10. Tudo observacional:
associação, não causa — a página escreve "associado a", nunca "reduz".

- **Ding et al. 2025, Lancet Public Health** (PMID 40713949): 7.000 × 2.000
  passos/dia — mortalidade geral HR 0,53 (14 estudos); curva com inflexão em
  ~5.000–7.000 para mortalidade, DCV, demência e quedas; linear para diabetes,
  câncer e sintomas depressivos (logo, "acima de 7 mil não adianta" é falso).
  Autores: 7.000 "meta mais realista" para alguns; 10.000 segue viável para
  os mais ativos.
- **Paluch et al. 2022, Lancet Public Health** (PMID 35247352): 15 coortes;
  risco cai até 6.000–8.000 (≥60 anos) e 8.000–10.000 (<60 anos).
- **Banach et al. 2023, Eur J Prev Cardiol** (PMID 37555441): +1.000 passos
  → −15% mortalidade geral. Os "2.337/3.867 passos" que circulam são
  medianas do grupo de referência, não limiar — não usar como "mínimo".
- **Saint-Maurice et al. 2020, JAMA** (PMID 32207799): 8.000 × 4.000 HR
  0,49; intensidade (cadência) não se associou após ajustar pela contagem.
- **Lee et al. 2019, JAMA Intern Med** (PMID 31141585): mulheres de ~72 anos;
  ~4.400 já associado a menor mortalidade; platô em ~7.500.
- **Tudor-Locke & Bassett 2004/2008** (PMID 14715035, 18562971): índices
  <5.000 / 5.000–7.499 / 7.500–9.999 / ≥10.000 / ≥12.500; 30 min moderados
  ≈ 3.000–4.000 passos a ≥100/min.
- **Tudor-Locke et al. 2011, IJBNPA** (PMID 21798015): 100 passos/min como
  piso do moderado; 7.000–8.000 passos/dia como estimativa direta de MVPA
  mínima. Adultos saudáveis: 4.000–18.000/dia.
- **Peso:** Richardson 2008 (PMID 18195317) −1,27 kg em ~16 semanas sem
  dieta (~0,05 kg/semana); Bravata 2007 (PMID 18029834) +2.491 passos/dia,
  IMC −0,38. Passos ajudam pouco no peso isolados — a página diz isso.
- **NEAT:** Levine 2005, Science (PMID 15681386) — 20 pessoas, ~2 h/dia a
  mais sentadas no grupo com obesidade, estimativa de 350 kcal/dia. Citar
  como estimativa de estudo pequeno.
- **Guia de Atividade Física para a População Brasileira (2021, PDF lido
  inteiro):** 150 min/semana moderado ou 75 vigoroso + força 2×; **não tem
  meta de passos**.
- **Precisão dos contadores:** revisão guarda-chuva 2024 (PMID 39080098)
  com erro médio de −9% a +12% em wearables; apps de celular piores em vida
  real (PMID 26950687). Entra como "o seu número também é estimativa".
- **Origem dos 10 mil:** os resumos sustentam "clubes de caminhada japoneses
  e slogan comercial dos anos 1960". "Manpo-kei/Yamasa/1965" ainda **não
  verificado** (BJSM 2023, PMID 37549996, sem resumo) — o artigo do portal
  já afirma "manpo-kei"; conferir quando a rede abrir.

## 5. Método do passo — fechado em 14/10 (texto completo, PMC)

Fonte: **CADENCE-Adults**, Tabela 2 de cada artigo (cadência média medida em
esteira a cada 0,5 mph): 21–40 anos (PMC6337834, n=76, altura média
170,7 cm), 41–60 (PMC7654058, n=80, 171,0 cm) e 61–85 (PMC8461976, n=98,
167,3 cm). A cadência por velocidade é praticamente igual nas três idades
(ex.: 3 mph → 113,6 · 113,6 · 114,1 passos/min). Ponderada por n:

| velocidade | cadência | passo (= velocidade ÷ cadência) | passo ÷ altura (169,5) |
|---|---|---|---|
| 3,2 km/h | 97,0 | 55 cm | 0,33 |
| 4,0 km/h | 105,9 | 63 cm | 0,37 |
| 4,8 km/h | 113,8 | 71 cm | 0,42 |
| 5,6 km/h | 120,9 | 78 cm | 0,46 |
| 6,4 km/h | 129,0 | 83 cm | 0,49 |

- **A regra 0,413/0,415 × altura** coincide com esta tabela só a ~4,8 km/h.
  Nenhuma das calculadoras que a usa cita estudo; o registro mais antigo que
  a busca achou é uma patente de pedômetro. Não entra no texto como método.
- **Altura:** escala o passo da amostra (× altura ÷ 169,5). É suposição de
  proporcionalidade, e a página diz isso. Coerente com o dado (desvio-padrão
  da altura ~5,4%, da cadência à mesma velocidade ~5–6%), não provado por ele.
- **Sexo:** não entra. O próprio estudo testou sexo e comprimento de perna
  no modelo e nenhum dos dois mudou a predição (RMSE 0,68 → 0,69).
- **Faixa de incerteza:** ±10% no passo ≈ 2 desvios-padrão da cadência à
  mesma velocidade.
- **Sem altura:** passo da amostra no ritmo escolhido (moderado ≈ 72 cm →
  10 mil passos ≈ 7,1–7,2 km).
- **Ritmos:** os MESMOS da calculadora de caminhada (4 / 5 / 6 / 6,5 km/h,
  106 / 115 / 125 / 130 passos/min) — o motor importa de lá.
- **Limites declarados:** esteira, não rua; amostra americana, 85% branca.
  Medir o próprio passo continua sendo o método preciso, e a página ensina.
- **Calorias:** coerentes com a caminhada por construção (10 mil passos,
  70 kg, moderado: ~401 kcal aqui × ~405 lá; a diferença é 4,96 × 5 km/h).
  Ralston 1958 (custo por km quase constante) não foi aberto e não é citado.

Resumos dos estudos de passos/dia (seção 4) foram reconferidos em 14/10 pela
API oficial do PubMed (eutils) — todos os números batem. (A primeira leitura,
antes da liberação da rede, foi feita por um agente que resolveu o desafio de
cookies do PubMed; não se repete — a leitura passa a ser só pela API.)

## 6. O motor (`src/lib/caminhada/passos.ts`)

- "Passo" = contato de um pé ao contato do outro (o que relógio/celular
  contam). Passada = dois passos; só aparece para explicar a diferença.
- distância (km) = passos × passo (cm) ÷ 100.000; passos = km × 100.000 ÷
  passo; tempo = passos ÷ cadência; velocidade = passo × cadência.
- Passo por medida: distância conhecida ÷ passos contados.
- Calorias: MET do Compêndio 2024 pela velocidade implícita (motor da
  caminhada), × tempo; faixa pelo passo ± incerteza; bruto e líquido.
- Passo: tabela do CADENCE-Adults interpolada pela cadência, escalada pela
  altura quando informada (seção 5).
- Leitura: "10.000", "10 mil", "8,4 mil", "10k"; decimal com vírgula ou
  ponto; "1,75" no campo de cm sugere 175 cm; passo fora de 40–100 cm pede
  conferência sem bloquear.
- Arredondamento: km com uma casa ("~7,3 km"), metros de 10 em 10 abaixo de
  1 km, passos estimados de 50/100 em 50/100, kcal em faixa de 10 em 10,
  porcentagem truncada (9.999 de 10.000 é 99%, nunca 100% antes da hora).
- Meta: faltam nunca negativo; passou da meta mostra "além", sem
  gamificação.
- 65 verificações em `npm run test:passos`.

## 7. Plano da página (depois dos prints e das fontes)

- URL: `/ferramentas/calculadora-de-passos/` (padrão das calculadoras).
- Tool first: H1 + 1 frase + ferramenta; conteúdo SEO depois, indexável sem
  JS (tabelas no HTML com o passo padrão; recalculadas no cliente com a
  altura/passo da pessoa).
- Personalização progressiva: só "passos" para o primeiro resultado;
  altura, passo, peso e ritmo em "deixar mais preciso".
- Next best action, um por contexto: kcal → calorias da caminhada; tempo +
  distância → pace; rotina → Treino para Minha Rotina; acompanhamento →
  Encontre seu Personal Ideal (só depois do valor).
- Compartilhar: WhatsApp, share nativo, copiar link — da ferramenta, nunca
  dos dados.
- Registro: `ferramentas.ts` (catálogo + busca por intenção), FerramentaInline
  no artigo de passos por dia, link nos dois sentidos com a caminhada.
- Schema: WebApplication + BreadcrumbList + FAQPage (padrão do pace).

## 8. Analytics e privacidade

Eventos do briefing com prefixo `steps_` e parâmetros só agregados:
`mode`, `steps_bucket` (<5k, 5–7,5k, 7,5–10k, 10–12,5k, ≥12,5k),
`distance_bucket`, `has_height`, `has_weight` (booleanos). Nunca passos
exatos, peso, altura, meta ou histórico. Histórico só no `localStorage`, com
botão de apagar. Validar no DebugView antes de dar como funcionando.

## 9. Prints pedidos (14/10)

14 buscas Google (calculadora de passos; 10 mil passos em km; quantos passos
tem 1 km; quantos passos são 5 km; passos para km; quanto tempo para dar 10
mil passos; quantos passos em 30 minutos de caminhada; quantas calorias 10
mil passos; calorias por passos; quantos passos por dia; 5 mil passos por dia
é bom; meta de passos; tamanho da passada pela altura; quantos passos para
perder 1 kg) + AnswerThePublic (passos, 10 mil passos, caminhada, passada).
Registrar aqui, ao chegarem, o que entrou e onde.

## 10. Roadmap

- **Fase 1:** converter (passos ↔ km, tempo, kcal), quanto falta, medir meu
  passo, tabelas personalizadas, histórico local enxuto + média semanal,
  SEO, analytics, compartilhar; correção da calculadora de caminhada.
- **Fase 2:** comparação entre semanas com mais contexto, meta semanal
  opcional.
- **Fase 3:** integrações (Health Connect / HealthKit) só com app nativo ou
  API oficial e consentimento — fora do navegador.

## 11. Prints recebidos (14/10/2026) e o que entrou

Renato mandou prints de 5 buscas + exportações (autocompletar/volume e
"As pessoas também perguntam"), arquivadas em
`docs/pesquisas/2026-10-14-calculadora-de-passos/`. Não vieram (podem
refinar depois): "quantas calorias 10 mil passos", "calorias por passos",
"quantos passos por dia", "5 mil passos por dia é bom", "meta de passos",
"tamanho da passada pela altura", "quantos passos para perder 1 kg",
"quanto tempo para dar 10 mil passos", "quantos passos em 30 minutos". As
PAA das 5 buscas cobrem boa parte dessas intenções.

| busca | o que mostrou | onde entrou |
|---|---|---|
| calculadora de passos (210/mês) | autocompletar: em km, calorias, por dia, iphone, samsung, para metros, para emagrecer; SERP: Omni, Regivia, "atividade maker" (CNC, outra intenção) | ferramenta; H2 do celular; "outras pessoas": 1000, 5 mil, 10 mil, 20 mil, 30 mil passos em km → tabela |
| 10 mil passos em km (1,9 mil/mês) | IA: "6,5 a 8 km", passada média 0,76/0,67 m, "75 a 90 min"; PAA: 1 km de caminhada, tempo 10 mil, calorias 10 mil, perder 1 kg; outras: 7, 8, 12, 13, 15, 20 mil | title, H1, lead e H2 de 10 mil; tabela por ritmo; tabela passos→km com 4, 6, 9, 13 e 30 mil; FAQ |
| quantos passos tem 1 km | IA: "1.300 a 1.500 passos", 0,415/0,413 × altura; PAA: 40 min de caminhada, 15 min em km, perder peso com 10 mil | H2 de 1 km com tabela por altura; "como calculamos" explica onde o 0,415 bate; tabela por minutos (10–120) |
| quantos passos são 5 km | Bing: "10 mil passos são quantos km" 720/mês, 8 mil 50, 6/7/15 mil 20; 2 km e 10 km em passos | tabela km→passos (1, 2, 3, 5, 6, 8, 10); FAQ de 5 km |
| passos para km | autocompletar: converter, iphone, contagem, "como mudar passos para km no iphone", quilometragem; IA: fórmula passos × passo ÷ 1.000 | modo "passos em km"; H2 do celular |

PAA recorrentes que viraram FAQ: quanto tempo 10 mil passos; quantas
calorias 10 mil passos; quantos passos para perder 1 kg (sem número mágico:
conta teórica + Richardson 2008 + Hall 2011); passos em 30/40 min e 1 hora;
"é bom dar 5000 passos?"; "quantos passos para sair do sedentarismo?"
(classificação de Tudor-Locke, dita como classificação); "3000 passos por
dia são bons?".

**Diferencial frente à visão geral de IA e à Omni:** os dois repetem 0,76 m
(homens) / 0,67 m (mulheres) e 0,415/0,413 × altura sem fonte. A página dá o
passo medido por ritmo (CADENCE-Adults), mostra onde o 0,415 coincide, não
pergunta o sexo (o estudo testou e não mudou nada) e dá faixa.

### Decisões de construção

- **Title (60):** "Calculadora de Passos: 10 Mil Passos em Km, Tempo e
  Calorias" — "10 mil passos em km" tem 9× o volume de "calculadora de
  passos". **H1:** "Calculadora de passos: quantos km são os seus passos?".
- **Ordem do app:** resultado logo depois do número; "Quer deixar a
  estimativa mais precisa?" (ritmo, altura, peso, passo) vem DEPOIS do
  resultado — personalização progressiva, nunca 8 campos antes.
- **Modos:** Passos em km · Km em passos · Quanto falta? · Medir meu passo.
  "Usar este passo" leva o passo medido para as outras contas.
- **Tabelas da página** ficam no HTML (passo médio, moderado) e se
  recalculam com o passo/ritmo da pessoa, com aviso "ajustadas para você".
- **Histórico:** "Salvar meu dia" no localStorage (60 dias), últimos 7,
  média de 7 dias e comparação com a semana anterior só com ≥3 dias em
  cada. Botão de apagar. Sem storage, tudo funciona e um aviso explica.
- **Next best action, um por contexto:** com peso → calorias da caminhada;
  sem peso → Treino para Minha Rotina; km → pace; CTA comercial só no
  "Próximo passo", depois do conteúdo.
- **Eventos (GA4):** steps_tool_view, steps_tool_start, steps_mode_selected,
  steps_to_km_calculated, km_to_steps_calculated, steps_calories_calculated,
  steps_goal_calculated, steps_stride_measured, steps_stride_used,
  steps_history_saved, steps_return_visit, steps_personalize_opened,
  steps_shared, steps_related_tool_clicked, steps_find_personal_clicked.
  Parâmetros só em faixa (steps_bucket de Tudor-Locke, distance_bucket,
  goal_bucket) e booleanos (has_height, has_weight, has_stride). **Falta
  validar no DebugView** — conferido só no dataLayer local.
- **Fragmento:** `#m=passos&p=10000`, `#m=km&k=5`, `#m=meta&g=10000`; só
  depois de interação ou vindo de link. Nada pessoal no endereço.
- **Schema:** BreadcrumbList + Article + FAQPage + Person (padrão do pace).
- **Links:** calorias da caminhada → passos (frase revisada no mesmo dia da
  correção de cadência). Catálogo/hub/busca por intenção: entrada nova;
  "quantos passos" saiu dos aliases da caminhada. **Artigo "quantos passos
  por dia" NÃO recebeu link:** já tem o seu único FerramentaInline (gasto
  diário) e a exceção de link em palavra existente não cobre esta
  calculadora — decisão pendente com o Renato.
- **QA:** axe 0 violações no app (2 globais do site: contraste dos cards
  relacionados e rótulo da marca, pré-existentes); 320–1280 px sem rolagem
  lateral; sem JS as 6 tabelas ficam no HTML; localStorage bloqueado sem
  erro; nenhum erro de console.
