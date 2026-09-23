/**
 * Testes do motor de calorias do boxe e das lutas.
 *
 * Três coisas seguram a página. A conta dos rounds: esforço é rounds ×
 * duração, e o intervalo existe só ENTRE os rounds. A conferência: o saco
 * medido por Perusek (em oxigênio por quilo) tem que cair perto do saco em
 * ritmo livre do Compêndio. E o desmonte do "por hora": uma luta de verdade,
 * amadora ou profissional, fica muito longe de uma hora de ringue.
 *
 * Uso: npm run test:lutas
 */
import {
  ATIVIDADES,
  DESCANSO_MAX,
  DESCANSO_MIN,
  DURACAO_MAX,
  DURACAO_MIN,
  ESTUDO_SACO,
  FONTE_COMPENDIO,
  FONTE_PERUSEK,
  KCAL_MIN,
  LUTA_AMADORA,
  LUTA_PROFISSIONAL,
  MINUTOS_MAX,
  MINUTOS_MIN,
  NOTA_SEM_CONFERENCIA,
  PESO_PADRAO,
  ROUNDS_MAX,
  ROUNDS_MIN,
  SEM_CONFERENCIA,
  arredondaKcal,
  atividade,
  deKcal,
  deLuta,
  deRounds,
  deTempo,
  descansoValido,
  duracaoValida,
  formataKcal,
  formataRounds,
  formataTempo,
  fraseContexto,
  kcalValida,
  metLuta,
  minutosValidos,
  parseNumero,
  pesoParaKcalPorHora,
  pesoValido,
  reproduzSaco,
  roundsEquivalentes,
  roundsValidos,
  simulacaoUmQuilo,
  tabelaAtividades,
  tabelaPorPeso,
} from '../src/lib/calorias/lutas';

const falhas: string[] = [];
const ok = (c: boolean, m: string) => {
  console.log((c ? '  ✓ ' : '  ✗ ') + m);
  if (!c) falhas.push(m);
};
const perto = (a: number, b: number, tol = 0.01) => Math.abs(a - b) <= tol;

/* ------------------------------------------------------------------ */
console.log('\n[1] A CONTA DOS ROUNDS\n');
{
  const r = deRounds(6, 3, 1, PESO_PADRAO, 'saco');
  console.log(`     6 rounds de 3 min no saco, 1 de intervalo, 70 kg: ${formataKcal(r.kcal)} kcal`);
  ok(r.minutosAtivos === 18, '6 rounds de 3 minutos são 18 minutos de esforço');
  ok(r.minutosDescanso === 5, 'e 5 minutos de intervalo — são 5 intervalos entre 6 rounds, não 6');
  ok(perto(r.kcal, 5.8 * 3.5 * 70 / 200 * 18 + 1 * 3.5 * 70 / 200 * 5, 1e-9), 'esforço pelo MET, intervalo como repouso');
  ok(perto(r.kcalLiquida, (5.8 - 1) * 3.5 * 70 / 200 * 18, 1e-9), 'o líquido é só o que o esforço acrescenta ao repouso');

  const um = deRounds(1, 3, 2, PESO_PADRAO, 'saco');
  ok(um.minutosDescanso === 0, 'um round só não tem intervalo nenhum');
  const corrido = deRounds(10, 3, 0, PESO_PADRAO, 'saco');
  const tempo = deTempo(30, PESO_PADRAO, 'saco');
  ok(perto(corrido.kcal, tempo.kcal, 1e-9), 'sem intervalo, 10 rounds de 3 min dão o mesmo que 30 minutos');
}

/* ------------------------------------------------------------------ */
console.log('\n[2] A CONFERÊNCIA: o saco medido contra a tabela\n');
{
  const r = reproduzSaco();
  console.log(`     ${ESTUDO_SACO.vo2} mL/kg/min ÷ 3,5 = ${r.metMedido.toFixed(2)} METs; a tabela dá ${r.metDaTabela}`);
  ok(r.erro < 0.08, `medição e tabela a menos de 8% (${(r.erro * 100).toFixed(1)}%)`);
  ok(r.metMedido > metLuta('saco') && r.metMedido < metLuta('saco60'),
    'a medição fica entre o ritmo livre e o de um golpe por segundo');
  ok(ESTUDO_SACO.participantes === ESTUDO_SACO.homens + ESTUDO_SACO.mulheres && ESTUDO_SACO.participantes === 29,
    'os 29 participantes são 15 homens e 14 mulheres');
  ok(ESTUDO_SACO.blocos * ESTUDO_SACO.minutosPorBloco === ESTUDO_SACO.minutos, '10 blocos de 3 minutos são os 30 minutos');
}

/* ------------------------------------------------------------------ */
console.log('\n[3] O "1.000 KCAL POR HORA" CONTRA UMA LUTA DE VERDADE\n');
{
  const hora = deTempo(60, PESO_PADRAO, 'ringue');
  const amadora = deLuta(LUTA_AMADORA, PESO_PADRAO);
  const pro = deLuta(LUTA_PROFISSIONAL, PESO_PADRAO);
  console.log(`     70 kg: hora de ringue ${formataKcal(hora.kcal)} | amadora ${formataKcal(amadora.kcal)} | profissional de 12 ${formataKcal(pro.kcal)}`);
  ok(amadora.minutosAtivos === 9, 'a luta amadora tem 9 minutos de round');
  ok(pro.minutosAtivos === 36, 'a profissional mais longa, 36');
  ok(pro.minutosAtivos + pro.minutosDescanso < 60, 'nem a mais longa, com intervalos, chega a uma hora');
  ok(amadora.kcal < hora.kcal / 6, 'a luta amadora gasta menos de um sexto da "hora de ringue" (a página afirma isso)');
  const peso1000 = pesoParaKcalPorHora(1000, 'ringue');
  console.log(`     "1.000 kcal por hora" exige ${peso1000.toFixed(1)} kg lutando uma hora sem parar`);
  ok(peso1000 > 77 && peso1000 < 78, 'os 1.000 kcal por hora fecham para ~77 kg — numa hora de luta que não existe');
}

/* ------------------------------------------------------------------ */
console.log('\n[4] A TABELA É A DO COMPÊNDIO 2024\n');
{
  const esperado: Record<string, [number, string]> = {
    saco: [5.8, '15110'],
    saco60: [7.0, '15113'],
    saco120: [8.5, '15115'],
    saco180: [10.8, '15118'],
    sparring: [7.8, '15120'],
    simulado: [9.3, '15125'],
    ringue: [12.3, '15100'],
    arteLeve: [5.3, '15425'],
    arte: [10.3, '15430'],
  };
  ok(ATIVIDADES.length === Object.keys(esperado).length, `são ${ATIVIDADES.length} linhas, nenhuma a mais`);
  for (const a of ATIVIDADES) {
    const [met, codigo] = esperado[a.id] ?? [NaN, ''];
    ok(a.met === met && a.codigo === codigo, `${a.nome}: ${met} METs, código ${codigo}`);
    ok(FONTE_COMPENDIO.resumo.includes(codigo), `  e o código ${codigo} está na referência`);
  }
  // A ordem do saco precisa crescer com o ritmo, e o livre fica abaixo de todos.
  const saco = ['saco', 'saco60', 'saco120', 'saco180'].map(metLuta);
  ok(saco.every((m, i) => i === 0 || m > saco[i - 1]), 'o saco sobe com o ritmo, e o livre é o mais baixo');
  ok(FONTE_COMPENDIO.resumo.includes('12,8') && FONTE_COMPENDIO.resumo.includes('5,5'),
    'a referência diz os valores de 2011 que ainda circulam (12,8 e 5,5)');
}

/* ------------------------------------------------------------------ */
console.log('\n[5] O QUE NÃO ENTRA\n');
{
  const nomes = ATIVIDADES.map((a) => a.nome.toLowerCase()).join(' ');
  ok(!/judô|taekwondo|kendo|kung/.test(nomes), 'nenhuma modalidade sem conferência virou linha própria');
  ok(atividade('arte').comoReconhecer.includes('muay thai') && atividade('arte').comoReconhecer.includes('jiu-jitsu'),
    'muay thai e jiu-jitsu aparecem como exemplos da linha moderada, como no Compêndio');
  ok(SEM_CONFERENCIA.length === 5, 'as cinco que ficaram de fora estão declaradas');
  ok(NOTA_SEM_CONFERENCIA.includes('7,3') && NOTA_SEM_CONFERENCIA.includes('10,3'),
    'a nota mostra a contradição do kickboxing (7,3 contra 10,3)');
}

/* ------------------------------------------------------------------ */
console.log('\n[6] Fontes\n');
{
  ok(FONTE_PERUSEK.rotulo.startsWith('Perusek K'), 'o estudo do saco é citado pela primeira autora');
  ok(FONTE_PERUSEK.url.includes('26197251'), 'com o PMID conferido');
  ok(FONTE_PERUSEK.rotulo.includes('Games for Health Journal'), 'na revista certa (não no JSCR)');
  ok(FONTE_PERUSEK.resumo.includes('21,2'), 'e o resumo traz o valor medido');
}

/* ------------------------------------------------------------------ */
console.log('\n[7] Meta e escala\n');
{
  const meta = deKcal(300, PESO_PADRAO, 'saco');
  ok(perto(meta.kcal, 300, 1e-9), 'a meta é devolvida intacta');
  console.log(`     300 kcal no saco livre, 70 kg: ${formataTempo(meta.minutosAtivos)} = ${roundsEquivalentes(meta.minutosAtivos)} rounds de 3 min`);
  ok(meta.minutosAtivos > 40 && meta.minutosAtivos < 45, '300 kcal pedem cerca de 42 minutos de saco livre');
  ok(roundsEquivalentes(meta.minutosAtivos) === 15, 'que são 15 rounds de 3 minutos (arredondando para cima)');
  ok(roundsEquivalentes(9) === 3 && roundsEquivalentes(9.01) === 4, 'rounds equivalentes arredondam para cima, sem erro de ponto flutuante');
  const quilo = simulacaoUmQuilo(PESO_PADRAO, 'saco');
  console.log(`     1 kg de gordura no saco livre: ${formataTempo(quilo.minutosAtivos)} de esforço`);
  ok(quilo.minutosAtivos > 1000, 'um quilo passa de 16 horas de saco');
}

/* ------------------------------------------------------------------ */
console.log('\n[8] Entradas e validação\n');
{
  ok(!pesoValido(null) && !pesoValido(0) && !pesoValido(999), 'peso fora da faixa é barrado');
  ok(pesoValido(72.5) && parseNumero('72,5') === 72.5, 'peso com vírgula é aceito');
  ok(!roundsValidos(ROUNDS_MIN - 1) && !roundsValidos(ROUNDS_MAX + 1), 'rounds fora da faixa são barrados');
  ok(!roundsValidos(5.5) && roundsValidos(6), '"5,5 rounds" é barrado; 6 passa');
  ok(!duracaoValida(DURACAO_MIN - 1) && !duracaoValida(DURACAO_MAX + 1) && duracaoValida(2.5), 'duração fora da faixa é barrada; 2,5 min passa');
  ok(descansoValido(DESCANSO_MIN) && !descansoValido(DESCANSO_MAX + 1), 'intervalo zero vale (treino corrido)');
  ok(!minutosValidos(MINUTOS_MIN - 1) && !minutosValidos(MINUTOS_MAX + 1), 'minutos fora da faixa são barrados');
  ok(kcalValida(KCAL_MIN) && !kcalValida(KCAL_MIN - 1), `a meta mínima é ${KCAL_MIN} kcal`);
}

/* ------------------------------------------------------------------ */
console.log('\n[9] Frases\n');
{
  const fr = fraseContexto(PESO_PADRAO, deRounds(6, 3, 1, PESO_PADRAO, 'saco'));
  console.log(`     ${fr}`);
  ok(fr.includes('6 rounds de 3 min') && fr.includes('18 min'), 'a frase dos rounds traz os rounds e o esforço');
  ok(fr.includes('5 min no total') && fr.includes('repouso'), 'e o intervalo, dito como repouso');
  ok(fr.includes('saco de pancada (ritmo livre)'), 'o qualificador do nome vai entre parênteses dentro da frase');
  const f1 = fraseContexto(PESO_PADRAO, deRounds(1, 3, 1, PESO_PADRAO, 'ringue'));
  console.log(`     ${f1}`);
  ok(f1.includes('1 round de') && !f1.includes('intervalo'), 'um round no singular, sem falar de intervalo que não houve');
  ok(formataRounds(4, 2.5) === '4 rounds de 2,5 min', 'duração decimal com vírgula');
  const ft = fraseContexto(PESO_PADRAO, deTempo(30, PESO_PADRAO, 'arte'));
  console.log(`     ${ft}`);
  ok(!/representam|representa\b|somam|soma\b|dão\b/.test(ft + fr + f1), 'sem verbo concordando com o tempo ou com os rounds');
  ok(!/, [a-z]+ (é|são)\b/.test(ft + fr + f1), 'nenhum "nome, qualificador é" solto na frase');
  ok(![ft, fr, f1].some((f) => f.includes('NaN') || f.includes('undefined')), 'sem NaN nem undefined');
}

/* ------------------------------------------------------------------ */
console.log('\n[10] Tabelas\n');
{
  const ta = tabelaAtividades(PESO_PADRAO);
  ok(ta.length === ATIVIDADES.length, 'a tabela por atividade tem todas as linhas');
  ok(ta.every((l) => perto(l.meiaHora, l.porRound * 10, 1e-9)), 'meia hora é exatamente dez rounds de 3 minutos');
  const tp = tabelaPorPeso();
  ok(tp.length === 7 && tp.every((l) => l.arte > l.sparring && l.sparring > l.saco), 'por peso: saco < sparring < arte moderada');
  ok(tp.every((l, i) => i === 0 || l.saco > tp[i - 1].saco), 'e o gasto sobe com o peso');
  ok(arredondaKcal(tp.find((l) => l.peso === 70)!.saco) === arredondaKcal(deRounds(6, 3, 1, 70, 'saco').kcal),
    'a linha de 70 kg é a mesma conta da calculadora');
}

/* ------------------------------------------------------------------ */
if (falhas.length) {
  console.log(`\n✗ ${falhas.length} falha(s):`);
  falhas.forEach((f) => console.log('   - ' + f));
  process.exit(1);
}
console.log('\n✓ Motor das lutas: tudo certo.\n');
