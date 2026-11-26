# Auditoria diária das ferramentas (2 por dia)

Rotina pedida pelo Renato em 26/11/2026: toda ferramenta do site passa por
uma auditoria completa — navegador, botões, celular, testes automáticos e,
principalmente, **as contas 100% corretas** —, duas por dia, até a fila
acabar; depois a fila recomeça (as fórmulas e as fontes envelhecem).

## Os três especialistas (três passadas, nesta ordem)

Cada ferramenta é auditada por três olhares diferentes. As passadas não se
misturam: quem confere a conta não olha o código antes de refazê-la.

1. **Engenheiro de testes (QA) — navegador e funcionalidades.**
   `npm run build` e `npm run test:navegador -- <url>` (desktop e celular).
   Além do teste automático, um roteiro manual no Playwright, com print do
   celular (`--prints`): preencher valores normais, trocar cada aba, seletor
   e modo, clicar em tudo, e os casos de borda — campo vazio, zero, negativo,
   vírgula e ponto decimal, valor absurdo (peso 500, tempo 0), letras. Nenhum
   deles pode mostrar `NaN`, `Infinity`, `undefined`, resultado negativo ou
   tela quebrada. O resultado tem de mudar quando a entrada muda.

2. **Fisiologista do exercício / revisor de método — as contas.**
   Um **agente independente** (subagente novo, sem ver o código do motor)
   recebe só a fórmula e a fonte que a página declara e refaz a conta do zero
   para 5 casos: o exemplo padrão da página, dois casos comuns e dois de
   borda. O resultado dele é comparado com o que a página mostra no navegador
   e com o `test:<ferramenta>`. Diferença acima do arredondamento declarado é
   defeito. Ele confere também:
   - a fórmula escrita na página é a que o motor usa;
   - cada constante (MET, coeficiente, faixa) bate com a fonte citada — abrir
     a fonte (Europe PMC, órgão oficial); fonte bloqueada no ambiente: anotar
     e não contornar;
   - unidades e conversões (kg, min, km/h, kcal; bruto × líquido);
   - os números dos exemplos, tabelas e FAQs da página batem com o motor
     (número digitado à mão que diverge é defeito);
   - o arredondamento é o mesmo no resultado, na tabela e no texto.

3. **Especialista em experiência no celular.**
   Em 390×844: sem rolagem lateral, campos com o teclado certo
   (`inputmode`), botões com área de toque confortável, resultado visível sem
   caçar na tela, rótulos legíveis, foco e leitura por teclado funcionando.

## Depois das três passadas

- **Corrigir** o que apareceu, no mesmo dia. Conta errada é prioridade
  absoluta: corrige o motor, o teste e os números do texto juntos.
- **Reforçar o teste**: todo defeito achado vira um caso novo no
  `scripts/test-<ferramenta>.ts`, para não voltar.
- **Repetir**: build, `test:<ferramenta>`, `test:navegador`,
  `audit:canonical`, `audit:links`; depois do deploy, `test:navegador --base`
  no site no ar.
- `atualizadoEm` só sobe se algo visível mudou (número, texto, layout).
- Dúvida de método que não se resolve com a fonte (duas fontes divergem, a
  fonte mudou de edição): **não trocar a fórmula sozinho** — registrar aqui
  e levar ao Renato com as duas opções.
- Registrar a linha na tabela "Auditadas" e responder ao Renato, curto: as 2
  ferramentas, o que foi testado, se as contas bateram (com os casos
  conferidos), o que foi corrigido e o que ficou pendente.

## Fila (ordem: mais usadas e mais sensíveis a erro de conta primeiro)

| # | ferramenta | url | teste |
|---|---|---|---|
| 1 | Gasto calórico diário | `/calorias/gasto-calorico-diario/` | `test:gasto-diario` |
| 2 | Calculadora de emagrecimento | `/ferramentas/calculadora-de-emagrecimento/` | `test:emagrecimento` |
| 3 | Percentual de gordura | `/ferramentas/calculadora-de-percentual-de-gordura/` | `test:composicao` |
| 4 | Calculadora de proteína | `/ferramentas/calculadora-de-proteina/` | `test:proteina` |
| 5 | Calculadora de 1RM | `/ferramentas/calculadora-1rm/` | `test:1rm` |
| 6 | Calculadora de pace | `/ferramentas/calculadora-de-pace/` | `test:pace` |
| 7 | Calorias: caminhada | `/calorias/caminhada/` | `test:caminhada` |
| 8 | Calorias: corrida | `/calorias/corrida/` | `test:corrida` |
| 9 | Calorias: musculação | `/emagrecimento/quantas-calorias-queima-a-musculacao/` | `test:musculacao` |
| 10 | Calorias: bicicleta | `/calorias/bicicleta/` | `test:bicicleta` |
| 11 | Calculadora de passos | `/ferramentas/calculadora-de-passos/` | `test:passos` |
| 12 | Calculadora de whey | `/ferramentas/calculadora-de-whey/` | `test:whey` |
| 13 | Descanso entre séries | `/musculacao/descanso-entre-series/` | `test:descanso` |
| 14 | Preço do personal | `/ferramentas/calculadora-preco-personal/` | `test:preco` |
| 15 | Calorias: natação | `/calorias/natacao/` | `test:natacao` |
| 16 | Calorias: escada | `/calorias/escada/` | `test:escada` |
| 17 | Calorias: pular corda | `/calorias/corda/` | `test:corda` |
| 18 | Calorias: dança | `/calorias/danca/` | `test:danca` |
| 19 | Calorias: yoga e pilates | `/calorias/yoga-e-pilates/` | `test:yoga` |
| 20 | Calorias: futebol | `/calorias/futebol/` | `test:futebol` |
| 21 | Calorias: lutas | `/calorias/lutas/` | `test:lutas` |
| 22 | Calorias: hidroginástica | `/calorias/hidroginastica/` | `test:hidroginastica` |
| 23 | Calorias: tênis | `/calorias/tenis/` | `test:tenis` |
| 24 | Calorias: vôlei | `/calorias/volei/` | `test:volei` |
| 25 | Calorias: crossfit | `/calorias/crossfit/` | `test:crossfit` |
| 26 | Calorias: HYROX | `/calorias/hyrox/` | `test:hyrox` |
| 27 | Tempo de HYROX | `/ferramentas/calculadora-de-tempo-hyrox/` | `test:tempo-hyrox` |
| 28 | Calorias: basquete | `/calorias/basquete/` | `test:basquete` |
| 29 | Calorias: pingue-pongue | `/calorias/ping-pong/` | `test:pingpong` |
| 30 | Encontre seu personal ideal | `/ferramentas/encontre-seu-personal-ideal/` | `test:match` |
| 31 | Treino para minha rotina | `/ferramentas/treino-para-minha-rotina/` | `test:rotina` |
| 32 | Meu treino faz sentido | `/ferramentas/meu-treino-faz-sentido/` | `test:auditoria` |
| 33 | Diagnóstico da constância | `/ferramentas/diagnostico-da-constancia/` | `test:constancia` |
| 34 | Presencial ou online | `/ferramentas/presencial-ou-online/` | `test:formato` |
| 35 | Personal score | `/ferramentas/personal-score/` | `test:score` |
| 36 | Hub de calorias (tabela de esportes) | `/calorias/` | — (números vêm dos motores) |
| 37 | Central de ferramentas | `/ferramentas/` | `test:ferramentas` |

As de 30 a 35 são questionários, não contas: na passada 2 confere-se a lógica
de pontuação (toda combinação de respostas leva a um resultado, e o resultado
é o que as regras escritas dizem).

## Auditadas

| data | ferramenta | navegador e botões | contas (casos conferidos) | celular | corrigido | pendente |
|---|---|---|---|---|---|---|
