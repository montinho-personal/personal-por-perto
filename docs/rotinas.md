# Rotinas agendadas

Sessões automáticas que trabalham neste repositório sem ninguém pedir. Cada
uma abre uma sessão nova, lê o `CLAUDE.md`, faz a tarefa, verifica e faz
push direto na branch `claude/personal-perto-portal-6ask2v`. Nenhuma abre PR.

Existem para que o trabalho repetitivo não dependa de alguém lembrar — e
para que a pergunta "o que aconteceu com aquilo?" tenha resposta no `git log`.

| rotina | quando | o que faz | avisa? |
|---|---|---|---|
| **FerramentaInline — 2 por dia** | todo dia, 09:00 BRT | Pega os 2 próximos artigos da fila `npm run audit:ferramentas` (por tráfego), insere o bloco no parágrafo certo, atualiza a data, builda, verifica, commita e faz push. Para sozinha quando a fila com impressão medida acabar. | push no celular |
| **Cobrança mensal de relatórios** | dia 1º, 09:00 BRT | Pede os exports de Search Console e GA4, arquiva em `docs/relatorios/`, registra os números-chave e compara com o mês anterior. | push no celular |
| **Comparar eventos legados × `clique_elemento`** | 02/10/2026, uma vez | Pede os números dos eventos de clique, compara os três legados com o rastreio universal e propõe (não executa) a remoção. Ver `docs/relatorios/README.md`. | — |

## Regras que toda rotina obedece

- Lê o `CLAUDE.md` antes de tocar em qualquer arquivo.
- Nunca troca de branch, nunca abre PR, nunca faz `push --force`.
- Se algo falhar e não der para resolver, diz o que falhou e **não empurra
  nada quebrado**. Silêncio não é sucesso.
- Data de revisão (`atualizadoEm`) sobe em toda edição visível — é o que
  alimenta o "Atualizado em", o `dateModified` e o `lastmod` do sitemap.
- Não inclui identificador de modelo em commit, código ou comentário.

## Por que 2 por dia, e não 12 por semana

O Google ignora `lastmod` quando muitas páginas mudam no mesmo dia. Doze de
uma vez vira ruído; duas por dia é um sinal contínuo e crível de site vivo.
Com 56 artigos com tráfego na fila, a rotina fecha o passivo em cerca de um
mês.

## Como pausar, ajustar ou apagar

Pelo painel de Rotinas do claude.ai, ou pedindo em qualquer sessão. Mudar o
prompt de uma rotina não apaga o histórico de execuções — preferir editar a
recriar.
