# SEO local: o que criar depois — análise de 09/09/2026

Base: relatório do Search Console de `docs/relatorios/2026-09-01-gsc/`
(65 dias, 891 consultas, 1.000 URLs). Nenhum número aqui é estimativa.

---

## 1. Não faltam cidades

Cruzei as 891 consultas procurando lugares que não têm página. Praticamente
não existem. O que aparece na lista de "lugar sem página" é, quase tudo,
erro de digitação de *trainer* ou modificador de preço:

| "lugar" | impr | o que é de verdade |
|---|---|---|
| treiner / trainner / trainee / traine / treinee / traning / treining / trailer | 190 somadas | grafias erradas de *trainer* |
| hora · 3 vezes semana · média · médio · mês · tabela · cobra · custo | 133 somadas | modificadores de preço |
| bh · sp · rj | 74 somadas | sigla da cidade que já temos |
| training / fitness / studio | 118 somadas | termo genérico em inglês |

Os únicos lugares reais da lista — Vitória da Conquista, Boa Vista/RR,
Alvorada/RS — **já têm página**. A de Alvorada nem é nossa demanda: a
consulta é `casa da performance | treino funcional em alvorada personal
trainer`, marca de terceiro.

Conclusão: a fila de cidades ausentes de `docs/cidades-analise.md` (20
municípios restantes) continua sem nenhuma demanda medida. Criar a cidade
nº 984 é apostar no escuro — legítimo, mas não é "o próximo passo do SEO
local".

## 2. O formato que converte melhor no site inteiro é bairro

| tipo | URLs | impressões | cliques | CTR | posição |
|---|---|---|---|---|---|
| **bairro** | 49 | 495 | 17 | **3,43%** | 9,9 |
| cidade | 814 | 20.095 | 405 | 2,02% | 9,1 |
| estado | 45 | 615 | 8 | 1,30% | 10,7 |
| artigo | 73 | 5.940 | 26 | 0,44% | 12,4 |
| guia | 16 | 906 | 5 | 0,55% | 23,0 |

Bairro tem **1,7× o CTR de cidade** e quase 8× o de artigo, na mesma
posição média. Faz sentido: quem digita "personal trainer na Tijuca" já
decidiu o que quer e onde — a intenção é mais estreita, e a página
responde exatamente ela.

**A ressalva honesta:** são 495 impressões e 17 cliques. É o melhor sinal
que temos, e é uma amostra fina. Não é lei; é a direção que os dados
apontam hoje.

## 3. Onde está a lacuna

As cidades com mais impressão são justamente as com menos bairros
publicados. Belo Horizonte tem 1.335 impressões, **1 clique** e 4 bairros;
os três bairros dela que aparecem no relatório somam 35 impressões em
posição 8–12 — ou seja, posição boa, volume mínimo, porque quase não
existem.

| cidade | impr da página de cidade | cliques | bairros publicados |
|---|---|---|---|
| Belo Horizonte | 1.335 | 1 | 4 |
| Porto Alegre | 1.001 | 6 | 4 |
| Salvador | 949 | 18 | 5 |
| Goiânia | 750 | 8 | 3 |
| Florianópolis | 709 | 10 | 4 |
| Teresina | 632 | 9 | 2 |
| Brasília | 606 | 5 | 3 |
| João Pessoa | 599 | 17 | 4 |
| Uberlândia | 342 | 9 | 2 |

Comparação que fecha o argumento: **São Paulo tem 10 bairros publicados e
440 impressões na página de cidade**. Belo Horizonte tem 4 bairros e três
vezes mais impressão. A demanda de BH existe e não tem para onde ir.

Cidades com 100+ impressões e **zero** bairros: Palhoça (217), Joinville
(206), Blumenau (189), Santo André (183), Sorocaba (172), Taguatinga
(153), Cascavel (150), Limeira (126), Ribeirão Preto (115), Bauru (107).

Essas ficam para depois. Busca por bairro é hábito de cidade grande; em
município de 150 mil habitantes a pessoa busca pela cidade. Começar por
onde o hábito existe é o que permite ler o resultado.

## 4. A ordem recomendada

1. **Belo Horizonte** — maior demanda, menor aproveitamento, e já temos
   Savassi/Lourdes/Buritis/Sion ranqueando em posição 8–12.
2. **Porto Alegre** — mesma situação, 1.001 impressões contra 4 bairros.
3. **Salvador** — 18 cliques já vindos da cidade, o melhor sinal comercial
   da lista.
4. **Goiânia** e **Florianópolis** — 700+ impressões cada, 3 e 4 bairros.
5. **Brasília** — caso específico: temos Asa Sul e **não temos Asa Norte**.

Cada bairro novo precisa de pesquisa própria (academias reais, parques,
perfil do bairro, preços). O nome do bairro nunca entra por memória — vale
a mesma regra das academias no CLAUDE.md.

## 5. Ritmo

Páginas novas: dividir sempre, conforme a regra de lote. A primeira leva é
**4 bairros de uma cidade só** — o suficiente para revisar item a item e
para que, se o padrão estiver errado, o erro custe 4 páginas e não 40. Só
depois de uma leva limpa o volume sobe.

Bairro da mesma cidade também tem vantagem de atribuição: se o tráfego de
BH se mover, sabemos qual mudança mexeu.

## 6. Execução

| leva | data | cidade | bairros |
|---|---|---|---|
| 1 | 09/09/2026 | Belo Horizonte | Barreiro, Belvedere, Cidade Nova, Pampulha |
| 2 | 11/09/2026 | Porto Alegre | Menino Deus, Cidade Baixa |
| 3 | 11/09/2026 | Salvador | Barra, Brotas |
| 4 | 21/10/2026 | Brasília, João Pessoa, Salvador | Asa Norte, Tambaú, Imbuí — pedido do Renato; as três cidades com mais impressões em 28 dias (João Pessoa 1.149, Salvador 901, Brasília 724) e poucos bairros. Publicados antes dos prints de busca; título, H1 e FAQs a revisar quando chegarem |
| 5 | 21/10/2026 | Goiânia, Teresina, Uberlândia | Setor Oeste, Dirceu, Centro — pedido do Renato; próximas três cidades por impressões e poucos bairros (Teresina 582 / 2 bairros, Goiânia 475 / 3, Uberlândia 367 / 2). Escolha por contraste de zona e perfil. Publicados antes dos prints |
| 6 | 22/10/2026 | Joinville, Londrina, Belém | América, Centro, Marco — pedido do Renato; cidades com mais impressões em 28 dias e menos bairros (Joinville 305 / 0, Londrina 270 / 1, Belém 338 / 3). América = primeiro bairro de Joinville; Centro contrasta com a Gleba Palhano; Marco contrasta com os três nobres de Belém. Publicados antes dos prints. **Prints a pedir:** "personal trainer América Joinville", "academia América Joinville", "personal trainer centro Londrina", "academia centro Londrina", "personal trainer Marco Belém", "academia Marco Belém" |
| 7 | 22/10/2026 | Taguatinga (DF), Florianópolis | Taguatinga Sul, Estreito — pedido do Renato, escolha pelo GSC de 22/10: Taguatinga 198 impressões e 0 bairros, com a consulta "academias em taguatinga sul" no export; Florianópolis 5ª cidade em cliques (24) e os 4 bairros todos na Ilha — Estreito é o primeiro do Continente. Publicados antes dos prints. **Prints a pedir:** "personal trainer taguatinga sul", "academia taguatinga sul", "personal trainer estreito florianópolis", "academia estreito florianópolis" |
| 8 | 22/10/2026 | São Paulo, Curitiba | Tatuapé, Portão — pedido do Renato, escolha pelo GSC de 22/10: Salvador e Porto Alegre, as cidades que mais receberam bairros, subiram na consulta principal; São Paulo (34) e Curitiba (39) seguem paradas. Bairros fora do eixo nobre de cada cidade (Tatuapé é o primeiro da Zona Leste; Portão, bairro grande de classe média). Publicados antes dos prints. **Prints a pedir:** "personal trainer tatuapé", "academia tatuapé", "personal trainer portão curitiba", "academia portão curitiba" |
| 9 | 26/10/2026 | Recife, Manaus | Várzea, Cidade Nova — pedido do Renato ("criar próximos 2 de SEO local"), escolha pelo GSC de 28 dias: as cidades com mais impressões entre as que não receberam bairro nas levas 4–8 (Manaus 311 / 3 bairros, Recife 202 / 3), todos os bairros existentes no eixo nobre. Várzea e Cidade Nova são, pelo Censo 2022, o 2º bairro mais populoso de cada cidade. Na Cidade Nova, a Smart Fit "Cidade Nova" tem endereço oficial na Colônia Santo Antônio (dito na página). Várzea sem `zona` (RPA não confirmada: Prefeitura bloqueada). Publicados antes dos prints. **Prints a pedir:** "personal trainer várzea recife", "academia várzea recife", "personal trainer cidade nova manaus", "academia cidade nova manaus" |

**Leva 6 — prints de 22/10 (09h15)**, em `docs/pesquisas/2026-10-22-bairros-leva-6/prints/`:

- *personal trainer américa joinville*: autocompletar cai na cidade ("joinville preço", "joinville"); resultados: guia local da cidade e um estúdio no Instagram; relacionadas só de academia (Ph.D Sports américa, preço, barata, Force One, AD3 Santo Antônio, spinning). Mesmo padrão do Setor Oeste: "personal + bairro" tem pouca demanda própria.
- *academia américa joinville*: autocompletar "academia **bairro** america", "academia **clube** america", "**phd** academia joinville america"; mapa com Ph.D Sports Joinville América (R. Benjamin Constant, 430), Living Fitness (R. Edgar Schneider, 130), Summit Fitness – Unidade América (R. José de Alencar), Force One, CTRC; orgânico: site da Personal Gym (R. Lages, 826 – América) e Instagram da Living Fitness ("América Futebol Clube"). **Aplicado:** Ph.D Sports pelo nome da rede, com a ressalva de que o Wellhub põe o endereço no Glória; "academia do clube América" na FAQ. Summit fora (só ficha do Google e snippet).
- *personal trainer centro londrina* (09h16; 4 prints recebidos na conversa, sem arquivo de imagem disponível para arquivar): autocompletar "londrina preço", "instagram", "valor"; **a página de Londrina do portal é o 1º resultado orgânico** ("valor por mês e por aula"); relacionadas: personal trainer londrina, **mulher**, primo, **Ibiporã**, **Cambé**, preço, academia londrina, online. *academia centro londrina*: autocompletar **Panobianco centro**, **Sesc centro**, **My Move centro**; mapa: Force One (R. Prof. João Cândido), My Move Centro, MC2 Fitness Centro (R. Mato Grosso, 829), Off; orgânico: Off ("academia em Londrina centro, 1.000 m²"), Instagram da Panobianco Centro (R. Paraíba, 188), Academia Elite Centro (Gurupass). **Aplicado:** parágrafo com links para Cambé e Ibiporã. **Fora:** Panobianco (Instagram R. Paraíba × Wellhub R. Benjamin Constant), Off e Sesc (sites bloqueados aqui — pedir print da página oficial se quiser incluir), Force One e Elite (sem segunda fonte), "mulher" (regra da estratégia). 
- *personal trainer marco belém* (09h17): autocompletar cai na cidade (instagram, belém do pará); visão geral de IA lista personais e estúdios do bairro (OLX, Wellhub, Instagram) — **não é fonte**; PAA: **valor de 1 hora**, **3 vezes por semana**, **vale a pena**, quanto deve cobrar. *academia marco belém*: autocompletar **Fitzem** (fotos, avaliações), **bairro marco**, **Gracie**; mapa: Fit Bel, Fit4You Duque, Body Company; orgânico: Wellhub e site da Fitzem (Tv. Vileta, 2866 — site bloqueado aqui), Selfit São Brás (snippet com endereço no Marco; página oficial deu 404 aqui; o Wellhub põe no Nazaré), Zenith e Castro Team (jiu-jitsu); relacionadas quase todas de Fitzem (valor, planos, unidades). **Aplicado:** FAQs "3 vezes por semana" e "vale a pena", título e descrição com "valor da hora" e Fitzem, "Fitzem Marco" no texto. **Fora:** número da Fitzem (site bloqueado), Selfit (divergência), jiu-jitsu (outra intenção). Fecha a aplicação dos prints da leva 6.

**Leva 5 — prints de 21/10 (14h41)**, em `docs/pesquisas/2026-10-21-bairros-leva-5/prints/`:
- *academia setor oeste goiânia*: Ultra, Smart Fit, Bluefit, Panobianco; "academia de musculação". **Aplicado:** Ultra e Panobianco citadas pelo nome, com a fonte (TotalPass, endereço no Setor Oeste; Wellhub deu 404 e não conta como segunda fonte — por isso sem endereço); FAQ "Quais academias ficam no Setor Oeste?"; título e descrição com academias. Bluefit (Praça do Sol) fora: só Wellhub e página oficial com botão de inauguração.
- *academia dirceu teresina*: Simplifit (Dirceu, Noé Mendes, Kennedy), "dirceu 2" (Selfit Dirceu II), telefone, cnpj, zonas sul e leste; PAA de personal: 1 hora, quanto custa em Teresina, **3 vezes por semana**, **onde encontrar personal em Teresina**; visão geral de IA com mensalidades de academia (não é fonte; preço de academia fica fora). **Aplicado:** FAQs de 3x/semana e onde encontrar; Simplifit Dirceu pelo nome (site oficial indexado, não abre aqui; endereço fora); título e descrição com academias.
- *personal trainer setor oeste goiânia*: segundo o Renato (21/10), a busca **não mostra autocompletar, nem "Outras pessoas pesquisaram", nem PAA** — sinal de demanda baixa para personal com o nome do bairro. A página fica como está; a intenção que existe ali é de academia, já aplicada. Leitura no próximo relatório: se o Setor Oeste não receber impressão de "personal", a próxima leva de Goiânia não deve repetir bairro central.
- *personal trainer centro uberlândia* (15h03): o autocompletar cai na cidade (instagram, barueri); relacionadas: personal trainer uberlândia, **mulher**, **preço**, **online**, academia perto de mim. *academia centro uberlândia*: Bluefit Centro, Smart Fit Centro, Ultra (Cesário), 24 horas, shopping, horários, telefone. **Aplicado:** FAQ de academias do Centro com a **Ultra Academia Cesário** (bairro Centro no TotalPass e no Wellhub; rua só no TotalPass, por isso sem endereço); FAQ de personal online com a faixa de Uberlândia; título e descrição com academias e online. Bluefit fora: a página oficial "uberlandia-centro" tem título "Morada da Colina" e endereço no Altamira — ambíguo demais. "Personal mulher" fora (regra da estratégia). Fecha a aplicação dos prints da leva 5.


**Asa Norte — prints recebidos em 21/10 (8h)**, em `docs/pesquisas/2026-10-21-bairros-leva-4/prints/`:
- *personal trainer asa norte*: autocompletar com "brasilia asa norte", "studio personal trainer", um CT pelo nome, "personal asa norte"; PAA só de preço — 1 mês, valor médio, quanto custa em Brasília, 2 vezes por semana; resultados com Wellhub (academias com personal no plano), perfil de personal "Plano Piloto, Asa Sul e Asa Norte" e estúdio de funcional na CLN; outras: plano personal Smart Fit preço, academia com personal, preço popular, valor hora, quanto custa por mês.
- *academia asa norte*: barata, Smart Fit, Evolve, Bluefit, Ultra, World Gym, "706", "dentro de 800 m"; melhores academias.
- **Aplicado:** título e H1 com "preço"; descrição com "1 mês" e "2 vezes por semana"; FAQs novas de 1 mês, 2 vezes por semana, valor da hora e academia barata/gratuita (academias comunitárias, PDAD); seção de preço com a conta de 2x/semana, preço popular, calculadora de preço e links para personal na Smart Fit e em academia; estúdio citado entre os formatos; Bluefit citada só pelo nome (páginas oficiais "Asa Norte" sem endereço legível e com botão de inauguração). Ultra (só Wellhub aberto; site oficial bloqueado), Evolve e World Gym ficaram de fora por falta de fonte. Nomes de CT e de profissionais dos resultados não entram.

**Tambaú — prints recebidos em 21/10 (8h34)**, mesma pasta (`tambau-0*.webp`):
- *personal trainer tambaú joão pessoa*: o autocompletar cai na cidade (instagram, "em joão pessoa pb"); PAA de preço — valor de 1 hora, quanto custa em João Pessoa, **3 vezes por semana**, melhor academia em João Pessoa.
- *academia tambaú joão pessoa*: Loop Fit (as unidades no Instagram são PH, Cruz das Armas, Jd. Aeroporto e **Tambiá** — não Tambaú; fora), Smart Fit Tambaú, **Bluefit Tambaú** (orla, horário, telefone, fotos), Bluefit mensalidade; PAA de academia mais cara/melhor/1 mês/Gaviões (preço de academia fica fora, regra da estratégia).
- **Aplicado:** título e H1 com preço e academias; descrição com valor da hora e 3x/semana; FAQs de 1 hora e 3 vezes por semana; FAQ "Quais academias ficam em Tambaú?"; Bluefit Tambaú Orla na Av. Almirante Tamandaré, confirmada no site da rede (meta da página da unidade) e no Wellhub, mesmo endereço; calculadora de preço na seção de valores. Move Trainer (só Wellhub) e nomes de profissionais fora.

**Imbuí — prints recebidos em 21/10 (8h38)**, mesma pasta (`imbui-0*.webp`):
- *personal trainer imbuí*: "salvador imbui", **"imbuí barueri", "imbuí sp", "imbuí sp barueri"**, instagram. Há quem procure um Imbuí em Barueri — a página passou a dizer que é o de Salvador (BA); se existir esse Imbuí na região presencial, é candidato a página própria (pergunta feita ao Renato em 21/10). PAA: 1h de personal, 3 vezes por semana, vale a pena, quanto cobra por aluno.
- *academia imbuí salvador*: **prefeitura de salvador**, **gratuita**, valor, preço, mensalidade, cnpj, telefone; Smart Fit Imbuí / Jorge Amado / "imbui 2" / telefone / horário; Academia Monumental Imbuí (sem fonte, fora).
- **Aplicado:** título e H1 com preço e academias; descrição com valor da hora e 3x/semana; FAQs de 1 hora, 3 vezes por semana e vale a pena; FAQ da academia da Prefeitura reescrita (Academia Salvador + academia de saúde do parque; "gratuita" NÃO entrou — a fonte não diz); lead diz "Imbuí de Salvador, na Bahia"; calculadora de preço e guia "vale a pena" na seção de valores. Mensalidade de academia fica fora (regra da estratégia).

**Porto Alegre repetia o vício de BH.** Os quatro bairros que já existiam
— Moinhos de Vento, Bela Vista, Petrópolis e Três Figueiras — são todos do
mesmo cluster nobre centro-norte, e dois deles usam a mesma forma
("formato 1, formato 2..."). Os dois novos foram escolhidos por zona e por
perfil econômico diferentes, não por CEP nobre.

- **Menino Deus** (Zona Sul, ~31 mil moradores em 230 ha): o bairro tem
  Parque Marinha do Brasil e o trecho 3 da Orla do Guaíba a pé. O ângulo é
  o inventário honesto — tudo o que o espaço público entrega de graça, e a
  única coisa que falta, que é carga progressiva.
- **Cidade Baixa** (boêmio, estudantil, kitnets, Redenção na divisa): o
  ângulo são três restrições reais do bairro — espaço, tempo de
  permanência e o relógio —, e o formato de acompanhamento que sobrevive
  a uma mudança de endereço.

**Salvador (leva 3).** Os cinco bairros que já existiam — Caminho das
Árvores, Itaigara, Horto Florestal, Pituba e Rio Vermelho — cobrem bem o
eixo nobre da orla, e nenhum deles sai dele. Os dois novos foram escolhidos
por contraste.

- **Barra** (o cartão-postal, um dos principais circuitos de Carnaval do
  estado): o ângulo são dois pisos e dois calendários. A areia é tratada
  como superior por padrão e quase ninguém menciona que a praia é
  inclinada — correr paralelo à água é treinar com um pé sempre mais baixo
  que o outro. E o bairro tem duas interrupções previsíveis que derrubam
  rotina: o sol de todo dia, que estreita a janela a dois blocos, e o
  Carnaval, que tira o calçadão por semanas.
- **Brotas** (segundo bairro mais populoso de Salvador, ~80 mil moradores,
  grande desigualdade interna): o ângulo é que o nome do bairro não define
  o preço. A extensão faz o deslocamento do profissional virar variável
  central — ele aparece no preço, quando embutido com honestidade, ou na
  constância, em forma de atraso e cancelamento. O texto se organiza em
  torno das duas perguntas que resolvem isso.

Formas: a Barra usa tabela comparativa de superfícies; Brotas, uma cadeia
de causa (tamanho → distância → preço → constância). Nenhuma repete os
"formatos numerados" do Itaigara, os "perfis" da Pituba, os "endereços
numerados" do Rio Vermelho nem o Q&A do Horto.

**Ainda sem dados.** A leva de BH foi ao ar em 09/09; nenhum relatório novo
chegou desde então. A ordem seguinte continua sendo a da seção 4 — Salvador
(949 impressões, 18 cliques, 5 bairros) é a próxima —, mas a decisão de
acelerar ou parar depende do export de Páginas, não de palpite.
