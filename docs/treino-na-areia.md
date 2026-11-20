# Guia: Treino na areia (`/guias/treino-na-areia/`)

Item 9 da pauta ("Treinar na praia: o que a areia muda"), pedido do Renato
em 20/11/2026 ("quero"). A pesquisa trocou o foco de "praia" para "areia":
"treino na areia" traz PAA e visão de IA; "treino na praia" traz sobretudo
cidades e frases.

**Sazonalidade (Google Trends, BR, 5 anos, "treino na praia" + "treino na
areia"):** média mensal nov 12,4 · dez 14,8 · jan 14,8 · fev 6,5 · mar 1,4.
Pico em dezembro e janeiro: publicar agora, algumas semanas antes.

Recorte: `treinar-ao-ar-livre` = progredir sem carga em praça e parque
(linkado na seção de massa muscular); `treinar-no-calor-e-no-frio` = clima
(linkado nos cuidados). Aqui = a superfície.

## Buscas (SerpApi, 20/11/2026, celular, São Paulo)

JSON em `docs/pesquisas/2026-11-20-treino-na-areia/1.json`: "treino na areia"
(página) + autocompletar de "treino na areia" e "treino na praia".

**Formato:** Scribd, Instagram (personais), Fitslife (Jacarepaguá), Aloha
Spirit. Concorrência fraca; nenhum texto com estudo no topo.

**Visão de IA:** abre com "excelente método para aumentar o gasto calórico,
melhorar a estabilidade e fortalecer a musculatura inferior"; benefícios
(gasto "até 15% ou mais", core e pés, menor impacto, potência) e cuidados
(fadiga rápida, progressão gradual, areia batida para começar). Cita ge,
Instagram, Care Club, Ativo, Smart Fit News. O lead responde no mesmo
formato, com os números do estudo (2,1–2,7× caminhando; 1,6× correndo).

| sinal | onde entrou / por que ficou fora |
|---|---|
| busca principal; AC "benefícios"; IA benefícios | lead + H2 "O que a areia muda" (Lejeune 1998, Brown 2017, Binnie 2013) |
| PAA "O que emagrece mais, correr na areia ou no asfalto?"; AC "para emagrecer", "queimar gordura", "para corrida" | H2 próprio + FAQ + bloco `corrida` |
| PAA "Quais exercícios posso fazer na areia?"; AC "funcional", "circuito", "com bola", "com peso"; AC praia "funcional", "com cones", "exercícios" | H2 com circuito em tabela + FAQ |
| IA "areia fofa × batida"; AC "areia fofa" | H2 próprio + FAQ |
| AC "para ganhar massa muscular" | H2 próprio (ACSM 2009) + FAQ, link `treinar-ao-ar-livre` |
| AC "fortalece o joelho"; IA "menor impacto" | FAQ com Brown 2017 e ressalva de médico/fisioterapeuta |
| IA "progressão gradual", "fadiga rápida" | H2 "Cuidados" |
| IA "até 15% a mais de gasto", "600 kcal/40 min" (Instagram) | ✖ fora: sem estudo; entrou o número do Lejeune |
| PAA "Como o anatoly é tão forte?" | ✖ fora: pessoa |
| PAA "O que é o método 12-3-3-30?" | ✖ fora: sem fonte (já anotado na pauta) |
| AC "para jogador de futebol", "futebol", "para ganhar velocidade" | ✖ fora: treino de esporte; a especificidade (Binnie) responde em parte |
| AC praia "rio de janeiro", "copacabana", "santos", "flamengo", "recreio", "barra", "portugal" | ✖ fora: local; cabe nas páginas de cidade (Rio de Janeiro, Santos) na próxima revisão |
| AC "perto de mim", "frases", "em inglês", "fotos" | ✖ fora: intenção sem conteúdo |

Ferramenta no corpo: `corrida` (calculadora de calorias), na seção
"Correr na areia ou no asfalto". Sem vídeo. Sem capa (Capas pendentes).

## Buscas que ficaram de fora → pauta

- **Vale um artigo:** nenhuma.
- **Cabe em página existente:** "treino na praia rio de janeiro /
  copacabana / flamengo / recreio / barra" → página do Rio de Janeiro;
  "treino na praia santos" → página de Santos (próxima revisão de cada uma).
- **Não recomendo:** "anatoly" (pessoa), "frases", "fotos", "em inglês",
  "portugal" (sem conteúdo ou fora do Brasil).
