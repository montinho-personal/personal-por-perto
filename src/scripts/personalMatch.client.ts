/**
 * Camada de interface da ferramenta "Encontre seu Personal Ideal".
 *
 * Responsabilidade única: coletar respostas e renderizar o que o motor
 * devolve. Nenhuma regra de recomendação mora aqui — ela vive em
 * src/lib/personalMatch.ts, para que o algoritmo evolua sem tocar na UI.
 *
 * Sem framework e sem hidratação: DOM direto, uma pergunta por vez.
 * Nada é escrito na URL (nenhum resultado indexável); o contexto de cidade
 * vindo das páginas locais chega por fragmento (#c=slug), que o Google
 * não rastreia.
 */
import { personalMatchEngine, type Espera, type MatchRespostas } from '../lib/personalMatch';
import { whatsappUrl, montinhoUrl } from '../lib/links';

/* ------------------------------------------------------------------ *
 * Analytics — só dispara se o GA foi carregado (consentimento LGPD).
 * Nenhuma resposta pessoal identificável é enviada.
 * ------------------------------------------------------------------ */
type Gtag = (comando: string, evento: string, params?: Record<string, unknown>) => void;

function ev(nome: string, params?: Record<string, unknown>): void {
  const g = (window as unknown as { gtag?: Gtag }).gtag;
  if (typeof g === 'function') g('event', nome, params || {});
}

/* ------------------------------------------------------------------ *
 * Definição das etapas
 * ------------------------------------------------------------------ */

interface Opcao {
  valor: string;
  rotulo: string;
}

interface Etapa {
  chave: keyof MatchRespostas | 'cidade';
  nome: string; // usado no analytics (step_name)
  pergunta: string;
  ajuda?: string;
  opcoes?: Opcao[];
  /** Opções curtas ganham grade de 2+ colunas no desktop. */
  curtas?: boolean;
  multipla?: { max: number };
  tipo?: 'cidade';
  /** Reforço curto exibido abaixo da pergunta. */
  reforco?: string;
}

const ETAPAS: Etapa[] = [
  {
    chave: 'objetivo',
    nome: 'objetivo',
    pergunta: 'Qual é o seu principal objetivo agora?',
    ajuda: 'O que você mais quer resolver neste momento da vida — não daqui a cinco anos.',
    opcoes: [
      { valor: 'emagrecer', rotulo: 'Emagrecer' },
      { valor: 'massa', rotulo: 'Ganhar massa muscular' },
      { valor: 'definir', rotulo: 'Definir o corpo' },
      { valor: 'voltar', rotulo: 'Voltar a treinar' },
      { valor: 'condicionamento', rotulo: 'Melhorar o condicionamento' },
      { valor: 'longevidade', rotulo: 'Envelhecer com mais força e autonomia' },
      { valor: 'desempenho', rotulo: 'Melhorar meu desempenho' },
    ],
  },
  {
    chave: 'experiencia',
    nome: 'experiencia',
    pergunta: 'Como está o seu treino hoje?',
    opcoes: [
      { valor: 'nunca', rotulo: 'Nunca treinei de verdade' },
      { valor: 'comecando', rotulo: 'Estou começando agora' },
      { valor: 'voltando', rotulo: 'Voltei recentemente' },
      { valor: 'algumTempo', rotulo: 'Treino há algum tempo' },
      { valor: 'experiente', rotulo: 'Já tenho bastante experiência' },
      { valor: 'parado', rotulo: 'Estou parado' },
    ],
    reforco: 'Seu treino precisa caber na sua vida — e não o contrário.',
  },
  {
    chave: 'dias',
    nome: 'disponibilidade',
    pergunta: 'Quantos dias por semana você consegue realmente treinar?',
    ajuda: 'Pense na sua semana comum, não na semana ideal. É essa resposta que muda tudo.',
    curtas: true,
    opcoes: [
      { valor: '2', rotulo: '2 dias' },
      { valor: '3', rotulo: '3 dias' },
      { valor: '4', rotulo: '4 dias' },
      { valor: '5', rotulo: '5 dias' },
      { valor: '6+', rotulo: '6 ou mais' },
      { valor: 'naoSei', rotulo: 'Ainda não sei' },
    ],
  },
  {
    chave: 'tempo',
    nome: 'tempo',
    pergunta: 'Quanto tempo você costuma ter para cada treino?',
    curtas: true,
    opcoes: [
      { valor: 'ate30', rotulo: 'Até 30 minutos' },
      { valor: '30a45', rotulo: '30 a 45 minutos' },
      { valor: '45a60', rotulo: '45 a 60 minutos' },
      { valor: '60a90', rotulo: '60 a 90 minutos' },
      { valor: 'mais90', rotulo: 'Mais de 90 minutos' },
      { valor: 'varia', rotulo: 'Varia muito' },
    ],
    reforco: 'Não estamos procurando a rotina perfeita. Estamos procurando a rotina possível.',
  },
  {
    chave: 'local',
    nome: 'local',
    pergunta: 'Onde você pretende treinar?',
    opcoes: [
      { valor: 'academia', rotulo: 'Academia' },
      { valor: 'condominio', rotulo: 'Academia do condomínio' },
      { valor: 'casa', rotulo: 'Em casa' },
      { valor: 'arLivre', rotulo: 'Ao ar livre' },
      { valor: 'escolhendo', rotulo: 'Ainda estou escolhendo' },
      { valor: 'varia', rotulo: 'Varia' },
    ],
  },
  {
    chave: 'dificuldade',
    nome: 'dificuldade',
    pergunta: 'O que mais atrapalha os seus resultados hoje?',
    ajuda: 'Escolha o obstáculo principal — é o fator de maior peso no seu resultado.',
    opcoes: [
      { valor: 'constancia', rotulo: 'Falta de constância' },
      { valor: 'naoSeiFazer', rotulo: 'Não sei o que fazer no treino' },
      { valor: 'naoSeiSeCerto', rotulo: 'Não sei se estou fazendo certo' },
      { valor: 'tempo', rotulo: 'Falta de tempo' },
      { valor: 'semResultado', rotulo: 'Treino e não vejo resultado' },
      { valor: 'desanimo', rotulo: 'Desânimo' },
      { valor: 'rotinaMuda', rotulo: 'Minha rotina muda demais' },
      { valor: 'progressao', rotulo: 'Tenho dificuldade de progredir' },
      { valor: 'recomecando', rotulo: 'Estou recomeçando do zero' },
    ],
  },
  {
    chave: 'limitacao',
    nome: 'limitacao',
    pergunta: 'Existe alguma condição, dor ou limitação a considerar no seu treino?',
    ajuda: 'Não perguntamos qual — a resposta só ajusta a orientação. A ferramenta não é avaliação médica.',
    opcoes: [
      { valor: 'nao', rotulo: 'Não' },
      { valor: 'sim', rotulo: 'Sim' },
      { valor: 'profissional', rotulo: 'Prefiro tratar disso direto com um profissional' },
    ],
  },
  {
    chave: 'espera',
    nome: 'expectativa',
    pergunta: 'O que você mais espera de um personal?',
    ajuda: 'Escolha até 2 prioridades — as que realmente fariam diferença para você.',
    multipla: { max: 2 },
    opcoes: [
      { valor: 'presenca', rotulo: 'Que esteja comigo durante o treino' },
      { valor: 'montarTreino', rotulo: 'Que monte exatamente o que devo fazer' },
      { valor: 'evolucao', rotulo: 'Que acompanhe minha evolução' },
      { valor: 'execucao', rotulo: 'Que corrija minha execução' },
      { valor: 'cobranca', rotulo: 'Que cobre minha constância' },
      { valor: 'adaptacao', rotulo: 'Que adapte meu treino quando necessário' },
    ],
    reforco: 'Falta pouco. Estamos cruzando as suas respostas.',
  },
  {
    chave: 'cidade',
    nome: 'localizacao',
    pergunta: 'Onde você mora?',
    ajuda: 'Só cidade e estado — serve para saber se o presencial é viável no seu caso.',
    tipo: 'cidade',
  },
];

/* ------------------------------------------------------------------ *
 * Estado
 * ------------------------------------------------------------------ */

type Respostas = Partial<MatchRespostas>;

const CHAVE_SESSAO = 'ppp-personal-match';

interface CidadeItem {
  n: string;
  u: string;
  s: string;
  k: string;
}

let respostas: Respostas = {};
let etapaAtual = 0;
let cidades: CidadeItem[] | null = null;
let app: HTMLElement;
let tplQuiz: HTMLTemplateElement;

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
    const dados = JSON.parse(bruto) as { respostas: Respostas; etapaAtual: number };
    if (dados && typeof dados === 'object' && dados.respostas) {
      respostas = dados.respostas;
      etapaAtual = typeof dados.etapaAtual === 'number' ? dados.etapaAtual : 0;
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

function semAcento(s: string): string {
  return s.normalize('NFD').replace(/[\u0300-\u036f]/g, '').toLowerCase();
}

/** Move o foco para o título da etapa, sem rolar a página bruscamente. */
function focarTitulo(): void {
  const h = app.querySelector<HTMLElement>('.pm-pergunta, .pm-res-nome');
  if (!h) return;
  h.setAttribute('tabindex', '-1');
  h.focus({ preventScroll: true });
}

/**
 * Garante que o cartão do quiz esteja visível depois de cada troca de tela.
 * No celular, a pergunta nasce abaixo da dobra do hero: sem isto a pessoa
 * clica em "Descobrir meu perfil" e tem a impressão de que nada aconteceu.
 * A suavidade da rolagem vem do CSS global, que já respeita
 * `prefers-reduced-motion`; o deslocamento do cabeçalho vem do
 * `scroll-padding-top` do html.
 */
function garantirVisivel(): void {
  const caixa = app.getBoundingClientRect();
  const alturaCabecalho = 80;
  const foraDeVista = caixa.top < alturaCabecalho || caixa.top > window.innerHeight * 0.5;
  if (foraDeVista) app.scrollIntoView({ block: 'start' });
}

/* ------------------------------------------------------------------ *
 * Renderização das etapas
 * ------------------------------------------------------------------ */

function renderEtapa(): void {
  const etapa = ETAPAS[etapaAtual];
  const frag = tplQuiz.content.cloneNode(true) as DocumentFragment;
  const raiz = frag.querySelector<HTMLElement>('.pm-quiz')!;

  // Progresso
  const total = ETAPAS.length;
  const pos = etapaAtual + 1;
  raiz.querySelector<HTMLElement>('.pm-progresso-preenchido')!.style.width =
    `${Math.round((pos / total) * 100)}%`;
  raiz.querySelector<HTMLElement>('.pm-progresso-txt')!.textContent = `Pergunta ${pos} de ${total}`;

  raiz.querySelector<HTMLElement>('.pm-pergunta')!.textContent = etapa.pergunta;
  raiz.querySelector<HTMLElement>('.pm-ajuda')!.textContent = etapa.ajuda || '';
  raiz.querySelector<HTMLElement>('.pm-reforco')!.textContent = etapa.reforco || '';

  const caixa = raiz.querySelector<HTMLElement>('.pm-opcoes')!;
  const avancar = raiz.querySelector<HTMLButtonElement>('.pm-avancar')!;
  const voltar = raiz.querySelector<HTMLButtonElement>('.pm-voltar')!;

  if (etapaAtual === 0) voltar.hidden = true;
  voltar.addEventListener('click', () => {
    if (etapaAtual > 0) {
      etapaAtual -= 1;
      salvar();
      render();
    }
  });

  if (etapa.tipo === 'cidade') {
    montarCampoCidade(caixa, avancar);
  } else if (etapa.multipla) {
    montarMultipla(etapa, caixa, avancar);
  } else {
    montarSimples(etapa, caixa);
  }

  app.replaceChildren(frag);
  app.dataset.estado = 'quiz';
  garantirVisivel();
  focarTitulo();
  ev('personal_match_step', { step_number: pos, step_name: etapa.nome });

  // Marcos de funil (25/50/75) — um disparo por sessão, por marco.
  const pct = Math.round((pos / total) * 100);
  for (const marco of [25, 50, 75]) {
    if (pct >= marco && !marcosDisparados.has(marco)) {
      marcosDisparados.add(marco);
      ev('personal_match_progress', { milestone: marco });
    }
  }
}

const marcosDisparados = new Set<number>();

/** Pergunta de escolha única: clicar responde e avança. */
function montarSimples(etapa: Etapa, caixa: HTMLElement): void {
  if (etapa.curtas) caixa.classList.add('pm-opcoes--curtas');
  const atual = respostas[etapa.chave as keyof Respostas] as string | undefined;

  for (const op of etapa.opcoes!) {
    const b = el('button', 'pm-opcao');
    b.type = 'button';
    b.appendChild(el('span', 'pm-opcao-marca'));
    b.appendChild(el('span', undefined, op.rotulo));
    if (atual === op.valor) b.classList.add('pm-sel');
    b.addEventListener('click', () => {
      caixa.querySelectorAll('.pm-opcao').forEach((o) => o.classList.remove('pm-sel'));
      b.classList.add('pm-sel');
      registrar(etapa.chave as keyof MatchRespostas, op.valor);
      // Pequena pausa só para a seleção ser percebida antes da troca de tela.
      window.setTimeout(avancarEtapa, 160);
    });
    caixa.appendChild(b);
  }
}

/** Pergunta de múltipla escolha com limite. */
function montarMultipla(etapa: Etapa, caixa: HTMLElement, avancar: HTMLButtonElement): void {
  const max = etapa.multipla!.max;
  let sel: string[] = Array.isArray(respostas.espera) ? [...respostas.espera] : [];

  const sincronizar = () => {
    caixa.querySelectorAll<HTMLButtonElement>('.pm-opcao').forEach((b) => {
      b.setAttribute('aria-pressed', sel.includes(b.dataset.valor!) ? 'true' : 'false');
    });
    avancar.hidden = sel.length === 0;
  };

  for (const op of etapa.opcoes!) {
    const b = el('button', 'pm-opcao');
    b.type = 'button';
    b.dataset.valor = op.valor;
    b.setAttribute('aria-pressed', 'false');
    b.appendChild(el('span', 'pm-opcao-marca'));
    b.appendChild(el('span', undefined, op.rotulo));
    b.addEventListener('click', () => {
      if (sel.includes(op.valor)) sel = sel.filter((v) => v !== op.valor);
      else if (sel.length < max) sel.push(op.valor);
      else sel = [sel[sel.length - 1], op.valor]; // troca a mais antiga
      respostas.espera = sel as Espera[];
      salvar();
      sincronizar();
    });
    caixa.appendChild(b);
  }

  sincronizar();
  avancar.addEventListener('click', avancarEtapa);
}

/** Etapa de localização: autocomplete carregado sob demanda + opção de pular. */
function montarCampoCidade(caixa: HTMLElement, avancar: HTMLButtonElement): void {
  const campo = el('div', 'pm-cidade-campo');
  const input = el('input');
  input.type = 'text';
  input.autocomplete = 'off';
  input.placeholder = 'Digite sua cidade (ex.: Campinas)';
  input.setAttribute('aria-label', 'Sua cidade');
  input.setAttribute('role', 'combobox');
  input.setAttribute('aria-expanded', 'false');
  input.setAttribute('aria-autocomplete', 'list');
  if (respostas.cidadeNome) input.value = `${respostas.cidadeNome} — ${respostas.uf}`;

  const lista = el('ul', 'pm-sugestoes');
  lista.id = 'pm-sugestoes';
  lista.setAttribute('role', 'listbox');
  input.setAttribute('aria-controls', lista.id);

  campo.append(input, lista);
  caixa.appendChild(campo);

  const pular = el('button', 'pm-voltar pm-pular', 'Prefiro não informar — ver meu resultado');
  pular.type = 'button';
  pular.addEventListener('click', () => {
    delete respostas.cidadeSlug;
    delete respostas.cidadeNome;
    delete respostas.uf;
    salvar();
    concluir();
  });
  caixa.appendChild(pular);

  avancar.hidden = !respostas.cidadeSlug;
  avancar.textContent = 'Ver meu resultado';
  avancar.addEventListener('click', concluir);

  const buscar = async (termo: string) => {
    if (!cidades) {
      try {
        const r = await fetch('/dados/cidades-match.json');
        cidades = (await r.json()) as CidadeItem[];
      } catch {
        cidades = [];
      }
    }
    const t = semAcento(termo.trim());
    lista.replaceChildren();
    if (t.length < 2) {
      input.setAttribute('aria-expanded', 'false');
      return;
    }
    const achados = cidades.filter((c) => c.k.includes(t)).slice(0, 8);
    if (!achados.length) {
      const li = el('li');
      li.setAttribute('role', 'presentation');
      const aviso = el('button', undefined, 'Não encontrei essa cidade — seguir sem informar');
      aviso.type = 'button';
      aviso.addEventListener('click', () => {
        delete respostas.cidadeSlug;
        delete respostas.cidadeNome;
        delete respostas.uf;
        salvar();
        concluir();
      });
      li.appendChild(aviso);
      lista.appendChild(li);
      input.setAttribute('aria-expanded', 'true');
      return;
    }
    for (const c of achados) {
      const li = el('li');
      li.setAttribute('role', 'presentation');
      const b = el('button');
      b.type = 'button';
      b.setAttribute('role', 'option');
      b.appendChild(el('span', undefined, c.n));
      b.appendChild(el('span', 'pm-sug-uf', ` — ${c.u}`));
      b.addEventListener('click', () => {
        respostas.cidadeSlug = c.s;
        respostas.cidadeNome = c.n;
        respostas.uf = c.u;
        input.value = `${c.n} — ${c.u}`;
        lista.replaceChildren();
        input.setAttribute('aria-expanded', 'false');
        avancar.hidden = false;
        salvar();
        avancar.focus();
      });
      li.appendChild(b);
      lista.appendChild(li);
    }
    input.setAttribute('aria-expanded', 'true');
  };

  let debounce = 0;
  input.addEventListener('input', () => {
    window.clearTimeout(debounce);
    const v = input.value;
    debounce = window.setTimeout(() => void buscar(v), 120);
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
}

function registrar(chave: keyof MatchRespostas, valor: string): void {
  (respostas as Record<string, unknown>)[chave] = valor;
  salvar();
}

function avancarEtapa(): void {
  if (etapaAtual < ETAPAS.length - 1) {
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

function completo(r: Respostas): r is MatchRespostas {
  return Boolean(r.objetivo && r.experiencia && r.dias && r.tempo && r.local && r.dificuldade);
}

function concluir(): void {
  if (!completo(respostas)) {
    // Volta para a primeira etapa não respondida em vez de quebrar.
    const faltante = ETAPAS.findIndex(
      (e) => e.chave !== 'cidade' && e.chave !== 'espera' && !(respostas as Record<string, unknown>)[e.chave],
    );
    etapaAtual = faltante >= 0 ? faltante : 0;
    render();
    return;
  }
  if (!Array.isArray(respostas.espera)) respostas.espera = [];

  const r = personalMatchEngine(respostas as MatchRespostas);

  ev('personal_match_complete');
  ev('personal_match_result', {
    recommendation_type: r.analytics.recommendation_type,
    profile: r.analytics.profile,
    goal: r.analytics.goal,
    frequency: respostas.dias,
    training_location: respostas.local,
    state: respostas.uf || '',
  });

  renderResultado(r);
}

function renderResultado(r: ReturnType<typeof personalMatchEngine>): void {
  const raiz = el('div', 'pm-resultado');
  raiz.setAttribute('role', 'region');
  raiz.setAttribute('aria-label', 'Seu resultado');

  // --- Perfil ---
  const cab = el('header', 'pm-res-perfil');
  cab.appendChild(el('p', 'pm-res-rotulo', 'Seu perfil de acompanhamento'));
  cab.appendChild(el('h2', 'pm-res-nome', r.perfil));
  cab.appendChild(el('p', 'pm-res-resumo', r.perfilResumo));

  const modelo = el('div', 'pm-res-modelo');
  modelo.appendChild(el('span', undefined, 'Formato recomendado para você'));
  modelo.appendChild(el('strong', undefined, r.modeloRotulo));
  cab.appendChild(modelo);
  raiz.appendChild(cab);

  // --- Painel visual de dimensões ---
  const painel = el('section', 'pm-bloco pm-painel');
  painel.appendChild(el('h3', undefined, 'Seu cenário atual'));
  const dims: { rotulo: string; valor: number }[] = [
    { rotulo: 'Autonomia hoje', valor: r.dimensoes.autonomia },
    { rotulo: 'Supervisão recomendada', valor: r.dimensoes.supervisao },
    { rotulo: 'Flexibilidade necessária', valor: r.dimensoes.flexibilidade },
    { rotulo: 'Base de constância', valor: r.dimensoes.constancia },
  ];
  for (const d of dims) {
    const linha = el('div', 'pm-dim');
    const topo = el('div', 'pm-dim-topo');
    topo.appendChild(el('span', undefined, d.rotulo));
    topo.appendChild(el('span', 'pm-dim-num', `${d.valor}`));
    linha.appendChild(topo);
    const barra = el('div', 'pm-dim-barra');
    barra.setAttribute('role', 'img');
    barra.setAttribute('aria-label', `${d.rotulo}: ${d.valor} de 100`);
    const cheio = el('span', 'pm-dim-cheio');
    cheio.style.width = `${d.valor}%`;
    barra.appendChild(cheio);
    linha.appendChild(barra);
    painel.appendChild(linha);
  }
  painel.appendChild(
    el('p', 'pm-dim-nota', 'Escala orientativa de 0 a 100, calculada só das suas respostas — descreve o cenário, não a pessoa.'),
  );
  raiz.appendChild(painel);

  // --- Por que chegamos nisso ---
  const porque = el('section', 'pm-bloco');
  porque.appendChild(el('h3', undefined, 'Por que chegamos nisso'));
  for (const p of r.porque) porque.appendChild(el('p', undefined, p));

  // Transparência do cálculo: as 3 respostas que mais pesaram.
  const det = el('details', 'pm-detalhes');
  det.appendChild(el('summary', undefined, 'Entenda minha recomendação'));
  const detCorpo = el('div');
  detCorpo.appendChild(el('p', undefined, 'As três respostas que mais influenciaram o resultado:'));
  const olInf = el('ol');
  for (const inf of r.influencias) olInf.appendChild(el('li', undefined, inf));
  detCorpo.appendChild(olInf);
  det.appendChild(detCorpo);
  det.addEventListener('toggle', () => {
    if (det.open) ev('personal_match_explain_open');
  });
  porque.appendChild(det);
  raiz.appendChild(porque);

  // --- Comparador de formatos ---
  const comp = el('section', 'pm-bloco');
  comp.appendChild(el('h3', undefined, 'Como as opções se comparam para você'));
  const rolagem = el('div', 'pm-tabela-rolagem');
  const tabela = el('table', 'pm-comparador');
  const thead = el('thead');
  const trCab = el('tr');
  for (const c of ['', 'Presencial', 'Online', 'Híbrido']) {
    const th = el('th', undefined, c);
    th.scope = 'col';
    trCab.appendChild(th);
  }
  thead.appendChild(trCab);
  tabela.appendChild(thead);
  const tbody = el('tbody');
  for (const linha of r.comparador) {
    const tr = el('tr');
    const th = el('th', undefined, linha.criterio);
    th.scope = 'row';
    tr.appendChild(th);
    tr.appendChild(el('td', undefined, linha.presencial));
    tr.appendChild(el('td', undefined, linha.online));
    tr.appendChild(el('td', undefined, linha.hibrido));
    if (linha.criterio === 'Para o seu cenário') tr.classList.add('pm-comparador-destaque');
    tbody.appendChild(tr);
  }
  tabela.appendChild(tbody);
  rolagem.appendChild(tabela);
  comp.appendChild(rolagem);
  raiz.appendChild(comp);

  // --- Características ---
  const carac = el('section', 'pm-bloco');
  carac.appendChild(el('h3', undefined, 'O seu personal deveria ser capaz de'));
  const ulC = el('ul');
  for (const c of r.caracteristicas) ulC.appendChild(el('li', undefined, c));
  carac.appendChild(ulC);
  raiz.appendChild(carac);

  // --- Estrutura provável ---
  const estr = el('section', 'pm-bloco');
  estr.appendChild(el('h3', undefined, 'Estrutura de treino provável'));
  estr.appendChild(el('p', undefined, r.estrutura));
  raiz.appendChild(estr);

  // --- O que você não precisa ---
  const nao = el('section', 'pm-bloco pm-nao');
  nao.appendChild(el('h3', undefined, 'O que você provavelmente não precisa'));
  const ulN = el('ul');
  for (const n of r.naoPrecisa) ulN.appendChild(el('li', undefined, n));
  nao.appendChild(ulN);
  raiz.appendChild(nao);

  // --- Plano de ação: próximos 3 passos ---
  const plano = el('section', 'pm-bloco');
  plano.appendChild(el('h3', undefined, 'Seus próximos 3 passos'));
  const olPlano = el('ol', 'pm-passos');
  for (const p of r.plano) {
    const li = el('li');
    li.appendChild(el('strong', undefined, p.titulo));
    li.appendChild(el('p', undefined, p.texto));
    olPlano.appendChild(li);
  }
  plano.appendChild(olPlano);
  raiz.appendChild(plano);

  // --- Checklist para a conversa ---
  const chk = el('section', 'pm-bloco pm-checklist');
  chk.appendChild(el('h3', undefined, 'Leve estas perguntas para a conversa com qualquer personal'));
  const ulChk = el('ul');
  for (const item of r.checklist) ulChk.appendChild(el('li', undefined, item));
  chk.appendChild(ulChk);
  const copiar = el('button', 'pm-copiar', 'Copiar checklist');
  copiar.type = 'button';
  copiar.addEventListener('click', () => {
    const texto = 'Perguntas para o personal (Personal por Perto):\n' + r.checklist.map((i) => `- ${i}`).join('\n');
    void navigator.clipboard?.writeText(texto).then(
      () => {
        copiar.textContent = 'Copiado ✓';
        ev('personal_match_checklist_copy');
        window.setTimeout(() => (copiar.textContent = 'Copiar checklist'), 2500);
      },
      () => {
        copiar.textContent = 'Não deu para copiar automaticamente';
      },
    );
  });
  chk.appendChild(copiar);
  raiz.appendChild(chk);

  // --- Sinais de atenção ---
  const flags = el('section', 'pm-bloco pm-flags');
  flags.appendChild(el('h3', undefined, 'Sinais de atenção ao escolher um profissional'));
  const ulF = el('ul');
  for (const f of r.redFlags) ulF.appendChild(el('li', undefined, f));
  flags.appendChild(ulF);
  raiz.appendChild(flags);

  // --- Compatibilidade com o Montinho ---
  raiz.appendChild(blocoMontinho(r));

  // --- Conteúdo contextual ---
  const sug = el('section', 'pm-conteudo-sug');
  sug.appendChild(el('h3', undefined, 'Para continuar entendendo o seu caso'));
  const ulS = el('ul');
  const links = [...r.conteudo];
  if (respostas.cidadeSlug && respostas.cidadeNome) {
    links.push({
      url: `/personal-trainer/${respostas.cidadeSlug}/`,
      titulo: `Guia de personal trainer em ${respostas.cidadeNome}`,
    });
  }
  for (const c of links) {
    const li = el('li');
    const a = el('a', undefined, c.titulo);
    a.href = c.url;
    a.addEventListener('click', () => ev('personal_match_content_click', { link_url: c.url }));
    li.appendChild(a);
    ulS.appendChild(li);
  }
  sug.appendChild(ulS);
  raiz.appendChild(sug);

  // --- Avisos de limites ---
  if (r.avisoLimitacao) {
    const avisoLim = el('p', 'pm-aviso pm-aviso-limitacao', r.avisoLimitacao);
    raiz.appendChild(avisoLim);
  }
  raiz.appendChild(
    el(
      'p',
      'pm-aviso',
      'Este resultado é orientativo: ele ajuda a escolher o formato de acompanhamento, não substitui uma avaliação individual nem prescreve treino. Se você tem dor, lesão ou alguma condição de saúde, converse antes com um médico ou fisioterapeuta.',
    ),
  );

  // --- Feedback + refazer ---
  raiz.appendChild(rodapeResultado(r));

  app.replaceChildren(raiz);
  app.dataset.estado = 'resultado';
  garantirVisivel();
  focarTitulo();

  // Salva um resumo NÃO sensível do resultado (sem limitação, sem cidade)
  // para a página oferecer "sua rotina mudou? refaça" numa visita futura —
  // e encerra o progresso da sessão: quem concluiu não está "no meio do
  // quiz", então a revisita deve oferecer refazer, não continuar.
  try {
    localStorage.setItem(
      CHAVE_ULTIMO,
      JSON.stringify({ data: new Date().toISOString().slice(0, 10), modelo: r.modeloRotulo, perfil: r.perfil }),
    );
    sessionStorage.removeItem(CHAVE_SESSAO);
  } catch {
    /* sem persistência: recurso opcional */
  }
}

const CHAVE_ULTIMO = 'ppp-pm-ultimo';

function blocoMontinho(r: ReturnType<typeof personalMatchEngine>): HTMLElement {
  const box = el('section', 'pm-compat');
  const nivel = el('span', 'pm-compat-nivel', r.montinho.rotulo);
  nivel.dataset.nivel = r.montinho.nivel;
  box.appendChild(nivel);

  box.appendChild(el('h3', undefined, 'O Montinho combina com o seu perfil?'));
  box.appendChild(el('p', undefined, r.montinho.motivo));
  if (r.montinho.ressalva) {
    box.appendChild(el('p', 'pm-compat-ressalva', r.montinho.ressalva));
  }

  const acoes = el('div', 'pm-acoes');

  // CTA principal: WhatsApp com o resultado já escrito.
  const wpp = el('a', 'btn btn-primary');
  wpp.href = whatsappUrl(r.whatsapp);
  wpp.target = '_blank';
  wpp.rel = 'noopener';
  wpp.textContent = 'Enviar meu resultado para o Montinho';
  wpp.addEventListener('click', () => {
    ev('personal_match_whatsapp_click', {
      recommendation_type: r.analytics.recommendation_type,
      compatibility: r.montinho.nivel,
    });
    ev(r.montinho.presencial ? 'personal_match_presential_click' : 'personal_match_online_click', {
      recommendation_type: r.analytics.recommendation_type,
    });
  });
  acoes.appendChild(wpp);
  acoes.appendChild(
    el('p', 'pm-acoes-nota', 'Abre o WhatsApp com as suas respostas já preenchidas. Você lê antes de enviar.'),
  );

  // CTA secundário: para quem ainda não quer conversar.
  const secundario = el('a', 'pm-secundario', 'Prefere entender primeiro? Veja como funciona o acompanhamento');
  secundario.href = montinhoUrl('ferramenta-personal-ideal');
  secundario.target = '_blank';
  secundario.rel = 'noopener nofollow';
  acoes.appendChild(secundario);

  box.appendChild(acoes);
  return box;
}

function rodapeResultado(r: ReturnType<typeof personalMatchEngine>): HTMLElement {
  const rodape = el('div', 'pm-rodape-res');

  const fb = el('div', 'pm-feedback');
  fb.appendChild(el('span', undefined, 'Esse resultado fez sentido para você?'));
  const responder = (valor: 'sim' | 'nao') => {
    ev('personal_match_feedback', { feedback: valor, profile: r.analytics.profile });
    fb.replaceChildren(el('span', undefined, 'Obrigado! Isso ajuda a melhorar a ferramenta.'));
  };
  const sim = el('button', undefined, '👍 Sim');
  sim.type = 'button';
  sim.addEventListener('click', () => responder('sim'));
  const nao = el('button', undefined, '👎 Não muito');
  nao.type = 'button';
  nao.addEventListener('click', () => responder('nao'));
  fb.append(sim, nao);
  rodape.appendChild(fb);

  // Compartilhar: share nativo no celular, clipboard no desktop.
  // O texto vem do motor e nunca inclui limitação ou cidade.
  const compartilhar = el('button', 'pm-compartilhar', 'Compartilhar meu diagnóstico');
  compartilhar.type = 'button';
  compartilhar.addEventListener('click', () => {
    ev('personal_match_share');
    if (navigator.share) {
      void navigator.share({ text: r.share }).catch(() => {
        /* cancelado pela pessoa: nada a fazer */
      });
    } else {
      void navigator.clipboard?.writeText(r.share).then(
        () => {
          compartilhar.textContent = 'Copiado para colar onde quiser ✓';
          window.setTimeout(() => (compartilhar.textContent = 'Compartilhar meu diagnóstico'), 2500);
        },
        () => {
          compartilhar.textContent = 'Não deu para copiar automaticamente';
        },
      );
    }
  });
  rodape.appendChild(compartilhar);

  const refazer = el('button', 'pm-refazer', 'Refazer o teste');
  refazer.type = 'button';
  refazer.addEventListener('click', () => {
    respostas = {};
    etapaAtual = 0;
    try {
      sessionStorage.removeItem(CHAVE_SESSAO);
    } catch {
      /* sem persistência */
    }
    render();
  });
  rodape.appendChild(refazer);

  return rodape;
}

/* ------------------------------------------------------------------ *
 * Orquestração
 * ------------------------------------------------------------------ */

function render(): void {
  renderEtapa();
}

export function iniciarPersonalMatch(): void {
  const raiz = document.getElementById('pm-app');
  const tpl = document.getElementById('pm-tpl-quiz');
  if (!raiz || !(tpl instanceof HTMLTemplateElement)) return;
  app = raiz;
  tplQuiz = tpl;

  ev('personal_match_view');

  // Contexto de cidade vindo das páginas locais (#c=slug): nunca vira URL
  // indexável e não altera o histórico.
  const frag = window.location.hash;
  const m = frag.match(/[#&]c=([a-z0-9-]+)/i);
  if (m) {
    void (async () => {
      try {
        const resp = await fetch('/dados/cidades-match.json');
        cidades = (await resp.json()) as CidadeItem[];
        const achada = cidades.find((c) => c.s === m[1]);
        if (achada) {
          respostas.cidadeSlug = achada.s;
          respostas.cidadeNome = achada.n;
          respostas.uf = achada.u;
          salvar();
        }
      } catch {
        /* sem contexto de cidade: a etapa de localização pergunta normalmente */
      }
    })();
  }

  restaurar();

  const iniciar = document.getElementById('pm-iniciar');
  if (iniciar) {
    // Quem já respondeu algo nesta sessão retoma de onde parou.
    const retomando = etapaAtual > 0 && Object.keys(respostas).length > 0;
    if (retomando) iniciar.textContent = 'Continuar de onde parei';
    iniciar.addEventListener('click', () => {
      ev('personal_match_start', retomando ? { resumed: true } : undefined);
      render();
    });

    // Quem já concluiu numa visita anterior vê o convite honesto de refazer:
    // o cenário muda quando a rotina muda — motivo legítimo de retorno.
    if (!retomando) {
      try {
        const bruto = localStorage.getItem(CHAVE_ULTIMO);
        if (bruto) {
          const ultimo = JSON.parse(bruto) as { data?: string; modelo?: string };
          if (ultimo?.data && ultimo?.modelo) {
            const [ano, mes, dia] = ultimo.data.split('-');
            const nota = el('p', 'pm-microcopy pm-ultimo');
            nota.textContent = `Você fez este diagnóstico em ${dia}/${mes}/${ano} (resultado: ${ultimo.modelo.toLowerCase()}). Sua rotina mudou? Vale refazer.`;
            iniciar.insertAdjacentElement('afterend', nota);
          }
        }
      } catch {
        /* sem persistência: segue sem a nota */
      }
    }
  }
}
