import type { Cidade } from '../../lib/types';

export const cidade: Cidade = {
  slug: 'macapa-ap',
  nome: 'Macapá',
  uf: 'AP',
  estado: 'Amapá',
  estadoSlug: 'amapa',
  regiao: 'Norte',
  gentilico: 'macapaense',
  tipo: 'cidade',

  populacao: 442933,
  populacaoAno: 2022,
  idhm: 0.733,
  idhmClasse: 'alto',
  altitudeM: 14,

  resumoEconomico:
    'Capital do Amapá, Macapá é cortada pela Linha do Equador — marcada pelo Marco Zero — e fica à margem esquerda do Rio Amazonas, abrigando a histórica Fortaleza de São José. A economia é centrada em serviços, comércio e administração pública, com forte peso do extrativismo (açaí) e da atividade ribeirinha. A orla do Amazonas é o grande palco da vida ao ar livre.',

  mercado:
    'O mercado fitness conta com a Smart Fit e academias locais, e a cultura de treino ao ar livre é forte na orla do Rio Amazonas. Eventos de corrida ligados à identidade amapaense (Marabaixo, açaí) ajudam a movimentar a cena esportiva da cidade.',

  bairrosNobres: ['Zona Sul', 'Trem', 'Jesus de Nazaré', 'Buritizal'],
  bairrosPopulares: ['Laguinho', 'Pacoval', 'Perpétuo Socorro', 'Beirol'],

  parques: [
    {
      nome: 'Complexo Beira-Rio e Marco Zero',
      descricao:
        'Calçadão amplo às margens do Rio Amazonas para corrida, caminhada e bike, incluindo o Marco Zero — onde dá para treinar "com um pé em cada hemisfério".',
    },
    {
      nome: 'Parque do Forte (Fortaleza de São José)',
      descricao:
        'Áreas arborizadas e trilhas de caminhada e corrida com vista para o Rio Amazonas, em torno do principal monumento histórico da cidade.',
    },
    {
      nome: 'Parque do Jandiá',
      descricao:
        'Complexo de lazer e esporte com mirante, quadras, academia ao ar livre e acesso ao rio — um dos espaços públicos mais completos para treino.',
    },
  ],
  ciclovias:
    'O calçadão da orla (Beira-Rio) é o principal espaço usado para ciclismo e caminhada; a extensão total da malha cicloviária da cidade ainda não é consolidada em fonte oficial.',

  clima:
    'O clima é equatorial superúmido, quente e úmido o ano todo, com duas estações (chuvosa e menos chuvosa), amenizado pelas brisas do Rio Amazonas.',
  climaTreino:
    'A umidade alta pede treino ao ar livre nas primeiras horas da manhã ou no fim da tarde, com hidratação intensa — a brisa do rio ajuda no conforto na orla.',

  mobilidade:
    'O acesso terrestre é limitado (sem ligação rodoviária direta a outras capitais; as conexões principais são aérea e fluvial, via Belém). O transporte urbano é por ônibus, e a orla favorece o deslocamento ativo a pé e de bicicleta.',

  corridas: [
    {
      nome: 'Macapá Verão',
      descricao:
        'Corrida tradicional que abre a programação esportiva de julho, com percurso em torno de 7 km e chegada na Praça do Meio do Mundo (Marco Zero).',
    },
    {
      nome: 'Corridas culturais (Marabaixo e Açaí Run)',
      descricao:
        'Provas que unem esporte e cultura local, reforçando a identidade amapaense no calendário de corrida de rua.',
    },
  ],
  culturaEsportiva:
    'Macapá tem um calendário ativo de corridas de rua com forte identidade cultural (Marabaixo, açaí, aquathlon ribeirinho). A orla do Rio Amazonas é o principal palco do esporte ao ar livre na cidade.',
  academias:
    'A oferta reúne a Smart Fit e academias locais, complementada por parques com academia ao ar livre (Jandiá, Praça Isaac Zagury) e pela orla do Amazonas.',
  academiasProximas: [
    { nome: 'Smart Fit', detalhe: 'com presença na cidade' },
    { nome: 'Academias locais', detalhe: 'cobertura nos bairros da Zona Sul, do Trem e do Buritizal' },
    { nome: 'Academias ao ar livre', detalhe: 'gratuitas, no Parque do Jandiá e na Praça Isaac Zagury' },
    { nome: 'Calçadão da Beira-Rio', detalhe: 'o grande espaço público de treino da orla do Amazonas' },
  ],

  destaquesFitness: [
    'Orla e Beira-Rio do Amazonas como principal espaço de corrida, caminhada e bike.',
    'Marco Zero — treinar "com um pé em cada hemisfério" é um apelo único.',
    'Calendário de corridas com identidade cultural (Marabaixo, Açaí Run).',
    'Smart Fit, academias locais e parques com academia ao ar livre.',
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
    'Cidade do Marco Zero e da orla do Amazonas, Macapá tem cenários únicos para treinar ao ar livre. Um personal trainer ajuda a montar uma rotina que respeite o clima equatorial e a aproveitar a Beira-Rio e os parques da capital com método e segurança.',

  faqsExtra: [
    {
      pergunta: 'Onde o personal costuma atender em Macapá?',
      resposta:
        'A orla do Amazonas comanda: o Complexo Beira-Rio concentra corrida, caminhada e bike com a brisa do rio como aliada, o Parque do Forte soma trilhas arborizadas em volta da Fortaleza de São José e o Parque do Jandiá tem quadras e academia ao ar livre. Nas academias, a Smart Fit e as locais cobrem os bairros centrais, e o atendimento em casa é comum na Zona Sul e no Buritizal. Detalhe único: dá para treinar no Marco Zero com um pé em cada hemisfério.',
    },
    {
      pergunta: 'Como o clima equatorial de Macapá molda a rotina de treino?',
      resposta:
        'Com umidade alta o ano todo, a regra local é aproveitar as duas pontas do dia — e a orla tem um trunfo que o interior da cidade não tem: a brisa constante do Amazonas, que melhora bastante o conforto térmico. Na estação mais chuvosa, o plano B em academia mantém a constância; na menos chuvosa, o volume migra para a Beira-Rio. A hidratação é parte do treino em qualquer estação, e o personal ajusta a intensidade aos dias mais abafados.',
    },
    {
      pergunta: 'Há acompanhamento em Macapá para quem sente dores ou tem limitações?',
      resposta:
        'Há. O Montinho Personal, destacado pelo portal, tem cursos voltados ao treinamento de pessoas com dores e limitações musculoesqueléticas, além da vivência prática de mais de 20 anos de musculação. Para Macapá, o formato é o acompanhamento online: treino adaptado à estrutura disponível (academia, casa ou orla), vídeos de execução e ajustes contínuos. O trabalho é progressivo e sem promessa de cura — quadros clínicos pedem também médico ou fisioterapeuta.',
    },
  ],

  vizinhas: ['belem-pa', 'manaus-am', 'boa-vista-rr'],

  fontes: [
    { nome: 'IBGE Cidades — Macapá', url: 'https://cidades.ibge.gov.br/brasil/ap/macapa/panorama' },
    { nome: 'Prefeitura de Macapá', url: 'https://macapa.ap.gov.br/' },
    { nome: 'Atlas Brasil — IDHM', url: 'https://www.atlasbrasil.org.br/' },
  ],
  atualizadoEm: '2026-07-19',
};
