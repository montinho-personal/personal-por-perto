/**
 * Testes do motor de calorias da hidroginástica.
 *
 * Duas coisas seguram a página. A conferência: MET, duração e peso médio
 * publicados por Nikolai et al. têm que reproduzir o gasto líquido que o
 * próprio estudo publicou — senão o 4,26 não poderia virar opção. E a tese:
 * a aula medida fica abaixo da linha geral do Compêndio, na proporção que a
 * página afirma.
 *
 * Uso: npm run test:hidroginastica
 */
import {
  AULAS_MAX,
  AULAS_MIN,
  ESTUDO_AULA,
  FONTE_COMPENDIO,
  FONTE_NIKOLAI,
  FONTE_OLDER,
  KCAL_MIN,
  MINUTOS_MAX,
  MINUTOS_MIN,
  MINUTOS_PADRAO,
  NOTA_60_MAIS,
  PESO_PADRAO,
  SEMANAS_POR_MES,
  SEM_CONFERENCIA,
  TIPOS,
  arredondaKcal,
  aulaAbaixoDaTabela,
  aulasEquivalentes,
  aulasValidas,
  deAula,
  deKcal,
  deSemana,
  formataEmAulas,
  formataKcal,
  formataMet,
  formataTempo,
  fraseContexto,
  kcalValida,
  metHidro,
  minutosValidos,
  parseNumero,
  pesoValido,
  reproduzAula,
  simulacaoUmQuilo,
  tabelaAcimaDaAula,
  tabelaPorPeso,
  tabelaTipos,
} from '../src/lib/calorias/hidroginastica';

const falhas: string[] = [];
const ok = (c: boolean, m: string) => {
  console.log((c ? '  ✓ ' : '  ✗ ') + m);
  if (!c) falhas.push(m);
};
const perto = (a: number, b: number, tol = 0.01) => Math.abs(a - b) <= tol;

/* ------------------------------------------------------------------ */
console.log('\n[1] A CONFERÊNCIA: o estudo reproduzido pela nossa conta\n');
{
  const r = reproduzAula();
  console.log(`     (4,26 − 1) × 3,5 × 89,9 ÷ 200 × 50 = ${r.kcalCalculada.toFixed(1)} kcal; o artigo publica ${r.kcalDoArtigo}`);
  ok(r.erro < 0.05, `a conta reproduz o gasto líquido publicado a menos de 5% (${(r.erro * 100).toFixed(1)}%)`);
  ok(ESTUDO_AULA.participantes === 14 && ESTUDO_AULA.idadeMedia === 57.4 && ESTUDO_AULA.pesoMedio === 89.9,
    'os dados do estudo são os publicados (14 pessoas, 57,4 anos, 89,9 kg)');
}

/* ------------------------------------------------------------------ */
console.log('\n[2] A TESE: a aula medida fica abaixo da tabela\n');
{
  const abaixo = aulaAbaixoDaTabela();
  const acima = tabelaAcimaDaAula();
  console.log(`     aula medida ${metHidro('medida')} × tabela geral ${metHidro('geral')}: ${(abaixo * 100).toFixed(1)}% abaixo, ou a tabela ${(acima * 100).toFixed(1)}% acima`);
  ok(Math.round(abaixo * 100) === 23, 'a aula medida fica 23% abaixo da linha geral (o número que a página usa)');
  ok(Math.round(acima * 100) === 29, 'dito ao contrário, a tabela fica 29% acima da aula');
  const aula = deAula(MINUTOS_PADRAO, PESO_PADRAO, 'medida');
  const tabela = deAula(MINUTOS_PADRAO, PESO_PADRAO, 'geral');
  console.log(`     50 min, 70 kg: aula medida ${formataKcal(aula.kcal)} | tabela geral ${formataKcal(tabela.kcal)}`);
  ok(arredondaKcal(aula.kcal) === 261 && arredondaKcal(tabela.kcal) === 337, '261 kcal pela aula medida, 337 pela tabela');
}

/* ------------------------------------------------------------------ */
console.log('\n[3] A TABELA É A DO COMPÊNDIO 2024\n');
{
  const esperado: Record<string, [number, string]> = {
    medida: [4.26, 'Nikolai et al. 2009'],
    geral: [5.5, '18355'],
    resistencia: [3.8, '18356'],
    alta: [7.5, '18358'],
  };
  ok(TIPOS.length === 4, 'são quatro opções: três linhas e a aula medida');
  for (const t of TIPOS) {
    const [met, codigo] = esperado[t.id] ?? [NaN, ''];
    ok(t.met === met && t.codigo === codigo, `${t.nome}: ${met} METs (${codigo})`);
    if (t.origem === 'compendio') ok(FONTE_COMPENDIO.resumo.includes(codigo), `  e o código ${codigo} está na referência`);
  }
  ok(TIPOS.filter((t) => t.origem === 'estudo').length === 1, 'só uma opção vem de estudo, e ela diz isso');
  ok(formataMet(4.26) === '4,26' && formataMet(5.5) === '5,5' && formataMet(7.5) === '7,5', 'MET com as casas que a fonte publica');
}

/* ------------------------------------------------------------------ */
console.log('\n[4] O que não entra, e o 60+\n');
{
  ok(SEM_CONFERENCIA.some((s) => s.includes('60+')), 'o valor 60+ da hidroginástica está declarado como não conferido');
  ok(NOTA_60_MAIS.includes('2,7') && NOTA_60_MAIS.includes('3,5'), 'a nota explica a base de repouso diferente (2,7 × 3,5)');
  ok(FONTE_OLDER.rotulo.startsWith('Willis EA') && FONTE_OLDER.rotulo.includes('13(1):13–17'), 'o Compêndio 60+ é citado com autor, volume e páginas');
  ok(FONTE_NIKOLAI.url.includes('19564662') && FONTE_NIKOLAI.rotulo.includes('6(3):333'), 'o estudo da aula tem PMID e volume conferidos');
}

/* ------------------------------------------------------------------ */
console.log('\n[5] A SEMANA E O MÊS\n');
{
  const s = deSemana(2, 50, PESO_PADRAO, 'medida');
  const a = deAula(50, PESO_PADRAO, 'medida');
  console.log(`     2 aulas de 50 min por semana, 70 kg: ${formataKcal(s.kcal)} kcal na semana, ${formataKcal(s.kcalMes)} no mês`);
  ok(perto(s.kcal, a.kcal * 2, 1e-9), 'a semana é a aula vezes o número de aulas');
  ok(perto(s.kcalMes, s.kcal * 52 / 12, 1e-9) && perto(SEMANAS_POR_MES, 4.333, 0.001), 'o mês usa 52 ÷ 12 semanas, não 4');
  ok(perto(s.kcalAula, a.kcal, 1e-9), 'e guarda o gasto de uma aula');
}

/* ------------------------------------------------------------------ */
console.log('\n[6] Meta e escala\n');
{
  const meta = deKcal(300, PESO_PADRAO, 'medida');
  ok(perto(meta.kcal, 300, 1e-9), 'a meta é devolvida intacta');
  console.log(`     300 kcal em aula comum, 70 kg: ${formataTempo(meta.minutos)} = ${aulasEquivalentes(meta.minutos)} aula(s) de 50 min`);
  ok(meta.minutos > 57 && meta.minutos < 58, '300 kcal pedem cerca de 57 minutos de aula comum');
  ok(aulasEquivalentes(50) === 1 && aulasEquivalentes(50.5) === 2, 'aulas equivalentes arredondam para cima');
  ok(formataEmAulas(meta.minutos) === '1,1 aula de 50 minutos', 'na meta, 57 minutos são "1,1 aula", não "2 aulas"');
  ok(formataEmAulas(3) === '0,1 aula de 50 minutos' && formataEmAulas(120) === '2,4 aulas de 50 minutos', 'fração com uma casa; singular abaixo de 2');
  const quilo = simulacaoUmQuilo(PESO_PADRAO, 'medida');
  console.log(`     1 kg de gordura em aula comum: ${formataTempo(quilo.minutos)} = ${aulasEquivalentes(quilo.minutos)} aulas de 50 min`);
  ok(aulasEquivalentes(quilo.minutos) > 25, 'um quilo passa de 25 aulas');
}

/* ------------------------------------------------------------------ */
console.log('\n[7] Entradas e validação\n');
{
  ok(!pesoValido(null) && !pesoValido(0) && !pesoValido(999), 'peso fora da faixa é barrado');
  ok(pesoValido(72.5) && parseNumero('72,5') === 72.5, 'peso com vírgula é aceito');
  ok(!minutosValidos(MINUTOS_MIN - 1) && !minutosValidos(MINUTOS_MAX + 1), 'minutos fora da faixa são barrados');
  ok(!aulasValidas(AULAS_MIN - 1) && !aulasValidas(AULAS_MAX + 1) && !aulasValidas(2.5) && aulasValidas(3), 'aulas: inteiro de 1 a 7');
  ok(kcalValida(KCAL_MIN) && !kcalValida(KCAL_MIN - 1), `a meta mínima é ${KCAL_MIN} kcal`);
}

/* ------------------------------------------------------------------ */
console.log('\n[8] Frases\n');
{
  const fa = fraseContexto(PESO_PADRAO, deAula(50, PESO_PADRAO, 'medida'));
  const fs = fraseContexto(PESO_PADRAO, deSemana(2, 50, PESO_PADRAO, 'geral'));
  const f1 = fraseContexto(PESO_PADRAO, deSemana(1, 45, PESO_PADRAO, 'resistencia'));
  for (const f of [fa, fs, f1]) console.log(`     ${f}`);
  ok(f1.includes('1 aula de'), '"1 aula", no singular');
  ok(f1.includes('estimada como') && !f1.includes('estimadas'), '"1 aula ... estimada", concordando no singular');
  ok(fs.includes('estimadas como'), 'e "2 aulas ... estimadas" no plural');
  ok(fs.includes('na semana') && fs.includes('no mês'), 'a frase da semana traz semana e mês');
  ok(!/representam|representa\b|gastam|somam|dão\b/.test(fa + fs + f1), 'sem verbo concordando com o tempo ou com as aulas');
  ok(![fa, fs, f1].some((f) => /NaN|undefined/.test(f)), 'sem NaN nem undefined');
}

/* ------------------------------------------------------------------ */
console.log('\n[9] Tabelas\n');
{
  const tp = tabelaPorPeso();
  ok(tp.length === 7 && tp.every((l) => l.geral > l.medida), 'por peso: a tabela geral sempre acima da aula medida');
  ok(tp.every((l, i) => i === 0 || l.medida > tp[i - 1].medida), 'e o gasto sobe com o peso');
  const tt = tabelaTipos(PESO_PADRAO);
  ok(tt.length === TIPOS.length && tt.every((l) => perto(l.hora, (l.aula * 60) / 50, 1e-9)), 'a tabela por tipo tem aula e hora coerentes');
}

/* ------------------------------------------------------------------ */
if (falhas.length) {
  console.log(`\n✗ ${falhas.length} falha(s):`);
  falhas.forEach((f) => console.log('   - ' + f));
  process.exit(1);
}
console.log('\n✓ Motor da hidroginástica: tudo certo.\n');
