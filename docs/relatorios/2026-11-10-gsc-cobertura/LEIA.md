# GSC — Indexação das páginas, 10/11/2026

Enviado pelo Renato: 3 prints do relatório "Indexação das páginas" (motivos de
não indexação) e o drilldown de **"Rastreada, mas não indexada no momento"**
(`coverage-drilldown-2026-11-10.xlsx`, 449 URLs, gráfico de 13/08 a 05/11).

## Motivos de não indexação (print)

| motivo | páginas | validação |
|---|---|---|
| Página alternativa com tag canônica adequada | 137 | não iniciada |
| Página com redirecionamento | 134 | não iniciada |
| Não encontrado (404) | 1 | não iniciada |
| **Rastreada, mas não indexada no momento** | **449** (subindo) | não iniciada |
| Cópia, o Google e o usuário selecionaram canônica diferente | 8 | não iniciada |
| Detectada, mas não indexada no momento | 18 | aprovada |

## Comparação com o drilldown de 13/09/2026

- "Rastreada, mas não indexada": **75 → 449 URLs**. Pelo gráfico do próprio
  export: 25 (13/08), 75 (03/09), **213 (24/09)**, 290 (08/10), **485
  (15/10)**, 449 (29/10 em diante). 35 URLs da lista de setembro saíram (foram
  indexadas); 409 entraram.
- Composição de hoje: **422 páginas de cidade** (de 993), 5 de bairro, 10 de
  musculação, 7 de emagrecimento, 3 guias, `/humor-fitness` (sem barra) e
  `/busca-index.json`.

## O que a análise mostrou

1. **Atributos da página não separam indexadas de não indexadas.** Contei no
   HTML gerado: as duas metades têm mediana de ~3.320 palavras e o mesmo
   texto exclusivo (~48% das frases aparecem em ≤2 páginas). Também não há
   corte por porte: a taxa de não indexação fica entre 34% e 47% em toda
   faixa de população. A presença de academias, capa ou vídeo muda pouco
   (academias 29% × 35%; vídeo 6% × 19%, mas o vídeo foi para as cidades com
   mais impressão, então o dado está enviesado).
2. **Leitura:** o Google está avaliando o *modelo* das páginas de cidade como
   conjunto e indexando só uma parte. É o padrão de páginas programáticas
   parecidas entre si. Cerca de metade do texto de cada cidade é igual em
   todas, com o nome trocado. Isso é o risco de *scaled content* que o
   CLAUDE.md descreve.
3. **Ele tirou do índice cidades que tinham demanda.** Várias das 422
   tiveram impressões no 3º trimestre (Supermetrics, 01/07–30/09):
   Rondonópolis (55), Alagoinhas (26), Cachoeiro de Itapemirim (16 + 26 sem
   barra), Iguatu (13), Mineiros (11), Imperatriz (10) e Ibiúna (10).
4. **Os saltos não coincidem com uma mudança só.** Perto de 24/09 entraram
   links do Bloco Local nas 985 cidades (18–20/09). Perto de 15/10 houve a
   correção de texto do preço avulso nas 988 cidades (05/10). Os dois fizeram
   o Google rastrear o conjunto de novo. A causa é a reavaliação do modelo,
   não o conteúdo dessas duas mudanças.
5. **Os outros motivos são esperados, não são defeito:**
   - "redirecionamento" (134) são as URLs sem barra, que respondem 308 para
     a versão com barra (conferido);
   - "canônica adequada" (137) são variantes com parâmetro ou sem barra;
   - `/busca-index.json` já tem `X-Robots-Tag: noindex` (conferido em
     `vercel.json` e no cabeçalho em produção). Só precisa de tempo.

## Pendente para fechar a análise

- O drilldown dos 8 "Cópia, canônica diferente" (descobrir quais páginas o
  Google considera duplicadas entre si).
- Desempenho (consultas e páginas, 3 meses × 3 meses anteriores), Core Web
  Vitals e Sitemaps, que o Renato disse que vai mandar.
