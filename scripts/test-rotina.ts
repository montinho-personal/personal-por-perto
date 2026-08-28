/**
 * Testes do motor "Treino para Minha Rotina".
 *
 * Conferidor executável: roda as personas de referência, imprime o
 * resultado de cada uma e valida o que não pode regredir — coerência de
 * treinador experiente, ausência de promessa, respeito ao equipamento e,
 * principalmente, a regra de que disponibilidade não é obrigação.
 *
 * Uso: npm run test:rotina
 */
import { existsSync } from 'node:fs';
import { rotinaTreinoEngine, type RotinaRespostas } from '../src/lib/rotinaTreino';

interface Persona {
  nome: string;
  r: RotinaRespostas;
}

const personas: Persona[] = [
  {
    nome: 'A — Iniciante, emagrecer, 3 dias, 45min, academia, rotina fixa, constância',
    r: {
      objetivo: 'emagrecer',
      experiencia: 'comecando',
      dias: '3',
      tempo: '45a60',
      local: 'academia',
      previsibilidade: 'fixa',
      dificuldade: 'constancia',
    },
  },
  {
    nome: 'B — Experiente, hipertrofia, 5 dias, 60-75min, academia, fixa, estagnação',
    r: {
      objetivo: 'massa',
      experiencia: 'experiente',
      dias: '5',
      tempo: '60a75',
      local: 'academia',
      previsibilidade: 'fixa',
      dificuldade: 'semEvolucao',
    },
  },
  {
    nome: 'C — Voltando, 2 dias, 30min, condomínio, rotina variável, falta de tempo',
    r: {
      objetivo: 'voltar',
      experiencia: 'voltando',
      dias: '2',
      tempo: 'ate30',
      local: 'condominio',
      previsibilidade: 'mudaBastante',
      dificuldade: 'tempo',
    },
  },
  {
    nome: 'D — Experiente, 4 dias, 45-60min, academia, rotina imprevisível',
    r: {
      objetivo: 'massa',
      experiencia: 'experiente',
      dias: '4',
      tempo: '45a60',
      local: 'academia',
      previsibilidade: 'imprevisivel',
      dificuldade: 'rotinaMuda',
    },
  },
  {
    nome: 'E — Iniciante com 6 dias livres, objetivo emagrecer',
    r: {
      objetivo: 'emagrecer',
      experiencia: 'nunca',
      dias: '6',
      tempo: '45a60',
      local: 'academia',
      previsibilidade: 'fixa',
      dificuldade: 'naoSeiFazer',
    },
  },
  {
    nome: 'F — 3 dias, casa, halteres, hipertrofia',
    r: {
      objetivo: 'massa',
      experiencia: 'regular',
      dias: '3',
      tempo: '45a60',
      local: 'casa',
      equipamento: 'halteres',
      previsibilidade: 'fixa',
      dificuldade: 'progressao',
    },
  },
  {
    nome: 'G — "Começo e paro", 5 dias declarados, rotina fixa',
    r: {
      objetivo: 'saude',
      experiencia: 'regular',
      dias: '5',
      tempo: '30a45',
      local: 'academia',
      previsibilidade: 'fixa',
      dificuldade: 'comecoParo',
    },
  },
  {
    nome: 'H — Semana varia muito (dias indefinidos), ar livre',
    r: {
      objetivo: 'condicionamento',
      experiencia: 'comecando',
      dias: 'varia',
      tempo: 'varia',
      local: 'arLivre',
      previsibilidade: 'imprevisivel',
      dificuldade: 'rotinaMuda',
      cidadeSlug: 'curitiba-pr',
      cidadeNome: 'Curitiba',
    },
  },
  {
    nome: 'I — Experiente, 6 dias, tudo estável (o único caso de PPL)',
    r: {
      objetivo: 'massa',
      experiencia: 'experiente',
      dias: '6',
      tempo: '60a75',
      local: 'academia',
      previsibilidade: 'fixa',
      dificuldade: 'progressao',
    },
  },
  {
    nome: 'J — Peso corporal apenas, 3 dias, casa',
    r: {
      objetivo: 'saude',
      experiencia: 'comecando',
      dias: '3',
      tempo: '30a45',
      local: 'casa',
      equipamento: 'pesoCorporal',
      previsibilidade: 'fixa',
      dificuldade: 'naoSeiFazer',
    },
  },
];

const falhas: string[] = [];
const assert = (cond: boolean, msg: string) => {
  if (!cond) falhas.push(msg);
};

const resultados = personas.map((p) => ({ p, res: rotinaTreinoEngine(p.r) }));

for (const { p, res } of resultados) {
  console.log('\n' + '='.repeat(74));
  console.log(p.nome);
  console.log('='.repeat(74));
  console.log(`ESTRUTURA.....: ${res.divisao.nome}${res.modoSequencia ? '  [modo sequência]' : ''}`);
  console.log(`SESSÕES.......: ideal ${res.sessoesIdeais} · mínima viável ${res.sessoesMinimas}`);
  console.log(`DURAÇÃO.......: ${res.duracaoIdeal}  |  dia corrido: ${res.duracaoDiaCorrido}`);
  console.log('SEMANA........:');
  res.semanaIdeal.forEach((d) => console.log(`   ${d.rotulo.padEnd(10)} ${d.sessao ?? '—'}`));
  console.log('POR QUÊ.......:');
  res.porque.forEach((b) => console.log(`   • ${b}`));
  console.log('PRIORIDADES...:');
  res.prioridades.forEach((x) => console.log(`   ${x}`));
  console.log('EVITAR........:');
  res.evitar.forEach((x) => console.log(`   × ${x}`));
  if (res.alternativa) console.log(`ALTERNATIVA...: ${res.alternativa.divisao.nome} — ${res.alternativa.quando}`);
  if (res.observacaoEquipamento) console.log(`EQUIPAMENTO...: ${res.observacaoEquipamento}`);
  console.log(`PRÓXIMO PASSO.: ${res.proximoPasso}`);
  console.log(`MONTINHO......: [${res.montinho.nivel}] ${res.montinho.motivo}`);
  console.log(`CONTEÚDO......: ${res.conteudo.map((c) => c.url).join(', ')}`);

  // --- Invariantes por persona ---
  assert(res.porque.length >= 2, `${p.nome}: explicação rasa`);
  assert(res.prioridades.length >= 3, `${p.nome}: poucas prioridades`);
  assert(res.evitar.length >= 1, `${p.nome}: sem bloco "evitar"`);
  assert(res.sessoesMinimas < res.sessoesIdeais || res.sessoesIdeais === 1, `${p.nome}: semana mínima não é menor que a ideal`);
  assert(res.sessoesMinimas >= 1, `${p.nome}: semana mínima inválida`);
  assert(Boolean(res.alternativa), `${p.nome}: sem alternativa — nunca fingir resposta única`);
  assert(res.whatsapp.includes('Personal por Perto'), `${p.nome}: WhatsApp sem contexto de origem`);

  const txt = JSON.stringify(res);
  assert(!/\bcuras?\b|garantid|milagr|perfeito para você|com certeza/i.test(txt), `${p.nome}: promessa indevida`);
  assert(!/CREF|CONFEF/i.test(txt), `${p.nome}: menção proibida a conselho`);
  // Falsa precisão: nada de "16,7 séries" ou volume individual fechado.
  assert(!/\d+[,.]\d+\s*séries|\d+\s*séries semanais de/i.test(txt), `${p.nome}: falsa precisão de volume`);

  // Toda URL sugerida precisa existir no código-fonte.
  for (const c of res.conteudo) {
    assert(existsSync(`src/pages${c.url.replace(/\/$/, '')}.astro`), `${p.nome}: URL inexistente ${c.url}`);
  }
  if (res.divisao.artigo) {
    assert(
      existsSync(`src/pages${res.divisao.artigo.url.replace(/\/$/, '')}.astro`),
      `${p.nome}: artigo da divisão inexistente ${res.divisao.artigo.url}`,
    );
  }
}

/* --------------------------- invariantes gerais ------------------------ */

console.log('\n' + '='.repeat(74));
console.log('INVARIANTES GERAIS');
console.log('='.repeat(74));

const R = (i: number) => resultados[i].res;

// 1. Resultados realmente diferentes (§102): nada de todo mundo receber o mesmo.
const assinaturas = new Set(resultados.map((x) => `${x.res.divisao.id}|${x.res.sessoesIdeais}|${x.res.modoSequencia}`));
assert(assinaturas.size >= 6, `Pouca variedade de estruturas: ${assinaturas.size} combinações distintas`);
console.log(`  estruturas distintas: ${assinaturas.size} de ${resultados.length} personas`);

// 2. Persona E — iniciante com 6 dias NÃO pode receber 6 sessões (§72/§99).
assert(R(4).sessoesIdeais < 6, `Persona E (iniciante, 6 dias) recebeu ${R(4).sessoesIdeais} sessões — deveria reduzir`);
assert(
  R(4).porque.some((b) => /não mais|começar já na frequência máxima/i.test(b)),
  'Persona E: a redução de dias precisa ser explicada, não silenciosa',
);
console.log(`  persona E: 6 dias declarados → ${R(4).sessoesIdeais} sessões planejadas, com explicação ✓`);

// 3. Persona G — "começo e paro" com 5 dias também reduz.
assert(R(6).sessoesIdeais < 5, `Persona G (começo e paro) recebeu ${R(6).sessoesIdeais} sessões`);

// 4. Personas C, D, H — rotina instável vira sequência, nunca dia fixo (§21).
for (const i of [2, 3, 7]) {
  assert(R(i).modoSequencia, `${personas[i].nome}: rotina instável deveria virar sequência`);
  assert(
    !R(i).semanaIdeal.some((d) => /Segunda|Terça|Quarta/.test(d.rotulo)),
    `${personas[i].nome}: sequência não pode usar nomes de dias da semana`,
  );
}
console.log('  rotina instável → modo sequência, sem calendário ✓');

// 5. Rotina fixa continua usando calendário.
assert(
  R(0).semanaIdeal.some((d) => d.rotulo === 'Segunda'),
  'Persona A (rotina fixa) deveria receber semana com dias nomeados',
);

// 6. PPL só aparece em 6 dias, experiente e estável (§70/§71).
const comPPL = resultados.filter((x) => x.res.divisao.id === 'pushPullLegs');
assert(comPPL.length === 1, `PPL deveria aparecer em exatamente 1 persona, apareceu em ${comPPL.length}`);
assert(comPPL[0].p.r.experiencia === 'experiente' && comPPL[0].p.r.dias === '6', 'PPL foi para o perfil errado');
console.log('  PPL restrito a 6 dias + experiente + rotina estável ✓');

// 7. Full Body domina os cenários de 2–3 dias (coerência de treinador).
assert(/fullBody2|sequenciaAB/.test(R(2).divisao.id), 'Persona C (2 dias) deveria receber estrutura de corpo inteiro');

// 8. Equipamento respeitado (§100).
assert(Boolean(R(5).observacaoEquipamento) && /halteres/i.test(R(5).observacaoEquipamento!), 'Persona F: halteres ignorados');
assert(
  Boolean(R(9).observacaoEquipamento) && /peso corporal/i.test(R(9).observacaoEquipamento!),
  'Persona J: peso corporal ignorado',
);
assert(R(0).observacaoEquipamento === undefined, 'Persona A (academia) não deveria ter nota de equipamento');
console.log('  equipamento respeitado nas personas de casa/ar livre ✓');

// 9. Estagnação → compatibilidade alta com acompanhamento (§76).
assert(R(1).montinho.nivel === 'alta' && R(1).arquetipo === 'estagnacao', 'Persona B: estagnação deveria puxar acompanhamento');

// 10. Semana mínima existe e é comunicada em todas.
for (const { p, res } of resultados) {
  assert(res.minimaTexto.length > 40, `${p.nome}: texto da semana mínima raso`);
}

// 11. Nenhuma estrutura pode exigir mais sessões do que a pessoa declarou.
for (const { p, res } of resultados) {
  if (p.r.dias === 'varia') continue;
  assert(
    res.sessoesIdeais <= Number(p.r.dias),
    `${p.nome}: planejou ${res.sessoesIdeais} sessões para quem declarou ${p.r.dias} dias`,
  );
}
console.log('  nenhuma estrutura exige mais dias do que a pessoa tem ✓');

console.log('\n' + '='.repeat(74));
if (falhas.length) {
  console.error(`FALHAS (${falhas.length}):`);
  falhas.forEach((f) => console.error('  ✗ ' + f));
  process.exit(1);
}
console.log('✓ Todos os testes do motor de rotina passaram.');
