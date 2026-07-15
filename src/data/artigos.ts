/**
 * Registro central dos artigos editoriais do portal (usado pelo índice da
 * busca do menu). Ao publicar um artigo novo, registre-o aqui além do hub
 * da categoria.
 */
export interface Artigo {
  titulo: string;
  categoria: 'Guias' | 'Musculação' | 'Emagrecimento' | 'Mounjaro e Treino' | 'Humor fitness';
  url: string;
}

export const artigos: Artigo[] = [
  // Guias
  { categoria: 'Guias', url: '/guias/como-escolher-personal-trainer', titulo: 'Como escolher um personal trainer' },
  { categoria: 'Guias', url: '/guias/quanto-custa-personal-trainer', titulo: 'Quanto custa um personal trainer' },
  { categoria: 'Guias', url: '/guias/personal-online-funciona', titulo: 'Personal trainer online funciona?' },
  { categoria: 'Guias', url: '/guias/quantas-vezes-por-semana-personal-trainer', titulo: 'Quantas vezes por semana treinar com personal trainer' },
  { categoria: 'Guias', url: '/guias/personal-trainer-para-iniciantes', titulo: 'Personal trainer para iniciantes: vale a pena contratar?' },
  { categoria: 'Guias', url: '/guias/personal-trainer-para-emagrecimento', titulo: 'Personal trainer para emagrecimento: como escolher' },
  { categoria: 'Guias', url: '/guias/personal-trainer-para-terceira-idade', titulo: 'Personal trainer para terceira idade: como escolher' },
  { categoria: 'Guias', url: '/guias/vale-a-pena-contratar-personal-trainer', titulo: 'Vale a pena contratar um personal trainer?' },

  // Musculação
  { categoria: 'Musculação', url: '/musculacao/treino-para-iniciantes', titulo: 'Treino de musculação para iniciantes: como começar' },
  { categoria: 'Musculação', url: '/musculacao/hipertrofia-como-funciona', titulo: 'Hipertrofia: como funciona o crescimento muscular' },
  { categoria: 'Musculação', url: '/musculacao/abc-ou-full-body', titulo: 'ABC ou Full Body: qual a melhor divisão de treino' },
  { categoria: 'Musculação', url: '/musculacao/quantas-series-e-repeticoes', titulo: 'Quantas séries e repetições fazer por grupo muscular' },
  { categoria: 'Musculação', url: '/musculacao/progressao-de-carga', titulo: 'Como progredir de carga na musculação' },
  { categoria: 'Musculação', url: '/musculacao/descanso-entre-series', titulo: 'Quanto tempo descansar entre séries' },
  { categoria: 'Musculação', url: '/musculacao/treinar-ate-a-falha', titulo: 'Treinar até a falha funciona?' },
  { categoria: 'Musculação', url: '/musculacao/cardio-e-musculacao-no-mesmo-dia', titulo: 'Cardio e musculação no mesmo dia: como combinar' },
  { categoria: 'Musculação', url: '/musculacao/quanto-tempo-para-ver-resultados', titulo: 'Quanto tempo demora para ver resultados na musculação?' },
  { categoria: 'Musculação', url: '/musculacao/dor-muscular-pos-treino', titulo: 'Dor muscular pós-treino: posso treinar mesmo assim?' },

  // Emagrecimento
  { categoria: 'Emagrecimento', url: '/emagrecimento/como-emagrecer-fazendo-musculacao', titulo: 'Como emagrecer fazendo musculação' },
  { categoria: 'Emagrecimento', url: '/emagrecimento/musculacao-ou-cardio-para-emagrecer', titulo: 'Musculação ou cardio: o que emagrece mais?' },
  { categoria: 'Emagrecimento', url: '/emagrecimento/deficit-calorico-como-funciona', titulo: 'Déficit calórico: como funciona para emagrecer' },
  { categoria: 'Emagrecimento', url: '/emagrecimento/como-preservar-massa-muscular-emagrecendo', titulo: 'Como preservar massa muscular durante o emagrecimento' },
  { categoria: 'Emagrecimento', url: '/emagrecimento/plato-de-emagrecimento', titulo: 'Platô de emagrecimento: por que acontece e o que fazer' },
  { categoria: 'Emagrecimento', url: '/emagrecimento/como-comecar-a-treinar-acima-do-peso', titulo: 'Como começar a treinar estando acima do peso' },
  { categoria: 'Emagrecimento', url: '/emagrecimento/recomposicao-corporal', titulo: 'Recomposição corporal: perder gordura e ganhar músculo ao mesmo tempo' },

  // Mounjaro e Treino
  { categoria: 'Mounjaro e Treino', url: '/mounjaro-e-treino/mounjaro-e-musculacao', titulo: 'Quem usa Mounjaro pode fazer musculação?' },
  { categoria: 'Mounjaro e Treino', url: '/mounjaro-e-treino/como-evitar-perda-de-massa-muscular', titulo: 'Como evitar perda de massa muscular usando Mounjaro' },
  { categoria: 'Mounjaro e Treino', url: '/mounjaro-e-treino/treino-para-quem-usa-mounjaro', titulo: 'Treino para quem usa Mounjaro: como adaptar' },
  { categoria: 'Mounjaro e Treino', url: '/mounjaro-e-treino/fraqueza-para-treinar', titulo: 'Mounjaro dá fraqueza para treinar? O que fazer' },
  { categoria: 'Mounjaro e Treino', url: '/mounjaro-e-treino/cardio-para-quem-usa-mounjaro', titulo: 'Cardio para quem usa Mounjaro: como encaixar sem perder músculo' },

  // Humor fitness
  { categoria: 'Humor fitness', url: '/humor-fitness/perfis-de-memes-fitness', titulo: 'Perfis de memes fitness para seguir no Instagram' },
  { categoria: 'Humor fitness', url: '/humor-fitness/memes-de-academia', titulo: 'Memes de academia: os melhores para mandar no grupo de treino' },
];
