/**
 * Testes do motor da calculadora de proteína.
 *
 * O que segura a página: cada perfil com a faixa da sua diretriz, o perfil
 * de GLP-1 sobre o peso saudável, o aviso de peso ajustado a partir de
 * IMC 30, a divisão por refeição e os textos que mandam doença renal e
 * dieta para o profissional certo.
 *
 * Uso: npm run test:proteina
 */
import {
  FONTES,
  NOTA_NAO_E_DIETA,
  NOTA_RIM,
  PERFIS,
  PERFIS_TABELA,
  arredondaGramas,
  formataFaixaGkg,
  formataFaixaGramas,
  fraseContexto,
  imc,
  parseAltura,
  perfil,
  pesoSaudavel,
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
ok(PERFIS.map((p) => p.id).join(',') === 'saude,forca,emagrecer,definicao,glp1,glp1treino,idoso', 'sete perfis: definição e Mounjaro + treino entraram em 30/09');
ok(!PERFIS.some((p) => /horm|anaboliz|testost/i.test(p.id + p.nome)), 'sem perfil de hormônio: não há diretriz que defina a faixa');
ok(perfil('saude').gkgMin === 0.8 && perfil('saude').gkgMax === 0.8, 'sem treino: 0,8 (RDA)');
ok(perfil('forca').gkgMin === 1.6 && perfil('forca').gkgMax === 2.2, 'força: 1,6 a 2,2 (Morton 2018: 1,62, IC até 2,20)');
ok(perfil('forca').fonte.includes('Bandegan'), '  força: com Bandegan (fisiculturistas, seguro em 2,2)');
ok(perfil('emagrecer').gkgMin === 1.2 && perfil('emagrecer').gkgMax === 2.0, 'emagrecer: 1,2 a 2,0');
ok(perfil('definicao').gkgMin === 2.3 && perfil('definicao').gkgMax === 3.1, 'definição: 2,3 a 3,1 (ISSN 2017, Helms 2014)');
ok(perfil('definicao').nota.includes('massa magra') && perfil('definicao').nota.includes('teto'), '  avisa que Helms deu a faixa por massa magra');
ok(perfil('glp1treino').gkgMin === 1.6 && perfil('glp1treino').gkgMax === 2.2 && perfil('glp1treino').pesoBase === 'saudavel', 'Mounjaro + treino: 1,6 a 2,2 sobre o peso saudável');
ok(perfil('glp1treino').nota.includes('combinação'), '  diz que é combinação de diretrizes, não estudo com o remédio');
ok(perfil('idoso').gkgMin === 1.0 && perfil('idoso').gkgMax === 1.2, '65+: 1,0 a 1,2 (PROT-AGE)');
ok(perfil('glp1').gkgMin === 1.2 && perfil('glp1').gkgMax === 1.6, 'Mounjaro/Ozempic: 1,2 a 1,6 (diretriz conjunta de 2025)');
ok(perfil('glp1').pesoBase === 'saudavel', '  sobre o peso saudável, não o atual');
ok(perfil('glp1').nota.includes('médico') && perfil('glp1').nota.includes('Mounjaro + treino'), '  a nota leva o médico e aponta o perfil de quem treina');
ok(perfil('emagrecer').nota.includes('perfil próprio'), 'o perfil de emagrecer aponta o de GLP-1');
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
  ok(proteina(87, 170, 'emagrecer').pesoTotalSuperestima, 'IMC 30,1: com aviso, em todo perfil que usa o peso atual');
}

console.log('\nMounjaro/Ozempic: peso saudável');
{
  ok(perto(pesoSaudavel(165), 68.06, 0.01), 'peso saudável de 1,65 m: 68 kg (IMC 25)');
  const o = proteina(110, 165, 'glp1');
  ok(o.usaPesoSaudavel && perto(o.pesoConta, 68.06, 0.01), '110 kg e 1,65 m: a conta usa 68 kg');
  ok(formataFaixaGramas(o.gramasMin, o.gramasMax) === '80 a 110', `  80 a 110 g, não 130 a 175 (mostrado "${formataFaixaGramas(o.gramasMin, o.gramasMax)}")`);
  ok(!o.pesoTotalSuperestima, '  sem aviso de teto: a conta já não usa o peso total');
  ok(fraseContexto(o).includes('68 kg') && fraseContexto(o).includes('peso saudável'), '  a frase diz qual peso entrou na conta');
  const m = proteina(60, 170, 'glp1');
  ok(!m.usaPesoSaudavel && m.pesoConta === 60, 'IMC 20,8: usa o próprio peso');
  ok(formataFaixaGramas(m.gramasMin, m.gramasMax) === '70 a 95', '  60 kg: 70 a 95 g');
  ok(!proteina(110, 165, 'emagrecer').usaPesoSaudavel, 'os outros perfis seguem no peso atual');
  const t = proteina(110, 165, 'glp1treino');
  ok(t.usaPesoSaudavel && formataFaixaGramas(t.gramasMin, t.gramasMax) === '110 a 150', `Mounjaro + treino, 110 kg e 1,65 m: 110 a 150 g (mostrado "${formataFaixaGramas(t.gramasMin, t.gramasMax)}")`);
  const d = proteina(80, 180, 'definicao');
  ok(formataFaixaGramas(d.gramasMin, d.gramasMax) === '185 a 250', `definição, 80 kg: 185 a 250 g (mostrado "${formataFaixaGramas(d.gramasMin, d.gramasMax)}")`);
}

console.log('\nValidação, tabela e textos');
ok(pesoValido(70) && !pesoValido(20) && !pesoValido(300), 'peso de 35 a 250');
ok(parseAltura('1,70') === 170 && parseAltura('165') === 165, 'altura em metro ou centímetro');
ok(arredondaGramas(112) === 110 && arredondaGramas(154) === 155, 'gramas de 5 em 5');
ok(tabelaPorPeso().length === 6 && tabelaPorPeso()[0].faixas.length === 5, 'tabela: 6 pesos × 5 perfis');
ok(!PERFIS_TABELA.some((p) => p.id.startsWith('glp1')), '  sem as colunas de GLP-1: dependem da altura, não só do peso');
ok(NOTA_RIM.includes('nefrologista'), 'doença renal: manda ao nefrologista');
ok(NOTA_NAO_E_DIETA.includes('nutricionista'), 'dieta: manda ao nutricionista');
ok(FONTES.length === 12, 'doze referências');

console.log(falhas ? `\n✗ ${falhas} falha(s)\n` : '\n✓ tudo certo\n');
process.exit(falhas ? 1 : 0);
