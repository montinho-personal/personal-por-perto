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
// Bloco 16 (polos regionais e regiões metropolitanas — SP/MG/RJ/PR/RS/SC/BA/PE/CE/GO/PA/MS)
import { cidade as embuDasArtes } from './embu-das-artes-sp';
import { cidade as ferrazDeVasconcelos } from './ferraz-de-vasconcelos-sp';
import { cidade as itapecericaDaSerra } from './itapecerica-da-serra-sp';
import { cidade as mogiMirim } from './mogi-mirim-sp';
import { cidade as saoJoaoDaBoaVista } from './sao-joao-da-boa-vista-sp';
import { cidade as paraDeMinas } from './para-de-minas-mg';
import { cidade as passos } from './passos-mg';
import { cidade as araxa } from './araxa-mg';
import { cidade as saoPedroDaAldeia } from './sao-pedro-da-aldeia-rj';
import { cidade as barraDoPirai } from './barra-do-pirai-rj';
import { cidade as umuarama } from './umuarama-pr';
import { cidade as campoMourao } from './campo-mourao-pr';
import { cidade as bage } from './bage-rs';
import { cidade as rioDoSul } from './rio-do-sul-sc';
import { cidade as pauloAfonso } from './paulo-afonso-ba';
import { cidade as camaragibe } from './camaragibe-pe';
import { cidade as maranguape } from './maranguape-ce';
import { cidade as senadorCanedo } from './senador-canedo-go';
import { cidade as abaetetuba } from './abaetetuba-pa';
import { cidade as corumba } from './corumba-ms';
// Bloco 17 (polos regionais, litoral e interior — SP/MG/RJ/PR/SC/RS/BA/PE/CE/GO/ES/PA)
import { cidade as avare } from './avare-sp';
import { cidade as itanhaem } from './itanhaem-sp';
import { cidade as jaboticabal } from './jaboticabal-sp';
import { cidade as votuporanga } from './votuporanga-sp';
import { cidade as itauna } from './itauna-mg';
import { cidade as barbacena } from './barbacena-mg';
import { cidade as muriae } from './muriae-mg';
import { cidade as teofiloOtoni } from './teofilo-otoni-mg';
import { cidade as tresRios } from './tres-rios-rj';
import { cidade as paranavai } from './paranavai-pr';
import { cidade as franciscoBeltrao } from './francisco-beltrao-pr';
import { cidade as saoBentoDoSul } from './sao-bento-do-sul-sc';
import { cidade as ijui } from './ijui-rs';
import { cidade as sapucaiaDoSul } from './sapucaia-do-sul-rs';
import { cidade as eunapolis } from './eunapolis-ba';
import { cidade as serraTalhada } from './serra-talhada-pe';
import { cidade as iguatu } from './iguatu-ce';
import { cidade as formosa } from './formosa-go';
import { cidade as saoMateus } from './sao-mateus-es';
import { cidade as tucurui } from './tucurui-pa';
// Bloco 18 (polos regionais, RMs e interior — SP/MG/RJ/PR/SC/RS/BA/PE/CE/GO/MT/MA)
import { cidade as mairipora } from './mairipora-sp';
import { cidade as ourinhos } from './ourinhos-sp';
import { cidade as leme } from './leme-sp';
import { cidade as cubatao } from './cubatao-sp';
import { cidade as alfenas } from './alfenas-mg';
import { cidade as saoSebastiaoDoParaiso } from './sao-sebastiao-do-paraiso-mg';
import { cidade as uba } from './uba-mg';
import { cidade as tresCoracoes } from './tres-coracoes-mg';
import { cidade as valenca } from './valenca-rj';
import { cidade as cianorte } from './cianorte-pr';
import { cidade as telemacoBorba } from './telemaco-borba-pr';
import { cidade as ararangua } from './ararangua-sc';
import { cidade as gaspar } from './gaspar-sc';
import { cidade as santoAngelo } from './santo-angelo-rs';
import { cidade as santoAntonioDeJesus } from './santo-antonio-de-jesus-ba';
import { cidade as beloJardim } from './belo-jardim-pe';
import { cidade as quixada } from './quixada-ce';
import { cidade as itumbiara } from './itumbiara-go';
import { cidade as tangaraDaSerra } from './tangara-da-serra-mt';
import { cidade as acailandia } from './acailandia-ma';
// Bloco 19 (polos regionais e novos estados — SP/MG/RJ/PR/SC/RS/BA/PE/CE/GO/MT/MS/MA/PA/PB/RN/SE/RO)
import { cidade as caieiras } from './caieiras-sp';
import { cidade as bebedouro } from './bebedouro-sp';
import { cidade as araguari } from './araguari-mg';
import { cidade as joaoMonlevade } from './joao-monlevade-mg';
import { cidade as rioBonito } from './rio-bonito-rj';
import { cidade as sarandi } from './sarandi-pr';
import { cidade as indaial } from './indaial-sc';
import { cidade as farroupilha } from './farroupilha-rs';
import { cidade as guanambi } from './guanambi-ba';
import { cidade as arcoverde } from './arcoverde-pe';
import { cidade as aquiraz } from './aquiraz-ce';
import { cidade as mineiros } from './mineiros-go';
import { cidade as caceres } from './caceres-mt';
import { cidade as pontaPora } from './ponta-pora-ms';
import { cidade as codo } from './codo-ma';
import { cidade as altamira } from './altamira-pa';
import { cidade as patos } from './patos-pb';
import { cidade as caico } from './caico-rn';
import { cidade as lagarto } from './lagarto-se';
import { cidade as ariquemes } from './ariquemes-ro';
// Bloco 20 (polos regionais e interior — espalhamento nacional)
import { cidade as francoDaRocha } from './franco-da-rocha-sp';
import { cidade as lins } from './lins-sp';
import { cidade as novaSerrana } from './nova-serrana-mg';
import { cidade as curvelo } from './curvelo-mg';
import { cidade as seropedica } from './seropedica-rj';
import { cidade as rolandia } from './rolandia-pr';
import { cidade as cacador } from './cacador-sc';
import { cidade as carazinho } from './carazinho-rs';
import { cidade as jacobina } from './jacobina-ba';
import { cidade as goiana } from './goiana-pe';
import { cidade as itapipoca } from './itapipoca-ce';
import { cidade as goianesia } from './goianesia-go';
import { cidade as barraDoGarcas } from './barra-do-garcas-mt';
import { cidade as navirai } from './navirai-ms';
import { cidade as bacabal } from './bacabal-ma';
import { cidade as braganca } from './braganca-pa';
import { cidade as picos } from './picos-pi';
import { cidade as gurupi } from './gurupi-to';
import { cidade as palmeiraDosIndios } from './palmeira-dos-indios-al';
import { cidade as itacoatiara } from './itacoatiara-am';
// Bloco 21 (polos regionais e interior — espalhamento nacional)
import { cidade as pirassununga } from './pirassununga-sp';
import { cidade as registro } from './registro-sp';
import { cidade as peruibe } from './peruibe-sp';
import { cidade as formiga } from './formiga-mg';
import { cidade as mariana } from './mariana-mg';
import { cidade as caratinga } from './caratinga-mg';
import { cidade as japeri } from './japeri-rj';
import { cidade as cornelioProcopio } from './cornelio-procopio-pr';
import { cidade as uniaoDaVitoria } from './uniao-da-vitoria-pr';
import { cidade as laguna } from './laguna-sc';
import { cidade as vacaria } from './vacaria-rs';
import { cidade as cachoeiraDoSul } from './cachoeira-do-sul-rs';
import { cidade as senhorDoBonfim } from './senhor-do-bonfim-ba';
import { cidade as salgueiro } from './salgueiro-pe';
import { cidade as crateus } from './crateus-ce';
import { cidade as cajazeiras } from './cajazeiras-pb';
import { cidade as saoGoncaloDoAmaranteRN } from './sao-goncalo-do-amarante-rn';
import { cidade as itabaiana } from './itabaiana-se';
import { cidade as itaituba } from './itaituba-pa';
import { cidade as vilhena } from './vilhena-ro';
// Bloco 22 (uma cidade por estado — alcance nacional, inclui 2ª cidade do AC)
import { cidade as mococa } from './mococa-sp';
import { cidade as paracatu } from './paracatu-mg';
import { cidade as casimiroDeAbreu } from './casimiro-de-abreu-rj';
import { cidade as marechalCandidoRondon } from './marechal-candido-rondon-pr';
import { cidade as imbituba } from './imbituba-sc';
import { cidade as torres } from './torres-rs';
import { cidade as brumado } from './brumado-ba';
import { cidade as igarassu } from './igarassu-pe';
import { cidade as aracati } from './aracati-ce';
import { cidade as planaltinaGO } from './planaltina-go';
import { cidade as viana } from './viana-es';
import { cidade as saoJoseDeRibamar } from './sao-jose-de-ribamar-ma';
import { cidade as barcarena } from './barcarena-pa';
import { cidade as altaFloresta } from './alta-floresta-mt';
import { cidade as aquidauana } from './aquidauana-ms';
import { cidade as penedo } from './penedo-al';
import { cidade as cabedelo } from './cabedelo-pb';
import { cidade as macaiba } from './macaiba-rn';
import { cidade as floriano } from './floriano-pi';
import { cidade as cruzeiroDoSul } from './cruzeiro-do-sul-ac';
// Bloco 23 (interior e alcance nacional — inclui 2a cidade do AP)
import { cidade as olimpia } from './olimpia-sp';
import { cidade as tupa } from './tupa-sp';
import { cidade as frutal } from './frutal-mg';
import { cidade as vicosa } from './vicosa-mg';
import { cidade as santoAntonioDePadua } from './santo-antonio-de-padua-rj';
import { cidade as ibipora } from './ibipora-pr';
import { cidade as xanxere } from './xanxere-sc';
import { cidade as montenegro } from './montenegro-rs';
import { cidade as valencaBA } from './valenca-ba';
import { cidade as carpina } from './carpina-pe';
import { cidade as tiangua } from './tiangua-ce';
import { cidade as morrinhos } from './morrinhos-go';
import { cidade as marataizes } from './marataizes-es';
import { cidade as balsas } from './balsas-ma';
import { cidade as cameta } from './cameta-pa';
import { cidade as sidrolandia } from './sidrolandia-ms';
import { cidade as curraisNovos } from './currais-novos-rn';
import { cidade as paraisoDoTocantins } from './paraiso-do-tocantins-to';
import { cidade as santana } from './santana-ap';
import { cidade as cacoal } from './cacoal-ro';
import { cidade as cachoeirasDeMacacu } from './cachoeiras-de-macacu-rj';
// Bloco 24 (interior e alcance nacional)
import { cidade as mongagua } from './mongagua-sp';
import { cidade as ibiuna } from './ibiuna-sp';
import { cidade as santaRitaDoSapucai } from './santa-rita-do-sapucai-mg';
import { cidade as itatiaia } from './itatiaia-rj';
import { cidade as jacarezinho } from './jacarezinho-pr';
import { cidade as mafra } from './mafra-sc';
import { cidade as guaiba } from './guaiba-rs';
import { cidade as itapetinga } from './itapetinga-ba';
import { cidade as pesqueira } from './pesqueira-pe';
import { cidade as russas } from './russas-ce';
import { cidade as pirenopolis } from './pirenopolis-go';
import { cidade as novaVenecia } from './nova-venecia-es';
import { cidade as santaInes } from './santa-ines-ma';
import { cidade as marituba } from './marituba-pa';
import { cidade as campoVerde } from './campo-verde-mt';
import { cidade as novaAndradina } from './nova-andradina-ms';
import { cidade as rioLargo } from './rio-largo-al';
import { cidade as santaRitaPB } from './santa-rita-pb';
import { cidade as cearaMirim } from './ceara-mirim-rn';
import { cidade as manacapuru } from './manacapuru-am';
// Bloco 25 (alcance nacional — inclui 2a cidade de RR)
import { cidade as lencoisPaulista } from './lencois-paulista-sp';
import { cidade as congonhas } from './congonhas-mg';
import { cidade as mangaratiba } from './mangaratiba-rj';
import { cidade as cambe } from './cambe-pr';
import { cidade as tijucas } from './tijucas-sc';
import { cidade as esteio } from './esteio-rs';
import { cidade as simoesFilho } from './simoes-filho-ba';
import { cidade as abreuELima } from './abreu-e-lima-pe';
import { cidade as pacatuba } from './pacatuba-ce';
import { cidade as cidadeOcidental } from './cidade-ocidental-go';
import { cidade as santaMariaDeJetiba } from './santa-maria-de-jetiba-es';
import { cidade as pacoDoLumiar } from './paco-do-lumiar-ma';
import { cidade as salinopolis } from './salinopolis-pa';
import { cidade as novaMutum } from './nova-mutum-mt';
import { cidade as maracaju } from './maracaju-ms';
import { cidade as uniaoDosPalmares } from './uniao-dos-palmares-al';
import { cidade as sousa } from './sousa-pb';
import { cidade as acu } from './acu-rn';
import { cidade as portoNacional } from './porto-nacional-to';
import { cidade as rorainopolis } from './rorainopolis-rr';
import { cidade as icara } from './icara-sc';
// Bloco 26 (alcance nacional)
import { cidade as itapeva } from './itapeva-sp';
import { cidade as janauba } from './janauba-mg';
import { cidade as vassouras } from './vassouras-rj';
import { cidade as castro } from './castro-pr';
import { cidade as pomerode } from './pomerode-sc';
import { cidade as camaqua } from './camaqua-rs';
import { cidade as cruzDasAlmas } from './cruz-das-almas-ba';
import { cidade as horizonte } from './horizonte-ce';
import { cidade as cristalina } from './cristalina-go';
import { cidade as domingosMartins } from './domingos-martins-es';
import { cidade as chapadinha } from './chapadinha-ma';
import { cidade as tailandia } from './tailandia-pa';
import { cidade as palmares } from './palmares-pe';
import { cidade as pontesELacerda } from './pontes-e-lacerda-mt';
import { cidade as paranaiba } from './paranaiba-ms';
import { cidade as marechalDeodoro } from './marechal-deodoro-al';
import { cidade as guarabira } from './guarabira-pb';
import { cidade as pauDosFerros } from './pau-dos-ferros-rn';
import { cidade as tefe } from './tefe-am';
import { cidade as colinasDoTocantins } from './colinas-do-tocantins-to';
import { cidade as quixeramobim } from './quixeramobim-ce';
import { cidade as fernandopolis } from './fernandopolis-sp';
import { cidade as patrocinio } from './patrocinio-mg';
import { cidade as paraibaDoSul } from './paraiba-do-sul-rj';
import { cidade as lapa } from './lapa-pr';
import { cidade as videira } from './videira-sc';
import { cidade as tramandai } from './tramandai-rs';
import { cidade as serrinha } from './serrinha-ba';
import { cidade as saoLourencoDaMata } from './sao-lourenco-da-mata-pe';
import { cidade as caninde } from './caninde-ce';
import { cidade as camocim } from './camocim-ce';
import { cidade as inhumas } from './inhumas-go';
import { cidade as castelo } from './castelo-es';
import { cidade as barraDoCorda } from './barra-do-corda-ma';
import { cidade as capanema } from './capanema-pa';
import { cidade as juina } from './juina-mt';
import { cidade as bonito } from './bonito-ms';
import { cidade as delmiroGouveia } from './delmiro-gouveia-al';
import { cidade as bayeux } from './bayeux-pb';
import { cidade as macau } from './macau-rn';
import { cidade as coari } from './coari-am';
import { cidade as guarai } from './guarai-to';
import { cidade as penapolis } from './penapolis-sp';
import { cidade as matao } from './matao-sp';
import { cidade as capivari } from './capivari-sp';
import { cidade as ituiutaba } from './ituiutaba-mg';
import { cidade as manhuacu } from './manhuacu-mg';
import { cidade as santaCruzRN } from './santa-cruz-rn';
import { cidade as quirinopolis } from './quirinopolis-go';
import { cidade as colider } from './colider-mt';
import { cidade as guaratuba } from './guaratuba-pr';
import { cidade as cruzAlta } from './cruz-alta-rs';
import { cidade as saoBorja } from './sao-borja-rs';
import { cidade as curitibanos } from './curitibanos-sc';
import { cidade as maravilha } from './maravilha-sc';
import { cidade as acarau } from './acarau-ce';
import { cidade as limoeiroDoNorte } from './limoeiro-do-norte-ce';
import { cidade as surubim } from './surubim-pe';
import { cidade as estancia } from './estancia-se';
import { cidade as coruripe } from './coruripe-al';
import { cidade as esperanca } from './esperanca-pb';
import { cidade as apodi } from './apodi-rn';
import { cidade as adamantina } from './adamantina-sp';
import { cidade as cacapava } from './cacapava-sp';
import { cidade as iturama } from './iturama-mg';
import { cidade as pirapora } from './pirapora-mg';
import { cidade as campoBelo } from './campo-belo-mg';
import { cidade as irati } from './irati-pr';
import { cidade as prudentopolis } from './prudentopolis-pr';
import { cidade as osorio } from './osorio-rs';
import { cidade as santaRosa } from './santa-rosa-rs';
import { cidade as garibaldi } from './garibaldi-rs';
import { cidade as bracoDoNorte } from './braco-do-norte-sc';
import { cidade as camposNovos } from './campos-novos-sc';
import { cidade as barbalha } from './barbalha-ce';
import { cidade as cascavelCE } from './cascavel-ce';
import { cidade as escada } from './escada-pe';
import { cidade as bezerros } from './bezerros-pe';
import { cidade as saoMiguelDosCampos } from './sao-miguel-dos-campos-al';
import { cidade as tobiasBarreto } from './tobias-barreto-se';
import { cidade as campoMaior } from './campo-maior-pi';
import { cidade as bomJesusDaLapa } from './bom-jesus-da-lapa-ba';
import { cidade as pederneiras } from './pederneiras-sp';
import { cidade as santaCruzDoRioPardo } from './santa-cruz-do-rio-pardo-sp';
import { cidade as saoJoseDoRioPardo } from './sao-jose-do-rio-pardo-sp';
import { cidade as bomDespacho } from './bom-despacho-mg';
import { cidade as januaria } from './januaria-mg';
import { cidade as ponteNova } from './ponte-nova-mg';
import { cidade as saoLourencoMG } from './sao-lourenco-mg';
import { cidade as paracambi } from './paracambi-rj';
import { cidade as cordeiro } from './cordeiro-rj';
import { cidade as palmeira } from './palmeira-pr';
import { cidade as rioNegro } from './rio-negro-pr';
import { cidade as santoAntonioDaPatrulha } from './santo-antonio-da-patrulha-rs';
import { cidade as taquara } from './taquara-rs';
import { cidade as saoGabriel } from './sao-gabriel-rs';
import { cidade as fraiburgo } from './fraiburgo-sc';
import { cidade as sombrio } from './sombrio-sc';
import { cidade as oeiras } from './oeiras-pi';
import { cidade as santanaDoIpanema } from './santana-do-ipanema-al';
import { cidade as ceres } from './ceres-go';
import { cidade as ico } from './ico-ce';
import { cidade as brotas } from './brotas-sp';
import { cidade as taquaritinga } from './taquaritinga-sp';
import { cidade as guaxupe } from './guaxupe-mg';
import { cidade as diamantina } from './diamantina-mg';
import { cidade as caxambu } from './caxambu-mg';
import { cidade as piraquara } from './piraquara-pr';
import { cidade as ivaipora } from './ivaipora-pr';
import { cidade as saoJoaquim } from './sao-joaquim-sc';
import { cidade as veranopolis } from './veranopolis-rs';
import { cidade as moradaNova } from './morada-nova-ce';
import { cidade as brejoSanto } from './brejo-santo-ce';
import { cidade as timbauba } from './timbauba-pe';
import { cidade as saoBentoDoUna } from './sao-bento-do-una-pe';
import { cidade as joaoCamara } from './joao-camara-rn';
import { cidade as catoleDoRocha } from './catole-do-rocha-pb';
import { cidade as tomeAcu } from './tome-acu-pa';
import { cidade as miracemaDoTocantins } from './miracema-do-tocantins-to';
import { cidade as niquelandia } from './niquelandia-go';
import { cidade as diamantino } from './diamantino-mt';
import { cidade as coxim } from './coxim-ms';
import { cidade as senaMadureira } from './sena-madureira-ac';
import { cidade as brasileia } from './brasileia-ac';
import { cidade as laranjalDoJari } from './laranjal-do-jari-ap';
import { cidade as oiapoque } from './oiapoque-ap';
import { cidade as caracarai } from './caracarai-rr';
import { cidade as jaru } from './jaru-ro';
import { cidade as rolimDeMoura } from './rolim-de-moura-ro';
import { cidade as piripiri } from './piripiri-pi';
import { cidade as saoRaimundoNonato } from './sao-raimundo-nonato-pi';
import { cidade as propria } from './propria-se';
import { cidade as capela } from './capela-se';
import { cidade as maues } from './maues-am';
import { cidade as tabatinga } from './tabatinga-am';
import { cidade as tocantinopolis } from './tocantinopolis-to';
import { cidade as dianopolis } from './dianopolis-to';
import { cidade as pinheiro } from './pinheiro-ma';
import { cidade as pedreiras } from './pedreiras-ma';
import { cidade as monteiro } from './monteiro-pb';
import { cidade as pombal } from './pombal-pb';
import { cidade as girauDoPonciano } from './girau-do-ponciano-al';
import { cidade as poa } from './poa-sp';
import { cidade as aruja } from './aruja-sp';
import { cidade as franciscoMorato } from './francisco-morato-sp';
import { cidade as cajamar } from './cajamar-sp';
import { cidade as guararema } from './guararema-sp';
import { cidade as embuGuacu } from './embu-guacu-sp';
import { cidade as ibirite } from './ibirite-mg';
import { cidade as vespasiano } from './vespasiano-mg';
import { cidade as pedroLeopoldo } from './pedro-leopoldo-mg';
import { cidade as esmeraldas } from './esmeraldas-mg';
import { cidade as timoteo } from './timoteo-mg';
import { cidade as brumadinho } from './brumadinho-mg';
import { cidade as matozinhos } from './matozinhos-mg';
import { cidade as igarape } from './igarape-mg';
import { cidade as unai } from './unai-mg';
import { cidade as cataguases } from './cataguases-mg';
import { cidade as penha } from './penha-sc';
import { cidade as extremoz } from './extremoz-rn';
import { cidade as breves } from './breves-pa';
import { cidade as santaLuziaMA } from './santa-luzia-ma';
import { cidade as ribeiraoPires } from './ribeirao-pires-sp';
import { cidade as varzeaPaulista } from './varzea-paulista-sp';
import { cidade as santaIsabel } from './santa-isabel-sp';
import { cidade as campoLimpoPaulista } from './campo-limpo-paulista-sp';
import { cidade as caete } from './caete-mg';
import { cidade as sarzedo } from './sarzedo-mg';
import { cidade as saoJoaquimDeBicas } from './sao-joaquim-de-bicas-mg';
import { cidade as ouroBranco } from './ouro-branco-mg';
import { cidade as mateusLeme } from './mateus-leme-mg';
import { cidade as rioAcima } from './rio-acima-mg';
import { cidade as quatroBarras } from './quatro-barras-pr';
import { cidade as campinaGrandeDoSul } from './campina-grande-do-sul-pr';
import { cidade as eldoradoDoSul } from './eldorado-do-sul-rs';
import { cidade as novaSantaRita } from './nova-santa-rita-rs';
import { cidade as portoBelo } from './porto-belo-sc';
import { cidade as bombinhas } from './bombinhas-sc';
import { cidade as barraVelha } from './barra-velha-sc';
import { cidade as diasDavila } from './dias-davila-ba';
import { cidade as itaitinga } from './itaitinga-ce';
import { cidade as pacajus } from './pacajus-ce';
import { cidade as novaOdessa } from './nova-odessa-sp';
import { cidade as cosmopolis } from './cosmopolis-sp';
import { cidade as arturNogueira } from './artur-nogueira-sp';
import { cidade as holambra } from './holambra-sp';
import { cidade as monteMor } from './monte-mor-sp';
import { cidade as araras } from './araras-sp';
import { cidade as boituva } from './boituva-sp';
import { cidade as tiete } from './tiete-sp';
import { cidade as rioGrandeDaSerra } from './rio-grande-da-serra-sp';
import { cidade as estanciaVelha } from './estancia-velha-rs';
import { cidade as ivoti } from './ivoti-rs';
import { cidade as parobe } from './parobe-rs';
import { cidade as igrejinha } from './igrejinha-rs';
import { cidade as charqueadas } from './charqueadas-rs';
import { cidade as rioBrancoDoSul } from './rio-branco-do-sul-pr';
import { cidade as candeias } from './candeias-ba';
import { cidade as nisiaFloresta } from './nisia-floresta-rn';
import { cidade as benevides } from './benevides-pa';
import { cidade as santaIzabelDoPara } from './santa-izabel-do-para-pa';
import { cidade as guaiuba } from './guaiuba-ce';
import { cidade as itapira } from './itapira-sp';
import { cidade as amparo } from './amparo-sp';
import { cidade as serraNegra } from './serra-negra-sp';
import { cidade as socorro } from './socorro-sp';
import { cidade as pedreira } from './pedreira-sp';
import { cidade as vargemGrandeDoSul } from './vargem-grande-do-sul-sp';
import { cidade as piedade } from './piedade-sp';
import { cidade as cerquilho } from './cerquilho-sp';
import { cidade as saltoDePirapora } from './salto-de-pirapora-sp';
import { cidade as timbo } from './timbo-sc';
import { cidade as guabiruba } from './guabiruba-sc';
import { cidade as novaPetropolis } from './nova-petropolis-rs';
import { cidade as canela } from './canela-rs';
import { cidade as santosDumont } from './santos-dumont-mg';
import { cidade as alemParaiba } from './alem-paraiba-mg';
import { cidade as arcos } from './arcos-mg';
import { cidade as lagoaDaPrata } from './lagoa-da-prata-mg';
import { cidade as pitangui } from './pitangui-mg';
import { cidade as joaoPinheiro } from './joao-pinheiro-mg';
import { cidade as tresMarias } from './tres-marias-mg';
import { cidade as itabirito } from './itabirito-mg';
import { cidade as tresPontas } from './tres-pontas-mg';
import { cidade as boaEsperanca } from './boa-esperanca-mg';
import { cidade as eloiMendes } from './eloi-mendes-mg';
import { cidade as cambui } from './cambui-mg';
import { cidade as garca } from './garca-sp';
import { cidade as mirassol } from './mirassol-sp';
import { cidade as monteAlto } from './monte-alto-sp';
import { cidade as santaAdelia } from './santa-adelia-sp';
import { cidade as santaFeDoSul } from './santa-fe-do-sul-sp';
import { cidade as andradina } from './andradina-sp';
import { cidade as estrela } from './estrela-rs';
import { cidade as teutonia } from './teutonia-rs';
import { cidade as venancioAires } from './venancio-aires-rs';
import { cidade as candelaria } from './candelaria-rs';
import { cidade as floresDaCunha } from './flores-da-cunha-rs';
import { cidade as confins } from './confins-mg';
import { cidade as carmoDoCajuru } from './carmo-do-cajuru-mg';
import { cidade as itapecericaMG } from './itapecerica-mg';
import { cidade as valeReal } from './vale-real-rs';
import { cidade as itanhandu } from './itanhandu-mg';
import { cidade as passaQuatro } from './passa-quatro-mg';
import { cidade as cristina } from './cristina-mg';
import { cidade as carmoDeMinas } from './carmo-de-minas-mg';
import { cidade as baependi } from './baependi-mg';
import { cidade as delfimMoreira } from './delfim-moreira-mg';
import { cidade as saoGoncaloDoSapucai } from './sao-goncalo-do-sapucai-mg';
import { cidade as wenceslauBraz } from './wenceslau-braz-mg';
import { cidade as congonhal } from './congonhal-mg';
import { cidade as bordaDaMata } from './borda-da-mata-mg';
import { cidade as santanaDoLivramento } from './santana-do-livramento-rs';
import { cidade as domPedrito } from './dom-pedrito-rs';
import { cidade as jaguarao } from './jaguarao-rs';
import { cidade as cacapavaDoSul } from './cacapava-do-sul-rs';
import { cidade as cangucu } from './cangucu-rs';
import { cidade as arroioGrande } from './arroio-grande-rs';
import { cidade as saoFranciscoDePaula } from './sao-francisco-de-paula-rs';
import { cidade as cambaraDoSul } from './cambara-do-sul-rs';
import { cidade as morroRedondo } from './morro-redondo-rs';
import { cidade as pinheiroMachado } from './pinheiro-machado-rs';
import { cidade as arraialDoCabo } from './arraial-do-cabo-rj';
import { cidade as maragogi } from './maragogi-al';
import { cidade as jijocaDeJericoacoara } from './jijoca-de-jericoacoara-ce';
import { cidade as tibauDoSul } from './tibau-do-sul-rn';
import { cidade as cairu } from './cairu-ba';
import { cidade as lencois } from './lencois-ba';
import { cidade as mataDeSaoJoao } from './mata-de-sao-joao-ba';
import { cidade as itacare } from './itacare-ba';
import { cidade as ipojuca } from './ipojuca-pe';
import { cidade as altoParaisoDeGoias } from './alto-paraiso-de-goias-go';
import { cidade as barreirinhas } from './barreirinhas-ma';
import { cidade as camposDoJordao } from './campos-do-jordao-sp';
import { cidade as aguasDeLindoia } from './aguas-de-lindoia-sp';
import { cidade as camanducaia } from './camanducaia-mg';
import { cidade as extrema } from './extrema-mg';
import { cidade as capitolio } from './capitolio-mg';
import { cidade as tiradentes } from './tiradentes-mg';
import { cidade as saoThomeDasLetras } from './sao-thome-das-letras-mg';
import { cidade as mateiros } from './mateiros-to';
import { cidade as santaTeresa } from './santa-teresa-es';
import { cidade as itamaraca } from './itamaraca-pe';
import { cidade as beberibe } from './beberibe-ce';
import { cidade as amontada } from './amontada-ce';
import { cidade as icapui } from './icapui-ce';
import { cidade as trairi } from './trairi-ce';
import { cidade as conde } from './conde-pb';
import { cidade as areia } from './areia-pb';
import { cidade as saoMiguelDosMilagres } from './sao-miguel-dos-milagres-al';
import { cidade as barraDeSaoMiguel } from './barra-de-sao-miguel-al';
import { cidade as portoDePedras } from './porto-de-pedras-al';
import { cidade as saoMiguelDoGostoso } from './sao-miguel-do-gostoso-rn';
import { cidade as touros } from './touros-rn';
import { cidade as galinhos } from './galinhos-rn';
import { cidade as saoFranciscoDoSul } from './sao-francisco-do-sul-sc';
import { cidade as governadorCelsoRamos } from './governador-celso-ramos-sc';
import { cidade as matinhos } from './matinhos-pr';
import { cidade as pontalDoParana } from './pontal-do-parana-pr';
import { cidade as presidenteFigueiredo } from './presidente-figueiredo-am';
import { cidade as nobres } from './nobres-mt';
import { cidade as pocone } from './pocone-mt';
import { cidade as balnearioPicarras } from './balneario-picarras-sc';
import { cidade as balnearioRincao } from './balneario-rincao-sc';
import { cidade as cidreira } from './cidreira-rs';
import { cidade as imbe } from './imbe-rs';
import { cidade as quissama } from './quissama-rj';
import { cidade as saoJoaoDaBarra } from './sao-joao-da-barra-rj';
import { cidade as anchieta } from './anchieta-es';
import { cidade as piuma } from './piuma-es';
import { cidade as itapemirim } from './itapemirim-es';
import { cidade as conceicaoDaBarra } from './conceicao-da-barra-es';
import { cidade as cachoeira } from './cachoeira-ba';
import { cidade as santoAmaro } from './santo-amaro-ba';
import { cidade as prado } from './prado-ba';
import { cidade as cunha } from './cunha-sp';
import { cidade as saoJoseDoBarreiro } from './sao-jose-do-barreiro-sp';
import { cidade as corumbaDeGoias } from './corumba-de-goias-go';
import { cidade as carrancas } from './carrancas-mg';
import { cidade as delfinopolis } from './delfinopolis-mg';
import { cidade as santanaDoRiacho } from './santana-do-riacho-mg';
import { cidade as baiaFormosa } from './baia-formosa-rn';
import { cidade as guaraquecaba } from './guaraquecaba-pr';
import { cidade as urubici } from './urubici-sc';
import { cidade as bomJardimDaSerra } from './bom-jardim-da-serra-sc';
import { cidade as trezeTilias } from './treze-tilias-sc';
import { cidade as urussanga } from './urussanga-sc';
import { cidade as serro } from './serro-mg';
import { cidade as conceicaoDoMatoDentro } from './conceicao-do-mato-dentro-mg';
import { cidade as limaDuarte } from './lima-duarte-mg';
import { cidade as mucuge } from './mucuge-ba';
import { cidade as ibicoara } from './ibicoara-ba';
import { cidade as rioDeContas } from './rio-de-contas-ba';
import { cidade as guaramiranga } from './guaramiranga-ce';
import { cidade as novoAirao } from './novo-airao-am';
import { cidade as soure } from './soure-pa';
import { cidade as guajaraMirim } from './guajara-mirim-ro';
import { cidade as xapuri } from './xapuri-ac';
import { cidade as saoBentoDoSapucai } from './sao-bento-do-sapucai-sp';
import { cidade as bananal } from './bananal-sp';
import { cidade as silveiras } from './silveiras-sp';
import { cidade as areias } from './areias-sp';
import { cidade as luisEduardoMagalhaes } from './luis-eduardo-magalhaes-ba';
import { cidade as saoDesiderio } from './sao-desiderio-ba';
import { cidade as correntina } from './correntina-ba';
import { cidade as formosaDoRioPreto } from './formosa-do-rio-preto-ba';
import { cidade as urucui } from './urucui-pi';
import { cidade as bomJesus } from './bom-jesus-pi';
import { cidade as toritama } from './toritama-pe';
import { cidade as saoCaitano } from './sao-caitano-pe';
import { cidade as triunfo } from './triunfo-pe';
import { cidade as chapadaoDoSul } from './chapadao-do-sul-ms';
import { cidade as costaRica } from './costa-rica-ms';
import { cidade as saoGabrielDoOeste } from './sao-gabriel-do-oeste-ms';
import { cidade as jardim } from './jardim-ms';
import { cidade as miranda } from './miranda-ms';
import { cidade as saoPedro } from './sao-pedro-sp';
import { cidade as ilhaSolteira } from './ilha-solteira-sp';
import { cidade as querencia } from './querencia-mt';
import { cidade as sapezal } from './sapezal-mt';
import { cidade as aguaBoa } from './agua-boa-mt';
import { cidade as canarana } from './canarana-mt';
import { cidade as lagoaGrande } from './lagoa-grande-pe';
import { cidade as santaMariaDaBoaVista } from './santa-maria-da-boa-vista-pe';
import { cidade as cabrobo } from './cabrobo-pe';
import { cidade as petrolandia } from './petrolandia-pe';
import { cidade as novaPrata } from './nova-prata-rs';
import { cidade as saoMarcos } from './sao-marcos-rs';
import { cidade as monteBeloDoSul } from './monte-belo-do-sul-rs';
import { cidade as jales } from './jales-sp';
import { cidade as palotina } from './palotina-pr';
import { cidade as assisChateaubriand } from './assis-chateaubriand-pr';
import { cidade as ubirata } from './ubirata-pr';
import { cidade as vendaNovaDoImigrante } from './venda-nova-do-imigrante-es';
import { cidade as saoMiguelDoOeste } from './sao-miguel-do-oeste-sc';
import { cidade as naoMeToque } from './nao-me-toque-rs';
import { cidade as marau } from './marau-rs';
import { cidade as getulioVargas } from './getulio-vargas-rs';
import { cidade as guapore } from './guapore-rs';
import { cidade as veraCruz } from './vera-cruz-rs';
import { cidade as arroioDoMeio } from './arroio-do-meio-rs';
import { cidade as horizontina } from './horizontina-rs';

export const cidades: Cidade[] = [
  // Bloco 44 (Vale do São Francisco PE, Vale dos Vinhedos/agronegócio RS, agronegócio PR/SC, Venda Nova do Imigrante ES)
  lagoaGrande, santaMariaDaBoaVista, cabrobo, petrolandia, novaPrata,
  saoMarcos, monteBeloDoSul, jales, palotina, assisChateaubriand, ubirata,
  vendaNovaDoImigrante, saoMiguelDoOeste, naoMeToque, marau, getulioVargas,
  guapore, veraCruz, arroioDoMeio, horizontina,
  // Bloco 43 (agronegócio Oeste da Bahia/Piauí/MT/MS, Pantanal/Bonito, Agreste PE)
  luisEduardoMagalhaes, saoDesiderio, correntina, formosaDoRioPreto, urucui,
  bomJesus, toritama, saoCaitano, triunfo, chapadaoDoSul, costaRica,
  saoGabrielDoOeste, jardim, miranda, saoPedro, ilhaSolteira, querencia,
  sapezal, aguaBoa, canarana,
  // Bloco 42 (Chapada Diamantina, serras SC/MG, litoral PR/PA, Amazônia/Acre/Rondônia, vale histórico SP)
  guaraquecaba, urubici, bomJardimDaSerra, trezeTilias, urussanga, serro,
  conceicaoDoMatoDentro, limaDuarte, mucuge, ibicoara, rioDeContas,
  guaramiranga, novoAirao, soure, guajaraMirim, xapuri, saoBentoDoSapucai,
  bananal, silveiras, areias,
  // Bloco 41 (litoral SC/RS/RJ/ES, Recôncavo Baiano e serras MG/GO)
  balnearioPicarras, balnearioRincao, cidreira, imbe, quissama,
  saoJoaoDaBarra, anchieta, piuma, itapemirim, conceicaoDaBarra, cachoeira,
  santoAmaro, prado, cunha, saoJoseDoBarreiro, corumbaDeGoias, carrancas,
  delfinopolis, santanaDoRiacho, baiaFormosa,
  // Bloco 40 (litoral NE, Pantanal/Amazônia e litoral Sul)
  itamaraca, beberibe, amontada, icapui, trairi, conde, areia,
  saoMiguelDosMilagres, barraDeSaoMiguel, portoDePedras, saoMiguelDoGostoso,
  touros, galinhos, saoFranciscoDoSul, governadorCelsoRamos, matinhos,
  pontalDoParana, presidenteFigueiredo, nobres, pocone,
  // Bloco 39 (destinos turísticos de alta demanda nacional)
  arraialDoCabo, maragogi, jijocaDeJericoacoara, tibauDoSul, cairu, lencois,
  mataDeSaoJoao, itacare, ipojuca, altoParaisoDeGoias, barreirinhas,
  camposDoJordao, aguasDeLindoia, camanducaia, extrema, capitolio, tiradentes,
  saoThomeDasLetras, mateiros, santaTeresa,
  // Bloco 38 (Serra da Mantiqueira sul de Minas, Campanha e Campos de Cima da Serra — RS)
  itanhandu, passaQuatro, cristina, carmoDeMinas, baependi, delfimMoreira,
  saoGoncaloDoSapucai, wenceslauBraz, congonhal, bordaDaMata,
  santanaDoLivramento, domPedrito, jaguarao, cacapavaDoSul, cangucu,
  arroioGrande, saoFranciscoDePaula, cambaraDoSul, morroRedondo,
  pinheiroMachado,
  // Bloco 37 (interior de Minas, interior paulista, Vale do Taquari/Caí)
  itabirito, tresPontas, boaEsperanca, eloiMendes, cambui, garca, mirassol,
  monteAlto, santaAdelia, santaFeDoSul, andradina, estrela, teutonia,
  venancioAires, candelaria, floresDaCunha, confins, carmoDoCajuru,
  itapecericaMG, valeReal,
  // Bloco 36 (alta demanda — Circuito das Águas, Serra Gaúcha, interior MG)
  itapira, amparo, serraNegra, socorro, pedreira, vargemGrandeDoSul, piedade,
  cerquilho, saltoDePirapora, timbo, guabiruba, novaPetropolis, canela,
  santosDumont, alemParaiba, arcos, lagoaDaPrata, pitangui, joaoPinheiro,
  tresMarias,
  // Bloco 35 (alta demanda — RMs)
  novaOdessa, cosmopolis, arturNogueira, holambra, monteMor, araras, boituva,
  tiete, rioGrandeDaSerra, estanciaVelha, ivoti, parobe, igrejinha, charqueadas,
  rioBrancoDoSul, candeias, nisiaFloresta, benevides, santaIzabelDoPara, guaiuba,
  // Bloco 34 (alta demanda — RMs e litoral)
  ribeiraoPires, varzeaPaulista, santaIsabel, campoLimpoPaulista, caete, sarzedo,
  saoJoaquimDeBicas, ouroBranco, mateusLeme, rioAcima, quatroBarras,
  campinaGrandeDoSul, eldoradoDoSul, novaSantaRita, portoBelo, bombinhas,
  barraVelha, diasDavila, itaitinga, pacajus,
  // Bloco 33 (alta demanda — RM SP e RM BH)
  poa, aruja, franciscoMorato, cajamar, guararema, embuGuacu, ibirite,
  vespasiano, pedroLeopoldo, esmeraldas, timoteo, brumadinho, matozinhos,
  igarape, unai, cataguases, penha, extremoz, breves, santaLuziaMA,
  // Bloco 32 (foco Norte/Nordeste)
  senaMadureira, brasileia, laranjalDoJari, oiapoque, caracarai, jaru,
  rolimDeMoura, piripiri, saoRaimundoNonato, propria, capela, maues, tabatinga,
  tocantinopolis, dianopolis, pinheiro, pedreiras, monteiro, pombal,
  girauDoPonciano,
  // Bloco 31 (alcance nacional)
  brotas, taquaritinga, guaxupe, diamantina, caxambu, piraquara, ivaipora,
  saoJoaquim, veranopolis, moradaNova, brejoSanto, timbauba, saoBentoDoUna,
  joaoCamara, catoleDoRocha, tomeAcu, miracemaDoTocantins, niquelandia,
  diamantino, coxim,
  // Bloco 30 (alcance nacional)
  pederneiras, santaCruzDoRioPardo, saoJoseDoRioPardo, bomDespacho, januaria,
  ponteNova, saoLourencoMG, paracambi, cordeiro, palmeira, rioNegro,
  santoAntonioDaPatrulha, taquara, saoGabriel, fraiburgo, sombrio, oeiras,
  santanaDoIpanema, ceres, ico,
  // Bloco 29 (alcance nacional)
  adamantina, cacapava, iturama, pirapora, campoBelo, irati, prudentopolis,
  osorio, santaRosa, garibaldi, bracoDoNorte, camposNovos, barbalha, cascavelCE,
  escada, bezerros, saoMiguelDosCampos, tobiasBarreto, campoMaior, bomJesusDaLapa,
  // Bloco 28 (alcance nacional)
  penapolis, matao, capivari, ituiutaba, manhuacu, santaCruzRN, quirinopolis,
  colider, guaratuba, cruzAlta, saoBorja, curitibanos, maravilha, acarau,
  limoeiroDoNorte, surubim, estancia, coruripe, esperanca, apodi,
  // Bloco 27 (alcance nacional)
  fernandopolis, patrocinio, paraibaDoSul, lapa, videira, tramandai, serrinha,
  saoLourencoDaMata, caninde, camocim, inhumas, castelo, barraDoCorda, capanema,
  juina, bonito, delmiroGouveia, bayeux, macau, coari, guarai,
  // Bloco 26 (alcance nacional)
  itapeva, janauba, vassouras, castro, pomerode, camaqua, cruzDasAlmas, horizonte,
  cristalina, domingosMartins, chapadinha, tailandia, palmares, pontesELacerda, paranaiba,
  marechalDeodoro, guarabira, pauDosFerros, tefe, colinasDoTocantins, quixeramobim,
  // Bloco 25 (alcance nacional)
  lencoisPaulista, congonhas, mangaratiba, cambe, tijucas, esteio, simoesFilho, abreuELima,
  pacatuba, cidadeOcidental, santaMariaDeJetiba, pacoDoLumiar, salinopolis, novaMutum,
  maracaju, uniaoDosPalmares, sousa, acu, portoNacional, rorainopolis, icara,
  // Bloco 24 (interior e alcance nacional)
  mongagua, ibiuna, santaRitaDoSapucai, itatiaia, jacarezinho, mafra, guaiba, itapetinga,
  pesqueira, russas, pirenopolis, novaVenecia, santaInes, marituba, campoVerde,
  novaAndradina, rioLargo, santaRitaPB, cearaMirim, manacapuru,
  // Bloco 23 (interior e alcance nacional)
  olimpia, tupa, frutal, vicosa, santoAntonioDePadua, ibipora, xanxere, montenegro,
  valencaBA, carpina, tiangua, morrinhos, marataizes, balsas, cameta, sidrolandia,
  curraisNovos, paraisoDoTocantins, santana, cacoal, cachoeirasDeMacacu,
  // Bloco 22 (uma cidade por estado — alcance nacional)
  mococa, paracatu, casimiroDeAbreu, marechalCandidoRondon, imbituba, torres, brumado,
  igarassu, aracati, planaltinaGO, viana, saoJoseDeRibamar, barcarena, altaFloresta,
  aquidauana, penedo, cabedelo, macaiba, floriano, cruzeiroDoSul,
  // Bloco 21 (polos regionais e interior — espalhamento nacional)
  pirassununga, registro, peruibe, formiga, mariana, caratinga, japeri, cornelioProcopio,
  uniaoDaVitoria, laguna, vacaria, cachoeiraDoSul, senhorDoBonfim, salgueiro, crateus,
  cajazeiras, saoGoncaloDoAmaranteRN, itabaiana, itaituba, vilhena,
  // Bloco 20 (polos regionais e interior — espalhamento nacional)
  francoDaRocha, lins, novaSerrana, curvelo, seropedica, rolandia, cacador, carazinho,
  jacobina, goiana, itapipoca, goianesia, barraDoGarcas, navirai, bacabal, braganca,
  picos, gurupi, palmeiraDosIndios, itacoatiara,
  // Bloco 19 (polos regionais e novos estados PB/RN/SE/RO)
  caieiras, bebedouro, araguari, joaoMonlevade, rioBonito, sarandi, indaial, farroupilha,
  guanambi, arcoverde, aquiraz, mineiros, caceres, pontaPora, codo, altamira, patos,
  caico, lagarto, ariquemes,
  // Bloco 18 (polos regionais, RMs e interior)
  mairipora, ourinhos, leme, cubatao, alfenas, saoSebastiaoDoParaiso, uba, tresCoracoes,
  valenca, cianorte, telemacoBorba, ararangua, gaspar, santoAngelo, santoAntonioDeJesus,
  beloJardim, quixada, itumbiara, tangaraDaSerra, acailandia,
  // Bloco 17 (polos regionais, litoral e interior)
  avare, itanhaem, jaboticabal, votuporanga, itauna, barbacena, muriae, teofiloOtoni,
  tresRios, paranavai, franciscoBeltrao, saoBentoDoSul, ijui, sapucaiaDoSul, eunapolis,
  serraTalhada, iguatu, formosa, saoMateus, tucurui,
  // Bloco 16 (polos regionais e regiões metropolitanas)
  embuDasArtes, ferrazDeVasconcelos, itapecericaDaSerra, mogiMirim, saoJoaoDaBoaVista,
  paraDeMinas, passos, araxa, saoPedroDaAldeia, barraDoPirai, umuarama, campoMourao,
  bage, rioDoSul, pauloAfonso, camaragibe, maranguape, senadorCanedo, abaetetuba, corumba,
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
  novaLima, sorriso, sumare, cotia, caraguatatuba, saquarema, barraMansa,
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
