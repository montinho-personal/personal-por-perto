import type { Cidade } from '../../lib/types';

export const cidade: Cidade = {
  slug: 'goiania-go',
  nome: 'Goiânia',
  uf: 'GO',
  estado: 'Goiás',
  estadoSlug: 'goias',
  regiao: 'Centro-Oeste',
  gentilico: 'goianiense',
  tipo: 'cidade',

  populacao: 1437366,
  populacaoAno: 2022,
  idhm: 0.799,
  idhmClasse: 'alto',
  altitudeM: 749,

  resumoEconomico:
    'Capital planejada e polo logístico do Centro-Oeste, Goiânia tem economia puxada pelo agronegócio (Goiás tem um dos maiores PIBs agropecuários do país), pela indústria farmacêutica e por comércio e serviços. É reconhecida pela boa relação entre custo de vida e infraestrutura de metrópole e por uma generosa área verde por habitante — cenário ideal para quem leva o treino a sério.',

  mercado:
    'Goiânia é uma referência nacional em musculação e fisiculturismo. A cidade abriga uma federação forte (ligada à IFBB), organiza o Campeonato Goiano e já sediou etapas internacionais de alto nível, incluindo competições profissionais que atraem mais de uma centena de atletas de todo o país. No dia a dia, redes como Smart Fit e Blue Fit (algumas 24h) e estúdios de alto padrão no Setor Bueno e no Marista convivem com uma cultura "raiz" de musculação que define a identidade fitness da cidade.',

  bairrosNobres: ['Setor Marista', 'Setor Bueno', 'Jardim Goiás', 'Setor Oeste'],
  bairrosPopulares: ['Campinas', 'Setor Norte Ferroviário', 'Vila Nova', 'Setor Central'],

  parques: [
    {
      nome: 'Parque Vaca Brava',
      descricao:
        'Cartão-postal do Setor Bueno, com pista de cooper de cerca de 1.100 m ao redor de um lago, estação de ginástica (academia ao ar livre) e área de convivência. É o ponto fitness mais icônico da cidade.',
    },
    {
      nome: 'Parque Flamboyant',
      descricao:
        'No Jardim Goiás, tem dois lagos com fontes, ciclofaixa interna, pista de cooper, estação de ginástica e jardim japonês — um dos espaços mais completos para treino ao ar livre.',
    },
    {
      nome: 'Bosque dos Buritis',
      descricao:
        'Marco tradicional de Goiânia, com três lagos, pistas de caminhada, estação de ginástica e trilhas internas em meio a muita área verde.',
    },
  ],
  ciclovias:
    'A cidade tem rede cicloviária urbana e ciclofaixas dentro e entre parques, como no Flamboyant, integrando lazer e mobilidade ativa.',

  clima:
    'O clima é tropical sub-úmido, com média anual em torno de 23 °C e estação seca acentuada de maio a setembro, quando a umidade pode cair a níveis muito baixos e as máximas chegam perto de 40 °C entre setembro e outubro.',
  climaTreino:
    'No auge da seca, o treino ao ar livre pede cautela: hidratação reforçada, horários de menor calor (manhã cedo ou fim de tarde) e atenção à baixa umidade. As chuvas se concentram de outubro a abril.',

  mobilidade:
    'Goiânia não tem metrô ou trem em operação. A espinha dorsal do transporte é o BRT Eixo Anhanguera (Metrobus), inaugurado em 2013, com o corredor Norte-Sul entrando parcialmente em operação a partir de 2024. A posição central no país facilita o acesso por rodovias.',

  corridas: [
    {
      nome: 'Meia Maratona de Goiânia',
      descricao:
        'A maior corrida de rua do estado, com percursos de 5 km, 10 km, 16 km e 21 km e largada na região do Park Lozandes, em outubro.',
    },
    {
      nome: 'Tradição em motovelocidade',
      descricao:
        'Casa do Autódromo de Goiânia, a cidade tem forte identidade no automobilismo e na motovelocidade, parte da sua cultura esportiva.',
    },
  ],
  culturaEsportiva:
    'Goiânia tem uma identidade fitness e de "cultura do corpo" das mais fortes do Brasil, com a musculação e o fisiculturismo como marca nacional, somados a uma cena crescente de corrida de rua e à tradição em motovelocidade. A ampla rede de parques sustenta o treino ao ar livre o ano todo.',
  academias:
    'Além das grandes redes (Smart Fit, Blue Fit, Bodytech no Marista), a cidade tem muitos estúdios de alto padrão e academias voltadas a fisiculturismo e alto rendimento, especialmente no Setor Bueno e no Setor Marista.',
  academiasProximas: [
    { nome: 'Smart Fit e Bluefit', detalhe: 'várias unidades pela cidade, algumas com funcionamento 24h' },
    { nome: 'Bodytech', detalhe: 'unidade premium no Setor Marista' },
    { nome: 'Academias de fisiculturismo e alto rendimento', detalhe: 'tradição goianiense, no Bueno e no Marista' },
    { nome: 'Estações de ginástica dos parques', detalhe: 'gratuitas, no Vaca Brava e no Flamboyant' },
  ],

  destaquesFitness: [
    'Polo nacional de fisiculturismo, com federação forte e campeonatos de nível internacional.',
    'Cultura de musculação enraizada, com grandes redes e estúdios de alto padrão.',
    'Parque Vaca Brava: pista de cooper de cerca de 1,1 km, o point fitness da cidade.',
    'Excelente oferta de parques com academia ao ar livre (Flamboyant, Bosque dos Buritis).',
  ],

  precos: {
    avulsaMin: 70,
    avulsaMax: 160,
    mensalMin: 350,
    mensalMax: 950,
    onlineMin: 170,
    onlineMax: 430,
  },

  conclusao:
    'Em uma cidade que respira musculação como Goiânia, ter um personal trainer é a forma de transformar essa cultura forte em resultado consistente e seguro. Da preparação para um palco de fisiculturismo ao simples objetivo de viver com mais saúde, o acompanhamento profissional faz a diferença — e a cidade oferece estrutura de sobra para isso.',

  faqsExtra: [
    {
      pergunta: 'Preciso querer competir para treinar com personal em Goiânia?',
      resposta:
        'Não — e esse é um mal-entendido comum na capital do fisiculturismo. A cultura forte de musculação de Goiânia beneficia justamente quem não compete: as academias são completas, o nível técnico dos profissionais é alto e treinar sério é normal, não exceção. O personal traduz esse ambiente para o seu objetivo — emagrecer, ganhar massa, corrigir postura — sem exigir rotina de atleta. Quem quer palco também encontra preparadores especializados; quem quer saúde aproveita a mesma estrutura.',
    },
    {
      pergunta: 'Onde o personal costuma atender em Goiânia?',
      resposta:
        'O eixo Setor Bueno–Marista–Jardim Goiás concentra academias de rede (algumas 24h), estúdios de alto padrão e as academias "raiz" de musculação. Ao ar livre, o Vaca Brava e o Flamboyant têm pista de cooper e estação de ginástica gratuitas e são points consolidados de treino funcional. O atendimento em casa e em condomínio cresce nos edifícios do Jardim Goiás e do Setor Oeste — e o horário 24h de algumas redes resolve a agenda de quem trabalha em turnos.',
    },
    {
      pergunta: 'Há acompanhamento em Goiânia para quem sente dores ou tem limitações?',
      resposta:
        'Há. O Montinho Personal, destacado pelo portal, tem cursos voltados ao treinamento de pessoas com dores e limitações musculoesqueléticas, além da vivência prática de mais de 20 anos de musculação. Para Goiânia, o formato é o acompanhamento online: treino adaptado à estrutura disponível (academia, condomínio ou casa), vídeos de execução e ajustes contínuos. O trabalho é progressivo e sem promessa de cura — quadros clínicos pedem também médico ou fisioterapeuta.',
    },
  ],

  vizinhas: ['brasilia-df', 'uberlandia-mg', 'belo-horizonte-mg'],

  fontes: [
    { nome: 'IBGE Cidades — Goiânia', url: 'https://cidades.ibge.gov.br/brasil/go/goiania/panorama' },
    { nome: 'Prefeitura de Goiânia', url: 'https://www.goiania.go.gov.br/' },
    { nome: 'Atlas Brasil — IDHM', url: 'https://www.atlasbrasil.org.br/' },
  ],
  capaArte: {
    src: '/capas-cidade/goiania-go.webp',
    alt:
      'Personal trainer em Goiânia (GO) orientando aluna em treino de força ao ar livre, com o Monumento às Três Raças e os arranha-céus da capital goiana ao fundo — Personal por Perto',
    legenda:
      'Treino personalizado em Goiânia: um plano feito para o seu corpo e a sua rotina, com acompanhamento profissional na cidade e região.',
  },
  atualizadoEm: '2026-07-22',
};
