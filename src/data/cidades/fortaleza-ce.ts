import type { Cidade } from '../../lib/types';

export const cidade: Cidade = {
  slug: 'fortaleza-ce',
  nome: 'Fortaleza',
  uf: 'CE',
  estado: 'Ceará',
  estadoSlug: 'ceara',
  regiao: 'Nordeste',
  gentilico: 'fortalezense',
  tipo: 'cidade',

  populacao: 2428708,
  populacaoAno: 2022,
  idhm: 0.754,
  idhmClasse: 'alto',
  altitudeM: 16,

  resumoEconomico:
    'Maior cidade e centro econômico do Ceará, Fortaleza é forte em comércio, serviços e turismo, com um polo industrial regional (têxtil, calçados, alimentos) e um setor de tecnologia em crescimento. O bairro Aldeota concentra o núcleo financeiro e empresarial. Com sol o ano inteiro e uma das maiores orlas urbanas do Nordeste, a cidade tem uma cultura de praia e estética que move a rotina de exercícios.',

  mercado:
    'O mercado fitness de Fortaleza é aquecido pela forte cultura de praia, estética e musculação. A Smart Fit tem várias unidades (Iracema, North Shopping) e a Bodytech está no Iguatemi Bosque, com cerca de 2.000 m² e até quadra de beach tennis. A orla movimenta treino funcional, corrida e esportes de areia — um ambiente natural para o trabalho de personal trainers.',

  bairrosNobres: ['Meireles', 'Aldeota', 'Mucuripe', 'Dionísio Torres'],
  bairrosPopulares: ['Bom Jardim', 'Granja Portugal', 'Mondubim', 'Barra do Ceará'],

  parques: [
    {
      nome: 'Avenida Beira-Mar',
      descricao:
        'Orla requalificada com calçadão largo, academia ao ar livre, skatepark, quadras de areia e estações de bicicleta compartilhada, conectando Praia de Iracema, Meireles e Mucuripe — o "ginásio a céu aberto" da cidade.',
    },
    {
      nome: 'Parque do Cocó',
      descricao:
        'Unidade de conservação com mais de 1.100 hectares, trilhas, anfiteatro e quadras poliesportivas — um clássico para corrida em meio à natureza.',
    },
    {
      nome: 'Ciclofaixa de Lazer',
      descricao:
        'Programa municipal que libera vias aos domingos para corrida, caminhada e ciclismo, ampliando os espaços de atividade física no fim de semana.',
    },
  ],
  ciclovias:
    'A ciclovia da Beira-Mar tem cerca de 3,4 km, integrada ao sistema de bicicletas compartilhadas Bicicletar, parte de uma rede cicloviária municipal em expansão.',

  clima:
    'O clima é tropical quente, com uma das maiores médias de insolação do país (cerca de 2.695 horas de sol por ano) e temperaturas entre 23 °C e 29 °C, com umidade litorânea.',
  climaTreino:
    'Com tanto sol e calor, o ideal é treinar cedo de manhã ou no fim da tarde, com hidratação reforçada e proteção UV. A brisa marítima da orla ajuda no conforto térmico.',

  mobilidade:
    'A cidade tem o metrô Metrofor (linhas Sul e Oeste) e o VLT Parangaba-Mucuripe, além dos eixos rodoviários BR-116 e BR-222. A mobilidade ainda é mais consolidada nas regiões nobres.',

  corridas: [
    {
      nome: 'Calendário de corridas de rua',
      descricao:
        'Fortaleza tem uma agenda ativa de provas de 5 km a maratona, boa parte delas com percursos pela orla — vale conferir as datas atualizadas antes de se inscrever.',
    },
    {
      nome: 'Esportes de areia na orla',
      descricao:
        'Beach tennis, futevôlei e vôlei de praia são fortíssimos nas areias de Fortaleza, parte essencial da cultura esportiva local.',
    },
  ],
  culturaEsportiva:
    'A cultura de praia é o coração do esporte em Fortaleza: corrida na orla, beach tennis, futevôlei e vôlei de praia convivem com uma forte valorização da musculação e da estética. Sol o ano todo torna o treino ao ar livre parte natural da rotina.',
  academias:
    'A oferta vai das redes nacionais bem instaladas em shoppings (Smart Fit, Bodytech) a inúmeros estúdios e academias de bairro, com forte presença de treino funcional e esportes de areia.',
  academiasProximas: [
    { nome: 'Bodytech', detalhe: 'no Iguatemi Bosque, com cerca de 2.000 m² e quadra de beach tennis' },
    { nome: 'Smart Fit', detalhe: 'unidades na Praia de Iracema, no North Shopping e em vários bairros' },
    { nome: 'Estúdios de funcional', detalhe: 'concentrados no Meireles e na Aldeota' },
    { nome: 'Academia ao ar livre da Beira-Mar', detalhe: 'gratuita, no calçadão da orla' },
  ],

  destaquesFitness: [
    'Avenida Beira-Mar requalificada: o "ginásio a céu aberto" da cidade.',
    'Sol o ano todo favorece o treino ao ar livre (com cuidado térmico).',
    'Beach tennis e futevôlei em alta nas areias da orla.',
    'Redes nacionais (Smart Fit, Bodytech) bem instaladas, com boa estrutura.',
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
    'Com orla estruturada, sol o ano inteiro e uma cultura de praia que valoriza o corpo, Fortaleza é um ótimo lugar para treinar. Um personal trainer ajuda a aproveitar a Beira-Mar e as academias da cidade com método e segurança, respeitando o calor e o seu objetivo.',

  faqsExtra: [
    {
      pergunta: 'Onde o personal costuma atender em Fortaleza?',
      resposta:
        'Os cenários principais são: a Avenida Beira-Mar — o "ginásio a céu aberto" da cidade, com calçadão, academia pública e quadras de areia —, as academias de rede e estúdios do eixo Meireles–Aldeota, e o atendimento em casa ou na academia do condomínio, comum nos prédios da orla e do Mucuripe. O Parque do Cocó completa as opções para quem prefere correr e treinar em meio ao verde, longe do sol direto.',
    },
    {
      pergunta: 'Qual o melhor horário para treinar em Fortaleza?',
      resposta:
        'Com quase 2.700 horas de sol por ano, o relógio manda: ao ar livre, o padrão fortalezense é treinar entre 5h e 7h da manhã — quando a Beira-Mar mais movimenta — ou depois das 16h30, aproveitando a brisa marítima. No meio do dia, a conta fecha com academia climatizada. O personal monta a semana misturando os dois mundos e reforça hidratação e proteção solar como parte do próprio treino.',
    },
    {
      pergunta: 'Há acompanhamento em Fortaleza para quem sente dores ou tem limitações?',
      resposta:
        'Há. O Montinho Personal, destacado pelo portal, tem cursos voltados ao treinamento de pessoas com dores e limitações musculoesqueléticas, além da vivência prática de mais de 20 anos de musculação. Para Fortaleza, o formato é o acompanhamento online: treino adaptado à estrutura disponível (academia, condomínio, casa ou orla), vídeos de execução e ajustes contínuos. O trabalho é progressivo e sem promessa de cura — quadros clínicos pedem também médico ou fisioterapeuta.',
    },
  ],

  vizinhas: ['natal-rn', 'joao-pessoa-pb', 'recife-pe'],

  fontes: [
    { nome: 'IBGE Cidades — Fortaleza', url: 'https://cidades.ibge.gov.br/brasil/ce/fortaleza/panorama' },
    { nome: 'Prefeitura de Fortaleza', url: 'https://www.fortaleza.ce.gov.br/' },
    { nome: 'Atlas Brasil — IDHM', url: 'https://www.atlasbrasil.org.br/' },
  ],
  capaArte: {
    src: '/capas-cidade/fortaleza-ce.webp',
    alt:
      'Personal trainer em Fortaleza (CE) acompanhando aluna em treino de força ao ar livre na orla da Beira-Mar ao pôr do sol, com os arranha-céus à beira-mar ao fundo — Personal por Perto',
    legenda:
      'Treino personalizado em Fortaleza: um plano feito para o seu corpo e a sua rotina, com acompanhamento profissional na cidade e região.',
  },
  atualizadoEm: '2026-07-22',
};
