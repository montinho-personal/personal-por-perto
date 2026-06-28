/** Configuração global do portal. Fonte única de verdade para metadados. */

export const site = {
  nome: 'Personal por Perto',
  nomeCompleto: 'Personal por Perto — Guia de Personal Trainers por Cidade',
  dominio: 'https://www.personalporperto.com.br',
  descricao:
    'O guia editorial independente que ajuda você a encontrar e escolher um personal trainer na sua cidade. Panorama local, faixas de preço, tipos de treino e como avaliar o profissional certo.',
  slogan: 'O guia de quem leva o treino a sério.',
  idioma: 'pt-BR',
  locale: 'pt_BR',
  /** Usado em Organization schema e rodapé. */
  email: 'contato@personalporperto.com.br',
  twitter: '@personalporperto',
  /** Ano de fundação editorial do portal. */
  fundadoEm: 2024,
} as const;

/** CTA principal do portal: levar visitas qualificadas ao Montinho Personal. */
export const cta = {
  url: 'https://montinhopersonal.com.br',
  rotuloPrimario: 'Conhecer o trabalho do Montinho Personal',
  rotuloSecundario: 'Ver acompanhamento online',
} as const;

/** Navegação principal. */
export const navPrincipal = [
  { rotulo: 'Cidades', url: '/personal-trainer' },
  { rotulo: 'Guias', url: '/guias' },
  { rotulo: 'Como escolher', url: '/guias/como-escolher-personal-trainer' },
  { rotulo: 'Quanto custa', url: '/guias/quanto-custa-personal-trainer' },
  { rotulo: 'Sobre', url: '/sobre' },
] as const;
