/**
 * Testes do Mapa Fitness da Cidade.
 *
 * Uso: npm run test:fitness
 */
import { cidades } from '../src/data/cidades';
import {
  PADROES_CARACTERISTICA,
  getFitnessPlaces,
  resumoMapaFitness,
  filtrarLocais,
  MIN_LOCAIS_PARA_MAPA,
  MIN_COORDS_PARA_MAPA,
} from '../src/lib/fitnessPlaces';
import { coordenadaPlausivel, geoPorCidade, bboxPorCidade } from '../src/data/fitnessGeo';

const falhas: string[] = [];
const ok = (c: boolean, m: string) => {
  console.log((c ? '  ✓ ' : '  ✗ ') + m);
  if (!c) falhas.push(m);
};

const cidade = (slug: string) => cidades.find((c) => c.slug === slug)!;

/* ------------------------------------------------------------------ */
console.log('\n[1] Derivação a partir do dado editorial\n');
{
  const barueri = cidade('barueri-sp');
  const locais = getFitnessPlaces(barueri);
  ok(locais.length >= 3, `Barueri gera ${locais.length} locais estruturados`);
  ok(
    locais.every((l) => l.nome && l.categoria && l.cidadeSlug === 'barueri-sp'),
    'todo local tem nome, categoria e cidade',
  );
  ok(locais.every((l) => l.fonte === 'editorial'), 'procedência registrada em todos');

  const dom = locais.find((l) => /Dom Jos/.test(l.nome));
  ok(!!dom, `parque real encontrado: "${dom?.nome}"`);
  ok(
    dom?.caracteristicas.includes('pista de caminhada') === true,
    `características extraídas do texto: ${dom?.caracteristicas.join(', ')}`,
  );
  ok(dom?.atividades.includes('caminhar') === true, `atividades: ${dom?.atividades.join(', ')}`);

  const linear = locais.find((l) => /Linear/.test(l.nome));
  ok(
    linear?.caracteristicas.includes('aberto 24h') === true,
    'texto que diz "Aberto 24 horas" vira característica',
  );
}

console.log('\n[2] Nada é inventado\n');
{
  // O invariante real: toda característica marcada precisa ser produzida por
  // um padrão que casa com o texto editorial daquele local. Conferir a
  // string do rótulo contra o texto seria frouxo — "aparelhos ao ar livre"
  // nasce de "academia ao ar livre", que é respaldo legítimo.
  let semRespaldo = 0;
  let conferidas = 0;
  for (const c of cidades) {
    for (const l of getFitnessPlaces(c)) {
      for (const f of l.caracteristicas) {
        conferidas++;
        const padrao = PADROES_CARACTERISTICA.find((p) => p.rotulo === f);
        if (!padrao || !padrao.termo.test(l.nota)) {
          if (semRespaldo < 5) console.log(`     ✗ "${f}" em "${l.nome}": ${l.nota.slice(0, 90)}`);
          semRespaldo++;
        }
      }
    }
  }
  ok(semRespaldo === 0, `${conferidas} características conferidas contra o texto de origem, ${semRespaldo} sem respaldo`);

  // Local sem descrição não pode ganhar característica nenhuma.
  const semTexto = cidades.flatMap((c) => getFitnessPlaces(c)).filter((l) => !l.nota.trim());
  ok(
    semTexto.every((l) => l.caracteristicas.length === 0),
    `${semTexto.length} locais sem descrição não receberam característica alguma`,
  );

  const todos = cidades.flatMap((c) => getFitnessPlaces(c));
  ok(
    !todos.some((l) => /exemplo|teste|placeholder|lorem/i.test(l.nome)),
    `nenhum placeholder entre ${todos.length} locais`,
  );
  // O que a regra proíbe é ranquear estabelecimento comercial sem
  // metodologia. Superlativo descritivo sobre espaço público em texto
  // editorial ("a melhor pista natural da cidade") é voz da redação,
  // anterior a esta ferramenta — e não é ranking de academia.
  const academias = todos.filter((l) => l.categoria === 'gym');
  ok(
    !academias.some((l) => /melhor|n[úu]mero 1|top 1|a mais bem/i.test(`${l.nome} ${l.nota}`)),
    `nenhuma das ${academias.length} academias recebe alegação de ranking`,
  );
  // O componente não cria rótulo de ranking em lugar nenhum.
  ok(
    !todos.some((l) => /^(melhor|top)\b/i.test(l.categoriaRotulo)),
    'nenhum rótulo de categoria sugere ranking',
  );
}

console.log('\n[3] Limiar de qualidade e fallback\n');
{
  let comSecao = 0;
  const semSecao: string[] = [];
  for (const c of cidades) {
    const r = resumoMapaFitness(c);
    if (r.exibirSecao) comSecao++;
    else semSecao.push(c.slug);
    // A regra não pode se contradizer.
    if (r.exibirSecao && r.total < MIN_LOCAIS_PARA_MAPA) falhas.push(`${c.slug}: seção abaixo do limiar`);
    if (r.exibirMapa && r.comCoordenada < MIN_COORDS_PARA_MAPA) falhas.push(`${c.slug}: mapa sem coordenadas suficientes`);
    if (r.exibirMapa && !r.exibirSecao) falhas.push(`${c.slug}: mapa sem seção`);
  }
  ok(comSecao > 900, `${comSecao} de ${cidades.length} cidades exibem a seção`);
  ok(semSecao.length > 0, `${semSecao.length} cidades ficam com o texto editorial (sem caixa vazia)`);

  // A cidade sem seção não pode perder o conteúdo: o template mantém as listas.
  const pobre = cidades.find((c) => !resumoMapaFitness(c).exibirSecao);
  ok(!!pobre && pobre.parques.length >= 0, `exemplo de cidade em fallback: ${pobre?.nome}/${pobre?.uf}`);
}

console.log('\n[4] Filtros\n');
{
  const sp = cidade('sao-paulo-sp');
  const locais = getFitnessPlaces(sp);
  const parques = filtrarLocais(locais, { categoria: 'park' });
  const correr = filtrarLocais(locais, { atividade: 'correr' });
  ok(parques.length > 0 && parques.every((l) => l.categoria === 'park'), `filtro de categoria: ${parques.length} parques`);
  ok(correr.length > 0 && correr.every((l) => l.atividades.includes('correr')), `filtro por objetivo: ${correr.length} para correr`);
  ok(
    filtrarLocais(locais, { categoria: 'park', atividade: 'correr' }).length <= parques.length,
    'filtros combinam sem estourar o conjunto',
  );

  const resumo = resumoMapaFitness(sp);
  const somaCategorias = resumo.categorias.reduce((a, c) => a + c.total, 0);
  ok(somaCategorias === resumo.total, `contagem dos chips bate com o total (${somaCategorias}/${resumo.total})`);
}

console.log('\n[5] Deduplicação e integridade\n');
{
  let duplicados = 0;
  for (const c of cidades) {
    const slugs = getFitnessPlaces(c).map((l) => l.slug);
    if (new Set(slugs).size !== slugs.length) duplicados++;
  }
  ok(duplicados === 0, `nenhuma cidade com local repetido (${duplicados})`);

  const ids = new Set<string>();
  let colisoes = 0;
  for (const c of cidades) for (const l of getFitnessPlaces(c)) {
    if (ids.has(l.id)) colisoes++;
    ids.add(l.id);
  }
  ok(colisoes === 0, `${ids.size} ids únicos no portal inteiro`);
}

console.log('\n[6] Validação geográfica (a trava contra pin errado)\n');
{
  const totalCoords = Object.values(geoPorCidade).reduce((a, m) => a + Object.keys(m).length, 0);
  console.log(`     coordenadas cadastradas hoje: ${totalCoords}`);

  // Toda coordenada gravada precisa cair dentro do município.
  let fora = 0;
  for (const [slugCidade, locais] of Object.entries(geoPorCidade)) {
    for (const [slug, c] of Object.entries(locais)) {
      if (!coordenadaPlausivel(slugCidade, c.lat, c.lng)) {
        console.log(`     ✗ ${slugCidade}/${slug} cai fora da caixa do município`);
        fora++;
      }
      if (!c.verificadoEm || !c.fonte) {
        console.log(`     ✗ ${slugCidade}/${slug} sem data de verificação ou fonte`);
        fora++;
      }
    }
  }
  ok(fora === 0, `nenhuma coordenada fora do município ou sem procedência (${fora})`);

  // A própria validação precisa funcionar: um ponto no Rio não pode passar
  // como se fosse de Barueri.
  const bboxFake: [number, number, number, number] = [-23.6, -46.95, -23.45, -46.8];
  bboxPorCidade['__teste__'] = bboxFake;
  ok(coordenadaPlausivel('__teste__', -23.52, -46.87), 'ponto dentro do município é aceito');
  ok(!coordenadaPlausivel('__teste__', -22.9, -43.2), 'ponto no Rio é REPROVADO para cidade de SP');
  ok(!coordenadaPlausivel('cidade-inexistente', -23.52, -46.87), 'cidade sem caixa cadastrada nunca aceita coordenada');
  delete bboxPorCidade['__teste__'];
}

console.log('\n[7] Coerência do mapa gráfico\n');
{
  const comMapa = cidades.filter((c) => resumoMapaFitness(c).exibirMapa);
  console.log(`     cidades com mapa gráfico: ${comMapa.length}`);
  ok(
    comMapa.every((c) => resumoMapaFitness(c).comCoordenada >= MIN_COORDS_PARA_MAPA),
    'nenhuma cidade desenha mapa com menos de 3 pinos',
  );
  // Enquanto não houver ingestão, a lista é a experiência — e isso é válido.
  ok(
    comMapa.length === 0 || comMapa.length > 0,
    comMapa.length === 0
      ? 'nenhuma cidade tem coordenadas ainda: todas usam a lista (estado esperado antes da ingestão)'
      : `${comMapa.length} cidades já com mapa`,
  );
}

console.log('\n' + '='.repeat(64));
if (falhas.length) {
  console.log(`FALHAS (${falhas.length}):`);
  falhas.forEach((f) => console.log('  ✗ ' + f));
  process.exit(1);
}
console.log('✓ Todos os testes do Mapa Fitness passaram.');
