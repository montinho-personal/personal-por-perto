# Calculadora de composição corporal — auditoria, crítica e plano

Briefing de 06/10/2026 ("Como está minha composição corporal?"). Este
documento registra a auditoria, a crítica ao briefing, os prints do Google
(regra do CLAUDE.md: título, estrutura e FAQs só depois deles), a escolha
de métodos e as decisões de produto.

## 1. Auditoria do site

- **Nenhuma calculadora** de IMC, gordura, massa magra ou cintura. Nenhuma
  consulta desses temas passou do piso do Search Console de 30/09: não há
  tráfego a proteger nem canibalização a resolver.
- **Páginas vizinhas** (recebem e dão link):
  `/emagrecimento/gordura-visceral/`, `/emagrecimento/recomposicao-corporal/`,
  `/guias/avaliacao-fisica/` (dobras × bioimpedância, frequência de
  reavaliação), `/emagrecimento/como-perder-barriga/`.
- **Números já publicados no site**, que a ferramenta tem de repetir:
  cintura da OMS 94/102 cm (homens) e 80/88 cm (mulheres); cintura/altura
  com corte em 0,5 (gordura-visceral).

## 2. Crítica ao briefing — o que mudou

1. **Cards: de seis para cinco.** "Minha massa magra" sai da mesma conta do
   percentual de gordura (vira um card só); cintura/altura e cintura/quadril
   usam a mesma fita (um card "Medidas da cintura"). Entra "Acompanhar
   evolução" para quem volta.
2. **Histórico e comparação na Fase 1.** O briefing chama o retorno de
   métrica principal e põe o histórico na Fase 2. Salvar no aparelho e
   comparar com a avaliação anterior é simples; só os gráficos ficam para
   depois.
3. **Faixa honesta, não estreita.** A faixa mostrada vem do erro-padrão do
   método (~±3,5 pontos nas equações de circunferência), não de uma
   largura escolhida para parecer exata.
4. **Faixa etária em vez de idade** onde a fórmula não usa idade: menos de
   18 / 18–59 / 60+. Menor de 18 não recebe classificação adulta. (O modo
   dobras pede idade exata, porque as equações de Jackson & Pollock usam.)
5. **Sexo só onde a fórmula exige**, rotulado "Sexo usado pela fórmula".
6. **Sem toggle kg/lb na Fase 1.** A calculadora entende "1,75" e "175".
7. **Nenhuma medida sai do aparelho**: sem link de cálculo, sem query, só
   categorias no analytics; compartilhar envia a ferramenta, nunca o
   resultado.

## 3. Prints do Google

### 3.1 "calculadora percentual de gordura" (06/10)

- **Autocompletar:** 7 dobras · corporal · por circunferência · dobras
  cutâneas · marinha americana · 3 dobras · pollock 7 dobras · com fita
  métrica · 7 dobras feminino.
- **Outras pessoas pesquisaram:** 3 dobras · 7 dobras · marinha americana ·
  percentual de gordura feminino calcular · calcular gordura corporal com
  medidas · tabela percentual de gordura feminino.
- **Visão geral de IA:** recomenda calculadoras com fita métrica e explica
  o "método Navy" (homens: pescoço logo abaixo do pomo de adão, cintura na
  altura do umbigo).

**O que muda:**

- **Modo dobras cutâneas entra na Fase 1** (Jackson & Pollock 3 e 7
  dobras). Quatro das dez sugestões são de dobras: é quem fez avaliação
  com adipômetro e quer converter as medidas. O briefing não previa.
- **O método da Marinha é buscado pelo nome** — tem de aparecer nomeado,
  com o protocolo dele, mesmo que não seja o principal.
- **"Feminino" aparece duas vezes** (calcular e tabela): a página precisa
  de referência de percentual por sexo — só com fonte rastreável.

### 3.2 "percentual de gordura fita métrica" (06/10)

- **Autocompletar:** fita métrica · como medir percentual de gordura **sem**
  fita métrica · com fita métrica · com fita.
- **Outras pessoas pesquisaram:** qual o percentual de gordura ideal **por
  idade** · feminino · tabela feminino · calculadora · **masculino** ·
  cálculo 7 dobras.
- **As pessoas também perguntam:** Quanto é 20% de gordura corporal? · Onde
  medir o percentual de gordura? · Quanto é 1% de gordura? · Quanto é 15% de
  gordura corporal?
- **Visão geral de IA:** método da Marinha; fita maleável que não estique;
  em pé, ombros relaxados, fita justa sem apertar; altura sem sapatos.
- **Concorrência visível:** snippet com "ideal nos homens entre 6 a 24% e
  nas mulheres entre 14 a 31%" (são as faixas da ACE, tabela comercial —
  ver seção 4); fabiotakai.com.br (nutricionista) com calculadora da
  Marinha.

**O que muda:**

- **"Por idade" pede referência por faixa etária** — e só com fonte
  científica (candidata: Gallagher et al. 2000, por sexo e idade). Reforça
  pedir a faixa etária, não só "adulto".
- **"Quanto é 15% / 20% / 1%" vira bloco próprio**: o que o percentual
  significa em quilos para o peso da pessoa (no resultado) e na página,
  com exemplo. É a pergunta de quem acabou de receber o número.
- **"Onde medir"**: as instruções de medição são intenção de busca, não
  só ajuda de formulário — merecem seção no texto, com as ilustrações.
- **"Sem fita métrica"**: responder no texto (barbante + régua, ou o que
  dá para estimar só com peso e altura, e por que o erro é maior).
- **"Masculino"** aparece ao lado de "feminino": referência por sexo dos
  dois lados.

### 3.3 "calculadora massa magra" (06/10)

- **Autocompletar:** e gorda · corporal magra · online · imc massa magra ·
  percentual de massa magra · para ganho de massa magra. (Também "glp 1",
  mas vinda do histórico do Renato — não é sugestão geral; ainda assim
  conversa com o cluster Mounjaro do site.)
- **Outras pessoas pesquisaram:** calcular massa magra e gordura ·
  aplicativo para calcular massa magra · calculadora de massa corporal ·
  massa magra ideal **por idade** · calculadora de **massa gorda** · como
  calcular **massa muscular em kg**.
- **As pessoas também perguntam:** Como calcular o de massa magra? · Quanto
  pesam 1 kg de massa magra e 1 kg de gordura? · Sou homem, tenho 1,75 m.
  Qual o meu peso ideal? · **70 de massa magra é bom?**
- **Visão geral de IA:** duas formas — pelo percentual de gordura (peso −
  peso × %G) ou pela fórmula de Boer, só com peso, altura e sexo.
- **Concorrência:** medesportepapers.com.br ("Calculadora Jackson &
  Pollock — 7 Dobras | % Gordura (Siri)", com massa gorda e magra e o
  conselho de 2–3 medidas por dobra); Softonic.

**O que muda:**

- **Massa livre de gordura sem fita**: quem busca "massa magra" muitas
  vezes só tem peso e altura. A fórmula de Boer entra como alternativa
  **rotulada** ("estimativa populacional: não usa as suas medidas"),
  nunca misturada com a da fita.
- **"70 de massa magra é bom?" e "ideal por idade"**: quilos de massa
  livre de gordura não dizem nada sem a altura. Candidato: índice de massa
  livre de gordura (FFMI = MLG ÷ altura²), com referências por sexo e
  idade se houver fonte (Schutz et al. 2002). Em pesquisa.
- **"Massa muscular em kg"**: explicar por que massa livre de gordura não
  é músculo, e que a fita não mede músculo.
- **"1 kg de massa magra × 1 kg de gordura"**: mesmo peso, volume
  diferente (densidades do modelo de dois compartimentos) — FAQ.
- **"Peso ideal para 1,75 m"**: o briefing proíbe "peso ideal", e com
  razão. Resposta: a faixa de peso em que o IMC fica entre 18,5 e 24,9
  (OMS) para aquela altura, dita como faixa de IMC, com o lembrete de que
  cintura e composição contam o que o peso não conta.
- **"Para ganho de massa magra"**: o histórico é a resposta (acompanhar
  massa livre de gordura e cintura ao longo do tempo).

### 3.4 "calcular IMC" (06/10)

- **Autocompletar:** mulher · grátis · online · homem · na calculadora ·
  **infantil** · **e peso ideal** · **criança** · adulto · ideal · homem
  adulto.
- **Outras pessoas pesquisaram:** grátis · **adolescente** · IMC ideal ·
  tabela IMC feminino peso ideal · **IMC idoso** calculadora · IMC
  calculadora google · feminino · masculino · peso ideal · feminino
  tabela · tabela IMC · infantil.
- **Visão geral de IA:** fórmula (peso ÷ altura²) e a tabela de adultos da
  OMS, citando Tua Saúde. Eurofarma no orgânico.

**O que muda:**

- **Nada de página só de IMC.** A busca tem a calculadora do próprio
  Google ("IMC calculadora google") e sites de saúde com autoridade; o
  IMC fica como módulo da central, mirando a cauda (IMC e gordura, IMC de
  quem treina).
- **Homem × mulher (quatro variações):** para adultos, os cortes da OMS são
  os mesmos para os dois sexos — é a primeira coisa a dizer, porque a
  busca pressupõe o contrário. O módulo IMC não pede sexo.
- **Criança, infantil, adolescente (quatro variações):** o IMC de menores se
  lê por idade e sexo (curvas da OMS), não pela tabela de adultos. Na
  Fase 1 a ferramenta calcula o número, **não classifica**, e explica
  por quê, apontando a caderneta de saúde e o pediatra. As curvas ficam
  para avaliar depois.
- **Idoso:** a faixa 60+ usa outros cortes no Brasil (em confirmação na
  pesquisa de métodos).
- **"Peso ideal" (quatro variações):** responder com a faixa de peso em que
  o IMC da OMS fica entre 18,5 e 24,9 **para aquela altura**, dita como
  faixa de IMC — nunca "seu peso ideal é X".
- **Tabela de IMC** com as faixas da OMS no texto, com o aviso de que o
  IMC não distingue gordura de músculo.

### 3.5 "relação cintura altura" (06/10)

- **Autocompletar:** calculadora · tabela · mulher · **rca** · fórmula ·
  ideal · normal · obesidade · rcq relação cintura altura · **como medir**.
- **Outras pessoas pesquisaram:** tabela · calculadora · cintura quadril ·
  **estatura** classificação · estatura **oms** · estatura valores de
  referência · cintura quadril tabela · relação cintura estatura **rce** ·
  altura da cintura como medir · cintura quadril calculadora · medida
  ideal cintura e quadril feminino · como medir a cintura homem.
- **As pessoas também perguntam:** Qual é a relação cintura-quadril ideal? ·
  Qual é a tabela de cintura e estatura? · Qual é a fórmula para calcular
  a relação cintura-estatura? · **Qual a cintura ideal para uma mulher
  com 1,70 m de altura?**
- **Visão geral de IA** (cita Omni e medesportepapers): cintura no **ponto
  médio entre a última costela e o osso do quadril**; abaixo de 0,5 risco
  baixo, "a cintura menor que a metade da altura"; 0,5–0,59, aumento.
- **Concorrência:** averdadesobreopeso.pt (Portugal, "RCA" ligada a
  risco cardiovascular); artigo do NIH/PMC sobre RCE como triagem em
  crianças e adolescentes ("menos dependente da idade").

**O que muda:**

- **Três nomes para a mesma conta:** relação cintura-altura (RCA),
  relação cintura-estatura (RCE, o termo acadêmico e da OMS nas buscas) e
  "cintura/altura". O texto usa os três.
- **"Cintura ideal para 1,70 m"** vira número no resultado: "para a sua
  altura, a cintura que dá 0,5 é X cm" (metade da altura). Responde a
  busca sem chamar nada de ideal.
- **Tabela da RCE** (faixas com fonte — NICE 2022 em confirmação) e a
  fórmula, no texto.
- **Protocolo de cintura da visão geral de IA é o da OMS/NICE** (ponto
  médio costela–crista). Decisão de protocolo único × por método
  depende da escolha do método de gordura (seção 4): é o ponto mais
  delicado do projeto.
- **RCE em menores:** a fonte que aparece (PMC) usa a RCE justamente em
  crianças; verificar se o corte 0,5 vale para menores antes de mostrar
  algo a quem marcar "menos de 18".
- **"Como medir a cintura (homem)" e "altura da cintura"**: as instruções
  de medição, de novo, como intenção própria.

### 3.6 "relação cintura quadril" (06/10)

- **Autocompletar:** calculadora · tabela · mulher · e risco cardiovascular
  · homem · o que é · **tabela oms** · **risco moderado**.
- **Outras pessoas pesquisaram:** **ministério da saúde** · classificação ·
  risco moderado · ideal · valores de referência · homem · calculadora ·
  tabela · tabela oms · mulher · fórmula · relação cintura altura.
- **As pessoas também perguntam:** Qual a relação cintura-quadril ideal? ·
  Como fazer o cálculo? · Qual a tabela de relação entre cintura e
  quadril? · **O que significa relação cintura quadril na bioimpedância?**
- **Visão geral de IA** (cita vitat e Tua Saúde): cintura "na parte mais
  estreita, logo acima do umbigo **ou** entre a última costela e o osso do
  quadril" (mistura de protocolos, o erro que o benchmark apontou);
  quadril na parte mais larga dos glúteos.
- **Imagens:** tabela por sexo e faixa etária (20–29 a 60–69) com colunas
  baixo / moderado / alto / muito alto — é de onde vem a busca "risco
  moderado".
- **Concorrência:** Associação Brasileira de Lipedema ("Calcular IMC e
  relação cintura-quadril (grátis)", cortes 0,85 mulheres / 0,90 homens).

**O que muda:**

- **Tabela da OMS** (0,90 / 0,85) como referência principal, com fonte.
- **Tabela por idade ("risco moderado")**: é muito buscada; só entra se a
  origem primária for confirmada (suspeita: Bray & Gray 1988, reproduzida
  por Heyward). Se entrar, como referência populacional, sem cor de
  semáforo e sem rótulo de diagnóstico.
- **"Ministério da Saúde"**: verificar o que os documentos brasileiros
  adotam (em pesquisa).
- **RCQ na bioimpedância** vira FAQ: é a mesma razão; alguns aparelhos
  estimam pelo modelo deles; a fita confere.
- **Um protocolo de cintura por vez**, dito na instrução — a própria
  visão geral de IA mistura dois.

### 3.7 "percentual de gordura ideal" (06/10)

- **Autocompletar:** para mulher · masculino · homem e mulher · **por
  idade** · feminino por idade · **para mulher de 40 anos** · **mulher 47
  anos** · **homem 40 anos**.
- **Outras pessoas pesquisaram:** ideal masculino por idade · tabela
  masculino · calcular · corporal · tabela de gordura corporal · **20 de
  gordura corporal mulher** · ideal feminino · tabela feminino · ideal
  masculino · masculino · ideal feminino por idade · **como diminuir** o
  percentual de gordura.
- **As pessoas também perguntam:** Qual o percentual de gordura boa? ·
  Qual o percentual de gordura ideal por idade? · **28 de gordura corporal
  é muito?** · **É possível ter 50% de gordura corporal?**
- **Visão geral de IA** (cita Tua Saúde e Ocean Drop): a tabela da ACE —
  essencial 2–5%, atletas 6–13%, praticantes 14–17%, aceitável 18–24%,
  "obesidade" acima de 25% (homens); "saudável 18–24% homens, 25–31%
  mulheres".
- **Snippets:** "mulheres com mais de 40 anos, ideal entre 21% e 33%"
  (padrão de tabela por idade, compatível com Gallagher et al. 2000);
  saudeemmovimento.com.br, "faixa de percentual de gordura ideal de acordo
  com sexo e idade".

**O que muda:**

- **Idade é central.** Cinco das variações pedem idade ("por idade", "40
  anos", "47 anos"). A referência mostrada tem de ser por sexo **e** faixa
  etária. A ferramenta passa a pedir a **idade em anos** nos modos de
  gordura (a mesma idade serve às dobras e à referência), em vez de só
  "faixa etária". Fica no aparelho, como tudo.
- **Referência científica no lugar da tabela da ACE**: a tabela que a IA do
  Google mostra é de uma entidade de certificação, sem estudo por trás das
  faixas, e chama 25% de "obesidade" para qualquer idade. Candidata:
  Gallagher et al. 2000 (sexo × idade 20–39 / 40–59 / 60–79, derivada de
  IMC e medida por DEXA). A página explica de onde vem cada tabela — é o
  diferencial de confiança.
- **"28% é muito?", "20% mulher", "50% é possível?"** viram respostas que
  dependem de sexo e idade, com a tabela — e com a faixa de erro do
  método lembrando que 28% pode ser 25% ou 31%.
- **"Como diminuir"** recebe link para os artigos de emagrecimento do
  portal, sem dieta na ferramenta.
- **Nada de "ideal" como rótulo do resultado**: a busca usa a palavra; a
  página responde a pergunta e explica por que fala em faixa de
  referência.

### 3.8 "peso não muda mas cintura diminui" (06/10)

- **Autocompletar:** ruído de letra de música ("frases", "música", "meme",
  "letra") · cintura muito magra · peso na cintura — e, no modo de IA, o
  cluster **efeito platô**: cardápio para sair do efeito platô · como sair
  do efeito platô **com Mounjaro** · dia do lixo · **peso estagnado com
  Mounjaro** · quanto tempo dura o efeito platô · no jejum intermitente ·
  efeito platô na perda de peso · **peso estagnado hipertrofia**.
- **Outras pessoas pesquisaram:** efeito platô na perda de peso · peso
  estagnado hipertrofia · peso estagnado o que fazer · como sair do efeito
  platô da **tirzepatida** · efeito platô Mounjaro · efeito platô
  medicamento.
- **As pessoas também perguntam:** **Quantos quilos equivalem a perder 5 cm
  de cintura?** · **É possível emagrecer e não aparecer na balança?** ·
  Qual é o hormônio que impede de emagrecer? · **Quais são os sinais de
  que você está emagrecendo?**
- **Visão geral de IA** (Doctoralia, Instagram): recomposição corporal;
  músculo é mais denso que gordura; a cintura diminui e as roupas folgam
  mesmo com a balança parada; a balança mede tudo junto.
- **Concorrência:** snippet de médica afirmando "se o peso não mudou mas a
  cintura diminuiu, você não está em platô, **está trocando gordura por
  músculo**" — exatamente a afirmação que o briefing proíbe (item 35) e
  que as medidas sozinhas não sustentam. Vídeo "1 kg de gordura não é
  igual a 1 kg de músculo".

**O que muda:**

- **A intenção real é "platô"**: quem busca isso acha que parou de
  emagrecer. O módulo de evolução é a resposta — e a mensagem precisa ser
  a honesta: "a combinação é compatível com mudança de composição, mas as
  medidas sozinhas não dizem quanto foi gordura e quanto foi músculo". É
  o diferencial de confiança contra o snippet que afirma demais.
- **"Quantos quilos são 5 cm de cintura?"**: não existe conversão fixa —
  dizer isso. Se o método principal usar cintura e altura (RFM), dá para
  mostrar, com a própria fórmula, quanto 5 cm mudam a **estimativa** para
  uma altura de exemplo, deixando claro que é estimativa.
- **"Emagrecer sem aparecer na balança" e "sinais de que está
  emagrecendo"**: FAQ e texto (cintura, roupas, medidas com protocolo
  constante), com a ferramenta de evolução como forma de acompanhar.
- **Cluster Mounjaro/tirzepatida**: o portal tem uma seção inteira sobre
  isso. Links de contexto para `/emagrecimento/plato-de-emagrecimento/` e
  para a seção Mounjaro, sem conselho sobre medicamento.
- **"Hormônio que impede de emagrecer"**: fora do escopo da ferramenta
  (assunto médico) — não entra.
- **Mapa de ferramentas nos artigos**: `/emagrecimento/recomposicao-corporal/`
  e `/emagrecimento/plato-de-emagrecimento/` estão na fila com o gasto
  calórico diário; quando esta ferramenta existir, reavaliar — para
  "por que a balança engana na recomposição", ela responde melhor.

### 3.9 Síntese dos prints (oito buscas, 06/10)

1. **Dobras cutâneas** é intenção forte e o briefing não previa → modo
   próprio (Jackson & Pollock 3 e 7, Siri).
2. **Marinha americana** é buscada pelo nome → método nomeado, com o
   protocolo dele.
3. **Idade** atravessa quase tudo ("por idade", "40 anos", "idoso",
   "infantil") → idade em anos nos modos que interpretam.
4. **Tabelas** são pedidas em todas as buscas (gordura, IMC, RCE, RCQ) →
   cada tabela com fonte; a da ACE e a de RCQ por idade só com origem
   checada.
5. **"Ideal"** aparece em todas → a página responde e explica por que fala
   em faixa de referência; o resultado nunca diz "ideal".
6. **Protocolo de cintura** é misturado pela própria IA do Google → um ponto
   por vez, dito na instrução.
7. **Platô** é a intenção atrás do acompanhamento → evolução com mensagem
   honesta, contra a concorrência que afirma recomposição.
8. **IMC** é dominado por Google e saúde → módulo, não página própria.

## 5. Benchmark (06/10)

Feito por busca (as páginas em si foram bloqueadas pela rede; o que não
foi visto está marcado como não verificado). Ferramentas: Omni (PT), Calculator.net,
MiniWebTool BR, Tua Saúde, MD Saúde, Drauzio, ABESO, Ministério da Saúde,
NHS, NIH, ValorFinal, CalculaCentro, Vitat, GetFitCraft.

**Lacunas que viram diferencial:**

1. **Histórico e comparação na web**: nenhuma calculadora brasileira tem.
2. **"A mudança é real ou erro de medida?"**: ninguém responde. Mudança
   de 1 ponto no %G está dentro do erro do método; cintura em cm é mais
   confiável. Selo de "mudança acima do erro" só quando passar do limiar.
3. **Protocolo de cintura explícito**: a Marinha mede no umbigo (homem) e
   no ponto mais estreito (mulher); OMS no ponto médio costela–crista;
   NIH/NHANES acima da crista ilíaca. Os concorrentes misturam (Vitat:
   "umbigo **ou** entre costela e crista") ou usam uma cintura só para
   tudo sem dizer.
4. **A mudança de 2023 do Exército dos EUA** (teste de uma circunferência,
   porque o antigo classificava mal cerca de 1/3) — ninguém cita.
5. **Massa magra por fórmula populacional (Boer, James, Hume) × massa
   livre de gordura da pessoa** — os concorrentes chamam as duas de
   "massa magra".
6. **Leitura cruzada** (IMC alto + cintura/altura baixa → provavelmente
   massa muscular) — ninguém faz.
7. **Duas leituras por medida e média** — o protocolo pede, ninguém faz.
8. **Quem não deve usar** (menor, gestante, idoso) — só a ABESO separa
   criança.

**Erros a evitar** (vistos na concorrência): decimais no %G ("18,73%");
rótulo "obeso"/"atleta" pela fita; meta de "gordura ideal"; fórmula em
polegadas aplicada a cm; "medidas ideais 102/88" (são cortes de risco);
RCQ ligada a "asma ou Alzheimer"; vermelho/verde de julgamento.

**Arquitetura (pendente dos prints de IMC e cintura):** os concorrentes
têm uma URL por indicador, e o benchmark sugere a central cobrindo
%G/fita/dobras/massa magra (mesma intenção) e, depois, páginas enxutas de
cintura/altura e cintura/quadril em leva própria. IMC "puro" é dominado
por sites de saúde com autoridade: mirar a cauda ("IMC alto mas tenho
músculo"). Decisão quando chegarem os prints.

## 4. Métodos — decisão (06/10)

Pesquisa com fontes primárias por busca (os PDFs ficaram bloqueados pela
rede; os coeficientes de Marinha, RFM, Jackson & Pollock e Boer foram
conferidos contra mais de uma reprodução e batem com as publicações).

**Percentual de gordura — três métodos, nunca misturados:**

1. **Principal: RFM (Woolcott & Bergman, *Sci Rep* 2018).**
   RFM = 64 − 20 × (altura ÷ cintura) + 12 × sexo (0 homem, 1 mulher).
   - Uma fita só (cintura) + altura: menos erro somado na autoaferição.
   - Desenvolvido contra DXA no NHANES (12.581 adultos, validação em
     3.456), multiétnico; validado no México e no Brasil (Corrêa et al.,
     *Clin Nutr ESPEN* 2021, UFSC: r = 0,90 com DXA, homens jovens).
   - Cintura no protocolo NHANES: **logo acima da crista ilíaca** (topo do
     osso do quadril, na lateral).
   - Limites: atletas (concordância ruim), idosos e mulheres brasileiras
     com pouca validação.
2. **Método da Marinha dos EUA (Hodgdon & Beckett, 1984)**, buscado pelo
   nome. Equação oficial do DoD em polegadas (a calculadora converte cm):
   homens 86,010·log(abdômen − pescoço) − 70,041·log(altura) + 36,76;
   mulheres 163,205·log(cintura + quadril − pescoço) − 97,684·log(altura)
   − 78,387. SEE 3,52 / 3,61 pontos. Protocolo próprio: pescoço logo
   abaixo do pomo de adão; abdômen no umbigo (homens); cintura natural, a
   menor (mulheres); quadril na maior protuberância dos glúteos.
   Critério: pesagem hidrostática em militares jovens; estudos com DXA
   mostram subestimação (~6 pontos em recrutas, Foulis 2023). O Exército
   dos EUA trocou por uma fita só (2023) e, em 2026, pela relação
   cintura/altura < 0,55 — dito na página.
3. **Dobras cutâneas (Jackson & Pollock 1978; Jackson, Pollock & Ward
   1980) → Siri 1961**, 3 e 7 dobras, com idade. Para quem tem as medidas
   de uma avaliação com adipômetro. Validade: homens 18–61, mulheres
   18–55 (cautela acima de 40, dos próprios autores).

**Fora, com motivo:** fórmula do Exército 2023 (soldados, viés
proporcional, já abandonada); Deurenberg por IMC (usa só o IMC — não
acrescenta); média entre métodos (sem base).

**Incerteza mostrada:** número inteiro e faixa provável de ±4 pontos
(SEE de desenvolvimento ~3,5 com medidor treinado; autoaferição erra
mais). "Cerca de 2 em cada 3 pessoas ficam dentro da faixa."

**Protocolo de cintura (o ponto mais delicado):** a cintura comum da
ferramenta é a do **RFM — logo acima da crista ilíaca** (protocolo NHANES,
o mesmo do NIH para os cortes de 102/88 cm). Ela alimenta RFM, cintura/
altura e cintura/quadril. O método da Marinha pede as medidas no protocolo
dele, em campos próprios. A página explica que a OMS mede no ponto médio
entre a última costela e a crista — a diferença costuma ser de poucos
centímetros —, e que, para acompanhar a evolução, o que importa é medir
sempre no mesmo ponto.

**Massa:** massa gorda = peso × %G; massa livre de gordura = peso − massa
gorda (nunca "músculo"). **Boer (1984)** como alternativa só com peso e
altura, rotulada "estimativa populacional". **FFMI** = MLG ÷ altura²,
com a referência confirmada de Schutz et al. 2002 (medianas de 18–34
anos: 18,9 homens, 15,4 mulheres).

**Referências:**
- IMC: OMS para adultos (mesmos cortes para os dois sexos); 60+ com
  Lipschitz 1994 (SISVAN: ≤ 22 / 22–27 / ≥ 27); menores sem
  classificação (IMC-para-idade da OMS fica para depois).
- Cintura: OMS/Lean 1995 — 94/102 cm homens, 80/88 cm mulheres (iguais às
  já publicadas no site; ABESO e Caderno de Atenção Básica 38 adotam os
  mesmos).
- Cintura/altura: NICE NG246 — 0,40–0,49 / 0,50–0,59 / ≥ 0,60; não vale
  na gestação nem com IMC ≥ 35.
- Cintura/quadril: OMS 2008 — ≥ 0,90 homens, ≥ 0,85 mulheres. A tabela
  por idade (Bray & Gray 1988) fica de fora: só a linha de 20–29 anos foi
  vista em fonte, as demais vieram de memória.
- %G: Gallagher et al. 2000 (*AJCN*), faixa correspondente ao IMC
  18,5–24,9 por sexo e idade (20–39: 8–19% / 21–33%; 40–59: 11–22% /
  23–34%; 60–79: 13–25% / 24–36%), com a ressalva de que varia com a
  ancestralidade. A da ACE é explicada e descartada.

**Não interpretar:** menores de 18 (só números, sem classificação),
gestação, edema/ascite, amputação, IMC ≥ 35 para a RCE, atletas e
fisiculturistas (estimativa por circunferência erra). Sempre com a
ressalva de avaliação profissional.

**Evolução — limiares (heurística declarada, não norma):** cintura muda de
verdade a partir de ~2 cm (erro típico da fita: 1–2 cm); %G estimado, a
partir de ~2 pontos entre duas medidas no mesmo protocolo.

## 6. Implementação (06/10)

- **Página:** `/ferramentas/calculadora-de-percentual-de-gordura/` — title
  "Calculadora de Percentual de Gordura, Massa Magra e IMC" (55); H1
  "Calculadora de percentual de gordura"; ferramenta antes do texto.
- **Motor:** `src/lib/corpo/composicao.ts`; testes em
  `scripts/test-composicao.ts` (`npm run test:composicao`).
- **Interface:** `src/scripts/calculadoraComposicao.client.ts`. Cinco modos
  (gordura · IMC · cintura · analisar tudo · evolução); no modo gordura, três
  métodos (fita/RFM · Marinha · dobras 3 ou 7). Cada modo mostra só os
  campos de que precisa. Ilustração SVG neutra por medida
  (`src/components/MedidaIlustracao.astro`).
- **Classificação pelo valor exibido:** IMC com uma casa, razões com duas,
  cintura com uma — 24,98 aparece como 25,0 e é lido como 25,0. Achado
  no teste de tela, que mostrava "25,0 na faixa 18,5 a 24,9".
- **Histórico:** `localStorage` (`ppp-composicao-v1`), uma avaliação por
  dia (medir de novo no mesmo dia substitui), até 60; apagar uma ou
  todas; "Última avaliação: há N dias"; comparação entre as duas últimas
  com "dentro/além do erro de medida" e leitura que nunca afirma
  recomposição. Sem armazenamento (aba anônima), avisa que não salvou.
- **Privacidade:** nenhuma medida na URL nem no dataLayer. Eventos:
  `body_comp_view` (has_history), `_start`, `_mode_selected`,
  `_method_selected`, `_measure_help_opened` (field),
  `_result_generated` / `_full_analysis_generated` (mode, method),
  `_history_saved` e `_comparison_viewed` (contagem em faixa),
  `_shared`, `_related_tool_clicked`, `_find_personal_clicked`.
- **Catálogo:** entrada `percentual-de-gordura` (32 ferramentas), com os
  aliases dos prints.
- **QA (navegador):** os cinco modos e os três métodos; 1,75 → "Entendemos
  175 cm"; peso 900 → "Confira este valor"; menor de 18 sem estimativa nem
  classificação; 60+ com a tabela de idosos; salvar, retorno e evolução
  (−4 cm além do erro, peso −0,3 kg dentro do erro, leitura honesta);
  larguras 320–1280 sem rolagem lateral; axe sem violação da página nos
  modos gordura, tudo e evolução.

**Pendências:**

- **Links de entrada pelo texto.** Os artigos vizinhos (gordura visceral,
  recomposição, avaliação física, platô, como perder barriga) já têm o seu
  `FerramentaInline`, e a regra é um por artigo. Link em palavra existente,
  pela exceção atual do CLAUDE.md, só vale para calculadoras de calorias;
  para esta, subiria `atualizadoEm`. Mesma decisão pendente da
  calculadora de pace — do Renato.
- **Fase 2:** gráfico simples de cintura ao longo do tempo; comparar
  avaliações escolhidas (hoje é a última com a anterior).
- **Fase 3:** IMC-para-idade da OMS (curvas LMS) para menores; exportar
  avaliações.
- **Imagem OG:** a padrão do site, como as outras calculadoras.
