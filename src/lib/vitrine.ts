/**
 * Vitrine de transformações — leitura do feed do site do Montinho.
 *
 * FONTE ÚNICA: https://www.montinhopersonal.com.br/api/vitrine?origem=ppp
 * Nada é copiado à mão para o repositório: nome, idade, números, história,
 * depoimento, fotos e links vêm do feed a cada build. Aluno novo publicado no
 * site do Montinho aparece aqui no build seguinte, sem mexer em código.
 *
 * `?origem=ppp` é obrigatório: é o que faz o feed devolver os links
 * rastreados deste portal (links.cta e links.todas).
 *
 * QUANDO O FEED FALHA: `carregarVitrine()` devolve null e a seção não
 * renderiza. Não existe dado de reserva — nem fixo no código, nem em cache
 * em disco. Uma vitrine com aluno inventado ou desatualizado é pior que
 * nenhuma.
 *
 * O portal é estático (Astro sem adaptador), então "ler no servidor" aqui é
 * ler no build. A atualização periódica vem de um rebuild agendado (deploy
 * hook) — ver docs/vitrine-transformacoes.md.
 */

export interface FotosTransformacao {
  antes: string;
  depois: string;
  montagem: string;
  largura: number;
  altura: number;
}

export interface Transformacao {
  slug: string;
  nome: string;
  idade: string;
  /** Pode vir null no feed; nesse caso o campo é omitido na página. */
  acompanhamento: string | null;
  resultado: string;
  modalidade: string;
  historia: string;
  depoimento: string;
  fotos: FotosTransformacao;
}

export interface Vitrine {
  aviso: string;
  naoSeCompare: { titulo: string; texto: string };
  links: { cta: string; todas: string };
  transformacoes: Transformacao[];
}

export const URL_FEED_PADRAO = 'https://www.montinhopersonal.com.br/api/vitrine?origem=ppp';

/** Fotos e links só são aceitos deste host — o feed não pode apontar para fora. */
const HOST_MONTINHO = 'www.montinhopersonal.com.br';
const TEMPO_LIMITE_MS = 10_000;

const texto = (v: unknown): v is string => typeof v === 'string' && v.trim().length > 0;
const positivo = (v: unknown): v is number => typeof v === 'number' && Number.isFinite(v) && v > 0;

function urlDoMontinho(v: unknown): v is string {
  if (!texto(v)) return false;
  try {
    const u = new URL(v);
    return u.protocol === 'https:' && u.host === HOST_MONTINHO;
  } catch {
    return false;
  }
}

/** Valida uma transformação; qualquer campo obrigatório faltando descarta o item inteiro. */
function transformacaoValida(t: unknown): Transformacao | null {
  if (!t || typeof t !== 'object') return null;
  const o = t as Record<string, unknown>;
  const f = o.fotos as Record<string, unknown> | undefined;
  if (
    !texto(o.slug) || !texto(o.nome) || !texto(o.idade) || !texto(o.resultado) ||
    !texto(o.modalidade) || !texto(o.historia) || !texto(o.depoimento) ||
    !(o.acompanhamento === null || texto(o.acompanhamento)) ||
    !f || !urlDoMontinho(f.antes) || !urlDoMontinho(f.depois) ||
    !positivo(f.largura) || !positivo(f.altura)
  ) {
    return null;
  }
  return {
    slug: o.slug,
    nome: o.nome,
    idade: o.idade,
    acompanhamento: (o.acompanhamento as string | null) ?? null,
    resultado: o.resultado,
    modalidade: o.modalidade,
    historia: o.historia,
    depoimento: o.depoimento,
    fotos: {
      antes: f.antes,
      depois: f.depois,
      montagem: texto(f.montagem) ? f.montagem : '',
      largura: f.largura,
      altura: f.altura,
    },
  };
}

/** Valida o feed inteiro. Devolve null se faltar o que a seção precisa para existir. */
export function validarVitrine(bruto: unknown): Vitrine | null {
  if (!bruto || typeof bruto !== 'object') return null;
  const o = bruto as Record<string, unknown>;
  const nsc = o.nao_se_compare as Record<string, unknown> | undefined;
  const links = o.links as Record<string, unknown> | undefined;
  if (!texto(o.aviso) || !nsc || !texto(nsc.titulo) || !texto(nsc.texto)) return null;
  if (!links || !urlDoMontinho(links.cta) || !urlDoMontinho(links.todas)) return null;
  if (!Array.isArray(o.transformacoes)) return null;
  const transformacoes = o.transformacoes
    .map(transformacaoValida)
    .filter((t): t is Transformacao => t !== null);
  if (transformacoes.length === 0) return null;
  return {
    aviso: o.aviso,
    naoSeCompare: { titulo: nsc.titulo, texto: nsc.texto },
    links: { cta: links.cta, todas: links.todas },
    transformacoes,
  };
}

let cache: Promise<Vitrine | null> | undefined;

/**
 * Lê o feed uma vez por build (as cinco páginas compartilham a mesma leitura).
 * `VITRINE_FEED_URL` troca a origem — usado para simular o feed fora do ar.
 */
export function carregarVitrine(): Promise<Vitrine | null> {
  if (cache) return cache;
  const url = (import.meta.env.VITRINE_FEED_URL as string | undefined) || URL_FEED_PADRAO;
  cache = (async () => {
    try {
      const resp = await fetch(url, {
        signal: AbortSignal.timeout(TEMPO_LIMITE_MS),
        headers: { accept: 'application/json' },
      });
      if (!resp.ok) {
        console.warn(`[vitrine] feed respondeu ${resp.status}; seção omitida.`);
        return null;
      }
      const dados = validarVitrine(await resp.json());
      if (!dados) console.warn('[vitrine] feed vazio ou inválido; seção omitida.');
      return dados;
    } catch (erro) {
      console.warn(`[vitrine] feed indisponível (${(erro as Error).message}); seção omitida.`);
      return null;
    }
  })();
  return cache;
}
