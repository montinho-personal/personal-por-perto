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
