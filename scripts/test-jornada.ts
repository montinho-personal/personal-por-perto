/**
 * Testes da camada de jornada.
 *
 * O risco desta camada não é aritmético: é ela virar uma esteira que empurra
 * todo mundo pelo mesmo caminho até o CTA comercial. Os invariantes abaixo
 * existem para garantir o contrário — que o próximo passo responde ao caso
 * da pessoa, que a jornada termina, e que ela entrega valor mesmo para quem
 * nunca vai contratar ninguém.
 *
 * Uso: npm run test:jornada
 */
import { existsSync } from 'node:fs';
import {
  ETAPAS,
  FERRAMENTAS,
  SITUACOES,
  linhasDoMapa,
  mapaVazio,
  montarPlano,
  podeGerarPlano,
  proximoPasso,
  rotearInicio,
  totalConcluidas,
  type FerramentaId,
  type Mapa,
  type PerfilMapa,
  type RespostasRoteador,
} from '../src/lib/jornada';
import { ferramentas } from '../src/data/ferramentas';

const falhas: string[] = [];
const ok = (c: boolean, m: string) => {
  console.log(`${c ? '  ✓' : '  ✗'} ${m}`);
  if (!c) falhas.push(m);
};

const HOJE = '2026-08-30';
const comMapa = (concluidas: FerramentaId[], perfil: PerfilMapa = {}): Mapa => {
  const m = mapaVazio(HOJE);
  for (const c of concluidas) m.concluidas[c] = HOJE;
  m.perfil = perfil;
  return m;
};

console.log('\n[1] Estrutura da jornada\n');
{
  ok(ETAPAS.length === 7, `sete etapas definidas (${ETAPAS.length})`);
  const ordens = ETAPAS.map((e) => e.ordem);
  ok(
    ordens.every((o, i) => o === i + 1),
    'ordens sequenciais e sem buraco',
  );

  // Cada etapa aponta para uma ferramenta, e cada ferramenta a uma etapa.
  const usadas = new Set(ETAPAS.map((e) => e.ferramenta));
  ok(usadas.size === ETAPAS.length, 'nenhuma ferramenta repetida entre etapas');
  ok(
    Object.keys(FERRAMENTAS).every((id) => usadas.has(id as FerramentaId)),
    'toda ferramenta registrada pertence a uma etapa',
  );

  // As URLs precisam existir de verdade.
  for (const f of Object.values(FERRAMENTAS)) {
    ok(existsSync(`src/pages${f.url.replace(/\/$/, '')}.astro`), `página existe: ${f.url}`);
  }

  // A jornada e o registro público não podem divergir.
  const noRegistro = new Set(ferramentas.filter((f) => f.disponivel).map((f) => f.slug));
  const naJornada = new Set(Object.values(FERRAMENTAS).map((f) => f.slug));
  ok(
    noRegistro.size === naJornada.size && [...naJornada].every((s) => noRegistro.has(s)),
    `jornada e registro cobrem as mesmas ferramentas (${naJornada.size} × ${noRegistro.size})`,
  );
}

console.log('\n[2] Situações de entrada\n');
{
  ok(SITUACOES.length >= 6, `${SITUACOES.length} situações oferecidas`);
  for (const s of SITUACOES) {
    ok(Boolean(FERRAMENTAS[s.destino]), `situação "${s.id}" aponta para ferramenta válida`);
    ok(s.porque.length > 60, `situação "${s.id}" explica o porquê`);
  }
  // As situações precisam cobrir mais de uma etapa — senão são decorativas.
  const etapasCobertas = new Set(SITUACOES.map((s) => FERRAMENTAS[s.destino].etapa));
  ok(etapasCobertas.size >= 5, `situações cobrem ${etapasCobertas.size} etapas diferentes`);
}

console.log('\n[3] Roteador de entrada\n');
{
  const casos: { nome: string; r: RespostasRoteador; espera: FerramentaId }[] = [
    {
      nome: 'já tem personal → avaliar o que tem',
      r: { treina: 'regular', dificuldade: 'duvidaTreino', acompanhamento: 'personal', contratar: 'sozinho' },
      espera: 'score',
    },
    {
      nome: 'começa e para → constância',
      r: { treina: 'comecoParo', dificuldade: 'naoMantenho', acompanhamento: 'nao', contratar: 'sozinho' },
      espera: 'constancia',
    },
    {
      nome: 'nunca treinou → rotina',
      r: { treina: 'nunca', dificuldade: 'naoSeiFazer', acompanhamento: 'nao', contratar: 'sozinho' },
      espera: 'rotina',
    },
    {
      nome: 'decidiu contratar → personal ideal',
      r: { treina: 'irregular', dificuldade: 'naoSeiFazer', acompanhamento: 'nao', contratar: 'decidido' },
      espera: 'personalIdeal',
    },
    {
      nome: 'treina e duvida do treino → auditoria',
      r: { treina: 'regular', dificuldade: 'duvidaTreino', acompanhamento: 'nao', contratar: 'sozinho' },
      espera: 'auditoria',
    },
    {
      nome: 'falta tempo → rotina',
      r: { treina: 'irregular', dificuldade: 'tempo', acompanhamento: 'nao', contratar: 'sozinho' },
      espera: 'rotina',
    },
    {
      nome: 'tem planilha → auditoria',
      r: { treina: 'regular', dificuldade: 'naoSeiFazer', acompanhamento: 'planilha', contratar: 'sozinho' },
      espera: 'auditoria',
    },
  ];

  for (const c of casos) {
    const rota = rotearInicio(c.r);
    ok(rota.ferramenta.id === c.espera, `${c.nome} (obteve ${rota.ferramenta.id})`);
    ok(rota.porque.length > 80, `${c.nome}: explicação com substância`);
  }

  // Quem quer seguir sozinho NUNCA é roteado direto para uma etapa comercial.
  const sozinho = rotearInicio({
    treina: 'regular',
    dificuldade: 'naoMantenho',
    acompanhamento: 'nao',
    contratar: 'sozinho',
  });
  ok(
    sozinho.ferramenta.id !== 'preco' && sozinho.ferramenta.id !== 'personalIdeal',
    `quem quer seguir sozinho não cai em etapa de contratação (obteve ${sozinho.ferramenta.id})`,
  );
}

console.log('\n[4] Próximo passo — responde ao caso, não à ordem\n');
{
  // Mapa vazio: começa por entender, não por vender.
  const vazio = proximoPasso(mapaVazio(HOJE));
  ok(vazio?.ferramenta.id === 'constancia', `mapa vazio começa por entender (obteve ${vazio?.ferramenta.id})`);

  // Quem organizou a rotina é levado a avaliar o treino, citando o dado.
  const comRotina = proximoPasso(comMapa(['rotina'], { diasReais: 3 }));
  ok(comRotina?.ferramenta.id === 'auditoria', `depois da rotina vem a auditoria (${comRotina?.ferramenta.id})`);
  ok(
    /3 vezes por semana/.test(comRotina?.porque ?? ''),
    'a ponte narrativa cita o dado que a pessoa já forneceu',
  );

  // Gargalo de agenda pula para rotina mesmo sem ter feito constância.
  const agenda = proximoPasso(comMapa([], { gargalo: 'capacidadeRotina' }));
  ok(agenda?.ferramenta.id === 'rotina', `gargalo de agenda vai direto para rotina (${agenda?.ferramenta.id})`);

  // Quem já tem personal é levado a avaliar, não à etapa 1.
  const jaTem = proximoPasso(comMapa([], { gargalo: 'jaTemPersonal' }));
  ok(jaTem?.ferramenta.id === 'score', `quem já tem personal avalia primeiro (${jaTem?.ferramenta.id})`);

  // Formato definido leva ao investimento, citando o formato.
  const formato = proximoPasso(
    comMapa(['constancia', 'rotina', 'auditoria', 'personalIdeal', 'formato'], {
      formatoRotulo: 'Acompanhamento online',
    }),
  );
  ok(formato?.ferramenta.id === 'preco', `formato definido leva ao investimento (${formato?.ferramenta.id})`);
  ok(/online/i.test(formato?.porque ?? ''), 'a ponte cita o formato escolhido');

  // A jornada TERMINA. Fingir que sempre há mais um passo seria esteira.
  const todas = comMapa(Object.keys(FERRAMENTAS) as FerramentaId[]);
  ok(proximoPasso(todas) === null, 'com tudo concluído, não há próximo passo inventado');

  // Nenhum próximo passo aponta para si mesmo.
  for (const id of Object.keys(FERRAMENTAS) as FerramentaId[]) {
    const p = proximoPasso(comMapa([id]));
    ok(p === null || p.ferramenta.id !== id, `${id}: não recomenda a si mesma`);
  }
}

console.log('\n[5] Mapa e Plano de Partida\n');
{
  const m = comMapa(['constancia', 'rotina'], {
    diasReais: 3,
    divisao: 'Full Body',
    gargaloRotulo: 'Rotina imprevisível',
    objetivo: 'emagrecer',
  });
  const linhas = linhasDoMapa(m);
  ok(linhas.length >= 3, `mapa com ${linhas.length} linhas preenchidas`);
  ok(
    linhas.every((l) => l.rotulo && l.valor),
    'nenhuma linha do mapa sai vazia',
  );

  // O plano exige substância: com duas ferramentas ainda não aparece.
  ok(!podeGerarPlano(m), 'com 2 etapas o plano ainda não é gerado');
  const m3 = comMapa(['constancia', 'rotina', 'auditoria'], m.perfil);
  ok(podeGerarPlano(m3), 'com 3 etapas o plano é liberado');

  const plano = montarPlano(m3)!;
  ok(plano.acoes.length >= 1 && plano.acoes.length <= 4, `plano com ${plano.acoes.length} ações (máx. 4)`);
  ok(
    plano.acoes.some((a) => /3 horários|Full Body/i.test(a)),
    'as ações usam o que a pessoa respondeu, não texto genérico',
  );
  ok(
    !/garantid|transforme sua vida|melhor versão/i.test(JSON.stringify(plano)),
    'sem promessa vazia no plano',
  );

  // Mapa vazio nunca gera plano nem quebra.
  ok(montarPlano(mapaVazio(HOJE)) === null, 'mapa vazio não gera plano');
  ok(linhasDoMapa(mapaVazio(HOJE)).length === 0, 'mapa vazio não inventa linhas');
  ok(totalConcluidas(mapaVazio(HOJE)) === 0, 'contagem zerada em mapa vazio');
}

console.log('\n[6] Nada sensível no modelo de dados\n');
{
  const m = comMapa(['constancia'], {
    diasReais: 3,
    cidadeSlug: 'barueri-sp',
    cidadeNome: 'Barueri',
    score: 72,
  });
  // Lista de permissão em vez de lista de proibição: qualquer campo novo
  // precisa ser acrescentado aqui conscientemente, o que força a decisão de
  // privacidade a ser tomada por alguém em vez de passar despercebida.
  const PERMITIDOS = new Set([
    'experiencia',
    'objetivo',
    'diasReais',
    'divisao',
    'gargalo',
    'gargaloRotulo',
    'formato',
    'formatoRotulo',
    'autonomia',
    'cidadeSlug',
    'cidadeNome',
    'faixaPreco',
    'score',
    'scorePonto',
  ]);
  const chaves = Object.keys(m.perfil);
  const intrusos = chaves.filter((k) => !PERMITIDOS.has(k));
  ok(intrusos.length === 0, `perfil só contém campos previstos (intrusos: ${intrusos.join(', ') || 'nenhum'})`);

  // E o conjunto permitido em si não pode conter nada identificável.
  const identificavel = /^(nome|email|telefone|whatsapp|cpf|nascimento|endereco)$|profissional/i;
  const suspeitos = [...PERMITIDOS].filter((k) => identificavel.test(k));
  ok(suspeitos.length === 0, `nenhum campo identificável na lista de permissão (${suspeitos.join(', ') || 'nenhum'})`);
}

console.log('\n' + '='.repeat(70));
if (falhas.length) {
  console.error(`FALHAS (${falhas.length}):`);
  falhas.forEach((f) => console.error('  ✗ ' + f));
  process.exit(1);
}
console.log('✓ Todos os testes da jornada passaram.');
