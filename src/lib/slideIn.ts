/**
 * Motor do slide-in contextual.
 *
 * A pergunta que ele responde não é "o que oferecer nesta página?" — os
 * outros dois componentes já respondem isso. É:
 *
 *   "o que esta página AINDA NÃO está oferecendo, e que ajudaria?"
 *
 * POR QUE ISSO IMPORTA
 *
 * Auditando o portal antes de escrever este arquivo, apareceu o problema
 * real: em todo artigo, a sticky bar e o CTA do corpo apontam para a MESMA
 * ferramenta. Um terceiro componente apontando para lá seria a terceira
 * oferta idêntica na mesma página — cinco campanhas independentes em vez de
 * um ecossistema, que é justamente o que se quer evitar.
 *
 * Daí a regra central: o slide-in consulta os outros dois motores e oferece
 * a ferramenta COMPLEMENTAR. Se não houver uma complementar honesta, ele
 * não aparece. Uma impressão a menos é melhor que uma interrupção
 * irrelevante.
 *
 * As duas ferramentas de treino do portal se encaixam nisso sem forçar:
 *
 *   artigo de estrutura (ABC, frequência)  -> outros ofertam ROTINA
 *                                          -> slide-in oferece AUDITORIA
 *   artigo de hipertrofia (volume, carga)  -> outros ofertam AUDITORIA
 *                                          -> slide-in oferece ROTINA
 *
 * ESCOPO
 *
 * Só as páginas dos blocos ativos em `BLOCOS`. Fora deles, `null`.
 */
import { classificarPagina, type Classificacao } from './ctaTaxonomia';
import { cidadePorBairro } from '../data/bairros';
import { features } from '../data/features';
import { getSticky } from './stickyBar';
import { getContextualCTA } from './ctaEngine';
import {
  BLOCOS,
  REGRAS_SLIDE,
  type RegraSlide,
  type VarianteSlide,
} from '../data/slideInMensagens';

export interface ContextoSlide {
  /** Caminho da página, com ou sem barra final. */
  path: string;
  /** Título do artigo, só para o analytics. */
  tituloArtigo?: string;
}

export interface SlideIn {
  /** Identificador estável da regra. */
  regra: string;
  bloco: string;
  rotulo: string;
  /** Os três títulos; o cliente sorteia um antes de exibir. */
  titulos: Record<VarianteSlide, string>;
  descricao: string;
  botao: string;
  destino: string;
  classificacao: Classificacao;
  /** Estágio de intenção no vocabulário do briefing. */
  intencao: 'baixa' | 'media' | 'alta';
  /** Por que este slide-in existe nesta página. */
  motivo: string;
}

const normalizar = (p: string) => (p.endsWith('/') ? p : `${p}/`);
const INTENCAO = { tofu: 'baixa', mofu: 'media', bofu: 'alta' } as const;

const disponivel = (requer?: keyof typeof features): boolean => !requer || features[requer];

/** A página está em algum bloco ativo? */
function blocoDe(path: string, cls: Classificacao): string | null {
  const secao = path.replace(/^\//, '').split('/')[0];
  const b = BLOCOS.find(
    (x) => x.ativo && x.secao === secao && x.topicos.includes(cls.topico),
  );
  return b ? b.id : null;
}

/**
 * O que os outros componentes já estão oferecendo nesta página.
 *
 * Consultar os motores em vez de repetir as regras deles é o que mantém os
 * três em acordo: quando a sticky bar mudar de destino, o slide-in
 * acompanha sozinho, sem ninguém lembrar de sincronizar duas tabelas.
 */
function jaOferecido(path: string): Set<string> {
  const destinos = new Set<string>();
  const s = getSticky({ path });
  if (s) destinos.add(s.destino);
  for (const pos of ['inicio', 'meio', 'fim'] as const) {
    const c = getContextualCTA({ path, posicao: pos });
    if (c) destinos.add(c.campanha.destino);
  }
  return destinos;
}

export function getSlideIn(ctx: ContextoSlide): SlideIn | null {
  const path = normalizar(ctx.path);
  const cls = classificarPagina(path, (b) => cidadePorBairro[b]);

  const bloco = blocoDe(path, cls);
  if (!bloco) return null;

  const ocupados = jaOferecido(path);

  /*
   * Candidatas em ordem de preferência para este tópico.
   *
   * Quem lê sobre estrutura de treino já vai receber a ferramenta de
   * rotina nos outros componentes; a auditoria é o complemento — e
   * vice-versa. A ordem abaixo é a preferência; o filtro seguinte é que
   * decide de fato.
   */
  const preferencia: RegraSlide[] =
    cls.topico === 'rotina-tempo'
      ? [REGRAS_SLIDE.auditoria, REGRAS_SLIDE.rotina]
      : [REGRAS_SLIDE.rotina, REGRAS_SLIDE.auditoria];

  const escolhida = preferencia.find(
    (r) => disponivel(r.requer) && !ocupados.has(r.destino),
  );

  // Sem complemento honesto: nada a acrescentar que a página já não diga.
  if (!escolhida) return null;

  return {
    regra: escolhida.id,
    bloco,
    rotulo: escolhida.rotulo,
    titulos: escolhida.titulo,
    descricao: escolhida.descricao,
    botao: escolhida.botao,
    destino: escolhida.destino,
    classificacao: cls,
    intencao: INTENCAO[cls.funil],
    motivo: `bloco ${bloco}: os outros componentes já oferecem ${[...ocupados].join(' e ')}; este oferece o complemento`,
  };
}
