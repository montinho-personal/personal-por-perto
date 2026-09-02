# Relatórios — arquivo e comparação

Todo relatório de Search Console ou Analytics enviado pelo Renato entra
aqui, com a data no nome da pasta. O motivo é simples: número solto não diz
nada. "460 cliques" só vira informação quando existe um "180 cliques" de
dois meses antes ao lado.

## Como arquivar

Pasta por data e origem: `AAAA-MM-DD-gsc/` ou `AAAA-MM-DD-ga4/`, com os
arquivos originais dentro, sem renomear além de tirar o prefixo do upload.
Depois, registrar os números-chave na tabela deste arquivo — para que uma
comparação futura não dependa de reabrir planilha.

## Linha de base — Search Console, 28/06 a 31/08/2026 (65 dias)

Arquivos: `2026-09-01-gsc/`

| métrica | valor |
|---|---|
| Cliques | 460 |
| Impressões | 27.931 |
| CTR médio | 1,65% |
| Consultas distintas | 891 |
| Páginas com impressão | 1.000 (teto do export) |

Último dia do período (31/08), para comparar velocidade e não só volume:

| | cliques | impressões | CTR | posição |
|---|---|---|---|---|
| 29/08 | 7 | 626 | 1,12% | 10,5 |
| 30/08 | 8 | 630 | 1,27% | 10,2 |
| 31/08 | 22 | 1.060 | 2,08% | 8,2 |

Por dispositivo:

| | cliques | impressões | CTR | posição |
|---|---|---|---|---|
| Celular | 376 | 20.744 | 1,81% | 8,73 |
| Computador | 82 | 7.093 | 1,16% | 14,58 |
| Tablet | 2 | 94 | 2,13% | 8,24 |

Páginas de topo:

1. `/mounjaro-e-treino/fraqueza-para-treinar` — 14 cliques, 1.643 impressões
2. `/personal-trainer/salvador-ba/` — 11 cliques, 600 impressões
3. `/personal-trainer/joao-pessoa-pb/` — 9 + 8 cliques (duas versões da URL)
4. `/personal-trainer/uberlandia-mg/` — 9 cliques, 217 impressões

Consulta de topo: `personal trainer` — 2.577 impressões, 10 cliques, posição
10,31. Muita impressão e pouco clique é o padrão de quem aparece na segunda
página: o ganho aqui vem de posição, não de título.

Duas observações que valem para a próxima leitura:

- **João Pessoa aparece duas vezes**, com e sem barra final. É resíduo da
  consolidação de URLs de 24/08 (commit `7149cab`); tende a se resolver
  sozinho conforme o Google reprocessa.
- **Celular é 82% dos cliques.** Qualquer decisão de layout que pese
  desktop contra mobile já tem resposta.

## Analytics — sem linha de base ainda

O rastreio de cliques subiu em 02/09/2026 e as 15 dimensões personalizadas
foram criadas no mesmo dia. **Não há histórico antes disso.** A primeira
comparação possível é a partir de outubro.

Ver `docs/ga4-configuracao.md` para o que está registrado e por quê.

## Pendência com data marcada: 02/10/2026

Comparar os eventos legados com o rastreio universal e decidir se os
legados saem.

Hoje um clique no WhatsApp gera **três** eventos:

| evento | origem | o que traz |
|---|---|---|
| `click` | medição aprimorada do GA4 | `link_id`, `link_url` |
| `clique_whatsapp` | legado do site | nada além do clique |
| `clique_elemento` | rastreio universal | 12 parâmetros, região, papel, destino, contexto |

Os dois primeiros são subconjuntos do terceiro. Passados ~30 dias com os
três rodando, a comparação a fazer é: `clique_elemento` com
`destination_group = whatsapp` bate com a contagem de `clique_whatsapp`?

- **Se bater** — remover `clique_whatsapp`, `clique_instagram` e
  `clique_montinho` de `src/layouts/Base.astro`. O relatório fica limpo e
  nada se perde.
- **Se não bater** — o rastreio universal está deixando clique passar, e o
  legado vira a evidência de onde. Investigar antes de remover.

A decisão é do Renato: remover apaga a continuidade com o histórico dos
eventos antigos.
