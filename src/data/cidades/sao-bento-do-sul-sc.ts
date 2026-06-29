import type { Cidade } from '../../lib/types';

export const cidade: Cidade = {
  slug: 'sao-bento-do-sul-sc',
  nome: 'São Bento do Sul',
  uf: 'SC',
  estado: 'Santa Catarina',
  estadoSlug: 'santa-catarina',
  regiao: 'Sul',
  gentilico: 'são-bentense',
  tipo: 'cidade',

  populacao: 83277,
  populacaoAno: 2022,
  idhm: 0.782,
  idhmClasse: 'alto',
  altitudeM: 838,

  resumoEconomico:
    'Localizada no Planalto Norte catarinense, no chamado Caminho dos Príncipes, São Bento do Sul tem origem na Colônia Dona Francisca e numa intensa colonização alemã e centro-europeia (austríacos, prussianos, bávaros e poloneses), que marca sua arquitetura e cultura. A cidade é um dos principais polos moveleiros do país, com forte presença industrial também nos setores cerâmico, metalúrgico, plástico e têxtil.',

  mercado:
    'O mercado fitness acompanha o perfil industrial e de IDHM alto da cidade, com academias locais consolidadas e presença de redes, além de estúdios de treino personalizado. O clima frio de altitude estimula a procura por musculação e atividades em ambiente fechado durante boa parte do ano, enquanto o relevo de planalto e a paisagem de araucárias favorecem corrida e caminhada ao ar livre nos meses mais amenos.',

  bairrosNobres: ['Centro', 'Cruzeiro', 'Colonial', 'Serra Alta'],
  bairrosPopulares: ['Mato Preto', 'Oxford', 'Centenário', 'Lençol'],

  parques: [
    {
      nome: 'Parque 23 de Setembro',
      descricao:
        'Área verde de cerca de 22 mil m² no centro, com araucárias e cedros centenários, pista para caminhada e corrida e a réplica da Casa dos Imigrantes — um dos principais espaços de treino ao ar livre da cidade.',
    },
    {
      nome: 'Praças e academias ao ar livre',
      descricao:
        'A cidade distribui praças arborizadas e academias ao ar livre por diferentes bairros, ampliando o acesso gratuito à caminhada e ao treino funcional.',
    },
    {
      nome: 'Entorno serrano e estradas rurais',
      descricao:
        'O relevo de planalto e as rotas em direção a Corupá e Rio Negrinho, em meio à mata de araucárias, são procurados para ciclismo, trail e corrida em subida.',
    },
  ],
  ciclovias:
    'A cidade conta com trechos de ciclovia e ciclofaixa em vias urbanas, além de rotas cicloturísticas no entorno serrano, como o caminho em direção às cachoeiras de Corupá, com forte ganho de altimetria.',

  clima:
    'O clima é subtropical de altitude, ameno a frio: a média anual fica em torno de 16 °C e, no inverno, as temperaturas podem chegar a valores negativos nos campos altos do planalto, com geadas frequentes. A precipitação anual gira em torno de 1.200 a 1.600 mm.',
  climaTreino:
    'O frio de altitude e as geadas de inverno tornam o treino em ambiente fechado uma escolha natural em boa parte do ano, com horários de manhã e fim de tarde exigindo agasalho. Nos meses mais amenos, o planalto e a mata de araucárias convidam à corrida e à caminhada ao ar livre.',

  mobilidade:
    'A cidade tem sistema integrado de transporte municipal com terminais nos bairros Centro, Serra Alta, Oxford e Centenário. Situada no Caminho dos Príncipes, é cortada pela BR-280 e por rodovias estaduais que a ligam a Rio Negrinho, Corupá, Jaraguá do Sul e ao Paraná.',

  corridas: [
    {
      nome: 'Corridas de rua do calendário local',
      descricao:
        'A cidade recebe provas de rua e caminhadas ao longo do ano, geralmente com percursos curtos de 5 km a 12 km, organizadas por entidades e clubes da região.',
    },
    {
      nome: 'Provas e desafios na região serrana',
      descricao:
        'O entorno de São Bento do Sul integra etapas de corrida e desafios de trail que exploram o relevo de planalto e a paisagem de araucárias do Planalto Norte.',
    },
  ],
  culturaEsportiva:
    'A herança alemã e centro-europeia se reflete em clubes, sociedades e tradições associativas que historicamente incentivaram a prática esportiva. Hoje a cidade reúne uma cena de musculação e treino funcional, somada a grupos de corrida e ciclismo que aproveitam o relevo e o clima de altitude.',
  academias:
    'A oferta reúne academias locais consolidadas, estúdios de treino personalizado e unidades de redes, complementadas pela estrutura gratuita de praças e do Parque 23 de Setembro.',

  destaquesFitness: [
    'Clima frio de altitude (média ~16 °C) que valoriza musculação e treino indoor boa parte do ano.',
    'Parque 23 de Setembro, no centro, com pista e mata de araucárias para caminhada e corrida.',
    'Polo moveleiro com IDHM alto, sustentando um mercado fitness estável.',
    'Relevo de planalto e rotas serranas ideais para corrida em subida e ciclismo.',
  ],

  precos: {
    avulsaMin: 55,
    avulsaMax: 125,
    mensalMin: 270,
    mensalMax: 760,
    onlineMin: 130,
    onlineMax: 380,
  },

  conclusao:
    'Cidade de forte herança europeia e tradição industrial no Planalto Norte catarinense, São Bento do Sul combina clima frio de altitude, parques arborizados e relevo serrano. Um personal trainer ajuda a montar um plano consistente que respeite o inverno rigoroso e aproveite os meses amenos ao ar livre, do iniciante ao avançado.',

  vizinhas: ['joinville-sc', 'jaragua-do-sul-sc', 'curitiba-pr'],

  fontes: [
    { nome: 'IBGE Cidades — São Bento do Sul', url: 'https://cidades.ibge.gov.br/brasil/sc/sao-bento-do-sul/panorama' },
    { nome: 'Prefeitura de São Bento do Sul', url: 'https://www.saobentodosul.sc.gov.br/' },
    { nome: 'Atlas Brasil — IDHM', url: 'https://www.atlasbrasil.org.br/' },
  ],
  atualizadoEm: '2026-06-29',
};
