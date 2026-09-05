/**
 * proximoPasso — o motor único de próximo passo depois de uma ferramenta.
 *
 * A pergunta que ele responde é uma só, e não é comercial:
 *
 *   qual é a coisa mais útil que esta pessoa pode fazer agora?
 *
 * O QUE A AUDITORIA ENCONTROU (docs/motor-proximo-passo.md)
 *
 * A camada de jornada (`jornada.ts`) já decidia o próximo passo a partir do
 * mapa acumulado, mas era cega ao RESULTADO: quem terminava a auditoria com
 * veredito "coerente" e quem terminava com "várias questões" recebiam a
 * mesma sugestão. Quem reagia ao resultado era cada ferramenta, por dentro —
 * sete regras em cinco formatos, mais a decisão comercial duplicada cinco
 * vezes com cinco assinaturas.
 *
 * Este arquivo inverte isso. As ferramentas param de decidir e passam a
 * RELATAR (`RelatoFerramenta`); a decisão acontece aqui, em um lugar só.
 *
 * QUATRO REGRAS QUE GOVERNAM O ARQUIVO
 *
 * 1. `null` é resposta legítima e frequente. Resultado bom com necessidade
 *    baixa não recebe CTA — recebe o reconhecimento de que está tudo certo.
 *    Nenhum CTA é melhor do que CTA irrelevante.
 *
 * 2. Necessidade e intenção comercial são DUAS medidas separadas. Quem tira
 *    34/100 no Personal Score tem necessidade altíssima e intenção
 *    desconhecida; empurrar consultoria para essa pessoa é vender em cima de
 *    um problema que ela acabou de descobrir. Consultoria exige as duas
 *    altas, nunca uma só.
 *
 * 3. Limitação de saúde declarada bloqueia qualquer oferta comercial, sem
 *    exceção e sem escala de cinza. O resultado vira orientação de procurar
 *    médico ou fisioterapeuta.
 *
 * 4. Função pura: sem DOM, sem `window`, sem import de cidade. O teste varre
 *    a matriz inteira sem navegador, e o script de cliente carrega os textos
 *    do módulo de dados, não daqui.
 */
import {
  FERRAMENTAS,
  etapaDe,
  proximoPasso,
  type Ferramenta,
  type FerramentaId,
  type Mapa,
  type PerfilMapa,
} from './jornada';
import {
  EIXO_ROTULO,
  FECHAMENTOS,
  RESSALVA_SAUDE,
  TEXTOS,
  preencher,
  type FechamentoId,
  type VariaveisTexto,
} from '../data/proximoPassoMensagens';

/* ------------------------------------------------------------------ *
 * 1. Camada de normalização — o vocabulário comum
 * ------------------------------------------------------------------ */

/**
 * O eixo do problema, traduzido para um vocabulário que vale para as sete
 * ferramentas. Cada engine fala o próprio dialeto ("aderencia",
 * "capacidadeRotina", "supervisao", "rotinaFit"); o eixo é onde esses
 * dialetos viram uma língua só, e é o que permite uma regra escrita uma vez
 * servir a qualquer ferramenta — inclusive às que ainda não existem.
 */
export type EixoProblema =
  | 'aderencia'
  | 'agenda'
  | 'estrutura'
  | 'progressao'
  | 'supervisao'
  | 'orcamento'
  | 'nenhum';

/**
 * Como o resultado se parece, do ponto de vista de quem recebeu.
 *
 *   bom      — nada pede correção agora
 *   atencao  — há pontos a revisar, nada urgente
 *   critico  — o resultado aponta um problema que trava o progresso
 *   neutro   — a ferramenta informa, não avalia (o caso da calculadora)
 */
export type NivelResultado = 'bom' | 'atencao' | 'critico' | 'neutro';

/**
 * Sinais binários que mudam a decisão. Ficam fora do eixo porque não são
 * "o problema" — são condições de contorno.
 */
export type Flag =
  /** Já paga por acompanhamento hoje. */
  | 'jaTemPersonal'
  /** Declarou dor, lesão ou condição de saúde. Bloqueia oferta comercial. */
  | 'limitacaoDeclarada'
  /** Não treina no momento. */
  | 'semTreinoAtual'
  /** Orçamento apareceu como fator decisivo. */
  | 'orcamentoLimitante'
  /** Executa sozinho com segurança. */
  | 'autonomiaAlta'
  /** O resultado se apoia em pouca informação — não afirmar demais. */
  | 'dadoFraco';

export interface Conteudo {
  url: string;
  titulo: string;
}

/**
 * O que uma ferramenta entrega ao motor. É o contrato inteiro: nada além
 * disto chega aqui, e nenhuma ferramenta decide nada.
 *
 * Deliberadamente enxuto. Cada campo novo é um campo que sete ferramentas
 * precisarão preencher e que o motor precisará justificar usar.
 */
export interface RelatoFerramenta {
  ferramenta: FerramentaId;
  /** Classe do resultado no vocabulário da própria ferramenta (analytics). */
  tipoResultado: string;
  nivel: NivelResultado;
  eixo: EixoProblema;
  /** 0–100 quando a ferramenta pontua. Ausente quando não faz sentido. */
  pontuacao?: number;
  flags?: Flag[];
  /** Artigos que a ferramenta já selecionou para este resultado. */
  conteudo?: Conteudo[];
  /** O que alimenta o mapa. Sem dado identificável, como já era. */
  perfil?: PerfilMapa;
}

/* ------------------------------------------------------------------ *
 * 2. Contexto da sessão — a memória curta
 * ------------------------------------------------------------------ */

/**
 * O que aconteceu nesta visita. Diferente do mapa (`localStorage`, 120
 * dias), isto é `sessionStorage`: some quando a aba fecha, e é o que evita
 * repetir na terceira ferramenta a oferta que a pessoa ignorou na primeira.
 */
export interface ContextoSessao {
  /** Ferramentas concluídas nesta sessão. */
  concluidasAgora?: FerramentaId[];
  /** Regras cujo CTA apareceu e não foi clicado, com a contagem. */
  ignorados?: Record<string, number>;
  /** Consultoria já foi oferecida nesta sessão? */
  consultoriaOfertada?: boolean;
  /** A pessoa já clicou em WhatsApp nesta sessão? */
  whatsappClicado?: boolean;
}

/** Depois de duas impressões sem clique, a oferta cansou. */
export const LIMITE_IGNORADOS = 2;

/* ------------------------------------------------------------------ *
 * 3. O que o motor devolve
 * ------------------------------------------------------------------ */

export type TipoAcao = 'ferramenta' | 'conteudo' | 'consultoria' | 'nenhuma';

export interface Acao {
  tipo: TipoAcao;
  titulo: string;
  texto: string;
  cta: { rotulo: string; url: string };
  secundario?: { rotulo: string; url: string };
  /** Por que esta ação, em linguagem de gente. É renderizado, não é debug. */
  porque: string;
  /** Ressalva de saúde, quando há limitação declarada. */
  ressalva?: string;
  /** Identificador da regra que decidiu. Analytics e depuração. */
  regra: string;
  /** Maior vence. Só importa quando duas regras se aplicam. */
  prioridade: number;
  /** Chaves não sensíveis para o GA4. */
  analytics: {
    tool_id: FerramentaId;
    result_type: string;
    action_type: TipoAcao;
    rule: string;
    axis: EixoProblema;
    need_bucket: Faixa;
    intent_bucket: Faixa;
    destination: string;
  };
}

/** Quando o motor se cala, ele diz por quê — e o que mostrar no lugar. */
export interface Silencio {
  acao: null;
  motivo: FechamentoId;
  fechamento: string;
  ressalva?: string;
  analytics: {
    tool_id: FerramentaId;
    result_type: string;
    reason: FechamentoId;
    need_bucket: Faixa;
    intent_bucket: Faixa;
  };
}

export type Decisao = Acao | Silencio;

export const ehAcao = (d: Decisao): d is Acao => (d as Acao).tipo !== undefined;

export type Faixa = 'baixa' | 'media' | 'alta';

const faixa = (n: number): Faixa => (n >= 60 ? 'alta' : n >= 30 ? 'media' : 'baixa');

/* ------------------------------------------------------------------ *
 * 4. Os dois escores
 * ------------------------------------------------------------------ */

/**
 * Necessidade — o quanto a pessoa está travada AGORA.
 *
 * Sai só do resultado. Não olha comportamento, não olha jornada: uma pessoa
 * que nunca clicou em nada e recebeu um resultado crítico tem necessidade
 * alta, e é justamente ela que o sistema não pode tratar como lead frio.
 */
export function calcularNecessidade(r: RelatoFerramenta): number {
  let n = 0;

  if (r.nivel === 'critico') n += 55;
  else if (r.nivel === 'atencao') n += 30;
  else if (r.nivel === 'neutro') n += 10;

  if (r.eixo !== 'nenhum') n += 15;

  // Score baixo é o sinal mais direto de necessidade que o portal coleta.
  if (typeof r.pontuacao === 'number') {
    if (r.pontuacao < 40) n += 25;
    else if (r.pontuacao < 60) n += 12;
    else if (r.pontuacao >= 80) n -= 15;
  }

  const f = new Set(r.flags ?? []);
  if (f.has('semTreinoAtual')) n += 10;
  if (f.has('autonomiaAlta')) n -= 10;
  // Resultado apoiado em pouca informação não sustenta necessidade alta.
  if (f.has('dadoFraco')) n -= 12;

  return Math.max(0, Math.min(100, n));
}

/**
 * Intenção comercial — o quanto a pessoa sinalizou querer contratar.
 *
 * Sai só do comportamento declarado: etapas de decisão percorridas, formato
 * escolhido, preço consultado. Nunca do resultado — descobrir um problema
 * não é o mesmo que querer comprar a solução, e tratar as duas coisas como
 * uma só é o que transforma diagnóstico em armadilha.
 */
export function calcularIntencao(r: RelatoFerramenta, m: Mapa): number {
  let i = 0;
  const feito = (id: FerramentaId) => Boolean(m.concluidas[id]);

  // Ferramentas de decisão: quem chega nelas está comparando, não estudando.
  if (feito('personalIdeal')) i += 25;
  if (feito('formato')) i += 25;
  if (feito('preco')) i += 30;

  // A ferramenta que a pessoa acabou de terminar conta igual.
  if (r.ferramenta === 'personalIdeal' && !feito('personalIdeal')) i += 25;
  if (r.ferramenta === 'formato' && !feito('formato')) i += 25;
  if (r.ferramenta === 'preco' && !feito('preco')) i += 30;

  const p = m.perfil;
  if (p.formatoRotulo) i += 10;
  if (p.faixaPreco) i += 10;

  const f = new Set(r.flags ?? []);
  // Quem já paga por acompanhamento não é candidato a contratar de novo.
  if (f.has('jaTemPersonal')) i -= 30;
  // Orçamento apertado declarado é sinal contrário, não a favor.
  if (f.has('orcamentoLimitante')) i -= 20;

  return Math.max(0, Math.min(100, i));
}

/* ------------------------------------------------------------------ *
 * 5. Mapa de eixo → ferramenta
 * ------------------------------------------------------------------ */

/**
 * Qual ferramenta resolve cada eixo, em ordem de preferência. A segunda
 * opção existe para quando a primeira já foi feita — não como consolo, mas
 * porque ela de fato ataca o mesmo eixo por outro ângulo.
 *
 * A segunda opção de `agenda` é a constância, e não o formato, de propósito:
 * "a semana não cabe" tem resposta de organização antes de ter resposta de
 * contratação. Mandar quem reclamou de agenda direto para a escolha entre
 * presencial e online seria transformar um problema de rotina em uma
 * decisão de compra.
 *
 * `estrutura` tem uma opção só, e isso é resposta e não lacuna: quem audita
 * estrutura de treino é a auditoria, e nenhuma outra ferramenta faz o mesmo
 * por outro ângulo. Quando ela já foi feita, o motor cai para o artigo do
 * próprio resultado — inventar uma segunda ferramenta aqui seria oferecer
 * movimento em vez de utilidade.
 */
const EIXO_FERRAMENTA: Record<EixoProblema, FerramentaId[]> = {
  aderencia: ['constancia', 'rotina'],
  agenda: ['rotina', 'constancia'],
  estrutura: ['auditoria'],
  progressao: ['auditoria', 'personalIdeal'],
  supervisao: ['personalIdeal', 'formato'],
  orcamento: ['preco', 'formato'],
  nenhum: [],
};

const REGRA_POR_EIXO: Record<Exclude<EixoProblema, 'nenhum'>, keyof typeof TEXTOS> = {
  aderencia: 'eixoAderencia',
  agenda: 'eixoAgenda',
  estrutura: 'eixoEstrutura',
  progressao: 'eixoProgressao',
  supervisao: 'eixoSupervisao',
  orcamento: 'eixoOrcamento',
};

/* ------------------------------------------------------------------ *
 * 6. Supressão
 * ------------------------------------------------------------------ */

/**
 * A ferramenta pode ser oferecida?
 *
 * Uma regra só, em um lugar só. Antes disto, cada ferramenta comparava a
 * própria URL com a do bloco de jornada — o que pegava a duplicata literal e
 * deixava passar duas ofertas concorrentes apontando para lugares diferentes.
 */
function ofertavel(id: FerramentaId, r: RelatoFerramenta, m: Mapa, s: ContextoSessao): boolean {
  // Nunca recomendar a ferramenta que a pessoa acabou de usar.
  if (id === r.ferramenta) return false;
  // Nem outra concluída nesta mesma sessão: ela ainda está fresca.
  if ((s.concluidasAgora ?? []).includes(id)) return false;
  // Nem uma já concluída no mapa — refazer não é próximo passo.
  if (m.concluidas[id]) return false;
  return true;
}

/** A regra já cansou por falta de clique? */
const cansada = (regra: string, s: ContextoSessao): boolean =>
  (s.ignorados?.[regra] ?? 0) >= LIMITE_IGNORADOS;

/* ------------------------------------------------------------------ *
 * 7. O motor
 * ------------------------------------------------------------------ */

export interface EntradaNba {
  relato: RelatoFerramenta;
  mapa: Mapa;
  sessao?: ContextoSessao;
  /** URL da página do serviço, para a ação de consultoria. */
  urlConsultoria?: string;
}

/** Necessidade E intenção precisam estar altas para a consultoria entrar. */
export const LIMITE_CONSULTORIA = { necessidade: 45, intencao: 60 } as const;

/**
 * A decisão. Ordem de prioridade explícita, para nunca haver conflito
 * silencioso entre duas regras que se aplicam ao mesmo caso.
 *
 *   100 segurança em saúde
 *    90 já tem acompanhamento
 *    80 o eixo do resultado
 *    60 consultoria (necessidade E intenção altas)
 *    40 conteúdo do próprio resultado
 *    20 continuidade da jornada
 *     — silêncio
 */
export function getProximaAcao(entrada: EntradaNba): Decisao {
  const { relato: r, mapa: m } = entrada;
  const s = entrada.sessao ?? {};
  const flags = new Set(r.flags ?? []);

  const necessidade = calcularNecessidade(r);
  const intencao = calcularIntencao(r, m);
  const comercialBloqueado = flags.has('limitacaoDeclarada');
  const ressalva = comercialBloqueado ? RESSALVA_SAUDE : undefined;

  const vars: VariaveisTexto = {
    dias: m.perfil.diasReais,
    divisao: m.perfil.divisao,
    gargalo: m.perfil.gargaloRotulo ?? (r.eixo !== 'nenhum' ? EIXO_ROTULO[r.eixo] : undefined),
    formato: m.perfil.formatoRotulo,
    cidade: m.perfil.cidadeNome,
    faixa: m.perfil.faixaPreco,
    score: m.perfil.score,
  };

  const calar = (motivo: FechamentoId): Silencio => ({
    acao: null,
    motivo,
    fechamento: FECHAMENTOS[motivo],
    ressalva,
    analytics: {
      tool_id: r.ferramenta,
      result_type: r.tipoResultado,
      reason: motivo,
      need_bucket: faixa(necessidade),
      intent_bucket: faixa(intencao),
    },
  });

  const montar = (
    regra: keyof typeof TEXTOS,
    tipo: TipoAcao,
    url: string,
    prioridade: number,
    rotulo?: string,
    titulo?: string,
  ): Acao => {
    const t = TEXTOS[regra];
    return {
      tipo,
      titulo: titulo ?? preencher(t.titulo, vars),
      texto: preencher(t.texto, vars),
      cta: { rotulo: rotulo ?? t.rotulo, url },
      porque: preencher(t.porque, vars),
      ressalva,
      regra,
      prioridade,
      analytics: {
        tool_id: r.ferramenta,
        result_type: r.tipoResultado,
        action_type: tipo,
        rule: regra,
        axis: r.eixo,
        need_bucket: faixa(necessidade),
        intent_bucket: faixa(intencao),
        destination: url,
      },
    };
  };

  /* --- 100. Resultado bom, necessidade baixa: o melhor CTA é nenhum ------ */
  if (r.nivel === 'bom' && necessidade < 30) return calar('resultadoBom');

  /* --- 90. Já paga por acompanhamento: avaliar o que tem vem antes ------- */
  if (
    flags.has('jaTemPersonal') &&
    ofertavel('score', r, m, s) &&
    !cansada('jaTemPersonal', s)
  ) {
    return montar('jaTemPersonal', 'ferramenta', FERRAMENTAS.score.url, 90);
  }

  /* --- 80. O eixo do resultado manda ------------------------------------ *
   * Esta é a regra que a auditoria mostrou faltar: é aqui que o RESULTADO
   * muda o CTA. Mesma ferramenta, resultados diferentes, destinos
   * diferentes — sem uma linha de regra dentro da ferramenta.
   * ---------------------------------------------------------------------- */
  if (r.eixo !== 'nenhum') {
    const regra = REGRA_POR_EIXO[r.eixo];
    if (!cansada(regra, s)) {
      const alvo = EIXO_FERRAMENTA[r.eixo].find((id) => ofertavel(id, r, m, s));
      if (alvo) {
        const f: Ferramenta = FERRAMENTAS[alvo];
        return montar(regra, 'ferramenta', f.url, 80);
      }
    }
  }

  /* --- 60. Consultoria: as DUAS medidas altas, e nunca com limitação ----- */
  if (
    !comercialBloqueado &&
    !s.consultoriaOfertada &&
    !cansada('consultoria', s) &&
    entrada.urlConsultoria &&
    necessidade >= LIMITE_CONSULTORIA.necessidade &&
    intencao >= LIMITE_CONSULTORIA.intencao
  ) {
    return montar('consultoria', 'consultoria', entrada.urlConsultoria, 60);
  }

  /* --- 40. Conteúdo: a ferramenta do eixo já foi feita ------------------- */
  const artigo = (r.conteudo ?? [])[0];
  if (artigo && !cansada('conteudo', s)) {
    return montar('conteudo', 'conteudo', artigo.url, 40, `Ler: ${artigo.titulo}`, artigo.titulo);
  }

  /* --- 20. Continuidade da jornada -------------------------------------- *
   * O texto vem da própria jornada, que já escreve a ponte narrativa entre
   * a etapa concluída e a seguinte. Reescrevê-lo aqui daria duas versões da
   * mesma frase para manter em sincronia.
   * ---------------------------------------------------------------------- */
  const passo = proximoPasso(m);
  if (passo && ofertavel(passo.ferramenta.id, r, m, s) && !cansada('jornada', s)) {
    return {
      tipo: 'ferramenta',
      titulo: passo.ferramenta.nome,
      texto: passo.porque,
      cta: { rotulo: passo.rotulo, url: passo.ferramenta.url },
      porque: `Próxima etapa do seu mapa: ${etapaDe(passo.ferramenta.id).nome.toLowerCase()}.`,
      ressalva,
      regra: 'jornada',
      prioridade: 20,
      analytics: {
        tool_id: r.ferramenta,
        result_type: r.tipoResultado,
        action_type: 'ferramenta',
        rule: 'jornada',
        axis: r.eixo,
        need_bucket: faixa(necessidade),
        intent_bucket: faixa(intencao),
        destination: passo.ferramenta.url,
      },
    };
  }

  return calar(passo ? 'semAcaoUtil' : 'jornadaCompleta');
}

/* ------------------------------------------------------------------ *
 * 8. Depuração
 * ------------------------------------------------------------------ */

/** Explica a decisão em uma linha. Só painel de desenvolvimento. */
export function explicar(entrada: EntradaNba): string {
  const d = getProximaAcao(entrada);
  const n = calcularNecessidade(entrada.relato);
  const i = calcularIntencao(entrada.relato, entrada.mapa);
  const cabeca = `${entrada.relato.ferramenta}/${entrada.relato.tipoResultado} eixo=${entrada.relato.eixo} nec=${n} int=${i}`;
  return ehAcao(d)
    ? `${cabeca} -> ${d.regra} (${d.tipo}) ${d.cta.url}`
    : `${cabeca} -> silêncio (${d.motivo})`;
}
