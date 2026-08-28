/**
 * Camada de interface da ferramenta "Meu treino faz sentido?".
 *
 * A etapa crítica aqui é o construtor da semana: é onde a pessoa mais
 * pode desistir. Por isso ele oferece divisões prontas que preenchem tudo
 * de uma vez, e a montagem manual é a alternativa, não a porta de entrada.
 *
 * Nenhuma regra de análise mora aqui — ela vive em
 * src/lib/auditoriaTreino.ts. Sem framework, sem hidratação.
 */
import {
  analisarTreino,
  GRUPO_TXT,
  type AuditoriaRespostas,
  type Grupo,
  type Prioridade,
  type Semana,
} from '../lib/auditoriaTreino';
import { whatsappUrl } from '../lib/links';

type Gtag = (c: string, e: string, p?: Record<string, unknown>) => void;
function ev(nome: string, params?: Record<string, unknown>): void {
  const g = (window as unknown as { gtag?: Gtag }).gtag;
  if (typeof g === 'function') g('event', nome, params || {});
}

/* ------------------------------------------------------------------ *
 * Configuração das etapas
 * ------------------------------------------------------------------ */

interface Opcao {
  valor: string;
  rotulo: string;
}

interface Etapa {
  chave: keyof AuditoriaRespostas;
  nome: string;
  pergunta: string;
  ajuda?: string;
  opcoes?: Opcao[];
  curtas?: boolean;
  /** Etapa especial: o construtor de semana. */
  tipo?: 'semana';
  /** Múltipla escolha com limite (prioridades). */
  multipla?: { max: number };
  reforco?: string;
}

const DIAS_NOME = ['Segunda', 'Terça', 'Quarta', 'Quinta', 'Sexta', 'Sábado', 'Domingo'];

/** Grupos oferecidos no construtor, na ordem em que aparecem. */
const GRUPOS_CHIP: Grupo[] = [
  'peito',
  'costas',
  'ombros',
  'biceps',
  'triceps',
  'quadriceps',
  'posterior',
  'gluteos',
  'panturrilhas',
  'core',
  'corpoTodo',
  'cardio',
];

/** Divisões prontas — reduzem drasticamente o atrito da etapa mais pesada. */
const MODELOS: { id: string; nome: string; descricao: string; semana: Semana }[] = [
  {
    id: 'fullbody3',
    nome: 'Full Body 3x',
    descricao: 'Corpo inteiro, três dias',
    semana: [['corpoTodo'], [], ['corpoTodo'], [], ['corpoTodo'], [], []],
  },
  {
    id: 'upperlower',
    nome: 'Upper / Lower',
    descricao: 'Superior e inferior, quatro dias',
    semana: [
      ['peito', 'costas', 'ombros', 'biceps', 'triceps'],
      ['quadriceps', 'posterior', 'gluteos', 'panturrilhas'],
      [],
      ['peito', 'costas', 'ombros', 'biceps', 'triceps'],
      ['quadriceps', 'posterior', 'gluteos', 'panturrilhas'],
      [],
      [],
    ],
  },
  {
    id: 'ppl',
    nome: 'Push / Pull / Legs',
    descricao: 'Empurrar, puxar e pernas',
    semana: [
      ['peito', 'ombros', 'triceps'],
      ['costas', 'biceps'],
      ['quadriceps', 'posterior', 'gluteos', 'panturrilhas'],
      ['peito', 'ombros', 'triceps'],
      ['costas', 'biceps'],
      ['quadriceps', 'posterior', 'gluteos', 'panturrilhas'],
      [],
    ],
  },
  {
    id: 'abc',
    nome: 'ABC',
    descricao: 'Peito/tríceps, costas/bíceps, pernas',
    semana: [
      ['peito', 'triceps'],
      ['costas', 'biceps'],
      ['quadriceps', 'posterior', 'gluteos'],
      [],
      ['peito', 'triceps'],
      [],
      [],
    ],
  },
  {
    id: 'abcde',
    nome: 'ABCDE',
    descricao: 'Um grupo principal por dia',
    semana: [['peito'], ['costas'], ['ombros'], ['biceps', 'triceps'], ['quadriceps', 'posterior', 'gluteos'], [], []],
  },
];

const ETAPAS: Etapa[] = [
  {
    chave: 'objetivo',
    nome: 'objetivo',
    pergunta: 'Qual é o seu principal objetivo hoje?',
    opcoes: [
      { valor: 'hipertrofia', rotulo: 'Hipertrofia' },
      { valor: 'emagrecimento', rotulo: 'Emagrecimento' },
      { valor: 'forca', rotulo: 'Ganhar força' },
      { valor: 'condicionamento', rotulo: 'Condicionamento' },
      { valor: 'manutencao', rotulo: 'Manutenção' },
      { valor: 'retorno', rotulo: 'Retorno aos treinos' },
    ],
  },
  {
    chave: 'experiencia',
    nome: 'experiencia',
    pergunta: 'Há quanto tempo você treina com regularidade?',
    ajuda: 'Serve como contexto — tempo de treino não define sozinho o seu nível.',
    opcoes: [
      { valor: 'comecando', rotulo: 'Estou começando' },
      { valor: 'menos6m', rotulo: 'Menos de 6 meses' },
      { valor: '6a12m', rotulo: 'De 6 a 12 meses' },
      { valor: '1a3anos', rotulo: 'De 1 a 3 anos' },
      { valor: 'mais3anos', rotulo: 'Mais de 3 anos' },
      { valor: 'irregular', rotulo: 'Treino há anos, mas de forma irregular' },
    ],
  },
  {
    chave: 'semana',
    nome: 'semana',
    tipo: 'semana',
    pergunta: 'Como está a sua semana de treino?',
    ajuda: 'Comece por uma divisão pronta e ajuste, ou monte dia a dia. Deixe em branco os dias em que você não treina.',
  },
  {
    chave: 'duracao',
    nome: 'duracao',
    pergunta: 'Quanto tempo dura cada sessão, em média?',
    curtas: true,
    opcoes: [
      { valor: 'ate30', rotulo: 'Até 30 min' },
      { valor: '30a45', rotulo: '30 a 45 min' },
      { valor: '45a60', rotulo: '45 a 60 min' },
      { valor: '60a90', rotulo: '60 a 90 min' },
      { valor: 'mais90', rotulo: 'Mais de 90 min' },
      { valor: 'varia', rotulo: 'Varia muito' },
    ],
  },
  {
    chave: 'exercicios',
    nome: 'exercicios',
    pergunta: 'Quantos exercícios você costuma fazer por sessão?',
    ajuda: 'Não existe número certo — a quantidade só é analisada junto com o tempo que você tem.',
    curtas: true,
    opcoes: [
      { valor: '3ouMenos', rotulo: '3 ou menos' },
      { valor: '4a5', rotulo: '4 a 5' },
      { valor: '6a7', rotulo: '6 a 7' },
      { valor: '8a10', rotulo: '8 a 10' },
      { valor: 'mais10', rotulo: 'Mais de 10' },
      { valor: 'naoSei', rotulo: 'Não sei' },
    ],
  },
  {
    chave: 'progressao',
    nome: 'progressao',
    pergunta: 'Como você decide aumentar a dificuldade do treino?',
    ajuda: 'Uma das perguntas que mais muda a análise.',
    opcoes: [
      { valor: 'carga', rotulo: 'Aumento a carga quando consigo' },
      { valor: 'repeticoes', rotulo: 'Aumento as repetições' },
      { valor: 'faixaReps', rotulo: 'Sigo uma faixa de repetições' },
      { valor: 'treinoInforma', rotulo: 'Meu treino já informa a progressão' },
      { valor: 'personalManda', rotulo: 'Aumento quando o profissional orienta' },
      { valor: 'igual', rotulo: 'Faço sempre mais ou menos igual' },
      { valor: 'naoSei', rotulo: 'Não sei' },
    ],
  },
  {
    chave: 'registro',
    nome: 'registro',
    pergunta: 'Você registra cargas e repetições?',
    curtas: true,
    opcoes: [
      { valor: 'sempre', rotulo: 'Sempre' },
      { valor: 'asVezes', rotulo: 'Às vezes' },
      { valor: 'nunca', rotulo: 'Nunca' },
    ],
  },
  {
    chave: 'prioridades',
    nome: 'prioridades',
    pergunta: 'Qual parte do corpo é a sua maior prioridade hoje?',
    ajuda: 'Escolha até 2. Isso permite comparar a sua prioridade com a distribuição real da semana.',
    multipla: { max: 2 },
    opcoes: [
      { valor: 'gluteos', rotulo: 'Glúteos' },
      { valor: 'quadriceps', rotulo: 'Pernas' },
      { valor: 'peito', rotulo: 'Peito' },
      { valor: 'costas', rotulo: 'Costas' },
      { valor: 'ombros', rotulo: 'Ombros' },
      { valor: 'biceps', rotulo: 'Braços' },
      { valor: 'core', rotulo: 'Abdômen' },
      { valor: 'corpoTodo', rotulo: 'Corpo todo' },
      { valor: 'nenhuma', rotulo: 'Nenhuma prioridade específica' },
    ],
  },
  {
    chave: 'aderencia',
    nome: 'aderencia',
    pergunta: 'Você costuma conseguir cumprir esse treino?',
    ajuda: 'Talvez a pergunta mais importante da análise. Responda pensando nas últimas semanas.',
    opcoes: [
      { valor: 'sempre', rotulo: 'Praticamente sempre' },
      { valor: 'maioria', rotulo: 'Na maioria das semanas' },
      { valor: 'perde1', rotulo: 'Costumo perder 1 treino' },
      { valor: 'perde2mais', rotulo: 'Costumo perder 2 ou mais' },
      { valor: 'quaseNunca', rotulo: 'Quase nunca consigo cumprir' },
    ],
    reforco: 'Sem julgamento: um treino que não cabe na rotina é um dado, não um defeito.',
  },
];

/* ------------------------------------------------------------------ *
 * Estado
 * ------------------------------------------------------------------ */

type Respostas = Partial<AuditoriaRespostas>;
const CHAVE_SESSAO = 'ppp-auditoria-treino';
const marcos = new Set<number>();

let respostas: Respostas = {};
let etapaAtual = 0;
let app: HTMLElement;
let tpl: HTMLTemplateElement;

const semanaVazia = (): Semana => [[], [], [], [], [], [], []];

function salvar(): void {
  try {
    sessionStorage.setItem(CHAVE_SESSAO, JSON.stringify({ respostas, etapaAtual }));
  } catch {
    /* modo privado */
  }
}

function restaurar(): void {
  try {
    const b = sessionStorage.getItem(CHAVE_SESSAO);
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
  const h = app.querySelector<HTMLElement>('.at-pergunta, .at-veredito');
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
  if (etapaAtual >= ETAPAS.length) return concluir();
  const etapa = ETAPAS[etapaAtual];
  const frag = tpl.content.cloneNode(true) as DocumentFragment;
  const raiz = frag.querySelector<HTMLElement>('.at-quiz')!;

  const pos = etapaAtual + 1;
  const total = ETAPAS.length;
  raiz.querySelector<HTMLElement>('.at-progresso-preenchido')!.style.width = `${Math.round((pos / total) * 100)}%`;
  raiz.querySelector<HTMLElement>('.at-progresso-txt')!.textContent = `Etapa ${pos} de ${total}`;
  raiz.querySelector<HTMLElement>('.at-pergunta')!.textContent = etapa.pergunta;
  raiz.querySelector<HTMLElement>('.at-ajuda')!.textContent = etapa.ajuda || '';
  raiz.querySelector<HTMLElement>('.at-reforco')!.textContent = etapa.reforco || '';

  const caixa = raiz.querySelector<HTMLElement>('.at-opcoes')!;
  const avancar = raiz.querySelector<HTMLButtonElement>('.at-avancar')!;
  const voltar = raiz.querySelector<HTMLButtonElement>('.at-voltar')!;

  if (etapaAtual === 0) voltar.hidden = true;
  voltar.addEventListener('click', () => {
    if (etapaAtual > 0) {
      etapaAtual -= 1;
      salvar();
      render();
    }
  });

  if (etapa.tipo === 'semana') montarSemana(caixa, avancar);
  else if (etapa.multipla) montarMultipla(etapa, caixa, avancar);
  else montarSimples(etapa, caixa);

  app.replaceChildren(frag);
  app.dataset.estado = 'quiz';
  garantirVisivel();
  focarTitulo();
  ev('training_audit_step', { step_number: pos, step_name: etapa.nome });

  const pct = Math.round((pos / total) * 100);
  for (const m of [25, 50, 75]) {
    if (pct >= m && !marcos.has(m)) {
      marcos.add(m);
      ev('training_audit_progress', { milestone: m });
    }
  }
}

function montarSimples(etapa: Etapa, caixa: HTMLElement): void {
  if (etapa.curtas) caixa.classList.add('at-opcoes--curtas');
  const atual = respostas[etapa.chave] as string | undefined;
  for (const op of etapa.opcoes!) {
    const b = el('button', 'at-opcao');
    b.type = 'button';
    b.appendChild(el('span', 'at-opcao-marca'));
    b.appendChild(el('span', undefined, op.rotulo));
    if (atual === op.valor) b.classList.add('at-sel');
    b.addEventListener('click', () => {
      caixa.querySelectorAll('.at-opcao').forEach((o) => o.classList.remove('at-sel'));
      b.classList.add('at-sel');
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
    caixa.querySelectorAll<HTMLButtonElement>('.at-opcao').forEach((b) => {
      b.setAttribute('aria-pressed', sel.includes(b.dataset.valor!) ? 'true' : 'false');
    });
    botao.hidden = sel.length === 0;
  };

  for (const op of etapa.opcoes!) {
    const b = el('button', 'at-opcao');
    b.type = 'button';
    b.dataset.valor = op.valor;
    b.setAttribute('aria-pressed', 'false');
    b.appendChild(el('span', 'at-opcao-marca'));
    b.appendChild(el('span', undefined, op.rotulo));
    b.addEventListener('click', () => {
      // "Nenhuma" e "corpo todo" são exclusivas: não fazem par com um grupo.
      if (op.valor === 'nenhuma' || op.valor === 'corpoTodo') sel = [op.valor];
      else {
        sel = sel.filter((v) => v !== 'nenhuma' && v !== 'corpoTodo');
        if (sel.includes(op.valor)) sel = sel.filter((v) => v !== op.valor);
        else if (sel.length < max) sel.push(op.valor);
        else sel = [sel[sel.length - 1], op.valor];
      }
      respostas.prioridades = sel as Prioridade[];
      salvar();
      sincronizar();
    });
    caixa.appendChild(b);
  }
  sincronizar();
  botao.textContent = 'Continuar';
  botao.addEventListener('click', avancar);
}

/**
 * Construtor da semana — a etapa de maior risco de abandono.
 * Estratégia: divisões prontas em destaque, montagem manual como ajuste.
 */
function montarSemana(caixa: HTMLElement, botao: HTMLButtonElement): void {
  if (!respostas.semana) respostas.semana = semanaVazia();
  // Nada de capturar `respostas.semana` numa const: escolher uma divisão
  // pronta SUBSTITUI o objeto, e uma referência capturada ficaria apontando
  // para a semana antiga — a tela redesenharia vazia.
  const semanaAtual = () => respostas.semana!;

  // --- Modelos prontos ---
  // Declarados antes da grade porque os handlers dos modelos os usam.
  const listaDias = el('div', 'at-dias');
  const resumo = el('p', 'at-semana-resumo');
  resumo.setAttribute('aria-live', 'polite');

  const modelos = el('div', 'at-modelos');
  modelos.appendChild(el('p', 'at-modelos-rot', 'Começar por uma divisão conhecida'));
  const grade = el('div', 'at-modelos-grade');

  /** Só um modelo fica marcado por vez; editar à mão desmarca todos. */
  const marcarModelo = (id: string | null) => {
    grade.querySelectorAll<HTMLButtonElement>('.at-modelo').forEach((b) => {
      b.setAttribute('aria-pressed', b.dataset.modelo === id ? 'true' : 'false');
    });
  };

  for (const m of MODELOS) {
    const b = el('button', 'at-modelo');
    b.type = 'button';
    b.dataset.modelo = m.id;
    b.setAttribute('aria-pressed', 'false');
    b.appendChild(el('strong', undefined, m.nome));
    b.appendChild(el('span', undefined, m.descricao));
    b.addEventListener('click', () => {
      respostas.semana = m.semana.map((d) => [...d]);
      salvar();
      ev('training_audit_preset', { preset: m.id });
      marcarModelo(m.id);
      redesenharDias();
      // A semana preenchida fica abaixo da grade de modelos: sem trazer
      // para a vista, a pessoa clica e tem a impressão de que nada mudou.
      listaDias.scrollIntoView({ block: 'start' });
    });
    grade.appendChild(b);
  }
  modelos.appendChild(grade);
  modelos.appendChild(
    el('p', 'at-modelos-nota', 'Nenhuma dessas divisões é melhor que a outra — elas servem para você não precisar montar tudo do zero. Ajuste depois como quiser.'),
  );
  caixa.appendChild(modelos);

  // --- Dias ---
  caixa.appendChild(listaDias);
  caixa.appendChild(resumo);

  const atualizarResumo = () => {
    const treinados = semanaAtual().filter((d) => d.length).length;
    resumo.textContent = treinados
      ? `${treinados} ${treinados === 1 ? 'dia' : 'dias'} de treino na semana.`
      : 'Selecione ao menos um dia de treino para continuar.';
    botao.hidden = treinados === 0;
  };

  function redesenharDias(): void {
    listaDias.replaceChildren();
    for (let i = 0; i < 7; i++) {
      const det = el('details', 'at-dia');
      const sum = el('summary');
      const nome = el('span', 'at-dia-nome', DIAS_NOME[i]);
      const val = el('span', 'at-dia-val');
      sum.append(nome, val);
      det.appendChild(sum);

      const chips = el('div', 'at-chips');
      for (const g of GRUPOS_CHIP) {
        const c = el('button', 'at-chip');
        c.type = 'button';
        c.textContent = GRUPO_TXT[g];
        c.setAttribute('aria-pressed', semanaAtual()[i].includes(g) ? 'true' : 'false');
        c.addEventListener('click', () => {
          const dia = semanaAtual()[i];
          if (dia.includes(g)) respostas.semana![i] = dia.filter((x) => x !== g);
          else dia.push(g);
          salvar();
          // A semana deixou de ser a divisão pronta escolhida: manter o
          // card marcado passaria a informação errada.
          marcarModelo(null);
          c.setAttribute('aria-pressed', respostas.semana![i].includes(g) ? 'true' : 'false');
          val.textContent = rotuloDia(respostas.semana![i]);
          det.classList.toggle('at-dia--cheio', respostas.semana![i].length > 0);
          atualizarResumo();
        });
        chips.appendChild(c);
      }
      det.appendChild(chips);
      val.textContent = rotuloDia(semanaAtual()[i]);
      if (semanaAtual()[i].length) det.classList.add('at-dia--cheio');
      listaDias.appendChild(det);
    }
    atualizarResumo();
  }

  redesenharDias();
  botao.textContent = 'Continuar';
  botao.addEventListener('click', avancar);
}

function rotuloDia(dia: Grupo[]): string {
  if (!dia.length) return 'Descanso';
  return dia.map((g) => GRUPO_TXT[g]).join(', ');
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

/* ------------------------------------------------------------------ *
 * Resultado
 * ------------------------------------------------------------------ */

function completo(r: Respostas): r is AuditoriaRespostas {
  return Boolean(
    r.objetivo &&
      r.experiencia &&
      r.semana?.some((d) => d.length) &&
      r.duracao &&
      r.exercicios &&
      r.progressao &&
      r.registro &&
      r.prioridades?.length &&
      r.aderencia,
  );
}

function concluir(): void {
  if (!completo(respostas)) {
    const faltante = ETAPAS.findIndex((e) => {
      const v = (respostas as Record<string, unknown>)[e.chave];
      if (e.chave === 'semana') return !(v as Semana | undefined)?.some((d) => d.length);
      if (e.chave === 'prioridades') return !(v as unknown[] | undefined)?.length;
      return !v;
    });
    etapaAtual = faltante >= 0 ? faltante : 0;
    render();
    return;
  }
  const res = analisarTreino(respostas as AuditoriaRespostas);
  ev('training_audit_complete');
  ev('training_audit_result', res.analytics);
  renderResultado(res);
}

function renderResultado(r: ReturnType<typeof analisarTreino>): void {
  const raiz = el('div', 'at-resultado');
  raiz.setAttribute('role', 'region');
  raiz.setAttribute('aria-label', 'Análise do seu treino');

  /* --- Veredito, nunca uma nota --- */
  const cab = el('header', 'at-res-cabecalho');
  cab.appendChild(el('p', 'at-res-rotulo', 'Análise da sua estrutura'));
  const ver = el('h2', 'at-veredito', r.vereditoTexto);
  ver.dataset.veredito = r.veredito;
  cab.appendChild(ver);
  cab.appendChild(el('p', 'at-res-resumo', r.resumo));
  raiz.appendChild(cab);

  /* --- Frequência declarada --- */
  if (r.frequencia.length) {
    const fs = el('section', 'at-bloco');
    fs.appendChild(el('h3', undefined, 'Exposição declarada por grupo'));
    const tab = el('table', 'at-freq');
    const tb = el('tbody');
    const max = Math.max(...r.frequencia.map((f) => f.vezes));
    for (const f of r.frequencia) {
      const tr = el('tr');
      const th = el('th', undefined, f.rotulo);
      th.scope = 'row';
      const td = el('td');
      const barra = el('span', 'at-freq-barra');
      barra.style.width = `${(f.vezes / max) * 100}%`;
      const num = el('span', 'at-freq-num', `${f.vezes}x`);
      td.append(barra, num);
      tr.append(th, td);
      tb.appendChild(tr);
    }
    tab.appendChild(tb);
    fs.appendChild(tab);
    fs.appendChild(
      el('p', 'at-nota', 'Isto é exposição declarada, não volume. Um grupo que aparece uma vez pode receber mais estímulo que outro que aparece duas — depende de quantas séries e de quão perto do limite elas são feitas.'),
    );
    raiz.appendChild(fs);
  }

  /* --- Pontos fortes primeiro --- */
  if (r.pontosFortes.length) {
    const pf = el('section', 'at-bloco at-fortes');
    pf.appendChild(el('h3', undefined, 'O que está funcionando'));
    const ul = el('ul');
    for (const f of r.pontosFortes) ul.appendChild(el('li', undefined, f));
    pf.appendChild(ul);
    raiz.appendChild(pf);
  }

  /* --- Pontos de atenção: no máximo 3, cada um com as 3 partes --- */
  if (r.atencao.length) {
    const at = el('section', 'at-bloco');
    at.appendChild(
      el('h3', undefined, r.atencao.length === 1 ? 'O ponto que eu revisaria' : 'Os pontos que eu revisaria primeiro'),
    );
    for (const [idx, i] of r.atencao.entries()) {
      const card = el('article', 'at-alerta');
      const topo = el('div', 'at-alerta-topo');
      topo.appendChild(el('span', 'at-alerta-ordem', String(idx + 1)));
      const conf = el('span', 'at-alerta-conf', rotuloConfianca(i.confianca));
      conf.dataset.conf = i.confianca;
      topo.appendChild(conf);
      card.appendChild(topo);
      card.appendChild(el('h4', undefined, i.titulo));
      card.appendChild(el('p', 'at-alerta-oque', i.oQueSignifica));

      const detPor = el('div', 'at-alerta-parte');
      detPor.appendChild(el('h5', undefined, 'Por que isso importa'));
      detPor.appendChild(el('p', undefined, i.porQueImporta));
      card.appendChild(detPor);

      const detRev = el('div', 'at-alerta-parte');
      detRev.appendChild(el('h5', undefined, 'O que revisar'));
      detRev.appendChild(el('p', undefined, i.oQueRevisar));
      card.appendChild(detRev);

      if (i.artigo) {
        const a = el('a', 'at-alerta-link', `Entender melhor: ${i.artigo.titulo}`);
        a.href = i.artigo.url;
        a.addEventListener('click', () => ev('training_audit_article_click', { link_url: i.artigo!.url }));
        card.appendChild(a);
      }
      at.appendChild(card);
    }
    raiz.appendChild(at);
  }

  /* --- O que não dá para concluir: seção de honestidade --- */
  const nd = el('section', 'at-bloco at-limites');
  nd.appendChild(el('h3', undefined, 'O que esta análise não consegue avaliar'));
  const ulN = el('ul');
  for (const t of r.naoDaParaConcluir) ulN.appendChild(el('li', undefined, t));
  nd.appendChild(ulN);
  raiz.appendChild(nd);

  /* --- Próximo passo: um só --- */
  const pp = el('section', 'at-bloco at-proximo');
  pp.appendChild(el('h3', undefined, 'Próximo passo'));
  pp.appendChild(el('p', undefined, r.proximoPasso.texto));
  const btn = el('a', 'btn btn-primary at-proximo-btn', r.proximoPasso.rotulo);
  btn.href = r.proximoPasso.url;
  btn.addEventListener('click', () =>
    ev(
      r.proximoPasso.url.includes('treino-para-minha-rotina')
        ? 'training_audit_routine_tool_click'
        : 'training_audit_personal_match_click',
      { primary_issue: r.analytics.primary_issue },
    ),
  );
  pp.appendChild(btn);
  raiz.appendChild(pp);

  /* --- Montinho: depois de todo o valor --- */
  const mont = el('section', 'at-compat');
  mont.appendChild(el('h3', undefined, 'Quer uma análise além da estrutura?'));
  mont.appendChild(el('p', undefined, r.montinho.motivo));
  const acoes = el('div', 'at-acoes');
  const wpp = el('a', 'btn btn-primary');
  wpp.href = whatsappUrl(r.whatsapp);
  wpp.target = '_blank';
  wpp.rel = 'noopener';
  wpp.textContent = 'Conversar com o Montinho';
  wpp.addEventListener('click', () =>
    ev('training_audit_whatsapp_click', { primary_issue: r.analytics.primary_issue, verdict: r.analytics.verdict }),
  );
  acoes.appendChild(wpp);
  acoes.appendChild(el('p', 'at-acoes-nota', 'Abre o WhatsApp com um resumo curto da análise. Você lê antes de enviar.'));
  mont.appendChild(acoes);
  raiz.appendChild(mont);

  /* --- Conteúdo --- */
  if (r.conteudo.length) {
    const cs = el('section', 'at-continuar');
    cs.appendChild(el('h3', undefined, 'Para se aprofundar'));
    const ul = el('ul', 'at-links');
    for (const c of r.conteudo) {
      const li = el('li');
      const a = el('a', undefined, c.titulo);
      a.href = c.url;
      a.addEventListener('click', () => ev('training_audit_article_click', { link_url: c.url }));
      li.appendChild(a);
      ul.appendChild(li);
    }
    cs.appendChild(ul);
    raiz.appendChild(cs);
  }

  raiz.appendChild(
    el(
      'p',
      'at-aviso',
      'Esta é uma auditoria estrutural: ela avalia como o programa está organizado, não a sua execução nem a adequação individual dos exercícios. Não substitui avaliação profissional. Dor, lesão ou condição de saúde precisam ser avaliadas separadamente por um médico ou fisioterapeuta.',
    ),
  );

  raiz.appendChild(rodape(r));

  app.replaceChildren(raiz);
  app.dataset.estado = 'resultado';
  garantirVisivel();
  focarTitulo();
  try {
    sessionStorage.removeItem(CHAVE_SESSAO);
  } catch {
    /* sem persistência */
  }
}

function rotuloConfianca(c: 'alta' | 'media' | 'baixa'): string {
  return c === 'alta' ? 'Baseado no que você declarou' : c === 'media' ? 'Indício, não conclusão' : 'Depende de volume e intensidade';
}

function rodape(r: ReturnType<typeof analisarTreino>): HTMLElement {
  const rod = el('div', 'at-rodape');

  const fb = el('div', 'at-feedback');
  fb.appendChild(el('span', undefined, 'A análise fez sentido?'));
  const responder = (v: 'sim' | 'nao') => {
    ev('training_audit_feedback', { feedback: v, primary_issue: r.analytics.primary_issue });
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

  // Corrigir respostas sem refazer tudo: volta ao construtor da semana.
  const corrigir = el('button', 'at-corrigir', 'Corrigir minhas respostas');
  corrigir.type = 'button';
  corrigir.addEventListener('click', () => {
    etapaAtual = ETAPAS.findIndex((e) => e.tipo === 'semana');
    salvar();
    ev('training_audit_edit');
    render();
  });
  rod.appendChild(corrigir);

  const compartilhar = el('button', 'at-compartilhar', 'Compartilhar');
  compartilhar.type = 'button';
  compartilhar.addEventListener('click', () => {
    ev('training_audit_share');
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

  const refazer = el('button', 'at-refazer', 'Refazer do zero');
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
    ev('training_audit_restart');
    render();
  });
  rod.appendChild(refazer);

  return rod;
}

/* ------------------------------------------------------------------ *
 * Orquestração
 * ------------------------------------------------------------------ */

export function iniciarAuditoriaTreino(): void {
  const raiz = document.getElementById('at-app');
  const molde = document.getElementById('at-tpl');
  if (!raiz || !(molde instanceof HTMLTemplateElement)) return;
  app = raiz;
  tpl = molde;

  ev('training_audit_view');
  restaurar();

  const iniciar = document.getElementById('at-iniciar');
  if (!iniciar) return;
  const retomando = etapaAtual > 0 && Object.keys(respostas).length > 0;
  if (retomando) iniciar.textContent = 'Continuar de onde parei';
  iniciar.addEventListener('click', () => {
    ev('training_audit_start', retomando ? { resumed: true } : undefined);
    render();
  });
}
