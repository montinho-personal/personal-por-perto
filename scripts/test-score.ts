/**
 * Testes do motor "Personal Score".
 *
 * Esta é a ferramenta com maior risco reputacional do portal: ela avalia o
 * trabalho de terceiros. Os invariantes de TOM são, por isso, mais
 * importantes que os de aritmética — nenhum texto pode dizer que um
 * profissional é ruim, sugerir troca ou insinuar má-fé.
 *
 * O invariante estrutural mais importante é o da persona D: quem comprou
 * uma planilha não pode ser avaliado pelos critérios de um personal
 * presencial premium.
 *
 * Uso: npm run test:score
 */
import { existsSync } from 'node:fs';
import { avaliarAcompanhamento, pilaresPorServico, type ScoreRespostas } from '../src/lib/personalScore';

interface Persona {
  nome: string;
  r: ScoreRespostas;
}

const personas: Persona[] = [
  {
    nome: 'A — Presencial individual, tudo bem feito',
    r: {
      tipoServico: 'presencialIndividual',
      avaliacaoInicial: ['objetivo', 'experiencia', 'rotina', 'dias', 'limitacoes'],
      personalizacao: 'claramente',
      rotinaFit: 'sim',
      progressao: 'metodoClaro',
      monitoramento: 'sempre',
      ajustes: 'entendoGeralmente',
      execucao: 'frequencia',
      metas: 'sim',
      comunicacao: 'sim',
      adaptabilidade: 'sim',
      explicacao: 'sim',
      plateau: 'investigaEAjusta',
    },
  },
  {
    nome: 'B — Presencial, treino genérico, sem registro, simpático',
    r: {
      tipoServico: 'presencialIndividual',
      avaliacaoInicial: ['objetivo'],
      personalizacao: 'muitoGenerico',
      rotinaFit: 'quaseSempre',
      progressao: 'sempreParecido',
      monitoramento: 'nunca',
      ajustes: 'quaseNuncaMuda',
      execucao: 'quandoNecessario',
      metas: 'nao',
      comunicacao: 'sim',
      adaptabilidade: 'asVezes',
      explicacao: 'asVezes',
      plateau: 'quaseNadaMuda',
    },
  },
  {
    nome: 'C — Online completo: correção por vídeo, WhatsApp, ajustes mensais',
    r: {
      tipoServico: 'online',
      avaliacaoInicial: ['objetivo', 'experiencia', 'rotina', 'dias', 'tempo', 'historico'],
      personalizacao: 'claramente',
      rotinaFit: 'sim',
      progressao: 'metodoClaro',
      monitoramento: 'sempre',
      ajustes: 'entendoGeralmente',
      execucao: 'onlinePorVideo',
      metas: 'sim',
      comunicacao: 'sim',
      adaptabilidade: 'sim',
      explicacao: 'sim',
      plateau: 'investigaEAjusta',
    },
  },
  {
    nome: 'D — Planilha entregue uma vez, sem suporte (não penalizar o que não foi vendido)',
    r: {
      tipoServico: 'planilha',
      avaliacaoInicial: ['objetivo', 'experiencia', 'dias', 'tempo'],
      personalizacao: 'boaParte',
      rotinaFit: 'sim',
      progressao: 'metodoClaro',
      ajustes: 'quaseNuncaMuda',
      metas: 'sim',
      explicacao: 'normalmente',
      plateau: 'nuncaAconteceu',
    },
  },
  {
    nome: 'E — Treino excelente, mas o aluno não consegue cumprir',
    r: {
      tipoServico: 'presencialIndividual',
      avaliacaoInicial: ['objetivo', 'experiencia', 'rotina', 'historico', 'limitacoes'],
      personalizacao: 'claramente',
      rotinaFit: 'dificilmente',
      progressao: 'metodoClaro',
      monitoramento: 'frequentemente',
      ajustes: 'entendoGeralmente',
      execucao: 'frequencia',
      metas: 'sim',
      comunicacao: 'geralmente',
      adaptabilidade: 'dificilmente',
      explicacao: 'sim',
      plateau: 'conversamos',
    },
  },
  {
    nome: 'F — Profissional parece bom, mas o aluno não entende nada do plano',
    r: {
      tipoServico: 'presencialIndividual',
      avaliacaoInicial: ['objetivo', 'experiencia', 'rotina', 'dias'],
      personalizacao: 'boaParte',
      rotinaFit: 'quaseSempre',
      progressao: 'personalOrienta',
      monitoramento: 'frequentemente',
      ajustes: 'mudaSemExplicacao',
      execucao: 'frequencia',
      metas: 'nao',
      comunicacao: 'geralmente',
      adaptabilidade: 'sim',
      explicacao: 'raramente',
      plateau: 'soTrocaTreino',
    },
  },
  // --- Casos-limite ---
  {
    nome: 'G — Presencial em grupo (individualização menor é do modelo, não defeito)',
    r: {
      tipoServico: 'presencialGrupo',
      avaliacaoInicial: ['objetivo', 'experiencia', 'limitacoes'],
      personalizacao: 'algumasGenericas',
      rotinaFit: 'sim',
      progressao: 'personalOrienta',
      monitoramento: 'frequentemente',
      ajustes: 'entendoGeralmente',
      execucao: 'quandoNecessario',
      metas: 'sim',
      comunicacao: 'geralmente',
      adaptabilidade: 'asVezes',
      explicacao: 'normalmente',
      plateau: 'conversamos',
    },
  },
  {
    nome: 'H — Muitos "não sei": a ferramenta não pode inventar nota',
    r: {
      tipoServico: 'presencialIndividual',
      avaliacaoInicial: ['naoLembro'],
      personalizacao: 'naoSei',
      rotinaFit: 'quaseSempre',
      progressao: 'asVezes',
      monitoramento: 'naoSei',
      ajustes: 'quaseNuncaMuda',
      execucao: 'naoSeiDizer',
      metas: 'maisOuMenos',
      comunicacao: 'geralmente',
      adaptabilidade: 'nuncaPrecisei',
      explicacao: 'nuncaPerguntei',
      plateau: 'naoSei',
    },
  },
  {
    nome: 'I — Online sem nenhuma correção',
    r: {
      tipoServico: 'online',
      avaliacaoInicial: ['objetivo', 'dias'],
      personalizacao: 'algumasGenericas',
      rotinaFit: 'asVezes',
      progressao: 'asVezes',
      monitoramento: 'raramente',
      ajustes: 'normalmenteNao',
      execucao: 'onlineSemCorrecao',
      metas: 'maisOuMenos',
      comunicacao: 'depende',
      adaptabilidade: 'asVezes',
      explicacao: 'asVezes',
      plateau: 'soTrocaTreino',
    },
  },
  {
    nome: 'J — Nada foi levantado antes do treino',
    r: {
      tipoServico: 'presencialIndividual',
      avaliacaoInicial: ['nenhuma'],
      personalizacao: 'muitoGenerico',
      rotinaFit: 'frequentementeNao',
      progressao: 'naoFacoIdeia',
      monitoramento: 'nunca',
      ajustes: 'mudaSemExplicacao',
      execucao: 'raramente',
      metas: 'nao',
      comunicacao: 'raramente',
      adaptabilidade: 'nao',
      explicacao: 'raramente',
      plateau: 'quaseNadaMuda',
    },
  },
];

const falhas: string[] = [];
const assert = (c: boolean, m: string) => {
  if (!c) falhas.push(m);
};

const resultados = personas.map((p) => ({ p, res: avaliarAcompanhamento(p.r) }));

for (const { p, res } of resultados) {
  console.log('\n' + '='.repeat(80));
  console.log(p.nome);
  console.log('='.repeat(80));
  console.log(`SCORE.........: ${res.score}/100 — ${res.rotuloGeral}`);
  console.log(`VISÃO GERAL...: ${res.visaoGeral}`);
  console.log(`PILARES.......: ${res.pilares.map((x) => `${x.rotulo}: ${x.rotuloNivel}`).join(' · ')}`);
  console.log(`FORTES (${res.pontosFortes.length}):`);
  res.pontosFortes.forEach((f) => console.log(`   ✓ ${f}`));
  console.log(`ATENÇÃO (${res.atencao.length}):`);
  res.atencao.forEach((a) => console.log(`   • ${a.titulo}`));
  console.log('PERGUNTAS PARA O PROFISSIONAL:');
  res.perguntasParaOPersonal.forEach((q, i) => console.log(`   ${i + 1}. ${q}`));
  console.log(`PRÓXIMO PASSO.: [${res.proximoPasso.ferramenta}] ${res.proximoPasso.rotulo}`);
  console.log(`MONTINHO......: ${res.montinho ? 'oferecido' : 'não oferecido'}`);

  /* --- Estrutura --- */
  assert(res.score >= 0 && res.score <= 100, `${p.nome}: score fora da faixa`);
  assert(Number.isInteger(res.score), `${p.nome}: score com casa decimal (falsa precisão)`);
  assert(res.atencao.length <= 3, `${p.nome}: mais de 3 pontos de atenção`);
  assert(
    res.perguntasParaOPersonal.length >= 3 && res.perguntasParaOPersonal.length <= 5,
    `${p.nome}: número de perguntas fora de 3–5 (${res.perguntasParaOPersonal.length})`,
  );
  assert(res.limitacoes.length >= 4, `${p.nome}: seção de limitações incompleta`);
  assert(res.visaoGeral.length > 60, `${p.nome}: visão geral rasa`);
  // Os pilares mostrados precisam ser exatamente os aplicáveis ao serviço.
  const esperados = pilaresPorServico[p.r.tipoServico];
  assert(
    res.pilares.length === esperados.length && res.pilares.every((x) => esperados.includes(x.id)),
    `${p.nome}: pilares exibidos não batem com o modelo de serviço`,
  );
  for (const c of res.conteudo) {
    assert(existsSync(`src/pages${c.url.replace(/\/$/, '')}.astro`), `${p.nome}: URL inexistente ${c.url}`);
  }
  for (const a of res.atencao) {
    if (a.artigo) {
      assert(existsSync(`src/pages${a.artigo.url.replace(/\/$/, '')}.astro`), `${p.nome}: artigo inexistente ${a.artigo.url}`);
    }
  }

  /* --- TOM: o risco central desta ferramenta --- */
  const txt = JSON.stringify(res);
  assert(
    !/personal (é |está )?(ruim|péssim|fraco)|profissional ruim|mau profissional/i.test(txt),
    `${p.nome}: desqualificou o profissional`,
  );
  assert(
    !/troque de personal|troca de profissional|cancele|demita|larg(ue|a) esse/i.test(txt),
    `${p.nome}: sugeriu troca ou cancelamento`,
  );
  assert(
    !/te enrolando|enganando|má-fé|golpe|amador|despreparad/i.test(txt),
    `${p.nome}: insinuou má-fé`,
  );
  assert(!/cientificamente validad|comprovado cientific/i.test(txt), `${p.nome}: alegou validação científica`);
  assert(!/\d+[,.]\d+\/100|\d+[,.]\d+ de 100/i.test(txt), `${p.nome}: falsa precisão no score`);
  assert(!/CREF|CONFEF/i.test(txt), `${p.nome}: menção proibida a conselho`);
}

/* --------------------------- invariantes gerais ------------------------ */

console.log('\n' + '='.repeat(80));
console.log('INVARIANTES GERAIS');
console.log('='.repeat(80));

const R = (i: number) => resultados[i].res;

// A — acompanhamento consistente não recebe problema inventado.
assert(R(0).nivelGeral === 'muitoConsistente', `Persona A: esperado muitoConsistente (obteve ${R(0).nivelGeral})`);
assert(R(0).atencao.length === 0, `Persona A: inventou ${R(0).atencao.length} ponto(s) de atenção`);
assert(R(0).perguntasParaOPersonal.length >= 3, 'Persona A: mesmo sem problema, precisa entregar perguntas úteis');
console.log(`  A: ${R(0).score}/100, zero problemas inventados, ${R(0).perguntasParaOPersonal.length} perguntas úteis ✓`);

// B — individualização e progressão como pontos principais.
const idsB = R(1).atencao.map((a) => a.id);
assert(
  idsB.includes('individualizacao') && idsB.includes('progressao'),
  `Persona B: esperado individualização e progressão (obteve ${idsB.join(', ')})`,
);
console.log(`  B: ${R(1).score}/100 → ${idsB.join(', ')} ✓`);

// C — online completo NÃO pode perder ponto por ser online.
assert(R(2).nivelGeral === 'muitoConsistente', `Persona C: online completo deveria ser muitoConsistente (${R(2).nivelGeral})`);
assert(R(2).score >= R(0).score - 5, `Persona C (online) penalizado contra A (presencial): ${R(2).score} vs ${R(0).score}`);
assert(
  R(2).pontosFortes.some((f) => /vídeo/i.test(f)),
  'Persona C: correção por vídeo deveria contar como ponto forte',
);
console.log(`  C: online ${R(2).score}/100 vs presencial ${R(0).score}/100 — sem penalidade por formato ✓`);

// D — o teste mais importante: planilha avaliada pelo que foi contratado.
const pilaresD = R(3).pilares.map((x) => x.id);
assert(!pilaresD.includes('comunicacao'), 'Persona D: comunicação não deveria ser avaliada numa planilha');
assert(!pilaresD.includes('execucao'), 'Persona D: correção de execução não deveria ser avaliada numa planilha');
assert(!pilaresD.includes('monitoramento'), 'Persona D: monitoramento não deveria ser avaliado numa planilha');
assert(!pilaresD.includes('adaptabilidade'), 'Persona D: adaptabilidade não deveria ser avaliada numa planilha');
assert(R(3).score >= 70, `Persona D: planilha bem feita não pode ter score baixo (${R(3).score})`);
console.log(`  D: planilha ${R(3).score}/100 com ${pilaresD.length} pilares — só o que foi contratado ✓`);

// E — rotina como ponto principal, e o próximo passo é a ferramenta de rotina.
assert(R(4).atencao[0]?.id === 'rotinaFit', `Persona E: esperado rotinaFit primeiro (obteve ${R(4).atencao[0]?.id})`);
assert(R(4).proximoPasso.ferramenta === 'rotina', 'Persona E: próximo passo deveria ser a ferramenta de rotina');
console.log('  E: treino bom mas incompatível → ferramenta de rotina ✓');

// F — clareza como ponto principal.
assert(
  R(5).atencao.some((a) => a.id === 'clareza'),
  `Persona F: clareza deveria aparecer (obteve ${R(5).atencao.map((a) => a.id).join(', ')})`,
);
console.log('  F: profissional atuante, aluno sem clareza → clareza apontada ✓');

// G — grupo: individualização menor não derruba o resultado.
assert(R(6).score >= 65, `Persona G: formato em grupo penalizado demais (${R(6).score})`);
console.log(`  G: presencial em grupo ${R(6).score}/100 — modelo respeitado ✓`);

// H — sem dados suficientes, os pilares aparecem como "sem informação".
const semDados = R(7).pilares.filter((x) => x.nivel === 'semDados').length;
assert(semDados >= 3, `Persona H: deveria ter vários pilares sem dados (obteve ${semDados})`);
console.log(`  H: ${semDados} pilares marcados "sem informação suficiente" em vez de zerados ✓`);

// H — poucos pilares avaliados exige ressalva explícita de cobertura.
assert(!!R(7).ressalvaCobertura, 'Persona H: score parcial exibido sem ressalva de cobertura');
console.log('  H: ressalva de cobertura presente ✓');

// Quem tem o quadro completo não recebe ressalva (ela perderia o sentido).
for (const i of [0, 2, 3, 9]) {
  assert(!R(i).ressalvaCobertura, `${personas[i].nome}: ressalva de cobertura indevida`);
}
console.log('  ressalva ausente quando há informação suficiente ✓');

// I — online sem correção é apontado, mas sem condenar o formato.
assert(
  R(8).atencao.some((a) => a.id === 'execucao') || R(8).pilares.find((x) => x.id === 'execucao')!.nivel === 'revisar',
  'Persona I: ausência de correção no online deveria aparecer',
);

// J — pior caso: nunca vira ataque, e a visão geral convida à conversa.
assert(R(9).nivelGeral === 'variosPontos', `Persona J: esperado variosPontos (obteve ${R(9).nivelGeral})`);
assert(
  /antes de pensar em trocar/i.test(R(9).visaoGeral),
  'Persona J: o pior resultado precisa convidar à conversa antes da troca',
);
console.log(`  J: pior caso ${R(9).score}/100 → convida à conversa, não à troca ✓`);

// O Montinho nunca aparece quando o acompanhamento está bom.
for (const i of [0, 2, 3]) {
  assert(!R(i).montinho, `${personas[i].nome}: Montinho não deveria ser oferecido em acompanhamento consistente`);
}
console.log('  Montinho ausente nos casos de acompanhamento consistente ✓');

// Score precisa discriminar.
const scores = resultados.map((x) => x.res.score);
assert(Math.max(...scores) - Math.min(...scores) >= 40, `Score pouco discriminante: ${Math.min(...scores)}–${Math.max(...scores)}`);
console.log(`  faixa de scores: ${Math.min(...scores)}–${Math.max(...scores)} ✓`);

// Nenhuma resposta pode conter nome de profissional (não coletamos).
assert(
  !resultados.some((x) => /nome do (seu )?personal|nome do profissional/i.test(JSON.stringify(x.res))),
  'Algum resultado referencia nome de profissional',
);

console.log('\n' + '='.repeat(80));
if (falhas.length) {
  console.error(`FALHAS (${falhas.length}):`);
  falhas.forEach((f) => console.error('  ✗ ' + f));
  process.exit(1);
}
console.log('✓ Todos os testes do Personal Score passaram.');
