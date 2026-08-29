/**
 * Motor de CTA contextual.
 *
 * Responde a uma pergunta só: qual é o melhor próximo passo para esta
 * pessoa, nesta página? Função pura, determinística, sem DOM e sem
 * dependência de framework — a interface apenas renderiza o que sai daqui.
 *
 * Duas decisões de projeto merecem registro:
 *
 * 1. `null` é uma resposta legítima. Em conteúdo de humor, em página
 *    institucional e onde a página já traz um CTA manual, o melhor CTA
 *    comercial é nenhum. O motor precisa poder dizer isso.
 *
 * 2. Quando existe ferramenta relevante, o caminho preferido é
 *    artigo -> ferramenta -> resultado -> Montinho, e não artigo -> venda.
 *    A venda direta fica reservada às páginas de intenção comercial real.
 *
 * A ordem das regras é explícita (ver PRIORIDADE) para que nunca haja
 * conflito silencioso, e toda decisão carrega `regra` e `motivo` — em
 * desenvolvimento dá para saber por que aquele CTA apareceu.
 */
import { campanhas, type Campanha, type VarianteCta } from '../data/ctaCampanhas';
import { features } from '../data/features';
import { coberturaPresencial } from '../data/atendimentoPresencial';
import { cidadePorBairro } from '../data/bairros';
import { classificarPagina, type Classificacao, type Funil, type Topico } from './ctaTaxonomia';
import { ctaOverrides } from '../data/ctaOverrides';

export interface ContextoCta {
  /** Caminho da página, com ou sem barra final. */
  path: string;
  cidadeNome?: string;
  uf?: string;
  /** Locução flexionada ("no Rio de Janeiro"). */
  localidade?: string;
  /** Título do conteúdo, usado na mensagem do WhatsApp. */
  assunto?: string;
  /** A página já traz um CTA comercial próprio? Então o motor se cala. */
  temCtaManual?: boolean;
}

export interface DecisaoCta {
  campanha: Campanha;
  variante: VarianteCta;
  classificacao: Classificacao;
  /** Identificador da regra que decidiu — aparece no atributo de debug. */
  regra: string;
  /** Explicação legível da decisão. */
  motivo: string;
  /** Dados não sensíveis para o analytics. */
  tracking: {
    cta_campaign: string;
    cta_variant: VarianteCta;
    page_type: string;
    content_category: Topico;
    funnel_stage: Funil;
    city?: string;
    state?: string;
  };
}

/**
 * PRIORIDADE (do mais forte ao mais fraco)
 *  1. Override manual da página
 *  2. Segurança editorial (humor, institucional, CTA manual já presente)
 *  3. Contexto local com atendimento presencial
 *  4. Contexto local fora da área
 *  5. Intenção BOFU (preço, contratação, público específico)
 *  6. Ferramenta temática (rotina, emagrecimento, hipertrofia, iniciante…)
 *  7. Categoria
 *  8. Fallback
 */

/** Resolve a campanha caindo para a alternativa quando a flag está desligada. */
function resolver(id: string, alternativa?: string): Campanha | null {
  const c = campanhas[id];
  if (!c) return alternativa ? resolver(alternativa) : null;
  if (c.requer && !features[c.requer]) {
    return alternativa ? resolver(alternativa) : null;
  }
  return c;
}

const normalizar = (path: string) => (path.endsWith('/') ? path : `${path}/`);

export function getContextualCTA(ctx: ContextoCta): DecisaoCta | null {
  const path = normalizar(ctx.path);
  const cls = classificarPagina(path, (b) => cidadePorBairro[b]);

  const decidir = (
    campanha: Campanha | null,
    variante: VarianteCta,
    regra: string,
    motivo: string,
  ): DecisaoCta | null => {
    if (!campanha) return null;
    return {
      campanha,
      variante,
      classificacao: cls,
      regra,
      motivo,
      tracking: {
        cta_campaign: campanha.id,
        cta_variant: variante,
        page_type: cls.tipo,
        content_category: cls.topico,
        funnel_stage: cls.funil,
        city: cls.cidadeSlug,
        state: ctx.uf,
      },
    };
  };

  /* ---- Prioridade 1: override manual ---- */
  const override = ctaOverrides[path];
  if (override) {
    if (override.desativado) return null;
    const c = resolver(override.campanha ?? '', 'personalMatch');
    return decidir(c, override.variante ?? 'endArticle', 'OVERRIDE', 'override manual da página');
  }

  /* ---- Prioridade 2: segurança editorial ---- */
  if (cls.topico === 'humor') {
    // Regra fixa do projeto: humor não carrega consultoria no corpo.
    return null;
  }
  if (cls.topico === 'institucional' || cls.tipo === 'ferramenta') {
    return null;
  }
  if (ctx.temCtaManual) {
    return null;
  }
  if (cls.topico === 'dor-saude') {
    // Conteúdo sensível: nada de explorar medo nem sugerir diagnóstico.
    return decidir(
      resolver('retomadaSegura'),
      'subtle',
      'SEGURANCA_DOR',
      'conteúdo sensível: CTA discreto, educacional e sem promessa clínica',
    );
  }

  /* ---- Prioridade 3 e 4: contexto local ---- */
  if (cls.tipo === 'cidade' || cls.tipo === 'bairro') {
    const cobertura = coberturaPresencial(cls.cidadeSlug);
    if (cobertura === 'atende') {
      return decidir(
        resolver('localPresencial'),
        'local',
        'LOCAL_01',
        'cidade dentro da área de atendimento presencial',
      );
    }
    if (cobertura === 'condicional') {
      return decidir(
        resolver('localPresencialCondicional'),
        'local',
        'LOCAL_02',
        'presencial possível, mas dependente de região e horário: copy sem promessa',
      );
    }
    return decidir(
      resolver('onlineCoaching'),
      'local',
      'LOCAL_03',
      'fora da área presencial: oferecer online sem fingir atendimento local',
    );
  }

  if (cls.tipo === 'estado' || (cls.tipo === 'hub' && cls.topico === 'local-comercial')) {
    return decidir(
      resolver('personalMatch'),
      'standard',
      'LOCAL_04',
      'página local ampla: diagnóstico serve melhor que oferta de uma cidade só',
    );
  }

  /* ---- Prioridade 5: intenção comercial alta ---- */
  if (cls.topico === 'preco-contratacao') {
    return decidir(
      resolver('precoComparacao', 'personalMatch'),
      'endArticle',
      'BOFU_PRECO',
      'intenção de preço: comparar formatos antes de comparar valores',
    );
  }
  if (cls.topico === 'publico-especifico') {
    return decidir(
      resolver('personalMatch'),
      'endArticle',
      'BOFU_PUBLICO',
      'guia de público específico: alta intenção de contratar, decisão de formato ainda aberta',
    );
  }
  if (cls.topico === 'escolha-decisao' && cls.funil !== 'tofu') {
    return decidir(
      resolver('personalMatch'),
      'featured',
      'MOFU_ESCOLHA',
      'página de decisão: a ferramenta é literalmente o próximo passo',
    );
  }

  /* ---- Prioridade 6: ferramenta temática ---- */
  const porTopico: Partial<Record<Topico, { id: string; alt?: string; regra: string; motivo: string }>> = {
    'avaliacao-acompanhamento': {
      id: 'scoreAcompanhamento',
      alt: 'personalMatch',
      regra: 'TEMA_ACOMPANHAMENTO',
      motivo: 'quem já contratou não quer escolher formato: quer saber se o que recebe está de pé',
    },
    'rotina-tempo': {
      id: 'rotinaTreino',
      alt: 'personalMatch',
      regra: 'TEMA_ROTINA',
      motivo: 'conteúdo de rotina: adequar treino ao tempo real disponível',
    },
    'constancia-aderencia': {
      id: 'constanciaDiagnostico',
      alt: 'rotinaTreino',
      regra: 'TEMA_CONSTANCIA',
      motivo: 'quem lê sobre não desistir quer saber por que para, não como dividir o treino',
    },
    emagrecimento: {
      id: 'emagrecimentoEstrategia',
      regra: 'TEMA_EMAGRECIMENTO',
      motivo: 'o gargalo do emagrecimento costuma ser manutenção, não informação',
    },
    hipertrofia: {
      id: 'hipertrofiaEstrutura',
      regra: 'TEMA_HIPERTROFIA',
      motivo: 'hipertrofia depende de sistema (volume, frequência, progressão)',
    },
    iniciantes: {
      id: 'inicianteComecar',
      regra: 'TEMA_INICIANTE',
      motivo: 'iniciante: baixa pressão, foco em dar o primeiro passo',
    },
    'execucao-exercicio': {
      id: 'execucaoProximoPasso',
      regra: 'TEMA_EXECUCAO',
      motivo: 'a pessoa veio aprender o exercício: CTA só depois da resposta, e sobre o treino inteiro',
    },
    farmacologico: {
      id: 'farmacologicoMassa',
      regra: 'TEMA_FARMACO',
      motivo: 'emagrecimento acelerado: ênfase em preservar massa, sem alegação médica',
    },
    'nutricao-suplementos': {
      id: 'personalMatch',
      regra: 'TEMA_NUTRICAO',
      motivo: 'conteúdo de suporte: diagnóstico é o passo natural',
    },
  };

  const tema = porTopico[cls.topico];
  if (tema) {
    const variante: VarianteCta = cls.topico === 'execucao-exercicio' ? 'subtle' : 'endArticle';
    return decidir(resolver(tema.id, tema.alt), variante, tema.regra, tema.motivo);
  }

  /* ---- Prioridade 7 e 8: categoria e fallback ---- */
  return decidir(
    resolver('personalMatch'),
    'standard',
    'FALLBACK',
    'sem correspondência específica: diagnóstico é o passo mais seguro',
  );
}

/** Resolve título/texto que podem depender da cidade. */
export function textoCampanha(
  valor: Campanha['titulo'],
  ctx: { cidadeNome?: string; localidade?: string },
): string {
  return typeof valor === 'function' ? valor(ctx) : valor;
}
