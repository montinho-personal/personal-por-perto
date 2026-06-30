import type { Cidade } from '../../lib/types';

export const cidade: Cidade = {
  slug: 'sao-joaquim-sc',
  nome: 'São Joaquim',
  uf: 'SC',
  estado: 'Santa Catarina',
  estadoSlug: 'santa-catarina',
  regiao: 'Sul',
  gentilico: 'joaquinense',
  tipo: 'cidade',

  populacao: 25939,
  populacaoAno: 2022,
  idhm: 0.687,
  idhmClasse: 'médio',
  altitudeM: 1360,

  resumoEconomico:
    'Encravada no topo da Serra Catarinense, a cerca de 1.360 metros de altitude, São Joaquim é reconhecida como a Capital Nacional da Maçã: o município responde por cerca de um quarto da produção brasileira da fruta e por mais da metade da safra catarinense. Nas últimas décadas, somou a essa vocação os premiados vinhos finos de altitude, que ajudaram a movimentar o enoturismo e a reduzir a sazonalidade. O frio rigoroso, as nevascas ocasionais no inverno e as paisagens de planalto fizeram do turismo um pilar cada vez mais importante da economia local.',

  mercado:
    'Por ser uma cidade pequena do interior catarinense, o mercado fitness de São Joaquim é enxuto e formado sobretudo por academias locais de musculação e treino funcional. A procura por personal trainers tende a vir de moradores que buscam orientação para treinar no frio intenso ao longo do ano e de quem quer aproveitar as trilhas e os campos de altitude da serra, além do fluxo sazonal ligado ao turismo de inverno e ao enoturismo.',

  bairrosNobres: ['Centro', 'Santa Augusta', 'Bom Jesus', 'São Cristóvão'],
  bairrosPopulares: ['Vila Nova', 'Santo Antônio', 'Industrial', 'Pessegueiros'],

  parques: [
    {
      nome: 'Parque Nacional de São Joaquim (entorno da serra)',
      descricao:
        'Unidade de conservação que protege araucárias, campos de altitude, cânions e nascentes da Serra Catarinense, distribuída por municípios vizinhos a São Joaquim. As trilhas e a natureza preservada do entorno são referência para quem busca atividade ao ar livre em meio à mata de araucária e ao clima frio do planalto.',
    },
    {
      nome: 'Coxilha Rica e campos de altitude',
      descricao:
        'A região de coxilhas e campos abertos típica do planalto serrano, com taipas centenárias e paisagem de pecuária tradicional, oferece percursos amplos para caminhada, corrida e pedal em meio ao cenário rural da serra.',
    },
    {
      nome: 'Vinhedos e estradas rurais de altitude',
      descricao:
        'As vinícolas e os parreirais espalhados pelo interior do município criam roteiros entre vinhedos e pomares de maçã, com estradas e trilhas usadas para caminhadas e cicloturismo durante o enoturismo.',
    },
  ],
  ciclovias:
    'A estrutura cicloviária urbana é modesta, condizente com o porte da cidade; boa parte do pedal e da corrida acontece nas vias do núcleo urbano e, sobretudo, nas estradas rurais e nos campos de altitude do entorno serrano.',

  clima:
    'São Joaquim figura entre as cidades mais frias do Brasil. Pela altitude elevada na Serra Catarinense, registra geadas frequentes, longos períodos de frio (importantes, inclusive, para a cultura da maçã) e nevascas ocasionais entre junho e agosto, com mínimas que já marcaram valores negativos expressivos. Os verões são amenos, e a amplitude térmica entre o dia e a noite costuma ser grande ao longo do ano.',
  climaTreino:
    'O frio intenso é o fator que mais condiciona o treino: exige aquecimento mais longo, roupas em camadas e atenção em dias de geada ou neve, quando pistas e calçadas podem ficar escorregadias. Nos meses mais rigorosos, ambientes fechados e aquecidos são a opção mais segura, enquanto os dias amenos favorecem caminhadas, corridas e trilhas ao ar livre.',

  mobilidade:
    'O acesso a São Joaquim se dá principalmente pela SC-114, que conecta a cidade a Lages e à BR-282, e pela SC-390, a rodovia que cruza a Serra do Rio do Rastro e liga o planalto serrano ao litoral sul catarinense. O transporte urbano é feito por ônibus, e em dias de frio extremo trechos dessas rodovias podem amanhecer com gelo sobre a pista.',

  corridas: [
    {
      nome: 'Provas de corrida de rua da Serra Catarinense',
      descricao:
        'A região serrana sedia provas de corrida de rua que aproveitam o clima frio e o cenário de altitude, atraindo corredores em busca de desafio em temperaturas baixas.',
    },
    {
      nome: 'Trilhas e corridas de montanha no planalto serrano',
      descricao:
        'Os campos de altitude, as trilhas em meio à araucária e os cânions do entorno fazem da Serra Catarinense um destino procurado para trail running e corrida de montanha.',
    },
  ],
  culturaEsportiva:
    'A cultura esportiva combina o gosto por atividades ao ar livre na serra — caminhadas, trilhas e pedal entre vinhedos, campos de altitude e mata de araucária — com o turismo de inverno e o enoturismo, sempre marcados pelo frio característico da cidade mais alta de Santa Catarina.',
  academias:
    'A oferta é formada principalmente por academias locais de musculação e treino funcional, concentradas no Centro e nos bairros residenciais, com porte compatível com uma cidade pequena do interior catarinense.',

  destaquesFitness: [
    'Capital Nacional da Maçã, a cerca de 1.360 metros de altitude, no topo da Serra Catarinense.',
    'Uma das cidades mais frias do Brasil, com geadas frequentes e neve ocasional no inverno.',
    'Trilhas, campos de altitude e mata de araucária no entorno serrano para atividade ao ar livre.',
    'Vinhos finos de altitude e enoturismo que aquecem o fluxo de visitantes ao longo do ano.',
  ],

  precos: {
    avulsaMin: 55,
    avulsaMax: 120,
    mensalMin: 260,
    mensalMax: 720,
    onlineMin: 120,
    onlineMax: 360,
  },

  conclusao:
    'Cidade de altitude e frio rigoroso, São Joaquim pede um treino adaptado ao clima e que saiba aproveitar as trilhas, os campos e as estradas da serra nos dias amenos. Um personal trainer ajuda a organizar a rotina respeitando o frio, definindo aquecimento e horários adequados e mantendo a constância ao longo do inverno serrano.',

  vizinhas: ['lages-sc', 'curitibanos-sc'],

  fontes: [
    { nome: 'IBGE Cidades — São Joaquim', url: 'https://cidades.ibge.gov.br/brasil/sc/sao-joaquim/panorama' },
    { nome: 'Prefeitura de São Joaquim', url: 'https://www.saojoaquim.sc.gov.br/' },
    { nome: 'Atlas Brasil — IDHM', url: 'https://www.atlasbrasil.org.br/' },
  ],
  atualizadoEm: '2026-06-29',
};
