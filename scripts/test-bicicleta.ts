/**
 * Testes do motor de calorias do pedal.
 *
 * O teste central é a TESE: de 14 para 28 km/h o gasto por hora triplica,
 * porque a resistência do ar cobra caro. E a conferência mais importante é
 * a coerência entre as DUAS pontas da ferramenta — a escala de velocidade
 * da rua e a escala de watts da ergométrica precisam concordar quando
 * convertidas pela eficiência mecânica do pedal. Se divergirem, a
 * ferramenta estaria medindo duas coisas diferentes com o mesmo nome.
 *
 * Uso: npm run test:bicicleta
 */
import {
  EFICIENCIA,
  FAIXAS_ERGO,
  FAIXAS_RUA,
  KCAL_POR_KG_GORDURA,
  PESO_BICICLETA,
  PESO_PADRAO,
  VELOCIDADE_MAX,
  VELOCIDADE_MIN,
  VELOCIDADE_PADRAO,
  arredondaKcal,
  deDistancia,
  deErgometrica,
  deKcalRua,
  deTempoRua,
  formataKm,
  formataTempo,
  kcalPorKgPorKm,
  kcalPorMinuto,
  metDaSubida,
  metErgometrica,
  metPedal,
  metRua,
  nivel,
  parseNumero,
  pesoValido,
  simulacaoUmQuilo,
  tabelaErgometrica,
  tabelaPorDistancia,
  tabelaPorPeso,
  tabelaPorTempo,
  tabelaPorVelocidade,
  velocidadeMedida,
  velocidadeValida,
  wattsValidos,
  MET_ALERTA,
} from '../src/lib/calorias/bicicleta';
import { kcalPorKgPorKm as corridaPorKm } from '../src/lib/calorias/corrida';

const falhas: string[] = [];
const ok = (c: boolean, m: string) => {
  console.log((c ? '  ✓ ' : '  ✗ ') + m);
  if (!c) falhas.push(m);
};
const perto = (a: number, b: number, tol = 0.01) => Math.abs(a - b) <= tol;

/* ------------------------------------------------------------------ */
console.log('\n[1] Os METs do Compêndio são copiados, não ajustados\n');
{
  for (const f of FAIXAS_RUA) {
    ok(perto(metRua(f.velocidade), f.met, 0.0001), `${f.velocidade} km/h devolve ${f.met} METs`);
  }
  for (const f of FAIXAS_ERGO) {
    ok(perto(metErgometrica(f.watts), f.met, 0.0001), `${f.watts} W devolve ${f.met} METs`);
  }
  ok(!velocidadeMedida(19), '19 km/h é declarado como interpolado');
  ok(velocidadeMedida(21), '21 km/h é declarado como medido');
  // Fora das pontas, segura — não extrapola para o que ninguém mediu.
  ok(perto(metRua(5), 4.0), 'abaixo da faixa segura no MET da ponta de baixo');
  ok(perto(metRua(50), 12.0), 'acima da faixa segura no MET da ponta de cima');
}

/* ------------------------------------------------------------------ */
console.log('\n[2] A TESE: de 14 para 28 km/h o gasto por hora triplica\n');
{
  const m14 = metRua(14);
  const m28 = metRua(28);
  console.log(`     14 km/h: ${m14} METs | 28 km/h: ${m28} METs | razão ${(m28 / m14).toFixed(2)}×`);
  ok(perto(m28 / m14, 3.0, 0.01), 'dobrar de 14 para 28 km/h TRIPLICA o MET, exatamente 3,00×');
  /*
   * E o "triplica" NÃO é regra geral — a página dizia que era. O fator
   * depende do ponto de partida, e abaixo de 20 km/h dobrar nem chega a
   * dobrar o MET. Os dois testes seguram a frase que a página agora usa.
   */
  ok(perto(metRua(24) / metRua(12), 2.5, 0.01), 'de 12 para 24 km/h o fator é 2,5×, não 3');
  ok(metRua(20) / metRua(10) < 2, `de 10 para 20 km/h dobrar nem dobra o MET (${(metRua(20) / metRua(10)).toFixed(2)}×)`);
  /*
   * O que o dado NÃO sustenta, e por isso não é afirmado na página: que o
   * crescimento seja suave e acelerado faixa a faixa. Os saltos de 14→21 e
   * 21→28 são iguais (+4,0 METs cada). As faixas do Compêndio são médias
   * empíricas de largura irregular, não uma curva ajustada — a física da
   * resistência do ar explica o formato geral, não cada degrau.
   */
  const salto1 = metRua(21) - metRua(14);
  const salto2 = metRua(28) - metRua(21);
  ok(perto(salto1, salto2, 0.01), `os dois saltos de 7 km/h são iguais (+${salto1.toFixed(1)} METs) — o dado é empírico, não uma curva suave`);
}

/* ------------------------------------------------------------------ */
console.log('\n[3] Custo por km: o pedal vai na direção CONTRÁRIA da corrida\n');
{
  const c14 = kcalPorKgPorKm(14);
  const c28 = kcalPorKgPorKm(28);
  console.log(`     14 km/h: ${c14.toFixed(3)} | 28 km/h: ${c28.toFixed(3)} kcal/kg/km`);
  ok(c28 > c14, 'pedalar mais rápido custa MAIS por quilômetro');
  ok(perto(c28 / c14, 1.5, 0.02), 'e a diferença é de 50% entre a faixa mais lenta e a mais rápida');
  // A comparação que a página faz: a corrida é quase plana, o pedal não.
  const corrida8 = corridaPorKm(8);
  const corrida14 = corridaPorKm(14);
  const varCorrida = Math.abs(corrida14 - corrida8) / corrida8;
  const varPedal = Math.abs(c28 - c14) / c14;
  ok(varPedal > varCorrida * 3, `o custo por km do pedal varia muito mais que o da corrida (${(varPedal * 100).toFixed(0)}% vs ${(varCorrida * 100).toFixed(0)}%)`);
  // E pedalar 1 km custa bem menos que correr 1 km.
  ok(kcalPorKgPorKm(21) < corridaPorKm(10), 'pedalar 1 km custa menos que correr 1 km');
}

/* ------------------------------------------------------------------ */
console.log('\n[4] A COERÊNCIA ENTRE AS DUAS PONTAS (rua x ergométrica)\n');
{
  // 100 W no Compêndio = 6,8 METs. A eficiência implícita precisa cair na
  // faixa aceita pela literatura (18% a 25%), senão as duas escalas estão
  // medindo coisas diferentes.
  const met100 = metErgometrica(100);
  const liquidoKcalMin = kcalPorMinuto(met100 - 1, PESO_PADRAO);
  const wattsMetabolicos = (liquidoKcalMin * 4184) / 60;
  const eficienciaImplicita = 100 / wattsMetabolicos;
  console.log(`     100 W = ${met100} METs → ${wattsMetabolicos.toFixed(0)} W metabólicos → eficiência ${(eficienciaImplicita * 100).toFixed(1)}%`);
  ok(
    eficienciaImplicita > 0.18 && eficienciaImplicita < 0.25,
    `a eficiência implícita do Compêndio cai na faixa da literatura (deu ${(eficienciaImplicita * 100).toFixed(1)}%)`,
  );
  ok(
    Math.abs(eficienciaImplicita - EFICIENCIA) < 0.05,
    `e fica perto dos ${(EFICIENCIA * 100).toFixed(0)}% que a conta de subida usa`,
  );
  // Mais potência sempre gasta mais.
  ok(metErgometrica(200) > metErgometrica(100), '200 W gasta mais que 100 W');
}

/* ------------------------------------------------------------------ */
console.log('\n[5] Subida: física direta, e o peso da bike entra aqui\n');
{
  ok(metDaSubida(20, 0, 70) === 0, 'inclinação zero soma exatamente zero');
  ok(metDaSubida(20, 5, 70) > 0, '5% de subida soma algo');
  ok(perto(metDaSubida(20, 10, 70), metDaSubida(20, 5, 70) * 2, 0.02), 'o acréscimo é linear na inclinação');
  ok(metDaSubida(25, 5, 70) > metDaSubida(15, 5, 70), 'subir mais rápido custa mais');
  // Sanidade física: 70 kg + 12 kg a 20 km/h em 5% = 0,278 m/s vertical
  // 82 × 9,81 × 0,278 = 223 W mecânicos ÷ 0,22 = 1017 W metabólicos
  const massa = 70 + PESO_BICICLETA;
  const vVert = ((20 * 1000) / 3600) * 0.05;
  const wMec = massa * 9.81 * vVert;
  console.log(`     70 kg + ${PESO_BICICLETA} kg bike, 20 km/h, 5%: ${wMec.toFixed(0)} W mecânicos de subida`);
  ok(wMec > 200 && wMec < 250, 'a potência mecânica de subida tem ordem de grandeza plausível');
  // Uma subida forte deve pesar tanto quanto o plano inteiro.
  ok(metPedal(20, 6, 70) > metRua(20) * 1.8, '6% de subida a 20 km/h quase dobra o MET do plano');
  // O peso da bicicleta afeta a subida, não o plano.
  ok(metRua(20) === metPedal(20, 0, 50) && metRua(20) === metPedal(20, 0, 120), 'no plano o MET não depende do peso');
}

/* ------------------------------------------------------------------ */
console.log('\n[5b] O aviso de intensidade impossível\n');
{
  ok(!deTempoRua(60, 70, 20).intensidadeImplausivel, '20 km/h no plano é plausível');
  ok(!deTempoRua(60, 70, 28).intensidadeImplausivel, '28 km/h no plano também — é rápido, mas humano');
  ok(deTempoRua(60, 70, 20, 5).intensidadeImplausivel, '20 km/h numa subida de 5% dispara o aviso');
  ok(deTempoRua(60, 70, 35, 15).intensidadeImplausivel, '35 km/h a 15% idem — são mais de 70 METs');
  ok(!deErgometrica(60, 70, 250).intensidadeImplausivel, '250 W na ergométrica não dispara: é intenso, mas real');
  ok(metPedal(20, 5, 70) > MET_ALERTA, `a combinação que dispara passa dos ${MET_ALERTA} METs`);
  // O limite existe porque a conta é livre e a física não é.
  ok(metPedal(35, 15, 70) > 60, 'a conta em si continua correta, só avisada');
}

/* ------------------------------------------------------------------ */
console.log('\n[6] Os modos concordam\n');
{
  const t = deTempoRua(60, PESO_PADRAO, 20);
  ok(perto(t.km, 20), '1 hora a 20 km/h percorre 20 km');
  const d = deDistancia(20, PESO_PADRAO, 20);
  ok(perto(d.kcal, t.kcal, 0.01), 'modo distância bate com modo tempo');
  const k = deKcalRua(t.kcal, PESO_PADRAO, 20);
  ok(perto(k.minutos, t.minutos, 0.01), 'modo meta devolve o tempo certo');
  ok(perto(k.km, t.km, 0.01), 'e a distância certa');
}

/* ------------------------------------------------------------------ */
console.log('\n[7] A ergométrica não inventa distância\n');
{
  const e = deErgometrica(45, PESO_PADRAO, 120);
  ok(e.km === 0, 'a ergométrica devolve distância ZERO — não existe distância honesta ali');
  ok(e.velocidade === 0, 'e velocidade zero, pelo mesmo motivo');
  ok(e.onde === 'ergometrica', 'o resultado se identifica como ergométrica');
  ok(e.kcal > 0, 'mas o gasto é calculado normalmente');
  ok(deTempoRua(45, PESO_PADRAO, 20).km > 0, 'enquanto o modo rua devolve distância');
}

/* ------------------------------------------------------------------ */
console.log('\n[8] Níveis de esforço, para quem não tem watts no painel\n');
{
  ok(nivel('leve').watts < nivel('moderado').watts, 'leve tem menos watts que moderado');
  ok(nivel('moderado').watts < nivel('forte').watts, 'moderado menos que forte');
  ok(nivel('forte').watts < nivel('muito-forte').watts, 'forte menos que muito forte');
  ok(nivel('moderado').watts === 100, 'moderado aponta para 100 W, que é ponto medido do Compêndio');
  // Fallback seguro para id inválido.
  ok(nivel('inexistente' as never).watts > 0, 'um id desconhecido cai num padrão válido');
}

/* ------------------------------------------------------------------ */
console.log('\n[9] Gasto líquido\n');
{
  const r = deTempoRua(60, PESO_PADRAO, 20);
  ok(r.kcalLiquida < r.kcal, 'o líquido é menor que o bruto');
  ok(perto(r.kcal - r.kcalLiquida, kcalPorMinuto(1, PESO_PADRAO) * 60, 0.001),
    'a diferença é exatamente 1 MET pelo mesmo tempo');
  const e = deErgometrica(60, PESO_PADRAO, 100);
  ok(e.kcalLiquida < e.kcal, 'na ergométrica também');
}

/* ------------------------------------------------------------------ */
console.log('\n[10] Validação e bordas\n');
{
  ok(!pesoValido(0) && !pesoValido(-5) && !pesoValido(999), 'pesos inválidos barrados');
  ok(!velocidadeValida(5) && !velocidadeValida(60), 'velocidades fora da faixa medida barradas');
  ok(velocidadeValida(VELOCIDADE_PADRAO), 'a velocidade padrão é válida');
  ok(!wattsValidos(10) && !wattsValidos(900), 'potências implausíveis barradas');
  ok(parseNumero('22,5') === 22.5, 'vírgula decimal funciona');
  ok(parseNumero('') === null, 'vazio devolve null');

  const extremos: [string, () => { kcal: number; minutos: number }][] = [
    ['300 km', () => deDistancia(300, 70, 25)],
    ['0,5 km', () => deDistancia(0.5, 70, 20)],
    ['600 min', () => deTempoRua(600, 70, 20)],
    ['velocidade mínima', () => deTempoRua(60, 70, VELOCIDADE_MIN)],
    ['velocidade máxima', () => deTempoRua(60, 70, VELOCIDADE_MAX)],
    ['ergo 400 W', () => deErgometrica(30, 70, 400)],
    ['subida 15%', () => deTempoRua(30, 70, 15, 15)],
  ];
  for (const [nome, f] of extremos) {
    const r = f();
    ok(Number.isFinite(r.kcal) && r.kcal > 0 && Number.isFinite(r.minutos) && r.minutos > 0,
      `${nome}: ${arredondaKcal(r.kcal)} kcal em ${formataTempo(r.minutos)}`);
  }
}

/* ------------------------------------------------------------------ */
console.log('\n[11] Tabelas\n');
{
  const tv = tabelaPorVelocidade(PESO_PADRAO, 60);
  ok(tv.length === FAIXAS_RUA.length, 'a tabela de velocidade cobre as 5 faixas');
  ok(tv.every((l, i) => i === 0 || l.kcal > tv[i - 1].kcal), 'mais rápido gasta mais na mesma hora');
  /*
   * A tendência sobe, mas NÃO é monotônica: há uma pequena queda em 21 km/h
   * (0,408 → 0,400 kcal/kg/km), porque as faixas do Compêndio têm larguras
   * diferentes. O teste afirma a tendência, que é o que a página diz — e
   * registra a irregularidade para ninguém "consertar" o dado depois.
   */
  ok(tv[tv.length - 1].porKm > tv[0].porKm * 1.4, 'o custo por km sobe cerca de 50% da faixa mais lenta à mais rápida');
  const naoMonotonicas = tv.filter((l, i) => i > 0 && l.porKm < tv[i - 1].porKm).length;
  ok(naoMonotonicas === 1, `exatamente uma faixa quebra a monotonia (a de 21 km/h) — irregularidade conhecida do dado`);

  const tp = tabelaPorPeso(60, 20);
  ok(tp.every((l, i) => i === 0 || l.kcal > tp[i - 1].kcal), 'o gasto cresce com o peso');
  ok(tp.every((l) => l.kcalLiquida < l.kcal), 'líquido sempre menor que bruto');

  const tt = tabelaPorTempo(PESO_PADRAO, 20);
  const t30 = tt.find((l) => l.minutos === 30)!;
  const t60 = tt.find((l) => l.minutos === 60)!;
  ok(Math.abs(t60.kcal - t30.kcal * 2) <= 5, '1 hora gasta praticamente o dobro de 30 min');

  const td = tabelaPorDistancia(PESO_PADRAO, 20);
  ok(td.every((l, i) => i === 0 || l.kcal > td[i - 1].kcal), 'distância maior gasta mais');

  const te = tabelaErgometrica(PESO_PADRAO, 45);
  ok(te.length === FAIXAS_ERGO.length, 'a tabela da ergométrica cobre as 7 potências');
  ok(te.every((l, i) => i === 0 || l.kcal > te[i - 1].kcal), 'mais watts gasta mais');
}

/* ------------------------------------------------------------------ */
console.log('\n[12] Honestidade\n');
{
  ok(arredondaKcal(287.4382) === 287, 'sem casa decimal inventada');
  ok(arredondaKcal(1234) === 1230, 'acima de mil arredonda à dezena');
  ok(formataKm(0) === '—', 'distância zero não vira "0 km"');
  const s = simulacaoUmQuilo(PESO_PADRAO, 20);
  ok(perto(s.kcal, KCAL_POR_KG_GORDURA), 'a simulação usa os 7.700 kcal');
  ok(s.km > 200, `e dá ${Math.round(s.km)} km — o ponto é justamente ser absurdo`);
}

if (falhas.length) {
  console.log(`\n✗ ${falhas.length} falha(s):`);
  falhas.forEach((f) => console.log('   - ' + f));
  process.exit(1);
}
console.log('\n✓ Motor do pedal: tudo certo.\n');
