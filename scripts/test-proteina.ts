/**
 * Testes do motor da calculadora de proteína.
 *
 * O que segura a página: cada perfil com a faixa da sua diretriz, o aviso
 * de peso ajustado a partir de IMC 30, a divisão por refeição e os textos
 * que mandam doença renal e dieta para o profissional certo.
 *
 * Uso: npm run test:proteina
 */
import {
  FONTES,
  NOTA_NAO_E_DIETA,
  NOTA_RIM,
  PERFIS,
  arredondaGramas,
  formataFaixaGkg,
  formataFaixaGramas,
  fraseContexto,
  imc,
  parseAltura,
  perfil,
  pesoValido,
  proteina,
  tabelaPorPeso,
} from '../src/lib/nutricao/proteina';

let falhas = 0;
const ok = (cond: boolean, msg: string) => {
  if (cond) console.log(`  ✓ ${msg}`);
  else {
    falhas++;
    console.log(`  ✗ ${msg}`);
  }
};
const perto = (a: number, b: number, tol: number) => Math.abs(a - b) <= tol;

console.log('\nAs faixas, uma por diretriz');
ok(PERFIS.map((p) => p.id).join(',') === 'saude,forca,emagrecer,idoso', 'quatro perfis — sem perfil de GLP-1, de propósito');
ok(perfil('saude').gkgMin === 0.8 && perfil('saude').gkgMax === 0.8, 'sem treino: 0,8 (RDA)');
ok(perfil('forca').gkgMin === 1.6 && perfil('forca').gkgMax === 2.2, 'força: 1,6 a 2,2 (Morton 2018: 1,62, IC até 2,20)');
ok(perfil('emagrecer').gkgMin === 1.2 && perfil('emagrecer').gkgMax === 2.0, 'emagrecer: 1,2 a 2,0');
ok(perfil('idoso').gkgMin === 1.0 && perfil('idoso').gkgMax === 1.2, '65+: 1,0 a 1,2 (PROT-AGE)');
ok(perfil('glp1').id === 'saude', 'não existe perfil de GLP-1: a meta de quem usa o remédio é com médico e nutricionista');
ok(perfil('emagrecer').nota.includes('Mounjaro') && perfil('emagrecer').nota.includes('médico'), 'o perfil de emagrecer manda quem usa Mounjaro ao médico');
ok(perfil('xyz').id === 'saude', 'id desconhecido cai no mínimo, nunca no máximo');
ok(formataFaixaGkg(perfil('saude')) === '0,8' && formataFaixaGkg(perfil('forca')) === '1,6 a 2,2', 'mostradas como "0,8" e "1,6 a 2,2"');

console.log('\nO cálculo');
{
  const r = proteina(70, 170, 'forca');
  ok(perto(r.gramasMin, 112, 1e-9) && perto(r.gramasMax, 154, 1e-9), '70 kg, força: 112 a 154 g');
  ok(formataFaixaGramas(r.gramasMin, r.gramasMax) === '110 a 155', `  mostrado como "${formataFaixaGramas(r.gramasMin, r.gramasMax)}"`);
  ok(perto(r.porRefeicaoMin, 28, 1e-9), '  em 4 refeições: 28 g cada = 0,4 g/kg por refeição (Schoenfeld e Aragon)');
  ok(!r.pesoTotalSuperestima, '  IMC 24,2: sem aviso de peso ajustado');
  ok(fraseContexto(r).includes('110 a 155 g') && fraseContexto(r).includes('Morton'), '  a frase leva a faixa e a fonte');
  const s = proteina(70, 170, 'saude');
  ok(formataFaixaGramas(s.gramasMin, s.gramasMax) === '55', 'sem treino, 70 kg: 55 g (um número só)');
  ok(proteina(70, 170, 'forca', 3).porRefeicaoMin > proteina(70, 170, 'forca', 5).porRefeicaoMin, 'menos refeições, mais por refeição');
}

console.log('\nPeso ajustado');
{
  ok(perto(imc(90, 173.2), 30, 0.01), 'IMC calculado');
  const g = proteina(120, 165, 'emagrecer');
  ok(g.pesoTotalSuperestima, 'IMC 44: o número pelo peso total vira teto');
  ok(!proteina(80, 170, 'emagrecer').pesoTotalSuperestima, 'IMC 27,7: sem aviso');
  ok(proteina(87, 170, 'emagrecer').pesoTotalSuperestima, 'IMC 30,1: com aviso, em qualquer perfil');
}

console.log('\nValidação, tabela e textos');
ok(pesoValido(70) && !pesoValido(20) && !pesoValido(300), 'peso de 35 a 250');
ok(parseAltura('1,70') === 170 && parseAltura('165') === 165, 'altura em metro ou centímetro');
ok(arredondaGramas(112) === 110 && arredondaGramas(154) === 155, 'gramas de 5 em 5');
ok(tabelaPorPeso().length === 6 && tabelaPorPeso()[0].faixas.length === 4, 'tabela: 6 pesos × 4 perfis');
ok(NOTA_RIM.includes('nefrologista'), 'doença renal: manda ao nefrologista');
ok(NOTA_NAO_E_DIETA.includes('nutricionista'), 'dieta: manda ao nutricionista');
ok(FONTES.length === 8, 'oito referências');

console.log(falhas ? `\n✗ ${falhas} falha(s)\n` : '\n✓ tudo certo\n');
process.exit(falhas ? 1 : 0);
