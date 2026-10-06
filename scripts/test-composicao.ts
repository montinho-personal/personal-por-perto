/**
 * Testes do motor de composição corporal (src/lib/corpo/composicao.ts).
 *
 * Os valores de referência foram calculados à mão a partir das equações
 * publicadas (Woolcott & Bergman 2018; Hodgdon & Beckett 1984 / DoD;
 * Jackson & Pollock 1978; Jackson, Pollock & Ward 1980; Siri 1961;
 * Boer 1984) — conferem a implementação, não a fórmula.
 */
import {
  CORTES_CINTURA,
  FFMI_MEDIANA_JOVEM,
  boer,
  cinturaMetadeDaAltura,
  comparar,
  densidadeDobras,
  dentro,
  diasEntre,
  dobrasEstimativa,
  faixaCintura,
  faixaImc,
  faixaPctAnalytics,
  faixaRce,
  faixaRcq,
  ffmi,
  formataDelta,
  formataFaixaPct,
  formataImc,
  formataKg,
  formataPct,
  formataRazao,
  imc,
  marinha,
  massaGorda,
  massaLivreDeGordura,
  normalizaAltura,
  parseNumero,
  pesoNaFaixaImc,
  posicaoNaReferencia,
  rce,
  rcq,
  referenciaGordura,
  rfm,
  siri,
} from '../src/lib/corpo/composicao';

let falhas = 0;
const ok = (cond: boolean, msg: string) => {
  console.log(`${cond ? '  ✓' : '  ✗'} ${msg}`);
  if (!cond) falhas++;
};
const perto = (a: number, b: number, tol = 0.01) => Math.abs(a - b) <= tol;

console.log('Entrada');
{
  ok(parseNumero('80,5') === 80.5 && parseNumero('80.5') === 80.5 && parseNumero('175') === 175, '"80,5", "80.5", "175"');
  ok(parseNumero('80,') === 80, '"80," (digitando) vale 80');
  ok(parseNumero('') === null && parseNumero('abc') === null && parseNumero('-3') === null, 'vazio, letra, negativo: nada');
  const a = normalizaAltura(1.75)!;
  ok(a.cm === 175 && a.convertida, '1,75 no campo de cm vira 175 cm, avisando');
  ok(normalizaAltura(175)!.convertida === false, '175 fica 175');
  ok(!dentro('alturaCm', 20) && !dentro('pesoKg', 900) && !dentro('cinturaCm', 2), 'altura 20, peso 900, cintura 2: confira');
  ok(dentro('alturaCm', 175) && dentro('pesoKg', 80) && dentro('cinturaCm', 82), 'valores comuns passam');
}

console.log('\nRFM (Woolcott & Bergman 2018)');
{
  ok(perto(rfm(175, 90, 'm').pct, 25.1111, 0.0001), 'homem 175 cm, cintura 90 → 25,11%');
  ok(perto(rfm(165, 80, 'f').pct, 34.75, 0.0001), 'mulher 165 cm, cintura 80 → 34,75%');
  const e = rfm(175, 82, 'm');
  ok(perto(e.max - e.min, 8) && perto(e.pct - e.min, 4), 'faixa de ±4 pontos');
  ok(rfm(175, 80, 'm').pct < rfm(175, 90, 'm').pct, 'cintura maior, estimativa maior');
  // "Quantos quilos são 5 cm de cintura?" — a fórmula diz quanto a ESTIMATIVA muda.
  const d5 = rfm(175, 95, 'm').pct - rfm(175, 90, 'm').pct;
  ok(perto(d5, 2.0468, 0.001), '1,75 m: cintura 95 → 90 cm muda a estimativa em ~2 pontos');
}

console.log('\nMarinha dos EUA (Hodgdon & Beckett 1984, forma do DoD em polegadas)');
{
  const h = marinha('m', 70 * 2.54, 36 * 2.54, 15 * 2.54)!;
  ok(perto(h.pct, 21.2516, 0.001), 'homem: abdômen 36", pescoço 15", altura 70" → 21,25%');
  const m = marinha('f', 65 * 2.54, 30 * 2.54, 13 * 2.54, 40 * 2.54)!;
  ok(perto(m.pct, 31.0879, 0.001), 'mulher: cintura 30", quadril 40", pescoço 13", altura 65" → 31,09%');
  ok(perto(marinha('m', 180, 90, 40)!.pct, 18.46, 0.01), 'homem em cm (180/90/40) → 18,46% (não a versão por densidade, 18,37)');
  ok(marinha('m', 180, 38, 40) === null, 'abdômen menor que o pescoço: sem estimativa');
  ok(marinha('f', 165, 75, 33) === null, 'mulher sem quadril: sem estimativa');
}

console.log('\nDobras cutâneas (Jackson & Pollock → Siri)');
{
  ok(perto(densidadeDobras('m', 3, 60, 30), 1.057816, 0.000001), 'homem 3 dobras, soma 60, 30 anos → D 1,057816');
  ok(perto(dobrasEstimativa('m', 3, 60, 30).pct, 17.945, 0.001), '  → Siri 17,95%');
  ok(perto(densidadeDobras('m', 7, 100, 30), 1.065353, 0.000001), 'homem 7 dobras, soma 100, 30 anos → D 1,065353');
  ok(perto(dobrasEstimativa('m', 7, 100, 30).pct, 14.635, 0.001), '  → Siri 14,64%');
  ok(perto(densidadeDobras('f', 3, 60, 30), 1.044022, 0.000001), 'mulher 3 dobras, soma 60, 30 anos → D 1,044022');
  ok(perto(dobrasEstimativa('f', 3, 60, 30).pct, 24.128, 0.001), '  → Siri 24,13%');
  ok(perto(densidadeDobras('f', 7, 120, 30), 1.04485, 0.000001), 'mulher 7 dobras, soma 120, 30 anos → D 1,044850');
  ok(perto(dobrasEstimativa('f', 7, 120, 30).pct, 23.752, 0.001), '  → Siri 23,75%');
  ok(perto(siri(1.1), 0, 1e-9), 'Siri: densidade 1,1 (só massa livre de gordura) → 0%');
  ok(dobrasEstimativa('m', 7, 100, 50).pct > dobrasEstimativa('m', 7, 100, 30).pct, 'mesma soma, mais idade → mais gordura estimada');
}

console.log('\nMassas');
{
  ok(perto(massaGorda(80, 20), 16) && perto(massaLivreDeGordura(80, 20), 64), '80 kg a 20% → 16 kg de gordura, 64 kg livres de gordura');
  ok(perto(massaGorda(80, 18), 14.4) && perto(massaLivreDeGordura(80, 18), 65.6), '80 kg a 18% → 14,4 / 65,6 (exemplo do briefing)');
  ok(perto(ffmi(70, 175), 22.857, 0.001), '"70 de massa magra é bom?": com 1,75 m, FFMI 22,9');
  ok(perto(ffmi(70, 185), 20.453, 0.001), '  com 1,85 m, FFMI 20,5 — os quilos sozinhos não dizem');
  ok(FFMI_MEDIANA_JOVEM.m === 18.9 && FFMI_MEDIANA_JOVEM.f === 15.4, 'medianas de 18–34 anos (Schutz 2002)');
  ok(perto(boer('m', 80, 180), 61.42) && perto(boer('f', 60, 165), 44.865, 0.001), 'Boer: 61,42 (H 80 kg/180 cm) e 44,87 (M 60 kg/165 cm)');
}

console.log('\nIMC');
{
  ok(perto(imc(70, 175), 22.857, 0.001), '70 kg, 1,75 m → 22,9');
  ok(perto(imc(80, 175), 26.122, 0.001), '80 kg, 1,75 m → 26,1 (exemplo do briefing)');
  ok(faixaImc(22.9, 30)!.id === 'referencia' && faixaImc(26.1, 30)!.id === 'sobrepeso', 'OMS: 22,9 adequado; 26,1 sobrepeso');
  ok(faixaImc(24.99, 30)!.id === 'referencia' && faixaImc(25, 30)!.id === 'sobrepeso', 'corte em 25,0 exato');
  ok(faixaImc(18.49, 30)!.id === 'abaixo' && faixaImc(40, 30)!.id === 'obesidade3', '18,49 abaixo; 40 grau III');
  ok(faixaImc(25, 16) === null, 'menor de 18: sem classificação adulta');
  ok(faixaImc(26, 65)!.id === 'referencia' && faixaImc(26, 65)!.fonte === 'idoso', '60+: 26 é adequado pela faixa de idosos (Lipschitz)');
  ok(faixaImc(22, 65)!.id === 'abaixo' && faixaImc(27, 65)!.id === 'sobrepeso', '60+: 22 baixo peso; 27 sobrepeso');
  const pf = pesoNaFaixaImc(175);
  ok(perto(pf.min, 56.656, 0.01) && perto(pf.max, 76.256, 0.01), '1,75 m: IMC 18,5–24,9 vai de 56,7 a 76,3 kg');
}

console.log('\nCintura, cintura/altura e cintura/quadril');
{
  ok(perto(rce(80, 175), 0.4571, 0.0001) && formataRazao(rce(80, 175)) === '0,46', '80 ÷ 175 = 0,457 → "0,46"');
  ok(cinturaMetadeDaAltura(170) === 85, '"cintura ideal para 1,70 m": metade da altura são 85 cm');
  ok(faixaRce(0.39).id === 'abaixo04' && faixaRce(0.45).id === 'saudavel' && faixaRce(0.5).id === 'aumentada' && faixaRce(0.6).id === 'alta', 'faixas NICE 0,4 / 0,5 / 0,6');
  ok(perto(rcq(90, 100), 0.9) && faixaRcq(0.9, 'm').id === 'acima' && faixaRcq(0.89, 'm').id === 'abaixo', 'RCQ 0,90: no corte para homens');
  ok(faixaRcq(0.85, 'f').id === 'acima' && faixaRcq(0.84, 'f').id === 'abaixo', 'RCQ 0,85: no corte para mulheres');
  ok(CORTES_CINTURA.m[0] === 94 && CORTES_CINTURA.f[1] === 88, 'cortes da OMS: 94/102 e 80/88 (iguais aos da página de gordura visceral)');
  ok(faixaCintura(93, 'm').id === 'abaixo' && faixaCintura(94, 'm').id === 'aumentado' && faixaCintura(102, 'm').id === 'muito', 'homem: 93 / 94 / 102');
  ok(faixaCintura(79, 'f').id === 'abaixo' && faixaCintura(80, 'f').id === 'aumentado' && faixaCintura(88, 'f').id === 'muito', 'mulher: 79 / 80 / 88');
}

console.log('\nReferência de %G (Gallagher 2000)');
{
  ok(JSON.stringify(referenciaGordura('m', 30)) === JSON.stringify({ min: 8, max: 19, de: 20, ate: 39 }), 'homem 30 anos: 8–19%');
  ok(referenciaGordura('f', 47)!.min === 23 && referenciaGordura('f', 47)!.max === 34, '"mulher 47 anos": 23–34%');
  ok(referenciaGordura('m', 40)!.min === 11, '"homem 40 anos": faixa de 40–59');
  ok(referenciaGordura('f', 18)!.de === 20, '18 anos usa a faixa de 20–39 (a mais próxima)');
  ok(referenciaGordura('f', 16) === null && referenciaGordura('m', 85) === null, 'menor de 18 e 80+: sem referência');
  ok(posicaoNaReferencia(28, referenciaGordura('f', 30)!) === 'dentro' && posicaoNaReferencia(28, referenciaGordura('m', 30)!) === 'acima', '"28% é muito?" depende do sexo');
}

console.log('\nEvolução');
{
  ok(diasEntre('2026-09-01', '2026-10-01') === 30, '01/09 → 01/10: 30 dias');
  const c = comparar(
    { data: '2026-09-01', pesoKg: 80, cinturaCm: 82, pct: 18, metodo: 'rfm' },
    { data: '2026-10-01', pesoKg: 79.6, cinturaCm: 78, pct: 16.5, metodo: 'rfm' },
  );
  ok(perto(c.cintura!.delta, -4) && c.cintura!.alemDoErro && !c.peso!.alemDoErro, 'peso −0,4 kg (no erro), cintura −4 cm (além do erro)');
  ok(!!c.leitura && c.leitura.includes('compatível') && c.leitura.includes('não dizem quanto foi gordura'), 'leitura: compatível, sem afirmar recomposição');
  ok(!/ganhou músculo|trocando gordura/i.test(c.leitura!), 'nunca "ganhou músculo" nem "trocando gordura por músculo"');
  const pequena = comparar({ data: '2026-09-01', pesoKg: 80, cinturaCm: 82 }, { data: '2026-09-08', pesoKg: 80, cinturaCm: 81 });
  ok(!pequena.cintura!.alemDoErro && pequena.leitura!.includes('erro típico'), '1 cm em uma semana: dentro do erro');
  const metodos = comparar({ data: '2026-09-01', pct: 20, metodo: 'rfm' }, { data: '2026-10-01', pct: 15, metodo: 'marinha' });
  ok(metodos.pct === null && metodos.metodoDiferente, 'métodos diferentes: não compara o percentual');
  const caiu = comparar({ data: '2026-09-01', pesoKg: 90, cinturaCm: 100 }, { data: '2026-10-01', pesoKg: 88, cinturaCm: 94 });
  ok(perto(caiu.peso!.delta, -2) && perto(caiu.cintura!.delta, -6), 'exemplo do briefing: −2 kg, −6 cm');
}

console.log('\nFormatação e analytics');
{
  ok(formataPct(17.3) === '17%' && formataFaixaPct(13.3, 21.3) === '13% a 21%', '%G inteiro: nada de "17,3%"');
  ok(formataKg(14.4) === '14,4 kg' && formataImc(26.122) === '26,1', '14,4 kg; IMC 26,1');
  ok(formataDelta(-4, 'cm') === '−4 cm' && formataDelta(-1.5, 'kg') === '−1,5 kg' && formataDelta(2, 'kg') === '+2,0 kg', 'deltas com sinal');
  ok(faixaPctAnalytics(18) === '15_20' && faixaPctAnalytics(3) === 'abaixo_5' && faixaPctAnalytics(55) === 'acima_50', 'analytics: blocos de 5, nunca o valor');
}

if (falhas) {
  console.log(`\n✗ ${falhas} falha(s)`);
  process.exit(1);
}
console.log('\n✓ Motor de composição corporal: tudo certo.');
