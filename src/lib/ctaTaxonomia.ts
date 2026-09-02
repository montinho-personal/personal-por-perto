/**
 * Taxonomia de intenção do Personal por Perto.
 *
 * Classifica qualquer página do portal a partir do caminho, por regras —
 * não por leitura do título em runtime. São ~1.250 páginas: manter uma
 * planilha manual seria insustentável e desatualizaria no primeiro artigo
 * novo. As regras cobrem o padrão; exceções vivem em ctaOverrides.ts.
 *
 * Nada aqui decide CTA. Isto responde apenas "que página é esta e o que a
 * pessoa provavelmente está tentando resolver". A decisão é do motor.
 */

/** Natureza da página no site. */
export type TipoPagina =
  | 'cidade'
  | 'bairro'
  | 'estado'
  | 'artigo'
  | 'hub'
  | 'ferramenta'
  | 'institucional'
  | 'home';

/** Assunto dominante — o que a pessoa está tentando resolver. */
export type Topico =
  | 'local-comercial'
  | 'preco-contratacao'
  | 'escolha-decisao'
  | 'avaliacao-acompanhamento'
  | 'formato-acompanhamento'
  | 'emagrecimento'
  | 'hipertrofia'
  | 'execucao-exercicio'
  | 'dor-saude'
  | 'iniciantes'
  | 'rotina-tempo'
  | 'constancia-aderencia'
  | 'publico-especifico'
  | 'farmacologico'
  | 'nutricao-suplementos'
  | 'humor'
  | 'institucional';

/** Estágio de intenção comercial. */
export type Funil = 'tofu' | 'mofu' | 'bofu';

/**
 * Intenção de busca — o que a pessoa queria do Google ao chegar aqui.
 *
 * Não é sinônimo de funil. O funil mede quão perto do dinheiro a página
 * está; a intenção mede que TIPO de resposta a pessoa espera. Quem busca
 * "personal trainer em Recife" e quem busca "quanto custa personal" estão
 * ambos em bofu, mas um quer uma lista e o outro quer um número — e o
 * próximo passo certo é diferente para cada um.
 *
 *   informativa   — quer entender algo
 *   comparativa   — está pesando duas opções
 *   transacional  — quer contratar
 *   local         — quer alguém perto
 *   problema      — tem uma dor ou um travamento concreto
 *   ferramenta    — já está numa página de decisão
 */
export type IntencaoBusca =
  | 'informativa'
  | 'comparativa'
  | 'transacional'
  | 'local'
  | 'problema'
  | 'ferramenta';

/**
 * Intenção derivada do tópico. Derivada, e não declarada página a página,
 * porque são 1.262 páginas: uma tabela manual desatualiza no primeiro
 * artigo publicado depois.
 */
const INTENCAO_POR_TOPICO: Record<Topico, IntencaoBusca> = {
  'local-comercial': 'local',
  'preco-contratacao': 'transacional',
  'escolha-decisao': 'comparativa',
  'formato-acompanhamento': 'comparativa',
  'avaliacao-acompanhamento': 'problema',
  'publico-especifico': 'transacional',
  'constancia-aderencia': 'problema',
  'dor-saude': 'problema',
  emagrecimento: 'informativa',
  hipertrofia: 'informativa',
  'execucao-exercicio': 'informativa',
  iniciantes: 'informativa',
  'rotina-tempo': 'problema',
  farmacologico: 'problema',
  'nutricao-suplementos': 'informativa',
  humor: 'informativa',
  institucional: 'informativa',
};

export interface Classificacao {
  tipo: TipoPagina;
  topico: Topico;
  funil: Funil;
  /** O que a pessoa esperava encontrar ao buscar. */
  intencaoBusca: IntencaoBusca;
  /** Slug da cidade quando a página é local (cidade ou bairro). */
  cidadeSlug?: string;
  /** Regra que produziu a classificação — aparece no modo debug. */
  regra: string;
}

/* ------------------------------------------------------------------ *
 * Listas explícitas — só onde a regra por padrão de slug erraria.
 * ------------------------------------------------------------------ */

/** Conteúdo sensível: dor, lesão, doença, saúde delicada. */
const SLUGS_DOR_SAUDE = new Set([
  'treinar-com-dor-lombar',
  'treinar-com-dor-no-joelho',
  'treinar-com-dor-no-ombro',
  'treinar-doente-ou-gripado',
  'dor-muscular-pos-treino',
  'musculacao-e-postura',
  'musculacao-e-ansiedade',
  'alongamento-antes-do-treino',
]);

/** Guias de público específico — intenção comercial de personal, sem ser preço. */
const SLUGS_PUBLICO = new Set([
  'personal-trainer-para-adolescentes',
  'personal-trainer-para-corredores',
  'personal-trainer-para-emagrecimento',
  'personal-trainer-para-gestantes',
  'personal-trainer-para-iniciantes',
  'personal-trainer-para-mulheres',
  'personal-trainer-para-quem-trabalha-a-noite',
  'personal-trainer-para-quem-trabalha-sentado',
  'personal-trainer-para-terceira-idade',
  'personal-trainer-a-domicilio',
  'personal-trainer-em-condominio',
]);

/** Guias de preço e contratação. */
const SLUGS_PRECO = new Set([
  'quanto-custa-personal-trainer',
  'vale-a-pena-contratar-personal-trainer',
  'quantas-vezes-por-semana-personal-trainer',
]);

/** Guias de escolha e decisão de formato. */
const SLUGS_ESCOLHA = new Set(['como-escolher-personal-trainer']);

/**
 * Quem lê "personal online funciona?" já está exatamente na decisão que a
 * ferramenta de formato resolve. O diagnóstico completo é um passo largo
 * demais para essa intenção.
 */
const SLUGS_FORMATO = new Set(['personal-online-funciona']);

/**
 * Quem lê estes já contratou (ou acabou de contratar) alguém. A dúvida não é
 * mais "qual formato escolher", e sim "o que estou recebendo está de pé" —
 * outro CTA, outra ferramenta.
 */
const SLUGS_ACOMPANHAMENTO = new Set(['primeira-aula-com-personal-trainer', 'avaliacao-fisica']);

/** Conteúdo de rotina, tempo e constância. */
const SLUGS_ROTINA = new Set([
  'frequencia-de-treino',
  'melhor-horario-para-treinar',
  'quanto-tempo-de-treino-por-dia',
  'treino-abc-como-montar',
  'abc-ou-full-body',
  'descanso-entre-series',
  'sono-e-ganho-de-massa',
]);

/*
 * Conteúdo de ADERÊNCIA — quem lê aqui não quer saber como dividir o
 * treino: quer saber como não parar. Estava misturado com o de estrutura,
 * e recebia o CTA de montar rotina quando o problema é outro.
 */
const SLUGS_CONSTANCIA = new Set([
  'como-nao-desistir-do-treino',
  'destreino',
  'voltar-a-treinar-depois-de-parar',
  'quanto-tempo-para-ver-resultados',
]);

/** Conteúdo de entrada — quem ainda não treina. */
const SLUGS_INICIANTE = new Set([
  'treino-para-iniciantes',
  'treino-em-casa-para-iniciantes',
  'como-comecar-a-treinar-acima-do-peso',
]);

/** Nutrição e suplementação. */
const SLUGS_NUTRICAO = new Set([
  'creatina-o-que-e-como-tomar',
  'whey-protein-o-que-e-como-tomar',
  'suplementos-que-nao-funcionam',
  'cafeina-pre-treino',
  'agua-e-emagrecimento',
  'alcool-e-emagrecimento',
  'comer-fora-e-dieta',
  'dieta-flexivel',
  'refeicao-livre',
  'deficit-calorico-como-funciona',
]);

/* ------------------------------------------------------------------ *
 * Classificação
 * ------------------------------------------------------------------ */

const semBarras = (path: string) => path.replace(/^\/+|\/+$/g, '');

/**
 * Classifica uma página pelo caminho. `cidadeDeBairro` é injetado pelo
 * chamador (mapa bairro -> cidade) para manter esta função sem dependências.
 *
 * A intenção de busca é anexada no invólucro abaixo, e não em cada um dos
 * 25 pontos de retorno: derivar num lugar só evita que uma rota nova saia
 * com a intenção esquecida.
 */
function classificarBase(
  path: string,
  cidadeDeBairro?: (bairroSlug: string) => string | undefined,
): Omit<Classificacao, 'intencaoBusca'> {
  const p = semBarras(path);
  const partes = p.split('/').filter(Boolean);

  // Home
  if (!partes.length) {
    return { tipo: 'home', topico: 'escolha-decisao', funil: 'mofu', regra: 'HOME' };
  }

  // Cidades: /personal-trainer/<slug>/
  if (partes[0] === 'personal-trainer') {
    if (partes.length === 1) {
      return { tipo: 'hub', topico: 'local-comercial', funil: 'mofu', regra: 'HUB_CIDADES' };
    }
    return {
      tipo: 'cidade',
      topico: 'local-comercial',
      funil: 'bofu',
      cidadeSlug: partes[1],
      regra: 'LOCAL_CIDADE',
    };
  }

  // Bairros: /personal-trainer-<bairro>/ (páginas na raiz)
  if (partes.length === 1 && partes[0].startsWith('personal-trainer-')) {
    return {
      tipo: 'bairro',
      topico: 'local-comercial',
      funil: 'bofu',
      cidadeSlug: cidadeDeBairro?.(partes[0]),
      regra: 'LOCAL_BAIRRO',
    };
  }

  if (partes[0] === 'estado') {
    return {
      tipo: 'estado',
      topico: 'local-comercial',
      funil: 'mofu',
      regra: 'LOCAL_ESTADO',
    };
  }

  if (partes[0] === 'ferramentas') {
    return { tipo: 'ferramenta', topico: 'escolha-decisao', funil: 'mofu', regra: 'FERRAMENTA' };
  }

  // Páginas institucionais e utilitárias: nunca recebem CTA comercial.
  if (['sobre', 'privacidade', 'como-avaliamos', '404', 'montinho-personal'].includes(partes[0])) {
    return { tipo: 'institucional', topico: 'institucional', funil: 'tofu', regra: 'INSTITUCIONAL' };
  }

  const secao = partes[0];
  const slug = partes[partes.length - 1];
  const ehHub = partes.length === 1;

  // Humor: regra editorial fixa do projeto — nada de consultoria no corpo.
  if (secao === 'humor-fitness') {
    return {
      tipo: ehHub ? 'hub' : 'artigo',
      topico: 'humor',
      funil: 'tofu',
      regra: 'HUMOR',
    };
  }

  if (ehHub) {
    const topicoHub: Record<string, Topico> = {
      musculacao: 'hipertrofia',
      emagrecimento: 'emagrecimento',
      guias: 'escolha-decisao',
      'mounjaro-e-treino': 'farmacologico',
    };
    return {
      tipo: 'hub',
      topico: topicoHub[secao] ?? 'escolha-decisao',
      funil: 'mofu',
      regra: 'HUB_SECAO',
    };
  }

  // ---- Artigos ----
  if (SLUGS_DOR_SAUDE.has(slug)) {
    return { tipo: 'artigo', topico: 'dor-saude', funil: 'tofu', regra: 'ART_DOR' };
  }
  if (SLUGS_PRECO.has(slug)) {
    return { tipo: 'artigo', topico: 'preco-contratacao', funil: 'bofu', regra: 'ART_PRECO' };
  }
  if (SLUGS_ESCOLHA.has(slug)) {
    return { tipo: 'artigo', topico: 'escolha-decisao', funil: 'mofu', regra: 'ART_ESCOLHA' };
  }
  if (SLUGS_FORMATO.has(slug)) {
    return { tipo: 'artigo', topico: 'formato-acompanhamento', funil: 'mofu', regra: 'ART_FORMATO' };
  }
  if (SLUGS_ACOMPANHAMENTO.has(slug)) {
    return { tipo: 'artigo', topico: 'avaliacao-acompanhamento', funil: 'mofu', regra: 'ART_ACOMPANHAMENTO' };
  }
  if (SLUGS_PUBLICO.has(slug)) {
    return { tipo: 'artigo', topico: 'publico-especifico', funil: 'bofu', regra: 'ART_PUBLICO' };
  }
  if (SLUGS_INICIANTE.has(slug)) {
    return { tipo: 'artigo', topico: 'iniciantes', funil: 'tofu', regra: 'ART_INICIANTE' };
  }
  if (SLUGS_CONSTANCIA.has(slug)) {
    return { tipo: 'artigo', topico: 'constancia-aderencia', funil: 'mofu', regra: 'ART_CONSTANCIA' };
  }
  if (SLUGS_ROTINA.has(slug)) {
    return { tipo: 'artigo', topico: 'rotina-tempo', funil: 'mofu', regra: 'ART_ROTINA' };
  }
  if (SLUGS_NUTRICAO.has(slug)) {
    return { tipo: 'artigo', topico: 'nutricao-suplementos', funil: 'tofu', regra: 'ART_NUTRICAO' };
  }
  if (secao === 'mounjaro-e-treino') {
    return { tipo: 'artigo', topico: 'farmacologico', funil: 'mofu', regra: 'ART_FARMACO' };
  }
  // Execução de exercício: o padrão de slug é confiável e cobre ~45 páginas.
  if (/-como-fazer$/.test(slug) || slug === 'cadeira-adutora-e-abdutora' || slug === 'pegada-e-antebraco') {
    return { tipo: 'artigo', topico: 'execucao-exercicio', funil: 'tofu', regra: 'ART_EXECUCAO' };
  }
  if (secao === 'emagrecimento') {
    return { tipo: 'artigo', topico: 'emagrecimento', funil: 'mofu', regra: 'ART_EMAGRECIMENTO' };
  }
  if (secao === 'musculacao') {
    return { tipo: 'artigo', topico: 'hipertrofia', funil: 'mofu', regra: 'ART_HIPERTROFIA' };
  }
  if (secao === 'guias') {
    return { tipo: 'artigo', topico: 'escolha-decisao', funil: 'mofu', regra: 'ART_GUIA' };
  }

  return { tipo: 'artigo', topico: 'escolha-decisao', funil: 'tofu', regra: 'FALLBACK' };
}

export function classificarPagina(
  path: string,
  cidadeDeBairro?: (bairroSlug: string) => string | undefined,
): Classificacao {
  const base = classificarBase(path, cidadeDeBairro);
  /*
   * Duas exceções em que o tipo de página fala mais alto que o tópico:
   * uma página de ferramenta é sempre intenção de ferramenta, e um hub
   * local é navegação local, não a transação de uma cidade específica.
   */
  const intencaoBusca =
    base.tipo === 'ferramenta'
      ? 'ferramenta'
      : base.tipo === 'cidade' || base.tipo === 'bairro' || base.tipo === 'estado'
        ? 'local'
        : INTENCAO_POR_TOPICO[base.topico];
  return { ...base, intencaoBusca };
}
