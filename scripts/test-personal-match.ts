/**
 * Testes do motor de recomendação da ferramenta "Encontre seu Personal Ideal".
 *
 * Não é um framework de testes — é um conferidor executável: roda as personas
 * de referência, imprime o resultado de cada uma e valida invariantes que não
 * podem quebrar (resultados distintos, transparência geográfica, ausência de
 * promessa médica, mensagem de WhatsApp preenchida).
 *
 * Uso: npm run test:match
 */
import { existsSync } from 'node:fs';
import { personalMatchEngine, type MatchRespostas } from '../src/lib/personalMatch';

interface Persona {
  nome: string;
  r: MatchRespostas;
}

const personas: Persona[] = [
  {
    nome: 'A — Iniciante, emagrecimento, insegurança técnica (São Paulo)',
    r: {
      objetivo: 'emagrecer',
      experiencia: 'nunca',
      dias: '3',
      tempo: '45a60',
      local: 'academia',
      dificuldade: 'naoSeiSeCerto',
      espera: ['presenca', 'execucao'],
      cidadeSlug: 'sao-paulo-sp',
      cidadeNome: 'São Paulo',
      uf: 'SP',
    },
  },
  {
    nome: 'B — Experiente, hipertrofia, estagnação (Recife)',
    r: {
      objetivo: 'massa',
      experiencia: 'experiente',
      dias: '5',
      tempo: '60a90',
      local: 'academia',
      dificuldade: 'progressao',
      espera: ['evolucao', 'montarTreino'],
      cidadeSlug: 'recife-pe',
      cidadeNome: 'Recife',
      uf: 'PE',
    },
  },
  {
    nome: 'C — Retomando, emagrecimento, falta de constância (Barueri)',
    r: {
      objetivo: 'emagrecer',
      experiencia: 'voltando',
      dias: '3',
      tempo: '30a45',
      local: 'condominio',
      dificuldade: 'constancia',
      espera: ['cobranca', 'adaptacao'],
      cidadeSlug: 'barueri-sp',
      cidadeNome: 'Barueri',
      uf: 'SP',
    },
  },
  {
    nome: 'D — Experiente, rotina variável, precisa de estrutura (Curitiba)',
    r: {
      objetivo: 'definir',
      experiencia: 'algumTempo',
      dias: '4',
      tempo: 'varia',
      local: 'varia',
      dificuldade: 'rotinaMuda',
      espera: ['adaptacao', 'montarTreino'],
      cidadeSlug: 'curitiba-pr',
      cidadeNome: 'Curitiba',
      uf: 'PR',
    },
  },
  {
    nome: 'E — Iniciante que precisa de presença, mas mora longe (Manaus)',
    r: {
      objetivo: 'emagrecer',
      experiencia: 'nunca',
      dias: '2',
      tempo: '45a60',
      local: 'academia',
      dificuldade: 'naoSeiSeCerto',
      espera: ['presenca'],
      cidadeSlug: 'manaus-am',
      cidadeNome: 'Manaus',
      uf: 'AM',
    },
  },
  {
    nome: 'F — Objetivo de desempenho esportivo (fora do foco do Montinho)',
    r: {
      objetivo: 'desempenho',
      experiencia: 'experiente',
      dias: '5',
      tempo: '60a90',
      local: 'academia',
      dificuldade: 'progressao',
      espera: ['evolucao'],
      cidadeSlug: 'sao-paulo-sp',
      cidadeNome: 'São Paulo',
      uf: 'SP',
    },
  },
  {
    nome: 'G — Sem informar cidade (pulou a etapa)',
    r: {
      objetivo: 'voltar',
      experiencia: 'parado',
      dias: 'naoSei',
      tempo: 'varia',
      local: 'escolhendo',
      dificuldade: 'recomecando',
      espera: [],
    },
  },
  {
    nome: 'H — Com limitação declarada (iniciante, condomínio)',
    r: {
      objetivo: 'longevidade',
      experiencia: 'comecando',
      dias: '3',
      tempo: '30a45',
      local: 'condominio',
      dificuldade: 'naoSeiFazer',
      espera: ['montarTreino'],
      limitacao: 'sim',
      cidadeSlug: 'alphaville-sp',
      cidadeNome: 'Alphaville',
      uf: 'SP',
    },
  },
  {
    nome: 'I — Prefere tratar limitação com profissional',
    r: {
      objetivo: 'emagrecer',
      experiencia: 'algumTempo',
      dias: '4',
      tempo: '45a60',
      local: 'academia',
      dificuldade: 'semResultado',
      espera: ['evolucao'],
      limitacao: 'profissional',
      cidadeSlug: 'campinas-sp',
      cidadeNome: 'Campinas',
      uf: 'SP',
    },
  },
  {
    nome: 'J — Autonomia altíssima: híbrido deveria perder força',
    r: {
      objetivo: 'massa',
      experiencia: 'experiente',
      dias: '6+',
      tempo: '60a90',
      local: 'academia',
      dificuldade: 'progressao',
      espera: ['montarTreino', 'evolucao'],
      limitacao: 'nao',
      cidadeSlug: 'porto-alegre-rs',
      cidadeNome: 'Porto Alegre',
      uf: 'RS',
    },
  },
  {
    nome: 'K — Tempo mínimo, rotina caótica, sem cidade',
    r: {
      objetivo: 'condicionamento',
      experiencia: 'voltando',
      dias: '2',
      tempo: 'ate30',
      local: 'casa',
      dificuldade: 'tempo',
      espera: ['adaptacao'],
      limitacao: 'nao',
    },
  },
  {
    nome: 'L — Contradição: quer presença, mas rotina imprevisível',
    r: {
      objetivo: 'definir',
      experiencia: 'algumTempo',
      dias: '4',
      tempo: 'varia',
      local: 'varia',
      dificuldade: 'rotinaMuda',
      espera: ['presenca', 'execucao'],
      limitacao: 'nao',
    },
  },
];

/* ------------------------------ execução ------------------------------ */

const falhas: string[] = [];
const assert = (cond: boolean, msg: string) => {
  if (!cond) falhas.push(msg);
};

const resultados = personas.map((p) => ({ p, res: personalMatchEngine(p.r) }));

for (const { p, res } of resultados) {
  console.log('\n' + '='.repeat(72));
  console.log(p.nome);
  console.log('='.repeat(72));
  console.log(`PERFIL........: ${res.perfil} — ${res.perfilResumo}`);
  console.log(`FORMATO.......: ${res.modeloRotulo} (confiança ${res.confianca})`);
  console.log(`POR QUÊ.......: ${res.porque[0]}`);
  console.log(`               ${res.porque[1]}`);
  console.log(`               ${res.porque[2]}`);
  console.log(`CARACTERÍSTICAS: ${res.caracteristicas.length} itens`);
  res.caracteristicas.forEach((c) => console.log(`   • ${c}`));
  console.log(`ESTRUTURA.....: ${res.estrutura}`);
  console.log('NÃO PRECISA...:');
  res.naoPrecisa.forEach((n) => console.log(`   — ${n}`));
  console.log(`PRÓXIMO PASSO.: ${res.proximoPasso}`);
  console.log(`MONTINHO......: ${res.montinho.rotulo}`);
  console.log(`                ${res.montinho.motivo}`);
  if (res.montinho.ressalva) console.log(`   RESSALVA: ${res.montinho.ressalva}`);
  console.log(`CONTEÚDO......: ${res.conteudo.map((c) => c.url).join(', ')}`);
  console.log('WHATSAPP......:');
  console.log(
    res.whatsapp
      .split('\n')
      .map((l) => '   ' + l)
      .join('\n'),
  );

  // Invariantes por persona
  assert(res.porque.length === 3, `${p.nome}: deveria ter 3 blocos de explicação`);
  assert(res.caracteristicas.length >= 4, `${p.nome}: poucas características`);
  assert(res.naoPrecisa.length >= 1, `${p.nome}: sem bloco "não precisa"`);
  assert(res.whatsapp.includes('Personal por Perto'), `${p.nome}: WhatsApp sem contexto de origem`);
  // As red flags CITAM o que evitar ("resultado garantido") — são a exceção
  // legítima do filtro de promessas, então saem da checagem.
  const { redFlags: _flags, ...semFlags } = res;
  assert(
    !/\bcuras?\b|\bcurar\b|garantid|milagr|com certeza você vai/i.test(JSON.stringify(semFlags)),
    `${p.nome}: promessa indevida no texto`,
  );
  assert(!/CREF|CONFEF/i.test(JSON.stringify(res)), `${p.nome}: menção proibida a conselho`);

  // --- Invariantes 2.0 ---
  const dims = Object.entries(res.dimensoes);
  assert(
    dims.every(([, v]) => v >= 0 && v <= 100),
    `${p.nome}: dimensão fora da escala 0–100`,
  );
  assert(res.influencias.length === 3, `${p.nome}: "entenda a recomendação" deveria ter 3 influências`);
  assert(res.plano.length === 3, `${p.nome}: plano de ação deveria ter exatamente 3 passos`);
  assert(res.checklist.length >= 5, `${p.nome}: checklist curta demais`);
  assert(res.redFlags.length >= 4, `${p.nome}: red flags ausentes`);
  assert(res.comparador.length === 5, `${p.nome}: comparador incompleto`);
  const linhaCenario = res.comparador.find((l) => l.criterio === 'Para o seu cenário')!;
  const colunaRecomendada =
    res.modelo === 'presencial' ? linhaCenario.presencial : res.modelo === 'online' ? linhaCenario.online : linhaCenario.hibrido;
  assert(
    colunaRecomendada === 'Muito adequado',
    `${p.nome}: o formato recomendado (${res.modelo}) não aparece como "Muito adequado" no comparador`,
  );
  // O share nunca pode vazar limitação ou cidade.
  assert(
    !/limita|condi[çc][ãa]o|dor\b/i.test(res.share) && !(p.r.cidadeNome && res.share.includes(p.r.cidadeNome)),
    `${p.nome}: share contém dado sensível`,
  );
  // URLs de conteúdo recomendado precisam existir no código-fonte.
  for (const c of res.conteudo) {
    const arquivo = `src/pages${c.url.replace(/\/$/, '')}.astro`;
    assert(existsSync(arquivo), `${p.nome}: conteúdo recomendado aponta para página inexistente: ${c.url}`);
  }
}

/* --------------------------- invariantes gerais ------------------------ */

// 1. Os quatro perfis de referência precisam ser significativamente diferentes.
const assinatura = (i: number) => {
  const r = resultados[i].res;
  return `${r.perfil}|${r.modelo}|${r.porque.join(' ')}`;
};
const quatro = [assinatura(0), assinatura(1), assinatura(2), assinatura(3)];
assert(new Set(quatro).size === 4, 'Personas A–D produziram resultados repetidos');

// 2. Persona A (iniciante inseguro em região atendida) deve puxar presença.
assert(
  resultados[0].res.modelo !== 'online',
  'Persona A (iniciante com insegurança técnica) não deveria cair em online puro',
);

// 3. Persona B (experiente estagnado) deve puxar planejamento.
assert(resultados[1].res.modelo === 'online', 'Persona B deveria receber recomendação online');

// 4. Persona E: presença recomendada fora da área — transparência obrigatória.
assert(
  resultados[4].res.montinho.nivel !== 'alta' && Boolean(resultados[4].res.montinho.ressalva),
  'Persona E (fora da área, precisa de presença) deveria receber ressalva honesta',
);

// 5. Persona F: desempenho esportivo não pode virar compatibilidade alta.
assert(
  resultados[5].res.montinho.nivel !== 'alta',
  'Persona F (desempenho esportivo) não deveria ter compatibilidade alta',
);

// 6. Sem cidade informada, nada de oferta presencial.
assert(
  resultados[6].res.montinho.presencial === false,
  'Persona G (sem cidade) não deveria receber oferta presencial',
);

// 7. Nenhum resultado pode ficar sem próximo passo ou sem conteúdo sugerido.
for (const { p, res } of resultados) {
  assert(res.proximoPasso.length > 40, `${p.nome}: próximo passo vazio ou raso`);
  assert(res.conteudo.length >= 2, `${p.nome}: poucas sugestões de conteúdo`);
}

// 8. Variedade real: as personas não podem colapsar em 2 formatos só.
const perfisDistintos = new Set(resultados.map((r) => r.res.perfil));
assert(perfisDistintos.size >= 4, `Pouca variedade de arquétipos: ${perfisDistintos.size}`);

// 9. Persona H (limitação declarada): característica + aviso obrigatórios.
const h = resultados[7].res;
assert(
  h.caracteristicas.some((c) => /fisioterapeuta/.test(c)) && Boolean(h.avisoLimitacao),
  'Persona H (limitação) deveria receber característica de adaptação e aviso',
);
assert(
  h.checklist.some((c) => /m[ée]dico ou fisioterapeuta/.test(c)),
  'Persona H: checklist deveria incluir a pergunta sobre a condição',
);

// 10. Persona I (prefere tratar com profissional): aviso próprio, sem inventar limitação.
const i = resultados[8].res;
assert(
  Boolean(i.avisoLimitacao) && /primeira conversa/.test(i.avisoLimitacao!),
  'Persona I deveria receber o aviso de levar o tema à primeira conversa',
);

// 11. Persona J (autonomia altíssima, online com folga): híbrido não pode
// aparecer superdimensionado no comparador.
const j = resultados[9].res;
assert(j.modelo === 'online', `Persona J deveria ser online (obteve ${j.modelo})`);
assert(j.dimensoes.autonomia >= 75, `Persona J deveria ter autonomia alta (${j.dimensoes.autonomia})`);
const linhaJ = j.comparador.find((l) => l.criterio === 'Para o seu cenário')!;
assert(linhaJ.hibrido !== 'Muito adequado', 'Persona J: híbrido não deveria ser "Muito adequado"');

// 12. Coerência das dimensões entre personas: experiente > iniciante em autonomia.
const autonomiaA = resultados[0].res.dimensoes.autonomia; // nunca treinou
const autonomiaB = resultados[1].res.dimensoes.autonomia; // experiente
assert(
  autonomiaB > autonomiaA + 20,
  `Autonomia deveria separar iniciante (${autonomiaA}) de experiente (${autonomiaB})`,
);

// 13. Persona L (contradição presença × rotina imprevisível) não pode quebrar
// nem sair sem explicação das duas demandas.
const l = resultados[10].res;
assert(l.plano.length === 3 && l.influencias.length === 3, 'Persona L: resultado incompleto na contradição');

console.log('\n' + '='.repeat(72));
console.log(`Arquétipos distintos nas ${resultados.length} personas: ${perfisDistintos.size}`);
console.log(
  'Formatos: ' + resultados.map((r) => `${r.res.modelo}`).join(', '),
);

if (falhas.length) {
  console.error('\nFALHAS:');
  falhas.forEach((f) => console.error('  ✗ ' + f));
  process.exit(1);
}
console.log('\n✓ Todos os testes do motor passaram.');
