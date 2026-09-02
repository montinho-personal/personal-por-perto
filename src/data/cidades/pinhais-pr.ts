import type { Cidade } from '../../lib/types';

export const cidade: Cidade = {
  slug: 'pinhais-pr', nome: 'Pinhais', uf: 'PR', estado: 'Paraná', estadoSlug: 'parana', regiao: 'Sul', gentilico: 'pinhaiense', tipo: 'cidade',
  populacao: 127019, populacaoAno: 2022, idhm: 0.751, idhmClasse: 'alto', altitudeM: 893,

  resumoEconomico:
    'Pinhais é o menor município do Paraná em área, com cerca de 61 km², e mesmo assim concentra mais de 127 mil habitantes (Censo 2022), o que resulta numa das maiores densidades demográficas do estado — cerca de 2.087 hab/km². Emancipada de Piraquara em 1992, integra a Região Metropolitana de Curitiba e fica conurbada à capital, a poucos quilômetros do Centro curitibano. Tem perfil industrial e de serviços, com indústrias e empresas instaladas ao longo dos eixos de acesso, e IDHM de 0,751 (2010), classificado como alto — um conjunto de fatores que sustenta um público urbano, de renda média, próximo às facilidades de Curitiba e atento à qualidade de vida.',
  mercado:
    'Por ser uma cidade compacta, densa e colada a Curitiba, Pinhais tem um mercado de personal trainer que se beneficia dos dois mundos: boa oferta local de academias e estúdios no Centro e em bairros como Weissópolis e Maria Antonieta, e fácil acesso às opções da capital. A alta densidade e os deslocamentos curtos favorecem especialmente o atendimento domiciliar e em condomínios, formato que ganha tração numa cidade onde quase tudo está a poucos minutos. Os preços acompanham o patamar médio-alto da RM de Curitiba.',

  bairrosNobres: ['Maria Antonieta', 'Centro', 'Estância Pinhais'],
  bairrosPopulares: ['Weissópolis', 'Emiliano Perneta', 'Jardim Amélia', 'Vargem Grande'],

  parques: [
    {
      nome: 'Parque das Águas',
      descricao:
        'O principal parque de Pinhais, na Avenida Camilo di Lellis, no Centro. Inaugurado em 2018 e ampliado nas fases seguintes, chegou a cerca de 450 mil m², tornando-se um dos maiores parques da Região Metropolitana de Curitiba. Tem pistas de corrida e caminhada, ciclovia, academia ao ar livre e playgrounds, às margens do Rio Iguaçu — é o grande ponto de treino ao ar livre da cidade.',
    },
  ],
  ciclovias:
    'O Parque das Águas concentra a principal infraestrutura para pedalar e correr com segurança em Pinhais, com ciclovia e pistas próprias, e a cidade se conecta à malha cicloviária da Região Metropolitana de Curitiba pelos eixos de acesso à capital.',

  clima:
    'Pinhais fica no Segundo Planalto Paranaense, a cerca de 893 m de altitude, com clima subtropical úmido (Cfb na classificação de Köppen), de verões amenos e invernos relativamente frios — bastante semelhante ao de Curitiba, que faz divisa com o município. Geadas ocorrem no inverno e as temperaturas caem de forma sensível entre junho e agosto.',
  climaTreino:
    'Como em toda a RM de Curitiba, o frio é o fator que mais pesa no treino ao ar livre: no inverno, o aquecimento precisa ser mais longo e o vestuário ajustado, sobretudo nas largadas de corrida em manhãs com temperaturas baixas. Um bom personal adapta a sessão ao clima local, o que faz diferença real na prevenção de lesões.',

  mobilidade:
    'Conurbada a Curitiba, Pinhais tem acesso direto à capital pela BR-116 e pela Linha Verde, além de integração ao transporte metropolitano pelo Terminal Metropolitano de Pinhais, operado no sistema da Região Metropolitana de Curitiba. As distâncias internas curtas e a proximidade da capital facilitam o deslocamento entre academias, parques e atendimentos em domicílio.',

  corridas: [
    {
      nome: 'Corrida Noturna Desafio das Águas',
      descricao:
        'Prova de rua realizada no Parque das Águas, em Pinhais, associada às comemorações de aniversário da cidade — um dos eventos de corrida que movimentam o calendário esportivo local.',
    },
    {
      nome: 'Etapas e treinões no Parque das Águas',
      descricao:
        'O Parque das Águas recebe com frequência provas e treinões de corrida, incluindo etapas de circuitos como a Santander Night Run, com percursos de 5 km e 10 km que aproveitam a infraestrutura do parque.',
    },
  ],
  culturaEsportiva:
    'A vida esportiva ao ar livre de Pinhais gira em torno do Parque das Águas, que reúne pistas, ciclovia e academia ao ar livre e sedia provas de corrida e eventos ao longo do ano. Somada à proximidade dos parques de Curitiba, essa estrutura faz da prática de exercícios parte natural da rotina de quem mora numa cidade compacta e densa.',
  academias:
    'A oferta de academias e estúdios se concentra no Centro e em bairros como Weissópolis e Maria Antonieta, complementada pela facilidade de acesso às opções de Curitiba. A densidade urbana e os deslocamentos curtos também favorecem o treino funcional e o atendimento de personal em casa e em condomínios.',

  destaquesFitness: [
    'Parque das Águas: cerca de 450 mil m² com pistas de corrida, ciclovia e academia ao ar livre, às margens do Rio Iguaçu.',
    'Cidade compacta e densa (~2.087 hab/km²), o que favorece o atendimento domiciliar e em condomínios.',
    'Conurbada a Curitiba via BR-116 e Linha Verde, somando oferta local e da capital.',
    'Clima frio no inverno, que exige ajuste de aquecimento e vestuário — onde um bom personal faz diferença.',
  ],

  precos: {
    avulsaMin: 60,
    avulsaMax: 140,
    mensalMin: 300,
    mensalMax: 820,
    onlineMin: 140,
    onlineMax: 400,
  },

  conclusao:
    'Menor município do Paraná em área, mas denso e colado a Curitiba, Pinhais oferece um cenário favorável para quem busca personal trainer: deslocamentos curtos, boa oferta de academias no Centro e nos bairros, o Parque das Águas como referência de treino ao ar livre e fácil acesso às opções da capital. Para o aluno, isso significa flexibilidade entre treino em academia, ao ar livre ou em casa — tudo a poucos minutos.',
  vizinhas: ['curitiba-pr', 'sao-jose-dos-pinhais-pr', 'araucaria-pr'],

  capaArte: {
    src: '/capas-cidade/pinhais-pr.webp',
    w: 1200,
    h: 1200,
    alt: 'Personal trainer em Pinhais (PR) em arte com o Parque das Águas, o centro de eventos Expotrade e a orla do parque, com o treino em primeiro plano — Personal por Perto',
    legenda: 'Treino personalizado em Pinhais: treino perto de você, com acompanhamento profissional na região metropolitana de Curitiba.',
  },
  fontes: [
    { nome: 'IBGE Cidades — Pinhais', url: 'https://cidades.ibge.gov.br/brasil/pr/pinhais/panorama' },
    { nome: 'Prefeitura de Pinhais', url: 'https://pinhais.atende.net/cidadao/pagina/caracteristicas-do-municipio' },
    { nome: 'Atlas Brasil — IDHM', url: 'https://www.atlasbrasil.org.br/' },
  ], atualizadoEm: '2026-09-01',
};
