import type { Cidade } from '../../lib/types';

export const cidade: Cidade = {
  slug: 'santa-cruz-rn',
  nome: 'Santa Cruz',
  uf: 'RN',
  estado: 'Rio Grande do Norte',
  estadoSlug: 'rio-grande-do-norte',
  regiao: 'Nordeste',
  gentilico: 'santa-cruzense',
  tipo: 'cidade',

  populacao: 37313,
  populacaoAno: 2022,
  idhm: 0.635,
  idhmClasse: 'médio',
  altitudeM: 210,

  resumoEconomico:
    'No agreste potiguar, na região do Trairi e a pouco mais de 110 km de Natal pela BR-226, Santa Cruz é polo de comércio e serviços do entorno e abriga uma das maiores feiras livres do interior do estado. A economia gira em torno do comércio, do setor público e da agropecuária do semiárido — algodão, milho, feijão, sisal e palma forrageira em pequenas propriedades. Desde 2010, o turismo religioso ligado à estátua de Santa Rita de Cássia tornou-se motor importante, atraindo romeiros e visitantes ao longo do ano.',

  mercado:
    'O mercado fitness é o de uma cidade média do interior nordestino, formado por academias locais de musculação e treino funcional concentradas na área central e nos bairros residenciais. A procura por personal trainers tende a crescer entre quem busca acompanhamento individual para treinar respeitando o calor do semiárido e quem prefere usar praças e o entorno do açude como espaço de atividade ao ar livre.',

  bairrosNobres: ['Centro', 'Paraíso', 'Cônego Monte', 'Aluízio Bezerra'],
  bairrosPopulares: ['DNER', 'Santa Rita do Zarur', 'Santa Cruz 2', 'Decita'],

  parques: [
    {
      nome: 'Alto de Santa Rita (Monte Carmelo)',
      descricao:
        'Morro onde fica a estátua de Santa Rita de Cássia, com 56 metros de altura — apontada como a maior estátua católica do mundo. A subida e o complexo de peregrinação no entorno viraram percurso natural para quem treina ao ar livre com vista panorâmica da cidade.',
    },
    {
      nome: 'Açude Público de Santa Cruz',
      descricao:
        'Reservatório urbano que marca a paisagem do semiárido; seu entorno serve de referência para caminhada e corrida, em meio à vegetação de caatinga característica da região.',
    },
    {
      nome: 'Praças e calçadões do Centro',
      descricao:
        'As praças centrais e as vias do núcleo urbano concentram a movimentação da cidade e funcionam como pontos de encontro para caminhada e atividade física no começo da manhã e no fim da tarde.',
    },
  ],
  ciclovias:
    'A estrutura cicloviária é modesta e restrita a poucos trechos da área urbana; boa parte do pedal e da corrida acontece nas vias da cidade e nas estradas vicinais que cortam o entorno rural.',

  clima:
    'O clima é semiárido, quente, com chuvas concentradas em poucos meses do ano e um longo período seco; o território fica integralmente no bioma Caatinga, na faixa do Semiárido brasileiro. As temperaturas são elevadas durante quase todo o ano, com baixa umidade nos meses de estiagem.',
  climaTreino:
    'O calor e a baixa umidade pedem treinar bem cedo ou no fim da tarde, com hidratação reforçada e atenção à exposição solar. Nos horários de pico de calor, ambientes climatizados são a opção mais segura; o período chuvoso, mais ameno, costuma ser o mais favorável ao treino ao ar livre.',

  mobilidade:
    'A cidade é cortada pela BR-226, que garante ligação rápida com Natal e com municípios vizinhos da região do Trairi. O transporte urbano é feito sobretudo por ônibus, vans e mototáxis, e a feira livre semanal movimenta o fluxo de pessoas vindas de toda a região do agreste potiguar.',

  corridas: [
    {
      nome: 'Corrida de Santa Rita',
      descricao:
        'Prova beneficente disputada nas ruas do bairro Santa Rita, com percursos de caminhada e corrida e parte da renda destinada a projeto esportivo para crianças da comunidade.',
    },
    {
      nome: 'Programação esportiva da Festa de Santa Rita de Cássia',
      descricao:
        'Entre maio, a festa religiosa reúne corridas, passeios ciclísticos e cavalgadas, somando atividades esportivas à programação de missas e procissões que atrai romeiros à cidade.',
    },
  ],
  culturaEsportiva:
    'A cultura esportiva combina o uso das praças centrais e do entorno do açude para caminhada e corrida, a subida ao Alto de Santa Rita como percurso ao ar livre e as provas associadas à festa religiosa — tudo moldado pelo calor do semiárido e pelo forte calendário de romarias.',
  academias:
    'A oferta é formada principalmente por academias locais de musculação e treino funcional, distribuídas pelo Centro e pelos bairros residenciais, com porte compatível com uma cidade média do interior do Rio Grande do Norte.',

  destaquesFitness: [
    'Alto de Santa Rita: a estátua de Santa Rita de Cássia, com 56 metros, apontada como a maior estátua católica do mundo, e sua subida como percurso ao ar livre.',
    'Açude e praças do Centro como espaços de caminhada e corrida na paisagem do semiárido.',
    'Clima semiárido e quente, que exige planejamento de horário e hidratação no treino.',
    'Polo do Trairi às margens da BR-226, com economia de comércio, serviços, agropecuária e turismo religioso.',
  ],

  precos: {
    avulsaMin: 45,
    avulsaMax: 105,
    mensalMin: 230,
    mensalMax: 640,
    onlineMin: 105,
    onlineMax: 330,
  },

  conclusao:
    'Cidade quente do agreste potiguar e referência de turismo religioso, Santa Cruz pede um treino adaptado ao clima do semiárido e que aproveite as praças, o açude e a subida ao Alto de Santa Rita. Um personal trainer ajuda a organizar a rotina respeitando o calor, definindo os melhores horários e mantendo a constância ao longo do ano.',

  vizinhas: ['currais-novos-rn', 'caico-rn'],

  fontes: [
    { nome: 'IBGE Cidades — Santa Cruz', url: 'https://cidades.ibge.gov.br/brasil/rn/santa-cruz/panorama' },
    { nome: 'Prefeitura de Santa Cruz', url: 'https://www.santacruz.rn.gov.br/' },
    { nome: 'Atlas Brasil — IDHM', url: 'https://www.atlasbrasil.org.br/' },
  ],
  atualizadoEm: '2026-06-29',
};
