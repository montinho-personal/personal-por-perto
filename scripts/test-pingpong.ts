/**
 * Testes do motor de calorias do ping pong.
 *
 * O que segura a página: a linha do Compêndio com o código certo, as duas
 * faixas medidas, e a conferência — parado na mesa a medição fica perto da
 * tabela; com deslocamento, passa do dobro.
 *
 * Uso: npm run test:pingpong
 */
import {
  FONTES,
  MODALIDADES,
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
  kcalValida,
  minutosValidos,
  modalidade,
  parseNumero,
  pesoValido,
  simulacaoUmQuilo,
  tabelaContraMedicao,
  tabelaPorPeso,
  temFaixa,
} from '../src/lib/calorias/pingpong';

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
ok(MODALIDADES.map((m) => m.id).join(',') === 'jogo,parado,deslocamento', 'três linhas, em ordem de gasto');
ok(MODALIDADES.every((m, i) => i === 0 || m.metMin > MODALIDADES[i - 1].metMin), '  e a ordem é mesmo crescente');
ok(modalidade('jogo').metMin === 4.0 && modalidade('jogo').fonte === 'Compêndio 15660', 'jogo: 4,0, código 15660');
ok(modalidade('parado').metMin === 4.5 && modalidade('parado').metMax === 5.2, 'parado: 4,5 a 5,2');
ok(modalidade('deslocamento').metMin === 9.5 && modalidade('deslocamento').metMax === 11.5, 'com deslocamento: 9,5 a 11,5');
ok(!temFaixa('jogo') && temFaixa('parado') && temFaixa('deslocamento'), 'faixa só onde o estudo mediu mais de um treino');
ok(modalidade('inexistente').id === 'jogo', 'id desconhecido cai no jogo');

console.log('\nA conferência');
{
  const c = tabelaContraMedicao();
  ok(c.paradoMin > c.metTabela && c.paradoMax - c.metTabela < 1.5, 'parado na mesa, a medição fica logo acima da tabela');
  ok(c.vezesMin > 2, `com deslocamento, passa do dobro (${c.vezesMin.toFixed(2)}× a ${c.vezesMax.toFixed(2)}×)`);
  ok(formataFaixaMet(modalidade('deslocamento')) === '9,5 a 11,5', 'mostrado como "9,5 a 11,5"');
}

console.log('\nO cálculo');
{
  const j = deTempo(60, 70, 'jogo');
  ok(perto(j.kcalMin, 294, 0.5) && j.kcalMin === j.kcalMax, '1 hora de jogo, 70 kg: 294 kcal');
  ok(perto(j.liquidaMin, 294 - 73.5, 0.5), '  líquido: 220,5 (desconta 1 MET)');
  const d = deTempo(60, 70, 'deslocamento');
  ok(formataFaixaKcal(d.kcalMin, d.kcalMax) === '698 a 845', `1 hora com deslocamento: ${formataFaixaKcal(d.kcalMin, d.kcalMax)}`);
  const p = deTempo(30, 70, 'parado');
  ok(formataFaixaKcal(p.kcalMin, p.kcalMax) === '165 a 191', `30 min parado: ${formataFaixaKcal(p.kcalMin, p.kcalMax)}`);
  const m = deKcal(300, 70, 'deslocamento');
  ok(m.minutosMin < m.minutosMax, 'meta com faixa: minutos em ordem crescente');
  ok(formataFaixaTempo(m.minutosMin, m.minutosMax) === '21 a 26 min', `  300 kcal com deslocamento: ${formataFaixaTempo(m.minutosMin, m.minutosMax)}`);
  const um = simulacaoUmQuilo(PESO_PADRAO, 'jogo');
  ok(perto(um.minutosMin, 7700 / 4.9, 0.5), `1 kg de gordura em jogo: ${(um.minutosMin / 60).toFixed(1)} h`);
}

console.log('\nFrases e formatação');
ok(fraseContexto(70, deTempo(60, 70, 'jogo')).endsWith('294 kcal.'), 'jogo: frase termina no número');
ok(fraseContexto(70, deTempo(60, 70, 'deslocamento')).includes('698 a 845'), 'deslocamento: frase mostra a faixa');
ok(formataKcal(1234) === '1.230', 'acima de mil, arredonda na dezena');

console.log('\nValidação');
ok(parseNumero('72,5') === 72.5 && parseNumero('') === null, 'vírgula decimal e vazio');
ok(pesoValido(70) && !pesoValido(20), 'peso');
ok(minutosValidos(60) && !minutosValidos(2) && !minutosValidos(400), 'minutos entre 5 e 300');
ok(kcalValida(300) && !kcalValida(5), 'meta');

console.log('\nTabela e textos');
{
  const t = tabelaPorPeso();
  ok(t.length === 7 && t.every((l, i) => i === 0 || l.jogo > t[i - 1].jogo), 'por peso: sete linhas, crescentes');
  ok(t.every((l) => l.jogo < l.deslocamentoMin), 'em cada peso: jogo < com deslocamento');
}
ok(SEM_CONFERENCIA.length === 3, 'três coisas declaradas como fora');
ok(FONTES.length === 3, 'três fontes');
ok(NOTA_SEGURANCA.includes('médico ou fisioterapeuta'), 'segurança manda para médico ou fisioterapeuta');

console.log(falhas ? `\n✗ ${falhas} falha(s)\n` : '\n✓ tudo certo\n');
process.exit(falhas ? 1 : 0);
