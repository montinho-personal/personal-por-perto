/**
 * Testes do motor "Meu treino faz sentido?".
 *
 * O risco desta ferramenta não é errar uma conta: é soar como juiz. Por
 * isso, além das personas, os invariantes checam TOM — ausência de
 * veredito absoluto, ausência de divisão tratada como universalmente
 * superior, e a presença obrigatória da seção "não dá para concluir".
 *
 * Uso: npm run test:auditoria
 */
import { existsSync } from 'node:fs';
import { analisarTreino, type AuditoriaRespostas, type Grupo, type Semana } from '../src/lib/auditoriaTreino';

/** Monta a semana a partir de segunda; dias não informados ficam vazios. */
const semana = (...dias: Grupo[][]): Semana => {
  const s: Semana = [[], [], [], [], [], [], []];
  dias.forEach((d, i) => (s[i] = d));
  return s;
};

interface Persona {
  nome: string;
  r: AuditoriaRespostas;
}

const personas: Persona[] = [
  {
    nome: 'A — Hipertrofia 5x, peito 2x / costas 2x / pernas 1x, prioridade PERNAS',
    r: {
      objetivo: 'hipertrofia',
      experiencia: '1a3anos',
      semana: semana(
        ['peito', 'triceps'],
        ['costas', 'biceps'],
        ['quadriceps', 'posterior', 'gluteos'],
        ['peito', 'triceps'],
        ['costas', 'biceps'],
      ),
      duracao: '60a90',
      exercicios: '6a7',
      progressao: 'carga',
      registro: 'sempre',
      prioridades: ['quadriceps'],
      aderencia: 'maioria',
    },
  },
  {
    nome: 'B — Iniciante 6x, mas a rotina só permite 3x',
    r: {
      objetivo: 'emagrecimento',
      experiencia: 'comecando',
      semana: semana(['peito'], ['costas'], ['ombros'], ['biceps', 'triceps'], ['quadriceps'], ['gluteos', 'posterior']),
      duracao: '45a60',
      exercicios: '6a7',
      progressao: 'naoSei',
      registro: 'nunca',
      prioridades: ['nenhuma'],
      aderencia: 'perde2mais',
    },
  },
  {
    nome: 'C — Experiente 4x Upper/Lower, registra, progressão estruturada',
    r: {
      objetivo: 'hipertrofia',
      experiencia: 'mais3anos',
      semana: semana(
        ['peito', 'costas', 'ombros', 'biceps', 'triceps'],
        ['quadriceps', 'posterior', 'gluteos', 'panturrilhas'],
        [],
        ['peito', 'costas', 'ombros', 'biceps', 'triceps'],
        ['quadriceps', 'posterior', 'gluteos', 'panturrilhas'],
      ),
      duracao: '60a90',
      exercicios: '6a7',
      progressao: 'faixaReps',
      registro: 'sempre',
      prioridades: ['nenhuma'],
      aderencia: 'sempre',
    },
  },
  {
    nome: 'D — 3x Full Body, sem progressão',
    r: {
      objetivo: 'hipertrofia',
      experiencia: '6a12m',
      semana: semana(['corpoTodo'], [], ['corpoTodo'], [], ['corpoTodo']),
      duracao: '45a60',
      exercicios: '4a5',
      progressao: 'igual',
      registro: 'asVezes',
      prioridades: ['nenhuma'],
      aderencia: 'sempre',
    },
  },
  {
    nome: 'E — 5x com mesmo grupo em dias consecutivos',
    r: {
      objetivo: 'hipertrofia',
      experiencia: '1a3anos',
      semana: semana(
        ['peito', 'triceps'],
        ['peito', 'ombros'],
        ['costas', 'biceps'],
        ['quadriceps', 'gluteos'],
        ['ombros', 'triceps'],
      ),
      duracao: '60a90',
      exercicios: '6a7',
      progressao: 'carga',
      registro: 'sempre',
      prioridades: ['peito'],
      aderencia: 'sempre',
    },
  },
  {
    nome: 'F — Iniciante 2x Full Body (frequência baixa NÃO pode ser tratada como inútil)',
    r: {
      objetivo: 'condicionamento',
      experiencia: 'comecando',
      semana: semana(['corpoTodo'], [], ['corpoTodo']),
      duracao: '30a45',
      exercicios: '4a5',
      progressao: 'repeticoes',
      registro: 'asVezes',
      prioridades: ['nenhuma'],
      aderencia: 'sempre',
    },
  },
  // --- Casos-limite (§129) ---
  {
    nome: 'G — Treino 1x por semana',
    r: {
      objetivo: 'manutencao',
      experiencia: 'irregular',
      semana: semana(['corpoTodo']),
      duracao: '45a60',
      exercicios: '4a5',
      progressao: 'faixaReps',
      registro: 'asVezes',
      prioridades: ['nenhuma'],
      aderencia: 'sempre',
    },
  },
  {
    nome: 'H — Treino 7x por semana (não pode ser condenado automaticamente)',
    r: {
      objetivo: 'hipertrofia',
      experiencia: 'mais3anos',
      semana: semana(
        ['peito', 'triceps'],
        ['costas', 'biceps'],
        ['quadriceps', 'gluteos'],
        ['ombros'],
        ['peito', 'triceps'],
        ['costas', 'biceps'],
        ['cardio'],
      ),
      duracao: '60a90',
      exercicios: '4a5',
      progressao: 'carga',
      registro: 'sempre',
      prioridades: ['nenhuma'],
      aderencia: 'sempre',
    },
  },
  {
    nome: 'I — Dados insuficientes: não sabe exercícios nem progressão',
    r: {
      objetivo: 'emagrecimento',
      experiencia: 'menos6m',
      semana: semana(['corpoTodo'], [], ['corpoTodo'], [], ['cardio']),
      duracao: 'varia',
      exercicios: 'naoSei',
      progressao: 'naoSei',
      registro: 'nunca',
      prioridades: ['nenhuma'],
      aderencia: 'maioria',
    },
  },
  {
    nome: 'J — "Bro split" clássico, 1 grupo por dia, experiente (não é erro)',
    r: {
      objetivo: 'hipertrofia',
      experiencia: 'mais3anos',
      semana: semana(['peito'], ['costas'], ['ombros'], ['biceps', 'triceps'], ['quadriceps', 'posterior', 'gluteos']),
      duracao: '60a90',
      exercicios: '8a10',
      progressao: 'carga',
      registro: 'sempre',
      prioridades: ['nenhuma'],
      aderencia: 'sempre',
    },
  },
  {
    nome: 'K — Só cardio + core (sem membros superiores)',
    r: {
      objetivo: 'emagrecimento',
      experiencia: 'comecando',
      semana: semana(['cardio', 'core'], [], ['cardio'], [], ['quadriceps', 'gluteos']),
      duracao: '30a45',
      exercicios: '3ouMenos',
      progressao: 'naoSei',
      registro: 'nunca',
      prioridades: ['gluteos'],
      aderencia: 'maioria',
    },
  },
  {
    nome: 'L — Muitos exercícios em pouco tempo',
    r: {
      objetivo: 'hipertrofia',
      experiencia: '1a3anos',
      semana: semana(['peito', 'costas', 'ombros'], [], ['quadriceps', 'posterior', 'gluteos'], [], ['peito', 'costas']),
      duracao: 'ate30',
      exercicios: 'mais10',
      progressao: 'carga',
      registro: 'sempre',
      prioridades: ['nenhuma'],
      aderencia: 'sempre',
    },
  },
];

const falhas: string[] = [];
const assert = (c: boolean, m: string) => {
  if (!c) falhas.push(m);
};

const resultados = personas.map((p) => ({ p, res: analisarTreino(p.r) }));

for (const { p, res } of resultados) {
  console.log('\n' + '='.repeat(76));
  console.log(p.nome);
  console.log('='.repeat(76));
  console.log(`VEREDITO......: ${res.vereditoTexto}  (${res.veredito})`);
  console.log(`RESUMO........: ${res.resumo}`);
  console.log(`DIAS..........: ${res.diasTreinados}`);
  console.log(`FREQUÊNCIA....: ${res.frequencia.map((f) => `${f.rotulo} ${f.vezes}x`).join(' · ') || '—'}`);
  console.log('PONTOS FORTES.:');
  res.pontosFortes.forEach((f) => console.log(`   ✓ ${f}`));
  console.log(`ATENÇÃO (${res.atencao.length}):`);
  res.atencao.forEach((i) =>
    console.log(`   [${i.nivel}/conf.${i.confianca}] ${i.titulo}\n       ${i.oQueSignifica}`),
  );
  console.log(`PROBLEMA PRINC: ${res.problemaPrincipal}`);
  console.log(`PRÓXIMO PASSO.: ${res.proximoPasso.rotulo} → ${res.proximoPasso.url}`);
  console.log(`CONTEÚDO......: ${res.conteudo.map((c) => c.url).join(', ')}`);

  /* --- Invariantes de estrutura --- */
  assert(res.atencao.length <= 3, `${p.nome}: mais de 3 alertas (${res.atencao.length})`);
  assert(res.naoDaParaConcluir.length >= 4, `${p.nome}: seção "não dá para concluir" incompleta`);
  assert(res.resumo.length > 60, `${p.nome}: resumo raso`);
  assert(Boolean(res.proximoPasso.url), `${p.nome}: sem próximo passo`);
  assert(res.conteudo.length >= 1, `${p.nome}: sem conteúdo relacionado`);
  for (const i of res.atencao) {
    assert(Boolean(i.oQueSignifica && i.porQueImporta && i.oQueRevisar), `${p.nome}: alerta "${i.id}" sem as 3 partes`);
  }
  for (const c of [...res.conteudo, ...res.atencao.map((i) => i.artigo).filter(Boolean)]) {
    const url = (c as { url: string }).url;
    assert(existsSync(`src/pages${url.replace(/\/$/, '')}.astro`), `${p.nome}: URL inexistente ${url}`);
  }

  /* --- Invariantes de TOM: o risco real desta ferramenta --- */
  const txt = JSON.stringify(res);
  assert(!/está errado|treino ruim|nunca faça|isso é errado|péssim/i.test(txt), `${p.nome}: veredito absoluto no texto`);
  assert(!/\/100|\d{1,3}%\s*de\s*(acerto|qualidade)|nota \d/i.test(txt), `${p.nome}: score numérico (falsa precisão)`);
  assert(!/vai (causar|gerar) les|risco de les/i.test(txt), `${p.nome}: alegação de lesão`);
  assert(!/garantid|com certeza você|resultado garantido/i.test(txt), `${p.nome}: promessa`);
  assert(!/CREF|CONFEF/i.test(txt), `${p.nome}: menção proibida a conselho`);
  // Nenhuma divisão pode ser declarada superior em abstrato.
  assert(
    !/(full body|ppl|push\/pull|upper\/lower) é (o )?melhor|melhor divis(ão|ao)/i.test(txt),
    `${p.nome}: tratou uma divisão como universalmente superior`,
  );
}

/* --------------------------- invariantes gerais ------------------------ */

console.log('\n' + '='.repeat(76));
console.log('INVARIANTES GERAIS');
console.log('='.repeat(76));

const R = (i: number) => resultados[i].res;

// Persona A — desalinhamento de prioridade é o esperado.
assert(
  R(0).atencao.some((i) => i.id.startsWith('prioridade')),
  'Persona A deveria receber alerta de prioridade desalinhada',
);
console.log('  A: prioridade pernas × distribuição → alerta emitido ✓');

// Persona B — aderência domina e manda para a ferramenta de rotina.
assert(R(1).problemaPrincipal === 'aderencia', `Persona B: problema principal deveria ser aderência (obteve ${R(1).problemaPrincipal})`);
assert(
  R(1).proximoPasso.url.includes('treino-para-minha-rotina'),
  'Persona B: próximo passo deveria ser a ferramenta de rotina',
);
assert(R(1).atencao[0].id === 'aderencia', 'Persona B: aderência deveria ser o primeiro alerta');
console.log('  B: aderência domina e roteia para Treino para Minha Rotina ✓');

// Persona C — análise predominantemente positiva.
assert(R(2).veredito === 'coerente', `Persona C deveria sair coerente (obteve ${R(2).veredito})`);
assert(R(2).pontosFortes.length >= 3, 'Persona C: poucos pontos fortes reconhecidos');
console.log(`  C: veredito "${R(2).vereditoTexto}" com ${R(2).pontosFortes.length} pontos fortes ✓`);

// Persona D — estrutura razoável, progressão como ponto principal.
assert(R(3).problemaPrincipal === 'progressao', `Persona D: esperado progressão (obteve ${R(3).problemaPrincipal})`);
console.log('  D: Full Body 3x → progressão como ponto principal ✓');

// Persona E — alerta de recuperação SEM afirmar erro, com confiança baixa.
const alertaE = R(4).atencao.find((i) => i.id === 'consecutivos' || i.id === 'overlap');
assert(Boolean(alertaE), 'Persona E deveria receber alerta de recuperação/sobreposição');
assert(alertaE!.confianca === 'baixa', 'Persona E: alerta de recuperação deveria ter confiança baixa');
assert(
  /não é automaticamente|dependendo do volume/i.test(alertaE!.porQueImporta),
  'Persona E: alerta de recuperação precisa contextualizar, não condenar',
);
console.log('  E: dias consecutivos → alerta com confiança baixa e contextualizado ✓');

// Persona F — 2x não pode virar alerta de frequência insuficiente.
assert(
  !R(5).atencao.some((i) => i.id === 'frequencia-objetivo'),
  'Persona F: 2x por semana não deveria gerar alerta de frequência baixa',
);
assert(R(5).pontosFortes.length >= 1, 'Persona F: deveria reconhecer pontos fortes mesmo com 2x');
console.log('  F: 2x por semana tratado como legítimo ✓');

// Persona G — 1x não quebra o motor.
assert(R(6).diasTreinados === 1, `Persona G: contagem de dias errada (${R(6).diasTreinados})`);

// Persona H — 7x não é condenado por si só.
assert(R(7).diasTreinados === 7, `Persona H: deveria contar 7 dias (${R(7).diasTreinados})`);
assert(
  !R(7).atencao.some((i) => /demais|excessiv|overtraining/i.test(i.titulo)),
  'Persona H: 7 dias não pode virar condenação automática',
);
console.log('  G/H: 1x e 7x tratados sem veredito automático ✓');

// Persona I — dados insuficientes precisam ser declarados.
assert(
  R(8).naoDaParaConcluir.some((t) => /não ter certeza|exerc[íi]cios/i.test(t)),
  'Persona I: falta de dados deveria aparecer em "não dá para concluir"',
);
console.log('  I: dados insuficientes declarados, sem invenção ✓');

// Persona J — bro split de experiente não vira alerta de complexidade.
assert(
  !R(9).atencao.some((i) => i.id === 'complexidade'),
  'Persona J: bro split de experiente não deveria gerar alerta de complexidade',
);
console.log('  J: bro split de experiente não é tratado como erro ✓');

// Persona K — ausência de superiores é detectada.
assert(
  R(10).atencao.some((i) => i.id === 'sem-superiores'),
  'Persona K: ausência de membros superiores deveria ser detectada',
);

// Persona L — incompatibilidade de duração detectada.
assert(R(11).atencao.some((i) => i.id === 'duracao'), 'Persona L: incompatibilidade tempo × exercícios não detectada');
console.log('  K/L: lacuna de superiores e excesso de exercícios detectados ✓');

// Contagem de frequência precisa estar correta (§128).
const fA = R(0).frequencia;
const peitoA = fA.find((f) => f.grupo === 'peito')!.vezes;
const quadA = fA.find((f) => f.grupo === 'quadriceps')!.vezes;
assert(peitoA === 2 && quadA === 1, `Persona A: frequência errada (peito ${peitoA}, quadríceps ${quadA})`);
// "Corpo inteiro" precisa contar para todos os grupos.
const fD = R(3).frequencia;
assert(
  fD.find((f) => f.grupo === 'peito')?.vezes === 3 && fD.find((f) => f.grupo === 'gluteos')?.vezes === 3,
  'Persona D: "corpo inteiro" deveria contar 3x para cada grupo',
);
console.log('  contagem de frequência conferida, inclusive corpo inteiro ✓');

// Variedade: as personas não podem colapsar no mesmo diagnóstico.
const problemas = new Set(resultados.map((x) => x.res.problemaPrincipal));
assert(problemas.size >= 5, `Pouca variedade de diagnóstico: ${problemas.size}`);
console.log(`  diagnósticos distintos: ${problemas.size} de ${resultados.length} personas ✓`);

console.log('\n' + '='.repeat(76));
if (falhas.length) {
  console.error(`FALHAS (${falhas.length}):`);
  falhas.forEach((f) => console.error('  ✗ ' + f));
  process.exit(1);
}
console.log('✓ Todos os testes do motor de auditoria passaram.');
