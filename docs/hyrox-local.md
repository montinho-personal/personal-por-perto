# Hyrox na região presencial — pesquisa antes das páginas

Pedido do Renato em 23/10/2026: uma página de Hyrox para cada cidade da
região presencial do Montinho (Alphaville, Tamboré, Aldeia da Serra,
Barueri, Santana de Parnaíba, Jandira, Itapevi, Carapicuíba, Osasco, Cotia
e Granja Viana — lista de `docs/seo-local-estrategia.md`, Frente 1).

## O que o site tem hoje

- `/guias/hyrox-sao-paulo-2026/` (evento) e `/calorias/hyrox/` (calculadora).
- Nenhuma página de cidade ou bairro cita Hyrox.

## Onde treinar: o que já foi conferido (23/10)

| cidade | lugar | fonte 1 | fonte 2 | status |
|---|---|---|---|---|
| Santana de Parnaíba (AlphaSítio Mall, região do Tamboré) | Obox | Wellhub (JSON-LD: Av. dos Parques, CEP 06544-300; texto: "aulas de Crosstraining, FullBody, Hyrox e Yoga") | — | **1 fonte.** O Instagram da academia se diz "1º HYROX Training Club de Alphaville" — é autodeclaração, não confirma a afiliação |
| Cotia | HYBOX | Wellhub (R. Ernesto Lemos Leite, 172, Vila Monte Serrat; modalidade "Hyrox") | hyboxcotia.com — **bloqueado aqui** | **1 fonte** |
| Barueri, Alphaville, Aldeia da Serra, Jandira, Itapevi, Carapicuíba, Osasco, Granja Viana | — | nada encontrado | — | sem lugar confirmado |

"Treino de Hyrox" e "HYROX Training Club" são coisas diferentes: só o
buscador oficial confirma a afiliação. A página só usa o selo com essa
confirmação.

## Bloqueios (não contornados)

- `hyrox.com/gyms/` está quebrada no próprio site (o plugin do mapa mostra
  o código `[wpsl]` em vez da lista).
- `hyrox.com/gym-partners` redireciona para
  `hyrox-training-finder.hyrox.com`, que o proxy recusa. **Pedir print ao
  Renato** do buscador em cada cidade.

## Lote e ritmo (regra do CLAUDE.md)

Cria páginas novas → dividir sempre e checar variedade. Onze páginas de
Hyrox com o mesmo texto e só o nome da cidade trocado são exatamente o que
a política de *scaled content abuse* pune. Cada página precisa de fato
local próprio: onde treinar (confirmado), a distância até a prova de São
Paulo e as buscas dos prints daquela cidade.

- **Leva 1:** as duas cidades com mais dado confirmado e mais demanda local,
  depois dos prints.
- As seguintes só depois de a leva 1 sair limpa.
- Cidade sem nenhum lugar confirmado: avaliar se a página se sustenta;
  senão, uma seção de Hyrox na página da cidade que já existe.

## Prints pedidos (23/10)

Google, para cada busca: autocompletar, "As pessoas também perguntam" (2–3
abertas), "Outras pessoas pesquisaram" e visão geral de IA.

- hyrox alphaville
- hyrox barueri
- hyrox santana de parnaíba
- treino hyrox (sem cidade, para a intenção geral)
- buscador oficial da Hyrox (hyrox.com/gym-partners), pesquisando cada
  cidade da região

## Publicadas em 23/10/2026 — as 11, antes dos prints

O Renato pediu as 11 de uma vez ("pode criar de todas essas... e daí vou
te mandando os print depois"). A regra de levas foi pesada contra o pedido
explícito; o que segura o risco de conteúdo em escala é a variedade:

- O texto local de cada cidade (abertura, onde correr, onde treinar força,
  caminho até a prova, 3 FAQs e a frase do bloco de ferramenta) é escrito
  à mão em `src/data/hyroxLocal.ts`, com fatos das páginas de cidade.
- O comum (formato da prova, como organizar a preparação, 2 FAQs) mora em
  `src/components/HyroxLocal.astro`.
- URLs: `/guias/hyrox-<cidade>/`, registradas em `src/data/artigos.ts`
  (Guias) e ligadas entre si pelo bloco "outras cidades da região".
- Obox e HYBOX citados só como "a página no Wellhub lista Hyrox", sem
  selo de Training Club e sem endereço além do que o Wellhub mostra.
- Nenhuma página de cidade foi alterada (sem bump de `atualizadoEm`).

### Quando os prints chegarem

Título, H1 e FAQs de cada página são revistos pelos prints; o que mudar
fica registrado aqui. Se o buscador oficial confirmar academias afiliadas,
elas entram na página da cidade com o selo.

### Para ler no próximo relatório do GSC

Impressões e posição das 11 URLs, e se "hyrox + cidade" aparece nas
consultas. Página sem nenhuma impressão em 60 dias: avaliar fundir na
página da cidade.

### Link da página de cidade para a de Hyrox (decidido em 23/10)

As 11 páginas de cidade ainda não linkam a página de Hyrox delas. O link
entra **junto com a próxima revisão real de cada cidade** — nunca numa
varredura das 11, que subiria o `atualizadoEm` de todas no mesmo dia por
causa de um link só. Quem revisar `src/data/cidades/<cidade>.ts` da região
presencial: acrescentar o link para `/guias/hyrox-<cidade>/` no mesmo
commit e riscar a cidade abaixo.

Faltam: Alphaville · Tamboré · Aldeia da Serra · Barueri · Santana de
Parnaíba · Jandira · Itapevi · Carapicuíba · Osasco · Cotia · Granja Viana

## Prints recebidos (23/10, Renato)

Arquivos em `docs/pesquisas/2026-10-23-hyrox/prints/` (01 a 13).

| busca / tela | o que mostrou | onde entrou |
|---|---|---|
| hyrox alphaville — autocompletar (03) | valor · são paulo · abc · perto de mim · em sp | título e H1 "aulas, onde treinar e quanto custa"; FAQ da mensalidade com a inscrição |
| hyrox alphaville — visão geral de IA (01) | Obox Training Club, "Alameda Pau Brasil, 48, Loja 16/17, AlphaSítio Mall"; "centro oficial"; Wellhub e TotalPass. **Não é fonte** | levou à TotalPass: página oficial da TotalPass confirma o Obox (mesmo telefone do Wellhub) → **duas fontes** para a academia. Endereço **diverge** (TotalPass: Alameda Pau Brasil, 48; Wellhub: Av. dos Parques) → a página fica só com "AlphaSítio Mall". "Centro oficial" não entra: afiliação só com o buscador oficial |
| hyrox alphaville — resultados (04) | Instagram do Obox: "1º Hyrox Training Club de Alphaville", Wellhub e TotalPass; PAA: mensalidade do Hyrox · aulas em Alphaville · qual academia tem Hyrox · onde acontece em SP | três FAQs novas em Alphaville; "onde acontece" já respondido na seção do caminho até a prova |
| hyrox alphaville — outras pessoas (02, 05) | hyrox barueri · crossfit barueri · hyrox são paulo · hyrox brasil site oficial · hyrox brasil 2027 · prova completa · login hyrox brasil | FAQ comum CrossFit × Hyrox; "2027" não entra (data da próxima etapa só em agregador) |
| hyrox santana de parnaíba — autocompletar (06) | **inscrição · resultado** · são paulo · perto de mim · sp | leitura: confusão com o bairro de **Santana** (zona norte de SP), onde fica o Anhembi. Título "onde é a prova", FAQ "tem prova em Santana de Parnaíba?" e o aviso do nome no caminho até a prova (conferido: nenhuma prova de Hyrox no município) |
| treino hyrox — IA (07) | 8 km + 8 estações, sequência fixa. **Não é fonte** — bate com a tabela que já estava na página | — |
| treino hyrox — PAA (08) | como é o treino · quais são os 8 exercícios · diferença CrossFit × Hyrox · qual a sequência | FAQ comum "quais são os 8 exercícios, e em que sequência"; FAQ CrossFit × Hyrox |
| treino hyrox — outras (09, 10) | em casa · wod · iniciante · exemplo · na academia · perto de mim · treino completo · onde treinar · oficial · planilha · o que é | FAQ comum "dá para treinar em casa?"; frase para iniciante na preparação. Planilha/exemplo de treino **não** entram: treino é prescrição individual |
| hyrox barueri — autocompletar (11) | sp · resultados · inscrição · são paulo · bh · perto de mim | título "onde treinar, inscrição e onde é a prova"; FAQ "tem prova em Barueri? inscrição e resultado" (nenhuma etapa oficial no município; aponta o Anhembi e o guia) |
| hyrox barueri — PAA (12) | quanto custa o Hyrox · qual academia tem Hyrox · onde acontece em SP · o que é e como funciona | FAQ "qual academia tem Hyrox em Barueri"; custo pela inscrição (seção comum) |
| hyrox barueri — resultados e outras (12, 13) | Facebook da CrossFit Barueri: "simulado oficial HYROX BRASIL", "Hyrox todo domingo 9h". **Resumo de busca não é fonte**; outras: crossfit barueri · hyrox em alphaville · hyrox são paulo | CrossFit Barueri conferida em **duas fontes** (Wellhub e TotalPass: Av. Juruá, 307, Alphaville Industrial; mesmo telefone) → entra como box de CrossFit em Barueri e Alphaville. **Hyrox não entra**: nenhuma das duas lista, e o site da academia está bloqueado aqui → pedir print ao Renato (site ou post da academia sobre o Hyrox) |

Falta: o buscador oficial; print do site ou do perfil da CrossFit Barueri sobre as aulas/simulados de Hyrox.
