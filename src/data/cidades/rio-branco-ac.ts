import type { Cidade } from '../../lib/types';

export const cidade: Cidade = {
  slug: 'rio-branco-ac',
  nome: 'Rio Branco',
  uf: 'AC',
  estado: 'Acre',
  estadoSlug: 'acre',
  regiao: 'Norte',
  gentilico: 'rio-branquense',
  tipo: 'cidade',

  populacao: 364756,
  populacaoAno: 2022,
  idhm: 0.727,
  idhmClasse: 'alto',
  altitudeM: 153,

  resumoEconomico:
    'Capital do Acre, Rio Branco é o principal centro político, administrativo e de serviços do estado, com economia dominada pelo setor de serviços e forte peso da administração pública, além de comércio. No extremo oeste da Amazônia, é cortada pelo Rio Acre e tem na mobilidade ativa um traço marcante: é apontada como a capital que mais investe por habitante em ciclovias.',

  mercado:
    'Há uma cultura forte de atividade física ao ar livre — corrida e ciclismo — apoiada por uma das maiores malhas cicloviárias per capita do país, além de academias de bairro e redes nos shoppings. O Parque do Tucumã é o grande ponto de treino coletivo da cidade.',

  bairrosNobres: ['Bosque', 'Jardim Europa', 'Floresta', 'Aviário'],
  bairrosPopulares: ['Cidade do Povo', 'Belo Jardim', 'Vila Acre', 'Cidade Nova'],

  parques: [
    {
      nome: 'Parque do Tucumã',
      descricao:
        'Na zona norte, com cerca de 3.600 m de extensão, tem ciclovia, calçadas para pedestres, quadras esportivas, lagos e trilhas — um dos principais pontos de treino da cidade.',
    },
    {
      nome: 'Horto Florestal',
      descricao:
        'Com cerca de 17 hectares, tem trilha de caminhada, passarela sobre o lago, deck e equipamentos de ginástica (academia ao ar livre) em meio à mata.',
    },
    {
      nome: 'Calçadão da Gameleira',
      descricao:
        'Orla e calçadão histórico às margens do Rio Acre, ponto de encontro tradicional para caminhada e lazer no centro.',
    },
  ],
  ciclovias:
    'Rio Branco tem cerca de 178 km de malha cicloviária e é apontada como a capital brasileira que mais investe por habitante em infraestrutura para bicicletas, com destaque para o eixo da Via Verde.',

  clima:
    'O clima é equatorial, quente e chuvoso, com mínimas em torno de 20 °C e máximas perto de 30 °C; chuvas fortes de dezembro a março e estação seca por volta de julho.',
  climaTreino:
    'As melhores janelas para treino ao ar livre são cedo pela manhã e no fim da tarde; o calor e a umidade são elevados quase o ano todo, exigindo hidratação.',

  mobilidade:
    'O acesso é pela BR-364 (ligação a Porto Velho) e pela BR-317 (rumo à fronteira com Peru e Bolívia), com aeroporto internacional. A Avenida Via Verde é um eixo viário importante e conta com ciclovia.',

  corridas: [
    {
      nome: 'Corrida do Servidor Público',
      descricao:
        'Prova tradicional da cidade, com centenas de participantes e largada em frente ao Palácio Rio Branco.',
    },
    {
      nome: 'Corrida Detran (Maio Amarelo)',
      descricao:
        'Reúne centenas de corredores em percursos de 5 km e 10 km pelas ruas da capital, parte de uma cena de corrida em ascensão.',
    },
  ],
  culturaEsportiva:
    'As corridas de rua estão em forte ascensão em Rio Branco, descritas como fenômeno popular e inclusivo, e o ciclismo urbano é fortemente incentivado pela rede de ciclovias. O Parque do Tucumã é o principal espaço de treino coletivo.',
  academias:
    'A oferta reúne academias de bairro e redes nos shoppings, complementadas pela forte infraestrutura ao ar livre — ciclovias, Parque do Tucumã e Horto Florestal.',
  academiasProximas: [
    { nome: 'Smart Fit', detalhe: 'com unidade na cidade (Village)' },
    { nome: 'Academias de bairro e redes nos shoppings', detalhe: 'boa cobertura no Bosque e no Centro' },
    { nome: 'Estrutura pública', detalhe: 'gratuita, no Parque do Tucumã e no Horto Florestal' },
  ],

  destaquesFitness: [
    'Uma das maiores malhas cicloviárias per capita do Brasil (cerca de 178 km).',
    'Parque do Tucumã como centro de corrida e ciclismo.',
    'Horto Florestal com academia ao ar livre e trilhas.',
    'Cena crescente de corridas de rua gratuitas e institucionais.',
  ],

  precos: {
    avulsaMin: 65,
    avulsaMax: 150,
    mensalMin: 320,
    mensalMax: 880,
    onlineMin: 160,
    onlineMax: 410,
  },

  conclusao:
    'Capital amazônica com forte cultura de bike e corrida, Rio Branco oferece dos parques às ciclovias um ambiente convidativo para a vida ativa. Um personal trainer ajuda a aproveitar essa estrutura com método e a treinar com segurança no clima quente e úmido do Acre.',

  faqsExtra: [
    {
      pergunta: 'Onde o personal costuma atender em Rio Branco?',
      resposta:
        'O Parque do Tucumã é o centro de treino coletivo da capital — ciclovia, calçadas, quadras e trilhas em 3,6 km de extensão —, com o Horto Florestal como alternativa arborizada e o Calçadão da Gameleira para caminhadas no centro histórico. Nas academias, a oferta reúne a Smart Fit e academias de bairro, e o atendimento em casa é comum no Bosque e no Jardim Europa. A rede de ciclovias ainda abre espaço para treinos de bike orientados pela Via Verde.',
    },
    {
      pergunta: 'Dá para usar a bicicleta como treino de verdade em Rio Branco?',
      resposta:
        'Dá — e em poucas capitais isso é tão viável. Rio Branco tem cerca de 178 km de malha cicloviária e é apontada como a capital que mais investe por habitante em infraestrutura para bikes, com o eixo da Via Verde como espinha dorsal. Na prática, o pedal vira o cardio da semana: sessões de 40 a 60 minutos nos horários frescos, combinadas à musculação para força e proteção articular. O personal monta essa combinação conforme o objetivo — emagrecimento, condicionamento ou performance.',
    },
    {
      pergunta: 'Há acompanhamento em Rio Branco para quem sente dores ou tem limitações?',
      resposta:
        'Há. O Montinho Personal, destacado pelo portal, tem cursos voltados ao treinamento de pessoas com dores e limitações musculoesqueléticas, além da vivência prática de mais de 20 anos de musculação. Para Rio Branco, o formato é o acompanhamento online: treino adaptado à estrutura disponível (academia, casa ou parque), vídeos de execução e ajustes contínuos. O trabalho é progressivo e sem promessa de cura — quadros clínicos pedem também médico ou fisioterapeuta.',
    },
  ],

  vizinhas: ['porto-velho-ro', 'manaus-am'],

  fontes: [
    { nome: 'IBGE Cidades — Rio Branco', url: 'https://cidades.ibge.gov.br/brasil/ac/rio-branco/panorama' },
    { nome: 'Prefeitura de Rio Branco', url: 'https://www.riobranco.ac.gov.br/' },
    { nome: 'Atlas Brasil — IDHM', url: 'https://www.atlasbrasil.org.br/' },
  ],
  atualizadoEm: '2026-07-19',
};
