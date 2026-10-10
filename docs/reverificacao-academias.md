# Reverificação das academias da importação inicial

Iniciada em 08/10/2026.

## Por quê

As academias citadas nas páginas de cidade têm duas origens:

- **Depois de 18/09/2026**: entraram pela regra do CLAUDE.md (página oficial
  da rede, ou duas fontes independentes com o mesmo endereço, conferindo a UF)
  e levam `academiasVerificadasEm`.
- **Importação inicial do repositório** (commit `3bce029`, 18/09/2026): 524
  academias em 170 cidades, sem registro de fonte nem data. Nunca passaram
  pelo critério.

Academia fecha, muda de endereço e troca de nome. Uma entrada errada manda
o leitor a uma porta onde não há o que a página promete.

Até 08/10 a checagem dependia só do resumo da busca. A partir desse dia o
ambiente abre as páginas oficiais das redes (Smart Fit, Bluefit, Selfit,
Panobianco) e Wellhub/TotalPass, o que permite confirmar pela fonte primária.
Skyfit continua recusando acesso (502 do próprio site).

## Método

1. Fila: `npm run audit:academias`, seção REVERIFICAÇÃO, ordenada por
   impressão no Search Console.
2. Cada entrada é conferida pelo critério do CLAUDE.md. Resultado:
   - **confirmada** → fica (detalhe corrigido se a fonte for mais precisa);
   - **sem fonte suficiente** → sai;
   - **endereço divergente entre fontes** → fica só o nome.
3. A cidade ganha `academiasVerificadasEm` e sai da fila.
4. `atualizadoEm` sobe só se a página mudou. Cidade em que tudo se confirmou
   sem alteração não sobe a data (mesma lógica de São Miguel do Oeste).
5. Ritmo: depende de verificação externa → lotes pelo limite de checagem
   honesta. Primeira leva de 2 cidades, revisada item a item.

## Registro

### 08/10/2026 — leva 1

**Belo Horizonte/MG** (2.382 impr.) — página mudou.

| entrada | resultado | fonte |
|---|---|---|
| Bodytech (Savassi, Belvedere, Ponteio) | confirmada | Wellhub (três unidades) + Diário do Comércio (13 anos em Minas, mesmas três unidades) |
| Smart Fit | confirmada; detalhe trocado de "dezenas de unidades… e shoppings" pelas quatro unidades conferidas | smartfit.com.br/academias/savassi (R. Fernandes Tourinho, 195 – Funcionários), /centro-1 (Av. Amazonas, 303), /gutierrez (R. André Cavalcanti, 190), /shopping-cidade (R. dos Tupis, 337) |
| Cia Athletica (Belvedere) | **removida** — nenhuma fonte mostra unidade em BH; a lista de contatos da rede não tem MG | — |
| Academia ao ar livre do Parque Municipal | **removida** — só um guia cita "aparelhos de ginástica" no parque, sem nome nem local | — |

**Salvador/BA** (2.025 impr.) — página mudou.

| entrada | resultado | fonte |
|---|---|---|
| Rede Alpha Fitness (Pituba, Shopping Barra, Paralela) | confirmada | Wellhub (Pituba no Shopping Ponto 7, Shopping Barra, Shopping Paralela) + Portal do Franchising |
| Bodytech | confirmada; detalhe passa a nomear o Shopping da Bahia | Wellhub (Av. Tancredo Neves, 148 – Caminho das Árvores) + página da unidade em bodytech.com.br |
| Smart Fit (Pituba) | confirmada | smartfit.com.br/academias/pituba (Av. Manoel Dias da Silva, 2053) |
| Academia Salvador (Dique do Tororó) | confirmada; programa com 14 unidades em jan/2025 | A Tarde, Bahia Notícias, Correio (inauguração jun/2024) |

Saldo da leva: 8 entradas → 6 mantidas, 2 removidas, 2 detalhes corrigidos.
As duas remoções em BH são o tipo de erro que motivou a reverificação.

### 08/10/2026 — leva 2 (fora da rotina: páginas editadas pela pesquisa de palavras-chave)

**Alphaville/SP** — página mudou.

| entrada | resultado | fonte |
|---|---|---|
| Ironberg Alphaville | confirmada; sai o bairro "Alphaville Empresarial" (o Wellhub dá Jardim Santa Cecília) | ironberg.com.br/alphaville + TotalPass + Wellhub (Estrada Aldeinha, 181) |
| NitroGym Tamboré | confirmada | Mercado&Consumo (inauguração, jul/2026, ~3 mil m²) + TotalPass (Av. Piracema, 669) |
| Arena 18 | confirmada | arena18.com.br + Wellhub (R. Mário Quintana, 144) |
| Bodytech Iguatemi Alphaville | confirmada; sai "cerca de 1.000 m² no piso lazer" (nenhuma fonte) | lista de academias da Bodytech + Wellhub (Al. Rio Negro, 111) |
| Academia 24h Premium | confirmada; saem "Alphaville Centro" e "funcionamento 24 horas" (o Wellhub mostra 5h–23h e bairro Alphaville Industrial) | Wellhub + TotalPass (Al. Grajaú, 525) |
| Academia Gaviões 24h Alphaville | confirmada; nome completo da unidade e rua | Wellhub (Av. Juruá, 253, aberta 24h) + vaga de emprego no Jooble (mesmo número) |
| Smart Fit | confirmada; "unidades em Alphaville e no entorno" vira "unidades na Alameda Araguaia" | smartfit.com.br (Shopping Flamingo, Sodimac Alphaville, Carrefour Hiper Tamboré) |
| Alphaville Tênis Clube | confirmado; detalhe vago trocado por rua e torneio | ITF (sede do W35 Barueri 2026) + guia Buser (Al. Paris, 555) |
| Estúdios boutique e boxes de CrossFit | genérica, não verificável — fica como descrição | — |

**Barueri/SP** — tudo confirmado, lista sem mudança (a página mudou pelas FAQs).

| entrada | resultado | fonte |
|---|---|---|
| Ironberg, NitroGym, Arena 18 | confirmadas | as mesmas de Alphaville |
| Smart Fit (Centro, Av. Zélia, Parque Shopping Barueri) | confirmada | smartfit.com.br (Av. 26 de Março, 701; Av. Zélia, 1250; R. Gen. Pedro Rodrigues da Silva, 400) |
| Bluefit (Bethaville e Tamboré) | confirmada | bluefit.com.br/unidade/barueri (Av. Trindade, 344) e /tambore (Av. Tucunaré, 1498) |
| Academias de condomínio · Praças do Parque Linear | genéricas | — |

Saldo da leva: 16 entradas → 0 removidas, 6 detalhes corrigidos, 3
genéricas mantidas como descrição. Padrão que se repete: o nome existe, o
**detalhe** é que foi escrito sem fonte ("24 horas", metragem, bairro).

### 08/10/2026 — leva 3 (Tamboré, página editada pela pesquisa de palavras-chave)

| entrada | resultado | fonte |
|---|---|---|
| NitroGym Tamboré | confirmada | ver leva 2 (Av. Piracema, 669) |
| Academia Tamboré | **removida** — nenhuma fonte; a busca só traz imóveis do bairro | — |
| Bluefit Tamboré | confirmada | bluefit.com.br/unidade/tambore (Av. Tucunaré, 1498) |
| Estúdios do Centro Empresarial Tamboré | genérica | — |
| Bodytech Iguatemi Alphaville | confirmada | ver leva 2 (Al. Rio Negro, 111) |

Saldo: 5 entradas → 1 removida, 1 genérica, 3 mantidas.

### 08/10/2026 — leva 4 (Santana de Parnaíba e Aldeia da Serra)

**Santana de Parnaíba/SP** — página mudou.

| entrada | resultado | fonte |
|---|---|---|
| Bodytech Iguatemi Alphaville | confirmada | ver leva 2 |
| Smart Fit | confirmada como rede, mas **sem unidade na cidade**: a busca de unidades do site oficial para Santana de Parnaíba devolve só Barueri, Cajamar, Itapevi e Jandira. Detalhe reescrito | smartfit.com.br/academias/sp/santana-de-parnaiba |
| Allp Fit | **removida** — nenhuma fonte de unidade na cidade; também sai do texto corrido (`mercado` e `academias`) | — |
| The One Aldeia da Serra | **removida** — nenhuma fonte | — |
| Boxes de CrossFit e estúdios | genérica | — |

**Aldeia da Serra/SP** — página mudou (a The One estava aqui também).

| entrada | resultado | fonte |
|---|---|---|
| Scelta Academia | confirmada | Instagram e Facebook da unidade (Av. dos Pássaros, 451) + Wellhub/TotalPass da rede |
| The One Aldeia da Serra | **removida** — nenhuma fonte para "Av. da Barra" nem para o nome | — |
| Área Fitness | confirmada (grafia corrigida, com acento) | Instagram da academia (Av. dos Patos, 35) |
| Studio Fight Aldeia | **removida** — nenhuma fonte; existe um "Pro Fight Studio" na Aldeia, mas é outro nome e a Parte B não troca entrada por candidata nova | — |

Saldo: 9 entradas → 4 removidas, 1 detalhe reescrito, 1 genérica.
A Aldeia da Serra fica com 2 academias; completar é tarefa à parte.

**Acumulado do dia (levas 1–4, 7 cidades):** 7 entradas removidas por
falta de qualquer fonte, 9 detalhes corrigidos.

### 08/10/2026 — leva 5 (Osasco, página editada pela pesquisa de palavras-chave)

| entrada | resultado | fonte |
|---|---|---|
| Smart Fit | confirmada; "KM 18 (Vila Yara) e Av. Getúlio Vargas" estava errado — não há unidade na Getúlio Vargas, e KM 18 e Vila Yara são unidades diferentes. Detalhe reescrito com as 5 localizações oficiais | smartfit.com.br/academias/sp/osasco (Av. dos Autonomistas 896 e 1400, R. Dona Primitiva Vianco 400, R. Prof. José Azevedo Minhoto 324 – KM 18, R. Luiz Henrique de Oliveira 46 – Quitaúna, Av. Flora 1555 – Jd. Jaguaribe) |
| Bluefit | confirmada | bluefit.com.br/unidade/osasco (Centro), /km-18, /novo-osasco |
| Academias ao ar livre municipais | genérica; detalhe corrigido — saem "Chico Mendes" e "aulas públicas da SEREL" (sem fonte); fica o Dionísio Álvarez Mateos | guia QuintoAndar (aparelhos de ginástica ao ar livre) |

Também no texto da página: a descrição do Parque Chico Mendes perdeu
"academia ao ar livre gratuita" e o horário (sem fonte; ficam área, trilhas,
quadras cobertas e horta — Metrô/EIA e boletim da Prefeitura), e saiu o item
"Aulas públicas da SEREL".

### 09/10/2026 — leva 6 (rotina, Parte B: Porto Alegre e João Pessoa)

**Porto Alegre/RS** — página mudou.

| entrada | resultado | fonte |
|---|---|---|
| Bodytech (Iguatemi Porto Alegre) | confirmada | página da unidade no site da Bodytech + Wellhub (Av. João Wallig, 1800) |
| Smart Fit | confirmada; detalhe ganha bairros conferidos | smartfit.com.br/academias/rs/porto-alegre (R. Sete de Setembro 709 – Centro, Av. Getúlio Vargas 1644 – Menino Deus, R. Anita Garibaldi 600 – Mont Serrat e outras 4) |
| Moinhos Fitness | confirmada; sai "maior rede local da região metropolitana" (é autodescrição da rede) | moinhosfitness.com.br + Wellhub (Azenha, Borges, Ipiranga, República e outras) |
| Academias ao ar livre dos parques (Redenção e Marinha do Brasil) | **removida** — nenhuma fonte; os guias do Marinha falam de quadras e pistas, não de academia. Sai também do destaque "parques com academias ao ar livre" | — |

**João Pessoa/PB** — página mudou.

| entrada | resultado | fonte |
|---|---|---|
| Smart Fit | confirmada; "no Geisel" não está na lista oficial e "Av. João Câncio" é rua — detalhe reescrito com as 5 unidades oficiais | smartfit.com.br/academias/pb/joao-pessoa |
| Selfit | confirmada (Mag Shopping, Tambauzinho/Epitácio Pessoa, Mangabeira Shopping) | página de João Pessoa no site da Selfit |
| Estúdios boutique | genérica | — |
| Academias ao ar livre | confirmada só na orla de Cabo Branco (inaugurada em ago/2023, com orientação da Sejer); sai o Parque Sólon de Lucena | A União + Jornal da Paraíba |

Também no texto de João Pessoa: a descrição do Parque Sólon de Lucena
trocou "academias ao ar livre" por "aparelhos de ginástica — em fevereiro
de 2026, parte deles estava danificada" (reportagem de fev/2026).

Saldo: 8 entradas → 1 removida, 4 detalhes corrigidos, 1 genérica.

### 10/10/2026 — leva 7 (rotina, Parte B: Florianópolis e Brasília)

**Florianópolis/SC** — página mudou.

| entrada | resultado | fonte |
|---|---|---|
| Ironberg Floripa | confirmada; detalhe ganha a rua | ironberg.com.br/floripa (R. Antônio Costa, 10 – Itacorubi) + TotalPass |
| Smart Fit | confirmada; "no Estreito" não está na lista oficial — detalhe com as 5 unidades da cidade | smartfit.com.br/academias/sc/florianopolis (Centro, Agronômica, Saco Grande, Coqueiros, Jardim Atlântico) |
| Estúdios e clubes premium | genérica | — |
| Academias ao ar livre da Beira-Mar Norte | **removida** — nenhuma fonte; academia ao ar livre só aparece no projeto da futura marina. Sai também da descrição do parque e do destaque | — |

**Brasília/DF** — página mudou.

| entrada | resultado | fonte |
|---|---|---|
| Bodytech (5 unidades) | confirmada | Wellhub (Asa Sul, Asa Norte, Sudoeste, Lago Sul – Setor de Clubes) + página oficial da unidade Lago Norte – Iguatemi + Metrópoles (Lago Sul) |
| Smart Fit | confirmada; "e nas principais regiões administrativas" não verificado na busca de unidades — detalhe com os setores conferidos | smartfit.com.br/academias/df/brasilia |
| Estúdios boutique | genérica | — |
| Circuitos do Parque da Cidade | confirmada em parte: os percursos de 2 e 4 km (iluminação nova) e o de ~10 km têm fonte; o de 6 km não | Jornal de Brasília (fev/2024 e nov/2024) |

Saldo: 8 entradas → 1 removida, 4 detalhes corrigidos, 2 genéricas.
