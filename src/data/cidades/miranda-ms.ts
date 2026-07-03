import type { Cidade } from '../../lib/types';

export const cidade: Cidade = {
  slug: 'miranda-ms',
  nome: 'Miranda',
  uf: 'MS',
  estado: 'Mato Grosso do Sul',
  estadoSlug: 'mato-grosso-do-sul',
  regiao: 'Centro-Oeste',
  gentilico: 'mirandense',
  tipo: 'cidade',

  populacao: 25536,
  populacaoAno: 2022,
  idhm: 0.632,
  idhmClasse: 'médio',
  altitudeM: 126,

  resumoEconomico:
    'Fundada em 1778, Miranda é uma das cidades mais antigas de Mato Grosso do Sul e é considerada uma das principais portas de entrada do Pantanal Sul, a cerca de 207 km de Campo Grande pela BR-262. O turismo rural é hoje a principal referência econômica do município, puxado pela pesca esportiva no rio Miranda, pelo ecoturismo em fazendas-hotel e pela observação de fauna, além da pecuária tradicional da região. Miranda também abriga a segunda maior população indígena do estado, com forte presença da etnia Terena distribuída em aldeias como Cachoeirinha — a maior delas, com milhares de moradores —, Moreira, Passarinho e Lalima, cujo artesanato em cerâmica e tecelagem é vendido em feiras e lojas locais. O PIB per capita do município fica abaixo da média estadual, refletindo o perfil de economia de cidade média do interior pantaneiro.',

  mercado:
    'O mercado fitness de Miranda é pequeno e concentrado em poucas academias locais de musculação, coerente com o porte de uma cidade média do interior fortemente voltada ao turismo. A procura por personal trainer tende a vir de moradores que buscam treino orientado para o calor intenso da região e de visitantes hospedados em pousadas e fazendas que já incluem atividades físicas como cavalgada, caminhada e remo no roteiro de ecoturismo.',

  bairrosNobres: ['Centro', 'Beira Rio'],
  bairrosPopulares: ['Jardim Carandá', 'Shalon', 'Baiazinha'],

  parques: [
    {
      nome: 'Balneário Municipal e orla do rio Miranda',
      descricao:
        'Área de lazer às margens do rio Miranda, tradicional ponto de banho e convivência da cidade, usada também para caminhada e atividade física ao ar livre junto à água.',
    },
    {
      nome: 'Praça Central Histórica Agenor Carrilho',
      descricao:
        'Praça revitalizada no coração do Centro histórico, cercada por construções coloniais como a Igreja Matriz Nossa Senhora do Carmo (1931) e a antiga estação ferroviária, hoje sede de museu e secretarias municipais.',
    },
    {
      nome: 'Entorno do Pantanal e da Estrada Parque',
      descricao:
        'Fazendas-hotel como a Fazenda San Francisco, às margens do rio Miranda, oferecem trilhas para observação de aves e felinos, safáris fotográficos e cavalgadas; a região de Passo do Lontra, na Estrada Parque Pantanal, é um dos points de pesca esportiva mais procurados do Pantanal Sul.',
    },
  ],
  ciclovias:
    'A infraestrutura cicloviária é modesta e concentrada nas ruas do Centro; boa parte do deslocamento sobre duas rodas e da caminhada acontece pela orla do rio Miranda e pelas vias de menor movimento da cidade.',

  clima:
    'O clima é tropical (Köppen Aw), com temperatura média anual em torno de 25,3 °C e cerca de 1.509 mm de chuva por ano, concentrada no verão — janeiro é o mês mais chuvoso, com média de 230 mm, enquanto julho é o mais seco, com apenas 32 mm. Como em todo o Pantanal, o ano se divide entre o período de cheia dos rios (verão) e o de seca (inverno), quando as águas baixam e a paisagem se transforma.',
  climaTreino:
    'O calor tropical, presente na maior parte do ano, pede treino ao ar livre nos horários mais amenos — cedo pela manhã ou no fim da tarde — com hidratação reforçada; no auge do calor do meio do dia, ambientes cobertos ou climatizados são a opção mais segura.',

  mobilidade:
    'O acesso principal a Miranda é pela BR-262, que liga a cidade a Campo Grande (cerca de 207 km) e a Corumbá, na fronteira com a Bolívia. Nas proximidades passa a Estrada Parque Pantanal, antiga ligação de terra que corta o Pantanal Sul rumo a Corumbá. A cidade teve forte ligação histórica com a ferrovia Noroeste do Brasil, implantada em 1912, cuja antiga estação foi transformada em museu e hoje abriga secretarias municipais.',

  corridas: [],
  culturaEsportiva:
    'A cultura esportiva e de lazer de Miranda gira em torno do Pantanal: pesca esportiva no rio Miranda e na região de Passo do Lontra, cavalgadas e safáris fotográficos em fazendas-hotel, observação de aves e de felinos, e o uso do Balneário Municipal e da orla do rio para caminhada e convívio. A cultura indígena Terena, presente nas aldeias do entorno, também marca o cotidiano da cidade, com artesanato e tradições próprias.',
  academias:
    'A oferta é formada por poucas academias locais de musculação, concentradas no Centro, compatíveis com o porte de uma cidade pequena do interior voltada ao turismo.',

  destaquesFitness: [
    'Segunda maior população indígena do estado, com forte presença Terena em aldeias como Cachoeirinha, Moreira, Passarinho e Lalima.',
    'Porta de entrada do Pantanal Sul, com pesca esportiva, cavalgadas e observação de fauna como atividades centrais do turismo.',
    'Balneário Municipal e orla do rio Miranda como espaço tradicional de lazer e atividade ao ar livre.',
    'Clima tropical quente (Köppen Aw), com estações de cheia e seca que moldam o ritmo da cidade.',
  ],

  precos: {
    avulsaMin: 50,
    avulsaMax: 115,
    mensalMin: 250,
    mensalMax: 700,
    onlineMin: 115,
    onlineMax: 350,
  },

  conclusao:
    'Cidade antiga, pantaneira e marcada pela cultura Terena, Miranda pede um treino que respeite o calor tropical e aproveite o rio, o Balneário Municipal e o entorno natural que atrai turistas de pesca e ecoturismo do Brasil inteiro. Um personal trainer ajuda a organizar a rotina de treino em torno dos horários mais amenos do dia, mantendo a constância ao longo dos ciclos de cheia e seca do Pantanal.',

  vizinhas: ['aquidauana-ms', 'bonito-ms', 'corumba-ms'],

  fontes: [
    { nome: 'IBGE Cidades — Miranda', url: 'https://cidades.ibge.gov.br/brasil/ms/miranda/panorama' },
    { nome: 'Prefeitura de Miranda', url: 'https://www.miranda.ms.gov.br/' },
    { nome: 'Atlas Brasil — IDHM', url: 'https://www.atlasbrasil.org.br/' },
  ],
  atualizadoEm: '2026-07-03',
};
