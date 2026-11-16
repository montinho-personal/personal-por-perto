# Prompt para os outros sites (método do Personal por Perto, 16/11/2026)

Cole o bloco abaixo na primeira mensagem de uma sessão nova do outro site
(ou peça para o Claude incorporá-lo ao CLAUDE.md daquele repositório).
Troque o que está entre colchetes.

---

Neste site, [NOME DO SITE], vamos trabalhar conteúdo com o mesmo método do Personal por Perto. Antes de começar, grave estas regras no CLAUDE.md deste repositório (seções próprias, em português) e siga-as daqui em diante.

**1. Pesquisa no Google pelo SerpApi, antes de escrever.** Artigo novo, página nova ou reescrita grande só ganha título, H1, seções e FAQs depois da pesquisa. Para cada peça, 2 ou 3 buscas (a principal e as secundárias). De cada busca, traga: autocompletar, "As pessoas também perguntam", "Outras pessoas pesquisaram", visão geral de IA (texto e fontes), resultados orgânicos e, em busca local, o mapa (local_results). Sempre Google Brasil, pt-BR, `"device":"mobile"`, e na região da página: a cidade da página quando ela for local; [CIDADE PADRÃO, ex.: São Paulo] quando o assunto for geral. O nome exato da cidade sai de `https://serpapi.com/locations.json?q=<cidade>` (campo canonical_name, grátis). A chave fica no cofre do ambiente e o proxy envia sozinha; use a função:

```bash
serp() { curl -s -m 120 -H 'content-type: application/json' \
  -H 'accept: application/json, text/event-stream' -X POST https://mcp.serpapi.com/mcp \
  -d "{\"jsonrpc\":\"2.0\",\"id\":1,\"method\":\"tools/call\",\"params\":{\"name\":\"search\",\"arguments\":{\"params\":$1,\"mode\":\"compact\"}}}" \
  | python3 -c 'import sys,json; print(json.load(sys.stdin)["result"]["content"][0]["text"])'; }
serp '{"engine":"google","q":"BUSCA","google_domain":"google.com.br","hl":"pt-br","gl":"br","device":"mobile","location":"CIDADE,State of ESTADO,Brazil"}'
serp '{"engine":"google_autocomplete","q":"BUSCA","hl":"pt-br","gl":"br"}'
serp '{"engine":"google_ai_overview","page_token":"TOKEN"}'   # só quando a IA vier só com page_token
```

Se der erro de chave, use a ferramenta request_credential para o host mcp.serpapi.com (tipo bearer) e me peça para colar a chave no formulário; nunca peça a chave na conversa. Print meu só se o SerpApi falhar.

**2. Cota compartilhada.** A conta do SerpApi é uma só para todos os meus sites: 1.000 buscas por mês. Cada busca gasta 2 (página + autocompletar), 3 com a visão de IA em duas etapas. Este site usa no máximo [N, ex.: 60] por mês. Não repita busca do mesmo dia e nunca busque em massa. Se faltar cota, pare e me avise; não escreva sem pesquisa.

**3. Evidência.** Guarde um JSON enxuto de cada busca (busca, data, aparelho, local, autocompletar, perguntas, outras pesquisas, texto e fontes da IA, orgânicos com posição, título e endereço; sem page_token nem links do serpapi.com) em `docs/pesquisas/` e, no doc da peça (`docs/<peça>.md`), uma tabela dizendo onde cada intenção entrou no texto ou por que ficou de fora.

**4. Fonte de fato.** O que o Google mostra, inclusive a visão de IA, diz o que as pessoas perguntam; não é fonte. Número, estudo, data ou fato só entram com fonte primária (estudo, órgão oficial, site oficial) ou dois veículos independentes. Site oficial bloqueado no ambiente: não contorne, me peça um print.

**5. Depois de cada artigo ou revisão, as buscas que ficaram de fora viram pauta.** Sem esperar pedido, confira no site o que já existe e separe em: **vale um artigo** (assunto que o site não cobre, com fonte possível e busca real; entra na pauta com as buscas e o motivo), **cabe em página existente** (anote no doc dessa página para a próxima revisão) e **não recomendo** (com o motivo: marca, fora do tema, sem fonte, canibaliza página que já existe). Só entra na pauta; criar o artigo continua sendo pedido meu.

**6. Fila de reescritas.** Revise primeiro o que o Search Console aponta: página com 10 ou mais impressões em 28 dias e posição média pior que 20. Comece pelo GSC da página (consulta × página) e não mexa em título que já ranqueia e recebe clique.

**7. Páginas locais [se o site tiver].** Rotina de [2] por dia, por ordem de impressões no GSC, pulando as já revisadas: uma busca "[termo principal] <cidade>" na cidade da página + autocompletar; aplicar título, FAQs e correções com fonte; registrar numa tabela em `docs/revisao-<tipo>.md`. Bairro que aparecer vira candidato, sem criar página.

**8. Data de atualização e lote.** Revisão real sobe a data de atualização da página no mesmo commit; mudança que não é revisão (infraestrutura, CSS) não sobe. Antes de mexer em muitas páginas, diga se é de uma vez ou em levas, e por quê (atribuição, raio do erro, credibilidade do lastmod, valor por página).

**9. Na resposta final de cada peça**, mande: o link; o que mudou; as intenções separadas por tipo (autocompletar, "As pessoas também perguntam", "Outras pessoas pesquisaram", visão de IA com o que diz e quem cita, e quem ranqueia), marcando ✅ o que entrou e ✖ o que ficou de fora, com o motivo; e a lista do que foi para a pauta, na ordem em que você faria.

Quando eu pedir "cria o próximo artigo" ou "revisa o próximo", comece direto pela pesquisa, sem perguntar nada antes, e siga o fluxo inteiro: pesquisa, fontes, texto, checagens do site (build e auditorias que existirem), commit e publicação.

---
