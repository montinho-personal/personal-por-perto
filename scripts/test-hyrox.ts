/**
 * Testes do motor de calorias do Hyrox.
 *
 * O que segura a página: a conta por partes reproduz os números de
 * referência do método (70 kg em 1h10, 1h30 e 1h55; 90 kg em 1h30), a
 * corrida sai da mesma equação da página de corrida, e o tempo final que
 * não fecha com o pace é recusado em vez de virar número.
 *
 * Uso: npm run test:hyrox
 */
import {
  CENARIOS,
  CIRCUITO,
  ESQUI,
  ESTACOES,
  ESTACOES_MIN_TOTAL,
  FONTES,
  NOTA_ESTIMATIVA,
  PACE_PADRAO,
  PESO_PADRAO,
  REMO,
  TEMPO_PADRAO,
  deProva,
  faixaDaDivisao,
  formataKcal,
  formataMinSeg,
  formataPace,
  formataTempo,
  fraseContexto,
  fraseIncoerente,
  metMedioEstacoes,
  paceValido,
  parsePace,
  parseTempoFinal,
  pesoValido,
  tabelaCenarios,
  tabelaPorPeso,
  tempoValido,
  type Resultado,
} from '../src/lib/calorias/hyrox';
import { metCorrida } from '../src/lib/calorias/corrida';

let falhas = 0;
const ok = (cond: boolean, msg: string) => {
  if (cond) console.log(`  ✓ ${msg}`);
  else {
    falhas++;
    console.log(`  ✗ ${msg}`);
  }
};
const perto = (a: number, b: number, tol: number) => Math.abs(a - b) <= tol;
const prova = (t: number, p: number, kg: number): Resultado => {
  const r = deProva(t, p, kg);
  if (!r.ok) throw new Error(`prova ${t}/${p}/${kg} incoerente`);
  return r;
};

console.log('\nA prova');
ok(ESTACOES.length === 8, '8 estações');
ok(
  ESTACOES.map((e) => e.id).join(',') === 'skierg,sled-push,sled-pull,burpee,remo,farmers,lunges,wall-balls',
  'na ordem da prova',
);
ok(ESQUI.met === 6.8 && ESQUI.codigo === '02080', 'SkiErg: 6,8 METs, código 02080');
ok(REMO.met === 8.5 && REMO.codigo === '02073', 'remo: 8,5 METs, código 02073');
ok(CIRCUITO.met === 8.0 && CIRCUITO.codigo === '02040', 'circuito vigoroso: 8,0 METs, código 02040');
ok(ESTACOES.filter((e) => e.linha === CIRCUITO).length === 6, 'seis estações pelo circuito vigoroso');
ok(perto(metMedioEstacoes(), 63.3 / 8, 1e-9), 'média das estações = 63,3 ÷ 8 METs');

console.log('\nA corrida pela equação da ACSM');
{
  const r = prova(90, 6, 70);
  ok(perto(r.velocidadeKmH, 10, 1e-9), 'pace 6:00 = 10 km/h');
  ok(perto(r.metCorrida, 36.8333 / 3.5, 1e-3), `VO2 36,8 → MET ${r.metCorrida.toFixed(2)} (≈ 10,5)`);
  ok(r.metCorrida === metCorrida(10), 'a mesma função da página de corrida');
  ok(r.minutosCorrida === 48, '8 × 6:00 = 48 min de corrida');
}

console.log('\nOs números de referência do método');
{
  const a = prova(70, 5, 70);
  ok(perto(a.kcal, 900, 5), `70 kg, 1h10, pace 5:00 → ${a.kcal.toFixed(0)} kcal (≈ 900)`);
  const b = prova(90, 6, 70);
  ok(perto(b.kcal, 1025, 5), `70 kg, 1h30, pace 6:00 → ${b.kcal.toFixed(0)} kcal (≈ 1.025)`);
  ok(perto(b.kcalCorrida, 620, 5), `  corrida ${b.kcalCorrida.toFixed(0)} (≈ 620)`);
  ok(perto(b.kcalEstacoes, 405, 5), `  estações ${b.kcalEstacoes.toFixed(0)} (≈ 405)`);
  ok(Math.round(b.pctTempoCorrida) === 53, `  corrida = ${b.pctTempoCorrida.toFixed(1)}% do tempo (53%)`);
  ok(Math.round(b.pctKcalCorrida) === 60, `  corrida = ${b.pctKcalCorrida.toFixed(1)}% do gasto (60%)`);
  const c = prova(115, 7, 70);
  ok(perto(c.kcal, 1200, 5), `70 kg, 1h55, pace 7:00 → ${c.kcal.toFixed(0)} kcal (≈ 1.200)`);
  const d = prova(90, 6, 90);
  ok(perto(d.kcal, 1320, 5), `90 kg, 1h30, pace 6:00 → ${d.kcal.toFixed(0)} kcal (≈ 1.320)`);
}

console.log('\nAs estações');
{
  const r = prova(90, 6, 70);
  ok(r.minutosEstacoes === 42, 'estações = 90 − 48 = 42 min (com a Roxzone)');
  ok(perto(r.minutosPorEstacao, 5.25, 1e-9), '42 ÷ 8 = 5,25 min por estação');
  ok(formataMinSeg(r.minutosPorEstacao) === '5 min 15 s', '  mostrado como "5 min 15 s"');
  ok(perto(r.estacoes.reduce((s, e) => s + e.kcal, 0), r.kcalEstacoes, 1e-9), 'as 8 estações somam o total das estações');
  ok(perto(r.kcal, r.kcalCorrida + r.kcalEstacoes, 1e-9), 'total = corrida + estações');
  const remo = r.estacoes.find((e) => e.estacao.id === 'remo')!;
  const ski = r.estacoes.find((e) => e.estacao.id === 'skierg')!;
  ok(remo.kcal > ski.kcal, 'mesmo tempo, o remo (8,5) gasta mais que o SkiErg (6,8)');
  const f = faixaDaDivisao(r);
  ok(f.min < r.kcalEstacoes && r.kcalEstacoes < f.max, `a divisão igual fica dentro da faixa extrema (${f.min.toFixed(0)}–${f.max.toFixed(0)})`);
  ok(perto(r.kcalLiquida, r.kcal - (1 * 3.5 * 70 / 200) * 90, 1e-9), 'líquido = total − 1 MET × tempo final');
}

console.log('\nA regra da incoerência');
{
  const r = deProva(55, 6, 70);
  ok(!r.ok, '55 min com pace 6:00 (48 de corrida, 7 de estações) é recusado');
  if (!r.ok) ok(fraseIncoerente(r).includes('incoerentes'), '  e a frase diz que tempo e pace não fecham');
  ok(deProva(56, 6, 70).ok, `56 min com pace 6:00 deixa exatamente ${ESTACOES_MIN_TOTAL} min e passa`);
  const neg = deProva(45, 7, 70);
  ok(!neg.ok && !neg.ok && fraseIncoerente(neg).includes('não sobra tempo nenhum'), 'corrida maior que a prova: "não sobra tempo nenhum"');
}

console.log('\nPace lento');
ok(prova(115, 7, 70).paceLento === false, 'pace 7:00 (8,6 km/h) está dentro da faixa da equação');
ok(prova(150, 8, 70).paceLento === true, 'pace 8:00 (7,5 km/h) ganha o aviso');

console.log('\nLeitura dos campos');
ok(parseTempoFinal('1h30') === 90, '"1h30" = 90');
ok(parseTempoFinal('1h30min') === 90, '"1h30min" = 90');
ok(parseTempoFinal('1 h 30') === 90, '"1 h 30" = 90');
ok(parseTempoFinal('1h') === 60, '"1h" = 60');
ok(parseTempoFinal('1:30') === 90, '"1:30" = 90 (hora:minuto)');
ok(perto(parseTempoFinal('58:40')!, 58 + 40 / 60, 1e-9), '"58:40" = 58 min 40 s (minuto:segundo)');
ok(perto(parseTempoFinal('1:25:30')!, 85.5, 1e-9), '"1:25:30" = 85,5');
ok(parseTempoFinal('90') === 90 && parseTempoFinal('90min') === 90, '"90" e "90min" = 90');
ok(parseTempoFinal('abc') === null && parseTempoFinal('') === null, 'lixo e vazio = null');
ok(parsePace('6:00') === 6 && parsePace('5:30') === 5.5 && parsePace('6') === 6, 'pace "6:00", "5:30", "6"');
ok(parsePace("6'00") === 6, 'pace "6\'00"');
ok(tempoValido(90) && !tempoValido(30) && !tempoValido(300), 'tempo entre 45 min e 4 h');
ok(paceValido(6) && !paceValido(2) && !paceValido(11), 'pace entre 3:00 e 10:00');
ok(pesoValido(70) && !pesoValido(10), 'peso entre 30 e 250 kg');

console.log('\nFormatação e textos');
{
  const r = prova(TEMPO_PADRAO, PACE_PADRAO, PESO_PADRAO);
  ok(formataTempo(90) === '1h30' && formataPace(6) === '6:00', '"1h30" e "6:00"');
  ok(formataKcal(r.kcal) === '1.030', `total arredondado: ${formataKcal(r.kcal)}`);
  ok(fraseContexto(r).includes('1h30') && fraseContexto(r).includes('6:00'), 'a frase leva tempo e pace');
  ok(NOTA_ESTIMATIVA.startsWith('É uma estimativa'), 'a nota começa dizendo que é estimativa');
  ok(FONTES.length === 2, 'duas fontes: ACSM e Compêndio 2011');
}

console.log('\nTabelas');
ok(tabelaCenarios(70).length === CENARIOS.length, 'três cenários, todos coerentes');
{
  const t = tabelaCenarios(70);
  ok(t[0].kcal < t[1].kcal && t[1].kcal < t[2].kcal, 'quem termina mais devagar gasta mais no total');
  ok(t[0].pctKcalCorrida > t[2].pctKcalCorrida, 'na prova rápida, a corrida pesa mais no gasto');
}
{
  const t = tabelaPorPeso();
  ok(t.every((l, i) => i === 0 || l.total > t[i - 1].total), 'por peso: cresce com o peso');
  ok(t.every((l) => perto(l.total, l.corrida + l.estacoes, 1e-9)), 'por peso: total = corrida + estações');
}

console.log(falhas ? `\n✗ ${falhas} falha(s)\n` : '\n✓ tudo certo\n');
process.exit(falhas ? 1 : 0);
