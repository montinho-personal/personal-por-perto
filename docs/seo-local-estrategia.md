# SEO local — estratégia a partir do relatório de 30/09/2026

Base: Search Console de 01/06 a 29/09/2026, em
`docs/relatorios/2026-09-30-gsc-desempenho/` (números-chave e comparação no
`README.md` da mesma pasta). Prints de busca da região presencial em
`docs/intencoes-locais.md`. As análises de 07/09 (`cidades-analise.md`) e
09/09 (`seo-local-analise.md`) continuam válidas; este documento não repete
o diagnóstico delas, só o que o relatório novo muda ou confirma.

---

## 1. O que os dados dizem, em cinco linhas

1. **Cidade é o motor:** 705 dos 846 cliques do site (83%), CTR 1,88%.
2. **A página de cidade ganha a busca de preço e perde a transacional.**
   "Personal trainer + cidade" fica na posição média 17,9 (Curitiba 40,
   BH 25, SP 34); "quanto custa / valor / preço + cidade" fica em 11,1, com
   várias no topo — Florianópolis 4,9, João Pessoa 3,9, Salvador 6,7,
   Goiânia 6,0.
3. **Nas 20 maiores cidades o CTR é 1%, nas médias e pequenas é 3%**, e a
   diferença persistiu na janela nova. Não é título: 19 dos 20 títulos já
   falam em preço. É posição na consulta transacional, que a SERP entrega a
   marketplaces (Superprof, Cronoshare) e a perfis de Instagram.
4. **A maior consulta local do site pede consultoria online**:
   "consultoria online musculacao palhoca", 250 impressões, posição 7,5,
   zero clique — e é exatamente o serviço que o Montinho vende.
5. **Bairro segue com o melhor CTR** (3,09%), com volume ainda pequeno; os
   bairros publicados em setembro já recebem impressão.

## 2. A estratégia: cinco frentes, por valor de cada clique

A ordem não é por volume de impressão, é por **quanto vale o clique** e por
**onde a página já tem chance real**.

### Frente 1 — Região presencial (11 páginas): onde o clique vira aluno

Alphaville, Tamboré, Aldeia da Serra, Barueri, Santana de Parnaíba, Jandira,
Itapevi, Carapicuíba, Osasco, Cotia e Granja Viana. Volume baixo (Barueri
161 impressões, Alphaville 144), mas é o único lugar em que o portal pode
oferecer o presencial do Montinho. Hoje as buscas diretas estão na página 2
e 3 ("personal trainer em barueri" 22,7; "personal trainer alphaville"
19,8, com 2 cliques).

O que entra, vindo dos prints e do PAA (`docs/intencoes-locais.md`):

- **Preço nas palavras exatas:** "quanto custa 1 mês", "3 vezes por
  semana", "valor de 1 hora". O autocompletar de "valor personal trainer por
  mês" abre com "barueri" e "alphaville" — essas duas lideram com o preço
  mensal.
- **Instagram:** quatro das seis sugestões de Santana de Parnaíba, e as de
  Jandira e Carapicuíba, pedem Instagram. Quem busca quer ver o trabalho
  antes de chamar. Bloco com o perfil do Montinho nessas páginas.
- **"Taxa de personal"** (academia e condomínio cobrando do profissional):
  nenhuma página responde hoje.
- **Personal mulher** e **personal em rede de academia** (Smart Fit,
  Bluefit) apareceram em Alphaville e Osasco — responder só onde houver
  fato a dizer, sem inventar.

O site próprio do Montinho aparece nas mesmas buscas. São domínios
diferentes: duas posições na mesma SERP é presença dobrada, não
canibalização — desde que o texto não seja o mesmo.

### Frente 2 — Consultoria online + cidade: o produto do Montinho

Palhoça foi tratada em 30/09 (seção 4). O padrão só aparece nela por
enquanto, mas vale para as 978 cidades fora da região: onde o presencial do
Montinho não chega, o online é o que o portal tem a oferecer. **Não
replicar em massa sem demanda medida** — cada relatório novo é conferido
atrás de "online / consultoria + cidade", e a cidade que aparecer recebe o
mesmo tratamento.

### Frente 3 — Preço + cidade: consolidar onde já ganhamos

A resposta já existe em todas as páginas (FAQ "Quanto custa um personal
trainer em X?" e tabela com aula, pacote mensal e online). O que falta é
casar com as outras formas da pergunta que aparecem no relatório: "valor
por mês / mensal" (52 impressões sem cidade), "3 vezes por semana" (60),
"valor da hora". A proposta:

- uma segunda pergunta de preço na página de cidade, com as palavras de
  mês e frequência;
- em **leva**, começando pelas 20 cidades de mais impressão, que concentram
  as buscas de preço com cidade (Curitiba 63 impressões, BH 45, Salvador 41,
  Brasília 19 + 10, Rio 18 + 9 + 8);
- as cidades 21–100 ficam como grupo de comparação, e a leva seguinte só
  sai depois de um relatório;
- **Belo Horizonte** entra nessa leva com o título: é a única das 20 sem
  preço no título, a de pior CTR (0,3%), e tem "personal trainer em bh
  preço" com 45 impressões e zero clique.

É mudança de conteúdo visível, então `atualizadoEm` sobe — só nas 20 da
leva, que é justamente o motivo de ir em leva (regra 3 do CLAUDE.md).

### Frente 4 — Bairros: continuar, mas só depois de 09/10

O piloto de 10 bairros tem leitura marcada para 09/10, e mexer em bairro
antes disso estraga a atribuição. Depois dela, a ordem da
`seo-local-analise.md` segue: Goiânia, Florianópolis e **Asa Norte**
(Brasília só tem Asa Sul). É o caminho para as cidades grandes, onde a
página de cidade não ganha a busca transacional.

### Frente 5 — O que NÃO fazer agora

- **Criar cidade nova:** continua sem nenhuma demanda medida (checado de
  novo nas 1.000 consultas).
- **Reescrever título em massa:** os títulos já anunciam preço; o problema
  das cidades grandes é posição, e título não move posição.
- **Preço de academia** ("plano de academia teresina", "preço de academia
  em boa vista", 110 impressões somadas): exigiria preço de mensalidade com
  fonte oficial, que muda o tempo todo e varia por unidade. Fica de fora.
- **Disputar "personal trainer + capital" com título ou texto:** a SERP é de
  marketplace e Instagram. O caminho para essas cidades é bairro (frente 4).

## 3. Calendário

Uma frente por vez, em páginas diferentes, para que cada mudança possa ser
lida sozinha no próximo relatório.

| data | o quê | páginas |
|---|---|---|
| 30/09 | Palhoça: título, descrição e FAQ de consultoria online ✅ | 1 |
| 30/09 | Região presencial: as 10 com prints, a pedido do Renato ✅ (Cotia e Embu quando chegarem os prints) | 10 |
| 30/09 | Leva 1 por prints: Belo Horizonte, Brasília, Goiânia, Teresina, Florianópolis, João Pessoa ✅ (+ Cotia e Embu) | 8 |
| a definir | Preço + cidade nas outras cidades grandes, pelas levas 2 e 3 de prints | — |
| 09/10 | Leitura do piloto de bairros → decide a próxima leva de bairros | — |
| próximo relatório | medir as quatro frentes (lista no README de relatórios) | — |

## 4. Palhoça — feito em 30/09/2026

A busca "consultoria online musculacao palhoca" responde por **250 das 371
impressões** da página, na posição 7,5, sem nenhum clique. A pesquisa manual
não mostrou marca com esse nome: é busca genérica, e o resultado traz
Superprof e academias.

O título gerado prometia "quanto custa a aula", que não é o que essa pessoa
procura. Mudou:

| | antes | depois |
|---|---|---|
| title | Personal Trainer em Palhoça (SC): quanto custa a aula | Personal Trainer e Consultoria Online em Palhoça (SC) |
| description | Personal trainer em Palhoça: a aula de R$ 75 a R$ 180, onde se treina na cidade — de Pedra Branca aos parques públicos — e como escolher o profissional. | Consultoria online de musculação em Palhoça: de R$ 180 a R$ 450 por mês. O presencial, de R$ 75 a R$ 180 a aula. Onde treinar na cidade e como escolher. |

E uma pergunta frequente nova, "Como funciona a consultoria online de
musculação em Palhoça?": como é o formato, a faixa de preço da própria
página (R$ 180 a R$ 450 por mês, contra R$ 380 a R$ 1.000 do pacote
presencial), o limite honesto (sem correção ao vivo; quem sente dor passa
antes por médico ou fisioterapeuta) e o Montinho como opção nacional.

Para isso, a página de cidade ganhou dois campos opcionais,
`metaTitulo` e `metaDescricao`, que substituem os gerados por
`metaCidade.ts`. São exceção: só entram quando o Search Console mostra que a
busca dominante pede algo que o gabarito não anuncia, e o comentário no
arquivo da cidade registra qual busca e com que números.

**Ressalva:** o export não cruza consulta com página. Que a busca cai na
página de Palhoça é a leitura mais provável (é a única página do site sobre
Palhoça), não um dado.

**Como medir:** no próximo relatório, a posição e o CTR dessa consulta. Se
o CTR sair de zero com a posição parada, foi o snippet. Se a posição cair,
o Google entendeu que a página ficou menos relevante para o resto. Nesse
caso, os dois campos saem e o título volta ao gerado.

## 5. Fluxo por prints — pedido do Renato em 30/09/2026

O Renato pesquisa no Google e manda os prints (autocompletar, "as pessoas
também perguntam", pesquisas relacionadas e a primeira página); cada página
é atualizada com as intenções daquela cidade ou bairro — o mesmo método já
usado nas ferramentas e na região presencial. Mudança por página, com
`atualizadoEm` do dia, no ritmo em que os prints chegam.

**Ordem**, pelo ganho de clique possível: impressões × (CTR típico da
posição − CTR atual), com os dados de 01/06 a 29/09. É uma ordenação, não
uma previsão — a posição média por página engana (`cidades-analise.md`,
5.1), então a conta serve para decidir quem vem primeiro, não quanto vai
render.

| leva | páginas | termo a pesquisar |
|---|---|---|
| já com prints | Alphaville, Tamboré, Aldeia da Serra, Barueri, Santana de Parnaíba, Jandira, Carapicuíba, Granja Viana, Itapevi, Osasco | — (aplicar; faltam Cotia e Embu das Artes) |
| 1 | Belo Horizonte, Brasília, Goiânia, Teresina, Florianópolis, João Pessoa | `personal trainer <cidade>` |
| 2 | São Luís, São Paulo, Aracaju, Porto Alegre, Recife, Maceió | idem |
| 3 | Juiz de Fora, Vitória, Manaus, Praia Grande, Joinville, Uberlândia, Natal, Niterói | idem |
| 4 | Salvador, Rio de Janeiro, Curitiba, Londrina, Belém, Fortaleza | idem — aplicada em 01/10 |
| 5 | Taguatinga, Blumenau, Santo André, Campinas, Sorocaba, Bauru, Cascavel, Santos | idem — as quatro primeiras em 05/10, Sorocaba, Bauru e Cascavel em 06/10; falta Santos |
| 6 | as 526 páginas ainda com a data de lançamento (29/06), das de mais impressão para as de menos — pedido do Renato em 06/10 | idem |
| bairros | Cidade Nova (BH), Jardins (SP), Copacabana, Ipanema, Campeche, Buritis, Moinhos de Vento | `personal trainer <bairro>` |

Situação em 01/10/2026: levas 1 a 4 aplicadas. A 4 e a 5 foram montadas pela
ordem de impressões no relatório de 30/09, entre as cidades ainda sem
`metaFoco` nem título próprio.

Os 10 bairros do piloto (Tijuca, Barra da Tijuca, Savassi, Icaraí, Boa
Viagem, Leblon, Moema, Brooklin, Asa Sul, Gleba Palhano) só entram depois
da leitura de 09/10 — mexer neles antes estraga a medição.

Nas capitais de CTR mais baixo (BH, São Paulo, Porto Alegre), a busca
"personal trainer + cidade" está na página 3 e o print não muda isso
sozinho. O ganho ali vem das perguntas de preço e das variações que o
autocompletar mostrar — é o que vale olhar com atenção nesses prints.
