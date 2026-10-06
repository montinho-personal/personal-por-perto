/**
 * Testes do motor da calculadora de pace.
 *
 * O que segura a página: as contas de ida e volta (5:00/km = 12 km/h
 * exatos), as provas oficiais (meia de 21,0975 e maratona de 42,195 km), o
 * arredondamento que nunca escreve "5:60", a leitura de entrada brasileira
 * ("10,5", "27:30", "1h45"), as parciais com o trecho fracionário, a
 * comparação e os alertas de digitação.
 *
 * Uso: npm run test:pace
 */
import {
  DISTANCIAS,
  METAS,
  alerta,
  categoriaDistancia,
  comparar,
  distanciaDe,
  distanciaPronta,
  distanciaValida,
  faixaPace,
  formataDiferenca,
  formataEsteira,
  formataKm,
  formataPace,
  formataTempo,
  formataTempoExtenso,
  formataVelocidade,
  paceDaVelocidade,
  paceDe,
  paceDosCampos,
  paceValido,
  pacePorMilha,
  parciaisChave,
  parciaisPorKm,
  paraKm,
  parseNumero,
  parseTempo,
  pista,
  projecao,
  tabelaEsteira,
  tabelaPace,
  tabelaVelocidades,
  tabelaTempos,
  tempoDe,
  tempoDosCampos,
  velocidadeDe,
  velocidadeValida,
} from '../src/lib/corrida/pace';

let falhas = 0;
const ok = (cond: boolean, msg: string) => {
  if (cond) console.log(`  ✓ ${msg}`);
  else {
    falhas++;
    console.log(`  ✗ ${msg}`);
  }
};
const perto = (a: number, b: number, tol = 1e-9) => Math.abs(a - b) <= tol;

console.log('\nAs contas do briefing');
{
  ok(formataPace(paceDe(5, 27 * 60 + 30)) === '5:30', '5 km em 27:30 → 5:30/km');
  ok(formataVelocidade(velocidadeDe(paceDe(5, 27 * 60 + 30))) === '10,91', '…e 10,91 km/h');
  ok(formataPace(paceDe(10, 50 * 60)) === '5:00' && formataVelocidade(velocidadeDe(300)) === '12', '10 km em 50 min → 5:00/km e 12 km/h');
  ok(formataPace(paceDe(5, 25 * 60)) === '5:00', '5 km em 25 min → 5:00/km');
  ok(formataPace(paceDe(10, 60 * 60)) === '6:00' && formataVelocidade(velocidadeDe(360)) === '10', '10 km em 1 hora → 6:00/km e 10 km/h');
  ok(formataPace(paceDe(21.0975, 2 * 3600)) === '5:41', `meia em 2h → ${formataPace(paceDe(21.0975, 7200))}/km`);
  ok(formataPace(paceDe(42.195, 4 * 3600)) === '5:41', `maratona em 4h → ${formataPace(paceDe(42.195, 14400))}/km`);
  ok(formataPace(paceDe(8.4, 47 * 60 + 13)) === '5:37', `treino de 8,4 km em 47:13 → ${formataPace(paceDe(8.4, 2833))}/km`);
  ok(formataPace(paceDe(3, 40 * 60)) === '13:20', 'caminhada: 3 km em 40 min → 13:20/km');
  ok(formataTempo(tempoDe(10, 360)) === '1:00:00', '10 km a 6:00/km → 1:00:00');
  ok(formataTempo(tempoDe(5, 6 * 60)) === '30:00', '"quanto tempo faço 5 km com pace 6" → 30:00');
  ok(perto(distanciaDe(3600, 300), 12), '1 hora a 5:00/km → 12 km');
}

console.log('\nIda e volta: pace ↔ km/h');
{
  for (const [p, v] of [[300, 12], [360, 10], [240, 15], [450, 8]] as const) {
    ok(perto(velocidadeDe(p), v) && perto(paceDaVelocidade(v), p), `${formataPace(p)}/km ↔ ${v} km/h exatos`);
  }
  ok(formataPace(paceDaVelocidade(10.5)) === '5:43', '10,5 km/h → 5:43/km');
  ok(formataPace(paceDaVelocidade(velocidadeDe(333))) === '5:33', 'volta de qualquer pace sem deriva');
  let pior = 0;
  for (let p = 120; p <= 1200; p++) pior = Math.max(pior, Math.abs(paceDaVelocidade(velocidadeDe(p)) - p));
  ok(pior < 1e-9, `de 2:00 a 20:00/km, a ida e volta erra no máximo ${pior.toExponential(1)} s`);
}

console.log('\nArredondamento');
{
  ok(formataPace(359.6) === '6:00', '359,6 s → "6:00", nunca "5:60"');
  ok(formataPace(303) === '5:03', '5 min 3 s → "5:03", não "5:3"');
  ok(formataTempo(3599.6) === '1:00:00', '3599,6 s → "1:00:00"');
  ok(formataTempo(65) === '1:05' && formataTempo(3725) === '1:02:05', 'tempo: "1:05" e "1:02:05"');
  ok(formataVelocidade(12) === '12' && formataVelocidade(10.5) === '10,5', 'velocidade sem zero sobrando: "12", "10,5"');
  ok(formataEsteira(velocidadeDe(330)) === '10,9', 'esteira com uma casa: 5:30/km → 10,9');
  ok(formataKm(21.0975) === '21,1' && formataKm(42.195) === '42,195' && formataKm(8.4) === '8,4', 'distâncias: 21,1 · 42,195 · 8,4');
  ok(formataTempoExtenso(27 * 60 + 30) === '27 min 30 s' && formataTempoExtenso(4 * 3600) === '4 h', 'por extenso: "27 min 30 s", "4 h"');
  ok(formataDiferenca(-10) === '−0:10' && formataDiferenca(150) === '2:30', 'diferença com sinal');
}

console.log('\nEntrada brasileira');
{
  ok(parseNumero('10,5') === 10.5 && parseNumero('10.5') === 10.5 && parseNumero('5') === 5, '"10,5" e "10.5"');
  ok(parseNumero('1.000') === 10 || parseNumero('1.000') === 1, '"1.000" lido como decimal (1), não como milhar');
  ok(parseNumero('') === null && parseNumero('abc') === null && parseNumero('-3') === null, 'vazio, letras e negativo: nada');
  ok(parseTempo('27:30') === 1650 && parseTempo('1:45:00') === 6300, '"27:30" e "1:45:00"');
  ok(parseTempo("27'30") === 1650 && parseTempo('27m30s') === 1650, `"27'30" e "27m30s"`);
  ok(parseTempo('1h45') === 6300 && parseTempo('1h45m30s') === 6330 && parseTempo('45') === 2700, '"1h45", "1h45m30s", "45" (min)');
  ok(parseTempo('0') === null && parseTempo('1:99') === null && parseTempo('abc') === null, 'tempo zero ou malformado: nada');
  ok(tempoDosCampos('', '27', '30') === 1650 && tempoDosCampos('1', '45', '') === 6300, 'campos h/min/s: vazio vale zero');
  ok(tempoDosCampos('', '150', '') === 9000, 'só minutos: aceita 150 min');
  ok(tempoDosCampos('', '75', '10') === null, 'com segundos preenchidos, minutos vão até 59');
  ok(tempoDosCampos('', '', '') === null && tempoDosCampos('100', '', '') === null, 'tudo vazio ou 100 h: nada');
  ok(paceDosCampos('5', '30') === 330 && paceDosCampos('5', '') === 300 && paceDosCampos('5', '60') === null, 'pace 5:30, 5 e 5:60 (recusado)');
  ok(perto(paraKm(1, 'mi'), 1.609344) && paraKm(400, 'm') === 0.4, '1 mi = 1,609344 km; 400 m = 0,4 km');
  ok(formataPace(pacePorMilha(300)) === '8:03', '5:00/km = 8:03/mi');
}

console.log('\nValidação e alertas');
{
  ok(!distanciaValida(0) && distanciaValida(0.1) && distanciaValida(100) && !distanciaValida(1001), 'distância: 0 não, 0,1 e 100 km sim, 1001 não');
  ok(!paceValido(0) && !paceValido(59) && paceValido(60) && paceValido(3600), 'pace de 1:00 a 60:00/km');
  ok(!velocidadeValida(-5) && !velocidadeValida(0) && velocidadeValida(10.5), 'velocidade negativa ou zero: não');
  ok(alerta(paceDe(5, 120)) !== null, '5 km em 2 min: pede para conferir');
  ok(alerta(300) === null && alerta(800) === null, '5:00/km e caminhada de 13:20/km: sem alerta');
  ok(alerta(paceDe(1, 3000)) !== null, '1 km em 50 min: pede para conferir');
  ok(paceValido(paceDe(100, 10 * 3600)), 'ultramaratona de 100 km em 10 h funciona');
}

console.log('\nParciais');
{
  const p = parciaisPorKm(5, 330);
  ok(p.length === 5 && formataTempo(p[4].acumulado) === '27:30' && formataTempo(p[1].acumulado) === '11:00', '5 km a 5:30: 5 linhas, 11:00 no km 2, 27:30 no fim');
  const m = parciaisPorKm(21.0975, paceDe(21.0975, 7200));
  ok(m.length === 22 && m[21].rotulo === '21,1 km' && formataTempo(m[21].acumulado) === '2:00:00', 'meia: 21 km inteiros + o trecho final, chegando em 2:00:00');
  ok(formataTempo(m[21].trecho) === formataTempo(0.0975 * paceDe(21.0975, 7200)), 'o último trecho tem o tamanho real (97,5 m)');
  const c = parciaisChave(42.195, paceDe(42.195, 14400));
  ok(c.map((x) => x.rotulo).join(',') === '1 km,5 km,10 km,15 km,20 km,Meia (21,1 km),25 km,30 km,35 km,40 km,42,195 km', 'maratona: pontos-chave em vez de 42 linhas');
  ok(formataTempo(c[c.length - 1].acumulado) === '4:00:00', '…e a chegada em 4:00:00');
  ok(parciaisChave(10, 300).length === 10, 'até 25 km, a tabela vem por quilômetro');
  const pt = pista(240);
  ok(formataTempo(pt[1].segundos) === '1:36' && formataTempo(pt[2].segundos) === '3:12', '4:00/km → 400 m em 1:36 e 800 m em 3:12');
  const pr = projecao(340);
  ok(formataTempo(pr[1].segundos) === '28:20' && formataTempo(pr[2].segundos) === '56:40', '5:40/km mantido: 5 km 28:20, 10 km 56:40');
}

console.log('\nComparar');
{
  const c = comparar(360, 330);
  ok(c.diferencaPorKm === 30 && perto(c.fracao, 30 / 360), '6:00 contra 5:30: 30 s/km, 8,3%');
  ok(formataTempo(c.porDistancia[0].segundos) === '2:30' && formataTempo(c.porDistancia[1].segundos) === '5:00', '…2:30 em 5 km e 5:00 em 10 km');
  const dez = comparar(360, 350);
  ok(formataTempo(dez.porDistancia[1].segundos) === '1:40', '6:00 → 5:50 em 10 km: 1:40 de ganho');
  const baixar = comparar(paceDe(10, 55 * 60), paceDe(10, 50 * 60));
  ok(formataPace(baixar.a) === '5:30' && formataPace(baixar.b) === '5:00' && baixar.diferencaPorKm === 30, '10 km de 55 para 50 min: 5:30 → 5:00, 30 s/km');
}

console.log('\nTabelas e metas');
{
  const e = tabelaEsteira();
  ok(e[0].pace === 180 && e[e.length - 1].pace === 540, 'esteira de 3:00 a 9:00/km');
  ok(e.some((l) => l.pace === 180 && formataEsteira(l.kmh) === '20,0'), 'esteira: pace 3:00 = 20,0 km/h');
  ok(e.some((l) => l.pace === 300 && formataEsteira(l.kmh) === '12,0'), 'esteira: 5:00/km = 12,0');
  ok(e.some((l) => l.pace === 390 && formataEsteira(l.kmh) === '9,2'), 'esteira: 6:30/km = 9,2');
  const v = tabelaVelocidades();
  ok(v.length === 31 && v.some((l) => l.kmh === 10 && formataPace(l.pace) === '6:00'), 'velocidades de 5 a 20 km/h; 10 km/h = 6:00/km');
  ok(v.some((l) => l.kmh === 14 && formataPace(l.pace) === '4:17'), '14 km/h = 4:17/km');
  ok(v.some((l) => l.kmh === 12 && formataPace(l.pace) === '5:00'), '12 km/h = 5:00/km');
  ok(formataVelocidade(velocidadeDe(390)) === '9,23', 'pace 6:30 = 9,23 km/h');
  const t5 = tabelaTempos(5, 15, 40);
  ok(t5.length === 26, 'tabela de 5 km: 15 a 40 minutos, minuto a minuto');
  ok(formataPace(t5.find((l) => l.segundos === 23 * 60)!.pace) === '4:36', '5 km em 23 min = 4:36/km');
  ok(formataPace(t5.find((l) => l.segundos === 17 * 60)!.pace) === '3:24', '5 km em 17 min = 3:24/km');
  ok(formataPace(t5.find((l) => l.segundos === 37 * 60)!.pace) === '7:24', '5 km em 37 min = 7:24/km');
  const t10 = tabelaTempos(10, 40, 90, 5);
  ok(t10.length === 11 && formataPace(t10.find((l) => l.segundos === 70 * 60)!.pace) === '7:00', '10 km: 40 min a 1h30; 1h10 = 7:00/km');
  ok(formataPace(t10[t10.length - 1].pace) === '9:00', '10 km em 1 hora e meia = 9:00/km');
  const t21 = tabelaTempos(21.0975, 80, 180, 5);
  const p21 = (min: number) => formataPace(t21.find((l) => l.segundos === min * 60)!.pace);
  ok(p21(90) === '4:16' && p21(105) === '4:59' && p21(110) === '5:13' && p21(120) === '5:41', 'meia: 1h30 4:16, 1h45 4:59, 1h50 5:13, 2h 5:41');
  const t42 = tabelaTempos(42.195, 180, 360, 15);
  ok(t42.length === 13 && formataPace(t42.find((l) => l.segundos === 300 * 60)!.pace) === '7:07', 'maratona: 3h a 6h; 5h = 7:07/km');
  const tp = tabelaPace();
  ok(tp.some((l) => l.pace === 300 && formataTempo(l.tempos[0]) === '25:00' && formataTempo(l.tempos[1]) === '50:00'), 'tabela de pace: 5:00 → 25:00 e 50:00');
  ok(METAS.every((m) => distanciaPronta(m.distancia)), 'toda meta aponta para uma distância pronta');
  ok(DISTANCIAS.some((d) => d.km === 21.0975) && DISTANCIAS.some((d) => d.km === 42.195), 'meia e maratona com as distâncias oficiais');
}

console.log('\nAnalytics só em categoria');
{
  ok(categoriaDistancia(5) === '5k' && categoriaDistancia(21.0975) === '21k' && categoriaDistancia(8.4) === 'outra', 'distância → 5k, 21k, outra');
  ok(faixaPace(330) === '5_6' && faixaPace(150) === 'abaixo_3' && faixaPace(800) === 'acima_12', 'pace → faixa "5_6"');
}

console.log(falhas ? `\n✗ ${falhas} falha(s)\n` : '\n✓ Motor do pace: tudo certo.\n');
process.exit(falhas ? 1 : 0);
