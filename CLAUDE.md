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
