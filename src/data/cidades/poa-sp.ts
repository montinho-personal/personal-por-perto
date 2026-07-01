import type { Cidade } from '../../lib/types';

export const cidade: Cidade = {
  slug: 'poa-sp',
  nome: 'Poá',
  uf: 'SP',
  estado: 'São Paulo',
  estadoSlug: 'sao-paulo',
  regiao: 'Sudeste',
  gentilico: 'poaense',
  tipo: 'cidade',

  populacao: 103765,
  populacaoAno: 2022,
  idhm: 0.771,
  idhmClasse: 'alto',
  altitudeM: 832,

  resumoEconomico:
    'Estância hidromineral do Alto Tietê, na Região Metropolitana de São Paulo, Poá tem um dos menores territórios do estado e forte densidade urbana. A cidade recebeu o título de estância em 1970, ligado à água mineral da Fonte Áurea, e desde então restringiu a instalação de indústrias poluentes para proteger o lençol freático. Por isso a economia é puxada por serviços, comércio e administração pública, complementados por atividade industrial e pela proximidade com os grandes polos da metrópole paulista.',

  mercado:
    'Como cidade compacta e densa da Região Metropolitana de São Paulo, Poá tem um mercado fitness alimentado tanto por moradores quanto por quem trabalha na capital e no entorno do Alto Tietê. A oferta se concentra em academias de bairro e estúdios de treino, e o personal trainer costuma ser procurado por quem quer atendimento mais próximo de casa, fugindo dos deslocamentos longos típicos da metrópole.',

  bairrosNobres: ['Centro', 'Jardim Itamarati', 'Cidade Kemel', 'Vila Áurea'],
  bairrosPopulares: ['Calmon Viana', 'Jardim Nova Poá', 'Vila Perracini', 'Vila Arizona'],

  parques: [
    {
      nome: 'Parque das Águas (Fonte Áurea)',
      descricao:
        'Área ligada à tradição hidromineral da cidade, onde fica a Fonte Áurea que dá origem à água mineral de Poá; o entorno arborizado é usado para caminhada e lazer ao ar livre.',
    },
    {
      nome: 'Balneário Municipal Vicente Leporace',
      descricao:
        'Construído nos anos 1970 no auge da estância, é um marco histórico da cidade ligado às propriedades da água mineral, hoje voltado a usos de saúde e fisioterapia.',
    },
    {
      nome: 'Praças e áreas verdes do Centro',
      descricao:
        'Numa cidade de território reduzido e muito urbanizada, as praças centrais e os calçadões concentram boa parte da atividade física ao ar livre de quem mora perto do miolo urbano.',
    },
  ],
  ciclovias:
    'A malha cicloviária é limitada pelo território pequeno e densamente ocupado; grande parte do pedal e da corrida acontece nas vias urbanas e nas conexões com os municípios vizinhos do Alto Tietê.',

  clima:
    'O clima é subtropical de altitude, ameno para os padrões paulistas por conta dos mais de 800 metros de altitude. Os verões são quentes e chuvosos e os invernos secos e mais frios, com manhãs frescas; a posição no Alto Tietê e as chuvas concentradas no verão tornam alguns pontos da cidade sujeitos a alagamentos.',
  climaTreino:
    'As temperaturas amenas favorecem o treino ao ar livre boa parte do ano, com atenção às manhãs frias do inverno e às pancadas de chuva do verão. Nos dias mais úmidos ou chuvosos, os ambientes fechados garantem a constância da rotina.',

  mobilidade:
    'Poá é cortada pela Linha 11-Coral da CPTM, com duas estações — Poá, no Centro, e Calmon Viana — que ligam a cidade a Mogi das Cruzes, ao Brás e à capital, sendo a espinha dorsal da mobilidade local. O acesso rodoviário se dá pela Rodovia Henrique Eroles (SP-66) e pela proximidade com o Rodoanel Mário Covas, além de linhas de ônibus municipais e metropolitanas.',

  corridas: [
    {
      nome: 'Run Poá',
      descricao:
        'Corrida de rua realizada em Poá com largada na região central da cidade, reunindo corredores locais e do Alto Tietê em percurso pelas vias urbanas.',
    },
  ],
  culturaEsportiva:
    'A cultura esportiva mistura a identidade de estância hidromineral com o cotidiano de uma cidade metropolitana: caminhadas em praças e áreas verdes, uso das vias urbanas para corrida e a participação em provas de rua da região do Alto Tietê.',
  academias:
    'A oferta é formada principalmente por academias de musculação e estúdios de treino funcional espalhados pelos bairros, com porte adequado a uma cidade compacta e adensada da Região Metropolitana de São Paulo.',

  destaquesFitness: [
    'Estância hidromineral do Alto Tietê, com tradição ligada à água mineral da Fonte Áurea.',
    'Clima ameno de altitude (mais de 800 m), que favorece o treino ao ar livre boa parte do ano.',
    'Linha 11-Coral da CPTM com duas estações, facilitando o deslocamento na Região Metropolitana de São Paulo.',
    'Cidade compacta e densa, com academias e estúdios de bairro próximos de quem mora na área urbana.',
  ],

  precos: {
    avulsaMin: 60,
    avulsaMax: 130,
    mensalMin: 280,
    mensalMax: 780,
    onlineMin: 130,
    onlineMax: 380,
  },

  conclusao:
    'Estância hidromineral compacta e bem conectada à capital, Poá combina clima ameno de altitude com a rotina acelerada de quem vive na Região Metropolitana de São Paulo. Um personal trainer ajuda a encaixar o treino nessa agenda, aproveitando as praças e vias da cidade e mantendo a constância mesmo com os deslocamentos típicos do Alto Tietê.',

  vizinhas: ['suzano-sp', 'itaquaquecetuba-sp', 'ferraz-de-vasconcelos-sp'],

  fontes: [
    { nome: 'IBGE Cidades — Poá', url: 'https://cidades.ibge.gov.br/brasil/sp/poa/panorama' },
    { nome: 'Prefeitura de Poá', url: 'https://poa.sp.gov.br/' },
    { nome: 'Atlas Brasil — IDHM', url: 'https://www.atlasbrasil.org.br/' },
  ],
  atualizadoEm: '2026-06-29',
};
