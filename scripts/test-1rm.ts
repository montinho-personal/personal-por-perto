/**
 * Testes do motor da calculadora de 1RM.
 *
 * O que segura a página: as sete fórmulas escritas como publicadas, a
 * faixa (e não uma fórmula escolhida), a série de uma repetição tratada
 * como exata, o caminho inverso coerente com o direto, as repetições na
 * reserva somando pela definição da escala, e os avisos de exercício.
 *
 * Uso: npm run test:1rm
 */
import {
  EXERCICIOS,
  FONTES,
  FORMULAS,
  arredondaCarga,
  cargaPara,
  cargaValida,
  estimar,
  exercicio,
  formataFaixaKg,
  formataFaixaPct,
  fraseEstimativa,
  parseNumero,
  repsValidas,
  rirValido,
  tabela,
} from '../src/lib/forca/umRm';

let falhas = 0;
const ok = (cond: boolean, msg: string) => {
  if (cond) console.log(`  ✓ ${msg}`);
  else {
    falhas++;
    console.log(`  ✗ ${msg}`);
  }
};
const perto = (a: number, b: number, tol: number) => Math.abs(a - b) <= tol;
const f = (id: string) => FORMULAS.find((x) => x.id === id)!;

console.log('\nAs sete fórmulas, como publicadas');
ok(FORMULAS.length === 7, 'sete fórmulas');
ok(perto(100 * f('epley').fator(10), 133.33, 0.01), 'Epley: 100 kg × 10 → 133,3');
ok(perto(100 * f('brzycki').fator(10), 133.33, 0.01), 'Brzycki: 100 kg × 10 → 133,3 (36/27)');
ok(perto(f('brzycki').fator(5), 1 / (1.0278 - 0.0278 * 5), 0.001), 'Brzycki na forma 1,0278 − 0,0278 × reps dá o mesmo');
ok(perto(100 * f('lander').fator(10), 100 * 100 / (101.3 - 26.7123), 0.01), 'Lander');
ok(perto(100 * f('lombardi').fator(10), 100 * Math.pow(10, 0.1), 0.01), 'Lombardi: reps^0,10');
ok(perto(1 / f('mayhew').fator(10), (52.2 + 41.9 * Math.exp(-0.55)) / 100, 0.0001), 'Mayhew: % do 1RM = 52,2 + 41,9·e^(−0,055·reps)');
ok(perto(100 * f('oconner').fator(10), 125, 0.01), "O'Conner: 100 kg × 10 → 125");
ok(perto(1 / f('wathan').fator(10), (48.8 + 53.8 * Math.exp(-0.75)) / 100, 0.0001), 'Wathan');

console.log('\nA estimativa é faixa');
{
  const e = estimar(60, 8);
  ok(e.porFormula.length === 7, 'um valor por fórmula');
  ok(e.min < e.central && e.central < e.max, `faixa ${e.min.toFixed(1)} a ${e.max.toFixed(1)}, meio ${e.central.toFixed(1)}`);
  ok(perto(e.min, 72, 0.05) && perto(e.max, 76.6, 0.05), "60 kg × 8: O'Conner 72,0 embaixo, Wathan 76,6 em cima");
  ok(formataFaixaKg(e.min, e.max) === '72 a 77', `mostrado como "${formataFaixaKg(e.min, e.max)}"`);
  ok(fraseEstimativa(e).includes('entre 72 e 77 kg'), 'a frase diz "entre X e Y"');
  ok(!e.alemDoConfiavel, '8 repetições estão dentro do confiável');
}
{
  const e = estimar(100, 1);
  ok(e.exato && e.min === 100 && e.max === 100, 'uma repetição até a falha: o 1RM é a própria carga');
  ok(fraseEstimativa(e).startsWith('Uma repetição'), '  e a frase diz isso');
}
{
  const e = estimar(100, 12);
  ok(e.alemDoConfiavel, '12 repetições: fora do confiável, a página avisa');
  const curta = estimar(100, 5);
  ok(e.max - e.min > curta.max - curta.min, '  e a faixa abre com mais repetições');
}

console.log('\nRepetições na reserva');
{
  const comReserva = estimar(60, 6, 2);
  const semReserva = estimar(60, 8);
  ok(comReserva.repsAteFalha === 8, '6 feitas + 2 na reserva = 8 até a falha');
  ok(perto(comReserva.central, semReserva.central, 1e-9), '  e dá o mesmo 1RM que 8 até a falha');
  ok(estimar(60, 1, 1).exato === false, '1 feita + 1 na reserva não é exato');
}

console.log('\nO caminho inverso');
{
  const rm = 100;
  const t = tabela(rm);
  ok(t[0].reps === 1 && t[0].central === 100, '1 repetição = 100% do 1RM');
  ok(t.every((l, i) => i === 0 || l.central < t[i - 1].central), 'carga cai conforme as repetições sobem');
  const dez = cargaPara(rm, 10);
  ok(Math.round(dez.pctCentral * 100) === 75, `10 repetições ≈ ${Math.round(dez.pctCentral * 100)}% no meio das sete`);
  ok(formataFaixaPct(dez.pctMin, dez.pctMax) === '74 a 80%', `  faixa "${formataFaixaPct(dez.pctMin, dez.pctMax)}"`);
  const oito = cargaPara(rm, 8);
  ok(Math.round(oito.pctCentral * 100) === 80, '8 repetições ≈ 80%');
  // Ida e volta: estimar pela série e pedir a carga daquela mesma série devolve a carga.
  const e = estimar(70, 6);
  const volta = cargaPara(e.central, 6);
  ok(perto(volta.central, 70, 1.5), `ida e volta: 70 kg × 6 → 1RM → carga de 6 = ${volta.central.toFixed(1)}`);
  const reserva = cargaPara(rm, 10, 2);
  ok(perto(reserva.central, cargaPara(rm, 12).central, 1e-9), '10 com 2 na reserva = carga de 12 até a falha');
}

console.log('\nExercícios');
ok(EXERCICIOS.map((e) => e.id).join(',') === 'supino,agachamento,terra,legpress,outro', 'cinco opções');
ok(exercicio('terra').tendencia === 'subestima', 'terra: as fórmulas subestimam (LeSuer 1997)');
ok(exercicio('legpress').tendencia === 'superestima', 'leg press: tendem a superestimar (Nuzzo 2024)');
ok(exercicio('xyz').id === 'outro', 'id desconhecido cai em "outro"');

console.log('\nValidação e formatação');
ok(cargaValida(60) && !cargaValida(0) && !cargaValida(600), 'carga de 1 a 500 kg');
ok(repsValidas(8) && !repsValidas(0) && !repsValidas(16) && !repsValidas(7.5), 'repetições inteiras de 1 a 15');
ok(rirValido(0) && rirValido(4) && !rirValido(5), 'reserva de 0 a 4');
ok(parseNumero('62,5') === 62.5 && parseNumero('') === null, 'aceita vírgula');
ok(arredondaCarga(12.3) === 12.5 && arredondaCarga(76.6) === 77, 'meio quilo abaixo de 20 kg, quilo inteiro acima');
ok(FONTES.length === 7, 'sete referências com link');

console.log(falhas ? `\n✗ ${falhas} falha(s)\n` : '\n✓ tudo certo\n');
process.exit(falhas ? 1 : 0);
