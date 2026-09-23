/**
 * Testes do motor de calorias do futebol.
 *
 * Duas conferências seguram a página. A primeira é aritmética: a conta da
 * pelada (vagas ÷ presentes) tem que ser a média exata do grupo, inclusive
 * num rodízio injusto. A segunda é contra medição: o futsal recreativo
 * medido por Beato tem que cair perto do futebol casual do Compêndio — senão
 * a decisão de não dar MET próprio ao formato estaria errada.
 *
 * Uso: npm run test:futebol
 */
import {
  ESTUDO_FORMATOS,
  ESTUDO_FUTSAL,
  FONTE_BEATO,
  FONTE_COMPENDIO,
  FONTE_RANDERS,
  FORMATOS,
  KCAL_MIN,
  LOCAL_MAX,
  LOCAL_MIN,
  MINUTOS_MAX,
  MINUTOS_MIN,
  NIVEIS,
  PESO_PADRAO,
  PRESENTES_MAX,
  PRESENTES_MIN,
  SEM_MEDICAO,
  arredondaKcal,
  deKcal,
  dePelada,
  deTempo,
  formataKcal,
  formataTempo,
  fracaoEmCampo,
  fraseContexto,
  kcalValida,
  localValido,
  metFutebol,
  minutosValidos,
  parseNumero,
  pesoParaKcalPorHora,
  pesoValido,
  presentesValidos,
  reproduzFutsal,
  simulacaoUmQuilo,
  tabelaPorPeso,
  tabelaRodizio,
  vagas,
} from '../src/lib/calorias/futebol';

const falhas: string[] = [];
const ok = (c: boolean, m: string) => {
  console.log((c ? '  ✓ ' : '  ✗ ') + m);
  if (!c) falhas.push(m);
};
const perto = (a: number, b: number, tol = 0.01) => Math.abs(a - b) <= tol;

/* ------------------------------------------------------------------ */
console.log('\n[1] A CONTA DA PELADA: vagas ÷ presentes\n');
{
  ok(vagas('quadra') === 10 && vagas('society') === 14 && vagas('campo') === 22, 'as vagas são 10, 14 e 22');

  const r = dePelada(120, PESO_PADRAO, 'society', 21, 'casual');
  console.log(`     society, 21 pessoas, 2 horas: ${formataTempo(r.minutosEmCampo)} em campo, ${formataKcal(r.kcal)} kcal`);
  ok(perto(r.fracao, 2 / 3, 1e-9), 'society com 21 pessoas: cada um joga dois terços do tempo');
  ok(perto(r.minutosEmCampo, 80, 1e-9), 'duas horas de quadra são 80 minutos de futebol');
  ok(perto(r.minutosFora, 40, 1e-9), 'e 40 no time de fora');
  ok(arredondaKcal(r.kcal) === 686, '686 kcal para 70 kg em pelada — não os 1.200+ de "duas horas de futebol"');

  // Com menos gente que vagas, ninguém espera.
  const cheio = dePelada(60, PESO_PADRAO, 'campo', 18, 'casual');
  ok(cheio.fracao === 1 && cheio.minutosFora === 0, 'campo com 18 pessoas: todo mundo joga o tempo todo');
  ok(fracaoEmCampo('quadra', 10) === 1, 'quadra com exatamente 10: fração 1');
  ok(fracaoEmCampo('quadra', 20) === 0.5, 'quadra com 20: metade do tempo');
}

/* ------------------------------------------------------------------ */
console.log('\n[2] A MÉDIA É EXATA MESMO NO "QUEM PERDE SAI"\n');
{
  /*
   * Simula uma noite de "quem perde sai" com vencedores fixos: o time A
   * ganha tudo. É o rodízio mais injusto possível. A média do grupo tem que
   * continuar sendo vagas ÷ presentes — só a distribuição muda.
   */
  const times = 3;
  const porTime = 7;
  const jogos = 12;
  const minutosPorJogo = 10;
  const emCampo = new Array(times).fill(0);
  let fila = [2]; // C espera
  let emJogo = [0, 1]; // A contra B
  for (let j = 0; j < jogos; j++) {
    for (const t of emJogo) emCampo[t] += minutosPorJogo;
    const perdedor = emJogo.find((t) => t !== 0)!; // A sempre ganha
    const entra = fila.shift()!;
    fila.push(perdedor);
    emJogo = [0, entra];
  }
  const total = jogos * minutosPorJogo;
  const mediaPorPessoa = (emCampo.reduce((a, b) => a + b, 0) * porTime) / (times * porTime);
  const esperado = total * fracaoEmCampo('society', times * porTime);
  console.log(`     time A: ${emCampo[0]} min | B: ${emCampo[1]} | C: ${emCampo[2]} | média ${mediaPorPessoa} | conta ${esperado}`);
  ok(emCampo[0] === total, 'o time que ganha tudo joga a noite inteira');
  ok(emCampo[1] < total && emCampo[2] < total, 'os outros jogam menos');
  ok(perto(mediaPorPessoa, esperado, 1e-9), 'e a MÉDIA do grupo é exatamente a da conta — os minutos só mudam de dono');
}

/* ------------------------------------------------------------------ */
console.log('\n[3] A CONFERÊNCIA: futsal medido contra futebol casual\n');
{
  const r = reproduzFutsal();
  console.log(`     ${ESTUDO_FUTSAL.kcalPorPartida} kcal em ${ESTUDO_FUTSAL.minutosDaPartida} min com ${ESTUDO_FUTSAL.pesoMedio} kg implicam ${r.metImplicado.toFixed(2)} METs; a tabela dá ${r.metDaTabela}`);
  ok(r.erro < 0.08, `medição e tabela a menos de 8% (${(r.erro * 100).toFixed(1)}%)`);
  ok(r.metImplicado < metFutebol('competitivo'), 'e o futsal recreativo fica abaixo do competitivo');
  console.log(`     se as 634 kcal fossem só dos ${ESTUDO_FUTSAL.minutosRastreados} min rastreados: ${r.metSeRastreado.toFixed(2)} METs`);
  ok(r.metSeRastreado > metFutebol('casual') && r.metSeRastreado < metFutebol('competitivo'),
    'mesmo na leitura mais alta, o estudo fica entre casual e competitivo');
  ok(ESTUDO_FUTSAL.participantes === 15 && ESTUDO_FUTSAL.pesoMedio === 83, 'os dados do estudo são os publicados');
}

/* ------------------------------------------------------------------ */
console.log('\n[4] O FORMATO NÃO MUDA A INTENSIDADE\n');
{
  const fc = Object.values(ESTUDO_FORMATOS.fcPct);
  const amp = Math.max(...fc) - Math.min(...fc);
  console.log(`     3v3, 5v5, 7v7 a ${ESTUDO_FORMATOS.m2PorJogador} m² por jogador: ${fc.join('%, ')}% da FC máxima`);
  ok(amp < 2, `a diferença entre formatos é de ${amp.toFixed(1)} ponto percentual`);
  ok(NIVEIS.length === 2, 'por isso só há dois níveis, e nenhum por formato');
  // O formato muda o tempo em campo — e é só isso que ele muda na conta.
  const q = dePelada(120, PESO_PADRAO, 'quadra', 20, 'casual');
  const c = dePelada(120, PESO_PADRAO, 'campo', 44, 'casual');
  ok(perto(q.met, c.met, 1e-9), 'quadra e campo usam o mesmo MET');
  ok(perto(q.kcal, c.kcal, 1e-9), 'com o mesmo número de times, dão o mesmo gasto — o formato só mexe nas vagas');
}

/* ------------------------------------------------------------------ */
console.log('\n[5] O QUE CIRCULA, E PARA QUEM ELE SERIA VERDADE\n');
{
  const casual = deTempo(60, PESO_PADRAO, 'casual');
  const comp = deTempo(60, PESO_PADRAO, 'competitivo');
  console.log(`     1 hora em campo, 70 kg: pelada ${formataKcal(casual.kcal)} | competitivo ${formataKcal(comp.kcal)}`);
  ok(arredondaKcal(casual.kcal) === 515, 'pelada: 515 kcal por hora inteira em campo');
  ok(arredondaKcal(comp.kcal) === 698, 'competitivo: 698 kcal');
  const peso1000 = pesoParaKcalPorHora(1000, 'competitivo');
  console.log(`     "1.000 kcal por hora" exige ${peso1000.toFixed(1)} kg jogando competitivo a hora inteira`);
  ok(peso1000 > 100 && peso1000 < 101, 'os 1.000 kcal por hora só fecham para ~100 kg, em jogo competitivo, sem sair');
}

/* ------------------------------------------------------------------ */
console.log('\n[6] Fontes\n');
{
  ok(FONTE_COMPENDIO.resumo.includes('15610') && FONTE_COMPENDIO.resumo.includes('15605'), 'o Compêndio cita os dois códigos');
  ok(metFutebol('casual') === 7.0 && metFutebol('competitivo') === 9.5, 'com 7,0 e 9,5 — os valores de 2024');
  ok(FONTE_BEATO.rotulo.startsWith('Beato M'), 'o estudo de futsal é citado pelo primeiro autor real (Beato)');
  ok(FONTE_RANDERS.rotulo.startsWith('Randers MB'), 'o de formatos, por Randers');
  ok(FONTE_BEATO.url.includes('27018845') && FONTE_RANDERS.url.includes('24944137'), 'com os PMIDs conferidos');
  ok(SEM_MEDICAO.includes('Goleiro'), 'goleiro está declarado como sem medição conferida');
}

/* ------------------------------------------------------------------ */
console.log('\n[7] Meta e escala\n');
{
  const meta = deKcal(500, PESO_PADRAO, 'casual');
  ok(perto(meta.kcal, 500, 1e-9), 'a meta é devolvida intacta');
  ok(meta.minutosEmCampo > 55 && meta.minutosEmCampo < 60, `500 kcal pedem ${formataTempo(meta.minutosEmCampo)} em campo de pelada`);
  const quilo = simulacaoUmQuilo(PESO_PADRAO, 'casual');
  console.log(`     1 kg de gordura em pelada: ${formataTempo(quilo.minutosEmCampo)} em campo`);
  ok(quilo.minutosEmCampo > 800, 'um quilo passa de 13 horas em campo');
}

/* ------------------------------------------------------------------ */
console.log('\n[8] Entradas e validação\n');
{
  ok(!pesoValido(null) && !pesoValido(0) && !pesoValido(999), 'peso fora da faixa é barrado');
  ok(pesoValido(72.5) && parseNumero('72,5') === 72.5, 'peso com vírgula é aceito');
  ok(!minutosValidos(MINUTOS_MIN - 1) && !minutosValidos(MINUTOS_MAX + 1), 'minutos em campo fora da faixa são barrados');
  ok(!localValido(LOCAL_MIN - 1) && !localValido(LOCAL_MAX + 1), 'tempo no local fora da faixa é barrado');
  ok(!presentesValidos(PRESENTES_MIN - 1) && !presentesValidos(PRESENTES_MAX + 1), 'lotação fora da faixa é barrada');
  ok(!presentesValidos(20.5), '"20,5 pessoas" é barrado — gente é número inteiro');
  ok(presentesValidos(21), 'e 21 passa');
  ok(kcalValida(KCAL_MIN) && !kcalValida(KCAL_MIN - 1), `a meta mínima é ${KCAL_MIN} kcal`);
}

/* ------------------------------------------------------------------ */
console.log('\n[9] Frases\n');
{
  const fp = fraseContexto(PESO_PADRAO, dePelada(120, PESO_PADRAO, 'society', 21));
  console.log(`     ${fp}`);
  ok(fp.includes('67%') && fp.includes('1h20'), 'a frase da pelada traz a fração e o tempo em campo');
  const fc = fraseContexto(PESO_PADRAO, dePelada(60, PESO_PADRAO, 'campo', 18));
  console.log(`     ${fc}`);
  ok(fc.includes('ninguém fica de fora'), 'sem time de fora, a frase diz isso em vez de "100% do tempo"');
  const ft = fraseContexto(PESO_PADRAO, deTempo(60, PESO_PADRAO));
  console.log(`     ${ft}`);
  ok(!/representam|representa\b/.test(ft + fp + fc), 'sem verbo concordando com o tempo');
  ok(![ft, fp, fc].some((f) => f.includes('NaN') || f.includes('undefined')), 'sem NaN nem undefined');
}

/* ------------------------------------------------------------------ */
console.log('\n[10] Tabelas\n');
{
  const tp = tabelaPorPeso();
  ok(tp.length === 7 && tp.every((l) => l.competitivo > l.casual), 'a tabela por peso tem os dois níveis, competitivo acima');
  const tr = tabelaRodizio(PESO_PADRAO);
  ok(tr.length === FORMATOS.length * 3, 'a tabela do rodízio cobre 3 lotações por formato');
  ok(tr.filter((l) => l.presentes === l.formato.porTime * 2).every((l) => l.fracao === 1), 'campo cheio sem time de fora: fração 1');
  ok(tr.filter((l) => l.presentes === l.formato.porTime * 4).every((l) => l.fracao === 0.5), 'com dois times de fora: metade');
}

/* ------------------------------------------------------------------ */
if (falhas.length) {
  console.log(`\n✗ ${falhas.length} falha(s):`);
  falhas.forEach((f) => console.log('   - ' + f));
  process.exit(1);
}
console.log('\n✓ Motor do futebol: tudo certo.\n');
