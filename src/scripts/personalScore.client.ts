/**
 * Camada de interface do "Personal Score".
 *
 * Coleta respostas e renderiza o que o motor devolve. Nenhuma regra de
 * avaliação mora aqui — ela vive em src/lib/personalScore.ts.
 *
 * Duas particularidades desta ferramenta:
 *
 * 1. O questionário MUDA conforme o modelo de serviço declarado na primeira
 *    pergunta. Quem comprou uma planilha nunca chega a ver perguntas sobre
 *    suporte, correção de execução ou ajustes — perguntar seria o primeiro
 *    passo para avaliar o serviço por algo que ele não vendeu.
 * 2. O melhor entregável do resultado não é a nota: é a lista de perguntas
 *    para levar ao profissional. Por isso ela tem botão de copiar.
 */
import {
  avaliarAcompanhamento,
  type ItemAvaliacao,
  type ScoreRespostas,
  type ScoreResultado,
} from '../lib/personalScore';
import { whatsappUrl } from '../lib/links';

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
  /** Desmarca todas as outras numa pergunta de múltipla escolha. */
  exclusiva?: boolean;
}

interface Etapa {
  chave: keyof ScoreRespostas;
  nome: string;
  pergunta: string;
  ajuda?: string;
  opcoes: Opcao[] | ((r: Partial<ScoreRespostas>) => Opcao[]);
  curtas?: boolean;
  multipla?: boolean;
  reforco?: string;
  /** Etapa condicional — usada para pular o que o modelo não contratou. */
  quando?: (r: Partial<ScoreRespostas>) => boolean;
}

/** Modelos que incluem acompanhamento contínuo. */
const temAcompanhamento = (r: Partial<ScoreRespostas>) => Boolean(r.tipoServico && r.tipoServico !== 'planilha');

/**
 * Filtro das etapas condicionais. Enquanto a primeira pergunta não foi
 * respondida, assumimos o questionário completo — anunciar "Pergunta 1 de 9"
 * e pular para 13 na seguinte destruiria a confiança na barra de progresso.
 */
const incluiAcompanhamento = (r: Partial<ScoreRespostas>) => !r.tipoServico || temAcompanhamento(r);

const OPCOES_EXECUCAO_PRESENCIAL: Opcao[] = [
  { valor: 'frequencia', rotulo: 'Sim, com frequência' },
  { valor: 'quandoNecessario', rotulo: 'Quando é necessário' },
  { valor: 'raramente', rotulo: 'Raramente' },
  { valor: 'nunca', rotulo: 'Nunca' },
  { valor: 'naoSeiDizer', rotulo: 'Não sei dizer' },
];

const OPCOES_EXECUCAO_ONLINE: Opcao[] = [
  { valor: 'onlinePorVideo', rotulo: 'Sim, envio vídeos e recebo correção' },
  { valor: 'quandoNecessario', rotulo: 'Quando é necessário, em chamada ou vídeo' },
  { valor: 'onlineSemCorrecao', rotulo: 'Não, minha execução não é verificada' },
  { valor: 'naoSeiDizer', rotulo: 'Não sei dizer' },
];

const ETAPAS: Etapa[] = [
  {
    chave: 'tipoServico',
    nome: 'tipo_servico',
    pergunta: 'Que tipo de acompanhamento você tem hoje?',
    ajuda: 'Isso muda tudo o que vem depois: cada modelo é avaliado pelo que ele se propõe a entregar.',
    opcoes: [
      { valor: 'presencialIndividual', rotulo: 'Personal presencial, individual' },
      { valor: 'presencialGrupo', rotulo: 'Personal presencial, em dupla ou grupo' },
      { valor: 'online', rotulo: 'Consultoria ou personal online' },
      { valor: 'hibrido', rotulo: 'Híbrido: presencial e online' },
      { valor: 'planilha', rotulo: 'Recebi um treino montado, sem acompanhamento contínuo' },
    ],
    reforco: 'Não avaliamos o profissional. Avaliamos a estrutura do serviço que você contratou.',
  },
  {
    chave: 'avaliacaoInicial',
    nome: 'avaliacao_inicial',
    pergunta: 'O que foi perguntado antes de o seu treino ser montado?',
    ajuda: 'Marque tudo o que se aplica.',
    multipla: true,
    opcoes: [
      { valor: 'objetivo', rotulo: 'Meu objetivo' },
      { valor: 'experiencia', rotulo: 'Minha experiência com treino' },
      { valor: 'rotina', rotulo: 'Minha rotina e meus horários' },
      { valor: 'dias', rotulo: 'Quantos dias eu posso treinar' },
      { valor: 'tempo', rotulo: 'Quanto tempo eu tenho por sessão' },
      { valor: 'historico', rotulo: 'Meu histórico de saúde' },
      { valor: 'limitacoes', rotulo: 'Dores ou limitações' },
      { valor: 'preferencias', rotulo: 'O que eu gosto e não gosto de fazer' },
      { valor: 'nenhuma', rotulo: 'Nada disso foi perguntado', exclusiva: true },
      { valor: 'naoLembro', rotulo: 'Não lembro', exclusiva: true },
    ],
  },
  {
    chave: 'personalizacao',
    nome: 'personalizacao',
    pergunta: 'O seu treino parece feito para você?',
    ajuda: 'Programas parecidos entre alunos com objetivos parecidos são normais. A pergunta é se as escolhas consideram o seu caso.',
    opcoes: [
      { valor: 'claramente', rotulo: 'Sim, claramente' },
      { valor: 'boaParte', rotulo: 'Boa parte dele, sim' },
      { valor: 'algumasGenericas', rotulo: 'Algumas partes parecem genéricas' },
      { valor: 'muitoGenerico', rotulo: 'Parece igual ao de todo mundo' },
      { valor: 'naoSei', rotulo: 'Não sei avaliar' },
    ],
  },
  {
    chave: 'rotinaFit',
    nome: 'rotina_fit',
    pergunta: 'Você consegue cumprir esse treino numa semana comum?',
    ajuda: 'Uma semana comum, não a ideal.',
    opcoes: [
      { valor: 'sim', rotulo: 'Sim, sem dificuldade' },
      { valor: 'quaseSempre', rotulo: 'Quase sempre' },
      { valor: 'asVezes', rotulo: 'Às vezes' },
      { valor: 'frequentementeNao', rotulo: 'Frequentemente não consigo' },
      { valor: 'dificilmente', rotulo: 'Dificilmente consigo' },
    ],
  },
  {
    chave: 'progressao',
    nome: 'progressao',
    pergunta: 'Você sabe como deveria evoluir no treino?',
    ajuda: 'Cargas, repetições, séries, dificuldade — o critério que faz o treino avançar.',
    opcoes: [
      { valor: 'metodoClaro', rotulo: 'Sim, existe um critério claro' },
      { valor: 'personalOrienta', rotulo: 'O profissional orienta quando é hora' },
      { valor: 'asVezes', rotulo: 'Às vezes muda, às vezes não' },
      { valor: 'sempreParecido', rotulo: 'Faço sempre a mesma coisa' },
      { valor: 'naoFacoIdeia', rotulo: 'Não faço ideia' },
    ],
  },
  {
    chave: 'monitoramento',
    nome: 'monitoramento',
    pergunta: 'Alguém acompanha a sua evolução ao longo do tempo?',
    ajuda: 'Registro de cargas, medidas, fotos, testes — qualquer forma de medir se está funcionando.',
    quando: incluiAcompanhamento,
    opcoes: [
      { valor: 'sempre', rotulo: 'Sim, sempre' },
      { valor: 'frequentemente', rotulo: 'Com frequência' },
      { valor: 'asVezes', rotulo: 'Às vezes' },
      { valor: 'raramente', rotulo: 'Raramente' },
      { valor: 'nunca', rotulo: 'Nunca' },
      { valor: 'naoSei', rotulo: 'Não sei dizer' },
    ],
  },
  {
    chave: 'ajustes',
    nome: 'ajustes',
    pergunta: 'Quando o treino muda, você entende por quê?',
    opcoes: [
      { valor: 'entendoGeralmente', rotulo: 'Sim, geralmente entendo' },
      { valor: 'asVezes', rotulo: 'Às vezes' },
      { valor: 'normalmenteNao', rotulo: 'Normalmente não' },
      { valor: 'mudaSemExplicacao', rotulo: 'Muda sem explicação' },
      { valor: 'quaseNuncaMuda', rotulo: 'O treino quase nunca muda' },
    ],
    reforco: 'Estamos na metade.',
  },
  {
    chave: 'execucao',
    nome: 'execucao',
    pergunta: 'A sua execução dos exercícios é corrigida?',
    quando: incluiAcompanhamento,
    opcoes: (r) => (r.tipoServico === 'online' ? OPCOES_EXECUCAO_ONLINE : OPCOES_EXECUCAO_PRESENCIAL),
  },
  {
    chave: 'metas',
    nome: 'metas',
    pergunta: 'Você sabe o que deveria estar melhorando nas próximas semanas?',
    opcoes: [
      { valor: 'sim', rotulo: 'Sim, está claro' },
      { valor: 'maisOuMenos', rotulo: 'Mais ou menos' },
      { valor: 'nao', rotulo: 'Não' },
    ],
  },
  {
    chave: 'comunicacao',
    nome: 'comunicacao',
    pergunta: 'Quando surge uma dúvida, você consegue orientação?',
    ajuda: 'O nível de suporte varia conforme o serviço contratado — não existe resposta certa universal.',
    quando: incluiAcompanhamento,
    opcoes: [
      { valor: 'sim', rotulo: 'Sim, sempre' },
      { valor: 'geralmente', rotulo: 'Geralmente sim' },
      { valor: 'depende', rotulo: 'Depende do dia' },
      { valor: 'raramente', rotulo: 'Raramente' },
      { valor: 'nao', rotulo: 'Não' },
    ],
  },
  {
    chave: 'adaptabilidade',
    nome: 'adaptabilidade',
    pergunta: 'Se a sua rotina muda, o treino é ajustado?',
    quando: incluiAcompanhamento,
    opcoes: [
      { valor: 'sim', rotulo: 'Sim' },
      { valor: 'asVezes', rotulo: 'Às vezes' },
      { valor: 'dificilmente', rotulo: 'Dificilmente' },
      { valor: 'nao', rotulo: 'Não' },
      { valor: 'nuncaPrecisei', rotulo: 'Nunca precisei' },
    ],
  },
  {
    chave: 'explicacao',
    nome: 'explicacao',
    pergunta: 'Você entende por que os exercícios do seu treino foram escolhidos?',
    opcoes: [
      { valor: 'sim', rotulo: 'Sim' },
      { valor: 'normalmente', rotulo: 'Normalmente sim' },
      { valor: 'asVezes', rotulo: 'Às vezes' },
      { valor: 'raramente', rotulo: 'Raramente' },
      { valor: 'nuncaPerguntei', rotulo: 'Nunca perguntei' },
    ],
  },
  {
    chave: 'plateau',
    nome: 'plateau',
    pergunta: 'Quando os resultados travam, o que acontece?',
    opcoes: [
      { valor: 'investigaEAjusta', rotulo: 'O treino é revisto e ajustado' },
      { valor: 'conversamos', rotulo: 'Conversamos sobre isso' },
      { valor: 'soTrocaTreino', rotulo: 'Só trocam o treino por outro' },
      { valor: 'quaseNadaMuda', rotulo: 'Quase nada muda' },
      { valor: 'nuncaAconteceu', rotulo: 'Nunca aconteceu comigo' },
      { valor: 'naoSei', rotulo: 'Não sei dizer' },
    ],
    reforco: 'Última pergunta.',
  },
];

const etapasAtivas = (r: Partial<ScoreRespostas>) => ETAPAS.filter((e) => !e.quando || e.quando(r));

const opcoesDe = (e: Etapa, r: Partial<ScoreRespostas>): Opcao[] =>
  typeof e.opcoes === 'function' ? e.opcoes(r) : e.opcoes;

/* ------------------------------------------------------------------ *
 * Estado
 * ------------------------------------------------------------------ */

type Respostas = Partial<ScoreRespostas>;
const CHAVE = 'ppp-score';
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
  const h = app.querySelector<HTMLElement>('.ps-pergunta, .ps-res-titulo');
  if (!h) return;
  h.setAttribute('tabindex', '-1');
  h.focus({ preventScroll: true });
}

function garantirVisivel(): void {
  const c = app.getBoundingClientRect();
  if (c.top < 80 || c.top > window.innerHeight * 0.5) app.scrollIntoView({ block: 'start' });
}

/**
 * Trocar o modelo de serviço invalida o que foi respondido sobre pilares que
 * o novo modelo não inclui — e também a correção de execução, cujas opções
 * são diferentes entre online e presencial.
 */
function ajustarAoServico(): void {
  if (!temAcompanhamento(respostas)) {
    delete respostas.monitoramento;
    delete respostas.execucao;
    delete respostas.comunicacao;
    delete respostas.adaptabilidade;
    return;
  }
  const validas = opcoesDe(ETAPAS.find((e) => e.chave === 'execucao')!, respostas).map((o) => o.valor);
  if (respostas.execucao && !validas.includes(respostas.execucao)) delete respostas.execucao;
}

/* ------------------------------------------------------------------ *
 * Renderização do questionário
 * ------------------------------------------------------------------ */

function render(): void {
  const ativas = etapasAtivas(respostas);
  if (etapaAtual >= ativas.length) return concluir();

  const etapa = ativas[etapaAtual];
  const frag = tpl.content.cloneNode(true) as DocumentFragment;
  const raiz = frag.querySelector<HTMLElement>('.ps-quiz')!;

  const pos = etapaAtual + 1;
  const total = ativas.length;
  raiz.querySelector<HTMLElement>('.ps-progresso-preenchido')!.style.width = `${Math.round((pos / total) * 100)}%`;
  raiz.querySelector<HTMLElement>('.ps-progresso-txt')!.textContent = `Pergunta ${pos} de ${total}`;
  raiz.querySelector<HTMLElement>('.ps-pergunta')!.textContent = etapa.pergunta;
  raiz.querySelector<HTMLElement>('.ps-ajuda')!.textContent = etapa.ajuda || '';
  raiz.querySelector<HTMLElement>('.ps-reforco')!.textContent = etapa.reforco || '';

  const caixa = raiz.querySelector<HTMLElement>('.ps-opcoes')!;
  const avancar = raiz.querySelector<HTMLButtonElement>('.ps-avancar')!;
  const voltar = raiz.querySelector<HTMLButtonElement>('.ps-voltar')!;

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
  ev('personal_score_step', { step_number: pos, step_name: etapa.nome });

  const pct = Math.round((pos / total) * 100);
  for (const m of [25, 50, 75]) {
    if (pct >= m && !marcos.has(m)) {
      marcos.add(m);
      ev('personal_score_progress', { milestone: m });
    }
  }
}

function montarSimples(etapa: Etapa, caixa: HTMLElement): void {
  if (etapa.curtas) caixa.classList.add('ps-opcoes--curtas');
  const atual = respostas[etapa.chave] as string | undefined;
  for (const op of opcoesDe(etapa, respostas)) {
    const b = el('button', 'ps-opcao');
    b.type = 'button';
    b.appendChild(el('span', 'ps-opcao-marca'));
    b.appendChild(el('span', undefined, op.rotulo));
    if (atual === op.valor) b.classList.add('ps-sel');
    b.addEventListener('click', () => {
      caixa.querySelectorAll('.ps-opcao').forEach((o) => o.classList.remove('ps-sel'));
      b.classList.add('ps-sel');
      (respostas as Record<string, unknown>)[etapa.chave] = op.valor;
      if (etapa.chave === 'tipoServico') ajustarAoServico();
      salvar();
      window.setTimeout(avancar, 160);
    });
    caixa.appendChild(b);
  }
}

function montarMultipla(etapa: Etapa, caixa: HTMLElement, botao: HTMLButtonElement): void {
  const opcoes = opcoesDe(etapa, respostas);
  const exclusivas = new Set(opcoes.filter((o) => o.exclusiva).map((o) => o.valor));
  let sel: string[] = Array.isArray(respostas.avaliacaoInicial) ? [...(respostas.avaliacaoInicial as string[])] : [];

  const sincronizar = () => {
    caixa.querySelectorAll<HTMLButtonElement>('.ps-opcao').forEach((b) => {
      b.setAttribute('aria-pressed', sel.includes(b.dataset.valor!) ? 'true' : 'false');
    });
    botao.hidden = sel.length === 0;
  };

  for (const op of opcoes) {
    const b = el('button', `ps-opcao${op.exclusiva ? ' ps-opcao--excl' : ''}`);
    b.type = 'button';
    b.dataset.valor = op.valor;
    b.setAttribute('aria-pressed', 'false');
    b.appendChild(el('span', 'ps-opcao-marca'));
    b.appendChild(el('span', undefined, op.rotulo));
    b.addEventListener('click', () => {
      if (sel.includes(op.valor)) sel = sel.filter((v) => v !== op.valor);
      else if (exclusivas.has(op.valor)) sel = [op.valor];
      else sel = [...sel.filter((v) => !exclusivas.has(v)), op.valor];
      respostas.avaliacaoInicial = sel as ItemAvaliacao[];
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

function completo(r: Respostas): r is ScoreRespostas {
  if (!r.tipoServico) return false;
  const base = Boolean(
    r.avaliacaoInicial?.length && r.personalizacao && r.rotinaFit && r.progressao && r.ajustes && r.metas && r.explicacao && r.plateau,
  );
  if (!base) return false;
  if (!temAcompanhamento(r)) return true;
  return Boolean(r.monitoramento && r.execucao && r.comunicacao && r.adaptabilidade);
}

function concluir(): void {
  if (!completo(respostas)) {
    const ativas = etapasAtivas(respostas);
    const faltante = ativas.findIndex((e) => {
      const v = (respostas as Record<string, unknown>)[e.chave];
      if (e.chave === 'avaliacaoInicial') return !(v as unknown[] | undefined)?.length;
      return !v;
    });
    etapaAtual = faltante >= 0 ? faltante : 0;
    render();
    return;
  }
  const res = avaliarAcompanhamento(respostas as ScoreRespostas);
  ev('personal_score_complete');
  ev('personal_score_result', res.analytics);
  renderResultado(res);
}

const CLASSE_NIVEL: Record<string, string> = {
  forte: 'ps-n-forte',
  bom: 'ps-n-bom',
  atencao: 'ps-n-atencao',
  revisar: 'ps-n-revisar',
  semDados: 'ps-n-semdados',
};

function renderResultado(r: ScoreResultado): void {
  const raiz = el('div', 'ps-resultado');
  raiz.setAttribute('role', 'region');
  raiz.setAttribute('aria-label', 'Resultado do Personal Score');

  /* --- Cabeçalho: nota como síntese, nunca como veredito --- */
  const cab = el('header', 'ps-res-cabecalho');
  const medidor = el('div', `ps-medidor ps-medidor--${r.nivelGeral}`);
  medidor.setAttribute('role', 'img');
  medidor.setAttribute('aria-label', `Pontuação ${r.score} de 100`);
  medidor.appendChild(el('span', 'ps-medidor-num', String(r.score)));
  medidor.appendChild(el('span', 'ps-medidor-den', '/100'));
  cab.appendChild(medidor);
  const cabTxt = el('div', 'ps-res-cab-txt');
  cabTxt.appendChild(el('p', 'ps-res-rotulo', 'Personal Score'));
  cabTxt.appendChild(el('h2', 'ps-res-titulo', r.rotuloGeral));
  cab.appendChild(cabTxt);
  raiz.appendChild(cab);

  raiz.appendChild(el('p', 'ps-res-resumo', r.visaoGeral));

  if (r.ressalvaCobertura) {
    raiz.appendChild(el('p', 'ps-ressalva', r.ressalvaCobertura));
  }

  /* --- Pilares: só os que o modelo contratado inclui --- */
  const pil = el('section', 'ps-bloco');
  pil.appendChild(el('h3', undefined, 'Como cada aspecto apareceu'));
  pil.appendChild(
    el(
      'p',
      'ps-bloco-nota',
      'Avaliamos apenas o que faz parte do modelo que você contratou. O que não foi vendido não entra na conta.',
    ),
  );
  const grade = el('ul', 'ps-pilares');
  for (const p of r.pilares) {
    const li = el('li', `ps-pilar ${CLASSE_NIVEL[p.nivel]}`);
    li.appendChild(el('span', 'ps-pilar-nome', p.rotulo));
    li.appendChild(el('span', 'ps-pilar-nivel', p.rotuloNivel));
    grade.appendChild(li);
  }
  pil.appendChild(grade);
  raiz.appendChild(pil);

  /* --- Pontos fortes: só os reais --- */
  if (r.pontosFortes.length) {
    const f = el('section', 'ps-bloco ps-fortes');
    f.appendChild(el('h3', undefined, r.pontosFortes.length === 1 ? 'O que está funcionando' : 'O que está funcionando bem'));
    const ul = el('ul', 'ps-lista-check');
    for (const t of r.pontosFortes) ul.appendChild(el('li', undefined, t));
    f.appendChild(ul);
    raiz.appendChild(f);
  }

  /* --- Pontos de atenção, em duas partes: relato e leitura --- */
  if (r.atencao.length) {
    const a = el('section', 'ps-bloco');
    a.appendChild(el('h3', undefined, r.atencao.length === 1 ? 'O ponto que vale conversar' : 'Pontos que valem uma conversa'));
    for (const p of r.atencao) {
      const card = el('article', 'ps-atencao');
      card.appendChild(el('h4', undefined, p.titulo));
      const rel = el('p', 'ps-atencao-relato');
      rel.appendChild(el('strong', undefined, 'O que você relatou: '));
      rel.appendChild(document.createTextNode(p.oQueVoceRelatou));
      card.appendChild(rel);
      const sig = el('p', 'ps-atencao-leitura');
      sig.appendChild(el('strong', undefined, 'O que isso pode significar: '));
      sig.appendChild(document.createTextNode(p.oQueIssoSignifica));
      card.appendChild(sig);
      if (p.artigo) {
        const link = el('a', 'ps-atencao-link', `Entender melhor: ${p.artigo.titulo}`);
        link.href = p.artigo.url;
        link.addEventListener('click', () => ev('personal_score_article_click', { link_url: p.artigo!.url }));
        card.appendChild(link);
      }
      a.appendChild(card);
    }
    raiz.appendChild(a);
  }

  /* --- O melhor entregável: perguntas para a próxima conversa --- */
  const q = el('section', 'ps-bloco ps-perguntas');
  q.appendChild(el('h3', undefined, 'Perguntas para levar ao seu profissional'));
  q.appendChild(
    el(
      'p',
      'ps-bloco-nota',
      'Boa parte do que aparece aqui se resolve com uma conversa. Estas perguntas são diretas e não soam como cobrança.',
    ),
  );
  const ol = el('ol', 'ps-lista-num');
  for (const t of r.perguntasParaOPersonal) ol.appendChild(el('li', undefined, t));
  q.appendChild(ol);

  const copiar = el('button', 'ps-copiar', 'Copiar perguntas');
  copiar.type = 'button';
  copiar.addEventListener('click', () => {
    ev('personal_score_copy_questions', { question_count: r.perguntasParaOPersonal.length });
    const texto = r.perguntasParaOPersonal.map((t, i) => `${i + 1}. ${t}`).join('\n');
    void navigator.clipboard?.writeText(texto).then(
      () => {
        copiar.textContent = 'Copiado ✓';
        window.setTimeout(() => (copiar.textContent = 'Copiar perguntas'), 2500);
      },
      () => {
        copiar.textContent = 'Não deu para copiar';
      },
    );
  });
  q.appendChild(copiar);
  raiz.appendChild(q);

  /* --- Próximo passo --- */
  const pp = el('section', 'ps-bloco ps-proximo');
  pp.appendChild(el('h3', undefined, 'Próximo passo'));
  pp.appendChild(el('p', undefined, r.proximoPasso.texto));
  const btn = el('a', 'btn btn-primary ps-proximo-btn', r.proximoPasso.rotulo);
  btn.href = r.proximoPasso.url;
  const eventoPorFerramenta: Record<string, string> = {
    rotina: 'personal_score_routine_click',
    auditoria: 'personal_score_audit_click',
    personalIdeal: 'personal_score_personal_match_click',
    preco: 'personal_score_price_click',
  };
  btn.addEventListener('click', () =>
    ev(eventoPorFerramenta[r.proximoPasso.ferramenta] ?? 'personal_score_next_click', {
      primary_issue: r.analytics.primary_issue,
    }),
  );
  pp.appendChild(btn);
  raiz.appendChild(pp);

  /* --- O que esta ferramenta NÃO avalia: honestidade em seção fixa --- */
  const lim = el('section', 'ps-bloco ps-limitacoes');
  lim.appendChild(el('h3', undefined, 'O que esta ferramenta não consegue avaliar'));
  const ulLim = el('ul');
  for (const t of r.limitacoes) ulLim.appendChild(el('li', undefined, t));
  lim.appendChild(ulLim);
  raiz.appendChild(lim);

  /* --- Montinho: ponto de comparação, nunca substituto --- */
  if (r.montinho) {
    const m = el('section', 'ps-compat');
    m.appendChild(el('h3', undefined, 'Quer um ponto de comparação?'));
    m.appendChild(el('p', undefined, r.montinho.motivo));
    const acoes = el('div', 'ps-acoes');
    const wpp = el('a', 'btn btn-primary');
    wpp.href = whatsappUrl(r.whatsapp);
    wpp.target = '_blank';
    wpp.rel = 'noopener';
    wpp.textContent = 'Conversar com o Montinho';
    wpp.addEventListener('click', () => ev('personal_score_whatsapp_click', { primary_issue: r.analytics.primary_issue }));
    acoes.appendChild(wpp);
    acoes.appendChild(el('p', 'ps-acoes-nota', 'Abre o WhatsApp com um resumo curto, sem citar ninguém. Você lê antes de enviar.'));
    m.appendChild(acoes);
    raiz.appendChild(m);
  }

  /* --- Conteúdo --- */
  if (r.conteudo.length) {
    const c = el('section', 'ps-continuar');
    c.appendChild(el('h3', undefined, 'Para se aprofundar'));
    const ul = el('ul', 'ps-links');
    for (const item of r.conteudo) {
      const li = el('li');
      const a = el('a', undefined, item.titulo);
      a.href = item.url;
      a.addEventListener('click', () => ev('personal_score_article_click', { link_url: item.url }));
      li.appendChild(a);
      ul.appendChild(li);
    }
    c.appendChild(ul);
    raiz.appendChild(c);
  }

  raiz.appendChild(
    el(
      'p',
      'ps-aviso',
      'Este resultado é uma leitura da estrutura do serviço a partir do que você declarou — não é uma avaliação do profissional, da competência técnica dele nem da adequação dos exercícios ao seu corpo. Se você tem dor, lesão ou alguma condição de saúde, converse com um médico ou fisioterapeuta.',
    ),
  );

  raiz.appendChild(rodape(r));

  app.replaceChildren(raiz);
  app.dataset.estado = 'resultado';
  garantirVisivel();
  focarTitulo();
  limparSessao();
}

function rodape(r: ScoreResultado): HTMLElement {
  const rod = el('div', 'ps-rodape');

  const fb = el('div', 'ps-feedback');
  fb.appendChild(el('span', undefined, 'Esse resultado fez sentido para você?'));
  const responder = (v: 'sim' | 'nao') => {
    ev('personal_score_feedback', { feedback: v, primary_issue: r.analytics.primary_issue });
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

  const compartilhar = el('button', 'ps-compartilhar', 'Compartilhar');
  compartilhar.type = 'button';
  compartilhar.addEventListener('click', () => {
    ev('personal_score_share');
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

  const refazer = el('button', 'ps-refazer', 'Refazer');
  refazer.type = 'button';
  refazer.addEventListener('click', () => {
    respostas = {};
    etapaAtual = 0;
    marcos.clear();
    limparSessao();
    ev('personal_score_restart');
    render();
  });
  rod.appendChild(refazer);

  return rod;
}

/* ------------------------------------------------------------------ *
 * Orquestração
 * ------------------------------------------------------------------ */

export function iniciarPersonalScore(): void {
  const raiz = document.getElementById('ps-app');
  const molde = document.getElementById('ps-tpl');
  if (!raiz || !(molde instanceof HTMLTemplateElement)) return;
  app = raiz;
  tpl = molde;

  ev('personal_score_view');

  restaurar();
  ajustarAoServico();

  const iniciar = document.getElementById('ps-iniciar');
  if (!iniciar) return;
  const retomando = etapaAtual > 0 && Object.keys(respostas).length > 0;
  if (retomando) iniciar.textContent = 'Continuar de onde parei';
  iniciar.addEventListener('click', () => {
    ev('personal_score_start', retomando ? { resumed: true } : undefined);
    render();
  });
}
