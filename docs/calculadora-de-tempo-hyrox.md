# Ferramenta: Calculadora de tempo do Hyrox (`/ferramentas/calculadora-de-tempo-hyrox/`)

Publicada em 27/10/2026. Leva 2 de `docs/hyrox-oportunidades.md`, depois do
AnswerThePublic e dos prints de "tempo hyrox" e "hyrox tempo médio"
(`docs/pesquisas/2026-10-27-tempo-hyrox/`).

## Intenção (prints e AnswerThePublic)

| tela | o que mostrou | onde entrou |
|---|---|---|
| autocompletar (01, 05) | tempo hyrox são paulo · dupla · pro · open · training club; tempo médio · doubles · open | FAQ "tempo médio em dupla, Open e Pro" (o que existe e o que não existe); aliases do catálogo |
| visão geral de IA (02, 06) | médias por categoria (1h30 geral, Open M 1h25–1h35…), elite 57 min, recorde de duplas — citando blogs. **Não é fonte** | nenhum número entra; a página diz por quê |
| resultado e PAA (03, 07) | concorrente com "Calculadora de Tempo do Hyrox: Pace, Estações e Roxzone"; quanto tempo dura · qual o melhor tempo · **o pace 7 é ruim?** · recorde | H2 e FAQs de cada uma; "pace 7" com a conta do motor; recorde: não reproduzido sem ranking oficial |
| outras pessoas (04, 08) | hyrox brasil · na academia · vs crossfit · prova completa · como funciona · onde treinar · benefícios | links para o pilar, o comparativo e o treino |
| AnswerThePublic | dois terços em italiano; em português: quanto dura, melhor tempo, tempo por estação (wall ball, burpees, SkiErg, remo), por categoria | estação: FAQ com sled push/pull do estudo; divisão igual declarada |

## O motor (`src/lib/corrida/tempoHyrox.ts`, testes em `scripts/test-tempo-hyrox.ts`)

- tempo final = 8 km × pace + estações e transições.
- Estações em branco → 40,8% do tempo final (1 − 51,2/86,5, Brandt 2025).
- "Ritmo que cai": velocidade linear da 1ª à 8ª corrida na proporção
  16,13 → 13,58 km/h (HYScience 2026), tempo total de corrida preservado.
- Estações divididas em 8 partes iguais (não há dado publicado por estação).

## Fontes (Europe PMC, 27/10/2026)

- Brandt et al. 2025, Front Physiol (PMID 40230601): 11 amadores, Open
  individual simulado; 86,5 min (mediana), 51,2 corrida, 32,8 estações;
  sled push 128 s, sled pull 155 s; experiência mediana de 18 meses.
- Gutiérrez-Hellín et al. 2026, IJSPP (PMID 42697540): 24 Pro masculino,
  Madri 2025, 69:58; 16,13 → 13,58 km/h; Roxzone 10,52 km/h.
- hyrox.com/the-fitness-race/ (formato).

## Fora, por falta de fonte

Médias por categoria, recordes, tempo de cada estação, tempo limite da
prova (rulebook bloqueado aqui).

## Ferramenta no corpo

`/guias/treino-hyrox/` trocou o bloco de pace por este (27/10).
