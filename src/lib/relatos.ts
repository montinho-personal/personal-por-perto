/**
 * relatos — a tradução do dialeto de cada ferramenta para a língua comum.
 *
 * POR QUE ISTO É UM ARQUIVO SÓ
 *
 * Cada engine nomeia o mesmo problema de um jeito: a constância chama de
 * `capacidadeRotina`, a rotina chama de `tempo`, a auditoria chama de
 * `duracao` — e as três estão dizendo "a semana não comporta". Se cada
 * ferramenta traduzisse a si mesma, a tradução voltaria para dentro dela, que
 * é exatamente o que o motor central existe para evitar.
 *
 * Aqui as engines não são tocadas. Elas continuam devolvendo o que sempre
 * devolveram; este arquivo lê esse resultado e monta o `RelatoFerramenta` que
 * o motor consome. Ferramenta nova = uma função nova aqui, e nada mais.
 *
 * Regra ao escrever um mapa novo: traduza o que o resultado DIZ, nunca o que
 * seria conveniente que ele dissesse. O motor decide; o relato só descreve.
 */
import type { ConstanciaResultado, PilarId } from './constancia';
import type { RotinaRespostas, RotinaResultado, Dificuldade } from './rotinaTreino';
import type { AuditoriaResultado, ProblemaPrincipal, Veredito } from './auditoriaTreino';
import type {
  Conteudo,
  EixoProblema,
  Flag,
  NivelResultado,
  RelatoFerramenta,
} from './proximoPasso';

/* ------------------------------------------------------------------ *
 * Constância
 * ------------------------------------------------------------------ */

/**
 * Os nove pilares da constância, no vocabulário comum.
 *
 * `faltaClareza` vira `estrutura` e não `aderencia` de propósito: quem não
 * sabe o que fazer ao chegar na academia não tem problema de disciplina, tem
 * um treino que não existe no papel.
 */
const PILAR_EIXO: Record<PilarId, EixoProblema> = {
  capacidadeRotina: 'agenda',
  friccaoLogistica: 'agenda',
  sessoesLongas: 'agenda',
  rotinaImprevisivel: 'agenda',
  tudoOuNada: 'aderencia',
  semPlanoB: 'aderencia',
  faltaClareza: 'estrutura',
  semFeedback: 'progressao',
  faltaAcompanhamento: 'supervisao',
};

export function relatoConstancia(r: ConstanciaResultado): RelatoFerramenta {
  const flags: Flag[] = [];
  // Respostas que se contradizem: o motor não deve afirmar demais em cima disso.
  if (r.observacao) flags.push('dadoFraco');

  const nivel: NivelResultado = !r.temGargalo
    ? 'bom'
    : r.secundarios.length >= 2
      ? 'critico'
      : 'atencao';

  // O artigo do gargalo principal responde ao achado; a lista genérica vem
  // depois. A ordem importa: o motor usa o primeiro.
  const conteudo: Conteudo[] = [];
  if (r.principal?.artigo) conteudo.push(r.principal.artigo);
  conteudo.push(...r.conteudo);

  return {
    ferramenta: 'constancia',
    tipoResultado: r.analytics.result_type,
    nivel,
    eixo: r.principal ? PILAR_EIXO[r.principal.id] : 'nenhum',
    flags,
    conteudo,
    perfil: {
      diasReais: r.semana.alvo,
      gargalo: r.principal?.id,
      gargaloRotulo: r.principal?.titulo,
    },
  };
}

/* ------------------------------------------------------------------ *
 * Rotina
 * ------------------------------------------------------------------ */

const DIFICULDADE_EIXO: Record<Dificuldade, EixoProblema> = {
  tempo: 'agenda',
  rotinaMuda: 'agenda',
  constancia: 'aderencia',
  comecoParo: 'aderencia',
  naoSeiFazer: 'estrutura',
  semEvolucao: 'progressao',
  progressao: 'progressao',
  perdidoAcademia: 'supervisao',
};

/**
 * A rotina é a única das três que PRESCREVE em vez de avaliar: ela entrega um
 * plano, não um veredito. Por isso o nível é sempre `neutro` — chamar de
 * "bom" um resultado que não avaliou nada seria calar o motor com base numa
 * conclusão que a ferramenta não tirou.
 */
export function relatoRotina(r: RotinaResultado, resp: RotinaRespostas): RelatoFerramenta {
  const flags: Flag[] = [];
  if (resp.experiencia === 'nunca') flags.push('semTreinoAtual');
  if (resp.experiencia === 'experiente') flags.push('autonomiaAlta');

  return {
    ferramenta: 'rotina',
    tipoResultado: r.analytics.recommended_split,
    nivel: 'neutro',
    eixo: DIFICULDADE_EIXO[resp.dificuldade],
    flags,
    conteudo: r.conteudo,
    perfil: {
      objetivo: r.analytics.goal,
      experiencia: r.analytics.experience,
      diasReais: r.sessoesIdeais,
      divisao: r.divisao.nome,
      cidadeSlug: resp.cidadeSlug,
      cidadeNome: resp.cidadeNome,
    },
  };
}

/* ------------------------------------------------------------------ *
 * Auditoria
 * ------------------------------------------------------------------ */

const VEREDITO_NIVEL: Record<Veredito, NivelResultado> = {
  coerente: 'bom',
  coerenteComRevisar: 'atencao',
  variasQuestoes: 'critico',
};

/**
 * `recuperacao`, `equilibrio`, `prioridade` e `complexidade` caem todos em
 * `estrutura`: são maneiras diferentes de dizer que o programa está mal
 * montado, e todos têm a mesma resposta útil.
 */
const PROBLEMA_EIXO: Record<ProblemaPrincipal, EixoProblema> = {
  aderencia: 'aderencia',
  progressao: 'progressao',
  prioridade: 'estrutura',
  recuperacao: 'estrutura',
  equilibrio: 'estrutura',
  complexidade: 'estrutura',
  duracao: 'agenda',
  nenhum: 'nenhum',
};

/** Acima disto, a ferramenta declarou não conseguir avaliar boa parte do caso. */
const LIMITE_INCONCLUSIVO = 3;

export function relatoAuditoria(r: AuditoriaResultado): RelatoFerramenta {
  const flags: Flag[] = [];
  if (r.naoDaParaConcluir.length >= LIMITE_INCONCLUSIVO) flags.push('dadoFraco');

  const conteudo: Conteudo[] = [];
  const doInsight = r.atencao.find((i) => i.artigo)?.artigo;
  if (doInsight) conteudo.push(doInsight);
  conteudo.push(...r.conteudo);

  return {
    ferramenta: 'auditoria',
    tipoResultado: r.veredito,
    nivel: VEREDITO_NIVEL[r.veredito],
    eixo: PROBLEMA_EIXO[r.problemaPrincipal],
    flags,
    conteudo,
    perfil: {
      objetivo: r.analytics.goal,
      experiencia: r.analytics.experience,
      diasReais: r.diasTreinados,
      gargalo: r.problemaPrincipal !== 'nenhum' ? r.problemaPrincipal : undefined,
    },
  };
}
