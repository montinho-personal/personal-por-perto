/**
 * Testes do motor de calorias do crossfit.
 *
 * Três coisas seguram a página. O Cindy fecha por dentro: oxigênio, MET,
 * kcal por minuto e total conversam entre si. A aula não é o WOD: só os
 * minutos de WOD correm na intensidade medida. E o Isabel mostra o limite
 * do oxigênio: num WOD de 2 minutos, o gasto medido por minuto passa
 * bastante do que a conta por oxigênio daria.
 *
 * Uso: npm run test:crossfit
 */
import {
  ESTUDO_CINDY,
  ESTUDO_ISABEL,
  FONTE_CINDY,
  FONTE_ISABEL,
  KCAL_MIN,
  MET_WOD,
  NOTA_WOD_CURTO,
  PESO_PADRAO,
  SEM_CONFERENCIA,
  WOD_CURTO,
  arredondaKcal,
  aulaValida,
  deAula,
  deKcal,
  deWod,
  formataKcal,
  formataTempo,
  fraseContexto,
  isabelContraOxigenio,
  kcalValida,
  minutosDeWodPara,
  parseNumero,
  pesoValido,
  reproduzCindy,
  simulacaoUmQuilo,
  tabelaPorPeso,
  tabelaWods,
  wodValido,
} from '../src/lib/calorias/crossfit';

const falhas: string[] = [];
const ok = (c: boolean, m: string) => {
  console.log((c ? '  ✓ ' : '  ✗ ') + m);
  if (!c) falhas.push(m);
};
const perto = (a: number, b: number, tol = 0.01) => Math.abs(a - b) <= tol;

console.log('\n[1] O CINDY FECHA POR DENTRO\n');
{
  const r = reproduzCindy();
  console.log(`     ${ESTUDO_CINDY.vo2} ÷ 3,5 = ${r.metDoOxigenio.toFixed(2)} METs (publicado ${ESTUDO_CINDY.met}) | 13 × 20 = ${r.totalDoPorMinuto} (publicado ${ESTUDO_CINDY.kcalTotal}) | peso implícito ${r.pesoImplicito.toFixed(1)} kg`);
  ok(perto(r.metDoOxigenio, ESTUDO_CINDY.met, 0.05), 'o MET publicado é o oxigênio ÷ 3,5');
  ok(Math.abs(r.totalDoPorMinuto - ESTUDO_CINDY.kcalTotal) / ESTUDO_CINDY.kcalTotal < 0.01, 'o total é 20 minutos das kcal por minuto');
  ok(r.pesoImplicito > 70 && r.pesoImplicito < 85, 'e o peso que o estudo implica é plausível para 7 homens e 2 mulheres');
  ok(ESTUDO_CINDY.homens + ESTUDO_CINDY.mulheres === ESTUDO_CINDY.participantes, '9 participantes, 7 + 2');
  ok(MET_WOD === ESTUDO_CINDY.met, 'a calculadora usa o MET medido no Cindy');
  ok(FONTE_CINDY.rotulo.startsWith('Kliszczewicz B'), 'o Cindy é citado pelos autores certos (não Babiash)');
}

console.log('\n[2] A AULA NÃO É O WOD\n');
{
  const aula = deAula(60, 20, PESO_PADRAO);
  const wod = deWod(20, PESO_PADRAO);
  console.log(`     aula de 60 com 20 de WOD, 70 kg: ${formataKcal(aula.kcal)} kcal (WOD ${formataKcal(aula.kcalWod)}, resto ${formataKcal(aula.kcalFora)})`);
  ok(perto(aula.kcalWod, wod.kcal, 1e-9), 'o WOD dentro da aula custa o mesmo que o WOD sozinho');
  ok(aula.minutosFora === 40 && perto(aula.kcalFora, 3.5 * 70 / 200 * 40, 1e-9), 'os 40 minutos fora do WOD entram como repouso');
  ok(arredondaKcal(wod.kcal) === 233, '233 kcal num WOD de 20 minutos, 70 kg');
  const tudo = deAula(30, 45, PESO_PADRAO);
  ok(tudo.minutosWod === 30 && tudo.minutosFora === 0, 'WOD maior que a aula é cortado na duração da aula');
  const mil = minutosDeWodPara(1000, PESO_PADRAO);
  console.log(`     1.000 kcal pedem ${formataTempo(mil)} de WOD no ritmo do Cindy`);
  ok(mil > 80, '1.000 kcal pedem mais de 80 minutos de WOD — não uma aula de 60');
}

console.log('\n[3] O LIMITE DO OXIGÊNIO: o Isabel\n');
{
  const r = isabelContraOxigenio();
  console.log(`     ${ESTUDO_ISABEL.kJ} kJ = ${r.kcalTotal.toFixed(1)} kcal em ${ESTUDO_ISABEL.segundos} s: ${r.kcalPorMinutoMedido.toFixed(1)} kcal/min medidos; a conta daria ${r.kcalPorMinutoPelaConta.toFixed(1)} (${r.razao.toFixed(2)}×)`);
  ok(r.razao > 1.5, 'o gasto medido por minuto passa em mais de 50% o que esta calculadora daria');
  ok(ESTUDO_ISABEL.pctOxidativa + ESTUDO_ISABEL.pctGlicolitica + ESTUDO_ISABEL.pctFosfagenios === 100, 'as três vias somam 100%');
  ok(NOTA_WOD_CURTO.includes('40%'), 'a nota traz a fração oxidativa');
  ok(FONTE_ISABEL.rotulo.includes('Sensors') && FONTE_ISABEL.rotulo.startsWith('Rios M'), 'Isabel citado como Rios et al., Sensors (não é o Fran)');
  ok(deWod(2, PESO_PADRAO).wodCurto && !deWod(WOD_CURTO, PESO_PADRAO).wodCurto, `abaixo de ${WOD_CURTO} min o WOD é marcado como curto`);
}

console.log('\n[4] O que não entra, meta e validação\n');
{
  ok(SEM_CONFERENCIA.some((s) => s.includes('7,5 ou 8,0')), 'o conflito do circuito do Compêndio está declarado');
  const meta = deKcal(300, PESO_PADRAO);
  ok(perto(meta.kcal, 300, 1e-9) && meta.minutosWod > 25 && meta.minutosWod < 26, `300 kcal: ${formataTempo(meta.minutosWod)} de WOD`);
  ok(simulacaoUmQuilo(PESO_PADRAO).minutosWod > 600, '1 kg de gordura passa de 10 horas de WOD');
  ok(!pesoValido(0) && pesoValido(72.5) && parseNumero('72,5') === 72.5, 'peso validado');
  ok(wodValido(1) && !wodValido(0.5) && !wodValido(91), 'WOD de 1 a 90 minutos');
  ok(aulaValida(60) && !aulaValida(9), 'aula de 10 a 180 minutos');
  ok(kcalValida(KCAL_MIN) && !kcalValida(KCAL_MIN - 1), 'meta mínima');
}

console.log('\n[5] Frases e tabelas\n');
{
  const fa = fraseContexto(PESO_PADRAO, deAula(60, 20, PESO_PADRAO));
  const fw = fraseContexto(PESO_PADRAO, deWod(15, PESO_PADRAO));
  console.log(`     ${fa}\n     ${fw}`);
  ok(fa.includes('WOD responde por') && fa.includes('repouso'), 'a frase da aula separa o WOD do resto');
  ok(!/NaN|undefined|gastam|dão\b/.test(fa + fw), 'frases limpas');
  ok(tabelaWods(PESO_PADRAO).length === 4, 'tabela de WODs com 4 durações');
  ok(tabelaPorPeso().every((l) => l.aula60 > l.wod20), 'a aula de 60 sempre passa o WOD de 20 sozinho');
}

if (falhas.length) {
  console.log(`\n✗ ${falhas.length} falha(s):`);
  falhas.forEach((f) => console.log('   - ' + f));
  process.exit(1);
}
console.log('\n✓ Motor do crossfit: tudo certo.\n');
