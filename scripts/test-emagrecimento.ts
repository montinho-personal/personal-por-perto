/**
 * Testes do motor da calculadora de emagrecimento.
 *
 * O que segura a página: o gasto inicial é o da calculadora de gasto
 * diário (Mifflin × meio da faixa do estilo); o consumo é fixo; o prazo
 * com o gasto caindo é sempre MAIOR que o da conta linear; a constância
 * alonga o prazo na proporção; meta abaixo do ponto de equilíbrio não
 * ganha prazo inventado; os alertas de consumo abaixo do metabolismo e de
 * meta em baixo peso disparam quando devem.
 *
 * Uso: npm run test:emagrecimento
 */
import {
  CONSTANCIAS,
  DEFICITS,
  KCAL_POR_KG,
  curvaResumida,
  formataPrazo,
  frasePlano,
  imc,
  metaValida,
  pesoImcMinimo,
  simula,
} from '../src/lib/corpo/emagrecimento';
import { gastoDiario } from '../src/lib/calorias/gastoDiario';

let falhas = 0;
const ok = (cond: boolean, msg: string) => {
  if (cond) console.log(`  ✓ ${msg}`);
  else {
    falhas++;
    console.log(`  ✗ ${msg}`);
  }
};
const perto = (a: number, b: number, tol: number) => Math.abs(a - b) <= tol;

console.log('\nO gasto inicial é o da calculadora de gasto diário');
{
  const p = simula('feminino', 80, 165, 35, 'sedentario', 70, 'moderado', 1);
  const g = gastoDiario('feminino', 80, 165, 35, 'sedentario');
  ok(perto(p.metabolismoInicial, g.metabolismo, 1e-9), '  mesmo metabolismo (Mifflin-St Jeor)');
  ok(perto(p.gastoInicial, (g.gastoMin + g.gastoMax) / 2, 1e-9), '  gasto = metabolismo × meio da faixa do estilo');
  ok(perto(p.consumo, p.gastoInicial - 500, 1e-9), '  consumo = gasto inicial − 500 kcal');
  ok(perto(p.kgSemanaInicio, (500 * 7) / KCAL_POR_KG, 1e-9), '  ritmo da 1ª semana: 500 × 7 ÷ 7.700 ≈ 0,45 kg');
}

console.log('\nO gasto que cai alonga o prazo');
{
  const p = simula('feminino', 80, 165, 35, 'sedentario', 70, 'moderado', 1);
  ok(p.chega && p.dias !== null, '  80 → 70 kg com 500 kcal: chega');
  ok((p.dias as number) > p.diasLinear, `  prazo real (${p.dias} dias) maior que o linear (${Math.round(p.diasLinear)} dias)`);
  ok(perto(p.diasLinear, 154, 0.5), '  linear: 10 kg × 7.700 ÷ 500 = 154 dias');
  ok(p.curva[0].pesoKg === 80 && p.curva[p.curva.length - 1].pesoKg === 70, '  a curva começa em 80 e termina na meta');
  ok(p.curva.every((c, i) => i === 0 || c.pesoKg <= p.curva[i - 1].pesoKg), '  a curva só desce');
}

console.log('\nConstância');
{
  const cheia = simula('masculino', 95, 178, 40, 'ativo', 88, 'moderado', 1);
  const metade = simula('masculino', 95, 178, 40, 'ativo', 88, 'moderado', 0.75);
  ok(perto(metade.diasLinear, cheia.diasLinear / 0.75, 1e-6), '  linear com 75%: o prazo divide por 0,75');
  ok((metade.dias as number) > (cheia.dias as number), '  com 75% de constância, o prazo real também cresce');
  ok(CONSTANCIAS.length === 4 && CONSTANCIAS[3] === 1, '  quatro opções, a última 100%');
}

console.log('\nMeta abaixo do equilíbrio: sem prazo inventado');
{
  // 500 kcal com pal ~1,55: equilíbrio ~32 kg abaixo do peso inicial.
  const p = simula('feminino', 100, 165, 35, 'sedentario', 60, 'moderado', 1);
  ok(!p.chega && p.dias === null, '  100 → 60 kg com 500 kcal fixas: não chega');
  ok(perto(p.pesoEquilibrio, 100 - 500 / (10 * p.pal), 1e-9), '  equilíbrio = peso − déficit ÷ (10 × nível de atividade)');
  ok(p.pesoFinal > p.pesoMeta, '  o peso final fica acima da meta');
  ok(frasePlano(p).includes('antes da meta'), '  a frase explica que o déficit acaba antes');
}

console.log('\nAlertas');
{
  const firme = simula('feminino', 60, 155, 50, 'sedentario', 55, 'firme', 1);
  ok(firme.consumoAbaixoDoMetabolismo, '  60 kg, 1,55 m, 50 anos, déficit firme: consumo abaixo do metabolismo');
  const leve = simula('masculino', 90, 180, 30, 'ativo', 85, 'leve', 1);
  ok(!leve.consumoAbaixoDoMetabolismo, '  90 kg ativo com déficit leve: sem alerta');
  ok(perto(pesoImcMinimo(170), 18.5 * 1.7 ** 2, 1e-9), '  peso do IMC 18,5 para 1,70 m');
  const baixo = simula('feminino', 60, 170, 30, 'sedentario', 50, 'leve', 1);
  ok(baixo.metaBaixoPeso && imc(50, 170) < 18.5, '  meta de 50 kg para 1,70 m: alerta de baixo peso');
}

console.log('\nCurva para a tabela');
{
  const curto = simula('feminino', 80, 165, 35, 'sedentario', 70, 'moderado', 0.9);
  const r = curvaResumida(curto.curva);
  ok(r.length === curto.curva.length - 1, '  até 12 meses: todos os meses, sem o ponto zero');
  ok(r[r.length - 1].pesoKg === 70, '  o último ponto é a meta');
  const longo = simula('feminino', 100, 165, 35, 'sedentario', 60, 'moderado', 1);
  const rl = curvaResumida(longo.curva);
  ok(rl.every((c, i) => c.mes <= 12 || c.mes % 3 === 0 || i === rl.length - 1), '  depois de 12 meses, de três em três');
  ok(rl.length < longo.curva.length - 1, '  a tabela longa fica menor');
}

console.log('\nValidação e textos');
ok(metaValida(70, 80) && !metaValida(80, 80) && !metaValida(90, 80) && !metaValida(null, 80), 'meta precisa ser menor que o peso atual');
ok(DEFICITS.map((d) => d.kcal).join(',') === '300,500,750', 'três déficits: 300, 500, 750 kcal');
ok(formataPrazo(70) === 'cerca de 10 semanas', 'prazo curto em semanas');
ok(formataPrazo(200) === 'cerca de 7 meses', 'prazo médio em meses');
ok(formataPrazo(900) === 'cerca de 2,5 anos', 'prazo longo em anos');
{
  const p = simula('feminino', 80, 165, 35, 'sedentario', 70, 'moderado', 0.9);
  ok(frasePlano(p).includes('10,0 kg') && frasePlano(p).includes('90%'), 'a frase leva os quilos e a constância');
}

console.log(falhas ? `\n✗ ${falhas} falha(s)\n` : '\n✓ tudo certo\n');
process.exit(falhas ? 1 : 0);
