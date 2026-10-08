# Reverificação das academias da importação inicial

Iniciada em 08/10/2026.

## Por quê

As academias citadas nas páginas de cidade têm duas origens:

- **Depois de 18/09/2026**: entraram pela regra do CLAUDE.md (página oficial
  da rede, ou duas fontes independentes com o mesmo endereço, conferindo a UF)
  e levam `academiasVerificadasEm`.
- **Importação inicial do repositório** (commit `3bce029`, 18/09/2026): 524
  academias em 170 cidades, sem registro de fonte nem data. Nunca passaram
  pelo critério.

Academia fecha, muda de endereço e troca de nome. Uma entrada errada manda
o leitor a uma porta onde não há o que a página promete.

Até 08/10 a checagem dependia só do resumo da busca. A partir desse dia o
ambiente abre as páginas oficiais das redes (Smart Fit, Bluefit, Selfit,
Panobianco) e Wellhub/TotalPass, o que permite confirmar pela fonte primária.
Skyfit continua recusando acesso (502 do próprio site).

## Método

1. Fila: `npm run audit:academias`, seção REVERIFICAÇÃO, ordenada por
   impressão no Search Console.
2. Cada entrada é conferida pelo critério do CLAUDE.md. Resultado:
   - **confirmada** → fica (detalhe corrigido se a fonte for mais precisa);
   - **sem fonte suficiente** → sai;
   - **endereço divergente entre fontes** → fica só o nome.
3. A cidade ganha `academiasVerificadasEm` e sai da fila.
4. `atualizadoEm` sobe só se a página mudou. Cidade em que tudo se confirmou
   sem alteração não sobe a data (mesma lógica de São Miguel do Oeste).
5. Ritmo: depende de verificação externa → lotes pelo limite de checagem
   honesta. Primeira leva de 2 cidades, revisada item a item.

## Registro

### 08/10/2026 — leva 1

**Belo Horizonte/MG** (2.382 impr.) — página mudou.

| entrada | resultado | fonte |
|---|---|---|
| Bodytech (Savassi, Belvedere, Ponteio) | confirmada | Wellhub (três unidades) + Diário do Comércio (13 anos em Minas, mesmas três unidades) |
| Smart Fit | confirmada; detalhe trocado de "dezenas de unidades… e shoppings" pelas quatro unidades conferidas | smartfit.com.br/academias/savassi (R. Fernandes Tourinho, 195 – Funcionários), /centro-1 (Av. Amazonas, 303), /gutierrez (R. André Cavalcanti, 190), /shopping-cidade (R. dos Tupis, 337) |
| Cia Athletica (Belvedere) | **removida** — nenhuma fonte mostra unidade em BH; a lista de contatos da rede não tem MG | — |
| Academia ao ar livre do Parque Municipal | **removida** — só um guia cita "aparelhos de ginástica" no parque, sem nome nem local | — |

**Salvador/BA** (2.025 impr.) — página mudou.

| entrada | resultado | fonte |
|---|---|---|
| Rede Alpha Fitness (Pituba, Shopping Barra, Paralela) | confirmada | Wellhub (Pituba no Shopping Ponto 7, Shopping Barra, Shopping Paralela) + Portal do Franchising |
| Bodytech | confirmada; detalhe passa a nomear o Shopping da Bahia | Wellhub (Av. Tancredo Neves, 148 – Caminho das Árvores) + página da unidade em bodytech.com.br |
| Smart Fit (Pituba) | confirmada | smartfit.com.br/academias/pituba (Av. Manoel Dias da Silva, 2053) |
| Academia Salvador (Dique do Tororó) | confirmada; programa com 14 unidades em jan/2025 | A Tarde, Bahia Notícias, Correio (inauguração jun/2024) |

Saldo da leva: 8 entradas → 6 mantidas, 2 removidas, 2 detalhes corrigidos.
As duas remoções em BH são o tipo de erro que motivou a reverificação.
