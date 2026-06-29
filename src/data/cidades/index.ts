/**
 * Agregador de cidades. Cada cidade é um módulo próprio (escala para milhares
 * de arquivos sem inchar um único arquivo gigante). Para adicionar uma cidade,
 * basta criar o arquivo e importá-lo aqui.
 */
import type { Cidade } from '../../lib/types';

import { cidade as saoPaulo } from './sao-paulo-sp';
import { cidade as campinas } from './campinas-sp';
import { cidade as osasco } from './osasco-sp';
import { cidade as barueri } from './barueri-sp';
import { cidade as guarulhos } from './guarulhos-sp';
import { cidade as santoAndre } from './santo-andre-sp';
import { cidade as curitiba } from './curitiba-pr';
import { cidade as santanaDeParnaiba } from './santana-de-parnaiba-sp';
import { cidade as alphaville } from './alphaville-sp';
import { cidade as tambore } from './tambore-sp';
import { cidade as ribeiraoPreto } from './ribeirao-preto-sp';
import { cidade as sorocaba } from './sorocaba-sp';
import { cidade as rioDeJaneiro } from './rio-de-janeiro-rj';
import { cidade as niteroi } from './niteroi-rj';
import { cidade as beloHorizonte } from './belo-horizonte-mg';
import { cidade as uberlandia } from './uberlandia-mg';
import { cidade as vitoria } from './vitoria-es';
import { cidade as brasilia } from './brasilia-df';
import { cidade as goiania } from './goiania-go';
import { cidade as portoAlegre } from './porto-alegre-rs';
import { cidade as florianopolis } from './florianopolis-sc';
import { cidade as balnearioCamboriu } from './balneario-camboriu-sc';
import { cidade as fortaleza } from './fortaleza-ce';
import { cidade as salvador } from './salvador-ba';
import { cidade as recife } from './recife-pe';
import { cidade as aracaju } from './aracaju-se';
import { cidade as joaoPessoa } from './joao-pessoa-pb';
import { cidade as natal } from './natal-rn';
import { cidade as manaus } from './manaus-am';
import { cidade as palmas } from './palmas-to';
// Bloco 2
import { cidade as saoJoseDosCampos } from './sao-jose-dos-campos-sp';
import { cidade as jundiai } from './jundiai-sp';
import { cidade as saoBernardoDoCampo } from './sao-bernardo-do-campo-sp';
import { cidade as santos } from './santos-sp';
import { cidade as saoJoseDoRioPreto } from './sao-jose-do-rio-preto-sp';
import { cidade as vilaVelha } from './vila-velha-es';
import { cidade as serra } from './serra-es';
import { cidade as contagem } from './contagem-mg';
import { cidade as juizDeFora } from './juiz-de-fora-mg';
import { cidade as londrina } from './londrina-pr';
import { cidade as maringa } from './maringa-pr';
import { cidade as joinville } from './joinville-sc';
import { cidade as blumenau } from './blumenau-sc';
import { cidade as caxiasDoSul } from './caxias-do-sul-rs';
import { cidade as campoGrande } from './campo-grande-ms';
import { cidade as cuiaba } from './cuiaba-mt';
import { cidade as belem } from './belem-pa';
import { cidade as teresina } from './teresina-pi';
import { cidade as saoLuis } from './sao-luis-ma';
import { cidade as feiraDeSantana } from './feira-de-santana-ba';
// Bloco 3
import { cidade as piracicaba } from './piracicaba-sp';
import { cidade as bauru } from './bauru-sp';
import { cidade as guaruja } from './guaruja-sp';
import { cidade as praiaGrande } from './praia-grande-sp';
import { cidade as maua } from './maua-sp';
import { cidade as diadema } from './diadema-sp';
import { cidade as novaIguacu } from './nova-iguacu-rj';
import { cidade as duqueDeCaxias } from './duque-de-caxias-rj';
import { cidade as saoGoncalo } from './sao-goncalo-rj';
import { cidade as betim } from './betim-mg';
import { cidade as pontaGrossa } from './ponta-grossa-pr';
import { cidade as pelotas } from './pelotas-rs';
import { cidade as aparecidaDeGoiania } from './aparecida-de-goiania-go';
import { cidade as jaboatao } from './jaboatao-dos-guararapes-pe';
import { cidade as maceio } from './maceio-al';
import { cidade as camacari } from './camacari-ba';
import { cidade as portoVelho } from './porto-velho-ro';
import { cidade as rioBranco } from './rio-branco-ac';
import { cidade as boaVista } from './boa-vista-rr';
import { cidade as macapa } from './macapa-ap';
// Bloco 4
import { cidade as olinda } from './olinda-pe';
import { cidade as caruaru } from './caruaru-pe';
import { cidade as vitoriaDaConquista } from './vitoria-da-conquista-ba';
import { cidade as anapolis } from './anapolis-go';
import { cidade as campinaGrande } from './campina-grande-pb';
import { cidade as mossoro } from './mossoro-rn';
import { cidade as ananindeua } from './ananindeua-pa';
import { cidade as santarem } from './santarem-pa';
import { cidade as cariacica } from './cariacica-es';
import { cidade as voltaRedonda } from './volta-redonda-rj';
import { cidade as petropolis } from './petropolis-rj';
import { cidade as canoas } from './canoas-rs';
import { cidade as santaMaria } from './santa-maria-rs';
import { cidade as chapeco } from './chapeco-sc';
import { cidade as criciuma } from './criciuma-sc';
import { cidade as itajai } from './itajai-sc';
import { cidade as cascavel } from './cascavel-pr';
import { cidade as fozDoIguacu } from './foz-do-iguacu-pr';
import { cidade as uberaba } from './uberaba-mg';
import { cidade as montesClaros } from './montes-claros-mg';
// Bloco 5
import { cidade as caboFrio } from './cabo-frio-rj';
import { cidade as macae } from './macae-rj';
import { cidade as camposDosGoytacazes } from './campos-dos-goytacazes-rj';
import { cidade as angraDosReis } from './angra-dos-reis-rj';
import { cidade as limeira } from './limeira-sp';
import { cidade as taubate } from './taubate-sp';
import { cidade as marilia } from './marilia-sp';
import { cidade as presidentePrudente } from './presidente-prudente-sp';
import { cidade as saoCarlos } from './sao-carlos-sp';
import { cidade as araraquara } from './araraquara-sp';
import { cidade as ipatinga } from './ipatinga-mg';
import { cidade as governadorValadares } from './governador-valadares-mg';
import { cidade as divinopolis } from './divinopolis-mg';
import { cidade as dourados } from './dourados-ms';
import { cidade as rondonopolis } from './rondonopolis-mt';
import { cidade as imperatriz } from './imperatriz-ma';
import { cidade as parnaiba } from './parnaiba-pi';
import { cidade as petrolina } from './petrolina-pe';
import { cidade as juazeiroDoNorte } from './juazeiro-do-norte-ce';
import { cidade as novoHamburgo } from './novo-hamburgo-rs';
// Bloco 6
import { cidade as marica } from './marica-rj';
import { cidade as rioDasOstras } from './rio-das-ostras-rj';
import { cidade as novaFriburgo } from './nova-friburgo-rj';
import { cidade as mogiDasCruzes } from './mogi-das-cruzes-sp';
import { cidade as franca } from './franca-sp';
import { cidade as jacarei } from './jacarei-sp';
import { cidade as americana } from './americana-sp';
import { cidade as rioClaro } from './rio-claro-sp';
import { cidade as indaiatuba } from './indaiatuba-sp';
import { cidade as seteLagoas } from './sete-lagoas-mg';
import { cidade as pocosDeCaldas } from './pocos-de-caldas-mg';
import { cidade as varginha } from './varginha-mg';
import { cidade as saoJoseDosPinhais } from './sao-jose-dos-pinhais-pr';
import { cidade as saoJoseSC } from './sao-jose-sc';
import { cidade as parnamirim } from './parnamirim-rn';
import { cidade as lauroDeFreitas } from './lauro-de-freitas-ba';
import { cidade as sobral } from './sobral-ce';
import { cidade as parauapebas } from './parauapebas-pa';
import { cidade as rioVerde } from './rio-verde-go';
import { cidade as sinop } from './sinop-mt';
// Bloco 7
import { cidade as saoCaetanoDoSul } from './sao-caetano-do-sul-sp';
import { cidade as paulinia } from './paulinia-sp';
import { cidade as atibaia } from './atibaia-sp';
import { cidade as bragancaPaulista } from './braganca-paulista-sp';
import { cidade as aracatuba } from './aracatuba-sp';
import { cidade as resende } from './resende-rj';
import { cidade as teresopolis } from './teresopolis-rj';
import { cidade as jaraguaDoSul } from './jaragua-do-sul-sc';
import { cidade as bentoGoncalves } from './bento-goncalves-rs';
import { cidade as araucaria } from './araucaria-pr';
import { cidade as caboDeSantoAgostinho } from './cabo-de-santo-agostinho-pe';
import { cidade as caucaia } from './caucaia-ce';
import { cidade as itabuna } from './itabuna-ba';
import { cidade as pousoAlegre } from './pouso-alegre-mg';
import { cidade as cachoeiroDeItapemirim } from './cachoeiro-de-itapemirim-es';
import { cidade as caldasNovas } from './caldas-novas-go';
import { cidade as maraba } from './maraba-pa';
import { cidade as lucasDoRioVerde } from './lucas-do-rio-verde-mt';
import { cidade as varzeaGrande } from './varzea-grande-mt';
import { cidade as tresLagoas } from './tres-lagoas-ms';
// Bloco 8
import { cidade as novaLima } from './nova-lima-mg';
import { cidade as sorriso } from './sorriso-mt';
import { cidade as sumare } from './sumare-sp';
import { cidade as cotia } from './cotia-sp';
import { cidade as caraguatatuba } from './caraguatatuba-sp';
import { cidade as saquarema } from './saquarema-rj';
import { cidade as barraMansa } from './barra-mansa-rj';
import { cidade as barraDoPirai } from './barra-do-pirai-rj';
import { cidade as toledo } from './toledo-pr';
import { cidade as passoFundo } from './passo-fundo-rs';
import { cidade as palhoca } from './palhoca-sc';
import { cidade as ilheus } from './ilheus-ba';
import { cidade as barreiras } from './barreiras-ba';
import { cidade as paulistaPE } from './paulista-pe';
import { cidade as maracanau } from './maracanau-ce';
import { cidade as linhares } from './linhares-es';
import { cidade as catalao } from './catalao-go';
import { cidade as arapiraca } from './arapiraca-al';
import { cidade as araguaina } from './araguaina-to';
import { cidade as jiParana } from './ji-parana-ro';
import { cidade as castanhal } from './castanhal-pa';
// Bloco 9
import { cidade as vinhedo } from './vinhedo-sp';
import { cidade as itu } from './itu-sp';
import { cidade as botucatu } from './botucatu-sp';
import { cidade as saoVicente } from './sao-vicente-sp';
import { cidade as barretos } from './barretos-sp';
import { cidade as buzios } from './buzios-rj';
import { cidade as araruama } from './araruama-rj';
import { cidade as itabira } from './itabira-mg';
import { cidade as saoJoaoDelRei } from './sao-joao-del-rei-mg';
import { cidade as lavras } from './lavras-mg';
import { cidade as paranagua } from './paranagua-pr';
import { cidade as guarapuava } from './guarapuava-pr';
import { cidade as rioGrande } from './rio-grande-rs';
import { cidade as gramado } from './gramado-rs';
import { cidade as lages } from './lages-sc';
import { cidade as juazeiroBA } from './juazeiro-ba';
import { cidade as portoSeguro } from './porto-seguro-ba';
import { cidade as garanhuns } from './garanhuns-pe';
import { cidade as jatai } from './jatai-go';
import { cidade as primaveraDoLeste } from './primavera-do-leste-mt';
// Bloco 10
import { cidade as valinhos } from './valinhos-sp';
import { cidade as hortolandia } from './hortolandia-sp';
import { cidade as taboaoDaSerra } from './taboao-da-serra-sp';
import { cidade as catanduva } from './catanduva-sp';
import { cidade as saoSebastiao } from './sao-sebastiao-sp';
import { cidade as saoJoaoDeMeriti } from './sao-joao-de-meriti-rj';
import { cidade as itaborai } from './itaborai-rj';
import { cidade as coronelFabriciano } from './coronel-fabriciano-mg';
import { cidade as patosDeMinas } from './patos-de-minas-mg';
import { cidade as itajuba } from './itajuba-mg';
import { cidade as patoBranco } from './pato-branco-pr';
import { cidade as apucarana } from './apucarana-pr';
import { cidade as gravatai } from './gravatai-rs';
import { cidade as saoLeopoldo } from './sao-leopoldo-rs';
import { cidade as brusque } from './brusque-sc';
import { cidade as itapema } from './itapema-sc';
import { cidade as teixeiraDeFreitas } from './teixeira-de-freitas-ba';
import { cidade as gravata } from './gravata-pe';
import { cidade as crato } from './crato-ce';
import { cidade as guarapari } from './guarapari-es';
// Bloco 11 (Grande SP oeste — eixo Castello Branco / Linha 8-Diamante)
import { cidade as carapicuiba } from './carapicuiba-sp';
import { cidade as jandira } from './jandira-sp';
import { cidade as itapevi } from './itapevi-sp';
import { cidade as aldeiaDaSerra } from './aldeia-da-serra-sp';
// Bloco 15 (polos regionais e turismo — SP/ES/MG/RJ/BA/PE/GO/SC/RS/PA/AM)
import { cidade as tatui } from './tatui-sp';
import { cidade as itupeva } from './itupeva-sp';
import { cidade as sertaozinho } from './sertaozinho-sp';
import { cidade as colatina } from './colatina-es';
import { cidade as aracruz } from './aracruz-es';
import { cidade as ouroPreto } from './ouro-preto-mg';
import { cidade as sabara } from './sabara-mg';
import { cidade as conselheiroLafaiete } from './conselheiro-lafaiete-mg';
import { cidade as paraty } from './paraty-rj';
import { cidade as queimados } from './queimados-rj';
import { cidade as jequie } from './jequie-ba';
import { cidade as alagoinhas } from './alagoinhas-ba';
import { cidade as santaCruzDoCapibaribe } from './santa-cruz-do-capibaribe-pe';
import { cidade as trindade } from './trindade-go';
import { cidade as aguasLindas } from './aguas-lindas-de-goias-go';
import { cidade as garopaba } from './garopaba-sc';
import { cidade as uruguaiana } from './uruguaiana-rs';
import { cidade as erechim } from './erechim-rs';
import { cidade as paragominas } from './paragominas-pa';
import { cidade as parintins } from './parintins-am';
// Bloco 14 (polos regionais e metrôs — SP/RJ/PR/SC/RS/DF/GO/PE/SE/MA)
import { cidade as birigui } from './birigui-sp';
import { cidade as jau } from './jau-sp';
import { cidade as lorena } from './lorena-sp';
import { cidade as votorantim } from './votorantim-sp';
import { cidade as mage } from './mage-rj';
import { cidade as mesquita } from './mesquita-rj';
import { cidade as nilopolis } from './nilopolis-rj';
import { cidade as fazendaRioGrande } from './fazenda-rio-grande-pr';
import { cidade as almiranteTamandare } from './almirante-tamandare-pr';
import { cidade as arapongas } from './arapongas-pr';
import { cidade as navegantes } from './navegantes-sc';
import { cidade as concordia } from './concordia-sc';
import { cidade as alvorada } from './alvorada-rs';
import { cidade as cachoeirinha } from './cachoeirinha-rs';
import { cidade as lajeado } from './lajeado-rs';
import { cidade as taguatinga } from './taguatinga-df';
import { cidade as luziania } from './luziania-go';
import { cidade as vitoriaDeSantoAntao } from './vitoria-de-santo-antao-pe';
import { cidade as nossaSenhoraDoSocorro } from './nossa-senhora-do-socorro-se';
import { cidade as caxiasMa } from './caxias-ma';
// Bloco 13 (polos regionais e grandes metrôs)
import { cidade as itaquaquecetuba } from './itaquaquecetuba-sp';
import { cidade as guaratingueta } from './guaratingueta-sp';
import { cidade as pindamonhangaba } from './pindamonhangaba-sp';
import { cidade as itapetininga } from './itapetininga-sp';
import { cidade as assis } from './assis-sp';
import { cidade as salto } from './salto-sp';
import { cidade as belfordRoxo } from './belford-roxo-rj';
import { cidade as itaguai } from './itaguai-rj';
import { cidade as itaperuna } from './itaperuna-rj';
import { cidade as ribeiraoDasNeves } from './ribeirao-das-neves-mg';
import { cidade as santaLuzia } from './santa-luzia-mg';
import { cidade as colombo } from './colombo-pr';
import { cidade as campoLargo } from './campo-largo-pr';
import { cidade as tubarao } from './tubarao-sc';
import { cidade as camboriu } from './camboriu-sc';
import { cidade as viamao } from './viamao-rs';
import { cidade as santaCruzDoSul } from './santa-cruz-do-sul-rs';
import { cidade as ceilandia } from './ceilandia-df';
import { cidade as valparaisoDeGoias } from './valparaiso-de-goias-go';
import { cidade as timon } from './timon-ma';
// Bloco 12 (alta procura — alto padrão/fitness e grandes metrôs)
import { cidade as ilhabela } from './ilhabela-sp';
import { cidade as bertioga } from './bertioga-sp';
import { cidade as ubatuba } from './ubatuba-sp';
import { cidade as louveira } from './louveira-sp';
import { cidade as itatiba } from './itatiba-sp';
import { cidade as jaguariuna } from './jaguariuna-sp';
import { cidade as vargemGrandePaulista } from './vargem-grande-paulista-sp';
import { cidade as santaBarbaraDOeste } from './santa-barbara-doeste-sp';
import { cidade as mogiGuacu } from './mogi-guacu-sp';
import { cidade as suzano } from './suzano-sp';
import { cidade as eusebio } from './eusebio-ce';
import { cidade as lagoaSanta } from './lagoa-santa-mg';
import { cidade as xangriLa } from './xangri-la-rs';
import { cidade as capaoDaCanoa } from './capao-da-canoa-rs';
import { cidade as pinhais } from './pinhais-pr';
import { cidade as aguasClaras } from './aguas-claras-df';
// Bloco 16 (polos regionais — Sudoeste mineiro / turismo)
import { cidade as passos } from './passos-mg';

export const cidades: Cidade[] = [
  // Bloco 16 (polos regionais — Sudoeste mineiro / turismo)
  passos,
  // Bloco 15 (polos regionais e turismo)
  tatui, itupeva, sertaozinho, colatina, aracruz, ouroPreto, sabara, conselheiroLafaiete,
  paraty, queimados, jequie, alagoinhas, santaCruzDoCapibaribe, trindade, aguasLindas,
  garopaba, uruguaiana, erechim, paragominas, parintins,
  // Bloco 14 (polos regionais e metrôs)
  birigui, jau, lorena, votorantim, mage, mesquita, nilopolis, fazendaRioGrande,
  almiranteTamandare, arapongas, navegantes, concordia, alvorada, cachoeirinha, lajeado,
  taguatinga, luziania, vitoriaDeSantoAntao, nossaSenhoraDoSocorro, caxiasMa,
  // Bloco 13 (polos regionais e grandes metrôs)
  itaquaquecetuba, guaratingueta, pindamonhangaba, itapetininga, assis, salto,
  belfordRoxo, itaguai, itaperuna, ribeiraoDasNeves, santaLuzia, colombo, campoLargo,
  tubarao, camboriu, viamao, santaCruzDoSul, ceilandia, valparaisoDeGoias, timon,
  // Bloco 12 (alta procura — alto padrão/fitness e grandes metrôs)
  ilhabela, bertioga, ubatuba, louveira, itatiba, jaguariuna, vargemGrandePaulista,
  santaBarbaraDOeste, mogiGuacu, suzano, eusebio, lagoaSanta, xangriLa, capaoDaCanoa,
  pinhais, aguasClaras,
  // Bloco 11 (Grande SP oeste — eixo Castello Branco / Linha 8-Diamante)
  carapicuiba, jandira, itapevi, aldeiaDaSerra,
  // Bloco 10 (expansão — alta renda/metrópole, agro, turismo e polos regionais)
  valinhos, hortolandia, taboaoDaSerra, catanduva, saoSebastiao, saoJoaoDeMeriti,
  itaborai, coronelFabriciano, patosDeMinas, itajuba, patoBranco, apucarana,
  gravatai, saoLeopoldo, brusque, itapema, teixeiraDeFreitas, gravata, crato, guarapari,
  // Bloco 9 (expansão — premium, turismo, agro e polos regionais)
  vinhedo, itu, botucatu, saoVicente, barretos, buzios, araruama, itabira,
  saoJoaoDelRei, lavras, paranagua, guarapuava, rioGrande, gramado, lages,
  juazeiroBA, portoSeguro, garanhuns, jatai, primaveraDoLeste,
  // Bloco 8 (expansão — alta renda, agro, turismo e 2as cidades)
  novaLima, sorriso, sumare, cotia, caraguatatuba, saquarema, barraMansa, barraDoPirai,
  toledo, passoFundo, palhoca, ilheus, barreiras, paulistaPE, maracanau,
  linhares, catalao, arapiraca, araguaina, jiParana, castanhal,
  // Bloco 7 (expansão — alta renda, agro e polos regionais)
  saoCaetanoDoSul, paulinia, atibaia, bragancaPaulista, aracatuba,
  resende, teresopolis, jaraguaDoSul, bentoGoncalves, araucaria,
  caboDeSantoAgostinho, caucaia, itabuna, pousoAlegre, cachoeiroDeItapemirim,
  caldasNovas, maraba, lucasDoRioVerde, varzeaGrande, tresLagoas,
  // Bloco 6 (expansão — alta renda, agro e polos regionais)
  marica, rioDasOstras, novaFriburgo, mogiDasCruzes, franca, jacarei,
  americana, rioClaro, indaiatuba, seteLagoas, pocosDeCaldas, varginha,
  saoJoseDosPinhais, saoJoseSC, parnamirim, lauroDeFreitas, sobral,
  parauapebas, rioVerde, sinop,
  // Bloco 5 (expansão — polos regionais e litoral)
  caboFrio, macae, camposDosGoytacazes, angraDosReis,
  limeira, taubate, marilia, presidentePrudente, saoCarlos, araraquara,
  ipatinga, governadorValadares, divinopolis, dourados, rondonopolis,
  imperatriz, parnaiba, petrolina, juazeiroDoNorte, novoHamburgo,
  // Bloco 4 (expansão — metrópoles e polos regionais)
  olinda, caruaru, vitoriaDaConquista, anapolis, campinaGrande, mossoro,
  ananindeua, santarem, cariacica, voltaRedonda, petropolis, canoas,
  santaMaria, chapeco, criciuma, itajai, cascavel, fozDoIguacu, uberaba, montesClaros,
  // Bloco 3 (expansão — capitais finais + metrópoles)
  piracicaba, bauru, guaruja, praiaGrande, maua, diadema,
  novaIguacu, duqueDeCaxias, saoGoncalo, betim, pontaGrossa, pelotas,
  aparecidaDeGoiania, jaboatao, maceio, camacari,
  portoVelho, rioBranco, boaVista, macapa,
  // Sudeste — SP
  saoPaulo,
  campinas,
  guarulhos,
  santoAndre,
  osasco,
  barueri,
  santanaDeParnaiba,
  alphaville,
  tambore,
  ribeiraoPreto,
  sorocaba,
  saoJoseDosCampos,
  jundiai,
  saoBernardoDoCampo,
  santos,
  saoJoseDoRioPreto,
  // Sudeste — RJ / MG / ES
  rioDeJaneiro,
  niteroi,
  beloHorizonte,
  uberlandia,
  contagem,
  juizDeFora,
  vitoria,
  vilaVelha,
  serra,
  // Sul
  curitiba,
  londrina,
  maringa,
  portoAlegre,
  caxiasDoSul,
  florianopolis,
  balnearioCamboriu,
  joinville,
  blumenau,
  // Centro-Oeste
  brasilia,
  goiania,
  campoGrande,
  cuiaba,
  // Nordeste
  fortaleza,
  salvador,
  feiraDeSantana,
  recife,
  aracaju,
  joaoPessoa,
  natal,
  teresina,
  saoLuis,
  // Norte
  manaus,
  belem,
  palmas,
];

/** Mapa slug -> cidade para lookups O(1). */
export const cidadesPorSlug: Record<string, Cidade> = Object.fromEntries(
  cidades.map((c) => [c.slug, c]),
);

export function getCidade(slug: string): Cidade | undefined {
  return cidadesPorSlug[slug];
}

export function cidadesPorEstado(estadoSlug: string): Cidade[] {
  return cidades
    .filter((c) => c.estadoSlug === estadoSlug)
    .sort((a, b) => (b.populacao ?? 0) - (a.populacao ?? 0));
}

/** Resolve a lista de cidades vizinhas (objetos), ignorando slugs inexistentes. */
export function vizinhasDe(cidade: Cidade): Cidade[] {
  return cidade.vizinhas
    .map((slug) => cidadesPorSlug[slug])
    .filter((c): c is Cidade => Boolean(c));
}

/**
 * Cidades relacionadas para interligação. Usa vizinhas declaradas e, se faltar,
 * completa com cidades do mesmo estado e depois de outros estados — garante que
 * nenhuma página fique órfã de links internos.
 */
export function relacionadas(cidade: Cidade, limite = 4): Cidade[] {
  const resultado: Cidade[] = vizinhasDe(cidade);
  const jaIncluso = new Set([cidade.slug, ...resultado.map((c) => c.slug)]);

  if (resultado.length < limite) {
    const mesmoEstado = cidades
      .filter((c) => c.estadoSlug === cidade.estadoSlug && !jaIncluso.has(c.slug))
      .sort((a, b) => (b.populacao ?? 0) - (a.populacao ?? 0));
    for (const c of mesmoEstado) {
      if (resultado.length >= limite) break;
      resultado.push(c);
      jaIncluso.add(c.slug);
    }
  }

  if (resultado.length < limite) {
    const outras = cidades
      .filter((c) => !jaIncluso.has(c.slug))
      .sort((a, b) => (b.populacao ?? 0) - (a.populacao ?? 0));
    for (const c of outras) {
      if (resultado.length >= limite) break;
      resultado.push(c);
    }
  }

  return resultado.slice(0, limite);
}
