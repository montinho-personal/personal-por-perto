#!/bin/bash
#
# Instala as dependências antes de a sessão começar.
#
# Por que isto existe: `node_modules/` está no .gitignore, então toda sessão
# nova do Claude Code na web recebe um clone limpo, SEM dependências. E o
# primeiro comando de qualquer trabalho aqui — `npm run audit:*`, `npm test:*`,
# `npm run build` — depende de `tsx` e `astro`, que vivem lá.
#
# Sem este hook, uma sessão automatizada morre no primeiro comando. Foi o que
# aconteceu com a rotina da pauta editorial em 03/09/2026: ela disparou,
# encontrou um repositório sem dependências e não entregou nada.
#
set -euo pipefail

# Só no ambiente remoto. Na máquina de alguém, as dependências já estão lá e
# reinstalar a cada sessão seria só demora.
if [ "${CLAUDE_CODE_REMOTE:-}" != "true" ]; then
  exit 0
fi

cd "${CLAUDE_PROJECT_DIR:-$(dirname "$0")/../..}"

# `npm install` e não `npm ci`: o estado do contêiner é cacheado depois do
# hook, e o install aproveita esse cache entre sessões.
npm install --no-audit --no-fund
