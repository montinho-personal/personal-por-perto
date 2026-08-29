/**
 * Testes do motor "Presencial ou online?".
 *
 * O risco central desta ferramenta é de VIÉS: ela é mantida por quem vende
 * acompanhamento online, então o teste mais importante não é de aritmética —
 * é o de imparcialidade. Se o online vencer sistematicamente, a ferramenta
 * perde a razão de existir, mesmo que cada persona isolada pareça correta.
 *
 * Uso: npm run test:formato
 */
import { existsSync } from 'node:fs';
import { recomendarFormato, type Respostas } from '../src/lib/presencialOuOnline';

interface Persona {
  nome: string;
  r: Respostas;
  cobertura?: 'atende' | 'condicional' | 'fora';
}

const personas: Persona[] = [
  {
    nome: 'A — Iniciante completo, sem autonomia, quer alguém do lado',
    r: {
      experiencia: 'nunca',
      autonomia: 'semIdeia',
      execucao: 'nao',
      supervisao: 'naoSozinho',
      videoFeedback: 'desconfortavel',
      objetivo: 'saude',
      horarioFixo: 'maioria',
      deslocamento: '10a20',
      cobranca: 'bastante',
      prioridades: ['presenca', 'correcao', 'saberOQueFazer'],
      orcamento: 'moderado',
    },
  },
  {
    nome: 'B — Experiente, autonomia alta, rotina imprevisível, quer progressão',
    r: {
      experiencia: 'bastante',
      autonomia: 'seguranca',
      execucao: 'sim',
      supervisao: 'quaseNenhuma',
      videoFeedback: 'muitoBem',
      objetivo: 'massa',
      horarioFixo: 'quaseImpossivel',
      deslocamento: 'nenhum',
      cobranca: 'quaseNada',
      prioridades: ['progressao', 'adaptacao'],
      orcamento: 'moderado',
    },
  },
  {
    nome: 'C — Intermediário, boa autonomia, quer correção presencial ocasional',
    r: {
      experiencia: 'algunsMeses',
      autonomia: 'maioria',
      execucao: 'maioria',
      supervisao: 'asVezes',
      videoFeedback: 'prefiroPresencial',
      objetivo: 'massa',
      horarioFixo: 'asVezesDificil',
      deslocamento: '10a20',
      cobranca: 'moderado',
      prioridades: ['correcao', 'progressao'],
      orcamento: 'moderado',
    },
  },
  {
    nome: 'D — Experiente com agenda fixa que GOSTA de presença (não presumir online)',
    r: {
      experiencia: 'bastante',
      autonomia: 'seguranca',
      execucao: 'sim',
      supervisao: 'bastante',
      videoFeedback: 'prefiroPresencial',
      objetivo: 'massa',
      horarioFixo: 'facil',
      deslocamento: '20a30',
      cobranca: 'moderado',
      prioridades: ['presenca', 'motivacao'],
      orcamento: 'pouco',
    },
  },
  {
    nome: 'E — Iniciante que precisa de supervisão mas não mantém horário fixo (conflito)',
    r: {
      experiencia: 'comecando',
      autonomia: 'perdido',
      execucao: 'duvida',
      supervisao: 'bastante',
      videoFeedback: 'incerto',
      objetivo: 'emagrecer',
      horarioFixo: 'quaseImpossivel',
      deslocamento: '10a20',
      cobranca: 'moderado',
      prioridades: ['presenca', 'saberOQueFazer'],
      orcamento: 'moderado',
    },
  },
  {
    nome: 'F — Quer online porque é mais barato, mas não sabe executar',
    r: {
      experiencia: 'comecando',
      autonomia: 'semIdeia',
      execucao: 'nao',
      supervisao: 'frequentemente',
      videoFeedback: 'incerto',
      objetivo: 'emagrecer',
      horarioFixo: 'maioria',
      deslocamento: '10a20',
      cobranca: 'moderado',
      prioridades: ['saberOQueFazer', 'correcao'],
      orcamento: 'decisivo',
    },
  },
  {
    nome: 'G — Pensa em presencial, mas treina há anos e só precisa de plano',
    r: {
      experiencia: 'anos',
      autonomia: 'seguranca',
      execucao: 'sim',
      supervisao: 'quaseNenhuma',
      videoFeedback: 'muitoBem',
      objetivo: 'forca',
      horarioFixo: 'maioria',
      deslocamento: 'ate10',
      cobranca: 'quaseNada',
      prioridades: ['saberOQueFazer', 'progressao', 'evolucao'],
      orcamento: 'moderado',
    },
  },
  // --- Casos-limite ---
  {
    nome: 'H — Empate real: perfil mediano em tudo',
    r: {
      experiencia: 'voltando',
      autonomia: 'maisOuMenos',
      execucao: 'alguns',
      supervisao: 'asVezes',
      videoFeedback: 'incerto',
      objetivo: 'condicionamento',
      horarioFixo: 'maioria',
      deslocamento: '10a20',
      cobranca: 'moderado',
      prioridades: ['saberOQueFazer'],
      orcamento: 'naoResponder',
    },
  },
  {
    nome: 'I — Presencial recomendado, cidade FORA da área atendida',
    cobertura: 'fora',
    r: {
      experiencia: 'nunca',
      autonomia: 'semIdeia',
      execucao: 'nao',
      supervisao: 'naoSozinho',
      videoFeedback: 'desconfortavel',
      objetivo: 'saude',
      horarioFixo: 'facil',
      deslocamento: '20a30',
      cobranca: 'bastante',
      prioridades: ['presenca', 'correcao'],
      orcamento: 'pouco',
      cidadeSlug: 'fortaleza-ce',
      cidadeNome: 'Fortaleza',
    },
  },
  {
    nome: 'J — Presencial recomendado, cidade DENTRO da área atendida',
    cobertura: 'atende',
    r: {
      experiencia: 'nunca',
      autonomia: 'semIdeia',
      execucao: 'nao',
      supervisao: 'naoSozinho',
      videoFeedback: 'desconfortavel',
      objetivo: 'saude',
      horarioFixo: 'facil',
      deslocamento: '20a30',
      cobranca: 'bastante',
      prioridades: ['presenca', 'correcao'],
      orcamento: 'pouco',
      cidadeSlug: 'barueri-sp',
      cidadeNome: 'Barueri',
    },
  },
  {
    nome: 'K — Precisa de supervisão mas não aceita deslocamento nenhum',
    r: {
      experiencia: 'comecando',
      autonomia: 'perdido',
      execucao: 'duvida',
      supervisao: 'bastante',
      videoFeedback: 'prefiroPresencial',
      objetivo: 'emagrecer',
      horarioFixo: 'facil',
      deslocamento: 'nenhum',
      cobranca: 'moderado',
      prioridades: ['presenca', 'correcao'],
      orcamento: 'moderado',
    },
  },
  {
    nome: 'L — Treina há 10 anos, quer só cobrança de constância',
    r: {
      experiencia: 'bastante',
      autonomia: 'seguranca',
      execucao: 'sim',
      supervisao: 'quaseNenhuma',
      videoFeedback: 'provavelmente',
      objetivo: 'massa',
      horarioFixo: 'facil',
      deslocamento: 'mais30',
      cobranca: 'semCobrancaParo',
      prioridades: ['cobranca'],
      orcamento: 'pouco',
    },
  },
];

const falhas: string[] = [];
const assert = (c: boolean, m: string) => {
  if (!c) falhas.push(m);
};

const resultados = personas.map((p) => ({
  p,
  res: recomendarFormato(p.r, p.cobertura ?? 'fora'),
}));

for (const { p, res } of resultados) {
  console.log('\n' + '='.repeat(80));
  console.log(p.nome);
  console.log('='.repeat(80));
  console.log(`FORMATO.......: ${res.rotulo}${res.rotuloAlternativa ? `  (alternativa: ${res.rotuloAlternativa})` : ''}`);
  console.log(`PLACAR........: presencial ${res.debug.presencial} × online ${res.debug.online} (margem ${res.debug.margem})`);
  console.log(`GARGALO.......: ${res.gargalo}`);
  console.log(`POR QUÊ.......: ${res.porque}`);
  if (res.conflito) console.log(`CONFLITO......: [${res.conflito.id}] ${res.conflito.titulo}`);
  console.log(`MONTINHO......: ${res.montinho.combina ? res.montinho.tipo : 'sem encaixe (correto se presencial fora da área)'}`);
  console.log(`PRÓXIMO PASSO.: [${res.proximoPasso.destino}] ${res.proximoPasso.rotulo}`);

  /* --- Estrutura --- */
  assert(res.principaisFatores.length >= 1, `${p.nome}: sem fatores explicativos`);
  assert(res.porque.length > 80, `${p.nome}: explicação rasa`);
  assert(res.gargaloTexto.length > 60, `${p.nome}: texto de gargalo raso`);
  assert(res.pontoDeAtencao.length > 40, `${p.nome}: ponto de atenção ausente`);
  assert(res.comparador.length >= 6, `${p.nome}: comparador incompleto`);
  assert(res.outrosPassos.length >= 2, `${p.nome}: poucos próximos passos alternativos`);
  // Sempre existe um próximo passo útil, mesmo sem encaixe comercial.
  assert(Boolean(res.proximoPasso.url), `${p.nome}: sem próximo passo`);
  for (const c of [...res.conteudo, res.proximoPasso, ...res.outrosPassos]) {
    const u = c.url.replace(/\/$/, '');
    const ok = existsSync(`src/pages${u}.astro`) || u.startsWith('/personal-trainer/');
    assert(ok, `${p.nome}: URL inexistente ${c.url}`);
  }
  // "ambos" é o único formato sem alternativa; os demais precisam de uma.
  if (res.formato === 'ambos') {
    assert(res.alternativa === null, `${p.nome}: "ambos" não deveria ter alternativa`);
    assert(res.criterioDesempate !== null, `${p.nome}: "ambos" precisa do critério de desempate`);
  } else {
    assert(res.alternativa !== null, `${p.nome}: falta alternativa`);
    assert(res.criterioDesempate === null, `${p.nome}: critério de desempate fora do resultado "ambos"`);
  }

  /* --- TOM: nenhum formato pode ser vendido como superior --- */
  const txt = JSON.stringify(res);
  assert(
    !/online é melhor|presencial é melhor|melhor que o presencial|melhor que o online/i.test(txt),
    `${p.nome}: declarou um formato superior ao outro`,
  );
  assert(!/versão barata|mais barato e melhor|revolucion/i.test(txt), `${p.nome}: desvalorizou o online ou exagerou`);
  assert(!/\d+%\s*(online|presencial)/i.test(txt), `${p.nome}: expôs falsa precisão percentual`);
  assert(!/CREF|CONFEF/i.test(txt), `${p.nome}: menção proibida a conselho`);
  // Fronteira de palavra obrigatória: "procurar" contém "cura".
  assert(!/\bgarantid|\bcura\b|\bcurar\b/i.test(txt), `${p.nome}: promessa indevida`);
}

/* --------------------------- invariantes ------------------------------ */

console.log('\n' + '='.repeat(80));
console.log('INVARIANTES');
console.log('='.repeat(80));

const R = (i: number) => resultados[i].res;

assert(R(0).formato === 'presencial', `Persona A: esperado presencial (obteve ${R(0).formato})`);
console.log(`  A: iniciante sem autonomia → ${R(0).rotulo} ✓`);

assert(R(1).formato === 'online', `Persona B: esperado online (obteve ${R(1).formato})`);
console.log(`  B: experiente com rotina imprevisível → ${R(1).rotulo} ✓`);

assert(R(2).formato === 'hibrido', `Persona C: esperado híbrido (obteve ${R(2).formato})`);
console.log(`  C: autonomia + correção presencial ocasional → ${R(2).rotulo} ✓`);

// D é o teste anti-viés mais importante: experiência alta NÃO implica online.
assert(
  R(3).formato === 'presencial' || R(3).formato === 'hibrido',
  `Persona D: experiente que quer presença não pode virar online (obteve ${R(3).formato})`,
);
assert(
  R(3).conflito?.id === 'autonomiaVsPreferencia',
  `Persona D: deveria explicitar que a presença é preferência, não necessidade`,
);
console.log(`  D: experiente que gosta de presença → ${R(3).rotulo}, sem virar online ✓`);

assert(R(4).formato === 'hibrido', `Persona E: conflito real deveria virar híbrido (obteve ${R(4).formato})`);
assert(R(4).conflito?.id === 'supervisaoVsAgenda', 'Persona E: conflito supervisão × agenda não foi reportado');
console.log('  E: precisa de supervisão mas não mantém horário → híbrido com trade-off explicado ✓');

// F é o teste do §79: preço não decide sozinho.
assert(R(5).formato !== 'online', `Persona F: preço não pode empurrar para online (obteve ${R(5).formato})`);
assert(R(5).conflito?.id === 'orcamentoVsNecessidade', 'Persona F: conflito de orçamento não foi reportado');
assert(
  R(5).debug.gatilhos.includes('budget_suppressed_low_autonomy'),
  'Persona F: peso do orçamento deveria ter sido anulado',
);
console.log(`  F: quer online por preço, sem autonomia → ${R(5).rotulo} + alerta de orçamento ✓`);

assert(R(6).formato === 'online', `Persona G: esperado online (obteve ${R(6).formato})`);
console.log(`  G: pensa presencial, precisa de plano → ${R(6).rotulo} ✓`);

assert(R(7).formato === 'ambos', `Persona H: perfil mediano deveria dar "ambos" (obteve ${R(7).formato})`);
assert(
  Boolean(R(7).criterioDesempate?.presencialSe && R(7).criterioDesempate?.onlineSe),
  'Persona H: "ambos" precisa mostrar os dois critérios de escolha',
);
console.log('  H: empate real → "os dois podem funcionar", com critério de escolha ✓');

/* --- Teste geográfico obrigatório (§99) --- */
assert(R(8).formato === 'presencial', `Persona I: fora da área, resultado deve continuar presencial (obteve ${R(8).formato})`);
assert(!R(8).montinho.combina, 'Persona I: não pode haver encaixe comercial fora da área presencial');
assert(R(8).montinho.tipo === 'nenhum', 'Persona I: nenhum serviço deveria ser oferecido');
assert(
  R(8).proximoPasso.destino === 'personalScore',
  `Persona I: sem encaixe, o passo principal deveria ser útil ao usuário (obteve ${R(8).proximoPasso.destino})`,
);
assert(!/atendo|atende a sua região/i.test(JSON.stringify(R(8))), 'Persona I: prometeu atendimento inexistente');
console.log('  I: presencial + fora da área → resultado mantido, zero promessa, passo útil ✓');

assert(R(9).formato === 'presencial', 'Persona J: esperado presencial');
assert(R(9).montinho.tipo === 'presencial', 'Persona J: dentro da área, o presencial deveria ser oferecido');
assert(R(9).proximoPasso.destino === 'cidade', 'Persona J: passo principal deveria levar à página da cidade');
console.log('  J: presencial + dentro da área → oferta presencial e passo local ✓');

// Mesmas respostas, coberturas diferentes: o RESULTADO não muda.
assert(
  R(8).formato === R(9).formato,
  'A cobertura geográfica alterou a recomendação — isso jamais pode acontecer',
);
console.log('  I × J: mesma resposta, coberturas opostas, MESMA recomendação ✓');

assert(R(10).conflito?.id === 'supervisaoVsDeslocamento', 'Persona K: conflito de deslocamento não foi reportado');
console.log('  K: precisa de supervisão sem deslocamento → trade-off explicado ✓');

// L: cobrança não pode, sozinha, empurrar para presencial.
assert(R(11).formato === 'online' || R(11).formato === 'ambos', `Persona L: obteve ${R(11).formato}`);
assert(R(11).gargalo === 'constancia', `Persona L: gargalo deveria ser constância (obteve ${R(11).gargalo})`);
console.log(`  L: só precisa de cobrança → ${R(11).rotulo}, gargalo constância ✓`);

/* --------------------- IMPARCIALIDADE (§98) --------------------------- */

console.log('\n' + '-'.repeat(80));
console.log('TESTE DE IMPARCIALIDADE — varredura combinatória');
console.log('-'.repeat(80));

const experiencias = ['nunca', 'comecando', 'voltando', 'algunsMeses', 'anos', 'bastante'] as const;
const autonomias = ['semIdeia', 'perdido', 'maisOuMenos', 'maioria', 'seguranca'] as const;
const supervisoes = ['naoSozinho', 'bastante', 'frequentemente', 'asVezes', 'quaseNenhuma'] as const;
const videos = ['desconfortavel', 'prefiroPresencial', 'incerto', 'provavelmente', 'muitoBem'] as const;
const horarios = ['facil', 'maioria', 'asVezesDificil', 'bastanteDificil', 'quaseImpossivel'] as const;

const contagem: Record<string, number> = { presencial: 0, online: 0, hibrido: 0, ambos: 0 };
let total = 0;

for (const experiencia of experiencias) {
  for (const autonomia of autonomias) {
    for (const supervisao of supervisoes) {
      for (const videoFeedback of videos) {
        for (const horarioFixo of horarios) {
          const res = recomendarFormato({
            experiencia,
            autonomia,
            execucao: 'alguns',
            supervisao,
            videoFeedback,
            objetivo: 'saude',
            horarioFixo,
            deslocamento: '10a20',
            cobranca: 'moderado',
            prioridades: ['saberOQueFazer'],
            orcamento: 'naoResponder',
          });
          contagem[res.formato] += 1;
          total += 1;
        }
      }
    }
  }
}

for (const k of Object.keys(contagem)) {
  const pct = ((contagem[k] / total) * 100).toFixed(1);
  console.log(`  ${k.padEnd(11)} ${String(contagem[k]).padStart(5)}  ${pct}%`);
}

// Nenhum formato pode dominar a grade: seria sinal de motor enviesado.
for (const k of Object.keys(contagem)) {
  const pct = (contagem[k] / total) * 100;
  assert(pct < 45, `Formato "${k}" domina ${pct.toFixed(1)}% das combinações — motor enviesado`);
}
// E o presencial precisa ganhar em uma fatia relevante dos cenários.
assert(
  (contagem.presencial / total) * 100 >= 15,
  `Presencial vence em apenas ${((contagem.presencial / total) * 100).toFixed(1)}% — viés a favor do online`,
);
console.log(`  varredura de ${total} combinações, nenhum formato acima de 45% ✓`);

/* --- Determinismo: mesma entrada, mesma saída --- */
const a1 = recomendarFormato(personas[0].r);
const a2 = recomendarFormato(personas[0].r);
assert(JSON.stringify(a1) === JSON.stringify(a2), 'Motor não é determinístico');
console.log('  motor determinístico ✓');

console.log('\n' + '='.repeat(80));
if (falhas.length) {
  console.error(`FALHAS (${falhas.length}):`);
  falhas.forEach((f) => console.error('  ✗ ' + f));
  process.exit(1);
}
console.log('✓ Todos os testes de "presencial ou online" passaram.');
