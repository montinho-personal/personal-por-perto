/**
 * Modelo enxuto da página de cidade — piloto iniciado em 10/11/2026.
 *
 * POR QUÊ: no relatório de indexação de 10/11 (docs/relatorios/
 * 2026-11-10-gsc-cobertura/), 422 das 993 páginas de cidade ficaram em
 * "Rastreada, mas não indexada". O que as indexadas e as não indexadas têm
 * em comum é o modelo: 48% das palavras de cada página estão em frases que
 * se repetem em 100 ou mais cidades. Quatro seções são quase todas texto
 * fixo: como escolher (81%), treino por objetivo (76%), benefícios (100%) e
 * como avaliar (100%). Juntas, somam cerca de 690 palavras por página.
 *
 * O QUE MUDA nas cidades desta lista:
 *   - "Como escolher" vira um parágrafo curto, com o que é local (a
 *     logística) e o link para o guia completo;
 *   - "Treino por objetivo", "Benefícios" e "Como avaliar" saem. No lugar
 *     entra uma linha com links para os guias por objetivo, onde esse
 *     conteúdo já existe por inteiro;
 *   - sai também o schema ItemList dos "tipos de treino", igual em todas;
 *   - a nota de preço passa a dizer o que as faixas são: referência
 *     editorial por perfil de cidade, não média de mercado (ver o aviso de
 *     procedência em src/data/precos.ts).
 *
 * LOTE, pela regra do CLAUDE.md (mudança de conteúdo renderizado em muitas
 * páginas: comece pequeno). Leva 1: as 10 cidades com mais impressões no
 * 3º trimestre que caíram para "Rastreada, mas não indexada". Mede-se pela
 * inspeção de URL e pelo relatório de indexação: se essas 10 voltarem ao
 * índice mais do que as outras, o modelo sobe para as demais.
 */
export const CIDADES_MODELO_ENXUTO = new Set<string>([
  // leva 1 — 10/11/2026
  'sao-luis-ma', 'natal-rn', 'aracaju-se', 'ribeirao-preto-sp', 'balneario-camboriu-sc',
  'cuiaba-mt', 'juiz-de-fora-mg', 'contagem-mg', 'ananindeua-pa', 'guarulhos-sp',
]);
