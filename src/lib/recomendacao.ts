/**
 * Motor do bloco "Personal por Perto recomenda".
 *
 * Responde a uma pergunta, e a resposta costuma ser não:
 *
 *   depois de ler ESTE conteúdo, existe uma razão lógica para esta pessoa
 *   considerar acompanhamento profissional agora?
 *
 * O QUE A AUDITORIA ENCONTROU
 *
 * O bloco já existia (componente CtaMontinho, rótulo "Recomendação
 * editorial") e o problema não era ausência — era excesso. Estava em 237
 * páginas fixas mais o template de cidade, incluindo 61 de intenção baixa:
 * "Água e emagrecimento", "Creatina: o que é", 40 guias de execução de
 * exercício. Recomendar acompanhamento individual a quem foi buscar como
 * fazer um agachamento é o anúncio disfarçado que o projeto não quer.
 *
 * Este motor inverte a lógica: o bloco só aparece onde há contexto
 * declarado em CONTEXTOS. Sem contexto, `null` — sem exceções e sem
 * fallback. Relevância acima de cobertura.
 *
 * COORDENAÇÃO COM OS OUTROS COMPONENTES
 *
 * O portal já tem CTA contextual, sticky bar e slide-in. Se os quatro
 * apontarem para o Montinho, o efeito é fadiga, não confiança. A divisão de
 * papéis é esta:
 *
 *   CTA contextual · sticky bar · slide-in  ->  FERRAMENTA
 *   bloco editorial                         ->  PROFISSIONAL
 *
 * Uma tentativa anterior de garantir isso consultando o ctaEngine foi
 * descartada: o motor responde o que ele DECIDIRIA numa posição, não o que
 * a página de fato renderiza. Nas páginas de cidade, que são o piloto, ele
 * respondia "comercial no fim" — posição que aquele template nem usa — e o
 * bloco desaparecia justamente das páginas de maior intenção. Consultar
 * hipótese em vez de realidade suprime o que não devia.
 *
 * A coordenação real é estrutural: a escada de posição do ctaEngine já
 * reserva o comercial para o fim das páginas locais, e é exatamente ali que
 * este bloco entra — um só, no lugar de dois.
 */
import { classificarPagina, type Classificacao } from './ctaTaxonomia';
import { cidadePorBairro } from '../data/bairros';
import {
  CONTEXTOS,
  TOPICOS_SEM_BLOCO,
  type ContextoRec,
  type VarianteRec,
} from '../data/recomendacaoContextos';

export interface ContextoRecomendacao {
  path: string;
  /** Locução flexionada do lugar ("no Recife"), nas páginas locais. */
  localidade?: string;
}

export interface Recomendacao {
  /** Identificador estável do contexto — vai para o analytics. */
  contexto: string;
  /** As três pontes; o componente renderiza a sorteada. */
  pontes: Record<VarianteRec, string>;
  classificacao: Classificacao;
  intencao: 'baixa' | 'media' | 'alta';
  motivo: string;
}

const normalizar = (p: string) => (p.endsWith('/') ? p : `${p}/`);
const INTENCAO = { tofu: 'baixa', mofu: 'media', bofu: 'alta' } as const;

export function getRecomendacao(ctx: ContextoRecomendacao): Recomendacao | null {
  const path = normalizar(ctx.path);
  const cls = classificarPagina(path, (b) => cidadePorBairro[b]);

  // Páginas institucionais e a própria página do Montinho: a recomendação
  // ou não cabe, ou seria apontar para onde a pessoa já está.
  if (cls.tipo === 'institucional' || cls.tipo === 'ferramenta') return null;
  if (TOPICOS_SEM_BLOCO.includes(cls.topico)) return null;

  const contexto: ContextoRec | undefined = CONTEXTOS[cls.topico];
  if (!contexto) return null;

  const local = ctx.localidade;
  return {
    contexto: contexto.id,
    pontes: {
      direta: contexto.pontes.direta(local),
      problema: contexto.pontes.problema(local),
      decisao: contexto.pontes.decisao(local),
    },
    classificacao: cls,
    intencao: INTENCAO[cls.funil],
    motivo: `contexto ${contexto.id} (${cls.topico}, ${cls.funil})`,
  };
}
