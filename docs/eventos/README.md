# Cobertura de eventos

Modelo: artigo do evento + varreduras até a prova + atualização com o
resultado no dia. Pedido do Renato em 12/10/2026.

Um arquivo por evento, com:

- **Confirmado** — fato, fonte (URL) e se é oficial ou "2 veículos";
- **Pendente** — o que ainda não tem fonte, com a pista e onde conferir;
- **Bloqueado** — fonte oficial que a rede deste ambiente não abre (pedir
  print ao Renato; não contornar);
- **Prints de busca** — o que chegou e o que entrou no artigo;
- **Artigo** — URL, quando publicado.

Regra de fato: só fonte oficial (site da prova, organizador, prefeitura,
plataforma de inscrição) ou dois veículos independentes. Print de resumo de
busca e visão geral por IA não são fonte. Dado divergente: só a parte que
bate. Nunca inventar horário, preço, premiação, percurso, vencedor ou tempo.

Artigos ficam em `src/pages/guias/<evento>.astro` (URL `/guias/<evento>/`).

Ordem de publicação (regra de ritmo do CLAUDE.md, páginas novas uma de cada
vez): HYROX SP → Maratona de Curitiba → Maratona Monumental de Brasília →
São Silvestre. As datas das provas já espalham naturalmente.

| evento | data | registro | artigo |
|---|---|---|---|
| HYROX São Paulo 2026 | 17–18/10 (confirmado) | [hyrox-sao-paulo-2026.md](hyrox-sao-paulo-2026.md) | /guias/hyrox-sao-paulo-2026/ |
| Maratona de Curitiba 2026 | 15/11 (confirmado) | [maratona-de-curitiba-2026.md](maratona-de-curitiba-2026.md) | /guias/maratona-de-curitiba-2026/ |
| Maratona Monumental de Brasília 2026 | 21–22/11 (confirmado) | [maratona-monumental-de-brasilia-2026.md](maratona-monumental-de-brasilia-2026.md) | /guias/maratona-monumental-de-brasilia-2026/ |
| 101ª São Silvestre | 31/12 (confirmado) | [sao-silvestre-2026.md](sao-silvestre-2026.md) | /guias/sao-silvestre-2026/ |

## Rotinas (horário de Brasília)

| rotina | quando | id |
|---|---|---|
| Varredura HYROX SP | ter e sex 8h41, até 18/10 | trig_01NkH9MrSL9NL4E2RKdYHixX |
| Varredura Curitiba + Brasília | ter e sex 8h47, até 22/11 | trig_01YZi5RZpQQm6JeSaSYaygQj |
| Varredura São Silvestre | ter e sex 8h53, até 31/12 | trig_019Hg4VMTffCztEfK4FGjYdK |
| Resultado HYROX SP | 18/10 19h | trig_019e9Pow2F2eUGc5xuxzDr2m |
| Resultado Curitiba | 15/11 12h | trig_013pbC3p2kTDcNZcYab6FWYp |
| Resultado Brasília | 22/11 12h | trig_01WgpAHgyjuSVHsKMAXBx6on |
| Resultado São Silvestre | 31/12 9h30, 13h e 16h | trig_01LdbUaoXurcM5xy8cbhjTBC, trig_01JHseJ5dtmCY6Wjsg1ytHSL, trig_016CqJ1W71d5XmsuGeDfTdwM |
| Regulamento São Silvestre | 16/11 9h12 (reagenda +1 semana se não saiu) | trig_01JnmmxCd4MmCyqJP9y6XsNk |

Sem novidade, a varredura não mexe em nada. Sem resultado confirmado, a
rotina de resultado não publica e reagenda +3h.
