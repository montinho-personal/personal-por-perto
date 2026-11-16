# Personal por Perto — regras do projeto

## Data de atualização (obrigatório em TODA edição)

Sempre que uma página/artigo for editada — conteúdo, fotos, vídeo, FAQs,
qualquer mudança visível —, atualizar a data de revisão para o dia da edição
(formato `YYYY-MM-DD`), no mesmo commit:

- **Cidades/regiões** (`src/data/cidades/*.ts`): campo `atualizadoEm`.
  Ele alimenta o "Atualizado em" visível na página, o `dateModified` do
  schema e o `lastmod` do sitemap — por isso nunca pode ficar para trás.
- **Estados** (`src/data/estados/*.ts`): campo `atualizadoEm`.
- **Artigos do blog** (`src/data/artigos.ts` e páginas em `src/pages/`):
  atualizar a data de revisão correspondente da entrada/página editada.

Mudanças que NÃO contam como edição da página: ajustes globais de CSS,
refactors sem alteração de conteúdo renderizado e correções de infraestrutura
(sitemap, redirects). Nesses casos, não alterar `atualizadoEm` em massa —
o Google ignora `lastmod` quando tudo muda ao mesmo tempo.

## Capa nova em cidade obriga checagem de academias

Ao subir a `capaArte` de uma cidade/região, verificar as academias da mesma
cidade e preencher `academiasProximas` no mesmo commit. Capa e academias
andam juntas: a página só vai ao ar "redonda" quando tem as duas.

Critério de verificação (nunca inventar nome):
- Página oficial da rede vale sozinha; na falta dela, exigir duas fontes
  independentes com o mesmo endereço.
- Sempre conferir a UF na fonte — nomes de cidade e bairro se repetem
  muito no Brasil (Juazeiro/BA × Juazeiro do Norte/CE, Macaé/RJ ×
  Maceió/AL, Sumaré cidade × bairro de São Paulo).
- Sem endereço confirmado, entra só o `nome` — `detalhe` é opcional.
- Unidade em pré-venda ou "em breve" não entra até abrir.
- Preferir poucas entradas certas a muitas duvidosas.

`npm run audit:academias` lista as cidades que têm capa e ainda não têm
academias — essa lista precisa ficar zerada.

## Relatórios enviados: arquivar sempre, no mesmo commit

Todo relatório de Search Console ou Analytics que o Renato mandar entra em
`docs/relatorios/AAAA-MM-DD-<origem>/`, com os arquivos originais, e tem os
números-chave registrados na tabela de `docs/relatorios/README.md`.

Isso não é burocracia: sem a série histórica, cada relatório vira um número
solto e nenhuma conversa consegue responder "melhorou?". O arquivo existe
para que a comparação seja possível meses depois, sem depender de reabrir
planilha nem da memória de ninguém.

Ao arquivar um relatório novo, comparar com o anterior e dizer o que mudou
— inclusive quando a resposta for "quase nada", que também é informação.

## Antes de qualquer tarefa em lote: de uma vez ou ao longo dos dias?

Toda tarefa que toca muitas páginas passa por esta análise antes de começar,
e a conclusão vai escrita no commit ou na resposta.

**O que NÃO é motivo para dividir.** Não existe penalidade do Google por
volume de publicação. Crawl budget é irrelevante abaixo de ~100 mil URLs —
este site tem 1.268. Invocar essas duas coisas para justificar lentidão é
superstição de SEO, e leva a adiar trabalho bom por medo inventado.

**Os quatro motivos reais, em ordem de peso:**

1. **Atribuição.** Mudou oito coisas no mesmo dia e o tráfego se moveu:
   qual delas foi? Espalhar é o que permite ler causa e efeito depois. Este
   é o motivo mais forte e vale mesmo quando não há risco nenhum.
2. **Raio do erro.** Um defeito de padrão pego no segundo dia custa 4
   páginas; pego depois do lote inteiro, custa 140. Quanto mais nova a
   mecânica, menor o lote.
3. **Credibilidade do `lastmod`.** O Google ignora a data quando ela muda em
   massa. Cada bump sem revisão real gasta a confiança do sinal — e quem
   paga a conta é a próxima reescrita de verdade, que precisa ser recrawleada
   rápido.
4. **Valor por página (o único risco real de política).** A política de
   *scaled content abuse* do Google mira produzir muitas páginas sem valor
   próprio, e cita geração automática nominalmente. O critério dela é
   qualidade por página e variedade, não velocidade. Publicar rápido é
   seguro; publicar rápido, igual e raso não é.

**Como decidir:**

| a tarefa… | então |
|---|---|
| corrige defeito ou quebra algo hoje | de uma vez, sem esperar |
| é infraestrutura invisível ao leitor | de uma vez, sem tocar `atualizadoEm` |
| altera conteúdo renderizado em muitas páginas | dividir — comece pequeno e acelere quando o padrão provar que funciona |
| cria páginas novas | dividir sempre, e checar variedade além do ritmo |
| depende de verificação externa (endereço, fonte) | dividir por limite de checagem honesta, não por medo |

**Regra de ritmo:** a primeira leva é sempre pequena o suficiente para
revisar item a item. Só depois de uma leva limpa o volume sobe.

## Antes de criar qualquer coisa: os prints do Google

Ferramenta, página ou artigo novo — e reescrita grande — só ganha título,
estrutura, conteúdo e FAQs depois dos prints do Google das intenções de
busca. Desde 16/11/2026 esses dados vêm do SerpApi, buscados pelo Claude
(seção "Pesquisa no Google pelo SerpApi" abaixo); print do Renato só se o
SerpApi falhar. De cada busca:

- o autocompletar (digitar a busca devagar);
- "Outras pessoas pesquisaram";
- "As pessoas também perguntam" (com 2 ou 3 abertas);
- a visão geral de IA, quando aparecer.

Motivo: nas calculadoras de calorias, de descanso e de pace, os prints
mudaram tabelas, títulos e FAQs — e revelaram erros que a pesquisa sozinha
não pegou (o "sub 3" da maratona, o recorde do Sawe). Sem eles, a página
responde o que a gente acha que as pessoas perguntam, não o que perguntam.

Enquanto os prints não chegam, dá para adiantar o que eles não mudam:
auditoria do site, pesquisa de método e fontes, motor de cálculo e testes.
Título, H1, seções, tabelas do texto e FAQs esperam. Os prints recebidos
ficam registrados no doc da peça (`docs/<peça>.md`), com o que entrou e onde.

## Pesquisa no Google pelo SerpApi (no lugar dos prints)

Desde 16/11/2026, os dados do Google que o Renato mandava em print vêm do
**SerpApi**, buscados pelo próprio Claude no começo da tarefa. Não pedir print
ao Renato; só se o SerpApi falhar (sem cota ou fora do ar).

**Pedido de "cria o próximo artigo" ou "revisa o próximo" (regra do Renato,
16/11/2026):** começar já pela pesquisa, sem perguntar nada antes. Pegar a próxima
peça da pauta (ou a que ele nomear), definir 2 ou 3 buscas (a principal e as
secundárias do doc ou da pauta), buscar no SerpApi e seguir o fluxo inteiro deste
arquivo: fontes, texto, checagens e publicação. Na resposta final, além do link,
mandar as intenções de busca separadas por tipo (autocompletar, "As pessoas também
perguntam", "Outras pessoas pesquisaram", visão de IA com o que diz e quem cita, e
quem ranqueia), marcando o que entrou no texto e o que ficou de fora, com o motivo.

**Depois de cada artigo ou revisão: as buscas que ficaram de fora viram pauta (regra do
Renato, 16/11/2026).** Sem esperar pedido, pegar tudo o que foi marcado como "ficou de
fora" nas intenções de busca, conferir no site (artigos, páginas e docs) o que já existe
e separar em três grupos: **vale um artigo** (assunto que o site ainda não cobre, com
fonte possível e busca real; entra na pauta com as buscas e o motivo), **não recomendo**
(com o motivo: nome de marca, fora do tema do site, sem fonte, canibaliza uma página que
já existe) e **cabe em página existente** (anotar no doc dessa página, para a próxima
revisão dela). Mandar ao Renato junto com a resposta final, em lista curta, na ordem em
que faria os artigos. Só entra na pauta; criar o artigo continua sendo um pedido dele.

**O que trazer de cada busca:** autocompletar, "As pessoas também perguntam",
"Outras pessoas pesquisaram", visão geral de IA (texto e fontes), resultados
orgânicos e, em busca local, o mapa (`local_results`). Google Brasil, pt-BR, sem
personalização, **como celular** e na **região do site** (abaixo).

**Aparelho e região (pedido do Renato, 16/11/2026):** sempre `"device":"mobile"`, porque
a maior parte do público chega pelo celular. Região padrão deste site: a **cidade da página**: `personal-trainer-<bairro>` usa a cidade do bairro (ex.: Aldeota → `Fortaleza,State of Ceara,Brazil`). Guias e ferramentas sem cidade usam **São Paulo** (`Sao Paulo,State of Sao Paulo,Brazil`).
O nome exato da cidade sai da lista de locais do SerpApi, que é grátis e não gasta cota:
`curl -s "https://serpapi.com/locations.json?q=Barueri&limit=3"` (usar o `canonical_name`).
Bairro quase nunca existe na lista: use a cidade. O autocompletar não aceita cidade nem
aparelho; ele sai pelo Brasil (`gl=br`). Mesmo assim, o resultado não bate 100% com o
celular do Renato: muda com o dia, com testes do Google e com a digitação letra a letra.

**Como buscar** (bash; a chave está no cofre do ambiente e o proxy a envia sozinho,
não passe chave nenhuma):

```bash
serp() { curl -s -m 120 -H 'content-type: application/json' \
  -H 'accept: application/json, text/event-stream' -X POST https://mcp.serpapi.com/mcp \
  -d "{\"jsonrpc\":\"2.0\",\"id\":1,\"method\":\"tools/call\",\"params\":{\"name\":\"search\",\"arguments\":{\"params\":$1,\"mode\":\"compact\"}}}" \
  | python3 -c 'import sys,json; print(json.load(sys.stdin)["result"]["content"][0]["text"])'; }

# Página de resultados: related_questions, related_searches, ai_overview, organic_results, local_results
serp '{"engine":"google","q":"BUSCA","google_domain":"google.com.br","hl":"pt-br","gl":"br","device":"mobile","location":"CIDADE,State of ESTADO,Brazil"}'
# Autocompletar: suggestions[].value
serp '{"engine":"google_autocomplete","q":"BUSCA","hl":"pt-br","gl":"br"}'
# Visão de IA que veio só com "page_token" (sem text_blocks): um pedido a mais
serp '{"engine":"google_ai_overview","page_token":"TOKEN"}'
```

**Cota:** uma conta só para todos os sites do Renato, 250 buscas por mês no plano
grátis. Cada busca gasta 2 (página + autocompletar), 3 com a visão de IA em duas
etapas. Buscar só o que a peça precisa (em geral 2 ou 3 buscas), nunca em massa, e
não repetir busca já feita no mesmo dia.

**Evidência:** guardar no doc da peça, no lugar dos prints, um JSON enxuto de cada
busca (busca, data, autocompletar, perguntas, outras pesquisas, texto e fontes da
visão de IA, orgânicos com posição, título e endereço), sem `page_token` nem links
do serpapi.com, e preencher a tabela de prints dizendo o que cada dado mudou no texto.

**Continua valendo:** o que o Google mostra, inclusive a visão de IA, diz o que as
pessoas perguntam; não é fonte de fato.

**Se der erro de chave** ("Invalid API key", 401 ou host bloqueado): a chave não está
no ambiente desta sessão. Chamar a ferramenta `request_credential` para o host
`mcp.serpapi.com` (tipo bearer) e pedir ao Renato que cole a chave do SerpApi (menu
"API Key" em serpapi.com) no formulário. Nunca pedir a chave na conversa.

## Todo artigo leva uma ferramenta no corpo do texto

Artigo novo — ou artigo editado — recebe **um** `<FerramentaInline>` no
parágrafo em que a ferramenta responde à dúvida que o texto acabou de
levantar. Uma só, escolhida à mão, com a frase de ligação escrita para
aquele contexto. Nunca uma lista de ferramentas no fim.

Motivo: em 02/09/2026, 140 dos 142 artigos não linkavam nenhuma das sete
ferramentas no corpo. Elas só existiam no menu, na sidebar e no CTA
automático do rodapé — lugares por onde quem está lendo não passa. E o CTA
automático é o mesmo para o cluster inteiro.

O bloco carrega `data-track="artigo:ferramenta-inline"`, então no GA4 dá
para comparar este convite com o CTA do fim. Se a medição mostrar que ele
não converte, a regra cai — mas cai por dado, não por palpite.

**Inserir o bloco NÃO atualiza `atualizadoEm`.** É a única exceção à regra
de data, e vale por dois motivos. Para o leitor: "atualizado em" promete
revisão de conteúdo, e ganhar uma caixa de convite não é revisão — dizer que
é engana quem lê. Para o Google: são 52 bumps ocos que gastariam a
credibilidade do `lastmod` justamente onde ela importa, que é a fila de
reescritas. Quando o mesmo commit também revisa o texto, aí sim a data sobe
— pela revisão, não pelo bloco.

**Calculadoras no artigo (desde 24/09/2026).** O bloco aceita as
calculadoras do catálogo, e a palavra que JÁ está na frase pode virar link
para a calculadora daquela atividade ("caminhada rápida" →
`/calorias/caminhada/`) — só em contexto de gasto, nunca com frase nova
escrita para caber o link, no máximo dois por artigo (a exceção é a
frase que já enumera atividades comparando gasto, onde cada uma leva a sua). Transformar palavra
existente em link segue a mesma exceção do bloco: não sobe `atualizadoEm`,
pelos mesmos dois motivos. O mapa de qual artigo leva o quê, e por quê,
está em `docs/ferramentas-nos-artigos.md`; `npm run test:ferramentas-inline`
confere as regras do bloco nos artigos todos.

**Pace e percentual de gordura (desde 06/10/2026).** A mesma exceção do
link em palavra existente vale para duas calculadoras além das de calorias:

- `/ferramentas/calculadora-de-pace/` — só onde a frase já fala de ritmo,
  pace, km/h, esteira ou tempo de prova ("pace", "meia maratona em 2 horas");
- `/ferramentas/calculadora-de-percentual-de-gordura/` — só onde a frase já
  fala de percentual de gordura, composição corporal, IMC ou medida de
  cintura.

As travas são as mesmas: a palavra JÁ está na frase, nunca frase nova
escrita para caber o link, o contexto tem de ser o da calculadora (não
basta citar a palavra de passagem), e o teto de dois links de calculadora
por artigo conta o conjunto — calorias, pace e gordura somados. Não sobe
`atualizadoEm`, pelos mesmos dois motivos do bloco. Como altera texto
renderizado em muitas páginas, entra pela rotina diária (2 artigos por
dia, pelo mapa), não em varredura única.

## Outras regras editoriais fixas

- Nunca mencionar CREF/CONFEF em nenhum conteúdo.
- Sem promessa de cura; dores/limitações sempre com ressalva de médico ou
  fisioterapeuta.
- Artigos de humor fitness (`/humor-fitness/`) nunca mencionam
  @montinho_personal nem levam CTA de consultoria no corpo.
- URLs internas, canonical, sitemap e schema sempre com barra final (`/`).
- Fotos: otimizar com sharp para WebP em `public/montinho/` (kebab-case),
  remover o original pesado, e usar `width`/`height` reais no `<img>`.
- Vídeos do YouTube: embed via `youtube-nocookie.com`, `loading="lazy"`,
  proporção 9:16 para Shorts.
