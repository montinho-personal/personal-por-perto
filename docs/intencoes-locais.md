# Intenções de busca locais — região do presencial

Prints do Google que o Renato mandou em 30/09/2026, para as páginas de cidade
onde o Montinho atende presencialmente (`src/data/atendimentoPresencial.ts`).
Base para decidir o que as páginas de cidade precisam cobrir.

**Cuidado ao ler um print:** sugestão com ícone de **relógio** é o histórico de
busca de quem pesquisou, não sugestão do Google. "Personal trainer alphaville
residencial 1/2/3" e "tamboré 1/2/3" vieram com relógio — são buscas do
próprio Renato e não contam como demanda.

## O que apareceu

| termo | autocompletar real | observação |
|---|---|---|
| personal trainer alphaville | "alphaville sp", "mulher alphaville", "ironberg alphaville" (academia), "personal gym alphaville", "personal alphaville", nome de uma concorrente | "mulher" = procura por personal do sexo feminino |
| personal trainer tamboré | "tamboré alphaville", "tamboré barueri", "tamboré 10" | o **site próprio do Montinho** já aparece ("Personal Trainer no Tamboré \| Montinho Personal Trainer") |
| personal trainer aldeia da serra | "aldeia da serra barueri" | as outras sugestões eram de outros lugares (São Pedro da Aldeia, Serra Talhada) |
| personal trainer barueri | "barueri aldeia da serra", "personal barueri", "personal trainer tamboré" | "barueri sp" veio com relógio. O **site do Montinho** aparece com a página de Alphaville ("Personal Trainer Alphaville \| Montinho"). Pesquisas relacionadas: alphaville, osasco, "personal trainer preço" |
| personal trainer santana de parnaíba | "instagram", "instagram oficial", "personal santana de parnaíba", "personal trainer santana sp" | **quatro das seis sugestões pedem Instagram**: a pessoa quer ver o perfil do profissional (resultado, antes e depois) antes de chamar. "Santana sp" é ambíguo com o bairro Santana, na Zona Norte de São Paulo |
| personal trainer jandira | "jandira sp", "jandira instagram", "personal jandira" | Instagram de novo. "Jardins sp" é outro lugar. Aparecem um estúdio local (Power Fit, treinamento funcional), um diretório de academias (Conecta Fitness, com a Smart Fit Jandira Ouro Verde) e um perfil de Instagram |
| personal trainer carapicuíba | "instagram" (duas variações), "personal carapicuíba" | Instagram pela terceira cidade seguida. Resultado com **nota 5,0 (6 avaliações)** e "1ª aula grátis" no trecho; perfil de Instagram de estúdio (@studio.trfit, "aceitamos TotalPass") |
| personal trainer granja viana | "cotia granja viana", "**valor**", "**valor mensalidade**", "personal granja viana", "xbody granja viana" | **Primeira região em que o PREÇO aparece no autocompletar** — e sem Instagram. "Xbody" é o treino com eletroestimulação (estúdios de marca). Wellhub lista estúdio de treino personalizado da Granja; perfil de Instagram de personal com endereço na Rua José Félix de Oliveira |
| personal trainer itapevi | "itapevi sp", "personal itapevi" | sem Instagram nem preço no autocompletar. Concorrente: pedegas.com ("personal trainer 24 horas em Itapevi"), diretório gerado em massa |
| personal trainer osasco | "**osasco valor**" (1ª sugestão), "**mulher** osasco", "**bluefit** osasco", "**smart fit** osasco", "personal osasco" | Preço de novo, e em primeiro. **Personal dentro de rede de academia** (Smart Fit, Bluefit) aparece pela primeira vez. Pesquisas relacionadas: "valor personal trainer smart fit", "perto de mim", "online", "preço", "butantã sp". Superprof mostra **preço no resultado** ("R$ 130/h; 1 aula gratuita") com **5,0 (19 avaliações)**; Studio AMPMAX (Centro); FitLocal |

**"As pessoas também perguntam"** (repetiu em Tamboré e Aldeia da Serra):
- Quanto custa 1 mês de personal trainer?
- Quanto custa um personal trainer 3 vezes por semana?
- É vantajoso pagar um personal trainer?
- É permitido cobrar taxa de personal trainer? (a taxa que academia ou condomínio cobra do personal)
- Um personal trainer pode me ajudar a emagrecer?
- É melhor treinar 3 ou 5 vezes na semana? (Barueri)
- Qual o valor de 1 hora de personal trainer? (Santana de Parnaíba)
- Vale a pena pagar um personal trainer? (Santana de Parnaíba — variação de "é vantajoso")
- Quais são 3 motivos para treinar com um personal trainer? (Carapicuíba)
- Qual a diferença entre personal trainer e professor de educação física? (Itapevi) — **cuidado:** a regra do portal proíbe citar o conselho da profissão; se virar resposta, fala de função e rotina, nunca de registro
- Qual é o melhor personal trainer online? (Osasco)

**Concorrentes vistos:** Superprof (listagem de Barueri), cronoshare.com.br
("Personal Trainer em Barueri"), Família Kaizen, iservices.digital
("Personal Trainer em Barueri SP"), Treinar.me ("Personal Trainers em
Barueri - Centro"), suasaulasparticulares.com.br ("Personal Trainers em
Santana de Parnaíba"). Quase todos são **diretórios de profissionais** — o
mesmo formato do portal.

**Os resultados são personalizados pela localização:** os prints foram
feitos em Alphaville Industrial (Barueri), o que ajuda o site do Montinho
a aparecer. Quem busca de outra cidade da região pode ver outra ordem.

**Preço local (prints de 30/09, busca "valor personal trainer por mês"):**
o autocompletar traz "por mês **barueri**", "por mês **alphaville**" e "por
mês barueri sp" como as três primeiras sugestões. É a confirmação mais
direta de que a região pesquisa PREÇO junto com o lugar — reforça o item 1
abaixo para as páginas de Barueri e Alphaville.

## Leitura provisória (a fechar quando os prints de todas as cidades chegarem)

1. As perguntas de preço são as mesmas em todas as cidades, e as páginas de
   cidade já têm faixa de preço — falta responder nas palavras exatas ("1 mês",
   "3 vezes por semana") no FAQ de cada página da região.
2. "Taxa de personal" (condomínio/academia) não tem resposta no portal hoje.
   Candidata a seção do guia `/guias/personal-trainer-em-condominio/`.
3. Os residenciais de Alphaville e Tamboré só viram página própria se aparecer
   demanda real (sugestão sem relógio ou impressão no Search Console).
4. O site próprio do Montinho e o portal disputam a mesma busca local. Decidir
   qual página é a porta de cada termo antes de reforçar as duas.

## Aplicado nas páginas — 30/09/2026

Pedido do Renato: aplicar os prints nas dez páginas de uma vez (Cotia e Embu
das Artes ficam para quando os prints chegarem).

| página | title e description | perguntas novas |
|---|---|---|
| Alphaville | valor por mês e aula · taxa do condomínio | 1 mês 3x/semana · taxa (condomínio) |
| Tamboré | valor por mês e por aula · taxa do condomínio | 1 mês 3x/semana · taxa · fica em Barueri ou Santana? · personal ajuda a emagrecer? |
| Aldeia da Serra | valor por mês · taxa do condomínio | 1 mês 3x/semana · taxa · fica em Barueri ou Santana? |
| Barueri | valor por mês e por aula · taxa da academia | 1 mês 3x/semana · taxa (academia) · 3 ou 5 vezes na semana? |
| Santana de Parnaíba | valor por mês · Instagram | 1 mês 3x/semana · como avaliar pelo Instagram |
| Jandira | valor por mês e por aula · Instagram | 1 mês 3x/semana · Instagram |
| Carapicuíba | valor por mês e aula · Instagram | 1 mês 3x/semana · Instagram · 3 motivos para treinar com personal |
| Granja Viana | valor por mês e aula · taxa do condomínio | 1 mês 3x/semana · taxa; a pergunta de preço que duplicava a padrão virou "por que custa mais que no resto de Cotia?" |
| Itapevi | valor por mês e por aula | 1 mês 3x/semana · diferença entre personal e professor de educação física (por função, sem registro) |
| Osasco | valor por mês e por aula · taxa da academia | 1 mês 3x/semana · taxa (academia) · melhor personal online |

Os números de preço saem dos dados de cada cidade (`precos`) — nada foi
digitado. A resposta da taxa foi checada em duas frentes: não há regra
nacional em vigor, o DF tem lei própria, há projeto no Congresso para
limitar o valor e a Justiça já decidiu dos dois lados.

Regência corrigida junto: "no Tamboré", "na Aldeia da Serra", "na Granja
Viana" (o portal escrevia "em").

**Ficou de fora, de propósito:** "personal mulher" (Alphaville, Osasco) — o
portal não tem profissionais a listar, e responder sem fato seria encher
página; "personal na Smart Fit / Bluefit" (Osasco) — a regra de personal
externo varia por rede e unidade, e não há fonte oficial conferida; "xbody"
(Granja) — é marca de estúdio.

**Como medir:** as dez páginas mudaram juntas e são lidas como grupo, contra
as outras cidades de SP. No próximo relatório: impressões, cliques e a
posição das buscas "personal trainer + região" e "valor + região".

## Cotia, Embu das Artes e Belo Horizonte — prints e aplicação em 30/09/2026

| termo | autocompletar / relacionadas | PAA | resultados |
|---|---|---|---|
| personal trainer cotia | "cotia granja viana", "academia acqualife personal trainer cotia" (+ fotos, avaliações), "personal em cotia"; relacionadas: granja viana, preço, online | valor médio · 3 vezes por semana · é vantajoso pagar · **qual plano do Gympass tem personal** | listagem com 5,0 (6) e "1ª aula grátis"; Instagram de personal local (5,1 mil seguidores); Site da Granja; cotiafacil.com.br (estúdio na Granja Viana II) |
| personal trainer embu das artes | nenhuma sugestão própria | valor de 1 hora · é vantajoso pagar · diferença entre personal e educador físico · é permitido cobrar taxa | Superprof (11 profissionais, 5,0 (6)), Treinar.me |
| personal trainer belo horizonte | "preço", "em bh preço", "mulher", "bh instagram", "smart fit", "bh pratique", "pampulha", "quanto custa um personal trainer na pratique", "particular", "quanto ganha um personal trainer em belo horizonte", duas marcas e um nome próprio; relacionadas: **caiçara bh**, **venda nova**, **contagem** | quanto custa em BH · 1 mês · vale a pena contratar · 3 vezes por semana | Superprof (419 profissionais, 5,0 (124)); Instagram de personal (39 mil seguidores); suasaulasparticulares; fórum com "80/100 por hora" |

**Aplicado:**

- **Cotia** — título e descrição com o valor por mês; pergunta "1 mês, 3 vezes
  por semana"; e a página **passou a linkar a Granja Viana** (antes não
  linkava, e o autocompletar junta as duas).
- **Embu das Artes** — título e descrição com o valor por mês; perguntas "1
  mês, 3 vezes por semana", "é permitido cobrar taxa" (versão academia) e
  "diferença entre personal trainer e educador físico" (por função, sem
  registro; texto próprio, diferente do de Itapevi).
- **Belo Horizonte** — título passa a ter preço (era a única das 20 maiores
  sem); perguntas "1 mês, 3 vezes por semana" e "como avaliar pelo
  Instagram"; **Contagem** entra primeiro nas vizinhas (estava fora, e as
  vizinhas eram Uberlândia, Rio, Vitória e Brasília).

**Não aplicado, e por quê:**

- **"Qual plano do Gympass tem personal"** — as fontes encontradas divergem e
  falam dos planos dos EUA (sessões virtuais por app). Sem fonte oficial do
  Brasil, não entra. Se o Renato conferir no app, vira resposta.
- **Academia Acqualife (Cotia)** — uma fonte só (página de parceiro do
  Wellhub, Rua Manaus, 148, Jardim dos Ipês). A regra das academias pede a
  página oficial ou duas fontes; fica pendente.
- **"Personal na Pratique / Smart Fit" (BH)** — a regra de personal externo
  é de cada rede e unidade; sem fonte oficial conferida.
- **"Personal mulher"** — mesmo motivo de Alphaville e Osasco.
- **"Quanto ganha um personal trainer em BH"** — é busca de quem quer
  trabalhar como personal, não contratar; outro público.
- **Caiçara e Venda Nova** — sinal de demanda de bairro em BH sem página.
  Candidatos para a próxima leva de bairros de BH, depois da leitura de
  09/10.

## Brasília — prints e aplicação em 30/09/2026

| termo | autocompletar / relacionadas | PAA | resultados |
|---|---|---|---|
| personal trainer brasilia | "df", "preço", "instagram", "asa norte", "sudoeste", "asa sul", "mulher", "guará", "águas claras", "vicente pires", "riacho fundo 1" | quanto custa no DF · 1 mês · 3 vezes por semana · é vantajoso pagar | resumo de IA do Google: "R$ 50 a R$ 150 por hora/aula" (Superprof); Cronoshare: "R$ 50 a R$ 120 a hora/aula"; perfis de Instagram |

**Aplicado:** título e descrição com valor por mês; perguntas "1 mês, 3
vezes por semana", "como avaliar pelo Instagram" e **"Quanto custa um
personal trainer no DF?"** — esta nova, gerada com as faixas das quatro
páginas do DF que o portal tem (Brasília, Águas Claras, Taguatinga,
Ceilândia), sem número digitado. **Águas Claras e Ceilândia passaram a ser
linkadas** pela página de Brasília (antes só Taguatinga era).

**Não aplicado:** "mulher" (mesmo motivo das outras cidades). A pergunta de
taxa não entrou — não estava no PAA.

**Para decidir — o preço de Brasília está acima do que o Google mostra.** O
portal diz R$ 90 a R$ 220 a aula; o resumo de IA do Google (citando
Superprof) diz R$ 50 a R$ 150, e a Cronoshare, R$ 50 a R$ 120. Marketplace
tende a puxar para baixo (profissionais começando, primeira aula grátis), e
a página de Brasília fala do Plano Piloto, a região mais cara — então a
diferença pode ser legítima. Mas quem lê "R$ 90 a R$ 220" logo abaixo de
"R$ 50 a R$ 150" do Google estranha. Não mexi no número sem fonte; fica
para o Renato decidir.

**Bairros candidatos no DF:** Asa Norte (já estava no plano), Guará,
Vicente Pires, Riacho Fundo. Sudoeste e Asa Sul já têm página.

## Goiânia e Teresina — prints e aplicação em 30/09/2026

| termo | autocompletar / relacionadas | PAA | resultados |
|---|---|---|---|
| personal trainer goiânia | "instagram", "valor", "mulher", "bem avaliados", "bluefit goiania", "online goiania", "vaga"; relacionadas: "aparecida de goiânia", "particular", "online goiania" | quanto custa em Goiânia · 1 mês · 3 vezes por semana · é vantajoso pagar | listagem com preço (R$ 60,00) e nota; perfis de Instagram; GetNinjas |
| personal trainer teresina | "instagram", "mulher", "selfit teresina", um nome próprio, uma notícia ("morre em teresina"); relacionadas: "instagram", "online" | quanto custa em Teresina · valor de 1 hora · é vantajoso pagar · 3 ou 5 vezes na semana | Cronoshare (10/10, 4 avaliações); perfis de Instagram |

**Aplicado:**

- **Goiânia** — valor por mês no título e na descrição; perguntas "1 mês, 3
  vezes por semana", "como avaliar pelo Instagram" e **"Personal trainer
  online ou presencial em Goiânia: qual escolher?"** — nova opção gerada
  (`onlineOuPresencial`), com as faixas da própria página, porque "online
  goiania" aparece no autocompletar e nas relacionadas e é o produto do
  Montinho. Aparecida de Goiânia passa ao topo das vizinhas.
- **Teresina** — valor por mês no título e na descrição; perguntas "1 mês, 3
  vezes por semana", "como avaliar pelo Instagram" e "É melhor treinar 3 ou
  5 vezes na semana em Teresina?" — texto próprio, com o calor como fator de
  recuperação (o de Barueri não foi reaproveitado).

**Não aplicado:** "mulher"; "bluefit" e "selfit" (regra de personal externo
por rede, sem fonte oficial); "vaga personal trainer goiania" (é emprego,
outro público); "bem avaliados" (o portal não tem avaliações de
profissionais — a pergunta de Instagram cobre como avaliar); o nome próprio
e a notícia de Teresina — notícia de morte não é intenção de contratar, e
usá-la para atrair clique seria de mau gosto.

## Florianópolis e João Pessoa — prints e aplicação em 30/09/2026

| termo | autocompletar / relacionadas | PAA | resultados |
|---|---|---|---|
| personal trainer florianopolis | bairros ("campeche", "centro", "itacorubi", "ingleses"), "mulher", "valor", "vaga"; relacionadas: "são josé sc", "palhoça", "ingleses", "campeche", "pratique" | quanto custa em Florianópolis · 1 mês · 3 vezes por semana · é vantajoso pagar | perfil de Instagram; Doctoralia ("educadores físicos"); diretório com 4,8 (28.678) |
| personal trainer joão pessoa | "mulher", "valor", "quanto custa um personal trainer em joão pessoa", "valor personal trainer mensal", "preço", "online", "vagas", dois nomes próprios, uma notícia, "personal fralda" (outro assunto) | quanto custa em João Pessoa · 1 mês · 3 vezes por semana · é vantajoso pagar | Superprof (137 profissionais, 5,0 (23)); perfil de Instagram |

**Aplicado:**

- **Florianópolis** — valor por mês no título e na descrição; pergunta "1
  mês, 3 vezes por semana"; e "Vale procurar personal trainer no próprio
  bairro em Florianópolis?", porque o autocompletar é quase todo de
  bairros: a resposta usa o que a página já documenta (Ilha e continente
  ligados por pontes, trânsito de verão) e aponta as páginas do Campeche,
  Lagoa, Jurerê e Beira-Mar Norte. **São José e Palhoça passaram a ser
  linkadas** (estão nas relacionadas; antes, nenhuma das duas).
- **João Pessoa** — valor por mês no título e na descrição; perguntas "1
  mês, 3 vezes por semana", "online ou presencial" ("online" no
  autocompletar) e "Como funciona o personal trainer para hipertrofia em
  João Pessoa?" — esta pelo Search Console (35 impressões, 0 clique), com
  os mesmos números dos artigos do portal: 10 a 20 séries por semana para
  quem já treina, 5 a 9 para iniciante, proteína de 1,6 a 2,2 g/kg.

**Não aplicado:** "mulher", "vaga(s)", nomes próprios, a notícia de João
Pessoa, "personal fralda", "pratique" (sem fonte oficial da regra de
personal da rede).

**Bairros candidatos em Florianópolis:** Ingleses, Itacorubi, Centro — sem
página hoje.

## São Luís e São Paulo — prints e aplicação em 30/09/2026

| termo | autocompletar / relacionadas | PAA | resultados |
|---|---|---|---|
| personal trainer sao luis | "em sao luis maranhao", "ma" (e "barueri"/"bar", efeito da localização de quem buscou); relacionadas: "mulher", "preço", "online", "personal inteligente", "personal fralda", "Selfit" | 1 mês · 3 vezes por semana · é vantajoso pagar · 3 ou 5 vezes na semana | GetNinjas (4,9, 53), Cronoshare, Instagram |
| personal trainer são paulo | "preço", "zona sul", "zona leste", "zona norte", "pinheiros", "instagram", "sp"; "mulher perto de mim", "perto de mim", "mensal", "barato sp", "particular preço", "valor personal trainer smart fit"; relacionadas: "centro sp", "tabela de preço", "academia com personal incluso sp" | quanto custa em SP · 3 vezes por semana · é vantajoso pagar · quanto custa 1 mês de smart fit | resumo de IA: R$ 90 a R$ 150 por hora presencial, estúdios de alto padrão perto de R$ 2.000/mês; Superprof (5,0, 746) com "R$ 130/h"; **no mapa de empresas, "Montinho Personal Trainer 5,0 (25)"** |

**Aplicado:**

- **São Luís** — valor por mês no título e na descrição; perguntas "1 mês, 3
  vezes por semana", "online ou presencial" (relacionadas) e "É melhor
  treinar 3 ou 5 vezes na semana em São Luís?", com texto próprio: a chuva
  de dezembro a junho, a orla e a Lagoa da Jansen (dados da página).
- **São Paulo** — valor por mês no título e na descrição; perguntas "1 mês,
  3 vezes por semana", Instagram e **"Como encontrar personal trainer mais
  barato em São Paulo?"** — nova opção gerada (`barato`), com as faixas da
  página: pacote em vez de avulsa, dupla ou pequeno grupo, online e o
  formato misto.

**Não aplicado:** "mulher", "perto de mim" (a página já é a resposta local),
"smart fit" / "academia com personal incluso" / "Selfit" (sem fonte oficial
das regras e preços das redes), "quanto custa 1 mês de smart fit" (é preço
de academia, não de personal), "personal inteligente" e "personal fralda"
(outros assuntos).

**Bairros candidatos em São Paulo:** zona leste e zona norte — os 10
bairros publicados são todos da zona sul e do centro-oeste. Pinheiros e o
centro já têm página ou vizinhança coberta.

**Observação sobre o Google Meu Negócio:** a ficha "Montinho Personal
Trainer" (5,0, 25 avaliações) aparece no mapa de empresas da busca
"personal trainer são paulo" feita a partir de Alphaville. É o ativo local
mais forte que existe hoje na região — mais que o portal ou o site.

## Porto Alegre — prints e aplicação em 01/10/2026

| termo | autocompletar / relacionadas | PAA | resultados |
|---|---|---|---|
| personal trainer em porto alegre | "mulher", "em casa", "zona sul", "zona norte", "preço", "instagram", "rs"; relacionadas: "quanto custa", "smart fit", "centro" | quanto custa em Porto Alegre · valor de 1 hora · é vantajoso pagar · **uma hora de treino é suficiente?** | Superprof (5,0, 127); perfis de Instagram, um deles de treino para dor crônica |

**Aplicado:** valor por mês no título e na descrição; perguntas "1 mês, 3
vezes por semana" (que responde também o "valor de 1 hora"), Instagram,
**"Como funciona o personal trainer em casa em Porto Alegre?"** ("em casa"
no autocompletar; resposta com o inverno, que a página já documenta) e
**"Uma hora de treino é suficiente?"** (PAA novo; mesmos números de volume
dos artigos do portal).

**Corrigido junto:** as vizinhas eram Florianópolis e Balneário Camboriú.
Entraram Canoas, Viamão, Alvorada, Gravataí e Cachoeirinha, na frente (a
página mostra as quatro primeiras).

**Não aplicado:** "mulher", "smart fit" (sem fonte oficial da regra de
personal da rede).

**Bairros candidatos em Porto Alegre:** zona sul, zona norte e centro — os
seis bairros publicados (Moinhos de Vento, Bela Vista, Petrópolis, Três
Figueiras, Menino Deus, Cidade Baixa) são da região central e nobre.

## Aracaju — prints e aplicação em 01/10/2026

| termo | autocompletar / relacionadas | PAA | resultados |
|---|---|---|---|
| personal trainer em aracaju | "mulher", "instagram", "quanto custa um personal trainer em aracaju", "personal em aracaju" ("arapiraca" é outra cidade, em AL); relacionadas: "online", "barra dos coqueiros", "academia aracaju", "personal inteligente" | valor de 1 hora · vale a pena pagar · 3 ou 5 vezes na semana · **um personal pode me ajudar a emagrecer?** | **mapa de empresas no topo**, com três personais 5,0 (25 a 49 avaliações), um com foco em dor lombar; Superprof (5,0, 11); StarOfService; perfis de Instagram |

Busca feita em janela anônima, com localização em Santana de Parnaíba.

**Aplicado:** valor por mês no título e na descrição; perguntas "1 mês, 3
vezes por semana", Instagram, "online ou presencial" (relacionadas) e "Um
personal trainer pode ajudar a emagrecer em Aracaju?", com texto próprio
(calor, horários e a orla 24 horas, que a página já documenta).

**Corrigido junto:** as vizinhas eram Salvador e Recife. Entraram Nossa
Senhora do Socorro e São Cristóvão, da Grande Aracaju, na frente.

**Não aplicado:** "mulher"; "3 ou 5 vezes na semana" — já tem três versões
próprias (Barueri, Teresina, São Luís), e a quarta, sem um fato local que a
diferencie, seria a mesma resposta trocando o nome da cidade; "academia
aracaju" e "personal inteligente" (outros assuntos).

**Bairro candidato:** Barra dos Coqueiros (é município vizinho, sem página).

**Leitura do resultado:** em Aracaju o topo é do **mapa de empresas**, com
personais avaliados. É o mesmo padrão da busca de SP, onde a ficha do
Montinho aparece: na busca local, quem tem perfil no Google com avaliação
ganha a primeira dobra da página.

## Recife e Maceió — prints e aplicação em 01/10/2026

| termo | autocompletar / relacionadas | PAA | resultados |
|---|---|---|---|
| personal trainer em recife | "mulher", "valor hora", "instagram", "selfit", "boa viagem", "zona norte", "preço", **"para idosos"**, "online"; relacionadas: "quanto custa", **Olinda, Jaboatão dos Guararapes, Paulista**, "selfit", "boa viagem" | quanto custa no Recife · valor de 1 hora · vale a pena pagar · 3 ou 5 vezes na semana | mapa de empresas com personais 5,0 (19 a 38 avaliações); Superprof (5,0, 60) e perfil "R$ 60/h"; Instagram; GetNinjas |
| personal trainer em maceió | (sem print do autocompletar) | valor de 1 hora · vale a pena pagar · **quantas horas pode ficar na academia por dia?** · 3 ou 5 vezes na semana | mapa de empresas; Superprof (61 profissionais, 5,0, 7); Instagram |

**Aplicado:**

- **Recife** — valor por mês no título e na descrição; perguntas "1 mês, 3
  vezes por semana" (responde "valor hora"), Instagram, "online ou
  presencial" e **"Como funciona o personal trainer para idosos no
  Recife?"** ("para idosos" no autocompletar; resposta com avaliação,
  liberação médica, equilíbrio e quedas, e o horário que a umidade da
  cidade pede). **Olinda, Jaboatão, Paulista e Camaragibe** passaram a ser
  vizinhas (as três primeiras estão nas relacionadas; antes, só capitais).
- **Maceió** — valor por mês no título e na descrição; pergunta "1 mês, 3
  vezes por semana" e **"Quantas horas pode ficar na academia por dia?"**
  (PAA novo). **Rio Largo e Marechal Deodoro** entraram nas vizinhas.

**Não aplicado:** "mulher", "selfit"; "3 ou 5 vezes na semana" nas duas —
já há três versões próprias no portal, e uma quarta e quinta sem fato local
seriam a mesma resposta; Instagram em Maceió (não veio no print).

**Bairros candidatos no Recife:** zona norte. Boa Viagem já tem página (e é
do piloto: não mexer antes de 09/10).

## Juiz de Fora e Vitória — prints e aplicação em 01/10/2026

| termo | autocompletar / relacionadas | PAA | resultados |
|---|---|---|---|
| personal trainer em juiz de fora | "mulher", "quanto custa um personal trainer em juiz de fora", **"personal trainer em jf"**, "personal em jf" | quanto custa em Juiz de Fora · valor de 1 hora · **pode treinar 1 hora da manhã?** · é vantajoso pagar | mapa de empresas com três personais 5,0 (18 a 67 avaliações); Superprof (5,0, 18); lista de um site de notícias local; GetNinjas; StarOfService |
| personal trainer vitória | "vitória es", "em vitoria es" e três cidades homônimas (Vitória da Conquista, Vitória de Santo Antão, União da Vitória); relacionadas: **Serra, Cariacica, Vila Velha**, "valor mensal", "online", "preço" | valor de 1 hora · é vantajoso pagar · tabela de preços · tem personal pelo Gympass? | Superprof (57 profissionais, 5,0, 14); StarOfService; site de estúdio local |

**Aplicado:**

- **Juiz de Fora** — título próprio com a sigla, "Personal Trainer em Juiz
  de Fora (JF): valor por mês e aula" (o autocompletar busca "em jf");
  descrição com valor por mês; perguntas "1 mês, 3 vezes por semana" e
  "Pode treinar à 1 hora da manhã?" (PAA; resposta apoiada em Stutz,
  Eiholzer e Spengler, *Sports Medicine*, 2019 — exercício à noite não
  atrapalha o sono da maioria; o cuidado é com treino intenso terminando
  menos de uma hora antes de deitar).
- **Vitória** — valor por mês no título e na descrição (o "(ES)" já separa
  das homônimas); perguntas "1 mês, 3 vezes por semana" e "online ou
  presencial"; **Vila Velha, Serra e Cariacica** passaram a ser vizinhas
  (antes: Rio, BH e Niterói).

**Não aplicado:** "mulher"; "tem personal pelo Gympass?" (sem fonte oficial
do Brasil, mesmo motivo de Cotia); "tabela de preços" — a página já tem a
tabela e a pergunta de preço padrão; "personal fralda" (outro assunto).

**Vizinhas de Juiz de Fora:** seguem BH, Contagem e Rio — o portal não tem
página de nenhum município vizinho de Juiz de Fora.

## Manaus — prints e aplicação em 01/10/2026

| termo | autocompletar / relacionadas | PAA | resultados |
|---|---|---|---|
| personal trainer manaus | "mulher", "valor", "bem avaliados", "smart fit", nomes próprios, "camisa" e uma notícia; relacionadas: "valor", "online", "valor personal trainer smart fit", "quanto ganha" | qual o valor em Manaus · 1 mês · 3 vezes por semana · é vantajoso pagar | perfis de Instagram; site de personal com app a R$ 19,90 |

**Aplicado:** valor por mês no título e na descrição; perguntas "1 mês, 3
vezes por semana" e "online ou presencial" ("online" nas relacionadas). As
quatro perguntas do PAA são de preço — a página já respondia "quanto
custa", e agora responde o mês e a frequência. **Vizinhas:** eram Palmas e
Brasília; entraram Manacapuru, Presidente Figueiredo, Itacoatiara e Novo
Airão, da Região Metropolitana de Manaus.

**Não aplicado:** "mulher", "smart fit", "quanto ganha" (emprego), nomes,
"camisa", a notícia; "bem avaliados" — o portal não avalia profissionais.

## Praia Grande — prints e aplicação em 01/10/2026

| termo | autocompletar / relacionadas | PAA | resultados |
|---|---|---|---|
| personal trainer praia grande | "praia grande sp", **"personal trainer praia"**, um estúdio e um nome próprio; relacionadas: "perto de mim", "academia praia grande" | 1 mês · 3 vezes por semana · pode treinar 1 hora da manhã? · é vantajoso pagar | Superprof (5,0, 16) com "em média R$ 80 por hora"; Instagram; GetNinjas; acheiprofissional; StarOfService |

**Aplicado:** valor por mês no título e na descrição (o "(SP)" separa de
Praia Grande/SC, que também tem página); pergunta "1 mês, 3 vezes por
semana" e **"Dá para treinar com personal na praia em Praia Grande?"** — a
página não tinha nenhuma pergunta própria; resposta com os 22,5 km de orla,
as academias ao ar livre e a ciclovia (dados da página), a transição da
areia dura para a fofa e o que a praia não substitui. **Vizinhas:** eram
Santos, Guarujá e São Bernardo; entraram São Vicente e Mongaguá, que fazem
divisa, na frente.

**Não aplicado:** "pode treinar 1 hora da manhã?" — a resposta já está em
Juiz de Fora, e repeti-la seria o mesmo texto em duas cidades; estúdio e
nome próprio; "academia praia grande" (outro assunto).

## Joinville e Uberlândia — prints e aplicação em 01/10/2026

| termo | autocompletar / relacionadas | PAA | resultados |
|---|---|---|---|
| personal trainer em joinville | "mulher", **"preço"**, "quanto ganha um personal trainer em joinville", "personal em joinville"; relacionadas: "preço", **"online"**, "personal gym" | quanto custa em Joinville · valor de 1 hora · é vantajoso pagar · 3 ou 5 vezes na semana | Superprof (35 profissionais, 5,0, 9, "presencial ou online"); Instagram de um personal que atende em Bluefit e Force One; Doctoralia (educadores físicos); BeBee |
| personal trainer em uberlândia | **"valor"**, "mulher", variações sem acento; relacionadas: "mulher", **"online"**, "preço", "nutricionista uberlandia" | quanto custa em Uberlândia · valor de 1 hora · vale a pena pagar · 3 ou 5 vezes na semana | mapa com quatro estúdios e personais (4,9 a 5,0; até 146 avaliações); Instagram; Reddit r/Uberlandia pedindo indicação de personal "que se desloque até a academia do aluno"; vídeo antigo do Globoplay com exercícios em casa |

**Aplicado nas duas:** valor por mês no título e na descrição; perguntas "1
mês, 3 vezes por semana" e "online ou presencial" ("online" nas
relacionadas das duas). As quatro perguntas do PAA repetem o padrão das
outras cidades: preço, hora, "vale a pena" e frequência.

- **Joinville — vizinhas:** eram Blumenau, Florianópolis e Curitiba;
  entraram, na frente, Jaraguá do Sul, São Francisco do Sul e São Bento do
  Sul, do norte catarinense.
- **Uberlândia — vizinhas:** eram BH, Goiânia e Ribeirão Preto; entraram,
  na frente, Araguari, Uberaba e Ituiutaba, do Triângulo Mineiro.

**Não aplicado:** "mulher"; "quanto ganha" (emprego); "personal gym" e
"nutricionista" (outros assuntos); "3 ou 5 vezes" e "vale a pena pagar" —
a página já tem "Vale a pena ter personal trainer em…" e o "3 ou 5" já tem
três versões próprias; Instagram (veio como resultado, não como busca);
"exercícios em casa" em Uberlândia (vídeo de 2017, não é pedido da busca).
A pergunta do Reddit — personal que vai até a academia do aluno — é a
mesma da taxa de personal em academia; fica anotada, sem aplicar, porque
apareceu num resultado só e a pergunta da taxa até hoje só entrou onde o
print pediu.

## Natal — prints e aplicação em 01/10/2026

| termo | autocompletar / relacionadas | PAA | resultados |
|---|---|---|---|
| personal trainer em natal | **"natal rn"** (primeira sugestão), "quanto custa um personal trainer em natal rn", "mulher natal rn", "personal em natal rn"; **"pre natal" e "post natal"**; duas sugestões de notícia policial; relacionadas: "quanto custa… natal rn", **"online"**, "mulher natal rn", "personal inteligente" | quanto custa em Natal · valor de 1 hora · é vantajoso pagar · **quem treina 3x na semana tem resultado?** | mapa com personais 5,0 (até 145 avaliações); Superprof (109 profissionais, 5,0, 17); Instagram; GetNinjas (4,9, 53) |

**Aplicado:** valor por mês no título e na descrição — o título sai com
"(RN)", que é como a cidade é buscada (quatro sugestões com "rn") e o que
separa a página das buscas de pré-natal; perguntas "1 mês, 3 vezes por
semana", "online ou presencial" e **"Quem treina 3 vezes por semana em
Natal tem resultado?"** (PAA novo, diferente do "3 ou 5": a resposta é
sobre frequência por grupo muscular — Schoenfeld e colegas, *Sports
Medicine*, 2016; Schoenfeld, Grgic e Krieger, *Journal of Sports Sciences*,
2019 — e usa Ponta Negra e a Via Costeira, já descritas na página, para os
dias sem musculação). **Vizinhas:** eram João Pessoa, Fortaleza e Recife;
entraram, na frente, Parnamirim, São Gonçalo do Amarante, Extremoz e
Macaíba, que fazem divisa com Natal.

**Não aplicado:** "mulher"; "personal inteligente"; as notícias policiais;
"vale a pena" (a página já responde).

**Achado para outra página:** "personal trainer pre natal" e "post natal"
são buscas de gestante. O guia `/guias/personal-trainer-para-gestantes/`
cobre gestação e pós-parto, mas não usa "pré-natal" nem "pós-natal" no
título. Pede prints próprios antes de mexer.

## Niterói — prints e aplicação em 01/10/2026

| termo | autocompletar / relacionadas | PAA | resultados |
|---|---|---|---|
| personal trainer niterói | **"preço"**, **"icarai"**, **"instagram"**, "mulher"; relacionadas: **"personal trainer são gonçalo"**, **"online"**, "valor personal trainer mensal", "valor personal trainer smart fit", "academia niteroi", uma academia pelo nome | valor de 1 hora · quanto custa uma sessão em Niterói · é vantajoso pagar · tem personal pelo Gympass? | dois perfis de Instagram; site de um personal local; BeBee; Achei o Profissional (avulsa R$ 80 a R$ 200, pacote 3x/semana R$ 400 a R$ 1.500); Superprof (96 professores) |

**Aplicado:** valor por mês no título e na descrição; perguntas "1 mês, 3
vezes por semana", "online ou presencial" e "como avaliar pelo Instagram"
(o Instagram está no autocompletar, não só nos resultados). **Vizinhas:**
eram Rio, Vitória e BH; entraram, na frente, São Gonçalo (nas
relacionadas) e Maricá, que fazem divisa, e Itaboraí, do Leste
Fluminense; o Rio segue entre as quatro.

**Não aplicado:** "mulher"; "tem personal pelo Gympass?" (sem fonte
oficial, mesmo motivo de Cotia e Vitória); "valor personal trainer smart
fit" (política da rede não verificada); "academia niteroi" e a academia
pelo nome (outro assunto).

**Icaraí:** "personal trainer niteroi icarai" no autocompletar confirma a
escolha do bairro no piloto. A página de Icaraí já recebe link da página de
Niterói e não foi tocada — é do piloto, leitura em 09/10.

Com Niterói, a leva 3 está completa.

## Salvador — prints e aplicação em 01/10/2026

| termo | autocompletar / relacionadas | PAA | resultados |
|---|---|---|---|
| personal trainer salvador | **"preço"**, **"instagram"**, "mulher", "bahia", **"imbui"**, "famoso", "camisa" e duas sugestões ligadas a notícia ("acusado", "assedio"); relacionadas: **"lauro de freitas"**, "preço", "instagram", "smart fit", "particular", **"valor personal trainer mensal"**, "mulher", "assedio" | valor em Salvador · **1 mês** · **3 vezes por semana** · é vantajoso pagar | mapa de personais; Superprof (5,0, 51); três perfis de Instagram; suasaulasparticulares |

**Aplicado:** valor por mês no título e na descrição; perguntas "1 mês, 3
vezes por semana" (duas perguntas do PAA e uma relacionada pedem isso) e
"como avaliar pelo Instagram" (autocompletar e relacionadas). **Vizinhas:**
eram só Aracaju e Recife; entraram, na frente, Lauro de Freitas (nas
relacionadas) e Simões Filho, que fazem divisa, e Camaçari, da Região
Metropolitana.

**Não aplicado:** "mulher", "famoso", "camisa", "particular", "smart fit";
as sugestões ligadas a notícia não entram em página de cidade. "Online"
não apareceu como busca, então a pergunta "online ou presencial" ficou de
fora.

**Achado editorial (para o Renato decidir):** "assédio" aparece no
autocompletar e nas relacionadas. Por trás há uma dúvida legítima — como
reconhecer conduta profissional e se proteger no treino individual —, que
caberia num guia nacional, não numa página de cidade e nunca citando caso.
→ Feito em 01/10, aprovado pelo Renato: `/guias/personal-trainer-conduta-profissional/`
(linkado do guia "Como escolher", na lista de sinais de alerta).

**Bairro candidato em Salvador:** Imbuí (sem página hoje; Salvador já tem
sete bairros).

## Rio de Janeiro — prints e aplicação em 01/10/2026

| termo | autocompletar / relacionadas | PAA | resultados |
|---|---|---|---|
| personal trainer rio de janeiro | **"zona sul"**, **"zona norte"**, **"instagram"**, **"preço"**, "mulher", "vagas", "studio", **"idosos"**, **"online"**, um nome próprio; relacionadas: "rj preço", "rj zona sul", **"tijuca rj"**, **"duque de caxias"**, "smart fit", "smart fit rj", "particular", **"valor personal trainer mensal"** | valor no Rio · valor de 1 hora · é vantajoso pagar · tem personal pelo Gympass? | mapa com personais 5,0 (59 a 82 avaliações); Superprof (5,0, 324); Treinar.me (Zona Sul); Instagram (Méier); site de estúdio; cronoshare |

**Aplicado:** valor por mês no título ("Personal Trainer no Rio de Janeiro
(RJ): valor por mês" — o "(RJ)" casa com "personal trainer rj preço" e
"rj zona sul") e na descrição; perguntas "1 mês, 3 vezes por semana",
"online ou presencial" e "como avaliar pelo Instagram". **Vizinhas:** eram
Niterói, Vitória, BH e São Paulo; entraram Duque de Caxias (nas
relacionadas), São João de Meriti e Nova Iguaçu, que fazem divisa, com
Niterói em segundo.

**Não aplicado:** "mulher", "vagas" (emprego), "studio", "particular",
"smart fit" (política da rede não verificada), "tem personal pelo
Gympass?" (sem fonte oficial), o nome próprio. **"Idosos"** ficou de fora
nesta página: o Recife já tem a pergunta própria, e uma versão carioca sem
fato local seria o mesmo texto — se entrar, que seja num guia nacional.

**Zona sul, zona norte e Tijuca:** a página do Rio já linka os oito bairros
com página (Barra, Botafogo, Copacabana, Flamengo, Ipanema, Leblon,
Recreio e Tijuca). Tijuca e Barra são do piloto (leitura em 09/10). Fica
como candidata, depois do piloto, uma resposta de zona — "personal trainer
zona sul / zona norte do Rio" —, junto com as zonas já anotadas de São
Paulo e Porto Alegre.

## Curitiba — prints e aplicação em 01/10/2026

| termo | autocompletar / relacionadas | PAA | resultados |
|---|---|---|---|
| personal trainer curitiba | **"valor"**, **"instagram"**, "mulher", "centro", **"bigorrilho"**, "smartfit", "bem avaliados", "vagas", um estúdio pelo nome; relacionadas: "em curitiba preço", **"colombo"**, **"são josé dos pinhais"**, **"santa felicidade"**, "feminina", "instagram", "smartfit", **"valor personal trainer mensal"** | quanto custa em Curitiba · **1 mês** · pode treinar 1 hora da manhã? · vale a pena pagar | mapa de personais; Superprof (5,0, 165); Instagram; suasaulasparticulares; SuperTrainers; FitLocal ("R$ 80 a R$ 160/h") |

**Aplicado:** valor por mês no título e na descrição; perguntas "1 mês, 3
vezes por semana" e "como avaliar pelo Instagram". **Vizinhas:** a lista
estava **vazia** — a página não linkava nenhuma cidade da região. Entraram
São José dos Pinhais e Colombo (nas relacionadas), Pinhais e Araucária,
todas com divisa.

**Não aplicado:** "mulher"/"feminina", "smartfit", "vagas", "bem
avaliados" (o portal não avalia profissionais), o estúdio; "pode treinar 1
hora da manhã?" (resposta já está em Juiz de Fora).

**Bairros:** Bigorrilho (autocompletar) e Santa Felicidade (relacionadas)
já têm página e já recebem link da página de Curitiba. A de Santa
Felicidade tem um defeito antigo de metadado — descrição com 178
caracteres, acima do limite — que está entre os 82 da linha de base.
"Centro" fica como candidato.

## Londrina — prints e aplicação em 01/10/2026

| termo | autocompletar / relacionadas | PAA | resultados |
|---|---|---|---|
| personal trainer londrina | **"valor"**, "mulher", "bem avaliados", "preço", "vagas", "famoso", "academia com personal trainer", nomes próprios e uma notícia; relacionadas: **"ibiporã"**, **"cambé"**, "valor", "preço", "bem avaliados", "academia londrina" | quanto custa em Londrina · **1 mês** · **3 vezes por semana** · é vantajoso pagar | mapa com personais 5,0 (28 a 30 avaliações); Superprof (5,0, 20); Instagram; site de estúdio; sites de personais |

**Aplicado:** valor por mês no título e na descrição; pergunta "1 mês, 3
vezes por semana" (duas do PAA pedem isso). **Vizinhas:** eram Maringá,
Curitiba e Sorocaba; entraram, na frente, Cambé e Ibiporã (nas
relacionadas), que fazem divisa, e Rolândia, da Região Metropolitana;
Maringá segue entre as quatro.

**Não aplicado:** "mulher", "vagas", "famoso", "bem avaliados", nomes,
a notícia, "academia londrina"/"academia com personal" (outro assunto);
Instagram e "online" não apareceram como busca.

Gleba Palhano, bairro de Londrina, é do piloto e não foi tocado.

## Belém — prints e aplicação em 01/10/2026

| termo | autocompletar / relacionadas | PAA | resultados |
|---|---|---|---|
| personal trainer belém | **"belem pa"**, "mulher", duas sugestões de notícia; relacionadas: "personal em belém", **"online"**, **"ananindeua"**, "preço", "fralda", "tradução" | valor de 1 hora · pode treinar 1 hora da manhã? · é vantajoso pagar · quem treina 3x na semana tem resultado? | mapa com personais e estúdio (4,9 a 5,0; até 82 avaliações); Superprof (143 profissionais); Instagram; Treinar.me; seupersonal ("R$ 100 a R$ 1.174,80 por mês") |

**Aplicado:** valor por mês no título ("(PA)" casa com "belem pa") e na
descrição; perguntas "1 mês, 3 vezes por semana" e "online ou presencial".
**Vizinhas:** eram só São Luís e Manaus; entraram, na frente, Ananindeua
(nas relacionadas), Marituba e Benevides, que fazem divisa, e Barcarena, da
Região Metropolitana.

**Não aplicado:** "mulher", as notícias, "fralda" e "tradução" (outros
assuntos); "pode treinar 1 hora da manhã?" (já em Juiz de Fora) e "quem
treina 3x tem resultado?" (já em Natal) — repetir seria o mesmo texto.

## Fortaleza — prints e aplicação em 01/10/2026

| termo | autocompletar / relacionadas | PAA | resultados |
|---|---|---|---|
| personal trainer fortaleza | **"preço"**, "mulher", **"instagram"**, "greenlife", "selfit", "idosos", "vagas", "curso" e uma notícia; relacionadas: **"caucaia"**, "preço", "instagram", "smart fit", "greenlife", **"valor personal trainer mensal"**, "personal training ou trainer" | quanto custa em Fortaleza · **1 mês** · **3 vezes por semana** · é vantajoso pagar | mapa com personais e estúdio (5,0; até 116 avaliações); Superprof ("R$ 120/h"); Instagram; trainerconnect; Reddit r/Fortaleza ("vale a pena pra quem nunca treinou?"); BeBee |

**Aplicado:** valor por mês no título e na descrição; perguntas "1 mês, 3
vezes por semana" e "como avaliar pelo Instagram". **Vizinhas:** eram
Natal, João Pessoa e Recife; entraram, na frente, Caucaia (nas
relacionadas), Maracanaú, Eusébio e Aquiraz, todas com divisa.

**Não aplicado:** "mulher", "vagas", "curso" (emprego e formação), redes
pelo nome (Greenlife, Selfit, Smart Fit — política não verificada), a
notícia; "idosos" — segunda capital em que aparece (depois do Rio); o
portal já tem o guia de terceira idade, e a pergunta própria fica no
Recife. A dúvida do Reddit ("vale a pena para quem nunca treinou?") é
respondida pelo guia de iniciantes, sem fato local que justifique pergunta
própria.

Com Fortaleza, a leva 4 está completa.

## Birigui — prints e aplicação em 03/10/2026

| termo | autocompletar / relacionadas | PAA | resultados |
|---|---|---|---|
| personal trainer em birigui | "birigui sp", **"instagram"**, "valor", **"valor mensalidade"**, "para idosos", "personal em birigui", "personal trainer em araçatuba" | valor de 1 hora · vale a pena pagar · quem treina 3x na semana tem resultado? · **quanto custa uma academia por mês com personal?** | Superprof (5,0, 6); seupersonal (5 profissionais) |

**Aplicado:** valor por mês no título e na descrição; perguntas "1 mês, 3
vezes por semana" (o autocompletar pede "valor mensalidade") e "como
avaliar pelo Instagram". **Vizinhas:** Araçatuba já era a primeira —
nada a mudar.

**Não aplicado:** "quem treina 3x tem resultado?" (já em Natal);
"para idosos" — terceira cidade em que aparece (Rio, Fortaleza, Birigui),
fica anotado como candidato a pergunta gerada se continuar; "quanto custa
uma academia por mês com personal?" — PAA novo, mas a resposta pede o
preço da mensalidade de academia na cidade, que o portal não tem
verificado. Fica anotado: se repetir, vira pergunta gerada com preço de
rede conferido na fonte oficial.
