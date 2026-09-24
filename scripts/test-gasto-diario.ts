/**
 * Testes do motor do gasto calórico diário.
 *
 * O que segura a página: a equação de Mifflin-St Jeor nas duas versões por
 * sexo, os três estilos da FAO com as faixas certas, o exemplo de "uma hora
 * de exercício" (1,55 → 1,75) e a honestidade da faixa.
 *
 * Uso: npm run test:gasto-diario
 */
import {
  ESTILOS,
  FONTES,
  NOTA_NAO_E_DIETA,
  arredondaKcal,
  estilo,
  foraDaFaixaDoEstudo,
  formataFaixaKcal,
  formataFaixaPal,
  fraseContexto,
  gastoDiario,
  idadeValida,
  metabolismoRepouso,
  parseAltura,
  pesoValido,
  tabelaPorPeso,
} from '../src/lib/calorias/gastoDiario';

let falhas = 0;
const ok = (cond: boolean, msg: string) => {
  if (cond) console.log(`  ✓ ${msg}`);
  else {
    falhas++;
    console.log(`  ✗ ${msg}`);
  }
};
const perto = (a: number, b: number, tol: number) => Math.abs(a - b) <= tol;

console.log('\nA equação (Mifflin-St Jeor)');
ok(metabolismoRepouso('masculino', 70, 170, 30) === 1617.5, 'homem, 70 kg, 170 cm, 30 anos: 1.617,5');
ok(metabolismoRepouso('feminino', 70, 170, 30) === 1451.5, 'mulher, mesmas medidas: 1.451,5');
ok(metabolismoRepouso('masculino', 70, 170, 30) - metabolismoRepouso('feminino', 70, 170, 30) === 166, 'a diferença entre os sexos é 166, como no artigo');
ok(metabolismoRepouso('masculino', 80, 170, 30) - metabolismoRepouso('masculino', 70, 170, 30) === 100, '10 kg a mais: +100');
ok(metabolismoRepouso('masculino', 70, 170, 40) - metabolismoRepouso('masculino', 70, 170, 30) === -50, '10 anos a mais: −50');

console.log('\nOs estilos da FAO');
ok(ESTILOS.map((e) => e.id).join(',') === 'sedentario,ativo,vigoroso', 'três estilos, em ordem');
ok(estilo('sedentario').palMin === 1.4 && estilo('sedentario').palMax === 1.69, 'sedentário: 1,40 a 1,69');
ok(estilo('ativo').palMin === 1.7 && estilo('ativo').palMax === 1.99, 'ativo: 1,70 a 1,99');
ok(estilo('vigoroso').palMin === 2.0 && estilo('vigoroso').palMax === 2.4, 'vigoroso: 2,00 a 2,40');
ok(ESTILOS.every((e, i) => i === 0 || e.palMin > ESTILOS[i - 1].palMax), 'as faixas não se sobrepõem');
ok(estilo('x').id === 'sedentario', 'id desconhecido cai no sedentário');
ok(formataFaixaPal(estilo('ativo')) === '1,70 a 1,99', 'mostrado como "1,70 a 1,99"');

console.log('\nO resultado');
{
  const r = gastoDiario('masculino', 70, 170, 30, 'sedentario');
  ok(perto(r.gastoMin, 2264.5, 0.1) && perto(r.gastoMax, 2733.6, 0.1), `sedentário: ${r.gastoMin.toFixed(0)} a ${r.gastoMax.toFixed(0)}`);
  ok(formataFaixaKcal(r.gastoMin, r.gastoMax) === '2.260 a 2.730', `  mostrado como "${formataFaixaKcal(r.gastoMin, r.gastoMax)}"`);
  ok(perto(r.metabolismoMin, 1455.75, 0.01) && perto(r.metabolismoMax, 1779.25, 0.01), 'metabolismo ±10%: 1.456 a 1.779');
  ok(perto(r.umaHoraPorDia, 323.5, 0.01), `1 hora de exercício por dia: +${r.umaHoraPorDia.toFixed(1)} kcal (0,20 × metabolismo)`);
  ok(!r.foraDaFaixa, '30 anos está dentro da faixa do estudo');
  ok(fraseContexto(r).includes('fica entre 2.260 e 2.730 kcal'), 'a frase leva a faixa, em português ("entre X e Y")');
  const v = gastoDiario('masculino', 70, 170, 30, 'vigoroso');
  ok(v.gastoMin > r.gastoMax, 'vigoroso começa acima de onde o sedentário termina');
}

console.log('\nFaixa de idade e validação');
ok(foraDaFaixaDoEstudo(18) && !foraDaFaixaDoEstudo(19) && !foraDaFaixaDoEstudo(78) && foraDaFaixaDoEstudo(79), 'fora da faixa: 18 e 79; dentro: 19 e 78');
ok(idadeValida(30) && idadeValida(18) && !idadeValida(15) && !idadeValida(95), 'idade aceita de 18 a 90');
ok(pesoValido(70) && !pesoValido(20), 'peso');
ok(parseAltura('170') === 170 && parseAltura('1,70') === 170 && parseAltura('1.65') === 165, 'altura: "170", "1,70", "1.65"');
ok(parseAltura('') === null, 'altura vazia');

console.log('\nFormatação, tabela e textos');
ok(arredondaKcal(2264.5) === 2260 && arredondaKcal(2266) === 2270, 'arredonda na dezena');
{
  const t = tabelaPorPeso('ativo');
  ok(t.length === 7 && t.every((l, i) => i === 0 || l.homemMin > t[i - 1].homemMin), 'por peso: sete linhas, crescentes');
  ok(t.every((l) => l.homemMin > l.mulherMin), 'em cada peso, a faixa do homem começa acima');
}
ok(NOTA_NAO_E_DIETA.includes('nutricionista'), 'a página diz que plano alimentar é com nutricionista');
ok(FONTES.length === 4, 'quatro fontes');

console.log(falhas ? `\n✗ ${falhas} falha(s)\n` : '\n✓ tudo certo\n');
process.exit(falhas ? 1 : 0);
