# Auditoria dos cliques para o Montinho — 06/10/2026

Puxado pelo Supermetrics (GA4 do Personal por Perto, propriedade 543607287;
GA4 do Montinho Personal, 543369321; Search Console do portal), período
29/06 (lançamento) a 06/10/2026. Pedido do Renato depois de uma primeira
leitura que precisou ser corrigida — as correções estão no fim.

## 1. Quanto do tráfego o GA4 do portal enxerga

O GA4 só carrega depois que o visitante aceita os cookies (LGPD,
`src/layouts/Base.astro`). O Search Console conta todo clique do Google;
o GA4, só quem aceitou.

| mês | cliques no Google (GSC) | sessões orgânicas no GA4 | GA4 ÷ GSC |
|---|---|---|---|
| jul | 121 | 85 | 70% |
| ago | 339 | 140 | 41% |
| set | 415 | 148 | 36% |

Desde agosto o GA4 vê cerca de **4 em cada 10** visitas vindas do Google.
Todo número de clique abaixo é piso, não total.

## 2. Cliques no WhatsApp (evento `clique_whatsapp`)

40 eventos, 21 pessoas. Separando o que é da equipe:

- **Internos (Barueri):** 17 eventos — 29/06 (7, lançamento), 07/07 (1),
  26/08 (3, teste das ferramentas) e 02/09 (6, dia de `?ga_debug=1`).
- **Externos:** 23 eventos de cerca de 19 pessoas, em 20 dias diferentes.
  Três deles (30/06, 07/07 e 11/07, São Paulo, página inicial) podem ser da
  equipe — IP de celular costuma geolocalizar em São Paulo.

Cidades externas: São Paulo, Brasília, Ituiutaba, Natal, Barra Mansa,
Maceió, Sorocaba, Vitória, Mossoró, Vicente de Carvalho, Ribeirão das
Neves, Coruripe/AL (2 dias), Curitiba, Itaperuna (2 cliques), Salvador,
Belo Horizonte e Três Passos/RS.

Página de origem (externos): calculadora de preço do personal (4), página
inicial (até 4, metade possivelmente interna), Encontre seu Personal (2),
páginas de cidade (Canarana, São Simão, Extremoz, Volta Redonda, Sorocaba,
Icapuí, Coruripe, Curitiba), guia de quanto custa, Meu Treino Faz Sentido,
Presencial ou Online e treino em casa para iniciantes.

**Clique não é conversa.** O GA4 registra o toque no botão, não a
mensagem enviada. As mensagens pré-preenchidas do portal começam com
"Oi, Montinho!" — contar essas conversas no WhatsApp desde 29/06 é a
conferência definitiva.

## 3. Visitas ao site do Montinho

**Lado do portal** (`clique_montinho`): 16 eventos. Internos: Barueri
29/06 (2) e 02/09 (2, debug). Externos: 12 eventos de cerca de 10 pessoas.

**Lado do site do Montinho** (sessões com origem personalporperto): 31
sessões, 18 pessoas. Internas: Barueri e Santana de Parnaíba (28/06, 29/06,
18/07, 02/09) e São Paulo em 02 e 03/07 (7 sessões de 1 pessoa — teste).
Externas: cerca de 16 pessoas.

**Cruzando os dois lados** (mesmo dia e cidade):

- nos dois: Ituiutaba 22/07, São Paulo 27/07, Rio 27/08, Goiânia 01/09,
  Novo Gama 04/09, Volta Redonda 15/09 — 6 pessoas;
- só no site do Montinho: BH, Sete Lagoas, Goiânia (30/07 e 27/09),
  Brasília, Teresina, Botucatu, Viana e 2 sem cidade — 10 pessoas que o GA4
  do portal não viu (recusaram cookie no portal);
- só no portal: Nova Andradina e Fortaleza — 2 pessoas que clicaram mas não
  aparecem no site do Montinho.

**União: cerca de 18 pessoas de fora** chegaram (ou tentaram chegar) ao
site do Montinho em 3 meses. O último registro, nos dois lados, é de 28/09.

## 4. O que estava errado na primeira leitura

1. **"19 pessoas no WhatsApp"** veio do clique automático do GA4, em 90
   dias, e incluía cliques internos. O certo: cerca de 19 pessoas de fora
   desde 29/06 vistas pelo GA4 — e o GA4 vê só uns 40% das visitas.
2. **"São Paulo: 3 visitas ao site do Montinho"** incluía 6 sessões de
   teste de uma pessoa em 02/07. De fora, São Paulo são 2.
3. **"A calculadora de preço mandou 6 cliques no WhatsApp"** incluía 2 de
   Barueri. De fora são 4, empatada com a página inicial.
4. A primeira consulta por página e cidade usou cinco dimensões juntas, e o
   GA4 devolveu só parte das linhas (16 de 40 no WhatsApp). Com menos
   dimensões por consulta, os totais fecham — é o método usado acima.

## 5. Para conferir na próxima leitura

- Contagem de conversas "Oi, Montinho!" no WhatsApp, para comparar com os
  ~19 cliques de fora.
- Se o site do Montinho continua recebendo visitas do portal depois de 28/09.
- A razão GA4 ÷ GSC: se cair abaixo de 36%, a fatia que recusa cookie está
  crescendo.
