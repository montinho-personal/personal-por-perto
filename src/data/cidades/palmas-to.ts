import type { Cidade } from '../../lib/types';

export const cidade: Cidade = {
  slug: 'palmas-to',
  nome: 'Palmas',
  uf: 'TO',
  estado: 'Tocantins',
  estadoSlug: 'tocantins',
  regiao: 'Norte',
  gentilico: 'palmense',
  tipo: 'cidade',

  populacao: 302692,
  populacaoAno: 2022,
  idhm: 0.788,
  idhmClasse: 'alto',
  altitudeM: 280,

  resumoEconomico:
    'Capital mais nova do Brasil e a última cidade totalmente planejada do século XX, Palmas foi instalada em 1990 e tem economia baseada em serviços e administração pública, como centro do Tocantins. Com traçado em grade, avenidas largas e o grande Lago de Palmas, a cidade foi desenhada para a qualidade de vida — e isso se reflete em uma das maiores taxas de atividade física do país.',

  mercado:
    'Palmas é destaque nacional na prática de atividade física: segundo o Vigitel do Ministério da Saúde, é a capital nº 1 do Brasil em mulheres fisicamente ativas no tempo livre (cerca de 49,6%) e tem a menor obesidade feminina entre as capitais. Essa cultura, puxada pelo Lago, pelos parques e pela ampla infraestrutura pública, sustenta uma demanda real por personal trainers e treino ao ar livre.',

  bairrosNobres: ['Plano Diretor Sul (Graciosa)', 'Quadra ARSE 41', 'Quadra ARSO 31', 'Orla do Lago'],
  bairrosPopulares: ['Aureny', 'Taquaralto', 'Morada do Sol', 'Jardim Aureny'],

  parques: [
    {
      nome: 'Parque Cesamar',
      descricao:
        'O maior parque da cidade, com pista de cerca de 5 km, academia ao ar livre, lago e amplas áreas verdes — o principal espaço de treino ao ar livre de Palmas.',
    },
    {
      nome: 'Praia da Graciosa (orla do Lago)',
      descricao:
        'Tem cerca de 500 m de pista e 1.200 m de ciclovia à beira do Lago de Palmas, com vista privilegiada para o pôr do sol.',
    },
    {
      nome: 'Orla e praias do Lago de Palmas',
      descricao:
        'Espaços abertos como a Praia do Prata e a Praia das Arnos, com academias ao ar livre à beira do lago — cartões-postais da vida ativa palmense.',
    },
  ],
  ciclovias:
    'A malha cicloviária cresceu cerca de 40% em um ano (chegando a aproximadamente 68,5 km), um dos maiores avanços percentuais entre as capitais, em uma cidade plana e planejada, ideal para a bike.',

  clima:
    'O clima é tropical, com estação seca no inverno, média em torno de 26,8 °C (variando de 20 °C a 35 °C) e umidade alta no verão. Palmas é uma cidade muito quente.',
  climaTreino:
    'Pelo calor intenso, o treino ao ar livre rende mais cedo de manhã ou no fim da tarde, com forte ênfase em hidratação e proteção solar — sobretudo na seca, de maio a setembro.',

  mobilidade:
    'O traçado em grade, com avenidas largas (eixos NS e LO), favorece o deslocamento e o uso da bicicleta. A cidade é cortada pela BR-153 (Belém–Brasília), tem aeroporto próprio e transporte coletivo por ônibus.',

  corridas: [
    {
      nome: 'Meia Maratona das Praias',
      descricao:
        'Prova com percursos de 3 km, 5 km, 10 km e 21 km na orla e nas praias do Lago de Palmas.',
    },
    {
      nome: 'Circuito Banco do Brasil de Corrida de Rua',
      descricao:
        'Etapa do circuito nacional de corrida de rua na capital, com provas de 5 km e 10 km.',
    },
  ],
  culturaEsportiva:
    'Palmas "respira" esporte e lazer, com espaços públicos sempre movimentados. O grande diferencial é o pioneirismo nacional em atividade física entre mulheres, confirmado pelo Vigitel, sustentado pela orla do Lago, pelos parques, pelas academias ao ar livre e pelas ciclovias.',
  academias:
    'A oferta de academias acompanha o crescimento da cidade, mas o grande trunfo de Palmas é a estrutura pública ao ar livre — parques com pistas de até 5 km e academias gratuitas à beira do lago, que ampliam muito o acesso ao treino.',
  academiasProximas: [
    { nome: 'Smart Fit', detalhe: 'unidades no Centro e na Av. Teotônio Segurado Sul' },
    { nome: 'Academias e estúdios locais', detalhe: 'oferta crescente nas quadras do Plano Diretor' },
    { nome: 'Academias ao ar livre', detalhe: 'gratuitas, no Parque Cesamar e nas praias do Lago' },
  ],

  destaquesFitness: [
    'Capital nº 1 do Brasil em mulheres fisicamente ativas (Vigitel: cerca de 49,6%).',
    'Menor obesidade feminina entre as capitais brasileiras.',
    'Orla do Lago e Parque Cesamar (pista de até 5 km) como grandes polos de treino ao ar livre.',
    'Malha cicloviária em forte expansão (cerca de 68,5 km) em cidade plana e planejada.',
  ],

  precos: {
    avulsaMin: 65,
    avulsaMax: 150,
    mensalMin: 320,
    mensalMax: 880,
    onlineMin: 160,
    onlineMax: 400,
  },

  conclusao:
    'Planejada para a qualidade de vida e líder nacional em mulheres ativas, Palmas é a prova de que estrutura e cultura caminham juntas. Um personal trainer ajuda a aproveitar o Lago, o Parque Cesamar e as ciclovias com um plano sob medida — e a treinar com segurança mesmo no forte calor da capital.',

  faqsExtra: [
    {
      pergunta: 'Onde o personal costuma atender em Palmas?',
      resposta:
        'O Parque Cesamar, com pista de cerca de 5 km, e a orla do Lago — da Praia da Graciosa às Arnos — são os palcos naturais do treino ao ar livre, com academias públicas gratuitas espalhadas. Nas academias, a Smart Fit cobre o Centro e a Teotônio Segurado, e estúdios locais crescem nas quadras do Plano Diretor. O atendimento em casa também é comum: a cidade plana e de traçado em grade torna o deslocamento do profissional rápido entre as quadras.',
    },
    {
      pergunta: 'Por que Palmas é a capital nº 1 do Brasil em mulheres ativas?',
      resposta:
        'A combinação é rara: uma cidade planejada com espaços públicos seguros e bem cuidados (Cesamar, orla, ciclovias em expansão), cultura de treino coletivo ao ar livre e uma população jovem. O resultado aparece no Vigitel do Ministério da Saúde: cerca de 49,6% das mulheres fisicamente ativas no tempo livre — 1º lugar nacional — e a menor obesidade feminina entre as capitais. Para quem quer começar, isso significa ambiente favorável e companhia garantida em qualquer horário de menor calor.',
    },
    {
      pergunta: 'Há acompanhamento em Palmas para quem sente dores ou tem limitações?',
      resposta:
        'Há. O Montinho Personal, destacado pelo portal, tem cursos voltados ao treinamento de pessoas com dores e limitações musculoesqueléticas, além da vivência prática de mais de 20 anos de musculação. Para Palmas, o formato é o acompanhamento online: treino adaptado à estrutura disponível (academia, condomínio, casa ou parque), vídeos de execução e ajustes contínuos. O trabalho é progressivo e sem promessa de cura — quadros clínicos pedem também médico ou fisioterapeuta.',
    },
  ],

  vizinhas: ['brasilia-df', 'goiania-go', 'manaus-am'],

  fontes: [
    { nome: 'IBGE Cidades — Palmas', url: 'https://cidades.ibge.gov.br/brasil/to/palmas/panorama' },
    { nome: 'Prefeitura de Palmas', url: 'https://www.palmas.to.gov.br/' },
    { nome: 'Atlas Brasil — IDHM', url: 'https://www.atlasbrasil.org.br/' },
  ],
  atualizadoEm: '2026-07-19',
};
