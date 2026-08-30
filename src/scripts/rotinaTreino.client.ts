/**
 * Camada de interface da ferramenta "Treino para Minha Rotina".
 *
 * Responsabilidade única: coletar respostas e renderizar o que o motor
 * devolve. Nenhuma regra de recomendação mora aqui — ela vive em
 * src/lib/rotinaTreino.ts.
 *
 * Sem framework e sem hidratação: DOM direto, uma pergunta por vez. Nada é
 * escrito na URL (nenhum resultado indexável); o contexto de cidade vindo
 * das páginas locais chega por fragmento (#c=slug), que o Google não
 * rastreia.
 */
import { rotinaTreinoEngine, type RotinaRespostas } from '../lib/rotinaTreino';
import { whatsappUrl } from '../lib/links';
import { anexarContinuidade } from './jornada.client';

/* ------------------------------------------------------------------ *
 * Analytics — só dispara se o GA foi carregado (consentimento LGPD).
 * ------------------------------------------------------------------ */
type Gtag = (comando: string, evento: string, params?: Record<string, unknown>) => void;

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
  chave: keyof RotinaRespostas;
  nome: string;
  pergunta: string;
  ajuda?: string;
  opcoes: Opcao[];
  curtas?: boolean;
  reforco?: string;
  /** Etapa condicional: só entra no fluxo se a condição for verdadeira. */
  quando?: (r: Partial<RotinaRespostas>) => boolean;
}

const ETAPAS: Etapa[] = [
  {
    chave: 'objetivo',
    nome: 'objetivo',
    pergunta: 'Qual é o seu principal objetivo agora?',
    ajuda: 'O que você mais quer resolver neste momento — não daqui a cinco anos.',
    opcoes: [
      { valor: 'emagrecer', rotulo: 'Emagrecer' },
      { valor: 'massa', rotulo: 'Ganhar massa muscular' },
      { valor: 'condicionamento', rotulo: 'Melhorar o condicionamento' },
      { valor: 'voltar', rotulo: 'Voltar a treinar' },
      { valor: 'forca', rotulo: 'Ganhar força' },
      { valor: 'saude', rotulo: 'Melhorar saúde e disposição' },
      { valor: 'manter', rotulo: 'Manter os resultados que já tenho' },
    ],
  },
  {
    chave: 'experiencia',
    nome: 'experiencia',
    pergunta: 'Como você se considera hoje?',
    opcoes: [
      { valor: 'nunca', rotulo: 'Nunca treinei de verdade' },
      { valor: 'comecando', rotulo: 'Estou começando' },
      { valor: 'voltando', rotulo: 'Estou voltando depois de um tempo' },
      { valor: 'regular', rotulo: 'Já treino regularmente' },
      { valor: 'experiente', rotulo: 'Tenho bastante experiência' },
    ],
    reforco: 'Vamos trabalhar com a sua semana real, não com a semana perfeita.',
  },
  {
    chave: 'dias',
    nome: 'dias',
    pergunta: 'Quantos dias por semana você consegue REALMENTE treinar?',
    ajuda: 'Pense na sua semana comum, não na melhor semana do ano. É a resposta que mais muda o resultado.',
    curtas: true,
    opcoes: [
      { valor: '2', rotulo: '2 dias' },
      { valor: '3', rotulo: '3 dias' },
      { valor: '4', rotulo: '4 dias' },
      { valor: '5', rotulo: '5 dias' },
      { valor: '6', rotulo: '6 dias' },
      { valor: 'varia', rotulo: 'Minha semana varia muito' },
    ],
  },
  {
    chave: 'tempo',
    nome: 'tempo',
    pergunta: 'Quanto tempo você normalmente consegue reservar por treino?',
    curtas: true,
    opcoes: [
      { valor: 'ate30', rotulo: 'Até 30 minutos' },
      { valor: '30a45', rotulo: '30 a 45 minutos' },
      { valor: '45a60', rotulo: '45 a 60 minutos' },
      { valor: '60a75', rotulo: '60 a 75 minutos' },
      { valor: 'mais75', rotulo: 'Mais de 75 minutos' },
      { valor: 'varia', rotulo: 'Varia bastante' },
    ],
    reforco: 'Não existe resposta certa aqui — existe a sua.',
  },
  {
    chave: 'local',
    nome: 'local',
    pergunta: 'Onde você costuma treinar?',
    opcoes: [
      { valor: 'academia', rotulo: 'Academia completa' },
      { valor: 'condominio', rotulo: 'Academia do condomínio' },
      { valor: 'casa', rotulo: 'Em casa' },
      { valor: 'arLivre', rotulo: 'Ao ar livre' },
      { valor: 'misturo', rotulo: 'Misturo locais' },
      { valor: 'vouComecar', rotulo: 'Ainda vou começar' },
    ],
  },
  {
    // Progressive disclosure: só quem treina em casa precisa detalhar.
    chave: 'equipamento',
    nome: 'equipamento',
    pergunta: 'O que você tem disponível para treinar?',
    ajuda: 'A estrutura muda conforme o que existe de equipamento — não adianta um plano que não cabe no seu espaço.',
    quando: (r) => r.local === 'casa',
    opcoes: [
      { valor: 'pesoCorporal', rotulo: 'Só o peso do corpo' },
      { valor: 'elasticos', rotulo: 'Elásticos' },
      { valor: 'halteres', rotulo: 'Halteres' },
      { valor: 'banco', rotulo: 'Halteres e banco' },
      { valor: 'barra', rotulo: 'Barra e anilhas' },
      { valor: 'completa', rotulo: 'Academia doméstica completa' },
    ],
  },
  {
    chave: 'previsibilidade',
    nome: 'previsibilidade',
    pergunta: 'A sua semana costuma ser previsível?',
    ajuda: 'Se os seus horários mudam muito, a estrutura muda junto — e isso faz diferença enorme no resultado.',
    opcoes: [
      { valor: 'fixa', rotulo: 'Sim, meus horários são relativamente fixos' },
      { valor: 'poucoMuda', rotulo: 'Muda um pouco' },
      { valor: 'mudaBastante', rotulo: 'Minha rotina muda bastante' },
      { valor: 'imprevisivel', rotulo: 'Nunca sei quando vou conseguir treinar' },
    ],
  },
  {
    chave: 'dificuldade',
    nome: 'dificuldade',
    pergunta: 'O que mais atrapalha os seus treinos hoje?',
    ajuda: 'Escolha o obstáculo principal — é o fator que mais muda a orientação final.',
    opcoes: [
      { valor: 'tempo', rotulo: 'Falta de tempo' },
      { valor: 'constancia', rotulo: 'Falta de constância' },
      { valor: 'naoSeiFazer', rotulo: 'Não sei o que fazer' },
      { valor: 'comecoParo', rotulo: 'Começo e paro' },
      { valor: 'semEvolucao', rotulo: 'Treino, mas não vejo evolução' },
      { valor: 'progressao', rotulo: 'Tenho dificuldade para aumentar cargas' },
      { valor: 'rotinaMuda', rotulo: 'Minha rotina muda' },
      { valor: 'perdidoAcademia', rotulo: 'Fico perdido na academia' },
    ],
    reforco: 'Falta pouco. Estamos cruzando as suas respostas.',
  },
];

/** Etapas visíveis para o estado atual (progressive disclosure). */
function etapasAtivas(r: Partial<RotinaRespostas>): Etapa[] {
  return ETAPAS.filter((e) => !e.quando || e.quando(r));
}

/* ------------------------------------------------------------------ *
 * Estado
 * ------------------------------------------------------------------ */

type Respostas = Partial<RotinaRespostas>;

const CHAVE_SESSAO = 'ppp-rotina-treino';
const CHAVE_ULTIMO = 'ppp-rotina-ultimo';
const marcos = new Set<number>();

let respostas: Respostas = {};
let etapaAtual = 0;
let app: HTMLElement;
let tpl: HTMLTemplateElement;

function salvar(): void {
  try {
    sessionStorage.setItem(CHAVE_SESSAO, JSON.stringify({ respostas, etapaAtual }));
  } catch {
    /* modo privado: seguir sem persistência */
  }
}

function restaurar(): void {
  try {
    const bruto = sessionStorage.getItem(CHAVE_SESSAO);
    if (!bruto) return;
    const d = JSON.parse(bruto) as { respostas: Respostas; etapaAtual: number };
    if (d && typeof d === 'object' && d.respostas) {
      respostas = d.respostas;
      etapaAtual = typeof d.etapaAtual === 'number' ? d.etapaAtual : 0;
    }
  } catch {
    /* dado corrompido: recomeçar limpo */
  }
}

/* ------------------------------------------------------------------ *
 * Utilidades de DOM
 * ------------------------------------------------------------------ */

function el<K extends keyof HTMLElementTagNameMap>(
  tag: K,
  classe?: string,
  texto?: string,
): HTMLElementTagNameMap[K] {
  const n = document.createElement(tag);
  if (classe) n.className = classe;
  if (texto) n.textContent = texto;
  return n;
}

function focarTitulo(): void {
  const h = app.querySelector<HTMLElement>('.rt-pergunta, .rt-res-titulo');
  if (!h) return;
  h.setAttribute('tabindex', '-1');
  h.focus({ preventScroll: true });
}

/** No celular a pergunta nasce abaixo da dobra: sem isto parece que nada aconteceu. */
function garantirVisivel(): void {
  const caixa = app.getBoundingClientRect();
  if (caixa.top < 80 || caixa.top > window.innerHeight * 0.5) app.scrollIntoView({ block: 'start' });
}

/* ------------------------------------------------------------------ *
 * Renderização das etapas
 * ------------------------------------------------------------------ */

function render(): void {
  const ativas = etapasAtivas(respostas);
  if (etapaAtual >= ativas.length) return concluir();

  const etapa = ativas[etapaAtual];
  const frag = tpl.content.cloneNode(true) as DocumentFragment;
  const raiz = frag.querySelector<HTMLElement>('.rt-quiz')!;

  const total = ativas.length;
  const pos = etapaAtual + 1;
  raiz.querySelector<HTMLElement>('.rt-progresso-preenchido')!.style.width = `${Math.round((pos / total) * 100)}%`;
  raiz.querySelector<HTMLElement>('.rt-progresso-txt')!.textContent = `Pergunta ${pos} de ${total}`;
  raiz.querySelector<HTMLElement>('.rt-pergunta')!.textContent = etapa.pergunta;
  raiz.querySelector<HTMLElement>('.rt-ajuda')!.textContent = etapa.ajuda || '';
  raiz.querySelector<HTMLElement>('.rt-reforco')!.textContent = etapa.reforco || '';

  const caixa = raiz.querySelector<HTMLElement>('.rt-opcoes')!;
  const voltar = raiz.querySelector<HTMLButtonElement>('.rt-voltar')!;
  if (etapaAtual === 0) voltar.hidden = true;
  voltar.addEventListener('click', () => {
    if (etapaAtual > 0) {
      etapaAtual -= 1;
      salvar();
      render();
    }
  });

  if (etapa.curtas) caixa.classList.add('rt-opcoes--curtas');
  const atual = respostas[etapa.chave] as string | undefined;

  for (const op of etapa.opcoes) {
    const b = el('button', 'rt-opcao');
    b.type = 'button';
    b.appendChild(el('span', 'rt-opcao-marca'));
    b.appendChild(el('span', undefined, op.rotulo));
    if (atual === op.valor) b.classList.add('rt-sel');
    b.addEventListener('click', () => {
      caixa.querySelectorAll('.rt-opcao').forEach((o) => o.classList.remove('rt-sel'));
      b.classList.add('rt-sel');
      (respostas as Record<string, unknown>)[etapa.chave] = op.valor;
      // Trocar de local pode invalidar a resposta de equipamento.
      if (etapa.chave === 'local' && op.valor !== 'casa') delete respostas.equipamento;
      salvar();
      window.setTimeout(avancar, 160);
    });
    caixa.appendChild(b);
  }

  app.replaceChildren(frag);
  app.dataset.estado = 'quiz';
  garantirVisivel();
  focarTitulo();
  ev('routine_tool_step', { step_number: pos, step_name: etapa.nome });

  const pct = Math.round((pos / total) * 100);
  for (const m of [25, 50, 75]) {
    if (pct >= m && !marcos.has(m)) {
      marcos.add(m);
      ev('routine_tool_progress', { milestone: m });
    }
  }
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

function completo(r: Respostas): r is RotinaRespostas {
  return Boolean(r.objetivo && r.experiencia && r.dias && r.tempo && r.local && r.previsibilidade && r.dificuldade);
}

function concluir(): void {
  if (!completo(respostas)) {
    const ativas = etapasAtivas(respostas);
    const faltante = ativas.findIndex((e) => !(respostas as Record<string, unknown>)[e.chave]);
    etapaAtual = faltante >= 0 ? faltante : 0;
    render();
    return;
  }

  const res = rotinaTreinoEngine(respostas as RotinaRespostas);
  ev('routine_tool_complete');
  ev('routine_tool_result', res.analytics);
  renderResultado(res);
}

function renderResultado(r: ReturnType<typeof rotinaTreinoEngine>): void {
  const raiz = el('div', 'rt-resultado');
  raiz.setAttribute('role', 'region');
  raiz.setAttribute('aria-label', 'Sua rotina de treino');

  /* --- Cenário declarado: prova de que usamos as respostas --- */
  const cen = el('div', 'rt-cenario');
  cen.appendChild(el('p', 'rt-res-rotulo', 'Seu cenário'));
  const chips = el('ul', 'rt-chips');
  const rotulos = [
    r.analytics.days_per_week === 'varia' ? 'Semana variável' : `${r.analytics.days_per_week} dias/semana`,
    r.duracaoIdeal,
    r.analytics.training_location === 'academia' ? 'Academia' : null,
  ].filter(Boolean) as string[];
  for (const t of rotulos) chips.appendChild(el('li', undefined, t));
  cen.appendChild(chips);
  raiz.appendChild(cen);

  /* --- Estrutura sugerida --- */
  const cab = el('header', 'rt-res-cabecalho');
  cab.appendChild(el('p', 'rt-res-rotulo', 'Estrutura que mais combina com o seu cenário'));
  cab.appendChild(el('h2', 'rt-res-titulo', r.divisao.nome));
  if (r.modoSequencia) {
    cab.appendChild(el('span', 'rt-badge', 'Em sequência, sem dia fixo'));
  }
  raiz.appendChild(cab);

  /* --- Por quê --- */
  const porque = el('section', 'rt-bloco');
  porque.appendChild(el('h3', undefined, 'Por que essa estrutura'));
  for (const b of r.porque) porque.appendChild(el('p', undefined, b));
  raiz.appendChild(porque);

  /* --- Semana --- */
  const semana = el('section', 'rt-bloco');
  semana.appendChild(el('h3', undefined, r.modoSequencia ? 'Sua sequência de treinos' : 'Sua semana ideal'));
  if (r.modoSequencia) {
    const ol = el('ol', 'rt-sequencia');
    for (const d of r.semanaIdeal) {
      const li = el('li');
      li.appendChild(el('strong', undefined, d.sessao ?? ''));
      ol.appendChild(li);
    }
    semana.appendChild(ol);
    semana.appendChild(
      el('p', 'rt-nota', 'Terminou o último? Volta para o primeiro. A ordem importa mais do que o nome do dia.'),
    );
  } else {
    const tabela = el('table', 'rt-semana');
    const tbody = el('tbody');
    for (const d of r.semanaIdeal) {
      const tr = el('tr');
      const th = el('th', undefined, d.rotulo);
      th.scope = 'row';
      tr.appendChild(th);
      const td = el('td', d.sessao ? undefined : 'rt-descanso', d.sessao ?? 'Descanso ou atividade leve');
      tr.appendChild(td);
      tbody.appendChild(tr);
    }
    tabela.appendChild(tbody);
    semana.appendChild(tabela);
    semana.appendChild(
      el('p', 'rt-nota', 'Os dias são uma sugestão de espaçamento. Se a sua semana pedir outros dias, o que importa é manter o intervalo entre as sessões.'),
    );
  }
  raiz.appendChild(semana);

  /* --- Semana mínima viável: o bloco antiabandono --- */
  const minima = el('section', 'rt-bloco rt-minima');
  minima.appendChild(el('h3', undefined, 'Sua semana mínima viável'));
  const par = el('div', 'rt-par');
  const cIdeal = el('div', 'rt-par-item');
  cIdeal.appendChild(el('span', 'rt-par-num', String(r.sessoesIdeais)));
  cIdeal.appendChild(el('span', 'rt-par-rot', r.sessoesIdeais === 1 ? 'sessão na semana ideal' : 'sessões na semana ideal'));
  const cMin = el('div', 'rt-par-item rt-par-item--min');
  cMin.appendChild(el('span', 'rt-par-num', String(r.sessoesMinimas)));
  cMin.appendChild(el('span', 'rt-par-rot', r.sessoesMinimas === 1 ? 'sessão na semana mínima' : 'sessões na semana mínima'));
  par.append(cIdeal, cMin);
  minima.appendChild(par);
  minima.appendChild(el('p', undefined, r.minimaTexto));
  raiz.appendChild(minima);

  /* --- Plano B de duração --- */
  const planoB = el('section', 'rt-bloco');
  planoB.appendChild(el('h3', undefined, 'Quando o dia apertar'));
  const dur = el('ul', 'rt-duracoes');
  const dIdeal = el('li');
  dIdeal.appendChild(el('strong', undefined, r.duracaoIdeal));
  dIdeal.appendChild(el('span', undefined, ' — sessão completa'));
  const dCorrido = el('li');
  dCorrido.appendChild(el('strong', undefined, r.duracaoDiaCorrido));
  dCorrido.appendChild(el('span', undefined, ' — versão do dia corrido'));
  dur.append(dIdeal, dCorrido);
  planoB.appendChild(dur);
  planoB.appendChild(
    el('p', undefined, 'Em semana ruim, encurtar a sessão costuma ser melhor do que pular. Meia sessão mantém a rotina; sessão nenhuma quebra a sequência.'),
  );
  raiz.appendChild(planoB);

  /* --- Prioridades --- */
  const prio = el('section', 'rt-bloco');
  prio.appendChild(el('h3', undefined, 'Para a sua rotina, priorize'));
  const olP = el('ol', 'rt-prioridades');
  for (const p of r.prioridades) olP.appendChild(el('li', undefined, p));
  prio.appendChild(olP);
  raiz.appendChild(prio);

  /* --- Evitar --- */
  const evitar = el('section', 'rt-bloco rt-evitar');
  evitar.appendChild(el('h3', undefined, 'Para o seu cenário, evite'));
  const ulE = el('ul');
  for (const e of r.evitar) ulE.appendChild(el('li', undefined, e));
  evitar.appendChild(ulE);
  raiz.appendChild(evitar);

  /* --- Equipamento --- */
  if (r.observacaoEquipamento) {
    const eq = el('section', 'rt-bloco');
    eq.appendChild(el('h3', undefined, 'Sobre o seu equipamento'));
    eq.appendChild(el('p', undefined, r.observacaoEquipamento));
    raiz.appendChild(eq);
  }

  /* --- Alternativa: nunca fingir resposta única --- */
  if (r.alternativa) {
    const alt = el('section', 'rt-bloco rt-alternativa');
    alt.appendChild(el('h3', undefined, 'Outra estrutura que também poderia funcionar'));
    alt.appendChild(el('p', 'rt-alt-nome', r.alternativa.divisao.nome));
    alt.appendChild(el('p', undefined, `${r.alternativa.divisao.resumo} Vale considerar ${r.alternativa.quando}.`));
    raiz.appendChild(alt);
  }

  /* --- Próximo passo --- */
  const passo = el('section', 'rt-bloco');
  passo.appendChild(el('h3', undefined, 'Próximo passo'));
  passo.appendChild(el('p', undefined, r.proximoPasso));
  raiz.appendChild(passo);

  /* --- Montinho (só aqui, depois de todo o valor) --- */
  raiz.appendChild(blocoMontinho(r));

  /* --- Ferramentas irmãs e conteúdo --- */
  raiz.appendChild(blocoContinuar(r));

  raiz.appendChild(
    el(
      'p',
      'rt-aviso',
      'Esta ferramenta oferece orientação geral de organização de treino: ela sugere como distribuir a semana, não prescreve exercícios, séries ou cargas, e não substitui avaliação individual. Se você tem dor, lesão ou alguma condição de saúde, converse com um médico ou fisioterapeuta antes de começar.',
    ),
  );

  anexarContinuidade(raiz, 'rotina', {
    objetivo: r.analytics.goal,
    experiencia: r.analytics.experience,
    diasReais: r.divisao.sessoes.length,
    divisao: r.divisao.nome,
  });

  raiz.appendChild(rodape(r));

  app.replaceChildren(raiz);
  app.dataset.estado = 'resultado';
  garantirVisivel();
  focarTitulo();

  try {
    localStorage.setItem(
      CHAVE_ULTIMO,
      JSON.stringify({ data: new Date().toISOString().slice(0, 10), divisao: r.divisao.nome }),
    );
    sessionStorage.removeItem(CHAVE_SESSAO);
  } catch {
    /* sem persistência: recurso opcional */
  }
}

function blocoMontinho(r: ReturnType<typeof rotinaTreinoEngine>): HTMLElement {
  const box = el('section', 'rt-compat');
  box.appendChild(el('h3', undefined, 'Quer transformar essa estrutura em um treino individual?'));
  box.appendChild(el('p', undefined, r.montinho.motivo));
  if (r.montinho.ressalva) box.appendChild(el('p', 'rt-compat-ressalva', r.montinho.ressalva));

  const acoes = el('div', 'rt-acoes');
  const wpp = el('a', 'btn btn-primary');
  wpp.href = whatsappUrl(r.whatsapp);
  wpp.target = '_blank';
  wpp.rel = 'noopener';
  wpp.textContent = 'Conversar com o Montinho';
  wpp.addEventListener('click', () =>
    ev('routine_tool_whatsapp_click', {
      recommended_split: r.analytics.recommended_split,
      compatibility: r.montinho.nivel,
    }),
  );
  acoes.appendChild(wpp);
  acoes.appendChild(el('p', 'rt-acoes-nota', 'Abre o WhatsApp com as suas respostas já preenchidas. Você lê antes de enviar.'));
  box.appendChild(acoes);
  return box;
}

/**
 * Continuação da jornada. Uma ação principal por contexto (§115): a
 * ferramenta irmã mais útil para este resultado vem primeiro, o conteúdo
 * depois. Os parâmetros viajam por fragmento, nunca por querystring
 * indexável.
 */
function blocoContinuar(r: ReturnType<typeof rotinaTreinoEngine>): HTMLElement {
  const box = el('section', 'rt-continuar');
  box.appendChild(el('h3', undefined, 'Para continuar'));
  const ul = el('ul', 'rt-links');

  const link = (url: string, texto: string, evento: string) => {
    const li = el('li');
    const a = el('a', undefined, texto);
    a.href = url;
    a.addEventListener('click', () => ev(evento, { link_url: url }));
    li.appendChild(a);
    ul.appendChild(li);
  };

  // Ar livre + cidade conhecida → mapa fitness da cidade.
  if ((r.analytics.training_location === 'arLivre' || r.analytics.training_location === 'misturo') && respostas.cidadeSlug) {
    link(
      `/personal-trainer/${respostas.cidadeSlug}/#mapa-fitness`,
      `Ver onde treinar em ${respostas.cidadeNome}`,
      'routine_tool_map_click',
    );
  }

  // Sempre: descobrir o formato de acompanhamento, herdando o contexto.
  const ctx = new URLSearchParams();
  if (respostas.cidadeSlug) ctx.set('c', respostas.cidadeSlug);
  link(
    `/ferramentas/encontre-seu-personal-ideal/${ctx.toString() ? `#${ctx}` : ''}`,
    'Descobrir que tipo de acompanhamento combina com essa rotina',
    'routine_tool_personal_match_click',
  );

  // Preço, já com a frequência que a ferramenta acabou de definir.
  const freq = Math.min(5, Math.max(1, r.sessoesIdeais));
  link(
    `/ferramentas/calculadora-preco-personal/#f=${freq}${respostas.cidadeSlug ? `&c=${respostas.cidadeSlug}` : ''}`,
    `Ver quanto custaria acompanhamento ${freq}x por semana`,
    'routine_tool_price_click',
  );

  for (const c of r.conteudo) link(c.url, c.titulo, 'routine_tool_article_click');

  box.appendChild(ul);
  return box;
}

function rodape(r: ReturnType<typeof rotinaTreinoEngine>): HTMLElement {
  const rod = el('div', 'rt-rodape');

  const fb = el('div', 'rt-feedback');
  fb.appendChild(el('span', undefined, 'Essa estrutura fez sentido para a sua rotina?'));
  const responder = (v: 'sim' | 'nao') => {
    ev('routine_tool_feedback', { feedback: v, recommended_split: r.analytics.recommended_split });
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

  const compartilhar = el('button', 'rt-compartilhar', 'Compartilhar minha estrutura');
  compartilhar.type = 'button';
  compartilhar.addEventListener('click', () => {
    ev('routine_tool_share');
    if (navigator.share) {
      void navigator.share({ text: r.share }).catch(() => {});
    } else {
      void navigator.clipboard?.writeText(r.share).then(
        () => {
          compartilhar.textContent = 'Copiado ✓';
          window.setTimeout(() => (compartilhar.textContent = 'Compartilhar minha estrutura'), 2500);
        },
        () => {
          compartilhar.textContent = 'Não deu para copiar automaticamente';
        },
      );
    }
  });
  rod.appendChild(compartilhar);

  const refazer = el('button', 'rt-refazer', 'Refazer');
  refazer.type = 'button';
  refazer.addEventListener('click', () => {
    respostas = {};
    etapaAtual = 0;
    marcos.clear();
    try {
      sessionStorage.removeItem(CHAVE_SESSAO);
    } catch {
      /* sem persistência */
    }
    ev('routine_tool_restart');
    render();
  });
  rod.appendChild(refazer);

  return rod;
}

/* ------------------------------------------------------------------ *
 * Orquestração
 * ------------------------------------------------------------------ */

export function iniciarRotinaTreino(): void {
  const raiz = document.getElementById('rt-app');
  const molde = document.getElementById('rt-tpl');
  if (!raiz || !(molde instanceof HTMLTemplateElement)) return;
  app = raiz;
  tpl = molde;

  ev('routine_tool_view');

  // Contexto de cidade herdado de página local (#c=slug). Não muda a
  // estrutura de treino — cidade não altera divisão —, só alimenta os CTAs.
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
        /* sem nome da cidade: o link ainda funciona */
      }
    })();
  }

  restaurar();

  const iniciar = document.getElementById('rt-iniciar');
  if (!iniciar) return;

  const retomando = etapaAtual > 0 && Object.keys(respostas).length > 0;
  if (retomando) iniciar.textContent = 'Continuar de onde parei';
  iniciar.addEventListener('click', () => {
    ev('routine_tool_start', retomando ? { resumed: true } : undefined);
    render();
  });

  if (!retomando) {
    try {
      const bruto = localStorage.getItem(CHAVE_ULTIMO);
      if (bruto) {
        const u = JSON.parse(bruto) as { data?: string; divisao?: string };
        if (u?.data && u?.divisao) {
          const [a, mes, dia] = u.data.split('-');
          const nota = el('p', 'rt-microcopy rt-ultimo');
          nota.textContent = `Você montou uma rotina em ${dia}/${mes}/${a} (${u.divisao}). Sua disponibilidade mudou? Vale refazer.`;
          iniciar.insertAdjacentElement('afterend', nota);
        }
      }
    } catch {
      /* sem persistência: segue sem a nota */
    }
  }
}
