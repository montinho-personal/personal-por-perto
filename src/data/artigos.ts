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
  { categoria: 'Guias', url: '/guias/como-escolher-personal-trainer/', titulo: 'Como escolher um personal trainer' },
  { categoria: 'Guias', url: '/guias/quanto-custa-personal-trainer/', titulo: 'Quanto custa um personal trainer' },
  { categoria: 'Guias', url: '/guias/personal-online-funciona/', titulo: 'Personal trainer online funciona?' },
  { categoria: 'Guias', url: '/guias/quantas-vezes-por-semana-personal-trainer/', titulo: 'Quantas vezes por semana treinar com personal trainer' },
  { categoria: 'Guias', url: '/guias/personal-trainer-para-iniciantes/', titulo: 'Personal trainer para iniciantes: vale a pena contratar?' },
  { categoria: 'Guias', url: '/guias/personal-trainer-para-emagrecimento/', titulo: 'Personal trainer para emagrecimento: como escolher' },
  { categoria: 'Guias', url: '/guias/personal-trainer-para-terceira-idade/', titulo: 'Personal trainer para terceira idade: como escolher' },
  { categoria: 'Guias', url: '/guias/vale-a-pena-contratar-personal-trainer/', titulo: 'Vale a pena contratar um personal trainer?' },
  { categoria: 'Guias', url: '/guias/personal-trainer-a-domicilio/', titulo: 'Personal trainer a domicílio: como funciona e quanto custa' },

  // Musculação
  { categoria: 'Musculação', url: '/musculacao/treino-para-iniciantes/', titulo: 'Treino de musculação para iniciantes: como começar' },
  { categoria: 'Musculação', url: '/musculacao/hipertrofia-como-funciona/', titulo: 'Hipertrofia: como funciona o crescimento muscular' },
  { categoria: 'Musculação', url: '/musculacao/abc-ou-full-body/', titulo: 'ABC ou Full Body: qual a melhor divisão de treino' },
  { categoria: 'Musculação', url: '/musculacao/quantas-series-e-repeticoes/', titulo: 'Quantas séries e repetições fazer por grupo muscular' },
  { categoria: 'Musculação', url: '/musculacao/progressao-de-carga/', titulo: 'Como progredir de carga na musculação' },
  { categoria: 'Musculação', url: '/musculacao/descanso-entre-series/', titulo: 'Quanto tempo descansar entre séries' },
  { categoria: 'Musculação', url: '/musculacao/treinar-ate-a-falha/', titulo: 'Treinar até a falha funciona?' },
  { categoria: 'Musculação', url: '/musculacao/cardio-e-musculacao-no-mesmo-dia/', titulo: 'Cardio e musculação no mesmo dia: como combinar' },
  { categoria: 'Musculação', url: '/musculacao/quanto-tempo-para-ver-resultados/', titulo: 'Quanto tempo demora para ver resultados na musculação?' },
  { categoria: 'Musculação', url: '/musculacao/dor-muscular-pos-treino/', titulo: 'Dor muscular pós-treino: posso treinar mesmo assim?' },
  { categoria: 'Musculação', url: '/musculacao/treino-em-casa-para-iniciantes/', titulo: 'Treino em casa para iniciantes: como começar sem equipamentos' },
  { categoria: 'Musculação', url: '/musculacao/treinar-com-dor-no-joelho/', titulo: 'Dor no joelho: dá para treinar? O que ajustar na musculação' },
  { categoria: 'Musculação', url: '/musculacao/treinar-com-dor-lombar/', titulo: 'Dor lombar e musculação: como treinar com segurança' },
  { categoria: 'Musculação', url: '/musculacao/treinar-com-dor-no-ombro/', titulo: 'Dor no ombro: dá para treinar? O que ajustar na musculação' },
  { categoria: 'Musculação', url: '/musculacao/creatina-o-que-e-como-tomar/', titulo: 'Creatina: o que é, para que serve e como tomar' },
  { categoria: 'Musculação', url: '/musculacao/musculacao-depois-dos-40/', titulo: 'Musculação depois dos 40: o que muda e como treinar' },
  { categoria: 'Musculação', url: '/musculacao/quanto-tempo-de-treino-por-dia/', titulo: 'Quanto tempo de treino por dia é suficiente?' },
  { categoria: 'Musculação', url: '/musculacao/whey-protein-o-que-e-como-tomar/', titulo: 'Whey protein: o que é, para que serve e como tomar' },
  { categoria: 'Musculação', url: '/musculacao/treino-de-gluteos/', titulo: 'Treino de glúteos: o que funciona de verdade (e o que é mito)' },
  { categoria: 'Musculação', url: '/musculacao/musculacao-feminina-mitos/', titulo: 'Musculação feminina: 7 mitos que ainda atrapalham (e a verdade)' },
  { categoria: 'Musculação', url: '/musculacao/alongamento-antes-do-treino/', titulo: 'Alongamento antes do treino: ajuda ou atrapalha?' },
  { categoria: 'Musculação', url: '/musculacao/treino-abc-como-montar/', titulo: 'Treino ABC: como montar o seu (com exemplo completo)' },
  { categoria: 'Musculação', url: '/musculacao/bulking-e-cutting/', titulo: 'Bulking e cutting: o que são, como fazer e quem realmente precisa' },
  { categoria: 'Musculação', url: '/musculacao/sono-e-ganho-de-massa/', titulo: 'Sono e ganho de massa muscular: o treino invisível' },
  { categoria: 'Musculação', url: '/musculacao/maquina-ou-peso-livre/', titulo: 'Máquina ou peso livre: qual é melhor para ganhar músculo?' },
  { categoria: 'Musculação', url: '/musculacao/destreino/', titulo: 'Destreino: quanto tempo parado você perde músculo?' },

  // Emagrecimento
  { categoria: 'Emagrecimento', url: '/emagrecimento/como-emagrecer-fazendo-musculacao/', titulo: 'Como emagrecer fazendo musculação' },
  { categoria: 'Emagrecimento', url: '/emagrecimento/musculacao-ou-cardio-para-emagrecer/', titulo: 'Musculação ou cardio: o que emagrece mais?' },
  { categoria: 'Emagrecimento', url: '/emagrecimento/deficit-calorico-como-funciona/', titulo: 'Déficit calórico: como funciona para emagrecer' },
  { categoria: 'Emagrecimento', url: '/emagrecimento/como-preservar-massa-muscular-emagrecendo/', titulo: 'Como preservar massa muscular durante o emagrecimento' },
  { categoria: 'Emagrecimento', url: '/emagrecimento/plato-de-emagrecimento/', titulo: 'Platô de emagrecimento: por que acontece e o que fazer' },
  { categoria: 'Emagrecimento', url: '/emagrecimento/como-comecar-a-treinar-acima-do-peso/', titulo: 'Como começar a treinar estando acima do peso' },
  { categoria: 'Emagrecimento', url: '/emagrecimento/recomposicao-corporal/', titulo: 'Recomposição corporal: perder gordura e ganhar músculo ao mesmo tempo' },
  { categoria: 'Emagrecimento', url: '/emagrecimento/quantas-calorias-queima-a-musculacao/', titulo: 'Quantas calorias a musculação queima? A conta honesta' },
  { categoria: 'Emagrecimento', url: '/emagrecimento/aerobico-em-jejum/', titulo: 'Aeróbico em jejum funciona para emagrecer?' },
  { categoria: 'Emagrecimento', url: '/emagrecimento/como-perder-barriga/', titulo: 'Como perder barriga: a verdade sobre a gordura localizada' },

  // Mounjaro e Treino
  { categoria: 'Mounjaro e Treino', url: '/mounjaro-e-treino/mounjaro-e-musculacao/', titulo: 'Quem usa Mounjaro pode fazer musculação?' },
  { categoria: 'Mounjaro e Treino', url: '/mounjaro-e-treino/como-evitar-perda-de-massa-muscular/', titulo: 'Como evitar perda de massa muscular usando Mounjaro' },
  { categoria: 'Mounjaro e Treino', url: '/mounjaro-e-treino/treino-para-quem-usa-mounjaro/', titulo: 'Treino para quem usa Mounjaro: como adaptar' },
  { categoria: 'Mounjaro e Treino', url: '/mounjaro-e-treino/fraqueza-para-treinar/', titulo: 'Mounjaro dá fraqueza para treinar? O que fazer' },
  { categoria: 'Mounjaro e Treino', url: '/mounjaro-e-treino/cardio-para-quem-usa-mounjaro/', titulo: 'Cardio para quem usa Mounjaro: como encaixar sem perder músculo' },

  // Humor fitness
  { categoria: 'Humor fitness', url: '/humor-fitness/perfis-de-memes-fitness/', titulo: 'Perfis de memes fitness para seguir no Instagram' },
  { categoria: 'Humor fitness', url: '/humor-fitness/memes-de-academia/', titulo: 'Memes de academia: os melhores para mandar no grupo de treino' },
  { categoria: 'Humor fitness', url: '/humor-fitness/frases-de-academia-engracadas/', titulo: 'Frases de academia engraçadas para legenda e status' },
  { categoria: 'Humor fitness', url: '/humor-fitness/memes-de-dieta/', titulo: 'Memes de dieta: rindo para não chorar no cutting' },
  { categoria: 'Humor fitness', url: '/humor-fitness/meme-de-leg-day/', titulo: 'Meme de leg day: por que o treino de perna rende tanta piada' },
];
