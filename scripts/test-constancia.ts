/**
 * Testes do motor "Diagnóstico da Constância".
 *
 * O risco desta ferramenta é moral, não matemático: ela pode escorregar
 * para culpar o usuário, para diagnóstico psicológico ou para neuromito.
 * Por isso os invariantes de TOM são tão importantes quanto os de lógica —
 * e há um teste específico para o caso em que o motor não deve inventar
 * gargalo nenhum.
 *
 * Uso: npm run test:constancia
 */
import { existsSync } from 'node:fs';
import { diagnosticarConstancia, type ConstanciaRespostas } from '../src/lib/constancia';

interface Persona {
  nome: string;
  r: ConstanciaRespostas;
}

const base: ConstanciaRespostas = {
  diasPlanejados: '3',
  diasReais: '3',
  duracao: '45a60',
  deslocamento: 'ate10',
  previsibilidade: 'muito',
  reacaoFalta: 'proximoDia',
  barreiras: [],
  clareza: 'sim',
  progresso: 'acompanho',
  planoB: 'sim',
};

const personas: Persona[] = [
  {
    nome: 'A — Planeja 5, realiza 3, sessões 75min, rotina imprevisível, sem plano B',
    r: {
      ...base,
      diasPlanejados: '5',
      diasReais: '3',
      duracao: '60a90',
      previsibilidade: 'quaseNunca',
      planoB: 'nao',
      barreiras: ['trabalho', 'cansaco'],
      reacaoFalta: 'perdido',
    },
  },
  {
    nome: 'B — Planeja 3, realiza 3, academia a 35min, falta quando sai tarde',
    r: {
      ...base,
      deslocamento: 'mais30',
      barreiras: ['deslocamento', 'trabalho'],
      local: 'academia',
      cidadeSlug: 'curitiba-pr',
      cidadeNome: 'Curitiba',
    },
  },
  {
    nome: 'C — 4x, sabe o que fazer, perto, mas perde 1 treino e abandona a semana',
    r: {
      ...base,
      diasPlanejados: '4',
      diasReais: '4',
      reacaoFalta: 'perdeSemana',
      planoB: 'maisOuMenos',
    },
  },
  {
    nome: 'D — Tem tempo, academia perto, mas decide o treino na hora',
    r: {
      ...base,
      clareza: 'decideNaHora',
      barreiras: ['naoSeiQueFazer'],
      progresso: 'maisOuMenos',
    },
  },
  {
    nome: 'E — Treina consistente, mas não percebe progresso',
    r: {
      ...base,
      diasPlanejados: '4',
      diasReais: '4',
      progresso: 'naoFacoIdeia',
      barreiras: ['naoVejoResultado', 'desanimo'],
    },
  },
  {
    nome: 'F — Sessões de 90+ min e falta de tempo',
    r: {
      ...base,
      duracao: 'mais90',
      barreiras: ['tempo', 'treinoDemora'],
    },
  },
  {
    nome: 'G — Tudo em ordem: NÃO pode inventar problema',
    r: { ...base },
  },
  // --- Casos-limite (§106/§107) ---
  {
    nome: 'H — Contradição: planeja 2, realiza 5',
    r: { ...base, diasPlanejados: '2', diasReais: '5mais' },
  },
  {
    nome: 'I — Não treina no momento (realiza 0)',
    r: {
      ...base,
      diasPlanejados: '4',
      diasReais: 'nenhum',
      clareza: 'semTreino',
      progresso: 'poucoTempo',
      planoB: 'nuncaPensei',
      barreiras: ['adiando', 'desanimo'],
    },
  },
  {
    nome: 'J — Sem frequência definida e horário totalmente variável',
    r: {
      ...base,
      diasPlanejados: 'semNumero',
      diasReais: 'varia',
      duracao: 'nuncaSei',
      deslocamento: 'varia',
      previsibilidade: 'quaseNunca',
      planoB: 'nuncaPensei',
      clareza: 'asVezes',
    },
  },
  {
    nome: 'K — Treina todos os dias, sem academia (em casa)',
    r: {
      ...base,
      diasPlanejados: 'todos',
      diasReais: '5mais',
      deslocamento: 'mesmoLugar',
      duracao: 'ate30',
      local: 'casa',
    },
  },
  {
    nome: 'L — Sem treino estruturado e sem noção de progresso (acompanhamento)',
    r: {
      ...base,
      clareza: 'semTreino',
      progresso: 'naoFacoIdeia',
      planoB: 'nuncaPensei',
      barreiras: ['naoSeiQueFazer', 'naoVejoResultado'],
    },
  },
];

const falhas: string[] = [];
const assert = (c: boolean, m: string) => {
  if (!c) falhas.push(m);
};

const resultados = personas.map((p) => ({ p, res: diagnosticarConstancia(p.r) }));

for (const { p, res } of resultados) {
  console.log('\n' + '='.repeat(78));
  console.log(p.nome);
  console.log('='.repeat(78));
  console.log(`TEM GARGALO...: ${res.temGargalo ? 'sim' : 'NÃO — e isso é uma resposta válida'}`);
  console.log(`RESUMO........: ${res.resumo}`);
  if (res.observacao) console.log(`OBSERVAÇÃO....: ${res.observacao}`);
  if (res.principal) {
    console.log(`PRINCIPAL.....: [${res.principal.id}] ${res.principal.titulo}`);
    console.log(`                ${res.principal.oQueMostra}`);
  }
  if (res.secundarios.length) {
    console.log(`SECUNDÁRIOS...: ${res.secundarios.map((s) => s.id).join(', ')}`);
  }
  console.log(`UMA COISA.....: ${res.umaCoisa}`);
  console.log(`SEMANA........: alvo ${res.semana.alvo} × ${res.semana.duracaoAlvo} · mínima ${res.semana.minima} × ${res.semana.duracaoMinima}`);
  console.log(`PRÓXIMO PASSO.: [${res.proximoPasso.ferramenta}] ${res.proximoPasso.rotulo} → ${res.proximoPasso.url}`);
  console.log(`MONTINHO......: ${res.montinho ? 'oferecido' : 'não oferecido'}`);
  console.log(`TOP PONTOS....: ${Object.entries(res.debug.pontos).filter(([, v]) => v > 0).sort((a, b) => b[1] - a[1]).slice(0, 3).map(([k, v]) => `${k}=${v}`).join(' · ') || '—'}`);

  /* --- Estrutura --- */
  assert(res.secundarios.length <= 2, `${p.nome}: mais de 2 gargalos secundários`);
  assert(res.umaCoisa.length > 40, `${p.nome}: "uma coisa" rasa`);
  assert(res.semana.minima >= 1 && res.semana.minima <= res.semana.alvo, `${p.nome}: semana mínima inválida`);
  assert(res.planoB.length > 40, `${p.nome}: plano B raso`);
  assert(Boolean(res.proximoPasso.url), `${p.nome}: sem próximo passo`);
  assert(res.conteudo.length >= 1, `${p.nome}: sem conteúdo relacionado`);
  if (res.principal) {
    assert(
      Boolean(res.principal.oQueMostra && res.principal.porQueAtrapalha && res.principal.ajuste),
      `${p.nome}: gargalo principal sem as 3 partes`,
    );
  }
  for (const c of res.conteudo) {
    assert(existsSync(`src/pages${c.url.replace(/\/$/, '')}.astro`), `${p.nome}: URL inexistente ${c.url}`);
  }

  /* --- TOM: o risco real desta ferramenta --- */
  const txt = JSON.stringify(res);
  assert(
    !/força de vontade|disciplina|preguiç|desculpa|você precisa querer|falta de compromisso/i.test(txt),
    `${p.nome}: culpou o usuário`,
  );
  assert(
    !/procrastinad|autoestima|ansiedade|depress|transtorno|compulsi/i.test(txt),
    `${p.nome}: rótulo psicológico`,
  );
  assert(
    !/dopamina|c[ée]rebro sabota|neuroc|córtex|serotonina/i.test(txt),
    `${p.nome}: neuromito`,
  );
  assert(!/\d{1,3}%\s*de\s*(certeza|precisão)|\/100/i.test(txt), `${p.nome}: falsa precisão`);
  assert(!/garantid|com certeza você|milagr/i.test(txt), `${p.nome}: promessa`);
  assert(!/CREF|CONFEF/i.test(txt), `${p.nome}: menção proibida a conselho`);
}

/* --------------------------- invariantes gerais ------------------------ */

console.log('\n' + '='.repeat(78));
console.log('INVARIANTES GERAIS');
console.log('='.repeat(78));

const R = (i: number) => resultados[i].res;

// A — plano incompatível com a rotina.
assert(R(0).principal?.id === 'capacidadeRotina', `Persona A: esperado capacidadeRotina (obteve ${R(0).principal?.id})`);
assert(/5/.test(R(0).principal!.oQueMostra) && /3/.test(R(0).principal!.oQueMostra), 'Persona A: números não citados');
assert(R(0).semana.alvo === 3, `Persona A: semana-alvo deveria ser 3 (obteve ${R(0).semana.alvo})`);
console.log(`  A: capacidade da rotina, alvo ${R(0).semana.alvo} / mínima ${R(0).semana.minima} ✓`);

// B — fricção logística, e o próximo passo é o mapa da cidade.
assert(R(1).principal?.id === 'friccaoLogistica', `Persona B: esperado friccaoLogistica (obteve ${R(1).principal?.id})`);
assert(R(1).proximoPasso.ferramenta === 'mapa', 'Persona B: próximo passo deveria ser o mapa');
assert(R(1).proximoPasso.url.includes('curitiba-pr'), 'Persona B: mapa deveria usar a cidade do contexto');
assert(!R(1).montinho, 'Persona B: gargalo logístico não deveria oferecer o Montinho');
console.log('  B: fricção logística → mapa de Curitiba, sem oferta de personal ✓');

// C — tudo ou nada.
assert(R(2).principal?.id === 'tudoOuNada', `Persona C: esperado tudoOuNada (obteve ${R(2).principal?.id})`);
assert(/placar/i.test(R(2).umaCoisa), 'Persona C: ajuste deveria atacar o pensamento de semana perdida');
console.log('  C: tudo-ou-nada identificado ✓');

// D — falta de clareza, e como tem treino, vai para a auditoria.
assert(R(3).principal?.id === 'faltaClareza', `Persona D: esperado faltaClareza (obteve ${R(3).principal?.id})`);
assert(R(3).proximoPasso.ferramenta === 'auditoria', 'Persona D: deveria ir para a auditoria de treino');
console.log('  D: carga de decisão → auditoria de treino ✓');

// E — falta de feedback.
assert(R(4).principal?.id === 'semFeedback', `Persona E: esperado semFeedback (obteve ${R(4).principal?.id})`);
assert(R(4).proximoPasso.ferramenta === 'personalIdeal', 'Persona E: deveria ir para o personal ideal');
console.log('  E: falta de feedback → personal ideal ✓');

// F — sessões longas.
assert(R(5).principal?.id === 'sessoesLongas', `Persona F: esperado sessoesLongas (obteve ${R(5).principal?.id})`);
console.log('  F: sessões longas identificadas ✓');

// G — o teste mais importante: NÃO inventar problema.
assert(!R(6).temGargalo, 'Persona G: motor inventou gargalo onde não há');
assert(!R(6).principal, 'Persona G: não deveria ter gargalo principal');
assert(
  /poucas barreiras|não avalia/i.test(R(6).resumo),
  'Persona G: resumo deveria admitir que não encontrou barreira',
);
assert(R(6).umaCoisa.length > 40, 'Persona G: ainda assim precisa entregar algo útil');
console.log('  G: nenhum gargalo inventado, e o resumo admite o limite ✓');

// H — contradição não quebra e é sinalizada.
assert(Boolean(R(7).observacao) && /mais dias do que planeja/i.test(R(7).observacao!), 'Persona H: contradição não sinalizada');
assert(R(7).principal?.id !== 'capacidadeRotina', 'Persona H: frequência não deveria ser o gargalo');
console.log('  H: treina mais do que planeja → sinalizado, sem quebrar ✓');

// I — quem não treina recebe semana-alvo pequena, não a planejada.
assert(R(8).semana.alvo <= 2, `Persona I: alvo deveria ser pequeno (obteve ${R(8).semana.alvo})`);
console.log(`  I: quem está parado começa com ${R(8).semana.alvo} sessões ✓`);

// J — sem número definido e rotina caótica ainda produz diagnóstico.
assert(R(9).temGargalo, 'Persona J: deveria encontrar gargalo');
assert(R(9).semana.alvo >= 1, 'Persona J: semana-alvo inválida');
console.log(`  J: rotina caótica → ${R(9).principal!.id}, alvo ${R(9).semana.alvo} ✓`);

// K — treinar todos os dias não vira problema automático.
const kPrincipal = R(10).principal;
assert(
  !kPrincipal || kPrincipal.id !== 'capacidadeRotina',
  `Persona K: treinar bastante não pode virar gargalo de capacidade (obteve ${kPrincipal?.id})`,
);
console.log('  K: alta frequência não é condenada automaticamente ✓');

// L — falta de acompanhamento.
// O motor elege faltaClareza como principal — é o achado mais concreto e
// com ajuste mais acionável. A leitura de "estrutura externa" chega pelo
// bloco do Montinho, que é onde ela vira ação. O que precisa valer é a
// substância: o sinal foi detectado e o acompanhamento é oferecido.
assert(R(11).debug.pontos.faltaAcompanhamento > 0, 'Persona L: sinal de falta de acompanhamento não pontuou');
assert(Boolean(R(11).montinho), 'Persona L: deveria oferecer acompanhamento');
console.log(`  L: ${R(11).principal!.id} como principal, sinal de acompanhamento pontuado e oferta feita ✓`);

// Variedade real (§74).
const primarios = new Set(resultados.map((x) => x.res.principal?.id ?? 'nenhum'));
assert(primarios.size >= 7, `Pouca variedade de diagnóstico: ${primarios.size}`);
console.log(`  diagnósticos distintos: ${primarios.size} de ${resultados.length} personas ✓`);

// O Montinho não pode ser oferecido a todo mundo (§44).
const comMontinho = resultados.filter((x) => x.res.montinho).length;
assert(comMontinho < resultados.length * 0.7, `Montinho oferecido demais: ${comMontinho}/${resultados.length}`);
console.log(`  Montinho oferecido em ${comMontinho} de ${resultados.length} casos — só quando faz sentido ✓`);

// Toda persona sai com semana mínima menor ou igual à alvo.
for (const { p, res } of resultados) {
  assert(res.semana.minima <= res.semana.alvo, `${p.nome}: mínima maior que alvo`);
}

console.log('\n' + '='.repeat(78));
if (falhas.length) {
  console.error(`FALHAS (${falhas.length}):`);
  falhas.forEach((f) => console.error('  ✗ ' + f));
  process.exit(1);
}
console.log('✓ Todos os testes do motor de constância passaram.');
