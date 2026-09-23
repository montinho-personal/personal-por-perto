/**
 * Testes do motor de calorias do basquete.
 *
 * O que segura a página: as linhas do Compêndio com os códigos certos, a
 * faixa dos arremessos e a do jogo competitivo, e a conferência — o jogo
 * medido custa mais que a linha de jogo da tabela, e a página diz quanto.
 *
 * Uso: npm run test:basquete
 */
import {
  ESTUDO_JOGO,
  FONTES,
  MODALIDADES,
  NOTA_ARREMESSOS,
  NOTA_SEGURANCA,
  PESO_PADRAO,
  SEM_CONFERENCIA,
  deKcal,
  deTempo,
  formataFaixaKcal,
  formataFaixaMet,
  formataFaixaTempo,
  formataKcal,
  fraseContexto,
  jogoMedidoContraTabela,
  kcalValida,
  minutosValidos,
  modalidade,
  parseNumero,
  pesoValido,
  simulacaoUmQuilo,
  tabelaPorPeso,
  temFaixa,
} from '../src/lib/calorias/basquete';

let falhas = 0;
const ok = (cond: boolean, msg: string) => {
  if (cond) console.log(`  ✓ ${msg}`);
  else {
    falhas++;
    console.log(`  ✗ ${msg}`);
  }
};
const perto = (a: number, b: number, tol: number) => Math.abs(a - b) <= tol;

console.log('\nAs linhas');
ok(MODALIDADES.map((m) => m.id).join(',') === 'arremessos,jogo,treino,competitivo', 'quatro linhas, em ordem de gasto');
ok(MODALIDADES.every((m, i) => i === 0 || m.metMin >= MODALIDADES[i - 1].metMin), '  e a ordem é mesmo crescente');
ok(modalidade('jogo').metMin === 8.0 && modalidade('jogo').fonte === 'Compêndio 15040', 'jogo: 8,0, código 15040');
ok(modalidade('treino').metMin === 9.3 && modalidade('treino').fonte === 'Compêndio 15072', 'treino: 9,3, código 15072');
ok(modalidade('arremessos').metMin === 4.5 && modalidade('arremessos').metMax === 5.0, 'arremessos: faixa 4,5 a 5,0');
ok(temFaixa('arremessos') && temFaixa('competitivo') && !temFaixa('jogo') && !temFaixa('treino'), 'faixa só onde a fonte dá dois valores');
ok(modalidade('inexistente').id === 'jogo', 'id desconhecido cai no jogo');
ok(NOTA_ARREMESSOS.includes('4,5 e 5,0'), 'a nota dos arremessos diz os dois valores');

console.log('\nA conferência: o jogo medido');
{
  const c = jogoMedidoContraTabela();
  ok(perto(c.metMulheres, 9.543, 0.001), `mulheres: 33,4 ÷ 3,5 = ${c.metMulheres.toFixed(2)} METs`);
  ok(perto(c.metHomens, 10.543, 0.001), `homens: 36,9 ÷ 3,5 = ${c.metHomens.toFixed(2)} METs`);
  ok(c.metTabela === 8.0, 'contra a linha de jogo da tabela, 8,0');
  ok(Math.round(c.acimaMin) === 19 && Math.round(c.acimaMax) === 32, `medição ${c.acimaMin.toFixed(0)}% a ${c.acimaMax.toFixed(0)}% acima da tabela`);
  ok(modalidade('competitivo').metMin === c.metMulheres && modalidade('competitivo').metMax === c.metHomens, 'a linha competitiva é a própria medição');
  ok(perto(ESTUDO_JOGO.pctCorrendo + ESTUDO_JOGO.pctAndando + ESTUDO_JOGO.pctParado, 100, 0.2), 'correndo + andando + parado ≈ 100%');
  ok(formataFaixaMet(modalidade('competitivo')) === '9,5 a 10,5', 'mostrado como "9,5 a 10,5"');
}

console.log('\nO cálculo');
{
  const j = deTempo(60, 70, 'jogo');
  ok(perto(j.kcalMin, 588, 0.5) && j.kcalMin === j.kcalMax, '1 hora de jogo, 70 kg: 588 kcal');
  ok(perto(j.liquidaMin, 588 - 73.5, 0.5), '  líquido: 514,5 (desconta 1 MET)');
  const c = deTempo(60, 70, 'competitivo');
  ok(perto(c.kcalMin, 701.4, 0.5) && perto(c.kcalMax, 774.9, 0.5), `1 hora competitiva: ${c.kcalMin.toFixed(0)} a ${c.kcalMax.toFixed(0)} kcal`);
  const a = deTempo(30, 70, 'arremessos');
  ok(formataFaixaKcal(a.kcalMin, a.kcalMax) === '165 a 184', `30 min de arremessos: ${formataFaixaKcal(a.kcalMin, a.kcalMax)}`);
  const m = deKcal(500, 70, 'competitivo');
  ok(m.minutosMin < m.minutosMax, 'meta com faixa: minutos em ordem crescente');
  ok(perto(m.minutosMin, 500 / (10.543 * 1.225), 0.05), '  o MET maior dá o tempo menor');
  ok(formataFaixaTempo(m.minutosMin, m.minutosMax) === '39 a 43 min', `  500 kcal: ${formataFaixaTempo(m.minutosMin, m.minutosMax)}`);
  const um = simulacaoUmQuilo(PESO_PADRAO, 'jogo');
  ok(perto(um.minutosMin, 7700 / 9.8, 0.5), `1 kg de gordura em jogo: ${(um.minutosMin / 60).toFixed(1)} h`);
}

console.log('\nFrases e formatação');
ok(fraseContexto(70, deTempo(60, 70, 'jogo')).endsWith('588 kcal.'), 'jogo: frase termina no número');
ok(fraseContexto(70, deTempo(60, 70, 'competitivo')).includes('701 a 775'), 'competitivo: frase mostra a faixa');
ok(fraseContexto(70, deTempo(60, 70, 'competitivo')).includes('mulheres'), '  e diz de onde vêm as pontas');
ok(formataKcal(1234) === '1.230', 'acima de mil, arredonda na dezena');

console.log('\nValidação');
ok(parseNumero('72,5') === 72.5 && parseNumero('') === null, 'vírgula decimal e vazio');
ok(pesoValido(70) && !pesoValido(20), 'peso');
ok(minutosValidos(60) && !minutosValidos(2) && !minutosValidos(400), 'minutos entre 5 e 300');
ok(kcalValida(500) && !kcalValida(5), 'meta');

console.log('\nTabela e textos');
{
  const t = tabelaPorPeso();
  ok(t.length === 7 && t.every((l, i) => i === 0 || l.jogo > t[i - 1].jogo), 'por peso: sete linhas, crescentes');
  ok(t.every((l) => l.jogo < l.treino && l.treino < l.competitivoMin), 'em cada peso: jogo < treino < competitivo');
}
ok(SEM_CONFERENCIA.length === 4, 'quatro coisas declaradas como fora');
ok(FONTES.length === 3, 'três fontes');
ok(NOTA_SEGURANCA.includes('médico ou fisioterapeuta'), 'segurança manda para médico ou fisioterapeuta');

console.log(falhas ? `\n✗ ${falhas} falha(s)\n` : '\n✓ tudo certo\n');
process.exit(falhas ? 1 : 0);
