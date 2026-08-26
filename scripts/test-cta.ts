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
import { getContextualCTA } from '../src/lib/ctaEngine';
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
  { nome: 'Vale a pena contratar', path: '/guias/vale-a-pena-contratar-personal-trainer/', esperado: 'precoComparacao' },
  { nome: 'Personal online funciona', path: '/guias/personal-online-funciona/', esperado: 'personalMatch' },
  { nome: 'Guia de público específico (gestantes)', path: '/guias/personal-trainer-para-gestantes/', esperado: 'personalMatch' },

  // --- Temas ---
  { nome: 'Execução de exercício (agachamento)', path: '/musculacao/agachamento-como-fazer/', esperado: 'execucaoProximoPasso', varianteEsperada: 'subtle' },
  { nome: 'Execução de exercício (remada curvada)', path: '/musculacao/remada-curvada-como-fazer/', esperado: 'execucaoProximoPasso' },
  { nome: 'Hipertrofia (treino de peito)', path: '/musculacao/treino-de-peito/', esperado: 'hipertrofiaEstrutura' },
  { nome: 'Emagrecimento (perder barriga)', path: '/emagrecimento/como-perder-barriga/', esperado: 'emagrecimentoEstrategia' },
  { nome: 'Iniciante (treino para iniciantes)', path: '/musculacao/treino-para-iniciantes/', esperado: 'inicianteComecar' },
  { nome: 'Rotina (frequência de treino)', path: '/musculacao/frequencia-de-treino/', esperado: 'personalMatch' }, // rotinaTreino desligada
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
  const desligadas = (Object.keys(features) as (keyof typeof features)[]).filter((f) => !features[f]);
  ok(desligadas.length > 0, `flags desligadas no momento: ${desligadas.join(', ')}`);

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

  // A campanha de rotina existe mas está desligada: deve cair no fallback.
  const rotina = getContextualCTA({ path: '/musculacao/melhor-horario-para-treinar/' });
  ok(rotina?.campanha.id === 'personalMatch', `rotina desligada cai em personalMatch (obteve ${rotina?.campanha.id})`);
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

console.log('\n[6] Nenhuma promessa indevida na copy das campanhas\n');
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

console.log('\n' + '='.repeat(64));
if (falhas.length) {
  console.log(`FALHAS (${falhas.length}):`);
  falhas.forEach((f) => console.log('  ✗ ' + f));
  process.exit(1);
}
console.log('✓ Todos os testes do motor de CTA passaram.');
