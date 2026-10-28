# Artigo: Six Alphaville (`/guias/six-alphaville/`)

Pedido do Renato em 27/10/2026: artigo sobre a nova unidade da Six em
Alphaville, colocado nos artigos de academias e em outros onde couber, com
cuidado com plágio e olhando o que já foi feito no site do Montinho.

## O recorte: por que não é o mesmo artigo do Montinho

O site do Montinho já tem `montinhopersonal.com.br/blog/six-alphaville`
("Academia, Endereço, Mensalidade e Inauguração"), um artigo de ficha
completa: endereço, inauguração, estrutura, donos, unidades da rede,
Wellhub/TotalPass. Duas posições na mesma SERP são presença dobrada
(`docs/seo-local-estrategia.md`), desde que o texto não seja o mesmo.

O portal ficou com outra pergunta, a da **conta**:

- a mensalidade de R$ 2.500 a R$ 3.000 contra academia + personal, refeita
  com a faixa de personal de Alphaville do próprio portal (`precos.mensalMin`
  e `mensalMax` de `alphaville-sp.ts`, lidos no build);
- "professor em tempo integral" × personal, que é o ponto do portal
  (liga com coach de academia e personal em academia);
- para quem a conta fecha e o que perguntar na visita.

Nenhuma frase foi copiada do artigo do Montinho. A estrutura de seções e as
FAQs foram escritas do zero; a lista do que está incluído virou tabela por
área.

## Fonte

Só uma: a entrevista do fundador Eilson Studart Filho à revista VERO
("O novo conceito de academia chega a Alphaville", 06/08/2026). vero.com.br
não abre no ambiente (proxy 403), então foi lida pelos prints do Renato
(`docs/pesquisas/2026-10-27-six-alphaville/prints/06` a `11`). Tudo o que
vem dela é atribuído ao fundador no texto.

O que entrou, segundo a entrevista: 23º andar, vista 360°, mais de 1.800 m²,
investimento de R$ 20 milhões, inauguração prevista para o fim de outubro,
mensalidade de R$ 2.500 a R$ 3.000 (e a conta de R$ 600 de academia + R$ 1.500
de personal + alimentação), a lista do all inclusive, a linha Luxury da
Technogym, os materiais do ambiente, mais de 20 pessoas na limpeza, os
alunos que ficam mais de 3 horas e vão 5 vezes por semana em média, e a
origem (acima do peso, hérnia de disco).

**Ficou de fora, por falta de fonte que abrisse aqui:**

- outros sócios além dos dois abaixo, outras unidades (Brasília, Itaim, Vila Nova Conceição,
  Belvedere) e preços de outras unidades: Forbes, IstoÉ Dinheiro, Mercado &
  Consumo, Seu Dinheiro e Money Times aparecem na busca, mas todos dão 403
  no proxy. Resumo de busca não é fonte;
- "academia mais alta do Brasil": só apareceu como título truncado numa
  busca de imagens (print 05).

**Print da bio do Instagram oficial (27/10, print 12)** — entrou no mesmo
dia: endereço "Av. Copacabana, 325 - Empresarial 18 do Forte - Alphaville,
Barueri, Brazil 06472001" (confere a cidade: lado de Barueri) e o post
"Dr. Leandro Vaz, Médico Nutrólogo e Cofundador SIX Wowness Club". A bio diz
"Academia 6 estrelas. A primeira e única do Brasil" — slogan da marca, não
entra como fato. O print **não** mostra que a unidade já abriu (sem horário,
sem "inaugurado"), então a Six continua fora de `academiasProximas`.

## Prints e Answer the Public (27/10)

`docs/pesquisas/2026-10-27-six-alphaville/`.

- **Autocompletar:** six alphaville academia, ltda, fotos, mensalidade six
  alphaville, six alpha, six barueri, six valor.
- **PAA:** Quanto custa a mensalidade six? · Onde vai ser a Academia Six em
  Alphaville? · Qual a academia mais cara de Alphaville, SP? · Quem é o dono
  da Six Sport Life?
- **Outras pessoas pesquisaram:** endereço, fotos, academia valor
  mensalidade, academia six, six itaim, six vila nova.
- **ATP (PAA expandido):** "Onde tem academia Six no Brasil?", "Qual a
  academia mais luxuosa do Brasil?", "Qual é o preço da academia SIX no
  noroeste?".
- **ATP (modelos de IA):** ChatGPT e Gemini tratam "six alphaville" como
  **condomínio/imóvel**. Por isso a primeira frase do artigo diz que é
  academia, não condomínio.

O que entrou e onde:

| busca/pergunta | onde |
|---|---|
| mensalidade / valor | título, lead, H2 "Quanto custa", FAQ 1 |
| onde vai ser / endereço | H2 "Onde fica", FAQ 2 (bio do Instagram, print 12) |
| quando abre | nota de fonte, FAQ 3 |
| quem é o dono | FAQ 4 (fundador pela VERO, cofundador pelo Instagram) |
| academia mais cara de Alphaville | FAQ 5 (sem ranking: as outras não publicam preço) |
| condomínio × academia (IA) | primeira frase do lead |

Não entraram: six itaim / vila nova / noroeste / onde tem no Brasil (sem
fonte aberta), fotos (o portal não usa foto de terceiros).

## Links semânticos (27/10)

- `/guias/personal-trainer-em-academia/`: parágrafo em "Quanto custa, de
  verdade". O all inclusive junta as três parcelas da conta. `atualizadoEm`
  subiu para 2026-10-27.
- `/guias/coach-de-academia/`: parágrafo em "quem é quem". "Professor em
  tempo integral" ainda é professor de salão. `atualizadoEm` subiu para
  2026-10-27.
- `artigos.ts` e índice de guias ("Na academia").

**Fica para depois, por regra:**

- `academiasProximas` de Alphaville: unidade "em breve" não entra até abrir
  (CLAUDE.md). Endereço já confirmado (print 12).
- O guia de academias e o top 10 do site do Montinho ainda não citam a Six.
  É outro repositório, fora do alcance desta sessão.

## FerramentaInline

`preco` (calculadora de preço do personal), no fim da seção da conta. A
soma usa a faixa de Alphaville, e a calculadora abre a da cidade do leitor.

## 28/10 — abertura confirmada

O Renato confirmou em 28/10 que a unidade já está funcionando. Com isso:

- o guia trocou a FAQ "Quando abre" por "A Six Alphaville já abriu?" e a
  nota de fonte diz que a unidade funciona desde o fim de outubro.
  `atualizadoEm` foi para 2026-10-28;
- a Six entrou em `academiasProximas` de **Alphaville** e de **Barueri**
  (o endereço fica do lado de Barueri; a página de Barueri já lista
  academias de Alphaville). `atualizadoEm` das duas foi para 2026-10-28.
  `academiasVerificadasEm` não mudou, porque só uma entrada foi conferida e
  não a lista inteira.

`AcademiaProxima` não tem campo de link, então a lista não aponta para o
guia. O caminho até ele é pelo índice de guias e pelos dois guias de
academia.

## 28/10 — WhatsApp comercial (prints 13 a 15)

O perfil de WhatsApp Business "Six Alphaville - Comercial" (+55 11
94025-9427) traz o mesmo endereço da bio, horário de **segunda a domingo,
das 8h às 18h**, e "empresa cadastrada desde maio de 2026". Entrou no H2,
renomeado para "Onde fica e como falar com a Six", e numa FAQ nova, "Qual o
WhatsApp da Six Alphaville?".

O perfil é do **comercial**. Por isso o horário entra como horário de
atendimento, não como horário de treino da academia. Também saiu do texto a
frase "o horário de funcionamento está no Instagram": a bio não mostra
horário, então ela não tinha fonte.
