/**
 * Testes do motor de próximo passo.
 *
 * O risco deste motor não é aritmético. É ele virar uma esteira que empurra
 * todo mundo para o mesmo CTA comercial, ou oferecer venda a quem acabou de
 * descobrir um problema. Os invariantes abaixo existem para travar isso no
 * código, e não na boa vontade de quem escrever a próxima regra.
 *
 * Uso: npm run test:proximo
 */
import {
  LIMITE_IGNORADOS,
  calcularIntencao,
  calcularNecessidade,
  ehAcao,
  getProximaAcao,
  type ContextoSessao,
  type EixoProblema,
  type Flag,
  type RelatoFerramenta,
} from '../src/lib/proximoPasso';
import { FERRAMENTAS, mapaVazio, type FerramentaId, type Mapa, type PerfilMapa } from '../src/lib/jornada';
import { TEXTOS, preencher } from '../src/data/proximoPassoMensagens';
import { relatoAuditoria, relatoConstancia, relatoRotina } from '../src/lib/relatos';
import { diagnosticarConstancia } from '../src/lib/constancia';
import { rotinaTreinoEngine } from '../src/lib/rotinaTreino';
import { analisarTreino } from '../src/lib/auditoriaTreino';

const falhas: string[] = [];
const ok = (c: boolean, m: string) => {
  console.log(`${c ? '  ✓' : '  ✗'} ${m}`);
  if (!c) falhas.push(m);
};

const HOJE = '2026-09-05';
const CONSULTORIA = '/personal-trainer-montinho/';

const comMapa = (concluidas: FerramentaId[] = [], perfil: PerfilMapa = {}): Mapa => {
  const m = mapaVazio(HOJE);
  for (const c of concluidas) m.concluidas[c] = HOJE;
  m.perfil = perfil;
  return m;
};

const relato = (x: Partial<RelatoFerramenta> = {}): RelatoFerramenta => ({
  ferramenta: 'auditoria',
  tipoResultado: 'variasQuestoes',
  nivel: 'critico',
  eixo: 'estrutura',
  ...x,
});

const decidir = (r: RelatoFerramenta, m: Mapa = comMapa(), s: ContextoSessao = {}) =>
  getProximaAcao({ relato: r, mapa: m, sessao: s, urlConsultoria: CONSULTORIA });

/* ================================================================== */
console.log('\n[1] O resultado muda o CTA — a exigência central\n');

{
  const m = comMapa();
  const ruim = decidir(relato({ nivel: 'critico', eixo: 'estrutura', tipoResultado: 'variasQuestoes' }), m);
  const agenda = decidir(relato({ nivel: 'critico', eixo: 'agenda', tipoResultado: 'variasQuestoes' }), m);
  const bom = decidir(relato({ nivel: 'bom', eixo: 'nenhum', tipoResultado: 'coerente' }), m);

  ok(ehAcao(ruim) && ehAcao(agenda), 'auditoria com problema gera ação nos dois eixos');
  ok(
    ehAcao(ruim) && ehAcao(agenda) && ruim.cta.url !== agenda.cta.url,
    'MESMA ferramenta, eixos diferentes -> destinos diferentes',
  );
  ok(!ehAcao(bom), 'auditoria coerente e sem gargalo -> silêncio, não CTA');
}

{
  // A auditoria não pode se auto-oferecer: o eixo "estrutura" resolve nela.
  const d = decidir(relato({ ferramenta: 'auditoria', eixo: 'estrutura' }));
  ok(ehAcao(d) && d.cta.url !== FERRAMENTAS.auditoria.url, 'nunca oferece a ferramenta atual');
  ok(ehAcao(d) && d.regra !== 'eixoEstrutura', 'sem ferramenta livre no eixo, a regra do eixo se cala em vez de improvisar');

  // De outra ferramenta, o mesmo eixo aponta para a auditoria.
  const outra = decidir(relato({ ferramenta: 'constancia', eixo: 'estrutura' }));
  ok(ehAcao(outra) && outra.cta.url === FERRAMENTAS.auditoria.url, 'eixo estrutura leva à auditoria quando ela está livre');
}

{
  // Com artigo no relato, o eixo sem ferramenta livre cai para o conteúdo.
  const d = decidir(
    relato({
      ferramenta: 'auditoria',
      eixo: 'estrutura',
      conteudo: [{ url: '/musculacao/abc-ou-full-body/', titulo: 'ABC ou full body?' }],
    }),
  );
  ok(ehAcao(d) && d.tipo === 'conteudo', 'sem ferramenta livre, o próximo passo vira leitura');
}

/* ================================================================== */
console.log('\n[2] Supressão\n');

{
  const m = comMapa(['constancia', 'rotina']);
  const d = decidir(relato({ ferramenta: 'auditoria', eixo: 'aderencia' }), m);
  const urls = Object.values(FERRAMENTAS).map((f) => f.url);
  ok(
    !ehAcao(d) || (d.cta.url !== FERRAMENTAS.constancia.url && d.cta.url !== FERRAMENTAS.rotina.url),
    'nunca oferece ferramenta já concluída no mapa',
  );
  ok(!ehAcao(d) || urls.includes(d.cta.url) || d.tipo !== 'ferramenta', 'destino de ferramenta é sempre uma URL do registro');
}

{
  const s: ContextoSessao = { concluidasAgora: ['rotina'] };
  const d = decidir(relato({ ferramenta: 'auditoria', eixo: 'agenda' }), comMapa(), s);
  ok(
    !ehAcao(d) || d.cta.url !== FERRAMENTAS.rotina.url,
    'nunca oferece ferramenta concluída nesta mesma sessão',
  );
}

{
  const r = relato({ ferramenta: 'constancia', eixo: 'estrutura' });
  const semIgnorar = decidir(r);
  const ignorada = decidir(r, comMapa(), { ignorados: { eixoEstrutura: LIMITE_IGNORADOS } });
  ok(ehAcao(semIgnorar) && semIgnorar.regra === 'eixoEstrutura', 'regra do eixo aparece na primeira vez');
  ok(!ehAcao(ignorada) || ignorada.regra !== 'eixoEstrutura', `regra some depois de ${LIMITE_IGNORADOS} impressões sem clique`);
}

/* ================================================================== */
console.log('\n[3] Os dois escores são medidas separadas\n');

{
  // Necessidade altíssima, intenção zero: quem acabou de descobrir um
  // problema e nunca sinalizou querer contratar.
  const r = relato({ ferramenta: 'score', tipoResultado: 'variosPontos', nivel: 'critico', eixo: 'supervisao', pontuacao: 28 });
  const m = comMapa();
  const n = calcularNecessidade(r);
  const i = calcularIntencao(r, m);
  ok(n >= 60, `necessidade alta em score 28/100 (${n})`);
  ok(i < 30, `intenção baixa sem nenhuma etapa de decisão (${i})`);

  const d = decidir(r, m);
  ok(ehAcao(d) && d.tipo !== 'consultoria', 'necessidade alta com intenção baixa NUNCA recebe consultoria');
}

{
  // Intenção alta de verdade: percorreu decisão, formato e preço.
  const m = comMapa(['personalIdeal', 'formato', 'preco', 'rotina', 'auditoria', 'constancia'], {
    formatoRotulo: 'Personal online',
  });
  const r = relato({ ferramenta: 'score', tipoResultado: 'algunsPontos', nivel: 'atencao', eixo: 'supervisao', pontuacao: 52 });
  const i = calcularIntencao(r, m);
  ok(i >= 60, `intenção alta depois de decisão + formato + preço (${i})`);
  const d = decidir(r, m);
  ok(ehAcao(d) && d.tipo === 'consultoria', 'necessidade E intenção altas -> consultoria');
}

{
  const m = comMapa(['personalIdeal', 'formato', 'preco', 'rotina', 'auditoria', 'constancia'], {
    formatoRotulo: 'Personal online',
  });
  const r = relato({ ferramenta: 'score', nivel: 'atencao', eixo: 'supervisao', pontuacao: 52 });
  const d = decidir(r, m, { consultoriaOfertada: true });
  ok(!ehAcao(d) || d.tipo !== 'consultoria', 'consultoria no máximo uma vez por sessão');
}

/* ================================================================== */
console.log('\n[4] Segurança em saúde\n');

{
  const m = comMapa(['personalIdeal', 'formato', 'preco', 'rotina', 'auditoria', 'constancia'], {
    formatoRotulo: 'Personal presencial',
  });
  const flags: Flag[] = ['limitacaoDeclarada'];
  const r = relato({ ferramenta: 'score', nivel: 'critico', eixo: 'supervisao', pontuacao: 30, flags });
  const d = decidir(r, m);
  ok(!ehAcao(d) || d.tipo !== 'consultoria', 'limitação declarada bloqueia consultoria mesmo com intenção alta');
  ok(
    (ehAcao(d) ? d.ressalva : d.ressalva) !== undefined,
    'limitação declarada sempre acompanha ressalva de médico ou fisioterapeuta',
  );
  const texto = ehAcao(d) ? d.ressalva! : d.ressalva!;
  ok(/médico|fisioterapeuta/i.test(texto), 'a ressalva cita médico ou fisioterapeuta (regra editorial fixa)');
}

/* ================================================================== */
console.log('\n[5] Silêncio é resposta legítima\n');

{
  const d = decidir(relato({ ferramenta: 'score', tipoResultado: 'muitoConsistente', nivel: 'bom', eixo: 'nenhum', pontuacao: 88 }));
  ok(!ehAcao(d), 'score 88/100 sem eixo -> nenhum CTA');
  ok(!ehAcao(d) && d.motivo === 'resultadoBom', 'o motivo do silêncio é declarado');
  ok(!ehAcao(d) && d.fechamento.length > 20, 'o silêncio ainda entrega um fechamento para quem lê');
}

{
  const todas: FerramentaId[] = ['constancia', 'rotina', 'auditoria', 'personalIdeal', 'formato', 'preco', 'score'];
  const d = decidir(relato({ ferramenta: 'score', nivel: 'atencao', eixo: 'nenhum' }), comMapa(todas));
  ok(!ehAcao(d), 'jornada inteira concluída -> silêncio, não uma oitava sugestão inventada');
}

/* ================================================================== */
console.log('\n[6] A jornada termina — não é esteira infinita\n');

{
  // Simula alguém seguindo sempre o CTA oferecido. Tem de parar.
  let m = comMapa();
  const visitadas: FerramentaId[] = [];
  let atual: FerramentaId = 'constancia';
  let voltas = 0;

  while (voltas < 12) {
    voltas += 1;
    m.concluidas[atual] = HOJE;
    visitadas.push(atual);
    const d = decidir(relato({ ferramenta: atual, nivel: 'atencao', eixo: 'nenhum' }), m);
    if (!ehAcao(d) || d.tipo !== 'ferramenta') break;
    const prox = Object.values(FERRAMENTAS).find((f) => f.url === d.cta.url);
    if (!prox) break;
    atual = prox.id;
  }

  ok(voltas <= 8, `a sequência termina em no máximo 8 passos (terminou em ${voltas})`);
  ok(new Set(visitadas).size === visitadas.length, 'nenhuma ferramenta é oferecida duas vezes na mesma sequência');
}

/* ================================================================== */
console.log('\n[7] Textos\n');

{
  const vazio = { dias: undefined, gargalo: undefined, formato: undefined, cidade: undefined };
  let cru = 0;
  for (const [id, bloco] of Object.entries(TEXTOS)) {
    for (const campo of ['titulo', 'texto', 'porque'] as const) {
      const cheio = preencher(bloco[campo], { dias: 3, gargalo: 'a agenda', formato: 'Personal online', cidade: 'Belo Horizonte' });
      const seco = preencher(bloco[campo], vazio);
      if (cheio.includes('{{') || seco.includes('{{')) {
        cru += 1;
        console.log(`      ! ${id}.${campo} deixou template cru`);
      }
      if (!seco.trim()) {
        cru += 1;
        console.log(`      ! ${id}.${campo} fica vazio sem variável`);
      }
    }
  }
  ok(cru === 0, 'nenhum modelo renderiza template cru nem texto vazio quando falta variável');
}

{
  const eixos: EixoProblema[] = ['aderencia', 'agenda', 'estrutura', 'progressao', 'supervisao', 'orcamento'];
  let cobertos = 0;
  for (const e of eixos) {
    const d = decidir(relato({ ferramenta: 'constancia', nivel: 'critico', eixo: e }));
    if (ehAcao(d) && d.analytics.axis === e) cobertos += 1;
  }
  ok(cobertos === eixos.length, `todo eixo tem destino (${cobertos}/${eixos.length})`);
}

/* ================================================================== */
console.log('\n[8] Analytics sem dado identificável\n');

{
  const m = comMapa(['rotina'], { cidadeNome: 'Belo Horizonte', diasReais: 3, score: 41 });
  const d = decidir(relato({ nivel: 'critico', eixo: 'aderencia' }), m);
  const payload = JSON.stringify(ehAcao(d) ? d.analytics : d.analytics);
  ok(!/Belo Horizonte/.test(payload), 'o payload não carrega cidade nem outro dado do perfil');
  ok(/need_bucket/.test(payload) && /intent_bucket/.test(payload), 'os dois escores viajam como faixa, nunca como número cru');
  ok(!/\b\d{2,3}\b/.test(payload.replace(/[^"]*"/g, '')), 'nenhuma pontuação bruta no payload');
}

/* ================================================================== */
console.log('\n[9] Piloto ponta a ponta: engine real -> relato -> motor\n');

{
  // Semana apertada, treino sem clareza, perde o resto da semana quando falta.
  const travada = diagnosticarConstancia({
    diasPlanejados: '5',
    diasReais: '1',
    duracao: 'mais90',
    deslocamento: 'mais30',
    local: 'academia',
    previsibilidade: 'quaseNunca',
    reacaoFalta: 'perdeSemana',
    barreiras: ['tempo', 'deslocamento'],
    clareza: 'decideNaHora',
    progresso: 'naoFacoIdeia',
    planoB: 'nao',
  });
  const rel = relatoConstancia(travada);
  ok(rel.ferramenta === 'constancia', 'relato da constância identifica a ferramenta');
  ok(rel.eixo !== 'nenhum', `constância travada gera eixo (${rel.eixo})`);
  const d = decidir(rel);
  ok(ehAcao(d) && d.cta.url !== FERRAMENTAS.constancia.url, 'constância travada -> ação para outra ferramenta');
}

{
  const plano = rotinaTreinoEngine({
    objetivo: 'massa',
    experiencia: 'regular',
    dias: '4',
    tempo: '45a60',
    local: 'academia',
    previsibilidade: 'fixa',
    dificuldade: 'semEvolucao',
  });
  const rel = relatoRotina(plano, {
    objetivo: 'massa',
    experiencia: 'regular',
    dias: '4',
    tempo: '45a60',
    local: 'academia',
    previsibilidade: 'fixa',
    dificuldade: 'semEvolucao',
  });
  ok(rel.nivel === 'neutro', 'a rotina prescreve, então nunca declara resultado "bom"');
  ok(rel.eixo === 'progressao', 'dificuldade semEvolucao vira eixo progressao');
  const d = decidir(rel);
  ok(ehAcao(d) && d.cta.url === FERRAMENTAS.auditoria.url, 'quem não vê evolução é mandado para a auditoria');
}

{
  // Treino coerente: peito/costas/pernas 2x, progressão declarada, adesão alta.
  const coerente = analisarTreino({
    objetivo: 'hipertrofia',
    experiencia: '1a3anos',
    semana: [
      ['peito', 'triceps'],
      ['costas', 'biceps'],
      ['quadriceps', 'gluteos'],
      ['peito', 'ombros'],
      ['costas'],
      ['quadriceps', 'posterior'],
      [],
    ],
    duracao: '45a60',
    exercicios: '4a5',
    progressao: 'carga',
    registro: 'sempre',
    prioridades: ['quadriceps'],
    aderencia: 'sempre',
  });
  const rel = relatoAuditoria(coerente);
  const d = decidir(rel, comMapa(['rotina']));
  ok(
    rel.nivel !== 'critico',
    `treino bem montado não é relatado como crítico (${rel.nivel})`,
  );
  ok(
    !(ehAcao(d) && d.tipo === 'consultoria'),
    'auditoria sem problema grave nunca termina em oferta comercial',
  );
}

/* ================================================================== */
console.log(
  falhas.length ? `\n${falhas.length} falha(s):\n${falhas.map((f) => `  - ${f}`).join('\n')}\n` : '\nTudo certo.\n',
);
process.exit(falhas.length ? 1 : 0);
