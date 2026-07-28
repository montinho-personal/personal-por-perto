import type { Cidade } from '../../lib/types';

export const cidade: Cidade = {
  slug: 'casa-nova-ba',
  nome: 'Casa Nova',
  uf: 'BA',
  estado: 'Bahia',
  estadoSlug: 'bahia',
  regiao: 'Nordeste',
  gentilico: 'casa-novense',
  tipo: 'cidade',

  populacao: 72086,
  populacaoAno: 2022,

  resumoEconomico:
    'Às margens do Lago de Sobradinho — um dos maiores lagos artificiais do mundo —, Casa Nova vive do Vale do São Francisco: agricultura irrigada, caprinocultura tradicional do sertão e um turismo em ascensão puxado pelas praias de água doce, com as Dunas do Velho Chico atraindo visitantes de vários estados. A vitivinicultura da região completa o cenário de um sertão que aprendeu a produzir com a água do Velho Chico.',

  mercado:
    'O mercado de personal trainer em Casa Nova segue o ritmo do lago: a orla e as praias de água doce concentram caminhada, corrida e treino funcional nos horários frescos, as academias do Centro atendem a rotina urbana e o turismo de fim de semana movimenta atividades ao ar livre. O calor do semiárido comanda a agenda — amanhecer e fim de tarde são as janelas de ouro, e a hidratação é parte do treino.',

  bairrosNobres: ['Centro', 'Alto da Bela Vista', 'Loteamento Terra Nova', 'Orla'],
  bairrosPopulares: ['Alto do Cruzeiro', 'São Vicente', 'Nova Casa Nova', 'Santa Bárbara'],

  parques: [
    {
      nome: 'Orla do Lago de Sobradinho',
      descricao:
        'O cartão-postal da cidade: margens do grande lago com praias de água doce, usadas para caminhada, corrida e esportes náuticos.',
    },
    {
      nome: 'Dunas do Velho Chico',
      descricao:
        'O cenário de dunas junto ao lago virou destino turístico e rende treino de areia — exigente e com visual de deserto à beira do lago.',
    },
    {
      nome: 'Praças e espaços públicos do Centro',
      descricao:
        'As praças centrais concentram a caminhada do fim de tarde e a estrutura pública de treino da rotina urbana.',
    },
  ],

  clima:
    'Clima semiárido do sertão do São Francisco: quente e seco a maior parte do ano, com sol forte e chuvas concentradas num período curto do verão.',
  climaTreino:
    'O sol do semiárido define as regras: treino ao ar livre no amanhecer ou no fim de tarde, hidratação começando antes da sessão e o meio do dia reservado para academia coberta. A brisa do lago alivia a orla nos horários certos.',

  mobilidade:
    'A BR-235 e o acesso pela barragem de Sobradinho ligam Casa Nova a Juazeiro e Petrolina, os polos regionais. O deslocamento urbano é simples; a travessia do lago é parte da paisagem local.',

  corridas: [
    {
      nome: 'Provas e travessias do calendário regional',
      descricao:
        'O calendário do Vale do São Francisco inclui provas de rua nos polos vizinhos e eventos náuticos no lago, que movimentam a cena esportiva casa-novense.',
    },
  ],
  culturaEsportiva:
    'A vida esportiva de Casa Nova gira em torno da água: natação, esportes náuticos e a caminhada na orla do Sobradinho, somadas ao futebol de várzea e às academias do Centro. O turismo das praias de água doce reforça a cultura de atividade ao ar livre nos horários frescos.',
  academias:
    'A oferta se concentra em academias de musculação e funcional no Centro, com bom custo-benefício, complementadas pela estrutura natural da orla.',
  academiasProximas: [
    { nome: 'Academias do Centro', detalhe: 'musculação e funcional para a rotina urbana' },
    { nome: 'Orla do Lago de Sobradinho', detalhe: 'caminhada, corrida e funcional à beira do lago' },
    { nome: 'Dunas do Velho Chico', detalhe: 'treino de areia em cenário único do sertão' },
  ],

  destaquesFitness: [
    'Orla do Lago de Sobradinho: treino à beira de um dos maiores lagos artificiais do mundo.',
    'Dunas do Velho Chico para treino de areia exigente.',
    'Clima semiárido: janelas de treino no amanhecer e entardecer.',
    'Turismo de praias de água doce que movimenta o esporte ao ar livre.',
  ],

  precos: {
    avulsaMin: 45,
    avulsaMax: 100,
    mensalMin: 220,
    mensalMax: 600,
    onlineMin: 110,
    onlineMax: 320,
  },

  conclusao:
    'Casa Nova tem o que poucas cidades do sertão têm: água de sobra para treinar à beira do lago o ano inteiro. Com as janelas certas de horário e um plano que respeite o calor do semiárido, a orla do Sobradinho vira pista, academia e cenário — e um personal trainer local ou online monta essa rotina para durar.',

  faqsExtra: [
    {
      pergunta: 'Onde o personal costuma atender em Casa Nova?',
      resposta:
        'Na orla do Lago de Sobradinho — o principal espaço de treino ao ar livre, com caminhada, corrida e funcional à beira do lago —, nas academias de musculação do Centro, nas praças públicas e em casa. Nos fins de semana, as praias de água doce e as Dunas do Velho Chico viram extensão do treino, com a areia funcionando como resistência natural.',
    },
    {
      pergunta: 'Como treinar no calor do semiárido de Casa Nova?',
      resposta:
        'A regra do sertão do São Francisco é clara: amanhecer e fim de tarde são as janelas de treino ao ar livre, quando a brisa do lago alivia a temperatura. A hidratação começa antes da sessão — no ar seco a perda de líquido engana — e o meio do dia fica para a academia coberta. Com essa lógica de janelas, treina-se o ano inteiro sem sofrimento; sem ela, o calor vence qualquer motivação.',
    },
    {
      pergunta: 'Há acompanhamento em Casa Nova para quem sente dores ou tem limitações?',
      resposta:
        'Há. O Montinho Personal, destacado pelo portal, tem cursos voltados ao treinamento de pessoas com dores e limitações musculoesqueléticas, além da vivência prática de mais de 20 anos de musculação. Para Casa Nova, o formato é o acompanhamento online: treino adaptado à estrutura disponível (academia, casa ou a orla do lago), vídeos de execução e ajustes contínuos. O trabalho é progressivo e sem promessa de cura — quadros clínicos pedem também médico ou fisioterapeuta.',
    },
  ],

  vizinhas: ['juazeiro-ba', 'petrolina-pe', 'salgueiro-pe'],

  fontes: [
    { nome: 'IBGE Cidades — Casa Nova', url: 'https://cidades.ibge.gov.br/brasil/ba/casa-nova/panorama' },
    { nome: 'Prefeitura de Casa Nova', url: 'https://www.casanova.ba.gov.br/' },
  ],
  atualizadoEm: '2026-07-28',
};
