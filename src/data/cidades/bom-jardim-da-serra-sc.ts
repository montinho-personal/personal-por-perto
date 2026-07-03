import type { Cidade } from '../../lib/types';

export const cidade: Cidade = {
  slug: 'bom-jardim-da-serra-sc',
  nome: 'Bom Jardim da Serra',
  uf: 'SC',
  estado: 'Santa Catarina',
  estadoSlug: 'santa-catarina',
  regiao: 'Sul',
  gentilico: 'bom-jardinense',
  tipo: 'cidade',

  populacao: 4026,
  populacaoAno: 2022,
  idhm: 0.700,
  idhmClasse: 'alto',
  altitudeM: 1245,

  resumoEconomico:
    'No topo da Serra Catarinense, a cerca de 1.245 metros de altitude, Bom Jardim da Serra é conhecida como a "Capital das Águas", pelas mais de 30 cachoeiras e pelas 14 nascentes do rio Pelotas espalhadas por seu território. A economia é sustentada pela agropecuária — fruticultura de maçã (o município integra a região com Denominação de Origem da Fuji), cultivo de milho, batata e pinhão, truticultura e pecuária extensiva de bovinos e ovinos —, que responde pela maior fatia do PIB local. Ao lado da produção rural, o turismo de montanha ganhou peso crescente: a cidade abriga o mirante da Serra do Rio do Rastro, uma das estradas mais famosas do Brasil, além de cânions e cachoeiras que atraem visitantes o ano inteiro.',

  mercado:
    'Por ser um município muito pequeno e de vocação rural e turística, o mercado fitness formal de Bom Jardim da Serra é bastante restrito, sem indícios de rede estruturada de academias. A procura por personal trainer tende a se concentrar em orientação para treinar com segurança no frio intenso e nas estradas de montanha, além do público ligado ao turismo — motociclistas, trekkers e visitantes de pousadas rurais — que busca atividade guiada durante a estada.',

  bairrosNobres: ['Centro'],
  bairrosPopulares: ['Invernada Grande', 'Barrinha'],

  parques: [
    {
      nome: 'Mirante da Serra do Rio do Rastro',
      descricao:
        'No alto da SC-390, na divisa com Lauro Müller, o mirante da Serra do Rio do Rastro é um dos points mais fotografados do Brasil, com cerca de 280 curvas fechadas entre paredões de pedra. É o principal destino do mototurismo nacional e já recebeu eventos como o Red Bull Extreme Drift, além de campanhas publicitárias atraídas pelo cenário radical da estrada.',
    },
    {
      nome: 'Cânions da Ronda, do Funil e das Laranjeiras',
      descricao:
        'Os três principais cânions do município reúnem paredões de até 600 metros de altura, cachoeiras e formações rochosas, com trilhas de caminhada, passeios de 4x4 e cavalgadas. O Cânion das Laranjeiras, o mais monumental, tem cerca de três quilômetros de extensão, enquanto o da Ronda é o de acesso mais fácil.',
    },
    {
      nome: 'Cachoeiras da Barrinha e Hélio Guedes',
      descricao:
        'Parte do conjunto de mais de 30 quedas d\'água que rendeu à cidade o apelido de "Capital das Águas", a Cascata da Barrinha fica às margens da SC-390, na entrada do município, e a Cachoeira Hélio Guedes forma piscinas naturais de água cristalina — pontos usados para caminhada e contato com a natureza.',
    },
  ],
  ciclovias:
    'Não há estrutura cicloviária urbana; o pedal e o cicloturismo acontecem nas estradas rurais e na própria SC-390, onde o cruzamento com o tráfego intenso de motociclistas turistas nas curvas da Serra do Rio do Rastro pede atenção redobrada.',

  clima:
    'Bom Jardim da Serra figura entre as cidades mais frias do Brasil, com geadas frequentes no inverno e ocorrência recorrente de neve nos pontos mais altos. Mínimas negativas são registradas com regularidade nos meses mais rigorosos — em 2026 a cidade já marcou recordes como -9,2 °C, -7,3 °C e -7,5 °C —, e rios chegam a formar gelo nas madrugadas mais intensas. Os verões são amenos, com grande amplitude térmica entre o dia e a noite.',
  climaTreino:
    'O frio extremo é o fator que mais condiciona o treino: pede aquecimento mais longo, roupas em camadas e cautela redobrada em dias de geada ou neve, quando estradas e trilhas ficam escorregadias. Nos períodos mais rigorosos do inverno, ambientes fechados e aquecidos são a opção mais segura, enquanto os dias amenos favorecem caminhadas e trilhas ao ar livre na serra.',

  mobilidade:
    'O acesso pavimentado a Bom Jardim da Serra é feito pela SC-390, que liga o município a São Joaquim (cerca de 43 km) e a Lauro Müller (cerca de 34 km) cruzando o trecho mais espetacular da Serra do Rio do Rastro, com suas curvas fechadas entre paredões. Não há transporte coletivo urbano estruturado, e em dias de frio extremo trechos da rodovia podem amanhecer com gelo sobre a pista, exigindo cuidado redobrado de motoristas e motociclistas.',

  corridas: [
    {
      nome: 'Mizuno Uphill Marathon',
      descricao:
        'Considerada uma das provas de subida mais desafiadoras do Brasil, é disputada anualmente na Serra do Rio do Rastro, com percursos de 25 km, 42 km e o desafio combinado de 67 km (Samurai Battle). Os corredores enfrentam curvas fechadas, forte ganho de altitude e uma queda brusca de temperatura entre a largada e o mirante, no alto do município.',
    },
  ],
  culturaEsportiva:
    'A cultura esportiva de Bom Jardim da Serra gira em torno da Serra do Rio do Rastro, destino máximo do mototurismo brasileiro, e das trilhas, cânions e cachoeiras que atraem trekking, cavalgadas e passeios de 4x4 pelo circuito de turismo rural do município. A Mizuno Uphill Marathon reforça o calendário esportivo local, e o frio rigoroso da serra molda a rotina de quem treina ao ar livre durante boa parte do ano.',
  academias:
    'A oferta de academias é bastante restrita, concentrada no Centro, compatível com o porte muito pequeno e a vocação rural do município.',

  destaquesFitness: [
    'Mirante da Serra do Rio do Rastro, uma das estradas mais famosas do Brasil, com cerca de 280 curvas e principal destino do mototurismo nacional.',
    'Uma das cidades mais frias do Brasil, com registros recentes de até -9,2 °C, geadas frequentes e ocorrência de neve no inverno.',
    '"Capital das Águas", com mais de 30 cachoeiras e cânions como o das Laranjeiras, com paredões de até 600 metros de altura.',
    'Sede da Mizuno Uphill Marathon, prova de subida com percursos de até 67 km disputada na Serra do Rio do Rastro.',
  ],

  precos: {
    avulsaMin: 50,
    avulsaMax: 110,
    mensalMin: 240,
    mensalMax: 650,
    onlineMin: 110,
    onlineMax: 320,
  },

  conclusao:
    'Cidade de altitude, frio rigoroso e paisagens marcadas pela Serra do Rio do Rastro, Bom Jardim da Serra pede um treino adaptado ao clima e que saiba aproveitar as trilhas, cânions e cachoeiras da região nos dias mais amenos. Diante de um mercado fitness ainda muito enxuto, um personal trainer ajuda moradores e visitantes a manter a constância, respeitando o frio intenso e as particularidades de treinar em uma cidade pequena e serrana.',

  vizinhas: ['sao-joaquim-sc', 'urubici-sc'],

  fontes: [
    { nome: 'IBGE Cidades — Bom Jardim da Serra', url: 'https://cidades.ibge.gov.br/brasil/sc/bom-jardim-da-serra/panorama' },
    { nome: 'Prefeitura Municipal de Bom Jardim da Serra', url: 'https://bomjardimdaserra.sc.gov.br/' },
    { nome: 'Atlas Brasil — IDHM', url: 'https://www.atlasbrasil.org.br/' },
  ],
  atualizadoEm: '2026-07-02',
};
