/**
 * Camada de interface do "Presencial ou online?".
 *
 * Coleta respostas e renderiza o que o motor devolve. Nenhuma regra de
 * recomendação mora aqui — ela vive em src/lib/presencialOuOnline.ts.
 *
 * A ordem das perguntas é deliberada: experiência, autonomia e execução vêm
 * antes de qualquer coisa sobre preferência ou preço. A pessoa chega
 * perguntando "online ou presencial?" e a ferramenta responde outra coisa
 * primeiro — o que ela precisa —, para só depois traduzir isso em formato.
 */
import {
  recomendarFormato,
  type Prioridade,
  type Respostas,
  type Resultado,
} from '../lib/presencialOuOnline';
import { whatsappUrl } from '../lib/links';
import { coberturaPresencial } from '../data/atendimentoPresencial';
import { anexarContinuidade } from './jornada.client';

type Gtag = (c: string, e: string, p?: Record<string, unknown>) => void;
function ev(nome: string, params?: Record<string, unknown>): void {
  const g = (window as unknown as { gtag?: Gtag }).gtag;
  if (typeof g === 'function') g('event', nome, params || {});
}

/* ------------------------------------------------------------------ *
 * Etapas
 * ------------------------------------------------------------------ */

interface Opcao {
  valor: string;
  rotulo: string;
}

interface Etapa {
  chave: keyof Respostas;
  nome: string;
  pergunta: string;
  ajuda?: string;
  opcoes: Opcao[];
  curtas?: boolean;
  multipla?: { max: number };
  reforco?: string;
}

const ETAPAS: Etapa[] = [
  {
    chave: 'experiencia',
    nome: 'experiencia',
    pergunta: 'Como está a sua experiência com musculação hoje?',
    opcoes: [
      { valor: 'nunca', rotulo: 'Nunca treinei de verdade' },
      { valor: 'comecando', rotulo: 'Estou começando' },
      { valor: 'voltando', rotulo: 'Estou voltando depois de um tempo' },
      { valor: 'algunsMeses', rotulo: 'Treino há alguns meses' },
      { valor: 'anos', rotulo: 'Treino regularmente há anos' },
      { valor: 'bastante', rotulo: 'Tenho bastante experiência' },
    ],
    reforco: 'Não existe formato melhor no geral. Existe o que resolve o seu gargalo.',
  },
  {
    chave: 'autonomia',
    nome: 'autonomia',
    pergunta: 'Se você entrar sozinho na academia amanhã, sabe o que fazer?',
    ajuda: 'Pense no treino inteiro: quais exercícios, em que ordem, quantas séries.',
    opcoes: [
      { valor: 'seguranca', rotulo: 'Sim, com bastante segurança' },
      { valor: 'maioria', rotulo: 'Na maior parte das vezes' },
      { valor: 'maisOuMenos', rotulo: 'Mais ou menos' },
      { valor: 'perdido', rotulo: 'Fico bastante perdido' },
      { valor: 'semIdeia', rotulo: 'Não saberia por onde começar' },
    ],
  },
  {
    chave: 'execucao',
    nome: 'execucao',
    pergunta: 'Você se sente seguro com a execução dos principais exercícios?',
    ajuda: 'Aqui vale a sua percepção — não é uma avaliação técnica.',
    opcoes: [
      { valor: 'sim', rotulo: 'Sim' },
      { valor: 'maioria', rotulo: 'Na maioria deles' },
      { valor: 'alguns', rotulo: 'Em alguns' },
      { valor: 'duvida', rotulo: 'Tenho bastante dúvida' },
      { valor: 'nao', rotulo: 'Não' },
    ],
  },
  {
    chave: 'supervisao',
    nome: 'supervisao',
    pergunta: 'Durante o treino, quanto você sente necessidade de ter alguém ao seu lado?',
    opcoes: [
      { valor: 'quaseNenhuma', rotulo: 'Quase nenhuma' },
      { valor: 'asVezes', rotulo: 'Às vezes' },
      { valor: 'frequentemente', rotulo: 'Frequentemente' },
      { valor: 'bastante', rotulo: 'Bastante' },
      { valor: 'naoSozinho', rotulo: 'Eu prefiro não treinar sozinho' },
    ],
  },
  {
    chave: 'videoFeedback',
    nome: 'video_feedback',
    pergunta: 'Como você se sentiria recebendo correções por vídeo?',
    ajuda: 'No acompanhamento a distância, é assim que a execução costuma ser conferida.',
    opcoes: [
      { valor: 'muitoBem', rotulo: 'Funcionaria muito bem para mim' },
      { valor: 'provavelmente', rotulo: 'Provavelmente funcionaria' },
      { valor: 'incerto', rotulo: 'Não tenho certeza' },
      { valor: 'prefiroPresencial', rotulo: 'Prefiro correção presencial' },
      { valor: 'desconfortavel', rotulo: 'Não me sentiria confortável' },
    ],
    reforco: 'Estamos na metade.',
  },
  {
    chave: 'objetivo',
    nome: 'objetivo',
    pergunta: 'Qual é o seu principal objetivo?',
    curtas: true,
    opcoes: [
      { valor: 'emagrecer', rotulo: 'Emagrecer' },
      { valor: 'massa', rotulo: 'Ganhar massa muscular' },
      { valor: 'forca', rotulo: 'Ganhar força' },
      { valor: 'voltar', rotulo: 'Voltar a treinar' },
      { valor: 'condicionamento', rotulo: 'Melhorar o condicionamento' },
      { valor: 'saude', rotulo: 'Saúde e disposição' },
      { valor: 'outro', rotulo: 'Outro' },
    ],
  },
  {
    chave: 'horarioFixo',
    nome: 'horario_fixo',
    pergunta: 'Você conseguiria manter horários fixos com um personal?',
    ajuda: 'Pense na sua rotina real das últimas semanas, não na ideal.',
    opcoes: [
      { valor: 'facil', rotulo: 'Sim, facilmente' },
      { valor: 'maioria', rotulo: 'Na maioria das semanas' },
      { valor: 'asVezesDificil', rotulo: 'Às vezes seria difícil' },
      { valor: 'bastanteDificil', rotulo: 'Seria bastante difícil' },
      { valor: 'quaseImpossivel', rotulo: 'Quase impossível' },
    ],
  },
  {
    chave: 'deslocamento',
    nome: 'deslocamento',
    pergunta: 'Quanto deslocamento você aceitaria para treinar com um personal?',
    curtas: true,
    opcoes: [
      { valor: 'nenhum', rotulo: 'Nenhum' },
      { valor: 'ate10', rotulo: 'Até 10 min' },
      { valor: '10a20', rotulo: '10 a 20 min' },
      { valor: '20a30', rotulo: '20 a 30 min' },
      { valor: 'mais30', rotulo: 'Mais de 30 min' },
      { valor: 'naoSei', rotulo: 'Não sei' },
    ],
  },
  {
    chave: 'cobranca',
    nome: 'cobranca',
    pergunta: 'Quanto você sente que precisa de alguém cobrando a sua constância?',
    ajuda: 'Cobrança existe nos dois formatos — a pergunta é o quanto ela pesa para você.',
    opcoes: [
      { valor: 'quaseNada', rotulo: 'Quase nada' },
      { valor: 'pouco', rotulo: 'Um pouco' },
      { valor: 'moderado', rotulo: 'Moderadamente' },
      { valor: 'bastante', rotulo: 'Bastante' },
      { valor: 'semCobrancaParo', rotulo: 'Sem cobrança eu normalmente paro' },
    ],
  },
  {
    chave: 'prioridades',
    nome: 'prioridades',
    pergunta: 'O que você mais precisa de um personal?',
    ajuda: 'Escolha até 3 — é a pergunta que mais pesa no resultado.',
    multipla: { max: 3 },
    opcoes: [
      { valor: 'presenca', rotulo: 'Alguém comigo durante o treino' },
      { valor: 'saberOQueFazer', rotulo: 'Saber exatamente o que fazer' },
      { valor: 'correcao', rotulo: 'Correção de execução' },
      { valor: 'progressao', rotulo: 'Progressão de cargas' },
      { valor: 'evolucao', rotulo: 'Acompanhamento da evolução' },
      { valor: 'cobranca', rotulo: 'Cobrança de constância' },
      { valor: 'adaptacao', rotulo: 'Adaptação quando a rotina muda' },
      { valor: 'duvidas', rotulo: 'Tirar dúvidas' },
      { valor: 'motivacao', rotulo: 'Motivação' },
    ],
    reforco: 'Última pergunta depois desta.',
  },
  {
    chave: 'orcamento',
    nome: 'orcamento',
    pergunta: 'Quanto o investimento mensal pesa na sua decisão?',
    ajuda: 'Não perguntamos quanto você pode pagar — só o peso desse fator na escolha.',
    opcoes: [
      { valor: 'pouco', rotulo: 'Pouco' },
      { valor: 'moderado', rotulo: 'Moderadamente' },
      { valor: 'bastante', rotulo: 'Bastante' },
      { valor: 'decisivo', rotulo: 'É um fator decisivo' },
      { valor: 'naoResponder', rotulo: 'Prefiro não responder' },
    ],
  },
];

/* ------------------------------------------------------------------ *
 * Estado
 * ------------------------------------------------------------------ */

type Parciais = Partial<Respostas>;
const CHAVE = 'ppp-formato';
const marcos = new Set<number>();

let respostas: Parciais = {};
let etapaAtual = 0;
let app: HTMLElement;
let tpl: HTMLTemplateElement;

function salvar(): void {
  try {
    sessionStorage.setItem(CHAVE, JSON.stringify({ respostas, etapaAtual }));
  } catch {
    /* modo privado */
  }
}

function restaurar(): void {
  try {
    const b = sessionStorage.getItem(CHAVE);
    if (!b) return;
    const d = JSON.parse(b) as { respostas: Parciais; etapaAtual: number };
    if (d?.respostas) {
      respostas = d.respostas;
      etapaAtual = typeof d.etapaAtual === 'number' ? d.etapaAtual : 0;
    }
  } catch {
    /* dado corrompido */
  }
}

function limparSessao(): void {
  try {
    sessionStorage.removeItem(CHAVE);
  } catch {
    /* sem persistência */
  }
}

function el<K extends keyof HTMLElementTagNameMap>(t: K, c?: string, x?: string): HTMLElementTagNameMap[K] {
  const n = document.createElement(t);
  if (c) n.className = c;
  if (x) n.textContent = x;
  return n;
}

function focarTitulo(): void {
  const h = app.querySelector<HTMLElement>('.po-pergunta, .po-res-titulo');
  if (!h) return;
  h.setAttribute('tabindex', '-1');
  h.focus({ preventScroll: true });
}

function garantirVisivel(): void {
  const c = app.getBoundingClientRect();
  if (c.top < 80 || c.top > window.innerHeight * 0.5) app.scrollIntoView({ block: 'start' });
}

/* ------------------------------------------------------------------ *
 * Questionário
 * ------------------------------------------------------------------ */

function render(): void {
  if (etapaAtual >= ETAPAS.length) return concluir();

  const etapa = ETAPAS[etapaAtual];
  const frag = tpl.content.cloneNode(true) as DocumentFragment;
  const raiz = frag.querySelector<HTMLElement>('.po-quiz')!;

  const pos = etapaAtual + 1;
  const total = ETAPAS.length;
  raiz.querySelector<HTMLElement>('.po-progresso-preenchido')!.style.width = `${Math.round((pos / total) * 100)}%`;
  raiz.querySelector<HTMLElement>('.po-progresso-txt')!.textContent = `Pergunta ${pos} de ${total}`;
  raiz.querySelector<HTMLElement>('.po-pergunta')!.textContent = etapa.pergunta;
  raiz.querySelector<HTMLElement>('.po-ajuda')!.textContent = etapa.ajuda || '';
  raiz.querySelector<HTMLElement>('.po-reforco')!.textContent = etapa.reforco || '';

  const caixa = raiz.querySelector<HTMLElement>('.po-opcoes')!;
  const avancar = raiz.querySelector<HTMLButtonElement>('.po-avancar')!;
  const voltar = raiz.querySelector<HTMLButtonElement>('.po-voltar')!;

  if (etapaAtual === 0) voltar.hidden = true;
  voltar.addEventListener('click', () => {
    if (etapaAtual > 0) {
      etapaAtual -= 1;
      salvar();
      render();
    }
  });

  if (etapa.multipla) montarMultipla(etapa, caixa, avancar);
  else montarSimples(etapa, caixa);

  app.replaceChildren(frag);
  app.dataset.estado = 'quiz';
  garantirVisivel();
  focarTitulo();
  ev('coaching_format_step', { step_number: pos, step_name: etapa.nome });

  const pct = Math.round((pos / total) * 100);
  for (const m of [25, 50, 75]) {
    if (pct >= m && !marcos.has(m)) {
      marcos.add(m);
      ev('coaching_format_progress', { milestone: m });
    }
  }
}

function montarSimples(etapa: Etapa, caixa: HTMLElement): void {
  if (etapa.curtas) caixa.classList.add('po-opcoes--curtas');
  const atual = respostas[etapa.chave] as string | undefined;
  for (const op of etapa.opcoes) {
    const b = el('button', 'po-opcao');
    b.type = 'button';
    b.appendChild(el('span', 'po-opcao-marca'));
    b.appendChild(el('span', undefined, op.rotulo));
    if (atual === op.valor) b.classList.add('po-sel');
    b.addEventListener('click', () => {
      caixa.querySelectorAll('.po-opcao').forEach((o) => o.classList.remove('po-sel'));
      b.classList.add('po-sel');
      (respostas as Record<string, unknown>)[etapa.chave] = op.valor;
      salvar();
      window.setTimeout(avancar, 160);
    });
    caixa.appendChild(b);
  }
}

function montarMultipla(etapa: Etapa, caixa: HTMLElement, botao: HTMLButtonElement): void {
  const max = etapa.multipla!.max;
  let sel: string[] = Array.isArray(respostas.prioridades) ? [...(respostas.prioridades as string[])] : [];

  const sincronizar = () => {
    caixa.querySelectorAll<HTMLButtonElement>('.po-opcao').forEach((b) => {
      b.setAttribute('aria-pressed', sel.includes(b.dataset.valor!) ? 'true' : 'false');
    });
    botao.hidden = sel.length === 0;
    botao.textContent = sel.length ? `Continuar (${sel.length}/${max})` : 'Continuar';
  };

  for (const op of etapa.opcoes) {
    const b = el('button', 'po-opcao');
    b.type = 'button';
    b.dataset.valor = op.valor;
    b.setAttribute('aria-pressed', 'false');
    b.appendChild(el('span', 'po-opcao-marca'));
    b.appendChild(el('span', undefined, op.rotulo));
    b.addEventListener('click', () => {
      if (sel.includes(op.valor)) sel = sel.filter((v) => v !== op.valor);
      else if (sel.length < max) sel.push(op.valor);
      // Cheio: a mais antiga sai para a nova entrar, sem travar o usuário.
      else sel = [...sel.slice(1), op.valor];
      respostas.prioridades = sel as Prioridade[];
      salvar();
      sincronizar();
    });
    caixa.appendChild(b);
  }
  sincronizar();
  botao.addEventListener('click', avancar);
}

function avancar(): void {
  if (etapaAtual < ETAPAS.length - 1) {
    etapaAtual += 1;
    salvar();
    render();
  } else {
    concluir();
  }
}

/** Rótulos legíveis do gargalo, para o mapa da jornada. */
const ROTULO_GARGALO: Record<string, string> = {
  supervisao: 'Precisa de supervisão',
  planejamento: 'Falta planejamento',
  flexibilidade: 'Rotina imprevisível',
  constancia: 'Constância',
  misto: 'Vários fatores ao mesmo tempo',
};

/* ------------------------------------------------------------------ *
 * Resultado
 * ------------------------------------------------------------------ */

function completo(r: Parciais): r is Respostas {
  return Boolean(
    r.experiencia &&
      r.autonomia &&
      r.execucao &&
      r.supervisao &&
      r.videoFeedback &&
      r.objetivo &&
      r.horarioFixo &&
      r.deslocamento &&
      r.cobranca &&
      r.prioridades?.length &&
      r.orcamento,
  );
}

function concluir(): void {
  if (!completo(respostas)) {
    const faltante = ETAPAS.findIndex((e) => {
      const v = (respostas as Record<string, unknown>)[e.chave];
      if (e.chave === 'prioridades') return !(v as unknown[] | undefined)?.length;
      return !v;
    });
    etapaAtual = faltante >= 0 ? faltante : 0;
    render();
    return;
  }
  const cobertura = coberturaPresencial(respostas.cidadeSlug);
  const res = recomendarFormato(respostas as Respostas, cobertura);
  ev('coaching_format_complete');
  ev('coaching_format_result', res.analytics);
  renderResultado(res);
}

function renderResultado(r: Resultado): void {
  const raiz = el('div', 'po-resultado');
  raiz.setAttribute('role', 'region');
  raiz.setAttribute('aria-label', 'Seu resultado');

  /* --- Cabeçalho --- */
  const cab = el('header', 'po-res-cabecalho');
  cab.appendChild(el('p', 'po-res-rotulo', r.formato === 'ambos' ? 'Seu resultado' : 'Melhor encaixe para você'));
  cab.appendChild(el('h2', 'po-res-titulo', r.rotulo));
  if (r.rotuloAlternativa) {
    cab.appendChild(el('p', 'po-res-alt', `Boa alternativa: ${r.rotuloAlternativa}`));
  }
  raiz.appendChild(cab);

  raiz.appendChild(el('p', 'po-res-porque', r.porque));

  /* --- O gargalo: o insight que a pessoa leva embora --- */
  const g = el('section', 'po-gargalo');
  g.appendChild(el('h3', undefined, 'O que isso diz sobre o seu caso'));
  g.appendChild(el('p', undefined, r.gargaloTexto));
  raiz.appendChild(g);

  /* --- Conflito: mostrar o trade-off em vez de escondê-lo --- */
  if (r.conflito) {
    const c = el('section', 'po-conflito');
    c.appendChild(el('h3', undefined, r.conflito.titulo));
    c.appendChild(el('p', undefined, r.conflito.texto));
    raiz.appendChild(c);
  }

  /* --- Benefício e ponto de atenção, sempre em par --- */
  const par = el('div', 'po-par');
  const bloco = (rotulo: string, texto: string, cls: string) => {
    const d = el('div', `po-par-item ${cls}`);
    d.appendChild(el('h4', undefined, rotulo));
    d.appendChild(el('p', undefined, texto));
    return d;
  };
  par.append(
    bloco('O principal benefício para você', r.principalBeneficio, 'po-par--bom'),
    bloco('O ponto de atenção', r.pontoDeAtencao, 'po-par--atencao'),
  );
  raiz.appendChild(par);

  /* --- Critério de desempate, só no resultado "ambos" --- */
  if (r.criterioDesempate) {
    const d = el('section', 'po-desempate');
    d.appendChild(el('h3', undefined, 'Como escolher, então'));
    const grid = el('div', 'po-desempate-grid');
    const lado = (titulo: string, texto: string) => {
      const x = el('div', 'po-desempate-item');
      x.appendChild(el('h4', undefined, titulo));
      x.appendChild(el('p', undefined, texto));
      return x;
    };
    grid.append(
      lado('Presencial faz mais sentido se…', r.criterioDesempate.presencialSe),
      lado('Online faz mais sentido se…', r.criterioDesempate.onlineSe),
    );
    d.appendChild(grid);
    raiz.appendChild(d);
  }

  /* --- Comparador --- */
  const comp = el('section', 'po-bloco');
  comp.appendChild(el('h3', undefined, 'Comparando os dois formatos'));
  comp.appendChild(
    el(
      'p',
      'po-bloco-nota',
      'Planejamento, progressão e cobrança aparecem como "pode existir" nos dois lados de propósito: nenhuma dessas coisas pertence a um formato só. O que muda é como elas são entregues.',
    ),
  );
  const wrap = el('div', 'po-tabela-wrap');
  const tabela = el('table', 'po-tabela');
  const thead = el('thead');
  const trh = el('tr');
  trh.append(el('th', undefined, 'Critério'), el('th', undefined, 'Presencial'), el('th', undefined, 'Online'));
  thead.appendChild(trh);
  tabela.appendChild(thead);
  const tbody = el('tbody');
  for (const linha of r.comparador) {
    const tr = el('tr', linha.destaque ? 'po-linha-destaque' : undefined);
    const th = el('th', undefined, linha.criterio);
    th.setAttribute('scope', 'row');
    tr.append(th, el('td', undefined, linha.presencial), el('td', undefined, linha.online));
    tbody.appendChild(tr);
  }
  tabela.appendChild(tbody);
  wrap.appendChild(tabela);
  comp.appendChild(wrap);
  raiz.appendChild(comp);

  /* --- O formato não determina a qualidade --- */
  const qual = el('section', 'po-qualidade');
  qual.appendChild(el('h3', undefined, 'O formato não determina a qualidade'));
  qual.appendChild(
    el(
      'p',
      undefined,
      'Individualização, progressão, acompanhamento da evolução e comunicação continuam importando tanto no presencial quanto no online. Um acompanhamento online bem estruturado entrega mais do que um presencial mal feito — e o contrário também é verdade. Escolher o formato é metade da decisão; a outra metade é a qualidade de quem você contrata.',
    ),
  );
  raiz.appendChild(qual);

  /* --- Próximo passo principal --- */
  const pp = el('section', 'po-bloco po-proximo');
  pp.appendChild(el('h3', undefined, 'Próximo passo'));
  pp.appendChild(el('p', undefined, r.proximoPasso.texto));
  const btn = el('a', 'btn btn-primary po-proximo-btn', r.proximoPasso.rotulo);
  btn.href = urlComContexto(r, r.proximoPasso.url, r.proximoPasso.destino);
  btn.addEventListener('click', () => ev(eventoDe(r.proximoPasso.destino), { recommendation: r.formato }));
  pp.appendChild(btn);
  raiz.appendChild(pp);

  /* --- Montinho: só quando há encaixe real --- */
  if (r.montinho.combina) {
    const m = el('section', 'po-compat');
    m.appendChild(
      el('h3', undefined, r.montinho.tipo === 'online' ? 'Seu perfil combina com o acompanhamento online do Montinho' : 'Quer conhecer o atendimento do Montinho?'),
    );
    m.appendChild(el('p', undefined, r.montinho.motivo));
    const acoes = el('div', 'po-acoes');
    const wpp = el('a', 'btn btn-primary');
    wpp.href = whatsappUrl(r.whatsapp);
    wpp.target = '_blank';
    wpp.rel = 'noopener';
    wpp.textContent = r.montinho.tipo === 'online' ? 'Conhecer a consultoria online' : 'Ver como funciona';
    wpp.addEventListener('click', () =>
      ev('coaching_format_whatsapp_click', { recommendation: r.formato, offer: r.montinho.tipo }),
    );
    acoes.appendChild(wpp);
    acoes.appendChild(el('p', 'po-acoes-nota', 'Abre o WhatsApp com um resumo do seu resultado. Você lê antes de enviar.'));
    m.appendChild(acoes);
    raiz.appendChild(m);
  } else {
    // Presencial fora da área: dizer isso é obrigatório, e não é um CTA.
    const n = el('section', 'po-semencaixe');
    n.appendChild(el('h3', undefined, 'Sobre o Montinho, com transparência'));
    n.appendChild(el('p', undefined, r.montinho.motivo));
    raiz.appendChild(n);
  }

  /* --- Outros passos --- */
  if (r.outrosPassos.length) {
    const o = el('section', 'po-bloco');
    o.appendChild(el('h3', undefined, 'Outros caminhos úteis'));
    const ul = el('ul', 'po-passos');
    for (const passo of r.outrosPassos) {
      const li = el('li');
      const a = el('a', 'po-passo-link', passo.rotulo);
      a.href = urlComContexto(r, passo.url, passo.destino);
      a.addEventListener('click', () => ev(eventoDe(passo.destino), { recommendation: r.formato }));
      li.appendChild(a);
      li.appendChild(el('span', 'po-passo-txt', passo.texto));
      ul.appendChild(li);
    }
    o.appendChild(ul);
    raiz.appendChild(o);
  }

  /* --- Conteúdo --- */
  if (r.conteudo.length) {
    const c = el('section', 'po-continuar');
    c.appendChild(el('h3', undefined, 'Para se aprofundar'));
    const ul = el('ul', 'po-links');
    for (const item of r.conteudo) {
      const li = el('li');
      const a = el('a', undefined, item.titulo);
      a.href = item.url;
      a.addEventListener('click', () => ev('coaching_format_article_click', { link_url: item.url }));
      li.appendChild(a);
      ul.appendChild(li);
    }
    c.appendChild(ul);
    raiz.appendChild(c);
  }

  raiz.appendChild(
    el(
      'p',
      'po-aviso',
      'Esta é uma recomendação de formato de serviço a partir do que você declarou — não é avaliação física nem orientação clínica. Se você tem dor, lesão ou alguma condição de saúde, converse com um médico ou fisioterapeuta antes de começar.',
    ),
  );

  anexarContinuidade(
    raiz,
    'formato',
    {
      experiencia: respostas.experiencia,
      objetivo: respostas.objetivo,
      autonomia: respostas.autonomia,
      formato: r.formato,
      formatoRotulo: r.rotulo,
      gargalo: r.gargalo,
      gargaloRotulo: ROTULO_GARGALO[r.gargalo],
      cidadeSlug: respostas.cidadeSlug,
      cidadeNome: respostas.cidadeNome,
    },
    r.proximoPasso.url,
  );

  raiz.appendChild(rodape(r));

  app.replaceChildren(raiz);
  app.dataset.estado = 'resultado';
  garantirVisivel();
  focarTitulo();
  limparSessao();
}

/** Repassa contexto às ferramentas irmãs, sempre por fragmento. */
function urlComContexto(r: Resultado, url: string, destino: string): string {
  const partes: string[] = [];
  if (respostas.cidadeSlug) partes.push(`c=${respostas.cidadeSlug}`);
  if (destino === 'preco') {
    partes.push(`m=${r.formato === 'presencial' || r.formato === 'hibrido' ? 'presencial' : 'online'}`);
  }
  return partes.length ? `${url}#${partes.join('&')}` : url;
}

const eventoDe = (destino: string): string =>
  ({
    personalScore: 'coaching_format_personal_score_click',
    personalMatch: 'coaching_format_personal_match_click',
    preco: 'coaching_format_price_click',
    cidade: 'coaching_format_map_click',
    rotina: 'coaching_format_routine_click',
  })[destino] ?? 'coaching_format_next_click';

function rodape(r: Resultado): HTMLElement {
  const rod = el('div', 'po-rodape');

  const fb = el('div', 'po-feedback');
  fb.appendChild(el('span', undefined, 'Esse resultado fez sentido para você?'));
  const responder = (v: 'sim' | 'nao') => {
    ev('coaching_format_feedback', { feedback: v, recommendation: r.formato });
    fb.replaceChildren(el('span', undefined, 'Obrigado! Isso ajuda a melhorar a ferramenta.'));
  };
  const sim = el('button', undefined, '👍 Sim');
  sim.type = 'button';
  sim.addEventListener('click', () => responder('sim'));
  const nao = el('button', undefined, '👎 Não muito');
  nao.type = 'button';
  nao.addEventListener('click', () => responder('nao'));
  fb.append(sim, nao);
  rod.appendChild(fb);

  const compartilhar = el('button', 'po-compartilhar', 'Compartilhar');
  compartilhar.type = 'button';
  compartilhar.addEventListener('click', () => {
    ev('coaching_format_share');
    if (navigator.share) void navigator.share({ text: r.share }).catch(() => {});
    else
      void navigator.clipboard?.writeText(r.share).then(
        () => {
          compartilhar.textContent = 'Copiado ✓';
          window.setTimeout(() => (compartilhar.textContent = 'Compartilhar'), 2500);
        },
        () => {
          compartilhar.textContent = 'Não deu para copiar';
        },
      );
  });
  rod.appendChild(compartilhar);

  const refazer = el('button', 'po-refazer', 'Refazer');
  refazer.type = 'button';
  refazer.addEventListener('click', () => {
    const cidadeSlug = respostas.cidadeSlug;
    const cidadeNome = respostas.cidadeNome;
    respostas = { cidadeSlug, cidadeNome };
    etapaAtual = 0;
    marcos.clear();
    limparSessao();
    ev('coaching_format_restart');
    render();
  });
  rod.appendChild(refazer);

  return rod;
}

/* ------------------------------------------------------------------ *
 * Orquestração
 * ------------------------------------------------------------------ */

export function iniciarPresencialOuOnline(): void {
  const raiz = document.getElementById('po-app');
  const molde = document.getElementById('po-tpl');
  if (!raiz || !(molde instanceof HTMLTemplateElement)) return;
  app = raiz;
  tpl = molde;

  ev('coaching_format_view');

  // Cidade herdada de página local (#c=slug). NUNCA muda a recomendação —
  // só o próximo passo e a oferta comercial.
  const m = window.location.hash.match(/[#&]c=([a-z0-9-]+)/i);
  if (m) {
    respostas.cidadeSlug = m[1];
    void (async () => {
      try {
        const resp = await fetch('/dados/cidades-match.json');
        const lista = (await resp.json()) as { n: string; s: string }[];
        const achada = lista.find((c) => c.s === m[1]);
        if (achada) respostas.cidadeNome = achada.n;
      } catch {
        /* sem nome: o link genérico ainda funciona */
      }
    })();
  }

  restaurar();

  const iniciar = document.getElementById('po-iniciar');
  if (!iniciar) return;
  const retomando = etapaAtual > 0 && Object.keys(respostas).length > 0;
  if (retomando) iniciar.textContent = 'Continuar de onde parei';
  iniciar.addEventListener('click', () => {
    ev('coaching_format_start', retomando ? { resumed: true } : undefined);
    render();
  });
}
