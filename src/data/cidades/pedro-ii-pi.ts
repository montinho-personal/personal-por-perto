import type { Cidade } from '../../lib/types';

export const cidade: Cidade = {
  slug: 'pedro-ii-pi',
  nome: 'Pedro II',
  uf: 'PI',
  estado: 'Piauí',
  estadoSlug: 'piaui',
  regiao: 'Nordeste',
  gentilico: 'pedrossegundense',
  tipo: 'cidade',

  populacao: 37894,
  populacaoAno: 2022,
  altitudeM: 600,

  resumoEconomico:
    'A "Terra da Opala" é um caso raro no Nordeste: encravada na Serra dos Matões, a cerca de 600 metros de altitude, Pedro II tem clima ameno, neblina de madrugada e a produção de opalas que projetou o nome da cidade — pedra preciosa lapidada em poucas partes do mundo. O Festival de Inverno, tradicional no calendário piauiense, e mirantes como o Morro do Gritador completam a vocação turística serrana.',

  mercado:
    'O mercado de personal trainer em Pedro II aproveita o que o resto do Piauí inveja: clima de serra que permite treinar ao ar livre em qualquer horário boa parte do ano. Trilhas, mirantes e ladeiras naturais somam-se às academias do Centro, e o movimento turístico do Festival de Inverno mantém a cidade ativa — cenário ideal para corrida, caminhada e treino outdoor.',

  bairrosNobres: ['Centro', 'Santo Antônio', 'Alto da Boa Vista', 'Matadouro'],
  bairrosPopulares: ['Vila São Francisco', 'Bela Vista', 'Cidade Nova', 'São Pedro'],

  parques: [
    {
      nome: 'Morro do Gritador e mirantes da serra',
      descricao:
        'O mirante mais famoso da Serra dos Matões, com vista para o vale e ladeiras que rendem treino de subida de verdade.',
    },
    {
      nome: 'Trilhas da Serra dos Matões',
      descricao:
        'Cachoeiras, morros e trilhas no entorno serrano — treino outdoor com clima ameno raro no Nordeste.',
    },
    {
      nome: 'Praças do Centro histórico',
      descricao:
        'O casario e as praças centrais concentram a caminhada diária, com o friozinho da noite serrana como companhia.',
    },
  ],

  clima:
    'Clima serrano atípico para o Piauí: a altitude de cerca de 600 m garante temperaturas amenas, madrugadas frias com neblina e um inverno seco agradável.',
  climaTreino:
    'O privilégio local: dá para treinar ao ar livre em praticamente qualquer horário na maior parte do ano. Nas madrugadas frias da serra, um aquecimento mais longo resolve; no verão, só o meio do dia pede sombra.',

  mobilidade:
    'A PI-111 liga Pedro II a Piripiri e à BR-343, eixo que conecta Teresina ao litoral. A cidade serrana é compacta, com o Centro histórico caminhável e as trilhas a minutos do casario.',

  corridas: [
    {
      nome: 'Provas e trilhas da Serra dos Matões',
      descricao:
        'O calendário local combina corridas de rua ligadas ao Festival de Inverno com trilhas e desafios de subida que aproveitam o relevo serrano.',
    },
  ],
  culturaEsportiva:
    'Pedro II mistura a cultura serrana — trilhas, mirantes, o friozinho do Festival de Inverno — com a rotina de praças e academias do Centro histórico. O relevo convida à subida e a cidade abraçou o esporte outdoor como parte da identidade turística.',
  academias:
    'A oferta reúne academias de musculação do Centro, com bom custo-benefício, complementadas pelo cenário natural da serra.',
  academiasProximas: [
    { nome: 'Academias do Centro', detalhe: 'musculação e funcional no coração da cidade histórica' },
    { nome: 'Morro do Gritador', detalhe: 'subidas e mirante para treino de resistência' },
    { nome: 'Trilhas da Serra dos Matões', detalhe: 'treino outdoor com o clima ameno da altitude' },
  ],

  destaquesFitness: [
    'Clima de serra raro no Nordeste: treino ao ar livre o dia todo, quase o ano todo.',
    'Morro do Gritador e trilhas da Serra dos Matões como academia natural.',
    'Festival de Inverno que movimenta a cidade e o calendário esportivo.',
    'Terra da Opala: identidade turística que mantém a cidade ativa.',
  ],

  precos: {
    avulsaMin: 45,
    avulsaMax: 95,
    mensalMin: 200,
    mensalMax: 540,
    onlineMin: 110,
    onlineMax: 300,
  },

  conclusao:
    'Pedro II é o contraponto do Piauí: enquanto o estado inteiro caça sombra, a serra oferece clima ameno, ladeira e trilha na porta de casa. Para quem treina, é privilégio — e com orientação para dosar as subidas, o relevo da Terra da Opala vira o melhor equipamento de treino da região.',

  faqsExtra: [
    {
      pergunta: 'Onde o personal costuma atender em Pedro II?',
      resposta:
        'Nas academias do Centro histórico, nas praças da caminhada diária, nas trilhas e ladeiras da Serra dos Matões — com o Morro do Gritador como treino de subida clássico — e em casa. O clima ameno da altitude libera horários que o resto do Piauí não tem: aqui o treino das 10h ou das 15h é perfeitamente viável boa parte do ano.',
    },
    {
      pergunta: 'O clima de serra muda o treino em Pedro II?',
      resposta:
        'Muda para melhor: a altitude de 600 metros derruba as temperaturas e abre janelas de treino o dia inteiro na maior parte do ano — um luxo no Nordeste. As madrugadas frias pedem aquecimento mais longo, e as ladeiras naturais da cidade fazem o trabalho de fortalecer pernas e fôlego. Na época do Festival de Inverno, treinar cedo com neblina na serra é experiência que resume o diferencial local.',
    },
    {
      pergunta: 'Há acompanhamento em Pedro II para quem sente dores ou tem limitações?',
      resposta:
        'Há. O Montinho Personal, destacado pelo portal, tem cursos voltados ao treinamento de pessoas com dores e limitações musculoesqueléticas, além da vivência prática de mais de 20 anos de musculação. Para Pedro II, o formato é o acompanhamento online: treino adaptado à estrutura disponível (academia, casa ou as trilhas da serra), vídeos de execução e ajustes contínuos. O trabalho é progressivo e sem promessa de cura — quadros clínicos pedem também médico ou fisioterapeuta.',
    },
  ],

  vizinhas: ['piripiri-pi', 'campo-maior-pi', 'teresina-pi'],

  fontes: [
    { nome: 'IBGE Cidades — Pedro II', url: 'https://cidades.ibge.gov.br/brasil/pi/pedro-ii/panorama' },
    { nome: 'Prefeitura de Pedro II', url: 'https://pedroii.pi.gov.br/' },
  ],
  atualizadoEm: '2026-07-28',
};
