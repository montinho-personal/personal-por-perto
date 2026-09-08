# Páginas de cidade: o que falta criar, e por que não é isso que falta

Análise de 07/09/2026, feita a partir da pergunta "quais cidades ainda
precisamos criar?". A resposta literal está na seção 2. As seções seguintes
existem porque os dados apontaram para outro lugar.

Fonte: export do Search Console em `docs/relatorios/2026-09-01-gsc/`
(65 dias, 27.931 impressões, 460 cliques no site inteiro).

---

## 1. O inventário

O portal tem **981 cidades**. O Brasil tem 5.570 municípios. Faltam 4.589 —
número que não significa nada sozinho, porque quase todos são municípios de
menos de 20 mil habitantes.

O corte que importa: **acima de ~85 mil habitantes o portal está
praticamente completo.** Testei cerca de 200 municípios candidatos contra o
repositório e quase todos já existiam, inclusive os que eu apostaria que
faltavam: Caratinga, Patrocínio e Timóteo em MG, Saquarema/RJ, Valença/BA,
Cáceres/MT, Gurupi/TO, Cacoal/RO, Quixadá/CE, Bayeux/PB, Macaíba/RN,
Navegantes/SC, São Roque, Itapeva, Lorena e Arujá em SP.

## 2. As ausências que encontrei

Não confirmei as populações: o proxy da rede bloqueia a API do IBGE, então
qualquer número aqui seria memória, não fonte.

| UF | ausentes |
|---|---|
| SE | São Cristóvão · Simão Dias |
| PE | Araripina · Moreno |
| PA | Redenção · Oriximiná · São Félix do Xingu · Moju · Igarapé-Miri · Vigia · Novo Progresso |
| MA | Coroatá · Buriticupu · Itapecuru Mirim · Zé Doca · Viana |
| AM | Iranduba · Humaitá · Manicoré |
| RN | Assu |
| CE | Granja |
| SP | Cruzeiro |

Abaixo de ~80 mil habitantes as ausências viram centenas, concentradas em
PA, AM, MA e PI.

## 3. Por que essa lista não é a prioridade

Cruzei todas essas cidades com as **891 consultas do Search Console**:
**nenhuma delas aparece**. Zero demanda medida — o que não prova que não
exista demanda, mas prova que ela não é visível nos dados que temos.

Enquanto isso, as páginas de cidade são o motor do portal:

- **20.095 impressões** — 72% do site inteiro
- **405 cliques** — 88% de todos os cliques
- CTR de 2,02%

Criar a cidade nº 982 adiciona uma página que começa do zero, quando as que
existem já são exibidas vinte mil vezes e ignoradas.

## 4. A curva está invertida

| faixa | cidades | impressões | CTR |
|---|---|---|---|
| as 20 maiores em impressão | 20 | 9.530 | **1,24%** |
| da 21ª à 100ª | 80 | 5.618 | 1,96% |
| as outras 630 | 630 | 4.947 | **3,58%** |

Quanto maior a cidade, pior converte. E o extremo é feio: **11 cidades
concentram 4.606 impressões — 23% de todo o site — e entregam 19 cliques.**

| cidade | impressões | cliques | CTR |
|---|---|---|---|
| Belo Horizonte | 1.335 | 1 | 0,07% |
| Porto Alegre | 1.001 | 6 | 0,60% |
| Brasília | 606 | 5 | 0,83% |
| São Paulo | 440 | 2 | 0,45% |
| Curitiba | 274 | 0 | 0,00% |
| Fortaleza | 253 | 2 | 0,79% |
| Palhoça | 217 | 1 | 0,46% |
| Aracaju | 162 | 1 | 0,62% |
| Vitória | 108 | 1 | 0,93% |
| Balneário Camboriú | 105 | 0 | 0,00% |
| Campo Grande | 105 | 0 | 0,00% |

---

## 5. Por que o CTR das cidades grandes é tão baixo

Esta seção era uma suspeita — "título e descrição genéricos demais" — e a
suspeita estava errada.

### 5.1 A posição média por página engana, e engana muito

A aba **Páginas** do relatório diz que `/personal-trainer/belo-horizonte-mg/`
tem **posição média 10,4**. Com 899 impressões e 1 clique, isso pareceria um
problema de título: bem posicionado e não clicado.

A aba **Consultas** conta outra história. Na consulta "personal trainer belo
horizonte", a posição é **26,5**.

| consulta | impressões | posição |
|---|---|---|
| personal trainer belo horizonte | 8 | 26,5 |
| personal belo horizonte | 2 | 23,5 |
| personal trainer em belo horizonte | 1 | 37,0 |

A média de 10,4 não descreve o desempenho da página nas buscas em que ela
deveria ganhar. Ela é a média de duas realidades diferentes: consultas em que
a página aparece bem posicionada mas não é o que a pessoa procurava, e
consultas em que ela seria o resultado certo e está na página 3.

**Consequência prática, e vale para qualquer leitura futura de relatório:
posição média por página não serve para diagnosticar CTR.** Só a posição por
consulta serve.

### 5.2 Nas consultas em que a página é o resultado certo, ela está longe

| cidade | consulta principal | posição |
|---|---|---|
| Curitiba | personal trainer curitiba | 42,4 |
| Salvador | personal trainer salvador | 40,3 |
| Porto Alegre | personal trainer porto alegre | 29,2 |
| Belo Horizonte | personal trainer belo horizonte | 26,5 |
| São Paulo | personal trainer sao paulo | 26,2 |

Página 3 a 5. **CTR zero nessa faixa é o esperado, não uma anomalia.** O
problema não é o título: é que a página não compete.

### 5.3 O descasamento de intenção, que explica o resto

Busquei "personal trainer belo horizonte" para ver quem ocupa a primeira
página. O resultado é homogêneo:

- marketplaces de profissionais — Superprof (411 profissionais listados),
  Cronoshare, SuasAulasParticulares, SuperTrainers;
- perfis de personais individuais — Instagram, Facebook, sites próprios.

Nenhum guia editorial. **A consulta é transacional e local: quem digita isso
quer contratar alguém em BH, hoje.** A nossa página é um guia sobre o mercado
fitness da cidade — conteúdo honesto e útil, respondendo a uma pergunta que
não foi feita.

Isso fecha o raciocínio das três seções: a página aparece longe nas consultas
transacionais porque não entrega o que elas pedem, e aparece perto em
consultas genéricas onde não é o que a pessoa quer. Nos dois casos, ninguém
clica.

### 5.4 Um quarto achado, que NÃO é um problema a consertar

20% das impressões do site (5.577 de 28.084) estão em URLs **sem barra
final** — a forma que o portal não canoniza. 111 páginas aparecem no
relatório nas duas formas, com posições diferentes, o que significa sinal
dividido.

Quase caí na armadilha de tratar isso como bug. **Não é.** O
`"trailingSlash": true` do `vercel.json` entrou em **24/08/2026** (commit
`7149cab`), e o relatório cobre 65 dias terminando em 01/09 — ou seja, a
maior parte do período é anterior ao redirect. O que se vê é histórico
consolidando, não configuração errada.

O que fazer: **medir de novo no próximo relatório.** Se a fatia sem barra
encolher, a consolidação está acontecendo e não há nada a fazer. Se não
encolher, aí sim existe problema — e aí a investigação começa pelo redirect.

Vale registrar também que essa divisão pode ter deprimido as posições durante
boa parte do período analisado: uma página contada como duas tem o sinal
partido. As posições da seção 5.2 são, portanto, um piso pessimista.

### 5.5 O que estes dados NÃO permitem concluir

Honestidade sobre os limites, para ninguém citar isto como mais forte do que é:

- O export de Consultas cobre **6.878 das 27.931 impressões do site (25%)**.
  O Search Console anonimiza consultas raras. Não dá para atribuir com
  precisão de onde vêm as impressões de cada página.
- As consultas que citam cidade somam apenas **937 impressões**. Qualquer
  corte por porte de cidade dentro desse subconjunto trabalha com amostras de
  dezenas de impressões — indício, não conclusão.
- O CTR por posição varia com o tipo de SERP. Comparar CTR entre cidades com
  SERPs diferentes tem limite.

---

## 6. O que fazer com isso

**Não criar cidades novas agora.** As 21 ausências da seção 2 não têm demanda
medida, e o esforço rende mais em páginas que já recebem impressão.

**Palhoça/SC é o caso a atacar primeiro**, por três motivos que convergem:

1. é a primeira da fila de academias pendentes — tem capa, não tem academias;
2. tem 217 impressões e 1 clique, na posição 8,0;
3. é alvo da consulta de maior impressão de todo o corpus de cidades —
   *"consultoria online musculacao palhoca"*, **147 impressões e zero
   cliques**, posição 10,6.

Alguém procura, o Google mostra na primeira página, e ninguém entra. Essa é
uma página para consertar, não uma cidade para criar. E a posição 8,0 é a
faixa em que título e trecho de destaque de fato decidem — ao contrário da
posição 26 de Belo Horizonte.

**A pergunta aberta para as cidades grandes**, que esta análise não resolve:
vale disputar consultas transacionais que a SERP entrega a marketplaces? Há
três caminhos possíveis, e nenhum deles é "melhorar o título":

- aceitar que a página de cidade grande não ganha a consulta transacional e
  otimizá-la para as informacionais, em que ela já aparece bem posicionada
  ("quanto custa personal trainer em X" tem posição 9,9 a 10,6);
- dar à página algo que os marketplaces não têm e que justifique o clique;
- concentrar o esforço nas cidades médias, onde o CTR de 3,58% mostra que a
  página já ganha.

A escolha entre os três é decisão do Renato, não do relatório.
