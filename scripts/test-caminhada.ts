/**
 * Testes do motor de calorias da caminhada.
 *
 * Número errado aqui é pior que número ausente: alguém organiza a semana
 * com base nele. Estes testes cobrem a aritmética, as unidades, os quatro
 * modos e — o mais importante — as invariantes de honestidade: nada de
 * precisão inventada, nada de passada assumida, nada de promessa de quilo.
 *
 * Uso: npm run test:caminhada
 */
import {
  INCLINACAO_MAX,
  KCAL_POR_KG_GORDURA,
  PESO_PADRAO,
  RITMOS,
  VELOCIDADE_MAX,
  VELOCIDADE_MIN,
  arredondaKcal,
  dePassos,
  deDistancia,
  deKcal,
  deTempo,
  formataKm,
  formataTempo,
  kcalPorKgPorKm,
  kcalPorMinuto,
  metCaminhada,
  metDaInclinacao,
  metNoPlano,
  parseNumero,
  pesoValido,
  ritmo,
  simulacaoUmQuilo,
  tabelaPorDistancia,
  tabelaPorInclinacao,
  tabelaPorPeso,
  tabelaPorRitmo,
  tabelaPorTempo,
  velocidadeMedida,
} from '../src/lib/calorias/caminhada';

const falhas: string[] = [];
const ok = (c: boolean, m: string) => {
  console.log((c ? '  ✓ ' : '  ✗ ') + m);
  if (!c) falhas.push(m);
};
const perto = (a: number, b: number, tol = 0.01) => Math.abs(a - b) <= tol;

/* ------------------------------------------------------------------ */
console.log('\n[1] A equação de METs, conferida à mão\n');
{
  // 3,8 MET × 3,5 × 70 kg ÷ 200 = 4,655 kcal/min
  ok(perto(kcalPorMinuto(3.8, 70), 4.655, 0.001), '3,8 MET a 70 kg = 4,655 kcal/min');
  // Dobrar o peso dobra o gasto: a equação é linear no peso.
  ok(perto(kcalPorMinuto(3.8, 140), kcalPorMinuto(3.8, 70) * 2), 'o gasto é proporcional ao peso');
  // Dobrar o MET dobra o gasto.
  ok(perto(kcalPorMinuto(7.6, 70), kcalPorMinuto(3.8, 70) * 2), 'o gasto é proporcional ao MET');
  ok(kcalPorMinuto(1, 70) > 0, '1 MET (repouso) gasta algo — é o que o líquido desconta');
}

/* ------------------------------------------------------------------ */
console.log('\n[2] MET no plano: o Compêndio é copiado, não ajustado\n');
{
  for (const r of RITMOS) {
    ok(perto(metNoPlano(r.velocidade), r.met, 0.0001), `${r.nome} (${r.velocidade} km/h) devolve ${r.met} METs`);
  }
  // Entre duas faixas medidas, interpola — e o valor fica entre as duas.
  const meio = metNoPlano(5.5);
  ok(meio > 3.8 && meio < 4.8, '5,5 km/h interpola entre 3,8 e 4,8 METs');
  ok(!velocidadeMedida(5.5), '5,5 km/h é declarado como interpolado');
  ok(velocidadeMedida(5), '5 km/h é declarado como medido');
  // Fora das pontas, segura — não extrapola a reta para o que já é corrida.
  ok(perto(metNoPlano(1), 3.0), 'abaixo da faixa segura no MET da ponta de baixo');
  ok(perto(metNoPlano(12), 5.5), 'acima da faixa segura no MET da ponta de cima — não vira corrida');
  // Monotonia: mais rápido nunca gasta menos.
  let monotona = true;
  for (let v = VELOCIDADE_MIN; v <= VELOCIDADE_MAX; v += 0.1) {
    if (metNoPlano(v + 0.1) < metNoPlano(v) - 1e-9) monotona = false;
  }
  ok(monotona, 'o MET nunca cai quando a velocidade sobe');
}

/* ------------------------------------------------------------------ */
console.log('\n[3] Inclinação: o termo vertical da ACSM, nas unidades certas\n');
{
  ok(metDaInclinacao(5, 0) === 0, 'inclinação zero soma exatamente zero MET');
  // 4,8 km/h = 80 m/min. 1,8 × 80 × 0,12 = 17,28 mL/kg/min ÷ 3,5 = 4,937 METs
  ok(perto(metDaInclinacao(4.8, 12), 4.937, 0.005), '4,8 km/h a 12% soma ≈ 4,94 METs (conta da ACSM)');
  // O 12-3-30 mais que dobra o gasto do plano. É a afirmação da página.
  const plano = metCaminhada(4.8, 0);
  const inclinado = metCaminhada(4.8, 12);
  ok(inclinado > plano * 2, 'o 12-3-30 mais que dobra o MET do plano na mesma velocidade');
  // Linear na inclinação.
  ok(perto(metDaInclinacao(5, 10), metDaInclinacao(5, 5) * 2), 'o acréscimo é linear na inclinação');
  ok(metDaInclinacao(6, 10) > metDaInclinacao(4, 10), 'subir mais rápido custa mais que subir devagar');
}

/* ------------------------------------------------------------------ */
console.log('\n[4] Os quatro modos concordam entre si\n');
{
  const m = ritmo('moderado');
  const t = deTempo(30, PESO_PADRAO, m.velocidade, 0, m.cadencia);

  // Distância equivalente aos mesmos 30 min deve devolver o mesmo gasto.
  const d = deDistancia(t.km, PESO_PADRAO, m.velocidade, 0, m.cadencia);
  ok(perto(d.kcal, t.kcal, 0.01), 'modo distância bate com modo tempo para a mesma caminhada');

  // Passos equivalentes idem.
  const p = dePassos(t.passos, PESO_PADRAO, m.velocidade, 0, m.cadencia);
  ok(perto(p.kcal, t.kcal, 0.01), 'modo passos bate com modo tempo para a mesma caminhada');
  ok(p.passos === t.passos, 'o modo passos devolve exatamente os passos informados');

  // Meta de calorias é a conta ao contrário.
  const k = deKcal(t.kcal, PESO_PADRAO, m.velocidade, 0, m.cadencia);
  ok(perto(k.minutos, t.minutos, 0.01), 'modo meta devolve o tempo que gera aquele gasto');
  ok(perto(k.kcal, t.kcal, 0.01), 'modo meta preserva a meta pedida');
}

/* ------------------------------------------------------------------ */
console.log('\n[5] Gasto líquido: o número honesto para quem conta déficit\n');
{
  const r = deTempo(30, PESO_PADRAO, 5, 0, 100);
  ok(r.kcalLiquida < r.kcal, 'o líquido é sempre menor que o bruto');
  ok(r.kcalLiquida > 0, 'o líquido de uma caminhada moderada é positivo');
  // A diferença é exatamente o repouso do mesmo tempo.
  ok(perto(r.kcal - r.kcalLiquida, kcalPorMinuto(1, PESO_PADRAO) * 30, 0.001),
    'a diferença entre bruto e líquido é exatamente 1 MET pelo mesmo tempo');
}

/* ------------------------------------------------------------------ */
console.log('\n[6] O erro que circula na SERP: custo por km\n');
{
  // 735 kcal para 70 kg em 10 km daria 1,05 kcal/kg/km — custo de CORRIDA.
  const custoModerado = kcalPorKgPorKm(5, 0);
  ok(custoModerado < 0.9, `caminhar moderado custa ${custoModerado.toFixed(2)} kcal/kg/km — bem abaixo do 1,05 da corrida`);
  const dezKm = deDistancia(10, 70, 5, 0, 100);
  ok(dezKm.kcal < 600, `10 km para 70 kg dá ≈ ${arredondaKcal(dezKm.kcal)} kcal, não os 735 que circulam por aí`);
  // Mais rápido custa MAIS por km (o MET sobe mais que a velocidade na faixa medida).
  ok(kcalPorKgPorKm(6.5, 0) > kcalPorKgPorKm(4, 0), 'andar rápido custa mais por quilômetro que passear');
}

/* ------------------------------------------------------------------ */
console.log('\n[7] Honestidade: nada de precisão inventada\n');
{
  ok(arredondaKcal(287.4382) === 287, '287,4382 vira 287 — sem casa decimal inventada');
  ok(arredondaKcal(42.7) === 43, 'gasto de dois dígitos arredonda para inteiro');
  ok(arredondaKcal(1234) === 1230, 'acima de mil arredonda à dezena: o dígito das unidades ali é ruído');
  ok(Number.isInteger(arredondaKcal(199.999)), 'o gasto exibido é sempre inteiro');
  ok(arredondaKcal(0) === 0 && arredondaKcal(-5) === 0, 'gasto inválido não vira número negativo');

  // A passada NUNCA é assumida: passos viram tempo pela cadência.
  const lento = dePassos(10000, 70, 4, 0, 85);
  const rapido = dePassos(10000, 70, 6, 0, 115);
  ok(lento.minutos > rapido.minutos, 'os mesmos 10 mil passos levam mais tempo em ritmo leve');
  ok(perto(lento.minutos, 10000 / 85, 0.01), 'o tempo dos passos sai da cadência, não da passada');
}

/* ------------------------------------------------------------------ */
console.log('\n[8] Parsing: vírgula decimal não pode virar erro silencioso\n');
{
  ok(parseNumero('72,5') === 72.5, '"72,5" vira 72,5 — e não 72');
  ok(parseNumero('72.5') === 72.5, '"72.5" também funciona');
  ok(parseNumero(' 80 ') === 80, 'espaços em volta são ignorados');
  ok(parseNumero('') === null, 'campo vazio devolve null, não zero');
  ok(parseNumero('abc') === null, 'texto inválido devolve null');
  ok(parseNumero('-5') === -5, 'negativo é parseado — quem barra é a validação');
  ok(!pesoValido(-5) && !pesoValido(0) && !pesoValido(null), 'peso negativo, zero e vazio são rejeitados');
  ok(!pesoValido(500) && pesoValido(70), 'peso fora da faixa plausível é rejeitado');
}

/* ------------------------------------------------------------------ */
console.log('\n[9] Formatação em português\n');
{
  ok(formataTempo(45) === '45 min', '45 minutos');
  ok(formataTempo(60) === '1 hora', '60 minutos vira "1 hora", não "1 horas"');
  ok(formataTempo(120) === '2 horas', '120 minutos vira "2 horas"');
  ok(formataTempo(95) === '1h35', '95 minutos vira "1h35"');
  ok(formataTempo(0) === '—', 'tempo zero não vira "0 min"');
  ok(formataKm(0.4) === '400 m', 'menos de 1 km aparece em metros');
  ok(formataKm(2.5) === '2,5 km', 'a vírgula decimal é a brasileira');
}

/* ------------------------------------------------------------------ */
console.log('\n[10] Tabelas: coerentes e completas\n');
{
  const tp = tabelaPorPeso(30, 5, 0);
  ok(tp.length === 7, 'tabela por peso tem as 7 faixas');
  ok(tp.every((l, i) => i === 0 || l.kcal >= tp[i - 1].kcal), 'o gasto cresce com o peso');
  ok(tp.every((l) => l.kcalLiquida < l.kcal), 'em toda linha o líquido é menor que o bruto');

  const tt = tabelaPorTempo(PESO_PADRAO, 5, 0);
  ok(tt.every((l, i) => i === 0 || l.kcal >= tt[i - 1].kcal), 'o gasto cresce com o tempo');
  // Proporcionalidade: 60 min gasta o dobro de 30 min.
  const t30 = tt.find((l) => l.minutos === 30)!;
  const t60 = tt.find((l) => l.minutos === 60)!;
  ok(Math.abs(t60.kcal - t30.kcal * 2) <= 5, '1 hora gasta praticamente o dobro de 30 minutos');

  const tr = tabelaPorRitmo(PESO_PADRAO, 30);
  ok(tr.length === RITMOS.length, 'tabela por ritmo cobre os 4 ritmos');
  ok(tr.every((l, i) => i === 0 || l.kcal >= tr[i - 1].kcal), 'ritmo mais rápido gasta mais em 30 min');

  const ti = tabelaPorInclinacao(PESO_PADRAO, 30, 4.8);
  ok(ti[0].inclinacao === 0, 'a tabela de inclinação começa no plano');
  ok(ti.every((l, i) => i === 0 || l.kcal > ti[i - 1].kcal), 'mais inclinação sempre gasta mais');
  ok(ti[ti.length - 1].inclinacao === INCLINACAO_MAX, 'a tabela vai até o teto de inclinação');

  const td = tabelaPorDistancia(PESO_PADRAO, 5);
  ok(td.every((l, i) => i === 0 || l.kcal >= td[i - 1].kcal), 'distância maior gasta mais');
  ok(td.every((l) => l.minutos > 0), 'toda distância tem tempo positivo');
}

/* ------------------------------------------------------------------ */
console.log('\n[11] A simulação de 1 kg é simulação, e o número dela é absurdo de propósito\n');
{
  const s = simulacaoUmQuilo(PESO_PADRAO, 5, 0, 100);
  ok(perto(s.kcal, KCAL_POR_KG_GORDURA), 'a simulação usa exatamente os 7.700 kcal');
  ok(s.minutos > 600, 'o tempo resultante passa de 10 horas — é o que mostra que caminhar sozinho é o caminho lento');
}

if (falhas.length) {
  console.log(`\n✗ ${falhas.length} falha(s):`);
  falhas.forEach((f) => console.log(`   - ${f}`));
  process.exit(1);
}
console.log('\n✓ Motor da caminhada: tudo certo.\n');
