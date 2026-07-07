/** Configuração global do portal. Fonte única de verdade para metadados. */

export const site = {
  nome: 'Personal por Perto',
  nomeCompleto: 'Personal por Perto — Guia de Personal Trainers por Cidade',
  dominio: 'https://www.personalporperto.com.br',
  descricao:
    'Portal editorial independente sobre personal trainer no Brasil: ajuda você a encontrar profissionais por cidade e a escolher com segurança, com panorama local, faixas de preço e guias práticos de avaliação.',
  slogan: 'O guia de quem leva o treino a sério.',
  idioma: 'pt-BR',
  locale: 'pt_BR',
  /** Usado em Organization schema e rodapé. */
  email: 'contato@personalporperto.com.br',
  twitter: '@personalporperto',
  /** Ano de fundação editorial do portal. */
  fundadoEm: 2024,
  /**
   * ID de medição do Google Analytics 4 (formato "G-XXXXXXXXXX").
   * Deixe vazio para não carregar analytics. Por conformidade com a LGPD,
   * o GA4 só é ativado depois que o visitante aceita os cookies no aviso.
   */
  analyticsId: 'G-FJNT72KRYY',
  /**
   * Perfis oficiais em redes sociais. Alimentam o `sameAs` do schema
   * Organization (sinal de credibilidade para IAs/GEO) e os links do rodapé.
   * Cole aqui apenas URLs reais e verificáveis — quando o array estiver vazio,
   * o `sameAs` simplesmente não é emitido. Ex.:
   *   { rede: 'Instagram', url: 'https://www.instagram.com/personalporperto' },
   */
  redes: [] as { rede: string; url: string }[],
} as const;

/** CTA principal do portal: levar visitas qualificadas ao Montinho Personal. */
export const cta = {
  url: 'https://montinhopersonal.com.br',
  rotuloPrimario: 'Conhecer o trabalho do Montinho Personal',
  rotuloSecundario: 'Ver acompanhamento online',
} as const;

/** Navegação principal. */
export const navPrincipal = [
  { rotulo: 'Encontrar Personal', url: '/personal-trainer' },
  { rotulo: 'Musculação', url: '/musculacao' },
  { rotulo: 'Emagrecimento', url: '/emagrecimento' },
  { rotulo: 'Guias', url: '/guias' },
  { rotulo: 'Sobre', url: '/sobre' },
] as const;
