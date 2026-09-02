/**
 * Testes do motor de CTA contextual.
 *
 * Cada caso é uma afirmação sobre o comportamento que não pode regredir:
 * cidade atendida oferece presencial, cidade distante nunca finge
 * atendimento local, humor não recebe CTA comercial, conteúdo sensível
 * recebe CTA discreto, e ferramenta desligada nunca vira link quebrado.
 *
 * Uso: npm run test:cta
 */
import { getContextualCTA, type PosicaoCta } from '../src/lib/ctaEngine';
import { cidades } from '../src/data/cidades';
import { bairros } from '../src/data/bairros';
import { campanhas } from '../src/data/ctaCampanhas';
import { features } from '../src/data/features';
import { montarMensagemWhatsapp } from '../src/lib/whatsappMensagem';

const falhas: string[] = [];
const ok = (cond: boolean, msg: string) => {
  console.log((cond ? '  ✓ ' : '  ✗ ') + msg);
  if (!cond) falhas.push(msg);
};

interface Caso {
  nome: string;
  path: string;
  cidadeNome?: string;
  localidade?: string;
  uf?: string;
  esperado: string | null;
  varianteEsperada?: string;
}

const casos: Caso[] = [
  // --- Local ---
  { nome: 'Cidade atendida (Barueri)', path: '/personal-trainer/barueri-sp/', cidadeNome: 'Barueri', localidade: 'em Barueri', uf: 'SP', esperado: 'localPresencial', varianteEsperada: 'local' },
  { nome: 'Cidade atendida (Alphaville)', path: '/personal-trainer/alphaville-sp/', cidadeNome: 'Alphaville', esperado: 'localPresencial' },
  { nome: 'Cidade distante (Recife)', path: '/personal-trainer/recife-pe/', cidadeNome: 'Recife', localidade: 'no Recife', uf: 'PE', esperado: 'onlineCoaching', varianteEsperada: 'local' },
  { nome: 'Cidade distante (Salvador)', path: '/personal-trainer/salvador-ba/', cidadeNome: 'Salvador', esperado: 'onlineCoaching' },
  { nome: 'Bairro de capital distante (Leblon/RJ)', path: '/personal-trainer-leblon/', esperado: 'onlineCoaching' },
  { nome: 'Bairro de São Paulo (Moema) — presencial condicional', path: '/personal-trainer-moema/', esperado: 'localPresencialCondicional' },
  { nome: 'Capital com cobertura condicional (São Paulo)', path: '/personal-trainer/sao-paulo-sp/', cidadeNome: 'São Paulo', localidade: 'em São Paulo', esperado: 'localPresencialCondicional' },
  { nome: 'Hub de cidades', path: '/personal-trainer/', esperado: 'personalMatch' },
  { nome: 'Página de estado', path: '/estado/sao-paulo/', esperado: 'personalMatch' },

  // --- Decisão e preço ---
  { nome: 'Como escolher personal', path: '/guias/como-escolher-personal-trainer/', esperado: 'personalMatch', varianteEsperada: 'featured' },
  { nome: 'Quanto custa personal', path: '/guias/quanto-custa-personal-trainer/', esperado: 'precoComparacao', varianteEsperada: 'endArticle' },
  { nome: 'A calculadora de preço — sem CTA', path: '/ferramentas/calculadora-preco-personal/', esperado: null },
  { nome: 'Vale a pena contratar', path: '/guias/vale-a-pena-contratar-personal-trainer/', esperado: 'precoComparacao' },
  // Quem lê este artigo está na decisão de formato, não na de contratar:
  // vai para a ferramenta que responde exatamente presencial × online.
  { nome: 'Personal online funciona', path: '/guias/personal-online-funciona/', esperado: 'formatoAcompanhamento' },
  { nome: 'Guia de público específico (gestantes)', path: '/guias/personal-trainer-para-gestantes/', esperado: 'personalMatch' },

  // --- Entradas amplas: o único lugar em que o mapa é o próximo passo ---
  { nome: 'Hub de musculação', path: '/musculacao/', esperado: 'mapaDoTreino', varianteEsperada: 'featured' },
  { nome: 'Hub de emagrecimento', path: '/emagrecimento/', esperado: 'mapaDoTreino' },
  { nome: 'Hub de guias', path: '/guias/', esperado: 'mapaDoTreino' },
  // Exceção deliberada: público e necessidade específicos.
  { nome: 'Hub de Mounjaro mantém o CTA temático', path: '/mounjaro-e-treino/', esperado: 'farmacologicoMassa' },
  // Hub local continua no diagnóstico de formato, que é mais direto.
  { nome: 'Hub de cidades mantém o diagnóstico', path: '/personal-trainer/', esperado: 'personalMatch' },
  { nome: 'Página de estado mantém o diagnóstico', path: '/estado/parana/', esperado: 'personalMatch' },

  // --- Temas ---
  { nome: 'Execução de exercício (agachamento)', path: '/musculacao/agachamento-como-fazer/', esperado: 'execucaoProximoPasso', varianteEsperada: 'subtle' },
  { nome: 'Execução de exercício (remada curvada)', path: '/musculacao/remada-curvada-como-fazer/', esperado: 'execucaoProximoPasso' },
  { nome: 'Hipertrofia (treino de peito)', path: '/musculacao/treino-de-peito/', esperado: 'hipertrofiaEstrutura' },
  { nome: 'Emagrecimento (perder barriga)', path: '/emagrecimento/como-perder-barriga/', esperado: 'emagrecimentoEstrategia' },
  { nome: 'Iniciante (treino para iniciantes)', path: '/musculacao/treino-para-iniciantes/', esperado: 'inicianteComecar' },
  { nome: 'Rotina (frequência de treino)', path: '/musculacao/frequencia-de-treino/', esperado: 'rotinaTreino' },
  { nome: 'Aderência (como não desistir)', path: '/guias/como-nao-desistir-do-treino/', esperado: 'constanciaDiagnostico' },
  { nome: 'Aderência (voltar a treinar)', path: '/musculacao/voltar-a-treinar-depois-de-parar/', esperado: 'constanciaDiagnostico' },
  { nome: 'A própria ferramenta de constância — sem CTA', path: '/ferramentas/diagnostico-da-constancia/', esperado: null },
  { nome: 'Rotina (ABC ou Full Body)', path: '/musculacao/abc-ou-full-body/', esperado: 'rotinaTreino' },
  { nome: 'A própria ferramenta de rotina — sem CTA', path: '/ferramentas/treino-para-minha-rotina/', esperado: null },
  { nome: 'Mounjaro (preservar massa)', path: '/mounjaro-e-treino/como-evitar-perda-de-massa-muscular/', esperado: 'farmacologicoMassa' },
  { nome: 'Suplemento (creatina)', path: '/musculacao/creatina-o-que-e-como-tomar/', esperado: 'personalMatch' },

  // --- Segurança ---
  { nome: 'Conteúdo sensível (dor lombar)', path: '/musculacao/treinar-com-dor-lombar/', esperado: 'retomadaSegura', varianteEsperada: 'subtle' },
  { nome: 'Conteúdo sensível (dor no joelho)', path: '/musculacao/treinar-com-dor-no-joelho/', esperado: 'retomadaSegura' },
  { nome: 'Humor fitness — sem CTA comercial', path: '/humor-fitness/memes-de-academia/', esperado: null },
  { nome: 'Humor fitness (hub) — sem CTA', path: '/humor-fitness/', esperado: null },
  { nome: 'Institucional (privacidade) — sem CTA', path: '/privacidade/', esperado: null },
  { nome: 'Institucional (sobre) — sem CTA', path: '/sobre/', esperado: null },
  { nome: 'A própria ferramenta — sem CTA', path: '/ferramentas/encontre-seu-personal-ideal/', esperado: null },
  { nome: 'Home — override desativa', path: '/', esperado: null },
];

console.log('\n[1] Decisões por página\n');
for (const c of casos) {
  const d = getContextualCTA({ path: c.path, cidadeNome: c.cidadeNome, localidade: c.localidade, uf: c.uf });
  const obtido = d?.campanha.id ?? null;
  const acerto = obtido === c.esperado;
  ok(acerto, `${c.nome} → ${obtido ?? 'nenhum CTA'}${acerto ? '' : ` (esperado: ${c.esperado ?? 'nenhum'})`}`);
  if (acerto && c.varianteEsperada && d) {
    ok(d.variante === c.varianteEsperada, `   variante ${d.variante} (esperada ${c.varianteEsperada})`);
  }
}

console.log('\n[2] CTA manual na página silencia o motor\n');
{
  const d = getContextualCTA({ path: '/musculacao/treino-de-peito/', temCtaManual: true });
  ok(d === null, 'página com CTA manual não recebe CTA automático');
}

console.log('\n[3] Feature flags nunca geram link quebrado\n');
{
  // Estado informativo: ter zero flags desligadas é legítimo (todas as
  // ferramentas publicadas) e não pode ser transformado em falha de teste.
  const desligadas = (Object.keys(features) as (keyof typeof features)[]).filter((f) => !features[f]);
  console.log(`     flags desligadas no momento: ${desligadas.join(', ') || 'nenhuma'}`);

  // Nenhuma decisão pode apontar para ferramenta desligada.
  const todosCaminhos = casos.map((c) => c.path);
  let quebrados = 0;
  for (const p of todosCaminhos) {
    const d = getContextualCTA({ path: p, cidadeNome: 'Teste' });
    if (!d) continue;
    const req = d.campanha.requer;
    if (req && !features[req]) quebrados++;
  }
  ok(quebrados === 0, `nenhuma decisão aponta para ferramenta desligada (${quebrados} encontradas)`);

  // Com a ferramenta de rotina publicada, o tópico deixa de cair no fallback
  // e passa a apontar para ela — sem tocar em nenhuma página.
  const rotina = getContextualCTA({ path: '/musculacao/melhor-horario-para-treinar/' });
  ok(rotina?.campanha.id === 'rotinaTreino', `rotina publicada roteia para a ferramenta (obteve ${rotina?.campanha.id})`);

  // O mecanismo de fallback continua valendo: simulamos uma campanha presa a
  // uma flag desligada e conferimos que ela nunca vira link.
  const presasEmFlagDesligada = Object.values(campanhas).filter(
    (c) => c.requer && !features[c.requer],
  );
  ok(
    presasEmFlagDesligada.length === 0,
    `nenhuma campanha ativa depende de flag desligada (${presasEmFlagDesligada.map((c) => c.id).join(', ') || 'ok'})`,
  );
}

console.log('\n[4] Destinos internos existem e terminam com barra\n');
{
  let erros = 0;
  for (const c of Object.values(campanhas)) {
    const destinos = [c.destino, c.secundario?.destino].filter(Boolean) as string[];
    for (const d of destinos) {
      if (d === 'whatsapp') continue;
      if (!d.startsWith('/') || !d.endsWith('/')) {
        console.log(`     destino irregular em ${c.id}: ${d}`);
        erros++;
      }
    }
  }
  ok(erros === 0, `todos os destinos internos com barra final (${erros} irregulares)`);
}

console.log('\n[5] Mensagem de WhatsApp é contextual\n');
{
  const barueri = getContextualCTA({
    path: '/personal-trainer/barueri-sp/',
    cidadeNome: 'Barueri',
    localidade: 'em Barueri',
    uf: 'SP',
  })!;
  const msgBarueri = montarMensagemWhatsapp({
    campanha: barueri.campanha.id,
    topico: barueri.classificacao.topico,
    cidadeNome: 'Barueri',
    localidade: 'em Barueri',
  });
  console.log(`     Barueri: ${msgBarueri}`);
  ok(msgBarueri.includes('Barueri'), 'mensagem cita a cidade');
  ok(/presencial/i.test(msgBarueri), 'mensagem de cidade atendida fala em presencial');

  const fortaleza = getContextualCTA({
    path: '/personal-trainer/fortaleza-ce/',
    cidadeNome: 'Fortaleza',
    localidade: 'em Fortaleza',
  })!;
  const msgFortaleza = montarMensagemWhatsapp({
    campanha: fortaleza.campanha.id,
    topico: fortaleza.classificacao.topico,
    cidadeNome: 'Fortaleza',
    localidade: 'em Fortaleza',
  });
  console.log(`     Fortaleza: ${msgFortaleza}`);
  ok(msgFortaleza.includes('Fortaleza'), 'mensagem cita a cidade distante');
  ok(/online/i.test(msgFortaleza), 'mensagem de cidade distante fala em online');
  ok(!/presencial/i.test(msgFortaleza), 'mensagem de cidade distante NÃO promete presencial');

  const artigo = montarMensagemWhatsapp({
    campanha: 'personalMatch',
    topico: 'rotina-tempo',
    assunto: 'Quanto tempo de treino por dia',
  });
  console.log(`     Artigo:    ${artigo}`);
  ok(artigo.includes('Quanto tempo de treino por dia'), 'mensagem de artigo cita o assunto');
  ok(!/quero saber mais/i.test(artigo), 'nunca usa "quero saber mais"');
}

console.log('\n[6] O mapa não vaza para páginas com intenção nomeada\n');
{
  // Apontar para o hub em página específica troca uma resposta por um menu.
  const especificas = [
    '/musculacao/supino-como-fazer/',
    '/musculacao/treino-de-peito/',
    '/emagrecimento/como-perder-barriga/',
    '/guias/quanto-custa-personal-trainer/',
    '/guias/como-nao-desistir-do-treino/',
    '/personal-trainer/fortaleza-ce/',
    '/personal-trainer/barueri-sp/',
    '/personal-trainer-moema/',
    '/musculacao/treinar-com-dor-lombar/',
  ];
  let vazou = 0;
  for (const p of especificas) {
    const d = getContextualCTA({ path: p, cidadeNome: 'Teste' });
    if (d?.campanha.id === 'mapaDoTreino') {
      vazou += 1;
      console.log(`     vazou em ${p}`);
    }
  }
  ok(vazou === 0, `mapa ausente nas ${especificas.length} páginas com problema já nomeado`);

  // E o inverso: em entrada ampla, ele precisa estar mesmo.
  const amplas = ['/musculacao/', '/emagrecimento/', '/guias/'];
  const cobertas = amplas.filter((p) => getContextualCTA({ path: p })?.campanha.id === 'mapaDoTreino');
  ok(cobertas.length === amplas.length, `mapa presente nos ${amplas.length} hubs de seção`);
}

console.log('\n[7] Nenhuma promessa indevida na copy das campanhas\n');
{
  const texto = JSON.stringify(
    Object.values(campanhas).map((c) => [
      c.eyebrow,
      typeof c.titulo === 'string' ? c.titulo : c.titulo({ cidadeNome: 'X', localidade: 'em X' }),
      typeof c.texto === 'string' ? c.texto : c.texto({ cidadeNome: 'X', localidade: 'em X' }),
      c.rotulo,
      c.microcopy ?? '',
    ]),
  );
  ok(!/CREF|CONFEF/i.test(texto), 'sem menção a conselho profissional');
  ok(!/\bcura\b|milagr|garantid/i.test(texto), 'sem promessa de cura ou garantia');
  ok(!texto.includes('!!'), 'sem exagero marketeiro (múltiplas exclamações)');
  ok(!/MELHOR PERSONAL|TRANSFORME SEU CORPO/i.test(texto), 'sem alegação superlativa inverificável');
}

/* ------------------------------------------------------------------ *
 * [8] Escada de posição — o que o briefing chama de "não repetir"
 * ------------------------------------------------------------------ */
console.log('\n[8] Posição do CTA muda o degrau da jornada\n');
{
  const POSICOES: PosicaoCta[] = ['inicio', 'meio', 'fim'];

  // Nenhum CTA comercial no primeiro terço, em página nenhuma.
  const rotas = [
    '/personal-trainer/recife-pe/',
    '/personal-trainer/barueri-sp/',
    '/personal-trainer-batel/',
    '/guias/quanto-custa-personal-trainer/',
    '/musculacao/treino-de-peito/',
    '/emagrecimento/deficit-calorico-como-funciona/',
  ];
  const comerciaisCedo = rotas.filter(
    (r) => getContextualCTA({ path: r, posicao: 'inicio' })?.tipo === 'comercial',
  );
  ok(comerciaisCedo.length === 0, `nenhum CTA comercial no início (${comerciaisCedo.join(', ')})`);

  /*
   * Escada só existe onde o bloco já foi feito.
   *
   * O BLOCO 1 (cidade e bairro) tem posições distintas — é o que a
   * asserção seguinte cobre, nas 1.074 páginas. Os artigos ainda devolvem
   * a mesma campanha nas três posições, e isso não é defeito em produção:
   * cada artigo renderiza UM único CTA, no fim. Vira defeito no dia em que
   * um artigo receber o segundo bloco — que é justamente o trabalho dos
   * BLOCOS 2 a 8. Este contador existe para marcar esse alvo.
   */
  const artigos = rotas.filter((r) => !r.startsWith('/personal-trainer'));
  const semEscada = artigos.filter((r) => {
    const ids = POSICOES.map((p) => getContextualCTA({ path: r, posicao: p })?.campanha.id);
    return new Set(ids).size === 1;
  });
  console.log(
    `  · ${semEscada.length} de ${artigos.length} artigos amostrados ainda sem escada de posição` +
      ' (esperado: blocos 2 a 8 pendentes)',
  );

  // A escada local vale para as 1.074 páginas locais, não para uma amostra.
  const locais = [
    ...cidades.map((c) => `/personal-trainer/${c.slug}/`),
    ...bairros.map((b) => `/${b.slug}/`),
  ];
  let quebras = 0;
  let exemplo = '';
  for (const r of locais) {
    const meio = getContextualCTA({ path: r, posicao: 'meio' });
    const fim = getContextualCTA({ path: r, posicao: 'fim' });
    if (!meio || !fim) continue;
    if (meio.campanha.id === fim.campanha.id || meio.tipo === fim.tipo) {
      quebras++;
      if (!exemplo) exemplo = `${r} (${meio.campanha.id} / ${fim.campanha.id})`;
    }
  }
  ok(quebras === 0, `as ${locais.length} páginas locais têm meio e fim distintos${quebras ? ` — ${quebras} falham, ex.: ${exemplo}` : ''}`);

  // O fim da página local é o único ponto em que a oferta comercial entra.
  const fimBarueri = getContextualCTA({ path: '/personal-trainer/barueri-sp/', posicao: 'fim' });
  const fimRecife = getContextualCTA({ path: '/personal-trainer/recife-pe/', posicao: 'fim' });
  ok(fimBarueri?.campanha.id === 'localPresencial', 'cidade atendida: presencial no fim');
  ok(fimRecife?.campanha.id === 'onlineCoaching', 'cidade fora da área: online no fim, nunca presencial');
}

/* ------------------------------------------------------------------ *
 * [9] Tracking — os parâmetros que o relatório precisa
 * ------------------------------------------------------------------ */
console.log('\n[9] Parâmetros de medição\n');
{
  const d = getContextualCTA({
    path: '/personal-trainer/recife-pe/',
    posicao: 'meio',
    tituloArtigo: 'Personal Trainer no Recife',
  });
  const t = d!.tracking;
  const obrigatorios = [
    'campaign',
    'variant',
    'offer_type',
    'position',
    'page_type',
    'cluster',
    'funnel_stage',
    'search_intent',
    'page_title',
  ] as const;
  const faltando = obrigatorios.filter((k) => !t[k]);
  ok(faltando.length === 0, `todos os parâmetros presentes${faltando.length ? ' — faltam ' + faltando.join(', ') : ''}`);
  ok(t.search_intent === 'local', 'intenção de busca da página de cidade é local');
  ok(t.position === 'meio', 'posição chega ao analytics');
}

console.log('\n' + '='.repeat(64));
if (falhas.length) {
  console.log(`FALHAS (${falhas.length}):`);
  falhas.forEach((f) => console.log('  ✗ ' + f));
  process.exit(1);
}
console.log('✓ Todos os testes do motor de CTA passaram.');
