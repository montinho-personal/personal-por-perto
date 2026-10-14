/**
 * Testes do motor da calculadora de passos.
 *
 * O que segura a página: as três contas de ida e volta (passos ↔ km,
 * passos → tempo), a leitura de contagem brasileira ("10.000" é dez mil,
 * "8,4 mil" é 8.400), o "você quis dizer 175 cm?", a meta que nunca dá
 * número negativo, as calorias que saem do MET e não de "kcal por passo",
 * e o arredondamento que nunca finge precisão.
 *
 * O modelo do passo (tabela de esteira do CADENCE-Adults) tem bloco próprio;
 * as contas puras recebem o passo explicitamente.
 *
 * Uso: npm run test:passos
 */
import {
  arredondaKcal,
  arredondaPassos,
  comparaSemanas,
  faixaPassosPorKm,
  formataFaixaKcal,
  formataKm,
  formataPct,
  formataTempo,
  kcalDePassos,
  kmDePassos,
  mediaPassos,
  meta,
  minutosDePassos,
  parseDecimal,
  parsePassos,
  passoDaMedida,
  passoPedeConferencia,
  passosDeKm,
  passosEmMinutos,
  passosValidos,
  passoValido,
  quantoFalta,
  sugereCm,
  tabelaKmPassos,
  tabelaMetas,
  tabelaPassosKm,
  tabelaTempo,
  velocidadeKmH,
  cadenciaValida,
  pesoValido,
  alturaValida,
  passoDaAmostra,
  passoEstimado,
  razaoPassoAltura,
  RITMOS,
  ritmo,
  TABELA_CADENCE,
  ALTURA_REFERENCIA_CM,
  faixaKm,
  faixaPassos,
  formataFaixaKm,
  formataFaixaPassos,
  tabelaMinutos,
  tabelaAlturas,
  tabelaPesos,
  faixaEvento,
  faixaEventoKm,
} from '../src/lib/caminhada/passos';
import { kcalPorMinuto, metNoPlano } from '../src/lib/calorias/caminhada';

let falhas = 0;
const ok = (cond: boolean, msg: string) => {
  if (cond) console.log(`  ✓ ${msg}`);
  else {
    falhas++;
    console.log(`  ✗ ${msg}`);
  }
};
const perto = (a: number, b: number, tol = 1e-9) => Math.abs(a - b) <= tol;

console.log('\nO passo vem da tabela de esteira (CADENCE-Adults)');
{
  const linhas = TABELA_CADENCE.map((l) => Math.round((l.kmh * 100000) / 60 / l.cadencia));
  ok(linhas.join(',') === '55,63,71,78,83', `passo medido por velocidade: ${linhas.join(', ')} cm`);
  ok(Math.abs(razaoPassoAltura(113.8) - 0.417) < 0.001, 'a ~4,8 km/h a razão passo/altura dá 0,417 — onde a regra 0,415 coincide');
  ok(razaoPassoAltura(97) < 0.33 && razaoPassoAltura(129) > 0.49, 'devagar ~0,33; rápido ~0,49: o ritmo pesa mais que a altura');
  ok(perto(passoDaAmostra(50), passoDaAmostra(97)) && perto(passoDaAmostra(170), passoDaAmostra(129)), 'fora da tabela trava nas pontas, sem esticar a reta');
  const meio = passoDaAmostra((105.9 + 113.8) / 2);
  ok(meio > passoDaAmostra(105.9) && meio < passoDaAmostra(113.8), 'entre duas linhas, interpola');
  ok(perto(passoEstimado(114, ALTURA_REFERENCIA_CM), passoEstimado(114)), 'altura igual à da amostra = passo da amostra');
  ok(perto(passoEstimado(114, 2 * ALTURA_REFERENCIA_CM), 2 * passoEstimado(114)), 'altura entra proporcional');
  ok(RITMOS.every((r, i) => i === 0 || r.cadencia > RITMOS[i - 1].cadencia), 'ritmos em ordem de cadência');
  ok(ritmo('moderado').cadencia === 115 && Math.round(passoEstimado(115)) === 72, 'moderado (o mesmo da caminhada): 115 passos/min, passo ~72 cm');
  const v = (passoEstimado(ritmo('moderado').cadencia) * ritmo('moderado').cadencia * 60) / 100000;
  ok(Math.abs(v - ritmo('moderado').velocidade) < 0.1, `passo × cadência devolve a velocidade do ritmo (${v.toFixed(2)} km/h ≈ 5)`);
  ok(formataKm(kmDePassos(10000, passoEstimado(114))) === '7,1 km', '10 mil passos, sem altura, moderado: ~7,1 km');
  ok(formataKm(kmDePassos(10000, passoEstimado(114, 160))) === '6,7 km' && formataKm(kmDePassos(10000, passoEstimado(114, 185))) === '7,7 km', '…com 1,60 m ~6,7 km; com 1,85 m ~7,7 km');
}

console.log('\nAs três contas');
{
  ok(perto(kmDePassos(10000, 74), 7.4), '10.000 passos × 74 cm = 7,4 km');
  ok(perto(kmDePassos(1, 70), 0.0007), '1 passo × 70 cm = 0,7 m');
  ok(kmDePassos(0, 70) === 0 && kmDePassos(1000, 0) === 0, '0 passos ou passo 0: 0 km, sem NaN');
  ok(perto(passosDeKm(5, 75), 6666.666666666667), '5 km ÷ 75 cm ≈ 6.667 passos');
  ok(passosDeKm(5, 0) === 0, 'passo 0 não divide por zero');
  ok(minutosDePassos(10000, 100) === 100 && formataTempo(100) === '1h40', '10.000 a 100 passos/min = 100 min = 1h40 (exemplo do briefing)');
  ok(minutosDePassos(10000, 0) === 0, 'cadência 0 não divide por zero');
  ok(passosEmMinutos(30, 100) === 3000, '30 min a 100 passos/min = 3.000 passos');
  ok(perto(velocidadeKmH(70, 100), 4.2), 'passo de 70 cm a 100 passos/min = 4,2 km/h');
  let pior = 0;
  for (let cm = 40; cm <= 100; cm += 0.5)
    for (const p of [1, 100, 5000, 10000, 100000]) pior = Math.max(pior, Math.abs(passosDeKm(kmDePassos(p, cm), cm) - p));
  ok(pior < 1e-6, `ida e volta passos → km → passos sem deriva (pior ${pior.toExponential(1)})`);
}

console.log('\nTabelas do briefing (10.000 passos)');
{
  const t = tabelaTempo(10000);
  ok(t.map((l) => Math.round(l.minutos)).join(',') === '125,100,83', '80/100/120 passos/min → 125, 100 e 83 min');
  ok(tabelaPassosKm(74).length === 15 && formataKm(tabelaPassosKm(74).find((l) => l.passos === 10000)!.km) === '7,4 km', 'tabela passos→km: 15 linhas, 10.000 → 7,4 km a 74 cm');
  ok(tabelaKmPassos(75).map((l) => l.passos).join(',') === '1350,2650,4000,6650,8000,10700,13300', `km→passos a 75 cm: ${tabelaKmPassos(75).map((l) => l.passos).join(', ')}`);
  ok(tabelaMetas(70, 100).length === 5 && tabelaMetas(70, 100)[0].passos === 5000, 'comparação de metas: 5, 7, 8, 10 e 12 mil');
  const f = faixaPassosPorKm(60, 80);
  ok(f.min === 1250 && f.max === 1650, `1 km com passo de 60 a 80 cm: ${f.min} a ${f.max} passos`);
}

{
  const f = faixaKm(10000, 72);
  ok(formataFaixaKm(f.min, f.max) === '6,5 a 7,9 km', `10 mil passos a 72 cm ±10%: ${formataFaixaKm(f.min, f.max)}`);
  const fp = faixaPassos(1, 72);
  ok(fp.min < fp.max && formataFaixaPassos(fp.min, fp.max).endsWith('passos'), `1 km a 72 cm ±10%: ${formataFaixaPassos(fp.min, fp.max)}`);
  ok(tabelaMinutos(72, 115).find((l) => l.minutos === 30)!.passos === 3450, '30 min a 115 passos/min = 3.450 passos');
  ok(tabelaAlturas(115).every((l, i, a) => i === 0 || l.km10mil > a[i - 1].km10mil), 'mais alto, mais km nos mesmos 10 mil passos');
  ok(tabelaPesos(10000, 72, 115).every((l, i, a) => i === 0 || l.kcal > a[i - 1].kcal), 'mais peso, mais kcal');
  ok(faixaEvento(4999) === '<5k' && faixaEvento(5000) === '5-7.5k' && faixaEvento(10000) === '10-12.5k' && faixaEvento(30000) === '>=12.5k', 'eventos levam faixa de Tudor-Locke, nunca o número');
  ok(faixaEventoKm(1) === '<2' && faixaEventoKm(7.2) === '5-10', 'distância também vai em faixa');
}

console.log('\nMeta e "quanto falta"');
{
  const q = quantoFalta(10000, 7350, 75, 100);
  ok(q.faltam === 2650 && Math.round(q.minutos) === 27 && formataKm(q.km) === '2 km', 'meta 10.000, feitos 7.350 → faltam 2.650 · ~2 km · ~27 min');
  const m = meta(8000, 5200);
  ok(m.faltam === 2800 && formataPct(m.progresso) === '65%', 'meta 8.000, feitos 5.200 → faltam 2.800 · 65%');
  ok(formataPct(meta(10000, 8400).progresso) === '84%', '8.400 de 10.000 → 84%');
  const passou = meta(10000, 12345);
  ok(passou.faltam === 0 && passou.alem === 2345 && passou.concluida && passou.progresso === 1, 'passou da meta: faltam 0, 2.345 além, barra cheia');
  ok(meta(0, 500).progresso === 0 && !meta(0, 500).concluida, 'meta 0 não vira "concluída" nem divide por zero');
  ok(formataPct(meta(10000, 9999).progresso) === '99%', '9.999 de 10.000 mostra 99%, nunca 100% antes da hora');
}

console.log('\nCalorias saem do MET, não de "kcal por passo"');
{
  const k = kcalDePassos(10000, 70, 70, 100);
  const esperado = kcalPorMinuto(metNoPlano(4.2), 70) * 100;
  ok(perto(k.kcal, esperado), `10.000 passos, 70 kg, 70 cm, 100/min = MET(4,2 km/h) × 100 min = ${Math.round(esperado)} kcal`);
  ok(k.min < k.kcal && k.kcal < k.max, `faixa contém o central: ${formataFaixaKcal(k.min, k.max)}`);
  ok(k.liquida < k.kcal && k.liquida > 0, 'líquido (sem o repouso) é menor que o bruto');
  ok(kcalDePassos(10000, 90, 70, 100).kcal > k.kcal, 'mais peso, mais gasto');
  ok(perto(kcalDePassos(10000, 140, 70, 100).kcal, 2 * k.kcal), 'gasto proporcional ao peso (140 kg = dobro de 70)');
  ok(kcalDePassos(10000, 70, 80, 100).kcal > k.kcal, 'passo maior = mais distância = mais gasto');
  ok(kcalDePassos(0, 70, 70, 100).kcal === 0, '0 passos = 0 kcal');
  const porPasso1 = kcalDePassos(1000, 70, 70, 100).kcal / 1000;
  const porPasso2 = kcalDePassos(1000, 70, 70, 130).kcal / 1000;
  ok(!perto(porPasso1, porPasso2, 1e-6), 'kcal por passo muda com o ritmo — não existe constante universal');
}

console.log('\nEntrada brasileira');
{
  ok(parsePassos('10000') === 10000 && parsePassos('10.000') === 10000 && parsePassos('10 000') === 10000, '"10000", "10.000" e "10 000"');
  ok(parsePassos('10 mil') === 10000 && parsePassos('8,4 mil') === 8400 && parsePassos('10k') === 10000 && parsePassos('7.5k') === 7500, '"10 mil", "8,4 mil", "10k", "7.5k"');
  ok(parsePassos('8400 passos') === 8400, '"8400 passos"');
  ok(parsePassos('') === null && parsePassos('abc') === null && parsePassos('-500') === null && parsePassos('10,5') === null, 'vazio, letras, negativo e "10,5" passos: nada');
  ok(parseDecimal('1,75') === 1.75 && parseDecimal('1.75') === 1.75 && parseDecimal('175') === 175, 'decimal com vírgula e com ponto');
  ok(parseDecimal('') === null && parseDecimal('-80') === null && parseDecimal('1,2,3') === null, 'vazio, negativo e lixo: nada');
}

console.log('\nValidação e "você quis dizer?"');
{
  ok(!passosValidos(0) && passosValidos(1) && passosValidos(100) && passosValidos(100000) && !passosValidos(100001), 'passos: 0 não; 1, 100 e 100.000 sim; 100.001 não');
  ok(sugereCm(1.75, 'altura') === 175 && sugereCm(175, 'altura') === null, 'altura 1,75 → "você quis dizer 175 cm?"');
  ok(sugereCm(0.72, 'passo') === 72 && sugereCm(72, 'passo') === null, 'passo 0,72 → 72 cm');
  ok(!alturaValida(1.75) && alturaValida(175) && !alturaValida(400), 'altura em cm: 1,75 e 400 não valem');
  ok(passoPedeConferencia(400 / 4) === false && passoPedeConferencia(30) && passoPedeConferencia(120), 'passo de 30 ou 120 cm pede conferência; 100 não');
  ok(!passoValido(0) && !passoValido(400) && passoValido(72), 'passo 0 e 400 cm recusados');
  ok(!cadenciaValida(0) && cadenciaValida(100) && !cadenciaValida(300), 'cadência 0 e 300 recusadas');
  ok(!pesoValido(-70) && pesoValido(70), 'peso negativo recusado');
  ok(perto(passoDaMedida(100, 140)!, 71.42857142857143) && passoDaMedida(0, 140) === null && passoDaMedida(100, 0) === null, 'medida: 100 m em 140 passos ≈ 71,4 cm; zeros recusados');
}

console.log('\nArredondamento sem falsa precisão');
{
  ok(formataKm(7.318) === '7,3 km' && formataKm(10) === '10 km', '7,318 → "7,3 km"; 10 → "10 km"');
  ok(formataKm(0.0007) === '10 m' && formataKm(0.284) === '280 m' && formataKm(0.998) === '1 km', '0,7 m → "10 m"; 284 m → "280 m"; 998 m → "1 km"');
  ok(arredondaPassos(6666.7) === 6650 && arredondaPassos(13333) === 13300 && arredondaPassos(143) === 140, 'passos estimados: 6.650 · 13.300 · 140');
  ok(arredondaKcal(307.4) === 307 && arredondaKcal(1234) === 1230, 'kcal: 307 e 1.230');
  ok(formataFaixaKcal(283, 329) === '~280–330 kcal', 'faixa: "~280–330 kcal" (exemplo do briefing)');
  ok(formataTempo(0.4) === 'menos de 1 min' && formataTempo(60) === '1 h' && formataTempo(85) === '1h25', 'tempo: "menos de 1 min", "1 h", "1h25"');
}

console.log('\nHistórico (fase 2)');
{
  const sem = [6200, 8400, 10100].map((passos, i) => ({ data: `2026-10-1${i}`, passos }));
  ok(mediaPassos(sem) === 8233.333333333334 && mediaPassos([]) === null, 'média de 6.200, 8.400 e 10.100 ≈ 8.233; vazio = nada');
  const ant = [6500, 6500, 6500].map((passos) => ({ data: '2026-10-01', passos }));
  const atu = [7400, 7400, 7400].map((passos) => ({ data: '2026-10-08', passos }));
  ok(comparaSemanas(ant, atu) === 900, 'semana de 6.500 → 7.400/dia: +900');
  ok(comparaSemanas(ant.slice(0, 1), atu) === null, 'um dia só não vira tendência');
}

console.log(falhas ? `\n✗ ${falhas} falha(s)` : '\n✓ tudo certo');
process.exit(falhas ? 1 : 0);
