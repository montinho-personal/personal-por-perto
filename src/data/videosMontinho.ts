/**
 * Catálogo dos vídeos do próprio Montinho, e o sorteio estável por página.
 *
 * POR QUE ISTO EXISTE
 *
 * As cinco páginas de cidade com atendimento presencial traziam vídeo do
 * Montinho — e quatro delas traziam o MESMO vídeo, com o quinto repetindo o
 * segundo. Quem chega em Alphaville e depois em Tamboré via a mesma peça duas
 * vezes, e o canal inteiro ficava representado por um item só.
 *
 * DUAS DECISÕES DE PROJETO
 *
 * 1. O sorteio é DETERMINÍSTICO, derivado do slug. A mesma cidade mostra
 *    sempre o mesmo vídeo — o que preserva cache, build reprodutível e a
 *    possibilidade de conferir a página duas vezes e ver a mesma coisa. O que
 *    varia é entre cidades, que é onde a repetição incomodava.
 *
 * 2. O catálogo é uma lista simples, e crescer é só acrescentar uma linha.
 *    Nenhuma página precisa ser editada quando um vídeo novo entra: as cinco
 *    cidades se redistribuem sozinhas pelo catálogo maior.
 */

import { cidadesPresencial } from './atendimentoPresencial';

export interface VideoMontinho {
  /** ID do YouTube (o trecho depois de watch?v= ou de /shorts/). */
  id: string;
  /** Assunto, para quem for escolher um vídeo à mão em outro contexto. */
  tema: string;
  /** Shorts (9:16) — todo o material recente do canal é vertical. */
  short: boolean;
}

/**
 * Os vídeos do canal já usados no portal. Os três primeiros são os antigos,
 * sem título registrado aqui porque a legenda de cada página é escrita para o
 * contexto dela; os demais entraram em setembro de 2026 com tema declarado.
 */
export const VIDEOS_MONTINHO: VideoMontinho[] = [
  { id: 'yndKE1GrnUQ', tema: 'apresentação do trabalho', short: true },
  { id: 'MrfzaQWFqPs', tema: 'apresentação do trabalho', short: true },
  { id: 'GPuqJs_DRoY', tema: 'apresentação do trabalho', short: true },
  { id: '0uzpCxIJkBg', tema: 'na caneta e sem treinar: o custo em massa magra', short: true },
  { id: 'nEhysMtPPVw', tema: 'a balança que sobe depois do feriado não é gordura', short: true },
  { id: 'yqPAYRVTe0E', tema: 'não existe o treino perfeito', short: true },
  { id: 'nrT-Fan_Nbg', tema: 'como evitar o efeito sanfona', short: true },
  { id: 'DiH1OzIR6Yk', tema: 'proteger o objetivo: constância acima de motivação', short: true },
  // 22/10/2026: publicado nesse dia; usado nas páginas de consultoria online.
  { id: 'DPAQDPVffCg', tema: 'o app do Montinho: o treino na palma da mão', short: true },
  // 22/10/2026: TMB e TDEE no app; na calculadora de gasto diário, em como acelerar o metabolismo, em emagrecer depois dos 40 e em déficit calórico.
  { id: 'iGStCDRk0Zg', tema: 'quantas calorias você gasta por dia: TMB e TDEE', short: true },
  // 22/10/2026: cardápio sugerido no app (sugestão, não substitui nutricionista); em dieta flexível, déficit calórico, emagrecer na menopausa e emagrecer depois dos 40.
  { id: 'FjvYaKx05x0', tema: 'monte seu cardápio grátis em 3 passos', short: true },
  // 22/10/2026: simulador de prazo no app; em quanto tempo para perder 10 kg.
  { id: '2NkNKAhku9A', tema: 'quanto tempo pra emagrecer 10 kg: simule', short: true },
];

/**
 * Hash pequeno e estável de string. Não precisa ser criptográfico — precisa
 * ser o mesmo em toda máquina e em todo build, que é o que `Math.random()`
 * não seria.
 */
function hash(texto: string): number {
  let h = 0;
  for (let i = 0; i < texto.length; i += 1) {
    h = (h * 31 + texto.charCodeAt(i)) | 0;
  }
  return Math.abs(h);
}

/**
 * Escolhe o vídeo de uma página a partir de uma chave estável.
 *
 * Duas estratégias, e a ordem entre elas importa:
 *
 * 1. Se o slug está na lista de cobertura presencial — que é justamente onde
 *    os vídeos aparecem hoje —, o índice vem da POSIÇÃO nessa lista. Com 11
 *    cidades e 8 vídeos, isso garante que páginas vizinhas nunca caiam no
 *    mesmo vídeo, o que um hash não garante: na primeira tentativa, Tamboré e
 *    Alphaville colidiram.
 * 2. Fora dela, cai no hash do slug — estável, e bom o bastante quando não há
 *    vizinhança a preservar.
 */
export function videoDaPagina(chave: string): VideoMontinho {
  if (VIDEO_FIXO_POR_PAGINA[chave]) return VIDEO_FIXO_POR_PAGINA[chave];
  const posicao = (cidadesPresencial as readonly string[]).indexOf(chave);
  const indice = posicao >= 0 ? posicao : hash(chave);
  return VIDEOS_MONTINHO[indice % VIDEOS_MONTINHO.length];
}

/**
 * Shorts do canal colocados À MÃO em artigos, no parágrafo que respondem.
 * Ficam FORA do rodízio das páginas de cidade: entrar em VIDEOS_MONTINHO
 * mudaria o vídeo das 11 cidades de uma vez. Registro para não repetir o
 * mesmo vídeo em dois artigos.
 */
export const VIDEOS_MONTINHO_EM_ARTIGOS: Array<VideoMontinho & { artigo: string }> = [
  { id: 'Mck7dwGz0as', tema: 'o aparelho está ocupado? como substituir o exercício', short: true, artigo: '/musculacao/academia-lotada-como-treinar/' },
  { id: 'ul6Xi60zPeY', tema: 'usa Mounjaro? menos é mais, nada de treino gigante', short: true, artigo: '/mounjaro-e-treino/treino-para-quem-usa-mounjaro/' },
  { id: '9X968Kqa2-Y', tema: 'a balança mente? mesmo peso, outro corpo', short: true, artigo: '/emagrecimento/como-emagrecer-fazendo-musculacao/' },
  { id: 'RvapDDClRXY', tema: 'qual o melhor exercício para ganhar músculo?', short: true, artigo: '/musculacao/maquina-ou-peso-livre/' },
  { id: 'xb1sP6z01-s', tema: 'não sentiu o músculo? calma', short: true, artigo: '/musculacao/dor-muscular-pos-treino/' },
  { id: 'izMrrSoJGBw', tema: 'raiva e sangue no olho: disciplina', short: true, artigo: '/guias/como-nao-desistir-do-treino/' },
  { id: '7rN1Xwhp09g', tema: 'só um pedacinho: quanto as beliscadas atrapalham', short: true, artigo: '/emagrecimento/comer-fora-e-dieta/' },
  // 15/11/2026, Shorts novos do canal (out–nov/2026), dois por artigo, a pedido do Renato:
  { id: 'L5w4DBU2la8', tema: 'como filmar o exercício para o personal corrigir a execução', short: true, artigo: '/guias/personal-online-ou-aplicativo/' },
  { id: 'EwvRdG917fY', tema: 'app de treino para academia: o app do Montinho', short: true, artigo: '/guias/personal-online-ou-aplicativo/' },
  { id: 'pxstc1eDnJU', tema: 'emagreci 40 kg sem parar de beber cerveja', short: true, artigo: '/emagrecimento/faco-academia-e-nao-emagreco/' },
  { id: 'XCSizVFG3d0', tema: 'como montar uma dieta em 4 passos', short: true, artigo: '/emagrecimento/faco-academia-e-nao-emagreco/' },
  { id: 'CgPDOWBXh8k', tema: 'eu pesava 40 kg a mais e achava que ia ser pra sempre', short: true, artigo: '/emagrecimento/emagrecer-treinando-3-vezes-por-semana/' },
  { id: 'BoXag2fY0u0', tema: 'como montar seu treino de musculação em 5 passos', short: true, artigo: '/musculacao/treino-sem-resultado/' },
];

/**
 * 15/10/2026, a pedido do Montinho (opção 2): onde um Short dele responde
 * ao assunto, ele SUBSTITUI o vídeo de referência de outro canal.
 *   recomposicao-corporal → 9X968Kqa2-Y · plato-de-emagrecimento → nEhysMtPPVw
 *   como-evitar-perda-de-massa-muscular → ul6Xi60zPeY · ozempic-e-treino → 0uzpCxIJkBg
 *   treino-abc-como-montar → yqPAYRVTe0E · hipertrofia-como-funciona → RvapDDClRXY
 *   vale-a-pena-contratar-personal-trainer → yndKE1GrnUQ · como-perder-barriga → Dg8Sbv6_V8w
 *   alcool-e-emagrecimento → 7rN1Xwhp09g
 * Os outros 87 artigos seguem com o vídeo de referência até haver Short do tema.
 */

/**
 * Vídeos que NÃO entram: G9WBAB3KUPM ("Existe mesmo o melhor exercício para
 * hipertrofia?") é a mesma gravação de RvapDDClRXY — usar os dois seria
 * repetir o vídeo no portal.
 */

/**
 * Vídeo escolhido pelo Montinho para uma página específica, por cima do
 * rodízio. Alphaville (15/10/2026); Aldeia da Serra, Barueri e Santana de
 * Parnaíba (16/10/2026): "Meu maior conselho para quem quer
 * emagrecer", a pedido do próprio Montinho.
 */
export const VIDEO_FIXO_POR_PAGINA: Record<string, VideoMontinho> = {
  'alphaville-sp': { id: 'Dg8Sbv6_V8w', tema: 'meu maior conselho para quem quer emagrecer', short: true },
  // 16/10/2026, também a pedido do Montinho:
  'aldeia-da-serra-sp': { id: 'Dg8Sbv6_V8w', tema: 'meu maior conselho para quem quer emagrecer', short: true },
  'barueri-sp': { id: 'Dg8Sbv6_V8w', tema: 'meu maior conselho para quem quer emagrecer', short: true },
  'santana-de-parnaiba-sp': { id: 'Dg8Sbv6_V8w', tema: 'meu maior conselho para quem quer emagrecer', short: true },
  'jandira-sp': { id: 'Dg8Sbv6_V8w', tema: 'meu maior conselho para quem quer emagrecer', short: true },
  'itapevi-sp': { id: 'Dg8Sbv6_V8w', tema: 'meu maior conselho para quem quer emagrecer', short: true },
  'carapicuiba-sp': { id: 'Dg8Sbv6_V8w', tema: 'meu maior conselho para quem quer emagrecer', short: true },
  'osasco-sp': { id: 'Dg8Sbv6_V8w', tema: 'meu maior conselho para quem quer emagrecer', short: true },
  'cotia-sp': { id: 'Dg8Sbv6_V8w', tema: 'meu maior conselho para quem quer emagrecer', short: true },
  'granja-viana-sp': { id: 'Dg8Sbv6_V8w', tema: 'meu maior conselho para quem quer emagrecer', short: true },
};

/**
 * O Short do app (DPAQDPVffCg) na parte do online das páginas de cidade.
 * Entra em levas, pela regra de lote do projeto: cada leva sobe a data das
 * suas cidades (mudança visível), e o ritmo deixa ler o efeito depois.
 *   22/10/2026 — região presencial (pedido do Renato): Barueri, Alphaville,
 *     Santana de Parnaíba, Aldeia da Serra.
 *   22/10/2026 — leva 1: as 10 cidades com mais impressões em 28 dias no GSC.
 *   26/10/2026 — leva 2: as 20 seguintes. 29/10/2026 — leva 3: mais 20. 01/11/2026 — leva 4: mais 20.
 */
export const VIDEO_APP_ID = 'DPAQDPVffCg';
export const CIDADES_COM_VIDEO_APP = new Set<string>([
  // região presencial
  'barueri-sp', 'alphaville-sp', 'santana-de-parnaiba-sp', 'aldeia-da-serra-sp',
  'tambore-sp', // 22/10/2026, pedido do Renato
  // leva 1 — 22/10/2026
  'joao-pessoa-pb', 'salvador-ba', 'brasilia-df', 'porto-alegre-rs', 'teresina-pi',
  'sao-paulo-sp', 'goiania-go', 'rio-de-janeiro-rj', 'florianopolis-sc', 'uberlandia-mg',
  // leva 2 — 26/10/2026: as 20 seguintes por impressões em 28 dias no GSC (leva 1 conferida no ar)
  'curitiba-pr', 'belem-pa', 'joinville-sc', 'manaus-am', 'londrina-pr',
  'belo-horizonte-mg', 'recife-pe', 'taguatinga-df', 'fortaleza-ce', 'maceio-al',
  'bauru-sp', 'mossoro-rn', 'sorocaba-sp', 'cabo-frio-rj', 'niteroi-rj',
  'sobral-ce', 'rio-das-ostras-rj', 'juiz-de-fora-mg', 'aracaju-se', 'boa-vista-rr',
  // leva 3 — 29/10/2026: as 20 seguintes por impressões em 28 dias no GSC (leva 2 conferida no ar)
  'santo-andre-sp', 'palhoca-sc', 'sao-jose-do-rio-preto-sp', 'cuiaba-mt', 'sao-luis-ma',
  'itaguai-rj', 'santa-barbara-doeste-sp', 'ribeirao-preto-sp', 'camacari-ba', 'granja-viana-sp',
  'piracicaba-sp', 'jau-sp', 'aguas-claras-df', 'limeira-sp', 'jundiai-sp',
  'maringa-pr', 'porto-velho-ro', 'toledo-pr', 'indaiatuba-sp', 'vitoria-es',
  // leva 4 — 01/11/2026: as 20 seguintes por impressões em 28 dias no GSC (leva 3 conferida no ar)
  'campinas-sp', 'cascavel-pr', 'montes-claros-mg', 'itu-sp', 'birigui-sp',
  'feira-de-santana-ba', 'pocos-de-caldas-mg', 'blumenau-sc', 'campo-grande-ms', 'cariacica-es',
  'guarulhos-sp', 'jaboatao-dos-guararapes-pe', 'conselheiro-lafaiete-mg', 'palmas-to', 'criciuma-sc',
  'porto-nacional-to', 'ipatinga-mg', 'uberaba-mg', 'balneario-camboriu-sc', 'castanhal-pa',
  // leva 5 — 04/11/2026: as 20 seguintes por impressões em 28 dias no GSC (leva 4 conferida no ar)
  'franca-sp', 'santos-sp', 'aparecida-de-goiania-go', 'mogi-das-cruzes-sp', 'sao-leopoldo-rs',
  'nova-iguacu-rj', 'rio-claro-sp', 'guarapari-es', 'belford-roxo-rj', 'araraquara-sp',
  'praia-grande-sp', 'sao-thome-das-letras-mg', 'vicosa-mg', 'atibaia-sp', 'jaragua-do-sul-sc',
  'vitoria-da-conquista-ba', 'braganca-paulista-sp', 'camboriu-sc', 'marilia-sp', 'taubate-sp',
  // leva 6 — 07/11/2026: as 20 seguintes por impressões em 28 dias no GSC (leva 5 conferida no ar)
  'sumare-sp', 'arapongas-pr', 'muriae-mg', 'formosa-go', 'barreiras-ba',
  'varzea-grande-mt', 'araruama-rj', 'cachoeiras-de-macacu-rj', 'divinopolis-mg', 'dourados-ms',
  'foz-do-iguacu-pr', 'ibirite-mg', 'ilheus-ba', 'januaria-mg', 'pinhais-pr',
  'canoas-rs', 'ceilandia-df', 'monte-alto-sp', 'redencao-pa', 'serra-es',
  // leva 7 — 10/11/2026: as 20 seguintes por impressões em 28 dias no GSC (leva 6 conferida no ar)
  'marituba-pa', 'ji-parana-ro', 'gravatai-rs', 'sete-lagoas-mg', 'amparo-sp',
  'votuporanga-sp', 'anapolis-go', 'cachoeiro-de-itapemirim-es', 'campos-do-jordao-sp', 'santa-ines-ma',
  'capao-da-canoa-rs', 'itapetininga-sp', 'arapiraca-al', 'botucatu-sp', 'caraguatatuba-sp',
  'conde-pb', 'bebedouro-sp', 'itanhaem-sp', 'mafra-sc', 'ponta-grossa-pr',
  // leva 8 — 13/11/2026: as 20 seguintes por impressões em 28 dias no GSC (leva 7 conferida no ar)
  'sao-jose-dos-campos-sp', 'boituva-sp', 'itabirito-mg', 'santa-maria-rs', 'bage-rs',
  'arcos-mg', 'flores-da-cunha-rs', 'pederneiras-sp', 'santarem-pa', 'brumado-ba',
  'erechim-rs', 'itaperuna-rj', 'sao-miguel-do-gostoso-rn', 'sao-pedro-sp', 'tiangua-ce',
  'araguaina-to', 'campo-mourao-pr', 'mariana-mg', 'presidente-prudente-sp', 'sao-jose-do-rio-pardo-sp',
  // 10/11/2026: fora da fila de impressões, junto com o piloto do modelo enxuto
  // (data/modeloCidade.ts). Caíram do índice com impressão no 3º trimestre.
  'natal-rn', 'contagem-mg', 'ananindeua-pa',
]);

/**
 * Vídeos do canal escolhidos pelo Montinho para as cidades SEM vídeo
 * (15/11/2026, a pedido do Renato: "só nas 829 cidades", 50 por dia).
 *
 * Cada cidade da lista recebe UM destes seis, pela posição dela na lista:
 * posição 0 → vídeo 0, 1 → 1 … 6 → 0 de novo. Como as levas entram em ordem
 * de impressões no GSC, cidades vizinhas no ranking nunca repetem o vídeo, e
 * acrescentar uma leva no fim não muda o vídeo de quem já entrou.
 *
 * As 11 cidades da região presencial (vídeo fixo) e as que já tinham o
 * vídeo do app ficam FORA desta lista — o escopo são as que não tinham
 * vídeo nenhum.
 */
export const VIDEOS_CANAL_CIDADES: Array<VideoMontinho & { titulo: string }> = [
  { id: 'Dg8Sbv6_V8w', titulo: 'Meu maior conselho para quem quer emagrecer', tema: 'meu maior conselho para quem quer emagrecer', short: true },
  { id: 'yqPAYRVTe0E', titulo: 'Não existe o treino perfeito', tema: 'não existe o treino perfeito', short: true },
  { id: 'izMrrSoJGBw', titulo: 'Raiva e sangue no olho', tema: 'raiva e sangue no olho: disciplina', short: true },
  { id: 'DiH1OzIR6Yk', titulo: 'É impossível isso dar errado', tema: 'constância acima de motivação', short: true },
  { id: 'yndKE1GrnUQ', titulo: 'Toda pessoa com shape tem uma coisa em comum', tema: 'o que toda pessoa com shape tem em comum', short: true },
  { id: 'CgPDOWBXh8k', titulo: 'Eu pesava 40 kg a mais e achava que ia ser pra sempre', tema: 'a história do Montinho: 40 kg a mais', short: true },
];

/** Cidades que recebem um vídeo do canal, em levas (comentário = data). Só acrescentar no fim. */
export const CIDADES_VIDEO_CANAL: string[] = [
  // leva 1 — 15/11/2026: as 50 cidades sem vídeo com mais impressões em 28 dias no GSC
  'rolandia-pr', 'assis-sp', 'caxias-ma', 'lapa-pr', 'amargosa-ba',
  'cambui-mg', 'cangucu-rs', 'mangaratiba-rj', 'surubim-pe', 'varginha-mg',
  'estancia-se', 'fernandopolis-sp', 'irece-ba', 'mineiros-go', 'sao-carlos-sp',
  'sapucaia-do-sul-rs', 'urubici-sc', 'volta-redonda-rj', 'votorantim-sp', 'araripina-pe',
  'carmo-de-minas-mg', 'juazeiro-do-norte-ce', 'paraiso-do-tocantins-to', 'tobias-barreto-se', 'trairi-ce',
  'brusque-sc', 'caxambu-mg', 'guarabira-pb', 'itupeva-sp', 'navirai-ms',
  'parintins-am', 'parnaiba-pi', 'sao-caetano-do-sul-sp', 'teixeira-de-freitas-ba', 'umuarama-pr',
  'valinhos-sp', 'viamao-rs', 'caxias-do-sul-rs', 'itacoatiara-am', 'juina-mt',
  'marechal-deodoro-al', 'paranavai-pr', 'primavera-do-leste-mt', 'rio-branco-ac', 'salto-sp',
  'santa-luzia-mg', 'sidrolandia-ms', 'areia-pb', 'boa-esperanca-mg', 'capanema-pa',
  // leva 2 — 16/11/2026: as 50 seguintes sem vídeo por impressões em 28 dias no GSC (leva 1 conferida no ar)
  'itaborai-rj', 'currais-novos-rn', 'francisco-beltrao-pr', 'guaiba-rs', 'gurupi-to',
  'ibipora-pr', 'jaboticabal-sp', 'mairipora-sp', 'passo-fundo-rs', 'patrocinio-mg',
  'sao-jose-sc', 'tres-lagoas-ms', 'tupa-sp', 'araguari-mg', 'bayeux-pb',
  'betim-mg', 'cabo-de-santo-agostinho-pe', 'campo-bom-rs', 'campo-largo-pr', 'floriano-pi',
  'gramado-rs', 'guabiruba-sc', 'guaranta-do-norte-mt', 'lages-sc', 'marica-rj',
  'nova-mutum-mt', 'paranagua-pr', 'sao-cristovao-se', 'sao-miguel-do-oeste-sc', 'veranopolis-rs',
  'aracruz-es', 'baependi-mg', 'barretos-sp', 'beberibe-ce', 'biguacu-sc',
  'bom-jesus-pi', 'catanduva-sp', 'coruripe-al', 'gaspar-sc', 'guanambi-ba',
  'itaqui-rs', 'lauro-de-freitas-ba', 'linhares-es', 'luziania-go', 'mage-rj',
  'mogi-guacu-sp', 'nova-venecia-es', 'oeiras-pi', 'penapolis-sp', 'rio-do-sul-sc',  // leva 3 — 17/11/2026: as 50 seguintes sem vídeo por impressões em 28 dias no GSC (leva 2 conferida no ar)
  'itajuba-mg', 'rio-grande-rs', 'araucaria-pr', 'confins-mg', 'diadema-sp',
  'pocone-mt', 'saquarema-rj', 'sarandi-pr', 'serrinha-ba', 'tubarao-sc',
  'almirante-tamandare-pr', 'altamira-pa', 'assis-chateaubriand-pr', 'bom-jardim-da-serra-sc', 'braco-do-norte-sc',
  'ceara-mirim-rn', 'congonhal-mg', 'corumba-ms', 'curvelo-mg', 'encantado-rs',
  'fraiburgo-sc', 'frutal-mg', 'galinhos-rn', 'garopaba-sc', 'ibia-mg',
  'itapemirim-es', 'itapeva-sp', 'itaporanga-d-ajuda-se', 'jacarei-sp', 'jequie-ba',
  'joao-pinheiro-mg', 'marechal-candido-rondon-pr', 'matozinhos-mg', 'nossa-senhora-do-socorro-se', 'ouro-branco-mg',
  'palmeira-dos-indios-al', 'paragominas-pa', 'paranaiba-ms', 'paulista-pe', 'pesqueira-pe',
  'petrolina-pe', 'planaltina-go', 'poa-sp', 'porangatu-go', 'ribeirao-pires-sp',
  'rondonopolis-mt', 'santa-helena-de-goias-go', 'santa-teresa-es', 'sao-miguel-dos-campos-al', 'sao-sebastiao-sp',
  // leva 4 — 18/11/2026: as 50 seguintes sem vídeo por impressões em 28 dias no GSC (leva 3 conferida no ar)
  'alagoinhas-ba', 'alvorada-rs', 'araras-sp', 'teutonia-rs', 'brejo-santo-ce',
  'goianesia-go', 'itajai-sc', 'santo-antonio-do-descoberto-go', 'sao-simao-go', 'sapezal-mt',
  'taquaritinga-sp', 'tres-coroas-rs', 'tucurui-pa', 'valparaiso-de-goias-go', 'viana-es',
  'altos-pi', 'balneario-picarras-sc', 'barbacena-mg', 'bombinhas-sc', 'camanducaia-mg',
  'caninde-de-sao-francisco-se', 'castelo-es', 'cornelio-procopio-pr', 'coromandel-mg', 'corrente-pi',
  'cruzeiro-sp', 'domingos-martins-es', 'formiga-mg', 'hortolandia-sp', 'ijui-rs',
  'jaguarao-rs', 'jaguariuna-sp', 'jaragua-go', 'lins-sp', 'macapa-ap',
  'marataizes-es', 'miracema-do-tocantins-to', 'nova-lima-mg', 'olinda-pe', 'paraiba-do-sul-rj',
  'pirassununga-sp', 'ponta-pora-ms', 'presidente-dutra-ma', 'santa-cruz-do-sul-rs', 'santa-izabel-do-para-pa',
  'santa-rita-pb', 'santana-do-livramento-rs', 'sao-joao-de-meriti-rj', 'sao-marcos-rs', 'simao-dias-se',
];

/** O vídeo do canal de uma cidade, ou undefined se ela não está nas levas. */
export function videoCanalDaCidade(slug: string): (VideoMontinho & { titulo: string }) | undefined {
  const i = CIDADES_VIDEO_CANAL.indexOf(slug);
  return i >= 0 ? VIDEOS_CANAL_CIDADES[i % VIDEOS_CANAL_CIDADES.length] : undefined;
}
