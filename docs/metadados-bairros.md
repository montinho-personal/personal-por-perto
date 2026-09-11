# Meta titles e descriptions — as dez páginas de bairro do piloto

Reescritos em 11/09/2026. Este documento guarda o que foi decidido, por quê, e
como ler o resultado depois — sem o que a comparação de outubro vira memória.

---

## 1. Como o metadado viaja até o Google

`src/layouts/Base.astro` recebe `title` e `description` da página e os repete em
**seis** lugares: `<title>`, `meta[name=description]`, `og:title`,
`og:description`, `twitter:title`, `twitter:description`. Nenhuma marca é
anexada — não existe sufixo "| Personal por Perto".

A consequência prática: editar as duas constantes no topo do `.astro` atualiza
os seis de forma coerente, e qualquer divergência entre eles é defeito, não
escolha. É exatamente isso que `npm run audit:metadados` verifica.

## 1.1. Linha de base por página — 28/06 a 10/09/2026

Números informados pelo Renato, do Search Console. Registrados **antes** da
publicação, que é a única hora em que registrá-los tem valor.

| bairro | URL confirmada | cliques | impr. | CTR | pos. | problema |
|---|---|---|---|---|---|---|
| Tijuca | `/personal-trainer-tijuca/` | 3 | 85 | 3,53% | 8,53 | subiu para ~7,12 nas 34 impressões recentes e parou de converter |
| Barra da Tijuca | `/personal-trainer-barra-da-tijuca/` | 2 | 78 | 2,56% | 8,12 | bem posicionada, pouca atração; 30 impressões recentes sem clique |
| Savassi | `/personal-trainer-savassi/` | 0 | 28 | 0% | 8,79 | sem clique + disputava a intenção do Lourdes |
| Icaraí | `/personal-trainer-icarai/` | 0 | 26 | 0% | 7,38 | maior desperdício de CTR do lote |
| Boa Viagem | `/personal-trainer-boa-viagem/` | 0 | 26 | 0% | 8,92 | primeira página sem proposta competitiva |
| Leblon | `/personal-trainer-leblon/` | 1 | 34 | 2,94% | 13,38 | posição recente ~7,99 sem clique novo |
| Moema | `/personal-trainer-moema/` | 1 | 26 | 3,85% | 8,88 | já converte, falta diferenciação |
| Brooklin | `/personal-trainer-brooklin/` | 0 | 13 | 0% | 9,08 | amostra pequena, posição competitiva |
| Asa Sul | `/personal-trainer-asa-sul/` | 0 | 14 | 0% | 9,43 | boa posição, nenhum clique |
| Gleba Palhano | `/personal-trainer-gleba-palhano/` | 0 | 15 | 0% | 6,87 | melhor posição do lote, nenhum clique |

As dez URLs foram conferidas uma a uma no `dist/` e no sitemap — nenhuma
presumida. Todas existem, todas estão no sitemap, todas com barra final.

**A limitação, dita de frente:** não há exportação consulta × página. Então não
dá para saber qual consulta gerou cada impressão, e nada aqui afirma isso. A
leitura de "intenção principal" por bairro vem do conteúdo da página e da SERP
pesquisada à mão, não de dado de consulta. Enquanto essa exportação não existir,
a atribuição por consulta continua sendo hipótese.

## 2. O diagnóstico do estado anterior

Auditoria das dez páginas antes da mudança:

| defeito | onde |
|---|---|
| mesma fórmula repetida | `tijuca` e `leblon`, ambas "preços e onde treinar" |
| título sem diferencial | `asa-sul` e `gleba-palhano`, ambas terminando em "o guia" |
| superlativo sem critério publicado | `boa-viagem`, "Os melhores lugares para treinar" |
| descrição citando bairro vizinho | `savassi`, herança do caso Savassi × Lourdes |

O que **não** estava quebrado, e vale registrar: zero title duplicado, zero
description duplicada, exatamente um `<title>` e uma meta description por
página. O problema era diferenciação, não higiene.

## 3. O que a SERP mostra — e por que não vamos imitá-la

Quatro sondagens (Tijuca, Icaraí, Savassi, Gleba Palhano) devolveram a mesma
composição: marketplaces (Superprof, Cronoshare, GetNinjas, StarOfService),
agregadores de academia (Wellhub) e sites de profissionais individuais.
**Nenhum guia editorial.**

Todos prometem a mesma coisa: uma lista de profissionais com preço por hora —
"91 profissionais a partir de R$ 92/h", "10 melhores personais trainers".

Nós não podemos prometer isso, e não é por modéstia: **o portal não tem
profissionais cadastrados**, e o atendimento presencial do Montinho acontece
só na Arena 18, em Alphaville. Um snippet que imitasse o marketplace entregaria
um clique decepcionado — que é pior que clique nenhum, porque ensina o Google
que a página não responde à consulta.

A diferenciação que sobra é a que a página de fato entrega: **o briefing de
antes da contratação** — a faixa de preço real da cidade, o lugar concreto onde
aquele bairro treina e o formato que faz sentido ali. Concreto como o
marketplace, sem prometer o que não temos.

## 4. Matriz de decisão

Três alternativas de título e três de descrição por página, com a escolha e o
motivo. Comprimentos medidos em caracteres.

### Tijuca — intenção: preço · diferencial: custo-benefício ante a Zona Sul

| | texto | car. |
|---|---|---|
| Title A ✅ | Personal Trainer na Tijuca: preços e onde o bairro treina | 57 |
| Title B | Personal Trainer na Tijuca (RJ): quanto custa e onde ir | 55 |
| Title C | Personal Trainer na Tijuca: o guia de quem treina na Zona Norte | 63 |
| Desc A ✅ | Personal trainer na Tijuca: a aula de R$ 80 a R$ 200 no Rio, onde o bairro treina — Saens Peña, Maracanã, Floresta da Tijuca — e como escolher bem. | 147 |
| Desc B | Quanto custa um personal na Tijuca, onde as pessoas treinam de fato — praças, Maracanã, Floresta da Tijuca, academia do prédio — e o que olhar antes de fechar. | 159 |
| Desc C | Guia do personal trainer na Tijuca: preço de referência do Rio, os pontos de treino do bairro e os critérios que separam profissional de vendedor de treino. | 156 |

**Escolha A+A.** "onde o bairro treina" quebra a fórmula que a página dividia
com o Leblon. A descrição leva o número: é a página de maior oportunidade do
piloto e o R$ é o único elemento que iguala a concretude do marketplace sem
mentir — a faixa está publicada no corpo, atribuída ao Rio, não ao bairro.
C foi descartada por passar de 60 caracteres.

### Barra da Tijuca — intenção: navegação por situação · diferencial: quatro perfis

| | texto | car. |
|---|---|---|
| Title A ✅ | Personal Trainer na Barra da Tijuca: 4 perfis e preços | 54 |
| Title B | Personal Trainer na Barra da Tijuca: guia por perfil | 52 |
| Title C | Personal Trainer na Barra da Tijuca: qual perfil é o seu? | 57 |
| Desc A ✅ | Personal trainer na Barra da Tijuca por perfil: executivo, família de condomínio, 60+ e quem usa GLP-1 — com a faixa de preço do Rio e onde treinar. | 148 |
| Desc B | Na Barra, a distância define o treino. Guia por perfil — executivo, condomínio-clube, 60+, GLP-1 — com preços do Rio e onde treinar em cada situação. | 149 |
| Desc C | Quatro perfis de quem contrata personal na Barra da Tijuca, o que muda no treino de cada um, a faixa de preço do Rio e como escolher o profissional. | 148 |

**Escolha A+A.** O numeral diz de cara que a página é navegável, o que o "guia
por perfil" anterior deixava vago. A descrição nomeia os quatro perfis porque
são exatamente os quatro H2 da página — quem se reconhece num deles já sabe o
que vai encontrar.

### Savassi — intenção: onde treinar + preço · diferencial: a região mais valorizada de BH

| | texto | car. |
|---|---|---|
| Title A ✅ | Personal Trainer na Savassi: onde se treina e a que preço | 57 |
| Title B | Personal Trainer na Savassi (BH): respostas e preços | 52 |
| Title C | Personal Trainer na Savassi: treino no centro-sul de BH | 55 |
| Desc A | Personal trainer na Savassi: a faixa de preço de BH (R$ 80 a R$ 180 a aula), onde o treino acontece — Praça da Liberdade, studios, academia do prédio — e como escolher. | 168 |
| Desc B ✅ | Onde o treino acontece na Savassi, quanto custa um personal na região mais valorizada de BH, o que funciona ao ar livre e como escolher o profissional. | 151 |
| Desc C | Guia do personal trainer na Savassi: preço de referência de BH, treino em studio, no prédio e na Praça da Liberdade, e os critérios de escolha. | 143 |

**Escolha A+B.** "respostas" não dizia nada a quem não abriu a página. A
descrição A foi descartada por comprimento (168). A B tem uma vantagem extra:
**não cita o Lourdes nem a Praça da Liberdade** — a antiga citava, e a correção
de canibalização de 11/09 tirou o Lourdes do H1 e da description justamente
para a página do Lourdes ser dona da consulta dela. Manter a vizinhança fora do
snippet fecha a correção.

### Icaraí — intenção: onde treinar · diferencial: orla e prédios

| | texto | car. |
|---|---|---|
| Title A ✅ | Personal Trainer em Icaraí: calçadão, prédio e preços | 53 |
| Title B | Personal Trainer em Icaraí (Niterói): guia do bairro | 52 |
| Title C | Personal Trainer em Icaraí: onde Niterói treina de manhã | 56 |
| Desc A ✅ | Personal trainer em Icaraí: a faixa de preço de Niterói, o treino no calçadão da praia, no Campo de São Bento e nas academias dos prédios da orla. | 146 |
| Desc B | Como Icaraí se organiza para treinar — calçadão, Campo de São Bento, academia do prédio —, quanto custa um personal em Niterói e como escolher. | 143 |
| Desc C | Guia do personal trainer em Icaraí: preços de Niterói, os três lugares onde o bairro treina e o que olhar antes de fechar com um profissional. | 142 |

**Escolha A+A.** "guia do bairro" era genérico; os dois lugares no título dizem
em três palavras o que a página cobre. C foi recusada por afirmar "de manhã",
que a página não sustenta.

### Boa Viagem — intenção: onde treinar · diferencial: cinco lugares distintos

| | texto | car. |
|---|---|---|
| Title A ✅ | Personal Trainer em Boa Viagem: 5 lugares para treinar | 54 |
| Title B | Personal Trainer em Boa Viagem (Recife): onde treinar | 53 |
| Title C | Personal Trainer em Boa Viagem: calçadão, parque ou prédio | 58 |
| Desc A ✅ | Cinco lugares para treinar com personal em Boa Viagem — calçadão, Parque Dona Lindu, areia, condomínio e studio — e a aula de R$ 70 a R$ 170 no Recife. | 151 |
| Desc B | Personal trainer em Boa Viagem: onde treinar na orla e no miolo do bairro, a hora certa para a areia e quanto custa a aula no Recife. | 133 |
| Desc C | Guia do personal trainer em Boa Viagem: o calçadão, o Parque Dona Lindu, os condomínios da orla e os studios — com preços do Recife e critérios de escolha. | 155 |

**Escolha A+A.** Sai o superlativo "os melhores lugares" — que prometia um
ranking que a página não faz — e entra o numeral, que promete exatamente o que
existe: cinco seções, uma por lugar. A descrição lista os cinco e fecha com a
faixa mais barata do piloto, que é um diferencial real do Recife.

### Leblon — intenção: preço + dúvida de formato · diferencial: praia funciona ou não

| | texto | car. |
|---|---|---|
| Title A ✅ | Personal Trainer no Leblon: praia, prédio ou academia? | 54 |
| Title B | Personal Trainer no Leblon (RJ): preços e onde treinar | 54 |
| Title C | Personal Trainer no Leblon: quanto custa e onde se treina | 57 |
| Desc A ✅ | Personal trainer no Leblon: quanto custa a aula no Rio, se treinar na praia funciona de verdade e quando a academia do prédio ou o domicílio rendem mais. | 153 |
| Desc B | Treinar na orla, no Penhasco Dois Irmãos, na academia do prédio ou em casa? O comparativo no Leblon, com a faixa de preço do Rio e critérios de escolha. | 152 |
| Desc C | Guia do personal trainer no Leblon: preço de referência do Rio, os lugares onde o bairro treina e como escolher entre tantos profissionais na Zona Sul. | 151 |

**Escolha A+A.** A pergunta é a do H2 mais específico da página ("Treinar na
praia com personal funciona ou é só cenário bonito?") e resolve a colisão de
fórmula com a Tijuca. C foi descartada por colidir com o título da Savassi.

### Moema — intenção: rotina · diferencial: o bairro organizado por horário

| | texto | car. |
|---|---|---|
| Title A ✅ | Personal Trainer em Moema: a rotina de treino do bairro | 55 |
| Title B | Personal Trainer em Moema: 6h50, 12h30 ou 19h30? | 48 |
| Title C | Personal Trainer em Moema: horários, preços e onde ir | 53 |
| Desc A ✅ | O dia de treino em Moema em três horários: 6h50 no Ibirapuera, 12h30 no intervalo do almoço e 19h30 na academia do prédio. Com a faixa de preço de SP. | 150 |
| Desc B | Personal trainer em Moema: como a rotina do bairro se organiza entre Ibirapuera, academias da avenida e treino no prédio — e quanto custa em São Paulo. | 151 |
| Desc C | Guia do personal trainer em Moema: os três horários de treino do bairro, a faixa de preço de São Paulo e o que separa um bom profissional por aqui. | 147 |

**Escolha A+A.** B é o título mais distintivo do lote e foi recusado de
propósito: três horários soltos, sem contexto, confundem quem busca "personal
trainer moema". A curiosidade fica na descrição, onde há espaço para explicar
— e os três horários são literalmente os três H2 da página.

### Brooklin — intenção: qual formato contratar · diferencial: quatro formatos comparados

| | texto | car. |
|---|---|---|
| Title A ✅ | Personal Trainer no Brooklin: 4 formatos comparados | 51 |
| Title B | Personal Trainer no Brooklin: em casa, no prédio ou fora? | 57 |
| Title C | Personal Trainer no Brooklin (SP): formatos e preços | 52 |
| Desc A ✅ | Quatro formatos de personal no Brooklin comparados: a domicílio, academia do prédio, studio na Berrini e parque. Com a faixa de preço de São Paulo. | 147 |
| Desc B | Personal trainer no Brooklin: o bairro das casas e o das torres pedem formatos diferentes. Compare domicílio, prédio, studio e ar livre, com preços de SP. | 154 |
| Desc C | Guia do personal trainer no Brooklin: como escolher entre treino em casa, na academia do prédio, no studio ou ao ar livre — com a faixa de preço paulistana. | 156 |

**Escolha A+A.** "comparados" é a promessa exata da página, que põe os quatro
lado a lado em vez de listar. B foi recusada porque o piloto já tem dois
títulos em pergunta (Leblon e Gleba Palhano) — um terceiro viraria fórmula.

### Asa Sul — intenção: onde treinar + preço · diferencial: a superquadra como academia

| | texto | car. |
|---|---|---|
| Title A ✅ | Personal Trainer na Asa Sul: superquadra, parque e preços | 57 |
| Title B | Personal Trainer na Asa Sul (Brasília): onde treinar | 52 |
| Title C | Personal Trainer na Asa Sul: treinar no projeto de Lucio Costa | 62 |
| Desc A ✅ | Personal trainer na Asa Sul: o treino na superquadra, o Parque da Cidade, o Eixão do Lazer aos domingos e a aula de R$ 90 a R$ 220 em Brasília. | 143 |
| Desc B | Como a Asa Sul treina: superquadra, Parque da Cidade e Eixão do Lazer, com o calendário do cerrado, a faixa de preço de Brasília e critérios de escolha. | 152 |
| Desc C | Guia do personal trainer na Asa Sul: onde treinar nas superquadras e nos parques, como a seca organiza o ano e quanto custa a aula em Brasília. | 143 |

**Escolha A+A.** Sai "o guia", que não diferenciava nada, e entra a palavra que
só existe em Brasília. C passa de 60 caracteres e apostava numa referência
arquitetônica que nem todo morador usa ao buscar.

### Gleba Palhano — intenção: onde treinar · diferencial: academia da torre × Lago Igapó

| | texto | car. |
|---|---|---|
| Title A ✅ | Personal Trainer na Gleba Palhano: torre ou Lago Igapó? | 55 |
| Title B | Personal Trainer na Gleba Palhano (Londrina): o guia | 52 |
| Title C | Personal Trainer na Gleba Palhano: onde treinar e preços | 56 |
| Desc A ✅ | Personal trainer na Gleba Palhano: a academia da torre ou o Lago Igapó, o clima de Londrina no plano e a aula de R$ 70 a R$ 160 na cidade. | 138 |
| Desc B | Na Gleba Palhano a academia vem com o apartamento — e o Lago Igapó fica ao lado. Quando cada um rende mais, com a faixa de preço de Londrina. | 141 |
| Desc C | Guia do personal trainer na Gleba Palhano: as torres com academia, o Lago Igapó, o clima de Londrina e quanto custa a aula no bairro mais valorizado. | 149 |

**Escolha A+A.** A pergunta é a decisão real de quem mora lá — a academia já
vem com o apartamento, então o dilema é sair ou não sair do prédio. C repete
"mais valorizado", superlativo que a página sustenta no corpo mas que no
snippet ocupa espaço sem informar.

## 5. Antes × depois

| bairro | title antes → depois | car. | desc. car. |
|---|---|---|---|
| Tijuca | (RJ): preços e onde treinar → preços e onde o bairro treina | 54 → 57 | 137 → 147 |
| Barra da Tijuca | guia por perfil → 4 perfis e preços | 52 → 54 | 145 → 148 |
| Savassi | (BH): respostas e preços → onde se treina e a que preço | 52 → 57 | 155 → 151 |
| Icaraí | (Niterói): guia do bairro → calçadão, prédio e preços | 52 → 53 | 138 → 146 |
| Boa Viagem | (Recife): onde treinar → 5 lugares para treinar | 53 → 54 | 141 → 151 |
| Leblon | (RJ): preços e onde treinar → praia, prédio ou academia? | 54 → 54 | 143 → 153 |
| Moema | rotina, preços e onde treinar → a rotina de treino do bairro | 56 → 55 | 148 → 150 |
| Brooklin | (SP): formatos e preços → 4 formatos comparados | 52 → 51 | 132 → 147 |
| Asa Sul | (Brasília): o guia → superquadra, parque e preços | 46 → 57 | 150 → 143 |
| Gleba Palhano | (Londrina): o guia → torre ou Lago Igapó? | 52 → 55 | 139 → 138 |

Todos os dez títulos entre 51 e 57 caracteres, todas as descrições entre 138 e
153. Zero duplicatas entre si e com o resto do site.

### Largura real, medida no navegador

Caractere não é a unidade de corte da SERP — pixel é. As vinte frases foram
medidas no Chromium com `canvas.measureText`, em Arial 20px (título) e 14px
(descrição), que é o que o Google serve no desktop:

| bairro | title px | descrição px |
|---|---|---|
| Tijuca | 500 | 946 |
| Barra da Tijuca | 474 | 929 |
| Savassi | 516 | 955 |
| Icaraí | 476 | 918 |
| Boa Viagem | 496 | 990 |
| Leblon | 494 | 970 |
| Moema | 498 | 973 |
| Brooklin | 474 | 939 |
| Asa Sul | 528 | 916 |
| Gleba Palhano | 510 | 883 |

Os dez títulos cabem com folga na linha de ~600px do desktop — o mais largo,
Asa Sul, usa 528px. As descrições vão de 883px a 990px, contra um orçamento de
trabalho de ~990px para duas linhas. **Boa Viagem está exatamente no limite**:
se o Google prefixar a data, é a primeira a perder as últimas palavras — e como
a frase termina em "no Recife", o que se perde é a localidade, não o miolo.
Fica anotada como a única a revisar se a medição de outubro mostrar truncamento.

A medição também serviu para calibrar o estimador da auditoria: a tabela crua
superestimava 4,2% em média, e o fator de correção derrubou o erro para menos
de 1% contra o navegador.

### O que cada snippet promete, e onde a página entrega

Cada afirmação foi conferida contra o HTML antes de entrar:

| bairro | afirmação do snippet | onde está na página |
|---|---|---|
| Tijuca | R$ 80 a R$ 200; Saens Peña, Maracanã, Floresta | corpo (2 ocorrências da faixa), 2+6+3 menções aos lugares |
| Barra | os quatro perfis | são os H2 "Perfil 1" a "Perfil 4" |
| Savassi | região mais valorizada de BH; ao ar livre | H2 de preço e H2 "Onde treinar ao ar livre por ali?" |
| Icaraí | calçadão, Campo de São Bento, prédios | H2 de locais; 4 menções ao Campo de São Bento |
| Boa Viagem | cinco lugares; R$ 70 a R$ 170 | são os cinco H2 numerados; faixa no H2 de preço |
| Leblon | praia funciona de verdade | H2 "funciona ou é só cenário bonito?" |
| Moema | 6h50, 12h30, 19h30 | são três H2 literais |
| Brooklin | quatro formatos; Berrini | H2 "Formato 1" a "Formato 4"; 7 menções à Berrini |
| Asa Sul | superquadra, Parque da Cidade, Eixão; R$ 90 a R$ 220 | três H2 + H2 de preço |
| Gleba Palhano | torre, Lago Igapó, clima; R$ 70 a R$ 160 | quatro H2 + H2 de preço |

Nenhum snippet promete profissionais cadastrados, ranking de melhores ou
atendimento presencial do Montinho fora de Alphaville.

## 6. A auditoria automática

`npm run audit:metadados` (`--piloto`, `--tabela`) roda sobre o `dist/` e falha
com código 1 em: `<title>` ou meta description ausente ou repetida na mesma
página, `og:`/`twitter:` divergindo do par canônico, título ou descrição
duplicados entre páginas, canonical ausente ou divergente da própria URL,
página com `noindex`, página de bairro cujo título não contém o nome do bairro,
frase proibida, emoji, lixo de template e comprimento fora de 25–70 / 100–175.
Avisa, sem falhar, quando o comprimento sai da faixa editorial (45–60 /
135–160), quando a largura estimada passa de 600px / 990px, quando há
superlativo a conferir, caixa alta ou palavra repetida três vezes ou mais.

As frases proibidas estão codificadas com o motivo de cada uma — presencial
fora de Alphaville, profissionais cadastrados, "os melhores personais" sem
metodologia, promessa de cura ou de resultado, falsa urgência, clickbait,
CREF/CONFEF. A regra comercial passa a ser verificada por máquina.

### O que a primeira varredura completa encontrou

1.291 páginas auditadas. As dez do piloto passam **sem um aviso sequer**.

No resto do site: **zero** título duplicado, **zero** descrição duplicada,
**zero** divergência entre as seis tags, **zero** canonical ausente ou
divergente, **zero** página com `noindex`, **zero** bairro ausente do próprio
título (nas 101 páginas de bairro), **zero** frase proibida, **zero** lixo de
template. Os 321 defeitos são todos de comprimento — 153 títulos e 168
descrições longos demais —, e 234 deles estão em páginas de cidade, onde o
template estoura com nomes compridos ("São Sebastião do Paraíso", "São Miguel
dos Milagres"). É um defeito de gabarito, não de redação: corrige-se no
template, de uma vez, sem tocar `atualizadoEm` — e fica na fila como tarefa
própria.

Até lá, a varredura completa termina em código 1 por desenho. Quem quiser o
portão verde do piloto roda `npm run audit:metadados -- --piloto`.

## 7. Como medir — e o que não concluir

A implementação muda o código hoje. O Google ainda precisa rastrear as dez
páginas de novo, pode reescrever o snippet por conta própria (acontece em boa
parte das consultas) e precisa acumular impressões suficientes para a
comparação valer. **Nada do que está aqui autoriza dizer que o CTR melhorou.**

### 25/09/2026 — 14 dias

Leitura de rastreio, não de desempenho. Conferir no Search Console se as dez
páginas foram recrawleadas depois de 11/09 e se o snippet exibido na SERP é o
nosso ou uma reescrita do Google. Sem isso, qualquer número de CTR mede uma
frase que talvez nem esteja no ar.

### 09/10/2026 — 28 dias

Aí sim a comparação. Para cada uma das dez, tirar do Search Console:
impressões, cliques, CTR e **posição por consulta** — nunca posição média por
página, que já provou enganar (`docs/cidades-analise.md`, seção 5.1).

A leitura correta é **CTR a posição constante**. Se a posição não se moveu e o
CTR subiu, o snippet fez o trabalho. Se a posição subiu junto, o CTR sobe por
tabela e não prova nada sobre o texto.

### O confundidor, dito na cara

Estas dez páginas são exatamente as dez do piloto de arquitetura de links, que
entrou no mesmo dia. Duas mudanças, um período — o problema de atribuição que
o próprio CLAUDE.md manda evitar.

Foi aceito de propósito, e o que torna a leitura possível é que as duas
mudanças movem métricas diferentes:

| mudança | move primeiro |
|---|---|
| arquitetura de links | cobertura e impressões (descoberta, rastreio, posição) |
| title e description | CTR à posição dada |

Então: **impressões subindo** é crédito da arquitetura; **CTR subindo com
posição parada** é crédito do snippet. E os 91 bairros fora do piloto seguem
como grupo de controle — não receberam nem uma coisa nem outra.

### O mini-teste dentro do piloto

Quatro descrições levam o preço em números (Tijuca, Boa Viagem, Asa Sul, Gleba
Palhano) e seis levam "a faixa de preço de X". Não foi acaso: é a pergunta que
dá para responder com dez páginas. Em 09/10, comparar o CTR médio dos dois
grupos. Com quatro contra seis páginas o resultado não será estatisticamente
robusto — mas se a diferença for grande e na mesma direção nas quatro, vira
hipótese boa o bastante para valer a expansão aos outros 91 bairros.

### A ressalva final

Se em 09/10 o CTR não se mexer, a conclusão honesta não é "o texto não presta".
As três explicações concorrentes, em ordem de probabilidade: o Google reescreveu
o snippet, o volume de impressões é pequeno demais para a diferença aparecer, ou
a mudança é real mas menor que o ruído. Só a primeira é verificável — e é por
isso que a leitura de 25/09 vem antes.
