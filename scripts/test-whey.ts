/**
 * Testes do motor da calculadora de whey.
 *
 * O que segura a página: as doses saem da meta da calculadora de proteína
 * menos o que a pessoa já come; zero dose quando a comida fecha a conta;
 * leitura de "comida curta" acima do teto; o custo por grama e a
 * concentração batem com a aritmética do rótulo; o ovo vem da TACO.
 *
 * Uso: npm run test:whey
 */
import {
  CLASSES,
  DOSES_TETO,
  EXEMPLO_POTE_BARATO,
  FONTES,
  NOTA_SEM_DOSE_POR_KG,
  OVOS_3_G,
  PROTEINA_DOSE_PADRAO,
  classeConcentracao,
  custo,
  diasQueDura,
  doses,
  entre,
  formataDoses,
  formataReais,
  fraseCusto,
  fraseDoses,
  porRefeicaoGkg,
} from '../src/lib/nutricao/whey';

let falhas = 0;
const ok = (cond: boolean, msg: string) => {
  if (cond) console.log(`  ✓ ${msg}`);
  else {
    falhas++;
    console.log(`  ✗ ${msg}`);
  }
};
const perto = (a: number, b: number, tol: number) => Math.abs(a - b) <= tol;

console.log('\nQuantas doses: a meta vem da calculadora de proteína');
{
  const d = doses(70, 170, 'forca', 90, 24);
  ok(perto(d.meta.gramasMin, 112, 1e-9) && perto(d.meta.gramasMax, 154, 1e-9), '70 kg, força: meta 112 a 154 g (o mesmo motor)');
  ok(perto(d.faltaMin, 22, 1e-9) && perto(d.faltaMax, 64, 1e-9), '  já come 90 g: faltam 22 a 64 g');
  ok(d.dosesMin === 1 && d.dosesMax === 3 && d.leitura === 'falta', '  em doses de 24 g: 1 a 3 doses');
  ok(fraseDoses(d).includes('1 a 3 doses') && fraseDoses(d).includes('110 a 155 g'), '  a frase leva as doses e a faixa');
  ok(!d.glp1, '  perfil de força: sem o tom de GLP-1');
}
{
  const f = doses(70, 170, 'forca', 160, 24);
  ok(f.dosesMin === 0 && f.dosesMax === 0 && f.leitura === 'fecha', 'já come 160 g: zero dose, a comida fecha');
  ok(fraseDoses(f).includes('opcional'), '  e a frase diz que whey é opcional');
  const t = doses(70, 170, 'forca', 120, 24);
  ok(t.dosesMin === 0 && t.dosesMax === 2 && t.leitura === 'topo', 'já come 120 g: bate o mínimo; até 2 doses levam ao topo');
  ok(fraseDoses(t).includes('se você quiser'), '  a frase deixa claro que é opcional');
  const m = doses(70, 170, 'forca', 0, 24);
  ok(m.dosesMin === 5 && m.dosesMax === 7 && m.leitura === 'muitas', 'não come nada: 5 a 7 doses — leitura de comida curta');
  ok(fraseDoses(m).includes('comida está curta') && fraseDoses(m).includes(`${DOSES_TETO} doses`), '  a frase manda olhar o prato antes do pote');
}
{
  // 60 g: faltaMin 52 → 3 doses > teto 2 → muitas. Confirma que o critério é o MÍNIMO.
  const s = doses(70, 170, 'forca', 60, 24);
  ok(s.dosesMin === 3 && s.leitura === 'muitas', 'já come 60 g: o mínimo já pede 3 doses, então é "muitas"');
  const q = doses(70, 170, 'forca', 70, 24);
  ok(q.dosesMin === 2 && q.dosesMax === 4 && q.leitura === 'falta', 'já come 70 g: mínimo em 2 doses, dentro do teto — "falta", mesmo com o topo em 4');
}
{
  const g = doses(110, 165, 'glp1', 50, 24);
  ok(g.meta.usaPesoSaudavel && g.glp1, 'Mounjaro, 110 kg e 1,65 m: a meta usa o peso saudável, e a leitura sabe que é GLP-1');
  ok(g.dosesMin === 2 && g.dosesMax === 3 && g.leitura === 'falta', '  já come 50 g: 2 a 3 doses');
  const gm = doses(110, 165, 'glp1', 0, 24);
  ok(gm.leitura === 'muitas' && fraseDoses(gm).includes('nutricionista') && !fraseDoses(gm).includes('comida está curta'), '  sem comer nada: a leitura de "muitas" muda de tom e manda ao nutricionista');
}
ok(doses(70, 170, 'forca', 90, 30).dosesMax === 3 && doses(70, 170, 'forca', 90, 20).dosesMax === 4, 'mais proteína por dose, menos doses');
ok(formataDoses(1, 3) === '1 a 3' && formataDoses(2, 2) === '2', 'doses mostradas como "1 a 3" ou "2"');

console.log('\nCusto-benefício: aritmética do rótulo');
{
  const c = custo(150, 900, 30, 24);
  ok(perto(c.concentracao, 80, 1e-9), 'R$ 150, 900 g, 30 g por dose, 24 g de proteína: 80% de proteína');
  ok(c.dosesPorPote === 30 && perto(c.proteinaTotalG, 720, 1e-9), '  30 doses, 720 g de proteína no pote');
  ok(perto(c.custoPorDose, 5, 1e-9) && perto(c.custoPorGrama, 150 / 720, 1e-9), '  R$ 5,00 por dose, R$ 0,208 por grama');
  ok(formataReais(c.custoPorGrama) === 'R$ 0,21' && formataReais(c.custoPorDose) === 'R$ 5,00', `  mostrado como "${formataReais(c.custoPorGrama)}" e "${formataReais(c.custoPorDose)}"`);
  ok(c.classe === 'concentrado', '  classe: concentrado comum');
  ok(fraseCusto(c).includes('R$ 0,21 por grama') && fraseCusto(c).includes('80%'), '  a frase leva o custo por grama e a concentração');
  ok(diasQueDura(c, 1) === 30 && diasQueDura(c, 2) === 15 && diasQueDura(c, 0) === 0, '  dura 30 dias a 1 dose, 15 a 2; zero dose não divide');
}
ok(classeConcentracao(90) === 'isolado' && classeConcentracao(85) === 'isolado', '85% ou mais: faixa de isolado');
ok(classeConcentracao(70) === 'concentrado' && classeConcentracao(84.9) === 'concentrado', '70 a 85%: concentrado');
ok(classeConcentracao(65) === 'baixa' && classeConcentracao(59) === 'muito-baixa', 'abaixo de 70: baixa; abaixo de 60: muito baixa');
ok(CLASSES['muito-baixa'].leitura.includes('ingredientes') && !/fraude|golpe|falso/i.test(CLASSES['muito-baixa'].leitura), 'a leitura de concentração baixa manda ler o rótulo, sem acusar');
{
  const barato = custo(EXEMPLO_POTE_BARATO.preco, 900, 30, EXEMPLO_POTE_BARATO.proteinaDose);
  const caro = custo(150, 900, 30, 24);
  ok(perto(barato.concentracao, 50, 1e-9) && barato.classe === 'muito-baixa', 'o exemplo do pote barato: 50% de proteína, classe "muito baixa"');
  ok(barato.custoPorGrama > caro.custoPorGrama && formataReais(barato.custoPorGrama) === 'R$ 0,27', `  R$ 120 a 50% custa mais por grama (${formataReais(barato.custoPorGrama)}) que R$ 150 a 80% (${formataReais(caro.custoPorGrama)}) — a conta que a página ensina`);
}

console.log('\nEquivalências e textos');
ok(perto(OVOS_3_G, 19.95, 0.01), 'três ovos de 50 g: 19,95 g de proteína (TACO: 13,3 g por 100 g)');
ok(OVOS_3_G < PROTEINA_DOSE_PADRAO, '  um pouco menos que uma dose de 24 g');
ok(perto(porRefeicaoGkg(70), 28, 1e-9), 'por refeição, 0,4 g/kg: 28 g para 70 kg (Schoenfeld e Aragon) — uma dose, não duas');
ok(NOTA_SEM_DOSE_POR_KG.includes('Não existe dose de whey por quilo'), 'a nota diz que não existe dose por kg');
ok(entre(24, 1, 100) && !entre(0, 1, 100) && !entre(null, 1, 100), 'validação de faixa');
ok(FONTES.length === 5 && FONTES.some((f) => f.rotulo.includes('TACO')), 'cinco referências, com a TACO');

console.log(falhas ? `\n✗ ${falhas} falha(s)\n` : '\n✓ tudo certo\n');
process.exit(falhas ? 1 : 0);
