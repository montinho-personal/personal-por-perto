/**
 * Testes do motor de calorias do vôlei.
 *
 * O que segura a página: as quatro linhas do Compêndio com os códigos
 * certos, e as duas comparações que o texto afirma — o vôlei de quadra sem
 * competição igual à caminhada leve (lida do motor da caminhada, não
 * escrita à mão) e a areia custando quase o triplo dele.
 *
 * Uso: npm run test:volei
 */
import {
  FONTE_COMPENDIO,
  KCAL_MIN,
  MINUTOS_MAX,
  MINUTOS_MIN,
  MODALIDADES,
  NOTA_AREIA,
  NOTA_SEM_MEDICAO,
  PESO_PADRAO,
  arredondaKcal,
  deKcal,
  deTempo,
  formataKcal,
  formataTempo,
  fraseContexto,
  kcalValida,
  metCaminhadaLeve,
  metVolei,
  minutosValidos,
  modalidade,
  parseNumero,
  pesoValido,
  praiaSobreRecreativo,
  simulacaoUmQuilo,
  tabelaPorPeso,
} from '../src/lib/calorias/volei';

const falhas: string[] = [];
const ok = (c: boolean, m: string) => {
  console.log((c ? '  ✓ ' : '  ✗ ') + m);
  if (!c) falhas.push(m);
};
const perto = (a: number, b: number, tol = 0.01) => Math.abs(a - b) <= tol;

console.log('\n[1] A TABELA É A DO COMPÊNDIO 2024\n');
{
  const esperado: Record<string, [number, string]> = {
    recreativo: [3.0, '15720'],
    geral: [4.0, '15710'],
    competitivo: [6.0, '15711'],
    praia: [8.0, '15725'],
  };
  ok(MODALIDADES.length === 4, 'são quatro linhas');
  for (const m of MODALIDADES) {
    const [met, cod] = esperado[m.id];
    ok(m.met === met && m.codigo === cod, `${m.nome}: ${met} METs (${cod})`);
    ok(FONTE_COMPENDIO.resumo.includes(cod), `  e o código ${cod} está na referência`);
  }
  ok(MODALIDADES.every((m, i) => i === 0 || m.met > MODALIDADES[i - 1].met), 'em ordem crescente de gasto');
  ok(modalidade('xyz').id === 'recreativo', 'modalidade desconhecida cai na primeira');
}

console.log('\n[2] AS COMPARAÇÕES QUE A PÁGINA AFIRMA\n');
{
  ok(metVolei('recreativo') === metCaminhadaLeve(), `quadra sem competição (${metVolei('recreativo')}) = caminhada leve (${metCaminhadaLeve()}), lida do motor da caminhada`);
  const x = praiaSobreRecreativo();
  console.log(`     praia ÷ quadra sem competição = ${x.toFixed(2)}×`);
  ok(x > 2.5 && x < 3, 'a areia custa "quase o triplo" — entre 2,5× e 3×');
  ok(NOTA_AREIA.includes('quase o triplo') && NOTA_AREIA.includes('8,0'), 'e a nota diz isso com o número da linha');
  ok(NOTA_SEM_MEDICAO.includes('só a tabela'), 'a falta de medição em jogo está declarada');
}

console.log('\n[3] Contas\n');
{
  const r = deTempo(60, PESO_PADRAO, 'praia');
  console.log(`     1 hora de praia, 70 kg: ${formataKcal(r.kcal)} kcal | quadra sem competição: ${formataKcal(deTempo(60, PESO_PADRAO, 'recreativo').kcal)}`);
  ok(arredondaKcal(r.kcal) === 588, '588 kcal numa hora de praia, 70 kg');
  ok(arredondaKcal(deTempo(60, PESO_PADRAO, 'recreativo').kcal) === 221, '221 numa hora de quadra sem competição');
  ok(perto(r.kcalLiquida, (8 - 1) * 3.5 * 70 / 200 * 60, 1e-9), 'o líquido desconta o repouso');
  const meta = deKcal(400, PESO_PADRAO, 'competitivo');
  ok(perto(meta.kcal, 400, 1e-9) && meta.minutos > 54 && meta.minutos < 55, `400 kcal de competitivo: ${formataTempo(meta.minutos)}`);
  const q = simulacaoUmQuilo(PESO_PADRAO, 'geral');
  ok(q.minutos > 1560 && q.minutos < 1580, `1 kg de gordura: ${formataTempo(q.minutos)} de vôlei geral (7.700 ÷ 4,9 kcal/min)`);
}

console.log('\n[4] Validação, frases e tabela\n');
{
  ok(!pesoValido(0) && pesoValido(72.5) && parseNumero('72,5') === 72.5, 'peso validado, vírgula aceita');
  ok(!minutosValidos(MINUTOS_MIN - 1) && !minutosValidos(MINUTOS_MAX + 1), 'minutos fora da faixa barrados');
  ok(kcalValida(KCAL_MIN) && !kcalValida(KCAL_MIN - 1), `meta mínima de ${KCAL_MIN} kcal`);
  const f = fraseContexto(PESO_PADRAO, deTempo(90, PESO_PADRAO, 'praia'));
  console.log(`     ${f}`);
  ok(f.includes('1h30 de vôlei de praia') && !/NaN|undefined|gastam/.test(f), 'frase limpa, sem concordância com o tempo');
  const t = tabelaPorPeso();
  ok(t.length === 7 && t.every((l) => l.praia > l.competitivo && l.competitivo > l.recreativo), 'por peso: praia > competitivo > lazer');
}

if (falhas.length) {
  console.log(`\n✗ ${falhas.length} falha(s):`);
  falhas.forEach((f) => console.log('   - ' + f));
  process.exit(1);
}
console.log('\n✓ Motor do vôlei: tudo certo.\n');
