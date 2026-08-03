/**
 * Registro central dos artigos editoriais do portal (usado pelo índice da
 * busca do menu). Ao publicar um artigo novo, registre-o aqui além do hub
 * da categoria.
 */
export interface Artigo {
  titulo: string;
  categoria: 'Guias' | 'Musculação' | 'Emagrecimento' | 'Mounjaro e Treino' | 'Humor fitness' | 'Bairros';
  url: string;
}

export const artigos: Artigo[] = [
  // Bairros de alta renda
  { categoria: 'Bairros', url: '/personal-trainer-itaim-bibi/', titulo: 'Personal trainer no Itaim Bibi (São Paulo)' },
  { categoria: 'Bairros', url: '/personal-trainer-leblon/', titulo: 'Personal trainer no Leblon (Rio de Janeiro)' },
  { categoria: 'Bairros', url: '/personal-trainer-moema/', titulo: 'Personal trainer em Moema (São Paulo)' },
  { categoria: 'Bairros', url: '/personal-trainer-barra-da-tijuca/', titulo: 'Personal trainer na Barra da Tijuca (Rio de Janeiro)' },
  { categoria: 'Bairros', url: '/personal-trainer-batel/', titulo: 'Personal trainer no Batel (Curitiba)' },
  { categoria: 'Bairros', url: '/personal-trainer-jardins/', titulo: 'Personal trainer nos Jardins (São Paulo)' },
  { categoria: 'Bairros', url: '/personal-trainer-ipanema/', titulo: 'Personal trainer em Ipanema (Rio de Janeiro)' },
  { categoria: 'Bairros', url: '/personal-trainer-savassi/', titulo: 'Personal trainer na Savassi (Belo Horizonte)' },
  { categoria: 'Bairros', url: '/personal-trainer-jurere-internacional/', titulo: 'Personal trainer em Jurerê Internacional (Florianópolis)' },
  { categoria: 'Bairros', url: '/personal-trainer-meireles/', titulo: 'Personal trainer no Meireles (Fortaleza)' },
  { categoria: 'Bairros', url: '/personal-trainer-vila-nova-conceicao/', titulo: 'Personal trainer na Vila Nova Conceição (São Paulo)' },
  { categoria: 'Bairros', url: '/personal-trainer-ecoville/', titulo: 'Personal trainer no Ecoville (Curitiba)' },
  { categoria: 'Bairros', url: '/personal-trainer-caminho-das-arvores/', titulo: 'Personal trainer no Caminho das Árvores (Salvador)' },
  { categoria: 'Bairros', url: '/personal-trainer-moinhos-de-vento/', titulo: 'Personal trainer no Moinhos de Vento (Porto Alegre)' },
  { categoria: 'Bairros', url: '/personal-trainer-ponta-verde/', titulo: 'Personal trainer na Ponta Verde (Maceió)' },
  { categoria: 'Bairros', url: '/personal-trainer-higienopolis/', titulo: 'Personal trainer em Higienópolis (São Paulo)' },
  { categoria: 'Bairros', url: '/personal-trainer-boa-viagem/', titulo: 'Personal trainer em Boa Viagem (Recife)' },
  { categoria: 'Bairros', url: '/personal-trainer-cambui/', titulo: 'Personal trainer no Cambuí (Campinas)' },
  { categoria: 'Bairros', url: '/personal-trainer-copacabana/', titulo: 'Personal trainer em Copacabana (Rio de Janeiro)' },
  { categoria: 'Bairros', url: '/personal-trainer-adrianopolis/', titulo: 'Personal trainer em Adrianópolis (Manaus)' },
  { categoria: 'Bairros', url: '/personal-trainer-lago-sul/', titulo: 'Personal trainer no Lago Sul (Brasília)' },
  { categoria: 'Bairros', url: '/personal-trainer-petropolis-natal/', titulo: 'Personal trainer em Petrópolis (Natal)' },
  { categoria: 'Bairros', url: '/personal-trainer-ponta-d-areia/', titulo: "Personal trainer na Ponta d'Areia (São Luís)" },
  { categoria: 'Bairros', url: '/personal-trainer-jardim-goias/', titulo: 'Personal trainer no Jardim Goiás (Goiânia)' },
  { categoria: 'Bairros', url: '/personal-trainer-altiplano-cabo-branco/', titulo: 'Personal trainer no Altiplano Cabo Branco (João Pessoa)' },
  { categoria: 'Bairros', url: '/personal-trainer-batista-campos/', titulo: 'Personal trainer no Batista Campos (Belém)' },
  { categoria: 'Bairros', url: '/personal-trainer-gracas/', titulo: 'Personal trainer nas Graças (Recife)' },
  { categoria: 'Bairros', url: '/personal-trainer-praia-do-canto/', titulo: 'Personal trainer na Praia do Canto (Vitória)' },
  { categoria: 'Bairros', url: '/personal-trainer-beira-mar-norte/', titulo: 'Personal trainer na Beira-Mar Norte (Florianópolis)' },
  { categoria: 'Bairros', url: '/personal-trainer-tres-figueiras/', titulo: 'Personal trainer no Três Figueiras (Porto Alegre)' },
  { categoria: 'Bairros', url: '/personal-trainer-perdizes/', titulo: 'Personal trainer em Perdizes (São Paulo)' },
  { categoria: 'Bairros', url: '/personal-trainer-tijuca/', titulo: 'Personal trainer na Tijuca (Rio de Janeiro)' },
  { categoria: 'Bairros', url: '/personal-trainer-buritis/', titulo: 'Personal trainer no Buritis (Belo Horizonte)' },
  { categoria: 'Bairros', url: '/personal-trainer-pituba/', titulo: 'Personal trainer na Pituba (Salvador)' },
  { categoria: 'Bairros', url: '/personal-trainer-aldeota/', titulo: 'Personal trainer na Aldeota (Fortaleza)' },
  { categoria: 'Bairros', url: '/personal-trainer-brooklin/', titulo: 'Personal trainer no Brooklin (São Paulo)' },
  { categoria: 'Bairros', url: '/personal-trainer-icarai/', titulo: 'Personal trainer em Icaraí (Niterói)' },
  { categoria: 'Bairros', url: '/personal-trainer-tirol/', titulo: 'Personal trainer no Tirol (Natal)' },
  { categoria: 'Bairros', url: '/personal-trainer-13-de-julho/', titulo: 'Personal trainer no 13 de Julho (Aracaju)' },
  { categoria: 'Bairros', url: '/personal-trainer-umarizal/', titulo: 'Personal trainer no Umarizal (Belém)' },
  { categoria: 'Bairros', url: '/personal-trainer-ponta-negra/', titulo: 'Personal trainer na Ponta Negra (Manaus)' },
  { categoria: 'Bairros', url: '/personal-trainer-sion/', titulo: 'Personal trainer no Sion (Belo Horizonte)' },
  { categoria: 'Bairros', url: '/personal-trainer-jatiuca/', titulo: 'Personal trainer na Jatiúca (Maceió)' },

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
