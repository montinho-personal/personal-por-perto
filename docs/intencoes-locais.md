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
