# Hub: Quantas calorias cada atividade gasta (`/calorias/`)

## 23/11/2026 — item da pauta (parte 2): "Esportes que mais queimam calorias"

Pauta do Montinho (210/mês, 20/11). Entrou o H2 "Quais esportes queimam mais
calorias" com uma tabela de 16 atividades: 1 hora, 70 kg, na intensidade padrão
de cada calculadora. Os números **não são digitados**: o hub chama a função de
cada calculadora no build (`RANKING` em `src/pages/calorias/index.astro`), então
a tabela nunca diverge do que a página da atividade mostra. Fonte: os METs que
cada calculadora já cita (Compêndio de Atividades Físicas 2024 ou o estudo da
própria página).

Resultado (23/11): corda ≈ 870, corrida 10 km/h ≈ 770, Zumba ≈ 650, natação,
tênis, basquete e vôlei de praia ≈ 590, bicicleta 20 km/h ≈ 560, futebol ≈ 510,
saco de pancada ≈ 430, hidroginástica ≈ 310, pingue-pongue ≈ 290, aula de
CrossFit (20 min de WOD) ≈ 280, caminhada ≈ 280, musculação ≈ 260, yoga ≈ 180.

Fora da tabela: HYROX (é prova, não hora de treino), escada (por andares) e
gasto calórico diário (não é atividade). O hub não tem `atualizadoEm`.
