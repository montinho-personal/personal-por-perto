/**
 * Interface da calculadora de composição corporal.
 *
 * "O que você quer descobrir?" escolhe o modo; cada modo mostra só os
 * campos de que precisa (progressive disclosure). Os campos são os mesmos
 * entre os modos — trocar de modo não apaga nada.
 *
 * PRIVACIDADE: medidas e resultados nunca saem do aparelho. Não há link de
 * cálculo nem query string; o histórico fica no localStorage, e o dataLayer
 * recebe só modo, método e contagens em faixa — nenhum peso, medida, idade
 * ou percentual.
 */
import {
  DOBRAS_POR_EQUACAO,
  FFMI_MEDIANA_JOVEM,
  IDADE_DOBRAS,
  INCERTEZA_PONTOS,
  boer,
  cinturaMetadeDaAltura,
  comparar,
  dentro,
  diasEntre,
  dobrasEstimativa,
  faixaCintura,
  faixaImc,
  faixaRce,
  faixaRcq,
  ffmi,
  formataCm,
  formataDelta,
  formataFaixaPct,
  formataImc,
  formataKg,
  formataPct,
  formataRazao,
  imc,
  imcExibido,
  marinha,
  massaGorda,
  massaLivreDeGordura,
  normalizaAltura,
  parseNumero,
  pesoNaFaixaImc,
  posicaoNaReferencia,
  rce,
  rcq,
  referenciaGordura,
  rfm,
  type Avaliacao,
  type Campo,
  type DobraId,
  type Dobras,
  type Estimativa,
  type Sexo,
} from '../lib/corpo/composicao';

type Modo = 'gordura' | 'imc' | 'cintura' | 'tudo' | 'evolucao';
type Metodo = 'rfm' | 'marinha' | 'dobras';

const MODOS: Modo[] = ['gordura', 'imc', 'cintura', 'tudo', 'evolucao'];
const CHAVE = 'ppp-composicao-v1';
const MAX_AVALIACOES = 60;

const $ = <T extends HTMLElement>(sel: string, raiz: ParentNode = document): T | null => raiz.querySelector<T>(sel);
const $$ = <T extends HTMLElement>(sel: string, raiz: ParentNode = document): T[] =>
  Array.from(raiz.querySelectorAll<T>(sel));

const DOBRA_NOME: Record<DobraId, string> = {
  peitoral: 'Peitoral',
  axilar: 'Axilar média',
  triceps: 'Tríceps',
  subescapular: 'Subescapular',
  abdominal: 'Abdominal',
  suprailiaca: 'Suprailíaca',
  coxa: 'Coxa',
};

/* ───────────────────────── Histórico (no aparelho) ───────────────────────── */

function lerHistorico(): Avaliacao[] {
  try {
    const bruto = localStorage.getItem(CHAVE);
    if (!bruto) return [];
    const dados = JSON.parse(bruto) as { v?: number; avaliacoes?: unknown };
    if (dados?.v !== 1 || !Array.isArray(dados.avaliacoes)) return [];
    const num = (x: unknown) => (typeof x === 'number' && Number.isFinite(x) && x > 0 && x < 1000 ? x : undefined);
    return dados.avaliacoes
      .filter((a): a is Record<string, unknown> => !!a && typeof a === 'object')
      .map((a) => ({
        data: typeof a.data === 'string' && /^\d{4}-\d{2}-\d{2}$/.test(a.data) ? a.data : '',
        pesoKg: num(a.pesoKg),
        alturaCm: num(a.alturaCm),
        cinturaCm: num(a.cinturaCm),
        quadrilCm: num(a.quadrilCm),
        pescocoCm: num(a.pescocoCm),
        pct: num(a.pct),
        metodo: (['rfm', 'marinha', 'dobras3', 'dobras7'] as const).find((m) => m === a.metodo),
      }))
      .filter((a) => a.data)
      .sort((x, y) => x.data.localeCompare(y.data))
      .slice(-MAX_AVALIACOES);
  } catch {
    return [];
  }
}

function gravarHistorico(lista: Avaliacao[]): boolean {
  try {
    localStorage.setItem(CHAVE, JSON.stringify({ v: 1, avaliacoes: lista.slice(-MAX_AVALIACOES) }));
    return true;
  } catch {
    return false;
  }
}

const hojeISO = () => {
  const d = new Date();
  return `${d.getFullYear()}-${String(d.getMonth() + 1).padStart(2, '0')}-${String(d.getDate()).padStart(2, '0')}`;
};
const dataBR = (iso: string) => `${iso.slice(8, 10)}/${iso.slice(5, 7)}/${iso.slice(0, 4)}`;

/* ───────────────────────── App ───────────────────────── */

export function iniciarCalculadoraComposicao(): void {
  const raiz = $<HTMLElement>('#cc-app');
  if (!raiz) return;
  const app: HTMLElement = raiz;

  const saida = $<HTMLElement>('#cc-resultado', app)!;
  const anuncio = $<HTMLElement>('#cc-anuncio', app)!;
  const evolucao = $<HTMLElement>('#cc-evolucao', app)!;
  const campo = (id: string) => $<HTMLInputElement>(`#${id}`, app)!;
  const f = {
    idade: campo('cc-idade'),
    peso: campo('cc-peso'),
    altura: campo('cc-altura'),
    cintura: campo('cc-cintura'),
    quadril: campo('cc-quadril'),
    marCintura: campo('cc-mar-cintura'),
    pescoco: campo('cc-pescoco'),
  };
  const dobras = Object.fromEntries(
    (Object.keys(DOBRA_NOME) as DobraId[]).map((id) => [id, campo(`cc-dob-${id}`)]),
  ) as Record<DobraId, HTMLInputElement>;

  let modo: Modo = 'gordura';
  let metodo: Metodo = 'rfm';
  let nDobras: Dobras = 3;
  let sexo: Sexo | null = null;
  let comecou = false;
  let atual: Avaliacao | null = null;
  let ultimoEvento = '';
  let atrasoEvento: number | undefined;
  let atrasoAnuncio: number | undefined;
  let avisouResultado = false;

  function evento(nome: string, extra: Record<string, string | number> = {}): void {
    try {
      const w = window as unknown as { dataLayer?: unknown[] };
      w.dataLayer = w.dataLayer || [];
      w.dataLayer.push({ event: nome, tool: 'composicao-corporal', ...extra });
    } catch {
      /* analytics nunca derruba a ferramenta */
    }
  }
  const comecar = () => {
    if (!comecou) {
      comecou = true;
      evento('body_comp_start');
    }
  };
  const anuncia = (t: string) => {
    window.clearTimeout(atrasoAnuncio);
    atrasoAnuncio = window.setTimeout(() => (anuncio.textContent = t), 700);
  };
  const faixaContagem = (n: number) => (n <= 1 ? '1' : n <= 3 ? '2_3' : n <= 10 ? '4_10' : '11_mais');

  /* ───────── leitura dos campos ───────── */

  const ler = (c: HTMLInputElement) => parseNumero(c.value);

  /** Valor validado; marca o campo e escreve "confira" quando sai do plausível. */
  function valor(c: HTMLInputElement, tipo: Campo): number | null {
    const v = ler(c);
    const dica = $<HTMLElement>(`#${c.id}-confira`, app);
    let bruto = v;
    if (tipo === 'alturaCm' && v !== null) {
      const n = normalizaAltura(v);
      bruto = n ? n.cm : null;
      const conv = $<HTMLElement>(`#${c.id}-convertida`, app);
      if (conv) conv.hidden = !(n && n.convertida && dentro('alturaCm', n.cm));
      if (conv && n?.convertida) conv.textContent = `Entendemos ${Math.round(n.cm)} cm.`;
    }
    const preenchido = c.value.trim() !== '';
    const valido = bruto !== null && dentro(tipo, bruto);
    const errado = preenchido && !valido;
    if (dica) dica.hidden = !errado;
    if (errado) c.setAttribute('aria-invalid', 'true');
    else c.removeAttribute('aria-invalid');
    return valido ? bruto : null;
  }

  /* ───────── modos, método e sexo ───────── */

  /** Que blocos cada modo (e método) mostra. */
  function blocosVisiveis(): Set<string> {
    const b = new Set<string>();
    if (modo === 'evolucao') return b;
    if (modo !== 'imc') b.add('sexo');
    b.add('idade');
    if (modo === 'gordura' || modo === 'imc' || modo === 'tudo') b.add('peso');
    // Nas dobras, a altura não entra na conta, mas dá o índice de massa livre de gordura: fica, opcional.
    b.add('altura');
    if (modo === 'gordura') b.add('metodo');
    const usaRfm = modo === 'tudo' || modo === 'cintura' || (modo === 'gordura' && metodo === 'rfm');
    if (usaRfm) b.add('cintura');
    if (modo === 'cintura' || modo === 'tudo' || (modo === 'gordura' && metodo === 'marinha' && sexo === 'f')) b.add('quadril');
    if (modo === 'gordura' && metodo === 'marinha') b.add('marinha');
    if (modo === 'gordura' && metodo === 'dobras') b.add('dobras');
    return b;
  }

  function aplicaVisibilidade(): void {
    const vis = blocosVisiveis();
    $$<HTMLElement>('[data-bloco]', app).forEach((el) => (el.hidden = !vis.has(el.dataset.bloco!)));
    $<HTMLElement>('#cc-form', app)!.hidden = modo === 'evolucao';
    // Nas dobras, peso e altura são opcionais: a equação usa só as dobras, a idade e o sexo.
    const dobrasModo = modo === 'gordura' && metodo === 'dobras';
    $<HTMLElement>('#cc-peso-opcional', app)!.hidden = !dobrasModo;
    $<HTMLElement>('#cc-altura-opcional', app)!.hidden = !dobrasModo;
    // Quadril: obrigatório só para a Marinha (mulheres); opcional nos outros modos.
    $<HTMLElement>('#cc-quadril-opcional', app)!.hidden = modo === 'gordura';
    // Rótulo da cintura da Marinha muda com o sexo: protocolos diferentes.
    $<HTMLElement>('#cc-mar-cintura-rotulo', app)!.textContent =
      sexo === 'f' ? 'Cintura natural, na parte mais estreita (cm)' : 'Abdômen, na altura do umbigo (cm)';
    $$<HTMLElement>('[data-mar-sexo]', app).forEach((el) => (el.hidden = el.dataset.marSexo !== (sexo ?? 'm')));
    // Dobras: só as da equação escolhida.
    const usadas = new Set(DOBRAS_POR_EQUACAO[sexo ?? 'm'][nDobras]);
    $$<HTMLElement>('[data-dobra]', app).forEach((el) => (el.hidden = !usadas.has(el.dataset.dobra as DobraId)));
    $<HTMLElement>('#cc-dobras-sexo', app)!.hidden = sexo !== null;
  }

  function marca(sel: string, ativo: (b: HTMLButtonElement) => boolean): void {
    $$<HTMLButtonElement>(sel, app).forEach((b) => {
      const on = ativo(b);
      b.classList.toggle('is-ativo', on);
      b.setAttribute('aria-pressed', String(on));
    });
  }

  function trocaModo(novo: Modo, porClique = true): void {
    const mudou = novo !== modo;
    modo = novo;
    marca('[data-modo]', (b) => b.dataset.modo === novo);
    aplicaVisibilidade();
    calcula();
    if (novo === 'evolucao') desenhaEvolucao();
    if (porClique && mudou) evento('body_comp_mode_selected', { mode: novo });
  }

  $$<HTMLButtonElement>('[data-modo]', app).forEach((b) =>
    b.addEventListener('click', () => {
      comecar();
      trocaModo(b.dataset.modo as Modo);
    }),
  );
  $$<HTMLButtonElement>('[data-metodo]', app).forEach((b) =>
    b.addEventListener('click', () => {
      comecar();
      metodo = b.dataset.metodo as Metodo;
      marca('[data-metodo]', (x) => x.dataset.metodo === metodo);
      aplicaVisibilidade();
      calcula();
      evento('body_comp_method_selected', { method: metodo });
    }),
  );
  $$<HTMLButtonElement>('[data-ndobras]', app).forEach((b) =>
    b.addEventListener('click', () => {
      nDobras = Number(b.dataset.ndobras) as Dobras;
      marca('[data-ndobras]', (x) => x.dataset.ndobras === String(nDobras));
      aplicaVisibilidade();
      calcula();
    }),
  );
  $$<HTMLButtonElement>('[data-sexo]', app).forEach((b) =>
    b.addEventListener('click', () => {
      comecar();
      sexo = b.dataset.sexo as Sexo;
      marca('[data-sexo]', (x) => x.dataset.sexo === sexo);
      aplicaVisibilidade();
      calcula();
    }),
  );

  /* ───────── ajuda de medição ───────── */

  app.addEventListener(
    'toggle',
    (ev) => {
      const d = ev.target as HTMLDetailsElement;
      if (d.open && d.dataset.ajuda) evento('body_comp_measure_help_opened', { field: d.dataset.ajuda });
    },
    true,
  );

  /* ───────── resultado ───────── */

  const linha = (rotulo: string, valorTxt: string, nota = '') =>
    `<div class="cc-linha"><dt>${rotulo}</dt><dd>${valorTxt}${nota ? `<span class="cc-linha-nota">${nota}</span>` : ''}</dd></div>`;

  const DICAS: Record<Exclude<Modo, 'evolucao'>, string> = {
    gordura: 'Escolha o sexo usado pela fórmula e preencha idade, peso, altura e a cintura: a estimativa aparece aqui.',
    imc: 'Preencha peso e altura: o IMC aparece aqui.',
    cintura: 'Preencha altura e cintura (o quadril é opcional): as relações aparecem aqui.',
    tudo: 'Preencha sexo, idade, peso, altura e cintura. O quadril é opcional.',
  };

  function vazio(texto?: string): void {
    atual = null;
    window.clearTimeout(atrasoEvento);
    window.clearTimeout(atrasoAnuncio);
    saida.innerHTML = `<p class="cc-vazio">${texto ?? DICAS[modo as Exclude<Modo, 'evolucao'>] ?? ''}</p>`;
    desenhaRetorno();
  }

  function blocoGordura(e: Estimativa, idade: number, peso: number | null, altura: number | null, nomeMetodo: string): string {
    const ref = sexo ? referenciaGordura(sexo, idade) : null;
    const pos = ref ? posicaoNaReferencia(e.pct, ref) : null;
    const refTxt = ref
      ? `<p class="cc-ref">Para ${sexo === 'f' ? 'mulheres' : 'homens'} de ${ref.de === 20 && idade < 20 ? '18 a 39' : `${ref.de} a ${ref.ate}`} anos, a faixa que corresponde, em média, ao IMC de 18,5 a 24,9 é de <strong>${ref.min}% a ${ref.max}%</strong> (Gallagher et al., 2000). ${
          pos === 'dentro'
            ? 'Sua estimativa fica dentro dela.'
            : pos === 'acima'
              ? 'Sua estimativa ficou acima dela.'
              : 'Sua estimativa ficou abaixo dela.'
        }</p>`
      : '';
    const massas =
      peso !== null
        ? `${linha('Massa gorda estimada', `~${formataKg(massaGorda(peso, e.pct))}`)}${linha(
            'Massa livre de gordura estimada',
            `~${formataKg(massaLivreDeGordura(peso, e.pct))}`,
            'músculos, água, ossos e órgãos — não é só músculo',
          )}${
            altura !== null
              ? linha(
                  'Índice de massa livre de gordura',
                  formataImc(ffmi(massaLivreDeGordura(peso, e.pct), altura)) + ' kg/m²',
                  `mediana de adultos de 18 a 34 anos: ${formataImc(FFMI_MEDIANA_JOVEM[sexo ?? 'm'])}`,
                )
              : ''
          }`
        : '';
    return `
      <p class="cc-rotulo">Percentual de gordura estimado</p>
      <p class="cc-numero">~${formataPct(e.pct)}</p>
      <p class="cc-faixa">Faixa provável: <strong>${formataFaixaPct(e.min, e.max)}</strong></p>
      <p class="cc-nota">Esse valor é uma estimativa baseada nas suas medidas e no método usado (${nomeMetodo}). O erro típico é de cerca de ${INCERTEZA_PONTOS} pontos para cima ou para baixo.</p>
      ${massas ? `<dl class="cc-sec">${massas}</dl>` : ''}
      ${refTxt}`;
  }

  function blocoImc(peso: number, altura: number, idade: number | null): string {
    const v = imc(peso, altura);
    const fx = faixaImc(v, idade);
    const pf = pesoNaFaixaImc(altura, idade);
    const menor = idade !== null && idade < 18;
    return `
      <div class="cc-indicador">
        <p class="cc-ind-rotulo">IMC</p>
        <p class="cc-ind-valor">${formataImc(v)} <span>kg/m²</span></p>
        ${
          menor
            ? '<p class="cc-ind-nota">Abaixo de 18 anos, o IMC se interpreta por idade e sexo (curvas da OMS), não pela tabela de adultos. Quem faz essa leitura é o pediatra.</p>'
            : `<p class="cc-ind-nota">Na tabela ${fx!.fonte === 'idoso' ? 'usada no Brasil para pessoas de 60 anos ou mais' : 'da OMS para adultos'}, ${formataImc(v)} fica na faixa <strong>${fx!.faixa}</strong> (${fx!.rotulo}). Para a sua altura, essa faixa de referência vai de ${formataKg(pf.min)} a ${formataKg(pf.max)}.</p>`
        }
      </div>`;
  }

  function blocoCintura(cintura: number, altura: number | null, quadril: number | null, idade: number | null): string {
    const menor = idade !== null && idade < 18;
    let html = '';
    if (altura !== null) {
      const r = rce(cintura, altura);
      const fx = faixaRce(r);
      html += `
        <div class="cc-indicador">
          <p class="cc-ind-rotulo">Cintura/altura</p>
          <p class="cc-ind-valor">${formataRazao(r)}</p>
          ${
            menor
              ? '<p class="cc-ind-nota">Para menores de 18 anos, a leitura é do pediatra.</p>'
              : `<p class="cc-ind-nota">Faixa <strong>${fx.faixa}</strong> na diretriz britânica NICE (${fx.rotulo}). Para a sua altura, a cintura que dá 0,5 é de ${formataCm(cinturaMetadeDaAltura(altura))}.</p>`
          }
        </div>`;
    }
    if (sexo && !menor) {
      const fc = faixaCintura(cintura, sexo);
      html += `
        <div class="cc-indicador">
          <p class="cc-ind-rotulo">Cintura</p>
          <p class="cc-ind-valor">${formataCm(cintura)}</p>
          <p class="cc-ind-nota">Nos cortes da OMS para ${sexo === 'f' ? 'mulheres' : 'homens'}: ${fc.faixa} (${fc.rotulo}). É um marcador de distribuição de gordura usado em avaliações populacionais, não um diagnóstico.</p>
        </div>`;
    }
    if (quadril !== null) {
      const r = rcq(cintura, quadril);
      html += `
        <div class="cc-indicador">
          <p class="cc-ind-rotulo">Cintura/quadril</p>
          <p class="cc-ind-valor">${formataRazao(r)}</p>
          ${
            sexo && !menor
              ? `<p class="cc-ind-nota">Corte da OMS para ${sexo === 'f' ? 'mulheres' : 'homens'}: ${faixaRcq(r, sexo).faixa.replace('abaixo de ', '')} — o seu ficou ${faixaRcq(r, sexo).id === 'acima' ? 'no corte ou acima' : 'abaixo'}.</p>`
              : ''
          }
        </div>`;
    }
    return html;
  }

  /** Leitura cruzada: o que os indicadores dizem juntos (sem diagnóstico). */
  function leituraCruzada(peso: number, altura: number, cintura: number, idade: number): string {
    if (idade < 18) return '';
    const v = imcExibido(imc(peso, altura));
    const r = Math.round(rce(cintura, altura) * 100) / 100;
    if (v >= 25 && r < 0.5)
      return 'Seu IMC ficou acima de 25, mas a cintura/altura está abaixo de 0,5. Os dois contam histórias diferentes: o IMC não distingue massa muscular de gordura, e a cintura olha para a distribuição. É uma combinação comum em quem tem mais massa muscular.';
    if (v < 25 && r >= 0.5)
      return 'Seu IMC ficou abaixo de 25, mas a cintura/altura passou de 0,5. O IMC sozinho não mostra onde a gordura está — por isso a cintura entra junto.';
    return 'Esses indicadores contam histórias diferentes. O IMC sozinho não distingue massa muscular de gordura corporal; a cintura e a estimativa de gordura completam o quadro.';
  }

  function mostra(html: string, frase: string, chave: string, nome: string, extra: Record<string, string>): void {
    saida.innerHTML = html;
    anuncia(frase);
    if (!avisouResultado) {
      avisouResultado = true;
      document.dispatchEvent(new CustomEvent('ppp:resultado'));
    }
    window.clearTimeout(atrasoEvento);
    if (chave !== ultimoEvento) {
      atrasoEvento = window.setTimeout(() => {
        ultimoEvento = chave;
        evento(nome, extra);
      }, 1000);
    }
    desenhaRetorno();
  }

  const acoes = () => `
    <div class="cc-salvar">
      <button type="button" class="cc-btn cc-btn-primario" data-acao="salvar">Salvar esta avaliação</button>
      <p class="cc-privacidade">Seus registros ficam armazenados neste aparelho. Nada é enviado.</p>
      <p id="cc-salvo" class="cc-salvo" role="status" hidden></p>
    </div>`;

  function calcula(): void {
    if (modo === 'evolucao') return;
    const vis = blocosVisiveis();
    const idade = valor(f.idade, 'idade');
    const peso = vis.has('peso') ? valor(f.peso, 'pesoKg') : null;
    const altura = vis.has('altura') ? valor(f.altura, 'alturaCm') : null;
    const cintura = vis.has('cintura') ? valor(f.cintura, 'cinturaCm') : null;
    const quadril = vis.has('quadril') ? valor(f.quadril, 'quadrilCm') : null;
    const menor = idade !== null && idade < 18;

    if (modo === 'imc') {
      if (peso === null || altura === null) return vazio();
      atual = { data: hojeISO(), pesoKg: peso, alturaCm: altura };
      return mostra(
        `${blocoImc(peso, altura, idade)}
         <p class="cc-nota">O IMC não distingue gordura de massa muscular nem mostra onde a gordura está. Para isso, a cintura e a estimativa de gordura contam mais.</p>${acoes()}`,
        `IMC ${formataImc(imc(peso, altura))}.`,
        `imc|${peso}|${altura}|${idade}`,
        'body_comp_result_generated',
        { mode: 'imc' },
      );
    }

    if (modo === 'cintura') {
      if (cintura === null || altura === null) return vazio();
      atual = { data: hojeISO(), alturaCm: altura, cinturaCm: cintura, quadrilCm: quadril ?? undefined };
      return mostra(
        `${blocoCintura(cintura, altura, quadril, idade)}${!sexo ? '<p class="cc-nota">Escolha o sexo usado pela fórmula para ver os cortes de cintura e de cintura/quadril.</p>' : ''}${acoes()}`,
        `Cintura/altura ${formataRazao(rce(cintura, altura))}.`,
        `cintura|${cintura}|${altura}|${quadril}|${sexo}`,
        'body_comp_result_generated',
        { mode: 'cintura' },
      );
    }

    // gordura e tudo: sexo e idade são parte da conta
    if (!sexo) return vazio('Escolha o sexo usado pela fórmula: as equações de gordura usam parâmetros diferentes para cada um.');
    if (idade === null) return vazio('Preencha a idade: ela decide a faixa de referência (e entra na conta das dobras).');
    if (menor)
      return vazio(
        'As equações de gordura desta página foram feitas com adultos e não valem abaixo de 18 anos. Para crianças e adolescentes, a avaliação é com o pediatra.',
      );

    if (modo === 'tudo') {
      if (peso === null || altura === null || cintura === null) return vazio();
      const e = rfm(altura, cintura, sexo);
      atual = { data: hojeISO(), pesoKg: peso, alturaCm: altura, cinturaCm: cintura, quadrilCm: quadril ?? undefined, pct: e.pct, metodo: 'rfm' };
      return mostra(
        `<p class="cc-titulo-res">Sua composição corporal estimada</p>
         ${blocoGordura(e, idade, peso, altura, 'RFM, pela cintura e altura')}
         <div class="cc-indicadores">${blocoCintura(cintura, altura, quadril, idade)}${blocoImc(peso, altura, idade)}</div>
         <p class="cc-cruzada">${leituraCruzada(peso, altura, cintura, idade)}</p>${acoes()}`,
        `Percentual de gordura estimado: cerca de ${formataPct(e.pct)}.`,
        `tudo|${peso}|${altura}|${cintura}|${quadril}|${sexo}|${idade}`,
        'body_comp_full_analysis_generated',
        { mode: 'tudo', method: 'rfm' },
      );
    }

    // modo gordura
    let e: Estimativa | null = null;
    let nome = '';
    let met: Avaliacao['metodo'];
    const pescoco = metodo === 'marinha' ? valor(f.pescoco, 'pescocoCm') : null;
    const marCintura = metodo === 'marinha' ? valor(f.marCintura, 'cinturaCm') : null;
    if (metodo === 'rfm') {
      if (altura === null || cintura === null) {
        // Sem fita: a estimativa populacional de massa magra (Boer), rotulada como tal.
        if (peso !== null && altura !== null)
          return mostra(
            `<p class="cc-vazio">Sem a cintura, não dá para estimar o seu percentual de gordura.</p>
             <div class="cc-boer"><p class="cc-ind-rotulo">Massa magra por peso e altura (fórmula de Boer)</p>
             <p class="cc-ind-valor">~${formataKg(boer(sexo, peso, altura))}</p>
             <p class="cc-ind-nota">Estimativa populacional: a fórmula usa só peso, altura e sexo, não as suas medidas. Com a cintura, a estimativa passa a ser sua.</p></div>`,
            'Massa magra pela fórmula de Boer.',
            `boer|${peso}|${altura}|${sexo}`,
            'body_comp_result_generated',
            { mode: 'gordura', method: 'boer' },
          );
        return vazio();
      }
      e = rfm(altura, cintura, sexo);
      nome = 'RFM, pela cintura e altura';
      met = 'rfm';
    } else if (metodo === 'marinha') {
      const q = sexo === 'f' ? valor(f.quadril, 'quadrilCm') : null;
      if (altura === null || pescoco === null || marCintura === null || (sexo === 'f' && q === null)) return vazio('Preencha altura, pescoço e as medidas do método da Marinha.');
      e = marinha(sexo, altura, marCintura, pescoco, q ?? undefined);
      if (!e) return vazio('Confira as medidas: a cintura precisa ser maior que o pescoço.');
      nome = 'método da Marinha dos EUA';
      met = 'marinha';
    } else {
      const usadas = DOBRAS_POR_EQUACAO[sexo][nDobras];
      const valores = usadas.map((id) => valor(dobras[id], 'dobraMm'));
      if (valores.some((v) => v === null)) return vazio(`Preencha as ${nDobras} dobras, em milímetros.`);
      const soma = (valores as number[]).reduce((a, b) => a + b, 0);
      e = dobrasEstimativa(sexo, nDobras, soma, idade);
      nome = `${nDobras} dobras, Jackson & Pollock`;
      met = nDobras === 7 ? 'dobras7' : 'dobras3';
      const [ini, fim] = IDADE_DOBRAS[sexo];
      if (idade < ini || idade > fim) nome += `; a equação foi feita com idades de ${ini} a ${fim} anos`;
    }
    atual = {
      data: hojeISO(),
      pesoKg: peso ?? undefined,
      alturaCm: altura ?? undefined,
      cinturaCm: metodo === 'rfm' ? cintura ?? undefined : undefined,
      quadrilCm: quadril ?? undefined,
      pescocoCm: pescoco ?? undefined,
      pct: e.pct,
      metodo: met,
    };
    return mostra(
      `${blocoGordura(e, idade, peso, altura, nome)}${acoes()}`,
      `Percentual de gordura estimado: cerca de ${formataPct(e.pct)}.`,
      `gordura|${metodo}|${e.pct}|${peso}`,
      'body_comp_result_generated',
      { mode: 'gordura', method: metodo === 'dobras' ? `dobras${nDobras}` : metodo },
    );
  }

  /* ───────── salvar, retorno e evolução ───────── */

  function desenhaRetorno(): void {
    const hist = lerHistorico();
    const box = $<HTMLElement>('#cc-retorno', app)!;
    if (!hist.length || modo === 'evolucao') {
      box.hidden = true;
      return;
    }
    const ultima = hist[hist.length - 1];
    const dias = diasEntre(ultima.data, hojeISO());
    box.hidden = false;
    box.innerHTML = `<p>Última avaliação salva: <strong>${dias === 0 ? 'hoje' : dias === 1 ? 'ontem' : `há ${dias} dias`}</strong> (${dataBR(ultima.data)}).</p>
      <button type="button" class="cc-link-btn" data-acao="ver-evolucao">Ver minha evolução</button>`;
  }

  app.addEventListener('click', (ev) => {
    const alvo = (ev.target as HTMLElement).closest<HTMLButtonElement>('[data-acao]');
    if (!alvo) return;
    const acao = alvo.dataset.acao;
    if (acao === 'salvar') salvar();
    else if (acao === 'ver-evolucao') {
      trocaModo('evolucao');
      $<HTMLButtonElement>('[data-modo="evolucao"]', app)?.focus();
    } else if (acao === 'apagar') apagar(alvo.dataset.data!);
    else if (acao === 'apagar-tudo') {
      if (window.confirm('Apagar todas as avaliações salvas neste aparelho?')) {
        gravarHistorico([]);
        desenhaEvolucao();
        desenhaRetorno();
      }
    }
  });

  function salvar(): void {
    const msg = $<HTMLElement>('#cc-salvo', saida);
    if (!atual) return;
    const hist = lerHistorico();
    // Uma avaliação por dia: medir de novo no mesmo dia substitui a anterior.
    const semHoje = hist.filter((a) => a.data !== atual!.data);
    const substituiu = semHoje.length !== hist.length;
    const ok = gravarHistorico([...semHoje, atual]);
    if (msg) {
      msg.hidden = false;
      msg.textContent = !ok
        ? 'Não foi possível salvar: o navegador está bloqueando o armazenamento (modo anônimo, por exemplo).'
        : `${substituiu ? 'Avaliação de hoje atualizada.' : 'Avaliação salva.'} Da próxima vez, volte aqui e compare suas medidas — sem pressa: semanas, não dias.`;
    }
    if (ok) {
      evento('body_comp_history_saved', { count: faixaContagem(semHoje.length + 1) });
      desenhaRetorno();
    }
  }

  function apagar(data: string): void {
    gravarHistorico(lerHistorico().filter((a) => a.data !== data));
    desenhaEvolucao();
  }

  const nomeMetodo = (m?: Avaliacao['metodo']) =>
    m === 'rfm' ? 'fita (RFM)' : m === 'marinha' ? 'Marinha' : m === 'dobras3' ? '3 dobras' : m === 'dobras7' ? '7 dobras' : '—';

  function desenhaEvolucao(): void {
    if (modo !== 'evolucao') {
      evolucao.hidden = true;
      return;
    }
    evolucao.hidden = false;
    const hist = lerHistorico();
    if (hist.length === 0) {
      evolucao.innerHTML = `<p class="cc-vazio">Ainda não há avaliações salvas neste aparelho. Faça uma análise, toque em "Salvar esta avaliação" e volte daqui a algumas semanas para comparar.</p>`;
      return;
    }
    const lista = [...hist].reverse();
    const tabela = `
      <div class="cc-tabela" role="region" tabindex="0" aria-label="Tabela: avaliações salvas">
        <table><caption>Avaliações salvas neste aparelho</caption>
        <thead><tr><th scope="col">Data</th><th scope="col">Peso</th><th scope="col">Cintura</th><th scope="col">% estimado</th><th scope="col"><span class="sr-only">Apagar</span></th></tr></thead>
        <tbody>${lista
          .map(
            (a) => `<tr><th scope="row">${dataBR(a.data)}</th><td>${a.pesoKg ? formataKg(a.pesoKg) : '—'}</td><td>${a.cinturaCm ? formataCm(a.cinturaCm) : '—'}</td><td>${
              a.pct ? `${formataPct(a.pct)} <span class="cc-metodo">${nomeMetodo(a.metodo)}</span>` : '—'
            }</td><td><button type="button" class="cc-link-btn" data-acao="apagar" data-data="${a.data}" aria-label="Apagar a avaliação de ${dataBR(a.data)}">Apagar</button></td></tr>`,
          )
          .join('')}</tbody></table>
      </div>
      <button type="button" class="cc-link-btn" data-acao="apagar-tudo">Apagar tudo</button>`;
    if (hist.length < 2) {
      evolucao.innerHTML = `<p class="cc-vazio">Você tem uma avaliação salva. Na próxima, a comparação aparece aqui.</p>${tabela}`;
      return;
    }
    const antes = hist[hist.length - 2];
    const depois = hist[hist.length - 1];
    const c = comparar(antes, depois);
    const linhaEvo = (rot: string, d: ReturnType<typeof comparar>['peso'], fmt: (v: number) => string, unidade: 'kg' | 'cm') =>
      d
        ? `<tr><th scope="row">${rot}</th><td>${fmt(d.antes)} → ${fmt(d.depois)}</td><td>${formataDelta(d.delta, unidade)}</td><td>${d.alemDoErro ? 'além do erro de medida' : 'dentro do erro de medida'}</td></tr>`
        : '';
    const pctLinha = c.pct
      ? `<tr><th scope="row">% estimado</th><td>${formataPct(c.pct.antes)} → ${formataPct(c.pct.depois)}</td><td>${formataDelta(c.pct.delta, 'pp')}</td><td>${c.pct.alemDoErro ? 'além do erro entre medidas' : 'dentro do erro entre medidas'}</td></tr>`
      : '';
    evolucao.innerHTML = `
      <p class="cc-titulo-res">Sua evolução: ${dataBR(antes.data)} → ${dataBR(depois.data)} (${c.dias} dias)</p>
      <div class="cc-tabela" role="region" tabindex="0" aria-label="Tabela: comparação entre as duas últimas avaliações">
        <table><caption>Comparação entre as duas últimas avaliações</caption>
        <thead><tr><th scope="col">Medida</th><th scope="col">Antes → agora</th><th scope="col">Diferença</th><th scope="col">Leitura</th></tr></thead>
        <tbody>${linhaEvo('Peso', c.peso, formataKg, 'kg')}${linhaEvo('Cintura', c.cintura, formataCm, 'cm')}${linhaEvo('Quadril', c.quadril, formataCm, 'cm')}${pctLinha}</tbody></table>
      </div>
      ${c.leitura ? `<p class="cc-cruzada">${c.leitura}</p>` : ''}
      ${c.metodoDiferente ? '<p class="cc-nota">As duas avaliações usaram métodos diferentes de gordura; por isso o percentual não é comparado.</p>' : ''}
      <p class="cc-nota">Pequenas mudanças podem ser erro de medida, hidratação, horário ou a posição da fita. Meça sempre no mesmo ponto, com a mesma fita, em condições parecidas.</p>
      ${tabela}`;
    evento('body_comp_comparison_viewed', { count: faixaContagem(hist.length) });
  }

  /* ───────── campos: calcula ao digitar ───────── */

  [...Object.values(f), ...Object.values(dobras)].forEach((c) =>
    c.addEventListener('input', () => {
      comecar();
      calcula();
    }),
  );

  /* ───────── compartilhar a ferramenta (nunca o resultado) ───────── */

  const compartilhar = $<HTMLButtonElement>('#cc-compartilhar', app);
  const rotulo = compartilhar?.textContent ?? '';
  let volta: number | undefined;
  compartilhar?.addEventListener('click', async () => {
    const url = location.origin + location.pathname;
    const texto = 'Conhece alguém que vive olhando só para o número da balança? Essa calculadora mostra gordura, cintura e evolução:';
    const nav = navigator as Navigator & { share?: (d: ShareData) => Promise<void> };
    const mostraRotulo = (t: string) => {
      compartilhar.textContent = t;
      window.clearTimeout(volta);
      volta = window.setTimeout(() => (compartilhar.textContent = rotulo), 2000);
    };
    if (nav.share) {
      try {
        await nav.share({ title: 'Calculadora de composição corporal', text: texto, url });
        evento('body_comp_shared', { method: 'nativo' });
        return;
      } catch (e) {
        if ((e as DOMException)?.name === 'AbortError') return;
      }
    }
    try {
      await navigator.clipboard.writeText(url);
      mostraRotulo('Link copiado');
      evento('body_comp_shared', { method: 'copiar' });
    } catch {
      mostraRotulo('Não foi possível copiar');
    }
  });
  $<HTMLAnchorElement>('#cc-whats', app)?.addEventListener('click', () => evento('body_comp_shared', { method: 'whatsapp' }));
  $$<HTMLAnchorElement>('[data-cc-link]').forEach((a) =>
    a.addEventListener('click', () =>
      evento(a.dataset.ccLink === 'personal' ? 'body_comp_find_personal_clicked' : 'body_comp_related_tool_clicked', { target: a.dataset.ccLink! }),
    ),
  );

  // O botão flutuante do WhatsApp cobre os números alinhados à direita no celular.
  if ('IntersectionObserver' in window) {
    new IntersectionObserver((es) => document.body.classList.toggle('cc-app-visivel', es.some((e) => e.isIntersecting))).observe(app);
  }

  /* ───────── início ───────── */

  // Volta de quem já salvou: abre direto a evolução.
  const inicial: Modo = lerHistorico().length >= 1 && location.hash === '#evolucao' ? 'evolucao' : 'gordura';
  trocaModo(MODOS.includes(inicial) ? inicial : 'gordura', false);
  evento('body_comp_view', { has_history: lerHistorico().length ? 'sim' : 'nao' });
}
