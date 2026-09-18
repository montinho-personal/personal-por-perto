# Pauta editorial — o que ainda não existe

Lista fechada em 02/09/2026, conferida contra os 146 arquivos de artigo
publicados: nenhum slug abaixo colide com página existente.

**Produção em blocos de 2**, bem feitos, na ordem desta lista. Marcar `✅`
com a data quando publicar.

---

## ▶ PARADA DOS 20 — LIBERADA em 13/09/2026 pelo Renato

A fila volta a produzir **dois por dia**, com uma regra nova que saiu da
própria medição (ver "o padrão que ninguém tinha previsto", mais abaixo):

> **Nunca publicar uma leva grande no mesmo dia e na mesma seção.** Dois por
> dia, espalhados. A leva de seis de 02/09 é a única cujos artigos seguem sem
> rastreamento.

O que sustentou a liberação: **zero artigos recusados pelo Google**, 14 dos 20
indexados em poucos dias e a fila de descoberta encolhendo de 421 para 48
URLs. O risco que a parada protegia — publicar volume que o Google olha e
recusa — não se materializou.

O que **não** foi respondido, e segue em aberto: impressões e posição. O mais
velho dos 20 tem 11 dias e nenhum passou de ~2 impressões, o que é normal
nessa idade e não é informação. **Reler em meados de outubro.**

### O histórico da parada, para quem vier depois

Os 20 saíram entre 02/09 e 11/09. O export de Desempenho de 12/09
(`docs/relatorios/2026-09-12-gsc-desempenho/`) foi lido para decidir se a
fila continua. **A decisão é continuar parado, e o motivo não é mau
resultado — é que ainda não existe resultado para ler.**

### O que o export mostrou

Nenhum dos 20 artigos aparece na aba Páginas. E aqui está a parte que
importa mais que o número: **isso não quer dizer zero impressão.** A aba tem
exatamente 1.000 linhas, que é o teto do export, e a última linha listada tem
2 impressões. Só 7 páginas com 1 impressão entraram. Ou seja, o que se pode
afirmar é que nenhum dos 20 passou de cerca de 2 impressões — não que nenhum
teve impressão alguma.

Com 1 a 10 dias de publicado, isso não é sinal de nada. Artigo novo em site
de autoridade média costuma levar semanas para começar a aparecer, e o
relatório de cobertura de 11/09 mostra 48 páginas em "detectada, mas não
indexada" — fila de rastreio em que páginas novas naturalmente esperam.

### Por que a parada continua

A pergunta que a parada existe para responder é se os 20 estão sendo
indexados, recebendo impressão e ganhando posição, ou nascendo mortos. **O
relatório não respondeu nem uma coisa nem outra.** Liberar a fila agora seria
publicar mais 20 sem nunca ter lido o sinal dos primeiros 20 — o que
esvaziaria o propósito da parada em vez de cumpri-lo.

Publicar rápido é seguro; publicar rápido sem saber se o que já saiu vale
alguma coisa é o que a política de *scaled content abuse* mira, e é o único
risco real desta fila.

### 13/09/2026 — o drilldown respondeu metade da pergunta, e a metade boa

Os dois drilldowns de cobertura do portal (arquivados em
`docs/relatorios/2026-09-13-gsc-coverage-drilldown/`) permitiram localizar cada
um dos 20 artigos. O resultado:

| situação | quantos |
|---|---|
| Não aparecem em nenhum dos dois motivos — ou seja, **indexados** | **14** |
| "Detectada, mas não indexada" — nunca rastreada | 6 |
| "Rastreada, mas não indexada" — o Google olhou e recusou | **0** |

**Nenhum artigo foi recusado.** Essa é a informação que a parada existia para
obter: os 20 não estão nascendo mortos. Catorze já estão no índice com 2 a 11
dias de publicados, e os seis restantes estão na fila de descoberta, que
encolheu de 421 para 48 URLs no período — o Google está drenando.

**Ressalva de método:** os catorze "indexados" são inferência, não leitura
direta. Existem cinco motivos de não indexação e temos o drilldown de dois. Os
outros três — alternativa com canônica, cópia e redirecionamento — atingem
sobretudo URL sem barra e páginas de cidade, não artigo novo com canonical
próprio. É uma inferência forte, mas é inferência.

### O padrão que ninguém tinha previsto

Os seis não rastreados **são exatamente os seis publicados no mesmo dia**, em
02/09, todos no bloco Mounjaro. O sétimo artigo do mesmo bloco, publicado
sozinho em 04/09, está indexado. E os onze de musculação, publicados a dois
por dia, estão todos indexados.

| leva | publicados | indexados |
|---|---|---|
| 02/09 — seis de uma vez, mesma seção | 6 | **0** |
| 04/09 em diante — dois por dia | 14 | **14** |

A hipótese óbvia era link interno, e **ela está errada**: os seis não
rastreados têm em média 3,5 links de entrada (de 1 a 6), contra 2 dos
indexados. `nausea-e-treino` tem um único link e não foi rastreado;
`mounjaro-e-idosos` tem um único link e está indexado. Não é topologia.

O que sobra como hipótese é o **ritmo de publicação**: seis URLs novas
aparecendo no mesmo dia, na mesma seção, contra duas por dia distribuídas.
É exatamente o que a regra de ritmo do CLAUDE.md prevê por outros motivos —
atribuição e raio de erro —, e aqui apareceu um terceiro: a fila de rastreio
parece tratar melhor quem chega espaçado.

**Isso é hipótese, não conclusão.** Uma amostra de uma leva contra sete não
prova nada, e as explicações concorrentes são banais: a seção Mounjaro é mais
nova, ou a fila é simplesmente arbitrária. O que dá para fazer é registrar e
conferir: se os seis forem rastreados nas próximas semanas sem nada mudar, a
hipótese cai e a resposta era só tempo.

### O que libera

Um export de Desempenho por volta de **09 a 15/10**, quando o mais novo dos
20 tiver ~30 dias. Três perguntas, nesta ordem:

1. **Quantos dos 20 aparecem na exportação?** É a medida de descoberta, e a
   primeira a olhar. Se a maioria aparecer, a fila retoma.
2. **Em que posição?** Posição ruim com impressão é melhor que impressão
   nenhuma — significa que o Google entendeu o assunto e a página está na
   disputa.
3. **Os sete de Mounjaro se saem diferente dos onze de execução?** São dois
   blocos com naturezas distintas, e se um funcionar e o outro não, a
   correção de rumo é sobre qual bloco continuar, não sobre parar tudo.

Um drilldown de Cobertura ajudaria a antecipar a resposta 1, porque diria
quais URLs estão em "detectada, mas não indexada" — o export de cobertura
simples só traz contagens.

## Como esta lista foi montada

Cruzando o export de Consultas do Search Console (`docs/relatorios/`) com o
catálogo publicado. O achado que orientou a ordem: **quase nenhuma consulta
com demanda ficou sem artigo** — o problema do portal é posição, não
ausência. Por isso a fila começa por Mounjaro, o único cluster com
autoridade já reconhecida (posição média 9,2) e cobertura fina (6 artigos,
contra 89 de musculação).

**Concorrente desta pauta:** 15 artigos publicados têm demanda e estão
além da página 2. O maior deles, `/guias/quanto-custa-personal-trainer`,
tem 633 impressões na posição 26,7 — sozinho, mais demanda represada do que
qualquer bloco abaixo. Reescrevê-lo compete com criar coisa nova, e vence
em retorno por hora.

---

## Bloco Mounjaro e GLP-1 — 9 artigos

Todos com ressalva de médico, sem promessa de resultado (regra do CLAUDE.md).

| # | Artigo | slug | status |
|---|---|---|---|
| 1 | Quanto tempo dura a fraqueza do Mounjaro | `quanto-tempo-dura-a-fraqueza` | ✅ 2026-09-02 |
| 2 | Mounjaro e perda de força: o que muda no treino | `perda-de-forca-no-mounjaro` | ✅ 2026-09-02 |
| 3 | Fraqueza nas pernas com Mounjaro | `fraqueza-nas-pernas` | ✅ 2026-09-02 |
| 4 | Parei o Mounjaro: manter peso e massa | `parei-o-mounjaro` | ✅ 2026-09-02 |
| 5 | Cãibras em quem usa Mounjaro | `caibras-e-hidratacao` | ✅ 2026-09-02 |
| — | ~~Ozempic ou Mounjaro para quem treina~~ | — | ❌ cancelado (ver nota) |
| — | ~~Como ajustar a carga durante o GLP-1~~ | — | ❌ cancelado 04/09 (ver nota) |
| 6 | Náusea e treino: como organizar a semana | `nausea-e-treino` | ✅ 2026-09-02 |
| 7 | Mounjaro e treino depois dos 60 | `mounjaro-e-idosos` | ✅ 2026-09-04 |

### Nota de 02/09/2026 — dois cancelamentos por redundância

**`ozempic-ou-mounjaro-para-quem-treina` foi cancelado.** O artigo
`/mounjaro-e-treino/ozempic-e-treino/` já traz um H2 chamado exatamente
"Ozempic e Mounjaro: o que muda para quem treina", e a resposta honesta
cabe em dois parágrafos: os medicamentos agem em vias diferentes, a escolha
é médica, e **a estratégia de treino não muda entre um e outro**. Esticar
isso em um artigo inteiro seria encher linguiça e canibalizar uma página que
já responde. Quando a verdade é curta, publicá-la curta é a decisão certa.

**`ajustar-carga-no-glp1` foi cancelado em 04/09**, pelo mesmo motivo. A
suspeita foi verificada: `perda-de-forca-no-mounjaro` tem um H2 chamado
"Reduza a carga, preserve o esforço" e trata de carga em 18 passagens —
reduzir o peso mantendo a proximidade da falha, cortar volume antes de
intensidade, registrar as cargas. É exatamente o conteúdo que este artigo
teria. Escrevê-lo seria disputar a própria página no Google.

## Bloco Musculação — execução (12)

| Artigo | slug | status |
|---|---|---|
| Voador (peck deck): como fazer | `voador-como-fazer` | ✅ 2026-09-04 · recorte declarado |
| Rosca Scott: como fazer | `rosca-scott-como-fazer` | ✅ 2026-09-06 |
| Cadeira flexora: como fazer | `cadeira-flexora-como-fazer` | ✅ 2026-09-06 · recorte declarado |
| Agachamento hack: como fazer | `agachamento-hack-como-fazer` | ✅ 2026-09-07 |
| Supino declinado: como fazer | `supino-declinado-como-fazer` | ✅ 2026-09-07 · recorte declarado |
| Tríceps francês: como fazer | `triceps-frances-como-fazer` | ✅ 2026-09-08 · recorte declarado |
| Rosca inversa: como fazer | `rosca-inversa-como-fazer` | ✅ 2026-09-08 |
| Desenvolvimento Arnold: como fazer | `desenvolvimento-arnold-como-fazer` | ✅ 2026-09-09 · recorte declarado |
| Elevação de pernas (infra): como fazer | `elevacao-de-pernas-como-fazer` | ✅ 2026-09-09 |
| Panturrilha em pé: como fazer | `panturrilha-em-pe-como-fazer` | ❌ 2026-09-10 · cancelado · ver nota |
| Agachamento no Smith: como fazer | `agachamento-smith-como-fazer` | ✅ 2026-09-10 · recorte declarado |
| Coice de glúteo na polia: como fazer | `coice-de-gluteo-como-fazer` | ✅ 2026-09-10 · recorte declarado |

### Nota de 10/09/2026 — o quarto cancelamento, e por que este é diferente

**`panturrilha-em-pe-como-fazer` foi cancelado.** É o primeiro caso em que
a checagem de redundância derrubou um artigo que parecia igual aos quatro
recortes já aprovados — e a diferença vale registrar, porque é ela que
separa recorte de duplicata.

Nos precedentes (voador, cadeira flexora, supino declinado, Arnold) o
artigo-pai trazia **posicionamento**: dizia qual variação escolher e por
quê, sem ensinar a executá-la. Aqui não. `treino-de-panturrilha` tem um H2
chamado "A execução, ponto a ponto" com quatro parágrafos — descer até o
calcanhar passar da linha do degrau com pausa, subir até a extensão total,
manter o joelho estável, usar carga que permita tudo isso. Isso É a execução
da panturrilha em pé, escrita para ela.

O que sobraria de próprio ao filho — implementos e posição do pé — não
chega a um artigo. Escrevê-lo seria repetir o pai com outras palavras e
disputar a mesma consulta. Quando a verdade é curta, publicá-la curta é a
decisão certa.

**`agachamento-smith-como-fazer` entrou pelo motivo oposto.**
`agachamento-como-fazer` tem UMA FAQ posicionando o Smith ("livre ou
Smith?") e a seção de variações nem o menciona — lista goblet, frontal,
búlgaro, hack e leg press. Posicionamento puro, zero execução.

E o filho tem um ângulo que nenhum outro agachamento tem: **como a barra
desce em linha reta e não acompanha o tronco, é a posição dos pés que
define o exercício**. Pé sob o quadril, como no livre, empurra o joelho
para a frente — é daí que vem a maior parte das queixas de joelho no
aparelho, e não do aparelho. O artigo se organiza em torno dessa variável:
três posições de pé, três exercícios diferentes, com o teste prático
(calcanhar no chão e costas encostadas na barra) que resolve o ajuste sem
depender de espelho. Link do pai para o filho adicionado na seção de
variações, com a data de revisão do pai atualizada.

**`coice-de-gluteo-como-fazer` é o mesmo padrão de recorte.**
`treino-de-gluteos` cita "coice no cabo" em uma frase, como acessório —
posicionamento. O ângulo próprio do filho é uma correção de percepção: **a
amplitude que se vê não é a que se treina**. A extensão de quadril útil
além da neutra é curta, e a altura extra que a perna alcança vem da lombar
arqueando. O artigo se organiza como diagnóstico — dois testes (a mão nas
costas, o perfil no espelho) antes da execução —, o que é uma forma
diferente das usadas até aqui no bloco. Link do pai para o filho
adicionado, com a data do pai atualizada.

**Sobre a forma.** O Smith é organizado por uma variável de decisão (onde
ficam os pés), o coice por um autoteste. Nenhum dos dois usa o
base/subida/topo/descida padrão nem repete a linha do tempo do Arnold ou a
tabela de degraus da elevação de pernas.

### Nota de 09/09/2026 — o quarto recorte, e uma variação de forma deliberada

`desenvolvimento-arnold-como-fazer` é o quarto caso do padrão
pai-diz-qual-variação / filho-diz-como-executar, depois de voador,
cadeira flexora e supino declinado. A checagem: a palavra "Arnold" não
aparecia em nenhum arquivo do acervo, e `desenvolvimento-como-fazer` tem
H2 de sentado/em pé, barra/halteres e atrás da nuca — nenhum deles cobre
a rotação. Link do pai para o filho adicionado no parágrafo dos halteres,
com a data de revisão do pai atualizada.

O ângulo próprio do filho é o único que a variação tem: **a rotação é o
exercício inteiro**, e praticamente todo erro do Arnold é de *quando*
girar, não de *como*. Girar tudo no início devolve um desenvolvimento
comum com floreio; girar no topo, com o braço estendido e a carga acima
da cabeça, é a versão por trás das queixas de que "o Arnold machuca". O
artigo também diz o que a fama do exercício não diz: o deltoide anterior
é a porção que menos precisa de trabalho direto, então ele raramente é a
primeira escolha quando o tempo é curto.

`elevacao-de-pernas-como-fazer` não precisou de recorte no sentido
habitual — `treino-de-abdomen` e `treino-de-abdomen-avancado` citam o
exercício em listas, nunca em execução. Mas ganhou um ângulo que corrige
o próprio termo de busca: **o "infra" não existe**. O reto abdominal é um
músculo só, e o que a elevação de pernas de fato treina é flexão de
quadril (psoas) somada a anti-extensão lombar isométrica. Isso não é
curiosidade anatômica: é o que explica por que a lombar arqueia, e por
que a regra da série é "encerre na última repetição em que a lombar ficou
onde deveria".

**Sobre a forma, que é o ponto que a rotina manda vigiar.** Os dois
saíram com esqueletos diferentes de propósito, e diferentes dos seis
"como fazer" anteriores do bloco. O Arnold é organizado como linha do
tempo do movimento (três trechos, com a rotação inteira dentro do
primeiro) mais uma seção de "os dois jeitos errados de girar" — não o
base/subida/topo/descida padrão. A elevação de pernas abre por correção
de mito, e sua seção central é uma **tabela de quatro degraus de
progressão** com o critério de quando subir de cada um, em vez de lista
de erros. Se o próximo par sair com o esqueleto de um destes, é sinal de
reescrever um.

### Nota de 04/09/2026 — o recorte do voador

`voador-como-fazer` quase foi cancelado: `crucifixo-como-fazer` se chama
"reto, inclinado **e máquina**" e cita o peck deck quatro vezes. Mas a
cobertura de lá é UM parágrafo de posicionamento — diz o que é e quando
usar, não como executar. Não é um "como fazer".

Recorte adotado, e ele vale de precedente para os outros exercícios de
máquina da fila: **o artigo-pai diz qual variação usar; o filho diz como
executar aquela.** O voador ganhou o ângulo que só a máquina tem — ela é a
única variação de peito que se REGULA antes de executar, e o ajuste do
assento decide qual músculo trabalha.

Para a disputa pelo termo não ficar em aberto, o crucifixo passou a linkar
para o voador no parágrafo do peck deck. A hierarquia fica explícita para o
leitor e para o Google, em vez de duas páginas competindo em silêncio.

### Nota de 06/09/2026 — o recorte da cadeira flexora, e uma correção

`cadeira-flexora-como-fazer` repetiu o caso do voador. `mesa-flexora-como-fazer`
tem um H2 chamado "Mesa ou cadeira flexora?" que já diz qual das duas escolher
— e afirma que a sentada tem pequena vantagem. Mas isso é posicionamento, não
execução: a cadeira tem três regulagens próprias e um erro específico (o
quadril que sai do banco e desfaz justamente a vantagem do alongamento) que
não cabiam no parágrafo do pai. Mesmo recorte, mesmo link do pai para o
filho.

`rosca-scott-como-fazer` não precisou de recorte — o acervo tem quatro roscas
e nenhuma cobre a Scott. Mas a checagem encontrou outra coisa: `treino-de-bracos`
dizia que o braço à frente do corpo "enfatiza a porção curta e o pico de
contração". A primeira metade está certa; a segunda não, porque no banco Scott
a resistência cai justamente no topo — o trecho pesado é o de baixo. A frase
foi corrigida no mesmo commit, e as duas páginas-pai tiveram `atualizadoEm`
atualizado, porque link novo e correção factual são revisão de conteúdo.

### Nota de 07/09/2026 — o terceiro recorte, e uma correção de rumo na forma

`supino-declinado-como-fazer` repetiu o padrão do voador e da cadeira
flexora. `supino-como-fazer` já tinha um parágrafo de variação e uma FAQ
comparando os três ângulos — posicionamento, não execução. O que não cabia no
pai é o que o filho tem de próprio: o declinado é o único supino em que
**entrar e sair do banco** exige método, com a barra passando sobre o rosto e
a cabeça abaixo do coração. Link do pai para o filho adicionado, e a data de
revisão do pai atualizada.

`agachamento-hack-como-fazer` não precisou de recorte: "hack" não aparecia
**uma única vez** em todo o acervo, apesar de existirem guias de agachamento
livre, búlgaro e leg press.

**Correção de forma, que vale de regra daqui em diante.** Os dois artigos de
06/09 saíram com esqueleto idêntico — duas aberturas, "o que treina",
tabela, "execução passo a passo", "os erros", callout "Resumindo", cinco
FAQs. Repetido por cinquenta artigos, isso vira padrão detectável, que é
exatamente o critério da política de *scaled content abuse*, além de
entediante de ler.

Os de hoje foram escritos de propósito em formas diferentes: o hack é
comparativo, com a tabela dos três exercícios de perna logo no início e sem
callout de fechamento; o declinado abre com o veredito em uma frase ("bom
terceiro ângulo, péssimo primeiro"), tem a logística de entrar e sair como
seção-espinha, quatro FAQs em vez de cinco e termina em "quando pular" em vez
de resumo. **O assunto decide a forma** — se os dois artigos do dia saírem
com o mesmo esqueleto, um deles está errado.

### Nota de 08/09/2026 — o quarto recorte, e um pré-requisito que virou seção

`triceps-frances-como-fazer` era o caso de redundância mais perigoso da fila
até agora, porque muita gente usa os dois nomes como sinônimo.
`triceps-testa-como-fazer` tem uma FAQ chamada exatamente "Qual a diferença
entre tríceps testa e tríceps francês?" e cita a francesa em três passagens do
corpo. Mas as três são posicionamento — dizem qual escolher, não como
executar. Quarto caso do mesmo recorte (voador, cadeira flexora, supino
declinado), com o link do pai para o filho no parágrafo em que os dois
aparecem juntos.

O ângulo próprio do filho apareceu na pesquisa e não estava em lugar nenhum do
acervo: **o francês tem um pré-requisito de mobilidade que nenhum outro
exercício de tríceps tem.** Quem não consegue levar o braço reto acima da
cabeça sem arquear a lombar não deveria fazê-lo hoje — e o texto traz o teste
de dez segundos que revela isso, com a saída (pulley e testa enquanto a
mobilidade melhora) em vez de só o alerta.

`rosca-inversa-como-fazer` não precisou de recorte: o acervo tem cinco roscas
e nenhuma cobre a inversa. Ela aparecia em um parágrafo de `pegada-e-antebraco`
e numa linha da `rosca-direta`, sempre como menção. O pai ganhou o link.

**Forma variada, seguindo a regra de ontem.** O francês abre com a troca em
uma frase (mais alongamento, menos carga, e um pré-requisito), tem o teste de
mobilidade como seção-espinha e nenhuma tabela. A inversa abre com o
constrangimento real de quem faz pela primeira vez — o peso que não sai do
lugar — e usa uma lista numerada de sinais de carga excessiva em vez de uma
seção de "erros", com quatro FAQs em vez de cinco. Nenhum dos dois tem callout
de fechamento.

## Bloco Musculação — estrutura e método (14)

| Artigo | slug | status |
|---|---|---|
| Treino push pull legs | `treino-push-pull-legs` | ✅ 2026-09-11 · recorte declarado |
| Leg press 45 ou horizontal | `leg-press-45-ou-horizontal` | ✅ 2026-09-11 · recorte declarado |
| Treino de antebraço | `treino-de-antebraco` | ❌ 2026-09-13 · cancelado · ver nota |
| Amplitude de movimento | `amplitude-de-movimento` | ✅ 2026-09-13 · recorte declarado |
| Cadência do movimento | `cadencia-do-movimento` | ✅ 2026-09-13 |
| Respiração no treino | `respiracao-no-treino` | ✅ 2026-09-14 · recorte declarado |
| Cinto, luva e strap: quando usar | `cinto-e-luva-de-treino` | ✅ 2026-09-14 · recorte declarado |
| Academia lotada: como treinar | `academia-lotada-como-treinar` | |
| Treinar duas vezes por dia | `treinar-duas-vezes-por-dia` | |
| Musculação na gravidez | `musculacao-na-gravidez` | |
| Treino full body: como montar | `treino-full-body-como-montar` | ⚠️ |
| Drop set: quando usar | `series-drop-set` | ⚠️ |
| Treinar em jejum | `treino-em-jejum` | ⚠️ |
| Puxada supinada: como fazer | `puxada-supinada-como-fazer` | ⚠️ |

### Nota de 11/09/2026 — os dois recortes que fecham a parada dos 20

**`treino-push-pull-legs`.** Checagem primeiro: `abc-ou-full-body` tem
**zero** ocorrência de "push", "pull" ou "legs" no texto inteiro, e
`treino-abc-como-montar` trata só do ABC. A divisão por função nunca foi
coberta pelo portal — a única menção em todo o site estava na página da
ferramenta de auditoria.

O ângulo próprio é uma conta que os guias de PPL quase nunca fazem: **push
pull legs é um ciclo de três dias, e o que importa não é quantos dias você
treina, é quantas vezes o ciclo fecha.** Em três dias ele fecha uma vez, o
que dá frequência de 1× por semana por grupo — exatamente o que um ABC de
três dias entrega, sem nenhuma vantagem. A divisão só mostra o que tem de
melhor em seis dias, quando o ciclo roda duas voltas. O artigo se organiza
em torno dessa aritmética, com as duas semanas em tabela e uma seção sobre
o desconforto de quatro ou cinco dias, em que o ciclo de três não fecha
dentro da semana e o dia de perna migra pelo calendário.

Recorte: o pai (`abc-ou-full-body`) compara duas divisões e agora **linka**
para a terceira, com a ressalva de que abaixo de seis dias ela não compete
com o ABC. Data de revisão do pai atualizada.

**`leg-press-45-ou-horizontal`.** Aqui a checagem foi mais delicada, e vale
registrar o que quase derrubou o artigo. `leg-press-como-fazer` existe e é
bom — mas menciona "45°" **uma única vez em todo o arquivo, no texto
alternativo da capa**. O corpo nunca distingue as duas máquinas.

A sobreposição real é uma FAQ do pai: "Por que consigo tanto peso no leg
press?", que em quatro frases diz que o ângulo do trenó desconta parte da
gravidade. É posicionamento sobre o 45° isolado — e não menciona a máquina
horizontal em nenhum momento, que é justamente a comparação que a consulta
pede. O filho desdobra a física (a componente do peso na rampa, o atrito,
o peso do carrinho, a relação de alavanca do horizontal) e acrescenta duas
coisas que o pai não tem: **onde a pelve começa a girar aparece mais cedo
no 45°**, porque o tronco está fixo e toda a carga chega pelo quadril; e a
diferença de entrar e sair da máquina, que decide se o exercício vai ser
feito toda semana por quem tem dificuldade de se erguer de um assento fundo.

Recorte: pai ensina execução (igual nas duas máquinas), filho responde qual
aparelho. Link do pai para o filho adicionado na seção da posição dos pés,
com a data de revisão do pai atualizada.

**Variação de estrutura, que é o ponto mais fácil de esquecer.** Os dois
saíram com esqueletos diferentes de propósito: o PPL abre com a resposta
condicional, constrói a aritmética de frequência, mostra o calendário em
tabela e fecha com uma regra de decisão em uma frase — **sem callout
"Resumindo"**. O leg press abre com a resposta curta ("para o músculo,
quase nada"), põe a tabela comparativa logo no primeiro H2 e fecha com
callout. Se tivessem saído com o mesmo esqueleto, um teria sido reescrito.

### Nota de 13/09/2026 — o quinto cancelamento, e dois artigos de princípio

**`treino-de-antebraco` foi cancelado.** `pegada-e-antebraco` já existe e já é
o artigo de treino de antebraço, não só de pegada: tem os H2 "O antebraço em
três peças", "Quem precisa de trabalho direto", "Os exercícios que resolvem",
"Volume, frequência e progressão" e "Um plano de 15 minutos, duas vezes por
semana". A própria `description` dele promete "os exercícios para flexores,
extensores e braquiorradial… e um plano semanal".

O que sobraria de próprio ao filho é nada — seria o mesmo artigo com outro
nome, disputando a mesma consulta contra o irmão. É o caso mais claro de
cancelamento que a fila já teve.

**`amplitude-de-movimento` entrou com recorte declarado.**
`tecnicas-avancadas-de-treino` tem um H2 sobre repetições parciais, mas ele
trata a parcial como técnica de extensão de série e diz explicitamente que ela
"é um complemento no fim, não um substituto da amplitude completa". Isso é
posicionamento, não tratamento do tema.

O ângulo próprio do filho contraria o senso comum, e vem da pesquisa recente:
**amplitude completa não tem nada de mágico — a metade alongada é que faz o
trabalho.** Quando os estudos separaram as parciais em "alongadas" e
"encurtadas", as alongadas alcançaram a amplitude completa e às vezes a
superaram, enquanto as encurtadas ficaram atrás das duas. A amplitude completa
segue sendo o padrão sensato porque cobre a metade que importa sem exigir que
ninguém acerte um recorte. O artigo se organiza em torno disso, e fecha com a
régua prática: se a amplitude da última repetição é menor que a da primeira, o
peso está acima do que o exercício comporta.

Link do pai para o filho pendente — o pai trata parciais como técnica, e o
filho como princípio; os dois se complementam sem competir.

**`cadencia-do-movimento` não teve sobreposição nenhuma.** Zero H2 sobre o
tema no acervo inteiro, e a menção mais forte em qualquer artigo eram três
ocorrências soltas da palavra. O ângulo é a resposta honesta que quase nenhum
conteúdo de cadência dá: dentro da faixa em que se treina de verdade — de 0,5
a 8 segundos por repetição —, a velocidade não decide o resultado. O que o
artigo acrescenta é o custo escondido: perto da falha a cadência prescrita é
impossível de manter, e quem persegue o número encerra a série antes da hora
ou reduz a carga; e cadência lenta come minutos, o que decide quantas séries
cabem na sessão.

**Estrutura variada, como sempre.** Amplitude é prosa de princípio, sem
tabela, e fecha com uma regra em uma frase — sem callout. Cadência abre com a
notação em tabela logo no primeiro H2 e fecha com callout "Resumindo". Se os
dois tivessem saído com o mesmo esqueleto, um seria reescrito.

### Nota de 14/09/2026 — dois recortes, e uma tensão que vale o artigo

**`respiracao-no-treino`.** Zero H2 sobre o tema no acervo e nenhum artigo
mencionando "respira" mais de duas vezes. A sobreposição é pontual: o
`levantamento-terra-como-fazer` ganhou, na reescrita de 08/09, um passo de
respiração dentro da técnica — "respire no topo, nunca no fundo". Isso é
aplicação num exercício, não o princípio.

O ângulo próprio é uma correção, não uma explicação: **"expire no esforço" é
uma boa regra geral e uma péssima regra universal.** Ela funciona em máquina,
isolador e faixa moderada; falha exatamente no agachamento pesado e no terra,
porque expirar na subida esvazia a pressão intra-abdominal que está segurando
a coluna.

E o artigo carrega uma tensão que quase nenhum conteúdo brasileiro registra: o
Colégio Americano de Medicina do Esporte **recomenda evitar** a manobra de
Valsalva pelo risco ligado à elevação de pressão arterial — medições em
levantadores registram valores da ordem de 300 por 280 mmHg —, enquanto a
prática padrão do levantamento pesado depende dela. As duas coisas são
verdadeiras e estão escritas lado a lado, com a ressalva de médico onde ela
pesa: hipertensão, doença cardíaca, doença vascular. Quatro menções a médico
no texto, e uma FAQ dedicada ao sinal de alerta (tontura no fim da série).

Recorte: pai aplica no exercício, filho trata o princípio e o risco. Link do
pai adicionado, com a data de revisão atualizada.

**`cinto-e-luva-de-treino`.** `pegada-e-antebraco` tem um H2 "Straps: aliado ou
muleta?" — e é só sobre strap, e só pelo ângulo do desenvolvimento da pegada.
O cinto, que funciona por mecanismo completamente diferente, não aparece lá.

O ângulo próprio: **o cinto não segura a lombar — ele é uma parede contra a
qual o abdômen empurra.** Quem aperta o cinto e relaxa o abdômen não está
usando o acessório. Some-se a isso o corte prático dos 80% da carga máxima,
com o recado embutido de que quem não sabe a própria máxima não está na faixa
em que ele faz diferença; e a observação sobre a luva que ninguém faz: o
tecido engrossa a barra e pode atrapalhar a pegada que as pessoas imaginam que
ele ajuda.

Recorte: pai trata o strap como questão de pegada, filho compara os três
acessórios. Link do pai adicionado, com a data de revisão atualizada.

**Estrutura variada.** Respiração é uma correção em duas metades — onde a regra
funciona, onde ela falha — e fecha com uma frase-regra, sem callout. Cinto tem
um veredito explícito ao fim de cada seção e fecha com ordem de compra mais
callout. Nenhum dos dois repete o par de ontem (prosa-princípio + tabela).

## Bloco Emagrecimento (12)

| Artigo | slug | status |
|---|---|---|
| Caminhada emagrece? | `caminhada-emagrece` | |
| Esteira ou bicicleta para emagrecer | `esteira-ou-bicicleta` | |
| Emagrecer na menopausa | `emagrecer-na-menopausa` | |
| Emagrecer depois dos 40 | `emagrecer-depois-dos-40` | |
| Termogênicos funcionam? | `termogenicos-funcionam` | |
| Quanto tempo para perder 10 kg | `quanto-tempo-para-perder-10kg` | |
| Fome emocional | `fome-emocional` | |
| Bioimpedância: como ler o resultado | `bioimpedancia-como-ler` | |
| Proteína e saciedade | `proteina-e-saciedade` | |
| Dormir pouco engorda? | `dormir-pouco-engorda` | |
| Emagrecer sem academia | `emagrecer-sem-academia` | |
| Efeito sanfona: por que acontece | `efeito-sanfona` | ⚠️ |

## Bloco Guias de personal (10)

| Artigo | slug | status |
|---|---|---|
| Personal trainer para diabéticos | `personal-trainer-para-diabeticos` | |
| Personal trainer no pós-parto | `personal-trainer-pos-parto` | |
| Personal trainer para pessoas com deficiência | `personal-trainer-para-pcd` | |
| Personal trainer para autistas | `personal-trainer-para-autistas` | |
| Personal trainer para quem viaja a trabalho | `personal-trainer-para-quem-viaja` | |
| Personal trainer em dupla ou grupo | `personal-trainer-em-dupla` | |
| Personal trainer e nutricionista juntos | `personal-trainer-e-nutricionista` | |
| Como trocar de personal trainer | `trocar-de-personal-trainer` | |
| Por quanto tempo manter um personal | `quanto-tempo-manter-personal` | |
| Personal trainer para obesidade | `personal-trainer-para-obesidade` | ⚠️ |

## Bloco Local (7) — aberto em 18/09/2026

O sexto bloco, e o primeiro que existe para servir o lado do portal que
responde por quase toda a demanda: as 985 cidades e os 108 bairros.

### O diagnóstico que abriu o bloco

Os cinco blocos anteriores são todos de consulta nacional. Os 20 artigos
publicados entre 02 e 11/09 não encostaram no lado local, que na linha de
base de 10/09 respondia por **26.761 impressões contra 702 dos bairros** —
e as páginas de artigo nem entram nessa conta. A criação e o SEO local
vinham funcionando como dois projetos que não se encontram.

### O critério de entrada, que é diferente dos outros blocos

Nos blocos anteriores, o artigo entrava se havia consulta com demanda e sem
dono. Aqui o critério é outro, porque a checagem de consultas deu um
resultado incômodo (ver a nota abaixo): **quase toda consulta local com
demanda já tem dono**. O que sobra é estrutural.

Entra no bloco o assunto que **as 985 páginas de cidade levantam e nenhum
artigo responde**. É uma lacuna medível no próprio repositório, não uma
aposta:

| campo presente na página de cidade | cidades | artigos que respondem |
|---|---|---|
| `parques` (parque, praça, orla, academia ao ar livre) | 985 | **0** |
| `climaTreino` (calor, frio, chuva, umidade) | 985 | **0** |
| `corridas` (provas de rua da cidade) | 985 | **0** |
| `ciclovias` | 966 | **0** |

Uma página de cidade hoje linka para **um** guia (`personal-online-funciona`)
e sete ferramentas. Ela abre seções inteiras sobre onde treinar ao ar livre,
sobre o clima local e sobre as provas da cidade, e não tem para onde mandar
o leitor. São 985 fontes de link apontando para lugar nenhum.

### A lista

| # | Artigo | slug | status |
|---|---|---|---|
| 1 | Treinar ao ar livre: parque, praça e academia pública | `treinar-ao-ar-livre` | |
| 2 | Treinar no calor, no frio e na chuva | `treinar-no-calor-e-no-frio` | |
| 3 | Primeira corrida de rua: como se preparar | `primeira-corrida-de-rua` | |
| 4 | Pedalar como treino: ciclovia, bike e perna | `pedalar-como-treino` | |
| 5 | Treinar na praia: o que a areia muda | `treinar-na-praia` | ⚠️ recorte de #1 |
| 6 | Academia de bairro ou rede grande | `academia-de-bairro-ou-rede` | ⚠️ |
| 7 | Mudei de cidade: como retomar o treino | `mudei-de-cidade` | ⚠️ sem demanda medida |

**Produção: 2 por vez**, decidido pelo Renato em 18/09/2026 — mesma regra dos
outros blocos, pelo mesmo motivo: lote pequeno o suficiente para revisar item
a item antes de acelerar.

Os três ⚠️ precisam de recorte decidido antes de escrever. `treinar-na-praia`
só entra se #1 deixar a areia de fora de propósito; `academia-de-bairro-ou-rede`
precisa ser conferido contra `/guias/personal-trainer-em-academia/`; e
`mudei-de-cidade` não tem nenhuma demanda medida — entra por último, ou não
entra.

### Nota de 18/09/2026 — o que a checagem de consultas locais achou, e por que ela NÃO virou artigo

Antes de montar a lista, o export de Consultas de 12/09 foi lido procurando
demanda local sem dono. Três clusters apareceram, e **nenhum dos três virou
artigo** — o que vale registrar, porque a tentação de transformar demanda em
artigo novo é exatamente o que produz página sem valor próprio.

**Cluster "personal de academia × personal particular" — 49 consultas, 488
impressões, posição ponderada 15,9.** Inclui "academia com personal incluso",
"toda academia tem personal", "qual valor de um personal na academia". Parece
um artigo pronto. Mas `/guias/personal-trainer-em-academia/` já existe e está
em **posição 8,0** com 54 impressões. O cluster é dez vezes maior do que a
página captura — isso é caso de reescrita e expansão da página existente, não
de artigo novo. Artigo novo aqui disputaria a própria página.

**Cluster "perto de mim" — 11 consultas, 54 impressões, posição 12,9.**
É consulta navegacional. Quem dá a resposta é o hub e a página de cidade, não
um artigo. Criar um artigo "personal trainer perto de mim" seria criar uma
página que não pode entregar o que o título promete.

**O cluster que mudou a leitura, e que vale mais que este bloco inteiro:**
as consultas de cabeça local — `personal trainer <capital>` — somam cerca de
300 impressões **em posições de 21 a 41**:

| consulta | impressões | posição |
|---|---|---|
| personal trainer rio de janeiro | 90 | 24,4 |
| personal trainer porto alegre | 29 | 28,4 |
| personal trainer goiania (+ variantes) | 44 | 21,2 a 24,2 |
| personal trainer sao paulo | 17 | 34,9 |
| personal trainer curitiba | 17 | 41,1 |
| personal trainer em barueri | 15 | 23,7 |
| personal trainer bh / belo horizonte | 24 | 25,1 a 27,7 |
| personal trainer brasilia (+ preço) | 23 | 24,3 a 32,5 |
| personal trainer salvador | 9 | 34,4 |

São páginas que **já existem** e estão além da página 2 na consulta que
carrega o nome delas. Nenhum artigo novo move esse número. Isso é uma **fila
3 de reescritas, das páginas de capital** — e pelo critério de retorno por
hora ela ganha deste bloco com folga. Fica registrada aqui para não se
perder; abrir a fila é decisão separada.

### As regras que valem só para este bloco

**Nenhum artigo deste bloco cita cidade específica no título, no slug ou na
description.** São guias nacionais que servem a intenção local — a página de
cidade é que linka para eles, não o contrário. Artigo com nome de cidade
disputaria a página da própria cidade.

**Vale a restrição comercial inteira.** Nada aqui pode afirmar ou sugerir
atendimento presencial do Montinho fora da Arena 18, em Alphaville. O
acompanhamento online é para todo o Brasil; o presencial, não.

**Cada artigo precisa de link de volta.** Um artigo deste bloco só cumpre o
propósito se a página de cidade passar a linkar para ele. O link entra no
mesmo commit, no template `[cidade].astro`, na seção que levanta o assunto —
e é uma mudança que toca 985 páginas de uma vez, então ela **não** sobe
`atualizadoEm` em massa (é link de infraestrutura, não revisão de conteúdo).


---

## ⚠️ Sobreposição parcial — decidir o recorte antes de escrever

Não são duplicatas, mas sem um recorte claro os dois competem entre si no
Google e nenhum ganha:

| novo | já existe |
|---|---|
| `treino-full-body-como-montar` | `/musculacao/abc-ou-full-body/` |
| `series-drop-set` | `/musculacao/tecnicas-avancadas-de-treino/` |
| `treino-em-jejum` | `/emagrecimento/aerobico-em-jejum/` |
| `puxada-supinada-como-fazer` | `/musculacao/puxada-como-fazer/` |
| `efeito-sanfona` | `/emagrecimento/como-manter-o-peso-perdido/` |
| `personal-trainer-para-obesidade` | `/emagrecimento/como-comecar-a-treinar-acima-do-peso/` |

## Descartados por serem o mesmo assunto com outro nome

Remada serrote (= remada unilateral) · Good morning (= bom dia) · Tríceps na
corda (= tríceps pulley) · Abdução de quadril na polia (= cadeira abdutora) ·
Musculação para adolescentes (≈ guia de adolescentes).
