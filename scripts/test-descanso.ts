/**
 * Testes do motor da calculadora de descanso entre séries.
 *
 * O que segura a página: toda saída é uma faixa da escada (nunca "143 s"),
 * a ordem faz sentido (composto pesado > composto > localizado; força >
 * hipertrofia > resistência; falha > longe da falha), o piso de 1 minuto
 * da hipertrofia, os 20 cenários escritos à mão com a faixa esperada, a
 * busca de exercícios em português e o ajuste pela série seguinte — que
 * nunca afirma a causa da queda e respeita a fadiga esperada perto da falha.
 *
 * Uso: npm run test:descanso
 */
import {
  ATALHOS,
  DEGRAU_MAX,
  ESCADA,
  EXERCICIOS,
  FONTES,
  ajustar,
  buscaExercicios,
  calcular,
  demandaGenerica,
  esforcoDoRir,
  esforcoDoRpe,
  exercicio,
  explicacao,
  faixaAnalytics,
  faixaDasReps,
  formataFaixa,
  formataTempo,
  type Entrada,
  type Esforco,
  type FaixaReps,
  type Objetivo,
} from '../src/lib/forca/descanso';
import { existsSync } from 'node:fs';

let falhas = 0;
const ok = (cond: boolean, msg: string) => {
  if (cond) console.log(`  ✓ ${msg}`);
  else {
    falhas++;
    console.log(`  ✗ ${msg}`);
  }
};

const ex = (id: string) => exercicio(id)!;
const de = (objetivo: Objetivo, id: string, reps: FaixaReps, esforco: Esforco) =>
  calcular({ objetivo, demanda: ex(id).demanda, reps, esforco });

console.log('\nToda saída é faixa da escada');
{
  const objetivos: Objetivo[] = ['hipertrofia', 'forca', 'resistencia', 'condicionamento', 'naosei'];
  const reps: FaixaReps[] = ['1-5', '6-8', '9-12', '13-15', '16-20', '20+'];
  const esforcos: Esforco[] = ['longe', 'moderado', 'perto', 'falha'];
  let todas = 0;
  let foraDaEscada = 0;
  let semFaixa = 0;
  let inicioFora = 0;
  for (const o of objetivos)
    for (const d of ['alta', 'media', 'localizada'] as const)
      for (const r of reps)
        for (const e of esforcos) {
          const res = calcular({ objetivo: o, demanda: d, reps: r, esforco: e });
          todas++;
          if (!ESCADA.includes(res.min as never) || !ESCADA.includes(res.max as never)) foraDaEscada++;
          if (res.max <= res.min) semFaixa++;
          if (res.inicio < res.min || res.inicio > res.max) inicioFora++;
        }
  ok(foraDaEscada === 0, `as ${todas} combinações caem em degraus da escada`);
  ok(semFaixa === 0, 'todas têm mínimo menor que máximo — é faixa, não número');
  ok(inicioFora === 0, 'o ponto de partida do timer fica dentro da faixa');
}

console.log('\nOrdem: o que cansa mais pede mais');
{
  const base: Omit<Entrada, 'demanda'> = { objetivo: 'hipertrofia', reps: '6-8', esforco: 'perto' };
  const a = calcular({ ...base, demanda: 'alta' });
  const m = calcular({ ...base, demanda: 'media' });
  const l = calcular({ ...base, demanda: 'localizada' });
  ok(a.min > m.min && m.min > l.min, 'composto pesado > composto > localizado');
  const f = de('forca', 'supino', '6-8', 'perto');
  const h = de('hipertrofia', 'supino', '6-8', 'perto');
  const r = de('resistencia', 'supino', '6-8', 'perto');
  ok(f.min > h.min && h.min > r.min, 'força > hipertrofia > resistência');
  const falha = de('hipertrofia', 'supino', '9-12', 'falha');
  const longe = de('hipertrofia', 'supino', '9-12', 'longe');
  ok(falha.min > longe.min, 'até a falha pede mais que longe da falha');
  ok(de('naosei', 'supino', '9-12', 'perto').min === de('hipertrofia', 'supino', '9-12', 'perto').min, '"não sei" usa a conta de hipertrofia');
}

console.log('\nPiso e teto da hipertrofia: 1 a 4 minutos');
{
  let acima = 0;
  for (const d of ['alta', 'media', 'localizada'] as const)
    for (const r of ['1-5', '6-8', '9-12', '13-15', '16-20', '20+'] as const)
      for (const e of ['longe', 'moderado', 'perto', 'falha'] as const)
        if (calcular({ objetivo: 'hipertrofia', demanda: d, reps: r, esforco: e }).max > 240) acima++;
  ok(acima === 0, 'nenhuma combinação de hipertrofia passa de 4:00');
  const leve = de('hipertrofia', 'elevacao-lateral', '20+', 'longe');
  ok(leve.min === 60, `isolador, 20+ reps, longe da falha: começa em ${formataTempo(leve.min)}`);
  ok(leve.fatores.some((f) => f.id === 'piso'), 'e a explicação diz por que não desce');
  const resist = calcular({ objetivo: 'resistencia', demanda: 'localizada', reps: '20+', esforco: 'moderado' });
  ok(resist.min < 60, 'resistência pode descer abaixo de 1 minuto');
}

console.log('\nOs 20 cenários');
{
  type Caso = [string, Objetivo, string, FaixaReps, Esforco, string];
  const casos: Caso[] = [
    ['A · supino, 8 reps, RIR 1', 'hipertrofia', 'supino', '6-8', 'perto', '2:00 a 3:00'],
    ['B · agachamento, 8 reps, RIR 1', 'hipertrofia', 'agachamento', '6-8', 'perto', '2:30 a 4:00'],
    ['C · força, agachamento, 3 reps', 'forca', 'agachamento', '1-5', 'perto', '3:00 a 5:00'],
    ['D · força, supino, 3 reps', 'forca', 'supino', '1-5', 'perto', '3:00 a 5:00'],
    ['E · elevação lateral, 15 reps, RIR 2', 'hipertrofia', 'elevacao-lateral', '13-15', 'perto', '1:00 a 1:30'],
    ['F · rosca, 10 reps, até a falha', 'hipertrofia', 'rosca-direta', '9-12', 'falha', '1:30 a 2:00'],
    ['G · crucifixo, força, 3 reps', 'forca', 'crucifixo', '1-5', 'perto', '2:00 a 2:30'],
    ['H · resistência, extensora, 20+', 'resistencia', 'extensora', '20+', 'moderado', '0:30 a 0:45'],
    ['I · condicionamento, leg press, 15', 'condicionamento', 'leg-press', '13-15', 'perto', '1:00 a 2:00'],
    ['J · terra, 5 reps, RIR 2, hipertrofia', 'hipertrofia', 'terra', '1-5', 'perto', '2:30 a 4:00'],
    ['K · puxada, 10, moderado', 'hipertrofia', 'puxada', '9-12', 'moderado', '1:30 a 2:30'],
    ['L · remada curvada, 8, longe', 'hipertrofia', 'remada-curvada', '6-8', 'longe', '1:00 a 2:00'],
    ['M · leg press, 12, falha', 'hipertrofia', 'leg-press', '9-12', 'falha', '2:30 a 4:00'],
    ['N · tríceps, 12, perto', 'hipertrofia', 'triceps-pulley', '9-12', 'perto', '1:00 a 1:30'],
    ['O · panturrilha, 20, falha', 'hipertrofia', 'panturrilha', '16-20', 'falha', '1:00 a 1:30'],
    ['P · hip thrust, 10, perto', 'hipertrofia', 'hip-thrust', '9-12', 'perto', '2:00 a 3:00'],
    ['Q · agachamento, 20 reps, falha', 'hipertrofia', 'agachamento', '16-20', 'falha', '2:30 a 4:00'],
    ['R · desenvolvimento, força, 5', 'forca', 'desenvolvimento', '1-5', 'moderado', '2:30 a 4:00'],
    ['S · barra fixa, 6, falha', 'hipertrofia', 'barra-fixa', '6-8', 'falha', '2:30 a 4:00'],
    ['T · abdominal, resistência, 20+', 'resistencia', 'abdominal', '20+', 'longe', '0:30 a 0:45'],
  ];
  for (const [nome, o, id, r, e, esperado] of casos) {
    const res = de(o, id, r, e);
    ok(formataFaixa(res) === esperado, `${nome}: ${formataFaixa(res)} (esperado ${esperado})`);
  }
}

console.log('\nExplicação');
{
  const r = de('hipertrofia', 'supino', '6-8', 'perto');
  const t = explicacao(r, 'O supino reto');
  ok(t.startsWith('O supino reto é um exercício composto'), `começa pelo exercício: "${t.slice(0, 50)}…"`);
  ok(!/\d{3} s/.test(t), 'sem número de segundos inventado no texto');
  const f = explicacao(de('forca', 'agachamento', '1-5', 'falha'));
  ok(/poucas repetições/i.test(f) && f.includes('falha') && f.includes('força'), 'cita reps, falha e objetivo quando eles mexem na conta');
}

console.log('\nBusca de exercícios');
{
  const primeiro = (q: string) => buscaExercicios(q)[0]?.id;
  ok(primeiro('supino') === 'supino', '"supino" → supino reto');
  ok(primeiro('bench press') === 'supino', '"bench press" → supino reto');
  ok(primeiro('agachamento') === 'agachamento', '"agachamento" → agachamento livre');
  ok(primeiro('squat') === 'agachamento', '"squat" → agachamento livre');
  ok(primeiro('terra') === 'terra', '"terra" → levantamento terra');
  ok(primeiro('deadlift') === 'terra', '"deadlift" → levantamento terra');
  ok(primeiro('biceps barra') === 'rosca-direta', '"biceps barra" (sem acento) → rosca direta');
  ok(primeiro('bíceps') === 'rosca-direta', '"bíceps" → rosca direta');
  ok(primeiro('triceps') === 'triceps-pulley', '"triceps" → tríceps na polia');
  ok(primeiro('elevacao lateral') === 'elevacao-lateral', '"elevacao lateral" → elevação lateral');
  ok(primeiro('serrote') === 'remada-unilateral', '"serrote" → remada unilateral');
  ok(primeiro('leg') === 'leg-press', '"leg" → leg press');
  ok(primeiro('supi') === 'supino', '"supi" → supino reto antes das variações');
  ok(primeiro('ros') === 'rosca-direta', '"ros" → rosca direta antes das variações');
  ok(buscaExercicios('xyzw').length === 0, 'texto sem par devolve vazio');
  ok(buscaExercicios('').length === 0, 'vazio devolve vazio');
  ok(buscaExercicios('rosca').length <= 6, 'no máximo 6 sugestões');
  ok(ATALHOS.every((id) => exercicio(id)), 'os atalhos existem na base');
  const ids = new Set(EXERCICIOS.map((e) => e.id));
  ok(ids.size === EXERCICIOS.length, `${EXERCICIOS.length} exercícios, sem id repetido`);
  const artigosFaltando = EXERCICIOS.filter((e) => e.artigo).filter(
    (e) => !existsSync(`src/pages${e.artigo!.replace(/\/$/, '')}.astro`),
  );
  ok(artigosFaltando.length === 0, `todo artigo citado existe no site${artigosFaltando.length ? ': ' + artigosFaltando.map((e) => e.artigo).join(', ') : ''}`);
  ok(EXERCICIOS.every((e) => e.artigo === undefined || e.artigo.endsWith('/')), 'toda URL de artigo tem barra final');
  ok(
    EXERCICIOS.every((e) => (e.tipo === 'isolador') === (e.demanda === 'localizada')),
    'isolador ⇔ demanda localizada',
  );
}

console.log('\nExercício fora da base');
{
  ok(demandaGenerica('pesado') === 'alta', 'pesado, vários músculos → demanda alta');
  ok(demandaGenerica('intermediario') === 'media', 'vários músculos, mais leve → média');
  ok(demandaGenerica('isolador') === 'localizada', 'um músculo só → localizada');
}

console.log('\nConversões');
{
  ok(faixaDasReps(0) === null && faixaDasReps(101) === null, '0 e 101 repetições são recusadas');
  ok(faixaDasReps(1) === '1-5' && faixaDasReps(5) === '1-5', '1 e 5 → 1 a 5');
  ok(faixaDasReps(8) === '6-8' && faixaDasReps(12) === '9-12' && faixaDasReps(15) === '13-15', 'limites das faixas');
  ok(faixaDasReps(20) === '16-20' && faixaDasReps(21) === '20+' && faixaDasReps(100) === '20+', '20, 21 e 100');
  ok(esforcoDoRir(0) === 'falha' && esforcoDoRir(1) === 'perto' && esforcoDoRir(2) === 'perto', 'RIR 0 → falha; 1–2 → perto');
  ok(esforcoDoRir(3) === 'moderado' && esforcoDoRir(5) === 'longe', 'RIR 3 → moderado; 5 → longe');
  ok(esforcoDoRir(-1) === null && esforcoDoRir(11) === null, 'RIR fora de 0–10 é recusado');
  ok(esforcoDoRpe(10) === 'falha' && esforcoDoRpe(8) === 'perto' && esforcoDoRpe(6.5) === 'moderado', 'RPE 10 → falha; 8 → perto; 6,5 → moderado');
}

console.log('\nAjuste pela série seguinte');
{
  const r = de('hipertrofia', 'supino', '6-8', 'perto'); // 2:00 a 3:00, começa em 2:30
  const atual = r.degrauInicio;
  ok(ajustar(r, atual, 'manteve').mudou === 0, 'manteve → mantém o tempo');
  ok(ajustar(r, atual, 'sobrou').mudou === -1, 'já estava pronto → desce um degrau');
  ok(ajustar(r, atual, 'perdeu12').mudou === 0, 'perto da falha, perder 1–2 → mantém (é esperado)');
  const longe = de('hipertrofia', 'supino', '6-8', 'moderado');
  ok(ajustar(longe, longe.degrauInicio, 'perdeu12').mudou === 1, 'longe da falha, perder 1–2 → sobe');
  const p3 = ajustar(r, atual, 'perdeu3');
  ok(p3.degrau === atual + 2, `perdeu 3+ → sobe dois degraus (${formataTempo(ESCADA[atual])} → ${formataTempo(p3.segundos)})`);
  ok(ajustar(r, DEGRAU_MAX, 'perdeu3').segundos === 240, 'na hipertrofia, o ajuste para em 4:00');
  const forca = de('forca', 'agachamento', '1-5', 'perto');
  ok(ajustar(forca, DEGRAU_MAX, 'perdeu3').segundos === 300, 'na força, para em 5:00');
  const lat = de('hipertrofia', 'elevacao-lateral', '13-15', 'perto');
  ok(ajustar(lat, lat.degrauMin, 'sobrou').segundos >= 60, 'hipertrofia nunca desce abaixo de 1 minuto no ajuste');
  ok(ajustar(r, atual, 'perdeu3', 2).mudou === 0, 'depois de duas subidas com queda, para de subir');
  const noTeto = ajustar(r, 7, 'perdeu3');
  ok(noTeto.mudou === 0 && /no máximo/.test(noTeto.mensagem), 'no teto, não promete "o próximo tempo": fala em fadiga acumulada');
  ok(/fadiga acumulada/.test(ajustar(r, atual, 'perdeu3', 2).mensagem), '…e fala em fadiga acumulada');
  const todas = (['manteve', 'perdeu12', 'perdeu3', 'reduziu', 'sobrou'] as const).map((fb) => ajustar(r, atual, fb).mensagem);
  ok(todas.every((m) => !/porque (você )?descansou pouco|seu descanso perfeito|seu músculo (já )?recuperou/i.test(m)), 'nenhuma mensagem afirma a causa nem promete o descanso perfeito');
}

console.log('\nAnalytics e fontes');
{
  ok(faixaAnalytics(de('forca', 'agachamento', '1-5', 'perto')) === 'acima_180', 'faixa categórica, nunca o número');
  ok(faixaAnalytics(de('hipertrofia', 'elevacao-lateral', '13-15', 'perto')) === '60_120', 'isolador → 60_120');
  ok(FONTES.length >= 5 && FONTES.every((f) => f.url.startsWith('https://')), `${FONTES.length} fontes, todas com link https`);
}

console.log(falhas ? `\n✗ ${falhas} falha(s)\n` : '\n✓ Motor do descanso: tudo certo.\n');
process.exit(falhas ? 1 : 0);
