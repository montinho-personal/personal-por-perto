/**
 * Testes do motor de calorias da escada.
 *
 * Esta é a única página do cluster cujo número não vem de tabela, e por
 * isso os testes centrais são as DUAS CONFERÊNCIAS INDEPENDENTES:
 *
 *   1. Física pura × constante da ACSM → a eficiência implícita tem que
 *      cair na faixa que a literatura mede para subida de escada.
 *   2. A faixa de METs derivada nas cadências reais tem que cair dentro da
 *      faixa que o Compêndio publica, sem ter sido calibrada para isso.
 *
 * Se qualquer uma das duas falhar, a página perde o direito de dizer que
 * calcula em vez de copiar.
 *
 * Uso: npm run test:escada
 */
import {
  ANDARES_PADRAO,
  CADENCIA_PADRAO,
  DEGRAUS_POR_ANDAR_PADRAO,
  ESPELHO_PADRAO,
  FATOR_DESCIDA,
  G,
  KCAL_MIN,
  KCAL_POR_KG_GORDURA,
  KCAL_POR_KG_POR_METRO,
  O2_POR_KG_POR_METRO,
  PESO_PADRAO,
  RITMOS,
  arredondaKcal,
  cadenciaValida,
  deAndares,
  deDegraus,
  deKcal,
  deTempo,
  degrausValidos,
  eficienciaImplicita,
  espelhoValido,
  formataAndares,
  formataKcal,
  formataMetros,
  formataTempo,
  fraseContexto,
  kcalDeDescer,
  kcalDeSubir,
  kcalValida,
  metDaSubida,
  parseNumero,
  pesoValido,
  projecaoRotina,
  ritmo,
  simulacaoUmQuilo,
  tabelaPorAndares,
  tabelaPorPeso,
  tabelaPorRitmo,
  trabalhoMecanico,
  velocidadeVertical,
} from '../src/lib/calorias/escada';
import { metDaInclinacao } from '../src/lib/calorias/caminhada';

const falhas: string[] = [];
const ok = (c: boolean, m: string) => {
  console.log((c ? '  ✓ ' : '  ✗ ') + m);
  if (!c) falhas.push(m);
};
const perto = (a: number, b: number, tol = 0.01) => Math.abs(a - b) <= tol;

/* ------------------------------------------------------------------ */
console.log('\n[1] CONFERÊNCIA 1: física pura contra a constante da ACSM\n');
{
  const ef = eficienciaImplicita();
  console.log(`     erguer 70 kg em 1 m = ${trabalhoMecanico(70, 1).toFixed(3)} kcal de trabalho`);
  console.log(`     a ACSM cobra          ${kcalDeSubir(70, 1).toFixed(3)} kcal`);
  console.log(`     eficiência implícita  ${(ef * 100).toFixed(1)}%`);
  ok(ef > 0.2 && ef < 0.3, `a eficiência implícita cai na faixa medida para escada (${(ef * 100).toFixed(1)}%)`);
  ok(perto(ef, 0.261, 0.005), 'e vale 26,1%, que é o número citado na página');
  // A eficiência não pode depender do peso: é razão de duas coisas lineares nele.
  const ef50 = trabalhoMecanico(50, 1) / kcalDeSubir(50, 1);
  const ef120 = trabalhoMecanico(120, 1) / kcalDeSubir(120, 1);
  ok(perto(ef50, ef120, 0.0001), 'e é a mesma para qualquer peso — como tem que ser');
  ok(perto(KCAL_POR_KG_POR_METRO, 0.009, 0.0000001), 'a constante derivada é 0,009 kcal por kg por metro vertical');
  ok(perto(trabalhoMecanico(70, 1), (70 * G) / 4184, 0.0001), 'o trabalho mecânico é massa × g × altura, sem fisiologia');
}

/* ------------------------------------------------------------------ */
console.log('\n[2] CONFERÊNCIA 2: a faixa derivada contra o Compêndio\n');
{
  // O Compêndio publica 4,5 METs para subida lenta e 9,3 para rápida.
  const COMP_LENTO = 4.5;
  const COMP_RAPIDO = 9.3;
  for (const r of RITMOS) {
    const met = metDaSubida(velocidadeVertical(r.cadencia, ESPELHO_PADRAO));
    console.log(`     ${r.nome.padEnd(8)} ${r.cadencia} degraus/min → ${met.toFixed(2)} METs`);
    ok(met > COMP_LENTO - 0.5 && met < COMP_RAPIDO + 0.5, `${r.nome.toLowerCase()} cai dentro da faixa do Compêndio`);
  }
  const lento = metDaSubida(velocidadeVertical(RITMOS[0].cadencia, ESPELHO_PADRAO));
  const rapido = metDaSubida(velocidadeVertical(RITMOS[2].cadencia, ESPELHO_PADRAO));
  ok(lento > 4.5 && lento < 6, `o ritmo lento derivado (${lento.toFixed(1)}) fica perto dos 4,5 do Compêndio`);
  ok(rapido > 8 && rapido < 9.3, `o rápido derivado (${rapido.toFixed(1)}) fica perto dos 9,3 do Compêndio`);
  ok(rapido > lento, 'e subir mais rápido custa mais por minuto');
}

/* ------------------------------------------------------------------ */
console.log('\n[3] CONFERÊNCIA 3: a escada e a caminhada contam subida igual\n');
{
  /*
   * O motor da caminhada usa a mesma constante de 1,8 no termo de
   * inclinação. Andar a 5 km/h numa rampa de 20% sobe 16,67 metros
   * verticais por minuto; subir escada à mesma velocidade vertical tem que
   * cobrar o mesmo acréscimo. Se divergirem, duas páginas do mesmo site
   * estariam medindo subida com réguas diferentes.
   */
  const vKmH = 5;
  const inclinacao = 20;
  const vVertCaminhada = ((vKmH * 1000) / 60) * (inclinacao / 100);
  const metExtraCaminhada = metDaInclinacao(vKmH, inclinacao);
  const metExtraEscada = metDaSubida(vVertCaminhada) - 1;
  console.log(`     ${vVertCaminhada.toFixed(2)} m/min verticais → caminhada +${metExtraCaminhada.toFixed(2)} METs | escada +${metExtraEscada.toFixed(2)} METs`);
  ok(perto(metExtraCaminhada, metExtraEscada, 0.01), 'os dois motores cobram o mesmo pelo mesmo trabalho vertical');
  ok(perto(O2_POR_KG_POR_METRO, 1.8, 0.0001), 'e usam a mesma constante de 1,8 mL/kg/m');
}

/* ------------------------------------------------------------------ */
console.log('\n[4] A TESE: o que decide é a ALTURA, não o tempo\n');
{
  const devagar = deAndares(10, PESO_PADRAO, DEGRAUS_POR_ANDAR_PADRAO, ESPELHO_PADRAO, RITMOS[0].cadencia);
  const rapido = deAndares(10, PESO_PADRAO, DEGRAUS_POR_ANDAR_PADRAO, ESPELHO_PADRAO, RITMOS[2].cadencia);
  console.log(`     10 andares devagar: ${formataKcal(devagar.kcalSubida)} kcal em ${formataTempo(devagar.minutos)}`);
  console.log(`     10 andares rápido:  ${formataKcal(rapido.kcalSubida)} kcal em ${formataTempo(rapido.minutos)}`);
  ok(perto(devagar.kcalSubida, rapido.kcalSubida, 0.0001), 'subir os mesmos 10 andares custa o MESMO líquido nos dois ritmos');
  ok(rapido.minutos < devagar.minutos, 'o que a pressa muda é o tempo');
  ok(rapido.met > devagar.met, 'e a intensidade');
  // O bruto, esse sim, muda — e é por isso que ele não é o número grande.
  ok(devagar.kcalBruta > rapido.kcalBruta, 'o BRUTO muda com o ritmo, porque carrega o repouso do tempo gasto');
  ok(devagar.kcalBruta > devagar.kcalSubida, 'e o bruto é sempre maior que o líquido');
}

/* ------------------------------------------------------------------ */
console.log('\n[5] Os números de referência da página\n');
{
  const dez = deAndares(10, PESO_PADRAO);
  console.log(`     10 andares / 70 kg: ${dez.degraus} degraus, ${dez.metros.toFixed(1)} m, ${formataKcal(dez.kcalSubida)} kcal líquidas`);
  ok(dez.degraus === 160, '10 andares a 16 degraus dão 160 degraus');
  ok(perto(dez.metros, 28, 0.01), 'que são 28 metros de altura');
  ok(perto(dez.kcalSubida, 17.64, 0.01), 'e custam 17,6 kcal líquidas para 70 kg');
  ok(arredondaKcal(dez.kcalSubida) === 18, 'arredondado, 18 kcal');

  // Um degrau, que é o número que circula sem peso por aí.
  ok(perto(kcalDeSubir(50, ESPELHO_PADRAO), 0.0788, 0.001), 'um degrau custa 0,079 kcal para 50 kg');
  ok(perto(kcalDeSubir(100, ESPELHO_PADRAO), 0.1575, 0.001), 'e 0,158 kcal para 100 kg — o dobro, porque o peso é metade da conta');
  ok(kcalDeSubir(100, ESPELHO_PADRAO) / kcalDeSubir(50, ESPELHO_PADRAO) === 2, 'a razão é exatamente 2');
}

/* ------------------------------------------------------------------ */
console.log('\n[6] A descida\n');
{
  const so = deAndares(10, PESO_PADRAO, DEGRAUS_POR_ANDAR_PADRAO, ESPELHO_PADRAO, CADENCIA_PADRAO, false);
  const ida = deAndares(10, PESO_PADRAO, DEGRAUS_POR_ANDAR_PADRAO, ESPELHO_PADRAO, CADENCIA_PADRAO, true);
  console.log(`     só subindo: ${formataKcal(so.kcalLiquida)} kcal | subindo e descendo: ${formataKcal(ida.kcalLiquida)} kcal`);
  ok(so.kcalDescida === 0, 'sem descida, a parcela de descida é zero');
  ok(perto(ida.kcalDescida / ida.kcalSubida, FATOR_DESCIDA, 0.0001), 'com descida, ela custa 23% da subida');
  ok(perto(ida.kcalLiquida / so.kcalLiquida, 1.23, 0.0001), 'e o total sobe exatamente 23%');
  ok(perto(kcalDeDescer(PESO_PADRAO, 28), kcalDeSubir(PESO_PADRAO, 28) * 0.23, 0.0001), 'a função de descida bate com o fator');
  // Descer NUNCA pode custar mais que subir.
  for (const p of [40, 70, 130]) ok(kcalDeDescer(p, 50) < kcalDeSubir(p, 50), `descer custa menos que subir para ${p} kg`);
}

/* ------------------------------------------------------------------ */
console.log('\n[7] Proporcionalidade e modos\n');
{
  ok(perto(deAndares(10, 100).kcalSubida / deAndares(10, 50).kcalSubida, 2, 0.0001), 'dobrar o peso dobra o gasto');
  ok(perto(deAndares(20, 70).kcalSubida / deAndares(10, 70).kcalSubida, 2, 0.0001), 'dobrar os andares dobra o gasto');
  ok(perto(deAndares(10, 70, 16, 0.35).kcalSubida / deAndares(10, 70, 16, 0.175).kcalSubida, 2, 0.0001), 'dobrar o degrau dobra o gasto');

  // Andares e degraus têm que devolver a mesma coisa para a mesma altura.
  const porAndares = deAndares(5, PESO_PADRAO);
  const porDegraus = deDegraus(80, PESO_PADRAO);
  ok(perto(porAndares.kcalSubida, porDegraus.kcalSubida, 0.0001), '5 andares e 80 degraus devolvem o mesmo');
  ok(perto(porAndares.andares, porDegraus.andares, 0.0001), 'e a mesma contagem de andares');

  // Tempo: 10 min a 65 degraus/min são 650 degraus.
  const t = deTempo(10, PESO_PADRAO);
  ok(t.degraus === 650, '10 min a 65 degraus/min dão 650 degraus');
  ok(perto(t.minutos, 10, 0.0001), 'e o tempo volta igual ao informado');
  console.log(`     10 min de máquina de escada / 70 kg: ${formataKcal(t.kcalSubida)} kcal líquidas, ${t.met.toFixed(1)} METs`);
  ok(t.met > 6 && t.met < 8, 'com METs plausíveis para máquina de escada');
}

/* ------------------------------------------------------------------ */
console.log('\n[8] Modo meta\n');
{
  const meta = deKcal(100, PESO_PADRAO);
  console.log(`     100 kcal / 70 kg: ${formataAndares(meta.andares)}, ${formataMetros(meta.metros)}, ${formataTempo(meta.minutos)}`);
  ok(perto(meta.kcalLiquida, 100, 0.0001), 'a meta é devolvida intacta');
  ok(meta.andares > 55 && meta.andares < 60, 'e pede quase 57 andares — o ponto é a escada ser cara em esforço e barata em caloria');

  // Com descida, a mesma meta pede menos andares.
  const comDescida = deKcal(100, PESO_PADRAO, DEGRAUS_POR_ANDAR_PADRAO, ESPELHO_PADRAO, CADENCIA_PADRAO, true);
  ok(comDescida.andares < meta.andares, 'contando a descida, a mesma meta pede menos andares');
  ok(perto(comDescida.andares * 1.23, meta.andares, 0.01), 'exatamente 23% menos');

  const quilo = simulacaoUmQuilo(PESO_PADRAO);
  console.log(`     1 kg de gordura: ${formataAndares(quilo.andares)} (${formataMetros(quilo.metros)} de altura)`);
  ok(quilo.andares > 4000, 'um quilo de gordura passa de 4.000 andares');
  ok(quilo.metros > 12000, 'e de 12 km de altura — mais que o Everest, que é o ponto');
}

/* ------------------------------------------------------------------ */
console.log('\n[9] A rotina do elevador, com números honestos\n');
{
  const r = projecaoRotina(10, PESO_PADRAO);
  console.log(`     10 andares/dia, 5 dias/semana, 70 kg: ${formataKcal(r.porDia)} kcal/dia, ${Math.round(r.porAno).toLocaleString('pt-BR')} kcal/ano, ${r.quilosNoAno.toFixed(2)} kg`);
  ok(perto(r.porDia, 17.64, 0.01), 'dez andares por dia dão 17,6 kcal');
  ok(r.porAno > 4000 && r.porAno < 5000, 'o que dá pouco mais de 4.500 kcal no ano');
  ok(r.quilosNoAno < 0.7, 'menos de 0,7 kg de gordura em um ano inteiro — a alavanca é fraca, e a página diz isso');
  ok(r.quilosNoAno > 0.5, 'mas não é zero: é meio quilo, e o hábito vale por outras razões');
  // Escala: quem sobe muito mais, ganha proporcionalmente mais.
  ok(perto(projecaoRotina(30, PESO_PADRAO).porAno / r.porAno, 3, 0.0001), 'triplicar os andares triplica o resultado do ano');
}

/* ------------------------------------------------------------------ */
console.log('\n[10] Entradas e validação\n');
{
  ok(!pesoValido(null) && !pesoValido(0) && !pesoValido(-5) && !pesoValido(999), 'peso fora da faixa é barrado');
  ok(pesoValido(72.5) && parseNumero('72,5') === 72.5, 'peso com vírgula é aceito');
  ok(!degrausValidos(0) && !degrausValidos(99999), 'degraus fora da faixa são barrados');
  ok(!espelhoValido(0.05) && !espelhoValido(0.5), 'degrau absurdamente baixo ou alto é barrado');
  ok(espelhoValido(0.16) && espelhoValido(0.18), 'a faixa da NBR 9050 passa inteira');
  ok(!cadenciaValida(5) && !cadenciaValida(500), 'cadência fora do humano é barrada');
  ok(kcalValida(KCAL_MIN), `a meta mínima é ${KCAL_MIN} kcal — escada devolve números pequenos`);
  ok(!kcalValida(KCAL_MIN - 1), 'e abaixo dela é barrada');
  ok(ritmo('forte').cadencia === 85 && ritmo('inexistente' as never).cadencia === 65, 'ritmo inválido cai no moderado');
}

/* ------------------------------------------------------------------ */
console.log('\n[11] Formatação\n');
{
  // Números pequenos não podem virar zero redondo.
  ok(arredondaKcal(3.47) === 3.5, 'abaixo de 10 kcal, uma casa decimal — senão 2 andares dariam "3 kcal"');
  ok(arredondaKcal(17.64) === 18, 'entre 10 e 1000, inteiro');
  ok(arredondaKcal(1234) === 1230, 'acima de 1000, dezena — precisão falsa não ajuda');
  ok(arredondaKcal(0) === 0 && arredondaKcal(-5) === 0, 'zero e negativo devolvem zero');
  ok(formataAndares(1) === '1 andar', 'um andar vai no singular');
  ok(formataAndares(2.5) === '2,5 andares', 'e a fração no plural');
  ok(formataMetros(28) === '28 m', '28 metros saem em metros');
  ok(formataMetros(12600) === '12,6 km', 'e 12.600 viram quilômetros');
  ok(formataTempo(0.5) === '30 s', 'menos de um minuto sai em segundos — subir 2 andares é rápido');

  const f = fraseContexto(PESO_PADRAO, deAndares(10, PESO_PADRAO, 16, 0.175, 65, true));
  console.log(`     ${f}`);
  ok(f.includes('subir e descer'), 'a frase declara quando a descida entrou');
  ok(f.includes('líquido'), 'e declara que o número é líquido');
  ok(!f.includes('NaN'), 'sem NaN');
  ok(!fraseContexto(PESO_PADRAO, deAndares(10, PESO_PADRAO)).includes('subir e descer'), 'e não declara descida quando não houve');
}

/* ------------------------------------------------------------------ */
console.log('\n[12] Tabelas\n');
{
  const tp = tabelaPorPeso();
  ok(tp.length === 7, 'a tabela por peso tem sete linhas');
  ok(tp.every((l, i) => i === 0 || l.porDegrau > tp[i - 1].porDegrau), 'e cresce com o peso');
  ok(perto(tp[2].peso, 70, 0.001) && perto(tp[2].dezAndares, 17.64, 0.01), 'a linha de 70 kg bate com o exemplo da página');

  const ta = tabelaPorAndares(PESO_PADRAO);
  ok(ta.length === 6, 'a tabela por andares tem seis linhas');
  ok(ta.every((l) => l.comDescida > l.soSubindo), 'e a coluna com descida é sempre maior');

  const tr = tabelaPorRitmo(PESO_PADRAO);
  ok(tr.length === 3, 'a tabela por ritmo tem os três ritmos');
  ok(tr.every((l, i) => i === 0 || l.met > tr[i - 1].met), 'com METs crescentes');
  // A prova visual da tese: o tempo cai, o MET sobe, mas o trabalho é o mesmo.
  ok(tr[0].minutosDezAndares > tr[2].minutosDezAndares, 'e o tempo de 10 andares cai conforme o ritmo sobe');
  const trabalhos = RITMOS.map((r) => deAndares(10, PESO_PADRAO, 16, 0.175, r.cadencia).kcalSubida);
  ok(trabalhos.every((t) => perto(t, trabalhos[0], 0.0001)), 'mas o trabalho de 10 andares é idêntico nos três');
}

/* ------------------------------------------------------------------ */
if (falhas.length) {
  console.log(`\n✗ ${falhas.length} falha(s):`);
  falhas.forEach((f) => console.log('   - ' + f));
  process.exit(1);
}
console.log('\n✓ Motor da escada: tudo certo.\n');
