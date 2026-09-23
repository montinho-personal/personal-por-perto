/**
 * Testes do motor de calorias de pular corda.
 *
 * Duas conferências carregam esta página:
 *
 *   1. A LENDA. "Dez minutos de corda valem trinta de corrida" precisa ser
 *      falsa pelos números do próprio site — e o teste compara o MET da
 *      corda com o motor da corrida para provar isso, em vez de afirmar.
 *
 *   2. A INTUIÇÃO DA CADÊNCIA. Acelerar quase não muda o gasto por minuto,
 *      e deixa cada pulo mais barato. Se algum dia a tabela mudar e isso
 *      deixar de valer, a tese da página cai junto e o teste avisa.
 *
 * Uso: npm run test:corda
 */
import {
  ALTURA_PULO,
  CADENCIA_PADRAO,
  EFICIENCIA,
  FAIXAS,
  G,
  KCAL_MIN,
  KCAL_POR_KG_GORDURA,
  MINUTOS_ALERTA,
  MINUTOS_MAX,
  PESO_PADRAO,
  arredondaKcal,
  VELOCIDADE_CORRIDA_REF,
  cadenciaDaFaixa,
  cadenciaIncoerente,
  cadenciaValida,
  dePulos,
  deKcal,
  deSeries,
  deTempo,
  faixa,
  formataKcal,
  formataPulos,
  formataTempo,
  fracaoExplicadaPelaAltura,
  fraseContexto,
  kcalPorMinuto,
  kcalValida,
  metCorda,
  minutosValidos,
  parseNumero,
  pesoValido,
  pulosValidos,
  segundosValidos,
  seriesValidas,
  simulacaoUmQuilo,
  tabelaPorFaixa,
  tabelaPorPeso,
  tabelaPorTempo,
} from '../src/lib/calorias/corda';
import { metCorrida } from '../src/lib/calorias/corrida';

const falhas: string[] = [];
const ok = (c: boolean, m: string) => {
  console.log((c ? '  ✓ ' : '  ✗ ') + m);
  if (!c) falhas.push(m);
};
const perto = (a: number, b: number, tol = 0.01) => Math.abs(a - b) <= tol;

/* ------------------------------------------------------------------ */
console.log('\n[1] Os METs do Compêndio são copiados, não ajustados\n');
{
  ok(perto(metCorda('lento'), 8.8, 0.0001), 'faixa lenta devolve 8,8 METs');
  ok(perto(metCorda('moderado'), 11.8, 0.0001), 'faixa moderada devolve 11,8 METs');
  ok(perto(metCorda('rapido'), 12.3, 0.0001), 'faixa rápida devolve 12,3 METs');
  ok(perto(metCorda('inexistente'), 11.8, 0.0001), 'faixa inválida cai na moderada, sem NaN');
  ok(FAIXAS.every((f, i) => i === 0 || f.met > FAIXAS[i - 1].met), 'as faixas vêm em ordem crescente de MET');
  ok(FAIXAS.every((f, i) => i === 0 || f.cadencia > FAIXAS[i - 1].cadencia), 'e de cadência');
}

/* ------------------------------------------------------------------ */
console.log('\n[2] A LENDA: "10 min de corda = 30 min de corrida" é falsa\n');
{
  const metMod = metCorda('moderado');
  // A que velocidade de corrida esse MET corresponde, pela equação da ACSM?
  let vEquivalente = 0;
  for (let v = 5; v < 25; v += 0.01) {
    if (metCorrida(v) >= metMod) { vEquivalente = Math.round(v * 10) / 10; break; }
  }
  console.log(`     corda moderada = ${metMod} METs = correr a ${vEquivalente.toLocaleString('pt-BR')} km/h (${metCorrida(vEquivalente).toFixed(2)} METs)`);
  ok(perto(metCorrida(vEquivalente), metMod, 0.15), 'a corda moderada tem o mesmo MET de uma velocidade real de corrida');
  ok(vEquivalente > 10.5 && vEquivalente < 12, `e essa velocidade é de 11 km/h para cima (${vEquivalente}) — ritmo forte, não trivial`);

  // A refutação numérica: 10 min de corda contra 30 min de corrida no MESMO ritmo.
  const corda10 = deTempo(10, PESO_PADRAO, 'moderado').kcal;
  const corrida10 = kcalPorMinuto(metCorrida(vEquivalente), PESO_PADRAO) * 10;
  const corrida30 = corrida10 * 3;
  console.log(`     10 min de corda: ${formataKcal(corda10)} kcal | 10 min correndo a ${vEquivalente} km/h: ${formataKcal(corrida10)} kcal | 30 min: ${formataKcal(corrida30)} kcal`);
  ok(perto(corda10 / corrida10, 1, 0.05), '10 min de corda valem 10 min de corrida no mesmo MET, não trinta');
  ok(corda10 < corrida30 * 0.4, 'e valem menos da metade de 30 min de corrida');

  /*
   * Para a lenda ser verdadeira, a corda teria de valer três vezes o MET da
   * corrida equivalente. Isso passa de 34 METs — acima do que qualquer
   * humano sustenta, e acima do MET mais alto de todo o Compêndio.
   */
  const metNecessario = metCorrida(vEquivalente) * 3;
  console.log(`     para a lenda ser verdade, a corda teria de valer ${metNecessario.toFixed(1)} METs`);
  ok(metNecessario > 30, `o MET exigido pela lenda passa de 30 (${metNecessario.toFixed(1)}) — não existe`);
  ok(metNecessario > metCorda('rapido') * 2.5, 'é mais que o dobro e meio da faixa mais rápida medida');

  // E a comparação honesta que a página faz no lugar: por minuto, empatam.
  const corrida8 = metCorrida(8);
  ok(metMod > corrida8, `a corda moderada custa mais por minuto que correr a 8 km/h (${metMod} vs ${corrida8.toFixed(1)})`);
}

/* ------------------------------------------------------------------ */
console.log('\n[3] A TESE: a cadência quase não muda o custo por minuto\n');
{
  const lento = metCorda('lento');
  const mod = metCorda('moderado');
  const rap = metCorda('rapido');
  console.log(`     85 pulos/min: ${lento} METs | 110: ${mod} METs | 140: ${rap} METs`);
  const saltoCadencia = FAIXAS[2].cadencia / FAIXAS[1].cadencia - 1;
  const saltoCusto = rap / mod - 1;
  console.log(`     de 110 para 140 pulos/min: +${(saltoCadencia * 100).toFixed(0)}% de cadência, +${(saltoCusto * 100).toFixed(1)}% de custo`);
  ok(saltoCusto < 0.06, `acelerar 27% custa menos de 6% a mais (${(saltoCusto * 100).toFixed(1)}%)`);
  ok(saltoCadencia > saltoCusto * 4, 'o ganho de cadência é mais de quatro vezes o de custo');

  // O ponto contraintuitivo: POR PULO fica mais barato.
  const t = tabelaPorFaixa(PESO_PADRAO);
  for (const l of t) {
    console.log(`     ${l.faixa.nome.padEnd(9)} ${l.faixa.cadencia} pulos/min → ${formataKcal(l.kcal10min)} kcal em 10 min, ${l.porPulo.toFixed(4)} kcal por pulo`);
  }
  ok(t[2].porPulo < t[1].porPulo, 'a faixa rápida é MAIS BARATA por pulo que a moderada');
  ok(perto(t[2].porPulo / t[1].porPulo, 0.82, 0.02), 'cerca de 18% mais barata por pulo');
  ok(t[2].pulos10min > t[1].pulos10min, 'e dá mais pulos no mesmo tempo');

  /*
   * O que o dado NÃO sustenta, e por isso a página não afirma: que o custo
   * por pulo caia de forma monótona em toda a tabela. Do lento para o
   * moderado ele SOBE — 8,8/85 contra 11,8/110. As faixas do Compêndio são
   * medições de gestos diferentes (a lenta tem batida de marcação entre os
   * pulos), não pontos de uma curva única.
   */
  ok(t[1].porPulo > t[0].porPulo, 'do lento para o moderado o custo por pulo SOBE — a tabela não é uma curva lisa');
}

/* ------------------------------------------------------------------ */
console.log('\n[4] A física NÃO resolve a corda (ao contrário da escada)\n');
{
  const f = fracaoExplicadaPelaAltura(PESO_PADRAO, 'moderado');
  console.log(`     erguer o centro de massa: ${f.mecanico.toFixed(2)} kcal/min | medido líquido: ${f.medido.toFixed(2)} kcal/min | explica ${(f.fracao * 100).toFixed(0)}%`);
  ok(f.fracao > 0.2 && f.fracao < 0.35, `a conta de altura explica entre 20% e 35% do medido (${(f.fracao * 100).toFixed(0)}%)`);
  ok(perto(f.fracao, 0.27, 0.03), 'e fica perto de 27%, que é o número citado na página');
  ok(f.medido > f.mecanico * 2.5, 'o medido é mais que o dobro e meio do mecânico');

  // Coerência das constantes usadas na ilustração.
  ok(perto(ALTURA_PULO, 0.05, 0.0001), 'a altura de pulo da ilustração é 5 cm');
  ok(EFICIENCIA > 0.2 && EFICIENCIA < 0.3, 'e a eficiência usada está na faixa aceita para salto');
  ok(perto(G, 9.81, 0.001), 'a gravidade é 9,81');
  // A fração não pode depender do peso: é razão de duas coisas lineares nele.
  const f50 = fracaoExplicadaPelaAltura(50, 'moderado').fracao;
  const f120 = fracaoExplicadaPelaAltura(120, 'moderado').fracao;
  ok(perto(f50, f120, 0.0001), 'e é a mesma para qualquer peso, como tem que ser');
}

/* ------------------------------------------------------------------ */
console.log('\n[5] Os números de referência da página\n');
{
  const dez = deTempo(10, PESO_PADRAO, 'moderado');
  console.log(`     10 min moderados / 70 kg: ${formataKcal(dez.kcal)} kcal, ${formataPulos(dez.pulos)}`);
  ok(arredondaKcal(dez.kcal) === 145, '10 min de corda moderada a 70 kg dão 145 kcal');
  ok(dez.pulos === 1100, 'e 1.100 pulos a 110 por minuto');
  ok(perto(dez.porPulo, 0.1318, 0.001), 'a 0,132 kcal por pulo');

  // Um minuto, que é o que muita gente consegue no começo.
  const um = deTempo(1, PESO_PADRAO, 'lento');
  ok(arredondaKcal(um.kcal) === 10.8 || perto(um.kcal, 10.78, 0.05), `1 min lento dá cerca de 10,8 kcal (${um.kcal.toFixed(2)})`);
  ok(um.pulos === 85, 'e 85 pulos — a cadência vem da FAIXA, não de uma constante solta');
  ok(deTempo(1, PESO_PADRAO, 'rapido').pulos === 140, 'a faixa rápida devolve os 140 pulos dela');
  ok(deTempo(1, PESO_PADRAO, 'moderado').pulos === 110, 'e a moderada, 110');

  // 100 pulos, que é uma busca comum.
  const cem = dePulos(100, PESO_PADRAO, 'moderado');
  console.log(`     100 pulos / 70 kg: ${formataKcal(cem.kcal)} kcal em ${formataTempo(cem.minutos)}`);
  ok(perto(cem.kcal, 13.18, 0.05), '100 pulos dão cerca de 13 kcal para 70 kg');
  ok(perto(cem.minutos, 0.909, 0.01), 'em menos de um minuto');
}

/* ------------------------------------------------------------------ */
console.log('\n[6] O modo de séries, que é como corda acontece\n');
{
  const s = deSeries(8, 45, PESO_PADRAO, 'moderado');
  console.log(`     8 séries de 45 s / 70 kg: ${formataTempo(s.minutos)} de corda, ${formataKcal(s.kcal)} kcal, ${formataPulos(s.pulos)}`);
  ok(perto(s.minutos, 6, 0.0001), '8 × 45 s dão exatamente 6 minutos de corda');
  ok(s.series === 8 && s.segundosPorSerie === 45, 'e o resultado guarda as séries informadas');
  ok(perto(s.kcal, deTempo(6, PESO_PADRAO, 'moderado').kcal, 0.0001), 'o gasto bate com 6 min contínuos — é o mesmo tempo de corda');

  /*
   * O erro que o modo evita: contar o treino inteiro. Oito séries de 45 s
   * com 1min15 de descanso são 20 minutos de relógio para 6 de corda.
   */
  const relogioInteiro = deTempo(20, PESO_PADRAO, 'moderado');
  const inflacao = relogioInteiro.kcal / s.kcal;
  ok(perto(inflacao, 3.333, 0.01), `contar os 20 min de treino inflaria o resultado em ${inflacao.toFixed(1)}×`);
}

/* ------------------------------------------------------------------ */
console.log('\n[7] O aviso de tempo contínuo implausível\n');
{
  ok(!deTempo(10, PESO_PADRAO).tempoImplausivel, '10 min contínuos não disparam aviso');
  ok(!deTempo(MINUTOS_ALERTA, PESO_PADRAO).tempoImplausivel, 'no limite exato ainda não dispara');
  ok(deTempo(30, PESO_PADRAO).tempoImplausivel, '30 min contínuos disparam');
  // Mas séries NÃO disparam, mesmo somando muito tempo de relógio.
  ok(!deSeries(20, 60, PESO_PADRAO).tempoImplausivel, '20 séries de 1 min NÃO disparam — é treino normal, distribuído');
  ok(deSeries(20, 60, PESO_PADRAO).minutos === 20, 'ainda que somem 20 minutos de corda');
  // A conta não muda por causa do aviso.
  ok(perto(deTempo(30, PESO_PADRAO).kcal, kcalPorMinuto(11.8, PESO_PADRAO) * 30, 0.0001), 'e a conta em si continua correta, só avisada');
}

/* ------------------------------------------------------------------ */
console.log('\n[8] Proporcionalidade e modo meta\n');
{
  ok(perto(deTempo(10, 100).kcal / deTempo(10, 50).kcal, 2, 0.0001), 'dobrar o peso dobra o gasto');
  ok(perto(deTempo(20, 70).kcal / deTempo(10, 70).kcal, 2, 0.0001), 'dobrar o tempo dobra o gasto');
  ok(perto(dePulos(2200, 70).kcal / dePulos(1100, 70).kcal, 2, 0.0001), 'dobrar os pulos dobra o gasto');
  ok(deTempo(10, 70).kcalLiquida < deTempo(10, 70).kcal, 'o líquido é menor que o bruto');

  const meta = deKcal(200, PESO_PADRAO, 'moderado');
  console.log(`     meta de 200 kcal / 70 kg: ${formataTempo(meta.minutos)}, ${formataPulos(meta.pulos)}`);
  ok(perto(meta.kcal, 200, 0.0001), 'a meta é devolvida intacta');
  ok(meta.minutos > 13 && meta.minutos < 15, 'e pede quase 14 min de corda contínua');
  ok(meta.tempoImplausivel === false, 'que ainda está abaixo do limite de aviso');

  const quilo = simulacaoUmQuilo(PESO_PADRAO);
  console.log(`     1 kg de gordura: ${formataTempo(quilo.minutos)} de corda, ${formataPulos(quilo.pulos)}`);
  ok(quilo.minutos > 500, 'um quilo de gordura passa de 8 horas de corda sem parar');
  ok(quilo.pulos > 55000, 'e de 55 mil pulos — o ponto é ser absurdo');
}

/* ------------------------------------------------------------------ */
console.log('\n[9] Entradas e validação\n');
{
  ok(!pesoValido(null) && !pesoValido(0) && !pesoValido(999), 'peso fora da faixa é barrado');
  ok(pesoValido(72.5) && parseNumero('72,5') === 72.5, 'peso com vírgula é aceito');
  ok(!minutosValidos(MINUTOS_MAX + 1), `mais de ${MINUTOS_MAX} min de corda é barrado — e isso é conteúdo, não limitação`);
  ok(minutosValidos(60), '60 min ainda passa, no limite');
  ok(!pulosValidos(5) && !pulosValidos(99999), 'pulos fora da faixa são barrados');
  ok(!cadenciaValida(10) && !cadenciaValida(300), 'cadência fora do humano é barrada');
  ok(cadenciaValida(110), 'e a cadência padrão passa');
  ok(!seriesValidas(0) && !seriesValidas(99), 'séries fora da faixa são barradas');
  ok(!segundosValidos(1) && !segundosValidos(9999), 'duração de série fora da faixa é barrada');
  ok(kcalValida(KCAL_MIN) && !kcalValida(KCAL_MIN - 1), `a meta mínima é ${KCAL_MIN} kcal`);
}

/* ------------------------------------------------------------------ */
console.log('\n[10] Formatação e frases\n');
{
  ok(arredondaKcal(6.47) === 6.5, 'abaixo de 10 kcal, uma casa decimal — 1 min de corda não pode virar inteiro redondo');
  ok(arredondaKcal(145.2) === 145, 'entre 10 e 1000, inteiro');
  ok(arredondaKcal(1234) === 1230, 'acima de 1000, dezena');
  ok(formataTempo(0.5) === '30 s', 'menos de um minuto sai em segundos');
  ok(formataPulos(1100) === '1.100 pulos', 'os pulos saem com separador de milhar');
  ok(formataPulos(0) === '—', 'zero pulos vira travessão');

  const fs = fraseContexto(PESO_PADRAO, deSeries(8, 45, PESO_PADRAO, 'moderado'));
  console.log(`     ${fs}`);
  ok(fs.includes('8 séries'), 'a frase do modo séries declara as séries');
  ok(fs.includes('não entra na conta'), 'e avisa que o descanso não foi contado');

  const fc = fraseContexto(PESO_PADRAO, deTempo(10, PESO_PADRAO, 'moderado'));
  console.log(`     ${fc}`);
  ok(fc.includes('pulos'), 'a frase contínua mostra os pulos');
  ok(!fc.includes('séries') && !fc.includes('NaN'), 'sem séries onde não houve, e sem NaN');
}

/* ------------------------------------------------------------------ */
console.log('\n[10b] O aviso de cadência brigando com a faixa\n');
{
  ok(!cadenciaIncoerente('moderado', 110), 'a cadência da própria faixa não avisa');
  ok(!cadenciaIncoerente('moderado', 100) && !cadenciaIncoerente('moderado', 120), 'e os limites dela também não');
  ok(cadenciaIncoerente('moderado', 140), '140 pulos/min em ritmo moderado avisa');
  ok(cadenciaIncoerente('rapido', 70), '70 pulos/min em ritmo rápido avisa');
  ok(!cadenciaIncoerente('lento', 85), '85 em ritmo lento não avisa');
  ok(cadenciaIncoerente('lento', 130), 'mas 130 em ritmo lento avisa');
  ok(!cadenciaIncoerente('moderado', 0), 'cadência zero não avisa — é campo vazio, não erro');
  ok(FAIXAS.every((f) => !cadenciaIncoerente(f.id, f.cadencia)), 'nenhuma faixa briga com a própria cadência');
}

/* ------------------------------------------------------------------ */
console.log('\n[10c] A velocidade de referência da comparação mora no motor\n');
{
  /*
   * Este bloco existe por causa de um defeito encontrado na auditoria: a
   * velocidade de referência da linha "equivale a correr" vivia SÓ no script
   * da interface. A prosa argumentava com 11,3 km/h (a velocidade de MET
   * igual ao da corda) e a ferramenta convertia para 10 km/h, sem que o
   * texto servido mencionasse esse número. A página descrevia errado o
   * próprio instrumento, e nenhum teste podia enxergar isso.
   */
  ok(VELOCIDADE_CORRIDA_REF === 10, 'a referência é 10 km/h, exportada pelo motor');
  ok(60 / VELOCIDADE_CORRIDA_REF === 6, 'que são 6min00 por quilômetro — redondo, como o texto diz');

  // E ela é DIFERENTE da velocidade de MET igual, de propósito. A página
  // precisa dizer isso; o teste garante que a diferença é real e conhecida.
  let vIso = 0;
  for (let v = 5; v < 25; v += 0.01) {
    if (metCorrida(v) >= metCorda('moderado')) { vIso = Math.round(v * 10) / 10; break; }
  }
  console.log(`     referência da ferramenta: ${VELOCIDADE_CORRIDA_REF} km/h | velocidade de MET igual: ${vIso.toLocaleString('pt-BR')} km/h`);
  ok(vIso !== VELOCIDADE_CORRIDA_REF, 'as duas velocidades são mesmo diferentes');
  ok(vIso > VELOCIDADE_CORRIDA_REF, 'e a de MET igual é a mais rápida das duas');

  // A conversão na referência devolve MAIS minutos que na velocidade de MET
  // igual, porque correr a 10 km/h custa menos por minuto.
  const corda10 = deTempo(10, PESO_PADRAO, 'moderado').kcal;
  const minNaRef = corda10 / kcalPorMinuto(metCorrida(VELOCIDADE_CORRIDA_REF), PESO_PADRAO);
  const minNoIso = corda10 / kcalPorMinuto(metCorrida(vIso), PESO_PADRAO);
  console.log(`     10 min de corda = ${minNaRef.toFixed(1)} min a ${VELOCIDADE_CORRIDA_REF} km/h = ${minNoIso.toFixed(1)} min a ${vIso} km/h`);
  ok(minNaRef > minNoIso, 'converter na referência dá mais minutos que na velocidade de MET igual');
  ok(perto(minNoIso, 10, 0.3), 'e na velocidade de MET igual dá os 10 minutos que derrubam a lenda');
  // O ponto que importa: nenhuma das duas chega perto de 30.
  ok(minNaRef < 20 && minNoIso < 20, 'nenhuma das duas conversões chega perto dos 30 min da lenda');
}

/* ------------------------------------------------------------------ */
console.log('\n[11] Tabelas\n');
{
  ok(tabelaPorFaixa(PESO_PADRAO).length === 3, 'a tabela por faixa tem as três faixas');
  const tp = tabelaPorPeso();
  ok(tp.length === 7, 'a tabela por peso tem sete linhas');
  ok(tp.every((l, i) => i === 0 || l.kcal10min > tp[i - 1].kcal10min), 'e cresce com o peso');
  const tt = tabelaPorTempo(PESO_PADRAO);
  ok(tt.length === 5, 'a tabela por tempo tem cinco linhas');
  ok(tt.every((l) => l.minutos <= MINUTOS_ALERTA), 'e nenhuma linha dela passa do limite de aviso — a tabela não sugere o implausível');
  ok(tt[0].minutos === 1, 'começando em 1 minuto, que é o que muita gente consegue');
}

/* ------------------------------------------------------------------ */
if (falhas.length) {
  console.log(`\n✗ ${falhas.length} falha(s):`);
  falhas.forEach((f) => console.log('   - ' + f));
  process.exit(1);
}
console.log('\n✓ Motor da corda: tudo certo.\n');
