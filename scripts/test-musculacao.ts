/**
 * Testes do motor de calorias da musculação.
 *
 * A calculadora mora dentro de um artigo que já afirmava números — e parte
 * deles estava sem fonte ou fora dela. Os testes seguram os números novos
 * nas fontes: os três METs do Compêndio, as medições de Farinatti e
 * Castinheiras Neto, a faixa de EPOC da revisão e os 13 kcal por quilo de
 * músculo. E seguram as duas frases que a página constrói em cima deles:
 * "o tamanho do músculo decide mais que o descanso" e "a caminhada diária
 * move mais calorias na semana que três treinos".
 *
 * Uso: npm run test:musculacao
 */
import {
  EPOC_MAX,
  EPOC_MIN,
  ESTUDO_MASSA,
  FONTE_COLLINS,
  FONTE_COMPENDIO,
  FONTE_ELIA,
  FONTE_FARINATTI,
  FONTE_REVISAO_EPOC,
  FONTE_SCHUENKE,
  KCAL_DIA_POR_KG_GORDURA,
  KCAL_DIA_POR_KG_MUSCULO,
  MINUTOS_MAX,
  MINUTOS_MIN,
  MUSCULO_MAX,
  MUSCULO_MIN,
  NOTA_EPOC,
  PESO_PADRAO,
  SESSOES_MAX,
  TIPOS,
  arredondaKcal,
  deMusculo,
  deSemana,
  deSessao,
  formataKcal,
  fraseMusculo,
  fraseSemana,
  fraseSessao,
  leituraDoEstudo,
  metMusculacao,
  minutosValidos,
  musculoValido,
  parseNumero,
  pesoValido,
  sessoesValidas,
} from '../src/lib/calorias/musculacao';
import { deTempo as caminhada, ritmo } from '../src/lib/calorias/caminhada';

const falhas: string[] = [];
const ok = (c: boolean, m: string) => {
  console.log((c ? '  ✓ ' : '  ✗ ') + m);
  if (!c) falhas.push(m);
};

/* ------------------------------------------------------------------ */
console.log('\n[1] Os três tipos, todos do Compêndio 2024\n');
{
  ok(TIPOS.length === 3, 'três tipos de treino');
  ok(metMusculacao('variado') === 3.5 && metMusculacao('basicos') === 5.0 && metMusculacao('vigoroso') === 6.0,
    'com 3,5, 5,0 e 6,0 METs');
  ok(TIPOS.every((t) => /^0205[024]$/.test(t.codigo)), 'e os códigos 02054, 02052 e 02050');
  ok(FONTE_COMPENDIO.resumo.includes('02054') && FONTE_COMPENDIO.resumo.includes('02050'), 'a fonte declara os códigos');
  ok(!TIPOS.some((t) => /circuito/i.test(t.nome)), 'sem linha de circuito — o valor não foi conferido em duas fontes');
}

/* ------------------------------------------------------------------ */
console.log('\n[2] A sessão\n');
{
  const v = deSessao(60, PESO_PADRAO, 'variado');
  const b = deSessao(60, PESO_PADRAO, 'basicos');
  const g = deSessao(60, PESO_PADRAO, 'vigoroso');
  console.log(`     1 hora, 70 kg: variado ${formataKcal(v.kcal)} | básicos ${formataKcal(b.kcal)} | vigoroso ${formataKcal(g.kcal)}`);
  ok(arredondaKcal(v.kcal) === 257, 'treino variado: 257 kcal');
  ok(arredondaKcal(b.kcal) === 368, 'básicos pesados: 368 kcal');
  ok(arredondaKcal(g.kcal) === 441, 'vigoroso: 441 kcal');
  /*
   * O artigo dizia "200 a 400 kcal por hora" sem fonte. A faixa do
   * Compêndio para 70 kg vai de 257 a 441 — o topo passa dos 400, e a
   * página agora diz o número calculado.
   */
  ok(g.kcal > 400, 'o treino vigoroso passa dos 400 que o artigo dava como teto');
  ok(v.kcalLiquida < v.kcal && Math.abs(v.kcalLiquida / v.kcal - 2.5 / 3.5) < 1e-9, 'o líquido desconta 1 MET');
}

/* ------------------------------------------------------------------ */
console.log('\n[3] O estudo de massa muscular\n');
{
  const l = leituraDoEstudo();
  console.log(`     leg press / crucifixo = ${l.razaoMassa.toFixed(2)}× | descanso 1→3 min: LP ${(l.diferencaDescansoLegPress * 100).toFixed(1)}%, CF ${(l.diferencaDescansoCrucifixo * 100).toFixed(1)}%`);
  ok(l.razaoMassa > 1.6 && l.razaoMassa < 1.8, 'o exercício de muita massa custou cerca de 1,7× o de pouca');
  ok(l.diferencaDescansoLegPress < 0.05, 'e triplicar o descanso mudou o leg press em menos de 5%');
  ok(l.diferencaDescansoCrucifixo < l.razaoMassa - 1, 'o efeito do descanso é bem menor que o da massa muscular');
  ok(ESTUDO_MASSA.legPress1min === 88.7 && ESTUDO_MASSA.crucifixo3min === 54.1, 'os números são os do resumo publicado');
  ok(FONTE_FARINATTI.url.includes('21993043'), 'com o PMID conferido');
}

/* ------------------------------------------------------------------ */
console.log('\n[4] EPOC\n');
{
  ok(EPOC_MIN === 22 && EPOC_MAX === 58, 'os exemplos da revisão: 22 a 58 kcal');
  /*
   * A revisão NÃO conclui uma faixa — conclui que as diferenças de método
   * impedem cravar tendências. A primeira versão apresentava os exemplos
   * como "a faixa da revisão". Estes testes impedem a volta disso.
   */
  ok(FONTE_REVISAO_EPOC.resumo.includes('exemplos') && FONTE_REVISAO_EPOC.resumo.includes('impedem cravar'),
    'a fonte chama os números de exemplos e registra a ressalva da própria revisão');
  ok(NOTA_EPOC.includes('exemplos') && !/fica entre/.test(NOTA_EPOC), 'a nota do resultado também');
  ok(FONTE_SCHUENKE.resumo.includes('38 horas') && FONTE_SCHUENKE.resumo.includes('não diz quanto'),
    'Schuenke entra pela duração (38 h), sem número de tamanho que não conferimos');
  ok(FONTE_REVISAO_EPOC.rotulo.startsWith('Farinatti P, Castinheiras Neto AG.'), 'a revisão é citada pelos dois autores conferidos');
  // Mesmo no topo, o EPOC é uma fração pequena de uma sessão comum.
  const v = deSessao(60, PESO_PADRAO, 'variado');
  ok(EPOC_MAX / v.kcal < 0.25, `o topo da faixa é menos de um quarto de uma hora de treino variado (${((EPOC_MAX / v.kcal) * 100).toFixed(0)}%)`);
}

/* ------------------------------------------------------------------ */
console.log('\n[5] O músculo em repouso\n');
{
  ok(KCAL_DIA_POR_KG_MUSCULO === 13 && KCAL_DIA_POR_KG_GORDURA === 4.5, '13 kcal/kg/dia no músculo, 4,5 na gordura (Elia; Wang et al.)');
  ok(FONTE_ELIA.url.includes('20962155'), 'com o PMID do Wang conferido');
  const m = deMusculo(3);
  console.log(`     3 kg de músculo: ${formataKcal(m.kcalDia)} kcal/dia, ${formataKcal(m.kcalAno)} kcal/ano`);
  ok(arredondaKcal(m.kcalDia) === 39, '3 kg de músculo: 39 kcal por dia');
  ok(arredondaKcal(m.kcalAno) === 14240, 'e 14.240 kcal por ano');
  ok(m.kcalDiaSeFosseGordura / m.kcalDia < 0.4, 'o mesmo peso em gordura gastaria cerca de um terço');
  /*
   * O folclore diz "100 kcal por quilo de músculo". Com o valor medido,
   * seriam precisos quase 8 kg de músculo para 100 kcal por dia.
   */
  ok(100 / KCAL_DIA_POR_KG_MUSCULO > 7.5, 'os 100 kcal por dia do folclore exigiriam quase 8 kg de músculo');
}

/* ------------------------------------------------------------------ */
console.log('\n[6] A semana, e a comparação com a caminhada\n');
{
  const s = deSemana(3, 60, PESO_PADRAO, 'variado');
  console.log(`     3 × 1 hora de treino variado: ${formataKcal(s.kcalSemana)} kcal/semana, ${formataKcal(s.kcalMes)} kcal/mês`);
  ok(arredondaKcal(s.kcalSemana) === 772, '3 treinos de 1 hora: 772 kcal por semana');
  const m = ritmo('moderado');
  const cam = caminhada(30, PESO_PADRAO, m.velocidade, 0, m.cadencia).kcal * 7;
  console.log(`     30 min de caminhada moderada todo dia: ${formataKcal(cam)} kcal/semana`);
  ok(cam > s.kcalSemana, 'meia hora de caminhada por dia move mais que três treinos de uma hora — a frase do artigo, agora calculada');
}

/* ------------------------------------------------------------------ */
console.log('\n[7] Collins: o relógio na musculação\n');
{
  ok(FONTE_COLLINS.url.includes('2072844'), 'Collins et al. com o PMID conferido');
  ok(FONTE_COLLINS.resumo.includes('metade'), 'e a página diz o que eles disseram: cerca de metade da inclinação');
}

/* ------------------------------------------------------------------ */
console.log('\n[8] Entradas e validação\n');
{
  ok(!pesoValido(null) && !pesoValido(0) && !pesoValido(999), 'peso fora da faixa é barrado');
  ok(pesoValido(72.5) && parseNumero('72,5') === 72.5, 'peso com vírgula é aceito');
  ok(!minutosValidos(MINUTOS_MIN - 1) && !minutosValidos(MINUTOS_MAX + 1), 'minutos fora da faixa são barrados');
  ok(!sessoesValidas(0) && !sessoesValidas(SESSOES_MAX + 1) && !sessoesValidas(3.5), 'sessões: inteiro de 1 a 7');
  ok(!musculoValido(MUSCULO_MIN - 0.1) && !musculoValido(MUSCULO_MAX + 1), 'músculo fora da faixa é barrado');
  ok(musculoValido(2.5), 'e 2,5 kg passa');
}

/* ------------------------------------------------------------------ */
console.log('\n[9] Frases\n');
{
  const f1 = fraseSessao(PESO_PADRAO, deSessao(60, PESO_PADRAO, 'basicos'));
  const f2 = fraseSemana(PESO_PADRAO, deSemana(1, 45, PESO_PADRAO));
  const f3 = fraseMusculo(deMusculo(2.5));
  [f1, f2, f3].forEach((f) => console.log(`     ${f}`));
  ok(f2.includes('1 sessão de') && !f2.includes('1 sessões'), 'uma sessão no singular');
  ok(/1 sessão de .* dá aproximadamente/.test(f2), 'e o verbo concorda: "1 sessão … dá"');
  ok(/3 sessões de .* dão aproximadamente/.test(fraseSemana(PESO_PADRAO, deSemana(3, 60, PESO_PADRAO))), 'e "3 sessões … dão"');
  ok(f3.startsWith('2,5 kg'), 'músculo com vírgula decimal');
  ok(![f1, f2, f3].some((f) => /NaN|undefined|representam/.test(f)), 'sem NaN, undefined nem erro de concordância');
}

/* ------------------------------------------------------------------ */
if (falhas.length) {
  console.log(`\n✗ ${falhas.length} falha(s):`);
  falhas.forEach((f) => console.log('   - ' + f));
  process.exit(1);
}
console.log('\n✓ Motor da musculação: tudo certo.\n');
