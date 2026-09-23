/**
 * Testes do motor de calorias de yoga e pilates.
 *
 * A conferência central é a mesma lógica da página de dança, aplicada a
 * outro estudo: se a nossa tabela não reproduzir a medição direta do
 * Houston Methodist, então a página entendeu o estudo errado — e a crítica
 * que ela faz aos relógios e às outras publicações cairia sobre ela.
 *
 * Uso: npm run test:yoga
 */
import {
  ESTILOS,
  ESTUDO_BIKRAM,
  ESTUDO_CALOR,
  FONTE_HOUSTON,
  FONTE_TRACY,
  KCAL_MIN,
  MARGEM_EMPATE,
  MINUTOS_ESTUDO,
  MINUTOS_MAX,
  MINUTOS_MIN,
  NOTA_RELOGIO_CALOR,
  PESO_ESTUDO,
  PESO_PADRAO,
  RELOGIO_MIN,
  amplitudeDaEscada,
  arredondaKcal,
  calorDentroDoErro,
  comparaRelogio,
  deKcal,
  deRelogio,
  deTempo,
  efeitoDoCalor,
  estilo,
  formataKcal,
  formataTempo,
  fraseContexto,
  kcalPorMinuto,
  kcalValida,
  metYoga,
  minutosValidos,
  parseNumero,
  pesoValido,
  relogioValido,
  reproduzCalor,
  reproduzEstudo,
  simulacaoUmQuilo,
  tabelaPorEstilo,
  tabelaPorPeso,
  tabelaPorTempo,
  textoDiferenca,
} from '../src/lib/calorias/yoga';
import { ritmo as ritmoCaminhada } from '../src/lib/calorias/caminhada';

const falhas: string[] = [];
const ok = (c: boolean, m: string) => {
  console.log((c ? '  ✓ ' : '  ✗ ') + m);
  if (!c) falhas.push(m);
};
const perto = (a: number, b: number, tol = 0.01) => Math.abs(a - b) <= tol;

/* ------------------------------------------------------------------ */
console.log('\n[1] A CONFERÊNCIA CENTRAL: a tabela reproduz a medição direta?\n');
{
  const r = reproduzEstudo();
  console.log(`     ${ESTUDO_CALOR.kcalSalaNormal} kcal em ${MINUTOS_ESTUDO} min com ${PESO_ESTUDO} kg implicam ${r.metImplicado.toFixed(2)} METs`);
  console.log(`     a tabela do Compêndio dá ${r.metDaTabela} METs para hatha`);
  ok(r.erro < 0.08, `a medição direta e a tabela concordam com menos de 8% de diferença (${(r.erro * 100).toFixed(1)}%)`);
  ok(r.metImplicado > metYoga('geral') && r.metImplicado < metYoga('hatha'),
    `o MET implicado cai entre o yoga geral e o hatha (${r.metImplicado.toFixed(2)})`);
  ok(r.metImplicado < metYoga('power'), 'e bem abaixo do topo da escada');

  /*
   * [1b] O peso do estudo é o do artigo.
   *
   * A primeira versão usava 65 kg, que não está no artigo, e a conferência
   * "fechava" do mesmo jeito. Este teste existe para que o peso não volte a
   * ser um número plausível escolhido à mão.
   */
  ok(PESO_ESTUDO === 59.6, `o peso médio dos participantes é o publicado: ${PESO_ESTUDO} kg`);
  ok(ESTUDO_CALOR.frequenciaDiferiu === false, 'e o estudo registra que a frequência cardíaca média não diferiu');

  /*
   * [1c] A sala quente contra o hot yoga da tabela.
   *
   * A tabela fica ACIMA da medição. Se um dia ficar abaixo, a página passa a
   * dizer algo que favorece a própria tese sem avisar — e o teste quebra.
   */
  const c = reproduzCalor();
  console.log(`     sala quente: ${ESTUDO_CALOR.kcalSalaQuente} kcal implicam ${c.metImplicado.toFixed(2)} METs; a tabela dá ${c.metDaTabela} para hot yoga`);
  ok(c.desvio > 0, `a tabela de hot yoga fica acima da medição no calor (+${(c.desvio * 100).toFixed(0)}%)`);
  ok(r.desvio > 0, `e a de hatha também fica acima da sala normal (+${(r.desvio * 100).toFixed(1)}%) — nenhum desvio favorece a tese`);
}

/* ------------------------------------------------------------------ */
console.log('\n[1d] As fontes apontam para onde os números estão\n');
{
  ok(FONTE_HOUSTON.rotulo.startsWith('Lambert BS'), 'o estudo do calor é citado pelo primeiro autor real (Lambert)');
  ok(!FONTE_HOUSTON.rotulo.includes('Boyd'), 'e não pelo autor que a primeira versão atribuiu por engano');
  ok(FONTE_HOUSTON.resumo.includes('59,6 kg'), 'o resumo traz o peso publicado');
  ok(FONTE_TRACY.url.includes('colostate.edu'), 'os 460/330 kcal apontam para a divulgação da Colorado State');
  ok(!FONTE_TRACY.url.includes('22820210'), 'e não para o artigo de 2013, que não os contém');
  ok(FONTE_TRACY.resumo.includes('não artigo revisado por pares'), 'a página declara que é divulgação, não artigo');
  ok(NOTA_RELOGIO_CALOR.includes('não chegou a diferir'),
    'a nota do relógio declara que a frequência média não diferiu no estudo controlado');
  ok(!/sem que o gasto suba junto\. O aparelho vê/.test(NOTA_RELOGIO_CALOR),
    'e não afirma mais o mecanismo como fato medido');
}

/* ------------------------------------------------------------------ */
console.log('\n[2] O CALOR NÃO AUMENTA O GASTO\n');
{
  const efeito = efeitoDoCalor();
  console.log(`     sala normal ${ESTUDO_CALOR.kcalSalaNormal} ± ${ESTUDO_CALOR.erroNormal} kcal | sala quente ${ESTUDO_CALOR.kcalSalaQuente} ± ${ESTUDO_CALOR.erroQuente} kcal`);
  console.log(`     diferença: ${(efeito * 100).toFixed(1)}%`);
  ok(efeito > 0 && efeito < 0.06, `o calor acrescenta menos de 6% (${(efeito * 100).toFixed(1)}%)`);
  ok(calorDentroDoErro(), 'e as duas medições se sobrepõem dentro da margem de erro — não há diferença real');
  ok(ESTUDO_CALOR.participantes === 16, 'o estudo tinha 16 participantes');

  // O hot yoga da tabela é só um pouco acima do hatha, coerente com isso.
  const hot = metYoga('hot');
  const hatha = metYoga('hatha');
  ok(hot > hatha, 'na tabela, hot yoga fica acima do hatha');
  ok(hot / hatha < 1.3, `mas só ${((hot / hatha - 1) * 100).toFixed(0)}% acima — não o dobro que se publica`);

  // O Bikram de 90 min da Colorado State, para escala.
  const bikramMulher = ESTUDO_BIKRAM.kcalMulheres / ESTUDO_BIKRAM.minutos;
  console.log(`     Bikram de 90 min: ${ESTUDO_BIKRAM.kcalMulheres} kcal nas mulheres = ${bikramMulher.toFixed(1)} kcal/min`);
  ok(bikramMulher < 5, 'e nem o Bikram de 90 minutos passa de 5 kcal por minuto');
}

/* ------------------------------------------------------------------ */
console.log('\n[3] A ESCADA É CURTA — trocar de estilo muda pouco\n');
{
  const amp = amplitudeDaEscada();
  console.log(`     de ${Math.min(...ESTILOS.map((e) => e.met))} a ${Math.max(...ESTILOS.map((e) => e.met))} METs = ${amp.toFixed(2)}×`);
  ok(perto(amp, 1.739, 0.01), `a escada inteira do yoga tem amplitude de ${amp.toFixed(2)}×`);

  /*
   * A página afirma que a escada do yoga varia MENOS que a caminhada entre
   * devagar e rápido. A primeira versão testava a razão de velocidades, que
   * não é o que a frase diz; o que ela diz é sobre gasto, então o teste
   * compara METs.
   */
  const mLeve = ritmoCaminhada('leve').met;
  const mRapido = ritmoCaminhada('muito-rapido').met;
  console.log(`     caminhada vai de ${mLeve} a ${mRapido} METs = ${(mRapido / mLeve).toFixed(2)}×`);
  ok(mRapido / mLeve > amp, 'e a caminhada, de leve a muito rápida, tem amplitude de gasto MAIOR que a escada do yoga');
  // O ponto prático: 60 min no topo e no pé da escada diferem pouco em kcal.
  const pe = deTempo(60, PESO_PADRAO, 'geral').kcal;
  const topo = deTempo(60, PESO_PADRAO, 'power').kcal;
  console.log(`     1 hora: yoga geral ${formataKcal(pe)} kcal | power ${formataKcal(topo)} kcal`);
  ok(topo - pe < 150, `a diferença absoluta entre o pé e o topo é menor que 150 kcal (${Math.round(topo - pe)})`);
}

/* ------------------------------------------------------------------ */
console.log('\n[4] O MODO RELÓGIO: comparar o aparelho com a medição\n');
{
  const r = deRelogio(400, 60, PESO_PADRAO, 'hot');
  console.log(`     relógio marcou 400 kcal | medição indica ${formataKcal(r.kcal)} kcal | razão ${r.razaoRelogio.toFixed(2)}×`);
  ok(r.cenario === 'relogio', 'o cenário é registrado como comparação');
  ok(r.kcalRelogio === 400, 'o número do relógio é guardado');
  ok(r.razaoRelogio > 1.5, 'e a razão mostra que o aparelho inflou bastante');
  ok(r.noCalor, 'o hot yoga é marcado como prática no calor');
  ok(!deRelogio(400, 60, PESO_PADRAO, 'hatha').noCalor, 'e o hatha não é');

  // Fora do cenário de comparação, os campos do relógio ficam zerados.
  const t = deTempo(60, PESO_PADRAO, 'hot');
  ok(t.kcalRelogio === 0 && t.razaoRelogio === 0, 'no modo tempo não há número de relógio nem razão');
  // Relógio menor que a estimativa: razão abaixo de 1, sem quebrar.
  const baixo = deRelogio(100, 60, PESO_PADRAO, 'power');
  ok(baixo.razaoRelogio < 1 && baixo.razaoRelogio > 0, 'relógio abaixo da estimativa devolve razão menor que 1');
  ok(deRelogio(0, 60, PESO_PADRAO, 'hot').razaoRelogio === 0, 'relógio zero não produz divisão estranha');
}

/* ------------------------------------------------------------------ */
console.log('\n[5] Os números de referência da página\n');
{
  const hatha60 = deTempo(60, PESO_PADRAO, 'hatha');
  console.log(`     1 hora de hatha / 70 kg: ${formataKcal(hatha60.kcal)} kcal bruto, ${formataKcal(hatha60.kcalLiquida)} líquido`);
  ok(arredondaKcal(hatha60.kcal) === 184, '1 hora de hatha a 70 kg dá 184 kcal');
  ok(arredondaKcal(deTempo(60, PESO_PADRAO, 'hot').kcal) === 221, '1 hora de hot yoga dá 221 kcal');
  ok(arredondaKcal(deTempo(60, PESO_PADRAO, 'pilates').kcal) === 221, 'pilates dá o mesmo que hot yoga — os dois valem 3,0 METs');
  ok(arredondaKcal(deTempo(60, PESO_PADRAO, 'vinyasa').kcal) === 198, 'vinyasa dá 198 kcal, contra os 550 que se publica');

  /*
   * O que a internet publica para vinyasa implica um MET quase três vezes o
   * medido. O teste guarda esse número porque ele é o argumento da página.
   */
  const publicado = 550;
  const metPublicado = publicado / ((3.5 * PESO_PADRAO) / 200) / 60;
  console.log(`     "vinyasa = 550 kcal/h" implica ${metPublicado.toFixed(1)} METs contra ${metYoga('vinyasa')} medidos`);
  ok(metPublicado / metYoga('vinyasa') > 2.5, `a inflação publicada passa de 2,5× (${(metPublicado / metYoga('vinyasa')).toFixed(1)}×)`);

  // O repouso é parcela enorme aqui, e a página afirma "mais de 40%".
  /*
   * A fração é EXATA, não aproximada: repouso vale 1 MET e o hatha vale 2,5,
   * então o repouso é 1/2,5 do total. A página dizia "mais de 40%"; são 40%
   * cravados, e dizer "dois quintos" é mais honesto que arredondar para cima.
   */
  const fracaoRepouso = (hatha60.kcal - hatha60.kcalLiquida) / hatha60.kcal;
  console.log(`     repouso é ${(fracaoRepouso * 100).toFixed(1)}% do total numa hora de hatha`);
  ok(perto(fracaoRepouso, 1 / metYoga('hatha'), 0.0001), 'o repouso é exatamente 1 MET dividido pelo MET da atividade');
  ok(perto(fracaoRepouso, 0.4, 0.0001), 'o que no hatha dá exatamente dois quintos do total');
}

/* ------------------------------------------------------------------ */
console.log('\n[6] A tabela só tem estilo com código\n');
{
  ok(ESTILOS.length === 7, 'a tabela tem sete linhas');
  ok(ESTILOS.every((e) => /^\d{5}$/.test(e.codigo)), 'todas com código de cinco dígitos do Compêndio');
  ok(new Set(ESTILOS.map((e) => e.codigo)).size === 7, 'e nenhum código repetido');
  ok(ESTILOS.every((e, i) => i === 0 || e.met >= ESTILOS[i - 1].met), 'em ordem crescente de MET');
  ok(ESTILOS.every((e) => e.met >= 2 && e.met <= 5), 'todos os METs no plausível para yoga e pilates');
  ok(ESTILOS.filter((e) => e.noCalor).length === 1, 'só um estilo é marcado como prática no calor');
  ok(estilo('hot').noCalor && estilo('hot').id === 'hot', 'e é o hot yoga');
  ok(metYoga('inexistente') === metYoga('hatha'), 'estilo inválido cai no hatha, sem NaN');
}

/* ------------------------------------------------------------------ */
console.log('\n[7] Proporcionalidade, meta e escala\n');
{
  ok(perto(deTempo(60, 100).kcal / deTempo(60, 50).kcal, 2, 0.0001), 'dobrar o peso dobra o gasto');
  ok(perto(deTempo(120, 70).kcal / deTempo(60, 70).kcal, 2, 0.0001), 'dobrar o tempo dobra o gasto');

  const meta = deKcal(300, PESO_PADRAO, 'hatha');
  console.log(`     meta de 300 kcal em hatha / 70 kg: ${formataTempo(meta.minutos)}`);
  ok(perto(meta.kcal, 300, 0.0001), 'a meta é devolvida intacta');
  ok(meta.minutos > 90, 'e pede mais de uma hora e meia — o que já diz que a ferramenta é a errada para isso');

  const quilo = simulacaoUmQuilo(PESO_PADRAO, 'hatha');
  console.log(`     1 kg de gordura em hatha: ${formataTempo(quilo.minutos)}`);
  ok(quilo.minutos > 2000, 'um quilo de gordura passa de 33 horas de hatha');
}

/* ------------------------------------------------------------------ */
console.log('\n[8] Entradas e validação\n');
{
  ok(!pesoValido(null) && !pesoValido(0) && !pesoValido(999), 'peso fora da faixa é barrado');
  ok(pesoValido(72.5) && parseNumero('72,5') === 72.5, 'peso com vírgula é aceito');
  ok(!minutosValidos(MINUTOS_MIN - 1) && !minutosValidos(MINUTOS_MAX + 1), 'tempo fora da faixa é barrado');
  ok(minutosValidos(60) && minutosValidos(75), 'e as durações comuns de aula passam');
  ok(!relogioValido(RELOGIO_MIN - 1), 'número de relógio absurdamente baixo é barrado');
  ok(relogioValido(400), 'e um valor comum passa');
  ok(kcalValida(KCAL_MIN) && !kcalValida(KCAL_MIN - 1), `a meta mínima é ${KCAL_MIN} kcal`);
}

/* ------------------------------------------------------------------ */
console.log('\n[9] Formatação e frases\n');
{
  ok(arredondaKcal(184.4) === 184, 'abaixo de mil, inteiro');
  ok(formataTempo(75) === '1h15', '75 min saem como 1h15');
  ok(formataTempo(0) === '—', 'zero vira travessão');

  const fr = fraseContexto(PESO_PADRAO, deRelogio(400, 60, PESO_PADRAO, 'hot'));
  console.log(`     ${fr}`);
  ok(fr.includes('relógio marcou'), 'a frase do modo relógio começa pelo número do aparelho');
  ok(fr.includes('vezes menos'), 'e declara quantas vezes ele inflou');

  /*
   * [9b] A frase e a linha "Diferença" não podem discordar.
   *
   * Elas discordavam: com o aparelho marcando MENOS que a estimativa, a
   * linha dizia "mostrou MENOS" e a frase dizia "0,5 vezes menos do que o
   * aparelho mostrou" — uma frase que não quer dizer nada, duas linhas acima
   * da que dizia o contrário. Agora as duas saem da mesma função.
   */
  const acima = deRelogio(400, 60, PESO_PADRAO, 'hatha');
  const abaixo = deRelogio(100, 60, PESO_PADRAO, 'hatha');
  const empate = deRelogio(Math.round(deTempo(60, PESO_PADRAO, 'hatha').kcal), 60, PESO_PADRAO, 'hatha');

  ok(comparaRelogio(acima) === 'acima', 'relógio 400 contra estimativa 184: "acima"');
  ok(comparaRelogio(abaixo) === 'abaixo', 'relógio 100 contra estimativa 184: "abaixo"');
  ok(comparaRelogio(empate) === 'empate', 'relógio igual à estimativa: "empate"');

  const frBaixa = fraseContexto(PESO_PADRAO, abaixo);
  console.log(`     ${frBaixa}`);
  ok(!/vezes menos/.test(frBaixa), 'com o aparelho abaixo, a frase NÃO diz "vezes menos"');
  ok(!/0,\d vezes/.test(frBaixa), 'e não sai número menor que 1 vezes');
  ok(frBaixa.includes('acima do que o aparelho'), 'ela declara que a estimativa ficou acima');
  ok(frBaixa.includes('líquido'), 'e aponta a explicação provável: o aparelho mostra a caloria ativa');
  ok(
    textoDiferenca(abaixo).includes('MENOS') && !frBaixa.includes('vezes menos'),
    'frase e linha de detalhe contam a MESMA história',
  );

  const frEmpate = fraseContexto(PESO_PADRAO, empate);
  console.log(`     ${frEmpate}`);
  ok(frEmpate.includes('praticamente o mesmo'), 'no empate a frase não inventa diferença');
  ok(textoDiferenca(empate).includes('batem'), 'e a linha de detalhe também');
  ok(textoDiferenca(acima) === 'o aparelho mostrou 2,2× mais', 'acima: a linha traz o multiplicador');
  /*
   * A margem de empate tem que ser estreita o bastante para 2,2× cair fora
   * dela, e larga o bastante para 1,02× não virar "o aparelho inflou".
   */
  ok(MARGEM_EMPATE > 0 && MARGEM_EMPATE < 0.2, `a margem de empate é ${MARGEM_EMPATE}`);
  ok(
    comparaRelogio(deRelogio(Math.round(deTempo(60, PESO_PADRAO, 'hatha').kcal * 1.02), 60, PESO_PADRAO, 'hatha')) === 'empate',
    '2% de diferença é ruído, não inflação',
  );

  const ft = fraseContexto(PESO_PADRAO, deTempo(60, PESO_PADRAO, 'hatha'));
  console.log(`     ${ft}`);
  ok(!ft.includes('relógio'), 'a frase do modo tempo não fala de relógio');
  ok(!/hora de .* representam/.test(ft) && !/min de .* representa\b/.test(ft),
    'e não tem erro de concordância com o tempo');
  ok(!ft.includes('NaN') && !fr.includes('NaN'), 'sem NaN em nenhuma');
}

/* ------------------------------------------------------------------ */
console.log('\n[10] Tabelas\n');
{
  const te = tabelaPorEstilo(PESO_PADRAO);
  ok(te.length === 7, 'a tabela por estilo cobre os sete');
  ok(te.every((l, i) => i === 0 || l.kcal60 >= te[i - 1].kcal60), 'em ordem crescente de gasto');
  const tp = tabelaPorPeso();
  ok(tp.length === 7 && tp.every((l, i) => i === 0 || l.kcal > tp[i - 1].kcal), 'a tabela por peso cresce');
  const tt = tabelaPorTempo(PESO_PADRAO);
  ok(tt.length === 5 && tt.some((l) => l.minutos === 75), 'a tabela por tempo inclui os 75 min de aula comum');
}

/* ------------------------------------------------------------------ */
if (falhas.length) {
  console.log(`\n✗ ${falhas.length} falha(s):`);
  falhas.forEach((f) => console.log('   - ' + f));
  process.exit(1);
}
console.log('\n✓ Motor do yoga: tudo certo.\n');
