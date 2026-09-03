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
