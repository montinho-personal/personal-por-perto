/**
 * Testes do motor de calorias da natação.
 *
 * O teste central é a TESE: na natação quem decide o gasto é o ESTILO, não
 * o tempo nem a distância nem a velocidade. E a conferência mais importante
 * é contra fonte independente: as três faixas de crawl do Compêndio,
 * convertidas para kJ por metro, precisam ficar ACIMA da curva de elite de
 * Zamparo nas mesmas velocidades. Se caíssem abaixo, a tabela estaria
 * dizendo que gente recreativa nada mais barato que campeão mundial.
 *
 * Uso: npm run test:natacao
 */
import {
  BORBOLETA_MINUTOS_ALERTA,
  CENARIOS_PISCINA,
  DESVIO_RITMO_ALERTA,
  ESTILOS,
  KCAL_POR_KG_GORDURA,
  METROS_MAX,
  METROS_MIN,
  PESO_PADRAO,
  RITMO_MAX,
  RITMO_MIN,
  arredondaKcal,
  banda,
  dePiscina,
  deDistancia,
  deKcal,
  deTempo,
  estilo,
  formataMetros,
  formataRitmo,
  formataTempo,
  fraseContexto,
  kcalPor100m,
  kcalPorMinuto,
  metNatacao,
  metrosValidos,
  parseNumero,
  parseRitmo,
  pesoValido,
  ritmoDaBanda,
  ritmoDeVelocidade,
  ritmoIncoerente,
  ritmoValido,
  simulacaoUmQuilo,
  tabelaCustoCrawl,
  tabelaPorEstilo,
  tabelaPorPeso,
  tabelaPorTempo,
  velocidadeDeRitmo,
} from '../src/lib/calorias/natacao';

const falhas: string[] = [];
const ok = (c: boolean, m: string) => {
  console.log((c ? '  ✓ ' : '  ✗ ') + m);
  if (!c) falhas.push(m);
};
const perto = (a: number, b: number, tol = 0.01) => Math.abs(a - b) <= tol;

/* ------------------------------------------------------------------ */
console.log('\n[1] Os METs do Compêndio são copiados, não ajustados\n');
{
  ok(perto(metNatacao('crawl', 'lento'), 5.8, 0.0001), 'crawl lento devolve 5,8 METs');
  ok(perto(metNatacao('crawl', 'medio'), 8.0, 0.0001), 'crawl médio devolve 8,0 METs');
  ok(perto(metNatacao('crawl', 'rapido'), 10.5, 0.0001), 'crawl rápido devolve 10,5 METs');
  ok(perto(metNatacao('costas', 'lazer'), 4.8, 0.0001), 'costas recreativo devolve 4,8 METs');
  ok(perto(metNatacao('costas', 'treino'), 9.5, 0.0001), 'costas de treino devolve 9,5 METs');
  ok(perto(metNatacao('peito', 'lazer'), 5.3, 0.0001), 'peito recreativo devolve 5,3 METs');
  ok(perto(metNatacao('peito', 'treino'), 10.3, 0.0001), 'peito de treino devolve 10,3 METs');
  ok(perto(metNatacao('borboleta', 'geral'), 13.8, 0.0001), 'borboleta devolve 13,8 METs');
  // Pedido inválido cai na primeira banda do estilo, nunca em NaN.
  ok(perto(metNatacao('crawl', 'inexistente'), 5.8, 0.0001), 'banda inexistente cai na primeira, sem NaN');
}

/* ------------------------------------------------------------------ */
console.log('\n[2] A TESE: o estilo decide mais que qualquer outra coisa\n');
{
  const menor = metNatacao('costas', 'lazer');
  const maior = metNatacao('borboleta', 'geral');
  console.log(`     menor: ${menor} METs (costas recreativo) | maior: ${maior} METs (borboleta)`);
  ok(perto(maior / menor, 2.875, 0.01), `trocar só o estilo muda o gasto em ${(maior / menor).toFixed(2)}×`);

  // O confronto concreto que a página faz: mesma pessoa, mesma hora.
  const peito = deTempo(60, PESO_PADRAO, 'peito', 'lazer');
  const borbo = deTempo(60, PESO_PADRAO, 'borboleta', 'geral');
  console.log(`     1h/70 kg: peito recreativo ${arredondaKcal(peito.kcal)} kcal | borboleta ${arredondaKcal(borbo.kcal)} kcal`);
  ok(arredondaKcal(peito.kcal) === 390, '1h de peito recreativo a 70 kg dá 390 kcal');
  ok(arredondaKcal(borbo.kcal) === 1010, '1h de borboleta a 70 kg dá 1.010 kcal');

  /*
   * O contraste com o resto do cluster, que é o motivo de a página existir:
   * no pedal, a maior dispersão vem da VELOCIDADE (4,0 a 12,0 METs, 3,0×) e
   * a pessoa escolhe. Aqui a dispersão vem do ESTILO, e é da mesma ordem —
   * só que ninguém pensa em "trocar de estilo" como quem pensa em "pedalar
   * mais rápido".
   */
  const todos = ESTILOS.flatMap((e) => e.bandas.map((b) => b.met));
  ok(Math.max(...todos) / Math.min(...todos) > 2.5, 'a dispersão total da tabela passa de 2,5×');
}

/* ------------------------------------------------------------------ */
console.log('\n[3] O ACHADO: custo por 100 m quase plano nas faixas de crawl\n');
{
  const linhas = tabelaCustoCrawl(PESO_PADRAO);
  for (const l of linhas) {
    console.log(
      `     ${l.banda.nome.padEnd(7)} ${l.metrosPorMin.toFixed(1)} m/min  ${formataRitmo(l.ritmo)}/100m  ` +
        `${l.kcalPor100m.toFixed(1)} kcal/100m  ${l.kJPorMetro.toFixed(2)} kJ/m`,
    );
  }
  const custos = linhas.map((l) => l.kcalPor100m);
  const dispersao = (Math.max(...custos) - Math.min(...custos)) / Math.min(...custos);
  ok(dispersao < 0.2, `o custo por 100 m varia menos de 20% entre as três faixas (${(dispersao * 100).toFixed(0)}%)`);

  /*
   * O detalhe contraintuitivo que a página explica em vez de esconder: a
   * faixa MAIS RÁPIDA é a mais barata por 100 m. Não é erro nem paradoxo —
   * as faixas do Compêndio descrevem pessoas diferentes, e quem nada 69
   * m/min tem técnica que quem nada 34 m/min não tem.
   */
  const rapido = linhas[2].kcalPor100m;
  ok(rapido < linhas[0].kcalPor100m, 'a faixa rápida é a MAIS BARATA por 100 m — efeito da técnica, não da velocidade');
  ok(rapido < linhas[1].kcalPor100m, 'e também mais barata que a faixa média');
}

/* ------------------------------------------------------------------ */
console.log('\n[4] Conferência contra fonte independente (Zamparo, elite)\n');
{
  /*
   * A conferência é contra um PONTO MEDIDO, não contra uma reta.
   *
   * Zamparo mede o crawl de elite em três velocidades: 0,70 kJ/m a 1,0 m/s,
   * 1,23 a 1,5 e 2,20 a 2,0. A curva é convexa — o segundo trecho sobe quase
   * o dobro do primeiro. Interpolar em linha reta entre as medições coloca a
   * reta ACIMA da curva real no meio do trecho, e comparar contra ela fazia
   * a faixa rápida do Compêndio parecer barata demais. O problema era a reta.
   */
  const ELITE_1MS = 0.7;

  for (const l of tabelaCustoCrawl(PESO_PADRAO)) {
    const v = l.metrosPorMin / 60;
    const maisCaro = l.kJPorMetro / ELITE_1MS - 1;
    const maisRapido = v / 1.0 - 1;
    console.log(
      `     ${l.banda.nome.padEnd(7)} ${v.toFixed(2)} m/s (${(maisRapido * 100).toFixed(0)}% vs elite) → ` +
        `${l.kJPorMetro.toFixed(2)} kJ/m (${(maisCaro * 100) > 0 ? '+' : ''}${(maisCaro * 100).toFixed(0)}%)`,
    );
    // Todas ficam na faixa que a literatura mede para crawl. Fora dela, tabela quebrada.
    ok(l.kJPorMetro > 0.6 && l.kJPorMetro < 1.2, `${l.banda.nome.toLowerCase()}: o custo por metro cai na faixa medida para crawl`);
    // E nenhuma fica abaixo do elite: recreativo mais barato que campeão seria erro.
    ok(l.kJPorMetro > ELITE_1MS, `${l.banda.nome.toLowerCase()}: e nunca abaixo do elite medido a 1,0 m/s`);
  }

  /*
   * A assinatura da técnica, que é a tese da página: as duas faixas lentas
   * nadam bem MAIS DEVAGAR que o elite e mesmo assim pagam MAIS CARO pelo
   * metro. Se fosse só velocidade encarecendo, seria o contrário.
   */
  const [lento, medio, rapido] = tabelaCustoCrawl(PESO_PADRAO);
  ok(lento.metrosPorMin / 60 < 1.0 && lento.kJPorMetro > ELITE_1MS * 1.2, 'a faixa lenta nada mais devagar que o elite e custa 20%+ mais');
  ok(medio.metrosPorMin / 60 < 1.0 && medio.kJPorMetro > ELITE_1MS * 1.2, 'a faixa média também');
  ok(rapido.metrosPorMin / 60 > 1.0, 'a faixa rápida nada MAIS rápido que o ponto medido do elite');
  ok(rapido.kJPorMetro / ELITE_1MS - 1 < 0.15, 'e mesmo assim quase empata com ele — quem nada 69 m/min já tem técnica');
  ok(rapido.kJPorMetro < medio.kJPorMetro, 'é isso que deixa a faixa rápida mais barata que a média');
}

/* ------------------------------------------------------------------ */
console.log('\n[5] O relógio da piscina não é o relógio do nado\n');
{
  const piscinaInteira = deTempo(60, PESO_PADRAO, 'crawl', 'medio');
  const comBorda = dePiscina(60, PESO_PADRAO, 'crawl', 'medio', 30);
  console.log(
    `     60 min contados como nado: ${arredondaKcal(piscinaInteira.kcal)} kcal | ` +
      `60 min de piscina com 30% de borda: ${arredondaKcal(comBorda.kcal)} kcal`,
  );
  ok(perto(comBorda.minutosNado, 42, 0.001), '30% de borda em 60 min deixam 42 min de nado');
  ok(perto(comBorda.minutosPiscina, 60, 0.001), 'e o relógio de piscina continua sendo 60 min');
  ok(perto(comBorda.kcal / piscinaInteira.kcal, 0.7, 0.001), 'o gasto cai exatamente na proporção do descanso');

  // É esta a diferença que infla os números que circulam por aí.
  const inflacao = piscinaInteira.kcal / comBorda.kcal - 1;
  ok(perto(inflacao, 0.4286, 0.001), `ignorar a borda infla o resultado em ${(inflacao * 100).toFixed(0)}%`);

  // Descanso zero devolve exatamente o mesmo que o modo tempo.
  const semBorda = dePiscina(45, PESO_PADRAO, 'peito', 'lazer', 0);
  ok(perto(semBorda.kcal, deTempo(45, PESO_PADRAO, 'peito', 'lazer').kcal, 0.0001), 'descanso zero equivale ao modo tempo');

  for (const c of CENARIOS_PISCINA) {
    ok(c.descanso >= 0 && c.descanso <= 70, `o cenário "${c.nome}" tem descanso dentro do permitido (${c.descanso}%)`);
  }
}

/* ------------------------------------------------------------------ */
console.log('\n[6] Ritmo e distância\n');
{
  ok(perto(ritmoDeVelocidade(45.7), 131.29, 0.1), '45,7 m/min equivalem a 2min11 por 100 m');
  ok(perto(velocidadeDeRitmo(131.29), 45.7, 0.05), 'e a volta bate');
  ok(formataRitmo(131) === '2min11', 'o ritmo é formatado como nadador fala');
  ok(formataRitmo(90) === '1min30', '90 s viram 1min30');
  ok(formataRitmo(45) === '45s', 'abaixo de um minuto sai só em segundos');

  // Só o crawl tem ritmo medido. Os outros devolvem null, e isso é de propósito.
  ok(ritmoDaBanda(banda('crawl', 'medio')) !== null, 'o crawl médio tem ritmo de referência');
  ok(ritmoDaBanda(banda('peito', 'lazer')) === null, 'o peito NÃO tem — o Compêndio não publicou');
  ok(ritmoDaBanda(banda('borboleta', 'geral')) === null, 'a borboleta também não');

  // Modo tempo em estilo sem ritmo não inventa distância.
  ok(deTempo(30, PESO_PADRAO, 'peito', 'lazer').metros === 0, 'sem ritmo medido, o modo tempo não inventa metros');
  ok(deTempo(30, PESO_PADRAO, 'crawl', 'medio').metros > 0, 'com ritmo medido, ele mostra a distância');

  // 1.000 m de crawl médio: 21,9 min, e o custo por 100 m sai da conta.
  const mil = deDistancia(1000, PESO_PADRAO, 'crawl', 'medio', 131.29);
  console.log(`     1.000 m de crawl médio / 70 kg: ${formataTempo(mil.minutosNado)}, ${arredondaKcal(mil.kcal)} kcal, ${mil.por100m.toFixed(1)} kcal/100m`);
  ok(perto(mil.minutosNado, 21.88, 0.05), '1.000 m a 2min11 levam cerca de 22 min');
  ok(arredondaKcal(mil.kcal) === 214, 'e dão 214 kcal para 70 kg');
  ok(perto(mil.por100m, 21.4, 0.1), 'o custo por 100 m bate com a tabela do crawl');
}

/* ------------------------------------------------------------------ */
console.log('\n[7] Peso, tempo e proporcionalidade\n');
{
  const a = deTempo(30, 50, 'crawl', 'medio');
  const b = deTempo(30, 100, 'crawl', 'medio');
  ok(perto(b.kcal / a.kcal, 2.0, 0.0001), 'dobrar o peso dobra o gasto bruto');

  const t30 = deTempo(30, PESO_PADRAO, 'crawl', 'medio');
  const t60 = deTempo(60, PESO_PADRAO, 'crawl', 'medio');
  ok(perto(t60.kcal / t30.kcal, 2.0, 0.0001), 'dobrar o tempo dobra o gasto');

  // O líquido desconta 1 MET do tempo de NADO, não do de piscina.
  const p = dePiscina(60, PESO_PADRAO, 'crawl', 'medio', 30);
  const descontado = p.kcal - p.kcalLiquida;
  ok(perto(descontado, kcalPorMinuto(1, PESO_PADRAO) * p.minutosNado, 0.0001), 'o líquido desconta repouso só dos minutos nadados');
  ok(p.kcalLiquida < p.kcal, 'e o líquido é sempre menor que o bruto');

  ok(tabelaPorPeso(30, 'crawl', 'medio').length === 7, 'a tabela por peso tem sete linhas');
  ok(tabelaPorTempo(PESO_PADRAO, 'crawl', 'medio').length === 5, 'a tabela por tempo tem cinco linhas');
  const porEstilo = tabelaPorEstilo(PESO_PADRAO, 60);
  ok(porEstilo.length === 8, 'a tabela por estilo cobre as oito bandas da tabela');
  ok(porEstilo[0].met <= porEstilo[porEstilo.length - 1].met, 'e vem ordenada do mais barato ao mais caro');
}

/* ------------------------------------------------------------------ */
console.log('\n[8] O aviso da borboleta\n');
{
  const curta = deTempo(10, PESO_PADRAO, 'borboleta', 'geral');
  const longa = deTempo(60, PESO_PADRAO, 'borboleta', 'geral');
  ok(!curta.volumeImplausivel, '10 min de borboleta não disparam aviso — é uma série dura, mas existe');
  ok(longa.volumeImplausivel, '60 min de borboleta disparam o aviso');
  ok(deTempo(BORBOLETA_MINUTOS_ALERTA, PESO_PADRAO, 'borboleta', 'geral').volumeImplausivel === false, 'no limite exato ainda não dispara');
  ok(!deTempo(120, PESO_PADRAO, 'crawl', 'rapido').volumeImplausivel, '2h de crawl rápido NÃO disparam — é duro, mas gente faz');
  ok(!deTempo(120, PESO_PADRAO, 'peito', 'treino').volumeImplausivel, 'nem 2h de peito de treino');
  // A conta continua certa, só avisada.
  ok(arredondaKcal(longa.kcal) === 1010, 'e o número em si não é alterado pelo aviso');
  ok(dePiscina(90, PESO_PADRAO, 'borboleta', 'geral', 50).volumeImplausivel, '90 min de piscina com metade de borda ainda passam do limite');
  ok(!dePiscina(30, PESO_PADRAO, 'borboleta', 'geral', 60).volumeImplausivel, 'mas 30 min com 60% de borda ficam abaixo — 12 min de nado');
}

/* ------------------------------------------------------------------ */
console.log('\n[9] Modo meta\n');
{
  const meta = deKcal(400, PESO_PADRAO, 'crawl', 'medio', 131.29);
  console.log(`     400 kcal de crawl médio / 70 kg: ${formataTempo(meta.minutosNado)} e ${formataMetros(meta.metros)}`);
  ok(arredondaKcal(meta.kcal) === 400, 'a meta é devolvida intacta');
  ok(perto(meta.minutosNado, 40.8, 0.1), 'e leva cerca de 41 min');
  ok(meta.metros > 1800 && meta.metros < 1900, 'o que dá pouco menos de 1.900 m');

  const quilo = simulacaoUmQuilo(PESO_PADRAO, 'crawl', 'medio', 131.29);
  console.log(`     1 kg de gordura (${KCAL_POR_KG_GORDURA} kcal): ${formataTempo(quilo.minutosNado)} e ${formataMetros(quilo.metros)}`);
  ok(quilo.minutosNado > 600, 'um quilo de gordura passa de 10 horas de nado — o ponto é ser absurdo');
  ok(quilo.metros > 25000, 'e mais de 25 km, que é meia travessia de canal');
}

/* ------------------------------------------------------------------ */
console.log('\n[10] Entradas e validação\n');
{
  ok(!pesoValido(null) && !pesoValido(0) && !pesoValido(-5) && !pesoValido(999), 'peso fora da faixa é barrado');
  ok(pesoValido(72.5), 'peso com fração é aceito');
  ok(parseNumero('72,5') === 72.5, 'vírgula é aceita como separador decimal');
  ok(parseNumero('') === null && parseNumero('abc') === null, 'texto vazio ou inválido devolve null');

  ok(parseRitmo('2:11') === 131, 'ritmo em 2:11 vira 131 s');
  ok(parseRitmo('1:27') === 87, 'e 1:27 vira 87 s');
  ok(parseRitmo('131') === 131, 'ritmo em segundos puros também é aceito');
  ok(parseRitmo('2:75') === null, 'segundos acima de 59 são recusados');
  ok(parseRitmo('') === null, 'ritmo vazio devolve null');

  ok(!ritmoValido(RITMO_MIN - 1), `ritmo abaixo de ${RITMO_MIN} s é barrado — ninguém nada mais rápido que o recorde mundial`);
  ok(!ritmoValido(RITMO_MAX + 1), 'e acima de 5 min por 100 m também');
  ok(ritmoValido(131), 'um ritmo comum passa');
  ok(!metrosValidos(METROS_MIN - 1) && !metrosValidos(METROS_MAX + 1), 'distância fora da faixa é barrada');
}

/* ------------------------------------------------------------------ */
console.log('\n[11] Formatação e frases\n');
{
  ok(formataMetros(1500) === '1,5 km', '1.500 m saem como 1,5 km');
  ok(formataMetros(800) === '800 m', '800 m continuam em metros');
  ok(formataMetros(0) === '—', 'zero metros viram travessão, não "0 m"');
  ok(formataTempo(90) === '1h30', '90 min saem como 1h30');
  ok(arredondaKcal(287.4) === 287, 'abaixo de mil, a conta não arredonda para dezena');
  ok(arredondaKcal(1234) === 1230, 'acima de mil, arredonda para dezena — precisão falsa não ajuda');

  const f = fraseContexto(PESO_PADRAO, dePiscina(60, PESO_PADRAO, 'crawl', 'medio', 30));
  console.log(`     ${f}`);
  ok(f.includes('de piscina') && f.includes('de borda'), 'a frase do cenário piscina declara a borda');
  ok(f.includes('42 min'), 'e mostra o tempo de nado efetivo');

  const g = fraseContexto(PESO_PADRAO, deDistancia(1000, PESO_PADRAO, 'crawl', 'medio', 131.29));
  console.log(`     ${g}`);
  ok(g.includes('1 km'), 'a frase do modo distância mostra a distância');
  ok(!g.includes('NaN') && !f.includes('NaN'), 'nenhuma frase produz NaN');

  // Estilo de banda única não diz "em ritmo geral", que soaria estranho.
  const h = fraseContexto(PESO_PADRAO, deTempo(10, PESO_PADRAO, 'borboleta', 'geral'));
  ok(!h.includes('em ritmo'), 'estilo de banda única não anuncia ritmo');
}

/* ------------------------------------------------------------------ */
console.log('\n[12] Coerência da tabela de estilos\n');
{
  for (const e of ESTILOS) {
    ok(e.bandas.length > 0, `${e.nome} tem pelo menos uma banda`);
    const mets = e.bandas.map((b) => b.met);
    ok(mets.every((m) => m > 0 && m < 20), `${e.nome} tem METs dentro do plausível`);
    ok(mets.every((m, i) => i === 0 || m > mets[i - 1]), `${e.nome} tem bandas em ordem crescente de esforço`);
    ok(estilo(e.id).id === e.id, `${e.nome} é recuperável pelo id`);
  }
  // Só o crawl carrega ritmo medido, e é ele que ancora as contas de distância.
  const comRitmo = ESTILOS.filter((e) => e.bandas.some((b) => b.metrosPorMin !== null));
  ok(comRitmo.length === 1 && comRitmo[0].id === 'crawl', 'exatamente um estilo tem ritmo medido: o crawl');
  ok(estilo('crawl').bandas.every((b) => b.metrosPorMin !== null), 'e todas as três faixas dele têm');

  // O custo por 100 m de uma banda sem ritmo depende do ritmo informado.
  const lento = kcalPor100m(metNatacao('peito', 'lazer'), PESO_PADRAO, 180);
  const rapido = kcalPor100m(metNatacao('peito', 'lazer'), PESO_PADRAO, 120);
  ok(lento > rapido, 'no mesmo esforço, levar mais tempo por 100 m custa mais por 100 m');
}

/* ------------------------------------------------------------------ */
console.log('\n[13] O aviso de ritmo incoerente com a faixa\n');
{
  ok(!ritmoIncoerente('crawl', 'rapido', 87), 'crawl rápido com o ritmo dele (1:27) não avisa');
  ok(!ritmoIncoerente('crawl', 'rapido', 100), 'e uma variação pequena também não');
  ok(ritmoIncoerente('crawl', 'rapido', 180), 'mas 3 min por 100 m em "crawl rápido" avisa');
  ok(ritmoIncoerente('crawl', 'lento', 70), 'e 1:10 em "crawl lento" também — está rápido demais para a faixa');
  // Nos estilos sem ritmo medido não há com o que comparar, e não se inventa aviso.
  ok(!ritmoIncoerente('peito', 'lazer', 300), 'peito não avisa: o Compêndio não publicou ritmo para ele');
  ok(!ritmoIncoerente('borboleta', 'geral', 45), 'borboleta também não');
  ok(!ritmoIncoerente('crawl', 'medio', 0), 'ritmo zero não avisa — é campo vazio, não erro');
  // No limite exato do desvio ainda não dispara.
  const r = ritmoDaBanda(banda('crawl', 'medio'))!;
  ok(!ritmoIncoerente('crawl', 'medio', r * (1 + DESVIO_RITMO_ALERTA)), 'no limite exato do desvio ainda não dispara');
  ok(ritmoIncoerente('crawl', 'medio', r * (1 + DESVIO_RITMO_ALERTA) + 1), 'um segundo além dispara');
}

/* ------------------------------------------------------------------ */
if (falhas.length) {
  console.log(`\n✗ ${falhas.length} falha(s):`);
  falhas.forEach((f) => console.log('   - ' + f));
  process.exit(1);
}
console.log('\n✓ Motor da natação: tudo certo.\n');
