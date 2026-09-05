/**
 * Camada de interface do "Diagnóstico da Constância".
 *
 * Coleta respostas e renderiza o que o motor devolve. Nenhuma regra de
 * diagnóstico mora aqui — ela vive em src/lib/constancia.ts.
 *
 * A etapa 2 (dias reais) é o coração da ferramenta: é ali que a lacuna
 * entre plano e rotina aparece. Por isso ela mostra, na própria pergunta,
 * o número que a pessoa acabou de declarar como plano.
 */
import { diagnosticarConstancia, type Barreira, type ConstanciaRespostas } from '../lib/constancia';
import { anexarProximoPasso } from './proximoPasso.client';
import { relatoConstancia } from '../lib/relatos';

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
  chave: keyof ConstanciaRespostas;
  nome: string;
  pergunta: string | ((r: Partial<ConstanciaRespostas>) => string);
  ajuda?: string;
  opcoes: Opcao[];
  curtas?: boolean;
  multipla?: { max: number };
  reforco?: string;
  /** Etapa condicional. */
  quando?: (r: Partial<ConstanciaRespostas>) => boolean;
}

const DIAS_ROTULO: Record<string, string> = {
  '2': '2 dias',
  '3': '3 dias',
  '4': '4 dias',
  '5': '5 dias',
  '6': '6 dias',
  todos: 'todos os dias',
  semNumero: 'sem número definido',
};

const ETAPAS: Etapa[] = [
  {
    chave: 'diasPlanejados',
    nome: 'dias_planejados',
    pergunta: 'Quantos dias por semana você planeja treinar?',
    ajuda: 'O número que está no seu plano — não o que acontece.',
    curtas: true,
    opcoes: [
      { valor: '2', rotulo: '2 dias' },
      { valor: '3', rotulo: '3 dias' },
      { valor: '4', rotulo: '4 dias' },
      { valor: '5', rotulo: '5 dias' },
      { valor: '6', rotulo: '6 dias' },
      { valor: 'todos', rotulo: 'Todos os dias' },
      { valor: 'semNumero', rotulo: 'Não tenho número definido' },
    ],
    reforco: 'Não estamos avaliando a sua força de vontade. Vamos comparar o seu plano com a sua semana real.',
  },
  {
    chave: 'diasReais',
    nome: 'dias_reais',
    // A pergunta cita o plano recém-declarado: é o contraste que dá o insight.
    pergunta: (r) =>
      r.diasPlanejados && r.diasPlanejados !== 'semNumero'
        ? `E quantos dias você realmente consegue treinar na maioria das semanas?`
        : 'E quantos dias você realmente consegue treinar na maioria das semanas?',
    ajuda: 'Pense nas últimas quatro semanas, incluindo as ruins. Aqui não existe resposta certa.',
    curtas: true,
    opcoes: [
      { valor: 'nenhum', rotulo: 'Nenhum' },
      { valor: '1', rotulo: '1 dia' },
      { valor: '2', rotulo: '2 dias' },
      { valor: '3', rotulo: '3 dias' },
      { valor: '4', rotulo: '4 dias' },
      { valor: '5mais', rotulo: '5 ou mais' },
      { valor: 'varia', rotulo: 'Varia demais' },
    ],
  },
  {
    chave: 'duracao',
    nome: 'duracao',
    pergunta: 'Quanto tempo dura cada treino, em média?',
    curtas: true,
    opcoes: [
      { valor: 'ate30', rotulo: 'Até 30 min' },
      { valor: '30a45', rotulo: '30 a 45 min' },
      { valor: '45a60', rotulo: '45 a 60 min' },
      { valor: '60a90', rotulo: '60 a 90 min' },
      { valor: 'mais90', rotulo: 'Mais de 90 min' },
      { valor: 'nuncaSei', rotulo: 'Nunca sei' },
    ],
  },
  {
    chave: 'deslocamento',
    nome: 'deslocamento',
    pergunta: 'Quanto tempo leva entre decidir treinar e começar de fato?',
    ajuda: 'Considere deslocamento, trocar de roupa, esperar — tudo que acontece antes da primeira série.',
    opcoes: [
      { valor: 'mesmoLugar', rotulo: 'Treino onde já estou' },
      { valor: 'ate10', rotulo: 'Até 10 minutos' },
      { valor: '10a20', rotulo: '10 a 20 minutos' },
      { valor: '20a30', rotulo: '20 a 30 minutos' },
      { valor: 'mais30', rotulo: 'Mais de 30 minutos' },
      { valor: 'varia', rotulo: 'Varia bastante' },
    ],
  },
  {
    // Só interessa quando o deslocamento já sugere atrito: serve para o
    // próximo passo, não para o diagnóstico.
    chave: 'local',
    nome: 'local',
    pergunta: 'Onde você costuma treinar?',
    quando: (r) => r.deslocamento === '20a30' || r.deslocamento === 'mais30' || r.deslocamento === 'varia',
    opcoes: [
      { valor: 'academia', rotulo: 'Academia' },
      { valor: 'condominio', rotulo: 'Academia do condomínio' },
      { valor: 'casa', rotulo: 'Em casa' },
      { valor: 'arLivre', rotulo: 'Ao ar livre' },
      { valor: 'varia', rotulo: 'Varia' },
    ],
  },
  {
    chave: 'previsibilidade',
    nome: 'previsibilidade',
    pergunta: 'A sua semana é previsível?',
    opcoes: [
      { valor: 'muito', rotulo: 'Muito previsível' },
      { valor: 'razoavel', rotulo: 'Razoavelmente previsível' },
      { valor: 'mudaBastante', rotulo: 'Muda bastante' },
      { valor: 'quaseNunca', rotulo: 'Quase nunca sei como será meu dia' },
    ],
  },
  {
    chave: 'reacaoFalta',
    nome: 'reacao_falta',
    pergunta: 'Quando você perde um treino planejado, o que costuma acontecer?',
    ajuda: 'Uma das perguntas que mais muda o diagnóstico.',
    opcoes: [
      { valor: 'proximoDia', rotulo: 'Faço no próximo dia possível' },
      { valor: 'compensar', rotulo: 'Tento compensar depois' },
      { valor: 'perdido', rotulo: 'Fico perdido sobre como reorganizar' },
      { valor: 'perdeSemana', rotulo: 'Geralmente perco o resto da semana' },
      { valor: 'desanimo', rotulo: 'Desanimo e paro por alguns dias' },
      { valor: 'varia', rotulo: 'Varia' },
    ],
  },
  {
    chave: 'barreiras',
    nome: 'barreiras',
    pergunta: 'O que mais costuma fazer você faltar?',
    ajuda: 'Escolha até 2 — os motivos que mais se repetem.',
    multipla: { max: 2 },
    opcoes: [
      { valor: 'tempo', rotulo: 'Falta de tempo' },
      { valor: 'cansaco', rotulo: 'Cansaço' },
      { valor: 'trabalho', rotulo: 'Trabalho' },
      { valor: 'familia', rotulo: 'Família' },
      { valor: 'deslocamento', rotulo: 'Deslocamento' },
      { valor: 'academiaLotada', rotulo: 'Academia lotada' },
      { valor: 'naoSeiQueFazer', rotulo: 'Não sei o que fazer' },
      { valor: 'treinoDemora', rotulo: 'O treino demora demais' },
      { valor: 'desanimo', rotulo: 'Desânimo' },
      { valor: 'rotinaMuda', rotulo: 'A rotina muda' },
      { valor: 'naoVejoResultado', rotulo: 'Não vejo resultado' },
      { valor: 'adiando', rotulo: 'Esqueço ou vou adiando' },
    ],
    reforco: 'Falta pouco.',
  },
  {
    chave: 'clareza',
    nome: 'clareza',
    pergunta: 'Na hora de treinar, você já sabe exatamente o que vai fazer?',
    opcoes: [
      { valor: 'sim', rotulo: 'Sim, sempre' },
      { valor: 'quaseSempre', rotulo: 'Quase sempre' },
      { valor: 'asVezes', rotulo: 'Às vezes' },
      { valor: 'decideNaHora', rotulo: 'Costumo decidir na hora' },
      { valor: 'semTreino', rotulo: 'Não tenho um treino estruturado' },
    ],
  },
  {
    chave: 'progresso',
    nome: 'progresso',
    pergunta: 'Você consegue perceber se está evoluindo?',
    opcoes: [
      { valor: 'acompanho', rotulo: 'Sim, acompanho' },
      { valor: 'maisOuMenos', rotulo: 'Mais ou menos' },
      { valor: 'raramente', rotulo: 'Raramente' },
      { valor: 'naoFacoIdeia', rotulo: 'Não faço ideia' },
      { valor: 'poucoTempo', rotulo: 'Ainda não treinei tempo suficiente' },
    ],
  },
  {
    chave: 'planoB',
    nome: 'plano_b',
    pergunta: 'Se a semana ficar corrida, você sabe qual é a sua versão mínima do treino?',
    ajuda: 'A versão curta que ainda vale a pena fazer quando não dá para fazer o treino inteiro.',
    opcoes: [
      { valor: 'sim', rotulo: 'Sim, sei exatamente' },
      { valor: 'maisOuMenos', rotulo: 'Mais ou menos' },
      { valor: 'nao', rotulo: 'Não' },
      { valor: 'nuncaPensei', rotulo: 'Nunca pensei nisso' },
    ],
  },
];

const etapasAtivas = (r: Partial<ConstanciaRespostas>) => ETAPAS.filter((e) => !e.quando || e.quando(r));

/* ------------------------------------------------------------------ *
 * Estado
 * ------------------------------------------------------------------ */

type Respostas = Partial<ConstanciaRespostas>;
const CHAVE = 'ppp-constancia';
const marcos = new Set<number>();

let respostas: Respostas = {};
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
    const d = JSON.parse(b) as { respostas: Respostas; etapaAtual: number };
    if (d?.respostas) {
      respostas = d.respostas;
      etapaAtual = typeof d.etapaAtual === 'number' ? d.etapaAtual : 0;
    }
  } catch {
    /* dado corrompido */
  }
}

function el<K extends keyof HTMLElementTagNameMap>(t: K, c?: string, x?: string): HTMLElementTagNameMap[K] {
  const n = document.createElement(t);
  if (c) n.className = c;
  if (x) n.textContent = x;
  return n;
}

function focarTitulo(): void {
  const h = app.querySelector<HTMLElement>('.dc-pergunta, .dc-res-titulo');
  if (!h) return;
  h.setAttribute('tabindex', '-1');
  h.focus({ preventScroll: true });
}

function garantirVisivel(): void {
  const c = app.getBoundingClientRect();
  if (c.top < 80 || c.top > window.innerHeight * 0.5) app.scrollIntoView({ block: 'start' });
}

/* ------------------------------------------------------------------ *
 * Renderização
 * ------------------------------------------------------------------ */

function render(): void {
  const ativas = etapasAtivas(respostas);
  if (etapaAtual >= ativas.length) return concluir();

  const etapa = ativas[etapaAtual];
  const frag = tpl.content.cloneNode(true) as DocumentFragment;
  const raiz = frag.querySelector<HTMLElement>('.dc-quiz')!;

  const pos = etapaAtual + 1;
  const total = ativas.length;
  raiz.querySelector<HTMLElement>('.dc-progresso-preenchido')!.style.width = `${Math.round((pos / total) * 100)}%`;
  raiz.querySelector<HTMLElement>('.dc-progresso-txt')!.textContent = `Pergunta ${pos} de ${total}`;
  raiz.querySelector<HTMLElement>('.dc-pergunta')!.textContent =
    typeof etapa.pergunta === 'function' ? etapa.pergunta(respostas) : etapa.pergunta;
  raiz.querySelector<HTMLElement>('.dc-ajuda')!.textContent = etapa.ajuda || '';
  raiz.querySelector<HTMLElement>('.dc-reforco')!.textContent = etapa.reforco || '';

  // Lembrete do plano declarado na etapa em que ele é o contraste.
  const contexto = raiz.querySelector<HTMLElement>('.dc-contexto')!;
  if (etapa.chave === 'diasReais' && respostas.diasPlanejados) {
    contexto.textContent = `Você planeja ${DIAS_ROTULO[respostas.diasPlanejados]}.`;
  } else {
    contexto.remove();
  }

  const caixa = raiz.querySelector<HTMLElement>('.dc-opcoes')!;
  const avancar = raiz.querySelector<HTMLButtonElement>('.dc-avancar')!;
  const voltar = raiz.querySelector<HTMLButtonElement>('.dc-voltar')!;

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
  ev('consistency_diagnosis_step', { step_number: pos, step_name: etapa.nome });

  const pct = Math.round((pos / total) * 100);
  for (const m of [25, 50, 75]) {
    if (pct >= m && !marcos.has(m)) {
      marcos.add(m);
      ev('consistency_diagnosis_progress', { milestone: m });
    }
  }
}

function montarSimples(etapa: Etapa, caixa: HTMLElement): void {
  if (etapa.curtas) caixa.classList.add('dc-opcoes--curtas');
  const atual = respostas[etapa.chave] as string | undefined;
  for (const op of etapa.opcoes) {
    const b = el('button', 'dc-opcao');
    b.type = 'button';
    b.appendChild(el('span', 'dc-opcao-marca'));
    b.appendChild(el('span', undefined, op.rotulo));
    if (atual === op.valor) b.classList.add('dc-sel');
    b.addEventListener('click', () => {
      caixa.querySelectorAll('.dc-opcao').forEach((o) => o.classList.remove('dc-sel'));
      b.classList.add('dc-sel');
      (respostas as Record<string, unknown>)[etapa.chave] = op.valor;
      // Mudar o deslocamento pode tornar a etapa de local irrelevante.
      if (etapa.chave === 'deslocamento' && !['20a30', 'mais30', 'varia'].includes(op.valor)) {
        delete respostas.local;
      }
      salvar();
      window.setTimeout(avancar, 160);
    });
    caixa.appendChild(b);
  }
}

function montarMultipla(etapa: Etapa, caixa: HTMLElement, botao: HTMLButtonElement): void {
  const max = etapa.multipla!.max;
  let sel: string[] = Array.isArray(respostas.barreiras) ? [...(respostas.barreiras as string[])] : [];

  const sincronizar = () => {
    caixa.querySelectorAll<HTMLButtonElement>('.dc-opcao').forEach((b) => {
      b.setAttribute('aria-pressed', sel.includes(b.dataset.valor!) ? 'true' : 'false');
    });
    botao.hidden = sel.length === 0;
  };

  for (const op of etapa.opcoes) {
    const b = el('button', 'dc-opcao');
    b.type = 'button';
    b.dataset.valor = op.valor;
    b.setAttribute('aria-pressed', 'false');
    b.appendChild(el('span', 'dc-opcao-marca'));
    b.appendChild(el('span', undefined, op.rotulo));
    b.addEventListener('click', () => {
      if (sel.includes(op.valor)) sel = sel.filter((v) => v !== op.valor);
      else if (sel.length < max) sel.push(op.valor);
      else sel = [sel[sel.length - 1], op.valor];
      respostas.barreiras = sel as Barreira[];
      salvar();
      sincronizar();
    });
    caixa.appendChild(b);
  }
  sincronizar();
  botao.textContent = 'Continuar';
  botao.addEventListener('click', avancar);
}

function avancar(): void {
  const ativas = etapasAtivas(respostas);
  if (etapaAtual < ativas.length - 1) {
    etapaAtual += 1;
    salvar();
    render();
  } else {
    concluir();
  }
}

/* ------------------------------------------------------------------ *
 * Resultado
 * ------------------------------------------------------------------ */

function completo(r: Respostas): r is ConstanciaRespostas {
  return Boolean(
    r.diasPlanejados &&
      r.diasReais &&
      r.duracao &&
      r.deslocamento &&
      r.previsibilidade &&
      r.reacaoFalta &&
      r.barreiras?.length &&
      r.clareza &&
      r.progresso &&
      r.planoB,
  );
}

function concluir(): void {
  if (!completo(respostas)) {
    const ativas = etapasAtivas(respostas);
    const faltante = ativas.findIndex((e) => {
      const v = (respostas as Record<string, unknown>)[e.chave];
      if (e.chave === 'barreiras') return !(v as unknown[] | undefined)?.length;
      if (e.chave === 'local') return false; // opcional
      return !v;
    });
    etapaAtual = faltante >= 0 ? faltante : 0;
    render();
    return;
  }
  const res = diagnosticarConstancia(respostas as ConstanciaRespostas);
  ev('consistency_diagnosis_complete');
  ev('consistency_diagnosis_result', res.analytics);
  renderResultado(res);
}

function renderResultado(r: ReturnType<typeof diagnosticarConstancia>): void {
  const raiz = el('div', 'dc-resultado');
  raiz.setAttribute('role', 'region');
  raiz.setAttribute('aria-label', 'Seu diagnóstico de constância');

  /* --- Cabeçalho --- */
  const cab = el('header', 'dc-res-cabecalho');
  cab.appendChild(el('p', 'dc-res-rotulo', r.temGargalo ? 'Seu principal gargalo' : 'Seu diagnóstico'));
  const titulo = el('h2', 'dc-res-titulo', r.temGargalo ? r.principal!.titulo : 'Poucas barreiras evidentes de constância');
  cab.appendChild(titulo);
  cab.appendChild(el('p', 'dc-res-resumo', r.resumo));
  raiz.appendChild(cab);

  if (r.observacao) {
    raiz.appendChild(el('p', 'dc-observacao', r.observacao));
  }

  /* --- Gargalo principal, em três partes --- */
  if (r.principal) {
    const g = el('section', 'dc-bloco dc-gargalo');
    const parte = (h: string, t: string) => {
      const d = el('div', 'dc-parte');
      d.appendChild(el('h4', undefined, h));
      d.appendChild(el('p', undefined, t));
      return d;
    };
    g.append(
      parte('Por que chegamos nisso', r.principal.porQueAtrapalha),
      parte('O primeiro ajuste que eu faria', r.principal.ajuste),
    );
    raiz.appendChild(g);
  }

  /* --- Semana-alvo × semana mínima --- */
  const sem = el('section', 'dc-bloco dc-semana');
  sem.appendChild(el('h3', undefined, 'A semana que eu usaria como base'));
  const par = el('div', 'dc-par');
  const card = (num: number, rot: string, dur: string, min = false) => {
    const c = el('div', `dc-par-item${min ? ' dc-par-item--min' : ''}`);
    c.appendChild(el('span', 'dc-par-num', String(num)));
    c.appendChild(el('span', 'dc-par-rot', rot));
    c.appendChild(el('span', 'dc-par-dur', dur));
    return c;
  };
  par.append(
    card(r.semana.alvo, r.semana.alvo === 1 ? 'sessão · semana-alvo' : 'sessões · semana-alvo', r.semana.duracaoAlvo),
    card(r.semana.minima, r.semana.minima === 1 ? 'sessão · semana mínima' : 'sessões · semana mínima', r.semana.duracaoMinima, true),
  );
  sem.appendChild(par);
  sem.appendChild(el('p', undefined, r.planoB));
  sem.appendChild(
    el('p', 'dc-principio', 'Seu sistema precisa funcionar também nas semanas ruins — não apenas quando tudo dá certo.'),
  );
  raiz.appendChild(sem);

  /* --- Se você mudar só uma coisa --- */
  const uma = el('section', 'dc-bloco dc-uma');
  uma.appendChild(el('h3', undefined, 'Se você mudar apenas uma coisa nesta semana'));
  uma.appendChild(el('p', undefined, r.umaCoisa));
  raiz.appendChild(uma);

  /* --- Gargalos secundários --- */
  if (r.secundarios.length) {
    const s = el('section', 'dc-bloco');
    s.appendChild(el('h3', undefined, r.secundarios.length === 1 ? 'Outro ponto que apareceu' : 'Outros pontos que apareceram'));
    for (const g of r.secundarios) {
      const det = el('details', 'dc-secundario');
      const sum = el('summary', undefined, g.titulo);
      det.appendChild(sum);
      const corpo = el('div');
      corpo.appendChild(el('p', 'dc-sec-mostra', g.oQueMostra));
      corpo.appendChild(el('p', undefined, g.ajuste));
      det.appendChild(corpo);
      s.appendChild(det);
    }
    raiz.appendChild(s);
  }

  /*
   * O próximo passo e a oferta comercial saíram daqui.
   *
   * Os dois blocos que ficavam neste ponto — "Próximo passo", montado pela
   * própria engine, e "Quer ajuda para organizar isso?", com o botão de
   * WhatsApp — agora são decididos pelo motor central, que enxerga o
   * resultado E o mapa da pessoa. Ver docs/motor-proximo-passo.md.
   *
   * A saída do WhatsApp daqui é deliberada: o diagnóstico da constância é a
   * primeira etapa da jornada, e mandar quem acabou de descobrir um gargalo
   * direto para a conversa comercial é pular quatro degraus da escada de
   * conversão. O motor oferece consultoria quando necessidade E intenção
   * estiverem altas — o que não é o caso de quem está na etapa 1.
   */

  /* --- Conteúdo --- */
  if (r.conteudo.length) {
    const c = el('section', 'dc-continuar');
    c.appendChild(el('h3', undefined, 'Para se aprofundar'));
    const ul = el('ul', 'dc-links');
    for (const item of r.conteudo) {
      const li = el('li');
      const a = el('a', undefined, item.titulo);
      a.href = item.url;
      a.addEventListener('click', () => ev('consistency_diagnosis_article_click', { link_url: item.url }));
      li.appendChild(a);
      ul.appendChild(li);
    }
    c.appendChild(ul);
    raiz.appendChild(c);
  }

  raiz.appendChild(
    el(
      'p',
      'dc-aviso',
      'Este diagnóstico avalia a organização da sua rotina de treino a partir do que você declarou. Não é avaliação psicológica nem substitui orientação profissional. Se você tem dor, lesão ou alguma condição de saúde, converse com um médico ou fisioterapeuta antes de começar.',
    ),
  );

  const relato = relatoConstancia(r);
  relato.perfil = {
    ...relato.perfil,
    cidadeSlug: respostas.cidadeSlug,
    cidadeNome: respostas.cidadeNome,
  };
  anexarProximoPasso(raiz, relato);

  raiz.appendChild(rodape(r));

  app.replaceChildren(raiz);
  app.dataset.estado = 'resultado';
  garantirVisivel();
  focarTitulo();
  try {
    sessionStorage.removeItem(CHAVE);
  } catch {
    /* sem persistência */
  }
}

function rodape(r: ReturnType<typeof diagnosticarConstancia>): HTMLElement {
  const rod = el('div', 'dc-rodape');

  const fb = el('div', 'dc-feedback');
  fb.appendChild(el('span', undefined, 'Esse diagnóstico descreveu bem a sua situação?'));
  const responder = (v: 'sim' | 'nao') => {
    ev('consistency_diagnosis_feedback', { feedback: v, primary_barrier: r.analytics.primary_barrier });
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

  const compartilhar = el('button', 'dc-compartilhar', 'Compartilhar');
  compartilhar.type = 'button';
  compartilhar.addEventListener('click', () => {
    ev('consistency_diagnosis_share');
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

  const refazer = el('button', 'dc-refazer', 'Refazer');
  refazer.type = 'button';
  refazer.addEventListener('click', () => {
    respostas = {};
    etapaAtual = 0;
    marcos.clear();
    try {
      sessionStorage.removeItem(CHAVE);
    } catch {
      /* sem persistência */
    }
    ev('consistency_diagnosis_restart');
    render();
  });
  rod.appendChild(refazer);

  return rod;
}

/* ------------------------------------------------------------------ *
 * Orquestração
 * ------------------------------------------------------------------ */

export function iniciarConstancia(): void {
  const raiz = document.getElementById('dc-app');
  const molde = document.getElementById('dc-tpl');
  if (!raiz || !(molde instanceof HTMLTemplateElement)) return;
  app = raiz;
  tpl = molde;

  ev('consistency_diagnosis_view');

  // Cidade herdada de página local (#c=slug): não muda o diagnóstico, só
  // permite que o próximo passo aponte para o mapa da cidade certa.
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

  const iniciar = document.getElementById('dc-iniciar');
  if (!iniciar) return;
  const retomando = etapaAtual > 0 && Object.keys(respostas).length > 0;
  if (retomando) iniciar.textContent = 'Continuar de onde parei';
  iniciar.addEventListener('click', () => {
    ev('consistency_diagnosis_start', retomando ? { resumed: true } : undefined);
    render();
  });
}
