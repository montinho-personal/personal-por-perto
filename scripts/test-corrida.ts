/**
 * Testes do motor de calorias da corrida.
 *
 * O teste central é a TESE da página: o custo por quilômetro quase não muda
 * com a velocidade. Se isso quebrar, a página inteira perde o argumento — e
 * vira mais uma caixa de MET com outro nome.
 *
 * Uso: npm run test:corrida
 */
import {
  KCAL_POR_KG_GORDURA,
  PACE_PADRAO,
  PESO_PADRAO,
  VARIACAO_ECONOMIA,
  VELOCIDADE_CORRIDA_MIN,
  arredondaKcal,
  deDistancia,
  deKcal,
  deTempo,
  formataKm,
  formataPace,
  formataTempo,
  kcalPorKgPorKm,
  kcalPorMinuto,
  metCorrida,
  metDaInclinacao,
  paceParaVelocidade,
  paceValido,
  parsePace,
  pesoValido,
  simulacaoUmQuilo,
  tabelaPorDistancia,
  tabelaPorPace,
  tabelaPorPeso,
  velocidadeParaPace,
} from '../src/lib/calorias/corrida';
import { kcalPorKgPorKm as caminhadaPorKm } from '../src/lib/calorias/caminhada';

const falhas: string[] = [];
const ok = (c: boolean, m: string) => {
  console.log((c ? '  ✓ ' : '  ✗ ') + m);
  if (!c) falhas.push(m);
};
const perto = (a: number, b: number, tol = 0.01) => Math.abs(a - b) <= tol;

/* ------------------------------------------------------------------ */
console.log('\n[1] A equação da ACSM, conferida à mão\n');
{
  // 10 km/h = 166,67 m/min. VO2 = 0,2×166,67 + 3,5 = 36,83 → 10,52 METs
  ok(perto(metCorrida(10, 0), 10.52, 0.02), '10 km/h no plano ≈ 10,5 METs');
  // 8 km/h = 133,33 m/min. VO2 = 26,67 + 3,5 = 30,17 → 8,62 METs
  ok(perto(metCorrida(8, 0), 8.62, 0.02), '8 km/h no plano ≈ 8,6 METs');
  // O coeficiente horizontal da corrida é o dobro do da caminhada.
  const soMovimento = (v: number) => metCorrida(v, 0) - 1;
  ok(soMovimento(12) > soMovimento(6) * 1.9, 'dobrar a velocidade quase dobra o custo do movimento');
  ok(metCorrida(10, 0) > metCorrida(8, 0), 'mais rápido gasta mais por minuto');
}

/* ------------------------------------------------------------------ */
console.log('\n[2] A TESE: custo por km quase não muda com a velocidade\n');
{
  const c8 = kcalPorKgPorKm(8);
  const c10 = kcalPorKgPorKm(10);
  const c14 = kcalPorKgPorKm(14);
  console.log(`     8 km/h: ${c8.toFixed(3)} | 10 km/h: ${c10.toFixed(3)} | 14 km/h: ${c14.toFixed(3)} kcal/kg/km`);
  ok(c8 > 1.0 && c8 < 1.2, '8 km/h custa entre 1,0 e 1,2 kcal/kg/km');
  ok(c14 > 1.0 && c14 < 1.2, '14 km/h também');
  // A variação entre 8 e 14 km/h precisa ser pequena — essa é a tese.
  const variacao = Math.abs(c14 - c8) / c8;
  ok(variacao < 0.08, `a variação entre 8 e 14 km/h fica abaixo de 8% (deu ${(variacao * 100).toFixed(1)}%)`);
  // Correr mais rápido custa um pouco MENOS por km (o 3,5 de repouso dilui).
  ok(c14 < c8, 'correr mais rápido custa levemente menos por quilômetro, não mais');

  // A regra de bolso da página: 1 km ≈ o seu peso em kcal.
  const umKm = deDistancia(1, 70, 6);
  ok(umKm.kcal > 70 && umKm.kcal < 85, `1 km para 70 kg dá ${Math.round(umKm.kcal)} kcal — perto do peso`);
}

/* ------------------------------------------------------------------ */
console.log('\n[3] Corrida custa mais que caminhada no mesmo quilômetro\n');
{
  const correndo = kcalPorKgPorKm(10);
  const andando = caminhadaPorKm(5, 0);
  console.log(`     correndo: ${correndo.toFixed(2)} | caminhando: ${andando.toFixed(2)} kcal/kg/km`);
  ok(correndo > andando, 'o quilômetro correndo custa mais que o quilômetro andando');
  ok(correndo / andando > 1.2, 'e a diferença é relevante, não marginal');
}

/* ------------------------------------------------------------------ */
console.log('\n[4] Inclinação: coeficiente da corrida é METADE do da caminhada\n');
{
  ok(metDaInclinacao(10, 0) === 0, 'inclinação zero soma zero');
  // 10 km/h = 166,67 m/min. 0,9 × 166,67 × 0,05 = 7,5 ÷ 3,5 = 2,14 METs
  ok(perto(metDaInclinacao(10, 5), 2.14, 0.02), '10 km/h a 5% soma ≈ 2,14 METs');
  ok(perto(metDaInclinacao(10, 10), metDaInclinacao(10, 5) * 2), 'o acréscimo é linear na inclinação');
  ok(metCorrida(10, 5) > metCorrida(10, 0), 'subir gasta mais que o plano');
}

/* ------------------------------------------------------------------ */
console.log('\n[5] Os três modos concordam\n');
{
  const d = deDistancia(5, PESO_PADRAO, 6);
  ok(perto(d.minutos, 30), '5 km a 6:00/km leva exatamente 30 min');

  const t = deTempo(d.minutos, PESO_PADRAO, 6);
  ok(perto(t.kcal, d.kcal, 0.01), 'modo tempo bate com modo distância');
  ok(perto(t.km, d.km, 0.001), 'e devolve a mesma distância');

  const k = deKcal(d.kcal, PESO_PADRAO, 6);
  ok(perto(k.minutos, d.minutos, 0.01), 'modo meta devolve o tempo que gera aquele gasto');
  ok(perto(k.km, d.km, 0.01), 'e a distância correspondente');
  ok(perto(k.kcal, d.kcal, 0.01), 'preservando a meta pedida');
}

/* ------------------------------------------------------------------ */
console.log('\n[6] A faixa de economia de corrida\n');
{
  const r = deDistancia(10, PESO_PADRAO, 5.5);
  ok(r.kcalMin < r.kcal && r.kcal < r.kcalMax, 'o centro fica dentro da faixa');
  ok(perto(r.kcalMin, r.kcal * (1 - VARIACAO_ECONOMIA), 0.01), 'o piso é o centro menos 10%');
  ok(perto(r.kcalMax, r.kcal * (1 + VARIACAO_ECONOMIA), 0.01), 'o teto é o centro mais 10%');
  ok(arredondaKcal(r.kcalMax) > arredondaKcal(r.kcalMin), 'a faixa sobrevive ao arredondamento');
  // No modo meta a faixa colapsa: a pessoa DEU o número, não faz sentido variá-lo.
  const k = deKcal(500, PESO_PADRAO, 6);
  ok(k.kcalMin === k.kcalMax, 'no modo meta a faixa colapsa — o número foi dado, não estimado');
}

/* ------------------------------------------------------------------ */
console.log('\n[7] Gasto líquido\n');
{
  const r = deDistancia(5, PESO_PADRAO, 6);
  ok(r.kcalLiquida < r.kcal, 'o líquido é menor que o bruto');
  ok(perto(r.kcal - r.kcalLiquida, kcalPorMinuto(1, PESO_PADRAO) * r.minutos, 0.001),
    'a diferença é exatamente 1 MET pelo mesmo tempo');
  // Na corrida a diferença pesa menos que na caminhada, porque o MET é alto.
  ok(r.kcalLiquida / r.kcal > 0.88, 'na corrida o repouso representa uma fatia pequena do total');
}

/* ------------------------------------------------------------------ */
console.log('\n[8] O limite onde a equação para de valer\n');
{
  ok(deDistancia(5, 70, 6).abaixoDaFaixa === false, '6:00/km (10 km/h) está dentro da faixa validada');
  ok(deDistancia(5, 70, 7.5).abaixoDaFaixa === false, '7:30/km é exatamente 8 km/h — no limite, ainda vale');
  ok(deDistancia(5, 70, 7.6).abaixoDaFaixa === true, '7:36/km já fica abaixo de 8 km/h e dispara o aviso');
  ok(deDistancia(5, 70, 11).abaixoDaFaixa === true, '11:00/km está claramente fora — é caminhada');
  ok(perto(paceParaVelocidade(7.5), 8), '7:30/km equivale a 8 km/h, o limite da ACSM');
  ok(VELOCIDADE_CORRIDA_MIN === 8, 'o limite declarado é 8 km/h');
}

/* ------------------------------------------------------------------ */
console.log('\n[9] Pace: o jeito que corredor escreve\n');
{
  ok(parsePace('5:30') === 5.5, '"5:30" vira 5,5 minutos');
  ok(parsePace('6:00') === 6, '"6:00" vira 6');
  ok(parsePace('4:45') === 4.75, '"4:45" vira 4,75');
  ok(parsePace('6') === 6, '"6" sozinho vira 6');
  ok(parsePace('5,5') === 5.5, '"5,5" com vírgula funciona');
  ok(parsePace('') === null, 'vazio devolve null');
  ok(parsePace('abc') === null, 'texto inválido devolve null');
  ok(parsePace('5:75') === null, 'segundos acima de 59 são rejeitados, não silenciosamente aceitos');

  ok(formataPace(5.5) === '5:30', '5,5 volta como "5:30"');
  ok(formataPace(6) === '6:00', '6 volta como "6:00"');
  ok(formataPace(4.75) === '4:45', '4,75 volta como "4:45"');
  // Ida e volta sem perda.
  for (const p of ['3:45', '5:00', '6:20', '7:59']) {
    ok(formataPace(parsePace(p)!) === p, `"${p}" sobrevive à ida e volta`);
  }
  ok(perto(paceParaVelocidade(6), 10), '6:00/km = 10 km/h');
  ok(perto(velocidadeParaPace(12), 5), '12 km/h = 5:00/km');
}

/* ------------------------------------------------------------------ */
console.log('\n[10] Validação de entrada\n');
{
  ok(!pesoValido(0) && !pesoValido(-5) && !pesoValido(999) && !pesoValido(null), 'pesos inválidos são barrados');
  ok(pesoValido(70), 'peso plausível passa');
  ok(!paceValido(2) && !paceValido(20) && !paceValido(null), 'pace fora da faixa humana é barrado');
  ok(paceValido(PACE_PADRAO), 'o pace padrão é válido');
}

/* ------------------------------------------------------------------ */
console.log('\n[11] Tabelas\n');
{
  const td = tabelaPorDistancia(PESO_PADRAO, 6);
  ok(td.length === 6, 'a tabela cobre 1 km, 3, 5, 10, meia e maratona');
  ok(td.some((l) => l.nome === 'Maratona' && l.km === 42.2), 'a maratona está lá com a distância certa');
  ok(td.every((l, i) => i === 0 || l.kcal > td[i - 1].kcal), 'distância maior gasta mais');
  const maratona = td.find((l) => l.nome === 'Maratona')!;
  ok(maratona.kcal > 2800 && maratona.kcal < 3600, `a maratona dá ${maratona.kcal} kcal para 70 kg — ordem de grandeza certa`);

  const tp = tabelaPorPeso(5, 6);
  ok(tp.every((l, i) => i === 0 || l.kcal > tp[i - 1].kcal), 'o gasto cresce com o peso');
  ok(tp.every((l) => l.kcalLiquida < l.kcal), 'em toda linha o líquido é menor que o bruto');

  const tr = tabelaPorPace(PESO_PADRAO, 5);
  ok(tr.length === 6, 'a tabela de pace tem 6 linhas');
  ok(tr.every((l, i) => i === 0 || l.minutos < tr[i - 1].minutos), 'pace mais rápido termina antes');
  // A prova visual da tese: o custo por km varia pouco entre a primeira e a última linha.
  const spread = Math.abs(tr[tr.length - 1].porKm - tr[0].porKm) / tr[0].porKm;
  ok(spread < 0.08, `o custo por km varia menos de 8% entre 7:00 e 4:30 (deu ${(spread * 100).toFixed(1)}%)`);
}

/* ------------------------------------------------------------------ */
console.log('\n[12] Honestidade e formatação\n');
{
  ok(arredondaKcal(287.4382) === 287, 'sem casa decimal inventada');
  ok(arredondaKcal(1234) === 1230, 'acima de mil arredonda à dezena');
  ok(arredondaKcal(-5) === 0 && arredondaKcal(0) === 0, 'valor inválido não vira negativo');
  ok(formataTempo(90) === '1h30', '90 min vira "1h30"');
  ok(formataTempo(60) === '1 hora', '60 min vira "1 hora"');
  ok(formataKm(21.1) === '21,1 km', 'a meia maratona aparece com vírgula brasileira');
  ok(formataKm(0.8) === '800 m', 'menos de 1 km aparece em metros');

  const s = simulacaoUmQuilo(PESO_PADRAO, 6);
  ok(perto(s.kcal, KCAL_POR_KG_GORDURA), 'a simulação de 1 kg usa os 7.700 kcal');
  ok(s.km > 80, `e dá ${Math.round(s.km)} km — mais de duas maratonas, que é o ponto`);
}

if (falhas.length) {
  console.log(`\n✗ ${falhas.length} falha(s):`);
  falhas.forEach((f) => console.log('   - ' + f));
  process.exit(1);
}
console.log('\n✓ Motor da corrida: tudo certo.\n');
