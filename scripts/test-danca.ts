/**
 * Testes do motor de calorias da dança.
 *
 * A conferência central é diferente das outras seis: aqui o que precisa ser
 * provado é que a página está CITANDO o estudo de Zumba corretamente, e não
 * chutando. Se aplicar 8,8 METs ao peso implícito das participantes por 39
 * minutos não devolver as 369 kcal do artigo, então a página entendeu o
 * estudo errado — e a crítica que ela faz aos outros cairia sobre ela.
 *
 * Uso: npm run test:danca
 */
import {
  DANCANDO_MAX,
  DANCANDO_MIN,
  DANCANDO_PADRAO,
  ESTILOS,
  ESTUDO_ZUMBA,
  KCAL_MIN,
  KCAL_POR_KG_GORDURA,
  MINUTOS_MAX,
  MINUTOS_MIN,
  PESO_PADRAO,
  SEM_MEDICAO,
  arredondaKcal,
  dancandoValido,
  deAula,
  deKcal,
  deTempo,
  estilo,
  formataKcal,
  formataTempo,
  fraseContexto,
  kcalPorMinuto,
  kcalValida,
  metDanca,
  minutosValidos,
  parseNumero,
  pesoImplicitoDoEstudo,
  pesoValido,
  reproduzEstudo,
  simulacaoUmQuilo,
  tabelaPorEstilo,
  tabelaPorPeso,
  tabelaPorTempo,
  tabelaTempoPorEstilo,
} from '../src/lib/calorias/danca';

const falhas: string[] = [];
const ok = (c: boolean, m: string) => {
  console.log((c ? '  ✓ ' : '  ✗ ') + m);
  if (!c) falhas.push(m);
};
const perto = (a: number, b: number, tol = 0.01) => Math.abs(a - b) <= tol;

/* ------------------------------------------------------------------ */
console.log('\n[1] A CONFERÊNCIA CENTRAL: a página cita o estudo certo?\n');
{
  const peso = pesoImplicitoDoEstudo();
  console.log(`     o estudo reporta ${ESTUDO_ZUMBA.met} METs e ${ESTUDO_ZUMBA.kcalPorMinuto} kcal/min`);
  console.log(`     logo as participantes tinham cerca de ${peso.toFixed(1)} kg`);
  ok(peso > 58 && peso < 66, `o peso implícito cai numa faixa plausível para mulheres de 18 a 22 anos (${peso.toFixed(1)} kg)`);
  ok(peso < PESO_PADRAO, 'e é MENOR que os 70 kg que a ferramenta usa por padrão — por isso as 369 kcal não são "para 70 kg"');

  const r = reproduzEstudo();
  console.log(`     nossa conta na aula medida: ${r.kcal.toFixed(0)} kcal | o artigo reporta: ${r.kcalDoArtigo} kcal | erro ${(r.erro * 100).toFixed(1)}%`);
  ok(r.erro < 0.03, `reproduzimos as ${r.kcalDoArtigo} kcal do artigo com menos de 3% de erro`);
  ok(ESTUDO_ZUMBA.minutosDaAula === 39, 'a aula medida tinha 39 minutos, não sessenta');
  ok(ESTUDO_ZUMBA.participantes === 19, 'com 19 participantes');

  // E o que a internet faz com o número: atribui a uma hora e a 70 kg.
  const umaHora70 = kcalPorMinuto(ESTUDO_ZUMBA.met, PESO_PADRAO) * 60;
  console.log(`     uma hora de Zumba para 70 kg daria ${umaHora70.toFixed(0)} kcal`);
  ok(umaHora70 > ESTUDO_ZUMBA.kcalPorAula, 'uma hora a 70 kg é bem MAIS que as 369 kcal do artigo');
  ok(perto(umaHora70 / ESTUDO_ZUMBA.kcalPorAula, 1.75, 0.1), 'cerca de 1,75 vez mais — o número certo para o cenário errado');
}

/* ------------------------------------------------------------------ */
console.log('\n[2] O "7 METs" que circula está por BAIXO\n');
{
  const aerobica = metDanca('aerobica');
  const zumba = metDanca('zumba');
  console.log(`     dança aeróbica geral (Compêndio 03015): ${aerobica} METs | Zumba medida: ${zumba} METs`);
  ok(perto(aerobica, 7.3, 0.0001), 'a dança aeróbica geral vale 7,3 METs, não 7,0');
  ok(zumba > aerobica, 'e a Zumba medida vale MAIS que a categoria genérica');
  ok(perto(zumba, 8.8, 0.0001), 'exatamente 8,8 METs');
  // Quem publica "Zumba = 7" erra por baixo em mais de 20%.
  ok((zumba - 7) / 7 > 0.2, `publicar "Zumba = 7 METs" subestima em ${(((zumba - 7) / 7) * 100).toFixed(0)}%`);
}

/* ------------------------------------------------------------------ */
console.log('\n[3] Só entra estilo com fonte\n');
{
  ok(ESTILOS.length === 6, 'a tabela tem seis estilos');
  ok(ESTILOS.every((e) => e.origem === 'compendio' || e.origem === 'estudo'), 'todos declaram a origem do número');
  const doCompendio = ESTILOS.filter((e) => e.origem === 'compendio');
  ok(doCompendio.every((e) => /^\d{5}$/.test(e.codigo)), 'os do Compêndio trazem código de cinco dígitos');
  const doEstudo = ESTILOS.filter((e) => e.origem === 'estudo');
  ok(doEstudo.length === 1 && doEstudo[0].id === 'zumba', 'só a Zumba vem de estudo próprio');
  ok(doEstudo[0].codigo === '—', 'e ela declara que não tem código, porque não está no Compêndio');
  ok(ESTILOS.every((e) => e.met >= 4 && e.met <= 10), 'todos os METs caem no plausível para dança');
  // Os estilos sem medição ficam FORA da tabela, e listados como tal.
  ok(SEM_MEDICAO.length >= 5, 'há uma lista explícita de estilos sem medição');
  const nomes = ESTILOS.map((e) => e.nome.toLowerCase()).join(' ');
  for (const s of SEM_MEDICAO) {
    ok(!nomes.includes(s.toLowerCase().split(' ')[0]), `"${s}" NÃO aparece na tabela de valores`);
  }
  ok(metDanca('inexistente') === metDanca('aerobica'), 'estilo inválido cai na aeróbica geral, sem NaN');
}

/* ------------------------------------------------------------------ */
console.log('\n[4] A aula não é o que você dança\n');
{
  const aula = deAula(60, PESO_PADRAO, 'zumba', 70);
  const soDanca = deTempo(60, PESO_PADRAO, 'zumba');
  console.log(`     60 min de aula com 70% dançando: ${formataKcal(aula.kcal)} kcal | 60 min dançando: ${formataKcal(soDanca.kcal)} kcal`);
  ok(perto(aula.minutosDancando, 42, 0.0001), '70% de 60 min dão 42 min de dança');
  ok(perto(aula.minutosAula, 60, 0.0001), 'e o relógio da aula continua 60');
  ok(aula.kcal < soDanca.kcal, 'a aula com instrução gasta menos que uma hora dançando');
  ok(aula.kcalInstrucao > 0, 'e o tempo de instrução aparece separado');

  /*
   * O tempo de instrução conta como repouso: 18 min a 1 MET. É subestimar
   * de propósito, e o teste garante que é exatamente isso — não um valor
   * inventado no meio.
   */
  ok(perto(aula.kcalInstrucao, kcalPorMinuto(1, PESO_PADRAO) * 18, 0.0001), 'a instrução entra a 1 MET, nem mais nem menos');
  ok(perto(deAula(60, PESO_PADRAO, 'zumba', 100).kcal, soDanca.kcal, 0.0001), '100% dançando equivale ao modo de tempo');

  // O líquido desconta o repouso do relógio INTEIRO da aula.
  ok(perto(aula.kcal - aula.kcalLiquida, kcalPorMinuto(1, PESO_PADRAO) * 60, 0.0001), 'o líquido desconta repouso da aula inteira');
  ok(aula.kcalLiquida < aula.kcal, 'e é sempre menor que o bruto');
}

/* ------------------------------------------------------------------ */
console.log('\n[5] Os números de referência da página\n');
{
  const z45 = deTempo(45, PESO_PADRAO, 'zumba');
  console.log(`     45 min de Zumba / 70 kg: ${formataKcal(z45.kcal)} kcal`);
  ok(arredondaKcal(z45.kcal) === 485, '45 min de Zumba a 70 kg dão 485 kcal');
  const a45 = deTempo(45, PESO_PADRAO, 'aerobica');
  ok(arredondaKcal(a45.kcal) === 402, '45 min de dança aeróbica geral dão 402 kcal');
  const s45 = deTempo(45, PESO_PADRAO, 'salao');
  ok(arredondaKcal(s45.kcal) === 248, '45 min de dança de salão rápida dão 248 kcal');
  // A dispersão da tabela: quase o dobro entre o mais barato e o mais caro.
  const razao = metDanca('zumba') / metDanca('salao');
  ok(perto(razao, 1.956, 0.01), `trocar salão por Zumba quase dobra o gasto (${razao.toFixed(2)}×)`);
}

/* ------------------------------------------------------------------ */
console.log('\n[6] Proporcionalidade, meta e escala\n');
{
  ok(perto(deTempo(45, 100).kcal / deTempo(45, 50).kcal, 2, 0.0001), 'dobrar o peso dobra o gasto');
  ok(perto(deTempo(90, 70).kcal / deTempo(45, 70).kcal, 2, 0.0001), 'dobrar o tempo dobra o gasto');

  const meta = deKcal(400, PESO_PADRAO, 'zumba');
  console.log(`     meta de 400 kcal em Zumba / 70 kg: ${formataTempo(meta.minutosDancando)}`);
  ok(perto(meta.kcal, 400, 0.0001), 'a meta é devolvida intacta');
  ok(meta.minutosDancando > 35 && meta.minutosDancando < 40, 'e pede pouco menos de 40 min de Zumba');

  const quilo = simulacaoUmQuilo(PESO_PADRAO, 'zumba');
  console.log(`     1 kg de gordura em Zumba: ${formataTempo(quilo.minutosDancando)}`);
  ok(quilo.minutosDancando > 600, 'um quilo de gordura passa de 10 horas de Zumba');
}

/* ------------------------------------------------------------------ */
console.log('\n[7] Entradas e validação\n');
{
  ok(!pesoValido(null) && !pesoValido(0) && !pesoValido(999), 'peso fora da faixa é barrado');
  ok(pesoValido(72.5) && parseNumero('72,5') === 72.5, 'peso com vírgula é aceito');
  ok(!minutosValidos(MINUTOS_MIN - 1) && !minutosValidos(MINUTOS_MAX + 1), 'tempo fora da faixa é barrado');
  ok(minutosValidos(45), 'e o padrão passa');
  ok(!dancandoValido(DANCANDO_MIN - 1) && !dancandoValido(DANCANDO_MAX + 1), 'fração de dança fora da faixa é barrada');
  ok(dancandoValido(DANCANDO_PADRAO), 'e o padrão passa');
  ok(dancandoValido(100), '100% é válido — aula sem parada existe');
  ok(kcalValida(KCAL_MIN) && !kcalValida(KCAL_MIN - 1), `a meta mínima é ${KCAL_MIN} kcal`);
}

/* ------------------------------------------------------------------ */
console.log('\n[8] Formatação e frases\n');
{
  ok(arredondaKcal(402.4) === 402, 'abaixo de mil, inteiro');
  ok(arredondaKcal(1234) === 1230, 'acima de mil, dezena');
  ok(formataTempo(90) === '1h30', '90 min saem como 1h30');
  ok(formataTempo(0) === '—', 'zero vira travessão');

  const fa = fraseContexto(PESO_PADRAO, deAula(60, PESO_PADRAO, 'zumba', 70));
  console.log(`     ${fa}`);
  ok(fa.includes('de aula') && fa.includes('70%'), 'a frase da aula declara o relógio e a fração');
  ok(fa.includes('42 min'), 'e mostra o tempo de dança efetivo');

  const fd = fraseContexto(PESO_PADRAO, deTempo(45, PESO_PADRAO, 'zumba'));
  console.log(`     ${fd}`);
  ok(!fd.includes('de aula'), 'a frase do modo dança não fala de aula');
  ok(!fd.includes('NaN') && !fa.includes('NaN'), 'sem NaN em nenhuma');
}

/* ------------------------------------------------------------------ */
console.log('\n[9] Tabelas\n');
{
  const te = tabelaPorEstilo(PESO_PADRAO);
  ok(te.length === 6, 'a tabela por estilo cobre os seis');
  ok(te.every((l) => l.kcal45 > 0 && l.kcalPorMin > 0), 'com valores positivos');
  ok(te.find((l) => l.estilo.id === 'zumba')!.kcal45 === Math.max(...te.map((l) => l.kcal45)), 'e a Zumba é a mais alta das seis');
  const tp = tabelaPorPeso();
  ok(tp.length === 7 && tp.every((l, i) => i === 0 || l.kcal > tp[i - 1].kcal), 'a tabela por peso cresce');
  const tt = tabelaPorTempo(PESO_PADRAO);
  ok(tt.length === 6 && tt.every((l, i) => i === 0 || l.kcal > tt[i - 1].kcal), 'a tabela por tempo cresce');
  ok(tt[tt.length - 1].minutos === 120, 'e chega a 2 horas, que a busca pede (prints de 06/10)');

  /*
   * Tempo × estilo, à mão para 70 kg e 1 hora: kcal = MET × 3,5 × 70 / 200 × 60
   * = MET × 73,5. Salão 4,5 → 330,75; aeróbica 7,3 → 536,55; Zumba 8,8 → 646,8.
   */
  const tte = tabelaTempoPorEstilo(70);
  const h1 = tte.find((l) => l.minutos === 60)!;
  ok(
    Math.abs(h1.kcal[0] - 330.75) < 0.01 && Math.abs(h1.kcal[1] - 536.55) < 0.01 && Math.abs(h1.kcal[2] - 646.8) < 0.01,
    `1 hora: salão 330,75, aeróbica 536,55, Zumba 646,8 (deu ${h1.kcal.map((k) => k.toFixed(2)).join(', ')})`,
  );
  ok(tte.every((l) => l.kcal[0] < l.kcal[1] && l.kcal[1] < l.kcal[2]), 'em todo tempo, salão < aeróbica < Zumba');
}

/* ------------------------------------------------------------------ */
if (falhas.length) {
  console.log(`\n✗ ${falhas.length} falha(s):`);
  falhas.forEach((f) => console.log('   - ' + f));
  process.exit(1);
}
console.log('\n✓ Motor da dança: tudo certo.\n');
