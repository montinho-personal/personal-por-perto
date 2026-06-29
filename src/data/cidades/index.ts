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

export const cidades: Cidade[] = [
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
