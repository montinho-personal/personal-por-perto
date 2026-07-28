import type { Cidade } from '../../lib/types';

export const cidade: Cidade = {
  slug: 'guanambi-ba',
  nome: 'Guanambi',
  uf: 'BA',
  estado: 'Bahia',
  estadoSlug: 'bahia',
  regiao: 'Nordeste',
  gentilico: 'guanambiense',
  tipo: 'cidade',

  populacao: 87817,
  populacaoAno: 2022,
  idhm: 0.673,
  idhmClasse: 'médio',
  altitudeM: 525,

  resumoEconomico:
    'Guanambi é um dos principais polos regionais do sudoeste baiano, exercendo influência sobre dezenas de municípios do entorno em comércio, serviços e, sobretudo, saúde, com o Hospital Geral de Guanambi atuando como referência regional do SUS. A economia combina o comércio varejista, a prestação de serviços e a forte expansão da geração de energia eólica nas serras da região, que atraiu investimentos e mão de obra qualificada. A presença de instituições de ensino superior reforça o perfil de cidade-polo do território.',

  mercado:
    'Cidade-polo com comércio aquecido, rede de saúde regional e público universitário, Guanambi reúne demanda consistente por academias e personal trainers. O crescimento ligado ao setor eólico e aos serviços amplia a classe média e o interesse por acompanhamento físico personalizado.',

  bairrosNobres: ['Centro', 'Bela Vista', 'Belo Horizonte', 'Brasília'],
  bairrosPopulares: ['Aeroporto', 'Sandra Regina', 'Mutans', 'São Francisco'],

  parques: [
    {
      nome: 'Parque da Cidade',
      descricao:
        'Espaço público de lazer da cidade, com áreas para caminhada e convívio ao ar livre, usado pela população para atividade física no fim de tarde.',
    },
    {
      nome: 'Estádio Municipal',
      descricao:
        'Estrutura esportiva municipal que complementa a oferta de espaços para treino, prática de modalidades e eventos esportivos.',
    },
    {
      nome: 'Avenidas e praças do Centro',
      descricao:
        'Os calçadões e praças da área central concentram boa parte das caminhadas e corridas de quem treina na rua, especialmente nos horários mais frescos.',
    },
  ],
  ciclovias:
    'A cidade tem trechos de vias adaptadas para o pedal no perímetro urbano; a extensão total da malha cicloviária não é divulgada em fonte oficial.',

  clima:
    'O clima é semiárido quente, típico da Caatinga do sudoeste baiano, com calor o ano inteiro, estação seca prolongada e chuvas concentradas no verão.',
  climaTreino:
    'Pelo calor constante, o treino ao ar livre rende mais no início da manhã e no fim da tarde; hidratação e proteção solar são essenciais, o que reforça o valor de um plano orientado por personal trainer.',

  mobilidade:
    'Guanambi é cortada pela BR-030, seu principal eixo rodoviário, que a conecta ao restante do sudoeste baiano e a Brasília, papel que sustenta sua função de entroncamento regional. A cidade conta ainda com aeroporto, ampliando o acesso ao território.',

  corridas: [
    {
      nome: 'Corridas de rua de Guanambi',
      descricao:
        'A cidade recebe provas de rua locais com percursos como 5 km e 10 km, organizadas em datas comemorativas e por entidades esportivas da região.',
    },
    {
      nome: 'Circuito regional do sudoeste baiano',
      descricao:
        'Guanambi integra o calendário de corridas do sudoeste da Bahia, que movimenta corredores de municípios vizinhos ao longo do ano.',
    },
  ],
  culturaEsportiva:
    'A corrida de rua tem público fiel em Guanambi, que treina nas avenidas e praças centrais nos horários mais amenos. O futebol e as modalidades de quadra também são populares, sustentando a cultura esportiva da cidade-polo.',
  academias:
    'A oferta de academias acompanha o crescimento da classe média, o público universitário e a economia ligada a comércio, saúde e energia eólica.',

  academiasProximas: [
    { nome: 'Equipamentos do Parque da Cidade', detalhe: 'academia ao ar livre gratuita, junto à pista de caminhada' },
    { nome: 'Academias de bairro do Centro', detalhe: 'musculação e funcional com bom custo-benefício' },
    { nome: 'Estrutura do Estádio Municipal', detalhe: 'pista usada para corrida e treinos orientados' },
  ],

  destaquesFitness: [
    'Polo regional de saúde e serviços do sudoeste baiano.',
    'Economia aquecida pela expansão da energia eólica.',
    'Público universitário e classe média em crescimento.',
    'Clima semiárido que favorece treino ao ar livre nos horários frescos.',
  ],

  precos: {
    avulsaMin: 45,
    avulsaMax: 110,
    mensalMin: 250,
    mensalMax: 700,
    onlineMin: 115,
    onlineMax: 350,
  },

  conclusao:
    'Polo do sudoeste baiano com economia diversificada e clima semiárido quente, Guanambi pede um treino bem planejado para aproveitar os horários mais frescos do dia. Um personal trainer ajuda a montar uma rotina segura e eficiente, ajustada ao calor e ao ritmo de quem vive na cidade.',

  faqsExtra: [
    {
      pergunta: 'Onde o personal costuma atender em Guanambi?',
      resposta:
        'Os pontos fortes são o Parque da Cidade — com pista de caminhada e academia ao ar livre gratuita —, as academias de musculação do Centro, o entorno do Estádio Municipal para treinos de corrida e o atendimento em casa, formato que cresce entre quem prefere privacidade. Como as distâncias são curtas, o deslocamento entre bairros não costuma pesar na agenda.',
    },
    {
      pergunta: 'Como treinar no calor do sertão de Guanambi?',
      resposta:
        'A regra local é aproveitar as janelas de temperatura: início da manhã, antes do sol forte, e fim de tarde, quando o ar seco do sertão baiano começa a ceder. Hidratação começa antes do treino — no semiárido a perda de líquido engana —, e nos meses mais quentes a musculação em ambiente coberto vira o plano principal, com o treino ao ar livre concentrado no amanhecer. Um personal ajusta o horário e a intensidade ao termômetro, sem quebrar a constância.',
    },
    {
      pergunta: 'Há acompanhamento em Guanambi para quem sente dores ou tem limitações?',
      resposta:
        'Há. O Montinho Personal, destacado pelo portal, tem cursos voltados ao treinamento de pessoas com dores e limitações musculoesqueléticas, além da vivência prática de mais de 20 anos de musculação. Para Guanambi, o formato é o acompanhamento online: treino adaptado à estrutura disponível (academia, casa ou o Parque da Cidade), vídeos de execução e ajustes contínuos. O trabalho é progressivo e sem promessa de cura — quadros clínicos pedem também médico ou fisioterapeuta.',
    },
  ],

  vizinhas: ['vitoria-da-conquista-ba', 'barreiras-ba'],

  fontes: [
    { nome: 'IBGE Cidades — Guanambi', url: 'https://cidades.ibge.gov.br/brasil/ba/guanambi/panorama' },
    { nome: 'Prefeitura de Guanambi', url: 'https://www.guanambi.ba.gov.br/' },
    { nome: 'Atlas Brasil — IDHM', url: 'https://www.atlasbrasil.org.br/' },
  ],
  atualizadoEm: '2026-07-28',
};
