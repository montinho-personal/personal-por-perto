/**
 * Motor da sticky bar.
 *
 * Responde a uma pergunta só: qual é o próximo passo desta pessoa, nesta
 * página, resumido em uma linha? Função pura, determinística, sem DOM —
 * a interface apenas renderiza o que sai daqui, e o teste consegue varrer
 * as 1.262 páginas sem navegador.
 *
 * DECISÃO DE PROJETO: este motor NÃO classifica página.
 *
 * O portal já tem `classificarPagina` cobrindo todas as rotas por regra
 * (tipo, tópico, estágio de funil, cidade). Criar um segundo classificador
 * — por heading, por tag, por lista de URL — daria dois mapas do mesmo
 * território, que divergem no primeiro artigo publicado depois. Aqui só
 * se decide a mensagem; a leitura do contexto é emprestada.
 *
 * HIERARQUIA DE INTENÇÃO
 *
 *   baixa (tofu)  -> ferramenta leve ou conteúdo
 *   média (mofu)  -> diagnóstico
 *   alta  (bofu)  -> ainda diagnóstico, quase sempre
 *
 * A última linha não é engano. Mesmo em intenção alta o caminho preferido
 * é conteúdo -> ajuda -> diagnóstico -> recomendação, e não conteúdo ->
 * venda: quem chega numa página de cidade está escolhendo profissional, não
 * pedindo orçamento. A venda direta já tem lugar próprio — o bloco de CTA
 * no fim do artigo e a página do Montinho. A barra é o convite, não o caixa.
 *
 * ONDE A BARRA SE CALA (`null`)
 *
 *   humor          — regra editorial fixa do projeto
 *   institucional  — política, privacidade, sobre, e a página do Montinho
 *   ferramenta     — tratado à parte: avança a jornada, não repete a página
 */
import { classificarPagina, type Classificacao } from './ctaTaxonomia';
import { bairros, cidadePorBairro } from '../data/bairros';
import { getCidade } from '../data/cidades';
import { emCidade } from './gramatica';
import { coberturaPresencial } from '../data/atendimentoPresencial';
import { features } from '../data/features';
import { ferramentaPorSlug, ETAPAS, FERRAMENTAS, type FerramentaId } from './jornada';
import {
  REGRAS,
  PADRAO,
  LOCAL_ATENDE,
  LOCAL_FORA,
  LIMITE_MENSAGEM,
  type RegraSticky,
  type VarianteSticky,
} from '../data/stickyMensagens';

export interface ContextoSticky {
  /** Caminho da página, com ou sem barra final. */
  path: string;
}

export interface Sticky {
  /** Identificador estável da regra — o que vai para o analytics. */
  regra: string;
  /**
   * As três formulações, todas renderizadas no HTML.
   *
   * O site é estático: se o servidor escolhesse a variante, o teste A/B
   * mediria o cache, não as pessoas. O componente entrega as três em
   * data-attributes e o cliente sorteia uma antes da barra aparecer —
   * como ela nasce escondida, ninguém vê a troca.
   */
  mensagens: Record<VarianteSticky, string>;
  rotulo: string;
  destino: string;
  ressalva?: string;
  classificacao: Classificacao;
  /** Estágio de intenção, já traduzido para o vocabulário do briefing. */
  intencao: 'baixa' | 'media' | 'alta';
  /** Por que esta barra apareceu — visível no atributo de debug. */
  motivo: string;
}

const normalizar = (p: string) => (p.endsWith('/') ? p : `${p}/`);

const INTENCAO = { tofu: 'baixa', mofu: 'media', bofu: 'alta' } as const;

/** Descarta a regra quando a ferramenta exigida ainda não está no ar. */
function disponivel(requer?: keyof typeof features): boolean {
  return !requer || features[requer];
}

/**
 * Próxima ferramenta da jornada depois desta.
 *
 * Numa página de ferramenta, repetir a própria ferramenta é o erro óbvio;
 * o menos óbvio é mandar para o hub, que devolve a pessoa a um menu depois
 * de ela já ter escolhido. A ordem das ETAPAS resolve: existe um passo
 * seguinte definido, e ele é o convite.
 *
 * O cliente pode refinar este destino lendo o mapa salvo (pulando etapas já
 * concluídas) uma única vez, antes da barra aparecer — nunca depois, para
 * não trocar o texto embaixo de quem está lendo.
 */
/**
 * Locução flexionada do lugar: "em Recife", "no Rio de Janeiro", "no Batel".
 *
 * Resolvida aqui, e não recebida por propriedade, para que a barra funcione
 * nas 1.075 páginas locais sem editar nenhuma delas. Em bairro usa-se o
 * nome do bairro — quem lê sobre o Batel não quer ler "em Curitiba".
 */
const locucaoPorBairro: Record<string, string> = Object.fromEntries(
  bairros.map((b) => [b.slug, b.locucao]),
);

function localidadeDe(cls: Classificacao, path: string): string | undefined {
  if (cls.tipo === 'bairro') {
    return locucaoPorBairro[path.replace(/^\/|\/$/g, '')];
  }
  const c = cls.cidadeSlug ? getCidade(cls.cidadeSlug) : undefined;
  return c ? emCidade(c) : undefined;
}

function proximaFerramenta(slugAtual: string): FerramentaId | null {
  const atual = ferramentaPorSlug(slugAtual);
  if (!atual) return null;
  const i = ETAPAS.findIndex((e) => e.id === atual.etapa);
  if (i < 0 || i + 1 >= ETAPAS.length) return null;
  const proxima = ETAPAS[i + 1].id;
  const alvo = Object.values(FERRAMENTAS).find((f) => f.etapa === proxima);
  return alvo ? alvo.id : null;
}

export function getSticky(ctx: ContextoSticky): Sticky | null {
  const path = normalizar(ctx.path);
  const cls = classificarPagina(path, (b) => cidadePorBairro[b]);
  const intencao = INTENCAO[cls.funil];

  const montar = (
    r: Pick<RegraSticky, 'id' | 'rotulo' | 'destino' | 'ressalva'>,
    mensagens: Record<VarianteSticky, string>,
    motivo: string,
  ): Sticky => ({
    regra: r.id,
    mensagens,
    rotulo: r.rotulo,
    destino: r.destino,
    ressalva: r.ressalva,
    classificacao: cls,
    intencao,
    motivo,
  });

  const padrao = (motivo: string) => montar(PADRAO, PADRAO.mensagem, motivo);

  /* ---- Silêncio deliberado ---- */
  if (cls.topico === 'humor') return null;
  if (cls.topico === 'institucional' || cls.tipo === 'institucional') return null;

  /* ---- Páginas de ferramenta: avança a jornada ---- */
  if (cls.tipo === 'ferramenta') {
    const slug = path.replace(/^\/ferramentas\//, '').replace(/\/$/, '');
    // O hub /ferramentas/ É o mapa. Uma barra apontando para a página em
    // que a pessoa já está não ajuda ninguém — aqui o silêncio é a resposta.
    if (!slug) return null;
    const prox = proximaFerramenta(slug);
    if (!prox) return null; // última etapa da jornada: nada a oferecer depois
    const f = FERRAMENTAS[prox];
    return montar(
      {
        id: `jornada:${prox}`,
        rotulo: 'Ver próxima etapa',
        destino: f.url,
      },
      {
        pergunta: 'Quer seguir para a próxima etapa?',
        beneficio: `Próxima etapa: ${f.curto.toLowerCase()}`,
        problema: 'Terminou aqui e não sabe o que vem depois?',
      },
      `página de ferramenta: oferece a etapa seguinte (${f.curto}), nunca a mesma`,
    );
  }

  /* ---- Páginas locais: a cobertura presencial decide a mensagem ---- */
  if (cls.tipo === 'cidade' || cls.tipo === 'bairro') {
    const local = localidadeDe(cls, path);
    if (!local) return padrao('página local sem locução de cidade disponível');
    const dentro = coberturaPresencial(cls.cidadeSlug) !== 'fora';
    const r = dentro ? LOCAL_ATENDE : LOCAL_FORA;
    if (!disponivel(r.requer)) return padrao('ferramenta local indisponível: cai para o mapa');
    const comCidade = {
      pergunta: r.mensagem.pergunta(local),
      beneficio: r.mensagem.beneficio(local),
      problema: r.mensagem.problema(local),
    };
    /*
     * Trava de comprimento.
     *
     * A copy local foi dimensionada para a maior locução de hoje ("em Santo
     * Antônio das Missões", 28 caracteres). Uma cidade nova com nome mais
     * longo estouraria a linha — e ninguém ia reparar até ver a barra
     * quebrada num iPhone. Quando isso acontecer, a página perde a
     * personalização e ganha uma mensagem que cabe, em vez de uma bonita
     * que vaza.
     */
    if (Object.values(comCidade).some((m) => m.length > LIMITE_MENSAGEM)) {
      return padrao(`nome de cidade longo demais para a copy local (${local})`);
    }
    return montar(
      { id: r.id, rotulo: r.rotulo, destino: r.destino },
      comCidade,
      dentro
        ? 'cidade dentro da área presencial: não faz sentido empurrar online'
        : 'fora da área presencial: comparar formatos é o passo honesto',
    );
  }

  /* ---- Entradas amplas: home e hubs de seção ---- */
  if (cls.tipo === 'home' || cls.tipo === 'hub' || cls.tipo === 'estado') {
    return padrao('entrada ampla: o problema ainda não foi nomeado');
  }

  /* ---- Artigos: regra por tópico ---- */
  const regra = REGRAS[cls.topico];
  if (regra && disponivel(regra.requer)) {
    return montar(regra, regra.mensagem, `tópico ${cls.topico} (regra ${cls.regra})`);
  }

  /* ---- Fallback: nunca CTA vazio ---- */
  return padrao('sem regra para o tópico: o mapa é o passo mais seguro');
}
