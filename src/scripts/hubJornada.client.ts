/**
 * Camada interativa do hub de ferramentas.
 *
 * Três coisas, todas opcionais e todas aditivas:
 *
 * 1. "Continue de onde parou" e "Meu Mapa do Treino", que só aparecem
 *    quando existe mapa. Sem armazenamento local, a página segue idêntica
 *    ao que era antes — nenhum bloco vazio, nenhum erro.
 * 2. O roteador de quatro perguntas, para quem não se reconheceu em
 *    nenhuma das situações listadas em HTML.
 * 3. O "Plano de Partida", a síntese que só existe depois de três
 *    ferramentas — antes disso não haveria o que sintetizar.
 */
import {
  ETAPAS,
  linhasDoMapa,
  montarPlano,
  podeGerarPlano,
  proximoPasso,
  rotearInicio,
  totalConcluidas,
  type MaiorDificuldade,
  type PensandoContratar,
  type RespostasRoteador,
  type TemAcompanhamento,
  type TreinaHoje,
} from '../lib/jornada';
import { apagarMapa, lerMapa, mapaDisponivel } from './mapaTreino';

type Gtag = (c: string, e: string, p?: Record<string, unknown>) => void;
function ev(nome: string, params?: Record<string, unknown>): void {
  const g = (window as unknown as { gtag?: Gtag }).gtag;
  if (typeof g === 'function') g('event', nome, params || {});
}

function el<K extends keyof HTMLElementTagNameMap>(t: K, c?: string, x?: string): HTMLElementTagNameMap[K] {
  const n = document.createElement(t);
  if (c) n.className = c;
  if (x) n.textContent = x;
  return n;
}

/* ------------------------------------------------------------------ *
 * Continue de onde parou + Meu Mapa do Treino
 * ------------------------------------------------------------------ */

function renderMapa(): void {
  const alvo = document.getElementById('hj-mapa');
  if (!alvo) return;

  const mapa = lerMapa();
  const total = totalConcluidas(mapa);
  if (total === 0) return; // sem jornada iniciada, o bloco não existe

  const raiz = el('div', 'hj-mapa-box');

  const cab = el('div', 'hj-mapa-cab');
  cab.appendChild(el('h2', 'hj-mapa-titulo', 'Meu Mapa do Treino'));
  cab.appendChild(
    el(
      'p',
      'hj-mapa-sub',
      total === 1
        ? 'Você concluiu 1 etapa. Isto é o que já sabemos sobre o seu caso.'
        : `Você concluiu ${total} de ${ETAPAS.length} etapas. Isto é o que já sabemos sobre o seu caso.`,
    ),
  );
  raiz.appendChild(cab);

  const linhas = linhasDoMapa(mapa);
  if (linhas.length) {
    const dl = el('dl', 'hj-mapa-lista');
    for (const l of linhas) {
      const item = el('div', 'hj-mapa-item');
      item.appendChild(el('dt', undefined, l.rotulo));
      item.appendChild(el('dd', undefined, l.valor));
      dl.appendChild(item);
    }
    raiz.appendChild(dl);
  }

  /* --- Etapas: as feitas e as que faltam, sem juízo de valor --- */
  const ul = el('ul', 'hj-mapa-etapas');
  for (const e of ETAPAS) {
    const feita = Boolean(mapa.concluidas[e.ferramenta]);
    const li = el('li', feita ? 'hj-etapa hj-etapa--feita' : 'hj-etapa');
    li.appendChild(el('span', 'hj-etapa-marca', feita ? '✓' : '○'));
    li.appendChild(el('span', 'hj-etapa-nome', e.nome));
    ul.appendChild(li);
  }
  raiz.appendChild(ul);

  /* --- Próximo passo --- */
  const passo = proximoPasso(mapa);
  if (passo) {
    const p = el('div', 'hj-continue');
    p.appendChild(el('p', 'hj-continue-rotulo', 'Continue sua jornada'));
    p.appendChild(el('p', 'hj-continue-porque', passo.porque));
    const btn = el('a', 'btn btn-primary', `${passo.rotulo} →`);
    btn.href = passo.ferramenta.url;
    btn.addEventListener('click', () =>
      ev('journey_resumed', { next_tool: passo.ferramenta.id, steps_completed: total }),
    );
    p.appendChild(btn);
    raiz.appendChild(p);
  }

  /* --- Plano de Partida: só com material suficiente --- */
  if (podeGerarPlano(mapa)) {
    const plano = montarPlano(mapa)!;
    const sec = el('div', 'hj-plano');
    sec.appendChild(el('h3', undefined, 'Seu Plano de Partida'));
    sec.appendChild(el('p', 'hj-plano-resumo', plano.resumo));
    const ol = el('ol', 'hj-plano-acoes');
    for (const a of plano.acoes) ol.appendChild(el('li', undefined, a));
    sec.appendChild(ol);

    /* Como continuar: os dois caminhos, sem armadilha. */
    const escolha = el('div', 'hj-escolha');
    escolha.appendChild(el('h4', undefined, 'Como você quer continuar?'));
    const grade = el('div', 'hj-escolha-grade');

    const sozinho = el('a', 'hj-escolha-item');
    sozinho.href = '/guias/';
    sozinho.appendChild(el('strong', undefined, 'Quero seguir sozinho'));
    sozinho.appendChild(
      el('span', undefined, 'Guias, artigos e as próprias ferramentas — tudo aberto, sem cadastro.'),
    );
    sozinho.addEventListener('click', () => ev('self_guided_selected', { steps_completed: total }));

    const ajuda = el('a', 'hj-escolha-item hj-escolha-item--destaque');
    ajuda.href = mapa.perfil.cidadeSlug
      ? `/personal-trainer/${mapa.perfil.cidadeSlug}/`
      : '/personal-trainer/';
    ajuda.appendChild(el('strong', undefined, 'Quero ajuda de um profissional'));
    ajuda.appendChild(
      el(
        'span',
        undefined,
        mapa.perfil.cidadeNome
          ? `Ver o cenário de treino em ${mapa.perfil.cidadeNome} e o que procurar num profissional.`
          : 'Ver o cenário de treino da sua região e o que procurar num profissional.',
      ),
    );
    ajuda.addEventListener('click', () =>
      ev('professional_help_selected', { steps_completed: total, city: mapa.perfil.cidadeSlug ?? '' }),
    );

    grade.append(sozinho, ajuda);
    escolha.appendChild(grade);
    sec.appendChild(escolha);
    raiz.appendChild(sec);

    ev('plan_generated', { steps_completed: total });
  }

  /* --- Controle dos dados: obrigação, não cortesia --- */
  const rodape = el('div', 'hj-mapa-rodape');
  rodape.appendChild(
    el(
      'p',
      undefined,
      'O mapa fica salvo apenas neste navegador. Não pedimos cadastro, não enviamos nada para nenhum servidor e não é possível identificar você a partir dele.',
    ),
  );
  const apagar = el('button', 'hj-apagar', 'Apagar meus dados');
  apagar.type = 'button';
  apagar.addEventListener('click', () => {
    apagarMapa();
    ev('personal_map_cleared');
    raiz.replaceChildren(
      el('p', 'hj-apagado', 'Pronto: o seu mapa foi apagado deste navegador.'),
    );
  });
  rodape.appendChild(apagar);
  raiz.appendChild(rodape);

  alvo.replaceChildren(raiz);
  alvo.hidden = false;
  ev('personal_map_generated', { steps_completed: total });
}

/* ------------------------------------------------------------------ *
 * Roteador de 4 perguntas
 * ------------------------------------------------------------------ */

interface PerguntaRota {
  chave: keyof RespostasRoteador;
  pergunta: string;
  opcoes: { valor: string; rotulo: string }[];
}

const PERGUNTAS: PerguntaRota[] = [
  {
    chave: 'treina',
    pergunta: 'Você treina atualmente?',
    opcoes: [
      { valor: 'nunca', rotulo: 'Não, nunca treinei de verdade' },
      { valor: 'comecoParo', rotulo: 'Começo e paro o tempo todo' },
      { valor: 'irregular', rotulo: 'Treino, mas de forma irregular' },
      { valor: 'regular', rotulo: 'Sim, treino regularmente' },
    ],
  },
  {
    chave: 'dificuldade',
    pergunta: 'Qual é a sua maior dificuldade hoje?',
    opcoes: [
      { valor: 'naoSeiFazer', rotulo: 'Não sei o que fazer no treino' },
      { valor: 'naoMantenho', rotulo: 'Não consigo manter a constância' },
      { valor: 'duvidaTreino', rotulo: 'Não sei se o meu treino faz sentido' },
      { valor: 'tempo', rotulo: 'Falta tempo e a rotina muda muito' },
    ],
  },
  {
    chave: 'acompanhamento',
    pergunta: 'Você já tem algum acompanhamento?',
    opcoes: [
      { valor: 'nao', rotulo: 'Não' },
      { valor: 'personal', rotulo: 'Sim, tenho personal' },
      { valor: 'planilha', rotulo: 'Tenho um treino montado por alguém' },
    ],
  },
  {
    chave: 'contratar',
    pergunta: 'Está pensando em contratar alguém?',
    opcoes: [
      { valor: 'decidido', rotulo: 'Sim, já decidi' },
      { valor: 'avaliando', rotulo: 'Estou avaliando' },
      { valor: 'sozinho', rotulo: 'Não, quero seguir sozinho' },
    ],
  },
];

function iniciarRoteador(): void {
  const abrir = document.getElementById('hj-abrir-roteador');
  const caixa = document.getElementById('hj-roteador');
  if (!abrir || !caixa) return;

  const respostas: Partial<RespostasRoteador> = {};
  let i = 0;

  const desenhar = () => {
    if (i >= PERGUNTAS.length) return concluir();
    const q = PERGUNTAS[i];
    const box = el('div', 'hj-rot-box');
    box.appendChild(el('p', 'hj-rot-passo', `Pergunta ${i + 1} de ${PERGUNTAS.length}`));
    const h = el('h3', 'hj-rot-pergunta', q.pergunta);
    h.setAttribute('tabindex', '-1');
    box.appendChild(h);

    const opts = el('div', 'hj-rot-opcoes');
    for (const op of q.opcoes) {
      const b = el('button', 'hj-rot-opcao', op.rotulo);
      b.type = 'button';
      b.addEventListener('click', () => {
        (respostas as Record<string, string>)[q.chave] = op.valor;
        ev('journey_router_step', { step: i + 1, answer: op.valor });
        i += 1;
        desenhar();
      });
      opts.appendChild(b);
    }
    box.appendChild(opts);

    if (i > 0) {
      const voltar = el('button', 'hj-rot-voltar', '← Voltar');
      voltar.type = 'button';
      voltar.addEventListener('click', () => {
        i -= 1;
        desenhar();
      });
      box.appendChild(voltar);
    }

    caixa.replaceChildren(box);
    h.focus({ preventScroll: true });
  };

  const concluir = () => {
    const rota = rotearInicio({
      treina: respostas.treina as TreinaHoje,
      dificuldade: respostas.dificuldade as MaiorDificuldade,
      acompanhamento: respostas.acompanhamento as TemAcompanhamento,
      contratar: respostas.contratar as PensandoContratar,
    });

    ev('journey_path_selected', {
      recommended_tool: rota.ferramenta.id,
      recommended_stage: rota.etapa.id,
      source: 'router',
    });

    const box = el('div', 'hj-rot-box hj-rot-resultado');
    box.appendChild(el('p', 'hj-rot-rotulo', 'Comece por aqui'));
    const h = el('h3', 'hj-rot-titulo', rota.ferramenta.nome);
    h.setAttribute('tabindex', '-1');
    box.appendChild(h);
    box.appendChild(el('p', 'hj-rot-etapa', `Etapa ${ETAPAS.find((e) => e.id === rota.etapa.id)!.ordem}: ${rota.etapa.nome}`));
    box.appendChild(el('p', 'hj-rot-porque', rota.porque));

    const btn = el('a', 'btn btn-primary', 'Começar por esta →');
    btn.href = rota.ferramenta.url;
    btn.addEventListener('click', () => ev('tool_started', { tool: rota.ferramenta.id, source: 'router' }));
    box.appendChild(btn);

    const refazer = el('button', 'hj-rot-voltar', 'Responder de novo');
    refazer.type = 'button';
    refazer.addEventListener('click', () => {
      i = 0;
      desenhar();
    });
    box.appendChild(refazer);

    caixa.replaceChildren(box);
    h.focus({ preventScroll: true });
  };

  abrir.addEventListener('click', () => {
    ev('journey_started', { source: 'router_button' });
    abrir.setAttribute('hidden', '');
    caixa.hidden = false;
    desenhar();
    caixa.scrollIntoView({ block: 'center' });
  });
}

/* ------------------------------------------------------------------ *
 * Situações em HTML: só instrumentação, o link já funciona sem JS
 * ------------------------------------------------------------------ */

function instrumentarSituacoes(): void {
  document.querySelectorAll<HTMLAnchorElement>('[data-situacao]').forEach((a) => {
    a.addEventListener('click', () =>
      ev('journey_path_selected', { situation: a.dataset.situacao, source: 'situations' }),
    );
  });
}

export function iniciarHub(): void {
  instrumentarSituacoes();
  iniciarRoteador();
  if (mapaDisponivel()) renderMapa();
}
