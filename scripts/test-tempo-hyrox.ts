/**
 * Testes do motor da calculadora de tempo do Hyrox.
 *
 * O que segura a página: a ida e a volta fecham (meta → pace → meta), as
 * parciais somam o tempo final e terminam nele, a queda de ritmo mantém o
 * tempo de corrida e reproduz a proporção do estudo, a proporção padrão das
 * estações é a do estudo com amadores, e as metas impossíveis não ganham
 * pace inventado.
 *
 * Uso: npm run test:tempo-hyrox
 */
import {
  BRANDT_CORRIDA_MIN,
  BRANDT_TOTAL_MIN,
  ESTACOES,
  KM_CORRIDA,
  PARTE_ESTACOES,
  QUEDA,
  estacoesPelaMeta,
  estacoesPeloPace,
  faixaMeta,
  formataPace,
  formataTempo,
  frasePlano,
  paceParaMeta,
  pacesDasCorridas,
  tempoPeloPace,
  type Plano,
} from '../src/lib/corrida/tempoHyrox';

let falhas = 0;
const ok = (cond: boolean, msg: string) => {
  if (cond) console.log(`  ✓ ${msg}`);
  else {
    falhas++;
    console.log(`  ✗ ${msg}`);
  }
};
const perto = (a: number, b: number, tol = 1e-6) => Math.abs(a - b) <= tol;
const plano = (x: ReturnType<typeof paceParaMeta>): Plano => {
  if (!x.ok) throw new Error(x.mensagem);
  return x;
};

console.log('Meta → pace');
{
  const p = plano(paceParaMeta(90 * 60, 34 * 60));
  ok(perto(p.pace, 420), 'meta de 1h30 com 34 min de estações pede pace 7:00');
  ok(formataPace(p.pace) === '7:00' && formataTempo(p.tempoFinal) === '1:30:00', 'formatação 7:00 e 1:30:00');
  ok(perto(p.corrida + p.estacoes, p.tempoFinal), 'corrida + estações = tempo final');
  ok(perto(p.porEstacao * ESTACOES.length, p.estacoes), 'estações divididas em 8 partes iguais');
  ok(perto(p.kmh, 3600 / 420), 'velocidade coerente com o pace');
}

console.log('\nPace → meta, e a volta');
{
  const p = plano(tempoPeloPace(330, 30 * 60));
  ok(perto(p.tempoFinal, 330 * 8 + 1800), 'pace 5:30 + 30 min de estações = 74 min');
  const volta = plano(paceParaMeta(p.tempoFinal, p.estacoes));
  ok(perto(volta.pace, 330), 'ida e volta fecham no mesmo pace');
}

console.log('\nParciais');
{
  for (const queda of [false, true]) {
    const p = plano(paceParaMeta(100 * 60, 38 * 60, queda));
    ok(p.parciais.length === 16, `${queda ? 'com' : 'sem'} queda: 16 trechos (8 corridas + 8 estações)`);
    ok(perto(p.parciais[15].acumulado, p.tempoFinal), `${queda ? 'com' : 'sem'} queda: o relógio termina no tempo final`);
    const somaCorrida = p.parciais.filter((x) => x.tipo === 'corrida').reduce((s, x) => s + x.duracao, 0);
    ok(perto(somaCorrida, p.corrida), `${queda ? 'com' : 'sem'} queda: as 8 corridas somam o tempo de corrida`);
    ok(p.parciais.every((x, i) => i === 0 || x.acumulado > p.parciais[i - 1].acumulado), 'relógio sempre crescente');
    ok(p.parciais[1].nome === 'SkiErg' && p.parciais[15].nome === 'Wall balls', 'estações na ordem da prova');
  }
}

console.log('\nQueda de ritmo (HYScience)');
{
  const paces = pacesDasCorridas(8 * 420, true);
  ok(perto(paces.reduce((s, x) => s + x, 0), 8 * 420), 'a queda não muda o tempo total de corrida');
  ok(perto(paces[0] / paces[7], QUEDA), 'última corrida mais lenta na proporção do estudo (16,13 → 13,58 km/h)');
  ok(paces.every((x, i) => i === 0 || x > paces[i - 1]), 'cada corrida mais lenta que a anterior');
  ok(paces[0] < 420 && paces[7] > 420, 'a primeira abaixo da média, a última acima');
  const sem = pacesDasCorridas(8 * 420, false);
  ok(sem.every((x) => perto(x, 420)), 'sem queda, as 8 iguais');
}

console.log('\nProporção padrão das estações (Brandt 2025)');
{
  ok(perto(PARTE_ESTACOES, 1 - BRANDT_CORRIDA_MIN / BRANDT_TOTAL_MIN), 'parte das estações = 1 − 51,2/86,5');
  ok(PARTE_ESTACOES > 0.4 && PARTE_ESTACOES < 0.42, `≈ 41% (${(PARTE_ESTACOES * 100).toFixed(1)}%)`);
  ok(estacoesPelaMeta(86.5 * 60) === 35 * 60, 'meta de 86,5 min → 35 min de estações e transições');
  ok(estacoesPelaMeta(90 * 60) % 60 === 0, 'arredondado ao minuto');
  const p = plano(paceParaMeta(BRANDT_TOTAL_MIN * 60, estacoesPelaMeta(BRANDT_TOTAL_MIN * 60)));
  ok(Math.abs(p.corrida / 60 - BRANDT_CORRIDA_MIN) < 1, 'na mediana do estudo, a corrida volta a ≈ 51 min');
  ok(estacoesPeloPace(420) === Math.round((420 * KM_CORRIDA * PARTE_ESTACOES) / (1 - PARTE_ESTACOES) / 60) * 60, 'estações pelo pace na mesma proporção');
}

console.log('\nO que não fecha não ganha número');
{
  const a = paceParaMeta(50 * 60, 40 * 60);
  ok(!a.ok && a.motivo === 'nao-fecha', 'meta de 50 min com 40 de estações: não fecha');
  const b = paceParaMeta(30 * 60, 15 * 60);
  ok(!b.ok && b.motivo === 'meta', 'meta abaixo de 45 min: recusada');
  const c = paceParaMeta(90 * 60, 5 * 60);
  ok(!c.ok && c.motivo === 'estacoes', 'estações abaixo de 8 min: recusadas');
  const d = paceParaMeta(4 * 3600, 10 * 60);
  ok(!d.ok && d.motivo === 'pace-fora', 'pace acima de 15:00: avisado');
  const e = tempoPeloPace(100, 30 * 60);
  ok(!e.ok && e.motivo === 'pace', 'pace abaixo de 2:30: recusado');
  ok(!paceParaMeta(null, 1800).ok && !tempoPeloPace(NaN, 1800).ok, 'vazio e NaN recusados');
}

console.log('\nTexto e analytics');
{
  const p = plano(paceParaMeta(90 * 60, 34 * 60));
  const f = frasePlano(p);
  ok(f.includes('7:00') && f.includes('1:30:00'), 'a frase traz pace e tempo final');
  ok(!/excelente|ótimo|ruim|fraco/i.test(f), 'a frase não julga o desempenho');
  ok(faixaMeta(90 * 60) === '90_105' && faixaMeta(50 * 60) === 'abaixo_60' && faixaMeta(200 * 60) === 'acima_150', 'meta → faixa, nunca o tempo exato');
}

console.log(falhas ? `\n✗ ${falhas} falha(s)\n` : '\n✓ Motor do tempo do Hyrox: tudo certo.\n');
process.exit(falhas ? 1 : 0);
