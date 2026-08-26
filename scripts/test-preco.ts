/**
 * Testes da Calculadora de Preço.
 *
 * Preço errado é pior que preço ausente: uma pessoa negocia com base
 * nisso. Estes testes cobrem a aritmética, o arredondamento, os
 * fallbacks e — o mais importante — as invariantes de honestidade:
 * nada de valor exato, nada de "preço médio", nada de amostra inventada.
 *
 * Uso: npm run test:preco
 */
import { cidades } from '../src/data/cidades';
import {
  arredondar,
  brl,
  calcularPreco,
  faixaBrl,
  origemEstadual,
  sessoesPorMes,
  ROTULO_CONFIANCA,
  type Frequencia,
} from '../src/lib/calculadoraPreco';
import { registroDaCidade, validarRegistro, SESSOES_MES_PACOTE, SEMANAS_POR_MES } from '../src/data/precos';

const falhas: string[] = [];
const ok = (c: boolean, m: string) => {
  console.log((c ? '  ✓ ' : '  ✗ ') + m);
  if (!c) falhas.push(m);
};

/* ------------------------------------------------------------------ */
console.log('\n[1] Integridade da base de preços (980 cidades)\n');
{
  let comErro = 0;
  const exemplos: string[] = [];
  for (const c of cidades) {
    const erros = validarRegistro(registroDaCidade(c));
    if (erros.length) {
      comErro++;
      if (exemplos.length < 5) exemplos.push(`${c.nome}/${c.uf}: ${erros.join('; ')}`);
    }
  }
  exemplos.forEach((e) => console.log(`     ${e}`));
  ok(comErro === 0, `nenhuma cidade com faixa inconsistente (min>max, zero, amplitude absurda): ${comErro}`);

  // Coerência entre os três dados de uma mesma cidade.
  let incoerentes = 0;
  for (const c of cidades) {
    const r = registroDaCidade(c);
    const porSessaoPacoteMax = r.mensalPacote.max / SESSOES_MES_PACOTE;
    // Pacote não pode sair mais caro por sessão que a avulsa: seria ilógico.
    if (porSessaoPacoteMax > r.avulsa.max * 1.05) incoerentes++;
  }
  ok(incoerentes === 0, `pacote nunca sai mais caro por sessão que a avulsa (${incoerentes} casos)`);
}

/* ------------------------------------------------------------------ */
console.log('\n[2] Aritmética\n');
{
  ok(Math.abs(SEMANAS_POR_MES - 4.333) < 0.01, `semanas por mês = 52 ÷ 12 = ${SEMANAS_POR_MES.toFixed(3)}`);
  ok(sessoesPorMes(1) === 4, `1× por semana → ${sessoesPorMes(1)} sessões/mês`);
  ok(sessoesPorMes(2) === 9, `2× por semana → ${sessoesPorMes(2)} sessões/mês`);
  ok(sessoesPorMes(3) === 13, `3× por semana → ${sessoesPorMes(3)} sessões/mês`);
  ok(sessoesPorMes(4) === 17, `4× por semana → ${sessoesPorMes(4)} sessões/mês`);
  ok(sessoesPorMes(5) === 22, `5× por semana → ${sessoesPorMes(5)} sessões/mês`);
  ok(SESSOES_MES_PACOTE === 11, `pacote de referência (2 a 3×) = ${SESSOES_MES_PACOTE} sessões/mês`);

  ok(arredondar(113.42) === 110, `arredondamento: 113,42 → ${arredondar(113.42)}`);
  ok(arredondar(1299.87) === 1300, `arredondamento: 1.299,87 → ${arredondar(1299.87)}`);
  ok(arredondar(1274) === 1250, `arredondamento acima de mil vai à cinquentena: 1.274 → ${arredondar(1274)}`);
  ok(arredondar(95) === 100, `arredondamento: 95 → ${arredondar(95)}`);
}

/* ------------------------------------------------------------------ */
console.log('\n[3] Formatação em real\n');
{
  // O Intl usa espaço não separável (U+00A0) entre "R$" e o número — é a
  // tipografia correta, impede que o símbolo se separe do valor na quebra
  // de linha. Os testes normalizam para comparar.
  const norm = (s: string) => s.replace(/\u00a0/g, ' ');
  ok(norm(brl(100)) === 'R$ 100', `100 → ${norm(brl(100))}`);
  ok(norm(brl(1000)) === 'R$ 1.000', `1000 → ${norm(brl(1000))}`);
  ok(norm(brl(10000)) === 'R$ 10.000', `10000 → ${norm(brl(10000))}`);
  ok(!brl(1299).includes(','), `sem centavos em estimativa: ${norm(brl(1299))}`);
  ok(
    norm(faixaBrl({ min: 80, max: 160 })) === 'R$ 80 a R$ 160',
    `faixa: ${norm(faixaBrl({ min: 80, max: 160 }))}`,
  );
  ok(brl(100).charCodeAt(2) === 160, 'espaço não separável preservado na saída');
}

/* ------------------------------------------------------------------ */
console.log('\n[4] Cenários reais\n');
{
  const cenarios: { nome: string; slug?: string; formato: 'presencial' | 'online'; freq: Frequencia }[] = [
    { nome: 'Campinas + presencial + 3×', slug: 'campinas-sp', formato: 'presencial', freq: 3 },
    { nome: 'Recife + presencial + 2×', slug: 'recife-pe', formato: 'presencial', freq: 2 },
    { nome: 'Barueri + presencial + 5×', slug: 'barueri-sp', formato: 'presencial', freq: 5 },
    { nome: 'Alphaville + presencial + 3×', slug: 'alphaville-sp', formato: 'presencial', freq: 3 },
    { nome: 'São Paulo + presencial + 1×', slug: 'sao-paulo-sp', formato: 'presencial', freq: 1 },
    { nome: 'Curitiba + online', slug: 'curitiba-pr', formato: 'online', freq: 3 },
    { nome: 'Cidade fora da base + presencial + 3×', slug: 'cidade-inexistente-zz', formato: 'presencial', freq: 3 },
  ];

  for (const c of cenarios) {
    const r = calcularPreco(cidades, { cidadeSlug: c.slug, formato: c.formato, frequencia: c.freq });
    const sessao = r.porSessao ? ` | sessão ${faixaBrl(r.porSessao)}` : '';
    console.log(
      `     ${c.nome.padEnd(38)} [${r.nivel}] mensal ${faixaBrl(r.mensal)}${sessao}${r.mensalExtrapolada ? ' (extrapolada)' : ''}`,
    );
    ok(r.mensal.min <= r.mensal.max, `     ${c.nome}: mínimo não excede o máximo`);
    ok(r.mensal.min > 0, `     ${c.nome}: valores positivos`);
    ok(r.memoria.length >= 3, `     ${c.nome}: memória de cálculo com ${r.memoria.length} linhas`);
  }

  // Fallback precisa ser anunciado, nunca silencioso.
  const semCidade = calcularPreco(cidades, { cidadeSlug: 'cidade-inexistente-zz', formato: 'presencial', frequencia: 3 });
  ok(semCidade.nivel === 'nacional', `cidade fora da base cai para nível "${semCidade.nivel}"`);
  ok(semCidade.ressalvas.length > 0, 'fallback vem acompanhado de ressalva explícita');
  ok(/não há faixa específica/i.test(semCidade.ressalvas[0]), `ressalva: "${semCidade.ressalvas[0].slice(0, 60)}…"`);

  const estadual = origemEstadual(cidades, 'SP');
  ok(!!estadual && estadual.nivel === 'estado', `fallback estadual disponível: ${estadual?.rotulo}`);
}

/* ------------------------------------------------------------------ */
console.log('\n[5] Monotonicidade: mais sessões nunca custam menos\n');
{
  let quebras = 0;
  for (const slug of ['campinas-sp', 'sao-paulo-sp', 'recife-pe', 'barueri-sp', 'alphaville-sp']) {
    let anterior = 0;
    for (const f of [1, 2, 3, 4, 5] as Frequencia[]) {
      const r = calcularPreco(cidades, { cidadeSlug: slug, formato: 'presencial', frequencia: f });
      if (r.mensal.min < anterior) {
        console.log(`     ✗ ${slug}: ${f}× (${r.mensal.min}) < frequência anterior (${anterior})`);
        quebras++;
      }
      anterior = r.mensal.min;
    }
  }
  ok(quebras === 0, `faixa mensal cresce com a frequência em todas as cidades testadas (${quebras} quebras)`);
}

/* ------------------------------------------------------------------ */
console.log('\n[6] Extrapolação é sempre rotulada\n');
{
  const direto = calcularPreco(cidades, { cidadeSlug: 'campinas-sp', formato: 'presencial', frequencia: 3 });
  ok(!direto.mensalExtrapolada, '3× por semana usa o dado de pacote direto, sem extrapolar');
  ok(direto.ressalvas.length === 0, 'e por isso não carrega ressalva de extrapolação');

  for (const f of [1, 4, 5] as Frequencia[]) {
    const r = calcularPreco(cidades, { cidadeSlug: 'campinas-sp', formato: 'presencial', frequencia: f });
    ok(r.mensalExtrapolada, `${f}× por semana é marcada como extrapolação`);
    ok(
      r.ressalvas.some((t) => /proporcionalizada|ordem de grandeza/i.test(t)),
      `${f}×: ressalva explica a proporcionalização`,
    );
  }
}

/* ------------------------------------------------------------------ */
console.log('\n[7] Honestidade — o que a ferramenta NUNCA pode afirmar\n');
{
  const todos = ['campinas-sp', 'sao-paulo-sp', 'recife-pe', 'barueri-sp'].flatMap((slug) =>
    ([1, 2, 3, 4, 5] as Frequencia[]).flatMap((f) => [
      calcularPreco(cidades, { cidadeSlug: slug, formato: 'presencial', frequencia: f }),
      calcularPreco(cidades, { cidadeSlug: slug, formato: 'online', frequencia: f }),
    ]),
  );
  const texto = JSON.stringify(todos) + JSON.stringify(ROTULO_CONFIANCA);

  ok(!/pre[çc]o m[ée]dio/i.test(texto), 'nunca usa a expressão "preço médio"');
  ok(!/m[ée]dia (de mercado|nacional)/i.test(texto), 'nunca alega média de mercado');
  ok(!/baseado em \d+ (pre[çc]os|observa)/i.test(texto), 'nunca cita tamanho de amostra inexistente');
  ok(!/garantid|exatamente R\$/i.test(texto), 'nunca promete valor garantido');
  ok(
    todos.every((r) => r.metodologia === 'referencia-editorial' && r.confianca === 'referencial'),
    'toda saída declara metodologia e confiança reais da base atual',
  );
  ok(
    /perfil da cidade/i.test(ROTULO_CONFIANCA.referencial.texto) &&
      /não de uma coleta/i.test(ROTULO_CONFIANCA.referencial.texto),
    'o rótulo de confiança explica que não é coleta de preços praticados',
  );
  ok(todos.every((r) => r.atualizadoEm.length === 10), 'toda saída carrega data de referência');
}

/* ------------------------------------------------------------------ */
console.log('\n[8] Online não é vendido por sessão\n');
{
  const on = calcularPreco(cidades, { cidadeSlug: 'campinas-sp', formato: 'online', frequencia: 3 });
  ok(on.porSessao === undefined, 'resultado online não apresenta valor por sessão');
  ok(!on.mensalExtrapolada, 'online usa a faixa mensal direta');
  const pres = calcularPreco(cidades, { cidadeSlug: 'campinas-sp', formato: 'presencial', frequencia: 3 });
  ok(!!pres.porSessao, 'presencial apresenta valor por sessão');
  console.log(`     presencial 3×: ${faixaBrl(pres.mensal)}/mês | online: ${faixaBrl(on.mensal)}/mês`);
}

console.log('\n' + '='.repeat(68));
if (falhas.length) {
  console.log(`FALHAS (${falhas.length}):`);
  falhas.forEach((f) => console.log('  ✗ ' + f.trim()));
  process.exit(1);
}
console.log('✓ Todos os testes da Calculadora de Preço passaram.');
