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
