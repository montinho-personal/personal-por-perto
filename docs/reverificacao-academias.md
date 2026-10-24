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

### 11/10/2026 — leva 8 (rotina, Parte B: Goiânia e Teresina)

**Goiânia/GO** — página mudou.

| entrada | resultado | fonte |
|---|---|---|
| Smart Fit e Bluefit | confirmadas; sai "algumas com funcionamento 24h" (sem fonte), também do texto da FAQ; detalhe com bairros conferidos | smartfit.com.br/academias/go/goiania (Setor Bueno, Setor Oeste, Jardim Goiás e outras) + bluefit.com.br (Av. 85, Praça do Sol, Alto da Glória e outras) |
| Bodytech | confirmada; detalhe ganha a rua | bodytech.com.br/academia/marista (Rua 147, 75) + Wellhub |
| Academias de fisiculturismo e alto rendimento | genérica | — |
| Estações de ginástica dos parques | confirmada só no Vaca Brava (vários guias); o Flamboyant tem uma fonte só e sai da entrada. O destaque "parques com academia ao ar livre (Flamboyant, Bosque dos Buritis)" passa a citar só o Vaca Brava | QuintoAndar, Mais Goiás |

**Teresina/PI** — página mudou.

| entrada | resultado | fonte |
|---|---|---|
| Smart Fit | confirmada | smartfit.com.br/academias/pi/teresina (Fátima, Noivos e outras) |
| Selfit | confirmada; "rede de baixo custo com presença na capital" vira unidades conferidas | selfitacademias.com.br (Frei Serafim, Homero Castelo Branco – Jóquei, Riverside Shopping e outras 6) |
| Academias locais | genérica | — |
| Estrutura dos parques (Potycabana, Cidadania) | confirmada como estrutura (pistas e quadras); a "academia ao ar livre" do Potycabana, citada na FAQ, não tem fonte e sai | guias e estudo acadêmico sobre o Parque da Cidadania |

Saldo: 8 entradas → 0 removidas, 5 detalhes corrigidos, 2 genéricas.

### 12/10/2026 — leva 9 (rotina, Parte B: São Paulo e Rio de Janeiro) — PARCIAL

Leva incompleta, e por isso as duas cidades **continuam na fila** (sem
`academiasVerificadasEm`). Os sites oficiais de Bodytech, Bio Ritmo e Cia
Athletica, os blogs dessas redes, o prefeitura.rio e o Catraca Livre estão
bloqueados na rede do ambiente. Para essas marcas sobra só o Wellhub, que é
fonte única. Remover marca conhecida por falta de acesso não deixa a página
mais certa, então o que não deu para fechar fica pendente. Foi corrigido só
o que a fonte oficial aberta (smartfit.com.br) permitiu.

**São Paulo/SP** — página mudou.

| entrada | resultado | fonte |
|---|---|---|
| Smart Fit | confirmada. Sai "fundada na capital em 2001, hoje a maior rede da América Latina, presente em praticamente todos os bairros", que não tem fonte (o próprio site fala em "mais de 2.000 academias pela América Latina"). Entram bairros conferidos. A mesma frase sai do texto `mercado`, junto com "estações de metrô" | smartfit.com.br/academias/sp/sao-paulo/{moema,pinheiros,tatuape} (Moema, Pinheiros, Tatuapé, Bela Vista e outros) |
| Bio Ritmo (Itaim Bibi, Campo Belo, Morumbi) | pendente. TotalPass confirma Campo Belo (R. Barão de Jaceguai, 1409) e Morumbi (Av. Giovanni Gronchi, 4415). Itaim só aparece no site oficial, que está bloqueado | totalpass.com |
| Bodytech | pendente: só Wellhub (Pátio Paulista, Pinheiros Eldorado, Itaim, JK e outras) | wellhub.com |
| Companhia Athletica (Morumbi, Itaim, Anália Franco) | pendente. O Wellhub dá Anália Franco e MorumbiShopping; Itaim não apareceu em nenhuma fonte e é o primeiro candidato a sair | wellhub.com |
| Estúdios boutique e boxes de CrossFit | genérica | — |

**Rio de Janeiro/RJ** — página mudou.

| entrada | resultado | fonte |
|---|---|---|
| Smart Fit | confirmada. "Dezenas de unidades em todas as zonas" vira bairros conferidos | smartfit.com.br/academias/rj/rio-de-janeiro/{copacabana,tijuca,barra-da-tijuca} (7 em Copacabana, 6 na Barra, 4 na Tijuca, Centro) |
| Bio Ritmo | confirmada por TotalPass (Copacabana, Av. N. Sra. de Copacabana, 748; Cine Leblon, Av. Ataulfo de Paiva, 391; Pepê, Av. do Pepê, 1360). Falta a segunda fonte para fechar o detalhe "em expansão na Zona Sul" | totalpass.com |
| Bodytech | pendente: só Wellhub (Copacabana 801 e 446, Leblon Ataulfo 467, Shopping Leblon) | wellhub.com |
| Academias ao ar livre da orla | pendente, sem fonte aberta. Se continuar assim na próxima tentativa, sai, como em BH, POA e Floripa | — |

Para fechar: liberar bodytech.com.br, bioritmo.com.br, ciaathletica.com.br
e prefeitura.rio, ou pedir print ao Renato.

### 13/10/2026 — leva 10 (rotina, Parte B: São Paulo e Rio de Janeiro, fechamento da leva 9)

Com a rede liberada, as fontes oficiais que faltavam abriram e as duas
cidades saem da fila. Smart Fit já tinha sido corrigida na leva 9.

**São Paulo/SP**

| entrada | resultado | fonte |
|---|---|---|
| Smart Fit | confirmada (leva 9) | smartfit.com.br |
| Bio Ritmo (Itaim Bibi, Campo Belo, Morumbi) | confirmada sem mudança; "marca do grupo Smart Fit" confere (o site é operado pelo Grupo Smart Fit) | bioritmo.com.br/unidades (Itaim, Campo Belo, Morumbi) + TotalPass |
| Bodytech | confirmada; sai "referência no segmento boutique, com superunidades que somam piscina e lutas", que não tem fonte; entram unidades conferidas | Wellhub (Pátio Paulista, R. Treze de Maio, 1947; Pinheiros, Av. Rebouças, 3970; Itaim, R. Leopoldo Couto de Magalhães Jr., 500; Complexo JK, Av. Pres. Juscelino Kubitschek, 2041) + páginas de unidade em bodytech.com.br indexadas com os mesmos nomes (o site é SPA e não entrega o endereço ao curl — mesmo critério de Goiânia) |
| Companhia Athletica | confirmada; **sai "Itaim"**: a página oficial lista MorumbiShopping, Shopping Anália Franco e Kansas, e nenhuma fonte mostrou unidade no Itaim | ciaathletica.com.br + Wellhub (Av. Roque Petroni Jr., 1089; Shopping Anália Franco, Av. Regente Feijó) |
| Estúdios boutique e boxes de CrossFit | genérica | — |

**Rio de Janeiro/RJ**

| entrada | resultado | fonte |
|---|---|---|
| Smart Fit | confirmada (leva 9) | smartfit.com.br |
| Bodytech | confirmada; "Ipanema" e "Barra da Tijuca" saem do detalhe (só em resumo de busca); ficam Copacabana e Leblon, também no texto `mercado` | Wellhub (Copacabana 801 e 446; Leblon Ataulfo 467; Shopping Leblon) + páginas de unidade indexadas em bodytech.com.br |
| Bio Ritmo | confirmada; "em expansão na Zona Sul" vira unidades conferidas | bioritmo.com.br/unidades (Copacabana, Cine Leblon, Pepê, Shopping Metropolitano Barra) + TotalPass |
| Academias ao ar livre da orla | confirmada como equipamento público; "ao longo de Copacabana, Ipanema e Leblon" vira o que a prefeitura diz | prefeitura.rio (20/12/2022): parceria Prefeitura–MUDE "instalou academias ao ar livre, de aço inox, pelas orlas e nas principais praças da cidade" |

Saldo: 9 entradas → 0 removidas, 1 bairro removido (Cia Athletica Itaim), 5 detalhes corrigidos, 1 genérica.

### 14/10/2026 — leva 11 (rotina, Parte B: Uberlândia e Curitiba)

Prefeituras de Uberlândia e Curitiba devolvem 403 (Akamai) ao acesso direto;
o que vem delas foi lido no índice de busca das URLs oficiais e usado só
para equipamento público e números de parque, nunca para nome de empresa.

**Uberlândia/MG** — página mudou.

| entrada | resultado | fonte |
|---|---|---|
| Smart Fit | confirmada; "Centro e Av. Rondon Pacheco" vira as quatro unidades abertas | smartfit.com.br/academias/{uberlandia-centro (R. Cruzeiro dos Peixotos, 343), uberlandia (Av. Rondon Pacheco, 920, Vila Saraiva), bahamas-rondon-pacheco (Av. Rondon Pacheco, 4800, Tibery), custodio-pereira (Av. Floriano Peixoto, 4680)} |
| Selfit | **removida**: a lista oficial completa (250 unidades) tem uma só em MG, em Belo Horizonte; sai também do `mercado` e do `ondeTreinar` | selfitacademias.com.br/unidades/listar |
| Academias de bairro e estúdios | genérica; sai "centenas" e "público premium da zona sul", sem fonte | — |
| Academias ao ar livre do Parque do Sabiá | confirmada como equipamento público; sai "cerca de 11, uma acessível" (número só no índice de busca); a "Gávea" sai da frase das estações (a prefeitura só fala em pista de caminhada) | uberlandia.mg.gov.br (índice de busca): academias no Sabiá; troca de aparelhos no Parque Linear do Uberabinha (08/12/2020) |

**Curitiba/PR** — página mudou.

| entrada | resultado | fonte |
|---|---|---|
| Smart Fit | confirmada sem mudança no detalhe; "dezenas de unidades" no `mercado` vira "várias unidades" | smartfit.com.br/academias/{batel (Av. Silva Jardim, 2522), agua-verde (Av. República Argentina, 900), champagnat, shopping-curitiba} |
| Bodytech (Shopping Crystal, Batel) | confirmada; mesmo critério de Goiânia e SP (Wellhub lido + página oficial indexada, site SPA) | Wellhub (R. Comendador Araújo, 731, Batel) + bodytech.com.br/shopping-crystal no índice |
| Estúdios de personal e funcional | genérica; sai "alta densidade" | — |
| Equipamentos do Parque Barigui | confirmada; "junto às pistas" vira o que a prefeitura descreve | curitiba.pr.gov.br (índice de busca): academia ao ar livre com aparelhos de peso do corpo |

Também corrigido no mesmo arquivo: "pista de 5,4 km" → percurso de 5,2 km,
predominantemente plano, e volta ao lago de ~3,3 km (prefeitura: 5,2 km e
3,28 km). "Mais de 200 km de ciclovias" confere (manchete da prefeitura).

Saldo: 8 entradas → 1 removida (Selfit Uberlândia), 4 detalhes corrigidos,
3 genéricas/públicas ajustadas.

### 15/10/2026 — leva 12 (rotina, Parte B: Recife e Londrina)

**Recife/PE** — página mudou.

| entrada | resultado | fonte |
|---|---|---|
| Bodytech | confirmada; "no Shopping Recife" vira "unidade Shopping Recife, na Av. Fernando Simões Barbosa" — o endereço é o Wecom Center, ao lado, e nenhuma fonte põe a unidade dentro do shopping | Wellhub (Av. Fernando Simões Barbosa, 266, Boa Viagem, Recife-PE) + nome da unidade em páginas oficiais da Bodytech indexadas (site SPA, mesmo critério de SP e Curitiba) |
| Smart Fit | confirmada; bairros conferidos acrescentados | smartfit.com.br/academias/{torre (R. José Bonifácio, 1315), shopping-recife (R. Padre Carapuceiro, 777), aflitos (Av. Cons. Rosa e Silva, 1832), madalena}, todas `opened:true` |
| Estúdios de funcional e crossfit | genérica; sai "concentrados" e "Casa Forte" (nenhum box achado lá) | Wellhub/Gympass: boxes em Boa Viagem |
| Parque da Jaqueira | confirmada como equipamento público; sai "arborizadas" e "trilhas" do texto | Prefeitura do Recife, apresentação de parques (PDF, 2023): 71.552 m², pista de cooper e ciclovia |

Também no arquivo: `academias` e FAQ sem "Casa Forte/Espinheiro" para estúdios.

**Londrina/PR** — página mudou. Fica com 2 entradas.

| entrada | resultado | fonte |
|---|---|---|
| Smart Fit | confirmada; "pontos centrais" vira as três unidades abertas (Av. Celso Garcia está em pré-inauguração e não entra) | smartfit.com.br/academias/{aurora-shopping, quintino, londrina-av-maringa}, `opened:true` |
| Academias locais bem avaliadas | **removida**: não nomeia academia e "bem avaliadas"/"forte oferta" não têm fonte | — |
| Boxes de crossfit e estúdios de funcional | **removida**: "cena aquecida pelo público universitário" sem fonte | — |
| Academia ao ar livre do Lago Igapó | confirmada; sai "revitalizada" (a notícia achada fala em revitalização futura) | blog.londrina.pr.gov.br (Prefeitura, 2010): academias instaladas no Lago Igapó II |

Também no arquivo: `mercado`, descrição do Igapó, `academias` e FAQ sem "bem avaliadas", "crossfit aquecido" e "revitalizada".

Saldo: 8 entradas → 2 removidas (genéricas de Londrina), 5 detalhes corrigidos, 1 confirmada sem mudança no nome.

### 16/10/2026 — leva 13 (rotina, Parte B: Joinville e Belém)

**Joinville/SC** — página mudou.

| entrada | resultado | fonte |
|---|---|---|
| Smart Fit | confirmada; "vários bairros" vira as 4 unidades abertas | smartfit.com.br/academias/{saguacu (R. João Pessoa, 276), aventureiro (R. Tuiuti, 2295), bucarein (R. São Paulo, 910), shopping-estacao-joinville (Av. Getúlio Vargas, 1446)}, `opened:true` |
| Bluefit e Pratique | vira **só Bluefit**; **Pratique sai** (só Wellhub; site oficial bloqueado) e sai "presença consolidada" | bluefit.com.br/unidade/joinville (R. Iririú, 1531, Iririú) + Wellhub |
| Academias locais ("forte oferta no América…") | **removida**: sem nome e sem fonte | — |
| Estrutura pública | confirmada; Expoville sai da lista; vira Academia da Melhor Idade e trilha no Zoobotânico (visitação gratuita) e academias da melhor idade em praças | joinville.sc.gov.br/servicos/visitar-parque-zoobotanico/; PDFs da Prefeitura no índice de busca (praças) |

Também no arquivo: Pratique sai do `mercado`, `academias` e FAQ; "pista de caminhada… mirante" do Morro da Boa Vista vira o que a Prefeitura descreve.

**Belém/PA** — página mudou.

| entrada | resultado | fonte |
|---|---|---|
| Bodytech | confirmada; sai "premium"; vira "unidade Nazaré, na Av. Governador José Malcher" | Wellhub (Av. Gov. José Malcher, 66040-281, Belém-PA) + blog oficial da Bodytech citando a unidade Nazaré, em Belém (índice de busca; site SPA, mesmo critério de SP, Curitiba e Recife) |
| Smart Fit | confirmada; vira as unidades oficiais (9 abertas em Belém) | smartfit.com.br/academias/{patio-belem, boulevard, bosque-mall-belem, shopping-castanheira, humaita, dr-freitas, mangueirao, maguari, mario-covas} |
| Academias locais ("boa cobertura…") | **removida**: sem nome e sem fonte | — |
| Parque do Utinga | confirmada sem mudança | ideflorbio.pa.gov.br: pista de ~4 km, faixas para pedestres e ciclistas; entrada gratuita |

Também no arquivo: "nos bairros nobres" e "Smart Fit… no Umarizal" corrigidos (as unidades ficam em Batista Campos, Reduto e outros bairros).

Saldo: 8 entradas → 2 removidas (genéricas), Pratique retirada da entrada conjunta, 5 detalhes corrigidos, 1 confirmada sem mudança.

### 17/10/2026 — leva 14 (rotina, Parte B: São Luís e Fortaleza)

**São Luís/MA** — página mudou. Fica com 3 entradas.

| entrada | resultado | fonte |
|---|---|---|
| Smart Fit | confirmada; "Renascença" vira "Jardim Renascença", como na página da unidade | smartfit.com.br/academias/{holandeses, holandeses-barramar (Calhau), cohama, manhattan-center-iii (Jardim Renascença), turu, rio-anil-shopping (Turu)}, `opened:true`; 10 unidades abertas na cidade (Maiobão e Mall Lumier ficam em Ribamar e Paço do Lumiar) |
| Bodytech | confirmada; ganha o bairro (Cohama) | Wellhub (Av. Daniel de la Touche, 987, Cohama, 65074-115) + nome da unidade no blog oficial (blog.bodytech.com.br), mesmo critério de SP, Curitiba, Recife e Belém. Ressalva: um trecho de busca de admin.bodytech.com.br trazia "UNIDADE FECHADA - SPP SLUIS"; a página não abre aqui, nenhuma notícia fala em fechamento e Wellhub e Reclame Aqui seguem tratando a unidade como ativa. Rechecar na próxima rodada. |
| Boxes de crossfit e academias locais | **removida**: sem nome e sem fonte para "cena forte no Renascença e no Calhau" | — |
| Academias ao ar livre | corrigida; fica só a Lagoa da Jansen | Governo do MA (www3.ma.gov.br/agenciadenoticias/?p=285591, 7 estações) + O Imparcial (06/2026). Parque do Bom Menino sai: só uma matéria de 2020 |

Também no arquivo: "academias locais fortes", "boxes de crossfit" e "cena de crossfit e funcional" saem de `mercado`, `academias`, `destaquesFitness` e FAQ. Pendência anotada: o card do Parque do Bom Menino em `ondeTreinar` ainda cita "academia ao ar livre"; fica para a revisão do conteúdo, fora do escopo da lista.

**Fortaleza/CE** — página mudou. Fica com 3 entradas.

| entrada | resultado | fonte |
|---|---|---|
| Bodytech | confirmada; sai "cerca de 2.000 m² e quadra de beach tennis" (só notas do Portal IN anteriores à inauguração, e uma coluna antiga citava 1.500 m²); vira "na Av. Washington Soares" | Wellhub (Av. Washington Soares, 85, Edson Queiroz) + Portal IN (inauguração no Iguatemi Bosque) |
| Smart Fit | corrigida; "Praia de Iracema" sai (a unidade "Iracema" fica no Meireles, R. Carlos Vasconcelos, 284); vira Meireles, Aldeota, North Shopping e vários bairros | smartfit.com.br/academias/{iracema, meireles, barbosa-de-freitas, santos-dumont, north-shopping…}, `opened:true`; 26 unidades abertas na cidade |
| Estúdios de funcional | **removida**: sem nome e sem fonte | — |
| Academia ao ar livre da Beira-Mar | confirmada sem mudança | fortaleza.ce.gov.br (ampliação, 07/2025) + O Povo (abertura, 10/2024) |

Também no arquivo: "Iracema", "2.000 m²", "inúmeros estúdios" e "estúdios do eixo Meireles–Aldeota" corrigidos em `mercado`, `academias`, `destaquesFitness` e FAQ.

Saldo: 8 entradas → 2 removidas (genéricas), 4 corrigidas, 2 confirmadas sem mudança.

### 18/10/2026 — leva 15 (rotina, Parte B: Blumenau e Maceió)

**Blumenau/SC** — página mudou. Fica com 3 entradas.

| entrada | resultado | fonte |
|---|---|---|
| Bodytech | corrigida: não fica na Avenida Brasil, e sim no Shopping Neumarkt (R. 7 de Setembro, 1213, Centro); sai "premium" (é posicionamento da rede, não da unidade) | bodytech.com.br/academia/shopping-neumarkt (índice de busca; site SPA) + Wellhub com endereço — mesmo critério de SP, Curitiba, Recife, Belém e São Luís |
| Smart Fit | corrigida: "unidades" vira a única unidade aberta | smartfit.com.br/academias/blumenau (Via Expressa Paul Fritz Kuehnrich, 1600, Itoupava Norte), `opened:true`; varredura do sitemap da rede: é a única com cidade Blumenau/SC |
| Academias locais tradicionais | **removida**: sem nome e sem fonte | — |
| Parque Ramiro Ruediger | corrigida: não fica "no centro" (R. Alberto Stein, bairro Velha, ao lado da Vila Germânica); sai "academia ao ar livre" (sem fonte viva) e "gratuitas" (só blog de turismo); fica pista, ciclovia e quadras | NSC Total (parque de 40 mil m² com pista, ciclovia, quadras, skate) + trechos de páginas da Prefeitura no índice |

Também no arquivo: card do parque em `ondeTreinar` (sai "700 m", "lago" e "academia ao ar livre"), `mercado`, `academias`, `destaquesFitness` e FAQ.

**Maceió/AL** — página mudou. Fica com 3 entradas. UF conferida em todas as fontes (não é Macaé/RJ).

| entrada | resultado | fonte |
|---|---|---|
| Smart Fit | confirmada sem mudança | smartfit.com.br/academias/ponta-verde (R. Prof. Sandoval Arroxelas, 360) e mais 7 unidades abertas na cidade |
| Selfit | confirmada sem mudança | selfitacademias.com.br/academias/alagoas/maceio/{selfit-ponta-verde, mangabeiras, parque-shopping-maceio} |
| Estúdios da orla | **removida**: sem nome e sem fonte | — |
| Estrutura pública dos calçadões | corrigida: "quadras gratuitas de Pajuçara a Jatiúca" não se sustenta (só a Arena Pajuçara); vira ciclovia, academias ao ar livre gratuitas (com inscrição) e Faixa Verde | maceio.al.gov.br (nota de 15/09/2026 sobre a orla; página "Academias do Povo" da Semesp; Faixa Verde de 2,5 km) |

Também no arquivo: "academias e estúdios nos bairros nobres" e "quadras gratuitas" corrigidos em `mercado`, `academias` e FAQ. Pendência anotada: o card da orla de Pajuçara em `ondeTreinar` cita "quadras poliesportivas"; fica para a revisão de conteúdo.

Saldo: 8 entradas → 2 removidas (genéricas), 4 corrigidas, 2 confirmadas sem mudança.

### 19/10/2026 — leva 16 (rotina, Parte B: Natal e Aracaju)

**Natal/RN** — página mudou. **Fica com 1 entrada** (completar é tarefa à parte).

| entrada | resultado | fonte |
|---|---|---|
| Smart Fit | corrigida: "Esperança" é o nome da unidade, não o bairro (Av. Capitão-Mor Gouveia, 1361, Nossa Senhora de Nazaré); vira "Lagoa Nova, Cidade Satélite, Alecrim, Nossa Senhora de Nazaré e Partage Norte Shopping, entre outras" | smartfit.com.br/academias/{lagoa-nova, cidade-satelite, alecrim, esperanca, partage-norte-shopping-natal…}, `opened:true`; 12 unidades abertas em Natal (pajucara-natal e av-nevaldo-rocha em pré-venda, fora; as de Parnamirim e São Gonçalo do Amarante, fora) |
| Academias de bairro e estúdios de funcional | **removida**: sem nome; "dezenas de opções" sem fonte | — |
| Academia ao ar livre de Ponta Negra | **removida**: nenhuma fonte aberta confirma academia no calçadão (só trechos de busca sobre projeto de requalificação e equipamentos na comunidade da Lagoinha); natal.rn.gov.br deu 503, Agora RN e Tribuna do Norte bloqueados aqui | — |

Também no arquivo: "Esperança" e "dezenas de academias/estúdios" corrigidos em `mercado` e `academias`.

**Aracaju/SE** — página mudou. Fica com 2 entradas.

| entrada | resultado | fonte |
|---|---|---|
| Smart Fit | confirmada; precisão: a unidade "Santa Maria" fica no Marivan; o Shopping Praia Sul existe (Av. Melício Machado, Aruana) | smartfit.com.br/academias/{jardins, siqueira-campos, aracaju-santa-maria, shopping-praia-sul…}, `opened:true`; 10 unidades abertas em Aracaju (goncalo-rolemberg-leite em pré-venda, fora; a de N. Sra. do Socorro, fora) |
| Estúdios de funcional e academias de bairro | **removida**: sem nome; "concentrados nos Jardins e na 13 de Julho" sem fonte | — |
| Academias ao ar livre da Orla de Atalaia | corrigida: sai "gratuitas e abertas 24 horas" (sem fonte); vira "ao longo dos 6 km da orla" | Prefeitura de Aracaju, "Orlas de Aracaju encantam turistas…" (aracaju.se.gov.br/noticias/99991/, lida pela API pública do portal): 6 km, academias ao ar livre ao longo da orla |

Também no arquivo: `mercado`, `academias`, `destaquesFitness` e FAQ (estúdios nos Jardins). **Pendência anotada:** o card da Orla de Atalaia em `ondeTreinar`, o calçadão da 13 de Julho e a FAQ "A orla 24 horas muda a rotina…" afirmam "aberta 24 horas" e "equipamentos gratuitos", sem fonte encontrada; ficam para a revisão de conteúdo, fora do escopo da lista.

Saldo: 6 entradas → 3 removidas (2 genéricas, 1 sem fonte), 2 corrigidas, 1 confirmada sem mudança.

### 20/10/2026 — leva 17 (rotina, Parte B: Santo André e Campinas)

**Santo André/SP** — página mudou. Fica com 3 entradas.

| entrada | resultado | fonte |
|---|---|---|
| Smart Fit | confirmada; as seis unidades existem, abertas, em Santo André ("Lar ABC Shopping" é o nome real); vira "…entre outras" (há 10 abertas) | smartfit.com.br/academias/{grand-plaza, lar-abc-shopping, campestre, principe-de-gales, parque-das-nacoes, pirelli}, `opened:true`; também senador-flaquer, vila-luzita, parque-oratorio, palmares |
| BodyMind | corrigida: fica **só o nome**; saem "tradicional" e "uma das maiores piscinas do estado" (nenhuma fonte; nenhuma listagem cita piscina) | Wellhub (2 unidades em Santo André) + TotalPass (Santo André); nenhum endereço bate entre as duas, por isso sem `detalhe`; site oficial não resolve |
| Academias ao ar livre municipais | corrigida: Celso Daniel sai (página oficial lista a estrutura do parque sem equipamento de ginástica); "gratuitas" sai (não está na página) | Prefeitura de Santo André, "Parques de Santo André" (web.santoandre.sp.gov.br/portal/agenda/0/4/14783): Parque Central "praças com equipamento e ginástica"; Parque Regional da Criança "equipamentos para ginástica" |

Também no arquivo: `academias` (sem a "concentração" nos bairros nobres, que não tinha fonte).

**Campinas/SP** — página mudou. **Fica com 1 entrada** (completar é tarefa à parte).

| entrada | resultado | fonte |
|---|---|---|
| Smart Fit | corrigida: não há unidade "Cambuí"; a "Cambuí II" fica no **Centro** (R. Quatorze de Dezembro, 483); Campinas Shopping e Chácara Primavera confirmadas | smartfit.com.br/academias/{cambui-ii, campinas-shopping, chacara-primavera}, `opened:true` |
| Estúdios de funcional e personal | **removida**: sem nome; "concentrados no Cambuí e no Taquaral" sem fonte | — |
| Academias ao ar livre (Lagoa do Taquaral) | **removida por ora**: a notícia da Prefeitura (campinas.sp.gov.br/noticias/113842, "quatro academias ao ar livre… e uma de musculação, perto do portão 1") aparece no índice de busca, mas a página é carregada por script e o texto não vem no HTML; jornais locais bloqueados aqui. **Pendência:** pedir print da notícia ao Renato e reincluir | — |

Também no arquivo: "estúdios do Cambuí/Taquaral" sai de `mercado`, `academias`, `destaquesFitness`, conclusão e FAQ.

Saldo: 6 entradas → 2 removidas (1 genérica, 1 sem fonte aberta), 3 corrigidas, 1 confirmada.

### 21/10/2026 — leva 18 (rotina, Parte B: Sorocaba e Cascavel)

**Sorocaba/SP** — página mudou. Fica com 2 entradas.

| entrada | resultado | fonte |
|---|---|---|
| Smart Fit | corrigida: "em shoppings" vira "no Shopping Cidade Sorocaba, entre outras" (8 unidades abertas na cidade) | smartfit.com.br/academias (unidades de Sorocaba), `opened:true` |
| Academias locais e estúdios de funcional | **removida**: sem nome | — |
| Estrutura dos parques | corrigida: sai "(24h)" — o "24 horas" oficial é da base da GCM dentro do Parque das Águas, não do horário do parque; sai o ETA-Éden (não está na página oficial de parques; a única fonte primária é jornal bloqueado aqui); "gratuita" vira "pública" | Prefeitura de Sorocaba, meioambiente.sorocaba.sp.gov.br/gestaoambiental/parques/ (Campolim: pistas de 1.500, 1.900 e 2.600 m; Parque das Águas: pista de caminhada, ciclovia, quadra, campos); noticias.sorocaba.sp.gov.br/prefeitura-inaugura-base-comunitaria-da-gcm-no-parque-das-aguas/ |

Também no arquivo: `mercado` ("shoppings"), `academias`, `destaquesFitness`, o card do Parque das Águas em `ondeTreinar` (saem "162 mil m²", skate, areia e "24 horas", sem fonte aberta), o card do ETA-Éden (removido), a FAQ "Onde o personal costuma atender" e a FAQ "O que o Parque das Águas aberto 24 horas muda…" (removida — a premissa não se sustenta).

**Cascavel/PR** — confirmada sem mudança (só `academiasVerificadasEm`; `atualizadoEm` não sobe).

| entrada | resultado | fonte |
|---|---|---|
| Smart Fit Cascavel | confirmada: Rua Paraná, 1677, Centro; única unidade da cidade | smartfit.com.br/academias/cascavel, `opened:true` |
| Bluefit Cascavel | confirmada: Av. Barão do Rio Branco, 817, São Cristóvão | bluefit.com.br/academia/cascavel (meta description) + Wellhub (mesmo endereço) |

Saldo: 5 entradas → 2 removidas, 1 corrigida, 2 confirmadas.

### 22/10/2026 — leva 19 (rotina, Parte B: Bauru e Santos)

**Bauru/SP** — lista confirmada; texto corrido corrigido ("várias unidades" → "duas unidades"), por isso a data sobe.

| entrada | resultado | fonte |
|---|---|---|
| Smart Fit Getúlio Vargas I | confirmada: Av. Getúlio Vargas, 25-16, Vila Aviação | smartfit.com.br/academias/av-getulio-vargas-i, `opened:true` |
| Smart Fit Getúlio Vargas II | confirmada: Av. Getúlio Vargas, 8-15, Jardim Aeroporto | smartfit.com.br/academias/av-getulio-vargas-ii, `opened:true` |

Pendência anotada: Bluefit e "mais de 40 academias ao ar livre" no texto corrido não foram conferidas (fora do escopo da lista).

**Santos/SP** — página mudou. Fica com 2 entradas.

| entrada | resultado | fonte |
|---|---|---|
| Smart Fit | corrigida: são cinco unidades, todas abertas — Ana Costa 1 e II (Gonzaga), Assaí Ana Costa (Vila Matias), Embaré (Av. Almirante Cóchrane) e Emissário (Av. Presidente Wilson, José Menino) | smartfit.com.br/academias/sp/santos e páginas das unidades |
| Academias e estúdios da orla | **removida**: sem nome; "forte oferta no Gonzaga, Boqueirão e Ponta da Praia" sem fonte | — |
| Academias ao ar livre da praia | corrigida para "Estações de ginástica da orla": ficam na faixa de areia (não no calçadão); saem "gratuitas" e "7 km do calçadão" (a Prefeitura fala em 7 km de orla, e "gratuitas" não aparece para a orla); entram as aulas da Ginástica na Praia (postos 2, 5 e 6) | santos.sp.gov.br: notícias da estação de calistenia no canal 3 (2017), dos postos de ginástica, do jardim da orla e "Conheça Santos" |

Também no arquivo: card da orla em `ondeTreinar`, `academias` (sem a "oferta grande" nos bairros) e FAQ "Onde o personal costuma atender" ("7 km de calçadão" → "de orla"; Smart Fit com as cinco unidades).

Saldo: 5 entradas → 1 removida, 2 corrigidas, 2 confirmadas.

### 23/10/2026 — leva 20

**Manaus/AM** (411 impr.) — página mudou.

| entrada | resultado | fonte |
|---|---|---|
| Smart Fit (mais de dez unidades — Amazonas Shopping, Cidade Nova, Ponta Negra, Flores) | confirmada sem mudança: 12 unidades abertas em Manaus (CEP 690xx), entre elas as quatro citadas | smartfit.com.br/academias/amazonas-shopping (Av. Djalma Batista, 482), /cidade-nova-1, /ponta-negra, /flores-1 e listagem /academias/am/manaus; São Jorge está `opened:false` e não conta |
| Academias locais de bairro | **removida** — genérica, sem nome a conferir | — |
| Academia ao ar livre do Parque Rio Negro | **removida** — só trechos de busca (Cenarium 2021, guias); nenhuma página abriu no ambiente, e o portal do governo do AM deu 503. A menção a "academia ao ar livre" saiu também da descrição do parque | — |
| Estrutura do Ponte dos Bilhares | confirmada como academia ao ar livre; nome e detalhe corrigidos. "Pista de 1,42 km" e "reformado em 2023" **não confirmados** — saíram também da descrição do parque, que passa a citar a ciclofaixa de cerca de 1,4 km | Prefeitura de Manaus: reinauguração com "academia ao ar livre – a maior da cidade com 14 equipamentos"; quadras reformadas (2019); ciclofaixa de 1,4 km (2015) |

**Ribeirão Preto/SP** (251 impr.) — página mudou.

| entrada | resultado | fonte |
|---|---|---|
| Smart Fit ("Subsetor Sul, Ribeirânia e shoppings") | confirmada; detalhe corrigido — são quatro unidades, nenhuma na Ribeirânia ou no Subsetor Sul | smartfit.com.br/academias/shopping-santa-ursula (R. São José, 933, Centro), /mall-dom-pedro-i (Av. Dom Pedro I, 1550), /trio (Av. Presidente Vargas, 1265), /neo (Av. Maria de Jesus Condeixa, 600), todas `opened:true`, CEP 140xx |
| Bluefit ("Jardim Califórnia e Santa Cruz") | confirmada; detalhe corrigido | bluefit.com.br/academia/biagi (Av. Maurílio Biagi, 1450, Santa Cruz do José Jacques) e /nova-alianca (Av. Dr. José Cezário Monteiro da Silva Filho, 385, Nova Aliança); Wellhub lista as duas como parceiras (abertas). O botão "Avise-me na inauguração" é do template do site |
| Estúdios premium da Zona Sul | **removida** — genérica; o texto do campo `academias` deixou de citá-los | — |
| Academias ao ar livre dos parques (Maurílio Biagi e Curupira) | confirmada só no Maurílio Biagi; Curupira **sem fonte** | Prefeitura de Ribeirão Preto: academia ao ar livre no Parque Maurílio Biagi (2012) e aparelhos adaptados instalados pelo Programa Cidade Acessível (20/09/2022) |

Saldo da leva: 8 entradas → 5 mantidas, 3 removidas, 4 detalhes corrigidos.

### 24/10/2026 — leva 21

**Limeira/SP** (235 impr.) — página mudou.

| entrada | resultado | fonte |
|---|---|---|
| Smart Fit (Av. Campinas e Av. Comendador Agostinho Prada) | confirmada sem mudança | smartfit.com.br/academias/limeira (Av. Campinas, 50, Vila Cidade Jardim, 13480-280) e /limeira-ii-av-comendador-agostinho-prada (Av. Comendador Agostinho Prada, 3100), ambas `opened:true` |
| Skyfit (junto ao Covabra) | confirmada; detalhe ganha a avenida, sem número (Wellhub diz 1360, TotalPass 1525) | Wellhub skyfit-academia-limeira-covabra e TotalPass skyfit-academia-limeira-covabra: Av. Maria Thereza Silveira de Barros Camargo, CEP 13484-270 |
| Equipamentos do Parque Cidade de Limeira | **removida** — as páginas oficiais da Prefeitura dão 403; a academia ao ar livre aparece só em trechos de busca. A menção saiu também da descrição do parque (junto com trilha, lago e quadras, sem fonte oficial) e o destaque deixou de dizer que os três parques têm academia | — |

**Maringá/PR** (234 impr.) — página mudou.

| entrada | resultado | fonte |
|---|---|---|
| Smart Fit (Av. Tuiuti, Novo Centro e Angeloni) | confirmada; detalhe corrigido — a do Angeloni fica no Novo Centro (contada duas vezes) e faltava a do Condor | smartfit.com.br/academias/angeloni-maringa (Av. Advogado Horácio Raccanello Filho, 5120, Novo Centro), /maringa-av-tuiuti, /condor-maringa-av-kakogawa, todas `opened:true`, CEP 870xx |
| Academias e estúdios locais | **removida** — genérica; "dezenas de academias" saiu também do texto | — |
| Academia ao ar livre do Parque do Ingá | **removida** — a página de turismo da Prefeitura dá 503; a ATI aparece só em trecho de busca e em diretórios. A menção saiu da descrição do parque, do destaque e da FAQ | — |

Saldo da leva: 6 entradas → 3 mantidas, 3 removidas, 2 detalhes corrigidos. **Maringá ficou com 1 entrada** e Limeira com 2 — completar vira tarefa à parte (Parte A não cobre cidades já com academia). Se o Renato mandar print das páginas das prefeituras (Parque Cidade e Parque do Ingá), as duas academias ao ar livre voltam.
