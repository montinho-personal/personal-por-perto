# Artigo: Ficha de treino (`/musculacao/ficha-de-treino/`)

Item 2 da pauta (parte 1: "Ficha da academia / treino pronto da internet
funciona?"). Pedido do Renato em 17/11/2026 ("cria os 2 primeiros").
Pesquisa no SerpApi antes do texto (celular, São Paulo).

**A pesquisa mudou o recorte.** "Treino pronto funciona" quase não tem
busca própria (SERP dispersa, autocompletar só "treino pronto full body /
em casa / funcional"). "Ficha de treino" tem, e o autocompletar e as outras
pesquisas pedem modelo: "pdf", "para imprimir", "em branco", "modelo",
"editável", "gratuito". Por isso a peça é a ficha, com um modelo em branco
para baixar, e o "treino pronto funciona?" virou seção e FAQ.

Recorte: `treino-para-iniciantes` e `treino-abc-como-montar` têm os
exercícios; `divisao-de-treino` tem a divisão pelos dias;
`quando-trocar-o-treino` responde quanto tempo ficar com a ficha. Aqui é o
documento: ler, montar, anotar.

## Material para baixar

`public/materiais/ficha-de-treino-em-branco.pdf` — A4, uma página, treinos
A/B/C com 6 linhas e 6 semanas de anotação, campos de objetivo, início,
"revisar em" e dias por semana, e a regra de progressão no rodapé. Gerado
em 17/11/2026 (HTML → PDF pelo Chromium). Clique medido com
`data-track="artigo:baixar-ficha"`.

## Buscas (SerpApi, 17/11/2026)

JSON em `docs/pesquisas/2026-11-17-ficha-de-treino/1.json` a `3.json`:
1. ficha de treino academia — a página de resultados veio poluída por
   "academia" (Academia Brasileira de Letras, Wikipédia); valeu o
   autocompletar
2. treino pronto funciona — busca fraca; visão de IA não expandida para
   poupar crédito
3. ficha de treino — a busca que de fato serviu

**Formato:** orgânicos de "ficha de treino" são blog de software de
academia (Tecnofit), tabelas, PDFs no Scribd, Pinterest e lojas (Mercado
Livre, Shopee). Quem busca quer um modelo → a peça leva PDF. Concorrência
fraca (Scribd, Pinterest, lojas).

**Visão de IA:** define em uma frase ("documento que organiza a rotina…
exercícios, ordem, séries, repetições, carga e descanso"), lista a
estrutura, as divisões comuns e "onde encontrar modelos". Cita Smart Fit,
Tecnofit, treinadordavid.com, Scribd, TotalPass, Pinterest, Mercado Livre.
O lead define do mesmo jeito.

| sinal | onde entrou / por que ficou fora |
|---|---|
| AC/outras "pdf", "para imprimir", "em branco pdf grátis", "modelo", "editável", "word download", "gratuito" | title ("modelo para imprimir"), caixa de download no topo, H2 "Modelo de ficha de treino para imprimir" |
| PAA "O que é ficha de treino?" + IA | lead, H2 "O que tem numa ficha de treino", FAQ |
| PAA "Como montar uma ficha de treino academia?", outras "Montar ficha de treino" | H2 "Como montar… em 5 passos" (ACSM 2009, OMS 2020), FAQ |
| IA "3×12", "60 a 90 s" | H2 "Como ler a ficha" + FAQ "O que significa 3x12" (descanso com ACSM: 1 a 2 min) |
| AC "feminino", "masculino", "feminino iniciante", outras "academia feminino" | H2 "Ficha feminina e masculina" + FAQ |
| AC "iniciante", outras "para iniciantes" | passos 1 e 4 + links para `treino-para-iniciantes` |
| PAA "Quanto tempo devo ficar com uma ficha de treino?" | FAQ curta + link para `quando-trocar-o-treino` |
| PAA "Qual é o melhor aplicativo gratuito para ficha de treino?" | H2 "Ficha no papel ou no aplicativo?" + FAQ, sem marca |
| tema da pauta "treino pronto funciona?" | H2 + FAQ, com Ratamess 2008 |
| AC "segunda a sexta", "5 vezes na semana", "full body", "hipertrofia", "de pernas e glúteos", "avançado" | ✖ fora como seção: cobertos por `divisao-de-treino`, `treino-de-gluteos`, `treino-de-pernas`; linkados pela divisão |
| AC "para quem tem lipedema" | ✖ fora: condição médica, sem fonte (pauta) |
| AC "para gestante" | ✖ fora: `musculacao-na-gravidez` já cobre |
| AC "cílios" | ✖ fora: outro assunto (extensão de cílios) |
| PAA "Quanto custa 1h de personal trainer?" | ✖ fora: `quanto-custa-personal-trainer` cobre |
| PAA "O que é o método 12-3-3-30?" | ✖ fora: esteira, não ficha → FAQ em `metodo-12-3-30` (pauta) |
| PAA "Quais são os 7 melhores exercícios para ganhar massa muscular?" | ✖ fora: `hipertrofia-como-funciona` / `maquina-ou-peso-livre` |
| busca 2: PAA "Como é o treino funcional?", "Quanto tempo de treino em casa dá resultado?", "Como o Anatoly é tão forte?", "15 tipos de treino" | ✖ fora: outro assunto; ver pauta |

Ferramenta no corpo: `calculadora-1rm`, no passo "Deixe espaço para anotar
a carga" ("que carga escrever na primeira semana?"). Sem vídeo: o Short do
tema (BoXag2fY0u0) já está em `treino-sem-resultado`.

## Título e descrição

Artigo novo: título e descrição definidos na criação, a partir das buscas.

## Buscas que ficaram de fora → pauta

- **Vale um artigo:** nenhuma nova.
- **Cabe em página existente:**
  - "Quanto tempo de treino em casa dá resultado?" → FAQ em
    `treino-em-casa-para-iniciantes`;
  - "O que é o método 12-3-3-30?" (PAA) → FAQ em `metodo-12-3-30` (a
    variante com mais um número; conferido: o site já tem o 12-3-30).
- **Não recomendo:** "para quem tem lipedema" (condição médica, sem fonte
  segura para treino), "cílios" (outro assunto), "Como o Anatoly é tão
  forte?" (pessoa/vídeo viral), "15 tipos de treino" (lista genérica).
