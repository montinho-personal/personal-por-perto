/**
 * Interface da Calculadora de Preço.
 *
 * O cálculo é local e instantâneo: os dados das 980 cidades vêm embutidos
 * na página como JSON, então não há requisição nem espera. O script só
 * coleta a entrada, chama a mesma aritmética usada nos testes e desenha
 * o resultado.
 *
 * Nada é escrito na URL — o estado da calculadora não pode virar página
 * indexável concorrendo com a canônica.
 */
import {
  arredondar,
  brl,
  faixaBrl,
  sessoesPorMes,
  ROTULO_CONFIANCA,
  type Frequencia,
} from '../lib/calculadoraPreco';
import { SESSOES_MES_PACOTE } from '../data/precos';
import { whatsappUrl } from '../lib/links';
import { anexarContinuidade } from './jornada.client';
import { coberturaPresencial } from '../data/atendimentoPresencial';

/* ------------------------------------------------------------------ *
 * Dados e tipos locais
 * ------------------------------------------------------------------ */

interface CidadePreco {
  s: string;
  n: string;
  u: string;
  a: [number, number];
  m: [number, number];
  o: [number, number];
}

type Formato = 'presencial' | 'online';
type Gtag = (comando: string, evento: string, params?: Record<string, unknown>) => void;

function ev(nome: string, params: Record<string, unknown> = {}): void {
  const g = (window as unknown as { gtag?: Gtag }).gtag;
  if (typeof g === 'function') g('event', nome, params);
}

const semAcento = (s: string) =>
  s.normalize('NFD').replace(/[\u0300-\u036f]/g, '').toLowerCase();

/* ------------------------------------------------------------------ *
 * Estado
 * ------------------------------------------------------------------ */

let cidades: CidadePreco[] = [];
let selecionada: CidadePreco | null = null;
let formato: Formato = 'presencial';
let frequencia: Frequencia = 3;

const el = <K extends keyof HTMLElementTagNameMap>(t: K, c?: string, txt?: string) => {
  const n = document.createElement(t);
  if (c) n.className = c;
  if (txt) n.textContent = txt;
  return n;
};

/* ------------------------------------------------------------------ *
 * Cálculo (mesma aritmética do motor, sobre o payload enxuto)
 * ------------------------------------------------------------------ */

interface Saida {
  origem: string;
  nivel: 'cidade' | 'nacional';
  porSessao?: { min: number; max: number };
  mensal: { min: number; max: number };
  sessoes: number;
  extrapolada: boolean;
  ressalvas: string[];
  memoria: [string, string][];
}

/** Faixa nacional: mínimo dos mínimos, máximo dos máximos. */
function faixaNacional(sel: (c: CidadePreco) => [number, number]) {
  const vals = cidades.map(sel);
  return { min: Math.min(...vals.map((v) => v[0])), max: Math.max(...vals.map((v) => v[1])) };
}

function calcular(): Saida {
  const ressalvas: string[] = [];
  const memoria: [string, string][] = [];
  const nivel: 'cidade' | 'nacional' = selecionada ? 'cidade' : 'nacional';
  const origem = selecionada ? `${selecionada.n} (${selecionada.u})` : 'referência nacional';

  if (!selecionada) {
    ressalvas.push(
      'Nenhuma cidade selecionada. Os valores abaixo são a amplitude nacional inteira — bem mais larga do que a faixa de uma cidade específica.',
    );
  }

  const avulsa = selecionada ? { min: selecionada.a[0], max: selecionada.a[1] } : faixaNacional((c) => c.a);
  const pacote = selecionada ? { min: selecionada.m[0], max: selecionada.m[1] } : faixaNacional((c) => c.m);
  const online = selecionada ? { min: selecionada.o[0], max: selecionada.o[1] } : faixaNacional((c) => c.o);

  if (formato === 'online') {
    memoria.push(
      ['Formato', 'acompanhamento online, cobrado por mês'],
      ['Faixa de referência mensal', faixaBrl(online)],
    );
    return {
      origem,
      nivel,
      mensal: { min: arredondar(online.min), max: arredondar(online.max) },
      sessoes: sessoesPorMes(frequencia),
      extrapolada: false,
      ressalvas,
      memoria,
    };
  }

  const sessoes = sessoesPorMes(frequencia);
  memoria.push(
    ['Frequência', `${frequencia}× por semana`],
    ['Sessões por mês', `${frequencia} × 4,33 semanas ≈ ${sessoes} sessões`],
    ['Faixa por sessão avulsa', faixaBrl(avulsa)],
  );

  let mensal: { min: number; max: number };
  let extrapolada: boolean;

  if (frequencia === 2 || frequencia === 3) {
    mensal = { min: arredondar(pacote.min), max: arredondar(pacote.max) };
    extrapolada = false;
    memoria.push(['Faixa de pacote mensal', `${faixaBrl(pacote)} (referência para 2 a 3× por semana)`]);
  } else {
    const porSessaoPacote = { min: pacote.min / SESSOES_MES_PACOTE, max: pacote.max / SESSOES_MES_PACOTE };
    mensal = {
      min: arredondar(porSessaoPacote.min * sessoes),
      max: arredondar(porSessaoPacote.max * sessoes),
    };
    extrapolada = true;
    memoria.push(
      [
        'Valor por sessão no pacote',
        `${faixaBrl(pacote)} ÷ ${SESSOES_MES_PACOTE} sessões ≈ ${faixaBrl({
          min: Math.round(porSessaoPacote.min),
          max: Math.round(porSessaoPacote.max),
        })}`,
      ],
      ['Estimativa mensal', `valor por sessão × ${sessoes} sessões`],
    );
    ressalvas.push(
      `A base de referência cobre pacotes de 2 a 3 vezes por semana. Para ${frequencia}× a faixa foi proporcionalizada — trate como ordem de grandeza, não como tabela de preço.`,
    );
  }

  memoria.push(['Arredondamento', `dezena mais próxima até ${brl(1000)}; cinquentena acima disso`]);

  return {
    origem,
    nivel,
    porSessao: { min: arredondar(avulsa.min), max: arredondar(avulsa.max) },
    mensal,
    sessoes,
    extrapolada,
    ressalvas,
    memoria,
  };
}

/* ------------------------------------------------------------------ *
 * Resultado
 * ------------------------------------------------------------------ */

function mensagemWhatsapp(s: Saida): string {
  const onde = selecionada ? `Moro em ${selecionada.n}/${selecionada.u}` : 'Ainda estou definindo a cidade';
  const plano =
    formato === 'online'
      ? 'estou avaliando acompanhamento online'
      : `estou pensando em treinar ${frequencia}× por semana`;
  return `Oi, Montinho! Usei a calculadora de preço do Personal por Perto. ${onde} e ${plano}. Queria entender como funciona o seu acompanhamento no meu caso.`;
}

function render(raiz: HTMLElement, saida: Saida): void {
  const box = el('div');

  box.appendChild(
    el(
      'p',
      'cp-res-origem',
      saida.nivel === 'cidade' ? `Estimativa para ${saida.origem}` : 'Referência nacional',
    ),
  );
  box.appendChild(
    el(
      'h2',
      'cp-res-titulo',
      formato === 'online'
        ? 'Acompanhamento online'
        : `Presencial, ${frequencia}× por semana (≈${saida.sessoes} sessões/mês)`,
    ),
  );

  const nums = el('div', 'cp-numeros');

  const principal = el('div', 'cp-num cp-num--principal');
  principal.appendChild(el('p', 'cp-num-rot', 'Por mês'));
  principal.appendChild(el('p', 'cp-num-val', faixaBrl(saida.mensal)));
  if (saida.extrapolada) principal.appendChild(el('p', 'cp-num-obs', 'faixa proporcionalizada'));
  nums.appendChild(principal);

  if (saida.porSessao) {
    const sessao = el('div', 'cp-num');
    sessao.appendChild(el('p', 'cp-num-rot', 'Por sessão avulsa'));
    sessao.appendChild(el('p', 'cp-num-val', faixaBrl(saida.porSessao)));
    sessao.appendChild(el('p', 'cp-num-obs', 'pacote mensal costuma sair bem mais em conta por sessão'));
    nums.appendChild(sessao);
  }
  box.appendChild(nums);

  for (const r of saida.ressalvas) box.appendChild(el('p', 'cp-ressalva', r));

  // Procedência sempre visível: é o que separa referência de invenção.
  const conf = el('p', 'cp-confianca');
  conf.appendChild(el('strong', undefined, ROTULO_CONFIANCA.referencial.titulo + '. '));
  conf.appendChild(document.createTextNode(ROTULO_CONFIANCA.referencial.texto));
  box.appendChild(conf);

  // Memória de cálculo aberta a quem quiser conferir.
  const det = el('details', 'cp-memoria');
  det.appendChild(el('summary', undefined, 'Ver como calculamos'));
  const wrap = el('div', 'table-wrap');
  const tab = el('table');
  const tbody = el('tbody');
  for (const [rot, val] of saida.memoria) {
    const tr = el('tr');
    tr.appendChild(el('th', undefined, rot));
    tr.appendChild(el('td', undefined, val));
    tbody.appendChild(tr);
  }
  tab.appendChild(tbody);
  wrap.appendChild(tab);
  det.appendChild(wrap);
  det.addEventListener('toggle', () => {
    if ((det as HTMLDetailsElement).open) ev('price_calculator_memory_open');
  });
  box.appendChild(det);

  // Próximos passos: ferramenta primeiro, comercial depois.
  const acoes = el('div', 'cp-acoes');

  const match = el('a', 'btn btn-ghost');
  match.href = `/ferramentas/encontre-seu-personal-ideal/${selecionada ? `#c=${selecionada.s}` : ''}`;
  match.textContent = 'Ainda não sabe se presencial ou online? Descubra seu perfil';
  match.addEventListener('click', () =>
    ev('price_calculator_personal_match_click', {
      city: selecionada?.s ?? '',
      format: formato,
      sessions_per_week: frequencia,
    }),
  );
  acoes.appendChild(match);

  const cobertura = coberturaPresencial(selecionada?.s);
  const podePresencial = cobertura === 'atende' || cobertura === 'condicional';
  const wpp = el('a', 'btn btn-primary');
  wpp.href = whatsappUrl(mensagemWhatsapp(saida));
  wpp.target = '_blank';
  wpp.rel = 'noopener';
  wpp.dataset.wpp = '';
  wpp.textContent =
    formato === 'presencial' && podePresencial
      ? 'Conhecer o atendimento presencial do Montinho'
      : 'Conhecer o acompanhamento do Montinho';
  wpp.addEventListener('click', () =>
    ev('price_calculator_whatsapp_click', {
      city: selecionada?.s ?? '',
      state: selecionada?.u ?? '',
      format: formato,
      sessions_per_week: frequencia,
    }),
  );
  acoes.appendChild(wpp);

  acoes.appendChild(
    el(
      'p',
      'cp-num-obs',
      'O Montinho Personal é o profissional ligado a este portal — a indicação não é resultado editorial neutro. Esta estimativa é referência de mercado, não orçamento dele.',
    ),
  );
  box.appendChild(acoes);

  // Feedback.
  const fb = el('div', 'cp-feedback');
  fb.appendChild(el('span', undefined, 'Essa estimativa foi útil?'));
  const responder = (v: string) => {
    ev('price_calculator_feedback', { feedback: v, city: selecionada?.s ?? '' });
    fb.replaceChildren(el('span', undefined, 'Obrigado! Isso ajuda a melhorar a base.'));
  };
  const sim = el('button', undefined, '👍 Sim');
  sim.type = 'button';
  sim.addEventListener('click', () => responder('sim'));
  const nao = el('button', undefined, '👎 Não muito');
  nao.type = 'button';
  nao.addEventListener('click', () => responder('nao'));
  fb.append(sim, nao);
  box.appendChild(fb);

  raiz.replaceChildren(box);

  // A calculadora não é um quiz: ela recalcula a cada mudança. Registrar a
  // etapa aqui é correto — o valor gravado é sempre o último visto.
  anexarContinuidade(box, 'preco', {
    faixaPreco: `${faixaBrl(saida.mensal)} por mês`,
    formato,
    cidadeSlug: selecionada?.s,
    cidadeNome: selecionada?.n,
  });

  ev('price_calculator_result', {
    city: selecionada?.s ?? '',
    state: selecionada?.u ?? '',
    format: formato,
    sessions_per_week: frequencia,
    data_confidence: 'referencial',
    data_level: saida.nivel,
  });
}

/* ------------------------------------------------------------------ *
 * Início
 * ------------------------------------------------------------------ */

export function iniciarCalculadora(): void {
  const app = document.querySelector<HTMLElement>('[data-calc]');
  const dados = document.getElementById('cp-dados');
  if (!app || !dados) return;

  try {
    cidades = JSON.parse(dados.textContent || '[]') as CidadePreco[];
  } catch {
    return; // sem dados, o conteúdo editorial da página segue valendo
  }

  const form = app.querySelector<HTMLFormElement>('#cp-form')!;
  const input = app.querySelector<HTMLInputElement>('#cp-cidade')!;
  const lista = app.querySelector<HTMLUListElement>('#cp-sugestoes')!;
  const resultado = app.querySelector<HTMLElement>('#cp-resultado')!;
  const campoFreq = app.querySelector<HTMLElement>('[data-campo-frequencia]')!;

  ev('price_calculator_view');
  let iniciado = false;
  const marcarInicio = () => {
    if (iniciado) return;
    iniciado = true;
    ev('price_calculator_start');
  };

  /* ---- Cidade vinda da página local, por fragmento (#c=slug) ---- */
  const m = window.location.hash.match(/[#&]c=([a-z0-9-]+)/i);
  if (m) {
    const achada = cidades.find((c) => c.s === m[1]);
    if (achada) {
      selecionada = achada;
      input.value = `${achada.n} — ${achada.u}`;
    }
  }

  /*
   * Frequência herdada da ferramenta de rotina (#f=N). Quem acabou de
   * definir que treina 3× por semana não deve ter que informar isso de novo.
   * Fragmento, nunca querystring: não gera URL indexável.
   */
  const mf = window.location.hash.match(/[#&]f=([1-5])/);
  if (mf) {
    frequencia = Number(mf[1]) as Frequencia;
    document.querySelectorAll<HTMLButtonElement>('[data-freq]').forEach((b) => {
      b.setAttribute('aria-pressed', b.dataset.freq === mf[1] ? 'true' : 'false');
    });
  }

  /*
   * Formato herdado da ferramenta "presencial ou online" (#m=). Quem acabou
   * de descobrir que o encaixe é online não deve chegar aqui com presencial
   * pré-selecionado — comparar o custo do formato errado não ajuda ninguém.
   */
  const mm = window.location.hash.match(/[#&]m=(presencial|online)/i);
  if (mm) {
    formato = mm[1].toLowerCase() as Formato;
    app.querySelectorAll<HTMLButtonElement>('[data-formato]').forEach((b) => {
      b.classList.toggle('cp-chip--on', b.dataset.formato === formato);
    });
    campoFreq.hidden = formato === 'online';
  }

  /* ---- Autocomplete ---- */
  let debounce = 0;
  const buscar = (termo: string) => {
    const t = semAcento(termo.trim());
    lista.replaceChildren();
    if (t.length < 2) {
      input.setAttribute('aria-expanded', 'false');
      return;
    }
    const achados = cidades
      .filter((c) => semAcento(`${c.n} ${c.u}`).includes(t))
      .slice(0, 8);
    for (const c of achados) {
      const li = el('li');
      li.setAttribute('role', 'presentation');
      const b = el('button');
      b.type = 'button';
      b.setAttribute('role', 'option');
      b.appendChild(el('span', undefined, c.n));
      b.appendChild(el('span', 'cp-sug-uf', ` — ${c.u}`));
      b.addEventListener('click', () => {
        selecionada = c;
        input.value = `${c.n} — ${c.u}`;
        lista.replaceChildren();
        input.setAttribute('aria-expanded', 'false');
        ev('price_calculator_city_select', { city: c.s, state: c.u });
        marcarInicio();
      });
      li.appendChild(b);
      lista.appendChild(li);
    }
    input.setAttribute('aria-expanded', achados.length ? 'true' : 'false');
  };

  input.addEventListener('input', () => {
    // Digitar de novo invalida a seleção anterior: nada de calcular com
    // uma cidade que a pessoa acabou de apagar.
    selecionada = null;
    marcarInicio();
    window.clearTimeout(debounce);
    const v = input.value;
    debounce = window.setTimeout(() => buscar(v), 100);
  });
  input.addEventListener('keydown', (e) => {
    if (e.key === 'ArrowDown') {
      const primeiro = lista.querySelector<HTMLButtonElement>('button');
      if (primeiro) {
        e.preventDefault();
        primeiro.focus();
      }
    }
  });

  /* ---- Chips ---- */
  app.querySelectorAll<HTMLButtonElement>('[data-formato]').forEach((b) => {
    b.addEventListener('click', () => {
      formato = b.dataset.formato as Formato;
      app.querySelectorAll('[data-formato]').forEach((o) => o.classList.remove('cp-chip--on'));
      b.classList.add('cp-chip--on');
      // Online é mensal: a frequência não altera o preço, então some.
      campoFreq.hidden = formato === 'online';
      marcarInicio();
      ev('price_calculator_format_select', { format: formato });
    });
  });

  app.querySelectorAll<HTMLButtonElement>('[data-freq]').forEach((b) => {
    b.addEventListener('click', () => {
      frequencia = Number(b.dataset.freq) as Frequencia;
      app.querySelectorAll('[data-freq]').forEach((o) => o.classList.remove('cp-chip--on'));
      b.classList.add('cp-chip--on');
      marcarInicio();
      ev('price_calculator_frequency_select', { sessions_per_week: frequencia });
    });
  });

  /* ---- Cálculo ---- */
  form.addEventListener('submit', (e) => {
    e.preventDefault();
    marcarInicio();
    render(resultado, calcular());
    resultado.scrollIntoView({ block: 'nearest' });
  });

  // Cidade pré-selecionada pela página local: já mostra o resultado.
  if (selecionada) render(resultado, calcular());
}
