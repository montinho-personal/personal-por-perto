/**
 * Exceções manuais do motor de CTA.
 *
 * Automático por padrão, manual quando necessário. Este arquivo é a válvula
 * de escape: quando a regra geral não serve para uma página específica,
 * registre-a aqui em vez de criar exceção no código do motor.
 *
 * A chave é o caminho da página COM barra final.
 *
 * Exemplos de uso:
 *   '/musculacao/algum-artigo/': { desativado: true },
 *   '/guias/outro-artigo/':      { campanha: 'onlineCoaching' },
 *   '/emagrecimento/x/':         { campanha: 'personalMatch', variante: 'subtle' },
 */
import type { VarianteCta } from './ctaCampanhas';

export interface Override {
  /** Remove qualquer CTA desta página. */
  desativado?: boolean;
  /** Força uma campanha específica (id em ctaCampanhas.ts). */
  campanha?: string;
  variante?: VarianteCta;
}

export const ctaOverrides: Record<string, Override> = {
  // A home já tem hero, CTA de ferramenta e recomendação editorial próprios.
  '/': { desativado: true },
};
