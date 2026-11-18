# AGENTS.md — Personal por Perto

Regras de trabalho para qualquer agente neste repositório. Complementa o
`CLAUDE.md` (que continua valendo inteiro: data de atualização, academias,
lote, pesquisa no SerpApi, ferramenta no corpo do texto e regras editoriais).
Pedido do Renato em 16/11/2026, o mesmo método do montinhopersonal.com.br.

## Pauta única: `docs/seo/pauta.md`

Quatro partes: (1) artigos novos, na ordem sugerida, com volume do
Planejador do Google Ads quando houver; (2) temas que viram seção ou FAQ de
um artigo existente, dizendo qual; (3) materiais para baixar; (4) revisões
pendentes — artigos publicados sem pesquisa do Google, na ordem de
publicação. Mais a lista "Capas pendentes".

- **Pauta é sugestão: nada é escrito sem o Renato escolher.**
- Antes de pôr um item na pauta, conferir contra o acervo (slug, título e
  páginas, com hífen e acento normalizados) para não sugerir o que já existe.
- Ao publicar ou revisar, riscar a linha (`~~...~~`) e anotar o slug e a data.

## O que fica de fora vira pauta

Toda revisão ou artigo novo com pesquisa termina separando as buscas que
ficaram de fora em três grupos, cada uma com o motivo:

1. **Vale um artigo** — o site não cobre e cabe no tema do site (treino,
   emagrecimento, personal trainer). Entra na parte 1 da pauta.
2. **Vira seção de um artigo existente** — dizer qual. Entra na parte 2 da
   pauta (e, se quiser, no doc daquela página).
3. **Não cabe** — pessoa, marca, promessa, outro serviço, fora do tema, sem
   fonte possível.

## Rotina diária de revisão

Uma tarefa agendada nesta sessão, todo dia às **9h10** (horário de São
Paulo; o montinhopersonal roda às 15h41). **N = 2 artigos por dia** — o
Renato liberou o uso dos créditos em 16/11 e decide quando acabarem (ver "Cota").

- **Ordem:** primeiro a parte 4 da pauta (revisões pendentes); depois, os
  artigos com impressões no Search Console e CTR baixo ou posição entre 5 e
  20 (últimos 28 dias).
- **Pesquisa:** SerpApi como o `CLAUDE.md` descreve — celular; região: a
  cidade da página quando for página de cidade ou bairro, São Paulo nos
  assuntos gerais. Orçamento: a busca principal (página + autocompletar = 2
  créditos), mais 1 se a visão de IA vier em duas etapas; busca secundária só
  se a principal vier fraca. Não repetir busca já feita.
- **Reescrita:** todas as regras do repositório — canibalização (conferir os
  vizinhos antes), fato só com fonte oficial ou dois veículos (print e visão
  de IA não são fonte), H2 e FAQ a partir do que as pessoas buscam,
  `atualizadoEm` só com mudança real, um `FerramentaInline` por artigo, sem
  sigla do conselho, ressalva de médico/fisioterapeuta em dor ou limitação.
- **Evidência:** JSON enxuto de cada busca em `docs/pesquisas/` (sem
  `page_token` nem links do serpapi.com) e o registro do que mudou no doc da
  peça (`docs/<slug>.md`).
- **Itens da parte 2 da pauta (desde 18/11/2026):** além das 2 revisões,
  aplicar **2 itens** da parte 2 ("viram seção ou FAQ de um artigo
  existente"), na ordem da tabela: seção ou FAQ com fonte na página
  indicada, `atualizadoEm` da página sobe (mudança real), riscar a linha
  com a data e anotar no doc da página. Sem SerpApi (a busca já foi
  feita). Item sem fonte acessível fica, com o motivo anotado.
- **Título e descrição: só proposta**, no formato ATUAL / PROPOSTA / MOTIVO,
  no doc da peça e na resposta. Nunca trocar sem o Renato aprovar.
- **Publicar:** `npm run build`, `audit:canonical`, `audit:links`,
  `audit:metadados` (comparar com a contagem de falhas que já existia) e
  `test:ferramentas-inline`; commit e push **direto na branch de
  desenvolvimento** (neste repositório não se abre PR — regra da sessão); se
  rejeitado, `git pull --rebase` e push, nunca force. Conferir no ar depois do
  deploy.
- **Resposta ao Renato**, em português e curta: os links; as intenções
  separadas por tipo (autocompletar, "As pessoas também perguntam", "Outras
  pessoas pesquisaram", visão de IA com o que diz e quem cita, e quem
  ranqueia), com ✅ o que entrou e ❌ o que ficou de fora; a separação do que
  ficou de fora; e as propostas de título que esperam aprovação.
- **SerpApi sem cota, com erro de chave ou fora do ar:** parar e avisar. Não
  revisar às cegas e não pedir print sem o Renato concordar. Erro de chave:
  `request_credential` para `mcp.serpapi.com`, nunca a chave na conversa.

## Cota do SerpApi

Uma conta para todos os sites do Renato: **1.000 buscas por mês** desde
16/11/2026 (o Renato subiu o plano). O orçamento valendo é o do `CLAUDE.md`
("Orçamento do mês", 16/11/2026): este site fica com cerca de 360 (artigos e
cidades, 2 + 2 por dia), mais o monitor mensal de visão de IA (dia 16). A
soma de todos os sites passa de 1.000 **de propósito** (decisão do Renato).
Por isso: quando o SerpApi disser que a cota acabou, parar a tarefa na hora,
não pesquisar às cegas nem pedir print, e avisar o Renato nesta conversa —
ele decide se aumenta o plano ou espera renovar.

## Capas

O padrão é `public/capas-conteudo/<slug>.webp`, 1200×675, arte própria do
site. Sem como produzir no padrão, publicar sem capa e anotar o artigo em
"Capas pendentes" na pauta. Nada de capa improvisada.
