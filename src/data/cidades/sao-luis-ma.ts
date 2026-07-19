import type { Cidade } from '../../lib/types';

export const cidade: Cidade = {
  slug: 'sao-luis-ma',
  nome: 'São Luís',
  uf: 'MA',
  estado: 'Maranhão',
  estadoSlug: 'maranhao',
  regiao: 'Nordeste',
  gentilico: 'ludovicense',
  tipo: 'cidade',

  populacao: 1037775,
  populacaoAno: 2022,
  idhm: 0.768,
  idhmClasse: 'alto',
  altitudeM: 24,

  resumoEconomico:
    'Capital do Maranhão e cidade histórica com Centro Histórico tombado pela Unesco, São Luís tem o maior PIB do estado e é um forte polo portuário-industrial, com o complexo do Itaqui, o Terminal de Ponta da Madeira e o porto da Alumar. A economia combina indústria do alumínio, logística portuária, serviços e turismo — e a orla concentra boa parte da vida ativa da cidade.',

  mercado:
    'O mercado fitness é consolidado, com a Smart Fit em várias unidades (Calhau, Cohama, Renascença, Turu), a Bodytech no Shopping da Ilha, academias locais fortes e boxes de crossfit. A cultura de treino ao ar livre é intensa na Lagoa da Jansen e na Avenida Litorânea.',

  bairrosNobres: ['Renascença', 'Calhau', "Ponta d'Areia", 'São Francisco'],
  bairrosPopulares: ['Cohab', 'Cohama', 'Turu', 'Coroadinho'],

  parques: [
    {
      nome: 'Parque Ecológico da Lagoa da Jansen',
      descricao:
        'Tem pista de cooper, ciclovia de cerca de 4 km contornando a lagoa, quadras poliesportivas, pista de skate e concha acústica — o principal hub de treino ao ar livre da cidade.',
    },
    {
      nome: 'Avenida Litorânea',
      descricao:
        'Calçadão plano de cerca de 6 km à beira-mar, com ciclofaixa — o ponto preferido dos corredores de São Luís.',
    },
    {
      nome: 'Parque do Bom Menino',
      descricao:
        'No centro, com cerca de 9,5 mil m², tem pista de cooper de concreto, estações de alongamento e academia ao ar livre (das 5h às 23h).',
    },
  ],
  ciclovias:
    'A cobertura cicloviária ainda é fragmentada; os trechos mais usados são o anel de cerca de 4 km da Lagoa da Jansen e a ciclofaixa da Avenida Litorânea.',

  clima:
    'O clima é tropical úmido, quente o ano todo (média perto de 27 °C), com umidade alta e chuvas concentradas entre dezembro e junho.',
  climaTreino:
    'O treino ao ar livre rende mais no início da manhã ou no fim da tarde, com forte atenção à hidratação — a orla ventilada ajuda no conforto térmico.',

  mobilidade:
    'O acesso é pela BR-135 (ligação ao continente) e pela BR-222, com transporte urbano por ônibus. A ciclomobilidade ainda está em desenvolvimento.',

  corridas: [
    {
      nome: 'Meia Maratona da PMMA',
      descricao:
        'Prova noturna com largada no Calhau e percursos de 5 km, 10 km, 15 km e 21 km — uma das mais tradicionais da capital.',
    },
    {
      nome: 'Circuito Sesc de Corridas (etapa São Luís)',
      descricao:
        'Provas de 5 km e 10 km com largada na orla (Avenida Litorânea), parte de um calendário em expansão.',
    },
  ],
  culturaEsportiva:
    'São Luís tem forte tradição de corrida de rua e de treino na orla, com um calendário ativo (Sesc, circuitos nacionais). O futebol e os esportes de praia também são marcantes, e a Lagoa da Jansen é o coração esportivo da cidade.',
  academias:
    'A oferta reúne redes (Smart Fit, Bodytech) e academias locais fortes, além de uma cena de crossfit e funcional em crescimento, com a orla e a Lagoa da Jansen como grandes extensões ao ar livre.',
  academiasProximas: [
    { nome: 'Smart Fit', detalhe: 'unidades no Calhau, na Cohama, no Renascença e no Turu' },
    { nome: 'Bodytech', detalhe: 'no Shopping da Ilha' },
    { nome: 'Boxes de crossfit e academias locais', detalhe: 'cena forte no Renascença e no Calhau' },
    { nome: 'Academias ao ar livre', detalhe: 'gratuitas, na Lagoa da Jansen e no Parque do Bom Menino' },
  ],

  destaquesFitness: [
    'Lagoa da Jansen como hub de treino ao ar livre, com ciclovia de cerca de 4 km.',
    'Avenida Litorânea com cerca de 6 km planos, ideal para volume de corrida.',
    'Redes consolidadas (Smart Fit, Bodytech) e cena de crossfit e funcional.',
    'Calendário de corridas de rua em expansão.',
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
    'Entre o patrimônio histórico e uma orla feita para correr, São Luís oferece bons cenários para treinar — da Lagoa da Jansen à Litorânea. Um personal trainer ajuda a montar uma rotina que respeite o calor e a umidade e a aproveitar ao máximo a estrutura da capital maranhense.',

  faqsExtra: [
    {
      pergunta: 'Onde o personal costuma atender em São Luís?',
      resposta:
        'O coração é o eixo Lagoa da Jansen–Avenida Litorânea: a lagoa concentra o treino funcional e a corrida no anel de cerca de 4 km, e a Litorânea oferece 6 km planos à beira-mar. Nas academias, a oferta vai da Bodytech do Shopping da Ilha às Smart Fit do Calhau, Cohama, Renascença e Turu, com boxes de crossfit completando a cena. O atendimento em casa e em condomínio é comum no Renascença, no Calhau e na Ponta d\'Areia.',
    },
    {
      pergunta: 'Treinar à noite funciona em São Luís?',
      resposta:
        'Funciona — e é quase uma tradição local. Com o calor e a umidade altos durante o dia, a orla e a Lagoa da Jansen enchem depois das 17h30, e até a principal meia maratona da capital é noturna, com largada no Calhau. Para quem trabalha em horário comercial, o personal monta a semana com sessões noturnas ao ar livre e treinos de força em academia climatizada, aproveitando a janela em que a cidade inteira decide se mover.',
    },
    {
      pergunta: 'Há acompanhamento em São Luís para quem sente dores ou tem limitações?',
      resposta:
        'Há. O Montinho Personal, destacado pelo portal, tem cursos voltados ao treinamento de pessoas com dores e limitações musculoesqueléticas, além da vivência prática de mais de 20 anos de musculação. Para São Luís, o formato é o acompanhamento online: treino adaptado à estrutura disponível (academia, condomínio, casa ou orla), vídeos de execução e ajustes contínuos. O trabalho é progressivo e sem promessa de cura — quadros clínicos pedem também médico ou fisioterapeuta.',
    },
  ],

  vizinhas: ['teresina-pi', 'belem-pa', 'fortaleza-ce'],

  fontes: [
    { nome: 'IBGE Cidades — São Luís', url: 'https://cidades.ibge.gov.br/brasil/ma/sao-luis/panorama' },
    { nome: 'Prefeitura de São Luís', url: 'https://www.saoluis.ma.gov.br/' },
    { nome: 'Atlas Brasil — IDHM', url: 'https://www.atlasbrasil.org.br/' },
  ],
  atualizadoEm: '2026-07-19',
};
