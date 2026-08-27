import type { Cidade } from '../../lib/types';

export const cidade: Cidade = {
  slug: 'ribeirao-das-neves-mg', nome: 'Ribeirão das Neves', uf: 'MG', estado: 'Minas Gerais', estadoSlug: 'minas-gerais', regiao: 'Sudeste', gentilico: 'nevense', tipo: 'cidade',
  populacao: 329794, populacaoAno: 2022, idhm: 0.684, idhmClasse: 'médio', altitudeM: 816,

  resumoEconomico:
    'Integrante da Região Metropolitana de Belo Horizonte, Ribeirão das Neves é uma das cidades mais populosas de Minas Gerais e tem perfil predominantemente residencial e popular, funcionando em grande medida como cidade-dormitório da Grande BH. Boa parte da população trabalha na capital e em Contagem, e a economia local se apoia em comércio de bairro, serviços e administração pública.',

  mercado:
    'Por ser uma cidade grande, popular e de forte caráter dormitório, o mercado fitness em Ribeirão das Neves é movido por academias de bairro e por atendimento domiciliar, que se encaixam na rotina de quem se desloca diariamente para trabalhar em Belo Horizonte. A demanda por personal trainer com preços acessíveis e por treino online tende a crescer entre quem busca economizar tempo de deslocamento e treinar perto de casa.',

  bairrosNobres: ['Veneza', 'Florença', 'Vale Verde'],
  bairrosPopulares: ['Justinópolis', 'Areias', 'Jardim São Judas Tadeu', 'Cruzeiro'],

  parques: [
    {
      nome: 'Praças do programa "Play nas Praças"',
      descricao:
        'Iniciativa da prefeitura que leva atividades de lazer e exercício a praças e espaços públicos espalhados pelos bairros da cidade.',
    },
    {
      nome: 'Praças e áreas de lazer dos bairros',
      descricao:
        'Distribuídas pelas três grandes regiões (Centro, Justinópolis e Veneza), reúnem espaços para caminhada e atividades comunitárias ao ar livre.',
    },
  ],
  ciclovias:
    'A cidade tem caráter espraiado e fortemente ligado à malha viária; a infraestrutura cicloviária é limitada, e a maior parte do treino ao ar livre acontece em ruas, praças e nas áreas de lazer dos bairros.',

  clima:
    'O clima é tropical de altitude, com verões chuvosos e invernos secos e amenos, semelhante ao do restante da Grande Belo Horizonte.',
  climaTreino:
    'O inverno (de maio a setembro) e as primeiras horas da manhã são as melhores janelas para o treino ao ar livre; no verão, vale reforçar a hidratação e buscar horários mais frescos.',

  mobilidade:
    'Ribeirão das Neves é conurbada com Belo Horizonte (sobretudo pela região de Justinópolis, vizinha de Venda Nova) e com Contagem. O acesso se dá principalmente pela BR-040 e por vias metropolitanas, e a forte dependência de deslocamentos diários para a capital reforça o perfil de cidade-dormitório.',

  corridas: [
    {
      nome: 'Corrida do Trabalhador',
      descricao:
        'Prova de rua organizada pela prefeitura, que já reuniu milhares de participantes ao longo de suas edições, com foco em saúde, bem-estar e integração social.',
    },
    {
      nome: 'Corrida Eduardo Brandão',
      descricao:
        'Evento de corrida de rua promovido na cidade, associado às comemorações da emancipação política do município.',
    },
  ],
  culturaEsportiva:
    'A cultura esportiva é popular e comunitária, fortalecida por corridas de rua promovidas pela prefeitura e por programas de atividade física em praças e espaços públicos. O esporte de bairro e o futebol amador têm presença marcante no dia a dia dos moradores.',
  academias:
    'A oferta concentra-se em academias de bairro distribuídas pelas regiões do Centro, Justinópolis e Veneza, complementadas por personal trainers que atendem em domicílio e por treino online — formatos que conversam bem com o perfil popular e a rotina de deslocamento da cidade.',

  academiasProximas: [
    { nome: 'Pratique Fitness Centro', detalhe: 'na Rua Ari Teixeira da Costa, no Centro' },
    { nome: 'Pratique Fitness Veneza', detalhe: 'na Av. Osvaldo Alves Araújo, no Veneza' },
  ],

  destaquesFitness: [
    'Academias de bairro espalhadas pelas três grandes regiões da cidade.',
    'Atendimento domiciliar e treino online, alinhados à rotina de cidade-dormitório.',
    'Corridas de rua da prefeitura, como a Corrida do Trabalhador.',
    'Programa "Play nas Praças" com atividades de lazer e exercício em espaços públicos.',
  ],

  precos: {
    avulsaMin: 50,
    avulsaMax: 110,
    mensalMin: 250,
    mensalMax: 650,
    onlineMin: 110,
    onlineMax: 340,
  },

  conclusao:
    'Cidade grande, popular e fortemente ligada ao dia a dia da Grande BH, Ribeirão das Neves tem no treino perto de casa — em academias de bairro, em casa ou online — a forma mais prática de manter a rotina ativa. Um personal trainer ajuda a montar um plano acessível e adaptado ao seu tempo, dentro ou fora do horário de deslocamento para a capital.',

  vizinhas: ['belo-horizonte-mg', 'contagem-mg', 'santa-luzia-mg'],

  fontes: [
    { nome: 'IBGE Cidades — Ribeirão das Neves', url: 'https://cidades.ibge.gov.br/brasil/mg/ribeirao-das-neves/panorama' },
    { nome: 'Prefeitura de Ribeirão das Neves', url: 'https://www.ribeiraodasneves.mg.gov.br/' },
    { nome: 'Atlas Brasil — IDHM', url: 'https://www.atlasbrasil.org.br/' },
  ],
  atualizadoEm: '2026-08-27',

  capaArte: {
    src: '/capas-cidade/ribeirao-das-neves-mg.webp',
    w: 1200,
    h: 900,
    alt:
      'Personal trainer em Ribeirão das Neves (MG) em arte que reúne treino com corda naval e kettlebell, a Igreja Matriz Nossa Senhora das Neves, a vista do Veneza e o Parque da Lajinha, em Justinópolis — Personal por Perto',
    legenda:
      'Treino personalizado em Ribeirão das Neves: um plano feito para o seu corpo e a sua rotina, com acompanhamento profissional na cidade e região.',
  },
};
