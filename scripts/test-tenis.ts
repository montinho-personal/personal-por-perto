/**
 * Testes do motor de calorias do tênis.
 *
 * Duas coisas seguram a página. A conferência: a partida medida por Seliger
 * (em oxigênio por quilo, pausas incluídas) tem que cair perto dos 8,0 do
 * simples — é o que autoriza a página a dizer que a pausa já está na
 * tabela. E as duplas: duas linhas do Compêndio viram faixa, e a faixa tem
 * que se comportar como faixa em todos os modos, inclusive invertida na
 * meta.
 *
 * Uso: npm run test:tenis
 */
import {
  ESTUDO_PARTIDA,
  FONTE_COMPENDIO,
  FONTE_SELIGER,
  KCAL_MIN,
  MINUTOS_MAX,
  MINUTOS_MIN,
  MODALIDADES,
  NOTA_PAUSA,
  PESO_PADRAO,
  SEM_CONFERENCIA,
  arredondaKcal,
  deKcal,
  deTempo,
  formataFaixaKcal,
  formataFaixaMet,
  formataFaixaTempo,
  formataKcal,
  formataTempo,
  fraseContexto,
  kcalValida,
  minutosValidos,
  modalidade,
  parseNumero,
  pesoValido,
  reproduzPartida,
  seDescontasseAPausa,
  simulacaoUmQuilo,
  tabelaPorPeso,
  temFaixa,
} from '../src/lib/calorias/tenis';

const falhas: string[] = [];
const ok = (c: boolean, m: string) => {
  console.log((c ? '  ✓ ' : '  ✗ ') + m);
  if (!c) falhas.push(m);
};
const perto = (a: number, b: number, tol = 0.01) => Math.abs(a - b) <= tol;

/* ------------------------------------------------------------------ */
console.log('\n[1] A CONFERÊNCIA: a partida medida contra a tabela\n');
{
  const r = reproduzPartida();
  console.log(`     ${ESTUDO_PARTIDA.vo2} mL/kg/min ÷ 3,5 = ${r.metMedido.toFixed(2)} METs; simples na tabela: ${r.metDaTabela}`);
  ok(r.erro < 0.05, `medição e tabela a menos de 5% (${(r.erro * 100).toFixed(1)}%)`);
  ok(ESTUDO_PARTIDA.pctEmJogo < 50, 'e a partida medida teve a bola em jogo menos da metade do tempo');
  ok(ESTUDO_PARTIDA.participantes === 16 && ESTUDO_PARTIDA.minutos === 10, 'os dados do estudo são os publicados (16 jogadores, 10 minutos)');
}

/* ------------------------------------------------------------------ */
console.log('\n[2] A PAUSA JÁ ESTÁ NA TABELA\n');
{
  const s = seDescontasseAPausa(PESO_PADRAO);
  console.log(`     1 hora de simples, 70 kg: ${formataKcal(s.certo)} kcal contando a pausa | ${formataKcal(s.errado)} se a descontasse`);
  ok(s.errado < s.certo / 2, 'descontar a pausa cortaria a conta para menos da metade');
  ok(NOTA_PAUSA.includes('41%') && NOTA_PAUSA.includes('7,8') && NOTA_PAUSA.includes('8,0'), 'a nota traz os três números que sustentam a regra');
  ok(arredondaKcal(s.certo) === 588, '588 kcal numa hora de simples, 70 kg');
}

/* ------------------------------------------------------------------ */
console.log('\n[3] A TABELA É A DO COMPÊNDIO 2024\n');
{
  const esperado: Record<string, [number, number, string[]]> = {
    simples: [8.0, 8.0, ['15690']],
    geral: [6.8, 6.8, ['15675']],
    duplas: [4.5, 6.0, ['15685', '15680']],
  };
  ok(MODALIDADES.length === 3, 'são três modalidades');
  for (const m of MODALIDADES) {
    const [a, b, cods] = esperado[m.id];
    ok(m.metMin === a && m.metMax === b && m.codigos.join() === cods.join(), `${m.nome}: ${formataFaixaMet(m)} (${cods.join(', ')})`);
    for (const c of cods) ok(FONTE_COMPENDIO.resumo.includes(c), `  e o código ${c} está na referência`);
  }
  ok(FONTE_COMPENDIO.resumo.includes('7,3 em 2011'), 'a referência diz o valor de 2011 da linha geral');
  ok(!temFaixa('simples') && temFaixa('duplas'), 'só duplas é faixa');
  ok(SEM_CONFERENCIA.some((s) => s.includes('15676')) && SEM_CONFERENCIA.some((s) => s.includes('15695')), 'as linhas sem segunda fonte estão declaradas');
  ok(SEM_CONFERENCIA.includes('Beach tennis'), 'e beach tennis também');
  ok(FONTE_SELIGER.url.includes('4741650') && FONTE_SELIGER.rotulo.startsWith('Seliger V'), 'Seliger com PMID conferido');
}

/* ------------------------------------------------------------------ */
console.log('\n[4] DUPLAS COMO FAIXA\n');
{
  const d = deTempo(60, PESO_PADRAO, 'duplas');
  console.log(`     1 hora de duplas, 70 kg: ${formataFaixaKcal(d.kcalMin, d.kcalMax)} kcal`);
  ok(d.kcalMin < d.kcalMax, 'o tempo dá uma faixa de gasto');
  ok(formataFaixaKcal(d.kcalMin, d.kcalMax) === '331 a 441', '331 a 441 kcal');
  const m = deKcal(300, PESO_PADRAO, 'duplas');
  console.log(`     300 kcal em duplas: ${formataFaixaTempo(m.minutosMin, m.minutosMax)}`);
  ok(m.minutosMin < m.minutosMax, 'na meta a faixa se inverte e continua em ordem crescente');
  ok(formataFaixaTempo(m.minutosMin, m.minutosMax) === '41 a 54 min', 'abaixo de uma hora, "41 a 54 min" — sem repetir a unidade');
  ok(formataFaixaTempo(68, 91) === '1h08 a 1h31', 'acima, cada ponta com o próprio formato');
  ok(perto(m.minutosMin, 300 / (6.0 * 3.5 * 70 / 200), 1e-9), 'o tempo menor vem do MET maior');
  const s = deKcal(300, PESO_PADRAO, 'simples');
  ok(s.minutosMin === s.minutosMax && formataFaixaTempo(s.minutosMin, s.minutosMax) === formataTempo(s.minutosMin), 'sem faixa, a meta dá um tempo só');
}

/* ------------------------------------------------------------------ */
console.log('\n[5] Meta, escala e validação\n');
{
  const meta = deKcal(500, PESO_PADRAO, 'simples');
  ok(perto(meta.kcalMin, 500, 1e-9), 'a meta é devolvida intacta');
  ok(meta.minutosMin > 50 && meta.minutosMin < 52, `500 kcal pedem ${formataTempo(meta.minutosMin)} de simples`);
  const q = simulacaoUmQuilo(PESO_PADRAO, 'simples');
  ok(q.minutosMin > 780, `1 kg de gordura: ${formataTempo(q.minutosMin)} de simples`);
  ok(!pesoValido(0) && pesoValido(72.5) && parseNumero('72,5') === 72.5, 'peso validado, vírgula aceita');
  ok(!minutosValidos(MINUTOS_MIN - 1) && !minutosValidos(MINUTOS_MAX + 1), 'minutos fora da faixa barrados');
  ok(kcalValida(KCAL_MIN) && !kcalValida(KCAL_MIN - 1), `meta mínima de ${KCAL_MIN} kcal`);
}

/* ------------------------------------------------------------------ */
console.log('\n[6] Frases e tabela\n');
{
  const fs = fraseContexto(PESO_PADRAO, deTempo(60, PESO_PADRAO, 'simples'));
  const fd = fraseContexto(PESO_PADRAO, deTempo(90, PESO_PADRAO, 'duplas'));
  console.log(`     ${fs}\n     ${fd}`);
  ok(fs.includes('pausas entre pontos'), 'sem faixa, a frase lembra que a pausa conta');
  ok(fd.includes(' a ') && fd.includes('duas linhas'), 'com faixa, a frase explica de onde vem a faixa, sem sugerir que a pessoa sabe escolher');
  ok(!/gastam|representam|dão\b/.test(fs + fd), 'sem verbo concordando com o tempo');
  ok(![fs, fd].some((f) => /NaN|undefined/.test(f)), 'sem NaN nem undefined');
  const t = tabelaPorPeso();
  ok(t.length === 7 && t.every((l) => l.simples > l.geral && l.geral > l.duplasMax && l.duplasMax > l.duplasMin), 'por peso: simples > geral > duplas (topo) > duplas (piso)');
  ok(modalidade('xyz').id === 'simples', 'modalidade desconhecida cai em simples');
}

/* ------------------------------------------------------------------ */
if (falhas.length) {
  console.log(`\n✗ ${falhas.length} falha(s):`);
  falhas.forEach((f) => console.log('   - ' + f));
  process.exit(1);
}
console.log('\n✓ Motor do tênis: tudo certo.\n');
