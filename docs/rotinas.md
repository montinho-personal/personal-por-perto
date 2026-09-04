# Rotinas agendadas

Sessões automáticas que trabalham neste repositório sem ninguém pedir. Cada
uma abre uma sessão nova, lê o `CLAUDE.md`, faz a tarefa, verifica e faz
push direto na branch `claude/personal-perto-portal-6ask2v`. Nenhuma abre PR.

Existem para que o trabalho repetitivo não dependa de alguém lembrar — e
para que a pergunta "o que aconteceu com aquilo?" tenha resposta no `git log`.

## As quatro diárias

Horários escalonados de propósito: quatro sessões empurrando para a mesma
branch no mesmo minuto viraria conflito de merge todo dia.

| horário (BRT) | rotina | fila | o que faz |
|---|---|---|---|
| **09:00** | FerramentaInline | `npm run audit:ferramentas` | Insere o convite a uma ferramenta no corpo de 2 artigos, no parágrafo em que a dúvida aparece. |
| **11:00** | Reescrita de artigos presos | `docs/reescritas.md` | Diagnostica por que 2 artigos com demanda estão além da página 2 e corrige a causa. |
| **14:00** | Pauta editorial | `docs/pauta-editorial.md` | Escreve 2 artigos novos — depois de checar que o assunto já não está respondido em outro. |
| **16:00** | Academias das cidades com capa | `npm run audit:academias` | Verifica na web e preenche `academiasProximas` de 2 cidades que subiram capa sem academia. |

Todas mandam **push no celular** ao terminar, com o que fizeram e quanto
falta.

## As periódicas

| quando | rotina | o que faz |
|---|---|---|
| dia 1º, 09:00 | Cobrança mensal de relatórios | Pede os exports de GSC e GA4, arquiva em `docs/relatorios/`, compara com o mês anterior. |
| 02/10/2026, uma vez | Eventos legados × `clique_elemento` | Compara os três eventos antigos com o rastreio universal e propõe (não executa) a remoção. |

## Quanto tempo cada fila leva

| fila | itens | ritmo | fecha em |
|---|---|---|---|
| FerramentaInline | 56 com tráfego | 2/dia | ~28 dias |
| Reescritas | 13 | 2/dia | ~7 dias |
| Pauta editorial | 51 | 2/dia | ~26 dias |
| Academias (com capa) | 29 | 2/dia | ~15 dias |

Cada rotina **para sozinha** quando a fila acaba, avisa e pergunta o que
fazer — nenhuma inventa trabalho para continuar existindo.

## A primeira falha, e o que ela ensinou — 04/09/2026

A rotina da pauta disparou em 03/09 às 14h e não entregou nada. O motivo não
tinha relação com a tarefa: **`node_modules/` está no `.gitignore`**, então
toda sessão nova recebe um clone limpo, sem dependências — e o primeiro
comando de qualquer rotina (`npm run audit:*`, `npm run build`) precisa do
`tsx` e do `astro`, que vivem lá. O erro era `sh: 1: tsx: not found`,
reproduzido escondendo o `node_modules` e rodando o mesmo comando.

Isso quebraria **as quatro rotinas**, não só a pauta. A correção é o
`SessionStart` hook em `.claude/hooks/session-start.sh`, que roda
`npm install` antes de a sessão começar — na raiz, e não remendando quatro
prompts.

Duas lições que valem além deste caso:

- **Rotina que não entrega não avisa sozinha.** Esta falhou em silêncio; foi
  o `git log` vazio que denunciou. Por isso vale conferir os commits, não só
  as notificações.
- **O ambiente de uma sessão automatizada não é o da sessão em que ela foi
  criada.** O que "já está instalado" aqui não está lá.

## Regras que toda rotina obedece

- Lê o `CLAUDE.md` antes de tocar em qualquer arquivo.
- Nunca troca de branch, nunca abre PR, nunca faz `push --force`.
- Se algo falhar e não der para resolver, diz o que falhou e **não empurra
  nada quebrado**. Silêncio não é sucesso.
- Data de revisão (`atualizadoEm`) sobe em toda edição visível.
- Não inclui identificador de modelo em commit, código ou comentário.
- **Prefere entregar menos e explicar por quê a entregar o número cheio com
  qualidade ruim.** A rotina da pauta já nasceu com instrução de cancelar
  artigo redundante em vez de escrevê-lo; a das academias, de deixar cidade
  sem lista em vez de publicar nome não confirmado.

## Análise de ritmo e risco — 04/09/2026

A regra do CLAUDE.md ("Antes de qualquer tarefa em lote") aplicada às quatro
filas. A conclusão que vale para todas: **não existe penalidade do Google por
volume de publicação**, e crawl budget é irrelevante em 1.268 URLs. As
quatro rodam a 8 páginas por dia, cerca de 19% do site em um mês — volume
alto, risco de política concentrado em uma fila só.

| fila | o que faz | risco de política | por que o ritmo é esse |
|---|---|---|---|
| Reescrita | melhora página existente | **nenhum** | é o que o Google pede que se faça; o limite é o diagnóstico honesto, não o medo |
| Academias | acrescenta dado verificado | **nenhum** | melhora justamente as páginas mais vulneráveis a "conteúdo raso"; o limite é a checagem externa |
| FerramentaInline | acrescenta um link interno | **nenhum** | o limite é atribuição: espalhar permite ler se o bloco converte |
| Pauta editorial | **cria páginas novas** | **real** | única em que *scaled content abuse* se aplica |

**Duas mudanças saíram desta análise:**

1. **FerramentaInline parou de atualizar `atualizadoEm`.** Contraria a
   instrução original da rotina, e o motivo principal é o leitor: "atualizado
   em" promete revisão de conteúdo, e ganhar uma caixa de convite não é
   revisão. O motivo secundário é técnico — 52 bumps ocos gastariam a
   credibilidade do `lastmod` justo onde ela importa, que é a fila de
   reescritas.

2. **A pauta editorial para aos 20 artigos** e exige leitura do Search
   Console para continuar. É a única fila que cria páginas, e o critério da
   política do Google (valor e variedade por página) não se mede de dentro:
   só o relatório diz se os artigos estão sendo indexados e ganhando posição
   ou nascendo mortos. Vinte é amostra suficiente e correção barata; 50 sem
   olhar seria escrever no escuro. A rotina também ganhou instrução explícita
   de variar a estrutura — 50 artigos com o mesmo esqueleto formam um padrão
   detectável, e o risco mora aí, não na velocidade.

## Por que 2 por dia, e não um lote grande por semana

O Google ignora `lastmod` quando muitas páginas mudam no mesmo dia. Doze de
uma vez vira ruído; oito páginas por dia distribuídas em quatro tarefas
diferentes é sinal contínuo e crível de site vivo.

Mas o motivo mais forte não é esse, e sim **atribuição**: mudou oito coisas
no mesmo dia e o tráfego se moveu, qual delas foi? Espalhar é o que torna a
leitura de causa e efeito possível daqui a um mês.

## O risco que essas rotinas trazem

Quatro sessões por dia escrevendo sem revisão humana acumulam volume rápido
— e um erro de padrão se replica em dezenas de páginas antes de alguém
notar. Duas defesas existem hoje: cada rotina verifica o próprio trabalho
com `npm run build` e `audit:canonical` antes do push, e todas avisam no
celular. A terceira defesa é o `git log`: vale ler os commits de vez em
quando, não só as notificações.

## Como pausar, ajustar ou apagar

Pelo painel de Rotinas do claude.ai, ou pedindo em qualquer sessão. Mudar o
prompt de uma rotina não apaga o histórico de execuções — preferir editar a
recriar.
